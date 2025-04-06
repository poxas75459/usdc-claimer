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
    "4v8n49UqtThWHyBFrMyhRLVvpb1UvyqdMamDnwdy5FguPBtdemsmYBe9TzipxxHpMJnoHwusc3h3nokdgDkigMYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bf93fcA846QwpaswLdUQWm2FzJEByNREdMAhRnDCY8wyypzC6BkEmuQRUaZJWR74ehazc9SMTNeEnUJGWRVpV7V",
  "key1": "4uSNhRfKBKNV4QomqZ9QFkj4SmvvzMadjPsWS8KTkDEkBFD4RX9NYxhbtoymNN4N4zfv18f8LAgDjiaoj7D16Bvw",
  "key2": "2vq3dTQUv94V6eeFuRHiJBhWnsyWWpKCxeFBUfpWcDb7wHGM7JHBLKWpJTyw2Md3mSuu3MKbuwLyW6PSf3rEWbfJ",
  "key3": "3EsFv9nxjTigrGjsVnwEaUEoATXf3n6tjwPghLVaknMJrsNXw6MwuiXJN22ZGdmWk6pGUKJLkTRigS3fquy49MMT",
  "key4": "32pAXYPYJoRP67xkjboS8fM1xord6Ynd2RYweGzx5phDTXB5U8z692eqAfEP8jT3qaZhLHb2ttd2mR3vRU6CAeeC",
  "key5": "5gxNjcUSrCW75qV9n1xHmUrczEwtwDe1PrGV5RzvnBRMTqnFrV7h4YZJfPoEd4q8839P65NyedQuSQmogdoHETGa",
  "key6": "e7pzbz1BZoQTzMJqcRbJ8S336ATS9uFpoo2qvNDub6nQQD416owPDnRbKVjKuuEtf2sokb2mkWXbhg9fGVd4LXL",
  "key7": "5KE4v825QnF8Zjar8NqdfbFNfbbwmVXde149ZDtgq6q6mrsVhm5Thg9MNuiwMAudZyZybFeVh3r8Kg9jLmiiV3nX",
  "key8": "5kYSjWXSCB9bo1BM7hVWyeVqwYeXbjC6i4P5cQbWPJH85kedrR1wL4c2uSLm43G7uQUiKws8SMws1BuxtX2b6gbL",
  "key9": "4dr59fS1F4ZweaPWH6uoodfhmavTCs1RFfLn7CcoSHoM3uDATZRmyYz4Ue9P4AV4kZFqPM7CiVF4mcztuG8McLma",
  "key10": "4nV4PvviYTyP5BvNUpADnTbzzv17g9aPYFpzjG3zKe8c7rhoEMhgZziQiubvXqzCCj6No8sPrmXVxumf576Efrp6",
  "key11": "237jzB58V4xbpWHYbgUSBdakQyLeh7BMG8wSzq7Ju92QzspHg5ozqFu3XERHJDZJJP9yLW1koBVuhHDSkCZGH2Ro",
  "key12": "HZFjaKc4iqtzba2MCjTf7kzmbrcE93WbaRJ8N4VXPs4vNdFuVVqQw25FeMqRE6dyH2nyj1MoGa9qQm6wQpWZM2S",
  "key13": "3dXSBw48YjEZt95AHDcGZg5QXkFypr17ffNPocFeDVEioSF6fnpMutM4LyrHCcd9chCCum7BEVAYX1CdwQwxhWm2",
  "key14": "4sGdgsm59KfAyHGrbeDiS7xL9dd5B7gvcX1X71Ayvz7b9w1u7SMBKbwawsp4GBLvHT9SFVTBP93ojxkNwNLi3Dh",
  "key15": "4151UwNaF4HEqbMNVnDQFWNqATMGpa5CGLgtm8cEZdS9aJUyCVqENFM7N18NabF4dJW4i87yskpiQzi8mzKX7z87",
  "key16": "wVBKucmT947o7d5CKj5R9FPGqf3pxE64ZYL4aA9ybFL2ovSG4CV5MwT224v5thoSAMDnHesEH1iSj3Y78dhb4mq",
  "key17": "2YtxTecsS8Qp5DqBn4hVGVwQMPZji3hP8sX8rxhAskK23VQhtnJnY35b71TwrhaWUfsDnzZbAMWSLGsPXr6ARZVj",
  "key18": "UDDi2VovFF1Zjzm1LakyyJmmmRjXia34SjLJJddBEx24WLwsqe2Lgf9XMFpCtmXri6Swop2u7sVf2rjEhht2Xza",
  "key19": "46VqNzm1tysAn2VU5LWhAF1pgRj8VkyePFKfmvkz1qB4B68PwHNPBZaheZf9RJEq6fvC8rwwChkDetiJxxtur9kh",
  "key20": "3kPhmSw3WMkoEBaG5cNj1as8mHSBTVtGBJRZiwsFMCot7jnjRQuHCFxR3saVwuDCcQYECcDgvKCPuMDn8CvWzfmW",
  "key21": "PkmKzaqG8B89B5zi9ZQ5ucmP8jpdbrgYfuwdrUYZbpMCiFKqN1VKkJNzsT14a3sViAW3MgQ8QQXnZQ3HprBJ2cw",
  "key22": "3RZq8jPhUZdmaMh34nYga9hnZSaLCPehNGfMfwAhQE9xrU1jTZhcMsYsnt181PcutQtFz8fN1e8tCFkhR5Ahyrjz",
  "key23": "41kmyr6qeyizLBs5iGCuz5Rv6f1PpA7UNFiKTUwT4ns4VXi1nHxVeLcgCMwAa35C2KWS31yK1BkMKMjmopxoZiqT",
  "key24": "43gvzJzoMWScyV3ghzKkfAZkiKN811fkYFdqP7BHrLWzMJWoSwwvoUgBXx9zJpfCVpLo9xq2jSAPjDnnK2voyYYT",
  "key25": "4mVi9NMgoPCsSip1jforyKSXzuGscNsiBHEGBH7QbSSDnnAzVsRjbr2ujUfCUKqcSW5M5Cb1HWnpX3ZMvSry7C2D"
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
