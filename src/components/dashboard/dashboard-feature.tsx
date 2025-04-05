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
    "2B1kgidnjjFGXEqSyRPVgXZPZLbdUoxsTjYdt1ppFa4JmbpzZcoYHDmapRKusPLvH98H2K3QZD8hAWahV1daNGDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qrLk6gaVhx7FQxXWwnQe27Bir9EeRPZWeLC4bQXrFeRo9hjgxBk1hwRhLpH1LYSY1YyhpJtpA8TynCMrFRpjmNJ",
  "key1": "2jcgLe5wPGNmJsw8rafMHNqYrV85x9HewP6gznx2HxjmrusBHSSxSxhimh5cKQtTwvdanjehGSH72CVNTmodXZ7e",
  "key2": "2FC4bQb8LsKTfruzFFVsW8bWxR5xAiyRH6tCoGzsKfH95tZ8VwPPtzx2i8oafMo9jcJ5iceXPxmn2bN5TyAmxEC5",
  "key3": "2C9jTU7uwET6ktBRd6stXjEP5VQ4fCU7t2rcV7CtcY7rPQLXMaHbFUkwEzkwuMRhq65nGEi6muY1o4Hb2Jji4HsB",
  "key4": "3enFJ9so5PhtVS7Y4T6EUQyz2zLzBNn1UZxZUtPQnPebAU5FiAegBNNePYU35YpAq4K5nRQ2aKMHgKxNfpPDVGjE",
  "key5": "RUxLN4juyUCfsXpdhzbuGkb6oS6aHw48XxdAJq7KqYyouu3NjKm6Eaa2V9ehLLCdnG5gQgMntcJk47hjHFY1CvZ",
  "key6": "8Q8vHa51fas9gdzwfF2o9e7BsHaHMC7AQZDf43hHjTeYQLuPJWgG3mUSR4HeFZK6yraAd7SUVEWdEja4f1NYAwQ",
  "key7": "49JWkj4FDVnEv7zFoYqkhnDWz3Dq3BrdJfzcWWscmbXTSjmXnFnbX5c8VW3KdEHP331Z25scXW7hhiKssxFFKi2s",
  "key8": "3wnX8YFgFRyY1zx5kNJHWXomE3ycy4mrLjJ2zvs4Hq72LKmTCmv4dLSUT5uYh6XF62xmSNSwovCcuwiasJV8yAo4",
  "key9": "2oHA4P1rju1BGRyJdz3uvTCZ3Pdip5qmp8BWgnkDWSrTXZKxovqE58mTdoE66zwNoL3WmuztaJWRV7Ud5SEX2HEm",
  "key10": "7kevm9aYExXCm1GCLW7XAYoJ7tDvB9J2iFtUk8GvhNkCbZtyKj44gkFr5bZV5N1aHWBEjWLmhtAWy9FVXcAFxKP",
  "key11": "5TuUjA2s3xNsec3XP7edxim5Xg8LmfCDDge8raKtT1CbbHW2HJvuePPo7So8K7okXAh3uS9rsvzpmuQerXwrGC8o",
  "key12": "3EqMsiR2pSQ1xLCb6QwSUb5vKH3gm9CoQTZxzYeeftsKF3izdTHJALhPMAhaBq6WfUxu6MsaXnfZYneEf61uPrBb",
  "key13": "5Y39KzYdbmiaWSJAP5x4aMcqg4uFQvquPEjNEMeSyYU1rEJ4TcLyFj26dxuASKynk1gpjivuxd9ivfbtixqk7orD",
  "key14": "Yn8VPWxsqJtMGKq72xJF45teY1fAX3Y5oudazDHEvyo1M8zW8uuGYh4h5RG4iatCVfBaQfbDztbegyxFD8sKN4n",
  "key15": "4HtFG8EiunB991EN6nLo21VgRdVUVWka6Zs1dtnQrJA7utdRNuEEdwCj2NGibAPVC7pstWhTocuSH9q5XDHX8Zqs",
  "key16": "2qEKhKuR4PrppQSNrJTTfBBT4iqfasdEDdCKXuqTKW3XYkqkbdzvFfJVQFUtucUQCNdjEcTJH63PvL73TyyUD4ET",
  "key17": "3Vz9rSD2gFeXi6CE31htDW9pieWyhzdJLrJdZS4rbDzmhAfiYG6g91m3xi6ietGSRCS74FmwsTLZdpfHL7XTacpW",
  "key18": "5Zfz7EM4DRaR9Dd8V8fcdgrRLoxnUTorjJJJ2RUFxG12iVMVCNFR77SqkAGZYVcy2tfqJhzxUB3PEJKdKZFzqUMc",
  "key19": "fSwy13Q9JTkScj9v8ZaLgqavwNt9jjz5UKJ1SaGWraGZp7dxxDAP4CPYzmRcbqXFZ8XDFNhGm4FQGFTgD99kr5w",
  "key20": "3UcVfGSdFCSEq1AJCFzYac4ifL7jVs9GbbVEbuknrPVPPpfccd4G45zo9YPoW8CMMWCHt6UGPWXyUdX2uYEGfkYW",
  "key21": "5psRuZoMe22FJyEdUFzXAW1etFFU3zCE871ck7hjMgrWwcNV3PoNpK2YqW9eZKKSQNDk7GgeL1MKouWdAoXL1snU",
  "key22": "UBiCEGKFZJ56uRQ9QY93Huf7k9AmiUSiiBdP4JdV1JV4eHadpqkttfoK62DkgusHk7aY3CfaYPsisuvZC1AqPkj",
  "key23": "eLw41HqxCEhRdcqaaGi1DUxB2dhXpJfREbg6v91mpQjD5cyZb7PTWcNytrHEvGT3SYWuYPReJSSDj1MjoGK7Jzp",
  "key24": "5HeedX77oXZwBKkAZiKDbACsSYhVNNGTjPMEPeLS8yiJPCfYHg5wvmBDmnjne179MRaJGiG23J2Tw6Pet7CCibxn",
  "key25": "3DCtnEag2cvitUvW99nLY6ScQtFBVBNWMWpGVMaHbqQNukojEYqt8VxsVGa79EruV32ftYd6PTREAvZbaYET1NEK",
  "key26": "2bZMVADBricswUj128WL48hqkYUACM5ji8Ji2iBynzBp1EQen8oDx91inoNEUKrZpwDcq3F6AKrn6VbXwtjRvXga",
  "key27": "5G2HuV8X9968Vz7kz5rC2edVJQhp9mYWSqzeaBqLhDiEa2m7FHhwcb55C7T7Wqqyz6Jmg8MPS2HXGUpLcUabBMzC",
  "key28": "3YHaX44L4s6uEmGqYqKC7DtjWaEq917dQhTXKZ1vhtYPjq7wm1pS8CAyusGVyPTRWNUYvWBmrNNxwUrQGwgJoQ8Y",
  "key29": "5SUamAyXFhBTxVUvcmYjJR3C4BW7ov2SAxDYaDSMBK4XEEfZNX674vcQ5f8o6LozTSpN5uFfDXPktdmphChWDUN8",
  "key30": "5jn8XcNB3LnzNh7eRSBphSr2erMG3jQnmk1QAssfE3YK4iZkrBiPnEv3eTDinqzBywq2oNadwJWjQDsAJzgWHaZ2",
  "key31": "4JEWTSQEa984KC7TNA3NRBqoLC2Wwz1fCa6Xng8Rc4Emx2z74kQNsTfTGQkvjHBoa92QNsBsdoyJRcY5fPmXi1i6",
  "key32": "4t1hJmWJvXuqerBNToyXJTKbqkX6qZpQk1RNDAqCb6xaXst9vDWjf8CPiFG4pBzXzchkAThYfVUZR6PPiJ5KyLj2",
  "key33": "4mBnx8vMr9pPNdpaQF2niat24FobYPLnhHSoc92KovwpWToEjk4etLibyhLDM5hFQgRfAK7g6ZAC5zQtZZfww7Rx",
  "key34": "2HJoWqRcFn9DRoBsqZVyZbBJsrvnTXLU2LXnMzFJ1viyvPkve16zzHVJrwmjHHrjY8u1a7ZX55FqCuKwSv8vMkXa",
  "key35": "4fSbUN1TZbCPFXAN59ThGq3jHgTBNCWsyY453SXvFQ3V5oY9agbt1V9gaeY6RiRrnjXgDNC9VRywoCPMxHQfSUJf",
  "key36": "5z8FvdxMSTm4i3MTgL4h8KwJVHUwFh2dvUVrHN2MzaQF9mumYvuVTyFmbrRACHomM2NH2cR22Gv9gzEMPZkD7YU",
  "key37": "3wd1pwj6DkwcsB4a8ZsCCcYDaRBR4tPBKus5LwYLAUnbSSoTRagadboiksWe88ZbaP16YAJTWoWNhhYWimSmuYQo",
  "key38": "4Hgsf4YUo8Xnn5se4gDm5DEyJ8dExkQSSXrnAZpYpJiPita5nzgxS383qnPBna1wsQ149Gr62Xrjs7kypUqexmEh"
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
