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
    "3mpVTCTnMK1qAB38s1FzmqusxdosMN371RTCJ37HqyW2T3Tb21tbxW6HyZ7CMxoan6qKvVBvbpSCTSMq9a7SJ77S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yqDtnnQRQeWQngJ6XoAvaZYuf1DEmZpQGmRZxDQzqrskJWnRyi6aBMr3ucQ3mPDhgiGT6FDyqu7pDAcyv6Xsbtn",
  "key1": "41uacjd7wFBmRGrcCjLe7Lm72MTtZb5d3zopUH9WkMci78GUMD6GCx7qwC1wdaP6pk3AKDPR6JdceF4TFfqv7MzG",
  "key2": "5Jo5mCZEarxQz8fsj9MQskN9mKnQLhZsZ9sPHGfhdufR7d1WLLh5eZhPURVq7v1jBgQvGJVv6Aa8HwXtdWMCmcRG",
  "key3": "Exvsu9nasb1hih9MNSEnN4d5jtz8Lj8mpUaxARPE66DFJCuAgWBPwyKg4Qwz2rHanxYFwEzXBzLYvXCjL2eQSW1",
  "key4": "4pLgrFVbA41qrnWS5TQpotic6b5rdUqJfM1Va6GbCTkkRtzeomoreLANMUyooJG69AF8HhSPqiuGACdstkExWbqC",
  "key5": "65t3w3KJ28PAPeFTtTCR62dR8JiLQsVoAvzyrvtbq5YcjYAs72N8pk5MRM2ZjmSkmAkZcy3eJqUsiL1BbKtdNvag",
  "key6": "dvQRGr6Xuw8ZzFGMX3XBGQ5uS7xPR35L7Z3xW8zYisFUU5A8BqRBpjKym773o9hUfXuSrRQkTtcuKM2EmssS31s",
  "key7": "PQNUf8aCTj718ECUGYPGT8Nj3YaeFFCjEPnEws2x4Z9y6yyguVR1E8FumfQbUNK1oPfL7tY5puyZ6qmYEeRgmZi",
  "key8": "5fGNzfcwSyGh7pXdSuj2brMinweLaj5ddVxBaJUTBJTXUKmMqHb5P4rwAeMSuNwQWHv96RFE5GSAsCpCZbAec27K",
  "key9": "5Ma4VXzT2crkStstYcC5QGbWsmdS25BwoQ7YRjMjeV9UELh1B1AzN6TwwyW51eZMhvNV5RMyY6d9xyCDNBdoNfAJ",
  "key10": "5rvSNGG8SjqsEFcKEwvDX5rEPfik4Phd6wWrmESmyGbSYr3tXPdxmAok5ff6CSXuQtfSKNnMX3UrWnngwuLBbU28",
  "key11": "2Jtikk6AJG7q1fD4jxmLcTw9PMQyq4G4w83uYTkP4dphvpBeYovrn44tkRiygqXYRZp8CoY9JdW5DfbgKMDCkpJH",
  "key12": "4CS9kXK12VLiC6CKjfG5orKzop3qGZXq6hi4noLmUrQDr9yyV8Qm6o58v1k4kuRr3uV2sKSfgDzhktKuVSDK5Ur1",
  "key13": "462czSamGfaLbjFxasQ5NqSvUk65TEEWufo98DnKtJioPaSxaXtpBNRKZFDnUWXmGiFbeZqToHo52GBBHVKjDPQh",
  "key14": "2VbCATvNPU7p6tSpbZ5TXrTUnyGZRcy7g5mdrEJffWKcYpicQXdHNxsy6pyjmnqpn4NowWVGY4AiLsE9nyavoptv",
  "key15": "2B8oNw7L6YPFXKzpWPuSmXkmG5tDKtnvLDBtDWcQciN51ghJ3WzhV8VqcJJG6JUSy1s2S3C2fFsgaXsqaTRMYtf6",
  "key16": "SvDkQJvrLPJoab4EnSgKEBb2A89td1LdkPkwRqPRdUPcD1vErikkj7HFrvMSsjhvktfWvLpSFMyvVsqTQtszkRS",
  "key17": "32fc3qBb1Hi6fac3CtAp691agtiabGUL8DXTzFwT7H82E24E3VBo9iyUdQA9eSAuVjomQv2n33rNrMbHLsUKLrFG",
  "key18": "5xn9Tsi9MWBCUsmVQEugJwfr48MK9ntJ7BvKwjp3uxH3pRMdsPGZGBs3tvNYCt1MN4XVXfdib5XwhCcMp4rz8e1Q",
  "key19": "qpgT3EETztYV3kT89ARUdH2WfWwEMjLStsP89FpsDQuVGg4SfWU3iZ1mp4XYGTeTGVd8Z2iqD4NwtmDkPatWUZX",
  "key20": "39PyRFjGefwwE9FjbV4uAwoFN3hquKtfWW9akx3hahCgSLfqtwErxyC3ibimKSRUDnbfP4xQKdBSVYRXwhPcmtFo",
  "key21": "2H1G9ha5FQZsBUwjaBAFbhmeZHiYE6uP7E3xZhugxegHSCdakCSiaqPicifi1mEGvXdYNFZuS3AwGSssYt5RVCcz",
  "key22": "4nxmuTRtT5So7HB4cGxghHDUXmwazUGKzk8hPosLXqPLdi16r4X9T5VGXv5Mp3a6UbPR34rFzHyQPu3jqtEN1kMd",
  "key23": "3cU7wfMPpoEPvbs3TMrPCZMUCNFFdamJNXZDnnAknDFEnH9VSkCAPL8XjCnjxxhBi1aZnEhexpRgZq6JadR1xrxE",
  "key24": "3yHsovZddvRKHu6kgGrGNbeNLExV3JuuMaXkarfYcFxRKpyJDm8B6Du36ugMyBvVgEoSW1B5ovmUZ9jvmAUeNfu6",
  "key25": "2nnr2wp8c7efc1Dt6Vab3D64F25ubZnHEA2BXfPkisMbmNkJceeQ4mhWecwyvXobFTfjc4y5F6Np2ZZBMaMAGW6i",
  "key26": "Zt9DMJTLAbNrzUBhDRq4a9J3bjs73UXffsijft1csLuTVjhjgKVVP9ePDVuUg3KgLL9FWH4WDG4sTjxy1fRg1FU",
  "key27": "4YLQ235W1KqGG4bYaeW8Wdu62H9ktjryUFvmaofsS2xVofwAaLy1qmpvGQobH5UDhLu9crAcbZeb5kEjjVD7gWvM",
  "key28": "54SApqeEiVVjgG2kfgZG7Q81ijaQe84QDcmvNJrGnNU7jTGfsSznc2SjjjnEzwoZduiTGa4p34r9n8WXN6FKmb8G",
  "key29": "4FVURoadhdUEDWFqZ9NBaQE7yg6B8DymkQWmcmCSyWitLPj7H61nuSc1T4jnK611vH9CyCvh6dZxE5BwLZHwk81H",
  "key30": "29g6fVojPEb4MCKmUtZ3eE3hApoyVJmMhY9o365hv4trmWS3stq6VT5Vu3z3jQUoe9s92JyfDaRFXLaV8qcf6ny8",
  "key31": "5yvE5UQYr95gss1CpatywKViPjbwa5kgweGndFoScV8RfbHQE3zDmTsSCtTcLGYxNowUowboq33RiFjo5LRBYN1u",
  "key32": "GV8HQZNhsHfnEPYyRJy4PgTdft7CBmx9yR6DfREzj9bHHPF3FLepGhxFpxd9GoRcwPQSMQP3meiwfRMatHwRHQU",
  "key33": "5SuKqcrWG43noKUtaZsRycFH6ZgNVbuWY1AsV7phD255Z4cKTorfH5uToYhpurMupEBAhp9qtmK4LQ6tmZre9cpU"
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
