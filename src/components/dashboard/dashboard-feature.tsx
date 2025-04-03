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
    "46bjVfWr6wY9HZfk43uDscU5KtpLFtFZhk22H6wGv5MY5kDeFDWuz6L2vFve7UgoVL2V6pGAd1BcfSoJ2BR5Wv7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gpkxbtAX8Qi5juXgmdsWBoegK6Qf1S9L1BjXcLzidohxDYF9136judpWS4HGLRYfxXXP4jbdsDVs8eKwX2cyFhd",
  "key1": "44W86NQspaaMUVHhxpGjkeTnxMhSudCK1QznDBMvUpXp8MughEJatczchVV2Fh7RJ6oue2KDVhS3v7gaD8Pimt8E",
  "key2": "dbQ8kP9tuGdeLEGbttXh8aPdgmn4AKKTz4KcStKn45chSmoKm2ZxTteRz5LHa8uaa37wy74gdAev7K4J2nmLqVV",
  "key3": "2rFTkADbPsTZec4CKgZzkbNBSucpjjjF376Lap8iS8JDbWV8sJPbw3mLyeh9yRMM3gvYNRsczkNVX4E2SytagMox",
  "key4": "3z3BZzvB4kCSUmgbPNaYxeLsXXpuKguaEn9p7UtqYfn9oHbkBQidJdfU4H1jdfxK7GGhzx4DfrQRSxhZJyvZueST",
  "key5": "2U5hqH9QXbjawWpHapAJH3wvJkh6Nj7BwRqoq76n9cJ3iocNg38fH9YWFokHLfW3CwNUVV4pWAnSwYybthAVX3ip",
  "key6": "4dRWpBCbsa2C4jcWXA3dSJwTfoMc7Zowg35D5N4D9boUGCwdPtsTcndCLuhMjVJPxTmDSxdYqwJyFiCtRmeu2vEk",
  "key7": "3jkCHnNhuqmYDndXEoPm668ZnpMNPzWb418xW7i8prZpP6j18MoZtDMPsKFoq12zdCa2ddPsurTqW86B7VstMWr3",
  "key8": "4c49gzJGTsoJc2h28SdWwU4S4TuBvu23AStHDRQjUNZrRkPVpUGeQjHy2H11fLD54yPHzm8gUMoo8LMwHdmLcC2r",
  "key9": "4aauPCTvzduN8twdEe6L6Kj9fpfSi6tYaNBGTh53ZN1VUVRXghieLimnqpaTRqUjtDM41h7XNoXLbtRq9uJ2pCVm",
  "key10": "654HqqUrZ3YBa7CKohh6AdJWWr7YYREdJMw7U3cPPFgpPwV4oktA2QtpraxrsT2gwKXKTGX6N7tL1DpyeQM3YPUB",
  "key11": "4GSXbMVhUL19nbnc42WDUo3o3dUwzZKt7bQcBdyz7Vedtm31rgdU8YadvHQ4cEeEn83s1B46WwjCrWpS2Qm38Vqj",
  "key12": "2iBAfPfPpJ7X695PG3bhQNS87Tz8FEA6TXzvx4TYMjuEwDv4eA96ixeVBSVqmbd3WXiHufYh3FKA1BpK1ZmQcTmb",
  "key13": "ZiZGZ8Ta9Lwk5TY8JtBDYuzamj2qmK99Adjtnx6oniBGuMbiAsJ8UgZ4AWuMStyDegPVbbE9Hu2TUxCrx6wgkSD",
  "key14": "2pUitfau1g4TCnoSb2kT63uUGU8AoxhdSod9XpV9UrrfhRQ9bxq2z8XV87YtJpGMMT1hwY1GYn4GvsQc7BAUz8V6",
  "key15": "b8g4euNp4FXyXaoCTMTr1QS4e2ZEKVskyvEkvxcfuNnCtajcJCPmXWkXR73QLLGivr5KBiXEVA7TUezf7VpvTd2",
  "key16": "5V7Ej8D1oeAQjgK4KyexNr1gpR9SMaS6UfkdYfkMKEfnpPax6Sr3guwgerAaPgkWJZxuHUjcdGUKLhUzwLTXGUZK",
  "key17": "3uf5u5eYSrJzCN8tVGkaXCRgEoV7jL2xAMCCkjEnTkBcBLZvwBDQCib34yh7S8fD1k8b4X55ga19MAeTGxMzMsp",
  "key18": "2kPaxfT7d1DYuHq1C2McmupvN1TnpbEyx9WpKATB8n9kY7EoFmDpXy2ja7Xd9iAP8YiCga4rmaThdB1f7NNFte3m",
  "key19": "2Dvzd9ww6ujnPdDtnggVfaRa9qZSPNNc9iQqCs8WppKJmEiZPvM9rwmxwreTPydt1fmoNCBYTxuVsgrKzPQLYNFk",
  "key20": "5kTmCLj99KUy7PCDFSxNCs6ck1Y6gPafrwm3uAJMX9D9VvFpSuWZJY2QqK9PBjc8JnSAJeDUryB5exj1z9p4CMHr",
  "key21": "5hUNFSuuknELH8tMJQEoRd42x7Ue1fmNvM5F6LgXTF81kz6Jykrx47FNWvHAQLnMe2Zvfa3jEgn26ZcxaqmvxVb",
  "key22": "4Z4DRprSisJ9Hmd3SBss9nJ86MZb4oLwxWZjrNttYx8RVkYihKmzLqTbMvQ2VYioh6kJA4Ct4fw6PEDkQwRHtgDK",
  "key23": "3MJfJUNVGD3jDP1riyvd2xdCUmJAU9HyJriwCSVrAUuTnhLoZcYJdzH7MR1Djk9YXaCwKVh4qqqdRNDNreCt95QU",
  "key24": "4wq7caBVUs4nXa64JpDsRgdyUrwfUjTwFgL6bkfPdVgtsroQ5D8tGaugUn6wPo48TxEpwQt7GDMF5sPzvcAvG5Ny",
  "key25": "2D1SM1u213rPpVR4aW3FSSjSL3ErVNE5xcsQbQuVgtBA2XPgx2J9eHUzNKqfdrf7ocuJCJyYHiCHv5BjUFKSjy4U",
  "key26": "5bcQgdPnSQjG3qztMjkXpLmN1VYjB4wEHv64yiGXCzEVjaqHZFjG8YXM82z2nmoP1jbHWNGQ8cQLUiQGoiVwiF9w",
  "key27": "5fCQxqwzJGuWn5JKdr7efiWg2rudF3ix1MCFJVwEEohcCUe1MB47wx8KUPcvAr5fstQ5ge8DFnfbMk6ECBDsCpDP",
  "key28": "5B1ULsmLgzWcdDBG6GAXnbawNgLRLgoMcWdCQoWvYACkvEph4jjcpGpruDLJBQuLpceii12XXywaJoaCe863qVmB",
  "key29": "2vGdcsQBGfk7ajEw4v9KLrULT7cemkWNofx1bko8GYZWm7CsVA97UhXY5TGpV6ZskbXpyhC8Qe6yxuWyjxhdacqW",
  "key30": "5Ky7NHmF4mzS5GroRBNK52ugnGhQfd84xTifwnm1AC2iYkdjfCkujfVifdGv9WYgzCzj69EPvYQJkFSGsNnQi1MX",
  "key31": "5ihcTAao1GhdYUP4iVfhnV6J22W8wbZXvq85BqL98Ha9wrgFFGLSn3mQLDKt2eML4DfLisvR4svhmDuDouGDRCGF",
  "key32": "4xZZA9EFtL6hGvTTsRsT2daT7bDYrmemtxWLRXp3NkVb1rqymN1KoRbE3qdWYfWYSa1tr5bRJGCFhpgJ7hVKgkzS",
  "key33": "4ZUAYMP1Lh1f1k4oc1XuHr3gnszti14MNvmYeKadBtGCMuyN1UraiEPbSNBFYw6tDd2XPJnow8pj5ZUTMidymzmi",
  "key34": "64PWYSz6x3RRLTAZQpDkNWxDyaqDcmHWXvWogB7A6dmmBh29uL4SS6bgzVbZdqKp776DSp1cqbDDSuBoNkA81GLL",
  "key35": "631kz4J2yDCZzxzLrbtV52F9aM8RSpHUEue5LdPjtfoNZfoJNzH6E792t9cPmxuoJ1eKTwtHx6e44LFwxF8FdG11",
  "key36": "3WBcsov1nJzaAzgpWTHb3Ewx5vVhQq56fB6vMez3VpfByYjjmmaFDEVcT7WNj81JPmbdQr7eqfJG1DTYLr9GHYTk",
  "key37": "3kjT36vPFSmzdMij1ky7vX6mn1Pmxig5WG8auDuiPKoRsUSNEF9q8szWurBTDfWjKus3P32wbHwbYrEfqTLF1GkH",
  "key38": "3NcmT52nKV65VZvw7Mup43qR9GVazdFYncwhE86kiFm3aC7yrmXQYKpBCKpXpbBckDe2nLWU27T9LUvhk11yZiod",
  "key39": "54amFCZMEe5xNELg5Zu8T9aQrWgtbxtQGdw8UNQ6xHaqu1XBgcjkqzaYLEGzrURsE7HsqHMwfbcZzFaG24KGNPtp",
  "key40": "B2EpPwRtu58TtWktZCNNE6FT13yrBm3FDo3xpznP9jjNhTndcFVKE3dw2vktMNnTgCJ1aRU78KpV8Na2jcHnHcJ",
  "key41": "4MBPrqxzSSU7vAFqqfexBdiGw7c5A75kn2f3PxaTxV9mP7LEkeLAxkEtnjd2jdgSwEy6aMKF45BDkwZpozYgVNj6",
  "key42": "5LZgmGwCtRBWJkYRTnmb4vTSVwxf2HYz6FyyYaY9WAXthi5PwymbEsoscyE8qFCzCcSwAmWXe9qz66ca4BpE5rxL"
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
