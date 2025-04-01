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
    "56bWawTJfXDJ3fpAhnqqsKcTF9QJRUusHadvkdTzTyJG8i1RRPLG5Pusjbdto7iy37CnyG69Jk2m9WR42DfoW172"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57GP6BpDofTWHwEBGDLtzh6njj1YsM25wa3JNWcHa3oGVBKc5h31uLuKrxa7BwE15uKLgBhkjdsxgjB6xD8fXkdV",
  "key1": "4i54C67a8CSCzb1HzRcYA4TYPMit4orFMpj5mgdUMwVLh1JorVpknMHaG5YmtvMy5cFiYAJdmX5Lo6FBEsr2yNhH",
  "key2": "3ZchNa4DpQMZFMQh7So1yWZoAMZSKknD3rAPD3sUaJCThvw4WPeqZPGxMpPmhBwMgeYorDL3hvSzLATmn9nMQVG7",
  "key3": "5fWqDh7QC7PKRNvHBUxtv9yLTZ6b51egvmhUkqXVctrrfTkQXm3hMfWyfNw816Sf3zuKVC2fdA77csgTA7W433Dj",
  "key4": "4RE1fbYDE6k1oDyHkBpHCbPRRjvSuKKpWYhwh81PmCQxDPCZBS8KfG5626MNzz7h8sr9uWBk7F6mEN8ugPRUvV5f",
  "key5": "5JmzzRHnFDzoQVMiqgWatcBTrwPWk6UxwPmUSohHsR38CVpgVyjfgfDCtZL6mAHhbKAU8bex4UWWDPpiSFY5xJe2",
  "key6": "2PNjetvRQqWcqbdzafiEFpfiVEgZtgWnkscWsxnpkbFfU7ne4of1Eou5a5DNVCm6V3yHLSEtBakatd6xWStEgzZY",
  "key7": "63zLLfYgeFxGhLWnrERUKUXtXYnEjHHAMsDoHztg1FXXWvvjHVuMZiDuGeZP2NAWFbBYh8dF9YAY4Nwz8ufLksHW",
  "key8": "do3EkbjoWacCesAAPwQy9DqrwEVGNW2ZNK5AxJx98YG6XG4rtWJbVDeQHNAzF9QNCRbDvvDzV2vLqdiV8TW2RAT",
  "key9": "5xwoYoHs4gGc8qsda13Li4VsH7ve3Mk1wHr8iAebjBDizZ3o8tJDwgJjc9zohtBGwFqfA3jQKpzbb3jgsiHUTtJ5",
  "key10": "2n1CzRwEVBHnf4uJPkvSWbpBvnGFAEs6cKcfxFVpKpFg5BrNRsZwpEFGwgCjN3PDkYXR86vLDouaCm27BDYvp1Yu",
  "key11": "414Zmh2gKUCuR5HKnuXaqUPLAWj3qHsJVp4h2nPHhQWHMhrkZoHdcdz7otcSDRZNNuEFWwncuUTbooN8eJ1Yked8",
  "key12": "64cfsx1S5WsekxEgBL9psyzkYBq16Wuy9Woa4fcUyKok2apuyHBKgw6Q4QfHSyR2DG11orNwaiAkb23Dy3x4JH3g",
  "key13": "3gEBe7vcDhZpt53YnLWtLSR66Q1iPpz899cVyMCWXUo4xah2HViCw1ofiU1t78XWrwrdR1LdnP1R5EJSUfL54RsY",
  "key14": "hYXJc7gwQK6DSWmvaCAeTbgxejsQTBZj4vXefgzV97JMupryUn4rhBNox4Z9791Nu5gt6sS5A5YvCynEZDYfN2k",
  "key15": "23Ej6L4eTaaCtExbxZgcbYx83K8mBHR6zr3QHesHU9xSEMaRTmedW9nBMXhwRFkVrrxLXoPeZ8fG7jYQXivg3W2x",
  "key16": "2WV2KT7kVhjcdMaowVjudtokKMZ7DhUvySzFPMRXSekgjYMNgYZo1ZeMFM1oNbQ3GEioow84ZREpa6U8nBdGoyn6",
  "key17": "3FrhU5fj33nsmcXjsPoHWWac7ecw6Yujk6hfDhKyAo6ir8VE3TwaeCwagpcGZmX2TnTtNJDViNQuR6mjhKo6HqYo",
  "key18": "3DmfCRrkLdLgpKtqKvat1qFed2Vjf6iipe5vdnjpjREZw1v1r9ffH2cfLUp2g4BnUyrJfTmpqF3JdE9uJQavJr99",
  "key19": "8BDiEokNJgLU64U5r9BE5SxKJJg8p8oQQgVbTTnKwEyeMtxfYgeP5rb6VKDaJde5MWVHpWn4ujgd7rXdyZh2QQ5",
  "key20": "5evf2z89PGrFadLaxToCBdMWbmTj49VV9tkgv6oGHg3KPBQHmXeDCZ9wPYvbNjQuN7XVmPbh4ytTJVDA7pZ82nsP",
  "key21": "P4KD5EzvADGr2SceJGmdYQDRfrbnDYDn4nptBZRa4dzoVus6QXc1SeE4ktXqFxA2gY21iqScVBVmW8c9gQuTMsQ",
  "key22": "39jbLMXh2UYoGQVA4oSvLhv7Cf2LMFymknhKCiwQtZUFtE5o1FdyHoJRPEoX1dTFqaPRaTz2fzF5ZJF6tcRmjV6c",
  "key23": "4Qfcutv6xWPHADvvrQPLnTuvKiwYm4YukR4oDWqVFqgfgETrfExrQQRXLsi9ApCBbwvuL17Yjd2F2PnLQZg9x9Ui",
  "key24": "2vVpvb2ods2LbrHELfWYbeSzYMEEKuf56uhD8q6eKPMj7iVxajWvtuoSzEqnjV8Y4G2gftujRqnZ5oWPDV9RXntV",
  "key25": "4AmnCgq5EvSNUtgJ657R6JL3ktbSuuWAaL4Bf8PwzNGuJ6ehfaRJKLN8w2pmU3stS5PUyx1txSeV2Pr76DFLT95w",
  "key26": "376xvrSiZchLDgmnCq4XWf1D6mxsMZkTnputw98wPuioCwNNa1uQHM4SBpRKVhpgdbn1VmhpgL2YQ6ndcBpy89oC",
  "key27": "2wbUne635d8r5q83E5Z6BRVCAZNLMzHazZRzFqbpDyEqwjmed14q6MpKycJabWCPnVBmqcGPEp5FczFC9uEqkNY4",
  "key28": "4Abf598WvsDLCiLRhMAkvHhr7stPeBorB3hgDj57vmbYaZYnaBvCQ3GrnVFChWDHpEF6ckAbFtd3x376WHQRx3PH",
  "key29": "53VjuaqbjTAt5Xs3PzwYQevkBiU82EAcTjpct6hzaU3gabTjaDbTRMFGA9wBPR1oneYzntLpA5yU9rFf5Rr66WyD",
  "key30": "2ZwRPfEZwPCDxdy5h2hNbN4u3WG8DRnzHwR4GnGWrDSQe71mSWpMAwrwpB9tM4WkzbP9jbUmUfnKgCoQcKLEun5f",
  "key31": "Qv681N7yJ4XEm3pbkrAKvzKGna9dJ75KKj5CbDHzrgZdzJVroBZzuPDFC7KeuGzjAt59jhs4QkYQsadBGAkyHbR",
  "key32": "5hxU6utGLJbzrkYSBNmsxuocdLdEQhFUX92WJkrom1n4rtHdG3yJKrm1S8gFHLvq2HSKX5H9qVCratqBm22Tx3cG",
  "key33": "xEtRTsUmjYgBYANog5xE5cJ9bF9g9NWKAuFLFMxUzrneej3ZKxMtaRGV56j7kQZQiVPiGTy5nmMQmw389TzKPRV",
  "key34": "Un25Wu5LzTLfmYiybTw6BUZeXZM78ea9mhaQWSkwTccY1NdbZ5ZXSN9ANQn2xyaMbg7kGM1V17qFijw1hiehpWr",
  "key35": "5ovtBMSoznhkdXfdNjprEbtDTVdAastVAuhXK4mgqcZcRsW33AuhRehZbtVck4AijLNsuFJL8KXRQ6Rv2G3i54ZW"
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
