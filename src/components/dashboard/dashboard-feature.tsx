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
    "MesvCgUKKLFantFaEdV2PriVqwQoCKohYHZLv6jW7LwR2HQUYK5rdrdfCvpDjvFehiuRy9rSkqbMWubtYqW92Xh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42276g85etYhMHajNLi21kwS61VaTzciibjv9FTWHnZEapxoh3xhLjwKu4UjsR8DW6XNZ6D6ZCevB1TuQW5qepjY",
  "key1": "2xRxkcEqy3B7eZKDRTe5HG9dapo3vCEfrLGG2Vnj59iyuJSsTxed69bD4nESKAC27JSbExmSZCPqx6XF8EAorvsa",
  "key2": "3W3uvNNvJxt8BtvESG56uLQVxHNYhQaH51jjc3LW6b2eWYrmofWKKycqwbFXnjGQNSuKNwMk8RcUDEYEsXADYSM1",
  "key3": "4UurSF5NGuqSBWzVuSkuJYG8hqbx47RdsNH73ZkMermVQ6Ybv3JMiwDZr6zj6nfbQ3V9He8VwyHpFT3L257QWM6b",
  "key4": "4Tbyc54bmhY5JTX5ueAu33JCU5yod1aViZxKmVag1mvUeoctXCyy4EXVzv5zxZok917D9Nd2nHk12stRzCXbJjG2",
  "key5": "4fACDPdRV5JhE6FG3dyYjtwNFwTtU2tX17FXywbpftsSriuEVR1ajq9Kc4XzzMxo1ucNLQZBLNDSxbCfcWiaZ5By",
  "key6": "3Syhhn8vnALz5U78wcT4PtLqmTR8bTYm1g2C1vqv4FVKrb2Z6ZGduXbnRdi2q4oy9btUD5qnDKqbGfjrRKGSW9Ba",
  "key7": "5dGbGb8xQTKkzKn3g8rykAvZLdL5pHmonBuJXgKJWqckc6xVM44THUhVUEhsJbCkRcETYLycwC91Ad5xrMAKU8W3",
  "key8": "3i5zKeMvjdQ4Pc6MKmQZMzXREsQDQh4qgvPML6XjyFH18FQWtnquG5nkGyE7sNo43nfZJ2bWoYjdNbsqpAgWQCZA",
  "key9": "5q9z9zuUAe433WZuNaH5AugjxkcpS8vQ6HuAHiBDVUVpEzc63d7cZDoucNm1SqkxXTo2dK9ecP2G5qsiVLG6uP6t",
  "key10": "2GkJuXEQiFbDmnymbzDR3nF48EprdhFHh1WaVc1N63gWJBxSsjfGJcUyx7p83WcjcfeMtoEAjbyghqhB33TGrD6b",
  "key11": "2iEya24T4aHQcGiYU7pTYj6PtwauqYkCxJhYjNURnoT1c4vog2WdSZV6582Dx7GosGWChZzQwYEZviqhJ64fMijH",
  "key12": "2gqLFPgaFQGZPMHq86SNuZXhJp7roJeHdzsGYJdxdVEFu1TuMeKrvbTEmrWjezr3mfkwLGjDCYJX14VMQ52jQYtC",
  "key13": "4mgeTJsAkDJJZQpQYnMJ3rZqAHpuoeMpu14FusU9SZmvLeSVoarjXQ2bA2YXsbWViZuXXFGUFzfEJxu3UxvqCr5a",
  "key14": "52V5Jox7px6TwPDH45Q2y3tK6sCZMeZHeJjx1fjbBB51446XikP6P3c1WZGnnL2T44Y1AY1DznHkYNJ5hPGhzBRF",
  "key15": "57eirA2D4qcvJcSCvnVsyeh6Nu31ERkE5CDotkn5rHehKB7sg72TWLMbgEVpo2CrV3KrWPTagRt1qtEm7SqEintQ",
  "key16": "63isPtqugX96Utyg4aWyyyu8MpSufos3Yt67BLLhHkSv43XbdrcPwzE967aWhaF6LoG9rkEDE1FyhoRQpidVxAcX",
  "key17": "5PjvYSmCd321pkT4jbyHnh9xon6hy6iGVRL994K2VpTV7TV3eBJgAKfwLKMgiTnUhGV3DEFLcjWhU7mtQRsPKUub",
  "key18": "gM2RFSCyWvxYiiURqM8VJrwMnvg8sYXiNJwcfT3pyQyx8yyAYCEUqcGe9wzMVqmLwmKp2P8o5VNteiUzdombgSh",
  "key19": "21JpEmMemAz3qfL3rsQzakbkR99zTtR1MVFus9vdRgYSkbbK3qgxu1nPfbbudw4hBgxirSzvk7V1bySbiBp1CDG5",
  "key20": "3WhH5w3z4TqTnByzEyer7Kp2Gt8wjTpHoY9N6iSFLz7sEYBjmPrbqVpgG4gvLEUsXdPXW5Mn3j1zfa9Km42kdPx7",
  "key21": "oA6WG2aZBxTWe2MPaEmPqJT2nqgypTn9goHnbVkmwTTTi5diR1jj4uhR1DAUcgq3aajSgmh2E4ga7eCkjS6xoSz",
  "key22": "4Ywcb2prPD1GvaUaChRagYxEP4is2Rria3S2X9oTURp8DSv3vVgicRrrD1HFXZztNWVCsBFuxGN4bUo7Kjbt6aJ8",
  "key23": "3TDEFP5gdTeY4ATNE9GNsjUWaUGu6oF15FAgDkXiLkxsxeuDGchxXYuEsv9vVquJ8no8jQX1BzYYAeRtt4qZ1Hor",
  "key24": "51wdqgPG7q188mZk2rGShJxNQUJoMynLymmXsQQaKm6h5AxdndBMWk31siPZGCJD8qXPh4woTLjsWmqtJtiGbWFE",
  "key25": "5XokG9W23NPbZWFyY4V3MtUpf2qYxryG8fKcqLQfk35Bg6aajAfrM1h8dW3JwmVJKgw2Z3EF6iRsio2qZnkLQJ5n",
  "key26": "vCqZCjA1nqsueJnMziQV13L3Jijg74p2vc2YE3uSZqU5qAPFn5HUaq24wzrHFAoq1smk1zmUDNMsrkdrfns5RBR",
  "key27": "4sHCQFaZc3wpW28N2S2EvW7SxYHF8TGpyxXNGEHjNngVzLVS6VykemtetGzQ7838ZVpuWbGpCovBiK8TGr9Ndj9J",
  "key28": "5x72uKG7nVtY1tvziT8webDKVexFhoup7whhvzqXy7bZtuzRZXqW8YqmGiiW7ctbtzTh1yJtujtQbjZGtiX3fMGe",
  "key29": "3skM3ua92184Hv43xfQvSD5SAwULDJg76DSnRpU99bhUSGFJYwQXq9hXdAwpodZtmi8QLF23eCqBx7dfaXCnLoLZ",
  "key30": "4Fesf54q3JVxHmos429arByFi8SFyG1o9zNnuA2pvs5eHv4ieQDEGGZtAvsWf8PAMuwM8ARUk87yvVQrmLeMKNuc",
  "key31": "4ZoRTgMQ5JnaCfCcNgYusgZScQuys5rq38KEFGVg4uekPjz2uwCoRLsqGoxonHLgMqbfWyDZjZiMAGhE171tEYSK",
  "key32": "3u5FfqE6jfdsEvq4WjveciNVXouPHbdRarmoq6eUUZQwBa537ywg7UByTexhL27w2zbLZ7fuSdkgg2kV5XzJFb5p",
  "key33": "2hVqtxwxSVq1UShBehLZeoJH3TRqFYPVovX7NvsgyWLLPVAM7Av43GwuQC4P1uZdtpu7k5maurbSB5Nkdbq7kCeU",
  "key34": "32ZCwxG8hNFjyPX9pYWCof2LaxPuswteNcFqEzkbEfrvXw465d8KmNGGPU1EJSyw2kty8KwKDTjsFCQKVzh3YiEr",
  "key35": "2yserkb2f3geWoX8BU1n2HL8NbnwGXZcbHAfmrPNRuoMXBYY5Gx9bmxT4Bg2kHBMPwJMTFjnUrEX1SB2opVPCG5w",
  "key36": "5WcksRsrMcitt1pJQURX62YR9d9SLGf2K454mZeV4JRpHErfDt49vqPvbSpg349B2rFtMA93LeSEDyGcUkrsu1Rn",
  "key37": "JoLbVfNnYnR7zHHbXv2oXFAvVL6CFhTmQpibpJ7Ut5z3b5qipkeBkTrRNktGTkdHysdD9uPbsBDCyBFzVzgrYAY",
  "key38": "2qbBDobjmajKeuZp198wWg2WFdnSoj54JGBrAPNxk9buesPEYyVxPWB7ijs1BkQW2a2MDGo8VEWee4ZD8sCSTUqU",
  "key39": "3iUGXANozk3sQC5K9nT2kN2kaDSCEL2ov1m9iTSBWu6BNVbEYsDPY54sz59pV2uRW2nYWwdVsKGYqDHh6bq1YcXm",
  "key40": "4BPGKDkrqexs2wSNwEn4JHB5HJ5gfo2Hy6X9d2xSMrHh5CmTBsXiuacAEzyAJ3y5sJiNvegJC5LQg5t2cXKCjjW8",
  "key41": "3gGSo3ZUJdEtz2acz1KC4WMnEgdQY1YRGcPiVyzRdKzMfYReEXawFbhis5xkeN64zBs6sJxc57qk7Nak8xWSMDQd",
  "key42": "3JKeTCyhvkkQe1s6EPBhhtXVKyCs67pNBJTV9qvc8QogvFBG57GgxUZAgCXEL5oAXUQTUTQFzwbZYJvrGUSNSSd3"
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
