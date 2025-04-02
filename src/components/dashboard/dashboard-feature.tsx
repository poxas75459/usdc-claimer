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
    "4WfsqzzM2UxWSLRo9VJyHLqpRfJ7PWAadJPiPeCxPCTVviJao2yvPqtVE3JotBeLwndS7QNwAvjEs2WyVKb9cJS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YGUc6SM8mrrhRaMXaVj1kp6QxtQUn1idKi6VvPyiPBNZgKcXLMFMbmi6dJPVSptkPBsHSXRQ8THk7FhhBcFokUR",
  "key1": "5AQ952Ae24z2EJbrPLiegwntqfzarSbeyQAhFzALt6qhD3Dk8stmvKpuTJAJevRQGPHXREuLWCTM4tJ53DNHnWaq",
  "key2": "3BSXqYpUnDkm21DJeDQLMKi64HShwKJLou2tvff7cxCPVrkR3pqmzXtfJdVGb6E7JNM8iNnthRSf1vBekqudycrT",
  "key3": "3z6TXhk3NMwjEzSUQhFoaNkzZuin2awgNGkwqeN2KQZRya7aCCE9a2sHBRQAcphWVxmQ4xm8NFdkkZXMd4cHay7z",
  "key4": "DB7oTSdCaE3pZp98JuLJ9KzNR3hdczHpHF8sfhfFvrUe8ivFezjrmQwHzWxuaRkQ95yrWSenj8JAjyHVcQm5CRk",
  "key5": "4Gg5NhZn5MUpqyMkHUz5k7VRCZqvwnBftBhW9H3J7ESt7LxGtWuU61GmCBUFtn1ziTnm82Sy3aTxhMVxDNxczP19",
  "key6": "3FY4JaJEQzhtXPSmn9smoUikqUrszWjWTYEFNL8aTaK3LspwLAYi9HLRJbW4rXwhtDaYgaGjMLCMKWw46PFPQgHk",
  "key7": "3bNwcyEZe8PJarMjwYVFV4i8HCaBvrMZXpZXagyoqaSztcHdyCf6SCWCwu3xrXN6xjxCUJGetXtpHXXQgu9PLR94",
  "key8": "crGJ6nQsfNaLAWLw4zGC6B6PVJS5JfFx5Aqg6k9AJc7NVeFexqqw5AxaL4UUXTUY6i3MzMvion4Qq2A1NTJgyEt",
  "key9": "4FtpauvkKqQBSdeBv1qsaSXXrCKst7SikrgjAYDfAor1StNCpCoZxPFxgKwDgW5yjRkBBC84GqQFus5M4uC855SZ",
  "key10": "2E6TZAFptJ5ZWCwS8UtiaJMJ93XqCYRg1SQbVZGmobFLadVP7GxyBBrcYgToR4N8ZdjSFX5Rrv9xk1HSpupeRVgD",
  "key11": "63BnXsBExLVUnkredBagCK1Y4XFWccarXEyXV2jq4baS3GrRZih5VmKRj2KdFEFvUvDPbm1XKM7EnJqTGMDHH6Ae",
  "key12": "2MAWu6JN5sSvjqmsEteoxksCNFpn52hoNnXCsU6JNChV5ew7xTgHyRnxEJsA3ko5GNDymhGqLXBp4Rjzpe4x1rFR",
  "key13": "tuCjKGaUQ8agp9wKLtdP911rc5Cj777VrdkBaDySVCT47gmupvyxYfi4anhBR9gQXxLyWtMWzYksveJQRwGimFH",
  "key14": "4Yv3rsHaPmkayLSiBz87KczhjnrpZW4SCxerhdLTbmhAA5FCuAzZ5vnhbdZdmxcmHviqcwsnrsh9qvfMXGVbu6nx",
  "key15": "3rPJ225L9ggvGUQUxWZkzCpVDwGJp36T4YoJqhuNbdjiBcHUqnu7SVY8LszL3NQ9djzP7mzwR1Z8mrucaDKknjwa",
  "key16": "54DCTvYZ5KmvurHcMh8NoZ69Jvs8PpPAZyapSrFhbFAgwwbgRp1bXoBZsmSGKjm54rUUsQi8jLEarQSRz9T5A7x",
  "key17": "5VAyX3UMehricg4W72T8Kw97u85YKgjKWn9fVxwiv74auzriAN4ANh6YsyjvSasMWuapyH3TCaVgomBPHMTqobq8",
  "key18": "49wb6zDKKxY9xxxXwMF1ifxygAkEYkDqyZQtpP32ajP2WSjK6yYpCuYbZqpbT41PihTJZTeQ4L6LdrPDjMX1A3Wi",
  "key19": "2HkTXqm7jCGQtX4tvNDTADk4JPUSuau29M9JwA2VT3V115KyPZpdAsA79JvagasZJDLZLhcUxv1MJop7vH8m8wWs",
  "key20": "223qXeAauW6jX98s3VUS4xrcWLXxTThAfFvqTPQrfp22XxNqbTFfcpFNR6LSeSuSLYkYj3FvZVGLjLDTpajZ1xnV",
  "key21": "3avi6kXjYfxSKtZ637HnaHokXXH3ZuGEySk69nAYY5u3FZrth23RZbezPv64FBvfkhW7MatPdz2XG4VyW3kny3dB",
  "key22": "5oUAad5FKQpKdHCXs7UGNWJ3V1df7115YpVys5gWtZQVtfaYBf8byVgjSB7LzjNE7JZDnNdGmPr65wnQBUk7JEnc",
  "key23": "oYQtEriPqa6nzYWNZLgup7qfNPpqN7ApAC5dWgfbrGEGB1SDzbZaXhUiT5soWvpsDk7d8R8363m3THNmhVyeZ2a",
  "key24": "5rt7WRZHerfu8TheWK7bL7dHUi4eWqJ4m3rVEUXcYb5qujh5vh82woZdpV88Jp9Q1BPkRwxtkMZTVK8F2KuZir6L",
  "key25": "C4aL9r91B4BZMMqM8ZyzK4Hu5xMtWYaFkYJHkCTT2kHYMEqy72psTczZuTN4RBTp5EYpvPta8FT3ZC1qC8o3v8A",
  "key26": "34b4MdoWneZgS8HhXo6DwE9apUYaN57XfuA2NFQpeAXQFZWfizXiWGjaY78BGunkVRGSCcRxNrjnSVHuAsN9VFAx",
  "key27": "31113Xx26cJXW2veWCaqvT3nyZo3WWnsLHPnAtyqVVFg5J9gdG3pw8XF86Afo1XFYo1vHRWLAiVUsj41kGnfga6K",
  "key28": "3pv1dEt8XZNQc6NTEVo7sRF1TD5yRcLyiKchnLgkSqK4YAZabVESKNjJAUnDM2rkL5md9KydMnGDcerLBqPAnGc2",
  "key29": "48rupeHfYssEh2yEXR7dJezwebVN8XkULoZQXiGZEYdPbgoWZVSWwGDKQrcFyLLAFLD6s13PhwpUMt9V7xiyPmJp",
  "key30": "31v8CoBpEZU4h4hvqRnfTm4QrF5vkUQLE4fGkEc4uY1jmWHHMA788GaYuM5N8QphmMXHSnjZWJFAYMuGJQTNQXdt",
  "key31": "2QRGsgv4Yi4HxEhsvUQ433ck766d9ev8W5ALRZv7GppVDT3yMjJoApRzYf46xuWg3F9ihxENcGeBUu92rriaKJyS",
  "key32": "5PVQC4xHrcb7RdZKQBXnQMX3AQ7U41U9kWDHpSJyk9dgzfW9foYxAu6BhTVgJfCu6k9RPPRxsrbnYQPJt44CA4pr",
  "key33": "emaNrZuK7pgvrxJTDG4VCdtfTzFymaGSTztaaHsinWnykE8mGuTXGPbd98LYw77rvuBF3dWQjE6XRBk8gcnf37C",
  "key34": "oqVsk2wyWqxkhXVtDUpWJgYinrG1EgrGgBzEzPNhq6XAfq4zzgpUqZnZCFvdMPZLUXiXY73MpEDL7vWBKNiH9ez",
  "key35": "5ejWwjTiJyuCrZ6b9gEeNPg7dm537umjjA7G9TdiPtSueV6bwiBxk6t9ehAsUZcepX6uUhynPbURWFzFC6yZzRov",
  "key36": "499iCxRXb1viShCrvFhzwLrSpkcpRLy1Nz4LoBhCSgTm9GBUG9wrDam8NgKtvCovHKvh5LgjV8HJ7Dar6UMPAtZj",
  "key37": "4GgKGmZbC5XZScCcrE78BcHVsXz1ATBrmDUnW877zp6xCH49e7L1LthroqUsk7rVD2Df1tJfX9NPcLNr7QFtMNCy",
  "key38": "AWJzARbyYoMpQHqnZazrwjhufCPYteHgqzJqZtDhSmwAHUgWgovAn3CXdYQjk2QpL4GbizbnEHmvqq16zVp5QPF",
  "key39": "2h5fhvNcAcAHoF99kYQCc7QzapfxvSUP79YebqLK5PHaBNZ6eWfSCmuRF1RGJzkRoHtNSLrqgnm1z92hXvTw5qTf"
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
