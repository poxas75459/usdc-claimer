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
    "8MBtdW4zkdVyu8vREQeG6BnDYC4QirDa4nuVFmn1af5k6CtTfvdpRU9UKwyCF7DChsG1hkc9mNE6L2PWnpFTu6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WVenvPdfYMD163AUdkTp8zMKXSjtnzQk6q1fyJ6YyXyGEoppwN5fcfEqdoYdGvNvyUNoA28A5Ezv8T36iuEN6Pt",
  "key1": "5gZa7hYyeeuXqfaiuUhmKM6268ZbXrgBEGWku1hV3SJE3t8rW2S2j7FTCaE563aeTMrz9QQ3ZZaMQNw91eQMNcLR",
  "key2": "dGrtpB6T9piFVsY1vgC52bjXdjDvcNKGQmGzHRU8KjZUyxSVnq2QAMtvuvJE47CzwPau65Nv9DhGU731nbnm16D",
  "key3": "3JsWprsJEHx6NLMPL6HNvqdbc43tBceWUx1YaETzhRzSh1FbRuFrrLrA4tLoUAABJx4pKvxEBpUvherdZK5mCWKa",
  "key4": "s5LvcQuR2joU7iPnqFJhBKExooKzbDqPA3cgQGDxHcgLPqtQYRFALzFj96dy9VXZS8rrBFHbdQtMPUVaX747EAX",
  "key5": "4nHZCrCCRUzUBsFvP5ygQ3fXBL6fZKTNPfHsQjFwQdZUjfbXUQBfx1YW4tsJiHYJM3dEP63ZPQ31KfbUvntN21NW",
  "key6": "4aErzirhGUjfnN5BcgdpS7uKdwrjLdCZAejbe5iK6RswwpsRevokHNtDMoLkm4BFeGmzGGbUPrthFDshrN1RUeCb",
  "key7": "3xBVouBL1y38jE4GXjoZrAf4xqqUzWStg2a4j7ir8WL1mhr1Q6B12RBhxvXjVK5ngQGaj12NXZ35GrQJzgfUHGR",
  "key8": "4ujsPV72zrr6kCUia1pZy1P942y8qmU9J8mN6WU15zeV3oT3PYBFNDkx1DwgBcXD7b2iaesqM8dpr329vK7mENh",
  "key9": "5ZjEv8pDd3Fexbtj8wD53Takiqm3eDpu98o7TNpWKntfa3zEDhz2eYoehgavJiUmLSQ9e26hdeHg14THWUNw6BNR",
  "key10": "4wiBLRVPbYjuNPJ6uzjrM6LHzibifAKX5bCLWw6Yw53t2oQ71U3VAhr9PNGK4e8T5sNZY4aY2Cjsq924dyzpcsCr",
  "key11": "AwRfEDKW3PaVkJaEwaMKEN1jcgt5vPxjT8grH93M8JXXJiZa6D98qrYKFZKDsKXWv9QG9VtzVvPvkM7jy5q2WgU",
  "key12": "2e4nrBZw58n2vpbB858RLhsD7GiB5aDZbvpQe1cw3WS3XCHEmFPS4AJWtWiKERSdorUerWvPe2YcnrQexfbtVSJL",
  "key13": "2kXFBVCAKZEo7mqpLLsLogjJRTEf1JCxf9KFJfeS5WnsFbjVZutMDPDBF8CcRDJkvegEmahQEAvYmKJaKSLT1DFm",
  "key14": "5NyE4MChat18mPZVkktpBPyi4BicbpTn9NTCryYJCnmK47dtSd268nDrMRcyMaVVxZYdQeqa9WJvNi8LPMNYPRNo",
  "key15": "5d8zRHMZ9puyDTx16QqLpBXtUheLxauRbNGYgpJwNXs4AtFCCSijK2GkRbEPg1AJeTmHptR8HWwUGHUuTz2kbknD",
  "key16": "3jpFu6uh1LWHUtYiMEMAxkwACqQ1q1gVFrY8sbDJYExsMKex4cq7d2Bds1SSEYoSJYmGHFX3RRyfuxKfrGuuconj",
  "key17": "oaxTqmkuDKJ4R97HFtFE9pvEWML7QHUNKXHq9Dc5AM61Ee9EcvxCQpEHWirH6TGw8BhvUiqCSox5TMArphzpP9A",
  "key18": "4yWjiSWScQ1hqdhQrd2e5BhaFhq4G7qtAAfS6uyKHCtaGGVzmavBZxWdsbvD6HVZ84zjZDnwVKbN1VFYi43jSfXo",
  "key19": "Jr8Tt7yGy4zg5THVejJu8eSH6rhhTVGosRaGWoZoZuShZN24Nnm3jg9y5ruPCgPDyiq3Zd8ACEwTwn7Dk3CPpAe",
  "key20": "HHKPHLbupht51638qqu77WqtpCXczrsUGQtnHDhxX96SskpnYZ4ebswqcY1SZXisddpDcSMpHxrcDu8U3PCAqfo",
  "key21": "5MqhMzr2C5xYX96VD8Zf3HdNrq5e65HvHq6ZD21QrxW1KFqTjQ7ymNEK5AxhutVybHBFmcnqQTL8KaNty4JKWb2J",
  "key22": "3BArdSUnUHkffgwVXfLqPPS8uUPdABEjsrsWDBmELUFA8fHZmFHDZe5Eec96gfzgLQNjBbNwfbnAF4Hooj7Hekjy",
  "key23": "ZdjCWMZJamzJcCAfKfTCU5mVSs7DV4z8QpbUquiF1Ci2QsyxbL5FgBNk3cW91DnQtpDVq6Rpoa8KfTEdT1pLmzG",
  "key24": "5W3yttkKQ9ptVJdd2cHpSTCE5zjcCr9TDooF4tYgcniBCyN3UjWe8EqkNsEtuDxvScui7hDNHUgYABXDYLPMotbf",
  "key25": "5hA5hDbe43tchZuFP1arvDFRg4CF8i3Ws7uwgE9pu9oBpRLM4TCbpL8eusrRiMxap8beBmZXLGSm43uwsaXmBzPw",
  "key26": "5ZkqSRUu6GDrpqhyRwTG3nMR9y7gjiuktHo84d7X9iF1vvfXSYokAu3RvmPZDYH62JSRnWW5uy6W86K1ZUUAPuBM",
  "key27": "3eSqZEyCwDzpPiNNfxjuts2MRGYsf4SxmCH52n4t44eY8DUJhL9AtUatZjguj2txcQUNSXMXh4aFhBDHKkAAPVo",
  "key28": "4L5ETX2hDM58Ty42YkEM81AFPuFzKaAunQxdmKoCseAGurY7UX7svs4mYrgnhYEiNUrwrHjyi6825YPNrxw2SQ6M",
  "key29": "3unE1SgZxgNYaQ7YPiqc5pm4eqp2D7jJQPyDTudcuYMzSYEArmWX3GXqpSKRWQm45z4X7BgbYupHHa2JNT1Mhx5y",
  "key30": "VxiZnPQvHWcnHv5YXv6iSjtucmwWSeQRv5d9j2RExcH3mrXWdZ25ntsq4sQG8utqFtanz9SaEebaNJjBuSrQpQ8",
  "key31": "63Cu9Tu19DHtZPuMNBGGjpCX7hr96ft9XuBjcFoQgTav8TcWdrwhTt1B2NxbWnX6j1QGNM5keh6idYeYzjpoV8ks",
  "key32": "4pVvNiTUd1KBTM165brAwgbkN3rQj8YpKDUtGe333eV45jVRy9QtmJBxwmeGpK8p7LzhuHTqdwcrdpFup9GWAYjR",
  "key33": "23VDssn3tVBkix9v89wGgkuXsSqiesqhmewByL94xYEcYk1BdB2sinFWA2S4iu9evKbYLpaPSWeTnoY4vk7Q4nAz",
  "key34": "4nAV17jBYNf4nLueDgSsW88S15goRVwT4asE4dzjdvp2a9kPgjcNiAVF16qDk8VVHxVimdpHWzrYFCtnJozoRL8g",
  "key35": "2PzC8JuoWTeZkgdqATd8Zdegm28TRpAphR3mmte5HKtRWiy4EE2Exa76hkhEDkLxQdLAS7HLiEFWUbERmw5NSCAS",
  "key36": "3W5WvjNtFYg25P8Q3bkTnetxvXbReV96nCnDZZKmt7uJvsMvXHYAj2gK1wZfj2a8wesTyXf1GrVm7TPydqWYcdAg"
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
