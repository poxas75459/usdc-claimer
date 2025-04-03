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
    "VLw7atQ88NeyEgf5XsGrxYWRk8A4jYYkDX4UpPce9wtHXHZjqY7i7AFy3jFR3PCVRQvyPXgGeiCT64JTbDVcZeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EohBvvJsVafqLuQB8HqweuUUj1augj5hknA16313JTu4D2fUyAekSd5Q17tTxUuip7y22Y9FdXdfjxUiHEHE4gh",
  "key1": "2qeL3rCkpEQSHQ9nJo4hU7J25hmEgKV449GpVmumE69tSpXsti1197SNWFpKxw5yiAWnfTwJb4CYvoV6H1TsDMVT",
  "key2": "4myCd8NipCW6y6bRQ8Zq7Vhoq1y4h5AVLuTWE6VHDjHdeUF39txa5KeGM4em6j4wFSQ7qpiKhcMhQs2Ku34ipcbW",
  "key3": "9RGg2NDTtyRjLewdDUzeJGDr3o71jijp8eb2Aq1kd23j4yQWbtJLDtAYSxHyiar4einE7rXykWubLBevVWGewrN",
  "key4": "562Jz5xqHVcb52ybZbCJvX2Frhe6WMxBLf4XF85vbGVgAv1fp86CXw8UQLKi4esVePTBj7bDWbPBKc43zvMG7MDd",
  "key5": "3wGAdszRfw89eZZbYPv3KFGNXU7toRE3UeLAUX7SjzXA5M5w5bqxcFDwJV3PFCYbYr3ajjkXE4YYpvGcHJKotbXG",
  "key6": "2siGQx7df6Cu8it94168BRKRWotCmXpK1Y9maRRZ92CsHmD6CEe79Bi6LRoWTrmEQGYRYAwFgSM92X7dcXeg4qrZ",
  "key7": "3BJCbL7rG3SyVNMq1BeWWAsYmTUvEKkJe2F9GDtGRpMCpXKGbDJk4UwxwkcTCMtCKYwADC8LEq5PEuPnWfF8tBfv",
  "key8": "21Q4tc1YuLGqdqUQEpLvzZRZyVFGCFrfQHzVX6iU9c9xawewRNX9XourinA6yuQ8JCVNRv44Aex37vFLncNuHaLz",
  "key9": "5EMVEmjgVeRnCPMVQ6WFWcApHfabsWCdrL3hSwHcJZczQ6sEMBJq1onSQMmpYkNVLq5ZNa2p8bCjRswzn9BusPk",
  "key10": "5LDc4VZLmx9FmoLGsTLNdXZmkb83NQAqgEqtfbhQXJ1eJLioyBJUeGXNQezEP1FugVYWoPhzvm772PK3YnkuRzBt",
  "key11": "JA9atfhy3grVU5MQd2w18nGyA6NNEn4VBBH5F9hf3FNP4EtBA79uZax1Kb8685nupKDkuX3qS7RoGpqs4wqV1ti",
  "key12": "5y61dgEQpUUroAwLiNGfNwrAtJFgaFzNCEXuczjyigTtt5kt8F5sittUsSoRejEtgpbvX3d5VvBM7mXiU7taa4eB",
  "key13": "j5GshbMmycbJrHuMYB7Jd7r1eWLC3diiWfr1Lgd1746KXHa9VudqQM7EYyu8EzvZ8Z2CLdK81H63ZQJt12cSwkL",
  "key14": "3oALtD3gjpG7bPC2B61BbyEFGqwS5rgDApuyG3iUKKQRWfeQnp2oaypqsN6e3fSjHzxNs9pkdQoQXPzwD9x5aGnY",
  "key15": "5xse6uHnjeUqowRE82Pe3Ncv6Xkvz4ZFt7n9S3ECDt3rVr5BhviMKTLdDsaTBNrLYG4tgmVstg4UzY1XKoP3Zk6v",
  "key16": "37Xo3wftyRwm5geyY6naSozoDm1uG1gtaEB75WZLQUQX65aVdeCoiY88mrAMxwV7T7JzzREMY29FyhhiNgGKn4K2",
  "key17": "3DiDhwbN2ge2NoF6XXa182ZKZ3Cvi11Q1j1Tp9MfnyutxkRzsxXMvGTpP6N7mapbKfHDZC6AbBNbwWpChzA6XfL3",
  "key18": "4SU6Y4nPVt5m8FeA4xZk4Lp78ckZqE9ZASPzEgTAGCNjDSVzNmHMQtxY3MimhtBTaopgBQKQqEFWhCWqYgMQkQbC",
  "key19": "sZ1TUm9skYGaXZwqgbYjBeq4to9B18RWyJDp1BgTXomhiDfMaxLEbN8ZsiMPbqdXksdPoWQ8GMXyCcvJQ2TVfaa",
  "key20": "2FynPmXneR53EVmKkdHZS2m7dYDggaqaBenjqszxYEMGu3r44CNjZXdFHH7RLk38wFuk7RJT2BgNfbN1w44moD9m",
  "key21": "4M96dvUVdt3fVyJQ6c3Cnq5St2m17UWEDMTE67nNcXHAYnsVKjNqwy4pELteQMyqdkQwqQ78Sbc4g9U7ZCyFb6Cy",
  "key22": "2JCph2FzvCSwpVbQ7i2mrKB9R83TBvzfnmwVSQwsajiXn7wG98KphhLqN79YXoyyEUmNWpXQuAMtERdeHoXsg12r",
  "key23": "FfKYGdB39fi2GNWLChj8dVddZqfk4ZzZLai9bWizsdC9cCTPu8aScyPbY98kQbDjnFoLWtX5usnBo7tD8gPRPuu",
  "key24": "GTsyrTGasLJwunHMipzJ25iLf6eDdahx2PwrQH4QcnNgwZJs9G2N3HCETAqJzNoLa4CEEViveGYW94znyKfGeJB",
  "key25": "5wKzwLpABCoKh9DvE3S1BAwyHR1Lej8BDt4aWyeARR8S4kKnhknUM9VMb6huRhMcPe9du1ekbzhDe4JCFH7SoWtH",
  "key26": "4YdaKUKGVBmBY8AbQw7f4kfA8r7TzN8pVqKLi2EszNP3xW1S2KueXQ21oBqT1Uh21CCcbNT2n13YkKzv2eDjmis5",
  "key27": "4vFkyZXaKMATtaNJm2VDfn6PSMsXXhFGDEZnUhsyfzUayM8GrAZMRw9tZKQp9fsw6ms1r5Um8SVBU3uYMPSRLwhV",
  "key28": "4ACrurDvgzF8LsmpBtp79CTZwnUpmxQh7BjM2ixcKFDg5JV4wDdftvDomA9tyZhUVsXUtM5Q4yWPHxoaC48DFeem",
  "key29": "5cmruQaKSrtkjNwXfCj4zozn1TALpwRRNwYkDUikZnbjxqcE9tqv5MmKWfFDHPjM8EiRDEAsfv9mEv2UktET6xF5",
  "key30": "5xN5iXUtzepixsy2yz83FAd1BaFRLyBsae67TRDn6Hi4zEzGccbDoq7cEsXDnabsPSiYQ2fUQ1w2MZf4HuGdbTS5",
  "key31": "2r52xm9PSDXT5N2TmbceSbBbZqNTDEUUGfzk24Ucd8ycvsdyPmCGc2izWPssYPok1q1nPhaSxB1NSaMof8aAWCBx",
  "key32": "W5rGjCXjJTEmnEkaoTTwAyXe9pHc976xouSQgdUDk4t6QbWvwaUXjtN9gQoQ1ExUe73A7MDVZLA3fAqjwWhzXnm",
  "key33": "J9ujjHLyJgdboay6Lfp3Y875WP6hjkqLNoNWsqza1mxUFmauiVXqBG7B4Fi4NH4TtZvHTBr1YcUpN4kzjEfAQjL",
  "key34": "wG1pcnmpgAYJqM2WT9vmF122jak86pUbgtxXs3RzsyiKNEFHuKj2wW8UFt9ciL6coraom4Pj5xMdhFRaa8UtYt5",
  "key35": "b5MiTqwGM5RW97dWS69X7xdZcrvhdxUc8Jt91TFbgNEQieGKZqxSaSJT4ycCYrWmLRarQ118SJuGa28G9mSmkGq",
  "key36": "4un4jWdyBQwX26P3BPYtnMN8i8Z4yWy6x81grYvhCnknopXyVjnzAWFvUyCvpQXqhJS4FGR88fQ9sm9NNd5iEbaT",
  "key37": "3eomKccFERivm5nC9GshzQpngPxWy9EB5UhgPwbfErsprsUhQCZ2zzzCRiF6uZ5izSdb4Uag9xexa1EZbimVrbTa",
  "key38": "8bSb9m2U6CoPC6NfuPFSN7grDQyzS4XPqEE4KgphPG7mVB6MSpeT1jgpzMTnMRgtwUR6QU59u5h5y5mj7WSQHXJ",
  "key39": "5ARHNd2Y2wCzx6u5dW9XcXZvcuHsPsCCmFftd7DdHcBTkhnuRZo58QPwTiSsSxjeUe89qeUAao2Cut2Lqvzo8LWP",
  "key40": "66xxhD924V1oPcdE231eipgHHsqh3o2P9EgUcBBExeTn3HUMLzytgWtT33KdRjYn69EVpc6rvB4ar5j2NFwmb1eu",
  "key41": "5Hxy58sWnMDCP5EwDLwghcV85U4rxsXvamf7ykfEd5Te8PGoiUMPkTGvnsQydAZh1cgL9hdn6fNzEsof82a5pxYV"
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
