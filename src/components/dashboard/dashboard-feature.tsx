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
    "2e1Uc1Vc4dnBvNX5tjKEPoSpuo5qm51jghReprcbjhPgKd82jxEnzEYtQ2CZ6UWAwL48j5e1vUf2cfbRf2gHuko5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rxpVMusHxqSGa3jczWYjqi8jFe4ftMMjGBwTNBdezC2v4EA5xtjfBDsi5UuyhPdREszY14ivBaEm3TB24EoHScq",
  "key1": "5Vb8oEymNMThL36QmqJogsWujc9eD5Nr9H5YW3s7coWSWVyNCBK1D4atvcx61NHYCKvERXjJut8w3RNFHfKvQCB",
  "key2": "4aLdyDCMgU91XoFFpNyB1Wbtxe2kKeFXNFYYg49d1t5goxKKdLzmEBDCEFsExuK3gHoiymAgody2FFzoiLEtbNh8",
  "key3": "25U2b1bztiwHyvC9VQpVastkYZtLNFZz3gNgZLCnX67UGRF52cQC9fCG19M9UA4DEDL72xxK4iajwnUJohvYm8iW",
  "key4": "58rt7g6vDWuaE7NixJqLvEivvFnYgGKStDMjdpN1W2h9v1mgnntfcpkngRh8BEzftEK7FyU83AQfY3HBKpAweq2R",
  "key5": "4ZFg2K3SpXWZrpHDkEQnTa2Qr88gG2pP3WRoyNGiKFXX5dqXjv244Yn4HchNU37abmoy7pvaTRR9acmNy4jrmg88",
  "key6": "HQcmPP2UbKQ98d156DepMhivKimXj88bSjRTv91LSPknG4egSXpRgox6ZVpDjzxd6LNA1Ki2nroT2SpYRKHZQSm",
  "key7": "3XQZQSXxsxi9upTRCDLDPPbiTAynXmjsATZgjgDRhK7yqSk5YHCG3E8zkP26XjyPTthPEcgsRTUBjqLuxjJZP6Qj",
  "key8": "38VX6XF3WF6PtbAqqKC5vTFudt26XAU69iyphTXhepEWqd3KW1jccSf4wLDTWMGGoxK6hQNQ844WZpkAZEdrkAt9",
  "key9": "gV5nxtYJBawwqfgkYZEqRoY6r3eZ2EsD9K7xYPuyc48cmiRKxZJ5udT1bRxDqUZtn4uxdU6dnQtvYF93h7aW4At",
  "key10": "449bv3XzRsTpobfFH4N3hi7tjtLoF4hHpvt2R19GzPRs2diPQnTgwrJL9pY3PMKDhee466fN2j7hKzfBru3q7DU6",
  "key11": "2G5nXKBjCkDej5XwYbtqm9F6zuGR7vgoZ4s39H5UjDKEh7eqvHCh33A7k1MiXpwWmcQ7g6KibJ1fHfbTVFUTQj5g",
  "key12": "3wdCHdJ28xKeNsJwfVuREagyT4SpN2UCEQQXjBnQyK8BCvcxRyJYDZGJ49bMyzyBfuMeHucM2CMqbJaLUNYbJXWa",
  "key13": "2E4osUc1fFPNbAWn7d2T4xeYYyUk9PTnCUu4waGr7N9yYSQudo55FpnCDLHBg2LdoYYomikrEg8cHgRLygxcgqZG",
  "key14": "35ALaHgU1rjDJQSL2F7HNNr84JwVQyRGBWTDzegAoLauDTJf2Uwnf4VZkDGs9rtbbksJSeCYzJbhCUZBhB4uxm3a",
  "key15": "4RQtZ1DM9Xk5fdQ8sAr42pWe3AW1Xj92Gr6Eba1abcuPpV9MurMRhRKss5NgDe5E1ZzSwqdykxR3WyVMLUVKjz7u",
  "key16": "4xipenNCHn6HbFkXTY5GeFZDKohKm8Dt4x3CTdD65xGjca1VYvS9eGSVptVe6jroUMp3GeAMGuWxQLnC6np7DpVp",
  "key17": "HsLV7XLaJRDgrPnwAMpBm6UQGXHhTVNPon31XEr4PDYCnH5kwtgdfxU7wrYN1ihXwVq3A7E9kcW3eHprpFCpJ8i",
  "key18": "2sZsnVu3sVqS2jCs8apDsNXt9oXTDaxhu2yJNphXvMj7f8DhEqEz8kKhE9XRBFAXj7h45EGEWyrvFB6tBki7nQMz",
  "key19": "4zk5C1PSHV5p2rJ6Xxa46UadN4d5rvvsFbnHMwt21Ws5wxGEdXW61yKhNt6Z6qgTpzR91j2PBgXfiBXiUZuVXdj8",
  "key20": "2Z6LN1PB258vDmZAohgBoFfm17bEX4bv5GKdqAdUvqHVf9zkrigZT5AkA4HPaqWEELEhfXhrRGCrFQvob4XNTYLM",
  "key21": "vyWiB9jhVv9hzitkxw2k6jmsvuqor1kDWCgQw7DssygKa9JqW2FH7EBN5wV69ReeGDPL1WZ3RwmdFM2Lsd37p8M",
  "key22": "3fdF1qFYj5nLeYrDW97HMDpYT8Jo4saU5MZ9Y6XFS8bHc3o4zrksPLMuVMpbm81kVd8ai3sBrJfA5Tbwam49E5t6",
  "key23": "2qBX17MBAkHXbQV9ooVLSzG3SAyBMqMcFgnoGpZLSMdb9o4ZcR7a4Cq2zavBvE1Q9mcYVp39qsGoNM11aSf3m4iZ",
  "key24": "5R63hPVTaPAtyC4CrG2kssYCuEm4sLTATxrrfuGjqPaAzgop8VGvn2LvPSpmAv876JFszGTrBp4iUK1SC6vnS7bP",
  "key25": "2PGxqRqAPwTdQvgr71EUdn1Z19fyRBtjmTHyAu3Q44aSEGUTzuSNRuEnEWJmA3VN99Nt4VwTQseSnkGUHaPscKtP",
  "key26": "4DCLmkTAYm7jyGZnv9guBSYFr8XypoRM8zEkKfXc4JzoHkjSv51p6FwKjpmvMcs2o3RU7ftRQKtpSvvcgS3r3K47",
  "key27": "5kp4JhnpB7cZFLsJtWtF7epogwegWXtaPo9kmCGPYb983QTwGgHLH5DYVfGajXsc3wUaEsVSgqvZBGauFYSxPG8j",
  "key28": "3FcpkVZxLA8gs9PnD9gKpB9ayz6R1hc5S9FPXTFykS4pjQJCUVLuho4xjxqRQxDNxp9ZPXhankUEhzUAUVxiWZjy",
  "key29": "5wkzDpui2XhEC72EyiyUn2gMhkD9omfjTH5K2viFiVwfnbDww2QB4vtqLeLmGgt1aCqbYR2G52CnRfVSSdYZJrvy",
  "key30": "5fWAc1iFDqWqB5Dn4rpHeomyCMAStD3XCovss7rt1kF8P9gTpQ3SA3Akajxj12adeBBAFfVKyA8262q2nrdXDekQ",
  "key31": "2kverz16veesANZRFzXo3sdcxfBF5sWdkN8U8hx9WaSKs2kY9PDuv7Soid7tKmLzMBrDaQYQTFgPvFY5VksbHph6",
  "key32": "28mkKLkDyGxih1zNsz24myCPnrMseiEgJQ9AgLWxgjiWrTcvv23CuM56aoDx7Q4pRuhVuyDu8spvG87RYRHb9FYE",
  "key33": "5m7sdfh73VF5u7vbuy5arhjn6jbazHQo4pQf1zWsVuZfPF1vmm5SBkR3YTZsGV9CaHsaQ1qDq3x1bjzoLNGoVVbC",
  "key34": "35vEqZ7LMDq5isUHJ2nYsCg4pqKmR6WjjZUanfyRYBgGHXxZBAgSVRQJNrEHmAybEbNDm8o4s4sBDmF9sSxHUP6X"
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
