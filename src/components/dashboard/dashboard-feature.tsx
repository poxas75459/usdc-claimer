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
    "45ijCfQAjE8r3PV29XKYPwfGJohgGkRDwqc5VC4oyu8qxJjfF8Lgr8KH1jsmuaGLkP7qKSjkRAEmJcGA7p83EKKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31kdjyfrgys7cg34ndveMow8vx3gWqQ2UDkkx4iskHTW14tchtkXhrx3Woxvv5WaYy4mCs4ntvQwMABC52wMTXvC",
  "key1": "oAL9RzPo3A2kaVp5abWBm2aLCkPHzkrzQ6QDmXf7fyXeyKcqyFMncMUafsLvTPpyzbVqn748P3nUEExC5rJwdrZ",
  "key2": "2KmQBqWMwQGfDZksxNQ8thoXBp3aQzN5DMLcsxmHBPbocpwi6UfRaZDwvs1Y45G2o7xu1qgQuqXwromfRW1SN4Bk",
  "key3": "4yyVfWpMkHcdB1SCBqRwNTGySpENnwc2e9Gok8eyeC5pZ7Y6JUSCVgzREU8reA4Rw5HfTSgPY97pAYnCUExBS8d1",
  "key4": "3oWtTcDauuqhYnKLGCZRn46rBknEzf4AYBrjs8qu3LQ9PqmQuNwvc2yGB8uJfN615KZT7jFt8HuWPrMNPjk16Cg9",
  "key5": "G6HH8z7xmpmZhpzLb5Hs5kKhRaKQYLqyqAJTDXQZwAX3UQX557jogzXdBTBnrS9dYjfsBARm1eS9JmJNZ6vS7bP",
  "key6": "2NmQMGwkFRvstjFdNXnakbzuUxVqY1mpCTDgFQvDpGHWrsjU8VnAEcoBccMcf5kqcjKQhcuBemzBSEjTePK4ufV6",
  "key7": "617QfNbmfEpx9C1wB2iimherjuSKP4TBQbC8oZXhs99kCJRFEvmUS6Pn4s6hnGGfYo8x4oHxx7VKGpdd1npnwUeD",
  "key8": "2fWEEFX1Nku9RDK1zWBmGn7PdDoM6opnveNc1s3JbWam1cKpBVTT41DibFFFfeCsWRRwyzjD1ztN485DfLouv488",
  "key9": "4SUmWycE1TiK2mbsgn6P7S64XeCynf18MZWupbjweRBEqPB2ohtr3mn8Wd31FpqyNDzBbTdapL5tUoAPgV7E5cx9",
  "key10": "5SrepbQTZh5jEUQoUCgEXYpyUqJfz5sF2qZNnaYhzNC7H23uoqksCZyYQZWCuDBFYawduRPRUfFMhLiv6yu8Hy5V",
  "key11": "3kL37nRBSsRM3avRD7S6DyTHt8nvvq7kjmN5q7Fm7fNz1VmPCaGDpnTPhEVsCkmQi2xB28ctfterniJyLNtoR2kd",
  "key12": "2Je6tts88NCquK2hVRHFmgQtirMtqpNcf1HtbwH7N8HJSVkx4ygzjdPmo8ZMFDKLnh9f87Qmf49ggPdbo3aaJ1zh",
  "key13": "2vA21QTpPoFvqpa2zjdnaQiWAHGHNYbg7smLN72joCi8Hp25cAQVXwkeyJFEVNq1822CozTQz6k4D7CWvAK2cchP",
  "key14": "3REFSX2DqHLcRAqKvq6GR1kms4F5LCwELDbrtTQRLuEi6ELqzHafiFx3z4fpMaH1zNqX5UKKpFavnBjtj5Ea1u4H",
  "key15": "5gcjuNeqjHAGYsJhMUryuebCJrNh2LUhLDyssdr9BoCDvEuYa1fy3x4xvVMnqtg3v1i4xkjEcE3zrLo19kVrzFn8",
  "key16": "8enBXSrwugtMsVLXAXZJhimx5XbzZvhDybAQxZTkD9kfzeWNA6db7VpDu44fzyS9VXGtPt4J6oJ7ZNnYRkoQFjD",
  "key17": "5fmyr1ocrZ37VGpfM8p6zrmiKf3ixDByfCMVxmza5RHT7W9gQnkJcJxbxUTD7kuKBNQUX4m2bDeVdLHLDvQTRwwG",
  "key18": "55a1cC9P2VspH2o7guFaQmv5Jt3My57v6PYpsdUHBTsj9ZUgMB8vSPoUzUe5XnaSLvBqs8BzKpnRFbWw5eBFNPtd",
  "key19": "4ifHHiTgQRGkip8Cus2aGAsExWRsbahrv7REuAakDj1uoeFxEBJZRre4B2aMqBxPUjQ7syhsV6NC7muQAG1xRgnu",
  "key20": "3VtGSwW5hkVVCVEpymCqvydb6pojnRSzPARCw6vqcnJjL3p9prNYcyXwiXmUQf7E48tXDfqq64JkRCaBowrMfr88",
  "key21": "4krRHV9Cr1rM8agkuJjcPhF5YjEg3ggESMrMXot5onaGENT3QkFMF1pS3erg6esLo4MqeZySKMW8FM9fh8BGSK71",
  "key22": "5a5dpoZTvQ5edTf5zgYLqUpe4qnaW9sVtuDkFwVLa272Z8dLZ1Cprnomn4ZH8n5cYxpwLA7KtgnCbv9Gaph1carC",
  "key23": "3iyMQSFaGaiV469X2Pu2QHRhH5wSvompWvZjQBZaiV69P66KncKGAFWwNuFZZkYfPNEbFQ1XWZHTg2KRtTvcFced",
  "key24": "5M7EF29fCd7AReXf4C42VRBBjaErFwNMtNYiPR5Ver7491p1wNXZHrHKh6j1foNGDY4R9MssCfPb12U2p1jKZ4jU",
  "key25": "3p9oxbbyy6hz9iFcSNpJmDdebgD3SSdNDFTtpJWjmuzvkaf3vBpaRxbc1CWcKY6dtNwZgVCLKV9Wyk9Wg9wokiC8",
  "key26": "2D1UpPKo5NfiR3onqT1Y9yrQdZ3spS889dcDKeZeTMRHipJ3BC9Qi3Ai6xEVLi67ENHsiYY8waM9ENBC6oPxaV6p"
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
