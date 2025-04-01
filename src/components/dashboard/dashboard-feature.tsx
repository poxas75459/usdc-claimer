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
    "234uMMtDTLv4HUKuX2Y6QAbmuDpyevxZgAKxVYGM3FwuzvdjLHHFdW4ys1GNx7zcPCYfasb1R1fp5PCJLpZ5FbN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NCmPDYmZseSG9ohscMSJRWgh7VRLoWk7sXBeU53jrDoEotzbYXhvPCvtoXKaeQxZqFbUqfFUVwFzPNkHJLzjx4S",
  "key1": "3rJuGJwq4QoUmnFG4F62q3GmaGJo6PpsD1tqHt1rTUQU57sgExw95BXkLuXYVhmHiVtsPhFRd3auYMksgzVHqqMx",
  "key2": "XkvHczCKrgFWs9s563cGmHBgwwc77WPzzSRukU2MN4sfKQpT5B76P8bEzCvGJszJ1XCRzfZ5BxWNpTYrU9rBipQ",
  "key3": "5hRxRYmMMfW6RDEZvZryqsTsNexonnopETdxDrXSxskKv3x2Pyu4wN6pjqyEwkMBLdzBZbkchtr2TWrijA4wn2Jm",
  "key4": "pvknkoHeMea1yVoPnYNnrd8HxqtX8YqK9KYz6dC9CrSAojxdZCiPsTY85SfY5q5yV3kGEBjEhpamdzQSabFC1sx",
  "key5": "5uhwPqeG2cq91R92yqUqZneWQ5sTjcJ2QvsqzasnuH9JacaASFLkJAHAbba5tbTD7UNJiFU2oidgKfa6zBVFTFKW",
  "key6": "4PFwqzPNQFT48YFGSPrvBF6Gp5uSq9mEgnsU5xsBC8F1DikbrHJFLVvPs7RDUgzfghFv4C818HBRm6gWdzsZbtio",
  "key7": "5vHyaSMUMgYs6uzCc8n12s2sv18tUUrMnPebvcf3SHcnzraZ12oTBxtS5FAt2mCSJmKFz7azW1bAbW5dcxLjPS8d",
  "key8": "3ETFXRoCSncmhmD9h11DvyN8HXr6dXWcgiMAEr9ZudzHRNjLWW6WP65vM84XjRADwSdBhz6Z2XMpDPqLmHmhNQK",
  "key9": "5tn9fxntYb1rScxRD1HMwneDBqJ58gih6PTZAhMeEtdMoo264Nh81s9v7Leo96joBceEXMzh5dxDW8gdm3L594jc",
  "key10": "4qdLvoMw2ccoCTGseVjmE3uc2pdSgUk4G6Hwo3nSTcK7rVRHsqnVjU57swjqqqRsf1uFR9ESm4yVTHPsKnzSL47c",
  "key11": "3GqMxA8zMCCxdJ8apsUtNBAehkJvtiJ6h3aBiuDRVF4XjRUqnpwGU2Gr9QxX6RZtFwBQupDr4TR7geDegXykaXCA",
  "key12": "4PiXBQmL69r6Fx1FZt7EBniYP3HEN8yUmuEWgPuxLyJiwqcGhXBiMwQrcvEkJfosCYu27LE4SdSdxudTx1YuiDhU",
  "key13": "EZWhRrrxPHcwRzig8yGCj4gsUYhucApjXzhiXTvvRVq6AaGqJ4J9HJGtdYaoYqByW9bpAn689HNok8HujstXNFS",
  "key14": "2sLmSLYfNeLe5SAVbykG4bqZWcxZnAZQbFz5qNwWMmd3EdN2Bv8vdoeSyE7Ga4AYZrP3EBzP6v461YJe6NeQq38o",
  "key15": "389NJrFnkArgi4kduKHtJWGD7XsxQ1nwgLDmGN8jn5EbtVK5F3Zcbs6eMb2cj3JNJrDawM99FcuLRZqWwy9yxSns",
  "key16": "5D1GEY2BVSrVQFMArFbo9bDVxQAjyAXNv5hEfrR1FBy8PALjhoQZsYRjf5dqpyv7KY1mxU38Fqt1q6rA6ha38584",
  "key17": "5JKTVn5vUEjLBFiYrGKjATvVDpXxfqS43NUpJxRS2w6tnV5jaH6cLw39BhBaCrGYYrLrGteLhXj17CxJ6pgZA9FJ",
  "key18": "4W89SDy8Ws67B4h28EZZqu6xPk9okekMkSyuUHf8C1Z6zE6Z8PrzgjHe5BfqYNLo9awFNMXArSL18g3P8aNaa4TB",
  "key19": "45iGLL2ZMMMPVYegoApNL6iNcDyWZiUhMPtSip4DJvoohqoKmnzcfukUasWCYQ8TfQCHUkxUj5mS7yEtak8SRQQ3",
  "key20": "61cvfinpwu55TNSJMPjVWwL25CANQ6JBqz1rtW7dHna3WPhbxdrwmsrW2nuk7QynpY6Y45PSZiBTJ4if8EtkkyzD",
  "key21": "5yB1Kz5U7y2Q9UijViXEM9coqNkpEqkf4Y82oEevwhrtn8yNsjBH2MZgfJgBehFzvt4A3Pa8vAHrDpLQXwetLShk",
  "key22": "4zGJq3DpXD1C1C2S4WdZEG8jSFqov1S65y3dNUVjyfMAb44FAeVf9Gr2YVrxkgTvLgBUkdRmaUnEDwTbXkmGsToe",
  "key23": "64S2c1wUTswL2MRkpgvbcjSpE3TTV6tjnY4A4bU8GYQfrw1hRf6CpiLVQKFZM4QuL6brxkqXHEusr1cTHB1prvq4",
  "key24": "2PpHv22PbAkYuhrbQbLxNUa4vS2aFdSzvn35mwzHYomw3z5Vu4mAV3o8cZkkav8TXy25aDtEfE6XY7DhvejEhAqC",
  "key25": "2WCxr3GXcZzChmSM9ZKeUF7FhD1q66u4KPhzEEFs5wpQgZ9krv7kS7FqNymiXXskfjUuv2xVSCztTURHHh4E526G",
  "key26": "3qsEwkGbba4pzyrgmQDxZA3vARcHjiizGcrkthXRmfp43YeLAhWipZRZ96x9BnbVfunBryB7ejPXNGZLor2GjP2j",
  "key27": "2CUntrK8BLKr4nhee1G5iRB59RrXFPdp7AG1rsYHoBSausCP3nP79ArdRBH7dj3US8mD33SQ1mft3gZn4AsYcc6e",
  "key28": "4GG1JghBNuNMJnJZATppw39ZTj6wfzZGqUMGTVub4YgSxfJhcKEpzaMswc8v7fZxngXE8qEE2cgg8Yu1wD7ZpXMJ",
  "key29": "4sDVEf6arMXXmfea9n8UyiuDoafki27JfCJBrq3da4D5ydCwy7YCQe9ZcptiCidxsHbmRJMyDAve7e35tKUANtBx",
  "key30": "65fGYhMBfDqJzeZGVUC6YCbJfJVtHw7L8TNZsmsh28UbsEgJsniv4DAioG3kvMqqev1kkEh9Lf4dsoqXLEDJoJU",
  "key31": "T86jdLQPvwnyTr52SwvmXRZ6WkRGHekAvLcKVSC732zXV9yFnxxavbxvRrEb83bwZ49i1xKxJqQ3HeJWwzt23fo",
  "key32": "9oDaaoRErKXAX5gp77b6g1BdTX3CZsXExVvXybqsy7gzxrHy9Tkt2sVr3Nms3ro8BxTqjrax59bs3MyujMonYhA",
  "key33": "2DRMc8qTWnGPi5aoTjtD7vxpQszAn6VDVSWfTBETFgUfA3Zfnh2uSKEaHF2UQ9LpPKiHD5EA9t2RfrNUQTcP9QjQ",
  "key34": "5uSNs2h4PezwpdxsmnLwazdgyPbzAtg47JgPMZG22fA1NCFZCBBpAS7E2j6VjpDomXaMHPrcBDcLvvbkp4jbSkC4",
  "key35": "4h7bBuCQh8AEiKicp7qWSqHompqdcCor3SBKrwRB3Q18A2xmDDyomTatcZoJbLyfqTfNZfHmQAMQt7Yh8BzMg9kd",
  "key36": "5ZvsCw5F2yayBEebu6WxNCd3pcrGJqwyiG1cn7y3HUtPwXmPaoVYZjAptqGapyGvYmCR9QesZoGMf4sMDQrwUnKV",
  "key37": "39axWN4g37i8CMUmFa5TwpCoYKUwqhKgQB1JfsWGMuGHiXfSrNLSeL8YSZytF3KrcXo8MgXPgMa1YG2SkNd2pQtJ",
  "key38": "2SyDueEYpsGFBLiFEwuv6ugw9KMPX5n7GcmDHT5jWoHcE1j3WkHwgSGfYFSyV91KausuKNwaFqzttiZV32pWAJvn",
  "key39": "2JRpjZZfiid4RnKUzqh9uWfagDSLfU594tdXv7rG5WTSbD6Z7pFeW8ur1QPXzeVj4SavQq1GJPM4McCUcj5xV4Vp"
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
