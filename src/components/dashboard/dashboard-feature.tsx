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
    "32As2ZQMExDryGbdteGFcWNSeQzgD6RY5orgu8eeZWvTY98pak4337VgymzS4NZDYfpCtEFot9sBgqKhbo6FHMS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J1TS2dvRaNqUnLj1MCFXhz7FbVky8y7isQUJWtjYyT6iYgtfGA9DHAoTihgTwoo1ai3q3gvsLPnvzs9exxgdXZa",
  "key1": "qGsQ91dyTVHqBTn3aErXQiBgC8VQgBuFxnUha2YJhgBPtoa8AKrTD6T8kpByQR91GMZQe4ooAA7JzsXwS7DU4Ln",
  "key2": "3wDobTdG5RcMFYubFc3xrL8T6wAcneQDZTFEGjG6hpEKCstA3h29iEyedpiiv7LaxV5hZMuVqqYokJn59G3yiAnM",
  "key3": "Tm18ETxRVrPEBfmw2PH9xn1ZAM4QpMH736TTkFEXWZf8D5DvnY5z1GQQhWzd5osaFBvR9q8NR1xiDxVUh2QWn4V",
  "key4": "5jSLQvFxYDsfiiPCF984zM15obWbPxo5qKdZzbisj4Pw7wohY9xZjurNo3zif1TPEjCGiHTr92C6gf4Tbkkn7AKu",
  "key5": "2eCuafd8crskE2iKepBVH9wJRgRYVHT2saUbsU3n92VsujixuHasn4zyqMoakQdNFT88RTnxVvQGTGNm8TLi1XCf",
  "key6": "31QULUXB9X3sKDU3Pnw1woKp8GHU1Vgra8sGNJTnFWsnyfYNXHpBmbHK1Kbf8uSzCV4XQKFjcUaDqmpMJR6HKJ8q",
  "key7": "3CFijV9iYuuyL8oFEw3oagLyjDbDyuxdy27gfgtSpdVXLW7FEpJYMMj47GAapVvoyV2GrFV2WLrk4Ar7v6uAx2KZ",
  "key8": "3vjHmAmMqVhoiLwFNSnhpiaXvWf1KzY9TG4WacE8Li683XTP5xMCUW8TXmetyZ4dNQtbGCBoDHTCdAracmRxW74J",
  "key9": "2ZWbWNdkfhNLLoGPBwh5RYw63XVYLgZujJfy68UvtmwGqBETADotgKwKVFdXb8jmQTmAszPH1cAb8gqp3hS3DN2R",
  "key10": "3Z6LLPBvJWPGQTzS1FHRXuu4b48KDTy5Nqxq52cM8tW8yy7trLfMZYnhwbfNEJ18U6WkjGpQa3pEcnijw611nM5W",
  "key11": "5ygChAH6tAmh8pbaCLLG3EM51GhQLLZbXyy7zv9e7pk1xQLymHegXNwuJ9WZC8Jmo43XYZjzuFvNSUoGVU5Duiau",
  "key12": "2eeKZUiqfbYChVdB2QDzJWxyxwH4sV8XmbR9i6C6GUkkoqr8SnG3qZ9kxJ2Fy4LwraCGytf7dVBbKsAESc5bmYme",
  "key13": "2MtwYy6iaXkBKTjr8N8KEK6r1rLDstvrcpxbooo6q9Rnd5jRH76MKFRqwyw8YMz32wyXh5vwPe7M5N2o4RtCbE4J",
  "key14": "67KKqiDcnpfsy2UpHwhJwunDbd2XpwmxyF1JgAfihygiukJysnZJTFB5DpCnf4ShwkWLY43pmH5k2DsVtjBk66MW",
  "key15": "2AdRG8Eehn5iwDWtHwkmadm4YEDrKiHdk3h4mRCqQkr7Du4fVhB3qQSdP1kcYnxfoc1L4HktgDYnj6tPfauWcrcX",
  "key16": "39dYoTMmT71kVMDNAU1ccuCiz8439a7j4ZH7WJMxB4TT7pP4mvqweVj96VGhK6FeX9jQjMRUNAouHTFPgTcqxXa9",
  "key17": "5fHrYadxqEWg893bn69C6UeMWDnCYmMbiv6KHFPNDVWvtq3xKH46LSo11DiFkVn4jLn798JkDpBS8di81zGR93Y8",
  "key18": "48rybnhk6CihHw5183LYFk6HJY5p7ANohjbCn9dvrYMstUYKhwD6MbTkeTMybd2iNC7UjipYZ2CeyGQN4kFrfXws",
  "key19": "556ne1k4EtUNYNxwKFKPWiBAvUwZemvZwqtMp6CxqMFfWp6wwooE92hgULdj1NFr3Xk8WgmhHo45wuL84Pd8iW6u",
  "key20": "jotrZPVttgPx6jQFb7aRRANSMSaTy7JcXN7nmPvcdvWjM6ruLiLu5g9yHmaQyJrrJ12DwXgt1D4iT6kkEWaTMmr",
  "key21": "3urr8NkiZzowjRSpycMA1DmSwp7sjGKZ1KT22bn4c7yycUTp84ALQ15DTLLMB5QviZ6yyjR6mWkL5gAy72H7YdNV",
  "key22": "36sbKt3jfJSpgFgcWMQstPsmXTyjW3fNGwgPV2xUYvxoUmcjTS7ogBeVzKpaJq3BgqdCZJK9cVqSX1QcZiyRMeYx",
  "key23": "42uWo887BqJVpK7bkduZKtErMNh8B24kTUM7zYrG8MSGoEto1y43qnhpfPqYW48oy2bm5VDNVY1hq59UTXbNwc1t",
  "key24": "4yaSZ739ozGyLri3k1MDVugmrTRT4uJBkcNaF1V1KKqh8GKm5otcY12Ue9rDeJbbQWQF9hgY6SG15auTo7ckGGzX",
  "key25": "4APpfCfdArgwt3vZ2ZyXCvqBPQkJAt6K6hBUcFLBHNSEYkktbMxWYPFjesNVH7HUZBSDjRPEu4WWFbwwuaNp8pBb",
  "key26": "hLRPuLHseUoKFKcfUsMCbiznUBasJAGhiBZH6FA1U8BChg6aRZrWHYoUCXCLfVXdPffdd8iYYoM33da4yhNSpJt",
  "key27": "4SAvEgT7Wv8nUFNCzmSRKYPDND41kJVRBNTa83huJ1jvF2aJJ7DYffPQqvtPw4vM62yriYY2DW8KUP6SJcxDhCDS",
  "key28": "21nS9Kfe8fsjJTv9A4Sp9XnPspgXZW3DVVqVWgC4iG2ULjtVncw9rtWj2mGyMdwmbT2zbZfbnLGXQ62DvhEArcof",
  "key29": "3yzxvE42wp9oCDarhyMtmfY4HZaBSXQyoMrkRZn1Xn5fiGyUVUE45akdtG1unzRp67RRNtohiyi2w69Jy969z8Ht",
  "key30": "53nPy3vothn38t9dCxGPWwN3dvqVb2LkXyWqrjEX2SjWRsr3vAKGCFsSToKfENjgWaM7p8GW51a8TEP6nwSLcKGH",
  "key31": "2oncaYTrbw4UwHgt2oaDBQj83F2j3aQakh5V1JWurHspRSsZC1aqN1WmNurFiwGvgKHXex7QqmERUievT98p3Q33",
  "key32": "59D1c4ZLdFdJFYd65XjS2zeJA3Sdf9RRTv9YpNkdrPDE4EYRSgRQZW1eGRgoGiPCAAXSsLbXmRjS7EVh65eQKLT7",
  "key33": "3bEW1G9mWj6umizmdgeqsLURVcQNwF6tCq9UuirPpyLvC4j3UJjqXMhySksmY8XTuumKC5oXfcZsa8C4JTXiTiAH",
  "key34": "52ZgG4KcPttoDQ53rm6SrsYejBB2mSnhZ8vmLVwJYX6tXYAXBKoTcvkVE59C1YpxRz5viEJpU6EkqMt74r7Dqs9U",
  "key35": "4dmdE5LABsjJBQgJq32CZrNMYorNjGtCCSyL8EKUtUhCZsk5bttb5WfiXjGrMgEkHF1Fd3cckxCDtJGkqTDATwGc",
  "key36": "5n3w2oEuzStBT8vqtUu36wRen8nMqCtBu5PHm2GN2c9LGnxNsu4WC2quMCJ4VvQsut59Kd2U3urAtATTkF3qCZWv",
  "key37": "3TDx1aEsEbDNjRmS9MPSf2i6KUm4ZLDAB2euw61g5XFSqCWRdH32iF4KrfP43KdvN3JJN9z9rNiaoAtMNKqB7xEw",
  "key38": "3k2YVNM4TgVwb9R7WahktQuXjkeB1whS72TFzaxqR9E9iXvW69pPe2MaDcHWToTErsXs4tY7spYUVhhgYtHSniJr",
  "key39": "BmG97amUUL3rS2CTRhQ8LVQJAzgeKw4nQshphtPRgzgQubBoU9qUY4dt3WCBjL4LgLz2JUZMuz95bzjFdLe3NDj",
  "key40": "hX2P3r1LvP6KLJRj57murYdmhLDChrqAw9YbqttJUeAZBVAy7xwnuGo76ffm9XxG8s86424A1WBthJMEE9WXgBc",
  "key41": "3wZhH5h94N1BgGGgxNDnyoPeE6amL3kKZuNBxH2uDByQ78FJhccXEhYRMUroPRcHdjAjJLV4zbYQXroCkiYXXMCF"
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
