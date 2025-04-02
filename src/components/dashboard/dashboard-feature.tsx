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
    "5HwzsPmKaH2vYxRJPtF3B3cVTxgCW75ieUBPcyZ4HkkNr4NnsuMQDxMwqp25t7XSAifuaMFKY8ZAWRYERihvF2UH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e25XTC7KtZacvkwPeq7UEscZPX5AKdsMv3HWhvSAKc75gRGnZYdgj1bxQKPcuxjJb4nRkuMoCu9N2tfors1ecVK",
  "key1": "qQGkWsDEgAXBSx6y4FLHtdNunhdtHAyozodicmJU6PF3XPaPoprH1pCW7RpGJnBrfn9e7bHLC3E52b4gS5jnaFy",
  "key2": "5AjPEDEF6V2G6rJTBBmVTr1H2QKrUkrbkJzPzxotGRCzdaS7Waim87aB6VCkYUJkY6JfV5jeGeQbGyEqBduHXii9",
  "key3": "3gfTiDum2cVWx8Bqsy5R2yBi77JreiAGj9XpG2uRGyqyBcq4HbbVu1bvJyo5z1aPQMDb6hPRqaxNZXf6b4mmrYib",
  "key4": "xDv1TBWwCQnkvs9QLeY8uRFFTH3EtXJMGgMQCvM4WfFnH3sVXsT552pAubNvpJpGFcJ7omTk6ediAJuWuZwWeH4",
  "key5": "43uWqPcuD5H4g1XVFmsMJHXrmkTg6ZF4DdKu262HUXiTq97HR1ELSXgY6rRSNQNqXm542mko3FcHciGhBmvthGiv",
  "key6": "2722B8eFrHMTxfYjaPoRYvsujJemXGQZCVhi9wSrtygiUR6hEYKqT7ueMrJzPcBzuhfsRmXxATjP3MVNbRXoWDMW",
  "key7": "379Abjh7HrGfdtqentstagkjMToxiqQSdsbMo6B5sXe2YKG75LpMwNBf4cChinwuEXoLkadNZEXHaZudng3CPgnP",
  "key8": "5GDAMBshUerYJjPK4uxsMF3xJAubMGjmkWBvzmsLhgKi6AFMZMJz813QPdrrq7phg8Kq2NVTx8VAGvit9GbRMPqP",
  "key9": "3ZSWNFeix68KXKFLHJBuJHHf8vVzsYt64wDaquBFZ1EJCTKYBHPLxqMckcLNKxEw7qAdhsaX3hjea41y7Vnkx1iu",
  "key10": "2Wovt1ucre2v16oWduf4wo9yCDHwJQHqp7t3zVWM1t9kRwCauoUumTgPTYVxkcrKj4ftLr98UhmH8KLi2ax4ws3c",
  "key11": "4wqTeGCe7z4JE5GfYN5wuKY5pDdjJwrRmjuTfftSZEsjPTcQvnNXtSUscKsDFw1uPbzsZZ14YNQ8HsxXSsmpn2Ab",
  "key12": "tTCNzMekGiXJNZKKzB1oEi72Z6DminiDTouQbwUES7QyfX1jo3ER69UwXZeyXCdF3t8k12QN9uV1FcBy2g3yWBM",
  "key13": "49HoH7pigevuR8KvzHeJeNuR49wimkFUkX4sqUqumb3UpHDoZtP9CfF7tQpuea2k8aTphFvoEUjjZmG95QkLG2E4",
  "key14": "5ThzfNW387pX2jg4UpjQenMHMVJKYzpHe5SdsuLZQbUfo6DBphi3aPwNdkRUzFKGM7TXcKFQuNv2eEDu3giCcVn3",
  "key15": "QZLb4uLduirSYrStvtVkh4JjqQMVdZ46y24poCTniLsJFjMtHt8VyAq2nRTFLjB9fYFXzjvunswraEqD5dhoNtn",
  "key16": "3gq52T2tJe3p3YmK1BcSMpXzDKLQdbZgkBQxhREZG83XVZ6qSoKKKajKB36LREudFD2V1mMiaTxHwERqCE15TCa7",
  "key17": "4jaDSapFirEuXFMerEHuFs9qE8BYbzGTpEZkZpPM2XqcrBSxfmGcHBCoUHDm7A71GmuGjQspGCWCt4ovugDLHMLo",
  "key18": "2mwNtRrB3qVkFtz8CVJ9Cr2wY5F3smYtCPaySkYzyNQQ3fK5seM7QSEB6cvH1ods4yTRHq328phMhHnEfmG1ohb9",
  "key19": "85jzGbXwJEqnBoa7sDSsQhmcQCX29Vt2W2XGeDd1WQPm2kUcYjf4aWAAvkZmcjNVp4AQu8szyC1tEbU7GccZav4",
  "key20": "4AgjrKMu3BpU6YQ1v31M6T5qcXemiTEeeYCnwUueyp9dFRNXERzKU3vGeNQqdjf1nCFQuw4L9Umeq4cj6cAfvaJS",
  "key21": "5Kcad9a6R9JFaVFFgUDpZeyqq9ZKgEELeH3bHZFtwevrq8tTxBhrtHNwaArhqF4Tw8tGWkofhqgQDFSDkzXMkg3F",
  "key22": "3WZKio1WuKrMVuAkQ6LQMQ5awEBi6FNhuQRGk4yzR25uwzcjNXWYarWiiph59XfFEUZu8efjr7LkwwYVmXDf9cmb",
  "key23": "2mVYMYCo3DicoN4HQQ7EHPDBvyk15TVR45x1eeyVBNJdFW52E9tuoTNKq7Wf2Nk9tm9AHvHJuqboeS7nS4tDKwtU",
  "key24": "uA2XBymGUumcHb4i8Z6FwtnQHaNs5tP29fhDbwswf9RAL5md9BbZ2G1riMw2vRpUnyzkKzQXubLXijczhBACzh5",
  "key25": "7LgaSiMNhrdTJdGXapHnCfsEkHkSJrv6FzS78927gBc3N9fkH9D7pDKGHFguMp4utNmHVXTGAQP4P25z9BHM9Wj",
  "key26": "4RYqkh7F8TRan1aaEfBBGbe6Fw34VG4QSHDGYLeXwa7osyfArP6nEX9ZUqvVupyBqR5wTRZJ1uPg2aeYv9gnzALa"
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
