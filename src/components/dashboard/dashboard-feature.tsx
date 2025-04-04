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
    "2f42o67wGFMeSiAdKgp7rgDbzRxqBopezDxarABGLy4hCcF8Go2YfmBPLx4DsoNvMAy44PuzmVy7QH7ByBdMSsRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H883fdA4TiABdr1cNLtKc9jz7v9pfWJygCy9TYEFyRoRpx5daETvXg1u14qDdUQZDqfzN5tNAkFG9MUSXmnwZHV",
  "key1": "J3XySzDsBEEbXSb3negZvQcGSUgQtj3AZLtp6TqANayBm1fEcdRw2bAXL1LZhkyphGbVyJ4jfmLEni9UQiguyJg",
  "key2": "3tVDMPC74N4PRo9F4kfx8SYZzPaGfGabcEWHjXEKuWtVA2aWXQg1j1ZPPpvE72YVyKs4beAZZdTNiaitnpw6hxBM",
  "key3": "2yr8tyiCgW23rC39kbbZ5bcdsjyruiUsu9ZAg26zFUUv9hKaggUphKW1yvk5bqCgtekYD4fiC8She9z6Y5Tsnz1F",
  "key4": "26jG5yPKtfvaX2PFiGU62czJmKrHbUSfycxQgLX2ZjXsYkX9t2SW2ePHEWLPTgfDki9fgzFehb4CE1QTWci85fdc",
  "key5": "5VShNLvqUsG3Cy7h1qbZ4YS2y3kkuJmtbiJCzFK6i6QCQU5vn78LyJxykomcBZbnvdX7BFhPrXBJVUPpKeHj6Kr2",
  "key6": "53QxmQX4SbdfPLk3Kq9x8pyJNpn2XJXrHTpfWDajXz3AY3PSMNFFMZ57MXd6x5J1Lguum4b8rm7e4hKJrQBcXouY",
  "key7": "4uj2Zty3ni9SjUa7sUENeaDiYyAmJMeWCcnK9C7acedyMtNtxTtmSmfjUXSUT5djgiN3NHFYsomUggsXUzN7XkFu",
  "key8": "2L9z1nrorKDG7dreLhngmMt45yE4fA5Fb3z5owVBXByBmpYALLRAa7DqdnuCfXJhPtZJMKQcTtBaawaaQMhdPRdB",
  "key9": "4ty6HG9M3P7keo2pdjgzfq1EzUtZkT1AJuqUSVXNVUsrSwD5zHVVJDBxthFKz6UXdyXXGLD2UA3XbhvbLPizHGsV",
  "key10": "48LZ7JR3UKf5m8CHYocuW6hP9QivFYFSvcntzf9eRPt1uaMEQWJ5Lbx1DrTmk8gPtqn4NW3B2UhNRGCWTx9efaaf",
  "key11": "2YE12R5noXRw5MueznkjZDrQdokoWjsMEWP6jx26GVYvVyqCFD3cswA7MRCiRMtzPmrmVsuv4pVpYBi8XcRMWieX",
  "key12": "sZ7GhkQrSbn6usetPhRzV8sAqXkumjt9VJXnP9YdNibu7vc9bC65kKtZhPE3RoqeNTj2bTEQ75ApKK5HCfzk7qK",
  "key13": "TNGzdsWm72XMA2vzLvFzJ13SuTGkiEQ63ffDdijVHrhpu8uCMPrabBAVsMs3N7SdPr1Mdc9LQjLU2ig5QHSu82r",
  "key14": "3wsj29ta79kY3j9SDp4nvkATMz3weUAWisRY28BS7zzpkRQCkaNdoun1vQcmXz9xwJ8in9w2891ff19oUcvtesTC",
  "key15": "5z782UYXFbbrmfDFsMqJh3rBT8SxGkYwx8L5sjaSNd5vDiRpm4iSsEvBzcmK2hKndUvgHjtdhaZtxi2JFKsDXCLP",
  "key16": "3L7FfqT4SptxtGos6fvmgTc9eMXayTARaBkxsTNZTKYS5ZtexoF2UVQspMqkXi3SDrwg1HV1cgutNXsF84RMMyY2",
  "key17": "VpJ62miVLANzfJZNXXHqueCyFG7mzf5gQLKnThnq6dUi8HwVUgHRqAfcJjbxWqVXHByPP9dab6eXKsNVGL6co12",
  "key18": "4juF9sJFg5vK5TPykvrqvXC5mBDFtFNVFV93KC6YRWU5sbJBNeGtqr7Pg7gnT96dbEwG6jCqUvso1XhFTLoeQBh5",
  "key19": "3b5Pgq2w7GmmVRnGAr1QwL1F3AysBLp2Rj9oM7cxaYbe9UWm7KGompQc6UnybMQK82n3z4vvXz3BRT7onDgSgjAk",
  "key20": "5f5aF9vXVNYaKj8WBQLxJzAG1PCjRaBZgKpkNLehM86EtHThnei7ccauuHs6geWjB39wGicb2ay2nTccHiwbYqah",
  "key21": "2knDjujYH2crAXo6fjSaAj41TCpfwxRNTaxqdgQT6uooxTZrY5WqWgShjY16KyBmKkrcmoF3DRDY7h1UBRwJA2VU",
  "key22": "5JrXZ7qGnBZeUYH3kFCqHTaAjiFkGPWuGyQotq5Kg8qZfB7HbowXsVUG84qVfbVQEiTGmQ5YqrqfyLaeeptgATAA",
  "key23": "2ucMhCH8wcmLDC6NwHKGie3CcmvW1CBWJsub3Ycafp94AvMeE3TxqZDcbjPnrQ47v9AYwS8DNuazk5sTb1orJ4Rc",
  "key24": "5G1K7TmPjDT8PVNwvKew7dA7grunF8QXzsp7tiRBVujuTcQBiuRcMQ8aXdtEvEVp4UHKwJBfmo4oZgHrvSWxhVKh",
  "key25": "5WrRjifuHShKXPm94MMvuy52uC9odhTcuXdJXxQsrjbdb7RHZCGMY692p2PKbntQM2SqvP8KtiVKBuyDdwLsoUHD",
  "key26": "4DfeCn8hLgunUjDMeExsZWQEyYNSzZF7PM4f5Dj74MFQqe76EeWxHv9icARUtrUkGdXGaRBM4ypnZQZB3BkAzX21",
  "key27": "2U7STtfm5vXvg8Fq2NjsUpSTfQzoqgruTzaumaHWXm7vew4s4jJc1SbUooXTJo3U5eyctbqCuwVoPiGnmLKbJbNh",
  "key28": "JLXBH48cZkiVSU7vgQ46g2LQjCzPoi4Mp2Vvdp6LrpBFBuS7VNLbigLvWG9RLDRewxGd1b1foWtfcE5EGxwnAP9",
  "key29": "3Bmnq6wySKxENtnjsDvtV1fAbsH5Y2FXZgCjJwEdFtgXkrk4yUeF7UFA4KksQXcNkms3Ujo11pr8Yw9J38dByTSF",
  "key30": "2UdiVA6FrbAQ128cUb2vr5EXgzQJ913iQi7szfJUABXaT7fTdzzEY5Hjmr7vq7npZSy5BTuL6i13pW7HtaWLqVng",
  "key31": "4EBaMzQYfMqc7ithuyGBFWx3dR75yZbDY7V39M3cuDidvXkbwMqvjnXV7kbQuWpjpirhTEBpjygN4eXgFMxYL5Sd",
  "key32": "3fSJJGowBxaWCbQdTg5def36DnvEsYFYdiZEi5hkHutRFAxaquDdDUeHS6eKWamuVoMMM91xrPYvvJcg3dnWDBwJ"
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
