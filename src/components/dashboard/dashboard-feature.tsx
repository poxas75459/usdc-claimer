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
    "5i2zVVv4ViG6PVwXSNw1tjraazBNVxa3nhNo4zzEW8aBfByC1LDW4A4xFAC8G6q6NmFveYkVEamSkmPqbSaoLy8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jMjuwUVdWnBaM4kRtDJB7YM9uFkGnoxdZSAdPKpeFDmj56CgWvie3NcTFx9Jxuoixj9xCYdoLXxtvZZUVyMijBv",
  "key1": "AeqUp2GTMbLp5BZfnZ2zxQ5RJxNRYg91itfCJY6ZMGBuo6675XUSMY939bKQH6yUEwsVdKi56s8XhFyBXhAdSwY",
  "key2": "FFpTn9YukBAb7hsskfFYe3jiXoMr8Rd819kaq9F3D7VCwe26m6HNJyqaqrmT12hs8k5hCPyDHVC2iDURA1LbFNg",
  "key3": "rWoDttMuKNVraJ9UeQbfyJDeFatpJ2cpALfNJ5jE9nvuP7ryXCEGd4qgMcuoQRFoTAEjVPrAKuPsHJxahV4uWHc",
  "key4": "3F8mtCY9gVSFVnnAK2KkK8LVP1Zw8k8HWkfDYwjqrcKU9FDAmzgaqWdMhEk8PLWTp4RSPLn21THZzGZ7PiWnWXpv",
  "key5": "2WyXEvvnmistB8M3Cf6ph3irs6RpeNPyD7jovs6JTPxozwKvaAqr6Siw6jG3VXgXWeeWN2gbwzGSheKdkL3BT7TU",
  "key6": "zQnPdSjeSNizDtgYDHEd47KxNUpENwBTvEYBXhEs1XxG3jqTBnbTJ1tpaHhaGxugagyJ5cT8bvkByPMCXngg49U",
  "key7": "5s6s7YuRyNzrXSuLKL6LSPXwKajo4hCmGmExGhwHHyKZFQA5pktBuzHhQJxUBpvSTciejyT5cNLU8rfRp1T8Jc3P",
  "key8": "2ewH9t2PG8Q5tVGGruDfFy6ds5wHzeW7DCnXEV3Gd3sWWQCEqGmVoWqVNoDErbRuH1ZkSXcepWKTabj7EKFdUt8M",
  "key9": "5of5mRahd6zCQtsMDbnowsEQFcuJW37irNmeMrk9P82dudgiVDyCGjeDz93VTD84CJvYwiyGizeAEtMHPBfYndHW",
  "key10": "58oAkXXRk88psN3tLMT5cNA8etqiEjkS3xtnkc5WCQC2LuhFFaptTsc8zCjkaum8gFyJVp5Fj1nxxKERsNWRYoD6",
  "key11": "54rduWzimm6WkQhxDsJX7jVypbcyuTy6ZSbjtNQCeVWaY19UfQoxN7UgwbmAZeqr1dfJKb5Zju8bgCknGzd2H5VJ",
  "key12": "3iutHGsMpXskLKA3ztP6dfLGAesJrMNmcQfKomxwuvrsUycSiGwpx61UuJr47ogkjy5sPy3gF5FvhcubLeDrSkPW",
  "key13": "44UEGDVYLDtAGSKNJsdENZumhaUHaz3XkF6sJLYmGiUjH14i7gec8YohGhRfpX7QPYPHV6ZwuV69makCCrZn2XvY",
  "key14": "4SMMoYCQsfis1ztxff1n2RGsmMMwbZLbh4TgAqsJoCj17gTrXcCKJLVpQkqgbceTXZmVjJooKXS6eRj91nWckahX",
  "key15": "yssqeCKpsELVnqTqTz6pNpaAgt5Lnk7MdzrHGPggdKjvEjB98k1qF7WAcdoSxtQfQXNTeB5SEdYPXjXpdoNN6uD",
  "key16": "66Knw5ncXGmavxFEoK8daKBMJHa4CKC6qzeXzNbFNmuodsbMgiiibkDBsG8MyeRYT3e86CUvEtDxDM7N7nv1qbDV",
  "key17": "5hYrknMBqZftLTEeF9MTuQjynsTcN97kHPkn2pvckiWMkBPwX4ESQeQx39scC8fnoKxYBedZYeEgwmZttmjDkPHp",
  "key18": "5DztcEYDzsVzhWMQAGz7uKsw3BtUEBzVWTjtPDEYV1nnZ26ziTZVgvmRAYTDfykmMdhtCpksoAx48foWd4mW9aJk",
  "key19": "25kKbQR1h2b8cUJw4eLdUDaAFLaAoFKdg2YgwVqKcVsebKMhcoQkePA9PnUR3aio2EkTpzzaT2bPWrxLssx7TrJe",
  "key20": "5b5mFFAAkPiuNLnsxsfWZhdECvJaK2Wvm8zS25DiQJEsDLsSRKhANVV1QuztBuY9dBoYmu4Hm9fxsFgHFwrQfkNA",
  "key21": "SZZtAi8mjjJh4jwGE61xiRMXT62qT7tc57M3a79bUahmgNVKj62H1h7p8sQqun4fPqmijk7Z38LXmMonaRT6BoL",
  "key22": "5FsFJNwXUZqs7uT9deypkGFqnLmBSBEcH1f9uKT2Ldy4jzfupxKeKuYn2E6GLgVzJ38SsHBSZo8VZ5nDMcsui6TF",
  "key23": "CVscvMCfFihCX2G3e9Wz1JoDHvuYBHRQdLn71WQNtrRuuk1qry3PboA1F95JPrRhdCm7vF7nA19YWzRCqjZyopo",
  "key24": "ekLVwpYngxRUzLCxajrHxF26mdcZZNAnboLRHGZYHZ9rJySjXAJshTsw86xfjPiXA9NTZKbeY3hFqxhJmbh4ufU",
  "key25": "4HebZQYUUCqLRTzT1PbokHp2nH514S9Uwj47FvvyZmHse5jV3uHmcFuwcBHAasjBo5shBbBxpuqpNxp9q9igFmgG",
  "key26": "4BjYLZjuf1kG1uojWt8GYTTs936BjndEQpHCJZK452Q96Q326KVinGu8LMj9HSSXNVFQYrGQB6ynaXJw82j7oSJo",
  "key27": "4ont2KJT8Tk8orTndaFYN5bGU9NdDWBJEM4SPYGHG6oBSgV7zM8Lih9EbSWM43Et949otQQN4M1HjQ3MS94opobW",
  "key28": "2EiaXzqyAEmXZGwT8FQFFuJKiSPG9psxRY1vr92wzUrTSzrpKhcL4M1fFFtvnnKzgSZJnnrUjBrbgHLVwbVvnky7",
  "key29": "nRB3TmdkXJPbDNBpdBaeczWEaPfUc1fyGWSJDC4zihbdCvzzpT8co8cU2vbuCQiGPwzZvAfFPDkFMqYkzZVSpSi",
  "key30": "De7qrtLAyFA1fHReknakBDBYMP4sdDeGEVvFn3GwQGaRQUKL6tGtRJsq4SrjHuAuLmXRvX2p5axcWoTU5Cfkovs",
  "key31": "4YxyVE5jvkEFDDirwDCNjne3vnor6KCj5KfNCBiEukQnS3brrH3NBW2ekcue5xZA6be7DEJgtXuUvShqxmVpUrb1",
  "key32": "42YS9HmgJFVHb1Q2pVB8YU1odDZHcmfcFni5ZT6YWF2sZFdSKhvz19veopAwxLG3g6mQgrp2X6qhfzNZi4sfwZCG",
  "key33": "A4UtWn7ShLPmTewUNiHmMmCADt4wSk4EU453D1nHAxjq73YqicPCssrjn7TJbTcRaQ92VXFvXUn5rWeAk4UsfxE",
  "key34": "4n8vRuE3JXko9VrMbRox2VhtVrhBPg5fBf64pR5AaW8TDHFhtWXFLuy5EA7oajKYKs5rKNHGLMU224S2HVkLZbET",
  "key35": "2BjgHTsPets9dXwp2aUgSc3Pvbyt3peoed7XqoQyrEFkndHZY1pwJqpYXWY8kHzfLuSNkpQ1JXRA5EjBSuR7TN7m",
  "key36": "uYp2Jev6tJK4tdV1nTcq5qmfAsKjcfaYb4DWc1ivYzJCAhFo88eJMQPxjNEYeJjAZveCrs8zFGFptJ9AqNzPkiD",
  "key37": "4RqDkBNGCbMy5528vfKHSfVz6EwoiF66keGPjfLFmE1vRWTnzhzGrPisuMwV119GwLE1WEFB7hGeTcr8tNvzN9xe",
  "key38": "39K9skcZAfFs38DZykPzYWUcjvuUCnqHsZDdKraBLr7f9vxu9XNVh4PBYYpWhQNM93pKYejGYRtPV59bYKbaE8Zr",
  "key39": "4zF48n7KQPcqF1UH6ffwEkW89zVCzK62Rk5yF5GuAmKZtg8TxFyGDPcs9XbjfD3RQohTwoNzFiCVFQDc9r2r5r93",
  "key40": "4p5NTFimEC4ApVEimvttwj2vas4h7WpZr3jGGrZP1GBmALxZR8SKo69Ceie24UQ5wk3GxjiX63ZNqPHNp9ut4H54",
  "key41": "26D52PwqVAF9ja6CBy5wepmnnBS4swcRHsGLjG5wynPfdGp58Twy93DBd9Z4JmZEuohAFdA8Sqg9haRq4FMLRMSH",
  "key42": "ptqMPPN4sdeVoRVZmy1jzAwAdcQLg3vnUc3mNCAjsjWBB7hV751Zx212K874q3jKeKMup9qYsZsDrxAk8zLMHou",
  "key43": "FNqaTvFXjFUJFwQ6kQajQXicyApky8Te842ECJvcCLr71mCox37GNZdRHNpk8sgyGpvQ9BS1DgpGpBZ8tswT7SH",
  "key44": "5y5gctDHCQZaZJqyop2aYjMFvHfah8gGxschjaRhqMzbUkh2tRuADVwZVbXPSXz3H4dZCVUqBWq8DJf62LN37ETx",
  "key45": "HJ3Q8MquBHE7iHzXYAJFtycFZ3NXLcvsRSN4aSRuAmKHKaPFCMvGEhFdLrVtjfwrWwCWchxUsTn8HZQNMobVeoD",
  "key46": "3xEBbtj5ESme47pfernaRSZE6nueNCieqyk4VbR8GxjL7N8oUyjsrhHnpKZHLZNQt6n77iKD7HEKVHmcfcVLCc6P",
  "key47": "NECRTi4QNyuuekyfhSQsTawA3vPpwfSSVhfNNR7pj1VJwDiLj5cfkDe7fEZiQJqAmd4KoGfefp6A5hrsd4FsPTV"
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
