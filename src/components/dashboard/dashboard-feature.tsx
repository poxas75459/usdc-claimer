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
    "2bkDjpzVUtuhC83NiW56PoXfcahT6qJ4XqPGJydjDQZuAJsQgwrwuUBHK8bxzntcVNrmAuf87AoKtFog5nQDEr89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m421bQLv9Ja7tTPi7Ym7nLK8Hmij5LASWu4roeEjcdkoTwq7cXSbBs5BR9wdsvGio6rndrdJZwTbca9HSBz1Wo2",
  "key1": "3v4NmCvvYGtXosZ7AnFjNVQVUSr6TrLmCyDwEALqCkbAbuDntEzyp3B4gmVDMa9WyEG9RfvKQgBJiwPS17TmPufv",
  "key2": "5Wmik8TqC7DA23dZ5SVynX6SA8J9ysLJqEb1YJxgCPu2ZJKXsF2fjNCHaqUuUUrUADhN5PHGgJXNT8eCvV8Aag8T",
  "key3": "5yj4oFe2Gn7euFp9QxhoainjJYczfg3YQXmvvUg6Ww8ACA3Ty9HX1zb6GucAKrdzPGhQxiYYJszm7eoBqHgUf2UH",
  "key4": "4B1dApb7GNCqeAoY4tAfhQByozErzHjzw6617YBHkuLZvHBVnneFfjAN3bAzrsLpMRfn5bbenQXcd45ntGLybKva",
  "key5": "2AASfgzrPjnqrstwHuPvRfRAFGfzydoVvJ3uneDPgmpXoca4Tf8CtnpYJmgHrw1knNXkPc5uUDZWbsn4jzgYorEy",
  "key6": "6Lvst5XZcupHrLBUxj9sBuzTFVLixwqFBxgLXXcqAKeAeErBduHA1jePWEeKy946Hqqw9fV3g95xUty29iDZmuo",
  "key7": "aP1cuswqrBn2VZYd1vHt1ExbbQcEJ4diKkTMxgTAn5pgR3jdSssnbqV5tRqwmC5DkGDJZo9w44nS4Uv7G7HRmvo",
  "key8": "5jyVCvEDm1gwDVrRnVL4isF5JBshHbMn3FyNgSbStjNmjUrmT2db9Kpimqh9hnGkeLy43qKYB8gc4ZStjbi49RsX",
  "key9": "2u7vCH34bLaCnaDT2NTn55LXRtUc5wbRkBNy4byWjTqWnAf7zXd4crVZYzuPMrfHbdDBhusZ4h1XpFzCdSN7mpPK",
  "key10": "2Xh3btLhcUB4gre3c2868a2ZGnkqS7VC541yW5Wbb3M4p3rxhrBRrheLcfJSQok5933R9qxkkbxYpTyEFHK99Dgu",
  "key11": "4yimJqtjhjsveXsEq61ShJAL7TgLPtEyQHXCdSsruiRbH4pbew62fCa3xEH7hPz4mSXxZ7yM17NuNDZDhF1n5gx5",
  "key12": "5Ax7zEw6yran8aRteFEombJpgioQJLwms8P1WducdoBzYE4FhUhmZ81oVHXZDy2Nc6b3tL7UXbut8stujHRvU2hg",
  "key13": "3AvK6WGgHMA8uPuxKwdBB52a9chwtigd9tZ7zYDa8Gn5aPedxUmEPWVoNteStJsPMDtTWnmNVuGQufg5f8E17t7Q",
  "key14": "2tARUCMPgGgLi4VbpdBiMvfSQY8ZMrUaM3ZgJf55xXaWVa8a5qNcgTUZMH2Lj8iRn6vda3AtaCyaq62Hf11LCiJA",
  "key15": "4QoaGAs7SvYPDdybPnKgZMQPdiPza1CcFBuGMc1qkoZ4LhuQKja9MZjzXS3jkoQErHZLqjLuZE4bN1qQ2okJVgeZ",
  "key16": "GKcHqEpU5GW5TxT2Xi3XvJjHhQeDCgHq1kiyKH4hbrmjzxexnLCoimX1gvCfX1GvYn9LS6iLreY3kE7uaCexZjc",
  "key17": "5kxvhSYQ6wDJAVqXAiZPnHVzZSKFgnDDZrKGdustzEkpa6J2rEwwtf2R6byUEkDh1MJxnTYZjgc2QqjN8nDj6ZQe",
  "key18": "39FQNXgsCLaMSxqpitF1NCLLyrz7aPvrth2ZgcWMYcLW2y6qPwFCBRn9mdM1PV43Sdgqc1wey9sqX7mVpp5AGpz7",
  "key19": "2VoVrD2xcLRnitTJ4svkVfQKBVFwbTxqZurhtfn2HKXCXdyfQAQpsEAfjkxBVLVtq2xQ1oaxBKSAhdy6ChTmHC1J",
  "key20": "5BPfawVkykrAXmkVyrPDH8kNhEfG4F3ngsT6LJjLFkiwvyMZGXoUUcxSWpt7hmRnjNajMWbG6J3pcX2pit4bjaij",
  "key21": "4DvDa8MN1YewC5wydRNveJf26x9neC58A1QLtUMKrWtTKnkTbizPFgeWjJc7mVrKyUhYYMBeCDBxudcYw8A3DckR",
  "key22": "5JnsZsw6qWpt6jfvt4STLAQRNL8BCpEScQAsGEYNv7nFjSpe9Kw4QKTA3dFBiMta9hFwP5rACjPwVC2Y1VwatW1A",
  "key23": "2uz4rBF6tfDASrqQxZaXw83LKnJkLrMXgLNJFLuKWY8HFWPwN24vU8uPpWgjrD6eKatTmLHTGJeKVTAdh2654LMA",
  "key24": "3iHR7sQDi9HpcTaZt1nwhbSytAZv4HxQMrNWUcTtjkLwrJ5y1izMBRiKBPkD2wHK3oNMiaorEVTJL9UuAjGi5gfd",
  "key25": "HxVkmtjimviu6AXnSTMFw7vqBUG17XtJtscji9WJir8EMkrUfLuHWLBv3vtBELDM7m45Pb2njvCVWBNdd85NGcw",
  "key26": "4SvdbUsrWejyeqeAdbQf7UYcrbyV6kxeUMVKqVnpHT32zNJeoeDUEGeJHAZWJBbDmAweZPma8F27V6ed9xhviAYB",
  "key27": "2mhoTMkkzzi5RNSiV2PDaZgtaKCD3HyJ2xv8brqWjcPM4AeDrdhJr5Gpsv8PSG17yBLSUmHfqaRFwshof9VRpkC5",
  "key28": "5AFbTBp2X12wqXHJe8jEY4hPPWMjHxi4SR2GSgmw2EmXuwDevCM7XFvifbz9fDp7cfhVztJSt519hgRx568BSyko",
  "key29": "T4eU93g5HnYcLx72aCG4DSWK66vbYYkFU7Z7yPzeBMySihJggzdKQaS5KT2VKCnPUwAzbR4Cpgfj8YPvdbZs1ZM",
  "key30": "5T85bZpnRyoz9swFRjVzmJU1LwCqxToPF8uYhtQdkGHN6dCJcTaPk2tqbbT8sgcyDDZ1CGWLn7GVF8jogdkE35kE",
  "key31": "3seV7oQAUevAjRhhVsJFzpGCbRwJGr5NgkyxSDHpD7of3osN4HhnTWHrVMYCAH2mnaA6av6ixvPddVEvFAzBhsEG",
  "key32": "2frb39ufqdJjVSxwMrqeV2dFdpNnrdh5T7pdQCjaLCJ622R7D6Py5JsSv9ZeisgDcuDxfiZ7vyp6K3Bd7xCvf7Co",
  "key33": "mzFVzDnrXiJQQkPRw53sfVg3wBuJ1L1pRjai4CRETsJBvAk5ho36bW93Ees82GhyfEd4S3fJ5741f61s2knr9sG",
  "key34": "2XT4FctWT8EMha7djwxNTw4EhbcdbDrKTdHAPq6pXCqxbBYRBUiVWvDrohdPDTVFmrexAabmyN92evk54JYCYwev",
  "key35": "DxtLz2jk1FBUWRKL8F9XPwKVDGHH7mDnDs2XRK5VdFKHqgHk7ddayPZHBs8PMLRZeArWEpaBzeDM1iR7PDVZuA9",
  "key36": "628EVbq6TqqvsLJfYy5nxfVCxSdVP4pDDxuq2hmP6eoHWwpQucnz2LC3KeDKyD1SP7BLyPuAAp3kNLrNmjod5Yjj",
  "key37": "4PXtmbpvnzKRBf5qp4ahfJpszPnYDPvyiSABEn5qtJL6zEDPcWDpmSgQ5SDUKHMVEGNscyZ2bbvshyPuBYp2UioH",
  "key38": "F39udByyuaDeqi2CQGmz91SxVcJG1djZtriaAjxwS3Hs711uher6RdyjDYr3XpdqKPbkk4HaYx2aPWwk9VgNJGS",
  "key39": "dWYBEoQF5mJxu7UCizEgDSeK9CduRcxv4S34XKmf5xMvkiBbaSMVLe6bpSPgk8Em1MNFw4WvsKfoM8RGpewQS4s",
  "key40": "4WssrpWR5J18y55eKWPRnPL8ZaNXZK7T9AuPyWYeFXReogeTipsYW69C552ag7MrmrLq9udSFyC11S8etQYzneUP",
  "key41": "DTm495nFXzg8VMhCauJcdH3XbdT1ArtDMZ51x1FujmW4cQ1tRCeebYZuMFMQhWpWc6mLzHao4z9WzV7e9C6ZAvf",
  "key42": "3XaGPFBfwrjE64dejiYH98whsNJtPRTENvJreWkK81KzaUmpaomY8y5AYkaUE9VYeMSmsRH1zidUhkNdsLLGKCmW",
  "key43": "2PbpFBGsnwfu55iSsro1qbQNjrENL5bySJnVeZdcUixNzz5SQQDKbEwkyxjyePCodP6nhGX6fg5WUWA4cWRDz2p8",
  "key44": "4v3dk8oSn7jESi8FTwS7At6X3QPwdfSVy4gn6ypQdMLCmmXojHha2dfyVTEWrLjdU7UVqTV7pXY75Ggxt7p49CN3",
  "key45": "PD6dBSLGghNRuDuKagpokLhJX84f16ZRzEQX9En4QfWSp4rJUtqQCgpvDvYGBMdPwbYtHeiYeGoXbty3GAy5mJK",
  "key46": "4NzcU59h6UyjYzJ2MYjvxEwP3GkT3Hn46WryqmgdS2Kixx6VMHNY3k2kStqdKZEPbmYGwoMw9K4PMCcke6bHDquZ"
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
