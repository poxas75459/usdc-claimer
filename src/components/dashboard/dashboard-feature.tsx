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
    "jsENtnmEnUQceatCbWDNqPrpLSWtBut3GY2mtdDdEqgwsxdweF8URmvPuDyv3e6yXiqNsijqtjHK3JsZwM1JGvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KgN1QWYbGToZyfFGLpJDvtAM3goBA3BSTSjTMHnuZ15BrGV89RZp8hZcUVEAR19y6YnJR15RhnVfEp2Aibe8U33",
  "key1": "3pMLkyEGysmnE3AYCZDbWNt2w4jTz6U8kc5NMn6CmH3P1QV7GibYSSsf3jwEKzodU8NuaXR5nJ8EiU1b5ZfnkXnt",
  "key2": "4rdNX8TZWU6rUQZeevq7fQRQQsTHYS9VG1FwRuTdHUvbZ9TFcegH3QoduTPR6iDfu2w5H4SkQRykaUuXpQ2dvVsr",
  "key3": "4993u9vdKjkqCcEDBgh8V835KRCa3dPns81GqhXiC122shsNTivgZT4VfuePTdkZCHhfEvRj6z63aDJUhNHZbUTS",
  "key4": "GjywbAESurqHTT2mkJQV1UgWc5NjybnbDSFyCQHzskANDN6egSKdzNJ79LPN7RNYmYiXx8Tibku6f6DNS8vdPLy",
  "key5": "2K6M4LG9d77ru782HCY95FcJQqX3XEizV1pGbE3QVqKe2gMGCLaqiokB9jbfJBRF7bZMeNb5TBwnrqt2EDyvUbXh",
  "key6": "26YN1uezLPVYv6cnimver6y6WYkAGRaawLDxMTcsE9nf8zrus4kK4igw8SV2FuzrBa367ST4qhn7H5M1WddANsXG",
  "key7": "4RHhwXuRcUxRdtnwL88uj66QEaWE3advSBJmkPY6NEy8SD9mQoCH9gh7B87mXYyc5jhu7Y8VjkQXhRQnfQ372Z3f",
  "key8": "3ijskW5zxJcuYtf4CQ3PU7c19rtYCcmVMWuk4syWBC49f7ALXYeJqP6AuZ1Bw3v5GzeTQP42LuGZ4V8w8G64eRFr",
  "key9": "fycpaUuFHNmYa6f93xbEZWotyiBcZ9aevqfdtXsGHzgBCLRELqWvcGuizdyFXtU4M5VYyG24dD8Tj7Xr4MNHts9",
  "key10": "55doyLKDhDbNxvdCkyQ4Wc2Suv7nP1BCRnHstYK9CAzmL4JjPAWmQW84cqHiH3eSdMZ8EDzctcxnYT6JFPKtoGch",
  "key11": "5QUKZ3MaNSevJtbaemRpZ4doZ2NYABpM8ijLDLBEucUrHQHQkgLxgXENLULzLK1q78Bu44NrD2XLwN97QfteM7nh",
  "key12": "4ohXbAspn2RdvTgW6yG2XnaCCzBeK5qtespTmWsEWLFLAJCu3jCPBY1zVH3QG1JTerah2aWAt4BGFTqT22RfN5nu",
  "key13": "ePssvAyFsYnBALw6XFYYmmST5FwWWF9Lxkfz5rksMya7YeaiFAfxBonWYVNYHcCTLRg14S7TNhhp7Um9gWx46ns",
  "key14": "5VeoVQDrX3eVkzqoaugrNfULXPef6Ea6cWSzk3KXwfTXdJN9ztc1opuwnQH1rF2yGWQQCEcZsCrxoRBVLCAkeEEu",
  "key15": "5j5cRc25zsft122EuRGiEf8K9JhQtjGRmSohAWCEoYrkkabVXuyCrZA3BevdJuyGZ2ppdkwvfepA3Yqaf5mgKAqt",
  "key16": "35LsR9mmk1iLmfpUSAF8iAPAUMuLzQ6kMXUtpZWgniq4Pb5XFXck7THeThNx2JVDoVNNEtX7nxKyUcpDL7NsrMGS",
  "key17": "35MUY7mqGmGomXUVy5N23hbE6ah3eKSRQVbNCvMSwGSaak8RANPEj32wkMoi8swLJoaZmb1oiEBS11q6HqzKmPzq",
  "key18": "2bVX4U4WDgNS1Ub49RwWKH2XJNDKC5Neh991fuVtoNFWitvFenC14nCFTUm7hgHuGx16vSgJrSapNwzPaJ2PYpki",
  "key19": "4Q3ndDPBJJLZWRiAmfVsc27twjbVVvaZoa6pFgunWmECA2GCuNbixXtkVv5qQ3AQtY5x3aHgLoBdpAY3wsHdxpjA",
  "key20": "Q5g52DaYEC6VZnnMBrnmKid1G117UacKX296yfkQM66oYyVCem3GCNocfjcCwef7f8xQtJX6ZVp84g883Y5bGTs",
  "key21": "5ECb1qzPh7HX9iyz6aBybmDvkkSMuNh2PDCLXJHe5xgZ5rnqkx37wCcjD52N3pFUgH7Fuh6zCvdAJ7QTMHtmLLbV",
  "key22": "5RbTBRhbMKkbrRDtvsbGqFHWUX76GKifv6oxEWJnetPfosHwDvXyetsYYYapLnXWzJmCTUvKU5gMzs2191fiKA1w",
  "key23": "Fo939VRaxtChR6A9MP7juYJ4iN9X5Z7aBf2msfBw6oN1jDuhYBrZ6BazeQeuWrdwNTV5HCLn9gz6ezL6QAt3z8K",
  "key24": "3HTJGnyy7Yfp6t89fYgZauxqE72NtGPk8k72SU5p6Shj6HFvVXzRcxAkVxQFLxmf5tMtXjCQriceKLXgQNrxTn44",
  "key25": "3CHS8zPqEvTsuFPmMUgfY4YDURCdKz98WgB3d7fFJ3TQpohrbd7bet8XmERXyYCpc43aUFRCNuoj4Zm6de53Nvrs",
  "key26": "U8zni87Y6JsCFzHytjwMCmohCEDXCNWxWcps8cS1ouqkNWaXFtYbYb8SroFdrkfC5tjkC2wYTxBsNB85HzCnyJb",
  "key27": "26uAobhx69BpPzPQ5nd5QByr8Fm3t8jyu9gTzgwsdpji4GKWXZLbcvTPCuNFPBwkhttQ5UMYrAA3iGb8Y3seVvyh",
  "key28": "4YjsLyTTAN1TxuXRtaDnosoAGbJbA67gyDc9QePc2WJinfPgeJEYexThNiD42wKDTHXuTYHUwFZjTG69Cn2RKEr2",
  "key29": "5sy4sXxTfFizggqi8Q533Ehr7SbfeKRMdExsimw4zzyw1wTRKHXCLCpmpJtbmDwwri49MVQYV3DboLV2p6F6frBh",
  "key30": "4WQ28eY7GZZDCdVVdrnTWhSKMS34RK7gg8cNfKPFsWvTGnjYcu6NC3iQ5bbLjTvhZ9t7WQqPdKvPTVB7HVV8Wkft",
  "key31": "38ANFcZUVfpxZ2MPLrBY11GwdU7xbKQJkJTkuGg6YUKbkBcyShgxpp5rBZgopGe7ZJqEaq7gR9W1M4DEiJCyTZRx",
  "key32": "34KUX8k6uP7JKToK2FepVGiQnqTGaUGKaiAunodSu8QYP5xacjmvAvES5ePPyjeyDzCA7R9miFsezqwKpz1csP5e",
  "key33": "4MwSAfsctRfHD4PNChGGAaz4NNHWSAbjyL6av3SpzzRUHBXBUHjoZBNGUV2d19vMGXatVaxLjJX9Qx4nDLe7FEEn",
  "key34": "4t5x8VNCpUbfyEnxdqnEqRT2v24is3NALnGg3TkFEsjU8H7cRet7Y4rjRC3WVmd7mUsUPtPg5Ut3NGNZjmkXsRA"
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
