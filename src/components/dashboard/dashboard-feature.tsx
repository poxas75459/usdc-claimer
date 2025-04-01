/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2XwLqqS1dLaBdGBVYA7jjN5n1FZ8XCCGqgVbvokCuzZ9JWWTsRTvX6ZPrG1wajuoueNqhxXeL62XvUENtv2JUztc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52EU6pwuHizPh9178S25tGtuPZ4TFr83JUE3cpmEgVq8buF93rVgiiSQbFydFAW6fpysKWCW9AKaHubAJ1DNtTmV",
  "key1": "493KW3rgXw9deM3L1TADctQ2eBL2JmamfaNyWyRsFk5AaWcqTbURJco5HCnbegY8mjyHS3kL9PZx6Huh9gfHm2NA",
  "key2": "3zp9zGrDHXU6uoAnk5gx4j7i5m5PhkHkrE5cZeqkg6h4UVDLe2mz667Sg8UZT5MKCVCN7fPnEwC5ucduDFRAqj54",
  "key3": "MFUpMsL7T3AXCfp6ZwsQK15ATQjs8SQGz4fkR5n9qNEEpsCqM7MTinnq5TmzXXvycmQ347Ry8BKJG99JyCvxVKn",
  "key4": "2Dz89z5cKo2G4ynHeGp8U6KCiRfKnzMpsBKL7WyBRST4ECnXY2L7ensTsXed8YDmMMMePwCQWvw1yRobrc4jdubg",
  "key5": "4YjbFLnLE5uQktR4oV3TU8ofd947S2dsxGo4LqhorUnQZbuKj4ev3ZY8wFQYoi7vek4C9rsjU5pSihZ1Q2g5j4E6",
  "key6": "3W5iyZfoehu9VqhJ2M3wEn2JhSW8nUiZTb35x39MGboSkTvFoPrrBZUVCNKiFH3kAAy49GyKUSuayUarLzjabBvD",
  "key7": "5QM8WaKPQjBQVMTQVSjBnGcpSZnqEFaQ9zoWGsoomcHcGNavbsQja6ViifSWGhsRUT9W27W6Rvb6G7vipzEijzsY",
  "key8": "5KAXMisJDGzQUbXkHF4QQegkRiKNQX4CZHQQEjJgwNL58rmBwCZmDr6G8fFvVSC2J2ojZ945qX24Mba457FmAMZb",
  "key9": "3xB3fGMZ1cLRUzBCHBpC3BFUiE8ieJL3GEte6eTE2n49pakE4Ctd2cxmuJJDZBb1uhUfVJQ2ngNTt7CVetTFLvqK",
  "key10": "5fFQQHACNGTHPCNxVGVSx8gh8gE1mnLZ7XQLM2oUow3MZieYGTBPF7Fgd15EJLHA9xFQU28CmfChhy7zFswLQGWf",
  "key11": "4AMJX9guaap89qwhgYSZLWtwGHfhmUhcibjrhmuXSqhZjsZuRyP5aJ5j6yr4YS9WoV9NTcoQeHTJE8JVKT7UxDkR",
  "key12": "3Pmjo1s1TBzda18niyUnSu936vX9Nxeku77DhV9GnSz5GFAsM65RtwoUJrsEXmSXYum6mgmaXdMgCzuKjefbDhvD",
  "key13": "dmRMqHDsnnc57HsyUYk2siC3cb9B2x6cp4tPC3Yds87x85BCFMsKXhf3zL6Lca787R2fKC7ZWHqSaMcpviUaVGk",
  "key14": "33yEqnbdrECPzpxr3Kcx8w5YNRGcWNSPEsThQrhUsfJujhLDN7YHbQBjYFD6D7iDGrjwEhgNBaU7uvWqWLwr7WER",
  "key15": "e7maa6bUBRb6JEosnAG3jPXSLRdnGnSAkgheVNM5CoZ9h9Gv346njKrUhknXv9qJUzZea8cCfziC86CpVw7De3E",
  "key16": "2Z8ZMmpEkG4XshU8kDFFMSPzGAQ4388PPu56N4YaeQ3ddXKYHHr9cQoF3994X6pPuJBRx38VmTi1XT2DweSDMu2W",
  "key17": "3gb4pksmFRQkPMocyak4ZjZrpZLvobj7zhEGmqRqbkSvay8x9FkfpMVE7s4vuS3svvyh1SbL6zadDgC1dnJ3JDBP",
  "key18": "piZp1FRjGrCUV2bbsh35xD7kF4VL46HT9nzB6UK5Rr8u2HM539ZRME4Wc9iEpCTyY6LTofdA68i3DEXaiMrUA7r",
  "key19": "QhYgE8y5gegwdMRC6DanaAmWBMKUS5RAeP6Gcx7MtxY6GyxoPZhX8BXXPALSg5q7fufLYfmcCDhDqMmGwtyQurw",
  "key20": "3HU75N3Q6eMqXo2rMFCi7dgYP8zRHSEXeeMgMe6zCjBEApU2J7E4Y6Kyq8nGpzZCFRLQ2PhtwUbBGefjaTxVWNsp",
  "key21": "2TzngY3tJKAFz3TxVxWDxGuyq5jaaZ9Kog1y5gZmabJnBsnXokJadmBqrDhsAXdM4bPXFgXmVLc3SQYUFBLmEDmV",
  "key22": "5r9ceNUoMA6QkYQ35BD9F6iqoBtEfBUavoDNNXg23pg6py2uCsNkjVVPHf9bdTbwPtHsdJPVgv77HDh3WVnt77ET",
  "key23": "3Hz7PyiavTM42o6TBQSR3Y7UpxDon56fv7moSdEx582cB7qhJTmSEP7JQJufjJg8vReUP8s9KgCcWm6U4guA4Ri8",
  "key24": "2AFpeiiUKBKnDSuMwFZJPoK9B8TWxV6ZwXqfXYBzhA8XYZ77hTygZGEhuuuCSNsmhBGoCWncNwcp2nWBL1nw8KFX",
  "key25": "3PqYPmKQD2pnjt7ddM8jE8tkxBdSRHj7wseL7wpPnj8P2r6jpCZRvucMDaFG2iTdbTLRRp5yHwDZTbshYzoMuwhH",
  "key26": "4D84bB5KNqU9q3gP1moyjGq4tsq7WqbVJmVSvv6xNsYGqvbDEM7vkcaB7CM6AsWfFUQjrNYXLFpLfcRS2yZopnuy",
  "key27": "5GCdZdCjcSzBRaX2qZ76zTEZJUaUr6b9rN4zE3shwbEzPKH1GM5pyKA1GACAz17kvs1G6Vt6EiJG4yAA1UNmMjkh",
  "key28": "24soFDPPakPQQXEdaeFxbwkm2tbjS7zaMr8Fc58jnd7RjtbqyExSKoXPDreubJHjCUvVwbeNtdhU15FpMRrxL7Cy",
  "key29": "3Y65jrjkVm1uMqJmbMu3ZzbvVXCerCFZHYuw2ZztMqaxVfsutZ1esJNHS5ZxtvP6h6VHY2aXTVtNPFoNn6ymwLC7",
  "key30": "2DXAtoCodh5X7hduHA7nHdNzkQq3wbpSnLcjXHsAtRE5mkUN5Hce8GhJUgmxcw71Jb3YzvbhuRenjbF12pQjKWnu",
  "key31": "K7mD5G9GVgef2EzfHhSfYJc5v5tp2cNaVwUSdFQ3bsVXzDSj7UNdkZKTKbcM1MqWrsnU5shPc5fdKYobqAsZ9va",
  "key32": "3gB69BRXH56iRj3UF6YtCoeLmtrLiqv42RapNJ1Y5XGhHgSRhUM7BaVUbL6J5j3Etbrp8n5wEqKRqKvKdzTfU1VJ",
  "key33": "edusmHyzgQK7ddnY8LV3XJzPsziCezmxLfKJKHmRmncRxPcTsTw133hQ4GqdPQoNsNL6GUGW3aHZmqLuPk2pfgC",
  "key34": "3FjdGjqxAB5Gzc5G7tLG6yusSTd4DN3vZhCBDnYKxWCTMHDmXbAk9NsLAznLfFTWB8wRgCJxoethvTxpyVqaMjXM",
  "key35": "f3ya8z6iRQRD4HRoCgaGvyFxZYFheXgm9SyKTf88YtQ5UGU1TuoyxWBy6rW2NBi88jHj7jAKsppX7roDVFseY8V",
  "key36": "2NugJabg3Ny5QKqHcSsiUiMY5Z1zUqqZ1KDHRH3y3rsZEyzoxNWoFfxjz4LUTXLopHfTnMtxTLoAhmTnRmYPe6B1",
  "key37": "2vbb3P8RR7Fmkh9U9zy6JvtbizUfz7nPvGfYdouDyyXhLrxNPhf5PzeVZiNvpHFt6NZCjrLFLY9howW3RsXjJVAt",
  "key38": "32b3p5axd4Q79rSxz37sn1WhcSrdXJpnBBaP1DwTedesA4rE426QazfvMwa8Hi5sYJkLf1yKXd2VuaSAFozcKR91",
  "key39": "8UtNYWeb52Uk3DNiDTBomfDGUm9dZPZSvJVsi7DuQWcSGQRFqwa7WpiF4qLs84VphVRMWg4sj1SMnuwzeQwjXhL",
  "key40": "ERXnLhh1QmKtR843JkBKEW9U9p9urWPZmacYh6MMiC6cUJuES8z9aFVVu6D5YkXuVFVy4TEm56Phsm52Eu5Sqqx",
  "key41": "2uCenVAomrHTLPBUJnJz9AKCEVGneZCaR9ia7cZqKtPXFZ7dtdHaVGr3u2DGgpp8REaK8Zixngtt7aJN7Yk5sYL6",
  "key42": "2y1j74ceEsmcfSs9Y7VAsAy6mKyAmJUPqkEPDL15Cgfvkv5HJUgnQHYongcNFUb6haWDkHNeuRwxfoinhVUCCYZB",
  "key43": "tDJmsRtWwbya6i5C7J9fuqGCtYFWDpbdbTFLSS4cSzfitmkGEJ1Ac2tmNSj9BT4m34GEy2ESqMqQ1xPtCvPVcD9",
  "key44": "4wCt34EECD83GFYT9o14S9mNM5dNpR4en4ih7e7ae15cFKPgpjmemmDqV2cpEWWFzRTnPFsNM2gobpB3D4D33tkv"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
