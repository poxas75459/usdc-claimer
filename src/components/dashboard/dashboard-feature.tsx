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
    "5tTdMTE4Yb16m1tXPohKwjV7U72qnf1BqUyWpXrKHFVNnRoukagqDS1FdrUdFr2onV19DzTMVqbJ2vDZM11PqZiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tW6czihFBpaQmFprdwqfi8aAmjzDXYoXg6kx3VgLSm4YHWyx4nvmqY1UJYgQcnLcyxDSvskeaBStKfGaHspvqgj",
  "key1": "4c7YG7XqHg9W9uiP2SxSdVeJ4mqj83YCniEVfvHhykFwXvbMmjgG1UprJz6ALLEoTsgfB4JLhaJWnA6kSS8nc4cz",
  "key2": "nCmUdeEmd92Jc8fGjjv9hfQiseGg6WH9amiHEN5DqjLMruEnWBbSxRAt52idE7eeiGFzdnXRT1d47vxnupqxP6m",
  "key3": "5eecPgfAEhX2cLsEMqWhALXhYWtRhpK9e4zjF7aYFtCw8tjn1n7NPkxX2vtUSRQZMNMVinn7TYjohdqmAYzUDfXa",
  "key4": "2eetiNVCY4TbX7k4H8M6k2j6pVCYrBTjEzjhbcPn8WQ51n2jfC6R7Yts4wPmyrTqs2944dKVCrN7ug5Q22zp95QC",
  "key5": "5ALa5Qk6vBQ94j6ThWGyu1FoimAx7UsbkQkg2jFGMV95L5RVwhfsC6o2byJoPECwYkSRGRyyyF7yQ3mT7PiNxYY",
  "key6": "4HhdNGhSfPWLcx4Wd8f9e1SNrS6Z7BC4sEoTyfQmfcTfSCSwTsgekdNvc9omfFqTmPeswfDytwBdSSQXj1dVtGhJ",
  "key7": "4GsqxPebab3wNyf4QczQdexoQrBHf2aXbsHQp6AnXqrf51xqcNgF983KzWaztqkK293VJT77n8ptySM5w52EwSof",
  "key8": "5KtjdiPbc6ZUjPr3d1zzMMV3JSZw4Asu6F8GPCEK9swSpxaANsPVDEmYpXrNQb8tdyE2cZihpnjCm3rTFRoRa8Kw",
  "key9": "3uUiTxRhDKZFLwtCFzgXSXToDKpyNvWfAXAQ6otM5kc8wHkRw3fyV45arJd1FKMVRBz6rd3Zpr52mmucRHx1o8o2",
  "key10": "4Cz1NMjxmFs6dibmcpECLicZyT39kLYAjno5jftyPDKWiMc45z75jW6HJ4ZtRmNRyx6GB5W1c4W3va3sb37bWPqh",
  "key11": "2fMh9P2DdR8xcW4oMaRo42Xnt56YHuLrZXY1Cu6swK3hvHA2PifFtzKKU9JaZD8LxdbmJtPkun4LL2G1z5zSbgFw",
  "key12": "4yx37A1EkDRwThBFGQhiMayM5atsruyihfXaCoNF2nQaghjgq9bZJ91MLNwNYixoNoMWLX33fNJj9QvbPFA5Yu5U",
  "key13": "5ky31PxKPXub7qbEag6Ve2vSog39kAYTQmSB3uPCLbuEZBdHpGYbef311aR93s4HmGgPjrNGFzatzHPWhEJiRq9Y",
  "key14": "4VzwZfqszLNY9e9Myoou28eXMRamRsbBPGENAGijLnEHzo7EowwZRytn3XmaPJD9724h3HkEQ5WnnDm6dT127RBS",
  "key15": "2MJt28w84mA7JhjdGNPjPnfsa1HXt2RJQXgnS7VbLJEvuPngvg75AADGavHJm4BqczMUAqig5CGvCHVwHYhSFUUn",
  "key16": "5we83j2J7YFKHFiwmfCg1WgajJyfgWvfvfwPiLhdA7HMZwPX3fyiB1vs4di9ztmL6CwhadppZmgb4fxAdyJERaDA",
  "key17": "2dGZTbmYLL67h3iSJDgboUkv2dpuRt89W8UCnmmuBUx2vaW5CbmswvrWdXJe7YFU4oUtp8YQdvqc356cbnAhJCRc",
  "key18": "5Z1Xx1xp1SuF3uHKCJKvDv7gcv7HWXkvF2EBJrhAZzxM74od4FLFFqDpy2BJfdWhpWnNPKno3XP8634tXHTE2dfq",
  "key19": "2J4jXdQy7sTZLLFajHgrXaLzsVrsNrCVpWwYepzHTXi2LCWRwVuqsj1AXf6HVbvHHiv5JMDGBkg8gosxKi6VSMXF",
  "key20": "4e2GxXfzcN5WrkTDp87JQsKodmTvsrFXeNoCpjik33eUviLrJVrqof8r8DwUrFLN4JtT6HhTkAWWcX9fDbxRtt4h",
  "key21": "3N5unVNbVrQ5NG3yBoemzJJHz6xQd1piTH6fU5kyTD5v1sy58PZTdPaSzpyw3aDedfAihZEko995Tz3UBNaDm3t3",
  "key22": "35Z9KWvCqqqvYQdJf81cUeBcyJZr3m6JJDiLkETYreExJ5AF9tFGG2vDNX7vT25YWUZsgQ41BrikwQ1Xi4MdSG6F",
  "key23": "4iftih7YV3MwWAzS57Sa8HzyZTAzovevriLXc8WRpUga3ozD7PLeAL4edF2nDKAeynQJTkxBF9Zq4ofKzGtQfTRi",
  "key24": "46cDBSk6HJTyestd19PLvghSB94ZcTrtma3NycLmbjfek3jcVitJzT4DjtQMpJFcQgDJXqM71sDnwU2KYH2HZrwg",
  "key25": "xPRR1cMM9uqSPeQmKmCVVaxQH6asEqFvwSfKrb6NzyH1ptNHYKkZ8dArPC6QUZrctmBbWrxLTrGSVaZMeJ73q43",
  "key26": "2KevMRyrAzpB1pneVc9DRL1pXYo82ihvBkp36GeeuLzaNuyjKoPJTmeQB2XLqR2RZuZDvNkdybyMeh76o6bVUeUS",
  "key27": "4UjD4Rzv2x2epU7b2vGvfnTPyzdQPULdnTKTWM7ZUkUf9sjagNVQgnGaN4NHuxM4BjxfLAickTuhYKUSBxjvLxsh",
  "key28": "29MVxNt4vjXWaJ391HHcYMLt3vRxPuazDKWJ6cmCs1gvHZ2e8f5zukTXzS9jQSG61Gu7nyJTgsoyuQLadVEwByvX",
  "key29": "2uhEtFTcyHjaMq7DUAdUUMW88AjcUQCKoQbURedpFAUwwZ1vsoLU4DawESwNWmMRLFpikpemiDL9NhVAaRRxzU2p",
  "key30": "bJoTDAEUGfctcpTrqBogyfqa3L3ikeFP2J4EwxPvbxy3MWXxoC9kcmfhuPvR3wG3ZJuKM7kkHas33WftkHyT5oo",
  "key31": "JmyV3Vwj3oTw6vTeAY9gnHLhCVPzKtvPeNDB1KeeaHBZRX3piHgz1TQWKGYoAidYqiLzukafCB5uD6TMcsu8EoA",
  "key32": "3mGqwWyDP1FpCxcR7Bvz6N2dJscyXtgn4KMmfHkr4FgGF2zx82H7uUwsPEJ86PziTxkkLYcp8CZs3P9B463j2cBa",
  "key33": "5BoXr8Lxcq5aomD6nSVkijzyj2TNr5WGQmrWFuVxSjBC5HPrSKqvBBZhpbyjuf2efv61MRhd5kKjYEHkuDMMUHMT",
  "key34": "4LUH4SDTfVDphQubkDDuSvXXeZGWPPyiTFQPfCeaFjh9Kxa88vkBBDQUuHAi6b1KSxe5cKeUWv4PEB7QgvCtd482",
  "key35": "4ZaYLSEq2sDqLFPbKtDVgureoRSovfCEeAwNLRPy9Te1bUKba6eBtncyx9TkDntTmQQ4bZ29uzSMG2AHVEjD4x9N",
  "key36": "22ak5Mqg4dAysUsG68icxq9KgX5CvkrzFye2hbRysCeaWw6GsBFDDcwxSk3f8asDAWDrV2BkAD6oEMnZpkSJgq7o",
  "key37": "2zoqci8DQJSZFQRpcxvKvgHxHHXsxjMN7QWko98VRVfjbxVQaY2g69N5BovsVgAvFViCRjR8TV2jmwHZA4bVWpMb",
  "key38": "3rs2as1w7TwMqKbXEPip7VCgZy3cgTTt9FR9sKhjS8Jec9sohPdQVRmFLajoxqMfVqW41bRq6HjgBTSRemx9FheH"
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
