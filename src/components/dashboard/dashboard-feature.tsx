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
    "4e4nYvSDr7ikAJqgX21XL21hHiErmjxgEuiJL61P2Y8P3V31hzL9qhm1vJKtPwqUwQ9yJ1eSXSMppVHyXYPo1AEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ZA2BMg9NpTUpT2VVXH886CooQtyAzUkrAqxD7fNyFBEvi1yA2MZVRqukdcfvETSH6cAzaaNeXVGki8wGo7HFFV",
  "key1": "2UuJCTYNs3G1qktopFW7bA2KYXkEtRh1C96Eno6pFzBmFYr6WAvm6adTjeQqgmKeXcsACegEqiEAZx4pS2uYuDjp",
  "key2": "3WQAAVie8ty4QpZDuWEZFeScPaTzNg8ucjGjxKdGrMESL5TxFHRHNrtecGghujrdasQiGA7Mjn5HiRKmUD3vwSKN",
  "key3": "3kuv2j7nWHkT2qx3KzwhcxvoYsgLgpH2w46QLfDnid2JwJhwRvjUj4JC8tiqB9WjxKZJqSPUAUqjHm9EHg6aXXc7",
  "key4": "3PqMbmVk5syaHAExh4uH41duThvPhLugpnXUFqdYkHNavq26sVv4TQP2dtaV8TxKep6c9m79ENS1KSFEPuYxJQBc",
  "key5": "2G7anZpgkqJxNFqWGnBZu55b3aYMX7uZ81M4NXFvZDeanSWLzjZWBh28RaJeaQUXcWddf6LJRYvBGuwsuq7jE91G",
  "key6": "3x2UY3JWzG1CddHnc3JHqpJa6qVgws9VhEnfFhhvVrsQRw2XY112rVVGySL8zcJtCy9HGtvVhdoNwDwEea2X37mU",
  "key7": "5RYKKZTuuJXREjUihG1TfwZtKUaTkLw9fyUk7dQRofGc1Aiyubw4pyhoyCvN9CbU5XoZbFcp2nRhkF32fdG27CL4",
  "key8": "3dwX714ynk3EWerJJrvnoCuKsqnVzXkcAyMPDsr38xy679PLHqS63yFaAs2EVjfbjA8iCWaxCqokpUmRx8rpUDV",
  "key9": "5EbBuPgF1RGpZ3v3uHgYabgPPRX7JWFFc8gAYWFFQKjKqqArSvPtENt5eMi54YqA8ZCMDegN8K9gGh1mDrFbdRqi",
  "key10": "2pVQUwmu4AaJGbcSGi8Wb9AbRjZK3GsxqLMfBWxfxVwjz5uN3n8pDUhR2uqRcti9xGGLNfxwqcS1jbQUE7yo16ib",
  "key11": "44bV515gkucXbBtnwQmvtPCEy4ZLZAEMw9FDpLmk9MZt2kibeJwySLqmZH7g93UPdyFeRe2ute2RFUgz2Uy3kcRo",
  "key12": "3obGQA27NfX6EsutHBwGXcHnmvF4VAz53PMcdxGeS7mUFQRGHF8oZXQo4aN3PPR1p6eqvBEWCSKraHxxTg3u1f5Y",
  "key13": "3DTRd2KVUL78YNZ1Mdm6Ac2bmtV8oNT8o9C9FHAKUribyNnrdoc1r7fyARoBEQZMXfSXbWzMiAQ7bMH4hcSpMnfY",
  "key14": "43HogDh4gX1JdyGSJKztvGFwkwUxufDw6tAzUMAfXEDxeNCvH9U2aoNy8aNUQbL8rAFwPfdGkbzAUPfegF5i4fdY",
  "key15": "4HTqG1JMnTUVkPW7QTWPWAU8TBhmrVhD2e3VapnJVKixUds5vVHj5S5QVEYyRjVzDTssKRmZHdpRofBgMmAGTsYA",
  "key16": "2F7bFW9TNuKsFUtd7deDcs8FLEBbBFefNC3dVR3QibGYhgdcLuur88yGe6SwDx549zquhB4Xsz1YCNvDzed35XkJ",
  "key17": "gRM6zU85tTcb4GR671dy5msx8oAH2dbyxP422qjTtCisE9H6z9duWpgsVeVdhD9AQfhB2KY6xVuPcndtovzU1Z6",
  "key18": "5SDxWw6UbU4zoGkfc2LATbqoF38A3YGLVTw3xjykEXb2xPNnTHbWLXXa3CYpAykm5ru75puxcxKsaGY4s69g1MoH",
  "key19": "5uS1xLvEKUe4LfT8sv3SW8wqPcs9JhUANiUbGW2ZqvAYhGHE25b6kGJ1rXP62JkwZ9r46cCwcQ7LVohEYQ8kUfFH",
  "key20": "5pcggLPKwNsqXexvMrhGmHttXNz8JaDnR4kGKENs4LZo8uTrQ2Zt7WzjUZBS7SfyVmCL3fE2jdi2MNX3yiHjWw5q",
  "key21": "5qZWdDFng1CPcTk79AJDZsCFVtzsdDvjByGvxFQGX8tZJ4bx3ArtBAauK1GZ7WjzwMEnJpZuufjVB9mBvE6x19eP",
  "key22": "321QnxBqpkKMQZcxEKzV2evJu3U1533shkiMfkqqHKm43nfcdxvJ614i8VrM6jtoLQXU7tfojsKAdH69ELoDBBKz",
  "key23": "ognJeh9CqkWcTrbH7ESaUGeExQrzfBTRk372z5sZsPW5y5o21Pej1ovoWnRLfsTrL6xXqLRz5kbvRPS4k4KNzXv",
  "key24": "43jhQ1jEQNSw2NqCtFcmExh7fuu2GbTUeKadsnkniy8vUfdTnCKNvsTF7dieLafA22ndaFhyq8cYmso3sQQoFuLL",
  "key25": "3udztF8vpqbmZFksZwxfPuAZJGE69XqENKj89ZYcE9yUXeFjtMKowieX8p4fsvbBV1W8KccwF3HasYr3FdEFRrSq",
  "key26": "25K6MSGf1BvtcrnRsnYKXbekNpeiXiWLMQzyykqhcCLKDpBmPLqqzinNVgeBgSKJtAzEfGNAk3AgoPHb51yuWAMQ",
  "key27": "5WPCcZjzVKCpTkud78V5iLSHKj92dxj68VKFd9YMgxVae6bABHCuvoVH38eY4jawEH61a8dt6ftyYV1GASacg3Rj",
  "key28": "35S6BYYQedArf9aTqAuu2xDbUKhK7y8bMLwxWreiN6hTf5BGsZADLga5Hgy973bKTyhZLMgANV2NSxgKnPhMYfWq",
  "key29": "4T5MFUCfFSdwYKhdhyD28yid43XHs5cxkfEUFUWRdHfWtFUpt7wuZYUdcwd3kWePzb5DyXFZMPUrniF4trRcr16H",
  "key30": "z2u99TQHRtoNXgwGaedfuCHn4kpAnjFt1spXUhnM6c3PsMnEeRXyqkcXeyZV2q5Gk4fcT1LzwyUBfGBvcEJAJyB",
  "key31": "4ghxJFk7STfD215roxzscbw7io6Q8PxXD9TY3psnRCh7HgRmFYQ47h35hJyX8ANAeYwP1ifEsiHxVdaPPTy7i6ud",
  "key32": "twrnTYh9FU38gUX4wsbKbB5uhKZ1tsFmmPomRQzEz32V3vfZLXoYpTAYLvikkwK15paFB4c2WzPNMEmVKd9boWn",
  "key33": "2io3i57NqUvYqrgrXy9oRnAcNzU5rY3ttuco7cVwfi6LziBkRS5GGcZTKKAAphNa7VJUJTWrQY33ih9qKkWtgRRS",
  "key34": "3kPH7QfCxnn6PbqNWgDAahc6MRSx5vHPrBYiMs3LdwenbMBFeCKGi9P7t3VPZS5c8yVPDxZ6m1LspFXzuuQXyJoq",
  "key35": "nBWraNiWEnR3EzdvUSWRU2LiSnnAAh4mYKzvWRamb4GVCMrLcsG9bVWUogGSABSKPQneDQjEMgLLg7qdMAiU13w",
  "key36": "2PnF3nSbvc5Nx5QsbetxbLQvEVfYWTB2KG41ari6gpdV5dgT7mKdGUgxjMoLeiR3zemGLS336hYzqwNKAwEWGZdi",
  "key37": "4nVHM5ihJCahusJ7Lrmw8GAen92QRNjRrzYgbGw9WuGWgzTRufSJHjRYvPREqnY5hKJFrs2v4z7VWmJCo8jYYGm7",
  "key38": "5iswfiRzga6sSinMrHHE2nP3qAyrRxQN96NAPEnaTYfyxpdiz3Rn6oaxdJ7Z3SQsxZ2mpwjdqbzU9gGuveZqfPTJ",
  "key39": "4yDmN2rNTRqNU7TczjPU9dgEFV93sjGXubh9LLthQQVjwVhiPxQdnVRA7io2yyoXo2pKpKk5ujVXt5Rycb3r5Evd",
  "key40": "4Ge2kgC1wYmGa81BvGVActdN1NtaV3KvjxCNS89ak83DHd9J59Wxw82TaF4gw8ERUUj9JmZNrwTJwv7wNbjgBJpv",
  "key41": "2CNggskj6srcwq6h5sqjy4xArVV2H7xrfpZaQDyQKgaVyehoYn7trPNtW5z6rhkX8JQcY6ETLgk6ws7DoYwwfSz7",
  "key42": "oyMLXZKYP2BdDHoyUDt6hyqt5RUMEWrLT3KKCwUwHgPaHsYVJwkBxLJV6TsunyBdPbmsmYBeTgXH2N4CKRqMrAp",
  "key43": "3mdKQ6U34p4z3pPvgJUgZx6i8eRV88qLWsP6h37xFzi5rtVNRDQqZAyAnysHkKFyke4wBuaDdktvKG7s3okmSwr9",
  "key44": "2iqz6W6qZu7w2EVxEUvJjTYSXKFGH4QZ1KEY3wPJRskGB11gZnqKA7nEMsErkFET8ufrBEw8RbcEuJ6FdWnThqrG"
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
