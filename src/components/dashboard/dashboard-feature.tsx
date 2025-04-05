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
    "5d18udsJWNEMFnY8S7EdqVWnoRksmcMCntm3e2wYHEb4bnaDVk4mQcg4bZzkN2sZov8kyRT14S9Ja4adcGv2Bivk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PYKAAUJwPRaS3YgYKewuvH4PwGp6QkhJhqL55DBG18hztpuNJaRW3T4tDiYJMoMj6PBhiM4RQPLSU48aM8HJuQG",
  "key1": "HArBPqHEWP7hYExyAGJ47RP6igRPwtLC2JfLzy9znFVcW6cUpMJNmBoMUgDDbpDNXDs57LgEs8hYsMjQ4xzZxYc",
  "key2": "2xr261WX5k13dDN3zAZZRQbnkbEcNrvk5HteLsV47eQAMXxPG3CJgk2xnRiTw8f2beFE3bTbkHB49QJuiaaQgXij",
  "key3": "3EEgwxsYCbmTpQrikmTUTSPZRSH44fnhxc9NwFxQC2jiCad7GBMntVsALHmJ6yXn1GAB3Cm5WDdkfGbnbDCuU7Wk",
  "key4": "ntWzrHFq3Ls8GiRYfqqracLnnVzwoyku47FHJriQeTKGtZzmp1fYG5PAyBZNAYLVQzx3W9egmBCQ1CjpdimJmF9",
  "key5": "4QHjqe8oPgUPgUKD4Qivn4AnixMGLLje3SAvaKkZj3e1ttKGm8CKscViWnp5ZZBd42tsHnDL1TYndVvrzjoego14",
  "key6": "3ZZB2N45JbahjjFjLfWYxa28A5mwKWaenzuyYdjocdPQ7HuW71ySNHEaMpasZo5cfgaSeqLuBW6pyn89bxBUbDKZ",
  "key7": "27qgfSQfGNVN1bmV5YtJJH1hCiVHSrqANq6ac1QotPSxYP5SoDhhUU3zSbniNNiu58gsxptdahjn1NV4UvkEZncZ",
  "key8": "vj4HPsuJvYkRsHzr4anDPG7fmn9wJFisaWegMtbzdYCTqF2fFxZXHvnnLbkXjnBqDMxn4xQcsXNqvA8xWWP45Sx",
  "key9": "3v72qaMb3PHcbbTrdPXuzEaU2GfAj6FxAYXucLvvsXgeYcHJiuZR4jSCyQEpGDzHUowuxoiCcsu4oUvufUHBhzvS",
  "key10": "59jFyxyvcxZyKkkcS1mchowLRZzC4ayjHdFea5o3q21FKoSn2k6qSp899QvE8WuYFiTDhqsarbnVagczegoMXcpp",
  "key11": "67d9HSbxBVy3jzmcU8LgAkw8YYuS9x1dKAxic82cMA9Qg7aqAwFVzx78Z1VKJqRDtvhtSj6VEm5gWoCk3EaoB5Pv",
  "key12": "2Krxr1dH14WfnrPGPVsgzEoQQEHhN49BEYY6MufvQVqLrc9ik2ENasLYziutbpDAPQpAN9nxxjjHoBnQB58geR26",
  "key13": "3GtZfZkLnTmcYo5xBTat9YnUfsmf9FdeyMTNy1u9LqHAeLdY7HXM3vYYhWYBvSUPWZW3Lx82EfZzsyFjv3HcpGYY",
  "key14": "3bx4e15V8t9Fg4NNLv9tXqfzv5Vmh5mZF5ppLM4cp8N8n4VtXQLQJ34Km98PK8pMxv9Ru87s53EvJwPHWuMJ2KwY",
  "key15": "5nqTV6z5DCHcAcEwJNwMJLtcE6tLFeeugjp5w4zPJ4jKG4X8PQ28EU12P4MXY5VmEHd9t9hxiMsZktpRSYGRiruS",
  "key16": "44GgMLgBTgeyjTYYKv1mAtNq6N1WkBivV5zHxpTdHFuX1U3gs4TxfkAEU4Vts2FD3hKZf4QBFaDJZveqGnM53spc",
  "key17": "o4setkGAvV4uRbuJ1ZEB1JsXoWU6R3DTcrC85RKFMytGgnDKMnusyDcgMqKYydNvwzGkxRgysQMXaksv17jgUVm",
  "key18": "5SVgTBrW78mZD33j42nmUXaPenKky6F69X3Apr9F5hpaPuAnbbgm43jrMe3bCuv5fcezCENCgnAn8MCH9ibCZJeU",
  "key19": "oMwN44pQwopf9Xq3RFAiTtxbn2oeVxrSrT1P7MLWuEXfrJdpTgdWRu67DKC3PtjLkVE8U7KgKiojaenK1v41SM8",
  "key20": "66nhBaYCq3qRXGEEHtafF1S8LhPU6MbYfczvkEJTFAGzmfMJfBFFxx25FKLSJDuSaKMYEyBApvCg48aAcZqUyCMU",
  "key21": "3WLTFdKB66q4mftiY2k1J3GzBMvwZ3z2PiDZTL64t1EZ7JrK4SUqbiJjiwpUy6exq5GtsSaAYaeEgqJxtvWwXwSH",
  "key22": "24Rkw6TZ5L2S5m3Rg6uiisv2WPYJK7KaW7FHeHVZKX5rab6ozTQzHYkbSVBxusBxPx46vnqU1tnFsqZJHcBLoDdf",
  "key23": "K5smfqGDGnvjSgczvEmPkoknT9qYvmqdX4jVYjt6vVPeb4jZjisfoV7XoYcfDpAvywZAB94KtTSmiUiQNojD69G",
  "key24": "2cwsv3fEBw5bN6rye2QtgH8R7xxbZDDbhAXCMvVgMpoXj7ArRwfv9zG3KThUJR2TYp2USfJcrRcKjdJx4wRGWukL",
  "key25": "45BV1bydMMT6QZQ9UAiSBazMfo4RSjYmCNLcgmUVYxoAEDsrpiS7Tkpj5mvr5rLGzhRnhzfv4FNEtgUKYeHgP2nj",
  "key26": "5JyZzxXjSJ4LEBaRwmh39S3MTVdjTJHmHk6YyMfT1MsWZZCDzfJnsDSmFGgTRgrXPzEqYbbDpCo1rLPuxeQ2buQ9",
  "key27": "4KkCXghGZe2QM9aupYxaoGNQ2Vdkzco2hyeKgbZvzMes5qnRBjRqiR2ejfAMd7FEFFt4VaRNpV4yvAMjdRQQyKct",
  "key28": "GPXXz3SmZeB4HV3Kfgs822kxfs24Ku7asdsb4DCZSy3bJXdTwXWgxp2zMqepwx1RWapJohHWBfx6LRBbhLeWG28",
  "key29": "5YTjbuDPXhTRULpbqKLbPhqnBunBmz8nSzdyuvTtfoMJDdRUAzMhUnNFhCCPfBx94AjekG9bVQss9m3CqHaGkSVA",
  "key30": "5vpzTWdqzLKE8A9huzzuLj4quqeRbTL3eWTJFeaqfDwSt8JYYmS8f1hSjbcB5GcPiYWYAVo7SGfrRBH4czZRo45",
  "key31": "4xKVndQMG7uaRaVULGJ9XvTaX4za6ivSeWWmj5LkqbMZcpQd1WunfTi6XbChMrvgXhgn46tzZbygjtGtom4mocye",
  "key32": "24u8dVEQdSpyKyjBpuiwnqv2T5sBtbdhSqkyoLKVVE45Am1ZmmekoXkdFJmX397ZZXydsLUUAYasScWpV1VikKug",
  "key33": "2T1MEyKbjue7x4pzR8uJUXGNGrftzmUqcWkUMK32tBGFkktnUzv4y9ZBFk345pcdfbUZNMYf4pYZ5Ddk9dRsQAFk",
  "key34": "2jCvB5HBovrNhxc6HjnMWermZE1L1SPZ9VFiR8qCA2L23oMHZ7YeiJMda4gdQ7mkoYLNewH2Sa5osz3qZgbQGULK",
  "key35": "3gyG7xiivvm6w7mkSAuHisHCX3y76BtfLsk2M4KpRBEwm935dy1ya4iiVSc14gNPwj8YzKcmxBA1ZMRBD5pvqLM9",
  "key36": "124cwjdzewpwop4tBJRHgC5fBWaFwHT4mNjrhuTNGQKG5BBdaVcd7kTJs3Zs2qxQaUjBJfZLF5tyRPkeFwJVeLsh",
  "key37": "3rmWpC2SvNrRD95fTv8r8bGCoj15BAs6cfL2Li9A2icu97kPHUS5Ffqt5isE7RPo8RjHe8eFPL21PXHNrXJ3jJgp"
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
