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
    "5VV1eAyJ739RZiotwLRyL7ZijrKUHr7S7NwdMVE4dELUHhrcNV7MpCQmDmKhgV6LYHgqzDCmzMNaxjXnJLcQFLPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZNAWCM2TwDhzZg4FPXD2zqLtocURwEyiFapraKBJYCv6VkzJLaUj1eGyjyyf4nZRd9qBfgNS7WtRSG2aWUCZnfy",
  "key1": "3u8ALo2rfnwR13bKPNRcQhxegwcknSiT6gUh6fF7vnVG1eQLDrZChhrk5XyC9xbaRF2smTKozzmpeuDKACBzVpXx",
  "key2": "4GjC6tpoVUbFjPzD1w1oHpLD1QG9CvVvDCNujNYLKBambdCEBSPAr8gsgfPFzobe5PtoBTTGAAWBjxmQuTsqgoeK",
  "key3": "fTUkWuEcgUDYivN79vGFts82WMikVtmeh8DybbPTygPbWVLG4uwwd14ysvgdqh9MwtY3NFh9HGa7omwcim1rba6",
  "key4": "3nBbNjCvgKMw8siorJC2oFbN9hG8G2X1B8amKixAwZjjJZL5EjPcDMK89SA7xfxBVMdNrBZGRZ6iEzL5tq4X2FLK",
  "key5": "3AWzyYwyu6hVWn3LimHTN9Saqc3m4351Z5zzco26XVPNV4weEsFtDGDMTY72JiQwEWNbFhTH1BDWAk76VHfTGNsW",
  "key6": "2qs7ywdNvbhydjEonKHkQRNmqgwtMtZbFYyyPsgmdrWKDKg9FWSsHbeVXeiccuSbgeFjRvwUJUz7meFSDVyMefm5",
  "key7": "4c7PQrhLVTqcHh5BEjiBEsvzt7GzZhWH9A5dQYYH2PXgXRMQ4fhysTx1VFMxoasigPqN5r97ZKiERbGnmo9qpcm7",
  "key8": "2AsVhkPZm9crQRiwWh4stmqWB3MzzZao7YgheKHsFtAeiKffEKYBQzZJWHGhdhHXbysXipGpsUfk3ZdSrCf7EhVm",
  "key9": "2aqgozjrr22Esdj72Hb9fDxAEquJeND3dJLAToJuhJmuVHpgsrSdgng1w5sGYC2efcJriFpNFSWqJP8cXsqbC1eh",
  "key10": "4stD26ndX4j1kUwaXZqGJocTjzt1qCZ5HP1ZFvmhQHtZGWMF8eLftaAGkkpjLXZn3QNWRxtX64yDBPYKdQtoxivs",
  "key11": "5SdHRkcXtjNJLdtHU1Y5PdQZk14VjUpXmAaSfug8w5HmArpwZNGeQaKy7QXdGoc2sh4y8zZ8ro1mT6Zh49ft3zSD",
  "key12": "4smc4ePr5uR2DzWSkskQh8x38g1SXjFs3hmtdP6bHch6WCvTHptrNBjMJy4K3fqJ4FhexAwszWkypDdn8wFap4Na",
  "key13": "XEuRnrCxZHRLqpkVHQiSXjnHzu1ZV4RJhWzbWLh6XusCrwkfRB1x92ZBsQRwTh9Ebrs3zKnUqPciaWRNfhrUCsb",
  "key14": "2Xhna1vEs4LBgL5vjYxTUupiYhvM3m7vFdGNhyHpi5VrzKvYKkniDVptfhuUcwFpB9AAfUya8kurDN2vgFJrfzoM",
  "key15": "tp3XRWjX4E5ZBK6AYepMSriYSYiW5j31iQJHHY7ntFcfquikAeA3waxu8vuCVd65bvX5rgoLddUDRbYn4vstyAs",
  "key16": "5gqnpJixxAbniz8kTG682cXUoKM32vaTRXtFLyvLuMpMWNa3bS8WUrrxLBGTv6HoL32qmvUFxTN4yqPR7RaznZtL",
  "key17": "mYd3xCP5YBLoAHEzjvHpT1AAnnAYmtLGa3MY3ip3zvUPAJ8v8nEDntVMWYXLdirDjJn2ruoGKVa1oqQfvdBKovX",
  "key18": "5WuGQpGikt7F1hwwWvp38RVoTLUeJfXcwcnvYuMaDpVBNyxm1d1VqucehTRG2MRHRvcbSnSubyh1UJivnF2dJ48Y",
  "key19": "2ucBgW4YQgMVkLa5TvviNCh54ZoKHCRyJC2xKu1rvNhgVVe5UWEK91EycQANPhW6eYy57EbQLH6Wd3QRANdmeVRr",
  "key20": "4mf4t2Q4dkiWUEwmvbNsVwyebL4pFhBdzY9dhmfbh3ayNX9vvonhuANjLUApkBB9Rw7hKVQnA7gKNHzMkSBVNXos",
  "key21": "4dTTTUccq3HU8UBKVeyxCRCmULM9Ps32ZZhJ5mha1RQ5EL3kMN1QRQRiiq383PsnKxGNEZJ5dd6s2W2eZeWT9a1",
  "key22": "3oPgdt64HC6iM41SSHeerRGjuAiNswyh8ciZ2BrPoCeiV9yyHVpJ7vTBRG8712KmYMRdvFffMmcGF8GUaFc5Ke2i",
  "key23": "4xhhs9E3GS3f7jat4qaPJA5sSt6uMxkPTFgUCW1faKg1yXzVchxgeyPw7aBdoRygZGCVxUKELyfS9pXTbWKyHfpR",
  "key24": "2TxJZK9vSa9DbHaTy5x9eQTcx4zoYsRuztQ7tqKrB2k68uZhwThnQqC1VQrS7VQh9Au4pYqQMZvi3phSTJmGgkEe"
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
