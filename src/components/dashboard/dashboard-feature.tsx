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
    "3eVriFa19AKLMVTJcfWozwkYpxAznhCoi465YWSbnziY5wxuQTAjL8JwLiP7ZCSz7Q3oJdBBZo1WJhJb9cznaYSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EnWVpA6MXx3QoCZVXAeXxj6X63pDbNVDDtaW5g4UpaANweBvK2qFGKqX1qBrsGjfm61iCqxJfy4ucrCeiZcVP38",
  "key1": "3o45RHKxNxhWkLV94gMaFBd7QJsjSmyFKt2nvYiuDxgwtw4LQ9iaZBeSVR6kLrC7HN7CdG5wWs2ipfn7YVL45dHF",
  "key2": "eJPUZaChedYuuFvPTVkewfgkD1281yV4npXdAdjPAhvv1qM6N5Q4sfc4MKQ6Qn2KMQ1Yc7Wek56XuYcj8Bb2Sbz",
  "key3": "4ETrXFouqAaF1ZUccKF4YoewHSLX4AZuHh8CEqKTKGr4ULo8ntTH7LYnesQATXq52tiZxyFeTXznE43WJasWWn8o",
  "key4": "5Cx87UrqEL5DUC9CTBySfGtTTHipdJKPQ47ATGJkuc8VQt4hm1guVLFgd626vCaXPRDKcGskVkquwA4MVriHcLcX",
  "key5": "5Ft6oBE1hFqZLRdCErfwgKS3YwkTeiBcKd9sAExnbP4Q3af51HQ556UWEuN8dJuqCKMDt6GbBARpWiJK1LoHDd6F",
  "key6": "4yegsFPvGJGazFkGvBnmKypeF5ujnuyjiQUopDweNbci7PvggkgyZb5s4EwBgtorKjPUvTWCthjHuc3GGsLbpbhp",
  "key7": "ieXgLPLnCzTwbw9GvcDDwVCKYdRbBm7g2xBGb8NFczoFy9pKz7amqBKRy7tHp98yTXLSpcnysHWdhW2mA1kYQHW",
  "key8": "5Wv8F4eSiLsgAFkScAdqtjXwxHpmyzhru53MzAucsxMR4HaBQt95gWs1m9BfjJNtPm7RJwdrQXiTorTtMMyqGW72",
  "key9": "3NiaQMaoeDk2uT9HFawD9VA9qFMWzZNVQYsNTj1MQgdbh4yJzY7seUVyjVdSrS9iMvMtj2frxr3jDG9SjYdKufdA",
  "key10": "4ejskqskJZtuTWg9761sPKj8Hhw7apuTqjKh2uNYbrX8E8CFvtfDE9TytPRto3uoxWGHdAwDxCTpGGwGadcx9zey",
  "key11": "4VwMFtEJWPhqGHtoqhQqaDBmd7hyQjs6mKxh3va1iwXSZ1mtDjJLz2eNFvLgp45oPnrkoXJZDvmLirb3DkzkfD7A",
  "key12": "3b8x8v3NLngXbCK5g7FQuFqoabjEDRCD2sMMUEs4zaNpK9KsLsc42Ys5wmPSpqQ5ASvVbRhQyqkuiHYvLTW7AVes",
  "key13": "raCxQEHroY5WMeLDZr5am2hbVZnEmVFrG6zEtLQPsj8CgJqUAcwPW3BkRrbMy6VFZmkBue6uC8z7ThChbZwBby2",
  "key14": "5ARrtf9SZfqZmyVHNb2wLi7CsAhFS6RpafcgwgjyLa3P7wiHiSAhszZkmgyeKTTqs1hpAyyRsRwbnFW2epxzRVUS",
  "key15": "4Uh13YEUmypZQc47uHRPhh6khFAv93FBN89n4MkaPdT4GkPk2EFrQLfdzMK11LEgCQcGYiNzd6aMJ6eoQzbzU8vz",
  "key16": "5NE3kZdeHRvj8A432wnUPAftDcbVVAhPKXFZcusz82S3YbRH3yDSFSQtxSrw9yvw1v7LpgSqwKwt6CFpwm4Gi7Ln",
  "key17": "sc1VPoTVpkHHHWMxd4Q8JV98miEy84gpB8h1VSiT8ZW6aF5dehd8hHheg2Xua6XSLAzsBFxdb6c4hQDKLyLh1LY",
  "key18": "3uivzdTcQJsdkJnmnuarBHAaxjcdndVSsujZ7QbHnMPDiYnugDdrRhEnUCB1dX5oxBGU5Qdj12mk9eZtR8t2CPfE",
  "key19": "5qVk8uU3Q2FVLQYJNwE35aUVjEEVP3hYCS5AM185bPGV6AXQdCns1VQJT8cyNYeCiy175HXGjvMWfRjSAdUeZmiF",
  "key20": "5bgKFu9sHwACLGHjX2MNZhqUmoBLkwVsZV4c5K38PGe4VMbzSzBZiHid6ry59vCFPwbASxtf6MsSWoPVgHRuaqwn",
  "key21": "4KXVDyXWNnjpZzB6mXcV282mU3yzxVVnfoKcbYJXBrzBqFkM4hkVL3uvm4MMoekowTPvPcLArRS4iucQ2DZbQELV",
  "key22": "4r923c2SR1myFKEHL5A7otdnTC9UWpSvL3o1ZVB7S7Xrvnp7RbPLLY7wdRqHyPr4GodLbFLtLhfAW4SJwd4dLED8",
  "key23": "3BU3MptsS6oDUMkPvmuUjpht4XvnqaWYNieMQt1z39ye8Gtd6Gmwcu8gNw7dDLXs5PXya4fmVhzH9mCBUueAny2U",
  "key24": "AMCfPocg8GEbb9i9LgAtYtnKoBmfN3nDmxoky7xomM7x79p3JvMs7Z6URydhhnbrsLNsiP444bKVaaWwJoM4b5K",
  "key25": "5CWmx8RBUKP28d1Bu125Cm6q8NHu9wLRqs8ABEMZGiCZWXhwQb73sY6C6EZ8CJ3p65TynzYAXprPZCMUpN6iW15",
  "key26": "4eyRKA6rcH2Nq8RvmpLfTmU5rTrh95qcsUKaFkyNtTqZZoBKj4YrAdCskaeZWde9gcdU29jc41AG2NgmqNmbKrAP",
  "key27": "44ndV94vsRorA2KxDdx1XqYSBUZD6Les5mTrWmUNKYL6AYuXyRomjfJn3i7ZBvpwNqRxEXEcTSShkXXDt1vNwJWt",
  "key28": "4pkkCRgfYZovwPTnCBQEgoxcBY49JNgKCf8k5bfx58XUVHDQ6asYVrZB6seZu79S4yQFkXAhcZyFBz86AJ93H5Vi",
  "key29": "Mzk72QpPB5oKw2GjjPkupVujVgXE5eyLoVhMBsuioc3krjGBJE3DfwtVDxi3T9dF8g8BF63RZjozo47LX6bCmQm",
  "key30": "tf5aimJSSxS3YSUBgRTsoMBLBCXQsN6TPMUwy4nTvGRZPYUGsFHaH4GwcvrNhM6pzJjeLcEvTtBWDiyQbKqg7dS",
  "key31": "4DjWKH3243WyzwG3g6p3EGtZohExBYz6zmeLCdySZJVqqt664NzQHDqQ3hEPASU9CFxaTrYxkAfm1wUEgduUnggC",
  "key32": "2JJGEQpiBMM438NrKB21RHfMJ8xTDYDo8jaof1NmLpgvCtpfDNjkQhQvVFVgGJ5S3FACZBTqevHnt18AB39VQufG",
  "key33": "5CFjkfxYjLhTG5o1KtiEph1BabUqygrvZzCanb2S2iRTepY5BVVXDm9hEKdEo35iHAxyJPe9L1vyZ1HnAZjyEZgU",
  "key34": "kQf2YasN65RbJZz7gV4sXfxRk5sNLBGahqgLvkCHKjvmbWheJ21g8pJ2qcH2PtNNyJmr9kSboCgKVWgmk2ZWP9C"
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
