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
    "B3Lc6Cg9hMSafrYJSp1uzxyDzCLMp69WaAmk5Jm8xjY2iUBJfdMrnTMWStbf2W3Mswukui5wf1F4dquKdMJcTcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vTfEnwcNRQmabcu9QYiXf7k7J2XDYRQAspUJVe64t2FHQh6JjZ2xfUtraSqwyxtddQQn39QvRH9Vcm2gmUGLkof",
  "key1": "DcTjZofKZ2Ca4n5dRiw5qMmrMDaNVHH5B5qup7ZJzvGSFef7ABfo87Z4i4rHQVJiBFSxhunSmuktSA6kZ6KAe7x",
  "key2": "5FZHNSttr1ayz64rr7EEKLY2zvRUNzYLY2WFsvVBHvzDBs7Pjx6ZZiEie7h77KSmGkaCo8Jrw2bexAg6hX5A1gi3",
  "key3": "4Bj9WLBRPnysqsRz4QtdMpA7KMkZHac9w9PB3ENLV6nZGMcg8vn2AWtujJyFZ6fxiYAjn6wb6bXMbU9ak9spDAav",
  "key4": "5MiwJhDQsFgrnZq3TBeRRg1W6aePSmrbYVptqaVK1i5svgSkCkkPeso7vEPg2f3wgcifHHhfAcCHdPcB9a8Rk7sN",
  "key5": "5htDNvC3Q6Ac9b5SPtZJU9dQLuxka3aAJrH6gz8Cxc7oWwrGaUQDxDMxEjUqnyPPXuXJV3AGN6xDrTfXosHF2XF1",
  "key6": "3emwsGZs4VBr8N2uagmpph43faUjso3gLHfsoU1ek1gs6hfTw6M6cJMmr9RShKk5sSpUTM8HJgRSG8EPrmYNjUD3",
  "key7": "t4uctsAiZg3nq6WBEKftbqb2J8B5Nukzu6HzwoGbf85FNsnS9khKqcMyPeQTLhwreGnfRZXHkJYWWsSwwwoTYFT",
  "key8": "2SBKdzTpw9WjzLSg9iU3vmRmTEram2QPnuu8RxFLykeigWRFe5LUGLw4GKWUJshtUoJTACDSvLcjPmPK41sxawRa",
  "key9": "4WBDZFNfTgNgZUSMEukfW5y8MV5vpHLNrMnnfxSmcUR5vc82oAnQcg64taagVmQthvjLc3XfSqxV6V7LsjxibcmT",
  "key10": "2FRYr7AM8zQJ7oXnvU7sK1XbkanyoyDFujuSVSMGFTmSp3y9jj6D4zaBudE7F4ZioLZwDwYKDK4U2JsCToc2tUSS",
  "key11": "2yduxtbprEWFikwgKBggpSw6wa6SAqww2WChgGWeennHrk21r34KsqM3TUuhnztr5G3a1VnHvTSDrfZQRk7hnrEE",
  "key12": "3jZrYgSxk2LLA9SuVX3ywFFLBihPLrPYCMVtFqQGPaswXfHYnRPrdeeBg2Tv1Bka4FNxtQphpiXYYqMK7QDFRgpn",
  "key13": "fUDZJ2cWSiWG46Q9gmZvq7jQsUhoK3nZ3gDAfA4XA1yfwDAqBu2x72ByqGtAPC6TPMFnEkA5Kr4BAAA99HT3uqB",
  "key14": "4MC2y3hHi7N8HTHGvSMeAqJNvCsZNhj6wBJB9uvzGWEBiqLc4wCai67KYs6rpSbj2qQgXtqwRRG8Eggqc4eRc5bV",
  "key15": "2jkSGhn8cbaLnS1QMbNT78rePNJY7rA9mbNsK6SP5C7pAtukoQyedx7uqtkGDhnPWfycuMn5iLNXWAZNH1n3DwvS",
  "key16": "4hRLkSQRrxhV2o7BaDDouwrHQPN5FkiWyGrRgHKxmAE3Rrr8UAJBuWTCr4RPCcfJ4CKQYPfiPvj9eDJSQ4fhqYMV",
  "key17": "2PbALRYa9r4DQyWU8DroTPHedC3tJHiKpzkisbfuoV8zq98H1174e2JLHLYAAQEnGdT6BZsYRvjAcCZTUHhmkipY",
  "key18": "4dmbUnvWFEYLjidLgEaq7zBX61yzzWyA1k21bFscUZwM6YWyEzZSGZTQHUJEWarEgVKVE1PyLR5ks96ruP6mdXUt",
  "key19": "4TMwmVQt3iD3wAJQ8Hs3R391k9hCKV3LAUepcgg2Va9ZfHZMDEm6gDUXAc2YJ78Tyo5wJX2KwWaESi74qta5tVp2",
  "key20": "3b5tJMVN86p5hT5rWMm2axxvZqZGzqnZRzfgdWqrJq9T5rEyisHXWYfcaajUTvhdy2o432M1Y2f4RTRZjefZqTZR",
  "key21": "24PheVDY8zTSxFtB8KNQQTZ2oFQykv7X3iQXCDHQZv2GM4adJkCrQ75FRRP17MYSN9Dde9GMtoorPhmfEgKQBn63",
  "key22": "3ZjsifNwajP1ButpMSvxD7ySyfUCt1MkbLzrjjXtXktJkgheMQfMpv8mbR5PUoEvGqKMR6c3pbd6q6wmuBDfmMjf",
  "key23": "2JYMLfA54Xv9ttCN9bUm3YM1p2RMijTrqVyVUokLoBwtE59qfL4XxHv7wouCJcy5w2uCx9uooQC6iBRKfJb1rd87",
  "key24": "4McYr99scDW2hLJwYH6QUpSPK1oLRUyPyDhTYsCL88Yjy73uj1J9wLyWjzVZjLGTa3b2eKMJ317HCxn7X1b2AUsK",
  "key25": "62CAJVULHCyiYiyZkLfZJoxwwMRgfCyUD5iRACXs35TpsEL9yXzpcQ6wvTP4HnTnwmR4prE3etyNJyN513tWrFe5",
  "key26": "YzuHSsyr4C6NzHsirUFE4RSoZLnFXuDP9Si6X4JRZrsemKLJRbfEXjQdfSvFN74Kv9WEsk3k4pQp8rDRaQjKdV3",
  "key27": "3Uk7QZRDsBpmANLbMaH2kNRS1LXf7wCdQZXYV76qwubK3roXGeRFkA9ecpecwWVtNG2FTPY7mrymsTVJHu1dSuVA",
  "key28": "5VQCQX4niFbhspQYW6eA7pAg4fWjZXNWPGYusUta3ocgrszi4NvV9ni9iggWNum26aL765dQUFBLgzKRagraGtEG",
  "key29": "5Vpb16eSHShFcoj3h4SGprnxYLSggfTYEjADWDCAiCBG8Q9oWaBq3pkdqRJKM7xJSpT3CFEKCHPH9Qi5BWdwhzsb",
  "key30": "3n37Beau86oukRqGQAYHrB8KuuTkQTCqdDLvJNvLrCFV7dzJynoPuL5bSH9kzEYWEdga2ChazTkmAP6NZAm9nDNL",
  "key31": "51MtFXsK1VGmhbAQmpm5pWqDbKsDNqGBg2JZqE1JPeuMMwaGzTZArFaQTyPyVB4oRsVfULq37cmDVERVLRbBT747",
  "key32": "34ZDaWrV2ZqFHQsnquyyFkMd9kjov8oTVbyRXusLoxQLteMnKeoR3mRGypuLmYQQks93wfqG2cfwVmLTQku6EXFS",
  "key33": "5hSj8sLkgJ7UVDEa1qHaAy61UwLYRSzJ5oUeXfNmExcxpsKnZPXohCdTft6Lfx9nFrLurQScd9Bz4sdkhhSnmWTG",
  "key34": "61wUNVG69T2ah5qwNb4sTv9S8pZts7ecwvAMGtxvLxAio8UvmnDaApeJuXvKwEyNhagBB6duGKBr7aDb7BPziJ5b",
  "key35": "3rL3dSu8BnkrvsESYvXxJtSPE8QzbhYiyrGQAfUaB2RTC4iwjaRbUbQNnx2y4ZZ6XNKrjYRSGvmbehPkw4nc3C76",
  "key36": "4C1mf98LuqfVXHkMR9Vn5hnuxUzMwKHyxEbDzm2hQtMM2Zp5az5H4zikKQYovyf5xe99M6vbsw2bXr3CAV7qHEsR",
  "key37": "4UTb8hFLtG8cSVbS3Lhw5x3tWNTyVHyskydn6qsAPSXKrotVcki4oTtkPSNU9qL8MgZuj1ysw9Uqivqwo3cq1sqg",
  "key38": "2x8AjJN7Gv5r3qcdy8rdU9aQQ324RXPXmcQRQ4DPdL2XpaCtzPXvu5sYMMHR7pk4QrtbF7bhwpCUQ1YBbjAtcUD4",
  "key39": "2ehjwUacKQEbKKNJmL1TWUTMYSePMwGjEvChZZN1cvZ4UnHuWPAXbaSo1EoQugTXBdLfSfdNgi9KpqzK1ZQnJ323",
  "key40": "5RaTJ8axgXKLZ7cyYz9XvMjQaB8prQV8piajHjPAsQEU6ZYq2gHYgh4FujNbVNZv9FaDdiHsbyCnsSt1cSeYTtyb",
  "key41": "4sLFue3Ger6HgBTJMrzjBWe1HwQfXmxsjaek2Cja2AN1FnNBaW43EPGwwxfct1VJfHYcbC9CbctH7PHxLPJZ9DRg",
  "key42": "36W4fiZdDJQoF7EinLCJ3xbqXyU7DgG4zrBfEWcadFTZcS6THdjfHWmxNRrHyfqt9A8A1E2twbZ9gZ7XtW9VEUYv",
  "key43": "3wctTmJcvgBhD8zmwdbcDnBHuoJBQv53vq3jTg27quw8qDTcAdCjkG4htQoN5SXGeViDjSsHzZ6dFNpT49gp1DCW",
  "key44": "NyrauAeACQLjFYCJSQUsqkNrSu1gChqkaQ5zcpaYLqiR347VHZjc8mi9UdjH62w4zS7SYrPRPkRaA2ctUdEUwme",
  "key45": "2etWcAk2WhJGXZpmPA8oJcUvQDEv5zyeFX4Rref1k3wZS3MaHENfBp4rMLsDizAuwsCusfU9cHXRPJ3Kdu6hRcX9",
  "key46": "5wvm2j8CQQt9MW3tFdfvK7iDmuy2FwkitefkZygJJvC3b8E65Bp7w7WGRRwRRBUJS53hKSTzXtKc2aDXJ5cu2LKG",
  "key47": "5nrGEVRCwBdHG8eNJuUbhB45jJGUbQy4oaiMspJ29jN9jjUw3DwPknUCWt8H5yoq3ohcPSufCXy2MRc4pFp3Fq4U"
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
