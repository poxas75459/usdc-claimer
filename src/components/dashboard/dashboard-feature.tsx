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
    "4DbpN1Thqs85Hd45gQCszzWFFgRaQJSUzUAL5Qe8EgzQatL3GEpkzyoqK3zHdyqiQLGUxAyPXode49TTr2kx9g7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29X3M6ptLjLTfb4eckAkkDXjVCpQDcWrjp4RTA8v6ovz7CC1VMWg8hMvCerU7HinKxZED5K7V1CaVuExUiER45c9",
  "key1": "3niqChVQtPusMEdmy15oQJzCeiL74G84Lg6uBoucyBWePXz5gSPwnkXxmZX8MrTmvKuzGr3neM3YVFMdKdbKpE2r",
  "key2": "kFj7PiPmn2Hx73wPzXEGwLSNSgjwa5shc5afT2D2faEUs6UnoU9rYoejUu4UGW2HGScJtZcoqcDE3xBEChcDpqa",
  "key3": "5gtPboyucNdCa8ERXdBYN8H3PBRkFpqsrwzWgdHMaATUJNzvL2Lcb1fruJdo2UPDhGtVywmwiHTgNB23hGfwRE4k",
  "key4": "3ZWs32WaKq5rpjHg1Le1HRARoHFTFKemuMFRFFDkpwMCTM4aV5bnsPLnVA4qVdv7bBbKnAbz5wg2akhscJkLtN6f",
  "key5": "5GjqLmjwd9jzCVj21AwQ4mRxj4PPshUi4VTCQwY3bfuamjJ2fw8c21V5HxNUyMV1uV8Rn7VfGCAyi8iLUbXmGXg6",
  "key6": "21yFYS8ncAmCg3XdsfV2rMvFbU7hMUAyt5N3ovxe1YbwedzzMzCpNuneP4i2D62VkmqoKQCsVrWTKgFiVVqYzYQz",
  "key7": "49jKjvWgU1u6V97CY6dwsoGmP7xUSNeMK8YYr2EuVtghqfZdNiEj3nPZDp6begNcNRpVJXgWnrYKnmknn5WZ3vUt",
  "key8": "3D9XobamH2a7446XjmicaVosY5NACat9sUEZqzRHWDzixNtLpd76ojkpM4DsCWdB9nSNSkvLvTvhd7AWzLxzLoCz",
  "key9": "3ixsgJksNmcsqVcxJjPdvrFGSMDSF1rjfSAiXs1dMzf79byXcFpf1tH5jgnQ78bjYFaM42RM9Sav9haYyNiqSoR8",
  "key10": "5A1E8A1qC7pKDAEMZyJYR4bZcEzd9iZTR6xL3iAEJELqkemT2j2UxGB1R2ANptouPbxg3NLT1itAZEudvpFtrcVd",
  "key11": "2SmujsZnqvfcaLXwTZ723x7cefGzWx9HZBnBYg2QqNJYq66Xv753XcZFMutFhnyUa9THvUoP3PE2qeSWuWVnXF3m",
  "key12": "3dzYyUpzDbsLfmbLwcLbKvuLXMemxpneB6QgNnYkhTMyEDni2FRfkNAiDfUkqzRhvmbqeSGtVdnjFz5wDfo85Ly4",
  "key13": "5EJTdtQvBYMpVjFoFxjhbUXykkMrFvus3jfDuqw2zoWNV69aqgyHz3MXgGKhcPDyYevpDFBrcrBRLb6oc9sNYzR",
  "key14": "2Y8Ey9Lvy4n7sNytqiv9qgRmFppDPJW845hsYDU6fE8p5SLJCzHsekjJqrpbWeCZTS14obeMP4ucs64f7qm6weUt",
  "key15": "2aBERKC62wi9MifLuNKhFWTJQaMkbTGDkNsNhvoBFuye4ew559UhPDSBt1qxUvTVBWcgkPRd6dF6LtRDSJ972Gz6",
  "key16": "2PKPSsEksAkTHqWAAz3akQ9AX5RWMhucxFtYiZdWYKFFFgYYHrKBT7nEY6R1Cv9n8Z4XaTTKWPyAmQTLPnwsQHp4",
  "key17": "4oYy123KyHKmVn6CSrxHb9MHZ9fJX9rcVLJxcZdwKhurHkq67mo6WwybJbyHyyQMh9C3ifUDWnSiNGw6ZzayLS5j",
  "key18": "yMHvduAfzjc1dYCygmFeH2QiqSSV3RioVVgX2yik8y2eP28uNSo8dgdrTuasV1eVHeTPU6ghMWWwtkZQjfe7gHm",
  "key19": "5wiEVck9yyQQsSHrx9svkkYp8wHCcABZpYNXyuo3DGSaTu5U28rRejDik2kJp1FysVEE4w3wc2zB34TzvV4oVexw",
  "key20": "33jem5MQ6RNszsdvsWV7M8jgysVS7QzeefZB2B4meLq6nUjWVzWUZJ89XWjHPD9bDQxKDDNcqRtJ8dF8Pa5pGqxD",
  "key21": "4MvZrhbRh12pEEBvDmmFXazjWbvBW1z2cSmGwezDXWaDcHZ9JuwV34xBe69k9ZSZLYbX9oqJGZVCEGkcJ8psAdpg",
  "key22": "5qTdPCoW4cVGQ8tUT4ix38MraLcE4QQmzxFQP8YPcdxmTWBK2hAfCUVqLDAD8vq4fN2myEkctt4z9mN4DdPcqnyF",
  "key23": "3tun6UG4YiWfMP8zTmwTKAiKBi2igSAT1kNxxGbhGaBQVjMXkQnmzUagVR8GBtYeiVx9vBXCyYQufmyFuLBc23Ch",
  "key24": "4oHADEWgwrQLMUfYhhJgpzXDnLcAFxr51Fp44Z5hMCPwB3H6QtxVm7V9bJLvmx4cEZzLz7wC8pVbEoucjnAeFW8p",
  "key25": "4ax2ysGx5wgyBYPn3CKKX5PuPCKj8baf7a6Sq6daE5nAUeugMUyn6oUNXyhgjUFbvR9HPzzpmU7HNzF84H8zL5SR",
  "key26": "3AaXD7N3rz7Rx41zENqZzAGNvNN8kjDoRVhyAW79qSFr9wHJYwzGRAMGGesej6oWpjkb3toJG2tk2yix6wdRoGry",
  "key27": "3ggQ1mzDk1cuE4hM5xeDKp7AiRRfxrGLqmxQvZ4wrkNAp4F1ri8U2oLThp2g3J9wdmVPAq64CUDobT9FB3UjdCjm",
  "key28": "h5Tsy1Mi9rA8VfdydKoxeMPs8qKB6zZGHUh4hcKQDc5TPuFFpG9YA5YF56DZj9x4mWgvgdVgiSGZhZg9kcdqfkC",
  "key29": "yg7pXbriWsopf2QQesouC1taE3upPvuotc8RDEkmuAbDLP8DuLgKADYX14CHDRPWXP3QFXMHVTHchyryvmYPuTa",
  "key30": "2irLGU4dGzfUnZfJwuGagwHhKAp8QdoxE9hivyuz4rWQjUzcdXcmrrvdaejXrBgwMK5pCBz35xS7sEfiye8oHon3"
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
