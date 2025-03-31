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
    "2vvwM9DZjT8LyrKsQpdMHSGxtS5QvL4wkWPVDCLVLR9Kz251bt2j7tjHPxNStoqeNcFGoA3epZXKD3UnLJVrDZes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lbp7CKPDW3NeS8Zrz5fitQ6RKf1ryWVRh9YzeN4cpRVTzdnN4KHAHmiRX5p79LtrAs3CjSCTEutyUXy6jWbCegF",
  "key1": "cef2rSeYdFoY7RR6PUY3hRSTjvtuSKfdZdcj9p8Pzj6F7sSu9YbHtvp4UpXLj5MrMqv7XYesmLC23vjzGKUcMQJ",
  "key2": "3xznAwvzryJVLVvGULEMYtBTDUJEp4XiWAADwvnKQqkGrmcuEmExiFgYwR64m7kSQspr5AB4RFiBw23TPyCrSzmh",
  "key3": "pHk9ciJyx4J9TesMWt6rwdEfei3335akNqQnuponxeiBGcWdBS13S25zRCgSV6YDaVxNk6iySx3S1T7cj5sX9bq",
  "key4": "27gkBTrmuFqPuSQWJFvb49hKCgjB3zQ96ECjRavTYP69LhZDrMm7a2JPFkeerCcH9Ato7DsPb81meWJe7FqrAp3N",
  "key5": "3FZw6qWMgBY1q4mNVZCDWBDgyd2dTvd2ypsVgmtd9113uE2xwFpzqxHc1mhzkiKfNiZ51WVX6fQqsTQ2UzSGPETJ",
  "key6": "5jUmE5AxJXSd5vNpW9Etw189CWLRKWD3GMmDnzkTGNTFbAcHcrEVZVUb6DrFjtMoE3yhK6ajzdSpGqnh5moKPRo2",
  "key7": "3b2bto9uZTRDCtxY83eTXWbd1s1sTU4BhVZMZ1K12mtyT6wEvdkrmr7qhTA2wqQny8CNaUU9LJrL1vW1xq4rUfdw",
  "key8": "98YQZFyAgawtXzvS1tBTFFumgpXzgZrJiVDfvcRrHvtdUaG2w2WJpZXvdRfcUkzRDoFWpT4mXSnXmJtHi47i2Je",
  "key9": "3J4ZpKt82xhphpiMtS5F5YCg62SwxF2YDyuN9pHovx1i3nmyKhZLNrxfZxNHA7DUSFWw8NSZrFpujtRFMzXLDR5z",
  "key10": "5GnBdQ8Vwkec2gSjYurddkUnse5n5ivkiNRKCYPsvBnuEugby8S2sThzAtnsAbE8hcYjFzTVfUcKH1F23aF6rCzk",
  "key11": "4t5Q6PYJwm8TWArEwZbbsVwkuvpQstsVnst9CCRJfmeKXxNgN35A7T2moiehLTsYm4FN9yhKDfZJuCBEvQtBs6jf",
  "key12": "335dxNRTB1ZcQSpSUUuHY3D8MWjRWzQSdmeSnhe7HCm3qy56HopuvEyWYRSY3o26nF49jeDsQfYZ8ytydQnmd3rC",
  "key13": "4c8max94gQnB7ctLM8QQNt3KKyUwoJdwnZSxr2RFT8hfZPRXRztvarTZ9QTA9Xrc6bBNStJWB72TWTiqmfFGW6KP",
  "key14": "4KbHFrmZCSJkhkLNDYALA12iKDMRCKK8krYqeQkhBS4jAGSE8Sov8JbSn219vyy6f3rDMeC8xV1tYsx1Pd5CBHpg",
  "key15": "5fKDwcBKWX6FXVZTDiB5MTz9ZDSxmd1dLB5K5ziejd8cLh48MQNMGx1vQxSzcqCRDyUJHKcyBGcfmPxRtYeJFcaK",
  "key16": "41hefcs2GTEfK1kKExBCdet59acWB6uP6bMh2DAq9D5E3WuVpVYsPR2pkZMsaqhhR1CgLA8Yzu1GTwRzE7hpiiFF",
  "key17": "42oc6fduwN74fYksVU2dgCqPHXbZdTGnaD9ZsD8oT7V8LLPGatvVJRmv3dC3X45QX9DC8pcvoW1njoKTjztSEWS3",
  "key18": "3i1bPnJ8CaqMsjSXywtgXZjPTPLRvzJgEFaFMG9sSe25iPY73Bcd3myEzLBZMS9RN5hb2WvpxnKTK9LHX97wfHKA",
  "key19": "5owW4dqeVJcUjRWKhE4CqPuCfvGhMqeww1gMCkehFYgTH33nv1rMyqrzTvqpHmc5oxSaxygd5i2LqgMFZ6gcncPc",
  "key20": "5FCdK6KMp7DCUh2UFG6XEEf9WyeSeiZ5HjrrixGxZb6dugBfbr15ewvDDBjjht57f8MNbGVM2bCjqb5wyDn6gYRN",
  "key21": "exDt3crz4ej9C7o4o85vQkQEC722E3kweEdJaa675G8gaaCiY67T4GmrMVJUWvncBGXC2xRztAKErT3oc2mgKDV",
  "key22": "4JM1qYWNBQPpxnYfEArqSYZ7jaADuWRR6t4WPgrHtvSe2ARRJ6jTUDmotaBtBbRQJ3Cw76H5fLsCvCbzL2VYfYmN",
  "key23": "53oQGKSb3oyTCBgcrNXMDAF5X4iVTbMDcbaqcvKXc25XVMuo4WdufbfqtQJ7XYVZfP4hi2g7f5Bb4EzaNv9559V2",
  "key24": "rVbNmyPd97642RZrUvedKYkqk8Pp1rwJptRGwp7MNG53YZdnx3fCKRP7DLQCMZkMJyxfAWxwjwxbKdnBa5GXy6u",
  "key25": "3R6fM3p6kHKGeRwNofMPxRUQkt6JW7AuYhegxDRrSGxJnNrNw5iqHtpKCP6KTbSUtmUM21Kuhp5dbKpQwtJkMoJz",
  "key26": "5jmJqW1NZFo7TDuc7YFxXrq5JDUvtNXJd5R6AMJZjwYBWGtYunNwYxyzWUha3c54vNwpUVqRo1W9xhLeyRPqBFHL",
  "key27": "2jQdH49rtKYHQDE441BfcPYshid2sFkkjrP6ATZWS1Bp19ztAoZ2w9A4jtCV1CN853RzNKTMBBENnVRZi1tjh1ef",
  "key28": "58rTFcxkJJGxdxBNxeAC7X6yGraM1Y775YH62eKU4AW82QM5DGxyYF5r972AjeGAKPCPQnnY9X9Kk4uiUj8FzUSw",
  "key29": "4D93du1D3L9LqJ3FZTy6qa2obNpk7LU9aSNCL1ckRtyzygnFPFEcxaLUFBCmtdPpw9GbnVZGvFUzXdwJj8iCRtKi",
  "key30": "5wBR2S1cRTB8RXiSTcCPa5dukNb1KKdh1RUuNH9HkaDBES1ck5zCnQyZKP49yu8QaagbKiELCNzRCCGLD3U6uY6q",
  "key31": "SWu59XMFwgPgXmDtNnMb2CktqkRXiWFCF4d3UwCmVEcW2cXgxCTJsRY2rKqayXi6E2L58v73vsxQZUEH8r34Ufw",
  "key32": "rwDKMNiww5oMSkyYxczikX2CVjd5mu7Ct8jZ6vhgmr2ssSWNZAutCVz5giejnEnDoWvxNKvQSPgxje7JHbQ4agm",
  "key33": "2ya7Pb8LeVj2qdqMUsSm1npeZfSappZptsYt3cHYxKmRaYgLhADx7xxSim4mSak7b3onrmBymHzxG2YcbkT4PpMD",
  "key34": "dK64jTXSWiMWjAsMRjrMWVcaFAnncQMgYrguMUmfUh8ai15ay7WSKxydiGfktdcdifUx1MBVR1xzCfWwRHJXt2X",
  "key35": "2Z3r3gi3wStvEJ5UAFxvg9EnbYbdsfcH4hNyfwvVyNpfcnCsa6VNGb6VCzonJ1DRZkMaJcshb5gLPvkVrQYQ6GQ7",
  "key36": "38m1Mz47RdijRez1weERYB6wY9RLpLEVv5E4mwK6L6nXhKEXwAVU7rP6HBsNCDf6br5Cnj9N2HeG6WgPvVRUXUZy",
  "key37": "SiprcLN36xYo7hFyUWiV5dpas829KKa33RH2Dr5QZhAHpdtYuQ9Rsf3sRFHm4EEATeZkq6k1gSFQLYdAtYErrRA"
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
