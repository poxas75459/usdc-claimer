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
    "5TMQoRgxEGe9SncUQ7CtjVmNRv8cK7LLHeXecprHgdYdn6dRsQpPfF3r2S4Em8hdHMxNgBRvGWuYyHsrbxjaLB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FoSMYW3w8segTsrEFFa4oMKAZzwHnB6NMs3qnahZwPGvc7MidbvsrtCtzxuf2icoijCxYzEcAFXdH4gB7ZZCkC8",
  "key1": "3GtURdZNDbhw81CpzZur4FP9d59NFxLGmVPpmgXXWUAdAVYaNEwW9Awi5iGT12r2C25dCZJvte2FayvTfpFj9qxp",
  "key2": "5Xoa1yKtqESTAVyychoMQNWWhoXTJrTtFPaMT3T7X4cSydGDPawia9Caenrp4MHsvb2YyW1H6Xyd6ajawpNBW5yK",
  "key3": "2XsX4VKAXhuQfu7umZwr7WwGJJSDTV6vPcefKw2CeAJ7uzhSiEBZMbowaFr91qMbhdiUy3nYgd7gNrf4w2i7Fbcs",
  "key4": "5LLe6MZykoDUU8Hi1sMtZqD4ETwK24bQe2MuVdgXGdrVbnYEqEzZaM6xcthBAAaViqTJfSEJvGpWS8mi6xVxprLD",
  "key5": "3b5sptD4mP7QDBPxZ4Ls9G7bseWxAAZdDmXgi3X51uB1faoELGaAoFgxBpxHgWLdfFCVYqUziTwpRntQYBC1NJaS",
  "key6": "5GTFosScuMYPaCmS6JxSVaJ2pmRFghr428uJqdg25CaSmEQHWeYuVJAboPYKDMUngFLsdnfLmJ8K6gfCL934qrKY",
  "key7": "4U6BRjkUDUUEGhYHQ2eZX477ssm9B5Z9gBJUzBVq56j4u1zDrbbn1sKBFujikgSQnCaSSRRBQGADkNmNpKwjCdXY",
  "key8": "4na4BDtqPsZLXKmjagfxHzMejmFtpAHd3AYR4pXyTBak2RgkpEozjyExkYJdpwNRPy9eAcfNy7Ci9Pm6Jh3V5U1J",
  "key9": "3SSdJyCVSz9DpucvVTbPYCwxwtYuASYjw51ARh6fYMiE1Xrw4a7s2EUWes7d3uzX21D7WJuciVxYTBwkVFHb7grE",
  "key10": "SkYsJpKxSRW3gZG3qnuSscHYyUm3MggV7pzA2vZWFpVcxg3nU3n9x2d4uzCSkChB1wbEP2tkSyHFbARb2yiBDvC",
  "key11": "4vGjsiAAQ4HV5kMHe9EMhy8eD6BGXymDgPd9z5C8ScbJC3v3pEpxh1LbN7ffLPUhP3jgZTavcnSnBfcuzbJpNafR",
  "key12": "35nhzZwpPzMf4ULX3epoWifeVFw8m21BbfgL1o78JD8Nnuar7fsJxHoJLVyEmF6oFjW2FhSM7rw69VDVn171s3XA",
  "key13": "4MKRWougKw7NSCzqPJD4Fs38NZHzyCpgndMGmxNbNCjpFaRhbDZNwfpToh3GyLVC2eaKh2Z1etX67KJ8RnAdULsu",
  "key14": "3ugcwp2wnXmrseMYeAbTM3umTjUPJGTMqbyBUU2Enp7QsV3VscRpanpxe2PKzredj8kR1bs2yPDjjZ1nHYE8uvWn",
  "key15": "wJUasFXFfQBcBwfYfpCwZRnghRxMqzMwfh62xzkfFscVqwaDygDYsoSRRuA3yWWo84UWDqwpJnNPFYiNHrnVXQh",
  "key16": "qwkTjeKjxvTGto2cuUEkb7us9Vj6qXxyCm7nMnw7DQvBamcKVagbnXwffcGEXwqu1wRSKznXBXKkMXxrrZfncxU",
  "key17": "4EDcHka1FTznkchHVuS8expPi28ZdeBMUGXE7FB7Vj6UnduPkSXPrXERxkNzQ4H1ATwSqYLcYC4EHX7e4yXyNbyD",
  "key18": "4MyExJmBPpRrZTBcqaJ2GDuUVJezmfTmH1eb6GrvQdm3wiHEhjBYVYNkrEeT9hK84Lx1TT3fNaAnYizFEQ1czB6w",
  "key19": "3eXDRoq6pWeibNsiBwP3YqbfNxbBZZQNAGnJRyzzaq5fmU8dV6PMy5R8GN1UqxaxSHsZQoRU432GdiFrZo8FLTYe",
  "key20": "5FDVS7g7txRDUSRVvP863kkfE6xDE8mswQvAQQ74erw9mZ9Qpn8WnN98ieojs1BQKLtgT2THhK5yvuTw3r1soA8Q",
  "key21": "36Ezw9S3jbg7NSnLxjsRK6R9miDVtp6JSs5EiaJ7yeaFhURsZ2rM2CNw6RWCC1fsZkioBM8nvjsKQLeC8NfTGZFn",
  "key22": "3x3fcgqhuPepagCwPNJKuURfVSSMWxkpJzRTt798vFVuaM3BPYpgpApbdvg2ZKB5zXcQUiMqEDoXf6yYzJ5T1hbM",
  "key23": "5FwNUEqx36Np6Lb9S3vo9usWPuzHsFReaHinHNxg2NFsT8rTvowFi5T7dEL6Hv9yAcaND3cMh4Nxz9psBXjPomxC",
  "key24": "5G8mPXcur61QvzaMXisSrXuVech8WbKxuxSua57CEKXuiyjEa81TD41cGxAJZSoLvDSgJA4xdoywAQgTKE3EXF5g",
  "key25": "3pFXfw7kK7fTsDkiSg354cd38PzBeGD2Gk6RJe1ruvnszHdGWJ4srRHuNMb8CHuDf3QZskVt9dwcVUhNEPaFnbys",
  "key26": "3Xd8AvTX3bh3fGmMzY179PgiMgtKfTgYF5TFnPiCiwCzTvPC24MJVYZNHD7WJJniJkSW8TXMyvQ1vHKFxcM3DJDB",
  "key27": "3bJE2Nt1ZFVFcMj6hpwdyCe8ahSvpYSitgdmMLRZN5sJmg3Ss5QCn7U5pk2sau4QcN56CHqHHnHWhc29NicymgMN",
  "key28": "5MjQu2Ci12YdUebufnrq7tZNaQGmyn4pvSCLjwuau5QQADfNPFj98ZcTQUuMHeLbqQDvLv84Z7H5QzP7VM7WCLXy",
  "key29": "3a5YJQwzSHGXWscQsTczbh9oghansUAY853cweDe9aBooVizU6NzsZsZs8qsBeyaDT46RkTkBKda4RpS2sm8pjqL",
  "key30": "4k53mXQGJznzE6PaS9DBNXKcqmPXY53hCCnoMcU7XsMvLMvrYgVVMWsSsuDC1hgUVYwpWwfjiXwMKqButDwquqhw",
  "key31": "4ZMfyatMJhwi2UcPNhN7uHB8oL8e5t5hF2TcTdm3RHrvewn6Q3fbfkiEYX3A4CjDzPdnyjqfC2CBbWyHU7ikh5eP",
  "key32": "41yQEDGm74xH7WqprFd6fz9EvTSSUTykWYdhghnsJyMg8qMk2uCdQgLMnhr1JC3yQbfSKZ9jGtmNuj6jcG5MJWSc",
  "key33": "5V1hbua7j9JH1GbkduaFwx7fQy6pQa5PtFSXyFUua5Ubr8vsaZqQiapHjjr261uKLLXRqic2ZbDWNLPtd3x5uPed",
  "key34": "4V61KGEN1WxgfxRcPnUCw7sG8stJnxs3WFLFwtJMjksrFGkm4gQfjcizxY2GU899a6D9awX451vMRa3n73DmMXzL",
  "key35": "AAFQK8sRb5R9sHYXz25o9rQoz9Zut9BpUHK6z3dXQz2dg55gPqTKcBDiePU1CBxEaHLjUWaDqkWi5Uoe5bY928L",
  "key36": "637SfZy8phMjauLCs6V7buz7Mu2BhbZNuk9MGYDRd1NuSeZ4PKGS3rQY2TLqNCf1SXsHRndYD5NvA7GAvKcfMwNP",
  "key37": "4wGPDtoUu1x9oU7pY2XrUrSGCQ1sCxozP4qFX9ktuWzzNHPrdAY7MXUgvHvioX9sQFnZr8x4NKFcxpJdwASKihhf",
  "key38": "3tQmojWrR8srGLvuWxxiYnK5xUjjQmXdu5CGPamtXrkSMZXewvmEzmCUu5DHj2PGEM6eY1e2jRp9wbaxuozWu5BH",
  "key39": "A2EKh7fPdRNtka6sHuhfAfPenJuC5P8YCpysT4tR1DByFq6wuZ9c3EN1n2V2iMKUgCEKDc1DaLC7AdLkScSTmHU",
  "key40": "3xToQsu2CKC1nXrQPEdU7Uo3caM5Wfz7syuemu1UCopZotZmWvg6ieYMGPfPM1ZxVKCkqiEXkx6iBhr5E2ToNE5T",
  "key41": "W9aXhoXE7i81bCXwauxouH8nr2sxTHLzhfUEFfjwF1CaRndPujy4G48nkNsFasHMg39qm4b2ZKCY3VwmHvMYP5r",
  "key42": "3yRoCRhCMu1ynedUHLzJpFSHcUjybyizqjG7sk4wQ7Z6MntfhKPavzN7ijSyLcPE69xZ8BUYnxRbf6UGBJmpTjHR",
  "key43": "5EXsnfNFhfWXU7YPKwZ6UREWpZrsp3opEouvEicWRBV3qQqwFXpzLoB1n1LFdrNQ9qJAiCuwpDu8ASmpKmpsyKzJ",
  "key44": "4xsCpKb7PBKgVV9wFedmLcW4juKa8URRTgWmwZwRiSQcyKp1SJuc771JrTGDc5w8AxXq7C6HRVd11BroUe23P8yg",
  "key45": "4LqyNZ464YnuzKJjLqAXzb3eCZmCBpowRAptdt3grygcSGwu6Up3CcHJtd8AfMqJRLsB1qnE5awMCmswzRSU33VG"
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
