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
    "52unxZhPvCTYgW7FEcyG5oCnMDEhMiqXY9Ld7AWULzjQUKwhs4g9Y1YHB41DypE3VusLopYzPbThHc3cX6tLFZk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EcyU7RgH17M3dBosDUXzroRDv4fGWjszAc6nLS8Cu1kKbz8zE5fErZ6quW3uGW8Dkw6QV54HUUGL8yQQFJX9gEc",
  "key1": "2B9y3jmNSLFCUjTYkH699AjkwedXPr33oCkutYBsnCsTKfkKyKHgMgv1BsdyeZRLgWukEhdBsrphsU7tU2UWmjJk",
  "key2": "3ZPXcAQ8pV8wP4oRJ2MdajmDiwsLP1GbNJdQkhmBY5jWVVXiMmqPYEeuQcuz8VNee67HkJCAEKBUf3PT2T6vgTTh",
  "key3": "2CbLi4YHo5zZzTZc6QYXzSVwcNvJEEhTzQ2EMtd2QC4E2KgDUTfriKwT1YGUyDDyCqt5o4wwsXRaozQaTxeN6Ubr",
  "key4": "4iAf7iB6N9QSe9C2gwRmxc2c4dZ4gMCYmmtHmtWGhnZcfH9Ni6ectywbHwCsNhkUnocgcvv5ESiWYR3dm88wot4L",
  "key5": "4zuJ4dW1odbgvBMf6LXU6qMvsSo4vEovJY3Efk5dMBUeaPBzxSV6VYuPpqHA94dEXXLo4X6eJE6WrmAxfYdxPuqg",
  "key6": "4uy2McW6ka1f9Qa1RHsSTFCpztNpZzH1ZyahfkQd9PZnZdp2XmaZUVnZdZ1dWGhGqYWGydcJb4X4GPn9zsodeAuj",
  "key7": "5wQq8HFQ6kuyHMk1xn4k3d8yGy5ggFx6jWjrVY91JmMhakpVdysE7gvb6bbeXkfHPUSa3d9KEZd8i8EVh4Kp9NEB",
  "key8": "5PFZbj9Si6GkZhoPLBpaG4WPso7zu9yFTA1SGR5QB4gv4EAa6M4JoZZA8dU3aHYvMmHs4Qwhu6Hv9L5EfrzHn8K3",
  "key9": "ExnneKBzrd2sV3cChbzLxYuGbfCj39YtpASNs5ttfEy7W2Av3VodWTiQptruoqhRVBS5pZnamCJVmLbHx69i69T",
  "key10": "Ljdu5Y69zU8TMJEfoFyYrCrWAb9Py8wXAJ5tfEuYjFbhk76KSs7s3f17iYmuHPGZeVjk31Y26oyAff1wTeCCLin",
  "key11": "653Kbvjzbq4dBnXQGrVTEAiKB1AF2fKTTVQPmT46dEryjxfbRYD6P1pC8X9HCFm3dzHTzftURd4ys6yBELUsFbMG",
  "key12": "4WR3nWvrMugLCjvE5xMFVKbJ5cgr4QUNxNrqXT9D39boUzs83wKmT9g6AK5UP4op2nxqgwNbMSGRUgh7pzYRar5r",
  "key13": "33rsyaRQzwfBJM4rdiLoikqJWsg14X5d9BV6wDRNevD8xiMUGc2nNRfETFxDwy96YG6tvYhtUPRhd7MCtfAouSbV",
  "key14": "2kiLam3qoPobFBq5rFsU6mvXwvoaPfqasSFBhSmxAJX2shrehi7TvNvkwCvxaztrGCrvSYMnXrFktc8QjXKNoPtm",
  "key15": "5VJ7wFw9etozvvEaGseoWEosUaGNrhJv4dyrFZS7QJNaHCjQMgt25JrnZVjXerrMumEb2s4fVg5unc1ofggzy9Vx",
  "key16": "4kmrsV5GWAVvQsdJuvdbGgyxyymZ2Md5eRkSGaAxG3GNwCeQZ4zYJ5Dxg3TCSXYSyQov1TymvZbp5vmGnah1GUgz",
  "key17": "67NUYdNAYnHfiUW8ME4nFcfKBtcrPLHSDeDKYWu23ifcWdDsD13fBycp1wnGxXVspxfKbsv3vqM8z3akccWCrJhZ",
  "key18": "63T2FCjzJ1zqe27n1oQ9NqhSXSRuCzriwaZb8oeih1RjnuMu14af2qGLdaUoQZjTXabieiJUFEJXpbbFxt8Wbrn3",
  "key19": "2FTGUgUKXdyQkoNvXLCix89Rh8mAct4F8B2NVKm7DWnV8aNNf8pqDmvV5tZQJAWkXD1AAb9brAkrrjWP9jQM21kZ",
  "key20": "2iVWoZZRvTQ3uAiyU39Fi9TF1obQYmL2Yx4sLTjVwz9uf8WG5iYypR1Pwteb1d4FtQePp4n3TeebemtoRNQeWFhe",
  "key21": "3g3yLSWxV2K3wnr5phDCMXaoQi1Z6Sb2MPk8pz7ptnJ9YHEAugyQmucWKhzFPmhCctKFXPDM5Xxz1BhTCGCEhSjM",
  "key22": "rVaax2P1DCM6tiWrbumC5XdPfiUpWMq64qih2VWP59PMp3M1YsoJYocPDNrKtMB8gFRSnvmbYmX9eb51GPhLBKK",
  "key23": "pCJWAdsw1YWVQkjcu2Wkn3dZyaXXdKJA6GZBLDqY9n1kFfz7JEkAybxehpfPjEVZ3qyjV92cfcsJU9H74TrXVX9",
  "key24": "3XRsuEVmZQN5rPgqN3eF98BZ1gW5JEvZhUwrtWQrDMZG9rZTNQ65wCfuKQcWufxozWHo6tk7o1CAmRgAuEi7kT7t",
  "key25": "5gA2Z1VbM5RpiWaqVbproD7NqosSk5oxUEvfVMWBq8aJz8sW3zr549LtrC1phkYZBovigCMPc12MntS5dtbf93Y4",
  "key26": "2vCiB9nATt1ehZsTWUHrsmv38KbYExvrT18Ehq8UREKjHxYVsppyM7rcPX9bg19DFgWBakok9hEkEQEzvumuMkeT",
  "key27": "2eZw64uN5NoBxu9s28HQLwdtuZ3cCdJiyPxzLT84JRhGVewTvqC1Fw3bLK4B2i4cTqDR8Y92mvKDBRMAYS1YpH1G",
  "key28": "2ZwrvxynHLJSbBvZH74kS4Up83SsypSnCEi9Nia9w2MVxC6uu3svgLHCrnqF7YsYYiQPDa8zJbgdhuoumG6xexCq",
  "key29": "48AhJqhJoYwWPJuqDk6JfbBxYi3cz3qJdZtsA46uGTgPfo3dLJzcmrLKtDdczb2SNxeaUkFqV6CSeEHxLLN1bUMk",
  "key30": "5MCYhZdw5LW7LSkMgvyzifFUhET7E5d4xVibgCCFyhu6RDodNR6kpkmdrdh7BrtiYfByiVq2rMU8hAb3Mw2y7MSd",
  "key31": "4grzB9aJXchMm3Ss1ZYr9YpuQqW3mAsscxAAkpjU8fpJUxequEDhm3uhyfjvXo3Xa5ADLRJ1feYfygufSNP33VEm",
  "key32": "aBLPDu7rGHgdfEjXfBqW3c2NeAAX1W63N53gVLnnGhJHEdp3X4rBNVJoTSwshKhHkZVDJ5gz5a3CaFPmVZuhNoQ",
  "key33": "3k7GNrY4FAFHWerFv7BuAp8wJAgLjoWqJ4yBn7cg2joPJza2Vg8hM4tSTUCysYGeHjow8fNjznNEHZhp1RSJjWiW",
  "key34": "3t6U7TbeWKo6jj7HpW83GAmA622gDYujpWH1JwDPL2UcCLPZ9G1q1HMNkzRmwB7F6K93hsADS2ksBSzg9KELSRW6",
  "key35": "5CkNSX2qCwx1RaSMnYGaxzzSD5iznujAu2eWrQwczNH5KD7CJFKDHShxGhZfXsSRHGefuQenwAJQi9PVnpDJwuHd",
  "key36": "JiSMXLLK3ZN3ESFkbRusH4VhcpDQEa9TnnBNJGDmyJbrdCCit2VTDLprVkmS4XmsxyEKAJpKqEL7epTZMYMet2m",
  "key37": "42AoE71ccHuZnFq2qUYaqjonvgpJrvgTF3yqptH6UYJ3N8juCLvFsPbhQzRw6Kb8EgwdVs95Hc4SEueYHsY7ZLAh",
  "key38": "5PSwKwsxhmFjGo1EVxQyoZiBwrSroQU5xNKzVwSs96L6jatd8ZhTfAbLhRXXMVv8umgQMvQiuUSaS9JedynZ3CBU",
  "key39": "4AjWAmMqH3bfWcLJzFnf5B8CAA9T9ozn7qZUkCHX6NH2rrb3JDSXgxycH2fTr6CVhxitToCQrci8syhLjSTW89Lc",
  "key40": "496yWPkST1SDKLSHTE9rgmSdHSdLkutxEuUZ1PCW5bZHFH6qZab7Bp4kEXzf9JE5hFKoDMkmjcviScL1gK683sjc",
  "key41": "Tcj7B5jEKbbFVqhH7ryityjGLgDv8TFQiRHxGxZ2fP3Tui4ZH636x74VY6pXhVj3PMxqH64sFhz5GQiQDYXAN5e",
  "key42": "34A6rPZFs6V7S65Ehc85tdJoJ9iad1ny9s711MtQXnLcg266UyquaaTdn9cAQ4wQRkVDagqxGB2DPiHCfbrN4KXY",
  "key43": "5RLzyT6Kh1SBJ6VwTozxaMGM9AZBCbXJoctyZ3UoBDJLbe7HffGkuEJx6uAj5uTrP7GyAkuwuwdmTL8fGZuX5ri5",
  "key44": "WVSi6foq6WkHFUJ1k7tT4q9PAkiC2HctmawGrHisvZTrkZG3vuZpTFifzQCd91XL9CMdc3Z1zk7KzCDgBFSLspU",
  "key45": "3RhGSayL5rYXCPdAgCSZ1Cqyc2m8BEkx5Fv48DmhgShuJE4kLz985zHcyL9BbPQ9e4VHbMLEcfDv8abCUSseFPWL",
  "key46": "4Te3rGNP7v11KgABLJdQKLa1qbGdX8cDpBqbLDDSd1kNYbFmXfWavEn3KMGmxUF3a7FneaUu3wHbx9Pvb7WxqenB",
  "key47": "5JxD4ep8sSMWqYhrWsUSVc69TYwCMSkH99STrC32hjWXS55NbsPwVMASX6s496bXZPiDrsUWUhoEmL6bSqAeYKMH"
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
