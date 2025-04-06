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
    "2PqeBM8W3iQ9MhLq4K8AMZt4ekXL8JeycYAKLSxn1sPTw9Q9eu4SQPYGEJw8pStDQnqjum8RBaG9USfDKMyHqTzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qj2eEdvuMKhZXwrc4ri5ue7e1ZLASESA8SXJ3sERYsgscRv1ES5kpwUbL4hp1rd3kbEP5JZGvNjvW3gFT5VoMeP",
  "key1": "54UFvRaU8RKV2HyWrpeVhUbSZ7cLyBPJEEmQv7ChZoFatyU1U6CXdSaZeeaCCvkv1hwdignP1JWiU6FcLt8ChwVL",
  "key2": "3ozkRZRWrjfVWLY22EULw8RkSE2S4Rd64fnf2SFgKVJNntV5tJEMJzcphhc1EgKzSe2rzboi43K2uyh3ZLzGWELf",
  "key3": "KW5E24CRrMJEVnQBXkezu6WFqivuPjkku64xfJZMUqWKt7tAXaZXP1yc1T7KbuBq2ZLeXbET9Y1h9wnsQHxFd3X",
  "key4": "3zuEzybu9VW3siua37TkQkY1EFFWP5uZHdjaDYd8BFNpTMwTryjtZ7Sw4PRXuVcWcAD9xrZ5jmerpXDxLZtbJZ5b",
  "key5": "51Cq5vTefj8Sx7yui4XdfrgjB9fKEmUmN5NdAET2vkPh7vPUPWmsCzuSVryLYxDM1czckjvKZhbeKK7Mh1Kh8LHY",
  "key6": "3KtmoqAqPLULsygy2cmxrqQzAU3uUBToYoY3oKCKh9pSxLV2zWYGJpVRQCXsLHADkTuC7yUb5w7A48nE8UyweVPg",
  "key7": "4FiL9FpN9Q8nUduqHca5sTybshK9rYLEu8NnLDLLo12MTYaPbrXhm6XEZ8mDUZVCJ9wApfioSDneNyeU1oCEsKPf",
  "key8": "2DMRnC3VsZnb2HZBLwpihHbHFXsfH9t8SreMgLzKMAHsLdu728kNtniUKfXCQuzKp2XwyDZXkhjsykWx8f1DX5VX",
  "key9": "5oP6Vnf6WU38kzLGFFCAG2RtjSZf8s57Y9iwsTVQo7kfnyv3U894rrHVbHFinrEzmgjdAVoQBej364i2aaBPac8u",
  "key10": "xjuY1HS8CbDm9RmcVRRkrdM3W8J3AUNq6mBaNJdhem2CK1uWDazL42hWLvwsq3o3BwcCaY2TD7TP3kHfUGGzLjg",
  "key11": "2VCrgyh1wTWMDoB5d3pwxYy8HaRVLgWtgRfYPb5HM6Pmg49PQXWn1WEg2iBiRh7BNzgc2NbNVXoxMwBgfPCe2siR",
  "key12": "LMyQbNN4ncFfjzttURTzLUFPP2LmBchohUmbUcbehGCoGL2oWjQEWTQQCFdWppZxqXW65AssAbYZjp2D1aNLQgS",
  "key13": "3CpUy6cmbzWCei6VC6k964VRSRwHAQjvFifDSmiRoWCWNqrnzkdiRcoeUVtVP2jMTtmuTqJX9oBm4ibTQ6nyFEGB",
  "key14": "2HvEsPfE1UgvkNYmeDiY2PkfSsGCrjAcrfodZcfbeqjnwGvMd23KjSh6xpaBErB1rxaPGKtBvNhTug4RurRtpzSD",
  "key15": "CyCR9sGHjpWUHsuKQfTTjUeM8Lx4BpaJtgcXRYmENox7SNZMK7wt75fyJ6peQX9fF16eyUeuCdmLgNZS5VeNXXQ",
  "key16": "2CJm6w87RawwCYbXEdH7hMMMuq2tQ7QyurtvB7KX6FKu1EaWPSg8Evi62XfL3Zfxg4zWYpUQuMhXYTxZJDb6JJo5",
  "key17": "51ZSvyxJgZynWEKR619U1tyKXtAkHGdCUCGmCvva8HGf37MnitCW62g4i51b1YjdAfcboTXVeex9ACVoM7cmdbpf",
  "key18": "3KWinivMTqeWNBe7heCj8HRhXJpysVsay91pg3yfgsgujYetPXb7uY9XggudZXtT3EwQpMdcSNTimgNHqy2bgHyM",
  "key19": "3Gu6urdortp7fr7A2jip2cVugiTJcDFUtBCWvicQQ38CVKhmhX816ahkcWrQw3bNocu3VBCef7BcayxG54UYmvaW",
  "key20": "nif4sT4YPh1Bfds1Jq8fGKbDEwmE1iWha1VTvPA9jVEoDbXyyEXUhizr3t71SnnzNdeGJcU9mgJER3TVDRy6QFi",
  "key21": "2J8KSYWryGbs2VFabVoa2b2SSamR52DYngBfsHdjez3mZADmGRRJaDKmiBWvUf31LdTtnVHapezmXfvrEeutNBEP",
  "key22": "2ozJFdPBvQYG6p92KCYaPccwgFkvNSdRUtase981UMfW4tThtsxhsod7eLZb7y8Do5ak8dUtNe5p7X9pNvgRCuLf",
  "key23": "4Jcey3XHJmNbbTeRcp8v5G2XT2jvbHDZzkZUyAsWj9prsVcPhfiTEEHGSf3ErCWfozMEgS8679KnJeU5d5yYnBZC",
  "key24": "5q3Mikn2BCMjnRBkGAEn1ySeHnx5wStA5Lhdh3MfpAjxp7tbtJTQa4afHT4bGvRNP9ENsGcsjBGZ6RsTRhk9WJbG",
  "key25": "2bZC7AHUwon5UgT3oYZbA8ZM6tdn9XVU25kLqekhwyQ14Fp9oQoAgQryvqoGzsgZRExDeQeYDiRJfav7Z6siBSxd",
  "key26": "5F3tZmUnJiovDntqjhFNjvsaKwoAYB9TLVEGEL5zzHLdiHBw6TaJfjdDi2AXdzpFE34wsJfcgkmbU2aYUsUrigW7",
  "key27": "4AZocbGitC7oiSHBvmUktRb8VnnvWiSbA7YMP8x6RSgUV61F5NkLszB8HT5FZgptHps3AXzaGmDXbXeEh4hWUgXz",
  "key28": "2xjW13tiBeP8gBCAec7ZwWDyMonEjMpoELDzTXB3VXBQRjvT6pPcdDVPYdzbozuUktEi8riuHHorduaxQNitK7wC",
  "key29": "4HGJTBPxe97aT4C6eXW856JVqFdJZnHB3fCDAomUQq1qCFrhU3a7Q8gnWU3UVTwDvPfpsjRHpY3higjMkxSzhDkZ",
  "key30": "61KX4jG7tFM78vzgrVcY3oSQMYVeVQXQESf9xwZwKPHXiHtGgRMD1wPWaudg1mjDjfEeRtELnbg3atiJTyWfABig",
  "key31": "4YxzVpNnNrEWvbNMsKhPAiWco7k8znWwoyiMbS6PQLG2n5bzk9b8me9d1xH8ZsDtRgxYjwTn7pjxHnw2U9qQ44wc",
  "key32": "63aSHoSajzj5THf7HPxMAmiXB6cigZMLEQ3MoNofCJyQp9svALDNNcinCRJX8gmPGHudTnvB2VMfrVocU82zZdkU"
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
