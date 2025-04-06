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
    "3MqFH6hEodG1QkxrUku6AyzKURsmizEqgT3yE5MzzyojXJhSNYrtq9t3pqxCgSrQuafztEY1F3o9PKMcKFYkmx9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62icjQx8Z9pHZQCog3hWGxC9s2tGahKkjVxZEu9dj8HefkvLSWwZyd3mNRkq8WS21b4TsbFWMQTe7PqM4pc575oJ",
  "key1": "2Q8mdx78SfkPih4QdsUZsoFhsztL5u65rJ4ZekwfXpgCMJBEPEWAmpPWc1m57WTJv1pKyGABcs3nX3qrPuAuJgGN",
  "key2": "2YUHk2zNL1WeFwXRusWRaUzMjKiRSPmFipUfhuteusRF3Trh1pCpKB5fvZCLCCM6KHY2AS8yoLNoYxZhraoL8yQe",
  "key3": "4bwyjsb1YWeYMP4ia1azPhqgMKX2HdiGB9TUQ5pAm4Gx1LG4151KN91GwHXUd3eC4Qm5zBrEVtARtBNUKuiTchUJ",
  "key4": "vz6XCDavsqLSXwHstCjKaBinkZCvBUgFnyHQ7DooBtz1zKRyzgo9PbrGH1uuB5zL4S7YoWYyh4hwmkdXNwTNX1r",
  "key5": "i5o7FJnJeFXxnqDpQSgQiUW2xKaWTw77RF4h2LCenDQMUPuk4QYQJU16zKdgwrbArzyBYqM6gBZ2Ju4QK7aEpzK",
  "key6": "45kW9pQmDS7rMPWyuPk9j5PDoEgsGCcAoweThCidfZa8pxvqRQSKbsdU2yidwUQnpR6Tb9bDnTxgSEMf834Vo5sK",
  "key7": "4LPmHdabYLCf1fr5dUZVUdvv5jcAYyMqfE6t3DrS8HJpShp2LreymhEJ3cLwByi8pRQjBp9ZheSpfXW7JqXXfWDp",
  "key8": "5JDc5We8kQxWdfrpKJsdPQqtsj2yHvziqGr8QQy1nEjTLszLw3VZN3UP4zURH5uYimHpVgmXMZ8DUeLsFfPKUVoh",
  "key9": "5Gn2ED7kPECM1S7jzpZ2BwAKHsAoFteWWfvfFiaKFomokdfXjySymPVLL8arAwYSWb1VW8odfnDyBduNLW9K2zhD",
  "key10": "VFjjxCGyze9BJxyTdBDjBbD8Y4dcsbP5Rh7G8CXCYenb3R5p8BqdQgtMLQ76ZjdTyRzDos57QzXWQYt4cCwjZ7F",
  "key11": "2SAj9tR8Gg7W9G7NtyCAhytxYb8HpABP4bHuTmVpiStCaxy7WF3qTvWWnNfJYQeXVhkiPNaM5oH4eeUXSWD2WdqM",
  "key12": "3CUFksFs9Jo3UiomZg8MFcbxc1Uh8c62XPavgTvdfL8Z47QAJ11ReX6JXWNSy1qpAHNEaQzFZWYNWaVhwrd95PPA",
  "key13": "2oJtRZo5nWPUwKxNvEzycMSZPthfYebf4UMFgKHDh8eqTSjeTUj3GTXg9gBHJBvHGCyMfji4NzJYajoLyZh2a8Cu",
  "key14": "3G2t51NHPKJFFFSmCH5KFmVwYHyZVypL2ga3zFsR2PVdhw6nFrDYsuL8GSqzHLo3EdNTudQKYhzWiGpLTuixSjUG",
  "key15": "v4jot3p5USHjcwvAtkph4a3HHnWrDizLC2qBTcvGnCkYKFXYDX5yYKrMzeD2xDWEcsWBWDZbBbZwJgtxRrKepZ5",
  "key16": "2ioyeZUZGBqpnuoMgFkMXixHjkjEMU2UN49oCAcPvQsoT86n1QWeLq5YvdmoprAmBNM6Qx3DURiEyt9CkDSJrpiv",
  "key17": "32BovVUv2V7gM6wZ1sz1Xhb7uaE1bm79SnGRMBiJRmgh86AdCGxTWiUfwnHzDRTLYBnFGZwCNAahWwKqwVfU6WMr",
  "key18": "5hTmMESrAdU45a3nyRdGrp3gx6sCLpfKFiWkFYCQCpLieJMLWK5FcS1wseVjFLWzuzMXbxsGrpvuNrKq14Qiui3i",
  "key19": "FjwqbftYFPNJ1MeKwAFGKA8YmU3ueD45myif5b7r8RXEzXPaDfDxx95TcxVJjqErYTi4MaqHdRg6aKjj9UJfYNk",
  "key20": "2ek2VQ8KqarYmjpL81aZdkPCtHZAkiAug1oRWRoC8sgByPSjRfSA68F2Ec1SiemqdeWmDAKQr34FAR8cJnW9pSuV",
  "key21": "2UR6E6n9xwp48Qpvb2KhoBkSvRh2gk7x3TEuwNquvVJL5xxQtsoyBSiHrfmLWqxRy46n5TEChZXp431RNVhWrQfN",
  "key22": "5xPBGzgrjPPVMVAmGWqYp934BBTEkM32yTaCaJTkhvvLSiTYyn55TaoLisZja9L54GiNRatLL3vBJkC36uNsNaNW",
  "key23": "Re72896quPWz8ag9yYRfhA6Y2XqPY58jyG4Jg11ezuGQ8CSmBgYEeUWVu9VMFWySMfUKbSic6qykCvGofmtngCZ",
  "key24": "32buNu7y4s8WLKCMiKofkSBT2yqdx2pzarVc94si72Awqn3aguqwjAgafYenrNWwCYvGz2Ans86roE7HEo667trw",
  "key25": "2LyUhq1pJCVq1ut89PKd9vStqidU4ULizNG3mk5G8eAba7eEeVmgkK1XCw8Ljegavkb9Q537Tsxuevmpsu3qit8d",
  "key26": "QiB22r7adf3dJR9WvyRh7pzLQHUYy4hSE6j5aV6VLMXsDT1RQhuMsjQhT5fzz3yqk3L8pcRBeGrMStWRjEDextQ",
  "key27": "3NEnzvhB4i3KktP7WS2SJdwqURX5EWZp7J4xk6bdya8vswg4bkcafeMKgjH5CZthgM8DG6xWGb81aA2DPx2aWpTb",
  "key28": "3xi58CharjidYpiiGmmGUvyiLRP6RKx7CvphaemycCZL3FSEwcSaVyPLpGttEbUqzbcw9QudC8PG2RBsMPWEyVkx",
  "key29": "47GzSvbQdsRb5cENjMyoYByStx31jZz9zpFcRT2cDhANKEXZh3yUjf5NfqxGbmrvYzUW4Ek9S57XcAkqWuE6TA69",
  "key30": "46ghmmf7iM7QysRP7dg3Goph71uXfVhqd83X2RwnKTLEoB646AiNgKLHA51jMVA1Y5tWE5gNmuaENMxCMeJcRWmo",
  "key31": "4ZH4xzTaFWP7fwGr6LAnBZaLrUnumk2Cm7P7PAiYDR5PFYj5kkzK461dBsmLZgiq1yQb89N33gSwVrNJySt78cTh",
  "key32": "65u5ER4eBDaZ7yANYSFWTB3GQRM1gmFnzY7rvyhUX839BCe8kHVF7BAqg9hfQAsEznkCyiVhukpMwdzoHPTzpEyv",
  "key33": "3QM6CjnZG4hQ4KzyfzX4JNoEdMv1sk9SQtGK5F6cPRAARQ8qBRsv8X3gfzudMbWatYjQYA6Fj4Jo4pxNF1WPYdsZ",
  "key34": "5Li9anyxj2U8TNr8nm8MH2nTGCCvXHT1KSymEex3RSrTP8YvLii3FhcVh86otGBqckv8yuK3rXUuFAGeDY1roHHr",
  "key35": "67ZcmRUw6w81GM9VnAXwRNHgW7dTbEQjpFRNHxGG7cVDcPETrrCPr9BAaP9CsCHwMVRzGzVCNoXiPCGPeovLVpzY",
  "key36": "3joKi4QFJERXbJQ92PWPfvoXiDWtgzRdvaay7pL7dyG3fVfg6E2nrxSErHLidJ1DcmjmYTGP2b5PppCbWNJUDSAF",
  "key37": "8DWBu7oP9ShGxc86hhWtUA2K9jPbnLbopkWAxuTtGTfn8tmcbwDr7uEDPFNuAtBAvMDVaSdzURjdmYe1LeGybfv",
  "key38": "3rHMuPrbGnHTKfD7BeqMVjkhAW3GB1B9k1kzoh5wpmtsC6ySyQs9zBJXjEqXUGGudJEQM9invtVR3VhqQ6TdGgAV",
  "key39": "2Uhi9vENjZrnXVbnpwgHP52pHQWeD8VRCVhAeRNYD8WRg1NrYtvxpaRthYxKTpgqG5F14xduqa84vPz1gYQ8vWS6",
  "key40": "3ftoMuwmCSfHspJkLFRKbYLd1SSZZ7ZT2HugTQY27nuEt4RvnzWVdw3YgtnneDMU5fssgYYZza4JdibLL815DPda",
  "key41": "4415b9p2PoeuQyy2HCPRxm8USRYFpErWdVnA5vdRKSSMs3qXvbPpgsT1FeFEo32PbEVreDrDtReB7NffveXYRLrk",
  "key42": "4n1iyFaU5JdfayZVANaUQtR58ntkTXjkfP7Te2nuafkc9TcfpFF97M3n49ZCC54p5QxPaiUN92rNuVjx1yPVYDUe",
  "key43": "5ofBoucZbk2acvdvDfWRyaGjTRgLFkii8p29MnBnajKHs2D531Nv8a9FzJ4S5Ljetw2oeSAjyoYiKeRe1GrFxKzy",
  "key44": "5Pi3VAA94z3bw2Qakb6Az1tN8Jhw9R8jYRnbkn6B69sjWghg9AywaPTWBAzVdgJTYAZ2HvaGpTdpxfbEMraCh3JU",
  "key45": "2TcEFG3WQvsxXhZ6bgPKCzsU5t5rz6s6aAksPkUyH5txyBQ1ocCKzPY7bFRacHMcQommFms24Cke2pUNoEQNWppT",
  "key46": "4ipE77HEfbVoVxPWGRhfVjmfAM6q3zsqG2obVY4U9kJDB639seX3fVDoymUZmw3F3aV2TQXQ3esYN9KyRyiCnhsJ"
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
