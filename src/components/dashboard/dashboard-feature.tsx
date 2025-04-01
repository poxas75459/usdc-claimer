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
    "36anqThD3GrKJnmAKTu8TMRMeYjUiiq5Sc84j27DUfY1zibu5z963b9EubjSPNX6y6wc7GELSdsJ5Xovzs6KAap1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K9Rj5SkBuJtK5Xh4xP9fqYzD4uYy3M5kFGFcqkYuEqjgq5RnLJZiNdbA8qQmQDVtuN4RE9AC99CuR3PF39TxJ33",
  "key1": "4sTYtGL1ZXBgTjJ51P5tsYf5TBjTKZPZMG43aPenZgFsRtsmjzNbTAo3xL2TS67mthCiMf5BaVqRb3xXi2MT44V1",
  "key2": "3mPe3huHcpG4smCe9xNP2KGYDWrcNer5ZQ6CYx93KDmtRFXjZwVU52JL7uxiCz6t76gCJ7X5jECYF5ATHbsdZ2uS",
  "key3": "DddtkE7Y3FB9gpACknKWfGBqwNytqvL81mtxmHwZEpMDd6iqdzU31WbNvXuTiXeczvU6ejto2vBYfcu4E6CYsVV",
  "key4": "546nHvnmwghYggcNM95vuQtum4YiNAbdvtyAkEe1pV4W92GqvCdvQ9BuGAvzSFCaWM4RMfemB2KLvWyDB1inqv52",
  "key5": "3NQpPQ8HHvLfuZ2XqGTCK9YzL3MPPK31xSzGbg7sCfRkaxnRzsnbr3tcSaoEMQdj6vjRi4B1vmqDv2cXTSWpzzXv",
  "key6": "2wsHB51XrJ2aos9GhWXdahsC1Jf7jj5qsKhfiJ9w6PqHsAWWthWWnSbucgCv5HEizk3EAr95bRHPcA6FEv3khEvE",
  "key7": "2UqmWP4hmZHeCET8KQAELfE7kk7Y5XzjacnSnjkttzhzyRQD1dJHQsNkqGmK6v3Je5yFY1Bi7q24nw7A4N5rcy3m",
  "key8": "4CsreiRuBsLcerb1xr2iPcL3gyXDwj6hch1yyWdkmNnjonLQ5GMYLqRbz1QTKCEo6TPA8mqKGCkQBQUTebf4crH6",
  "key9": "48Az5KMirYdFvPeWdBrfh4qmc7ih5jGfudg3yQb99Jm94Pfy8pgb5MxhGicg8YrThjABVrSJM4v9h4a3Vu77MjMC",
  "key10": "4L8TbCU9Qc3xf5zBmhMcCi6cUFrRTXnJYqAzyjpQPNZnKuH6rE8moFBr4pkajRuh93mWnnhLfT4DdgtC27jqjxcq",
  "key11": "3aHemgAnSFnAsnNeSuovA1nGV4DVEScG74sdHDvcLQuPw5hGgioq313mV4367mmwZpneQCCkcmYUtNGkrgoT4DZK",
  "key12": "5S1Vu432XEfq4BSuQvZxTsQs3pyNQaMzupbYToTXLgNL8aLRqG8t7Urz2dajGknRP7iGAVgcwAr8scgvufExz7eb",
  "key13": "5J6ayJwHZzVwo3qRcix5XoMPw9jyf6PmcEHdu5vxxgYKSDbo5TPFPbmYP3gnSFQ3NG1bguqmJQbxeMdWHqVucw2d",
  "key14": "Jt5rcfLeacUoqqyKF1Em6e3Sh85STTWmq8Sd7LJeW8c5oyPELSmhAqKLwFYjut63zhoteU28iTAZC2cn4nW4ZCr",
  "key15": "4kDGuca2XDhhAJYpTWNGcPd18dqwqa5ZzWyyN3f15j3BDR4VKsYQSE5ziSyhp15GaMcERjF1K1AkTVaTDUCXfDcz",
  "key16": "3wKQ9QEecfVcdueSY26UYK9MrxMmbRFffehZRGfUnfnu4gGnd9pZggMJP42DEUJW8MbnhEV5iPrw8SC55jMU57eq",
  "key17": "48D2HPtb5RYSg9v1jZdDeB87AiRPFJDZbkewnkZt4RivEviwBfYDVc28Txm6y5wGcZL7kYKETLz5GbXsjJV2YfPN",
  "key18": "5Cieqj7z3LNWQup2KThuBVCNnbo7srdkvGiBFMSidRbUREJ9Y2JKp3uBucJPn9PivpisoAvDAH4vNruQzJhAfaNk",
  "key19": "3Eq3A95ngpF2vAq1uuAsY3WEBKRSAT4D8Roi1km9diZPCRrKFfpMh3iMDTGimfrzDKJd8Lk51tTBFgi4LtwnnwSh",
  "key20": "2aN54Un7mJjCmSMFoSCdCixt2kWNP6gsSLYqRFoTWF8yryLfmvesnZ8oR6SQnVF5WzmrzFDZzi4VMXpj7FjAMxSy",
  "key21": "3xJpDo9Y6zJAAjrEaQDZizRxZenCaG3VErGYhcJVXxioML6X9xrgmVvSu8N6EPQcuzWG5sJo4qD6XERr3qPNPiye",
  "key22": "3rC5H5WWDREsAqiR3RqXRLaQZ9AMCB22T7rRDDy5v7yJC66yEmK73dHUrauNJZzCruGyxrJhU7JMyB4gNkyDs2PF",
  "key23": "rRvz7h1uebDCGDVCNK25FqfqLAerHZdBDmjSrfpNamiwjeSXDUPYTuNPKWzMQH8aHZwWQu7pP34N7kKMjNmQA4k",
  "key24": "Gjh2FNHNEmiDdV2EcRGEH4VTuW2dUmjj1SBetbffqCFzr5ctm6JxEzqSxpJP4xTKuKhnoUuprtSc9uNprrsR9vz",
  "key25": "3Z72zmkFN2P6jWZhSmoqUaeFmr66r7Ho5GMEENBXQdpt7egZuRW93RWVrgodefcr5XZhVcJsYr17QqKjfaFtmbiN",
  "key26": "2s5Kqe6t2GB1hUHkQFCRHBF5a2bv15xLCHCsbVeLnjeXC1CpAi49AaPK76YjM9dtXVmFycGM2u6gnGqreE3cTW9X",
  "key27": "5SZgQUwSM7vgy2LL4hnrSE2bHtUd3qiuT38djAxg5PMmRQNCrRvspMs1kxevATxpLYom73uW6QCQGBACFKQzAra2",
  "key28": "52k6sMJyX7nfXgT1EgwfjBK49mwf6d6Gn3w3LNPnibCnDSed3VLBA7MDqPMuiv6YkwGGfNBsRZj2hpBrX1wAzrGf",
  "key29": "4TcQMEusJ1JyNRWLB6JEZ7zFqiSnW8A32Wmh11oVfQDukSfXuQpNEPhoKYx2YpfF27gYzqECHNdtrUGwMKxc2uWy",
  "key30": "3eGtmLuKafu5R7VjXuYrhX9g8bd2CwghmhpZLkUx4vdDrEqK8TLjidbcuiUsDvtFrLyfX8udrJ4b6XdMePDNfnPb"
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
