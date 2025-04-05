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
    "4VgsBNQiJkfzoYUiW1iqxPF5qUjykyNftfcXgkCTFWCCBGqdySRpgSJNFkghwsTixa1hLfSmahU2ijgJrF2nyaW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sggp1TE5Lj1NGdCjWT1DCXZQtfZCRhWDbuXW5shXNf3Zn4hcaTsTtwqVPw5Y6g3bgkA4sV5zTza1VMuzdprzW2x",
  "key1": "5GUrPzZTcSBMEEZJ4znBTUT7sz2HPZGhUdF6FQL9SSQxP3LKhnbS3aBeWSgCyVwsWLSNkVaXj2tJb73Xv7Q6PNpm",
  "key2": "2qLuhcMDhbmjyc7KNHsyWJtZSUNeeshuR7V7BisATs73Hejnbt552YRba2jxyTw2U5UYmS2u6wM27KfDgQEeR5rJ",
  "key3": "28Q1wjdgUWnobGsB4ogxwzTsXdtcTgtDqT6nQy5EuK3yT74pTwgB1byFTsS9Urmim1GavjW5AVwuHUBoGzHnY3Xm",
  "key4": "26BX2yYhPj5ybQmX1ygW44MFG5kaWxi87ktLq4z76AjJ3tJbRqQgqRbaNM2CE1rp7Zj5yQXAFr79ovbwah5Nb3Yz",
  "key5": "2p1NeTvAPJQoYHTJWeWXFM4yN8h6t44MfhHthhxQpBZaf1HdCgUurjSG3Ada9NG14p2jD2xVe6T6bd1JrzYYMeNv",
  "key6": "2kvzxekwD4qczdzZYyfgwtQ1vhqitnRcG9dPTwWndoDqzpc98MVY6UBSWfvfEPEPSCttgAUFpXX6i2dxtCD2kLT3",
  "key7": "E4wQyWj3HKuSXvWJC4zm45jjWN8XYLv7o9cKtH2pV96ybwgfkVzPTuiEPBTkd3SUu1oqMMu6ouBQujWTc8A6s6E",
  "key8": "3JRYdw3FdZxzaLzGMjHXSNFyR52ca32Smto4UUoBJfDoiExLc7LxjgQKLuKEHCj6ow8wmD6THPCi3YG3hECrmcfJ",
  "key9": "35k9gWoFHiG9GNS4wZ8VUDdyGa7ZBpSdDzH9YvvwV2y393TJqJde2Ag4TrhBqRRLgDSJKkTVk82R145hBoKju3xu",
  "key10": "2bxC8u67KCzGMFYogpTQJfibi25g6btAUvV6dE3WrGMn9ffJFWjqztGteeKbwDyvnKGKePaKi6UrPRc8kWjMgRCA",
  "key11": "5rsAKwAySEocKQXWJVkB4gA1mUzrFQQTyxgHtT5tvDQbB72Ln5JThEesbM8X8aHyu9BkRf5v3donFi3BnNVXepoE",
  "key12": "4nidzXjMjSMASMcrR5VUH1NRA3ACvMx6ohkgrmApdRhHyiLvkevv83HW5AejG599VTX3vyCYnRQkgAXrQgvJcrt1",
  "key13": "2o157N8oqMGyeZBNbg44sJGm3uqVunDVyE6yumiavgTsa4tmc4BM6ZViSz25QEgYL9qDFXUtLLZm4B9DwPw8MUx1",
  "key14": "5kpHEWLRYiqzh2KDrmhrdWWDjvXvjqqx6ea6srEopGFoGRtoSWxhvimBzUjSLuW2pG3JBEQE3x54UyeP2hn9hq5X",
  "key15": "cX7hrXZQHZXFGR1t9kA56CU7ejgcHzyei7re79Bg3Bf99MGfpdhpvRCU8Vfpttb9CcRjg5y4iWDzFuSkLfyMrJX",
  "key16": "3zeaQWyKBKgLnuS8gQHLQ3w1KGHUWCRH7cn1zacVm5wYjAfn5eCPoHSb9kukzrkEGhQsUUJobmvc7DFapkg4ETuJ",
  "key17": "eUba8AcQGSirppxskRKNjHj596asiPhCptsz6U3g52zbYN9dkgeHrjM2RZDxyc3Hth8y67ifNBpH7UczyNotePe",
  "key18": "4TEQDJjLq3VcYNsto3NXoj8mwtHnBSS9LJVSWc6SoKgbJzJiF59jCidodj8V855buzzY9tHPaEHCvUNh5JVNY6Cd",
  "key19": "4trhJkmYZ2p6H5iEQg5o1hMngqDDjGLh4ecFLawLcrzq8bLGFRzySZePwMfqirnDsdA7vzzeFkUtXnqoB8NrofKp",
  "key20": "4f2cxuivHQ9RtAsYuvCeUMQQDqNc68bK5AD3X1Rd4XFfSgSjphJ4ccdrX4ypwjxAG7VFVMpjsqbjdGhvEfDBdJPq",
  "key21": "3t1awq7XJvvb66DgAR5DNrXH11StH3jv3bhzLU6XsKpoNFNU95bJQBr194Wn14vqZESAe38oV7RP3jDdTaPM5YxA",
  "key22": "W5Q1h5WAQqsbTAUSFm11QWaRyrKftEVhqD4hM4bs8V3t8XYQ6nVNXqh9R9zdsEPPppAGmUA3UTjRBfNBetTTyit",
  "key23": "2Rg24k3JD9ou6efec8EPet8bskTS5tzsiNJSvhDHPLLfeQ4T3uGMSGiieDzrEfqhtJVqgECtLkodT8uJioBwRmTU",
  "key24": "3v1iQEjBu5eURFhkKTna3hHbR3wgrTnsv7j9MKKynwS2WHi6Hhgkw4WfUqFym5ambFoY1ViesNkYDwChtj6wkB74",
  "key25": "nCCDMVA9DzjZjLqBGzMFLagjr7C82w4oxV46v3eijx4C4J2UH8dUSDLKj2aJHbYqfikmCh3enKAyPUa5Cp1ktp2",
  "key26": "2asSFaNMsk1zUYs5CidGtCZQ9tpAGv2GWqZy6bHsuQKmraGHPsQ5PS45CQxybxiugz3cS8qd13BVkNML1dnfuqrY",
  "key27": "6qRc7siZ57fie1jqa8c8vV1sTaxGN7FMdPooxJeWXtXRJgjuGUd6oEK4cejRWMUgcUajk19aBF4Rg2N5xp9aCBv",
  "key28": "5c2RuQnkiYp1Mk66GBHS7DLtLUgduFdHdT6RiJTqtfLYajoCTfmroqvChuZubDwt3T1WBGvVKgBgMWCTzFhRKXi",
  "key29": "2RN8giXTTPG16CSJRdPjVQFZ3PFnRGoCs4bYbhBjKjr2JdGrqn755ZiCJEvb9fSCCReD526j2YjgVeZ9SpfxifoP",
  "key30": "5NomSt19v3VtYH8Uhj6rX9mUiJu9nprBMcRjcvdipccAAn3V5ZX1vbpLeAhE4MKykvuZ2x32emzgXxrnXF6w5ZcK",
  "key31": "2DrHN7JzEbS7CiwwLEFLbcJyu6K8ai9xUfqsJrQAFD9iB6RRGokNCbs3EMAbkvRbLqbqErGmtZoyMzeXF7E83xp2",
  "key32": "5gUD9WTA4dVuGWnEPDgGMQoCEZSGuJb8vxkcHTfik4uvRsbyCWxZJfX7FtGXXccZH5CUGurBJo6skiFrV9y8v2TB",
  "key33": "2xPqozdT5UB2jx4GejfYDZJtZd8qKBZ6wQmmynpHcvyAzx96TJF4xaxkt3QjoGfG3gnAe1Z7ULeemePSnkUrWy6J",
  "key34": "3aWomTG1Pd2APeQVQKANRUTS9ip2RhzKyHDoC1rQRh269yASKjRmuLms3T7wsYNRTvpKWh7n9vPzrF6tryaLPzKt",
  "key35": "4ZhDhaZp1KPeD7s1pUiXXoBZMWapeQNq1pCuLMGhfdBk2YGdRj27QWbZawjt4mJL81USz7N7mtzKK4H72AbV5Vyw",
  "key36": "5SDFRJzrnmJooJB9LauDv5RsW2Nx1G7PJ26VKdeuAAgHZN9FdmLr1n5WYBikfBTtJAfa7pj7whcEBZXPtZvf5zfF",
  "key37": "5faXRLVvEZMJGUnTS2aJGimULKE4DXermQ1FR9AgxCRFKXBRXkyGwCgYNfAmgLgLT8GvfAHNPCs7h9qapbH3NHUv",
  "key38": "5M9kVdmCFU6MdGvusBCX6ZGsSFaHimy4Xx6vdLd1haRKXbk17G1BjLzs6Y2A6RaPrN6z2JVE2vHTiMEwpc4kXus8",
  "key39": "5vd8qGnrdk8dbksNB8tW7sNcNhzWeUR1uVvmEW1bZY5cdAXmkoZgpddvojRymQ5rKmhrQGJb4LfrftL7FPnKYTzV",
  "key40": "2MR2cjZWv5zFj5Y6pxJBVhFAAfN4AdF5nBFEowuKNtsSYWVqiqqeGd67shYtXaeuYkznMc9E9CKwZmZdU7M5Y287",
  "key41": "2QP59z1pNHbiFAg9hVkcZjnWQBVv55gTpA1WsuDEhLy12EbwGYBYEc634j5Rw5X14M9FN4eYzejFQ89V9PyAUBDg",
  "key42": "tCA2bAH1KZAYDaMUDYemJJ6FRr4PwLhHAzFRH8vJVtSAh4cCPRk5FZqfetyL69DLkXEnoXyNCmSd7eSW9qj3QbE"
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
