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
    "5RcZQhc5D4YAGXpn4nXv278wiGKeSh1vCCmFAXBsoG11YmHgHprC4L3zbaBUj16AcLifz6FBbQb9iZLQ9wML1nyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BNXqS3oA4XonS7ViVZva5Yhrurb4BCM1SdWsRUHWAmu3Jwgd6gnS1zRBdiKZr8p3Y2gGFAHCVrF9PTMVG1FLmmU",
  "key1": "4pkxu7hA1CZzztyx5Pro3mvdMkez4QpypbSnPVDuidh69H8Mz7itpzrrovrLzNjXFbBsBjvhgwHionnrw9wsM1Ap",
  "key2": "5n1bNYx1JbYt3tfmUhQTiYrqsFWSjY4b6dE8K2ViUVK1mc2uMN11QWoU79QMDNfJmYdUbqZ3QXKC9Gxzp2Ya3Cof",
  "key3": "4ps9oGP3BWWFmBuaoZnerL8S8vCStjVWU2U5TgF4EQVFtwc55B7f4DfVUb2mtM9WoZeX6UMJVvwwbp5RXBLCuA5D",
  "key4": "5aKtH2MyeSyXSsXaqpymwtCm8ZZUptx6aQjWDpcTG5jgu1BPux2aJh6gSWn4PEmwp7L6q4x6DNjDi4RySqgeu55j",
  "key5": "2CS916FrMtDVQYzvptA6Tqei9NemquVVavN5dgJDNwSQY9rWXEiiDHNcawcaGdNYLsfkJUv59jewEmTyLUx9M9Fq",
  "key6": "4ZuLzDK3df1BGaZGvYKHwScM4PLPmiYAk9yasc1ft6Vm26L982tbAL44nfRJGZvi39L3ZT9nh8Q7QuDSVpRCHKcF",
  "key7": "4Zdy2ESpeCfXyDYiwxm2ts4LUZNxuq46FfeZBKMLvZXR67aHn4cyZkLftBc8EvZ7pmFNZypm9kSXuUYmJANnzF53",
  "key8": "5iy6et31zcG2FfKzEscYjyzpEDE5G5Wibje9qVjLTDbAvwQXLuvYwU4QTku6jiPc8fud5wXWGA8xaSsKKHCaW1QJ",
  "key9": "WaQYAsz92zYzJ8t2xQY4uF5JyFhd2oejCa9LCqBdkxFCbKUkNY5AbbkjK3LB6m2obUnvnPZRNm4wS5KqTyDS67f",
  "key10": "28gSG3wrMZvcsWWAGw7YEtGBdD9JWMWp2FmgoXYBdgeWNRfubHLFqFfvpoy8M7zQSCnMBLGqLQURThX2YVoEoR1v",
  "key11": "aHiXNrhGQiPTZgTiYWXDKRAqfDsA9aJMD9R597yaK5qWiobKdbvCqyTWgiFpdBfT4igJP3J9dxqvaPdVEtJAQaq",
  "key12": "2UqCPkpQdqgFNbg8WxCish3Du788Hrq6dZz7feS9KGrpHcc8BR4Fb5gT657aHv8DLtF1tLEJAxH9ZEUuam77kRvt",
  "key13": "4pZtcPXbpwLimZjBfLWvw4ZvszUr1HHwLkN5JweALHRfVsSPdbiK4ZqWx98wqDohuQgJG1wb3nkzPufi6YLoYMw1",
  "key14": "3YA3x7XQpMP2i1xsj8c33kJY4tadPYtwZKZboNr1skGmwxT1EH1baiaDeXaSNSQx7DE735quPoGsJzBqd1izfCoV",
  "key15": "2cqLGx4YNgQdprVXbHcUJ9TJpCwV9idYTego38NfmXMs8zrDQrGbT9wb3BdCJBwxxcuH1ioNfUxpATbCTYqoycYD",
  "key16": "49QxCnDswZS1p3nkPkn5MzrFVoH8gKjVJK8PvmBHrQGZ8ZaLAnDLLvJcd3UYrPEnf2f62QqJ3xY9UmmqV5Ef53cP",
  "key17": "3qYNXm8aw64tkcLndVqNpkjNCmZrFSpJteydkyfyhMpt3bEyt785KkvSUCZPfGX4RzTcBAhqbGPtv4pTKQpcnaLZ",
  "key18": "RHTt1aXRcDKXm5uD7Cn2zYcVChFtpWgnLCzXp81xtrz3qrgiz4PEx9oNF3kVr2NdbYcjcyujLwnpyWqBULMTYLo",
  "key19": "4hJseCJXdGfn8c4fKpWD1cTrrogqqE2qum89JAQL7imBcqTBBLrG92EYSiMtax8jL5Sr4reXYXJzmCkC1gVXBEqX",
  "key20": "2qeSbR4BLicPzqFvSrGxsaAj7E3YRu8AphgzsqLA4WpuP173HFnzLDdjPCMs4asCcJEuAMzcaLNpSYbq8CnrHb1o",
  "key21": "SETbQ4e6SW9vk9zMWBiyMU61u7Znr5f62rPthiKDfiBe5MqdVarS7KoNNtbLQdEKTipX3PuAK5M3ycb63ixSxby",
  "key22": "4cdmLwDbfgEurztkQiLGiv212dgnzypCMy3PtWMfhMK55HVShBhXVVFUocbLeukaRCD9VC6LASsicfgtT4My2ijX",
  "key23": "3WA8VHic6mEHTQLGc5Bfh7GrDZDrBsCvVoNM5ujACyf1Xvy9PkFUC3zHN9iYLjEyJKpAMF6N6abvkG48XHJ34mpk",
  "key24": "4cPRj29a6tnivTDS7sMUyZuw4sf83PqPFVV4KcZEd6cFem9s98JXgBTcMY4JoyMV8eTBVZZhAWSJ8iktqcQhFF5F",
  "key25": "3RFyHpQpvYg11DchhG8ZPiAHCFN7JFY9e9txCDauRZ3PQtS9WK4sN5S3buiBA1ooTHV7ZsqsEjAjd5Cn9BxybcW1",
  "key26": "4TY4mbi3tmzfxGEbp19VDwWzfh6YSMqqSBzyNaqBUwaAW4sfxY9esq8YCCiLnfyjoZnUa56TsjXG5REbwQioEBUz",
  "key27": "4xpYafuUAyvnQ3ER13BQCvrXa5a9dSvUsjWbnohCUT3Dao5wxpUoQFgV6cfD9F4JPSKUt3XBsJkQvcRXF5BvtRQg",
  "key28": "2va1QCiGQb6z1fVcr4K95emCVogMqpBhRHqnv7ZjsYm5etrEBL9tDKGJxEdBKjJ7dfuo1yT1Zz1C6f2QPNzZXmjb",
  "key29": "4Cq8gjKcZS6TAmjsFS8K3mSP4m6VAAPL7y9xwM9cdfXEHZhhTfxqforWtodhxAcQMqrjA6FhSmYvpnY8EwHHKBc3",
  "key30": "4XCf7Wn712AcgbkTanR2Gk1C38x8a4gL6v9kHxDuf4JNuxxWuE2tJUM5wC8S8G9VK2qz8XKhri86m8wzUBUAyvDj",
  "key31": "ajy5M5sMmCHmSYNp7bMCYqDu9gWzFrsRj4DJHPXyVdcMjZUaDQvfn8bztptmNPkArYanebYTS8wgFSBuM2qgvSC",
  "key32": "3AZBc5Z723KUrn9USK9GHv6UMFZykqPaLq6fEdU4xDFyd6VFiGmkHKBsytqC5JgdoKexKxw77gpT9KkB9QPtS9do",
  "key33": "3gQFsD5aRG4YEboxZRQStzBmfk9gztxbeNmx9PKsEvrePqytbeT6AAWfqUrQMnF3TPDMYhsb8wBi6KtwYj54t97d",
  "key34": "5VBiSSsxQzKAHNUL8pZi5fiY2hgF74gtETthMDekLMbKZ3cJTnTHvXNQVmXJwjcZPuTSFFMhi95yCc1gafJ3dToZ",
  "key35": "2BkKMiC7DASc66pJwJWTLGRLMduEhvf5NDcWzbEJxCCxJohmUfekZFyKubk7fa6brmd23Vv9VBDQLkcqJhDqEjbh",
  "key36": "248Uu4aRXwuXVn2DUJ1U91TLft84Sk6ZBtum7KaxDpgpQLPDEZVcEjMezT3nP3NeJLb64C6W3LE3oV4FKFi2mpKe",
  "key37": "5GUGQ7uPDmcLnviVAHeHGfuFxrewZt1wKfSKKNAGkvqf5vjxqNUipoA9mRyWaT9HuYCwsGP5wJ46wVvQZw2qTHfD",
  "key38": "4TwQio7KD65bH7BjqciHopJa6UJofdUx77schRVFiHMyRvRKgHJj7is3pjoQFaD4Mm4qNC6BdTTHiEBTChKDFbWR",
  "key39": "jTvRuX1ACSekrqEnynaaocMnB8e9nx52BHRGMWDcujtNbhUHsGeJzTia1XQUPdY9s2bR2CyzvMxrSXaQC97ahhA",
  "key40": "2NfXRRe55cwktS18cHQ6SFQxG1UKSiQJ3Zhq1n36Fmvm51FzjGThabrJJuAtsz7gdjyxsc3sHkMVvUVtNCderGsx",
  "key41": "3M2XPxGVqFUtUoJNm5pSfspneKLH9BR4HrtACXNJbQoR5s89mX5cSGgANQcnR5G84RgDcK4dFhJ3CYUfRR8RH9c9",
  "key42": "3BMVNYZYSsEfooE5FWsJYEH7t1DPEX1x7ArT8E5qBAWyGU9Kkr94X7cByEr41h8u9c5dtxKWCs3hLUNhtpEc6ZP6"
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
