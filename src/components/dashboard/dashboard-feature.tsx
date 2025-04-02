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
    "3ipozBCJNKidA3Ax3npdrcBuLgeU7WExnkf9cQMYKXZ9taPKAmwwSd4rxTg7S7xht5qG71E7FYK5QGTXrH5WScb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52pdf3mGhnHWv9mvBk4L9VNQEV9YoRK9Z9FcSKR1vdRd4orroK9msQ6rFfnkkAQ3kjogGnJjE11xdH6oiJYaFd7B",
  "key1": "47rYDDYqP7NkBMMA77DjvVPhamxF87VyPd3c3LgDfU3rsqiDNhtG82Ah1jFR9a2csWGjCEfout9rYd9gQC81v7Ju",
  "key2": "3FjF4XaD8xb4yHhnoLNrJm2NC9NYm9uHnQQaCiArafhnPprhS1DDaZojFhKQU8brZEo5JC8nAsQ8Cdu1HMi6XrH1",
  "key3": "mxyBaBvGvwaYzm6WiPM59WacRTHb8rAwzB1KUhUFYJozip9YvSu144BMkCRpK5YAtTT2mZjSyRf9AXZ1WTUsJd9",
  "key4": "5RgDFdeWVz84mAjFc5CKwaaTLS1smqqTBS6Q2zXxKQZuoaCzJK7nPZAXSV2jJDv7shRLKK4AWVgdec8hBW2gmBB6",
  "key5": "4EuxWF5ThnRJgt9rnS7wuYS7CNMMBC2rbAMAvW796jQLdz3RDijUMzeCAmHgbKS8jYLsnPwA3aY4uW3b8xaZrHbc",
  "key6": "441R2CbKGgXcTEq1oEok6AUwdddA6HpMcdZUxnaFedgkddSJT5fQ94B7NrYMMLeV4C3msAzkKiSnjv3Vjjoh5S7J",
  "key7": "4YnoQAB7ALPVrqsUNTkmcX1G8Ef7WegWGyzdAtWVXKs41LKXnnoUUrhrRt5EffV9b3GuNWUjFv4mQxZ6dzUKh6TV",
  "key8": "3tNT55o7ELHRMJ3Y7KVeWLeDn7ymb4ReHNuzdCRbYnJQedQHencrMzn9bBvZWeQea7BEycaaf5yGQyPAo2Qo2U2n",
  "key9": "3835AJMreAbrp23feJu8V3YgPsSEhPjFb4MHMm2j7HPtQrnprbwk9tYBd4TsJAgdmPWcY8KWqQJ2MaE8gn8ruujx",
  "key10": "2W7mD3cAxPxYnVoLhXZinhCJyyv7WN3ncEyGBTguPjxTrgUHTynfJYuyEiv6f5S2iaQ4kAcQeboZawtTJ6gzaHBG",
  "key11": "5gtnN3W8cYAfG2V1wJGH2B9GBfLUCWfn4WwLgiZMLPzB3JpcuKv4D6VEMJAsTDjxXCAXhPemqZT61Sf5sMzUn5WP",
  "key12": "5ukDcHS4hvW1bWmdzoctPVX39KsBTh4JJZyoS96Sk47851EHYmdzRZ8AaS5hprEPyxbE6yRhzBzTVqjSjNarRwyT",
  "key13": "4FVYacosMP9d2q8T2HJnQdcvPgDUkN72YW3ZgctJ9uN41HigqbDaZFTaZf9LoL5Msg6MfVte39LCmToKWkuhPhGJ",
  "key14": "5mChFbqTY4f9kJ9auhtCJvq2437wYZmzm4TZR3XdGVB7t28L6J1kC4XyxPwaf5WENV5u8hkAF8coR5FrXmbYhoAf",
  "key15": "2WYpSrNNX8wPWX4HJWnfd9iqmjoA58UeKrerR8NUadEBZEd6xf14rUucSKsZKzMBUsw5F8RE5tQ2LqoTf4hHDHoT",
  "key16": "1SJHiSjPdMP9R8ET5Y7aYpA9vUm4S3YRfigxfdokqEu479DNF8uZebHBjGBopu4mF4k7Q29WH16rXui21uFcTiM",
  "key17": "2bmTaJB3RKVMuzEYGGGHyNUddDNFQrNoDGT85cbtFKTsyumqtAzVPGDMq5wvPQci8ysEQzaADthABfb3A5hnasfa",
  "key18": "329YzBUeJMSabyLDTTF43zgNWzyaSWDWjVHaN3HYbgHjPhx72iXU6nthTSLtP6doMndfe4VT4QaWaU9e119YaPcg",
  "key19": "4yn1SynC5Yqx9bV6kwWaS2tWFqrSTM1ngh21A88xQAFE6t79XdL5GZFnNdRX1LiydJGmuBoyYicfCiKu44SXrxLe",
  "key20": "3vmdpdP5HUjdwrwsX2DjV3PEEHH9QvFdM4Gkx6jnxpbJiGZBjvATJZxEHjWZRHLSJRi89GPPrd7NPrxBtredhGR4",
  "key21": "ALjCQRBUYR45cS9FwwYxesVx14r5p6xvtsWuQXRCbjtp3fghe5RB1eNV6wfTEuei75jS5rjZDybivvtcVjMn5wu",
  "key22": "5NWzzgzfgPKL8voU15Ck3JmJ7PYvnACdbEJYPV2G4wz1v4N2atH5Grm4d8pTdLkpmzQiG88WYD61GnEEE5rcxyQF",
  "key23": "3eVR9dNgtqHBuHs4e6vRmv7RBHjh92jtrvt8YyYoMC8mbFJocHzJ9XyFC62Z2VtHDf4SCrmsQ3vuKvZEH47RG9FC",
  "key24": "2B6BkiQyZjzv59S3mnco1PaVBKAvAAU1Pyng978eo3YEvmnghKDumfFNJHJCQtQ8985MUZ7v8NCsYsqcDR8Uqktc"
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
