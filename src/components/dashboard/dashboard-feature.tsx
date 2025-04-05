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
    "BZ2vZZiRBYrY41wdEqkZRc6AvzhMAspyRgyBag8iXokGfXdzMq13zoCDRivM54iqhfTiq6Vh5pRHa7kNMd4wdV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hE9BfkUZpBRDbXhsvYXosr2rGXN7GVsha8Gko1Xoe2sALCFkRaCPWNynizSsMgrEcgdYboSTkiH7vP9LVv194Jt",
  "key1": "2J7xQtmefpGCZRmCwur5VqAXWLtyUaRHBXsLF6UdbQH4CjtFeAzyYjC8D3jZLUjq3qnuTbmMswkqoFQZTFW5S9tc",
  "key2": "4YLMvqLZi2wvw81mfadbaEVDLv4oWtMgXR9dibWeUXKRHzezFSFTjDJjDeUmwx1CpFFPELtCerv1e2arQJ328aNY",
  "key3": "a4Ld7qApfUa4LHroksbPufG2FDFiskAMei5UiqDCcXFjCHXqUQkhcxFP3MX5GWtRVt91CRE9hPFctywJ7HNELhY",
  "key4": "FwauRacngV7gf7nNQDAy6oJMCthLw3pndVxabiqp82mcgGdLh2d9EEPSfFLaG2QbwdEGs9f72Dhbc2jgjBuRotH",
  "key5": "5DbEDwSt2mLJzVd8LpvNczX7Ymu7XRbRhPYZqAwHGoeJKwdMxSGFhr1VU7NCTfxQZ2JtXjKytcUYEwzoRKES2ng2",
  "key6": "3FuWvftJ4D2VsEMKEh6iDRVwL145HBzzVXNbyVfh3c6ifYaFtZr13fHMDrfi5ABFjzdLiDrFBJbEM1hu4iU6iREw",
  "key7": "431jtqYuD1dWhuFE7twMyn1UgFsPxQuDvCACQE3m4UhgYZEZfexWsr4bxLPtLTofE1bqtjaTWvWJgap1ArqtuTYo",
  "key8": "38164TgWU3F4c6kpdvtatRRj3zVSAi4c7baKoSdBH2REJjF2D5NbYoKBz5GgdEQYcVAJze6gKJwaAH293Yatm7wj",
  "key9": "z5ZuXRK4gYE64wCvnxKTCC2F4auoJpVLW6NaYeVhfCY98gEv2uhaT77wBS6SFZr8tjobFqzQ4Y4Ln72srV5vJYv",
  "key10": "3aRkbr1fkBF4jsuwcnGKBK4Ru9o4QGMoJ7KbsyEfs3ofV1HhrZJyEe834zxzjdqTE7cs9sqTCXArSEr2RvzRAzmc",
  "key11": "4xoCWbM5NPyvyKdxf5oUwNit4DxHhG88b66YPq3EMV1MjuvizzVsdtzWQ1ZVq6f7C6AAn4cwQDwinkbtGydPa5iz",
  "key12": "5hwRhkU4x7QoQxuS8V95eV5YKK8eAgUZBjq4PR8FZ55qg6QkNG4RgXL8p9PDss9oL6KdvjqSvM5AySgY6ZVJdaN3",
  "key13": "5HmLtgDiMY34CLqk3yyQQQUiWagVQR87MVaHohm76poZS8e6wcqN4mbNxcryuVfz1sCX2PoVddbR2Utn49MTujPh",
  "key14": "2EZjBVVt4LAig995M2kRuw8JQiXWjwDbXMpv8o3F3qRdYtFMTWHYqvjyDyarP5PVLRA5Fm19SgcTkhVWxB1oXZa1",
  "key15": "3rLfMYKdpznheuf8Y93Hz6RWigBdvstfsZLN7A98auMjBYL1soyx3WaJxUKT3Cm76i6Ny3PtdJvJBHcTkHrUsXmc",
  "key16": "3nmLwADfAGQThChydQnFAxZr9WxFHPcWQiGAsZYoeWSv4TWQthAjS8hE58U9AdnEZoNVPbye96iC73u65p1B7C83",
  "key17": "5HNvq19pUZ8dyLkgkLiyC2CFgnn1GeVXARFozg3183JLv8y7aPsMEMftTkCTkCKVqiF5JXgsL7qyxATXFYNRf5EL",
  "key18": "4aF15THNWKqFTudH2JzgC2Sd9HxAmxGwz1Pfz6jCmBnGFM5eq4oiLXMn3xuYpm4Eigva7FwbXpxtHXR57H2RZu1X",
  "key19": "5JPtHZ8pYf1ktRHEwvV7FDMfuKQYEHTBCPgAA9Hia2zCPRJQmH6ZsTJuWLk9kiupcqQHsTUmuXBY25WmhCXxTqC8",
  "key20": "4RfzdSqiPjs6jXRG5j9TCiS6a56dqzu3iZMbLbxD6gYkd4LtdXDXPVZcpGu2uUULsJoLi6HtXnEGqfmNDwiHfBY9",
  "key21": "5EdGV4D6UiXmFMJ7KzcJusMKheUBtUdh5KPAmXryCjXRxuW2pRuKxGYaLKz3uNq4Bz695DssR7ct6speJx6rUrd",
  "key22": "4yXXXJ85ezgoqFuhj2AsYPQ7Ut97XxJTUZv4tqMJHgbxmrT1dtsQHxYyeWoAPEmtJqDiiqV8tmwi9sfkVpXnKdHa",
  "key23": "5v2V1mc5hQJVQZenrWqpbG4cWan984a5jMWdzjwuXRtDrjmXrppQeLL5TQQhtACDL69SJxQshaZZPeffxPTer33P",
  "key24": "21UsR9rZziWnTro9NmZVN9UFypWW7yjN2iurbNrmfsgm6J5MYVqEqCRAedzm7KSNBcsjBF6A3X6Gernu7VwwQhGX",
  "key25": "EntdUKiUwNm6EGTkuDYhHRjM7NJjZzP7pqMkYSZ8KameK4woyFktuVjRvR86ay44aPS1UrmRF4k2c1dyda3qNFL",
  "key26": "4WZUirppaEMurBjDGnsoinn5bURMDGbkb5hmKQqajhbkiALiRbpvHvdxpTrmYD7t8RMcH68BLrAnTU86DsgwHUqj",
  "key27": "5aWB9cQBbzWWEZX7iDuSqGk2nPTeM8JdXAXc8NjkitPV5ZuvbaEuijoaLvm4SeSkmTWGz5A1du3uUxpp2QSg9Him",
  "key28": "4x9Pak5wG8B4FMLtFrn8RjkMivPdeeHS8zWiVbaXjR9VBsp3xmXvnoXWQNRVD6aVQ4c9PykJC6QQ4qdVR1x8VcYa",
  "key29": "2SufQxaxa3y58ZAFbNSoJuJWZRwYvXnWxrVDLhK96ZiePBub8nXqHMXJTsKMgMaE3JQt4Y3KaX99rrEk3E2AB19a",
  "key30": "UY5bHutm3L5j8uLhszFVRFPcMefYbHr1Z1oqJJyKcKWY8bK7TXfmRtgev8zbRtrGSEax5PMA8YEKxV5GoqDGTZS",
  "key31": "4rvxoceekESQH9PT1okv6CH6H3y4CHRJgFFr7MSPSz55TZwn4aRFVPjAFnaS7iNBPwX279snUeaeEENmxQkUunKZ",
  "key32": "5E3KKTudEe8Fh1sJSkGEL4i2JRVJSVZpUKunKVSt39nZBiSxGbKKvdb7yreDUkwPfWvSvA9kniya1aE9RZCUQU1f"
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
