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
    "4LFEjtxBwm1QmmLFNbGsQomNq2ViWa1L1E7amyczQgKMim1YnHmVu6k8EEzDVypPCRBM9GskBfkssn9MY1vo7mXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RbuniMWDHtowy8qaHvLPQREWDDnGdzhApbU3uaZJg9dyGnWhPYKJt1KFp2shMSjtsYG2EB4emekjxN7aaGHWXkK",
  "key1": "5W5TDwJGWrghJLsUMw6Q3pYpSySorwQK9e7JSJRmgBy5hZD3HGxTJ92CsP4DuPg1BHrHf6Eg5KZq6UNzP131dadM",
  "key2": "2VP5FdxoHnqxYH3y86wcRbxVNCLgkF9pMLj2gij4GWRA9DkjCf1BjueD6JqhgmWyprquV8i1X9xzarNKUbkiWMcx",
  "key3": "2f7uD7x6HCELeTbNFyn7B2BKaqocCuHCEJheKtXMJKsCTd3d2fztTEsqHSdVf8Y5XpQRHS9C6jwJaPsNEuWc1bic",
  "key4": "3cmbUVqc7HW7wnhvHxdipaASz1mtR5zhvSJXitLMaT5LYNAdBxDEssx2t2NPYPRud6GEDGzXBjFxeusxEnGyr9JA",
  "key5": "YHM9KeL8P2V2pMritSBKKBdV7f9m1pxUC5UFfWwK8z5us4F5xgwS5LQveZHvdf1B2KDSUcLc3woTL6c5yTGXVmN",
  "key6": "2zTZqod1VNDvbdoDmSCRTjPozWZgZAFCNRjvuKM6ysZm5ihERQjqJFzLPPKZaV2kCiJv4L1EjDqYFoMcH4podhAL",
  "key7": "57apVm192sKjevF3SfGz6J8JTMhtZhALXk86eT4XsAHaazSoHzDtGtKAp2j2AcN9EhL7ehZK7DVKgiytPEsWkP1L",
  "key8": "64o3kW3UvZgTJfTFke1JTjGtcsuU7C7fx83hUXNYdfPPPVMkY8rXHfgEVfqa2UZT9M9aKyxcY81LChHhBgbPQYQE",
  "key9": "4fLVG7grpPkwq2CmTeBykysg5K9T8zTgMDNRw7yDmHV2uBtAdvp3uNts4irPtpMo4qwkKjJhJEk5D6VWiYxpDDdx",
  "key10": "3ySNzkm8MFTDoDAWZ6MeEgSPH11fPvCx4PdbE8GPadAy1TLTGHAXpzgM5xSpiDkNj95ur8RCb8UxRt3xM2JPG7nJ",
  "key11": "2WNGuztnQn7gj2XZBMqjPgeduB9SGMynbY4qQqufsh8Dg14n52tM9mtByN2aiHFsCiPZtnXEtpu2WMD1H3tF8kMY",
  "key12": "4ZYbJDsthmGKgNTpxJhRdzG82QFbxR6oVcLTtTYhEKWp483RR5Gp25eGF7bWhbUq5jcotWSiYmobJkYMqkv4CCzf",
  "key13": "22ZyRe3S2hK1GYFQrVzKNcWoyzEEx4ac7KFRLtRPSzoG1Q7xt8MkzNeJ2n2tvgXs89rfmedTAkzRSTC7dRWhShdh",
  "key14": "41RZNwAERdCMpSgrJW8MtGCAg7Wja8MKiLrWR9mJeaPz4Q6EQCm4QUoLgfgMjq9HuyoD73m6PSUKLRH96B6sCkpb",
  "key15": "WqRjMsDYrqTK5LuUpsNcezKrR5dbxhpWA2s9nPgvdGyeqAHvZCUehA62C1Q4jAEiWnbguAzJqvwyjxschomBQfr",
  "key16": "656uwCgxE7bZiCga15G2ye2fZb8ad8crw4nsJViDxb34ncCCKbS566JiwDFXsi16kuPvGf6k7vejzfXPAnzDTrLD",
  "key17": "oqr7ZsG6RSJQq1PLkRG93VNM7EuWTPyMcGpvQ9fkRHJkrvFUkjoWU2YXYYefupLdcGDirgHtVNQVcHbVyij8UVN",
  "key18": "4WPEhvo8WsUubg6uPNhJYfsL4k1VZiwJ54PPDWCCMEePgAHxtAxuJtbY7TzMZKVBgZE8x3yK6LG4EV7CDrsQtshz",
  "key19": "j4dtrL7Cuqy8ZBJJDd6AMdYHUG9Pn95sDHwsaV9TorDjYGT95UVPtLYzWKPoK9Z6XrAq8GCn52XdKgsTwxhxQd6",
  "key20": "51eaqaDpAdf9i6hiWZ59xpyCMcdkjzeeuMTcWfQ1F9ZGehuJCcySrTqY6BRfy36hBE6SDhTNSCh5CaQ6m6E8rAS9",
  "key21": "3HsAkXaL5KiViNuihCt4ymT6YrWzWSagpXv9LyS8HHkAz3YLVKam1tBL5RFv8SywjuHyGpAjNPVLZdTMD8StweKM",
  "key22": "2qRf9NRJh3kppX9TpAv23FdKq2TXBivRbhQbpjhwgcbhcxrrcfyC6SMGdqhkjbZV2UHuiVQndD6Sd5cdut9juuxN",
  "key23": "2EZS483xxzCeuxzivEjHTQP2dETHLyCrEjnKg4ibkCEwQKqkPoeJ81Nzcyek4tYwM315hrwf1781DYtc1x79MgqK",
  "key24": "eDn2W4wjei1ionrAdtDsgr2qnbnRuCTdncLmfk9UAfY6t7W8zgEjudRWsKV3QoY6r4QmnFLRR34zAcbuiaQDiPi",
  "key25": "2dSN8p6MAvV4cjXC1eqFdG4ycwkH3BJV9S6wEWUVxk1CMbLeFsXNgBLk64kSonVNq3rePrZ5QQen21dcfvaHr9mt"
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
