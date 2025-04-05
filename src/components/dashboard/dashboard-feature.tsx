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
    "2ic5GZ3XZn2JFteTpKf82CUu1EctgWzT61TR9TMfhjGYXg844zPFxzjD96Z3hL5EVuNYfNTsA2KmuSu42eNz2LbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Ubfxvyx9JtErJTMS3KYsKDM2cNpGxVVZ9FG5yyHVfi94KA9SeegpMoquCE71bTN7v88vUDXN8mbbdiVuMHXFt6",
  "key1": "5UXzP8rTmDE2VC7Y126qzNskueEdAREDmBJBU3p6xqunbpHbwXw1pAQ5LZyc6YRy2HfGttzpef8GgU1Ny78HVC5J",
  "key2": "5K2EmGt9zeJmDhbHSchp7d95vFYAaDPSqjevNRbhnx2mKZXKwLgGWDTtwpY5KwTABbWvenVCPcVBvWaPSZe4sUrX",
  "key3": "tFTTG4Ped4CWcyWAp1gg3xJM57ZhowV5V4CbfhgZLttf1yij5R6ccM7qGGMEN9Vzn4DUauCP1PNSaY8jTxg1ZfN",
  "key4": "SPkow5M8YMNJyqde8w8tTgpFjLfnTCuA8SkHhNkhaYJPEbWHh1Yf7YQ3z2Gk5WHzy5y7WPBGYrFeP7PfiL1v5q6",
  "key5": "ekQeMFG5GPQHJoZLcWeKajcCjEGJU6pgHbwGP6VHbxgreBK64ZGcc8S5QMgRFCpfBdapg65z8ncsx5qDAoNGqJS",
  "key6": "45zZnYsA48DRhJE2pgbpsCsXQCk9gpY1fKLGSZYA8onMWgVdRokErutth6QoPxAdLewGcoaJD9dqhKdbDisFhzZY",
  "key7": "2ZgLc6cT2JbqLvBWTWPs6BYxfFoSWKTgyLmcyy4DMWGKwo1JGcE6TWE1mib2nChJ6vKmJCjePqStu5mgJFgc4v6K",
  "key8": "4YfgTnLPH9ZDmjpk7HoavRztsaD4YNwcbBFQkUPjqVk8hWH3xxTMxb9bAyfdgk4upciWCSKu9FGVYRViy5yeCSGQ",
  "key9": "ScvtK8wJwQuEZSXpwtCgCu7eBoy2s4S5yeF2QCavxBAJmxHFjQRsxvQGkd6GBT6oa1yovzLA1CdujFkvowQJW21",
  "key10": "2yfx9SiBMb4SXwvN2FSuZxNoMvQwifqmpP6T4owe3jCGqzKmmqfPNpvAZWE1Ebb3hawp479GfhxUkhzAjA761hT",
  "key11": "2gWkyrrQkBtK7XX5FTynZgYf4RGmXvKuts573V7pgZaYK2DaLtpx3kpokth1BqZ8FCCYx7hbtyjSiPSYoUFsHiC9",
  "key12": "3BZUMXGtfgzSK3ExsvdbSnwvkG3LhXwvEhgBGhE7zBBksrbEXNkmDM39rRGs3MWq1MNJcamqJXyff2obkBNvVuF",
  "key13": "52HmUmCzWyM3xXSXsdRHkVQP8hX8xfwU3JX9MDaEsqWdSkSrvGzUZkC7vjP3DFxaAd6VauF9AqzUfruvEsFwAxRY",
  "key14": "4EeD1zVtpe9J4i6B46d5bDPrCntStd3XDpv78utEPNiWU1CtMKqZCkrdzbvzqMzFqNbnj5ncAdBn5muLVY5u7JDh",
  "key15": "5VtZMkfqJd5TAX75ecYak13hcaMCsm1UmyV4NA7ut5fmTvR6QW38TgNUrY3DojJwZuphMK2QmeQa9aYZ7oAqtb4D",
  "key16": "47cHfz9RAxq8FwTLe36wJSLUrkqFAaxzyddCXh5QpzGZvQ2vBhfpPgdNbfgoWAwBbzAH2Eh2F5nJwDP5LTGpfKqr",
  "key17": "4qwdn4eE7DofgGdbZkmwDsK4p9Yyd83ffkSzRSLVJJk8cJddVaFzh77LRnyVCoD2rgy7wsYqGgw1T2f3Bi7ypUkQ",
  "key18": "2XnunyondtwbttCAx3xrTqwjmayLWN2bpGdiPDJKyENtiBFvX5PeiYK9c7yMKzFfQXErxCGTT1wd22LZjGtm8tZj",
  "key19": "5Qn2krAkkEJF5iVW1vjRF9dxCJCY4UWHRiuUte7DxuwNSegFCNcrKvXAfiSZYu1cR6AR6t2tSBFYRX4jejqDQYDM",
  "key20": "3v56v6qreKF7dpsLRHkJzedht1CpNec21TuZeDdiSGWAyB8ozULVfXBoKgL6MgbEuP36fmbmeFtrLuzNsRWHkvWp",
  "key21": "dPwN88kdX9nPtKjBZY3ui3CQMAM4pqW1Hs23C9iETA3dMvR5LZvhucE6uN4xLG5bkqgQSM6ph4tUSYGZp66Hckt",
  "key22": "5KLcX7DTX8Fq5tTZ1Qrfeou8K2ujzZujrgU4veZiakTuXcQoEwPiyuGETgyLFLhdenduSXSmNpi81kMpJpiWcDah",
  "key23": "41oCpjaHZDLfnVcLMJikUHfjYGfjwpktrkKryA3oyCkuvZJF13FL8ZHRWwouhy37uTXcY6i1YUT8i7eTVNPWWo8A",
  "key24": "25XN9AD8vxTaYhuGAT2yc27SopP7B6v62ny7AQZMJ7Uon29ZniMBp9iep2j7zsEmYdTriKK3PHsRy3v39rNZkciG",
  "key25": "3h9kzZETAsLMpLL8gB9ciZNK2gtn1bDBCPDvQB9tg46JgHcq4PA6U7zGp5xf3aCtDTgqMEbFm4jHnXMcCafTkm7a",
  "key26": "DCYvCDct2ScKSPDrKzPfomFhTTRBNU8TAzFhyVeEsWA4fyhs1wr5T83vbdkPrzb5peSTcJEgG6ofoRvjMDivLrh",
  "key27": "3nwr4c6is215HJEG7bumk7Xox53ZP1hxmkh8ekpHciE7vVN74agUKEiJLBpSiTBvtTCDXUVuryrkCMzY7B79mFya",
  "key28": "2ihx8FpoSYySSPoUoFrRGVp23mKUfuFJUBRaC6Hso6XrrjXdmToWtSr3SuJar3C5PkEDj58eco9qFqH8Vhdn6a2e",
  "key29": "4yB4ZUpbnQYGVFxW7oZ33cu6FeHkwqV77TCzkV8C7SQ9mnfv3cpkff1k1cZ3Jr4LvKeo2wzgaYYAq8fwwB9dDK7j"
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
