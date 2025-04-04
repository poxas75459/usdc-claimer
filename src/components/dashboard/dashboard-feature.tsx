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
    "63DjPak3ba816UTrmj8ocAYAGTLuAEnDpHeAQ9LqCfWPRHXYEddbTJE4RMtHvppdKfNHe2aqaQk2EA5n1YFB7g1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PUYqdMRQ9bRgmW14sA27uC91RAhQcfoSYJh2nSsb2TkwjSrtvDEVbAg1Zdb6br8mKQzBXFDzJu5FfchG7vYKiQ1",
  "key1": "4iRwB36DH87qdY72HS9sHkDvsoGRp2onNYZbpYJEXKji3db7KJY5SJCHKxE3qDG5RcUGYJRuBBLgodKRk7wHx9sg",
  "key2": "2ackKoAaXuSvFRhUG1biE9pvLXPwMgopcUDJLWgrEXesrVAJvjgZh4ittYjRPVaVfCmQDZ6Sk8FwwP2H9QxauTeH",
  "key3": "5GmYTymJUAqyEi476YgUf95iJbTu48WFJnf3hvYKrha7JbrLsgaput9qKSbQZS6KyzBPQvTeGjaB4faonDh7sxcA",
  "key4": "33d8Sa2RYoRQTTLysWYDyLZbxUSz87bHRhyeuAGZmZt7iAzjJofimpBWF9UjfqBf5DsddjuubXhQgemzgh5PHR7d",
  "key5": "298a3zDDphW9sm8ZVHFGLD4MdGGGxtNDRKKt3sV2pbMnYJNhrtDew9WmsBmsB4FgdRtqu2Z6jL3BUVM2nQMhyq5a",
  "key6": "2M88B5csMfCjAKVGWsCCWKwJpMCYj6G3kqWNrCecG74H9pFcecTqDJANadU7E1b34heMneYbGPZ9QCnKETkS9ctJ",
  "key7": "4Hvca2MqQT98RHnpJzbpmfPakBWbzkuiRS1Go2v62TgXqskxP3oAR5dKnmx181srW62g2EtJXBK1PFoYEWZ1G91K",
  "key8": "MVfWBNrwR3tc1ZnvEcVrBbUG4GSYZNyh7wYPnhgidrGNP6RUWF6RoqjNALW2NES1CFrQZs4V7n8dZoCfX63VjMQ",
  "key9": "4awTtjw2jnTks4WhhbqMfBvc9R2BEm7BhqgKdJJy9mVDvNPMm2AQmex2LM3PXujRJqojAFTg7MpJWsiSB8bfbtwt",
  "key10": "3bK1or4nEzwq1uYCcomDEDkcW8UNnH6NxveBxrhMrwT3KtAVDAPk45KozB7HjNnoPPSdUfiFpoEtG9E1t1P4jQoH",
  "key11": "HAwoTnJ4AvE9m74YrZkZennFCZS9AriFk1QouBta7rDQY2ocLebyze6pURds278mtZMGwTyQMVaNTw1SsgMLkmo",
  "key12": "4Hu1UF6Jk2RzzABrogjwn2fEGuPaqra3B76LkpDpoEpgLsFxU5iwX5cgezA7Zz76mfaafcsTinfDdWBA7fivCd4r",
  "key13": "3UmuThtPgRzYZwotUEKtLQzCGg2gfXXsBbNNSh5Gz8RJDUk1FH9SngvsC8S7ebFhRiYVA9BasB9kcJwD2TXdcB3b",
  "key14": "EfrvCKcqjWdhftzAWhER3UjPwfFS3tH2fjs5dABvHbev7geaBzLe754mZL4JeZ5Ldpp2vDkDZapwbCbhnfvoqK3",
  "key15": "4G8bsAUU45atbymwFSJCT8JQepKmNXCGFynYqEQB3FAGKNAfR3zDZgVAUwW1o1X6gPAddMypgx4gDFrJ5MPPWVsN",
  "key16": "3phWjRSmgqaWYsByuYFYWQwtD4E6eBpGchV68m8UJMGNh7PhiyEZxP43LB9hhB5UwGGHrqEXeFnFQtAamunrVMs2",
  "key17": "5ugoyqDMXUt5K6zFiNNm3D85v2WNDAefrdYupF3HYjL5PBGvdRA3SqW6ho2dxbhJjzT7mnDKCF2jxdxh2L6BMae",
  "key18": "5vYrhBQoYCoURfgw6ycLM9bKBFAreFtZZxo96g3PMkayzRuE83aSue8MxjGQ6e5kvdRx57a1y7GL6LRfTjKrV1ER",
  "key19": "428saodFXAKyfu6n3wAh5EYZ6SNBZb2PwECWysXj65YAxDLZJpGSQahvn9Wk7Ti6iyJTfdpVo7vba3W2R8N1f3ck",
  "key20": "5ApzJNaACbV3aeS3KtcUCVHz7g4BmkK3GAvw7XYAXPznb6vjrBiC3UxRjGCmU4nnKEXx9svqYupYTnjDgkGjQ6An",
  "key21": "124hdqMECT2bsX4G4rs3Yecm7NUU5SzJk61zHpcZfXCqSRkRRsf1hmNYDnwnN1Pq6Nx6Tr9VtwUvxjP6FK93arW9",
  "key22": "31V481hSccPn81n49r3Cj4cMQK8QvKqrKiZfMVAwfkR4pn74Xf4qiRpMRZH8LxJUw6mxNAcmCN5JrvrxAng8eMmM",
  "key23": "2PZFUi1L4BKiVRQi4Qw5hdQ1gSCMr78cHUFjuX6wHjqdAXEeiErHcGEZwNpLvu74QRUpC1VYY38mhwLEDTm3NMxj",
  "key24": "51y9HQDhhNjiNXzMYxRqUfdexN49KKERPrMkQ8vn2xnoFktFiTxpziDNNskmZbaQAARk2D7PiA8BtzjN7d8XauAc",
  "key25": "5EASBLaBKssGVvzDEDTZYNLQcADeDB7d2JR7RhJX3MVQsLXj8nqftmWhahj2FTFKVQB3kQ88usm6UZyA6L1PdWwZ",
  "key26": "yA9hgK4e6UHPBJw7NCNetcDtZMFc9qcvzWaeSqoR4ne1x389dUxnPZNeQxDa1m4EP7VJ6RyTqvivGkD9pveTC54",
  "key27": "4rUrz7jPeuToN7ydpPBPxx77GjdvGGB2NbmiMFRpgkefbNFeVsqymtrAdZgFgmNGbtRn86uw9XcGbxaFeXVeyB7e",
  "key28": "sgmJ1ZJJZx5Ls9VLWBW8qJFxkeUQ2DiStj4HHajmUKCY786i7CR7qvuUtJZdKXWk7qYLqgwFWdLkivAtTXWtdLY",
  "key29": "2YEwjFcaFvDLSfhgKUuY8ab1b3rEcyh8qMrwyXLn3JxNw6sSWdSfNGSbMwKYT83EZMx1YK5n3aagLZG4Ygov1zbP",
  "key30": "2oczfDD58vZUsKkchX3d5LoUe13BNXuDMxi5KuARxjxGHP1psqdHnP8wbNenG6XCANwEwnt7ueefdzw9vTJx88tE",
  "key31": "2ZbgiAELw47VkCeDZNwxtywu6kMF7uxGECU5iWHcUF6WAkCg2QcZTiVSijqMXUNy8TkK4z4wdb3KKgY6jDkHJhrn",
  "key32": "UyGEV8qKjyyou19qyWY2CLTjw2FSyyBiCTKcFZNrNZTFai9eCs1YkEYDLK1e5LLQ41zwLvscASfL2pzvdJku5MZ",
  "key33": "3h9VQGpP71WRtHszko4E4W4dbNGJyqRVDtCeUtg6k4pVdLUpgjKv4sJvp3wofbtn2TjJNapzTk9ysg9HKfcrpXgS",
  "key34": "3tb4e32yLEfnDEc6wNPxa456usP99A66RRFwXcj4c9UNyg3TxRCNXPcs98QvbxN4P19gdwMfdNfeE2ar12ajdVxC",
  "key35": "3pJ6WgZXQGcaRpYb9FHUin2A5AJ8ket2L4te7DV7fGWpUunhqZBg9Kd8pioTqih4S2S8cKCL4SSBoWi4QDmmCGZ6",
  "key36": "4xYEvTyQojtDDW8vGP5vWVTBhNm2hFAawUaL4FoEw2dgT8Z1N64PWjy8tBqktHjSasB4mgxiysr6ycMqDeYqqLD7",
  "key37": "28p3BVEGQBVirPiBt9pMpdZ8F1Kmpv6Fw27dmqVkarYBGqd73j9PVeYgoqKDF5rnSn4dto11nZ44DWtkPSojmBUp",
  "key38": "4pceQZtmbK5ywc9mWnE9etfEWQcsSTWfLk1DCgHMfJ4VQbyr5jCGbjpWhs4msTcFvHrBLXA7Qi8KRQmamfNkP65N"
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
