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
    "2dwpweDyejGHdFKJht19VtKept2GyGvQoDYvCnEgYRJSdeaJ6kk56Fvst9PaWWhz9KAJ2VJSZDzeh7MxVbAb1nG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TzffBPB4ZG8DejUuRHsCCvMMVkHz2Eud5bAfBw5V2fs35FTScaxohpbmep2tuof1ZAx6xumL3WSQCyjGLmz4Kyo",
  "key1": "NcHz4MFd2vAmgLBPqjjgANpEXuDTQ7yxTSdc74kjsr864EWRZqB9exx2xdshmwk65GJK9SyF4LNdFsvQJMFuKxw",
  "key2": "5oaWGeK3zXCs2oE3i5tSui6KxRwjdvtUegNYgTKAjrtS718o3hn5NPs3pznSoWAnnFMo3q5XAehFrQr4X2696GZG",
  "key3": "5wctLajKc8oSrmbNQUCGLrwS428npuUAtN5PTzPzAVaSiES6yUyBjTcXT4LhBnAWdKjpDTeEknQmxXW55Sy7A61A",
  "key4": "4ycS5BBQ41mpxNxVGvt4UPr3x7jQeePaVaiV8pphdxTguMGnCBbcDzfs5kw8sh7LDxZEdeqjdQsR2ybsoq4XubX4",
  "key5": "FUSc6UX8DsB1ZxDX28UEoKu6JGZzmfXpvPPao4VsUXh9uWzUuNKdAKML9AAdRZKVX7pjJKtTjcU8x7YvEPtz8HQ",
  "key6": "4YZwh11VA6mTJ7tadnL3VnB3VnQA1646PffEaK4z74KQGvkDF6LWKRXebNAYq5zuHo7rQPetGVyNRHncJa2Qr4Kj",
  "key7": "2cRvrR1MRe5QdjmNM1z3Hu28J2hf1maGKT8YzQ9xuyrUk27ybFv92NHB81nPkF9sTHUGww77fa5cVLg8ijX71GiJ",
  "key8": "5BLihfxdtkcknSRhmqfgE1338krmsJXPxBbqbK84NvJfgDUaRLK5WpMzFXMpwxAebu7ecsZV8dEy5vMMwvh9w9DN",
  "key9": "2vZLpkuJgWiTvBkudEPneZ5c3X4FwsG9Gg5x6Uf7ABrYDrXmssM5yCa4Adt8xBtCHRYaFn3TQTCsVE3DrhSTubZu",
  "key10": "2ZHnhtSQUK1vVkAgA3rpikojXP7SPX8ueoDq5PHCGZ3LQjEEsMLSu3YM8oijZD2ctF25gwKdUBY9Ti1C4AhCPKYR",
  "key11": "2r9ML1hVxiadzWqUExGh3sLmeGgGotF9pCfceWnupQ4CpTp3GGBiARuRHF8RfMA67yXnhWA3Y8kfVRoFPXZgWmx9",
  "key12": "3aet8cjVQjdCuMyJRVKjPynx3xmia1gG8UwneepjYxxvZYQZePS2BpaMvRZyXYHCFwBvT59YMYoQVsU2bxz3deUp",
  "key13": "4zTY9XHM7RG2T3Yf8UGLuDi6GaTMxGm6wUJwBVqTpTJWtehQK2XvtE2vxyLVq9wYYgoFtq12D2z1VM5gVFdVpjvs",
  "key14": "vfXnWCx7u4sZRuhfA9toNGXpQyz3Ypc9aMxk27bZyW3yJJn7sveW4EnUv1tNj9hYu671aUoeGKnBkMEdxCcUQsd",
  "key15": "48DGW4GNVrbq75H8XTFStL7t7Z8s5yZcvi1zCbcadYF6L5yLocwvkgUTacpmkxmjz4jEf3eLWGzvZyK1AHsUMgBR",
  "key16": "4UEALapeMWyj5fixrdShGtdW2n84gY3W9oB6vPthxSAcBbEU7WuRdY6e5VsHdq7zsgS8sp39rdik65a7XH986F7B",
  "key17": "48QzJhHDMyTBBRBPQgZzRWGZbfCbVhtCYGV6uHGoRaMJ7T6hRumQwTRRh4bFn9mQTJt8PRXQbtoMCeeX8zT8RxTM",
  "key18": "41uMKP33scZRbKLHnTeoL4fVgBWYffAyFz9UuD34ZyBTCd3ayJgrdJe1oCECoWy75WhfMSRmYWDkyZGRc1bTzsA6",
  "key19": "4hGRc4KtqRFn9BCgsMM1VsrWZSsnMphP9LoKJeTUsYWUi51wmNZh7xLNS7PbPcgieA8b2yP2E9Reef3hYSTdArX8",
  "key20": "3pcvpVM1VKN9fLS4pqNG9puyuZzvAMGyuFsgwZ1W5AEfGDa3qwVyC6gL7ts3x1q1xAgQTp4cDVok9eGcvZEA5vp9",
  "key21": "263oGKw1qbvKeKALRLt2CK2LJL9jEuRa3FypxEPQKCdt3LdfJuDduJnfq72TP6AFaHX8tAt7WwVp4yNuB5tqcSSX",
  "key22": "5qkMqwA7YCvNcgKnuWqaJyfWpFYNjkKN8kk28Wh6b5jBd1YQ3EvW47s2L1XiGa7Y1PstiPUFGuU7u7KrKe3yfmu6",
  "key23": "36d5UYxuaFu9iejdpipJug3hgtJzkLduyQDfokHVsfgvztfAe5wigmSwdTqh4E2uT8LQKfh85MjpWCZy7Z2s6by7",
  "key24": "49VW3CqjHcSBN1Y5xFd8S6vDYS5NWi1fQccAbku1UwrAYjN341BPeCEisFNGcGBx7xsiA5MU4siRYjA3KCmVhUyV",
  "key25": "2SNmzFFiyURkAWbYb8jSKJdf83DHpz9r29ug1hhZqba397kuiFGNLiSzY8bLXkqBhyoFTb4MBReXuex2fKTgKD47",
  "key26": "4LLbab69RKFdTahNhffLoGMqddeqNUUxUK1W8pCfJdgE1WhBhDvgCvbUhoxALQ8y5W5nASLDQHawdJiooFdixbRb",
  "key27": "3ZNXMsPXxQKRbbTXfJvWzCrYtQYnxa5UjomUdtSGQp5u4wr5nsVRh7ddnmBxrUtBgu2PENtdhi7UntGF6NZdykjP",
  "key28": "n6NMam1U3QfH2hKFFmcWzB4AZnVhQ5VbZwBNTo8AjUrDBGoDUGxQpDgGDJAJMnVsdrKZN9dvR3dtGWCSY1bxQve",
  "key29": "4gubCbJysbwCzZqrix8hUmXTsrXJpJhPBBDD7oBQyLtqjsBJur44eNiN6oEiGJwZTFwGFEMJ1dKo4GpekfkDYuPb",
  "key30": "47fniqGjq5kXEW7BJFvPTAwNLi1grNz6Vmj5yjAsqdM7cW3opqhJ9aRH2P8KnMnS6meqqk7PJyNDCvx8ApdXpKVi",
  "key31": "3Rd1PeQdoRshZtMH9TwSCLFYDcm5YWoEe8niTxcUykRxW1ogvg8TacXndNrt8qVwubYNyW9zcQjLtM5mzb3ZixME",
  "key32": "4ziCXpNY5psLUtL7ZwnQS1wvBbmVY2Mqu3JTBAuHSKzRoB4QQp5AMtEFGry1yuw8QErRcTWFVnMGGdb5PoaFVJ1T"
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
