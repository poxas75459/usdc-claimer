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
    "2UN86zELpwEy3Dz725iDxTogn8C1ynbhKH2CPDBX5KXPntmGjTyN7yfnmWSz1a9mrm8HR8RFxR5jhr1mvy8QubEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JKbXYbMoe5nESkjNondEXq4ZRYzn1WBPXWm1dx5Zx1MbENdJu2ssMHeujaVxiEbr36NHHyLkoS3CT9A1WXR3rVC",
  "key1": "3pifp2Vs4NKyTnmPEyuZRJ73tD253qEtHcfzEuqYonK48uz1f4xTfZw1JidmwntQ7b2iijdKyFraenEd9wrahMHs",
  "key2": "3Biwv62Ku91mvNFGcUBFv2Z4maLo9LpVSUFnNGgVmG9H5KuQGt6hQTCERauohMQfbhNiSHR8gAfMuCzp7ixr99XJ",
  "key3": "2AmSLGsDE928XQqW21Jm2M2HzxNxui5hzGgXQozcwdHYeGyoRqEuGLqsMg4Hq3T8ESSRVZccNotRVq1RGpZ4r838",
  "key4": "36N839s7YV97NjdDRadtBnr35JzRvQiE9j4mnYFPCq9yr1eSzjEJWypGTtwtjrARNSAMRLEwZNYQqXf2KSa4pYdn",
  "key5": "gEWXwB9zMYJofZhvMn2sCeNT4Fe467uYz1389mtSCdzY5gD7wWyFqEMjZEpmWdWkhVqGEQvHAcjPnTuhNX6aHCu",
  "key6": "5bC3ekZAjYC6mqPZ39FUP5qB9UG1TJx4XTygcuRrQjmut1oXZZySKHo8hyeQtPUYiQqQAwNvN4rz9k28SdNkDG6x",
  "key7": "4kV7v5WsSe8HMotD8893Mip5mYyhfSGoeNgZiUHSvnAeiGDPPxSLcVFQTjF8NYuCPFCHFiuqmGCpGQYYCYVLW7Nx",
  "key8": "624juGZwHXKdipXD8iNYmQajevMf1puNMcCkUbZhGERoFBRgJRgEc9ehwqSVLq87dMfFMRoiePzgzVeoa9oUPQDr",
  "key9": "Mt1p5vLzKBZ38pnMzmYw6Yx8TyfDfXE8ZB4cgiDNQPazUv1cyinRhr9Ld5pHu6547tm12uDEc6kiaSrTHiYgPmp",
  "key10": "5ykePE3QyFVkADErXVgdQ2e9YsvzGRpVhctFt5QiSN3AtSGUeECF1kaNiF6kWoACNYVoppNjy3C1EQMFx49eKYia",
  "key11": "2jKJXhg3SpWhsHo7Dfn1W4EbcqrTs9HTGZybu3JcQ1TJ5mqR4neLcjz2KMTTiXuSJiqgMNXgrsM8WFRRib4RBxRh",
  "key12": "2f4x63Vwom5HUpgdg3Ec7seWFni789L3GRRjYQjbZm81jzNJ76zWsQWDBCyGDnufP5kNFHXdEUxZATyCWYJeRDQF",
  "key13": "4SoXrN57sB7zkQQd1feYxJV4EGcztwUvmLCp9TfokPqxE9AQqHH7Uo2Yop8pj7wJZbo6wKut55YKQwkafYZtyKRD",
  "key14": "5MdMSCc9VSDPzEGsmaQi74DrFfynm4gVNM1FabPcLCxpG4RFcNng1YE6fKq2ayEggkG9Fqt1mgo2HTn1Xuqqw7V2",
  "key15": "4xywRc5BGEA41PnSixXmKfYvjiioo4PVUUiyL2xB6SFtKGtv8hfF7PVYDckBeEQCePLpinb75dAda4HQf59KbQVT",
  "key16": "5ZwyAPXdCWrCmNXoeHUUx2FMRmkzZPACq9GbzUozhczv5uEyn67k3jsUdyvAFbFYW4vka67m8bBXRMTpPqtj3qS9",
  "key17": "3rhW9GusmDcczy298J3tw1vBFR5TGsi838V4ojaJzPGrxEA9MJJX17Mv6AUtSjMiga23ehTjYiXxG973CkrEaQXs",
  "key18": "2qQgDFZz9mGzhXbkAiykQDta1YWggJfj1kn58EcdnhLVhvriyP8kTYyYhwUvdtVQysNp6cB214vZfo3s9QBxKDGc",
  "key19": "2osEVkeaRJnFD3A1JRtmxW4CXLsZ8wjdT4aoUJR8NHu23aCpXnkJFSj9k686dB6sTxdW6uRDKvgJNnJR6jxv1Fg4",
  "key20": "41sFEc4EATi7sXKYYesRKop3n6L1miDZhQpRAsNyJWEvQKm8A17zpXKedwyYKHoQrBkUUoMPZbmZRWahQscd6pNx",
  "key21": "tmdcXh3piThPJLcxUSFw3Tmwcw6jJYVdaJE6Fa9iikqhajm2hZTcPQPp6rp6XnUmCDy2FH44z6xGAvyHKjEfVAB",
  "key22": "LtW3zs5ir9AyQT7qpjX62ubXpvkgq3be518ECmhy1zu2d7KFVY1tGqRU6f9Nz98eGkF357Zbgj4sLwvpjoWx5Xm",
  "key23": "5g7pWW7oCNorGWfv3q1uL6ZfXEywccHRcSvMxv5ysT5Jt61yz33N3gCQWSUA3cbvs8NAMhecrQKFndjpydYqbA3K",
  "key24": "HWsK2DKgMjermgyNqPHr419ovWU21U2pxV4B1uKh5hnhWu15S6WV5pYHTE6W1dh9PEYz6tJTuuqfgWZ4EtSr9UB",
  "key25": "3qQofTBTjowkMGErpTjg5zi28CyQDMKkEnhGRRKqpMCLVsVaRuLBfKqHcWUvqdPMnfDbfQR4R4bMkg9ES5Rsvm9Y",
  "key26": "5rh6iSazHPyMzXrx732GGN9Akf6HQwemDx7zqzW3HT8NZmGQjhdZky3HFXWHgG6eiqmRTYXEjLTrdyE7SrDDZZry",
  "key27": "4wQ21QNuSdc6z7tMb86cFryk2gXD25nNzVfgadkWujK3e1yVfPAkNq7v4oawNSPZdrKrnu94hM6H3G4pSTB6mici",
  "key28": "2tDHQztP3WkFzKD4JU3mBd8x3Xp9V2N8dzf7A9KKjdoM1HLK1s8sjB6xfac2PPDvWexvuxXHxgzcVTUcegdvnPhU",
  "key29": "iWEbt3BLdU9xFDuNPka2dHVhKord2uVYFqbuCHSMMSGW65D1c2ZJBkDgdufKrxVpBHCPHnDYZTDAJ89w9J8vtu5"
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
