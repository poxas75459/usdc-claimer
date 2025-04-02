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
    "34L34E7dyDbQusrLnNAzVfMcapbtojSo9ZyHwaVe7pQeaMwPcqHwugKai7gcPSrSeLDb8Fdae2o3nZLv9bBVH1vL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rDhLQuzHmS5yS6Bq24dcg1wjckKAksA6jmPppUXTCupsgzBLCjmRaT8KUWG7d1zvFft9nsidrv5DVGjzy6chrb8",
  "key1": "4w9kHeYzZQb3QVgoapkf8nZZVHRep1c3YvjxhM5uLpCY3zSE6FiaUwNJYQtGkkHzSWrTUXVvXhxNA3WAvJMDux6o",
  "key2": "57rrv5MUVCAS6mXw6DjPJPoNd86c9gibVQfZ8wbGMBuAEnSYajpxjetgrXgGgfdhdfQsKxN9LiHivDXKqARPFA57",
  "key3": "pc9rYBQH7LRNoQbcwKnjnrH1aSi9TTmVcb51nHcnUmuiVRRCEcjge4XouuKCwMYXnvz1hiuVcU1YRqzxupDHsYP",
  "key4": "yRGbrNJVWa23562cPAiFRJBjWpnz354nrpUAxibcSvueW6q5yL49F3BgEj1AzJYcnmMqgvXRejLN42NGKd2vs7V",
  "key5": "4uLx2M8cU3QZLw59hkVbkNLeJ51muHZucMpJAot2x45iFEw86R2aZLmdPrUL98Pp6GyebwGVyNdT1s4GrgirHjnv",
  "key6": "2MoQ9TqAtB4dbbq8faWMrU2xzofGCNWDwDdjVWj6B9bLLMwScKCJhPfSzbXpgAj9Y5ZMwzG1rhYMb6yzZ9xTY1PK",
  "key7": "59NFkY6sr6RzAUY2hkAoMaRsDkiA5kKa8KXGnsrffWDrQuASe9CGPK45T2R9bhytfrjiZtau21rmV9Q28sEvJTCT",
  "key8": "2xXPAV3wf8ZueffXPyHeqq3YZ7hkDUvPrxCSZaDDwoMCw3qfrqWM4Nhb25Jzq1sq5EU4N12kyqntfUCTcy2MuXZ",
  "key9": "5Epzzr88tMYsmKoyitHHK8dQ6hb7WitMRVD7Gv7Pivb4zM5xXuN859nvJqNvmaaY3FDr7xjHG9WfweQQFwiAPagR",
  "key10": "2DmtiXhsBwFAoKP5MtFLjDgw2CiAgYiyveiagPZxVETWHLHzueQovKnXDXdjYnqCDfZpzAZX5mLpenoMXdeuPZUj",
  "key11": "3KvRCGzA4VS86kKtixuziRobHmyMUDSCkutZPTHZVVF6XDWhjC1BULFtLsxqw7nPdkYb6H6QRnfjPUrdY7hCkiQ7",
  "key12": "2xkAocueXbuWKSzTrQkE64ZKuDepY89fw9DoWDFa6v2smSHom64XTQDuWdbtSiGjMHuoN6jd9hTbKCzXAfUwtBm",
  "key13": "5G8RTfeju9Bg5rZhU37oRqHvWSTriYyu5bcTbxV6BP15aCmKup9ZruMsNRhCJ1tW8uKhDqm3zN5KmLUf7Ct6853A",
  "key14": "c797sQEaVgeXpsed1kH5oGwuPxSHt12pcVwR5o3iPr3buKdfw4LzmoVaorKtXwzaQ7NmPtHwoWoD744bRPiCLPD",
  "key15": "Yauti8SPBW4tAdYmFwprcWt2dWdDEGW2ich1Su6chwuVCXQC2pBaLiW7tocX2MVRP2sLhZDcC5rEuyKu5X6ZTQC",
  "key16": "3qXMo3iLTfcUvoeKZiWMorR6Gj5chfsts7SttD5eCkwWcDD5FNPtsx9Pt7Fv752WQtSG13cmSjcYgwhGyggRNs2z",
  "key17": "2cb7Y27QyRGc12SUrDgoC5aBptZ9bQ3yXYB1NQEFYStsYyocuGSZvwAzubXbnWxVxCehJHArPoeyy7Yzq6z5boSt",
  "key18": "5X5QLWkVpc1KnQDDzErf6ExKMX1vGcNcb44bHrk2KUwG1TmS8zcpRSiqosPhv7RpczmhtR9x6EyZtwfGTdwViPS2",
  "key19": "cdUsiMzo2m6TuuJSiFCx4ebhUKthpYUqAcTELAB3HH6zkMgqALyeBMR7bfn6YQFHUEax7Kusz7rmxVxbM54zUiE",
  "key20": "3FRJx3janxsQcxZmD2hpGW7ADCfNL92XfEZrJ1u5FEBaZfsgDQFiwKkNBNX8AhxyCJPjZn6rCX7yCCc1fygKgkf7",
  "key21": "59Sui5NjTLYiBCGG1hoWNxtJyyNzt5mWbmYj9veXXeRZtMuv3iSbCYtBgZGHqqqF59ShJE3nGeEMGDeNpwGhT8KQ",
  "key22": "3s2hqib2SKMJXZ4TSqKLebETutcPzWNmfLyVHqjWU8i8mmckmHGvXYt9gCPy1EniEwryJVNtjL1JESU51LZQv4wB",
  "key23": "XDYi9EvjQTp2sJuBJ2Qa9f5uULgHXo9s8oFFNXYgRFJsnZcuNBJeq2uDNvdcdan5J6iFScyGVkVV1fWkPsmxWkM",
  "key24": "37PraxivW8ZCfjPBxfwrbXxK2ZGZmpHzEJTQc266sBfVM5AxAdVHik2CbshxahiECN7n7Wof6HK4n2HJyT7Z5Leq",
  "key25": "4pW9r1kkjhoqGRRw5fDvb6pxyaGQkUCcx1YwhsUkashQnqzudRstecxUSmbjGYJzr11oifXJZxqd7L13ommeHVb6",
  "key26": "ANnYfxwPoi4ZLDV2uCaCCBxU2KgNZR76vfMwSk6GLv6SfJAuSGQ5YFsVQJkayqvrgzyEbiKkbcjieamJpsP4zvt",
  "key27": "2abWjTAkVcQyTs5Tw69QUDJH7xvrMtn2barsuJHp1AGeSU7o4FgizLCNnFpeH8YWwmZFVdyCYuNKojDiFDq9JM1v",
  "key28": "F6xTgtoskMCf1hmTjDDqJ4TM1aRpmWRiEqSfXVVXnexPuAtfv7qRLD5hRmZraYyEnTpyK7tRhwuM7yd5DyzN3fX",
  "key29": "5KCehxxaRsEE2o1m47NMdo3X7yuHguQnYRLfZVJALtfpnsW4LRU7bRvfzSx8dbuoxFTjn6995vbALcTdov2KqC8W",
  "key30": "5RZxfe66kt9m9aHgkFafKX687YaBVogbNkfX53fyDGd3uwY1B8P8VtbG7CzBBx9bzqUBc8K78XopYEauzJVNjvso",
  "key31": "3f9tuKH2wZGQ9KXAo6C18TLhSWdcaeg9GF92oka8SLYrHNjdWbnV95Fsgjv9DMhZqMqHtyua8zUhLHnpXszdhMYg",
  "key32": "2fApsELENpcfgojzMwC8hDhNS9vTzJ2PU9rY14xPfqBPB1AKmRYEYQWR9iC48EQXx9cvp2WQLh3gdYEVe6U5YjqG",
  "key33": "4XHAGRwgDiMs6TnAScKyMvLisph4mwj89wVsLnjzTz9e7aRtbWoUzGDCcd4mTZREvj1bSZT5hFLoyvk88xVzTiLN"
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
