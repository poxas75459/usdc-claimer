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
    "n7bpJ5XwvkhJhBh2S8mmzc5CegekN38xe372ycPKdFS1kdE2WkadcTc2gAQWDbRrdYRjNEEVdU38yRbrDUKvjzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rxc2Z9hbQApYGsjz8PKSyzNitE1q9CNqWTMpVJuLqBVUJnaHNQiitysKRXo14R5i9h75cA3jGqUv1KUrXVB5wg4",
  "key1": "2zK4YCEZTGP1qBnjvP8xKs4GSgi9seBGCeazTrbqRWX1rPMiBhq9U1yR1aJjcNEu72Q7v6fKwuzuUgbC7y7RBWxm",
  "key2": "vDUrKoTdhkK6sop4Nk7GsN11jWcwVpMBvUJK3ueXojdpbRzUuSjwJK1VxoPJocya1Yn1FJfdrKhmBeGvE4Px3w8",
  "key3": "2Kp84SUFvUc4sjToWUZ2PjLyUZsZzUuz9LKZevXwCWZMY23AEYtSR3rFJnPVG8sVvVeHrr1qM7BtcZzqf6cyqjR6",
  "key4": "2xnTwoDNpcq33sViw1cGUDurhYfwKnUMX9J89q2AKzFPaH9xZGiqZfeZ3gBUzXvcM1NzzgA57cu5EVVtPHsSq86V",
  "key5": "3M1cdWqxyZe5EZpCT2eepxGXtAn6x2d9uWVF9aR4GQmSzEWSB3xJGvaCnBo5x53FNJSgwKBKr7ZtuKMG1TehLWFX",
  "key6": "5CyAfLouRX52E9gT4TyAdbMo8kQ39Gh4juVUrfUiMHvmHWPUbfFQBbcuYyVEU8skHFVveWMuHsLWqimPe73FcASC",
  "key7": "TaPstvVcmgWxkFmuo8jiEpRkX1iC3VGDpkCZ9gDqztta7C9HeHrUoE7PmsVV1JBiU46GCDfCbP7dwNpvRnqRMY8",
  "key8": "48sXUi2sqjesLVBB6P6R5q5CJU2H3UFgdfNMYSxuY75QRxVYab48sUMErdyR3FFBbMpvSEaa9JnGRo6vBxjRQVct",
  "key9": "24sLMCNtTnuSwDYpLVYb66ichR3tCg8v7DsbJDaWHPxzzVCjP7xH37pSAD4dz1GvmGUkegv2FahScv2cpbZjhHBs",
  "key10": "VddoansGSGNpNjTJ8j61UasY1GN7NfRBSuYZ1UpmPD3EstFianPnw69kPzJJZekBCMtpnBdJ2JLCT9CvV2X6SKp",
  "key11": "USkQ5jq3GckaCDRusxnTeQ8ommYNWs2xU47fwKLcrTaWdU3D1b2jRBNM5ZCPWtv341DNCAW8WWtJY5X95MTGqv3",
  "key12": "5V37fnRrr5m45wTRVnimWXtyWnqjCSW2gaFRqPigMEimtLjTxYfz1dGhyaM72pQaft3HLWJkqTshk2BSvnhcLSBT",
  "key13": "5iCnzf17S7UTSwTU44BTAGddFBvw3rpEqAFGh18chv8hWcHWjhtL34UretAZoJ7i2ncK8eHQhrvHyShx7qZ8aht7",
  "key14": "cezbdddxWrGR3a5qV6dMnJqyHavu5w4U2FGvHk9ghN1HkoFfcYt9U6cGL7UgHSDn7qXvdSWwTkw1BkD4w44j7z1",
  "key15": "5b4PGMUjBVTPMb6wkQuX9Tf2zFu7zgisuNCm3FvbgL3F7n3NJ5M8UFjDxXTQnNhB9g5tLVAMqefauhe1hPVDkN2b",
  "key16": "wXfKDpM3cdArgP6Sjj4MLwSd6JzMLc3APRfCRuvhoRquhsiELQnDN5UF4BtGJbfRursfQUDRsCph9bda739Qbhj",
  "key17": "6213oNp1aGRzRJrGpB5gG5cd67XpB474B9EM2fQs9v67AY3LZaRaihRMofAS1U2KpTTc7JGL8Lz8Tfp3q6nNsGai",
  "key18": "ttM43Lb2q9QixfZjkpjphUTL4YeKUrj4aCp7dGzzZ7XWGfmEeDLkNUsY63Sn7D3VcasT6NsEb7YqgRGkWe8ehmK",
  "key19": "bxhqmuxJhmDMccdvZ53cDiY383q8zbw28zZL3rYvgyXdicFxnrXyMmUfq8STpbdHXCds1evTLjKeZ1tHKFG8dRg",
  "key20": "4VmFxvbTjTdWWXrgW6KPsn4aUhfZMXQB6Yt3cTmjvwQQ73Cf4qiaaTBvNBLp8tNbm5NRNFUTjqfXT5wzjGMCT3TU",
  "key21": "3WewFgbqx9ZKntV6LcnpsLi2rybDwBu3NKGqycZ4cx7KicqwyPqJVAB28P7qpSLit9Z4hYqcqgx9B8GUMtCHvS4Y",
  "key22": "4qBdxp7ZMsA2xLNcaXeEyrx4qhaw2cK1KTcZSuBiHkzKNosctdCxGcMJ5xADEwz3bKAgz1JJ5PoXMKdmEpFGjb2G",
  "key23": "2ykogoP4rrUMPdaNrJoTd1YU16uaULyYedg5qzWa15BTBbX5DTTnp8V3wpPREbfvSoBXikqZwAhRrBrEfgcRrkDD",
  "key24": "FSBLZmFbzQmEQvmw5pk1wRyste9K8dAQ3SaxyDsibYka8nL5J72yE4uBba2Q6cDFqUnqKrnzyh3XNtbpCRASvRs",
  "key25": "2pXpLHfwJPzabH8hFoXSPouaDQafnZvCmoizR8Sow1P8GCcJji7hidbFHvCiNL3E4KmorerjjDBHqzadb1ZmjnbM",
  "key26": "4GSoivANdWjNx65zqF8ycLDLWapz5fXoyxVP3oTs9RKAV8ZmMD7joHwFg68sqPNrHyM1FyG6KwfVDpz9bWeE9cnh",
  "key27": "23yg7uT4F6M5ZVAEwjLbF3Vu6j9TE8bqRwwYjTZ34M2iAeEeMQVGkZ9z2cVFkfmEg3C3AJLWx6AqWhzQQLg4LBtM",
  "key28": "5bX7KtbdYBNYA7gv4EJjgywNU6ztwozTERuUpZxRJXUTokRXnETfy8b9pYTvKzCW7u1Y4TzvhrDb4swmWpMBWs3F",
  "key29": "2W2aMjz9qcDknRoUypvQTddGhHRNr6PS9RD2K5Cdd7to2J4yekcmK27WXQxpvTLLyjwWaiXNk21f9AcLZiDdEScD",
  "key30": "epNEPagDE47fFdvwf8hG5cG7Nvhe6szDnyMtNqsQA5FeyJiroP8T6JVJM8y5MaKD25Q31Dj3umnDNvxD2H8fuE6",
  "key31": "3y5mu7Nty8d6wye5KMi9WgGFoUuRBzZQhQF2xXpczGeAC5WhSPHHS3pjfJzWLt2hBCxiaAw2TKTQ4ssQWLaBjGPz",
  "key32": "VshMzj5c3b73fjdExjMrx3KBA4jErMq4RyZaqp6HP5FANyyFe5q5MLfUrppTpSLhVFx3cBnNhPkU5yXpvGqikDg",
  "key33": "ZKhnUWoTVDEdx1BzFCP5ATxPRTVv23EaAMCMPyFvsTmePtQS1bEdHx5DPMrvyGTD1VcnkMr5FRTSWRciSUJsfrj",
  "key34": "cL4P4VUq6FFj3AG33K1iQSfWrBrG2hZEz6iarWMGzUPVPjxorTSWksf8AhxEW7PXsAQNZ3RGpFfbdmPFoUWnLXA"
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
