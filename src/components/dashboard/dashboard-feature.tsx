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
    "4bcrJZiJj89nyGjpDCpBLKecJrRZPPgCx1vjAAn1HkExS1v5DXQyfgVEBTLM4bNsbdt4TqqBsGWycLPFT6mmZMQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xDN6TT81av73vA9N2tcViUCNo3wM5r4CYH4bw2JMieSz121dYWjGrQjUFGotxFwR8nnqpABaam2nHLn8ypdttjp",
  "key1": "23qzT533hzLietQt4gYmTE7LeNjoWzfaSi6h8WjL7dRWjeNwVeapDh8KtSZzFhYmKtKuXwXVcTaPVD8sAkT1dxV8",
  "key2": "79vE8Y7PuzY58DWiTsF3wXQ6ukAcuED7VaBQRKWAaakbo4DJibxiDv9xuw4VCGhDPDePDNioeEbFig4Z4M5sjdq",
  "key3": "3ZBDZpm3aUBFa2uY3msL3eJ1cs8FX6S2GovWTBW5NhCNb3yhYgJbJ1RQebQ85t9BWYM9QXwDWdDhsgfUvh3GmL2b",
  "key4": "msA62RvMKKvLHkUUJQW9TfNgq7y3Y4X9FNkBpMKsWmF3ixyGL5QhdYWFmss2dGQVL3cekv5Q8vDxBAu6f2Rn6sj",
  "key5": "5EzeRrXqgLDg1BHJGo8BdETVnLRGs3omKgWKuVVQPhRS1YYYH6bi8yjeNfbouunugZvyqo6qMAdngQWaHBzEvUja",
  "key6": "JLofHYMugjC28TxyqvpzpL2gS2KdqpA3Q3KMaFA12BZ9hodGCoxwE1diRhf3xs4nZHX7cqrmecweZsKfhJvch94",
  "key7": "nmWb63Ev5GvBxEioXuqBF8bZdPbHTpVVgZ7jJkNkySgF4s8Gg8ahGPPgQ8DqjmNh5nfaMpRTyRHS8qpFP4HWeeS",
  "key8": "2niXHtiyPchDsDkThDsFmvgxBWLWCzAd1GzVgRjerm2qL9DeKWoxv4b4QWSANH14zLfJDNaNaBcqhozbZSZnmsY1",
  "key9": "5XK127i8qJJ35r8WgSX66UUoNUa6q7xcxTdHVSkBoTzuAxdsfgpk9Z6tnSV7rv8MGPmyUiF3sVuRSrcXyiPMbTbC",
  "key10": "5YbKXkZtnYKuraFKBpFsuphdpyNoG6jDAhEn2QGbXkDb6qq2U6avKhw1vjN21WvXiYxTBTDZL7c6M4E8p8kux1JM",
  "key11": "nK7pSRrPC7rYj3Y7B99wRKpfwubPPUeyfVvXpznzF1eemHsgZYyoAtvwXP5tDCaANyhaYM4sTY1Akv7Cfsk4eA4",
  "key12": "8JpWVwYi8ZPVG6zEpP3aqtcJ5vEgiwDPcoHLDnjVg7NcaoMvNSoiN8hwXro76nmAZYR1Q4PSo3DXXmkHkrjfyBL",
  "key13": "5AV91xLj3bpyc74Haqog7UNFVSBAWvTZ6VkFBfZB83wQ4FhXaEHk77ff1qtpcsXe3HDECE3M8gF17hhz8SoTz7ri",
  "key14": "61j2kkRSF9HQ8RhaqTx3M6G5zQxEDWXhSqhmZMHFKFecakiRNt66XvViZdsNTVpPKAYudzjuD36MCs4KP9csxreY",
  "key15": "4sqGweghottz71fi3PDBdFdLVKKrip7kSMtN8YCCu6avZbkz3AqdfcprdGw9v5MjmqBBxouU14bgH9mQ5DebsAkC",
  "key16": "5yvVfcagjez6RX5K4tAttQPmsE1J6Nqn7AtNym9H7Lk4fojPf7k5Na2Jt3i89H7GaUftpN5jFobeBta6jbndqUu1",
  "key17": "3HW4NAtj97KZZ3Rpzy3zK3mDwra7MHxura9daXQNZ3wRU9aYXmqwGGAFLGfe56zWy1uzy16shXMcFQ2QTJUXHWKJ",
  "key18": "3opJTSBTm8tVcdeF1XfHQFoXGMUPofsdEHA9nh9S5ZUZbjFp1Y5Uch7hxCnCkem7J3nvGdMGAS51p3jBBBCiygzz",
  "key19": "gPg3fodsjWqCooYoFECyrVE2hcBHAuMNDsAoA8fgJcwrGJQf4WUuQvSuhjtEcAgFpaFAQ6i38nj4wByKbDeqzq9",
  "key20": "3f6RzN3Ac1vBRju5zX9cGjEKAiBhwUkZdat7MwrTf6JQWHmJmmu26jzpFopV1VgxZEsF9ByddgRNHKbszm8YcTVv",
  "key21": "zhJYFpDVECzwED8ica61CrLg8KtADphYPpMZN2K8ZVGc9xJejZ9T56DWopY3LwnMMRvqJnoueqyMNFFjoMcQsRo",
  "key22": "2ahmJmdwLGRvHSdr9YykDGXWHBRTLuCYtjPSfP3g6T9Z19SDnAZWpNj7mjm6WLDdsPFUuqdmzNXe1nm6LZ4ZTPni",
  "key23": "5KUhGdYB2HMJVcmS2aXyY1oRMgos9sb5MPeRZUcbafGAzYVHeFCk3gBNMyj2o2jPGJpot15yzPHAWA5k6HfRQiLQ",
  "key24": "5jJjVhRh8ugWLA9Fx4KEUETfSMyHm9hjvW3v6gwnycvZLABxkQV3TDrZEESfdfjYEsqzn2toqa3w9k4dNHap6rub",
  "key25": "YkgT5BnteNVwDMwsKZGrkUpDpFfTV7phktiwnBbFv66PjSuii8V6uiEzgh7TuR2zHdEAHhJPNar866vhZiGRKGw",
  "key26": "2JmHJd82Xh36ub9Cp8V3abQ3tG8zCdiRDsSgfKncuqRRoiLbMsQcTRZnogTvrnFqkY4Vu3bJae3mWxyhX56iCVu4",
  "key27": "5XzCJfuM7u4pLquTdXxpgmunVTW8m7ExVfDPGLujyuxxKCir4wLuoJx8SAr538KTHWHSAyDriKb9aeRfMdeYyvYg",
  "key28": "3tvin5adSoxszEMkmHrURsE8ebkb63AdxmEZ5zuSWvRGxZSaMh48xdS3taN329sL1R7VGFLKcmyxE7heDfvUEow6",
  "key29": "5m5w2Ph2HSZv453bZenJpZ3Dpf3TQToZqyiGFVDrBywR7AkJhDzUvGAkeVofqHxSM4VpKpK7DQAYkQ38DWgqeDKz",
  "key30": "3TwNhKpJsg9gi6eY5C1DJpCP7TXvR59gx72sNRN51Jd2HYV8dpTMGECEvBCpTy7eyJjkCtWnEJWxSBP2DyCTSaUP",
  "key31": "2Lyg7bQMSbwquTyXuGhzDr4vDK8MfDHDhnfEc9zse6dphojRxP28vCwcn6H6sVeaA8jiEbG5sGE3es7LC24fLXLF"
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
