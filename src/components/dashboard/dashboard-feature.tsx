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
    "Cnyggqk7gjWNkSVcJ3SLSwAz8cMigooYHo9Sap7dNuRxNzgSSUU8cjXYkNQE4Znu9cZVLmK5WCXQEvu7UBYDc7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "99in7yikuoAHm24BgTPcw512LN3qgZo6RRmGTfRW5x2cWwcdSTMYiyman3tLvByjWkLwfVHYGN5u5gSkZzknhjc",
  "key1": "5F1feraPTe3uhLnYd8tE8fY8FR2MyokLqC3VV8jK63bgg5ZmVNK7nRCg1LDDLcnX6foFjQVRFpQGz36B1SQVdET8",
  "key2": "4cDGrc5d9R7wk2VWq55wKYC9BBicMxpN6TKwvuxv8yxhi1onK32juVisicEeKnnuwk3NEzv31YC8iccJ8hcHaWJM",
  "key3": "qXCZjfrDaikLocuQ1GCJYTbQyeB4dFjpztm6YqPHae6rLQckyAk6cTuaYtnam4T3UMWbSrmT3jjaMCzV6E5Vwui",
  "key4": "Lba3e9PX5HRFeKcya4coXUF7hiNymcqGhchusvrkM3u5jZyfYvCLSUki1S2RBgPAVH4LekmJRLF3UJJC5Cg65QE",
  "key5": "3XdGYNSw1ktpPWnpKiFa5cUo67bPWabivZSCcibzCFEez2t18Rze21a51fM4FwvLftsj4BarGn6Bx63vDj71KeHZ",
  "key6": "4bMj95hZfSr7Q2fBNus8t5Q6ubNCuE49jHdnyTgekjT49wY1kXK6K94ENkCPUFR44eSH5NFBfozQzVEcnkV33Xvp",
  "key7": "5ncnAJuACMs2MuU3SmVYydDvBVwDRPYcag8FHDssdRc85fBmT5pkeVPbBfxe12mRNxwDxXiEQek8PS4cK1WPhAso",
  "key8": "5Jo4sAsgoQ1WE8uWtXhzPFT6Bz3ebmxjez3JASQAsDm1quA977dC5AaRqVUPXU4dbJKhyTvPTLL1JG8Dx2sVaRjY",
  "key9": "3NALGa73xTdcNrQsgQf97SzXZFo7JzXYZkcn95JVyh9MdAwsB6uFpPgzqVxEm3RJMBd2ohcAiFti2NkkWk6xm7d3",
  "key10": "3rFydK4nr7RVf1cG5Q6ziyWiogZ6f4whDdFPF3tGh51NKbLpzXt2bq8T6qQaPnYNEMeQ2tPMxz37Bh1HfkKbtvxN",
  "key11": "4yhp8XNa5RgCrZHRd9av7NsoGHg6kjxBqTdrNb4BSdoYtoMj5f6NP27u2u1w1e4euhaK4kzreuPy61cSAq7ZJaXB",
  "key12": "2thUVngrFz9t6xbitpgZ4RVquaN12GufkDiWkVhEcpV52GhxD2h2ox2zRJTeS638ZsXYUVuUGna86JJTt4UCwUqi",
  "key13": "5R8tkwiTFp3c3hBTdy5xDJQsLVwuhXoHnnneeQWPkdv7VjmGBREosmNVZdMvwoyhV22QLTEJhXd8qSEv92tSydep",
  "key14": "5Q5NdnrAokBBJ6ZvQBzndj9jhqhL2TdYkEx5AwsFWHzJffw3rwSKZk4v9hB4F29YhUCTxk11wof1777imRo5rB8g",
  "key15": "3d5Z7ihwAYskFsNf1burcury3EZ6VXPeBLmmBV5qR1cRDYjtScU8MFyAE7Lr6qmzSLQXPQDDTK2LXwUNyURbFU7b",
  "key16": "GD3EPVLAHXRYRCz29Mckp8zihc8EbLxLGGwte5ADVYSyrVpUPa5tCA1vo9jzjgQ9vQVpfJqKynHkhYdESFgoz5h",
  "key17": "4cuVv5cFUvHCKrieL1p1vEA4RGBtZbyBm6U15XRpvw9y5H9PXrVaVG4LDxrtQTDLx3U2NNS5hKc17ijvYQo8mN8K",
  "key18": "2BzBWDayCU1Bqvd8o1mYqcpQWHCfT1hSgDUdYZ9uGfDfjd3W6hqNR4vbdgAUmBsGKTuMAaMeMiGbCLDZjN7BcpwV",
  "key19": "4zsHfTn95mfDTmc98aUfxX7jCz3763H25GvoEVG4vGZDhtHXC6FxXEpSd6s3Rgf2tRF9wmwrvA9AD4icY5yAio8p",
  "key20": "4K9JG9MZaSwBuBYRhhhZHtvEC5BucvQzn4jx8MCs3D87dKe9chd8RPi6BGqNfN49iFEGWeDjrkNxS3ejE9awmmFa",
  "key21": "3jrGaGf7dXpjHohk9UKRwYHBVfFbwuDUdPCnkjG6YdkEDHwLxQ57pjtwT6xDE1R8kpDBBsynRpFrYeehKw3UFNQX",
  "key22": "2SazaQiecvbTa22FKHxqgWTnbGGCc6euFHuqK6v9VKqv8xoUZLayUobZiFvF7s6g1V27ikpHHaWqTmMexggEsLyq",
  "key23": "5iWnoFeSG48jidBhF5CCuf94bmRafFcezuKNHqEc88A4wu9zG7zoLDtirSchwB9wMSdod1F2ojFfNUtUpg9ryLPz",
  "key24": "3guNzyLnfZ6BGSopuTePMXUvdnKhTnjCNZQyZyrPhWGYtE1HyKjgRxDPznmtLbFoakacuu6rdoB6mCD4iZVZ9EU",
  "key25": "5tC5E8u9vjyHgHuzKdUqhDgfxVsUHm5nK9q1JcyhK1F66g3eJ1UMmapKZCHc3NhirD4yUrJuevURA9gfKraonUci",
  "key26": "p6ew5PFXx7TsQBn4zpxWhGg7wLaqpvMkb9HEuMTrjwXYvBffmNJQvtiDHrMrqGqesFxnEVC9CNM5WSWi8iLyuie",
  "key27": "42e1zeWgj4HGTeQ5jYynCtAFeQWorFHFqX97HSvUiZKoBBosJ5AAmp1h5GnaVXf4efXwzM5JjCQEhrSVVbSHXm1D",
  "key28": "f8GPN7Q7NmAZSDWfvrmVsG6YowZyLjLvsBZdCk8Q3ssgwS6jeBXeqQQ6SGbYF3NsALNCXBEbuGNvWwL7CqERuwc",
  "key29": "4mnqUPRkZHNZQce68mDkZByZAHsT6J5kxM8UdrWtNYpBQ6AqRY72umjVSyz497nBRVCqfjMscvYBjoUdbVpTbMTF",
  "key30": "44XEfm7d8DXFXuvcwBfnqzmcHYrd3bc23do9eYfmRZvMNUQ6W5aSFk8DnijScJF2bBQsphT4jdkNYL6s2tmWdwDb",
  "key31": "2awtaniaQqMTaz1qAcmrSesq2a33JoszF58yJaDgoJGMV69cz4pCiwFdsr7y5UqPcSnh3LKwznx3wz1qK8JpmueZ",
  "key32": "7oRDVzBksmMoZcBTHVaDwxZwL3itLfuUPAPhhR3PqruedRGph7KaN1RiFNjP8dte2fu9jT9DyUATNc8eMQkvUGE",
  "key33": "3W8xEaKJuoAyCrD3h4qoKeCkjMezwmbBFgde4Lx32eme8NSa4ztyK9htjMoBfP5v4jXGYUoxFKAaGveHt7Hh4ztv",
  "key34": "415owx91vFBaUZvT6s5UrSCY1U9fKrkFTqZbE86zyEVwED22uHCw3GWhZ1kC3BR5PUWZ5higgYgBzDbFyFbvsfSw",
  "key35": "MW7ZwCRP3TCeegGoahsxYMMyEayEvojzV82SyPzJudmMGi1mMMARuENnEZpWAXurpBpJSpeUCxpEzzma2D7bywi"
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
