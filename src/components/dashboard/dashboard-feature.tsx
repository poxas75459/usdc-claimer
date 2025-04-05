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
    "5MdjThvZTzfVtxxCdxdBUm9CHhCwuMvHXm2eoNWNYj16bPyJjjdKLfgExYYZcFqW6fC7LTwzQAepFvJt7TbXJZUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WbjwJ5havMeTvePxYXjRrMUjsVzCPZ66o7CNQajjiANngC8aHotDPYt6ohEPGMsirEEJt7TethGpQ1Jo9AoRqhc",
  "key1": "24WDjvK71kBykmMzHH7PTg99KvsW1Mx5gCQd9qe2i3jJLZuvF8JU7errmv8JxHp6CxZNaNeqm19YEbB2qMPKcZCG",
  "key2": "27pRSP75ifA2iuDfwHWygh2zr1AmrUtr8YPGXkjv8YXT3ZGgB8BLzKamq4pxdY4X1SR8XX2zYu7dKmj4aLknoeqU",
  "key3": "4aUit3weSFcMQsvwrbdkNkPSHheohgr4F2PiEoNn4GfM2SfhUHW3r57Krk1w1z1aWoHdcMyaRM4eW7KirQ17ABMP",
  "key4": "3s8tftqtddfPQ7ePzPFrQR3tDzpKMpuQKSGYVo5s7MugGnn83sVGRDVubUB3GEkmYoU5jTRnvPbZzAoyooQ68i7M",
  "key5": "3Po7dmcKvd6TmyTrdmRhty75NjKZdg4rCx1j8fLrDUv1xk2cYYihzXqB8LEhGKY8d9AEqKbv5s3sEEBLkGZkspzc",
  "key6": "NTo471CfCDpPuQWjKGfZ6FZZBn1AH79Vems4d3ebWWuoZPWawda8ekaEwBuJTACtoqxWJqQNKwqzZcg2WHZwBnQ",
  "key7": "2oUcufFPt9R32KJ3pe3wLTvMKhGMpyqoYmc1y3f5zF6TyEqTT4chF561uCt6UhzJrAU2hPD2eDzVUPXSyAcdVBCF",
  "key8": "4wCGupgxfCt3irMRCEkxrSGp9Xe4F8XPth763oWRCwNZDMkWPixgjx1pjJhmRQ3kReKLPkiruHc6CuS7NnP1f9ZA",
  "key9": "2axHEnLLX7CZZtWuMHgotmUu9rqEb8YimnoikXLV7bawi9catXZZNZxd7JeLaYpbuSwfk6knv4KaYeRAZv6FkzS8",
  "key10": "2Nbab6mB2Dg25ND9zREQ1B5qYFM3JqLxFWtmSnAvnMsXYmi6PKYii8i7kWdoTRhU7a3zj8gRo3vR8mzy2WY26Cr9",
  "key11": "359AHxA9NG7TvuiTupY7BBSkRg9nB92nAedMUg6pk6zoWoo2wSy6oagdD1sMSovynBeQ5ned8EA8QAp8jmEA6v62",
  "key12": "4m3NQXRQo3aDg3NjWuCieH3etJJb4M6pEa38e2BzZqwd3LV7htLfAoogujFF9a69KRsFeuMvg7HTYtp7EMRWNgwT",
  "key13": "4isbw8GXGfqBbyDmduuj4WmzhYCYjhvenxgKf3Zk6rMt8ZcPvE5Nn6YHfcP4VZ8mpWypk8MtJQyGwg2Lhgaxkagd",
  "key14": "2P4PjRkvoJRspDe8h1fM5FwkTxeQj5CpYfmWz7jwVdbfsT7qpVaTJ6kfheFBmx9f459PTq17QBxES7rjS1UME54H",
  "key15": "5YSkdyzCqpp2CwgAM2jSt47URofWym9jbshrPjn3LbfDVi6ygyr5Vn3tS1eTLSZbAAVwP6RBvj5TwWiujWfAMPt5",
  "key16": "4hXqQn6jsBm87QhE14u6UemnU7JuS9SxB63ZWHFrcb6yZmKhQHMFPnT3hAZtUmUCua3SmzneCPjqKcobFbAp43dC",
  "key17": "pJs9qf7SQLugT4EQ13msJqFSty1QXzMdeaNJ8UYVTiy17J4wo6uSnHSn8p4uFadeZXGUX1dyppsyxmJ7FmF66jW",
  "key18": "3HhnzwJmogdZHX1QwHEqQkNp9HE6D4ZnSFUPrVjK3891GxYTiWFSyunyrvKWA6WxXmtve2rZ384rvdLJXej4sfwr",
  "key19": "3UJ7TxfuFLFCeQRUxGd87UGtJAQwrdqD1fzMrNMGLgb15EgHah3kXW8FxrSrLQ2AEpm2DLp99ceoJNEpCuuS72i",
  "key20": "2g1sGgPVx9Be4GCFXU9ebBCiKAN5Qe5e6fMaj9b2oj7W3SGFvMDVK2RoBnUDDmKSGLtaUwXhYPUjWTMfBREhn1Hb",
  "key21": "3JvwPQWTTS1d52mZB2KzDFNo1iHF7pcng5GMEXafpqaNLMgtvwWpReCG1HNuAxV7VxJpbXd9B6hGxrUWs8hY3aPC",
  "key22": "HA2tFAuKofTMuqPMUTvxcqoj8ESxJruvZcz2pRUbbvB5A5ax8vV7GZ5Y6aTnCQ4np22s1QHJLwuAP4kMj4vwrNx",
  "key23": "2r5zjeK4iwmA2fvCk8o7X2NfY2HoL6HLZ1A212APv99VtFTtfr1qMEUnnPv2AEA6X9GaMA9n8wP7wsebyRkPRTBJ",
  "key24": "66geS9wj9x9p23SY6FdrPTkhPzKAcofEiRxGKg8KeR1FLosRTUsQUGcgjpGEULyyFXsooVknrvvGTcL1gQBaTfj5",
  "key25": "Y2PLV413WhRHZPQjx5HbezuB9x7Hhd4tmZV3Tkjwow1qtUtLUaosj7JAWrwiX31xCREZW24jZBmTTThVEWfRtv9",
  "key26": "4BQxGNcnEV78XyGqyrmu5agLSA87Rz1T4apcrWLtqQVyjWv6YV2FYTakU7AtL9bwwCdh7v3pfEQtMMnt9LRKZLai",
  "key27": "5fXXa4r5kuu6D4xwS7DoZo4wkMEgtGS94Dseaopi1fz5cw217KF1Mcc4JVU2hkdyahvr8ASaqowABWHmr9U7YTdS",
  "key28": "2imMkry1UaX8RXY1N6hqVgc9dVJTFoZ864KL1X3MgQ71oUtUWUA6UpEq69K6MiVXdSgEMPjejVYpeLU7SiHwZcrY",
  "key29": "Qrft3MffxSLaWBMcD33ESz5U2vDXg7unFm6TbwYtC1iCvNYrAUC6o3i59pYj53RCkVNzqPBKxgvEVcn1fN9KT13",
  "key30": "5Q7GB8Arn3KWodhu5584yGQMKTKi9KoPA6B9CgWeE5aDmrhhj9x814MnJQFfYf1ENNSbeJXMj3YMMR3fWBesaSi2",
  "key31": "3wiSyazRRfHPYyu7N4BJn9EDYNU63UyF4hbUW4GHF9VjnGsnFMYEd8zbNwPUGnSiCgQt5fbVtgfAWECuEyEK6oDZ",
  "key32": "LRyvJAqFCJ9jUHHfkUKbp3PGAsaVk4uY1LdzwaWGXAdf3o2zfoRysvwqNdxgteMpTMpTzxCDnChmfvZDBhMChSp",
  "key33": "52evffPLi2kELAJ14akPwaqmgZNjgVjZcBeHK9UPbYQ1qrJoqv7bTb98f7FPxu4efmiVf6rAgQXtmG8EjXizS4pX",
  "key34": "3jwU3ZvYFSnCTHLenByR3M4TGezAigXVqs2cmzygXPsMz2j7SPjvVAQjJmnsXxayiS72EdsNy74o24vWSM43bjEZ",
  "key35": "55VAHgt4n16JJJ1YJJNHUPPGf8ttdoCPYKf7optHMtt5ThrBw68a3TREL3QNB6gntjEMrbFnytjBqyj61k9BK5Sv",
  "key36": "3frMmhAh8ruaUdcPhsZrwuHSuHYTTpR4NASpLQH8SZ4JmPf5ENSqPmpyHarPrkS7SY9Lg344nGubbcMunBzsq33F",
  "key37": "3gW6edV47jt7M7JhcesrXJLJFzXSjokmXipjRakzeZr2kjNswk8EewQ6E3LyN3r79yzFkM8ZhaZBEH6dbyb9WZGL",
  "key38": "5Wy8Lx8MPzrUE3aTAEfPNUuZBgnEswMRm5JRA2Dic1mTNt9cQomVMzuoNsi9sLJtxbHstFzkzG6AJJAcpEoufD21",
  "key39": "AW2fw2h8KW1N3Xy1P5jzqHnBQSfETGqSQgtTFtVmB5RDGFv9o3PgmdMxS15xg4AzWiHEj6FDfViKvExZwJMHvvV",
  "key40": "3ZPF4J2xmyMv5NiARo4zggSWTfhiXK5gnzgvoy9NRZe6pQQsFSVUMCA2vVBNWQhiZ1ooXcvW3tPrgC6LMdGrypUJ",
  "key41": "4XyQ83MfsX8GKf6KAXjyPeRvR5nGXtZZYMu7pWhicrFmzQ6w4oFXos1G2ccAQcFD3vTNadA5sA8agCCYQnv3BhsL",
  "key42": "5SF73evh5eaV5zruF4Um4jbpCeQWx19YAu3azuhvy1Q9WRvFLNFtM38MX2G4yMiusJHoTPuUSPKhAbrGDJwSPncw",
  "key43": "3CfC11d1PaVuYd5ofkNMiFUak88EUaRZpAZGmB5S4eFuaqsESfi6HuEspkigbXjtcZ6uBF4wpEEHAgKb1WUecmJb",
  "key44": "2wAfJ6ZcuRpzV23thf4gkhaM3QWYnQ3Cke73jAeoBeFoetZfdLKsyXVweid32a88Qfo5S4unX2j6bgJTyG6bdUA4",
  "key45": "4X15jzDZyKGrxrdEGV2TZQsPjDWUAd9aQYN9gH1aBJjrFNgxQUoneGPtNjbBoAmJNfTYDuMXmagVzAu6GRcx6JUk",
  "key46": "5Mf56XDZCAcPDA5cDsKb362vP2YXVLMfmKNeMAaZsQQewFkBNzi2HFVLF8ChYh98ovqYoTg3Luq8oetUoDGRfdNA",
  "key47": "3gBswn37k9uzvvZRrLXwrfChp1HdTeyEuiFR3FJjrCCjA8LJuBJQLKdTmETgnGrQLYTTC7sy4t3BmwzEvtbFLtKJ"
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
