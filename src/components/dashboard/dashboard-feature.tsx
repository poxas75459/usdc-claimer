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
    "346WcFKng6TwZ1xEFwC1Y1arDzmBvBYzRPQL55ED8BcqBqSgvnUcn3er8GueALA6xM6tQeTbX8RaQPd1vTAkp3Mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WLhW7D2tfpVpENecU4T7tucCzzAgqvy3GPt3St6AM4wng3okm31Wb2q3WRQV1Ku3SKsxyeDwPDNSzhDdCJ2aXNF",
  "key1": "3Mt9pK5JV2YL2V9JZdmS8ZmZUE3R12DFtfHhmYtzKszv3uNEHd19Czn97PKzmr68fZp5jtfp1u5CF5Ad2e1EcdT8",
  "key2": "3YfGLZDCADNA6677wgqfhjBc1fcoFva8YzXDTj6mEGMTwksECC7SRdQjgbfs8EPrs5fwgbenGp2AcM47hyNbobDz",
  "key3": "2QQUUKJeFySRGtRvBzcSamuD6UqwkSKaAVAtYSot8wZTLYbWVVcN3nwqUDvwJ8pT6Bwdkewx97BhiKL8XAdPs2WD",
  "key4": "5hNw6mpJAzVCWMniH9hwE1ZQ653rGD49YwPq4eG3YaSxMnLr2KRQ7MSEomjuYw7chWYy2bk4SJXkSsY3GAEAzevb",
  "key5": "5mDxdQSHP8bk8HAJCLv8Z7Ffr5pvHr26JEtytz2ygv6pUavRza6FMX3wdxUGRmYFgaBDysRUuNADPsg8CHVx3FEh",
  "key6": "2R13FPkyT36jWPP3u3bjn6DgHSScjU2CZoXQoyReoFWuP5khh1bBJ3wUNycTFBDNcmZJn7bRQoAZ6jvTS6xcMVVf",
  "key7": "3VJeDsjdDMv8HyGDntnTtGQFQmooYMr8pLe1sjpMF53DYdvAtJGtKckU8d77WWMMRxGfJqe4pNVHRSqBHVpzNdJa",
  "key8": "2ZGzrc8BPRGWEpEP9HoWkgXAYLADz8KDUTFa9BokdR6dm1Y6qW9kzg5q4YYV6xdW8z9ySKh54DYnF9oYkLmNvN6S",
  "key9": "4hVX4fCf8vdGSUkde516MPMKj9Wg1kijKw7SGX3Uor2fmzD8gW6nJrjwGx9ZLQXTE7W3Mz34vBnfR1ZwtGBgMja5",
  "key10": "3Ut68bQmBewN2eVLUEtsDBxZ3LE2jjDL54ynFRXfdeSHiNjPGiWNzcqYhgzFdy7Rm6RdZzYAiDHBGp6A9VupEMca",
  "key11": "4ew8s3TaEfSBDXWGEDLrZ9K1ZTuAX2LRRKEpF4Jm6Acqa5sj4Gh2ofy8uZKiD8f8n7WcamvMRJh8fQRUbc9KK8Sz",
  "key12": "4MCXhEXMseiEX3kaj1mGvFHyRVQJJ4uEXdSVUSE5F8naDU5DRttir9peJrqjUGVAfUyen12KFXWhQ2gquUpKT2Li",
  "key13": "45TuRJFmXxYEfEhCDhTN4bTKGdVZbeebg1kfy3FRzijia6LAH5mg7CrPkJixyCVHSy2na6pSS3s9ZwyLigzurY9j",
  "key14": "oZnh8PGzuTFpx4ED8PsCn3hTvgHZrVw9qPQyePyFeFypcKjbGrP8hhpnUCkPX1tSVob54uKKasCNXZJzovGgAxT",
  "key15": "wc7imhP4UcJNJLvH18LrdeoK9vBNH7PyjoAAH6nLp9t8U2t6tGGJJvVZgxMbnuWpWejjzs5HSsAWRfLf7aq4AuU",
  "key16": "3okcV9saSk5kp2PYoixaNUpu7e1dnd6Fz7c5ebzm1QszEufQQHJ1oCpUw2o2NT5gzuJt884Q1ue8jChByFmVy38G",
  "key17": "2HKJyR4z7mWi3gKsLHtXdYAUmJ89nXYbMc2w4LzcpwyhT5xAfrGP7A6HXwWxGP9iuGnra5YN62YJuLAjaV8RaYLE",
  "key18": "3HTihfSKb8uFYwrDUQ5aSyKhg89v3sKkdXh6bMaGzRw9KEmzYGiLBbgsHLdCXXy6pVCNHR2HMr25oPydtwsQ8Lvg",
  "key19": "64FHCc3GvvSYJi9LLYSARjjLD21mgb8gadxNhCEykFtcWLusVEqqGTQBmKNX5Pt6veRtzQZxBoeF5PEvZ29zLLCY",
  "key20": "381f3AQE4oLfCwZRFj33JLwCj7t3YBJ3rm1yQ4VbiEK9wRfmuVCA9crT7VvQaoLfAMYSHjoLwBUSZGtgRF2CkB7K",
  "key21": "5UXWDf8Zatoua2oXkXxhSUq4Fmp5VFNy3kAdat6uoUj6xJWKWtwdHKPf57qXwrC3eFvs39zvNGcLXFPVMLWonpjL",
  "key22": "5NxRi6UQ4V8EhTB4WHX4tg8VTQVvPQxsep9KyKzFgeWHCDQqRtDtBdn9qab2CCmFFiXyHnbYQzNe3yTUmcjVxnw3",
  "key23": "TwvfRUB7Sd3Ahpe3NLGqnLmkXVr9bGa2M5PpBMTgfPtA58MraFkfSgHbaYWR5uiYP4GLF7HW4ct9pL1J25m3eBx",
  "key24": "5aGoxPd2p2c54PVDtR85bV6NTrdzaaXsoSjPMGRkXUkVkPJSFaSfWmtEXXY2dR1HqRrtuJdUx5qzda3fMCEVL1CG",
  "key25": "3e8bmKrug8Ufw2uFMh2S2e1g5zR26rfBderi2AnBDJhK6SR9BYUY34Yeb8D4byt1jQZ6BwgTNHujA1ZSD5tKfvvX",
  "key26": "4eBaZViC5J1DBNbsYwo4Sybok4fdvGWrJtUjrFzzoL4HgkTtqrY3Kbr9gSNuZ7uXErZJy4Q9sLPrp6UcrPbCyZbj",
  "key27": "5bTrwcoz3v6gjjdqTEoLwTnwpv9Wo4nwfjkmubte55GjLfm1UXxZVwAEdTHKfSTx3oqCmbdNRB5E29uCYXU6mvNR",
  "key28": "8QA2cvyvDJMVCdckiAMtBMn28DzRYWFfZWTJSvrZix6mqHFGFS3JWXPe2UFGUfQBxkLpL6j2cLicYeSz92XeUyx",
  "key29": "V8PjoFvqXb6qkP8xTb7BTALUh1Rio6qcgC8zMFtP4aQGVnCfJfEoyaF1TYYHqEcRNjhWqEZ7eFuxNhQso8C6Zp5",
  "key30": "3TzSuM7P46pNiYRkiFZv8kufmtBbhtetexwszoBusKpqaSj7grrXWVbfsJYH6iYeAjvazqwE3naqL2jhZnaAKoXF",
  "key31": "2VuaRrb8a2Xw2PHouo11AjH3RaUbSQZBkhKJGJrixSiMPs6aiUTVNjaxENzjhQFyrcRV7S3E2YHYo5ZV5MZryog1"
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
