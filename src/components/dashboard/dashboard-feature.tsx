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
    "ypMTRuymkWNoyVAixshPg5aN5EQpjsBRJm7kpQiU4gbR6Sun9Sgejkxr3KYFhMbTYMBSvTQxZS74dusYT9xf1iK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5saCb17srxaVE2Awf7tQMZ2kkVHrVS51u22T3PiJ2Y8BxyCojdx2KbTftS2dWYgV2i7ARd6YbDQyPxufNA8McDVz",
  "key1": "5BroTA6vHnmRbVZXq3HDdaXkXYSbkmjmCgWa6z383yN2sQ5M58rNJQy5p1zMfYEmALmEdq6q6rn6Hm6NH12qBjbn",
  "key2": "3LG5a1rq5MjmdHRY3wAm17vtqNMyxrWZLecQ1Lwgq74uxQWGSPjqz6AnZdFKjg9yFVupKRitdT2C2F2kS6kzFZJN",
  "key3": "4HN4oXcHw5XMeowYSmEk77WK3KkNgKia4BptYKCXtuYp1kjsBGHL3JEUcmJSxWvBzyvF8k5B4sX14CgoKW3gYZ6C",
  "key4": "5BZqnaNanDsgmSiUh6BLYVsPttBLz7qBJeaAsFYxAi553kQVrwSjA1s7Y4n18SdhzkpdAFnZz7B2ABeYdUpBh6kq",
  "key5": "2J7qvTY2FsdPpsamJGMsHYpt7ZPuSzCqLUsBkbXWKTbE2LwfBgAufvuZse8Gd6YCw5Rse2o3qqJQM6obewYZKJkM",
  "key6": "LjLS2FxsHGcAq5yoUGgh4isePJfygfmrzTxyTK3gWQ5Py7ecN2axAkb7kkGfcg2vmRHyA196qyrRnM8WiojzDjS",
  "key7": "2jHm9MPvSRHWx2Z8oPvcYAEd4NZ8s9AzhuD6wTNgrXwSNMFCB1G7A7RiqffN2e9bGMoQKZ7ri6hXqZBJd1NwiDip",
  "key8": "5wMmVbWcyZZoQ9izVbtnDVY4zFTkU2SSmfd5iwfbYjeGRid8TKjrycqiqyWhH7ToUu7PX2Guswayq68HeG2yhERx",
  "key9": "5ojc6PDNc35WLUcoJdRMYkPTX64SFtTx4n97BdzKTjTcyZSxcM3cdB4nJcywWRWA9gNSWq4pnyFeyNZBprecfTaL",
  "key10": "2VLJ6oSvc7JnPRocwHGNCEVdtAGJvTwboSuV5Jy7S4r4nZPbxejFVjpx4eDTkWL4hS3qfxJVqueKTakQEn9sZ6rv",
  "key11": "2jsNDyCGoMZH27oSWMQTfzNRr9jvFBzYXjsY1YEW6QSEGgK8idmHAJBJshv5prxa2SUwpa7g37253wR9bomwrNE7",
  "key12": "8YiHoaRWF57X9n9F5UJHXQkudB2svgNsxdi4RDU4UEdxHniv1jQzDcyABNpeVd92NtJfR6UnLwVgZYDkroZzF7p",
  "key13": "5qpEGZ5uF8pR3vWe9wHSiQzyvWDB5YoovDM6G9qyiBgATStC5p7rmfJxdYH8n8vYEvKyQduys3UhFEZxzFM47qAQ",
  "key14": "3T6LfG9arNuZpTceaPCfGakWtRYdF52RX15aAxmFxxvSafTwQgspJK5SrVr4cb3r8yTPf5RNBtzfoSPhwmMneVSs",
  "key15": "DEbJ21VQBTFAsi3UsuMR9P4HupTFrqGwZzzXN4RBUkBqomUWnMgCzkYwLVmtUtUbX6WN9EhiZ26e1Bdpk1TLE9s",
  "key16": "X5ErXrcN7EpLQnqDB4edF9hnBbtYHVkaS2Gg4HwMKNgX8mj5W6Uujin5C2FjDazFkodSEtzdbMRdS639xktcXao",
  "key17": "6y1U1VD4GNJ3t8iSPVEq8ufGL5idUkXVQqMB5Cp3WefMHQL2HBMUZMawMkHAdiuU3b6wMHeh65vy5JYLBR3RqQz",
  "key18": "3MtTqZ9A69q8WH4YiTjQv4tfRY5quvGqs5F7LirHPeuSA7AnysvGWczkaSGnhLkioQJgSyMjHk1zjY52b7iaM31D",
  "key19": "46sHh5JYqSecrfYU23RsLDQr9YmE1wP8XgJKGxRofohF3B4bN7rfRUcUwqBSZjk1atnEYVhbTfN4WirLyGHqVDuz",
  "key20": "3WVNfz8UybtMiWLgFXrhF1z1m2mnW3vo9wykCGiaQEagpdkZ48jGABNve2cWVx33EEUrs8EaRXK5ZX7zLnQmfyhv",
  "key21": "4RLgqDXTvxRsemqkzfMJtP5ggjUXPtgZt1m5wQcZyYCPaV6aYLe9smmqthPCgvWFo6atEfn6CUzC2Kv3Nr5UCUz9",
  "key22": "3LDmKpp1MZjaobPkYWoC6VpcMPwNA4vPXeiwAsDC2AkUBs9uspbzvGKDAteiaGMu1U7g1bpKCct4SMGbaNtbNFYY",
  "key23": "xXUaL6UZcKZwWK2QoB1Wk7duSaFtN56Nx8K8z5bBJbGQEqEc66k1uWUw9AbCfobMVTRuvtfKH1V2xVPYp3aWgdc",
  "key24": "2cS8cfpEAK93KafKDt9vkbm9rjYB725TArsZJ4mK1d7Uiezx89yu2PXwHcu1ij1ZZ6r19xV5Q35wkBWbr9bHomaJ",
  "key25": "5zXsUKFajPUBp1Hr1ZFEy4A3JnsU1LMkjb32EGQh5XmorE1Wk8kDsSx1C7VMRyZihyatfvMWGPr8p34DVYNH8p1V",
  "key26": "4dDYBCwyVfuUU3MQu8s2YRfiSuXnJ6mqCm9NCR3yxvUBsg7ti25kcVxfTgAYcpowLaNqpXcKAdhMLZ46t45CvGyY",
  "key27": "563MFortXEZh9pPaEavGAevDBUjN93tnipToiAzycTqoj7cnPJmJJdZwyMdNPLTgEXLv54LVcksJh2bhsoq4aPA9",
  "key28": "4qRSjJN2GumrVBhb999YGovnNAbvNRyxEkVatKCAYen2FuHAtLw95C52bpWrizbF6RyJb5wULmcyEgRmbERaKYrF",
  "key29": "5vxdUr3ETa4oAhsDhnJB9p2PHeYYpbjBSmqKEbAFEBSd2CzWj4HuSmmaxT2VHKRmiVcu4Zz8MTVAh2N5U1QJrmEv",
  "key30": "5AwRHQDAir2hd3cQGLN4xvqU2X9ekS9pzumRk3vv3TVfQsXjjbc6w1ikdJKAWUU7TYk6u9VEnH94erNWjEVBRkVi",
  "key31": "5U9deNHeSo47YSpU4SEH5sjY1E3E1AFgiSU6SGhTvLYceTRPsADfitsnDvBYKwENMMMDvwWVEYmJSRzjG9veTa1a",
  "key32": "5ek2v9cSV7YDUFmcy9U9UF3aXkTXnkd2reGZp3gybLxGUmuEMBUrrDUSKzqa8eqEegJFS8xSkXkuobSv3dU6SgKJ",
  "key33": "37qcysTgCjyv3HT6YzfyzJS6YvNUeMWVr36QZFZBwbUbw69L8rULxVprLnwN9ikwPtvFGUEnkice1WeedDmQYK9v",
  "key34": "4yp5YXoE7yyN2eTtGrYc5yjQ2Y7RTT7mfjqvNNtXgtUvoiYMMqhvnQWsquiMJh6j9HL82WhrHCfMTzJvCRTqxZ3Z",
  "key35": "3EKskmB6BZMZd5qCgC6G6ECXra2NwHEuHXcPnMCnAZ7CmSZMBmEf6bdvfGx1Nk1pfwpUArNJzFBiv9EbkmYkGGRw",
  "key36": "66atpreyJgS5aQtNte6dx8N7qhL2TngZR2wLT4haATKs9okdCBjK4EsnJuEj1m8jqSWE79vqQGR6MpAVda3w4mym",
  "key37": "BJJJsrLPk5gXz6CeFH3x9tAiQwkdcawLkvM7ftZiTPG7PjHb75oSmM18RDxKD2HmQBNhsnsjh46D4YVXtKTh6nx",
  "key38": "45N6koEHTCbMdxd8xm3QsnfVUKd3EzAZstND1XM37yiRCDhvMsdDwt6h6ouGgT4n54iUddMQmKKWpiNpG3oXAR3Z"
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
