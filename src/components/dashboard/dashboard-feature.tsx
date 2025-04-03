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
    "iqDQK7zkm5R7jNCGUaJyGYzUzsqBpqmJ54DyTkJFHrWwvFz8caG4eVHV1PCwcS2Y5TZz83UHB4rB7kUaM1WPcaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LQ5wHvCu9mWxuFXdCK66KQqk6sHqwhwwvo8yBuiyFBd4TVFXhhFNmekve2ofFfbErwFEvauASxRRgJo86dgCsX",
  "key1": "3vM2GN9vvqLVakS9rEpYdQM7j9LGNctkseTyVPB4BSpLD3aaVsM9xhQUHsivaYCQrfWyrAUK9Mt5W7pq863zDQ4C",
  "key2": "2eahcCiUnZgjMuFydvYTDburDH3CKZVrNeNPSAx3L5utZuUS2PgwyUsyvPmyD7Hgsx7bgfAq4FWXKDZX2Lb2Boay",
  "key3": "5LuUzrjWGafZrk7tBbD4RyeCJ98hTXJhvJZ2Ui8EH8xiWjFV96jtiW9A9Pn5se5PnkV4f6vdyD4e7DfW4zVyEYot",
  "key4": "3JBAAd6oMABeb42a1G4CqWXrDXRcivAc7j6THntbzFw8WXttwVRwsFs6fQfZQ5BDpCcyYLf5ZsqW753pPZPFmMDE",
  "key5": "4joVLymNdTHUMFY2GvWUntSqmLJCBdMHGc8T8eyeJ5HnhZb1ouT1foh4Xukwau3NrrmyAuuM5yYYLLBTc44paUrc",
  "key6": "2iT6aaJN22DKPFAmdaFrSDGSt9CMFoBmmCF5PrLDCYcdb2L54FZ6ZDNFm9ZpPFuJVy8DuxzWoKcgUWxBBJoynb7P",
  "key7": "5m7cFYW637pR5xHZDnZ84CuzHx23X7sS99gDb6CGzzor2LqMDGGEh7bvBpLDPsgWADBzePANjFEgM5yWGvMCuyiA",
  "key8": "TnQSqWE6Rbseph2E7cFndCeomFd17WgAfkP8avovbb5fsVeKEGy1hgViSxuShCxcKWhiFDm62utaZ6Vfy73iSY4",
  "key9": "cmsyz3gG3UCgUbdfBSAScxmZUSdsVytckrUypoWqwU65nqiykQ8wyMPtjW5E3eqBYukH9SMRvaCFYjMSx3nbaxB",
  "key10": "5fJndFRMdiYJQzv4NXFqJbmwnsQkPrcvEKUZe6gj6vaGkSnhVkTo7jUutiToex44juf5ATBXamahEsTJJu6riq8W",
  "key11": "5HSHTkMH9rHnTH2sE1DsJ7CQi4m9yTBRBvr3EbDE8XxJieX5ghmDS6qYxBbkJBNJq4fcLasHK2juEHB1EXy5Hbk6",
  "key12": "4CkcCps4qDWK8zuLtSxa1H6Z7ZU1zZq8sZPXDTiXqbAUX15erqjp36HbuUttNdBRvEZgHGKAm5ZYQz27crX2rW1z",
  "key13": "KB6gE7fnT83xW3Vzd9fhKyvhpPHWxeiwvqt5cD9apsZaBzYSFGEytiPQjgL8uHRw4ua4kAaGtz4TJbg8L3uY3aY",
  "key14": "5iBfHMMqC4u5AvAc5q2TeYru6zHcMztrNok2RB7SqhhaVpy8GSCE44fywwyBixRf2Ldp9oY6pAQGaWeYzu8BUARk",
  "key15": "o2PrLG7P8huK72gQZQTm5S8QsKboCijjWkNoDzNyoJcLoDPhZf2HucnGEsnMrCvWw3xVdewuRxBpcAsPES8UWHJ",
  "key16": "2BRpUVeuguyTvzVx1XCp94jrgi2Utwvg83VBXJhmFGJGDeZVwkdXNUsuhHoBg3HqczPJXao9G1yGRngT38x94wZu",
  "key17": "49JbmYKfdK5TYB7AbzNgUYR73JEKbBhH42zKrLNXeENKkKuSpquWaiKQYjdb1nyHoFTSwh5tXZUTYQ1E5VFMwKeu",
  "key18": "3krR3QVNxZuuMbbbZHXWfFE5QnG6JrtbGPqGVCNicZfaiaHaspMziVGYwCnjT8MSdn9dPum8pLjHqC827SmpLgJz",
  "key19": "5mhUEvhmqvbYhaJMswBMSVedy4Au8bLq2T376TCFqEdH6u1tGtJVLqWS3bD2RUMA5Ver9FHurtcw6j3FfUWad7dK",
  "key20": "5APxvVQV9uAeNGcPravAVWsnzgDbv88WWmGD7GzWhNmuNouryPHfekciCUsq5eBzpQxNCcq1Fq8gAuwLVyb8AtLf",
  "key21": "23TACvVTVjZYYneSGkmSbgojXW5reXddX6Fey4R9BrVzePuyU1MmBKLLNXsDqVRWUdbQaAcady8FdTevs7uVJabh",
  "key22": "XySh3UJJ1NFfQP6G9goVDZA8Bsp8R3ie1NR48owpNgJKYieJq7WRhcUQXmDWgFqj2xDyKpJjY5rau7NE1LZy3qt",
  "key23": "3kF9qfGyiYb8AwYbJvD9ZjwnpMb7CE1tYeZ9qvagPyQ83tm7VYpGmQG2TnUohkRYGNBtT15fiHawE4SYqcQ3FLJS",
  "key24": "2jE4BmEjuzYKoQnLfUMruRq4SBrkpc3RNTPx5jSGTQk4gWMyS6FstRG5UAFW7TVWcMSy9egsAbvYcyDnqBDXT849",
  "key25": "2J5Y68iasfQQxYTqx9TuDcBzQCWktWA3aiCTYuUmY9p14uWg3TC2654PtpG5Zte6mgV2HntMBCADBA6Y8zEHqiMY",
  "key26": "617E6SmkssZBtTbhKqQyyh1kignudm9rz1aVnHDq1VT5r9TXWzXxhAWfcsDmfnYSgPNtMfCwjdesUgnCpP4QjqA3",
  "key27": "61kwMg3WDQFhov4XgvPTARKUWZHjsV3w9BNcfbMCznv2iEPWXfzcpbRbHRt6rdisrZoGkCkXhmi8uJecJjP67Wke"
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
