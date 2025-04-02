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
    "567QBmgFNWUuDL7c6VYx7S2kGnavAfmQnbPF2YkoPH445TrrpxFKDHdnNWUkk7iNQangZ5VKQytse56TsMNz3qEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4umrxz6gygFySdSN2A3Cz7iVyPjvQAHJ8qsKn1SyXzboU3Hhj2ATh7BT1rujwD1Wo4k8pPhSArLHASTCspdZdDXe",
  "key1": "5Hc3EKEuoCntn9f99QnYKAHzX2hcqAxo8v9e1pqSvy94e23k4z4fwoon55eebcmxc65kZgS4tgYn7mCzoShfhsAU",
  "key2": "4gvQPVbWoFkFmCyJuavwBJPzKmPp4XqZY3Hyyxyzua2aWD3mXdhD7bJNxhVvRn3oWcyDhYM6J2H3p1GMKVW1Br3U",
  "key3": "3de2Pt71Y4iA8qvsAE3925xEfVgeysos3LX8F3DqRBM4XBzF11e7HudQtvRJgTkgYDg2Nd2tfoUoUshDE66cybQy",
  "key4": "4LTictMozDYyp5dyqPtcNAhguq51FjfaQvx1n4KTiSbwhgLwsLffaUFb4xMnHjhJ2A8hoSMF9ete5q8MkAt3u4vK",
  "key5": "3iuK1hqYaoJwa24wWDojHhQb2YpCKVy4gTg5zQ2BN6SkHoTEYDhAUnC7ipdG9N8bSB4rdo5qAybrhc8aASn3BUtQ",
  "key6": "eWVjtmgiNunU1oEZtiTSuU6dS3SCX3ApkU65YPoiBEdTxH88enzB735R52FE9en4uj8imbN1Z6icscGk94gZzVU",
  "key7": "5tCnz9nyNYr3izkLUMCPijm44B2wqdPnLR8cdaASmkAk8xjYwfsCR15W2EE8p5johCQb68SgdU2C3VY8deahfL41",
  "key8": "2XUdydqgAhZamerSLwjbZosNhJEUUUiUyrhBMzvq4UUZH9H4qSNJiorFH5PkqFAYP6NVJsCwfYUEpPjTPRKSPgwy",
  "key9": "SstcfzNrXnJdKGAPUKo5Y1nKpNicSYNjNBZVWzGfGEWQMD7uoKTqeFtwDWs7zQV2oRWxcpRPfvRZKgSFdymGUCi",
  "key10": "qsiR8Mv3BdBateDXs8gWi2Yg4TqtZ27tEGMtVKAufKZVeV4gmQcn8ipMguYf9Vvmicabg6QstETJnX264Lgz4nb",
  "key11": "2eYg3gqrsq2qEwMVbj6K8Da98jUJsGfpcSrLGZRqHtBtbHDY837QRyPUUvyK5M7xz2xL6zHVxGgZxfFdaggyAVbi",
  "key12": "2MN6jheAmCd6E7HcqirF8qBEpRNfj5mxUXC6oZG5fGSj2ygwnnvkVNFRAi2YavKoKpG5kvybUEQ7a5aosb5zK9zN",
  "key13": "ee54fWtjUuU3VgMc7c4saLQtHzp5CtFMi9m7rb7qCq1mbxgyi3Mgwgu22EAt8mGpRyDxGtYS5irke2o8t2h1zBy",
  "key14": "64G151niA2u1FZYPUGSH3LefsbtdPt377KZjLnspNMmvLi9jyUAs5euGt4Ud1gYDhzCR3Spt1XuvHgYRPPXYCHns",
  "key15": "3Pp9m1SYJzQomVeb7ns3oRKGUohb7uCtWJB9eAiZeaZQH5SH3JmvZCBwoS7g7AMwXmWZDiaBUR9sKvJgQqUm1BTY",
  "key16": "4ydUkVSJF9vuhAoyJytkGifVPgFZTDNdp6EjwVurDrhvuWbNpt7Lv1j23zf8cLG1ShyraMDYUqW7B2kk3UsJBq2P",
  "key17": "28PtMLs616w6gGbuPV1Nqtdm3WxqsPTdFam6embmshTPYhdUtMsEJZpyXuLnmCPXJRmYkBwuUPo8xbCqAEFuUwnB",
  "key18": "57GmwCdrRBvvYrgrTd2MawxjvkT9oiqgXRdXqVrhjiLPy5D3nMvoZx22zfSpJSMFynDJB28uaFQkbLXt1J8JdUMc",
  "key19": "2zjsYiZ26dT5DLV6NWakxdDagBtjKX8WPSaGcd2u9zCic8uw8pqwtq9gxcZMvp43m91HDEwnokYiAMUBew3hp7DM",
  "key20": "5izRDTzjNLdsTyGgjqtwdUxcasydPbKAFkYgCV1UDkKLvb2vfnQoBCw7Na4UNeYLqhNdsFieGHw2nqQZpa7LiJef",
  "key21": "C9GAz4DrSR6e7ZFjjm2qfBxxr2pJsm8VKjHsx3DMTHbp1Gk4iCtWQh62bkK6upPLciHnbn5cFongqGRP7e6goXs",
  "key22": "3NEmJi2wd4ApbvcudV4tP421gK8w1uVaJTNSCePE6f8qZMRuHc3LAjztLxKJqJmHBgA1ARUEZapmqswGH1nWcPC3",
  "key23": "41JJj9PS9Aum26aqzVUMGXkzeN3A3JgeC3NqxngMX6eojeZRo5ukugcYMbQJCj2fWz8Ftzd2rdFpRKosbHsYWAk7",
  "key24": "4pZUrZwzYGsZ3e3puvskdzXvoz8CyLNrGtGuo6mHJuMJcwxNRWWdutw2qkg7n4q1zKtEmKauvZMYYRmUxQyrRvqA",
  "key25": "2MkUcs6daGJcArDz4yKnNGeBWhJstbtRKA5ivugFNCKXigz9brxpQhPk9pMJTh4zmHkYqhSfWEeLyf1nGhT83HQk",
  "key26": "3aqNy3mamAbB3vtSKn3bErTEUywUc5jVgMD9XVsvQd7uPxkzpmNtCjm92Vua94ndY19skx4nC6o6NseFcY3Gj3Df",
  "key27": "2vwPQ28SwWBXuKCMEJsytsLE6ts8r2nbKG33E6TgYVSpE8ggUqyJPxBQzGGq1SpCbikAa8WJjRH89ceyZDWyGMkJ",
  "key28": "2pW8ZmkWWWtQZuHSUpiF6UFMHRmtvbJWw7p8qx5z63CMMGs5BL4q2VpRBELQmFZefQrJkdErz4LZwumuj73vm3PW",
  "key29": "vbE1K7Ay8xiTv9noczzdWj7gMAzbgV1xNnGRaqKjdFAWXxj35PU4ufsfc2Ee4FNCMCXFpPX48bniybcCDrez4RE",
  "key30": "53fYeCWyB6beYnQFXS12kXbrUo1ybGe6CzrZorTbUFZdR8JC6djq9aqjuW8tWhj6DGiGuiDTPm646ZbNSeoNAqZi",
  "key31": "uuCGA8mcT56YZJKb6ExmGgn7LfTfpLDgVTryGmYtLTh6f1kfnLD8h7WirPacD8ZcYwRsfF7HhAe8DZKnbjpf9q3"
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
