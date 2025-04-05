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
    "5uyWFN56Ey18Z7jYiUjDnxQgQfiPuN6qmw7PLdw4D66ywiiy7wwo9tLQ4qt8QVhmXqASYyXLTpxCamiuzhe7ALee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PDyaDpRfJEJ1ui6BePsU854Qw56PFxMDEfEpRTEp24sqj5XA13YUVLookVYRZ2o4nRNi2Fo8utNcxEdMm8FDCMs",
  "key1": "3jipwCzHNQDDo5rbmUcYgb9vaejezCPh5co2egRwiDGB2CtoyN68P82uEyU8pv5LnV2P5NEbyy574Y2D4XPQFbQv",
  "key2": "4YW8xgqpchZqpfTRF6izWd3tvh8W6oCP2eTp6mdGDyYzBEvv1skb1LsjmSLzLofZ5we79YUWU5CN1BnRj19GmvNd",
  "key3": "58XUNyEFGCVvzwyjPPw3xEHsR7pRY14Jm9MFLoRGFHRy2JKhRUxSZjVozwbMy8tkaZ3atRuNP7AKthFCpaweDbXZ",
  "key4": "5Z5SHgpzi2tVNMW4E3LW5P62y7z1LPdDjhrv8yDKKekbd9JDmbtDaG5dXsLjH3g5K6J4uCdAAc5XtRSGVGcFJGXm",
  "key5": "4hh8AJ4fRPehkZt1YnpCTbXUHesPqMLimWRHZBf6A9GenajytxL2Gvz2e39SzoGRm11efJuMLcQj8NgwxFsHBsAk",
  "key6": "3SbT7xJJxxYV4cWpMjndRb3GzmSc2hoCRMB5qgpAHdAqZda9aWg4ByYeVaKZBWdcv9XVsAKpdn95zR5PxikS72Jx",
  "key7": "5gPJXNTDgQXUjm13uKJryuXbrjsmAzJMWJ5R1gjhDxduoVXrPSF7ZJg3DyBgBANhBcdesRukkUzLX8Lq7qZe6Cid",
  "key8": "3R5GyJimnGZ1Ns3wo1qEmFfQyjhEwQo65XsATuZN8rPcJzoemK6APtoctY1LTTp9ArmUDiKYQ342tZMoz3kv3yDA",
  "key9": "5J32rNMM9yPTPTL8jRCPnhoGJwkwegasLuCaixwqBTcUke8FwMHPAp3swvRyxgGJYxCDtvjhHzJCFMUAAjihzxwA",
  "key10": "3e7KG31ue18G3cA32e418XwjUraUBtx2R9Mk8wL3avMd5haAt5kFDmisLCZVrLeaGXdeGkkwipsBrQDHmwjK7h2f",
  "key11": "5h1UPvdR32fhGux56RrdFKa7mVZLFeBRtoS9UzmKZZkc3xxLvCevsJvaUvm612GXXw9HFLDitPfUhZa6W12pEx6w",
  "key12": "4skp8hPQYqsCsyhfQuC5en2LHAuK7uVNyk77SzvVZ8Pddcde8CVo8Akb4PADWnLZoucXkVBiQXfwnarCVXdaK98W",
  "key13": "4zYjPm5XChyWSssysMYAZG9kHCdQwHpE9rG2dQvCLpb51EXjtdvvUFx6N8r8ND7fczZZKcVKpd7pXZDVga75odqM",
  "key14": "3nuw7f7PoFvgGCRxD9R8KsDA9nvv3rxYWh3zdSJNRnakAKBoq5gWsPnKuwmLJMVLLd57VUfWEat5HXDeGzJTRkeN",
  "key15": "2pYhwGD5mD4HrFvQHfCEryHSZYSchoGY6Lr8ggmzekUWhB65hZz5iarg4R1oZnqBS9Wigdvn8SnZURWZQeiAaqUW",
  "key16": "UUs3VVpBaVDPfFyKM3u2ZETfhXfdK5nptDKMtXMgNSrSvG8JAMRM5Yib98Khghd261tu86FVw9eyWXifAKCrLWb",
  "key17": "4UbfRdE39d5aGHNhPMEYatmkzTMni6bKUC5VHY3mmEQm8MtdxXFnTVYLdkaWY6pN2A5J76drW4ezeU26otG5HRVH",
  "key18": "48UdwCpckMu1MwbNMxbjWvgHSgTyi33DL4DNf7MdU2XU4GbvzTRrCD8tXYSQ5nkh37n8pYTpcC5v5c8FA2aErFBc",
  "key19": "56JFPLzGurAHtdDRrR6gFLXfhMeinTDNeRvB9J3JvpR3b4YCd44Mfx1aeKWU41jjnQngtMuPLsAYMBnpEraeT9Df",
  "key20": "5prsWNx73vUn82g4NWWoQrH7jfduTviMAczyrrZydpPL3u1WUakaz1AW3AiQTjge3zCtAWddDafo5nAuWFtmoM5F",
  "key21": "4Xm43oj5JRUik5V1XVoqJRHCeLAmXtHMaYPJEwYvV32Giob35bGiwyxFcx883epP3sF2AXyHKXwPtkLzdZt5Tua7",
  "key22": "659Ri3gnj9ZpwR5JAtQUySKkZQiufeRMWXh7J9TYMRUC6Eo7rsUikqhiVDk29ybd754U2ZnnqpnDuxenzEgcPdMb",
  "key23": "2tp96waZWXDYcYogaLC6f7qRMQmXHfgfJna9pun2xLvQDDBhEjoEsbKti5AdyRfNbb7dnfA5jfJQKsF2Y4nwWwgU",
  "key24": "5reuBELTgeCdTBmTykiFfsFj7GxRzqGVZZtiRueLyps1VUCMfegj8xgsriT5MjYRwve96oYzsjZHkni9wp1i2fA7",
  "key25": "27bHGcYUQAeL5GzEvE2roArKivCJV8Y1Dp1QAZ6gN8bASJUX8K9J6RF9EFYfUZEoFMHKByDvZPJau2MZKQEALQSU",
  "key26": "37FsBTALosW2orFuBTVQ4rHbwi74we9esGmmfepcYrqhzSgaGJfRofHG7DcUgMr8BcnAFsRondjFGcZEeDAVHxR8",
  "key27": "sKsSa1K5ofcGsxsWDmmcvEp9U1Jycjm5fvTheeerLi5hL8WWahnngcNTT4XQAfCqa2wgyWvyncK24BDX7AyRgAo",
  "key28": "22pb399W2W9hwua8qRfWZuitFcGhQE1rs3xEQhjK8sNHnbG3h76w1QNHn8Q4qz63Z4denHAYQEzTgVkgHHLQbqSx",
  "key29": "m8Deg2YoCMhoxUoQiKmNFo8M5ALhGUpmYRWgGeCqPC36SDtbcGYBQHhEvv2tnrNoUw49w3F2xqX9ojTgddZGZ5W",
  "key30": "VL1vedU2GuLJHJ7xmuvWG7JLty2byje4VswtZ3opAgfYr3Y9XTZuUAAVtC1HKhLRYUcAEfaSfXsVkJc1qJaWx85"
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
