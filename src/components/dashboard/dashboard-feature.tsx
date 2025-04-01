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
    "55wxKHeocVHA8926xEnCatoQHw6bmp36NifPKmfGo9NQoZBpSjmG854HALNAoVmGiMwGi21s3sg9bcFeVArcunmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56HoS6kv7HM4fUtKaUyzjjx5gnUh84QjBW58Udr8md6pqNadBeeLgPaU6Dt8DwPxUAapz8Ndxfva76vo66g4LdPb",
  "key1": "54Gk1dJmXxREpRjP3YLXtc8Moe3mZiFRerv92Zmkh7eMGXf4yGYeQfjRprHa8LqtJf5oTzSXs62WQDj68G6APzYf",
  "key2": "qkPYi1gccwcmsyUnbivmYgWBmQL29ecx7yicbkCd6Cwjw5Z1Posz5mJ1CwRTHMb7HA4QVfrgpMiKdUP4gQP2RHw",
  "key3": "5kpQdZoYfcCzehvsUp7D9JKPUEUdgfTpur6isz9Ttj1MrSTWbtBjpZd7yVw5Ntyqxn75jEbrzTf3TUrj98wFqXWZ",
  "key4": "4ZanUAz1ys9izG2QKA8MRAA1mezzpthaXhWPBHBsLfQfuPjPmHJH4Rrh2RwhbhX2Buf481RzPvADrFp2jwuJrPQ1",
  "key5": "M9LLJQMu9yVeZkdJ9PwQ9iBgmFRu5JQ9Q13iX3bbNCLvhwbznw3Hqq6NVV76imtcELKSqXNZ5yAyceg3v55NDo6",
  "key6": "nLamkmrunfzofHPiGhnDF1BAsrs2eraTqQXGk9tT7S4jyDyWdt4FvK58vcqS6aDXqouxTtkBnMmVVqEkKGLBTVj",
  "key7": "vsAAr5CREhqH2mQrWqcfGxYoKwXVzY2S6yRSmkzYjZfTre7sbudPaimW7Y1GcJSd2CS2QATjdvXoVi3GzLofzui",
  "key8": "4L3o8NW89kqpXYFHiehRy8JbvqXyUaNt8zdHMbk34dfsSW4ckad23EZkftWezg4VyGz1yBFXS6B75WqdpcGy8x1n",
  "key9": "3DBpei5iahupVcc1KF5DqipNRJehjwdne92XRWAZpMhZPxysMkHCZHMkX5eeAvemSfEwmKh45u9TrbhByN6aTque",
  "key10": "4yDnVFTpiJBXLbYvEh24GehDkdzXvtji6p8aW5jRqrPwqgPd7LeVWeawDa4c4cybsXg4L9MA1ykK93JKNYaYufKg",
  "key11": "32J7CsmCGLaRKaSpdBfBUhTFJseHeAhsAcvLBwBcXEEjCACe3VdqwCPqNLv8EKmKeuhvP528tv4D4VgpvsqGpqfT",
  "key12": "xDzHsLo8nfVaxrz3aFu731c2n1xL5pVUwvR8ouKvWrxBgszn1g3RR67oSpPXzVnNVK5QXeBbJ7KewsjCvNhfiDo",
  "key13": "5yZ6kjcG5XTLXGNvg43PnLPLcWxcxutdivaTVA81dAL2b5PJDDCSmX5ZyF5ZmcUq7AK3VxdYXw2CypmJwZTMLV7b",
  "key14": "5QSg5wbyPkbtFCoC1BLf943yLtETehM3FLRpyQUfp7eXj2d4SDPh9Cj9UXtxxqNRmeYoch7iHDRusHmLuiuBcvs9",
  "key15": "2PXkCBvtgCkff158HvMoBSevpZNfMy1AbBEwqCEdt34aASw5DGrjwy5smovt1kTGcxZ3J38AVNrrByH6pARKDogQ",
  "key16": "2UfeiGch1cBAKa6rGzNWXYyPZXHASybiyo879gxXEaokx365bGJCGAHCgrxLcnakAeMYvq6dKWevR4BrnpzVinrA",
  "key17": "yK5jCpuN4vqHAhgmavhjsBJpsbroYtynDrcZiQb5JfgjZPscHLiWMY4nDBYbC1whxEvFUc62xJ5o8n8XwLNcBwW",
  "key18": "4HyHbuFuo6rKAomYGBYSxmhF1FV2ZkZwfpVbPTSVgj34E9DRutZf8BUhhYVLJrkCMwSVQfSaix7V7Sy2qSNUXXk3",
  "key19": "26qJUTdRGCub5a2w2CTikfAzi8XGK73kxjP2GSwuvKGeGbFM3L2oARTbnaxzLcEYMVg7jhXCPoAGjehAAagGxkUX",
  "key20": "3XMqYxG35Q2byazki2EJWm5WtYKAFZgR6inFhfAytZ2kNiin22wBaPrqv6MYd3VN5veNZz1Xp5sB3AxYKVyd7NwJ",
  "key21": "5s9kpe7YKCucsmEhgz3efaYK6mnsjcB4rBRsRqUtkvRc7mTHfnTAR8H9WrGWd76MbR4Wf8wxgPbcUNRXHKMhUcYX",
  "key22": "2CFkmcX6NcHNvNcCJUiY82Txp4z5tTiSYbWk1bMbJYqC9QWLBng5pPjForvfXMyKyTMFkhfe2gh1j2zBaTU1h6Ez",
  "key23": "2WFgGHcngJYESGSbcQw2TZJAA3Fv6yqCf8Vo3CnY4e3v7QbAWpCjhnwnivrfd7PytRM7GeiA8gb6ALYr9zbhHef5",
  "key24": "2e88RMK2zhMorKSjvJ4UNZ5Zr7A4nfcLUqUZzrEjBYXc9BR6RrH93QFFLHBWcv81mYDe3MvUmm8SunqtKZRZFkYp",
  "key25": "2aYAR7potBf1EK3sS3J68D3hJu8tLg9T6MN9f5Dd4zW5K48uwd3N9wjQY7xRsZtNVwrsJAsUmPphbJDcXPrXDgcv"
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
