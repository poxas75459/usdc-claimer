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
    "21XFPz6nXRWgS9S4SyijQoXHN3r7bevtaqqbhy4ciPYbxqB8Tw6x18jd4JG2BGjmXn4qaEWhUzZrwLiPJQ8J2Mtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8EtXZsQUJxB9d8tYLUsaS9ha4Xh4goFE48VNgetNSvgdTV2K9LzDG8Y1pHom3wzCXwAFDAfpW29XWNhwBBzZSWT",
  "key1": "5APXyR5v9pw9okb5Vjd18UKu8HP3Vve9CiyEeXH38XmfqoDSvrMRo4HN4WixK7TnqBNgLi42Gk3t1qpAY4WcmNDp",
  "key2": "WSnDDBEqJb4Hz9KNd1zpa1KirGgSNr7JrKyWjBCuYb43fb4irAJT3wmW7SWCLQvL1Pn1xPu3B2MDsN3K4t4mejB",
  "key3": "63FiwEDcfyFKoGcsLKPGNyXgvwiZ9fuDZ4zwBeXVBC8HDNyKsD96sRHYYFCNuGjwRXVfdfvSV2v7X5GGiXHwFzyz",
  "key4": "4xKNmFEyk5aewfkVZeDFxttdvQgGNmz4Y9WzDWAC1Z3HpUNbQRVjZQEkhmoAiY72jPbBMLnuR7rG57qst9wgL2B9",
  "key5": "37oaroPpHDePyA2pFsCdDZF2XritwAyx9UwBShv1Bh6DS9y9qZ6gcboD4P9GaLikeEagig2GLsBQVxM4QH9FiLZb",
  "key6": "5NABaG8T8rwe5eZKyiSYFAWSApwm6JS2vqwRPmV6rMEgfm1APhaD9797sFcmnu3V5QEuP2kHVuZcJtSUAEfttXTk",
  "key7": "4gKF7iDqFG8WjdtNttEnMnGpWjuS5CLLT42Sdruv3JW28vAwfWmAsr1viSQLESPPwdnjK2JRVxRwoyQvwGwUJRAe",
  "key8": "5UAGtEmvECU9RPtP8Ge6n27vsZF9H3uCDNY2rd7KjTKTojz1X5MAVdhK39ntc5kEk9NXBhRcaarxqbVBWWp1rRa6",
  "key9": "3fpEzxBNed7Qr2VvqkPotM6NM2o94qHfBtqQrDJBxuuu4wuYDVKPqy5seChHnb2jAo3UPwE8gVjbDU5fdELEJZ3q",
  "key10": "5mU9mFEQHAA5ZQCnzePqu9yryP9ah5SRGJeBWxKq73id5VUk9TeH7YPEbn61jCVkiTGAqUyDtj3DrjZGKew6nr6Y",
  "key11": "5u2msZq6ew6m5fhEK3ZBsbB8KH1oGY6nVn3qibFJFakgAu5g6MhMN4FpQbdunUfTFbfN82XrnxF4asdmeQeMKzXg",
  "key12": "2noCCxdWMRTXkT5KMGubF3SyuCnG5fsRCF9sMo8MEjxtQ418N4qLooqS5BJMaYvxXjrAL2TLs4uvDtjywui2PhA2",
  "key13": "5ZcJ9cJpbZHFsYrM8iE5yLa9KgTQzM8s9b3UcaGqMNc8n52k7GzALnqFmys5guD6Ljf1ECBgRj5GG55AMNmhScjb",
  "key14": "3hjaktdjxvDzkG1xpVQRq458hi9nbzY9XGBHXcMTb3YGU9YKCSAEuVDaydQ7t9wnrJSyxJhYdacGPT8Vf1JNggye",
  "key15": "2KVhrL4MMJxCdiFaednktSexj8AkJhwxvhyKVkuKc6ZuiB5KUrYn2JGfaGwmTJvKodzAKbBR7zEDeVbwTBJUZY49",
  "key16": "4K15Rx94XruM32dEuzVVj9zgyXHzdVYxRLbBpFr5mWjVwM1Xr1f9Gx6BFZmCDMAJBtVxJuofmYPZayYy4fXQkMvn",
  "key17": "4NGLYi5Z2fC9xUkcjCcSgUoUYt4QxwMq5VXuL5dx2xu3BjdsCddbrzYUhnaxWFNmnTXnwVnkBoYS8PQBM7RmqWcS",
  "key18": "67GKjRGdigpAieGod25L7X6otmdqAi3mdsUA9ypiwjX3AsySARR437LTLgDpjzdMbn2ND678EYLGQVpDxmEPcLMG",
  "key19": "2NoDhtk9YxwgPyEPpBsACDG1N91gbYrJHvSEVcKKUpgo4ujVVSn2ckjmy3Zrm4FMTA2A5bfrmFm2LHeYiJFwrMnk",
  "key20": "572tYDcucQ6P6ZKfLsSviZ3R3QfW1ajNLXyBuVogvcom5hmwvpTkLpyUBCG6WFCoQKCWWYNkUGpptoJX4h7FkT6R",
  "key21": "44bk68wN7sNwYVen5SrPCX4dQXA2PtHCAKjP5goGeA9QZ4etwZ1xk3UhhKyXDmx4Fjm9XEFCTXpb65nGCqqkgZVV",
  "key22": "5vZxFvXvzuEN8Q41NjV7q558mZnjgoMSLac2AvadH3mhsdgxMw41D1Y6NuRmhq23jp7WV7N64nsjksMSzwSrnjsZ",
  "key23": "2vsf2VDbTFmsPJo8aewi1PX6rJ88QPKCGAMFvoiRZkCinUWz5yFxAPiygwHtkvJjHsikgdgaUqWReZqNYi62g32w",
  "key24": "4VoBtvz7Lxob7K8K1jL53PaoiuXUXxDVsgRqNb9P2E3HDXX2y7m23YGbCdoFDhVGgMk5TyPzR5B5sE5obWTCphQy",
  "key25": "4bJe1Qr7Vory2yjuoHhfVBy8bb8WaL9gSRUHiVSZv3qk5vhTrqB5q8bkVSbpsWhWZDDkoZQnBWJRdrkqy47RM9Gi",
  "key26": "3UkchL2wBXHquHLqEYssdg7SAqUQamoBHsA6aaDCj3KSvW34nGdqppE3Eo88KfaVh7NUN5q1jY6y4JVeyBkuuqQK",
  "key27": "2SLKaDGpPoEFcZLCW9y7RGNJopeqSEzUjcJkeEPBRr6KCfh7afGM4uJpsuojgLhfCgWSAGJSPYD6gbTHZSCC8RqR",
  "key28": "36GUXPqUZCGFjrg5PCRj4Ms1bSUaf28PSfddNxTrUBeB8hnG7beime2zkPQzHpoTg6nGUX3XtGq664UReHrKc1u4",
  "key29": "4bpVWwmtGQ66Y9yqErZPwsUb8ZvVcaGe7weLusckahrrfY1xpBXznAi5AuDa14GFMCDmte5v5CPsgseUsAomzEi9",
  "key30": "49WQN1VQDY52EyV7HBRFCs9g5Qcc2gDhmN8MdAEZzwkxMZCqTGYokU6aKKvXbFA38zfhdCqhsHRDcwJGQ1TBSWom"
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
