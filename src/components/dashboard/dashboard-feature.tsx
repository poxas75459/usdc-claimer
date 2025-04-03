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
    "2xTVZ6e8LCNoQZhtDpYZwJtaFvatNJPLU9pvakvFjZLcE11AZnRYPvgJzv2CqiPhQGwmkfVMxSwhc5pyPtWbgCBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fhFAWzXHfeRsrfj3E6rj8idVWzKLByk9LteTaYFYzh3tHjavLVqQPEFAgXJrnNnN3y8FaFdziFyFr4kU45oK5fM",
  "key1": "2E3Y7UYY8y2UVCCfw2JsaSpEZ2csgCx48TgrEH4r5PC6E8EpYJNqFwQ2CBV7EEHPEsvK8TVJujuGuGByces6Cdaz",
  "key2": "2kRawwGinUKvVP7E4BjAQ5LJ5DZvjA4d9cskGymQyVPGrZeobABzay47GDLNY1xsbUE1sx3CfmuxDVTy4ypeai3x",
  "key3": "5nn2KiW45C5Ux8GMfAcXJav2AELkVvjriojLQDPbkKJexTgbhgTvVwisokMgAuX9E8MCdFWymR5mVfTAzKSq2H6G",
  "key4": "4ydyFVsvdufFRPHTXxWLeJSpNoBUsWmSJGvX3LMfgGygSqZM5K9PfpMjQ1DbFHEszrJfwq5gFkfFWP5dMcB6w3HV",
  "key5": "4wekBvmgcQgDgo4p766xAmZ7zeLVhjAv3jHboR8eDGz2pQNH9Lb4Ugu2aVFZnTMJEvZupZqspbFaehD3SWDyWpW1",
  "key6": "5bQguKxfaBNbkicG4rSbAU18MfDxQLDvp2uFpQrjpYeSyr7yi6fKc3rUTZ1A6pDYBnwEv3afh6GM8eHNKCm9ZQLr",
  "key7": "3p9jKJms9qrsBrebcCmSs6xKGzFWWfYpPEkoT5GspYy7RiiXXDzJDSR8bJU2U782WJwDgeWp2NCGjVQ6Dd2aXxEg",
  "key8": "5kyJirbhDRw6WCzKHAm3sVtRLBuCMZPYD3cbBcE3qCXqn21Ug1Vh5hCxoBkhRptyEZzCGCup7C48SRPJJAadNXCo",
  "key9": "2G6yZiLqGVehwHvbqTdLoj4HTtaHGZ83yBsuf1jWxZzp6t6g11s6jENKP1bBXqEW27xBgLmquuFVwGsgJnNTcMxc",
  "key10": "32dPfWTQ7CHiEG41Q9h9FW2pRcyuo746dcQWnjZSc1fusSPcP1QNNZ6tquV8xRJUeta8LSiKrjMhUqtcBMVT8dYZ",
  "key11": "2Y3ZvHGkPpbkTrqV62trHPGnVTr1xNMcGdnGinJtzLxuzwQMmW2CSdncFFbMgtB7pC9KJP1XehinWn5K5E3YYKP4",
  "key12": "5LMDHVgJVm3PgSD5C5b5PouEdK7qiDrgJ95NjfUgwjLnTb9WcekjAYJr61aoZ4zcNqfgT1WHbc44292u52XYKy7o",
  "key13": "32gdiWkrMsWQ6BUUSEynXEaAsizjd7ZVrCPNThaXaBvMb46rtSAeRMPerHjVtMMhfN4bHz7R8WnqQsZuvUWFkbC1",
  "key14": "4jWtPb7LKNtquPdTfftzSaF5uQTBfVo6xXRvoQxB4AhVpAS8QCeNvsHkzisf1hVuzftdtCYW9uhm879h9k5V4L2U",
  "key15": "64tCAjHbzi6wx1cUY44ndF3DFrKnjin1jEqicWNyjAKVdmqfnE9Ri31TQqFzNGfZpEnGDgLwTc5gkmFRYcLt2Cst",
  "key16": "ErwyHUXSbzyTJ3UjmX5RSowL7oJ3NZ7mbKEwHgEfUnkHfjXwq82ZJnXK9YrEPuaEbQA1S29yCZK4S2zy3LLNXiY",
  "key17": "3xiGyutgdWKsBAetMH3essJ17PugTBPXibHZtEFra369Cp1TQgsFmmNo1gYMRGoLpYDPidQtvsPpHx878XiJA2ur",
  "key18": "5NdGLcGGk5Ws7MCfR4YGLS9rAqj1hkTh3yHcrz1CkPKZV1M4UgNT6db9Fq2rwPXzJ3KQe2Qmex67Vaw6uc9Ky8qa",
  "key19": "49Au2SqHNcydTH2ALAom3hBfBwDsSM3cmAFZ6nXYZrV15hiocpEps8JT56PNfd4BPagcTMtMtBZSdmEbTnySpj1e",
  "key20": "26paWPiRYZz9FaogsSiapbinisEJbo5DwcUG2Zzg3XACniL5tbTTKdfwDh6eJkM2qcDrvJkaMmEKepP3645zbJEF",
  "key21": "5TtjgcNZjU5ZEzyNP4tNkxy8c56zd4bk661ytmpoCe2STmw5WB6DKsJqXtyA2hg9vNKH6v2PZ1H8rbCDrzfzQ4Nq",
  "key22": "2sG4R4TDoiQ5E2Nk9PhsBuQPTQTijjDNen7vSLMCbMSaoExognbP9BSznBYK6vXbjw2cw5v24moPwwv6Shq1JPUT",
  "key23": "LAYiL6MRa69ECCVwrJg8MArPAKbrvHsNMg41RqgPtnQmyWLcbRb5bcdQz8nVxv9Qj3PHdxJdcVvVPm9E4fbYfYP",
  "key24": "5xK2RD9Gs4iUNRUvu1d8Zm7S2j8uiJFvTLJZrAKpT8PGAQ7zwCYS2RPbnkvGUEmA6kEatw5mTHHTFzpBwopjD9r1",
  "key25": "xxV2rF7DTygzbbLangTWQkPUWYZoY4yy6tm7v9zrLzQULopftJ4PYNcwQ2mQ7hfjMeNJbs8cdHNsudVNXTaLi1a",
  "key26": "r5NoSQ3kyqYfLtD2emzxujRKLWagUhEctUyasriWcuKkMxCGdQinV2eSC8SqXbi5hS6d6UwfP297CRJiA812wWj",
  "key27": "5dHgbtxvLfFfFfEt9JZbNmkiPt2GXjRYYrZyUXhV8Bkpp62QKLWr7GNv5LWxv2C8e7ByAnEHaawEwHYpE1grWtxv",
  "key28": "5Jat7uX5hRUCtnS7M1rm5CySe4vXjP1gKHRW8FecrSprskqUHvXSRtNnLuJF3HHUQq4AF6n6YwJMaaWFRLGcyGmu",
  "key29": "5RkDJNXMZPMYU7aBmxdkeHKK266Hyr8N2Vzy7fUHUw8sTUwtJJKycn8RBbeaFD1jP5o3fN1919w2gFMYshUyVE2e",
  "key30": "2VT2aSg4YQLjZXPvsjf7xPADM5otJJVER6M2iizN7BpM4rZBpLdaBTQiEZVEvkdgUqz2vUVfuZgK1QWK8YnLDcTb",
  "key31": "5mCdEsTvqNUNsxDosEW6nZcwcRMCnKmaTaXDcj5DyKsmp1TpZ81WWyfzVAA9UEmXBYT2vBKQzsFLcdvmKvgyQGio",
  "key32": "3LNj9WtjBJCKc3cwtruyxVQDWxaKjJjkzdsqeu6Fqd73xWA4dfUxZ6kwkWX4iBvMWtp4dBBWt1X4KihtW16zdVwn"
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
