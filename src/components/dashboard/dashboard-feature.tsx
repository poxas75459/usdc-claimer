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
    "3eY7W4XH6gy1Hm3pR9MGLjbokcuA2rLAbTGJmfyT3z56SuKU6Zpv3Aq723cKMy5QaWNknkFKaiNeX98Uychv6qvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ggDBhhqD8aJW4U9B9rbUkNkcokH8gq9TNwJrRufpZLS8W866dRVCpKSXhDW9ktr8ehsLGwSXwasTVmJpS1XuN8P",
  "key1": "CczEgfU5wg3AsAu6FSGeRePhXAw8NDec6deaFBtd1qrh1RbWSPEPXxfvKBES7mihePfEKEt3LhB8YBCMLoQ6TR4",
  "key2": "4kbgjemKc2mzg5ap86VC7c68yoEeGCmrK9x3mmaRKNKYSpXkdizq9NsHg7fg1HLUVx3Bp9oQTS9N58QNLSBAagJA",
  "key3": "4p1Wh95dtMc9DXaTKRssU1EAvP27yQSMwckXRpMyih7neqGqi2Tgu3eoJxugqKL7tvX2nYKX1tBzK7tANymPFVLT",
  "key4": "5cQcH3NsesF4hfGvtQw72TkhTXAAy2HZW2PgPizVPTsDpW7auFLzodUkxcK6jtnCYdxRXLsdj9KhaUKLgDEGXk1P",
  "key5": "9ytfTdobuAJDHtAnysn1EvcUiNoV6v6dyrgvpr5ZQJYETCWAaVTnQkdFyqbzWZRg8Tmfd4kaH1jhtZHx9TMys3e",
  "key6": "3XtuLj4Yss4yeMKQyF75YPGMQE35nqzdDwo8SBxz75Up1i1monhh2Q6EgmtRqG4GV9rpzmz9dPzLsXMrX7Uoviye",
  "key7": "3xHCQtehkcfD2NFyg6gMDYpiSp7yEDyconGaRLevHGxrzAW49GjsFLMHstcJnJL8QisB1P3KFEbQhmMqfzJocVSM",
  "key8": "4AG5YNeEfoS83NLdG2TXabaBtBg2CYNCfjkmHLU9HsniDNK8wTm7c679jobaUYiQMd7ydvLSeZG2ekM5CCfm9xaR",
  "key9": "4tdwJLU2ReAiZ2EzApie4a3acPHioU396jQBgASe6AmbjQvSwLmVtoY6W9UF1KhrVEiCasWju84bhEsGqsjcaVMy",
  "key10": "3NxbKdwVemhiDPDZA3A4ZWBt4bp3NW7t8sP28xDu3hA9XYRKoZ64JteH67AhozVxCPc2PqbzLTjaomVTwn2ofq7p",
  "key11": "GEyP4okvTe8iabpWKDJg1PMMUqu9Ea7iYqJoRSMRJYXSnydbH1X698qDfpRU5w6cZLj1TzXC9ZJKrpjXeSSnhPq",
  "key12": "2nobKs3mF3nDjh4m1A9XUsX32PqdCiJcNsgVbcvPymTAAnQFbUbH3EAWA3PxzUnVKdtFyDt8P45gLtiE37sqLhv6",
  "key13": "2kBh9t1ciNJ23S8MmTuTs3fdUZhDY4tVFykCfVfUWBxknPGhRNEA9UcVPGc26oVAmToQdMBWGAPpT7ZZaz5qe4P9",
  "key14": "bdU2SqnVdns325476jRb5VSwgiEGhijzFkY755C3cyf616g7akERV7o5ZSU71A1WuymH6nGAsseR29zSo1hTZwJ",
  "key15": "2cqyTBkRyDosDKqvSxXQLKDx2Ab9qyuZMrp23PymdAhdMwNai2vjiPSxkaB5v2Va8tPoMe5DoyNqQJB4UG6mNvb",
  "key16": "JJs9TwsZDqG5Qr4XJAsiiMZDPCjEpkT8fteSXVyzxmFpczXxNczG3HZEbMKiHeuE54p26yEjTLrdtPupMncDirY",
  "key17": "4Qq5oYcEwaTL6ATCM2DxJ3EJyiSLZm4mqfrUw2Wxp4twvdMy9q1z7mMfUdnbU94GWDzSycEtS9oGfKspqQxGmtwn",
  "key18": "ccJUGtHHRXHpun4Ez4epxbGLMMeqetDEPBshNtReoxiKhPTzfaQKBuMQPd7tb7RdEQMrWVJyFuSsSz6v45D9uLm",
  "key19": "37Rk742ApYhuHpXqxTWAYQ2qBmBsnhUSeFZBb1iCSoXpC6YERq1aDBfnygzmcy3TfekF2qi3rdXf9ApPg7Z5kuuZ",
  "key20": "DRopLaNLYTKZ2X5Cxm8YcWnfam9kwoFenW8MHps3kx5Mz1ngKE9aP5kYkK92jvfQTCp44mcWQEhRcvdhDzo6pWf",
  "key21": "4V4hU3MSbz62QaNLHWWEgXk4LRSP8932kDuTk8pkJJtmWS7aK4tru866Rv4YXHhs5wALfySpsuU1xozmFmgQKkcZ",
  "key22": "3uBaTmsfiGens8ijY6P83oRRdQST5RPghcyvedxAmFKEaE5vckTQnQufNpsZBw8D8uovgaeJ4EwsiCJX1yzbP6RP",
  "key23": "5Cu4mv3mBquCVG71SGxjxAgVr6AtkzxEZoucPtYw7ULjwcZ4P2XP2CVGXQu5NQdZ5ULKFSC8USQ2Y8GH7qk4ygaW",
  "key24": "2hNFiJ5v72tGWTYUbfo8nLpYMk1j2A3c31geH9YDt3yzBySaGd2p2ojnLk8aST2Tf7BZGCTWYAGtUTkLgYu8xwwu",
  "key25": "4pFDkffGRdHRw1bDYftkhgxMKt4hgz9HkFCGgMLyqh53RA4QTr5LV6Lo7aQyrHgbXK8WSm3DrPW1Sb3KtsKw7A9F",
  "key26": "2KCVQCiXPZE3VdgjHaeNZmpxKiDMQMLSivaeF953RKe5FFmjNQu1wr83QrwPSDNggz68m1pNokwYHgZBjSvN85P9",
  "key27": "548Y4ZhQdZA5jNt3wT4MJ3TKw2rVqWbsP62Y76rnaRbEveNDTakAkHaBqYSQDW5BQMiTBMFarqwR6zMhPbuMeB2D",
  "key28": "3VeRqqSaq1pUgR8uWfPoKebvmnfwkzDUbFWGYqquGiQL9aHugRAMTRZDEg8XhcUPwBvKVPe9StmoazYicxzawmmi",
  "key29": "cyBtry1NvgCMxEJ5KRi8juqRC9CqsH82mrEKuX9xJvPWQEJtun244EASLQqSHD3pXmTVFHHpwtrRT8f2JN1zCrR",
  "key30": "2QXW29EtqjYKoP8XoPysjnXaMi58A2hoAn6wpdYzsdRE4z49Up4iZY7TqYX4AwxBp7ZRuo19iyrhbR76khvmBQwJ",
  "key31": "4cjXYFg4goLAq3zmphJzK2R1v8MG9MoErCZfNzmGHL7xNvhNSvQVkQHRxdtKMUAQ97Lyzg6tJ8fSQGMUEMWUv4YC",
  "key32": "23wUXUkNf6CHzKpRwHWVuQ7epnY1pjmKt9xfU3G9jacMyeoenftbrYAD5DsPq8i2B1J15DdDWhpNQN4m3yHwkVHQ"
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
