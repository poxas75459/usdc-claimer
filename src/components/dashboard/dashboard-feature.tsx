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
    "3EzTNGHxdUQ1yUJh7WV5i3e425nkKsPKZzBtv5e52X7JZjKkND87DLt3FuP1m99XfiYU4PpYeSP3RNyrn1xruVQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E72p3CdQHnqLL9xep3YwvQ6BNsnf2VFqRMsPzBrqcK5qF9a71HETAFophbUrKWxidTvJffx3wqC5pTHh8b1BngW",
  "key1": "4FuhnWp6BzVJoAXNF5q7FaFhbETGxpBcG71WSzB9cB31y6yRjrwY7XmVvTXGuJ7ZDN4G7YLbu3M4z6U773jDtnP9",
  "key2": "4EzBsjdac9o6ix3pZnAo21v7xrAD2cHb9ZJ6Zq6kNSwUK75u9va6hno2psPDjBbDyJmanx9nGnEKZ8LyZvX2mAxP",
  "key3": "4xrwTRyFPWRcgG9iLQhzdgBxXMkW7C88BtKiwGU1CrJ1UAUurRCqazQAnaDspBetPS4CHLRoXAehNenfeiRh52JP",
  "key4": "5Tyc7hBErfbvweJtt2cJdXtuQx37ahpPXgD7BGHZTMPCk6YitNXu5PE11LitWj9ihMJTF6i9p15FumhSRuVGW6G8",
  "key5": "4o5tHJVBAmQsJvdBrxazukaGRjAQkv2gpgvmiVMSMs2Wo9EHEqn3qM1okRbYE2nLEfE3jtW8Rv7G9SSBeidPuWTr",
  "key6": "kTJLKYGdzNpRvyfXmoaqAMgQuLhUc7hYANXjEoaJ8ZcQFmwBwWrn5tGb4GYAhrP1TqSwo5f8fPyyLH67NhHH5M6",
  "key7": "5J3JbthqaLEZNSwwrD1Z6L2rxEeHGRYryLMTs1GLoVi3KiwP1RSE1VdpSwHY3AEH2TNFEusvhCe3x7g87NaBshbh",
  "key8": "3dyLktd8JgGLg91VR1JpNcHshMYrRbhRFB9tZp6Huidm47z4Yf2gh8d33YZfiU8vnGLAPKS2LHmsbpeW4BQ6qYXW",
  "key9": "eeYzfSDNLu8MwQxruFNAYtx5YDX8eWsULBZHWDLXpCbo5cuM6tUpfeSuscsovxkgLvQVAeV9J9E8pgHD2zYhCWd",
  "key10": "3u5wohJrHppMWYSAEJQezEkbb9nKKjJ9quULFdRd12iHHZHggAzAE5sSfqQyNhPAVLzDg3BvcGmTjf2KUXveZcQw",
  "key11": "57Swtyan4JjSDvpuqCBjDiiVkZBQneLcyZjQdpChiRhiut1TZcsyme1xdZHTxbUHWCe6YcLgAt8oaHRDXc7Mw9gu",
  "key12": "3SmKg1aSE52fi2KX4KwcQVRhxn9xEPpX1DNjughwy73xPZFgSzup9U2M9Bj2RZkQaPawGHjTyE8Xxuq9ibP6o5MB",
  "key13": "2seDhCZNDo1nozZEDeXUVFBWsKZsyn8wMAWqTZvyGf8TSHUXTvvJ2tLw6KZxAxNsNoncGyEDKeRmYK8Arf5foPg6",
  "key14": "5PzQDsJefb4WKZZMSCdek28MwiR4Pjrh3zJM2nXVzPuZSjNAyvYEcFep2K7gnWLtaHrNYwSuXmf62KFBGRWMUeAh",
  "key15": "J8RQSmu2VXiHULiQHESQdJPoK8SfcqKxYhEfoLzzqTZqD76FurrEnYPuvX1p1NM14tTu7zscfHDVSUcL6Zjf9ED",
  "key16": "48r7SQ8HXw37dHrFmUEgv3Hkm1Vhz1oFHgcFydSyCmaR6hJTVMNFKcnFgD5JDhEBMmCobzADMu5WVE5Kx6hxLC4X",
  "key17": "5EekCiEyEFSdWc6RyTquGoifby13wDruaUtFvgbr4P9UYyFKB3C4zfR8HXGUg6gm21b2m2ZwJKrGkwUekpUQTij6",
  "key18": "4HRJLRbnk2yqBbjfjwSUemUN2LJN7vThTefpuEE5hgvka41kmFR5XYZBfSrNipmuMUio55DK1DywhL6h43E9nMF",
  "key19": "4TEdjmVyTT7WHret48thqYyjyDqUcQuKnaQf1YxUXPaTgXjBoK3dY5UuyG7rSRqHmLcmQL2rXwTqFtjLEr5PRjCu",
  "key20": "5CET6HYoMw6RPWiJ6ppviXbVsZJ7dTtVLa21fVis2P642asDGXeADqkQotRSxpYgfux9RGLS2WZPpeYZ87z3jL91",
  "key21": "2Q4JkkVtF6yn8Nfnb4RfXtFE9iVLgbRD2VqrViGbgnUrpLCFiUoqootorY9qfPwizgyhjuQFhv6mso91z3o4hxge",
  "key22": "aDQcShJkWXBprMPtdTcgZo6YiofVC2BHu5Yq2aMtKhYHk2bWGaS664f49VnKPUmxbtFMgBffQ3tMdDQw4jYatau",
  "key23": "34Dk69by9SY1HPPZ2nRTWmYDVUm7QNKkw9bY3rexLGYozPbzQWjk2PgZh9E73i4DyyG9gSXrxa4JJkRo7SLERfaJ",
  "key24": "5FKGuaGQjxQ88ED3LBxcReXN6J7yETRDBhLXbwGnDw5MW3fddDtYhfiBLGTKGuuzciBwKLgNYwzycaNWA3G62XMU",
  "key25": "2xZLdaFH7WhhtimnKci3QqomM2XHCcbtrrSnwvog4PQpc5fHh71moXYCvkMqx9CXj2zrU8vMjaxrjWSAee8B353o",
  "key26": "4wmPyzu2BbLY8aREPc3XYmbCehmarD5XhQzux1a734Jy6vDuCj8BTBgwdrLbJXf9dzXHtSTvw6tSjFDymLc4ZYh8",
  "key27": "2y2Chw76zSBC5t8pQdYdpGo9EmTyudUCLPK23cHYLj3N5ma3mMj3FjSgALkWoKTKztSekoxkwvmKuN9wbvgbr2rn",
  "key28": "2gWLgfh2DT1thnTA7W6hvT5uCuAkHyyuZmTFYEcAWhvmYHuetSBcDgKtk1gb8q2F3ExMnCyH8EdYaiotrT5LdUDu",
  "key29": "3gTmgmGBo1H8wnLN7PpYymanByWap52LobNBBU2qXzBRjEx8PLNWZp5VYWiuP4ma9EorXM1pA7xP3SLhnhnUY43Z",
  "key30": "3bUvFRv1fx5h1uycsXYNvBVKBDqfhFvg8WMvj76vm8nBJj8ye5JgL1hFUy3h4sd8z9qTwYugz4y8arT2TdjtJUqR",
  "key31": "223BWZEigDwQLJDXeKEdEdRxUZSJ1MfFbn282incwUkGhZCRNrAVG8BBCSRLgiUKvQ5f2wyXAXjH5CHNGdHpAaVW",
  "key32": "4XRRPKzSGbR3rpzKNWJRLm9nvKBrFVfGdm5rJPuC1wE489ed3XKWuKwxKppb6viayve4wDc9nXd7QjLUkSHRZh3o"
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
