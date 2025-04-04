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
    "Hmtu35ZTPWPrHfab7Qf42z4nRgjPX2UqnXt7FkEX6Kq1wexcnQ8M3FwSFfzKNaC3euRCmKCpUNTkTtF9eBpSS9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38mv2yKoa24hsFw9ndovPwf4PnEeJyS81BonK5wyXKEnsw8auwT1Sd6Zqs7HYuccPhf42PoCk77ZR9YpSUEhzwXH",
  "key1": "Gf4b6b3VdThHsTmjWX5qZ3PV3CRYGFXM4uWr6ADCoGo2fHmYZ1nqmfk3KuAEwno4Nqy5WeAtxxfzufCwA23jYhX",
  "key2": "t8ENua5Gb7UTB8bi5uKQCu9CTibTbuhEit6V1dwbjekZ9cwnHaDGk2zxEafTkiFAPfR74nAyePyMK6pvVDfjxEe",
  "key3": "EgnEXPxzpfTngeZ4RHAsSaeaYByspxpZWw71fY7Xp4wdFxzYce12Krb74djGCuXTaZh4AZFMmPsDYv6NKdWmcp1",
  "key4": "4KSFt5zgR8E5QELNUiZKtP6BBGLhMq13hC6CfVPWKV5LNvAmbgYuvnYUWicZKyPsCsmyiJ8AY34mw4ba2mBVk1pT",
  "key5": "4d6fv1hFknJCiuADEq5awFjpNcRKHLSPeujDyudiXHFBiN6trAYnqt93ug87vr9yS8WziQReHGcaBPbXD8shxWJo",
  "key6": "5p7FXGFRiTUPvp7GShh7X1zh4bat2JQWKcW9c6rNztBvVWwQY8LzsPD6EdanmN1UfLDvWgQfnF32aqsoX1k7QgiX",
  "key7": "33xic3Zcp9v5pM9hezSHCEQ4CjnjHLevZdrsqafaK3vQcxRWCiRHwP2NRLsDWmuBheTrBSDXTeQsc81CnpRJfJQe",
  "key8": "3uLAYsTnV7HkRC9mxZ6jef1Up8eUBMKNTzbRMJYZt3asyeVkfCDTqrtp6XWNgRa1hpp2t75iKjkn9ic5nicT4u3c",
  "key9": "4DUk9zAYub9EgHCjx2FJdaZ89S3989gMCZz32kNms9KpfxPrrX3GKbD11rvEjS2AK5qyV2oHRwZaXeUNsHHj6VVb",
  "key10": "4YdT1jGorW3JTrdZcGPUvpbhU7cXWAx9Lf3S9G1Tn4rDWVqsZ47BcERfkuYS2pD2fkPzp2cpCDiRLKaxP7mu9PiV",
  "key11": "4co6r3mipHGCCcj7YmyUCcUF1VsowG8t4PYJcFEWvjd36tfsxUEorFnRgwUCtuij8YQTKwFqe3XTXSxtDBnLn2cL",
  "key12": "59264ydQ6aCeG1PVXvLCLJGMw8sPc1rhTPMxXBWYEnD2Z5fVPLiStQfVehKBhjmoQVWEsYP6MQ9uZzDpe91HwUdH",
  "key13": "3T59PqtaHqR2WQddW9wFoM3YSz42fRVZGhLv6PRhesQ85u59SVJELJX2CjHXBSRosCtz8759pYx15PsbDEp2e7TE",
  "key14": "5LKve5QKdW4fka2tvHTBwKvagXwQCLL2CgEmnVKsHDNP31ksibkcNAj4P8q1vHrTWZV9SHSDVC7znu1xowXzNg2c",
  "key15": "4N8SzbhiyZvroquh1ia5jvCB7atWsgVZikQQC1AUzqkSrn6i2A9CgHTWZCHaqA9ZnK9rdvy2SUiBcMDqYfMoKsKm",
  "key16": "9a4trVmTjMhVGYuQgkyHVBH99JbzzoGiGZJJrUSeyGRQjPJz1ZrneqAjYxWL5b5bdKxEDSjhTDnNuT4MJdetjch",
  "key17": "21tmnUrv9gkvey7rnT8vbWAzH5rFXrNR5ef8VzCBh8A13gbdQYj5NFLT3jbmDcZQb9yw6y1Ton1ez3PzYCVUcMsq",
  "key18": "3MZPg47DD9dys44sGWsnyds6YkAFw4rFaXfNWZocepLvRnicirDAAWQ9KUSfyc15DxueSZikhM6UugZrfpx93JuW",
  "key19": "4sEUH9pHvi5LL9yBzpnBSy7bAELZemJcnHCQd2A5HYmBTFJppuaTsv8EFvRVqnnMpc8HiRACwB98K2q3ukyZSxXv",
  "key20": "3JVa9MxeJXNmzHF46xB5ozhB8zdP1zcEi2DEF5a1yXjdf8YQG6PTL5zQkEb2c4ni4wptp7nzh2XpfzbJHgfCHjJN",
  "key21": "5WeuBV7M9WF2qP7wKbUEV589Jnknty6D2b1npm8jQubxdng74YBKBwYNVfhQJF5g1kqXFG4z8PnRiARLzWJG7YPN",
  "key22": "5pjqQjmJCJFNXMigrgCuvoMUoZ6jiw8c3j9ACYqHjBvBr8PRVsKutPPY7iErRt8yFQ3tpSv2mtCSGfzYpnPDnX3i",
  "key23": "5u8RZcbRvvfbNiUZXAg81w43DaAwEuibhVo3TiUgU1FK9UDJo9ekB4jbPB6EajReHVJPvv15Ag9Vro4z58G3kUCF",
  "key24": "54zxBjpqzx4c4tuL6V4ZDnrkC6EJFYDFAZuHSasbi2HLWDst4GpRM68pGtiuhme6tyA7rGKib4D6U9frLnoDq9k9"
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
