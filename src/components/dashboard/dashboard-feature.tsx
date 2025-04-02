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
    "w8Jkdv6L6zhyTJs6DgKDeA7iRn5tXTdaCVsAf1W95VBi38VCVjh1P4HB8Uw1ajPETdkdTNNvTt9gH1oPRwxceAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mVcC1CGzKd7A8Hzx3SYimMa7ES1eP4afGYDaAoYit2moxFwzz6AJPqpRPyhMBZWkYCUCL1J8uxit7CqVDbcbWiS",
  "key1": "5BDR3SZFcfHWzqRFi3SHWfYp6Yp7jWK4wk5kKaU7H1dJio1s1v2kdGXckhHgFX4RkCGjYinwwd21ugpyargGf6WD",
  "key2": "5cUc9V1eyLPGecJhDc6AWmowo1R5Wbt2eXSERZHR1CWNpjjULxYJeEy2dofBs4umUtugXa5ryNy98gPK2UNkKw94",
  "key3": "n9ABfD4LXDGAznyRzZkgmnFk8pm7nBdfYXPzfRpAynyYR2H6osvfL2Ne2wSXfuQ4ALtZsYeeffJ1NNhRY7Hgtpv",
  "key4": "3htmX18QWEqhdqzuGynzgn4s2Dh1CWC1AUAHHe1muNvaDbQC9h87p6sTQTRMWGWjbfjYZbuuuy5XJUA7Ja2zMSmK",
  "key5": "vGaF8FPAJthpe2byhEPa1mncVMFFe3uNs8pNywj3GxFtNwtzaG21Yup1qhyaoXChNQPL9LFhpTTzZQ7b4FnoCiS",
  "key6": "2ibLY5j9uTXNK4QMm5Ddvqzrhjugk8BCjs5diz4GLusAEc6wUiNtTdxLL7z1UR6qhBipjMvqdX6cY6g2bnbm4o7t",
  "key7": "4ku9h4ojQpN6A6xgtBzmPvKHPKaGijTGEaRgtPzty3YoA97EDv6s2HtbMcxE2BTQqnDphaNTQWhGJPpneNohNWCr",
  "key8": "5TtTdVgN4x9k647e4ADmhYeMKVKgwv8fYB6vyxHDp91hVv35erd7uCyvRPDFYf7oAeGFKpcwPpszzNg4Pn7AyGuE",
  "key9": "5s6xXosCjNMQXTgu7o8hddy6WPmrJheoWrSVjnHG8C9eR9oUGrw7PiNfwvh6RQXkMz8MRPCkvq7po6vSRGf4zsyi",
  "key10": "5FuiAzWip2qVKTXHAPpCkqPCrNikbo7dMySoeX1zJQ5P1NArSv8YJ2JRwSzdHkZJd9qRnxzu1f5Bgyjr7VX3R8Ds",
  "key11": "44nmY79zCDkLyLnNRqyAwEo1a3esnReXaTNgUhQ6qttMvb1ziitVPuu7V8qJ6hWKP6jSrjTemRius8KYDLscwKGs",
  "key12": "1w4tis99Z3UmQJJM6xzvEr1P6EPL2XUX8WEjVpy7XR49cBsTejMuKrDstYNwbAskYNdbjoD4Eu9y9wEhKNmodiX",
  "key13": "45XmipxXx9zLtg8HwmqpgCGqVkWr1QgZ3dJhVtxnkYiswg4ykXb96wkxEnzLQnDi1qona6KtBw9KiKqUbwHaax3N",
  "key14": "4y39jyFR27715Z1MvQTZxYgCisSrY1VCqxdgFYVLe4Mtyg1XHcVozztu8gfsijHNbFwTAtCZQyVnvMjHyEdRpQxG",
  "key15": "4txpfgg8iJhvb3Fwc6k1m9qajJMpPh7dDXpwxSK1vDKiFSbKTBCiBTku95Axo9Y55ZJaPaXiKSxhFHncC4NkYLvV",
  "key16": "5nDSCQeqG8b1XwLUYM8VQ1BtWPDrEiQLvjmRYSBGcMzJzAjnVisVcfPoZDkcpVkU8iao2zxw9PmxFDzfCMrJf7FK",
  "key17": "46xWUZiHf6jK75i28tBYDhW7AXK7TdoCCd8fzKZzawVgXEetrBWcrxBTNQwky5X2pDyG8csmCXoxSzuscdRrn8dY",
  "key18": "5tDA466CZLkLrWPMoK4mn7f4XNUpiorTNPxK2bHJK944dbaFhVzHGBu4kennyatNVYnNH9LBdZATXAzDDzYxdSDk",
  "key19": "332v6pm1469UNqNe4wPShWerDiimSsiTkAURtNXAtwVdjSZUs6fUpLNoUEahTFoCaGdq7CLi5wpt6Ptqbe41kp68",
  "key20": "5m5aYHhyhCn2EJoCDjout9ed8r4GPdVQa28NrsJ9RSUZRtPe44DKS6AQjM9FqkSVNtiBurisjgZvEaG2ViHTxSAA",
  "key21": "3ubXL4qtYwJhdvwdNnkAm13CTfcwku1X3WNdmpJW8TwRTdikzSLTQQPHBXy6BEnLgMgx8yQkBg5ACzFr9JMxvKKi",
  "key22": "5h2S46vtE7Lfu9oiAUNZZwqdEhN3YiiqueXW6zxfvAEyPNvF5PWUmrh92ZWHnSA4B1CCy5tJHGRes3SGtUViR959",
  "key23": "2JWnLZBDBNv81LRc5ANDMr3cd1GqzYMjzzZoGz6AzY3PJMAZG8sodBUA1xkUwK4iQkwTKsLt8czNYDUG6ezMan2U",
  "key24": "61hXaASZPsXUN2rVez4Z47biX2CLLhTcZQ23p5emU5UHM6LypZHBJTdZyjsoHDLak5fGy1P1utGq8otMRhnXvQGV",
  "key25": "4HyDSmqj6xWJw5wdUtM8jiT6oCn98AERPqxibssTVKki1udMfJtNd9jMnTdvBUmsaCkge5WJKHNgALbvV4N44tHK",
  "key26": "2wV3gEVpKzkK1xtSJYerMoSJ95BgB1Vi4hRYoRqkFe3eovNsoFrpL12NpV1JyaQ6N8Yh8sLriB4fJNjq8Q9Xy3DQ",
  "key27": "4J4yi2dgBVyhzdRD2q3feFhX2HbMvxLkj57S8KnfkTpQsfUgkiK3PjmPYWtw1zpySfAPgCABqvtgu2Drt2um1k68",
  "key28": "5UXAo5BJbgiE2ByX16kygUkhwSuM8aiXqz7tcNje1mro2m9mxa7MPAskrdgCPfzQmPhSESaeQ8mTd4MQAc6ccsbX"
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
