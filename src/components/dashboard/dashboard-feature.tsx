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
    "2b2CX6sCwc5gGB5q5zbhdnFSQ7zkdHggajP9WvMrTGb88Jy2jrBaqaB9MJu8FpXuuzeeDVMbYMmQP5WSUaAqsHA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ccXFJbNaWYJF1XdA7RuoceBQud8ggqrzD3Wcm4Kjhm3geJuaeN82RngA3woK6GQR2NcRKhwf5YuiTnTobErgsTq",
  "key1": "4XX9zwoMBDkewK1NioJHLtPFYr5pqTz2BofUwvUfnAXG8riXBLXCe4h8EXiwaRyXrZb164JFxr2GpQ6CwDDGKLEC",
  "key2": "2Z9nTTwCL58itaHHMhmgL1fkRoNfJwQvNCfFPcBpDQzT5StwS1tRJtvRN13uiuyPnHK2HCHLfWoV5s1HniR7yvHw",
  "key3": "3iHTMzYP2BdjUo72g7qNJREQ6ByseC3kuBBdTxd71RbKbboCCM7NgYDY9nW8egiHHn3qcZ9w3iCuKkC22qM3m5Gq",
  "key4": "2fXdgPyd4TBUM5iHMPat35VyrTbHKMwnNG4LRTegP3KjJoRaqZH9c2mqkyy6ApPRwgzxQsWJgi196Cq5EPWUGY2Y",
  "key5": "3shUxQ88LYYCvA7VqNpgLaN96nhg7UEHS2qvqYZzRKs58eiDhUfxbNH2nkp4CUG6ZjAe2cr8UzYk8Y1PZX3qPGg7",
  "key6": "3dnWe2f1kMMQunVUZJawehAG36myy8AiurduYqzk6gSEiHww9WuUFckRYZiMryZ4kzJoX4FhmbVAEXoagiteHdM2",
  "key7": "6euDnBKyURzc95GR8j3xtgC4b1R5GkY8jboPaG8nmBwmDHeJrn1My6iXSWCWnBHqWoYbAoqVCqg6mcLDoMzv9cm",
  "key8": "2DubjyPG1ieQcriswgX3RzpCRa2AUrNhzLbL3CR4feRDkoC84cAJmixQBg1k5t9KV7GYDAynYRVEUEJGzaaGgap7",
  "key9": "56p7UAJJGc3rZLtHZSkQQo17adEwPNAB8jJMmH7BnX1LECWJ2cxb4XPCAuWjoyqRmksqdBumHrCarAGKGPECPnke",
  "key10": "5ujBZwp9wkYLLRvFq5ZXZspSeeSpRMD7XJeDHt6uGRFYs3VJwjXLADeEWHzn8gdXWjxaFnzFu9p9XVDUGEXf3Bzz",
  "key11": "15ULxL6wnGSEsgLSyZFxjZBsUoa8ZcPqEokKVN7R64Z2KpBMKE9CjEUzEqA8sXsfBQs9GwyiAQ5iicH1vQap2Bk",
  "key12": "uC27mbLynmrCG7Gj8yLaQwUKowg1iPJPtJ9TohZAgwks8hjQiq8swZxNUZWK1qE6nQ8jWVPU78zAQuWVt1cre1H",
  "key13": "5frpZv3CDbqZGymJr2ior1XYfkbHK3kyNgJA2m9ZQeMbASBpwatDhCPABSAhS4egy5zg8eSSTdCdQT6Ho2SPLPsA",
  "key14": "5StUWpKZAZHyD2ixgCmw9MUvd8RumP4oSDQ1HKC86kfPdCzkEf3Axe1ZjDgwGPuMF6nDL4reqH1BGcbUgTh8KW6m",
  "key15": "5kkFsswZYVXbLG4aFvx3GEMxtWr8irV4khoygWVRceuzEWcSMcgpfY8SBRoAfLMbzs2iQ3MPrBZ1zTwaf477p1tA",
  "key16": "44xmYdKS2uGmUDprxWsLPoc1x1NBi2VqpEBiHZUBQQeYPouAdi4FA4Yo5LnGWCB1RXGQw11mnsyMA8CJ11tGddEX",
  "key17": "5ofcha67SYPDfSZDuLw6QmkbgLr3bsaqQuw6ckvcFvvNY29jDXZyEU3e7qAXkHkF6ZA81UcHrVa5HHCF8Sndi1ED",
  "key18": "5qdnAauKQMf9QiZo1EdrG99S2NqQ69rwJLjRdi64E3NKcgymhHd2vChAY3QPyzuqh3emettFp9caykiiLBe35sPY",
  "key19": "5YxH5ijHz8HX3tFUNQF4xxnBRQC4grnzkLew9B8D7HzJcorTXBLQrfH3fDxEq5CpGYPYkfie1fRg9r6Tvj5m3odn",
  "key20": "5PPuXgY8XNjHThGb9snnkuoe1cmjS4hWKc9BdQQYvNrxf2NWEHQg9BaRrvNRXgSBSNyT6aXYrTfP4VoUSohDhHEa",
  "key21": "3bDRar1MEZcNWdmuCqhz3ADoHZux62wKyWZH2cbG7DGBcR3TMhVkQHJfY4PmRrRMKVknmMnCB4y3MGX9hPoLE89b",
  "key22": "42FnR2UbxoRWJeSroGHFj9sjgGhWSpSU8DPJMREu4BrhbBR5rwZZJ44gL1ZHa9GsggXRv45dTE8zfXXcZXQ2NbBB",
  "key23": "3nQQdwGxWUUcYc1HJ549XbiUJrWsbViYe1rkMfgK6Cg8nf4SsWpvWxU55kSWKsgfDC8xsE94sUz8cyNBXDTSLAKv",
  "key24": "dk1ej9Dx4tn9TvSsDsBb6y1dSestpJtAePDiigQSudoicZUMWzmm8hPmTkuXVCZ6ya73G8g59RZfzvk14LnAjq2",
  "key25": "4n4fuASazHf6FqtfquuSdy7PJh6r7nJhfHpjFz4S2cznoTcbDJyhpGKbYcjbi8K54zcDV1maTmvCJzmhBPbUc35",
  "key26": "3n1wR6Xx1PVJCiJYhYBiCnkhuXnTc62kC1JSEs8gDZ4BYHeU5SFbQpccDq4cdmEtm2G4a2pEwjyRoV3TtZ4y2Hn7",
  "key27": "3vTazttWeCeLdHaHNFsVCkr9UBHZcrya6CQcsGkjQJDACQFUJwiVAe4CfFAZsLFE1TecYzJ4EVq1u17sFDvvagCp"
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
