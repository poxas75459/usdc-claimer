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
    "vJ2wKiXj2aQvz7FXqD56kW68bbPkgyEfexGxqGRMXjPT6J4FC9t3doydxAFgcZbKmV2qRzc8DLMf8WKKxL1sYSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zK8Juf9FUuYNyi4eQbZtm4W1cfuEDCcekFH66sPVyoxtXGbY51rYGwtuJDkRU6dJVSfvrJ7CcyJU9ZwQnjdsrr3",
  "key1": "Yun8uuxSvkAZWCAJPiWRVwdqciiS14w7erDGV65d2JmjBSm98UJaJuAHhCy9Lw5LVQRYyVpNLiSJ66P8obZsU5G",
  "key2": "whxh9ayuGBNZ3EuqUgXSsZpe7oEkmLEbLk7otbrUsgqniSmFyuCipPG7mu2VFLjnTuEorAQb3FNhUdR36ST3mqM",
  "key3": "UEqtDorkJ2mfCRJgMsAq37BpzcPNN6hdQyaM3jDZ36mtzifLV1j5GsN1V4fYtP3xJ2BjpYkcLUMQ9nMLGZerRHM",
  "key4": "3FVnEqxp9PqLctzKtBxc3amZ69W2wejdEpDDHHxcs4ktiRzrDeo7jRAtufJKhXwqkMyD51NaYiCPacZ4HcFbzXBR",
  "key5": "4B48JNtmiAUy22tiP38QgcQxDJdjnVLKPeyE9fbPZsmZihgyLy2mbyZqceLWUVMkijHzhkZA1ubcusFmgeyJ4ijA",
  "key6": "28pnHTFFkWfhogPheMXsKELjNf5QKEEa3ryZuZFc2jYqyesHUniyo23o5WxxdHBMPA3XN7jV9rx31KKfPPDsUXCy",
  "key7": "4R1uzRYCC5yA2rszcMsYQhctvPEWY45PfAYjhCt28kuWXGFY8GanELfECC3mzoAVEZUid8TUgyo5QcQEs4Rouz3G",
  "key8": "3N3ChM3WezSAaToDSLZYsjcSE2Ag9jqxAVEzHU8kHXad81SjDGYta8xCEr3c3b6pThmfyfLf4xHgoiKLbzEEmi7m",
  "key9": "jQQHp9Q1hESRGcmfbccRRYB8FSAADZ4YHfZNJSUHMVG1WHug2yupc3N4ZCv4N6WB4adYUCtWMSK3RcRi4TXFJ75",
  "key10": "5hRgVisXw112B8ADHW7WrqMDkPvDMEnwhsJNbGiF89b6f7W7wC3UEZ2bC6nfgtYnxMx1q21LDdtcM2HWVK4EThuY",
  "key11": "3Z9GpnkyQQX8R49PodZL6SqvG3KQVegmB3Jc4B4jfctmhyn35JmAWNkBd8GoN1thp7qCsizymZsXSLGF1U1Z2mkz",
  "key12": "2YHBuTMk58gXoxA17UZb3J8zqvefFPAZaQB8bjXPXhMjbNYJ8UgXoYmFUK5cR1GDtNeB4pLcFDTE6b4kh9Wi73ab",
  "key13": "5QYPXTFmHSPbaRULnnPCi78NgqEGq4JGqjzutxrieDXyYgwJmAByUCsfKqMdocn5Cm3VDvCpUXw78CZmGtuKKWae",
  "key14": "s6T2fov91oZerGtUAFWwfAa6GM1CTnHy3iwSeCCHwPocTYgJysmXrxL5UujBUugUfpYHBti5BHUCBELV1PUWD8p",
  "key15": "5SBLh5tFpkwyiffffbzMF6FWJe9FSY4BPfKWpPVJYRQxSfjRc4Z485eLQyhcBEnBYqgZ3FCpGPJ4YFGiGb2k68HJ",
  "key16": "5YViWmsRi9B9hN6eG6LkZNdNyNRew9rjwR9PG7hwBVePCJmSrCZbZkX2FeTRFZb41sXW9Tkw3BGNcXPJaXHfgXtc",
  "key17": "5JAKycAoHauV6DG9xxmnUNzFakP7h3knke4Zjy6uRUExm36yt73zLJrrTVv4FE27ETxdX9snRMxBQ7oJ5MyDRBhx",
  "key18": "GzBbDGTF8Dd5jvZzzQkesPW1crooUHfhWJsFYa7bEdCd3KcuL7ex6woH8aPqxrqwzZqMALhoTRnepVdS1MBht8a",
  "key19": "5yXc2xvQzzabBxv6b3kcssLq1FHdq5QGccK4tN5HvF9Q3Xer4D9NePGZ44QTjyGabn291hhmBXc9SMpoP29673My",
  "key20": "445BJFU722n9XTYRHfHd9DSw84N73Gi2ds5MpHnNPFGf1dtEm5huZJkQNwg1skzZsgiqG9mC635FoYhLCvomZPhK",
  "key21": "3E2yeHatBmt1bDHWX9ZReRJqytCnN2UN2Uyqu1yQ5YLNkv8NSCKJxJB13xKFcmADg8FG7kQieP1DXkNoQGhFapX8",
  "key22": "2m3q9Adkmsd9C3sgxyihRA1LVZDw8WP96gwicrjzSXbYATWCWwdSmo3pmuQGv2DSPKuwukYJ8wXBaSW6j2zdiCV4",
  "key23": "59YUViwmnxvSEL1KCvRecNEXp5wpPYdUnRBaxtvqwaWQag3tTcf58S6pvMmVfq5op7EqDApNXjqFUF4ea6Ac9H2k",
  "key24": "4pxzUtoLdS3SuWmA8WgsyF2gqmfGegWBYyYb9L9L1NtJ3boicwsXGwj2A6oKNGMvPhHMcLiSTfALx1RVXbzsdeuB",
  "key25": "5aYuQ27MdhPRLpT3RMNTWxgByWdHyy8x2ZNxbxiw9z1edBGff2o1kj7SsoZP52XKe7dAYC5cfPBAF4znCYtGDfZF",
  "key26": "3TBK3c8Zz3NxFuhkLuMsPUBHUVckAEavWGGg6cu5ExgWkwfviLhipubrfcDdgW6GkLKK3QPnJK31ofkaCYmFgM8F",
  "key27": "39yigzUZ6jetFFa82krPmrU7jrmakq95x8eTVnHwtSd2RtZuWKzwwFuvn52WWruQPAZy3xi9zDc8JybdyYg6nsjF",
  "key28": "3npZGzmzhKitP4Cpr9TBi6tMhbN86fPLHPotKPSiGL7SHa51ojYZX5eEb4utxuhKH97cXCC38Go5m7i1BHKh87j",
  "key29": "5oKfffPm8DAaaWU6nHkg6J9nkuxBJVsKf4KTUGDXVAFeRnQ2ZRcFGE4rQVY2Ng666w5NH8CM9icqVekwbAAGsZuE",
  "key30": "5GHuRteUDo5WFHee6PBBYHoWC93hLx5sRhpGedqHm18ovHZDYTnsqv82Bnth1yuaTqdsk1af43PhEjmEzNd99bXL",
  "key31": "38cYK6CrgzzyEtVSibM5Na7pbvT3AQMpv7qVrNzZvRBfKhjKui1zKnR2i7L1oggNhWAdZBicGVCs9t27JHtgyBgT",
  "key32": "31LXSjwMRkQeePPakWo5tMk9o1wh5vpQXAAcCsHEKUwXn33YcNVU2kWq7AYz5AGZ9F5crK31hNCVdm8nWDqivxYj"
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
