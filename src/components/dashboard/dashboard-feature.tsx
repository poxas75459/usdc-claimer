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
    "3HX1R6D9EpPM84HjDAfcowtPj2faCTexf65sGVQ1TxEMt3Dpz4zLTrz9nZgMQyKBNDXMXcHp8BB41b477rPzshPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZgC5DrmMvBTTkPeUEotrDiwXz4TffB7tvMkWcr8WoMHHG7ZemgSGGZeHGNjZSod9umFGzxX4oQTPX9yWEED5zug",
  "key1": "3YE1y39MP1m5FhvJh4oiev9cZFLeEdThVPpJeosVfkpVjM2AE1GBmBUuEhPWehwGksmcdV8khAEr3QktXfQYPa9X",
  "key2": "4noHnfMQDgbvig4zNdpYyUv3MnQR37dy3rFdKvqxDoWtZNNzG5RtproCZN7mrXJetBrjDzqZzoRqBmMNWfX3pvn4",
  "key3": "5CkYMdDArtcf68HghiyVTMxfS8f6bTXWowsL2ZCPEaT83PBRfUMJ7zWDmiPAYoNG6tqrULwAKj5cZKBYEK6ur2oZ",
  "key4": "5U64H4tDDXDDBL68Lzcn5TLtXfpFFZoaA8DVWZbz5QYo38w9jMkkw3Gx5nH3KhpMHhK95J8urHSk3JQBH9fPZdgT",
  "key5": "3bx83JEZyDLVhPUq9sBmN2h4hiCz98UjdTQ3xmtfAbN2euMy6H9nZpV5vDhrSY9mJDMq8rp6yA95bmDV5HGNQEaj",
  "key6": "5vu9T4bGNbD2diLMLF1x8cGCcpe8anksMjU3j87LH6CCueG6wkjG6BoBKqRu5MBvE4xQY2rac1yt35xh5yudXthC",
  "key7": "38o4uQ37hSpQs7aN9d15mFSxsirNQ4zrB68X81T7uEqyxu7SxdHf93mujaUYU6p6vN7Qc42FuaU4KJTT2HQxG6ms",
  "key8": "47pwJFWwPQLdfUSBPLkJ7KD3GTFqtBZuk5nWqXFeo7zW5Wpn4UnV9vKUCPukYJZHTYPUJAeN7RnAaQyvp7SH5r2X",
  "key9": "2oko3An82rZ2YAWQc5DiHtLABb4zJLoFcz8gU8gePpsYTx2no23ZAVVFtoqewvFU6UTT8mnpzhujb1oGo579H26D",
  "key10": "so5oV3BWZv57ANNkSinx7REK94sg9uSG8ZRAT6sR3Fs3Q6sxi1CYZ5eq9eRsXLBASVQjC62rCwZRmU5M1zyGEwp",
  "key11": "3qgGqyJeTcAJYNyg1VKKwG6P9bxLyCbqTFtu5bzSP94wP9gwHNdXonCxdb96nWJKMvZzhvraq4nuMmUom14rckD9",
  "key12": "3Rdc5EWiUZ2mb1SXAwc4eQg6Q9CWbgsFGTxworF2CK4mBb1JSrarkX9ZBzbMGp6uaQMAuRLBHT4VoipnfhoJzSy6",
  "key13": "3RfJwwLWq192tLEZ9xwXZTjm332sh52zyKEaRGKNSXCbZMT5wSMQwY2kkyrSjeL67m4BKBCWvuirnShuPHGLvCQa",
  "key14": "4RrcWGSuYK5weDpyonPPyZJTYrCcXmERxmouWMZD4esBsL5ej4GpTm67ivnyJjn9UZgrrTMc1gASdR5RUeeMQ8Wb",
  "key15": "2UscKhSkuwQdNzoghVaox6uYP3tqPibYbx8eveFEPNeMuH8L3caSM3Rkrc3uPiFfnWZF8bXMLDbWyqMGVNaPyKJX",
  "key16": "gGuTx6mvFTgTtsd3crmNuhUAmaiS2cNE5J9axMjWDaMq6vvrviHEbWnMziWwUhwZ4a3CaaJshZaCk1kedtaehme",
  "key17": "4C2pjxU7k27NLoBM6MPStcXy65WM7aZJd5iGM9nE2aB5tDFDg7N6BnPZUTarW2yx2LskHcbnYULm9n33tQpd2SGw",
  "key18": "63fZzVzoQSxvidAjFgAufenNVpnk7qKHkW7qUVPTmhbPghU1GYHNt6mR1FCUFSQme6cJ1qSudThVpseiQE9NKMP",
  "key19": "3m35gjyt3KFLKrTK1RcoquE2ro4iiqVYkVKLC77dAa5Zs7nzSHr7kNTPrYKRK9UfFP2GPrTaJFG4aYZZ8r2G3PDN",
  "key20": "5X2XKoExd7ZU7ucyY5aMiBSL4HcL33AXNiUGH6eJuTEVaGpM1Qntcgx32nvg8B4CuvXcgWiG8WDo9HKxRFjJTdrM",
  "key21": "4XXRupj9LSPPfHBwvBwBuLGnSbazwt1PqPyUPpVvBiuY2rZCMx7iYMxSs7d8ios486cEfujCs8AKzigoNFCds3ue",
  "key22": "2S997nVmAKvvoj57uAHDronznmEP5EujF73fAnWK9etk6b1vYYjomFpgiXZFAVE8rjM4URub3vcvgMyM1zqtRkZK",
  "key23": "3oYqeQGxeR27mEuhVnUMtBhWk27iFnV6vVyNKdaZ9gHBfFq9XSc5BXfzNJQHesBKuqR4AYM84wJ2iWTFy9TKzkxh",
  "key24": "2eXUc8XVF9xv7xHEvYE9XKVzFig7FSEtmwqkTpkLBWt7zuUeMemg7eHQD3hgRYCz3GtWrJKqdgpdc4H2TX54VYG5",
  "key25": "3nmw69vymaMxTT4wiYb6YobVgGzixjtgRwjdNsHVTWcg6Viu3kp2oJWw9PV1HMNRwM85vzMxcTy6apAGCawGXwuJ",
  "key26": "3iNHPqhdCPknjaftkoivTDErL1m6dd7uyTNkQL5PUSGtZVh4nTPW4pNPBSSkN2654uJiydj11vN3PtpE2uRGYi16",
  "key27": "5PSbvZEPwt3Z6UGr1KBrN3KonNHRF3o16v891k7auwh83qohgayw2d4NCJFPrFsrPTn9QX1msYPezpMr6Budeu4m",
  "key28": "5435Fs4idRyrMSeZygZ1m5Wn3jnfR8nNCwUguWE8UDE8Yr5k1PLHKKzzECWqKbQ9zeSXwCnUw1d8YrsSQoNZLbaQ",
  "key29": "EC5xySFHDhMde7e4uA5qiXv14Qs6QaNj9DPi5TSgbEft47ws7HmwgiFrDtB8sk2yGneCP644zrCf5rHDmE2YCsu",
  "key30": "4YVRfux2PT9Z7Rvw7Ta6s3sjhCG6TXR4n3DPjiWQtnQKNsuYb2kMgH5CBmhRkk3NXLoo2vzg3cJR14S2R1RjN27N",
  "key31": "27tg2WQjgDWKDYLQRG47wwhzaxh7GRs8odE29tvExwgma84TuwnqmesaY6ji5Hoi3zkQbYVEiRNyqq5ar7QAh5zv",
  "key32": "3WHieFsh8WtFuqC7tL1hZ1p4RQkXHxLniBzAWJZWZ4kNyXEHjfho7m9mmkzXV8H3jqSVAeqt7KERs8uz4oWQKwiP",
  "key33": "8ixBYBQeBLePPAYfYvwoZeJQprhe3sMxARzRJgXFPmnUCVa85s3cS9iMF7ntavQjQJLJAciVBnpxsXCxdkPvnoC",
  "key34": "4y6z9nWepphvhAj3BjACfqHDbLbTya7acqedkBpxME77RnyvRuYTPEuQtG5rRzwNShK2LYUmKB16L9p2AwpQUrcf",
  "key35": "2jgVhcoUDz6i3yCYwymRLZQcES9owsMZcKSsxveAgQTGPQHdcSoYFiKhH1n8MYR9dbzS1Zs7e5t6AyeKBsqhs5Tc",
  "key36": "2oKeXWZYFzoY4nntjLqctuj3wueduVADQGYu4E3UZJdYRVe6idHzPB2fD1FHnV3HRAfrciTSsZ3wqRoz7hzvEG7u",
  "key37": "5aq3cgRDXbaiqCHZqSBrxTTvfAs9P7pdYGAADiVtbxa8DhaMqseqX9EfQu5sWX7AjhxwBtnGcsUBbp5dzbYwd8XN",
  "key38": "23NGhCRJFKLQF8tDdn6sb8BW7aKrgqdXK51GHQy6yeUgzZtk7UHcDy45TbHbGPTJ3T8y3j1a6nZXFT7EpHE2hxbF",
  "key39": "3RHUk2XpEVPLjxRtQZS54HCP2n1rkK3PUMTbtimjRSD76RBSUV57HV7Lpx5NYzrLPLieG3T2crywUXZPLLmGKoou",
  "key40": "576GihshT8wc11rHurEX48ZtnKcwPXN6jZiFLhdVPRcqqF8k8tCzrj1ys6pTB28btYaBfozUXTm7Ep5mrxgHEpjA",
  "key41": "3pTjdAiXQzAcTY1sY2at4LTV4AjTe5QufjqFNSKiub9gvKFSHyaXeAYUh3zVAgVkkmu2i2d6y982w7Eh4aepmofc",
  "key42": "5ndiBBzGHzKyWcTdRXszZjrnyFPNeB2rDmQSew1Cy1uEGiUuJ7Fyhr99daqD6a7ZAHyrGLDvrW7Cux17syTYxhsW",
  "key43": "1nYqZkwGqekZWv8S5xyRhwaoG9BvQYW2S95sHFeMVEWYiAH5HaW3pd7a4g1k2qUcygfyqC58htu94DWD4yRU6oy",
  "key44": "2QM5Q9QiWMLuFHZASuN8SaTz9SVKdkM2ZDXyNsTp9g61VPrg3QtVVkivAnCpur8uiqXzKVKr93EaECTx6DYHuswg",
  "key45": "33DrejfQw9X1KMAr2hr2r5z5BqYnpBY4k28pNwkQRMuQPXseA9bjAbpEJaqqeYWHDLzshQhAu7PQsZr1YsyhhCoc",
  "key46": "xXHnud7wiw7kjasYv2XsUoZkD5SLaGCYhnFgpdAJd48WX5komXU4bUd31vpy4qqYYQiCDUAUAZsfrokuNeLPF6W"
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
