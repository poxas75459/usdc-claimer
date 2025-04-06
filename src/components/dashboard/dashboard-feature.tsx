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
    "3S25VhJFkSn1qZicydmqAtJCfHYUo5vSrScaLxJEzEz44Cq5qihHQ46SCf89kBDf2twFWnqENP4d34Cqn9agBvYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x3NLpESNAj6mfCTGZQdBZS3vmxXDiyGv6U2disBqkdgxDiB3DREweWu4i7JZwGWnooeeU3s9zpD4YgVN4oi38h1",
  "key1": "5j1aNj2XXqGPtU4fXPXLMSnjVcVNSvEvy5ZZ3BwmiXiV7CU2krfRkUS866WtYP2dhCMht44NpLv1WmunJuh5HSwq",
  "key2": "4Bm2Lg4YcQcmJdYYnnbavqX6uqJsqqjka1izHtzc6pGTK4DyuphejStXpKmWL1iucFdJ47Na5uVFi61WbvwEo2BY",
  "key3": "5yffdRmNLtSeHtLpUziP6VMhpEdaqSj5vzgej6tJySHRBthwsWPsL5RKvsu5ePxdM9PWy22hGXWVe7DX7jS24eiJ",
  "key4": "2SeXs6qWghTZjQGc7YaNMVoakEKP39KwU7C8NtW1sp6rHzmPm7b75TUaU3YoWX95BFCE1RTi612MjzhM9PYfiaV9",
  "key5": "463xGSWTXCxjfSemFgoqb5xbS3Rfg8ir1f66sfzzSgAci9LeJ1PtRChn48HHHvim5tecgTRd9XHzyJ2o9EMGey29",
  "key6": "4neKb2czdBhaKZwwhDqDx8GQX4yGUhUcNE8LEvrquJYvoNw5kUJpYxG22nWCd2vhKNx5rTUakNtrvca7MGxwhigt",
  "key7": "3szan5n4nmrkZQ6KTSa35bU5G3oJziuCQjNm5QWvHpqxQFLTEfdqp8ein8gVYm5QkRpZ7ioswXfWdiSGgwmyFyKh",
  "key8": "3JtSozgDGU2RiQ1fXq7moBo8Rq6g2w9ANLznpzpNeBN9Q6YAJXYCRPwrUeES3eyvPP2h85hZvYokFn4n53d9xSLR",
  "key9": "5v2RxCBjTMJvEWFRU51zmhQt71WHBWoSeGKYLFoN7RWP2FMwYL1oTBzXxAdQkKS4DFbAfuo5TTwRREPfBC144UQ5",
  "key10": "2StZSYPwx4R4ogzrJgLyE9DnLyc1d4qA8QsexcxT7TrdwFCBWgcdaTKvFvCaAvrzUUaCrFvnYs4jcysvpuugfDV6",
  "key11": "3C8MBTXz3HN7KfbovdLb1nWGvwmtXRXwW4m31Lf5y53G2M1eeu6t6CBdobJzvt3h4kz3ywZLbbMMc66kgMQfoEe",
  "key12": "3vowpUofBPitaG8q4SuXtSGnwasgvTYXcqqXVM5QQHQ4cKxQiFJ6r2gxkqE8RJQCNU3G2kjV6nTSqwxi1Xbuc2x1",
  "key13": "4DS2Ph8pQsiXkZhDrxPGtSsFEAvt85Pu2AP4TpYSAAYUxV9SuzwYY2PcuPZVATPB746p6on461FqhaTqLGcfHU5k",
  "key14": "hTujhhY26vTDywTb2aiyiipnTdrczud72CGfs3SLUAiKrFaTcW16VynrJGKnTGSj3L2e4eDdvGK7AVrGUaL4sm6",
  "key15": "4juVwunRxQRJ5UWtNg3qFJ5dYysLHxjZRpVAobBav2jdkv5SoA5vcdc8TwS7DvbZKwMUxmRXddy8gySRSUhdgAih",
  "key16": "435vGstZkff28ECqNR1wKKYgN7g74ePkT6zifSD4ZjwgPrTSEJovWDrencfDTpGscp5AT8CWFfQAJ9jZddRtK6SL",
  "key17": "48XmaUWvGqh3qeo9KQFVrLUcRxBCEMPyWR8afoLXME36PZYCsimSh3NHy784vk6S1ptFp1A5wo8SsasHLnWeEaRc",
  "key18": "5SJpFdjXLBjurGKKAMHwsVVzodMWqumUzLqtkEPzkWqNXmPiezSqoAxx4MFp9sykzCKjE6TpcHj2Wx6nQdarTQCm",
  "key19": "4udRNAmmFSim5Qj1ZnHPTxyB1UaDJbujCMVqH3iBv1iJ9EPbifhtkiMqz3FUehtmVuAmQnX4VeWEEdbeahyLBTpJ",
  "key20": "4dDQ1KiXct1EH7y4sBp9exXXBecMw1J6v9nW2yxaezLsvm9aU8szD7JKphTqMBYsK5tDpz6848tv7Xwgni58MzXT",
  "key21": "4BVnFTESVsap6cXoE1BgmoT8Fn2xtzhnhkpnCPE19GAku2zMbPSRwhxY5UmY7P69fyHTiGSpiYZzTfTg5hH1JXnv",
  "key22": "23tqbVodJUecgebv4sLesqnKpbR1j2byt6B5k8YxfC8EcwWKjLfWmK3CdkmcBkt9xbBk1w4Gf3j2cX4DqFd56fRx",
  "key23": "3pL1wiunM5ogzgFSuJafkpJD1DQfmxPkatxUEJt2iZZgS5Srj1vLXWMnPZYLogntQsNtoydqJnEBXXvLzDUmpRnc",
  "key24": "4a2QPXkJ1pGiCbh7Hz7NVuA811CLxfNX6d8Xq7qWmK5FHJ7Pg4m4hdbmyBDXaxUWcVW1Ln8PXCxHzAURr5ZTRHax",
  "key25": "2cRVqU87h2yGmWshxCoJarfXzcyHt3WvxnWrHKwzswteWBtyh2mtoCyTPXYVoyi4FvJ2oSyYLcmnDhNx1DrN9rfJ",
  "key26": "2U6zHVYyPLjeZTGoF59iDFiSv3oRUFjVComXzsSPHxcjGP9RzjJShYJDZQWPdAYzDu5XGMpQJCgrT8rWE4oX2jX2",
  "key27": "t7L9oYU69EPV2Nv4gPqXc1E2MTiXQmHwwb4TG2tdPh3zz4hgkiDeJ1BBpkkEk7Xhr4Nb7GjVFq4mpk6b9UWAns2",
  "key28": "43CnRuYT1YjSF6isvQbUaeAtBZEWWdVBWv6Effz81zpq2yqcKUkSpiMxJFs2CE8UBX3DhZur8eLZFQME2mHMJrUH",
  "key29": "2qr18ASjg6jbcDFM68eeEgZqdoanHcSoQ2dBdJdT2Qz29jS481nqD9gFPadRtjJwKffqfV49goWXypzKnoAhM9vd",
  "key30": "3V1WzjEecyaqUESR1Bk1gaS1Fd3ZykQFMoiVvwQsC3kS4KB7h2Cng575f7c3q3qsPUtEoZSD5byPQCSuDT15Q3Sr",
  "key31": "3ZRc8Ce38kCE5ZGSQ5jZnLdt2axY5yFA6GwAUfpyZb7UpTrngxmrb4mahc7p9CwNeLQs6gNoP6s6VXTDJ7G3rise"
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
