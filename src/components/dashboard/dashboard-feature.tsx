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
    "4hPweETjpwgwTpFVR9471mjnVXNmpFWsrefxxC9uoz6LxC6fvS4jsqAnJ5jYo99eQbBcVof53ioZSVUtPkwNXD14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2evifSLBzG9iyo1GBBYdmCxqxx7DvebtjPeeyQCVrsa5MegSzHBNNiXakcdn88YmFF1Ua6kqi5U2Vo3oMgunm9AZ",
  "key1": "2Dts8YELL3KeJuEhME33WVhVRqj4Z6pYHznSHL376cJ8yaeCm8s9kwXgao1ckU25h8Zvs5LCfSyePdLC71Vgfj9o",
  "key2": "3sa35AG3azp7rcbK36rFF1FgdZk9xTHvBZabXaxdvPzJrcoC22YHMVFRMgwPw7RJNZe2AdXeC75FLy6m5sEHwscs",
  "key3": "3Vbizr8jRdKaX6YmtGoD12dQaJ9WN5HTbu8fiBnEP8xp1h5CU1iRx7fMyMqiVkfCmqRU6mgUKm2GNcH9HTnkzACc",
  "key4": "4HtcKURpmkRJ5b7g7rqq8UR7dNe6cPYK3G5UJchfEz2edVPwVFvrksUATuBu9gXPBWkq8z4XFvN7YxkYS3qkRVpG",
  "key5": "4n4x6sH5moZRRmF3FBL6ko24uSc2sMZn1joFsBiyY7HqZ2LkV3ubSU9ub5AQZQWU4hKfrZnfujbEuUuRMDCrmGCG",
  "key6": "W1E5Qz5RXv6GjH2qqpkG4pwydu4hQAAtQPBAi5MfZTt1nKz1E7bKT1rpLLU4TkVU4s8D7L1kdDCqVqFgPw4Mbgn",
  "key7": "2G89FSw9P5ii3yJTgSBAMCfZN8WB3oXQLaY2FHLtcSjx3GzUsuhphx9TmGa1up3VNwEbs9HU2iYirKkrqmhy8ds4",
  "key8": "57pe1WEw11RYq8ibhGbT1P8mvM8vpvaub1qebdhNGdbKoiRrmAegBF6pgrUuTtoFrevdsHioP3AasRGFjSo7CQjP",
  "key9": "4WzJ6LKEMronS57K4rAip1iDboSPxpKHppV9QoH2b8txUCNHiT3PtQciJRbHhRsWp33x8HjbKj2yX47AjA5Vdret",
  "key10": "tU4QPqYtKt1Ti5GsMwdJu4BrdvQuA6qRnEd85LiFUKr8YekpMeUh9BMhY5xZexvJ44RdbdKtia2dTqeVgm2gL2k",
  "key11": "42Y9uhQ7zJ6iFxmPbURiFcKrMjgrefSpRzGzzaVKd7sh7brof67xxm9KrCVGqap5Hz7Z6amZLHo59ToDocqcydKt",
  "key12": "PBxGeCLAwXa898x6ViCowvFLv62PwTbFGrNAXM2UUgGyp9mqGcgU8FArFCHiCbyGDXFEDgL9iW8suWY3WuD6kok",
  "key13": "5aM8Nmpz9gSsKCqnWVvpLGmCpzKgZmwFwXKgSxPskrD7zDkLLsmpYwXeQPCxsvk9FPHZnUuBW1f8oHLhYwr1T55y",
  "key14": "4rv4gEy2xmy3DNfdoTaewa8xvJdwJbkn66yQw6R6SRqv8iN3d9Gu1u2a3MNezT4BANRuPHMo5YKA6PFiHNvaA3MQ",
  "key15": "3XupheACCX69JV4YQtp6Y7Va5LrugwxtTVfzX9vCm6BL4svA2hvjjj4oxzozZFgYPjrkM2o1gQ9NufGYizFszGAD",
  "key16": "51ojoAVeWGaJxSmmPWCWr5ZPiyhjzztYeRWmGpMTgLxx5Xi4ireGn7Df13w3CBruXHjVuL8prkShN24SdrzLS2h7",
  "key17": "5JTBgCG978GFY9isknBSkuidm93GRWA7MSrNFursZpRBSmFHLQ6pdW1J2rxzTz9dQY1J2pDP3S7UQ8nS3g7RGCXT",
  "key18": "34ZSDPSMnr94Pb9GxmrhYxPyQcbNQhaXXf4qiu5Zwxh2fymcBBakvfUptndMhC1Zb6qP1dRgRpv8XFASxZWG3ERh",
  "key19": "2cv69DGjqtUAd9QuZuXiZMivqV2daTaZ2SupwBUDryipXUMG7VWHsFE5Y7BqZKb5qtGwJxnyGQrs4bu7cu8sJBnh",
  "key20": "3FZgZTGRXRZMg2e89KczXrrS7hNaEz5jbMu15TZ8nhirfn6x7fDiKwB6S5trtmy9hcBSLNm1w7Yx6cVu4sNKE1T4",
  "key21": "AUcC9q647c4PPwTi75FK4DfpUHbBb8XaJXykwoMkLw6HCgR7Br1WfVriqSnYN9MLQNGzeMVkmKrGJUbzsvgivRf",
  "key22": "5MVCgL98EvJDyzSmVGPLPNc9f284fzrZ1CheLm8Xx7hzE5LW6uGKVfbjcRptzeSbyWXVD4ihZTesWtdrTD7kwEQc",
  "key23": "5EYfk8kvgQ4eYqXSDXwoRyzDKnmcquYHb3J1jpfonF4hotm8SmdgndQLkBCECuePc6AemPZ4cgJrKECTHoEqqiah",
  "key24": "5B3LsYZhhpD8UsCgB1XPhEtkHrjyRwAwXQ7kPhAihv9iwX59TxvWQeQj3fcDPhR9jg6ct7z783R6QRZgSVQVEk1h",
  "key25": "5KbdHraNK8conWXpzw1n66oMW8DUtfEvJkyMLJ9xfCh35yFhwvVrXyyb5zZUFEBy29uBxAv2bfSfu3P6W5qDsSNg",
  "key26": "3hfJvMe983Lu29i12FCH9pKWQ16zpD7mSVPN61U3Dd8qDVkAMcCtZqUeRSL2ykMXGM7DyXMbJUXd1qzuNoaE2pMs",
  "key27": "584RjbqD6gxgxkYbKkXyZ6HeacwYXLZpZZYk7rpdf21g5QoGuFANG3z2x3KHSTdKKudfjtQPWtxD8VorMtMU84sT",
  "key28": "2ULeSDBEGrBAKkM9RU6fdK9YzaXE7YAkPAdGjF1SQoyL2M3ej1jZvgjNwE2A2Us5NjdPmDUvq4fz8hAmsZzu9HLX",
  "key29": "3oZjoYB1SGqYMUm9Gw2LdmNxz6jomCUMuui9PWqTP4YpzQ5ms1hHw3qD5g8JQgbBi5XL5zaXcjEzfXQMQVJdjofy",
  "key30": "4xN2x8ao9XjGqAq2xkT2CUJ3Kmt8QuQL9G9j7ChVVey73m8wLjKH5vJY8udRj9SuDMdAjtDfL6ztVGdkCKd6PWxJ"
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
