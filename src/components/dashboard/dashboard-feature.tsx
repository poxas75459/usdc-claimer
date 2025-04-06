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
    "3wYZ3BRPsXNChPswiai8cVcNziT46jiasTtGuyRGDdGXZE66rnsuowEBeELmySVZA6TvDKcbVSEaNSsxHiiB9YmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22tHwxMpZR14QJthFKAAJkwUv2QoPC1PyjuCWizBQUkyC9EqRRQzHVJEdWWDZ5AjPZ5pGBnzXUUk1EuYE8EaxaDL",
  "key1": "5xnvAYoFWVY8qLZGsSLkwsy28NfukE3cRekroRo7Dc7eGjnbHeN6BXSgcUzdeuWA6bSj17BSWTjnpMM9gT8VstCz",
  "key2": "FsABMDV7uC5v55Qwtr2pTr48vsNnLzefFT3s2zyggYnDaEZzWgMg8SPj9WPnCAXosMc1sh7gUHpciTKeTnHdj5t",
  "key3": "5rzkkhRJS2wXoootYuaeYo3wTqBpXcsso3hmGhou3qSwCzCB2iDmniXP5A2PMaKEySKuyymGNXNRLnf3LeHWnmwN",
  "key4": "3AkLzhjfbvBXrT4aQJupHKXMTsq9pNB21xg7CYJsxHNvwhUmYefgnDFbktyPa1XYSQVMb6bFTwFyrupC48z9iuQd",
  "key5": "5fVDfSYxGqDk9nb7wXwCNVcVyx7ocys5iX1aS8tmDy5x3sV6qVJpz8FPrUPz35Ayc6XYsrbvBue67PJtF1oRTc5q",
  "key6": "22Up3PqBM9vkoc86KdmGy5HbW7ALA7iR2nUp3gzBiaz4jRW9gRwY7PSbE2WwJsvRG5kSGDt5x2osTTRMSmDYkbBG",
  "key7": "3UKCanQVoHZK9vHEdKo1BDDvrVxMP44misAEjKYBQtkQv2sfdhHWqbLa6BChuzC97cQJouT4xsUepJRhWnD4b7pv",
  "key8": "4n8iv2g2KyoHQoBm22Dirht4pTAWFaQa98aJY7cDZzEsbk8hAdesLzuSEsyahQrz6xh71cEjGhXyoFDtidLYhBbk",
  "key9": "U4nzhU5eexQ1M7u9SiW9XNhSLNdsYbaizfEaF2LvtjwzRq4Suc6H4Ck673RcdfYTSt1gydikmMPPBHysCNycV6v",
  "key10": "3NyRc61ejLSAv7z3VAjpKC8WQpQXZHFsczisz7SmnJR1cXC3KUuDj7K2ec6uhFenuhLg7a1rrQt4WQ3yY4RzwRuf",
  "key11": "4ApsXeef5UD61v7FaAh3ypaBw3Lotn6WT7JtGRA5jJrQFNPEkjy1E39KjbMBLSuQU4CJF93RdNfiGDsNFzioBTL8",
  "key12": "36hA7czVctPNYH4mFTaBSjjgqswQNK14PiaHkH2RgrLoXsEg2qWMfwQ9FRYkWZpDmFG6w283pubm4v1mhTsq26BF",
  "key13": "3rcgCr733aSA6EoefBNAHhfxWGSB8BgnpcckDRyVZ4m8rmsnWjZKVBFh3xHycPSQitSsSDHP5HTFtA98r6p6ZNgT",
  "key14": "25pEKBasvNQ8ckuBVrHbo3duLk3mGmMskjtVBr3g69yviQgQtSBWkBDVkMYkZLjkq91grwHAi3TKw9NzQKabiaPt",
  "key15": "2jTk8xqQHZUNMu7mKK9BQu1WqmfcTDxD9cDkhtYLfshoSBEvKbPpEq1LWDeD19Egfpu31LDjsu2yLHvYGQ1zANzr",
  "key16": "2FVvMAKpykwtc7x9uxWcKE2XG7bF5kjZq1nVrAyM9xAyHF9fY5R5VvKgZaG1XoaJwzi3eDo1AAHqe6TDLu3ZfvNs",
  "key17": "5kxtTKQVLPkQR6JET2ipLmPv9irZC1kYsVYp4rEBNX3R8TTJysqAqvH91E8heGtZojsriNWddgqAcNmTz9M6gy4A",
  "key18": "49sw9yEChC3omx8WH61GXGz1UToAVK6gNSiWsuSBLoV1Rt8d1rYEUumvd3JJ2z3ac75eDzZdmbVWtiU8pX7Zqg52",
  "key19": "4JmQ2Dg4qbJT4yyG3NGVwPxRpYrvcxgHkMSfXMriD2yQYDz3HPq76EDmtWGy9Avymx7ZTGCLiK17rQzahCdtG3Ej",
  "key20": "5wWNfqQv6UfTCRyP7JS3vrUE2WK9JecgCesYMnKE2UxBs51X9mNywfyw1oBCZAxw8M73R4Ka7mnLNuaXojkCyysJ",
  "key21": "39NnMrufHMxFKBXmh4ZT6SJDNfWXbq5oFaAd3kkvXptZS19Et6xKfEqA6YYiN5QjumEmonPShQaLxQdJpzQq1uuj",
  "key22": "2brCbFaiSAzyEp6uJ6QRms4zrBp1uGvZjYWSPfPZSgR2S2mJNY4mG2hWR3kM61iqrs484HivG4kaY1tKhJYqBr3o",
  "key23": "DcLe8gP9xDz8eGRX35uXmu4M9o954auYzavuvcgmck6EUkVBoNTqP9BLoqF1mnsjFCN8ZW1eXSQ5wePjjvYaxtS",
  "key24": "5T7GUFrwqmQaSuVoRvBTVCSTh6ReCA5AtYYrzLMrn762jb2q6inUcDhCzbesLmSfmWEPbVKjxRV68Jw7vthK1U59",
  "key25": "4G8p8QnPd2cdtz2BBu8QcgT7tJt7RnxQyoLqMUDjW9w9nWME3cNuvDwm7ibhQHHsWaChvushSPMEGe6GUzJGask5",
  "key26": "5UFDLkpAVZegXvxzxrnZeX3JYUzowJhaHgX7s5iN3jyK1KRupMoi5ozup1hpSXgbri4HxfgMXSzweYLDT7NzWmct",
  "key27": "3XaG1oeekK8ebmym96YTjXSP1oebnWEWjjCfC7NC8PTiC83VFq5YyLi1cdsWcHs1CpZ6E8Y5CP67on8jsDMK7jnr",
  "key28": "2dFnUMaMkx4fByMr8QKtBD9raNega38h4oeWETdMLSmLqURbuYXVx39WoaGoFSt8XbnW3Y1NRRiYpBK7L7rZQyfC",
  "key29": "3daCfEZaAYo5fo8iPXNv53feTngSoaB3iDPBrYATpBuezivZP24r6bg1HdNQBC1P1DNz3JoqDcfSGyw1RFHEVscp",
  "key30": "42jAUzpkUHpsXGAhUkHJUsGUKQLtwZQKHLjTpSWS1hZo4bwjcocjr3u7TTKZzRF8in8RMBjoF2FoLEKfiMG6tsaJ",
  "key31": "3Kshm9mfHVKKfNHTVr76HnbvE1498mXa1F4LKR5gCV1ExbY92LddQZV6WJPbvyaAurqKL2hEqjxZsfyz8FoKVmUr",
  "key32": "3FCVKjy6BNfcDduvNfMwEja1vEz5PcUCJRVRZk1RcUx3cxqK7dkc8A4mFktZmGv7BJnfzTyfv3tAiQrbk2rwUuV5",
  "key33": "3hjy22cW8NJ9a75kTgrHmo1wYNsN3bmwezZ2JNwDW9RD7zHgd8R9RytXWn35nFfSq8MivhN8aE5F6hU8xMRzKDuY",
  "key34": "58rU7wUmtKBPnS692qF7nnq6jaUQKwQLEJrWxp2BUpm28DPDojaq7eV1eMGDLA2A2MsghQRTyiCZXaKdyUtvKdJx",
  "key35": "3kKs2n7ZUbMMM3tCeYp3FQtj6RmSRZJSnsbtZhPhqxtiKTChCR1fPaVEkJHS3dgdAF8LWGTiqzoZDFQW3DrFoAtQ",
  "key36": "TzKvT4XfVQQeRqSC2coY4xRg676w6gcFMWusSDkDWMPsuHRKs8eCzcjx8LbeyoaSDRMafMR7GeMC7mEejX8nALq",
  "key37": "2F9RgZ7y52SxomELUxKYTH1CrbRnHY2kGqG33aKMsS6AzNM1xgW5HtdP1dpAimyUN82obetpyEKfkWeVrGL9tJWr",
  "key38": "4WHMYafGN1Dq3XmVJxaDtUHVk3FWktAy8YWcBP4DsLXer2hhC5PVqsgqhbnRKq8kf7HVPpwnZXtpLZHDoTMy3WFr",
  "key39": "5Xvve7E4VVpGSapcQSjvA7uX9Lrt1J9wqn2nqNCQWSMSEtG2KiZTx6nMJU5AY3dSZRRVpjeDrLRUpThYxjzmGbFC",
  "key40": "65CdBvD5pNyNMLwimrR4FNa5cjMZFnW9tbpQCF4zwKZNXBjgYDEDf3er7daSA5HXswNFbLaacww7fpYdcJiK2ENn",
  "key41": "3QQDL8nanmepwy6Nj9JDi1Wba2U94b9MHtBHbbLeAj9qC3bi1HXkCKkVYkXqJuTDf7sfu1aWzfmp4J2vbGZmZNn6",
  "key42": "2K4aKCZ56mZQ7kGezPVEkWdmyUy4knsGvtDxL54Ea2tvFHpNUfQmd85HNgJPfqiTJV35kjpHmJckcctUJg14Hy41",
  "key43": "5kgfRUrYfDaxjsiGTCWQ4eG4wG3TBbQBvxJ7HBZrdLaVrvWwdETEkcAqVV5Jj1ePo9sHqnBwG1B7hok3FsHwieLz"
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
