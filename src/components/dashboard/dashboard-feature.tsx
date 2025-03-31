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
    "3DtLpNCv8GfwgcBUy9CsiDsSNcaURXebQihH794eThhZ7YEQZaD5uajyaqBSs7eNsNiriXz77r1QmnBPhbKvQzAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YaEra35Fzcf4UADLRfDNTu86jRQa5FjtQFtWcofk1zyq6M1cHXF3TCQdLKdARouBZcrbDqwLxYE3LMtiGYMxPwS",
  "key1": "5QVkFqJf4Tg8eQJcFJNtjZNFjUG8aR75zoqF5NX8zCw78Aab5KBV5xu1UfFWeNNsifFMpJ8bbcqYEenRHxrqznHs",
  "key2": "3TkPSabWr7chzKJFttQYJmVUJWvhWS4ByKLqDo7KgYtiDR61qKi4co5PPhXDCKmuayVCqpWQExea4GXf34JGx1dM",
  "key3": "4eJhTGytg1Y22ChLcJ72Ue2L7eGjAwkHFrgWpDNqjmQqR7yHjCLhHpGhcJm9BCjzTWaDvgBad2M5NZ62EvhaGMvt",
  "key4": "5qjN8U3tNMTsFqcbuwK1bnETqiHQ3sfncLLKk66jBPQ4E9qCNpWak8fU3768WapB73Q9DTUiED2HXmweb6JETjYo",
  "key5": "4V9MZ2qTcLtWvrYsSxogZy2UNnR4otgRYrUNMh3BXWizex3ffH8gFqVefhHuHis8jWXGqgR5z3TGvXt23bBX6qpB",
  "key6": "zZBj7esPDjMQ4hCZJyaXdLHj8J1ZZLJ7dHvAbF1pwgFAv8teJYWYJf4gDQuBqRCdkgV5RKYsLtUDw9FdwkueU4J",
  "key7": "XJqXguAjCpz9fu5TGFG8voHjaQw5x4omg6krzp1P8hGDvExDHRPLKmTQ9SQKtb5H8LGxuJqBbVhZAckQjNsn8yu",
  "key8": "23yvhRds9tckXLF571Qma3w8quetNNWnQNUMrnn3Yv7tLGVYJDmWqYkwpzsgViAviznkBwDuWBagabpgiLz4jgA6",
  "key9": "2f94NVtcuMd2MnYhPhQJNde4Nbh3ifLLYumNiD2LtuNF6BKbAns5ZgN3QzLvCD3fpDeVNKkJgqo7spiUx9T8iHqC",
  "key10": "27QJiZcjBADvVQiFUMvgSE4PBbnGEXTT3kGc55tUQwosFg1QygX7Px1fHu664XNNcLBksiAZhoo4fDMNQnariYgM",
  "key11": "5oYrfiniH7hzvvRjUwypEQWfjfdK2bXtq9M6spbXrJVtijDVUdKiX6Ew1n5vt47B1VpowChTH4U4MDC2zBETV4Bg",
  "key12": "39jieCh62ez8u819DgX6PND3QYRB71ozjMZ6UoKHU6PJbCssbTGs1Ce8b621K33Us8Fg26Tsru2tPfqgUPvBzPvK",
  "key13": "5sr3abbnvjaUBNQmvnEkFfPm8BnqJenHUNdTgPxqjRPvwWfREJj2rkH6bKbRQrD7D9ZU55w9zCjDiXJSysM7FxRS",
  "key14": "2Qa9QPSsu8nJKAjiBmQw7fDpesFpNbQhbg61gWoNr46oY118AfgHsWrn4YQNv1DxYbmzYyKAqFqTBRibrjwqKJC3",
  "key15": "53TjEUMDxSVkecPvHs9tRt5fhXUtXUWMD8jDCBPM71UdsMEhoXkqmWFHgozxyr3yvhgPjiMuXVhD1TNogJF9rTEa",
  "key16": "4z4jYA8KtrKnURQ13RUqGG4j5i1qTf4SW5miADy8PbX7Ja2yDMZBnYnyGe8Ebfgtb76VhQ5UvBMnokgpQDgAa1zB",
  "key17": "4HD4LYQ1dpQaXNVMF8rEfUHgNdpGMQ2p5dP1erSXCBmnDfVkKNj2E5PfS7AeoKxNTxr4p8qQnfzpypAZpuxyJQCU",
  "key18": "2iYVNQb4jfHLJ5uqiMaJa61sVD7LdB8jaabXWMNX3MNkRYX7P1AKZQSyucU5Jej97hEWoyAFQiFiSL8MtobxJfvz",
  "key19": "2Y2PB7rZ4VYiK1EBQRHMpzM8NZ66ExFgDr9QMtEgr7Lba7ytDuxobxWGz2jbjbSFwz5PTPLTyJugS12XLT2hotqT",
  "key20": "388raXWw3jancrcAvuoCYheA7xAfguspaTm4UD9ixzzNfzgMNcpjuJvKCLhSgmyXyoU7PX3QrBggYW6YgdBKh2Zp",
  "key21": "2qG3Tbi35phpUdCmCdwn1Qt76SBTjuVse4orBVcBXzgpSoPrBwvpz9WADy8bdJE4X9zbJpNrA4VKMZMgigs9He45",
  "key22": "2GtDVhVBsTY6BvQPFawf9BQ85Qtx7jxvb6zVC9coKTtf7fm2KEjAeHJ58RBk5VEK1FRM7MoZWumbpJTjAv6ueSSZ",
  "key23": "3kv59rfiHGXjqhVfs7Exf3G6vo91Q3BxN1dbzwpAvdjY95xFXueWD21ia84ATbKX5ym78CxRg8oxm63QWAUr2h9C",
  "key24": "2fUNFiWggbAZ7ZTeGFwGKdLz8xNQ3JhDT5hxfPxyxM5Ngs4mRTUhVRbEnRBoe7DAMa2PrHytKTU4i1urtSke2Efy",
  "key25": "3zCm3SG11shgjUxMM8S9uJuoPLYh9unoXaws2SbkjGkmCo5JJDDCxvtf68WACsc5SKoiHC2N3X6zbSEUYHCzQUbM",
  "key26": "5sMMp1rRAWNGeTC9SNvXVd5ehHvsT3ipMuwL1V5HDu5tX9MxNaU8wJrHhKpNEhouRjGnd748LuxggqnpYa1pnhkC"
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
