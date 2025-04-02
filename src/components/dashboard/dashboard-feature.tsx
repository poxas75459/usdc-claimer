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
    "4ENWHrCnJ9rrpAmBTe18HFvXiHjCQKdveGRX2eQ1qi1ZgdFs2Ci17J1xockTQic5TJRHkUiCRBPB1RjCv9ojsvDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fHTBLnfu7SevrJpungGZjtoJ2WUrELPeoUJNdqLCc2J2hw9cL9mFnWzrH9W6ySv45KBEwtfoTuaeVWkFUYW91kQ",
  "key1": "46EExavus6KAhjAjnbtTZXYRxYMDrQebMMyEkMuAvEJX5aKdpVtbAqe5yPpfKGv3XqDvyt41HHjkCrBERiBWy61M",
  "key2": "SBfKnAwqBHd1w614WQtsEv9JEWx5s5223MKnT3dugWpX4Sy1LfZXHYQnAQjFTPjZU25hLTTodBJJuZeaBdS3f9N",
  "key3": "ZnNa1m3Lt6RzcYdxnAXveV2SegxkVTrzPiwN1Gu5b8StgpXn82UuTn3PaLxdyU4Xrg9nuqhGWTe9SdGDUVMdg8Y",
  "key4": "2cw4FDDaoz3HYmG2NFKXuJuXbDiQR5UgHFKdx93Cq5VYKioQXGnVXe4fqPL6czw7ZdRk73qomW3DZAgj3L7iMrjG",
  "key5": "22Be8ciR7KjX1rw17fJaZpNahxQz4sVH8WoHQ5Hydw5Zs68wKx6cQDDgDmNncBSRgs6GT1tQMkNvYioxuZMm2MFG",
  "key6": "47buUXntSbKG3eznzWAynWzPUmDwkSMWAfdNgfAu2NHhubfdAeMprizzm5xNdymqdn8bA7S4k8btNcdn85NcyEGN",
  "key7": "3cXmZNk5PirqoBZF2769dimPT3WVAVA1g5TCPXvPx28wLyLNAWqjQSA6DhMVkKpFhUsLFBUtQujycUtyPKRcZnet",
  "key8": "588kBymJcbk547DuacQtWsTUfBHDnR7zbtuRxLezt2cQ5VGr8FRbouTCrpqiyNuuXoh9hgDhq5dvoG6QoYxRMqjc",
  "key9": "4NCHLrdiCj3eAhixU3SMeMWW2nXRrdVzgRBHWpztLHmUSytd5wwBwybPYRLcccMf435iWpFb53fNMHWkKq5k38m",
  "key10": "48QHrxPSD5wTFyMZtU2Rphvy5evLvMeAycSBcnr6KqdPypzQ2GoPoyiuWYaPiqpeMXfoeXCKd6jwMsRMi1WzSWfp",
  "key11": "4eKqoV626kVwmfHJGzwy1FLR2NdV5mhFDY84C8iFe3kyEScmnT9YPxXbetWpxU6EYt7QD1GiD2z91qsqf3v7fvrb",
  "key12": "N9gMsUJfxD5c1omnZc5HyPZYbuHKsBgACW4bHuY6QBKutrxa5eG8o5HJcka9ozM7NmLKqpgMaPdwd8aoNnui9bz",
  "key13": "5SCSJeC3AedDFk1Evm4KC7eGb1SAeK1261X2eve4nRKPrpxp7J7wmZ3Grt5Gpyx6eKdST7JFwTQooo5hRfvLiNdz",
  "key14": "2K9kZyEhL6qMBEFtRTfrbywkAWk7j13AJUwoKkW8XHTufAUwt95MR78A2HSa18MptT36dYExn1hKtmsf5NCwLsBb",
  "key15": "3szpqaihg7uKYvypCdGtmzkqENP2eSwhFDGRgrYxnVdUAJmbSkoLj3d5ZWgY4ypCqcqeAjfNdpeF2w5EmXiuKoU",
  "key16": "42SckDy5VfCweu61AyTwrvmMGK4iE6uHLNEUr9pW1aaBzXYVzaM11HFLfiBZF6qRSgBEAPktQ26ed9mReUPXACLz",
  "key17": "2ydkG3LaVnkFLr9ufYMVtXx99RSFGkui9tBj8gE8vJaaeZKUNH1E1XFFzeV3XunNYNd8bKWyjv5KnnBrrQErfz9F",
  "key18": "tVRwfMcxMeDb3ziZj3grw44QyDLSZH8i7SNsPDhRhb18ZCTRkLVvqeWJbUC6AeXwFmXD1tt8RPcjz2JCnupRcsp",
  "key19": "35DHMDouLy714QATuRpHPhTPcVLcPBFjENUuK3BmCxAwHT9gqZezbPbRBfRUf8VwjJL9A4RxYRYmqokuz1uxhcjF",
  "key20": "22jwdurcbC3D27CGCz2iUttpMwh3tnWqvPRRGj3GuCk46vGBgvRt6HS5nbdTCqG6QotE84ztWSDZLS1Btz6xve24",
  "key21": "9GuBgFmoBwxDoZ23z4SLiQB5Rr3jaiLbJ2evKsxBqdbaaeVjK5rJTWkyJvUSLXyELujqsdDsDmskbStm7cN6jVM",
  "key22": "S7PMuAYknFV7Uq49iRNND9A1x3HASAh33aydRVMQknUEvjQwF2xrgTevgaG8nXLfXukxFF8XqCJ2EU9RZEEejpL",
  "key23": "3DyUU4sNQUZfYAV24AnMbxHLbQTBV4pPzBYj8R2S4hafTEg2CyJAVH3PeFpwtcERVhuipBUfWwq56fRsNjShPMWd",
  "key24": "2dtDpp2XaJwZtrXrfJU1YMGnHx9qTKa7kDGMDSjjcx1LbpxMLEQaWq9BcLB76uNTronXz2Siy8vbn9vDcwhk4TbQ",
  "key25": "2r5qEz6qvSi3rADmKrGuM7W8DmY8zvnkWnBi2LBHog9NDg1aThEvEU7fmo76fL66L4dQe1Z9xCcf9YSSHHJerGYH",
  "key26": "3nkCAJzG1DVZGmCuCjSpafH9UeZM2cmVSgo7zy8JonGdZ1TS4iupdLqhq3tL7eyCj8r6CxrAf2ECx66kXYBEQ3Ei",
  "key27": "4JzuFGHWEPmYEkKo3cdaRE2TQf2BpNYvdStnwRYYbwui5hyk1EbEDJHkAuWUdARvTkaQ4dRZgkH6yqikd9bfUHSD",
  "key28": "3bKSJd9ZQBooxVdnQWMPW3xsvm2cLsoYkTYjZh9vEd1VU1Hj99utDnTTkwwDzBsPVopjVqjUJsioUQ7whLsS8C2U"
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
