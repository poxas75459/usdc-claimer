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
    "5VpmB9vykWzR26KAfy5A2wHy6ZM9Pnz7xAm2UR2B5j7RYLqVbSmpPXR9d6HqpKqqbXYLLTQNP4NYfCCDgB8gm5AK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sLrBczejKbvYeB1akRWBUNVC9PrTHvmFZpgvkZRbb8bbDz5WPLVchfR3trZyD5sxPbtttwFYw36jNRAdGQiagu9",
  "key1": "4b3J7VjDKnGAZY52REdAVXrtmWx2PPSoxbCNu8dk3Z9gir8uDaKcUMo1tzNJzvUmq9fDyNM37yuxHsRkDw1zkUH1",
  "key2": "4Wkk9YtdYomwWD9iXwCyCYJam5HH4FwA7ozghB5nGBHg5478s9NTedVE8WmQ3cgG5581fWecV6uBoxDJq8xKmTcS",
  "key3": "3xmho4Y2T3FZqneFXzGCuZRwjCxiUSsmyafusEeBnoXgq6xb1dpsV1N9Jt1s6RU6hyw31r4rrhZxy3KM8VCwx8sU",
  "key4": "3sVp3LYxsF2b7XXkL4Vw97UNTxWZxGUbXEhBk2R9q9pSs4j3mWWTgykG4GpQ4JhEd6vBV7fMWej7VjYjPiA1PbKf",
  "key5": "5rsTe26RADVmL2qKUT7ckdthr14pmLG6cc4owuWaXG78JDe8PeE4iFQRCaVrXUdKvekTK36BorFyaUz8yvmK9r3m",
  "key6": "EfcvRbB1La8dDvfeGfnhqzCctf6RUCjMXAUaGhDqwfPtaVg7isrL6dkVELxXfZVpFMk8A337i31Yz576EHWScVR",
  "key7": "2vbk8KPxWrkLGhASE65PJ7DC3Jt5DNR8H8Z9SptsSwY5L6sNxUiTVnJSBsncE242pfrArKukrPUWHNKBhLUrN56z",
  "key8": "4SgBPBwSLepZmpPqR1fDGQDPg7C6qDedbYhz7Ynsyt3EraDeCtN9Jmi32Z8NEdpQw9r7vio1uz5Z3XXNALj1rUjX",
  "key9": "jbEaRCGxCzEj9r2G9WRtKZhpef1tTGADW2SezisK1kQGf6o5FXQSiouRzM9jJp91B2StENE9SDBdJ2vnLHEvQi2",
  "key10": "pcnYxE5b5VV14bu6jHkB7bXjXtfNG8nrPyDQBiBM1KkBwzM3VFFmFWhE3meKvtAYSo7SFbKQXm23GofvxkCkwAM",
  "key11": "3bF6c9ij9GPZysQnbLAcrjFotSHAmH3t8RpLJBhT6mAu2zqf9tZ5Tcj9nDUP7weX7TYH8X2fTnqeEMSDzEY9D8c8",
  "key12": "3zPao7CmaLjQaMKHcnwmnwp6jKnzH3QnV9YqCp1tJhZ546szfD6LnXphoZDMarD1QvX8d2UPkvppA8ZeqYpyY8Ps",
  "key13": "5P45tAgyEiAzfokKGMpB5VAt2d8Bbtwg7zfmM1shjQb3zupjaZs9SEyuYh65kCFBVpUgoJzPVgpZ6n5udUfJNB1Y",
  "key14": "367TbpQyd8ejVieDTi4Y3iSeD4zNjsmVmQB2djQBgAmTSZJfCjEKWxeTdKuxefQFw6VGiuStLCKcKWWtjnoEGqm7",
  "key15": "3veBC9iYvjTLyTWb3xwPUvxoo8LUpNHjx15RSkDo2mM3YyfQdBHNRCTPRs8joZRMaxvhtjVFCKMVfyYUpLKpc9KU",
  "key16": "5SjiSYdydoukiQz82G1kn3UTBXHPcws89N6rrVFUUFQacLnmQyXr1mmQzUMG92rb1xz6JEF4b8UaBwiMoVWcgYWY",
  "key17": "3outTtRg1xGR8mLCc5rYXQW2QNYMH5pHcsWRnCBmT82ANEThS7kYPNpTQ83FbMxRuQrEVsMWKrDabvLbYJCiDJzu",
  "key18": "3rZbsEkXiw7uUm2sKvZPk8fnS8xuUN3bg4bFvFRJepdY6rw95CieFYdAdSEnXyEBXuovFu4FxDa7XUC5fDk6hvL3",
  "key19": "wW7eD1Wo47WcnxL2nBtTpSz4zsDPc4zUrcAyLuQqsoEUPG68cZcF6R2RCVav51Sa2ufLLu6R7FtBkZUhW9tfRDR",
  "key20": "FUCa5XCDWX6fmVj28neEgz9cKRMzFdk35vd2ESGS2ik2szhJcsFPPbjAARVAoSEUy1HA2Fp3jPoqqvTPGpD1Rdh",
  "key21": "467N8MLtmP5vvPgX7pTc4As174VsKZgw1qAV8VcmCkEA8Vy2eK6KEBSF8e6uQ7LxsgXFTsymjwUoRrEjqardedNH",
  "key22": "PTEJvGy2Qsanwap1Gc8fW8bKLHtuXudzi1V5XRMi5FyAuuLEsMBjeVZUin5Hs6JwaZGzDoDjbFtxWN1e24dWsdT",
  "key23": "5WVtgxZjcPzWUbofwBQDsVS5NFooAhgqhC5vb2PDCnKCRdVge6Xx9vRpYABFx4vee67PBWsBus57WtHHLazic3nK",
  "key24": "3cfYTghiDQSwPHJBwHvLXobjtiAVGZa8ZUNXymxiv7cLmKUkxi52aXdk7D5QbuRzSa4jBzEhvUupQxpVjG8byLvB"
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
