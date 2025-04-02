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
    "2tg9T8bmDaj9E8TstRaHc12Z4ZUMhHux5g7Q9RJRvBf8VhDNi3Vb4d6mMqSvtVNgjXE1HHPceNMUwmXmmN2HpVV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mFXnV5wUwVbGofWdvmVUUbpDpTMSzU5NSi1cYvgW2QWzRas84czb5hb4LR2NhHF1YCiFVxStA1McnTocRMAVVrm",
  "key1": "4fSCzHhFovGozRphrs86LgHKWsTG37syMUqKx3akFha1F1hPcmpVf9Ae1J8ge2F1mXawgUsZGrL4egspRX422LAK",
  "key2": "3yUBJHvyJmVgUR9pMQMveDr2AAVZwk4UQU13D5kgz3BfacXKa22Y8oWdE1ZyrTezQY7dMQp8s2m6uLQLVLcsaqQC",
  "key3": "Ep8B485GToCTvAi41D9RjaHDBBEecwo3T2vj4ZjdB23DHy7TV1eXZAQoomgcS4SktPxBkHbckD2QwSGJgXD1eum",
  "key4": "2ovCS7SkcjwArDPABUPNP5NHHZ37GAbBq7cA5i8Ze8qpHwwNU2EJQnJfTHKabqWdTHLA6ABqmArxMiDriXhJ5SW6",
  "key5": "34rqJ5PcLjmcHM5999t89GFcJhPhwxSid74fmEAEzVPTNLiTD8UuvBsAy58ZoDvHZxaCJfCC2JYNPrdyUVG8w9nc",
  "key6": "SyjK3hsgmZbcNEjX1ep3spKjpZXs9RxWnxxDo6KLoqDHJH39GUs6V7g9g1t7dV25W5M547D81Cor2J4MUzR5294",
  "key7": "4eTwBzP6TR6wkugvSGTgB5MyG4WWANa215qSk3Y5ExLHLz7wkHZvH73W4xJERb8gXXN8aEXxE3TPFTdeR5pEEQxE",
  "key8": "5xWUB966MwG645z6VvPUoy7h3XJCiwWUP7HhbTHz1zVCxXDarYFJ4ZXWco8BQwCQnfp695qUeAVHksRk87jG7PPi",
  "key9": "SAiEHYX1jQg4Y2pdnqVhePzDfPpAMfKH1pdPCzRmep4jRtic7zGFKLn7Lsyj4AXX7ACEaz93jGdsyVjbVris2pc",
  "key10": "5Twmof8fwgYiZgX2HWKuYbSw8M1KCivJGncof5QuFSFPsN96uA3BAZiTTyShhHuxcc6Doyq4xJYzsjeTcrsyCoT3",
  "key11": "522CZwqQLHPoRNb6trmXxweVajFFMewXugiPMtyy8Fti3n5NcFUJT7UB7xbmzhx1Hi6ZmK1CGKHTfhpKQVeRbyyT",
  "key12": "5KZhzp3faBHaWAvdzJML7aq5EbM7xPUM5UC9woPzmqUdunY6jfpMTQprTdutrS6Nt2aUm69zuDUf8zRV5SECsvGp",
  "key13": "GtjwUQoMEUFrvoxvfmzyACkXJjaTvu9KRSMasa8q3cH5NJWncxdhXC3A724KnccebRVWHeHX65dkQzC6WFND91j",
  "key14": "5j2YC5HxDKCNA72NQkN7xVoYuUD7LWzia55hnbAX8mcLeXNtFpmjiCUBU9nZzeKXeL9Su8qfCuwLDjzMw6VR7RjV",
  "key15": "4LmHDWHxkXXkQAUNpNcYwuPEFd1kJ4kYe5Btsd6KxCPMPLXz7HC48sK4URK8WydmDAPRfn7eqy5mxjuRpPJtgBGT",
  "key16": "5oA5dK6xzSsargqFJXbZZw74XPdYYtRTjbgMofbGz1wFtJ3YuwUyHaKjkkAT3DCBHPvEgixiErZH7sEVxFbgP7to",
  "key17": "5Es3atgAnaPuATG2x7ivVfCLLSHtShJb8R5qvogkrZoGumYJFYjRivQXhYqiiqC84zM6i2tH5u6uQxWj6YCiMmRw",
  "key18": "5pUm3uQyhnrhjxXqwm6BzCd7jqSvWv83rhrtZiWpyuG2xJFU61WYGeAaahtARtx33bubcBGGsqyareNEJWViAbkD",
  "key19": "qvhQ2vhHdAyLi7iWx8f7EiAFZ4t949179Dfgfov87fhjWQHV2vz1yVNrQW5TMwecvn6yugaRDcgnVQBguhKKcNg",
  "key20": "22eQA7HhWqBAzrQfBbU7krYe2vhKBYWkwXdFPkcQZ1vtLTFtihgxKUinDKSdnn13EuE8wWVuvtaoN87AHsRAKT1s",
  "key21": "3EvajW1GwU6iokceQX6q7JyA7WQo43Lyb42AQ7qGLAbS9dvivJSfsPzdA99Vf5zENBHkWxsYHN6tc44DpZBqpeQi",
  "key22": "56jXuquDCzB69Bd4T698yrjftWb3NEmHg3De8dUPKaKM16yX7kCpwbE7VVKEb7HzVBbyrTM5x8ruCt4EiM9HsCKA",
  "key23": "3KDJNeR2aQkDWPtRGX5jY6RTAAqjZpu3bfaik8G6K47qf19NhwHuPWmqQFBD8pA8bBnSeJ9AVA51KJqGN3pKrGJH",
  "key24": "4rp5WnCizkvRNzpACPFMbG7aDbzhHLdZRfpfBNcnXh7QhZPKYy8RHG4MfU5MqMxowxo5CBvq2q34W6UU2JHd6CW",
  "key25": "4QdMffDg6t6unvj1KiUdzVoUrfNTHWfwWdB7byF3VhtgCNWLQJk5MBSAd25dJibF7AG7P9FUgRPycKw3Pw42EBBF",
  "key26": "5v6SHhKLvX4QyCYzexuaJZsMoqE5M5vPhjwPP6qp3tWNCXxPQp8mj96yZoYaqxxmYHuQQQNG6ncESszvpL9hVLDL",
  "key27": "2HuGCg3sqyyX9CCdoLRmHUqkPPLDTxyJmFVfoDQFAQHi9zL2gBidooVk6JEsqbWLtNiUWp9hBWqagc8L2FkUpLrf",
  "key28": "4kZ55Kj8jRkidE64zRhVj5cpurkqJRAMvNHh9Ngg31we58XxBRhm1kwnu9vBhvf62mFJm3siN2sVPFo8zgLvLeqt",
  "key29": "USmuCq2SiMELjWbhVWUgCvF1dvzpUbziWC9kV2AByjtJESd1ncpywYQEXgQoGgmZvTrUvyrcuhMZPvhEj4BtrKe",
  "key30": "rPq9gMds1BfdX7n8Ct1tSovm77L1heicTRixL8KBPfsBJfaCc4c7NtFvpymKV8nRm3Fycv1gDmR5MVMp7tc5Ydp",
  "key31": "4VCmM4LMW1kTewfgfxKa1mKYjAW3u3K5VcwWvenwYTUWwPmJwPRQjYpF51UWKBvU6MAcmdF3d6HMaaMBbjbfL4W8",
  "key32": "3iN8Yj9U16b2RQG6pfChWw6pC1hwkXZau56op2VeV2Ezx5wVYEpTfJ3RLYffKJJA8vwhttBGZvCD2aHi6muwZWox",
  "key33": "cutxYzf5CnKikcEgZoUjhdrgu6Ci5Hyv5ukneSZsciWMwQrq9i8FFVSVa1VtwmbveS9KRwQW3Usfi5VrVj6X7Vn",
  "key34": "5KPnMUxuYxRFYW49dSxi3z1eyx6kcGuGmj6dvu9NqD8wSP2LV3TtN6H9FwgaGv28bUroHcWpjXRyYS1UFgNW92Kr",
  "key35": "2cJkmGGNNJNjmPVZiu1mirjweoFdu1nFVg7es4YaddrVJRnkG4afBe8p79tiHPVLaL4WZvBcQEc6Eg3pxWUiwRQW",
  "key36": "8WWeEgFC8xMuNEJk8i1dLbRZvwYFekngynVZHPMyZmgC4dug7GUYjnyEAgRfuNi8fAyiYTFyQvXxCARqTTWGdvY",
  "key37": "5L63732dSTu2WiyWGznTAZbHeFUU7yqkgmijdGm2Nst6s3MaviRSGc1Mm3QccieAMZwQvnjDBGacPQai12oaFwxa",
  "key38": "4w1vD3y6KvciMh2UND9vvKwMdKnmUHTwBfidM8mLoUtnLWNqeLUDuj2i6oseLtKcnpSSHp1pmGFVnMLivLMb7pdH",
  "key39": "4sG9XGFsydypjWcCtiaj8YYSAzDLsQJCbtj2X5PCqmaiCQBNir1sHqT42PTkej4UJJ5oYwE94CU2tDsvdi3oH5ou",
  "key40": "5wjpbWjpUrSWRBJxjt8yRXMboW9qksjhEgeZUMK9hUmkPgoXEszAoFtFDXipdkVepHEPnMbuXSLXTWMi7etZGTKg"
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
