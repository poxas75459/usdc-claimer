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
    "2BXqE6nj7pcZnRFba9g4V8YUYFM4EF33nbyVNJdTwtgKV3kLmRzJEtM1yuFxF4SgRUczZVr7AMewU9uJ3rgcaNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BTBZSU4fdtvBD9DYheet2hoWH8PpYkjVVdeoikdXbrar8yeyjUPsFH1pupXTFzYEzTsTk4EJti2avHHkyhNmQUp",
  "key1": "2RakjbvwuCFRmheEGtpt1tgobAYHQL5vdzVxZscq2RLDYaG9KP7bzC1Cg1BNF3KekiNAZKyn9kspJ4FamM1Ppeau",
  "key2": "26NntzovJvAEH8eYwp9zJqYWhjkrLcMN5NYNUeEes44mR4KXP6KYzUvXhoJNVzfKt6Cvf16HEcVXtaW5SXnECzhi",
  "key3": "3dhRDkrhmrDXrcaaNoptoVwbcDaxxybfTkGJQ7Qy3skdQeEj5LhHTuy1AJdQeWzRRkKQ5Y5y5L4uYy9RWreVNie4",
  "key4": "4abZTJ79rXKV4CmfG4u4RGcWqDKxAr4btgdgGM4dDQYX1oLdTN2mUmhpBchRd1NmbCfexyKrViibTowQSfu6vj6v",
  "key5": "heuk3LQNBbZg5fa3QP5WiuseNK4XUWrZpsxtzuLN6wLQbryRm4jE4nf2FSKiPaNdTohpQRkc9Tw87YQwca5ZYWW",
  "key6": "zFohrnwucFszcpJhqR2fiiB4WCbDEfLaJha2c3hGBHkKRdY4uspyYWXobxxQzWtQF3eLCLDnPDM4EWivjAhY8xT",
  "key7": "5hpkyuRH9viVaENxZjWGTRuuCLvxwVc4JuCiAUf4YQwfEKXcAgf4BFydEZW5kL7ffb5sKxW39ZS1SLAmc3AYqAVa",
  "key8": "LbnVwoxPEACp6hR2XgwA4ck9JhCBno3HHZ4JCphemMnAjsXRM1pZbDjVDdGv4fqRAjwZUr8kmZ4WBnzL6A88i3b",
  "key9": "3TGXzWDKdYtoeayXJ6Jc9KXdcRbYCUgYVjuMZQw88YVnnSUwn4hcbtqFuSShJrMa7EgYce58wknJjsngooYfzZ6d",
  "key10": "2LUtCJuVVVxGKykttDeopSCBDvNkvFSeRiqfMp2cQPfDbzNMzjYhEAbUQvrnN7q1ZFoBZfRGN8KJ5Q8frJvZHXo6",
  "key11": "2vX9rnWLoi1D3HHoDynuf7dGKrPWuTFsnLRfGw8PDKLWmwz7DsQW2VgzaaxG5NecwTrpaHAErvxendGKgZnV6XRc",
  "key12": "4zL8mkVN93rwYPKCZpHmVucyHrxVGRxUoLay8W1TRrnPveNNA4PRtt7oXvBjj4rFBMt2oH9Gp7fLKA9ptietJjXR",
  "key13": "2mkKUhDoMwFsYfs8ugiQyhiFWoTRVbLqmPaYrwMFJTqhoLMSSfLSaUjeZ6WsVPpCopsbbKYziz1BzHtNP29GRDHC",
  "key14": "38bnfovyzaW1FHTzUmh7staUxHnoeJyi1ZuaFtx4YoA7K5VpCUZWbS23F382uz3vVhuXvWAcFJeVwTSo5zYnbYD7",
  "key15": "4k6vJGRpCA2pFZreev7MW3zZXD7uPxW6S6m6mS1BWr2cMTKwcritMYvrCjPiiePV8ingLfVdxjF8iKa24BcnzhWJ",
  "key16": "5Z7EQdJzyorNhUhyWJeeDctcYrySEMbUyEHhuVgdHtDkB2MTWvXhcaXt9kpfsE1vHwHjr9sYfbJXvNgrvYoChiqx",
  "key17": "2muttX8KzoaVpPWUdQ7iDV6Ru9LWBkn1wckSckbMFWiAcgxsizWdPfMYYWosLr9c1s8AZxyVuN18tpUdEhHEs14g",
  "key18": "4FLCkwyeqqWMdJjMCq9WJSweVNRLzQhi9sfdxxvs71wqnwZfGjfAocDcAVbju2KnsvHww415mAMBGmxfBTimcKif",
  "key19": "4mHY7UbiASGuUWf4gRYqG9rxSYK9TG22GGX7Awy8wp5JqTPqWNk7Mk4bWhak8wjpF97aiiqWtUzed1AWkWWocXok",
  "key20": "kTLNaci91PfDpcB7eEMej3KwMJWxvEZG9YwwPPfHaDyVKviiocqGjreQUDzqEKSbD4KFMheeetAg7LPMHmR6itZ",
  "key21": "3g4XMhk6DpiuHRV2S5XpsKgZGCwPKMmcUTJCb8EzEznD47A9UYS3gsV4JNFLPkiCckVsk78QSN3tDgwCezfeXh2f",
  "key22": "CxRSQuJzgxQ8rX1LrcyEdrxdbwxfTVdoBrh1DSgCDdodBKFMyzCDeXE822HwmrK1b3nvJmq5NxhHrFdbVzZenWg",
  "key23": "w99xgDqugHZtm3fmHKwBtK8iSdeF1z1zs6hBAbZvUdQ2Gh42xRvqSohKJmKZC8CMFA9NMiMUHdvi3LcCVgwk78i",
  "key24": "4fpoQoxhibGJ4arEqLVHtXJyUtuaGdn5Ca2Go56RmdWom4RFfnNbc7FEZuozaXbTzkTfyBZXNemNYZXvkFMqEVP4",
  "key25": "Jss2M6dgxzoribujLdZqiSAJ13CEpmEoRcF1JrwFrnUEcetK34mn2pqprGtLcZR67Pb15HeAhTgDnRSnhCaSqPq",
  "key26": "7awsnLeGkN3XvwguNP9C8jsfcYEzyyTcSTDyxhCJ8bB6CkcBiV7jbAuTfEkba1PDX8V3edi1nJVyioHhnPk39tc",
  "key27": "4eWoykKvRJ1AV8g4JPZBjz7FbuMXCrfhbf7PQX81jyh671MNwaVGV6RrzZfTAUq7qvd92XmbfNLjnCAmq4xEUmWk",
  "key28": "2USkt9mnaHv8G7AJo131b1eRjwL2oihY5QkUoFhEQUe8BMFNXgHyabQbVkphTb9Mea1wFpMYMtdJdm68hXMFWuwQ",
  "key29": "sz5TEiZvsuV5mJUAEK3aowWa91sFkSjRdrEZ5tiLt5gfj7iydSPkmFp6vPFWmHxTAV1PT4CvuPy4wzjAT1PfsyK",
  "key30": "2JxJVxuo44Z8Up6L4Pvwrc1s1z5ZKn9uwUc51BBSHLnQFu9v4QQWLEguJTqVoySj1DPKpsiAA2YG86Vq3rJ1jC6L",
  "key31": "2FHkHmW7yd8xJs1mFWXvoU4Xf3pBkKVHpwVibahZCByn8cwbCmqLPg5VyQEkinxf5uvgGkD1YvmxzQRXDJ8nNe6R",
  "key32": "5fbtzhvCdQdZnv7R9y4GLpJB1DxB26RUiaDw4pvaPBXGxKuStt7eVkNXp9juL2B6aSmeFCicFvLkXQ4jRD1tBAVV",
  "key33": "44y3opXpRqqD2SdMbYhEnfzrfq8ngTvirRVrUZ2FDPduskjPU7CUwMCUxWJ5AaEy3BFzwgYGsmxVvqoVqTWQTe8H",
  "key34": "eHm4s84zNk2gp2VeoxGsq5kzkGmDQxomMdhUDJHd4xW3k8hMKwDqff46261YqutQ3gZULVngmk6YUYHHdDsSR2U",
  "key35": "5MaCJhKMvuYmgKzJDsroRh3ghpRkNPbo2g9AdBmZYAKpEVyzz99CHxJveEHQ4m84VDVpdqwMwByvKmN61pasAG44",
  "key36": "3ZK2S7VmGjCPtKf1v6AkhSmRQofmk2SbpPxAkF96PjLhwdcWcnn9jxZKBESXH3xGrL8q82kt7BswQvkGh8EMrhNj",
  "key37": "58s6x1sSA4WktpZKiNBc1bBueTrKADg8nnGrnBKA8ooYokjttn2swrQfMUQVNTrdt8bCsS8K4RwcAuSLEZRp2rUa",
  "key38": "3w92eZxaiqcf1W1CAJXeTVh6H4W6wZAmyKWmt7Q8MRpZd1bbJS8Nawkj5WQ6ngZEPvBn139KZvtLB1CzxEuAMDCw",
  "key39": "A9vdJdGrgmYjAYiobXvSPctH6zEDmhLYgyvkHFNAHbETeSjhURxMC7SsADSnyNiYfvX4HbcswVRXukbC2z5GtPr",
  "key40": "M77ZVDs9vs7zAmvDgTSpo2vojHa9ocHqJxJzsUpkL1ea6SpPEhsRiiu7mj3M4Fp1ABCbk3otEG1bqUM1HbTko1C",
  "key41": "v2b1ve5DPNogEg7MqzzgiTHuqY5RvJbT4z1MxXfv9tFzqerDcvRVAU87op2DYVSfqJfcY3k8Kxs5xWB824abUst",
  "key42": "5JcNrY9Re5xtM5BAqnHjHWQHVRfapje1LEaWQwGfHtMpm7jWxB4HS6BBZV7kAcAJBMzsUruAHh8jeAhwUiKcXJMn",
  "key43": "4mqSbkUAVxWqnEHSpe1BZRe3qdRQ5SzCmjYn77WsUFhkt6JvpDghL3i6JEWo9yLuWAZ6PsAC2tLJskz8Ugo1Y9tJ"
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
