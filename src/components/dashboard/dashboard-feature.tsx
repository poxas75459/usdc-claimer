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
    "5Pvji9PoBGXSAu7Xf7eCZTWkgWLcYqsAaNQZiD7tXumFxddfd5YLSwWA8SMFNUVABWSbZSePGKUn7fwFFYMJ7tJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d2fd7H1QcoK6ZEiLrF2scfNVbSs5E8fSzANYEjzh1NjYss5w23ntFCzosEnC4zq6oWLkUDL4MLf386zfXo7CWmB",
  "key1": "4ecgjDSjZGfjB6W5qH8r4MQ8jx6nU7Ga6h6dgZSJ593mBcsrXEMTBko2Vdv9q4KgCPQrrBg5mAuT9XDPgyuWvS3o",
  "key2": "4q4Hm98XMHTxEbe6xN5mJGBwVCivh8iTVhza2KjydHEwrMEvbBFA8tYpCunm1da6UtGgTdz3gdMZcNGX4ZVhiRPS",
  "key3": "5ccPVUuugV2Pv1b5CFq9areqmncUMoaCkd9fajh1VEg4iabq3DKUNu1a4knvAhfMbCz2dohPgBm1H2chMAiNizqo",
  "key4": "5R8scfa4ixbaeqSpTPpYHNF7n2ynroLjk1p79GTyZxiaEBFPTHXZio4dqY4QFTDBhwanmzfWKYkCLQi9sSDX69rn",
  "key5": "4qgeshQEKAkkveqcHqq9TinKdd94WyDQsppABvAQxMoTmReH14VTn91f8vrNn4CS31YLdgbhP8LtJrbxR8iohQbb",
  "key6": "4Sh7DFSbBdtNjkKoFUrcLYrzbSpUjPnRdBhCBviwPcjepLPFMD6avPn3pJ1jwMVeuxgcMCCsUJ35j8AtBZKxghJa",
  "key7": "26uDh5ypUJHraJhr4nhGa2msM6sNVamYV7b7X2rcS49oqHvJhn57FeQrScov9Pz9hTdVCoxGmCCzt4FN9yzhTGsA",
  "key8": "5Hre8JqzvPaTPk5NHa8zhqsV5cETQahi3w4DAu624ey3L114mGdncjxpqDYeqxmxbC4o5qEk225SV1jDQ9iP3dcw",
  "key9": "36YhGvRx5i7aduWF7uvdLPpEfP1KXFcuZyotdSuntrRcgSuDey9UjKdX5V6EpmQMH2SAjf2o3Gr3PEhzsGiEVJQE",
  "key10": "2dDLLVrNqoL4WCW7T39hH8vbZ2YFCYet3E15uWuyYjcWiYYD7ZdpxCzxECPA7REMfFAgfV12UfdDFCRiKmhxNnir",
  "key11": "2efrR47cjx5ajoRSiWeNsoyohmsX9XQyFPwuhii7YdKWaAQ8cguD1fMALfc7HFQZvY6tzqQXXeFA9tguUt5aHX4z",
  "key12": "45qwvVJ5mGosUwNPv5pRnxMJwRtVdMixAi149AVusmCCNQJNQ6MfPiit2xs829wpxZvSkpboofH5CeP7ZGFsBNv6",
  "key13": "i1PpkWhaexu4FS3Wiiw2F5D2p3SwRzHK5G1dwcv9WsgtggbNGaZeQddkm4cKCSTFxGidaLE5tjuXdw2j8Fa67dr",
  "key14": "5zriY7VeUXLHkJ8ShL8mxKhdho37EiRk6guP1SGxbmgzzAEKZQ4vb6tRhSXNUrteFH9jmBz9mWxKJCcN3wE5vX63",
  "key15": "4xmux6F7Hy21qnTFeJJMHgpbCA9pLFgnhgbMNAtznNanvpRi4433MgYGxFydYBRSsGudVE3fhaPFpVVM5pLYjKkN",
  "key16": "5Dd6ZeKi1bvsy1js7amqrEMUcgRDDjvFi9yJWZndEXgr7yy5R1JUwWSMputQrhhUM1En6FAYS66TPQ5G5XXcrgFA",
  "key17": "3f3GoApAC3BLPxktZc9d54tA3SDDWjEj7onxery1rMs3vDXXwCLrHr9TJGmuoXSmJTTXtJrXvwp7VGgCdYtjzY7S",
  "key18": "53d5odZo4qHQnrU5SBwL863a5tEPARX2jMgCZCx44V945GKikqxdYiCx4rFyDTbCjpcmHUgiXJeS1bhSeyMmNyRe",
  "key19": "3aEmntuXrvfyidKtdPBQJQKE4gRdW1s7EdPtnSBHW3DB7Y37C4MeGAcLfgTXv23Mz9HbTkyPhNfFpW75tkCU9oGs",
  "key20": "62oRgcmxyeQsvTfFsVTYxbfdn6GJHNbNgCV271jqq9Nk6CNJP8hPJs1dWkT1ruV63sLJRtYxQKTcKxcUBpKnfyLh",
  "key21": "5Xx5DNe3R6Kb4CU7gerA8CEPnD4bVGhgUmT5fXne1jEQwGfQWcmyCGNDY5h6kaMbhjFveZ2A5GMLj4xJAEHgWzLt",
  "key22": "5mwxiUrnTDSVqGMtR39XiVx9rZJK976LbNorQxqtx7cquh5jaqvnjDe288GYXixrxDRkWHf5WpvEunn91VgaAFNT",
  "key23": "4bjnFYuaVPZN9h3fb1TkmBjDhrP4mXrV4twhJz91HzNASkfpRXgNxaV478VPnxYn8pPgsDba5DzjkiXpNoWugGor",
  "key24": "39hK4ctVjCUqZXCqZG1mrNDM7nogdPh7xx4nRp2ht7CBA835DvxDnZHbUN77xf9TNs5NLoHtFaRsn6CHNa3MkhM5",
  "key25": "56EGoxE2CZtwrZtktUs1Pb7pHjwKJh57H3mQGkAp6n4K37X3MkwX3wZD7gEJFtZwTfmC3xnpJxmnNhbmV3PMVmrx",
  "key26": "1vgmuiZVChixwTDf5vE77KNX24YxsjiD3o8JcBTfpRvpeNFSnkFu9Dhq9soC5qMkddyVjStbKWxSCUf4M1VPzit",
  "key27": "yq9iq6sdz9Sbixg7xYHBnjBXSiGnvdBf8s7yxJ5eZU2Muf27nmVaBkfeExx3yES2yqQ3vGooZ1bNs7gZFG4mFhK",
  "key28": "jcvnyH6NmJwCgXkXKvDBUhXMLZksxaQCviH98X2aSsBzoCy3WWQdCzQoxKAkg7y59yhKuQNQDF6WXG9CJNPUj8T",
  "key29": "3Qs1sZAmTVTMncv6CPwCVzmVpi5FYVNFqaqrSYwQACHmx69gHrxpHk8KETEsuXfoLj3sBsVi7z4jkpFp2MwUhXTE",
  "key30": "4TkDtHic5fmPdxXqHUucd4oxzWST1be3TWM18JNKn5KiKvDHoCLRS1ACVL2tbZDkmm1sfTaHLEYJReoVk2qbktVR",
  "key31": "zevTUb1QjfED9TJ7HSNs9XHmfkEmYG7Y3cwZ8v5DjqhyVm1y12rU1BsEusKvpYgY1eP6nSAwgT3ftZ4k89bF7j4",
  "key32": "212hM31vUZpG5tD9pUKGDnFLwwKmzCc9PnB2MoKXumb7S9tf94YgwzKPPavCLm9q5EMqoNQZoYy9up1s2w4dpm1i",
  "key33": "4VZTNZJY5uAU9GUMYH5ACKwiQug5ugWfW42ihY1FoGtjTgodiT2FQQ1uNac3cu5kUNGroj9c9vWKw4pRKHMUNpeh"
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
