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
    "rn8RN9tscCBeTaFeJmgfJLLMLZp5cHe3b8S5xpKEHcohxLYVoRHRPPZHUa5ZyMhYwqibMbFsjZLH4fq4MNRW5sp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rvkBHPr1yUyNvwPdVgdGqtdKkUoacwuFLZaKrGfP22rsTdKgU8ADY2mj5W9pAPJmEdt66U5ZzXj7RVKq2Gnw29E",
  "key1": "3mok4tFAqpoda5zY9Zs3mfMeXoJ5fyVkjoUq9oGiYPnTbYhaKVHyjcuzLwzy8qcaXoVa6LGXzcBQZ1NJgzTUbRgT",
  "key2": "535UP3XUh7XALqJFgyQ4U1vZZc99pCArYfwF1n5cikwvLDJCNjA5Ht3N67YWboSao8F9kZDLHYqpVz6nayJS9ohb",
  "key3": "5UYpBMEAhJQWZGG8ix75tVhuTYmK7hUVwBjTXcPTKtD8cVK9qmbo18ghWS5oqBaL4uZHQ3s7mE1uQeWBvKhLRPLK",
  "key4": "5BMt1TRK26LaGJPdVu7MQGZr5y3HfrqRWcp7sGfNHSD5QsjTWFJKJ2cBvxSPcGMH8egMwasWK1trJWb8qL71o1Cr",
  "key5": "53hTBaeB5uA7uajw4btpBfJ44XaDTgdcwWuwb3BHHMSp1mD51UStYM5GsotAE6AH6YsGZTLR68hUvM25zWVGCyb5",
  "key6": "44FChthcMXDEKHf1TLh5fPJ3eAz95jUgMMN3QcxU8hgZSKJy2rbJ47QXSGqCK3c52DQDyWVUMUsfBNqqEzAbC9xt",
  "key7": "5Ns8dPsgFckQRLtoHfPF9fCHU8KrwXbvDC52qRL6JTAVtiBFnnsmsRJrT2DEEo64DEkstMeKyqSXypKhodrT7w5a",
  "key8": "4CXv6cjSwfVTpvHJAqjE5NNAeC9WjVTDnMkJXvsfEJhc3nkLvJ7j5Erc3CjdghD9cYJn8qE3RB1tQqsguzgofm3d",
  "key9": "2W6JinyaQRXStiKWVQkNi9DLZYUEsMUYe93XhH8wiC5zYJp7bycGptTXMwNQf98nUrbS4iPgV5URJPNrz7r5mYpY",
  "key10": "2YkkFBL5RgsZTurGu7wiZqVAszHoSfjbx42G4ZP7KwTtqZ2wp7q9B8mQAKMapyLUgrptfEsN1cTHU8QPK971upNM",
  "key11": "47nwZxAGkvtm7QvD8wVfZtxUrgSuWVNhanbHrJjqXyjZgwTs3dbHkwcZdPsT1PcTeqY1o7zcDxFNXnevnqTi4dKg",
  "key12": "3f1GLwMiJAfFBKfJKMvNgGkDE4oPqMmssm2vvtGnRjCm6C4sfZM3qqxt3UDT6zEEw4eVrdgyjaSzertftjKs9rKL",
  "key13": "35pwCtJC4tXjsaW55HaVjpLfswqTe1tRNdp5LPv9XoNpE2zpco5vAT2pJa9uXEU6T51CbUEA6cXMXQ1CJvASmdQd",
  "key14": "64mywj8wjfMknAVxp1K9dLKdFduxVfytXvmtohihnbQhfxyBEApFyd59Pqg8n6ijkCuvh4qVuqE1QW18u2p4wBwF",
  "key15": "469tNmsadivEca8FgHgGwNTxBWAFmySYuWb8jcKj92Z8877jKFhWhAtD57eyvAQhgVsMDFqdQTA7bvzXLz1BxrVS",
  "key16": "2Gr32FjBeTJ22932n1pY6QQc1Qcc3Rp7AMPgP2r99VUyXoshZiz9rk1UYgjLcWR23bHLBozGtr2iEqWDQw2SHhpQ",
  "key17": "4e98XDsLog1DAs9SNgynRgNSmrU5ositZh7gmGJNk3wNUKmrYEXgLUujxJd2CGbAMi6rutXUXgJMeY3vc9qvKSN3",
  "key18": "2F5B87anSnaoN8CqNKpTsvcgCoXvafcSHHN1aRqvaVxtTmxAMSAPdvttXATwdkvZY2gjarWtj4KpKB2j2eGybh1z",
  "key19": "42cWVACTc7kHhi91gfwBAEoTdXRpPhrjCcti4wp9bRwMssQvwjmdMV6fGoaHMYNZQKS4fhjxg71tHarSuHsxUBWD",
  "key20": "52bo18nuhTjdQBL9hEwqywSVkT8G317sPMUwnA4b6umgzF3Ld31uFane3hRwUzrx3tjFMR2aRVkR5tGmEgSME7MQ",
  "key21": "2bZVRBBVs9np6mWVMs7M5zcEMCbrwUTahSdk53XWZ1iGFcdXytb9HHmGsuoRaC86t8rANU4X5M3eMXHXHzUCYVaT",
  "key22": "5eoqNb6pxVsjF2TR9BpnVQLkvi7HJzzSFYeKe7DR3Qjtzp1kp6wEpiP1SVnzfsrs6fvBFwbyK164tKPBY1c69CVW",
  "key23": "4AgNeqYeYeUkzmV4zpU19aGv3qJB84DztsBP87bWJNqANsogoWaABwy7XeiEYQowz615fADV95rTSXU7BPNKSxt5",
  "key24": "NLfoTjChEZC1oWtGum4Rmv6ecFAethQcM9kQVw2PLfJ1BT2ak2bPKmqKZ9kpSBHovDuanGgoAkHzSj2gTfZiajk",
  "key25": "44rK9YzrBeCSPTatEKaD21dJWbJJLEHF1ERgyWeKC1TYMdXUqsjm8w25fE8CtKqoxFeAoL6ijUbfBLtVbK1s5gqu",
  "key26": "33AvBuxwrkx9pbyh4qv2FeFMpoH3WXk4vyeADoTf9P2wuZhzYtVZfkDFCbVAeyLp2LMMLgeJtc6qVua6Hfnjf41Q",
  "key27": "2jQQ96HC9R6evpsZYyMFMEvvfvWYYMgKb8wg7WajvA6WVx3AVoAinu73TVCGSXnx12wBR8Lakyy16PYYjQeCLahY",
  "key28": "4bwPCawXZLPByTLRhxxADzrH2H3QD8Q6XLjcxvNd6cPCyb1B3hid7WUnTCWsasRexoF7HEHBjKnEa9jXMKSSTHrZ",
  "key29": "vvQPpyGpA8jB4o8wANKwiAFdzDB9eoBE4VdP5XtCF6H4qt39RnngvYn7M2ZA6DbgfBYs5YtdkmYwAM1dnTtJ5Fi",
  "key30": "f5KsbL1US6PARKdj1BH5oxiS2WCQHABJm3tdWfmJNvgPULSw4m9VGFALUQEoVgA3btLT1Rt4Z4XZP7qPyCRRKQP",
  "key31": "2mMRua2MGBEgr9UbxcGPZGqAS25xVJqGy6yvZhJzpQEZ9acjocGe6RD8JwcFwvS63dasJFHbxUZwisSRfJAk1bQB",
  "key32": "wwCptXKwWDiNpmQVkxnF7G4RpHHPPeTE68HJ3hwBXAG7Xc5vDxNLttgShAL3moFxi3ERyw3AHsZvxXnK1iuHqMR",
  "key33": "N5Q6vusfHZasKoD7q9m6UnjDsvAwYD9i29KW7wHwi7tYcbtZvrqBHwEWqxbJH946YUjQGtUFZTyEscTkv56VsKZ",
  "key34": "5w5iXq2h7shooDLM5HkR4wT8k2ThAZW7fpxtFizMmWunatKbfacHxG3m1FoKFmgPTZPs4sb2oTqteHHJnETv8zP7"
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
