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
    "4JHScnaSFjWrpp4fTgqhNTwVgMXqMocmbGZ4K1LQpJu6gitQeWGWnfvtPZqpTFt94x6bU56hPiLdYfdsiLFHPgih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rXAhfvryWKeV9tTNCd3VC7xP4McWJtfEmCqT65i7eq9kfavXNSMSP7paPwRHaoUoGVxEgjV1qDznJDpgx5hmqhr",
  "key1": "43coqmf9SBpdAmqTovr6VwHhVPEGJ2Bws6tF4esxUJr6zE37S5bGQMRfqLEC7myUMRxmCGtYx66N4vfqimbYv1qx",
  "key2": "3dsjaNCfVLkCiYJhNSqgU89srrsCjeSSodN41fuvyEc3LgMXd38AnVJFddx8TN2GZehitfnXBVwSUtd6dLnzpwqA",
  "key3": "3ErEZetGy46EqukDXKVQfrp81GpCxUSsp77VDC91efhvVSHmxRT1en1gk3Rnbo8kAnLhk8QNYdfc53LBQePQ5C9H",
  "key4": "2ZD4JRKrNiW6wroevWAHejWfoVSBN3o4JKC4bfNAqeddvivbtmKo56ZgRUXZqo7WbeM1YfvD8NpFqLRqGydBpkqW",
  "key5": "5W8oBeB4aWsMZEttx58TiXSRXLhiLrmVF8NcxeYsGpHJbrHpqfvnxG7xQh1ykrpw46qUjM3tevEQ3EdQymZJ55a8",
  "key6": "4bXU4wsdLSJN9kNK2CSY6sjue7zY5u1tZww1SdvuTfrgrCujZpanb4K8ceGbuyBu4AmTRScwUVrTLUDwG7gALjZc",
  "key7": "B5uQW2fp4UZPh7ox8fDFtNekB7LjG2sthRwjVY1PfEG84EV2wGn8mHbuoNa7qanLMXgFJ6cNrSwyPzWXmZ5qbzu",
  "key8": "3ZqdH98rp8iKoACGkVCTyiw7ZhhwZveRyyuuXtF2LhoaCG3GDtEuu95E9uNBjQoEUbBQmuxxecpSppRhVABApYMC",
  "key9": "2zdSrVkkGog7buPEG2mEUzNkaMQ8j4NDt4Tx8jqGGVmesof2xD4igHSSV4ZMkaCevr6dZq939qaQ8bjZSRaM1xx1",
  "key10": "3HCqM7jAWuYsBJM7cGqkiNuEMj7exCZLYCfTjYuR7xFHBdCiX8uTN86WTh7koNB2q7V91DWszyBMyTWQfmFhh8wM",
  "key11": "gmuTonTghTtD48CRCUXVp6g7Es7d3CZxWHjvxxpnYhavfe77dG9ivPzjdBz7oNCR9T2Fkeyb1mLXRBLx32c78tZ",
  "key12": "5Eb7kcdTC6y7YyUMhHPRja9vMYT4UBvMMzgPYc6JKCPpkNqdUiXCNGko8ACArpfqzoXf9QQVqMyRDQBwDjNYmL2K",
  "key13": "5M4PqrKSJ1u22yahnUSmNecnMZXr38yFVq47yuugDoVq5Cy11gyF6HtYZtgEtiwdLsrnQgL9NYaFjJkKpiMH9Hgw",
  "key14": "foB8mnTwz7j6gyrNmBiL73gtgz66dTmB6sjk1uQq8DjvxY6A4ATJZ5Sd7yv3tXEKzzqDm3832puFJ1ZSHVVT1vo",
  "key15": "Qt841PN5kFTizEcyV8qRyi8q9nVYSqSdnRSzDFtimPrRG7MwptQ29yBM4VSNMEdwvEAT8f4BLmDDDqBpub4Cgvp",
  "key16": "4AYkqUaczktthWvHUfT18Yo8oP7ZHJHCgFJVV5yjV9VivGMHSCKCrbDTTJsJeAk73u3qeWU4qd65K9mqAjsyAnBt",
  "key17": "2mRtSbeQwgkhuWrmvsUfRGDukmHri2Me3WCDryzkQv43bNx2DVzHzDPdgmLY9WHDfXPUKhyPYFmJK5aeAF4WGbz7",
  "key18": "5X1NzAWnRaEA3jUJN5DTbEFfADf9iMpPFsREXZSYte5iCkESE1r2x6DyKdovYEG1dkgRAzmtWLWJXF5isoKjPwnJ",
  "key19": "65Jm9w66F3UMMRRGGBeqE7WXh2MUbWZUnoo96CQANzwvPi4fTJQxQMxhC3vmgxRVR8949FWALCiiMtDqhrcwwVZg",
  "key20": "5mnLj3ePBC42SkM2qGe9hNfp8BDeX28cnwsrRcjcL3PQ4DP2uP5ZWywHcujn7Uv9xRWhBz8294924uvWiyepaBgz",
  "key21": "arKUGTHWBqQxLUoBHA8KU7MM2zzFAzMok6SrPnxaK9VmD4xaNmrDL4kyV2ugG7HUqUgYBuFTKs78dUXVtN5perv",
  "key22": "SAMAyGJGpJWpdiKZdz8n4UiNx6coEuyKMfVGbjv4BTLrz7FzKxzD9a7rM3QaMs85BHyCUm7rZMKYDMESCXAeXab",
  "key23": "2kWz9nLf2LJJ7GPJTt57MirJaFrfkyFTX3cE1BSTsZ12yNtqFeyPdULEswHzgUQAxT61fmDi3y6kB7bZMC9HvE5k",
  "key24": "4p5BtMJBGmdsKsmks83KVj8iiiEA2qjWEBb6scx7BzNR5e22K32KzV4ib2Dp9gRgpsDi5vUDEVu4PQJTAhhsfHSw"
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
