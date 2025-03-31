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
    "51W9wjqqH2g2uYgUR5E13ZoWT5XMWeyHd4dsVVMonXCdtQbdeL79dvJ8YG9smgw4n64wNYgimaU2b2Ja9vvJLJi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ta4Ym5YZDxF7BFg1WiPBffyD8mRNmgRVZPSyU7DH8GZhXg9TB4mLD4GrB4Gj213ha7kJWWzt1a2uNaYza99CChi",
  "key1": "4gCPpD8ABwwoULMVcLJi9ogs9TtuU3Av8L4zkE3PXYinY9mVqeeUujwPSoN2Bxioou677e5Y2TCA39AttHG5c5qH",
  "key2": "5DCPQu1WNfuyz9ExvC5Cz1XWCQYwRKWyxPxkpSoWXFtGvDXfkGUHDZkifnX6AAiVisawquesv5MuAz6ViqrKPL9V",
  "key3": "Hh1VJFHDkgTHXtpgfGjvZxmv67P3bvq8g5woMZVuqnfd9CTaBV7vN4SfSvstPqU96568e68ZZFRjzYhGBVmjHGQ",
  "key4": "5YWiWzzi3oETLpaFkUarEF1HG6t5fqGkn4iFAtYMEtf1W38ficC5nbRfThjr579Lj7WhYXb6kXeHGHPhb3jWLrWX",
  "key5": "4Tr3wGNjwhRrfZQe3o95jwmabjdWiu6jSkCKNL6LazT4Pw5J8MDiNEoaBYrhihrZfXGY5ttwDdU6ffSB9hLNsyjR",
  "key6": "4dpnDhTnn8bhsdqDzX1nqDQfAbZ2JbXw4JkKVgurh8Qaf54sSKX44nAUtmz3wNbcLvF8z2KNDcVbRs7zytNu1nzq",
  "key7": "GngX94PVcTyA6MK2WtwJ8UR46Ep7hojShP6a8bG7XCGai8vwrnuwRwW3x9AURDkanGYpRFodcM9HWQ9CYo9aSjn",
  "key8": "45EimToqugTX79DDcFUAY3Q2C4CkLmoX7qoycuve28W6oNcDdyn3eSZEP12Xhg3dfoopcfrAGhSpmQFurouDQzSs",
  "key9": "mK1ZzwPwXH6Ys25JfxvsV4ftRM27LwfSbwswbSKBYxso87LSDfVaVyoptQASh3sfHWYrKcXiZvP6iobXuxfpxfH",
  "key10": "sN2YXVaotf5KiqVSuwgCAzV6sHRJwN8NLjpMgGUzyhg6xSJMN5nAfLKsmg9QG9xYySLy9kViWcX4eiehJ3KuRC4",
  "key11": "3UA3AwDnmhQ6oigi7davsDr4BAa3b3zED6Y2WuE7rL7HTZYA8GFFFcg6fWpacT4C7EiaykxsC6RprVtrkgsMS5FB",
  "key12": "4XhYYh9DzL4Ngvon6qmqe7VqmAycUQDTGeQKFcrzi4oaZZchebn8uA1YnbdLyRRZ6HKDEkFAgW5XkxkEXjR9SuZR",
  "key13": "3oCNR8KkRsoLELtBG9wPBKwEBG2Bpigb78EBthZTYhvFVfGYcLCTewd8bnTPXiQpGuBBYQXaEPsncY1TG3iyG23E",
  "key14": "5DGsG5vUtqaEVyyQkzNCz71gLYdgb2mb1h72vLEx6G4rXmDea6hEoAgKW9SHzxtcr1CWr7UU21jDLipEjmdjnqPs",
  "key15": "21CHBj2k5etztte66EHLD6uwSWNvy6CQiAEic3RJiULRfUrRrxUit62VVDKdj1fQrD4EWvrJGW8wAJrpYXJDNHDR",
  "key16": "5S2WJwwBubGbDPdb9qTRLNpv5dx7X2bhULaPscBGty6S7saMSCSk53Z6E8ZeA2CqLFhangxnZDKHK4svDaVATMzJ",
  "key17": "49BYFbjwVHZTDS6ggYyLFzmkPDkc2YL16wKxhTpTHCKDcUGYuxVatcEK85njznC5c9SjLRpasshU2h6vXYYLwvgb",
  "key18": "5s7J9BHhX3YzTw4ZJD8m5U4sXfUPUZkPPz6zRBU98bGf4MbmW9EL5FvoR2NUBm9wfJrdRXJh3XHUcMkxL7ULuzzW",
  "key19": "5TbHjJ3KeG338jKzod5Ehtpnkksb3BDvLNVKNb6ypbUKsVgjBYLiTn53WbZrXET49dtkNkRraTAJfhQn6Y65FU7K",
  "key20": "21TRgQSFCS5KRcokYbaGfRvJAAiXS1KNr9dywp79U2XBjT8uDNdGJXjSdRShGwXMG8ng8UveWJE16bS4YjF957oH",
  "key21": "2QLmogqfbSSoLC3xioB3Cue5aatZjh15dCPcSZJ5DAFoYRMK5JgpQ2bzKV1jUBvwvtetvXumgdXuBJ4GQ9Z7diLS",
  "key22": "2emCyoZaN6vfR8Wg1JxGd8e59krcyp27dkJumU4AUiRjY9Ucsn1aV3WaFVWBvLrsek1ngJ4BGddEnhERiDUsEREi",
  "key23": "48qaJPG7CWuMw1BUCGwnqs8MGpH6wXfiRXGjKvHZGfr3nFVHjR24WSATLRA6mok4wJZUx413srtzkuJbyNobox1t",
  "key24": "5DwLSDVLHC35N4JWSv5NCEdmYNouBBHVxJ4jhRnHAM9DKvEkLDay57Qag8eEtQCjBKR3dcNEJb6AMAG4gwzM6vp",
  "key25": "2K9y9Dn9Tum2kGhzUX4gG95hWAgzmPjhPpsZNYem9ZHyRK1iAHzEq8rMR9X1ua8RJiFHCZDvKggGBwUSZZVbSNSY",
  "key26": "47T5UgS6eyaN761o3xtgERLLuqTzyoycwXbnbvTi2SttBbntm2jQrVPJNbNvZHPycmxwCw2Mb7fMwcHoxkqzbAD9"
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
