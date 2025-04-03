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
    "58f7zxhJyNvV4Sr5zuLg4keQknRc1Ft4vXBR2nxdU8m9BEaEJJGSdWCseKMoFFvgoShrCXYT4MWuxFav2vhZaNCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nk9fjgWHF2fjQDVVFskJCLF3aKd2JDocw2jcwsPh3Zm5AiKvdpK7SWtpKBj76Kio9xvgUZSv2zkir2b8ithjJo",
  "key1": "4TFutRS3kxnKfUyyNscE4Rbu3bhkxLazTPB1TkXJfXgxfzHrchwZk947nMYqrruhfDC3G9xd8sPYKEGf2yBH1qbn",
  "key2": "2apTUt4Y542ARGELsypFHfravAkjS7qhMLKtBbkQ1mVuffoBebf3dyyKTpmvy9eeJZF2uVSt4yG4FdLcrxShUApv",
  "key3": "3E6sx1wL15RFQgtjFffsbgTSVt9PuhabhDw4iX9yiAHbQoz4WgE2N5vBYNLkn7FY2gFvnJUBg69PwWWHpy4qPktE",
  "key4": "2wZCEmsfvAZBWfoBTETiHa1xoHC7dXRyosFw4B4hMNZj3oNCwRYNu5LW6CG87PNrEjSp9bRVGFDN2k3xfpmZstKq",
  "key5": "3quC775wm4L36FtJCfYSCHfAUViWmekEJoumucFSZGXH2xt42hcREiYCseTRDA5tRTfHTRGxtj69GT3ijvpTGa5D",
  "key6": "2ph3B5jXpA5A4EustZX8Xr2sHSA6MrpvVcXJaDdPQ4DNM29cFuSS669SsT9G6buNENnaX3p26T9jmyErky9WP75h",
  "key7": "3tpqv44XGTuFykjYD6NbVuYuiHXZPbDVycK2fsbxXL6kLi4Cc6X1rCoEhRXGr2U5sgTFMVjo91EjK4gFMKt8w4Ua",
  "key8": "sdqrQ9qTeYxuUDNmtpPFsKNttsuU8tLDK22UfuFL1hgXdNDaFPQSMjwAnvQmtH5UYRop12m1janFZUq5R39N9LW",
  "key9": "9gHNt9SYSnB8vLUjFCXwCSTczNUZfeoJY5VnebqvcJpe7oRYZguJsKQNAnSwdsG2tfjDhL6YKn1iVv4VE8QhzeE",
  "key10": "3QJE2McZZV9WuLMHe8jZzF7akPDejJ2ZJ8PDW9WpUttcAD8DFAXbpFXsezoE6EA71W3waKKFFc8QAG3pUKnVotvg",
  "key11": "5dBmHgFZAF1hf2wJjPBDZDyDzdvYMnw3twtSMs131kAPinwNgXQonQNPGwiVjtRHz95qQyCPTusAftLbkXMrguPq",
  "key12": "PZmPjrreZUJ7eDyH8Wmxd6oG6DprRs6tYvsJys7V7PvcZW6dG2eTDfdVyvrDGaS2D5tA4XWokdzKYV58rGaY7se",
  "key13": "2jMWyPhCh7mLVqkQA8BmX28UKAcMnUibKSMpJzhmtFXUUesAMLE37B7xqfJHhzDoPejRpAyNotM6XFrp7JybBegZ",
  "key14": "2askRDHFzFX3RRVjzYYRxu62ZiUMxu4hCYDSfg2D4w8PQ1FJ3Zw9y3ByswXLQX9MSpSfj6V9UMabfPJ48CcQ4YX",
  "key15": "44SzPPPoqDSjzQpMUC13SEmXzU3YsCrErcXY48hDsjAmETKMjrKfWXh8MruwHRsBCGNtynen5aSXuGXnRB8hPRXr",
  "key16": "3f9TCuQC3HTyLxhXFMfr15A5PnBcpimDt5Zn38BBTSATypncPgVTMxQCWpq72fxtvfbbZBBy7kBdLDjtXgZBnMB8",
  "key17": "3n7drbXPbsnU1nTMJNr6BZNGSfHboqAJ9DkRhMZ9FBEcTzga4MRpVVfEFSrdn997mMQ21crStJLB8RmXegvqDMpq",
  "key18": "4p9UjzBzR4qGvaQirptTdzwE7Z9djvgwKdJLnrq26gfbthF3eRxFtLALp4YM63jbs25V939PB7Z4224ScXRoo4Eq",
  "key19": "dANE5ukJeszXYQEuSrVoa4BswThNzFwo6m8GWSBZeAr6UVFAAjv9i1Liu75qGxa2Ddsf6bbL8Z2bejvUrUGsu3R",
  "key20": "4iPuR58WEiA8MA8VPd74LuArHx8pAcDHXhb731473XaEcskL285ArKLt8eo6ZdonVDwX6u28jb3tCyjyQfaZM5VV",
  "key21": "3FdJ14rEExnicPgGp2XC95ijp862D6RUefemanopCg8KVz8iHmnedFmmqabuPB9ptZSdhqS4BTnaNMuanaoHb7GN",
  "key22": "2UnVZAza7UMxAhiv4AWXbo8NMP5VGUL4w8bFCjE74hwHR2sHcANtXeTtG5DeZ85K2PX93jEvnS9cihCAcwSbW5VC",
  "key23": "psgsTvkKr1qRSqEEfs1zikSvCuuxRrAsQP8HcsRsZwBjrzTx8TxGHRhMCvwRVEm5NLw8yVgnbWuhuKa4x5VgsqD",
  "key24": "5PQvJmdtvaDHXZxWVpEeu99G1cZHwJW6Cxz3fAasjNPzXy4iQnuSymfEXY95BdemwKcuFbgcWrFesNftkRA4scNH",
  "key25": "5BVmpmxGmAN8KyUPtXr4MJRSRCTH6hAyrpX1Hoy8bvioq3Jvy5h56mEqGHxHQFwxRtrQyLMqRJgofJJKQt6xxihF",
  "key26": "4GQX5jmQGknwfbT3Zp8LUsXj54hycxbNQJLs4t4Loo1jwL5b934ZjUScbzGy6Mee8GBWpc551sGSoUt43UY2U1F1",
  "key27": "7myb4nKo8AriJ7MJHAgYjCyYix6xS49Gwc8nW99x83qfbGJtoFGqwSacWAjgnodFKiKBuWCaAwv1wSZTuJb4RAE",
  "key28": "hac79UptW4mV3Xg9BPTrD49ZUVUUnR1jnGfG6eR4kfU63rgnF3Ra1B4cSZzVZp42nNkbtiMPwDLFogzZXPKoAC8",
  "key29": "2TKX7UazpoumhwoPJH3suFY78EUzHrZbE6LByLw47BVwKCd2MQ9J9uZr2oyZxtFphZfokyJWSTsdEsau7VvscKkZ",
  "key30": "ujo2Bkzw8y2n4iV9XPFsNAVPyumybDVaZSV2Z4iGjJuPZ7JVqedtqdD9S4DBX4MXU76RdGxkRoJ9Ky2UzwTcfcf",
  "key31": "2kM1Adwj3odtqTDi7QP8AKZ5W3rvM81fSE22BjC7NDsfHngTS1QuNHQXc8tMZGqAJ5rNyfFy2DsmJiqkie3NxhYW",
  "key32": "5F9f6RSmWHr6sCs4BrdHYs8AnpD4sZb8ddUJAwj7CqLRekXbpRkdeAizaqppGWvvhYhqk5eC9TgNNGjX6EhvMHf7",
  "key33": "WE27E73zANepHGVF5gPKwdufGMLm3eMaYxBPmcNJzGQaPi7DpsR7ZwEGbH1SvAyYfNMbDiVQYx83c7mYn5SL85e",
  "key34": "246sPHV9zYM1WaiAdZHfRWYjUJdy7x2s99DzhZLNurEZyLFR3WHRiU7SoWfda7Nd1sekujee6vHceCZXyQFjXuYc",
  "key35": "3xxrTkFfyfA3PxNvcmW3Zty3nA6sq43FJjgWP37RufJ5QWuJDPUQViaQRhByP3S7skCwoH95LtNRDKDddjTR4bxr",
  "key36": "2zQLHHN7NBYux7YbVGnRAAbg1wnD2n77rRwyNkFM8Ga8yc3iYw8y3BNT5AgKmBtAwaumpa83ox927oBvBudUTZcx",
  "key37": "eEovrJWEjVAwEsMSE9nuhqG1uLAiv9c477oer4kLWPrm691gLx1PqcKbSQR1CchXi3PtywruuWRLFEKX7dnMYsz",
  "key38": "5oeRZLpJDcda1G4ZiFTetMpntfzfyHGFVYjgehBxe3ks27MXrwEWsU6AjikGJdnxNErqvcsizxxeiN3R1Rk9w99x",
  "key39": "3g2k4ammNnCDAowgbjHCo8VhThK8AZtDzTH5Bn5Kbvh7ZeWRYrtEFZEytN7MejW8y2srdH3ZyEmab7iuJB1wZMck",
  "key40": "2F7mazBX5FtTcR33bSM3VFzGm8hE81aGyrvCyUtc8bUeYivyXiAHHszqAbbAg8uwaTfY5EiSSfJSAm2ekLV1S5LV"
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
