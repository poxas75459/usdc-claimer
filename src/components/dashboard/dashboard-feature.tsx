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
    "6fp9JcsMUR1wk6RBJpwfvS1Q39t46j417WsQHcYbiGi2d8XkEk3LYtezABVsZEPwHEXsxkf3qf5ZgUaFS9Bkfdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BQa2oiRK3fHvRW4ZxvujhBatSA75fpnyXjyVhiD99dFfMuDQSgH7nmA8QVQwWTNgcvcLhciiUasyhavbqNncv2P",
  "key1": "La4AgGvGTT6fkN8h76Z3N7ogLFtdXWhcAKf9iBuVrxrNi3qmhRgLr69tmry5GixCkAUm86NQ1xjMFsxXXXmu2tg",
  "key2": "zmbDeq6QdPWDwrTkSswuE1twzBD2WgeuM46drCC3napWwcbCvz1ST91Pez3WWb5dj8gBbMUUBLgrSE1sTtxGVU6",
  "key3": "4V4u91dqDMHdWmoMAsdgReiyJzdcR3p6aYyPPgxPYyLSC63ANm4E84TYTtavUWkRXaUJknkGCtbjpeNieFGP8Lfa",
  "key4": "4knhY7jfjg9ahYPtTWiN9asxLFs4Fp4C3BnbPcpMJEnreDTDVZzor9k8JcsjQaZEdbt1z1ATn9vfLnr4z4LMHTgi",
  "key5": "36gP12BEcLLs83JMuUYAJo8oQmyiatDvt8G7v76W83Kn2EAyQYpMdESqAjYgae1EDn2XV1f6wVPecuEQ7RSjH7ZB",
  "key6": "iDzkJyahzcCf6mfnEjfa9t3BJh5DpstRYHvCV4iczbsjonJBimfNw8ZirGH56YRK7kxFPoMvyGJjqQyiHkymUoP",
  "key7": "3qaucquH1dYMzdcFsyZVUKoQGF5jRHtndiT4TtnvLAk5Jag34CfeyWGRVcRQEWzHR4DFtvBQieXYYa2CYaDxmtqq",
  "key8": "3xU81NveKE7FxoY5u49WK2srsRY2bVaTKev7DFW1qEg3Bbne9FW9SE2npCV5vgMzM8Rmatar2p6NZ89vmgZbtzJ9",
  "key9": "3FBqDJFDa5MbDDHJhs52BdHbCJi62Y26359TkYJSfqLfrgnfQxBoM3MSJB9JfP9SwbmPcEkvaREsZUdGDC1n3Nh3",
  "key10": "B683NaFeotSEZYcYJdGU1L23g6GxdZJ1igWBzMZgQFaqjduhE1AzqTo9TdPTXMmtUkdcjZ3VMeN4vZLof94G2nK",
  "key11": "NTuRmRWVyXq2PwDFJJR7xVGNcfhiZTQ8hZiH9mxYy3WXtPVCnoQSJQg5amgeQsm3sCtTNYuRLW1xwRBTx33RntH",
  "key12": "5So6zrT7Sw4eQEXMo6jy73rTQemwWFSEBxd2DzF2TUjBiiMFbAZr9bkPGxJvGqrmzV1WsHMNxyrzKCPskNFaysE2",
  "key13": "31RCqkoDM6tU4Hh8w6q1WCdBBbjHX3SLw79Ry9dEcevMbMuKYG4q9UXrVCXmp26vYeaN6nMmo2xERpp9KcWdBaht",
  "key14": "2HNZquWuowVKpJvghk15WvSMco6XaetwicGBu9kfotj6NTVnMctcYKPPrXM5rAAfTpYxYZ9iscpzZCuPhUp1X23J",
  "key15": "67gwMPL2d2wnroTF6jWbHw2jLyF6P5ZgBCawghUQWLMSxZKzWQ5L58eFPtwFxjMpDM3sx8KuDjFFYriTjmHa1bi4",
  "key16": "XkYfrsBxx7ZTeFdCQArQ5Q9pLP6THSnmJV86eHYn2N1hyKLWvYFfC2AWVn9eeEwrFsvbzvoJXdw36yYoxtn2BCm",
  "key17": "5hsaGjuCtB78ehv4cLHYdSCNuwDrETbYBYXkyiUuUQM7RZS6qVZtQC4z4ctmih98xjPTuN9kzZuV5FNVUqckdTX7",
  "key18": "rfKrX6aafXk47WK3G9sv1SkwAeBtSLce8mxFbbwomDidLWVzqiDqLAtWpXRoyhFCfY54Nd8g9hXBv5Vqv5LbdFd",
  "key19": "31pAzunMbL3UtvQdJRhhMgtdmmx71VN7HYamYSfqmDVxLjbMZze4FXLZ4mHHsmAf4B3raXVTxXhLBBiWyZA87ax",
  "key20": "3ZxMjLqb5hmCRGgZsQeuvpGYM8wsUTV3UULgvX9EMRSd7aHEYscM5ysv9o3CBpUUWnGm2qziqTsuHR33GFhcYU14",
  "key21": "5TL1TzQnmz38qFGikp6xqekDS7F6DNjd9JPJ9LvJrxdCFxN4Zq4PgMvZGeNqL3Y5CoLKhhXqzkc5zuLDNU9uJDg6",
  "key22": "5WGAg4iHeJnePPSpvzUXSnzNewPeCRkXeoPKr1rS1xHpsQRSjVLuiRiEGA5mExjqJhEd4UGGCNtZRHc2Y9544sqG",
  "key23": "3JmihGU57Gh1b8xEpNA2jSMU9hv1kn6pknfUQrMNnfR4a7mY8KbevAMbkAdQ8hdXAY8WSqnJM36yHNiuNz6Vc7xC",
  "key24": "2bVXqja3PbR9dqE6T4qAWVdaSwARJzAKgTyrUFuC8MPkLr5PwP8bZ8WCg63QDFMTC5b3B3eCJhbEQACmFsy1699C",
  "key25": "5ws7Rp5gw3U58B6S2CPHvZ8ZBAdLBjA4wTvSg1m3JbrZKZrmsqa3NcXKAzZMorKKQMv3MSkJ8hPvai8Y12CmBE8e",
  "key26": "2Z1zLtFMsQUjP9juiKiABAzzeQCnzJ8Bm4GpUGU7L7SLTahbCTcSAiFNWj2htFezZYPF7e495hjFbNFGKTw7pCui",
  "key27": "4fHovCory6s56bigbxw2CT34BVqEWo4Kd4fgs29yYRR4TPvdybzgAHajmVwgAT5LiFnGmmzGtk9REWz6ea37UJUr",
  "key28": "2zSAPcQvFt2VXX5892tYKfEmVbSGBKo71hhXGnyQjU1Hi3RWTKcqLYyynZSPjjxtftk8YkFicwS8p6kiRibNk5wa",
  "key29": "6xcsGGWTM52Dsh3NEKJcFZjonwGWd7M9nQhJ8BGUM7PYEhuYXAV5qgGjFJx2DkMuUKzbLR9ZzEfN26ZUu7YKNpr",
  "key30": "2LLg5VRWeMv8exB5TKE7Nbyq7b1fNRRJRcqJAMUh2nYJxFBUKJkmgSiSvuoBoQXrdvkVsQ58BZGs6gzYfLdm6bX7",
  "key31": "kvBZYZSBod5rCs3CY8Lb3pVRJwsDP9H1j1WxxrbWSGUpAGaHK1RLhGZUxXF1vyDtnaPQEDuKGxikRqXSX3EK25Q",
  "key32": "3pRBrJSduJLKisGz8Ytij4EhRzWyhBp8sHtWUvDhzjWRWfDPALxWCCtZbwdkgcUPrWAYsPc9E7C9KehpamVEGSgp",
  "key33": "4QmKMfjZtQhpy8TY8jAvXaYZn71ut9ht56sqkDvfJBhkN1o1JhGK6wgpjtmjmkSDvuoqG2tfwRiJAu5h8oPgLjtg",
  "key34": "2354GrPfVUWidhFyisCvtXARgzJvKGsAV1gGrd4ZdZHzEsGUPwEtt4b8NWahukWo36u2DL4fYUDpeNhgGGtwEQeN",
  "key35": "CE6TyLDsc4U9xfCDa5X7n5r4r3CExTZvLwX24V4iJvu5mynTKXbYhTUQV6Mu5cgAsXiGYix5NEw72gogsFdHEPq",
  "key36": "5RA6D1AHeaGkbjF2T5DUTKn4U9z7QYALVgt3QprARpLGUTbjSmFjAF9kUkmp21x8MEcKYcH56nT4AeTU4SrTEhcd",
  "key37": "4p85Uk9NNXmSJCYnDRAhDLMzhxZQ2QadASjkRrRDLkMway2RcAdaL7FPRK4eREuDsTbSAkZjiNuj67tkueV3d2p",
  "key38": "ykJZ26yo8Uaz1huonQJUXWpNbx5JARyYkfMTtdZuANNDATC5LtmVe3b7yoEvvSzQBVFr6SQxqYoW1YJqMdHVubj",
  "key39": "2zBasokDbxHGcQjbRWW7NwMi7r4ydupR74pfustvCaRhuvwJZ3eg1mwdkkYRrEbWcjYMSY4GLCpFGuduwnKzsrvr",
  "key40": "3Kfp1buj6zuh4VMEV2V5ANaWHLNukHnZFGJVA1MwiCBXPUWY4CnDYSjXyJpSRdSLhNHLewFtXMp1AEjeppP8hws9",
  "key41": "5D78n5aShmCtqyXmwTGrimZjSF14cFo7pwy3mhJXRW93Am2KF2ftKaZrwgZXKPs8zk3grcZrqde1rBPFRnBMG5qS"
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
