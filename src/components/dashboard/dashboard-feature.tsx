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
    "3BXrbswRB3H2xfwXk7ZEnCuxxSMvUvvHZgNS6dxCWb2f8CFFPjMhmoLHLS19p2caxqc3DTHayUFsDPXcPuneb1tn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26kmuDgVwWGzgjCLH4C5G1mUjMeSeN1FGGtTrem2uhVmrpMwyY7JkJ89bcSbHJVJWFNAX3eP42x5dD1qYu1eSruA",
  "key1": "3miBqnnskVAFgUarjekMGuAKAd9RedzZ2EHMrf9QneBszhEWAnt8iJYVdU6QGhx3qvR1NwepyJUaQrzmxaN2WgqP",
  "key2": "3V7dYdVkVPXtoMyDuiuw9A8esb6Fdmkm7UGUQMMYUCMY7wBLSwDmJBdd4xmCT75DpWLWh3LQ9ybDZzF7cBEqTYgG",
  "key3": "iSS5amMGqLJ1H7sbBS43v5GQy8MoiA435GvWpwh1Cd9WMGdxLegYRzV2j3jYYS6CkcibqkGr15Afz1N3gi9a5C9",
  "key4": "mKtCK7oAbuJz6JwGFEp5X6M7XkAbVNtwHQo8oBy4FwXfozbvWZQdFMhWKJBwVfZKUBQWS8wQySN564JZJ4iPCRu",
  "key5": "22P2ng1y4HtEou7H8QNbjTSBxnAYo19ZY3hp2MwdmKWHvQh2iQTVS12Z1Rw4KJEeopETwWoS76ALD9MWvYMAWuRs",
  "key6": "4aRQ6zpXYYsPSevqF3w1yJigSyrn3rrhPF63UA2juTYwaVRnmx387HCmMU2wdA9AiVbJ9rpRYuosx3JxESmimGpA",
  "key7": "3F53gytbWzAs64gxxe8AMJeakUtanNUpza9VTQeJgTNDwvD96RjykooDRgz86dV59rQUU2UE6Sab9iPwqG8MF6ET",
  "key8": "3bkM5Zd8gdELq55dhoBwcrqA9jtqfJXBtHnoQstqjHDNp35uTAoEQV4H7CiYVmW8VP42xGENFkFmC1Sia1USfxTT",
  "key9": "3k6Qf32ChoxYnLsaPCCpsdztL26DXubCNUi5cCdWJtu7NVh58NGS3NdKeYrnSZVChiV8yPG4mvY9x1yFcZKqqpQC",
  "key10": "26bwhzphoUTrTAQDRUyFcmMnkZCd12jMeCVK6tpKCfG21AE2zFvkGoo9SPnUw6sytN1qv6pzkN19dqmgxfj7W2aw",
  "key11": "2quMW5RMH7W3qdEqXpAooz8ENumF162AftfKvd2BdzgPZ4yLyNRrQJYAnXHwwcLDo2SiCRGyF563sZcjF1UEt8PJ",
  "key12": "32sQ8bYBwU69sM4kPA76E61H3R2m5eLtjoZzmUf5Hzwx2Xh1yvLYPVoUZRBPhF74rQRMYtubqWdHjpJ9GUEvNXpk",
  "key13": "4FLvSTwQEuos7RyQd668c1WaU3JgssqNZ7fBVtsjLLZywzUkEYQRu74RpwRNkyKAe6Wm2FQ1T5snZHDMVTZEA17",
  "key14": "2Pf1pJtBVZaQjnAGwwSL9fPxqhoSjg7xeDFyQ9XYWf6vjmxhFM7X2rW5FRaP1VUb5oj6NGAGa7qQ2K41MdMSNXrU",
  "key15": "5UqEabxUpY3PyTN9Q2NbzYt3QGzbJ1UuhReQkDU1A84hdxoq9ryiy2uuaU2b34ShogJ2ZkjwgEeyV2aeZgcSBgm9",
  "key16": "29SmsqJaBkises15DehsAYKA3LFwATYmyqfHEzjc1DEQb5geUqTf8fUxsPNLZCGWXVkQbpGAyntFLG3Fb52dbo1K",
  "key17": "9bKCA51UxLZK3AwqXYZ7sXPMBraWNeLCHBBozrArMKy8qmkqdfsJdFHDxuTHd3cA5ik6t4dNWLAt1wiNadnNDw7",
  "key18": "4kJGUmm4LMRRkQxHktmFyo4bAp7Ksem2B6rgKnv76FF5D9bGhkqLyhHFuKzS9HvKRVpcBMJC8JQsAjRA5eJn3pMy",
  "key19": "4svE7J6E61owN6zNKGRCchr2Gagean2k1qdQ5fViK7whMikmPQ3S5pkHdoCWeYrW6Xr3Y4BQgmqgNEo99bRDpVW7",
  "key20": "3dWVzc7PnCngyeJjqgLeDuU7hsyjAWeTXGsZRw28kKZVXvnKZ9Gmk7mSpjqG9qCQ4G75H5g17LGg53sXnjwn8rR6",
  "key21": "5kY6UnGtZMoUUm5HiDwGGZnsGk5PxKv22U22HAXPZhKCKGDj7jgQvWYknWhjpEG1HrPFW9P9PjkAkhmK32BwfS25",
  "key22": "53m5ev6sTvdArinBstbgtfaq8YB7khSdH1pZGGRquosYVRWyP2iVo2ihwYEAVs3regkne7m9RX3fFt4gpZ8JUnb6",
  "key23": "2RMVcguCMdTbVqosJH2nY9wtEbMqu81kNJS6pw6QWrrTueer9CzTehv8YaNsMg5K4Gmq7ZQ3necV1gbCJriWBr3Z",
  "key24": "2po7tyUd8aXi7SELyBHGLWxdhskH5qL258Y4cFzckRGLVpqh9DJArCKNVoexFQsahkoKffcXD64kFztPe3hsrEaL",
  "key25": "5em3LdRSDEbnYc2sHxRYnMj6k3SFEMB7otY45erxy1wmqH6rZX7CWAx4jHKqwCsGKAkCpmadw2LFHzJLR3eoZcTg",
  "key26": "662yFtbHHeQ4iuaTrGkbYooPMwUMSjNnfr1iRZsgya4YDxkc6wAej12F6oWpUTxsLeRcUgVgDygwsRGDspaiHYE4",
  "key27": "4GCSVEUFBNm5vK9fAxNnasrvHdvge8TuQ6SRMVsHkaoERkmmWAD3zkHkaJXNm9GB9NRoK2tWMaGjYjzRvqjBbfrf",
  "key28": "GtZAtrGmumfHzcey4Fhyc9t3F3GrfwVQLQwpmJwEmbLgTNTpjYr1JLzcLZMeJNNLZrywtMxapHsyUbPnBPAXfyd",
  "key29": "ERcT5G98vXNHAmZ8gVqpA18VCTxbs7w8uW4Djeua1Ymm55CNsSggtCsh8YJ8wNDZmbsandrnQzMGLbcpShJ3HyF",
  "key30": "34fESgJS56dSExZRaGPF14zjHZGUgaVkEQakzpcmeUZHX6VzCQVMWh1pSD736ywkQSDsdjHkeNTvCMHEe56d8iRe",
  "key31": "5iHGkHN2P9KhnWHRWFFWU7g2wYM8J5CN9bFBwaVJC7dPEDaUMwpscUwVtZpwGv1L8MTvfitWFr93uhFYmYTVqmjb",
  "key32": "4KiB9RKw5ywahqj5WeZ63GdJF2DzuccWmChsTJMUhc4Lz632AdBxycLSMS3Pw1QPsDe7upeUCTwWtrCKrYu8bNFL"
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
