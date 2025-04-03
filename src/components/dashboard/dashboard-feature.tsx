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
    "67TU3rxeBWN2UZtS3fmZfFZ9eyBTmBHCQFDTV2BMySF9KoqSqFNAJsiWKbFzG78vYV1SzXvEhmCsTWoX5seUxU4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a9KHUMYqwSG74suQQSa8Mtah2BeMBQadWNvJfxu3ETdZaXjjXKmU87iyAZbkHHBuTmCwTLpHJm3MKkpAtZofDLo",
  "key1": "4dSv5rhvRixh7qJXCg96jWnBTnWfXGrZkGZydL73MKhcGrXvUF74fiqhuzD2mf5U6fEXMNc6kszVoZ9FNC66Wz6q",
  "key2": "2CgWN9K5KPspwPyR2s5LEiwwSj9CJoPST35HkjqJ67e9B33wF48o4cmakRvbw2Zu3YhNZtjn1aAf3VpYQiREnZpF",
  "key3": "47eVu53aMZmecAFGRPtccqRZftzLQmsPNuKsEWFax7piEnPt8pDJ2QE2vK7GQaDzzoxBAyZsW53A2UHnFa8qxcNM",
  "key4": "5gXunzXicGny7wkrmz1b7T6rf5eqs9FUgZ7t5LVWqyJtD7CwyH36Uwid5qS3tDrYP5TiyiQsnU2KNT9DgbGMoCDj",
  "key5": "2dTTBtoPh4Gv1qEX3jeB4tW9EyQPawg58TK5EtoCkhNNPbjpG1XTupfFJRxibidoRiX7f8iR9g3jckgNsGYETkW5",
  "key6": "tkaMcZYi4eTFsfUzvv6RoCGsgqtdqxvJW4dFUZbhjqAaHaeee9xnyi9XE3MgELCV7wTRhSVg66Vt9T6gvos4AkH",
  "key7": "r7LQfLt2q21djDjmyRyRUGrrw2ca8MpJZHAuocA3yjvRgCg7Bac64tpAxiGYBASpJVZBTRG5pGXDvMujUvSaMmX",
  "key8": "2nrrnsXA1TP7DZXCiRepsie9npjGtR1QcrJSpEy5w2dby9QKwmLcpR8EkgbhAvNMDdQ6ukFisBJFN4gtcn7BzLDJ",
  "key9": "NeUv8cdWCdgGkP7GHHZzJTJgZVz2JSxopT6vUw3572q4gYc8o3A41V4nDzZn1nkAvZLC9426ynsQaPHcrzGGiTR",
  "key10": "43YbeVVMvJkMAFkCuSmnYrmDKsEWu6S2VxPzofLhnKssSeyWhRMLFfM38jpe1pCHKHohA7p7kAiwwSYRnq1PEUJJ",
  "key11": "5s3LnKUHofhfFonZox5ZU3CVEbN9nYevNnpVrKe5t1xbpQYAe5Sxibpyb9TN3Cb8spnhWruGGwMWQemmJdmNdERE",
  "key12": "5vRhTnQdY83Bii6zEq3AsXmiQqDJHhFWXBLBpwaGaPstHzkxSJdXNaRnwfCbdoWqMKn9F2WoreDxDJnCt6TZ6DRg",
  "key13": "pwYCoJ5HrMdU8GsY8Tm853793xPSBnogTpy39qzi8wCrJke9t82hZgNTXFsiVoUtNhJDTiGNvnZs2YRCR9zPfEY",
  "key14": "2sdi77jvNf1pDa5YUnZ8oaQucNR2Ke43MTB8cZUfRb1qXucGrridw82mBArXajS28nY6vMZCfSVcmSSbkvv4sXEi",
  "key15": "3qj5dLE1B6RbkAVEYK2WaDLFDWH8ytaD6kvWVgknjprLuoVt1T6khPfjYWCuYwpRDfgXYhnfeo8MEhoXWY29xTHa",
  "key16": "3qayXQASVvo7GKTf7smpihyUD5YqXzospmPvuh7m4GdTG82j5DGiC5MbxBHuHVmXWkf83eB3ZPUxeNE61AHogXqA",
  "key17": "64suKDSvkgp9P4EyLrczT2P8C9vxZdt7sgokAcKu5NBYeBF4Y9UQ6ZJECugMcXVg4bcq4kmCwY4CoJadLf5FY8Pc",
  "key18": "2sH957h848GXUtATACyfL15JDEvh2joTyZBJZ7PDLx3UibhEKaZHtmH37HGzNetm9wCi8CVLKWSMUSCVtJF28ePk",
  "key19": "5BvHxgU6N43hsBmwT2RfywopkpAm82kJRWyerewddouZXgRDXYSPytaL3vDhgDTiHKaRaLGxWTr1qvZtYFY9KL9L",
  "key20": "5fQomkC6bqhQu95T9v5ZknJianYakGyyzDANFbTbxGNDoac7gmv5Y3nku2VcHngTfXgarFGfumCgvt6YbWZQdSGa",
  "key21": "5PUypcuWXxL3ZVymX4NbUAeG7igwnvUxkGTAk1XxJCezJcBbJTMpvWtWYEkGNAG7vG1Xy8DM9qrh2tztaPwD1vEu",
  "key22": "2kmSbEcSudVpaoqnoFr3RRyyE7XdNbRskbDFdkYjJQ8sgSKWi4N6DaaheZdcMXPxc6PkShkjj2aovxTNxXShTgtm",
  "key23": "5Bg78dSRgAuGMzWV8xPSmqVCA4SRKsHjkJxAPdKmMLijN26wvL46cuQaefPgp9BPg4ypdZLBJzQpJM9cjbb5mEZd",
  "key24": "67FEnMieigeM7RTuKodsyGes42xEk9HrBXFrfV5DXWUjfWmzxH59YYwkbH2abpmTAprk2TdkqQLTPh3LWj2avuL5",
  "key25": "32UEZXEmWHxhk9dyRMEf32By8U9rfCS5SYteFPcRXuHJWSmkM6P3nHaDirD5cTFjNQ7yWKKknpVXmTspsc4BJZ6W",
  "key26": "2X721Educwkt9hJD95j8PPRhwE7QTQBBQuK6t2SNgzseBSJ3G8dBEtjvyfSsMLsiA5s8DwBs9RdUnpRdLXeU9869",
  "key27": "4xyy8YQwomZJFgnDkR2GhY3fF8Uonk2gJgvKBszohNAVHMBjcv4Frh6VSKYJnwGXf3Kv4MZfVv9zeA6R54LKYcv2",
  "key28": "4s8RSyPH85YEYFDYbEa72WAvX44PEVZKHKjCrkTtSfU8D492AvBJMU29igPztrfJKcEKHXgqDg2DyWKfxpie6uXS",
  "key29": "5JsYxwnBDto2sm5kBn9cMQ4X91DZ7HzADLDBxYk2o9oiYuLpbbPY9nPQmrALDmjRXwNiqf9hfSNtDpabLEdgtR6r",
  "key30": "5rfCrtxqn37i6zEYWwftdRArcr5TpFxm3pQPWULczAzBpwwdm4TnnMZpVTGZu2CwY88vvS5n7BtC13T3A9rTPYor",
  "key31": "3TZxLRLHz2CXgD1pL8wDXMkG8QPX5FhbibdPB3k3dHGXRCj4H5mnbKHyikZ27Cs4JSjBXNPmZMp8x1sDfQiYLb8Z",
  "key32": "4dVf8sHLRDaaZqTHdjgTNsWhwnQEfu3zLq2iPqEpR85LbzGwqXMBe27rxCAeodh5wL59AivovmHjTy7cSoRhrpUf",
  "key33": "273xGBmKK1bmvWZrWMriDp428Ktk3G1weQqNs2m7zLspKEdy47HzgaejL9EcMwQu7Hjspgqfh8cW6PbyQpjjszKo",
  "key34": "3yDjF2YtnJQi2miR5kP4HLdqWJqoG3qkD5mNr4dpjfg3615nGDgeQumMo2TfJL83bDtBxThVbk5UQMmDSYhcPfkp",
  "key35": "5tY4qa98WGg6yiTXeWQRi2gYrunS5uXc5tDJ54D4x15nGU5EATPfVBJWKBHmWNYttqnek3dURX4pHxSaurRY5rrn",
  "key36": "2NQGp8Jx1j5jdu4MGTvf6cQDyeKbe93JGRQoVLE3XoFyfYVniJfFq2CnQvZ3JnfRTghFTx8daQVyWq71oS2uqaG5",
  "key37": "5MZrnrdaWM75Cnp8c9M42eHWDEFpS1kvMi8dJ81xiQuE7ttZ9U5B7zZWSDotUW6EmvH2W7eiHCWmuKur5Cfk9NsJ",
  "key38": "H2R5nCNaKyHBkAz972g5ciJKEXLVaYoAxuBWeguTaaa1ruxhFyUpSoT2mhQGfmCCKWXTkq48LuWyK7FMaGSEUAC",
  "key39": "5Mmx9fHWD82Fy5SKCj1HqHhvvvYDXwGdiENWksgfwJhovudzFLedXrFQ14F1tAGchEjUNJuUsGfJ9nsVtfvfbJdX",
  "key40": "1xU9Xe6H3GtvK1E8MwQ8DYuA4NWify12cvymCVQPzKDEdnKkzPY9Z5rhug4nkZzUe2p7VoVuv9Uw9xTHrLjLsPy",
  "key41": "5C8ndFyPEP9A2o2qgzGYQWFesn9dond6MccLoNGfYYrTJqRr6sMXH9Aui9DdUDV8tQuer3TkpdQzzeaTGRF1iX8C",
  "key42": "4fKNrf7KkkT9FARhrK5NHKojcaA1rtxZNMx3TBKb1xFKhMBvW3KuP7iND4wkCTM7PzgKwLgctfoVSkLuR8Esa6HF"
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
