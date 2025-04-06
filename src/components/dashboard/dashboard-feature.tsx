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
    "24jw1Q9HSrY7eDitxtQxcCAuz7Y1NgeZ2Scq5mJfQRvDsM2xWw3J2A1QRgQ3F5z9Cn8RZY8BX2pHjRAYjc7fkW4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uEy2cY4ho6uNRLrtgMvD2e1yYHR86GPrtPiCXLRx937CRqrJRgV2YyiZXjXswasa3wZsGwwQM5VsLgosrLd1nSy",
  "key1": "RvgQCZ3FsWnsSuZwS4oMvMgrt3PPtyfvqk4HuyQZfy6Zz6YdLQw2EEW5K38APDKyzhebdz4n2CuCnpDfHsSSgMt",
  "key2": "21QHZrYvKSjmk2tx6fZfdk9fSyFN1FrkjkZDL4UADV4pBmSm82wKxtnE9hN4WpHr38oQ4zrkcoBjLQtbgJ2a2ti9",
  "key3": "Pw2kRf7dwmCpL6RAqLHJH8Heoq9LMcBhMAPVj43oTG5TscCgD16kTtk3AQdAeAoST1hWj8SnwTv9VXWJbuqp5Gy",
  "key4": "67V5L5ZW3BNB14oeTMpvcYawNHuRmXPk11E2NAYyFSJqiLkXTKx8u8csjVS5zbTQWvnwm1Vxco57m1axJu8oRU3p",
  "key5": "49iJaR9a9ctT4rpdHy58KnxcP6XntxdbWqvAzvDAHJiW719DbayNx81vonaAYC6FVeFUuufURAgNGppWHauAbGvE",
  "key6": "2DbzdyRoLLkW9XzPKgaezwT5nP7erAb1hUWgNSzZ9pXUerhiy6DyzZHaMET6r6Dcdf8SXnCKTSPSGSi4B49HMaeP",
  "key7": "52AQ7QtBL4VY9j9YZSWZfBoCGu8PkjuWXx3aU7DPfTv2mBHdjdG3hUfGiZCyk2MPA3kpjZCMfF64Rupkubc6qAsy",
  "key8": "5D6ixDz3LceAAE4mbYB1wxCk7pj4e7WsqtcSzfkw7Y65KQicRoVJ5Zkz72swVXYDqD9wMMfJDpWWjEFA3tTS2E24",
  "key9": "3rDfjJ7aomMkcCBtsrGrp7iUtyuLwhhErW2SpNEmbZqYeFkyoWYiHN1njSyWSdHRJA4RmxQhnWbPAKuddnsBcAs7",
  "key10": "2srVZyfhNf5yBX8kQbAbtG1HDSvEWVkrpkSnV7Rcmm5ZorU3XPqZpAeekYg9HgUuK1PCD4yVhQz5tD1i6PyJYLK7",
  "key11": "w2ER7da6C7PNjHsz7Sthcpzs7YxFXFTxYc8UiTf3DLRwyEkSd7RD2VjvTzWG6v8spHMb8rW8whvvamcEK2H4vqX",
  "key12": "5kU6XXSvheE1GaQAyW1xstFghP1wWdbbFEaxR975qNK2nzgceYYbUVsCwWRbQwWDEu2kBmBW1HrXmR8J9mifxBkH",
  "key13": "3E1AXpF19fqAe3MzStVbJgkMFFZRw8MMgYrVSyRei3nmcHLHG4VD2hPdwQQkip4Lafjx3FmDar5hYDskCapUTEsG",
  "key14": "5bt2BH6nnZwUbAVwPwpoPcWK3NzC84XdkVV9jei8UmonFn7cZiXFNBU1fqkyrdTPyu6UU9BQCqSPWNkjM83vsAfw",
  "key15": "2QufkoNFyL96XFpAmjArwuWXcLJRqaDApJs25D8H6ujkgdP73kbXp2u3VKqMx4RPXhYsEwbi7P9NckeZ1Gd7mitk",
  "key16": "23kHt7gambwPaiuoQvecGAfDQHbR9cXuHK7eDr67Dz3s2mXK6XG45WJWNNZQLqBrVgFXqkdP5kaqocWKGijXKoJ4",
  "key17": "3CzkBMkHvTyimMzgnBU7WXSf7FRmWzksqQ6Szjrcf5BjftFvYk3jv2mzyrk61HLsX8uiHf4C8SFdZjyJ4c3DEF8A",
  "key18": "4vXfp2TAF7jtMeECWZici3edv6pM3gbdwkB53toAc1ZZUmXPeuxGU8TvJfrFcYbPxf6nRrceFoPdFuaoUtUnSKQg",
  "key19": "5ne7C4GQfg2X7ptYtCMd4nX9S5uz18pdcncmvUHYS29kr1Deeg3miVm7QpDg5oCkDED6xzyCfzHakcJ7Hw75GLE4",
  "key20": "3aM7SFtCbFzp89WAf9rpdhJq2pnPEes38UeUQAtckGeu8TouX3ZGEohGinWaKDE2Sd8djohurNMuJgQig3CZxgtc",
  "key21": "3b7EyKbGkCmc9iLqisZN6A3rpY91TsrEPKNY3y4SUU6Ric4CGWqbY8otWg2LoMjsjqadF8PJ1AtPTKDCyQGn7yRB",
  "key22": "3r35BZjxM4ue7sd1R3tyueRVZsk5X3YpQV1W6sCJWPQR9qhNjkXHiVAbJiYMB6iiqND8K2E3QL9bjoJvdqyXojDC",
  "key23": "5WHE72Ch9Py8NxQWRypYXTAkyVn972MLYX1EXzyCkBw5wZVDRdeWxRKcrnB2SvyVAX7cmxHzLSXnroTcumpqU3f4",
  "key24": "3huLG7jBGK6EZCXjFnhgmQDiCnbLW9d13tpNCe88jQxhhEu5Yf3FV7L2Gep29KgXcV4Ej7BgMZjNE2W39WnNAfof",
  "key25": "5XFFBD3i37rb2F2uVqkPPCVZUqxZkYHveXA6vwoURAW8CPnP36VoE7zEZ8vmYLDgbsvBm5xvbzXEimX425BpY8g9",
  "key26": "5K85PBbXQca3R1nv27DDumc53CkCSB2JHLyxTGCzBdTHf2EANvLpDDURvAxdxpfBuGHyz3PWmy47deEvdFNRgshQ",
  "key27": "4ACxha2Sh29PsfqypVMjzQsJfUsS4fhGpqQruFvtC4eNJ7w2fgxF52kyJobnKAV2uHKsgJKH18mGqCWVBTeGZSpK",
  "key28": "3XvJSBpPR3K8DJXYycZiL67vSZtMzrmafULfsPpRJU3x9ATGfXpsSrahDFSNLQRPE3FvXEDUccdi7t7fn5enQ19e",
  "key29": "UtEu77Se69etD1NtU5T7bNX3RkMQdrhMNMw17P1Qt3UGieNKbdGqYzV88xJqNVEvWTuX5Zrme5fmgpdJyn963EM",
  "key30": "hkiQZ6z1wn9wP7ytH69yiMLvZSmiirhVnhhKjitZsXzfxrPazcJ55vWQnp88PhapJTD5wwKwGfusx5Ci5k2hMDc",
  "key31": "3g2cZzC8sA4DRPLYRbZPVVDav2FAPFa9e4raQJMuJ4HCeHPd31dDy7rKwSJwbmaYWMt4RtZHA63ouR7DSPahbJji",
  "key32": "3qCwEq1km9VE5BVMy1RdZBS6ns96n4rkTkyrEPqoL7Lf78W1NLxbsi6FgrKvaSViahZufAAXQhY1DcVcKDmJeUjh",
  "key33": "JwXf2MqyWnVfS6e3Axe9DaQcPdaob7CVbt4QCMRQDFzioLTiHjJECoqc1kCw3iYhgHBH6jDn33VqqJzobZexdtc",
  "key34": "3UwJyg3EGEizzxm3rPjDZUxGifKYphVCMyjRX66VqYMM6dy3XSZKzWLYuj6LX23u5ZNRyMnGin1wiXaR3go2Niff"
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
