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
    "2tR12JghBZbLtqC72XauSwBfJvbXTufC8tbWeMFbAKM5HSoud9tjfCPvC64ktN5j9c8WasEKu9WFgbZgYNbrQpJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22xWoAufTBL529yoRA1WK3qyMmeEFKLYZpC3Bag6iwXMvUbCcBR15w4vvUZ66XyuBbj9RA8bm9eGT6aAD3RNoUY8",
  "key1": "5ZU5Pt321r4EeYMyXMUp4NETFpKvxLpmMSprDYgX5vCSf9GTfj1SU56aiqTfkp2q9cx4AdSJq7moXQgnEpxxuuen",
  "key2": "3qGZwJEw6UGSAegRuVTk5Ws4FhR6inDGYqVYw6VFcD2g51ABUESBGK15sK6osZgBWKBSAoJNTiEsb8baSfZbMz7g",
  "key3": "3pDekaxcBX79rp8c2RRG2BcupM1utU26mB2FuU2hxMNrJYe5rpwx3MCRRTXLMRags1EZpRXToyngDVju2knXhn9Q",
  "key4": "yhxnXzutqTjqYE5E2yFynQjto5cWRnsv6SBsdRPRj6JXjVZpKCjW6w8k4BuuKLyANoPqcjj7Knb7zW9w6jEqDGi",
  "key5": "6ugK617cQm64JwrKvDs3G13REWJDPxdALDrs1j1DvsP2v5QGmXQUaxbiBLM92yhuwyTvbL5sah7JyEr9nHagc46",
  "key6": "uHLbMtjCRUJm93kYjZpkg5yPQQKKPFsuU56hhkDpveS8M3vwuzmaykFAR5NkqpW1VucTS3wMs4pFmKPtGAQRr75",
  "key7": "4kDQQpyqkwxGMUQFqFRfKePDBf8jT63dDyt3Sg6iU2bqRX95jWiwRskCScM7uZRZjNb4PssN49KZ4Y8tuLZDVVnh",
  "key8": "4h5iuwH4NYoetvhAiSA5tnNDJ2bHZ861VjeJhuXUoo1nXu18y4qMdLkdzc1NviLEjwHVLeLAh8ektzP8PXrSxSJc",
  "key9": "6TR5fE4if2WyvjS4ReMsmXRd3RsSzJiYoDqZdD49AAP8cbyGSAMnShgr5u2PnRBCT3MEfAdASTzo19iRKaqh7QP",
  "key10": "28b6Yph9D7AgivgQC3QRa9cte3fTytxuJLTTtqK8V4rACSC8e6N2mkoS6XByk3zEQZQpw8T3bDELmWmw7JggcEyw",
  "key11": "5QWmX76ByXPWTrf7cSfdyNfmRGKobKfR17PE2UxfxqbDFogiCwjEsgMRLhfb9A4eEJW2aaKppfvE9xVTgfRZyE2S",
  "key12": "5FXeYadNmwsadEXEqf7KEidqbWqETntnXsVSLHdrZtV1zzdEQ7YYJ6e1yqXCWhYWcwAc9UAxCh6Zfe42qzWTPeiR",
  "key13": "4iZQ8LpJDKDX4JtxFTrFXZZUZUSv6gmEzsGW6BRJKvPurvRm22idYhqZSuajTSyzqwEHgFsq8skBz8PnWo2vPxsw",
  "key14": "5DRWWKTnTwSz4mHkh1MacCfpmosXMaVveuw3wEnkS5QSMtkySjnavFTuyJgdaHB1ojFkLVwBB4kF4Qx1KDNZJgKm",
  "key15": "57VSfR5GbiCWFXDd2z2Ah9xjkR6zNEfiKVViUZKMuPEtUJk55yBh3yq6poSxYzNFuNEBASaYNDSgWYGgw4kg9kST",
  "key16": "2iYY9RgaVmB8PdMwpM4VMKi753rmsETMUgxygrXFS2c7CghN3xCWmqLCa89tVmer1S31MJRT4SoytcSnpohsueFW",
  "key17": "WxWwnhJatBWK8J3gtSNmbRKXREV4yxVx6B2xBtYNgf3eAKGMp75jA3GXtmrHB9mnKL2PgExQy2k5SH1oxKzfW2o",
  "key18": "5E3EqM9zX2Ftuxzz7GBKHspXhWwBtfGufUCZricEaki75gij3rg7NL48Pz3gujnhVVr8JKkDgfzXmnC13vqFSitj",
  "key19": "uYzdwYWmrGd9nNU9BdaP1BKrhb2YXWdbt8YHMQfXM1zwDyLApGNyHDLY7hhEKas9qUaEE3zbb28RAAQEGcNyrA2",
  "key20": "49XA1V7N4Q1E8LP8TiewJiRZXQ9F2oLiMU1wJvHSM58AHJpyzvu8nSCkXhXFtk4amJxLbHoCcUp24uz5Zmb9iFvh",
  "key21": "2N8rUPdCehhRiGA4pFUpHX3YC6ZFWokk5YLGPsVqgT76Z18k55mzV5HAe88eeik9ZK29pG25zgAnyNWXNr3CYbGX",
  "key22": "4cByXv3M76BitbNhCK3iUE3bJXLBLPvSZEmy1dedayapehcffqPdy9rKhUDg6ppkRvPjg64UcsPZwvDmkBYsM76F",
  "key23": "4iLV3Q64Mpr8oQNdDisYPq8LiPSKw61v5263Y8rbgbZKnjHeqFw4wo4HddFuosukKKTonWfeowfX628kzMvE3DrW",
  "key24": "4h8a4cf3TUTEWbuusyRGTQMjk1ZPyds7BmQ2poZEZYZmrxEFG7SM9frN5dUVGJ4KFYJqB5MoewCVZX6oE3FSjZwh",
  "key25": "5QfSh9EXyjx68eVBUr3Qg2HsDSVBWLZaRDmqxY34PuirBeLSm7LJiER5mgR1NnoXLenmXyf8qde72BvEg7uRgknD",
  "key26": "4xYRiUG9j6uqCwu7rJKtJ1ectzPKtemzYUQGxkTSUxAUaFXwNQiP9UQM3wUFaRSsi4jaMi31soRKUJkd9KTqNW2e",
  "key27": "3aeSTHiU8xQCEirtLWaQPuCEPFdcqcZz8eU29TEvsTMd9AnuxpU3c5fAj7cNSTpNbPx7Da9Sff9V9z8QxvWpG9zM",
  "key28": "3qMqyDEjNYPd9cyaR7f1rQkDtySUvBhLHAb6E95CTsJjbfedb5bnpsZGBPsxQXbQtf7jebvWP9TEK4sZJTTUnD9c",
  "key29": "4M66LTrJD8MBFs9hBVQBUPUbHX74hbbASsjsHFTN14RR1HhgGL4S9v8Y1BngZGUUZjTakpG7g98kE7ok5amtJtF5",
  "key30": "67UTMDwKqyQb51ZJ5Faud53cPb5ioTKfYj7ETKm3aBP7vBKFueYD4LqTnVkqospJv5JHDEFM7fCQ17Vsto6kR8JD",
  "key31": "4bdoXQkFeyumNxoPG8EDKuUvE11rttGhHuzrkRoHzdkDrV5p3fKWb9WBc7rRL4ZNcMAtEx4g3joywZGtXvFFPver",
  "key32": "4YHRmACs8yBkaHJqBZe9STqZyfEGof29zG8fp6tQvUhXWjTzXjXMGsBi7qNvrmujBARZe47DHFDbAfXBH36gEugY",
  "key33": "4y1cKC4F2nbsMp9qBbQy7SNSR8Cw9EK8iu4p4fM7Am1a8as6AWWNMkY7JEUPciAD44qTYv9De6hJqMNfBBLYiDPf"
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
