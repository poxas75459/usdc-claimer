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
    "d33T5zyQNbsH5GqBu98JtyyqgSVfBQ23S4TYpaKL4QeJnAnRJQnQ4nMdMa7psM8ZC1Cv5oggB4wVhUguYCMFswk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TLbA9zuredsGuWY18FYS8uSS9SAJ1sZLyu9QsPA4HTQ7EgfWW42tiUHrS61y9mSoSAxBbDWdFBiK37PWCXaBcwy",
  "key1": "2Joc6xgSo6Mckoa2d42afrVPoby12MGyu71YZF8JPaVVcGFbP4kP1wrmjRnz2JYkX3YcEngfY2YV7uQsLSPYxFSh",
  "key2": "4REATFVmy9sXxiE6vK97ZK2EcQxfvXgua9mjE7mKRN2yavgMVu7UtMYdbwztVoxG6rLYTjqtwUM3qASMG1nm6ivi",
  "key3": "3SZST3En76S7M6dxVjj4k268YDFKJQPRWFwsmcEbSxZYBJuKfwU3pNGWdbSDDBCrpRxuTa1gaUDkNfWRYJBNztkp",
  "key4": "5kxZxkTaGZhEC8wqipDDRceCjRhzsZv5yHFpGNanyxCeVug7RY9xKy8h4eZxr6EvFDsgwnasEZNZuP8exf2oQJz5",
  "key5": "2bHmNjHwEDXkRW1ziFK42cW1pL5hCTe2uedzGksAr6EHDRhGedGYbfU3cnHVif8gCBwdZHi5NtS4s6rjbNbxP9fs",
  "key6": "4YqQvauaqcVi5tirDcPwg9sscsGEHB4231gsBf2SAPqqqBaBoQ8WoJe128ZQDDjYwqKB7ennahZsBL9BP1UBcp1V",
  "key7": "3dNr9cDmUqDagWJsuobsyaYANrCTDcARuc1EBccbqpEBi8bF2Vay2Fib9X1q2XnuSvXth5P7mCz8DKQTT4ppoV8p",
  "key8": "65dJRpEFdDeBKgMTtmsrkRLk7kyZHqHLAxxBMTqpjuvUMSURQ6pgNsELvuQatLtZzTvmcCrofw6meXYavwy1H22F",
  "key9": "3vXAsweVKoMmQqscVVsEW6ToybWp1k3ZqC3pDiasdPztsw7Y3bwVrHVrFxd4f5pmovN2QNF4ep7hEV9xW9VqudFE",
  "key10": "3puxUs4FiduDZxya3CfnxWefxWwhrxgWDgYcrBiCPEeVYUh1nDo2s6f7qW3YQ3H4NaLEE3Pt7oE737DmYgfL1om8",
  "key11": "5X6rxvJj4PZewQ9cD6nLdqRmQca8vRiCTt41dCWGJcRmrTV4shbmE4z4PkSxoB2kXvsgemT2ton78XPHGyjaMzZH",
  "key12": "3zFVdMfBQy9eCJ68inK5qai8QahNHSpc1tSbNPJCbbQo6CctZyEMWh26UTdtHAGNXMBkfyTn7CDzoqjMW9CXM338",
  "key13": "5RsYXRbbaEtH8KchAZdmWwdESAAD4WoPU8TvxFRTWHVb1NhmSbM2fDhJzm3wok38jBAs6sfvUybZcBKXE9WPuPdz",
  "key14": "3jG5u4NyKKAbXFkevFUisk9aiF2KhrRtwadtq7oit21c77MQfwBiERKE2QmWwQmX8upuGCeDC3Re3p9trLnoQEaa",
  "key15": "5ATzB66bydWyJkmne9oujeqt7s2z6y7qeEPMkzbNGiGn6SMUmFW7eFwd74zNF27cRGMr96NcD3oba5bogh8oJJBJ",
  "key16": "3gxHBF3mzNhfvkns1NchUENYDkH8mEPtmHTovrEBZHbCvYCJPzLHXH2vruawxtu7DBUEoo7eTZrWeTZAyMV2oVBc",
  "key17": "5vMHWzQHzCMkY87pDNwXkzrsnjvPVxbiwuvt1SEp3CyNPQt7XPZNgtGhAtA3N1yT5VS4bU9vD63UTaVWxQGHZhXn",
  "key18": "5bQxB2b5vmtHo4tVZVK6oVF57a4HeQpVK3pwnCHLPDttqdJMbfAWppXMX46ArSqDxwyakApzW8e4fE1TPq7iWdU6",
  "key19": "2HSZeVNut468W5QjqZyrLpgtSTVZcEQK3spegA8RDguKGDn1vDuaZe4GWz6k48iu8NvF7kRE5H9aRAekXKq6gSid",
  "key20": "TfLTAqq6ptfoRmvwNa9aKgX15W2NRRdKCNymCQerSmvYrBcBS93HZog2oAmPzmuiJA1PxUwxkkDm6FUx44UgBJL",
  "key21": "3S1hgSqPAqK5NVeLDJ7S9X3gQKd7hjYfen5EjwjkRTnNWCFcAD54kc1K1EEfaYXATP21gLyrcC3ckX6WnJpj4zhx",
  "key22": "5ukwuCQu75y3XfrTJGqK5iqRAH84APLtUzGSETQMkyuTKVS8b5w1fTqqNcf636yUxWstVLePpg9iZq5v2e3EBJLC",
  "key23": "GCYshizGG2zUGgJxEi6sjRc7wmtrkNrShDDKNPpZrpiRup6LtJrwmYDgzXqBQzkvzFw9VU8sWza5WATwrV4m9FH",
  "key24": "4LP1Sat63oeNw4TG5pDDFi8kEX1MSbnaous4zfKopZ62mRz4HsSUQDjJ9fdher7TWZ49X43a9ziGdxuG7pDDBtz9",
  "key25": "34QtFvFEDNFjp95M34KZ2zvkC2CskPacaevyvCY9zmmacG5omywfDwnRuynWNyzwNYjb3WWgYXUr4bT2wewLNsqr",
  "key26": "2zdDBLukp4FcXs1kATKo9bgKBoaN94GoP31yGKd8EEzY4kF3icVk3KKqf3s2WJtWm4K2HjafzGNCEWSxhiCgFsFJ",
  "key27": "2u9LE5uERjgzv2K3aNY9gT4HTxbXHpXjcZGAdb2vyb3W9tkAMZNn1qDdvxA3hTxbizfBhFcFzSvDAqRvvLcMtmRZ",
  "key28": "3QpmNwqj9gmyX58sz3yS6WTSVhgeHQEFULGfeGrNzvw9EP99kgMwdxdioit3J3GEbejAGTrbbNNHYoHNL46p8v5E",
  "key29": "3mDMYFpcZcTgsqRafDEot8H3vKZbb36qRq7A3frz9yNua91nVxoQDRg88KkAm72MM3ZddQhoViqARpjjGqoXds57",
  "key30": "5tBb5QxFotLZJdMmrzN3jnq3Pk2thGF66ugGP5YJNMrt6NKRQ7dzJg4CF8nC4XnFc89Fw69hHokVNRiduKiogdLF",
  "key31": "35sZexGVNVYQ2vLeyZaMJLCi5evf9VkxU9ff3yPmana6HV55YKcFaQpsaP9sZcjbawJbWQfLshNEChcz2VvSHkkE",
  "key32": "41R4x5FSW74tsXWEScBWvVirjr5ArpUV9qkk92KhuMWaZLMaYaWVF6EAqBYfZ6puGGdpz3eCWSfZaU9Vf1GUnPDb",
  "key33": "2sgjtym4pskBcCvLvxBpabjajwn6vsvVJN2RbxnwrHnXaMrKEmFFPs1QoPCuSjAS2k7R7iCMYLxugQuyNzpc7Jmm",
  "key34": "4FdqX3QW734gex2MuWN83BsG79tBSrCRyDX88froyVB4KfPPRSF3orhcxyYSBTgi8t4EHKFW1hQN1stnxDpQ1bTe",
  "key35": "5LEaPFyvR5VCkQ1UQXE7VbYBHu9SPgbX5Hrt4bh4J7GWXWksEgsbtFc4JZuigjKiuVTBddNeY2mWYVpexiETUuJa",
  "key36": "5GP1P75rpvpgcw3PR6ttqJKFAYpwE4zU8gG6TbJMGKqH9RcASkrmkg5c8WmA14pKAZeEXXizmoMgSRRkyJysz2qh",
  "key37": "5iZXvGiCKUS5ePY2woyEGE8uiYcL8Wbc87vgdzvt8yPUvj6mLNYe17Bfm46ac4WGH7LAj5spvB9EZcUEyugoh7ik"
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
