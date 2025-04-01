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
    "5e3tDS6oR8c3wTqAUvM4YAaiXuri8yZ83VpNLxC3KMFDPEKQPiFuMp34toqfEJ4VbLBCE49shtQTLVMn5jSanzXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hEu3BDaJwijdHH9iqhmrJ5bnaw6czsVcFfffW3JYsLGnY6p5KZkBpPTgtHcEeqx26EApoZZAeuEpYmVhko7BB6U",
  "key1": "FjVxGJhe7UtbAec62KWze2Cg6ek7onsgKyxqw33dB8WEfyM6TiDTqDL7762aLWTNuyQ3AeCWtvjqdQgr5auBHH5",
  "key2": "5UnGB7aneFgaHkY7sQUuiBpkhL86iyZxVZe1bLBk5rYrSdoUZrM9i779ZQY2nzM93mPVLaha9PovH7hqYfFSbRbk",
  "key3": "5EN6QuRqgcUFbXzHn72CiewPEAaSA5XbGuvStcSU829S2Yq8JDXCyd5ch8QgdXmsXsJK4zSGNYU3VAPXPADsDXSQ",
  "key4": "53dVkaPqwdBRaeFmQDZtezzNks6VFSEqchZbj7dMkp9YeyHU2FQWQbtm87BjUmCV3WxTW2iDxVc9nSgELCXzNZH1",
  "key5": "63KrBPByqSwjr7qabRrGT3neDAetvwE2pFP3xSQ8BMCxoSoKW9uhqypJBUXoFRxAsDcqy189nZA37KcnCyUV8BMT",
  "key6": "ELiC8jX4dxZDz2LifgPZGG8zL7PEU6jSuhcLhdXqRdsjuukMifFMGjfNYg35shBTotizGoHyXAabCB5WagLMJhR",
  "key7": "2taqUg8dYX5xLnWFt3GDP6ijQkbuXftdrkbbzJsxJh2bSb1WWQcMxVjFn4uNDK3SuuK7j8ZhFFAkc3V13U7nvtVi",
  "key8": "KuPsoR6x4ZwTqp3bxPzsqgRzkU7zgWqcreTAJs2MwQvoVtKMKdQ2n1VMYRrAi1UQGJY5CyjRcYfuW3AbBMMYyRC",
  "key9": "5ctRvYV3z4tPoerurF8nyowPtuSg38U6MFXNWJ5JATtZv8ua9vcyu8C15hGgZsVA66TAjWTRgMDqWXnG82rG32ma",
  "key10": "Qsgog4gtqbXy7G1R9FtCevfVnrcQ3Ky7YRv6aQqYqMck3779YCmmmM6EYG7uFasrHoUPZNfu74JAFHpvLocncRa",
  "key11": "3KnvALt8LDwvRWPuusdZuPVx3zssGwWutsYedbNGeZTUniEmQ1uUDRYoBpbgZ6PuvQy2ua6vPspwr6SVhpeLSUFw",
  "key12": "4YWEdx9pgqn8KjqTeWPxHUX26kmondeGAW4PBhYxkojtBZNnXRrxxG63Nn15YyNBvRJrWdb4qLJqgafzdsNn5sJg",
  "key13": "4hWmzDPMmRWCCf5xuWEscF9YgEwzYK8jXx4cuGPUNCDSSBKCiKSRzk44Y4Mvm3eH81d1ifhFdCZugvnDS8nfxmUU",
  "key14": "3nSRjvs52WTpT6DyCQbPJWjBXLGoJmBXT3dSMAySTdiWyqRVwvJZaFVmKsNcLooR9XQgNdFhNQrjQdeoB5Fx3Yqb",
  "key15": "5XVJSCK1DGfwLGtDceNMWBS3kihVcjR3WVxPGPhpBM9Bp2ULDwURoxwFw8C97MudoBS7xxXcpXx8BzKjmqJtP6jx",
  "key16": "epaocCXNLxSYizwkMz87FJB3hqhBdBipuEyhq4cFE5yz5uxghwd9CU8JCr6n9HVu2i4VD1QfVHxCz3ktedKdwuL",
  "key17": "4ygEWfPU4YmAQESX578b43aD2ikXBtAqnBy6t5Us2qM2oWeoqvQTLVusbUaxhdN6SkWmv3koD716UBNfFrjcq3kx",
  "key18": "4Yf95nd1Ac2aYhf5Gq2yrGZ4iKvaZgbaPaGr3XEbAyJ7FAGPtoDndw5yiMZk7R8JLX9bu552u3WHy7QM6n2YiZ1H",
  "key19": "4RCQubKjVAjQAY1zqmJEHivwtH2cMgoLXxGd9X4ZQWNejYf4H8txaFZZmD3ehAPXRzGsWesDHRoGaNdHoMGxjvaF",
  "key20": "bpgYXTGmkvzSzHuNHqvZz6ZNJx1nwducLLaDi1R3YEnuoVBAbcAN5x3KTjuRYjzoq3jp8r6UZSTC49kH2WzwQxw",
  "key21": "4B4PzB6jfgNy7TaNxgHrxjTg2QU6TygwnpisdeKygkctVgE6EoeJ9pmXctVYTyqiadpaiPcy2vi8U7hKAmtFu5MM",
  "key22": "3Wo2EPA1Vm2ZJfSnMEJbunJMgF9PgyeQ8pav6bPmn4Mo3MCwMfNyno5NYD8PcfcMdgs9YyMimWzHKuJWEyEtV8Sw",
  "key23": "4r59jzVjeyH619GP85FydgxRGJwPqkmGsMDm3y67Mh2JJP835gZonDJ19FdgFNMMSYaqdCit6d7AbEUFBxr48PQL",
  "key24": "3npLiuZ9YLVfueC3usoScKZ6FsDuZczthh6p2s7xvDHs9mLzarRcVzRkjJo1rtSrruprTyZkSC3HnhBoAY21Cv6Y",
  "key25": "2s27bVDCCbS54hhRnu4eNQpZ14Kxmaw4FVMWFmJMbANUVyB7QKjddXAKe18ZZ4rAgCnqC9tim89VEnrq2eaBQzXc"
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
