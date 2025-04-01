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
    "4Pgj8juRc27Ysse6Kq71HAYb7K2DbQ7k77y5axVcFLfGJgfXsrXha6rdWyT9xZd4uFQGkBzXnvYYgdRtQx2vSFgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rzqXUXKq9SRfabYRNvM7G7g3uD4MH2haZhbbtYSrvzkt1PCuqKA7NdWZQ1D6Ymc7ypS223Yco8AGed5d7VLyMpC",
  "key1": "2TDWqsudBvX9fvWjUnMq4ZMLgmysg6cM2GwQTmCHEFJcGxnY8Qkrbk5y8KN5do4P3jmCPieuySfVp4yXbUn8Gd3H",
  "key2": "2iQfgviB1k476XRyfr3pyJhDXg6okfmBQTqm7qv3y5w1D1oeajBu6rjiwDU5C4EJohSX2Ko7USyyPMEojit667mz",
  "key3": "4y5b7P9qQtS14isVDYj8u4HzGcgt9U7tVjZvCwrf4KDXmK4UPN152rf9sMbsMiqUNs3vE2XGojM3zXm8BoNZGCwi",
  "key4": "37eTWmgoekJ6SwaDiFf4btJKo43NGnJ714Roo6YKGHdHwasHrWYXW4vx6fdJM3qDq2PNWsBgkFUEPeqeNsqzgyCC",
  "key5": "4WUYCS26tutU2Fi99nSAwGGwzZiuDRmwqQhhAFPVyrxk5rA2JBG69LqbQxgEf9XCbEZV4q1PFsTAjD67nvj9gUh6",
  "key6": "u5WqqhocqDnffjZLwwAXfQWPTgqrbUk1mDLcd2bj4ScvQNsNGNS96Npb3BRBXyjpdqTMowjUTHCyd42nJgqmmUv",
  "key7": "n9MQXAV2d18x23YzzDzf8ad7auvWGkQMx3u2pxk5BJ22FytjG1bjHLRWbggCaBEK5pYRy9vjgRtcic15h92ZpQn",
  "key8": "5MS8KSgK2vcmAKaRMRAdauq3bZKTPY9CH4NUQdKKy9Yrrw5b9GoUfmHLhAj8hjFiaW9r9Wk97vrFebNUgvH5yims",
  "key9": "2dpWj8gnEk7J9Bz2WQjSd5uq6qi6AFFW1iKNqVfegskjs7ShcucWzv5cZxcFHF9tB68KVT76SYbUpkELyYvFoeYL",
  "key10": "5k7sKCiQjG1MtFtVA1Z7UUKHEy98r4uaWo1TUdtTrPnMSwdMsmEVDobaHyi6EXxL8YGeK3vFeWcFeZAkDgn8yq7K",
  "key11": "2akpu5WyQa3PH3gev9AdxL58sxsMBTGZca1UgmtyqaRjxCwMpVSksvbN1tsvWTEdwwTtPZCSdeGPZ8mnjpRPPswb",
  "key12": "GwS1HX9iQ9dVcqQkD3QECuo7rBPLS48GuvzvZ9yX3AwsjAc5t65M86ryqbsLwdHnFz5JTaqR64xa3MBe1VMAATo",
  "key13": "2tHMfVYdqCxQqnZNjmwE5FwSEEqL5y2tapig8a98mHfAHtZ7szCtW2knrcbU8YDmkAzRw3S1cvYForfwAYLhdrq",
  "key14": "4BgqTzYYvkWcwpA653MraCabYaG7gGtBVWjrMHQB3EkNRW6CKbrZ8he6v2cbaaUXdQbLwGJhErPTvAvb2mTV7ZWW",
  "key15": "4WWAqJbGXnobEjXph9EWo1LuiSB2wy6gUSFAA7FK2P6hqPdNdH7wX45zS8ZgX6UzW5v1SXp8C7k2qSnMbmx1Qvms",
  "key16": "4y7yGNq4RthbcR7N4BHLHfMhAY5zcSCCYLTBZKjwkQo3V77u2ELDVSqC1a8FNX3GtQK1TUieoGgpNFQgnUvTXiuJ",
  "key17": "4aoqZtnUWDmHBpgA1S6HFAwDZiZz4Py6nZru9Sx1Ag4y5nckUp8YgmuBxhb6JDTQpit2fRoDHQsXL2WsWoya2KTb",
  "key18": "2QhN81uTtpsqHzFvEgsoHCcEeYeFBwD8DdysRyTXtP3VkfDmeju8EqSGTG73B6ojqSw4ccEUB69QC7dCp6eY9Uwz",
  "key19": "23xaKqoknX4iB5z1CiFTCMJW53125C6oQL3pKK2MacpdLZysKtFE4MjQkJz2QCNL2LzjeBwqkRJ88gAGwSXwsSbC",
  "key20": "4Pur8amVTFr3Mkg6bHTSb4b8BAoaneUK1QacFae9RvjqhYSU87MKGgnwBj9gvbe1831RrVKRTkunsecfEHqy2SNL",
  "key21": "3UettmfufzkAEikThWJXjfDs33qNPq74y7L66zQAFzjxWiRryXASqoz43yF47oZJ5MZBQz4yqVa3bBncJLACHwRc",
  "key22": "59ckV7DNmePrQfYTQG9rWFB8jBFXnxNFHBtmk7Ex9yH88YT2p6QtLF3aFxR67qPPtudPdv4RzQe1NgeHpesTtNf1",
  "key23": "5JxyabB4vxnSABjDQbC91SHnbzyVACdGYPdSWNr5dgt7w2QY65sMK3vdxUbmNmKBXDjDgzj6osLr6LMdzRTCLW8H",
  "key24": "4DwU7UTj7Kg2qNmY4QDP2qCwPfvuoHA8dNFnawVVRLywVSKDf5WNKY6cPMCHPdh3gKBvMgKQy6gx49kmZEsdPCRL",
  "key25": "SYFxoZp7WYHa5Dk98HVi3KxoDJW35SSoo9u8Yubj1p4pH9YbBKj9ZYuMWzibmqnv134uMcoTfCXS6V62NtL8ZpP",
  "key26": "5vaffLtUiXF1p3iuapW42PU8iggG4vWLCh6EtnWVPBJFiS1S5BABJqknoTxiJSMD4beTgsrffjHVURPyQN8nE87P",
  "key27": "4XPZm1BCRYCH9SBy1TKeKSBB99UHW48d8hmd3Jz2ietG1Fp9DgiwgKcUDiU3euUDfabvpBdLxhcgjtLijrsTywne"
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
