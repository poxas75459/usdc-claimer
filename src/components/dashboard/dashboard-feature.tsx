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
    "51PSkD61eSU6f7QthZepMzP9a85GEgtL7q3sHw6kBeuTcDfyx98YrtFyCNWdQ5NJcYLjSo8YRur4eTjML4eNv39W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3icX3gZwXPTumhenU97m1iyEwDfXPEtvhQduz3Lsy6WjAtaoFo18gBUinLS96JjGPqRYyXAGZbSvvzJryL9sE8YZ",
  "key1": "4Kd9q6UvZqP2QSpg2MSg1CyCz7oTRkhqtPobH1JNkfUvZts1DYA3oACJ9abtu1HhdvkVKrPDGuAvZP4qPe9To2nz",
  "key2": "aLHFWo1a8mYTN6E2VzyzPSBLDfijh55gbhg7yJ88ov6rrUh4s2CGYELHEDVXXhiNJYVF9VHKgPozdBJZJDQB7nz",
  "key3": "BJ2ChXhGtzuy9UJaG6oGsfhqcy8pHxxBomnZQf7rQLQxRcH4FiPRFiZcCoGkbFMEQpphfAnn3veQUXAJasz6iWt",
  "key4": "4kYBQFQskM8vccC3X9sLDXwCFsAoac8ACp9fQis36Ncz7hJsPqYQZ43r1tBYWeJbuN4JACYQshgpwaBLDBYRYRvT",
  "key5": "PzSgxGNqcK24CVUBUzcpRRitDbTFUjKMEcQwuiN29mcGZpyVm2KpExkZHfCKuftaCfPWgHGkK8ZAsaxpcPLoUgH",
  "key6": "3H87Brt9QXBTeCUpQMrCawWcdL4KwspMueC1J1RbDq6uUVUqbUQSyFmTs49zjpURRZoXDSGjpRUAotuKKrYpRxNY",
  "key7": "aC96w1tzaEmx6sgdvSoVUxCEmbyejMVGwnuk1aReBRBXhwyKkFr9osLQpaH6M8VR1eQY1VQ77GH7LnHWaWhjwxj",
  "key8": "4n7p7v11vCpd9dfSBQY3qvpfH4jsjMzWjUJeHnnUtsroALkubanfYr8tv8nmQMhFdtP6uhxQz2MEVjJ5xpQKfryS",
  "key9": "4VvTPHZu6Hn4JzWSPnYA2ttk1ymeUrfeSGzu6L5Eemp66BU2xmfBxBTbbN78Nivf1hX2WWJdtPa3AjRKq4WSPEkb",
  "key10": "3mG6KPxQuUom91RpshB1uTnViaBtqkPTJgkSGQHsw14vTHsGxT85UtAm4friqReu54nNh9ZkJNSeWdv5vdUVN9im",
  "key11": "4xJg5Eb2jSkReBhYSFQ8uuLjpMvjtGepEeZerfVCj11S7vUUp5ED4zmJ1CTtDEirjVuA5BaN9GGGxzNu3f9FpF4X",
  "key12": "HQckxnyEppVdqjrJsQy7GR9s6Ptn2giimqjFxKN95uyeLe1FwvxaLviwwG6FANEJfsKTkMPDu5DQdqXdtcLv7vs",
  "key13": "224uevcyoAEHtMHX6NauQygmqDCS3ZJxcTem9gq5quYS3BooJShAQ7L8P6cZK2uV538YnVMY16KEcyErJn6og8cM",
  "key14": "5w78dMCgNa4jEdVwHv1r1tWgyx4T4udz7nWPz1wEf6eHhR3BL8fVcxvfwtxvvn4isLkX5YM5qKPukp4K1LPCrWMb",
  "key15": "5vLvEXFBGD6ZYN8efPAngFXcQSvvurFE4hsfV5m3THfzQpiforuXrHi9beHKTdDrsG1BXhjdZRPSswXYicmJRxTK",
  "key16": "36tfHytsvFBspyrrutXNUW5ePA7Y4K5nhtd9eWMQzRxsCDwtaf2LGukyVY11kn5mh3ukuPLYrSbMmSuCmguVKGL",
  "key17": "ezeH3WzvztQBRwag2JyydSgnzUBpmxPdCb7nminVg2tWQgYPgEWNR9gzZ2B5kU2n1e4EERbBknePk2Lh6U7pyFK",
  "key18": "2g66E1JbB8fxEb7Zh2aNTR1t1z83ZqELnvGmGHQWDFcuoJZUbBfna3anweNhV1XMKJwCJ1XDSbFJd9kp3o4WquSB",
  "key19": "2XLWxnXLH7YK8d9cJCEjB5wu18NgZT5wQ9Zc3uPtDHryb2rDKYhs6fnJmVwsWdvbayzYyw1mVhtpnWgE8UyG74aU",
  "key20": "3oURKNBeBSJSLsK4RoSS35Bidk7LF1rPFxHxEtJ4iH9i5Z8g1VNUGwqXADkdWwfHhLU9AmDG8N9vKvCawosMyeCx",
  "key21": "4y9RoiBmH245NdLdA6QH8TukdHzRL1PEb57WSqFqGjZp5os9aHfznuYmNNa51YGMLuiSkADkcd3bbQpawyWJehqM",
  "key22": "2zmCZ7Zwb3CmAr9uVF5eE4M58fuHdGcEiCWULKJPoYWUe59nmNRNLyHGbAwK8pWo5NiK4MJza74nKGhfhwVmJBjs",
  "key23": "2CJ1PA8C1jHm6wq7wN22mszeGMPEuxcdNEgqkXqqDGHPodAa4ECZ1JDEWU2YPZxxcCTMei1WL9gZA5iczR6reFFS",
  "key24": "2Nx6sb4W7nAXyN5TkG8p3nsEFnUWZKzF4DopZLmaj1cyM8ikkX27DqDoeK7mHdTBpm4YiqtQUn819TmbYQFBopvo",
  "key25": "iezpAK6fWaQtxJxPKevMCt5HTJ9THyY15bN49Jz9JgVTQq7VVsWz3bMwLdXqgxTUdzgc1UR6HsFMhzgYkUyYPN8",
  "key26": "3efKk1XLDCzFFuo3RtKFexUvVpNeSFGp7xjbT3Zjm7HB6Yq6XJ4z6kcy1Q4Rtwt65hLfieVZavFNRiiDEZVNF5PF",
  "key27": "5WG8iJnKV5N461Q8ApiqARD1LqtfpA8enoi6QiDLfYPg1FA1tWPPCWQ6AH1iGETdrwuwsABDU9WKm4tF4kRLEQS7",
  "key28": "YbmE2NsSNtsT7dxD9nQ77oUfy5RpBBBHjCDG5tf2cMjAcQKikqBF4BV8bnVYVEr2ppkzLynEEVTMb2kgfuzfueR",
  "key29": "3LFo8k5wADyuF3z8n4wR8dqZAPfUfDZ3xbhiXZnMwPDiTqveiAmG5QnGLEqoKs9bzQUGHGgxsLEWQvsVwT12avna",
  "key30": "5VzQkfSRgTAKtWxZLHMeTG5wytcjoXddt7ouWFRHAr12HrRUNkfujy6JNek6yazffCpVEvtv9rt4F39n22iwwqBQ",
  "key31": "yf8kdobfKLPtLaWHMJKqNrYpAXMcXdaAQNt5BN2U4z72j93N2u9uv8sGc9Aavy2ScTxic1wB6r3hq9eK8P2HfjA",
  "key32": "4K11qhaEUWLXeRHGwuj3rjaGNLHUEqLYeKFvfFucDHzmCFzjwBWtrys3ttaBcFgbrXmCNBgyRb8u6Kx58p8uLndP"
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
