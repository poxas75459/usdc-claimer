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
    "4yT7iWpMTYHBQbQ4FWrHaXyFo7Geyn9TokcL5Hh1eXx94FXUvRcv3TBAaixVwpyG6cBZ9PV2oDHZ9h74USUwqowG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tkHLcNKG1o5KWhTAKhWeWxiQLNxuhGSZhbnQcPCuafe3iABm346owxWkPPm2ArUU5PULpQFHHk6gjZnT8ySurb3",
  "key1": "3qgDQ7n9kENj15TAYv71HXURQTAcNJGTNExRvQuQ3RWKsXyhZodLcVXS4EG8337uuQh5w56zPWPLc2YynSBtjKJa",
  "key2": "2XH4FRMMqM5fccY8Q5tmFyoHMNnP4S3aqjV2rBNMxdmehhep1vYUrS5vzqvSZP1uaK77ETHhAG2oCrzjMNiZm2aQ",
  "key3": "5DASrFRLeAE9dX2aRcY9WLC4E3KGaNZshdxmxUmnsz8mU37xcReru3FWtEQorhqNXpAYZuhQWAEQFz1iduVbdY1S",
  "key4": "5p6P7bTumv7W3ggcRmRSZ33MikXzspW3NEB7ixvDuCzQSNvbxGntGfHKpw1hjJZ7kL7jVZbEKYLNAv2b7FtWYnF2",
  "key5": "cWeu2cyZGZyVyTiY38ZqSTeQdBDyRPLmajWxHxLN6kebiQ7EaczJFAUNqr1SVjn8dJFFtgDJ5NUHo2kjYEkKbvv",
  "key6": "3C8NzXxhnCyVHyL2BsK2VQGiAEZmeLB7nwXFju2u1dZyQKdP1TWTo3fGhaMupRcDZjCQX42JvfGHxp4Ti2vPjg6D",
  "key7": "2Ygtges4MEjoZ5Cn3w18c5fJdgeujj1mahCjEEma6HKKPeLbkXrtGCGGPp83AZPDY5wJLyeWDiAnWtyLTduhmAuW",
  "key8": "2cunUsELk4urTpTgnLpeBqufCLKNXxsNuKLeNvfSLnZ4MwMkPeiJNyWSooeYZSvDtWAkz6sym4RuPv3yNcTT96aF",
  "key9": "574tcQtJaL1zeKkgN7w8atrevuN3SCiabRiUXTY1VAHpCZaSTVVhkCgA7M6B1Td9tBrWcd5NHBSESne1FhwVtaxo",
  "key10": "3Ygz8kKdxAshRwuSLUAM95Rbv8qK2k2zAp87HGos7j35RxEbGhRiFxrSJGhT6n39d9xZRkRRCEJwHDNWnhfCvX6h",
  "key11": "CPAGLvvsb1ijryEcDmdt1edxBU6xJmFohzYfF1LYVB6iCuyv54C5oUcJasWiLhpM9ipa4qo7ss3Bdwvm331d6Vt",
  "key12": "4rNkj6TFj8XnNjPHQQY5T8AhNm5rfwBWXr7iJN6vYbo2HRPMVL7xupmcCcVkqgtxJ1FejzPDdHyiCteTAuoh1HWv",
  "key13": "397piRQVWjGCRnXnHQ76cEP7BJLYvSoFUt4uzsyptcowhkvnYUaETeaeVafSpsgdM3NfmyJcZDmJyV7nS1xD4FmX",
  "key14": "5v9To1MbB3rt4AsgSA2YUwUMshWpsKf5FwuiHtvQP3Jq4T7r38pgqBcV2wpMNoiL5KrU9Zr3vAWdduvcWM793TRs",
  "key15": "4DCys23YYUpABUpBPrJMhQQoXpe2BiXgRm5qFvZhqxm47AZSTfwbSwaiqj3eoMjMVt2tnhUyyhWDqhJnTGAYBEvQ",
  "key16": "49iSjhkwAPXg9CakJqhGV6xPwkayEUeG68B7onC4eYfJ12GicB9ThkcL9vEHpr2k4SBQN9buzx9y5tCPSucG8kJX",
  "key17": "5LFdbMrVrK9QpibjQZsBSx82ScxkvSuksd6UueAH3erA99hYa5zdTK7EMScLgsorN8ThswbfQEYZohHuXWLPM8Gu",
  "key18": "4sLqCz5MquYhqjcBBrxQLbb2ECoMBQ3iDXgi9eM7j5tz1GeLdB7fgPAut4z2BZ6Jhj6mxqCxDKpdqZhGqjrBFiAq",
  "key19": "61EGrFyRV7P3ktxLfUjXyryXmhPSwVXfj5sco9hXyLnMbPh1KKDjXFHLgi8YNDHWz7T8FtecCLdt7U3hNaKiJBcU",
  "key20": "4rxk3VbPaFfvgfo62rqnx2ec4cAXBdL4VLDYD7mGu4iGCYStiUGcbB4MT1bkzoy2Wp8mb9bxZALaD3NnimiVTFSx",
  "key21": "5YpX5da5hbcfWUh8dHCzBLqtuHE3Ei3DscdrUSxsm5y9fsqUeWsLMjyYgF3DbC1eY7iBeuaiRu7XHkZUZNtcuT6d",
  "key22": "5CtXVP7kzdAmMcCVEF789SJ8TYZLC4etc59NVQxvhhsftwB9kiCYqndrRkRY3a97ZvonnLzZtPkx9pQXAg6mcqzA",
  "key23": "5VeBwZHqjxJvmw4cbCcBGcfHi1Va9gup9EV1mfBKoGx6Y9A34L7ky2T1SCbj98LdC1kju8fma3gJ787rqyf7yzcZ",
  "key24": "5mkZP9YA6Ly7nBY5cYscVuXvtHrgmxUC8QUp4U6dWm1kiZVkL7E64yErS93boMLJnc89n6gQj2YkR9Kt1FHxuRXg",
  "key25": "4hbdgjv6BBdQRimQyk8ARyWjqPfNyHNa4YfQen5hEKjgFLSdCpkhGV6pW8QarUtqY9mjUNgNWGGcRTX56SDZ9P8j",
  "key26": "2AeWwKvtG4Fpq4Eggd8MoDXmE28X9DdtNmSnGk9NcH8jcPa8DQfsAaNcYXN6gJJGCaQAqhmgTS42QMegHNPoPcvy",
  "key27": "38gqT6qG3vaeNJtM6r3KaKr6Uk1fULku6a6viDqkdnU3esEqcnHpNpTG5vfbuYNnX23zHL4D4iam4vuJEFEDN41p",
  "key28": "ecB1kPPdV9Zyr4kA48XupZXPvsnGjTm9HggdAMRs3zdCJ8HWHfkfkELwFweEeJj6ngUa5v8Rmc4xrn3qkNN43Ep"
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
