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
    "5DCoCEPoKSocR6XMY3vTY4AhWxxoMPdeasLMFQaRHyrJWY9w2XzzPk1WNLBHt5RHnrBtnviVfeAM1eWeCoru6bi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xztTyvQLCTEMgSAXsWCvf9JxkX1fLPck73zGMHq5Y6qP3efZwp75Q3zRfcmqPwspKq6XQkLcB7iGcmpuEHKHBKy",
  "key1": "64MjaUbAcBF6EP4JPXGE1uRyErRZ3mvTbSqG3hMEEtBK34QodMJSzjYaEqX8hT4Jp7gkWzE21N8CbKVqWfmHSRZz",
  "key2": "5SGqHHs2M7XnRgtS2VkhBoYGpe5qqu3Mi86VDkgRhKuzMHeZaALFBqVpYkJyge2u1DwUZc5cbDPSCDFp6aJnG677",
  "key3": "5rbK8hDExtoyVDpTd3ZLKZGhujgvoeqWkLzQiTbeYiCJZgWqE4eJdwCwAnXs4GveE8HRJEgpj9sfYkraRK5578px",
  "key4": "3Woj4enPz9yGMGS96JyajXqpkKTYQge2mcoyEG6weGLPZBL77sDqiB1zRjTFFrF3ahEUmrJmyWtNr4yBE7un8YDx",
  "key5": "2QYgfhvXvM1yGf3vm6VPGmra6UoQv3ygdYTYyNdivtceCVgDzFRXiqXuR2ma1q8zrkhG6JQksYeN596rHWySDGhq",
  "key6": "2Trw4WCS7RLcnr5aRGSzWQfBPDe5NbqdVHGMKfegUptdwZeqcAFmpVhvFKFVDvMfsGbqURiB535TWaTcWtGmBEoz",
  "key7": "2Q5DDQDFDJGR5CjifZBgQuoCi8ioN4ShTkz3wQxjgtcrpG7aCfrWywSSaYVK4eNijH6janqMcgt8PjuFbkjC1J1x",
  "key8": "4kFLAjXP8wjm4fXcQZ51jMmctsK2ybgTWqPoqxvyYK5Zwr4NUhRcvY28tSdWtQxfCuexRV98NZzG7iRGe9ydPuG6",
  "key9": "5q5YueCuPsCu6vp7uLKTtu8JUZPwk8sAS4Y9kWLt3skt8gNE7b5fTFwQ8km3DNKuU7YZZwk6zL1shDYuzZa8cX7n",
  "key10": "huDWseeiKAD14Uj7ZihNzjCVZGW95Bkz6ofL9edgU8qEFj46BrtTsw22VwcvPVMfgKu19ywkHAAryGvbmw4W4Eh",
  "key11": "3vebLaQSJ2cysjUdoFXbqdqVt26KHifmzXtSPVo4pbjWjhutZW2rPhNibiGDRmLqJY6Rw4kzSBa4ZCUQB2DScjD7",
  "key12": "39FCgXdT8N4ZzURn8G95Xj5sCZkvERZLcC1oTEkiojYzY9LHKncxi9vjz1v8cNeyFBdSrdAYDbTzF6wk3nwVqxad",
  "key13": "pPuekxD52AYxn3y548dZ5TH3vAHYbsgNTiyUy1d8Qv41mty8zf6oHtTiMftg2XwfWg6m86YkB1tvzEQaoeGiswM",
  "key14": "22Db8kFKHJstgK7oZBn751GCEFz5vXcKCR8Xuqi39Jbvey26y25mPKjGHpWeQg4uekj9HRb1s1eCFZPGsE7nLvuf",
  "key15": "5jG1Lb5owCa36q8YjZbByKCV5p5284UYXU1jMC3LEQoeUA63iG12QRd39jMTmVRT4hWEL3hBD9M3aAztumxMNgiv",
  "key16": "26e6LunNzRfaGprEwjgPGVZ6gkAEK2VU2y3aaD4C2dAh74hcNm7Ycp2v3pjLgAd4xwBu46Y1cLnwRw8bzNXqxsqz",
  "key17": "3zrvowVmvRqnNQx64SVv6prcuNhT3Pskb38X9qY2NkbvrEhtWDjYVcd3pK5EcQXZvhUQqa49x8AenG9WRC7WRr2H",
  "key18": "5PwsjmUBag6552hXexuYDScWCwpksQvhzEomaU554ZE1FP8ReVCML1effj56VNf3bNN8rWECBWgWKVVddHkQCZVb",
  "key19": "4jBooJjqotvkMThDjavRKPcNiEMEiauenSdCdryhg5Mz8VXADhvJAfaGWZpysKj8neVEcQZUpv9sixFq1EZidc2p",
  "key20": "dvZHbiNga81iUQnjUPA6gBfpZMMbeSC4w3MfeX83suGoEPSmWKSk4YHyEfoqjGMvptgGh8QntMqJ5V1zJvGPVPM",
  "key21": "67eTyd277vepJjbVKuEt2Y8npTVDa93S8reA3iamA3WwFJYGcGdhvMSF8ytnM1Jj5ib1zZHvyEcHwrL76EgZwVBD",
  "key22": "3NR1f6wPYCB9JQm7QxwSxr3ndFHVnAm4rFnwJJStL3X9QmgAWNGjkgppHeaf1K4PiqDs47K5BjW24kjqAJc7fq83",
  "key23": "Jy1Yg1Lpe2ngPiNWxjbiYKraEV733jABXNYLPVBgrngGyH6HjT9egYQiGfeN5EZXpXJSAF6NAejS6EvTujhyzCf",
  "key24": "4B2PR6uYSH3WCCk2JaEDxcxpoBBTbGNLSDMdKTPx8u27q6y7WfcpXQ53npXERgfq3ugoErrKVq2t6RZF1SUtWJPC",
  "key25": "5YfBXhn89FYeMretnhuteoGzSmZ2BK4bUXdMLWVTcQAa5NqHB1hizwqnymwm8Jq3pLbYtWTdoVHMT5pAPrjtQ7Zj",
  "key26": "35d2vGNsy89bDxkKDcLy8auBjeMQWsTNwNhqudvTW2DfJvqhcgtkneHwjh4v8nXLmyaAywSk1TFHDH6jYkba8JKN",
  "key27": "5GdcUYGbiMuU86YLkVTkHHz8JLAzhHrAan8VZGstsKJ1zkxdN2xPYcCX27BYni2HewftBGj31SJhUwXQCPNexq21",
  "key28": "2kPyiFHPjWg1HHUjVGBn5GfmXEjxNVM376cJjyyvQLH1rQCVQpB9KYVzzK4Xy5ePQF6jBrMGh3gTwcNVdyrvrSp1",
  "key29": "3iSEh3sVetYkGZGsdB9mjWYn8E35uMeYmAfFp2evxhhTBvmsnMHHxNMPxziktB8E9Ee2R9HFhKYFcFDv3DBZbAkF",
  "key30": "3tGGoLMTZq9vq26SRh4c9AQ5YU4DexKFmP3kqtZWNwzQJkXeKB87Zihjcf8RJY8Vz14csKFYqL2tgDrWzwKV8DuR",
  "key31": "457Z3x7h8G8MFxRpQ2d3A6kSKd9JX2gUj75D7tnHAnPKbohtZtnRrAp3ztRxs4fLNPrkBstExzYfDHDRUooTyrw2",
  "key32": "4MkHRLessgkU85k6dpj7xz3hkk1kHb1V9qyzzLAY3sgL1JiQVhAE5v1cbTMnamxS4hdFaPmuRvWtGCVFvBeRXYzz",
  "key33": "3zXKH2iEknsKvYGwM3T6ppsSzSG2XsDyUhJnv2x2Vy6goNdwkBNp3yCW3r3rnpB4w2xctjr8PmeWanaadCFTPRz7",
  "key34": "2nujePVqfd1WXhtsqFDe3esZkXaw5wuK8pNVvM4uXzgps1X66QZHwjTubScNxD2PGD3TNmZSEhWW81caDA8vhNhm",
  "key35": "438Kj95T5Y4aj1PCtvXdRXudvg7MVVvTHM3Jny9c9Pe1GNF5CBcNazcxSXLGsbJwWWGhq8vKJp1hCxjsr9hZY187",
  "key36": "bFetFyJ8HFwmheAiePXf2LMDky8PpU8iihdYDNqWVoctGqSPT5ntZBkYJGbZvdRhbjQBJ3J4vTufhDiQozkdiVj",
  "key37": "4EQRqEHST9MfeXshoa8itzTzDLvuae7fTaocbZCHeB5q29xF27SWssuFxdmJBbw4cGxVUBKbtQFeExSZMkMczrJt",
  "key38": "4DvGnwuKudyJ8sE4GbBfRBHkw4rjjYfdXEwNUUdVoKTH8s7E1ALcHHSgU7UD4ZnEy5d9ZMmN5Wwcpdd3LFShqotK",
  "key39": "5uK7xg8E1Gjbdw3cSwcVVntx6gpu7wbUr9smh7E9nXCubwfdd245q9LYPLRgqjGzUdL7NEFhaNZhFhMfkm33C2so",
  "key40": "2q4KMMckBeV3sDWSZXaqGzE28uMUTrzh8fisT6QtBYud7cYeTZfapmYQdMLPAJoK1mqJLn81PAfnqUxV8randRan",
  "key41": "3wpp17hefocdeqYBq7jYbDKUup69etoL6mmA9K4LUgBTRJAyKiKNfmsvVvTEuq7QQSwyW1xRDHNJQTBbK4XEZ1An",
  "key42": "5QNfAsXvRrtCdWhL3iDU5fGujqfaawF28wwZxYT5MbASZ2sbcp6HUBwjeax2dTiQ8khLyRWXMPB5xXuesJ5ChTzb",
  "key43": "3WUQYhZYgQvRkYALtbjRxDN9yEUJ75w8zoeTx63uqCgdr72b3ofvQCcBGuSUXXHd7UKyrwDwwbxJGHJvdutUvVJC",
  "key44": "4YehCuGHtmvMp5wUu2K3S9VSiAG4kYSj2AEzkd6CTAG8asZ9vuNiBiEZ7StEbVXPaWvzKHm5adaMoatAS1PJdF3p",
  "key45": "3CZm14fVyB6a2WHyo5GmrFKfwRdCwuVV2MALjFjwcCp2dd5Gpq139maLSGMroVn8a5aqkYEV8vtsvizzkrKm2UCM",
  "key46": "5bNZAxNuMLGox99duD5SgL6PoXrSnMEDuRRWjfXf26MxKiziD7FKgBdKciKEUzxZnLVmCuJtZWxHARHZBb9CmdUn",
  "key47": "4kfhayi6yGrnyXkmNdaJCk8CZeNncBpLpbGPdUXphSWXTKWm9e2xv5M7QHkK4prXEwqSAbcZEML7kYvbBFWDayKv",
  "key48": "1X21mpvWRND2ZL3JJyUzZw83uYbg4TfdYWSg7Rfhwa3USjruxioRq6ddNgMNVe7AjXC8RLb8b1cQJVp73rzAY8P"
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
