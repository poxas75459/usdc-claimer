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
    "2WbMCnJhF9iucwGAihC278hi5pnRFywyYCUjYQXstedjtijeq6DcAyFToMqGzoepeFHVH8TYvEFUJ9CkCfhqrX2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xjdPWV5LkA8MfDGwQLqqLe92re5ff5XxYz8dGq7XDUMrbot2fPr1TZJmodGasBUYi7jMiBT1vkpqcaXcRsqLZgM",
  "key1": "41AXVZNqDgFfcMiDH3F3B7WougSry4D3nev2Y45HT8XxdwWq3tcBRPXfURW1cauX9deSaNynZLFS4g3umWZ5Zm1e",
  "key2": "doXoyKBovaZJ8prpV4ApmUwejGB5bzCDHb1ZYXqfPJGvZNsnmSu1sG3HXkpiaVpA8Zohbk2BGKoXMe3rPa9U2Mr",
  "key3": "393kdwPxCs7SwUwfr6KtMMW6XkkazPVDhu38BPByZZX77VC42X4uGukZNG19pWav8rHrLKVYSa8L2sJwYkbburvY",
  "key4": "2yeChPMkDu3f5ivv8LJJ3tJKqMeNHZJpVn5gYWkufybbVvS6MyxefcHTPwajCDE9E4pFMeuET8xeehwKnrc2K8CS",
  "key5": "3Qda9TPE7PDpfHMYm7LoxWMD7jpkxe6uWQwS7nfWTnvLN6oYqf9nYg7t1BnG7MCuvVTVYgAw2GCqKNf46L1BUEZW",
  "key6": "5RpukQjSFfyQhzfWbxtzWLP1ygtvjazCqr4rpohgxFVXBd7rUgq2aFZRJo1pDK42SpWE6Gwo5a4QMnwQgEiaikqL",
  "key7": "2fmEq2MrmtSRMBEZFKE3kuwD1ZCdDubRBB3imuQ4STbKdAvtJWBg36AivaZcgo6wNLhUnSmeThySqVS3F5pScnFW",
  "key8": "5QZLN7ppXDtqkVmC25Vmhc5fbuXZt3pB9B4b5imB6CDbhnoHpT2DE7gYq84rnDHxGKW1diDKePewCcNx1Fq8PiWf",
  "key9": "4Uw33J8p94mBcW68FLzYDBdGLDmULY8sW18uYjXW2meqXmVz8DHLWwr6t3zAfPkZBG3eQEGtitmG6sAegXo4ecLg",
  "key10": "582ZTD6QiqUAJALNf1tPKRaQpwkvJweeNL6YCCUBeqTxYJ1MgcowsPbRaNt6kYGYL39ZWyGUi3fb9DCBAbTTYUo6",
  "key11": "UgyhQGEHhAvdXo387qpUx8B4wBYNG6w6911nKtQ7CknniLz1HqqFF7fSbHuNHLzQy7aNWD6fu5eYytJp6LaPDxd",
  "key12": "2Q2wX5AyCMHq4AbfgXbBA5GvtGorvW17Kr7SWM13C8qKd45bDGfVEC9G9sW3twYh86d8DUVH5iV2Xi9T6hGvxQqH",
  "key13": "4cqKSbS6KUNxVNDBNxx9johs4Q9rjmTFw1ZYMdGJgUkpuxMD18q7Kx3eUCFSuHi8s1SS8cYJanuAhGeprnd8U2Z5",
  "key14": "4ywYRp2PsJ9xAE4brTo6hDwmXXhJ36MbHEJCVk7pB5UWGBuig1QB5MBmtzq9PA5M2FjwKBiR42x3dnHLsMa6YYCh",
  "key15": "4kUc8oNi5DJ24kncy6eLaeK5HSBQC1UFN7bwk6mpR6Y6Tdnx14LBHhikDzAzoBWDWK83v3W89eyjeKJ7nbCS3yhn",
  "key16": "4oWoqRoFQrFv57yen6szbbNqSPjfVjMxUYf5eHZA6HSEtT86R76BhWJvxLkPVi6fi4HFsSnogxX8skm8eEqxRZPu",
  "key17": "37AU3z22zoywXhpW5P7Nz93iDJgrqc3K2wY4vw83YAHNDZABnTwfMbQZ1pK9rSF86cRyzdN8qKsit9H9zUi5oKz9",
  "key18": "3haf2EavNrGbyWPEnqkFN3gAFMSXFsX66Dk47ugYbb2DcZDGsyJNjxV1syR4SX2iDTwzH2CGuRv7sA1AHB3sgHxi",
  "key19": "4jn6te9MGXGoVhBZMgYcTvwFUcngcQUYxFSsq46p8huWEj5eVvvUD4TJrF5GLo7b1oaPgoxre6kdKmynafU3TkN4",
  "key20": "346JZ5UMFKwpNFJCSRK5hP7XuEzsVVimSYFHxXhR8M4gNveZqeky5wffKNvAe4abv3P6mnBRvjvxxmtJ4uZR16DK",
  "key21": "cKrRRRkJgQsAN3b8wX1zhEABCJz2E647dYymopVt3yqgNWcckE7LB4pRwLyvNxzXTLGSt7QY2o8QFvKsCTGRUgp",
  "key22": "5AHzr3VgYhJSuzqZLTFEEiVReVAyrUtk7pRCYuqhvQ5smaWqAq9VMwUyaumC99g9NMBCXWYtvNxeyR1ymAZaMWnw",
  "key23": "5HifApYxW2pdjMmnYD1Sird5ZCxWVBbYZS1tPrnL3F7yBszEVjGz2CPGfvb3AGZSuRasU23FAcmVjHjepGFuG29r",
  "key24": "N1X1iKFsjbJhGEVtjtwTc3Sfs4jhhiJsbkEUaWsNvmL3MtNCoqEDT8UB3XLYBh3ewsZ7sR1oDHTMbnxuE4rSyAV",
  "key25": "2sqz9QcZNK6HMqcCb3qSkBMTA4pSGQVE9Nh22FH8r3oGAQoPAdH1SMu8dVMGFsKq6HCMSQkp7C9354ifPdfJsbgs"
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
