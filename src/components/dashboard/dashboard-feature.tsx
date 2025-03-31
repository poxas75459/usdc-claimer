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
    "3JWsGmC2YdDhxwSHxuevD6eMiUBV536h6d35vZSZfeTAzW6w2dHgQRUupReeLT2v7BrSveL6drN54Y4kUHBDttaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JcLJuZJzHsu1Hd1xkpmykU8cdL5ZUWjgVmVCBUWEHCjd1K7vrj8Y2SfJbqcWMSNP2V2ApbwX9rKfmuNorYAHP1T",
  "key1": "4S3pQuJDHGYPEdtZMaTsT2oq7kocCYegKBFWwdj2zgRfdRrs9UbmiwTSZDPqCBNCWXGQLZeTVSNv9jhzVGEn9ULa",
  "key2": "sTBkqobAVQ7ADV2CGeP4cQW6mSALfX8NXnAPMHA4LuHBP8DbmbS9VpUsLTD6DPgSmiCxkVCHXmzN2GW4U7kvuai",
  "key3": "gg5kG6q5MB85yF37VxyCdVRFk9eeMuWBtad6iK9kT4nRw4eWsAHc3WQoeqd2NpwSANC5xC2MuL4K7yP4toACWu8",
  "key4": "2dWHnCC4ALG5uLRzHZ96e2MXjpUY5BcqgBn7ga87mxVkBHNXJ5G3hLoVMRMWRFKDBZjpFBh7W8oasiBcPJsrrtT6",
  "key5": "64ScMgc9Kwd69NTkWzQvLABa4SohdG9d4TU9pCrRNnYPcjavsVZgPPH1a656KPJq9LRfaUVri6FHAscSyYTziKzr",
  "key6": "4irfHNtt4DZ3J5uwPf4UfUTjzgL2JYUizvw9xNJpziFDxFGYrAKdJcfQKEQxqCyTFy1y8ZdGcxaSUEWx55kjF9N5",
  "key7": "4EYS14hdT2qsBtvt4aGMzkmcD7gT33WcUsSsTNstnYvgX7TS37McvrWQRWadq5hgUZXRaF9oJCaRGkMQ7d73Rycw",
  "key8": "5zLn9kBLEFZHtSYg6tjLgKCPchfedxcSPr9uM4WKaBwqjNutonaNcuvcS1YH3wjxy8sZrYHim16orA4wjr1aUT5U",
  "key9": "LejwQxVzULLhTMts3WHNunKk8E5Phd6ug9U6XFYXbwrWtMCQaPMapNGHja7ztMKCXUCtZmbbMnnhohUMbroLMiV",
  "key10": "2Qi8TSQGSyLrRfT6ENuQHzoX6VCCcuWdyxZGXsFLo1jkbbXWrURg1oAUqGMd6pCWpA4hVqMQg3RX83E9W2RTznEL",
  "key11": "5t4o2U6SXFoT75jUtz5sKxdPpRX9itvH2Ayx12ctRipkth6S3LG6uhzNsCgu98A3UXmhfVZBGtYY45wFw2PfVSgr",
  "key12": "4YaxH5NnfSkWog2cB8eQpg8d4BuBaVbAoqWzUbbZtUNbxKMPWyaMYpvNJN3k9preYjscTjS7FHzMeJ7ny9qqscjS",
  "key13": "3v9peQqeS6RH8TEG4CRxxtpESAftGXJurh26wc7KpJSNbb8XgRDfdxdtW6nNk9azkCToB7zwXKnaCXk7TBokS6Nb",
  "key14": "2SkBHq58UakY1h2wJxM1cSRMMczWoGyDWkmJKbCoxjBKY33W7hmBt4GuFvg3J2LVNs3dHEMUYcK685XgLLmxuCZS",
  "key15": "3aMs5zuwCYnGtGGxuUUTLqdg6hvXHYu3MN1QgMofqomu7pqYkjV2zb2dTTLpyy4j2xvSkUTkUh6prVmatcKgaAWm",
  "key16": "2jC9Cp9byzUhu8539Ei1zRXmMk5hj7hVDnGqdypqrxb5MMutSZgctGrfx9tVLeNX1KSXgNCa8pWWGx7jdvZnUFna",
  "key17": "2t49oi4zV8KV1jmZmJEzVHct6fksmmi963iCsAp5Wu7nmBY24W3YhFEEPNrBZuFNWd1D6UZY8kTk9CBQXcbW2ip2",
  "key18": "2ndBGebm4sKDE4UdRtumzNJJXyaRwSASwyxgDdpUrxCF8ktHjRbzzvoNsiRXSgBTdxXzsrz5jJpCYWGBG5ADSFjr",
  "key19": "9HYVZCRYKJtPz7xAP2548xx6WMizvhdy93uTUDzonogcGDMe51DY8xRGSoZXR2Do9ETfPmQ2DxDrkvBd1DTQkJo",
  "key20": "JmcDpWZbt4VPtBePwtU2Sc7e7D1J9ezkyYmCJYZSq1H2fpjKNt9smEFDoQQFXB4hcpwXmHmACMocuq1EdsqwVaW",
  "key21": "2iJHs31HzpHGAXHh2vPpXWJooASFp1YNZP1C39eQ24ZfBqiTjtGYwqCdJumJX9XqXjdzeUyQVqqJZ5eYQWLUPJUi",
  "key22": "66skjcGqkvKtqTsH9VP9PQGtVof1ruFnDwRvWHvEjCHba5zdUvXc1JV7CyZhMoqEootne5kwnh8rRk5RXHFi7WdV",
  "key23": "38QevZHf9i3Yf7JgCdnCTEBAvFBR4tegNvPvk4gZFuooFBo1MA4sZdKBvn52KxYRWA5qZj6aeiX6yQhVmLNz9FgL",
  "key24": "aT2yeNKCDE2KFw9vubz6Njx1irbx1qTLqBEY6wYrhNidEk55SArFqadPnoiZGo3nKYEPPDHm1bW6baFTsDz2TTf",
  "key25": "RS7WWox6rpXaryKNfukftfFsfFMY1sQXmDMcg91tkMouBAQRuArFamCMSLUggHtqa4Br47BURV6V7Wb3BaxpyQL",
  "key26": "3SMfHcRyiqdZjs46qUwxHNx7LtgoWYQ3sRPdK8tqLBaKP3L6SjDpHVkcfBi5bh3pgCxp4BQrQT4LGUycy9uFDy9X",
  "key27": "2wmnVRbQ7qdxWZZLjV2yZuCn8yrxBATwnLXqKMG7Uc88suqwtU4Kofr64avgh8NRg8CsrTrNhkpUQRaaHPTRTsWS",
  "key28": "X1cD6ykPv7RYzxdQLhQj3XJwP7RiuoHrTG4CxpyQtyR8wYF9gemwxHoPMUjZCdxgi1ntSXUMbiEn4AhiytgB3Ce",
  "key29": "66uk6XmrNhVDzPWA1Zgmi5V3RfNtgkEkLt8mg1hmVh5gBXUwcLAeJ4WocmiwGKErGkPWVC7xe7wFt3wL6Sdzou2M",
  "key30": "5w5MtcywxtNVaxTxvMRyyWHJ9G1Ec8F8Tj9yvSA3iNc6fzYH5oz8whnhm4HJwh53EPFYX9Roct876AU75w3iMToD",
  "key31": "51f8ZgKPfGoKR7UBuh1ZFsA8Nx82T5agbJ5nSHqgqZPoK2exNaxc8VX66qSQGQKqbejfbxnYgChdPVzpFuVzkVpE",
  "key32": "5h7jmFTd8FHPgrnyq7GtimRrEa79czyQVFukkkrvEU9EEvmnRTbm5BxWUWpMxFoD7BZcGFJ5ksZHST9Nz2foqVk6",
  "key33": "2n4xYdGbtyc7fHF5xzgc6XtgLzBNUCrqqTtEMDam4Az5wkL6gJLbtzFqNDopA7VBN9bMwdteYDv4ymzqa1W85QQJ",
  "key34": "sVeJPUkLptehFSLbXzr42TeAa7GKQfRLQcxZc4AG8iTKM1QDdKSHACDGCEeGf5NR8eNp8uG13sKY3AAE7yt8K7Y"
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
