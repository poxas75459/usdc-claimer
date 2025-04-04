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
    "2ZHhRxXWWh62GsYTgh7JWAKqveZ4DkHdBVU5bbaPeovBkj8objrrT9qqPAzvDj1gGDB1PBbs6UtBrMEbC1vnuX6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4frkwmoA6LVZdzbMW3Pe4k6oXAk9z6Rv4vyGU8sKpxoXbhN2z64iq9M9RY6zf88YPgpUm9sru41qSaWYYR4wbLCx",
  "key1": "iPV9germbLYsAT6WJ3sQaegnrWAf5YYef6vTj1duzFd5xbpqruqZmEpbd2RpRuXup8kJKRpUD5xBVncCDTZjHfE",
  "key2": "GLd7ykeKLKSBtJ4s1aFUJheEPKUv1tNHtqGe79eXCMvZQUQRtN8VjUbLduCzuPoPPan945J27MdP4HMsEjAVeue",
  "key3": "2bENFjwmNkvhFBsjs1sxsZ2ye47VicDShEKYqPAWzAz85sBM6MYf1VbhboqRAg3aPwci3wESqcEmni4k2Drzzeei",
  "key4": "4MnBVXsFymEP9bKhD32yV84qT3dfPQNjNC5gMWDdanBcs9196bMsGGDCqdZPt1NhwgWvhuoUVSew9gFjKayFTL4B",
  "key5": "4DhLoXrizXRQJfUoT4wSJCX1d66adMDYo8EUr6QerxUKxnXch95ABTrhsEN8F4qzCyBVSrk6bYaE4wNz2sV3MtaD",
  "key6": "5jDXehqGYwEYSYpM23BY9bYijphsKC2pg1njGDQ3WKPcayUDsWuEou3GZNv1MzWcjuufpgFi6JbonoUTq8EBgBUS",
  "key7": "3vNHPMTTWkjXAkcrKWHJxxZ4xqG437Uv79taqDWj7pUudw6BXivLSkJdvrDcMHQqfinUqXzMu7aD6VrqazhXLATn",
  "key8": "2YCp1eVCUckcYs9s37t7JQab4X6rhg4hssQ55mPRPPcsR4UD8mi7E2tAQ36G5sdjdBNK7Gdt1cm9qfTCbC8DJq3v",
  "key9": "463G2cA47PEr7Wv47LvkRm644C9VZMaaitBDbXwHPNibqK8WY7JoJDF7HZWyzs1tpbmFjGKcAFjYW5T2tJz7o83M",
  "key10": "3yYUYdsayjFGWfkTR6ytGCB6JGnQnnFM9P6xKEnbXGaZ8DTLbnSu34xwvwCZNKF8u8Z7mSmUGdGqGxbd6r3THBv1",
  "key11": "ugMiutZkbPr2tsi6QTSZJBWM2RwfSTkMpfe3puzbzmcirsA97ugGwqu2Ah6GLUXvsQhKRemvbspRbCzszWpQnNX",
  "key12": "32nRFJCaRHGmGZkBuwLNJJeAbmoM2sgaBojqMNw2uWzZSuBGvYTteF6fzUJnfmoPhiAg5SaVmVLnXZENXZhDQP7Y",
  "key13": "2e6xa8epF4VvnrpzZM2DnjSH8sTMLnCgET97jTSyrDyApcdJLLyy3EdoA7e4XQvjspD8RAHZm9dg6DnCzx8i7tUP",
  "key14": "25qZEHNtGw7cbG26zVbwQv8F2gKswFpEcAfZd1B2SHdGTzrNTFkjLzCzyKesBGMvdtpfZHeaxMkUPhFxV9UT7BxD",
  "key15": "MQZFgTTNL1SzMqkfg3r65xcC6diitZWBGsg1eDoPZW9niteb5ePdoihEUBYhAdUt81UguUSedzyBAqmGg1bVGZQ",
  "key16": "fztW7dEbf3sNx87yNPrDKE5HDRQptpDai59Qd2iqML2XJCnqwmGrnVg3z3jAc96ndL2WjMVToC7NSQqB7y79UEZ",
  "key17": "3w1PKyZYSTvsiqZ3GPDrCg42FawTo95NWhJRnF1qduk9k6S3SgUNm2Xu13U6aj1DarouxYaf6QrwNDKBHQ5pZq5Z",
  "key18": "3XWEskW228dihJuKoDDyihi8KapD9wRkeNUaRXB4ihchW9zxBnnwG2B3Qa89ERstyzyNszQjmSVJvAoyLL9U4KKG",
  "key19": "xAVBzcCvj9EQCzJ88RA1wxN6mFsekWdpcvRiqRbTL5ysKy52P6NBoj7VmQLmtfhw8vAPs3x2jHEEDQy9j7T6KW3",
  "key20": "5AWhRDgbdURrfmncxDxKaY14rNrrm97g7DZdSBPRP5USxBLqRpJuTvFY9M27VHUhk1of9AkpNRktBgQ6fkcThgrQ",
  "key21": "ZJMXxK72oM3ui9gvvvx2baXiNYkUmTmeV91kxVxAFF8rdRZaWtsyFdEfJWtNYy6onV98eRhMwvo7oyzGKqrqnNu",
  "key22": "59XfBBsqmVVjyVNakw4P9zUoTJMpwS8SLTST4RVgmV6gnrnFCwpPFpuiSDLzqP73LZw3GUT4YKtZ1AB7A34LKSt9",
  "key23": "5ByxGwKPkUSbJrFGmPJ9F47Wq5ZafuFL6D4ayS7zPQbF2xCJGSVAfeVSdG8Bfi6EZxgsCHHuaALqPBkpdMXejWXy",
  "key24": "32Cp4iXR323TP8sbNf2gM9muSTHaJKQ36ieiyPuHJMrdzec7c6rDyChD691KebApFCC2xUtuijP9D2ZzwrMe2DFf",
  "key25": "pzRpHZqBGtfCUzDEbptXjGbE6MigejUEXef9gHbSn2qeSVrWVmP7MTXt3coExCU8jxabVEgez8D9qBkj8Cjko83",
  "key26": "2197QDCu8FNBhH5ut1sEDCodAnhatijkg3D7TEcsU3oCzZJnqVMNDTAMKyeuBqpuai3fztYTC9xAHGrHEqVzpkA3",
  "key27": "52XwzPuj9MQfvG2XPv35CAmtyRaLSmMGNGfmDe7KGJQLYpW1qypusTUwJK2pqLSDxK2ED8upatZ2ocdfUTiSeTbq",
  "key28": "3f15jyEjE4bL5sXduu4Ef851yXkSBEC1dJ3JCyxoYzSgFtc6aHbZtZR2eUbULCXodxBvorm2bYxLCB8jtu9RnMdx",
  "key29": "aSRNmjK3b2veVMtNCvj1Jb2AmF6CRSFW9do3f3dBjb6afdYuFwd2gQdHv7phsRUq2jSUVpv1J7aWd9ST4QmWoby",
  "key30": "2EsVTNW16wHAd3LoetBeyA3rfLhY1qAW9JTTtYKekLBABS3gUyc64ZLKzWLqonfPhVvk7EW5FhvvEtJPdwxiVBZZ",
  "key31": "3jxkbAYHyANc7rCp8Ft2Q2ode2C4eWJrGdxGEq1qtPczZ8Q3eqgTbKYB18gpfbrZEDLFkxnRmGE22eAxychZYJQi",
  "key32": "3VFSiiyTLH7ExUio4e8awTyRb4Ko5ekHuFCXs4iwajiuMmq3ucJrvewcTyEzHrCZ4shPXikRvxVMgM6pVp8f9hCE",
  "key33": "3aNr4yn7JHpVdzbzwQnHcEGVTyqJbdEzFXeyDGPgG3Je6v2sriTrcask47fqtLUjQHmHCu9h4jSPrbDALKKiPwph",
  "key34": "29cWF1aB4SwAf2x71Fai2tL586Pa1JTfn7hDeX6z7cpoeANYYyuvRi2SPBNC6Mh23sEnAMzZtb3WK1vY2PruPEST",
  "key35": "5bxyogMNmdynPPUSVfJ6XqZDfhQNRGR8oahCBheboE3ZNtRQnyKBKKFCMur8dQoNis9SQfgCNGggrX3mvizNAz4X",
  "key36": "rpAgRht6hDoLtRrmDaFLpBvCifv1yag1nmVqY299HXyLTG5KTcvBojqYuAK2JyadbTiU8aiCUxG57ekDx9HugRu",
  "key37": "62yEUZqnGNY1VEjV67JewEBL68Kg5vgTDX4pbxLK9HQg8G2yW1pBZzJGhPhKHZaWvpMrN7EeLiqf24YgUw238LU7",
  "key38": "2Xc6DpodLL7233CjudAcWYWQyvjM6WBYbvfhPaG79wZLhScJaYb353buNmHSBuWifGTA4HxnaX8hRmXtBjBAUyvx",
  "key39": "4sfPE1cVrxWK2v3hHwbbUB4jF9LAS2qsa8XCFjKu5uHpc7FYpKPZnPCsYasMRVda3vEXXJbWqkMngzLFNugPthiy",
  "key40": "5KLCZpomy32e8yuZpZAz9j7kmFuovUFFY8eVee5ie2eiQh1SAiPruCDRWzHgDSdGRKoZNcbt7vkoweRHVKepyxhV"
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
