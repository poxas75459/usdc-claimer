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
    "5y4u32QUthHSRCHBksh4iKdoEJ1oZABBVi4QbyX1TYswM3mDFzSgGPnqciKPUWku7YVCfwfLSPMGPYFvzJB66rvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vkQLLgne9PRf5oVLUfG7w3F7MjQsQbMFU6d6k3Z2ckZ56QwZ9zkq4CzQB7v9UymjTxtBcCuwniT6L7GntCGYTMR",
  "key1": "66ufNPHtBpQAyobXsSmGBoUEtTXBpQKk3e84EkqXSzj4Rt5zJVyrCWShyJxchzPZkXD6TXWERsYjVQ6qgaxNbVHe",
  "key2": "5mXQ5qFtggD7UiHqTKU2NtGWBwjLzQqjdnDResnuF3TXhdb95rJkGVp1rJ8kir7pUCRaSwVJ6JphMQ9rodU8G824",
  "key3": "3JkMTbVQByRi2uG5ejuLD5ARJzE4XquPhhXCfFwNEiDuhgRsUuTiPwkFxP1LHbyG6CvvrVBYWHyYzB9bre4ARnuK",
  "key4": "2QwxMGnniUxrmAzeYmoUBKFqC6hdS1qmKqSHDVUNKUBfEioZagYmcPFiGqttpumBhacuHviZNUufNZEHk1v1mSfB",
  "key5": "5NkUMgXCiRjuXt6yhjZWjbSVNNxfAiC5xqwE1RWwxDB8LTc3gfMtp6VtFx315Lg4d2ZUfAjnHc6n8mDc7HUjRU4o",
  "key6": "4RaBaPeDMXk5f1s9WrkZzho3ucVMYZKttzAC6p77QBw2Eoe1mPnwELfxDUfyJxLgH2Z4fwyHkp3Ef1QxHCZXfJmZ",
  "key7": "53qAoF88DNk4kiDBvE3tygza9qCVrzQjJVN3aQExmSgDNNfq13U4L61N4Td5xeqjBcqcfAeh7cenGevUP5ptW94A",
  "key8": "RrFbVPup2bbJyCzjBCayguiX6dxMSTg85gtSgjEHba96itU8FcXooYHePFx69A55d5sxTBU4NRcaZbT9yU4vsSJ",
  "key9": "3s441JZ3azQyuKmsAWuQCEmpFk6a24VoEqAStk2uk4hbbqq1bwahCjEB4kd94wnBf9JUxMewHMQvtxU2yQdm9D6J",
  "key10": "49UhKZeNGZw4RfgTngdHavWAeofLkFdiEte3rZ1hMXgFBrvHeCZZYk4uf3GCRVUcvWrM3AkjqN2EFNnk13YoVDFM",
  "key11": "2MhXHTyQVhLU6ANywouUwLSrq1KT8LE4xomURHQqKe1yYjHjidhAw7DiFVCBnjuNqE9yKn3MoErNrCAeNQzSKze1",
  "key12": "2ekqFbP1pmXGR3KxZMHejKGwqdk75LvAfEeXhLy2v6o4RhtmURMWKXVHURcPoCCKKqAHwSy4WJV8HdugFKgm3TAc",
  "key13": "4PAbDGukMdEQdett8Gjp9WBHPnFANdjC6SLNQ17hLXmUQLP7TPuy5C9hVsLYg8PFm2PXBnjCpCHdyu7hxL1GuM2D",
  "key14": "5g51bEf6orjzjEJbE5WpitEBeoC12NuWRiYmG3gHBgpfUt5z3y1YHFRxfd4sY1bBiaeMJ4zr2YCzV12BYHJYnwqL",
  "key15": "2S873V4s5GAjXSe4jYBcqGzzGtzg2em5JnqsuqeGiJR8Uce8ni48FdGWMUq7FgRasnnCiRt6ZZFjJLhwwJcgHdp8",
  "key16": "4T19g9w7iMcR4CDZhxs2XC11PAReKt6Ec8SMx2AmAGqCW2o4CS1Lap3kNAi6kVsk3VX3MkELxN4qd3UdUyvawhTQ",
  "key17": "ncUBq7FyMX9ZsBMqc5h6qrEwKPG5pfFmEEJoUW28mVW8pQ9N8vqMBxQYcnBjqZTLTT2Kvea7vEwwoft5FGQTjsi",
  "key18": "2q6kSpphbf81VcZKYhGgKAW1esYE5HCKH8vigj7dAUWsaLV6y1zQaiZ1KyePJcaRn3q22WSwpMrSigBP6nRQbnwH",
  "key19": "42ZbYTvP8yxNiLB69prdkkDFP1c1kxKRfkh1qPWqGjecNfrMFxnJShZsmcQ7hbE3WvjtkbMvtTrvhJQhXEDzsGvF",
  "key20": "2CdaboxxP84NwVe5GnoPX9cFS41YH9bPFWQ6rDNmN7BY1ykzMgNN7XZpH8wfbTK9Chx5MGqsfYQESGkJrffteQfP",
  "key21": "2r9SUgFYNMWk8ksQL19CpLsjEp4JMFHBbzF9Qc9QK2PH6p5XnqrTxCiBHe5rjPHpfY6hgYUzv1T7DWSD1izkDtoE",
  "key22": "1PpGYsUUnFtiDum8AEeGAh7XDfPCMG6AqGTdMkMJi1JG1fsvED7D8Qvhu3ixJ9z6XJoLtY8KiYAMcML3gBiG1Nq",
  "key23": "3tsh7vyBzhpxFC3XCkCJQR1sE7RLFLHKnE3o7QTxqxE44w2ELaMGPY78n8zwaDkZsLFKL341mGsqMz9JUpz1GJgp",
  "key24": "xgALQtCL2hBGe1K4d65hCmsPKQAQYPdgQRGHHn9pQchUNoQJwFfZyWnYhwNyD7R8CzkxU1bFe3ZaTGnXTMq7Lpj",
  "key25": "2BfKUu9EXdmq9cd8oSN9CqaAPyGrERVU5AP2WG7SyFCuKZFgTJRCz9AoefGeJHCHviHqPF1MYgFAyWF7YrtMX9JT",
  "key26": "3qsZWH4DCaZkby3tCXpdJGb3JXqyLgDEXWC5pTBLTAc96TSbjWstmCmZBqiKwRAHfM9P1dPBFFBjsMw5An17PrdY",
  "key27": "5iGAL3jQsVGMtm8E9hdLf8DUdFVLTeBjpMTtX62RBX5WFF8SMj19P3AtWYHfxsUrojG9HNNSPmuLGudnVvzrPnt2",
  "key28": "Mz5exk38TsdYLizTyegXxLRDqDf6hdmA99sU4SDaCvfdavWjsoxki11NphGHjdqseG7p9zGNc5YZDXk6nTT1XWA",
  "key29": "3yPLYTQAUTkgXdMMLRecoWMGBw2YrDHmSesHmqe4rAwV4116iyWpo2eA8Rnye9QW38pbjiJiwzj2T1dEiyeKHQ6V",
  "key30": "hMbuj83RhCSwFy6TmjU58xs2H3Aayaxxz8vLTn29o4GEkRp1wJvRMp8NzD2VpNQjkm5qAxSJhw1nxgxNrJFqzoz",
  "key31": "gDmNpeUoAnhSfm12r8Se69twEeKPo4aihfrxyJZjPBsV5bB8UXGfxc4FmqyzGy7pin5XEGTHuVERRhsUt9nN9bS",
  "key32": "2sRHnhHLxZ7jwx4DhC1dyKgsYynFQgDC6xzGVRVyzJ6RY3ZjyMfxR7Y8im6K1U9hF7bAFKrCFhMXKQWGhhdtaR5C",
  "key33": "3w1H2V76yTgY7B7Y2ayyUWurLLh84FvpeKLxiBZUyXkfnMcYFDonkRsMPiVMToYKH4TYMoPwXdVikD8ycrVxAXva",
  "key34": "3xYJ2ZrAVGpdT7ZM48hSGwE6bmeqFrXbgN7VuXWPVwkAA2GrR4ejdMmJYuw2c87ZgRjH1BKzNv32ZcQeim29LR32",
  "key35": "4fNwYWzHu2aJ3uJhm3q35RLy6fAUiDp7gzr4749LPNggBGC7uZiaeba4jAgKJubTnYk7ws8nCp7w7QtEbHX14Wjv"
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
