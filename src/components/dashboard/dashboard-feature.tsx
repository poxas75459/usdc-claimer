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
    "4KhYBMrs7jpFRZ4YCUeui7AdAdCRK3tSPFZ5iFjfCJ2xeNTjhwBBsgYxksaoSAMdnSDco9UCthcMVX7WX1oaqPWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JxvKHks6XRVorNR8NLpy93Bv4BW3ZQqEj4rnpuV7pfx3j4tZBeDD7DwTTbJDfn2BXgaSRnt1Pvuy6jYbeTyNHHw",
  "key1": "5R5xh5QSCjwF57Ta9WEWUjELfoYTgjp8mAkdCkE59Hm2iCEV31Mi3MAwCcTNomJDsmRnqpEBXg87gM5qWuiXPWLy",
  "key2": "66H6TAarzNmXjqQ6LsWzsF1ueJCm1AR5TLqBohTZEjJZ2Fcfv2J4u38wgene9wgNPaEStF16EJ265KAj9GR7EsSw",
  "key3": "5hUkV7kd9qjN4m8ohQJrdQYpVG7YoZATv5rxkjWUwHkG4x9erSk61t6kwCY3BH3yGfkxVN8MWoEg8mhibh94Esvh",
  "key4": "25SxMVLSSPQBwSNxByWq74MB5hxKJqWz4fiLKCYjaAsvFc4Gk7LMLTiMMZLmJKr2whqqxDUJGECokQs6tsGPPPHk",
  "key5": "3PZZbFVCnLLkwh6nRxxmE8gTneLTF9RudbXCL9wpCqeGMLxkwoAA9anVa9vwkjX1m6PVd8pnZJr84gn4x5beA9gr",
  "key6": "5aREaRBVoUSbm91eFk6LvRJwnrwZF5rsedquGqQJSs7gkinmqEFFxzqeWQ5iFHGdq22iGNgU6L2Ljm424XvZQncT",
  "key7": "3onx5mdstKwfSyaoU4ACKqRzniu3C9HXvCgUUv62Ev765jXdxeTHczufcksSn6QBNi3aZNyKGF2NDcoiYgAaNChe",
  "key8": "2hqjQv4RwkBVhXSv7svYppRp1mp8ZHHC6GCxYHPSMcGo1utfR1pNFHHvyMuhJrGNctH7cQramx5seC3NTzE4ooyJ",
  "key9": "3BEz4PfyCvgnQNp1TkeUeb8rYgfrPwDAMXesFc26iWa38xjDPV1ZtiBt2QoKKct4uzNo2gSGqZxEkW6DxHPiry3D",
  "key10": "2S7BCEpNWAbbNY3gWSS82DscwRCkc7BrMmDdeaTKjXfWLgAyRXw1Boh5ZRTtV5CeHi5shw2KzkqGrhSaAARhw86c",
  "key11": "5rUCkSkz3Sge4NAKLxanAd88qc4a1tab4uit4wattZfgzozUBAY7c9syo7JMTZZjABoGPaJcKAv7d7U6xJUrBLXv",
  "key12": "5A5xfhCEE5AbWG8haxs97JBd67VBYv45u1c5F4D5hAPQdXX9VUBKWjgCrGKYvzGUd7ugNwDPzKx24S9gBpgCjFrw",
  "key13": "3esRNxDchNSb6LnNE9ysofG9Exq8hgcBMJfkcLq4S15Ygmn3VGddsHFzSHtDrhjp17J72mRWJcptQReqLbW9MEUT",
  "key14": "5BjHscL9CGyCvgyc13EA99Em44NrQUwbnC9KuEHvtAuRHvnN9ASUVEJ7YZt56uo1LzK5QDg2cUtW5PJ3BMPrRVCW",
  "key15": "2i8gmEC5WxRaYzmcU9tCjPbdEXbmi7wtiBdtoHfjodBtLP2qsQeALKchqeiGuWZDG7vbX1vqKYnKACcuorR9ogT6",
  "key16": "NmDZH1KkhEtJjSKvD9Jw2HKVhfYp14PkCZdYQ6oqxumyjFwUC1kKjMNLRCjtbfE6PetjCyD9yU7DxZeCNwNcxK4",
  "key17": "4sHS7fzU86156caUnAgTYyEQcb2PC9EzvstHAy3o9mx2qr1aXFcuguLCQXGoL2JKP1FydhqrAzFdqw46nepSjvRL",
  "key18": "3gzqoTvdMPeqSCXkt6cdgRxdvNdXzi8vphssVj76TyMPMh8VJ555duiZ6SVcfYN5DR63FgJ4XCgAVRZBsnTSyG9a",
  "key19": "2Qa7oTDwB6xeGS13kgp67hk8UqGHSjYBcq1bTtLCunoNRUExKPPiXEE2See5SYR78yLLH46qWv7bjDaqX2Eq9rfr",
  "key20": "5LcCNB3TEFpuHhGm8HZf3tT3bJSqPc46WqeprEeij6DRvSeDVHhLVADuT1K8ViPfJyg6LUR4JzVCodzPj9mj4yWc",
  "key21": "xy835Jb18DDJKJJxHL9VAetM9rFjifoP1wDG9PgfvHXSU6pn65K2iQdRaLtHbWo6iKfE98GNL8LJ2i7rxbiSoCD",
  "key22": "3qFezVfXggNn2SC5joTrYCYij7uWTHggk37PJwxhfqCyCSnVApYkgRJzPxJhWsi5nJJ1buEjZq6oRhXPYDFVjwEg",
  "key23": "22vZChLG7YFv8ba2gFahRwLjt5Dn1hn3uYLjX49ga7EHGMPQygcLYHwEE9yqEJo9EQ4jLzJCvGTy7qdEJTZ8AHpk",
  "key24": "5PegGEDefofn8hC6CXMXRf8WStmQH2Eq4ueUTXh5nCGvdaakRCaQVCcvV3HfS3JyoDgsKSMC5UyXUHmrySwMMSbh",
  "key25": "2r575HVPE9Gu47QMvRGeib4Nx4fmg8TBUSwL8NFJbz776Uuu3LR8Nt6aTSCfw7Wa6tAg9SE4vPRhbPegzmhCABkH",
  "key26": "do9mfhowdnstPvFmE5QvUsuw8gxawf7HBTCeQMeJjxDEbuUnpqnKFoSNnF2vLREZxuHc62xNA72Xe7FNZ8XTB4c",
  "key27": "3tg7e6cszhB4cRA2sefXK51Z4pS7nzYYVTxUNs7iopyKw1UsXbypUvRdWnYTad3Npo4V4C31qeSEdBeWnPUgW9iz"
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
