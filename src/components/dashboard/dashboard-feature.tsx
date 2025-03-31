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
    "3TfamQWr3zTGUK2sJYJZn6uBhF3G3No3UBKFJDyCTPnmqYjkn2mRnbvoLDXqhZzaLVLP4Xf5tb8KMZHyqDNd2Asp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mPCWo6V9BK1kPSdhehPpkeEpwAGjJHxHFiCeDPy9q4sp9rrfWkYdN1XTdfWcxeXubXnUoy6ZaGr7mV2AoVyg3bu",
  "key1": "39h5d5SrSRaegLaBALCXTZmjZ4dJVhCP7PK2f5TUypxKYcS1kdiQwJQxQ6MQtuZ33M1pBF1xnu9skKFHXvjkekTY",
  "key2": "3rV5BA4cZ5kFQHymuVH9JEjkqWJsN3Hf7fUkEpMr57g845rzP6ZzLyA8LwZABjbZvxfre1p4aqgi4RmCGDef4nVd",
  "key3": "32Ci8hGTGcubVik6HytR4zbihQ4vwTBj5bE99FHASUd6zvULCbkX6XGg3FPh4B8k7SsqqkCRyZK2ShLm1VwdGeRw",
  "key4": "2Ge9YFfn6PLnL36ZqYEvyjZnvPNh1cF41w3GvhYgr9PXiZsWh9VhSdAukZrWLeE6xYDjpQrAY2JLHF2e9qgzTeKV",
  "key5": "GZhbkSW3y9z3K6NodnGdkDaqrxmkozYofeuG8AYeMoeCiJ1B9pS6apVWmtZdaGGfqZu677xjhLGNKSDHKvnYvAe",
  "key6": "UBp7tgdnkhmnMZsgaYG82K231MnD4YSqkkxg3oW5ZMSkSsrFQcQqB5eZECLCNsMmcUoxLjefoUfEqd3gCXBgqtR",
  "key7": "2pNtjUaEkqk1rDjZoRWtMyXpZofJQEiWfKG9SsRktkZrGALo29hGEpJuUKWdm3bZryzSYuapE383PdC3167EbA9n",
  "key8": "2cQK35WM6GsD6Lq4PSmizydAkZU9ufwTNfzFSTQxhCFCBw9NrnvrithpdT8tVAFVaFwPdCnnKoehivcPfTvA1yKL",
  "key9": "DkfgSAaepQUnsEKpryZcwofEUxSC9PHFJm3o8wNdAW94neVeaMkkqk2WV7x1eESRDhkT38Zu6S5ZPYe8QNXvebn",
  "key10": "3Z2Ab3JAm4CCEUpPb8nLhGaiNrJxAhX192kHax8Yt3ZgXXq1MMxQGP468UXszXzAjKvW9e81v77cQHM2Y3vZrgsQ",
  "key11": "4PpgehE7JDotQfpnqce92V3mvVfF448hkeF2hgWdmi1PyZza4W3raNrWZ3EWx7QHkncD7jR98ig5GQRYmsdY9GTx",
  "key12": "5ibSTuBd6k48L6u7oJ57KZHfFb7ub9hHXT7g6we6SAJn9yDb44G19FdBdiRaaofn7BfrjpmEjVh9mraUPjDzq46p",
  "key13": "2dMCxXYJYmR7ueC9TBXuBEkaQoSVx1acrV4ufPmqDdBHpY6E5q1sny3ELGpG66ibf6uufZvx8sMfvDjL248SFsj8",
  "key14": "49JJjcq25HQR4851kAQAXtv3hGbXKnpz7MwnTPYY8RPJCdxPfJnNRntZQxn7Vx967ec69o5r1Xm9auPV7CmEt5dk",
  "key15": "2xeVdJzzfjVtyXVmTbJyqiwtLUh5i6xoqUUThdUg5kEqzacqc5DK96mBQSoMc8MNqdezAPtynwU3oMbnrY4msijj",
  "key16": "3szxHBk6vEhSHX8Hn13NPoEEn7rLkajUonwbFRm7Mb17LmMD53B4Jzr5Wzq5p3zsVSSj5GJMA59QJLgLgSx2ujyh",
  "key17": "UY6zGicNYE9yBiZShNj8duRBCdyYzMgChRfet1kaSweFRxMjuRfSD58qT5pLVyLdbBHaayfoQRZ1iLKZJU4GTYr",
  "key18": "2gHBDwQiPAT9FU7bbniLPRrnkX5vKYxriJ6bzE9E1czjfxp9nReg84AXzcFbgNfGVCCAVxHotMBip6shXoRG3kNc",
  "key19": "4PkD3tY2dY11Jp7Am8Wwf8FpYNy4M43UopcwrnZ1AkjnaTNLsBaT3QHBmQkzogGQyjVCmh3tp1PeWaxmbYVnGVqK",
  "key20": "3tR11hiRjP9b5FLh3nHJZptbStHswJqDXjKQmHfYT3ZLWjyo8x7yKLfKYUZmiRdFdgYmhm5gTTVTti26LSighP48",
  "key21": "KTunm7bGSj1SSKSp1weCDoKAQp1kf1PUE4HhUHM9qyu9JZhh3GeL7MRk9E3D2euZVkmtMigU5jrRLyJTypx7PsR",
  "key22": "5VZ7C6kaZK1gppAW1NS9Yz1cFRQHVtXjkS1ZXvAQP9i8aPDpvhXiRiQQ7DZEx2SDUPaMYxMvy884aZ1hSczSsoE9",
  "key23": "4a257qXp8h56NWX4o9oA9agXkRz8Pg8nfbko2sRVLvGbexVnRaoDushbgng4tgFx9hDdBm4PtqRYNNUtbn1p2cKh",
  "key24": "3Qq3SErCDuZPjjeHAfGProQfHLENX5rgsKuCdUmNVvqXbUCgGSKaw8UwfstDBpUQHsCvAM6vHy2ihcxf9EcPjCYc",
  "key25": "d7qJUh3W7dThWndnTFYTsL4Avp62aKsW7gXT9PhMVLK7N2dBBg1kG8AQV51vMh8W7vpYiADiMK2kG9dbn4aKYZV",
  "key26": "4ZtgL8SWZ2Py3EkWRL5wm9cfzpRAcPvvvNXt7P8yB2VNdNUZNU7Px5YeryR2N6tgsHZXa1wM62Z7vLM3z3Z4XHic",
  "key27": "3D6pGxW4HjwS2SDMRs2BekmwPidZxBRR4PacAtmvEFoKXydbgZ2yS6R47unKgdntYcSi7UZY9pCuRK39NujUNKGK",
  "key28": "2pjNZemJ73sBTKMrKMVt7J2hQrC4JW8Ma8h4vxNq4ifyZjugWqsbKfyQcQ4GMQT8u5z4yGngBUArVqVLcQYGmnpK"
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
