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
    "5nZPhWg37LAewmxjvCgewoBwrcnwV5N9qLgrrXUWvAkk4cZMvu9dfvgFppkBJKWRoCNfzfMyCSSCEhfqnUg8fQa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Se62pxToeAu5AozJxiR4CTnoeY1ffo2JdyBk2XQJ8aaV9EqU1iUSJVkUommRNBYriU7iaV71KA1JuieGZkDfbV4",
  "key1": "2c9vuajTvfLSTJTJ16vJyZjhFUGqUgRpF6KyDCj7fgPEA1i9w766hdrdNpYWhJX24cxpNychqjTQEKqLdpAfgvkK",
  "key2": "49K8iHnUL66qBsYg3VEsvn9W95R58hXdLxPPy71V33TSBfDKbG94xaRhxuWB4Po9WPSXRSmXQh9g6CdWS6yzs5jk",
  "key3": "Ck64Kwe9aB98m3oy1ZwukvP3Y34nTdToTRsUtU8Bd91WofdFAybiqLno9sVZBXfv5JHqDirtKGMTMhSFB7uVssK",
  "key4": "2CzvhNhgRVM4NmCdiUisyW7gyRGtENEuoHYnWFmxwXb17oFEGKsZ1kuMSM3dS6mDKfawWCgyUhysnLdRTmXFdCDy",
  "key5": "2Teji4zuVMxQjM9SAngUaTQjyymhdsNyfvt2diWocwaJPjyao6q9CUNAuw4uiuVNV9NDegRiwio6GNPTJ5Cuew4",
  "key6": "5gxLwBbZgfBPPXrkVxdpubzZW72bSEgoLtTKEwF64QLRteTevwJnYJuHmmNcvbqeniA24X39TxRZCqexjvdcrHPW",
  "key7": "rZFg9BpaA3QvUHZPN5AjowzJCpqzd3PhBxZAkYC8cEUtfSemLtKmXtdiXj8aPj6G7XUkCMsF8ruqa6imhxW2rb8",
  "key8": "4i2LqGFZR2iumUCGXKBszPbVjHEmZbvucD631SiKVU2VGJhev9YBN3YxaffpoiquX4rkWyJhhPhWtjtbM7dj5W5B",
  "key9": "5Y7G7BAhApN4mhoLpMwTZpgZ5rYe2KtvSMaRACrh54RadyivRacQiiezWNUFeDzNK6z3NiKodLM8g49gkub6NRhU",
  "key10": "3Lc6tArFcansNzUAUhTRxizvSg9wUv67fN6ALD4ZYcmSVoJhCM9eqE71qz5zFdH2VXAUaXyrcVwxxz41Q2GXXxWF",
  "key11": "3bcNDH5F7uniMFCoaig9w6fzLueN7e4GyByjSxWTXSESdxmVcxickcZzDZbgFntbvqTLN69sBFVZG8hnmge54QwN",
  "key12": "BNpsgFotitnntvbtVtfeUwDPYeBC5nRiUrSyisGSd1Fgcw9D5EL23orW9EjQ4z3b7b7E3ngsHKgNdhXTGEFydjL",
  "key13": "bJ36Amby8jLrpCryHDVa6L8xVKFfPpVS4gxY7PdbS38hKCDcuF23scYcMvnxnmCCB88NW2NY6REjT2mVP5s2evv",
  "key14": "45Zd48u9disuvM25HJ48zmd3ddxQcAnhznR4zZraidksDU6shLdS4wQNKeLCy6cPVrf9gtBXbnCmyx97yeFh2B2W",
  "key15": "5nS5dSJZCMmyGuzEyAKYs1GNWJLiP5FxnDZxsSFqz2MCDWtaEND7vwSsaw1bC7y4DSyDnTjyingD3qNMwdoEsJkQ",
  "key16": "58y83eb28PpyXqeVm2qhqAnqUpCWeCk2touXjcz594ar4MVWWTGThKvKXQ9haBzyPp9dqLpWgYz1M9fqCLmQafTp",
  "key17": "3zrr6eT6x6AWztZvupS7dZTSCeU9yLLFjonjY47EPLU9tje7usBZZcKhFk3rMj1hVNSrQxoYpJQ4SBU9Juy2zPi6",
  "key18": "BpxdfvbSfa1W94ZuvWm9wUjoARqHp8BpEBKTxYceyiR98rfTtnwvPoF5D5RCyi7kLYmCxbwmf4e4sF4FhYgRbAU",
  "key19": "4DKqz3sY28PjyL5ebqtCNYPsiY4jqNPF1sDH96D6rj4UPntiwfXqzebHSBHTT62JcsjsJmwxHRww8jXLU8tLu9MN",
  "key20": "4unBXp2j28i6mibkfBRUttHksuXrnGmxvnrpkE3LtvfNsWKrmesyvpuxnQ7CUPFb2FhFKjC3bsJjarWYipEytNLx",
  "key21": "jpegXPCG9sMz4ztk7GwnMHubkWf5WdscTxsfcnk987B9ve3dcK8XrfKYMgkzzg8Conm2NbyWsYPBSrachdEe3Zb",
  "key22": "5d8kV48Xn1fdwLAdM5heej5FRiC79ontzCiustaMiYYcTF4rtm4Ucp7YEsiGJC4SczxV4aDnkxW8NEt85i74nHbK",
  "key23": "3DVGs3ZgzRqW3KA3PC3Q6Vez5SyPGbYJ6UH7yho6Rn1DvqjdTRAdQSibzqPjrGohit2SoZfh5yCPS22A1qKBwFnL",
  "key24": "4t2CDWRNWapMzEN5i5hMbc9o8PMC7Eu3hNRZLqXb46vfdnU3DGed9t4XUw3ATweLMAxBYUVAe8sb5vHpUkoDqzo3",
  "key25": "65VWvA4fb4JbjxGzHLGrKd3ULX54HCwEmzvKbazeNPiwhSDJmo95X1RsekZk4rHiPEo32s3GUP6d2f35wK11SiCv",
  "key26": "4K18Ze8GcHsAFrHufAEro9zYodFd3HpDYoyThRf6yqffi7qQCmw18cs3EH3n2L2xVDWDXcrWBdZMrhsMSp4YV2eq",
  "key27": "m9UCn6zZrDq894d5wCuG5EybFjVBgVVrGbAUJtrbaXpniFoaKesoy3nEC7aH7XSnjTtABZjXskLhjwzuEz6Rzvi",
  "key28": "2oyTthoShiB74UCamYMtWGmnoFBGahG2L1TdX4PSnVPdWp6rXjQkwhQGaZsSLE36XjtWUs1bsnX8gAnqx4znAC4V",
  "key29": "48s1X2Hq2yBxRze3BjRF8Tn9wc6PjMBYajPGz3vvXHtRwyTR8GUSdxtDgbriqHX12nP47Ca1axiNZjRGM5xKf7dR",
  "key30": "5waTZDpyhv4KpdcmCVjdYsH7hKApXZD1Qd7XPERJFb4NJtecyYMtWetFssgwo7kgEUJFGe8YS1KhSp1v1YT4aPdh",
  "key31": "4TVqtpZ5AKjDfZi435mN69zTHowaqrV9e4fo7DkaYzUM8J1rWZaKui9q71vnkCWcmigo8dmUewMn37LY9FYVBEpw",
  "key32": "58mCmJDaRfdBAwMvqYTWgXV7FQwSHPY5cW5jt3kLrKNAW9GAVoAfdMXg1S7BavcJGV7WPZh7D1SAmGGsADcDoSbj",
  "key33": "3tX3MZYZjUakrgoTNvUixFdhufCmtuCgRRyQM3da4jtme5r4hAEQMbRgVmCmfj27NSQYETxJyJR5qFMqVQtuWs12",
  "key34": "3gEKYYqVxoyNtN3bzJrGYnZuTzXBjZaEjFRtkyc7eKUP7smCSb9nMtcJCsEwcpU4P73YyXoG98RokXvN17NPagfz",
  "key35": "3VeLbt2NgeUKWLnWtZGRpsCQ4H5ZSsCh8NjrJCrMBXzbJ3T6WDA3KmpWnrTH3uuDHpACtVys6j7Hd6Hy3vYWQGiM",
  "key36": "5f7hXovPjm6YC1c1vGoP5mjsqsbxz37W1ZccXzehXQan2UytpmWyzAM5XjwA1LUGcqoxHJ5Ee5nsupPPTentqzCk",
  "key37": "5fd9uUGH4FN8XT3xjcgqBg9t1sgqwxyGV3qekGcbHzKTZ9c8NYGk9Fs9YjSR5c6i53yAJwyorhRvzQzDHrsKYG22",
  "key38": "4UtbbCAKknH84KZH6M7tAebbux8ouuB3PWYWrXK344KEs2DPsHyXYMKZAmG7CYSs1JNdeY4oiEUuasRHfmA9GVUV",
  "key39": "3g3DmL6PWhKPHx7qcRkzxjTZbk3GEDi7NYrg1c3fqGFLiEQT6ceFgrewc9diMhPyzL7SXXF9ocZFem7GZdCohW8E",
  "key40": "4BFNbGfzGszCtmnydRZDfeJLLtPaCJWabuPusDgyqsmg3ifx9a6p4xvgdmFW8Uaw32THhJaPckHghDMqd4p89ui",
  "key41": "3NcV3N4BZiyfQnLhNzCtWeJZHESCmPuKyckRw5oodptgBdJy1wfsqrb8XWsx2qriLq41r68UjUJEAr8xJ82iqWim",
  "key42": "5yFp5adt3pJiULou7kJ6XsktX1FruWo7cyWkzePZhkDk2sj4NMc9ApUiej8Sq8pk39mvLUDa2tZHzg4Tnx2jUFr2",
  "key43": "icH3YU31BPAgdwZaeRjqQ9Ee4ZeTvNDvoCDT7VyMkndzC3ZqZHg5vg1G4kN6FP27D9A4Ss49xjCu3SqkxbYyTHv",
  "key44": "28Q8qKsuJJgvLGDar8xCKCevpVeLjkssdFrorxbucNXGH2hW1msMMsHQBvTBhSMxrATxEPcDz8yJcFprSEuQvkFB",
  "key45": "27E3pvCgxgMBKUA17VwubTWFwEFbwobqiLpwhNBNiqvPYpV2qo6mysca39StMtiWFHFJeYexqskdxCrHhTMp4ny5"
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
