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
    "2ScepFfHHJXFnDWDs5cRBNyTR4B5hme7TdhRgXWxhnxsyNGVw3MihmMMgjteaTPDcdS8ohAmceXrRDkmSgR3jhFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hxdc1Gh8Vxed6jLyF16Pppkv3cP1BiM8ubJugS7HC25VaoZqHzCRXbMa3NJWYUU8F4hG3rqfaigFoDafpnVZLnF",
  "key1": "3aS2bD6s1u7trRpkikRQjjvFDreW1gC7FV83kx4C2xr2QEcNzRFiJ3VGqCmLD7ZVpwm7KJs2xrVXhEPxEoW4h8jE",
  "key2": "49GALpe4ZLqM6yDfJXw5y88hj72PzVqhMWFxsheBu4pnUmp5Uk78qvW6UY9utLGB1YGmP9A7o5sUoQ8VaVwwzsJT",
  "key3": "5QvD8HBNk9mwBJXun5gGFy8y7kLeSm18q1c5TYKdiBgZjHTubmCLUaKZaaQ8nbAzPXQG3Z65Uzx5uUvN8ULaQ6Bc",
  "key4": "4T4DBhLeTgwDzxUZFVei764XpsQL95SDfhLj6WX6Ra5A1BnnWNb13dzaMw12jopg4uJQpPDorehVqepXwySQiK7e",
  "key5": "5ds2fCXPgmWpWGMc9MaUFKZhTDtabMh2kburbCmyoD7eyRZpewWoMxPVV4tHsGS24Vz5LRo22S8LJfKRk9YWx4qG",
  "key6": "21ghDGf5objsrxSJHi671HSzQWpj5s6NL4NrZ5AXgSY5pmWX4qhn2ZKxVTmwbCXkRoMTvFGeXBYwD9ExJayofepZ",
  "key7": "2KcGcg7H9TJoj9u3rzDADbgUAr15XswS6gncniooNLVqZtABGx6KK27iNMZ8AqqVhysQQXeyd57LhDxC7v7fg6ZB",
  "key8": "2ZHRWHQ8suxu8V4BEVN6cMoiZrqkANPmQqt7WetA3zFrU1mC4jW8xQ9ZddtuRFoCcfWwpE1DLL8JvWRbCPFHhU37",
  "key9": "66oUuK2Z3Ne8UHUbYnjpn4XKsy6DZ3oawGUocrWQFNuuSXw1YMjKGpp3T5BpAgHSUrksVgoMkef3joTdV1JefygU",
  "key10": "5HvgghnLKmV8tZqKwYXC5gG9c8Fy821Y3ziED4bw8hEVVNjV9p5TYWJf7QNPEEDKL4dwV7RBVWR4XeM7bhyrKzaq",
  "key11": "ynfFWLsfeeXXrXE6fym6bQ8h35eqesGWzjNsG2Mu6juivmH9PFb5fZgw6vBBVfnavhedbZReuJVWUCscB9ermLf",
  "key12": "4PBEyEW2CCgLThx6y2rLeiv1pM8RrRFaXNjR2wUux4KPX1SpVEnE549MeWEsPJT6uvi26ZdMDKQXj76nEFSNbQrS",
  "key13": "4aXmcYg8VSaxkR8B71VbVbH5Pj1zJYKE1Cafi64mdXTrs2hsbknU8TzMRyPaL4Zcc1eGXVsnSTH2kcHQSbgw8Jbu",
  "key14": "5iVLK76qzg69auQYrjpTgXsGnbRAPTr4TXQMZwQN2tBRzLEGuFuiDgWzZwx7Yrgr4KLCMMSTJhagKDrvdtiki9we",
  "key15": "4M4kN3KbCbhWCgLai4VsWYryDsxL2DDJcfVPU6ZK9PqLxevSxgNxUvbcXc2iawy1QZ3btVHN6g5RYnE9Z8Mz1tu9",
  "key16": "HXLYKddULDqTGS9nxUHdf9zgeuVvbLgyAk552yMstHsznY9pchKYVF1qW1it7bcjQ7bKFgUaEw3BfZEB11KgjSE",
  "key17": "5uhK4itghdkQGAp7uS27ghLHxCnyRSvHmu9NY2feA7Pr9nrhwwNE7FYxDjZunN8LtBsrjYmdWQdYt2qnUk2ZNk3v",
  "key18": "2JCibhyCPqqi5vdE9DBnTkWwAGTW2WHDuXGBVcQdSH5x7c4i8YurQhXaLu1xx4xEE3WHeeXoKmdBYTmDUFjzRUGB",
  "key19": "4mWzgQBUc16d3gZnDsCQVBh4cNbJqN3eJfWUVwv5xnB7fSMozBzuwD57XuWHnawiWUVoDWPY9UXkvAbxJ7Vii7zR",
  "key20": "37896k2CsN3zYeD1oYcEycGiM2XuYY9b5qADE7soEt1gbbBcmRVcJsuUGp3K7XP7NvY8rH9iBanPixTMALpJ6o6q",
  "key21": "5dKv4oDjMCNmYxbaGg1nK8S4fjNYhJx6DzAfKmXB7EDWsim5RUJfoqPWHUbMCPpAW4EsarbGUtm4TX8sLCm79Yqb",
  "key22": "2LyY1QKUVPbE2o1rqNHXsjiZTYbHp9U6aJmbhzFu6AaN3g45oRR4dWtQC6dteoWKdV3WCRgPnM1qboHpteFCYruC",
  "key23": "66nHujBYcW84ncurzAFikBQGmgBK2YtnVWZamyeCq7nSDyBDQ89vhTBMQ929kAQBNxmHNiULPfpjs79ob6XwjeSR",
  "key24": "54HpXS3WJjSYxKSwHUArrL9SQpBk5xdTzQ5GKFXYh2PhrxooWBZqW2CuJyfNvtTjyGbYpG3PDk7wWnFuKjbTc1Dm",
  "key25": "2Zi3duBtYXnw5HFjzJbG2YYBeVrLs5izsMpNmiRusZniSUc6hxSf349oDqk6RjSXdCzK459wSfT5tAwKhYTTWKEr",
  "key26": "5vNHjzrhTc9jk3Fh63Dc2w2RjEBeLToELWmL4AfowzqtVirMSmGuyRCc25dveh6quDw3cUyErVjuStEZtMPqB25r",
  "key27": "4jDm2LPTufBAuwt5en8tjkd1YSvcBBFXP8NqrwDzfwBKhwCZfN3ugMECRXwVBHQNb43kmhiw2MuFtq84hwLWYKJu",
  "key28": "4UdX3k9n4jVeriuYxxSdUxTyooxB66tB6iwzasWpcjG1CBMiP6WpvU1CMjFKRaYWkKSPpmvTR74tHXik8t4MJyUr",
  "key29": "6UYnyrf84c4qUVToWqZd53svJU7XzHDrJ8Qm9gVCB4F1bujKD49SwuDwme6z9f3RP65VoT5noLyqKN7Pifd9Wv7",
  "key30": "22s7iqBwS26cWNC1igspNZqagHufeWK1xUpaLa83VgDV2gUL6xS8bhfCPBs1ETwn6mUwoeWfJpuHpMSVB54EQHPM",
  "key31": "RUpCwdg5KQGHA8Hny9DrVHYooaMCpEhSnbnUuCNEXzNt3sBfTjV2TxQRnRsiXnFwQnVFYc7Xn698ZuNM6dJGVPf"
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
