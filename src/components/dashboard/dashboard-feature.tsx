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
    "fxxt2SQRxt4U3tkV1A38tkVzZD7SJJWYxRNQBUV4za3Epfp7BauVaa3fXfj7agJ5jDoV4bjtr4ZU4RxcW8kGh1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qWhfjnCsb3SPpG4vgABibbk2d1kvx3NgZSYp3DUdTjuBm26pbNMg1ov8KnymkYRX3UGhQKrGBMuSTUCDfvres1v",
  "key1": "5q5qkYAubKP3W7GtYnXsqBBkYh1x7azYTPfmKzEfkuX5m8rwgZxNnnoZmPruLHTcq9wKHosxTqQ43GbhUT37juBK",
  "key2": "5wVcU6CLrcPmb4GBWPoFxfigtNwxiLexMLjhMhH7L3jgVJrQGob4sFE5K8K3R8reYpXqx5jKLPkHosPCXQHbHyAj",
  "key3": "4DCV7Y4dPK4QMxosQ2TpRy7cNa5z48BGWcCjpL9DDL8jGLWBNUEjCg8mMi4tMR9UQRv7j9tySHGjtvybQH7cdaAL",
  "key4": "35UDAqwH3fZgVTbPNT9GvPkxpKx6cFU43aeMdaeqTYxyw9RWiJ9pchKqijrY6nwKVXCdJMsNLaTVdQcgZLbiYJyB",
  "key5": "4DEmDMUwHFZxadUHAPUpJYnRGEqLaRxdEqDhq6vH1fgJ9HjjdJUjUtgq8CiThuVk7CzhvsvmR6BYqTmEkA5BsmCu",
  "key6": "57mpNHejm7dLpTJb7L6Yi6zuBJd3Sofz5WXLY6WXfBUyWkdwhmzbgrtoQEG2fg92k2TWp1qQ8hRkxEeNVzXwL4nv",
  "key7": "4oqvKyye8PRyTmMFoaAnevd53gVpHAHF7Bss174sBdtWLsR3mdvDXEpQ5KxYRrwj55CoBdZB9x312zZd2KHGTKqZ",
  "key8": "3tcLhDxwW3zEWG2Qc9DE2Fxa73zXP3HiBJaAQYRoXPhbTqzu9j7AbK268gw3qDobLXqC4vZzd5F8AhqpF7b3YtGf",
  "key9": "4qBVXVq29vWQe1nfZN7g9hPU3PS3DBBm89QhEL1HHRwHR8rjC5aWBCCosAiMJiRbAYVzANdHXJ1Y5XkXh6AdwDaE",
  "key10": "3UKrDbpysCCxpQg1esjnAosjVfc1UBtPXBettRQoaTaC8eQSrb7hz9STb4Ck4iwM8443D3xF5K9uya7gTrmy7xkT",
  "key11": "2EdbxHyGRzMZnWYawyciKhB6VJnGRrki4FryBDsiJSG3gYtNnk3qEQD6QyyPXhB6DrtLzBW5XJcw2VJ3BZ9scAXE",
  "key12": "CA4tHiABzeeYb6meuoJk7Xfw6giCZuDg7X3gh4PAxe4DnggiGKaLwgZiBfrnCuyFsJ72fyi2KM2tYNVwjgyA73y",
  "key13": "JrMHkYj9hY1u8x4MBX83WWVq5bHzJhtZeWnNsBh8XagaMiFs3q4F3PWUv82JwYH2p9JKm3arFwWAktoPJd6zqZN",
  "key14": "5SLaCZHCRu2qDZKfBnMSVyCihNnkx1Jy8bnevYiNU4GHEmHB35wQHSuVV2UGfGsvcbiEkJFipjWJCRSRBobon73q",
  "key15": "52mHPpfpQyMirFvg4zUNqDBDRmSETzxTRcub1WyDJTztBR9kmZGKQAhYWCoGjGH2trmjcmMCgKgeLAo64obLXUwt",
  "key16": "4pgC4J1KB1ME146J58fkrzrdkHGQRBbMkVU7cn8JmmEjASM3h6cvB6jsvM28B379wxzBFW5UzSfbN2FxRkZGkVsY",
  "key17": "5aLKtmrCumespxWQPKYvwnZ9Mshg31tZfRV4WC6xFJmJ2L7MfpQSso3hzspDwdHKd6dCRamtvJNVZoSKrTHHMRBQ",
  "key18": "125PBKaUNSBVjKqRjeXtu8HfMjfGmrTw9JPfgX8t67U5iNh5sHs8gQVinsymh99S6Eokcj5wzVM2q7VmjHst8Tot",
  "key19": "yh89cB1mYfjvnZiDP3QXVLYivGFMU3BtJjx4MA2EU7Unz7Ahs7TW7x7RnLHyTF6eNCdgo8yFXGYGhRcvy5XL4Sx",
  "key20": "4S41eZmPu8wQCv8z6vGdbuSUA2pePepdHyPwzKJDyEGJtwtyd68tq9T7YfCWTzbXGRYLUqtPiVYrDzDSTnfqKnZ",
  "key21": "4z22whC3z1dD6KcGga9RjTExrBGNw645X2tuTewMTvjpyh8x5YeueZoRzoMBcrBoAQBYuLu3NZNXstQ9C6a7Lm9G",
  "key22": "5kbbMkzsyDH5wDEoFfX4gGNUov4Sx2ZL4vXZ1LCQUZkTqy4HvBtm4hTo44Pg3cknA6aosh6Go91yyLo54Wjufgvp",
  "key23": "2E8qkPGXi4XHznJNaGjEEPE8818hNP6HijLH8RkBmUVmnj3syk2D6okRP133hXd2rh8PotaqDYXoo88T7vKqEF5K",
  "key24": "4pfhYgb1HMTT7wWzXiDjoznAaPRAnUZ1WtZfbmpVMm7eK4NnxEpe2MMmKyCyjNSu6d9SjPXCLUEweqnFX3QYcsX1",
  "key25": "4NfP8vTXXSBybNbk2ZDgrfZxys5fiXVhgVoweqKhJmFZSJ2dx8ujYhbcW2spZ9kM36qGxxpbxkCvgvsAuxAn2SMH",
  "key26": "3g71Lh4Yo8LyGJEXK1yNtKXUsQtQzL845QUHBfDau54vihjzB9JcGwyUZr5dv9MmPoUDJH2zQnRk9rY2RqWuVjZB",
  "key27": "58ZCXktZvkC5pSeaB3RVVHq99WM9XSY8ovNviU4ZfxX2EuxvXUzxvhgFDGMbabpGCsV8yme9CofwZCPvVEp3XApL",
  "key28": "5PrwX7ZFcxtmxnKChdkG1EM69dhuWJFehdU4GaCVoeHE35ohZivYEguLRtbTu4J3ELzSsAsWsmFCTLA6HDRSdxqE",
  "key29": "EF89gxsktB9mpq7PyvyBN8NdbT5QnFWHiLuuqr4a3mHH11qXUiMASjpfaDH1XSbM53tJ1VE5iPeWtf1NSpSyuUM",
  "key30": "63u34xvovJKJGKvmxDJD1W6BFeU2TpVyaHUwTKoAFqB7xxoRHFtEkx3SVSU5SJxbMaYNqWFqFpcUD143g362jiC9",
  "key31": "4U4D5xCfq1sj6LBCD9nzifgVbtFah4rcmYJDtJ7qAytYzD4h2Gb4nyG99jR8MHTmVzUqfBbj4WnTeEBxc1Xc3dHj",
  "key32": "4iyr4HMkZKtcQcfNAFsHT7zzB75Jg8dmEXsx3ifgD3TRnXEgR5W4PMtxEbD9FjbidLbLAuoB4cHhbFQuUfn9DUqF"
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
