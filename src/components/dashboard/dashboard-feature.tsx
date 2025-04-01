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
    "4MkquzuAZZ2Y9SuJnZw9AdAF26uBZDtbFxBNVXkGvc4QXm5tSFVzModYQLXvmgfv63eTv39yw1vGM31oeKqxtemf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ctosT1UKuV5RZWj4fTFumrzpyg1kDYinbpMpfQXxgKb8YnxHtbNnBMcoJ9JuAHsFH3Lx8VjNvszkheW7wCFZyD1",
  "key1": "4jsHBZxNQXbYumUDabADTWLBNooGETckYVTW6cAQzrTihvDCGxbrRDPo7kbnVFeykZbVqRxRasfphPYykycHCKYX",
  "key2": "5BBzafpEN33gWmhpMKouJj6VRqFJWubvCDZDC3fAALQDQBDaaUGK6rewfRyTgn8Vgu72mkzwFf7b77FRamjrPZLT",
  "key3": "3y2TS7vp9waWEW4AwmGwvWXdWJkqKWy3dXvext3uP3tfqb5fNbkCLokFxXvqNg55JEJ8pKR5hTfBdQLwrsPDadzR",
  "key4": "3RBRqyB6EQGBxofa9XzQedcLr4VUoaW8WQv25H73Jqtb6AXaA6H6tHjGAH3LZbGyZjopVWPR3FrHXk3ASFBaQq5S",
  "key5": "4rckWoMpscmxZp9XKSivkpL38XtavhTBNaDYQyAeLQnjE2UTQm6mtuMHECoMMA9dFrwPp1WWmBoccxTvm736W1kw",
  "key6": "2iJJyxou97QSCmWGTsHqXvo9UVVPbp4652gCB6Ypy1JKgMHZCvQ7g7SmbKsL6pBs97xXq1AVnSGjshRWiVUJTtEE",
  "key7": "3nnKhUzGxeFCuSuHB1xffQPMnLxXznoF75S5WcmVTMF58sqnzFme5p52dKcoVGyUpuADSdEUSDXP4FWJLw3j3Lne",
  "key8": "5B6FJQ6sKhupGKhKLacgLXUSTEcwvd3d3X92C1qX9RwU1KWxi5bR2xuStp4hZ7RMPPBwxq93yP7stXLNV7mAXQ1E",
  "key9": "2HWk7hjugHs4wAsn2XUCMD6wKAuZk32YmjHL7bVJQx77MXzbLRLdxanV2hN56ox7pN7psB9dFyhg9ZgjNERHdKGb",
  "key10": "52Ek4pR76KEwPtdsVEiCNByGgxHp3tyFTK1ZjQQzdyXcop5jVd55VUUvh7wCEmtgq6zYebq9D9YD7xQXapzo2QZr",
  "key11": "3dG9juidNhzbn7LtFi7nfDapKpNHZVRzyZNi6p6rbUiNdq4xE7yj528cKJyuez6ELN4Gewp1FBSbeiCr5jSt5Vej",
  "key12": "26mJ8V62mjmukJbwT8BXVmMSH6mTXQUmXQBAGPLF5ZyFojCAMVp3BC3vKYAY2HsCuGxgQXMohH7CG43u6AwuK9LZ",
  "key13": "3QZQKJXPjr8qnGSm3xFzp8wyB5fpyi6WkigFFaQTQUbGmZyZA47RDDfQHutErfBWWw7D2JT8YFZsaiWjBdjBmg6y",
  "key14": "eJ3EZkCaEBku7gYfFjg16hycrT1VxYLwU9UvRJDKQqU3swvs7d11wBCC7Thzeykv4K7bcvW8F3A1bRjdu4zYTDx",
  "key15": "EVnZpf6JvPzqX2Ycmem1c1qrrLcxnWogWE1KNwf2Zbrg9NsiEezghzinxXmJbBjqbHuAbpyyZqxYnJ3UUcLcYQb",
  "key16": "47Avk9pZmRYnJS37hZ6zVs61bYatxXhRrdiSECq2PwiNXnkom7vWKNXyx3LWhA137c1jDECFddPz15wAzSf3YHZr",
  "key17": "QNQmeh2JPmrrCEczQYuepfJAiQtpZvyHVX2ULCXyNN5PGhhB6iHSqeXTa2KG8xATgyPxpNLWXK5jimUQCPe2wDr",
  "key18": "539wYfw7yyRQL3SQS1nBzpbULsH1FqAjKxUmFhD1wcH9qr2wzsYsDuG1q68HvdsxLGEj4SsiABwpQNm7EnQmuPi5",
  "key19": "i3UVyzcjP4yWCj9rL2aY5mbUXdVmkGSHm4CnaegjBLhya1FTgYHtesTBt7ndLuQ4knero9gUp2qZYQ7wQwHh3ZU",
  "key20": "Mahf3tqhj7iotbqwauu6axp7yLJ5FozpVc2VjKuYQP8WcxoesGSyHERRc7LEAbfhaaRTzGYnLVJSFAZANN41FGs",
  "key21": "3NZNFbhVaXNSKp14Ef4S6hPy6ruQExQxEXBzJG9KbKhnHSXQYrmsnQc8rZn7kndQvXUadB2yxAqMLTrFXWHWrtfY",
  "key22": "2hijbKJWZ4qnb8VwG4cfjTV8KqjAkyDF7uUNKrugja4KcYnNFTiHS1NZ8acXc1s8UHajb7s7uiRaTx5Jw5kCFpvg",
  "key23": "2tz9BcEa9fhwcee2JGPQBryKDThAtBTPJoukwyJZrg3SN7qxjVtBwnqZGx3Go2C6CsMPd9G4yjKhKWoYuHmX9J4H",
  "key24": "PLAivg31wC5o81XNJvf3C4Nfwo2ZBdBZXV55KK3r4RvN1b7fCVETZfgq2gcr45EeSVQstgfEPcHANqnsgwQfJtZ",
  "key25": "N6sUfpp5wJk6YFEAKfUCYzVoRJZsWCbn7jpdx13Dp9C5wPJLpaBY6pPEun6ZMEZb4M4Da1DY8T1xHCDGCFg2nAo",
  "key26": "5KPSmeavjkyuPFjmTEzi2eJyBs9BNSqM3v1WLHJhwVanC1ZEwwY9N1GMM33VPjXLFYfwre35Z8DEHrD25PQ9C8ct",
  "key27": "2uApa1AXRRVTAyJpv7i87YHVq7UMaNRZwzdk1fQEfEcBLktdDEcUtJaFbG3TsmuAfYUpVofVdAnnXXeJV7k67zzi",
  "key28": "4X4dG8Rbcurxn6F56jpDVYu6Cq9h8Zp3zpHAQoUfm1K2FLov7yaF6fAzfiFXn7jtpJHcdiyQvvpCrTTB8A1hNfRC",
  "key29": "4yK1vCMKXtNzHUqJrEAKKXjrm1ZC7bj2Pu12pJNHuCAj9pYATgS4XD1xHkgnWGsQ5tG2LWN2ZhkU6L8Zzw8NEk41",
  "key30": "92N4g2xCeTJXNCpdUNiPBffbqrgxhUBz4pxAEDtdL6875iUNyjW59A4WTPeMATNzqm8gVqeQWnQjki7esogQ5fX",
  "key31": "AKcwe15eKPH8TJJKtUvMBk4pMrPreqq6VezLGzenWGB7Sagk26Pv32o3RxieLYBvgXqFZqgJ1vBei5Ca7iVXzWS",
  "key32": "3TTALMW4j118t6rzU2BDpAbaGBBBZBxaAfJKL9XrFcEh5JRY9izfH5UYdtxJ6x83DJRkxzydZefoJZYEcJXoud4h",
  "key33": "487mtiSmr5brkjfpkP573jugZesn4sesrfaje7b5CVn3dMAq5pqZEQuE8uan2V8nDbjk3Qr67HozvMpAzXJSej7T",
  "key34": "LuMn5b8S6vdwCreSDsjy9dE5bPtbvsUZx1VfG5hwRJATQGrxpBLcea6iu4ijPfajmkKpxoJL249HAZ3rY8xoNGi"
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
