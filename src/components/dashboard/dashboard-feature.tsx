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
    "2wzN4tYNG7FqB5BNkPdFakke3i66SoWFnNzbe7njh8TvMm9Kwf39jko5g38PCfEsjNFWVAhcbGCNaLPSK7ZF94Er"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NuX7iwufGegnKLJBZb1Fh2zk6htxe7GS1aKDXxwmD3wY34bRkhMA6ycc2JnZhJ7btcvv7VPcffiM7g26PMDM9Ct",
  "key1": "1rTQ3SRgyP9dFxxU1SaLBiqXEAn3Dr3NP31D7fREWf6pZR8rBjQ85n2U3LB44Xgy1upcXaES7D5EaQHhHnmSNXA",
  "key2": "2PZdvd3MrkgacuVsLoA5CCRsyuViE7CKYehWRGR8EGx2jucHAjbaXcvF36nqVDLhW1yUSvXsQFDkgEmwpqGke64T",
  "key3": "4e8dNZA6ys5eDf7NuCndXWcLUMscmYc2VcS1BawLp6eJDbJDcyV4PDRpb23Swp3Ru74mm9MxrjiL9Vt2f8ZyxoAx",
  "key4": "3DX3MESyF4mYKZvckNQTNW3Qj1eEVxQnUPAwMm4PkETquWvRPPFDYPMCC3318ERM4KBEbEmnsLYv8EYbzAUjrs69",
  "key5": "3XtrMoDMEVAHPPAbHy8x4C7xBzCheExEGzyy1ht31Psi9yFiw91dRPiS6mq1K4k2Qwhhhw5YKA1wHSjkYSu8ynUB",
  "key6": "5sAKpepTZV9KarFfNG8zkMVVauMCYyQAhqH1b4z17EzUimkZr7LsvXDBYrCuPMcfCJUudoaZqwo1L9oKzMrGrevT",
  "key7": "5Jk3un2Q6M2fHUSTj9EJsuzowzETYWHJQRpQVRzs9XXNc5q4G2apdCCYP4mPEkrC2yPnXKDcor4DCfwFmVzjsrxr",
  "key8": "4GBbH2JrXf7wDqaQMSKgZ2fM2ECgKocEtWkwAqY1y68WXDWuM6WPSN9ubL2JsLxxeKJvq2c12g5NB2LDaF78wf89",
  "key9": "4EFyTzVWNgQMas1H5zk6r5iZszTyeRPktN5yTQHEjYnNhkHv41UuvMBet4WEKdRm9kjEbvRn3mcTCQvh5ykNrWpb",
  "key10": "4CPC7RXbvDkmmWy94Zmy1i3MSq4EwamNvQyFvBhdZHR2juTEpouY9ymJj3xKVrmsRAWo8Dce4BX89M7FcQjAChFN",
  "key11": "FCB9saxTWdHmx94N8zmBMhWtxvYUPYgM9E7BSXRgr4Jpd9CYzVPgg28gHeEiZSwkH7DWHwBC95DBt83cDjLcywA",
  "key12": "42tu8KoGwp5un6RXL1mD8b6xWUwxW3X3SQBmauwSHEgMQhoYX46aM1gRANvnYydrtj6mjXU4t9r2DAbG8RjSDca3",
  "key13": "5fKpaer2F8rX3svoVxG3b4U7nEA8p94Bt7JHPfBpV5wJxTzXWWFEVBMp3JiY51rTs1G5xyVZ8fYfV3N6DXNfCFh7",
  "key14": "42y5NZNKN5dnRYEPSKrLTSaPkfKwt3Qc21kmrxdUzKaDpLuWy9u9JYZsJCamE6qNkU1r7Vp7qtEeeuRuvfQ9EGqX",
  "key15": "498jEPj1Tyvk5oj7dNGJoppen6N5sb4PkmG3Cj3BhJNEMRBwAav4ka4WSNoaHd6C1ujJYFGv3AT6GZcNvgk56kng",
  "key16": "5dVgd1iTvVxBPG2RpviiXwUR4rX41YX7pwSkELwAVcuQwFkiyR5Err2tNvsrPgU298kLS9hYnaXeGytVc1zS79Rm",
  "key17": "2jfjEqvALi7pRs23mXu8J5SRLjGsixrbVmoBU13PguC4yBzQvuKDWq12SmpVbbRxzvZDPqz3cPrFBfVdiykn5m6F",
  "key18": "3mRUuaKAKJ89iCyfdDnwaYpSDDe4xj6e7gentb9cibzGaUMQq5LPy6Fg5ugEhZAPUnvzi7HTG75qHDzg4kNxnLRB",
  "key19": "3L7UW41wq9jtKu8o5FK6ViQ1v2SMBZuGrSTXQTeKFVa52BT6GaGitjn9AjDgqeMYQJAUKLQC979bZS6sYx5YSuQm",
  "key20": "5PrrDUW4sxuJMZLAGA1BKGuqQkhVeHatnYXRGkxwW7Fyud5ym1fErQsepfiiBQRXkGozT2tGJAKLsBHuKydiy92h",
  "key21": "3xwYWwdkdN29sR1xL4GXpJwVFucc4JczffhnutunLeSV3zW2V3jsLnBR7Jvfa74QNMS5vobowxTDkbWAsHLpUmqb",
  "key22": "UZtiGLFEKpxmdA5aoPSrksavjvThwRsdUNpzzkQZf7EDSTBeELrNY96hYsznfjfajkcmQvpvYWQ2Aa46UqsTV7N",
  "key23": "BGkyUnd4bvXcdRFd3zv3Q1xjQbWTRTzb46fS4SE4EPYYToiaw26HgaqbedmfuyuKCvfiUHsV85fq4ifPTXSGdF4",
  "key24": "kutfhHJgxa36LKvw3awr9vEXzmT1s9L7YAhfTsZCQZ7FGTbcxHdjNTxE4173GNHCxAHRnFLpSyRx86uGdsAyhd7",
  "key25": "qH9y5Uiyj3svGWQ5oW88wAutdjVa48dkEV4shTc4CS8iKz8kxoV8rx1L5Tp8C8tLRLXuAfBbsEJ7N1yRVga8nq4",
  "key26": "36QgqVPE7LkXf8kF8AqKj2uZKyrKUPcYkYg7bTzyGfBKxyQqu7RjaYQEeZErNKJWbfHxT3TyymfZX5knmgKVFkpp",
  "key27": "5WKxwmEaVLXq2BsbsgjefqKJS3HXmQhsaJaEB7HGEExzVcwpHJbZZZFXtgux24FvbWkjhWgmDMXemKABKge2gucD",
  "key28": "4gD7y9BCWrA1CE3B8Xa6J1LkCSxmFtuupYwpNnoL4dsdZwa51RYveebLjHiVGg9mPQf81DqvBWnLLD38KVFPrXgZ",
  "key29": "4uRezFcwTuEdzUVBxqDruRRPe3E6oSfmSRckZdSGW4d2QWRkHjpdfqEegRCBUUdp5aZLF8VCZjepgPQPgwCa9oEG",
  "key30": "3HHrtFZxYx35K7JDMRhTFTcbvGiHHqbZZLtiKsiYcnEgNza7ZJw6NKno83SKKKQDtGZjFS8os4MKYgjisJnVTciZ",
  "key31": "5F6Yx6NPS9ncVRoqFRciJuPP9Y3mRHxFkHUcxCpthLqee6JLSRdXfuhfX8WPuVQHaA2U8oZaNzk1VrNkrA6NBd5A",
  "key32": "aRqAkuwf5sZtsQ2qKrG8GzKn99H4CnkJb6TfeQvKH5vN7MNoy5oCNKMeCrY6XZ5Tsufws3g6a2QkcnwNgL7mePV",
  "key33": "ybTfGf3XCJ4GPYSw2BgJp7gWEoYQ5Bbm2bnCKWB5VPN98k9zAZPoQ3po2n8xERm3HKjGmLTynkh7RTcnBLqX9JJ",
  "key34": "35tvbgVFYWgRDSnS2tMrBgQnGeU6kNnXVq9PfpM2JxYSHhZJkaCUQLXg737XZ1VTunK9Cr1gELW7sba6PJZ6jStE",
  "key35": "4z7H1SgjsEAB62vYki1UzpvPYVtvhJ4T4wrFEjJ9Qo8JoeJCjkwG4ePdmM19gjri82ESyxU4JmH1WLdhTtuVD3kk",
  "key36": "392mvmAyQHBHT1NTNLD5RW1Tk2vSfKcA3pidUGiMdvuRLxNRi4RERfKxLNKzkH49uDWdn3xK8p9DdkhbjerHPWbh",
  "key37": "vE9eb1TjTovCVFWsAubNeJKmH9o68SiXUEdgYux145tKvXJXbXSaHcFgTR6w1YyjUawtEkYJUvFXSeDdorSfjPu",
  "key38": "4PZyubMDhHpTVhEUMkfKPRPuT9VmvNeAUiWVV6JFbDmMt7DThoA9ovroaevP6TBrdq7FLRU4ETqmNBC6qRRueyhk",
  "key39": "37QSBeiAkkK8F9mt3Bq1QVKcFWjgrCsdKWDBbDyuTJc2wtMNNZZbLUZ8GdbvPbUF7QFgu5LBamtJqpKPXhDu8rAt",
  "key40": "rXcDMeTedKfZx78LouZDFSPvrKDhM75xjv5HGCvRbjxzmEsXNzQTqaHgein7hhCYXUF7RnNFwkXnnjwNdVqruGq",
  "key41": "3bVS4YSFJ9a8kkmuoVtg2apNvrqU6ga8KjNgwThXsPib5p1VFr3g3N6jR4fXcPmtScymjL2Z3zqawXZsPqzj8i7A",
  "key42": "4HNG4AnpWHB4y4XBgCXv7Gn5iwiN95BZ4hWnTYn7sxfo6aUZ6NJ5XfEG1SL2CHfv8gZ7CdmqFPyayXdXgxGZjnTr",
  "key43": "529zJZfuDaMfKmKy1wnvr4HwVTfgTetGgLjEjV3PZaWQPhb3iaTKahoE8G9fauTCtuPmhGJKRGboswuTyS7tPDsr",
  "key44": "2MUuxiXEEMM9UR4T5MUeDuLwzjBgCdHFQ3UaHbc5XXJkPFqG5PVhQvKvBNrB3RmfSM5xk2PXmVPUKJZyTutBxbqU",
  "key45": "5BTkdW2WW1ku6zsLm9QBMWLaFJR7XXJE4GkUa3p81LPQAwHyogs9E538RqzA8Ta1Z9mkFdQq1Br9RVv97y9boRGF",
  "key46": "AqpSfdAxCeiQoziJfyQcjJybdWeEofuEjwmtxS1S2MkjCJZ6cPCHjkaiWAbu6nM6xGxsruH6wmkU3FLc1QjmJUz",
  "key47": "5cyz6Y3Um2fFf6wegGpWskKBDpoMpp65oTp16hEAdLfuw9jqSkveyq2SpVvus4kpFwdBgyGfdESdveNypztqgtP4",
  "key48": "4EMPBZVxn4R4Ktsu5eSWfZjpQC13hUv4bpEPVKXqXSD14cxSsNA5KzCFyt8S2ndgzFz9Mn8Fyj6T7UafRcDCgSCk"
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
