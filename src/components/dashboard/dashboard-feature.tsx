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
    "2bfHYW674TqGj3TdmohK4WZ4KckW7N8MeZxi1dCVMDQupCvsd7oR64brT7FTxZ28UBhWraJFrUPr5T41aJos7aEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oZwW18JXdqSYzU79NxrRL1c6rjJFXfcRor2jN5MekDd6TqAKFV7rQP5YQcA5B1WwpEs3D4vSX4wwxFcFnkahEqy",
  "key1": "2QQxMmW6pwqbGHNjyVqbNcMx4esKUH2bHfgSZn7LM2WbnpL6yAXoojzBLEn9cCzGjrw1H3sHqR3t8z78jhpMfNNn",
  "key2": "2o1HVqzdcUgBwqVHjfHGRAYgXcuEgkQhM3xqtNignhS6j8StBnGaE9hFVtdrFJvvV2QgkYV4mqiuU3L7hmu43bgP",
  "key3": "636NXVx2gKsvPpnGZ95pnpDTUiQhUDMHksLHvHwhJLti1RDMAG9rBke8eArRVPSN1kahvKo5UBre94AGDpFy2YBU",
  "key4": "3Wyf2KJi7svcnDSfgwx59QkuPa7ZP8P8q5jqgxcEyhdqXZ9Avnp9UpkJu6rrnGhFcqPD4tF5RhLchH4jiSauW8Ho",
  "key5": "gNCtKsbtbpqcQY9vx1x7L8bFsWdfEfoZzkbVztqRsXRWuMMTu7Vcz9pkudaZtVfWDn4ymj2h8PMXAhP2uDU9y6T",
  "key6": "2eXEfUZSL4jzV4iALw2oK1k7AjP1eUXZbt9u6YDTkKzwzjJKpfrVWqihMRQezEzbSyWeaUGTH2RhDn8G6UQBwKSZ",
  "key7": "4VVLCoRUvqy83Aeg2TfRPgR1FLxbMGHUcCuCzFG6WvBLrYq45GpgeYokPmfT1Pi82w3i4kS581cC7Nk2sWhpM5oQ",
  "key8": "UYPBqhKbw9ZKZCzfSAE8BEuzbcjC6tREHkmxv5mZAaK1Qk1MqVu8RFnMsVxJcFMt79EXJJ2ZSXbKJhpEdAw98MJ",
  "key9": "3kpTjd3FWaqCYowWxupzA3HD7wNwJnGvDL3QfvhjgF2V9wEZYTAzC9rJc1WS5dvqR7BSUCRVSmiL4aSDW2xRSCXR",
  "key10": "5ChMCVmScjYeQ62r7TRCfBQHVGh4VJcV8DiNYb9NksTLrX3sgA1jhJiAEdKEMvwfdxb8sEK3s7AkiLCWP2wu7Bn8",
  "key11": "sagukNXgVN5s2mXk3NspG3EpqU2wMRY1cpjAbPiK8omRQEuJ3BCmafN2p3EDPB892zdqgFMjGyKYzKjAotuXXGW",
  "key12": "4cTuR9jK4DSMM44tTChheZw2bvtrEeThpKmZFx3uhvkPs2dcz5jCoNszNDJvVksLFi5KQLuxaWuAYFZtzhvMZfBp",
  "key13": "4e7aJ2dKDcuagAefpR1CegqukQwaNh6WUKWw2mAvnh1mjJFdmezm3iDN3jniHXiJe46kbkqjH5c4tt7nmtT6qDSF",
  "key14": "4g4LWts2w9NSEFr6UV9Vq7VgCVNcrBxQaN3Atvh1vKP4Sa3NdfJdcx1yGNGkfrz8cxR8WkLvxLB89Bj24Gwco1fM",
  "key15": "17JbU8sx3KatKK1sQ5QXeWCv9YdqZt47JjNhziyXfTTqUSxbJHFmP1C6G6a6a8Fasrez5hW7BMcgEBx9WjtBeR8",
  "key16": "mhjanAQCwY73XwVJQyHtHjmLoFGNMxiVYHeV2TC2mrzYbu3cc3Yd6WgYh9yCXCi872Vixa2nUX39AcGew5anajg",
  "key17": "5H2X5ZyenPLYbAyUeRt9ExkYZpR5Jhu4oU29FZdRsG8N3dYEgqc1FRCS5gHxykKbRmSSL4PYcLA2fBmEv1KwQw7Z",
  "key18": "3qcaed9P4qFEJnRLBJFZq9JabdV8kUTbjNBmkDxLceLuq1dSV8RmzSMYXuNFC4ML5jewvKsNAJuaQt5imG5vnKmx",
  "key19": "2r1XNCvg9JWxJuSLeyYWZ2WADj6sR5fgCjFhV9RscwysDYSPrQa15MxDBKXVgLU5qhnRc4yw8TEgzTmJWfiD7hid",
  "key20": "4ofYGitXfyWiMYi1t5cQmZp1YLo91KpX8UKbbhj1na92CKh11uYqYn8Cg3Fisx4uKN5neeuWRKcizgiuX4hVk63A",
  "key21": "51rr4PkavupEDx8aGvJUdU8divH6vrrgCzjzLEETtPkUd4SrmYtJj7rm1Z4hhABY4F9aAz7NCh6Ns6yW5M8RoPXz",
  "key22": "5FBygHL62526TQUU1PpSi9dXq16Y9CgJLzd795QuB5XyPW723WdRpYe9ieATDuMBvtK6zQd1F4cChWtuajoY4pWq",
  "key23": "5ZzmoR8L8ViYdWndiEumK7w5LxPGNZguChEDMAVHZFeuh3WbyagscmEtJJRvKKrwGhWLRba7nFzTEYNhbekuTBZf",
  "key24": "FTwkebYErAeixwBTE9osHoyC4soFRr39aPGEHap3rdP7ghBfQhFoFACMG21BMtbyYeSjT151gEDKYmebVnnMHuj",
  "key25": "3gwpT1Tk5kXe9tMft5Hg4646XqkdDBngqsYBSoZp7gt7xfHffgmnDTD8rAyRhU5MfoEXBEwz9uZsuzGAugG6THh9",
  "key26": "5ixw1LVYiW4jaHhBFUZ6cYvp7Ux16f1MjnR5Fa47SVYngFNMhgKepN4dDJNZnaXvxGp8KudvUR6aXUE7MA7Zge3a",
  "key27": "GyzMHkrrGxqYcV2mtWsG5bJWpNCMkxJu3uu4LdYp3nXhAdmn4AF6v9xfJTe2nepRFkzaHjYNmoYJz3AiZhdjnaC",
  "key28": "63Y9LU2httxy8S9Cqi25Fen6ESfHyqTMKFw91MG5dhfGGKCspf2mW8iFauiQKyeiz8sAjZBwFJKGUFgWWBdcWfZy",
  "key29": "257kmYLZGKupyU2AwMZdgLNCP1o3KkoGMaXKHmvWzXNXCxnNTkEaz7ujuu4ggHgwfRsjD7FRcvaaSgHhvKESy6au",
  "key30": "5GuHGJNCmpHZ9NB3zyCX3QWitti32zTZdAHMUT2vDpvangBbf2zNKBm3hEkXoRHsoM3t5hqgSzcSpXitB6r82WWt",
  "key31": "3ULm4bHKyLKZhm9DKFKFUbKPKLZaX7HvrLifQXcE65oD5iFniYJshA68T8MzXUp4cUyqHKHYuLJmf5fKcMntbgiD",
  "key32": "BJJyjna7eQMy6q8BzjTVq2Pq1TbERzaQVfrTHeSaBbp4U6Sfoc1aZV2CKChGMXmtiRC7cURPdJypCyxzArykivy",
  "key33": "2ig2WnzL1nDj7hA6zT1reMpfuqzrFKC5zRkZRbeAnf2DcDj8rKwBDNTEArG2fCt2BW7divpbjizh2vjq4FcLA69u",
  "key34": "4iF1PaVHuQmVQJffA54uuBRuiBxUNrCePAtSKh2GCNqb3rUeoU3o9nAmaLJFuMqL16WCdXKS8CYkLeLRhexVpBww",
  "key35": "4sr4hwteFEaJYjGj9X8yHwW2ryzh3pQV9rfaTvkJK3QfSRHurefJYJ2WETSMJ5PQMUrPHs656BqnD5HeVTV2iujR",
  "key36": "2Sqz6TBLG34V8Q5UyZ1sA4Yefm2jfSutL7DRdHPKQYY6PhdjcMjidSkr24R58Vdz63cd3wiRtxGorj1eTyGtyvef",
  "key37": "2hwRE5gc8RmvGGF8sBerS22sCG5ZZWwrVzpxhD1V7t3SXDAZNMJ2nZ4gwCGEY56doBWc2rt3T5GkiodwKgnYEJeQ",
  "key38": "4R3Qkm2kzUV7druWjjrXzfS4d7ELv3SduDm9kdeYoy83i4RHC3eFVRgJYDvVTPKUczSnYSJnBBAe1T1LZwT83joN",
  "key39": "w5TY8T9DoG7RPs8QhYkswgnTfGzcyngWPUdbctKkBcXvAuvkg9bs3c8ma3iYk4cvTrvmQSLd7pvjAYzpfqkMXDw",
  "key40": "4A1iX1TogncTBNoT2yFZXPcE3DGQuJ4T3aiRAm6nhQJzca3Kz1CwoJdeKzX6ECBmwf11kV1YGcpndYqpi7DD4UEo",
  "key41": "4XmK7FC2vuRuwz22eJATv1jL7HP1cMVYdgJjWjUJoCE7oHUP75TJo22yWcLS9emSjviU6wTWsrTxvXw7LybHjBuH"
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
