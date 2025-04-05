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
    "2nuFLEWEC9sxxB32oV7wuf4mi4Z6fVsQPKA79dUfMUJHq3XeUxFi2Fxni9dj2YaBeQ61SjKabgVZN2HeybXa7QAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bg7swgKoVyXcEdEPjtkGZ5WLSXsSmyMLu5rxWALYZ9PfXr5oJsh8gwrBdsRMTZgdfpKYLp8WA9Ty8qsgpCGSjf5",
  "key1": "5MgvzEZMgyQHwnJmj91DM49KUVqANPSf82pMzidYqXx7Y938jDh8kGDhwvKHe53gzTUHHMWGjY4vNcmMWVzRkpJ",
  "key2": "Kf7E9JsxnTqVJUnnUj9tFU1cNgSumxCP3Q5oCrHt4ywk42qNPuJsUev6BJx6ADoeWvnieFvgHRPcFCkkUVaDhqy",
  "key3": "2rpSLATQ2oUWgYEmcjQEpLVFptsrqw6ZaDU4p377dRnsQftdmQDdzPM6igGqN84F7zTAi4hru63zFHSgp97owAYV",
  "key4": "2frmfSwf4PZBBBA8iVdoYwAcJhVfbn2trtmBW5QYA7BxrdMfgmsQy1QMzmJF9k9o2LerDxVjuzvRRQVLyvhWjRB5",
  "key5": "61maSaXrVss1sQz9fxyCwqVVyyLCXcAQVFMW9JHhijzPxEEWxXkiwM4zniZyadsBgNYwF7uqkCjA7QFLmMYSxcnP",
  "key6": "5yn8xw9FHBxpckmSPVe3c8hzj7qaUVJnrP1GgSD97HzaU1kmeCDDLaQByVFriN2y9RS1Fcp1Vf5Jo63ADpXxJuL3",
  "key7": "5FtNtjrTeDKufBdfQ7ukwmBFRQ9CMhH2f98fVtTUoiL7jXyHBhgAPCDWcZcfv5LXJxtyNS9dsnqFmDrNVWyxEK9D",
  "key8": "2JEeXbs6bwhD3DDoPJS3kuabxcmijxdTnQqgbUJk13iJQiv2p8pgiLbAv1Uzs8a86cRVCyZA8CcDcRWzVuPZCAaj",
  "key9": "2TWM2dpxCRNTQnFdVLrWx6WjW6rmGAZNvC92VwF23GthdNJ5dk7X7tspXYnVRwD8SmXjaRGawon5FMwP6sci1tty",
  "key10": "5tkfZ3eYvFpXQAdiynr17VwgaakDY4pM5LPdy9mPWu5Ykkw3HndVS7AmuGup2Gitu1gpxrCCQC2HA3y55T1nBZpi",
  "key11": "4fiSLZo5951XDg1AdoMW2iVENV6mmH3H3K99FzWZ4t7ngGxFLDxiyfreWeKpZZmMmLt8MWTL5QHFCKMw2vMN36kz",
  "key12": "4LXLWNJWQZ1YYNUKS8ba7G3AdUebz5nSVjQFYHydjsMNSXUuUy4RQfwHw9EhmHcZCVgS3T7tprRYbcdTgcMTszCd",
  "key13": "Hpcv7rBr8rrLRRZXaCKuv3uhYmZeZLxhjGKfVrVLR1h5xQx5cdc5wbERqY2S6V2w3hCV7DW75arBgMTLLWH5ZJq",
  "key14": "4M1bjncN7HmSBWygTqYTzsgm5rPhVeBE6vqurkxDUVxTwfvxQ7wWrExDfqYwbAiczgZgW6z5m9Ltq2aJREjp9A7S",
  "key15": "2AZY2RDQyqQEbRiK1w1E8ntesfzruUVtcHGpA6ogsriN3sDVhoCxd3qy4ztDoghrnbq8SMy5HdXCLN5zZ4VciExo",
  "key16": "5Lc6ompSCMXetXdWKYTVhvVDEAxj8ZcvLjFyr7qmRn9nTC7amPtoQLW7HAFHGffa1pDgNcdb4tKTAMAKnfvtY4Jz",
  "key17": "4v1SW69Vb4fozprCC7KAkoJvRHQ9Gf3cEgDwqbKeDxcYuewV5AL7Ku7nfNTzCcmxi6sqFV1wk8pmUrwcTFj7ZW9c",
  "key18": "rjDMCRBRSF8U6FLZHdfHQ45MDCA3gG3ipFPXRbmqt9GEqrxfMKDv8dDCDn3J5h6fmHcQuTNsyUML2rtpAsteVam",
  "key19": "3R4xWZxBrVvKDB9yUj8218x6S2oEjQ2cNA6BLjLs4qg1F4PXD4mKrD29zJHthBzLxmX8xke7cFW9h9NDsxkgJqgk",
  "key20": "GLowro65N4FZ3aBxutJ26x6Nbq1DdtV2CQ9dFL7xVpNAJew1X7vfn6D9AbzCVHbh3P2J15KnZLoEKybQkuDS2ER",
  "key21": "2Q2Eqw55mPPBFSN5XY4y2S5EpEsZ9f7WzoiH5iAbXwxyuysK2y2CfkweEYbgZg7ZVBwraPPGksDNPhcVLhrz1mFu",
  "key22": "4ZwZfb6FDh5fcSt8zFr7fFoa4xHQx2n9WcBdL3fQVp6s3iyMrurDGodMeNrVkfARzW7TnWTQBo13Yrymy2QtWxpB",
  "key23": "2J6nVVgTVh5fcsdeKCsNummYL1k2SKXWumdyiF5bsHKgNQH7APKHgWTmJCHgBpeZiusVPs14wLKBfWsPMWax5nYT",
  "key24": "27CN8qEkMMRKF9nhMzfYM4gB9511jBSCVZucEVu4Q6TeipmfmPkybtjH9EeqZLzHiL3zzjnoeK2hpX6HAYJbXrnd",
  "key25": "4DenriNnGHxSX93qwPAXg4xwdHo6aELStEPiTQQk26Y5A1vZJgafrDeVyvcgorRH91vf45oDVRQupuxfyCGjQ5Bf",
  "key26": "tgWUcQFLpD8WXCbxpte6yAgkpowxVrHH39bbiyCn2dycu4V3tZBWyQogprNYj4ksJdRZ9i1k2GJo61ZDocoNufi",
  "key27": "5qLrZjcKompj1iWf4GaDhj9X1JMcZjwJhUKnQD9uXZUVmJVSv6km11fbWWhdhA5kdfH5coriDCbuwUcMYXTx7PeA",
  "key28": "4NbJ4gU8ajhoBAVBePSAkEvmpvg8mGv9ScWLvWzHpWb9dWUvDj6XUHJKZeT6wgd19gsVw6kdRSagJb2mKspPGnbK",
  "key29": "2uBgtm6zn7rQtr5MdPkyDMRysKTEgNE1B6bCyeg2BcM3SqzXLn7oczeKjMa57X45ghjuiiR1ERMTfnP8qRS1Xfek",
  "key30": "5vRxWsSm1eQzSnbEt6bj2KtkzvfHcyjwPSqA6FJMfvZWeYhpBqwGpytgtkFNSj2s5xgT2caNvamMF1kMutVQD6Mf",
  "key31": "57aK7QSqet1oNSHXPN6T3HRc9vc6jReWcuWndPbHN43H4FPfhw3drgv8EbqWCnYkgFAGYr7p7CVjoq1h8Qi3yZ2t",
  "key32": "3S8DK9GL53ESoLUQizuN4xveSu9k6D5ufAxJFXBaWobBmF9k4nvibEMJ5TjJuPhnCNU87b2vidfjswucHX3ijWj9",
  "key33": "3zQjj3vxoSEFvS1h3b8qLqQFqxGHpVaSZgf6thG7vT44FHW1Pgpgxy5YcszfVJ5MipgpWNjBh4cwca54ihF5UT66",
  "key34": "5Lh3vA4B1v7QqUjLwAUPkamW53UW88cgDDTjLVqYPJD8HPeAoupzKqYvB8hgwuBWGJj8hnw7DTK7NpvgtAYMiuZA",
  "key35": "2ZKmq3DZdFrU4fteHvinyroVKmxgc8HTGmhsoZMH87jvEGthXxmQbv4V4qffQQxEJTbwdCsbRj8iQASkSsi8yuvW"
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
