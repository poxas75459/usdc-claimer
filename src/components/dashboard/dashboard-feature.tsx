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
    "mFwqLsNpsFxsKq9gXoNM67v1g4acs48tfB4gwm1d6aRmxSzS2x9iok3ciFDvNPRMRdvsci2tSe1pQzn4vyde1co"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PZE1gXoBwSxgyZBtuvLZSGjESYhzXzWeXbG52p4ov9MAK6odCmBXbsSLKEaUKrMG1a61jFPvPzk26vck2ESsEWU",
  "key1": "2KU4hyDdXb9sxcoQ46Ai7QPkvj58hiKYiiWrtgANKfo4Drcud3CwLqjR1CKigY9VJnZX7d9Mew7BHLw52VQ4HgS",
  "key2": "39v3zi4yhn2myD66zBXn7gbQE8UutZvnahX4aesBWhNzW2WwEeAfbZrfo9xF5CvtkQ3cgZ5YyauHKQ4JjMHKm1JS",
  "key3": "4HUyxxKYzh5fFeCQou4o1LSsE9LcJbDKqCdQBi7hC1EH3GfJzpWz3EhTukYoCqhc6soeEuhr59HxrQXvtVUZrpSD",
  "key4": "4siUf29qJm1VqNFg1VYkEqf4P2sBKJC8WYiZ6AeU3gMDuTkSY2LknZu5ocXDCSfDZ2TQXhkkYoZTjkZqxKN9uzAx",
  "key5": "3wcP2FooP1VLiPTnw5UXANB6d4xqUBcbBFfbgUpbHdGM7sCQybNXYwQ7sv32vJkZQdsU2pWARzgkDBWjwqJtUyGH",
  "key6": "k3ZemVcc2iYkdo6Tpe7vzfKdbgLdxcfXF5LcFnEQ4QLpRfmFncAieqVBbeEYXnhmhp4vyXAdY6FaNrMXPZzvjpb",
  "key7": "4pfuSEWa9FcCVcCQLzPRQR5FBz7LDRotPdJhnewBzpKs7cvtErGDF4o3PCUmqGrJiYS9AArncXn41i9MpgLeC77z",
  "key8": "HmaRdUNf1oovAVowJ1ctFXoycaDR1gC8dfVcckgcFtt6v8jzBnEyJKGa5FSUGMQwY8ALEGEaE1vMcmm4Y414Er6",
  "key9": "UxD6L2RZ6Vdx7sAAJb4zuVyYMBkLUAyf2eypxgAnLy3ELePV9ByYFJ8PtiW3ozh4xqQLhJpL8JpopTRvsN2o86R",
  "key10": "ZifGHfiyDdB2pEGFWVaEynTDigZzdSuSF4ekC3tCA9bFaBKDESVTXrsoaQPj8MSgTZGM5HwU6aY2GMFuPdFb8MF",
  "key11": "s3KS8HcfviegPTq9rF89H361DGUWURa1qQNEKw6hKVZiSx8QBQG75u1GbX6AEwFtV3rfsfCqm1ALa4V3WyD4kaP",
  "key12": "uDy7JSuKPHMp8QRFRMSP1hphXjXtt6iKPZtQGUE1J8dhf8QLvpQMvYvFjypQUV7iLcpQ6p7KLmMySyUrEX8y84z",
  "key13": "u3nGnVE3BrJr6TbfKK4jGmh5ohgismJ3UqNxhToUZU9iE2ntzXMNYG9L4txxoUxeGgHdo64bSj84MSLN9EEML3p",
  "key14": "58BhEnshKmrMb8eDJytARe2oGB4qczCkmouDRQ16vvjwPmnBmaS5uRLBbUFzGw51a9avfkV1qF5HLSHdqC9zbVyX",
  "key15": "3tYzU1j1UfWfZTQVzHdrVgSjyyXqGJoGbs1WFDnZa9gg1YweAkRgJyoNn3GEgukVzA6Jbw6pnarRqaH8n88z2Nr6",
  "key16": "3DQbQZMyypAqNctJGj15u7zKVhwyUYUReVGC1J5ktg2R7aHT3jDiYnVo5uW153CnbXX1RgaJsJRGiwoXv9NWoktj",
  "key17": "65LxZp37Syh19gU517Kzn37WYcNBy5tBrNKtV7Cez8YKF2iQSpsQvUM1Mxem8529st1Q1RM1qjAfvapUo37wG41k",
  "key18": "4ZLcbT5NKQ4XtihovPJ4n1dhmYjtF14P9z1vUc5Nzd8ahsP73bLmtpo4SHjiNH6UUP7dH4mvEdud2e565ua96goF",
  "key19": "3WbcsLevyVTEV64GhDf9Kpdi6PAsPCUQLVtn84zRen8oubU44JuSd8mDbXSMvtkqCuRRPVvvVM4G2jbg4KkKqiRy",
  "key20": "53G4DFiom3c1wcqfqwa3vJNvEb8TAgLakyS1jf4k8s5DJzHtvSuTdYmohabBYYnbpAvGcwE5K1B7G6vGSCGu7GBU",
  "key21": "3HUFAac7zbyH7XwtQ8KpDStuTarTCURKYue4YW6V9wM78uk2F4H4ksBRocb4Nq3o3aaFT3JHPAGL3nEQPcsR41tW",
  "key22": "5QrNMqNNbuG4TXKEQTBqukM8sVZjnePabQR41AGjc3QZ51nekjGvKxAAiabSazMo8o4xPX1k8waENthgYUM177ib",
  "key23": "3RWKiJD6W7xL56bT96zyhEkEVesQwJV8TbnViqVgNkWMxrPZgTR1rSNFua1rC7kinKLCGT6h5XpSh2KYVtTGndpe",
  "key24": "2WzafmxM8HSgyqPQ5aem7a45vsF4pKtxQkPBCgHXwugQtc2zs88YSZLU9FT7PjhUahD7Ez8r4BF2L5YKZjzvjB9P",
  "key25": "5KV9YK61M1abVDCHvAMMbdbM7ktfc3nQven1CXMWg8SK7WXyWNZRBE84Gn7rqxzzVsYs5Qf25TxPRQFTzu3icCzi",
  "key26": "3Qbi31g7n7vtrzMGVKPSKueQvh67TADZfeVuahX7KfSrdrbsQBJYTuxi2csczYvv3n9ZspJseiBDYzg3urvgbQ7o",
  "key27": "HkHtcD2ZgZhLtPKBua32oASuhEaV6uB3MwXkZQ5DtQsh2TTvxtzayVmyR4rRrXHWWVBF1KiMaVgwXdXWrMGge4t"
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
