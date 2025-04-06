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
    "2WkS4jghoxsYBz22jjh2kdHcej27vzwignj7oohUapfDY4RxhY8sNZo6XK84NGuScZW6rmrGLLsQDozrVivFfsqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kx3VgzrBZJfZXq3T4ALT6aWGHTd1TR6bXN53YiNYiZAztuFdWytipQ98QCdJT39uMxzx1iacQtxw5S3Mu1HemJD",
  "key1": "kz5dTA3P4ZXJjAVSDU4PdUKFoHpRckTKR6aM9bFkCXp3H9AnfLCir351daRshbD5f4tjktiiGhYb3UBMX3PBTDF",
  "key2": "4U4NUrMK6PB48e6XhYKyUaYGUJCKBX5C3XMuWdLemefi6K5KyawuHjVptnBsXNen3iXnbcopJZnianFdPVoactJY",
  "key3": "23VsoMy8Z5NDDWZbzn6PPaVJav6uapjL7Mv4TDzCAVoqQGSC2pPPur1pmczm289fC5xRXAUf44aqeD5op1evVAsD",
  "key4": "4ArWh7eri84Fd849WSBVeUnXA1T16aXm2NMCZu74jDJFjJih1o6oRofBbBLV8twiMmk2NPQzVUeyGLeneZm7CU6N",
  "key5": "2KBDhWCrspgYTTKjtJZxBn58LPJJumcYAQsnnK6CtpGnDgygfHJ2SP94ucrDExnPa9VL2ijrCaVVJGe456WiWzZR",
  "key6": "3YJbh6rGQu4GYk6DxAQonocyt3uw88zNYd3VqewCrt627PG6rcJbnGhfGmQY6Cx7VdSgdGmRdGPkbWWjeLXdWHhc",
  "key7": "kwbAnLY3q8NDSqoK14GfaYmCesSvjJgQnDdiCHTFxPb6gYQisKS6dTSQx5UDyrNh4emK25TZM4rCxzkPmQivyt8",
  "key8": "5aB9eRoNkzArBqfQ76HMA53SYku53WZh7ik4yiEcaLg3w6vBeLyAg2DV4Ddytv5fMFGDzCsy56h2HfeKjWWd7Wqm",
  "key9": "HSXdtKTHksj8XuadQpysSrUGTyEoKHD746mRjJVFTqrTG46FsVm7H1Y5wZL37qdC4twNxSec4BAGfVLfQZbykQ7",
  "key10": "63zPkxNgh6YxHzzi9d7gD9CgCwDFWNTbpxzWFkPyj3BuJmqrcnkV5gfTrvnaEGRRRz1Q9GfVNcYtZYTGLmQJ3XAm",
  "key11": "6xPnzrK6ukQUVE3HK5HCp5zozz1qFvTKS6dWwNKN94JHR9CLLLZYSub2BiKRSUCQjo8dTo7a3gLBg6xM8A9oxcG",
  "key12": "45TZ6ZwzV7Ufd9m9V5tBWr5dFJDSAj7mscPnLXRvZT4ypiNGFCp4HRQoLQvfHNdLvL72Pu2XKRpmX4Cf5KE9w3wf",
  "key13": "5SPhd8VcPoXyGGrTMFTMcRrJrGYvsvNuGVbyLrXtsD5YCcj9i28rAWJnf6cKUtsCWstHg8rcm7LUvocqPyY8KC6N",
  "key14": "4gtEvEsem8qtcaE9e4GNa5e7X2R9Z6sSn66M8rwvq1AXVvRDLSEgJxVnAALxtoqqXqLA2PhDjdwQfqxHtRtMo2ma",
  "key15": "d9EysYqd7NdWAbE7RqjvAt3Zj7ETibvfwPkq4bDeFNJtF48dVkVLCRoR4hYwKqxn1917k22KSM4FTZxvhc5CFxr",
  "key16": "4BkEuGocxiHTqkvyieJ7aqnD3mMRzYpr4sYyKVCjqQEq5AbgCuCA83UyH3do3P5UwTj6oULmbFeJjzUnhhvSpCx6",
  "key17": "4T6hrJNH5wVY42rT6tvgUaaDXZkVRvnaHUGt1v91oWfXnVxBWrjLsJWMRj7kHhkv5UD1aVw1o2xhxJVWngiNUwju",
  "key18": "3D5LxMTswPHnNrehq6YsSUd6cucR8mn89FjkAZbT4VQFqvq7hqeTvSzVeRwrQMvPvDkE4wGaTx1ojdQbheuGoX8w",
  "key19": "iHVVLgCs5nUrMpwTSYyGFjBqjqFbShaeqVEvb1At9KnQHDuTA2Sdh7LKhdFwQsQSq5g46YhGseyLZGUbz8upgWY",
  "key20": "36S1q3gQu5Ex9b3mS7ddDVdjY8FsfavFmXqcqUqAUqUt2qgwh5hDDuGTkeX9ygtpfewPVEpc4kxa9HuZMsCt4Yj1",
  "key21": "HvhVZW8J41BGZCweRbNZdKEsAJ6whmdeNDKYH2xvo7QQMAWkonh7mc6kuPXZbQ2ENhtYD2PnSskG9KpcLsT87AX",
  "key22": "2qwQWYfc7KWTmgQC44pcferJB4yKjghukyZuNvkWwHxXZ72wSCpQ4yQMiftdFjuWAZPUZDu3tqCccvFu9Pj1tTVX",
  "key23": "5rHKux2TgjKHhZGG2KfNXGL9yupiGCNZabbJJyYQLjDpc86UkXKS2P53K8ZDuDT5fzudJrrvyBFcETc3Gt1zM5iJ",
  "key24": "4xxudU2sypKqyhM61tCiJJX6pcuCYU1mVd3gQkw2HDeitVYE1UfZ1Z9kPoVmjtnU5PAtfcwAKFYg4v47Gf8BK4ud",
  "key25": "3iQoCRqHNy5ruK2Hqw23ktWiCDHtmTxGswjXs4B4MvywBc64p2TLmuK2cWAhetbMkdBp5kL5vNtGwrDa1o38dFZw"
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
