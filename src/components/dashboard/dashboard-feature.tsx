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
    "29uGc14vbDbajerNnf8UPK6JV4HXPK6km3jJZSdMxzQxkFySKZpF7cQkRh4DZyc17xdPXpG1rLi1ycCk56m7dZND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gUXayQ4FB1GFMR1fFCtoo2MEDhPyYy4Lp6nPRHnJCeUEycYB4jHoRpnQRwHnyfNSThyx8rpLhPmZod7tNQrMLGj",
  "key1": "3CZyUhn7eMUQ172hMkuSd8xQeSecYNeUPeot3u9v3HR1gZZDn5zMdnzDJsi618YFSaCs4TUKj93zYg13f7mjEYC1",
  "key2": "2m7DgpyUzTyrrqRbKnaF1kkXeZwuigBRNHVMPiJf2wzE1Gbc4g5tQMMHZwWLinXZY2Rw9rvFzRbDJsThv2B1fRwd",
  "key3": "3xGV1JKNcMAHkcJ8B8BmNnBTDC25ofYgG1dthdRynpSn2dp8hB22VPzEQigFZJfZ4ifGRW4t4kBdpnXhRC8ZqtVE",
  "key4": "4AvufbQFJyWAp7iEENtptQ6SwynMN6BdL773fS44s4CSqJYZrAbrZteiwfp96zEMDFAcPmNoq7MjNz2unNPqVFLU",
  "key5": "3kevWC9MZyh3nTxRFcSfNFruJF3PRvHMnorUjFoqabVSPcFbycqKcabHWkrcciRBkByncxLBM7GEBkhag9Hiaq9H",
  "key6": "4zpviC2HFb9CaLhDiDb9RsGs8W9hv16hpt2jCSXUacgwTu4ECR6LcWbZPHWHttjc46wgJv5tD9sKUXzd4aRBS2me",
  "key7": "4LokS3TACxxPsvzQ7x3hxEgaHXMjgAUUh6kkEKtUnza6cW8Wh2TUQXQhC56kF6MArL2ZYiDxAqVkUmWXTALBBWb1",
  "key8": "31oq8otiMEHFbaAUjZUZ3Z8dq9jBebq1uxh4kq3v5nnU3U4aogCLGVdpZ2Qgh8P6oHtCwPNi3iDeAvxCzsPtBzey",
  "key9": "5Q4yPqiJuw6KrKGWY6XexCFrTnS7dDBrzexR9zhZABTVzbXu28jGWSE5FLvpKSdLqNvuQGuEs2TagyPfGEtBG35d",
  "key10": "4vkC1UTQH7NNcJMe9uwXYb6yza6rRoU1xt3oMJEcDRDKsQqM425YMBqX588vAnQ1bsugRHA3FtXpDA7w52ppEKF8",
  "key11": "3eeQxWUmhQu7Na1cheAvUGnoJiianZ5mxdVnw6eemT1QcsTD9VUcKEZeSgo81sAhkgT9uAJrLZNZ8xPh31GzKDzN",
  "key12": "2D4YvdQHCRMM2HUBEFDWSw1n9XTPiRkMuHMZdEWHMZY7LuTAuajHBKGJ343j2m31u8ES5ArgNzXJCV2kbgwpjnJz",
  "key13": "3jwbCxPMACYZcpVJUgqSQyLk2tgXx5Gm9d8DVQWtpEPNYpA9j3SFTKsQoik13W5Cr6DXBn4GatiwCZUbCZDgAPJH",
  "key14": "Whs3VPDnwhCb8MjptfysXnK35uFXQWPnRcF46jdvUca9RJ82e1SdMeSZ8wB9UhzmSJvcRB71GeeSoBooeAB1TTy",
  "key15": "5Ni73tH37m7WMnmxEKQNFNMwmEtYDLjBixfsXUMdPnFt7J5JzetqarQLdy565mZnqD1K5JWt7BTevqVkGurRav9Z",
  "key16": "kJVm4zFaHmaw34wTSc7gmhcfhshqg3Fxn6ibirXMewa9bcdST5NjPTfFfjZCnWU63sB6WCUUNjWb5L98t3WEbXA",
  "key17": "26CTe2pLeE3Dam9NDruCoczo8Kd268U4wEU5bw6EtafvKiMmhszi8yie7hVB1i1C7XYUf3jgkpBU3i2YFwAXGqNY",
  "key18": "5yJdQoyqwo5hRonUuP82sPkbPkrEP3tjTsew8brDmtS7pNuiG1zUoKwaQth1GR5syb7sFHL3tzo9CB53J9RLtGV1",
  "key19": "5jLTBG4eiNhcXnCk91GnmAXMa28TA4JEmnfRDxtBaHHU4vaG7ah8Mvoyjssc7fz1ddFRSaQwCcULNPQ3EFJ1TBCf",
  "key20": "CimpTP4Jt6bgcGbimpT2z3oNaUcFZNrJUQ4v7thuHkS5ubQgCwzE5EJNRb12o8sBJTKDiCCn9mUD7iKUDTtezNv",
  "key21": "63NsxNfnyS5rWpv5byMFB63SmarwRbho19ADhHeVot4YvsdJ3XnEDx2iSnWijKkfr1eW4ZJYWGfP9oXDuzgtBcMF",
  "key22": "3CCQ3j81rfn4xMdadqMCuA3dEj8z2zMAczCbjczq856wJia9StR6vecsMZYNncnsb5UHhYmg82fxLJ7Ye3ATvdF7",
  "key23": "3fzPyJDQKPuFhWVpKbZQNsfaSaGpfDSKFvgKuGo9f27QBdqRSFoWhMg84BTCwe6qY5gUjGwRJpcLcMvYqP6rKynd",
  "key24": "3cdDe1Dig2VATy6WxkMypRycKYoPdJaqaNVsSJTuDCno3h89XyW44mhebefqG1bZ13DpqqFyptTGQD7ePN9HwyRP",
  "key25": "4ZFNFiQ6ncohYEB1KgrgfBQdnevTvB9VHXT7ey5AKjDFkGLhxGSp4PHxzKMngoWcVzyqxFzwAAXXaae9pLFxcrEB",
  "key26": "3CfBW2gSEYeaBNCnRZPZdP9QfUNeZLEDMXC8Q4eZwtP9KFxyiYMveehrVjfezV13ohJJMqxj4sUokaA7n4VzMuig",
  "key27": "4gt5AKPo63H4aoKUwr537CyfBz26XpkrryfuKcQBGh9qqE971h871FKaN9cpmZ1xVwPJ1GY8TFN6deh8mWkjqXaz",
  "key28": "63FoMBPyfhDEAvCEay3oyupX8UZXShB1AnkF1Fp3duoPuxJu9k6wXeUtAbNosgCgTGQ2o1ept9bCs8ZdzAvmsAiy",
  "key29": "4ns1VyQ5HPnsPhmwCPoGaYEJsH6q1zuLBDu58JQo2HwpcZSZo1S11fh3XmZfzFzjDUxR2amJnp5hHEcBKHsiLVGe",
  "key30": "p419SK5zF3cgwQwwdedHKvGRe4GfBvXwXAUmy8P7AUEB7RcyLUiRHUZCTzqbggHoWDEsT2W2xFkZvAJqbqpg42o",
  "key31": "3bZkqaVwdqEjiQi6E4HPZ5LB1zXAZHRTgJautZ7HLKeV4nG4umZFaqCS4iQjdjA57YPiQAyE8Krs3Me3hRXWXYfR",
  "key32": "GVMVxuejozMy6SuGj5GvkfgzWmPRX1Y7UqGgWaknKEiXffGKBCuSQsDszaFUZBAMxRSHwQEurPEEWNMXznDDkou",
  "key33": "2DdaakvCXe6WTQi1bQuYefsz1w3x7m7dFPja5dzebz6hNydwyqzCDrarnka6LgGzfmWveNKPWSfgiE75aWrsKqm3",
  "key34": "2RkdcfmidVdwdvh6hWUvUqaqJKowJG6bZVG1svkkBYtofb41WkLWMR8btAu7iNPnSXBPC8vYeR53SVbkzFVmR2JB",
  "key35": "jzMwVrb67vFPACehSCfGTxgKMxNRA2w3d7mdBGr1TFDCMaTWsnCdqe4oGrHwBvyCLbPjLMRRCARPKiQNcM7rP6r",
  "key36": "ujeeRe2rH9MxoKUFsqjsRR94cZ13Tm8g74HYHaa4ApBsV49tkcTGUyDz9DQq7A4cuW3Wc7Kv2WwvBwoN7ogC8M1",
  "key37": "2Kj1fhfMaws32SEUcLvfSXs7zbYktf6F67LrvZmWQ8hicQgZ4TPYUMGYFDHoA5iMQkHWBjNCrRYE7pgHoqAA7cBR",
  "key38": "2xsLV6HGyvNPy2NeUWPZffY7tM42X7jNzctNmtYBgVupeAVWBDfPxuGdXjyidnCF58vgtsxZcAZPt4kgkwPi8HXw",
  "key39": "4rDffsG4Wcq5NomzuvruNYCkYDdwRDgB7JEGCFEGz8FS3Rj99cP8ezKMsTwuHpW6Ba4B82keXSCgFH2uSchCncST"
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
