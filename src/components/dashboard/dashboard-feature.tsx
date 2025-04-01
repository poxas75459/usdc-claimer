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
    "3QUpfeJfi2m16NqBmSTsuR1si345C4VvgVrJZgECtdAYTY7BVgrRXtW6MTiUYhtq9EJHpKjgArETZcgQGzudFmqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QAiLzaz9gUJvbmXXxqiLiDovZHqMBAz4ymqT5hpEbEUGoApnFeDmDC51fi4EMbMYEJ3eFbx7WyeazDZtyxErasr",
  "key1": "MFBaWKBisuTd73CxLdGsdrpesKHcXTXqDtRifKm4Xny1QzKScyPHRHCUUeZtDkvce16ceouuggcvAtuyxQN1NWV",
  "key2": "3mbSDArMmYBs2uVhAm9JRRa6kpvtVLP5PvSSpKVpw9QwWgjNi2covMSDcMKjRDEcc5a3Vzbs8Mkby3K5akRniCQb",
  "key3": "5bBMBTroSfqy3JQX9c2aQeTLYxZhYpyZLh3HjqgndyZ9qE7mdDW8n2uhspwQgvbdMJbgnJ1r4dAkjarxVQxo6Txq",
  "key4": "2ZDXL9ejJ33NUMCLoT5CYGdm2GKsfKGnrydAo7XVfX9scvdE1MejdT6xmGAt8q3iZsekvgAyrVRT8zDtACxKYcNj",
  "key5": "PdHwL7BRL6RQhKcZQc13Nuoy6nTLUohFkARRbT3mLWURG4jcDTcTxh9NpDFMCGsjcYQBgpT6m9cpx8TAQ8oWNbT",
  "key6": "3Mm6h8b1AZt7ii642ArnYfHaf7oYERbyAWobNd3XbA89VThfkofU1CsmbVBM9f9wHtjBD99DorVpD7MDSJApvPX4",
  "key7": "NdkWVhUSWfETsRkdtCn964LD2Sf9FDZwnL5KVEBMvRRDrjS2VG7cH3kPm4YHZSVgpB8ecwFEo6ux3m5YdXwAU1P",
  "key8": "3Y1Mh9gg2wLMT8ZV1dnGEsPh7LA8vEsZiyfFSzg2QzmkEtSLYA3DUXtYMz4oav8eSL64CCAUU3sREZopJHU5hTiE",
  "key9": "3gsFBUtN1fPS63orsh8BBzyorMDZSHvdsmuFAuHfFTQWNcMx7DfAKJkSYoBxtY8QDwRkuNZT2qv9rozCxEQxspR2",
  "key10": "23RCV5ToJrzLLNJnrtcWjRXWDac23PHnzdU2eWVUNLKpZdQ2VDq9Xh8YsNVG7heqo6f7MyGSSJcvtXMqkfDqiLLN",
  "key11": "4BoXHDjLXg1DL6gLozDFh9Zu3Z3oqhEenS1fZVJYZyEV3zTnZZbdTYWsXB9EYx3fWRDmYGkvYszGm7ASsgQFeX3p",
  "key12": "Z58eNYB1fG99DejTZumLoJZDsxqR1XFF1pG99yNHTgUrr9aTxTsT1tAtUxweP2ydy7HmShxdxDKbcwy1sizNQum",
  "key13": "324naQqDTbMJW1d9hjiefELMwdyj9mxhswpoyRMbGmJLQ14QkepBqzV7MZUyaUKaPZ5oWWZXMDurReroevey6E9k",
  "key14": "3VnLamcDPbroSEDeEfsxac3v8ixuy1NbGAK58oKuFdHpdZ5wVtJmeH5AFvyViksrbosYyHQsj5B7JdUifkV569ha",
  "key15": "3tahV93GxEo9e7rJeiiparpCpfh8iMvX3Ye8YJ12gDKitZmceQ8qYoaCUDvV5DQLse6bf26Q8hdVg5KdTNaJQDeu",
  "key16": "2HJTgNCFctRXTXLwsNT8gfEywHohCfVkMbTwPUA1aWybmc7NR5AGn72mNgdctquM6jrBaVQWhi1XcApnNeAN4VVo",
  "key17": "5RH4P498RMBkbgvWGgju4HUbimcijvHYUHy6WBWw6Mf4pH6A22nhKt2aauUZ5ZSWW3XFhjiBYdFP68LtjdEi7iji",
  "key18": "4VuRL53ngyJyXSV6JbnUayMAp2mGiAmoNqQv9Hiisd6V8qcJ9GdMbsdoSQT8cJg7sKnpAz9rsP5RYANGiG3wy93Y",
  "key19": "3ppkEoMNDUocWzzZRm2ziChewCu1E9uYBoNoydF3NB5xS9h7qTwoNzYGRrCtiPS663R5Tw3JRnxmfgtfpELiqicU",
  "key20": "Px9VXLZ5biTGVQbanwkgiGGxNX2DLvqdvNie9qe5nTX7bKsfvd4o5cYNeM9zJPCmc761mYntj8zEunrsoixGvGP",
  "key21": "3iMGtKTZKiXD2BGqjafE38meRU4yVB3azAqBjgHTnv483n3RHVhv7Dg8iXJFGbvPQYP3Xfsma3i5AVUW7c4oW7cd",
  "key22": "3Yxw9TBRjgKgxJnyEmFYbpXmTdr6eJcC3vBPcDRRuudAkabt5SWMQWKXqxs8hEVZmh2BNdiUyCDQUdSF3vxkRrKh",
  "key23": "2vcLFTXzdxMhx5RGyCTUzeQxxngFyd2VUcBXGruPRRx6d4NqMQGS1cHfKF5BS8vEzXstWmzxVhtbFXjqJo2ESfoL",
  "key24": "Le8pzBF7HCJPntCDgyXNGBwfTRW3ErguJm8tpKujkpjnq6KuDj51vxL9bBxaYC3gXaYnrBqSqCiwzyNmnRzQjRj",
  "key25": "3o3xn9MofmSiTJBELw7XLWUGs6GyXhDFBWaZzfNce1tb9iAatBA6eWnWHYQ2VqwspLnxscFHkCJnWzi2QAbZc8ek",
  "key26": "231mKtN7emuMafV4bnd96FR4tTnV2m1k9Hzpt7Fg6NtmnThzUg31xQK6mqq95UwDLZFfzSPyvDDh1sBvh4SJh6T5"
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
