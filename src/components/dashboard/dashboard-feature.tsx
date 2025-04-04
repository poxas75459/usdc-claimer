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
    "5hrxBqfYvuMi8mfBXQWmNSxhiSDyNF9pkfYhsTypi1bpR6NJszvan19WHLioGU6egkwPTBdFtLnoyok1r6knekuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tqeA2SqNcs6eo9ox4bSwYjzy4WugQj3UmK6hnzjMk4vfYMZ12v2HTFBhAKLrRQJ7oQ9dDr9PTn6L8EzYkfSh1WN",
  "key1": "JZufzeaJdP8rJbHzDnSNkMXZj3FUFbYcq9XFoawjuKTumbKd9TTTTBtfj6Agf23bmuEbMWSN3MyMz35cXFi9VDA",
  "key2": "4cezAedpL8tGax9PikPDf8AHssVYuGnfT9SQmDfqnjYpKBQBn4irNpoKZa5xeLRyA74eLBqS1VXd1scuTqhanxpR",
  "key3": "rxEhDeJ5YiqidCNzx8HPsya8omSh7c4JTtPY1dxosqxLCDdEkwcA8cYVHQqocZ9nRMRPvdr2VKgZxmuq72gLyY6",
  "key4": "4psM9Nn1R78YTmuv3hosxt4QurQ32y3deZGmWmkXAn7YpU5yYQdJ5SSB5Xbcg5ekkQPBFC8tsiwmVmmXRkGoWx1f",
  "key5": "FHwyPkNj7KS2cgBBZJ5N74UAkBxUh1Jm6nwKic5VV7Zxx39xhkPoCRTRmHUcBg4fNbGLuuvfjFupZufemoZSNPu",
  "key6": "2M3PLzJYy8Kca5tfNdwqCckWThjRJjjURdJFSmb23R3aGziNQSLBhqwD45X8QBhwdC7wjf1NdLXXv265LdKJMDr1",
  "key7": "44rtVndymyCqvxrnSkpkcrPJ7wUerzdPmFHhhUJZAL9yr7Xu9CcbYT346kQA48qydyVBJd55yribnPcJQV8q79pZ",
  "key8": "2m3NYgpCWEs5Nq6YuducFx4yyG1VkiF91m4MsDns7KG1T5eDHjtxhJmPUGTBKQGFhR13UjTVCdFG9aWFaCGkscmL",
  "key9": "3V6AFMsWAgKQoUcgqAPjuWXJHZmDbptmeqBsByf4PdgoySHToAkXGtead1rQYu24G3QLcATwZuuNBkBMTT9Pnzzx",
  "key10": "2nfjcNJg1h5rpp3YuLs7zZE4v9nkQTKTLfEMTsj44SeZyPGujjzszoD887hcnFvR41LJA9T7e6atMCf6cDVAUiBT",
  "key11": "aUzr9s75J2AFPm7oWT6ucgYVFLCer8EXGQCJJo2V2sfcnGwS6HnBk9wC4MuHVj1fRpXJdQh2vRwJycd8Mci7RPD",
  "key12": "4PN85WPpirfYdT2TMAJdX4jRYvn11R2TVvE8mEaUeNmpQH7TXcGuNEA5CsrsraSaLGj8eFZqqgwCjUecrvLHTsM",
  "key13": "5pv4EtJBUPCTweVnz2Ze42tEY1fZDsuZJVgVN9hs53FgwGveYMUKZdVEWS7z7chqLXLtpmDbdxVSWndcj915pQ15",
  "key14": "2jaK9ooWMysi1hyjiM6y5EhqEotVVRMTjP2hNxLhPDzwbaFPCuGd3fX8drH1TDdQKfMpfjAMexh54j42fpDzcHKf",
  "key15": "3i2hUWXgGQrvo3uoMvz5dJ7oyWMZUTX8VA9AYXzqG9BVEMoX4arTRewa8uZuojXQGgswJUQt3GZQYCbkEKSFw5BD",
  "key16": "2PTTFkD4WW3fGJT8UDQQoZtvLhSWjY3KRQVoWcW7zuTQu3wW9Kx5H2S1ZUaTT3w2K4rV6Df8ttH9m1RagdptfeeK",
  "key17": "3aXFDnw9e4X2rDzAQii5vvtoakvtkeKGYcNxzmAjKg2z1hSGjdghrq8kAf1wzg4sPJxycRyzfa6cfRcSDXC3JbWR",
  "key18": "4kBvK3MeybhTPX17JTqJokRCHZuDJuJuMFYG8fxNJoXQpjfpquv4st2LcWdvbUWFuLMcbvTyGKMJ6WSosWgUV6Uc",
  "key19": "4qrpgNaQkvGqmgiZu5jk3RdZJCocHLvwpbMMUkxeo7RRzJjcjAyeXVmczo4PibyWVZj3tAVinQxhJKkdtjf2JWYw",
  "key20": "5MBSvqCYCRfS1rUopKJX1LyW8YzYzoih6uRu9EvdUDmW4oNRxufNZEJRXubmSP8ETDdnUkULnF58fpbjufXkftnj",
  "key21": "PzNheQ9ALCYRzmVmVMiio6M8eeYsGJmDALtpR1QkNaJHyPCQNFcZbjFsHgfSruxW6GJtb9jm5ALs276LU3ZnT72",
  "key22": "2ZP7W9BSHbY6zEau7aVJAMTu3PhtCXoWR793LpP25D8zbCopg2177FjJC1Ctq6JPGKZ1MUUnKNFdBYq35rhtvCM5",
  "key23": "4RnN2PxVJi91SLVJEYL8WM12HWJsrjh2AWAjJfdrpp2neYr4riqYERUX9u1J9Qh8U5K6gYSHY8a7jp9AKKo474GA",
  "key24": "3vsmok7EAKHZ5PVQuqeqbDLjSD6qFcggMRYSmV1RmH2MvyiRo3srcnwZbegFziDaUDo8U4nTZWCmvATqbusjjF7s",
  "key25": "h6zzjwwBMkDz8oj6Tvf2bGmR94Nco8JaxEH2om9N8sK6GP1eMit4Bcij9rpjuk6mNG1KcZ12XbNWCog6F2qF4tM",
  "key26": "Kjz97kL4GdXRjRUBvgArSe6sw2HLCZwj9sqeXTkg5iNVfZcCMYANZR8kaxjufh9ckwopSVUX7eEm6Z65U3nVwnU",
  "key27": "Cf6B9c3PmG9DCTRx4wVGbeuPkNuENLRBVbyLmxbYinAkDY5xgLVVbPXGPq8y2Kuc7PEb4dbzp3Apa3TEs6Le4Dv",
  "key28": "63VDXa2R8LvXD3atCvdhcAUnzf5XCRo2REjT4Wmwokp1NLbaXYbq44ckitoPcUFc7Zm9TKgbvBbvkhmNr4m6yEZx",
  "key29": "2NVvZGY2qhfWNLtD4fQnpYsbUC3BD1LmeYoVCBwVmh87Mojc5HRpSmhJR42HD7rs2w2uWvWcEwsTkeMdn962gi2Q",
  "key30": "2KZyAytvQpfWanVBeZtcV9LG8sAwihfgA4M2p824Nhv9ARLfxxBfWGV2rvTVcER4xSrJc5hpJ1Uxkc644w5No6Vm",
  "key31": "5PtWLWYA8BvbxSvFYpHcnGFZWoh8XUXNSy7Brbifn9d4cmE7wVreFM9bVcG28ddxSxUBsrYvGeScKJ8nMQv243Sy"
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
