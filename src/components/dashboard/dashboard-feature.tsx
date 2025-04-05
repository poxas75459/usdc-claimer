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
    "A9hkz71GRmNDaig5j5pKMfXL7wZQpcgBc7RxQiAgPjx3tuCXC9H6dPCzur8MXFXwDYCdY9ok1WMWq4dYXoUv94Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KqELJ3ibN3v9rZs54ZpbWNxEEJ3VhpDwTvXSfNm9pYFEpNeQaPRuHmN4RSXyVtScXZuqcXeTe7r4gKSWGaS6rdh",
  "key1": "5pyCacXAFCo2QwikpLGniJHqRKG2DadFVauyyX3gKyq79LMcAma3yK5pkAKPFoGXAZdeK13mfujJPPrFTbWYMmv6",
  "key2": "kwUSZpqUGjGuFEpoLs4v4KJ9kFACdwEuDPcx38vxzqwsTG32GtgtH9zA7qJ4qQF67zYiohWhzWpGvvfe7FbPu9J",
  "key3": "5xjDYwCD3eVC5dwpB8Zfv8bA8MqyLfRP6CSjirECACCcsn12nuYyoipg6sZ6RkP5uQeKENAxbCrS4CjUF9n9Qf5S",
  "key4": "oFyN7u3YbqphnbSdatB8Qosca3Ns3GHeQaBFs6xKL76obuo4M18gipzqUfn5BHXr9KeE7JecPvPM3bCSfXQxjty",
  "key5": "5UgRDMg3GspXYYoVyZabCrQPNo4WCn18BXnRu7rh4HC3aZ7cjQbuXGTbDCKEuDyMVuh1V8uxhusii4NQAoUYdzcY",
  "key6": "3rNH9xJt247LR2BJxsnenoWtBPDen6CwqUruBkYbjpCU9eKWCG2fHCfLbs14sz2oq4DcrwF69TKQSAPmoh24N1dF",
  "key7": "4b6eGa2hjDLtAVEm8A7E2EgZuAz33GkcP8Yso2x1F42qU54NJnsbkY4q25dMZLukiB1fJuumSHjN3t6m1QQpYmbU",
  "key8": "3cB3PreuKoTdtTKmgsmWd3M3g6dRhWXy75HkEnuHin6dPg3Ksff4jXVWUTqa8ymuj8xJRGcUuTMZuXQMbbGu1CDJ",
  "key9": "3bgqyCsQTHiHaK4VpUAoKUnPA6rP1iuVdnqe1NQirwYp6rZEnZQAeWLFDNT88pssVS4jxnNeSWY6rrmpUbxPvWYk",
  "key10": "5yJGNdxFN4yAmXdjFvFoPxHendHyNU5uxoEiDogD9BWTHEtJo3cvxMK22GmaX8JRnrf2rrdCnYGm3Go2t8x5fv2i",
  "key11": "25m6AwsCVPrmhfVfszYDUhRbTdHrNZTems4Dm5uiRdb6LgntCPeSUF3Wq2rM67JWQ5VShYZHpZmMsnB4J2QMJxsv",
  "key12": "M95mq1dHuXawKxZvhgPvNXphWqzovU8CD69wTf2AHNiW1XPqWvxkouaD724tNXpL1LTFQnRx2LCZBzQdf1HrBsC",
  "key13": "JzsAXxXwgki8ymZRkJbz2X69aZ1E6ZoXSVpJ8CzLSnKkbinMEuffnDniNTrgdaj8ZYYDJbQwFF7Vdpp4321QSiu",
  "key14": "oRKfeZx3gQ5y3P4VWmuQC7PUmRyD9WVQnUWqi2dQDyJtJCGcpxUfLAGi6S7YZEfPXEciqRqgeTh6nS2BhoLAHVY",
  "key15": "3jSM8jWdYF6ufGUppL3fmmQd1i3ArCjKkA5sFXX9QURaQhiW1jgrp5wU1PgvFNAHnW8TKxZzHRWAJMiikxDUj378",
  "key16": "38Tptk9MWsAkFiUb9qRF8UFQJesNdvXcwLzEYtNd5XyjEpYzdhSwm7aucikgS5jrvkosm3F65Nmyz7CAiC14fj7n",
  "key17": "GvbovVWM2iGyyNiRzSq5vJCQJbwCFs9HUegikBhk8jVvRHAywX8qhmt8FywckuimKmU6jTmRZHubPzxJanvpZ1C",
  "key18": "AjChiR7xvn3ucyL7x6tegD2T6D7i9Kr6RU9bBDyCwT9Q15fZwEqry1LxMzP7nSVRJhuyfosEfE95ex6qztxdcST",
  "key19": "fZCWaMqnBbX7wKWbb1fBHhhrsrRCUwKfTihuSS5tQxvC8DwuiSnRqDjStWQiiTkjjvZeGWjsV8Jd4wVwsuGVjTj",
  "key20": "4gqFZhPPuFVrxvDArYC6Rsdgw3hcLnqmVLjpdkqqyxYomooCxncGBxDTFbTfRrsWPXnPyKbRLCvNJ3jWcoDYWuv8",
  "key21": "2NyBJKfon18M7cCtHmVGXxRZ7YbGL1YqH6N5LFgQvi81PPDkX9sQG9sQc4MBNjgE1FdeBctb5EjLiyTA45CYr716",
  "key22": "4XAX4QkEYtck8WriqFyoniWscUkEjcBSr4gXhBg5zh7G4FwFF8Qu1F8bL2YuVtda8f3Ak1nGf2Bisg19Z9xARthh",
  "key23": "26z4HjARDEJdemXuiLWFhCjDgUJwtimMrno4Miye17KBL3ksnN8cFaEa78jb9dJ6eSaJRWePbX5Ur8bALbdvXiq2",
  "key24": "64XLDb1wxUbxYyFufKdEHNfUh8k5suEVNbY4dKd3qGMzvPTmbBdmf9duFsyFUkb3QSxGR7nRiKJsDNSG5aSPnhLS",
  "key25": "3eVQPWW5FcNQLVsRVrS4EagmcvHAT9jmHAfczMmXQnAw99kKNm1jp57EWdurZZzivZjeB9m7Pxr6qx3jkAdT6PTr",
  "key26": "4iu4HcGTE87YiF4AfNMKXNJP4HLpWvH5iHz1QqaFLDfop1W23ujGMDVLqMPEc1EgCtQm61uma7C1815Cx9LfFCaX",
  "key27": "4HR5EjuUBHgt2rKGtA3Cvwsrjr7heCPA4NEzEzJdiMfbhNfJrWtvNZ4KEiSLCThqEtxpzDyWZzqXWgpCyrGMkF5t",
  "key28": "4SMePQJdbKxJRSTqLSUyjEbuXPggdMeaRLXcXCoEcuy6zJkbauBRkxnXTYX3SC2MQMX8Fff3QoTd7hPni1Bhj5bf",
  "key29": "3YKiSMsCu7XufUZkJx1XqBBbQgPtJx9YUYAjaNC6d1YiDDyHyrY4ZJc8oWbfYgDSjLB2NU7qy3ftfGhhoB5s69KE",
  "key30": "ZTnJFDhsAJZF1ZVyF5EFisnBE9YmneLHaSCWsksb9HR3utQdHd9qkYbJFCHzqno2ERSSMBWt61ERS7qt2KtZfSB",
  "key31": "53KfSKGSKMDVAVoyVvkJzNjQ56bEcDhXsrT3FHSfKSkTfjSaULcD8s5UnLo3G1CqMW6LZxecD76Xm7xAszxXK2jj",
  "key32": "ALzKM5v2z2MDxXx4pf3GE6w1bHj3hxSBE39aEmtj41XLwcVT2Hgz1CbM5VCzedcV4Mw4iqJNGx3zbcpG11KTaBx",
  "key33": "3Fey9cEKmKAm1FLpsB7dqR5FqyfpZgRFfJfNZfnE2P9fehfBG1FTTjuy4sZrfyRXXZPNLPJ9GGyHePKKHVv1NHbu",
  "key34": "B6JGeN1i1NhsQiVqMNnbjf9woVEjCoor7fkFDqG2MFvYqcBf4KjLccyhaVHFcT8hWrkywLCmJ8LrQExrDmVe9SC",
  "key35": "2RC7WWgBQmQtgh2qW3GHXz3uSXxhPZbkKAqBjXnJtnFPzFTFZW8Q8mq7wWsgw3ZmbGfTQMQFmzVABwLy34sL9dzV",
  "key36": "gwefaErXzMdMquK4GbX5emcNkoczZu6BQeV6pfY97NZ9qLoQw3gtLkmed9xSc9g26xprBAp2G3Uv888wkDUzCdm",
  "key37": "53iy3WYrGuTYaKbyW8MvUcYKC5uQu5sEArsJ3C6fTuXtaryF6md7prAUYPPu5y45m7CC7ezHJ5TUeHS9ma3b8MF9",
  "key38": "29eFwtrHaVYPp2jEDwJb2CdADUh57H5w5NJJzjcKtpf11QU8t637hisyFequP3vbgGzu7LLCbM5PWU9xUzjFm2Hk",
  "key39": "2a7mi56KEa82Z2rHok9jrwTgAwZzUwonh2thqzdBDyS9ct4obbSDEYvymVdX7NMqNEUputWJzXD7Saj5JrGyDtxi",
  "key40": "1Q4tCcFpQboGN6y4x2qUopUEfD1WvPQfyvkURbJFksEvvg5r1p3tb6dPcjrHmjvi2WXkmjzbLYZ8PAv11kVQNvx",
  "key41": "5aKePgDcuVzFN5USzMVqTcSTuaXpWJRKEWKNzoMb83k9wzunYd3DumXc3z1Hxui8JK9N1d9mv4ms4YPsuXzJ2tvi",
  "key42": "61ULCKLwVX2aw16Sn25jfwKDDkHUktRtpvAE8AnBC79yLXUBF1FwbcVz8pAfPahsPqxgpBkfP1Hge1jmsuXvg8Rc",
  "key43": "2u26XNR5rbL4KBmW6QsDruYESquzKZS2pNo1LF5xFJfNPS1ZVCzkRrLMqseeuajj8WWj1bq1YgmR4wV6mg6x7tyU",
  "key44": "ekhcZidCWRh4rMPExTvGey51aHfJfuxyd47ZyWsmsQ2ENXTtyPm5WdW67bXb5nwEwmu2CotEDNkzkaELe8PCMZU"
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
