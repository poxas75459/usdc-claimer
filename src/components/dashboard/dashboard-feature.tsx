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
    "54UaoUUgTbfctLfbE6un9UXYTuw4HYZP26Q2SVawMCjkjzQqudhSjZpxjSSg8gsmjqAiyoSmo8Z7bGR7PHomzAuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zTrSAeSPEZms1a7QxQ1yiTsKM9dEEEvmxu5oDf2hBY1Aobm8uKU1MgqCMg3w3aH5aV8YstDmD5mcCqQpLQ9Emqk",
  "key1": "2BrPMBstACuv6RPatrAGFSgme9Ls15BLeGhLqdKWbh5w94hS61TmcYuU9EysNbpKV23K3x6rAtTgn6DuHsZ6kAdk",
  "key2": "dZZsyEgkDiYC2dMz3fEVqKaSgY1gYGKmUkE3cTdUQsk45Cu6Nac3t9HoQKGRW6sGCbNoPGbvYh2XwZynR3GULgQ",
  "key3": "4tT86EwM42NCR6MfueuxTTZi5f2qvQ4ik2YngFBg42n9WdKgQd1pUrstD2vLVbTTgcWUbyR6TdzEH9Ww38VPgH4C",
  "key4": "49tyDkUkiQYk8gz4NyG67xSHzmrgeveyvcXB5uA7W86dPzzmy43VSEThWcUD6F8utxayMxLnS1ymAqG7xo9PASzq",
  "key5": "2S4MbwRExVJVykUjNpRT581T5LAf1MGuZhu84PY1jFqbzvZDoZamP1uKypoHQFKwE6ztWoEWvQWVGmhUVwLjg7fm",
  "key6": "2QDBCfD9w748Rwha5hoHMVwSYnHDAVkxiuoYTgw5cFjGxyGtJBcjQ7vKm9ZQDunPPcWHoGpFCh26awdg6Jp3BSMY",
  "key7": "2PMAFaPVqVGNmHiLzPQHjickgaUMHxRPJkywV5DH1xT4hKXvQTJwkqfNPNCQjZzDhHQ3JahXia3FrBxwDb27KtbN",
  "key8": "2rTTeRRHS7Gge8cYuqWYVbBigVvsgnumrghHwfRvRygR1cpX3HYY1daFtzzqo9AU8C5VtpfmKFyvVnoHE3LxygEm",
  "key9": "fam9wTzpUjBsjBbGt6ho6iUXBngSecKu1UfMaXFupdHPXhWasQLwEAFfPnAvPKcuijqFd8fXicvEsRsNwSeuDwe",
  "key10": "5uZc9BtoTLXRWf8GagjvH56MqSzestCR5r9Urc8YFFGEPdtU63MevufUL9p8xDCd15QuZwt3P6fYPJZz5k4n2BYy",
  "key11": "p7DgR5yuxrLBa9VucpkLhSWCHtCtVGKS7zDsMoby4nfzqfvbF2hcdtbQf1c6wccyDcLKLAK91ebahmuUeUvSxZH",
  "key12": "2MpwKQmypH15Kr9P8QByaH9CmaDXu96tBeGGe2hTDQ9C9mq8gaMW78YYSyFRcvCg26j8uxDJFSJxswNLhvJQvmkW",
  "key13": "2Z2CBbVhZkUZxMRasP6eZ1kXqhEBHJ7SMCgJ5PdHj4bf4Y7zpq12P681U6nyvMuQ8CfGL4Ya3CQwLWwdCZBTujTo",
  "key14": "54TmwjfhgCCwViRtnTkUimyEzNUwpnhyn1cjtioYSHJKgLZnry6hFMrbrVo7hqyqZ3yGSGowk62fU9sVvPXeGMeh",
  "key15": "4PMxNpVjjh6dJndfuTQfX8Mf3xkmg3Kb9Y1k6kYfrzD4aFceg3ACo2RgpgVFBGPh5SLdHtcrUcB6kqxFPWCMACny",
  "key16": "4FxnmTh2Fin9i5VprgUeiUNAVcpGdF9SZ8bvBTiJX7NVLHqkwUQqybP23mDexmrGGT4oZysNBp6tE3nnc6yxVcxd",
  "key17": "3HfRpByaHNKqa9xthDwDy1h9sUa2kQmtZbzMmAmwYGdvhCm466Cs3XqVt1myswA7wHwpJPp8p5p4rn6AGDLFHqpC",
  "key18": "2nZiSrG852pRfP5dD5mXvP5BGFDAsYVwRBEycxu4yAiTjWo1mBJ2XxKDSwpUxDPR1dHA6foYDQYtg8G7Vtdmabi",
  "key19": "2VjmQWUVzWgY9beVrUsXwooyEJWtLuaPcTMFFkBoRLT4BW9x9TW2gPwVgXgUR1fQHrD7FgVYxRF3FgatX7Vatw8q",
  "key20": "3KBBmtGprnjMiwdtwTgXs2AfkF2Ea9kiWXyHWus7UfaPRrkFvtRbb575ZdsRDNPPKuwX8VLsiRbLEKnUEsL911ug",
  "key21": "2LpSgYbjtHYC8xMHzM3vdWmsyVG7gv3CA1xcq6yt8Lu1FYzxiQKEht3KoFYhesMcy7DzFs1YqCnRy867DDJpDkGY",
  "key22": "41xtQgGnKYTeehVWnhcc8cKnXvxfdRz1s3qt2egx4LQcB8gYKKF6NyRiEfBpgRUoE5yk9b4foGgph8yVGEZSxkog",
  "key23": "3NBrqQQkTU4xfVdse7nBg547SoL4zJsvhxV7KSZ35uJj2jzNhXmA4VfKgkVn77mQ9XjumCZhN3sVTr68RqxVt9X7",
  "key24": "7uPYrbP17VQinFx9B6u1dKcZGU6gjHrwjcxk4WRJkUH5YrBe8CLAm2GmtnFyHrLV8pbd2PNcaXnXN3bLnC38FZv",
  "key25": "QgYDcZPon48MdYYL2BLjZWKCHWEEg96HZqXoG4tH83u5KV2b3GYLDhY6RpZHs54zfTGpLqSrm7LrTGBirZ6gLBm",
  "key26": "3D3iHCWpZ4dhqkRfFqP6UdXMedZgEoeJa13SruvYZCrU5zDEGBbQXRa6cbarhhTqg2Cmm5TjwdcanB1tK5NvxDJJ",
  "key27": "WTvb46pcvZT1DHkgFFSw4Yeo2Qx7puwtxd7iTvwaSkXVwmdY5V6HQkkzPdetL1BRsntqE1zJHHDnYHLNEsR6g7B",
  "key28": "DGiFXCefks642nvgaPX2fwnSW9XNFKVwj756KVHr39B2ERZLQgn4UH1FNPwABobLJqdUFUCFYMo9e5cp6rL9t4Q",
  "key29": "2XACoG45a2whN45FWreU6gN9LesZJkb3a46EY2h2jK2p2YbvdUpxfTVZm4Uef2b9oGU8TNLjvZQjo56qpYEb74qK",
  "key30": "2NPQjXf4eaABKZ4xnLi8CfdTHJ8nU6gi1S1nzHp5WKkq3NNppVvLBd1w9A541XpRmwtVwz5bdLEf9CT4jvvMBKbr",
  "key31": "u3YXTRhKBRnPUQCt3t8Mfb5WudEe2X9WM5mgS9QD9LHgRHschiyqxi4DQkxqGKjTkCtfdAAzf97gUTBkySeoC6H",
  "key32": "44LNhjqcubu2bBBM5wSAgosPCoVVakEt4Tfa7HMTwBGVW7pqodEgt7q2nB6qbDV8KgDY6xGSKrUNdULHaFKn5pDT",
  "key33": "HtYwDFKoPU1dG3yWCswQexN7LhPivyAZ7UsYNeaFBiUeFYUFdrVKioA5zELZfvBX5ACdpL1wRzoqXHKVz8P75nr",
  "key34": "rS1nJzkQsQY1rh5SPiKjB9sePkoaRWGqZMdkXJn7Mdg57HyHZmnX6CXV7WSSrUV7SCzXLs3gG8wis2HGDH3oc6X",
  "key35": "2nqLDTuoYzfdGAS81ygW1yEGnft7vpswB637ELTrLiQHPVUgyF46RXqbrBEBWwvCAMBKj792uFYCAP21dkKDfaki",
  "key36": "dgtDGCDmEfGu7kWqxm2gjh826cZgU2desZ1cWWt2XgC9Sr7rVCcY2sa99mQCqCZFRrGJw6RZGfkPhE5RusbN8Lp",
  "key37": "5t8FHH5FsAa1dTdHzd2W95C5zxAj3iuVVEpJznfbbUdwDbSSBdHbrtYzjqFbfR1pVarPFA7NZ22hy7jzhu6SWxA",
  "key38": "5vFZzHuBW7wsU97HLM7AWU2agZS8pcnMkXsVvdo8vijbik8MdkKm5ovmnAj1nRCJNnANNjAmBf46ZU5bTCh8g4uV",
  "key39": "5vQ5QszWGeqHB6nKxBJwHdZe2qPkwsLEJzsnfM248WxbPJCqGp3YKybX9beBqaSfusob15RTJV4odj2oxYMGusGH",
  "key40": "24aCqaoG3ke5UPP9BMxhojXsZosiwLxd57c9xdbqZzNYj8cYjZ6NutSAb6dikJ6f4d6DoEM4z7oJBzrnqdcixeGW",
  "key41": "54Z2VwtxjDN5cmNiHkQZxpBP6kFY726SuNiH2aw71tNcsyPSeQcmbc5GXFXdWzs6jbVt7jBTbBaQP3EVpcRihvcL",
  "key42": "3wfzdkJ7m3PQbbpeiRMbYeFBg16g9ZxXJa4nzyS7KcTbKRCgkSgqMn8Yoo85fAk4MrEBVKnCeswPUMCqkiuvgZ2r",
  "key43": "4ysTM6pjgF9bsLzzie3dU65nHXFhc6XeEBdqukPQUVM4kr3pa6yQu7RM61YAX5nATWuht8Q8qtkHez2qukNqdif8"
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
