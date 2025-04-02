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
    "4HTi9JHfBBXmFb9SYFGJaGNFKuMV3jxk7oD2uvtWQVc16HAWN5R9PW6mySAGAnNK44uZkgk27qVVowf3xhH8tTGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GspJJisNXvha4cTUhbhM4MSvFdhFxqAbYj28HaHhUXbHAcJtvoKG3LdJaxrkg3t2xRFwqkWfoT1gx5jmhDGEEZw",
  "key1": "42UFnjpjHVYWfsYAooE5VrBJzWu2o2R5a41p2Vr5juqKsLdQKEvsh7hGiXrPN9pRxyXDmbUnGQLp3CRfYgsfYMEf",
  "key2": "2RjnL25UapQpKNJ9NQDWBMc7k2FJstkZH3usjg1VKFuLrguGgXX7kQg7kBisoyu8Nmh7Sr3QTUTLGAE7RboVYXaE",
  "key3": "2yVgbY8Qc6cWvko2NQbxDH7NzKpD8wG2dfv6JrjxPqGZQG7Y5XaRgKwyvKFugzhPZSwALVTZujAz8s5jiJ7ygStC",
  "key4": "5z52sCb8rRjBbSKuWwcEqq7VEcautGWczP9hadoii76VKDZ2ETWuyqRvepw46mEpnom8wba5K4MwEo3BYBhuaawz",
  "key5": "QB5FiHuTuWKkbpLfWVZ6VpNEYYg1bCpRqrJsfZvTzPKJRs1BvHK9YkKekyM4tqYeY7y3QvZS6psVyNGc9r3SDPn",
  "key6": "4FHnFhWNgbdMp7goq8W7eemjpMyUBZRv6YgVnEHuxsAYhsu9JwegbTmyJKJPGjPqMroUPT9gRq9vdnRdYmXdrLP2",
  "key7": "ZjyMScqFy75XvKJ7ughjdZr7wYC9g5LXUXrDiAGeHk3TG8pSbuNTwp3sNM3HEUXPpgRLdX9JKqRMmwCgYX6zT9Z",
  "key8": "Y8PNy45yJrbDwRxAut3Qy1rNpg5h1LShqVwcukV4uSUGyk8wMcwgTaPwrm9sPAeHD5MyY3yEULszD1kUopqfESf",
  "key9": "674zp8eWbC8dSuJW7NGswkYSfV6LrNURzv9V7wwtsgCjMD5LW2AUqqPMS4kb4YW2E7EDbg2fsTKHuJ4fVDzvWwna",
  "key10": "5f2AQBthNKMHvKyJMwWG4wFqXbB8W9sGLbnZPikg5vEqwCrvzNrTy38omj46otM3tLCSew9Jhw17i9r4FJvShLAu",
  "key11": "5QsTeQABaRPvps6tUBkhwNdWpxp5GiZQ7RGeQxidTGQntiQUsvTLSJ6bMZpRUWgFv3j7b3siVU7wbJ5HsDXA84fv",
  "key12": "4yLd27rkoBRn6KVERFTAozRKPxmLACcA6aNpWXMZYwpw3xiTng4fnxpxkE2rNoQrUompMRdnsFUf6NTkfn2CUrRj",
  "key13": "3qrYxvrR2XgXqkgTjpAMR95dk4qo56YvtJvGjtUAFkquVBqouoxd4KEUbPJaUVSG6Zub6BJbHJ4zJj6AfKWhcm7v",
  "key14": "59XCUmRCPFcCkiE4FSQPrB7VzQH8nTyJD47SNEXvgfJmYFsz5f4NEBt5Uk1GZBCsZ8HuTi6iywMRpkgCwhYvny2Q",
  "key15": "3cgbMeHfsSnQHZNRsfvrYEnd96zFZDX1ZuJYWj4ZHtwB9B6P11B9CwNPLCC4ZWvdaZhkBiNh8JF7Mo8sLi1zpaQK",
  "key16": "5FtGYKnJ86J7DQLmskyuFEmYHfTKXreAAWem15kaH8LhZ25UpazpEDZeVvEfMbmDZymQgzWC6jppV7XCTNu3Kyo8",
  "key17": "3q8UzVUHW6ZcDautW57xkASxKseCegHCeWDmohdMipu3M1rMTGhuh3TxiD3wGB5LDfJ7uDZvoUi7xgpF1Sy4m8jy",
  "key18": "47nPCFEgkpCNm2zLiHnMYUGQdgRcrGYYrVwQcBTvKBvEsB77dUWvPJiHAgbYEnYrViBVhi4Wy1saGEgKSfJeRsw",
  "key19": "24WUnuMeDX7N8aAEEk3BrEuYpqNfW3gMywBRPxHZX6xWTNUbkc2EHoH4ZcSgyRa5pJXxzqvLbyPT7bQku7jBvrAx",
  "key20": "Dfr1KbbHR9NPYdxvFEeyEfLqSqDtg3X3Kw3awQvWVCPw8J9PpUQR6VRMhFP9NSYsAHMTovkucGGCQhK84D2z66z",
  "key21": "25cjqaShpeajjJ1wa4x9dZ5TxeGEZBsTz9YA5rqPnLk7Fma4g63xfkuJZC26ZWFaSiFdLbCLswcRBB87kBH1ZWTp",
  "key22": "5xHFLJZsEfFE7T7rZosZPuk7SVBjmmnjK1BQQqvywaZoHGcPY8XtxF5qbeJNFRr6gmA37JGCc7L4XaQdnN7GHffB",
  "key23": "otKrjP4Wqck4dCves4LZF8k665qF4dsW3R2po3GWMB2dG6oM4GcySadGF3szovpPMpPoQr1DGcvL22NVyFV7HGx",
  "key24": "YCgyBs5ELqR8uwTwhksJh75xv8r8XZCByum5gU3LJDKZ7Z9wUNooMv51Q43EyQiMFjAy5qAZzEyw7fyK2bWw9d8",
  "key25": "t4wNPMsvLy6bf6ruXmBhmiwySQcmf5RBeWeZYikvfXqvyaaoR4zk8sGkctxFoMK28FgNHnGqkZqgfdUKbVP6hFf",
  "key26": "4RPv2ocivFU2MdPdCxvPBpUX5hxkT6AvTsWLF81aFxmGy5TocGRwqFhrcJcYZEtuwzJKocWa5DsvqXzT2wSNMeq5",
  "key27": "3LkBpJ5C8Z1F3xwi7HT2A4CgLqwvDiJCBmkvx6sNxC6w3BMmdiTduWscjpjV21wHo5Wmoy9FfgHkDhEX312bAd4E",
  "key28": "3rfvBNtZafAGJeZET6MuKbcBbkwQC9neRtewLuzrFuZD6pJXDRwN1CbuVMmThiJuCeVwaLxkJBuuwsywNHj5S1L5",
  "key29": "Uzo8FTbzYuisCuJETNovmRXXUVPNAzxQ6CKxbDDeobTy9fmxu6LJTvsTod67i1wn9Q3paRSTqHYpjG3sqCrCscR",
  "key30": "3ixs1F17P5sNzFXjRt8pbLeQxxwBc3ZvfwtHD9qZzQHUyAnDWXAbaqPynAsNPeeXKBBxTx78ZoxQmKwTJDjKQuRb",
  "key31": "5KShXGaogjCrjhfg29it74ND8VxpUCe18JUAQyJWyvSznGjgh1pUJkw5Y5dpeq5WMo9oY2stnXuj2PRZYoDFabCA",
  "key32": "3NxKkYF7qY4FPUumncoM5GsDQ49L9GyCpyghA1daPsvuJUpeeNYwdXQResEweHQF4GibyAnLQBD6dxk5uw5tLMda",
  "key33": "3sNR5o7exZahXz6wxPU1CfwhQq3QyD1p9ETUvCqg2UUtLQi7woqqj87SYNa2dyEruZ2uXwtYp9ZkAiwhJU8Yt7nK",
  "key34": "2TdySLdsxPycAdLiqkumsvgeXyT5LE4VmjDQkRsEckH41Re6qpS7QMhD8Zcb6y2Ljpq7opdNejGbzyrV7xzTnymZ",
  "key35": "278wJDJGXdv8wcwxzqzvqa6hoJMhQfFZUmAeW9P844XBoK8z74RSQHBs7pwxob7iPbLZNV98vvmvawA7MeGJwCj9",
  "key36": "5STX4gPhEXtH8RoaWDYn3KZyZinGVCoA2depKEbZa327wFPq5bf22ZwX1QRRT3okUbGRoaqXHSc7Ga2sa8ytjca1",
  "key37": "2o9b1pkJkHwbpcFLM8w7mY2rLJVNpQ2TVgors6JoV8pdpsiYUKBxoqrkEEEeVW6NUyb9kutaPHvF6kMTPWfxgk52",
  "key38": "4xNiXGYY8AMs6AnigxxfRdh228zUff537sMVLLiddKice9sMSB14BG9EJactYgABShCa6H2mkKPTqEM7YvtfovKV"
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
