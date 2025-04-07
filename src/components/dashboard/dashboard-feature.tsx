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
    "2DbZdDZ9hwzvSBP42XpdpMDCLVqhraWHbiGgr6EWJBVjzdJnMqZuxtE7EMYiupAWrKpsG3MotjXEW7NE76r2UgcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dJ4AxXj8DSZgpucN8uZjiaGvrkPm2v4BrJjySknpDULr1upbeswDAe3mqkgvMMVoX58r2c1z8zco5rC3abQnEXh",
  "key1": "3s1kkLFwM4BohsBJypMCrqK5Kc2FjPZASDqYzSxcomm7QN5o9PJicdYHh3dSCcnWa62gKVVx21gcbo6LVvUa4RsM",
  "key2": "5irpKf3tNa6Pr8mepfatxfE3WwJsu6hVqcrqS1mTrFhgU7CBCAYRDTeiTWXFuSpMFkxCLZYofAVoRVYWxYDLW6ha",
  "key3": "4MbGA53DTsFrCnzqtZ9Y5z3myp1PXXYKPneyRdUWa3NDvFuctmYcpAVbpJmmd3nRo6M1iPU9DTnjcrZryWGLrBpJ",
  "key4": "5yeMxqk1e4kCG5jvR7wqeuetUCuM61JDfXPU1iZWDVewebCpcyqhQ2xa3XgKMkbZWSMzbDTx8ePHM3aEEhB4J26L",
  "key5": "5nfrZqYJH8hr39GaYr5635hphHjxb5ix5cs2pL8quoTgim3SRnThU4NHrA7eSYArxCYe25iBWPV5QiGZ83XjxsVS",
  "key6": "33ra19UqRpUKcsQzigBGU4rbUDVDwg8B5iEkhjDSfLYJTwG9hqj8sQe24E1iQC5hVQ9mRKB87FGoGprp4uwkotY6",
  "key7": "5xqQzu56K24aUam3ij5WrsuqhXbgsPqsQHAqRPzkodMkmJHgVL3JHPzhiMKnmxgzVPGXgU6Nwzy85n9aVjzAyxBU",
  "key8": "35h5AJeCwyT9BKbyCUBJjBqaqoiMQt9PWBZ3wC1appRTJpsxg43Rsx9qJ2x4SHeeAraojo2Ri2guv6ZqhHNe6u5S",
  "key9": "2mvM7hzRVsEcfkiWjv6emfgKpYVavZ6uQTW9mqrYqfnFybDzVgdhttxVXhUWA5tJ6ScKHE78LfTyzSGjJdfRNkoG",
  "key10": "2MtrV1nkXoftNfD5HNVrUTpuXeVTdKDpKz1jQcmQtKxwyZb4zPsZedLqKsykKWrNy7Ds7LHiLb3Rem7yT2Bi3MXi",
  "key11": "3LAeimAs3uvXGBMNECRDHmFS12MnM53SJ6St1hERix5MbdE4M6y7zStLGEvpTifowPRWezuoW8aEMco2Xti7tuZb",
  "key12": "3JSG72Mn6mkBLRtR17y7VGFNPjgTptKvUCqjMr1tYzJxgyUavNe5a8FDVAVLDndHopMoXx5PvULKKDCbeWGHqxG3",
  "key13": "39sso1EmqcKk9bvz1SVEXJnYS3zzcVE36M3bGqFGUXH54Nvs7Bnp5hPajNVmNMumoTkUd2uorTPCGHYHXQTkgvQF",
  "key14": "tb3GzzBm3vuJ2ZWh5BrZC9AJNTUs5ySYuwHMGN6rw3gESR7JkNrzUMqGbfEVXEfd15WYDVtaYsoYgRdK9mmbkDj",
  "key15": "k1NBvkKQJtykW3yDxgco7gejmPBtxTHNbVVaZNYab5iePpFoVWEGQcAt5ytLt2fTNsJ7X7TWnhF1B8ZV7Yfh8TY",
  "key16": "25L2or5ZrHjKshkM6MYwLu66fMJ2zTmCMdxs49hm9PBz5ZJbpCx5YePancNZwa7R6DWMZVif4HGfg44k6WV7548i",
  "key17": "4Es342a9rKAp2vpvQHPgVFN4gB8VvBKAwNSr625ps59zBremZuFE3m5iZmvNPugxzV4YVHqRusFRXvLGKcqMXWwt",
  "key18": "4XFExP4nGTuzM2hWSJNfcrBEFfu1GepCJJ3z4FpChwPzDC1jCRZfWTNJNTKSPbhNBymuR7PvFK2shBFcE62xbB4K",
  "key19": "gUVNeJE8ASyDXXRgPAQfrZcERvNiVQKydepkuE2fwHjHXnxYEa2XVcbtW39TjhgPTe4biVG9Xiies7k3XFhJMQ1",
  "key20": "2PR4x1PJgDpyZhk7WfsXpZzPqwGGHiBBGtA9dCVjrfNDSnQ2JoaqFWndcrbKHXegMZSkQYT6h6awgEmGmFqbHGQR",
  "key21": "5tc4aWiS8ksoVVJFdB8CsKTarUQ5tmehvFAbMTJLyeSBsUQqfT3W6Zjb4VbVT5c99e3cu3JVYVEpjjXsP9L6YG2i",
  "key22": "2NDyoyE8EKohMFLwsLkneB6vS3VYPLvgMFn3KnKbrgWivxenrB4BswVqpv1sEUi4M4B6hBimx437SSaSy9hDrwvQ",
  "key23": "2MHJsF4GDc8TUwHeUS9jUCCKKxA8tH4sdbDnREAs9wxssAYokntARefmvZD4MxkWHwUp5TNkgao8jYm85DZ6jPPk",
  "key24": "mYcEVNdbJhhWkujoCjd215xMS7CwmsRcGTjKLaKHaFHzfDkTiw51pJdspsnojJC5sRzZDVTgvMzdZt1os6k4hp8",
  "key25": "3rsrLkzGNuqRsChpDeMUfGsPY29K2LuyF26myQJBmi4as3uuGkgYGUapEevjeAYCGcVbH5Dm5kWPMLRaSt4FBZFC",
  "key26": "4Z35tb8CcnRk5ehjsaS5BV8gEYN56AL1UMaxMaRs3EDY4XJ6xEu5TASxM6KTUSNnqpRE2B76TU9naKxScBemPWE6",
  "key27": "3mu4M2dPjNtiUeYDfxRjKQskNchruhp6hReh8LgFRniuZZKQqq56tfjmppxpi1iXs94wkHB7rbeSZhhc4j4Atux8",
  "key28": "3oktN35KbuRQUDcGd9MBh1Y6QU3QvjAoQ5VerxXCFj4FfBoGobCbwmVyLCDPG8M9prLrsm8ytdL4zdneaJ15vHWt",
  "key29": "63WgsZuXbWjRXY844GekUQW3mt2Pzafu9FaY6nF8couujdNtcorjNqPdFaGniiow29QkoiNwvpUaY71XjeprGHoJ",
  "key30": "4LG3x2o1GNqQjPdGGgq9DeagzGVA1FNQgKBsnxEu13TTJNZntMBraXv2Rtysxsy5NRbDgm9inMPRML5HjMs7c5x2",
  "key31": "3YnfvyHwHYRBM14XpdPyL4BVXopcpqHDEabC5yB3qN5o3MmgtQ3apYq3meCrmn8YxGD69C2xehHtXZs71UDLXqPa"
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
