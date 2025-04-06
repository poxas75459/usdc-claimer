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
    "jJTE87H91Xznwf6vqD992gtGsRCGPibqnJCLBZCvapzZhgZCYZFyJvX7mcbFMsAwMp1mFHTWWh23ecgqSQp4UVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66SwPmgu3uCSr9KgnNEwH6kESxUF4JtdLz4V81DvL8XLArVpBMwSormDyrGUiHDddEQYvN7Zjtd9aBEbpKGNP4gf",
  "key1": "4PszC7Kpinh5V6jV9BWBb54oPguAPAX7yspj4TUTtf6h6AFPoGUou685iFmkZmEFEAvVdQzzgL2xYDkSWCMXXhvG",
  "key2": "5974BRigPRsxQ82JNhNJztenzbCYVXnVMTr5TetqsE2ttJwp7ENckXdmmbm1wvQWmEL1ThjuxNmDCxF11361iXCD",
  "key3": "4PQCfi6vqE8KBkbwN12icVRjmtxo5LpqQ7no1m64Fe6YwHoNucTThvdwbuDsU5mzB4QqaxkC8fcNfDjFYmq7UYkX",
  "key4": "27y5mdsnyym5KesUVjuKUkUCZUogYrfGm4ryBQ68o8QW2YBbJXNMdJfipNevonvJ7XhSWg3iVdLEE62kYze5BkYT",
  "key5": "2CQ8rMX6PjdG7e89XQLFJjN8VLDMTz4CBrPxCcyqWxNmuXLJyzh5GcGMajQq8X83St68RqAki8KJPT5JwGo4puQX",
  "key6": "5Q38Q6Jw8FiCSQpdob4ahboq5inHsLs1QpVAaizr8m3MdU9SY2hEWqxg5d62vJvE9JqASH1VW3XQ61uG1MVk2iGX",
  "key7": "43BC1H6ZmzcADD766pLCibP35t6RSauvTCwmKfLgzBbj8CrmhcVqesCLjNCubyRECW7VzETLRbMnNKinPxjsNHWs",
  "key8": "3CUwVQjeGBExKPFiSErsQqyAsQJCMGPxVLssy45mEdRWV1Bb8RsrJUJvVYGQvqbDiWujxxVGr3L68R8MYkzhjz4V",
  "key9": "2UoUoA88MeActzMHErdFAvKzpH2aXKHhgQ6St9XChTTCjHiskVbivDpAeZLmCmamBrLtCMZTLJB1zKDiFwoeSJ2x",
  "key10": "2LSyeDTESS1Ueq6u4ab4RgvRDbUaw3emp3KRWfH8xgHYB1TNnW4wyBES2zKAZCHxPuMbpVgfCjSxvQ1Hd7BtunEd",
  "key11": "4Frb3K27vhBMTKArABabvpxrckJMjk5d2pjgyXTgQ3uQstGxwhKFkpP9tuo17pRPMCWSg7YYNQnTfrofomoPf4jm",
  "key12": "2QSZw4pKuWM44oEEUoUBejZx86kfEZKFdkxauQB9LsMwgQABTf8SJ69pCzyCNXcibHDgpttTNARzyuR3GtCScvdL",
  "key13": "3LnV6hJnVezEEJb8sQuunxju4dqUkYPyhcZFL1MKtK9P6UyfN7oVqukeTVVSM4QtFKc4UjjxUdLeGybQ5NsMUthi",
  "key14": "4qEbRZ6nhQz7gFnmEkuS1NMJhojqmn3852ZYvytt1KstK2eoN8h2AB5kixsMP3PnMZcMsGqdjaoAut9gTZAKhaPc",
  "key15": "4JJXzvx18aHxoJjNZPEkYBXscVBjpFkJ4etJYgctfBeopvPJk5BBC9c2PU9YWpeY4zVsWGHedbn9woiE8B7KdwPp",
  "key16": "4BTXZXXpDPQ6EV1XBiGJuUPZuKdTRPqazA31DCCzXSZeaGPpw95ozS4Mb8obSsBqZFsw4FdprdUuwqQzn7LH8UXq",
  "key17": "4AdRj5Ce567pDv5bVj8LWJBnkBgZznZgApUPctUhKrCg84z1bxzrn8hHAVRoFRtagqybyRa9vZuhMB31TpuwbnMK",
  "key18": "A5He6dwBz79AFGm5SKorEnJtDgAAUVCy5LV3RN5skHuEKWfD3a6KpsWTe3ij9ooYSz4sRFA5ZH1iYULi73wLxZB",
  "key19": "bN4rcDqJk8PfdEw7yGsV2WtAkAPFF1qPDgyKSXJwsfaVTegnrJSuoSPpWeXNoiM5pz1y1AH3NsWey7aT8mvc8q7",
  "key20": "61KwyEjkgwCaLYVfmomawkyrjFCaLHA1haqZZDDoFKGQ5SSQwc5g5htbNNqMkVMZVpHpyEe21MZoyZ8muAaS1wom",
  "key21": "46NueFtSaQXyqbTBqk1NcF1HKXduRvgEWy853FvRaDwvkknnu5zhVgy8FJPuCPRX9Bmdb1K4espqcCV6u2j8c4xz",
  "key22": "456P71HYaXSmPKaKywKH6KN1VHbh5RXAMTGMMMgRsbcZyx3bv2sjmVFrvya7N1WyidEAc1ctMv5zaFgGgzBkEKig",
  "key23": "4MHLtS1T78vXdwmPzFpKp8XsJ7cJyYQzSrQxfVoeyj8GncWp72f6ak6K8yG3bNyYEKBdL43MMcJfXEdeZK28NAAE",
  "key24": "igGSk1pQHRLqXbmGTqcm7d9MCKjZTAkSQ1Wv1pjj1S1PrcE9Hnr9AtBfqRygYEx17PfWwBXTtsSLJZTB9sfNXHU",
  "key25": "57K4S7gXCxQa1kRcbuowZTXT3WtNnYbTm1QpGPzi4W3XYoVpYBN2RTonvqSqoPL4SCMPmj5RjS2Kzr9TMYru5Mvm",
  "key26": "mesog8WXRV45JV45NYc5x8j5Zm4FrqG1CitJegzQ6eycL3CuFL19uttqnnHhK53AZiM5ErP61GCraLDtb4XUUpT",
  "key27": "2yxrdEpzasqTog5bi1EzvbEpikJDRvPPwdtM7wggdXGb3z2tgLHzMxu6SEeeH9AomgB88TNZ6HiJ8UFKQnTivXah",
  "key28": "giqAgdSXdT1LuitMzzZWUD8un1M4r2RXZ93P9hj459WdEpCDwUW1WJDWRyu9HL5BhZUsupDmr9fYNgSHrsyBz3c",
  "key29": "2EMQMjrDKkPmv1iaz7WY585GExc1gENXGjnzsxtXkUcFFLPTNQLFSN11czeML4zcPKsb5Lk4tJAxCVwKxZepJvsn",
  "key30": "2sFXXsrtL5j9N9pNT643eZesz6Y6Ci3nGQN7NNL79D9SAuCuTqM7sjtmQhSvVKTDiBLM44D7LbWrc9W2vydjWcaY",
  "key31": "2PZBbsfN2616dqkiEYwsda37S4hQvB9FtC3rLoDhNq4fUhyz2X5Hqs758CA7yaGegtsg56ooJnuiFUYRAce4Kriq",
  "key32": "vnmfDpAVFeazJJBySAifaDhG1DUJCnAVvmU1g6baMei23MFZCvNW8q9ivaqRaiHWA1kLmtyih5UwD1yMm5tNCGK",
  "key33": "4Z67ftHN59KsLv8V4kJvzepoF86dkB23AfPCscC2ptzppaWzHhQ4HSGtaGKhWtZaH1REnv88DBL5tiWVr8aLHnKw"
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
