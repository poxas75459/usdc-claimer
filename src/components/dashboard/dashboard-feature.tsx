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
    "4qm4oLP9tZdrRi75rq198pkFV7vYVJqqotug4YHYNsJmY7ozA5YixnbzKtykjDTQa7SefwkTfb7F55NPnj5UucyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bv4KSdck3LpzucZqjeRDqFHcxtBQ9LrdiBFcVJEVYdbjhWY7kYjYSpcERDp6UzHnr6ohWRBHq9m3WnV6imbmHkw",
  "key1": "2B4XxSijvKbdgLmWcEvH98AdtiLpRchxZ7aUoy5QaszzE4s6PB3gk9WewpUUYzwQqwmTjUqZ54u6f6JLqh8Uu4rT",
  "key2": "52PtUrHMvpeBSoDX9AwyKEM2oFnHNcmJyhaVBukTeoVcN1PhTZm4EdLdB2QAZEni9XDJGVZ4eQ97VDuvJH18zi3D",
  "key3": "524MTYzFVXXHV93o8vmi8QpemiMynTdmVSZHhzBW4szk2prE96QhqCaPm45M9Wuhi84Rt9KLQVERznP2JmRWtFC2",
  "key4": "37niJbBMNieAxMjUFcE8yJSMDTuAc4wynxadoBrng5AHACscVYer4c51R5L7o5n5Zm1ZpqBYJpMy5FQGbwFWAmQa",
  "key5": "489pk4hgK4uZYrojNBuCwg4QpDBrgGK8iyt9zmVFgv8vEHY5dXsKY18xaCUsNfYALYWY9Kza18xqbz5kKjhNU4xX",
  "key6": "3dV7ZkAdAzgiFsaasc1Yuo3TSpqzUs5P6yyjR9XMiM7PWXctYB1h5nhXoZJmS12QtEfBqEwAsNcXmy7ehkwvnHa4",
  "key7": "3bSmfkGt2YQxH45fcLpYtK8kUWwLnZNd7zNoCZgv3oz2fvoHpXDiEKxS3BYK69iYpZwz4DJi5nkT9M13LXo6VM8t",
  "key8": "tk51r63wjRTL4DbRwuzjytd7QVHUv5M6txbUHMbF5PAXudJFvjBayKwnX7svYAYFSL5aysZWH4CCX8WC91bxFA8",
  "key9": "3KYLT9MNvPNbJtRVTzpL8NrSLBWT3gp4AsM5SuhsU6Ssykbj3tSzkbhLPR9xyvGRYZBBo2SACj2dtsNXB62uBBcr",
  "key10": "4j4em9JwKCLSr2rnkA2oDVQsQQ7XT5uqbL1Stg7MQJZJ3cw7GqMNV4jheBrbvBfGYrLf5cDoYVms286PM3A4y6Fg",
  "key11": "5zw5d4UedXuBCZP8qhW3t2LjYqnGaUqgoMYT9k7eTgpkBjZhPHPaRzLhQenzxjvi2cBLaaZFY8CUeXxoDpB1rCZ",
  "key12": "5DgKRKyDHPUjFcCEquD96Eiy9swVTBgLr8gzRopajcpVMhDitzJM6xnZrreotUgKmHgxfuqjV6XM57JUU6X4wM6F",
  "key13": "GAsp2LpG4oRt2NtUngYcWhybiQ5e2hWrxAXP58sHTqDuzLHAB3KxT4jSGe5jsEjc4fzi6Vkjhdi54Be62SvdNox",
  "key14": "cL6L4XrSUHMKVEuYKmXKHVn2WtxoE4HVdJRDWRku9rYL7DUs8j1uN3LgbYU3jCB5CkDGnyG2u3H9Qrz61bEWZnV",
  "key15": "3oBsMRqqd1FiSj8WP5CukP3R6DKGoWBzMkc7BrkBRKhu2EEBTd4nefvz91ov4x2eoSRg2dowEFNZnyfpjW7hm6V3",
  "key16": "5UV78DWyw87bxosKwSkCavr5QEtmTm8z5zUvt1Vzj3fCX1oedT3A84dmuvoCoHTiZgw8ZbstnTKYS3jnyy5vbBkB",
  "key17": "RqMZBFiF9Juq86PTe5718pJVz3yM2QzkKmwLYge58RUuXsBLWQGtBe3ghvKcvG3TNzE7nHGN41wWJZKaVK3vFsr",
  "key18": "3i5qDwF7ywxY5j1ESAFAJ6fsSFK3y32PMs6pzJdK4tkaAutGv2rmbQMn1GYH4Q9tFxZ4DXGvYtMGzPANehDQBh2P",
  "key19": "psXrx3o46yzAxr8S7i7vQQLB5hhacGXfEQYXT6J11sYiEk6Xi5pcFM391bqVkxNQ38hG3ZMhWKoL6mG736d5VGN",
  "key20": "uxFVxLqDw4vstZWrmeFkMQhtvLFTtf651oPTSZNuk122TWJnUJPkoDWfXAPN3cjKN4Jaoy827p1omHAQXRd3UNP",
  "key21": "2LgJgbXURVXs7oNzax276aJABRJvzeufA7kn6JgcpecJmyayk6uXJqpMr2aeee7qCiWF2BEzFfgWbAwuBzFH6Czo",
  "key22": "8tMBRzNjWPy1smzpFTPPs3S9tGcn6ZJWuJutyJLWZGKGcq4zQWCRYpJDyXDJoPEBE9jA1PFHjonSLVoBGAxapFr",
  "key23": "3nGWLExb2BuzU8Yv38vxGZYboBeJmAXqLHmvpEpZu79ZCLu4FHfBhYxXQNsTTcRt76L695mmv5sHJwZXgXcEFNoL",
  "key24": "3foB1FZ7QsFngS57bHCDtTJozfNAziPuvc6E3cHvZjrQPhE7tQsGMpN5qkErLq6M81Y5K7dKrytESsgTZo7UHDeB",
  "key25": "5cTdzEjzATazj9KH7Laer2f1mraYxH4k1aAxFSN6p89rUsaN749KPWPtwJMQdTCpE1WtSy48qcVjW5NdAUwKqL51",
  "key26": "7VdCdEyxsUH6aedoaRewp7FuryHCPx1FkBpeppywgHvZAkoyCrmk9esqhH8CSkcqBxrw8jHjnFHWzknjScjKeqL",
  "key27": "3ZSwmkKEa9dA7VJT13JEFj2Z7uQSDkVjDZJrpXpvWoEyKfW4pB6Uv18TZaraTj6pbsE9UKpnC7r3UXujn9aky7vE",
  "key28": "3eX8c47W8QWpW53ivyMLt7fczwb4DQhMMLfVetcttcjseAnqXkhRHRjuy56hriEXBSxxP54HS47KacVgZuat6Ku7",
  "key29": "3e763ZX2EG6oBoy1SnxZgCDKdaXdD64ArhzwxeT2RU5h5xgcHmfPDCLCwA2BjRqnBFRxUUJ7RzXsKAV2uScNKkRK",
  "key30": "2r5ky1mJzZNPL77THiCknXi7oBKFzhtuYHRcBGj6jKazz2MxRYyG3kQ9eHcRrw4wTUSiH7A5bPdz4ybqDnpQiWiv",
  "key31": "kVDkxN1iZPmVepDwTeLwoTyTPXZjDEHws6vsp3ZiSwfpSBvJCbZKVQxBrBZrRdSVDo4VMcBkYiHRFRs8Uc4p4mF",
  "key32": "44mwi8U1bHvUFaVWqxxWfMAijAadPX5Hono5dp3J53VnjdpzFAZ4JTgYPmYDRHnbDEujkfkpCqsQ5JoHcD77pVdQ",
  "key33": "53fz3Cp5fKsBvMVaHBghmsZGWHHukfnnR856472Kjy4LynvZdJebxKz9N4RLfKjoCpQ3BEnej6GAmu1thVFpAVQK",
  "key34": "neCqADn5uwhvksdAjNfp3XNztmP5MeKrUND8JMP9zirXNZJMwaSDpGm1o7J3EwBGXDDS1uDXXxTZ4WC6Prv8RKT",
  "key35": "3mB4HcP1gfehuqfaaYRKEmqL7hzdp5VgFifAqsifqU4AW6CvNYb3fTQeuGexguLb4KYuQu1RFhCnXqqEtyUgNg9p",
  "key36": "515t1g2ktnWi1Gmdw562X4aTwxH5hPd1SYSvdwJE22Vpce7Kdew5fYKBzQ8i8y9jnGNQ4PGva5nhxcBZR1tzRakN",
  "key37": "5UYj4RwEsEsguq1BCUeNpfvj21aQQLF9exvcVAmavsKKngX35TPy7sBTg5HgVKwcN3dzgtyP5WtwDAaGB7fzMA2E",
  "key38": "5LMSwwZ8Z1WmBAYHCbLgsAAcsTdfmSrMtwamDfwxdHXQ7LWJ1xBH2SYk5ow2AvqdZJb4XcVDybmD5Eu1XqjcpNn8",
  "key39": "3gfcNNZaR9G1UDPTSKisne7HY9a91T1QgYWCgEJFo65uwW5BhmXXaxzZFVqCykyniRjrfPP1XhivLD5BpL3BoZvU",
  "key40": "4k3brGEZE6e3jWxttrmSoNP5r74Pw3zhi48ge8DYqE7CaTt1v79xcy59z4rPQDNm6oDSjdvws36L55JMMmyYB883",
  "key41": "2tSQJiuvnkvnXwJJWq5mpqYXHFyf7SmYdTxPuAU58WEuWf3bJBjLHUWYPSREGQpiMYXpa85giYTAC8iy4rHH1hwR",
  "key42": "3PwVFVuG2oj5rAtefH8k1Lw12JKXVhxTZKHHEcG9xetJnJS7W3CuPWdXMuCfos5iz4CSsLvXpN86RybBZhbrEHU",
  "key43": "AM826btZEA4yBYSQfSqQPveGhRQZtW2G89frSKfAhvSXMLVVFVVzRhDT1ZKdzV3R4BESmKej7tMeXRbYoigZ38y",
  "key44": "583C6QQrHngJZfvU9m5pJLhSeuHp8ngqiySEtSibDSa1fNS2Zy9fkJzTpL2uzFsrDZ7ntM6pfxYUEsXumr5x6MPj",
  "key45": "4Ccf425ogeaKBGPpRVQZNDrT6F7ZzaUL4fRr2v9yzQheysbrCa9KqFMtahNsx11XHwhjUss7wE6wrsxSTgdkDQhy",
  "key46": "2njFSqqmT39En8e9sSr5XgEkqomQyBrY7qzVacb5Bhr3nbzQ1h3qgWGq46oTbYDzKCZjuHb6tmTViHXvgGafDUSa",
  "key47": "24uF6qc8cUErgbJ3pNehBwbK1UuLsv7xdKR3pEoreZxgd7s4hJA8EGbbAAZDP1xNBqTs88cQKac13h3MVqeSr9af"
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
