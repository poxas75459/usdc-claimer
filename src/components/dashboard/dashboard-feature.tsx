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
    "4Tm9m8x4fBtiSsFiyZH3JkqCHSWXPAg8wLkeGyZ6RGu3qPDbauq7M5Lq95qWajNTyaJx4CrtUJxLSwFgcnQPnv35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wwqDUGYn7MxWrjVvLp5PERbrd1trS3xqkz8q1a8vBSSeLptV59ER9GvWKEXmwiniGXCiwsqUFJijM2at8f4kaPu",
  "key1": "2D5zaP9pcbVTZybHi8DCAGJMyfEtkMp1YknQeYN1JpVDrueZq4HZC9o5bDKb21fuEP5YN9pYg82xFAXK8y5znUHN",
  "key2": "3qTayysdHETGPF4vKScpyoznsnpsiCc8djbPacy22oNUrb2EnJvzLCDgssQbeRtXxQTJ53vKHcGYgRpoUD7SkFkY",
  "key3": "5uiRczkpMd1tSopPaQCkeobYe378oi5HaL4c9JUUhNAwvrSbfzoQrxS7y3AiYuGZoxMThJpocqeQ1pd1QD5NDpsB",
  "key4": "3xr1CZedmSRDoDkyxDGEuPPQ3fxaGmSFdVWjHGbUjKd4b1N1HxoBZnRKtNJMwdmjgnCBo79yvZuzbH6JSwZGfKCD",
  "key5": "2Y3vG2AXfVw97HyfcdBgKYwpuKUTx1rPbWLUbBzwSxFdbQC6pk65ZBAubNz9ukQnUkV7AhQBHp1ZsRkKGNVkN9Tj",
  "key6": "4qPLVp2fgMWswd4tMuU6Ga7wb8dTrzMGjTkjZUAGHK7z1We2LBjc53tTiybnq3SBHmwgywc1Zm3h7G1fsu2VYVkg",
  "key7": "5PJuNDnBYouVRrURPVxV6k7Cxp8j6XytqxEPWsPpQTHx7aX27rPp5M3NKR9EHyjrJSJnwEtEUZPPdVrJLEXTXkYJ",
  "key8": "5wTiq9xchptNfqGZ5BB3NVAHeCzusdjETzj1t95EVaa4zWoHy8mckGoYXGQJkW6LvvbhuGyYa3fT747afux6LEdH",
  "key9": "3h4JGTMzezBN4hwykE7is992vFvhfJuVS9GtqQdhFxMsqhQn5H7Ji7ZsYfgKtnQCrV6nwHw5yES5NmuxKoc5LJT2",
  "key10": "5Q3EvJBajBRtDSdA3VUReH23ievEHyDKiFp6D7qwCEx7UdZfqtUhG464f3xDyesKucCRc5jahkSeVU82EGUBuET8",
  "key11": "3vuAER1iQae9XQLU7rE8Q9KH6ofcHXGNqGvF5e4Vfah2qAqWuJZgAyuKystcuijwvGhJn69No6jjL3d2UXF1CzMw",
  "key12": "47xrWcNXG1FTvAwW2dMJVC3wo4ouW9TtJTzhXpqaLVuXV1mKxwkvoqCR2akbbE5adJEfxTfQfc8cSp8BdLGjTMV5",
  "key13": "4qoDv2JG4GkU6T6ZYvxurWytqsM9RUeUhampSgBRk77Sgc7kiMLPZ2ToGxNa5UKvyEeDY1VWqVaeRjimd6jCZTRZ",
  "key14": "3cEDFcH6bL2gQoGyUeo6JtEwfMqCreWnsQbCfB5HDKBgKdKA28t9x4Lyw7EzcDWFwnrBnv4N5kj7fuUVsGpKepRB",
  "key15": "2yBh3XFqw5Z8y7EEk2aA1MiADE5RSk4DBbSKSkEtjR3Cp34cwCaRK4jp14eB3C13gkAnLGECCmEJuNQoUAgcRQXb",
  "key16": "5DaVG6FBiuodXr3kpwgrEVS2y5Qhm25TNKreZDTShYkQasW7YVQRUGnk9oDYbMW78haTGy51BTUNB45BBnq6uszd",
  "key17": "5CRmXqaJuduwUQyQvLKw4B1RLupGCZg4Xn4G8yA8CKJrsS1H16KPQopnSomGidAUz7GXHkNtpDKmALWLYDCTjcZq",
  "key18": "4GExDv4KVceVnx8q1djLS7Sd967M3eG7WQvSmVgNmmZqBkeXNiTxGTLpM2RLTVbpVPek3d1UpZfFZDBfNGppzYek",
  "key19": "47MXQxgrpCMXSvHL35S1uJeAvVoWgqYeQv45haATCAdod53AACnYSFzKYKwtTJG5VWjH5KvwVfvnNjyhQw2TjhVA",
  "key20": "MB429XjGbmttAYd8fJt5cSFzMfCqriTXnf99maWpdVwULagqZKUihDdgxQtAQXLVemf4u89vee78LRQ5uLbjz2J",
  "key21": "5C6LW9rp8FoEZuikM3YqyyYNumLkLBfgQtFestTsSpGwGwWuz1uqyxmfScC6dNBXotkdeqXq7cZ6ttHWoEwcaJp6",
  "key22": "57RfrYGLivK1NnG6vozZUxAuhex2bNwXEmUwrjPTp2Bvb7qBDqJz1uxgN2AL3SFzKFDb71QxsmoXvqUGG2UCE6ZH",
  "key23": "fgkCzoQonZvSXxauQ6Gs47eMCim59vpqHP8MS1iFJK77gkd6Agjr4zFpN8W8q2LN5nG3RTVRP3ojCMg1JxHiL1a",
  "key24": "2huKiQVJ7XwWpC2RR4LiNPWJaskG2WwqK5h81z98PorvLjPbqNaue5w2KX636K45NEGHic8XbH9XzssuJo5DMydw",
  "key25": "huiTQeAEPq7deBU3DAg8UMYrfE1DhoBCnScUmvtufQWCkmfzmYsW8ukJyni3v3QgiTBxj445voTdtCj4kwTfXJx",
  "key26": "Bp1StbtU9UUkq1y7rw3F2VvMr4SZYJmHdx6wQrrdgsRkj8sVz8wQ2HqwwtLPp7dLYdpaa6ahE4XrgHLhcSaM8Va",
  "key27": "RtM4oYY8r5TNvCkd4Ne2GzKHL4BQiEWxzyNbVuCAYQoGmn8sqdaAER3jv8JacVr5JMfkwzyKj2nsnfH3ZGrtN4k",
  "key28": "2ySwyDwfsjdJEJWCArvSY5Ss2ZUu4WWGxHbKkAdJ2BC9MsvEdESXQ5HLQiJoeZj93VjShdkw5qJSUkdwdCJuz5sj",
  "key29": "48wvPr5L5UxFd3SBygunRSXrbTcBkdq6N28skCfukFjGLhRdQhyVRoZdi3Ds8LAaTas43Dh774xtuJhjrhgUutj8"
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
