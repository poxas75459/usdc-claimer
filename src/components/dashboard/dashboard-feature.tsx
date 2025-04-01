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
    "5m98WdDdyduPJUX7iiaeX8HKfERfRtirTiZH2CTKr5JB7fN3BtWVfCab5UNmhHiKdvGs5PqriGNc2yDXMwfx4uVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cyziSbEQha2Ar4Sss8tr53Bua5ki3qoesRpbEmMMvxHwz3FZPZua6STWqEqeBHKSTzMShYquMAKs47fVMgqsgMF",
  "key1": "2mqEz5kjaXbyVGt8UaCnxWPnrYx1HLfhoiSU6EGMuLLSPydZECnRX2vRN6e1b7Kis1cYwGmVC6UcmYhMoojNFMgn",
  "key2": "2m8RxKZ9aK8YrTHfiqcEABBenzBewknUpGDvJvvMyBUgts5kKxq2Nxo4P1AHcodxkKi8Xa99WEQTfswDC4JtgW2k",
  "key3": "mFweKuBNDapK5S1yR8bhKz45HhH4oNib6ubPXT8i21UXPKWJgi8wZboJDGM4Bw6NCHagb5hMTM3mju6AkEcPGKh",
  "key4": "5dDT8MnN4HLz6xAoQWvF5r8QYwAP2nfogeuUimbzYBSHYCRT8bgbLMLaVmGoyoAU83MDPVwtkMBLi2EKQntL3ifz",
  "key5": "3u2ccyo83jxZKaPgj9TfW8D5fefFgwrXHrMmxddPRNrEg3u73vY8fuTPyT3RHntcNHiJi9GsR1CxFEKHJZcyjLJ3",
  "key6": "23PJRaBz67xLvpohRzGaTSyuX6Jst3WT5jhLPxYM6Z9aMBuZx3WXamSnQeTaEKKjHjdgAjHxTcgiQ8mqmY9EBW9P",
  "key7": "4iydazJgN87KgFHcjJyscBWbBRe18iczx4TkWG3ikumqbwSy7BYTKP6jX8BKiF2Kd3yn1TGskEVjPzCXTRKZGgTN",
  "key8": "3LCfXJFvvydr86Rb2LMx2EkqtJ5bEU8pQJCQypFrbupnF9Std6Rqpgvtn7ce8KB5VgCKSNyGDmpLxaLj3hj9C9LC",
  "key9": "4bbz4avW1WbFt3nd599Yku7LRrebCjDetfPPmdT9XyqSQc5AjBEPRjh8XEcJVqYTY1HXaetNu3RPseuZcgaTxRdL",
  "key10": "51XLswNWUSsCYXTghviegKMYaCgmsjvWfNsMYy7EqoCvrezxGmo7QpMm2CvxQMomg1BXsWvbWajgR7Ux8B3KkPGE",
  "key11": "2SnTNq5wPdHVkmDzokJJwki3BpT2WYsgJNjX4aqwMYiRByph7DJ4vjwY3m7Mzczypob3WUX13dth11kC5DxQZvBq",
  "key12": "2mUS7kyQ3EPGo6cgy37rAbXSsNUixTyjzZTWtQn746UTiCsa9RBEVGbX7qirx1dFxrYsUSs7tJidEU3iyVAJxGNt",
  "key13": "55nf6eAMsY16HV7SYHqpK4n16GfGyYPj7rssBa8VK8fACAfh9EDW1jm5MstXFWqUqXTGnCxe6fFXzxCGQX6W65dv",
  "key14": "3LcxnwmW5yaLttAK1A5MNgjBTtitotrPQ9hpZX1QpZyx2DPCaw9BghAMp6La4tVy6c1P65jM4hHNHpLRbDwS9UxK",
  "key15": "Te7An8b7YejkTRDnwKdsZ5oHJXf4Xnf5ZWNa5papRJJHEpumCfNr7AmvGMXSPzdXADyc8HLnevyVD1cQPiyb8CV",
  "key16": "3jhjuxk1cPYjgYYksVyMCFuEVARKD8FBTTHb6rMu3Vm2CKf8eSGZdEGP7ENU6hNx6GAbVWWUdTqhsKuiExTz6sRU",
  "key17": "4qEeDFtefLZ3uv3DMygryTw45Ko2LvQMp9Denqrz7bmx3qA1ki6UACWH3KcJDvcVogKkpQotUXQcCWeGywxhKYvY",
  "key18": "3tGnWtoNP5cseoZ8qLe4X41juGBMrYvF7HSb1kgpLG6vN6dJjpTvqRLU6fhtLMf4kV3qXhe31c25mi6K3WPfjxD7",
  "key19": "JUhMieM5uCnuhAkxiEEHUaTTWS79ohiUJW693UASJVs9J9fjPavmGn2S2uw4itSyh4CtpxLC84rKRzYkTLsBKzq",
  "key20": "2nGY2Rhddztdhe5Az1udG2euywKzazay53Z2kfUhqDwxnytQwhPEKiseajiJSsseqU4FSiPXpe3ekzXxX2NcdApd",
  "key21": "38ThQdiMPLxfxZUDiwAkFSdJsTChZ91KVX6GhSaL6zMRag8mUPE1RxRign8cBcyBnZxYNPgccjrGMWimZVW6rGrT",
  "key22": "M6eG2Psrkj4qNnkkvDJLqKUC1ASYRgH4DSdB4LvztuuytQumA7JthvJpsAfFfFpkfuRrt6cCgytwDQt9yqvoPRS",
  "key23": "3GbkQEVAfyLhCtRswmAN6HzEJs4N1v5BUjuMNtzTaLpwDADPfqnnVaghxAorXU9agwKaSRSsWd8abo9dTumyuvZB",
  "key24": "36EGfr7yFY2EZD1PwXiduuKbkVEEdgZRCxi23Xw3o7iNXh27QfA6WqsJSZk1qVU1AN3PSZ3y83Xmr7pt3G3TTd63",
  "key25": "gEQF5FWJmcz7cVLfcB5xi1FhkGPyCvYBXhJnj3GiHUA4313TLvnqBkG2HVGiCDQKqW1nRZqRP8t1WsXvreabLJG",
  "key26": "4MnwqACQeUTN1nKVBtynokSet811ANRW24Vcc2W7cBq1e7ru357icrnvcpMLLmbekKRv3Sx21LdpUb56FBF5fYq6",
  "key27": "5VDUHvtc6hckaJocVdXgkTjpRpUxEDSeKvemBdsPQeFyBqrQxSgPSEVsrSD8t8JwcrBZsmmoe3YWr4E76VeuBuHv",
  "key28": "3pcHLWj5uZ8WQNHbsHxhYKSggYGBeFjtdyYWsaZ8os5FYBUHFBzTtsjn9hxBWT7P6HoNmbCerCCk2odvRXHAzSK3",
  "key29": "C1A5ybgg7FdjbDv63wfxFdvsUKR9iHanD93FXBWhjXtdS2J6pHP6FemyndCWA1ULRUT3KvD99gWAqWMg6R4D3Ug",
  "key30": "5hjQuxLVbCvNBJfBzk2VQsS8tdDanUbdWGyHSUoprFpNkkscdGbd74oTL8ZxBv7Tddjmy9vBkWhm7LPSWUdRZKDE",
  "key31": "Bf2NjhTCn1AxFHffkwVGJZ8Mrj9FMpsZfWVQUatuHvZjNuANCE2HztFNJsNx819sQQhfnaxfM5JZMMb8aLqGxE4",
  "key32": "2C8AP8Zc5sezsbad4Bs5DKDgg4Snxt61R2njSpCEwaickwCHuBsv4r7qzivBoFizv54mECVDGUdSib37QQJyDzCc",
  "key33": "5sSA6N1KHTxWMSHVKhiCxurnahX5eJtnSpoC9hV9qRKu9NdYQD8iAuc44G1fSzvoPWULYVJg8nugGQvwBjZUs3Yh",
  "key34": "3vyFJZtBQFdDE2r8oUnn1A5jLodN5yJJSj8izHasRqJ5ExDgPeGz4AYRQc2Gfbfcwea6EVijvjsrQkehQs8GtSBo",
  "key35": "EbgfceerQf9AN6oL8fpLQeb8LvfHrNmJJbGGSSEJYswTRpHWpWrCMH5yx6P8CoCFTrMUvcbioj5vatZvjrakg1W",
  "key36": "4agchN3oFNFC1zFzLUYM3baV6G4fKwwacBfSCENb9fVosY7SpFiCdH6Eox6VCHjALyPpH9vfWLVjgHrWz6WjwWQV",
  "key37": "2Sdz74VDV8TWnePHg6Mnq4pbT4dERhakWciPsidhRxcGyBCD1tyDSwbvMaXWmerzypbW9PMAamhEBCxvkCW7T6kq",
  "key38": "Z4oZDzQhSmJtHLtwQwovt2WetQHKc1MuL1kkiQs5G2ECEC3h2d3y5wEhatD4xngNMsptpCjzaGHAjzWZYnHvGjP",
  "key39": "AVumguCNenyjERS7jr97fkh6EYK2MUZ212Fc9SFtuT2hLegQGNbwYDf5zGpqxvBMFED7XhNJZgVgmRDHnupEXDY",
  "key40": "3rcc7kc7n2cY4rH5j1cK94Q9KWatCm8UdFfZEpe54Ya54g6t5c9DwNnPzRdgWjjgneJTaGU2nCwGjEbEgtS1EnmJ",
  "key41": "VkSDiKbSeFZtR1Z5G1A521LLy1EUcW5XSG1UWoNLtSBNUHXNMwq8HrKoMWt7NFcjky1Hn1ErakEkcAvYgKt3xGp",
  "key42": "5H5qqyBZ7shTu6SMeBVrnASQxmAnuznWirSFNaLhcma946w9LFPDfqmmrn9q2tnYY4Yoh3ZRwbV7FEg1GnNSSdmF",
  "key43": "65YFBmUMJ5FdYk28PXanundphRxbuoYuBgyyawPCAQf18fLkG4vHs8iAgQuN7HyQaQTqDo4EXmnRG82yejZtVvZ4",
  "key44": "5kj78MVUhYKsn9omWV58M3ZNoYv7WdreevrKc7fqFprGA6pAnW4RdtDcg194DVLJyrATi5TPCvLBqjX8zp2s7RNh",
  "key45": "2wDBPPK8MGNujnz9smt2wFwwAzyL58nQLy2iuVCuNQf7TNGULqbGLiDmGEaLmen9uSnJ31bP48mMTRaKD8HGoa9N",
  "key46": "5N71d1cJ1xcCfyjDXeHRfo8FQoHDHe3GuK31B5puKbPGzx4jea9Ygg4sf2k38pGVNa3gu67z5GTy4A6zyXaCdtUC"
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
