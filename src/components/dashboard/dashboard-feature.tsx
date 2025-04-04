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
    "3uCzxBpT34eWE2fd519buBcgb28t5Qq2NAFYnsFNT5PqGs4d4bmd4LnKfqxxftMU7SwFdd1HcmEHDemwBDeQsNwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yK2dQRGDc2smdFbPD6GYrnbAJtyfLPA9ibaXW63XLBrnTUHKpywy3SYMp6zzBfYenJqBZpwmzwx8C5UZeiAtVV2",
  "key1": "4SwQGK6duuMrPR3E51nC7nH5jckxBwsHzAKF1y6Twa1JbX9yHQCpt5x9W1nW6MGgESLMCa8XKBHXRK7nAm7bvYva",
  "key2": "y1Yd1F7GrjtY7T6zevjzBt9E6Vdjs5PRfbTBoYiJSDQ3kquMGiodUYPEUy7VSV5J6wTgWTnT6X1joW66YGYEJ8m",
  "key3": "Rqopx3Cws1hoFFjjgFLe8JYU4csVXD6tuw71Pguaqrb7dgRHJDxksuCZAjKkGvi3syq9hEtwAKXN6gPkAx5HLrw",
  "key4": "4uyrvjditqDUSD61awvyDNQjjGjpVUSPu1LfMVAddVG8axNVYy39xkJ65jtsAeCZwsfGivxim1dj6mRBZ7Jmrj6Q",
  "key5": "bCcXHoK7VHTHFCurGUs4bfSLajQgcJhdBzeHM27TXEK229PoXJ96nrAG7FRDmfsmCVCD4bcCy87Kzm3bZ9L5pUd",
  "key6": "5XwNMSnh8S3m8tJx1aZ9qhvEodPxBr4Lb2ovEijTCXD2d4b1MvuWoLAuSZHmUGoKVy3wLoNP2iNpNsM79y4KsAcF",
  "key7": "3jF3zeHFh48W6LD51knFWKZwcX4hMrHpw8YjAQiSQw6GJUrafMXm8bRywtUkDbFNSjfCsTX5e3q6heRVRCC2VwEi",
  "key8": "5CTW121ZEefjRya4nHLnmhFNYA8eAwxYurgzBSRMWTza19yiJ62beooGsRFoDAKM5pYAt4Ecc9hoL4FQhWot3VMh",
  "key9": "ARZeiiwuGnf8ALwSjvazZo6TuN5zFK9USdwatavETkEK1bFJZ79A9fS4DoviqbvUSxb5Pfu9x1RTysDTp5pb5RW",
  "key10": "4af69fBdp6P7zt4GTMzbJ4DjChHgUpdP5hXY6rHGrM9wJuUkstyr1UcnSLZb7MHk2U6Za5RBpweDjsTpXyPHhxTR",
  "key11": "3YnrCnKw1yLJkD7yTsWA6ySZMZqqEN4ED2YvvM35hVopTRUz9WJoveDHFcYK8JQKecWGL34J1Yz69RUAgZTdpkqV",
  "key12": "ChgsaqmkqkTXSQE8Np9Tt5JKFgZjAXNRMNnNWcxt1MdzKfJS95XaL24sP1FLQh8YFYR7DWcteZAxi2p92xwEACN",
  "key13": "5ckyfrtVQGL4B8za51BN4VoqcPwskoGdnrBJ4uDXRVciF4qXFn5bPvw8oLtcwVu1uaWsi737f6XC3CDfc4rGyULQ",
  "key14": "DEu3zGWSExtgS9pahh5KiEe9BJTw42u2kGEnHbiRDutyXicNxGG3diX5UQCwWA9zWvRpM723AjR3wk5Mq8qbeic",
  "key15": "5G9vBeniLqJsErQ4zmR41Skj3v2XtvGA5rPwWVYoxk4DgrT3kLQ3bWAQp2m2yzZhPK4uGVrZkEmdjaUwqrmwdrEd",
  "key16": "2uwEmCGTqRVSNfJHmLBdCMmEJd8D3roCrkf9twMUgHwMT8AkkwQZZmz7y9ku8NGtxBmYYKRePXxY5U3BHkqVRY3H",
  "key17": "2ouiozA3VcQTAogznKaxZtbL86ksSVz94AW1c1nBrM41Xmj8pusmzvgnAYHCJ2FLafgfsfFHFhgRbnYr8inKtGut",
  "key18": "5Gmn2sR5x1z4FsXwrPnPBqaVyzDKsPAKqzWwqTgg2FbGrLuPoW4z5bR8aH8upkW3DikVwMJvC3VqdfVD9rswhm8c",
  "key19": "28bJAYvqydtC5F75kz9Y8qbTwzEumwxvJeWN6QkwcHhbg9xSHHs7xdFV726YEyb7L3Nb7csEg5MQgdFFA6m6MPCv",
  "key20": "4rv46xjYshyJ3aEyyc8fBEpAWuoM88oWq7atMaMABn2mRo4yo4uuoqZ6vzeWZ4aMkbaviRe2z83F4XZBBQeQyyLM",
  "key21": "5NNGhc4GoLudD3BM6D4bJnLJq5Ak3UM8JtvwtREQGa2DhRUXYFt3eC1dS9C6jPBxxAP7V7tGynkxxL2DSDo6YBba",
  "key22": "5f9UdXzpPmrvJyExdpNaZEUYZBJxnyB8SG6F4qxPnfmv9ntnJ5X8sshdf4amnxecuPHsvaqWtGFxGMS5DzLcocx3",
  "key23": "29uFVCNax2wfetxAh5D5zRgennBoHxzdJocyTYdooFs9fStbSsYB5RpoMJyf6p4U9FYqS3s6HyAGytEBMuUtNhob",
  "key24": "2gKLhjYP6cejrUnoxktNsho7EPfTLWyQaP9oxop6SeuTZUAYKWus9b1QFCX3RPJwBk5dnACeNTYFw4j5uqPEmRxX",
  "key25": "4gs7pFC3JbS4jYJocXTPrKVU6XM54XzdwhP1XCJchwsQBu3h39hetR46UjUaQkg49PvCgwhpPzbnxV1DGtw644pC",
  "key26": "4nG9gAFvv7u4wBXUiCFxFFDSw1vRLByeEyMdmL4YbJXaXNNSCTEqeTb4wxqGQh9rfSh2QEuRSdEekuGMC74WRuqa",
  "key27": "2yJAussMW6PuomTj3uGvuizwE3oxb41Sa4m3bf3psuhhSEzHan5YjZDPXXHnVCLuMyjhUSDZaGg69zSy6bBGPyyp",
  "key28": "2UWsFDLqw6SQgZYRzSKRpivUwztLfpgAhbF8HYWvpUDosEm6atzp1VVGDL5iz8bHrF4BW1WpARTanhGAn5jWrYU4"
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
