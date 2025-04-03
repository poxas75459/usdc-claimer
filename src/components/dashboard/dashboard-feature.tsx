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
    "5tqFGs8sZ2EhiKRWsNWZ4Dxw7VLrPKRZUnv5iSchQpWAGFkSuzkxPRyCmBxCMY3ZmJZddo1nXHZVvLoDBpyoVFGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aRuXEB4T6KBuVtUJ3AWMU8oundhs1D6cRFb3VoG878c8v38A5gFLDib4KGc97RXdgxpoh9kqszHvrsWxhSAA1o8",
  "key1": "2oRCsrMiJLCiaLJeifV15c9tprFMpuSQSWHLuT65iBdyrgbFT9dX8Fi1K1TSosS6WHwKDoa8ktG2dDuxLazqSosn",
  "key2": "AmeZBJ2PA61gK5QLyRcqoCnMMopp1JjrdQMSCAXZe975QvS7Wcb1HGw1xGD893jsEG4FZroAsKYZUQAfDyRQezz",
  "key3": "3rxmXsCaMVL288SNLFc7Zt6NLDPdRN8iggFs24LcHW2p3Wa9Dd1TiyLGPTrcytLpCmmEDUdW8xSWSubdQQnvnBPz",
  "key4": "5K8oB5kEajHX7xCJUsr1ENtmDYuafyUMTJnTMa4Nu17b8bqw2GAALFwGNJ3dtGasfSB8Lyzfro3QmuNdJhL5S1iv",
  "key5": "4fbk4iZCnkvrDMFT5Q4vSAbmrAXtD6GRda9zeaLXSuSzkAA8JR94ohNWUP96X5T7nNyTVgDYqSPAqzcHvHejR7im",
  "key6": "5qCjED7vLjnwDbvSrNgmg2bg33RbsmVKKRuPx7GmgqcafxLKnCP68RgaEt43ADhFWx5rAiihzbXgFxDXtNYqpj8k",
  "key7": "4C37YecTYE5vuPHvDBvc8TvHfvGPjTGTWaZFsamVjTFcdDNTqDkrLHsJV3aqK9H52okn3PobMft773gjt9uGU93q",
  "key8": "3xtQUedtqUiXr8JNwLzZG67iGUFeNNRxp87vdSr3uUnG26FJYf4ULy7M5nxDTK1kdxiGu6MU1yvk93moyDy1hQw6",
  "key9": "5c4VPD4YxEXeDwXinSo9FrGAAtFT9F3zV2HkukYqEtvSn68wqenSLhpmXo7ULQHNNGRZwKucJ7nRdrTREDkx3Q7W",
  "key10": "J1Py9K5Rdd5Qfwr3kRqYLonEsnRkrpnqimfBuaCfRaxmER1dYDq2KWccsug88jzndnSb16VTa91DTEnqYiJYBr6",
  "key11": "4vJGJvDf3ffuK6BF6DTDT9h7bEwrsNhoAcMLUnm3Tne4mMqiE6z3rbRcjnkQQAgG31bEKqQUbPUGv8i4dZVnE19G",
  "key12": "2oQEPbMzLU8k8Sz4kiGke1VcvWh2d77HBDALQJTfbQzV3BUEktv6o26FmQ7w7qRfDdVids486GTreMsRzvzF8PL6",
  "key13": "3jcnyf44dgadoYx4YvSLpdUAMtg6ytksoMCyTSwdXkJtKbKzvdrtT5pyv1rRfKMeoPMQq6ib3fBsTw5pzMPFkoph",
  "key14": "5rgnWumCRe8yg7KTo6xar74s7GRW1jK2bJkNV4gvGT3bYbre7ukU9e4NHdoYgn6QwoM5bByNftzCacfLHLYEgwt6",
  "key15": "2rshhfX6ZsN5owPHKUUVUqE9hL8CxosScCboFrDjyDbNQxN4xZvyMnKihf1N7Qmmx69dXYeVmA5gYQ5zmPQbFmrd",
  "key16": "3BFFbdcsoL9DLaXg5y3U9ivWqzYppWNocFrBSQKTupyjirpTQo9YSQ1DBAfGiHzUoXYCzBGCbYixNjCnDpf8hAiQ",
  "key17": "3B2g4c2JZDJJSB42L6wz8k1RcZe21hxmjD7xzqSRztfQvVQxDmwsQfpZDr7ZQaGUrus7fpEGMHYYTx5qZXqqmppg",
  "key18": "5KuRWnyuDCNr7GVYshra8XMNZJwPCkDjUnBSzxz4s1gphrqjLssdxoMmMxKpkGbEdM3LvKboD5iphVhmetUyw21S",
  "key19": "1L6onVMD3wycUxFmWb8JNfW8XZKL9awdLSGEQp5Do1xHy7meyjHiSH1pn9o6tNg3gAP1W2zEjbiSRMb1UeyogV8",
  "key20": "2Tx5YfZfvWEQgyEstbJcmm8cAd4fLsYeiyVxzMchaadCMzA9f5koe7HBg9HinQLp9DqqmMvB9haxFrMNnGAmgkt9",
  "key21": "5yZ4zt1B7ieawD3KewDTkFrbVuURWasBvSRdMVPDq9AjEdzKpJ89qc6cpyaXMZgPALLTT1JcWuo7Y887fm1Y95tc",
  "key22": "1snJdzk6GTjQvPda1BMerBZpmmo5jurrBj2YENrgsBqUHFaT6Nt1kFzrpdZ2n7QGWZCmXNcUBpX2fDGnCQ5ZQFb",
  "key23": "pnupNPeEQ9nLpMs4Zb27g8cZoYFyjry6nnJdtNhugd3GV6EGAZ9Kb3gdpQgcagUXy9NzwnKmykcTf6DfG8NaccN",
  "key24": "QqMyU5wDxvFkFL1DiSPygijE7TLXyRAT8nDbroxjbubVJ4tDUSGeRzTvzyZ5i8rAwv7vm2Eze9W15ov8rCC1HuC",
  "key25": "2T3oFqQmS2jCYSYT7iF3TcUdqbmbCgCCcDX7PQB7U886dZM9Sgz2aaAaFRYxbzr8S3kCu1wtCa7zEJHNSbbq3kSU",
  "key26": "658sQpTLyv3w8PrggTjcDsi3H1snzF1Jgf6qrTNx8Mtx2U9x3K41MynkfEmiZPNTwAxMTbC7JFnyLDGvy47UnGf6",
  "key27": "46HNrCqGvR55G3zCbqxaTFLwQAKTCLfo7EXFdCPcG4DkPBFEiZg4TDSV8RfwN8J8b65UFNzftX2M96VvSdnZPg68"
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
