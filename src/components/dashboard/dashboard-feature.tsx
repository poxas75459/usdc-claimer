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
    "58eEx1j6DAFsKQKWpoieFS7H9xQQebU89qBNMXJQwbG7wK9rWwscGisUA9JmLdYowMFEGYRdWZEzCdmddfoC8mwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x1EzKygNvBR7BJ2pZin5v41R17ikyB9iXTGvp8VLAM8XG8T13PjQUBUXnmCBhxxDVG9N73yvUa5ds4EQY22AZiv",
  "key1": "3JW5LrMP2wgrikdAkNKDVNQfeum9ppQwHQgDGKiY1DPV12qvqYEWLB2ewhsJEEXpKj7W2wKcg8JBTvnvW3qGCrT2",
  "key2": "3ExfNULmxEXQuv9H3VmjyinRdBeFwjd6CmpmV3gDAurAQq1Mip9JkMbbrNFmWBaVusjWpUkK7AKk8JmC8mricbSa",
  "key3": "5XwSDL7xXQJK4wCTNoZxWeENKWr1Egg5z2FKJk6twPBquyCC4S6dwbtfZNVzzKgNryDk13dAGgegmkfi2soM5m1i",
  "key4": "ga4ySz32qy3H139VSBqyzhECFGEx1sEtaSrCHyuTfku357eMjHGtn7QmLxx1asG3shEvQVTP4SYhGSZhCanEUoz",
  "key5": "vE52g3JVQQLihvfiJyXpxdeJYeTMMYsjTTHFhboHh6i9hfyxrChwpCWjrYMDPFvddRSF6QKW38WSSiQe5wRkvDA",
  "key6": "16UHh3yTNfiAzHUgPi16eY8hiKrr8K5eRaiwaojpyjKJ9nTwppsBnTWvKwdjYLKukektE56WREPXRbetm4v6Zy8",
  "key7": "5sjeAgDHL9G7uPUavpmq3VRwNfrq8ohywF4MC5mkfFndF7JfpUAwmVk683ukVup2n46CLitNNh1ZdUVEH3EAHoRc",
  "key8": "4VLVsBqm5yah3YFmj1fYiEKdsEkPAZd3vo1Uj4yqWPH2XNHbghNTjj2iXkHkCjzjruBcRu1suNyoNQamsMvUVX89",
  "key9": "63shaMChfn5hfskvi7UyGbMHBjMDiYFRhPbzMz1waV9BZEq13WWkMDaTrTb8Tai6RRBpKtNt82krWiBsoR7CRDi8",
  "key10": "3iEwY1eftMnXaZw7XqoyiDop69KSaUwaub4ShcDKMF443QxgWGPG8B9LSqgVj873UaZzRJd72hAS7Qygrtq457xV",
  "key11": "nLkt4SzPQwtmBkdD3a6e9KJwRW6hMkZjbqc9UkuJmXTgb6n6rnzZD3LSiQrsoyrHdpTfqS8eVej7pbtRFmMVTrJ",
  "key12": "dgbtfBrieqdSGEG2iDLE6zo8EcCyKtBbpXvauN9Ae9UXyXLPLvqiP1PddXxm3hLpqm6ifMXY4Mp3gdxi23VnkQQ",
  "key13": "62iSEcyGFmq3XvQGuWJiiqJsaj4vNKYu4sydRpANbrxYwsxZ4hhB2pTXg1U4AtQiJThi9zkTDsY8SMbTbwGtw4dS",
  "key14": "3PkrXTzDcdvW6XAepMmyYoiQfDuesMkumYTZodZyZrbK2dYP2yFahRgxy7s6BqGTgbDPKK2y2DMyqPf8MkTgWG3y",
  "key15": "2RhbAxh1mFzYxd8m6tHtXTDdEoQQJpJiDFysnvi5ZtMCcUizFYPLPu2n5LYAhAfZA7fyJjLfr6jDBVtpxZ6HoMCN",
  "key16": "WruZLBihMqvtHWdLd445AsMwPrCXxocGYN8q1ndiwZaw32wzV9KPLeypAVLzUDa2rKX4aeFsPRevieyYYoUjBdS",
  "key17": "2rKwHymxDvrU7QMAz35NjjkUiwjsRN6a9HtvMSeusiuk1TaLTdd4P7z4eQeyRuTop2FoWMg1ecpQjyWQqi52MMRC",
  "key18": "2bcvXbMyxRR2Gy6apt6uHGTGZwnUGpLYSYLzAT6EnQeEDU3w88peviQWGJtLRhjCWbVPK6qoFYCaBaPsEiBg6cLo",
  "key19": "27UWKTyyMuTfQXvVJU2AitJZ3A1rxXdJkHUjxTNThk4m3qYAwqc6TfKBCTkGtnUPNfjcTjVwenpKLkNeuuqAFEmf",
  "key20": "2v98jrFJxWHVicakLgyyvzRhDB5mrYVe5Ay59N7MhPET5C2BVCic8HTz8XHPjg2qDBX9MHjZftJJ62QxPGk8nL57",
  "key21": "9m8jD7UYwoXrNAK489tkdahCYQqSGzi6XXTwewrqsgF2RYkoxDvT8Zo6vwS4UPKxfLRQeU3Agj8XNHcjwUyVpea",
  "key22": "2SWdLwy6Kba7Y3yBdWnyi5qXBdo4sNg4njtf4oLvSAd6jeJsn1okhduprBSJXCZb2cnLiAHsfev6vTS5xQshiRJB",
  "key23": "2EFU5qv1RKLQ9aqC1NUB3awywn6V7QDtXRGXZTWVo5gWCkmHPJ3ZKwXnxPwoMmEY9FE7AGigTpmhKCrpZ1Zs3wNX",
  "key24": "35nrshqyKaP7oFrdMNb5S1RzAmYQ3FEdmYUomfUWkLQ8xX91ZNskdSnnYDHbaDcgUXaG3DiDCghvEtZ1zA7WgcgF",
  "key25": "34dXvhYnDATTTeN2yow6GaJPmVxVDVzygbGWkgHVTPYw9r7uNGjrjtXmqxNgfbWY1M14RpVtQqh5uvMSewU8zujf",
  "key26": "57JK7JX71YcuYHVAXx1t8hxKYn1SuaG1mgWUzrmoHXvKbxcspgaK3TMc9gpbd5M7LrsgyLqwtRfp6TNiq78gxEGz",
  "key27": "Wpcv8ugWGQKicyzs11rGZghEKRW1Ev672M7yenCPimi9mm9xGg1kyqy3GyT2oeAgKWhqPrE7qqCyjRTwGamb5Ut",
  "key28": "McBXExQT1WtCNuBwjVZY2xZwhhqRiuZfrBReSmmKmC3ddqhQJJWpyrWfHXAJ67ogXRW8bXnDaBJxDkP2XHEDzoS",
  "key29": "3k7EB9BQqbm6Uk8UaJiYunmAYvz8Cu1pYNZDJXJfDsEUyb8pUqDPsvcp5aVquaThBSdKRrppdEHJEBFd3XRoeuxg",
  "key30": "4KCvpFbxMnQmyboxcjk8tyZ7WhwDBhYiMd7B6ivahJESJFwmeAxtshxHmUUJUQdzG35qrAk2CZepYepjsS4qYPHS",
  "key31": "24dsqM84cwERxyXYveg2vvx3pKPo7H8QvAZbZdqjd8TJZ8wCVerbcVxvQKCvo3aHeapJF2AqLR1EAm612fcYW7L6",
  "key32": "53xF82urYUMJ65JZrDAh7ucrMTfo8XDpLchNY9eeoybhMPutxvcAbz6nqUvGkwMDJFufEie6aj4f662v6LbbByoP",
  "key33": "2FGvcz8FMj8KcXLf5L2MaKFPiARVVo1BuMni3d2uArCbVVqqAaCJ6yedCCG9gqckbtMc5s4M2XPEMNELNz5jpXoq",
  "key34": "ChakvrkXJ4oExNYKa5tt4uPdr88g97H8MaVReuD6UcMSGjvYBeP3NZU82YNStbZMQn4BDwTWrVz38JPqNjnTLQc",
  "key35": "43J7N1PSHpNd63U3nvdTeJkxjZe3x1BJcro7Zfh73a53QrZk5nKgRZEJ4BHgVB3gvRMorwr3SqbxCcdniRYhk5WN",
  "key36": "3kK9tsJ7BGF4JUofyqJmUdm3dLUvGyh15f9m7RGELNbBpVabYG7XD89wyFm1iFcygDQWP1Xg3RDhZyYa9RQfp1rf",
  "key37": "3mGGeub1PeUf1CGFNFDEF9TBcBiZxDioWsHGCpNvohHjS7VbcF1zk4ugArZ89PqJM1zMqpY9i9735MKNs7tSLDLC",
  "key38": "5hdNQrcmYGawWaZbaNqXTMMEhgMSSiQzFhQGWRM6DE7TNfPHu1zStUJVSccZEiS4JXmTZqEN4MUpGtiSa7ZdEnD1",
  "key39": "4uaho7yVYKzpnPFiBTMPf6WctVGVustHeLzzisSzF9ey1srWHoUsQ5u3b41CLHMwe2T3JqvH8P21ujDU4mhR1xs2",
  "key40": "2CMB236k7AXCFoLz6KmfCXSfQWY4u8Zd6Uu1p7QBL5daDoepXP1Nj8NWWjJYakPjV2KcynMFnJyQ1HVYzEVgrav3",
  "key41": "4DmQk1G3847QDR1XzvRDBXM8Bg6HQ1BBGZqMvF2fhjyyEFUHLmigYFxjUNZJvxsNBDBXUjQU7mDpuxRFstfkVfXN"
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
