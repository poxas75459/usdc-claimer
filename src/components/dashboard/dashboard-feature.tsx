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
    "4esiKc1Tjr3AoeWVjUKcZ7uaxLiHa6ecjBsQtyXX1oG4QqDJPgSAUV3iHhzPfS4zac3LmeMcQR776ezsQ4z7hoH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FmUrnnW4bb5K8djDGUmkaSL8rJ9Ee37sjnKPkxBtUoAx5qv6LExZtfZUgBr1yRjNwhatXEjr9wEfC2eg44EDqmm",
  "key1": "5bVZ9ayhdpnkL4wA9KiPCJHzDP4yk7HiZVnv6tnLqWzKn3wymXhfQm1zmvS5AcHwYX2cxen8Pogr2VMZNiaWpnLd",
  "key2": "dJ99VvP8qiFRhq31cMfqLtHDZj6S31kN2WRpfKcv8g33Q2Fxm7Qv6b8EFrGapPp7pNUVNNYNa4HVGbdXfrKL5i2",
  "key3": "4dNqYXGWRfLWacdHefbWXJzZS4VrtoTkZaH957aRYV1f4pawkigQHastAMuavPe6DYbQHVsYUZC7wk9aU2t6ao4z",
  "key4": "FPC7ThF91naqvCE3EYUhdonTCZffQJ7RV8DMxvW7C9NwkJ1bAgGPLXeAqX65VyrEb9Js93NNAAH3jwTwRePgsq4",
  "key5": "JyrVKnbiZ1nGjSjP5N448r39mebGhw3czCYWx1Zovk6XHkxmscxEUjhCBzfLwJUWXSVKFn4G2b1ehozoukKiE56",
  "key6": "21gebVJtdpGDyhzywPz3tEHdLmrM7piXo4G3fiPCJeVaWbn55e6Xerhf3Whi19H5LdSuumpVBA5GCdNhsPZFvoLw",
  "key7": "5vHx71Z1yd5XMpLpFFp32VPsThmSUbYxwLNV5Rof8FqoaXNy4wktg2oJ2yCC5wtbTK5vAeNewzUFpCAFWm7TvzGQ",
  "key8": "3bjUt9P9QxZMBywRFX5eAYVsMqoavbKPQGDKEXNeb5qHJHTnZY8bYt13iNgmr2fNUkro3qgoCnzK12WAvLd35QWE",
  "key9": "4SVha7UEnVZc2NeWaT1Hb7SZJR4cZVPZpYpu2w3wZV8VGryikHcKZ9jiSTeNpJg4Df3dwowjN5KTE7cBX3TYP2Ws",
  "key10": "5Z5CsSHxVVwM5WipuiUZ91QrCcDT3SQbxNW9bwWSAFcXnc9JR3FjfFxUaP3TdWEGVvHSxJue89ppxErrbhiL8Pp2",
  "key11": "38FDhVfuxJd8H7SUmHKaaciCCB2bpmJpXiZUvQ3wHxaNruQrmRLbseVQ9SzhEXAww9Cx5LhfBBvqmpcAdn7gbvhv",
  "key12": "2hoCy2opWW9rENWHJ3gHM8fcTBpmCnACsH75KmEnaDTNPWQCVvb1SqATHwbUwPnGLfLKNvggpGg6pexqqjtBVS5J",
  "key13": "5rNbmqtxiy4PwpjSABfAJfuThTUJGtuBi2CeECgqNPz6nwnKbZKTeifYfhDYKc8wx7D8hMqBbQEWbwAJDY8o7XKy",
  "key14": "wJe7Naw2RDUdYLhHTCL5QmUVXaRK4EnV6En5t2KNPofc59bMQmjMLwT27gbBLY6KMsU1nnMVZyvNuWCdkE9UCPD",
  "key15": "4uPwPeTEV2bwhAWR7antx5DPML3wZsYJhGYHx5NRbLx8B8fXGHywKciBFx84cjhbe1MoczQotwfwv8g8ZXq8S99G",
  "key16": "3Ku5i4vHwRM3n4vE7ay5iV6PRH7W4mYkEpPwzSerMQHY7P6rNRDsW1V7k1sqf9qqsRqSoYg1Sram3V2D7a8P59XJ",
  "key17": "5R5zGGVyZa76nmYRedMSMxJ2rzkymSN9p723qFnEFSKVXkEHKCZMeXMR8x3UasjiB1Do4Qq31aD8fTvCgH7zBXpt",
  "key18": "2QK1EwHyNx7PEYYxTa8iovWXNTVfT8Y9GdpAzcUiwWP1NGf6aSzARMogv28Kx6DLDiR6zbXTZ9ZuxArFBTPonrPZ",
  "key19": "3kscx248FDRomaiafChPRHAQ4ALZs3ozkbbYzb4y4nwsLr2gmYJtMdyYEU81tvgkwJCwZp9kemQbB3NXNiAb5BsT",
  "key20": "5yQDLon66pLMRRedCJKJytf7AYWNYRZk8TewSVDD9pzvNQdjLEfCZtoTeChARx4wwv6jBrR4sgFKvjqRB1ibPv3Y",
  "key21": "5aFxKkW4nmCh3n26Jwp4YaQ1TmZ2eaaTi3wzepSQEVwhTxocRaa6qR3cLo9YBK2daSZNjQVGyAJhsEQ65sk6tGfU",
  "key22": "3KdSTYSWKs7e6b9YS2ADuxqHdwRmZZcmph8X9iPVaFQ8xxVKET37iNTu2btsS1t6ZszjGTSC8kPAuy19fw59qnkZ",
  "key23": "4fW3tGY8Ff5YtjyfeqadmewEVKWNjpNWhw8pYSfrDAmQ1a9g2Cw7jnDtvULrG8aF6UAyBXZjF7fW9gLbnsh7qPdw",
  "key24": "5jbzftCX59C4GTmNyVhufMSo7mjeV4FgzKsjw29Wm4XFuqY1X1E5eYYkTeE2dQWbUBjuJZRWYS9Mj4xgQSKYnyV2",
  "key25": "4P1uAjfdAECCUc6Uo9zNWqKsL3JjX7qfGQCWSzvBhaws256jXVbBd6rpFGdZK9ihinpogotV7Lf9aGfSZw2RyUPp",
  "key26": "TSgFhPnQmmH4PFSPKvXxyy39AnsJxRgaitFBC7bcFXLYxUePmyiQcELoNwo9j3GoMSSWd79a7J4MtDtyXB5s2Gq",
  "key27": "MYv3KxNzA7LSNuKevbKctAGFBL6HDxMhQot8RNPjezu611HLcZ25Lcvwvozdt58EqC3MEv8CfKTSYGgho1CgTGh",
  "key28": "4L2XQ83MMgxXf2kibt7xNmEtXfTRRBvfNtL9VQhuWxZGhkyM2qVF98w66MCvhy96bJSYgY3gGWEtZGiFEpV2Hj9t",
  "key29": "5w5sgAfWcT6Vv7NMcgTgzSaSoAqV4TtM3WmhJm7YicDadeoEQskHjRczwiB3htgagXPgnZoNSd4GYdXJryCVXdM1",
  "key30": "4d3L7QcctH4GqgWM6TxKCcoKSVSpoM4JXgCN4EPHaZqxRa3hs5dbrXYdtv1rpBdF9EpEgsw8hTHV9vGf6c1j55Np",
  "key31": "3pA4m8npgbMFN3tgdMcfybkUkhvGW7KpsGAisjxiQ7cHmqLt6NkMNVpNu5814vJjrVdvreY2LgLwV472ViPLgx3F",
  "key32": "2kTcVzoHnVoAiZzfznC3M5C4aW9QwLXX1xbG2A5YJqG8rwrAhnoXrhwMNXiRhW1WQ7hTGoUusB7oi6ni5YFu4FRv",
  "key33": "64tCBafhJwsoL5qU3t8fomRtGZJ8ijjKG51jeHvTtLghBMYHjCE7uvoXeaYxvi5bV9uEUCMx4XXY4sgpLKzmSDTT",
  "key34": "3q5uU1CGpx2erc87a9YMewm1vqY3tiRWhFXRXuqsuhHNd8MGeCN9JiR6AN9RVcZ4THx2AVMJHw7nKzDLpoMaSYXH",
  "key35": "4i5M3KyXkx57PspXMHgSgjUbBWTtdtaGQKLeFXr6g95UPbRZbZCtRMUfaWyNUoJ42YbHqYtW3YsUpSgJ2jr1CCnt",
  "key36": "5bpXggKNNKbeQW9ZhmxGrrf4Q2NebkxUrH22rCBQPMrMLPTryni9Shb4Y2L8UbMmTzmZowXwFioamN8yPYWX5nt1",
  "key37": "5bim2psf7e6WimnH2T8yZNMSRCwaSt8ZengDtawAgmYaR3oMirsts6LjHv8FDy8wZSJQUHRpRDspqgNsoTtnSQSk"
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
