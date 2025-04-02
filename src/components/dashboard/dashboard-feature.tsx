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
    "3KQPbVFardUsQZp3gVoxem2XD7VEhe8rLJJeiPpb42gnPwsmrXFqMSNWaFxLiGHstTwDaXV2pwmPmy1tLw3XFT1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YcGnrSfT3gTSExcEsXLGBTbsDNGufE6ozWGHrKrQ94ZTPTGRhNNkZWpe5dKq3C3xJYWb3R7tTbLFrKzJgzZceLc",
  "key1": "4oF9rrtNHjL65wpRPJctVBkWt3MjCN63cTwmVcvW8FxCVrL7n1gLtrqQirTfMZ4WEY9rbYu7iXATxivmBbHsmaKL",
  "key2": "3avZBngPULA8BrRYQkPMYNJSaQ3AdxYqidEroqgZFacgtKY4tLP5b9raAsUjBUM3jTSvMTcqYMyesLcPbKRuxhg9",
  "key3": "zvnAfxJH7VQCBtrfhkfKv311FBgkRxwebEvuqW4Zsm9WgHT63BH4Vc119vTL9DRiK4XMsYGUyN1FjtqM7hA49Js",
  "key4": "28MGmQb7DswPa86axN7r6nNypTX2MHygGZywYygHoWxUjD4sqEZnGaUR3tpGvDnYdFgTGSg1pJeRyUZcXV5ZnWvc",
  "key5": "3BUH6h52QuE5EAACtu5Fhy1rAC2Cru9e6MM96awrRRDuxknR6iowwbftbNjLGi36oNXVwAPuEUySafTTaE2s6rbM",
  "key6": "MyhJHKDSFgJHp91ZWDduHr2GNviEUcJwkKuV6pP1axfwzXa9EnpawmKiqXkarpRvGQk9LpfLjxH1xRPzf2KnSmC",
  "key7": "5Z9WgWDMnowZBxF1tvhvy8Y58DqnS6vCwsGcxoVs2mkzJfG97A48CWfrcb5zjAEYHAvAGVjhQoDLwftNdXdrL89j",
  "key8": "579kYa2a8vfWYRxLP7QvTNz3pFMfJof446Z9pNxFiqJgCVYoxf6BEpXYeJDHVeKnNmVxXaYctjSUKhLNf9E7mpog",
  "key9": "5aXS1Tpr5EJDPz3JAGDdQ3tp5pCCFuSyogs76A1ovzS96RAdRaNpGe3jiB38b2jE8rPTW8HcgbqKerxPRmtQgiLy",
  "key10": "53gkifPwM7tGwPBzKjhafr7aXy59p584XCEhiuaBs7SAz9sNPzh1re2n9PsAALv9mDNrvgnkDZRrp6ZyjTivjywH",
  "key11": "4pDpyvtvc5tDn9PVJVbFg36Y21rXhRnVzfJnZhU6dtQD9VdjGyk1UzGP1L3wPBaZ2oc82k271XaYg6u55cBusrJh",
  "key12": "5i4VerJZ9DbcZ3inx28E56QX95vgok2WDccZUR7ac1xrhNjy3SoPtwidRE8A1BxqpUPVxVR5TMyPvs94WGAh3UHZ",
  "key13": "3ejUcNdweRdEyt8mb5NyZczkfuBy9fecsTtaXXjNYaY7X6tMGX9r9K4Pbt3NzJsNxrSgpsL8QNsniEn8YReb8Wfp",
  "key14": "QE4owYPmeAa16zFgUD71yiEUzBE22N3J7zuQPWHvEVLZXx5AiARzigt6Fnw2o6WpDFcYHrLoP8u1tkYUP9dwbZS",
  "key15": "5cBJUyU35ELQ93B4jztDyypimaSu3E7juEVoowbJtQYLPSPEK7DeTR3pRbkMbnmnHqbuZP4QEVcjSf91v6hP53AJ",
  "key16": "3xzdrdHSPQuC2iyFZ2h74NjgbLYkPf7vNXAKsddGeAYNMTKFnQSR541VDBC7KkeGEConsCuy55NPwUabGkiSVPNz",
  "key17": "56DNvZ2nTKeznn4DeCheVCe2EXHPM7a8wkLpLeWFgWsf5BfbF726doFY6pfRieAymbtpkyctBjY4JT51KiyH4xdv",
  "key18": "3BQ8p8GXWPwKYSrAvQATbBJP4hRwNZr1QGFmHaNuyYiU4BrpKyzpX9xMMehDH2ZNjF7MpxFqhRftjVVsTTtKwgKS",
  "key19": "4LxhjrEUPUujp5oTBc6b1opDkBhn6Q6dFtvp2Sd44jpQncZf3i5nK5qRit79wdijGc2VKjkqLv2gBgM2ebdh4Ask",
  "key20": "4eeg9DqkNpMpiSyJ3Hn1NLHEq6hZJe1m2Bgka5e9K9so25RvM8dTNeNZ86prCwj6fnmbzZ3gkgEqRuj3Trg9bd4C",
  "key21": "38KFgHzyLL33jaUnHJSQzDTSdqb2VoG4XL17EoXhY3sJpZuGiDjQHF2D5CmEDEbmic64E6UcNZQpG6kw53ctySxs",
  "key22": "5vQRqK4kiG5WspAvpbkaDRVFDpPtCmjWCUejBd4MTpfcV4LnTTkiXgRJKJGhcNJSwXUV8sMNPWw2PCBs3njj7oLR",
  "key23": "2ubEGgtU5ZonvxYB4Ac3nFKSf2D3iKjrkxST1jQnww7vARdrmGZYG9Rios3xr76UfyjS93LMWjo35Ga7Ux7sjWXb",
  "key24": "57kKXpBafB9MDdiCFD9p4AuRZUD3GFkyHZQ8X9jTYsqHtKAQjAXiVaqL5DkfyATu9cSxVdo1Zvsak418y5DwGnqL",
  "key25": "2vMPWXaqiMcMcSjkJDvUZvZ2WucA3jVfbom6iiKietgTna9fMuxdK3mptERvPz3jxfio8bm5FcA385Qpwzmc89YY",
  "key26": "3dxvnJNSzT9rU6XJCUG2pqyWvTKijEnxbpDxj3MQTnD8ezX9xjhPRPUE9gqtf6bNjg4Z1TwMSVHWNNyTfcRRAWEo",
  "key27": "45r77DkborwZRNvhX39kR2GLdLg4MQhJDxu8jYy3LXS1Fykb1GXzZ3zSTEoaHgbKbHj12KzRZNDJtVT7HkX2apUi",
  "key28": "4yD2YaHH2XXqsVYze3PusY9AZcxrK4Ygqq8wSkPJLMf36xo36SgmnCcVNx9HwNJwXyqhsSRphgvspsMxBRyhQpt3",
  "key29": "d4eQfkvU51p5s8kjYm5RCaf8hDYMWP6rxF9ZJA7zBTP57PqXNn3tvJFNEVrPC54D2Lr5fSfqzfrLL6Ftki67MnU",
  "key30": "2pLhL7fzeDuesQvfo93yxHHiGMHM4ergJb36vv6vJ9uH3w41Uunwe1ckoLoaca581LFdJFsSNHRm27ZzCaUba9a1",
  "key31": "43CZGkrRhGZ3VBGv3Yo3YPcAr6uqu4nviUMfutjG38czUqyF9mD8r6PZzHEk3RKi2AdSPbdrtUc7Ei5DT9KfqSTE",
  "key32": "2f2DSXMBpA9kNNJT9YvjtmcKNYoVF2hSDa7nhWJCJSj9j9xUJJij6Vudog381vijtXrxwcxnCXfi2Uj2RCuD41R3",
  "key33": "G2QUMJvsMBJSMoDakncBhAM4Jvbcw7jD21K31aAG3YK8mfnc13UWcdndj4RqJLSorUvBaMGz3cZAQSDUJhiQfuR",
  "key34": "2T8RjVf61nzSjzovuifTGWcmwTKDcq6BrT5v5pMpCtjXrypEe2CpxRxvFFRa1iX29MEdbAjZwUjDv58Hu5E2boQ6",
  "key35": "2NzLDm6EsWREx6KLKLrq6JiWr91b5STbfdwAUfCNWVa9EjsZtHBp9VFKDo9myNzN8U57sdzFXS54UsBvDAgYbdFB",
  "key36": "127XR19VTNt3mNCFMvDNDJA7cNvm5qcaWgxYwAvPgcvwtYAkn9iHYTmsnuwmp9xaU2y7X9524znsf7LXqj8gQTKj",
  "key37": "UddCjdN7ELiXxd1YahRW4RarQ7ES29SN3gsgxRkgcfkj2Z5BxuwLKZ9GYuiAXrBPS24km5b1HPkgkeVq1oCgEb6",
  "key38": "4FN8ChZpqQ38buyRmfwjXUheDL2TEpkbyE82HLU6N5C7NFfJnbMute5CAYTXuXueEecSKLmo1BibV4rUrAgQ5U1X",
  "key39": "22vzewsN7RQM8hcwrCnD2E1PUkUUZea61qwtjYjTEVSysB2UgveLVr7PMRjqD23fLHABzs1kBM7xU6WWkhYdpC5G",
  "key40": "3mnre3TyoBuHVEbinKQLCX92gF637Re7iys7JmgHX3QR7NCutycmudrFLksyRiBvHYnhvQ6MSNf5KwzVCfgoY3LJ",
  "key41": "39hgwVhV3TkVv1dfWVSkWWCSvYEb9vScp1y9GKrkmJ7pAYeWR1yJLrCrSQ4r3xRUSGNdXFHLzWect1TYvyD2gKj",
  "key42": "5fkhXBu7QDKm1BoWaz5kCMx2s5VSP8xfZquuqoRHmotFKbUMwEgiKMZi9NvrsiGabX3qyHUE3nph845w4C8TGKyH",
  "key43": "3YaetLPbSxTEKDhuQxLiQ7m9AhqYnrV3zz7w4GEqUdzJ6ZuJkqkZLQ42WPu3gvcuofqJJmikikq1dnbVkCt9WsJQ",
  "key44": "4RvrkRepkDfA2KuC9NbgsfEREcUfMkiDMXpnXjvQoUa4aWrZfSrxtjyre43f1txoAW3MvwA5XWBuKu5C95sqCRo7",
  "key45": "5pPc3YYP3yovSSg5qBwJZffjcyP3vii3EVhz6NM2TfjQNgcnKsv35PqMPyTVWWbcFqY7z31SCtCBr9XfAjTwmLag"
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
