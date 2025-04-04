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
    "5ajk8ydQVzCfL8mmHFKeN5iWuUgLovk6hthf42i8b64cB6LAi9UCpqNPXo6uL92e46XDCwCHmc6TzVCZeoehSA4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y8tw41ScF4eHc6FRLD26ptRSRV1o13o1t7QDe3wzjRpqg77866SAukAdN5X8WVVGtTQcSRDyFVDzj4CuLJsFCS1",
  "key1": "2fZQ8VTQLakLXvDWu6iG4CK3XJTwqrrBhVRDCzPtt2b1mgGqWKNynnTEgzjJrYAzyuos9h4ZEAaBuJcJ5fckWvWq",
  "key2": "37tQKyvefwhimeis391jHpdaF1S8mq3pePyVVKQJRQe8STCKz4eoqMVjGvQ7umMYmUUAo1ptRGNqTV1DqbitFgWy",
  "key3": "31FMFPcuS1MChc2X6zaXuUVoFEN3tTXZu4YrNDTDyovjuJqHLpZofYfiNQiCGx4RQXbtsVBD2yLyBAv5nAb2c55f",
  "key4": "4vDpTKhK5yofUSNYwH8uXyLmCcwPsD14Va4GYNc1EDkK4xhXHqm5aSiXbxYUsDoxNeYvJJ4iFBLDv6rxmFTvScBk",
  "key5": "dVUAAydtQX6WjqcUd3AwxqHjenh4SdFWusw1kyzuKZZ58FLnpmQ4GA8popxAxByQ1q5Ma64hWs8G8ZvcsSYE5AW",
  "key6": "TNf2GwB11PfR9bCZjtUaLCcPC9JPEAHCALcG577ggesF7FvBuHfd75MzPynKddUnhMoN5FhVU7zG16d57xcU3ut",
  "key7": "3EdFZ7L9qAfqX9FXFUxmvQxmLpPp1PNvHeA8sUq3k2LQFHWVzzojmLdj97bup1smqa9rXGuKVDAuHN7Avii88TLi",
  "key8": "ziKXJbQ3DfBK99J3ga5JGA44JneXZUNEYJg8dtAZ7oR7u1SGoD2QFxPi7nUyDhni3nzTEGWUP74yknxVWCp59qL",
  "key9": "dPsMZUcWygGEKEowHPf3BRjuQpcULJCKUkFKK48jGdrPGnbG366rKDfrCnYSh9CFRMn7BWXBkw92SRY5XpSLebg",
  "key10": "3WQqwZyNz3NHNMGYEPYYP1HBNDMXKjH2HU4ofgGK4GEntJAqR6qy9NBfUCnRDVdSLyatmtyW3ZtiKNdFDoFqnDMF",
  "key11": "4SZZtTYi3APfJCrpX392hoBUrDME8n11zbNHQajpWZRW4EQCqX4gwaAqxPS4v5nhPybjsNhsh1JgU4izNZntS551",
  "key12": "3vbwXA6GCbqp3aepNoPR6yWwHNcHt58pUCHX23wcuPEQ4Br3s2vSbpnVrcp2cQzU7LFepN9SZw4bQhbi5fGhGmtJ",
  "key13": "38BcqkNghpdnYHpRkQPCZD4GEZ1gTrtbH1iLKCoFRfPeQFgDnjcuqbUSx5pU2tjmUnVDhG8qFdNXZHnnC441fCjS",
  "key14": "4xprzWPX7kBsvBzwtA2sWbqHGXTTR8T5vSU4kCKETA6u6Fbnz4k22GukzkwMYqJAh6L4LuTjvqX8vwBjAjSyQ3Ca",
  "key15": "2W7Hs3PAyZVssxi4tS1GAE8J2x7tBULVdFnQGCmzvyB9qvRb7WBbK969pfdPzihNvZK7jeDaqsYWrfRR1zxZbRqJ",
  "key16": "2mSvhZzzV4EfPnmSH4N11BrXF54kZV2iGzqVtcaxnkC5RaaeWF1nyD3zk7dc5kfmTZbJ8V6enDdVh6uNZ8NeLTEE",
  "key17": "2ftom4S5Mu1nG2vxqSArKHaH7ioXoguTUqM57gEnXNjmK7UDAfGvZjhVDaWdzUJzYEG15vN5QQtbqHq7cC2gWSQE",
  "key18": "2KZcuEMt38azE27rvjtRpTyPgKfDV8mVY9A19JUSFQTwcNLHFgEeFVwo7nCN7tQsFxW2JnTHFFfi31riB9SZUQZN",
  "key19": "3KrAdYsC8b5p7Xq3CrmmoQWUb7jhWNxaBQqXbYLxtLYLDc47BtYmEcJTTpmFwBp6QuQpG3N5DiPXxsPwMvapsD7f",
  "key20": "7VzYKTR9BMVwPCRegYb8J23wUoV3iVAs7FzFFmhLdXDLpUTt781HEuBkyB9tkD7YXqsTbRaNMCeZpCpnpDBshTn",
  "key21": "5gGApcbQs7Tugzj3tLozCnn1yToJ3VangkYjmF6Pp7s3ykhzDxVm2Usdwk8qrGNpE7Y4QGa6QStNSprpgogmAwp3",
  "key22": "5kbpBY3oMGTZWaHpmucYhAi1mZDTobeMNZKam3ot2AkEuZpVpzZHZdb8pHLwauHnSddTNFALydyhroCHkE3AWTgJ",
  "key23": "66Rmgw35HVB6YYfbaC8U4fUkfKUjnGzspGZvH7RNUXqdV4me9EzNpA513NUT4nhD72j42bipNfujpCFKFxYjHtg4",
  "key24": "4ktf7Uirg3uoA6phxhoBNvAnTnVz87ZoKPe4o4C447eYVovDynBzxnd7pDUNEQmJx3AEtVb5xYTbHwnnhBtVaPhf",
  "key25": "2eemx2V3dWuF43mJyXG1bx89ya5up4GKKEXMdUwWD4Zeo8dVTMJ9WvkfWYThMKVzrjF4c2e6uQGLiAqEkySV6unJ",
  "key26": "5huK8ttK9rJ1nckC8Z8LrNhTCXWunUMgHZHHpvUGoMDyikGd6ojY78iCNkYWkPC8g1QvH1KAhSuomr7Xv4At9hb7",
  "key27": "4DvYztokKmADZXScCBjX4VnsRofToXh5bB6sAAH7YqBg5dKToABtirmfL6LRDHwe4R1YduYpvdrGhuuNxRRNvfMY",
  "key28": "5i89eiQ1pmpXNkB5HeiSejStAjnJaJF8orMCwZAerYmkm2PRthAKRSS5xc8n8ZBya2yT5FntmwsHniPToza9XkBt",
  "key29": "5Yb9TUZKkzATMjbL2mjuc7xWP81p7FNzvRu6sVqfZQXSBTMAmA1FMuvcTGMQCTJYGa8LfABFEJgjbfgzxiVavFN4",
  "key30": "4RvRSduTbhByTEQNucbvmTJ9uiStVoW15uXcA1uHJP4kEbSyMubRCco1WvrD8MHNhjQZc7roKnHFeYpDTcUGJPK9",
  "key31": "59z1vijosDSppVVN5MkRLWCbKus1BVEjEBdvtJiS8taPK2JwyDgPxjrEBmTEZmCBehpw7AZYbEAxGyVZQUjKpMRo",
  "key32": "46DwoXEeGQFDHdfgKjW8KPWdd1oD6sopLt3z15xb1MCQG6NGM6JByjutHNAxntWrNX86gKoZYCKiePHp5iEjii9m",
  "key33": "3wRgYkaYk2wgAzAMaN7k44opkD2G3HUoyCREpc8PPBYrumNAj1FpSzYAeBRpweETyrZcHaXK8vww936wBnHCbouB",
  "key34": "5zka5Pr4F69pMzbfKDA5zTyhhpfoAnZvLXMkAin8vvH6pwCcQaMAb1CTXazzFA486GJWAKsd1ZBJdToCqE4Ygc9Q",
  "key35": "4PYKDUbuKt29RfwnLXaAXZEsGnAumhkjejf4Q6ZM9MHjovoAEeZKduD8UEsw4hZzdZYpt5Pb1dAhgQAcvadk5zJ5"
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
