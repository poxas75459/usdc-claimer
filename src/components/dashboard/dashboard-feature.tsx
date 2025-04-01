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
    "4Pro3aXfjxtsR1mmhoSteBfeCC45YaPNH3hkLJc8akNfUJAmzjATZTCzoEusW78ptaWvz9P8WDCHTQquQdSyrLiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vrsK4GrgmDyeEC81YArhcTs3MxsBd9GarcAVF4iCWsee69VvxcrRy6L2ZXdmo6McHFrntARApywi4JofqboC4dx",
  "key1": "49gfBMoa5pzX46CDBC2Bne3DAwAtf7ubh2nzbRE8b9YZ8yiif1TtJL7cgzqWmAm1kwEVY7YnN1bhjhtG2M4mR4pG",
  "key2": "EZ1iWr7Qvn9QQGBntDJPo5wXBcF4LgcdH5GAkpSCg7zTGAeN3WdK9nd5KZNhJB4i5os1kWjSASmRjqECHfyUjHM",
  "key3": "5psmusvsC5wnVhoQq8s7kXZdYFecUtkwMUQ72pgDh4Anbd8E2Z9Qba1gHKcTBERyfFuqm1FJcxnon1GaDdZAA9FR",
  "key4": "4mk32SyijdNHMisEJToqdrBVYUJgfGn6MgSqE73zPpN9XQW8LnR4a1VppNBF2C532qvqTdYBfwYSqySJPukyM1A7",
  "key5": "4aMFGYpaPDhnh4At7P29qH7LL7JJsJ36R93c4Yve1DU9X4kAaiSpfKnJP9pJpQ5vgz6HWcAE5XvAexA859K7E1nH",
  "key6": "4wsX2h9GGL77Ms3sxeCmpgEkDoaapRzzt13q9zFtjg73XA5TnHXUkXPetzNDm5jZqUpmnEtSpscTd4KmtA8yFtai",
  "key7": "3RkL3UGS4EZaWow1QPupEFSPExYK9Z1JVUoGTg3oFexH5X9JXYxSQLoPw2zBAVSZSH93tF8QcoVqX1Cm6nXbsdyV",
  "key8": "44zuR6WcFUquakBvFWuk2UZ3z2iKfvT3fgYNwsLtA12G9PX4ozqdSCCLnU7b8FM9okAz1ZSSZ6qh7TrD61UCD38r",
  "key9": "3j7sRz9DKs6wgoDE3YwJo8UB2pjpTkZt9KtQFn14qKPhFiTR4gCcJCRCTbZ5XLiSGoSudamo9mW1d82Ci4eP1Y5",
  "key10": "39pWz3DJJ7ErnGDKh3kUx8vNKXVs7LURycBVcS8YB8ZvuRKrpCrenqAAQ5baVodVSe1yNLwCu3ykTzbMd4ydiGq3",
  "key11": "55JX6uM7uLR3HCAcA8qU5UwqiAikCmoeQxq8r8EPb972qPstsgbXh4x4Jrkzvy6JgAg29fEhNhPxXShoJw7fMrwz",
  "key12": "53yLGSCa5asb2uvdCmcgcB1xHgKrYndKn5PVU47zEEMxvsu8Fb3hPeu8M8nJpQkig2vJXzEujjwU1deWiX7nd6zg",
  "key13": "3XLPLUGUHYhLqJy8ErEnkiEBAt5jnnaCZNHZbzPgKVkjj8Lz6EqPX15uoWAuwzNJWkd5xDUP1LvRBgkWV5v5DA8o",
  "key14": "4LTAGE68fbJbzYxoSLEhbq7vpXegMnNfXxkVEzo3iyAxCuKXYwUCZZARmpmppJ3M2RcUxbdgiVY6YC75qDxjDRFZ",
  "key15": "4WM3xksNQoXAsExkYD2FyTNEomySkq1Hj8u6XPx8ceegmN4Jt3HGRE7MjDcr7UJwYrejvmw9efG6KMULTTj5bJ7w",
  "key16": "cLUBWqTYNnGCdWWpAuHDHLFZJke1AKtWfUfGWBBuuVa71VdR5vDHRWHCF99T8Y9jXNfsSJQC5Q1fZax66iKqoNw",
  "key17": "mgYExyARsyeKbMgrDZLfXi9yMvzQE4Jn31XAazkLsbnXTpCG3bUUr9Vmeh6Nzvn8jW78uZ7ZJWYQN4DS84vByAq",
  "key18": "fzyMrKVEQWxtiqxqAvxrwS2xvizNTzCLBWH2UvqUvMSiMgmtPXoz3GNm6oNnpsw5CW97jZT9apnzMoEmUYzSqYX",
  "key19": "2ukXJAb6G9nQQxCYR1dQFjizetgPo6ARMsze8eUzWWPgafFsS93nZZeQW45E6WU7eoekfengx3xSRZx7ihF9HDmC",
  "key20": "5mUNrYwNW99QF9gx7G4EB3MSkjjfbMMB8eQd6giUzNTqTQcXj2aaVntH7h3v9vRseFyxqFn14SBHbX9P3f3KKTs6",
  "key21": "CzqbpixYAgtLrBsCrXoP5LnnVcHmUZcMH5Wt2JzimeJMApvTyAdpHcuPCW9W62NfEVaMRiR9q5udBh2US7jaMjo",
  "key22": "3swDEKA8ELkjaE5bjdGEVTjcLkX4G5D8wsoXXfpfn1kD2mLgVxAHA1nVGjiHEhCc87HtqT4u4KBKsgUaR16E4hns",
  "key23": "4ukZ7Cxzt28d5PgEMwYFwaGCQ3kfFYyoycAGrnZgw8CLP25rXABgE8vNTP3vGfTufp7FLnm7h2Tqcj2tEwGSV3su",
  "key24": "3wj4p7cPoxrJtWVciYmGBf442QC23FVUBR1qDxLaGzGSaD1ytzeDjazwFprGYn3uno5xLVxr32kJoYqAHiqLRqae",
  "key25": "2zta9S7UeE5sR3A4g4ZHcbZs3XAHyZnSXrGC1mo3Y5hb5JfbGQGduPRA7t4Gh5CTcHYMABWxNn7jmKzMxLAz8myt",
  "key26": "3LcHpokarP8uoEGidbXVxhrH87bn42LTsNuQsBKCd9hKNRwZbGWG38VCjASuGSiBx4uMMLbxV7aaGkwfx4xSF7H3",
  "key27": "2g4yWAH6sJH99m4zEGQF4st8Ez28yCFfTf81iDxo12VND6aZrot5TnyMUwAg8J3Bmy5d1tVV8WFhMNEsaNwWjrH6",
  "key28": "tkSKucGfRw5NJ3vH77uCHWbmS7yRLentHhgGQVNdWGv2GgLgiV8vEV3GPPnZ8Zi8JPqtQyt2X9SNqZbU7S3VVwg",
  "key29": "4ucRBgdKoK7uCro39kif1E6oiBNBwRvvRZtryofskKCH36mwoTjs8BwK1uHJMknZtXpEjmC6AmdBcLTH3wVwsNbg",
  "key30": "2Ms3Qw7Wdum4JhDiFPP4NnoJGbHhDAQyzUQYZnSHRoBY6QCSk3E5JWkKENkg8BDzVtL3HDbHsA5FtoAhMVCqP5gt"
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
