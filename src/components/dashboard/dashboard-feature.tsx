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
    "5GMcJdC3jMHBCDmAY8YKXjGJeMjm9MbJTXdGqX11td1bJX7FF1Hjdc2gJg18oJmaNDqEwoo6EebNnxSXyzypPSnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4za5XcQENeh87CYkaKsG1C7NgVbQXUE8fKBXpf1D8MW3LsJSMve6njDkNCDDZUZoVhPXU5dzCDj4JJQJiomSLopm",
  "key1": "3rZvfJ6huvchuVgLpTqqLqpagdW1B36M3sVgtT8bCmkSSsEtwZ3d8rNHVWZNhNneSkAKjkrXTHoHTdtbHUuWkJ1J",
  "key2": "2ka6gwwvHSWxJ65VyjHvfmiqaqepGShtXRG9eQgt2GHRmepcp8vDe1GZ3vizzeJXRBQjrJP8EHNquwjXDVK5gD75",
  "key3": "LXokv8TwvKuLEKs48FP5cKh5d2DTBednxTQhZeLxCRh4gvCyTugm6NXUz6r1mmeHt5EynGAKoLomP7f32F1sVR6",
  "key4": "2XVq8rEaDjQgwa7nVQAy6x2vb3jYFSa5kZFhyvzbPhi7ifwfNy6SJgsRW8LjUD9a2rhdG8mKDxc3LtTLiLp9hDX5",
  "key5": "3YF4Ro4qnnveghCY64PGsWKy8ABfJFUQ9p2PQnbejJ9voVoDX9PNs7zFzF9dmzwUrfQnQgiDz9CtD3kgHCN7Jyzc",
  "key6": "2RKVHgHzUivYyj7pehV8Kx8sHuxN7D94KaVvz71Ab9kUH86nqVDVGoMKbeVRHggpNg7gJGzo14LzvNp7VE5FfFtN",
  "key7": "JYojvASpWA1jHpxRzjjpqPXKwE5ECGuvuWhG8Y6HHNskNEvaydy1zEotNt6yRtZJNAuRp6LeqBbEXfpFTjgEBfp",
  "key8": "4tkPpAyFbAWEv7JAEGfGeWqQ86Q24LscKJCGjLF5fFbVFd5mWuANK2x7mcMgtG8yuK359R8fqwZ43Jhb7mkEMSCV",
  "key9": "36fSLJsYSXmb3qAbHz95sqGtoRSEwzN4rWS3if3topq41fxiEaWJQNK2ju7dbKJQ3FBsGXnPsatVe1uq4RYEsCWM",
  "key10": "akBZ75jihEesfded35fSA21nk86qDX1V2PnqMdAXqurp222u95oQPkevj5jRc7i5iyC4QEpSwuftUJH12mEmi2H",
  "key11": "25DnhwS5wjmedmUjR5LCps1ZJXqbUdvCAbrYccDpF3Hg4L9AaD63H6d8BjAMfR1Vrx99bd1r4Y75jR3Y6MBCbyyt",
  "key12": "hVEV8bLhEmqRoBoc7wLWCjQW75KBtaeerbaRFhXx9Bc7Uihh2g46UP3gfj4tAhjtcShwVEuEQ7xpWV4xeVPDJYg",
  "key13": "4TFZEzMtKPCXawKYQ8uHVBTok5BLM3f6SAqp3L6cmBMAtsRS72WHsDeLDr5oE8oCfUkJootPGaKVmTzSpzGY15ab",
  "key14": "Xx38vdHzRvTUnSepT5KeRxa8DUfEeVCWc8kbBxnYnAHkiRdnwG2wfatH9Y8g8VvtiuefzXPwWeitd14rtJB2RYf",
  "key15": "4bu8szjwLRbJEUUpdDpY3K7agzzwdsjhvfLpoEEqUR5MuH1gRXeX2bd9EmFkigZsi3gR3YJnXGSZj2Z4rQCGKCYN",
  "key16": "5jMpnGtz3Lg7VjWeRUBGxjUjQ9kBZ5RjeLszdbA79DXgJNSMRfHbJ9MokUjE5k5KHEioeH2cDBRNiJP6hbJL3MBd",
  "key17": "MmYdUQcoLezC73EwQPz4JVpxiYfwKSmpyhkM1FDKFMUoFmC2CUNaMbobnMjZSss9xafnaZM43XWDdvkixDVzVYL",
  "key18": "5q5XvsQb32XWV7WPoA7GEVgzZ3Cy4b8jNtdCs1F4MGj1fUwB5bv992junDwAmnPHNkhSEP4dbzJ6jgaUkELsdpuZ",
  "key19": "5KAMjtQWiemQcwenANPPjpaXLDW7we9KZFE7bgs7MCf9Py7Ut4ZJ4H1aRtS53GPV4pM8HBCTqk65cSvc1SSxn63x",
  "key20": "4A9MFrxegNMoi1sMoQdMpHnYZkFpMNi1qdy5GecDLA13wchVBFzoJR3tJc9yKBcgcuKGzNTsdty29dU1GLt1sqfk",
  "key21": "4EgKkaYm4MvShJUwxy4sYAu3FCL7VoJhGbZZnCKPF9BoRHKRHK36XMHeU7qQ2rU3S4Mb8Y4A4N3HwWaqZF2mfvUN",
  "key22": "2rNBNR65RGCHqweLd3PqJ7bM15LEMYckhTgtoiJu17VsAt5YSQvqduJcdv2DAo9Sxn9y3w1Rn6hzxwTMf9A5DPYT",
  "key23": "5Q9RFKSyaJ6qRwFj1zWx2FvxLHRPs2ZxgumdRdYRnYjBAahxeSRogKSWGPQC7KSxtVdJWE6g9WqNoSpJcN8HfPdE",
  "key24": "5cFEmjhRGgNJF7ycTBzh7PTqY9Ztq9tfa8hFg22r3Cbn8cSXNeDtKZUrvgoagDCkuhtsf1GSmdHg5PVkTfVjMMaA",
  "key25": "3H2a9TwLNDpLCAxYunz2ZwDcf7oCN9EWeD7Q2t2zturksFkNoMVYraR9VDmKA7aNfDPfgpz7vU89dQpdxLoxQHf5",
  "key26": "3BccnFfFXyCRansrNR6FWhoSVaAXfi1fzwXdrCwgJxkExS66n9BUEKLSRuMBnbKwQpxYeKdf3FDwrDw44GNqP4qm",
  "key27": "2t4LVYW9MJ7h5u1gDTf6EN4casmWc3rt7A9hfyVkgkxBa7RyLpdJS6gQeL5uKpH2MQb4B5LgkgwYtGS9ppVFkDdK",
  "key28": "2B5raNWf3d7vmgfGBP7aBejV943NK2cWZ9H7m7khbFzSjeLEzFN5A7jLCdwDHTVVHMJzoo1KRtQmwtaXaXqFoECV",
  "key29": "CdJWpnKVMHvTXDYN2CYwPkmDgmLc3EZ91XCNpGCKftgVnJjVarCMW7m7c7h611Z1A2qMPhnuHLveRr7rwa6JDjL",
  "key30": "3L2AquzKBjMYPFDENkA8FRP98GtjCRPtoULP657rnBBYWtk3fYGXmWDJjKSk1pWEN2dgoZeo13Su9L26dFXfZYmU",
  "key31": "4KbTM34d7i7FKdnVrfqv4m2dTxmGjxz9bDWewDBEE8TCGQaJehbYzqhPfyULumFaPk5r2vKcqG9DeyV6k9uhvZih",
  "key32": "2e4Z1DERtd98HKbhLKfwTaPQC8njWFXqT9Wew4EhX69Eavdhx7Ttud5gaGB3XKnWHWvVEAWEWqm6vDH2tiJKcHuV",
  "key33": "EQd7v3ATHkvLwsky28wvgCM2CLgC7EUXwD9NrgoYgWVmMpQ3nS9QMvyifi7EtQnwzPbgh84kxPAKEknY9nTyapJ",
  "key34": "2L3ybt3kpXBLFxkM9fedandjvfDTgXh9YXzAa5UdKv6d4eU7Lw29LQpEZyVRzS6n7FZHdkVa9FhE7zuMZgCRSVw5",
  "key35": "3jZBrQoJ9JdcxYEHjYN7jRkfBJz3yEyHGA1sDwUTbdUxGjLwCKgPm7JzaLeMYFkxiHrGoJUrP88hZbb8J8veqD26",
  "key36": "vNbaP9cRCKtyzpqyrhkNJrJ3am2jVtY4qBWEJyQEHSKagPPvhfsj2KYjKycH1Lut3w4oDHWeXw8FYpgzorAKrr8",
  "key37": "24tGRGtAxyhgeJvqdbNXgKJ95JyXBPsncNRyC9Y8vdbKnDACNPajDtnTDgstgFX2mXFL3Jv72pfr3npGKgi7QjLr",
  "key38": "5GTygn2HvzZCbCDy2BfL4w7mpGztBmWtt3kxSj9oQew7VoDTnbY8rQiZUjuoJxUcedvrP3TMMjL2Lu79Pq7BE5Ga",
  "key39": "9EntYFXWXd3UWKZht8aHfZ1SYdNAygytQrK2hqfMfb1ZVq5cDRZJCzyPZy59v1KSd16QtxsrDfne8prkUgdSUoy",
  "key40": "zfPvDuBHk3M1YpukvMnuqd6V5QUrEmKbxTPm8ZZLS7xTS1jZ7QRZrTs3RH8oovTCwQWYwoiUb3YyShSQ1JoQNBr",
  "key41": "Ypwjr6pWrxHis5FbgSXd6REG6vgk4rAeaaA3qLx9ymjPvTKwLiqkzckeDqRmYL6hFrf9hdbdVHBFbKGVNgpVuz2",
  "key42": "54KJ4mRfTtntmqH73vjEZ5kE4Z2taRqz3zVj8AEjYdFeWwsQwQJQeZpHxRin5v5s5BnuDGGVPVnP9RDsjRv85bW6",
  "key43": "5MjPctDN6Ls5996BiqwL2SSR3UdK8DP31sevZtqXgNYSxSSPoCXTuJGS7VkWPjxn6tZCjFJZPE9VgQuTG32USmiW"
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
