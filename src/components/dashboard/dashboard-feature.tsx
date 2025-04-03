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
    "61rutAU5ZayWyfbx5iWxUd9KdCr7gK6o5e4xDQfaY61oRn4yjYC8c6KGdw3Wu44ZAtXjXjuTQRhVUNjqBdoB5JvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WVbsG1MrmRLNy4gdnSGUGs4RBvsAso21LSHu7R4W1fEAvMfdK4RSchwDi1JT5VCFj6huZxXTTvPQFDtEnG3DDuZ",
  "key1": "2acZJUSw5gqH1XH9djX8qosMkFR6kNmp2BArJm6bq11eV9hcMz3pFvQkX3oqvNpCo8oq1UWtk8jmr14bEFVtx5Ud",
  "key2": "5T5EYqysmTxuvS1LP8Vii67KnoNY3uuJzoYe7UM2We4Gikw1cf7gyij7DCzmRdG7F5g5H4MRmyezEU71LyhoNmi6",
  "key3": "hZvYvN7ZWRRtk2YsFn8xD9DVb6hoKv7ZYfQ9UBtjQYd9yw2Afri5dRzo3Tu6dcYS6ckG8heWVxJJMQ7vGYgaWWs",
  "key4": "4g95CY1GdoRp7ZmYXcFiUy864W3yeX5MtAJDNX5SQqVMgw57fKT6Ejhd9qDkxtHVi8ep6bSoD9Pshketk8iEikLj",
  "key5": "3exeYLxYVAaMiGueBMwg3KeVeRujpasm9sJHyCgkXkzVVJwoX1Sf8BCRSs8w6JfHgRVQ6hQmEGnt8g27MmYT9QRH",
  "key6": "j9CyUvtFTQpPub2sTdLsjSYtHEm9Jkh4wssRzg8Ne6rNHucHiqhrXzL1RxFQqCRwCQadyhcAZRjLG9DvDQH1QS8",
  "key7": "3VsN8tfQuQLNLMGdDDojtAuakQa2UCjzpkXjnLLZC5KshBdXD6mocVaNkxMR9eBY3sfYa46HBJH2fbALzd7Uc36D",
  "key8": "51M5y3K1u2UBXE8QcXW8GoHbomjJXV1SzzwCjHLnH1mJabhyKFxTrHSmjGShXEMsch27XCGkdvJxAHzE7gLynbJK",
  "key9": "3j7h4V7fEQxH4qjxwwra5FX9eFBsiGsfwr9Qb5v5KAKkSf9zuisJS49uCXsDGp8KFNtDY8eWJvaydz3pYKFxjde3",
  "key10": "4Q2qh1XoJ3Bx7TcyjA3XeJeivbXgAS7Lh2XHBvhUWSYDBXfvCxGtGQVADw4oqe57bctfhEgKQ64sPGMQkS16VLtE",
  "key11": "3iLE87DkBUvzoWTCmuGiYmnoes3sJzpYYWqXeBvqy8Ns4tkAhKTzSaLmUE7pm5BVAE21KnYgnedYQ6ExTJ2mE16a",
  "key12": "4bHspuJZWG7hNf38NJxBZMLfT8cA9j12Cd5SaekdBNUj6JAVYTGrxkue1xJ3BTrXUpr21LEJiePaWJ7YnBFtcRYD",
  "key13": "5DbAJaNQovdM5szoKRA2CQXLQayi3grBTVupr3exKqznPSrx5Sy1xjuwfCTa42jhm2vcibvJDKd3YQgyWgoYkt6h",
  "key14": "4FiWwiw5QUGj3evwUze3Fyk9NRsnhWJ4jMpmk94s9gi5VbE7KCozUqCMcx1kMK119J52yy44L3BY2Eh8PLPr33vQ",
  "key15": "3qM4ebrcfhB5XdEqhr8ZkMKoTpNcPPzEyQuFbpyV4Fpdkuc5uisratYdXCEXu7yRGVBBPnKE1x1oFkNd8WeTAEKD",
  "key16": "SpBrym1DWHLUqJtMnB68FttyTq5WfwKGF5Y8QYL8iNXz6D211KrVi94Ep58mNxK6vhuxnYcWZ3yihgfrXH4x31p",
  "key17": "5sQJHpy973CkNX1gECU6rRyR7hjiHoGdChH76caPyyMUgwgHkHpmAnry32wgp9upS7N4hMcAjvs65uyc7rnFXrcc",
  "key18": "83z9Zov11zGT5kvmJucecGkyyMC3hrKwFbWBTvMpR1b8VUryDmVmC8nY8gdsSmc7Fy4gvTqqEzJ3uL2pLfhUDo4",
  "key19": "4HsEFQYNa26Pa5Q4WEZACfATzeQNrfs3WgAQe4pA3i9jPC29gKESvbFm7Hxhqff5SSMwcFcCr9QFLHBgWRFhe7UA",
  "key20": "65Zx6m9VQXDbu2QDGbEczzz3WFSwarGX8FMocy12m7jNtFzMWj7rz5b5LveWiDYWgZ3b7dufqepMSuTPMt5mN6ce",
  "key21": "4QpLLfGRhdmSCHEPXup42HzHNHPXQmsBhoXgSZdiA8cqKv35PmV7S63AHDzTmq8pcczyu6TXRvwiE86ZCmsTLAyi",
  "key22": "3LbNGEB7M9FN6f6azNM6bMhJVKwiPcD43y8UKWP1bBLi3qHCdZoHDpkC22xALqPAwedLpti6AGwExMrtB7YnZNvg",
  "key23": "4wXvqMNFKivfgKk85czD6UJqJWaAUqFs1HR9EFfiLKdPckTHdmLySoCNYvQyUDJbgAh8mKLdB7hjWZFLqSFo9E7p",
  "key24": "65YkBpKE1ac7uHm3VsdvpVz1zR4Jnkya1Rjrb1iYux3vzivszHiGvZuSbfnCRdofP6rmJtxoLfhyzxtthbQNaiD8",
  "key25": "4bbWmRqiaxvPUbLZcQTbEaaFB768EApPv9VkeNXoYHLNNi7XUBeBfa2Zw5rQcwpqDdYvvwpeL4UvDDsZ1is6VLVR",
  "key26": "3N9GdT5s44kYM6oj5FLK1cAWPTx87rhBLzZ2wbseDbC2nxd8VVQyUf82gpfbDUtkTiezjZsRkyPiF8ayo9FGnWNn",
  "key27": "51rW7khWzwQdmyTe2U4FnWy6aipK5kFrHRA6T3jRHsk4xeXQx25w5FeSihUEnW8ypqnjajTztLLkg7pJPrFQpnaC",
  "key28": "4EmwKHTHk1ACdiVTMVC1J5eDTErejpcD3yuhazQLWkVmA7ZYUjSV7ZEgyveoqAnp2c3Cq3jnHsq2fXQGB8AtqF7G",
  "key29": "Zv46kzVPvQTpQ8dMLR1FBxaq52cGp3ZpKW5vy4Fjb7uWGCNczDFz7EYRiwRpkKzS88fiWZouga18J87AdN3xW4k",
  "key30": "euLscG1QvtAkPK8xH97hv9D2r31hPh9JvPKL9ivr5ZvJsvyHWVZfEcQbJWcQHqFMQ5oNVd9GaumccUCpeg5YceK",
  "key31": "5n8eUiLqnJePzbWbK5vjUGucUb7zMhmpHTMLMTBj926e7M3w3zCsG5kqwvb9vrXEstSDUJub9cWjbE2DozMhFNuP",
  "key32": "5MEjFBBTWguH8jRWt8GBTQAwnDWZHWusJYKBYkepJmyKCTTJHxAqGUijm14W2vcbgwUNqCE21uyFC8DREFAimYNB",
  "key33": "5jiftEZ2iWEhNTJQXyfVFAdNwJavL9rGcS2WfdjAFu8ozacyjpvYWZzBsqbakPpYWSmz8ZBbBzphTXowAaMRgqxR",
  "key34": "2EzqJq4rn2QxHKerue2dPru6AAwYVFeYKPNdsGzmjpPHnUK42sqygG7fbr7FQEXvmKZmsgpafhTrRLygLNvUvB7o",
  "key35": "3fuTVB3DxFdkGiMzkr7cJyJnhXnDfDQr8ufVEHk8ynuB1BwgKbKRSBT13Qz2QJpmnxxCuGLGGQpPPNyE87WACdnW",
  "key36": "3tnkgDpRs8MdoXUkvDcve6BRXLq77SF9ZgzwV4Mo9Zt2QuqAKEaEBWsP6ycgAGnqafvVWgX3KutkAgXyPXJ9aGSy",
  "key37": "5oftoG2YJ6En5PPC6XFtyXiw2YHUiyJoY2AxgFjodR6BEZPFGdWPBCJHWx4M1vC8ZueGPjqDmmr9hqRWtfa3b8YK",
  "key38": "2V7ZFqh6jiJsB4bUxsafqNh6q5K9FSy6KdrBnUpckaTjYVYFRr82o9NeC7W825JrjCm2UAbjeWVqYe42mtbcvSmv"
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
