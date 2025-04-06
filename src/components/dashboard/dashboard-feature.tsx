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
    "3u9kn3a9uq5DCvSuwoo49LRzYgS1LRgJj8JWEBtbNGsi2xy3uKwgXXvbTR1pSdPex3YrKuY9eQDvGhUxGiQ8DVvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25G1ZDinmyuaBsoLk4akuUPUP9Uj53ncNykV2HvA6zpyLwujwsSuy2fc5qML3X5qFEGtWBwa8mTPGYUYE4Th6xF5",
  "key1": "5dMDoXAP4vbb1DWybs8YRbqzE1noYNkzV5P3sc7KsaRLaWAf8d3P6VWZjiCLvP8BYFjRKi6638S1HWUHf2tnDQ2G",
  "key2": "V2cS7HuhKHK7SFHcSYTnzVPuzH5TunxjuCWWySnyKNxxHczSFMqFgY5wa7gABiTFa9mQZcm5kExzQUaNanRH6nG",
  "key3": "29MLkknM147Z3DE7nKptsraK6cykpRcEdQPULrW6CioFvxst3GQU3ivhPzU8xR2sGCXvCyy4q9Pc36EDTRxVHAsr",
  "key4": "4Dd3YU3NQNNvToRviymTRvHyBBX8K2tYuSBXWG7RLXgTp7H1bX1NkQKmciaWJqm4soBDJkcjxRCYTznifuwP9wek",
  "key5": "3a8Y1kwqiYfBdSFWTy6kwNbvfXWvYY81EBVwYoDwMfgQYhSDDCUGh1kJTjf9Qy1egoHqaYZ2TEPevT4BVn1Nx3FW",
  "key6": "2aiSu5urt6s4UNfqWenDwatRmuDv3KWhHj6KTwNPE6oZgUgC6ADyVEt6XK3HLEeRfCrmnotMb92FJbGKB5kzUrsh",
  "key7": "58KeTBsufygSQRvFRsGivVuTLzQyzRaF2rLsmxSdvweFTEZj2stvy6r1HnAkD9Bi15b3eja8Kb783esEesiS7NUE",
  "key8": "4PwxkvpR49cG141A7XTQYYZbedVXgx9zDUdhyqUws6mwZ3btmR32353PJpUjCDRqyWNgeWpcwhzDoyW5Cwm8dR7d",
  "key9": "5R27e26sFQrhviHagpKzwM2LoxujyYadfYoaTzrLnUtBJv3r6jZURoL2YovyufGdmJs5vTtxFJRN2baXDii5fknE",
  "key10": "YBpvxPRwjNj4TwwDH18DKqsbgZxW7PN6PVEM44PzC2Y3GAmqfura6HRv6pSnXRf8DwdMkSAebyWcA8t1ra8Akax",
  "key11": "43ps9B7dE6ChJ6td1wuZKcHA7LFFR3SbvZQvqLJr5AsM9igbBN15nnKsRVAakhUU381ZykRHnP9orXAyPQBeJP3t",
  "key12": "3Trkr4W4sY25h73grmJeHmJcfqMT6bdhKXKL5VnxfbHf4LvzYrgchuwF1HjVdrGukeH96s6QkwDXRYYaLt3yBFd6",
  "key13": "sxCa44x6wZK1WGGZu7BiNZ5QKUwgKC7S5FwXkNMzgWwAqPmmWCtBctYK6H6wH2wzuL2YXRwDiL9pPsii9Wr2TLV",
  "key14": "4VGCrkmxw42FMN7Sytxxz5y7bsdxRkN6Tgn8xnaSzEWhyZuZwT8Lfj1YvK7PNfTP88PCPBEbQ4zjbM7NcYHPDWMp",
  "key15": "44zeTHW9JAvnp7igSgQaxRPNDsBoPzew13Y9wegQ31dnutrAnc7E8RcYo7E1zAHJcEohN8FzsKKb71Un2myhZJ79",
  "key16": "4xN1offmdrfKimJrXtLRwFHeezMPHmo38xGW2sXbAYz9m85UxNhS2aqipJdS5a3Rd4gCXya3AjMttDMKcKcRC5C2",
  "key17": "55uEiFF96VhYkFv3heqGTtTyohLWPZfb26yTbwKjycttKmZzy1F6daK3REmcYhNidf8DGks41bQArti1qh7dq3fj",
  "key18": "4BGW98Nz9KaMqWvpw3xw657poE5DMSsWtAiHtdLRZrHSyyGqu4WUTqYVrntNJEzoAr9hh9qETUDBgs4hsvtwXkbe",
  "key19": "7FLL9weNxnyr8DaEbbVq1q7J7AMYhqXtpDT1UH7ACbp58TTvSu6GocEVJRwHW8tNuCmnGocFc7kQQY8MEDTF7mJ",
  "key20": "4gkTdpq26A4pppEDnp6eNZEDJjJ6tjJbPSRuZLJS4qv5HpP2grRUhYTZFWKfEZ8WmnjPF8RRoDvHMhXCUY8yeQ4K",
  "key21": "5N1DdC4kdpF9fcW7epfANMNiLozDhLLupoTUzNyxDZHiVLyViWsU6iGbbP7kSuNcjz8EiGPNwcQvRjzErWxiBEN4",
  "key22": "23KXxmzi7PdySCmukzF5XbKoSk5vKMAXd4JGWto4Zvi1DZxuuoAqGNwTDzjMaZKpsdTmhUPR1gtHZ8355vQX49qG",
  "key23": "4TpczcEtTGbuHnDER8F6M1qwKHAJo6ZPdCrN1MHKHCZKebvKYW1QFTbDG8DzoLHMLZvEyqY19DpbhkQHp5mc1UKe",
  "key24": "YBaervC3pxE3djoriHhkjMSwvbkcvBCFkNiha2xqe2MwjpfcMyVDoMHhGHxG9nBjLRR2j6gvUPypTPdet9VF9tw",
  "key25": "2pnHtDbtowATp5sFpA4D5Bp4n6n9R96LsTzVX5CmvpskJ9x9AwjxJ3AUxtHDBZcrb1761QU1ECQ3TnVzaJPNbLyM"
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
