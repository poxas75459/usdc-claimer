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
    "5SDc3MFeDL5RHnAo7GDBEF2hijZSeCRtFZSScpUBHEvEffWbgncCccnKxMr8KFwxxHunT7KkMCQYZXbNSq8VfLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WWBVMuW1yt91ARAwdJtM56MoNQufFyBgUh5dneSt5honSqLUHdn4DdUwk1EpYeiJf5nZ9dxcgamcfpbMfKJwL4D",
  "key1": "3PvTUn9cJgHABtgmagfF6tC3vQchTenP1Gbh9igXvi1FNavjt7v4ahzSduDp3vuPbb3fmntQSqVECT2B4ti7RScM",
  "key2": "54but8CwXufJHTjiztyZETqGhF2aTzrAdx3Hg2G3SurEJ1MTNw6ary2HeR5Xu1RdpE4nbMYL9kgXxkunkyZP4Y3F",
  "key3": "5hJHxoPsMwSM4gFjDJeASwJjZTH6NP4MNMmdpBXkpppDyApFmrcYq9JSbtDHAwEx6BmpEydCbfzPvKtrLSK5BGno",
  "key4": "32xJL5jt2VmqnJctpssu5DWgiHeAwAYmnoS8cWFw2oH4Fbnf6c67nmXu9rs27gxyjZ9rBuxtkawQkapWzAJfPyKL",
  "key5": "4wYm6ph19KGL4GHuAfYqtwe8VkfhDfyVo8TAeTA2jqSWT9rMjygN7qs3o59EejYRZnm8sDUH5LJmJR7xv5NE6XAH",
  "key6": "4XMe5JU5SJLxHLB83CeZSsLVyhY8E62RY3qMv1hEavV3K7F2cxEGSDN5kL27DJTGbhRzVQKvGAu7mdUGzszYLg7t",
  "key7": "4MVuEAQP9Ka2JnDLkfghRq4ameqXD9rRMhBU6Fc6D2NomsDWKw8yBUQrUgsJd6eFmjQWgZ8AfPcfw1YgTUHjhd9p",
  "key8": "3DNbbo22t6epZgPmMkmdd86rwp1L6FGocpHZpDGc8jJB3WnVDTAJsc5DcqYXhotgofA8AjZxSdAPbfsexVeP1Z6f",
  "key9": "5poeAToYkPWK5wkGdUPNVkafzG8d3h2fWVjoWscRbDD22RKaYYq4wmMbzHQfW7dKB2TKzDrwu9jkCW5ZPVEoZAVS",
  "key10": "4kt96BtXUrD2Sszi2T9RvqxDcJQt9EhHP9rwaFEnqRqzjYA3WAW5avzzdbFb7gKZQTiNEKVeULynSEc7SaQijiF",
  "key11": "pKXve6D54jDoLyH56G7nacvL1rF5rGHhxkXZ3rrk8SSsJYNo3ELV5151Xrfn6ARQ23aRyarMJZTBYotL6W8haNZ",
  "key12": "S9BLhfgbqdU7GgJEnEduEgP4xczdbgWWRw4E859TubGJDXPLjMEGXTZJbNgJVKq6PSBydnyskAMYFPxLa3qvBr1",
  "key13": "5ouV7UrYkBHKPD7QsozNFfw2mNDVetFzMgCxms4RqfziMyrwuNsi2iLEyepDsCxKhs3NPuwEgWYw9gR1bthPMRap",
  "key14": "nKLLNiKrk3EnyDfxk5aj9ewp58dHbMF9ZZyK5khijnXN9j75kSGkE7czQLJFBSpD4uu7svq4hAzyyr3McyYwE1U",
  "key15": "2qgGWFdZfSe1mWfwMAbSPwi99LmZTrSCYe2wcVuy1ss6QczUquswA1oWUa8qAp1YpCDjwoFH1A8FRSM3bTwLk8az",
  "key16": "58K9Qe2KsEn2LQzdFeNFgZpQz19FDu4fqvYPYJLdKMREDPSsY7saPPo8KEizAJgL2o5uMz4qBFe2YANA8x6rcPMx",
  "key17": "21yC3cdruCuYKbPPJTRNcxQqWeWcoX5ApYNJfYWb9rULHmsZ6aDbwGiYaZz6R69w4aYWGpuPXkjbdcuJ7VKsScrp",
  "key18": "4ihKgzNM1a7XboGhd9a26dBsiqWWkGKPj52st8cjTV3jWnG1nXnqj3jYcnTDT7UpmCcMxxyB3xcXnytddg4d6JLg",
  "key19": "3dhdLQAQgcSJNFGLeZ2pvJhCfMbLZ3nQ2koTqwbHR8rjXDp5Ti393KBC15GD69WsPFg4msj5Z9YpKNYokHcbCe67",
  "key20": "2sVfr35YAPRwDot1hAkWEDCqoBLTMb5aUNGatg4FciyfSdffG2SxaP2MTGvyXcyxuSRuoo3TydVaR5THMVAqoV31",
  "key21": "5gs8ykesDZjTCnnAqRioGGaW1p6swoLCPptJFzKNANDTRUsF9jXQqhfccS9SimoBFMktVQjqAXMcPr9j1kjNYfP8",
  "key22": "5QvjexNrEh12APmRHYYaQHjfWDWFmUUNMpJ67g1aCMJTqNpTcr1wnSXmotMeMd7cFJ1fPGd83mdUxPor6FWYoCC9",
  "key23": "5KjKgbuaEqTMYvGpRtoMh9ubA7Eet8QP7BDL3DyJaYhiKHp1vzAb3fydFJmSda4VuaEuyfziC8t32RV4gBz994ed",
  "key24": "2Y5F7ZjiRfNFsrCM7Joef6Hvd7kUfNWYiPenhCq2qSQmSP8qDuxHc9XM28qfzKb6G1Tz9pKwDjkYqi651PYDjFUg",
  "key25": "3tp3itXd6hpQgz6dEENBGBYV1nCJkdFGNQusN7tA9NarfMonoVmJp9ojXuWtPaZreg1NP7WdioHonhtHMr8L7Bk8",
  "key26": "4gxkrACe9dqcJi4y5wuVqRx7kM8xjma4piKDLp97gBdTNYMrBrUs3oCEFQbhsRD499AB99uTuHAcyB3M2qLfv7Jw",
  "key27": "43ApjecTtzuwyhXr1Dth4yukmaotiXu9Bq6DiLMnhV83ZqgJYKqnvpdQxso3WjeDon7HDcPnhCQmooExwismax48",
  "key28": "45HKXyxJG4ZeBUKsDU69HgGX4FXpzqZxCrcsJuuSSsDyNP6hMgk9eBdjmzp39Pa9M7E7f86y2sTpQwetvcSt6zp7",
  "key29": "3hwUvg25DPsxSd6SUbwRydMzQ9csbjydgJihmb5DVEPUfXBZn3qFecFnkztzQt34FnP45reZMwR8KanfwQc3RRmB",
  "key30": "3KqHSLQJodphkFLyH6ddH1kJptDuHp6Q8b4wZZAQfv9jo6J7zHjcqNogp3iQUTVg2GV1Au5Nmw1ro55bQiN34K5h",
  "key31": "3AQ6y3dfTvPyhhT28w2H8mQPFQUajKQ252Um14hhsjRbqg6CtSy1WWAxZMe136tdpZfpADKveyGdjnpoBjn5HRwQ",
  "key32": "66UpaPqcdT1zMACZmpsgg5yM2SKWiY16JGv5X3Ao9sMg9XXUvfdppWfY8jbmLejZuZVW2rkDfrJstktNnYfLnRtc",
  "key33": "3eDJwMyRjczBqT9xTkd9ntJciJYadtwiNSin3fDzWEuc8ZZnYWzhLA5JbqUJxNGKLb82CMPYnRn9XYYXF9zeb3pL",
  "key34": "5TWmSp2ugJfyb9g5vaaeNUFoEm5nBtajJz2i4WiuxNdEZnitnBH7FjZxc9icXeCE3b7BK6Sr3bdC18V9DqysmmZh",
  "key35": "4G5Tnrs38wpRyEfEqPg3WV3G5Mum2QW6E5ebkwyVFWnfAT3GBvj2xNjxV1CWxdjkqWwcXRUFMuDRQ1Er4avvJ3BT",
  "key36": "4eVRXUVyY2Tv2Rj3eSPxMosJSKQWkM1xFh1Rbe9rMV7Sdadc8mDwnyGCAAn8x6KaRn2SdLCZW3AzDzGC1PhFbKuU"
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
