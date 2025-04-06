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
    "28D1h3ty5dBJWZ2mJ2tBnL6gfxh5NqnASp8kHbks8WNbwyvdTFuqVQJgNg6ahSEFExNVdbmKxRMxKqCx4sHHkuLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1HBpomcbHBrfjx9AKrFDM15G9DMhrZ4UN2b89pK6Qf2PMtDV8fV2PhYvz4BNLFsbgVsCQPcXU1agKJiv75o1pSj",
  "key1": "QRRZUbEpdJa6jF6xmuuLAfknBzueRercipQHoRjZSz8J3BcW3M9cbVba6798iA8CT4oxUV6XEWkNYr9bbZStXm1",
  "key2": "5zBBQE2bCZBeyHpHkQ1EFYuUFojmV7Q8YULR5oan72vo1mg5bxb5cXvDUHNvbgZ9sho6ffKJ351PvW6StRFY1XZi",
  "key3": "kxBdAdwYrttYaHgJuZhqtyVYxjpjPfJcso9VBzNxNkRnedZwkAXnZrus2BwT7xfVr7j3qJ3LKmMCPJDZwh16TGY",
  "key4": "5zCPLbTdamu1ZJZQEq1gnzdtNxi7PdMGPeYeky33R6mFzdbwZ5tDXvFeei6WqeUqpmMYG1uz2ozq4hkcE7aV3Wj9",
  "key5": "3BmUAPrE8hLRKswjc6SYCkWp6p8BsS6bciR1KuNNw15VXxiGGYjxaD2vMHaTBrTsynSifgvvj45z6Ncbqvew2p91",
  "key6": "1MidqorhkaEAxtDFK1A2L7qYxYyHefSoDezVbCpYKdmeAdjZGpgspHNbQis7oa5yK6hES15rVAnhx8fBQj3uSpK",
  "key7": "52JkAFNoU2PDPVpKXPwspdkfMsdeUPyJACf2tZR5vrz5f76BS3883gsepzN2kBhEaLz1xWzqYLoNpt6if9m7rMnN",
  "key8": "3ZVSowrpFAKasgannC6P9B3Go1sFe4gdLuJ1bPCyp9hZafmbjVb77W3KPGQfMMYgTqitCjYWMyP7JzV4dDoUpuZ2",
  "key9": "36AJsYFKGCaqWi2dW2r33N7jYpL9ggm7PQQYbN9TWDLZ5HrUQkxWTv9pgEFxvrks5ixYCcJBzW7S5FhYoWFaDf96",
  "key10": "5RMLomsaaD9cF697bW6wCQHizdPcZtSwRyrNGV6QnHk4jdEQQc4zumwhMpXjz2EAbobUGWW3QZwTMYq62oexe9CS",
  "key11": "49NG3AcSe1DkzUoAdQAGguEhMogebzt9ffWNDwcCXtoTGS2PSxCesYRBY1sXCrpJAmLsy1Ja1of3PBHZFrmaEgWN",
  "key12": "5EPo77pEskapSTKmSLjGBuquEY8T7yT5Cz62EPdc4ApUujYMJCQJszu3B55tEaXLSin1taCLXKFevwmnUBPdXiW7",
  "key13": "3dH2eXbBgfrE8QPEXk2J8MLvVF14oUAqxhqDmqWgQZCcrg5AFjsYUxrxRo9pgPt2jHUGjJXGw1t1s2aCCFLmLxmE",
  "key14": "2XELAfrdGU7ER8JBzLApq7zdZivjHeCKW9RHHTgGhi8XKSWMoGz7QbnxCU7EY55NYRava372PCX9kuuzLroTccdP",
  "key15": "5ANLvEYLijbJjFi15nJuTHshNoBhkmAmtkstR6DCkPUAXzhih9vah1sdiKsCfHuzyQprtfNh4aGehd3PG1T6trWL",
  "key16": "2XMDFEtZNgPFR8t6yJPfLHgQUwjVrjLTCzUDELer2KbssD2bRJAehJP7szSAAAon1CgBiit7hZhw884PLezyayfh",
  "key17": "4HSfVor1fbntc1DWAVpdqAGJVMs5AKi37Z5YCL3mhPARWZtdMsFM7BsB7aB6nyoiMujf9ZuDhu3F8jgzvvJZ2TS3",
  "key18": "2smsHSdSxpZRF6gMwMXvvvJe1XYfA8y6Sn4Qy3JFgrGYBrZ6fDQTvg6yG3zTWxm6KC7ZGykU2Hc8V3oC9QkvVb8t",
  "key19": "5XCcvHSVawLzrnDhdjDNruNWbvqUA4S1N8iGJU98bN5iuSTHTLrJJUEeZr2wTFEgVShGn5Ny6bqML8WW5YL7UnMp",
  "key20": "4p5ma8UG27osa9Jgzr3z7oQKz5Xz6g2Z1zHfDARqY8yqxfJWpPTF1Fz5mXb7bEwnfD6JDGcB6awS7H4DGbfBEXwm",
  "key21": "5TuqD6Fcac4i9VSV7VNAxfUvKpzmKyjYohysNp9hVsNvxy7xgfNxCu3zBVQ4R6EUwnynJGb2pp17AzrwExJp1C2a",
  "key22": "4XFVmo1i7Pt4XbwJnJw6wdiAwzss1S1VPrWSRAXLaomSTBqQfM75GkHU8pXnH56U3svhynNLt21wKThVakGaUByN",
  "key23": "2GxUUm2p5nswVe32tqjNb4DmEB7DNt3er9LNe3i9Az8HTTXkWVDmCdaqKKo4TWA8TJovQRbsDYdGVoDEpXcHRASd",
  "key24": "5eUPf44LUtZNckEPN35sfmGMjk7efx4ypeKxN6FEEpmM6rz75VeaHNYfGz3k3qEPkmjbpPR7VRuUgkCUhTMenyJC",
  "key25": "UTESXjwwstDJ3uGWRJFFq2ZDk8ygQZqZy9fP3Kkqis6YyCBVLpvvdV96x9XRYDUfmgF23QZi4457YvT1Q1GVWhT",
  "key26": "5Ywk3sEGn3sFVeqB5XGGCe6sN7N84ZQcL8rP4MRCAjH98nfyVyYuL2TfTdBJGU9r4g4yxzfVdYDGHQARSXF8KZEZ",
  "key27": "2xmGdbaubYczng5iKw7F3r7RAUCAGJs5qixzjmjJd4mNSfteCzFjxhm61RhSczPXbCfGjuLuTZSCVYx13LUspCpw",
  "key28": "5vjqQRSGzfzAM4U5sXcxz98Nz574NAWZnJVtPVMHkPsavAQKrEMm9iJxBZnQ8NKHKACEJ8gnMmBk3fJK1Fmh8uyU",
  "key29": "2U2sgKbTFySpRDs6fWQ6sQSET6oumCU2azwy6U5yFYnkm4bQXtdi8kZjvo84Dqn1WM2UWC53hDxfbEmEFXpditNN",
  "key30": "5dPWNPjboepawAUckQCnW7BUEmc6yGEYpW149dWjUDYQFiaNQsQBw4X1RLbVBnYPNBuMHR9qUEGkycTyV5titz3n",
  "key31": "4rkrFcp7DS9V3iTLBwSTaZw6GByWgHBmdRXBMkpa26wUv6Mezxy5abPCymx8i7K7LQpcWvQebwMxADVNpaA9LKEL",
  "key32": "5MpniGsLQ6eyYY4W6t3iZ221cuHafrB27coV2NghSr1CtfpRgKAqeXt7zpQBZY7pwGdPQfg8ZQwWX7b4Z7qLSLHk",
  "key33": "5dcayPDkDXNVBPKhgX7R9EVEgcrPjgb24rrzdosDXTUoVHpXtuV8zVdoE9gaiU8B3oPhjqgNnG7FFbqp75GMPBhu",
  "key34": "2TH1Bnr5GzczzKGbdFdGT71FksnfriBGY1ULWb45tK6poNfhgxhcsDCdH4EtF5tsCm57wYaa8tfBq38ddQxaqBxZ",
  "key35": "2WYCHbyra1MBH9N1Nq9PkjLtvJvRtN2ZpXna7LyLgmZR81X9yY4oxoNENhAmMLCysnHuqnUUFqKQu8ETX6Ek4dV9",
  "key36": "4dk4KRPsUS3vr54BjksMce7QR3kyZtGCcpHnT2EhbmDUB8bcGgSeq5nfVPjDX7LYNbAC74ge3DZqzNLHYKUyZAdC",
  "key37": "4mNvjjyfiahixGF579Vd1XagkfXfSJKP6ggpfbx8FCs9MshVyNoK28nugyLp1bgYs92kPy79CqLFyJvePX8ctu8N",
  "key38": "3pk73aEf8wzcaUyJJW1Wvy3WmyiCK9atMzQM3nHpZsDr9miqKPNGeiFjVCuwn4EFSF39ZFXbT3ZLJV2vPRKse5VS"
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
