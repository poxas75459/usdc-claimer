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
    "5PPhLeE2Yi98hH1BE7S1niEGNBnsrNRLCXxLevoCRVFP79xHRagCYF7HCou2DPnnJQHyBLDEDutRN5jbHfzRhctc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G6AiWpYqc3uNn7CGdLe4WMtukcu3Kg8AFnDmxe9GQxDwLWRrFohZ1FfrkLAbFmztj6ijzwJLbPXVNrAr2a66jj",
  "key1": "544dFJGRGH2rj47pwWNhyov5HzJqQH9YZNvwNHzWDVSCgXkfysj6Ge59nVoq2vpGdC8Jdsewu3TNxkBBHG8HjATE",
  "key2": "zXukPfUofHznmQipbNZkFv6dqMb6cSzqrnMs4vYj6jBep7e3aJmYsMPFvUv6je3Pks3Zs4QtkVBFift9fuUwrrY",
  "key3": "362dTheCq1QefxGHPNB2F3PPUHe5p64WLHxdBLRGei3ixdfDUmBF9fReDzswyS2ZN98CorFH9RgYpVu55XNZ9Af2",
  "key4": "4NNVTemBTGTTRaGsbPMUNnm5onJJKLfoMMJMKct68YgpUsw94VeWg4GCMxJRVnvhjvAHPhcw2nhoi8Hverg5F2Jc",
  "key5": "c6Jy4SxvfmJmwmDK6VrSWH2wWhEB9G14HUiYkqKKPEViQfdyfzKgs8H9pDjhapivd7kCR1EMKesoR9BEqgu1jgW",
  "key6": "4fP8tVbDb81CH9QD2999a82cr5jwgMhTrANA79n7TR7cB64T1k4sRxM75jqpRRLvyvsFXh3cMzNhbK5hJdiLQt88",
  "key7": "4MXuqGgUjiAvniuSi3etad7Jv2uucgwugWGeZ3k87XUsGRU3yxNsnoS4SCWiR5M8b3HmnK4ajVCrbcU4gTmWREuV",
  "key8": "h4t4FYMzpZEoJbTuKa4yz8FgEsGkC3iRiVoGmDxywYhXUJndmSXnveFy3CtwXtYWygPeLRSZRYPwq2EAdpFGyyW",
  "key9": "5iRDFmr5wt96KFL6Kn2GLP9SBaU36zzmS3UoAbJFUvpBYJL8G1Lph2TR28WabvGAimZdYYqiqEUL6cuMmS6aPHya",
  "key10": "5QC6UePqRzaupTYuv81YYSKgd5RbzHPj9uUhCcfb5JQmMRVpDdumZSAMBErHM3eoWPQpCkDK5GUiVZ4YS19yYRdx",
  "key11": "4LfsrdkhWNwcg87vjHwjZNSoY2Etsi6r7mxybABURAvW4zifprzhjEFDLkt937LzudaohTTVHuKB6s6FZjyEzoTN",
  "key12": "3thhTpC2czMPfLZFkhZxnjBuf52EBrLpRRx9aWJ7vj1xHt5eWNrboFnSCCXR1nzb1bxiwfZD5kbDoGYaRAWBJbLb",
  "key13": "2uiW8hxGuv4reQkzVr1kYKtA3xeWgnrSuEqyPaprK1gMmQuDGogUxBB8otqGRoLkBBsqCq9URdVymQSB8YWTng2N",
  "key14": "J1qv7kDmUNE2jnpBnnpKWz6N4p4Ydx8JawQpCPapLBcWMwk1Nf5cq5xoSp2E1k8pGB4BTUNWivVqpXfNcpc9oK2",
  "key15": "5e5wjhBEiXMHwqtnYVZKA8BeZwZFR9HAyEWapmxAGTcMtEt8jvbjjz2Y9LQXX8UaPPUfXMGzPMpMq4K6FTTtTZVL",
  "key16": "5x9hHbubNjZrmDU7xjn6S8Y3eaRCApzeTzDtUt2ZqZa3TDNCJU9DFswesUo83xwPBUKja4P1x1rV2uB7xAwznZgi",
  "key17": "4QyB9XXWjg7jbct6nUVasXMT3zEE6n6WyartPKJ5FmS93C2QsjTyndcCPm7JAkxEo2KxUt7vbbp4GdvVnKURfNpo",
  "key18": "53vZwgdxw9YAcracxwuvhYVrRQq9igA3VSQ3dpvPfxkGimJzansPKvstksxdNiycPf3HWXAnpxRTLkiAuEaeWuSx",
  "key19": "4D5ikPvtUzAz3sbk5thmVJMNSPQzqBoSfQaErPghE32L3jW9k31TSKwvov9VsWwPn2gzQSZPUSVHANmrTU7mttnB",
  "key20": "NJP7SqTwWm28z2z6i7q1u7dU1adyezBgsUr672H1hM8nzGDW5y5b8wtAHCMvSo7zKqcuRrePoQBo8SGBm2YUg37",
  "key21": "FDiFZ1KhKCytWdrxvvhHtvThUnjoTHZNgU4HQvQEQpNPVeufAKtyU2J8mPZGmVrSQ21A4VcDmd8rP7NGCao8SGv",
  "key22": "5RLs7SbhVXgHQwXuSBhGDufys23UfDoV2rRnr3JSVvysXWEJU2xu9ozqzxXsnigfmCnsFboo5XzuYManeJUYRopg",
  "key23": "UBn9cSRnNfAMWBJpLW116JytWPzFquEq8HrptHeXn5R6abZYYzM3ZMSPV6c4sWqqEdCzVozLnAuMm8Bfo2xG6Zv",
  "key24": "393wuJKkYgp4pe28BWd6FZiqQ2mg9wtvUtAsQv2CGwrJDt6DhaaorRxGfQFxj8CDVyGmD2onYSADDoYPxMkuiAuS",
  "key25": "5yRNQeoHsKRmZVt71Xm6FaheA8PTGZdTFsEr3psUUuX3pbSUr53NWRRR5WBXxHG1f7biQNqb2cGTu7wCNBjmdd3c",
  "key26": "3UKyugmwqGMj1x144spQAVKohZojrhrsgPjyPxiaUkj65cPyhgp64R2tkk47BiDA6Hr3EgH6cchibhnP5BYdV2q7",
  "key27": "Ko3gFr33ZD5bT8MUZWKoFTJ1FezQazG8tPZNbijEKYDYfLWZKJDz7bAfmrLT4PjpEMjpCSrQe8MFfjLrvhrifjg",
  "key28": "4eL1EngdjcGdFx298z8YeKucMxoLGoPCQ7oE9EckDuhdB4r3jSp1Es2aF9NXDV6muodzkh9Fg3aKvf3UmT34ycV6",
  "key29": "4mWF9d5cwdLogAaQJso5eMbFGm1ch1ipEVWwbRbsMkUSpEgrAxZEZtkEdYz5ENrTuH5Ab7ZXbVxXaXhSEkpNChTQ"
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
