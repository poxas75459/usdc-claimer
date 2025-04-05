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
    "1uskTxyKke9HuK3XpYTd8RiW3FmDQdAQY4KuYWNSnxMs5EterdY2NrrEVWnmhXf91oBbkyhjnhpQgRGdAPLPWMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EVFvjoYiD83RS5ZkeyNPwQnGjnDfuZJ5kj19X9HJiZ2HWqpCXt2fQ2iCvjyugP3pvDqkp8QQXZaZeF7STKEhxdh",
  "key1": "FXAGvZZeqce4mBSDDKFat94EyQn1jB1eV1LmE2g2ENoc4TYWLnAkJAzp1dAVUpmAaiqBFTqJ87eqyZBUEeSqz7y",
  "key2": "38Vd4KSnoLd4UvGToL66jXbzNac1nGUCnz6gyFiBBbACCozmY1iMF1H92gmu2JaiDnxxoCcURt6fitYBujwsqm7U",
  "key3": "5zM59Ur4kZJqyBF1zHtK69mmLw7iKFAqTbP9G3VEcVZVPBY6rzVuSfRFg5kG6vGNPiPvVW2GCjzqiLEUThHBqZqv",
  "key4": "X8XKuV4gSx9LTSG7HBk1hibK3w4zGWxwsnFmFnsuDDUAFznFrsjuD5NDT8wo5hPcPT3b7NM1T9F1j3Acgusw4XL",
  "key5": "3PLup9jKxHCExfvwL5nqNMCgqEXG1XpeE562cguHca3RidWGKopvninCtPAp9JCrmY2SfmohLsHfWPNi5LKxxeSX",
  "key6": "5geqksFyaUKfdpf1L3bbqN1TiXvGnvbMSUhkhfM1w5QYtLE4K4MYCPmv8FmMrxS2JtExajNdWfyHzHv2tgVwDVc2",
  "key7": "3CBXHrNsFiYsofCtDoSxRjJoYccbVLcvfEoJdCeJEdhJrtCUzK7UkDwDqbZSgjPFGnwKwT1gntxg7NqvHyebm7S7",
  "key8": "25UnJeR32Y8RT8eVRHvkbM9C9P16CqNRoL4NPKrhE15iY94ZWyG2T1gu5iacWoaRz3GnmUMB6FbHydeDjNWKD8L4",
  "key9": "5J8kdrfGHmeoYkEKoF6RQcbJ95LAv74t2CCkqmhHtDRhQXG8rTTmPT2HTbRYa8HzSDutcoR1Gx3ELLVjGYDkscHR",
  "key10": "45qGmoJL8REMZuyayY6qSr5Uqt11C4uAZ8xGPrZkd6utkFesqVU9GSC1zDB1w3izxpnuFBvRGJXQCvYNZDvNRpWQ",
  "key11": "2Lc4T5xAneSsFPdtLZ1EVBrafU33E1DRNBzeEAFWGeqCYZ4Ub5cpkZBPmug8jnbGNkLxzUtcoqKymJVktN8RTfe3",
  "key12": "3T9sNUjyABN3LqrRCGy3rpaBPBG63xLBrQs9MZKhhHy7LGQZiK5Gtk6jM5PSJ6mD6nXshz9XRvYkPWhxBrpensK5",
  "key13": "2HSP7gZgdpujN4povsqHVhdJsbFbDxMhQmffRa7hfg1YvcY7vvRkBLb72WpaVQR4tavgFTx26d5uqF7skgbAzG86",
  "key14": "wYAnbfFckuxScCLMb9rbbnM6cGoCa4s24ntvxawqLr7MQ75oEqS5BF2JoJnAFphdCzmKbeAMdTv43MoEzSaFKqy",
  "key15": "5sKsEdodvNYrivD9mFpZdhne6FxUqCudFEq6B4iwFdHVrU3Fm2KGA4ynwi6nGXVeAumf2p94rDwuBy7EfERvLyPk",
  "key16": "3UYqT5zrHRhK8RQbc2ifNuAFk1cDuXQsLgY9K7pC3bPNEWU8XSN3p5JrY7EPMTbtVV5N3kmG9etsz4DnkEuqdkn",
  "key17": "4RGEVj2BmePbtSHgQe6HnapYRgAcENov7yEwoYXaTwQLRskipcncXCbsmg68eryfJhrE7jJYgdb7AbR6VapuXTgF",
  "key18": "s8Fdjw8Pwizo6pG95xTwbZ3LSWrRmD4pd6YSqynbcC24tbwjhMpVomN19cKrBe9g4n4WiWdiDAVSa3zKBCB3jrp",
  "key19": "5Bof3gJFquQBknUyb9EtSNUfoiCRjM2LqrTXa6YHwZb73SrVuYN6asTdc3YeGRqG5jBgVLkHBijazoAsoSaJV5aM",
  "key20": "67GfxSvNTmSbvJDmRtVLXwWuhDv6RHmdrBJaAGYtRqQTvcKQAMNkvexpJMJzVPrMN7GoJbj9Qr117VjmKCe9u3hn",
  "key21": "3GtNCzeRHJvQUDM3b8EXdr9cQU9zLS6RQ2hUGVTczBNZHR2cWq6XdEfxZNWg2L7M5DkpnGppyJ7A5eJjXX6zuZ6p",
  "key22": "PsJUzrBXskJi3vaScgq2R4RV3pAhPsBYpRjVGY9WG9vNsX7WwQXcnMg3PpDw4Sdmv67ySE4ocBenJkMKW7ATGPm",
  "key23": "CdAgW1QF7RGbP7a43GGN9gvsk7Rr8eZgXu8iy1Q9cEiVzrXzrbUhEuzYzRn3Kambq8ufvAokps4EK9BNCzfj19m",
  "key24": "8hrcimKiSTRHdSsARHAx7nriziQ7NaFoab2pyWkNQ4eTmwhRwwrDktQi8dMB1dSbaMj2a3ggX7SzGWCCLwigdem",
  "key25": "5Kgmf16XnMb4fG197k3GeKZhQZi86wZ7ixgdkmFdC6WnsEY9yry9A3YrHDvs1ShWUEVVbHg5MhPjSEQ2fmmVqtAY",
  "key26": "3eAzaG4ayiBSucUPUaNzXt77xMsJy9jTfRfMbGU45GPckdsSrK6VUFQFiFutYTPCLtwtciTrU1ChtwMTnnKkK8Ls",
  "key27": "CyAQJyriV2PEVcywc6N77ZT2Nstk3PUwbMc9dEd9xniv1h95pz9P3EEt7jZBmgETvk8yGc4cyR276gJgXooEdqs",
  "key28": "3uqsmsDzYtixqfSPqTggyNAxvo76Yo7wPc5MJ9uSkqMbBgD4qTbEP1UpQmyzQ6KCs89tGHj1kBksw8zxoNNAPmVR",
  "key29": "YrRJP8wabrFhWFQEGq9LrzKRT75jyZCBmnekf2Wu2m273cef2Ru7WjeiziwqgAW2rxnpFYo6i4ayXbHqufbxoJ3",
  "key30": "2BzivGrPThLyiHAEMdS1nsgGHwhXso11aSFW3y5GWX3BH7t8VCTp839MPzgJBVx5Ew7tBPpDR4HFKtpcN3Yi1BuK",
  "key31": "5PyhTrvpe412RdJWn6PmXxWHqBTyyq5XtqNgTjzPJNZztqhZ1AYcHNYn1gk3anXPNAUgoRssxUc69qq1Rk6FMg14",
  "key32": "5hdwkaVpFXbXaszHsWX7J2xKPz3T7UenVbpwTnMjMpYsuc1VaQp1CvgCjPfh8k7MQQpUWhHMyMyGMU2yfadamEpv",
  "key33": "4G3P7rZSkEENDubFjnQc7ty4SpxT9KLEkmUgGCFyELp1JFwheaLBtjUatvtAWgDTtDtq5WJUnbGsdpobiw6FNRap",
  "key34": "3XUy6Xp9J8HknDJaD8YJvBwNiE8yzi4SRcuiWUHxp2gAsg3RHmPof5y9PzS5HUPD4ZbZTkreXn76o9ofu85mLDR1",
  "key35": "2wAujXE6sqpHZdvHbLgH4XmCVGWbK2uoTxhGnKPrZZzDcvLKzFoYfJbmmSrsaMoKmibyCTKT4i281NKQKxAzzXPD",
  "key36": "2DDoqxMrigDheLML5G4ck7Chw6ofrDn8Qz1p41yrFe4iyMTWtgMhECFM5j3JjsKrvCrVrTYXw7DK84zjjXky6rbd",
  "key37": "5DL3LQ4ZBwiYZpXGZ8sBvg7xiXvyjJeTr8uvqCBa2vxQgnV8FjSHhsXsQnAE9VUpsVJ8mKE1HcT5nFJHxBudfeLH",
  "key38": "5bmXiP95PejK52o5mxkBUDNcnYSAEwFnMWjTk8rFNGXEBbdsXy2RiiPkGRaasDyBJqWrjB62Bvm9S7omND3t1azC",
  "key39": "49JU3dachLxPGj32GUZw2ox7g34Z5cjNpdbXYecALh7Q5769g1evutQDkqqwp73Qnt8GBtNGmxorZVkXTDCw5psk",
  "key40": "2ReM9MUyBjrNApxkFzJ9tJ3DypwsNpP1Gep7w8jRyzWadADQLJUMUeZ8Ch1LQ6RNzmwasihH7Zg8sgh5wZhMuMoM",
  "key41": "2wzdb9ptmhUAYpw7XugJ8u9DEQ5n7NTG8yFVfTKprj7Qt81SQMD5LTCpxA3rBvdBbigxUaw2e7vPURgC9F1V4dFL",
  "key42": "53HyUaWmPjYab9B2yNXdM3guAbTQSFjuhjhHW2JtPRU5RoU3jF2Vj39GTCXoTo68TQ56zqYjHW4bPSvnMPMjPDzw",
  "key43": "5uSJWgLzyeJJMPFpTCj5fy5ZViq9CXVUFCjW7HqMtYnYyHxVqi31eJBgzSH3QRxtycpJGvkH8JLabNu4mc8xptCX"
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
