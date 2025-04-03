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
    "1u2EPUcwif98DQTJdNZEpRXWuMkKJVnBJvDNfCLC7TvV3Jm3kusnvuSBzqzNjK77LpfCbRiRPwTpjpBUEFWRGa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y5sEWBUc4VhTwA4r2QkRZJU2RpZZVgBFA3mJVPZgpxAfrfroa4cdYzycG9nqNAPQbkPMnSsLSp2dnTbaAuWZ6Mf",
  "key1": "5DYQMBi1NiF86rMbuLYHJNZgsGXCpRbSfoe4sSc6v1NK9GzehPpt2YuP9PucEqPu8koB6wWBkR1i8ZvhuaUcFB8F",
  "key2": "2km8Mt2LK2fhiuU7dgrfG5Skrvtq7D4UqDGx63aUbaaJUmx2z7Whnrug2ezGqB8ibugMx73bhNKLV3s57rLcxLNF",
  "key3": "3LzSnss4ExdSnQnxoxW9JSLU1Lya71zys7FAWh8aC5zgdKcGvfTc6pBmA473VjKdrWadvWdcnbBWxSnUwadWrdEQ",
  "key4": "4d1cXXafYJxmKYR2wcJDvGb627gYHNEwgpeCCHgwHkmJRDJqtMpKzfE8Q4J4TAy5BE12vUWagLD9FmoMnmE9jcrK",
  "key5": "5DrVVTbRBWQniQNKSbkqU1mVcZgwcQDFre3v1z4Mabxk3CL3tRMNryXUeAYGJzdWxb3c9FmNn7BJ2Zo85aKCTSMn",
  "key6": "Q1ZkUGp1kY6ySH8Ed35PEKiZhVrCSqbaX9C23FDfsZUQ5RLhrhiYtMdExUBgsyjSdiSR6gAiyf89DM1zit69Bz9",
  "key7": "Jnk2CfwTfy6NPc96XcqhSyQnuWRSavvMdWEvqceWgfn25RY4JVkEjiQ4ZLEZGg2wcC7aUMdLbxphJbDanUsRn87",
  "key8": "4E3UPrm8jj2ZmToNDware8yLTyW4etoJa5Xu5d9ZGp2AKTuRm3pNvYe73CNoAtc9sLLweg3yrhhWa3mPQubxGjEB",
  "key9": "ZnJeRpNpoFm79bMvAuBiFWzbHkhtbYr2XiNd9xwu8AYFfarZss6ctdYUCQqvJaRTqfUa73XoN5brwxhQYqYawU9",
  "key10": "3gf4Ym1tZmD5QVEJxsNVPF92c1uxbdgqM9YLT6yrMAqRgBe3BfUYiAfGbNYzmdBognr86ja3aEKxsfERMJoV5oK9",
  "key11": "3e9scKRN1PB4sFNXBDRqHP7pGipreoWaLkmvgpUTdtXCx1pbvPc4fprvHj1ZmtBzdcdPJ4Gzf6vNABKRAKvNhiRs",
  "key12": "9L41anJpbX3WYrTmdjfvKvdL1nmQ1z9FMC2t3tDVUER5C6e4fqHBD12h6UankHHDqpU7dU2GH5U5kufbvTzrpw4",
  "key13": "2ukCSP21tnrjQ8xMrCuJxjUgCNXbxKVdw2WbZsqKCgyrid49PiUgZSqoXJRccwijSRbcYcDKmXCzZGNmyPAgHqhC",
  "key14": "4XzdadJFT8boiCoLiWaRKMjVsjVCa3dBnDszYUAbjKGEJCogKmxUB28KvBuYovnToFZb4Yss1xscZbgJxnQjq63D",
  "key15": "2td9QpovTSxwxZLqJbLNMAXW5kiqdKACj7EStEXAHdpk7toEXT5BDZtmUKT14UZjQyVh9o6m8jq1sWd2vSRoNhqU",
  "key16": "4AYbgrSpQbZGs5cwpUnFCfe6QczwZoJSoaFWAEy31yPS39XMePC8sqKs9mNKZLAG7659Kw7eknp1rBinqh5TF14s",
  "key17": "419DD7T67Wk3AFhoQGP7jWNbojsEvJifcZrjBBHo8BbELPu7GDLHuee1GAnoHt4cbMCh6WxxSM1chHZcBjq71wnX",
  "key18": "5py9hD7AUNm5UH5DHpoDNKD5H1zEmth9t5WYnkunAk6TPfHYejZLUV9SwDdVyTYugyHjddERXg5PEvyTwwwF3mZP",
  "key19": "5XbEppLsnPWrtTfPvyz263jWhiECH2Pk3PZpDiJNTnSRJ5Cmu4XFa57ELqpAP3UFgFQSoAwo71eB6PDuGt9BD5WA",
  "key20": "4MmRWwN3TbCNoHHpVT729jhZaBP6ucSajCBviL9EmbU6QPPErYRtwP746iSXBpFTYGvHqMN4EzY1T86XDqAXTCSy",
  "key21": "yw6geNJeXisrE2wXPCBmkTu7apVyKKQCQZV9e2ZX9j86V3L3yggBGN6cj3dFC3C9gKJC3gZnkEXqBaEVZBysqTn",
  "key22": "5kLyWsStayhRXtLurguasFRqN72coYbZN21iTcDSASUqoFvBPYUJEotrBubgb9CpU5YShHJD2qsCR2cahPTBeZ7e",
  "key23": "51qm9BmcS1APzvZxbFyQBntwpizpVtDUqBx7MnCEn67AFDqje2tTHFj92T9dhJZZ3j5qreW2Jfqy3PuBC6u1t721",
  "key24": "ns1m6b8VRkAPU4Hgr8S8VyVsjwY6uu8AHU7Bhj1vp1CbecKShiBNGFdjKGdRnCivDURz8n5f7LKt13DjLfEHVPg",
  "key25": "5wtYeDMDqmoEwjFF5ZgdGHYTv5nxLqVmxgrFKSSh1CzRqJ7NqrrVgcvdeUKV6oeMDTkwd91AJxCLh4ttc2dYSu6b",
  "key26": "2sBQCWPkHY3WRz1JptH92q7L4diP5hRRLXuy1jZWFC2eV8rULH7Saacmdzt7eB928BjQ6HtZ1tczmUsMWjwsLWpF"
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
