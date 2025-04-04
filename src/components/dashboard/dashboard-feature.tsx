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
    "4TH4q2u3bGphjsr3nVDiFMBDycTvKB9c1ahcx2zimRAMvND3Nt5PDAVduVsDRKJ1ZN2qxaZJgWZfWd18dNvaeBrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hbaEJ9BCA4V4R6wLySRvGVrWCVRXQZHpTE9q1H2qhBq82roKbUdcifFwfPqKrTCnCnGP8kSbQg3PEXzEY7omBec",
  "key1": "4fvJUwGdnwHXJCHbMNP2G5cbZ7ho5zBVAPRNvUpwdBSyp6y67BvLXjNUTCfUrepGqrq8C4crvaso75AfEW66gV8a",
  "key2": "A9CtvLpfGY6uhDY8BfEJPJGpeUJ2R7BwXZWfPabCPLSYhG48Azzrvs45PMtUmc9967TEEjA1CkXP6hujTzNv3sT",
  "key3": "5vE11yoDu4WCc1PsK8yfNC8RDEAH48LU9ertVBL5ZVo6vPKJv3pLqStGNQrkNTguHtyZUDa5bTH6r2W2nB9YQCxr",
  "key4": "2uChSUQ1Pa5xyzD1cNJGiRreNDtYDh5a6PXStXEE5bYGSe3bEMKog57kaojRhvE7KoCa1Q1qx2pnteHs41Bfu1tT",
  "key5": "4MpERaMxYFHLchAMFw6ycYav6B6QLQ9839FM9pHAzLNwGXJEcdh2SQKddDBnY8xZVmSR79aXmFAD3XqbpgD893SX",
  "key6": "3VyDLjwJjwow2NPpzDHswByyNoiGEDHbwV6abwrzjqfm7HfVfZsF8rzTGeVCuc8Cf3ZYK6AcEjz3txnehQQBEKwE",
  "key7": "4mvD7fX1SnppCCCmxgw2jSCp9EdU8gmXZA81n3TpyeoWYe2Y2FtnUQt24tYRUFdGjsu9bNob5QHZWWbGNGm9bZmM",
  "key8": "2NhKf74vnttHgAQa86iCQGNuXmeVcTQDsNfqUrzaBNHMUzK8NqLkPtni2aF9bTyruAYous27vY6Dd5V9gsg8qS9K",
  "key9": "4fdTDFTZscC1JUsjmbv3adWzApZ3KZbB5UXJsNnbP6393mDdRhiafuVFB2jgLK3yWm5bYVGN4Qf14srwA4Ftuwen",
  "key10": "4CxyAwrGB8tUGcNb4Z8rtZJx2uy5w9B4JCmjvM5AQ7s4aMSJ5JK56uG53vLr2ztgxvZSg6miuTXQdPzLS8Norx5m",
  "key11": "2E8MLhmFNfRRcuHPCYd8LHFL1pjhmgyx7wNypQkbyZYFZu5oXvfW3x8sWMoF21qK8oFkRTHvAaEkzHXWBpXFrHjo",
  "key12": "2XRW8tW1dPzbeTHFEDWSxcvf2yYYa7NkpDHnqf6zYjM5xGM3cR23SY7obsPRJSGwSYoFyeqzyHobBdmYsbXNVAm8",
  "key13": "5nxWrBJVS1eDzQ1C6pwz9xfUf6dqGojdWLbpFK4HJzZuwqWWtAHMvFALpikfQ26ZkaQ1joXfWHdoZ5kjY6yyni51",
  "key14": "4xD2pf5awGre7uzau85hkGCBfRowUPPCaoknpUddtWJ6GFvDhkd5kZURQNgkDqdGXG2GRGjbUYubihcNXvZfd1oa",
  "key15": "4TLG8kpq4EkBU7rhQkFmHjN27oVyEoRDvudBkaXD4NRD6SEFZwGpecNjc5pgSG2JRGXijgoyvgGY8HciCPH6jqHV",
  "key16": "4DMJ71QzqATW35vEccQY6MMCx9z8JechWEpeaC4Z9T3bYWf4PtXHQJYiJqrzsshRacNuEyUbrvncuKptMgk6aBy5",
  "key17": "3Nb7nX4EeDJR8K3WbWsY1XM7MGzpKN58VJsuJhKMDAdVx7Fs56F58PQoNHcdQYV8WvEuRViCMndaCHMMKTx4MCur",
  "key18": "MtrXGmehUqBLDDoiPzbJDb4xK16gNy2Z9hyi1qpzjsvfKyCyUjmySRSZ5A2PYaQ586HxuWgxmoNB6VF5iRG3ecx",
  "key19": "iEMxiYvhk9tC799RuGiZRXMpvqHJmcDeXA7fk5TwV8KS9Cf99zELVxrcFoDCCf449MtjSU7pFAvVSRCoow7WaCZ",
  "key20": "38EgeFtQn1K7XCEoTkvzCS6YunzF2WWLLPHnwqgJbgtgXWJv4vKBc3bFUxvos12SEHNX2RwG1PxBtRRLtmKzecpP",
  "key21": "9XwnZKdLiF5x53AH7KdrLsh3ztHMdbLPZ5LZ5ukeWJTHgE54N6cqSaomRPw1swdEp2jsXYSPrKSFxGP2viyGH4F",
  "key22": "4pysMM1vfAg8ykxHyas8zApmWWMmXdSQH4V7ydakdvCnZCuKZ51kg2sp6DtzUP8xQ9P7izEue7cSckRcUFhqq6de",
  "key23": "pTPTBmTJcZ11UW66QbBcWZZHBsUmKczB5JP8VQbKDS3Wp9d7S8iVjnesdXdueNrQsUddwHwwsF9VvRb6fuw6Egt",
  "key24": "5Kti1QGg1wTA1aYpvpxNN8zkXUSmddUYauPVLWz1KekQpUegkELnYWsat2N67LHsspGXEkECYUA8hi1KuEZU9WSw",
  "key25": "3g2e4ySbh9svA2A1EtfA6xH5Q4PqPA2mdjYMqn61LnxBXJDWiuQsByZ3hRY5YQ6ua24YVfSjoZtdPtjM5C1Dtf8w",
  "key26": "2rHtNre8NzaWrav5CkSvCyzNrjWFYi2vKXTXNaBMycgDENbnvqYyNmXKxisNVEmcTYAWz7UpjNmSuCZ3w69mZpnt",
  "key27": "3fLyFpiDBrqFgMsJuYJwMVUNyojPujHnDy6bPxAKGvgsjNX9Evh5GRg7JRY9HECBfqy7waoS9pzVHu2kRa623BTJ",
  "key28": "46RtLAHXyXBEJ4tpXYXYFkSwBnM3WzLvdfeFjhazFWAc8jHFQAfNPhbAdaGTw3T347YSKZ7ixvm4yTZm5uWGRXVd",
  "key29": "51vKCwZ2WTSa1GDNUdd6EVNaLZKcFKy2ZVACRR5UUaQRgkSVra5iCeijppDuz89ezto2yy3zrqxqAkefqRJUqg1o",
  "key30": "44k5Q6pz2vDERjV5kBnDxcQW8yGbce82Qe8ej7dccq3vxXxGsZy5xnBhbw3E5fqytDmdYhcmPtvq5y3a6fYTb76N",
  "key31": "5Gq3MWSD4dY7sMPYZFAr7c3uZx3g4auWG2im4h1r7y8YGC9iwcyUr1BRFmfTiSqT9Ez2d9MUCJLCdSCJovwMxVCi",
  "key32": "2R6iDAv9GdjjfJFqQ8PHRxxxdczFu95asVDjmgCErvveaYxJnPXjahottKNhH7UbnvVBhEhNNp8Pa6haFz89EZCo",
  "key33": "zfkH2BQ7pSKGFATMqANBjjh3Ea91CHDMu2yV5rJAK67YCM9PzKFaaXM2MPj1GoLv8cL6cJpFU9FqKNYRhWfjH5t",
  "key34": "5yYZZY3Vjf7R2KswXvhU3V1cFVtfrZsz7t7xVaqXzniyrcyy8hQ9tdMGjeqLe8YRafpHLKxeDjH37RxvayBs2hDP",
  "key35": "56Nnn7dp3Kfq73Xwdggz1nDF4WcDZaA17zbSZpNA2DJEgXjvrwmLpMpaN76TeEfGtaGedyVKHjNm7Fz1kRMTjaKn",
  "key36": "3PMC8nkTYmgzdHJBbFVmp3fQEyz1ZEgG1T6nVuqRqE6BdXznhtfhkzjm8mkjJkcdNMevAWJ6xMBJqbfeaL8E5oRr",
  "key37": "5os4J6Ta2G44aG3mYgwRa24hEFfi7h1u79jUfQn9GBDyvA5Pi5GSJCNfHgQQC64JawaoGgtfum3ReL2eiW1H2S9e",
  "key38": "25cRgnaVsDp8U3QP9sFuMctJcLWYghXwTZNCoLmWoKRvzN9gjpSbGXUmhbC1TruSD21x41JYa53dpHdfCNeLVPY5",
  "key39": "pisjFHYmjeSk5GmEHFHmbZe7FKRigmZkBAsoQt11bRF2VpaL573fZeEeFz3isPckv6uthBmdtfWJhc6HyUFYEnj"
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
