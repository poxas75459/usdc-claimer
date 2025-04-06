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
    "3newqchSy1DScnqRvw5GfaqS9DnDqa98rHa7j9oqFLvdvPCzBDJw4zJqvB2tViYRKaax8LeG643TZAEWjpVL9xPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47nhyjWX4FyeeSYjWrVXnB1fzjDAGr9BH1cxo1kzqP7tGtEmhyJTm7bjKWxUMJdHqbVTBs3XJhw9AHr8s9MrcZnK",
  "key1": "2YPyTNK6z3fAQhKmXySkfzqXwwo3MejZ9kS5b8GrcGmYoD886piTNd2GD3AsdLKs3CMwHRgya8FTPdM7a652L1uv",
  "key2": "4qvyeqTamkAUoaqabFaaLMVoSZg3N34pfawftnepbHW2YQReYympaiX23mb3ZdmWxa71rr7pHsJSgp9sbqmGsD4r",
  "key3": "5hXwnLt3SbHzGDosP162C3QWswop9ZkETihMSroFjexXqb2yQMTA4Rjv1y8S6d46fAr68Uv3KSpGYnTyUDTLdq3X",
  "key4": "5qBwTkE4br8uFe6VpqThfQhX9QEDv5JemXMQzU2djcU9jQSBhuDPNo5ZCCwh7Tv4nMGqxAGSzBRmkG3xDi6pwnKz",
  "key5": "4sHZ87aErypL3xFM5BNETrWiLftTv5DXcb95vueHuTWfNSBdZN2fBMhN133orn3nc4Ks1yqTr4t7TyR9YRgUbUJ2",
  "key6": "3jhhGBWthSFSPdCWy4sUKGiuiubpYeMztsgwLVjNdyEhTFpPCMpWo1z1jboCYM44KaR38uVk2N2XNbXxCGnY9vVQ",
  "key7": "4peXYZ2cQVXzZMKm8Qyo8coqTHugh5fNPk1E8iJKvexx78r2ZZNxiSDiST4WT8UPw9eWci46dMcWaeucQrTzU3NJ",
  "key8": "2CoHAFzj7MtkuqnyAaMNeH4xKtgFNPMkEnrE8heUxSLdDjtfzLBF3yjucZkfC8Pypg9HEQF9ApHdt1vj9BXLCeG2",
  "key9": "4n9B5gUqVY3hMyERvY1pUwU54endot31gAFuk74cx2SowWrMUgVjBDdK5NxsU27AUnmCDv8iHd3X4WHGTKPykdtb",
  "key10": "2fcLdhYbMiHXymsKzyazeZrKPPiS8zmEZvMZsBXxtuh51zbPQPK5TbJzB5HRTmCbCokKYZJk8QTdK8kLiyQdpcFs",
  "key11": "4MaSauDoXpXzx5AHHv5PHULVm2ZBsCyCu75fweNyEVtbVFT55uEvhQi54SRm3TjLYP6A4AhhBj846yJpDaCWF2UC",
  "key12": "2PGdJGxK26mKyzGpg84aVg8KQCi8r1N7kQ6sfHVbdgVrosMpN4pWqPop2VsgHyFvbncnuPuoXsfCngN54J2wNvtJ",
  "key13": "3S5givUEfVKTEkM9tpnkKDDH8hiVVpJrXB5WF9FZdYG5mxRY4cScsaZ1KzzduLqo2vzbCzQqNwRJA8akBjE9TdSU",
  "key14": "2hsS5TTd1T87dnVYUXPQ1rmMpqPsTDA5o6DmuBkFZgbGCbhxkCeqj8Aknj2EAF5tcJoRNMJqSPMTNDqUqxZgWJnX",
  "key15": "LHYTLWrzbQww8Y7Q8C6E4icZfXdDMudBf8aAXwU1au9WsM5enmf5VQn7Rb84G17fUYhpVA62wLA9UfMmFU6MPJN",
  "key16": "4tXSVALRtbMtrBgV8KbmE4Fp1awP7BfyK9vyDq59zS1SHAHW3jnPdm5zw3dHNtx6XBL9evYY2DuGcmsBwFV5dk7Y",
  "key17": "f5DBqR1tG1okdp8hiLZv68cDtm459G1UphZdUqsCEorpgRXwJLYnM9N2Y4bQWceYpAW93XHRM6myY12Zc64mrvy",
  "key18": "58nBs36jDvhfa89sEpGTDj6pgAAurc2QS4Rn4hDQa2iRCAyAZrAqphDsLCe8Td2hFdJeeeENx3SMc4vXnqk3ZyN6",
  "key19": "4KydddpKYTE79Ln2Zwk44GTHMxRY1oaSKo4C8knFdwtRLAT98GEXEPmt2V5WWCkbhgyRpFMDDAzVp5jHkpxoDnN8",
  "key20": "2tia3VKcsnyViUtuj1yGWxWbjzVCCSSsMGKfjJsJYxRp7dfQiS6zd1wmJ8ujVG8kzJ4CpojeyXna144pzU98w8YE",
  "key21": "5bLG6aNAANQxS14DuvGCoosma5ko1mjd7DG3SCua9Ge9xHQgcsRtAb1aL2NPiQwSuk38mh1rLAfPvQfBCmAeeXg4",
  "key22": "4i141aeRzrKTtp8osNX3uFQzD4N4mvPafCyuh5yubioUWpjoQeM19Sy33WHu4G4hzGaxWCAdWZMg2YfHs2ysp1AC",
  "key23": "5i7fGZuB2Cc7JFNHBY3ij1i3MLgAZHiqJ7M9fTJGruHsn7FKsthRk98z7rcSaUhDqBFkghXfrYBVc2wGZFX4W4zo",
  "key24": "5KxJDyLapWrYdJuzCpUsNqUUdXNTg7fHRUrVjUDKfTVbSbL6JQyvkBXozEL3VjoZjCaoVvrFYJgXRg97Z613po61",
  "key25": "59DHzJu2WYTNN5TfeY62BW7sKVjkYYTsn5pUMJJUn4u82fBc8iU4SDAYRq1VTLmvBF81yA8Ki8ePrkDhFqurF88r",
  "key26": "5RiGP1xG8n3d5eWf6Q16hYNuYH3cmMiJThcPbjyakQWhYdi6SaRiFhW5x4vi9r6hBkuwSfaaYiSM18EdAP6p2A1F",
  "key27": "664ZJPtBiq61r3deukiAwB1vhZRf6pEFxSvLDrUWqJ1R9Edpa2fjW8LK4Tkxhgqi9U5RCW9LbsHo4dW2q2E1Cv1T",
  "key28": "sbjBGwZ8FDniwtS1shjpi6SJhx6u9Ks2UNhcZGeFjkbSAqrn731Q37GjB49msv7sVtmuX6YeyF8yuc4CynYeRMj",
  "key29": "4trfckHgcXEiAZc8AEWNwuH7Vg4TR7ijfHBidSExtgBTGugLRJyyvGb1WYpdN7TQywzMTz2wAbQnwnLSdh8PTqo4",
  "key30": "4cTp33VrYpQAuy8VbHc8D2yZ7sMnaf6JHTXZZqoBdC5LyyqDc3PmV4tm19xS5YnSbffS3xMJxn2fMTTfX6SS7TtR",
  "key31": "QR72mDLTh4v3U11Wgfd2th7drTPXMbgJC58126XsoWikPJhJgBiBXYVzrDrTWsgVevT1VugW1BruUATuvgMfnx6",
  "key32": "TaQrccHynbCo7qKNMRrRSjWhLCd38J9JyE471RdWb8MKLvr1MXo6JDkin9pS7NB4mvT3gfztmBfaZTDz1hiSdEs",
  "key33": "37EzQzcdCb3urYa8exkFVXDn21VTTskFGzRJ8R7PiUV5KQQFVGMQdLZLBZYrU7ZFJGmk5enoaNmcc6n7VQvfaj6S",
  "key34": "3Dnr5vguoQT21VWdVGSa4ngZFffg5GR8JvXFqxNzjw9x2WQbBe5wHM9F1VG49xV98xjrEt19Z6GdhX3MRMYV2QqX",
  "key35": "2761xVCyd4DZjyPnxKUWEUw1dCTnDXzrYefKtG37jtJvTQsvsb53vRVHqryzuHsFobAqrsxL2Qn8VWAsWLsiv8xJ",
  "key36": "CDznyEhT4GW2mwrs2f2as7g2dYKwCqwFpy2sZAuKEBHLsvwksZpKSPFys9B3rLHsEfPWUgvfbMKEanU49vfLz42",
  "key37": "3LcfG4N7eKLZQRC8w9K4mQrhirh3m3QxTRrEtb65VoCKYKtZWyYnhdAY1JPE8i5RJaaM51nhkzeBw6ER9aE8mxKk",
  "key38": "2TFNzS9VsGYfunsN6PiDYU6NyZstwqxSEKDd7juVT4VVgJd6LVK4QjLNaMUj859oLXRqXADaCWcE7cEsHcTsdns9",
  "key39": "2egMS8PtkRxGjGTh62NQpKJ76FDQxvDmdbAMdHeHaTuoTsqhM4FrUXaZcp1HqUH2LXZqCrAdKdgVNHTESDHV9PbF",
  "key40": "2o7XZ51bz32Stxs98P5K7UkoUUKBsq4K1KETb7LDwzu5TBedWiXMhuB4WwnbQiGQktbaqr7nQrWvH7phHTSvipU5",
  "key41": "32jEXvZvK1w9C5ybgXJUaerfgBSApFjqmEwVLy1qg9rK52u5oLUMeMzUUyGfSbX1NPRWCEnhhyR48Zx784ucbzsu",
  "key42": "2LJHAX7RWdyEduuXq2GuzWsxi7sCZggt8Sae5T5G3Rcns3ZRMYTxYB8XgFzNNH8hdHJDnUpsfBAyNa4GpceU1bbc",
  "key43": "2cNEBqAdZrUx47BoNAfJoEWo6bMGKPbiCAAgZoDc6L3EcQGj1c8tG7AXnj8gfW2T7Gq6me5TGNqQ2XsN3ySBFP13",
  "key44": "2Pr1xhFH9wm5RFzXNETM4idTNWjHY3GkkoeU9RaRTDTyEYYQCJHaUGrZK14RXnfjvCsVDswxcVaJsiJMxXi5tafR",
  "key45": "2cSGWTaXJHsAfWBYYGrnxNEa2Pgz97cDyLDAYiwX2VMdYGVgnSJtauSjsdbm1W9F4Ggm3zX55GPGJjYqhkYGzath",
  "key46": "Wg3JzZP921pFARowjAYDSWeMhHwQezi1kKWBbqYz187vPecYUuxqR9zPgpZ9kS1haHHMjyZxcJ7LuyXMBkmT37D"
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
