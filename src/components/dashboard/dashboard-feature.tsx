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
    "3J1s81yypNq42DorQM2FdxMdQUMo8XX6pE9Xb9uRvPZ3nWSv4ueCeX1x5QUwqQL6nspAiS95djgyH384WpEHozEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sZeoT6YMSF3My74wbBVKoV4wsKFKuGn4DmpT3e6VwA8B2Ba9ipoUm7dDdiz1ZNafS3dQxGvAgUQ4STfZZBaqVoS",
  "key1": "awcvDYNZEXUqYE6DMzAEhMyqkWQs27cxypvZ9SoAUE5zC7EdStuwZzZywQonTaZWhGoErRab2vCba1WHPvQ2Fsd",
  "key2": "2bxA2hzh3foZZWtvx411wPtwERpHnvribyF8zAzKG6dpHhntHF8JdVsb4vo9ocuFDoKgaCVCojGNguoCUn6obqvQ",
  "key3": "4hnyceyqfyPYZQc7ooEAvmvpxzZqfEpfte5EEvFmtRbKHFA6sAqYMdZQpPcn2j9ExDnTuV6ecKFcqUXyDg3gx9BA",
  "key4": "64RTWBKXJozBJJVbMEiXZnUBRbRSt2Znj4CR67bxjmqxqK5DxXJkk9o9VHRBZAL89eaa1qCPNA2uQxtRZvVJYWu1",
  "key5": "5LYyAmMV2YieJJFHVBUi3HgZq5BikCDuCfyZYoaWkbsyZG6DetgukA92shyfcTmiJ2jgEDL1QFo9Yx9jQUWjpxdj",
  "key6": "6M9BizV7Rs9eHaPDdGXavTzsTM98NNpTM4oFa2kdrRHsjCjY7jGAGHpp3b2Vx9kRrPnyD5LtntiHYumNvxdpRuz",
  "key7": "51ox9HpofXJzAh6AZmxUWNUJaKTSQNQXzHKRSi2nnsjSXRiqRYLoybrPP8BxfKLwHJf5qLQaL49nky1fiZDfHQ3G",
  "key8": "47628LvN6bUBMKUVStNNK2mnbBc2VndtTUG7vjPypgt5w7JRmrEU8EdGgaPkkekovtgdQiFzAkGk1UTsPvvLae56",
  "key9": "2bKSG67dygXQJTe3cwTp4UewoLh9fr8k7AzZSu38udcL1BHtV63q7csayDtGmLMbWuv7yXr7ZfJWNcgVuuLkQYAW",
  "key10": "27jWpZQAW6S5ta9dG9qsPnRa1v72tF7XnCFdj4nBE7TY1sv855Fpg1euj6ujcqaQ8pQUh9BMKVE3z1KZVr23Sj9z",
  "key11": "2RfBj1BMzbXm52D372JCdh4V4hv5xRKMcBkbgRRG9wJuwVg958BJUGwsrffRNFg8Wo3oBP3KWnG3dG8KpxYh8Wdv",
  "key12": "2NqE17CPwekmvghdo1WY2bw6R94ZfinUiYVSNJZCmAHWcoHB3MXZ9FiZ2oL5F8JvrbXbreGxVLDZ5wyd8nwmt9Vg",
  "key13": "sRD3iYa8W6SBTcrbDeHs6QRFXwcRF8WjW6wPbXzfRZnQ97qnRqNERgWMdXVhK3XbhNkpJYQVtZ7JGxfhdg9iCDK",
  "key14": "4rQRrZjBqi77zkQZLR9fs8g99xNupNUey6N1ZqBvujfixTWU8QGyXQF42F9mN95PwZed9rfiPUSuEdNNBofL98Wp",
  "key15": "5JdG9A2ck2gBdLgXoLn9Zhh4kuwqZvrrjPuaWKtkbSiUzEn5a82HbK9JAAjT1n7DkTsaNsWh5tkQzfBuTXA25pBB",
  "key16": "5Quii3mvThaJrpu7MrsYVt88bEgoK7jKvfkpDiSUV31fbsojnpwGxTkX5bpFbs9kLFo2uJUvZH1ABZLUKqHQpUhC",
  "key17": "5UtgZEvywtJrY6oskzzJo1g6s8cNzGEpXVpAyTkd5h3JmNySFdmEXxwEMcBDqUsRYMkV1aPmaJKJiHCBXaoB48YM",
  "key18": "4PiKexMBp5xe66cnGGkt1dFnKwyJhbnSavYCgz4QiU1VXv7MdQRs3pF2kn7p5ihNuwG2U1FutA8ev2R1N6jtTQB3",
  "key19": "5E78GR9uREqhh2GkLxkWiRshN7BdfSzi9cQ6DdeScRVQiUCGk2ARkkfkjVZrmeYuhYtGNBmuaBXc9ZuxxXiYxDb6",
  "key20": "4s2h9XU6FEngSZpUFouBqr5rCp93kXQna6nGoewm1EVckZpLutDv33NesB3BAEb3T6A4qox6V4pWuvtQaM1yTziV",
  "key21": "2rxrQxHXiRwro1c4EEbdc5WHzcz7mh179Cn3HrV6iFDXBzbSbxVNbXtNFq7SgcSWsXxxTv3ikq3jUAU6fQ8iMGrK",
  "key22": "2qfthQQnLqkki7wxhWS5QiSYs3AEuFikpYq8K1gn7tqLywhzqgBVagA668fGBuTGNiNLscD2Dt1uXBHBRgNsC3ar",
  "key23": "5ccdc1ZXfCNxfdbGcvzKf4xLiEyLhEkr27rLtesLQGAKG5za2eZo8DXeBbib8Kr8JTqXUfg5os6AvYqwStUnvHzm",
  "key24": "5gZovvVSW8tAc6jMVKoSzQZDfmKBJqfipftVsA9anZBj5xsNguEiob5uad3pCtsZFpzUu3QfvyFEWLFJ8LYCX8LE",
  "key25": "4RiFiDzoe8RHDBEVE13AbsrtN45ALinmokk13twxw14yYa3XCVTtGcBsRimyZfpttxz9VwbjrExeVwGXem8KEJu8",
  "key26": "jBm6K2zyqBd26r5ZeztwP34VGrEfQKziZcEcpbtoY6q3vzA2MzoLH3ucH2E7nBFHUstyXXRx15zJymhs6PJ9yHC",
  "key27": "5TqcueCjYUE4DfzkmVKGfF4QTcwz8mPs4Dm9fKWdHpqiYicvoKSbezer5f2b5K44EBMzywhj9eNCknbfhAd2vbpq",
  "key28": "2w3aWmjhWDxeWnmS8Sbi39cyqPhd31MWyuHsSG4N3w5F3MR9RYPjcEWEMuHGm7K176eQHjZZwTdHeBettYpzcmBg",
  "key29": "4Hi8AeBdQ9MNPzR7rEDiW71AJ1NNzDyJyyMDjHRDdLQQ1J5JsG6iF6Fj5kpiXcAEoXcViuXaDWJ7Z8Q64y7gtrTj",
  "key30": "3UUTJYhFo2HcNmGj8LNAF9HSpvUu4HTv8qzUMd7rGvLDEEhYdqWws5zM246dXJt3YZPB54aomfSvGLtbA6kx8Tys",
  "key31": "3rcbvncsR2MSzyGstRxhVer8KRngpJJDm3L2UACFHJNkJZ4ujaomoX7y7PmygorSnGUiKKPmNhCekZtq5A3bmvjM",
  "key32": "65niyJVMBswc3XNUdGgVGpSq97eqoisQZjz31yYPAVLZUbXLkJPFo1NJjs1LMqqZT1MvhxUFe2JpTB6EapWfCTxN",
  "key33": "43VaKz3o4xQqGjWaMSWz336fJqVT8F3gun6NH7gxjKBn2GnZ9RpeSkuHGaQ45V7HdnV1gY6FiJjQ2PEDVBkVFV7Q",
  "key34": "5dtS81PMf2nVYzeDxvs77QQYxgP6TzfJ2hXQ1RqceUXDrqW9GuB2ymFxgdCCnTMcWcrYkSHu9Ro6cPR176Sisnrm",
  "key35": "26FnXJ3weFry42NuSCFqoZkzqP8pGZyQRMU3CmwrPPzr4YbmmjFoVyzbr86uKfXpAdgYiq94mchhxpB5Hr3AxR6x",
  "key36": "5QPMPSBEanCPhcMzQ9RAXzd85gPSaaDa2NWioiCkefD2kN2ys5GVY6a83thfP4nLnBSxqwHcRahUAKrveEc2HnWN",
  "key37": "2SUEJLeXEE74bJ6T7Kdk4dVGz6Rtf86fRs7WXHTPkoi1NatnBcFwgHSvoUe7uD85qq2aqGG4GrmMq1FeVRR5WMY5",
  "key38": "5sNAL6zCiKyuHpVigTFWsRvCAdRQ4nD55vFuWFzgHGkCTijEJEqH7C8QEubeWBTK1QSWFNgm3HsXza9phXy1w435",
  "key39": "4qWTeGigPHzKj6e7nSKrHWFHtxZxCtnJFFZujLdtmkMmzW5aqpXmQLe2PCB8DYUjmvXmAe9AvUDCrfrgs8PkyDFn"
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
