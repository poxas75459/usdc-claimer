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
    "ojRLvmLwrB1MmRS6uczfDa492hRio1V7ZKynynL6KxTbzeirUjEu5P9SAJtwCKuhcASiTvVN9CHE9eZBeKb5Zkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KVpwXDVcWfbeUCzbEsqy5ZPJ98125HtkhTrTVHo53c3Hm6croAV1vuZzPsTATU5G1FuWPxKXci5YWxHtBTgxvvH",
  "key1": "2X94BuSfqmhUKQwYsedxwK736Dhysskhojx7AgfL2iQNkR8Npo3faepdAcmJqZmQDp1MDGsqgdTdvwwy15ZhVTki",
  "key2": "4nAd9YCAgGPT6aTudgvfHF8z6WcdjMQmQ62CnbDkgANKTw9mRm4ZeXGPffD7myx2uu2eUGD5KhPFxFFGZa95Rqso",
  "key3": "2kAxuj4Q6EpMUg5DCLWst3oKJKis1s1PyXdzP3WeXQgdYYzdyHfntfmzTAhFcK9j1gzgBTHktVD4qknFFhwVZehr",
  "key4": "3SSo7sNLZedofLeYZ6ddkch1FneHKouaPnoHj5NhdyQQgPKBu2kg8L5b7HHWYyFJvGuEjjsV8t415ZLoRQGshZm6",
  "key5": "3yYJabpAFd3KfFU8AuETd4N654gAtmqFGq2eCt1NEg9Sn97nJ2rbdcQZrzb9kcWWQ2mUQq4frgRB5uiLdgzDtF1W",
  "key6": "2qnJcifLxoVuoCesgKtCkSsUagHQNmrGvcX5R1tJud8shwgq3DPxf4AJ2tsQW6bZYjeNzb5zRPtR53y7RNx4AXR5",
  "key7": "4Gtihmktu4sDxHFFkYsj7V79ScDaA7shTzMraqQG97SQ9LEqLHwHXfv8RWSW7sENDa2g8wN1N2KKCnJJCF5cnuY3",
  "key8": "5gTztJS7qQ1btyUyvPR7vpEi7mqkh8ad9AeNsxFaACnp4vGtYmgoB89S6hjdn2hN5cPeWaoqQXrgdPhasaLFq41r",
  "key9": "4rHLWjeBLvVB2BwZgB1b56AmfcEvVzsBoenv7ZkD26EzuduoRA8NpVCHu1dudNMN4uwgnCVcydd3bFkmqHwBkKqK",
  "key10": "33uL22b1rTBobPin2vczEYv5ai1WViDswySQvsN9pPmY1249bu3pUUjtCzjKL42Qc5nLs8NSZtBhavpDJdHcL4P7",
  "key11": "5VWznLwuETiBtnUP422yHDnv9FwhgAGQdorphJoaf8zsrrrbJGX5gs8ov5G67XkkntJMNTDs7vpS7wc7hiVUCyBK",
  "key12": "4u9YtekZGwB3rarBRuLhXLUknm3YcK3EVamUbUkPmgKhzVodM3Necvf69b9pHk9UC3kFm8gDi78ENB4Ymy8hocn5",
  "key13": "4o8gBtFz1EE3tag127pPPYDxtGqAAANPzuihhmgidUTWsCRXmu1qjFdNr7QwV2pyZQ2vJzPkKPADoXuaaoV7ex7x",
  "key14": "4E9wisTjvo7XpaovvqcshSJMpVaGBa3nVxmTtPMQo1RTKkGzwEPeAn5h8QzbDHNGpox8iGAwq4WivD7pRPXD16Pi",
  "key15": "SmidTQ545M2dLQE5eMXKuAfDtL3LozDEAfrQPkr2D5LM1Jpxqhc8SsTiBrExsVjQuFpgYp1m1P9FTLTYQVwvBdM",
  "key16": "2KSJ56cZPCBQEJKZCBYnJ3YBBfGqTKKMQD59p2xwRiud31fdyJgEnicHE6LRt7JfUvoTm4fDazzsS2V2Kjrd69RE",
  "key17": "2bxL182iPtHcuYZcqnKWWoGqSfLPdkWnkNszMaAsAJAacfL1ceLskn3xSrihwSvY3CMZtrGbZWwtBMdK9z6p6Gib",
  "key18": "3m9JZEyufCeKgwbHoSSrruMHxZWFa55Jz8JbNCoekLTz6TcF82QgBiA9RvRvmAWXdhpcFayhUAiv2JmLqJv56BgP",
  "key19": "47b2Ktmok324MT28iQ4zJBamcAyeTfcgDKXuQZQEHfzVxiZMV3DVqVu7mFUzULxn6Gere4GbRkrVzdD5ZFHCermu",
  "key20": "KRkaXYodsioAYEBE6NF6vhoZzg4i6As8dvAqwUkyG4agzASduqLqMej5NscgKoUP6DjerKgtw3oRGT5TbUs8eQh",
  "key21": "4MS7W216gBep6Eg5kuyysCPsQs1ywuagUpmJdvdapQecXW9rXfAF3zEgdAXWJKN8ucSPPgo6LS2Ns7m4DiiRn6oJ",
  "key22": "uTyXAACvydZiQNP8Y5Ha9dM5QetBthFsZfL46PFqkZniFbAqjno6s1ZQMKqJfo9v4VhreJusFRVAcDLuoF7J5h3",
  "key23": "3caC426UtkaUn7w5mpef2CP2FKYCn8ymz4r9N6K5qrt9VGEszb9tJ3aFHkajtHgDrYFqR5d1hThAir2sVUvca5Km",
  "key24": "3HcJMtc96Pj5jVvHBUwuacjcZfpipcJcbck52aUZdhrmCunspC1mMiYdMCwVfZrZTM6BCCfYi3F3jNUd5A4TUh9F",
  "key25": "9yJmDYfu7qncqqENyLWYBziRyTpQP6s9YBWEVUpqpqWiSwoYyATk7v7JxgdCzvXrSxFBSS51AbVoVqkh6hPPZq9",
  "key26": "5RronExbZQ6caznTERHUxYonuTAny1SbMe1dXs6zF1dBpiT67Bmq1byRJcK5xaDHzNMWHqrm37KSydRWgv9Zm9pz",
  "key27": "WPA3dHzA6qNUr6bMAMEw4A8ZAijwZze9T3Ynudxwo8uwP6Q2xqPW2iqoSRNiQFsaBUbi4UrzzURL3KU2zX4HxQv",
  "key28": "2yYZPwreJj43Az1x9w5rHH97p1xRStrixgAstzrwsUN6QZQZUaU6RPQ9kM6kT85uxiVBh3Xk5hwz6jWX987fNGev",
  "key29": "3sLMmNAE1hdg258gBsGCXEWhc7np1hnA1mqu6C9rRu3hZzF3re7dA5ex4NPd3nr5YryMSm4LNW8vyjZFQjViqpgN",
  "key30": "44tPos8KpjNGYJXddspFHaPiJTce8bfADTsefkaPFL9VK1o3ytBEj5pC5uuL5vVs5Pw33YoDCA7R7t2rc43XYgus",
  "key31": "GF5XkufMK9MRNUWH6iMf6UtHrBLgodSVbMvNWbxUAQ19sHYsGE9CJBV1U5doT8osCcnJe2MLrrxJQLpbN1fPdh6",
  "key32": "qeQ6q1bxa3UtbeDZkswfz3ywoYnv27VLpHxS842ySwC4AThAdnuMsKft1o9BJZyjv2PmV6ALzNeGxbVR7TfjsQQ",
  "key33": "5mU9nEjXSMfz2a6Vcp7PpDk6GtiRjLHMeGyjqQt1it2fqa5wE8akaLhCt8LsaHJdJpTUiSf5LNF6fUmQMSTdkjfQ",
  "key34": "4CYdfpHJxxbsRD87YdSyoM24kmthSNNvr3yLP8yiLnjXaBaoKDuxCrtehAeiFXUAwDqce2KEYtTXiAXcAQGPqX7A",
  "key35": "3NJ3hUVCvKzbdPkS3XQNGiv8h7T1qpKbEyv5c1zrXiKaJRasjxDHzoLeuMbBiGCaZctEutYtZxojXGwX2ME5sQ9A",
  "key36": "2QtEkqMAtrW1D6rCpeVWRcVYbaTftWnaMndgZoKkmLQZb5rhaZCXM4PG2EUnzxrfUkUpBhiwVnfc9NMZVbLDPMt6",
  "key37": "5LFkwCwhU4wAM9GrzuVpzraJ2V5Lhn6V2Q84gBPQyqD8w4FGNyQHsn477yuyCkFNznsNFCTNsDJaXQQp8xqWXdzi",
  "key38": "21g51wJi8jagGFjZRn54Q1AzVR2eq1FeMiJmUmpisLVoMtt73VXmwBQjRD4gdtaWrWVTFGQcPohJQA8NyhY5XmSA",
  "key39": "3VdCkdpWJz2k44HNncTC84Cp8i78P4YSNTAwpSQ52ayayZU8NSYyZBzVdsGKF2KmeqUeLnzNSbMpgSeNbapt9ZB1",
  "key40": "UMfD5A6irYZgthfcmhZTM2VDo3nHFbbPk17J1UgjyJJ32HC3Ly9jjgjDfev2AXRGcaDDyVbzWzqXBsjySTDJSsE",
  "key41": "5gV5Y6R3p6zUArPbHZY7GRYCftgv1RxbJ99xMd8kQe7hd8xs8TwzmfVuKnKakWtNwfAUwXArP57mPbopUEJK3Kj5",
  "key42": "3eueA1VQQzkEqhnjSCvFJbz4rHoeX9dcaR3bViZyt1ib1NAUysECqDXMi4aaJTTxEDwibeELkpMTSu49sFX43bS2",
  "key43": "5mKiAJ88Y1iN36KSMwvvRgneFHx8Hpkqn7b5ywEY8UdzaKWV25Z59syrCzsSKwT3dLSdjWjbP3e4xFCUZ7vANq3e",
  "key44": "67WEKaUKkKWBSZxd8hphfUDf6sht4vnx3eeUjLbQeqJ2F3bnQJPT9CmgfHGqevsbRXbAhnJttH1ZyDNazTFGF1WS"
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
