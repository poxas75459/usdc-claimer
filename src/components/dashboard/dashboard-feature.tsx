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
    "4sC3J6REnm4jKQyWKrdVTSNLDa3cbCuFvGXo7FXkxn6P7gAyVktSaJvtY3yKMtB5FHW5wfw6chQCQE32YWAFFY5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vfZKHW6T7rMDQ2z8Ks859Q72U4wAEjuhPYoBQgtKh5qWSC4g3YCBjh9wZqTfo6wZksQcK4EU9MbzeKFoTsMcoMW",
  "key1": "ysC5GHvpL9CrFHPs4UCw35ADBKcLYQJQM2z1FvAqR6ogjsygxCq9qVC1fNGvJwSyHpGJLAPfSqi1tWhceJSZVLV",
  "key2": "3ikMinA1vrG3uyQCSgmDq73LpqVxnovqVTQwHGhRqgxAbnbHVkn1PinQmovfhkrzYvZwvizQiiQuzeya8qaFCCV2",
  "key3": "7jLExLwxq1XNoDGFpJtuqCHN413FDU788cSgmTYVB3N2hTZ87QG1ge3tuZiYEWgTqSxN1XPrbENrQdrqDXV5aG5",
  "key4": "3krmb64FxA2jQraAgV7aaKoFzeWS6Wmx6uR1JqSyNN5LL4GdJtpuqFbcnF4w89PFKZZ97yyEM4BFK1Wk2Hh1V3QE",
  "key5": "FYFog4GjoubamDyJZpFPzhWDP5xrTQroon6iMKt7ftGvtGvvdG3V1bwX1CYDpeYb46VRjATjETJPsn3XeVcDZ7h",
  "key6": "3oZGyu8V2amoiDmE7L3zLWEuKH438KXqgoHTDcYGrSmk7gX1Fe8BJ5HP2AB2mjHY8qzKig1rLTZuVNYJTCs7xbCR",
  "key7": "3LmvHZwK7LgPWvp1jyaCUoRYw3MWoqEUFg92VATn6FbTTkgLG9hgiMWv9ZuKpZNq19EoAtgkPhmJPNJbGN2825rE",
  "key8": "59TXPUSnFNEYsABvk3jpMDRxjMUbrT7BAzJmtY4dJ6rL9aDHTLJKCyXCy58ahUzLzCBdWB8esG4XSSMfbCRt5jA7",
  "key9": "5cK3uzwwEMxjkPZBbLVq41WEB1gNYdKk7CjvKAjUHeTRZZBGkT7CPjq8v3LpLgdzZwv6e31b4G6BkVadHJn9Q9LF",
  "key10": "3bgQZAmVcAMtx22tMt3r3T7MBs4hPmnePUUxdoFHbgvGgFZoJ4CraQE3A52RT9mtajSuAxh1xrFk85CZHAhtuasD",
  "key11": "4mMujngUixG5wT9STXGo1LgWptfXhDYkt77LRYQH3tSnpCQepKgQQ3aFiNbXZFoi5DcSYunnFuLGAvyWBp8iq2vN",
  "key12": "zJAiMvVBc5n39kjU43fg3fbY7kd3gfHWQ1zC78Z8fxFVQ3QxchVoWizY5araV6tZkofMU1jmwPwAomaDKbHTmzF",
  "key13": "3ZPgnMRyjnW7x5r6RdD3aoK3hK1o3STDtce8dVfHFPEtQPt4Bo4g2Ew51Dmn7sZLKsk6dPned8esvtW3HuFT9VRM",
  "key14": "3eSTbBEWosfjndo2GTS5ydatgChrHeYuFCS564Qhn1osv95XHT1zt3jXZqX5sVYUCYV6VqJLAeJi9jcyb3UtXcwx",
  "key15": "3LKxr2vvLsyhg5aKNGQ6DnYFU6iXm3vKsCFJ2ah87t8pM54cXpUJ5fozXVXRZwMAYmsEgUaG31aPnchYsVZ9vi3t",
  "key16": "3A8izDXWUToKRegquGEShjrn4mJjzhnfVLNHu5JnXmidmDCxMBKRVtLMfGFq6Bnazc5hfeh5V79LiJpj5N2STgrc",
  "key17": "5Qaud8i6EnwATW5nPJdxdw4oY57RaPD63P7CXnXEWwGLxJzaKxHpzFNNswhFi4KWKPP32XJPeTZMh19fs8yMipXg",
  "key18": "5rCfuJKtR4osgPfyrm8yKnwKrHqpyALcFXbNt4f9zEFtqJBsRMmZNahPNgFSmnARA6zw3wBPAKrucoVwiBmiZ4jA",
  "key19": "5QXzTYiiMvryfxAg2XgcYXc52XCGdXQiB7cEfJySYhyT9fUck2GTGCNNMttYwCgfyrNQvUgPToui1EEATshF85NJ",
  "key20": "5DcpkweEeJowruxy4WoDhQytK8Vaq6BXiewqUSrKvxoKjDyK1Snz8sUEcbgWYFAEhJ9xvaAX4kqwjidP2DFgzZyT",
  "key21": "43nAHZB6iebdwtDpgg19y87Mfxu68jwDo7e9jvgPf6gnAJWv5WWjWBY9qVbzxXndwbPureGV9mvTMroLMzsQB2Mt",
  "key22": "3mKifM6pvgxDCYfk91LWABA7z289UbtWnZsUe4HnthaYXhwtjtis3jDLf7n3t889Va8tNDUWuF4k7Dnmu6dp9YsR",
  "key23": "2m2Q4ghTiobbGsdeEJBzoWaqqMnNma6NqMsJhws7RN6aTYyx2KCDBmMKtWdTvyVHCWuEFpgWaUWGfp5n51AZiZpV",
  "key24": "5zdVCfcoeST1sb9sW9qayXdK1R3PL3jDrGM98q7Kd6nPEtaxfUYYpnDqBhcxCmvsDGCeCvNcNe94XA4ddM6P1r3s",
  "key25": "2tiwtHfxYygdfbxB86G83NRvW7xUsWuFGx62nLz8aXZnHLFDvPW6i6cAGc4Vhd7Fhbc14wvm5kknctMxRxSih5Dn",
  "key26": "2ep7R2koShoXmDkcWuUMqUUXH1shnU9xeoSadSWWRfyq3sPpz8bmyWtdSgeJ4BxzyNk9SvDCMyg1px5MLskyyjBs"
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
