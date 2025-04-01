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
    "64bkrRYunWHHScBN35kdmB4pzCUEnQXYxoJsuSZPH4YGbT4o78Cpu1ToPRNhN6Q7PSegQToMyBVkyPK7qTkwNdFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kMNRevEWV8kQpJvencfCizWBxDRfifaT5eNg11gr6mi1CMMhQ4vXShAjMm298v6sCyXMsuW9xk97cmC3nA6F2h7",
  "key1": "3gxCbZyb9ojDU7AoGBnEuqpqxafT35zLkXetppDZVzftSucBXeTnWMJ2zUZ97wsVyUK6cqRGiGe6S2QgMEtLBTDb",
  "key2": "5oC94BWkfjcwQeFZEA886QhzcqpdPiGQostwctMB81Hyx5SUwXu9fWEiWR3qcKdLri4RxfEW5FKQZWkzVcnM1EJb",
  "key3": "4Jz5H2JKFfKf5UPi2yGsUHLeWcfEaSGu91unQFBtXSQXaaZ6cDNmhfqJfyBqzddXwhTqHV4tTvpi1MG5tYDZgDFH",
  "key4": "pETzraWRrKkTqGCbzQCByDsFU53mrEANBNTpbbb2LFUxvLQhESndEecsm15AkQJQD6DMqAVoVqWMusJGbQLx1r4",
  "key5": "bsxvt5b48L57exV3qx4DvTNZxpyvyJ9fzySjD3AtGtHWik9F6UNZPgWV7jrKZc4r1MCRnfMYFZFu6uKYiMqe8um",
  "key6": "33Xi2cwpNC4rJH46KtJnrsreeZduSnTxtWwe5RmTG2kbffsQhvJyg4rQNWGG3MNXM996gEUoyrEHR1rNhadSBuUz",
  "key7": "63isEiugLv4XPB5AZvSxixDjpehcc3XtiFXCZT3bx2to8nqUatAkqzrcB4qCDpUFaJRQPuyGp4bv7muWBZ2vCbfL",
  "key8": "5VebNsJh4DojRDJZT2FB9w6VJ1qtaHmjLwSSGrmyrXoaPDmjoSyW73v6Lbv334Y9hdc4LgjhAcmH8RUSqKBWvBhh",
  "key9": "4aCRBj8okoD6rBehVUq3yiaTmvwiPF45Pou7bdANeZ4Baj4qJQvFwhmxX2JDdfEyJJWJEJSjP44mYCjGqHJCD668",
  "key10": "5FVCgQd8f4Nmw5e7hYwkNmx554xoN8W1xh2oRVA5V1tt3vCH9zzJ7dUgGTZcEL2nPWH7e37aDjFjNgjbdFE4ZgEm",
  "key11": "5SwescLSCMDQKTaCnts2pcw15dx3wvHZbYJrFvFSxaLk5bU15p9eC4ZEMEBhC1tWqGjx4FxzZEVhRL8uAeDFA3No",
  "key12": "3PtsxhHTzYxLrc2grESHNjvGbZS4eunrnzPJjTr1CLs7ZV7Qr3L9wQkWFRmkwXriJ3LnYAW8YKWCA16zBvt1DRZ",
  "key13": "417wNuMQdJ8zZt4DUJkPPMAxMhrxbPQp1vfVQfoFAhdgAA2eD8eLErnz3PnyrcQk41SvYhFHq2z6RySjte7x7CYa",
  "key14": "4e8mmtxnKiKj9smqPQW3uNuLJJCv7KqppJaMn7NNDmWS1z2fGkqPuWXgdfAsU8E5saTm1ewLwEg5vF9oyNg1SXy8",
  "key15": "2CCoMCZooEjwiavTrAPhL2C1mqHcNbpQkJR6drLaY9MNobMnUTzZFQcrSAXGbHY9VMagEvbAY9jBCDTm6mzcgprq",
  "key16": "2vTkwK3uX9RrT7mL6ZvBxWh2eg8rQLXRy2Jy67eGq8z276Kh1bddcWaPMtB5mMPrtkt9f6wuFuUNNScrdqXPg9GA",
  "key17": "3RXWwuYjjmufZfJW6RP9ZXqxUXnCsWSFvQtzQSvTx5reDBDyWsHfzZJtF8toV62tbYuvzAfU2WNrD4vvkGmPw2bU",
  "key18": "3dvN1a9JmM51rsyudt2EaJu6ux1gMZ34Aqr8yi37GApEzvkG6P5GXwbeMcQr91YHRMUgfbarGyeB8fEtVeLFC5XF",
  "key19": "3LdBninC8ns1bFoYDqCukzuFiJeexz22aHybYJgbrGb8CDk5fkEVDMmCfVXHsonRDprtttSt2Gngo38n7LUfJe2B",
  "key20": "5SZuvztXsBAaFZTS1hZzn6TRSAtmqVTxD9hxYQfx6ynBg9vC785VKCdz5gZapfwVnPo8bckupeDYAoZhbdFAhFp4",
  "key21": "3XfctcKjoTkctFpw6KLKGCFpuGo6GULX8d9a2QyLKqomSfrs8Ktn6uVsDefDZgJT4Nw2KCL6WAxpaWVnsJMLHmf7",
  "key22": "5XFJiNC8TXKzWkLtK8rvn36uLk29MPGZESouAW8ckg5EstF17E2F7DePE1FyNxiAWvTjwuP4W3pMYap2CyjcfDwn",
  "key23": "h95KFvEH3EbGMEaU9X9wAsWdiapHCoAcAG4Vy3WhBkhDH2w6JNcEBWGeJDvC3HhrkvfKRakkBBJDvatdPja4Unq",
  "key24": "5sX19GELXpbKDRbT16rYSiRkjG7igsGPH4A4twoYVRM1gCrALtbuz8ATjvf9gSN86ZgtNH6cfyYyfHwnUedQ1Cof",
  "key25": "39DAbBtEGmnBvCgdM6SWgPhu9dcZTJcBJ7GbSejZPprQ7ijVAqc8174HaqLfPEzgEAS7cLqyS8s7gmWmxcSXzoEu",
  "key26": "2bAonkmKGN87kB6Bejm5Fbo2Lm9ofZQSx6NhyhBcj34xpo89DRQSjDjdtCXMoJYjt1KC7MbTk4uagRE53ztdm8jH",
  "key27": "467p4uw86Lk25SgUiZYbnVE4qUrTPyTMqRZFxT1vjuQgHcyDWiejZHwf11jD6d67duffECF6aMbPNRS4jrGH7ua2",
  "key28": "3s4zQUJp3jZudyzG5Eznbzeqhw6fDKS6WvLCAEFx7zcHbaL2epXyL5pytgmiwxp4MCAQ2YdvgBx8Z39m2r1KAQdG",
  "key29": "3ZqTpokfeXBHqosModhBKiEgEcC42UDWAGy4gyW1iUFv2QbjVhjbPJ2hpEU74BMDKVRmEgmZU9cXWnRMDb4eSxWz",
  "key30": "3j7AHmXbAzw3TyxnPaqfm3FbECAMFSiqBPt3uLB2kqppD8Yxgw9dbrcyXFs4XWCczww3n3KmBcn7sVa4fGCBJapi",
  "key31": "5xGC1ni5E4NPbxkSo53A83Ee7qfcafGJy69486qUQFyQ3gRtQg6KErYTrqwh2hfbPV2o4npN56Z9fGTqYLUizXuN",
  "key32": "MhaPNDyPtGrDuyCJMRj2cvATu3tymrbHXUtBRqaukkwxw8g3dxmLWjtXtrQ7Nu9tRxy9WG4mcd881Ypgu4snYmp",
  "key33": "2CDBGk2SLgYPodBxNN2at4FFSnh3vVrPobiLQGxwXGi4XsDxafwwyXnrs83wCCnsxnhE536A5xmEpE7U644qkcRc"
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
