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
    "2P7zrTsgfEWu69qj9yXTgjetS2KtbrFrK2xNWHyAjLedzysAq9YJDk7v8c7XM8tkrhrw8iMQXETCvvkZHouy9eYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uKmGtNQXHfcp7Ho21KJs5XifQ58fVMsaugNf6RvQ2BjwG6G6FwZZk6LF1ic3LeuYhrdMrdLTF6zmVB5LaXKe1U9",
  "key1": "43ivksobsmrrTkRqSpDCfkPch5an3X7YrF8J8fTNmGs13uVEGdGSAVmmTnJ298Z5BhMbnjWW3fpaJ7pHWxFa45Qt",
  "key2": "pdEfBu3nbQKhqA3dgtjXCDrqjwhdMagAt3T1sVer1wMsmTDeTgZEEyXN5ssmoMwW5GxM85XVzxihDVcUhCyBRSg",
  "key3": "4fGnJH2Rwcrafe4D8vourgjssL9yYXiTGb8MFX9aqfd5qq1kNWRAaq6jvH7M9TQREgVAZ9QvgGZVpkRMSQ4yddrw",
  "key4": "229f3bTn6j2a3JKgWRgDXpUdppfdMF37NaMqz6ZPKhH3fBPG9oaXahBbYsBRbL9NBnykEcVjT9g9boh72FJyXcbz",
  "key5": "4fj8UjAyaprnfg68mCCvimTGw6i6UseWLJtnfqtvZm5tkQAv9Vak5UR353g799G7wc5XGE4ocrVJCL6VcNHL8J7P",
  "key6": "3ZArJJPTKGgh8BWxoVLMWyMpX1SAy349RtRFd4x7W63sG9ytxDdkPZcVxptG5N4RrKZR53t2ckxTRHvd9jJy6tXN",
  "key7": "4TfHLmzXPXVAsgFpaSWPsaTE8RgXQiWgAGBhiuyBscK7cPVeT93jcXtDXzwfoB64T1udYdMB999vyqRkSi6rDTSk",
  "key8": "2U7Byn1gpUjHFiwvCsCjMw2CHE1pQn1sAjSsnY6t1WGLydhEwtZhABX86YiqupGs2FJUYB8ji3T5oydwky32g2bT",
  "key9": "2DwihKSb7MomLxhj4j9i9qSoakVonWtQPTDJgKALkUBxLECDxrZ66K9rAe9zPdtqowDFbFSHjPucP3K1uQqAWpSW",
  "key10": "4sB1xKHz9L2aMWiL36UTWNwyVTtCawYnFMR7QcmV2fhhSifGHFCUu2Dd5oLycEpeF7meVuaknfkXHfi3J1VnAHG2",
  "key11": "1UNm23rj3cq8qPVFsA7J6SLqYMSZpc65qh8H6ava4ehxtyqDeHnP9yyTkq9hBhocS1h5YciFST1q5aj7HZmBkJK",
  "key12": "51abJwArQYnGimAtq91DtFnViWeTkVVo194SzLJ5oMDj12gPctKbAtTxi5jeanPRSbD95P3W6SKoQUNbdZoegW6e",
  "key13": "2GEz9vy7o7purRdEZFPwYuuFP6g86oxJAESrpXCHx2rx6FsVhxW4vbqfxzYuKSi3RsoR9bXJdW9qYZdx487FborU",
  "key14": "4rAEKAS4Dz4Q4D5jH7GsesWyFHhTSgZutx5BaUmiVJpx4WJBugUWfeuj2wZj69jcs3mFz1MYTqqW4Q7sgPBTbUij",
  "key15": "fpDTqGKVCq5UkGCtXt5rsFq3r8GiGUjWP3KrT2ZnGDQfyAusWsyqfdncu4DtjzHrj2DcC3xugqf6JKmjzLDSV8b",
  "key16": "2cja79TrXDNvytU9gKrJNjCcjtHXgUiVY5JNLp7o9EPQtX9yXsX2xavMwhAv6LinC7PQQGFs7d83GY5T9NJAwMaV",
  "key17": "5LrtQvuSfq1NsKtGkQyUk3saBfinr3UDxifLU1qPgSWc4vbfR2dFHV4Nj4gM51XsEU59UoHLpoouHxWRW8rrMdyu",
  "key18": "5qQ2wizitovPbYTJT1WKuURf5bYPmTB8SgcDFsw46F7Sc2Uj9L5k5qdSu6RGqyKz1buLxbucjs6aCY2qBzTTdDaX",
  "key19": "39qZuLZ9yH8dSSCRNB7Tep1bVBy4LzWPoUurtEXE2mzJTrp7Ym6uGDB6xrk9G1C5X1JXWpC9K9Gvc7JeNwVFbkdb",
  "key20": "mG5PX33iss1H1WKf47XGfFafHuE6uUJh5WABK2JYXZnN8Evu7JPRR6E25A1H81dQ9XBMDjwWCVbc7pcxbViRhny",
  "key21": "3DPtev3GWbgUWuAt9L4xhFiyHiqCvMPpED9xLoXehdQEJUU7VXXjVhqn81fBEr7EPXirBtwv8HpMaxmDYAN1ozsr",
  "key22": "4thMA1WvCafZdjZx3ZioWq2Y6LdsdRbhAdMZpD3oRT6fWhCE1WT34ez8EJHbLoi3sdo3z3fxKak2f4yPMNdRLY3x",
  "key23": "2T6RPPVQHVMJ8fs9TJW2mHQewwi5VzcbxjmAfCMDPigxthMwJScfAbJ77cbvHR4p5ogp1dCkVGFYhjeeSTxyuBN1",
  "key24": "4apQ1WotgAXonnAZSLKFBnLQVepjcPfHVXFDBixF5vQnnSrB7kKSS69Hq2C1pGuZm4qj6ycGsdQQAmh2CPmEwCSW",
  "key25": "3s6K9zcGRRUgitJsSfVBGJzgHuuC81Um8fDjXQMJYBHeobutqtK5Uk9to5jK6cEBqVKpdpxCWVEriin2MyiZ5KQC",
  "key26": "3HZ56ypNYEup9fhmt3eTkfTBr1EAGuopYpiH9PHXxX3ofURkYArDL45L4NxmZAhrrUc8nany91gG3WVV2kEQFqWE",
  "key27": "5rp8YPPGD7BtmWsS5M2AnaJzUyDLcgGX8zuGwYuViHzX2zhA11ZbKkPzT27zC5kR6ETorah4yLQaPS8Hobyg2UVm",
  "key28": "5iUyW59MsqrdXuan7sNKkFWfcRVWqYEGoFmDF2sors5jbp8rCE1QC17BzBC8yVh8NtTF2bSbrZWWtKFWyjDSqF8K",
  "key29": "4wWicGUwupq8JMjQ2eK47ysqW9MEjqUnjp6SbWsUwduQVrUjTz6TWjKRkD59G7aE1pL8EGTY8kj1WomBioSAFguU",
  "key30": "5zJx5WoCe6QdAn9RY5cgdzFDeGn9atM4t32hrbVbwu89pYUEUoANZn48RCKaxVHwwfSwMUxiVMDVqMW35r3udBNY",
  "key31": "125TZWp9ev1gGdsi9TikCiN88AeGK2Ljv2sptEj5JCLMXCBozT8nAZxVmiokjEsaA2uFAZaDBxgiM5gSbcREq1mR",
  "key32": "27Vzvd7ViaRDgwotxyahKqRmJkkq9PuNB19bZr8iU6yXykKUPpA9DXjrDuAM1nugQHJof3wWEAjmeDepjRLyXXEd",
  "key33": "67ddoUuJ2p1QcU59cMW9ebfGAWn5apqDdg6QwZUL4yPSuHCmPKsQpdqwguPa2oq8QfGBTjsrCAtMP7fAtpMtPSKj",
  "key34": "3CRoas1FVbnhD6ZWSrLoKa5uHWdnofUvw4uKudiSx7G76ry162Xb6LETxcUn74nzL8kMzjrUtpibUDjXdTBXkDhn",
  "key35": "2DTH7sZnJPVeCQgK4RunwmqJWZ9hW8buHHiqA1fL8X3xPA4BF6TFVimi1oyWcBcmXJ3uvQxMFvBu9EC9YB6Ea7qw",
  "key36": "4r73ZpmxHXWGoybhgCuPDZPqD3oF5MnA8aQDS5KrviDAjRFRbc3FxCXb6dTHP5NsDiDrRyCJA3VfBpyNAAVUerDs",
  "key37": "23oVpMEFJXgRBZyCH6o7Xv4pfEyETAYoCCXfrVqHRvbyWdgjS5NonzrPcDEUmHVZT1wu352D4SQVGVVRMDtow7Hr",
  "key38": "5XdqKyAt4M93iYE8YN85N6b6i1pEi8QQTArTT77jLCJUJ58CgmGbXe9qwsiU7VJ2C4eFqimhQEyjMLDsCSiBfQoy",
  "key39": "shKcvPGYH3ZUrF2AvGoZvjhKdzj887SKRgofKp4pE3DHJWL3X3vZHEkDAF8eoSUhYn77RAexTbQ95vd3Hji5pBm",
  "key40": "45Yg2cYXi17TgwupDt7oF2QHjJRd5PNGQdZpqoy4w41JarjxMqL3vzfaG8GbzcapD4Fo9p4VNoanLUmkjEGZXA4S",
  "key41": "4FnodAY8HzEC6QdPpPFVLvH6zuwRovgFj1CEYSjSiP6bcUeBYtW4newrwU2Vf2oEFzVf8c5GFtPoP9V3gLJE6uD6",
  "key42": "4Mhsd1EQ5sz6uQWwALLAtLb3YBKpjuCvRxV1GkWFPb9VnyfHhUbYgegEaREEgH1fhrPgezaQjh3idELNLYvBPvf3",
  "key43": "31JG7GdpFbdK9yGGjgicS2c9tbZuhbrPB695oA8C1tCH2yyrftb6yZ2dyX3KrKD3vxm1Ay6u63BFN6YTLMXukWbu",
  "key44": "2WHCPtgSaPrHGM4TBCzxzdDoCQizsMLri9gcQqzYXCZrRrfw815Hs9DD3wCBmAchRPyZWV1r1aNPZSYDX7np3Ubq"
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
