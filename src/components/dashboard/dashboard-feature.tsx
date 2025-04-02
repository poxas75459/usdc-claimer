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
    "5d534BVL3uYFi6Gp7P3pQHunZ3tcq8KMGAidMdBTvGPDxfse8HXQUk9ZjRPYTgwR3LMvxYsUn6MDvWHLrwzAtPbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rXXhvhsa2Emzasb8aGwpK5goDSGNzBDxskBP5Ng8JBgLwPNPyNxcrCLCSzNrfHV8a4n1cKkW5SigJVvdnKtfd9H",
  "key1": "4ACfsQAq3coTU8BjSbZS8HVdRUeDYuKSBkApnH5YR2cifVXrhzEimh5J8uYdWKTSnzfyacD6n6EKcbjCgYKYmq5s",
  "key2": "3979bxTBLh1CjHEcJSRcqfbsbgtPNDyjdckTsrdyZcUYWoqgXxB9XaF3Vy7Cj1uSTXohCMDE6peGvtBoGiyvdhpn",
  "key3": "4nmkm3haJCHX3i6b16qog9p9rjF7BEFJMXYkkzmyzDNu7CN28kL97xFyXs1Uiouugf8vGNjXvqKmX6te2Qw9x76A",
  "key4": "YyvhSq8VY6T9NnDfFeCcGGunwxnggJjEv9a7zCB1bHAnud7h4jep1q6MHLXjeUXtAwXip8ZDuKd8vn88zwr4tzB",
  "key5": "2KPvEuwxhRueNmBHpXCH6SGyTACpDSgq7dRSnCUHiEprpUULcMepCBg7FVVXGB3SC8f1zX5rKw2b23i8zZpY1Cpk",
  "key6": "3qaWBWDnJeqap9Hc4Yo3bwoeGqWmcbTyTxQAS8i1X9JttMajyZq4icXn28jwGUywVbXvAGZ3tFX4BF9f1LFyWs19",
  "key7": "3vWfw8giWGvS8SbDpvvoBpqohNkBnZcTSzP4J2TjR26v4qnnxGSv73YpfCf3vE6ZteEoH4PVmZX7BYdmAnB78Nsj",
  "key8": "4yu5hc4XZhhrrtW1p1LzcCmvvdufz9XW4titoXKCoxDzP3XZahU69eDNkXVekuea6qUofWPNjshYJbuseY4MWXu4",
  "key9": "5qZdfaW7HfqghzsoaiyCs3FA8tJ4NQALzgmwQKV332v3cpNW19uoZGQKjJkTLeF2UJBQswp2F6CSnM4NRrvLVTtr",
  "key10": "3Si5hYFaM32gciJ6oCFnV2EWTUKN7Ltt2TgfkRbbV4zTVeC6RSGovviAvj7B3784ipoThrf1wjMcFtvcGxSFQnct",
  "key11": "3jHTjTcRxWohNBfJrn9hkhhKiBXxtTfo9ZB7ZRciqbt7QVnr7VeX7w3BUZRdQdhSWrjTiRVRHSMTXmVxgMtq2ohk",
  "key12": "5iddmzF4kPLdZNFtRoQvAbSg8tJ61xW6r2uRoCfsWXH9gYzWeSQd4rmrtSudrgMKmgkHdNAAnrCgSrbAjcsgBbiq",
  "key13": "4Rd2RDwGvf6PEgL2Yjh8UgqYofn8QvPM78MT4iuzymBXSLBXtzE8RHFyQWDRoj8M6faGwzhQAvJtVz7VWdFnL1cB",
  "key14": "5nLjXkE59jJgcpus6SFA3UKdCeV15LZEmrBAsvvUUeWduu32LtwhLeKTb2489Kps4oYDhpWCGtCangJAGSF3cwzP",
  "key15": "4v2VbT6EgptYh2F2QByScC6obFz5KVqu71QfTXgXYzTpPDb5mVBprQV9tsiQEvJLQhH5DCHPfmdsmy5xQH69FzLK",
  "key16": "45gDPHLqRxenSfYHDCkdAWJic7mVpkWJicEnkGSoFEnSz81ajxtF8kigU7Uf4bmkGtMxXoU2fMiCyA3zoJhZaypn",
  "key17": "23SCC27SuPFpmytaNq9aj8v6MSA4CxnbGU3ekKGDgReStbvA81hsVHneyzbo7tnu2m5EkGRtAfJY4J3DFQwwnRH7",
  "key18": "2CRqLowpT4KD8vnyDHxuyBB3ULifYFcahcaiiQ7R25Dq8y57qwM5Q9cxF9kayCGGu5vJe3eSUwVmNJLUmXE3KMHk",
  "key19": "JgHSU4HtSmZvm2yV2DxwvELsuJ3W5KBt7xkePebFmQZ79FZ4PVez12KtdQ7smtSE24GiN8Fx5tH9LHJnG4sSh8j",
  "key20": "4R8CKuxzCerBLfv8zK7QxWetfz3xvkGXkAikCXbTU2gsBdMiGeBFF2zsW1c4u7LbxAJ8pR9NNEawnvonn3maw4Ek",
  "key21": "2zKrEcb8pbEtEiLynM6yg1bP9yL8yMqzHof21qtZoYdT1YCz8AGjubUE2S7agg1VcMKMtvsnrvBTxGdqTBkhE8xW",
  "key22": "4Qh17W4vQZ33aw7tc4P1qdkYGUhCRmMjxrZcxuqhDvhBuTffdT53VrkEZpgbFVKoLNZ4mekvnrkicdjdG3azYw9J",
  "key23": "4Rh6nzK5KNvzEsGokzRPzeb2Sos8EKCuM9ExHLtWTxqoz4myGprJXB5LZWjwiziANyFujyKcKEFxvRn1e8t9RNfQ",
  "key24": "ZdY3fhEkPyMCfyjZqJaxKf8W5dm893Lf1oshPfKDzJDugxAXVKHsTmAUWRAsnyxoGhRykk9ydPBt79YRs9gJDvq",
  "key25": "n56aShxHg1g5DrRwKqzwBBi6LypkJGFaANoiZFwJ8aoqaq9C6YyPr2b7139mYAhN1hKFVghGguQxzP31GFh2ufK",
  "key26": "5qpXMC5JuRr9TzR3bE4zG2yEn7nJMSaYPB7Zhp5DpexebkVYurjFyUg5DANtRpJPEEGvZwbZUTwS86w2kEFkHY7w",
  "key27": "4yu6z6oSGVKGhSjP59AsRJhyxHy11GQCGewGeq5FcZTUWw5ZFDPaXuBsPvfvMVHHaX66CRb8BJGHSojPStx5vh4B",
  "key28": "3f8pgCPQFHFeSdu2qutqKwkRXzz2UtFGygefEc2iL9q4t435kKA7jwUFeKf5svZmmGj9xbpmDZffLAcT5APaiARP",
  "key29": "4s8EwmBzq6v59aaLfchSqq7smmbNvPyiufPWru7jNoFpFgNYsJ8vY2HqN68L6jwD6yeX32E1sAybkwgvDfj3QMxS",
  "key30": "3kPuFJEXyPZyvYsa7snLcfEW7F78MVXfq5HF2ZMv6Nt4f5BYmgph6d244r23PWbi8hnuRyVqvKoqbaLtdmGL12D",
  "key31": "5y4SPKF2MvirMEUaWVmjYezUEm5GB1ukXi13eJLkYxyCz6PFSHckJSqNRt2QhCFtFcsq5wynSpPmsKgxGz1GZuYr",
  "key32": "2XWq6XYLRCfthZVwVYTRvUatzff5Bv6i66GeW5qrzAhg5YSKpfAD9kdTJ9ZFTc4B8YepqumcGcGePfatHeuYAiaX",
  "key33": "4k9ZzWSekVSU1hKPgCQH2PRRsS66ukieFJGouCYz85jFVhPvkT8tFv8hnqugaBPNGg3btV8pZTs8WUeVvA8j3P9N",
  "key34": "2FUtnkQAzGn9WkNVAn6tz7y7pruzffnj5eeaD85i7e6GKJuBzAnQbbjciNnCM8iTJPwsfnFeawGzFh7v75xDTmLU",
  "key35": "5hG2yFW5Axyh67RtcXM3rgkFXZrBjAw6S5Ti2wG5PmHuwFuBFQWHugz3oKdLpmhPdJGVydUbZ3BYkuwEZgRcE4vU",
  "key36": "4i7Tb4T6vydUwJzA1Jb5bVvEsbvUTNqZDVjr5GRaRnLeYLrxJnpa6mk4DfTRisvLcrgoRs2vtTzYpNLagC4fLs2P",
  "key37": "LP9LaZ2jtLD1zM2UCGg6edzdxG7K4BC6jo91o2C236sfseYDZx8TuQnnxozmSCE5XPffpbPfV8UpBEkmBJhNMRq",
  "key38": "4PevMp8hAK3TfNatpKYJzXJzzbRitmUNLa4YvTs5VK6qJ7pEUfNutdEpZTTtuXhFu9zYpnWVvvsdpURuwVYTotX8",
  "key39": "57RAFLamygz7UpFWCaHMw1BJTLtVfjr4ZCjL6jeXUwqb7w4BwcFEYWiwj49rteu8zE1dSJekZbF25DiDR5qNVx6S",
  "key40": "5A4EwQWNSa2qh7zxCc13yYArrExkYNKmZWtuzvNsS6KEdeXZNnRhVrcC8X59xwwqXzMLkmjVsxscwShRGjf52BQf",
  "key41": "A4wf67bX293x2XwiMih5TaXsVMifeysyWUUR1TfVdc7u1jC5uW5DQqhBVvhKjSyhUpwqomhLrhoXnnc8FZMyRdD",
  "key42": "54sjX1EeW1iB4rbcEPnAE1SkWQJrnAfGmsbFgia9wPSrbpdm3PVKFZNFAzX2647DDjLjpqV2CP1cBw2QgNXCTCxm",
  "key43": "2MqWwM5vjWTmMvAfmrbqeKU9QJm2dUCVq1jNDbsijJoejKxbo7DupTjHWSg43aNdzymspYYQ3sS5rKyi2CXk3ngz",
  "key44": "5yu1TMnBYWQQE6h6ZgDuTCFQEVg7ifU7xvJDz76EwiyzXkUf3tJayg389ZnK26e4ahRHadNM6bS1uQAoRfz8ZpR3"
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
