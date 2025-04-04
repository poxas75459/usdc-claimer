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
    "2AzB5piUDSQxwUadkPpJwe3U5HrZeui7Cd6Qn1kdwy7YH1Peb1S9UvYgpx9miSveEVdXDDtv54D4oKahKS3fvSHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kMrEgjKZWmDhW7CYCHnfL1HhGA5NjrTmPLVqoaFj5pshbgiAsxes4zRD3ApAbaqfi2QC2jp6idYqWBN46RLokVg",
  "key1": "Q3eCs2ZgHvd6Qe26FoFE4FHpU31ezbdKgoPTjtXUvMBixvry6Ft7z5kth2RYFWvtvJ9djMgzP8sxChHRam721Vq",
  "key2": "4Hbo3YSTPEpyF4KeN1mqUroKQymfeRRbbsGXJ98XpFYNvGWkMrXjifS4HstZUagfPHsipfppebmDXDGaRkH1pjqD",
  "key3": "4B16Cgwb9XsyqE1TF72YkrDKGCT71wHKpDN37G4J99C6VCxxPcUeMCjP2poWb8TjcUH8DhZus5nGFeWYavBAi5BJ",
  "key4": "2htJKt1tMqESk2Lgwj7CNiAxqaQzrJmXNUwgLX1VRwqezWZepB8SUSMxraT6KJ8tt18H9PhF7T647PfYikqMfWfQ",
  "key5": "5jgP5WhEYedC1pEYSWnHwhKeP83R3pXFcMGW2rfPMtJLmwwFZpv5GiLyuzQ6A8dR2UscEGhrCknyKAUiW6PKi3bi",
  "key6": "3vEoLQ77QYCKmSyh9yJ6bHomSqV4BC3xZtffL7pokdE4Z4nuPV2oyLQpB4nCBppxmK3CAwEvoc4R9zeRjjP42HrP",
  "key7": "2NrbxYqRgaYT6r6jWFDrkdFrqa8coqkoVNXqtqZwg3w5vXcDKMhhBi6Pq46zbWU1qKFzxjFr4Q7GwebHaEtFbQ6S",
  "key8": "3kvyBrTviy8wJyxVLUpeWirAC9bpecxuE4zigVgK9uy5WG5H7tf7ZETsR3EpSuas4X8A2gZBBuqdaEBcxXjtsy2T",
  "key9": "5CMZSj9iPKFwQVxAhwvJFWiH15Tih67Dk4CXzK8LCVQyvgroSFEwPR86r8FmK5MFhnFHn6dWzpaePSyhBKVmNymF",
  "key10": "Tuuy66sd6HguPZSi3QxHz1rqSUG7x5goCLaUWV6b8R1CgVfV2PMiukfdrZX4ERKWHktTD7oFccjQHhvaoDe6k8V",
  "key11": "4XVRoEKkkaeMAS5DEYEUteuRK85QEzpMZ9WqQRFifvwrfuS5snnTWrGVjzeTef9LbeWScqDFHxjyyLQGsuoDx57F",
  "key12": "24bmXcD6vzRjwHGnmrSoYx5ZecUF9DnJNrodrUVPkToQJc5rzFfGArP54eABomHKwKz5NWo1n3gXnAMSPQgA6KXX",
  "key13": "F7JA9maJrdvq4BgsNSMp98uVi1v44mEA1mWHHX9VtuToofw8FDyG1JfS4EEQCCF2WNZW7mEApaAPFkNPA7rfLh2",
  "key14": "21sDT1CVZgfr2PHeNdVyZ1kNmQXtPJ18a4vbZuoXJTT1nQmDYVEwU9YnWZmgkBQifnYTi5czDcQB84aUNR7usR7L",
  "key15": "3ZeX9m8LN175KXRq9crTvxMcE1aZ1CL8vSuHSPmqbZ1GuurXVJUA4PaWV86vhJbV9AR2HHswJY1wCbTxg7edduY9",
  "key16": "2n5aUD3xSPLBMCbFivU9Fi1E47F8ejTvMHMzhaLtTLjiUEmFUnNg6WChP7uDV6LL2yyMyXCxCsM8TF6fcxmmDfX1",
  "key17": "4tZsJmKYbNK3LA9QNtmWiU56qBnW8MysLVGumrwq9BEcMRyuspZBqCyQmjFtFN377dhMcNUjGhmn1g4QKi8m6hpg",
  "key18": "32ro52S8fWeBt3vpgNEV7wMcWaCmhsRbSKkhHAognajVBJ6YN7eSJzg7hQioW79bKE7B17Qd6ALPGKS5GWt6hnB7",
  "key19": "4sVHZ6Kn8FpMmRk6E7nMFekbpj7ZcvRKe8augQipQBhLEhrb3k9EDewfoKhcwDTZLhqa2JoKtiX3MsZPYn9Q5X9Y",
  "key20": "4LnBbTvG4fEQb3RQXPfs5wXvZttDwjNaNS1ChLpVD2cgtmL4jXwC5J1MrmQP9ahFmDPQi219Z3jGMAHBQDqs3EC3",
  "key21": "5zLN1spoudDbkSZS5ErTLAwsaGzKXR2euKr9np1L46VjVsZFNhMqhn5fpiAqwDVNNng1HrE445GtL9H42ZRdKmqg",
  "key22": "4RfjfC75zn6LkYURFeiRAWdobyCsWSXB9Vx712dS8UUJzvUwwAUqaHwS7DqcBfQWbwnfqKUdUUbaJQvFQ8HcD6DW",
  "key23": "3jyTv98dBiUBom37sZPgsAM8UaEh2MoyknvswmJRjkgoXBxhV3ttKtxfp38jjvq3t3x4x8dxVq63jVBDfMVQpR3f",
  "key24": "5qGXuPeaeqzdeRrPm3XKdQGyTMvgKxkSUcmqymxQt1TLZnUGXoSGZ9W3VdBWBzBz16jdy8obFvSsn9tmLgde9CSG",
  "key25": "37QVG3jeWQYapnChDe28dttcG19w5sjsxhjuGhPEp4kSHPLeenF569ZE9fnA7JWZzTiet3fpBeXpB72XvJwufosv",
  "key26": "59zqq6GrmkY15gPN4zhn1Cy24dUNQ8UVmSHMrgqK6xttNukuD7Hoo6Vkq2qLHe1E6hAnfRpZN835gu4ekD7Z5vhV",
  "key27": "JULX72foD99hwnmenU5mUxNb4qyC3rVwnc1edPJHGrjh5qzXHcgaAfJgx3N6ynDzqDSHLcrEL7zeFkBa8EEPwJw",
  "key28": "3HDbbxCrfVodfX1VHpvNevQbRUGoxUfqsJQfj1H5xGBR1peaom7JVMcZzkiUQktpP7P95Dhtg2nWzVGW2HrdRYHd",
  "key29": "2koRbCHQ3Ed84PZLn8eX5Dyr2sZDj1JuknCcqK4YEWET7QRNT75NJin6i5hzoWydS8arHxHkStjMFd99enD2DAcK",
  "key30": "r52NHUcZMYEmgdKPKEjHpSS9wvUc1ibu84naVLM41yEZJqhezVPfg4Utj6h5ysoUyVRLRVmm5Z1hwvB7MfZtTLx",
  "key31": "4Xmcntwi6GcjbDVJn3riJJZkbsoyZYsRfZcSzo5Jz4gTaVq83k8b4mnbUGEMYAJpgDKG8c3sYd5vp6p3Goc5hSpM",
  "key32": "4tiX374ynrkiFtag5n4UWrnwqBwxbDrVJJU1wUrjZSpne2mBM81V8dDRfW7wqY2UTBvyHTd7ez2yBSH6SFBjnCzR",
  "key33": "2AqR7oFY1dX5Eh5c9uRZdcTi6uUzzFkyGRsYsZCsP7EZ9U43L2eEHqMqqSqDGK9g3snCCMvUN7oS3QQ1HnNKXk1m",
  "key34": "39RWwzgbFavu2ZAfTq8UR1KwQWzpDHfgj2uLD82sCpUd7vupyY6pyuU6bVNRJsDFbN6iPryv7QhGcPMYhdvcKnUV",
  "key35": "3mCByWgyjoc1UK24oygLSTARzNBxjej9HcDPk2zjoPEis1hsvpoaNL7oFVGyCYGKyhzfhrYoaz91iQj7m1Lg6RPC",
  "key36": "4cyHCcdaVA3BLcfLK6Qzjs6wAN3Jw4Pj7ydazRw71AkwskqM15dQ1rfKtZZWnC4YYJYXVjBytM4JMG4yBngW1Yck",
  "key37": "54vjjdhdeZnFEThGk3JTnbrYRS4vCnV6y66Pvfc5viLohm7XGaLaAWsvHhnCEagsdNb8fQsCuBQcQCEycmaxAgLM",
  "key38": "25kCNafVNqA1N9iAAHtZ3S1eY6eeXQ4dDSB8qGAK4ZkSYwBWbbxnPx7fcuiJCSPUn95sYuoqBcRpD8aTRmHmPTDz",
  "key39": "K3u99vUy3xdi4FWBe8tLLzH2VK26mTBz7LzkU6rbNK9iNvgXDX8pMWUEHMjpSQhNyfVtDuq1wKZUSTv8b3CKyQo",
  "key40": "2pZGtvK5sbPFpZtr6AnRojuTnwbsnVrLwVHX9N9e7tjqS6tD9Fr7n3Qaa8ETMW7jQFX1pHBcHJYztGKsx8AgXFX8"
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
