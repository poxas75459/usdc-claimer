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
    "2nNqmhXQTt3Mr6r4RG6q3KFgXqQ8Sqy2AuEmCFjpUPuQcZn21j8mXJt7VczJsd5oc6tqAwhvqWtCqadd3hQxapoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34FxRHLHnMQqKBYEZMrtrMN1ANxNrFNRfrPqLvJFtvYSNPDVTTW1DmoPjn9zFPC8x4S4PQFfY5h4cqhMhi2apRd9",
  "key1": "5ToF3K1wZ2nyXA8XjCh57Ct9NeT7uzNPeiUrxuEMm5ZWJn4Ws6qzCkYc9vVDYKxjXR43NQuRJqGVkz3TNB2JEDbx",
  "key2": "3pa3yNvHGK9eV91SsSMp9boqs1kShRKQPAh9RrL7Cu2JoZFjqRqn3CKvDbxqJMHcrCDhxLxLaHi7nGd9RTxPaFtG",
  "key3": "5y8UFdLrEAX9b517MKVBxtnnPTwBPv1G6pFuScdfpAVEjHWEURwvMRPiN9QAgGXMeqzYVSkzuQ3AXL5RUpik864j",
  "key4": "3GAEPExUkaNK9c9yyzCaDgnNezBMGbuPe4ZjU46yn3mALZJtKfwQJ4A1ZuSmvDkSGmiHAvV7arz11hpbfvnpf88M",
  "key5": "293d6rNY2kcHc4Qh7zwPzVsN7EU32PecLeSbwvFxRQsH7PFa4TDbrydk9ee63FMpKaMch8tKzKt5K4zkpJ4ffV9d",
  "key6": "sKSAAFkrpvAC9rBVyGT2RAF3hW8VGxixQdro9WHjY4iHE61nx3ZRqXot27pvAbjgFHg6uxYHi1KDnkYpSb7hypJ",
  "key7": "UsWEvynHHfqU3hwDF6gSzRbdDUTnL1DBHNxcLakVBGJ5aNjoafmy3ChMjHQg9UeB5yRRdFvCCKpXaX7Z7seGMjQ",
  "key8": "411XwjZ1LA3TjU9MsaZZbyQRJ52pEqKotnkvfcqtpK3REn768K7DjwduEeb7zbTwR6jdzo4akbXCvgnpRw5Dkdha",
  "key9": "32t9XkyME3dSanPysApjfd1A6H9hoSDuAujduZYoXqSzuBbx1iW8m8e6CYCstisTMWHAAuc3VWM2RtFj7UUQ6FPD",
  "key10": "62m1x1AyEwc4X3poYVYFuMBCPbzkE5mqEsPNzz5GoCFqzVzu9kYeU4sveNT1gDrMxAAtCBGtPDtKcHu7iXN3SRgG",
  "key11": "2hnFx4ZA1hCSvPJuwtMUQsVCZcHB6xH3d6omnMXxrttnYRPzYdfMURqFbzNktkGfw1YdF7RifpGvPE9LwhtFSxcF",
  "key12": "5UHNaL812EkAiZ7AuG9TmHYKAEHZZkY2FjnGpyNGxcpzDkJAaS8Xkq7yCXaNYBrwmFvbZW97MvfUHD5QuHz6WUBx",
  "key13": "5G6owm3HmKunBWPBBsNXypYmbFk9MRtMYBZ1UZjt6S7rsJpdBdo7Cpq2wc4QVuzj2qyUak9D3AohoKNDG6oBqLTD",
  "key14": "tDhjEtwLrqki1Guu46yaG9DAAqY3rMqCJ3G5fxqaoVonuA94W5BxGCFfGwq4SpJMnueWg6oKsj3yNXuqeBmM1RH",
  "key15": "Y2kEkSx6So3aPqtSJHL7mUnoP5VgFKmJPKXG6izzJ9HMQkKpLm7xo4QvnN2L3cwQfKRXZYMzkUT6dB98nNeTmsU",
  "key16": "415aRC8GFH85o3X8JtFmgY84vnc4Z7KRpEwT7aXWQPBcSQxDS53R1BRjftkTG8iKeiDL1YeoqSG188gmCL2hrtn1",
  "key17": "d2bVEpg9DDApFpkJQWPHAFFbrwuKUU84CK3HJ9SpcZg3c86rjmuxryYaUJ5GDHTTfCGzyzRmekVi4dsWyypMZ9A",
  "key18": "5a8TGvtLvzbEufRBeKQqQRpLvyXmeSpnCTjJ7HR4mh3p149iLHnhrryd4hH3ENLi17RNbWMjRU1i6p7LSNytMuHy",
  "key19": "5hsMecdz3mWCzGqqKSp6QR8hgUnVTKA9bJZr2Pxm9X2J1KWpkS5NXmgqXJYerSyWXWZeGH3TwNsnaJzSHrhXDjEr",
  "key20": "31qiLByAQfSBAN1mLMjhL6qLA67mTXJdzUZGQYSbA3srEFcWfhahVJHsEJVcQuz37sF2cq2kSWj1XK13dmUetZyy",
  "key21": "51bPj9cdPbG6c6BYhiv45Sd6cwDQV7FiUeF5PAdZPgKKjWdjanWtGUJDQj4G3x9kgRHdRFxEacT5N3q8WSt7eTp5",
  "key22": "41BnfLG8sc4Tx8EKnALuSukWVPzXuupKhf2F66LtrBwut6m5asVK3tzo1gJTnLUnYuq3PHJYg7RErCMjx965cwtK",
  "key23": "PUN8pRH3SamxWN5bQZ9bRSty8bw8RF6u4bHN8Cp9MFVrSx16LGqb4TS92jBX384meBUwWiD9LZ3dQsY5VX4sJgG",
  "key24": "54qz4xXfYndGSKfePm5A8MjAjK4q7zR8yg7phGcyyHDm8LSST9Hc1bNK3HDSdmEkA8QZgCdAZAR75kazcBPhdDAA",
  "key25": "2skU6yaD2QpvWgvGxkY4NoSCwqyFDCJctntnd2zt9g2iYFfLkrmqKQmLiRNbdXKU3qri8N2gMbafgnedvF8yhJTa",
  "key26": "2RwP4JXSPsQJjQb5fqJUvGqLfWgeM7uTC8mnz55xDa1im9t5AJKHJcbey8TqimfV48edVky12NgWdy3UopuntRUg",
  "key27": "5Fh7bHkgnDrkeDYbKbH3wrywcSwESGn9Mquq8L5BBSQZKF6p2g7VrybhkWvnVoo9VXsCsg1YdguF7zwcUH32N9e6",
  "key28": "2VY58xfw532qSuzB3UySHL7wGArW4CAYajD1rLJi6nmjTHjGTcicYd21BX2JhY75ipokAHiA5ocFMyziPTkNnGER",
  "key29": "9tFGBZf6uTFuBNUZLUoBmN1ivy8DRiMmKYzRriU8g95eJYQ713kS3Eog93uin7p9JrgQKBm2Q7otXTat8ZYouGd",
  "key30": "5iVpBuJLasUKbrMsdPhwuDt2v3mfL2jseauZWLest1gzmV86LWbC8J7pNvwv4ELhgTypqH3D2vWGGWUNdmUfzUTb",
  "key31": "4qR1Be7fpz6d8fRuq4EW4gVD6EbbPsUX9aBtTgQDqrvWkqkCNEzTStydXJxW9ED6fYLvp13rKLSrgHEGoKUfsuj7",
  "key32": "36nyZi5pLa2FoPa3BSTPD9PdE2siF4khTyucvjm615WPV9YpBR7KGyGfAFzGVVDC79tEwoYEDBKDoGuP4VyKYAvh",
  "key33": "3D1SJ3mHZiKeJn3tUdmHeHACrSt3B7qQvstpeXPoYmYjmmNe2m478nscY8nG9RPJBhsSurUP2R9PERbUAeDxw4CT",
  "key34": "3jcG6QSFqZuubEvtaFZ2Be56G6nwxqpsQuTANngBGHnd6VTMXHj2XyHYLFBeRJt44ou3BHF5vTDBxwedwCRUWKcw",
  "key35": "2bha4xAKpy6a5LkzeLph1gBzZTyCPTKKpwAtgu9259xKqWf9uWUVrkh7JrrsXn1iWkPgEFHgxbh6f7BJkVNogpD5",
  "key36": "67Go1J8GdGS86AgBBkGLcQ6QWHy9Z83f3g4ApyhJatpJJtJzjRMKjU2fKQRu9Q1dqR4xnFhyX4GXkbJji7R51unt",
  "key37": "57eXtZNENNo15ZVVESLfJK1hqc8owRWLj1snozC574Q3dDVtgnTXPGXoKtGRRd5mVyb6CMxSHqJWKSnkouXymEZs",
  "key38": "XokKD21NKvcUkQKHfQ22L4bY5u82Fj951NDdP8AFjG85yF9i5uXEBz4ef1ZLkUE3ZxfnHk5CFGTF1jVKaof9U32",
  "key39": "3UWP97thTREhbX5cQcxxudkULHnPNqizstXVEUsDFWTrv5hirKLjNxLRMV6EUZ9UXkLdhV98U3VdBnfcEGcbHgHb",
  "key40": "42X29GvnE52CV1GfoCbHocJhM5PwRyjAwpcaFrWiYmW4UxAtC4DnwfqMXecSMWFrbXxFSx85feLKJphThNUms1Ya",
  "key41": "2H4ZBNT1tfG8z97afydu6hMYB7b5GvnV56qBsmPY4dnffktWno1ftXfycUEerWktDWTH8DAAUuho2zGP6TgazPt3",
  "key42": "3zsZFx7v6BxTEJn68q5yGr7R7mYqdXf8tABuVDkg7j9qx86epirfxLS7kAAjFBahZxMKhQWfMiuHvCZKFjYBMZ9S",
  "key43": "3zHyHfhr32GmraXMBDaDSbqDTRAXvKvw5ZUpHUjTJo6QVHFrzdj5HJyxz9ouwTwUFy8o5G3W89NfbYt5GuQEEdNY",
  "key44": "4PD1X5DMFhxU6U3W8qHcNEpvNuWU9D3pVpp5wYMyiYJ655DShGgGigXbRjavRW64TjHiRXcpm9EtTnyFxtyBUdWb",
  "key45": "3VUKBks1v1aE8meS1v3o4fvUBcL9ToyLXW1qSAVVJcgJCTe5mshUGXrK62edPN5BybwVPptP9ngqZUoxNQiM4SeL",
  "key46": "2d7mPNwciznWy5WtfDFFY8eK2w9cMCbLnhggUWu7HExEM1kc1P8fbVJU8aMaRBjPtoksXMNjNmhd12KyvDrvetKe"
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
