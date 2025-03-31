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
    "2BzUjEsYovoJhqvyFqkow9KT5ybMbqdApq9zV7QMP8X8rjUVZUCd89iKWrUi5gT8vJ8jqSofjU3kZnoBkzU41N1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cpqeLnBWsKBLTkBH6tZdWxx2ncazT53CncuoHHWx6gPzstFbh81vsCqH8uJGfrhJpgA7Cg298RY18A3D2LSPTdY",
  "key1": "2Um1c82um7nYMYSirn7smY3zAHsP4fNm7AjJQ13kAEKEiJFbyCmKyaHh1a7SHZEg2LAvH4YkiSGXANvzTjPpnpf1",
  "key2": "2XhWWwkGhkJrcN6BrvnQPp1rS9yyYMje2cJwT9WkkCro4wgrUd18x9cueN4wy9TdVPZFc1AbDyRAXjGvueE6xMYy",
  "key3": "5YBhPzBDabMGq1h1nS5omRhGpDH376vjQ41my1UcVD5VKoYCDSGdyqeqd21TwcHGPZyGjCi5ZwkP1Cj1Jy8PAUJS",
  "key4": "5Q3HiD1Co32k9WrSKPXvFdTyTsyHAs58N3Vuoz5YE2Eye5oeoDZYfv6HBJWCa2u5nNE3KCJQseSV8togDN4yBrnM",
  "key5": "3Q2GBMrx4udqENG8iS68hTbQG6maqq9R3NGV35amHFJoaHq3P3UAqUwYnyazETmg2jmNkRVcbNBs9ouXmj7YusAW",
  "key6": "2xmN5ra8jQCbE3JjYvL93nYnDFikiFrdSZ4ViKKLaesSRDrnpFstdU7rMwVGzzVY6AL9L8yDYhbZjNPT7D3WA2b7",
  "key7": "4ZtabMBE9u6AvUtNFS7LQ7X9igCNA62j9FjXcSzyaAT51Lk4xfFtPJrREwy4dhW4pPd4emJbvyZPFdQo3WebgxbL",
  "key8": "3oCASj278cPuEjzwdSyU5b9dMEDNRFH3KPi1mvFWv29iqoQh1vL6wbdXDa9xwsw18WYR3gWFS177LVsDNQw79AFM",
  "key9": "5UvdgPXr2kKe8TN2ZvvoWkfZMcKwBUEnT3fekoDcddPB8EYUTGL7nwEJHHmkDV2YrPxqw9x9WZBH8xtDiV3x9DPV",
  "key10": "3RccbJpHVsJz5jXVjvb8ztiH9JUbydKitRrgoJD5Qo8DuUsLYnYVWcAzowp6HxrdhXVp9YhAAbuvHDv3CQMcpxyE",
  "key11": "47SFMEPN2oyrb1MSFgaJYFo53nJWHRoVv1CmrJ35aMMcNRVZz6Yb2j6SgNhwejgChYbcjEWj2JJ4ydupibrX8wY7",
  "key12": "5ar4sgmU9b3GfPHydmBiEvfGwQw7PRiNfCHZ325Nrj6N2fsm3DSUmzF7ThHcCHpKL8shqNcydBcGkMmitqaGCf5V",
  "key13": "3M65KctsrDiWvwe7zfXaxpmEzctWVwDEGQpbR7U5QJdCmPbpoCoD1RLY5wtLgUuMituybXJKM3FkjwoLMsrXGrLD",
  "key14": "4hgG4YGnXirgNbzdgd7BZrsVBNR9inQjeo9b281kJZXZcVNqGEc9XjLMnyULBbdhPVbqZaHZELVoKP1vZivNmpHf",
  "key15": "54YszaAhWc76CFnmTRMcwqhZaKVzE9HVu2FNtTAMFZEWNoiDmVqzRg7EBKbMX4jaLDaNhWCEkdHBTwS4RfeDpdRW",
  "key16": "3hYG3Bfy4gtGbU85wNLumqve9UJoWyWwbcQHL8eHpctX2n1TcLbc9FFcaQb3fSw3rSZftwVSvbwgWwcGQBQuuFRp",
  "key17": "3vqpGFfUpQDetxFTgChK5ALgfAFpznWdjJKETe7wSdnjdZ3KbhjD6wZgfEb67rCbDnsGqYAMzV1UKKg8CCT581Z6",
  "key18": "4qkKjD2zCXHnDK9Tk8agEaMzeuvSQ5pnpLV5fyWiDkweWJGuepKQkoV3hio1s6JuCuXFv9vGomaq6AZR2vJcMn3w",
  "key19": "4JzKHHctua1SsCrPjFqKVTmShhuuaGN8FM15TU8reZBzfgrCsYgDyG49QZ6D56CqfcH622vQcpqaqNh1zKtXxnsJ",
  "key20": "cKnveGvBYJCoPWLocBL6qzwvBuiYEQeuUVyJqrYC5SMSd1353MVYf6B7twqiMUrDi78QRJ8FYsejsTKiMLpCHzw",
  "key21": "4naCTWa6iPXvXhu2kg4n6D6jHdckCEQT35y4C4GdRVpMnDvDKWhwqTAZhNCwpe4TFhjR3e7XFMQvntgqhkMYnSXL",
  "key22": "2VXcjd9Jsd8XGkkuYU2nLpXZ9qyL3x3AB5yVfD4TKLnUrJMKcEDCUAEwUqrLEyqFwfEyfbAtiGNmL2cHUgxNqsx9",
  "key23": "3chuPhBCDyTYfvDfMgzvyNwQTFL4oBePGgdypobvFw9DyBZoeLMiyDEvdLetndjupyn2XkEjsxNbnvaFNu2p94LQ",
  "key24": "3DHda8Xd67ekxqbYyowmfPxQ5hy1gF7DXYhwgFKeVnfeeDSEQXwMArp31uBWcyVsnXowaB5WeQm68vbUjo1Z5sks",
  "key25": "vfdhTnji1DcE2rJJzVpePFu8nerYS3fCTeKLrocLqTxSZRMMu3LhnzhU9eGHXQVczuhhkmjfGAXnj2WD6iXL2Rr",
  "key26": "4GT7B7yPirCLmee8881LM9ZrxZDVUmBN7o1r7KuWuvnGin78Js1Nk28T4fkoNG8tygTydDkZ84uWRUGRaeYaYUe5",
  "key27": "24VFw2HMHQbfZTzjzJVb2iRR28a8G2YGtMd5VeNnkg3J8CZQye5gG9Bpi9pD5hvGS2tLsQqdEwSU3oqHQykXgEvr",
  "key28": "6WHPGS7qfz5RoTEX3sHobBmKfupkUXuhe3MmjhhtPqEpZpeYd6FcKdGTpMaymnHXbMF3bddVqQ76bWi7KfvsdSG",
  "key29": "5QgYuSZB9ZP2p21gjn3eHb23LueZ33RaPnjiVFeD5C3zJLDTE4FYAy87YNgicyNVbhTBNezETASZQjn8my5Rkkjv",
  "key30": "52CpcA8SYwuakd5qszgPHx5rhw8H6WtTkcSnoEfjj6Td8VrpDMFyXMJkBNySKqdULB2sHeJNJvxyviuXCKGyjEcr",
  "key31": "4GyPpC9reLGHobWBNktXgXV252gZ7XpMsqUwUaRiL6pkXBCHNFTpsxP5Cs1gmYMLZiFB2Z7tLEe1o4uLoHB5Yeod",
  "key32": "3FktL65LMe1o6XdXs9RY73ft1gLYrTycaAZ4HvVGGX7YrvbSQwBFD7kWJpMr6zDQdem9DNb65yCKtrDwRKg95Ztw",
  "key33": "2CK49dwZEjaUxAWqoWwmfpVwJsDqfYa1efvJQ9yHeLJAiXVCkL16TsvFYfrCMVTDThy45cVkifLgWivMFGNGYAmr"
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
