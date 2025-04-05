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
    "5GWEeMmfqJe2K8KyUKPpQAZhvjQX3aSKnaF6T5unM9qUK1Uqs3P2uNszJipNkbdyNx5jZ9ZuLPyRkPZcNQaJfFxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hVABuLs8NzdQfXhGuYnZxGJiCCd4CEhKdVEsXRCs8BR8PC3gC32S4dMV6mDTVxbYN4j4oMbiLKVoLKpbZ6yd2Py",
  "key1": "5AuQcwxcvdJDuGCRbhcfFQtPntQKGszDNuFQEndi1YCxydKqfChEc5R2vPisxgQbfgShJm9vLQVSTHfj1Gbw2G64",
  "key2": "2k7qL7wKyVXjzLNm4ECG8q7rVms9xpCUEzwvKjTzNiWC6Ak2y11x9VJ1T7trR7rGLc375bZmhMKoNkqVF8YkGdGX",
  "key3": "2DP5qdKJQagvtc5VhYRRaewk66ds7Dsbh3CHQ5dRFdJ5dqS4AKuoSv9XC4rwfCsVD1eHk56UktSWNHNjYExYYP6D",
  "key4": "UG8bbYCHAs1336g8LLMTt583EapgfVM8tytAqbcd3aetU2kTYM2CvE75rVQ7XdKu5PqtCysNbcsHghoUVM8VSHj",
  "key5": "5KkZ33dharQ1jtVdL4g19d6miqWdT8qYgLe1b2pq8bHHBEHErDQWJ2cXJAJBbK1tCC2yNYCApCxMuWzwgATPqLLN",
  "key6": "4jkpHL41pFVc9VzDyM3LSD7qD4nbbKgED7zVT3HVE98waztWarzdz3fruuYSNGBBfWcJ4X7xsNmFBEMSh2bNmmjD",
  "key7": "2A3JxygNE2kxdH6VApFdNomrVG5nraeJDvFffm39g5tSi8dKMEVZsTZ3B4YpaN1YPV9R1WG7ixuM7wwn7AaQVxRP",
  "key8": "5pbrz54UMjifU5jYYCBnpRMESJvaF5fwMdRPttR2LvY14wTy7SMhNh6xa5gyjY2Zn2QvNcpwemUPQB7FmgQPuZrK",
  "key9": "hWMQSmgJreExencY3pppHBR1JKiJNpfSW9Zh5Pj2C6oHPSZHskJgeoLjpjtCPCyLwjvzfmfn1MxNPgaXQsDJCS6",
  "key10": "53E4PTRxxGBHs9iMmrFrL8fTfBx6zwND3XXbvniSme9yZk34e46PwRmUSHPvs384drGSkwxHYtJuy9aih8C7LeGJ",
  "key11": "2t1igUyaJzTtzptyBzhARPHs18AcEQoMtRLCvcCf5DUC8y7h6Mx3Gt9p6fHQeQUk2gPWjG98KeicjW3fEGjQwZ9A",
  "key12": "4LVv12VbwHu5PmCJmrBadf6nG3wJssenjBG1Ab9GDH8ixA3ifQJzxtF4GRA6SHJpshpxRgNctvfNySTVBhDMpwjV",
  "key13": "31J13YTMvLmuBprwJsAc9CuZfrQRgYPDhYnFQVSuRGkfKM6yKxx4fJe6yLp63X9AHQvqSjGfrXiWdgnsCeWCPD1Z",
  "key14": "2GRsjv4YcW5FSTFNn7hHw9CjE3JMRoCxyi3hTo6G8txrsPrH5L4eHgcPwkmhN4KKpZaGpx7AaUFeLVPhwaQvxGoj",
  "key15": "4vw8iuCm2oLiZLieaydE3vhrPChLsaZb9RbygMtDoGgaD3PYzuCWm4UXyPpnJCNWKT1NEHfrbbtMxZDn2JwbyD94",
  "key16": "obVrtWFruJHSocxsyARphhQevQuqzuGJMow1UHsFhNubd5jdDAZZXbU48nnisdjt9iYz4jAnVtZFV62LCEPgdQx",
  "key17": "2TZfb6LFHEMhNCnW7BBfRK9yLQL5wuJKyiFQFZTZNyn1AikRFUdpzFb3Sr2GXBTxuFgo2t2KWr75hYEGvC7xupJe",
  "key18": "5XPYnKbfwa4gwMKRYvXaDHLzwyNdCgLDyXZcpYxsVmXACs7cTpxYp3a4iwvmpWopDjJ3r7WANgcakypmG238qiad",
  "key19": "4L9HLnYXSmmhqNeQ6Wq5XLahrD443FRFZQ3m8GYCtTjAiccbMJZeKPwx2J6vU5mnzdzguzxBoRwcqXzjjyW9bHYG",
  "key20": "3r48P9tYZpNWijYMM8cLB1sJZ8X72hzhECHDehv6iXTgx1hzKMbEA9cLE3EuXYQFKUraWunz26QqnMdFvjh6sX7a",
  "key21": "3zEVRrzRPhV8Lv7g3WJgRuQugJbp6MNQi5tvxXhGAKAoayxXCyFkm25VcoRHPxzs2TNbzVP6dTgHCVFPJhkcB7xN",
  "key22": "2pZpaca8iQRfH8wbcaG4W2XxNsbxhCVXMdBmKNuZFvmMaCg6b2wn3dSjsm4K7RB1CGHKPXDwGzU3yHpMoQFLvp9i",
  "key23": "Dvm6TkiDovnfEd7A269KvRx38mgKEzierzUcjqeiNVGEbwpLZ3DKvB7KafQFgZWsY4eF9jRLNgPU2PSJK6Z8yju",
  "key24": "2bBDY8R1EBpop7w2hjS7XbAW42JzUDLnJ1vKAjy6xsDwzvz5bzwHduo8gzqMxPM8cAaQYz8pWXRba1Jucg9Q9wWA",
  "key25": "3VLBJoRpFubMGyC4zwEq3kD26HvZTEAgSfrpE2BfCb3n245q8YXRpCVsvQLCycGWbxVUsuRUDe14VTnze6gGLQrg",
  "key26": "4hbPZNCBdoZEHgNSJfqcZuWej9X14WM23QWhtdh1DB2Q9wPExhWWjM4W2uJyQy9XydutbvgafWN2utCRjQ7FfUjt",
  "key27": "3Jz21xz7B7g7feG1pZk691k2TkScxe9A9D8vHXtgAaW1ePoyLBkBJL9PahxVCpHF4nnrDjB7xEGYDDfmjp1Kw5ux",
  "key28": "23YhUy4sD6xdtUtevYhB64HCvJmxLA8qTMbwBF7JJ2RgnjNCHNgx2VjFrjAJAwvKNY6w7GaPxS3E3f5WAiyDPnUd",
  "key29": "3QGBhW2KqFyvF5GqdtTcdvCdy8aJbKrc4u1kLxXeVURz7Jp6aKUhgtejbv4YgwXP11mY98TvwxjESbGi4NW2E9nk",
  "key30": "2Ezdg6sfYkaRhNZq4pzjoyXYCnRnMjM3DaQ2qb3JPMFU1PxeS3BWf4LnBs8D4tDrJ3u8kkzzFddE3iWY42AzCTGs",
  "key31": "3rt9DWEXe4K7jNiD5xe53ckjrpgapYAWiViGwqepaUyi5ij5v5d3TLQFY2GBraDwUmecTZuXsxEjQLbbxBcRL7Mu",
  "key32": "3GrD7WZQtDnaVE4QCXLH3s2No1gtiWWNwuZT6Rr1EzZevzQj1cspUua4r7ECLExN2D3Gq8TjECqkqDPCFUe2igds",
  "key33": "5ZZUTGahM3ZhbYz8wpQUMD6dti4FZDmWxqVhDrrxpgbafgj8VHz6CYjFsKWuySfnY9H4jvjQmpo1aCANvKsaLLKw",
  "key34": "Ga5qmYgn5ahYm8VZ3GF5sgdqMWCMKnqQehfPzTF5F1VXXUVXV4taxsXqX6JieJeQPPXaoZWuyBuR5Djskx2RTcQ",
  "key35": "5ikW5eKG29RtqGPH1VtgsDTRBg7eGFtfsMj32MjgvQXGXoAPjg2CrctpnFyWzUynWgDRqZfbzQy4nFqppHUFDR1c"
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
