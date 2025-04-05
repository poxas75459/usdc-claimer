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
    "39UF7dgjR7LBo7TdQTGLpCpbUaSTDNo5mqcmTnrkFB2oo5TFptL1JVTSLS5p3mdGK4mL42hTRvQK7Qr1G7yCUmCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Fck2hgYwX4LBauAPoLb1VcmR7RMZNmKkV8NJtdZTB2xFZ9E9RD9bcuC36fn6qg3idjrWYbBzHPJ8YxugM8Zu2y",
  "key1": "3yUhJkPkzhAfsxdNpYWXVEYixey9XwhMFcZMmv8NK8JfM17dNLye6HPV8i8yxSF6DAW3mK9nr81e9TnTZCa2uA37",
  "key2": "2TNcQnHvCPMLs9uk44wR5uyZ3X7TYgfrtPhXq7vEa8x2ZGm6eFgWBSkQNdw9RiBQ9o6dMMRNe9Gpi6Z9zaWqw6f",
  "key3": "44bWjE7MT6BU6auywAT7TDae9tBgY8mmc343V3Vv5DULWZQGibPpW2CZFKwcHTX2RAzXSTLcuL5UBC7ifQszbbgs",
  "key4": "Mcc748rvnZGXkhi7pNJTV36HFSyCosvsaQXum8No5HCKa6oYtSSYKorqwaYZBjfp2S1imxQ1mhqtEcVfuaXMJgw",
  "key5": "4pFjYgPfHN998i79U3gBueypuxr3HeCa3YFjfzCrWaogWuaysiKp4muhjL6voezJXTejUCKaB8uymmFquy9MF5Ry",
  "key6": "4UDb2XLzXgNL1inxzgxj2A6E5auuuDfv4MVUdcpBK5ZMnrJmtq5xVrCSBgQFbGKoMDAFaLyGovqrJKWznqkEBS3K",
  "key7": "5P8QxQyKFCgnpHhKxQ1aPQg5sqjQv36LghxiXukxLnyngeRcRoroiUdof8J87UYnSj74eFMoehhSjxr4TonMWrqQ",
  "key8": "a7dpAb9R5DbQ1E6ky5JSWPZrF8sjCsNq6zqyFhtMSv9iPQQdsY3dAZMYe67G1EbKP5koDMigDAd3j1rBQU9QA9K",
  "key9": "wNowTBa1kX2nKLy7e6mpyinJADLWLzsbRDq9gqmR79x4FWk19zRoPHa7eZ683r925ahvwaVomZHHAbLfn4VZSiZ",
  "key10": "5vMYv6pYpk6JiVjMFCpQCtDcmrcFi38iSZbgfJCyni3eocWRbrnpjEwFWnpW5U2A7jB5NkUUtqb61ptrDHtMKjjZ",
  "key11": "FZVqcghLhLWd97cF1sWe2VtDiQziv4wzr1Hv7R72gNhtCMR8znXiNr6QrC3Z86aJDTagKsiRmY9tG2M7icquXGb",
  "key12": "4SPZxM3EmWSf6GnKXHQqNUGBgTcLgRRQ1NxAX92yioTvAQWwtwGzxZJbMBG1eK91dwN5BFp2LHrtrRnvvirmt5Ap",
  "key13": "4EkP7MA8h1jjKSDb7Y3XZgRBvoYqABmesWCYbonqZpYhMkQHsRyYUJgh3MiPt7gGtVUmBvnk4z4jnMpNTWbQ9fBG",
  "key14": "2dt7NVCN8ThpFK1eXZTtFpF8zCDUphDDdGNCoswJS6ECpV9WZXPWVeF7KabkE91utx3s49SSSyVFfUdi9XuwavgK",
  "key15": "5qsdWMqWVP7497oS9g1XPLaCLNHBaqGLtWptPDZmam1czt88gujC6GE3YEm42PBau1qHP77QAyWWSAxDDmth42ZZ",
  "key16": "63e2DzoH6xFv9vr4EisoCiLRqa9bbFAa64pWU5UXoyg6pgDtvpU5rBBjeFsxza4N6PHHi1gNFG9ht6eKRPSnZAxp",
  "key17": "2XNciekUA3r1wW7XYEcwiEBCm7y3ARu9BynTYpUZrcbobCh9sD3ZZDsDvxBXd6Chuty6PbgNVoL6nTYLNGbpvk6d",
  "key18": "8XmVZrAd23u1uU8tJiXEC7xHPosFpJ1mGP1pZNsum414ZGUnbKEF4NW1RU3qkgoNcS3wdTNoUcXkfCLDPDEFYtE",
  "key19": "43nqDzG2YU1KyowxGrMJNwtZrHKDLwSmFKxcNRbySsdZyEJ4hrNcx8vMBCcsMhPepjtNgnkxVqaYMw53JmNt215x",
  "key20": "2WhZNVBsfCwmU7o3Kbf2qaSoS8zY4LUKADFn3DQh9aDbeEaDCoDJhUbyPMbHyPjXu64zjFUuNvgVbWU2Vkhs4fja",
  "key21": "5WRRg5wkUHej1Kx1qT8vjoFNXNVuipFTPTm3fRbU6F5ewwPXqmvPpFPDv4F68tXv99HspCmuEUYQ79bnS3RDh4wX",
  "key22": "5NQ633Mot8Pa2t89tDs4uBdQZHFQXiLaiiehXMVRi2wiEv1mLjqWrSpwj86zdsH8pStVryvcxcXigecpoT7JEw1x",
  "key23": "WBVi3J3BNXtc2CPsMELZnpD16S71gnRMruwhbCEWfLuxb7AFPiBiAHGudyNFv9hE2tvXxePL4Pd6zeBK13LLu6X",
  "key24": "4twGuWNaUj5TbD57uQW3PLzynvW4q49fHyxKxRSEJWuVrTMBQ3EcBYv5KMRMhVgJhASY9EgC5e1cvBCER6PaUe7E",
  "key25": "2DkeeV1WJJpRmvKEnbJNN1Xaz2xppTiVzXkiNfCLFTbAji1r9vxukmT65cn6bbiZc9Z8SaJRrzUtWCHheWupo6kq",
  "key26": "5p5m3gec97hLPzLv3584Zr3ENucCdja9BZBqxEcRY321vSbUYH9LwP5GevuVuZ34GfFCdnQotDXwKcLDJDNbDeFV",
  "key27": "5G7q7JojKVAiyLR7CQ8YGhy2JXHwAHfYXVqgYRCfk83uP39VhGasg21eT6tEQXLkPhefXP4rCDEE1TP8jEtmnv3H",
  "key28": "4s6JbEvWdPodx7Dg7xaxqm52bkmmgD4L9koiZURCCo1VZRasmxh6PqYiaEAb7oXySodnCsc85BGP7ifRHM56woQw",
  "key29": "oLPGyZJJF4tTBiBorXWKSYqb2RFwFxEiJmHxmNityFif7N9ECVQxN1LjMWzdZPa57exrNW2ZzdP2gQ1iEaFtsgY",
  "key30": "2GDcDzyruNjrecwDh5c3A2cN9g75re5LqGLFrpywrvzP5Wr8XMGaWpHjetpppQYvhAUSehiNNFAsDHhtvcJqm7jv",
  "key31": "ZAd1vggpth9TTXdfG5oFKZFrh3GNT2TDCH48K6hgRaYURWZth78KDrysVKHBmcHAViPqKEj1Q3cQKf3ZFbdCFyb",
  "key32": "UbBbgFkPke6Dde4FE4td6Bte1UdyuQYgRYtchnzAzdCxTcFE8zEqroJEHRa68GyWkuBoPvKigXggjpgnt2yEmv4",
  "key33": "1ArUMeMcjirnHRbnj696PxSMo5ramThSrWZz1dvfg1KTiijpWeQjzdoxDkYufmjg2X2gNqu1gWpCNccue9egwdM",
  "key34": "4hNocM24VqLimCfKnHZiYhQFaLQ3fap6d2kGjKnBM7jFuUsvGNdDfzwcmR697ntbqy3eHUmKt2zxs6snctNDpfA9",
  "key35": "5LAYLwbKQUGqUNBdKiB76PFZzuWKgfyeLooXQR8SfWSVw6xgrEgFHHWYenY8f9VNAZZ2dJRBNh3JoNxg7k8CmrDb",
  "key36": "359iXn1PCeWCdKKLSFJQ7LGEL19p1ea9JjoygbbrATVcDi54UEFzfdJ6CiLnT22RvPJakZitBsC72McgkBgTTH6Q",
  "key37": "2FfskqXZG3Uk1LQm1ruv6kKBQbBwuUJgPRegksAprLx8rVvbZzsndxAuSv8jbMqtPbkHak2jYUzFgGaspXmFRUts",
  "key38": "2KkDEgykzyF9jECGbaKUfsjBdVAnYhJyGpQDqLXJ293qiRpd3wjoBpD1jJ1K1PAmWFspNPeoBYLMpBxXomPPJWU3",
  "key39": "nJ9L8MtCKf8xzo9kM5ouyQBKttCXq412myk4rCqHYqANWfDm6qSNRppf1yR4KTA9VpF4U47knd2iobbJdWqwMRH",
  "key40": "4qzosfDixtZ8pJfniwtbRXTiYZr8scgZnado8LaAyvA4L8mjPJzzaa4xp1RiAtLk9CEYoF4jWuCeb5W3u4FymfZL",
  "key41": "4dBVgER7PRVkP8CrGjf8H8MiEdwV6SCp2cLsY2nf2K1VttwTWqvxGWvQoGtyqz1vTsjC3QTWoiCBtRpBpMkceovU",
  "key42": "5ckJYMPwnpZ1vRoYZaMsu3smBFDiiJT9JP1ZZVrRarZhHyssej1EzmnG2vZyJTAJsTChCaqaMf69f9cbkK5RZDoG",
  "key43": "5TqVkfPmRVhRCfLFJoaG8YJWSuNmwoHkcu4VeBRU8fCVNokXAH49QxPGLTp92jP2xUCemAzKhTNohq1JWr35V6GX"
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
