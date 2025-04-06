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
    "4diNF5CXhXZH5mPTueog4bhWFpzQfDcmGuAU67CLNH6ut5RJ71YdreqX2g1wugUuR7Wm4BhX55c5L1dLgYrZU4M3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E5krwjdnguP7s8Y16G4sEisEVkYc8CFKzMp1CU97qs4ghsnad7Vy8UCiU1DjS62duFqUAyjgbzeY7kVymSdEcnm",
  "key1": "3myjcq2ZUTg23jwG6Gk8JgzyrgYrqUf8bfAPUxwMEH7mKV9Q83ahYZ8oaC9CiGC14qmq7y2ZeriAxGkfjwnuaKSf",
  "key2": "2cbfFJ6ocJ28nDEVKdjivfrjn41dkjvxtxc3yWYELbs5dEVM3DWVyMAv9EJcsWZHdknWRLaFniy4rdaVtpFCvAMM",
  "key3": "5kZa3RuZCW6Uq98esy5oSVmQ1WPHTN1AqoXexPBFkhqPaGn2798QexpAHCvA6rGxJPZTgqH9cfi8tKviKLMDwCRQ",
  "key4": "2cUpSx92Y34RcSTFfZqsVozrTQznkFTULkKrjvyHmoodr9trktoiQEaLF9mfpVMj5jFRPH185t2TJqTo1axHdoC6",
  "key5": "4PB4EG9Cus48tYNNduBhKNLrzhniKqbbNggY3his4UcZunk9rohVx6U188PRofA4FmF9WUzSM88JzWvpiKkAKQbW",
  "key6": "afg3EnqtTrS6Ye3rEmwwUoQc1YpUXEjdJK1JRCSEpLKcTkGVRLF8qVhv8VvcP2nDwTLCR4tpHF1Js8ziwfKij2B",
  "key7": "3MUuUvosAze9AmqoM1FHrDwBzVGUonvfxuLR4ef8HLcm5v332p7x5Rb2cMXi8GfvnnKpuS8awccVokvvGvPseVcJ",
  "key8": "46kh4q1KjobiHnHPtCsLQyG83j3vJdEq6CnVo4GXLpEeyrZz95pt4expVTmNvRreYvoguS9zFqUBupmDhCs1XjcB",
  "key9": "3UbAUxaPEuJXDfkBEbihMprDa5JMJKhSpswh6XtikSv7vxVAqgGqUYKLFXTx5AyoE4mCWMha7AwvavCphAES5paT",
  "key10": "5hVRPDpTjgBZU5xEH7wMJcERhumNtN7REwfoESBm43gF5xLERMhgYryminwZvre3nyJiJiDH8EZVnSZ19Lj9mPQC",
  "key11": "gTCMF89KJucTQLeLZXfaBUCT3ELgJEQZCaFV6VL4LZXVuR4pz3bgWu3dGX4SzN3ux3zM3KYZfNCtbKYJThXxNNt",
  "key12": "4WbSWwELtxT461xj9tvCvrFgaAy1tkBuyn7h3tvZj87fkGR7cMN59wiJrnQ7h2wodU8jCTYHKLfjwkn21WQhAoeB",
  "key13": "2Y7dzkc25eRAbECpaTcopa1BCAxEFXx2i1DUp4QphXiDm2Grb4CXY2mZcFFgQtKBgKjzzL3dvj9kXQJikZVs5Pwi",
  "key14": "5SKuivVzPk7yNyggUnLPyM1kjvRGi6CGtbm2Gs3ArVQrZzLSv7VD6mjSyroDB3TUSfTMg5D86NddtWx7rwVyG5yr",
  "key15": "ZLpqW7Dnega8UEdqKtuhfyXdQMtJ6SWQV4g6G1L1DiUFtc41iuhof63xHQLL6XuTUCudAwUwkJ6nSRjSDop5x8H",
  "key16": "62wKaCyufTdeVD8RmrH6CdpPiPEa62MswKY5yHAJxEhSQjYSzU6aQ2hpykCHMQ8N6qvEchoqZngSESWryHZry7Kt",
  "key17": "5U5K3aWUsDkGVFsn2BPQVL6tpmhnAeyab49Pcioy1HJyHzQRDnyWpCXm6P2QXbWapexbooE8yzbuQkJkHapaZVLU",
  "key18": "2wjNNcY6EfEfGiqNaNFQknn5GGh9ABwQGXjwFCojvobrNty6QpVgrrpURA1mSdjH3rFJ1eeu5wnVGoawLSn9AGkT",
  "key19": "AHS3kiYL9cdrMSPEdqsHTLFub8vYXC2sR8p2ELU5rDLBzWaMyzf9fZivs494v9csES7asEuggzrvE5tBj8pJzPq",
  "key20": "3xvoBLQzjvPmJjL8VjKyYz7zcneSDC9Cne9GkMQTSEeY822ni46xu5NjSpcv8iUqq3frbUNoyvYaR8f2o6Jt24AV",
  "key21": "4iz74an2PecbSGsQdxUBgh3yu29a7JEznj5EwvpnyFBioXAPMPievZ8xX5YP5X8R3yxRNh68FPWzi37hQtPLB5Zs",
  "key22": "oVXGQHh8UbbuiDNGxVYz14Yi7c6tijrgKfdM3p4D5hQ5KkiCfZaYRvPdLgWNsrnoi4oqBYYZD9FCoLWUd9WoDdB",
  "key23": "5yq3BLqjciH6qEKtxtaxUDttpiwDAE9Xc18tSahxtrVfG827vie6UNwsfB3Vkmxhx5P7jFSQmAgBfnGZCRvvwTMB",
  "key24": "ZBzDydmDkzm2NBsJbpAijAFgWfZ4bjgqKWuFiWnK8ArYCVjJ95GH9BTRaxxAHYzv3BcXsMvjhvfwY4MCCLUThPo",
  "key25": "2fyuXu8SRgAyfDcPfH2dyGe6hCgbgjy4wQCWzzkKyQskP7rTQ6SnFKPTCHizJRbhBSEK2VMoMNFjkMWHPgRdVnvK",
  "key26": "3U5kEoP8WQpXEyLSkyvk3xT7hRoXVTW8urxXi6YfgFPU68z87JcCoee1yPt363eq71LTM2D8riFHqyqKYzX4JZda",
  "key27": "3pZaRK9zuiJ4QQJskYzDdkugW2CfRAudiPJyEPTUqCPkYRnPG3UtawXhP8iW4rGRfmP6LEyXrJj18BTbFW2NuB2x",
  "key28": "5At45aGdG2fBiTJXNuiaPVS1SAocbEDt5ns6fzueK7Zoi3xNXEb5heb2Bmj8cykQw19SKbcFHtrwap1wCtwM6mdm"
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
