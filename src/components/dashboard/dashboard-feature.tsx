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
    "5zeygkedLSk8Dnp96vcg1hkFxxr1nHuTcxQ9HJGV5BbXfieQbs4fn7jAju9UR8M6S6GJvUHLcRfbbRTNhsDwCx1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ea2CAr2r2uMUDXHbtmCgpTMm7qrjqEtzjmuaszghv3grgDkSRRUy7rF6SKZQaVBML2BHmRSJdArjQgCJ4rZtXSh",
  "key1": "29ZrRrBdJpiNAkLLTnpbTnGEZitRV485ZPnRB9GEgpVLUu6YTwwjRxB56stKXYGGhuXoyTUofMEU2DXXRWChAVoH",
  "key2": "3WU5b73fs3uJQPmQ3qtvidVGjCDXCpCzzp5fPn5kNSsKfCpLBjJPUH4buWqee51vvtMabjcU3aSxHo3T38k1AnbP",
  "key3": "QbYgoH22Snoq4TNjaCgUypn48dpmhgytnCLYXbx9fRGArez7FFszQrtBQejoRujrWjb2rTSkpKK9ygaWzrfREUW",
  "key4": "5jFThfio8iQyXHPFH4wXciwrPGC6ajs5DRKJrUA4sWTEL7GknC2GbjPNuDiuaHjZmawpEL7S6irYJ8aDZUNaVAfH",
  "key5": "3G14Y3cCbASoawrukWPhYGffzKgnCTtGBWKgrQjZSLyxHEfxn2jXCURXmsAzRXobnvAcdy4k4SVoRatUjMGBgvKr",
  "key6": "4pHUfyQPVRmCnWtpKywMtAT9xtc5EqhP4gnV9Wxk7jUMieKpSphnnuE445mbbndyzu9z6ej8X35TtwybcScmWSwd",
  "key7": "671yiKcwcK68u1SqyRkL29SQeZ2YcmtHTKybV3Ga9Ub1npVgWFjUhKFx4Z8JSBisoeiFC89Qn4pp7WAaabmb55zU",
  "key8": "5j5DNCxZPHbsvcLy6ry7FdYLJaMn6dzBzWV7m2u2eSHAVg9dYgVsCfai5QKHBz5iePf9W9CnWDp3E9Dbx38fwS85",
  "key9": "5PUQZLmJcQd8SQ6H3REnSyzmn8Ysj1aRgEkLhpudqDR7NW21dmQvEXPmsjXQyWZAfYSHiUfpQ1QRK3zwxu7Xh18b",
  "key10": "WorTQ2oS8Ehnr4KpmTRpQ5kFGpvuQxJ4qio7eEZWADecYHBJz2HQ96t53mvv3qgJYhhDbNkvUqj3djC8EPukrUA",
  "key11": "3aXtbiqYtghjYMHiZ5GdncCjzWmMRu8dei9WNoQxidUHiFdBquPW7sRZeGyUDfQBV4LJft6ubYPdb8AJgtEFeE25",
  "key12": "5CVx15Y69hQwepQu75F819TGaUnH42wCwLKoyJmEnfdWVw7nE1WriPjXDteQ1P6whuVbz4D2mCFTU1PUHYXjhM2j",
  "key13": "63ugJgoTW996Gqgmq31FrAsR4w8euUomExSak59G5Tnt1DwGUWs14WDiLkxvnu3ajo5Hb5xGf1baiu8sXf3fbNYj",
  "key14": "516q4a1L9BHf8ffssVEBM3dDPBvDtT3xPumDw98o99b9VA43yKnM25oZ36dqKstZSsYUfLYTjGDtVQBUtPqa1meo",
  "key15": "5K7Ykveo5HV8iooFkH6jWDbyUJQnmnYYTzVncuTXgL7dKrVgAG2P1VCpHq13gYDKu9Ax5NjxBdPDtajrZzNJhz4s",
  "key16": "2HCgqLRusycJN4yVhpgH3LP8EHT7FcwDbTVbm8hKYBqjXMb4J9vCqXcM313QRzkWMR84jC8Atxs25LFWyGmLgCpS",
  "key17": "4A9LTDC28LPkXc5m6C8yA7xM2Yy6JXnLKvUQCFghdZGmdqCdqjRQCXKSNoqxYKtN4VFmusgP3Y8LczG3voVkh3na",
  "key18": "2ANSTxzkyE4fPBUbKzmHkdCZcRPLaW621v2UpBYqNK4WPYSUvSW9k5wzWX65vgQVu8w19FduZF33GBr3BzT9Nh3b",
  "key19": "2r54d6LmnyhQxTSVoHUyLxRhWbpTPcXwQZr3yzpcdrRF9VGrRsPHQ8FiJ8UWyMPJH7dHcQyPBWbcYD3NMWuRySdM",
  "key20": "488binfavSFLh97DJzSi3x24Yh65Qrt1x1ftAxJB3CYW2mEbAhBaLAfSktgCR5yXXAPJLuRFLf1VXJyaAiNsJbs6",
  "key21": "28AtPR2BQHDcCPRDeWAVAzrj9Pz6D5ccERRtDxaXsJ8wTwFmt7EtzFmiGZMRBdgvrVKhuMaX5FkYPnR5LW2us6PR",
  "key22": "3sXu8pYHQfKGNBE5JmJtibJF7NkKXCNiMadSSTgyLHAMKpcyjoDPRTmr6AErPsvZCBuH2xbuXQWbDEeazi5hXKDy",
  "key23": "5TEvWRCQr46tNUnSQQihSVdkn3rqrbdUsWYej2V8NPLANBHWy1U5e35oqsJRayXJU8dg8CjnYAaCQpzA2q6jND5C",
  "key24": "3oQqwQ7mXPqtmDMYU87tDYgjcsLDi42xGeKcqmXGpoMStdjz7KK6sRTqg1ThgtQamXMU53NbqTKGRHFws9mwhnVi",
  "key25": "25QNZoUfAbseQXtS5FojDd7CoeTmHFMXFF1JHeaPKN855xSkdL7tuJkLQmUqtAa36BWj6b3wRzhfsyTHaZr6Cd57",
  "key26": "5LGbULLnbtX5TCaGaeMC3M8mpzVN1tPANE2hVNeSEc55QQwNcteKgV2z8fNCeJPEM4GnM7Bm2376W9ycTyjqfsgM",
  "key27": "3M2rNiQbLh6Z2617x6s4aUKFT1gEHurb2kNXKjyk9FJNgEUR5przErwmxuQ7Xxb1QKfiRDDUJUHXfn3KnBpFrERA",
  "key28": "2L2WEgsZ6PZDy77GLLxsfrMuvEDJRF9SREf1R8PgAzSaZytTmtY9bcmHjQSfkzSkbeKRKRUneea6ok8wnmpxdSHP",
  "key29": "p3TcKxzqQtC5nfpAvvQfTFpjDhknJG8dmL9j9sdsAgw61SxcdfVGKtJS3cipsuJAhX5unGhpNf8pRS1EaWFwVXw",
  "key30": "3BP7RTd2U2yX5P7nt7PNQKj2g28YsnPJr4LY3njFunF6C4U218KLH6RvEvAsV7ZHVvLSNwFYvnknq3w2R2T3341X",
  "key31": "jK2ciyF1CrzDsmLptqGPRXDzVQTozsqxTowFqzoFCweJCvayDLYVXZxCYBgJognDfAUcdF6KgvTWYwSWtWean3M",
  "key32": "37Lzd67j3NxeeRG2LaqS9FSPzseQ5i1mPDyJGfxid6eDtng81SzNB2RVKEeWGd5yGmTqYWLvyJFmwz5V9kT9VRcV",
  "key33": "4vEvjNWk7GwwG22fgJeZj88usKXHCuAF3wQzqAE9kisiHrnuGBQbdJxK9NiYTFMsZRzFXNwuPVGTuvDbwXWMH6bQ",
  "key34": "5KfxWrRU8MZTY3rwtsJ24SMW5N9KTja46u4tjzm9zNF9ev9PizqGzJQfmtEsRtufpJ4VxtHwE4R82Kzykwr6PgMk"
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
