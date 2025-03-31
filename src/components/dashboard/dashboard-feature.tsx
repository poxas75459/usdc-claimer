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
    "2fKwjQRrHxdvJoxgp63jNPXnrZwwaG5mN8gJiDGJ7PJFR5AL7cep5Dw6iRfTVXgg7DLcBf3pLcfW6YkURj7tUrPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SZ34jbCkfuAShTCAWuvuPoBDpvJ6kbX6yycWdr17GCoj57YdfHguCSGNux474EN4Pc1ugdqNDfjRGDqKdphcNFT",
  "key1": "3Z824mADE5gswN2d1gkDnDkVwBWRtXehMa8h1ww5antJnPvHfvTcQWt4nt7DUZZatqJchy4bDyfgpy9DtdAbmBai",
  "key2": "5pJYPKC9jRFEpNrwigdsKAqx7mA9BbFC7g5JQeQ3yYuJ94ks8S6BCncjQrzLC9HA8Y9RGquFX8RD44MEsXqGnTmq",
  "key3": "3PttXBeDCtZCHHF7azR1CvyRKwL6S9rj29bzJUU9tnqchzuutcyq2khjQjC35Bp2MzeUsT6BwmwbpQxMvLReExjT",
  "key4": "5ey1QMV6TYFtbf7vhu2PcF1ZvCPMTXs5b531gXtpL93m4jToDB42xQZnMJ8NA3u6sSLRV6XinvM3TLTkzGTn3AMy",
  "key5": "4fmAeCyCbGk5JRMjP8eHySHkvxcMqBjnQ2BCTWvq39F9sY9vW4w7CdUmGotALFs5F1PGveS5xvzrSDWpcgqpJe6M",
  "key6": "3xNwLaqbaaJuiiLWYQegRceshyRiMrwQxDKsXa7CFFj5B8jG5LMACjHCvE39bBMzjT1N94gzkduwcbPDP66Kiz9S",
  "key7": "54dnQhsLKe39kVKNwT53rJqq26RpajRYjq26xdG7muSihuEwyxAcEK5gn2CaBcGTxMivoDQtULVdgZsUvXrAWLR4",
  "key8": "4YF1ahpEmo2XepNcmcRb6Wss5aLKrZL1zvxK83qK5kFexk63y8QU2Wzw3T5ya5u3jPzLYrGV12oaj41f8sGJiMoP",
  "key9": "kZGXCvL3YEhsrHhfhKhYJd1MaxGMa4ooWdfGzN2VxiJHGjTGYMGbXvLvQY5X7GwXeCN39PUzPKpah3M1EobsUt1",
  "key10": "4fJxb2PctvSK2q8iYnCDcD6QbqLgeNEQRidALWEJ3UiydAWRiQQEAjTosiqwosef8SWmMu9veGYEUhceuRigBck1",
  "key11": "45uumPKSFn1Xdt6GQ8vKCnjaarfjQyKrDv17PdZtyrprWNBc4iRXuSQvNj5R8eJcQkTFKmueLLVJuaiZv5Wtht4Y",
  "key12": "4uFL7hmzU7L4SVQZNLfTfLa7dA2oWHnusT7AYZdzUecfZhcA4sfeSnyHr15NrVNLn6NchJT7r9AyjwiqX6MT8SAw",
  "key13": "21p12pQH3BExcBbFkwzVmPEp7u7Zt9S6Cb1xfqWunJnmUvQZ4k6JW8cXAn5a5suRUiA9WJrhGS1RP2XW8pxGzNHB",
  "key14": "3gVZQuw1gB35s1jKmthHKJymaiC6h8YbSpbBPCkdUhFbe8n6bGKcn6Mf2oSXkcUbH75iRaNjMMLNfWS5ftrnYAhd",
  "key15": "zY4BsUe5tCXmTUFKV27cwSfRxzXUtrwYBP3Z6F2UQ8NDx6kAiGFgMqYjKARRmG275FDAonY1GUSYXWvDRQQvTiR",
  "key16": "3MqJgMNyeeCSK3enTQ2skN6PyKmvbovFWz3gx6fbEcerrZXuAsXErBDeLqLUs799yj9X8troR1tUohVgYvVwGekQ",
  "key17": "4Z5wuxGK4fzhgtFjLhLaaeDxKKAWLUnwKm1gfNqTRifWcHRsDvQsW4FTNuPMzZvSFrdjXUAy7JXoQiGfmjsPWjkN",
  "key18": "4q5WSgkkKftP3jG4ggGUmogE56fgzze8G5rtFbDqTMhGb4n5RTbqVKauNmhLrYZ7fFsDD3VyNTaZiGcJcNRvGKJ6",
  "key19": "4c9mpNz9TY6mayjzrcxYUnmbYr1stTVSXJaMU6UKD3p69nN4K7F6UZQuRgiEHmj96kpH96JgCTes8Xj1ivZgntCV",
  "key20": "ZaYA5FhHDeGmogtqMAQd1FdP7MAVavNVRM3jDktACzyAQAZvFDfW9essnya4g3vnLB7SEk4FMgfNn7Y7SR44ZHn",
  "key21": "53PKc5YoqrR8duqdM79dPEJsbpUJJSsZLWUCb4xrGvqjoDLyrhp4iTZU84ro8suSSW4gq1oNfhdDySR1RkssT39G",
  "key22": "g8c8sHia66vjrdJcqUxzxKmQ9f5WQAmegAynNuig9yipvQuUcotPxduaRsqa4FdmnCkfg8H3cFiUh5rGUfJWym7",
  "key23": "35LrV4x5rWTFKNiBiSsRkVrJYsbFvzTNHYepGj8D2eEmeUWJXTZpPSTnd84L7dbznu2DkGRvZAFpF2oGDgwgQBUc",
  "key24": "5c18SV5sX5tBagFo7fgAnet9y2BHjKaLv8KCA7ywLG4UUW2G2Rbk9ZN7zjNjhAk7WyU9xBbLuxAJNu8kZMAxL2QU",
  "key25": "3KbVD6EmRqq1ib9JgKEW6PqFr5WvQgsuZ3hFy6AEjpHDa1QzU7RSoapbuJMdJkUZf36AqoHJ5zqtmFFKmVrPTrVg",
  "key26": "hXuvCib5JsTtJwYt752LE5oPRg3MXyGNu2RRHSJ8GAazv6EarZTQshQ2zJadXCzkoB31S4jPM7TqWPbgfKxdNke",
  "key27": "65cVqND723QFgteq53UJb26CrBeQeaJELe3sxPrJFJjNHWWcQKZCQisrgszCtqZahx7nVjtjgHoy74XnZPQLoevj",
  "key28": "4rSvHivsf3J5o9CTZ31KHXJvcYoJJyLfp1N5TxFa9CtA6ty8pTXysHVmQKD9J9DPoXfU8mktNR8FSZQKduaZh6LV"
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
