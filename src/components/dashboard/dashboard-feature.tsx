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
    "3EeZkSwA49fpif1fxwwBcytsHbKGbCTu4o8pwYxGhHrsk8PiuejAvJKmQWXNnxoz8tS58wtHZ39MFzr77kiPjjri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QmyZdzQ4a5hNstHN1KuaVG5pEbrCTmCKABznUaQGJB3ScETv2Y7oJPdT9sRwoRmbA1KVabN1YHKxiT3LR4tmuj",
  "key1": "2T8GAKSVRffWr2C2MEYmhUqafNUsZ3BZe3pnfjgnJgiX2LVJ5xSJDBm5VKwbTSgQjjWEL3hBojC22xH3TTuWnzgw",
  "key2": "44VKBq3HnaGvLyhvyU8xxHkzrAEKYGy2Wn86WYM8oMH7NtL1nzb1HbmmhKJMtvXxmhq55Jko8RG7itnhyqBq9vPW",
  "key3": "4payXEZNdYAGQRLZhm19q1jKtz87r93y2d8XMJUzcUCe4q7PA39KhDEdU9dPjHxH39VcS82RmvmJN6uhBs6DkbFv",
  "key4": "2ioYaBK9yH68yJXgemh82QkgdsidkKEo37kuJxMzECcDeMKaCi2E4qDCEsA6WZ4VmqJysykGyQwmQHbMSqsRhgZ3",
  "key5": "5FqptKHce53UT71jU9U5GZykMRsYPW3sVUsgJaiUKBSFUo5jsWk57UxXKE64ve85Pb4pKRDd1j8GWCBXjYehhVGK",
  "key6": "2G1NK8jygW96TV3subYhxUVNBkR35qbnD16iaXg6bwofUsCqGF3eXGv3iFidkrFp1PKRYZyBpt5gCd5D7gaadwgY",
  "key7": "352QP611t56WWEPncR4euKnx5EeoBs2NrtSKqBTobfXJEzArvhmCem6ptoSQEecHkpjswWjJUrEvGqmFW8yq4ptC",
  "key8": "44iLCc5Xq6n7DBT3CgonPxiqCKwBvHJCcKpa8sJbhVuFFw1p6nkFKZ5vUmJh8mASCRGCcoNrcprjNfKurUn6xP2R",
  "key9": "65sjQx2Bc3Bq38m1cNxxNtSmcKWA2DJBfionEW4vFyR7wPPMHhawY9YZu6AwcVzWUhebgmfpNVUbeb6v2a9F8Mdg",
  "key10": "4k21vGAahhmqEJ6WwNGNfo6mNEyEPk94m13dRkBCgrrAxK9yy4j6Y4G56Pj8dC3AV3R5HLV9APsJe8es964RfDRE",
  "key11": "4XzhYjnVRsDH9Voy9dvsnsCAHP1sdJx5xk8TCC6kfZwyMaPvnyQBwFYjjSCahb2QMREkhS36RXer7tXngdsSJ4tM",
  "key12": "2cJ2GnvVfsBbdZEKphrhvALQor2TKBd2rqbsrC3CChHx6FTdi1HVrDLPimLZaKfwdwLHEsxCFQgDgYieVWNAR4hk",
  "key13": "4CaUdxNZyg4iYbh4QdhN2oPRd8GgcFLa4daRULu9V1zREso1wmeK5pbpigTou7fhTQKKV2YevVNskhqNiZ3svgRh",
  "key14": "2guXfYSgUxymtMNU29dzVCSNB1cnvwpqrbegw2VZZw3QodM1DZQvAczW2aLCiNdLk1PpCny196wPsXmFa3Asr12n",
  "key15": "5E2NYrThA1bZ2s8dFBQbXEfbdLx2TDCKYDZPubR4BGCYkbrALaV3ZKCiS4LcSHn4ZqukQ5FMMQoqjf2Sumfr6Cua",
  "key16": "5We591CauyxMt5iFViXQqVtcyCJFB6dAhVoFVkeDx6Lck5eUgd4KcDJnV7mQEjmfQoDAmT9itxyZUv1MfH1ohtW2",
  "key17": "2whpMGEWAWm126pyVxUZVD4PrVfvsJDELLseuZr7to8cvuUHoNoh3psgSFR2S4ZaSZgpNXrCQopqfQM63oSgVfig",
  "key18": "5dwgVFbG89Q7tk54gXsxPEFd2WDFwd1jd73ofy3FJCWqtZnTz1w7YiAmKRqUeEMG7f7ppes42xwefkS2RSAvpTvZ",
  "key19": "mdXm5qJBnQiT8jEwhfBptheqkPcbQEWeo7Eq34TGsdRPa5LSEQv1Nq1dbkwXgLM39tcHDM8pwBn8fSRxeN2pcfa",
  "key20": "5cZju3g7xrSCz47JF6sEoRgRyA5GN42czFTnwKrLXNqL1zREWSjQeW2LJGeHCCRDmqAT33R1yLrJozsgevHrwDyj",
  "key21": "4xb2fiSz5NpbqJRKDHEX6YBYYmbwHpdnrSAZka6xo6L3MUfQrzi9DbDyXn5sYHaU5JkkeNXQ5vRGoR1bcdpC8UKP",
  "key22": "4pskqvuuxzaKJMsPZ4KXTwuhsQFho3H9KY7NfYinBDQYBXvpQFxtW7sY43EMxfRUVHH1Spnf4u24B7sSQB3jufxD",
  "key23": "5yy25gjwXfposaqrsGXPEXEjpAFMAq8P3rymuB9gJyHUrPEhc4iHcKv1AX5dsw2EeCBVcHeGpx8g45MqQLg7noKm",
  "key24": "26KriVtNiK5UaPNvtVx1u5wmo9rM129kZss2zKRBnBArirDZRNUGiRSJXubgkgPdSJHaEkcbsb1FLdiJUwVw2X2N",
  "key25": "qCh2A5pYdr18YhxJ3uPFzpnRUksxxGjJyG1dzS269G6jA4MGuGLa4Dr3iTdhgHES6f8nEQ1N6MQWM3yBPMxLTzz",
  "key26": "65GLFSeb9uw9aoFtV4L6Yc8gA9iYrMH29fZfHCpujiGreBTqqWXpmnKejE9rTQvyWoeCziQD7PeamYAj8hXHqirH",
  "key27": "C5wwNsUUqJkDfQmZC4c493YAg6ehBGh9oJJtzV7XojCf9Vst1KQCEzmGYPpTNT9udhuoXSyUKvKpXKswBG2UrAd",
  "key28": "56cr9JWQfPUZq3Cq64pi8oDGv1ZGKMRk4ex8Lr1rdPaMxXhibhnuPMEmsiFuSUMRZReTWv1G97rpUhjT7opRzjfe",
  "key29": "oGSVNJki9NMsJJF8vDNp26ao8pMAZ7k3rCJHmY3Wg34adaJZz1Shmmkctfy7hYo3RrDceP3ZPBLenkwhwg4AUX4",
  "key30": "Sgm1aYursAFcekpAwdD6Cxfi6oRNWAcozDoKvtJvhSqqxxkiZELU7wkGDb1zoXyzmcBLPw2RbscNbdiQAaJP8j7",
  "key31": "3EQvowAezKjm8m95eV26af6Bf7xuiKCuhj6pu4G7WJddNypp6unZu7HAgiSuHJGreBJZ2zmCZJxmkSZYjZwQ7HFj"
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
