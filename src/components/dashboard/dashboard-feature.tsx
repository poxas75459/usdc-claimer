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
    "3eMJUQA7ysNFL86cAAHfQ4DFwbCKezxHDJQaYmdQNprXtXdKiZpd544pQwPz1ErkpcYHaAJnxyvBtVP8XpQFFiic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J9u2b2znQ8vreBqtAwN8tfJYCNAn6c4QUfAafnm3ABTbGmUds8KZPG46gHx2kPtoS9K6HXkNYYmGQ53UFkzYb1X",
  "key1": "49ifYtQxBj6tuoTP9mZd5Hf3JdJ6VWEyX9MKrc1WdUwdXZbLyoMc3xw4JWMYeRHRYGZo4h9cnn5r6wRyFDwmCBSE",
  "key2": "5mV69akPtVXKdafKBQ152BzGXwaq3ngLig2EwRrVhqSpLJru5yXQGJP5NoDgiizpB8SABEuhRyXh6YfDMSMpiw37",
  "key3": "2NyDoK7C2Bhn9fsSpf84ntKXJ13jPTaaPDWaihVsxNbFSyrQuhD5h3482hjKfB1D8DL1A6zyD3YtS6etPHwvZ6ow",
  "key4": "3HiXRs5BK5mZax6iuAQevMiYjxsNzEhkrHg77mbubnsNMPfLgyanJ1uGHVMnqumZWuxAaGLqKn6TzckyhrbP9UiL",
  "key5": "43NH5xh3TMNHHevrE6syZs8huXFb27EkAHvU3RdJkVy8KLmMBG6MMk8mU7ayD9kRVPrc96Ypfy4R27TvgijWjP3i",
  "key6": "5cvuXULF41Jaw2SUeDySNFi8SaxS6EZZMDWTAkWMRd5GKqm5EWodxwREgfx3F5gHtTLjrP5iSXpWvwQtmFGCq3F1",
  "key7": "qpdgv8K2AjRTSNny6tQxPngLu68B8WfhYf59Y89t82fQfnw8VPtBJxsAEGYdEvHTW4oxxuRNtxSiaNQ5aM4KnPa",
  "key8": "4wtBCcFqjMT5zDxXEuTBFpPKSXmTT7vTTcW1nuVqANALCyMSRVB6WdtF3ZucdswakfPmDAoxrejcHmjy5DDGEpLD",
  "key9": "31gdxyDcLT4RxWGBBZnTUxMH249inkBcZYVEXz45Hx4PxDzXu35yNRH3v7jdc3Sy2HfXDKP3Yj8uymiY49Ap9RSm",
  "key10": "4hAhciJrf5rv65ZKkG5oJFHqJd6fzSSsSjdgpiE1sG6gmScgF8LSHZEu86eKfnzmpkz8ot64rAqf62bn5cjDnuh8",
  "key11": "3M5HStaqKnaTT9hMgKDRMzQkwgeB78U8FyLgvTbd9UJjgdr2LCW1t3HqUx2shMMe89tWZuDT9hAbo2hGq5UgCeRn",
  "key12": "3LJ1S41cmvtTSNMyiLdDvNDzbx7Gt2F6gkz5LULJhaJdJ4Wc8w59nv5t3urUD6KcVc6GNfrKrDNv9NM6EPDrE2HT",
  "key13": "5cjyixNPtZWcX3AUwxDqiVerWcZq9Khk7yuJ9hKq5FopL7YhafyJPHBxGQEvyo5RJtpoSpxv1wj8z9Dba6VxTqys",
  "key14": "2Wmsbz1f3x4tQJkEarjz6YZN94qRkFtj1ZkocyZJH93YUyAQseki9QvmZwgi57ogAjrPjUh3dpr7jM3XT8WzSpdS",
  "key15": "61CcAfNitvFYPsvU8RoECa5TgEwUJF88QfkvLWeDEEj1Prw5YwwrFZv8yGv5HcZgVTdo7tkdDo8eEzzofwgH81P2",
  "key16": "2nMXQU7izBJPGUnQZAVc2jogQVWPZC9KBgUr1WxneHSDYWGEhcBohq83VbeTySDLMukpUnco4LoREG51ruTYWH7v",
  "key17": "2zfX8w9aHMWcVRcTL1Kku4VP4vnfA3rbbUGsSndFkUGsD8YZQxw27vvXP3VsB6eRuHzsDkVdgzpB15ZufJbTc7fC",
  "key18": "2cgWi3RChHGqEKhTaj2uosibUciAzyQud52JGny9wcwFELnBQTFkXKLpymLcQXgEf6Q1YXZnCQVmq2AY2YyABfAc",
  "key19": "2UznaDCdmLzYjcuq6ymab935QNL92EU2585aZCHkbVBVgSDyCdmzq8igdaG8NyQadgDwA4fKJ729U7YSZDU835Zz",
  "key20": "5zvar2994Ss3JQq3j7EcGc5sNLS7Cv4LWR3oN67ayLWLVtbfZ42GebryCEkwRNMfGE7aGzbkC7mSYTe4rmAryzwq",
  "key21": "2bdXf9otBnHgB4o2NTZBexSGxBS9pVPn7r74ECD3R85Agdjiz68wmwj2o7otDqsJxDmMkgjMvYhsochLWq6RCgeb",
  "key22": "3HbguP8FPLnADafJkgsxa9CmWBMtyxdGqMyeuPYSg6WitCwYCeEeA2zTDSF32ojtFKemY9K45oBpkSAD9Q8XUjaU",
  "key23": "eugjmko5pFXyefxdQGW4TaT2DqEsFqSie7aWHN9PJDBUfaJmSbQiib73K8ZHwsGCXb6zr8vUezatG16WokaZBmv",
  "key24": "4qsFec6mf2aFLHdDHWeLKgY8LFHE6aXY3hcSDoE6i6GiQx1VuFLEYkzYtgpSL4t2M5WtoSWqQ9PQtGDXnvauRRkf",
  "key25": "5z8YmjW4jZCXYzYE9ksvysGKUWHKdac27cJF453b47mJeQW2QeEwzmEvQixeCBSrLh6SdASqAwGiVkRnp5JfeasS",
  "key26": "2TXf6SeXXMeTtNwsofgfNEyUt4jkYchRJBMDkLSbPGNN723eneCHFQ14AaFFLjiuEVVyg4G6w1Nf35KseQNCMt8r",
  "key27": "5fsfYFHQ1W5YsGHitgcHHNXvDBKpqdtbtdM8sGdwZLPq5Szo3kudvUSRUJXM83vNBDr3c83U9EAaH5kmTqFYTgQy",
  "key28": "3i5r31Gr4XngssBmM6geMokMznrZ9rGe9Luw8iZM2ckgCw7Jw6c6m2juDARmtd5Mpx6nQ3axZtEGsjfaseWXa9jP",
  "key29": "5KqSGnAMZfamYtda5nwvapdsP422p3pTQXFE9hopJbPegJnMGComktXA9ydjjAruwWiQHG5SH78nLH3xM3aoLkuC",
  "key30": "vaTfMjWpVco9VsbBjRwBpHMyhzC1DpZRvTuc5TTAABUyywF9wJCn88rDdMz1Wmm62ZXpfkd5g2cAV3gP3DLH3VV",
  "key31": "39zk7qctkVAtSfrWy87qUQ3QHfP2wNj4NmaNduHoWLyCbZwxReVeVHwm72JVyNAjHSXY89bVDB287o4niAMM16r6",
  "key32": "EDhcpzQTrUVdgqcoXrxphxgBDB58HX3NKa85PKm1zoRUH1qhapgoXZRBcajPVBArWgmgoKkmdEgop3fKqeENPkk",
  "key33": "Tdh1Ueuiox3K3raBduFQeUAT3tkJyzgZjUMo22qQisqEATi1Jmw4MqanEAUsyX1pc9pEDyki2UfhU44jNbxc7Q5",
  "key34": "2tyMemox5u5evcJK1a4QpsHkRSUrbHcdBrGVbr3qvTWg6F45RQhdUGUVqvoKiFDM5sbcEC5Zo5JuSJ9rJdLtQS15",
  "key35": "3aBpq5Fs6eM8KgeYMaXvtUJewmdRBM7SYS3zejU3YNJ6enqti5mi4aySUKLYTSxcMaoPTYx32kVz9A1N6XypWuXc",
  "key36": "35y1J9wCg14QEGNeMX5w9aBmsamyvfLZGTvDbaaxGSJoNASUJDmU9FQH7ZFdFuKLBFk8td9uAQxsw5mRoE4hDztq",
  "key37": "4af1LkP8Ect239U8TfsZFupT7RXAKuRPdL9Zye3NgfMbWs2qDFievCQNJHuA2fSRbYjUYMGtAzsk9Dr9T691BfGk",
  "key38": "3VpWgGYxZm8tEjLUzc4uwAXBMgGdQsAq9W2j81S4A3YHYrWEpgKreYcfcadQGGad4mzZkrw41pSkgucu6GW9mpCU",
  "key39": "2vZuwFNNnapFsAKCRKVsNep1BKXMXmnYxb1jn41RnNLW1RxB5XRAoX5yPef7jVswXdWFNaSssdQFCR8ndvU4eyqo",
  "key40": "qm5R1hyhNghANxHJaNf1NYgXNz1SpJSJ66r36y39HGYnFwLwJJPFn8HrioEbkJauyLEQVT6gUYjWGAmxmP9VLv7",
  "key41": "5pfNZaqVu9xV5ieHWNy1aQxyCYzZwvHSduv43bc9WrSvU3g1Gq7ZM7QPiyJNB5FPfeqSt2toBnwCNwuESmV2pcFe",
  "key42": "2yX5PqWUqgLnBcAZm27cqVQN4g7iEiGxM9mQVEtt1KU6ESRTx1S5wdw8N6UnnA5AD5ivMcAYGoP7DsxJWrjLxH15"
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
