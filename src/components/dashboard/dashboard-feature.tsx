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
    "sM7F5GY2afWNbrekmGDQSas8JDmrcKLbHDvHFoGHWMkSJvk82Zs4bGnVVYdc1YDTqBtCuBo9B2o73gwwaetu5d7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bt1U4kxvvQusfLeeAZRQuXD4R3pT1jwdjmkD8aHKCKPki1U4xAMDRQuTdEnELAJ8FpFXps2DVfVKi8vHqG3YgkY",
  "key1": "5kUNuRDqZPNY1xGVqxegeuGTNVwwZakPMzUCyMMFUb4yEq1s5DcXGgnWvq9xdt2sqaSkrT8mAZjx8sWnNt45oCza",
  "key2": "5cLg7tu319DFmThyTc6yxbPgri5nfXTk1EaRtje3jG4W5GbSHGGyRxayjMbo1tUMNRi86LYhgtHQTNLBb2L1WKHp",
  "key3": "2rm7dZz8uH6AxGpUxyXZhSXJwgn3reEELV2S3HiykHCMSAtH1hUiuf775TQgfTermWT4AVa5bCsMZFdhqftqF3Yn",
  "key4": "FWKnqyhJYrXxM9SqiA5wQpDSLowgWsRsUFvMmfcs2VuroiBx8KpNmDUJVLYbvJxzc6vjhiNtyy2BM5gJZC5ZFA8",
  "key5": "5kZtZUdA256vhByNr4jXtTj9btZMvkzVwgS55dCAoWSs2YvVmYQUCAgc3exyNqf5wXVtdCRH98ifxp3mTTXN6SwP",
  "key6": "5SmToE3kS3HW48sLbq99VQ648ycchJrTbqA8XZBSHbGtx3SqYjNXQBUVNmozHM6nQqBaAqxMZWyqtpeNVezAUxAH",
  "key7": "5ozrXsi63E4SLQ9E3VvBWyewKHEbm4ejMZs2gwRucT4MdFEdjXWnEvRrMGzJGDkSVuu3hejUy7p868FBp4bnTYfW",
  "key8": "3xMBtcZA67VZky3MtDtUBHS1Pdfq3BGoHq3aE68oeAUgksjGNtJNz4SjCNzm17zoAnAVeb99hpTr9uo9re1RuHw5",
  "key9": "5vnQvw6gXhsZHt5kbg89rsepzTEHN6fFDEodvE1AoU9jLe22BFB9j8u6Ai8G6dbjrQgNaDcBRb7XbMeD3LrdhjT3",
  "key10": "67VQv2trQQPeC39nMZUS46bkuQrrQPdD3qGwPa3kRsweaCoReXtL6FXec5vdf6VnwRf9AYNa6Ty8pYR9hP5TSRqz",
  "key11": "2nL9fTQR1uicBfNbHxhetfnnHbg19sWkWFma38KgYk7bNzvFvqmgNdNyhSA1U6Lq4R7y8j6fvjy31vd1NeXYpKie",
  "key12": "4yY8ZeEbVPAGdDnYG5FXikYQbPeiKXN7HShY1dZR1Qyf3vzsH9C5greqaUSSaWTpUpyHjUFfPR4CLzw1AshGCvZC",
  "key13": "mATAYybyYAyyaEEdK1VXkPFsj6Pfz74TRgX7H5D73BchtkxMVjearUk6vg8FpHDsqSwV8TG9pB29tz6UgDzsi4u",
  "key14": "3Qp35jHf3GByYhq9qLR3o3hi99iyhx3c3fNHkDzRfZXZGrb8SfMMK5JrNCwyToHiFdSrwGb92WLXhGKnvoqGF73n",
  "key15": "4UzSZX79tDDH864SiHPtyNzSQ6mAdP6muiSGR4VGzoz7xU8cfK144oAh2QWZCH1Y8tY87yMSxie2peV8bVYVPtuw",
  "key16": "5u4tjsVJBNxsurnijtncYeUavp7aA96GS4teKBLipFNYvCycQiWfXnonEZts1n743hjuK2K3TcXy6hG5tMMe6QqU",
  "key17": "5kzuhPDskhreHEuFaFH6jZuZGxpLdDDmSBMvQWtBzSLhWXrPHadBCATKyw1GRgnbmYHn24xtCP2iFPwB4LQewEBe",
  "key18": "2YGDtL7Yh3hQKeSZDwnF1JSWyMerihSvuuYv2dBhUEfuMYknTzYVEsPqiM3CVyHur47SNdAcnm8srmTLUeKKkoNV",
  "key19": "8bqvuGxrKntS1ebE4PQEStuv6oZbYahrPidpeSW82b4Wrp94bmdWC5VxGzL5mfLXqtkEGtmvY15x1d8g6wwx14C",
  "key20": "5n5kyPMdt5hKWcz4qbttQApa3qZyCkqujuEsL6swrvEos8HTFYHEieMevbtG99Z5D6a2KTX5YFSMKYbRtQGvG6Lj",
  "key21": "KyRVJmD41sUu7ocjA4M5tgx9LLiphxFFGDcW9HXVKHWaMFAnZy8q75Xc3Hdt4gFbQ2dcu4ZHLT3aLpDCrfVkuJq",
  "key22": "2ie5Ar2CtaroNMR43yAmdP17WRpxUj13DNTUmVUUA9pzA5XjT6FgLbXhoHaLUtCaKnVhti2evCtRHWgyRV7oqLsT",
  "key23": "Df4rc96W6FgWLBaFTaDZgWBDwgk13qwZF9pwvergD4H8jw1btJmSGSE4a8WVUKipaZUU6MnjFZsWQ3mrA4RwxrT",
  "key24": "5Ghcz5L6TE2HuRcLLhoTxEYCd8AMK9e7HVSaAn6CnHemWnpV1aPFS2tZVQufE5ZjyEiTtJkXPtFC17TGJZsS9iPv",
  "key25": "56Zr26UKDfF748DDVnBQ9XgHfdq2VrbetcoHf7qvrnCR1w8v8cGKS9BctEeBdxg3r8X3LgPJfJ4KeGDoZMFq9Ujm",
  "key26": "4qyH7w7daRULpxwABeXJELyXEkFHZwWU1bZ4HEH5L3F5a2fY1aV7mT7s7vGGKzMQaumaGDqH4wK4ZfTh1PpWHiH1",
  "key27": "3HHVdAks2UVoAYTH51dGZDFSF7Vgy7M61yzPiAqu6kuQakGyevwmadQGzzVR46MgXvdMc2GZp12epMHQMnriKQwN"
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
