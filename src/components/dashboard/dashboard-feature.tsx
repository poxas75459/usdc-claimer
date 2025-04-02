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
    "67efyTrWf77NYvnhztNg5e5838sEw3XXfwX2qaSx5DYjgGfi8tazvx9RRzpQDyKsnX13WpUCpGj84JVx5vpftUip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35BVuiNmZDDWDWihK8AML1B2yStcGjQgwAnvccahagRLAyt8TL4bzRM91FVnxbt5XNaJ5cuJwsmE8qjKdheddVTz",
  "key1": "5XGqWmUkKvTqbZfhYBYUKBDSVFWeU6uMg3zhE5NXdSBKHLBUJhtJnTdKaNxToPoDbVLxjwSbzPQYEcjd7GS8f515",
  "key2": "5xLCsH2eibXTHi3xSUJAt8Kn8NwUfnsQPYDaVZtEFUf2QuTgYngyZ5hiGNXRaQWP44EHLTu4wxepUJ7ZMrmD6py9",
  "key3": "4HHBMdi5sTkEjBvWBvkoS4X9V2VhjvnNRgbu29seMLY7abuPHzMEuGigsNdfki1fMFJes3CbsAkhv947eLki1Qsk",
  "key4": "ZjPE7sZfRF9tnMPjkhX9uht6r3PhRt32Zz9YGZAbt7ZxgMc4PhHppNT9tw2D5wjvDzEMt91PsdRfMYLJaW5r2Ug",
  "key5": "2i3TqnhYwNXDYDZrAmQpsLEn2zgHP3oLhG2Wqpb67eRybHofhczr6LieaXPaMsPthsi8PPRJkkzpBmrFvyfohKrF",
  "key6": "4oRUZb5ef6dfxCUH4j7nZmceA4wa5eewhFRfuHSy8ctZVGNjPvYuvASDaP9WR6yRQLc5Dxptvxs7EBCxU4dNviZg",
  "key7": "2rthruhKfxNkVsaEG68SZySFQZE5baxVo3R9gHPckUa4htqGcExr2WFz2vqxaGy6WSBQ7t3NwVMhLByE2D92d7a2",
  "key8": "3fUzwHcGEBnA1aCcWuHeCGorPFDaCdmw5aPN7CqU3sWQWy2Wgz8D5qHoHeoYPpVCbuNK4BFR8uBbLnvmgFVcFdJZ",
  "key9": "3maneArefXTtUo2CaQvjW1v7kmfFNFm7hQxVS6BcU9Wpvu8rxNohd53kLyRbgtdmbZF48PDxdy2Y6dn9AxYxzKm6",
  "key10": "2ihd74Gsv3XXfcXiptFdAZyQs1jWLCQiEYEdMDHUzjZTyiVdeA2eftgotjAvYB4Coa35JSiwqzUuhaqBaGC4FCWZ",
  "key11": "272fKdwFMpX6gC5nszdsBiYE9Gcupcqsx3DrFcTQbrtbKAGUZ6VgwiUQpf7p4Ubr7eJmm1aWqCeZ7amQX5ucrmBt",
  "key12": "5WmBoguBGpRxhmUnkCnXnDribktZFNgnoU7ptaR8EpSkuTp7VQGRHoKSFAje5SmxaGbgDXTRfT2DKwa7A9qgvbvM",
  "key13": "2U2RVGvwuouXXF4RoQf6Sfm5CNmC9QrPoRZiebrtMhr7Gv9JK9ZqdA8RkLDrBD2UZnn4MthRSe9MJkU51mB1ia6u",
  "key14": "3ddcBWvoPXX41MK7eptcjn9yVBVtr558ySQ497GoCQoisWMvWFSyUQFk1yNT22u1zUftT86BeSy9pW39eTvrWRrs",
  "key15": "3rgLfZRBP3sjGwvj3MpJbVZDHqLnVMfUDunyw9QbaE5afoqDSA1snK9BhJZRZwixBTaDsa68QRr8PBPwHwj4Sxpm",
  "key16": "4ux4tnF2r1feQJBtaznoVK7rgrPrSHafDRqHvNk1kWAujP2GPWGrZeqifPSmjGi9who8FcYxj55jor6c5wuqySfQ",
  "key17": "ggNacV5t6HF5sc31z9BVR9B3D1usuhKZua2cH1KA5akqtmzbEjmktfST1aCSgAHVzpY2cwD76c5No541K4keJu5",
  "key18": "3SkqHJXx9wTHvebfEqKXTQwA6ontLdQgAgae2tg46w82p5HRHZryCnmAdKvuNiN8srfrfWojXoGYUCRKZDsKD3om",
  "key19": "2dy1RsCrMbi99DbwCVJDNkndP9JSHGHBreybQgiENwQn91pT9J2U5ejKCEKdhaXyYRwEGHAURtEwdFDNtpmtcLky",
  "key20": "42htEvqGbaccx5F4yhKft4gyPsWZEMyYst8kGegTTvw6goGoijGq8UBhoDPv1LFQSGCh99eX4tXQgZDQVpk7RFaN",
  "key21": "3oYnXfuoXZ1PbRwS22DEEJw1YakNf39USGAp2eW59gmpzamNeKCRASsUR9e1W2bQBPGi2pRTBX9Y6qfAswiSvxbj",
  "key22": "2PD8qnbvGoQFcAc9YZpyKfvfwtPcVSxjPVxVknGxThAfreaRoCAz569EYhd1n8azADJZgcqBS7YxrPfn1xLn9c7V",
  "key23": "5ryKKYawxUBUJsaBpwZkiStQdPwEgvFVvHPbWj7Zf7EHQ1Tfvrxd7PgmSsnsA1YeL6C1oP4jkBWh7dxPf61uZSPu",
  "key24": "etZ2MTULWjdLdEjnosoXFbJhKBWsM2N7GicJqJyAhF6aMmeqK6pFEAqAUfy6zP35LWgWCRdEdgkeHEdwrKfRnrq",
  "key25": "6EfGrnevRTJcQKk1GsryKMb75yGncCnuX65BDpyVnTdNwNkDHStbf7cNxaX2vdBLmQW2YcDRFyJUt2JWFQ9EdLM",
  "key26": "3XfXExvejmooveWYCSEgV6Yvq7myYSV57CUVHqf3X1nVNqcL8mRSKvoDHut2EVE61iXqh7k2kTWccebveZBuVdTr",
  "key27": "2QFkSZVPt2LKdhTQ4yVXhg3MXjGc9RpygymrJyjVXe1kQ39oFhPZiQmHQkbTHPBnQzR216JPLPDZojSUzWqhGBo6",
  "key28": "45URy92oU5y9eHsVtjeqSs9bRRndoGFkvycpSDRktDE3iH6M8nRF1DYnijykBrnWRAAeL3EetmzozwF1ynmkW7tK",
  "key29": "3EB7ZQUZuL4yvEQohVkZCz6wnuuMPbjoWsGUzAkTrWMHsJzBrYWUNJZwXt5K4BUV1iE59zJN56788QVXBHGYL2Uq",
  "key30": "2F64vdV8yzry1bkg986hap2hkdSWkC33TQKm6hTxb2LaafFfuKqbXPsk78X4VrUmtnBxvPyM4aVvVzdSgeHvS27m",
  "key31": "2VVCt6cdDnxM1YJ5faoQWChY7iWgon12Pum9kCpagH1hCHuBvSWzuwqbDdGmz6Fut7zmv1dvmftbPxQgKJq32sSD",
  "key32": "3jEjEaH2jnzc6t4CgeniftrHQNofdpzh1veCurFnNYaBEg419uTdgE339Z7CSJ4bkAQL6oEMf6uqxKk4GjrBcPnE",
  "key33": "5gLKcUV3dE44JQiqKxa4NGuJmRasxC2CA2UKvjnKFNrX7vFT16WXVjNtiMTmxVWLi3NUDHcA8pqeBApnfUbJJ8Pe",
  "key34": "4ntFX1jPgvxQod8Yiyw51efuxkZoUCSpuwnZDY5MiitkDcT18xHaPGUnAapezcPj3QBY167pEB1YdKfRL2eLBDH7",
  "key35": "63u8oBXK7e4Hdw21wHdZNUUSb2rfAvXrpUsdtosbdFvjHhfjF7xyu7ASeTVnvCHu2Kf96nm2RCWAz9XBzX5bHH3M",
  "key36": "4yAaGbxTrrcLmkgAHsJJRd1FCQgYyK9aDtu7pERQjVHHPzJoXvV1BF6cr7eSpuL9dNkvrxCNCskAU61r6Ec2C2R6"
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
