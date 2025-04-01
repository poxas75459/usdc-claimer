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
    "3kXuA4MYFNiucaddQ2rWhaZoKUBMZAjiJZ9uwBTEkvGq1385NRZQmaNGYkGowwa7ZBfzzw17PpxTAywt4QmXS9og"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sq6ipMNgZfgGTz9qJwQq8T3oGekRdi6okDBPWmdyNepPwYQtjAVL9zC4mnALE3aG7MHVryGp5o117AvebDLCTLX",
  "key1": "5RWXmdDHCJ8VeZZBE4PJ364p8gAG4vPb7XYCNWcV9CyFstmasbd5k2sdz8q3kWXa5ecKSRBSwgYLi3r7wLgPZdX4",
  "key2": "4EaNPe9EyJScurAr7UVtAiFzrG2wpBQSVQCkp6bsJUUHEg5uEJTVPeNjP54E9SVYV7xKkKEFyNDWUyRX39WuWcg1",
  "key3": "2dsttCfXQr9b1Jx862sxp3s4wiTGfmDCSySb9ch8f7Np1ZHg97r7MFXcHMhzSspgnPjbANAEMexGWaM7BZJ1LJ8E",
  "key4": "2tSroFkkabsShZ6g1WEGVPcmmepKYwCs6aJtQPhuLJ4Le4MSfmbumbJhyBucHrRRLdVtEBeVWgRjY6XmvQSx319a",
  "key5": "2L7QUHZcvgyGa7yhRL6nAWvKp4MFeGxe3UfiApcC5FNy1SGiHztX9cqitvq3t6GkkMbsLYyR8vdsdfkAW7auzVpw",
  "key6": "FHmQqH1KsXMwpvUWrwSWhLsxCJ1BZVoKudVtoVbMUiwe6C4nfpRBctGbh7fEaCRipjaz6CwvUw4MQRrSszs5kb1",
  "key7": "2ZXJxNe5nry7ucFvRr3MtkeKfUPnSAoVimUTjDSDv5XjhsWn6XRAPY8Cm5t1EUbG6hfsRHHmUZxmnUHWm69vTgzp",
  "key8": "5DwZZLFzpXx57ijoAAjHqGcU7KNm5ZqnFpZQT2NAhGL2WDtsa5GJH7hE6EgVga1U1rT4MdP9LM9jDJKrBPys2t7p",
  "key9": "5eJXjKNcgL916phoDVwUk2cR2rTfmZ8LrNae7qXM1wsB4W5MvaiiCdPUf45BXwUA9wyqQe4Ykd76VfidEFcKdjsM",
  "key10": "qg3FA3RLpQpychFgiSYhoWESEKc8bW9wnsZSJYUmM3jbn32485ACfAhzcTXXM1dFA2H8eeZcxB5sbYEkHshw4XS",
  "key11": "2SEFCV1xW6y5P8NBFgmobnbqNXGLrc86TiQn2GcNkZR141wJ7VsTAuGY7v1FjqNZfTTFi5hK38vMGoiCJYJt3dgu",
  "key12": "4kYJq9zWnRM4yB1rhnquixCdZwiyWH3yZ9NsBxWA38QSsoSBZ9Lk9rv8LGg73Qn9L2h93q2ZGo48seA2GDL6pbZ3",
  "key13": "45dUU7oLYzWkHgK32vcwZBSKZEFoskX776KwWJZgRBycUpCgvHNL1JoW1JjqYitxyGMKUNDVA9YBuwLX7wwjf6ai",
  "key14": "BNv2tShFvL1WmmaGmepgm1oSjzXWKhT4FVVeK5XdqcZyDDhrXxZFrnhqNYt8T6ti2vxin14jLymqb319uYiNj42",
  "key15": "4qjGhGQQHYwyhn8KysugzpTRjphtYy3avhWHzEY3adhp93eN3dZQuh2AAueW3RgQq97FzjhLpawsVQHRDgDj5RRU",
  "key16": "2eMU5K7EPfMsnu1cVMc3uqB8PHTpopixf6qYPiCFdBXhiZPEdkwwB5BBMezdCFCXANrYQv6moS48n1Uh1jF3nEsC",
  "key17": "658nCD2G5FzrXMBh1Nq1XjuYXKLunuu4ze56dFnd2rUDhaKHztoLh5qAPxLALqVJmqF7HwAFGpkpCV1PoqaqZyZj",
  "key18": "4qdPFSUiURaSEPiANmVKsxxn3RozTNGjAxaJnoinNpVayuEoR4gRpP24eWCF25tUNxp1zzZqeWkQkE84L9x6ACNq",
  "key19": "2vngPVhigR2Zbj2KzHqVvAiMwqxERZPrFPPmZ2t7com3pFYGK51v5YxZRG5DXbGSg6up53zDkv5CH1aJ9TdUgHpV",
  "key20": "z6EjMUbvp6NtWwp8Bqptu464nhfqMBvF8yWFg3GTGALehG4H2nBBBvHCduGqy3VGHNsUe9fVkYMmrrKkSfXDqGT",
  "key21": "2YqH7ekxt8stgKep8LyhG95AhW3EWprsfhUmUYYi4QhbhRXbbZkXBN9uX6Qw1V5s4VsK7RbkcZi4rAyVCsmKs94f",
  "key22": "2KHnuD9a4jnouzQUXR18Yz22mu33CtDzZYxGENq5utPmq2vLekYz9edFw2aTJHd8S5wegkQHckn9qh7ykgTaL1ro",
  "key23": "25pbEYkBHwCUstj6jE1CdQZco7XKUt5kQ374XdcYx4QEvgqDar8eC1Jba28o5FAxgDKy7Cg7khEnSU62djGERjpe",
  "key24": "5edprLL2e1Neqk53WcfZSMdFRBPBeG884boTA8D5VzGTSC3oDmujMA92YdnZA2kWfvUqEWiaesdkEYKZ9qW3wC3u",
  "key25": "3QzZ4WydUyF7Yk94jmbC8KbDL5s26ypd1YMo5QbPy4n1bi6pxYReprCDctL21vBsC9fxWNavkeYNZD4Frs9KZMUh",
  "key26": "3CtVpv7Dsw4FwNmYzdqceEEGNWxi57FHzFH2pgMyeQG4MpbjNCEsBz5KptP4qnpYDwsZB1NCiwiKoZu1RUTpRQHW",
  "key27": "657MRfvABp2ZHtLRQcMA49rqBU5W8gaAQgYrR5FyhCxR4yzFL2rpzp3KCDwhxc1wDwPRoFv3VkjjhHJZaPZCor4f",
  "key28": "3KRFEFYEpKmZwTPfcCsPsL3iMnERLWri9zKY7uGdsCFm972eMsW3nMYqvLTbLibF27S63pLj6m2LvZH8wTo15we3",
  "key29": "2VBsPg4UDpskXAS9PcGNXgkM3t6vSFnsx3k8aECu1ZogT8uAbxume9BhDQkYbjU8mgsKfUyXM7qnkxSzstJobEP7",
  "key30": "328P6gJpuAZdZJL5fJJMKVuAviwxUqWZFs141gk4g2y5rW6tfbGKwQtTJCc4ReX1Le9YSqCEep5XGDzw8TUBXf74",
  "key31": "4gDSD28EaAeuAFrPMdf2t2B43mVSdguqbgGbZgE68M8Ppri6M68b1kQeYm9UU2T4g2nYdA8HDZX5ZantAutEaSL4",
  "key32": "3wa3PJMDda2SVXddhZ1QQ4SFGAx4YuubF4xVWLyRig7UH8yCCELum6tcVcfQduq1vddeQD6mPhqb9GhNFBnHu1vr",
  "key33": "44DZrY9ykiQkvu6HfVX1F7UZ7z2Uajy49WNABGasoVBjfHa8y6sT8QXPJh9JR4wC8aShTtYHt1fyZjN4AdsFhGJY",
  "key34": "5D9SuEm179EKVbFbLs9bVJXR76ki9U5xewn7LsZaBXopnZqCBxXc2x335Bw2GHsYAesC7s3mz7g59J96hCGzq3Ru",
  "key35": "3NZTBHSSUgSYu8b94jkYmRrcQHVY5nbUPAyiWBE7xgFqKFuxJMVwAhLMN1CuFDrRwz7AqYaRWNwkysw4vukvDGc1",
  "key36": "26BhdNHPJK7mY7XELQ8JwYBRYsEJB9cAfC6Tb6jgzYcQA5kFK9cYCyaxm9CWJmwBooZMiNMeTBCiVLUCoddmA77i",
  "key37": "35aiuYAxM4DsToqZitF6cxZMZFAB3uYwjuCSVAPr5YMZzqdDCJA6b4JAZwqfqLKtrJEjybzsUW4XmZskxNsd2wTM",
  "key38": "5SCiSwKNBUbaoroTZeR8oDUKpDyTqLPs3qvu41i9QxMnMbb8RoLMwk54TVPkscCAVZexDqTh1XASTSd1KT8ZqvNR",
  "key39": "5w6m6VNbF1oog3jWVfXLjsNj7fXhCZZv9QZdooTXCzMrQ85YsEMaAEC4Ct28hbL1awQvGujkpLG53PmBJ5vim1EU"
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
