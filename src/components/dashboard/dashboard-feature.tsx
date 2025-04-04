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
    "2NxMMovcD6Kconm4hNfBjuW5Ji7RLdSCwyRXAAn4Rd57rkR8ETrP2rmNEHfxQnwhirWFEZZ8FXUD7aByMQNJAm9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47pUCJkPS4eJ8g1Jjkjy6xKzkXrHyA1pwEksDeSzrF4CD8ochN8BzwXLF8XnsZnkFU97THrvJvGF1WFUgQihvHG1",
  "key1": "5NrVQwdnZhSz4Fj5LbtWicd8cGLdC5fvKWpjDuDobpophWWGahXTZBKhmfDyKxbhPMShtvBeGCJactG8rAUSfCJa",
  "key2": "5kmWQgBfUBSLbqmpEXghZodmbMJXABN2YZRy7oUUGCsFE1uKvtPoNJDuN7GsmVCdXFH55gG3TZDnxdRZQVZvmC3L",
  "key3": "2iA9mSzGG38cgSFDBWEE359b47hJWnVa6BrH9PDWADmPWuzKDXTiTTWhyaiEBzMibrtNMr9xuQsZdAW5eY2vGnx6",
  "key4": "29PdXsthLMemp4MmT8FwGT8GnDf7Vop4z5z92rBSxa16n2Nto3uybYEJ17LVM9P1uQfEka2CSJP5qLw7FLCca3JZ",
  "key5": "S8J7GszYeyJStH8kdtsRcNiXE632Y6c1yuCR5VF4cYrLpdthWfeZmYWF9q3hVExT2TuMVF1mSHzdL4fECEeAoDW",
  "key6": "4CTNY1r3XAgD5NNuBdqgn113LEtf65CdWRtfA46hJXbxCCVF6LvGJoCo5K4ZCQaW434VJ27AVFHVs3GCpiRN5C93",
  "key7": "4dzj2d9wE1JvwaXh7J1bQWvgMA4kBgPhesxxENJW3mLsZbNZVvDhfKnNEZoRbEfo28cmrDGq4s5HL4E84rzuTBy2",
  "key8": "2kxjAQoKBdf5NrMyaLiH7ZiGBRQN35BkMDS6Twm7uPeHbzAvSQptWT4GSFZeTFw2nwd2ZjjN7V5NqaitUeq5Hsse",
  "key9": "v1Qphr7pYcewic5BNE1Ht84QmmZG6t9iB96kciiP853V3B1jycf5mCsL656Wxswf4SnqfFZC4g8ZNdP8vaHLyss",
  "key10": "5fdyNMZDzrGRPYyKqYuhaAbeftk9BDCdDyfynzreLH5BnrtNEXeeUsC396iVnhJnB23XwEv2mpHb6hMpN34ETHcz",
  "key11": "rxRQaan9RTVnDuB836otZoAwxJGFKcTYTronHSka8Rt1rfZyXbTnrAk3BjsrYnF4BWoMqTEMbWbuKyKusUKpp65",
  "key12": "3MMAyJtLtW6tCxSJtxktErPYM18c7Z3CqXaNey8q3zudaNEdYuyZB3eSiFFAmw9Ta3YMaBQjQqyQ2SwY9BhmzaKh",
  "key13": "2aea5v4GngmoXTfxa8mRykqjmQddXsiwpYickz6mTrZFe3rpL8SqYavt2hKexSfgqs564WfWgustn61FZVBEb17y",
  "key14": "3hjUUctH9Ak5eSJyDWJN94fcV93uv4bLfdzKxgN8Ambo9Zh9iwnKMtDZzZXDYzichEUcesEnRH42jTRx4waaWPyh",
  "key15": "zUzFVTZoK76LRocKYciReSBaACAiJBpYY2vvT23pLGosc7c4qG1gyUkR8CvL71XiFoXUZiqzHFdHgmthYiALHQU",
  "key16": "3M9e31MsKJHvcsHeSr6rbjR3qr9K2cjfEJ8p17iNsoBphtBMnvDvv8hbbyayGQU1Q6AF67fS6F4fdXCxQgMPY8R7",
  "key17": "39XdfoCHrFT2dNiczicotdUgsM3fLPFoDqvmMftkZTPT7MhYy63Ces5GbAbLJNr4mEsnbMroLY7j1ev3bM3W59yR",
  "key18": "2BbFq5D6zWQVFhMun5Fx16xHj5Yy134XjLrdtF8kuijX1LXpG1phpm1HqhTsJnjuyC53Pg1qcQsy4Ht5wHzQHTVs",
  "key19": "5D2pnsS9PXGYWjnxVkuN1MvBUbxE82fZjPtvS4vcQ2hvjAecKmt7rUp74xaEs8DNmzpx7eiqQ3WeJAHWFyettHPe",
  "key20": "3YXxziDt1J2S34ZgziaLKKTZePjcbXgN3emXFU79ZVWbKfFeQAEzN24KmQUo5TGQgBBVqH7YHASRJgEX37uoU1bV",
  "key21": "4BwzU2KmjJFTWD7Jah668pPzb8u2vtAWv1Y2mAPRckegMyCHAxDiHe4HSqk7H2F2vbzZz5iiyh9VBYfUapNDhawj",
  "key22": "4khHPRCkEfUdqNLM9BizcYJUp91eeZzKmj84QhppP3V7s2jKdsH1DWkyQiAWcTHSEuMsXWdqqCHHF4P7Xt8D82yA",
  "key23": "2EEyiRN38yLs7FFyHQ3JXpwqjGK6HBiZV6TvfdeH48cDVrzssBGyS3y4NHKpthcu965gHiWdyG6gYNncARy6YTLw",
  "key24": "rRqGDxt9XFuwaZoNByEjJVdSVT1EykWfvMu6BNxfDAoKaStnLJyXVW55rM6DfxGRhAUgZM8yfSZNJcPZ9zDoCP9",
  "key25": "2yrAxCPwhHBijCLvDXkhZNUvt1JjCde7YbrStM77hp9kVgrnPPTn7tdSMEqvr1JNtbVpcX9swrXtbGhDCEgMfEa5",
  "key26": "cVGXpviN8ssXCyetAadq3v7wHfBYCsWaFEraXZ4jWB8VGUFjBVGffDJVFtmUsYNG6F1YooRxdQfkDKz7fN7bHpY",
  "key27": "MtS9UV9ivz8qEm6uYCJQL4iCKJKxKftJXLXeYAdRSiJhTeA2gm6SGm7vdXoG1n3FAyhGc7PcRjDBDkuhaSVG4wN",
  "key28": "32qusQ3wHDv9CEEMd6earQ3vknedQnS8eNx1WCS5deLRJQrnLQwLCxSk6hgfvazJzdetiLcp91GEzQELwokgJqYf",
  "key29": "3XYPw4oCfyDGtNr96fM9yJthVwJGFPgJjVq6ktYjKRZwhaXZzU1EEiG7pGT3aZJm5Y8j11npxqM24G9osfmFNtPE",
  "key30": "3YpAQLLL155U4BqnELA9uAm7ScaGWhe446nWGW84ZZSExqyQnaR1ctfnWCrQ34U7bmvXYZsfamkXDZ9fLHHNLRcd",
  "key31": "4XLUxfYmTQ2Yf5iNm865JVkd45c4yBT6xiBBQfKMaszzKppRFaBKVGnbxFxAZ1WbQUAzk6tpbHyV9xQhVQ5V6Eqy",
  "key32": "5pqfgBMvS3FjPcErLyDbjLi2m8SYXoT6YW6wGAS9XiDQrGQqLS3cCk1P58m4eCzdJgmaVQMVmTjiAMmjSe72D7R7",
  "key33": "2An9eNTVzvVU5o4DdvSWAqPhMy9csRk9kdwXSi5hJghG2NRHJwmUp47vULzdMLbtrghBryqc8LorbZFonSnMAmd7",
  "key34": "3GxpJSGEY1AsaHKsHoSh3JEHpqT8Uv8mKjxWgqA8yqp4ku9NLHDS619saGa5rGSFYsK21BWA8aQ5btXWJh7Li7Bg",
  "key35": "2542LvhyueRs9wdYN6iiQKoKTaV8uazEtjP1VkfGV6FiAToksc2dSHjXCswth3vZEeGrJQzYpXQExoadoUNL4mWi",
  "key36": "63VittLG9AxwWz5MhcYBkW2ZpitJvAzgsaMr3wgUNSjxRQ565agMdHkaB6Kti1Wztd1EcgKEmnLMLsRUZfqao39J",
  "key37": "3wsPzJMJXtf8JJqLx9e8KQq74cJ6EHA638zdP68dBdQCz76bV1j5drTs2ZFbbA2HmQSATEYfCwQ1Fz25QdZAJsSs",
  "key38": "5PiKiB7ofGQEBA1c8eUDtWiGUYwwArQtfZe7BfBR7buzPZUp2SmFdhyi7ycLYgCUh8gCky5E5HGLuHZiggVvL1oQ",
  "key39": "8QSvVaUNkMp4v4u4SSPcawUpi5ghV4kwuWgofL52zouKnnRp3Hw5qrMjcdjmma6EVwsGxS9YwCaE4TXWMcJTgxP",
  "key40": "4FiPQCmmfUULPXiwPWr1QZERHN27odLBm8ddQNGJieMwqDCoGFv1yDpoZbX8bnYiQyYKwbAvEVDXx2DKMoAUpT5y",
  "key41": "21sK4Ub4nMBu7LE4ruKi5f6y2ifgujaPBFU963eh5NpwLCikJJrQzfnj8qtAa4L5qEjSPFYzzLpVror9euicZZLC",
  "key42": "Ufk6ZmqVuQaS7v8uzKQTN3ejnLBt6zXa4uo7BbNKgvjoV937E1uoBen4ACwaLTSuw9eZNCYj3cHLPnjFsGdH6Pb",
  "key43": "4hF3T3mUBonFso9y3yf87jMowAKp76MwBohisWdXicSKZWsA2aNs73oHJb7a6nFdwp53tEH2BD4ATrLjDYm3D7MV"
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
