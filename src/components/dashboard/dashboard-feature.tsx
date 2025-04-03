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
    "5geewaXAiJZAhei4H56t2Hfd2g4dec3ahXH1uYEQCVu5wMi28YmU3Mf21CujPaAahSGKh6A7npVVywUzpB6LDicQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BNeWHCoZAGhvC9n3UwLzkF2GbixKCQVBn4oy41YaC5by8jjNv6DTmgNmPjNvtESWboR5JdVsbHvnHyuGtcB7MHP",
  "key1": "5dEt49TunmJgBnZxo8YhXc4EDGCu31bNeU6w1Rwm5zx3hyh3yriJg3c1Rf2tzebKoV9HButor61QbUzVidL8bsH",
  "key2": "48kWBEeEMmCWG1QYSimQK5NYrB19wQY1MRSa9NCp61cAsYefMkqae16F6XPWurL6rJa7JqoKoJFCGjYMMpiKe3tk",
  "key3": "4m9F68DrRcZzRV83sS9f2axeoBtP6ydjNrakpP1gua7c9RspRSx5GmovzGrAZrRTcmHxA3gtQq3CVVXsfuC8LJ4A",
  "key4": "33Sik74JZSSTTGUUQh7tYQTw9nir8RYaxoYHJwqs6xmKqxf9ajHN5WFKnAMWfrnqQN5AmnzyfsQSu9SkQhUaKXBb",
  "key5": "2BeuhyQxZwybGsb1iVnTMw7ViazdQCXStC1JTHvJaukq5ZoZ4ACsyYdUEDSLWoUxkJjUTAotnWG7MjhNZDJnjHaj",
  "key6": "5PmBXvAXY26NpzThzHaUUr6P9LaP9yhY2Fm8AN3K3Buwac36QjYjxbBBbdoosagv54wEeAmbuJKqKXR17XvNKGjT",
  "key7": "5HT9Pg4pFMoUV2yS6ZBWy48csiszvW99nggr6oWQoZo9bYoduVLz5rE77o9r4MuXZw66zN7A1RDShLQ4gex4yQdW",
  "key8": "2Kqf9pHX5gDuRoBN2yQmLpxYQrXVdNzR3dD3EWrcLaVD8tw1M3prmTeGpU8tA6B4M341w6onf49cpN3YXZu9gEay",
  "key9": "4WN1a7j6h3ugJkN6k1bD4e1K7n3DH9FTvW6AUCAYW2xwKHYjCRSbn1z9oJ9cYHrBGQVSxsoEuoh9rQwoSUKngFE8",
  "key10": "7YJMKPmiRnTdcTL8jobE3AzPvz84PKjRu9699XjT2deU9uYnXc7La8mzijkzzC8zfpebiCRg5wb9UdC6JdHvwvD",
  "key11": "5m3p7MRTWzB6ACVdiBNMe9AvKucHkr7ebDswke6CBEfQiv4wLAADpTYPoHKBnSdPJvHXuSMv3mQ7xFf5VdP32y5i",
  "key12": "4Trf5tjPpXBcn5qdNFBw7nC8yPnJ58pB2LHaSWZmcQ71Jw58e18mcHNtwG1w1TVWa1srYR7k6AYFjpjAMvgLYmU1",
  "key13": "4QMNJCzcVnYUUMeAHtNHidac3QeP2bd8f54De2vSCU4RjwXDtfF7iyaozXrNGpdTWEgBeg6a27mi69Q9c2wDz1YP",
  "key14": "3tciP35VBnzSqxVV1BcQbXicpSkqk2Mo7w3jB3qyGM67mVT4PszrtHamddkKungPgACmhGeFQEihkwAGAC2fnzFY",
  "key15": "4ykpv2uhURxB4hVqEkg1bveXZrgAfDywwbAY6KanfHpKRJ36ttwskjXHsQyzPk3Ed4htunsMZZSayPHRk1LzrrDW",
  "key16": "5BCBVVcEddU8tdSZGviJtj4T2gYcS73YcbPvwWXb5DmyWMx95i7JmK8pUE41Df2fpTLCpPdxuGhtD8jkdurJmmNq",
  "key17": "2EuqWond468R4XTNZyx1KpyiTJtyTmViqp5cvp3Paget1JqbvzNPakKrsAKgQrkfUKgfccrf8euJE51TH6LUqecj",
  "key18": "4RyevwBVGBJd2LACWA6KPGRFvJL7C1KawSK99nMti86QDdoHd6DA5zi3Vrcu5aBtvAfYnB24Fwqw6fFJgYb7cSki",
  "key19": "4yFmt49uytWcrPsaMPQhCpDRui1QGzB2uqRwFVxQJHD99TTuShFPNek9m37njHzrmYwVUgk2q6DmZtTcTeSMCnpG",
  "key20": "1i1Ds9onFrdMXK8uyeSn97Dk5RPTsguCMNuwx2LkQiLKHT1kze1md6QzwpUuJV8FoDZZtPo55HEjn5fQTyrwqxR",
  "key21": "4fcoDQ1XH5L3A19HeE83TDag7DVMbWgEg4JwdaHsDJrGa8Xjs9PrfnQjmdAmMcpPJ834zR6w65ntjuDsG2FQcUNN",
  "key22": "8UovWhjamt5UtNRnpSepqcpoAiDtcycvpzQ3PM9QWZsEnie62N5JUvAZMh4hFhBKWJ32BSBBJJSzRVij6sz64qh",
  "key23": "3ueB1Y3vHj5Es1E2Gn3eN4DzUfYsDQRfz6vEccwKBudQAFVixz57VPb7HuWACZ4nA2FfpZTRVCr53KDxwp1EVMiG",
  "key24": "5LiFdaUeicGTBFUD1Wpv8Rw7dUeyk1DeBFjuK8Hy25UHNVYERXzz7GG6gQxmy8h6m6aszAhKit4atb6i2GtiW4Jc",
  "key25": "5Vuwz71Qh57WQPnsUtEsqbHVvWwdiCNsij8jbEgE2t2Rz2PU7hchSJ3xJfVnH3ARfee9PCiqGNxRagry37J3YUqw",
  "key26": "2YKPDsGEyBEWYqsyJ9VRzYt3ZB13rdig7ghNtJLz41x8dfZ1C8XN2QYQs51T5FxvRadJNyeaqFDKHEnCSY4qFwVz",
  "key27": "2rYYqXSvWT3mUzX7i4iwQ7qCpnx3TaQNo5M4dCfc6of3hrC1PuvRsRdgRKnuM3Sx4UV645L8QuWXW4hvHU6EpHnz",
  "key28": "2wCsybaLzLk2DvUTv7AQrvMKdsK4J1Q2ZuL9o6oUJDXQ1kTBucW515TsmwLT8NxqD6VB2o18d4Ue1BcKwesCWsP6"
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
