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
    "JmMmsY2yyipMzkKHA2sdxAujWPrTaNyvwEcWDdyUAP9yY3GwoEKtBjtVoavL4NmC7iZYMeUmwf6Ti5Du8b4Nzuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bmATQe6xpWnNuLrqMfa7aqCmWbDxzUnDYDEZ5xd6PxQgZUCDsPk5wDtnU9HRHd8ybSiC4Qef4WUbHWZvQ1H5zK1",
  "key1": "4SfJDM94Njxpd73w8ECDdj8kM4JQgEktDD4ESGTWmeaRMYGqL3dFGXJi1xo9yNebVGQoi9kRnpaDKYyP1iDzWKuD",
  "key2": "2fs2r1YarcB8med4b2cazh3uEL2ASEwvQfYd4yie49dZ27r91XCvVtEuL1QfFUZNvZkz23TyhfAsq9sjMKgsv455",
  "key3": "25W8YRprHEZGnjTb25Ctmb1euRHqcyyNAEVxrcowHjPu35iGT8Rd5xAy6Cx8ZncVpJu7EuMCAFjKYyCRNjYocpSb",
  "key4": "3jYDEtM9Kb2mJ3RDQK2ghMXpeuDsBxz1VZEmJK9xYMKr2DPKEXsBJzQavP52UmJ4oDr5vzBkdukUkCzeJXZhHovi",
  "key5": "tnLpc26ZpGw8sKm2gPgu2pKEGfNMKPhYZQdp1iEJhmGQBzeXjhstwrgjbgjfCGwwJS57zEgCYsHSiyaym6h1Nh1",
  "key6": "5o1bVeQJCnjXux14D3pt7U1mFavcnszjcHqqM192EtN3VebJ1scYxg1yj6wzYExvJQi1SBYrDP3cMntkUkRGzmsU",
  "key7": "58i6Li6oJMDZGmDi44ed2rAMRP2AxJg1P8cio4Go9h9Wy2fBbRyoziYN3CDNUNb66m4aMJEb7Jzu71wN7r9aLgoP",
  "key8": "3KSdTLFKmSHmdNshhjag65d2FDLCadtxnWeYLGwsxJSzWtrLYEP3yv7VzLUCV4RiL3ktUSci6UXGftyHv5NvHxFv",
  "key9": "2Vm7c5BHjC9mxxNA1j2jp33jri1sHjpLsJVsxSKKp5qkkcffwSjqhHG6ZfdL2ELKZuWuGB9rQbPrNd1dyj911ZsZ",
  "key10": "2DsAvHE8MjKC3RZKcgfo4sYc391LNepNuonRt8JoQSCCgFPuFvgiinPk2QGjXp7d1cLDTkqGmYvoM4EyUfuJZ3uH",
  "key11": "5BvQ5n1643tGYJ4KeGh3FxzGF7V6UQyw4FCLtp8BTTUDgVhBKS4LaJvzeRpHyF2t9gd6HXpPcaQVVrPqzzTexrSo",
  "key12": "4Ejb9ie24TZ3METsyf1C98uN3v37LXXM3ogPApPtDejEmzb59jQ5scY75fyA1RCWCDuXrhha7oo8MG5eQPhRHtYR",
  "key13": "5p7RxEZojUWrsZNFFD49q5dwat6DEM1P3aex4E4pjw6Ye1Ybs92wtiMy9VNGkvhfnei3Dr2Qn5hv2MDgQj1ZgXwa",
  "key14": "46jVR5maE9YCkwTuFB6rtUkqs93b6wnsydBhQMvs3RFdUdNGFBE5peC69CRxSQkgGqEDM1qaimRQQNE8FfAcBCc",
  "key15": "55pmp7uW1sQAxzGquC7dE2AYEsSRP7b6Pfc9ySNumtCgwG9CjDs3SHpG4EpvRVDttaxYnjekdnftspqNnqtC8csy",
  "key16": "2u5sQUuoP2rNDAeMz2MykL329vDFiGWPobSnrSaoebrKQumVj9DAEmXmfnpKy2VeMWjK64C9NwuoyuoKXFduQVXm",
  "key17": "639icMsTBY2JdCnQJsvA62sL1i6sNGpu2ZF7bUFECFCud4bAts3UQCExkRDhNpPnDyeHBtGBJ4c6MkBSCD3JpMJC",
  "key18": "55o2Am4AjGX1eD1gAP54KYvAvpP9jZ59oQnhNXGAZTbYJUm7jsR2SVrECCBqSbRXQ3dr59q1Ym8VhGyqTseKC6CC",
  "key19": "3j55kwRoQqKgxe57GMYA9vAVkEJAvEHrPcheKiFeZLa2jqcs9h7ct4jHe36buVBeeLd4YZwjfCtvpaCEFSzQuw3n",
  "key20": "zMCq3yeeeMtnWz4e885xWui6WWmRuPbZ6LwNkDR8L9fzHf1qDgCGYLqJXS9A4WGxWNSFvUGbZeTshG4NDFcMU5i",
  "key21": "rLae4toRpV9YFyRZjGQv4tEKq3yi19r23MZHpG4z9dc2nfgaXc1GdURzXhtdcTtbKyL9GqyKrkWfDpr4hfytEtw",
  "key22": "56xRo36yWCSuLQ6hr2RYBsmneayNaW369aYRdwPcrh8NzpSPGh88kW8EcxUKsJ4KYkTiB1auerxWAh51xG1HLnnY",
  "key23": "4YMPBaYmyg9gmZEbKZ83CecVpieJd8Z6aEkEo3tFKwiaNhDinNjycrTT4JLRcSnNyFGs39BUwYg7hSu2DGg6g7As",
  "key24": "PowqPvCWic7Rd6LBbrNkJGY465e4A5jeeowfFm4sVXn1e1VVhgLmCVmcAC3udwc2keNwehXkJSHhYkZdsZkKcTV",
  "key25": "5tAW9CGEgX2xCz5D15mkAzTTjPLoQFWyXWgjGUUpideM9Hp47codxncrMiP2RUBxnNBCEsuJJuzDmfXL9matYHSj",
  "key26": "3mjBRMuk9m7FWMRSyUw8KrpxR1JK6oqMwTyTQgsnxZhAu2M6WQbZLiCnckaWGQjJUw3Uq6wyxbMe4oYVLyBbsrTD",
  "key27": "35FWMQi7xbyFDEZ38zLv6HbhtT5kaEfNeJT59S9Ffy6zTSM5kvKrhyJQeffLUUNckccEsEAS1aAzVfzBVUJtna3G",
  "key28": "3zWuuJhqwnV1oUFzVLVeHES8BA8XH6ZoKWfxJUNkAXvoSCHBu4hgRfb4hazW8HRGNPVxjV3YAEJt38amAh4GY43V",
  "key29": "26NApo6BZ3o76BRZtAJF42vRUT5XCkefGuXprcE9sQk51HsBzLcwM2pFboCfrwwNCi9ZMFckvMuSSVym12t6FA6j",
  "key30": "3wzkRxFk6UcnsLf54TDMbA8BdsWBJTSMwpFJV8BaT7M1GR2LHsf6DsUiPGZvrBqydAhC49mP17PNSjAYtYkWJSF9",
  "key31": "2PSSJFVfzkrH9fvqj9xsFN3B4xk11WyQE9u1JrqJZJKtxTEViFvsJT4mntjgzZYK5uc4fYH3MRWT1LkAD46cfsHD",
  "key32": "61d6hfLMNMpU3ScL7xTNuH8pxSxuiPZJ4smZzrfxsp38cecNRWRFdFfVV6YanfoGD74fKiS6p2pAoMbLRiw2kVva",
  "key33": "66LPw9kpEfYho4gKyYTXW7yszefs38cXkMzFPVJnSeJRDVmDitgv3tj8AsGVYnkL9xAGLPmPywPuSmApRYj9LYD3",
  "key34": "23h2ynJ8vr4ZyUys6C84fDdzqAWjFJ7dA3zRcAR6w2uPGQLZMosBTJaVt2EquiPMsW5C1E7eRxk3W5cKszYUUznX",
  "key35": "33g44NhEaWaaWQJmKvsBNaJXmTch7XdjZWPm1jdLmpSmtCBSNy14s8PrFCefGgGSvQhyzgPfQyVkbe7SCjDEYZBY"
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
