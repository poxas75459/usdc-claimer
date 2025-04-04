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
    "5o9p56BDM9CP8jg6tn4kXLuPKeBDh4ZTfsSsNRZgypw3x6K2WC15Bq78SSsUGaTytYJYDbMoK5hdLFA7G6eboemJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E22dGFUQmKA2gozYgga3Wu8NBqZvftDLqv136kTweewifPYhEaiSJjefGrcB44A8UQPUxwGqUVy5xavLVaAZxGv",
  "key1": "3SQAf5UtXgZLrSsRrFhsspb4SWjnkdDBDwgGM4yGTiusdM77TgKbmuHh7foQS8gLymCqvuKJmrRHWRNhEGtwFYms",
  "key2": "5iSb13wc5KzxUsRRZSqiTGQP8svDxPdUFWm1gmfQTArWdf9TYgY21fcFhmefA9t9ANg4nTyZoQZBPFjfJ4GDS5sF",
  "key3": "5aki4iAJZ4WSM8jRzj983B7HTZ1axT8BB7Ehhz3KGJmwgmcJ9maRTJXKR9tMgsL1iL3bhqoyuMEqpC8f8TcaGrMG",
  "key4": "21AguUxAU169jeJZmDybaymoxjujSgW1fs2CxQ33fxb15H4VvnRy5pi1K8vczyDE9S8RwrDW82gDAox4bgPUbqAh",
  "key5": "tzAtfrWkY5UNE9siz6hQZEyXMXCisT9PvPrfPAV95vVcWvDwAwAor1zVJ2shL8b1eBQmnKJTnCpYk9P2dKXM8Lu",
  "key6": "4jeMMCDjsJmqXBKxZBT2aA8darJqahEsAH4jKemU4cQdaK8bZ8JFuUqrYo2ggKoyDyZRt4hzKjNfgwuiAr4kp5pD",
  "key7": "nFCSutX7UovbLivkMnyt3LfPSiY3jbYMwUpphys8nabGK64NWMg4AVJcQaARwPbSjXkyRHaCcXpfyDWe4jBF3uJ",
  "key8": "mt17oFkzxetsnpYYafTaFY1FCDXDKiHCzbUVvZ21eorz4XCHmKWRQxTHwpioG5BfHmfxQJKWFaT1UtC67WqHrnN",
  "key9": "2zKPKZw3C67udmPzjzmDRMSCGjDJ4WPspV561WJHAKKfuWvU9hX8wMeiBiwmR66sNP2ypWp7wudAvjqf1xwRGbyQ",
  "key10": "46ZcGYUD8gJXjtM42gnXXrkHAHfkvvGNqGNgjhknXytsHMLw9uki7aWxXG7AQZNFqcN959tWz1NZwzw5HrZv9EuZ",
  "key11": "3bb6NooCeic4CdtUHFjTqfotp4SqgoheauXv1zFicoKGhmd3hFBP4ZcJWTpSBDTVue194x6qJCPFBeVkea5GhGuL",
  "key12": "2AiXCp7up69gfVYMNfTtQ4AzDxsCLy6EvMV2ckhKd9DzyWi2KzMWrBBY1C8sPZm8L7pTsKnWXN7bEYsVZMb1eiUt",
  "key13": "5iyjLauXKiRp44aqEqgQrgHFvAbzjZjdUK1ktM6PfyftdY28iMTLXf69MWhDRGgzuXrP82yUPjvE4QhK7hVMTGv1",
  "key14": "3pJqWcYurtEPywp7A629A6WyTEB85TuK3hqKi8VPCEdsuA8PgXZhQmCzMv2prXJgG8sS3a3zMR2K7nZtjQ4Kz7Yh",
  "key15": "49sdWgmRG9SMuE4ts14Zh9C3Xgnb2HAoKjfqsBzAjPFQXDwZP3z78xregSUt3TfAjvxUp1ivsEYbaWBVmcF8kVg",
  "key16": "3zRjRuUinN2RmFZioWXf4cXMc4ythqKwG4CiWoY1FVX3qpf9KENd56EJVzgJENbuo9ZLx3SC74AwZcVPK9Et1fKk",
  "key17": "4mSC9kmi2tJ8GVy7X2JeehKHGxcFWGkoSeoeKPFkVyuZuPM1D1DdKtLUzx7ZKJakAsoKxJ4d75ziTnmp7V6bkAoS",
  "key18": "2UD8t1nrsmzqMvHVHfbw5BvBaaREuZb76MrGG69Ht9LYk16oyWAYnm8NxKSHgRidPg7pDv2jhJc8q7AYpMPoyzP2",
  "key19": "52BsnL5bgKkM5VYdbisDVqVP9fG31SCxWiF8vRY2aEp5Y5KeAcxjv7WvB9haYU7iLMZ2MXiU62APcp4btWsd6inR",
  "key20": "oPpY911Bz28wrjGnLxAxADUHnYQTVXYikY4X3Gurw3nJSPaAESdL42tx83AW1kza3TwudSUyFipipk5t7gtLEZs",
  "key21": "4onR9NpSZWGzX16CH8KXQVTkWR1cHwDUrBdvZoK6Vh6uU1Fbpty2aa9jAv7kG6AMRWcQLWv9dnv34qssosVuoGcy",
  "key22": "59ry39Q2r9cSCtrTqpYwbu83koScBekfhnuGYQd7aaAmcmNx4brMGajbs7E6SS7cpTiRc21b1iiiJCEgog2Jj45K",
  "key23": "5d3kiQYWYbh9MiqrnVJ546DvDvVFoEXxcBYN8Yf2n1AejjxY4piSSjDzoCt23gYRUtimjkBvD1QoPF9X8bvGgxRR",
  "key24": "3fZn2k8HeSJ8L1hAExZqJAVybyqqCkfNEmBgCqPxRrQDrzbnRhkwkxhLcHnCAafVsG9pmkXnYtCEKAAo4NsEELNY",
  "key25": "rwaHAzFqzLW1R8bdQBtXjEwxm2pVT3w4zQ5DX8CYLCwvZ1GXjXWqL4pCazx4GfpkrCAzkEMrMwcJZs3xw8fyCit",
  "key26": "4jg3nxiuwEy5oLxNE9pKJhzREhT8W6f7QJWkwwrSWaTMTQfAfvoen5MZx5Uz9tkC8ogLivEsaSUwyXd4XZAiyVFF",
  "key27": "3JDW946L3nwZ2t481dFf2Wv6Uf11K3BxioGqTnzLiSUmKxbdijRiEZFtPs3jFYs1jLn7yLtopvczreaJB1xbtZt7",
  "key28": "oJbASTDPLmPLsT1FdCgomgymsivUF1syNzyyeFTmK7qGEKpUNK5Hjw6gEhbneKLiR5mB6ag9D97BThPXwaSUinR"
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
