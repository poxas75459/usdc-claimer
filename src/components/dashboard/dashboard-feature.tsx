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
    "58gwarM3R1YLDart3o5T6TJoPbgEhbdCZNA7iSzumkoCy9LZ1Kz6raEqsZbargRsZDymATASi8tvU1YXbj52AXFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JXSD3M7wV8GGK7T9eMMW2VNhhMmqnZt9hgis2YRvpUqXiPJX19G4dgyuZ6guifgnN8dFH3n8ZwYGnyp3GYDkSFo",
  "key1": "26yrGeDQ6crY1L9EW8eXueWehceQFvkHwP4kbzacuKcdTYPTe5oVrJkzKGpRd8DPPfWX1uF8SwUgQ8ZusnKV55BJ",
  "key2": "umig5tz6b99RZrCwLSTfJxGTySbKzRAaQypoLdqwK6heajkfC4B5uJ6YchULWCh8PkRkiwEzANCzx7hoZeKiVZM",
  "key3": "58nDBniZDpyB4PwYYd3XD1megyf8wYPzFxkMEMRaBzyiJgt69HwnqmeduYf6R3GNbZqqcebzyBparcu3gcidkngn",
  "key4": "w5HgEDUXRJZa9TdMNZ1Un4wZW9iZiE6vcddqshpuU36BkZk1oseXt9RVqjhPrpu7qaqfZKgoqcTEL4A6eBP3hmT",
  "key5": "65ZDyMTMFUndmtG8A7BaEfp9A7eGZcgz5BRVQN6pNnMaBQ6UA3de8Fy9afnYU71tbxzhRPCmU8tmwSnuBxAeCfxb",
  "key6": "4HdJGTGVypdnbY2ehbXGXbCuD6AMxmcTPYmUoA47hFvbRdKNMAtetrGPSvieiZAkKRifBLPpGYLgp9G85UcJx2Dy",
  "key7": "3HRBCQXKKee6kja6pRKLji1i4QvUGPLBpiEasqpdSwd5VL8K568qsixQx9Tuo3opa5m6s1g2CS1e1TMvLbhqLKR4",
  "key8": "d6xuCMWGNQYBWVTgv7uhu283ZJf3qFZMc8C3x4h5sQt7rYgQZGyYKbfyrXMmAGaddZhTFFSuCQgDRAKk8SMACoP",
  "key9": "2x5VEVTb58k7cqRgAARWnH4FqoHwxLtdqgkJAAMcSzYtkDQ7SUL98FbMw8kEWT31Egdcc4gWm6rN1HparrsbKUAh",
  "key10": "3FiE96JVgo6LNUfeQJzzysCZAEPg3Ww5nHDEd7JnbuCHGFkp3JuYuqLp33oBXGvxgXT2qMb9E9K3H3WYAJvwRR7",
  "key11": "5gfeJzX1mJWEjSPVv58cHSbiRcCUt7gXFUtRGD3gGXj5C22r7jHjQ747bWhSGCGGjMc8DNCcYtMXsnZtYCgLnjxb",
  "key12": "4g24eHw2rG92BtxXCP88sKnDsgx1eZ73tUbc4rBmbpua9NrA3DtUQvbfHn99fA44VBCw1sVqpTdicqhn6T8QbjpT",
  "key13": "3gFeaem7r6vF75ZETJRdwQN9YN6g9wmbL3BoxhqKNXjdNTsPTm2mCtTxA1XHXLVM6uw7USQVTqZRGN345jZiNuV1",
  "key14": "4nxGLm3LSrXDoR4ommaPPW2L3g4AaKveUvUTiAQRCo95rQAEZ7LUU3m5b8i9dRbKwQVp8kUrsshMUZ9VvyNoT7Jy",
  "key15": "54PXtHUxyt8dgkZRvHnL4SgQwPaaQPxnUDSrwocoeTgKuHJVpUjwNmt3GUfQMyrVTpq3SUNPun8HMSFMRHWZWTPy",
  "key16": "3K9j1b6mbc6epi8eMAuPpTwYc3qJXNWNjC21Ks6GLVKd6pWFEDwT8ZxdPuh7ki9nPwuFTKz73MavpMMrmtELbges",
  "key17": "kkj4jwBsGPNYWWDHGi2HVEVcGGCDna3VJTmLCUh7UwCQQ9ugsDf7fLSju5j9izWpCD8SjEJq92dmXJ4h5GQg2AL",
  "key18": "29atL5N78vxJL6NnkitojupdxXau4aF1uHawxNDm3xcpxniSRdab1JAFihgoRbygKpFjoKna7renvJWgFibhBN7g",
  "key19": "3uz3sM1oK4UtqLe6iGoQ56xxTfuf3M7uvPrLRM5qrXmCnc3z7bFXAsypVV1fVgTxPwmNR5DFvwPoDrUKD2Xjswoq",
  "key20": "Qj7DPfFggVqGUNKC13P6svRGJRrdqRMV9mABYeTxZM8ceBbzmcctdFpVN3FmuiAiLv91zVbtcTQCHpWXeqE697G",
  "key21": "3QNmdqmekAT53GHJacp4XfLBxfAP9FoatDABxYNUGWaBNzm3tg9Kj4vUTs3omJuEavSVGA1G3XQW1kfDz98nSp8x",
  "key22": "438m24WJ9Ant5D3GWkK1FDJBxrQmXndjthwKP6d18i7vakNzdMk8gJG6cEasTuDip8Y32cDDtkUc2JuZUy59GmJh",
  "key23": "CuRzE8voTVZ5uai9T67N5Pug7XQvPpwRswufYcKnqxRdQdZ5f2ttidMJwWjsnjbypoFarSSyEJyifGJZrfTPFhU",
  "key24": "5bXoxMH3Tbn9WPnvgk8kN3MAjpyqwYEvtsmGyEFkJrFo8uh8mJCd87nH4HQNrSpTbkAhsQRhjSn6ro7VwVi5SsBG",
  "key25": "5T267211JqPHEAm7zoT1PDaKf5xkuKiEFYWoY7hWFYkq5HGw7QXEudDBRRDUgWKgfhDtu2Ekdm5RJ6zPuT8ha6jT",
  "key26": "4jtiDb7YYHWyu81euRbCutmuPHfX8GXf22aw72cWrz4WgfZRRNverSWNu1kE3WRiXnZcxKU2RNZqugR4aj6iYYpz",
  "key27": "23UKKsstLFYXp8DZ1Hb8B4ka6haEC4PYuZdBS8YpCFdR3C5rSTRRW8LmjmjAZqwFudtteKVyfoHjH2ADQkodkbfS",
  "key28": "5zrcEjw3H3yMMSH2mHTL2mAmXZFuyNqbnuaG6vobSBuvz6WdL5gFaU2pF7C3SLHLsd3PR1K2LMjvefPuV3pzhtJS",
  "key29": "2Y59JDbpW3mbyBxv6xcQNh8rhftERsfhTsrE63T7ErKZ86cqEiNCEPCB7F3YMKdCaU4CqSHgHtumJFamUDKyWorC",
  "key30": "4xGDJbCNnmcD5TDaRxpYmCjuY6zn1T19f1XQzTjerajLwcyKWC67agbutrY3G33fvF7emeNRsbiPzL1gNrPntCxG",
  "key31": "3RCuvFC6HUVWwY9PeJYumYsfx8bZfTRZ2e7QiwvMuLAU4cPCYS5b71ps6ShAPvoyXuGZZ7t1PsoA93Be1iwWqiwB",
  "key32": "3Qo54rKtkJwVKysiE9Sw78AHHisfx9VQ1ysMcNr9p1GbrJceQxssmkpT43E8C1nJuB3V52q12oBXMGrE9BSdvdft",
  "key33": "2pjoqhba2n5WkpuNZBxbZfNPoExUWKmebduchnUe2t2RNsf4Q88RjsxMARYrPn8poz8Hnbo8naoW8PHWZkBdE1fE",
  "key34": "oTGSSSbc9CUoxJaJFTaB1pMUmMtJ5mDM7FRyN4XESr4aQQnhRKL8sMD2GZyfn7mn3d8UkgVn4MnsQHix3VrNRDN",
  "key35": "RoPReaYqUkZpeBH3Fw2Jp936F65st5iEEBgzdVGCucf9tuzqkdAeQN1oPRRJs8kBKeQHv1VTwjw1xTR4Uggpnaq",
  "key36": "2GDa7KG4ZryBWPfiTGDK9yx17wAF4sT12mavLp5QDSfUH5Jv9uX3UbAFiUftCESswEvkohxH89pAHLiMhzyFoqsi",
  "key37": "2mhsSb2UrdBBiWaekxpLTHb5wjxGxWu6wAkidgPvAVCMtaXksnR96a8L5t9E46T7fmiUBC86xjsz7FtUmHcRobz4",
  "key38": "4NAXsChjUnR2urXTuvCARxfioBfuPFMsBKgcWyZ7W7vS7aLUpJCKSyj75dSrgepqP7YSe1pNsT2CfU3Mizard68q",
  "key39": "5tABKPs8j7zBKin55g7qWxFehcrpfPrHc26mJq2Ut1GyzaTLxyZNKPMnfm244iFNbutjeuzA8KuQCCHAndEnzi9u",
  "key40": "2f6DCJT7wCYg3gvhy455kTFzdvDCdrpBYEwgihEwQqPFq2JRkXhcD1U951m5z2izatBKQCcFAJa8Dha5jAX3WhFG",
  "key41": "zTDdWw1Hu8xcDV5bLp6nLZ117AbptcMyMMRYwjGSSvxr34d3Doug87BGUd8CrZL2cCGtCMFuvnNujUpaA1NK86m",
  "key42": "32EdDcmPWjxHXiZ6j9PiiMgV8z6PF7DsHzxEV22tBVwvSB8ATNcEKRBBeBxX47EtG9owuzJCoiz72VF62Kpbb2nK",
  "key43": "5BDFEaqp4jyr61KPGgoVe1MafLjQo3F2rocUuYquVBCSjbgodQVw4PDA78HCUBJse4jQJkWmY3Nymmn4Hoa1u7Lt",
  "key44": "1uZ6cTJ25JuUgZNGZwY8TDEBVb6jz3Ct5wFL2dcTpbhqdY8wFaKmVbgFa2PNgY7CErzSsftGaJsAbu1BvdYPHkk"
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
