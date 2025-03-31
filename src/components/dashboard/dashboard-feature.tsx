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
    "yqrrmtsPZxA4WbQQsDGFi6qjBhkKj4ieqnuoitAQYAFWnHpgC1W6B3itV4QGtvTRQEs4wo4hnf6ZXWyz1TPYwG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mddZuZewVhJtuTf5Cg1cXpjRowkk1JgYmeeqq5kESyMh1JyHhEMnJkttWTPKWh6ttZvHAPYd7b2cm61BvcTa5gZ",
  "key1": "4fiNgc16Ni6EhsorX4yExpH1DNeoaXBQn9DKyzCSPP49DRbvC4PTWZTW5tqiLKShNBW7RVRwGvkWHtPoT719au6z",
  "key2": "5NThXGJqHVUXrmfW5M6sXSPF1B8CtGYp6d8P9EKiP6ETMV1VDDx6syWudq8otykxr2KZ1Qzqg6Z7jkpXwdN12xHz",
  "key3": "5JWKhzBvyiYt7ZCw7At6L6ggS5oKi5gFwjRNRUPqNCvDac89rVyPtQK2hhAHKQZcCVYe2nB6PDt3vyZ2U8vtfEM1",
  "key4": "3szThZbwqRfzY16YCd7ncJWkyrsnstwMafQTVSpXa3hVBHp4UXg9qeKG6Vj2hTZXKJArbw8Bbhscj46bb594anQ8",
  "key5": "2UjA2etswsBTsnY14FtkZkJf4GFGbYJv9qKMC7yPaZUeaPeMBNPXNpqrh25sdun4qGw5nh4vvCfNdAkEdFyLEoFs",
  "key6": "MuXQgNBM2QMmcWbZyrie2VwhgPepZQjKpEsRiVEUWCi5wnqftoM2pikVqHAeELZygvCtjE1Xnfia3UzXqcc6n1r",
  "key7": "2NvDH1a9joi8SWct4Rzry7MKR246YU1r5PPP7D4gfm3upxhLzUiZe8x7q53X4aC5uzDabrmD4T4Tvm9KhgxR9YR4",
  "key8": "2zkZmy3yd6nwZnAndyZSVAKDrwiQh9TaVPqicSPaVqrzME1nPn5h4tSLErfYDSG925FrhHmdG8Dqyo2yJbAyKz7k",
  "key9": "2iNoHZj5BGwZFNJzpVF3VpJJL6umdZ5PtnodE1eyAkvNsYqQ2efdtuYHx44pHqc2Uqu98SmzrU4gms75LZK8JyiU",
  "key10": "2XoFQEacB1wijtijwPQMSgHJ5u4XtKsiNbuHBEZ1GjFURQjhDXHQ7ysq82tCznGFGkk2wNqTmfssGRUqXBWeVFoF",
  "key11": "5tmDgRtAHNwWPyRm8FJkrvKYc1evKE3r1JLcsNdxdycidtU16em1ckBUYxQVymnJL7afU4fcEwrDKuHkfoxCSJeK",
  "key12": "3ZCyRZFoLGF9PR9Kp6D6UVSBhKma48WNt6CVSavMyXBkKUKYx4otUs9P1B343vVEDYZtz2bGhZAGvvp7z6s31g1w",
  "key13": "LZaaXgVECHP5JmzbS3HMiPqAy7qF814bFbzXsgMaxRkipEE2uMA68QwLwVmFRYFsq6EjrnR31FEgjvAiKeyAwEK",
  "key14": "yGHBCZk3qJbxXhpBxWJoqddigxMRuJxN36jitmpiCPrCbVm5atLXVmcQPNB8KoRphhv2q9NeqnzANFXCyNXnGaP",
  "key15": "m3H8RF8Y2j5KdjYHT9gJovQYan7u1FLfhCQN4AQtzDX1mnGjVhcBXLx273URRniJiuzqGuxDdGQdQCJPMj8AnFc",
  "key16": "428iLjZzhbDkwhxcXaFErAMbBhdJWWEa8zeAsj9roCKH4ZsxigR1Uw6YodNPQVqNiLKFoGFJN2CcmTjkBQLahgne",
  "key17": "5jzf5fKsjYjHpz4wBi2TkGcTogjBPytQufyqaqB8cuYW1nYsW4JGUXzcVxify8JYmuAiABzPAWEr1W4CWEmM4Y6v",
  "key18": "5Z9u2W1YD7XP7YseQ71mnx6RgU86j9UrkzzQuwXhwi11DRNB7HzR7neWv4Vjr7JtthQbxitjUMo6UQ4JFvUmBJxy",
  "key19": "4vQNa22SAF6gimw3ZvMTapVSgtcYhBbC5yT9Qwurri3LUFMzY39yRDgp8DUP9ik8aDTMPfN14uS8poq6FDMHfDdE",
  "key20": "orgPtxc9QzLVs5hFyExSMpF6poybWFPoxtRp9VCjy6fMzmCSXYYq7Z1jnUqeiJARQ4C1WtPrs8Hhebr8QuvqMMJ",
  "key21": "xav3HaK5mv87YhcYXx72kjcJpdYNMEQb515CsUJR7tuS4ZyU7KwiHA8oubawvRK4EJ5jUPM25eJxDPXeVEYtuhS",
  "key22": "4cwP4BpUeQk74n1cvnQgeu9Qd9txPi8EM3YhpkmdgQNtAZboMmz9BGT6h7k4ATuNAuHcnJhqXHyVuziVeA6thEf1",
  "key23": "4aX7NJoVru52nrfCmoFySt3WWyAhuYbDo4DjJDPEvGnvrAW3hfKUen429gzCCY36AXjcEkj5StgsNibmdgSDNvSo",
  "key24": "3di1VbAjNcw1LS6Cq191HcoBWh8pig14HxE7WFAanj1DSAM1LNavkxiMiMSAoMQGNbtiBk4RJ8y9WcStY4rWQBbm",
  "key25": "5j1TvE39Nk25ZGFfdyv9W9PKPmppFiiVZFHXhLJUZ9DfzaugX5YaLPY5pfyRmB5YrBd1uVZJsDNNkS6tfMa7uhvd"
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
