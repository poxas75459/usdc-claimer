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
    "3ocQGX2Fsx15eCaY1Kq8wX8nfKVZPbwp9dTSZvkhEugTvoc34U6M4MYm14M4eXxqFkDmrHp1otSqXtzmmH9o5aaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57d2CH8cqkAhN9pgLptE3PPcieyZnRkPUYkvaWJHGwz33KKiA8upE7C5DebNjetJgBKaYivuqtEPes5LunuVYNyV",
  "key1": "5APjBw7sR3NmoGZGnDEvbf387fFik8NCE8EotddpQcFD5aRwXrruxS9LZ86uXYvRUhi5itEtcuAXfUtDyKaNUGmP",
  "key2": "2U4jdrtjVTLWogxkdjL5Uz7Hzk695pH71yNSLs5nuDBx1mwmNnsNsnfrBdwA6DQuD3nru3cfeHyHCpWLB6adTSqE",
  "key3": "qCrXf9ThMXuYfTtEdXJhEcwduGDestDMU8Fn2TdoNKuWcwRNyA3iUgGq9WRGJw4YnKvD9uSMkCsibrMfmgLHZRd",
  "key4": "2he3uQwm2omjoW6c3Cyy9mig41HTDdqgfFUHB5Dqor1hyBq3doPM8YUViUJ9tnGqdj5f9cyQ1HKvc74r8xSjgqv9",
  "key5": "23gkguT4zEu9P6R77PHwdoRF35pqzpJhTfa58YsRSjqMjMu35WbEvmNnq41DUu9SA3y3o2LZAbsKkpJM3PABpBCZ",
  "key6": "3rpfuLEmfrA25ionRFXQrTnCwuadPDuUkVusjoHBwRr85jxgSQjgQkaksW69Qzkk3RWC8VrbhzvJqQzHp2VaiGxw",
  "key7": "6gEUCfyyHPt3DHjLqLVSeNvQCxZrWcZibocsMitE91nRVZeckrSTxLAQQ76MHSfRscBQHp5ZHYYCj4WgBtWegd4",
  "key8": "2hBECt81BpG5X3yBUPSueMHMnT9ZTxYZWZq5cY6mfuwGuFwM56SHhkVSD6LLarZjPcu54cCENc4up3HLoh81TMfW",
  "key9": "3zuZGpApLX5XwuxSU9fKwfCwapYj87y6YW1gJXJwbmUyGTjwK34EcjyapjN9T8kbZ11ikeggv3HCk2ecFujds9DR",
  "key10": "2tjyhDqFj3DNjXEFFtRtcJ6WXrPMuwj3Fb7rA4YbpbcDMxayMMsBPktuBRUJc12DtDFnKfwSPxTE5GoatVv92PNN",
  "key11": "4EhLpZC8orHEbvUcc5XS58AzSrtFYy4z3HTTZHVEj5Y3yhrPryFTst7SbkEXyAWDkPkZUmikhWvYzqAqoeFyjbJM",
  "key12": "3Y9bEsjiY8QhmQL4HJTnxNH6Fgrsvz88SuiMtf277FFtTverkZMMZoSsQja7tVVqmAjWfKd7s9M1cwxwNhH68Nt6",
  "key13": "5qsAzj5DHD8remw5ztENSPftVaKj6UBhgBP8k5b4ewnMSBDbB7eJREpZBrSUeRoNiCFCKZnbK8bAKZrUvdvcgRuv",
  "key14": "4uUpwB3wxH4fsyDWJGhW2ANTFyt1T27hE33MRed7tcywMz1EPfy6pu8oYUvYfS9AQtqwNWUJ7i74jZnXbjxgPDNE",
  "key15": "62gDKwSSmYSUsQURm3nejJjVRdCbaVTQHm6Gr3zqnoUenNd9kbVjWGsYVaDBwjnnNv3xzYqNrweF31wh3ajNCX31",
  "key16": "33thoAbjJKL1ptwHqegZ5CjXwH7eS2PtmEAtYCGovHiezp9HnN9MVQDcoF3fGRxBgPtYkU5XnHfrsoGZrvbVxZtm",
  "key17": "4Vf8gAFFREASYyxWCRqsRjfUkPNQVTyEinQ9no79JDG17p42oL3MXvvpgXq3RBY2VRakFrwZ61UPE4iMqTMgGehb",
  "key18": "rFPzSku65CcQ8RbATNiw5jVjxxaVq34n4AXx1MRitLLKUV3nCn3JP9y3L5tbS2j3KFa1pqnvkZC9MSFjR9nbLJ4",
  "key19": "4ZUvVzi8GAXzX2ojTTwMHjJh5ujSWQo8GvPHFVvobW5LyMd6zwBQe53sFksQoifXMSBMzR29gNxmdPNDmt6RCBAC",
  "key20": "DrJU1oq2XpxHAFHV6FFZGwF1BisVqzXQpqg9uAuMyJYx6M3pBBHaoW4aseMDWURToosmwk1T82vZGJJYs9LCYoo",
  "key21": "3ZWzc3GAVv6hrkh3ihZ4zFQS15McfXvnxkMcx4CAMWgcnCY21aztwxDiSThnx16yqPUZopB3sihL9p7HkhrUpjgL",
  "key22": "5jimK9pmZrfVvf7DFEfDcaDjxoosEuZ5RiSEGj4CXyy8hvhJ62n6XtXZQyrMskYd8MdBitj8G1TJiMsAfJvy4CPN",
  "key23": "FwRMWGNeHoWstvZwdYbs9D4JwE1LgD8jEVmu7V1fbqJrXBF53457msb7Dczwze4DRdhyhYG6Xhk3wuXfecPoYnb",
  "key24": "43zZUJPXu6tMUJ4pdfC9gXXM3xWBx79HKYHKcybrG3MA4v6HtjtDMZZsVuWNTpMezBPuz29TKQtGjXBCh1vYhwxF",
  "key25": "4sCdMtmwjj3pShesLrMv52VtJ9doaLQMQj8EU5MM9MDEhorK8bjZAiegcwon6D5darjN2rMnTYjNBaA7XjviBQYH",
  "key26": "27Nq3sWPBCkyDu2tvUNDhFjVVso8HmfN4gx7DeSzSrnWQXDHno2TiRNXLTPb4Jf4bwFq9HNetwhnrkRA295M5aYD",
  "key27": "37ghNqpm5ipX32Mu5uBbnQ5K4pFyz4Z78oc5Q37EEa2ozfP6fXCyxLXoEwg78U7z6E2HNtEhXZrjAmppk552t5Cf",
  "key28": "4v8aCppv7NnAsorGqaFP8BrNFehc3LW27kdbDSgsvxe2MrLo79uHcX4w4smeDAn2DKrHHStm28unNRvFxF4WWuZk",
  "key29": "ToB27KG3mS8X7qsj1jV15NzgPtoZVgoi3k6rE1MAD7TnA9yQZEpmDfQPi5Ls8H7mFKUV5FbWtbfDXs1BNCfrVwR",
  "key30": "4ZhUV1VdXwA9iDkrHtdUBQu5xaWpcpu9rYiq6ELAJscBsQVr6LFk43crGF1z3WZivHZBzjeuGfrAhCaKjjesFUJw",
  "key31": "2nYo6GytdC6ysKiGD4uferQuSF4H1GFmS6fCBNS8Ev1R2hNN3HatsxKV2ZWwUG8ASEq9CRoBaEoYyaZGRSLWs16e",
  "key32": "4o7NEZ7pL3XroBCNpgz9APA8S37pdyu9JmDvueijGNKZoAnqAsF7wd5Kni4JCTaFGkfCCTkEYY7DuiyoBfnHPcTW",
  "key33": "3JyhvFWRuvuXpzeLEmqEq5s1KfyXJm8hpGJ2ahMDoLk3eTRoKnGRVMYkxo6mUN2BExjCC1c4hRqrCdSRw5Txjq7N",
  "key34": "4fSo4yVhFJuRCspFg8xXMMU8UgZ5pkt3dMvTshLtQoo3jVgcVBmUGv8p2sLZcyxTUkiSuDo6HrYvVhtyHab5EGka",
  "key35": "2ordXy9Wtjt9tXWYb7qzpsBC6c3FoZqJfE9XwZTF3hn7qgr2Mr339YUKkLaAj1SVpH8JAhtWSo9bua8g8sUR8wjR",
  "key36": "3PC1Kqf93jTgAx8QH9v6sqEHEBqPmCmBdUY6q4yKzFRjEUCUcWT3zV5hQL1vRXfQCYSaWXjpHVPAqXi8R5c1pNLi",
  "key37": "3zszsRqEYwhBgXauNM2nd7SUQjxGZ61WFkY6CSGAGFFRGCHcS4LTe57LnS3ANzWGUhwSTL1r8zidk7zzPrHeFuxV",
  "key38": "DdqGBuoznLbQEEYtC5aRXw8wjXCrB5cPFYypNFRqNCzcmqCGSHYtt9dfmYUuq8C2tpbtyGvDpVmdHebRF1fzsi6",
  "key39": "3hRxpX8cCZFkUPbz2kE7g3jf5xj9ktPgze7jAoGHLPijhu7eqZoxefwYDjGLbUCHLWDDpg6Z9AWmVYe71NoQMzks",
  "key40": "fcRz3NF9usB3RuVfhTBP9Vw1Vn4od9KEVJTbRohKtdjDisqxBwCmRW7afV1ry76rYpieqrXdToS695eX8xd4jRv",
  "key41": "2XCTehAoDGuXsV87DduQQ8sFgarMWvnvoFC9iLLoe97hnud2RPuuae8tcKcfKdeZdnpnmuPneFNvBVLpExUWbZBq",
  "key42": "5Skos4NTFJsoiZgmMeFSYi4P8vYpbMnSJqppRy6aWznnPcypAA4VXKRXJ5SUCgXLkEAvQZva4oBWnsdG34YV6Kot",
  "key43": "2v34apWTVsxj1thfg5gKtXNRMCyBt8RVvUDTV2q6rGz8AXQTYuQKKnSv53LE1q9mfvaqfaC5Pdpmi29S8yhg1VAy",
  "key44": "4hEF6VCspLosFHCgi58ipcp3TX2fEXa63coMRNZkt74BGKYg7sJRFn7r3LVHFjPvM9x1Si1YqtEQVSCZYsxfSkvN",
  "key45": "cHcxM6rdA8fqf19AxVRy7APqx658dcSjwFvxNwajUMrddWF8kPqzy6rPDrLjyd7vRs5YkvrQbSX6wvZ3WpXmThh",
  "key46": "66UEXFhc86BGjfaqJSPwRLncwwC91cYq6pD3aGCwQYoic8iRdaF2RjpY3ygke7CPAGuxoaaLoB4ogy9PikCpGnC9",
  "key47": "5ysEQkNWAjCtgoTyaWQQzidX2m3yAH2nJQ1KGfYHr8MRGvxrssqSyBB6qi81hc5PXHPqB6APmfks5f7iwdnEQnLo"
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
