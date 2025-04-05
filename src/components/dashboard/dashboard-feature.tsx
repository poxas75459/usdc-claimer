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
    "3RsfzF2zaZqMjpGRAbUu2AQ3TeLgfcTowMfWhUtjNtPZx9ZMVsxWZMNPrSUyB7PywUGfiRCZVt9aU7svVtCKhiQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gRif633DT1f5cKwaJVCcGcUT21CmPZ6TWs7xqoQwdpLKYibEgACqSp8XxPoiu2apb6xr8HsFUp5ckMtfX3idQBM",
  "key1": "27y4wjY45in1LJ9UJ88YeSCioG4a6FhCoaxi1RBKKQNFRZkheWbq4xXbwFJyTJw8jkchissCdTSHDywckUcmRa34",
  "key2": "AHKH5ZtiiSarVpopmVbP3yJ7uweeshwCdK8imw2G1dsXo5yvfNexG3MfPtnpCqu3MJpc2XJC7jnanrBGvUdQbo5",
  "key3": "5i3z5WCCd5ui4fVzLv3RwkdAXmWJ75Un9QoH2GNFb74NW7QiCEdaH2WYUJYkRCAy7xeTzPzWchnbS3BfDq4V52ku",
  "key4": "4WUXHKM7rDwtoNM264Hbwyr22B5pMTqhepcfogxoA5ZouQ7Q2MYR8Zc3EQGCgCN5Me9JUHjsc435G9yzsNnFkWRc",
  "key5": "5gNSA8qKdRVqBCNfQNDBLMaB4Mj5LbViNWZ5miGPJVBNgyejVFh9cepsJ7bSYuKkbismmB8nuU5EpCjtWsYJnjM6",
  "key6": "UYSkcRCkzySha9dfBpUixa7enDZqPkbEu25NC2t9gVVJ1TPUw4c68D7jM2XtZ3hNypL1Tj9wkmWPU1LGDvrwB3i",
  "key7": "nDVx4Sb4h7GfLb8XCBjkzTASuRS7RY9rF5fitvqRea5NTobFBgUpVTPT6eaAAYt4QAQEdSxidxFAJubM2z2vfpG",
  "key8": "5srvHvE65c7t8CLfNNoy4p32q7YtN44tNi2HP81fB5a9hoMCj6MujKTMKCtjVAGQeSHLCFLR6pzoaiGEETSniWkL",
  "key9": "jT8bHwSpQ6KhcpbLVmjDjZsd5aAxSsH7s6BLZQ1YUm5PGSTZ48Tt4WsqtWnovdanSRxDwYheNL1S5ER9PQqGzVW",
  "key10": "4HxFvYFXYTk7gCpNQVdC2yqeULhQzbvkHozPhndJzFUvLs4URjwDCnT8wRMb2DhDewECpc1NQY12djFwW7kv8S8t",
  "key11": "2DfcnYH7itLG2zcfKyMBTCGoNHT9E7zx16taQgx6tvPpycNh2mKM2fxzHEAUvq7PyF5CD1ueNxB5ZMyCS6FwHwrW",
  "key12": "2TKDHXZNJ5BYEy6vZaVC2K6t81G9KqESMRyfG1qRWQYMzepQYcz44pNNvn7n1DHJVkx3ENYJyPXhgzgtkFUzvySA",
  "key13": "4swFFjP39xzyVLkp7P69rh9XnSuLjqy6rCNEQgF4TcBEbNXV4tC36PEncfmB3NjMicvPi9bmC87eefayCKbGLizJ",
  "key14": "2u7Q5Xo6Gz9DN5KZHSSRx7f9uiv86Ma1RxyQyAXg2kfDnKELr3tWraacWeweYrsTvPA1ExZPmU1FtEaLW3MWJPSy",
  "key15": "4hTwxnyjhJmXb22rLy4tahR64YNJXZqoeGgqwadCjyspqEYaWVRwuvokWPzpUzqw2m5LX3M7n1kaC4eBjuK9QEEc",
  "key16": "39Wk7dEDPTTgJgY25yqTuRGNVnmpdGYhz5o14kPaPHCLDPaMqwekLiuttfGa7ec6ncuud4mL44ZC1Qu45B8ptQ7U",
  "key17": "62NtVeg6GdJ6zG5MJh3zdtC1pmvXpKB2Cx8AuBuymkqzxtkFyKGVTHvJTMEuwn745qw9uMK215FcygEmxWgDVywm",
  "key18": "2NyaTUUujsF5nrr8TZE1o5pvqgLXTS8o8ewbjHk9YossHcgwuMTCm1VqrL16JgCav6STecrgFgbgMYp3bZwcurqF",
  "key19": "1j2Cjsz79vLWrWR2F5i2C3uqCxUpf2ZKEjgPcabTf5vVhFPNFRmspJkiWyyEtWLF3B61GPJG3QtBVAVCaZxTcgR",
  "key20": "5pQvWNz4Nr4AjdVi13oeWBCAwuArUai7SEwHbX1MvSmC34ckQkhMNa1CRrRSV6erNYRR69CGVN65F9f49Sa9W9ms",
  "key21": "4FW4C7UsxmcsWEcfpDmS5YziZjQmYW635Q6qXNcNFgcmm4AKFDGS5i9y3adctYK3VaWB26L7Po7YbFsNpCi4zFeq",
  "key22": "Bu66Pi7WZqn1R2TUA2Cqgw1s92da8YsVdd2BVnZ9tdgrbYd5f1uMQuKv5A5sFDbdH2X7zxv7vYvjf8kh2hS9PB9",
  "key23": "RtcLf2FQw5c6Q4gwdtRL9U8RhvWsY6Xsp6181EeGXtUfjEerJ5nq2bSTXZ2GPN3eYAT7GKFW8iqs5GDHTHq9xwc",
  "key24": "1BfjXmT2Ez21yph4XRRXFdxJoKtvwXkbhvLAMVpXJ3AVC4pZEAepWvhhGBTHebMFKxVqjfLDSwVxPm5p5DjU3Ds",
  "key25": "h8x89LJ3V28qFNjqu9NpTTqR2v4938mWusdnE2HDrJfuF7VzQUwtWopDVN2pqBtChjnDp4WsvAvBdZKSXAdZTax",
  "key26": "3QQDJTRN7nKPLQLpTB31RwFZaa311gFs8xjkdAHAHh56cnLkoeWg2Q7pZFyMPDGhM31gqZpdDiS3W56wAxDyxcaH",
  "key27": "37jkNTk2ckXsAqQwqcd48xrnh92YeLSMqv8vKKH3B13tXG6AncWEpWsEU6HeNkzKuocNEhUpUtNYiRFMwtfgAUME",
  "key28": "26WY4ye7UZcV33qMna952C36LWDhKJV6f8jqwNd2qW1yoDqoAMjs96WeKvG6FuLCDns3e3eGauqkVHDruUw3UQjQ",
  "key29": "ov9ezbK5NLHU8MbaSu3MZXSaLAB8pQEerUP2S6JocqzBKfUEcJPGPfKKUsjHBoWshVTrjhGkihmVJWAjsHU4iTF",
  "key30": "29sGcY2htk9iskkjT2ZWxqPzGUcjrvEDjxJ1ogZkFPXza2ypB8se8poT9QWf1Cs4xSYe4ZdkbeNHhccrmrMUpLja",
  "key31": "4bvjAdPv5gC9DZ7xBVzbxkZEqU9D7WmM3ixYRQvc4YmHE7S4fYSB11g57imske5PX2f4Wb2G6A5w75tmxLGoWBni",
  "key32": "2JxzGDYk2vLG7v8hmgLUZY3CyuwEr8iMa58uPTAomrtLCnQWKUKZb1sXFgHD79ii3gpykGWsufkHVQTfPrv5ZVyq"
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
