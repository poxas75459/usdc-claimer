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
    "2jBHei2Cvj6RbBvSL9BD2P6BfoJXihhq8KDDVDfrRVGc1ZZmojztszDV1crj2KGBzy3MqcKskq67NDtPiwUFxViE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HEv3mjzsjfJWmoTBj7GD94opyE5Zb88W1m37oxNegvNUp4yPAZPAGGQSbpsRiUNkNPvBgte8SHXHKNcud22zLPg",
  "key1": "43F2N2fwWuRsZvqcf7V4JUtwLoTRCHQ2mRdGsA3b3iuNjYnqcFKRsH2kFNpc9LJrYBoRFZ6q2EgypRHYxcaQyhJi",
  "key2": "2CkPEGPVuFGsX6UjGWamryA4o89jmBcCdCYBwjhWyDR8cHLVXX3cQ8yYaKJbELcoSohL4auX21KsrubE3H597jBL",
  "key3": "3Lf95r6ebFTuyHSiXyCrReU8hgdD7uMJemu5gxRc1RotN7dJSC9U26my34PdNXdMsEe3jwLKwcJaqbD9oUbqd2NY",
  "key4": "5Gv5MJKfboQFoMYaoDCfuYNRti2JHgv6UCwWDGjeSFiMgo6zNAK9DMHX97xaBjFnpzop1WzkCmvoAdBcYXCtUxxJ",
  "key5": "3V7xvwHWB6nNQ85thB2SW8qXv6xnU8SjUXpNQPzH4PcmXkVvKir7vJULidgZRbevkXVaVgEyXhNZsXXnQ35yYZWy",
  "key6": "5FsDVLEZ2VNyA9YqTpk1s5ptXP8toFEg74iXfDq5imKKUBuoVsqwZyZMrtb1HV8tUXysuarkpbvJzhc82CQmQKXA",
  "key7": "2zyahdWjG1XtgEqzZ9DwKG9PvZGuicHeLZEPwipJEywcH7KNn5RM4WHpLymQipvwdCD3RZVFAhmkdfvrw8BZsZN7",
  "key8": "63aqemANZ7WJDy71zjAJYE1dXSmyhmoH4NWaHs7jwmmrUL2KveF2NRKJa1rXGTJ11Vmp8gaoM9LuxKrUZ3YX8kwU",
  "key9": "2srhPxEzAwzCzGi1K31sjpdrUSqxkjBeLpDpbSymbWyWjkqNaU8hJgA85d4zJvaBxAGo1H3ucjumenzkYfBLoAsq",
  "key10": "VFLoHiXnV6Uf5xjnRpkR5sjvkoiPZNEH8Rw9wdwHotcAZPZ1vp7ygFgD9Y5N7ADYunHBsWzkxNRCvmgUEMauveQ",
  "key11": "2TRdw9VuUTw6Zv6tLYS7zfzkymDwDU9kzMUnWPGTHZ3wLqUo8k8fsmgYaSTQx2xEnwnP8vWfPNAq3W2TUoQDSAmU",
  "key12": "4ydvMgLkS5ckDDwAAMs9ajNjNyRDKJALmd8EnmdhyJENvGR8v4kFKmUosxjCosv743XU8RhrVBPfWcEXNu2Tezjx",
  "key13": "xRgu59YDymgkJx5mzbXqTNELgnz6ZHk7kuTK8L1Gz8NFdV2Pfccj9Phvmzp46DqvG3auX2YsHxSe2mSWHJ692P1",
  "key14": "62Ma2mvP8DdJmq9bR61Z5DTz5ugqwXFTKQHq6sEX92nakj4J54TF5UPg88gFZhDcdrTtdRZMyny2dbZTYQANSgmR",
  "key15": "QetQ2ExZ6p1HTuWfXBD5u2LQf2WKzNkF5fGFxBBZ7rVCzGGajMRF28SqbHe7jKmDPyZruAbAh72CsbfusvJ2EDX",
  "key16": "5JrSB7mc3RiVZ19WEN8jFqrGnFfHavVW65afabG77yjbFdGjCgS8rwrfK7LdaqR2Wh9w6GzUihdXnRfHU3QWJXcZ",
  "key17": "2kr5dHgww9qMbKaNKf1xKwoxStHWgJEfoVXEZuMbuVqaNddb5DL7hpriVWwgHhNEGbbrvJUyeurqohRdG1fvWkxy",
  "key18": "3Yf5JTaZGFgecbS1h8RHYnjTBAG4TijJwjKteuMHWdXsaf5R5g6cYCF6uouo9PKtpSzfPk2s4ytmKFNJJH8T182n",
  "key19": "4xmJUeE8ePbXncfq7rh1cNtXCy9igu64TUcwgZm2W994fAx9GM4bbzoRdrEjYhXSzXap86h1MQLASUq18Hm5VGzn",
  "key20": "5V3MiKoYDoZntJrw2gxvggieatqfpnJ3446uPcHjV3YgHuen7UcrB8aMZ9HdNVc4ebno3reev9swwujaG67MmfyT",
  "key21": "23RFSWpqNFX2oioLhLEcjgrJ2D9nEL7J1YM9T8ghVW8an3QDe4NwRBMeyquHUa3G7exEYEWguLXHSSMubQD1Q4T7",
  "key22": "3qjgUdQdh7tGuqXEiC5dJCSJGmBBnLvKfQ9e1QfVkLiJEnxurJbUoVfbnfPo3zryXGuRC4qNGut7GCfqdNVQVq3f",
  "key23": "xFLSfH5qQicTMzGBxKASpqDW3MQvH3SqtX7d5GyG8DW2f6r1GgLaKwNzSzg3rhBA4opkgSsGhHXKbYxs2gsnGXC",
  "key24": "2mZZgoKNxbz1yY64eeEwqjx63wpDA8WrmQXJL1b4SDixkEVyD5ChxoWM78cGPgxzNwK1T6xBAh8KD4rdQAFQXuar",
  "key25": "4s7dA6j1V6rd2HUjr2BBWjeDQUKGpBmSTCzB3DBP1KSSfsBp8J6rJfJJbE5wzGacpkCW9ZUodbZi78vqt1HqDiEe",
  "key26": "47LNUf8BkHRYXJmHtLtq12PkU4fhqAJzEApZripShesPK4gxf9aXkEibkU6T3eDyYa2VsjphKbqg8H4kSYaA4p41",
  "key27": "2jKUGp5k1W59RciCD1RzCiNtphUMhkNtD24m6KaxFXaVjE3Zt7nu9tDRfQfznsC28432mJqz1wrxPhTEWHbT8PL",
  "key28": "5QWMDBpaU6HNgKbotAvuS4rDXC88AdRsyFbpp97wJuSJQ5BU9WsRxkqyiSS667KuFrCDgcKzX7JvqnYw17gVumDQ",
  "key29": "28THdgjsL9yf2UXBEepQvnoWjbc3oHjTgtQeKro7jeo8jcwLBiv5DEb67EsQP6v1URrfP4e2TBBV8991qfWGFkpE",
  "key30": "3rAhownpEsjSMNY1rT8LxGtCB1dZSthNFLaHaocCjteaesqFDwPFGjbGXv5DN4ScrhYBzVLZB2UdXVnbPddnZ5Uz",
  "key31": "54MA5d6qW46a2TRiR1wqkrb1whyX1RgiSaLJ1obAbnRdY6CYrU6qFX8VjRRmGCWDpWGnFS63LpAcweS9fJiS3xgX",
  "key32": "47DvWA8XMSKAcPba28pEcPJgQ6Ztcv74hJDq8SGKJ9hvESHz3gx63DA4EMtxHMFb6XCY4hqCFdfbgQsUKDsPJMHo",
  "key33": "4fEkNTr5wz1WupyjHMnGvarU3y3AFwnncyUDXqMpG8vjcwM8Jjfgd5bPtzNJBwAQU15F4G591eNUvJMZ99MwB7j2"
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
