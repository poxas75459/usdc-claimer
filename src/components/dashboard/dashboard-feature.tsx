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
    "7yG7mTYzuxQadLgvFqF2vjYW3d38QjLJ5N7ACrpBamK9XBv6W1coCRWyHMV8wFfREFeZxGSfacyPPPDoa864Ejm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zrQJMwEvMJ7d1tiNX4LFA57cuTe1oC72jZon8fkmXcDowY3F2BcwtnvmX45sHGSRBmQgDs7di1tWXrtWDyttdri",
  "key1": "29PftzmtdoU7jyxLbh1KSkfYHkAwsGfiE6Uw5YCTS8hzvFuHAmuXScnYuJpHdSk2SaHE6KpnDeGrvEw5EdsSKAC9",
  "key2": "4CqrzkJhDUs1KjFpxvcfvjTFcE5yt5fABGMpyRGXVi5PoMXbA56CwKNafLzcEvwQLktH5m75Y6FgkJX1wwK7nvtk",
  "key3": "5ontjx89rQ9om2mbkvRRi3exxC8mApN6NvAgbLLFCSECjSuFNqfcJAqmnLqVAUAcuAcoS9CXP6yrBBiKo8fatKGi",
  "key4": "4fTMgNP7yTCGhHyxjNxQrfwdsgbuEmRripLyScaJUHqqNgf9GB1jahJ5TB7XGq9V25kdaiDH72ye5GrbXNZXEdNs",
  "key5": "3EzCEnNUXQgkqQP4n5HRqxDy5h3sGvr1wRSQPXEe1N2sShwuTL6P3oy3fufSDKdc2M85isEpCeG4QMVXCEqFjxAN",
  "key6": "4Tddopy4m5gMzejNPwJsFTP5nGxoAqjKzDfTH4SmizzMZhWAswMDQmBUh1zfTsnuwZthWY4CgZ58aDj4m5LDANZE",
  "key7": "j4ddneoJChdosBUJ3onvhB9Awj54p4V1G8SwJZfY6Dnm96mAYo1Zk2LozASsqwmJWvfo9XvL6QHXAiFXa5wSxih",
  "key8": "3435rLRo5XGTE6ZigoP1eekmn5kB3sMUDQiHjFVSpMwicFaMELqHX69kQp5rLmVSLFjtPeVuVegdPa4PXgLsSfq3",
  "key9": "3BwNJCJ5EHwpUdpJ2WfQcrdSB9XHTRtk7AJF42NZWY2LqDCfgeDM5QguVoftTBVXThhujpaFj5VpPJQGn3rgd3jc",
  "key10": "5HKiPesBJso7E3QBbEotVh5ZRixcYsntcP28ogHen7zTHHJed5bsYoPXU89hVWfYdjnQUq2J87MJQMXyRMnfdoVm",
  "key11": "3gNhAVSZFNP9QynUhhTpL75kVusT8xFYKPA3mFEd6LW2oWgCTshkSf54fngJSYmwS5Mejbp3uCtzqFXSjmNXDaqN",
  "key12": "zsDdSwWqemnmVjLmeQVXZ4dZzKfe3D3wEyE4rc18YyRffwMBPncAyYsU3w5XDX7DzyAmXXxm9XF53c3NyiUA9j9",
  "key13": "2ZPZKLksFrdc1Bp1o8NRsVRC28gpgPm2rqj4Hatp7aWDSvkHbFPoqQZkkTcUadNmNqZbMi3X4uTWEcs8BtttuZmp",
  "key14": "54hpawTkxWd3tbjntx4pqQXtyEVz7aSb15coJ41jQaio1meyYtvQQjt2SJA2jTm5cw1Ct7MUvxAjs1udN4CE4AwQ",
  "key15": "676xQgtePgsfPGKUzy3q61ThmQjot6L7ZYBPz6P2DFc2niPNijBsj8nuxkC4fN68wun2aZRiUhMC4XKMGqztFBDH",
  "key16": "5EGAx4KXBvHGNyMAN29sANkn3Ne6G1MqH426Wr5fq7yJhPnFE2VA1h75sPkG9hUXsQEY8pusVLkzsL78EabYQyz2",
  "key17": "3TsA2XsnPFr4b8pnpRRDFm1zotGNkr4yMqenK9q6drhnEV4TmaRFh4tex7rqyz3uqS5HkXyJq2Hhm4nKTYuB19r9",
  "key18": "4NFjDXUsegwD23yxGdUMSEpZx4eZzuLQ3SR8WgJLUQmRQnsUy5y86aXnEoTgJUEPTtaW3H7sQzbhjL3XdSCtBtnk",
  "key19": "5yy7VP6fUB6Vi9De7TAjFqvutqAwE8pWtjfwcM9Naah6v4kVFMzpns6ethhe4ofoP1cNh6H11rSQb6R3V2cUHrYj",
  "key20": "5p1VgsAnGLfinsgXaEKdJt6RUGgWnz8w81BQYdXSQye7sdj5gCbyaRZPpAs7MnS6RspxzWjgDgEP3NtgzEcWcdJi",
  "key21": "4iS3Qx54GfbP7ecxvKT7MDHbGbBvQH7RegyT2wkntjbHSbbfyALH6L1oXzWT7BNtEFbpf9UqTaPDk8PK91tsitYQ",
  "key22": "oRQJSThcBSJehTMp6a3h9djScWX3yf7eruFrPi91r2TtoPXbjPRJC6TrYd3JNdXpXsvgWWnRkyNzbVpxng6yync",
  "key23": "2nnxYZrSmn3kYyGhY3ifgvUV8jYqXzWH3M8HAndKRKNxq49BQMZcRaPgyqTPZmhH1UxJ6N5t6AAqB1f5LnVV5Nnt",
  "key24": "4E16TktfxfFVuQnBBxNYjvJaYxsbF4oMpTyQqms9XLgKg3yAMxANZF77y1qJro8goqn2XtrmxHMERk4bLxXEcsvz",
  "key25": "GDh22sdN1UzMVL4LHtX1b32nxjQj2V7WEtYT9tnV1uTSoh95QRqL7hdmKM9ynHoAV6YRy8uDqsZA3drghEBvRNt",
  "key26": "fbscqsLAKocc54JYZLfDzSVrbN3yQGxDzxGxhhRrrVE36mHCkgzXefiNgBWjzioKHoDbDtWf8P1pAAuUBCjeZEk",
  "key27": "37HZnQubZoxXj3RQaYChmaFv9MWP2BCy3YScQJ89a7VkabEjUdYex1htxb3RZNFTUeB7zQ8FN5aiYyS4XuXUGfcL",
  "key28": "4sMwLCXKWbU6BLD6h4yZSMPDM4M3QtTzief19kRzu6xSBhMhrid3rWxS8RVdQx21qFTVs7JTYtHmWAdf6oJDuXHx",
  "key29": "3VN5TUe2XKG7eJwpNJ1iVzD32P5UYem54aoEo35aDvq4vvkDtG8fBCScVPLXUQHkiuk9kT9ATbnhxAnAkA2S21n8",
  "key30": "5AquSbR6x9Vwz1Em5j5Sm77x5gtNuBbx4GR3Y3U4Rwr2x3nVjS2A94hiowNWcLHa1MwGepy1jicg4JMiigtnAUf9",
  "key31": "Lg66tBq8UY2qHXNiRYMVsWimxiHuVFkzdh9xT2HMW2PtfWqdM3ewh669Nyc9aXDcd7ytYeFJfyxeCWdVWPMP2q9",
  "key32": "c3r6g61XpU2XEgJReftPBfmmAt5M553oSW7RyVJKKBERXsDc3qCYGeVa1diE9fW26zDiMWtf12Ybaf8XCsCRnnd",
  "key33": "23bEM1vB93Up3aYpBu93Zbc8HZfUK9BbEjSZY2L8E9at64YJjJoyGGM5vzYg5yKG8upieDV2iSaVRExLyLxiSgE2",
  "key34": "3ncUPvorsBWBSr93TgEvtu2P3FXttz48874CNwUABLesoeSEVcR5aTJuBMgbz882CMZRmasnJkJ8J6Aniwrp2867",
  "key35": "4LNGZyfebu922xwX2DRKsEzU1nWgQrfhYa2NcTnNwAZQEnCP8PtPKtNfFn6zvxY2qT4ZU1vHoQKZQHZyHp9h3hJQ",
  "key36": "2MsCDo9yX8hMxeg1b4gAqXVHrLHyrMdJ1kJB4RZWWrEYdLDGVmZZeyugSGW66wcQ3t7Qmn53z1z346AbAmjVZzme",
  "key37": "3WZZt6mgHQa8YkaHWaDijujsvWM3Y361HLAu8t9fsmneLW3hN8ZjPD6tsKs4NfVHZREHzQuckFN8wrHyHqVNSaKt",
  "key38": "3UTA9biqvyh42iESXbuozAqjhptCNmx8BwU4od9eVusoRezqyARQi3HSU9ghTgDLm7PQbdq14v8FX9MjDpM1Z8gm",
  "key39": "57aALNMwMA2dUC7DyLDaYsbbvW1tKu135HyPnowwz5mS9gJm3EJBB55T5ZXnxvsHkJEvkx9TpKMvGF6mj2ScuvQZ",
  "key40": "3F2soaqAwZLiepo7dHtabnbGnD4bU6WEKscjpWbseTQ6akBBwWoXJC6SUPXh7stvcovfS6EDjr2ZKBU4JNPNLwaW",
  "key41": "5p4WPgcqnvJXRJjsseh7ss9MptNRXjxpNVfqrgt6ZFwnwELodLGGaCFZ8rYvunqaNs82tqTTRJsj9uoM3tzs5JvW",
  "key42": "2eh88ABk6S7BWNxfrNZEz3jok8zrbnJq4Q8NVNbFtdXf4SudzXMvzzsn5Z7cBvJ1HDU1LpGp7wBtvPvqadrjgDyr",
  "key43": "2LuroVWdCzzuwACTiKhodYSSE7ugYJCC5yGYRZkQNXcnzMTVmekb32bRpJocFmXzDnqRpgRujRdttCLKpCptCsBn",
  "key44": "4KQQYyji1exqsKLoetzrDnuKod5G8bg3D94p5PQ5mfY96zD8cjUAUhYVyMNcvYXYTFnLzFv8zx7njXEiEWjL75sx",
  "key45": "Bks5of7KxWFw8FotnhPG75ZhisGmxEMbJtVFTWkEtFPTBwud1ZyuvU2RCcTagQTS3PqfzHwtQyCdJM9UFKhg3sm"
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
