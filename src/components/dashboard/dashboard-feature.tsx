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
    "2gArJ2oheJha2cxvsejpfZ8pmJdvh8KSBMb91Mykx5K2ymaDQRa1My1HkbCZU8DNU8qdMLaRWXuYnXsACwimQn8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7U9bnVzkM7sM8WRcYzhrb4GCR9qMCq5RWGkyynwp8q17UvVZVrhGS56txU1ipiFgEc4WG2jdBaziGoyqWjcMojU",
  "key1": "2FTaHq7caPoo1PikGrsSFgZ6EYTjkY7bQZ5pu53LWj46MJ61CYJMsEJ9pnWeQcBgGzy6obbd5YENoXjVo15d3iaC",
  "key2": "2RzQVWMD1bnE4jrj8K27CtrDdpijLiommeeC1ZQ8Tqou23S5yGvdXJrZHpKdWxA5LShi6SZYHvMAYfYsNjfXDFCb",
  "key3": "34cmyUZyXuq4WvDAg84aEkwg8t5ejAwt9Jvor4ZQGAupk7UuMqteps1RkR1dhsPVhYbbnMSh9KjPqvcNgoqnVEqK",
  "key4": "2y9ky4kYMqLxQuFLVoQbFpiQBf64orkaBLMZf8zWmzPaJvLeWt68Z63YKvcDfUxHBe4PkAX2X6b8n8fneA2DpKLF",
  "key5": "1nXcfmqnKXae9D8d8jSe26ggw2MHMr6Voh5J5AFF9wfZN3hAyw6wXtjxRP4w8nhecBRHZ9uYhiu4RtnYFnaaEwR",
  "key6": "4vKmXuHVoXZ7JrntJf27APFXDJYYCqZHba3VyKgL9p78YTUh4bRn7d8HEeGcQ2GCia4cGBE3mUnvEWtPabenCAVJ",
  "key7": "jt2ybh53DBawRSaRnySSUScxt8nePrCiiDsUBWbfrWMRiCocPbvu47ynQDdpwaNcgJA9MyJTcKFi71trWGjNqRT",
  "key8": "PjnRab4aFUkPR9SEE6xeTHVhdd5FbrUG1YcmjtdvM4EndS2NgVYi4yrnrnwx1TokjnXyneigeJRHBKbU539t2Fs",
  "key9": "5WM4hCvmuEUiFpdAvX7KVpEXGgtdrThX6z7CqVwDsbpawYSePXDDrJCi2WhJEnF3UgmZdTa3UPn5DFh1vcNpKpVk",
  "key10": "3dPzEcbfTbeaw2w7SBt9TWr2U2vfehxP6xDRnUMWKGjaBQavkjFGvR7MH8L6hmd9jigfzinANuig1vPY98Mx1ENF",
  "key11": "NBhe9npi4hXXfh4x6kbL7z2YJKrDK2bJ35CekxB9ohum1jVM24tNa7kJzzjiue8WEa2jRAWGFxx12iSaNmygXyH",
  "key12": "5FV4nDHuyQ3dfqGmxiKr771rpj3w1YNsa91TvVtnAKdtdTjbSYtLRJi4KR6uuE9WYD2pXKV9xMwuSmNMcKP4y1k7",
  "key13": "r9tr143VdtfRExrUWtM8eEqEDGSgaWE1NxuNh86ibAum7VZMHSnTrVTighC5swTzuhEeCFZYpjHD6Wj7dYo8Rtw",
  "key14": "5a5SbJU7u2TFhSPSusVFpmXdxF5Lf1GbhMQnkP5PDtn92Bm4Zv45GNmFGSYgGTGBQ22EGHSXDF4aaDcvGfYKTwU4",
  "key15": "32rc4CRnZNbTqkUCZUkJ7HjCWgaMo6xyvNPqjaxx22bKsdVDt6zYr9e3EbF9SNKumfEy3RAwsDuQq1omXBWPenif",
  "key16": "eWGx7Z2MJLuBdh4x6sEERPwffzN8xexubXUh5u3G6xP61SC577ZYjNFdiuRZksv9YcYe4urZXJVwMKXDfSu3xXH",
  "key17": "4K2KagZWyPJHx5zb15A2QMNmA2HCRwiH5hvvhQmnH1VYpWWdbpGDkEE8KnySrnLpgPutkTQtSC1nqR4i29JWuaCp",
  "key18": "5Wy4dGnxohxBvXX6yLUwjGyQBsFS8MiRZWg3BZftnhVYAKsJoBpwPXJL1NJm7PyeXpuTBLh3zdWqDnkJK2L25L1q",
  "key19": "LJ76s1yCCmQksV6gW4e1DtLZETyoXfCDGm5LWHsZqN2KkS7j8pNGLN1YyEx5mqEW59CD8m492p93wTKyNRLFPJB",
  "key20": "5q84EExuNJH9eP8bHem38NRYzapPavoa619Hbb7UavXHuN8snTimzkRaghMYcVdiB9HyAjfWp9DEqPwv71p4vjgq",
  "key21": "3c5STuLXw7V2jGTVxZGq48c6LfzipYV8URbXrHyWu2mjHS3VGjt6DdAT9nno1KMDFvRHdTH5ryRuM1NoYAjpnjup",
  "key22": "62YFYHqfB7vRpHSikMyjMMdQSHFTJJX8y6xtyG5wdnKsRGvg8gBkuPj9Jo2R231zm8BWp7JsM1XXupNXSj564dzE",
  "key23": "5vPKt9dtDnxgYNNqM8ci5CXekroUyhcj5xEZ3b868JJ7pCJ4SoNcmFzaGiT2nCWHHtXGMUrJrDJ5cpRQwEfNHHu",
  "key24": "4i8zcvqqXumgkvkmG1wpjSx5PAvBWhweCQZJZ4KxHy1MGspoANdhJtWHsjMdYF4seqnaphJTEFpovCVergmWQh8C",
  "key25": "UNorrEGb6rGSYjrAy2En2FCNJfj74nPzoQXizwoqD8WuRbm5EygfGkUPkK36hATyZtCT7mZVhfdzvtchm7r7iwT",
  "key26": "4d7LrsZVmt3h4E2RuvyTQvS8FEe2PpzGnynYxUDKoCrk6LGTbtNUrBdCNHfGWdD47Skh3quxubqVpjLhAo8WwBxd",
  "key27": "3aozsTxPmryyu4hbaKYKoUAAcZ6A67Rs3s3qbefRBrKH5uVW2LsH1bXEGxT4v39YbUppC3LEbnPwhPDEg1zFzi69",
  "key28": "2WTD1BxAz9YA35BZfWhAxgL5zATYV7pdLF157X1JxeNMB6DQ1Km6udnxJcivEPbrretLTMbfN7VaXtHK1KZtLchH",
  "key29": "4nht7DzTt6YmZzej7wedXPJS7WprbgG6CgN3SWtVerhr6PHxAft4etKYqeNj7J6TwMPgdnaUAK34WvvRRLAx4kHk",
  "key30": "2MRnSEpQvR4Afb8maZNfwNTc9YyvDZ32jDishdEfhCyFxLZQaowFL1wrLYhAg1HWQ4NhfnaGErjUCEg6vZv3J9Eg",
  "key31": "3gYpTGf3sx3EgGdsgDDCsGzDNTidGHnYPjPU2FBuxfpFCAewr7rN1R9Wf4tpdcrdA2wPWhKonBf6qo8kjP75j6u5",
  "key32": "37vi2UHQchaZcRC953xZTq5nMKBTNC7afmxMw14YijMRtb6MJBisApedimbq2KzHMTc4S6xvWqFVawzNHHJKLpdX",
  "key33": "uAJTF4AfaejHdxwXX8YYyiTxeibvubkiV9rCSEuzMSRdXnaXuRTGHCoJ8dh9xL7JBgAvESRinZBWk4bqbh13zWz",
  "key34": "4o8acqyfknXeaxadsEZFMfCsDLXyu3qW4paMV47Kc4mLVxhiuVCY8V1QwqEr54b5TjwM2TcfMsSKyMKYwgndJLWu",
  "key35": "5iY6vmQ18B1QMbVoZUSEdaFAduc8TXuzaauWFCWMqs77sEkX4K8Sy6njVv21tJmeaWo3dw6Tz6xqc2sqCfZNMVk6",
  "key36": "2BKX6si7Lg5bBxTGPTs7uveJMjNBg73ZwQWeMmvBSTYygzwNQEY8TYUtdRTbFkbxyfBMD1RAFvgJVSXFkikQ5Nt",
  "key37": "3jmFQpcfnFu2GDT26TGqVnwDdE54fK3Z6xzqWBPpX68SeybbrVBHH3uu8ZuEFcpDK9iwT9WqZbShys3abubZJp8c",
  "key38": "4ftV9NQADTE2tyMEqd9aQsvrWgkj6wsHZmYqAVUCRMPc7xSrjZqUyn3ZdZp2tXJumPch9CWAgNPjbyJNYat69EKz",
  "key39": "UJmdBYr4DvjSpoejC2xfxmMDfrfNvHc1fENbeZZ2WVehhoe8vpdYd1n7d3QAp2Y2c1T4Cf4u5bpZPpbZihNtTtj",
  "key40": "5iUR7jv3mgktPy3vFYP3B5jFNiKSijfbpV8K4yQACXdt2Y3CFYZnrMMp1RW7QfQSazkNRJSdTeUMtcdjuFT35aKX",
  "key41": "4uu4ESoJutEMRnsnm2B7NmMz7FJBouYSHEAyfU4BMPnouhPvXyNYVxgHUCSuTZxgEJJV65mr14TDcGLgn7su1ngd",
  "key42": "3FHgwBk3zSay7obwxRLXxSDLvGUBzrEig6TUzvTRe325xE7rQtGL6Ra5DfUVdXiUyMv8fCDmioanTzAoXvYaXVpU",
  "key43": "2jw9jYe9WAEpjY5MuCQvSwj7RqNF9Uym1AxXbhJsdbXbSSS61JZXSfWDTiHBcatRh9PT4edG9eRUECQsv44EoRWJ"
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
