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
    "riyr4orBDR8NwphJyhmKW1KBPjCnmLxBHG5ceeUkW64RP6eFBPcVNpHfhoPUvJ9P9GKkWdkfZgGkpj4JBvwg7FC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C5UJWEDvbJNMncPvwzy8uTqSd7bY1AvLGsf7LZE6TfweAmH63JkRK487NiV7CC17wA9t11spztDtqMuUH3EjLDP",
  "key1": "2ZjjJAKZysAYpQdbUrHzVfuoxMqBvzDRMbeT7yGMJJLBSnb6XaHX1RCu2KGjnEnsEQGcSK6gect5EuuWYZm5Y1Fg",
  "key2": "rYdm246Fw2xzHTRsrQ6ZPHQG5cSRXsWnC33iVnvuM352Da9ma2zjwrG6CYcaYtppcSmy8QvzdreueNRibasK6mh",
  "key3": "4PSdCV2gRJDq2xueV7WSKZDpooYtoQhU3Mc8Z6c8gZ5z8rURwqp1RzhM66ri3ZVHp5K2RWtoxDqrocPPfaDNiDxj",
  "key4": "351TzfhgTtrR2iNXmmnTvrphiDXHtYiCmkiT7Uh3VyLN85bgNjcAkS8Y2yg8KNavBGxYzUe46QBpFwZvtuT6yTJe",
  "key5": "4GBaf3eero6X7hqMpv7bGEwM1B4AjSYvNtNmmdwH6K6LtY6V6anb1QgwzfDf6EM4yLaSqYvm6F16MGHLrCtNyMuq",
  "key6": "2u9wtwntJYAWbYhBGYXnqYMY5DHhFp1AxQFi4sS3RpQmKq2sCc1FNVciVBbBHsTi4gnHYQhnJdGnGBzs1n6bW6tt",
  "key7": "51f7RtjbNCutdF5JUBWim4Nn8PAQ75Z51CWKBMp9QPCXNSHe44NUnrE6fVXiPwv312ijRdZTqqmtF7JLQBePTkpW",
  "key8": "4TtneMFLcenxz413hEwFHw3r7DaDnWc6ZeH33dYiqK5U7Pn8yKWpD8oX5hgingtnPgh5MMsYjicyg4VXjk2a19Bz",
  "key9": "aQNP5r6Xda4Hk44arNQVWfCWNg9FV7TqsN7S1XBxEU3QT974bt2e2Qa3yuFGwaqwHexRQGXYD7zwGqQc6g8nc15",
  "key10": "4vgg48TsA9q4yh7awEH7Q7c5GPio7mcEJQV2akiRfvEDkPuXa1j4SiBd46wxHrQYuJjLhdQ3BPhqNJGXEeg15kFm",
  "key11": "5D7bs3aXfiDZxkpGyztdyTaacsHaUjHZJWA8LvM7fk8tbJeCfh7PsKdhHefpxUeB9JHkfshpUDFQVXd1yykUDUM3",
  "key12": "4THQBw7aMSxuS7G8ecfUJNYzmnPnELeHcuZ3q5vyr4HhGG2TZuSUQM3HAxsCykS9KLBsY3R2DvwyaZ6hH9BXj46w",
  "key13": "5x5NajxoPLd2Sz8ER81gKbgRr8rVEVEPHbi2yC2DdDTJR84SQuKfyCWNf9rrATZAorgtJe45tVsB4eksbo7r4Xy9",
  "key14": "5vTdkd3LmRGYUnK772LRmyE87Sn9iRFgucy92pfbxWdFwZcC95bH25eAPRsACtmSUTSVqKCCU2KaSivbaM5ca7Uc",
  "key15": "3Z2gMrmmY4KzhTaRppS5cvHVZ2w6M3T8QcWjXm93vWhFaAbSdBHdnJBJLGW6W2VcNxPDCPAmumscBm4dKMbKmJXm",
  "key16": "4vFfmmAprKWTn9wTLzBUVSWA9JxDUPnZq5rSbReHQQT4FFvWMHR5HonQTFeHCdWxr5PzPbx9EKDnDDJErvCHgnn4",
  "key17": "2HnBMmGLu7GjZuxPtpEuySxYv8Yf3eNzvpPjbUjQeJXaykhB6tCuJ2E7Giob6z53skkD2RHcKvkv4QNpoZiBDjNc",
  "key18": "5SWz8BbeJM88Atn7kuWcFrNqRj7yxE4zd1GS6ikoGr7nDBfHVnPVceWjnAextCvV6JgX6fuhoVFM3XTjXCZn8FXt",
  "key19": "3Huy2g3gMeS5MKWPLoH1JMyQxhGHyTEEe6tgbRWWnSTaZPX9ri5ut7DMgf1AtHJzgsARQ9D91X8xDBhDAKWRyLEM",
  "key20": "53hZByrz1wb4R5YEJApXCV6dU4ubv8MA4iEZhSsLSwibK4jHUs5MHvcXqNXxovbKLBjQADotoQ3nUk4X3DKjrZg8",
  "key21": "JrDmrBejNTDhJMWZA8gVL6c9TB4LBz7WWnwML1WoaBRuqf7x73C2bG4bWii72xnThEUcdvSmnYFwS7Y71JhDZAA",
  "key22": "2W7ZbZBCNbNHBcD4A163c2monHj9ahznmUjKEuPPMouxFn7a9tHKS19AFBrpp3eDeATJRBSA4rqt2eLkfB4t1pec",
  "key23": "2vgfqejFUDKE5G3WHV522Vx2oSL9PsWbDG7MEfX3zvBivGmEoUuJp9sSkVokH5pgD2UEomdGKhkQ6ctHF3B9PhVC",
  "key24": "4zWRv4bxKoZNiroMLnhAkeGea17pfZXP6N4bkfwVd6RV417tuD5fNwcs3YVjyea9NCBT7Yis8etkJKSyquftipmM",
  "key25": "NrsB2Ac4zRFAUBnfFuR9UkNswBu6wjFg7AnARRhYXQva556FwcUiHaYW12hHN4TVJUJfQi298xc8RsURZQk9EJt",
  "key26": "3hu2MWzB7Ri3a8TZLBzcDiVjjLuc4uLn61kdW3i6vPuR4FPNynAKaeVdy8iCWFBpMBGrMUG8CxNkGZuiHK7tZnU9",
  "key27": "3PT7vDgUrF6GUrx2Ym6sAw9Hki6GDRRe34mpeJvTWPYRXvX3WLRfrcxDZMwsJmhutsU8ZZQGhXHhXFavvtjdbYrJ",
  "key28": "4XMMCbxSQDrCRv22NyMtxtu8Umi4SXL5BT5fawaYrq8rK9RVkqxHgGJL34dEYuB8BZtU5x3qXLEPetaSEH9kVUTR",
  "key29": "5beoXWP3YAE6q6a8WPYveiSta4acvdUE5cMW3Ka8pgc35BFhGvx2NyUdAx4geny17DZNWa1oKv43dZfawCKCTyQT",
  "key30": "XjeKokN1XMZb3PxbTek8zsy8dq6dRMpGcBTYSoR7Sacyzmu7q6oYKRGBqJUvZjoEGSLQ3neFjLUU5Jvqg7f92rX",
  "key31": "3ktxoSKfDVRASkkYnW7BuLJFyFdcKnF8xczcnnMWaWChMuK96jeWRSrWWKT3KJXbT6bptuwdan7A83kHjt4d1W5d",
  "key32": "RvdVwbAGBqCM9iviDhJJPMk3cwJjELScp4BEqY4VfZ1Gvbk7hAobVKdBewHXnwwjtizQnka4NDyUJ9vCqEKTkNz"
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
