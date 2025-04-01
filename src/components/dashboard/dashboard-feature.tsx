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
    "5DaekBu28BjYQMHWMSfkeP4FbE2VUeEKiF764wpkRK4rpzQXYgmwmRchsxy8pQLrfS4k8AtxvCjuFVeSrbLiMxsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoC34FNjeTkvKFQYhXqdCZ41RHwG7qA9mDZ4ocNfLBZU7GuPaWC4boHBLfqHdKnqLPM7iKQj2DBUtKuWhQi3jGj",
  "key1": "5uyFkjyNet1qyEoQ1PtsTtbyEhBQWmHhnwK6nwJizzK89amoHQHpZ8AzBuboQpV4nVfhwJQ5Pf4G9aoM7hX4dzMZ",
  "key2": "3MprHKAB5LFHVmeSRgBkRTj2xD4WjkDvmD5FLxStR1Z6dp8afMfxnySC2pkAhmGZp6QrKeoQGfRSEqiB78Fr5SyV",
  "key3": "5m8UKKv2ppYzMK129d6kQwhmREmuxXvMayo4otKLoW9W634WC8Z9AjpufnsmXKKZrWHzz1S7MeYrigRu3tYB7wA3",
  "key4": "2aAdEyWTrDa2u9CrczSZ5qKaZ3jbyiRBXRLAsPn8TDm9jQncrqTa3neU1tU7HDJZvRjqXRHe4Luwmv6ZyvoscaoA",
  "key5": "5q5oEX73NDJCnv1J515sonUugJrdt9bABABUdV6RxCWQkkap7AKwUPJMKJQbZmu8gTeKLwqEdA3AQSudQqVrf9Q7",
  "key6": "4ZCtPXieu23mRZsuhHgKQbzWURxNz6okM9WLcebRwRmwab2G73c3PkehspoEW97xYy8Doi1UjziojkYRKrymC5tf",
  "key7": "52FMsYqZtxq7zd4Dw4Bv4zakzV5QqNoaNtw8e27zKk91C2pFsK8HRKkqYdtrBHsaEkr43ce5AUqgosGS5DxKUrPW",
  "key8": "42F6owTUFCarsEWfVpEVkheK1r3pUCQcHD2nWAhBhQ4AdjUgeXpquTJjuzQxdsjDecZnYcyEK1BZmosKvQQuVorY",
  "key9": "4AJwtcyQJHDFhGVW9DFBf6v82Cn6amLnH3ZrREqe94xZUMjuw4VNUVN7NEdGLnprMKQ8FUCuJh1mQpzuGPtz73JT",
  "key10": "5EC3rsHeyq3H8opg1mXzV3MGNA3xWxJsSqpgbQfmUXMiP3VNaABuH8vFBtnqb1NR9kfLFYrfBeELZxZre1gfUnrm",
  "key11": "2ZSATecFrrP5FoErmkz7Z5TKQExX5LUEQMJN5wav7owmdsTD6EfoYspFuNCRTy8Arfice1cGS6qfGfhcgqLYFT3y",
  "key12": "upfxSFSE8Wy4KPuofDxMJiaGCxaKf9zUjaR71WWuWKZFpTbpD8kHk3bUxZVpQdaQC6vxeQGuLjHr7JD9VA7XM2H",
  "key13": "2hQMK2G5gMAXsuZanB2xiSiU8h9UZbMv87D1oy6yhiuCUaVwVF9KtMJUUWhQb92N6hRRC6uQCmF67MNtQpswKPdV",
  "key14": "4QPv8JnfZ6ZeDtQYWugzknevyeayTHQnHeXNrkx9VAYtqFyK3aM1YPEUT8cv9h38cdUHsCRdo4fBM7SrvNFcEExK",
  "key15": "6d99JquhTm139fgVVFPyDNWGa9DhAo43bYQjA1gvN4Bte1dTomjXj6h6mriZKjXjSxsNfKvLgxgnpaesv7GeB2n",
  "key16": "3vkhHBhNCEoHdw2ghoMeL9RDQcExmaXBcE6gtiPNCsoVF6SJwM3MALp2NZ2KTaPNHqugGzUo3AoRTbdMZgbjFxto",
  "key17": "31NivjoNmMMYD3kV6BBDT8mEuEqB7Yx38qBenPRe9Voggjw82s9bGgjE6HJnR5fFru1QAYJ1YtqS3WRrg5EnVqQb",
  "key18": "4teez5hRC6CYQ6jFzWFgaFeANi5NL5Rv74NzxYs4sR2RNF8tRPhDNuvk4thj8fgTJDnKqbBpTsEuscrWjnoGWsBd",
  "key19": "4E2M5Sd2J54zpPhuVkU89A3ogFu8v7ci3XmcJ4eSaDUzrDGyvoJHW2GhLoRMvCz5bRYJrCkCsDYDR4mtAtwqF29k",
  "key20": "3MTdRvCXVmQxTaGKWhLv61EYJB6UDY1EeV9nkQHqwcddXqhuGEMg859ViKSYUFrMy2n2NHmir5LvninZ5kqxPyTi",
  "key21": "4GCF1r5T5Nr7dLjHTdRedEfcSdq3wEKcLi1bsSWbXCq52GUPNnqsBonvgN5rCHdkKvEEBH9sLhh7Hv6WYD9qLZdR",
  "key22": "qG2SKwcDPaAjH61FJ2pzjBQU5zJMzAJj1k4jp8NYL9zhGCY9r4e5HHZnGCisuUEKowi8UGGeA8B8XrDH32QP5Ys",
  "key23": "44ed9gqZ2WvFVYfQvkVdQWmVx8ybQ54AW4zPYS5M7oxYaJspwyEM8pQMom48tfRwGugHqULuTmkZXiRp6tYNGc23",
  "key24": "5Vc7g4cLBtZqjUKQggum7eZcZTpWJ5CsH6i8C37guZvwELRRmmDKD9U5MxwMe5BWiUj2DW6ZLuLB1W8ZmG2xZHe8",
  "key25": "t4fteAFuNHktZP5uyJvAVfpRxrydTe3JTsQWMGcpUEyQSEjaxB5t868gpBZrcbcPLm46fr22wKv5SSC1Q7rA3Wu",
  "key26": "2eDs5aXfsD8hfCfDTzrTAiMjndQpQ5zEjyLsaTpCMGntU5N4frzp3bKXeNUp3q4Q3bNMRs8UfdXzF4HyvMKPsvry",
  "key27": "2heSDBmTiM5M7EW5FPi4dGkranm5NqpGNMZwWPdNpfJPoTYtNJYNJaAvvdkwZSsvH23xzRErXLenTuHsdX6PCq81"
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
