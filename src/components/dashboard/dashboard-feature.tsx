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
    "58pVdn3ebD2htwxTR24FTNmZ5tQUcshw3ncCYjntszhzqyjPn84cpGnnSXeLHr1MWBoySCqBfu9tgguYrw9wQquj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F5vzPiLyWJRPLPJx8Jir3zUCBJQ1eyAyctYtJxcWtsNVUFugFi9ycuioaPAeXY4G9RZP6gQe56JXVzHU6LHSpYR",
  "key1": "4ynhqtirpFo6gtZHFq1ftnLU4G7VRp9z3X3sT4Zp67viGQptPJSLa6GgkognUksFNZMvzAwzZLcJuZJ1nmmeqvfC",
  "key2": "XioxctLq8hD6qbGejiJnMRNA7QGKeKpjGy95m7wSnmBbFR4JwfQupDuaZ7bjSW75RsDtk4Yc2ncDWDNensCF4AW",
  "key3": "oPFKeZtefvuGRtimJ72DFEMs9PJofBZoj8EhxJ5JXmNeAAFn19vftNv3KytdRHmKupiFBzsvAZx1A8bMGhPWdQW",
  "key4": "3nEtMWnvucqecFyA98EURMCEk7mmfkmaBpZ1vxYUu7scjm32yXbMyqFK65ipLX9HgWd7jsk15Cf96rQETuxQxPG",
  "key5": "22qycZ8UdR4v6c2Z8sLhx2W3iYqCj5C4cdTeHupi1tUsq1W3AxspMUEwCv3HbceTGVwkomgugtCgNrK6XAha2hwq",
  "key6": "4GKorCrp1dpPqDtsH8Lymt9WpJhcHeKoknXViihGMAKu4S6XrsNat22DXoXobFzSLc7VPrtCd8VYb3YBzCKTBT4",
  "key7": "5cm3WXuW2MsLfWgWYzrqRSyrGmJsCtsfBDKYj7AzwNSxb2wZcV13wAoCEzL9Mz2C6Vi9CjK8xb1xyHbchSBYwSFD",
  "key8": "64ygaxuK1EePW6xpQ1gDNkfohCo737EgYZMsXciN39qRvPoj25qG6RkWgaNv9Vq1Xxe5eFjNvyauKCEUko1Hyydn",
  "key9": "2CkPh1j62yncBG6aGusp1PuFy3atjdBfPY5BrqrPxpPndHTQGWGzbLp1Fb8eiBxQcbth7b8qhWVygSGqCrqpZyZz",
  "key10": "22Z9YXtDjdmfUyEikGjbBnnP9wXj6L461fS6QysFzSLT7ygcfdC9uNfFM7eRVpSvU4LhqpJ4A2mQKCrAJAqJxwkj",
  "key11": "4yeVPoDRi8tRYyh9nUyd8h1BMJAhT6bD2UaqfhvHYupFoWjCp6JGZsidAFYkzRWSD6YFeXpXBEmho8gGRh2BbdYK",
  "key12": "ek2mr18m4GXwPht5tUMXTK47xraCD93JQg4XXjih11kdP3phQnhX83bLrBE7WXeQQcAvH6g6GaaVQtabBGYSrYs",
  "key13": "5FyAbBW7wqQM6StqTdokvbNaEDufgTa8wFdt8jZyhWWcLBCc97YyoGUAwSThEL2y7H6VcE2QGxJxLv3jLGguQEjr",
  "key14": "3SaCrvYm8GJEdZnDusjzEuRPnZSo6oHFSCGx62Bz67CBBSRnx5ppyM22XCV16Y79pbaPFMhDjxzisZYQKSPtXYe8",
  "key15": "3GFpBkinkPrHTWSz5BSoJxC63rnR2vHvZutLqHeg9bUSqS5MuHuTbjUpUA1KEMcJxHLHcbhABTEri5Crm8ViWJep",
  "key16": "2Pd2Vp44Y4XTSn7qLTFr6z7L5igFhQLDCfqQu8kEnPjePnvtJJQTsSjeamK1Xcmb1HDWhCL8xHCs6XwwKSg3kAe3",
  "key17": "2Ha3Q9Ye9SmbHuqUmAAWdY4BfmbKogZZ62LggkcmK2nu31JdHomQMPRd6P93CRSi9AAmhuDomwMZgf7bqVDLLbZH",
  "key18": "5bk9kAMpFQWm2tRgFoFEFk9EtZvNRMd7nApLbzkYTKHdQ5NLjEgacGSu4qZM2s4RgD87GRJscKZieQhA2o2gQhcA",
  "key19": "5i2N7a9b8PhQ2x8PLCEH7yY2JD3Et9YY3LtX9ykgCjfSUspdn41kwsfZNCa7zP5stFiZgGKeRicBnDkCBbZwF1xj",
  "key20": "216KXtPyYQQbBVtrfDberwXTZnrt31JeDdtDtuTrGb3g5YzhNJuH56D2JDjm5CskYZ2n7EKMSEznUkGtK31e3GY8",
  "key21": "3nth9xWw6GWdXGYCVk2QhoRELRUHw7e9u555nR9E8adoSDvWVgx1yvDfvq4JZFVpSg4HNVafHyj59oCAUDvjWmgf",
  "key22": "42vPTVmAt9drQEEzyC57KMbiAcEZDfz9nkLmYbkeBEbVG1QsA36gpvqNzonHTidwJQryZCKNGgFrV4V57BkR9E2W",
  "key23": "446XR1eMJijhJ88gHPdhHaeG9PsjrFStZyeGPwwq8Ssg81PYEmHSUoJ3ZsiA1MZzxGXdvayK8PmbmGqra1vyt2yN",
  "key24": "5Uhd6ypJuWR46U1QrHRrQmiHFLdYXPP3j8ZyAPYRZRyq1KrwGeaRaeEwsMnXtsm6hk8yXiMAu6GNMVa8vLT6ZBfa",
  "key25": "44nWE26bFZiRCwqZKPkN4ARYEn1NC1sGg47VaYukVAMNEu2sabY52bF6Pf2Mc5fkJqoq3yEzv4cZUecq12qDo3N6",
  "key26": "2xbe9wxikSfVfe4AVoX9wGJt1erT5jYgRxZ5Xr2D2zZMwT8jQoGsBHy9tk29oKFf2VAbW3CMFXBTNMZqK8Dty6AP",
  "key27": "2cTV4xHQabUoZ8sf5WTM3Zd5PQyVL3cytqe3hg3m96UbU3Rsy3RhRgDiYvcPU7AywLvcfuX7Mogbn8xyisRphjJe",
  "key28": "5EiFiYHNWcb3UBJCuzYmXrUxeW9TBrtcsLA1xWwGofrCAgi3i2hitKZVnwFase4gLnp3fevaUUwZ5CpHceA5hsQv",
  "key29": "4Kh1dVEJTqXCPTBRuwc2T7UTnjwLwwnzQ9zdbMzrRrrZ4P4h26yUK4Bhd25d5xT6D1cx1UdjWToYat4Gj6Lg1HYy",
  "key30": "2oNbbxkfFtJtSrq38UDMvhCDEC45uHJ5kVbQxyEWHzej4SkdogyjzzYyYL464771sbadsBt7ea3cNMeaqeu9Aerc",
  "key31": "2g9fZk8Pm3xu49qKcVy5Vh7RPbX7kTnz9MXnjbKEjVxgJZhgeNctYVqc3bme9RrVTjPmnVZrVMxb5Bi4XUSa5Vsw",
  "key32": "2SEKwyx2iop4YxuVKA4bfb8521UXvyTLa6irGAo5Lp4AbzLXtC5pMCAZAPZRfcK8Foehk1iaFPfBPvWjXUNnQkxi",
  "key33": "5uhvubitbCE8C3jYLVKR1XFV4aJvErQArdZsqxCPx3CvcBhouv9dVp1JcCUjNkg9o6FskDsY4iG4tckQ1Aafrw4w",
  "key34": "2urH1WzUsLmDcfSzbzU4UVtGHVGi91DLQDVp1fok2PviQaAffuMKbHbTkpoYXMkAmWsjYTmt9iC7iEYGi3M6Aa4t",
  "key35": "4x74ufuYfah8kAffStvyAHSLmU1VxWjFFcfDC6eoCaS2TJLUJ5eXsVLwtVLer5rjPLzbBYDyB8b1nBC6shjJ6E9s",
  "key36": "4S6UauAaJr6cbpYTqedUtJyJXZmR81pDWHyBkkrYXSaGXtY9kwM8WoeJefRAWYFGLL1AVJx2ornT2iCjR7d8vYgN",
  "key37": "4epKBXdWJ2yJRoGRxduC4EMGzsnhLrEcC7RRVjzRQuYicCKmf3zP5XK9EJBxGMjzB67mDr48WvTgtywPkWCsx1XL",
  "key38": "3WBcUc6fjqorpyf3gRKLLajj4inLBZQspCDWUndTeCVsW7wNEMXBnCDERRJPxd2z4V12gMHP9NFPnJRY8xKwdgjJ",
  "key39": "syMFWzg9X7f698fdhEpnjo8Y8Ax6hKTdubsPAm2cNCym65yKVFnNNqYAehwmAM6y8bEw4NYedLaRrvCFKzVnuba",
  "key40": "5y5vNxZW5ocs3oYN33UHBJroZWr3DN6ddWvTHFP3uYgo68c4w71xR8b6ThwKtD6b8K7QrSzUFvAnqyYzxLRArMoK",
  "key41": "24Nj88FLBgEUPcLbewfvQyALAUs2YLrAWhmLg6CGSuCYQSKfqVZXn5vUghc2c1QMc1PxLnadxSPCpRPEmpLnLnSC"
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
