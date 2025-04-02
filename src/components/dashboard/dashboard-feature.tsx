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
    "2RFxyzx7qESmasab97TUNEv9rZYJm1qh7EU54vJD2w8dcSJMCX59fe2eCW1Nu6ij7g1tqcVkK9SoN8gayNNWx5uV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BL75E6y8UXjwS5PdjgkLTDNcrmJjpL8pxSmijb5miatThJNcePLVdG3nMfkgbyRhd3XTqxAJ8e3o788LjxFXtYL",
  "key1": "5cs1mUmrJV2Eun5sLn2qfF8tScvCM3swtiZwj2WEjWh7ny7CArBbsRNQdGV3uP4mjimmZRhrfUnYkotURYLL9Ry9",
  "key2": "3jQQsz6T1tdjc7GbA67hPpXfHBtZjBJwSfrGbAWvdqRq9BmoY6PXK26YCyMvt2J8aAss9tHMAMBWw8KvrSycyUav",
  "key3": "mVQEXXsN2PQ9YiSKTfCehYoQYUvpYh71AEBZ4V3eXWXBNwiWTJCFyNxH4RD5jcRZXa4DGtCaMscbFz5M7eBzzd1",
  "key4": "2powgMk43ANbrz3ZPvUkk9gUHCUEDDi9cg1mRHRdLwqZUwLTzZrBjtgryp5obFXULodPgYp8m9TwJYd1bZLPWyCc",
  "key5": "uu6iN6WqLuK9nCk8XHn4wbjJmcGWLowiHJv6wo8CBefpH1xcYULXpXGXhmVxw5GoeatJqVuZKeomTYZhvQUU1dq",
  "key6": "3H7wFUp9TLJPMSw5kRSHyZMXG5A9SguH9ajcvzo2jS7QWKUL3oQKcvBdhZLhzfRYYJLUndXFpZ24ipUCbE2TrhAA",
  "key7": "5oFwYeBXbFkHAVXyaoURdYhRKUVjudieaiaGAKsZQNNXb85RU62eM3cA6YxtBR74ooR738iv73vzEVQkgqdTUBD3",
  "key8": "3DK96aesD2Aomdv3eBhmWkdNgSZPkmRioi5D2dkYTRMC6cs1EkzgTMkJAodfjvJtHxuMbGAPfdKzsJQm5hakENGM",
  "key9": "3VP1AZ2sVBjQzE6bjeuU6pWaWPhAc5qkRm3oV2BtzjhaCBWrHiyUJMHTEoQfhpCqQb6uim66HF7VwWqZ3YyKJbxE",
  "key10": "3m8YZAew2csUSMJ6bykWRM49p5QVFEMQUiWQ2gjvTmZX9FJD98Rg2FV6ct1Aue44ue41DM68UStvXibojJoee9Zu",
  "key11": "5HkEZTTgDwty56zt2kUz3Ah9L6iG8zAEfb2V7GPA8euHZf6eTxM2DSZVPJMcCWtnTdecjhEHaazfY2mocyMMpoom",
  "key12": "26cXzFMMuH8KE2uVXqRoEVLVpEafyFvBcAH2k7WGDf4iDvV62yjSfzwtJsFxmnSz16SC5Fvg9NuGJkjo6AVeMfgA",
  "key13": "2Nbsz4rkErvohJYEWTQhBf5wxwbH4MKixMuyGbLNTu13aVsXD8UAVH9ecHypYcPoC5XKxYjj3ufc2pycBLguNGfP",
  "key14": "3GBFQYuEfTvgzY41qNakGE8A5Cur4EaFFKX5KiKfJPu66hdic2SQXTfGjuMEdNbzGNiiD1Q4W51JWAkWTt5KmeqG",
  "key15": "25du9y7nBy6MUSKpqM7LKmUxedYfvQy3XUTwcqMeiERJjbvWdGR15Bv71NgA4hGYnV3gokSn4tRYRXzGeo2tyhj4",
  "key16": "3CE4w9o7AbcXYQP4awpeWipqEyTydEHQDxRiTt4u2UtSjZ1wt4TY9YQSsH5h4JTef9udVWQcEKD5qvhsEEYNQDTj",
  "key17": "5CnBpDn2nYPtoB7gMoKRfLWco8WtE67Sh6eL5hPbBqMNH9cBFbT11BbPm2ABAmtqjAWn4e1Gb68BXpQwjqSB9Ecu",
  "key18": "62nqJZQvkpdTS1ZVhGXcJVbxAHnKJk2KFwbkbGh9ACAP8mTqtGduPbSx2LRmCwPHTL3zNUMkh9DdZY8ywoei7a85",
  "key19": "5Xta5VNHGc6tgEb3gZBd2xUs3USeywxxctMrEva65jwKQq5r7ZCMZ1qrWcAx8caFoa7SwgBbaKkzPfDCfrGJBef1",
  "key20": "3GYYEkUo5jGB8GNGngVVLDqftnMJwqXgj5sMqom7as4SKmFqejoEbsginci1NREjYkvzbEsvxgyXnPNrW8Dsu7vc",
  "key21": "mXkFmUySN5pjAMyMWmBRqjii7HdyDcrgEtPFpDUHGGWFu5cyT6YcNtERLNZBV342wFjDFAYMzMyjMZSsWRdZuY1",
  "key22": "2jhe4BNVQLkg5V7Q5X6VDmb131WQuowpRFqkWkNiJnx5ED44n7BMoNQpKT8YgBQoYEsAaQLikNGKX79KJHdgNudS",
  "key23": "4mZK67KuntHyybXWJPrxxHNCMgBsnCNeEjEnfhEi8qY79LGq8Wtyr2HmzoDESfAppDrpqkyBWLWPZ24F8VHEPET2",
  "key24": "5g66ZM6hGze9JMPrQRoo5bD9KxnwiVX773SZhfTTPMjxDwiXq1pDBbDpqshEqQeqyoUc1U5RLZbGYDUAeL6hbCf2",
  "key25": "3dm7cTYVXyu6h5kbS587LPmtRUfuQQwbNDXJn88VLNE82tGQqDkE5243RomENxbsKoEfndCoypBAGuytNa7U5217",
  "key26": "7SybxwsefEyPyJe3ThMz6EjBHpm2zRMSJ4AnuNxm9rofYVHyiEqrAsts1NzEhsaH6t3quLHcJjhH5Z2xmu9BTVG",
  "key27": "562VZXiXf4b7LcLMbfXS1GmP6AehoT8dTywUxEfS61udUUuAr4xx6jYLU1Q4Fa8oeNNZrZtR8yenH9WZCydXKEjA",
  "key28": "2kp6BMD7QrwTyaEs8z1FRJbwAGubRurxb7a4enuG4m3Kr59RpfxAJdK66Qww1LcxuncXqtZ3vxtXoo9NAxABKEUq",
  "key29": "5HXWmkNyMN1ApX4RTdsvzSZbfDvcUVTaBctb8HEpga5i5LA5GiP6DfvgRiVSoVe18YNefKCDm9T6JAxucJiakNUt",
  "key30": "5RNftzhae3ReXwr4Emu6rNMEsYN6CUDhkeHKyQPzk1Y7ktiAhSPvSpKfffiVDEJPEmbo64Z1tZxAJyYfwfSeS2WL",
  "key31": "4eyR58u8VDoMwHF9fk9rtBBcHCLCMvpFK1Uy9oj46EXACiRJsxpfmTBPecCNvnjAK8Ndh41sbMMRzu8zyRdNZ4ob",
  "key32": "3mSS5x12k4EdgoC4tCiMVq23NZUWKbLayCpnmDm65rMVyLvMi4SG9scCD8npVfCPRDXLHh3KwkmJMSZAsex4baR8",
  "key33": "2upzV1LAhPtfNKcZUrCzgSqrzNfky8NqNjFvqU6F5ZT2vGqaqnTtF6L4uZXwh8xatEt4m9Z16RH3CR9BGtmFnmf5",
  "key34": "3YQTf6FPgFu92RzW5FMDesDbKW1RzWHPaZT1gmN7iYPyp8zPDSCPYHYfqECRb5J66ByEEsXbJn3kth2v9BhkH67q",
  "key35": "5unaqJe5bhB3FCRXgA9M4Gq3xnd3WihVfVAYD3J8o2aQBDFLEfqEKpz2VR1QcuH6djqRz3bFtDUk6Ud7ziWe3b6w",
  "key36": "2ke94mzX2xPdPY6zcwDrq6MAJZgJWFEheCEG6haiXPSv4WSWJwjm99HkJioVuMHmKnnj66TQ1mU5xcuf5RpLGrPY",
  "key37": "2gFDUzunmnXuDAX3Rdv58rosnh7pH82QiWVhzWp3nMqWq7x7NjGjRVnQYU1FRgiwAUmnUwQ6n6Q52TaEaJVNf9zg",
  "key38": "36SvjkzajKELULA7hQHfWjSamhyHFKRHw1BjuekraLxfQwV9RQ2uWmW6MqMRnehbCsFkXVevtRcawsQHNTReLzx6",
  "key39": "5Le373EnFZH4yPKE83g6cq3Xb4PnvMqs72UPojeNtx9MR83oSavn2sUiz5QJ3L6oE7HmcSN7ZbBkQKfJhJzCZ4Yz",
  "key40": "5rVM1Y6Q2NvEcEj2x7WtQ6yabiBnet3pzGhh8KFp191knUmHAC43EsZ5171WJeMhb37aujg6e5KpghVA4fXAaHSz",
  "key41": "4RJbBgnZqUiW2NgW7bFfEuXTQVX9AAPsjUvLoDRdoHp4q8R3krERUd31vsGX8vm5bdV2JVPJ7mXU4RMzh51KeyUD",
  "key42": "3qpWA89SomTiEn17mde9xzNpYBfWkNRCM6C5WomXmwcpZauNTKn95LwCRrD65yeUVRvx3x3PYsMJcBHj36NrcEkL",
  "key43": "2315QWsat7fKeCDkuJVERoDDbgWWsqwvNPHki7bitVLJQRYuy4kScJ85rdXLHkbQYtaJ8aEgPBQXy45Tjm4QbjBU",
  "key44": "2obDYkz1rFsWs4vWxtQ3Qo1d2QBjCKQ963bZjyeXcor9jCdYdgfDADrromUeoPL2JrxzhHvCVVezfirpP4h97oU",
  "key45": "3RXw1zCWhS3adDVUJNd3XGDbAFKiaWuurrsDpf1CYvo38usWt37Lto7NeFr4HXdm9E8yi5Z8p7ubQ2CUhTXmEank",
  "key46": "4nyGhnmSpmrbbjC1W4LidAZYMEg7cKwfWj3rMYiWoimhwQqWsWRFypMSKmmYshAv1rGPJtou9t1hoWnkF8TXG5Us",
  "key47": "5TYTZMgqNobkonzWWEWrYpdp1Pq3bLusaMGVHE6rpHHYCsXV5oWkABDkxT5onMDX9ZnqFAVMjcMtaW9VSQSQUvo1"
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
