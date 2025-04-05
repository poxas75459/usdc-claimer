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
    "2LQZBrnc97AAa5z8z3unassBkXpV4dDH8ggJ1ZLZWRHQ72qu8pXLZqrZtFne1VLfmieuzStSSA95RcARESuTjMxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31PtBRMqPknsgXS31wDGfjQyFKiqP3wtZk3xB2D1YyDn4Epf29G64HvHAxj6g54tLnz8WJFY4vdUqmGXD2CPb9iH",
  "key1": "2yXZ3KRoo9WxDXSV6M5zUXYYD7Q7vEr3TxghK72ujjjo8y1tnZkdt4e8cdvbzWpoNJ18jAVq3H7E9RrsJ7Vws8Rb",
  "key2": "59tY4fTkKcdiNtPES7k64yyjPJQDNF2qAS4w2QAbgkfcrrJXX3jdKs7g6xYKbVoGMjmJaZjbxF1P4LpHYi9cvCkF",
  "key3": "4g7yuVjhhdi1iw6cAGE1HGMCcj8ZuC6NdWEJN3WBX6jHA1rV5f5zy2xW8JCyAzhi1Xkz687s3ZajkQsw3USrbXRa",
  "key4": "3eDrTpP3XqXU23Ru4Zqzs5TUUt9pbg55sESao7NdvuLcnwMLP7dgGNswLcfJ3JfCdcoh9P8iPoNv2ZG6V8chvNWz",
  "key5": "3MtFiZBJxQQijbzeMXVmHifAhPGfrSz33e9HW9YuMqwcJ6aDceVDmrMw157dWBqFU9QF3AzzTcc9ATdt9ii5vy9H",
  "key6": "5hWGYdMyigmqEz2gpmpHWDp8XGwXJTwBsaMTx4J37WEK7AjLNtD7cWqE6fNyEG6KjBgM3S6iN8aUS9d9ApNbhZEC",
  "key7": "TEchEc6DWSeufA2gANAXSsJ1hg1JaSpc2ed3fwQiqA2AJ9r8YnU5yEEEkTo5ytoDDqUfcSaQizcgBdgoVpBmVRZ",
  "key8": "2Z7TXZcWfDTBhMZ4uD8DENBLuJt9A38Lqe5bf7i3rK7wDcAv3yhaQQCU6RKD8P7knj3qNzSRxoaaukMbHWaRcmfD",
  "key9": "kvpQW6MaMveXZcCSCqUDxXYBsD6wsj9bLUPktiXvPnBXZ5sezJnC9aWtYPT144AdM53Bt1W7rDmAKH5rXnLSCbB",
  "key10": "59vg1vwd3vHMD3wTbrRr5dAfrXWASppuFmAwHWkG4nsoebPLCwQrTmvXumoBesMmkRmugHFKMPCGgGrdD3dCcz47",
  "key11": "2ebXk2P1XL6YJFZMU4tao2DkgVgc6zhmc4y9MsTA5taSzLWaXAd26tPCPpe1bALHUyMdpV6bqhrbX5AApX7rt7YP",
  "key12": "536XwEpxrje1eW78EydqLah7gzTEiZkd5x12kMt4ryg5LnuWvCZU8UHU4Sg6GXKtMoeaeeiEXSQE1L1bjvbaHger",
  "key13": "5VFJsra4sxHjBUE1s4fewkHNWiPJ3rKhRCLgUZv9oGdQVFhKd6W2mMHMCZoVcV8G6JYs2j72P2x5dPyGGRindo7D",
  "key14": "tPNNm64kHuFqSaTjQzHk4tkzruyJZ1cvFhAD1eDfPoMWFFmpJ6dYND5zSK1D3BiRRNYUtmWHa7M2ZFnhSdSe4gh",
  "key15": "A3iB8NdVugGSxWtNWP8Sr5tNPUaxvhNCqcW7berHKePkxWQNFW7QfdoJXMBenXpf6h5jdAwyTeJdTomv7AEFoDk",
  "key16": "5uj9YpAJEyGptZWNK4bJq6sxrbbWKMSvgfpdAdoXE1h53XAhTgyjNTViNzw6og9q54Q7p7iaHNtp8bT2V8WKyWZF",
  "key17": "EqcZLTVc93EJ64E5jZEMayqs6VvCoe882x8Wx2idYrd4BiPnAxWFYGYe2ZPAw6KxU4mhoAZj98ndtaKM4G5rZzJ",
  "key18": "5LXvNpWMDT4NEF2BBFA5ETSu7JByHKKet3m2Ty5VAii4gxAtfwH66PH9bbCkF7XNaNbycNvqkSoLiGZvBkiPS2hp",
  "key19": "3xpH4c2RTXZNfH8eULuaJ9PiyzqnTeg3AHVuuHxfUpYxQiydEGahemDUSacGWP8Le8Rd72ZC1rqFpyGsFqnkpVJS",
  "key20": "3VgU5N6QTJXiZYCgTABBY5CHnzUBt2uTyTG38eYomQ5N5CioNzijNzbqNWQSvEcwdK3JYvmxcgZX2U8M9v2NfQFS",
  "key21": "4hnGXb6zDbwuwsHRRa71hJkFNMXMJaxd4VYpnHFcEWPrmNgVLJqvutAJnk4ExuGB6iwBZNb8abToQTUFjMLbfPK7",
  "key22": "2QtxaLJjd6yaFyyFcjQFDbh6JhicJKwSi7WrtwsSxKsiNrdWaUvw53C6neu387i5GSapKFDeEziy6RXpAnDNZVsh",
  "key23": "677ixvSXuPrj3is3BumVZLVWiZBruXvFZ1arGmaMuyWegVMoPSRHstt9zRUwwcvKrCcPz8fMoAJ3fhhbAzjVkA4",
  "key24": "4DJVyf2HMEn3g5cW5sWn2tR4N5QAKAMeSddEoQkbyQnbQK9L4RQUSEmzxVFevtKM8oJiFsauXhPLuhE1fA9aFT5R",
  "key25": "5MnQjmRm9Z5JZbrenbjJiH43hzSox3e3dCdq2dJnDXpdv4PGhLhKHQYa8K4KWBVhWYQ7zn376uvhRueWTbP1wZ3T",
  "key26": "3DZp4w3jRLztkRG66Pmw1yFLHCp77CquU2jw5Q71543kznYERybm6jdoyieTijbUwyYiz2cfkz1Zoai9ViKNXrGg",
  "key27": "278x1xL6AAC6MKZd5N3DZZG4GyMGWxWh1a3szKCKdofie54jNT3xPo2yjf7i26wjUnwAj8GaQvwRKSjgrSSghNsj",
  "key28": "5S9K4JCaUJGVC82t98Ai1ygR88yf6v7KqCh4hfbm9sWT1oAEz7oksUxuwsNiZgcPeiPQRBMn6U94KnFj48NPhcxL",
  "key29": "3XDspyECWH6VgD5tGikUneVNHgsmEz4gvTALZTrq3YaknkbbKWSSsHFxiNy7FGVNqJhGQvwcac5BqfDCS76fEdMh",
  "key30": "U3GFc5KLHBjZqRFZcmVAzQBTW3LQagPvNhtqHujbeZ2Zhm3qjgtrgBppZtv6VA4sC9hqeLVyPDB7FUBZ66MyqZ7",
  "key31": "2FAwdF11DyN4R8jQd4xSFxkz5QSh7QNREy9Md844AwvHqLWxU9y5vNCCiys8yd2N1GPTyxovod8f8JPdXXiEespJ",
  "key32": "3o3nePAFnx8JGoiNz3hBjgSFEsGVL98eeWbcZqv6bFCiLQESCNSTS58y9oNY7Tefy1wUBnPFBJudy9Rv81auX5jj",
  "key33": "3zQP5ccYt2Bjz2a8XWRDxMXRdpmC9zLBw44NXqFGQt8ASsn5MZ6DvHxDopXvabMGMwJ2t5V112UH4DGzogyvs313",
  "key34": "5SYZj2DNGdSxi8vgdakFAfsX4UWh9uWXrduMdM5vb7gNaYw2GUjrgqqWbnACvmUtiPStGTiRDvZ93MmqZgYqcaLV",
  "key35": "4Fg4mik762UGDV62RntAzpRCCaN7kTxSVBTuWmw8Jebu1UZxWg8aRMEX5X9rmohE14H9ejvxNeUaKHrgB5cvddU2",
  "key36": "3nZ2jgA8CDFC3cB5XEqkwoWShohaWzja3KCjkc79k2GK5bPg3exiSVQzZRrCmrrsTVuRnuy6tG8smAwcDA3widPN",
  "key37": "3REXZQRfpaCFoAJ8oLugXF17xmXdVnJsbNCJp7WbC2P8azxLrV6pjHzj5KLexH9sscShKY6t28ZFHm2S2TbK6H6K",
  "key38": "2nu1QLfqQHhCenKZBPuPGUTDDHt7d9gCWbmGLoDefeAF63mhZsyXuwgMS7yUPAShQtymEJDHMkvjHBuypF5hFhki",
  "key39": "rTdgLX7eD6ktiDgJjfWZFTgWQ3uQdvbStMiCnTxCA7Es9f7f4tAnswFb4uj7e9vRU2NBkqk4i7jNYHVWjMNr75T",
  "key40": "5N8gXX6wqj6TeiRZjBiK2vzSK16RmQ77bBNwZFm9UyAzaLnguygG4X4J7rVUhUYMpmjF4nvkYrKGWoJZeVZee84M",
  "key41": "4CHEpbd4wxwgyoishMKPPKiGuoDS3N82XBqrbZm54Luz5ZLJTb16qa3jRrYmJkJV5AajGaqCRzxc2dUGpeF1c6Ea",
  "key42": "5ma3eNYHe1mLdPtkibwuUCUzn82hhvzeR6d46BVLpQLGbdHKRbttNeUJ4NuwAnQkCB7YCkdCArWJAiNxWdox25Vk",
  "key43": "NuJT2PXVC6MNmzQiSg7UW7e9PNfwgQPPdWSZfDim365qKgdE1CEeeF74p5V6frZWFiHNLymJhWBsPxqAKoLSh3q"
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
