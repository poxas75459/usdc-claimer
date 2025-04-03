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
    "Kba536V4j1yf7GEXKLjoaXKTAkNraetLvnzSratqRNoztnM98ZVdv19UaqC7TZeYhV9KVFZmhcgEknTDyWaCqex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n8fBeHDbF8SG8sJiS6XHiU4vvuxt21zYDuw6C365LAN5qrqjiHbPPogf8JhH8LmggX8dmpoXJxXFVkhWe6Tvpbs",
  "key1": "3jNEPA28PtBSJqZ15d4HbBmoNtcR5Dcp9Pyt71iY8FawBDLDWFaW6YXVq7i66E2jFE43FHbsFEESnya9rxFdmqDH",
  "key2": "5gqE7Y8fFLRGqDyQxkxYK9BA1Ru8tnddeXmic7kkL7PkJ6dAtY6VVs1cqCaRJ92rAaQJ2uERbVKBPtQbeVQYheN7",
  "key3": "2ezxNiv13fRMeMg5ixPdKgmZ8ksaREzJt3hHnjBrRcD9hVf83Xq5GGCErrxc53gDDXLuYG1fXr7brhe3xNp69TqB",
  "key4": "4S6RgZiGMx2hRwvSS3EtRAS8wR8oMXSh8Qb7kYqrbaJigYp9GKLEdDjWWH8TKzQW48F1po4dBTvNAh5aBULsdgYe",
  "key5": "3ktTQcJutJpEo4ky3Q2JR3Dw11FpHPiy1FJAvvwR6RfBk3WJYLrhDohsmkowhVQF7qjw7XdjQYrmS4HXh6nuHYAn",
  "key6": "3VYZ6REqdNtmje3wG1uWa9pJrACgkcKAuZGXDwyyhtrhJ73oQx35eefDx4u7f7cmgRHR7frNZzYubs3onbS6MXae",
  "key7": "2BgodhF7F9W4szUthdC7Bi6RAijb2DHvQyWtxo5j6jK4zogx6eW3MLNTyyrnS3LwwPTj2o3ivVTht24D5BdHv7BP",
  "key8": "4sTD8cT9QqyzsHSfb2G4caxBbnHWvuPg8a1cifc1r8336AeaqQ9fqvXN22aLq1PpFTsh6yq5FZtD8KM7ACZCCsNY",
  "key9": "5o2dbz2Vv7AXM4PnpmzT3sA5px1DmLNMKfBGWVWqjy4uTH8LeZywVhWiHVmtdbLAc3XQn6547ntZbza8j9ifdonu",
  "key10": "2UYUQ5BpHPYFRPFw7HnNQjb3hbKMkxKvUbYZsFKBLCEhA6ut1KtGuZyzG2bJXt2SgVLGHBmCLbp2nAmSKr1vRk7d",
  "key11": "3w5zGHCx5FARVA97er5LFcTCZiLgL5jLg2tgy4dvUgzVhYE7pG2We6e4gimnMhZ9qjXfXiHASTiFVq1629VtVrdu",
  "key12": "4GraTjQSn47QMfVuSf8J8Yhu4zQAheSZ1UkR5QvPgTaU6H2cfb8atGhu7N4w3nqfk86VjxAsx2Utip1qbRXMeFsY",
  "key13": "2nmHK6qVwtG9dzSE2SVwKQLcRJo1SfaoSg5mFEGyWbBQGYBSsTrwox6bsYX9ee8GkoCAoQx8qRGHNAjCnPaL22yJ",
  "key14": "4RFSQHTv8LdhSuvMLBtbukrcLcpudAokeA1YtvUG8afGCEBjx1Fx1tfkvGNtDMyeCkA67LBXSpByYaytZf22ZTqm",
  "key15": "5FGgbWPQu1oG1FrbDC8yVtVMpE7AEwspoLKEPpeJMf8BTcghFEeN1rz2qWoeukCKVJd5dPoGGhAT8sNJ8yDjszK5",
  "key16": "3i19bCmV8ZceopEVUDWARp8RsVAvnaxF9aV1Q9Q2GLcXRrkJrL6WUt9MvE8h7fhnpwo1ZKUKHLNXJvZtPpE1ymAB",
  "key17": "4tLGBuY2mxRUrjfqumEJT9Jm4j8gRsKfNFSV5YQatY3LsPRW1N2hEcBbHpSRwaquzzLYLWSMecGZTLAug9LCVKoT",
  "key18": "3NxKaA5S9qe76VYh1CprZ7BnRobdXe8RLU3jMsgnNGbEe1gEL5nJBYPmkhTGqroJQ73TbtGgVDTP7a37CdLuCUJM",
  "key19": "5wuQfNa9dQVXQmauRj5sKt4XdgRkWLg29TSqpX9BekmQ7teKdWijUVoru5NTVmCRT2VWTtHJkTfnqktJma2gsGB8",
  "key20": "HJ1Z8yFHAbwAp1zwthuFT8MjSfKzBCHPEXV1TqYD1PSGBGxYP5j1jM3rM5Hue1bWNyBwxvDqhrdcNCwShsvoxSE",
  "key21": "nKq158b7VB9scw1UrC1Kf6F3N3q2pxcMTdo32u3cyuYVe5Pf1qP3xmvXj8tVV6cUWL4eqf7G38JXy3CGYEXohHe",
  "key22": "2YyxzEbwJFMRcqnUnhZAcASFTpWk1EYWWJK2Kh8AvxH2C6y4PPRYMTZskyVmjSsL5sEPTrDkoA1944oy8Dm2Za2b",
  "key23": "2XsQrZ1PQM7iuzEF33diYB9eJu423tDGwkW5yb48UzZwvvWDD6iHA8bXX4qzp9gHZJ1cXnVArsE4NWwDvknrGRs1",
  "key24": "3LtPqqwU2UM4xpwaospGaB2UUz3PiMN5K8YvER6K1br4vbQtmwDkqjZDtpfrNCTgGiKjvavUA5q3HrChVa1tJXGm",
  "key25": "3KAKm47LoKvCJv3acdrwwQAFo9oqZhGB82adKGMCdiYHXUV1jiuxvF48N9JCx7kCCHdJri9GTKufspmX6tUY5EET",
  "key26": "5pZ84uFsH84ewzHYVhasCG4Wqwzwny3JTCUH5tufTF8gqPrJ1ASunUYakQQTARzGQUafJX9SRRDo3KdpPtbFkQ8C",
  "key27": "4U2bs1FDeNWqsnrBkN6vhdPiPihzMdFKuFgPFdf6PzpHrGkQquAaNTKp7B2MXSco2Uxs29mu1LkLeSKGgoA9SyD7",
  "key28": "3WgfUM4AuHhcN5CL4Tapuhi7MsU9pAbzuCmyrXuFauMzn1JxJZaHKGjsvsp7Acqm8p2VQ6AWh7rHWUu1CBhAPwK9"
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
