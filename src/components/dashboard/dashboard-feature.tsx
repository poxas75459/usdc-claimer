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
    "5rXhmAHSDb7NVkU3qPyhQG74w7Dmg7AmuUgmsH2jxYpX5SzXd3cZbzzCmhS62F3iV3tHH2xYHAaitBpHCZSGWmPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FsSZhJpVeHhyqXk5AaoL6yHDBkMtPRh9tvNP6LQVqLzUhsUAyFHdD6PtBzA9Tt5mJJWZKPPga5Szyr4i4RVQsk4",
  "key1": "2TR4nufYBfmnSFz4CmvTrPT6u6MXgHWGQeiAj39PeJgdL71qrYTrGAev3xNCaZC2Yfb3Ps1eBgX92Wrr3CjyizeL",
  "key2": "3sEJPgDjKrikZCrsR2bzAgsWR4RkFAcGUfnnQdthi5VMzaRhqnnwFZFoXoyNLgpzjL2AmMoaPLim7FXY8r44PGXP",
  "key3": "4JVBBQrGCy4miA5i3kvCNBxPF54q6wPfejSSytd9Mue2fuFikQ9TevZyCv2qXzj25s6Ho8NCmNsQguWX1uPyy7S4",
  "key4": "5kPDMEwEYjkEJqm58D9snxsDQ5dCQkzjTRdsc34NtggHLxn678HXwth4oL3u7kAXEQTsG5o3HZbajmGchVvU5qas",
  "key5": "2D3cC3pBuiJtBoKi3q9SPD9aFnq8jMR9Knhdp1WxcQFvfWCBzqXBbYYtwcEELpuu82GN4YsrUs3tv3a48Uspjvnj",
  "key6": "36pdaG2Tcb2RYYf9rSDXePjNhTUqqdN5k3TDqqtsJf2hjuESouY3dmbGNnpB37x3m4yY7eVHsVzWG5P2XJqDNA4d",
  "key7": "3TSiCjo4GK5iEhygZTngJETeUuXCtnHeGbxNSumgpSLy8amVvHbwQJgvyxmVg7trztPWHY8NY3GVAWXojXYPYPcc",
  "key8": "2DwwqNbba9qjBYWYdyrQrd9fZQvNGnCj86eTbemSqsipvjcF7onhJYWnHsTBotR77YQmkZ4wcNJEjL7PDoasguQp",
  "key9": "3JBULEhGXHhp7F27XevAYg52UqMeGD6Gt4LBHDcH4NEL6TBSy6LgFwnp9c1R8SCK2e1qdW5LQa3jMwpgDCFMA8Yz",
  "key10": "4zv59V7d72Jf9TBitM1ufiRqBskNMTxF9uWGVSPZhLeEaDBhB9Dn5FKQV6n4SSdT5w8KT5PRcAfjitMTVf2pU9ya",
  "key11": "3W1ZALAuKsUrYYDzHBc3Ut14wyNkHEgBt67muaL5eXPsJiqn4um88Uv82QhPkSkLSD4JJv2M79Qs6PsW9PnbUCbW",
  "key12": "2Tqz5zi7emdtRR3LY6Ray3Gn8uTmk3PemdtUKjMJjqhQYQaH5PZx7ZfG1VcZqR84PULUE13ATmWRX4M4972YaYF3",
  "key13": "5UY4dnxRkqkEVbFM9A8yijJ8bW2EDREbvpA4BvCFeQTYUo9rubBFdxZqUSzeD5ctyifFFBUXVkQciDPYgjZQq6yi",
  "key14": "3VPpVJYsqtva6jUo3XFdKAuS8AMTt2ny31UdczP7RZzk1LLQUXReWLNpEkfZpgMpKeGfy1pJSCsjo8oRXkLpPvdC",
  "key15": "ZLGFEFj7c4kQwCqF4Z8nG4JRjMyEV6yd38dmT7ZtzJUUk4F24dnycYA6dycqx2gDnsC3JypU7HkH9BXQLSVRewg",
  "key16": "2i4gnkuSmyXeWVjjPcTnpavZDA8N38gtGUxoPyB736zcm6ritjTGwSMxrQ1dWLq7Hi45npzpeK5uGk81P7CJchVA",
  "key17": "3ZBBBkdu35qcGD4w4xo1yASmqjJUQcweEY27N7Wpudj1FQQCPo22dDJim8Zd6bdQnPPxYnwJiN4m3DtNMNZtL3dV",
  "key18": "jFtXzX4ntjs5iNxN9iTpe3B49Afg8Zs6HKJH1L7xwCcPcPMPYJuK1GS3DwqT98ok9nLYr1zdwyzq3LmkyCy4qYv",
  "key19": "4oNwVR7YJaoCCKYiUezkgYZJrTozXUnxvxCyXXE5qyuueDJiZEbbioqPYdijUL1Eofv2JAAkdBfJZb9K5RZHy2ZN",
  "key20": "3sqRYX8HzkPbRZELLahCmdph14BjgbdzPjT65SRbtaFrQN4Brm2coEy3MV5d8677U5dM15vhqWdg9VQSZuRoWCiK",
  "key21": "aTvabcrEmF4gYkByDGHQ3ZtWmabKcCqEAG7mYme7SRAfp9gJgtbbWnMCnbsjNiPh8eGfDr54oB45mH4KCdUdTsJ",
  "key22": "2Ea2S9jUMwrssD8XpFHc7WGsZuHaCjirvgVEmNm9u97p1RcarpJotW3QFf6Nnm7v3MGCk5VCt43xzT6nVhUCppcF",
  "key23": "4Y985hBEDUdf4FSYUvYScu8zLDN6ZYT2Kg7ZYaRRzRBBXGjJyBpAfVBCHPbSBd16C14NGLdxVPXs4dUWZ7VDyJab",
  "key24": "5HBbvLePH2SZ4fS8Kd2ZtFZ4LJRyAMkBerWyxgMdPnoB6eRGUmXEiGTCWqaWCL5ibaotLf7Lh1TCmRwr2Ejk64fR",
  "key25": "2fTC3eR4oniT5RxL4RAobT7829k7rS7j8AXrxpFNvX6zZN1KU3yzMPZF71DU4Ng7gTfsmXkoj76EPsy5oxyujbsh",
  "key26": "y7DGnUNX5dMYitzDaR1g3vGDe52sB4EmG6VJ6uRgz5byUorkhTAhGPyea41eCYEzBzvPRwNh6CJ5wPkdVn32rhy",
  "key27": "ZQx5j22gwYLusUV3opofirFvDTJsZZrYPWU8xAehRUXiAeDgpkdifUwWfQ1QyQKy5DnB4rBvibGJ9dVRjw3Cm5S",
  "key28": "NuCUCUEK6nRCwbRumCJtoNHukDQU5PiaVsiynSft9bjH9AdzAEBnqDrDwJw4FRnWiGLZMqDPVoe2JahG9ohBZyk",
  "key29": "GLgxiz93KtfeEVmenkgP9zZURuBUjU5VNGsAEb4VTbZJuU2ehhdEFUL3HxKjNV88dpca3ic3ZaPqzf69K5JEimp",
  "key30": "22vRCM4xb8KPAQrU2b9NCCUgivGtgyhowyeyVg2BCtN5dPrwE5suP3ECWJgedGzX7xzykqptdPd524ywoNtqWDt8",
  "key31": "3QxCokbgL64bszKL8zhiECpUzmnfKimMyJMjS2x2ZNQSe1gX61UBAUCvXbLJWUVVmz3RgjQYGoHhvdc3Ab6buoyM",
  "key32": "WvztUqwXysjCMhWoP7iZ7iUsixpZX25CTXg1kRLpBub5hNMQwaJtw4umAe5mdevmMEEZQNYQYMUyD16N9wCG91K",
  "key33": "5PCgKi4mzghPGuJhTVqzBUx2ZBy1ye8TkSA9q4MEJNHXyePcfNDmJKF1ewdkkCUniXLXDNv7ukKy1A291GpjrdfK",
  "key34": "djatZbxh6pqAxDoRD5dfLQ4Ryen13F8k1mZr9vtFa7UJo7vj9pTfDiDkso314wEjkuxCvDKUDYoPvck3eJYhEB2",
  "key35": "5NKtMBGuwxxQs2SJbjbtQXkQ6dPf7qV7zFHsYFATUUg42QgWztjFgqB4ud7zWc3JTW6xAAsP1x3NnWabrMAKrzBA",
  "key36": "3ySdXBryT7N43B2bQNUtzdntBpNu3zYJxmDiF9ZVxy7XNP78m9YBEmGJbcNihMwoQaU3Abg7XjMgzLnRfV6r54FG",
  "key37": "4AMEUEZiDk7iShL5c6bz9x1AGn3vt2zXgQCYBWqHjwyXg2zYo7qFGTCg15SoQCpfNphxLaCk4tYYS6naCyjtUu8Q",
  "key38": "es46sneLhbXX5ooZXBsAb3YXjuvkwwdtfYmoJRPW1yaRRuHCyuHmPxGisU4dZ6C3UY1WPFLnotMc9zYdnVShibJ",
  "key39": "4ztCw3RegTydTous3zZ1bwScjjR4crUaJKzpwpsqwBD4herVjuZs7bmrXkW2Kh3J3DMKuTgUKN6FBr3LNRQwz4LR"
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
