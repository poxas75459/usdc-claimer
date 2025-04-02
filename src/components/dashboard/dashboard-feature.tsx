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
    "33yz2J2fY9AxCuNPkeYzAQmwyLtMxhTrurK5pND9u8ZjExeWzJbDoQpNSajfr5Q6avvoeB4FQDZTdVsuQd5morKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66G3URnkCDaHfR5TFwkiq6W9ng3n5kXc5JS253MtHHVFoP8pt6ubU7dzGUEBxMLvojr5Mer32UHkLvpnB365W9CQ",
  "key1": "5jVmwbv95d6Xnrid5x8z9EYdiwLATVEuteqKFzFhV1cPAac1ZMvzF9geqhRJhdTFSmMVgzAGcpgosGNN6AScgGcc",
  "key2": "2g1F67kASv1EuPNjPyKbwWC5EJ46iqoCcxdZVm3ToW9Tpu251GesQqESQrWPQFfkwfPDS65SiYUVDwsbfvTZNR9J",
  "key3": "3ihgAUDGZ8sd8xQYomWXtstdyivE82NS7KbBB6YuQXcwNwmtwEfZbumnD76cUVKybvEVtxCxrevR3zLAXHF4L8oL",
  "key4": "6eMHSXUrnXffjGfTBkr1CFFwGwXUWQCCqTZZVopKQ3f55cg9eGAE7GVCJrzm6X5Xjt5iFFShXi7fnhaWMkVXSGi",
  "key5": "4ECPopp3SiKtmQmwHs4fRgtvmX5fsApgarV6qsHbJ35ZZEFK1RoXvENDtyNXnaJiJ6GB29T2wuyRPUKHUVwAw6SS",
  "key6": "VZbm8SLy4MbDssb2zGJktxDuZuSu9LBCWjEsUfSHMCSBLv8hn7RUFVtF5BRowEjqFSVr13U4LxtM9apFbtqsCiN",
  "key7": "5NmUKRXc73FbeRWimJGsubnTdLhGoUcJDcRm6Pi5d1L8dmUFkZETAKxAxy9XbdHPxpXovvSrRWnqV2Kw7sDEpcjp",
  "key8": "ujPTqM6BLxRR1nKqsww16Ny4u8RVFt9JRY3QTgYTKHwVN9gu6NxA7TMgZ5rD7LAuWejHfyqNMvjKPdLaGtwHctM",
  "key9": "3eiJpYCuTQHnE7D65rUQwBzDg8CfGQ3F2HnZWL5yaREBJyK6tPaqsueNoxQ2qb9o6asJCDkaXnib5MT2fcZsGCvY",
  "key10": "5ZHt44Fx36ZCeig8M9VAczUWP6rpa7rZmAtERuyrToUASe7iQbCiFpWg1mUuaAPpHrkSvSrNGBwNbDhUnGJfFBzG",
  "key11": "3Sj4ZxyUtezdsrshWwpK1AYNwk5qht2Mwo1g7JKTNH8KEiWYYNgxy8nNQ2VpovpNWaGDdNrUcW69mtwGPMRW7Up7",
  "key12": "5XsUzL33J5dFj23WmU95UJVpcTEoNauCUN22EJoGq3g9miGPaahv56xgon8uF6N7ArfFJLhr7ouDEAvNaLCjVjUd",
  "key13": "5BtADNu93pMYpjw71nf8CFBxpjHZYPTBnfuyfMEoTtF94b9ud86PWN9p5in2Pwswe9amFCjqyRZBeZL9fuQDAqy3",
  "key14": "5d7JrSajpG8bbUZ56yC4NciiB629xkcZSqkwhtvTXAWB8rMVN9G8yh5PegdDu6VK5JafhqdimZY45nEqdPEkLpr1",
  "key15": "SVsjutfkz8EspCqrCZop3Q92ReQY2P4wVnJTWjD8rJrfCQEvWhdpfnr2mhje1ZLo2zwYqWUZQjs1ojbvVUkFma8",
  "key16": "44gwemUhjZXBB8TtqeNrzxdLDD5Ndd5gyu77o49AhjcYwkhvNJHAFSCVnKoBg4YbNxhBchekTw4mQZXjroRVTT73",
  "key17": "3pNr4nc7B4f5D3KfjVccnsgktENTgXczXKa6DXYAmtdTzRbgdd718UEygKArtPSeyoLaY8XJ2r3PQ2qHkMZP5VBu",
  "key18": "2fcSGyiVNJnASKcrj1kLgG3y9fU1xPq1UwuwNRFFPQSFDt9y1wD3DjDYt4gTXcL8SDcS8ovK8Hq9r9coxztk29Nn",
  "key19": "4RxvubvHEygmmMFv8UPXEjCXD7BDVn5Z2nd9aSx4cJz3A7i5qb52SSj8QN76hbgjifRQ6rYLi95XAgkTeLp4EZjK",
  "key20": "3sdZRBS4iBDJtRHzTDb239oSAPmD6LCe4iggxibQ1rRrhPzDhJd7yhuJQnyaRDRmNhM3X7ArLzxJ65EijUgEriyf",
  "key21": "2jVTJFhYiigvteiLjBXAmf9kWMioRvrBpM8esHThczWy6DCB9bRt6YAySrh9Rksp5L1SFfGdQyjCNCxei7k1Qv9m",
  "key22": "kbYSzHRZKLFT1PY1cPibJ6Q5B1tH6NmuW1zQLcaNj5351oWPWihfFUmYK36eAHAFEvBMHTqAfuPedCNersEHPQe",
  "key23": "2pxUbZPzCHsvvwPd6HGEZJkJcpNginsDrYrnaRoPi2j9BiwxGYBFovJAJqwaG5Q4ALDpjdv3swi74GsFS6kgVAK",
  "key24": "14wFXnzGrKvbArs4nLoiqeQtMvWt1mQkZQPAszNS9LffUbBraAEu5er854WU3G1cR3NCrWcrHDZXLA7kLEHoLrz",
  "key25": "59Zm9aHUUTpw6mqWWCgSDxb4TxdjpfXwS97cKkco115P1XKqWb2ovVaMGCoQR9XKKR71j1a8rCpRQ3EQvY5mYe8w",
  "key26": "5AdeBFJwD8N69BowjYacFqJ4r4HEGUNmPrifMp5n9BwD1ohuw8KrPni6cn6WA14sjKixBt5pkU2DkGHA8snXwjJe",
  "key27": "KLTACh7TqXE3XeBfYR6jxjs8iomZEb42dC6LRDspbZ9fuCcyJ1F1CtbfffPPmFtFu1MBahtz4LY7avjn1snQbGg",
  "key28": "2s9mpFuqBA5wVAFD2J1JtigXPMvjykHDXFHUBGP5eTaxZup3nZZYKvi2nUruhpv3Jjek5JVVnY5HWgW5AjiWWcbr",
  "key29": "29jmS1vZnxduMfaYrJXXrCrpzvx34FWLrLhp5taTPaJKtA8SQEtxGwDNbnKe9vdABdoVeyYHtBVpufKY5nzwudeF",
  "key30": "4hmHJMZbwkgzbJK5eJmn9ThAgUjDorDU69cnacrJ6jC9LZq4D54Wv5NgKKN1tFnhz3EJG4EyoRnGWJXaEXgNeM9s",
  "key31": "584U4SCJBzqR7h8aNs4UBFkATFsTtxdWSpn2ErX42Dh2X2kcgFtbxzSPaZ4dnoSberghoCPhyhTR5pQhkPtqF5tW",
  "key32": "2i7nmMMbiFToreMJyFiKLNGjz3AMYR5Cjvaxy92mUs19wwyAPy8b1KpZ7Xpit59dW7HxpTFVv3LyE2x1nyNFACTe",
  "key33": "AfoSCJhZ6an2eFzhiot8z7MLBC6FyCoeTCCxKx9zPk89xkmdkuwsz3ozGennCuPFTcnrJQbvvrafRwQyhxMrm6s",
  "key34": "4e9w45SJf9Fi7rLcpr2GxKkVctbH9Fzeg78ojxk1GRtZJr8aSZFRDsVeQVuDmJRkLE1r4Qm1w3CDA4guFJS2i1TP",
  "key35": "3g4gWamKrRdpffPnh1aC2q6MAJYJu9dSvxhcxX5Hp7LLXMuq3Fw1iua2KEta2EKSb4CdA9AoxMjVYNrxJC5V5Fej",
  "key36": "3StRw9qtNqgs6GLzQB787t7jDFRqh5QLj3YAenD4gVhbA8zSimCGKuep3CJX4BwFSXKBA2Cgh8Q8YDkLDZnijuxu",
  "key37": "282jEKDHstDaSWndZBysnJaX8Rex8PcosDKFUcyaQmV2actYJfJLzkgbwZv82kfJwkNiRB3764decNq9GuhVEQMZ",
  "key38": "3uAcsrTJr2i8gXSkMEvxuVjsZknzUUtJ2J1gjyumyDBmu3Ha451FE4eKUm7Vs6AtGHVc2XZz19qR61ZFKB4zMCp2",
  "key39": "5nPBJ2eTCu79ukY4JAAtds6JspWNGYVop6TSmbEJsHDmBHqVqsGtvrxSk7ypdVwYyDPCgwQeBQVW933oxeFzGrJJ",
  "key40": "2uPSk1jnuR4gmFLQgrRsbECTE6Nsp253Wx5T6oKvorN891ZPf9p1ka87B2SGGLbUdo6Na5iKaNzRj7h5ex7giSnw",
  "key41": "48qPZQKFXtKYjL2zbU6aQwrTzSUCd5WaXFeDDhjrtitMbe939s3NgkRPgnDtw7a35qdBPmm1ZUsHL7K97GjtLHsx",
  "key42": "43arR8KbDy1D4Bn2rEbr5uv7CegihmyaJL5fQEeumXeFCU4pBRRTFK1S1SvfSanRzc5khtgJ1r4tXeXJGeRGN7PS",
  "key43": "8f5XddBhRrtMkDp6BGYz3XXRqBkDwBkf54CjwN1UpR7CmVnyxUC7FQqDKR77S1h7xcACoHc8DntJeafWsH9zVv1",
  "key44": "4vvF1LHuqPw362KLSiwS2xfSfcC6gczaufc1phBPaAHaqPQpFiN3h3z9LpjX9FM1YyNnkTpbvY8Lwj8s727R86TD",
  "key45": "2re66iTN3tnTqfJkXkT963oWhiqAGyhNGCVBp4o6X6q1mtkGKsqhtFDotzy8Hc56EWNG8Wyk2kvB3nY2qtYSNMxX",
  "key46": "4kugiw43qMHWuKhoWEdw9np1vtgWVDWmAPdfnZbVESk3mPAzCeREMrTeYXUKN684isUKu4htwddziUcgRrEXk5rr"
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
