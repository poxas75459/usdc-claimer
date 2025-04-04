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
    "4Av2vAq3KtJ3uzv7H5JwNNSqWEkvRR9dWfePvyoKUkAmFM8iEw88tHFQ6C1fcuKtA6WkLqo1NNEHF4vcVY9EndSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hAgmkLtCWKVftn4FptuFWnLdoKZkcRbCYubv8Snkbu7kNTNBmH4yYsiCkj5vfSgyfkVUJ23CRU5fdpQBziJvD44",
  "key1": "2NPJ7E9CmM7CnFEyk3kqjSAJWb3uq2cLJe3WgKe9zFu61o3o77nbFt6pGrJLVhYH62VQsbhrhuDH9zUgXsxdfcbP",
  "key2": "4fQYw76eYQgA3zk7adL9A8RTkoMf1gwGeZN5qXJrbNJFswbqckUYeuCPMFhhE841qEY4pp28ALPRRYg3RNFxahQ7",
  "key3": "25xV5kF35q86nMd97x8WdZ3Xc31kiKZQnAUFz8qui3bHbjJgrE37cXifx9jMnsxpdw74Yp9ktrgFvbUbeE348Hpg",
  "key4": "3JETfArzXG9QvZx277jMRV4RarRzGuSHuLyxtsu6cQAzzUA51x4Lyb9T8rXwtraMKoiEwiX2Xzke3gSs4A3PiFm3",
  "key5": "4qzJ2tKtcBznMzPJontSNq7BQE1bV4qYtXSDZM9cfoP2pgFzQrnqksMBwnDDfcj92mUjKHenkh91ZXFyH2Asqr9H",
  "key6": "2kZN1bsgLgQkpAtiwb3K8Lu3Zvnj5My9vYHrx2HD9zUTWHwqb2Anny43imXX4pxPuxcqisiSf59Zpp2sgSGTkpbu",
  "key7": "4hBoMf3ap2jewkPMygK7uyJgLF2nYDXHR9NxELW7HtfXjvhpuJLpNTHb496pVUT7oH8miwwRoovukewzmeZkSbPm",
  "key8": "2HqQKQdPY1iStPyDAEonT4wB4YZ8LugiyEJzomg5sM3brCCkjtAn33SWUZtRAm1NgEG8RdAoLXRyR8UhsKuZFKhF",
  "key9": "5zFcekeCnhw3EYdvqCFE4J1kSoRoU7auYzkR4nkTsegdyjVYSPwJCnUbyrtZSWfEYYf3ZYMa6XHinT21VzsdJAAS",
  "key10": "51s6P1tpEvVPfaE5P5YYymLdZMSRrWn376yQs4H9uaNko6vzkjx3m7oU7owKK3utxMfHbLHUHHswh9zDQqPZyF2p",
  "key11": "Dbm9ZFTsKSNLNbjUFDhnGK9zMipiGc7aYjB9cBrtWb4coM7RV6jpACfQ5FBLSLWixSERu932vXrhX9GocDXNJoy",
  "key12": "5C6RnNKbDV7BRHDRiNEoxzuT43x7Ue6MHwsnYYJjwJCS2qcPAkMbTbHDRfygS5PTY7Jompj7VeD2FCCEXoi2m5DW",
  "key13": "Wf1BgzTyLBxxFf8swNocxEbtq4JKgnHHmGCysn8ZiyB2jZ6TBSrVRzpM7h3pYokwUQ9oy99YN7F6DC5WmLFXPpG",
  "key14": "4XU46VHjPUEurkDe4Z48958eq4GKiiMBedCfP8iSxizPy7yufRKKBmF23KytKGUPLdLAYtAuZqaT3BZehZdp1pH6",
  "key15": "5q9qaMA1iMjwTEmPWk6xyVVPXxHLtp2KKjFVKcwnnDnd3F76cDCNtmjF3Ka2XhHGrHTfiJYT5LFzKejGLNGE2DhC",
  "key16": "66n76kU3pBSpvkUoZG8otQoj57Gdxf2hovC8aCcsHjszFj192E3H1wcwTpddg1MuawaHxfq8JiQjYXoWdKmSUMeS",
  "key17": "4i93j8TN2WUhBpFX6dUhr2oX7NojUwfHoJkCuAHXsogXZLFZkuqzK8bZz6mzCA1PGZK1xkPc9g1juqwkuh6X9kR4",
  "key18": "5jLRqVYigno7JAbxYCuYJuva6GqQgnDHtic2dtuwbt3cx9ttUf7Ww5parfBC1haF4ghDWwz1YbfJQNDbVA9jEdEG",
  "key19": "57oucZ8VufxXLLjdVtk9bq1BMnQYHXToEvXMDXqoeNoFD8gaVWuddzG6Qg4pb8k4JsjA1n9fNXiCvhB1QfE728pw",
  "key20": "2qjhHX2B7LLcdNPiJpxjDoG19jWfV6UpUu8ZfvNBvNgiBtJXfMwU3KM3qJ2bJCF4XG1UXbCSdQSc5u6tddF6YWgN",
  "key21": "4Gssy3ENQ4SNs5cpJK2vJ3kfFo9SFS9rc1REzo2Fq5zVGmVXgLcdGpqAd7ZP2Nua7uoCkkA7nCZWq9k2iFJ6qjLh",
  "key22": "Zd56MCbmX6BWZXpJcVwZFzVpnsrDvxa8reA56dR5NpBPpuVAMPb9yju9wD3u7eWKwGF9h2P7MLDfdsmMPD2iP2K",
  "key23": "hmq9CtjE5sTVLdNY4bTDoTuW2RXonjEgS6BPNT11UAjrFN91475iMVpeT4fu4iC3SZijCxR4BX4g17vSwyMUtgT",
  "key24": "3PEvdAvFKkSLX4bedzdYwTmX9PAgCWetDJiiTiKBDWf8GYqZUmSjdGP7wogJDd2hDoZDMRQwUwJYq6zpussQ2B1c",
  "key25": "4mPRXFpzb3QEy2wga5pmYcBLAgGWUmofvSYAy7u4JiHzTLgDP4tNy7wQr7Q8Td6myaFkW7sDarJerSuCiP5rsrbo",
  "key26": "53fEDSn7D3UiEh8WHB9MVmcqnL7ULVJpEdeSoJyU685CzVGZJeSqtu9qsxa8QuSjpVUzaGR6N7RBEeWfvkcdRWWW",
  "key27": "3C1zG4exPtjiUTVcNBpYH4JUY99Vr1C5WEozu18ewTKMsvtJVcwkwYntUywxryMMi6E3Kt8poa2dgxHsrmzkZyTu",
  "key28": "3zNVAw1KhmP7Mb61FFPFZAez1r2K5w6x8Rem32rMTM3eoFX2zco8e3fs6f2yKmShadGKX2YFhZr4qXjzwnXpVroc",
  "key29": "Y3aXvJdk5EeBGjk9AEHaQeiUKkhHnByruL2HwDCJT7ij9xWHCtBmgm1U2aiaX39n5xWPkxvzABvvnhXcHgnAsiq",
  "key30": "4z2Ujp55bFNiALFZPp5GUTqJ8niyTt1ZGjdhQ4exJzXUg8mZtYeb5unuxXArXwWz5cstdQbjsSCCL3qariG1Hzq",
  "key31": "2xj5dJJm1TdjyMivmb7uwbLHL5qm2Hp4WNSQedNo7CXAQzvxxU9GnLbReBDR4rkH7uJUVR54eBcqftHkyVMVBmMg",
  "key32": "TvVCe3qcVCTCN5Un7UTRfnuywa53GsgeQsKo2GSmATRDBKPLDdGDvkjU69R63MXWH1F4zQ7qmDDviJjxsK4YmMe",
  "key33": "4ZbfXmFhMk3DpRi4fjq5HpfYkhZHQnNiiHsXBGZSnhpkcEgi4mCKfb6MWzGSJNVXSJ9ocy1qNFU6gJpQSodSqtBv"
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
