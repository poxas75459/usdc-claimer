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
    "65YXDo9sNHMWSuc5quTGhyvJQmSeqVTkHVzeaDdvoiFVaQrFf2tiR3CYbr73uhV5eKgYh4ANZtM7s7ajKzgikMNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CXEHnKJbDqqDbUYHG347a8HVYama8pFVrEBY8fob9gxPzn9x6Uiqe51N4zknFWJsSxPEjJDWWLqp48Cdw7L328b",
  "key1": "5F2GhYgvZsFkLgkw92BCSHRfuEkkPAkGwShC4jo9S1oAsWg6Bij3kjJLj33XLfVviAKZKoeTU6gS7ieuCSYJ46om",
  "key2": "35kAqZN6MmHKhggJMoJMbL3KY2gpBT5fLRt1czupHU5i7vBjWhxAEGkzcEmtVceXx6dbs2NgeaxTTA33tD3tqMps",
  "key3": "34f83vdt6DxpqiLEpZuvQabJH9y2EuV2dXCSYNG6tMZnxREgukTPzf7yTHNoGYvHnNETX9RaEKDguGyPayDWX6eB",
  "key4": "5TBr8M5CceNL6Rei8Te6Gv5bQXtDQERCwUXcRsxnyjuhcD5o8xSQ9CHMbUFDtY6utFmGGkoDxBqJiHGCmDBFy56c",
  "key5": "2cMHJ8ve4iGkvAEUQEK4nqWz65XDkNQ1pZFXLGY4QupMKqU9BogfogJunUzqMK3aDh5MK1tdB9iLCAmbVBZtmudk",
  "key6": "3pb6ZUUwBpxBswJLowinJihxQY1Z3QoeRqS8dYtNCYpsRAW5w5XUNAJPT4XHqnQGJeMdN2aJ4HCPJyB9P8VMoHjD",
  "key7": "4abT9i5NgbupnMtWkzcacN6VWyn9PcNHQCZ91zUGa5u7AjXQzAu6uRZdCpgnGpE9XSAheeHQNMDax7xGRp2NEoG1",
  "key8": "3hfsPGwkXGJjeXAt3oLCzuun5ufnKpCFFeRRF2zYyQ7WZeVUbPGaXeHobXZVmapehaAE4iY5Xz2DdtCgWdreeHdC",
  "key9": "66gozy4jnqXSyYhiRQje9Z1wpZo8cLCCkMrmmLLF5c8HxdMCdmF8hE83gbzN8MK1r6jpHPpyS1sfNrfVmHNxSKAV",
  "key10": "35NpUCu12vqaELT75XmZ41hR7e8Qq2Ursb7VZ7cKT9oksUvV8cgkUSVrrX39nSXapAgNmfHPzbpYmhKACdF7bXSQ",
  "key11": "4GBaR9vckwWveLUfyLhqxcYbuDZSEvxUSH8ZhS23U2hJnY4P4rgN1hrHj5WB8VRfcd5LkrTJJZg4KhxKVPkXekVk",
  "key12": "2wBUKrvuycBG1umhXrns7bgEnGQtmivhpwLViokPVdT7QfbxN5KCxu82QQpaa3kdgHZhjza2DoQYsfJpjbaDb1Qj",
  "key13": "2fJ8jdDbb81ytGva1etsGvBe13uhTB49m5LpRSqzmwmgQder17pZKUFzWPh9P17UwjjK2H7ZvTkSHYVsFVRFM61E",
  "key14": "LarmJXDEhMY31cBdSV8XshDoxmZZvQTiAhsbaSYBuwB1yqkrWzYbQA8BcMsWrSBcQpWVtXiw79tyzrrxfmVRLwu",
  "key15": "3BHaCewUJ2GtPWjX3GnuG7VKaw8NmYegY7xT7vQSnCorp7vyhiFrVJZ1fvnUxqyo6GgoFvpwmHMGE596zQsawSgB",
  "key16": "DH3qk6U8Q46g7E5U2UJqsX6pxT1CjWDC1LEviapSEWEFJQqBukxEECkGDZya1C6Rjr9py2EZZMzXpWrKTM4xEtW",
  "key17": "4zPMuLFZ1xDhuSqZQTGRtBxzLWHhZKciCw19vaGBbu1jfysB4JKtwhbAyFwZrRirfQT4XKQFe9G1Q1QNJ9TwdzRN",
  "key18": "iQSk9JKWtMpGrqzUyZUrSTXB81sD3h29ZBbtxARLXP3FQgp7HgoM2YgX3RmyyE7LAEerufye1PMKGbWFdF82dQ5",
  "key19": "z6yate6ycdZYWCavfvoppkNt4wknbaY2tCJvuQVAzAhYc4vzz4rrEKcCDLLGvGEm3Et2feoqtzbKSWLLEHZJ5gP",
  "key20": "2QdS61ptvSizRjYZPBYzSpmVjDEwXCjEX8if1hcLvDUh7Fcrbwy7xEceNigrxd8aqNLEAiYErDn8fyhw23gsZyMv",
  "key21": "5tegXpMWcUa89UQNDpudGHnqG4Bd6tfURmU1uDpDw3Rv8jqCWMGj1UHSGmDvhGSmfhyb27bhMuJ8EumJCfUd22Xd",
  "key22": "3hCCMkp53yRRyyxtgx6UxxAAGkg7z1bBJLicEmyvTKNurhsW1QB1UTD7AYuvoJ8QG29ug5U4WoHh8JknXWu9zuXc",
  "key23": "5Awi6TLLs8E8Vga9FrYwejSrUKTKAJKcgE88ivfuvUKVK8wfQgecnLEA8q4oi6Km95fQPbk9tneJggMuc8kN2YkG",
  "key24": "mGyESLWTXYNpuwjLVX6JbcQqpn9cwjYcbbzALyUj7SySu9JFadrAqMSmUzxaNet5XhwLj3N9JKyGRDDEiSjtjkq",
  "key25": "3xhi3RQvy8YdsjkEbm7pCfr5nV68XSdinoXVkP4j6Q2MBSZWdxbEN9soUtDV4if8CVoBawHKdwPu7bzeLYmUCfTW",
  "key26": "2Mz5dS8d4SG9DTGuxzwAxWGoS8uQfNJ8UjGchwquHAdfDidfeDQY54y8XEnCQ3FHN6iaNWjzXXwuGPBqj1MkRyPz"
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
