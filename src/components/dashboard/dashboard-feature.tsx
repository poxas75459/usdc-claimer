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
    "5bs83q3W8f9VqPHTj7WYZGc7VUHPd818eEEQ66mhQdS85TduDeYy5vv3VS1X2FmxtBLYHjthiktqvx6UCNbEdTKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FAY3nAWDCBtXytqxdawGt1W1RoxeChdF6cbRpyHHeLBzr2KzNumwbdKRnn2LzQADj2GbWzLeBxU85QhJRG9vtXu",
  "key1": "2LzpT7jcRWn3L1j2wXheCqpXWwNxqh92sL3w5XLRirFi8148tnaaYEneXELFsBJCLXc3JtH8R4R9fHqmaezxGHPo",
  "key2": "2jRGtT2ycy1sdKWr72RLNF4Es2VnEfBqD8a6cLeobtHsecjxpSHKVMyJmd1kq3MuQAd3SNydBkMAn8TZHSAoqFLv",
  "key3": "59XgBqQB78u5cTyEaTq5CNLkXnWUCaRLuAj6a1MkFJ6DsAa37ZtHSs3QAfqpNWni4j3XRN4eWSUb1nyzpZ4qBVrv",
  "key4": "4v6LjtL2g8ntEodm8GH9sxbKUMWx2giF5w5JeoPajc1fHFoC8FGsFsZeoV7TC2TdqJHCUJ7TrNFJ7K6FcJ8s9NgX",
  "key5": "5JafWJaT3oCQsYUEfio9FJJcAMRNwg8ojdsmhXUKvs4S9SQVKkVoymJ1G4SE7Ac71kBugEQGhWGsmHwukZ8oVDWT",
  "key6": "5sKCz65XKJba5v81BMiu71AAsNoyefL4ZH1PZT87GyhyXN5eeegWJPK59bTHfY3jKifdLW256tzUbTqwVDskRksp",
  "key7": "5yiH4ppbtSjtovqmanqJUwLaaVsNWdDMtDPzZnnNHqR2Zv51QLFithSfo1Sir7MadpGnzK63oM3TC4iAQuj6wqLZ",
  "key8": "4SfzV5sZny2kFqV78fhUfNc6yDiGaFZk4CpQnWRfEBaBQYWPqiNZaNwRhJEW8wv5w1a35WD19Xt1hWBmXDU7ttbW",
  "key9": "4tq1iWsk7FVahKcyeQMCdjPUs6TRWnvRAQzJBWUHcnpk7ePXcMDT2wqzJawRiAjEJUxgF3DJJa5Yyg7WgAfH2mz3",
  "key10": "4J84ohGffxUWSotwRMN6k9qP35HnL7fHSKsQUF4oai2hdGrPXzncJeRAnHeiqCfFeS4pJSkRbeqF7TPY9V1gYxfe",
  "key11": "61LDJA3kXcanP3rUAWUeNKuFbUYTR6eUNzzvm2bX7SfozNz923RDbEoXZtQ8BPwmTk7uBYR5eh2qs6nMbqarQK4h",
  "key12": "nnw1R57v1yo424Vd91mrg4T6bw3UTPQKEvWJ1mAV3Z2mtj4j9t3gqZa8jtuTXMUHzcRdN49V2btsDQxXyuTmix2",
  "key13": "2Vq8uQ1CEUf2ukQebDQ7DgUK3Yv29ToPJF6Wp6494MXwmc8B95n3nTLfKhuUVqb2PZ6dQEPXRWtZMTW8NeKt7TRz",
  "key14": "3RZTUrTv2NeE51GNi2T6dncdp3a1KZyE2gJZgQzZPtdH31oFf5NrLRazhsR37gXWVKcjxfXoiZKLbz9p4cqXoeP7",
  "key15": "286M9EJUCEF7pd2sBisVjRuatjEYCivhBJBrDJvr2jbp2nsrFavb8BhQ7XutVvdqtuWHGQQfXmwACsEngK5cmVKc",
  "key16": "28vYWZBMSrHvMjf16dH8U1rGP5tyWVu4mqmwrkm5zvP5Q5iNnDavdaqwFmx6t7t9KVAGVa7RK8JFN1p7gy9ck61F",
  "key17": "4V5AcaiBHD8CdgYWruG2Cj6z45gLHswaJ9qNJdXxGfpCvL5K44KqLp8aBKgPGUrUZUBxUZguocQ5xQzgJebRWUUp",
  "key18": "4kckJAFNDvEMJNseBs4sx6dJJzMSUqoA4pwgFNUTDbPxYKdVAroGhPY962rKfMWrk5hvWtctwjnZ8ZLJVumQSr9r",
  "key19": "43TnEvYNPnAkj4KanEAkPR84fL3mmyUnnh55Juh3uSZVfkoK5kHaxdSVaXE7w6zC3XUxYELysSgNbGLWieUWYs22",
  "key20": "4saCXtL7aKQMY3z93ek6Ttx38wuDJXke5ryLMJ2GtNGodsZipb9RWJGd9QijugnDa36jTk9KD4CpkS6qs6ocxZBb",
  "key21": "2eeHpzQKmzP7vajUzkxzVJ7oStY9TuaApdh9LQzC5bNHB4zAYpPUAtuUS9Ae8TaPjsUaBdTfom5kfx2ywcbLQBfn",
  "key22": "3Y8HDXQGvcpDVU9DjFWnCaanGms34mt8AD6gNa7WTKr3XzhMxniSYsMr9VFdaUEsRUUpEzn3yxY11svD51qFjCik",
  "key23": "2n641qzAbjUdaHXTdg5LFJa3CgWZHytUzAjV5rcjz1kVM35rDsqDqY48tTE1sTkRgWBtwCeX4ADiFr66P5Pef325",
  "key24": "2konFqD28vhUkSHt3N29YMLMzJbVYs4MTTh3QW8cA54y3xRVx8bdwAPKhpUFazxwfUybuRK1ctncz1oJKCgRi3ye",
  "key25": "1v4WYgku59KjQSnBFsKCkBWZmigxdkYg4rKn1MNizMxUwGyGS5daWT9GGTPKkZZ6tUqifHLfvRYw1aDHyetgmAj",
  "key26": "4a9DtnHkjGPvnbK3PcwD6nqDz1JCSdrZmYMfQRXscZTFNnXQHCfawYpebwrjYKtvqeB5LR2ks8acic5YNTHyMn8v",
  "key27": "3ATd8EdL5i34HcnbD1XfjsxcyF8GCrVsJSfs47CRqKZbHPxerHocNonFeBXRtTMAoje1vvXjwNckbshdYVAgzwZj",
  "key28": "6qaS15BkJLekcWqbW3XhPNNZfH2ZprppkWfr5GKbRMzAXt4BKWWyLYtYDQhLh2qx52cEHEirEwtyfgJf7mx1BFM",
  "key29": "3o8ssnbPVkZwQzvaZKWGJnUZ3ysQVUeB2pDzQXuzsP1Mfz4GPHgfXspouHXCSFhGPDpRiE9MpRpahtRxoRpXTc5S"
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
