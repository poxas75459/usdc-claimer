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
    "4YPstY5VNbznHCWbfzjQejMJgnepDLkBU8ADn8Yyb4rK5Dww7QsZZKAJzJJuvbBWGFHVN786GyXdaxHumMax1viw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fk4Prdg24PG4LgzuV56tcdie2uEMpgxA1mVwh5qrGgtJTAUTgJUHjMPi1bmecmS394e4xtY5wEKkZst9Cy9Riw5",
  "key1": "32E75mKXaCXiwCJTu8WvKG4XbKEQuj4gWmqd5F7kwgfYCt9MxML4fgQ1StYmQ3ycPoPb6B9SHrJ6tATLhUvvJrXN",
  "key2": "4LU6qanFsZRypewedH6fgVTbDkHwKxMPzv7khB2sPBSgsFU64P3StaqEDsmAo5yQCjXuLVhhCFGcVU1uXuaUAtwH",
  "key3": "63c5KWFUPTXt2x9jFgygvcXLw2cZTe9xmsp9vCNu9wEFVCror5yjrTDB3JNXPEg2wB6ikvVif2wzQgYpL5GHQkcQ",
  "key4": "32ufovXGsiUZP2x5oLAARpqQ9eGbBNT3KEfTcsKZWzZEMyohcaayYbYY8gVzbdEkbJrtjbUZzoPmnYWJE3o5hFzE",
  "key5": "269RUG7uHsTZBoxnj4Nr8VRaHAWM9MXx6CRsoTphnhCp6VeoZbUpbyefySPP3HQMFJWtP7EuxMiVP3RPkaAn6euz",
  "key6": "iA7hWFrH8MEG6g9ncNAQKpX173LHLmUo8sHM78HNJ9dQgXaVZtnvHmTnzWQ1rQPX1NGVLH8dqb8r8ZAzASgWHYD",
  "key7": "4rHbcduXmp1weFqnhXyghPorh166mQCiSjmk3RZpXJwuCE6DvYszBn7X91Nh3KRr8FW8Y4xzfphCFxVANf2nYujx",
  "key8": "3urZmWZS8p437vLYWaqGLhs4GG6FL4VZgeBmivcaEiypte6n9Tc8BdhZsznvTNbUXuWkS8iY3gV5omUZg75Y1rGF",
  "key9": "5mV6mpzE4Rius87mQAsfiX1CWZLCBdeRddPKJ9P7A8sUGJwS7kr429mzEXXn1sBszNcRMJCLzbUQyDQTUQsaq3J1",
  "key10": "4PQm8M4ckTPvgwdbaYj8AwAdrZJR5ocwHPmxin4A6WHAjaK8f5GXoPV6ZnRHpVi1uyds64ftSFoJsCvt1jM4TgWp",
  "key11": "WRj3piekxMPoQ814cG1qojuvDLfCSqLLMgLYsJsGeSsWEE7gVLYm6Re8meXPBw3uAkhm9Es5aF5mViR7mJNSkCD",
  "key12": "23ozsUJYRToLMJwjL2VckEMpgFcxLS5gVBUFbQwasfBZMx8ySPaoMfn3RZpbfRvUvQoQojxwcmJy5AMc2mcHmA3m",
  "key13": "2gR2WdqGePEMBx8arDr6hFgTxB6wL8zq3HWixq2ZsWyEPskuicR3Y33cwBeW63QX6iFADiu11bGvhYLudWiMae6K",
  "key14": "3TXUypJEEotJAV1RJCewwUTWnNzmTGrvMy1qv4Ljt5jf9VuBoZJv95oAUNSneePmKcttjJCPZkdoDtYfsCMXFyUg",
  "key15": "5BjpXfNS31nUUe3ZugF7EX2s7a4kFroM5auura5uh8ucMWXiro4gd4k1aHUGM7hZGYkSo1dNGndnNQSomMovroxw",
  "key16": "5aQwEyFLN2kneBctXQzdT2SVe9eFyQmj6ycVXmu3XUSGy6G1kEnRCAFQ4SQ55BeXLKQi96XgggkH7GrGg4yR7C7k",
  "key17": "4LCm4bRSRZRubFiPbcySXo1cHkPZBkCPtSZSHwSABPNTXRMeeHQBxqdTSf9fzUKZbMVTnAnjgntScA3mFYpECZFf",
  "key18": "238C9RzGryud2bLNx2HEiCZE5KCnctP128qfWsx9Yjps61H4S3E4nTpbUV6jQsUktFwmR1p7jKRvugb672bk1rpx",
  "key19": "3gzqoEKMoHpBZhygo59YMQ7F5iJZvknKcjxW8YYyFeJ4ocdPVNNqcdiSsNH7cQCPtbn1Lf5hGNcvEncgdxntNoDQ",
  "key20": "5C9rE6S2u5FD6eV9CWLuJaXPtsZmNyszAThAbSDb2GH1eo7MoongfLd3DW6YHaejfhYZ3GE7MsAZsR7tk4bFWFyq",
  "key21": "2boqdtBWfaQvxEwdU9QBKDreRZDSx6W2M6zBFPgA8vQESVouncxLLTsq8m7JjC5C2rAUYTq3jL4NiqcZhVJ23w1Z",
  "key22": "JYRGYJJHeMTe8FPfNYnScH27L7jFfJHCqzLMoQwrBeTYnyYkfhNgxTYgF2Embiqk4G92F4zfaq4wb4avTkgnERv",
  "key23": "2quP8p8QXNCh2MGuMBB6eDP6ivSxSnwevdivuE4R7ZVcyEodo4c89Cb92wsY5rmYjZcqjRV9JLUvifuSHKFLse3b",
  "key24": "3CrzN6yXumzxU88jEPSftRZviq8uXZXThhRbe4oA12NanRzV3uxk7Jp5BVjfPk6cLYzxCknPNHhapxwXQeEce9pQ",
  "key25": "4mGyXnNSxkZ6j7Fg9uAQNKmStzqzMRmkhFZof2Chax3oL61pKycNb4TJRdNM5ZjpNFSSx8WmE6dVNHTmkgBN7h8Y",
  "key26": "43bPzhWqE8odQt9oQmgab72G3WQdoSsDqgk9UC5vYx1KoWhHodJos7cWajJo9oL5cYgYGgA9SdQ51jm4szbyCVk6",
  "key27": "JgmV5pqV7sBN1SZHdCoHKaoSVqbbNzToeZ2w8cgJ3myyNkgQVPkYipzNnRQ8Va6C2P43hTqinY22WHLWAXc6igk"
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
