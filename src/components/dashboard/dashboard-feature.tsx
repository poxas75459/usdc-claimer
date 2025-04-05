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
    "4S53GAnAmwpq6iYYCnxQEP1QTvVMy2gNkJAG8nbPMzakov85s4kL7oPApdde1x6xCDNMnJQc1i4A2XT9hNBYhwUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jzcp9ZnKbx4CRy9FpeqyQ8T5DZJQgYE5GuJtfKThMjwGNRm9wTpiwvnL5J7GUe2eANaHneGBuhpz7BEV9TV1aSq",
  "key1": "3AUMmhBQxSucex1VUedcJHL9geN6gaxAqCNpCkpXB1zRd2cuwLvYTwqgRVXfE6kbDQsoo3zUFdennj1Hmm1L8hR3",
  "key2": "4H5gcMKqNkT4X1dqzV3pGnKeWrvsN4961yFTvcJ6wTn6Po2qZHzMBXSvFnaGq76P6u5p7wiHkQiv3mb7VKNm7HeP",
  "key3": "5yshhQypmxFDXBYFpzkpCP9EXFDFwpED16mpn9mDMGLViqxQnc3oZnbdSXjrc4tmhaWzDf7TRoBwsrKLsXaxSUev",
  "key4": "4d7ff35Zk8ko4hAbMjTwcWsciEGXTV3BGNHWY6KFPhYUBwfDuAVfxNHGnesCAsaUHKVXc7f9fvochBTNRGSJSdYy",
  "key5": "317hnMaSmBHsZDUoTNui58hadeViGETc69v6QJKCrNtVGuJt2aBYqRT89iGue3wmKyh1dgM7enuET5LhkJ4DUzHw",
  "key6": "3QEkB8LfAMRw2Kx7zLHjDmroEe41yNBG3Gjbq6ai44Shfmeqg7jnM15cEBhG854f2z8VCfxi3gy9Y37JSe3QAGwh",
  "key7": "TEfGE7mTnrzV8nLF6Dg2YcxtAa8MpUWYkVqjXu6EJooPqu8pfBvzsVNahkeorVosvx6gRY1rnTQCbC7RDTbKQvE",
  "key8": "wyETWQuQNgRxntAwcHjxyRRFDyB3oM7Mxijdu9neiKf8njjeBzdDmYN6saRbnHffTsahE5SAaufSstPURq1n6c7",
  "key9": "5YLsCgJs48FkpZXpk1bKhqeGj4b3hRyx9PU9DRykkoMUDD1KLVjC8JBQ2upuKFoXJaw12JjdrfyKTPpwpWMK6Ncy",
  "key10": "2Zdb2muEfw2RwEC6DCArgZhFDdE2fBt88AxLakSyg9H7Qmto8K1FsZWSjV4rddpQhXCAdTBCYRu2t8eVWbKwe13s",
  "key11": "fcUjg2mqRpUPgi7oqi8snYqkQ533Fm4EXybMcHj6Djkx97qCWw57G4ttBs3LGmN6Buu3wcGTgfRYUGmEnED45Ae",
  "key12": "5oT1tTJWySh2Bwz4ZQsbmBkpF8qEgyLawbWjwiSQMhKv8HD1sZvhQUdNG1SuBX4ZjGTfRjai4ZFV32N8pfYS1Ew7",
  "key13": "4aY1SJA2RzJbjvHGx9wyfMAREXV6RtZMyVGakgUAohvQS4yvLWGbUPNKVm5rcYnxfSWdZXqZDDw9Km2FLqKBu45k",
  "key14": "fGufEqy2k6QyKwrHRef2aq6niceGUfAHSfJ1TBbjMyAQLo9enxVDHUzvWLLXsMXRsbzXdABjraxMD54m4qbTi9D",
  "key15": "hpsYum3JtyRVpSsJMLhp53F7oR8NiGpKGQqMiL67q4p2FuoBCK9CAhqnoVr8mgbkTw6NKfprBaqTWF8tQNWw2ok",
  "key16": "5QxC8LasA71ve6T2tmF9MNRAogPF3WWoU7B5HhkuRWh7d49X5MaJPrF44UTzErDLiAeEX635GbhrTGLV9EpUDZtJ",
  "key17": "3avERH3AAwbNueUoycr47H2VviqEGQuHewHPbkaTSW7RU3KWQEJncjp8RysqAPRWqqt3RRymidMfbpsUFSdcetZ5",
  "key18": "4Ladb2tAzd64xfKHmbYnF9jpVGxGkdh3rrAUYa6zHpANxpCd1NZjQPJ3TsenBMVfVGWCgJRjwzDgtbsm7hKctF2K",
  "key19": "Ngqskzc2EqRoNPsPMdaovzWoNSvjuzwwXxoLEsSBWLgsKnhjZjq9f1hFPoWrD9MPgY1pzPpYcxmkYWt3cMXkq97",
  "key20": "2XKSb7K3D4NhgjBhRfK59YV5XuyRFZXzLAH6HqcBGVifZcutbnKWzwk99NW6rhxW37rj8Bcc7w3Ww6KPRVo7FBUu",
  "key21": "4iDaY8KwatMJ5a2ER8qboxEVXQFoecEJ4Dn6x76PET7ofMJrfxFxgjrdqK61MX8MuA1wpuLJn31iRtSArXy1o1hY",
  "key22": "2PmqMFzabAZFr9vmRYCcEik2nHtdhg352kDaFEbw6Zgkcsi25dwK3Z1ePyDZ8onrdtPrpBMrZZ1CFK31T1iLKc6w",
  "key23": "YZdFVA9uCLPmV1LUdj82Rx65BNZiJX3v42kfiKHY4dDN1qxESv8U5pGkkucNHufikAxwR7DFjwszRnCBtj6enJi",
  "key24": "2xJZfpqB3CVS3tqsXtgVh2WRis3vG35NxniWnECKyQ4iZaHdZtb3f2bm3G73yfS71abmrrJ9MtTKPRLzSyG4P85C"
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
