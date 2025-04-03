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
    "4gyqwHm7PhpveZKP734BU1cr1jSxJQ31h39NScEoPziAakNcxrhG5vtV3F7EEgr7s6To43AuCJYPVL6H4PsNczTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EszKJPR86FReE6NnxeyCHZUvSPBLExk1xxa8Lnit4khExn76pCX43MLPoink8PdUXnyQut4LtAJhsfxwnyPVrfd",
  "key1": "3fyJSQaWmxBmA8iF8H5AW2oGEcPUTaQspJiSKCARrfocCKwhnSwbTvhjTavQ6VninChqKJ5mBcewdNmw92MoDpnY",
  "key2": "49LdioxbnAK4qk47vhSaTZjoKBcVg8LhVbSGe67oDKk2bk4DWPiZSpfcSs6qdKMyNUWM6x1vMWTBXbe2mdWdjSy2",
  "key3": "Kuju8Wyy9evZmuHbKv3aKqPgR7dyoCxzoJkuorr5gbjGqKRZEwGQS2LGjvUtaXeFpjU1hUMmdv7fa1Uuaa8WQvT",
  "key4": "39WTEBKnUQx2dg8dRgot1fhd5gyR7E8HGHTv7ufxCQg4PkUE6T6ecDw6St1YMtCrWArithjvUqxBy5LmicGUtN7S",
  "key5": "3ZCJSxyhAhPsMifCcSdhtuNUkL9dHTtHc3pMUufeyoWKuAnJE2DhGGbkpn8W7fpUnv2MrUrvi9rqTJhhGYSfLtpv",
  "key6": "3EA2P735qwS59S2jAsvR1jbwnmVPBzMyaVtYEBzDUWcfHPfouwwP5h62w5QwXwQ9peGo7VPY5iPFKecSEaHyzYsk",
  "key7": "5P5Wynz5T3wKFgZmnKDHR55P72hs1jzgJriNjZ9tq2LXsTbDjNFecYsR9yEkubcC4xwpub4sh8PnnoJcSLXxDezH",
  "key8": "4BHvohjPu1Bhsh8AWhr54yXN3T9MLwjpg4FyUMZW6gTHMATAj6F7cyUHKvGbeeFKT5Ez36BDcqS8E9C58McbCMM",
  "key9": "2GzMY4xFMx53vP7HVnTdV28ccNUrsGacmGTRvCVQujxAiLJCZ3fMet3AnviLbnxhfBcqqBZui2eB4LedDHEbKLCP",
  "key10": "24uo3ENJHRcE35REVY1F7RHWmuV8164m3ZfYvdySThsL6nx32ytLBA5gbJsX6WAz6X3xHxAf8kks6VzHzf8cea2G",
  "key11": "MCCyDJK2mVCLaiFjsTbmYve5JUnkFxRrNdpT8RapPpHpbMyVxx7MaUxARekNvfGWiw8WzaiLKvy4DzhXbXwUHTB",
  "key12": "2b5qgoby2PhaDDGGyYiQc9wcdbvhYBdPhvYauV6aDbXNjYNmK3hnn1dseqRqTutQsPWnfLSAyzeG2uR278hJLRKh",
  "key13": "5kpSx2memp75EXheESCdb22uG2sQ22qByhzSqvcktdcQ6PZ5Hqk9KUp7ibSvP7B8wHsLxkbmtBbVpV4ohy8yCVMA",
  "key14": "4kcdJ3819RiWkKMmnaf499YphaDVMFGDaUgxUzn7AQHYABz2LSQVo9Wan1KCvcH5H15oXh9MdXE2gKr7PMDr4tu7",
  "key15": "3xsJDGiwtoMNLbAHx1tGzp6oGsu7Mhi348gvWyvRYvpYAiWWPnQJRbWYLYY6rn2ibrxb5oxLMtcHqrw9xBwMcXQn",
  "key16": "44GxP19hm94jKGEcuPHRtAKrqi8UZDT9C3x8f6iqPcpokZNwcA2i6EhVaEPTj6aWCGMcgf638oDBmvyRE5n2Y13E",
  "key17": "4amKaUa8LHCRGUXKnhD3M71qmGhbsKuuZuK7cdm5RG5QnoCGLjLrJTnedTgAzaTVdcybZP5bjoRvn7XBpBmL4iHA",
  "key18": "3Ya3gH3BquzCE9bzyYA3Jq3QvywKfC82eEidk4cJDSq1c89GZYbCeTu7t6Z87xGxcuxW4dEejEf4oLkacu5g2uTj",
  "key19": "5o7JU8LvA4pEyA7tcXS5RcTqvzxoPk35yrK41dowmWrvvPk4oL5sr8wuuXtN3x6fBS5DFkaeQx1zHGNPmkEAfJVr",
  "key20": "BYVdfeZBZPHEoFHW5YvQBka2N19iBogvvS34jWnYYvmgv2fXj7B23LNiWGBmrQWumJiD5eJtK9xqDwr6m1ytq5T",
  "key21": "5QJ5pvchsAqN53w3zzVv8MPUTKjTS7bmTdVhGV4eKX3xgJMrFoqJoJQqCzA3TRyc1cTRUmUysVcYwbVW578GDcQJ",
  "key22": "4j47YfX53wpWqeJxv9umQVXi7YsULTLwJLcCTybFgkY5MkQwNrMKEEoojnorHVFxTYKBHjwjJn7M3axrUtSqBjD6",
  "key23": "VaEEiDSp8fQYUiCFBakvaSVvqzv5pZd73HDqdfDWwDeqtMGiqCj8T1oNkv7WWaEok9QJAxQdD43gogG96Xq6ueW",
  "key24": "3SDrShrDwAm1fnodrpudfevp5bAdy66yZ4QKXjd7CkiTwEv8qeKm6NMQKCPKiq6QYgGEg1ciSMrV2nqH5YCyiq8a",
  "key25": "2o2GpVs2MmcpZwF3gJrg4XHdEYXVNfF2H9z8KXRkhdWiJNiUBHQUhPrXn9BSRQbRd5UP1m5TY3s6uaRc4ZFeJsYu",
  "key26": "2ZJ2aeyhfgCzvCoAKusy1XnGQiossTNEUQhyKQMHL4BFxpTfWo3rSvNWWPbF5cPwJ3iscLFmBVEN67oLaBawvS5k",
  "key27": "urg2rjKLanjczhpPSXKrgQv4kPLbRworDcEJWNQUbqxuKVu229zJh2ZNAhJutx7UqqyiRAUdqQq5gpkEnSj6AFB",
  "key28": "5A71RJqHBXytpwtVAHiMNgWoUcZ2o7rahX2wiama1NZ6ZvkwSU5596p8wwe4inZsZHYd36wiGdcKd2sxiNpwU1bZ",
  "key29": "4LkRYoBpSxVcKCxgYsgGJ1aRCGDSpLEEn1Lsbv77K3zDkmpx7fuLmEjvb5QBAj9uWr8ZXBTBBFRxfUn1dgQ68v9N",
  "key30": "35RkdAzskb7Dmrt4nYSmU5jWy93AsbyMzBgZn6YDPidPD9acHFJQUWhtD6B57ZwD5SSfQYFascmBNrQm6TpJ44qU"
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
