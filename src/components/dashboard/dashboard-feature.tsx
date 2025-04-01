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
    "4cFL9wx51HRQJxMHXCRZkEX2Se85MpnMmNdxDP4UiiHsu5rdeMghtUNWGJ3YVa8pNDVML1qd1ZFyiXMg9BJgewQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MjNBKfAaqSAjQC68vjNF7wdVVk8rbnrG1AVpSPkeTwfhii74DDgYfTGLLJmAZ7nKXDG1rTs37vXwCxF2oQBFMw8",
  "key1": "4vS2j3Qxz1r3vFFoaZgVsUW8fkuY7M9ei3Nc1ZnkdBjFLkgAmxnhSVGsjJrnKpRYDAaEtw2hT8Tzyk1zWaNQnfZ5",
  "key2": "5JvXbFkMvfAUYLqFn1GPjf3W43EzCb3xSiMokB3QVGuKVfEbbFe6y4yqCGpKumM8bS19hBQiiN8eUCj7UdVBCJFS",
  "key3": "5BeQSCz7vWqUZwZqUhtB6LgDCC67wqsLJxENGa1TH6gbac36KcRKrH3DKuVw5URfM9zQMJV2E8M7PJuCNEbtEyrv",
  "key4": "38EA26EdJgxQRffTSMr8WDF9p468nLR1zZwjGavyjXvaTAkBSQ3zrAZDfAKKScriunReeoJ1VirCWF2ybMRKpMPb",
  "key5": "5hfas4wwpTzxu7qhG1YczNwEmzc7c5DptyzVuCFsJsn3Mo2iB8CoxZWJFBpDNaf2x3uK9UQadRaQh6tsLcZbH1vi",
  "key6": "3bRmrA6eS7fVMDZLkszChKkkL5WZigeHGGdt2t3b39ZfgRnGxKApRNoAXv5Lei2v14JCY9VjigzbGry3YmsxYnTi",
  "key7": "rABtiyfC2Bgaea8SPY15pCnFF2CXx9tC5ZhBnGcbJTGX1QykuemUtwzRjE6r5zgTZcQamCzis8ddPZ1X9kNTgGs",
  "key8": "5CNWK2bPsCC2M9osBQQzwLdXKKxUNj83J4xATXTKLUxk76tayRSyBjjqEBkUEojJWXi4mP9pHL4Z1Jsui7ssiBRF",
  "key9": "8zsWRbyXKX4yif285fZB6wg9YP2C6kXvs9535PksR3s1oxDdvp8PFZZCmMfx9UnUE9bPCtLoR3V5LB6xgj81dpx",
  "key10": "4AjwrQX6JEhLe7CKtS2wLpwWVaVhudQvtnvXxGbE8XXUHPWHCbMUEmZJLVNzK4zm3E4bVsmN38NM26bCYWrXdByJ",
  "key11": "4VJTVdhYhAABqox368AXu1XchF124vgjrwv8BRKg6vKvr91bC1ygGxmSdyu6SrTXpYqEuM4kKjCWLJzSYbqKNDK",
  "key12": "3F4tLhe7fTHMttQC9ssJ3a5u4LS2qzFPPiLawX9Cn3Uq37N1wsih2UVSS7VdmNCFZfBmRtLHjRJoNxEHztmXJaKp",
  "key13": "3QGEjgVagcDKmiHJ5y4mTvpehgHvV498BDixhq4PpX66TBYoAi54QJqjzXZATJiBd1KrjKpqQjaXzkAnsGv8GWrC",
  "key14": "5ecZBuyZgW9m3jhe5uYeidQMAHrUeTui6XsPzN1vXnnUdNyXf4L3QGwK1GpXrQxqQsYw41QwemsHBL7Yg7TNE194",
  "key15": "xrf52VBko1p93DpbPQRe37ycRmorYduwsJU3caFkK1L6gTP8yJ7cq4T6oGiJTPjsGdsuTmGWNbySYciBHwCLKLs",
  "key16": "4TqSw5qMoK42zs3NkCoZb6j99iZZrBmaWSUmEwY4nommwrS4goX7QNVuaomdezvGf2VUbTiGEBa7tbr8Lpb9MNjZ",
  "key17": "2uFuYQ1oYYH9deuFF916hBMZEvXqsCxXWAc8iZfcrAsrDcsBUAf32qfmR6T1rUnjUYSzLVkmgdCiEDJhLqnFV84M",
  "key18": "5bWBNEERKFq8b3QnNypiWJqSppzujZn26WtRjx2Dw632r9pQHhxywDar1P21Tt3QDNuMBMB1bf8whjPUYFS3yCfw",
  "key19": "5jtXZ89s1gLrCehYBPw8WiccbD4ftkbogeneR4P4EcMzMfgtfWec9soKWkCDf68H2Kf4RU8tUy59xUZxFRmZ8jXM",
  "key20": "2B8SM4fypcCrevyTCVTNofxdpnR5CA3qwfpaPd7VQ6aMWhVgTHckyLvFK9BfzucmUHSTvgdDEJFkLaR3BvkvAhuT",
  "key21": "31Ks3p9JKYeXVZa2XnL3rgmWDRH4oASNj1d2t3EkCPpBWVu4Du8ZyfaTjwyGeqyc1vXGpihoj6rSNWjcjaxvtHKF",
  "key22": "3yJEm543nksUmhSwqKuxAmiyTfQuMzUmXkVBXSQi6y4bW8Gb5GxH3QHJ9fhC4hRt6GCNMEo8P346yUyEtFFxWMmD",
  "key23": "2zsVjwvQQHpHaVFYyWeWpAR46doeCUAihcoMcgzRNcs1rgSujBDwRDcxx5qM1yPst9QAGzg1ZWNerCLZjKYGwytc",
  "key24": "5e1U4eg4e2XXdkyZtiinuH3n6BVKGsLgL6MoUxQoPzFLqtCPw7wpn9ABt2mmEZyj1GbiU3zTNP7rGiBRS64oUQ9w",
  "key25": "48jpFkvqCdFwR5cjCDVDimwy68QmAgumKvDmoQhBE853Lj4BrgxBgdwbEF2tR1xgUtk58TpZytc75vMSb4G85LVC",
  "key26": "6314qkYgDQWcJRST8MA3cYPnzCBJhx7vpRZUPzLcvW5Zx7DYh326NuGhvmRLQSQKp3gp1bGbwsnfAxtyAxLqENqR",
  "key27": "3tb5MQkYNUhVrGZBKCzPvktJnPFCrPdLHVKDf3bNxYierogxBMfSW5sbkabNpzAGFNbHMrKXuwiQViPYa3kfsvTv",
  "key28": "uxQ9u3XLUTKCJQcCsiQiz2NCukgYLdDrxNmw6P6JtqcpjjRsAXBrUkdjTExAfwenyRBobFLta9cLyo96NDp7LSe",
  "key29": "658eTnxsofLfhYpWrmEXvcXj83sj4xMysqc6bBYEvCSWwN42t3cJqLkjCBSS6UkewKDtyXH6f5jDkgHs1i15DJ5k",
  "key30": "44RUKyv9AcMShmiceuwaNYMKGE7Gi2fWfDKsyiv6kQsPt96nNK8EUwfY61ezVuwc7YUjW7JdazDL56vVV5vp3G5d",
  "key31": "2sMiw8oxTTx2Z4mjwxCD3219DFfVBsqS69E9YV9FkyPo3cMdtoCt2zEUEmK4U6a8mjHQ3wPfcVeCrbfPVi9K43m",
  "key32": "33pTTaeCiAcEnR3kTC8eXpvKB9N2WYwtQTs8j1xmvXqbfz9KLfGNYMNMoMXVwPWNtini4g2bxSfUzPQpPCexYL4k",
  "key33": "4xtjXGth9KoSzUmiRvdkVMvWvyssMUJWxCXNXCs6Hr8fzQHyXS6Jnoq5vDpdFbqZJojP5zkk2qkmx4w5crTR7MkE",
  "key34": "7xMpd9xRF16TDHYezPVGAP1hZSptUesnBc4FPycRkC7PemXotSG3EXReTWuF8muK3DaoFqyf6ZTQgCcv1H6648Q",
  "key35": "27oPUEk4mjEQt6yeYrbWHzkYrBcv1KuaMFjfsZHcHp3BwREbsJcKY8cSfFtpTXKayHBMt6M4tP2MWVTHfcr4dS91",
  "key36": "Bwg2DvD8bCD17rubbKsZvkwVoCgBxPG3oHDRrutgpm3coYM9sYV78rpNafeT6ppbnsRdAY5UHu65imo3JxcVaPT",
  "key37": "4jC8LHSmS5YYdMD7tkSQsPbb7Dq12vTNhBD5WPhMUcG31CQyAgpVsbQnXDxJFRCXsC5o8H3sSJg7HUYZafyn4hAS",
  "key38": "5sWBG3b9LZj7qfVBtS3PSnQXXhE4apWdEFivuhqvmezqhvDwqKunMHSy5ejRcei3HMQrJEyCeE2aJFAbVCvi7rLi",
  "key39": "3G3f7hzdpKp1mjrz4cBcSK4DSrNWpj6gmKjbQnjump7xUmxpGhf2vKY3vgVMR1FvEcvewzwP6Fp7KsfPae8Wq7zL",
  "key40": "2KWbLvUVeUUxttTZe8K5jr9JD2FcpSVMPmvtdAZwsffDzaNqccLqxmHHayoBvP6kDUEUxn16eNue77Bv6xb7H7kg",
  "key41": "4rCRq3HXTFdN2xPjSp1GevtTyZH35PG6PgZivhXmFQqmDFbpan9VPAUNvcoqh7nazWeTGssjpbgbRu27SVyrLCaQ",
  "key42": "5AaPBukcri4zqBtif7M392d2cJoA23odH9x1orivvDrjdhj7pc1NKZCTZpRpAGGuW9WvgL9pYojo4kGEBYkHhSGD",
  "key43": "5xV4576Jh2Au8T9WeQ67FzEYZ2wjAeu2ufrqyGXK8t1rQHSbay1n3eZphBLmTyoy2vj9ou2NMxynf6KtXAK3dcsa",
  "key44": "DYUmoEWVGfhKPyRgbxYZZ4GcPMr88Y531vpqtauQaj7R7xqkXu2Lh4dCGpu3TyN1PyogTbWRSw29UdC4nHF2RM6"
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
