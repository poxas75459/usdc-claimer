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
    "61NTtFKznTb3YRXVwYRjoxWWYciUhZLoKcmTvcq1x6YeampkdJGiwYejkcWZqxAVK5DJxnG6qtgDG76y9MhyUYvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6sx81t4gFvLHbuWFQmbJbdshPd5DmZPm5FK22Hbp8AQYjk5cDtNVYJPovVCA4K3eYCKgaDMWhqaxRnu61cLfDCx",
  "key1": "5Szsx6iTVnMnhrZYNDfqSp97hsBLJX6EX6LxzhTDDLrLyHaZ3V6xyPFUx9CkDwsLZ9tVanCxwPAmxxuEFZF6UkbG",
  "key2": "5BBB6AusMWCgoFTLzo8bVTP3Qz7t1JfYo4fjoXgfNhS1wGevbQT5NthdFUoeGXitDd5mh9H2Dbe5W3gbqpHWBRYb",
  "key3": "7jDDohLyKr5WBE2jNsXRrJMmuxW4GVgSFk4RdwnxmXoeQMgAc5koebmsCyQydKVPoUoEa5kqrHXPHjCU2ZYiyxS",
  "key4": "2Y3h2d8kcT8eidPiFKM2JWMLdZLSjhVi68bN7wuwtKqW4tc3FJnA4udZskdWZ2nPSuJD5bsxYuNRDRnd8bWJ56yF",
  "key5": "5tiWtRujbR1mDAt8xo1KrFMXdi2iuLvJaNhL8kMr5YzYfCfP5yPWCLUjtnpviXUhSMHyagaQhgQzni3pKYs1MAEQ",
  "key6": "2pZKLT6wnXVuQfi195ij4THcZxsA2YtVnfRL1u4MueJJR696PJM8oNkAvKNYGAeFxDFNKup4B5NqCS5N51QyWebe",
  "key7": "4PaeeoXE8JmEymH2LjKcWRnyQdCFQsUbN2hSpJMhV7CzMLD4misapnq46HNwQHQuABVfHLznD8Pz8WmfFuyudsDg",
  "key8": "5mVEDUjJtYMpxcae7Eb6RDS2q9Jcvw9soPKaLMGrJTDidLBPyp6Th6dtbaP7RRdPYxqNpVJ2pUf1m92PQw3hh25a",
  "key9": "P24eAyZLS3EPZNEWoc7A6FWYKd45ocF7znjTXDXRqcDWrNfqsNhnVRfccFh5uokDHZiEyP8sTAvyUKtfWsh8E13",
  "key10": "3wgbSY5ZuNWhFiyxugo29xMoqXoEtgnPsoj7Drnpz8bSTbSs5y2L58HYhRttvBUuzvAMnv7n4Dkej913CJcAq8mi",
  "key11": "56myP4ovuHyuZjRyvR5hhPuwiR6oSCsN6KXhpue1jwy7jqjKzGgG4sxS2sP9Cj7nceqgyCPct8gEt1EgR8pBHc8n",
  "key12": "28q8jKshJDNgoJ7vQgocBeoF3NLjEXHw7QYVLmNgyDtiLhyrA3QxgTXZYQDsSJyZu7viD9qhFJbiTjanHDP7Gs6d",
  "key13": "3azPbnprLWsRCjqVzRJKM6HyXqVeCyzSEWugMzDk1ckKr9YNnwcYnhJT7HR4Sh21FqywnPt9JCpwLaz5fR2PdP5M",
  "key14": "54SCzpbvfXJtVh4i2KGDp3Fd8ZsAnNKZZHzUAjvVfow8v7Kepc5TVyGvFK7UJ2ehXWpbCzAy1vXodrT75MMVzVcX",
  "key15": "9QYP7LxdUaEspL4PpZJbaBhv56mzMmLkmK1Fj1eQxB6cRuuz9mJLBcHd67CNzQ8pPChJ9q6XY7QNVp6uzDbE4oR",
  "key16": "4wBhgGma9HyjQ9DkiMpeGPvAt3ufiaicf7esBwgcu6tewHcMfY4NtwfxaCJgQbriWiUAsqJfs6ExeMWbhawd5gDx",
  "key17": "5ZyU3jrkm1bG4A38X8buNDKDCgX1T24VT5tgyx9AVAFzLJeqWEaBwmm7he4nDLirN463MPcL7uqDyNs9QYj5WWQn",
  "key18": "5JLjPEFf7GQ63RMKehL39VGHskDv7xWu46QF7bHrRtBArXP97dp7qDrRhRGwLtvfBUDMbe1vgdFNhcfKhtUFdFCG",
  "key19": "3PD83enU18WrbrmpqN2ckd2uFVdwMFZppMqMYs5ydD3dnAVeXXQuehg5mwdfbui9zfopJ8WLz1RPpPokzxZjKR88",
  "key20": "2Pt39ccWKt27eH5h59EV8kawoyD4GwDG9dXbAvGNxYBEnnbVMmnwmWprtt8Gz9e1czzKZMbuEaFDZxR2tPhXLqmd",
  "key21": "5KW2ckjXnBTNRwWrgTou8PMUqc2ht8Pre1FtJdY1TMQnnCz3Xuvj4zSUbHBkavAgPixGRRmiFhWNZfTpxkThXCse",
  "key22": "DJQMx7v5kr53MMgfgaM6DEsXM7feCKtqQ4mrzgmpPQMgEnSCQ1i24ygBF7ijVyvypBtWDhwcpU6DojEenfHE2Qj",
  "key23": "jwstHPT4r9TrhrHhv7wKpHtJky1z6uV64pywNgPLKiTK7TMSeF6DTK4C6mumWq6D23aCeMMoXgrVXgHWPsKtzMr",
  "key24": "3LChnGXDT9SGmHb2GjrnW11FBYoACkvGn2UgvEVSWtnyLo2nZqjoHKgBQr2kmpRc5PCqziLR2b2M6qSCKFAHcKxC",
  "key25": "5q8CnYNpiGNuJVQS1h6yeZ2Vef35Joq94CyvAGwteYDapnqmkLb4M6gY625zM76eQ6ayFwa52KdM9xmxnhVvxrgn",
  "key26": "VCFFb72wUjH5gBmMRe6NtAaDVMw34D852PCwcLoCkjpnrzDnHaitCExoT8CAbHoSAKGUMNm65dEES8NvZyKwj6u",
  "key27": "31BiJm2JPxZFhLnZoB3DRvq46xizntL3C3R2mqG9Ub6MJPyqum8ESjusGoLcg1XtMvTAHiESEXr81tsY1J61UEHz",
  "key28": "4wvUoRxwKGg5oyThQg8K8Vtbs38Y7E9PEXQGdx5M5QoRpkm4zL2MvhjBhrTqsJw8gyD4TKrzH1ujJHoNrbzZ8UEV",
  "key29": "4arMNynCQjhfVxSraFyixqcZchcToWNcARWVYKt3vtcqaPwuVbdTFGhwow6xJM7rNHuQ8bVFL6UNBwoe9qhD1Vwj",
  "key30": "2UUsp8KFswHEBTWy9WqaeN8KrC6LoMEAJoDAZwFcdYSdZDzFeYx53e8qbDGk3YveMyXYDxRarQXnbAhCAS2Bd8oG",
  "key31": "28uDELghUoANr7xR5VEz61wVybKtyYprDpoCyvr7YKP49ENzr2fyJt8au7JvP7WSQiAbmhzBYTQJ5ZXKMvSt3iCJ",
  "key32": "3yz4Hh4nL35zEcvKmWWSH4PB3svVHMtJ47hHG9WEJj12ZQ1RB1QqwJL8gDrfEVuZo8BaTD4R2MFwA93d4YdiFui1",
  "key33": "4efMfKpBbaN7vhDMh5EJn3cGDm5cWs1gBGPFQJ1aqQxpjwjbRo6R8sCAeadu7m5gqFmkWyVJRYgrLFR2xeZrR4bm",
  "key34": "2WobAVLGr1dxo9q5VqP7Te5PWAenYeynEvQDGwf43SgEhdVkvdEmYsgftQrW6eR9DMQ7dk254rAfUPzH58pdn1ps"
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
