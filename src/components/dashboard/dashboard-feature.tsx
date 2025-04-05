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
    "3PuMjKPH5uEBRpdefZD867g2bfnTQXZSpcoLuR9sJZ5dogDivNbsPyJYoc6azgR7d9FUCVZJRm6At9VA1aACeWkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HSQETKtoqRtUTv7fiv7o2XQbj9abD4TyWf72qDvdoXeNkVGAxsypZAi34jnTKVe6RyxKH13MyLffjrpr6YSKXft",
  "key1": "5DF6BR6qPsUk39UL1ewgwzTkb7jDituj8f5wVQ991cLwpgQX1HPGdnoJS3PwpXM8Lwc5kvEYo6jWUEkYy77ErjLf",
  "key2": "tBCkKyTyzvZRJZhc5HPHtu3zJqZBu5KHwy2JRgY4Nyc7kHrzhmh7a69jkjVfrupikkMSZ2rB494LQTMj1x64FnG",
  "key3": "5ZcTRucfr1tRRZQSxfEFAR7XjUmYQRNeNHdSSGh4fUk1z46G3mvKEx9V7AYhGBSmoyTyuC2ko7o4rzbY2KKZ4Hfj",
  "key4": "4D4ggeNbyrN98LD14RUbhFM9kmb5Uc2CakfFizEAwUyifReVyAeeWS5qXMo9LApKAxjGPdPa78RNfn1aw1tUHAkf",
  "key5": "3bVEafNTWJVAKpv3iMMFj8RAZgQrWfVWbuqw1ZQvAxKhCvZ1ZF37D1KuV4doLL3ssCaDe4iZF3UgKq2DcLHVJTrb",
  "key6": "34MdeWEGsyWEBd2aC4UGtSLPqn7Pw7B1D3cWSpf41w1s5pGYxDtC34ThMoSbeaNsT7wMabgsArmUYmTNbDAshnv3",
  "key7": "KvBZNAgoFJTSrH16SSJzWG8SHJBSCYYHGKnjrVxx6cXW692UoHzpqLtGoVuBWCBSTKHmJg1c1U3vxAsQuTPXcMT",
  "key8": "48Apt9y6e9tEwSj9Ckoor38mxaYcFACEsiMXDTCDQDy1YLteMuhZ9hn8bBx76DKrTxq9qNxzdjEid6PTUMZx37B3",
  "key9": "2eszXKhzJTaZzhHKDtaAZwnbg49zpBNyjrqKbhWveaxd5PkLsuhpJ45apeJ6wqxWuf3CiKQhtXioqxfpDiEUtotp",
  "key10": "3vKQ99bN2esca5fRd5GN7pdcf1L4ajDEga8CG9HUBDvnGbWvn26gD4eQCaraxmsVutcPMLwvrQpbaE58wGtBvfHZ",
  "key11": "381kHGgz8XuhoZWrjCami7CpRa6H2Pz6BBQhhWHuQCSUpYrWt2h4pyp9zytwyXYV3X58Fw1y9G5sHfCC5FyzWDhf",
  "key12": "5JM7fAxbSW1hSeaS4tjyXp7sJmNWr52K1NCLfzRp7E5HjVY9APCNrU9TDyXQJopbNaeFW4wiZXAhXUW8M6DYRNs4",
  "key13": "32tYfLcwmbuq4nuecKPv2BmGSHVee8EEMbbGUbp9arwyofHJxGeRAorZfPtrxdUUqRfuUkVV4hq2xf8SQuPhxmUi",
  "key14": "5DAj67R534PzSYxBaPML94y8Xmq9VaNtQuZrGNQzfHQxqMAM7cSCqUymm8G1EbKpe2HfV5rGmYzYvLVV2HY7Gy7W",
  "key15": "4gHb8WUMysBebSafi6iwY3fkKf461UeWVmPzhqx1M3kdtbGLxh48KG3cjoywbLX82vD5UBpGARpyzXGcdRQmKAg6",
  "key16": "fPsSAiw2GFnkXrNZTzY2Xt3BpAqjETqUUmsSrHWXjhkicetf6oNjWGoTVSy4WUaShqistcTuZ5Z9w1zhUQs4PGC",
  "key17": "Fqr4K8yw2oRwh3nGickHbk3h7trvttq5VYEGYZZQZbnHWjnrEPFHfVqQay34LRZcVjQ43czAq3wioUqXdhRF5xA",
  "key18": "4Gaf56BPVCFDadvVLy7yRtEVeRhXW36rJph2oAm3jRcrCVyMwjPWyaPmGghg3g41ZiXgYBsvf642yxniNNePZfuj",
  "key19": "283vss55xCdeAQXpVie7eHxpQycDLxmhFg1NHZT7kBei8R73vwLHRhWsS8YkKYbhid93kyoQVwbXHYMrNsRtSDfS",
  "key20": "2vuRq3gtevNWRixKXTwsyWEj5MScfjnKy4RZWbwYmXhhiaTpsviJTpz3xSQKBB2HRKvozoiXW8qZHyDqSdnLNPAz",
  "key21": "4A3Eyj4rXup7Yw2TR3PiweFfcvaEmMcRnWtU3Qs3UHfHRFJfpTxh7N78FWNAGhERWf7bb3UiMoFqGvcuVoj2CiYa",
  "key22": "LNEV5MTKfMT8E7QdMagkmPv24aTdFt7dnCpBj8T9gR4gJ8K4PXzmo3zFeiXKr8kM3PPCJ7KRRXGoRyP11AJ9CZ2",
  "key23": "2ivkiPmBonUtGepCJ8WAE6J1B7mbRmpNc1y6PzHKyxuhhnjX9i6W5LVwuTsYpQXqoJW9CCCP9A1JgYwm3ux5dFo3",
  "key24": "54NgJDCW1AimcL4K6jmBwDigHKyPcRo7GU6tfUsSMHpbo5zpCk2C1MZjbGrJ4NKEo1oEFTAA7EBbXnByF7bHyKRK",
  "key25": "4stdAexu3Vfs2DbUBVkf16xztLPmPaB449e8ozrnAYfWJprrttAjzwbFwLHvJNLdPcXvgZiRTtNtbyk8EVMThYcv",
  "key26": "5ggwojyVtBvxdZHNv4j6YTB7d1cJks2ALjgFeb4wmWKGtE5V59WNhery5CaMWZWtG8ehDT5Q3Gp3NBzrGckFyd58"
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
