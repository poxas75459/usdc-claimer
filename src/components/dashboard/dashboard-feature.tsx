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
    "4Po9GGb8eBDRN3kDF8rPBrJfsF24b1M9m7j5xRrGNHtDgzJSQXfNBV8P51TKHDV63oTQ9Cu1FENT1hEFwS9kdbed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yqQZV8GNJKnwRZxUTCuLNebadvGHEtWoye3A3Ev1WAJhadpuC7mBFQUywEY1csRDRu7bJz7NaajPFzpjQGjHSJa",
  "key1": "4W4CgkL53ivKUrWmjjTDXD9dM3pToB6VgWMX2sB1Tz6edb9GtWqkACSt8Fj8VhAk95VEhSwdSeXiQC3aUWBTFNsq",
  "key2": "4FsZndQ4D3Zqm18VtCC8DJpNg6wZCG1SUZiHJPAKZzUsPPsubuUeVgFrYJPHw9m8zGfa66GEVPWTgRpz7aUcA4DX",
  "key3": "5P5FXVsVbQ27fQS4tuDdb4MH2mLqogBmptNpS45fEtVdhQtg6Sn3B4pchJN3zVtwhSnmQY3KPiocVcS4QmGchEJz",
  "key4": "2oMvfJM7cAUxLmbxLu7HyrCYxWAYum2dJp3cxEAur7GifSnRpCe7cAQ4ZCKwnvpcw4Qy6qeXPmNQtc5bYPJac2Hw",
  "key5": "5sDpZUaHdnCUvHDTcvGy88Fdg2d2EiGZUEydNg6jrVywjCngDLA6mq7N56yW3ApJ2ZkVJdAQH6vud9NEQP5kgUfE",
  "key6": "5TNhzUdAxwgtbANvuiZ1gdenHovhLbAG9hWLASm9SD8FxZJjYk5q6BajmEUtEQQQwtnrcrsRwJ3XYVXBSWMemawq",
  "key7": "3okkAZSu7ME41RuLVhqv9K7e8S63JbBwhASEHw5VpfXcBSHfuL3Fk8TYZSA6tuvWiGa3LseTZ6pNVbzpTHwumjMV",
  "key8": "MQoYWHRbdYiACdphdtmrfep1DvtaczHM8b7a9Zzbfzz7y1uAKYLcerzcDtxmkCh7gNNkM2bUxpr9GScdjqhvWq9",
  "key9": "2hrNXpttEUNzvfjbr3nTqBomVUwaRgTHFiwfjC18sovpHeEQ8Ea2VgWkE5WSGvfVRDAVZc5ro38AGxpzE3zcfuHi",
  "key10": "5dmdu3P77smaHEE2joZT36WyC881ErKrL3M9Jwci6KcSogBajy13udirniQH5A4hxGydYHNkE869SRHmHhKc1sd",
  "key11": "5VxdZzkjKaDuDyjD5ikEFW2p39jkdjsUUa3xtjLyz2ZVNq5uSQxgpT6PLS7DC17P3bNGSzHf68YuJun7dX6ZesuU",
  "key12": "3hzp1BmafTauN5o3ewyLHntConmcXuy1cRxAsZUQvaVsaJDNiTtqdbs92VoVS3vEd1EK9wQYuzJYzkaK7q2FfgJH",
  "key13": "oJt5ituWXcwy5KrDcr2tM4zUsTXGbVWQ6yuXe47Qa8Dw3Ruw9STi2bnSyZDgVoT4EhSH3K5Gnw2jjAzxqnJDZ4w",
  "key14": "2YDV5ZjGTgKGQVGCcx6Ufy9b1E2MHCzSirgQ8qvdxvbAxFaMNWibZUH5wKLM4RSRYH15CZ2stNsFBzGtG3vLxtdk",
  "key15": "KpexAP9PBBhemqwgCgg5A9xC3gJmXHjEUu3hEZ6jWmvGwdT336VGr3WyshncR2uoD5TjHDokaDeMoeCQCiaLSYX",
  "key16": "4QVDZ8y7Tmz71oEt27dpnrRaVQ4g5k7k66UbpmP29RBwVuuWx1VwpkU1UHL9cr1bfYcdHCMhp7ZRYka2suHGCYCq",
  "key17": "26wzCRMsZMRSUeB4Pme7qr7xj6867RV8GCeTy7kWqDFYgNu4J7GUtSDPhrd7UsY7JbLY34yNJt3Rc7HNh5AeiaN3",
  "key18": "4ehD6HtoAXuhRpiHMwXhLmdqRkFahuJQyeEFC79sgqkYPV2NzQdDzUDkJyL5RLcZp2B2tfVkSFAccVvKWptvdmqN",
  "key19": "5GwPUgiHvC6rejNf31hXJQdg1gbZMxB2jWpWU91aerbGvSppEevzDR5yD5cDp4iu6k75qHRcV5Tcs6kCwoF9b5fM",
  "key20": "4pJNLpGJbLNAr3kzPq1YAyD6eeuSpxcSiW3pfYUbwAn4uDxHuMCpDuB2Z62U5zHhpGmLYbnhM4aGGahLduQpsc3N",
  "key21": "p59695XFWfBQqk4wsEEiZE7wXPnYWd7yh6MaKodQaQxTDDMHnb5JTuXrkEosuYU6RQiMoBzvcTeub8ijVCzTqV3",
  "key22": "5PKgp9uSyrUv2boN7RAMA3q2sPFbapSpbi5pDQjmc4EAGK6d29b24QNV96Wb9vmH5ckRB3WFawDvAuonts2uwSuM",
  "key23": "5dA5v6dgesS7YbptoTqP99SqbEm27LrmvKFCLzmRFH2GAPy5K38WzdC3whJWGRzXAwWEfgwZpDYi98RCMnG7rxm6",
  "key24": "3qpxospug1AfipubB6VTftomroYFedTWdgHvSpiMqr2s7bTDs3pZbDp5dbGNbRdAH3vGp9BYeRm5orEuV98h8uY8",
  "key25": "z9vtNJLmqnLfCcQk46iks64x7V6AZBXnhxELMA8XFmwkPhf3zyPF38c3nts2hRjdFXWrk5hX9dX4PXmsFDM3rpa",
  "key26": "5oZJkDHBokdWUP15euecxsppgb8T9sreFDbGoZsie71DpBy9ruLrW6RdYyx1JtEwtuCEtwKwxNeSHjaZFdTNBnSG",
  "key27": "2aTLewcNK9DZG5AogUSpCzVn6RWAa2pE67umNNeu1xjtyfDXRRqGniNpbKPdVx7dN6iENWUZqaibrs2az9kQLa6Q",
  "key28": "5j6Un7n4ivAtQyQoFMdbeXX915X1XSZt5i1Wgs7NCNwvrA8uqZQsRzwT4KyRrkzbBiushAnpUoAF3VudqmXPwuPb",
  "key29": "4336eDEfAbX3AfQ7twZCCmr2MeHNvbjcDoygf7mZji8B1CdULmtMvKTnLBJyhnaM66nGBJgJPHeo2Zuaxq8govnj",
  "key30": "2TdTMcoBazHvGVWnTf7K7AQS58uC1mfh7B4PgcjnndP6w8dkfQTohJcPS9iycKPJFYxkCUsifhh7dMiqWEq12mws",
  "key31": "3A6goj9JgR9jGReZsXVnA2EUuDEe7RfnB3jZ39sLvHmU91x7tGYiJxkqnNam4Afm2Z35Pc9ohZMakaNKeVe5Exuy",
  "key32": "2DSN9GM752DqStbah5ga32YcExT94E1LhuU1tU6t7UxKxHVQ4oVi996WvcqeJDLr36aCZ8ZiBGVMCibvqY8u6hLx",
  "key33": "22ZoJW32uSCTGQ8ZAVLtuVMVL621m5HoAJA3uEnEpzf2m7vzAWwWcYZ86on18rwhdbfMz44bwU6F1QxomVvdgQNW",
  "key34": "2pnjj6bsAiChPyj9PeA2LayQ2Rknrtb728c4btTsSgjyz6HNjDrmiNEQrBpq74xp5Z7heciLJ6AoruPfCQx4WJBa",
  "key35": "r7pF1CFKYdbmpAAnfwV1VyzsGxXdxEJfXfJJHymNEbwTPgrhWGUWdd5hULJEgH1134hvBAZFfPwSWziWSZJv3C9",
  "key36": "47CH1oP4sFVXzPoBMhhHxcwVNe6nsdr84RbBrN3puZ5ndRywB9d2qjA25yAVagA68YXtewj8ew61xJm4HJWzeBnG",
  "key37": "5u9bcFUqoohAS5DxZKjRrnhdKa1jf8aHfndRNbJTbGwpHqE1jpDCCeXQS49fYLyj1siiHZej9PqZFSCRj9W1EUKH",
  "key38": "4Ef9z9JDaBYLZKCaTjCTVhEyb44yiokD7X8EQvo5f1FDtNwSLPqqsHd7YzbBzjmtagDmLmY93sJkdBHAXChoTRc7"
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
