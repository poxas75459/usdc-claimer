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
    "4XJno6iCpYpewyFXRtJszC4vYk9eYtXP8bSmYJVskZyKnjyxUWGLaySQ8CJFgiEPh18aUN4MXjiQcH5jKCLgfG63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eg9ZEU8mBtYxw37rL2b86FZszpTJRKZYqCV2jE4biLrESSrtu36qK8MejY4TEDNiAjf4R2Jm3HciRQ7CmYfLzaY",
  "key1": "8yFNRxympY9RTyp1JZU4FrohJJ2W5SfXkAbng2VYvrHUzwBFXgFZ4X45ms3QoYKDoTXr8H9LqgbjzkTadk629pS",
  "key2": "aJisuPpJAMU3H52XJ8SS3u3oMAuT4agynMhYdaJfsLHRC8oULGwJpgGTBHa8vTWwdKAPsKXAhF2UQpMXwBBMmbz",
  "key3": "c64QeWwhV7wMQod1fCGs2GV9E2nQSjFw8FUwmkYHgafSc3sJpirje38eDx9nZNFUmDjNUExFsekXx13KRnzW9FN",
  "key4": "QFEpPYs6S45Qv3jwtKcoSi3dWZiaEnwiekasNrVeXPkNsNeRh7EK7j5dnPv3eq9uMAXHtLEU6t5mBS1oaXj28f5",
  "key5": "5ui8KThCrpg1zyF8jkh9LAqhsx1rL4CUvhmUepK5br2nFPURapYdh5xW17Q2UFxSqCHAk8fcUe1Yt2USNCAurSvu",
  "key6": "67KBXTo81CzsCvfKPxDohDr3C1MGVynQazhgJjaMqysrL3tJwvCXGi8eSqkp1fEvvecpaFxpvsYY7zHsoSgRfwxj",
  "key7": "3EGtvcnW86c5NCLvtLs4cUvhfCrfd5sC25p7wvuFe1bG1rM6mG6joW9jRXbAPA1HgdykrffzKYnYQvfriZcBqAoN",
  "key8": "5zQ5mdojTn7WE1oES1T7S6BVCvsPH6AY1hx2Z2n3RqNteK5gu815SiGQqL3jdcdasCvDf9UGigUQxcRwJ8wRgZqD",
  "key9": "cJtH5rEH3MD1ukcNNCY3e3imosHyr8UTPAABqCLPwegYWyAt2Ar69NkLYF8767fyeVxBZYKVaXMxPj9bAV7gjYv",
  "key10": "5X2rSpi6TVg7qxEH2KhnDSdftbirpAfVUKHPaRWYU5vesVFmmtJUxLQKGN4dMJbMKZKLpwbbSHkfwqU3vafAp2MT",
  "key11": "442ivYeuJht6Wf1ztpi5HKz4JBWzqzuR7TmGwA5r4HzNwbCHEK23QXWZZiQFDJd7ifbrLJSLuVYRXtYQHmXPhr1m",
  "key12": "2KEdjGKzKr1wbfTYZTX7RN7kh2wYgvSrnEUxcg6x1UTVGWiSwUws2jnBga1vbpuN9o9fJmCxKrPYSBKtEjxEXCP1",
  "key13": "iaahkT9CsTcwHY6FZ6HU2mxoo83cjsQqtihwvFEYFNynyHJFnigP3oLwKsgGrdnRt3agRu4Nhes7RdHEfwqyXDA",
  "key14": "3thV5EuCA2ELEJ6LNFK8aS1tvmgzeGWZHAWBx6Z6BR4DeEtdLATzWJ4riGPtdfNwAHCERTTYeqhHmsksQu7WHMSc",
  "key15": "5moxSWzbhtBx7581epeE4ghoF3UbteoU5qk5wpnDy8xJLs6agdUhdGPj2JW2LjwyPbs8YPmPcCuHevd8z7D25jHW",
  "key16": "FV9f3TiYagRXBXH3zu1VEryAXb5TAYLCDUR63UhA2yBsz5bCEnTe8koaqGDXVhVNBGNoXo5FB4WH9BpqSXbhieU",
  "key17": "67pTPDfLms5vjmh49t1SmNQba4p17atv2wCCPzJ46WTgT9GKk3xnmzbWKJQz6oyCwCdc7wnD5NWBCqtcCyYbwcKf",
  "key18": "4eGfXcChyMPwHx9wKkLXa12Hp7GogMb1FyfcukmkFUmuFvRPqFfcjpuXSpGiScQkoZCB1acmqr7cAGd61fCShpVU",
  "key19": "4Q3QxGozKv4piAzqYC45mJ5g5vQd2grrwE8NS2jjUjhucxmAR4ktRAhdouZpGn3j43s6icCPi4wLuU2FfYC8D6CQ",
  "key20": "fUirbkYgqh9VR5Ukp1NUJfeW7oJ6aZ2WXQyiVwCg9u13zX8XPeSF4mv5oCL722LGM7W92jArxXvwQ1uZLeH77h7",
  "key21": "4tRqQdMDjdnAcUK11VdU9bTjcEkoHgLndUHXugRdMVwrftBAwXYC6jajGo8zqoUFZqKQYfaVai3PuXSW9hW9YP12",
  "key22": "K1y4gBNaqxyP4AgZbJ3ixB3sHZeh6yejW7UQEXYAetSGnmaqttbAAyWj9sYPphLanA1bKLpt4Pz4WFkGaoFFq4H",
  "key23": "2ysGmsxSNvpoEEnHrQfFp2nH1PyDxzvcULpGrYYuBgsCMNwhLc4C8ppZioN2t1ytBjMCSJiVVB4WC2achiVvVeHc",
  "key24": "3q8ztJb6nzBkkzMyWAtykc7WrojPbuCvqZtdqA4fAo39i67q9eR6xSdYwodo2AECDh2XqN37g8QeQSuWtsKYQvEn",
  "key25": "rgRnBr74WxUosZZjFfzAdGqHmGhTTdRjMQexV9Tq8fTxsojqwFQvTeqz5UUpgoMxCfhg4mVK4jQm9E3t9RT6Axm",
  "key26": "59hbQnTUMFERmcUsbwg9UKvBvzWEPK2G1Q8afBmBJjx8yhMENy1xC22nEvCkdub8uxvUo2KtKjVx7qMDKVAArqcz",
  "key27": "2rELxR3YwbuUC6HVXCNSTzQqcnp1NFhW4Uh5fadAeNZPdHQdeGk7VDY773mJt4j13FjwrYHXLapByGbQA6FMELDv",
  "key28": "4psAEPcmTJVG3SPNCicpJ9uQZPiCZoxXvMuYAmjVjLhRdyGpit7Qfb7LBH7byB1fTuiQbw8sWgzHVumD4dg8uHhG"
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
