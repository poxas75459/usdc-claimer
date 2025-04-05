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
    "2fgNHc32BMKCYErddQ99HDPTHpge8o3sr8Liz5goiJUnKGieqY12mTKW31AkcKPAQt4S96eUeVWvBRi8zuqXqW6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WWgy9GvXxFfLuQgUPcH33Hmaop1VXH5RGAXDEDt1MQbhAo6TessPApT1WF8zjJpLUBHDdCcMgz5XNknZNJgsBYF",
  "key1": "31iVX1emTEbn3mFiE4jfQtZMzMdVtmsxvamg4f8sGTsh3Fdba5UNwaSD595aJPo1Kze1KFsKSbm7tR2C312A31C3",
  "key2": "RqCb31T7pC1vPShGTXYRvYpd1CSDbsnFWarCTEFgVgYHXDBY7FP1oFVtSqg7z1XJjKVobvsyZLsoWZDx5Srckeu",
  "key3": "2nAS9xhYeZ7N96t7ubCDdzLh6F614Kb7pdgjNTXPdzSuCj155m9Jwd8pZi8zCHa4v1RT7MyL2fiA3yJxtZptXzp9",
  "key4": "3JdhSNcx1kJ9UBLb1r56AyRHpMDvDsbzs6c5qPwvRL55vy2M2Zt6A8ziEjsN3DjZZeLAaoofWELmFBKHbJaZrpp3",
  "key5": "3JLfTzqWk2XZgAbJqmkSqSsdVBijqtAhv2h1Aac8sxTvwp2DLFupdKyPFS5WpSjHBqBLZ9PVHnq5PUcqnVMCR7mM",
  "key6": "nfsy3kQA2XTcEzDsdx6GSsaDpZbaq6gFL5v4XQbGat2xSsbMzHTXrqt45dvYzEJu4cpKecivMnaMivzGK6Mv3XU",
  "key7": "675Dtdqv66gAnSczB2qMAnP6xDFUvKUvvSdQvFSe2N6S7dshvvndhyFVNYSGwr5f2MLsHF7LxFsBnojvfRmASBR",
  "key8": "6wtYPzStECFheNYkyiDW8vTYN6ajKYBxCGB6RSWtzpVFTCn2JGYKXLyVUhqqqcK99pASkNPV5pXgEXDux9wtaKt",
  "key9": "4Ki4tdWGQrUeVK8BXwzdyNWWRg5UNzBcsd2cmtRqdkr7W5nizsKJbsbvYbcE4G49vbCJD3TNX1EpbXF248wq9b36",
  "key10": "rN3AkG1wxuo5WSBByijE6hyRhLq3wza8NGtLv2MJMrUZU1En2Th2j8HcUA5Z9oFZsKRUhMzUBE1T2V2JFYTmy1e",
  "key11": "4uZmvoKcQqXEhwL9omL2XNbkMVn5Jv65vme9wcwwRdZp7bbXdjibMy1vX8ZNJ7RPkDnoQuC84G8aTcDHYpHAYwTv",
  "key12": "2mG9wTBscXKhPxMftdXFandzBFmrxuBfnLphBqciR56J27zGEhQ2d6uTGZXVRFcAKc2EiEgtADnhEdccLuMxxv2m",
  "key13": "3h8r4XhiM5VBoAu47oZAg8XtTi6rTwrSGcXiKc5mMdaQiTU2k7q3rWJmhSsgHwYptmnRN2MH24N5RtfPyVYh2rGC",
  "key14": "3jmXA3SukRLjaj4osjWCGDbFoxxJTkzEaGGnQ4CsEiGjtVdqdkpR7dHWBjeEGL2jR6Z2jK1peaCLUBsgovUm3Scj",
  "key15": "2iL4RzDJsrksjLCSK575yjcKapyZhhZy5mh9QGYEPbnjoZYqRXzmLPAbX83YVBSu4QmqiGFXiGoYWLF6WyvtsJLR",
  "key16": "222yXkkU6Cv1pgaQBHE5LMd8WPojyNwoVqdQFUc99rreLsXsiYjMJd4MDheLCzcm4S4wmLN9nUAnXXL2T1HeU7GP",
  "key17": "5QoS3j73TQsFxucwMg8NmLPsjsZUYZ8qA55L4C9Vv15qrmr7DYms5WjXwRecPV1A6HDBAZxMfGqNemyvcLMh5DQ1",
  "key18": "hr5aCuMvq8cb8j68PFQcEMT3toForaQXgKCzmKegapiUXYNpVePUJa8q6sMMaj2YqJPUK6rWyijwKXrgYXgix12",
  "key19": "J4JiNDn9rxbkCsuF6Y23n2VqC7csNyb2MZdBmxMGm7adHYcHwg8NhNPdbeVKjHEmx4DtxdgrZKVdCUrEexFbQzo",
  "key20": "37DbBUBJ53TvNpXimKpPe965K8mKEgLLaLsr8gL7m8CRhdHDNy1YLUxXpw9BKjxRJH5gp11kjtWNzQZVmRs8P7fz",
  "key21": "5UdTwWXZcNit4HiByvSghtEQdag1L6GHP2UN6BQBm7rjxQNumR8nqKCABi7WqJBqohvFqdVMvrPMXwh7yntrdVYX",
  "key22": "3HfsvBsVpRmgDwfo9Yc2tXRSfwWV5HPArBpuTQJEAkndQpwg666qi58wfbFCczXi4dR9qqLDUgCo5QhK6wfnuYrZ",
  "key23": "nyh5yJVQKTmKGe1LFkHXrtTpVSExrtRbHc7baY7mfbkacMGTUhmVkiPhe2V5LMBw1KVHsh4HDdZZbsURQtChJsr",
  "key24": "2jEqZVTJXP9dKQ5iNn9MT1YnXd76vbnXEhqKB6R2fKLLMU54z2CrNahuQnoEht49nwANhqGyn9HhHKeh2Wi28HKr",
  "key25": "4ZW4zqzonj11HW9cVNZwjpyPb7ikkC7r7xjU5URzzj7eMzRh9NXPKHXUpeqCTQAwp5SkGB1Rxf4rtBHRxukqJSsV",
  "key26": "3pFACgUjfWZFHj1qny4aLkgLmPsK3KGK6HHNx4scwBKrVGpzvzYzAk43C9avkdMRm9BmmusJnjawmF71FLirJcPo",
  "key27": "UAKxAoG7EXmZVSdCyMfv8Q8RY75rie1mtTU9EEX3LeAD7WFZJvr2HhL4knyzMRjS43koKShkKy7NGqkAtk2oTqk",
  "key28": "4m9CghxL66LKRDb35THrYSfpdwfsHcHcf83H2rPa2WsuaY8Ct2ZWD3SnPdHbnmUo5mfar1Af5R97Cy2goXuX68ht",
  "key29": "5oacSGqN1Nr4V5W8MCanhufRYYBBqzuGSS9t1CwjbkvFyuYzwmiLmYgUzZAZ3ouuLYsGYTaurprrdMzRLGrLN5zZ",
  "key30": "3evfkP4PCh3tGu7AuKrDfgGvZkT9mp2KVrwcaJX5nMnc1v7zXJ9x7drAocvBswGVHNE6JTQvJ2PtSGyqywPhs4Fa",
  "key31": "4sR942FE3RTfGscTkDJMWAQKvr6nckLjbDF2tGHNcZAcSGTqBXTKD7ZQheHsQYNsJRNGszrXNL84ufArHjVHQcbv",
  "key32": "3s7NwU3HRLcgbPhZv3kRSkhsLg4QaA9TYG2vxcEqMwYB4vsU98hhV2LnsTuXG5SJQKZooJDn74hvkGtFHqhKkLnD",
  "key33": "41j86JPsHhU1BZX6T7jW3eNWFYBU7EE6PPQqmMh8HuKQ64WMgWFtx3zgGBq1tgCCL4rqdfsZ9Sdipd3dfZo71nAL",
  "key34": "3duL4SgoegHyfY7nHCmSn9Wz1DJLhjyVqfbbd7SxCmdaFMmQaW7o9cRcXjrYbJNNLBqsWj9qEwjdHYt4ADkHzEEX",
  "key35": "51vMfAWM75DVUzdkzbJTc2sihpuSkvCoa6xaMpgTvyVHExTtfaZgGLi7h2XmqKVxaSYEeZij9xeXPduJEbBZBPYd",
  "key36": "QaRpkJMGHnSFzpoRFYwcBo1uKwybaQhuPUszrvHvDcGeWtDr59BZM2VTnwDvZP4XRofUoRNebMg8f2jLi4sRMZZ",
  "key37": "f7hBG2tTHignAsAR6UL25y1Kw3t7SKf8RktW5aFXryErZNoh3RRDFVmGzmWwJL7oQNXXAo21w4aYPggQc8jfjsD",
  "key38": "2d9tUKPEvLuAouqyFWJdWVGXuPfxTDz12dqeFxWQc4gP5G186CQFXyktq5z2ZHaBXMmendghH7qu6RyntJc73ZVQ",
  "key39": "6VBGkwvj9JLQteWGev3JTPzR7YBsW6FfdhuYsYRrn4k3oPP8hZs6b4hJdmxfERdoccAXWqbC4gNkrqW5UfXP27a",
  "key40": "4Z2NWgAvGCKAHr8iA1Y88ZPmugywBTYVDBZ77ZKZjib6WYHFYtmPdnX4iKj3qj9tN5jhXzcSnbQMWZZa1FLt9ckf",
  "key41": "3MXwmqUAttt6Xm89UpyTosngQhQdrnwiPu9wZAuMuiyB6FgNQ3zonFpcLYDce9m6HFSNDEbmq3pZLKKB7DHsPziS",
  "key42": "2vSvVHmG8v5yuyZPTDzQtPUJCN7fS4jx4XxK5t8kCRhodXJTqTKuGATp39xNvDfMUAWQJVV1FcyM7N2ywnktpSVo"
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
