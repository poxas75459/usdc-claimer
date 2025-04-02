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
    "5RefyyMKetGTmRuSwowp636xCVmAhsSRwrCf9nADmziWedz17iyEkEfWC2gT8jv8JvkRYmd1V94eNDzAUihehP5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jBxKN2wvU9mn2bqNyjW15BjE4CPakES4fh5seN2GLRow3Lu47giDSX8pFVdvaeXxCKeknARr4gp9bK9BXkVVmFE",
  "key1": "5d9HLD4pHL2tkWM1bpma6dbXeTetq7uUjbonGtVhECxVysyaju4cjyXGKs2xEgwWmwwZ5bN8SYhkHCJD45wmpNdw",
  "key2": "VCqEm7WxTdt5wc8jHb5i9Zsq69YFp7pdsUpqaZMkV2Bo34CpHUDTjBNb2JTFweYKnYx6sfnX1s6aYY6MyzRHmiR",
  "key3": "3oMZRqYhdrGsnWxqBoUfGT7Az1KxkB8oqfrWR63fEqzFph9YgyapwHJVjCXbBcHnFetUqMbcnHWCpW8emto67X8d",
  "key4": "56nemqHiWwQmwcsLTQD8jC65Hfwr8HVKQtHFaomwckJDFMFD4uCNHCHKXXa188g3VzjFCqkydwsEpHJC5Qsbhp9H",
  "key5": "Hfv3sWuHBuPhBy3rSNmMKeBZNYSfA9DcCTVS6JyryZMGC4A36vyfvrLXoi5tAgZgRjzNDtqZcLFUain8RjcQVHK",
  "key6": "K1U9Cndp4smNjiTRTux4gs8ewJMFi2MsKZ3vrAPHRWdYQKiY7Lr6Ws9RDc4vujf3JCQ72ysG3mPA73cJU7mxmrw",
  "key7": "63wLx64iU26jyG24d3qARTovQkdNQ7rQUi2QmtfJq4Gxiu7wsScyASA82nmkZH8HgAS1TWnrhB7xLH6fucu1DaHm",
  "key8": "4mQL9sGkZUCpKwiCH8ZFYnuGrSZZUvUDsQAnGNjgzKUD7hERRchipoQnjEafiYCguUeb1YMrox3if4FAJsHAKAZT",
  "key9": "iWgRDvG4dbvaCEcwdg6aDTMac6Lhf3uDi2nft558jdgVbxpRENsE9gbmwZTL8GTVdvKh8BQ1rAuZJSDUi4w7Hzs",
  "key10": "3dbbVYFHU3AA6z4XmLGNK6LVu8Hrdac59ibkLrB4tmeSTWXATPXDg4oXQ6FhCuxctwKGHkJmCinuX2PQSonQnye1",
  "key11": "WUHytMeJSTh66A8aREBvV4vb3RpqqnyqCz1HfxXcwyLFyVTEAGapy8rpA9YspE9AmkhfsHvm52oQFSL8864hrGm",
  "key12": "224cSUDGi8ss7x5L8ApD2nc2uJjxQsZmJdLJpKECRNLBuf5WEzov5ZLQQmNEaV54bHgB2ME5XYUCQ5qpBwf3tc5y",
  "key13": "47ccd3ahmgUYcpoD2dAaY2brXSpeEWoedN2K4NQeRB9fLhJQGCQPwCwFiGAHjvyY9UhrQGLkrVzD7eJPCJjFCc4H",
  "key14": "cZcsJCww36Gu2zmJbjccyPev8gGPFfYds6woVREoXWPn8fuq3zi82EDkfaV9g2TGqRJDHAh5Hm4g7gizt8Kw3N7",
  "key15": "zGsdCe5Dt7FUiAkKmAtQXTnBxACwgLDFRj7wBAHFPYLWPXniY6hHxt3BcYRRkX4oEpGRdqsRA1vpsvA7RyPoXS4",
  "key16": "5D9K2fTshrwDGJoMMBm2VC5c97W4Mv2Rp7VzPJDV9HFpA6hUh7GRXbNW8Gcu98tSmMRvKGjye85ieyRtSfKy7qXe",
  "key17": "3RBG1DeFspkU6i1KqQckwompuMHMCag5zB5uhNM1foUSkjFRZB654qLwVCoPQJeWtPvsDZG2hLGkk22yNZpuSbyM",
  "key18": "v8QN3PW4cB6n8DkVKCBY8XqTvPsWepnV8n1pcJXhMaA3u98VQijGNpn1pYVC5bS2K79BTp6BPX3W7ay383gmRHw",
  "key19": "2TVNM3YwSouoY6buUifPdtpn6WCuH7a966FQeh71KREz5nSnSi6bqJyQ9ZqgtZJTNdywgX8rCvNx346yffioCSqt",
  "key20": "4g6h7u4Sw7Yxw15ozDsuWe6xcBzF9vYjpUcwRwSAwLapfr9FNfsXoLaymN5CPGKP8eHEY7HiGXWJbppHxMCZiEn9",
  "key21": "KfkAoMhYadBSDF8iAUkDarXkFgEvAuL1fdAevjdXUt2hEu9CcP2SJ9Gp8d4zbJ16FZ7RiafEWoovuhjrj8w75XB",
  "key22": "26jqa3VbSpbKkjQNXedxJY2idMa9tHatFzFqqiLK5V72ibmx4jo2QDsD1p3Xqyjm7wfR5R13EDUsuzQrYCSPLHmC",
  "key23": "4ngNG6Lsa1uUJhwDVgY64eW9gqrzq2J65jnYiuHiUWPAwaE16FFRMm6prpTD5p9DYuXvU1zYrdsMqdTsq4pZDwwT",
  "key24": "5y3gEuFHg33M9j9MRBkeeUGc87PQcZn6KEAgVASCpE4y85FBFZNUZiuBajkeaTb5XPeKCisAvLm1CgZ2Bzzao85s",
  "key25": "2qZGmecSEqSmnuaoHGz7QNjfMY6HVxN9jw75Kn36DK5vNA5HeJC8HXufanqXumG1Y4Nq2QPdwJMSH7XbAn6z5sYL",
  "key26": "5yYf9cgy6PmW5g1uLeshAMtLEaYKSNkPuLq1CRizg7jdeoSP4ah7iTrvyptibLzmTedBq4mekdB2obP6tsHbCdkn",
  "key27": "31CkUuRvx8rzoipgYtVV4R67nHgh3Yk3qE6BzXuSzXpUpVDWwdXQ76AfuX7HzC4cMcDvsirNoGSS65ZyzAJU71gd",
  "key28": "ggeYRRQbFvpZZXTBsbxzMtnGSj1bdiZE7cPfN5i7jNEhx8mQjGc5oeoA3GAW18q8Esw1tzMh8cGrpzX7cfnGYCt",
  "key29": "5j1gsdNftWutsSVYavmRb13XjVbwmhybLZS4p4WLWnq21GtXQgfnQgHdPV9ATjnj7DcnRkK2zsNkWKABdUp1hu1m",
  "key30": "3MWRHCFPDo9HHHf4avkAc2XFjj5YwyHxE7oxQapFgXgLwz5RD6FfAFFXA4BSxEu7Sy2nmEYKjbqY5RmuKgJU1g7i",
  "key31": "51QjaayzQPUyyAEiEmFbijmBXtggzse6cy6PZZzEbb7bABNJwsvzdSRdLruhbecV7jdtdvdRxmzzgPDFovhYmdBJ",
  "key32": "2sBHk6fCbnLnVKQKEpknW5oeRvLXVhaiyXUvFjkJW2m7jZo3k6hCb2yVkSGkqpfirYUHWMJWzZK82oS6gjQ82srz",
  "key33": "3N77FxAraC9CMrkZ3wP4H5cJWpEPtmZz9g6WpSyaP6sLrQDv1BVBTjxk4Wy9295tzRT53FcuV1DdQ2ju38k2o9uc",
  "key34": "3GYeU41YJk21ySuWmMdJcxAtX16CJxmvFXcuXX3ZCb1eMRE7bCPf92ST81sVZrkbtbbyEQUHB3rMzJshNKYv8dAc",
  "key35": "5yPW15f4MCGqHfaqMqgwQSFfq8pzkJGzuVeRa8iifLWbvfgfwb2Ji7fPFLXEzbc8zoRryhAzpovgzgkptgdCB1Wc",
  "key36": "2jAECppeSVPyyHiMBJa7quDkUHThJCvBQfBbmxwNadtnVgte2vHB367SH914Fus8oYa2y6eFGz6JAnpH3s3zJkXo",
  "key37": "2qLjyvwKDhWJFwmNVTeuRD5MuyfsjsZb3BS2jUi9mSm6nciB4YtyCgCZpN9EMk38uyYrRAj6vm5a6rVoNrfSd9DQ",
  "key38": "3vdDRi3dyiCKqFDMV6FRCr84ZCZP2cHaJjzyxd2vsEwooy4ehcpseJMAeC99hZKpCaAqydhuFkjgLR4FEcXHEBdZ",
  "key39": "34erSggHXsyGv9KWSz3Ksd8dmriDwLCvBUbZD2cMyVfXrTqyxJUTKtpe4HyxERBVxUC7BTnXpUENvnkt7zgbezH5",
  "key40": "5t9n7SDf2SYL25rWdeYmPnwdRYuAeGrou5nseiEp8kjMua5yqPnSjop7VUoQ66ivcWL2LG4iCimq9vL4XLkdwLYg",
  "key41": "26ngSF1hpWs85c4cHijzjcoGzap5fWuxH4iiJ5fqwuuHdS2CbhTF3VZCSvK8R6W6H4n5NsVi2xHDTwWiuu6oeiwy",
  "key42": "4FPR1Cue9wGjDf1sYRL3GKAkkT4dRoHbTnLeG9D7S7Y9xoyhWQdx2mh4D79rmzuNhPum9LpqzqwzaqFCVp5hHRdv",
  "key43": "4VtdYnt76kwSa2sgKUHxsiikFX5MURaccZXcKuUUVjSVgNbTFFa6oPesFyEJz4QZN28dFUw5CZmHd1KkVVaGvCGe",
  "key44": "2PUh6cDrh7s4Zx8ZRNbEyoajkYPoP9YA4Cg3SvwykKMQVUvVQeKE9LZ9upsF1jYzqRfCycKPeX3omsrrj5azYkPw",
  "key45": "49JxAR6EFv3YU6msHaEYqcNMeppuq7VTNJjE3HwLmFYw2QEiHKWBfKwXDk7C8Nn1ahNpDPcDeRSw1VfyaQaEF8i6",
  "key46": "pyJ55jfy7tcDTZGTAXD7H4dJHBkCEEtV2A82t3pni946euPnRVdGRSeBBCrK4wt47costeAvSqoeiunVK4PkYxP",
  "key47": "42C2rajL47Qj65KftqaPv3LtofEBwZZFQPgZio8ptDmQzigemBqH69u6zCdSVj5pj9pakPDkEachE1WgsCwW1cp8",
  "key48": "3nfnebSoPp2i2jFF4p1R5cEXThX3fqNaiAEU362ZBA3dw6mZZuz7gg7kFUrqtcKNP2rhK2HU2CfSKdyirLLdHdpF",
  "key49": "4XawoTPx7MEjXc6Dfqd4xoF2VnkU7W45KCPDeZHheSByEdScorhX3FdU2N76qANWpm9zhf7a7TjvEvRUfiqUbRAL"
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
