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
    "4zeeU8rdtzYAHUNj73ioGtJ7yLtnrKRYLW77EY64sqLzvHE2dG3b2xsr4qHe9qsmSpDWxy56V2YHTRcp8Q2BrUYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SunC6QhzXBYFL6w4GRZvHBYuvUtsrHcbRm86TBhQwWbuPx3qSz8Qr3YsyRjNb35bhqHM3BibZ5j264JTXmobcxq",
  "key1": "4eP3F7g8EUjfA2P3jepfT8aV3HTqE6u3z995XcUeE5HZ2MPFC4B8Ki6i4Xzwbek5FkGtswZ9VJKvPSYnU8HC4Z2g",
  "key2": "BLQ9woYNFSFKXpwL8dePcfx4voV6ZK4TB3rSRt8CuT16FU9AVJ3xuomwiE39bu3AjHPNoxspWytug426DtB2FeT",
  "key3": "2rM63RANNjEbB7rywMkFthsthmS5nLAd3M85DiTS6zMbv3xMdycx2RkK5D66TudexwpfkB9YJPzdCMWKWEin4ecp",
  "key4": "DH4nr86qvz7moq5TM1ouEHR9nEsuQTVT9PehD5xdWjoHG2btwwQ25EJJGUHqoB4z6tAEhD3yQPgch9FCABv3z9M",
  "key5": "5w6KfJE63N47Tgs9otPfRCRngnfp1aujpWjYLkBAtHoL2msbHVDvhm1hBrxYJdJCagUU54sAhUmLR8SLveMogkTL",
  "key6": "BpixvcxyAMUUrX2xiFbhr9QySvbi8ywaVDJ18bQjg71TDczAMBEnWaBHvggdVzcGQhp78y6XjgT1pBRuKH2C45e",
  "key7": "4184wMbFpYTT8hGvw6goR4co7SrfUXvSjGUBXVi4aZ8JaHgKRHc1i4pHB7twVnuyiQtQFYotuZJv1aEFRSFkV6sd",
  "key8": "4tPwxcW7KGBgz8JmVFoF5KULt2Vj9gkViu3JVVPVwfSsDivnGQ32rPLjiLHAn4YBCwQfkK5hvDpLEfzSoj7j7GFc",
  "key9": "4Yox7q2t9ophYjm5esWc8TBL2ZzoWrGkuhCpDvNPSakjMARDnfhQsqJvvEuYec3bT2KfHHmHrYJ9NcZxYqV9PpP",
  "key10": "46hMFZGQo7wGcg3PLgxJ2cnArzSHbCDF3RWm5G5waN8zYHWR4MJsmpcf3o35BSLpfvjpXnj1AUkuQ6nCfsfG2rri",
  "key11": "2Dp3znEcUJE397Lg3WstoVimMSbx4zjAXYGtHujkfijiWa5aviv545eSdLKtNTXgnqbnN7eG5r1HVMAcgkQtgV8n",
  "key12": "rwtdKmhxAitSe6sGBtSHjDVQV7CKimUfKfbyMqKwjhrN4ehBCJxa8i3YoAgjRSphb48E68hFe5Sdr1G7zhYPSpH",
  "key13": "257hgomePLvvWUprRHE99hQqDk1p78DUap9m5keF9LeBU4ozpy4GorNgY41m66r24AEmxqirw4DCKKe8c2iAxqXK",
  "key14": "4zjTLUgyNgiEKQiEHNYFD3rEmh2iz4aTC2CaVFoUUJ3gN1HMgiVcxHdavehKq4NboDYKem9SoqYjKkG3jPU6D3nB",
  "key15": "5DPG3yUjLzhRFc5vWnoWcLGdFvZRJdT5QhoN8X45om4UMBz7Kw1SaCLMCXqeRukDA3QDqZTwMYFG9TTpcBY3UfjQ",
  "key16": "5WRfvdqxxhWS6hWFNZi8XpvcuDhTn31yNxtqqyXqHkY3aSy8x7XnKGdDAFfTtPabJi9oAAUZ9Tx5usSsUfcvrwaL",
  "key17": "4R4GbPPeQmoFKPMEZ4NwLRMC9CpogBKz3JnHDnFCA61AXe1AngQLPZ2YXQ3F95n1mGd19179bFQYk2uJAGZFpVhY",
  "key18": "4zc2GZn6Dr9xEJR3b2pmwcizt7d4NwC1G6mZqryz3rxofsL34gWZ6peSZh2rSF5P989tqfkyjiRWGLfmV8daHGYZ",
  "key19": "5f8iRRHPwuDNU3GXQb2b4cw9MxrC82A5Y4yRrJgmA75bKamFzjN1q7rzXtrP39SBb96buPGLNQL6nnhBUwAGdMwe",
  "key20": "3yDjGbNHGXeKKeidN28yK5tJ79yoqdqVi5QnjGh2B2eNEEEig7mxf4Z4DrQoJRKW6ajNqc9TwYeGiFGQia3DyMw8",
  "key21": "2EXbWsp3bpFZ6YwfMkvGRzuYfK95uC5pL3rVu9L7Ghpg5FPxXQDzFzUATfuCMcKt1yd4xjSsgXYZ4yLsyQej4sLM",
  "key22": "4bCau6BSmjWY7aKpyLSkrNvXot25Nq8VfikqVk9hnf18dJAdQt3Coes2t2tui14ia3bvqNUJHqENhkW8yqe7kVR8",
  "key23": "3Vsx7HYeZhX4dUFHyAH1GnHMw3xVmQses2vC3kEwHTPWi7MJwjbNySnrDg7RyEH5633HEU7ns3EnxgtJuFaiPDYu",
  "key24": "2Gk2KjmT5fsKTR3HsT2y13o8bUzyb2iZ3X8JRgiM2z36HhkZ6GFQbn537T5bBGqaGWNmBwgb1Liuv3k1bkPV4iED",
  "key25": "3Z8HHU5qbvio4EbVh4nYdNALb8XjVou4MypC298HjQuPhxLAq2npebGaFqQyx9c146dHmZmsD4GHEra9PEPdp5K7",
  "key26": "2L8zZT79eez3dgw8TU3PtvSmZXbrbgKaFmTiSv9ZCmcYGs4HobJBaM6e7UjkYju7XnuNurSDmnUCFsQwUemj4opg",
  "key27": "39mjBcVnBzAKMY4WxPkTA8qjsBkAPUKWML2F5g5gtpMa6MGb72RjLh9TcEzQNRaKkpMdGpsrgrrEGBr9jE38FNED",
  "key28": "3jupkkUcKhBSx5HYGfQLTHBudsoEfdQ9X95KGaJH55gksaPn4qgYxih936ayfazBrLDfSn9buUSFFn8gjRBDeNsd",
  "key29": "5hjuzvN7PmunaJjWtBkcfFDf62axduJ4YuVcSGQ1Pe6MTpFZytYGxaW2XGNyV5eH4BJoBhzYphbCXJstaA8qJd6b",
  "key30": "5TmqighsqjFLFmssihSuvnZft7qXCFoXkoEdmoKw7u4pqHLgW9jL9DsBXGQ1p7ifAsGkJkEeW68GS9KFsiybZaWB",
  "key31": "4eqScLrGttgW4n9MkrammJ9qwqwwmrtFAg4Xw7iNCcinowTQGUvH1eR8i8B19kpMcEYdJPKZpUoZJB859Beo5XCF",
  "key32": "49uLYBF4s6F2iqtiTx7LHGteBAp5XSaZcwV3G4zjJkpmcDvni58f1ToN7YiNRr8SNjncr7VBakU6PJ8Mc8iqqCgN",
  "key33": "2UtuNPVkxs9ife6Xaqx66RxPffGmcAW9jktMCqx8E38jF17FjzZ6i9uf2giVDxoKxxPsXQ2igNTycHQs6c79wtno",
  "key34": "5E2vM9XaxwreUYuXhQxmmG5G5fPju38xcqox9JeLFs8TJDEUhQnqjaQNvXseLT2yzBe4wPkDe8pv4FqbkMJFmFRg",
  "key35": "4eKuR7oJuBcNEN4oS5SBVeWFoWLeGQngN2d951QmFx1uYy26iForvAN1abHkqTW9DaW4LA6p7o7AwUGVma12Vfv4",
  "key36": "4HoA3MwLbrGLWeL2WHRBgMVF9uBA42upQMVRHZ6K8HxrNjWoqgBPPo8ycWHJe4dxH4RHVzVe4HeqkV8DKQMVzKm7",
  "key37": "4cRC6KqFhc9ubSP9LBHTKdtzVsqj1dqL1dEuiAzdZpkMDT7K23qRWwXXQLdohmBcvsfqsDzfQczsUAG7tBM5oDE8",
  "key38": "4asZPr9z99pdjviJhjUNeJnLh5novoTYNRWjYGwvHVrprVYyXfbxdc1zgmVNj77Nt6fFmviGUC1f39uK2ZFCDNto",
  "key39": "3YYQzMvTuxnLeW1YinNg8J3nHsMvLP5WYHU9H8D5fXFxcEZva1NKNDC9cAJzQmpLsXiRzcGhhiJZWgT7Cr4NAC7J",
  "key40": "3TfNbfZm5tQPPowcQGnhgi73828qDUCaamafAkSCvjpwkVT8F4gA9JwoNd8Z11iPun8ghrRT4JsoxKnV2DAKLCpp",
  "key41": "5zGdpNGGYNLRPpv8uaXqZH9kTRJx7dAG4BvGVikBveMGnATjxPaGCqoYNuA9ycnGnR4RA8jrm75s91CQL9xfpjF8",
  "key42": "2YmTsNwRKyDBq6Xozxq1a4vwLpNF3S8h4nFmXaBJgbWWMVJvvSn8G6rPzBF7oQPcPMY3xqMoFDu8vaFtGK79HgkR",
  "key43": "23LsHsCQHfUhaw3mVdtjFZqNr3pgncjbHiQ9Lx5uqp6LU95TwkH3AzMLc5y3PdgpAtfmK7sZ5tFLL459mLU3Gg6Q",
  "key44": "4NcaA5sxzv7YbHx8cewaq1kbiaSqwTyKXZFpfdXZNUNnF28q6psPbUtNmAsas2xwhzPLaeRGeg4o1cYtjx8nNdMe",
  "key45": "5rhLnneHSdBR5XsWZcUUb3F87nb9yMttHLhrMrj4ZEThqpcKKyy5DAS8Hv9hfHH9KwCR4TCcdNuYTQtM2b84rmi1"
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
