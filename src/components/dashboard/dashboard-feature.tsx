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
    "QBrWFqajVnYcNQjYGy8MwZHRvZJRsoscab5QnbqLswZvFhjMiDJteCEuDbRoW8jQfsPMx7YtiyMab7m73ZGm68g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jza4NsniiACn2J3DJhgZUdVBRTxaAB1c22vrJouL7YCQ3isWBityJNDehY4oeS8mKa31U1Y8xJsMTYEk7DBkRkz",
  "key1": "5MzgJHgM6QSyqZjFhhpQmLGuusCk11FF31MUToWU5TrrqpZn1QvvxNtwm4tPsJavWm2igimZDQU4V9Cxk3TTiUfS",
  "key2": "4y6pak6aYfSzpaqeeqmsro3EYDAvjLNohGz3P5V1dehXZiVvkpmWwrQiTEXX9HcUKsAruTSEVU1aezLk6QwYaNyX",
  "key3": "4B3Dppim2mDzKanZERyBStty948EH9wc6JUzpC3s44VkdLh3nKtox1kGejpFUPnF1MxnHSEmgxhjdxUFSrCey8js",
  "key4": "fLSpvP1SDkwLDGmsYWKjUSrN5JGLC1VAEx2bkishAt6Jzg38xLves1fqX5Xrvz1WxJXPyhKgpypKUdnb2d1kcnw",
  "key5": "2HESGpp7x6gWb4hsuC2fAN39MCAjsX82ZFBrQxMRrtucdkPTczfEUcsDXmxTXqgzNm6uPy6F9xFDXPGRBiqXCaE8",
  "key6": "2KrU5MZYf5akoxBag6TnyNYhdksnibsUwSmt91V8Vs5C53hj8P8pmTBMNiouZ29KXTHrcP3CNJQjHhB5arFfe2SV",
  "key7": "61THvLzbYZ5PfdVMBTbvddJpxaJAe6iy6g8R2Cn325a74CHFnfLcouhw4huaArgANAuFvPDG7kNF1Hiw1j2GEa1H",
  "key8": "odfNsP6A8qjYnzcDYP9Ygn4W57Ldoxm7ZAm37p3Sq1Fexr4J9qn5iA1ue3ZgnwZ7tZUju4wPVtS9u3Wiv2tEMog",
  "key9": "2jBAGJb1K9MjoUwxqjcrSt1YPgjjoGA3nbYwJLD7TToXRdhW9MLepW2GsDvCu5mQeaZLVpceMgguLpfWACyJX3uS",
  "key10": "2BrkqVEy8aQ1iGdYFsYzMsidm6VKMmUFTXMHBPuhuZ8CrFPnspLCnuHY5iC5NdoZ4QDQWEmxiuvCBwhT36LNsKJK",
  "key11": "5WZFf9J8zDgsbHpG28L2cxkhtB4RPFM4uhT3nGfGv41PoDQGquVRkmG5ruqeUpEK6v9r1mC2Xeu6R9a8UfDvThdq",
  "key12": "2thZ55SghhQSY3SLUBr7LLAnQhGveogfWfhVZwKf9fhr2KKLxA3ZNCnGNkaNwfxiiTUCX8n6EmpzRsGH7oSpxMX5",
  "key13": "47Ds2Bpg6hvmmcaSN53SZiizdqGXyHTY6fjvJNhLUGsrcVZif6kCpsJr4bUYjhFkkHjvm8FVHcCoNihA5EhRQCS",
  "key14": "5nczdQt5AvpenWiAyhRAnEhCWdFJgZvJV5ozqo7qKXQYhwzPMwpriptkm6xkMamVnUWPDQPnnE5N8LwbuMK9Qu3c",
  "key15": "35FC8JRQHYZ9tthAa26bbtMhPX6G3SsGfJcWsbEP4YFondX4ynbTpvCTt7hetsjDKJgsgmyiCTcEi5WhctUvRvEt",
  "key16": "5K82bevGmwPQH85iKp2na9u6qbNMq3ZDUidKp6KE4Zv9ipssAXS7FrjzxgYqhBrPMTPRYAPspyydRR4kPkiU1FnL",
  "key17": "KmG7qkVx5zypcdjxcPswL7d4GkAb3Y4ZnNPoLV1pvd916yrRU76yyvMWZyTEEEsCoBXVJqJZiQ93kxymD59Jy8t",
  "key18": "3ARSgxvzqo81bzBNxAkD9Jdts4nRioSYh7CDcgc6xU5AQykMvy8aMGi1TWPMLsX4jC7YjMmS9Ztk2kyvhJ6UFFna",
  "key19": "54Egnu7o1yq6BpiYNj3XgxHcTGomAzEXY9dExgVJYuZWX1L76Lj86DdaFDT92ZAdLq8L4fF6QWLh8vo1fBZeVkDE",
  "key20": "u7yNPQWjGNqQnUscDVynhR4QA4eq6gszS8SnBRRuqHitRY34oHcpmDi2ohyE2EtKXq2n5AmCu424VzPHTivJzeh",
  "key21": "ReQvKXCDdgjzVcSpRzxipHZncmx6hSm5v1GtEozsz1M6C1wvGc8B33YJqJ73G1D8ZB9Yvw8ztaaXdUdjMeZiXQE",
  "key22": "2UuGC3wmWeKgyoTMU1kJ6bJXGREtgM4bWUhp9KK5BBhotPDcothSMUopGfyBUfv5vH2JS8oQik1v7VfzwurZrQny",
  "key23": "62z8hRFTkQU1HWXLt8vHmEq75B6MofXvk7kYYBucPzEgnHsuyqDUcRJdmiNgH8KtYKuE321mZTBFzX99E6Azzz1s",
  "key24": "3GW1dNiPKyRE9jhL7seyuLRVGzcFjVHbniotteompfods2aw6F6RK84WppwrgHUyTNSupegTM3FjwcyUo6uxzfha",
  "key25": "4LXpA7rW8BzV7kMihtMR1FCrNKoBXK3Ev3NUbU8L4tDpiViLktNgMtMCZjbf5ZbbA4fkMnJchgs4K7DmD3S56xcB",
  "key26": "LJCTggYTdMMzSGdtWs7nqiwrh58zYS7K2ZozxpRrTQM7V6wtoGR5X29cPF9pzgaHKXJJsdbLBucFo1nArxQ56ho",
  "key27": "2a6V6S7XiqsjRRU52dbWrXMeV5Q5mbb9PdATuGc36eXwZBJATwDkjo4iiTNUryk3RVnucc1scrBibvXdyjAgWzY3",
  "key28": "5qdUH1L5yFpGvDz9jHV81Z9gHsttKv52zrVwAfXTU1yUBz4Mn2VN4Z1jSKe8xgNwSPSFQTGxcJjkRRnFeJ1ngaM8",
  "key29": "4Lw3Qi7pfF2ELPYNm3yd5wrmse7kQNX2YMqPuXf45yqtuK3knmd2oxkMEA7ifZR2X4CVZ792xYutR4vxsTNMYZZR",
  "key30": "4DR7uhJR5tbXt6s56geUiA5L6tpeXpHSN1Rf1bozUmbxqLayf7f1ojWs56vG8eU8XNygnMqSrCc39SNDW1Te5Fy8",
  "key31": "4cnf5CwidygmR1Z7BUBsMpVehniB9aokSzK1QiUKR4Hju2Kuq2m8DDHQRat75TUSBVRfbBXVJ8QftAx4h4rGE4jf",
  "key32": "61M6daBGtJnb4X95AHv2oMQr8qgtSmWDRWhsGctF8eniW8D6RYEfKz7x4KbvskCWgFdE1SLhCAELUngtk3ZtqGv2",
  "key33": "3CamhMrwEyk7nPxUcR6yEze2KFBEoBE8wsZvwCuv4C6UBRUd8MrnvfCvnHwNM41WZWfLRowkKjhD7n8uMSjwCjDx",
  "key34": "21YNEMgpvQktjGcNdF6pb3wPUdrJdG3q7objHH7Vjz87CzikTts14chW4d1i7qmn4FYEsmX19SFfqDJ1RihrKhaG",
  "key35": "2BPRkaVqTDEvLg7XY5as5MXUQfXFKf4jkrpxdZhaEKcUh8tM1Uv4Vu34kuckcgvzHUUKKZKVFQRY5hqQchYXkV7T",
  "key36": "kQPnpw5ozhpTxm46b6SFVhS8kp14LGH2t6yEnoZ33iY6LhF78nMHuasyG1GmKchVmi7NYjD21KFErA61XDRh3ws",
  "key37": "tLAP5VbJMm66J8WKW6JgLvumZzBFGxLqpCJVoPmmpgoDKRv3espVG6MPRVsdtFrjNQWyiza8bqtxe3Nd1Xk4CPG",
  "key38": "239SBj9RGFLxtx6CeoD7iF5GDUS99g9WJJLfgJTz6663tX4BBma4dUv3vG53eJ9pe1RrubRAjYHhUbmCvQJrNisH",
  "key39": "5rw2u5YNkaZbfbP161dWoNJ2jwi3v9kBhaaZc4ZhUcKUEBGNJcjg2JA5ZxPfvvmEmAT7hpeANMdPaK9EbjsGfB1r"
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
