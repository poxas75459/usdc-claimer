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
    "rmrpc4g1FyKpVwWEfDGjGW5Pgs9HaC6iVBgMB2hgwcPGxqgTTfrVNkpqo7RJMFDfydhgro4eZcarauzwLjj8iiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34dc1iBWGfjmbN18RXz57qDD1vkawrzwntkA5tYDxu4ZfHbLoNoenpB5bk3GqJTeWZe6wYCYAbbZP3gxmJSS3A1D",
  "key1": "32kSrwmU39L8JkYHarhYNabDWrB6Mzx27VW4QSR2bJwKNLu4W491raaoqSNAZKSSDpdaFdGHmuJ5AyTmZTktz3MY",
  "key2": "5MVfSMxwZmUimcwmMfXZCA7gP8mnyqmvRwofUXmRxZMgN87q7fEqZZHHaNF1e8khreBJ75KLfgAygaunnGSXyQtT",
  "key3": "3fzjP9PuTQn7R1DPCH88WBUwm1zkkB5KnkK8hziYZhvdMzmVv3oLB1CnoeWpeYYztG6oSd6J5t6GwCLekXSmCnaH",
  "key4": "HfDFkMhjoN6wwyvC6zMi49kTAbB34MmZQEohxydFDCtJPjgZcNWwybHAYhaHwFmP5LoMEamrLk9tGFfpdayVL6N",
  "key5": "z8p6aqBHFs1g3dsEfyiKpM9GL9jjRPi2cwQF9ZikUkxt13tRSqizas6UTsMVRaiwNTZiZvjbkXVANdrnbGYycWE",
  "key6": "3N4znwnA4XT7jTsNRnmd2wCmvZjKPs1TyBr4iuVxNxBKSNmP4XAVuMLrPs8e9pvgiUnnbs6V1DPiV4EHV6NJ56Hj",
  "key7": "4ffWXbGhjmgiDj8TBsxcDjs2D6BxkPjaPecSZWpPz7eACHW3rvo6NaQRunsBYxyjfaU2rwN9wF3CwDMCJtghPbGf",
  "key8": "RxYWMBg3z3gp8k1LQeSmeRJzwhC5YtZdtd52iH9kYYmeNuefKYoEkxN69dhVazCGV7MjwSndwpHNpZ4gz8XqSEx",
  "key9": "5b9UwEtopZ74swRjheVg7MKF4BSQqa5iYoqbYepC7jekwyxw4SLDXvuSz3N2uEHB9zXfmXkAe3Cy1AS2dyeAQdzT",
  "key10": "5kvEn8WgxHvhyPwHyHbeSY367MZG9JGoG4KqEq8YZVBC1UEd1tBXA88zXBfxmWhzPYeHWMafZKTRFAUxV6waDSHW",
  "key11": "4idktEbhtRwJ8TNeuo4vqJu8ks8BqcioHp4vjuwQLGHcTsSDXMxCQ51oGcmPzi8dmFwWHnFxLwQUa6cq9xY7D3fq",
  "key12": "7uE8szwyh42TffpvyPhUj4LgdUP6dtSADV4R4Kg8kYLYSyvqttoCmW2TPsjHF3yMHdwSJJbcQkKCALWR5zmVUoo",
  "key13": "32GTwnW1Ug33kcNPBpKTdigzEB4btaM4oNhe2QxPpQMHs1FQQDZsxDui3BFZfzqLuPNssnxQxRgp72erpWyL6K5J",
  "key14": "3prGDKFggaeK83Q1WWYPdeiwXH6FxX3Yde9k9KPReT8HuACLvMQHjcTJYwt9wR8BEhwfqABJVwjHa2SRr5Nd739v",
  "key15": "65t4RcQh7z6bSWehhdouDZYxsa24KTSgE4dYDTbiVKdsLbyRE2bjkFmQ9x7do3gQePoPD24FTs6zfAJf9ciyjBFt",
  "key16": "6eBYt6ng3npQgoTWuyjjG22FGbM1BmP63h39ti8KCcyag2SyipSYBFHhxzvzGLKaNqzjhmJVbeRvhLy7C6idCWu",
  "key17": "5mZRYVaym9XTrhFpmWRbt4Chse239BsAvtEXueYWYZnFbcrEqoScfoxsUkKDs9HpSSLY2QseXxEpWv4poFc8oVFj",
  "key18": "51153AubutkuLSzoHzaYLMUAL2rMvPyJTsS3M3rDZqdErczMe9C2fQfP7GnMrttPcAcG9apceigqzhinqUAvmPBB",
  "key19": "qUcaszjcyBrvrB82XCo7gtrkdWPjd9mmY6nZnfaqk3VyFcr9QTEkhSPFPcsEziXdb4gWzzaPpNm3WTBDC9WjEr9",
  "key20": "2S9BAQsx6pZ1ek5jmEGxgSvYHvMR9hLyxE1LsVx2FvdU1doGNVbwV7CwnWiQMT8PQwknVEoBYEK8JicFndv8fDcz",
  "key21": "66aikbB4VA1g52BwGPoQnbBcViy8BLcSH9ADdASofBKTA6h3Ai17MZZy5EVeC4pdeiJaApeZuQ3CpKX5secRgH4R",
  "key22": "2L3Jd42ATq5PWZmjkTBmvGZCWHNTYp11YtJ4RcJ4bCvzmEpa5f9mxak29xfBN8WNtpSi5cMbZX4HQyoDWpATQpK",
  "key23": "3Y8RxkiefjXZ7aNXKiZ1wcEXboHnJGc9V8BVBCk71G2H4HqCKuTLk9F11xQuS5dinYnBB6BJrLQBbWJS8YswQZkU",
  "key24": "4p1rdhgQzBkttF2KEU8TQbivsxMtZyxHWHMHn7sjchbnSp44TGBX5PwtwpiNwAacPHPfFnNPSSQF3R9k4ocybRTy",
  "key25": "5CB5axYAqNE6zzaXh5yEDijK1zjfT5QyQCr4esYo7wgUxmLMLEmxxnhYzuLcVh4a4o1cixJSqecjBVQKWim6NY8W",
  "key26": "4iNrjLeEohFQ9Pn4Ym6rgz5GFkv3XgjjGUvMd7DS9YywZVEBntUHpyLGaAakhhZEqjYKXSoQnsenYXtxRJXhMxYE",
  "key27": "4dkLc7ULXnkkuhtRbjjG1HBoEZ1RkRexmiiJGwspxxJGAQZmJhfjHgNGGV6xaTa3yy9jfgeB3LanaXjvo6dqkspd",
  "key28": "3xNfDo7WbLvZqXHhVkAH78cRKpGC62KMMEtkP7K3Z6CVF4F42crAPeVrefZ5F6B52oe8V1ewHDR7PsSF6inR3LUs",
  "key29": "3W4CKttHQJxn56ideN9FNea8e2tYhqAXyyPumrJZ7TJwp1gQGYeYgmQDgYVSDHR5xrWvTHyecM4fWtt98ND8jkgE",
  "key30": "2dAp8pB7V4zJhJTRp3GabQ9aesR2S43njSYr4Gr7KcGriean3TWdSkTdQdwnjaAQUwzB4cUBPVVi4LXskQcXxNUL",
  "key31": "5iwEQhZxB91JfbDxUM8X6eRaUbL2LrGJzXno3aWNhkhYL5HmSvnwrGF31NvWrvTcrofkwYF4iQqhLpWVV82Lbyuk",
  "key32": "5BeA5fXSCDu4YNtstwmi97kMegJvpJCvDYuDL4Ujmhirknuhvm7d1vqzf8AmE8EpUDo1W9Sopt92evUzjRhWgrmY",
  "key33": "3Q1Y77vzd8x3DujZNE9TXgG2M3y2QfvNxdmCRvZq4WfsNXqzqB5Ru5XgFs8AZitjBULnenDbf3rhkkV9HyL3TLvz"
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
