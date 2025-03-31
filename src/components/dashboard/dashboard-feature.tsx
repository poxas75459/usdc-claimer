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
    "ZF7dzDN1VmreXPR8DhjPTSmRLGi7iZ4R6ouUTVh3LB4XvpMGbymUg2NaxTaDUv1FwkPu5x1QaG5p6BKBEqKC6LJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tyo3pX3VhDRP656VDD5su8VvWQY5M55WcADzeLBYZXxh5EUJkEcP5MUtPjBxQDexJLcAFcqNLYD6rpQtsvFdhv3",
  "key1": "3XE5uStt5Ug2G9GLshWNmMXHk7umDo9x2PD5QvrqtjZHruPu1izPDi6P5H6SE3MH735ze3fsUgeApDNMxWeyQQ4T",
  "key2": "5HQYP8m8UjiUCn7s7ezHvusNW1N9f5Vc9QxEqBiUjrMGSVweSnWahM43qxu2wujh9S3uZoUyZcyE369okTTWziUt",
  "key3": "2wPriiVcK1JWnTuKrGjqLndCRW4XhwJxciwPUdMspH2svoQY6WmLE5VZxU626Ahp1er4jpA44Mi3dHkT9xoJuCZV",
  "key4": "4ZYBHikV8ebKePjkM2bUKp1QhcHRaviqZznVSJirUBJdqcsk4MpN1DqF2cHCFWqvQRwrHW6knS7ZhnfMLEFEnV82",
  "key5": "2khGW1U8uqcasATuRbVP5prnm23Rywh9m6bd5pAY1VkkaggoJiNoBpTnxPybKBqFsr7NvEdbfbkzGw5V2SaEitLE",
  "key6": "4Exyu29mZ3ZyJFK9pnqA1DbRgSDyRwT56eP8ZXemfNQFDkrnbY186A7MwE8LFPaCtrDGjaQDz9GtyJQHfkRC1U52",
  "key7": "D7TPpGmnj3GuEvJUVS33HNn7htQ3PcWiRHiH4igGbPSsb4yyRATvtyrmJKu1a4TPq1WwkcRvZTj86aSuEYXKb4v",
  "key8": "4B1ZV3cHDMmsmuJK4F1paNyK7hQskPgH3Y4sv2ikGTpC75TyC4MMKGBKf3uUTxGVgkQv5WPnb4ChN1CGfqqQjQui",
  "key9": "4wGYbYmYxv238pKkJmrmA7WFZFDyyxyt339QzgrhEUubU3gKBKzeNFLd8Wqa8JhdDM7NHch6seG4xrzXaP4iLCFL",
  "key10": "3cVfzX6dAZWMNGF6m2N8SD4AooHJJLRLJG9a6xtw1TAq4njkbVLQHJM7z3rbi371Ck9UYbEAbTbNjgU2g6Nghy67",
  "key11": "5yqbRLiwtZWLDDrPRd6xvdGmKp2J2skS2KH5N5qNSdeAqk3NoXmWeYwxUz26Qa5NxcVwA535oWETn76vxeUJ6Hbf",
  "key12": "4upCC7s2nBtXhvR57awk9YyFioTcqhQJ7pTuKXJ99h548oeNYz8aqaP9m4tpkVtTGMBudBpzqtK2LFBbkTqJ8mRQ",
  "key13": "2bRh2Hzhd7ygdEA3BCcetuRgYyqSQ95A9m19gnt1ZGyUCwgL9Z11SQvAJRpyRm4JHLdmrazUBo99xdhqw2Y2ZLN4",
  "key14": "5E5LqbsxLEQRPnKm86dXE4VYFfETnnaE2pZpwgBabwqCGcyWrsjj9MEMGqMuYL4N4d4jXeEoHFUx2H5M6kTxSsp6",
  "key15": "5KboVS83QLJAbyqxHohgxYM8cF3iU7jS5yCTpTvr4zhmyVFNrjhVifDz6hyMnv64TQLhFw8knKz7fmpXzDwyroWt",
  "key16": "41Mnzmf8GFkuMW1TCJmy1AhAf2JbCxhDiTv8NWw8DpQXahpKfgdgSxRizCyCsFRArBYPKMBjb53hyhTkVgtvL1Jx",
  "key17": "5qo54RMpD61Rcbw3PyNffnwgwSDDX737MRw2Kf4P6TixyhAxqBWxPLaJY8LczUoA2n7QqLgpYeNBWK5fNK5gVyL5",
  "key18": "56WLfZbvAqPbd8bNBP4sjW1NsPNnquscqf9Bi3ApcH4vVL9DHyxYQSY7Zmvk89GosE9MGaWLjz5SZL43cXP1iu7D",
  "key19": "5KzaQSe5jszePNLSPbpdLUPaE68MSJZxLFRFADRzpAR3Gqh4mvhPexaC9fNmaVAP9B84Kfe8Vq8DxEuTC1Gu3jWc",
  "key20": "4bA7h9AAHYEZziCwoWbuVhodvusuBq8JTdD2URz7BMYWEvwkiJhgcCwiBiUnytpK68KCXwMovQ6Q1s2eBNYe1FgR",
  "key21": "GPLbrr37Jms6BstxdM84JWtCZ9Fj2g7gatQxLkTL2QbpN9wJTApBqtot9WByoFbHmfUAZJsWC6iJ9dc6Ft6HFZt",
  "key22": "M1wcK95vunhSTZMBiyY2pcUxTej8iUWC5ZTeAT9dqAJBMLG4Bye4pH73oyGdpMJmS84b8zLo5gLMv5WpVQGXL6G",
  "key23": "5Kav2Vb1ND2F3UKFTZdzJVreiATbaRR15Bus3WmQfpq4hXk2jmxBzpkSUSfovJAtMWSnp4XtAsdnSuNUMAcnaGDv",
  "key24": "EHH2UZqmGfEjfuT8dV2G8pzbh3s2faLG8wrRHZdHyRw3EDToHg3m58A1mM8Zf5tTqdntoEzrVwkW5cwG5YrWog6",
  "key25": "5LkRpWRpjCaEwBzJqoPSwditrkogpFeLeMRPrrt9k29bK1bZMJaQkmdGy4gaH4jqxLMcGK9EqmqsuWT9Tv1ue5qm",
  "key26": "5DPtUig8VUGGYVhnGjLgRDDHDm4NCMtCvBMAyk8fDugKq91GkdhPivq8bb5pw58Jm5aLE1XGEetqJWMtWJ8AFXcb",
  "key27": "4a4chvBg9tW7DiT18Dh8nemfHErhwuMAbLPYqcVDi27CZ9wgzmhtcznnMWXzNFNMobgi6vAmAi66ZJGh1gjW6fNh"
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
