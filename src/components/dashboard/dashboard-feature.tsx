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
    "676iJCFChBvneBrMKWH6eLcRGqPFNiHcmB34316ftNGLL8dfXR6M6cweKaLeQCJEfSpooezwaM9UZ2AJ9gSMxPbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cn4WGjzN7G2ReTPpgzha8SoX12vhbKjoMfBDyD53apa4PzytPLzvJPvteVwWweSTRtr1BCY54S4n8aWgS63FVtA",
  "key1": "2LPCPRQK1aWDX2AjidPKgDqmaFR9Cwj9dLSBNT8r7BZrqpPrTAS6GWPkwxUgYP1fF3E58DdHSLWao7WAprxaRDbL",
  "key2": "3kjs2rEdradsfhsP991smLTfDgSzJey6jZ1ngb683YfsKaBf3Yhtscz1QLY2hyjWk2tShBwRf3PqNCXmbogbBe5L",
  "key3": "3w4wGSFmmiPSwhwqkMtujRvMFpdrLFWt1ew9h6aRoQkxR3WPMnXF2weuCgz773CM6nBF2UGD4XaiLpkExjjZHNM8",
  "key4": "2ahEvzSnrqdPzZpZMMB9jJMTneFKxi7YWnTJVabgUtMvkYvSSfo7EfmBSnKVaM5fyw9wKURK8WHsjry66734erEX",
  "key5": "56m3BF8oGMoAfDW8LP7zfF9jAzE2AzrVcvyZiAvdX39uGMmULcV5DcFTJADpgPkhepxJC7VSc6ugVs8bQxTfVKFW",
  "key6": "3qd3uJHGDWhttTDEgoFZATSM6LuYKY4sSXVFF5TvEcTunYPvi7RT2hCRGXAWhDCJTULosck68sZKaBN5mt7zQHFa",
  "key7": "3QGJJ7sEnyrrMz9X8HJfSepqaq1M3QhSLkTMUbu8VUVsm2o15rifxdv1CUb7ojcbK9A8YPdZB5BhCAQHdzodNrk2",
  "key8": "RzZVpJLGRbnxoAKXRKLMm8fVpLgoAPj2ioATYEsiJm3Ft36L2TpBGW13Lb3RXnhJFMbpLGdmoPWbKzGdGc7S1RE",
  "key9": "4V3HkprzsnW3KaxjxE7FGioDHrZ95TUuBp9mJ3bGScvrnSCMaqyHwd77MUYXaogzqcjuc11ReAeGXMfRZsAgAWT",
  "key10": "9nkiWgnGPV8yhpvZq3oEiNhizBYrXR3NhMJ5gePvM82ssNGdvxphUTv6oMXfxXMiyYnB55YStjM6395dL94Xueb",
  "key11": "2yj8XbeyS9nBp7ReuwH4pSuL8hTw64H8R8tetCj5ri2GG9EGXGdAkjMt4H7wejBP2SwNVdSA8NLpo4NRUEU5LPBf",
  "key12": "2ueQ5X1xzgwenSNS4CKYUzsdHXRNMisME2x1oShtYgwYaFi2EHeuRgxv9NTjwD3v1D7Z4smibr62gr2HhPmWpcKo",
  "key13": "3SFHGteJXdXWo55k3Ko1fdY9Nc2LmLR84396WVTysJQ9rhsoyrRsEQSbPwyQgzkdcNwmdTPvg51gLsV2a8dRgcHr",
  "key14": "58wVPxg7Mgg5hbdpNxKEMrDsnDzRUKfpHxiwPH2WjLDCCvgxXLDnHoaUPjTnpmFWdKXAs7KWKYQkFWcxhu2FDTFS",
  "key15": "4hSswjwGv3QsJz11yTHHPA1TWApzRPnCc7dxSeNqXNaZDCoWA8H9wd34Hn69r124KaxsvNqgEjvLGUTe7um5eLDH",
  "key16": "2SADdPQSjwEB7xTVR5EVAJgqGXRvHwwXA2zd5pNXHyzKkZEppY4ctdPRsXmH9vAzHxpoo53mAanQnfChaZ4Kbkg4",
  "key17": "5vryLnGCrPp5KpirP8LhhhaRx1fMwpU9CTEbphpQpBd1kTwgmWyNDABhN64G444TXcZXh425vRX181mrXqjkEvHk",
  "key18": "4FCHc9XijvAHpMbpiZSKGbxRMooa5bwSZfvg5GcqNzULTgnyJfwdNN6B2jKgYmPiVjcHtGRfHwo2h964BsLvW8Zi",
  "key19": "2sRiLYiJkikCRiU4vsFRckdKg1hA7TrPNddmVs4Y16H1rUFX1ovxxnWwWmYE3QRMpNCA8nxN8xXhPe543PUD2KYo",
  "key20": "29drtHm612wvBjZ7RKVUXsDtEi36wLVDzkmmXRZsZiN7L7dJNN7v2mvHfmXAqBRXHgCQuin6iZd6NNXXy4exibv1",
  "key21": "DZY6FCmGQHC8V1wAFFEabGSiLSqFbN4eYDarbXFikWyF7nspETXnhvnNTqi676c5YQxFkLBCoubgDg7CmQVMFKZ",
  "key22": "5vSbSSxDStSufuEh1zUfsSBz68qdJ7BzB6trnVeTXULJ763b1Pt1Apk3ZxmbWrji5smV3GbS979VZXFb9SqytsMf",
  "key23": "5gDdTL1iBPSjjoWm4AaopSLKWzrE9qHXdzv65Wh7xtRxeFabsqPXUqXRbDQdMhY9PJGaL1G48JVAB56g5WfnUAqa",
  "key24": "8r4G9zKV6F4MEvQsYLCF17YSXzrgbJJzyF8ycpPHx3Sa78ddkTo57yifNKisQjKQMkxnwScJKXFxko6ZGkWGRPU",
  "key25": "gWxQUa8Zj5coRTax2KK3D1uroAjFCnBzyEKcwmtDZSzG9AabAa3do9h1qxjuB7UomM91oHWQnBva2yi7mLP9TCf",
  "key26": "4EWd6TYxs52p9pojzhhcKuLD654ezdhtbDf8Y3waV72pcWDK6oq5yFpEmqRrqjHrzBry5c4TKroJ7fUhUffGm8Ts"
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
