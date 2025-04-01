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
    "4cm9qBVKfnJiT2sZodZBhQvQc4i9mLtjap4YNJKvKyNhUZzgY5A1E1tcsbSLBGDvooS2Wp3nC3fVJXaTmhXewZwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zj7vUN8kAUvf1eSxr7ggHbg5qxe6UdkCtrxYesokjXbSTbaiuJGMmTVie3qxk3rn8ZFfy3tom4mmGaPHHqQp6sV",
  "key1": "2G2LyHtsbTxTLT75t7n5VrCL3rHWvK6c2BSFy8RC8qxirUpts9XJpLAydnDUxbBkmJYJ2VvCJnUR9aYajCqqfDU4",
  "key2": "az7gGeCQomBdHPAWzgVM8ByJCVz7BjMFdxoeTViAUSSeLoJ4rQs6CDEX3H5FdF216VH2bp3haZrem9g8TckJbDS",
  "key3": "5xxf5ADY7jHRkc4RvnVET5UB5msLFDSmJdWecKEEpTbeWPx62ezvRBGbChkx665aAoVrKRTjLD4Bz78QCZ11gVkA",
  "key4": "2Yxfhs7Hdr7yDsYycTGah2B1J2MtcoTHCHcTfaSskJpVQSmBmKKJJWcAwkPm7psG1LWE5w8FRDA69gMsW46c2uXq",
  "key5": "5UQfizEKzZ3MrUkjbfxQD2u8nsPLyDx1ZUHGMmnzpxKJ4zkEFpkBdsN5xty6rPwP13inH7ADUsGvp13qRQ65XXP",
  "key6": "5zTXpnc6DdZ6taXARkHRZf3oxpVTNBGCL4UFe2xedVWBTRcQj8EHcoLBSqg9w5cpagYLyDZsEeNHeJgXqKNAvmT7",
  "key7": "4SCie2tr5LTskQWNvYH7kHYDWP8i1Fnivzi9Ybq1BETo8oeRaa5qDBc5nvRWTuvtHG7UiL4erLWrbeWxREueq74c",
  "key8": "54BVQav1ytRAFnR5dbMpYjkygVTd9egih2B8KpoTotR7CY7q6BwtxGweT5hGtbKTa3NR96zUbaftdaT4bzSDBGdn",
  "key9": "4gsW3Bh1Vd4ziWqxVBiqUw5XGNU4hRcd26VMPbQNsaphzi1rxDheBYHxmPQ9wKrgqqXq8jfBW1YKPg554S8CaQga",
  "key10": "2gdsQKKj8ZFfVPnBbuyTyFJjLCeoR7kMdBEGuS2uzrFBQZL4tcToU5bDwY6UEuNH14AQvAj752QPhrz12g6gWRFg",
  "key11": "2wtnJQRjM96mCLpTEQVR6uLwn7UriAWu5NHrEybMmtAdJRAhcvhPQEuQBA8Nqi2C6vVHdwr3Tk7o3hi4476mGf4r",
  "key12": "4HJSfuhqyNHFin4txF2nfwnGk6z8EtYq6irzCLuuBQkrmMLwkFt1Xnz34cnKbmov3eA5n9pod8avGP1YrAFUifcB",
  "key13": "4pkwFDftH2RqN2L2kwz9PuQEdbufANtnUgd1W8AxKBaXbHnrnGUBPd5y8rLK9TQDF3tJphRXxJE7etme4bn4HVus",
  "key14": "4ktEFnXJzvKqJ7CMDAi5hV8AgQ7efkMXLybHXQfwH5HeM9s53kqmqkYKGq57Gg5y67Xn1cPGaUPznAHvotQ9JZEJ",
  "key15": "WPpBSsf7vMhoofAgG4AF7bmPQJaYM4o8qKSuoMp551igq3eHniqTK8Q6MWdii7mTjmWYfMvFAyC5Ki54VPbg44V",
  "key16": "5FEhDvFxi5yYyzws8Zbft8B5KyEPoocra242bzFhmL4V14DpndFuoSkyLNQ7naSTQ5tDP6RxkoViUfpt8sZc2PoE",
  "key17": "4fxRbyL1EgtnAbBvm29fGsx2LmYuXWodmdGv7jyCB18KLyEZ7GL4oz573UvWw25iajyD8Z7vyQmT2Vqq5iW3cdqd",
  "key18": "2DBNCfdKQWaMKsvpNN7QwE6ozEi8ijvJ49f1bA1YM1WsspWStqP5gid6zZJGKhusgvjcpsatHL5jzMekdz2YkLBT",
  "key19": "2m16HHecr3pDrTWg5vGKFuKt1wompmo3BzGbdQcPuWfRuDktaMF2CWr3ezSDJ5P5pUsY94mxReP8tvzXq3xyryAt",
  "key20": "5XgpLoVhSj5G16WmzRUMWwrawcuLy73pBGnMXkn2xF1ZdHNwfaHe7N62MVnmw2sZwYznZ2BEM8jBX1G24aPd8rQk",
  "key21": "3K46PoVeryssUaxtmyX1fbPEeHB7FS269mxEynn3bKbSwiasT2S1P5t2dbnDNYfCtK9jo9dLxevCGmeBwjYzUo7C",
  "key22": "2hQbcPSFbXqa4QsnfzcmfRTowZAu8Svam4nfuvHLQ98b2rLFF8xGH2hY38CBLUwdFBr3LKxbNtnwHc2mVw1wjj6F",
  "key23": "5rFCUcetg6X7yfVsRZcVqHSr32Ug2yXwyDJXmWL2TMXWoPQQkUFMdWnMehZf7h8i6UqMA1ZidYJeiM1GEEV5NVJA",
  "key24": "4kVvZVmqfpuYa6ModEZgxPueb13MHcZTzYy2ztJELADYVcSMYDxbQud1P7DvNmUoMmwextaqRatr2maocuc1XoqC",
  "key25": "5api7cQP1XKAy5EFuHBb15CcQ2maWyp4sEZeNSWjiFn7SH8hMoTezWohVHDwUxuJeXqZVBDDh8XdPp7v2uFNMEHC",
  "key26": "5prRN1tWcEezWKrCP9ewTaA8K4N8LQHEFbR7VhxqCjnbW6cvSE19L6VHmBeZeRgnQZCjumH7TN7Exxp3DbqRUWdf",
  "key27": "bM5c7Pvdn9CSnvRKmapU6Bi9X1vai6s2VTDHv28pnUJnZ1qChVm9yLaGzyKuHSjmdny8LcmJVYp6Y54kKqfrWCW",
  "key28": "HRVxc6A942tndNsQHXQTDYSinLYaN7nCuPystHA6LiYbHzq8dwtVNJ45mjjKHoC26WFKvaWKELAyDWvtNEiV3hk",
  "key29": "5GDrXxUmbtW9mE9BDE2Lb92EQYWdrqTGinYgG5T76BVoaEc7MQpqqTQTd9b8wyQzfhqotawvaduk6nKMeLu7qsaQ",
  "key30": "3bx9KoSDMgohvBo7YdDQqvhuNa6eSnv244giS3bW7XBQTRzMZZsTv4kNKVPt6Nm3EWKu5s1Ye5Xp8jsF6NS6DNus",
  "key31": "3t56wvxsjzh7AfNSszMwzhPWnJVqfRdsTzJr9fUFdGEekRSCQHMhD8ixszkbP4NAgrdHSbzuMvWc3KWCHvqR6XPX",
  "key32": "56R5XwzVuo3g27gjrwXtcNvbabYa4CmxDdmRvjxdCE3sNh7BQgf8kKnNVQWj8NjJRJD6ZvQwATEZHJpuSWMgDpNG",
  "key33": "4qsLr4TTGXLvZA3v3ou3CjFvCQ366B96pSNgCwkkoiXsgxzfmLfhyvfvdbyAWw2pQHiwrq7bE1yvqdYioGKW1u7q",
  "key34": "2cf5iG7HsRg2b4ZjjvkYKg5AsTWKkWtXHEMECMfpk14FrkCjJFh1ne19um4XrWjCvbBY6HNkXURb3Z1tRke3vMCF",
  "key35": "2trVow149PMWRnzCzoDfgWP13f329WEaAmWFLWxfhQwvRgArJSAY41ySkxfjHRdHC9sZxFXVL2Ax4EJ4gAUXNwos",
  "key36": "31mXvfhEmR97Zv9pGg3sdF5SsrQTfuBZ9pfXMrKNz9uSZ3ZMEaV1hNTAULjDX2JBRkxLsRdk56TR4WMdMj8DA48x",
  "key37": "2U8tq7SVJN2fj4suhKuHJg94NMQAoEuzG5J3M6BbHn9fyaEnmFWs6WRw1hbm2Ztwh2ZDtMdLTAUiKTnf3hEB4Uyi",
  "key38": "ydNFnonWMz68yETva9zhK1zh3D9YnRm5s71WwEhzRbERgy4cH2X4gA9CxD88fPux24nPDy9Qdf9WR6kaeRACaet",
  "key39": "aK3dgCDZT4syUfJygYSLemcbgdviVgDQXrXX87zqv7KrMK5nThtUijNw97e2pztu8vjYAZNdGDh1YHYraP14Lr6",
  "key40": "44UwPKvTPcDm72fkbqBmfXGa7fTbjkNjbfyLDcpVzSmGHhanb6TmH4JWrgEj5oCRk7rD5Y1MdVP3mV1pN9S7mfiK",
  "key41": "3isMV1kab96aQtXknKJMDKMJoPmgYuKWVY4UUGXZi9qeRRwU6d3bS98j73anC8u5CUyEWiEKRitjrzUpruBwf6FD",
  "key42": "G2uGB9hz4bZxKcywrYYcB9ZM9ZHNeyBn4XeJnbnn6SYbY7vNTaggZTyHrVSp2uNuwm4gHY1gDAPMPPoXWMrwRZr",
  "key43": "5HyqaA1tJWwtozxm2TRfFHYnks2cPX4cRPXyAXVUaXBmhmKKKu6TF4fAsn74wKEm8u1og1W8LuHngNpkuAJhbNT",
  "key44": "2R98GrbuZ4pq7S5LgfBnPmXxJAwQxzgobiaEtY8hSdwkdqmEewYWLuShzrAe5Xsf99sDqwk287tHGhxi3W6nTheQ",
  "key45": "3DreoH8hj5cVYxXeM6rLYZB1dmEPgL4DVq3dGwejuP9ZrUiWgRTG1t3JgNkbNwbKGmN2uWkbrq5vy7bkPKqfBinH",
  "key46": "4hYJgmHFSfM8UJB2S3LBpWNfvLcF9KSePYeZccTsKcMaaE1cRvrE3sfbq1VUdbMkrG8A22dE3VrugHbB8iqNQyku",
  "key47": "4LLLWmV2Yx9bX1cYX68JFtHKsS8yFCgJYMN4avwvQCoMmNYwbiLEoJB4NjWoriveVUYJ1Z6mBicqF2Sq7pepRsd8",
  "key48": "3MaChXiu3EX6De18zS4bikBkKMpLfePfB4KoZZnnpmH8J7U4Cuo5h7PByoQ7ff8kUQv4jFkxN8g4oimhBtVSJQRb"
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
