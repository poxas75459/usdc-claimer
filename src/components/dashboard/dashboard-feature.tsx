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
    "4AfAQpJDeZytjfUXtnAkXmJFEoQbqhqh9xfwAfFkitDKhXVsAcxJNXEVUvZv4wWuZiXA8meHR8PxNLHtMHTfypkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sT3APTn25Z2qzEbamPocNZecSzPWC2ZAdjixshSSxvb5hUDQBbuC1NG8WX8akxXNb8cL9sgBgLD8Shm8MqPpAu7",
  "key1": "4ZzrzK7AGiufF1rvUodr1HuoARxkNdKyWjaxW6fZ11CUHHuEnh3zJw6KBd8k6qyiBJ3tXDPxitc8H5UitXPmB7MQ",
  "key2": "3sX9irMTBK365r7MYYoYz2E7wEP48KBUxgr5qZyJqTdSgWyn2CRSpmz1Q8KQyT3KrUnH1T8ienUDpakW7qvZ5ZjN",
  "key3": "4xK5jr3HhRJdFJTMDyVPtwnKLyUnZDEizD56CfisPXiJ2bGANmVECTGQQnnXQPtQJ3ND6YrkCtkr84LiDJDRdyeb",
  "key4": "65bXHL2L3LUkxpuSK6ugmPCNphJd3HX5SA2EYftX1EAyJLnzEdo85EXakHWgWzhK1RscibeqxgBxQbiMJj3DWVE9",
  "key5": "43QNHV9YYgv4nbRzgdjRG1yL9xhZUw7KJfeDQKf5gQpnsk865oAEonEr3ecnYriPuSarh9mATa7uyTyFPomQwJPT",
  "key6": "2h7YeNawA4fwcwuhhRy6HuMgTnJJs9gF1VKcPV5XER5uAFCqUjVSp8xJ1RDczpPwKP8hZAoyUxo2Q1j8Zx8Grvd4",
  "key7": "a7EneLh5Z4fmjiWKVYmB7x3H9rpH7A9Kne26DZnQ433vProJ73f4i6xLm17bNFYh2aj4eZPohmk7VCQSSgt5s2b",
  "key8": "223zvjvgTY6i1kyrrFTtoViPpUnqdgJ6sNtg7cwuTLaZxweAzgJCziBMokQKmHPPVNmGCPfPo1hBF5qwQ5gZQ1JD",
  "key9": "2rScBHMaQLXSNSKnn7arK4T6VamYBPu2PxkTRoM5fAQj4NKzuC4U34dshP6pRaWpnnsXh4SNEeVykoiTFMdw88SN",
  "key10": "6637ychD1PBZKKSWfpbXTTgRq3YNNtpiez7Qd8yrD8NLFxhmutsUQBHXarbQAMxdkZo5441MDXpVbTyeaWzM6Wmy",
  "key11": "5wjeQVhvp4MryPsr3K5PshksBAL9X9M3gpoCVhbifZXmo2iuS1ueV76btN2iiFbcmEcVLfq9LuWzGhuonjsjQbry",
  "key12": "4PjDjFDW7U6NCQiQwvK9Csvx9w4bXy5fGPZk6w7DQMJXtVaARZD2qhKzniTgn3fEB7MMzV9AJfUQSbp7fdGVFgR1",
  "key13": "516VP9au9vr1f39dSd1PLjqdgbDXVYEadD34okBemAmWU9TH6Rmt499bqV5h55PeaWWj8VxdB6BJRfU3AEoReTXK",
  "key14": "3yKGVksKHJ4sJyWnJwKTv7zQNeS4VgYpcyPDogMLgQj464rSRYhX4CGLHNHvGctvMDdWTfm2Xi5FRo5wxtcCFJpR",
  "key15": "63Y2mwhXnAxQBEZ1rLWweZirzaNZf4mmAsCjegbv9tVUPY43EpQgD2XeczUsuThU5M5E1Tr94A74mD7XKWPofKFm",
  "key16": "cKMmTvV6NiCxe9iBY4Zpxu14jwpSXETNAe68nLtm8y2hbgtysejMpkoya9ZmUYrb2k8C5be4CJu1JYQQysnHpVi",
  "key17": "5qqQybBX82smgd1DA6cYnztCFXud3Cg98gsRC19YvgwvLojWTEs257TByVVjEUtTRWpMbSQYtRsMUUyhBNM5CTKh",
  "key18": "4eBi4scTtWr6vU3L4MsA2gEhVcCm5D81j7HdVKArAHrADsUtq6PjdBaM2GQ5AtCP5RbZzncEPmP8nR42g489d3Qx",
  "key19": "4KYikqjWLWwL3wfVsEzevgskRuWFgBNRq7UMx6Xq421NP7asLY4kuG4VXaJahtMWcEmQ1YqpCcxCyRAbkoidBJ2R",
  "key20": "27UmQs6cVBd9eb7VLPgQHYP43VN6baebijWw1BEt3uRWS8HeND2zEzeM4FW9GWqR4XqMWhXQUsgxtfgFQ95LWe7K",
  "key21": "DYpBCpYH9Auuq19QAckoK2YcQ6TnvwZrWbzmGfcKkrSDsyqwrU6frKMnZsoRyopjLSXMnzyTUUSxeg7unPTgY23",
  "key22": "wjmSVuEucLhh4gcjUwv2SPu3URHTziu8sdx1nt5wAte59Ksi3EoFc1QD4NJwQFb4c8wbGVE6nAtS2UQHQjHecia",
  "key23": "4Q4PM9U5rLJ8tsb1oqxZT45UsAiTzRmJb6uw2n5Qxr9frNQwE4bEPcbhjxT6t6DPA9UpdsWJM1oRFmfSRUXejLnr",
  "key24": "kSRLZFmNS7VBRxteaFx2f2mcjUS98gq8qqdi1LQiJp2yWSdxkbihETkt5U9RzTmWG55C6PqrbCssQdHsydCta9r",
  "key25": "5m87LwstH7bxg5aTk31q9rSxqzvhFzV3RAV7XgGNo3SL2ezdVJKhx6tzGJt1GC555pQpMAe6EEZbj4CMCzkSax9y",
  "key26": "4ZmwWSoxpV5Lty1AKXj7sJccdmfg52WkrjVHBwNQHmhXv15Ac7tEdeUGX9qT3eRLmcx4e7yxViqM7KnSVyptmzoT",
  "key27": "52ZX2DU2teCfbQvZ84pQVZqv9pTy8udpx652bMz7N6QhXd2oinVzN9a6Xq6tWtxSnwKei2dEpLYnfDxufWpZfnjS",
  "key28": "4KiJuM83cs6WDRgXLfdqVWB9jLYB3XDqVpto6ajPiWasfvvj2WLu84eSmisLQC3dLTRppARjreqhpNMady1nBkmS",
  "key29": "BszB3Yb7hqK6cWNknfZrT49LgphY7Ktfuyz1Rg3Vexidbvn7QUuo8q4UxPJUCxfWPFXzTi46wQaDU1asEt9DVUB",
  "key30": "5B3kXivyDKyZ1JeQz9L6K3s1JSkk7JfvT53Zqiu5VGsoyAqmKaCJ7cx4DUdN3aDN1rDWrKQMyt5jCJCVYQAoRfTB",
  "key31": "jWHMjP1z7JpFXXBB85fk1g6NRwUFaBKL9HCMPc6ufBwxkQgFiHQcvWKHt9L4xhfeRbmTu5oV85UaNmj55gd6zyi",
  "key32": "X8NSFdtD1rAk3ynHWQAeC5zMRt6nWdDqt1dHw8nQjgQ3KVHvjFKgcNLeTxKeVY5FosMMMm4tH8h1zv9V87ZPvsw",
  "key33": "48PANEh1YKNctFdgnFT8TUU5mNfR7TyTwqMnDdhVwGfBBhfsCCjVcF7nvAB7BQVTp4w3GbbYPM1v8jrAwWKdHGRS"
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
