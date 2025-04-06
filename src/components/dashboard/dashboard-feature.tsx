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
    "4EgpnoVeMP5tzHw1PhMo1fvBM7GgVB6hW2VFRBdhgGPqj7wi3h2arXMxViMRkocz6QdbbCUq2xZiXJZ9Hhag6SZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j4Kw2MaBThNmYCDxtCQwnR2kyMiPHwMYK77sGrunEJUpRtPQAHFXcqetvjU84PuNY5pzpLxNoCo6Fmkhi4fpznz",
  "key1": "3JZKhwkXUMm6pyUvDLoRdus9kjhHPzFusbqi9whnGvdJxKnPWiwkJRWXGtNH2iSHHavzR8u21e5njhmTBNUBqEmT",
  "key2": "2i7TSL2Qrx5atUMr3Aob6M2Zk1oB67QpgnzhytPMJHPTzAVYmGVuXxbGXY3otdjWzxzE3hxFgzE8dNoax33wJZCG",
  "key3": "nyzDZ1pAneNSaZAWAbAHRSnFDFysfzGXpu1CAr21pkSLtfntHeYJDYGvnEynENquoYuM5SSR1qxN425qiixtsfa",
  "key4": "5QH8iwkt4bRdf5ugCsfcQXrmW7wpw5TjGPqZ4B8NJJv3UuiBS4vYnHarbF7PYuNgeRut6ZwEAzjjKqLSuEyPYDw8",
  "key5": "rJ7NeeM5tckru2c5xY8FmYNH6yRa3ENbsTX8qACutDQEbUbvrwzGA6EKLs9agBczRhnXjiP1XHx5xTHMAxnUhkB",
  "key6": "2KKH9wfbXDzF4MyAWZSQWbE8E6wNUEPvKPYkGSw1hTcbxAtnYUqusCntXjsHkrZePX5xoWNT1yVgSXRNtkwh9RGZ",
  "key7": "2V6q8XD8yqrfcw5cXvMr44cXPoSfmoZaeMukYHsHhMX8BL2LBqNEYRgMgrt2McELzzcKkmfjRo11272Rbjje9mQc",
  "key8": "3R27vSyE1NueKvAAZYVpza1svK9vLeyGmhvtqUyDPj1BbWTn1kckNYA4ds4CRRrcasMmQyEo6cmphCdj1ahsnBAs",
  "key9": "5jRLVKQ7U8QpX3EykWFFwTMNjDQnXbgdbMBCB21UWMrvToo1ZsQK4SXMrL6pDj6ARBe3CquokatkTtnn1jwLgwL",
  "key10": "2Gk7HjYLF2hLAPBuTw9ukRRXdaWufgnsYqMNkfLBha9HTWNAfHcXofDvLH7nC6V8wsjxW6hu1UVyosLWG71gftZA",
  "key11": "3xtXggVis4Spfcx4WebeTPTyT2apwMH5Uc9Bt9Y1CCtHPtdvurE66PWC2zzDmfZyJzsvaPDhRxSiJ2UdWcMKbeZT",
  "key12": "3W78sWYEWPpT2FyuFZtZ5zSRgruavoKbXGbzpxRA39dkTSAAKt4vF8jait7i6Kon8aE5rwHyYDNZt3tigsK1mRxu",
  "key13": "4vZtpdwJYAHfySXj8SH6HvzzGTeucDsxLdBxrsY7F9SK3ZS545hxRMnN4ZY1Vrk91u5JoWgRKwQCygoJEvbZTmW1",
  "key14": "4yswxBAM5rybpbzdn2U21Q4Wymfidg1sYChsC5aRaFrPhFvXCAxW5LpHpB99LDseRY3RRocEBknAJ9hAXTpJ22LK",
  "key15": "5U9DkGjVTHMrFQpxZycYg2L5UZ2ptNi7WW8vC2hJWWgbcG7DTz7KhSwBXu143yGZvZAp5icCLz2nC2HHZrTNT8Uq",
  "key16": "2FJhQVSvSnuFHnd2J1fLN953F6N1H6iwyUFNAFnXNauRxQFv3SVC1cyZ3XJYm74YVxsFzLYF9bEfB3j5PCDFnkDK",
  "key17": "5SaVAKzfkz9xAgc6Ssy3SbBEdnCVob6kZ6TUovmhRiSq1VhwkddpcAGXBErNzP4ZjfUPqyzUfMPDxpSxJgT12wKg",
  "key18": "qCD8hP9gta5JKgxk5SDNNMdycDJSRZAYJmeQ32tXuDycUNYHPCCyEnhrRZmQdyW5DzJbQpen8gwPxg7uiMJmfjj",
  "key19": "1aov3wvNKfrXNy5LAi1rR6HmuvU5ije8njb9TFjKBSuSVGrJqAsWXrtrmsY9eW8JLU3yTKqY7ApAso7Mw7wKXsE",
  "key20": "3MJFfoE13tBEEwcufVfFvxi2Y1sq4GhJTkjHsKtgPEcY1vph9FudasSiNCxGw9QttyncZYoKNmK383pXuQzZaPm6",
  "key21": "21r3uGK8AocZTeZdtP9FiX1Z2UCigx1dFX2w9qPwA95EiKmnAYnmhsWeD4ydQn4GX1BjbQ3GEnRUTa2TBF6r6nJt",
  "key22": "W22GT5KRkBdCoccVQjiXpedtoZPNMxgJqyun5PxDGiZR6QW4SNeiDrpTb5HE9MvLR4eWY36gRgFpA4J9kWigeNH",
  "key23": "4ALq59EZN5VaQ8Mv56t53jSHo4bg2FdsPWHNHW7TeeDEmJABy31KY3Abe5DwUKYuaEGWW3quhXQs2Yuadtu91ibT",
  "key24": "3hx7GFDJmUd4BTZK49tiPFdGkdrdzttQsPi8QkZT2KGZsmvshsaucTW352Ge3rotMM6EAR5rJzAKjWHEGTrUtfw3",
  "key25": "4EfHg8qozFJgdSX3A3tZmN42ayJiuQQe2YkQYisBSmMUTa1ZLN3vZNpP4ywtSrgXYo7gdNYo8bU11okWekvt5iPb"
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
