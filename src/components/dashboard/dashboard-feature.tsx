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
    "4xpapdBLW8DdZBoY8qdDvMNWVC7TpnJU5Wpdmb19BPLwgXnmmv8g7NW7CW7TJML2FDJdS9vZcgcmqgpQBMFM5To9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ErDihHnWctPQTFSw2CoE5ke3k9x4dVTjSMuFyXaUZamD7x7gnQo5SQkfqtie6F3Gm1MvgWnxkGYqf4r2CvcEqg3",
  "key1": "3p66iJibMxuy1D6KMY9mdaiBwF8aK3q78tJZVYxxubNunggyxeCSzybvae2qXhe3AoVfMFBwHJxRH72pR2fXenti",
  "key2": "5tauqaB2a1woRWRXioVhYqDfQZVYRBQUkg4oQQPpnwVGK9URVjw3B6u6CgRBsDXoL7edrnzBfSmam5RscV6nzJj2",
  "key3": "2vvxqayzXSRQpd2Pn2yuDc5CnzGaL4evyJfUo8Fq86No3tFbiZFL87h9VvjUU7gZjrZPgQc5WrL6aJ4bAdNhoA3F",
  "key4": "5rvrRd7Msevqf7ELw97ndntSuPTK12pzzrESD1CfDCc8MhL6euq1tGmvSuqdqBRQJmaXxdqYDHBi6jtNoUwEJYrZ",
  "key5": "2YgbBWC6WMZ8AjrX8uQfD2NGiPcpnNm4kY4Vm3i7j7BNmWWDiQT7BYS4nduibKMphcgiRd77yFDmkm4oU2oGR8As",
  "key6": "iERcYogep5FnJtumUaAUVArF6T5GbNN8GgkZqFmjyd4Z459o9rWePnHdtX1eBBWZ4T1vuUfU8Zqfpwqp3T7kHh7",
  "key7": "4HjeU3njQ8RSqXjtjkV9mzJW9KYP295oB2LEbm6kQMZjjE3LYt4FkJpSXNRUsGsw54RARRb5aCvxgydgFaJUogZE",
  "key8": "5kcMC4MJbwDgjuyN4MkCvKhXiWDuiyoHkTZfr4J23R7ZstgCB6FLL47w3Vh9CnjupAzYutBozyKwg1ngY1tpk4pQ",
  "key9": "5K7AcfW2XRNGHUjDSAuNRimGEWxBmaHbWgZVckW5Fvq3gagSVAXizM3uyiR4PV4Tm5kfiZasDNBkTfDJNaccn3R1",
  "key10": "5QTXDCh85VhkfRMKCrFVdNb6d16VXEDTjnTZk73ZeK7FPcdEpMcHw2cLMd3QB4Qt2PLqhSvXkRxhQp97XR8eZy42",
  "key11": "5KEn5KqGHQ1caPxDWR3ZN9QCPBJ1693UFJKP15z6ETuEngv41FDrMS7TgHzzHsvCe2SNRezkKSbcZeVe3zbGfaHf",
  "key12": "dPHN5qzruuctto3ewENuuinNYe1Z6C8qYSvJQ3qKScWnLM3e2kBCKNf6bodfe1ktjC1DGp95aqaA36FHh7274fN",
  "key13": "2r6kcYtaXgPo2HsEUQDM2dH7j2HFnoAmDUkaAnj79S1Bqnk9VNze29U1fkuHuSXVSNdNwkHzFy5Bx3LdqsfbqMAV",
  "key14": "5ieaaFxdtmzRzWXwXXC3r6Xb2r3Es8zSCduh1FkkEjkY5FeUfdSegbUfKuLTeKqS3qYoMiAD5xopkpzeWs6m2JT3",
  "key15": "GM6XEZngMVvQS4RfTFP9sDDpoxPBcUunQXPYrZmMZefVQ6KATc3QPf9v4jL3LLvBZbKiFrrtfZfSwWy5CrN5ZUP",
  "key16": "3q2SVVXWJ1zUX2hPANcvtchbgC9c5CptePLQZDeP4P2atwtGxGvp9hwQoVetz2NZbSVeTffwhLoB8PtvtRS99Y9K",
  "key17": "5FiRRgUk1tTzeuTYDjfRiypmeX5HuvmbpudD5G8YRfqYskKm78dF32hjUB7a6o4xt58YfY3BKfT8i9Y9MS3o8JQY",
  "key18": "3mGBjxAhkXZpow8E9XpXoX5sTq7FFzitSEe9TPbbUz63PskwKpPPgX42Wc7WirLTu8ukQAVBgQTPpZEuwtqJAzQh",
  "key19": "2nAcCyYgei9AdW6sE7hMHaEud68apdMWzAe2ffkZPqY6KaLWf68eLvxAvhZYdYfmKvcZvoNNkTz1FUyVw8sdvGZ1",
  "key20": "2oDpd3kvALddYm6d5U5dscyCTFZK824bb8a5MStJTGh1nRY2LkbgR4VBcLsk2ue5VBpeMtzhCBY72ezMFoLJnQDx",
  "key21": "ixqofiE51vSBtDZoFRiPtgTiFe8WuLBudj5ct9MScWteeDHUZoaFyceTdUoxVWfaRLdsdfcwCQSyFiBGkuDtPXw",
  "key22": "JRaFM1qmkpWy6WYAXPbBMX8ZV1RviLqTT9yv41LrEiPJW7M72uX6BXTeJHLWfD1MCMb6fr6oXnmjoJ5rEuBuD4t",
  "key23": "356nM6ACLNHjUx6HHGged1biWSBrY4TsYZUsKbAsfHfmEH8PGgrSJoWZ3Sx4DcZtWobqKXyJ6VzXsvQGyESifNt5",
  "key24": "5SwF2d7Dim65kFQqfiYn8L78b73xrMZujYRJysBrbjxchQ2PZpSjxFXTs4MhamsXtmTdFKaBqWoViMxC57s6b1kf",
  "key25": "2zADvkNMyrv5jTY4jXoairk8HNz8A2h3MP9gKr3HwdwjwK19TWh6UvsHZ7izQVaxG5jtspUybbjeSUpKrVY3tBHt",
  "key26": "4FPRj1KuZJqusTt25R5fJbbTUmPAXi7wAnewoyBCNqDNfR7DHxPZje5Qo1BrFd6qqAhppAM3jnDJfej1b2vS8sxW",
  "key27": "36cjyJ9D4v9bPoPzKWAuv9NMMfJD1HdvQGA6GXahnfuzsS1uvsw1HqffQTqjkvGoZ91C8Zo2LW531nNbWpEs9aRg",
  "key28": "33mS3HwgUaiNz4XGPkyHt2DFg8NtEcmop4qSoK3Be5ivsfrz3aDU3ZAA8uR7HNPjdK16qiZtGw4da9opThXnZZqx",
  "key29": "E7KR1bwFGYewRrAog2EQZHBeUbDGRYmHwiTvu5QR8kHdnh5LE8gN7rV8xwH3YUXxgw2FfYeuEsUj1vtGCZmNwAH",
  "key30": "34Pdqgic3HH64na4nuZj8a23knQdEgtwgTsozqBM26dYJzTnmu1tfj7dXRawLBc7vXwJpnypfTSPWHMvZFrygiBB"
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
