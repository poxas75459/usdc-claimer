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
    "fiLv7TasJgdopQcGj49bBTPBeJa3HcFLUTRRRooaZ7MEK4VyhEGZ63qfBdxaxV9nC7YQgy2i2StDpKD4bWuvwe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f7ewjWJvLwcwgwkLXbFQJkbKQHPPNv8mBw6yu8r72eFY4LTxWUVz4KgenidSKcNaum2KMS5UZba3sJT3yFfpMDS",
  "key1": "3u746TAFrmST96dvCLKY678hy4n2PiCL1MZCfiaqzZY7WYPeu3G8K3ovBnpH3JeHX7VUbnJSnRFwmMmaQkGpPcYv",
  "key2": "2sWQQHh1mWiP33Z5yfK5F5iFCM6E5NeMbnAQLQHCaf9wK6jR57hPCx3o7euSY4AwCvKGMH45Z9HtCC3Hrv6LdHAP",
  "key3": "2wYRQdaXs9zqCAhN8pwfxevT2R8PRv4AVtEEcX9eKagknyQvFMHfic6fRFXDyaNymNUfmK8KkfUtTvoNpcLMQU2s",
  "key4": "4soViyuG6RGtJ9NMBJ4W5DoLYjLkQ23GKdx4k2rWtPU98YKDeBmoaokecM3Q8cDNX2qZ1Dc68SLP5sXJUP56tn7L",
  "key5": "4hBU1hSiUDWMEDYidGLxY5NXqLpkQ7k2CapFzpYVYZcR1rQdPt7MEKS5tAWvf8eXVV7rxXKrjhkBhsiMiRjTVAYp",
  "key6": "4N8sPVhQJoyukRAnUk2JoqX1eCEGC1wfYmDzbyckHkQP2yrLTYxMP4XbD7PnUpc4YFHEUyEUksbrVL1HtM8yEYjY",
  "key7": "4LLn2mkwAw67gnqFhCERQc9WA6pPkngKJa3cVPmdYWv6QJPMpDc4b2Ma254hfPio9PaSodh2rEdx4K14vZRSXJqA",
  "key8": "5Q5bmFF348mYSoUxud3X3ACkWg4sBVfdTxtLFquXNnqvWe29Z7Zxb5qvDoHZAvaSKNHVoGjEk44mkMVNnETSJvos",
  "key9": "35o3MzuiZCuroUN2Z4vZ34igQrpyDJVyFuVUWwhg2s6PYMNLrP9X2b4V45HeVi4qnJRVrWxemsmjr52KoNrsZ1Js",
  "key10": "4kAwYxQzDJ9T4Y5H5KdHcKSfqgmzMyg6oPEJwYUYZuzWp9F9dbFRGnMFUbUtqZoL4AMNVVww9rfbLrWRozfonNQt",
  "key11": "dVQcFVYNKAQTisNcidV3eqPBRkiA1kzLi6wYMxxM4jsuk7DSvf2m2vbUSxyG3kpzA3dT1nnWQ6WUf2Xsca5bE58",
  "key12": "2Rx4NDxEAMcp3A7SJQwvCRu8s64yzHDgCGZ2vQtM4qGvbx88d6n8ujWRoUaVxqrKZ7PcBayk895vRQ8dNhCQRfBm",
  "key13": "2UxQGdGHmM2FEu5ndttM8s25uq9V8LvjiVPQq3AMvAtVGhV4Q9rY2wmpQSioVcUEoiTY5LGGTqT1PX9wX7aQcS9n",
  "key14": "2bmiRKDtHrLytMQcbLb5TePB7pKDEMDok1VLpHDbEviD4Uatfjegx3rjLN2W8HJgmaUCFKgqHWrASj3Xz5rtA7CQ",
  "key15": "3YEj9cY7koqvXHMVWxBMyPuNUnqHM8p1aCJPQEZpsVBP1K1zEkeq16tAqscWDQVBCnFUFzFwG7VrW2uQUXyrXpte",
  "key16": "3yMTNJNBhdZZZbkUzKGAgTXuYHcNGj41UwvUzGT58f8ueNqVdnDGYzfutgw6SAZyiA6erYrRATbfxsH5bBqxjBXe",
  "key17": "3YxP8cM92DwopAtbeiinZ4up9g8Hg3nXFRaoeeMfNKRYj7mcLjFYqpfPJtfCjXuJzkFce7Y96TBsV2yJArfKv3zh",
  "key18": "36rSjGRaGtiC1Q4ZcjxbgTAYc2SWrytbQSB67LnqSYbdcKNHzJuo7iV15Tu25RaRqwd7icNoAcNdJK3uSr3giSCL",
  "key19": "2KKXg4f8Lwuw9P2XiSNghMhFPDwxaGWbdYseQgPhskremvDRyawwPxFDmbuMAzBdPcBgj973nJpJTfecpg7MX3Kt",
  "key20": "JYZHMaM5yxgfb5Gb7t58UucVp9mss7mojkHTQMpUMs7P5jm6D63yxMH2pQgAt9tJHh7V2QEAEKyyDPp9DLoFhYW",
  "key21": "ihyhR5VKWzJBL7DivYPyKGa34LXCUc7pebgdWSPX3QfJ719pqcwPH1Kyy3DJMSbfTytDAH6PxUvMkAu83P1Pipb",
  "key22": "5gTSbeacxYqoFbpwqhqv44yGghSDxs6f9Uk8XK1JCTLYFpS5Cd6YZvQD3hFYhFhX38bSXEssRVCrtZV5r478uGV6",
  "key23": "5Fc6pGo99GWuyXMdTxpAEDagToiWAbc1ap7tgRe2a48H8hHG4V8osuaA2ndTpUT7cZ138WXxoguqVFP5inLY2Tqn",
  "key24": "5hQ6bUnvCQvTgWR4HVJMwc16S8LEZY12XRC8FQT2FJANg1gtGx26146T5EMUUAfstcTEXJf9SfaHTnJxf3suF81",
  "key25": "4M7zGELdnaJjMg2A99RjkCmoBWKU3yzjP5xCVC5YjehspeGHuVx1y5R7faZ7wgA1zuFpKtYmH1N1F71DSFp7N3EP",
  "key26": "63TW5c3WLkSfCPaVbNpnZFW3QVoiry7VGodcqPwgoc6QawaiZbZFNSvs2n98MeWiXs8gdhbKouPE2wNzFP1WKrR3",
  "key27": "4aY4JEuP2H7EvWZP6Fwjd8UbJZPK64sMtt52zKBJ8E2NXfC6DcScE7URjjkpguQ5C7ufv9bn6owqz9oL3z6SqiPp",
  "key28": "2XkzQSXvxH1WfUxiZYnJJEcNDYJA6aYqabkHVdBWxADrfdA8H6U4yXbXE9Z6kdtmoU6kCJ5tGUSquMGp5beWFWoC",
  "key29": "5bm9ey9uHcNQeururphgycebYDZkJmgqEqichUouSwUe6AzCQZTPwhC1JC5nQV5T3yAihi7YqW9FPNM9rjtjBNA",
  "key30": "2AHqR2Ei3GsKNAbuteFsVPtZHwRz13vduY9XLhqJRYd2zqwmLvZrcBgPNzxGbmZ3JCKKhWwGMxVZWz8HrRTaJXup",
  "key31": "aG4hDgix1jkKztRDVwP4x8M9YaQDnuu9nDHD6cDGMs77TRzuqyNpsKQUsyKY94PhwnQkBodQK2oyBEDVXRG45g6"
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
