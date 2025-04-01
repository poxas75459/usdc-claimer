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
    "23hvLPYMFLWCGKwyhsZkSGauaiPVCQjmhygbi4cJkAvphZ832z1SNCXrMPL2UosLMoqL1UfoD7rX9rtccaJxisVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tiX1fFC4dwTCYkRYykoYXoSf2GUYznNvhjzhAZFZLFpqqiHJBudNACw16bqQD4qm5ct9CFBmPewu9P8bZJaQsjb",
  "key1": "5MkmKjmef9BLDyq3GEQw5TQufkKgCWPxKGme27cem7kEe262LbLNvGBFbrskksc9iVXy3GY4SWKez9e5bmiub68U",
  "key2": "4X2LvdubEWrR1WQho4px8hBsY6LKFn5my9LagxMobGDkpuRdEEpmbsLfPwJksig5xiRCqAFp5sfaAJ88CFEkqzC5",
  "key3": "4NKgFLM9Cj8zpMAewWjqsNGLBCgZbHj5kpsR58nUak4n22VoMHTZxNArd4EK3bNdWjJiuvqsEygrFzXWmrAbR1iv",
  "key4": "3CewEzyQSkAVYb2pnAkHjbtCgAB6JwMtogHnDJKWEenP1B62dtphZ4MQdp6iuiMVRfABLLFeYi6v1CByMQGJ5sr1",
  "key5": "3th3vUSu5CVdQcUTdCvb6DcTb6bi83MorD2EPLAQ4ERst2FwCUAHxMBAyHe2auBXLTvgm2HzZGoqA4sLrQ388VZc",
  "key6": "yAYfEqixGgE46nDRwtkdEJXtBy5YKV1KrjPwCKJqyDtaZQfpdWJNzxBPNWsGscZDS4ZHaU1bkUATWoheqqWpPdb",
  "key7": "2uVvtgq64YJTGSuMNU2C5GRweRETdp5Ra3GMdnp8iwmkpsikSHZrhT4gMEbqoE9UCngqYbZowWGqgiY9FJQZmQDe",
  "key8": "jC7F9DjNUQiyZWebCqX65fwaJZyQ9fS1Nhem8TAbqUA9yGxRYrDPj49adqBoGaEptqwtf39KVJ3oAQwP6GwqBwQ",
  "key9": "5NU8iHrhCKznseHJXdtKBg19hHZLyf5hWUsW32q6pucBnJzigGzwzgYiLp9PFjmyoo6su8hJrQETpLXpLyxHQcZ1",
  "key10": "4NQggXf2UWXDZwrPecrbjjU3QEhE9FhZBqpmRHL7ihDtrtZ1EcZ9HTZG6tK4gxuZyixVSuN8ybYNb1r7Mf8RrGML",
  "key11": "5XcHaWScHw2owrApUwkNyN1w19WdwzR6fo9vYdSUMazjEUDyZusFKyaYvzFwmdNMNLY433s6DTgUSS1mwnKiHtd1",
  "key12": "4iELVL1MzPD8mypNUQAtsUditxbqZ97PeWrukXEnZGmRrMs21bMnu1AAePP7fiBSEvU4jCBYduEQVCKDUfBhLeEv",
  "key13": "UyABHZkzdQFu7iT6HDYkNkSTWMCcXnViYjMq4cHWaSK5gYXUV69rMR6eRWti5cuzX4euj3dnThktrzJXqpDLP7a",
  "key14": "4XN9UVJG93RAXg82z5oZCehU9aBexQkFuEJno42ykrkRfHSLDNPYvUStsut3AvkAURZoiLL8pabHpP8uqg42YcGU",
  "key15": "4ixo2Lxx4tDzpqMRrxWPeusrVeTA1Tf8Q3VE7pBpv8yRr8FRSjHSzYaFX7VhcDY69MBEpKMYTMJaJcT1HLpmJe1L",
  "key16": "2cieKcfNjLN6VdZjBPztFZtCkTuPPMoUkMT8q4ASVMWe6Ch35Zn3x8AETX4YNRqFUpK6E9WXWgfdedNe2p9nzF4x",
  "key17": "5PeFVZgYiVS4XHWfPoTLADxFccocxqUa1KoYM2TkFijKqm4dNSbyhHdHjeFQTd4B8p7rggQpgN5VMr1tySVtam4w",
  "key18": "2N9BDz6FfyCkZFhVptPyX3qzAQFeNJPyAC9Kq8z1owZmhLhoaeELWeLZsJrSuA6HTosTvSc2pTfMoq81tEP1FaRx",
  "key19": "4w8txXgHp1ZDwRnmP3QyV3YjhW9B6K2jpWGWct2VatRFZcQmnyBCyanRipnZfvxvoifJzKtpq2K8jBwXoCNznyJH",
  "key20": "2cABFtqZAwEZagqcJTBBFLsERT1EJrK3CX5C3udq7QVhLZKPALBEAM6kaQSXZyo9N4y5AGz1dSsFsH1SmNQDH87k",
  "key21": "4rnwsBKdGgR1okB9QkEGjf4KmpNKMNMBwhPSwkCisBEKsucMR2DjKsCbJmrGQwchn3uRGksgSLnQosPzgDqZEHWV",
  "key22": "5BM7mCRstntUQM7MTq4Rwa2eBiZ27nUTRJxgEvavXB4PKDkdqUtT2SP4QNYTsKsjvzBG2KaCMJS73QHRAZAj2ctu",
  "key23": "58csnvXGdaC8j16h6SA4hqz4hCkekAZethyENsjanDpDV9Upa4zoKyBsasbAPibYBHU5WHNYZQqsTMHDJAshM6mC",
  "key24": "56a9SLW7twGSzzY5w1bu3m8TLg7quAQdNBwBQtzSYP5CieQ7nKYoqYPK3fFytsWVuvWaYzXA2EXTe6CqU4sDemo5",
  "key25": "2GXX6vAxm9mdwPTwgeKtWTX4rVS2ctRWmS467EqLmeQh4REuRactpDKzjYeLqh9QWFStFpvgUocJ27Nk9nJeKcCa",
  "key26": "5MU3nAx8cjBZ4wKyCSJaFq1CVfDDWfCiKfFctHAgT8B7PNYA5xUeP49DAaufW1zYubn3fg8kDeUwtYUfY2KY482q",
  "key27": "3xigKG2rmmN6QfzRotUPBbHvV1Qw4xjXpZttCugnkBz8PPfesuEMkPXNMK3ZRqhuFYyNkwviovhs4fZpxaNk64zd",
  "key28": "47aZTLcXYYhe3wR1bdiU6YcAdjQmrbPV34kUFSdJyJqorYiXDKfbhudCyXh2Ga1MyCrPowX76ZYaFGdoRnHCR2jY",
  "key29": "2HNC7QaHQcRPkeaSwb3sDUmCk5btjo2CtEdreKSdbCgv8ag6dL3eZ3k1Y4XQBwq7xiQqbjsZrv1wBAUELtLgK2Eq",
  "key30": "3dgRdi7qJ9WaggcPsKNxV9z8L25eRwpJvduQGSQG7XTZcXeuAjD95y9FnTyrpcjKu9YbQaRLcAU14aLcFqitVM2w",
  "key31": "ZNEBfZ5NxxVyEe5W43NJwYEdjtJdFN83guwe5wFFHQZTRKdAgiN8fnPVbqF1dsaCNk76gVdqqCjfvLYKyW9oqNj",
  "key32": "6ek23cnV13Z2NE8Ka382D3evfM38cTbLWNhESAshjV7usDDv1PgyWec5cMkcFCZHvLJNqfdf8i6dHvUPpaxGwy3",
  "key33": "4m5do7WVrC3qa3wXHAWugXHbKf15xhoYviVzSAU7RrJvLhVZBWSxxtyaWdjrUnDmiA6Sc1wUWbRFXED16Zi6AVCb",
  "key34": "52eVR8zQRmpo55s2rjiUKhgmXv1rhb5EdcEZDRBManecPUNwuDrgS9fT2sPgMFwhR1JyzxviiGbzU1p1H7qHy9Eq",
  "key35": "3Eeih8cWxrdndneroGKXgutkrrLxWbBnofBPRMycCdiAKRvf6pSwGJE5LAACFivwGsVrymTjYqmLuisirnFXuZha",
  "key36": "4rVUXGziEEmRmWQ3renXQok6DVaqYWyz2cwVcPTyjLAfQ38dtiN36CCPEJYzpizdnspf81tKtNEVkBD5Ha2Qfs4n",
  "key37": "3qq3RwxZwFMT56pqrruFDD2FLbQXTM3BceaZDvhJr1GFZ9h2X5EVQs6k3oYBofE6Ne1mQ9TGJtweiVJyb4UsswXG",
  "key38": "2y97MR5996sKpn1VStibzrY1Y3oqXRvpuefK64vJoTkDURUL77tPYG6n2EY3LMj3aRzMaApnazfe24mpjtynt3MC",
  "key39": "QKdeNEq9u9AYAvBqG3ksMufpnsJdmt2PCwrpxzT2vxhZoosZLiR6WJqU5QWGRkFUmmZwdyHXcLwYcXmfRTFFzv1",
  "key40": "5MymWqw6vd34p2fQ5ryDg4ikFa8Qg9ooqWsy9sEM4vWhM3hqdr1Sh5rzzk6YPkBk8yHNtC9c81KriYznStkQ24a5",
  "key41": "2WFR8pFKRm8LA8k6xoCnnamHT45VKFJoJJpJUeAzVZKgMGJaHspXRBecAadEQ83m42vv2uxPtqofEZkw49Eqh1Ei",
  "key42": "2EUTg71oiTuerD2MFSnpxtXqXCqki1Y638wHuXpPsciXT48EpWFAviGH82FfcHuCAP2Md6qucFZwR6KWjSKtPhA1",
  "key43": "2vdbafj72MH9oawfPArgB5ffEUWMh79SB483aTJ137e7x21U7CZu2yccyw9DddDDTCKgwZw3CjiPHAgxYrGQQbK7",
  "key44": "39ahqGNstWtjxSF1YU1J4PdS3kGQLBBJxNmAx3E6Xo7eQaPuJCdXoe4aqR4o15n3j8vLzCnQYmkYiZNERBy8Y5Pr",
  "key45": "4bazVjvrzsmi9cnZ7XAgFdYa61P2Xj4PB9U3bGtVtWbtcvASGtoPgjZm1UmfvHXwXty9g9TNYEW8zbnjpJvEu9aT",
  "key46": "5L6HfV1vJyXTHCP2EXkAML62JTwnB62pD4t4brJAm22KAetH8kuLntRTxS4fYHG7Fhh92M8m6gm75RSafJbfeNA7",
  "key47": "5Tsv2x71Sg9xSfnoYizDeaiYsr9aHU5Xq1sm3vsyagFEs89QZeYxs7gUXEpYdrV67N79DTNr13aRa3giNbr8T5G8"
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
