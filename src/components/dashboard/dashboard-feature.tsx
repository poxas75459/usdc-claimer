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
    "4hm6uEvT2uq7UaP2VMCK1EohZK8mjQgx8VojopvqCm6jtYrKHPuwMsCquGRbRM3p83frNW5dBE2WWb3bN8ia5WzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hJcvTbMKCPCR7ibhpwKmy5moucFL1RDBcg8CAmDz3UHFtPKPo8Fp4FWaXpwFxKWci8QhHZQxTbqnEA7qWkiGrCe",
  "key1": "4s2LqJ1CFf2s45zzuZ9GTcqvY4ZF7UQqFX4DBSXEAYbKCHQt2NcJUok5bAqYHzvSgkKQfkQZ3ytBjyng2b4YpPmp",
  "key2": "Rbpm6NwzfjeXUWpkLaxwuZdBLvEUHKYjtUkbjmJwKjmhdTWuRVNtvFFFLzUHrf4bMwU8EgVpNHyN3mcHLkiaGHF",
  "key3": "3Ed88bHzSfg26NAPgMco1eWUUPq3r28UBv287N7co9b8SHTUNzdqAQcsb86BXtQ9r4ZAxBhkjidVssPyLghWYW9K",
  "key4": "3pK9xwhghUgrMVyv5BRx9praZzzMCTRM9xYf2ukx4aJ8LQBmbKTPaaR2GSqgULkqxHyLxeq42cqdiEw4u5vpRfuj",
  "key5": "3URegVBi3iMyRw9ew6T7Ay9to9LMviPFu8f2FfagN9MS4vfxFimjXMi1xC68p2fYqutdHT75pVv3YXDUngNKNx6R",
  "key6": "i3gxTzntrSiJ7HGkEgd7s4N1Zs59r1b9XhrG78jD8LCSrQC6kcej4WsWGFnvs7y7JS1A9iy2g6YbvJaEyZSihpe",
  "key7": "2D7N1gkbvrzjiHJvHzT6P2zeKXrHgSd4w7keKwinNEbB6Evf7C3m5rFTj8RFjTEoxJYqX1rWhK4QjChLpcSSWchc",
  "key8": "69JUh32suqhEFEKg4fdfwEfBFBaVqtrSY9ZaSq2zwQsLquvDTnvbbBmTf1ehtdfmYnyEqQZiaQakJXxdfn5Wm8w",
  "key9": "PU1K8vRB6hMGqgEHKbUptgRswFZLkUffstPxS4AsgXsi8xNg6mM5LNPKAJGVwV7vLF3Vv69pQJUBJxgaJkyjq7U",
  "key10": "ZmFNwy6AtUwi6KUttWns1VWHnaokEK8hhyiNqUPubgnQp4p7sakJLYXHuAeQo3guZJEsk17FZn2bB1RDjGG9ECn",
  "key11": "4RFmYmZ6qQJroCDKwDgdvGxAnHBDofrgiyjnSuNiZwGns3ExifnatKh67JW8C1z3Wfxu9JMdGFwbWPNodzMg8BMp",
  "key12": "5eVp694BYw49UkiXWiaoh8vG8V1k7DUsrVo4qEtJyQfmjHjPFkPDbLJaNvBZLVPVbqKR6kU98MtwVqXtBBUfYu4n",
  "key13": "4b98iLqsvAokVkybGgczb2xJcxKN7ezByQEuirmWQMqiSvSztcJMDk1ds3LyrXUpuX2opuT2yK5S61iYSXDmTsNg",
  "key14": "58mR5k2z73H9hDwQaaaJEND4nJveVukY8nBzcNezqs5BGZBQ5Ctad1TywGBiku95hEes7U21KiEwdP9rcaZuM2eo",
  "key15": "5ZWeDmyn6xr8Ns8yNcCCNFf4Y1F6fJCCLiy7JeSZBVnnucyKhzqi1J3gmynNBnPXDMjFTE9g8cmrAecYPBUSAqou",
  "key16": "UfzSWbgTt4gqtBEDttAe11XPdwa11ErNpAMms9dMoFPPJbCzF2mSHjz9i5Vx7uirKnGfsGwyW5bBEKBkeC2NcyU",
  "key17": "5vHyyLz3g3TyKA5KA9zLWeGAtBQE52TFs3gJJ6Z6Bf9bkhsyVbZwNnWtEnZEqP4ZtsHozAYWJjt2QLrngk5qzte3",
  "key18": "Fks1uTGcwPkdfgZq63qBhGwY3kDvdURWrzUCpvmbAxEkqSSRPhWqmDk9yuQZjFA3hyifPMVBBuyFsaLjk3vr9dM",
  "key19": "JGMmErocwa6hNdhpvpMVqKLG1e9Pa8N1Wa8RBFixApDHhT9gVDfERSBkbjtVFtdEumKRaDkwNKMRmJSnoMu8iM5",
  "key20": "2tkPLG4eHCFK2uQJi8NqRvr3oGiztQpFLfeLb9SmgYXBvxKoBnhVxS3T12b8UKAspYwfmT2fvYbpgLAU7RPxxUrn",
  "key21": "5pyLf3tHLnkcE59ceNAYBisppr8MVK75FRAqunWLFeGZMJ9piK93tHxtTsuD9ro8sNDtL5bo4SiDrBoeX21PqMLy",
  "key22": "4nmRBAigAVn2yf6JGyW2guPW5LpQthean88Z7hC449RwZwT5pBYfw1HFgsNbBgvqTCigdJbaGxsD58SmGHRf9KxZ",
  "key23": "5SBmRGvq7ZG8qBmqaqxCaUv6oQXMe94mnZUuQCbe34TBFfFrtBxxcNgRqoaf5upuCKU5YiQqo8HakUEiDLztiwhY",
  "key24": "2jyccMJZ6ojwRfhRfRekcF6SUKxX8SJHzGmPLemSCbNQRy2bb3PcztBY756aCt2xi8Ts3BEpNYq4mjZGnqVxtskS",
  "key25": "4vNLx39f2NgU6HTzXSsUMW9ECYoGHzX9izwy5wQFm4FZ2bdN9xJzidcL9LiQSr81bxmdT4Muu2aesrAX5WsRZnNb",
  "key26": "22i5CFDrNJ2Q438Zf4G15CNX5keWacYxf58k7tYQs4VMCEQXgXF5BUigSyAAnjUb7Fr7NjPJZiBpQNADysNdjszJ",
  "key27": "4Nx5kaLzLmzz8P2jddSZjbuH9jc2Vi5Tsft1FY9A2y8UHedQeLeWk7jCabs8drL8Y4QFGBrqxWy3x7YBVoz4cVEg",
  "key28": "2GFUYcvydAzzYBumWBuv2GxKgZHVqZhSZsGLkWTH92MGQc1aC4qWbYToHESeN6zT9MaJsVvJfPFyLcSKyoikEVu9",
  "key29": "3GxSUoFbBWfA44EoHFqNh3eMeXXUjSHRN6yD4CVPN5MxDzWfthXzLnzGH3ScFBKfF8MyRNzsVYXUP3peYv61zUkk",
  "key30": "23i1Qm9CwA22wsx7mo5hGx4rUny9tGKRu1cJPrggLw4YYQ6GJrBHmow6DMvWyU85pDsmzvG3ZZfr4KSLXXM5MviZ",
  "key31": "2boueWyadqw52iZa21qz2n572HCzkAfN52faxF6V5CRH3ruHh3uvb3B361KdugTtMMqKhq2hSJ5phWmEKstQ9dZ9"
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
