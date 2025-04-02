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
    "56yqrtpZpgCng32jznEGAkxM5f1ShXQoxK7xfdBQkrMZPfhSjHVnoF81NTHroBg5zYqDxkmcw1iCbqc45eUvtBZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hT6ujAfkFKX4TZH9xUxvtZD2Yg1AgQ6SAqALPPjjnruFwSeeULgidV4GMrSVd8RZEtC1mDxQxCYTDHqcSqcrLov",
  "key1": "5Dxse3AFgnP7KYeYwKahpyCfqczpgGi87ZDYs1VqnDZ7KfeqxeUJ4buqnrKqUwMHc1LxLGWyy7rbMo6qpBgSd4Wc",
  "key2": "4Abr8rZ76PS3woAR1E8w235mUdTUSAwMeqtecnrFZYqY1eZWz6NMY7pgeLF4AGmdVk9JxbzDJzJ3z9WMVbz7iXVB",
  "key3": "7rdiHV4uaWtcS3CXTupEsVQKTZsoAbckpxYsgv2JnrHyuSBBruuQRZvLZLNnPNFQQ7m8pJAUADSWoMAYf74Qpnu",
  "key4": "2X4vqBVFdwG1ubb9owq1sN44YJyyaKgKSnSxkY4oroC638V4AyeSoxQ5oHXr2RwFGkspYhdUBosZXKca5dNJZKNJ",
  "key5": "ZGrCXy9giCgM49TkvyvxHMVQvCCAcuBV7hBH2LdtD11jszcZTciRiRNHrDFt2mw66tv3jtS4xPo9fYEGTMGmSzL",
  "key6": "ARxtwiCUoQ8V3QATJ5gasDrXy63fvMFoQ7BWdZgNqwx1sbU72Khcp6aNXgZKfcNfoR8VaJ14AhcSfzXzCiAiYA4",
  "key7": "43wC7UAG44SXGptkicNNdsg6ojbngTYEHAUzuCsgDtr6U1LxLeR6QT2xZmz7JMXP6kaZmrM9n4NdNMaSdF7Y4A2A",
  "key8": "4n1QMNPLf65MUEW7vBPAernSPthBENpZx4ttfJVrGj66C25uts99EmJz6dug5K35WtnRCgjPewDHYBRfX8vJHteh",
  "key9": "4fyS4fD8VjGNzv2K7WEJNVjy4UzcNdAuU2x8Khh9q8BzYhUZqZ59vkWSbSKg8DSAnvZjAAHDAr5McJCSDUUvWsWn",
  "key10": "4q44gxjDg6byzqSCFqrPMEwKvEP2iPY8Tw56BdGsLxSJZ2aLrCqybsntPGbipqPgyBs9W5ZE4uHeRQwbEYrzoV6U",
  "key11": "4rhdhNVD6Uc1Vfwx8heMhJn2CLMvAgjkWkyhvwe7fyQiCTNesm2tYSBvKht2iCjMaG5hY4Lr2Czo3b4hiSbnXLuC",
  "key12": "65MupPHatHL6hWiWmSfRk7KNCTzYi26YG7LArQqizgAFRXvGZiABoAusUP5n5vEYpDJiunJ9QBLAaRWYe1dkvNAj",
  "key13": "5hgFRuxUimJeF3Ei7Pf849nm6VTotnkaTaUnEkzL4aGqwmRD5WF1bdbnmwffq9JgLCfBAXgajCaVXeNs1oJ7dCFQ",
  "key14": "4JcJH7f14uPMQTZuiJ3TcfnMr5Ktm4jRig6FANaVMVScbVFaydMfpeNVngRmLYjNzwmT8m95DQQSowagWjkihncS",
  "key15": "5kueRZYGkc8jCQd1P2XRaFaNhgn2rvxqrVcvVqrgbdggne79SgLC7LQ1CLzdgYJdtwRVNE1G3WYczcszMNP1wahz",
  "key16": "mhiGWDBo383cC7rtzBGsU9C69NdM2fFe4sSMx9UiqjAuQe8L7bTbYbi8rKdoNPGej1KrMw3T9BDV9oxJ4vuquee",
  "key17": "4zeAyCocsBnkD3N8fnCDx25Jb664dCD71zRPrjLeFaC4EwKsTYZbuBdYDYNV7M2ayBHx3QQPyZMfC7pztUtAAZQy",
  "key18": "5oEPcVapNteEyKsdzJdUpkGgjEpZqMj77CcahWTAnAPS7BDVTiEpueJ6nLYXqfFZcPwkAsR2BtEKYpH9fDJ25iw",
  "key19": "4aLzXu3XkTZhQqbCkWDELSehLHY7MRcDaD2gfSKfFtQswLDK9QJgRKyCG5gpgVQPKi2eAx3GYmNxNgBL7AVkqFbz",
  "key20": "5FuAETFzc9VBju99CR44rKF1KezoKwBcxW6TUoSRecy6AKprpao2pjrCcHVoiYfHkVh5UBkHhegTcgk347dYnngr",
  "key21": "52S6ibmSZZFwWdvH4NCKT2YPtnHCVHXr98jRFkEUawqavhG3RwGUYHF23wLLFw9kvFHPWwJbKMrouecUHQZg4op8",
  "key22": "3WzGxHuttqAEHnM73DTxHuJUEM7uNMgd8UfaV6RyWqi6Uyyr7GpXKR3hfzKScPXbXZy4vrHhQmuSoM2UCmKkyMxA",
  "key23": "ZtBa1M75fLuxE9PpGBSGFBT3ADpm87pyDWDcsgPrBqTaUhETYB26i6XLkSMX8zzV57NLN2piQDCofbBskX7VbB7",
  "key24": "2WRDmZ6xAKtqFP7uw6kqeVxjc4LLYW5NikzZHSCad53UoV11kMqok7JkwB4Tbr3JqzZK8YsRGCnX5rWJe43rymFq",
  "key25": "3L1PdJU6FQoVTF14CnHS2vTUvPV5dwNtnvb7coV5RgSUiohTVj8rTmdhAUhxjdP9erG5J4miYagQyPEB1UjhvKB8",
  "key26": "5vCs79DsdBPrLPG73w1CAFvJWSJAGXHGtL5rPpLkFjx7XGtf4e2rMcXq4oZ2YWKfycc851xEmfiyShU3g8rcEhxM",
  "key27": "6H2xZJKtQ7nAnCXusonshLt2fAXPvRjN3Q3LYJRsZJwEunsaRM9qH5e67XiD3MJEvfRNwDa1xS96VTmxPMjdwts",
  "key28": "3XGZc2vCp62tf5ouT44qdmB5DbKmFBvNg3WLsVgkbJjrgVmbZQbBMLnAvYT6rcuxWTPQpSmsjVMDt8jVAMbHwviM"
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
