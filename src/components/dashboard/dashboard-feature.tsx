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
    "2E6ifCZEvgnSWtkVzNmDiQ1orLPKvqGpWKmTdXxipgSY7knotfTpiSrm74UgekGdwf34ybxpDyRbHMJ4hb21w7EP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dgaNzsHBSmLT4hcEpKH5no8CR4mDTMJsxBoXq6hupaGTGMFry3BKvSytrWnFX7aNXCYrpNjosQfQYYDa8BCKVSK",
  "key1": "3aoSfoiW3kSzeP5yBZ3JX7NbJM3GcBfU6uFPJnaVspLJNwm7F5JZZSsvURbJpio6n2UPpjGSTgTDCzFtpLAempGo",
  "key2": "2sDRXTwpah6vWYqyF7f6wWmc3Mhetwx3RSFinzcf4ySnBaeA8BjpifZNqSsH45VznWetm4QaYYfrTDBPSKiyPBya",
  "key3": "5M6U1fwh6tTQ6Mfp2HjCAp8w8FUs3C6mkjsHHR6mijhQriyZA61ud8aPfMDY9BTqW7DaXJMJbeQePaXWZ5nKjHzs",
  "key4": "4GyHB8bKhZxk1B845gugzhYAt3Go7btVA3pHR1qU5wPYpj1B8DQ7x3VtdHYvwHoNvphF3NWpRaegppkb5ZAEz1Up",
  "key5": "3E3Wu4NwMMp2FWYd81ww2Cd8XAeTBvocbndhDQvWvgS7bhboygwa9DzxQqpezReWFF3X2XXoD2Sy4YJ6XwveN7jx",
  "key6": "2pZyGdPT8rsHsvYwwrXWBWyHNQ6BPSoLgEYMYNx8m4CnUWzSCrjbE5BdAerWG5CnYGXsEfuUaLJhLsybuHogUn96",
  "key7": "3nkXjBmmb7PFmYmXak5KdPeHTGZcPoLe1JJuvRVLQQ9BncDvRjdRJh4sAPteG4bcaFyCPZUeTAAH6pN9xeoJqAWB",
  "key8": "5zL8AKfKoYys6pdtP8D6dsP6x5Vbte4aB5uEq2kXtX3FgQ2x3VEdmD2Ta5jbSXoSwtTJuJs29pbnDUaijWT28m3q",
  "key9": "bCk6x155E9CApe5meG2ndwsYSZvPeAVjQ7d11td9k6HF1n5Av7UEPWgvJATR3tgjhdQYLpBtc24wDvti7sMJWMu",
  "key10": "3B8AANADnBVDqFm9EgXUMCCiTYp4wcxRgwyeQ1C6Du6SneJFxwEXQGj1jmtDuGsTop5WJapHVTzS3MhXybzfdgKT",
  "key11": "5izC3sm9ZmDGFsiZHghWAYEP5CJznddTP7AGMPqR3cZ4xZ2cMvWnB2SCtHYuertNpDD1FWyHSLup4RqNkg4fEsfS",
  "key12": "2Bt1NbhVVBV1R6f6Cc3ktNf3GMoqMMX13sXzATKwNDPR5CiFs619Ho9sTSkjxNsiMKsKYgN2Z9Ej9TgSMRFQKb7J",
  "key13": "2JfbcSQZEmy5ReFmHvjwXfnmKmeMQXX3o3NNix1f7hvckikpWUNDN2pGe4EYwJBQrDT1oAGwQpMatCBRLpF16taJ",
  "key14": "56He5WNRKhcbdke2HoGXPVLVsVA2mVhNjMms4193nie8La1Xd6r79aBX9D1ixrkRx5B5pzWhoN9HQPS4sETRGeaz",
  "key15": "CPofHbR5gfv5NPxRbFsgBR5t1dgJ6R8WyztnAF4ouMG4LJPRPuP4Gi7ifz6XrV864RTFgCY1PFudEE4FEeWvfuF",
  "key16": "3GCrMoHUMzwFA4CSpgpEZF47hX73mGUn3cQetwj7pBbZk5Va9aK82goHJVu62skydSypUZN379enZMUorvee1dFu",
  "key17": "YyL2bVKkwwQNPam7eFBvcfQapV1kka24k7SBH5GpReY4CxqSMZvRfTLYH8BBjbiSnxjbPYberiLw2B9CLHNAeqr",
  "key18": "4kCFVcRV4LiSeHB7EpTK3YeSUVuucMXojQ8NuN4JaWR3o1XfamAjhQUKyZgZrk4MNuT9zdNjM1A5cpsbPG4Nzbni",
  "key19": "nHuAFcf8JZxCNJ8KB16DAvJXQam6wF7jgxUMqvj3Qwss8qkBuV5fcvE8sN6CK2shQAxQgH5rx7HA4hDhU7Xva2q",
  "key20": "RsMPtiVvrZWQ39LgPEQUXcwR86pF5qxK9ejUsvPuPzJkgRBdKu1L5Yb4DJWb2UTPgZcJoxa63sm6icMcDnFMQCf",
  "key21": "qeEK1k7cxWgYL3jqMgG7XjQGhg8tag1ewfAmEekLhaYNZuUA59kEAbFdzZMDV91Q6FxzCHFuBcoQyy9Bxpaq3sY",
  "key22": "4zKcYcsVPh14ER5MLjR8nqrxWAdMRWHg67Fv11kRTmcrPEjkqb9Y58tKWBMZNJ83Hh4mHsZeYgq3EkQMAPTEUKpF",
  "key23": "4Q7EBMgzMcEZ38aP8sG5BTXDgmMhTmqZh969H8fzBboDpw7LdVLH2CUsRiCQ12QwVTAXbvA18QfmVrfUQ7zjbmnL",
  "key24": "2xae6RBqQ68pJ395eEQCierqgXJFzALf2TFhJr9ATLP47rT2TUAZazhrfWkfZYLgLTaR5Y8QvJ8TUDqcbtP2eGZR"
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
