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
    "5fx6urF59CBL8EnNgfE6uDHbWEqqW7rUFXCW1vR9xs9bBnuozVrqoxuB8BEuwuP3eMgPX3ZYhurtRZ28MqaL1UT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lhxj7k6a5hqX1WMRYWFFZxczjeGNP8ARDeRQwJZpWSeGDYKFqwhwJMDZS8bSfRpS15L8P2vPE2o54Ub86CNJD7X",
  "key1": "65UcADpc1JUBxUfXmTHxUsgUp8KtrWEW8pTb1SpVUxL83GYLaNydVgYPecW3hgCqVz8FdXDpn2EWScyPT7NcGJ6t",
  "key2": "TwfjSLFTB2nKNhBsWp6Pr13hBR9tkKSz9XGh1tcYYG3tVXwBcUPGA1t3pNPWt4TnYuNZUgpRfSiR6t3WdSQAV5P",
  "key3": "5BbmTez7fiBzb6tUYZQLRx3qXGhNG2pctyeVw94ftCS4JZQi1EwKnx4zChB11uZ2Sdd2VeRCeCqkHyw6CVmASV5h",
  "key4": "4B9Kgecyam6FjaHJVNkyNB5fCvxEZPRjyrYgeU7Vizt4SuehzDVVUPTdB7WfYqULLXxchyZ8FLC9nTz78GoxXoFd",
  "key5": "4jdQdYsxdCbBmHJfvjuqtcbgAAXbAp3nR9W2ZALecoCzY8BjWED59FRABPgXyggFyY9aqMA8yW1yTEzv7ZrPsks8",
  "key6": "pX4MYWsmvHg1CfYmRoKkKmuPVJgYN67DVFARGzyPLPyf7q9tKNULnxLqz2af34u4PzoFmWHeP8xtVJy17fFSnZs",
  "key7": "5XEGtmDQFnSA8BME1cYwL3A9JHnvzCjRS7htQz2nighPuEkmHdoTQMrNhckG4FEb936JexnHKjmPcDaCGfamCiYR",
  "key8": "euFo5SpRCrV28PfaFNfo4eDyopUfzwWzbrXsmQfxkGm8pwA4zz1n3DcdYNkX8DNJSGKafvthp4bBKg6HCFR6yMe",
  "key9": "4U7NkUzisSbosLDqFajQt3SSdrNtuL7dydcjoxgwWMZMhpxp4f3J8ZcemYSfhHGqbgJSTVgCDA9Lzj4vveQbM3a",
  "key10": "3xtPxFey7PrQkECwcQfWtRMdNGRwDewgX73VygdiR4EvEatCKjsQpjLTtm7iQUsbFDLQGXz9qrSTFTxAaaibR3jN",
  "key11": "38Qw32tgvxBXEYMLJfBo4en6VxndjN41JJBsY4AZSoArgXTSC2dS5st5Fpa7DRjToMckqMjbDLefjSYWPorpFQzj",
  "key12": "3RCTptYwAmizPd8Un1wKbErMzPQ3pU7EhMr6zD5ApvfPWU2GS3nVWphkX74FGEdvhcG3LkrfKdCk35XVGy8jzRfC",
  "key13": "L6VaPbuAa8BZsKtfc8vyNkdxZUY6gGQM1ahHmGzcEiW1oNbPa4A6xcAu6jxcKjuo6PakYtpHCoiVVheNswgGEJf",
  "key14": "mmw2nF632qYnUUNYsCo5symvDC2Q25mwEBLRGwuXXVfiyqDYRR4s1hExHd2MfJRdVnADVz46MKSAfP8ULhzzZ6R",
  "key15": "48JJW36kyD8BFK1HAkhV51xftDv4dVUGAFwGk1Gai9m4u3Ve4XWV31wySsxk21NbR62cjPQtfSbtzRFzRfS4ftB8",
  "key16": "4WNMQPA1DvTcKnD9zzKZNSNZGHTttdusmRFKCaJN31y4QeW9XobBXr9NCNyDjxuRx5zyDVuMVdQat2vr8Mvz2bxf",
  "key17": "3yBmBhLAkfeR6Zt6qp6cWQB8pDdo3hDoCqiRkry81uwG1NHuXCkZZeF9bW4PibDAMuYBm2XRC9QCFYBTSvrzqkpQ",
  "key18": "5TPBGGWpoySKSu6rnBH4Y5ZBcQWWAgiJFdGWVKK7X11u51hfav1NkQty41vs5ZYRBEo4x3BWSNaiJKRcfm6QjxSo",
  "key19": "39Y6JvJ847SH4HPwf7qhCL77XsUcqrd2eSZDwrWg4zU6JkZ1Vtauxz7tD2vkTA7xgPkGXiWRsQT2EF9FweCv3oKC",
  "key20": "51c6htzMhUCC8N3k5fNxomZZkVsZrY5LmefZmZyD16j2HhsMUTYw224DkbwoVUtHtxJTAK33tB8CCdh8Gv9k2Gjt",
  "key21": "48MBVkXJ31EiWfphPnm8pVmT3WxJ8Bym1unyTXLXSJLV1XesbTysC5ZKD9xrDHxYteSKZmdx4iZ6WkZ4oh9xegg9",
  "key22": "3c4jwh31Zgr8RGKeHxuxfRCKexEETu3V7qCWV42KKC3J79TVtJjAGF2p3bNc7xSnHDYxtzyc3oPtpbgmeDRRg9JF",
  "key23": "whMGK3CRJFtWYP6c5kTjQfHva9KJ5ffPdNzdwoT6iNhdZFEHUShRyqdxYCGUTDyp9vBQxFP4HfKPYSGdG3Wo5wt",
  "key24": "2gu79ZD767ySnfzwXFE8rWiaaVygAcZyGMsCJMi3ofaXGNTitictqJwu14Rs1ch9tuoazW4EPpecf3KhfZJv4sNq",
  "key25": "2giEa4DyJFUr2fNdYDvB6specsbAxZSquob74n3kqCs5XpsrLS8AxiwhcDERUtC2Tu3kPsmYs5m6J2YKg5EKSfHs",
  "key26": "4Duia5eqvTwi24YAdzT9yjiRNEw1mJ1F7JFboQQb4KXYz5BtGia2HDUMdzsvbFdn5mRYR5aqUg21Gzk7uaG9pAoe",
  "key27": "gJSfqco15suA9PcptQoNiB1uBjwyn5vNErS2Ec6JUio8ZU2DHUrjV84pJYjwfTZgp7GFzi1orZXFPMY3Eo8czuc",
  "key28": "39gsBgtLfnF9LcUFNraQ2nH94pLYyfpcZXwryMPifyZoREExpGWS5Pv9wEqPm37rWGyEgZYXEhrc1g4jmfaTrgVB",
  "key29": "Bn2Bw3buQzMB4UhXq2JmENjVXMuWPpQB8toj6kkqi5VXwXFTXJ2jdAmchStkBfiL35eVkqk933dRHazGvWSQMuS",
  "key30": "mqGZvA6jajidiLfLK5gQVnG4Za9xofFk1ioGLWkEmMHckzPPfs1C5Tsbj4eqx6h58bCKNusj7fsxjPjGUQ2pzTk",
  "key31": "3QpvzffRf2GctMnrBKDYgChb5riZzFhLpHtFWaBSTedY5S5z16ZAPQr8jRHSxxGWVYvqBgSqogkd5tBtZnEQta2K",
  "key32": "8tVbM7wrNNsxCxrCoDcznws4Fsa3Zq1NsF4FwnUnVHcUMLFJrR4E5JASAqDHCihjEasAARif3fj3E7d1kAUjfHA",
  "key33": "4XxLxyiwmLREkBkVfMH2qxaM1HkhdhUipme5CuuY5xvR5eMKTUAwTmisu21fM4rNZbNmQECPef2piwi4bUXe5jst",
  "key34": "2DFffmVp1SZLqDUC88mcDdcJQLGvsrM1aw1Pu88b2ETQHjDtksmwhSUvpJ1hdPgptsHCzQFYCeuCp8jxgouUB4Pp",
  "key35": "qAu6T6onbfGxpzSERb4PFQUwxVrDrEGm4biAdDrF4DKGyudZsWrhQA1hdRd8pBgEFjmio84ZTQzCxQ7zwmWUMJc",
  "key36": "4269D3vAeDrGkUBPcNDuJ8nTvT5JoMeWrZQzfrKF9KCKJTRB7R8rsfjPSgFHhRudC5mmX7oMEQyBDcQn3rhbwnS",
  "key37": "3Tt5ZvtuRauLMkCKxdhR7meRys7MaBwncUggaJfRWmHdmvc7A7cibYuDNJSrBarBxSuR1vtZxiUcNURhTcyDQbRq",
  "key38": "2qx2vTrAPtuokHFgGnHgTSZVvX8nH1mNQQ5cqjSNCMN9nHxPX9XmVLDZgZ9gmTox9cmaMuyEphN8XWT55443oBDi",
  "key39": "4NQpNcAW9uwoYmP2F5uL3ztmy6j8SSHo6abfAqGuN2f818EVxZAwdJWQSRjf4KQ1eeEYK7zNcFNMM1ze9sxhebcu",
  "key40": "4NAVhCmjJ2fNPBBDSdswTyFexHojUdVWLfZPLzZkKvVXKn56bSQnBFYufVjnAcqJTR3PTVTeGWxAL5c9EWzYdDMD",
  "key41": "2ZXzRYF73dy4eXCt3NgGypueTSCiy6CTNtXyLna4VSrV7LCUg4pAEqxeee3pcpZAMvcZXVxumH15ZwH3bLjwW9oA",
  "key42": "4VPbhJKiojunSpSEKtCv4Q8CGVhSAzKHCiNtr7DcFqEA5QF1GWSUmadmzXGM1BEXTqQ9De3wQu6zgYFK7vpJpicH",
  "key43": "2Z93ezc8BuspjrpgmntDaXCuTrSu9mM9swqjWGVSpzidhSyRUwTwrVivew5ebbEZ8KN44BbisyYmQgARpYLpeX6v"
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
