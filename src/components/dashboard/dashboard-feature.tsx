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
    "5EjRhoXR15JeVjPXbjPkTQsfaitiobapiBCpKPhb3YvWQcei9uECN8nbSWiiqc3jwMuYyV5E54Fp6NDKJKf84wb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pYfZh3SSpEFCnyBNZAjoDmUWVZyB6e26mMuZeAVHLgDKQWxTtkYiFrRAeffrLYScmXveYkdZ2aLWUj6nMwkQ6C6",
  "key1": "2W4xwrkGwQ3PNcNUmJUBG6gqa13axNgf369TnJdtP8VttKeyiZa3PHvjcc2g7JufEKLdyhTFqd9D6QsQ6aqQyWpT",
  "key2": "4RKLGCv2eCpZZYJFvRM4F5WPG3rQfta6kkd8eB3ggtzbShwHs5nymNEYT914zDJjZsqj1K6iVUFJw6ixmzvcPSmZ",
  "key3": "61UXE1fDgmTZdivLa2aHeiEY3De6qPn6rS7SNLed5Wq112X3qEiBb4wAoYdu6xMLXZ1Wk3vf8g3teQePu11CLYAU",
  "key4": "3ccdTH18JpByP3EBT5gPvG8zVWG22e8tjbUyws6W3y2LrSDoWtj5HunvUm1MGCdf81g8yxG7irRzLuSGk9wFXsHV",
  "key5": "4Q1u5x3HCxHnYq5Xvi1Xp5aWYyumtMGKWbpRAM4RJ171JhWeVu9JYdZDRMPJeckoGaLjV1CKKNqxGKCFHM7Jv12i",
  "key6": "5rLDz6o6yBA3TJYfDkUEtNfWdcwmFPfqixc6deWMj4VcFK4pfeVGGzy4oPa8BRbJMPshPPgotAqKeA3pT6B8pV49",
  "key7": "vB4GUGcVQ8EdYa2zmLFPw6p3HLJKFM7VgnpVMSQ1Af2BjsKFdmQa8UswXnDrgbRCGDJMUfPNMCjNx9Rtd7QGuWE",
  "key8": "2Biv4TW1WYDwzgAZo2ZGE9NNMwChitiCywkdh1f5jawHqVqYq4ik9wt6s4i9oneUShhY1kDRpwQwp3g7M8rwEyDG",
  "key9": "59txbKDsz8U2w3QYqaUfoM4XyZWpgkwz3sdrvJt7Q52vyeu6JAe8P2NhubF29VEm8QqRcnAhN53uFPyUxqDz57Ty",
  "key10": "38C2Em1sTejxAYFzjL66zJupFtrheDek6bSCxY4va239HtkqL11y1aJ2aqApyL2ZJ9A1A4SV5hh3wKJymETX7yXy",
  "key11": "5m9H4FcrdmuetZuogegbssCndAGiTFdwdC8VUKyBQXuC4TiPLhiHeMUD7bcedDcDj2wDEUTKEptkDHjDPDsWdoCC",
  "key12": "3eaL8bc5o2QTN9SZoCzhoD8L9fxJV9cp3snmozpRXyrMRdAN5Pt6DRyLjQSFvhi7ggg23cU2oUzJLrTzPPKLqjfA",
  "key13": "7pb3nCxpRZfbrDdCDhMbyCEyqwS9bakdh2wMcvEeELGz7WpPVqEhcaQsDU6yK4yH9wHok2bmZzsHqfVqFcnorWW",
  "key14": "36f2bxxXXEYVfxADeMyyAd7XGSPKmeV37bKpKAWF4NWwoQBJ3ZbBmJZQ85ivWBo3j96a7rhiFs1TnBGML2AgZgc8",
  "key15": "4oTQg6AaRfxsDTzACDX8TxxjKbJUVh8e7hcRa6ej5WkkQ6z5hDfME1X7Ed4MtxRPVkqdzC9rppBdYHoccPe6TEHF",
  "key16": "c1TVhHBRDHwzgp2am1W9V2wXLSUmBLy8H32xCmrP4zVUVhBtGC5B9swfSRVGFf3gTN4E9BU9bKYh6ARPKqqoHpe",
  "key17": "322ghYoEtLRzQUq2exdARfemY4iZAze237yTdd6coXGQ6FsW9NSZh5kcEeN3chnGe2wznsosDiW7RMHWLdrFV3gH",
  "key18": "5LowarEnmYq4rHb2HcEabH7c5eRr2uE4M3bSwKiiC7GUD9A4kok17x6PZpHHRt5xdQR8TaZoWwrCRTxmDEJctEf4",
  "key19": "4K6kAvfv5X2QUpkb8oPcKKSdCe9mJt7pTJcG7sQaMhoYPKRuyeBcmn1T6siSTn4dx42GNpBz58tBToLGYPdyceS9",
  "key20": "5Uub6Zw6hUYxGYPhd5cJBoMEhe5r16GJsLcBU2FfHcnNuXRcBKgAnGqVVSbqdev6B7eWpuWKiFvKrx9qCVUSz3ZN",
  "key21": "5R9zbW5nTr9ZUCGyLUbfG9MtPdsU1gegmRx3MQiA6RV5zmDn889GY9KG5NtjujxMC3N7pSnP2NLu2M7M2J8CutVC",
  "key22": "5zVWq9T63FjX2ccSCQHQZMKJRSgNfZ2hxN57RGQqqD1HZiQtunE6kDtgpzyP6pgeLkJvkPCURKnm7JiTuzfpbo4o",
  "key23": "58vV3RVcEZAiPVfyjGvC1vCxSNHXMbHDrEa5qgT1eQuqBP8dFmavu3AMwHXsDQDDxsG9DMP86WJ5CaBMj98JXxpg",
  "key24": "5tyqvoGii3TKHeHczH1H8parcquPe3h41rMhWM76UQapNJDEqzsmccTjTXEhurDR97zYsDFoVQ5zG17PYsTkZv31",
  "key25": "2m4c4rBNPwKFSpX28kZEgcddFjXhnyLTi4bBELGZpE5Z4PDwmkzX4yVRAiq5ATjDjzCeK5Nqte5xPkN97WKhn5Mt",
  "key26": "gEjfBV9UoaxgbQrSFT2evTNpUgFbVQbriRWMdTQELfxsdJfLiaKzpkCtSNS7gAxLsSDGtDADShbtrPSpdqypVzu",
  "key27": "5QxqfqjpKdkBULNryvQYC7AZypwchYwsM9d5Mhf8ph4sPh8pRXgjPbWEGoGSsHoxSqHj5vMRgwhNV5mgiWZ8a1Cd"
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
