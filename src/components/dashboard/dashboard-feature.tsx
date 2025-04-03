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
    "3u37WAt8z86Eq9R1Zf6LBMoSeSmYoGramGcJx6LRucN8BF3ZK3rc2GiDxS9TNqT9ABYgXJR5HFi5RDFUYktBJGf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U1NU63V7kGtZ16KueRzdXQED4Q2XC6HAbef1kRdaR9sTZVYfPkpaJq4TyVkt61NRFEEgC3JS8FRmP1vxrsKvEKp",
  "key1": "5BtisbDTY5dA25psrenMnu6LV7TJQ7PUcA7W6NAB5YvGTcd5Ky6C5tDMXVMLCs5WhKPyWaJabfd4fAkkX6oiwk3h",
  "key2": "3yqNPr9nwhDTpFLB7GtvVRfv7tHyjZ3LyywZ27Qr5Js7qmQT8BSxzpLtkCvATzDBVdtA7fzZLvbs8KLWdCya2EBw",
  "key3": "4pBZnMTq3gNNhDvvWqfmdv8556uuzxcLXcYqq1FYKiZH89UnhgzNNwkAJUkMYL26Fv7DpfgvMRxDDXYbKBwKic9Q",
  "key4": "ebmMicLjo9G2RBDJ4c8C4dN35eWUxCyX9rKdjUU6BUL5bBLwx4Ho14ptVmdnJQEBQdvdpPPUtnvHYmPsBxyRXw7",
  "key5": "439HAeQG761dkLuNbKReGYeAB82bg8qzkfJNw8WF1JTHvpdSBjw8LEcbEq1SEzt6RHJSVfvsyhshTT2hrjhx6tCU",
  "key6": "mK8h9Jkie1GwhKegrEy9JKYPDp7LzF1HJAxPfvyNWS7coZWGJPQ6xu1j7xs2hMSqRpNdFaRTh93fSz6rDzMX6dR",
  "key7": "5zvttvxL161mWEL4D5hXph8Vg6cBAm61K7GAJg8vBamvroTpUgoDjJwTauzXYMKotrubUp7bTJ7oMyzVwjdp3U4m",
  "key8": "5Q3bVZq9f1uosLpRbLsDHyLE8hgRQoU9jyoCZVJpgm5S5sswe1Y8uXkcXNXBHXF5yEaYU8UsC7mvQ6GBGRtNNEvW",
  "key9": "5SFCsk2mMnqFUL7dAMGY9KPAnw7VFVthJATjFAhUAdhkMqUBW2VzeX4ot31ouBxEVkm9fUGjRDRUgogmi24hbs6E",
  "key10": "5uri41Cbf2mmDtU1ymufBk9699FSm4dCPHk2ZPuFcv1z7M69uGiu2RQfUuQ9E27C3vNLnAxM3YcP53Gj9zbF7g18",
  "key11": "2Wu8GWWrsaDv9jdk2t3SpaRm2w3uoDzXM9GsToEN4qj5xZufubdN2T97kLdJDZ8Ffx8cTQuLUZoynx619TzWSeG5",
  "key12": "5EcFRJGQz8mgaRhSFC4s87vSDHBejDmQNuWwuY8X5rahNQbNy1dEgzup13m9vigeWGrJqJD6Z8JbvRhXcwGGhHmi",
  "key13": "L6XQJqoobi1AeoSq4ibaPrQZtouJGATGzPudzdHtcWPcm9chjmsedfFRdsX9hAQMYGjezyENgD8ohcziZzJQKLB",
  "key14": "3t27jGNVNG5fkT8JsTD9P2BRjkbwzhCeWszjxL2KeTrwhfGAAotUgwumnFS7BKTVNu8WRt7MFobdJ2LtXgdLWfg1",
  "key15": "4uP5bLdFApqNpssq3LYg3m5CNSvqN3gzX8Gru7TL24so9fEeioNQUPxMPyAvXbFvmJs3KAmNJArYe1NA6VSr6jdj",
  "key16": "2qj6sVZfMeRyqdS9r7UehpELp78TygWM5RTQobZ188to8bHGG4TBB73Vy4pgRrSiNFVZQacYMbnk623QH3T24kLQ",
  "key17": "56eDYMRrLJ3HqmoP4fUBbMXnMc3ftVUGkrXFPQ9U8J4xSdUAkQTZb4ZdHqqmoGAgPYwG7Ynp3wXai5T7prx4y4BC",
  "key18": "3TKCRaqAX7nSVf8PrKu3CjWK6Tnn7PE85DLPPKVsDischsA928q6PqhwfvXA8rMxXypkRTFTdZPaiRj6Dkhq2ybM",
  "key19": "4AY881E4i7pMQLibFQnVCESKTyV4J4Z6PMbbtNzDNoFBjKLnyFiRCgd5HLuJnWac33Z5TJ9R36Fhr1PiJW8AcSmp",
  "key20": "2j2EQ2j57T9acmN3xiC5xt2iKBbFmidaDYhrGVrqwWCR85b2K4KawryGT1b1m2vh56LNSnJZA5wmFSNbAhAVsRZK",
  "key21": "5jHpmrVikgGvystJL87rAcnSDPY6yVGDs1d1s8C6SUG6hk776RBtwhNrKNwj8Y2rxNth64naZVue9ow8KsoS6wgE",
  "key22": "SmfRGsuNXKPWQLBeScXDTR48BpgU5vwYnVTCW4xQUEAjepoQu7ZYbMG3LtoKH4kDk8Dzw91JEJWaEkJWnmqL9f3",
  "key23": "4x7pTh4XDyJ7CdHJnPPFGh7WrM67yNPWCgqQNybzQcDAiWod3D7ntTBKBL7kJJDU3upng9qaWqCahGM75tuawmM6",
  "key24": "3p3sKozCJsVREsZ2BbNz43fPkUacYB9nveZqCV1awFmeQXmKazbddDHZYJn9kciodYqkP7QKsC1gYjgezjsQkK9w",
  "key25": "3gPdxmnScxuNiy1HMayZbTBKardt8Zkd2nu652SfCFz2Yq5L1twWQwVyhpiA4jqkngK87r8KKXWNhxj1Q23pnEeP",
  "key26": "5Xz6pnoYr53nihLZur2bK9TRmTvvWu2RQDQz1n4WvsTNDfAJPZhAohXpiHZqB7W7NvTfBF4fM9X3DMth3xz1TPNB",
  "key27": "3GYYpkndUtDTrBNH9iwkdR1Yzxorz4BNRfpTemu9VWseFVjD3y3CTAVrNU2VthXJqmCXWYLCi6fGGTynGQpEyopN",
  "key28": "tJv8wWoDCYUEL2n7BDnYsQUPnAg43YSxVmmpNds16gpE3sEc5yCj42MPeCwkFiCFKZijPEiv4t3eQ1jVWJ4gfwY",
  "key29": "3K8kekmn3D7MQtUx6SEJ29z7DNgrad6GWSXe8AUmsETvkoAUpHMkw5fPhs4KGNZ5h2gz4iGGU6gfpLoApiSDPcSG",
  "key30": "4nMpaikrCBngqu3do4HriQJBs5fEnfhXk8t82eiHsj4NTQXt7cWjKt7wA9h9xWdfUMGT3q5TwLipm2K99nDJojKe",
  "key31": "uUzxi1DbyCu1Qe3KNmkmHdg1p3wPNGg4MMDrgAySV68vgrwzbLB3LRBqFVuv8fsSiJMshunE548A58WZhr85LEM",
  "key32": "2hoqesH1hV5h9ffNAHnBqFAfPg77XgiU2o6j71NLv6BrderkB4EQfdvbhjsk71i3bzSQTPsLYoknTpVUTnuZkzUx",
  "key33": "5GGmQcQfM9bQ5xWArDjpkqVCAYMXSYfy8E3mceHaAX1Y1muUuFmNmN9RL53TbXjFBtoLCb92khT2tUeqwT1tCVpD",
  "key34": "21QekCdBs97eQfHvSS6UkhWoGAB6DHNNH27cxJ1cmbrMHAewFmCSRaWkceWRHHa2SfE6i7ZefbeFbCDSZnuyZtc5",
  "key35": "U8jzBai3eYw1WMYBZJRBYr8xhV8EWmYj7yy8ZytihNtfmTeV92MNpJPGCaqLbLmtS52PuM5xGMx2kMoFB16uvWB",
  "key36": "3yuPFBdQ17vpN9Qm3DA2Gm3aN5eHpL3AAvgXN37MdoXnoR4fqKxoj8vyWegNzNGpeXxswwjmukjJdYuofD2xwLaS",
  "key37": "3tSVHg9joAPTfxYs2TCMenQN7HK6eqTFkaePjhfzujVoXTkV8wADi4Vzcy5gzvGi6H72wB37wjWa5ndvg9KjsuyY",
  "key38": "4ND5CrX7zbtBaKjeiBgf3Stncn1YBiaFn6Eu78PfLW3rw83QkRqM9EEFhr1TLYdiS1favarXsRsodfcUGRtDWgUn",
  "key39": "3JsnPxxPxxXV6rptYPRfkLirg1JCjMjCXSrgJJ88Bi5fSYbxnki2PgMLzdEwZVSNzBjp78E23sPQUgP9ubB5smvZ"
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
