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
    "5CnjZiYd3qTsceSSjbPpm7tMHrnLvTxoVJfFSe7sZxkpjFtxBN3ubBCxGSFj4gBLF2mMmXqXRVbgpN5tZ1pHkJXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cLoJiEpkjcLrU1wgFeJEYbbbjYR3MpWYPaGvSgH4dvTcggvY3rV2smWkjpmAm8hyvDHm6dc4tpW73CLTy66Rptd",
  "key1": "dHH86RociWd47fW13Js8mRAaoWhVbpemXS2E6XWMT81RDWAUJ54pQMJ5q3sEUf3rfxcdHGdboWjX7T1WwgyawUV",
  "key2": "3vW9dLL9Epv1npkf22abqEpJD9TLFRFgqA5W1Qu3Krz5ubVC9AqAijUyAt1CbEcz1jWtjwpg3FEiNbqm41Ku9w4E",
  "key3": "4r8whfx2P2hRSTq9eWaCTgWqCYTg5camZJFisU2HYZsHMdcTL4MJQmUjBkYUnGXrwCcjMLEiEdFP7GqSVwHuZjCD",
  "key4": "4bXCaCiH4ZWi49obyuvv3xutUL1BGBcGTcVW45qeUbrFxMxoh8HmtVG1ri66QLYJniNpk8mTm7vNYhDNaKQAmufw",
  "key5": "4Sqh38nzE3sD5iah7UxciM4Q1DYFVaRpTXThuycBtdWyP7kC37EPNb5DyHfFWet6Fw8S46VesvEyzAhN61Wthh9m",
  "key6": "5iz5HR8wY4hdbUuXShvFcW2FuV8MPuoQw7PiW8C2zB6Cehw3XS3nGE1KnmzjJTADFBCJYwYYa7Gy5jYqC7a5nmLJ",
  "key7": "LdNjwjuF3fgfFrVBsWLceU1Ur1UYajYHS2JjjLJX18WoBwzBwNMW82bfSagbXxCQwSq2MBLYhTUad9PBLjq4sfg",
  "key8": "2MYjzbuifT2MmPS9KqLvqMqjM8YKvBWFigVAjcSy8PAbcx2AbN2fWW1FEPW4uA85EE11EtuEFjBRJzdMPh4TK158",
  "key9": "G5iHXguTVq6NawGqNsbstxc1o9tqoPjrEcfRjdWGsHYmvSKBMuqs1VJiGaEHoxAHfrm4KEDpt5o1PSWjEB9PrYy",
  "key10": "4aKeCCcwhWo1t8Atsme9GsLHsAospNGevtQHHeqDTNySLfmabNmrbHzjvkSWabYJJaMd8s1wb6TB7JPH1Fcc7idu",
  "key11": "2RUq8StZUoTPB4X5ZabSNgRiKFK7dfgXFZwrM5xa1p3rB9xtSqxafnaknVbDudRrStMwe7GUrYJVEdTx38f8YSDt",
  "key12": "66RkhXZrj7Js73ex4PSSe2jWeymn8jxYeu3NQDWkfRPvfxNzgswLhyt76x1f1a5UY8aNzkUVXSSboQw3KXaKFJqc",
  "key13": "LorqTjKma6ugpgrUbsW56ACyQtsdpdnQZFjN1FMug3R9LUN9FY8FQkXiAfJ2gcyLjCMgRZpocZCe3fypAcjDtKt",
  "key14": "5v2Bp561R6WrqoBpWx2eebV9F8ZcqX4YzfNjvmVwSN65Jh8xyGEdwZD1mVGhqV7tvaKfRstsz3XdMR1tQTDANU8n",
  "key15": "4dyEHQBNUGt5NangiUUPQwLQVdEmxANv9muipqWdHBdQC9swCxu3T266HkAhLiezERsT74vWzAoBWXSpGNwuCLEr",
  "key16": "479MrZSE2DtqCEXxiK3cqqBQeUNwuFFnL29iwgeJsXGVQM3N1Lr8k5eFUrEYAd7wCcA8UvCS6NGkTZbAn12gvhf6",
  "key17": "21rVWSR6gWN7KvFWAaArTvpqZww2GEPA6m8MEEDnw8b7i6UVMqFXiwY7yoLY7rvTyEzzXbtL47bGkXXuQFNDpKKb",
  "key18": "kEHNRrcrPmKYs5Ym7uxuEbq8aaj8oFBYjjZrUYJVbqj618zYvCnAaQuhUqtyS7afBo38u3uhoJ8uYzuX5P1V9m8",
  "key19": "2Kad1BuuxMK7K7HpBf27UgHgs4cUkN2YcQxc5ZWWjzU4K8S3kKM2Tz6dY2sHJKQezDfTFWL6yuuKeB9HnGyJ7aWJ",
  "key20": "59mcYGHz6WjwAT36KpNnahczT1UKVksfLxvU3GthztxDNj2NcvdyXPBAmFuZSe1KGWbt66o1SM2J7bhDMaiMGURm",
  "key21": "4snSZL1p6eFo8kwWJAGHEs8sJ29VekGdFH9VXTSnJ7XqrFKzT5CqKvd5bHe2dCrnUPnNiicQCKdFExm4yd18tRUs",
  "key22": "36miaVBtqgCEGi588oU3kGcFvcwxpE5Ch9NArhRBMhYoLprTNPDthUtQM7Z78LFRBwNDAMWcBptj1jnJV81WwyRA",
  "key23": "5FPHUcky4wv63yT9DsRRZYK1yxebvprPWK51cADSkUan98LzqTFm36f2X2FWEa6tJwXsnEPwPqNqNsq5Thrm8WS2",
  "key24": "418k27dAapMaepZ7BoKnButTUciUgrH628qHNX3XqQDuVWtPiB91dF5ufYyxYccFKsUofQGk5CJETXubTri6LU93",
  "key25": "373B2LRpN2tw4ekhvd2ZtxjRR9W4x2W4SvcvVX1e5FWeEu5zWLrof3Cfd7LEoboYWb53DW5RRdyRhHHk68TGwGf2",
  "key26": "bVBcH56nX2pFYs5NCCRcdTiSMELKvGmvkD8MKJYe9DxuERJaKH31MaHGkAEEJ9nyV1XGhVVmXdYjf1D84yufNoA",
  "key27": "59ebWht9r8e8oQ4s8nTuQx3qAcFAWd1bJaLMZZDYievaVfq1CY8JNXctemdCtZ3GUQCDWuTA21mwRfiiQbnGxk97",
  "key28": "iUJ3vhdLoUVX2M6CKT7BzMxuQz8PwwbJtEQMR6JNx8eENUVTUSBHRcmJwdm3GmR27DAarEZi7gjVPXTp61ock8L",
  "key29": "SREy46kSL7vHfHshm7SuHegkjj4gC35LX97imfzzL3wky5SS21HfUcjMircJvxtrjYqqftftHxiLTNYyrdND54b"
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
