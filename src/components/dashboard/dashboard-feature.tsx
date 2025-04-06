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
    "43PErphNneoxeo3MKV1y9qyq5vbW8sUopJwBUeWLKTYpYuw2wpVDAmiuSSvhF8Equi9hB3NTU9gBjp9m479pSXFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65qF7FMCrRyTMLRE6spyjunKxumBSbwvgBSgW1FrDFPqiNxJSq8jut49kiSj9DyZRRDu1HHt5cuGFWtjbkeBHcmE",
  "key1": "xzdfGugMG1a937CZv1XxPcof6J77RerBqLH9jvh2PcnzkbKwTM75fLeFp4eKpvTTK9nYoVX2KB3Rvheh5bZe1Xw",
  "key2": "2sxiZEz1Ac2iuVB3HzyzSfVQx9sgBLap2TG4WibXosBRBAWtNg7BDtUn4YhoDbVhS7WMHzsv5DwtUNcRYks4YaLe",
  "key3": "4hqY6XE4FiSaK2q8RT3BoBAgE9bxdmoCMwZbqcc3AJvXZ4rxJsLJmnFyHFGN2RR81k6yaeDxG8u4Pfy2UbvGsGHr",
  "key4": "29VHJ9QEVCKDFD2UbHFKRJVvHisRQ8Aa9JAP8PQkZ2EkT8FxL7EDL8Knpi9wi84pifTo73nAVcBViDh2Km742ZY5",
  "key5": "4e2A6DkhxikxsqztBBVEtGJXviLTM7LjCJnN13nN8v5gYcLJjjNJFsKdQA58WY4feZx8S4Lh1hhCypGFxtnaSAzZ",
  "key6": "4eF9L1bqXVgTVNSdcZmLSsw6MPsTcNSK779u1ng4HZbChpBRCTnWGpEdkS4hJjTPM7iFo7XWLDjy1qRCzAAfDenZ",
  "key7": "2pY1eUEBJq1yV5y2T4XVnnzoa1mZ2okThvqTdyt4gUzfNvYQi8nSpjufpchv3oAKfFwVV56tkep4NrQNkZqsoj7z",
  "key8": "4TjbUphXuE3Ftr6f8eBBZDiUvrJuUdzQa51t6nSReQosTLv33snsCg7TMqWsFFA7MUMt9R5t44EmBuotGQdmxWxC",
  "key9": "4TuYoKhaeiSog4atCM8AAdFzHEnWFVo4pHj4SJ4SYjaSUBSMLCqzzYuBfSceyCjHwwMhWwPDQvnbnyV5y7929uhJ",
  "key10": "3ZPJGiztRaGsCuQEqt6SXztnL6x1b5HQzhyxnqyZzR8b89Lv6q8LS4ZcF11CpzAdfbShAKAtwNu9mrzmjpJNs8xM",
  "key11": "4L39jrQkuxCRCS43AMGhbbdtG1XhfGfqJXA7pBHGus49Ee1KTjuVbGSi2ETr3ZY3y58kYHmVXakX57cbZr8q8mry",
  "key12": "2pFtjFSDJgHGMc9H2EMGrS6AcUrKBNSH5Ca3rnQ4rdr4bV4xeasNpAS7pkCvUJw1uHGYSUuTCqKoZoaMimZU6ymg",
  "key13": "4LMZkvuYoiS6nZENBsxR69ivQ5VbaPkkcpCaxyEDyDTHx59429G7Fs9LK1GUpVqitcZ6K6rRF6Qkgu5VLiTFpZfy",
  "key14": "2zo1ubP1wAo1oGXkhxtW5oR2RuCFnDdwDX9y2caRmUizmv47gwsMYmQjcBwKVRCzo3e8ej1D6enDep3XumDDjp8b",
  "key15": "5M27vKgAZWsjQ3UwqbWb9kRkRVM97ShB8Q4khaA5qGJ2HCYKc9F5hpKVWSzhFm34GQ9d4CGMq1RNRRxrxAERavdX",
  "key16": "5d1ucY2dfeNKMEa9SwAFB8rvHp732TFMYkK521j6Vs4aGgpVL45c63SZxAnVPW2NFeUbe1YH9TfbbPWjjG2bcBZ5",
  "key17": "3ny8LYndafkiiF6mzdWSxtrKCAk2pRJW77F1DoAmu5KYX1M4vSgNFvT9yxW7hpHafSpWkaf6q2zEv8GZu5hbznKa",
  "key18": "52wGSYoG97SE4HV1FkYMnsp7Z6AJADyR9oUax1j8eSQb2aaBFqvLWsswTzXqpFMMxNp2MqhFVCwMWs5eGx2Cqiv5",
  "key19": "2gxnKo1JUnFK9S88sAqRpEHKXij98S2uMwaWiDLY2dQxB8ajZJYJQCy7LDDKuJL8iqkH7bL7GjThD8Ab5wpKsRJo",
  "key20": "2AsmezNhznxkg2dHRbKzLSSaQRkuGgqYXcVymqC7tXyyQKmKockLPTZTyzA6X1D9KeZgyNJYpzL8h9rQehWh2Yq",
  "key21": "3kEEHbpzM1nCA2HqzovymoYqANL92HCuWzkPiWhSLbbJHHvBtb7geQJreJ2e7Mq5sxLViR6eZJDnTBsNQoerdJ2c",
  "key22": "4Rvg9p9dx7LQLMms2C8xj7ks4UNRfCdiAzed6rHwHFtEkZCoRb6gsQNWq9yxjTMyQH1jRdT6UHdgtdiAMfzXLPWL",
  "key23": "51jbfRxA4DwrXJpGiwYwtwLhNCp9x2Kpk6ybvfxtacWbMs2AJLpT1WUnFYezrjWTNvGS2JEgNRvZSEZ5fMxGctWm",
  "key24": "418N8MQWwwjACAiwbHA2rAwCjqvLok2MqiXkePUVviYXyeJzm61qGWKy4QdFETn4XNQAq5qsw3jVrAwHMnxcZQyr",
  "key25": "2fH7ksRmPxK3EfssgbVWpD7kv2ovPcaceqdjmYKYd5xaAGK7SzcfPhyTRLSm4xAk7vWV1n7SHFQCzxpTD73fYXYC",
  "key26": "4gvsfS2AfDjJbhnwqfE2MLmyfwS7JvDPcyVXsP9NFpbFN8phmg9Fr6cG1f1nTsGmH1iVH1BWXg3qNqjoUyggeq8r",
  "key27": "2atFQewa3ZzWtb4RVd5fSeBXqPZekDyZPDiGSdRj5UKVpEcuzdCL19FkPRbLVDMjPWThtwWYUa4FReF98kYeR55F",
  "key28": "2ymg99wrcaPXKMojPcqgAnJiebQFDEeTBHxCTdpwTuehyZTvoSW7CPEDp2M2DfHcBt5BrpprQfwDiPWg2FX4kD2L",
  "key29": "3ENYb24NeK9LRP2Upu4UQsauNLNZexPLfE5p2X2TvfKuAvjYKSm4Znm2cMm1uLvbuEvEHeMKHTsbbZdH95kzHcV8",
  "key30": "2iTA9iePDsxRW1oFLJtAEkBe8c4gcWptG8hjNWt5vFJJh9YiNYvoVDvNY2seQL5FD69kPZKLVtb4tDfQraLtcuhJ"
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
