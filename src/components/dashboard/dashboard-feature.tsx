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
    "2hGzbau7KPPwTZemyt39U4Mn1mrdXeGYE7FcLjgQodf246vgWcQYJeiEtDoYE7DfrgFWXUg3E4ESX2np9G7zeya1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b2KrR3mMRmdF8AbFE2vdMtc4Kt7uiV9LAdd4mVtD28vWtFmw6TcMjzH9T4itbtgBvBovyj9n4Vp7RuUiENXM3eV",
  "key1": "5A97S71fxiUUDc5hAyvTkr67K1VgTuXZsCX6aWuNBwy9Z78DbozNgttTUXWJrZrS3CC3pX6m6rfthjmM4EuDYKo9",
  "key2": "4XKaqVHZhXPJSmP9y7KkKmx2HHJZ128gAWgxM7TGymAuvxhEgZiT937QJi9sqNjiWdSsRA8ox39BSUFcuNNCpDxD",
  "key3": "59NoZHW9kV6jegJGJQG4iiXEcmWF3AcwoXocTMokffC1jUmATtzdJMCDRtxBDyX1zxAJ4Lvbu1g2W3eiC2RKqjAL",
  "key4": "4JcAEJXNQjj14s65te3yZ1bxg1pytncTsnd4Cm6r5XYxyT84E9MHZZbFoPQ1coREWWWq94bkiecd5H5W2zXHmYmn",
  "key5": "3Vnr9RxrontFe792KYDfg2PeGJivAZepKafYLqiNmjYuM4bseDoTdXBy6Y9PEX4HFnYF3psvALFWtjpUaBrfUC21",
  "key6": "66q7YgsqaTeicL99P7kDoDQKYxoANX4Juo6NYa6Rh3FumrV9gvUuRiMxr86iF1cfHhvKB41Ea6jxVC5s3nPx6p4m",
  "key7": "GXjpYwWR7EWUSCeRm1CzgABNv7THu3uH18CB52A575QseHrRBCg4cBswud3Q8uFbWB5ZaW98vPj863kYHSb7HJE",
  "key8": "qWC3KpsuUGE43J1TFkUvSJYDogzo2NgXVrsBE7CvZwABYNjxbiGyFZrhuABsYf6oq3tRHfUcqHss57fEfp4a9HB",
  "key9": "5eCe3dian73wWbAQjVWopdEBf9MTjAgzyi5RLABuK1qooTguG2aCbsrXqGQ5pQuehnzBiAw82bxwWAHP1bG7Mg8a",
  "key10": "4ukKr5dBnYZEmMUx8FyH6swp1WCsR8vzTr3n5zrWUJGDgh2HA256F5ixXC9fjJnMJpACLBWvWWZNLuXkdrSBDtEJ",
  "key11": "CtfJ3nuaNdwabJRuacy2rTiTWskxmTzvEEMsVVbirRjx4gZdkQxgYw9dkPCdt1gEiFXA9jph4FekuyX3SUhfmjn",
  "key12": "2CtgChZwNaiTkGn19dfGunVTsbeoJ35rS8QbZjwPtipPyb5zHkRBaFnJF11QQw2ua3gYwG9Xgy1mnRna6mNut3Rb",
  "key13": "2qyKhQJamaAGxDYcKC8UMTwpKc5zLVvrUJXYD5m6JMGekZhRjsSCrkB3xN6FBevyuGqUNSy9QTR4dLyPWgRodRTW",
  "key14": "54W5DWL6tcWsk9sR5KZ2je2qTbkHFPUpTtiDJ94Hr3N6y4Ymr9uWBgcXsr7bkNJnX5ccfykVcLsCBTYKs26284va",
  "key15": "2zaaqM3wXa4ttFCd7DPtJYrvrPzS7ThSYUQg9E9oZkUSpA2oqne1cmNK1FNvWuPeFWaxj3BrpyuyyGuFxAJEpFox",
  "key16": "2NJpoYqi9DWhtftVQL2RwHyyNhazx2LJqJXVBfjEfpv3A3tgdgYT2ZkGE7d5rDJX7WQ89vuUfQ1v7s6WaXUjJCSJ",
  "key17": "2cE1dg3rPUBGNzZ6G7pRAx1BRagciuBys4x6rW654kqoBcjq9bLfy5imxHZsUTzCfqYQr5SZ1hBdABR5kp3GvBqK",
  "key18": "9XY9QyQ8Aj46QrMSiXZPMKj3iV549kAU4bp8enQzJHwNMcKr6rQDrfGVgbWnwNVuu66C6uGMRQ1kDGBcGbfoKTE",
  "key19": "3kF1ZuY7cNX43Tsz6xXVZmiRA1qLUqsSu9UXBNWQxwno8iFTa42MNBbgj6heEK5TrLUbuK34gFJ3WfniAHkaCVaX",
  "key20": "3gZ7RTNH6T94wa12kMCoqMHdLtMuDfpB1y7MYpcJnFSABixpfUihm39ubASbBspFwbkvMA4qcmrpAeajzDAQCvas",
  "key21": "2eP9kkWZLwJHNcfR1UcewDd8dzNYcCrDXsAEDmGvbTLgyVGYssUo2eECGrV77uh5siYgpWK92H9zw4wpBhhMmAb",
  "key22": "64xtToWxxFfF62dbPoiNq5Bbox9QSAnh4zZKgARcAY3mj9tohiNX5A532NWT5H81RNqSvXn8Ngd39Wfsg2NiniL7",
  "key23": "5JoKbCN4gcaCpB6gEizXKq3c5Kor6TSNeNxTgoN4fUZ8afjn3mJEUW9iQjYYXmAQ7XDSPpJpZv3aedYGa2bTmqTR",
  "key24": "WKRrGFx2DZgu8jJwSVMWqdAfL4ztxmxHdLF1n4ogicJGUNf7zfpjsi4krWpPHHmfLip4xVJZxRXvxePR4urNLvJ"
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
