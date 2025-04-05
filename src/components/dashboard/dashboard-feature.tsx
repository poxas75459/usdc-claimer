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
    "5Tjko518542uN9FYMts91d68JbDSZowbXyTstYxibmTuD9Jy1879Vi1D56J6LJ5fHThoXBDd6Pt8paGnRLyhzkec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49CKQ7wtedTeRUHnxEbpZRm1YUAK26UFMkAayCyEWfyKPwecoo94zeVro5CTF66KRo1tq7Bp7zhgyHR7VCCA3VeA",
  "key1": "3yxvRTc8V4aWEmDkcLSe3nu1DqBXerY6UPAYTpvcbipEkeaG5SpDbVxFfqbUBwwz582w7vz4NhwzUW5tgkyfdU3E",
  "key2": "3o4oN41593VQKCdbvXVW5EAVb4Mg8BbeSohwF3DmWpkMgkyi8csWwrENZaNQ6fkV5okHEAnuWpkkhQxEHMf1YFrG",
  "key3": "5Dt18ATakncy6dDoiUyZVPXE1Cvbjwfw3Ph39KRFHX7B6GjuiXYd9ZfaZB583Ub5MJ94Jyi5dSe3nvEGAg4MqB7a",
  "key4": "3wzxtTg4HTicnafbqpnLsXjF6sbQxk771N7nuBX3eUDjrmQZ16S8iTJEDaabsYNXhMy9NVQaEMwERmQPFPzaLjff",
  "key5": "4zeni9XzwxdGtgBDGRnxzcZ6uV9v3Zp5CvXyhFSX5A9yv4MkWaBmxXXbjruSHFemxhNGa2QFqxXhow8Lu8cSwnXD",
  "key6": "3C9seCdjH32fgbshU8nM65jaTirta1d6u8kVf93j7FiwbWgXDoCYznBjYCxHF6Pyn3tpgPR1Gcq14ghME3w4vrpi",
  "key7": "3ubkoC9xmAnZAbCwpokcCau7bWeXrUHY8V8bp8Dk4CGrjxnjhPUnXFawVcY75YJLzTxuTDVPzTKyZzXhyUmfLHhJ",
  "key8": "5TvGwH1hZNfa6MeR7MdMVjijBmMsuU2Kk2uX9nFduD7TLB6cxD2LAiXfRCH8F1NYoY9TAYkLQ1uaGvGkJTUb1Y7Y",
  "key9": "52Bg1rdJR8vgT4xxLtg2EymsArrfyx6JkujLaqhGaFni4EpAXb3wkrr27BkXTa7ycAQPvYW3BrygGEJZdoEMqes7",
  "key10": "2YcgvVFSs1396xtrAXYFJ3c9PTR3aUrzJRvfX3jVgG3uDG5pMgFz2pikz7c7wbqUTjLBAqKazgLYhuh7kghivydJ",
  "key11": "3Fj8yQeTmiZGz9EdVc9HPSUD8uKxAdBZRv995swuedYdUJpJWUwPGf7LUmoBzs1ztkDJpyVsPUMx9Y4oUVuhtsCL",
  "key12": "5RfbtoaobUsV7tfP3U8AamiTGYziQesonf8TuBrDHNg4UE2MACcMa8TCRbcE9g2LUoJjaAcYxCyb4MKkx8GVNcFM",
  "key13": "4KzwTGqeCLT9PGWhuJBH6QLbL9aLdoe4AVVpTbkAxEHUezG5hpsjL9yDz9wb1YB4KrW8bWHbMARKme51dMScTRH6",
  "key14": "jYJtt8fEFotEVr9vGBXjVjLXRGBZpDCf8p1nrzzE7a7YABh46VAq7KHcdvxgu3twrifmh7TJGhhpJUp73XrRZCj",
  "key15": "QudHSpsrYptPjcH2gA3BhkoUqKgvzGaww9yyBqbSY7Ucp5KqQLsKufUkGzyfmkhE6gxc8MazpgAXCdacTBE7amD",
  "key16": "4aBTjvPzLxcYi2HnN5YfxQQ8rh3as3TymWPRHKpNJLDcTMagd1p9DgM7WjuqjJK5r2W2Hh7ofjbGkM1G6hPbKBoZ",
  "key17": "3ZLTh53J59GxibxBgJD4C4GmqzuBy7Wd1xhPJMrWJK8UM2zyPEQ1nF6uX9w24Z3fSVca79i5rUrdmcouXS9RPsiZ",
  "key18": "iSmj82bHygTChLVhwtiV3CE1n264vtjHJbXUWVTgEQKnSTTUVMubmBnT3XtdhTGnbSyihx9YH53GobHFRwE9W6i",
  "key19": "4ucipmyGRBYv3ARXAKhESdqHzLBARRwHHQbL1hWMPYemNcCpVfDz7vYsCUSeV2nDsJS4wFwT3Cn1jWrRvcNaCzuu",
  "key20": "3SLs6VXKebisa9VtvdctwFm3GTAfaqmpqJ2gWPoJTcrnSEVKkYAfJPD37wg6KyMJ19QgrgMdqvj85McmcEkuuJkM",
  "key21": "4ZmGsHKx5LAyiFq3FNRDKoKCCgXmkyqcqHiMtkNgc7mVYFJ7bWURKwAEKNhJ3m7gWjGWJzTGU2HSUpvjY5K3tNUG",
  "key22": "4YHA7jFD9jnL6pvUqzELjF8sjWxR7tUd5kuwLxDyGKvmWfSxef7pP5HQfQzPydxy9fncd6CXJnXYrPZBRiEMcoNQ",
  "key23": "5mdU6iN1besYKw6Qkf8ztwHLzeigbyr8b2JxA8QzvTSK1TJu3tHq19ewQdM6QNdi9bwFrxqYDj3yp8BYe65UsUvL",
  "key24": "4d4M4enUR1wQ8Msa1YbBDWCKpC6yR5ECfAYFSWZRNn4cYtis2znjr1RDxyhGDkq2hQmJ9LWVChyMgDJGdrPV4TX8",
  "key25": "5J5pVLvXzyHPYDseC7VEfT8XakuiPhr6J1oAGF97o81yrfL41YMCPdg49X72vRspCjaGgSQDuHb5mhkcGWPyjX5o",
  "key26": "58DHMVeSFVte4RSQSCm9excx5dmo3jjavSSudmKTKngYQFbf8YEr4SefrZpaWLUNerEKSjrjLHcm7Vg8LzaYwsYq",
  "key27": "5svMoAn5ftjtSfWBYMF8D4gg2PEnEm5stPgqRTsRJwkMKbigdwe1LL9rWpmn6uBj7cSXd8ySDFRqZE8UwherkHuf",
  "key28": "5oDu2izwnT9NpgDfkxP5DyHbV4SQXQWWF7vwx6uZiqrUf6bXqmhbh8TxE12BH7GUVF8qS9GBzfDN2m4PDgq1nS2W",
  "key29": "3LLRWpPMBkoVM1Lo7Azw7CpiaGZK91UiBf9H3WdJQnQEvM3n6Cqwmyirc1tTHYDhSu4PRumP6St2nRhfheEBUthg",
  "key30": "4PiwTojFTVVaWNnUk7fHwHcL9D2cemsmZaYrWdWQcbwjvKcMBpkK9uSuXsWSwqaEA6MCUK3L9pRocjsarZ4b9DVR",
  "key31": "S2kyYkxoSFsiCdups6j1MFg548onEaw3HhrR8mbqnnxd4yDJQtSYEDboUQ2vmkqpKFVjNc1nTsWz3YDyKHFk6gD",
  "key32": "2GcSrcTiwswgG9aqvfyn9b5QWCDYRQistrTQKaDF39gux7PhNWA5uuXxjEj44QGZH8ZUxUAGGg6ToWygJuusWZaz",
  "key33": "2ai2mRS31ffstqTfdm8BVfMrUWo8XNuSwReNSRRrzVKX4kX94FoVK96krxbhvV7QqqYDZXwctQiGesTFNKWzW1U6",
  "key34": "4pVqazjCUfK2RHG3AP5TGcXqyws4v3NW4TeHPC6wfJE3wRTWtQVyexnLPyg6GHmjBvg9ZrTECwKiK6BzuXtYBj8P"
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
