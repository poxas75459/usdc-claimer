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
    "2q8CirpPbqiuhH6CDc8Pov1J3adm68ghs1JAMBB8XLaeTjoGcZaqDwDwDJa7dAYQ1bGTLUutFQtPvcdpRhUurNus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hinTVL3pCXsoCGBcPRWVJhnbmseo1J9egxfG5mE327Yjb18Hym6scFhaBwk9af27QsDDgtZsZ5ugb8JVMygaict",
  "key1": "3AzwYpXuHHVodzhmzWRxoK1ssKdBUuQaWNNZJAr9yNbSknuD3XSyKUTfJLZf9MZZARaWnkN1LkqXiuUTUQsvhcsv",
  "key2": "5qJcNGC6ZtmByAjmr1dASRnTV667zXysrLhKMmbNJvmfRiBKEbxcQ8oJPdnkFsmNUM8fwoqxA5gmv9xomqhkPVJj",
  "key3": "5jHnPMsZHXTEwhiHNUzE4X3HddT6j2qJGefpYRnrUeacvgMnSTCYBxPZteZsyEf56zCGnyqDhMkXwpgnWEyCoD1E",
  "key4": "2off1viYvSPT5dhLj2mWnLm8seBWfwwdiBa7cZAG87ekPXpwjzgA3w1ZWU2YYsKQr7UgDaANSAoJC42sfiz1gSAP",
  "key5": "4EmVmDxZ7rFYRNXSKnHyoMiiQgoB4AS9uDZW4QWCzyrLor2hbT9w12vCnheMrW5gRP93iN6aHwZgMZGLfSX7kMAU",
  "key6": "4jv4XWtMeVHjZoCCep8Dz2qwUKwAPsKUnygDPMrRzxuBRHJJZfmj9jxhqgonPshRyjhnpxCtomcaC1XYTFRwB7sB",
  "key7": "3ga7JYWBUb9UwEH5AZGn5CF8mDEDa7PvZR1kJEgW3LvtVc8snutJKZKgJ9bR8aoGSVBo6ywPvRcciXbWfSNAUZV9",
  "key8": "ttJ45EMCKxVa8hBCgPJMoJgEgeKmbKoBFYrj9nHinr9G56Df9MgaJuUtbh7BpQvY74HQiwkpwrkwvKp1LS9pbb9",
  "key9": "3VqDV51d2TqqyiuiwBCHjb9LhuvPEqWweNhhu6HQtCQpEqiG8giR6W5gSVA3VzYPNGq1wH6yawxcHs4ebZnTkRsL",
  "key10": "2NoVaptBFXJUiKnyypWXwn6LpiGqFUdsuX3euQhU7EfVLR31uqSPDuhrShAWPiJmdCUjA5TqxFdNbQhdX9huFTzo",
  "key11": "2H9zMT7ogDciRbp2fgWTZEaw4qH6xurh8u7awWUtRD6ftSsgST7CjoUUxJ8N1w5E98h8kBcdZQX1GDLb17wLaxBK",
  "key12": "3xPDX8bRJHgy177kKLBgvg3GNqxhHPUF8avv9B5EqMK18ahoy2NjPWci56MrbJorcnpY3FsHsVVV6AaK4a8ZAwxS",
  "key13": "3793DgDc5SmqNKH1dctF8LXAnzcrHYJx4ZXG22r2cfMcWJL82sPdGVw3btxE5YmeWm6VEqfZVNUNn2V6NYCdHtwz",
  "key14": "2JoYsB1PT8WmyPjQLcLxKwDKWbCoLGe6ccH8CyZNRE1L9quUumjGyM1qgGNbRU8fVac8v5HB2tFAoVqJvZHcgTeb",
  "key15": "3tAbSUbS9ppVFsqWAocoDMimcbKe7821qJvw7N44CQ44cMMQ6fELteWcrioi8mXHMW15nHDKdDdwWRGK9WMU4C8d",
  "key16": "4DZPQQ2qvRFiRTSGS7hVcaqUTcWGEe2f9afF7YMY7poV7FZgsAGmXGdBKKwSTPGR1VEgz28ucj3pBdQ1bbUxKDRs",
  "key17": "5jzN6Zj7j8MEw7p7NkeZtSoWUk3xDXcZs3yt9nT1FvATw8GWsuwEhgCrmMrunbURSA1sSaMRzxpq5zt3S5KCLVRP",
  "key18": "4UcASsnRdhBEhBrdJw1rF342cb4bgNSNVLsSw1UVNcMXwzp1723bg55JYFVrMYSPKM4TRWdcLGN2i2s47Rh6UyE6",
  "key19": "3HKZWodScVNVer8Z48eYdfo4jfvF8toGpgoTD9b7bnTsBVmMdZtNtQ5wx7HBsBM9yoiMFcV3kyqY4RgEwPUKhrwe",
  "key20": "5w1P87Cji8xGpW7Y1gbdKRfmQAoLwcciAw31FeWBiUSj2214fcw8DPTDbiidMuKz4NEWSepADYzgcZ9xGyoZPhB2",
  "key21": "2hJCAiLHXuazTN2ee8AWcrUv3257gRHwrb1Nc6o2iZUmS6nUs8mmivxggCeEL7RDw2WkgUdJ2ZQzmeLZ4YhegFin",
  "key22": "fA9A8zN1Syi4z2L4hwBVJaAx4gbk8s1vNNCJfUMqPrcXAPfHFH5YjwYN3Q2Rh1Ymps7VepqHRHDpRDp5tmjfhHX",
  "key23": "MAjnf6UqSx88gGP5JPBiFhdD8wAMg6r7D1oBoKQFotVP23NMySpDv5GNZFosQ9NZTjGHXHHiFvYLvwZT4vB2eGq",
  "key24": "56wApNy3ik27eRTR4KA5r25hbZfATHqQD8VQLEFLJRpjZUEv86G3RwCx4RUSp4nNycD1zzc4z2PRpDi8R2DpZFoD",
  "key25": "5v5NiqcGRBL4TggPm9U7B5GTLXwNcxVStN2dARkLpc6aCj1kbhcKVKtY57LbPAnZzZV8b9mJciRhCs9dS1gdBVBm",
  "key26": "2c4EBr9t4SeAZvHMSc8g1zL7TjdpZhwXYH3HK5ANT2ahjZkZyH7BwYPm7UUG1cVC5wYHURmRwMJWSHAoJCq2Lf4E",
  "key27": "4qYkUgg4PfNjfUKrZ1AyGD2bXLmzBAXfdHcpoMe4sJ5PBfAyieaJ4bCn5d2zEvdyVTZ1LrRFDu7FDCKaSb4JHPZ9",
  "key28": "4SSC4YeyJjZjhDiZ6H2UdSdeKYKntmtZen7cWdmXjEydHrXNaMbZG1wtsoc15xdaVkdrG5D1QJhKrttucVsoaRUT",
  "key29": "4mBEkZwPkukaQMwmoUqvCaT8dSvaDXZv19i65VLYC95jEfnhJfTVuTxoijg28VQP3Tu5F7nMkt3PksBA1UNXCk4K",
  "key30": "5Euf989h2E1eWY46SVALJJuvkBvHTGA6sYQcHHM2woqjyXW4aQQ4MrwTtDyB6MWYZtK8gHvVwcyPjiKaHaeoCNHF",
  "key31": "5R3jz3YgGq6NQFrQUoQa2jw8zfDnmLuGYtCsmyEkSodzBDhm4KKFPm9mxAQyn3tnXAZXgXidpVQqo9fcx3SW1u2N",
  "key32": "5f7paCBdF9yumzmqoKA6JbRb9JTmjt4GwfuudH5UVXo4bu8CcorN6ojc6Ld6bjwYWbibSgCPBWtodo9uec6xXmo9",
  "key33": "4zWxpYqayacSFHZkgXmNPLLNwR7qoz73RKyQ2nA553SzfZdxt4STgAEs6yhkFTtoUBm1xoRUcxWHw1RRVtaQDixe",
  "key34": "2Aybh7aX9gjyLKegrWzhsju3DPhDBUBNMWWYs5v6YiNKLWVgwPsyRqe6i5EbvLhdTBD4WxPdMEfXJXo1TkqvU96i",
  "key35": "4UwdekDxcT8PuGAWdg87QmVgEedn7Ag1DwBhTcs3Sbnc12Z3UzcfzKiSnYQVyvAtb28fsP52picGV7KvTNrrYec7"
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
