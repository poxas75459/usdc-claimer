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
    "31tghTLu2xPyQyfcEcHv5Gni7GK5R4HPfJ9Ht7pErxjQePZcQjR8LRrZtJ48rah7fRLHUoPgittTQamf4dJW9RRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HwunaXikUe7Ce2d2sHbagnU6LD1YgjYLa3Uh1EKKiyZjVQ59yaTKzDdW4KtvptmsBsSotitZsSQtNdyxuCBTttj",
  "key1": "4DwtJHNrt79FvHFEapycBQy1c9srjXJDh3VEdMwxbvT1qYEuk2hA9rY386o64k4mzgs1XMTcaifv5hiVtm7ujxsy",
  "key2": "2qov1wcjhfGNoYm1bWAwdbANmeqiwHEQXQCmUKrf8oQWRQ5E9yqKt1LYNmmbhJj5NHxDCy3zabQWpemfNvjDc6Em",
  "key3": "2CQXeobin73kE7uAHxWzLRVugzL2PPdqtFrarwGqxkTPLvscENMx9rktrB8fDbPeDVwEUqW2u3HpFQfTwhNUoJ8z",
  "key4": "2NdVuvsuf5b1EAQt4jkWdSiGRCBxSkBgUS86N3i61iJ3UHF5xkD97qKXc5FmXbtC4speJtomZ6Lf5KnkGYWHa5Gp",
  "key5": "5ah1b2PKsa5K2ryKyzjD4AhFS4zxXCxGYMwE8EvyKB18sXruds8DqLUgRGX45ark4ncr67U5QxwBBd18DBW5HJgA",
  "key6": "moNwjastGZNmL9wHJBTdVvedjPARZKCCC6LC5Q8b3tWy9YKFcRW7PHGem7XqKScZdvDMiGFzRXzxkVpMGfeUnvK",
  "key7": "rCo2b82diubxG3UQBdWYfcS4owBFyeeA3BUD8nEmS2Uw7b81bN9D42BoJtXsweomfyw48vRwThsPuQqNLFDAYWc",
  "key8": "3YUjH7ZR8GNU4J6giBSmf9x6SDf1VipumYCfyfqL35XY6Ep6ja8vzthAseiprFXqAFECbFHjtCEQzQZ9MjT7bANP",
  "key9": "5n7L8vdG2dUCpqtGVQRfxXWvKkths7EQMcuthQ3tyQrefR3Jb5bh4J9mYcmakLwxBSMd1hBGPb95vh2NY7crdGqV",
  "key10": "3XiTTPzo7hZs28Smy6zxSghfFchoYB5GCEY1G1GQK8aZCGM3xgc1jMgK36xBBRtPiGuMM7J6gPVfY8FLHp7Biqkn",
  "key11": "52ytL3dUSw7Fed3A95i4ddKPVTra5BeRsU9SwyXGFK3nvHErTnxd5Yo8o2rh52qVHRUZx4xysKCihdGZs69hU4Kk",
  "key12": "22Ud1oNbJXrCk2chMRney7n5omaoRKqLyhDCeCxugWMbzHi26Ka4qaqHp91sauDoSJL9Tugiq6L7F5cn3D9nb7w2",
  "key13": "4q4YsYofTjD4ehAKA5cPvn4hgSAfyCdNuB6BrPupfaA1GXAsd8mMXkK2iq89p7hvVzTzVfqDY86zp7MVJcYHUq3x",
  "key14": "5cBffV6Sow82dcizg7w8sQ3YKkXNMgcSKysHd4U6P4DbLNYxCXeDjVDRbwdwC4xBD5947wvhyBNer5Kkh9ah6HMn",
  "key15": "dBG12ZaSwdowboUURwHtXDD39dPbqizQY89KWMQsYhVjgHUAHJLw14v1nwaoMAZDQPSTbDjhKsBn6zQ7nBGTN9G",
  "key16": "3bRvek9xDTrM2GtJBziM4iPnFLYHHLrMgVCnvoyrejLb79uiZNzstCPzbAhf4tmVtkyvEQiuwcPYdJzVBpdgZ2tB",
  "key17": "2MXqXAmvKbpvRvV43LcXyFDR1W3yzy7a1Sucud9rg788ouyTUdqBENSQTzjPhLbKPe7mh16E5evG5Lg9Xku7YTod",
  "key18": "65heqCy9HMuae7mMwQ79uZJGRtNwhsdZDYYLUgxV4h3vuRgJSUWMuStE24hSw2kC6w2Fr9RRWFSd6pRwtgxzzNtj",
  "key19": "AK9zGoy8yeJsrQshemT36d8icG9dy8XgqhcS3v9NaBzyBqnBycYmarJzNXUsApH89RYMkV5DCcPiZjxmcFFqHv9",
  "key20": "4ZdzLYs33xmq9xXrgTZwNgobaRAsC5eHFDyXqZwyJvWEMcFQVQaf3T6KCJEzoNmr7gPD5Y13ViWQiUTnGD7bLTqq",
  "key21": "57NjJa4QvH8nSqZG3sLuGguaud1RAJF6838FTynRtiH2JtuUta31ZUo3Su9xjFG3N4LFutiPVthgHAy8dBueYeMw",
  "key22": "BGUc7dv9NuLL8eJ4EPYigc1yYBwCMfE1L9aarqCvgcYWHT8EhGKNStt3HpQMHayMBQLkHiFNR7Mg85QJFgpDCe4",
  "key23": "Z93E6uCsbZzohzmZ3DLDaCdaXRvBUEmNUWLp5G1BxoHHhN4KezTFWGXFzrsowThrjWwNLYpSvQgZeWp7tBHS44J",
  "key24": "3HfoN72ftJaP9BJYTFytEvugQPtGkgL1vYeC6FGhgv7v9SxR6NS1nSqn8J4ibu9DASjL5FejEArbSvemWBovWCTH",
  "key25": "5AGiJutWE5U92yZE7Cv5mT22eFyg6QVHTdvGNtHY2sqLBUnA1j2yYCh6hStCGshzT6E1Fek2gHnLSxeS7ZDUevbL",
  "key26": "5Ub95N9dTRxDxcpz8poFQUfmD2znyYHP4Phww6cRn5PU837HosiDgjC5gLkLPiHpuYQfeN7rubcDJEX22jFaHMTu",
  "key27": "5nmto4DqAEDwwNkHK79tNAEcyxSZwJJ7sZb58eExw4JoC4ReJqShsvnXiWST24dr9vEJZykGjbc8yT8B1TbGA7cy",
  "key28": "3deYf8CW5cdyzcuxfuDiPZ65BoRaM4rSg5UUzxFdkc5Uwx9ikVpUHDVoPCnYHqWATDYre1Fg1JNx9PdST6NPiaoU",
  "key29": "2gy4C5sbwv2B9vwKG5PQMhx1hJAEYqV8cQTVk7sKyEShLyoZiRbncqqmDmugEM2VtVoghmoYUGirtYCvBahbfRZZ"
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
