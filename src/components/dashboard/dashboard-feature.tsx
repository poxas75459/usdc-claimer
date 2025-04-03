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
    "G6hCYKTW7iJagZknUKzRe32bp4n4pifXZr5neajhaTM7UZ6qnJif3D4GMioHyKXbBkoubfxJ3CoEb1z6PiN5WQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36iEAYsn2eECR2DRWXfgGwoHRCf4uX2XdUKYYY91iUEiJtrmrZ2BphVMGEt1NwH58ybz4Dfc9sU6q4dxFPfYQLNT",
  "key1": "2JBEwe6sZg8keU65do1KkRfMbBRaVFch23XmXke9UEryRps7QxePwHCCCTuv7vT4brfGo6u4Ujm3a3vr5SwZzpML",
  "key2": "ntz8XZgToMscvyH8iStCGJWiuYrEtQi4EqiPWXhfMPHUQdBp7WpPfpgtaZM5k4FtXh5M7mpVCVPZawq4wSGRvAd",
  "key3": "3GheG6zJGHtiFPufQNAsRJ4xAFACPL715kY6xV5M7ZjKqsWbh2WXhZYQEoMRPru1jkNiRT29ixRd72xnKd1VZS9d",
  "key4": "5LuU5ummYiojCXMHUosV1oaU4oRymtkQtuAvmRZQ1yRMskxSC7i75VKe2f6sxWUNo7aA99BWnhvu5DaJ75z6Xf2n",
  "key5": "5wjQC4BsuhhNoBCQLebvSR6HJosgpFszNDA9C84pWshFCbMcCKXcNNwoJgjF7LZFzGbkypYfZtKsJV6tCjcPC2E8",
  "key6": "BYB5Si65teu8NnoBPvWGH6DuPeD68S8uQyH928ByQSk6JuMAESLcbvfpdBE3HPXe61THrL38KXaoE3QK7ccnToC",
  "key7": "2m43oWdPqiwH2mxHAzjnDBqrPRZN7ffByCPizFFvmWHCMFHEzvVV5ignccWo5gwV7ck5MA3hCRKKH6iGpctwi2X1",
  "key8": "3J3gzXPBg2KZD8KRC7PjiWC1eLG9wZoZ5erQD1hc28HPnLkhTpMEh9SVkdN2FxMKU3yLRAx4YisNU9Q48qex4JSb",
  "key9": "3cFMQZPpSW7qozCWDtiJgnv7NeWjMEiMd1pzg3uSzLji18NwZgfUM53ujqqiqub5diLi6UMWaEYGgyCVyDoSsyqm",
  "key10": "47VKu68ZFV45CEq92rCBE3FiZRnJC1Tei4b9UJrqjYUZwxLrxewJHt8HYTaLRcGvj86DGQmr26GzeEPvwG6FLUs8",
  "key11": "3p46hAoN3W9UUrm1vxV8CUbbZK3xehjpHEJY9YVLAbGpqCtnfCLz2QF3qWHoSa9MaR2pu8f3KRzQkJjfALEW88fJ",
  "key12": "4kgSYSeXE2ChGEvRtsmwVJtSMPSVEC1RZnWi2EHY4qwY24GtvLZ3sDd971cLjbQZy8QZaS67mMvZqtyBFbZDUDok",
  "key13": "3uwyCjFomaq3NzBqtiQKgtpQyZnaQ4xns6FdynQaRJVzjAL9ySm6r7fzKjysDrFGVPHesmXAyPkUNsWVGJ4NrFJ2",
  "key14": "2PMViEgW4khSfJT5xBemPC4PbFAr2skQ45o87ANoUi7cQYRCvcAcKs4h1ayTs629W642jVNvBbP21zzXbR6Ja2Xt",
  "key15": "3tUtRVuwQfZy2E2psSNB6Gtjy5DuBWAhdQiahBJpVqbMkncA4rQAuHmBBAgpVUac1QnMSRxNdKjnWt7BVRDbtM2H",
  "key16": "5iHFFULsaQNC1S2dwuWEw4xnzdFnN5ZwzCM1LZohnt5PpWUt2uQ4pFuQPuzkaksTrsPcYMHkLTQH88GxGj12nv5r",
  "key17": "4vTehbmGTNbABSG9n4WG6Ug54CvmAB9b25zxiMNjGkdecEECC11noW4Gzw4RnzUv1fQZVkA8zT38HxoUcLb5icrU",
  "key18": "3bcCXErfAkB9N3QZKvL6xK6VQmF7qQcHpFVHPMP9nVDAvkY3BasCU7ZRY3io8s6hTsWJu1BGU4UUqYZmFM2CyrxM",
  "key19": "28q3BirkRPowJtUedU4uNx14CwkpAokgskJ8obat8uFPSKLoNNmZkFsg6Za9BmCcK1SzSuYR92pPmMdGWt1GQtig",
  "key20": "2cNghRkLpfjjtQXX6tyXhAUY69pWUo9Xw59p5VmWWvTTtJMcVHw1ofZpr5DreKLTPXVgJvGnFvjQMfsXTxGfJ6h2",
  "key21": "4EPqKMCxtFYfeQWepKrJHSvcy37BKAR3kMBn7xcr3nJV9DV3ot2wh4gfBeXgAPwxyn1L8DLzHo3niA2FXRMnBaGe",
  "key22": "3U8Z8kdVeop9QXN7feBpzeuuwtHEq7oHCFP2dYjKKovJ8PMNvXYC1YKfRuPzcLV1EM3GXcpqkTr6PZ7DvCFb8u6w",
  "key23": "4MrQDEJCFkr5rmZYUELPUtA8SWh86nGYptBZfAjr1baBMXeD6WjT1ChuD32hu5MgmucdYe6M1UUHPrEQ56VstrRM",
  "key24": "3DA74SU815z7vH5K5g7J7Dqxw4Ns9NMYmrYeLeUhhWszMAGiJhc1u5m4touKd2YMTUtv8RJvyr3ycrHcF8iddxsT",
  "key25": "3egr1TGnBmHpSrP6u1vecnskLR94kGwQphzvaxAmsE28ycwGgC4hA2wxD752g8saG4fX8Nhj8oC8emunUwctsTVE",
  "key26": "7Z4NNvxd1fEAYkpMVpu7xeERSQrFx25Ri4UwJfL2Fm5ihZt3R4XjDvGWjfyw46MmhnHRLCqFXeV4BhkzFE2rDV2",
  "key27": "2VVpi4QKh5ChvoNe9zLNbE6fWUaLaibwNkLta7HYXTWQ7cPFzZYhAoEVj5dueb6hz3mPnbu9aruuA3YrwEF2zAhT",
  "key28": "3zgDf8qWXEfmYwxxvK3iHxjF7JfbKWb53yCedXsLj3mepCmnUwqm7SRbD9zYDdgYRVFLAvVLzyNPCBZMqU9EPMWs",
  "key29": "4xMaWxpWDYMUGsArxJkH5doyrQVbYsFknRmwGDaNC5EG5HrxTPTdqamRygq8kiTCmM2yXfjr6Bwnh6FCq9uHebvT",
  "key30": "stGsuwLF9RGQj9KG8eFsLjW3Ru3KumDFmi6njuSo2Bp4k6ZYLH82ndzvycwtS1LBj9ywbRW6uT24GA9C6RKGxwk",
  "key31": "2YcQjwDhEESYfi6rY573wrWt1eBEnBPrNSjR8x3v7CeyPVQQiWXybXkmYcUo11fCHVSTCv9dWHBFER74rGos7xey",
  "key32": "raiW9HqT7vh2ZrbtHZh4wUKzCaMC7XuUeFuRR8FqHVcuQDCQXrvDBKsQquVc5me56k3QgfQVgHnBFYz3UdpLLLh",
  "key33": "3qcJSc7RosqkY4bot4hgqf1Lamw5fxdnPfjr2wmpnBXr2KyHMLz4se2FEjqhJ8e4RT6j3uBm5rJ6fu87Wi9ewqyB"
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
