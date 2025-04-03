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
    "5k1b6M1YssrUDSgs5imaiVW53iBqBWDXo7cMhTKAK6ipxw3LZqG2e2NcXnkmLLv2N7zXwc8Rh7EHcpZajHWF2P8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SC115uu4fnpbx3USVS59D3prHnHrVFXY6bsoWJkXDtKmjvBaNCUsGH2vPhbbuz45ZvqsMF7TpcP5aG3p1jddZyM",
  "key1": "4dWUM3aoELGexXQtrEFGvCxtjkmDhKjW36SdPukZ35efpoPGycQ7GHKAcBwRZMynn9EoPciNyhvYDFngseRMD6uD",
  "key2": "3GUkAGzwm4wrGRPPr77swHBD9znQ5H2XrgpKTA94VLnDBpzomKscZqGnN3J6ML61eLoF8EGnhAR6DKPEd1M3UBTi",
  "key3": "4viPjwrxNiYX1aLueMiKVo8GWnRSuh4JKRwMGZXLfQjUa42XpBVinWDiLDvYg9k2nPc7xRdWB5WN4XsyWBBKynkL",
  "key4": "2cRZv81wFvwbAQwThNgGoPn3X8pQfU3caLPvqUU16xBahxV6csqyzGe2Ek1DXBBiPUunqFk8hHaK1czMCu5ZGSZh",
  "key5": "2reBZK192s9ifsriomYnXn5NQ6jNyWPZbh4DEnVG1kzd6UNu5jyJbQA1x8ZdhK6f8h8z2RDijJmHa56WnTzwP2fD",
  "key6": "4YCcJYQuHfu7ekKCARgTT7NpuiijZAWAwFhZHYT6Jj6gXPfRTKsGNkqespi5rrTP9tWXe1toi6GZQwrzW465hpJd",
  "key7": "znh65Lg9aAR51vNTyTcXasx27etp69AhXxvPXumPrimk5aifdz2HtoiTCgumnk4LXW8Ahd8Yi4GA28DT9HZWDLL",
  "key8": "3iNrzhf5L6Rx1xX54jHQa7NRmERhiADu9t6XuaKWanncLV6tH1gVArZfwxQpReVk262umq18WWvetjUXxzxNmnW5",
  "key9": "58CdwgGpysVPaxVtyGfFzruJTfKgP9Kj7gsJkEQtfWY8Z6a65ZRFdKiSyyG2uHm7Sw8cAnYiqbA4R7NHrMcyWw7o",
  "key10": "2aDkG3ceWjpA85ddPKhRUNW6mH1AcyNuGYWT1bWEfjGtmRmjzTMSpVNk3xcnArXpdUzjZKxTXsR5qdWUR8npp9BZ",
  "key11": "5tfciqLRWiXeYA7ViGhXhCf2Qzte3z58R6HTY99uqBtkLwxKtauKDRXaJGQ63reSM9GM85NdJcsgucX1LNRWEXpW",
  "key12": "3iX3X3EtaTR3QjGiUUsBp9EfNPakUFb84cKy3WqUAkn4yiV2oZXYggQWj9KhrogUREPeGcaxFxX67DfvpJP6ZbUu",
  "key13": "3PHvkGAEh3geJBkCjSmCywQoEGDvxNTmsJ2cpgbKBXohsBwPVJVT91WrfYTVFaiMnsBSzDAf3Wn16xZhMhaQKQ6m",
  "key14": "ZyPCJLkgB53sjCmqKHm61REarg1yERYrpayZrGKeiiJ6inz983GZaFMw91EzPA5LuXtzRxkujCzYdz1TVPLqNwF",
  "key15": "5yXhNuqwdKCexU6ZAdY2zrKjckbaapUo5w9ddEqrQGQ8p12FRMFFFwg6HqHUUys4WkfQUpmnF5Ng6BHDoF9QZjqk",
  "key16": "4wBtR8CDPB8o5t4bpPa4naMgJAdQrhNCrE47q2dE8y2jFh8dbKvNkqBTAkRPiZxNFdsxeBAA8TAUJ2AFAqbVZaEq",
  "key17": "5KksmA6ZR9qnqwUPLgbCtZryvsLHF73u5M8jj9kaRZ4SKPimmYMjjQJgCcGwFe1T3Gx8ZhrkSiJTxXs85NUXBFeS",
  "key18": "AFiByeJegwScFHBoFyVhGVbnzfyZEtCAf1LYbqTtBryM47f9a7e7gyXuo7ngSwxULCUePdF6gfJsjw15L3ZJ4D7",
  "key19": "2LKFEqrGNGWUvyTNGrnH2V7gs13SszUBjr8wo2XQbB6532CCJSx5qZBRhQGb5D6zgrfrrWkMoXKABHweb52rgRCM",
  "key20": "5Wmp4YDJ4jGk5vR8MaNJgtHLDBnG1nhhu8t7n9ECxVwYBpyAntaMG9RDRNk3gfbMiQkzQUnyitPLhiP6zhCrHgR4",
  "key21": "3x8SLr4QvXnJfJLrj5j49Wti5Vj7kSNzpPL3nVitK2Tdr3VXz7cLePuvhD9dhMTzZF9Gxkrt2BQpSRJ87VdCHDWv",
  "key22": "5azLefNJHvxTd2E3KB6QLrwPA7HG7eHHxjfEGDtWWmCQwNW1oyWUofQcdZawTgokyx5A9bCDmL8ev98TY2E9hSsK",
  "key23": "5pbA74aJgWz9ZUdtxkmg6k6EmwSGQmPfxL3WM5ETEW88vKcTdqU9wcTygGDwuDxgaRLtMx8TGWFcJFHszd6qm4kg",
  "key24": "3whAjA3tBaYGSvQd5ztVzCfPNzuxV363HTs8Ed6KdmJuu7J1TrgfvNvd9rn56nzecuhcwdGNz5XLxL4VbJET6X8T",
  "key25": "66m99KHwF7GeqLdCcXvvR4JNiqzoHGnuiq7xob6yJPZZTQFj4w54rpbYsDjvgLC6AdLttCZXT1fKhWUrSjaXsRwz",
  "key26": "22i34QgcDABss8fXQsYdjFqqge9StxxALDr8s4n7wdP7iCqTHx6aT92doV7CnrjHqvUaXcL28UkMr4ktRdVsbdSH",
  "key27": "4Vd9bJtTM9fP26UKXGRNrqbgsRfvjfjaEZoEBLz5Xr9CTwoS9LXJx3P89uHbLQ6YGW56ZuXJKdw7fJXNiVpUhAQ3",
  "key28": "37fYFEAYvNVeXTZmtpiL9RfWqu8rxukk1JVz7o4UKw7AJ8tEYFtRYAxVVNSpD4r84pV8jDYhrb4nW51qM2H4B85p",
  "key29": "UndJ6fEbKv9y8fmZUzQJZxXHQMnVaZbtT9EeaBSwXM4pVKyn6Jxtu4LnVbJfdrFFDCHJSUMrE22dLrXCw1WLPk8",
  "key30": "3YGdJddCVpLmxEtd1X8Qyvoc7G4v6ELkMG4PdoWCFYpXEc5VX4FiD92fxQyRRqNyKU1Vcw5yqYNC5485HgUKSEAF",
  "key31": "44LnCrN1Tbcu2r6uHH6taETiBNGkZrAsPunyZE4sNGJV3xUEZVGuSFc8y2gDQBzry8EiL3q7VagWRuW41msdYfdm",
  "key32": "eLfZWHSKSHb5fqcR3o7uSP4vNrLxQTb4LgsaUgkX3myBVXeGnjADCtTHnMUWTZ93tiYe23TA4i64oq7iJ1QwdKE",
  "key33": "VqhzYVDY7FCubxEYKpB1LxWMfDtZrDE1HBFkPE6Mn2tAAdr9cPLq4evKp12D2QCNkUB2GB25LoPNA35SVB3xmrz",
  "key34": "5CoFgRhvebsAGHHXoofumJgqn9i2MCDwfzNhSoG5J1ShcUmtCy3vmptyRNBgCJLg5KwZWShTEFDMKio4cj1qkTA8",
  "key35": "3fxAGqMHCCNh6PoUnnKmLJK7mLCaix7ZqQrkrUgbghTJgxhAavCeeXS7K2yLQLdiHAoWkamHRP7MF8wyRWtuVTqj",
  "key36": "3jdyRFP6Cq8QnNXFzWKMHQAA7wSaM8JE8C8ZVmhtHBfwuh72iXVxznn51t5ZMrppumbuxDhekxjgjT16LbKHUgA1",
  "key37": "3Z9Rq8q9JKVpP9rgaHk58dBr5nzQXM9FRxTp6UwZbyo6FujArqFhwzgYMte31co1gCiXkqDdJR7xc5QiZ8J551f5",
  "key38": "2fFc72L8KxK71UJ54s12wzoJ6bndD9DC2rLB3FnxSQhqLPA66w4Zad7ck7UEEojjviEEkcRjm8e4TgPMLCWbSrym",
  "key39": "4jxk2NJwVE31jVCPSMer2Lfw5AqvpsYL6cUymR8XwkjbnKbWS8htRuDvzYuhYHzBrqueVwD5N5ubopDiZZWadd23",
  "key40": "59QZ7BwZC5PbPPna2SVnep1v3SmVGUCwVowM773nX4deLtq92K3tFXGiodZsqK2eDRCdYpvzZ4ZvjVBnfMrU9qN1",
  "key41": "3RUMAzKS4L1Turxd6f3cCoh1Tmfo4rbGax11BrcNjKyz1ukH8WC1asjWdtRoEc7u5kM3dKvYAGkek2Xj83A5DbT3"
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
