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
    "5AUZb7M1tFUZrQEMVNej37wmhefHeVfyfwgT2DZUvFS1P7dntwpU7BeXbAZ3ur7XLLDnnTLy5BWDzd48uCN2qT1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MUMnQV7vgYvQXvSqGx8DqMeGr1nbtN3v5TAy8sucb4beLQBLC8hAsKcTeFRXuSzfp3tFumHTQ2PFXBLmcuSwar5",
  "key1": "2Jx8HPVvHfh8kKDjBXDbLkUDtXrNrXqkeDR4Lt5DiHfEacBBCLUm2GGGtQbVW2mZH5FTwqri4cSxxVH66uJs7Noj",
  "key2": "z6rKwzRTnZXmFbdDB95NiHvg9VK4VkUzFZQZYU2Z8yCgkKF7p2hrSd5ZYhpGzwcb9EQoCLdiDbyGPwUuNJZcU9i",
  "key3": "5wRFcHuPf8xPjbstTtUj2crbEfY4vxEC65uU7XMYRsLWFHfTQtQLLkc1NLe9Z9jAc5xByzXKa9XMYKrm5Jbwpu1B",
  "key4": "4C4oEBbTtYn97ifcfSVNBjd7c29j1psmx4nYJfK6GUv8DT6NzT2ztjzTFpjmz6MNA7a3iZTWgfwhosgp6LrJ5xbX",
  "key5": "3kMfd6357MNyULUtwZxfPLRitUSpjAkbQmTFy5FQbJetF3T6zcQe6MPAmSat1pgrndRnuipiTCXcScCePMYyzQ7i",
  "key6": "48b7QD7sEfScoG5167cJ8dTbs8TakDP69h9Y1p1KDpqvdCYumUshKuAr1skemRuJTbN9dhACaGJScfh9wGjGn8nC",
  "key7": "5LTiS12Cm5VMRhRSgNqnavDcx9eFTDKQxajYJJbscRZhkAhY3WLX4yKJQefNBKyS7RiJzwhBk7fv7f3DUh85kVSa",
  "key8": "5kkDeiZvTGvwUerPEUPFwwnooFXh3EPDkY3EY8Wov2U5GyHJGKTHxGF3ps8zWj9i312TEh7357At6JHN4b6yVFMF",
  "key9": "4Yh8JcPzVpALhXoTbV5pHGFF1fTxHSxiyuH8LBfS6D4MPoBorUYPT8DCLQDSRyh9gYFwFLng1WCyhBAS7oqfwkFs",
  "key10": "62HCXV7HfzyMDECmPQt4VvHtbQn4QUHTwyZsYybctkEwkAqRS9XcCfnFQDnfwwmrG6BEbLwoJnaa3fNSc3XjZhYG",
  "key11": "24esmbiTbGduDcq6M5TonZGCpw2SR4tEtPUDXENKRRiUXozx1YpxfWM7uef1WDR5seL9Np6A7ToAFWY6DL38AaiH",
  "key12": "4R16oSsUytTLSQV6c7MBnBRepf6iJXu46Gt1d9DREprPcoJgpmRY63p1XtAGRJVT1bDAqhEPpHR2VDaegCsJhaxw",
  "key13": "GoZNSMWKTJoxHsRGnX5Lc8e6E9ag5R3wYSibd97nVH1R3wdomPA1ccprSorkbwUgxyuA3y9BC4viXktS5zTkjcw",
  "key14": "3iqoQU1AB7CATAKwc1Pqb4cce5SGWrpgeAAnFKqM2Lfx6FZ6JPXUmCKCNWEctuHY6XvEox16evo2C1TSvnm4UwPi",
  "key15": "4RvazSjtENsFVS6jK8q6vSEWhTcSyLPS1iw398XYTNDsVVmRSsuoc3UyBYFPbyw2h7iY92J8LuVSGsKER1ZYt4Q4",
  "key16": "3fnQ3urazRY4J4GJPnK7yRX7QUZEeC2XaZEmf59bL9jeDyfwmMYKPJk5ReA43PmFpF87B5hT4gS11pjBdv9fTbPQ",
  "key17": "3REVTaQay9XtLPBQqx7LC96Quif2EE8SXUSEsqsEaEGncBQ8FAbKEEBGydHcRPGLxXgXE6cVfYUDP767CCtAttQD",
  "key18": "2UV1pyFzft7hVa14mzCSJ1aWoBJJZSK8L5YHED5K1iSfitxwhcN2ctSKdTioijd9yujSCCtqzRXuXE9HkdwiMa3N",
  "key19": "3n8HnTEebGBNcu2toL4c3Lzp6YH8yMGfE44RnnRhGVDVLN737j58btYFP7A2ZVSfLvZfvfVfdAEjNd8jU77Zvoih",
  "key20": "5XzujpeZr4Asnk16wQFEghN7WxVhbkrDj8EYPApUATsoon5qGTekqHctT8XeN9heASTurjJisEQQBPGUDH6gMWKG",
  "key21": "62E9ndMzHSeLfXf7pnmVX9Pfotk8fxFMucfguvxDXSKibZx3hCS5iEp3W7JpGDfKF4kwakcSMwCXKeHciJBB4hW1",
  "key22": "2W7oSEUZkTJn6bfj1LKFTZujekVyZVMzQgZTEWaRTMZ9F9pctTaM4XBdhz8MURhynKyn9EP5Uo6jVaTjJdHkrQk7",
  "key23": "vd3BZoFKnKhZdzzXqSMpLuFZMiSqFL3AN4tjg2oWQG5Ctm8bo9wogUpwN8WHCTPhjTKmhf9weyg6XdLMJWzeoS9",
  "key24": "Jb6LgihrjtyWZkHwnqjGfTxysodLdSUCkM7TvV237tReU1KKv1KhX3yp73LGb8krVy14Rudv6XXtNbnUEzv7cj6",
  "key25": "3vYUkJ1eqf2dAhvxH4z53X8cB3bhexTv5aqxgoTW7mdNevKVg7Ca69aihk7ahQ9PXDR44BdDGu8g3z4vX61ibDsj",
  "key26": "2XaBqzX4J4jpXxykbh1iBA13Tvm8pAGDiNW5WmiRFUcLXotoHgDXbd6wabWYJgAb5ozjfn6ae9GmPtxJ6VCY3a7i",
  "key27": "3yWXYxPtxiAR6Bi3c92M4XGktA9JArkEq7rEqXdV3f9Kp5meXBfyK86u1AUXqvHtj9VDvmPrfxUeF4A4o6fWvPAS",
  "key28": "2mVCftcN9vGnYJoz1E1jGexS5xC1mn8rGTaCbfkoudFKWDQyf6uaoDY2e8Wg6Gp9SYjeYdTCsJdp4WoZo6teXMGM",
  "key29": "61zkEqnGQm4KuXYoEUqU4UAsLRyfy1uNmt2rGHkyTMjXJqQ7cTqUSUahSvrUWnQqs3mXjyQ4sBz5ZuEKgcs9eCTp",
  "key30": "5WTf6x6tK4EiQ8o1xeQZTj28g1qw3GcMNHmt21gDxAiY9R3vPM59wHFpEd9p3UqLGxtVPVULxZ488ekoGoCHZPCi",
  "key31": "ByE5wftKveZ7Enm3aC5BoUqH34bNCTmBHuKY5Vmb5cC8b9obWAYVtP68H5SBxd1gnv26krJo9yWvdiyPioipwo6",
  "key32": "26fPxqkZbhX4JabPou5BggVASYAvnCLM4BCsDpzG3RVqDy2unEVV3hN19oYe5yJ6RRRJbBpFf76iXh5bnmv918tc",
  "key33": "4acUpz3NTKYx3UHnnjeSdHc6uePqosZYnZ2oUhX636KBtYPhTr3h1Rky4FYtfhH44M8Mf9vxzqxxFPyqrrKXqWza",
  "key34": "4zaHzJn2vuFVgbxnU6TFoxdT2EEA8hsWvXnkBJYb5fgW6No4zuPbnTxkChCEj4axeDemx1ZSjoRVdvtPvtBZX82N",
  "key35": "2MnSWXXyXisFWXQJkTSPNDS4dN59aadVvmens7L8Wgb2NE1abY9M8RQRpyckMCdMwPwU32M5H7Ufft5WYQhdWMmV",
  "key36": "5wQmE5ihLSYew71yUuXzNXWyMjkbwQq6Nit8vEmAB2Zx6M1YCFZauEvp2JyTo6LqwTuntLocnh43MTxKAcLWm8HP",
  "key37": "eT84Hw3ztNsvWhxdDSuzvqaSu5nfFQBSZ8K1A8Vjsfkxp3YtMmbBxHLwGV1CknUiXcGssnhjHBDXp8Piajw2ymg",
  "key38": "4ozENJg6ThifZsPyDMx4NA7wYkRMAfKKarvKxt7SRXJL1Hg2Tba5j6eray2GNcD89HKUq3UiuXkDjcd3nGWnBWzC",
  "key39": "3Wb3SuYC7EL7omiVTAsad7VqN4oAwieuUU7D5LDsFNHtx8co6bQ19vDGTAAAKNKCFMU7jb6w6yBxuUPdzVQkdXr6",
  "key40": "2h5UMLpVoPLBvUWSATcB5sdEMzUFNqRrRhtmrf4PfMBxkxuFLFo2RKFMfM1Eob9EJmywtDEKtxpWPtR3gknZeUN7",
  "key41": "64wgR5njqkpjKdfnwot8H76GBrqtaVf85siCpWjaKSvyc5vYGMTJ8SqBeQEp1SWxx8XTcN1Dyj7QpJEvryeBQAEQ",
  "key42": "5d1SwqSYQgGibKzysXQLWzYGhfT8w4zbmrDeSqkecJ692fENHYQ2TWo16QnjZADzDjsAGtdyzrBTwB4m1NqBySHq",
  "key43": "xB1q4WNmAJzkCK6cRrJjpqCX5teKLHkBajCzhxxdusaB3mP5v5XotDq7jAG2DiCXcmR3NVWbjZpV5jw818bu5TF",
  "key44": "53uhwLxhWfqTVSAwGAk9k1mvJ97Gc5QSHrYXspeVQrWvdMBH5fqP8R31urk6GdwhgAsMjLzkRjLuuFMSsN38oqyV",
  "key45": "3bZoyB3QeTbF8UcpWLVmBffKtLdNCDMMEYBUnFdhXWTc4K1161GPKmjZD8f8KnTMypqWsRH6M8dYMMNyRtek42oA",
  "key46": "4wN8oPmG8LWv8UZ1ZN2hLH4T5XCLypiB1ouZm3VxbY2mFUwYZNnZySZRUXcNC3CJ9qH4iBGwZnLLN9veZkCcADsi"
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
