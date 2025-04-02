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
    "2FoGKdnsqhGjgDwrKbR6XZKYxr4M4cBtBBGxwKNQteSC9wydpFe7SeGkjyodzse9GNWEqEP9AiRjGrQKLhvCXks1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a7G7eciwLgu7R11jNV9e8qEEVDpcX6BNrfYQwHXJheMTNVEgVCELn1cfe5YXabPq42sR7YPLWaHkX48VueWHou1",
  "key1": "2m372p9uBx6i3vdHj7BbvLeiyGzNcY19QcV1gv4huZbWBFaSDdx6C1RiGQaRiURheKtxEh3cPYkRp6eoRhnH478M",
  "key2": "5WiWhzvF7AiQ61sM6Jh74bidsiQ7NsCq8psCjnoDiikX7d3CBMuvZAz1j596mo7NjagMVpJSmnZbN3SKoTFLhiv8",
  "key3": "5MzGMSpusuLBDnSnFg8faHACvQ5Y4uDWzu5Fxu6QsJGZRKa75XrQiowUF9arvR1c8yrmJ5BapRUePuJ2SW2bCmHo",
  "key4": "2C4gsh7chb1rkHEF45L87xSX7Subdam1J1ECGsgZ1jEyEwMWuz43jVvD2ni3A2KvPTbFBezCiGhts8M2VLKrAMhv",
  "key5": "284hkEm6XmScJB43ZFNxBkNBX1FUnTUCrMUMqyb875MUWAFSadzSsdxgHXSEYSnYTUxdyCd1iDqH3AovaDFQSai9",
  "key6": "4w4tfZXHSgQrg3ZF6vj2zszf7ki8xM2tNATRE9i9v6Q9z9NRHn4Q2XeAEqGG2LJw78zMKstnMAEXCnvDDFsHFQhn",
  "key7": "NNctnhaBSPWFrGG65GpjzgZbP5wRj9eJuHBmDMe5yQQvGKrW5t8Gddz8rZZZJC8PfBkRBTYe5x66eamP9wJahnD",
  "key8": "T35MjhAi3w3FoBuUYWYT6y2xpt489Wq5fkrbHzd2ohh4BGVacskouj9SqmXiDY5XWVbyaZy5mihFWPxStR4gqDx",
  "key9": "262WeAxGLoVYkobvTQMdgyPgVNqnkBBNRLmPE8yc85yfcmcipyiuXpUg1iFs1f155mEvGHM6csxZtjVMWw2FB6Gw",
  "key10": "4ETCea1UxcXAQ3URv3m12V13Ba346jA95xVLqHNA74om6wGesfy3uSegHTUCuiU65d3fNCckExRYajVkVMhzRWB2",
  "key11": "3zz4Rb39D3SLNfYkTNo8y4omvqnvfi225QrVh2VMcj5K7ytYvdWkLWyUngw9iUGXSBh3Qp85jCNXNcPvYL8d3ZVD",
  "key12": "5gs2kJzLk8ULWwk5PfmUDaAteLzxSDUVfQp1UnjYwpw427LhSMwChHxmcjtWGGmHrU1o3JuD76Eh1BneB1wRxia3",
  "key13": "z5cys36KrzXKhLuTjXiRHJa1UfEY7qFQ4d7aTsJSaN66PwS9veUmb9iqwr1p6jf2FEpTVtWuuwmNbykqdDYH3nZ",
  "key14": "66JnTCWz4pzS7csUy8Egdc8MeTieUhikBgoEtC3bvPWRrSuqczYKLHXMtJfvT4LVjh648nMDHLXmyTp9hwGgQngE",
  "key15": "5uuyDNZ7WpBpx5a3uwUPXWMjYZEtoeXyyJbPqL7h51Su6r347gTSjL14dw9pqAMgvWLVsZShgCV1GkfzmPhNbT2V",
  "key16": "1yLosWw29b2uX6iES8rUtrCCd7bAkaGAjyZmin1J26WUEerkiTVJYcZY41KVunJ6L4DL6PYC5iaDuNdDymuJcZa",
  "key17": "2CpoqSM3em5Lex6MfgmgzdU6LdMrHoucjd77s75QLzMGHDETGTuzGk8HSqy4TUEDJpTZzcaBFf44NXzZKd4Uw85C",
  "key18": "247veoMMqGBGJwyCpiHHcZo7ASLMJLwwzTBP1QiV4StSkBqDFczNoD5S2vaJJS921uSMXgAsxKJ2oHmrbu5D79ym",
  "key19": "jjk4u2qGTjxg5FyxW7cRXHDvDZrKUVUf62dGidVUr1tE8tYkQeJ9fMuAAmWhBDLSNyrL85e3QkxXU5EYzsikazj",
  "key20": "2iBkswkmy8VyAzj8wKTog56gvxa4sYKgYVq4S9b6kNxrumrdwAXqomsvHSWAsXzuyZFsJJfnVnWmtHHepe7XcDoW",
  "key21": "5DBLHU8Rkk1TZpu15UWhGk3xzLgGi3DxoJTQ54maSiQ7xm3cpRLr9AMLTNJGPC8hKdkjD9886PeQkVUQm65hGqfA",
  "key22": "26nMeoLuJzrGCSKhwpGFjv134iQTtKttBq8F1Rwo4fp3mZ3ov9nm5BzhhFaMkumiMtQPmNQsKohuRXyyVrgryHNr",
  "key23": "GSZbNRZi6w6dNnEa8MndZH8z35bwtsThmRiSDzhS9XiuRQrN2dVDAn2SwhL3R3sAeiPbJs9iBxMUDe7HzcdwPsH",
  "key24": "2jfcBK1q1X5E7CiwsMRPBc7oUHG5yFKb5pBJbEDvXK6zPezE1PgRYzyznPKuxYiRDzpKkFYrcpiS22ZQ2ENwjGBq",
  "key25": "62xyC1BT4g9DLQUhesVuwnYdpWPGg85JeuYo22mTMaSxrMWWAnxaQzTSTA8a8qUB8a1S2uobe97gUhJzNuTkPKxd",
  "key26": "4ueBRSwr76Tm2vC7FFrSL3JNeF8gRmzvEXrVeQzYCyfxfEe854YUrpjvUZ8JPmtVt3HEwENpnDkgBiD21KXwN13N",
  "key27": "2REoJFPedAtMXXAmNcvf4GCpCdKHCK1VvcF7EwZcY9TW9qjmMTkZDAtfnWwD4vT9U5Ak5JriH7UQDihWuTGUpr7x",
  "key28": "5wy6UHYAZjSoMKYxVuw43o8nBHgnGVp8kMArNCnNVTJBirLNCREYfZpBYzCmPigQwW3xuQ7Zxsi8wd7fqEjQJL9h",
  "key29": "5e6dx8gekh6DcjPFdtKdkq3JSrdxdAodUKHDmw1ca5gydFn9SQEGQT2nsWtkjTPDNS6vDRV4wTbTAEwiZUzaHN7S",
  "key30": "2KPH57Na1BV5UpqeZFn7AgJiXX7E6P8p7rUxHcFCdZtD7twKFzubjYCJjACLML7vf3cPxiWjHG6f5WHN1tJvGdtT",
  "key31": "AnrkWKEbEhg77EDso2RDXTrDZYVVHxW4aT9a3EmAUUCJwDyYEezp2cMfALwJYubSAFUb1EZYCh62ZZ8Ld2MxohW",
  "key32": "RmQDJ7dume1WrDy64FCY1sKtKsaLJU1PT9WvKoFECjVG4yYH8AD4g7TgSvafDyCvUeKNc6i3S7SennszmnEcgcs",
  "key33": "2Q15RXMVNVyXVcXtLQN4FuwLxpeYfcDAgxkpYh3z2FjKGmTXjBCfyL6ApGL3Yo8f3GT4tLx8ekFMgCMUQtfsxQas",
  "key34": "2r61SJtYL2mbVLkDT9yreSGfDPb66gY1WreEXTFxcj2QWwxuEGSL4X8hosYXtzxTUTPtmTBzhJWDb7FGfYatkoCW",
  "key35": "43KLQSfYHcpS8GRPVAxBvayjg6U6fQuaQpRjzaM9VYh4urhxkjtuCKu9FgBijw1WBxVF3Fhbz3jcxfoHQqRZATfe"
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
