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
    "54MWu6qDZV3GBoCWBwjfwPN1fDjYeYbXMEFjC8aVgQCr5wjpQVygkXMmq8cnGSHkFTZ24kx7N37c4xy1HmgSUDxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QwV3DUSpsccUkGeNpEY3xhBDFCtdKfqzLg4AU9pzStSHrMrYy1AehrbGsxVvTTQC9pWrkp99J14zwiph7h61Tud",
  "key1": "5fXmsaHovA6aVjturECsV1xcUwmxDrhHzESHMJ6ZAxPnTN8uDesGzwDjvMKMEznwXtZqEtNw9mFpFPiBjiunemzK",
  "key2": "4Dzwq8zfGy4Q1mD3Evev9uHwhXde9Bp3L5Ba3rxHneQrxL3AixkxwXGAZE1YFS57kAdH5ui86Sz4ZgWvKQfBXD5R",
  "key3": "tjnA1irBC674yo5HdZiYyunLxVdLCRAgumeHCQjyyNZfrJKH2vhAzLuKqWEkLSBvKktMTWZmQbGLRGEFfGqiy8k",
  "key4": "2fiqhmqZt3mXtbrAfDCA4Ycaf1dZZ3scnhmRbQg93ivLwg44SgAtyBSBA3AqpDqZ4WejdhceQ5SLQxnD67pMJxxa",
  "key5": "5ozjUPFzX71mNbpQ2KuaWKudYTD8pzWxSAWM2zBYRdRUC6gJXkDMPt7cSqyWc3TCiXkmjHhjCXBqnZifPf1KF2vH",
  "key6": "3REUGXWR6mdR5G5ffGxxfVneCddavdwoeFaMgZHsnU2JMu6pNZFzSeEwtEnLoprdkfRaEFnjtw82W9Fswh7hVCQu",
  "key7": "5NXs4q5WaYjhBTjjMSK3a89HPUtwaLE9p12YFXSC5q8THWZBBNBoXd8KhrAwQCrdPrvj6qcQpi29MRBAYD636SVr",
  "key8": "3QsD8yeanw9EXU2Scf8i7dRFn92ASmpAq11h8mDZksvFJxwYxeSvC5qEvtp2UQb3TzaMGCBcgy4Tq2iTHUzBLbwQ",
  "key9": "4iFRCs3jqJaUB3itSGCQ9vJXNiQUEZ3am2bMa91WLxREHk2VgRoxTF3r7wYqqZguJ9UdaRb8mrZBaw5AGGbgYLdd",
  "key10": "uhoBtwfXVWDdLTHEiozGxryai2JQKckjkgZmKQ4LgAaNGRgQwAMHV8KF9nSj5iVPrXo6WWdDu1uSH1tPmFtQong",
  "key11": "3q5Vbqz52wnZK8FcFAsxApdwkartU7tzCbcYNHuX7ETnS7XE1rccpBgfBkue6hyBeUqeeZfm7s29gXLCyvR4CvBb",
  "key12": "45QUzbuxYB4UU96ob5cyBtkHtieL5Ey8fBjZfhN6Qy1yU93zc3bXY3WUnk4NB3VZoFafjNFFQtbC4JJjjrmTXRx9",
  "key13": "2aVBEHkukiV1ddkE2Z7XuUf5cUoLY8mQVwcyKk56LDf7vX3X3P1uzSJCTEfdFAK5vWipoAo8PCRW8Mh8jRvjz1zS",
  "key14": "3ttbo3X1bWXDgZ9rgrvPhBVKf5G8s8FeMdvM7ExKsRKvQYgfpyVK7dh4PYEVJBqghttrxGbPBbAqzjoT5AUkHTSD",
  "key15": "8E3UxFcZZxcdoBetDg5k7YCkzH4GtJmTtFXApv4HidBVwn7iSGZDVNmKSN2t4fZjfHdpiZJ8ehaerN7sbLWGdPi",
  "key16": "4xYBXLVve7zCSLu891NPggF5kx4tFGwSVQzeJPzVBih5BRhyzJfJLQYhnoaRaxvQ32danoAjDM596wZjvFR1Wz6s",
  "key17": "Rfw3zdN3r2RsFR61mwy15o3j1zE6pkmYegecc9cMUG6hNooEyxoaMTGgnBtzhnGUTBqbD92wv62CraYUieV15MH",
  "key18": "2CJpJbVtAwKAAYwB9kmNR94VhSQj97DR6r8pUX5doCUDwuygGYYgEsw6n6JVivpnQq5SADRqM4HTDnicaxC5dRCQ",
  "key19": "4Gmm47YcRvvpsaR6PhJXTTdyApr99nu7mmtLgmtgdABG6kZH7fvE4K3W5wPU3wBqf4TYgqtsT7HrtcNkZx7kwxzG",
  "key20": "ciiCHWAZfM2skXT74j4v8yGbAVrfuSwRk7xbGDkpVdPRqJxYTNUdJUq8J7gLAYXTYmSeHtQFCakRVhqkot75t4c",
  "key21": "52KjmG8rwwsPWj42SoCv9gGe2rSg2s52wf3AagJPZzwXuqktfD63mSNSVT566jx5SEVoycHQeWtMwqqjeqjqauca",
  "key22": "2ry89MwVK2AcrW3MUHreTwmG8GoyVR4c82SZkBw2iQBxX2C7FfMAdPjmQDWX7X9gyTB7Ss2oxbrDLLC3bXY527Hd",
  "key23": "4hmDg8zocagQb36vUoVPohFmAQc7qCjXdZz6yVSFSgZW6vrRRM4n1DKkVzje4sCgjEURHyeTYwoMY8GmVecYMeC7",
  "key24": "5tiAtj6k13zrBe2VJp2gceoN6wtUeYdzkZW8U1ZwWHGfYtXTGikiUNkKb7F3nbbuF2e8Y1cEZJAtYbrubVv5QduM",
  "key25": "4KAEiwWtxWVNgFcM1CYTxWxMqi1rhii45qy5D7SpSfQPo3xa99ywXJN6QDmkKm7b25MZ2QKVQ19vP4HQyXNCSG6S",
  "key26": "4kBJBoh86beuPEPoXkUe64uSfnekMkHN72Wz6TDDTHpcrvd4n8s8WB6EsSL7TuY9MzVUfh53PZ3wkdcokp6ej7FE",
  "key27": "7EeakszAY5d2u87dnKhhJUD87D1dq68Fupj8Cus1Mbin1qCuufxhT5DW4w7S5J4PsVoNbyAjVHuunpTbUzLeDic",
  "key28": "48Ejai9WHNc7HW1YH55TUsWJgv1jm3iih37H4tWi2VRNkfKzt5x8CuntfKB874cRZdBYM3tEY1F3RBbBcQETt1jz",
  "key29": "2qyoTp5NtNWdSXqMfHTPmkaCmHxmGWgGoebZMoE16buCDZGtHZAQpxo8Qeb8n8M9duagqdcPif9Mt7KRoAB2iU3C",
  "key30": "4YWWon2Vmij7NzSH1LZGhtiW45yHE5MS4xwz9wrGk9yDVhaMuBtKNCfyzjcnczkqNcxQCuufe5ENh6PizAksmtHM",
  "key31": "45vJ661BCMSKdDU6EaE4QtfpeLMgpJFm9eSh3DAWPu9FHL77Nd8PgHuo3KDgy5dtjQGJ19Z94H9bj81inBWc9VvX",
  "key32": "4BbeHtdzgxLZsR4MdvrdJj8KLtvrk9A9LM3xQs1ZBsfoKo4HA38CQqtVury12cjtJPHLypt5H4hR6j4jhYH3en5R",
  "key33": "5LFfuaXuib4YksNdJcgWQ3HAYv9onygH6mLjsEdm6zhFH6BvBSypKEXesvQ5S2kgscn6GTLDb8oHZQ8YjLF5mtrs",
  "key34": "3MXeR4zoRNake1FxYKc494FiqNp2KXjK3azveucopdXPZ7F3gPY34pWmswxpya4JUDoyjDPJFCmXsXhncgtdn3hv"
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
