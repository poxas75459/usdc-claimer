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
    "37UHZHuLa2JqyLg9RFUfcgHZZ2eLLeinSqZvGubJWA7UTpHs17YeW7MdjaifJiqQRt6YB16tAAPwUDpqtYBWTskx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39GWvCMji7SCxeBTwima1yW4DJshPNkkMzFcAziKuz4gNeZ9FKHaptWtUj3USPi3kazQwmw4DWhsA1xhJk8ngwMz",
  "key1": "3GUfqFF9acE2pDvrcVpKNXdbZwVJRM7WU343q9WuN88YhpBBCRXZ5gFza9ZgDmiAQwv4dQSNSrKCTPvWZB65BpYq",
  "key2": "2rnDssqsvwdBQdCg4u1GNHstqmEEzoXa4arprT6SPDVHjrGicK55LqbyaV9dyM4X7Re2tGRfqcfiMd4wQqkUMXcH",
  "key3": "5vE3yDysNTw5ejB2rSB8Pd1FeUNdFbPjqLmK7muL4Y3kDgNhNLyhBud1g5XVJhvYqsuTEQvxKVMFyrNt6PRQoKG7",
  "key4": "2yp47VMMA49M6w6arvjHFprPhNagk9YRdWtRjm1UQEs3u9RsXmJEXiSZuUnHkwUL8C1fiKQWgmqz6J1QNomzFuDA",
  "key5": "5An7fL2iybf5LBDJx6CXogmC3tQD6P1dih4FeX23BSk5QAkr26gASLdVgkT1WcL2tBf8sUjcPHbcdfqpdzn3o3dd",
  "key6": "ZkgjTyHgxT6kzsCriNXmESpPrmtLu8ZzRafyMR1RSfwJUeM3BAKQ4VYiXj7yVMaMfFDht1FP8LJJoUAN2z9A4mN",
  "key7": "2obWn9oGfAsMHB3XZwbrvB2GFzMj6bDKkW4Ze2UkrRGJ4WsAwUMLpaDYH4jpgctw3q3Ghrkez6vhRj1nH9tznMGZ",
  "key8": "4QrHWPq1U7snbSvPHZ2hRvj1NKGZGPh1y61ewGQoB8Po4J4dBY5tRDteog7chqT5g4HKSuodQR2P6b6ZvSeLJopR",
  "key9": "65AJNbojn6DZVjaV9aSBHT1mgSUVuuepcKZ6dYabYV8mX4QYy91puZdXDzc9sAacTs536TfgK4aYmaBEYVijvr3m",
  "key10": "2UtFo7roDQGzLM2FTcQyN2iu7oBxrqonTAzmfP4V2cVjMJKhFx2T7oXnBTBXeic7gfR8Ao16Bia6ooN1usoGtZRX",
  "key11": "4CUqrPaY1QpD6pPrqB3yF8kkpQN4zen77H6yGvDuAT82e26Fsd3pdbLDC2qJWeUHmY1VQZsurfVcVGeTprX44QNB",
  "key12": "5XMuqhX7VzQmxqPuhyxfyGnATDif9MuaPz7b4igXWi6jdjkM6sLVhLup3DprT5VKsP6tapGfJNvcJoqyAXNQ8d6J",
  "key13": "3VgFGxGZ2xMqYX2mG43cTk1BiZmgMcESdGQmokk5rQKcZYQZ6r8Sw55erGNt3dRpaujNYzgeUQxa2jc3VwD9ACMw",
  "key14": "4wsqGZBpRcAmsS3y3AKUpp8cYETocPqnhEBGyBip8G3NCRth7ZwWBEoBN3B2xDz3oYrS4TS6gi7g5opUQBkjgUCk",
  "key15": "3P5kVw2yLm7UpwZHi2MbQt6J24T1LRRuzzJC9gJF7A6pGwRUFNrPoTzaHH8u8inhr4q9iTyEWrbvxVmPonBr6re6",
  "key16": "y9u4LJxZ6o7BQ8UgJcgyddfydKghYgn68qoEY6AUEarBY5EBxBGazZbKqqRHTEJAyLSi41RL2Fak9nriXsT4dvr",
  "key17": "33yATL3Po8h1Sn5r5XeqK5uFmoe2k26NsAotFHktzBizaNXr3jUGCxktzE87q2cck2yWJKTuYMsEBuXHjKMvXWiH",
  "key18": "66gzyFrRJXhrjN7NorRG5kRoepj146tejiyHukZcTVd11prtJsBqo4PR7865m2ZE3o8ry2STSnWgxwZcRF16asWM",
  "key19": "8TrSq9QvqqFNHznuTgW9QrgnW33h6rsYKJYLAbgLrekQNe15NMN8FVnt7uMFDFLj1KRpm9oWQWUxucnHgjPmBef",
  "key20": "AbaBx5kEFfPB2oLumRSry6rh2JMgSq4VU1qHAxnuB27vdbevRCZVBY26rPV22xji339B5eMfppSMf32sUBk3dPz",
  "key21": "3oe4TS9eC7JLMzhJuXZFFdnv1u7v8cGnP7rKBzrBtYsF7XSaJPvFrv9s1Jmsv7vun34pKAPZ32oXUySpy3Dqw1LZ",
  "key22": "5SJ4weyjopDxhyLB5dSybZEzDaZazntcCNWV37BMJ9GjBq12WgMACZCEuFQD1zmf5f9TQcFUo3aBsdKSP2pQ58NA",
  "key23": "5cctBZYirTaJdmxhk4YZ875gnQAh7NkE7AoCcgzSjvbLRfdfJFZF8R1Z4hxvvTxJ4qnw5LREpAuEfRdWsLC2pxwT",
  "key24": "24yYz7xiDGagG1kL9FzsSxjyytfZMWxbfwFWYA8sXML31uwrJ5MUCJPB6HkKisxwcwdcm9w62jxeHNB8576XSBXP",
  "key25": "4wrgG5kKhsiKNR6twGsSqYkaH4xdrjQXKgWMuWSpXRKpr8t5F1gMT3AyhFx6pzSkWqmVEEYWRFGeMAT3WFcw1TCn",
  "key26": "4TG7cJgubdqG9R2dATLEBekETdzSMyEjmbRYXq2toC3bCcNC3n1MV4VZpacT3BPfXcd5L8mC51FjNvphrv3wtyEf",
  "key27": "3FML8tyKwD8T1FJBUDzGLVZjsWpDv5xgZGDiGShH6h4QwpE4mkvyT83fB2dZCDHkSfyUdHM1o8t5TRrwwFgjAqFZ"
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
