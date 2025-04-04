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
    "4dT8BoBe76HCbRyMDfM9vYt6mCb2edsLiZuHv8RzByvjXK5vQ8jeBPEXzc5i7avvymf3r4zzc9Q1K4diSnVKJ5iR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q8mZcMXRosh3hdAiuU8zUufMaTUp8CaJz3YkTsjazX8UEv7ipgFMgrTvoEKhsvitMCkJrU58VWwXyCvgtwnt9mr",
  "key1": "4SmNpks8huuvnZAYy1zHijBB6JwUycFSGMN7i6ZCmdE1wDLo5pNeZocHcnZBQabTyc3g3N9YCMYkH6yEFXJsy8HA",
  "key2": "ZGGQj7k2xCqr4w8gNSwu8HCmNgVjTK2aRZYc6jSVNiJPBhpz9FfnHVVsWvXaSxMPYVFJQRyqfda37ZFjZiVwAxZ",
  "key3": "51Rroq38pPRGcrpwHGmHY9QeMe1WvEKfJzg6qBuzcMW9CrZUwGu9hLP9y4dFknBbXDXQX1rQgc8yJoHqkKrh1K7K",
  "key4": "2ehxoLMVABhtDkNrjhSpEvRx2CjiKHChJkDQM5xwoyMrHj5BvAQ9srLewksdGb7aW4EfKzcDueDTHH8s6Zv2buJ5",
  "key5": "3vRTwrXqM13p1sieKXJNt78TDuEyFBuws5AW4Sari1xWWxfY1BM9pU4k8MTDz7TMVVnLp5PSVKvSoW4NUr3XKQ9x",
  "key6": "4nAvDDEnHAWH3UCUy12kjgERZ7QdFRhgypsRyqxC2xVgNhbHAitWqHmNZobSNLLEU6Jwq52zPKYWuuwu5X8yazqr",
  "key7": "2Tpai8y8FySNTHPsnhwr3DfqvH68kAvQy2EMEAVHzyMaQ1phptnayYtnUTZtkaGrunYFRuaMiNCBUt1TmwQTdVtw",
  "key8": "5fgkPCxFQVGGyAzpyiXKsQ7EW2Z12xbiEJzxtxHfzyeNYugxNqm2wc4QApkWVyLWnEstDtG6yHhGG1E76mcDP4L",
  "key9": "55QZcskabxmz19xtRqungDnJ2nstHMWuoK8ymisvEpT9isGbaPAUiubKYvoVNusPHca1P89igruVLd371FYyj2AU",
  "key10": "VZEnpaBf6DUBFKZ4dSJXiWGLKsJ9xHc2CaeQ9tTWxQFzm8aeXgLDqVcQkuz9nnjLLRZvdMLzAFTumjXr9tWyVzb",
  "key11": "2goHAkieZZCNKA59XF2dApiXnEDr7iH4aMP85JhMx5MozhhP7eZtXTe8iaws2U5gAtJdAiVkxJ3CqDcU7KNY36m2",
  "key12": "44orN2ottTzAyMMeMCQ3fHsRbyBxS6VjeFLHdBy4XPTER4PfEsiys6JngFxXT2R8QbYa4qDqLEtmGHPSY8SRktEb",
  "key13": "4GL27X35BwCb5T6FXUspScfqA1mfTgf4qASLQL9uLvM4i8XaxxqiCEdXCmhxud65FqvfWZzd87ZRfNSvdioud5wP",
  "key14": "43mdkNtwTWXZ31As1Jatemeg1oFkBejbcGKS6HsnewEP9GCfTkrQbwsGHCWoPbEyomfbcg7mg6hwCTQoDcR75DEJ",
  "key15": "2Xje2midxmLzCaXCWFAUC3jxzease88gFHKkN55NHmSnuvcVLSyU7knrARGMTVkbN7gJoDxsi4nKPyTpEnst1J9F",
  "key16": "eSzUYs9kDkJeaodsL5kEoporsSeY6miRdsBMSoYGfRqNjGXoATTdFkZqohNonMWRkUJSmHvUpbqGJAtMQHm7eZa",
  "key17": "2f7Wn2GMXMBjYaGtS31N74sPof76GUEBJnkfgP8T3Ro9ZJQaVJo8K58JoEXtYhQmL13fgcDCoRmzxMsfRtrj3HFX",
  "key18": "65L1gaJfzDbTGGLrV733iLhAkgHefAvLRy88mtXLwYWWGv4ESKTSafdgZZ43AzKB4hKj43FiMGSwXhGDVv86t2Xf",
  "key19": "2RR2ezCHDMyYWjZcqP6GU6oFaYLqkb2EbTUqXSDATGXGdwbUkhVHRVKtnbhNwiKjKUMqyrjrarmRcrc9NcX4jzMG",
  "key20": "3YFKrCpXJt9aSi3367m2JK2WSsX5LS8v7G9Zvv7ss9m5z5M4GMXNsFmCHMaDhTEe324g5NMfi8yshbmbhQUowjpq",
  "key21": "3cjWAGkbokF42NHhC13AyvgL15Sko8KpQbF6SfPW3Q8fdTjHN6drokNQWqgCA1Bhp6qMCj6GxmaataBQonS4XsXX",
  "key22": "5wJAwf2L9est2LWz1qx92sS2tVMK73JXoRK6XPKcgDcHTDHtpnsqdy9H5D3kov6YcKw3H6ap6G6vSWcBXkgatkRC",
  "key23": "eeDfuW5fNhjqGuUP26PHmsrrURphgZYLGQt33GDaTvAVdxcdPUfXob79fpy4v9LAUbc4aR5fRYv97Jo1bn3bRqm",
  "key24": "3weAUrYb1vrjghRsnFRe7soFpFnagCromo9gxd6yubodsQB8j4ReGX7PDUaLQiQr338hb1HcZn5byExZH5PmhdWf",
  "key25": "uvMJu6yk5dduGWVa7WHjRdVv8RHZoUfiJtHUN6RSDydZfwLmuwtL3GRp8ziRhPFueEXtf5p3ffNzcewwUfBJMnt",
  "key26": "aDvhLhBsUzdeB4pgA3wxzTgRKqhfMd9Eg5ACSo3WcLqH8ZzW48X8aznH46LRWy9pZCfKzvGFvKUvTXQXsJrtiHV",
  "key27": "5tLb4yMEJDQWrHffWYza4XHoXGwqaQhEFYD3gSXBuruBujRPtsdA6QyPxSDdzHi23C2NvoSb8RtKifTowxi4rYzw",
  "key28": "5N95d27cKf6PCHujpenuYbATrZtxgn52acpSH5E4ZCnxVBi21Gj2aAsKBgAAHSDhNhh5opNPeBpd7GgEtjUx3eLs",
  "key29": "2XQ4EdA7VZabraYJ5pe6ZiPApcjydtQTP3JYvfNeqdKYivXGGf2eBaVGzi6BpJUdaiJfTiYosb7i1UkbczU6iN13",
  "key30": "3LNg6tfCKst8owU2yeGFd9vxuiZhJrorBPn2azdw8d6GjN8tJiCfESHM4p5YYQ3nMqkU7SsFjkL2q6tEnoUMBapw",
  "key31": "3xpGivxrHhLxY8spBfjLffVGLyE2xT4L6s6GmgxM5EDceMefxpomfsefJ1XGcKxx5U22VoMuekx1ksEPiVsae5zN",
  "key32": "2oQVMx1brMpC7FzonHCNNCbzW3nKAuxhxZx6aqEb41YDJRhTvgyjyr4cWnZ2Mm9VsxiBsinoGWpq9mDsADATx9Gv",
  "key33": "4G3P7k4LSedyaseFHQcpMLL5UoJcGW3GDxEmktc84GJSEVvnDzgXM3Cm6SdVokHtEDr2xzKAMKjPYSNGZ8Pgpx24",
  "key34": "47338ZFtfN7J47TbXE8d75N7ycvsp3Zv49M1VnJowcHGuwyDcAWgeo5VcF8H5aCwr9fjAhtkjpRuHWyfwC7kGXZw"
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
