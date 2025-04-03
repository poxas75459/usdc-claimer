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
    "4fdvHgJm7fLpdfqjewqRgEnBM9eLQSKuKT85oWhpRsGiryxnpCtuxUYVnMFcjZEhauwZyhuh6Td4uPkP1NHqbWze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VkHkwetF5rRU6DirDrSCdVbyH5tYdX5bRsVqwzneuRcpdhXQi7tdqFY3HBM6TjsJLFNSPunaoxrZQe6AfDcLXsF",
  "key1": "4U7pjNcdQiQraR3MFJh8S7Ax9ckbmHuYCHprNv2T6zxhR23iSXw69WKgbvLWsFah2VgLfv3xut8Mva9C57RYkANH",
  "key2": "3v8f5EjRz1deWzEo44jA1moh5kmD83ABuUx3WMoPfG8vLeUv7i6cAQyD3zmrgZDT6M8MBbzVdYAAxMMgMxXqCbP1",
  "key3": "NvVWV5eZcmR7rhKeFDeq74ST9fwpH71qXc3r3LCsTLoEP1pEPcoVVdXxu5MuUzJis4xY1i6AGYh3iANQ7YZ5Nbz",
  "key4": "2y6eK4Sm5sS481sV3ofZgykabmTL2A6Kpe4HEi9sr53aqHRY43gPhd2tbkCPN6E2CBY11Ftrwtf68YDENAJFrSDd",
  "key5": "5rshHiz2gRZLTykrEARzUgDdEziTheN2ijUh82jBtBpHTfeHuEbcw27EKMc2QwRvKqZcxHvwpQy6ZYicnvhSz2ve",
  "key6": "3HSN8nXazd46y9SxAMUS35ZR9SCpVMFHBnw4SBJa5hkmc6Ybyq8L7PgPUUwoqCyTpfWzXS7FtowncNYjahX92QgF",
  "key7": "4SLCTAPXcFiBPbZHyM4GgDHSgoHJGfiUFLR3rcNPVBNjogjuYjxGyDrMzyuKKLRpaVdS5kKV3HFPoYnEM9KJnhb3",
  "key8": "2uYY2g9QctUd8MQTy9hQrJJUQtcHgBJHZa3uCRjdrbZwbZX4aCwreuTterxhiCRbnrTrUJGDYpipXX23Gbdp4H6",
  "key9": "327U4g1jwqz1Gop1XG9kh7nvan2v1pukJKS6ErUG5RRnSnQuehVxLJzQJUnbHTjq36QynYFRvfUMKbJ9TBz3TmXo",
  "key10": "5DtioYQtEATHzBNHkLuoosAHvEknEkVk8NjBtZsAtp9BvrwBTmQemxrB4z6Kfh1hW5MTBHF4KVpJkhacLFkyx1x2",
  "key11": "388pxrdEim66JrExssSetW5LBtVxUqGbEBUgS3joTn6Rqj7FsmT2prMcEsgas693pzH6em7sHm1AJiA8rxJnGKfv",
  "key12": "2XGxXN5qnrSYuiBVVMLWACiihs6ZFiRYTM2c2NEGtBUcPou9RrPfAx7tH3PecqjcFMaHYjG1o6RBq7fYeWgYXTb8",
  "key13": "4ctve1faKcYHymND191sJVy5w4CphED3CdsDuxvsGdTSPbNYU6SnwHZfxZ5epCz8aGaLisK8irWfBZLxofqPrzXu",
  "key14": "2NMJBQzzucq9mBTrrzGKqrdWn7cHrq3FRT3axBhPYRkpZucwQg4tYMDM9XyGD5jFp7zwEYYbxmYtuLVSUitwQco4",
  "key15": "4CuH4V7udBCsmHE2eXZWsVqzHszmg5U1vfhoeZfYidFJCNzLEucGJNLL8ZdxRU9mZitbMpYp5ouXNGFqEPSTqHp3",
  "key16": "3ygxorCnoVCZ6mL2oBkDdfFAFC848XNixLQFotwYueAD4Bo84XVfRsbMgZkamvKmg4FZzn9e5zNKYAXqoorFdFWh",
  "key17": "5M3ijhU122d74KV2KQADc1X8ox77XH7A6mbA1Y6QozGu3Feap2Krg1apHT9otbH6TXGr9z5fUKm1Qtgg915555uh",
  "key18": "5Joy498zc9amKUtBqoMJwqq31nr4yaZZW5key9VRVazF2kmiKLDFZSWgTG1euxbsxjmRG5s3sRm3meesCugqTDeZ",
  "key19": "2nBuZZvY4ocMh6zSt4DLvtjhfKkWcfgKxKAjqu36bKaZfaz1X1Ar228nLfbBV91emPZQCWjNBr2sq9Cy5SSUgcnG",
  "key20": "3EWe1yW3vVoe8nPxJ669u85WJeAD4hkkyh6f6Q5HcX3cMaVqNYHdvothTvgeWRA67YdLZtSsEhizu7hUCy3g6jAx",
  "key21": "63jKb2DP41NX39W24V3W5rAwiMiqudULN5imHBtRsFhiB4K12XrBKDQYm7GpdAHQppd8aGY6cNzxCjxTgjUcA2qb",
  "key22": "5VjxSPPy3cQWQYwwLHgr6He86yYuvykP7e1RLF3tcVNvaY6DXSXQgh3B4Pvy4QTRfPJP8yh13R8jV7CwMnrnpPEt",
  "key23": "3Mh9WZ6iDzbEvtZwFFtWZ8FCr3PBqo2XypRRaQCEAKwSFEvDB2PRxkmjkEdSiPuSqKwMrRjKzkhDZsMr17uFAdZS",
  "key24": "r4adURE1hrbGGoa1ZiwoXnRbuprZNboP2DKvpomkYbDidkLWdzDtDezzxLLw6FrcVysEUguqFswJC8Rsmz5vjYh",
  "key25": "59hf4JQtrwnFemJbwx2ToRoWX7LduMAA1egcFx33cHyKfqx57QhdbY3o18LEEz19sFK5HQWT4m1Fu3inFuUcARob",
  "key26": "2ihBCnaGZ5MvaUrw2ZJHS8SBSyff5wp8ugv14j38N3tqJsHyg3EcjcXMGpmZnGjPATfZ8Rr18UXBy9tASQ4WcJY5",
  "key27": "DYA4LPHqYe3DB9J1U8XRGhQWitxhgsnXczBFmdwVMATrvkR29QztA7dBQNEHD1uX5q168jpUakMG1fiuq7ZJEBh",
  "key28": "4EePSAMXjyLqbdxbjnPJ1ov3o6GAwUfGo86t4DC2kYit8giP1SQc7nT1efvF991LVsB5EdZDjteb358KnXryhggi",
  "key29": "5Zw8CWztYpxeLu2fNiLxTk1qPpQ7H8qg5tRCz5bai11cMcAMKXYjwdWpxPwgAysdpYeFJ8sT5WB7AZ1YSHmQCedn",
  "key30": "qbKrCK8eVXcQMf4ighz11QUQEN2Jcre2Zn6WDDN2NKDHZyTXQhNQGkHhgTF9E3z5hD9sn6iypKGS2j3nVVq8Fwt",
  "key31": "2GdDS7q2AooJjBnAyVdF8DdPrhhGp69Hzn7biLCqd8Xi1YLqaNNWESGbBU8U6YXx4vQXmErGxbxCxdMJwhgVAvaX",
  "key32": "3EkD5DXtd4uF1DAYWGxkBN5Np3zWDviUvq1tPnhT5VG2KrMstrpLAPqi7iyezoQSZJ9d4fo2gaZV1gUyp7BcJrgu",
  "key33": "wZYoYP8PfZnyTyippk9GbzctDgFAcfx8EHF2p6zw4Add7tovgmYWxgamdJXPJMgkfcgBeUSvEEZZZuepF8KLU1E",
  "key34": "5dtGPidj8GgFN2X35Mv18zmiVt9oj18hi9GoXSKLXKn8RU5VsMAXitmj8kiKbh8wb7Vywrtdb6xWwyyG2AbBtyrN",
  "key35": "21XKgTVkyR6gP6eomSPnjzH5tdWQ6ZDdpDxHECYcskauWyo4CnmAenQqSzz3AFL8YW4wBfHcRkmF2aNK2hUTNUgL",
  "key36": "3DQB9cUwhEHC9Xtr5i17FDLDxdpYQkSX3BHfheBaD14Z3DwCT8tHKBVhaqt7tDegxubQPMN79ZEjSRzXjnG9ri2C",
  "key37": "2SeVHLufC2ooa4hvNvaUMKJTepX5batdAztxVgX3TtDFDhjekVSZ1DPtEuVxkwD1vbfacRtYznEJPFhSFG4HeXbF",
  "key38": "3i9uDfDUGWUMPRV5hc9MgnpypjFCwyeWJV4suneR5ZmuHwyrqt5Hf3knN75Z3X3JP5qvBHKB4g6XC6BMvFwFcUgT",
  "key39": "zTSXpE7AQGvpMUNVZWxEZE2Bjt6onKMFRrLpu4QkdzEwumy8QPZZp5nb19JwtWSpjMSA7J2KnLk9R1xgt4RZekt"
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
