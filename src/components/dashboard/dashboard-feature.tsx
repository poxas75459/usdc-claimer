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
    "64DkiE2YviCzHjqRDpBv5ph6h8CzAg1BRGTjQcEmw44PvJhsR2GJwMfgHjAKjQZfr5wiHVLmnU7BHghPXLN1TZuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k2ogqQPVKVebc6w69hBYzxSXn2zW8DkqBGxry8Jc4QNRUpXgbBCqJRebrcc1EqH8E89yJyssmjHMst8EKvpjhAQ",
  "key1": "eSFNWMjduey51SVbgKoewBd1VDPxPmm6qqJtn8TKjd1PZqFeE3WP7xDQYY7BDF3Dnowh15Dt84FVPv6n3Rdc6vm",
  "key2": "3J5vvUgQSd8FERCyjjrdCpKPbABgTVbw1UNthc9jy4QWFFT9D9bFUxLiRtNEqmVZVkL5a8GkbFgkZbLUV72CKcYS",
  "key3": "74SQrPWRXghSZovwSt2xL3CLJgEUsCwCbwQhi2R9Z2rJYG2f9cw8MRGwrPTX9Z43jKgcfX3r48vtrwvNkEA2RcC",
  "key4": "5DDxQT1os7r1V2oUwpajtd6uuUT1QGVLA4i7CLtPNPwXg92cJVQZ7y38Eo58iQjyzVf2VZFJx8n6KTJwz1pVw5KE",
  "key5": "4VcquLqumTqZV54oiiAJk3MfUBpkan5LAk1T3pK5jGx3SJaMqan2R5snTQQm3tNF3MSjaGaYyLyMsq4jnQmYgg7q",
  "key6": "VuPujqdHdbP67HnAuoKR1r3RTsL2Vkv4WcnECxpfTTAfdRpD9JQEk4hfTDbJENBPkhoVGxXfiqRQPLDkp4us3pa",
  "key7": "3Cu6W6WyJz65rceqESFVvRVvQKZmVD5Ucg2WEnLSkLM8DDNCQTo5qjoMHjfwG2LHiYCpJh1mTXtdAqxMK54E8UDQ",
  "key8": "3D9tgaMFu7bbSfDFcixav6RCaWSq3ee1Jw6qtfy75ha14bSjGAZj4g8Y8AyhnHRE64xexcS4gzQiK1D52DhKhtpS",
  "key9": "G8RipseeJAb1kLy6ykN6c9X5WTmyHWDjo2reRvL5RYPgu86Uc4Kyp48sxrXUR3QAsnq6bqELhjyYCB2A16ZdJxg",
  "key10": "1g2m3VUwXzbu2buyw7qB9b2bb91FF7E9oEGqf93p7uzbgcrsqKAd1sJWhFZoJP9ZsMabQ6xLQY1cFtPog5dvuBg",
  "key11": "5JVDUMaePzerAnzSEUn9yZmhoZpeYkL6T1EebYA5BXP4B2fPDtL3PizYHi1uAEEyJL59GGnfhtS83A7vUxUn7Dfj",
  "key12": "3DSzfrprBMBecacRpiYBcVWhqwEtWL7smQyP91mBX82nVcJvcJTYFyXVBHkVBvDSCUZE8G1vdYtdWhrX6kLXbGaZ",
  "key13": "5cdPV4LcgpFWoeNWUfd4vnThw6sUPFpAGqwZyYtSpmw5tNd8uqw6FBSuCNcWx6fu91ZxC2ssL7y4ZdpqjR42Yfx2",
  "key14": "3fLUaBr6PonrgCnsxwZKSyFsa8W8BGYJMWo6TzNvFFo3Kc3ByfgjnA2wtA2FPdXFjixJLJoETrLEtGQ4hXMp4L6X",
  "key15": "5cviWWF2QvPE6tZSJ7NeBHGcpqTkremx33by8MnbiPZrTAr4mJSmUGawv5pLTVoZkbR6QtYMPxwQRHmNjRV5CLQj",
  "key16": "5fY15ZzQjy2ixLSc3xFAMgNVvZ4dgv2SeAE3KvpaWePyThPvDdvFYa8rG5FohLmRbugBwU4dJ4xunvjDpjUaKoTa",
  "key17": "2HdNDbaADcB7LCq3i1NARM7AgqUiXapK6SdUwG1ttPXa6eEM2iiChSk5ihQQD421JZdnzCxmyBB6v2uTFUEUo2c5",
  "key18": "5FcCAj5xKqjgCLcvmvxFSrxmiRZzvf2yFfPSzr5atk5bG96B5gYxiD6DHjABeTWbmtVKkHnA6MeZfh8H9WLo8p28",
  "key19": "2t59tpdNE6P5xbYuCnJhc6Qe9SQHsmGAyBxitYZLXjZ91KT5txmHZomv1srsTzXV53ukJQQ5748gdLuvrk8Eq5D5",
  "key20": "59YJnDyCzvChHabh3mpaZgibgAeTENCUk72rtETZTGrKNXdfHeH63Yj6Jt2oHW7VVPoQ3rUGekihiad1N3fe9MBP",
  "key21": "Tz44Tu72GSgcR3mQSEdNoeiYsHUTZBTxsAhRB4FMNCqYH398eesuz1ZWXurfYwPv54qaCNn1S3e4ZAURdYpGzCA",
  "key22": "4SxfoVuXf6xLn1KSzrXEBAH5QBRjHDJCeQKUs15zXJfQH5XwsYtGfFf6g6xx4rUydFrQFUwrpDMRsyiY2mRCwHBx",
  "key23": "3DBsz2EiF2v1HrtS9BHQCCNMfKiJyziGkTQpM57HoHfocjdMsNzcNYmnh4cbadKxTH29orZhAiCNCunNAWz9fZqP",
  "key24": "2Anubydf4nacJB72PQ5hDpFaVDd6ArYrae3S9hWjAnsjbpJ25HUfpnwd7dzFhkos5RzZTAM2YH2prvmUR9FhTecf",
  "key25": "5wkuqoGUbsrFwhLZPGRjthpfARFTAHmFeuYMFjxPmvap8wQud8VnJeKmpdgKjxWghWqCHrzqKUXYXNHD1o1AgWPQ",
  "key26": "3qrctwnmUgKJNRQeU2hsWwjZLbEgwbfPfTZMAKfq2PGQ3RsnHkkWkWriMXy6voeuVZF16yqzmo3DctNUa3senGyP",
  "key27": "4Xqob54tndt1mAXGQDjXADb1UeAN4dVUBhfk6UBoS2pc5ECxPuubxwpLy5SwDLXtdN4aH9FcfNNhsg8cGWKfRRuV",
  "key28": "XogypAEGVgRnqoG2C7aGmYyzpXkC2qRwBpobnfwZthD3yWSGwRPRugrLC83EtBf5eujk1fAGJUhSMDAEckiJgYi",
  "key29": "57DW9rUqxt6v4HQWdaEjGn7YrVnvT2g2H9bnm9HE53L8gnhrGsxMtG5tiybj8ZCWRNQSDt57A5J3Hpy4CWZX4Y67",
  "key30": "52cYkr2rSKSt3h1b8ofTP12MzhkWSsf87YSnFYcTcAptticEhFwgpnSFpWufKDCx6jvR5taJ6yJ75vKZhfCQ1VB9"
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
