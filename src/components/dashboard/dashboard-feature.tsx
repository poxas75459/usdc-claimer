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
    "499DVT5NEkZDSN1eCmk5N51GdRfzEZYj1fbL6LpoYxmEqRP2aNCGe1kwDkXob2yy8WxEG1Uji4Am5DB7weATFmvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Wxaj9jo5BU1YxyfgYpAzdD7SvWSs1bzkbaZnyjg9bZytxj7g64NLHFXmGv9dbFSWsYPumnXxJtU1Dv3YaoYn79",
  "key1": "3Ue15tDVzQS5rzD7FfyeFqdaESMCzXwRJLHGXpnxH33ob4QYteipFd6obrDKqM61cr8N8B3hdhpyb8ZS1wbySHkg",
  "key2": "66pekohtLmCwvJpwuKHQgkg2HcxGfKFgjX7rVjYBUfYyMU5Cr4QvsK6Cu4e8UMXAz5qavbtHjf1pa9ppRHrwtGJH",
  "key3": "4A3LWQbbi3BG1d2RukX1rnv9dVYp2b8fSWw6AFWbYhpr1XPEb23jYp5QR8MpA7efhfXpT8FtKhLW1L3dr1oUvEXS",
  "key4": "4dVBUT3hDVoDLvgit2nvyJ5qDnuEaK3vnoqqNjarRmpmug9zGB6hnN1SrFruFgjSMzq7xs8qWi4BqUB97CHmwCUK",
  "key5": "39ups545q6H5fyacvghBvRRtKkp5yYowGu7G34kSfmbdAChjrz1uyLXKXYxdrgkhtEM2qbB5zr7aPhgdnZJ2zkRH",
  "key6": "65jGaYy6kMwtoWbzUXp1foFdJXqYqCurR5C9DNsZAp2NNEgSKMKcp4rGABAzXNcyHWgwXVDURaL8VwQcNsB6P9qB",
  "key7": "5XYdLvKBPWjRQTMpyGs9DRuBEjZdC7nwxoSWmpDX76hCPH19o5VFc5yDJspGcMcJ2W4rGysAemHWRY9aAGEBMBZx",
  "key8": "5P9shNCyrgKVrp7YTeVWyDkrKTVNARYg8NVi6PSV2znQ81V2bRqYem7UATUFHYkxMa3xaBS2HnGBCtBnZTpQ39a7",
  "key9": "3BSE18FdxkjT4RBuCWLmuwNng5RkQVVw69Y87v7wz9E7AQwtxGefSWSeMQyiF7y9CPC7a4d55i4LQ16dNuPSMhD4",
  "key10": "4W6WLXpHANALWzDfoUgVZbcy7ZeRFgcdqy9NYfjQcQfdswbu9D4nvDsWmeBtpVn2FVtYK5j1iDPBxqcr4t8n4YHp",
  "key11": "3AB647Smb2qZDS6wCfqLTJayi8AGSDDLYLogLsfLdyhqNP8Ui43niJNHky9Cian2TPWmHzEwroYDGznr8jYiPdm9",
  "key12": "3CCogbZ89SxEjcHoFuj57f7CG2Up1B52cqE4Pjb2PG6HG8vg48PG7b3ewP1231ew5CcMs7mKZFcZopoHsG7SAcVB",
  "key13": "5fCnvzmh8ieu6kbw7yrqsjnrKswv9CG1UuR6yiZdXHcyXNxZ5CurF7Bof3TyPWLUMnmmwTh2y5UdTtcHYmYiMZTR",
  "key14": "4fJyEoUR4EW7XxEGN96eTGBoafMST8d5mNqwTCq5ML3SsyXyrRuSoY7MgeAMDft7q9B6ZoH2GKBXmqaGGk1Skngg",
  "key15": "32EJovpgHXzcmZiQ2JFCYQtqHHX6u6fdckqQ9zLvhU3pcyDXvp8nRiyJ5SM35MUqqy1a2ygQyfrAnEcLe1vfaU5i",
  "key16": "6dUzAJC4aNxemfxCFpNMz1B77ikC7Lit96aN7idZiMRtoadt2NW1wsUEtvedx229FGYoCBJepMcLKuDewQzEaby",
  "key17": "5mUugFpHWbATjkFiJ42DExSyZcviX5QiiUysjLnmgvryBy8Xe6hFtC7BLuHarF64uwH17YQHqiansf8JjUgBcSyK",
  "key18": "4xSpdnxvhdhEYZn4gQRkUjhWxSYMXhqJ4D9WxBtxRQpkzKWbtWL3XWoeWX9JaNFjaYEkW6jciioePig55p9UGmo3",
  "key19": "2V4Gxhkcu1AD8WGWowkwHiCoMqxVciYg4w22D2EFKAehiUYDnwQHHHr36BCsX3fhgJeLsaS4Zx7tUDyrTrP8CQXf",
  "key20": "357f4YwRKKC3zDgsDTUscQeizpLfV645u15wmw61NnPUCHYqNfDPsbmXutFrfLVvaxqY1BiBt5xM7fPDe5MGoZed",
  "key21": "26Nu8dgUBZLD8cqjd1NyRDCjyPoJPAGfEMGZUsj9fb4M7Qner9azy2YerDAHV7qsrBZ326hbLArJSYRfDSvbU74W",
  "key22": "3ATCmfuvaexeTpHDqGS8M7QRmNRADQa6hzm4HtnJAZjjMCnwmLa58u8ro3TBsaK69zy3NpR1GBgvYwtzqtAXK2eU",
  "key23": "4NZUcXsJ4vyznYqSuFUzjKm3MTJqSUwEBD2Ta67ZGHuq1wetYKySfqQn1AqnomS7rxtwevLuNaf8YjRevxaaXCPi",
  "key24": "3BKN7oboz7qVNJP7j6SaL4rmN5kAotnycSxZeviSAb4gW9ieCKXQanpdYtcDLB4Q6jbpxxSVUUc3PchdMjj5Yn8n",
  "key25": "pwv4ySXWyL3Dx8N54E4v8qvPzCPBEM7vMi4cZ6ftC5bZRvkyTm6StZZXn9MabgCvp9EnA5K1ArYxvRi1jBZf9rB",
  "key26": "3NTRw8dobdng9ksHMxUvRDKbVUThUfvHGGjDPEnXg9QQxSuXArCUVTzQLXyGKLGgpCfyJquGSSd5bWEobcFB1abs",
  "key27": "38RU1ygtP4ryZuyZdroWKexSWEyiTpNfL6yKMkv3CpqiDACBBzF8M4VuVxGxUA1hmxNPtJZLpDduXiSJdPFGALyK",
  "key28": "3QJmXmaL16epWtskbBf4Cg2FsY7kjCbsMDFc94Twrh2GGRfuLo9owZEbrJYCuQFxxBpUEUwzH1KCcY6JGUNikenH",
  "key29": "AXAqr8hFCUZ1auLVTqqW8VmMVjnZrvP9ZfcebtPemnNk4EsHDRHi5kNC9KadxdMHnpPxkN1FTwvQ5ZUkrUuBpBM"
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
