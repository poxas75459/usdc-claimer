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
    "4Bqhvznk24FWVBbDooNGWwgkqR5APZ4NtK39d3gyNiePCAxAsZWJJqtUstR6KWS52XzBwJBc11qZid3bF3rZZr2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QyYcvvnd6tE271E4QyHYFR2EF7Eu3jKk8jHHAmTi48dk7SgjQ4k42ztCqjcSKvKQXaUW5uPQKVW5t8mgAPspqAg",
  "key1": "5tEUy5rdEWtbymHE9SaEsQiG1TjkDnS7S3hokZLwonwv2QAtZjo14qBhjnnXzHeuSvwD8b821RpJSEjvS98nw8aL",
  "key2": "2cpwtr4d41v3sA5PZwEU6C5vaQyX3TFpiZQ3buduhH3uxr8p5qvCCmhH3UG39mswWpD2KdpiAD9EcJkb3PAiPNEZ",
  "key3": "3ELDfQ7HRywsNwGkjyGzeRufkijECeS2ru7oA8Z4qDFeiBGaY3wdnu5Dt6KLDXRNAXcY5fv2aeztZKKhDxqKKs4A",
  "key4": "5v5LEKv11FJnnaXk7DwH5jxJmnAtr71ezEUQmevDYvr82feCNpzETersYoWkzr6Ne8SYE4xSRCKEEuaGcm9wX8R5",
  "key5": "N7DkXzMCnbL44UJtVGtNeYNMA6Wv7GZNUJUCnuJtDrEcMHRGajHwnzmURvbDrrSFFv64RPhGmJA1fuwJaFLZG48",
  "key6": "3dE1BkBGeyyCoMTBoDMNoLXPwJDtfi5XqLG5s3WJQTFrQcGQBVcX4HSpAg1rDHmR9CXsjaAmNMSWAUn2W6chCr8n",
  "key7": "3h9WHmRZBh1zHMv6MdYxAFyVL8rRumw3C5rzkVsXs1Yf8PDFL5H1pxr8RT3vhKrBncWLNphUcNsF8wPerAN9PdEr",
  "key8": "Zg4DKQHiAFpVYxpQqEYWwga3BQEgzRpwfngwsf173jgf44e5Y8s7W9mp6G6c2ZRL25J7hHA8Jfqr5VFH8ZNepig",
  "key9": "3ETQ9WtPTjvz2kRyZSYKCXoA6xH9Upu33PuTcAY1t1RcKmmLktEQzLqWcs8Pdp9rf3cEfCJ2VPxRc5ZsXpzzPUEe",
  "key10": "2fUXxQwf1Rpb1NsGbABaWr8mGpA23L4PjeCQ5TeNipNwFBdZPkrjnBmBKN1vdqgxkjv2BKJzyVzuRyqbvaRnU7s2",
  "key11": "2mjXKMdcohbcDjeEFJD1QgVCPjH9ddzge63U9PpopjBd7o3gHVE4T7NTxYpkDKN3Q9vYZ1jkhg9TP5PMoV9daQSj",
  "key12": "ZVsUx9g58oB7pAdJxQULsTScP4qYvwQgQ5r5UWtBTXUCVakvzE4n8M119i2pzjuUvQ4rUhqGVgm6gVoxYD2weAf",
  "key13": "44FLRcya9hCkth9jR3jm2rUSvrJ8RnPKqtiM4isUfPStBiA9MCgYsiuufZCrBpjSRPmuzZXqyvhggADEiHR1tPTE",
  "key14": "5pYNCPHPBfBnKmmxAC6aGSKqWYtnfeCfo2k7V4ViRXS5hqZ9BVUBBARx7s6iFhXS87gbALUpacSUa8qFxtB15zV9",
  "key15": "3xvP4KVvuB1FuwmmGuPSfgCLaHqcE9cfJSWWvDNBcLkEtVynYkaHtMCY6a3R6QW3nWSdUDY29svufCm2NAmFtF5z",
  "key16": "4cAankq4JPhuAMBE2As6v3HhQ6tksSATzgEhFUEG3BuY6gdsbpDWUeDK5dRC8FRMmBdebe66a71r7GtqPB9XNSgq",
  "key17": "3UpWKyPUxvQSaF3jWDkaUGveDvXqynxNQfoECe29pfs73XKEaNBVYYpTbciPqafi7TSkVLdeV9BytAgjcUBLntyF",
  "key18": "2GodLkDD8gntr8ujgEGcin98XXAaqbKce7FUyJuaJZRTKSbaMoVfYfD1X43LYVpvnipKNZJxf66zwKGJGkb1aoUB",
  "key19": "2pcH65RvuH2tpRGJ2eKf67xnF2YvnikH5yRrymQn3HxpdVMdBbuF3yEMVzeX6gomEDDbxZBfqcimcncyScP1meWi",
  "key20": "5JxgABjSRiNpwViBPk6p9NidAX7QbsQx2i5PHdZG98SyCSq5uxcwHTGUZBC1ee7WwDjxnfz3rEKjfUAxdSJpyA4d",
  "key21": "aAoQJpbRgxMKDa1YsbKBuixM25oW6sYqN43yABRdhqrjiBtDTydZN7XfTJhmkheD252MX1pUyzA1X9RFLfQFY4u",
  "key22": "3QRxPZxY4QepscYqpyiHepf23VRdxbv6rXD2b6h9E6Bp6igsMePBkjdTEL7ggMpzi8y4gQL6uCrrfSeQD6ZH8FUv",
  "key23": "2gNCGjQUHXhtrNRjggYY8E88x7473JSqiVNzPPkF5zNpXfiukrKACAXvd5sFs98FumRtBLy2fhfGyFU1hd6oTbAt",
  "key24": "475M1jsAYuHQqX1ptY5tWDM3FnGjpuQV8N4G96TYpNx91d6iXzE6iY1iwXURNVGia7aG97XsA92iMpdZ6rezPAo8",
  "key25": "5U6fWVJzKfVBSBYFpftEyfQc4tWp6fnaoXPgYCT1vQNVCYMCnDLEVDHWNgJzcK47NU9W3eKQvm1acgDWrjkUUYac",
  "key26": "mFfJN1ASQMyQnC2TzAcw8mHBzKKwn2nf7WueMySeehtDNKGKKKZf78c1dWtzGVGRVuCuc3caMbyBHruSEoyfD52",
  "key27": "4Hn1gxyfs54MyVELW2avKRTQuxH3aecBvG2T4caVSdeyDdEYyk27gBZoYCKAXGqNzJP5ksi7oD8gLAdvACFbnvB6",
  "key28": "26ZnaZ1MQLdv8uZp93Td8aEzGP8uW9dDz2JJaqEArbte1pWZ4RutNpkqTX6o3KasUBYkHvRKfxhk2XQKKvLKFpPv",
  "key29": "4r5J96siWZh6shmVHKhVgXRBft1uVw4Huy5wZkNAxYqMy2bgj3ae8gvQQzwrwk89STWkwNa3GxH32S2f5yPEbwJv",
  "key30": "4sRp7xAcaKu7C9btQ6Q8jNqnmvE6WxtkZT6ZmbSHTfm5n2KfDN83qvdZx1JtkZEwU2aVSVzRxeh7nxW91MdBSVZP",
  "key31": "2EUXGLPvRDSuy9RXDLFWtx1ygETu6StfguxdfFuik3QJPbjZzkqVRqu5ofw1n6NpGt1k124oDnfq888fP8usENDs",
  "key32": "5iaKAjJZxJqG2CBw2rwTZPfeAheCBF9x6ZiAbusEC3GcgFAAb4Siusd1aaNX658sEm8YD32G1qNepT66hMq8QXEm",
  "key33": "4UWuGNj1phkTqtfyTZTuh9LkdNsBVp2kKwmuhuTcW2x7yMFzpad5YpR6HJHkHiUK5Ee2QPo6oq93bL3TXexM9xc2",
  "key34": "3Nm8VBn2XidArRxsw4UQ2jvMYPqqgUcZgtLiiqsnn6R65nyCyoWST8jyj49Q3ezGGTqbU1bfb39JuU8ht3vi9eSb",
  "key35": "2MThiVPSLqDTpVNE5ccDLTnkUwajKsRAz7hFWMK3HXRJWGapE65tbeFPwFrnuTHMpeW7xTZfwGgEc7RrRRjnUwFH",
  "key36": "5zZmKGkReULi9QuT2jEaAf5mFDXt9XDDnvMct6Un4rVnhJRThzbnuZ3seEQLjQaetCubxE7Mc9NRBNzMWKx8eVS4",
  "key37": "4nSj7FWHEmFXfii6nABzPBiSK8Ej96P9R9uX9Q8iTn6jyeaQVAaYSCxbDnseoioZurkzT7ri916Kca2xdKMXPfCs",
  "key38": "3gD81ryrBrkf8dCjsrNwmWUw5ZMRpfcfv6EasnrZ3vbaATts1MCEKtQVp71z7mzGVEk1eMieZyxnGbytULthsaGi",
  "key39": "56f3gajgBp4HsyJurav33hQ9rmcprxvCDcpw8a35jPLogGRkS4n4pYPptKEyxMoMmsqKm7fUuJqj9bUdio3R4K4G",
  "key40": "4Wp6KWCzxk7DmhVRcAoQMoe7Vkd7AQarz9eFFL2ZKkYSux2TgdpComLYZJEdhStTNj67c6wo2w8A7282Yw6SBXwg",
  "key41": "2EhFo6DLZd7ZMGq5zGHzEFdvTXnhc4yu5vf9pRvMLXroEtWsQ4GMN79iztC7hxH5KRJoE5xi5b6VLqwtCmXeZrtz"
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
