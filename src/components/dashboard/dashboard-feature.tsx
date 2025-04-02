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
    "5Ur6WHekVzwUdop95bhv7Ka3N7mUHawdMRGY6X76JXFEQKtbSMdcXuytKvpbeYdZWqDD1m94ETKTTqDb6sAiy7JT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hT3YUQ9MPHkUU3ikEobnY2sfmMZDeeHbRcSdMgUBu54GEKNagBJMh6WdGN6nNDMNTFb2JTYdk4dPLJhcFCxPjpm",
  "key1": "2ZboC4JEmxEVaE9AGiVZjpYZxruo1b3gJPY3YNZf4r1oMo9grd6rfbxX3kqMd8Ut8yzFaCCzM3xQrd9dbMyRKoMR",
  "key2": "5oJ6jdfTk5awsxW5ZZbLArzUeFG71GMPbNtAgHG4zxEmQJmxxfC4p2YZAgTkHTy84GpqKHP9zYeNuaT3nHauCXzp",
  "key3": "55z3rgaSFFmCK6srC2iELVQco5XhvpDFWhseXpf1JogMjWGT8gkPzVz3YGqF7Bn9nruiHweSWPagbB9FScBmG3d4",
  "key4": "2MLHRPwBuQ5ePBx7MhyH3CPKpQ7iXaKRHnPChiDdyDuVxZXUWNQj3NCYjT3tJCoxiv4Ga7yGvrVzVDJbjqyVStBD",
  "key5": "5Str65Rz4MhGJvq1uyewunn5ewYPrT5jALerC4GVFJZFF6tE8EZuAjRA8mrAGvssBUrMaCww3FQteSadDgmh2z8i",
  "key6": "63QY7toAkSfUNVbYUwHENqpd2KQdr88Bn4z199YXbi7o3CvRpTYBf8QKAXgKUjRtw97Qm3c6FLYNnLG5wMEFegcM",
  "key7": "4DA7JMmPRM1MWdGCrQXGrnBmx7ZxAQ4p6wLMYTL5AoL9i1iVhetsfmqh1gVubqqVUXc8hWEMZaaVCXoecRebzZiw",
  "key8": "2LBZGebGt59BrhP67cytns9dyQ7bPUfQwDyux5b1vSTTdU7wFCXkK5y7cu7xfKLtFepi5hzfq1zFFjRqmj44eSRW",
  "key9": "2d6vkZDU6dSbEqTFsX9ys8CfXyVVyu3oRFxbhDPBHjyXD46awdCKtyuHjnnzd8R1MBtQEkwsZbj2JH7soTN4YxhH",
  "key10": "dZcYDe2toEzPrtTfKoMbj15Sz1k7V9qXBhqubEtW95P5F3acUZJPMeMxhMUQRF3VTfwn8fSqLeYMgk9f6HWVMmY",
  "key11": "4MQmvo6FFtAb2a54PmSmZrC6ikgnhGAoD2mQHWbriyHppbAVbP8X5Zw4eF1L7uWnmLyE6kfYddms6uNjfi7rKhQS",
  "key12": "VPYoduqxJU9kCPpYBnrmDx4q6xhK29g4Eb2QD5chShemLULYr1rM8EZsVmqSkDVNPBydPDAQ9XgPWJiNv9WdcoT",
  "key13": "3cSW9Z6aSXxyQ9AEaSxETBr1zANamnDyJaxx1akSCKKqrPy6oWziz9UpyEuPGoy5XJoX33sB2gzhzoa4JkdNVrcu",
  "key14": "5oe8V57GtuYXePjcCQ1L5xpWzt6EXpYFgDyUmKzod4ugHgkWKvrjYo83t4njDPR1KFmTWfPoFxMHqJxDCKXhuW1U",
  "key15": "3RjN7eeyzmPNLd7dijcHVXbzuLbZUrf2xeYBPNXoRnR3GX95EvDkgnZGVvdFoPLjYCEprduCK81gQPaUvmpvGDrz",
  "key16": "621m7rXyQ7im4XoghAwVvT5NCNkMyDAMAVbQ1fWvnmn7hQFJ6uHpxR6YwgNwB4eKr7sBWMVGhpedvMk1yPcJ9Y6o",
  "key17": "5vyrtnvAirem9CgqVQqbCJqT5VUkV6f8oKHMPkieMnwFEB3FTWydjMS9QSWTSNrEUTAcpbD8tFzxrvtmEWqU34Ab",
  "key18": "4aYdx8v8wmLJDmqt5gZ7t2G2zWXUjsKajx6kiVZ5AaZHbgspJq8ZfUvZJTmK6gv8jg5LGTnS7rS1LA2d45sTXKo3",
  "key19": "3wMo8SPLnuxaToC1iEENuVFz9nwKSBgYtxmdcUWgCv2c6QMAGAKQXyu5AdGCfQnrJDyWubRM1xxVHk63saGGJCGr",
  "key20": "a1yXj1DzgGrECoiwb4BJND19mN83PvZVqm9WjC4fe8xbZucXhjryuruGZ9obCDEcjXz8fZaDNXLELHebwaSq2AE",
  "key21": "2G5vSiUQvBP5NsAZPATwLi9kRqQyUB1GVhz5G6ZBH2x3kaGLqS1dHarkxC23se8aq1oHmZ2Pfj4NQWFqYrdJQREe",
  "key22": "5MjuCoPw8UC15X7DtzHy4gYysFD4aHd3s8e8FzXbAyvdsP9JqGXwekJ1stfop695UmkZiY19vLbEMFDX77jRwGj6",
  "key23": "334EvowqjiQbDZRSSCiMWyjHLcMAW5tLZneG85umrUGT11A4AJcY7XeKYEH6AmcAFRvekshFmJ5MWKBfXwR52EKX",
  "key24": "GT5NKsBjEFEawdzUJv2q6R5bM5NMZMTNk6JYWJrR9WpWNnKcjvqtzgVsw5V8yp34gWb9b6wKBs3g3mEJS5BqWko",
  "key25": "43UMPh4xxcD4LTWMCqBz8khuhwskfSZqAx7pncvudd88EooSixMw2fHJQkPJbZjqgPDyBRRrbE6X4tRtG7aMGzF5",
  "key26": "2sZ13Y9HGea7m9dxFrfPhaQ6UESY96RSroSi5oCJM4yJ8199qMZXERFGXL3hDT9mFqD9GdXMySWqSmSUqf1ry121",
  "key27": "3UvdF4zEjQTiSPPLNaZDay6etUWuKfBGkk7FhPkJA6i6Sb85mxngEkksnBXvCUzwaVtKaJNuGAs1CWnQrgqC2Cii",
  "key28": "23K58zVbiTKHmCsmx4BPjw3CQTQTL21TiBYQhx5TjidzSKfpMbxHDbMDCTYdck7FP2JAqZXfzDqrPVMSoKLJbMHN",
  "key29": "4ZLkPcZev3UBJzqgGXaYUC7YdgzXkQ8s26ohJAMuAKZr5VN6sGwjC4Hz6epytRU12Hs636uLHYHREGVNwSMDzMBp",
  "key30": "3pLUwSLz28r2bE63SuZWaFKhFLQ9Bp7EhLASnwRrGsRvPmdP1zYpRAhVjjtErYp3ufsodMFbDqXFxyDzPFTHm4md",
  "key31": "3ujcTyTzMQPV69LzXBChMKQNxkuMThggZREX4PmEJZG9QfsmmrBNFDoip8WWdunGy9rkpughCM6B7YynCYBpLPqT",
  "key32": "Bespn9KwhRwP6A5hZQVgKQoadKZ9X54jsJuVxUZEJkkWaXJbYdWzQkCc63RtuNLog8GcMoX2PMfFoA4mw3Q7Akw",
  "key33": "2f5Jqc9bukYb3fvJWidEiRjbS9CLbu3rriw2ppLj49Vz28TmvhwZMA7t31AGXcmmDeRF9GmU2M4qwLJP59rVXyJC",
  "key34": "5vdWAD6jPgN7gWMbQUy89kvciU1Drn1HDnNHbD7gzBoyqyK2Ld77SmfNJdQgWG4a3jUhNhVi3Ya7AbD1xnnNqPLG",
  "key35": "2j3BZ1D5Cvz6VsM7U1QkV9HMmy7VfUeN2U19gH2cc1CpNKewCjqtdrPdU29AMF2P8BHUbr2VCPP7HkZ6c9yE2hKm",
  "key36": "5ztakfvg1NDZFn3awjcxBY3XzPuDumsrTCJnKnTWnhe6LXkCtGcbJc3zKfoN4L3tyaHrSdPsNEaP9EMrPbmvPbjN",
  "key37": "5W7NUgowT4LprBJqwavZaNTgxtYCRTUcepH3bTsA2w1dkScoW65X8WwCDAVT2P6KUcLPBpKU9fQaYxmcCGzNHWeT",
  "key38": "5ihn4xRwi3LDW3yvRaYahAU4nMjRpXXwsZ9quPCavx6E2dNCLLpkDLghrptN1PtivnwXCuhDGVNANsxe1wqxAFfZ",
  "key39": "2oEp7b8z92zzavji7mQzqm7E7CA9qUX6SZCSK3BLf3x5kSnrJqhoSXq9cEYt62UspjKuq4jiyhXm6XxE9EVW7uX4",
  "key40": "2UfKE3qg3poEyXDDLX2dapqPRaJcmsYz4RNxFQDGrFWBKencHk65pWr7KkLG3C2h5AywqcVkN5tsXkS66rYp9DN7",
  "key41": "3NsWR7kGCqegmCFtKqYrbA3feWAtkxUVPEJjmkq7uKsiEU2Sv7ubsqhDrbwpeCEFaYaHpwsYXezYda2gk6Xh53s6",
  "key42": "5Lge3wXEJuPpTGo7mGiTTD3DRA24bwgPqeMCEWSUWd5LrF48vfTvSJX3TgSFmzbcRiMUvppKLKe8tV4teGvGvryT"
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
