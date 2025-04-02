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
    "3unTEKbgmvwogXk2McUSNQxmeqqDHsyedHdHZzRWoXBREyZZUtDwDFFHKZToFA1xfShRXJyCwdZvnTZdDKFeGnmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZdtmjVRTDHeQ6YPvwvqdvtSuFDtPJWhWkmf1b9YyJeshrrPRAw87dc8v5DiMPoeEmVrqFdFeNnXf7qqD6ERga38",
  "key1": "2H6jrM8bYd93vJYA9kemW88Tyt91KeCEN8iEMnaETxZPosCuATKCJqQu7mBjoKeZm1msWfyViHMR74RiGRXy1gkS",
  "key2": "5f67aSgTC8eKUuKe6FYWe3v2KqdopSjXnB69ng5NELgw4FAw6KVwfJGV6eBCdhEkwBFLsJ6uLtgJcYbqPfPodPwK",
  "key3": "3JtdMbh6SLrPq461kPYQsRXqJUXjsJb8x3xAiJavCju49H2FnWUvQjKmBScnoSYGSJHmy78RExTVZojZCAVxwmmt",
  "key4": "66Rm87Zb9zqqVFqx31rFnnCqeV5azUrQnNn9sf8ofoukvqL7LLA63gkrkAdNLnyCAMoD8yaT2JRHYLgZWGdU3sr2",
  "key5": "4JjfjDPgEJj49Zn5AzdbDSBtTLsv97PBQjBX6QRTp8BJpkrhMok4oLNyFUwgoiKm4Me22mkviHq1PE7QyEEtWsCy",
  "key6": "43H9ccg5AuRWHHJGh4LXnXkE4BDKRgfTb14zwB22G2Ez1C3RXyYAVC2qx7XpHss4X6yA66h4H7ZQRQQpZJQCMAGP",
  "key7": "Y4jXwbkds1jrWFsJ5AV5BJQHFNggKy79rCr1YeTQspcLgK35GLdPbmGnyCkCaUXTPjiYbdEo4G64LFPvYzyMsyN",
  "key8": "9qX1CFYTbdiVCtFjM3T7uJT2qKewswpYNqtbA3fUVeuGF5hzqtL59eRXNZ7wYwHcZfgGrzTxUEeKrxT74fLCbrC",
  "key9": "267qquCVf3PD7T2E1rTLGkYCcncmpsn2RmNiqRirvNqHmtTY3w8qRQuCtUf5kCRJgteXXuUFVhUL4Y9tFkSWSHJQ",
  "key10": "2vmpXiTe8BZSezperTKaQ7dobPvgmKyR1nQw8AACktmybNE9CGn9fzCNtreRqVRFdBYvoiXaRfediMAZ2vpJQWC5",
  "key11": "5a5uqYBj1vXmBH14vMBDPQzvkpo5siMWaMtywX8FkjpeGS1WRm5hCtidoG1yQ6MfQqMZytxqdSYgSFFGgjZsMcUV",
  "key12": "4Rbrs9xMqWCaFtAraJ3htftYhrMrwzUFk4Z9sePsen6iewW9A8uhguyvWKrNNLD8TXXpmtr8iJrMW8PHWLdvuvuW",
  "key13": "2EoBu9HL2dNg2S5WYYbS5QaheuUQmrUHgp7wRsJCcMLsxj1r3ecPVpKpj8NhmpUNzyaKTN6Tb3M77bX7QMdU9pJb",
  "key14": "3Qu5L72aEZfMrBu1zkaBep5idCkuTxQBNA8TRFCRHSLbJYxghKTfukYZGNtnEge8sxFNann2DYVXvNLWUp7Bhmzk",
  "key15": "2ecwsMwdAERKZKEezEADx5HM2EAXhAsBmefToK2EXhdj9bXAS3AWT1F9WZH6XsTLQjTNHX53MvTfh1gJnhXAXcpK",
  "key16": "Uzfm3ShGzsjXtBbSmWdNthnY94Q2f7Th3QehuM4U8kQqGqYj8SL1aGua2aj3dPKaSRUKRrBPkzuEpwQSKSkc4GX",
  "key17": "4rupkTuEzWbRy5wL4DYkxRWvwy187mvkLRQATfsDc88gFkqMFxcYca7kDMEDGZMriTTtjEEemwspHKvGcH4T4HQB",
  "key18": "39cHNoPVWvCDukMzcxa4KmMucdWwzyRLVT2ME9ybwmKwfBoyk8uk3irxKoBDfxMtj8h3exF16KkJLwNBUQZSYoK7",
  "key19": "2WS5TZPfwwwto6Mmqu6YCHajzKTLRqn7FknN9yFVK7izWgegxsjfR224g94gd6ksh1tEvkVhCeK6tqffi4UUPk9P",
  "key20": "2bENNGX9esim6hCPT2KfNq5Fa1JStvqcYFc9j1yUYiBwVhJbChMDPLxMTc4GW7RFNdwJcRbMSriuhNUGAbJc7yKM",
  "key21": "PQNef9LPLPdPxFTZj1aqWZDr8gGcLwMGZ4ionn6MEDQuzHN5Guv2Qak3uYjx7hKXss7ZNFocqRk9PBgDwGrcT4i",
  "key22": "2Go9gdbVRmEddBcXMnan41HophBxnRMVCRR8g8XpTu2EtKStWmFhW72G9mktJT4zCR3Rx4Gb8wVX4HLoovWUdyE3",
  "key23": "DTTPqZZYDEwzZYtcPwWigLbTBGWpmvc9oWQBaXXyTsn2GxBf4udMztgEjkRA1Pbhrj6DTJaGVrZpkPkFvCpfee9",
  "key24": "2BLFyN1YZtvhszpRYci27XxwGQmXC6HHxo5sonpdjCwD1aXDWjeRLT8WhLXVjFigvK1ZuzQDDa1xmW28X6Asfpki",
  "key25": "4XNqikqtrUJCbV5uABxsWDE2ZLsjoLmSJaRuBrHMBqNi2U4keta5sinN3nzuMxnaotV3wpoVqZYzZRgbAAaJJkgX",
  "key26": "2r3D2E2ami98yRqX5qaHs9YZ2ymJWQcGRUbrmQWYps7sGyJnw2qYaWGvEpdBn6sgmG82jQDG4NDkEjjMpkY4dVXr",
  "key27": "5ZZcskZHHFgzssrPn9NcWmtAntHwYLGnbsPqqq8bYGctUqhw7GtXNJX6hTV7bK7j1CkEuXhgQ6NqQJPJFfsnsc4D",
  "key28": "iH3vT9TRwepTmENMrLQKPMRFapMPGUsPA5M7YjYJ2w3qSynZqRzrBBAHasAAsLKdPfhMs3S9y9syJEuFvM7Cxqj",
  "key29": "3kbfEH5oqTtph7NxMyZv4nyHMuyFdpHJJ6DhwDcfCV5tVxn6oxBSNSeYBp5ZwJEnsC2mdWCKujWMsyJYUW1LkZVk",
  "key30": "345pnf76C6TtsKQ9fPsyan6F3moifewcaJCuh1faVR7y7YKH6XbUyDUraVRKmqfEx6NE9rSsa27CYynv9M8RFMeM",
  "key31": "4cJEFYHFuT39MX4f53q64oUbqm3yGnyiYwBj34mrbKxfTtgEBRpf2VUWekHD4YoToNAFBBsdDEW9S2qnb8ACc1kE",
  "key32": "2msy4nZ9A7tGtvPAefGzfREsuwDKWWybD7mWREHFofxvyVwo8Sgd8fU7BhH5mgURPPURtZKLEySJTPJ8VopC1cHH",
  "key33": "5WKv97AvFsN554dgH7jUCGk4u5h4UUpsA6hhvtP5RZacfULcKUsyv5T8MRRp5zw4bukE2QFRintpRHzxBQKmWUg2",
  "key34": "4kNdJQ62PvcSCzDFRKmMPqF6kF7t82UtvGvTNRdybrzv4Y3mgg5M7oEWL7b3dVQHu8q2wydgggodWgZVbgCMu2Ag",
  "key35": "5hqef94jT4oU323Tn89QiCZ2NFggLQZ5sZcca7Ds5TkT1MgB5JFuDkCAE5ebnb7JjecJYVoPBkYy4HGRC2K2DeeT",
  "key36": "3x8jkJUJyHLUbDToegXHDEf3ZnzHXgxFwXZaiLTBFCnrdT2XixYp6Ak7UJnjWSZASxmDB8EBRpf82Rbap2dvG5SR",
  "key37": "4DFnpq26HoJSzizKnj8kYVW2j35SNGHvoYFqwx6AFJ7VwC1k56XvEcxFX4zKWsAbCJJ1omcKkKKerGfHk138dEkr",
  "key38": "3M55iu7oxonNb1eyYw2A4Jnnu8GfesjTKNsjBPoH26BAZCg6fsSqL4E9Sw3zRdZzwBwGgGXLXQ6K25WAzgg1Ry4R",
  "key39": "AFW39fk73jSKf7N7MPNzgrb2qALKvin7kt9T8uPqv9kgkdss7ruNr8eVENR63yBsdH7qZgVy7FvpbuF39CEo93R",
  "key40": "5hFdz4hWDLxZ1cWRaP5CYsBf6gerEJFjeVSmTpsWwy9kDikRjPz4hH8rLG9cnPGLx2v6ChTAmfAcdL5EawReP2of",
  "key41": "7oVKmTnUEkrWZDnF5AmodnFujAMAgxrRjv5d1uS35t7E5emn33yBbrQJ6qbxFSJbMNuEQX4NrhAp84f2991sbT4",
  "key42": "5GmZPuTFXXdJiyQJd6DzcNDgeQpsSr1Vc6W39ZAfoX7Jvxkb6CEasa84Qd9sAVALL7zWtvjbUCGN3uQVf5HJ7M8D"
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
