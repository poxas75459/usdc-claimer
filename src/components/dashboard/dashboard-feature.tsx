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
    "4obZ6WSWq7uwCnDxJePWjmvCKymCa7s6wytiYEA2qzws9YDuYmzoFneXFoqDEP7dMcGxx888kZpiuCfDLVd88Emw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tzZK1d4zdnYTLZCvoRH6f18ukAwaSjbBYm1BFRYZPf7QQf29Pe2gvGTVuhtXbFtRBFHCnKP9feYD21wdknv5cnn",
  "key1": "33CoF95ZX43DcyDMLzLWBWcEKvs5mXCPEjYjNvw1BGx16ALDkt9ZDoVFT8nUVTEaDA4CG6WV8vYA5viLQo36ixDe",
  "key2": "5bp9z9jQruTCz64qkgf5dYgosSYbrXEeBtRaLU1N74p52BvXErwfFJL646u9HjtR7xvwL2BVaQUxSetGjW8HfdfG",
  "key3": "5s8VZDXD2nXZjz2NyJ2h5ibQNy8GNRCbjwco2YUACJm3PdH4tHVHXwBBoLNeidAmMmohBDriLYXhzk3XSzc7bgmj",
  "key4": "63zt5CH5Jio1gqg1T9ta82sQhu5iadDZPXVWRmsHuWwM16w5V8KLY1X7Fa39uKxMS57fE8ugjSvr8gn1GoZ2ZG9r",
  "key5": "4y9DZYyf1kqJdUG6FXa8YMVQQcB5CWFECk4ykTK3oYtToDY2RZypWtU39iQ9RazuEcsswU4Viai5fDR1w6oN5cht",
  "key6": "H2MT6YsHncVZfNJS4Q66hByQZHkD6Yu7Td5ia4uATN78ApZ372w2XpwCZbrrjADkFx81MJoeeuwriLFBMqL2Gvz",
  "key7": "53MZpUooCnjX5C1KLKLpB9E6u64fHUND8QbX9qf5i1wwwfXG6694nHu5rEMaVZCxFDPBPRtcZLve66wLeh7Z7fRS",
  "key8": "3dFjLciVzWyBiYKqbi8dEvccrJ6uUWhSP8PVtXx7gyYfBFuGoZsdsMDzGq7n2tCQuE7t7ujnipdTXfkhWzyRUgGJ",
  "key9": "2YzCR5yNBfVvPNJfYA69e57MM22a5C6u64DzmttShdoabHyuhcunmpixJrJJKiaMBB8v47EZCNAK1y19n6Pn7VaL",
  "key10": "5ehrDiQcCUJdZkiNPBkYf7qnm4eW14yFUACqDvRwPFMcp9PbpKYyHLEwy7W6fFGi2xyom2S3zhBuPJMsvN9JSoey",
  "key11": "3zvLR9x8MMUcsi2c2SFgzg8M66uNa2cRTukQabT84fHcEEBv71H7MiNjm8QNuMpBUjmga3DwhpsQ5ndGZor3v1D2",
  "key12": "qEDaDmU6awzYdGLAGdFpzvkedZ4E1KPZrsgyR9ySYwzoEtn85pcCnGLXAnQBZVXApxCBT1DDedQZQPUq6rJY4Fi",
  "key13": "tGc9Hdam2yL5Em5smir5gy8bcSyKyXvf9vRSSMsFdyKuCsHmvZ9hn2MutZkeMAWPGq4TRJ8WbWATENEHmXLJuJd",
  "key14": "2s1qab3sAEwauwzpWdyyqGpeDDYG3P74jkzk4mEscJhsh5vYB5ZXEu7gK9pZeJLsThwUAJ5WZvp3BvdtXvJdLhMB",
  "key15": "3zzjtn2eCvKRtiZPjM3My4Wxb1R82nGbaj58zjm7Dq8zdADnEd2onyLmiQ8F2PFqQhkDpy74TMjDh2qAaYTy8L9w",
  "key16": "2173h9oe6xSfh49GVPumE4m4vXmEMREuirQZDiVvSMykYP3HTqnLurjgMR1Ug7uWEdjV7QVWWq3LWYC3JBAdYqZX",
  "key17": "5tDnt76geH3GZrWA3mok7TJyHDekR3ykzhjyhUwTs8fuyyvf8FpJVeLPiTPjYF3QWCDRQ5D4sCd2PDQeKAwwLwph",
  "key18": "3EEra8v84K9CSqszXyVgp7GVxVYH33WWLHCPBCQ4NZ9siZzy5EHCvfFgaxBGmTnnqtattiobuQ8qR8z8jvKX9pao",
  "key19": "5kj6GuSei2SAdpozFAa2UM8Ri7WmCS5Km1BigjbWHBmWVR8NtCFCAhhyyRBCWFp9r8jzK5ErggUN6cWUGXXd3uBK",
  "key20": "2LbYhNooJKiQPQc9b9tv4K2XZakPpM7nbzb4ymg5nheiXrgzsKu5CQLsHyHewYpp2ukpHcLMwx8gwrNg992ep5P1",
  "key21": "2xKAeF84cDr34LF5yPd5eKKEm2YgtTK9DUfRGMKfq62eSzgRF11qdRxFiUAWrdYiyABSShg7iqYaETo7kPbtRYhJ",
  "key22": "5TXF7CajmYUj4kK3is9SQtCthmKKPfCVMvj5aiQsfh8sKjvY1SkEbEAiyR3hfPVH4hEVeWMuaxnpfTTtnjsZTvb8",
  "key23": "GYMDSvh3se5gFpamZWwPP9JMcfe6HYka7VW2CmzsVgmT5ZjuziXvqooQdVme7xpuEX2si4pAgAQ8y6AkcLWw5U8",
  "key24": "4Cx6pxbhGizdeMYuvmhBDQJoQGpgN73SXB6XS5V678ZAGvvqLaqEEh8cH79JxfDPPdPTR3TQoz9izvVRWhute1BA",
  "key25": "2rCpfSL5AGNnCTrtLirXp9mybzLmcYUdFzE998Td2dMc3M5d5WVCeEp5iWmXajHh7SNomfkgyp2dPb1w8KaSQ74k",
  "key26": "5b2gFdQqMwFXFDnXgU1mkqqhrdefdztRoeYCXUaWehyMjoh1nJbDFXkfBszpdmPZDWBWQ9ALYzPy9r1x9FdSL9SL",
  "key27": "4hTGc9jhuEdSRiUhVft3t7G4DN5P6x2aAQxbZoghGx7P7q3qm7PCrP7cYnfNhzVpJtX2Vm5TQGcZP2eJrTGWbx9t"
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
