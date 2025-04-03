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
    "4ACW6N4uGkeAa4uxUwxWmXEtdyNsi3XjoFBnXQeP1PnQv58vCKqXo8bLrW2xfcEGtYge7aiZ6hbbXk6qnsxRuXNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VWu8FQQvY8Bv3TFNHW8tcW4Lzo9wZhPHmvhRXuZxB7sCzYTuoE7y6g8xvUXtpG1am159Hq5GvMkXzpDuj5F4ju8",
  "key1": "5mHKHj9gJbfqdL29yvaXXzMdnptuQFJyrMECSRTBfargszaGKtL85QrqMMUE9gJne1ke1Vp6hB6UJ4e3RC1q3Xup",
  "key2": "4hFgFrDqRwbo6sbNXLCrbmqsmLtxM9hUpiTYR5ocqBFQgSvTXZDupqkUKBWXShTmuUDcHKxSZVHcSwjvdYyJovS7",
  "key3": "5KhsPX18hreUybwTCNZL64Y1NBsLz1iRfaxrcjHH9m4eAgjziATVANhr1z8U48KRQg7FfCcDmZrxhdZfy4DV2Nsy",
  "key4": "5xMmdySQCSkXwcjDokYbCUb8SdiDQJaujQDPzM2RUkzCjKaPxHhVgSnhxW21Svhd7fK8Rku24fAkRJTM5QMwXk4H",
  "key5": "22HSr9S9pbce9ddbYsmUJbZy6qjkRKa9pC2TXHZ1kq34wJkSee4dR8nscyQiof62fiwQStsCMSnoKC3EwHMpRUkG",
  "key6": "2WRjFn1vzNHHrAfQ1mG2zwoBdoZ1bEsQz9qKvRMN4gMC6BebAdAM4sY2yV7eCJhVAjg1iTF432hfH3Z173V9Njvn",
  "key7": "ezGijmRU6Wew7AFuYGigFTyj1RcaDgAtz1y7edXQeMAa8i67gSqogziGtoyMWEu35nXTrAq28syxxRLx81NrNvw",
  "key8": "RaQkciAvhnoYTeqCVQnkCd3uRPuDseYs9FTEmedzZgtUgzPPe6vGCoN4Qoi64xD83Pao7tuaVDx8tAC3NR9Z915",
  "key9": "Y3KWhnVB7AgzjVnkVj1gAsj3p1hLQDQy9UuE8At2GTAmxvrmx95nBgZQYBR3ZwvRmtcjzrpv1QiwggcLizcSSy8",
  "key10": "3617smp3pAKyhxHLGSPAuDsEhnRRf1KrCYmYMJT3cAA2H9AJpjSX1JCLJBFkCLLyBiEpCvAjkKXCkjG4nkdJkNHb",
  "key11": "pZLUvcQu2uCQpPC7LaE2U475jb1pK4ohy7FipSxi42tc1jUsUsVjTQkGJkgiddguT38QietSre2EYwRwS31dqbK",
  "key12": "Xv4dcXVrkirrEvaMvF3FCyG4m83VQB84tHN2E47TzYgPMsyt8pUoUCWxDw3Bqwimqjct2cUrUgbofGLWNa7mT4K",
  "key13": "63C5bXu3XmxuZCESbsRYb6CgGyEyhq9GmXSivdJZ5Am3DWnF1s4ZFtM73LvwnAjc5ype1sFRRJBh6uS9S7Wi2nmb",
  "key14": "3G9i237khWdziZiy2QC4BiedaQkMz5LCtRh4vbuPb4HyXQP8uSbCadS1f6MEcCozbxbbML7QHoHoGk5gqrvnRUpa",
  "key15": "4vddMjCFuoZ9LtHdJRq989CmJUyd3VxBrkfGCzN8wbmhTRL3zkADi7GjYRRaJ1tfG6Vyrv4u8FsKEZZJZnzUkmVy",
  "key16": "2cfZtjfveeb5cFHeDcuGAhU9HS6DnW1RB4RpyHMfpvafyWS4937WJoYRR5EMqobgStdFuHtr8UHJ1i4FEb6YV9M4",
  "key17": "3XLDM7MbxdbK9WPhZuRQx6fAYoySt48o6hV9q6WMJYumHc5oph75Jjo41A4fy2sVavFeyRKN5QReztDD5cN5UhN9",
  "key18": "4kvPBncoCjB7qskfrezJmp29M25bbC4FdKE5KV5xxX796axYBaiDdLUdXXQQESLyGYBuDEa4r5e3hjGAwnBDDxjM",
  "key19": "5UifsCXuFqazN3Vo1DLSuEQZYJRuE9E3qLje63bNsi4RvaLaXTcmWcUeHAPboDYrG35j9hkFwXq2CrNXDJ8pupyw",
  "key20": "37pGgzjKq6vnATfnXdLUihQzz5z3FCm3ci4FAUDkMsULGpvPVZt4TeQBvAN2u1oNE5BfenjLbN6C2s5xGG1DgQ6f",
  "key21": "3iw22S8PVHBsX7FhbemKiwY48sKbxa5yxYK5fx2vVS2kZUgwG3mir7wsgY7VQ2q2Ymkc5qUVE9dG96NiZw4gtKwJ",
  "key22": "3DmZ3tWDa6AJTCWq1VvqMnY4WJUcSYkzkWaqNTVqvHE9vDXUF9hfVu2XHrPEoH1Wb7irTRj7sw5kCWVH56cZMucp",
  "key23": "5TqYbanUij5n6H1RDtAwSTUoEZJpVCKvc1NCBban84HnFq7DLMhb8vHvyNPpAwpkPWeyFoUoSFu3TdLFBi5Haw5P",
  "key24": "4U3iKzv32AXXzySM1rKrk2mcFB5MAhAUhw95d8Dr9QB5K87VF8mJcxuASAy2iChhdYDXK9uSzZwt9LVDXJaMCEex",
  "key25": "NBjAM4VEA6aerxUounUJ3iyLv4g66rbQgDvMCoq5Hz5BkTmuJnmVSn9HZXZwAtopy6AGYFwCASLQvCvKBxEv8Q6",
  "key26": "4FiUfFZrrSeZTsUF2d2u1sBZ5gXhSLLvLezFSAwD267itKKZorA1ueU4ES6tVA7Fz2b2SaorZT5kTTJtaSA6QD1K",
  "key27": "4GyHCB3Vv3WJ3Wr3ZrJ7SikY8hVU8r9Euuk6NSLk74bK11NLJHdvMSBiu66zPTEbaATQNK3UF45TggSV2mF4Mdj3",
  "key28": "53C79fNYKdeA7LTXXTuTDGLn4zuzxcTXvrVJZznUmtBM8nDSZf5GwfHdyjvSMiY8wnsV9SNfMWmuo3daUQnKBYAK",
  "key29": "64RTGGTVwcv7eE4jorAiRZcJNBKz7HWoysvmh1neXLwKLpCFn5uLvswcbogMs5AVjgb6HXM2kh3LynMiLW9wgRNE",
  "key30": "5BdM2aq8ubmicn2j1q8Ag1gFywps2RtRTGmmnV3b8DnZWksPSzXXBVyxEwUYmJ1o2BnF3D5xhcW4xhh995L2UMkJ",
  "key31": "2DohTRpEZGwqsJmL38B6hKXn7uW5zGtbFMy9BWmaDbjyxZCLBwzBxJx1oiUXY81VAey7sMcJZkqj7pzbihRCxJE6",
  "key32": "2vhETwR7RaxwNtWuFsn13dSigYoxb43yfTx4S2JuvmokM2autSc5pPCPLD4mssP2r27yiyFXrrbuTbHHYFDvCe3q",
  "key33": "5XRGvEDFC2N515LTThFAqyFhNWHnz4d63UK8tj2toiAGR5hzaAUMXw7DpvksumCqn2Tqrtkb4CK8bC1nDGwwGWd1"
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
