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
    "51Rj4oPxGHQfTJYi26Ya86D5Hww1ixBJFqpeXEWb2WYrYPqp35isJ1E2t3aDpHTf7mKh2Uc7sGht79mrGjAyenLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qZtfamXCPtTiYacoZiHfneojw73w2idMkrfZ1vhmgx2pUyyqgcHsM2hU3PfK3JUtYedVJ7ktSGJaeVunrpFRxVr",
  "key1": "5nFG9efBBjLVNJSTXnCmSt2FjFPtrM6oFYGmUvAcZCLENhoKzByTSvmDyLM9gx6JfKMV18Y8Jk3dNmTLAtR8R2SL",
  "key2": "5Q4Urd1KL8zShGU21Z2a4Vrst3u1UTtkejPqACFFhV5a1UeYuHcdsaBko6JCJbHp23vEgmCa1U9GzNPy67hiSU2F",
  "key3": "5sxkt523XCUeAqBw7di1jxUmzY9XukeC86j27k9cxLEjDBaNzbf2YrneYsGYXMvsazPm41Nhd3fQ9Njy1MLj5hfR",
  "key4": "2xsKZcXPuLGFmJu12SrqHLwunWMUHAUmmAfiUYxmf2JgXGijH3G4Qez1RKyXMkRCVaDGiNNU8mmL5NCueEVvMZmL",
  "key5": "5c4EQT3cuoyGd8XhHWdi5YcQsnsTQs5FZrfAW3BK7o9sdkz8mreaTuWPnKz4rFg6AUFDkG9V57WYG9Nw6KabKrfP",
  "key6": "5NDw3n9JJZZwJLKac7peN6MfRe1EAFsgh74PW5vxjqJGqPhQXTJznj5bLgHf2bQAfeBGDm9FWhkduJV8bbM1U15p",
  "key7": "C9ZuzkUSg2a5wLfcrmBiCUsA9XPyvuCMctd4YZkZb3hKhkgZYtVx9GjpHDWoeFtDdeyJ8ZcctFph2MR3awoVHxW",
  "key8": "3KapETnn3wJgt167TvxDbFbchvyHXsZsDnX3E23fqLPqDE9inL7xHW3NBgbVDWZgJMCC2Zj1RFg5m4b1XpDah1Pn",
  "key9": "4pQfSmCVcGpUjS9BvJjAP6xq87gWCfVpTFEnFqP3WhHx2NPTqPbsEAfHfVLXda9Z56tTWxtLBF9VwWPUBN8Fijdb",
  "key10": "Tu3CU6bPTDRWWepHr54E27MjDJbQRd71arLHLDRXmUFoVh3cvccJjs1aAYBYswrqrTivLH9cWTBmqAsTcF6rXLY",
  "key11": "T5aE2Ge954kw68FkpM4kkApXMydW7hXsmX2KzZv5MVRk5CLWSyDPrybzpJQu1T1Nmh3cJsCEM3hhXtScSCkBSQP",
  "key12": "wVQ39udab5fCS1d6BxAia7sVE7JVCY5xKYnumwr64tKH5zxodTDJuYNwJ97iNZo54swKJiSn2t37MWKQpwaxANH",
  "key13": "5tWN9u23j29YALnj3HQNjApqmYa7MoG6PP24t4zJSkSSm2Mf1ZMvyyaBf1RMKCH9GubeX3YY9mAnvd1bvLDC1PEB",
  "key14": "3fF9Z4xZY3AMTRxnjXLeMECF2Uv8Vmtw4gWcBAme1ELBgpXUVfcLxe2UbrVfW7c9Cgnoq3vQbRf7WCgoSagtS8AD",
  "key15": "3Th21oAjh4Ragd9QyrNWfJwfpMH8jjaLMwVEZtMWgPvSBHM63wYL2Tik4n7t1E7xtmmu3VDb9iPWshhsN1H2GHiN",
  "key16": "23uqZdSEe8WnqwQQ8bxGJe8SKnHqUXcM7Firmh29aDUWqTm1PsYrCAyzsbSDtzZfpxZN6BHKqujyLJbWMz8S9MAD",
  "key17": "2w5nwQJ8PLVN6qLAjgXfSKNAAerJDC7tiKmzMe4t13ze82MWt9jNNmW1bDjotNdKFqDnc4LKGoEHrxy6Du2DwAVk",
  "key18": "2usxWyjaz6qrwDkX5t1ueBwGtu7EZxqPFeHkf4ZZ3N7KbeNx4LtVj5riXW91uD3hDZpj7vB8pnazNgp1cHiBzPA5",
  "key19": "DrjAzsULQ3FdRuA6w3LdLWxDQRS4J1oitrRYUnWJY7kDtbE1LuddTeXjyrbSfHC8KoN5JvcTRCPpEyhoZCKxRXr",
  "key20": "t6zruDZBZV83APMn4uEB9yHfNmvoDyNPK28z8Zow2cN3jGNuEXju2QJ7Gbgi9wq2s3vGeirsn1mbNmyEAjceZAe",
  "key21": "4i3RXgwzz5UXMK2BVttnnyu14QyrRyh9KL5mXyqDFUZkc5ymdnkLNb7B3uiLvnuMUPPJ7qgLUQcdbhZL9yh1Znbd",
  "key22": "2FZ6iqgCxazjumPTNBUz7KvV2togT9xwEPSeAgaE3ob3aAsHu7p5tw7T3YiCMNMw4CctCRsMTzkB6FF9rsdZ2qz5",
  "key23": "4nhpGLPcaiCLruLH3DBeaAUxvq8cr45H8nWcUJwPU7chkXsYm6t53udkeA73696UobrHKr55AzSfkyMDPxn9rKgi",
  "key24": "TCgfWwBB6rRVsfKdPQGqSJzuy24NqdxiDSxFzFYiqHKnnh1AamDE83kYZiewsJ3dDfub8R7SWpUrNp4tYchZhJ8",
  "key25": "3MJQN9zxFKgnm5zmdvi9zPyqYSpuxLQ3mcR1njceqzJsgW9qotazKhZgmfMGvXEENQktzCddBazcWmRskfX1gjqy",
  "key26": "4g7MvqkEnh5Gvf3JRYQv8eJ4PSWYUzJTu2ptrSaisTA5ZkTLJi9qGYpzcjjQri3aGrk98j9bcVNGvRcyQifSH1HM",
  "key27": "4uwerqdVSVmaWkRfYoNqgkHC3sRicnpdz2Rnar2WVYUQxGu9wZW1QJCngTQhcDtU7EdKjiYh8wo6L3MHssqkhomx",
  "key28": "5mdzJmtc1bAL4JjRHxY1hACR7dN4S535M772pyij7FW2VEwuAEMj4yGWe1pw6uJruYro6SUxwGQVXJoYeKPAKEer",
  "key29": "3jTZomzSHsrRPz7ivEt5ccGZ5u6EiqUzZRwpExzQeGwj6wnhLzqGFLm3oxSnU2URkrphqCuSDtFab4b9hP6r96K2",
  "key30": "3BZmx1jdJAwSh53k8DUDT69LNZKnBVcyXshRjVNYFQa1YRB9yoxHUDsfwctZjbbYQhwyCdzD2tCTm2ZP8ZLu5t42",
  "key31": "3K36dhycuXRQuzWqFNdBT2XMz1nVzkTZTMGFVkfnH8UMnqFt4zCsWx2oqWQcSyLiVgTY4wACA4c9Z76YYvMEyTGV",
  "key32": "2F7Tg6BDcS76xepQuy2QRydjrJEfkocHMvVmD3h37dgZg1tihVfsj7NMGTWcxiJQWeQZPBJpfSrzUnwZukjFUZBm",
  "key33": "Vf1K8F1zcm8ZGDMhzePFRis1RFk7qYDXzSeSN34b24KptDJeC1e2SA4qeeXD8rKswgeKyPuyHM4jbbxtBh5BUYA"
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
