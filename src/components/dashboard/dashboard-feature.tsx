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
    "3mrcDenrRqZ23tX4LmxTHBsmAe5eA86AhSP8cCJhUxg4vK95HNzZAsudeDgUTbGRAMWtZ1vEFeps3aRWiH3NAqup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zsMifchpoADqdL1jKbc21bZzNZopLKYmwGSFdtMxKNuC8E9knevGJD532AyLz1FWa1pgN3k1mgRBAcNMU8xXod7",
  "key1": "2fvbNqqfMsuAyNDPXYDBmFA1cP9nr4d6rEXUCQU7NnEzDuHybnasMELAk3onTJwFVuaYJ1roqQQpwEJCRxpGYwiH",
  "key2": "2WYXv5yfzj7e3c4d6sKT2d69YjHpamLVoLje5Ux4BBLjiWrFfB2dYoofxGcmk3sHyCeqaZyeQcD84dynqhm6Q5dK",
  "key3": "5ucSLBXiyhWWhsHQEsNRSx2MU1WVfsH8pRqq58PTKnyvbRVy1JAtxXMRtPjPYKnhrSzHDc8d2B5iLsTTDMxL2q5t",
  "key4": "qj5RwSYzHRaX2WDydK5Vj4jp9S9SV2us9b1ATNP3sjJySwdZcrTi74QNQ6529T92o5HEUyNFC6BwWYkn8fZ5wxF",
  "key5": "4mVtR6XA27n36BT6yVDLCQVqdDnPfZAvaQ67aSW2GkvYnQhvpVRLzaMZ6GCrTvoMdGZbDcEfYmCQHdHsrrEFPnzV",
  "key6": "4vx28Hx6uCTtRGNYhQ2tKAyoAp386F8ctZ9nmDxx8XQxfKmUMvRD1TLgfWfeaL1heYw1egXf6EWWZu2L2mx1U8K9",
  "key7": "ZeUbF6GQWucJHRZkFrx15MaEU7J5XRdWk2tp3VmhhH9qQkD5jrDtAaSaZvSszNhaVPaD148xTjxWF5P4Ji3ZSM4",
  "key8": "CR6ppX3ravPLEpKHdxQMYa4pGcCxiqqXLZTbjfQpcA6xnSUems27dUCFkqXLgGBTVAczQkRktydfj9vMG5pDaPR",
  "key9": "4RemRwAtDvK5zbZqdLkkAXihR1dxdvxzXyMazyvMYnoFixtqBDmDBVXr7ztVsjHcKMvayhubmwYPrvckdtt7MLDq",
  "key10": "61b9nNKjdyPK8xjfF4WJu95FdF82NQy987QTrRhwpd59G6t4FvpMgpQf6FpZpxQTaJY6qtiA8VMenipwmkhk2Esk",
  "key11": "43RLbtK3fC1jCyHJWtXuTWeXtuLWo7Jsfg74LSPM38cBFhtFSs7XTECKKGjSw8bQkACAVDespmBF5zXFFr1EaEs2",
  "key12": "5VPgjV5pBDUGPQKnmLJEtMS1bx4A4J19Dt3q8mVVNa1bT4byMMGmACPYcyF9GPGkhHv9kWx33vU6vS6odLJJeJ3a",
  "key13": "53WCjDDUViZ344dnZGmznadkotfts21jo7wuymsxJWytqr9seW1agkPqMhbwBo8KQ4FZBttkGynUocYoWiqu3rsm",
  "key14": "64aJsBNQx3DjgKBgttt7yp9N4HmgniaKC76iNXGfHk7BYutVSYWPPbRzTSfEjGG543KKU3ngxRK6ZNShnUQYsS2J",
  "key15": "64cPqNgiAcPeEeaYhq7KStGdGhuEkjeRxAEEKhh1HmyPJavsupErxejrj67FXD8TCnjMPqkpQEzSzKCmshwpC7Mb",
  "key16": "3u8knx25tov27B68tdqRdgNZeRyLMBmvywKSvsuzMbi2b5jUnvH6RV1LmQE8SawbdjMMMXWfz2gDnTuft4v2crhU",
  "key17": "4Eu3zpiKZ2NTQcY8eJo9bSjr6XtgXg2ByJWAszEYXB9QkdCUKN8S5yLyrKqQq3Qi2RYnE9Pus773v2xZ75fRpps7",
  "key18": "5oitj6JBnME6k4EfkYp7aFKcpdcRd9oSkrw3fd2rPYY9QExtgdScVCbFinBEN1iDqXjjiiwfo4t2cnCQeQTmLYEn",
  "key19": "3Nq3r36ch3nuWwu8p8LPCFGc6tfuMWNB5UZcgxaPCoukwDnaiCafTnM2VVPafjGDJ8PfXatXh1CDrcaaTmqHwskE",
  "key20": "5YN9FmJoqDJARa32Hsp78zh8SzZbjVe699C9jKWPPDch4CPeDHLSLzBw5iDhUEQbWRVpwheorUcwGJpUdSiebzmN",
  "key21": "HabRAQp3g67Vyd6ynk6j3KtEvoCLeKgPB5TJn2Y1gupEHTrHy4AJwGqnZP41mWt731wcFDJc1SsLba1uDtp1naE",
  "key22": "EsvwshRrPADDZ42iZjr7v8ugch6YHJriCeFV2zHt1a8wZT5C17t6iwxcaULfmiY7NLXvgH7KAb9bzpZS6MRiyMZ",
  "key23": "51uckWrgLr9UVS94Dq5RWzaig5SGqc1XgusU7ncWarizLyBcYfjdVVmNFG1psYWwMnWB1rnUeKVz5nZ7txwuAhSs",
  "key24": "2fC9TTqKQETF3Rq1NrdJhaMU7Xaw2UKnWusFQHuHRjuyUxi31cXxhe7KE2TTEyVjHKdy1J9wd2DENmzJsEHuVc6Y",
  "key25": "GSYW3V4vdENNnCY14rcUUrB5c2ddJE3LHxpZEC6KsJQmwQBgsS8R2FcMsLXWLa6PggssVuANHxtvPJZPPFTCR51",
  "key26": "5GYHWdJziJhviJGSRoRoUCewiq24W7HCVXsFJaK6NoXpqpnfzrKqCjcQVzjFX5XBw96BcH9cx6XZxm1H3WKWJyWH",
  "key27": "5Fma1efD1puQuoePvSKjh2rXrZUCCQmERwHJQvWBaz2jEgbihNJBH3ixbsUomYsgkcX5pCNSeYACSNHqnh45cQqs",
  "key28": "XHAD2oKqMcx3461YhAeipDW6imNMoTk7GekgGJ8sJAyNHQ4CmtHLahUFtyDAgxWPzjL8XGQ4fyoGBNciAUfJJj5",
  "key29": "383YRgCK3NKq5Aj5h9Q9qfoD16in3ZhpAc4dzUepD7AGr5MgC69tt89yDPwb9xT3YZNyYKhJEdkJHjRrtyJqDp4",
  "key30": "2RMpjkwEGNGnmryxz6zsH3ENCkUCYwYrZEeeLfXPk63CoFEz9HubBy9ureX9Ga9xPWNRu52khidsyePDjPbYYiYN",
  "key31": "MuarBxxYMoczrHpcRfBQU1QDeNH9iKN9Eh21FWMX9hquHRE2JqeK9j9pMSYLwDDUz66ydqykRRUcKRnuzyUSQfa",
  "key32": "3C5jWwPw9fC3XQKoFRWLkreufbvGqhiQXhA5fWBfC7gjRGUh7VtrEwv74k1qwm5NqcdgmvzHVRQaRRZ8rRZSTST1",
  "key33": "4Sja6afATsKgPBcPKdJJZdnEorYGVMZY2D3y47hkSxRf2MKQoCoJBWoWrdvZFn64gZ53RNMxLmbFEPeq267jMk6V",
  "key34": "v5guSY6wFZGLJXY3C8Uq7MeJ9EPsPTJ3DNaU7u6YUSJ2Y68fsgpmqTBcV7HcYLoFS8ZhVQeVdnqWa2psSL9BCuR"
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
