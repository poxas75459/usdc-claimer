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
    "U48yinHCwgAhs9e9yXi6ifcCGJrfw29ov5oVRqfFRLTsYZJYkVWf7p1BvD8YGbbnN1NTy2Fo9JYk7VzEEkpkxwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WwiTgkydCui8ySSxT8dRrp8ELgiVGNJ86o8Bp6LG7RFASGQBx5wTPDmeti5HJQoCRisuxrnhXW1oCrRgPvzFu3Z",
  "key1": "2JDrUiYhLFJ79ByFW7zLESAk7U2ktb1mNpyLsL2uf1gDpNo5DzLU2QJuXBxmWDcHVM2YEusKhZPZkPJYfPqYL4mj",
  "key2": "563wCqDmypkgmsFpe6rqVfyJFnif1LAiCiCaERwdpZFHGMPyAMiV1q1xrrmWqgBids3rGPzuSrXjouWMkgE8Zvi8",
  "key3": "ob4suTNnbtPHiYzMYvwufZVzcfbGKdE7imRJEYjaRHdy8tdoPUXE4rixCU96kxXdWdRffCi5HPTh9Ny1JUt6ghB",
  "key4": "2wenLR3vyyDbfVcGhFVfeMAX7PwdPZ5CjkUZMrWq86TfP8xSmcE7grmgbPmviJPYkRmNTsjx9UFFDrzc8xhVxYN3",
  "key5": "366tfPqRW8T1dM6XFfvXMiyCDd5JR2jKwXoAFsGZAVvP6VbgScGNQMoKPCtMCVm9XhidqwKmduftXkY6XqLfjAwo",
  "key6": "5XXQb3TD8nBGNLMKurgBuZpRuUS7arBHGMVbBqKwiEgoNgFEmW9S9qUWB22jbTEKKEfq3TWydbyChCXs7rYBQQ3j",
  "key7": "2M7yjrj3R9F3KXf1v2igCegWZFYnZEN8Lbckh2xmk9eLCaxGfuNFq4YqtN6AVwm843n8aR99TVHWBwEshgvPWTDb",
  "key8": "73Q3PVBrQND21DdLgtmiyJr8N6BQcQ379pV4bpDXu4ukAdHT643rcTmzqyTNQPmHpM9agbAytLvcuw2cuV3xUFq",
  "key9": "5jh4tayDz5V3T5oQeFp9WK2qQEQWySqiQjqzGy42ZoSbPJkQgpRErigW7Hy5bWY5QFa9Ezxzsq4MubazfRxXw3TL",
  "key10": "5Ci6YLnZGso65sGBjvVJaqBZTa6eDEDxEyb7NFC8KTfqWqBWpYX47XQQHrfuWzKkTUGr8mGDCpMjZfvT22VvzpQb",
  "key11": "2T8nMBvqsddm7P3mWzC74cEm8Dtj5KsPR9aGAhvdit5tp72hquSiw1Giy8pySJH7hvF4d5RPbZv4mYgk6LLpWxXT",
  "key12": "3fjNFLswdhigZSmhiX1iVabvWSs8F8kzGGErhiUVigTmk7HpGnvw6tz21J3B23dzMJMXwficLnWpnvokvdnLdHBp",
  "key13": "4nzWyQw2oEt83XEPTzguNtdrMRtni4nGTqCLxPFZqFS6cSLj1wACMcZAB6DNShtogPuDn8MDTs4cUaDbMmf9Pfqt",
  "key14": "5ifzcAgnvnP5c947vn49U1dUZ9LqEeihGEoK8MxLp5qHuW7nUbk13Fo1vsHo8FVzEvf4aneVkFBSdfLvdm9H5Js2",
  "key15": "e32VXcVBa3Qj8keR7hJ5z9mkxF9oVEDzQ3gKQ7tAHWPFG5oqzjVL58AXFs7DxKG3rvi6eNqmLbJQ9F3y2eRyRgj",
  "key16": "5ibouMKeKLmFxBAxbMKYDByZ6WWvHzx4g9gdMEpvod3FtVaSwesHp8fTfgKP6g5NHhkma2UTEwmAQmkJmpsVg6zB",
  "key17": "4Hsy2fGdLpEHGiHmVftwJYZvG3vrsnmmC9kUxCNKG2FDddGM4FdzMafrdHdrk21u4NPecwUJvUZmuztz8Ju3noUP",
  "key18": "21oqZjnLZgJptRVYhHoQNQ7KXVmaZq4JuShJUMarCLCECUtATsZzeubV6EmRAMtmFPNyL6L99FsLNttJNnt6CAzW",
  "key19": "57ctmNjD9wsjeL15mbr95etmuTHU2FSxuPvN71zqZQmH4iFGjUxsL6YDs7FBzHeZweoqDCjAJDgKP2q7tV4uUmUq",
  "key20": "4pNg6jKd8D1zToMBWUAXGARjdd5yhtxT1sqp84N7C7kWkW8Qvv3aCBxUePk1cfq9YVhgt6zcqGtdutX1BbUCm9Rs",
  "key21": "3WDH3GmpFkvJR6MXqeG4GM3Trtck9B2bKKUK3g4XFN7RbhgURAjCaJmXwZY6T4LNqD1dE4ntpNeSoRx2Xas7moQd",
  "key22": "3ZwL864mL7Tx3seX287hmirCiDrNwLfLQrz63JwxotictfwmfTeRF3pH6oTyZ5cXwEAR19S3r4UDqccSzFphLhVH",
  "key23": "3cReHHuuUSpgkmvt9caVspkRfHK7bKDeCdpT3x3RduYMuTu2VTBTsb3MxND8WAmwg4tKRCg1vXfn2XyvcNBYSgUB",
  "key24": "3vNfZ3hyj8Dif1qa2ArcoFUEbTVbtxW63U6QBa6AE4cB4Wsaa8PJgpnfQS9GGruCJg4egnmDcJFXBKbQedqFNAQ7",
  "key25": "xZYg3HRY5DAqiq2HNoKKRjQscdVs9ZUToxoRdszzo7HMqHyZzNt4EobQCd1iVArgu4cP2mn61MS7XfL4xTz4ww9",
  "key26": "5purPsnYmWaWTuTk3mTRf61vsy3Qrwq4GS1YHLtxjZ74PyPSrkeGSdNzsxY2pbTAPGb2dK2DEG9VLH3gTxHCPwt1"
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
