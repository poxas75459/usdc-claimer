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
    "2PEDD5JV9U5wBjwwSUZxKKBgkhnSdcZkK72oCioCkH7UPEu6ZK6h9BUShmLngP4KzhdetrwbkvTaLrFhAzC8dVRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27US8HDiZwBMdFKndQMVJzvfHWgCgSz2APzDZVsgRybZyik4cWccDysqNQqgmYWQEKH9ctaTM9RdWXftikRo6jWW",
  "key1": "2kJkULVXwfxmUg7s9HCygDG4z641toEoJCUbnkPTyV5T8fnzhwoq3aGj3kDDjRggRtXKfGXDCgYXtfbNRhy7VQfm",
  "key2": "3BZJ9873W2tUme4oJAFV1yDkkJxvHMgtoZxJUsAQhZEj9446KKvZDR77JcnztjhM9XBoPEExfx2CbDQHmW1oHnY4",
  "key3": "dcwSmpskK8g7yLAod16Emy33aqvpM9RrqmaHpyBq4GhdBwcjE7KsRTZ6cuStfFcNPkFxvvmpaqwWp3oLG4GdFd3",
  "key4": "2GM4XGw1ghph5twpPagTiDQaAV7FVQ2c5vTjfkc8EMQE4NP9hMW1YemfH3pjRkU99JQuaarT87XDUrCDWX65hkqA",
  "key5": "4nm6fQyhwSzRmErNDe2G72mGTDWk9bYDB4zqBVpw7w1rimCwxk2g3gS5wvitYkwtn7XXi5TgR1V9j7iXtDdwQDqh",
  "key6": "5MwsngtqcfCQDr9mrYuT5L29WF3Tp8Ae717KRuAyc2gtSZgqbXWrHHSE24wwHJrUXpHS2WCofCuDRGqUCZLNAks",
  "key7": "4EC4g3BcVsSvhQLDHSe3rgczLiQ2mzpaoNFyLZDrQS1TJVA8jQeNGabLVs7pqnqLjHUh6QFx7Je5xyo9MJVcQKWh",
  "key8": "sXtoN8EHLwVHk1XCm365m2nr52bwCPWY75DAYmzXDFEyN7V2KVxTVcrAi62Ewp8bNTPYhcmUdmDyKHUKkHFC94d",
  "key9": "23kxPh926yaj8T4UCar922ZPMfxgotFQc3sKc6X1KGEbmZFAJmRfWDJbAgrJmYeiR86SCtADX4Y4cKu8JucRjHZ9",
  "key10": "mjRVUgyL2VZ54LLASR8vQ2UaLJtAi5EtfuJ7kewNHbL86GFKxjj2LAbXfbSJSLHyEgbNFVFarobt9eorMurgggY",
  "key11": "a6wpBCX4i8umWzACnFUyKzRXBn8AkNdvXGGWLG5AwU7NantZvJR5v27D5MTZkno2fxySpk4V6pDndQdeVw8m8QB",
  "key12": "5ppomsZZmeWig7DguaEJvNuteeXAn3t9K2zJuCKEAoYaepjfCr9fymgEVJ596X6b1DiM4ZEpQUq3xKnwzjrP5gty",
  "key13": "SZEPQYP2FRDkLFTFazSXRxFDM51rufrexZL3rjz9yMovCU7Cyg7ab4FSt389C18mBnVC1dJHzxKecTEGWCdTWPk",
  "key14": "4jk2inwk9QWKArCgUBPCcVvBJGtTLTNYtYigrLu33PuMbcst3ZagrhZcHBN9Df6bcDnoQjHpFP96iLFUrQCi5QVf",
  "key15": "4rXNgz4DPw4XcXDufBCDJHPRnaXyzL2WFSDD8puL757juzgt76NyKWhZqmzMje6RAAKV1LaA9osnG2abGHxtywLH",
  "key16": "qf2VVq4A2aNBtvDoQNpRfSThBbxkohKLGp5ZWeuant2e8CbhYKEmRGLxW3WZEUxb7Q1RnnCnvdhaKK8xuSBjDbU",
  "key17": "4x2vBLn4XS6a3PSCnZx3bUC2Rdu3uCCaAoLh4L8yzg1LkyZXKP1gY8CbEQe3dV2Ae4BkVdYCUiQY5wF6yVey8waU",
  "key18": "JxDn2qXf9feuTGqP8fwTxfD8zgZMJqTKf1G81NJcqxnYfFSkXvFUpHSGZk8F9TZ3CpBBD75rJpnMjsmRvcxnqGZ",
  "key19": "4GCU1xC8Jdg2mXPQvo5YENhz1HmuZXeyMd8W3M8H9Wq3oFXWq9HwzW3TrLAkT1WHWT3SRTVwZ5HjjCjs8imJPSsV",
  "key20": "4MPQnJuSKYpAYj4xZBgzx2aiKrcWCikBou3M17Bf7sWC84ckLocFYFHEc4GS93LhW2W6ZcGkVkLCrodsA8KQ7fub",
  "key21": "GmTZjiL6JGZSwy2Pysi5krBRp941dSkT5Fs3yLAd66AUudgCmmE9mzTJKQG3s9Q12y4n2bpPTzZEiFXirhsa39D",
  "key22": "Pgh7ZqVRFEdNLHKTWB2h8WVstcAtCNz9RhAwCpBZs5N1z4G2N9KfVDjDiPiBeFpbghyZECTUc4pQkUDnAL19VLo",
  "key23": "5BSKBaTTYnXxLgamSv1nbuYyy1RZsAKoNetE9nJBXaegrzFXSz8cz95ZhzNrAMLijNqZJDaMDckyvcMF9xiZTnsT",
  "key24": "4FDFfe9TkFBAb3vZeecsNzUgLhWMDUMQVt52vPCmoCfiH2ipQqoYMdQXKX5XAmxFPJt98x7HiwSbxigCvYZ6Zmxw",
  "key25": "3cLWCRJgZwCxWnnRYqENE9qiBWxVFqMgkcunrTVG9AhFWMFTFwLjButEjoQNnj7WdwBJuMDLy9F95oySLXnJseDS",
  "key26": "3iKwfKWsHpEiDpiDMHJJpE77sxYQcmF9PAUfUinDX9T3n8LPvS6soUbKzyQitW6giwXRz5meVoq4kPG5wn39BNCY",
  "key27": "3rSXTGDbCqrUWbbkRhYiPUjNgXkpHAmyVMErQzaGaErfoxsvATkBLJfnKa3o188yQKBTBks1qMtvQPbwEXBDHDHq",
  "key28": "S6oRMhRyzuTrCfX9XcDgKgZjHnKryDVjXpC41pYjSSnzkTnCVbCvtUWWSpRdCSCCbXv14AbLKnKD5LXA9bHp4ZK",
  "key29": "4bSMX65EAhLPZnXJB4WHEv2itTUBo2gJxcXUk6cbLDbCwyTLcSPfEGtdtgJe4EbawARdsCDNhSF5e34pbLjt1Nw",
  "key30": "2ZxZgsjFRfxfVWN1PJkfTuanaoVj2wye4BoUq4TSY6uKAqYAfpuusj1Q6CucFx9UdVKD4jZv3XnE7Kx43KZzrks9",
  "key31": "2NogYNJfwejqbbZP1a2QvxgUueHUeN8vamKFBxMxmz2Ri6g3zTRdurj6nmuJvxE77oUWa6LBZ5XZY9cm46BEcvzq",
  "key32": "ervdX1z7km1EDB4udaYT5XD6uYR4tVeEUNCyjBAN9GjA2vJyoTPFky9PMPAhunjGBN4sWZL3Ppnn99N4WMF6hFK",
  "key33": "4AyWcqnoSzLzr1J2wvCZMqUkgWn2Kzi3mJbaAuYdAJhTgKgGFq1bnsBeiBoth7Ywegb9xTMKZdrFwptH8jC8BsAv",
  "key34": "3gZEigb7qFfcsJUNXP5iG2wHsQXRpj4XnsT79zyKdErTVaYMhzvZVu7LmdsPj88pPfoFTvp5dVxJoLJzC8iX4ovi",
  "key35": "5hcDyLSRNPW6oNJQ93mNgE1SS5qoVb58RUKCb7UpEupA63MyAQK5oBbhgHJx18tH1TwsALQfGAA6MJGDgk4wuntM",
  "key36": "XfRbjmzer5B3h6vMg2w9zR6QvC8A6qWzatYWU79rjuahhmQCMkM3YUisNLyis7Ndb1WNNaKJ9NtmuHSDiZrMasZ",
  "key37": "38yRxUk9PsuqEqt554FjNncFbmMYoKE7Skq9UUVh6fqQ6gapwQRyc22rKH1teB4joKDAimKDcvricTxWtQ4zF5xg",
  "key38": "2DfkbP4gWhRdcGutHQCuyTw2WiBjsBAfRWURAcgwgSpVh5PowBvLkvS721iVYYcwQMTxZq8QxCQDcH3so8hqWwZ1",
  "key39": "5Pqr9MsFJQUV4PQxPZmgoVs397baRPSCHUTG5bGfabRXQgskE2QD5XssJbN3mdaNyTzioxp7ag4czGfsPowebdWu",
  "key40": "3nhY5BZSaBaY9gWjPAckvLQnqV4au8aAzNJnqu5E1PLgBrsGbtHdctza7p3tevKd1PSghuAtDPPjE6S1rZWQz8Pe",
  "key41": "2WAihQEaHUeSDUdY3nXESqD3Yuk37DFLGBzimwoGP1pRX1RR7qCmXwdGzWrDDLvZNyUw4J4yuQvKKtzdAyrwm2pP",
  "key42": "3uFDDpZmqnBeZ6dDUGJgjBMHLVQKGUGg2xH2NP9twd6dV84ejKTzKSgUrGrMVtanaFAXZRRbyA2YUgL5xa1pERr3"
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
