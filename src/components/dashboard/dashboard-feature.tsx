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
    "54HpZYK4Nk9iieHtU2CzaVj4rUbBs2UPdhqVw4ChrhV8cghEwCPkkPJob74ibQZyAPCBzEtK4AnygVS2LCebao56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W6rvbAHcehSLnsN8dmSPU5Na3328ZobSTzwfDtFaD5EJ7LLxmsRtAUQCbWBSTXjpnRD5hvpeMqNrdqYEx23yH1E",
  "key1": "5nCtNiog9qmhuj1bpe2yjzoRyKjE1bzkg711r5d4Gp3jfEPSHceZWMXWQYiBhqE1CWM4eHDBy6U9GL1v8E7HcdDX",
  "key2": "3Ykgx7B1ZUjW9Z2pPNxMoHJMVA5V16b8UJYyaXmpNLV7WCWR8JMEsp2VooXrrUPZzzw43HfaF4s8cj4z7zRxxNuM",
  "key3": "4t153P85yh6mvUsZpbQBpRSd2KL5oeXKJYdGQAQ3NDL71YAodf3ZbK3B6hEXsjdhEAqV1weSiWbThbaZxX8u82h7",
  "key4": "5wuv38kk7tbZDZQf3WMtA6vJvTSwChoiL2Qsevz2CtyGGyLAMGUQzRLexJqWyVrh7K9EguVpXFxJy2SBykhynsj5",
  "key5": "uJ7U91bSzt3TkuyjwWnd2jYLrwn3y2vsiYUjMnwVGfdcF9a2B2gZXdiwuS1GZ6hzBFtiggPfYmJUxaAQZBq7zXy",
  "key6": "4qgJx6mnnEYGyekE6jRYQBJBTCjZRiUs18MRnxgpBoBrGfN8n2o7f6Wi2GU7cWwQvvbPoW8DcDAZfEP1cTzSBhq",
  "key7": "2fDsmjJiaP4sKQfGZs31YjMjvj5xyX3ct4WykFLPp8nQrDVujFc4FVPWFQ9t45bbASEMJL56FgmhqSJNTz59LDUW",
  "key8": "3dfQy6V7nMDob7L6YJE7ecqUmK2nakK4n3NGmk2N7QvETNvUKakymbeinMekF8QeJ2sDZYuLDQzhV52YY2tBA2z",
  "key9": "3Am5chc9M8xjSi7dbvJRitNcPdafhdRKAt88oEx82RSEPcYGUweCu26wDDXnNEVoHXZZWiroNXChXyYEcoxvfXL6",
  "key10": "XsRj1hUkLWwjWMSm78vGiPi2M8HHHLRbMP9xHde9hghSx7ewUedL9ypFAS5nXvEp9toxsanH6QxrdTGNiVKFjmc",
  "key11": "3dVSfz1PSdKxHHy5VHFoJ7zYwLw53KtfWDyPsKt2cRAXsDSLf91zvLQAVbv6nYPqEnUr3kN5Xvy4ACKtvzTUNJMd",
  "key12": "aURyYNGKqAA4gEWCFkMR77yBqGgDtXVmqYyyr2Mzc9oK3Tb5VH9eudjA92vGrPeqhobzts5WGWcxtKTfTcDVzD3",
  "key13": "5CcYFyDbmGrqJgdRDqGYnWa8PHufEeBMMQ7jnjBpbpUueDcwbU6EUzehrT22zoM4LtdrTL3wGVVDpWVSBxWXdM4D",
  "key14": "JDna4FAPWu9Nz9hJDQHQs6rEf5KufgJXUuxN8VCQEjLWxn8hT2sWg3SUxFMuhVgBBMpQmq7ToSLvwWRzdpCN4tQ",
  "key15": "4SRWj8a4G5H9LY7fQZSsTyvrjdXc5fAxH3ZDnrvu42HsoRBc72gsTHBEA3daptU9825BPz35UsHFxdCZGWX2WjDv",
  "key16": "3Bh3SSLkCoUaouaVyUATfRWQgJLvgW3hv7gptATDX5KAFWBZZwRT5pZnHYvvbTvUhw52nZmNByFgk8Ypm8bvB1xF",
  "key17": "3KgsFxk8VQ4JFcVCwy4P2usNYZwGUFdMM8aonbxB6E8h4bG4mJq6hKRG78Hrc2MRge8PmenNWsFFBr9g4YtZrR69",
  "key18": "j5csE9HWS2S1UMERY92pQ5o9x7R4YF5sAXai6FJLii3dhTUyJ3VNrzAgGGdZ6qRLf8F21huXPr8aMbbk51CGN44",
  "key19": "4AbtegZTV27guuyMz6py2xcgryp1MQFKA7p7bYVBV3ctXYJmH5bWygGsMf2JBwmxjWddxyQHfEyStjrPHcKgZg1B",
  "key20": "66FCVrmDMvzAMuvNajoiMWMjqqHjCh6EEJtFpcWTuBGjX31rMPU5uavnrEZhea5GT3Rtvkheso8uxkSnFUttPnBF",
  "key21": "4BTbQJ919mu6dj5b1A1ToxstjWXXBHvbnwDnfsahzLivHCFKdYAH6Tj8TJC4jn923SVRQ9y1b2AV8jZyh8Z4T4dZ",
  "key22": "24Y8j8rbEU72cJz7LvT8V875WmNnRptAWD2nKtvjDXucUkKbYMK7RDoRd55hwLUtjf2fp579cwVAiWVt9xCukMRr",
  "key23": "5dcXRBtCXykG1EfD6tQXnX6YM82XZMNDKkWpdUZT2p8oc4TSVCznu9N4V9KCrchUz5uasufGeR6JzvZNkA7tJnXc",
  "key24": "4PxkgxNadWXBojDfgeuTdgbroUYKund9gu4dNP9JPjTi4UHwNbRZzdpzSKhFdWz7dpD7P8KyizK35Mvosu5nrc6L",
  "key25": "4nP1FHZxrY1oJTc5PVLPyexKFeELvXop1scGYNj94X7bnkQKppp7HXfDt9Hw35EGjahukyPX8AyqLFkjFwF6V4hZ",
  "key26": "51nh3hihr3bxfiAndBrEbcuoM4b82cqyc1K337dJcwaARdPRPYEjjWUHpZfwEYngwrTDWWKxT3GPM9AtzLVvKCxV",
  "key27": "5VsVZDWBeeCGMfTGdGhzxtzkk9GRXg8DShmGSUcGmTYrscjS92YMoCNnRUChD37fkJZxf7hJnJmdETSEHCjZRqPP",
  "key28": "3Zr1cZ11N4ot9UyQg2xSZnqbK2Arqp2Y4JK48HQMKgpeoRkS5swicqLFZtHicJV5rxnyu54pTpR6y1uiWBoutJch"
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
