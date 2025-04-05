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
    "ggRv3swTSJAnQdijfLWSfYYqhVAqyJmft7EYPb9MJkrB7H7J5jRBShDRbmTyHd1WhGRtdgrbPGteVjYDLZGv7Xm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fq9BLnGp2xzTy7ZBE1u8n3Ks2vbGcNZJdnWjD1FQLTYwbaBbNvS4MHtF8CVAXmuQMWbYqFoEBekP42KjWnR8wYi",
  "key1": "3BM6bVzXw8CELwrMavi7r5KKZuKPRDo87E6VPSYhhW3hmRQdFgQU2FfFogbGssskEVGR843tUHBsZzLX7XWG1hLd",
  "key2": "2ZynR5thaMNKW1LBMGxE41VTXxUj6L4qkaFdyYxXEuvVbMaWpm9aW2fW24NAS94wofYJz98FdprigFDrVRAtt9je",
  "key3": "3A1H5CNwDB1u9G251kmd66E6zrzH64Dxb7VagVgwpH56GsBGevktJ5JEp89f29ywZhgnAuVFqhiVZyDZB81Q2hRy",
  "key4": "5c9ari9GNGyGbyMZ4fpsiw8xhPXfA3i9Wuv7iB4oviqUpc1DzW1wP295rPE2hAGsq49ZdjYmjduoT8K8jnzfSPup",
  "key5": "gxKBdUTb1drvu24Ti7sq922wFNXcZLQWwAhN7nhJZ2Y4j39mTUc5dAyww8nxwEyDvRGWCqy8usJihMzYYRaUg3W",
  "key6": "5pm2efeUJ365kt7smBQnSkrBxTyzTemq3fYZw6MnfF52b52FB2QjfuSbrmmXNMr3c9tKEd3mBLMKpdiq5J4Z7YHG",
  "key7": "4bgffxQHqWbDP3UpUeoj5JZwh37c9xKy5WKyHpZjmfWHbdXa9iHa68iwXmDRRvtv2cuq9ZedCUR2Vr5wdvUid1FW",
  "key8": "5edk6nymQNgAGdzyFShLtgDuhLUFmXxKhkgPJm1RPmVYV1ugk4k5a3KHp4h1XePuX2MrtHK6sAyCsiPLbnUaY2Nk",
  "key9": "3zcxFALjDqLjPL87Y1ULdcndK6zt36aMsSGnev8Dpz46wMUVzKt3acxCzGfaPkgPVw4QPoPtynoR4mTEdHd3f48f",
  "key10": "4zNEnPvrsyGtLD2jATYEDR8pG2BW4C7aMcgEwfpoaSiVGL8q8LhF3hxtgPrPhJfL2NYWF7eeQ8sVEcMWjEFKp5C4",
  "key11": "4dJciLcYAoAEqr1XHbfH4qH5xwEXWTxDgLPuLHmP83FnHbRGCmoWPXQaNfxXhLTuANSbv8W5Mcnswi74e2AeDpms",
  "key12": "B33NTRJx9RYCxheDqD9nZD56oRNz4SkCksKTnB947QfSoEboaK8jYJmCKAgcGwaRMoR5nJogRGYBfEfGpuLwkcS",
  "key13": "2uyvh8PU9GAVAosMf8epEHzRpFw7j9MEU2buv1mztCVrg1gFZZjUM9eL9nh5KkodTkXGZ3geHDfzJZdfFWgvMgxp",
  "key14": "4odE8oDL7TfueotvQc8nQRu7S1Mk48vV9PzjLukZ5M1DmoL3QcNmt1p9K7DLN3KPHwRSUutJE1wCEZFUJ9dassu5",
  "key15": "MvLqzqVi5CtCZPinxpffmpVz7h5HnaMx7JPoamGH5AUWYvKcw8BPMmetNYsQsbqSq6iapkQWjWe2WEHBapC4Di3",
  "key16": "CvNFLhbprx2hZWsPGvB2ZPniTMNaEVgbSLoCuqstij1Zb28c6GqUbAnjoW1AXrHAPwDjh6JZXGWL2fYP2yKLHSU",
  "key17": "32TQLCQauRS15oRAjsE4bwCaiZXnQAF1GVjAk9ZB1tqh8dx14TdsQFdH1H66UmqC5bJifwT6q3Kh4w9QvvLb9sHr",
  "key18": "47ZpJRvPQeQemCSSyT596FcxW6zptgFDnacSDCMqduXUBv8si71cBJdNGMbBcX8eCjm36pjLTgw8ZMiNoGtDCJVd",
  "key19": "5HTNKaGzwQ5kzJfLKMdoRZW17q994ieCrgGFefqfjpPfCvVbcm8TmakZoDXMBgzbsP7PyVi5sAo2e8kCtxDJyGrK",
  "key20": "4ivM3AAagdAUzNNaLyTJ6cKaUeMz9tXbLabrPX3NBGgR2cCdU8MYUyuh9CA4t7mDJNBxvk7LpBYvfrLtcYqxBXfa",
  "key21": "2sWfWwzRW3jUBzcGA3afgccodgGHuMgy5w9zRV5mcoFEpSG7xCpMQ7Z3RaoprHLrJYhZsTkWHER4N8TwvboRQPZU",
  "key22": "2h9GxFXWCvJ7PAjiab4iNLkQQX5oDxJLH5Af9tC2L6kWFqN9RLUmkohLv4XNndKB6wFWbdbTgwNPAFUMoUcUR3uP",
  "key23": "qn4Vr5vWQcoGZuvdyqk2gbnX44koPSmsP6wpZk1hNFsmeae2yeTPHJLtbwPQiXbDhCnpf5SYEXBti135YzyQ3k2",
  "key24": "24ewnCQ9GobCq4VUsKfWTkCi9UYSE3BceHNyBfdaJqB6FTwGJFVTMAVnTGqd6pS5a3caqom72dB3LHcDr88hYF5v",
  "key25": "fHB1ySJv75LCcRBEdhAWnYoQpx541ScZR4DuKLzQtCUqcuqFn73M4qpGarJYguzjTBJsDZzjWUYu2Q9aCcydToM"
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
