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
    "e18h2fpqNAXgVP2KpUettSy6KBpBj9yxcVVjuaz5DfE8q3QYv97Dm3KMfJ7h57gWLaQ1vNfnqr3YE2fECgHtWxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HWdBixrPHyX86sjNML4Ud213sK1rDG6qcUJieXjdY6kAR38D3fvHpCDwnv6rZry7HD3RTPhNFPoaPM2NGyycXq7",
  "key1": "5mJ37C9YvMPUAmz1LFEdJia9CpHJ8GwEZgpC99zj5TamKAQxSURmsp4G1eto6yLoB9mn1bWnd6V8dNzwteukDyTL",
  "key2": "32ZCcQPQ2vK2pg5vHGCnMipfBRLCnBAjq74351qGHNNpEBjX8A76rUytfZbeFmhB1LU6hkL2Pb397oNgroDGhMrP",
  "key3": "26CZ9XrHoYHmGjAqqtyfihTMoVTfC4bPFEMm1bgrLMV4d6jdzD9YaQCNbrjbmATJ26QzVCdLLvz5iX7YV3snZLBL",
  "key4": "2MV8N1MUaAhPWvRA43ae3CeP9Zrb9sMfmB7s6yZaRXAYi8y7Kdm6kFdSipPU9ciATPEGN6FWR717X5tLdTVRid5r",
  "key5": "2pGB4RuEKNjNuenXFrBPM2oWc24Pkeizi7sosVxZsmADJd9GYGgnwQWY43d4Nt43AAMKiVJn1BRrjY4GeE496dZi",
  "key6": "4TyeWuNjj528vTSdJcYfhve48Xy5Ar9E2hHgbC64piUmLmQhUEoQ9W5oiCQGRaEaxmDG6e1P8eMVMkkbJGgnnugo",
  "key7": "43Di5XAwCRxfKyWDJFQs3TrsBgxdZG6TCD7wJq49h2Qx56s1j8fMRiRbgLXMuRBuS3oJayFFizAkgwztfVVLd5Gh",
  "key8": "4WBqwuDckxrmJSFm7udvNpg5JzEuhihac9BAZH2AUhhVQuxsNPFFMR3aJEaVAiPgJHSRmp5cB5JFtT4EQ7WpZLHu",
  "key9": "42QrkfqrhQ8nh5EhdULVrAja2h267u32598SBmeaGj89icDY4mj3pYN4xoK3wV5fKVS9ZvUKj5r1hjCgpuVVTNkD",
  "key10": "4WXjZmHLbjLm87ApEfcrFvbiNgPb3qwKM5JBgWFwBPkciEWL6tGXss8xPugWWM6CWDsMq8WH9x3k3rMVgM72uHBL",
  "key11": "3rGrUADA88GJ3NgSDKVkTtDcrBMvz9mg5wBm6JJUFjmtBcD7K4f95fPxFSdi62184cBrsaVAN51JFaKNPQbJiuNb",
  "key12": "5rwr9CuVrAV4fdrX9M48jTvUePToQEhfXXU8KSzagVUXq5wu8MXJ2gKto95vbg1AbMz1iSKN6jWgBKMKZZJEVdJ6",
  "key13": "23rbcRXGpsWJywTwxRdqAzDq5eGaT2ByRPDV4gGBzF8fFsvKVDMvtS7DFdVhCWQxHv8GNYBfp1713U8jyD9yrGCR",
  "key14": "5bJzmdXU72Fio23fMdDqtytSyeRrh7ErqqqC6kCmzgxJoYWDD26zBg7nfUDjauHchpNEa41uyYhybD8VCFC2FwrS",
  "key15": "29zYnUcdrFMgCQVYtW6SAMLYXLdKDLFuTzUvATw4ADGZxNffiKEmLbcym6RNYWX4VYJxoXh8mXy7fdJBFWAckzHx",
  "key16": "5xSMk4Nhj6eZJkGVzhLByszmbYrx3vfsMvJQjxiq9UozasSRXHQrWBvvegtRnQx1byXyfK6BsSrDZWfVg8mPNMJ7",
  "key17": "2wHF5h8zqY1ZPh72fVh131ZCLAgAcE4sW52Ak7gsSpEeoYRRNvRgdJGFcAi8UT9nLJqKxdLT7cQA2TX9zGGrJLWs",
  "key18": "5F88V9Lf2VCjpDe49RrAPhCSXrthqPFAV68B5pkYUKMymSCcdhnAjhuMXQKHFkLmm4Cx4cq5VLLhT69BDwdhviPW",
  "key19": "2mqA4Cbqu7381EaCvge4gE8Ecjgo8nuppHS8DMw3YxHymDCfn8kenX5CmML8AQZaZt4KSNCpcGDvFh58UKkfVcx1",
  "key20": "ZYC2rUA4A1BTNpWWsT1jzgN8tEv6ncNcjWDsy4rJBET2Us7QY659QDtFbmApSzLC7e9piKvULm1c5xL6SUDYokC",
  "key21": "3QcXdAda7nzAsLcje1wuZqhJTe3xLE1AgAuy6MNfZFUgQHzjbrBn7tFZM8VoPaqpue1WNyCJnzgkkibJxfpXrzp1",
  "key22": "2TksJp2Cj2bG5MQPPJmtx8rDSFWcdxbDSLNQNTVuh3sMh7JR4Uxta56RLwx4kif8tFzeALCDeXMxAWaZZBfWSXcA",
  "key23": "5RkTqShrYESuShQ99BdfDJGGaTjwGy2gzgpGXMZaLgag4QDB9hVURvNFctPNuizK6ftwdBNiR6tYRPYLBmUwFXgu",
  "key24": "3URB8bgj5PRM3gA49Zhk9RHdqskJMPKaBDnLeCatP9jCstuMxWvhuq5r9ifQ5Ft6iK7zK8rchL2eZSrm5XCqEFME",
  "key25": "4MRnMo3zVkr3MwB1MoJM5k3z69Y7EZBCUH5SA6hQE7gqP1qzx34V9mLoBX7HuJF3amFGgiAJw2g3A2xWFkMqaghT",
  "key26": "2xC6bXAjmVgr7qqLoo5Zf7aa7rJrLjKJD6Y2hYipLjxkGZfUDwNx2pFomkfYHq4Ksc1yFVMw7AbDumMHtUDi8Fer",
  "key27": "4y1eZUwmZAAtMUaKt15Ss5jjA5iPCbjZgkahfkkfKjhjC2rYD9QhetuKVDny464bGEGi6PB3ueMRyhs5g3AXXdAA",
  "key28": "7fnVguR5FRpFkHfbTVEnmnaCCr6tRvx9KaQ9Nt8vnQpES3eYhx8nhjyvh5B8qCP9kS3nMGUGsBit6Hw8ZT4Tzae",
  "key29": "4AAnnLnMcrBu7LHLtc3j8mMZrG7yBowFk5mW8jJUfWJypqacAdf5SG63GEEsEb8rgWkTiafosyDWdui4MbFgs4Tk",
  "key30": "4hvDKRRbRmWX8BkpzFYGTcRKAxCbkeqvZVhcsgjjsgiiLZhSgLLzHvoHAyVaudttFxLBADGMMxz7Fyr31uTBnyqY",
  "key31": "4gqUXBxY9QFt3VqngPTnHuERx6VYKhv1ZKPgKjPjULvRdyLj5PgZo3msncdExCCDwtk9FHdLuXhGe71965wJh8jW",
  "key32": "56p5tYvX8jyP8rvC45feEDUUUUiuZ69jDWwVDjC98PvbKU6BJj1VMsgHyEMgDHBeyShdatUY6T5Vzd1scdVxonkQ",
  "key33": "51m7kWQF4zfGd6gPbZSNTuaAF262m59qfDs2TQpyoJoABvooMpon5ohU8wf9eKeW78dBtj82vsUFrSPBHsCqwzJ6",
  "key34": "4sLkmABgsoM6Tckb88r9gxUeZjnWw28eieNRiBPMTyXSFPngtHqEvF1uC9sAWgL6n85jbSKfNJz8Eb9ZPxFnQWQy",
  "key35": "5i61oUiJ2K1XvYujZkT7kYBCfUXFsbbxD1yorxUXPGDon4w2j6BYWkvuoCiCKDHqPyXJr1seajk9tZeiTLsRoQs9",
  "key36": "2ive82J1Crq34cbPdpTguiL9Ud1ukf51tL4QB5QJa7nLjvmnXBf32MmhVygGvFYMi7Vm8VQLdbNTbkKZYFQpGbsE",
  "key37": "2xUhaUgrggS3UQkTu3Jypwu73P13j3FTgg2adrN3bwEqZo3uUeLq6nVsQx9xFxhPfdWZVbHuJiYeGqn8WHqPkn3V"
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
