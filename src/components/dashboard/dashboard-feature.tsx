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
    "3CXa2nXEvKxLtJNMvbBXGcPBNjwFDTnn2LoX8k4h6uhyR1pKvG7ZXDzkzdaFhk8J1scgymYvDH69wcKfLTCMd1M6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3stj6oUanHxZQ8aUSpkJfAiy5oPfuQ1m13gRhbVs66oQiA1wBPgSMwoLXjBKbPXW5CuYou6atVMyg7xaSWnmkdYt",
  "key1": "2q5SDCHhtH1xZi66sbi1NNwVPzfJNS6e7RFzW1C4VqMsjyQqLxuRTzayt7wjAa2s1qhQBqgui49zS1qMJzy58eKK",
  "key2": "3F2mAFcjRs4iBss2AMzwoW126GeDLAfYchdzx4vFiX96VzCXatVu5bNs8VzjBwKuHBMqJAAENUS61Q1c9sNfCJkx",
  "key3": "5dSGbuVuZdAVqNx7TYFS29bqMtFhEkUDZMpqr9NroHA6xi6hYRNjVqKYh5wGv3qC1o6ohLXirc1YsTeMwo7NJ44X",
  "key4": "3azzeSfG6BFgMdsXENbt9aDeE7JQ4meq4B41McyWiFUhfRn82zTfsh2VJKH4mYEqVKSNdifZY9XaYASuZ8F1opVe",
  "key5": "4LAbCWf45LhGddNbQWcqbH3gHNRf9pYmekGYSspZeZq19MmYUwYMRBdUbNwPW5u1cyzvNW7hLhbxvu9X4JdcALoM",
  "key6": "SyncPWE8BHJ43Ut6Z8roejXE3Drp5QdCF4Hb4HdVz9h9HQbu6gppd62jNWLCkdiMXfBDdVn4kBw8mLP8SNMnvpw",
  "key7": "4T9h5d8uzroBpDd7vNWiakbaWoBDDxsDK1upBbM8te6N6ppaaMqZxZpQyoCXrQEsGkS2TNoxvgjPJQnEayLMphyQ",
  "key8": "2VQinp2UarztZLgp7neJdoE3VHaHCA2LctNHPEfzDa1mqSXBR82tmeo6Hap4F9gbdsjhsEVuSZFDHJzMRhzZidfv",
  "key9": "5yCvSnuGx2X5nki5rVcbba63qkqE5kQj7cQ1HRPj82D2ZStbJvuis3skY66m8nUJFyyRjsqsG9R2z4z6uomhMjc2",
  "key10": "5misnCLfdqPYM39UPZTsYTrn5zYbaY82SmkRrVKg6gPkz2G1qCNz51pY8aoJ7m4S4hErHRtp3LWb2v6DuqHMVrg8",
  "key11": "4mQKN2vVYE4SbhHL19gxQMRq7tiVBMq6QbNajREVqJZ2F2VyxdfUBw7ofSSUrYUWW55heC8Rhzus89QjW7i1r5Jg",
  "key12": "2Lb2RJSE6w8ySvGqzZQtVTzDnQs3TQVa3LuZAMUV14MrhiwEfKAw7nvhAnWuPhBQvF2q9fuh1b13ydLgdgEmvd6f",
  "key13": "4g5SToFztHVXJCsWZLw7RxnudmVbt5sKeuHzG4YC4UcLz1qF67DH5pAQ5JfkZmuFzyQsxsA9339o4N5eNEpGqEka",
  "key14": "5orrwTUAAySsTKcTPgpKmuPosvjfmcodKkBiQ12Fqg4oJ7oc8DSf7QsDuM5pR4A2qdKLksrb8m2JgMRuemVo45gi",
  "key15": "2ASFYwAhwUc9gPxNRL2PLVvmbFsghqF2wGMWrv9cKCtDB4CMn1MNKmXHP2vFXcGFh3ELZo4dZ5oeo37AREa9X9YU",
  "key16": "546fe3ibEThxjLLCk8gUDbdEU9jQAq8oXcbmd2zV7fJM76Z95EtkW5GhqjLx4MDKpb8cJUJW7DrWjny5QJe3ZKgv",
  "key17": "646UiyiZrcwQmEPpNZEABHYUhnNTopd96Jc1bMxhM9fbf1KxExV9Pv3bKG5ZDCADs6KPC3BANqSLkTj5L6mt1FHM",
  "key18": "tNQAfD5tHWLLMBbtu7d9iSXSxKuVQ2dkamKMHPTXo5duHNPRcBp2UiJREkN2EgYUQSzJ8Ji7ztUwCSZ1N6sK3kw",
  "key19": "3bQFeKbUppZ5vJ87jq9BtxyiNrPDdokftL82xa7wdeCsXeYKkK8bRWaER4NKqYX3e851vAJ1xWLq4LiRXsxfvju6",
  "key20": "5ymu3jDLfqbyZ7GzhPskiVpsjD8TNAquRapYyV3vuZxxNfvJC8uNj2mWUYv8UX98r5dvgkivQ7N261f5HXf1q7iB",
  "key21": "3Z2JC2HAxiY1bF4UbgejNjWzp7nreVmMsgX6wYyBHxywb46npNJmq9jYnwqPwVm1i5eDEp3u8ceLCm2nRqY2cpsP",
  "key22": "4DyPEocBBNCkHhxKFrobojr95Lxs4qygP58hTpvduYsYkfmPVCFj9HK845HvnKZ9G1dmnLVTiygLfLUb9rC73rjd",
  "key23": "2ZMQNCW1jSH42DMsiRY71AikP8jr3jHzH23aFRzeZ2iWXZegy3imfhuKPxFYhA9qq3ELEzXrtKFf49jFCh3WsteJ",
  "key24": "4h6PnNnzvFEmagN7UpdCdsnPVBJGYJnqN7LrxC3DJX4xJJ6kZti7yaLpX4nCrWD73Yg9D15cwHFayzkG9cNNcawV",
  "key25": "4jy3ctkz2WEPub6XAuSVL96uFiq3CoJ4ENHrTNcKjfQzQyKLrRSVajDsPdQVpiWYgMb92QHuPBu914tnXJs4qFdC",
  "key26": "3u5JBtAaQLgihmc7WA1jK8BsRMyXrpA3ewSkZBw1K9XrgZMpjcvkB27LAhVJFaj3UqNmg67py43pjrCDdY7ftcv3",
  "key27": "2R5oVgFy9Rbq8L5P1oCjs5aPnbkWQr44grhMhx6R1i1ecQp6RMBv3h5e9XYJxgaCT1jnkoZWukmiqwZ5AScAxZcw",
  "key28": "4hjovELuHNiShKj5PE7p2THDiqbM1zCnCNzu9xTE7LfUU6GUEQqD2B7Y2ubtm3fhJMX8ZZ8dXyexVN83zRv51yXh",
  "key29": "3p6ho2ihW7RpBaxP7xv2FDYTeB3TBMRbFJNaTXEfaXriPFSUC7R3s6BjE1U72ZatFbofE5Gd9FodpnvVhP3zsUfh",
  "key30": "TBQPFAw1SuiRbMYTtHdNiUiABQ2oEkBrpSZCWwfWHwAuaKWaPnH3pLt2siZnsL4M1mc1aJQYhFkEWotd2Gvx1nB",
  "key31": "2YbmibdwDQeLg9uMjawheBgJyv5qH8LZj69ofxVvU3ZXfW15C6sSwNnoSatvp7zjcCRQUaCteVWeGo9FDgcj5STJ",
  "key32": "2E9SNR9qZN839Stijt3vDMz2LNruVyS8HV1FoC2uHXsSXB4ti2knhNq21H45UXWPkCw61MftfoVzZVx9XBvxsAhM"
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
