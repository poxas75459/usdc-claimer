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
    "5fRjM1FkzYSKUWjR4amGVeuTMp4g7snU4QoZJLWUw4dnL24wbvddrwd3DsfzXRTf1deoz2MVwgUivJEPebxKEs8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DF9KXMg5J4vv8pdeDEVX9hNnbwvdk6JcoGeVpty9JGcRtHqSSGswuVxAQKZx4HcCkJkZnxyz3kMn7ZjDzpZkMsB",
  "key1": "2Ra8qH1v3fcwnNmfag9Vo4wXzWVxf2yBJQed8Vqw9wsZoT2VoVvpTTkjkavoTi2yzyBpFTeNa2BE9DEfofFPdKMs",
  "key2": "2UuvgBACL5hSe9iG9sp4715nega65psji97tnQRbtwajk61zMhG6ng9ypQ5zUvnv1VFoxLR2toWiFevEyGYRvoh",
  "key3": "sRq12mYMRuJ1s8w3RgXn7AcYTRXz6QybLYLdJZBWSKege5NBfHFzRMSeZZEH3ryMruaw5JLRLNhfyeBAEhPX2Qx",
  "key4": "4N2upqKcDFRYS4GRBS64NiWeJx88UDdbmKtXgHofNyC5B5BY1odvZmJg5RVq6HXGLNQF4pZNgnw7uZNiMwV7viDP",
  "key5": "5Fo34Lwmw4izMdHdAfGzguuDhqpvS224E3LjpbTgXouDmJakDQjfUizpQAR2nbZR4QfuVxQJEgSJmf5K2LiygTdb",
  "key6": "3fuPjoFianuTbyazxwxKKiziTAp1TdxJCuQZzmzykXB5cJux1ZiAgcVVnQTbsbsP5ktA2fQb6pczXXVDJpUG8Yxo",
  "key7": "4x53HYyWM1U1JVrFY3Y5Q82PoeektC8Fjqq3vJt8dW7NtxjZQeVUqEkAjPWpREjJSxh2SgtGskYBxyeTn8HSd38A",
  "key8": "3Qxrnsux8bmVWUpSJHfSV53txqcsVAMRDh8rYQGNBcvZrrpA6EzAGZKfr1q1HjByhmtwGyzJQyAHnidLohUhG3Ld",
  "key9": "4Rp6eYiPf1f9oc21BtYHN1ut61X64ri3T5nyxVCgtmd65UV1FArbBZSkF6vZd6uo9QnHF27Er5sj9PwPpZ48FXju",
  "key10": "5if4ELyf54R9aPzLijMDekQDmDLUQUXh9YTJ4Cju3QYJBg1f8oZjagqffJ6DR4ddAZbxiC4ujt3KpGMWuvgJrgva",
  "key11": "3MZbFTwfZHkRUoENbkZgQkx7VVKrHvY5dTeXixHizCJVyDFcqwgvKDePE5DrY7vrYZ3VpAuqocF8ieQVP57TJQHT",
  "key12": "3diEEU4t9qnb9hYjok34kFpvydqeS4Ys4v41fR5Kt53KnNGmvX86NoVYz9ZpVSj9JvFkfR5gFXhAauyJbdTDYES5",
  "key13": "5SAgekZsw41BmUL1hXzPmNvozs542TYLw9Dscobi8ng4fFoeYgw2A5sfnG2s7pBZZLb8b8ivNmGToWS79hX3gbwK",
  "key14": "29sBgV3UihxPsvq9LCDdb3cBeCwYF7NumQg3ouwYnbSH831dC9VdN3a9gTERSzqSUMtxcJaKWeZmaAEpdDsJ6cZW",
  "key15": "5LUdDcXBDbQWwhQVyEHVqFP7phrNfb1kkRTudv3UJCJZg5RepHNsPnfdw9cNTVAznZVJB2bPtfVik1iqGW3LzPoP",
  "key16": "uyULmFHSKB7S2kQPXhWATqqMhk9uQXGi6KVLVDT4gJN5HNQ9Up3ecozHBCjHpcQ5pPToTj9ew4fUwRGGbSuTE1D",
  "key17": "25LLLwZawWjRYP5dVVdzmHXhiq7UZgnLMPCJ4TAbXeXN6pbi4b8rGopmA3ULQrUvPEL1TKiFJPPBjHFVw7tHU6ik",
  "key18": "k6f8tMnsxrPw324aBwZswsD6F82wkKAz9tWgLtZdVaVRd8Jk9uskLBadxWWxpV94UnJ5z6dNTZhqkbgHte1A2D3",
  "key19": "4rSsaGpJLnQppLbJxwbZUEXLZr8k14ujEYFySMUETbVgvGLHYncPhWQFTppPDuFxLZnZTcfkzCrDekfEd6qHELF4",
  "key20": "3f1XKXpwo4exzEEzrbJtf2L8e7MvYbMqEFBvigX75dq2xK2uyMtnHUubzYLPyanCTdNGeRrkgFwmEL1imG2hTr7m",
  "key21": "2FhtLfaenmGuE7nwYCAq9VMcrMQXGojbzt7CAunwJrzP422XUVQ7RZKstozhL2WwfckoAJgkRw9BcAfc3bCo7cJg",
  "key22": "3RSMzmtVoyioQLZTK53fwGufhjRehJzr7saLcDLLE7zQHkkqLuwM6FYft6An7uHmfMJHRy78wpnoJDSdiFZGtkok",
  "key23": "3nPg93kCszzxGXW65YtZozgoKvffF3i1x7yNPguVJF2Q2Kw4oBegF1BWBaGFMAj2XUvVk6anvyguAijzCFdh4Ju5",
  "key24": "42UJnviBJ9LEnRM25uPWLwfW6554h5YhuZV9hgAnkkVohgFBYbmVJ1HDJq8w8d7K5w4rjtLPswxS4AZxsxkBS6CW",
  "key25": "4yoh2JKA8EMSDExJhgq4TmjBX3M5ZUqCzRRZQsWPzZ1qreJqnvc9wG2rhxZsvcDsunz3AFuBBW3oBdFf5BPCjFuk",
  "key26": "qEKHS99VbKm8KcNJ4VqkEqYMr9PBHdg8foFaMa7ShxWY7BoepvJHxJsX919v53XRZRXoqEHF4hi1NprZCLKv2UK",
  "key27": "5VYQbiafjbmLpE99w8pwEESgneLRcucpvifmgN4Z5ntEcUFf1XdWEjKHA2Tw93S3iTidm4FnH98CpsqXVdLCZKeJ",
  "key28": "2x66ZYyX68VXFvG6bvnnEmAkCVGmJnuoUC9gwtDN2CPuRysJhiA5nmyHWVnGLm5VCaZos7vTbqoVQecfgkFuvv7z"
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
