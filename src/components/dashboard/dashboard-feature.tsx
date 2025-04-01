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
    "4mvkWZSQxU5nohyAk9UJsMomZznsDvEhTU4t7PNqrpKyhEo3594SyJWLnBXqdEN47N1XwS6T3PbHFGydMiPPtAaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53JVnM1NAtGnZZwy68QrCTu9WuuwYK94ToueoffpyzRZiWzA9X6rpEWGQSuDviRagWgQY2vrVLs2Qt6W36KNPdBp",
  "key1": "2nLgxbfDTDUNbWepqXahDhrQ4na2EfU3mmbiFsiz6R4MtBJ2UVVK7QLwRGJyHuemZticEus1UhDT1TcGzmxp76Z7",
  "key2": "63ex94vVsD1B4uRcKXTDriT33zbLKw7uqSg7xHzBKZhSsgHSXYBVGfY8NZogvkYw4hmHgH2G71JFd54WAoSWDiP9",
  "key3": "3ieZyUxVv2bb73i1UHSVNfbNuvve4FHfcpwGMPu7r1srDAC9u3CydY1F9P5zUMxKgZouzn9jhR92eJL68jUsV7Lw",
  "key4": "3SFa2TqoHuNjuNFqnStN7d9N9YMk9xQN7BGBpEgGXRZgs7a9ymvFwJB92eBr7RxwTeM8BddGDJLkb9o7jNXEarUs",
  "key5": "4f2iEcey6HHQRmmUrWfqV91HJmm6PH6coaNTrjc9Amq5c4PsBmQQ89d8rkGsGPPAduAcPKkYx9t8spiwonW2K7V5",
  "key6": "2bKAjPQcohLfEitRRjWDfzfX5iAxKRVMnXu2KNAdfnjWG2zo7h2Ab1K4F3da6tTNMgGmkepoSTxww9iqbC8qyLtQ",
  "key7": "4wbDs1o6B9KGRX496sFgxT8Jb3YWZ2oj3LxFU86hiYjR6u5NuZt9wMhAf8XyV5R4tpWKecmY3bDhbu1WfMVmR2zP",
  "key8": "zFSve6C9sRxZqHVQuN6awisej77QSdxLbwPpCaBykyAYQjEcVtWgAgJppDotXAnfmRTpFqasAe8PbfGQipMvxzP",
  "key9": "2j498gwTE3h5UGssZrb88cpS9y4CDmuLUi9vhtTTz6bgUqfkLjJMX1z5eyzz2hb86BvJPTgXpRR8Kc14yeuhBcif",
  "key10": "hUPcZXKzTPVSuMs4HP2dQrRpgHHGXz4ZkcBJk1ZLTQeyNWmufydCJSTeufScQ7j9PXqVEPh5ZfXW1VpMyodtd5c",
  "key11": "2iEgweHYSU6VZPF5Z5KCmNDmaHhF7Pk6hPF8VuEZMMvvikn9Sdxuno2zwYSokq3YePeZfeSkfARimvspD9gcpt5U",
  "key12": "22pAc25hzr9BcyGvYjGfJK2eyPsThNQHvvKt48PGiH53AooMo7ub4ox8UdVWtVrWuHN2V9WEfx3MwDXpgvBn4kYM",
  "key13": "43DUfuCPCvK9ice6QLcRMBxMS1rWic86rcpTqE6n7TgwSnfCNay6CJwqWSXJs3c5CLKe5gCgdPaUWGnqXAeFX4rM",
  "key14": "wuZSyqvrMmegYX26JK394fZw7wRitromyrZRWaKsuFAnmVmuARsigNu1BDFsQwNvotqcaSAGstx38ECnQxspK1z",
  "key15": "Dx3mAgNrRk7951S3PtNERXEMWzPytFoi22gYJCE9cffTUtHosNhp28Cqc19NfsKohkkrFev6deQqZEy3m5ynnJM",
  "key16": "62PZTkhtdBXcrEFGDL6RTbCe4gSb9Z3fYvsx7Lamgs2wuNsAbhJfkuc83Trmt7LDsLstWM4WGLYe9goVtP6PPQZz",
  "key17": "2kBkRmKeS8EzZJ34MYZ1iLM9q3WLha4VDGMqYLqR67C47byxADnwDTbqcdoeuXKvntZwf6VWL3Qwc723tZuyZ59o",
  "key18": "4rB5e5ScbBjmKhJ6i6FUV9Fue4QNLSdvbfAEnaNa99PrPtTj1LxAQzsKhiMF2gzx1AMPPYuqMpNHDVS4QCNNTX92",
  "key19": "5odHD94HAAMchqpoDJnVhggCXiy87jgsnYTXmGSoWjXp9fdmVU5y3GBkmVkKYP9LUrtMkshCquwmxyebEuEExXYm",
  "key20": "2zn1KBDdq4nrkSFbSXcVQ1qzkoq6UJX34kZCsesySHrPs6h64zkCLDVkG2L3GWSMHCfh2oSQ12ux4fE8xsiA5kqu",
  "key21": "4wsN9rk3GJj6kQTPZdtVuUUUKxn4UxvYvYCqu7xWUGLCkTEXXTFuXQyuEv7gUeZoEdwTDfByYAUUA796kVRkiSqF",
  "key22": "3shsQSDXRvQh6pL2FTfHA4hWUEdCxgsBpBjTyy2RKPaSqTzhw5GkaiGck46ow7aWN7qbHe9sjueJMW39svydc6J1",
  "key23": "45RznoV6FgJ6wP1M7bUPps1cRpFgp2dyg8mKy1wnzRMjYiEERnEiPV5hcXXknJ4XCAQmawgUan6GbgBRJsQwFYqw",
  "key24": "5nPuaLJKFUwLw2Ax9A4oP7m3s95t4KZVUThyRmtTSvkXXeVT5sczTmxc5awjPoKciZ1kfrMU1oGV5DebQQBjrvgG",
  "key25": "4AH1yo9Ss4iH7G1Fkgu1NWufkMArFNSZr5X3voVpvmVQ5afTD25prUfVhPBjLFxYtmQakXjpHaMXovjSmXJSeZEB",
  "key26": "5CTXnype9cbfrhLeEgReSG3r41QC8cFvrv2pnrU3vrfUpqu18ivAHsxBQKvfsmmYhvcTXu8HZQnSDFuqka5oPDsB",
  "key27": "3cvbn96f7kWQ64N9RVvS9t345FfEUREjj685Vy5ayDZMDZ6EKjPBzSWbwyrmezWdi8jBy4k2v4izCNSrXA2gyko4",
  "key28": "aiC9PoRTp4QCaMCrb1z5w7S9ZH7nRDGDh4Qx4jNSmmNcNUinomGBBZnAm4CS6UYP8UhhycEdKcgNH4Lo4zhcpbq",
  "key29": "5JkHs8QKNQEFz3Ay43M5SRX17kjvqoW5WsChs6DfxCh1PNFHaipC1wc5xfeiQ31kiJ24xDrgXc8kJfmnM3JLMkHz",
  "key30": "2JVj7bhgwcjDjLK6ZLXdb4Co3Kj3KAWRpaWZDToQjqyumQC6RTSDx2PrUYfjLknEjbD7XXtZBGPxg2xeziVMAinM",
  "key31": "YVs6QX9bRtth2DPaj1PGJhFoFpvMDf9GTJgiLg4GD9A1DQQCVvkDosKWahvPtUYQvdhkaSQGG8oy1RhKLU5cFcB",
  "key32": "3LkpwvuefrsXiGHcmG1geKwDifyrMu2d4Ps9SbfnBCnWhanH3ZrbuDsfcimhXfK4B4xXAYA1dheqvTH3BdL5LWcu",
  "key33": "3pDy9z4msSWdYKiCLCWSweiWBmNQJCgD4qHjp4XZAuog8Bu3ttdJ2D8DZuXJNNtWDHSdPiLwPRYwej6kHy7GA1Nk",
  "key34": "3cKMnnVQntFjtQHQfLirN6UayGJ11Cx3rUgFtBzvck8XPpyZGs7SXCjWYsHyPjt6zWkybYQiGNKEeVQpK4L2GT1r",
  "key35": "3meCKi8TGKwkaRw8TidKGrwnoazokcvZAV5qHyFbaBjQRf2yS21wkwCGpPp8XrP7Rq2sKYDESA5fruRki6WdyXX1",
  "key36": "5iu3KkkgwDofjCWUfn1N82Fec7aSFum3Wzi6H5RkQTS8UAUxixrDjPeND2bmJpqsp6w9h7hnDMVsnb5mxr1goj4J",
  "key37": "2KhE6Vb7toLgvH4AgeiJHkDTzhqkBxdFwv5zKVGmHCW2BChghqCSkc7Epk6jjSJzYUAtx1xxMCp8EKH1nXtznGEY",
  "key38": "38eTNvmPk7yq7HW9WrjuZY1Ew5w1G957ZizaUZBY4QwRpFNGJaY61phzAZJxWwxFXUNZrDpefsfKS25iJd2AhfL2",
  "key39": "4aABRzLcuzss2zuNAiB2x5Qs43Wr7UnoW6L7mfRiRCD7nsRiyE9AgAysQ27Y5bjjfvf4DavDV3K1koSK28ibexVx",
  "key40": "DiFtQWaUMqusGp3TREjvJUnPt7wcpbmMj5opKKcYJdpX9nc2RKu8xWU2a9BURuXDYN2ejvjDUKDnyX5R3mpfrAq",
  "key41": "3gRJ5GychEGjMCCpfDa626s8mLD15LZHMAV2oFNoGro3H78PsSfCMXikfzbrBrai4Z1L55HFqmywcAYxx19RaueZ",
  "key42": "hPnsiRWEFGFjTj1UKaUa6FEVx1c6rE6QGB2dyuwkqLQaUTGXi38rQKZR1WcT5nHMfyzAivGVjdexfL5rMFQZUED"
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
