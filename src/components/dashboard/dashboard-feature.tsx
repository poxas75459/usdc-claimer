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
    "iA4p9fTz7ppmjRkMWGzmLVdfLceyKhE19vrVgh4vEGoW1g96bxY9skeaDwUkRk7ptxexDH6mmYmE7fGDSG8bcbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tH2n5vwQ4MZS6vPFnL4UKsKLZBp28xNM3Z9pEZEKXaqKiB9q3GFByiQTReeJ3UFU2RwDUvpbAqkbNpG3rCzpCkK",
  "key1": "v1iBymST1RMv6po7xxBdNNNqU6DD3sZQ7rfpoBF6YzRMfhBvx4Y2bT4fuRRsP8PdLDPoLnueVWjWvZDDB9LnoWb",
  "key2": "33EK3MXfcf8tjZgj84C6bk1V6mF2weGyPZ8ufT6DLM6XEEZoBMhyR2D8o4aRbPXmHnDZW2idANC38pvV7DX4EThQ",
  "key3": "KmZZsDgJ1rBQ2EDecHebvk4NjQqLKud5PerG44WLWmLmjBDiXxpTNvGjcQWCXBVp5yHAmCHH3kwtwQvcpLGQwek",
  "key4": "3BL9hpBaUYopWZtQeB4sDgocRuooNd2DccWhbgVeGPztDME8Lb8bC9mip44zv8bDAd9SknHF2tJ27bfsFLHvmjfF",
  "key5": "5ufCaJALgye9ctYMdNBsKaNjzGXUpEuVSiwe4E8ePk56qw5sQPRdq5E4NsCg9fXHHwAi9RNjQLX6csTgAgC3rACt",
  "key6": "2P1qLd4LEyLgzDPWyhV1jZUTLX2NEz9FM7xUsqBoM13KYqeSe5BqH25YtHVH7gQefhYpJTGthCgVXCFjrhPvpW9e",
  "key7": "4HsJfbjsefzkGLoBwooemMRxJm4E4zxyiJ1me4wRKM3AfiRQyBQGmAHWqqfbYHNUFpTwgJZ4Xo2dx2V9buXkEnfL",
  "key8": "2S75SrtPM9TnXhb7avVj23Y7ATZn7QqVcfBZUXfiV4ZaNjBg9CzvrE4ESGnLSkZUiN2CvCt3CzzEbtXB7qdv1iXZ",
  "key9": "5rd1eB2xhN87Nk2ZJdCnJDMuHYJLA9Jjzo87mC3NFM7zvEH7TSwdX7tZFvSgVheYWydb2LME4eV2Z8uhwXABdV3c",
  "key10": "YeZE1PjY8yhkyy9JqHiyrou9iw4w9Jbd2uDW6tbTLEoiJLuRiDYJQur7o9QCp2gxgrwbyi8oWMCsPHLzqVJ1vaL",
  "key11": "5vyfT4HGCdhSKU6ssE7cYCxEdWV6hzpEwdWkHqamJYsxmDZ8zm9DiZsSPzBJd1mjA3b3ze7e7Kx8bHoeAELwhoUU",
  "key12": "38CLeD64kng3xHNJv44HuxCVC5Rjxnx6vDVRUzikxdX8xniQVTkUNQ43hFEXis8ZqZDVegJcBX3xJednQEnimT8P",
  "key13": "3aiU7q95J4fxXcpqiFTEaA38sdm3cgQCrr6dUFvHGoHVHyVHG1iHxdwEVWmj34vk5v8jw8Nra88EcWLR3z5ScP12",
  "key14": "4xTNa8JMvdYsV9zUu7VFM1jUbgHrjCtXpgrBi5VZugWMEzqA9XGfF3QYc9uobR6HhcBhXiTQaueGHDUS6KoaNchd",
  "key15": "xFCK7TjmvfahpiPhUfqok9xeEaNHu1BbEtvFW8RfDDYSnbHdHpjPJp997qVGmCYBev1JQMDBBpzve5agbzMsnSZ",
  "key16": "j3Ei7N7Hn1z1W9GDaHkX5r94avM7qTSzkg3AVnu1K4po8pNtyD1p3VdHdyxC42ttKMmzQeSLkRfANGo74K3gYtr",
  "key17": "3hy7GuLUHLXo82wWq1Lh45iCqXszNDaQxAM3HGsCMrgANV6DxJte4jd1CvsCBxXSxQSeVTKtrcu7MzzFFTwRsWdZ",
  "key18": "Dg13vPqfcA28JjAMiLDuZYom8gGLZqjTKLmF2K4Gjeg4xHjkepiwxPUcuHtYwKrQiWf77wy2MwXWGU9aLgXURZ3",
  "key19": "2B7Rn55zWtftxVXLcUCXyePyxL8huzVZUyqM1DXB9U3YVUsN34JbXW2VBeXgCUfMPqfw52Rg7shxFBVxKpiuShW7",
  "key20": "5kewoqwftR1kwNNx4h96vRnToMTfzjpHd9bapKqeSGadVnKPc3VVuXtDhhPNZfsNjhAH8TmhrkkrtN3ZLMj4qrty",
  "key21": "p75R848tX4vxUGvXE1L6WNriXnZoMJGMfVRUyyMFRXjEZ62XUejkS6niRNQgfibs4MoYzwRzEZqe5QogZ5HjzRA",
  "key22": "4EtymnMettdbpma5dYDfWJuwtsA9K8LwHf51hTxTuWzKcxA8sEPiLR2pGHnJQY2yjd2TCbw1V7KsvgWXkB8jFfY7",
  "key23": "4EuvndS7my9icE91iHrLe3JFTEEvR32oZzYJh3TrUwnBoVV7bwvXL1p5e3WUsywNWCkoEp9XYY3EdJYx3is5ivKH",
  "key24": "26zn4Qm6taGte7tHATWpbgmgekaAcibDLq3NUUMMpFHNrMKNMGgRqVKjjYCThU7EVP1V5ocxYqYLQ2rSoEusGSSt",
  "key25": "3VL2LhPEpby3jFHEpb1nAasRXVCNsYsjmwfrYiB5tBF897ewvtoMcxv5XrapNniNGdNEkpxeG1creri4kiw7ZauC",
  "key26": "3rF4xfrmyYNHBsvduz998K15FuL26hJpaDP6tJTFJPoZiW2uMPyJoHjK7PPuNUdBdXLqbxUC1ZAhRZUb6epB5SAm",
  "key27": "4RaCjAtaABvCxWdBAx5czz74aPiX7MxxanPPLAKZ4QNokgfdKuTuDXREVuQpRKLwsRnBTmqcczso4RJskBRvADCn",
  "key28": "2Pru9B7nrHzbN9ziMeLZzZnGpaFLPR6MZFJ62riCZXyBWJYpk3AXiK2GogTN719P6Zoe2XUWVmdhyhMKsjW4JM7V",
  "key29": "3fdarJfc2n5bwTaeXHsNVJu7CF2tZEnt1YskAdBuNJvGJDfB7E9KVAuQgdkwmqeWDPmHyhsh6RfMS7heBZH9giAA",
  "key30": "Pz8rLak9rBJwXfKrHX1Goap2AD4YT9V75RL9z8oU2JtdfbwuJFd5M7vJvUD6teGvSUbUzUd8JkTLSYCGMtnZhgT",
  "key31": "5GP3gyhuNe6vKTGuia3AKPsiPGQWBi3Ge3e8NTAvpV7y2CvZj6g9WNBWYjakKZUwz7Cf9Abe27TG4TjcnTLvcs3h",
  "key32": "2b1kLkeTVQ9AbmhmUtQy1saDFEyJjz4ZsChXbHrL6trxLX8b3n3pBcnc6iNbhw6VvZNAiceCUMQVa9YJHBaudEfx",
  "key33": "56BPfexK23EEtctFpU831GYTPijroBWiguD5X2QtEVvnjJEE7HHR4e4wTAmE5fNQdcCWGGoGKgqd4xQReLoMtn89",
  "key34": "2TARpB8J5pqqyMhHhv3rriB29hk24gPeV3TPG4CVdiF3z2fkUeseVem4nxK4nxrhc2jGvLX9xptFvoZiPXyL76aC",
  "key35": "5TsgUaQh5QZLhnicgVup3sy2NGF8JCRePrH5tK7yNC3waWwLZdWLyvkrYxAB9Pg1TeRv7b8u3DSCSKhdfUYGZWAA",
  "key36": "2irfhVqm6xTjwBL3DnXKt6yETmJ3u5smtAqzhU9dtUuTcngaUchW9YbMxMtRDTGxQvyHtPnzGkKhm8xDnGLit2Zq",
  "key37": "5QYcoTTRXdcqobu8Y65tBhkDyDN1mnSeeCFAZmR1R98QQEF2X8CuAoGum1shncBamkrJ3ienTdQBwq1vaogM8Fic",
  "key38": "2SMa2zRkrJyET4kKhPNuExedUuNiFGWKR9Jkkc3nq1qANnqWbrdFTJ3S6Dqb6eeCFQDfGTQMGSvA1hJRt3hR2gDj",
  "key39": "3R2iPHzN8LAtKkuPoNNvWZbiQC4Q52tnjmCfqvmFNSADNTVvLGA8DjLBVgjGkpk7QmvSXKPxdLRCgHMT6Le59B1L",
  "key40": "2Sg6FJ5GdAryD2twVG9eQ5HFLMkq6w7ma3Zp2DqYVZXnxQsrtxn4cLhrERDapNTeiC7cD66UDULAvjyEEbiYpL8D",
  "key41": "3F6jwLZQfRsbyKN2P9B4NswmhMP7LpsYS61beraJHNFoHXm8jxcimK9und62yKYSmXqS1ZhqkdyNTT1rA1DdMMRW",
  "key42": "4TMRz4VMcbUr7DCX4TQZ9ZYTTFgz8my1pA4RDS767gXw1UhB2rUaAiNK6havfW9pWNo5TVBj5iYY4YS1CXyt3B5J",
  "key43": "3QDNGXfU6pQoSng1uzP7seQBMDzxBom7ow6sGbd71Ns5R7mKUrggGw4xwQJbuAD7AFF65KfsEBV1WewjozXL6wN7",
  "key44": "4ZpGdRrXdH6hxxpG9gjS7Lb3ictC4nBe3sEa49NQwJo4Wu5Nuzgpj3pyZby5972MKNgVD9vu4A9Bsvav7sDvdsev"
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
