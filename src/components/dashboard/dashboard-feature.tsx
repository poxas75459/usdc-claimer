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
    "59H7XjW2wk3vsxUbxuwTozFwLFMPreHfEoF7fLYdFFfAjDeFebj8kwJNkSVsioFm4hATu5XBc3D2tjXYQrSq72DF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i19WeGsGdy2ZL8iKCEg7fhLTDHDK7WvmRSZuNCLgB9vhXqXWVDuxi1z84uSdu6unFvZ9CWW6TdrbUhs643J5F7G",
  "key1": "5oBVuSoBA1GrymJaUJFwX4HE57sS14DXwoSSLNsSgi7pgY27qEvwv3pq81XmPVWD4iNNGXg87YvggzMKnQVXSn5W",
  "key2": "5pnRP51z5uaK6TuTEMB89xthWbQ91iSpbzQfWBf6oeFcoSa33yggSSR7m1B9natZZx73djAJEHrKKDqkcvPHByea",
  "key3": "3GSZ53LB5vkgzFTb56Kj7ZCMbGYXQv3jo8QJdV7oTSpoPLHvsNriWoRgWvUQARHdAWNZ7nUX3VBtSeR5UtDwbYSR",
  "key4": "5DADJMjWYBiCPXyWVwrmiTKwBhMTi9DrhvLvDWaSVAd6E1Cj7ZyqHdWgE3o7run7WfNxTkqy1WVsYd4mnLvok4ej",
  "key5": "5uTofksRgckCGopkUTaeqThVHaD3f7GnEPxkMqf6w3Psb5TCM6xPpjwNnybB4gF3B6Qm2TSW7b2ptgBC8ioWqssD",
  "key6": "5aPxxze6xebttLDU5xq5ho8Gro3mR4dGV5grqnEZFZVXnqhh7ysr5fBLYb3TjJci1UHCREKb41F16byWkpayaxuW",
  "key7": "pbYLKdEh2YxxG1b2AHzswrx7DspPzGRJnb8vmirtHqyfbfd95YLoB1FoNPXdBPyNig9J3XE2aYgzLvFUVqL5E8w",
  "key8": "34XsD59UFQLL2ZSyKgMP6aAiqqYPz4MLiUQrS7TmbRWjvFVX7Y1WtNkwNHkiaELJpUrf4RAVxWkGvcX4X2zgqYFf",
  "key9": "4bE65VCd6UdQmC1cZjHsEmxvSqiTWUp2ToYRwKYNEK1YJMxTTF8HSpR2ynS7kMfEexU9RM2XsJ2ZSy2KFCzBNUPf",
  "key10": "3vdPvC9U4zSP4PATDfD2hBybcKwWf5q1fzBodCijj7X8Z2rYqMuCKqoHUXMDzAzqpkVg8euFW1ufTjJff9tfjNYe",
  "key11": "3g3AVRiQPE2WK9RgD2maP8pQWF7X7vN9i7cCrLCzGXkTbJPW5HEnprzPs1uw8izE4iwXVGKUueSGweaL6VCpoo7J",
  "key12": "4YVtibNHjeXLajKkKBUgvFnzSMihQk5ZJyXGx1nnac1ak2CiYJcNMWF8r5P7oF8eFdNRakKXXeAUzaNEEr4MeBoM",
  "key13": "Km2js2EUmmHDi3UJVUgzLxW747Z9tG9sBeUe99BQ7fv8rFEHTKsihBLw1dJRiwFeyPGfey15X8YpnFxPz3RnAk9",
  "key14": "4Pqh3d3AEVd5h99hVw5crQfGKFcrPEkfMfQAYhNqyfWbDR7Edi5jt5LphXhbFmJBXhK6g9gxSeNJJBxTMB6rRv5n",
  "key15": "SqxDY4ffoSiUPXepxwGBcZRnJ3BDz3VPTWgHEDBL1JoWtMue85aoyHUZoNXMPJR5K2J4shjp12kvshT3aP3eNkd",
  "key16": "WnzHweJPrjQXsV2YWJLNNjeaV7oSDgeFNxmbut9Hcyuifts87HaTbYnpbabyywT1BYqj8cpuCc4tUdkPYAtT4SZ",
  "key17": "44pGVQMQVMZfNqtDQRMS1Uqu6jri1fFLjU6Zvp3er6zzw1TJX6Pto8MEg1cWfwB8fQDrDtdo6QthGxKKzRsLJWhR",
  "key18": "33abCUeyd4M2nZWMcvVeDWDayMkiiLAwhRxyWH7Kmniyg5MCsXwwWtUtg1FXueuUGXfLViWJry7ZYFcpzHWkuV1u",
  "key19": "5mC7ZXNjAV6DXRrhtwKb3q7Z6DBMVzjXBQ7xUy2pwRAU4jSwWFnnkSsZ1riEe1bg6dxTiCSrAxvSX8hvv3sLqU4R",
  "key20": "XogrSitzYzvU663rjPrqUaahWS3JHdGSQyJdLZvf6Wvf4VoBWajTBhopsXehTD1hA24jTnUCnVG5wB1K8d4NEZU",
  "key21": "3NMUnELgjWWuwd3W4PpXrPsQuj7kKToa9toSCRXMjnfkZ7F7WstSpWfdWMU61DoCVot9HQCKX8EVwvpW5XMzAhsH",
  "key22": "5Swncrhr8W3Q7LBuQ62zA6VGtYLrvPKLFj1iLe1TLkK4Txxd7CJbAYPXSJo3FEZB8Z3JmuQZZpjwA5LpGcNh8pyd",
  "key23": "N9AUY1iLB4xws6ucbXTmuvXeEVCGytUMa5uYUcM9fAndMEMZsdUn883JamySCbv9dnLJ7nS8ovKjaVBNEcDQRhs",
  "key24": "5DDKUXgicMCZjZ2WunMb6iq785vy97pXSTeoGeFTDVz68RJi5qQDVFbJWWAnpjGDG38iYtUVRmWGTJqV1R54DAVo",
  "key25": "Kq1KErrjsSFLH2jBKRnUCdipeu5aUfiTqKpL89RQhJvaryYiQjWFiuGoS1WYaigqY6uzHpBij3ZDrMoWUGMS9Fr",
  "key26": "3N35xdCqwAGAk2eCuQmYMozM3EpCX9ymJiVtkw8tEZmcbE2gUKh4Ubetrixi84F4Ab8qJxJMHwV69JpabWMKo62F",
  "key27": "39Gy8wwBmifn3ruypEh1Akx4kg6HAYxYeppdBHSeEWMByMjMSNmPKu5VtH8s5BDTvUCFuVC4f3EFtPzTFo6G6bzj",
  "key28": "3YZMcH1Hz3JSbcYMV7Z53bNyqQD13nkewa78efsMBCtPRNDiiww7VC6etVfWB8XxnPvJCADxqY7MLiyEeXbXyM6N",
  "key29": "3T95v3vd45BZbLKpD3dnjj9qwv1Tyxw7GpkNuU2aC9o6uRK3Us3PSPzc3QzbjT2Aki9dWEyWk3sCQFmMZdMNeyzJ",
  "key30": "5wPyNNV2sudhNqm6z6SuxSWh7ZoLk1WvKiSmKmGinDhCS1QAEZR3LY38arobMoZ9iyZS74rn2pLpYBj7gcLrTTbn",
  "key31": "43Jes3CiR2YKnCf4m189VEgGA5C7SfoYzKA8ZwarV2bTcnDYRReQu14Zs6NLuByoq5zjgYzACVSWDoSrYRhEgrsL",
  "key32": "4vVzBzM4u7NYSrchSvZ1mBjBGvcsi7vo4Egov5sVsjwpfy2ccrPYEV7c4ykSFLdyxmnGmGWwMQ99CuXcnmGa2rJ"
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
