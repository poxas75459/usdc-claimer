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
    "3K62SpMFf1SCxAhP8F6nWZNs54vsUkAH7Uto99eDEuGcLWWVNzoo4EU86fGUEq2ehYkBh7hSzuWU5m1dSatqvA2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DzxToHeDfap83tXMPhrtfzXYL2sCLHj6fif5G8BSFojG6xqPTKtUMUob7D3QucbJ9rDubppFDYAwm5nmkNShyU4",
  "key1": "A4x6gZjzwDmY4uCDVdNPv9SKAHXaueyS7kPAgqxWkT7B596qFdW86rHnFFjB81zss6Qj4h9t3nfJoTfAAT5Zotw",
  "key2": "2YvDfXyF8S677PvH32STXKuybza3oTXaLaNDNeBRPc5s1PE5xEjRzra1rZjTRv673Cv7kLzB2GCJ5i8CdyQUiwkX",
  "key3": "4u91CKZjacKDjPWujUgHF5ycZT95FBJE1BnSfoQLZZTsbit2K7CAWzeRs1vSpVmiUogkjh81WEr4GXCvasFM7Njy",
  "key4": "5M9fbD7cPHWSGHwC65UT8Qe38oi8H5i9H4q2nPQGDiE8pDDNQB9b96X7iFUhD2it2WBr6SAhBjzHSojW4swdhMBc",
  "key5": "57irgrd4vxR5b7vXv2BTPVoLo9RNn7SUHQ1DSXpGwfdYr2YcQHyMw1VJw8fwWuBC8FGCQk9GXZFyzqQTrSwuJ12s",
  "key6": "T7KRi9fqNddTEUEa2AiQp4Cyen2HqsxfiSJYshT9KmiDDhYUkiXNhS611gJrsHXfEEumC2H7tzinFCagzorwUmK",
  "key7": "3C97HfjiyB1Naj45f2NtxQ83fzMNsygHxxT59wAuKaQfkMuwNe12eoG5J29tFm8iwweQiGMpmNiumfWtbcJRR6m4",
  "key8": "3FDG61NVNrtagbo8N2LEEU8Ph1d9atdi13vJnWNprcL9Tce2sYhBgKyzhJRAtee5juPHggQBYQSX9p2ZyzqUJwcz",
  "key9": "2mnmUtDMG6RK1k9QFiLD3PTAe1APnFXyiogRhUkUDub5vMeM3M8kfJKTuQQKwwbXZdgarfK1xVoiwvZPawGjyBGC",
  "key10": "5hkE44x2oGPSSpySNN2mg44qw3W7Nf1WjQxDUJ4TRt3xPJBc65Q9BrcyMHZcZrRgxF3ZdR7Lnx2eygKDczbKWxgE",
  "key11": "26hRhSqje4gi8b8Hn4SnKWrwKG5A4RkWeSWXDDEKNWG6dxQWSPweGXCX5goVicJZLUssLdL4Q8iNRRfQsobbtXb9",
  "key12": "2SKQV5fPNb7iLHJhjPvRC5J11rdgTtnzSfENkjC9GKwvyp8rNpoaHFTxFWpXWJY4ijcrwimYRnE26sdGKMC9P72F",
  "key13": "236ktNLMCc48Wdof1MhZp4pvdoSUz3Dkuop6bqp7uTXj8YuQNfRHfZBwANZLVR4ctwhnuXXZKD6CrzLVu9jRYe7C",
  "key14": "3buX4TQ5pb5AQDaSvJMVWj9h9bHc8e4BFpFN31RijMync5ag7VK9ovwRMgPNXn1xyZUxyfbqb4SAHZ82y78G81w1",
  "key15": "2ZhUyP1UBeFdjgpcdcN9cXc3u46Cd6u6EzUQYtfka2SJ1gBhhRCshJ21qeYAroFQyCVCaZxwcLA7Usv3kGyTJzw6",
  "key16": "2au274iXVaq36MwoVVvym4zsKWF2qZQ4vrV5SL7uPuasqE2pX84L9NA95Cs5NKjJozjrUdyvT6JXjNsfq7Uz1HyW",
  "key17": "oqz3K4zVbyo7QfyuKQp2xPVrgXHHCzGBYEEYFsGnC7UJrnzVztdowQuPsz36zbD7DAM4U6GrzWhzitjGsinw56A",
  "key18": "49mQf4nhMMisrpxGbyRNmHDZCrxvGu9PRsrtp1cdLFS8Yi71eEU23zt33r1DkX4NGyYCo6c6FbWxysVAwdwhiuev",
  "key19": "4Za3wHpgJkiHUssodYi3S4BXwAcaJAx2YdBFUbitsanoPtZyDqpsSrns3yJPCv8AgqumPb1wRnPsnFG1Vt5V7ocX",
  "key20": "vgu1F5T6pPfjnky58rRC6WKZXNRH51DsBpJuHjpix4YVCgBap4KiemdgxFZ3CTm5gLiXd59efULcEMJG1inRG3x",
  "key21": "31JGjnLJ5AY9Z3L2w8QzV9usFiDWL34w9N5PLmsE6Z5ZTJt4KaATo2YNcZRxy5MUDbno2JRamjLLigB9SxU2iTNG",
  "key22": "5fDTyAECoCr7XT3EbSVZbnKfvRoJ7VeDKbQnsMQ29Kaf5xoJRY7qLaz6j2bKh6a6AMNx1KTrGWyzYZwtoEvCDDUA",
  "key23": "5qzT1jQKiLDJnznM7wTTCSNpBWiYe9Kvemfk7mTNTWaPyadmbFF6hAJdQLiC9XWbrttrnY3qduqr5dxjepCoccus",
  "key24": "55t63ajFgKdsb31zHDoFLXdLPYu8hqHAkquoCfmLcJQUEZiD1vzcTNenDYCoSYNsFVbiQGAgDBDygfFX8roN1VPy",
  "key25": "5JMN7USHbvWSZQCysQcKcNk1G5PkSgvC3QETRH3PbfZne63GegTp3WD9r6Z6L4nsoqQ2MUaj869a2yaLtMSZkLJY",
  "key26": "3teZQ3vZqjxNJ1cdCYmyDmgzXaVNPqa9o3DZuee2nieRima7cWupoXRp7WYYS8K2AjRKLK9a3iZn3ZPYb2AfGKsF",
  "key27": "3NK84HATx1fLBetHWmZwWaLZnUHq47eBQToWo2hp2rgvc1mR7yGMrW9p9sLSpAEPyUksCcNUTf5HexoP2MBxr1S1",
  "key28": "Drvp8xTx4Yxnk68LkTavwY7SvxrVmSP2KkfYsFn1iQsTP6fQgr7iMVCyRnkz67X8AEcbYWmnMCaBTkThmTgBzde",
  "key29": "3s9jczMCmeJP2x5KFapepSR5pk8teJMmxMtymrNdNaWMRFXEgnP3BFL6JPmfD9cCpL2UbZW5m99yB8chofMuJKSJ",
  "key30": "5cQWvkXdURwZzMbvm5TaxUzxoSD4opuYQaymsLfT2km62QevTZvEDiLqMrtrmmH8KwuX29fmUuYuGAxge7hH1LKU",
  "key31": "2T4wcXZELU9BmGd4hCMES7K71otdXbr1NogBfQutJXULdYWRz8b7AdkdX25jM4fEV55kzaf9pEVhCwLcMv97Uof1",
  "key32": "2qbRCjGuFHjYpEqXhDqTp44RZaxX6Zgo5fWpT9mdDSgasx2ZZF7GcZ1kreYk4dVD8gLNYcabBqQSHmqUNAA1vuRa",
  "key33": "3EWMj9goMGRG7Nij3sNkncWy24pXUeErcAV8rpdcYhUoATvSysshHp8fPJogT84GhA6JpZmP8Mn1PmZis28cmRV9",
  "key34": "5X8vXJJpQPLBLxzZBamQMebYW7EsmCNmhQ94fBYxCiGdQqjvEAWrcCjBiSwa5zEfPLNUE9okAAgiiceUcvJamQm6",
  "key35": "49LhD3JXaS4r69FWLKenoMjj9yTWh3jacCUs1ELcLdWKCFgKgqrvA5ybDhjpWg9zMq9VFbnhX5ubc6pSWp6MqN2G",
  "key36": "5oZsUQm1mcc5oYBqRp6htBhKcaR3oREWYR52Kj3qunRQKNErcBuqpHfvcepLn6JVywiX8yF5jQM8fWQYhXkFragU",
  "key37": "2xDmXDi4tgCfiEQ9sGCUDUqbo7rY7wG9VL1vxDGEhmK7Kmc6p3f1WJtc7Fupt61uPamJ9z5tWUnP9Y2JygwgwGok",
  "key38": "4CcpHrWuKuqV9zWbGQJSmpxuVPgKukRmexir6vZwu9u8C2To5Nm9qrnjpYLodFudH1rYKtJGkTYv9JsuUd3T7N2Y",
  "key39": "5q8n8ag1gTcra1J3YZoFZVAhu4W8DL96FAZ65RT49L33FmNkhhP3n5waCwe54bbRakGowquo6uyk25dg1q38bZYy",
  "key40": "33KG8Bu3gKm1jxfUXd2nptgkaUbqwqHhi2SCHQgRAfw4rgpvyKeCwm3UCtZtEUXrnNxG5hnEmKywAiW5wDSCazEX"
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
