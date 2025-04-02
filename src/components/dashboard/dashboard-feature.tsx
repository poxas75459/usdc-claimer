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
    "4hjscm4i76jsdQGYLEqvV72M7rXsfSqH7UZSgEsUMAwWEiwACEQAquVsskdzEyXKce2xb38XqRp6NQRvViwTD654"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mk41aa6W7APXUKrfTkxjA7Fw51uGuCHvCZtUWFtmrzHmMF3EjCvygUG5KqoHBMXhYRFkkGAATfzUAjoqqdiBi39",
  "key1": "SoV8rXrJsnfebAmY68Bvc6dur6U9Wk5a8Cox3mszFbGK9UTRNTmfqbhQaqNYBEccDSrpva8FJQd35kxaTwt83eQ",
  "key2": "41YiskiCGrXCjssL4oy7wYy2Z7LzsAeV1cZGJL8xwt7ZSUueZWQjBuFc8r4MKLZmxbzjT8VCMj7HhtVDdgaWXRti",
  "key3": "SPP8ZASPgaxdd6pr7chRQq6xorubBfkxcY9v7m1QrGWCbmdNBcqCKjDNJPoDPaX7szEaLE2REs3eXiBk6pdD2xB",
  "key4": "4P7effNyhSEvk2aGuAWyt7CBNodMmDcUJg8JiVW6bN6LvNUK61UhSvVuzKPvVTfjhgUEhQmPGDsvNAyxkGJvBrDy",
  "key5": "25a6Zj825PQpfjYbuFYHtfHnHDaANHDaq7DTdwhby37tsYdVBCJ145zJkcfPhrNhFhGWUUU5NGVfu1yqXqSQSosV",
  "key6": "4HQxFVebyhEqE2TvQaTMWFCDaf3FjDh4nuzU7Q18fMktuYPmiwEvLeA7KfKcDYwhfhC5Cn5tSyh7Zqxg524DJ9nG",
  "key7": "2k88V44xKZm2wCs1frSRuX9BACYHbBKeWNuDX1uVE2BjNXNs558kCNeTEv8AEo2EqBsmDNuDJWpBFAEcaCeGKSeL",
  "key8": "2zSKLTCDLqDqJgQYkcVf6Hqb6NVPTZuo6eHxtEusx9TqujSVXSnLEszb81Bn5Gwa4hJe8Vd21GUAbz8ArUSy7z4X",
  "key9": "2iBATH5JWPiWeQFSEJqY6iRTA3Bd1KWcLpnizPQ4KQAzumdFvh7Xt8n2rSMZ9aUfoFXaUY5UyPfMw4hJx53Uuk5Z",
  "key10": "2hD3eTDqFMvkdkWhDtyG2HAxktvqp4KWkjJ9JuTrAnX7GYHuLrHVGmTupqre76dpXPncQPJurC66PK2RwMumUyHU",
  "key11": "5k8nhhbeLB7Z69VKejjn1cD1Z2VMpzoY39jNgZiecuuvdzhqB6zXfAjKoFrVZcefobrsktrG6mc5N2thYdhUbaEt",
  "key12": "4VVvDtk7fHb9CmKakoyb5KWL2QhHzGLR9ZMJEukYQK2FFiRhKuViDxo4vMTkpm41kbrfXum3WGHbcrrWeU5ErZq6",
  "key13": "24ujWzGVhzMqwbZQgADBe6KgW4U2DNFJeoyXZWhmobZrmvtCwZENham6DnkjxzpqkebtxvtzdVKjEuwVtXqiXby6",
  "key14": "3sNyaM5JnMBqZcUPxn5b5QMRrdcxagj4x5YTAnawa6Wty4MYoTohx1yPozz3QDPsUbTyU4EbSCeAjeSkgNKsyLxY",
  "key15": "gvDiSu1cb8bG7HdEqFnoNCLNp3qkNvTaEjEGdoEGednYjRAXnzE6XAY8VLg89fPeyFp7LpP3airpqxTigyo9BKN",
  "key16": "u2w1B9p2xtQKXjRW6mgAyCdFyASoa8D93RAABbDGV2FqxSfjtmDcjZk4kc86wG1kVTFi6Uopz7rbLTH9xQWFMwV",
  "key17": "Zusqhh6b55QnGorwKk5ftRyKfNg353mtmUaaFyCfXkqZHJizd5YV9dG38s3kU16MYGfsyMuXhvZTxtEYE9ohadZ",
  "key18": "XBtAhyY4ER4srSPwGhAYhs46D5RzsHgE8iUai4pWoUhFU42PFhRjYq76eGfqapkSVk52DByfR6znXq1sQQ56bbS",
  "key19": "5nwQ75yUG6qPhueF68MSQrqiLCdsTS4fi7zKhSkMY6kRqogQPrZimV78a8bRKtbCF78jWzJKKdy7GXcZAYF42ZeZ",
  "key20": "5Ex57aUvGnRNJfff2CJTyDPRA4Ekz42MTerRNx879mJ6wZWtKSQ5cffikk4j9ovWZSKnAsovwKNozWhcXvhAgerH",
  "key21": "3hGLy2pjp6dBbEmujGtBH2TPPoZ7t2UExxusq6ikKmitqs3cf6PKXAF3jnVVJTe8JBRoNdtgEyxMJ46B2p8NLLCt",
  "key22": "akSkDSoYyfF8m7Rt7kq2Q2wwRSRx29ccjkRKz65Dd7SkRVxVn9uFiJJtZmvUjzT3vPk317C82mc6A3dkDqkAoM1",
  "key23": "3JYR1ojFx6PmNZRwJfs6u9YYz5dbWGEvMUL68MChkaFcF1dLTwXGJkSVxZAtZ53rfirsBcVSyAY1NFKAEAGXGQau",
  "key24": "yk6keR2wJdjnCNaL6Dv23EeC3d8WsoQW6j4HNk3TB1XhURzsbNjGQtQgej8YwueLpK5hB6uApw8sae1shZpKhE4",
  "key25": "3YAcKCXapEqPXdQ45Q7UFLyBjG4AURjZotJrDYw1HTHZPR7tfXLc4yfqGt4pB91MNbP84oxnYbCxoMe23PYZRmQW",
  "key26": "5EbKyPzb6S2CYZVyAH1KBNTUm9skceD16vyBPQCLJYvs12pBXK9kX8xun57bCEZsePmKUQJsbtZzWLGpogYVwBie",
  "key27": "3jgwaet44Jn7Dz7G4JTZWkcsnv7GqhmfJVs6Da9Z4efM5ZVSs83raZH71iJrd5qwyQZ6SthE2tytzdkNkLd3w543",
  "key28": "2VCxd2TixBDFpThwfsCDboJbi9GdGLJHkhgEKFbWLGGg7bn7w7jVJuHCAdNK7uJHNcaWLCzFiq1ah8MLyfocrgkA",
  "key29": "Z2nP3EiYEpNCMeYn1XQdJpDthX23QBKnKKTWvRtRrqjjuh2dvjxXptUwzQCL1CLq7bfRd7nLsepgWpTFAtbqf5u",
  "key30": "2ZhHy8drGFREn9mg2S6WmvgLdf6AHx6S4Z6igVzB5dUJ4AJBSNKJTi2FnTZK3PBz9AdcUbEZhLohwGBgARfRq4ZQ",
  "key31": "nb2USBjw6kfaMc4BbCTBRWT8JD8Uwv5n1iEk6C1Uk87Tx8VL8c1qpb5WQWN2jGcHLk5sY7XUkjB376pTspwnxrV",
  "key32": "4YE4x7JLAkKgSkm8tWiXdPWWKMwdPMD4bdrNSKdif3BfW9F9WqKKt3QKZVxfmPUN3UQ57JyMx9CMStLUVZ4qHT86",
  "key33": "5SyN69ZmJ3To9wfbkJLEbgSsQLiEA2A3m7Vf5pnWw1AE7B8izyP3vbPHy1hGmqMATwgKJ91fmo3oLzogPW5RnByH",
  "key34": "2VaGeotWpB8yjZ2vCciFMFwkQ8E9a83HJvS5f34YwFAnqZJpeCUdQqcUexSXHhDAot2cmwoswGQCiru7uEgWsr3q",
  "key35": "gNu2zBxBVN7WCXp4zmcafPZeht2m6b1JDyHwPaeEbBy4UeTfPZy2vDXSg5ho4Rj8x8wieRWfJyDSmNvJSqqimkE",
  "key36": "4r62ZCxsnV3LXR6eAJ1qLBpEaiNpBtK9fxpCGDWjbq6y5YTzoZKr5VYcphx8kcEavhv93T19ULjhWjVUUd2nZYdC",
  "key37": "4fxkrdPs29KRjb4hoCaj8GeRSHvdUoME1KtYj1g6i9CHr49R6tCRzhvmzgmU3ZBN5qe8jqukEkjpjMU74XLR6Gz1",
  "key38": "2LPyMzYPiimhd1nwy9XN7ueWVn9ri9h1gjXoXtbYqe5LBt2Pc5PTo7c8MctzXWF6J22YLtUr1bjLEjg5gYZVut1B",
  "key39": "5YY2GKwq62JBpHpsMEY8jCdrBa5t8sLCkng9GxdFGieiUviAY6tLiFMGN76Lfqo1rK3N9dqbgHr4e1SHmRMASbDT",
  "key40": "3DDQmCrwhXVk4eqCSQ6JxmXysAQtWDjssVuWT7oExzovTU5UMpAKWvM7NUF1Lyz6Fs3DqykzLM9TBrp1HSpskE1a"
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
