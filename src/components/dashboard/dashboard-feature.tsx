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
    "aEYLGjJYFHMNyWU8o9ySDHWpWevqZnV9bKjjvexPsU681HibkkBHbyJs52HNNNAYwJhp9Q2wdu7eH8rbCYP3Vnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34MEJPWDhKTRZyZqbmKWYtwAgPjcHxcVWdkLXgG1Gt8S2rW6iusode7gVfz7KcGLcGuEwMYKqdx9vBnj6RS2bzBN",
  "key1": "nuwswLYSp29oyFqMb77rib6HwVn1WoN7gKsx8tQYpfXKScL9DPCgyXvATaCkSgKggiH3fLqCfzstjDKKJTPiFbW",
  "key2": "2McE43HzniPzUJWWxhfJBFrHWNcYas8M7DTznuQUi3nKR9tS9QUnRmzX2TVwKDd4sGLNT1eb5XtY4KeaSesGhq2n",
  "key3": "2YFWNh6Ci6ZxP3aS3KF3o5GBcmYz5VVot8VWKBto5SZtmaxH41ANwQKDWBModYbvZpcBDyZyeDjeH6CsTysBiua",
  "key4": "5Tav3VzvKUHpDDGNMxBKK8kCfGprrennQiHL1m8gm1d8gjvs5sh3ARyoGYCPVjKRTRFMmJwguCNF7WK13hofR9Tx",
  "key5": "oHG97jd7KKnKx8TvTQHUuBw83QkZMKL8HMRZygF796WgRhtSJkeTUSToN53uhqns5TiYskT4DEWzBWz3xnvY3Gw",
  "key6": "3L8LnT1cTTzoCr5s2vpW4vDeRYiJbYUt4nYkepLztpT1KLx6J1AWkZF64VHkSmHNRxsKfhnASM4RSGrxU4MQEQoR",
  "key7": "4EBj81ach8pF3HwNhxPVFny71SoQDr4aTxHV2QrDCnMFuTp6sLXqu35hgjcdfX6VTh7iLkmgLpu19QT8kry4iCPg",
  "key8": "7UrwdXYVnPEWjzzWXLwtZdv79KrJsxamyXYgzhEaxtQpVc3a4oTG2X9KicFtGN8iWMcMuw9NaGhS7VC7xSd25tH",
  "key9": "61GSvFQ1hDo2qhdgf7UeMPA2wSgo2puisLn5Ugif5YpMxNm2LpxiBnGWdMScEd8B5GhGoBWWdY4GeewWEkzywPuS",
  "key10": "5Fu2bcExF8gzrTNikF5PBcWvQ1jeanCqx9ou7AxC326J3VwKM4gHFnF9fL47eJGgjBNYXtsNCbohnwGAg8CKgy6Y",
  "key11": "VRN27DCFzhPRt6gTqz5jEDJLJqkjKraQHTyC2VpPf2D8qUHvcwBzCUKWbaEhniB581AFgS6S3R8iPxWvEx2vB58",
  "key12": "4oXipvgNsipXCPT9kkarYQg29LYvvUoxS2wnKwTStZaimVUkhTzbXam61UMZ91ZK2sqMBazC1JbTAGULzhEeNF1V",
  "key13": "SbKsAZLfTBbVfowHKvRZLBfPKyKEHJ5VpoJP6euRrLiCMCQypMuwpKUsPq7LVfFHT9HygCbEUcoRA1fQMUPQ4tf",
  "key14": "3qNArw67tz55RPZ28hkScKmvFuNUJvFriYWMUS6n1FRW2Ts1yANnhNxaWhdZpNkxZGB7K3qb1XixtAw8XrXSy5No",
  "key15": "4VWtAi84MP3d3eUf2zttiXbsE9mbcBMQQYdzr32i2w1Vav3TPcHoJ99HHYHNHGFemwBFShbzto25B6MewZqVrch3",
  "key16": "5FuHmekMqTY2XSH3DbJFKmEYWALdUGhkYFk1sLyVB3dPPEEvwmd9UabrMFMZw1mgPeeof1j4JunoMBNsVi4oBxCr",
  "key17": "3wF7gqBKYpGY7ECALUa4SfRPMtT8rAD5jsdMR6kiCsXYViBeEgSGXeB3LvxeB1eSbc5KV5UuX1AWeVPfLaAq97bU",
  "key18": "3kmwcHBgp5cMJx1MNWMS2cjdna1Gnw4UdQ5JDb8tJAFueUdMoTsm6PnKuKGigZRKPDuF1Rod8dCnjDGqCyK1vGk4",
  "key19": "2g6LFgPinLny1oPQAg2XYQVrHGazHFN5Y5kofMpvGKXif8FFYvScgMgJEMbEhJLmhDc1Fj3mXA3B2rfpf2nSfXQ8",
  "key20": "575XhaiyapkebFfC2n2XeTnE2YD6CtVu3xiXiD7ozH2T9UzJ3mdVs2UGmq5gw4mCTFFiSxPTVaJU79anUWNxfsAv",
  "key21": "4CPnxBreUU2NQxHPDe3Mq1rop9x52F87kKnsKvYUWWYfUphLZnanNQkBBwcsLtMMkcey5JEiFVctAhUj3qR21fdP",
  "key22": "3iiiFzVeAXWKPnuQ1ixuxtQ1KSBoZrq4FpkiCgiEatApd3fBCPn1Mix6FTLqsgCw8Zpq7HWnszLxMpmsLkKv6CcK",
  "key23": "4CtLXr8Aoo2Ln1Gc6HUcoNnp3dFQBZ3ShUBkW96LikusM4JLsfo2PbaYrV9bMfaUk1hWRYahaXUdHALqFaneiKLN",
  "key24": "5MeJCbFzjFipvv8419ZTzQy1AdDBK3UWXbSJWevB1dtvafEQy9ndXbZx48RHPyRY4jNEWDgebZcAamXWd7kaqn8a",
  "key25": "61HDzqKdCXDM4gMc2veMXJoZA3t6C4715gVgzt7ajYYjFPdatQnt4cHBea4uzUi8peerzGDV8MSFovyV6Cm2Stjd",
  "key26": "1p1THF9JspDLxkEwoqDv9pfw9xaULGGUgxmmXFtNeKAFkswsQfSW6Lvi5xrq35Uny19WDDfooxXdiQS4XAKKVhr",
  "key27": "4Haso5rCAhisdD3MMRddSVKnLeegjx4L29GfiWyzvqhrWY33usNAkMXC1DieyaDgPZFBjHv6sFyhwSWewEk3Np6d",
  "key28": "3bHfTCPGFvYkKAvCCkAUcYDYiqJhndr7Dv2aEfrqYeD2rBhjDfFp4ZRRPr8rwLeBWM17Mwax5gUh8uZqsk7MJESt",
  "key29": "nNvk3otmdhyijm93mNwyvuPSa1GmFiBG1fmKWf58gnXDyEZX4oQPg8t2NfjqaubwdTm19mEKHvbjAMzuXFqYWXf"
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
