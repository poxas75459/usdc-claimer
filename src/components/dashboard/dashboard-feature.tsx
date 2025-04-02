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
    "52P54NsmarQXtWLKXzLNmM2o5xiKUEZzoSEwjwAjzRECNShAsQb59dtJ29kJbFJz7pjyxMmj3YFo85bgzW1Hi7hi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cnvTK8y5WMgdCHb3hAYdNgomCVC8WTQSTVaYmqqqHbDTmSwLeUzxyxpoi8w5NgT1krVcCjPiuxtNNiZzjeyUKGB",
  "key1": "5z6Bw88BLJUirM8PzkoMDseQpemnFKe6XXVW2k5SYfm5AtTZbMYZg5WsNCh8g1p5DBSafpHESLfx8nCZydaMcya2",
  "key2": "3VEj28yfjTMgET4WSnGeBv4jkGuzvNY4sGiXtxhDJo4uCfyFzCdJM2XWzQje4Eff65hUgwkkNcJCFpLbEe5PUQyL",
  "key3": "23ynPsJ9i6UA5JmmGgM3174pj5ijttePhxSAbbP47w2GjSFg8Mhv9WRYxQYyVjRrwxjVHVFedqhH8Bxn47sTJ6Ra",
  "key4": "4n5Z7egLUDBQft1hmcQ3rmLbGFiy6azEHu8sR17rGtaXg7Jp6qHMpUKuh5npu38vEqpXg8ViZ8D2WqpT3uFowkzA",
  "key5": "2srz1BU7MGHcjQVjnthhWHn4ewz7eRg2AwfwzC97Z8uZd6hvSxw8S6pf22YdaiapyGNoR19pYY3R7UQw4f8gcD12",
  "key6": "2Me1Gu1mHgAAYsUfpCSBfmtrh46AzFT6rG32K7DRiSshsZKVQaRT9PDfmxa9JfNCpbuZxQePhw2aUiW3HLVFeSWJ",
  "key7": "2opnhpvsBAfiQjiyVKe4sTyUxRefyQdi87bcLBxgUXBWNkb3bxygipqZuLdZJP8jJAyRPhyZnA74CA9Gfg8ryXnm",
  "key8": "2fEBX4ZyzGAFR2VCzQBKT9VhNHvJRkwuapDpd1D6QxCe3FSvyJ8SNoGHm8vFxAoVw5JhtXsL81bUYNhLGjWVAqMC",
  "key9": "fEN2fCWsBePBju6ri2DbfK3xfScw6Tmu4eTfGDCn2vR4rZ81bZi49anArpNu7p5ih3b3jrtqBLacgLjR62XVx5L",
  "key10": "2Rkkt4mxtvkAASQEAPmSbxk4GE1vW2aeSbAZXvSCYEmY2pxYaK6v7MoEGcUBaWf2vjdacfCTSddXPSZegJDzCfPF",
  "key11": "4H2uSRyPzvZaNZRdM4KQvUjPWMv2D6JQrCRKQrYmVYdBFHZP5QYYuENkQBuQYbe3jiEwKqUaNNHHMTUee8YFuefj",
  "key12": "B747jN33TwdGxQmvnwzisLrHfrJqsRycf7uedpotT3xACbMFAQzJQxgFbFQ26V9SSjrG4YM31gtDbKLSeM7HCPr",
  "key13": "2zrFRshkkyxCj7N1dejChmnXsAhLrBwYzFsvj5fXDayVXYLPpya34fRsswoFZjZWEgPwE25He7VvLoNbPFte2gDU",
  "key14": "2dtzRRAkYRtTmpLVYcJLxm8zPjDFRCCqyYN1XwkjkfeMLsbZJsWxUtUJ2g9ihrciXDs9panz6HNGMFcrT3wFuZiX",
  "key15": "2qx2o17VCAsXTXMH7nenPypxFB63sRj11UBAcCE5BPrcVjWqGuynzW427EDpiHe6b7n5bbYe4kEDeL99MBcccfch",
  "key16": "VeuWPhvoSUy5ihPJtTcUQ9e1jB6WHaVEYbJWF58i6LXnhs3hFG4hBaUD7GVVGMiKr6axGAQctZXixrDfpJYAQFW",
  "key17": "5xWpbEPJVfYdwJrQ5DVQ4d6FdwRVwjXRr1igwXqM6rtockrXav8ok3wt85qmyuCVGpjR5T6wku7TsRXek47wSyLH",
  "key18": "5Hy76rS8eCeiXQgXBGk2QgCoAmGWuFVMCdirpM6kken8t3sByqLJmzejxpHKHkEy1HdsMvPTF33TEvZgsMtJE7FQ",
  "key19": "51VtAPY558pFsVAB9AEoB8b7oXaR4Xdb1gmVxdWXX8vsL4ejhwR6XZLtjgRbT3y9Kn9NQTTgULzQwLTHcXhP2K4y",
  "key20": "5jyEUrxza49QH11zFoT2zfGHpdBVDtFaRKKucuFpudz72PDbpdcvzK5dUofhZ6r5DbLXNC9NE3V5cQUBRDmAYp29",
  "key21": "ab1FUfZDcUzqisRXPpueLnW6sHi2EnBcdVUFgrywXeTJfh76xoD9sjLUqoWNk8n9bYgZNc5bSTMy448wxcjGUZ2",
  "key22": "3eiWRboL1G6XGUH4rhY7UNuSqrctNqdZ49BZCUCd2Hmvj4DtemSNqwdYYBFsc5K2i58MjJgV7PRa2Bw7LYTZYKUW",
  "key23": "4xKYtDKe8fzfAMRuCVbX27DPgVCy3ZVUFXHja79T1aTwAfazfioDCnDiDoFScadJonBPETCrF1c4iKrcG4cJyBCu",
  "key24": "35T9YdZE5VDJ6y7NY2GVtfcX8HWr24o5AuaPmq7PNqg5KoQnGHHcHdqszFk7FTkEDZjrhxMKYmnVZZ8ekt5k3wxd",
  "key25": "Lsp3tAbdmC6ceiiZZtE9B6MPnVHXiiGFqUgkBqVoAEAxgrvKjaxGb1C8ozrLvPxK2ZjR7oji8NEJi9PeQTH49Zu",
  "key26": "Li5TuzchNFBwAdTPyNYMfqb6yjf28NaXQmxvRhpPAEq5iV1C9gfB2oZoJ3LP1UB5xzcWctziY8j5SR4tvDKJArW",
  "key27": "3HeSERHyKKgf5iHHskrqt1uNjXW1BU2UHRXq8FAWd1i5tnSoMGHRjCkDV6j1ZLg3vKXAuiUvRKmWXskc4bwaQda1",
  "key28": "2aQL3qP3pum9WhDNfxAvkce88DriQpxyVDE8vwHVd5WZduKGTRQiPGGTMSZTXGBhaHDnrjfPihehGwTsurnJ48yz",
  "key29": "emCYToYVRSnuuPPQTBtKwnHy75TtZEd2NxKWG7fnvoiqHBgWjtyLPubwrFw8oJYnwzcDhvFU9bqGe6Z2SURMWGj",
  "key30": "4hyMEYHdkz2YaojvhHv5dnw2RZJebLs6QpU8RzWyXJtMzG1iQk75ZMKS4esfLa3i48YevF49hH9nVHbZRVCejCDE",
  "key31": "zU2eShSveuZpw614cPd3EEGg8saCG3AhezbnWTgomvfhoChWwDPoLbPe38trzeAb3iFBWrEHDyAYhzfUDLNeztc",
  "key32": "38i7Ek5b3qqj6TNsKLXWkcQTiyZBkJSbEyxnRdmKyMsDuNi5wpcevJ2isQy3SJGpBdLyvwnrsmcgojgscrBHhjP7",
  "key33": "KjeDbCuR8go2yJ2tkvFxnp2Eoc4o4F2eJiEkuDVLedorb3FEGKuApQeDnhXFkK8JFtBNMB8dNqEvYsnGEE67EJW",
  "key34": "9FvwotGAQN3MzEuJdazgKXGBY7t1B9FeVqKJEk8PwTNWesMzvBzHKqDEy87hPXYyJEGX7jjhswJ8f9GhnSnYfvS",
  "key35": "3v6aQkgxxmekDTyzBR9poxo3PFbDxwx7PyY9vDrKTPzfzX1KkMPYx7u1AzPYwUWaHfoCF4cC5vgMVA2rtLHPTdBs",
  "key36": "4TUnTWsjvYCibgjPs5UqktRcKBMVQc87AGRQAwHsMuUvfRfNrTmkD828MfksGo385H2mwnqh1keCyEmAcoLDGbj9",
  "key37": "2XVbbb5KVhfAkZVPbNkgJNoj2UvaxhKhYMzHFy1c5ypa1WKXKb2zngWcdCzJvich8EqTo1UoLRc3YUHjYwtwdPXq",
  "key38": "1LxHfFazU1VpQ6tqrZuVdnqx7VsriWvTQsSeR66LMfNXVVpnVPUM6dw9k1wFbdtTXxhigF2Z1E1t4ET8PzciVpU",
  "key39": "2ujaiQxu2i5A1U9MzPCXmc4b75FFKyjgjaqAtyAHsh8fEQaXsNUcW7pbeLbyUDcACGaN8E8ZTx3zq1pThr7naQnX",
  "key40": "HaQvukG5K8E3jHWQgGMPfZTLjTmyM2yQ63z9WMCfjMCsVz4c2pP5kH4ehFWh4ZxYkjQTGu7vrooXAkMKHHorhnT",
  "key41": "qog52LRtbBXTYpygpyWjYPcgnhBmHgecWYqPRCm49c1XJouCoJ3yFt3RYwfCyCd36MkQmSEYTyqa1sjvy7pqbz1",
  "key42": "5T6sRtswmJPr1BTmrC7ayuQUWvTdKeTPHzumxSuDJfBR8e4pbDMwtiqKt8RhNte1Kawv6ZApihPmXfFyv218dwLN"
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
