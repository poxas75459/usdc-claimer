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
    "2Ht3TU54HDUDhGnomapj2p9URuVawLWa5YBqcQFzM2EjiYyRdgLQpQc8zQfcKzZELEFJxrbpV8mkGCJRFtDru7Uz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dJvvLrTLTR9bCVeCiXsjdiBikcXKuMhaWoqu1nHCstCjuggTb7z7Sn9rHeoCPoLwVvw2APPPMu6aHGjz5aeZ1gF",
  "key1": "7BHvrNSSC9siqKakgkX49ue1ZhvjPpvJpzL7fBg4cfSq6Au7XKD5mVG3XQ1zTt7s68fB9ph7cn1MNEQ6xC7tv9z",
  "key2": "5Td59mncsjWp9Vke16XSGCrh62fe3LMPPBSrf5egC51ELsYJ1jUKuxf49bA6pkevTuM8xseVQPEsfceLK42NGUVk",
  "key3": "yBK4TnG8bq9vDsD7Zv6XgnxNGQYcnabmJe6h8QeJpwBhw96vSDGpPyzEjMhDcVAs3EF6aFrWMRJB1wREcHs73GX",
  "key4": "5rW5dQQsU3XEjJTSQw8QHsq5Vq9MwPgpx7keZPViuoX52EA9Eg4UZx4HAb953EYnYxe3mFH6TehiTK3mapbWnZrF",
  "key5": "2EBdkBHGA2yquAXF2Z4ZfrC98VpkwaZfD1WWE5wkko5qPaEf6inwT4Ch33z31mUTJYvNLAcUy9tpxjf6Gi4vDVjH",
  "key6": "2bfwSVASsWMAbv23iGjekgDaU6k5wi5x5fWgBBUno1WHHKYec6NS2jK3Mzf1mdX94bPKcE6FCnoLHu9Yk6qJ2rq7",
  "key7": "64qyvBa9uAH3RSf6o9YobzMRdR6S7mGer7UeAeYWrmigL3rhVUj5gDx3hfReooUe3QEsacaBHEAFeZ8rz8h3ct2X",
  "key8": "3j2q6GtDY7MHij3ygGguHYLV3fG3h5JTsb2SVtJsYmRCEDBprihiLp3AUvHYW8h7YMRAT7S4gBUUbC1yo8XotxG3",
  "key9": "3tSaPhBVjLM2x9JNgE6KsAMpVhFCudpAedpK7kqfF2WhraQN6MiimZYFxsnWkRpGNZPpVaHg2sDisWJ4DAfP8t5i",
  "key10": "3ogeYprwzeCJfQfvoDMuemhMXf8gSWhUAko7Wp5NGM2fz7nqdh88FKrrBsKfYGqkKnCW1Bfx5FjR2aCeYhppiNAr",
  "key11": "2QXUp28P1gvLwsnP4mpB4uh2hDvW3TZCbRikPawNC7F4szXRGeJktZxFJtcxE2d7Dw6CKtEm91kvU5BUT7FrAkZ4",
  "key12": "ajR59nMbracTf5w5aYxXSMyQdiosoayQ6CkeAAzyHrAcfP7BjNqXLHDUVBCGWxtJH74vcGjWHc4Xo2TcHkS81Qg",
  "key13": "3eCHt289qa3PjZZMmqmVnisTvmmVVF6Jk27LrrnqtpmictJTwQNCPLWJZubp1pv5GrAchUAsYbEp9j6odC8DyE6a",
  "key14": "35e93DJ9UfVuRcyXgzHUSCLXW37SBZQoeMv3AD5dv625yjKxb9Fqc7ANGC7P15eWibQxxFi8it7qnEmPiUMizhJu",
  "key15": "4LiafbFPKKLocwe8AfQugzowsC5Ncp317vtxwLaxVTHZFNEt9jzhq6P5wVGqA7P6HCjsQ1DKLphEL6YF1b1bvCFu",
  "key16": "4AwJ5EbpdTVrr5MrfGuHXUtyicn3yVnHwnZWCtHwJFqwcSKikUJHsMWX6qMPeJ198unYNfzd6hjEfqnKdh5W97Hy",
  "key17": "4k4ifRdnTvbfXQQbSa9eHRqq5H1SE33NCGZDEFFnri8g1CMBtk1e99Z1dhx9xEL6jLwzJHbq6GmqR8SR7gbMRmHu",
  "key18": "4koY3ZFisLe8hSiKewBGQTP8f1cX2j3fVCCnkagktjMsGwSY6vovUSiUFaMmVf6R2beKQA3gBtzCJbpzwKdJkLDF",
  "key19": "3aFnpWaUUobCwvWMc8RLsH13giwPS1pycSDcoHPDzRziDwJSmeajh6CVVUDNTaRhYQzT91QP8fMyn6JFnLNwo9TQ",
  "key20": "38AadNJwGwK3daSh8cKcer74gpGbWdCxrV6ex48jS7SahC88SreRhZwNHsCV7GkEGDDxZdt3d9ZDWCaHv8SWGGKA",
  "key21": "53LM7yL7UwVC72nseCWCKe7qi8nhS5g6CWsCBU8Zgxey1YyVpiHAd28rVqvZrgYjuTK6fHpE7Y6bhmmL61nk8GvU",
  "key22": "2jcqoAH51ZCuumvZrarcDdfBygcdAvksitAjC6KppSveqiGf6Amokr857LsTwdPZkrHaE63WX6aktcJ84ohvFfEg",
  "key23": "5venMCi5USYnbACcjurfG4eNqbGfzQNPdDS933FVGrrDW2KrvZdn3srtQVQM6ooK4viES8Pk6HGRd6P2AStBRbCM",
  "key24": "2tvdC1pKzMmaqghrxJMzfWKLKxtdrWJ19nLpqqPrAu5qpLCeRULtw5ZY5eJNHeBiaYTjQbxUuiBovRDn4h1WPUVP",
  "key25": "3iiwrTff1HpDCdMLqtLGiH45i9nunovV9e97yUFogisEKqRX6tzriRh9pJEEuE6kDMByJEHhJmkAU3xuVR6vdXxQ",
  "key26": "3oK6xZciQWhxH2abksJMVd8s36kxTkG5GXb8i9w7HysPxtHDbHMKrcoTgeYMa8sZoF9yi2wqXriWP53W3pRyXDaA"
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
