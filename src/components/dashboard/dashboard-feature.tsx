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
    "5rSmBNWtujW8p7dZEQdzycd4f1rjmoDC1GaNRAVk34qRRcJdZ6hVsBSzjkGc3SnpSPuF1SGX4wdwZTCBwgcVCwAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hncun8fWBqaDwt7k6qjRjUse7ACD4cwDeWxugoJzsxGCuV3vmSHGUQfwu2MYPhVhbKiQaA8TX86JAkqPdBcn3Wb",
  "key1": "2jrYbSzCXwtFsbkTW7dfA7RT3M4yJRuVued3nHp5ULxF47hLfSvqncYjnFk97HRBYhG9j2LhWuuaFSMasQAZq77m",
  "key2": "4MQMMb4AmqaC3xebfGXcpU7xoPFmtLfN21AqwA7Xmoajh1qJfH1zeHh4BHD3GjKAQUTWUGyEex3yJDxxseeTWjZB",
  "key3": "4FHjtBpvZBAPVQW33ZN4iZCuFKuKRP2nfP3vdzUd3JHBUqhPX46kg1Yr2Y3ogkJZYG6GcEKkLeEjTt8TrqrXuvpb",
  "key4": "4f4wHKkpitXu2Pde8czj2HsqtoxAjDMvZYuQifzmexo7u3yrNkvNgPdCJTRzwnvhrTbJQzUSzwM4UhyqogEXnWEG",
  "key5": "3qAkbspCLDx2Liytr8wUVrB7Gz6Z2JaYemksBbd4j9CHX6YtjKKjRNSvkWr7aHWxkEu2nk8yvZmMQP2vjfpwhye1",
  "key6": "B2ZUvPMXDnoqmBry9sDQL3N4UKa5tx7BkhTnqD6NNTxwKM3o44G866F9D5KxkZtrHHqBL9J9DuAipTHf1ybTAfd",
  "key7": "5gZSKipE8Ha4KGRRJavDdeMgwgmZay3JLT6fBmFuiQLiJbtXJrbyfDqPDbDtSeXSb5TxQTt7jMztsP2kgz1xVfAZ",
  "key8": "5nyvAsKHhbXcpMkD1dBqL2WrqakT24eC7M5Gr61yKtTNNYpfMP3osv7KuH3ZRiSEd3iYGvaDWPgtrYhTqFH6QJGY",
  "key9": "2V1AfYtAJWAjRv5kHLBxNHEf5SDouCZ4zRpWWcrt9mnB7ErSVmYpUyDsboUohS7UeWT9AjJpRKD6NqwYSio7DHTu",
  "key10": "4unDqBLwGV9xDEgnwhrtVxnYX1myqUb6CdPrfhAUPi5qgp6NZfGoYmMETbGLcKKMoiRX2kBzcqi4998VMZH6Nirb",
  "key11": "26fRJkwQCBG4M9yAw7ec2WYUzzu21gunf2Sg58iGqkoGak4vF8jNy2c7iDLkXzMG6BtVu1RCnWKryEFcsxsQeja2",
  "key12": "3V2KXDSEvkkViDPY28R2j2jRvdf8Qd5djxUXXfRmvFD6pbbwVB21JT8bjjoFRvK6FPhRCNMkep8ybAebHrWoH8ZM",
  "key13": "3KKvCffhqsUyYBWr9Qp5ncsmF5XyP7gNUv76mRnQMhkoiug7RXeSsaZWCKpR1DBRr9sTvX2YBbStQ1p7bMrgjvdy",
  "key14": "4MAhf7H5Q3rQXY6263bbhZ65toid93d57HcHy8G3M3CtgVjySa67B1QvQNRiPSTiJyFp2ZwToPSVjcTjGhC9eQKe",
  "key15": "3nTw6MFcAm4mXP24KKUj5ypyXgnH6dXntxUH8pQ7mV8CX2vUfc7Nu8Yx6L22aZJs7XSmvooRkuvZBTZvxoSSsqoK",
  "key16": "N8iMAbiXvBcZhaQMXpdeVCuCQZhB85Z47h3CVsApCVmYd7FARXSgAEu1rr7Pc76Rqsv4kBfnxKpn4kactzgZ9az",
  "key17": "5SzccBqvdM2DNAGDB9XRyD2sg3irhxzSEJxkc8Zovtui77fjdHKef6cGtoydGU2fMw5ufgGRXJrB2FHG1a9MjCio",
  "key18": "3JoCAvpEfHmDHE7an6kn666L8nLTJ8VFrMrbjqK8qghTnp2UuLQxY57NNt4xs21EUNqU8dQ2hVcc6TLCMZdPNRQx",
  "key19": "33sSL9siumzdo34D13LtAaa9ZmSftPqvypqrjBfJuRkFRDurLVWPye1h1gZr9fUm3D2xZibg7TUp7ghyKkJEhZ7U",
  "key20": "3kSTC8dK2xZR1cSChQLc3qRazjfzEZsCDw2ZBiHFcT1b9q81goEAnAkLMPNJB4XfR5ivoHbAQeEc74MLSQangFjF",
  "key21": "WvX5Fbp9LxNPvSiR73W6ioPbZDiSah934CBF4ihPoFDoa1kMw1m3MxS2HSz9pQnuP7wBbb5g8m63phFXfGs8NyH",
  "key22": "3U3S1SDVYPuXPDNmo3vpvj15XZiFNJA8QpbMVyHLBPXuprqfhG3zaRfw1pnyodxNLpbUHLMNZtK1V1bM535om3de",
  "key23": "2Bg7Xf6QumAyw8tCUncJmRkobt3nS1Hccu9DaaBY7pfJ8p8Hhn9LqHmZAbPeifVbVjMyV5VtP5efZDG3DjDvjNM2",
  "key24": "2d5AdRiFce1975Tc12jSVury5aFkfRaZZ2NALFb1gZtJgLXYLuL775xSzvEMCd9azJppuMrNYGw9GSSiCS8Fzdz8",
  "key25": "4B9ekms8pPXC88qFccVH9ap67xDw1GGB56Y61Dg1ndwTdXYoctuG8MsiRsBFSh3btrfGCtkk2AMNxTK6aodqiSAE",
  "key26": "4y958Yi9gXLBpR6PPdZKgZKYnoQKpwUqM47fJGoyA9SgRG5iTeUwjUWn4AjAo8ULaAV2zc6VP2r1PAs64bcoXqac",
  "key27": "K5rZ59V73NjbGsj2UD1rpKHcGAUP98HfNQ9J8FchaJGm5rkZZyFKgkcW9wrzaKPnGnJE93zEYs5DTh3xYevAqpf",
  "key28": "5ULzSC95j8cN5j1ZNZsgvcE7Sy74XKQnne6w6SbRraZZ2C4HCqPuSWSTQakK1uuNASXRX8hMg3xsqDp1vrqqvNUh",
  "key29": "4xEGRZ9321b3EkkcNiGeNXJVa1v4VQWhFY8bjFwzKi391Lg2DtbSptRUEJBkaJjepD52HCbksUtQjvorcw3RJnxv",
  "key30": "5PWYSvYxXCSvCUiKfAB5smb3NyHZjwW5GptPC6Hm3twPKSxdQzAgoM3V6TgSnCoT65Sq4BFN5ocZWLPygbqrBX16",
  "key31": "4ChoidsYPU5KA25BgxGw8K4BZsHezM1F5xvGPhffFakzP5wvE2T8XWkvdgPrjSx9BYdWGAdrbt3dK2znNDM7syqP",
  "key32": "5hVdfSrNxWwAfQQiaNozjxNPJjgjaSckC89hFKfC71RkzMTmjaW3Q3k6LiMx4AZft9TPLG32jLaUdckRHJPkrr5h",
  "key33": "4xC5FRL2P86X3fwmHj1qKgYhY64ydE9aCcLdzPXUxXwj9cMSfwztPGPWJNYhoFaP3Rn792mwEGukywRxEN6nj7rH",
  "key34": "5PJqDJdocQyDwAqhRET6VrxqzmM2XRu67MmVfRQ1Kc9p1e5EybhkJkP6iCgSdxtG9iCmZNomae35yLue2YtwerdX",
  "key35": "36dzo8BTBexD4WqVo7soHS2gBY4NmyAgaKbmBzWp3MEsNGBHmL6x7y7B7vWMrAGpfCArQjapiG1EtyB11K9EySpZ",
  "key36": "2p5d3sFxFP1bTUD2wscZz3fdWmKMWZ5TqFWpTvg65e1QmPiELMZXLb6NYbDG5hFdn8Bsp5PDkAEeWym8ETHeYuZ9",
  "key37": "2osAo6s7b2zFnckuwPf3tfViADzPFNbsBmhGrgQLcjj98MyZsnMBQdoVcS6uqfbVgqPx5AH4ZMBuB9VUj65eAiVr",
  "key38": "5Y2JXKWdRrEwSHRMHDjezAHqZkw8KEC5y68wqKFLteNSMcZmah41ihsJtsZdPB9MuHZF8dq3RozX6zPDoVEg2Qzt",
  "key39": "aRahjVQL8aSzdF4J1GoX42u3QGPamLYthrYS9bW4UNeBdhQDjGUZkcgLGc35oik2sDv6bZhApk8eUgSP1Aw5BMT",
  "key40": "2EyUtSvZCPtLcc628tgfdKJgGExTNAjJ3GCwY89VRcVy2MKZeyiVriBYz5iLftwY8uQinHv41hBFFCyiSByC4CLL",
  "key41": "5NGj51rFwshiP7JXrajC9vZHEwvxe1Hv9J8wA2fyx1BrdTM91Fh61DpfuguPx9okYkqUjGhBwNHGHuJ7zqSuUWL4",
  "key42": "2jc6FZUhbAySMWNSFKVNaQeaMQ8vEAJMUzSGfHe1FgJDsjcADbtqMC5FGrZMitkz7Ya2bt8JqL58BziTLQRmrjqT",
  "key43": "2ERt5gLweaRh5D1TaGXnJRkZJGNq5Vfu7hGbgdR9CzoYgGPfgwXnxULcPaXM7TayzHnfiscoDKKDiz2zVKjEV2UD",
  "key44": "2SDo8X7v87fm7ovv1RbRkbwDw6AnEAH7dS6s69FnGSakm8k6rNC2KmeXq1HubmpFZLLCbkH6BqSECh5Ro58mAseL",
  "key45": "4ABBnXv5LFJrdNpotwKaWwSwU9jcWK6FRSFj43BcPW4LmXShTT1a4CfU3CThYCRzMHT6DxGs3VtkKppadvWAzBpJ"
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
