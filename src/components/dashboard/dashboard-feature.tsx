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
    "3pDF7kkzAhCLXnq3Xosf1rq1gSzHNtdVtxGiqZEiJo1YSi9xKWchEr47SSe6GAb3BwJCLCUCPRWwAN3MJo8pMaqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SJrBgFaPxHfm2GkKauPYc9Weo2sHzcJ37PmU3BuAUQan7XwxFYqgdgg8Rn8KteuzCbynehzSonpTNUEEYBDtH3F",
  "key1": "2UkWQH92rVFeGgjQ3XVzh7omHD3KqpzNVrppBrTxJm6D9LZqxVTrzuneCUHsReCvUhc4VwQJQ1p2cksDGzJcXpGt",
  "key2": "3QZkCa84Z8kVB1bWsAFG9PFGwUeTPLgKpaXUMCDLaRGAu9PV1U3MwXp6obXRma5fzbf8J6ywjMywqcCtHP4XUs2A",
  "key3": "2TfEyUjUtRM4KoQ2gNW1RMZFeBhTbBVHUW4kUdVdtxvX1W4JHon4UYNLa6B4uD1khEAhMJCN6AFSWZryYdTHbUUU",
  "key4": "4PieGaY5uenxF4TouUJoN4QxG4t2pGwYhjR9SAE6kKX8jvwTWqJjN4ah5oYgLZNs6YBbZSUyFK5oWfgF7fFif887",
  "key5": "5Yy8pp4cp1NuhhytiX87vRpGwPponPS9kKZf5jdhmp2efX3cQvrSVUxdgU2f5f2bJgfTjxN72k9NWYGysgVcm2Uo",
  "key6": "3XKjZbgFSNDZhpQzhUA4rTcmd9iHgSA1imNhWRBVxwJDkSMnMUsbdWyJqGceXnZmCLwJZYHn1EQFQtu93WPZHqxw",
  "key7": "4y9m6wckaFZ9aH752WneqdZb3f2jrQmg61qB4fezeqgRvVAwKLjuSyUtTRZctkstVboaGcqWUDKbz7tUa2T3Jn99",
  "key8": "YJMZ2HPtUbasV6NU9v1knc3wSNSpAXnJt3cZS967415oefLteuRh2xNjhSFdThGGKcSsVMg4Lk9NWRBwJUzWCnr",
  "key9": "3TNag7vfVEGhJnwZzp6FAeiQJTSMyTVuV4Uv7G5iB8CC7Wv1P1midCsvQzMShXuCT6L4FdqUZc3vHLA3ab8RffSh",
  "key10": "32QP4BtWzDabMxbooY1bnRED6dxnyhtbESut8RewHkdNEJfooMNKEfYBRV8ENZCmaYgdaiVZCzHb75tPinog7g8p",
  "key11": "E1udzTLRk9DQ3HRhqtnKCCnSc6ubUmYjZ4wzoNMnrKqnADjc13mFhDmneMn8zUSaZZpX8Fuh9M3jUpgukKm8QSf",
  "key12": "4eyhrkyPrbGV4GrqMq2hrVGmmWbMUHcmCHWyPQP7BTrxabGZDx3zjtNwJonEhUkRo7apseTaUJKYS7uGoZQm9DyP",
  "key13": "5zvUbCGzCfmN5im6rwxz7qvdd6JV87JHCHLtd47MZzPdxLDB2trS5eVE8o6iS2dQmSp8pLSCvq5i5N6tRfrow4Kc",
  "key14": "35ALrqnwksVa2mxhsNwCV1wPn87h4L5UooWTkoT1NhDkb6aDFhzz7SQYtxDFyiJdXASe2SM8mv6NfkNMW9DY6CMA",
  "key15": "5FZDss3djq9RjFLoBV3XAyizLLWyw5MyHpxUB5oVseo7wY7aK7gASJH3MAXZTdHbbWusuadMRxrxXDwRwY2HuMiS",
  "key16": "3rcK3adR2sFtvChCZEspcXshrd2gBCVs6q7MSi1KZeRsAe2KiBxR3Yvh6Ru69xn3ip4pswo2idb1MAGdfgte8CG5",
  "key17": "3QuRMod1X6fR5kGzXDf3hacuBMqYmj8ewiRywpAPgG4YbU4w172bPoxaPxJtrSRPk9AV1xATamiKuK34bPckKFGN",
  "key18": "61eU7AuAG72citsmoHj74L8dfKrGSrDmjTtbU6kbXy6ykRqTCvHhR7tePphkEaFne1x2ssinU41u8qMzF8Y7o1xE",
  "key19": "122zKGr9zU2ooPHBxbcbJKuF8cQUDxqVgLA2P1CK5aaw8VL1e27LxStMPwYgn1e4KzYMVPubNbTYxLoYSuPid6M",
  "key20": "5L9vDMGMWih9e2qmpNAxmjfdDRaX2mZTmxMPo6b4W8x31hLUm8WAinGF81rXyW9fifpNQ61YU4phMs9g1asKqABA",
  "key21": "4G963wso4C8RN8QgkWxZ22TomS4tNAW2XdF1RXKjraqkQZpoDsvay3YvY9S6xkd15F6GqtQGwPrLBSKnnarJrX1G",
  "key22": "AvBfrEodE8AyLFniNu5aGExWt5mZ8tHbh8bobsLFvjPTt9VtosEMKwdw9mNtVVCjqD83PXe47Ffcroohrjs7HWB",
  "key23": "3jv8Gz9yrK6ffK9KhMHXkecH8Jb7DGGHC2nvzp9MmvSFNsiww3RDhb6tUT1GoBSTiMbfZfWRaum62mu8bs1BDrh8",
  "key24": "3o7uGBjsTcAyjrCNwtpqZhXEYvAJEwRchVFr7jo2yd98JCRWfpB1MvUVG3sppTfEXwGDJAaJ7Et5rdf38jGDdWCm",
  "key25": "5ChFzqyFZJc2RuzxuRbiH8DppH2axQZprCet5EXTS4UHtVqbnyP6VGwwgDSTjm8qrnJYMT1hsFFeSDmvBWf6JzLq",
  "key26": "acVB65n3Yi52ckbdAvpPFozVnpjmwjMgPn7bSAa64rg6AeVEqWNzmvLL4KmJUmWtusZJNzwAsySGv69dH8DDKeg",
  "key27": "2dKCSc5yRevfXMnDngVMKi1oLNokv2wwNfHzgjbKersTUBP1JpNj5CFZiwv6WhUWom41fmMZp3sAnCWtCDpXVgJ8",
  "key28": "3VBocr7TFWnVhr382sc8EH8stHVPt9wtuWSJo8W41M2tVUbPcaZWXfqPCdxpz1hdGnWPjJBknXkucbMPuuWdaAZ2",
  "key29": "5AxCdKpEvpjAq94PjqDDocJ81nA3D4VFkqEGHJcWCmYC6ebQoWQgG46kDVtaWSHrBQsKxeAsSM6PTiNsGd7k6RLf",
  "key30": "qP1MDU6yY3Jym5gJpq9QYB2xu1EQDgtoxhfhJTqMFaw7SgtoxrzhAjMbRm89v2J4KW87EgJzQSCXxyYYfGUFcri",
  "key31": "QAj9arVsm5GRrTUThMxd1B7k2rX7wGHP2YuVyZnKSDK1jyLrsv3838EHwLp3MBMEufsB1mmCsovJvG2MW7TCPLv",
  "key32": "49asboxUx9vDAn5GP6DY7TKkvbSQMR7rptfkeVxedzZMT3zT24Jo1CVLgUcBHhoXCz8ceop346qYJVwjRASNcjs6",
  "key33": "SyL6qkwoHcyp28ZHrfN2NETZAyob2B3qHDVDk6vYQAgm3JjzUCkXLmw2dqdHpStG2V2FAxy8RhCGV29CNMnpwKz",
  "key34": "4EP8rSwRisqoc9zyebFConhb75DYD5zpPyDWkR2nteG8zmYMERLhU69ND9vMPza1AFrVDQFDNR4baTRhcWaAsTQL",
  "key35": "5Eg7EzjpVUK5DQcTGBHg3G8R2njRHcvuEWSDuCRBVZGTfwuQD5wphMkR9RoBf4Nq8KV3pbJngfFt5XBR3oRezfp7",
  "key36": "3QcYyDWrDcWRsSUS7BskEGYSweBxVGXbGedGrGAxbRnRs3atPTSLJFtQVn5EqXUeoQ9d3XBo1DJ5u84Ugsu7VGoE",
  "key37": "2bjeGRok2Mrju63oMeYkrvZd3uY9z38kMEgSsDQ2zHZZiQA6ucgESynrkVHmn84k4hZB8SEwzBxUxyAtJdWKenvf",
  "key38": "2gfit345X3s4ftYdYocSR3xCFts1U3QW4M73tJyEEzQjhXhLsYSuWnPEVYazNZxs2QmxdsUcaKxTZx41goWmkvCL",
  "key39": "75NyoMevuMbkc9xjwZz2HHbC5bKCWeHUHna8y3VEokHasNv54fQki9ZADAWR3fbNrTTFCv9P5P3pQAw44YyNfnp",
  "key40": "54B832oKXwhvVRPg12aasoDsBuEFtd6y1AXJMwe3HuWxwWfEjkSfheapktkx9V2wsDJ9u28TjsAvKobamHhJvEQV",
  "key41": "5rNDWwBSzfY4shYQC9natyj48qWPhnTi4YMWw3gHT2MBQ91rao5BMHD9q6knnw3U1MKk24Q3ZTiXgNPNjhgNQR8t",
  "key42": "FVDiv4VAjL6rE6wTwkxFzN7bY8dkRJXTAMpN9TMUenX5WGFoFkDdeAFHJzNpbzyP2duhLaWTKUwzu8Pk4mRzUKE",
  "key43": "3Lam2VDw6cDqXsAZQXUrzG1kd1jG1QSSbGVoPTy7JK7EhBJHJfWhoDbbdxz7WNT4o8i9WqF2K3BGLSLM1YBLyS1z",
  "key44": "4xupgQdGn7Q8Einh3kMKj2EgvG1s2tnC9A2PhnBFmEZvtSwvqffAjtkR2WNtmTmek6eyr1WBhxGhs5VrVfYoh6LJ",
  "key45": "4wETTYqnpkzJXLyBydKc1bf4vms81odhvL4Anzx8AEF7BbAGeQCuExhDA6uwRYDDYoa6tNojwCN9V3PgNmWcsaas",
  "key46": "287CMjN8yRwi1RLK2x4SPxanzQN9m7W4sLnDo39Zn628eQPbNjFKAjSZ9jH1Zh3ktsVB7VsTxgsYqa5XDviAf2cX"
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
