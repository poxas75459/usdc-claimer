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
    "4BDKqgfPMFmsdESWzXq8WyNCVzo3EZyxhT3xHagzS3stiFx92o2bxYv8ETKfkw7ud2RDkBKQ3ado5MKvNGhgtuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59tLX5XY1mbwKDuaVP9rrdp9jvAn6rpRpj42WcixQo4BvpZkBvzbFZbWdXAQfbQJvsSUPZN8XRKiJrqnGco66rbN",
  "key1": "3u2BxYBpcVqRnA7pZuusLruGuKGgZ5sPBJRigdZLqyAFvBEdprhizZvUy73KuwfjvG2WE2oDbB1HwHXokWETVpA1",
  "key2": "3eHGZJsgSE7nPUHa9pLw7wgutDY9A2yFjmtxEjiPUtKVCt2x45qZHGUGhR9aDP3d3dwLeFznGer4A7QpHHKMK9r",
  "key3": "2PjDif1btu5ewTQ2QLcA2g5Qx1vLJhBzpzsi1Agf54Gg7m7f1TvTD4pPWwnamxvNyRchjp36A2FT7DSSZ8NVtKyG",
  "key4": "5BFgt8UeDHYvtmKgwYz7GTwoMKuYZU9toWAsFpBrsWXERrFgaW3TdhfXbiPwpv5xNPm4yiad91MHHB9oBfeeGyuU",
  "key5": "2gWhbaopj9zkW5A9U2LQhj5sWzbn215bwEV9Fh4X87bHbDsi5SF3zT9Yhx6EHiRyDhvfyucEuQ5TBBaRxqxj4fcp",
  "key6": "5N5Db5m5FtwFD9Uo7iN5Ab7kESU7ReQCbgQxNSZuNRMgohJiCrEFRogCP6MncumXzJvWwnML6QeUPfshdxMQ2rv6",
  "key7": "3pyJ2f2pWFzoKK1rVNtKjxD9XU4WoqAcEiREcr34HKtCG79BatzHTqeFSCmLyi5eJ62Wa4wZECaQxH66zUX3gsRq",
  "key8": "3MQChmarzY2KsXcYVPQQZYVkZjSxa3LV6UMsGYTeCQVNwa3QAWxasV8Ssvj4auwWhsGcEnUn1ynPu8w4ENcf62bE",
  "key9": "2YXNLrqm6s4CCf323DKqw5Yx1GMjL3CnBo3BjxU99kvVhZwfm9y25gELk3RwFzHunwTcmAcmfpzd5Tw3xYn45Eu9",
  "key10": "5vX7qgQ8cnvJQaxvS672nEV6vpRbudgcyvZ5HEnZjDDr2vyTjspvS7qiUXnmd1LzdSz7PBgMvcZfgQKFoEzq1CLF",
  "key11": "2WzXxjKcEPdPamxzz93JMejUnRb2PbbFhR713AZiks12RMprFD9QVZme3bw64Hch7jzduX9QTNFvQDKAokkCJpWx",
  "key12": "4yM62PhgHkj9LQTjBw3DXvqRZ82WEgtFBHPNtduZQTYieFn3dP7z3TNikz7qNL6A2N1z36vv7dn5TuwfALj9z6ro",
  "key13": "5MG7rHJvUTwNWBXqfEQTYgWqxvzyp91mjNW7N9KUCUP1pjNKLG3ki8xBSmiToxB8g4i6gA6LEn1nZTs4FVusHkN",
  "key14": "2Cn4y1bTrJy1JR1WBjV7dZodgeW585cBgngSy4VK865m1NEhUyszqZWPuQyXnTcEJpgAL2v4op7Pdi6Vds5qmvHh",
  "key15": "w1ph9ppMibxGXzb9W2LYUvPeeJhHkNP329VDrX7kBGS7sPRPBSXSNHY8fcPigvUaLpds2DyR3ht44eWZVKHQqWn",
  "key16": "tpdYWzULAuxsUMidn3rYFuqynTodrggXBdRthFGxX4jXWFFkKZ7PzsdSi3ocGMTVW5LQw92PeeySCHxnSSu9avS",
  "key17": "ELaABxGqhgo73cwaZq7KYCZfWPB4tkpLk6ymfeJVZA52nDuEr3QwazixnEL9d8cTt2ijjXmBGbyHg3JnUW8NxeA",
  "key18": "4TVNdZrFnTzmGbqai17uPXaG2b9ZwNfd4U98FAgAUHij3KK1sCyMkyKmWZKR4uCFnSHwtfjEFSYNvCvWtZaAtNJ2",
  "key19": "4pDmduSjKtAdtQ5VWusTEXAzqpAvzbxMF78jPNbbfbSz6GqvLWAsVa4eXkW7zqsDQXPm7R3ceEx4wopoh3cWhD6i",
  "key20": "4RbfGChBGF4a2eXe7Xy8bAhaTnqNxHa5B5f2bo5yNJ7xamA83Km6degf2uKGjp3VbdZHFvWMe1xfZLpLuLPTyKSj",
  "key21": "4UxxNR8fqB5R4oUwzHdzj7ahTBBvsKCdVhNWsbyQ2WTpAbj8PtQyTdnUsaetjuJEUgr7eTnndTHNne79k4T1NujT",
  "key22": "4skcsjgK6usu3kAsNGTbEjx46nGoyJk6UtB7UGCo1863Kq5bQhxzUZk3qtXBbmSbkSxoLoavRmWmxTLRBt4kpdJy",
  "key23": "35kw6G8irw8SVNaEbQ51NbEz8TMhoJXXqux8EuTPbKniB6zjsdT15tBWfzpSULECRuLv9xoGWzXsWpBMXZGpbydD",
  "key24": "3rREL12GUK7QCyyZiwv1xwTnNhGt8KSZpiWt9jCxsavbhUbh6ssgSSaCZqG73P5mApgebBgDLKHMLK4jbJgbE1k7",
  "key25": "2HSG6UzVkw1TxDYcZP7L1hVShRNVqRz3tb4eW2G4ysnGN239QiLBoH4Gaq7QMRo16ix6KAkqRXB4zsjuKuYHXcbh",
  "key26": "4unHYpx97aBSBpFXpwmz8DZKgMhjEZsqtPZQTEwfBifsPBnaKgZJHwnvvm15EKQtDvYuRtmpceAEFgVPT4797TYg",
  "key27": "2yMrAV5K7JLKqDk4psDsbuZR6sGJkMzqRy83FqkDgocGqbbm2MxpMrLqhjQVmjbwvL8vm8MdmjomrB41BQZH2ysm",
  "key28": "HXN15F98AH76ZNuCbyPGjKPeQS7Ca6wRPKwAnGhdRRpVQ5iGXwaZvuKQgbLBAoWKAYGQcy7DvbLZzQg1fMoEJr8",
  "key29": "2VLmjb1MMoagPEEkuioN3XTZL87KVwsjpJJGPHDwnyh2bsSRA5h1FtUuzTQbuTM2DuFBiAi1N3PearPz2UfrcqZK",
  "key30": "2b2GoTNcwADqFP4jr2UWdQ7JujxgcbCZUXGKRNh4Bvw5ib8Ag9voTnLco96oZ2XXejCZw2MYCLkJjYGyfpgLeoC2",
  "key31": "5YfKSsAgMKJqKoWQzmY4Hby8RcfPBtETAbuDJjtm51n1nJzX9fsuydE6Ap9P1xKsjHQfKztReQjiBSF7qojbZaLb",
  "key32": "33zRhDmVtriXWeXdX4fngZuvfNs7nPaQgefbPmX5NGA7xpzRM3oZUcJ9u4sQBbdFMt75aCo67g4dKNi6isWrHdwf",
  "key33": "3Zq5viiUpLwhVWi82r3s3aYTRFMkk6eUxRSgC7JCFmfx345RrnURfaAor2KvLxG5mWgtzrgkWKxTKPSCmN32zASY",
  "key34": "2AdPLx18KG1mpZarPZVGj5toYS8YyDnZLVSbD5YqhJcm1psuR9V8M9JxkoxqBGGH3BaniEfSxytNNmGY9cRdYdzk"
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
