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
    "8o7Bb1dKAPDA3xeQWn7gLHtZcdKtaP2uMatTnKaQvTzvB7s6Sq85Ae4eJgGDHpGYjiTZvHUtbq5kQCEy1p1VmHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hCD3BPFYWHJUwk4PxLTZsPXJnJnbx5eM8dDpDQPYnJQorw9PRAKsJCnhnM3teorBRy2pBMajMKAD2wAFDk3zCQt",
  "key1": "5QqNMZjSCAfue2YXZKd3EJHf6CKp4pq8izGf7hSrWNuJJTsHRNp2JwJyrujGXGwGaXmnFzN2PfvU8zwFTB1gqKcc",
  "key2": "5EfKFCZc5gF75R418TitWVfyYUPnekKrCC3cgmaiSB2BE9nvNV3HCxp1HumGif8FyLcMojYKg7k97bDXhJ7JcBUA",
  "key3": "2hWthr2etpmebENzCRdreF22Qi3Bf4gxWq9m4QCo4JtMZWt1YPDjTwuvrRXXNzSvgMiy5fuHZN3HFTf9K1bNG49K",
  "key4": "2Km9fkehLgCPWQzbzBPs5d1NzsENuRgpUTTfGQgwV3n3rBaLJPzahCMEcQ8m7ZbFA2WV1tA4gtTW7yLLt14scoig",
  "key5": "4MacNfVv3KTJ2UNWzkbdv87yLD1JC8PLEBraUx774NooAnn5LT8vasjySiraAoh18wWB3i5WVLNWft8CCj7P3k6r",
  "key6": "5SRuBydHASs34UvA9wU27Sz2c6pTULvYk5pJ3Ack7EzeybgmGQrBienpzRhR7ywJMogN1F8SFYkZqzskiVp8m3vp",
  "key7": "42vEuHZUFjQM5hdt9McinAAMv6ev5HYFUNqs6AaJmb7RMyfu4cyLAdjXvhWpiewY1953HooxSkbfsdYRbmpk5G9h",
  "key8": "2PPejpHjyiJjEwuLYCp2HE8r1oCHhZ45snymo3JgNco729pGgbcm5voVNZVd6A8HHZptWH9SVcdTRpXykMr8M4LJ",
  "key9": "4rAeZEGPxDyPYCej7L1GUDkq2FvLXPLDMWto7XqAXZAXyJTrFWHnK34xbyPs18uBfRHeb8eiHc2wAzPCYy65J49a",
  "key10": "5U9cnursXL7TxoM4tRvTMFeDQMauu6zk9Pu9VyogLEh3qCaC29FAJgKKoyV57vYXBKTLthzRsS2NEj5GYMqpC5fh",
  "key11": "2Q5sXTAAk4wnRhdacFuyFuFG7vBUtJbCZMXvBjMaN838qUwEfMy4Z77DiBdnkKmihXkyCX2kh3V2NBvF8Euh8o2f",
  "key12": "3bDtHcp6mz2E3SukRzf33XY4wXDLXz9eYoxs84SLdGn95a6giKEeVdZ2rMtpSq9H9fuaWLcWdGEkixaq4CoP5kLf",
  "key13": "2PFTpgvZWkT61RamxknP5v2hDWnm5YGUJ8ZRtKvSdDn8L73yZUDau47AbyBaS3HtUXp8Ggegkski2AFg2Hk8BTYN",
  "key14": "5UKx3opnScwmEAf3aKZtzyaua2KcLAQFbEPGKA6gi7JfGq2u6pMGBFVLyXhTifX87vJJ9Gg2528dGeRbDamoVxUw",
  "key15": "5w1JCoP8DFsZag46zut5LBM83FW2VP41iAWKB24M2rRLpLX16Zdu3FXbLKraS7kW69js67mpXA24SXwCbkhSDmwZ",
  "key16": "4kzX4JEiprEuysNR2qsFYJ9U4W7zuyQSyeqcEjCLrfEfA2zgni4SGTfPrwafG3tFRrVveXhJPAVkVUgQAy5WQ5aP",
  "key17": "3sR1bfdQaspZBftvmhNccx9cdAtLKEfELn9ZstPh6ANtcLeQ4MTmoBPoRCbAHpaYw8nwCsyYAcdgB7k1Uic1bTAa",
  "key18": "2froX8tiVnwQR2iSsNMtB8HrMo38G4tErc5mzXp24vvUGgFDC4UTThtM8Tvf6FP3YLgfUemfqfEQDAHWtSDDHNyz",
  "key19": "5HK2ysYtPDAjeDXKKh9U6ozw5WDCsxEtd9c93UKFWsTVJXEq7yEFEkVHJiGBEnswjAPp3CmiYaL3AdDCV2V7Ezaw",
  "key20": "3cZNj83XXQ2Vf3MJhqrFD7sxkSEwRy2NYswhX9NjqmdRd3Pj7GVUYwwWuczBM1F1UPw1W7Q8Fk77JtLZXqdBRkW9",
  "key21": "2JEALhQg3CVxVKpahKsCSPcNyD81AFTigcwAJsgZEymyQfX53Stwtx5H5S5UzYrziaLXFYEKd98hCc5dsx6Qnmvp",
  "key22": "iYjUGqPZMz7ybdjJBK4x4ycZpv9hQWTwwCfFAFr2woGrybLbhQThstBBEAN3WkdM1b5Byfh8D1rn1hEKoWPFCjy",
  "key23": "4kg3PtLyM2fhKy5n4BjMpNpmLN2k8drudkd7KoYBxrKYNaz5vZLSbg3LNBUb16XmSPEQTZ2R4acUa8pobimp6RhE",
  "key24": "28c1R95qjgpdfkoD11LQqLUiqmS8vJjQgK64o8NeaEyw8ZAgC5crBAz7mVg3fGB6NBWNq53UPPabsoUu583pZj5f",
  "key25": "FiaKRSurHEhqrqtqb78A8SWXahNmu9H8UHjXnXjuopoYi1rgwCcwgGp7GsPHaUn8CeuRAA5yans9zr1y2N3a7wh",
  "key26": "5UUeV2mw9mUZSGfkzkqmUFFhSM7gUShqfsLiMvswSqEZGu63c8ykJvp6jkALHttVBrLX9kcorFQxed3nmFNZzDBz",
  "key27": "3HxSDSLpiNexeBhawXaRhy1R6ZQe2jdDFmvHUfxiYXjefHdFKGoSE2AHPc7B2xATDbk3h9aHqtsbuW4X71qZxDU9",
  "key28": "2gedR8mLVHUfu8Zmqi7ZVjWeQxFnSbLiwfVZKmBLmGxpGPS1zTUizjVMoFSpRnSUytgcRz87U7pWD7pcjq8Xd4Zm",
  "key29": "4tNM9ooW9UJwRmPmvPmKSvNK6iyoPg5msFJknCQPAynT2UTNfPKiRDtQs82YddFjf3PSxXEWRZMAfWk73QC5ccUU",
  "key30": "bshra2QATQq7GBFYtMZj6FA8xZkhK6ZBQKh9h7fhn2GzMjvYUHvcSt6YBn8MNghwcxLHfTurydcEKKtW6g5rqCu",
  "key31": "2DehHvv9Zs9Dd86XkNaWDp1ohm7UZ7b2yUX7NVaHuA1XhnHwgPyx5kXWRYzhFq1xBq8gwjKzYEGZRPX9Q31RBZMc",
  "key32": "8rUCoH7v7JL6bqguaMXzy5mGJULSzNLXyjLd7mhP8tgqtJHzMuWkFBPFyJdH82CFKrDrPQ7erFsfv1zVBrtE3S9",
  "key33": "5S3CT8wZyunbq1eEuauM6gaR1MbPWXwsCYRHsTdpg42ShW5EjTLv3tjpoaEC4f9XUPBfTtwFjSpD4nHt4uQ6dCB8",
  "key34": "5UNZB66Z5povLB1X4B7TZVjwSYQ2JbtLGQWELBb9b5Pg5MoQUWUKKLZou651CadMRa8Zp6w8ghfsQBXk6VYQaVJU"
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
