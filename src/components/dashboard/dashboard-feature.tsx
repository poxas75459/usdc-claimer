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
    "67ZaAByi7nzPjRkTXxNY1RoiYyosCXik32iVj45Di2bW2DEdc5ipEXdjUfJC4o9mNchxFFJhxVLPduS8fjj2JL4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35FZMLd3SQQfvbUudkuXZzkv4jiqEg7noAsEovKMVavZKhL2CSCDpG73LS6W8yCb9D2AvsWAa7zaY7sEVki88B2o",
  "key1": "3xYNpCtf48knqGHtagwWcKpCzhwrWBgt5Q3isXGdBLSfccqMxAd55qjwfbzr7hiFrx9ATCeFmnqGwyKkS1RYGRgY",
  "key2": "364gwwPKuKqqXysng3GY5g6tPzWMFemPbyVymkyz43Yc2qj3FQ53XRvKqsapZsyGusuDXgwaP76Kqk2xFkmwfsNz",
  "key3": "4bnrmgL8DsKQ7YqXXDZYdeJvivCJKTf3X3aWtfkA22nQEZNd5ycVUGeEEpu9MhGYseifdg5prF2p5ZcidjUSuHvd",
  "key4": "2Ev4apuGEQSnjBRbK1QFXttkcyAufVAZHkLthjHYGiL4P2NmnJKUs1tns6mQ8bCtW2ScGTYHrD84e4nHgiNNo8D6",
  "key5": "4RmEGKtUkT5Viei6pot1wSQE4m65Ls9CfTiuNpCHxpPotiZxbDR5E6dGnFFV1kRfCN4DTtjToDmiScYwXckvgxo8",
  "key6": "3EigbPP38xRjyHUT4gMFP41BXjK174y7ouF8Z4dPUuyB9agQRFFRLFhKCjtUFsTypCpXqbpZmvSPURfK6vUoVsuo",
  "key7": "4bV8UtY49mm9cq8mTDPmDKgfVjCnKr4ykbjJSNbFacu7MZfpvK2qeq3ALhvv7QNynDWKwt7NTVnrcfkGB4AeARn8",
  "key8": "3rc2GYbTv8S2WUUHj2j4jjRqNdXw799V5cNVKJobV2yzSYzBkhgk5wz2FwNx6Fy9rvdxgFvdXAy5noEshqdthjD1",
  "key9": "2L5DbEoVDeXSzixX4tF8teXbe1ziptHBaF7XVhUMpqk94vy4p9xXafDsrTTAztKJZMYaFLuDhbY6unkaNMnkimB7",
  "key10": "3xn5TYop1xr6MZNN6mZ7CxxbcuyZMwuB4ULT7dnntzksMPqvSWjMn4wWG364cu2eEmSyEbPnamBdEU6YrQFZ1qfY",
  "key11": "kuYAX8X3WLxP8DZ1HzbVaX7LUGWc8bAU2trFE373VX9iPgnWvkBveYNYNmLJhwQYbx6DzoLpBQxBsfSgxDJFqCf",
  "key12": "24Hf786qQFCMJwaZUwUZwLj5aB9CzLKNwtDYbH5stWpRDPBGVgDyokgjAzGtuSdqz6cVpjXS23WCbbPMejn9BxQU",
  "key13": "34w1WAfUMQGAqaYt5Qv1hw6mwWAjRS5r2a6HsuZCywtZqbw3eccx29L6TBCxxzwRMMUe17jBsF7aErfsms3Zqr2f",
  "key14": "448UJik2LuheZBRL9hi3rTR3enyCAQJ6RDL3CHsfg8HojyYUrE4cm6JS4MCoPzKuHPzf9Meah25f2cYtA6ptyQcF",
  "key15": "5CuBDpixrStMj6SwqJXt79VWm9yMcQTroE4eskHtPejLQsYaGc2QfS1ukuvntQv1YtQoWUyit1dZ5DDb3itfpWdY",
  "key16": "UjfWrdmqVHqpq3PbxEuXeeKpQWhr4KUq7rzVEJmGyrVhn5rvkW372tKXq2FgZdhUUW3dVyD5qrguVtQ6EZMeDKK",
  "key17": "MNBh3uqoFrLGheMNata84V97FzavncR5WkEecqdSLJUNhGpYMhhUL3TM8eX3c7pFdgeyTaTyrEPCEz1ghGZfhce",
  "key18": "YGmLBjjp8CZakkGJuT7JoBaQpwz1jfGeCTZ1xN6CXWAYUE44422kmqR2WycKWgaUmKR6hmjLRXDRmGJR8EuFvsE",
  "key19": "sCNe47VDCBY4keo6G11X9oifNtXGJuMqtAJs5gvu16gLt6RHh92kYxGr9y7jxWFBGn1EFAqMHpTrNSPZduRjv7i",
  "key20": "2Mp8EJbpD9ESbbKk4txtH4MRFyZcK2FcT1dkrM5zbMyfQzjs8kFkhDfvzbmewNZpbRpoFixBxeYMizFVSa7ron4r",
  "key21": "66XPemk8Y9So2ph3CkkBtuL1TdV4hrse6AHxDSn1875LuvYqJyEVEwTnUxnyHuic22y2ZM4V546hFq18vnX67Hw",
  "key22": "5avGVd8AHEmNnUKJjKFJXQoKTrFnCNoF9kAF84AA1Gh95oDCYZ1Pw9nFpHS4JZQpEkPLfaZMCJd1qkVQd5JLtD5W",
  "key23": "5oCweq5CZDoDzi2k3FTaGcp9Kp4i5SLDEreuk7wVrUNKLQawRWC19EWgWQUhsSMzgJ2GT4QhAiALn8pGJnzQS9me",
  "key24": "2BdMNLC3Lb6ufPCJfs9nZPA8zFurpXdChuySZWWsLJMtvjZFy1XNoguCfBKr524pvGG43UNfWZ9dWUz2z7jmHTyB",
  "key25": "3k2ydBcGRAXFJoFJj8bS32e24HsPDH8KfeMAmc3Z6pjqi2LPFquW58MZWb5jg3JNDwVDkU7Tp1Aa2GSpMGnUSNT8",
  "key26": "WUmwCST8nAC1QTsP2gA77BHehDsjXrBNWSnEpLYxSkwNihVi1VNHFDMxfJkZQ2BgjwBBpnKHACTtRNMK58B73Zc",
  "key27": "iyM3cbJqgsJMAEpVHAU4auZYZfUHaMa9Bh2UjAruXxRqCxJXoezxHFzytjhsKYFrSLvnrzKz8Gm5GNtvaeGhsVR",
  "key28": "NU8g3wdiEV8TqcEhkiRYwRZk8onCYHT6sNth3WzbekiDTWtVT2f35h5bRX3TGYxLxATjkZZ6D3kx1BFbZ1wYLgg"
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
