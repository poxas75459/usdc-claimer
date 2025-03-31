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
    "gbd2xsHWVs3AVJj99Qft17y2edatv1owG874K7q6BbvjedV8RmR61Erxyi5iwatGBBp9KdyFzp9nbhVno1DVXfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bD6hHZW77mDL194WNcfQAKNmfwHGpxriK3ejxvbSzNk3h5pdT7YNVnbjwhAVBz9LV8CogudLBhDFidgVkHSi2Fs",
  "key1": "EAt7d53yz9j7fYHMQmhDyVrWHKotbzG6ptqK78nUcqqtvR1iKzYR7E392uLPYCCxfxfykx5YTrP43xrWzG74eNN",
  "key2": "5pABEitjNaH4GsnEhfcM31iFhSyMyitLAgRSVhSxykoKJQZBGnWQka2ecKkCdPAEjxM1em86VYDhy2iS71KyJdPW",
  "key3": "32uJR2PNsrQvAToD6YFqo8zjpREQ62HCofDTah2Na7iU4Tw5dsRSHeiVXDpYuMzgQFAcFz4XrnEfsvuDDMqJuw9Z",
  "key4": "48D3nzMDuifLWQKVsSSdALN2un4AqNggnjDSepkKk4cAnLkb2vtynM4ADBtz9a4TanepoyCw6tCJ3d7q42g3Hst4",
  "key5": "2XdATFDokrs8rsnSSA8qgdc4P7cpLbWGzhECG5sYxNXnBppcDJvH9r37typ8sa51qaffkq4L4iSMojkMvjBDBVKs",
  "key6": "2BG2wLqANkBBNDrCKogCHiV2fTxb4JiPLGHxi3Z8LPGfHkMEsFFdzNiS9JutpUeturcd2TvL4EKwBM49es9k1xr9",
  "key7": "8PKzujrq5Hb5EmZjs4vMt7WQstR8bRNPqXqXdPkhusH2HzYKdmCYgEFamGgamYZbTRwQLjPTm2GWTouVFt4cmu4",
  "key8": "24egYPf3jp5c5ojC8ycUgeULsyvYGpCZgk7J3rJqUPNR7Atb2ZcBLQSwnhy2JP3CGzzuin2E4mWeWM1BrLDF4Cep",
  "key9": "2cB33uHQdtmdxsUrzUZcMEZmWFLcguPDyKZUcPBsGU2M2T189oknRUDhsBa2k6ow9ubXPpYHv4JeHyJVzbTvrGdK",
  "key10": "oA4vAbBARALQCnwbzvs95aKQqKUBzRLD7CqupbSGRb4QiCFn1tw8rttAFQ9N9DwVZTdhtR8PhfdKZnuRkAkxUaw",
  "key11": "gMmHFshxLLLZiNqrCjZdB5G32HhT4A4QBhhL4sL4Eg8LVz6jN6X5iRAhWQvdw2FzvJfEgXsF6sZTqSXx9YpErjr",
  "key12": "3HQWVFez4YXgWDpXZ7CpL7fMGM4Zd6eDP6oSUEwBczxKCaqaJ2Tp8iENZPk5m5FQ3Q4dXkRFLjcX4c2B5aFPc2ke",
  "key13": "9duxwUfYawKVZEBqEzmavFCucu9ELrnbaqD6bc35M1pkSqdNENCHhkTQ8E4zg7S9vASfgP5hWUC6zVfSGL5APa4",
  "key14": "5FESoN7CXbpbDXD7v6nGFfUFpCMrr78tLvh4zWmGzoKWqb28nmYvhdT5gWYemzwKw7XsmQ9oYcW1P4PuQbtRCgna",
  "key15": "cJPY19d1dAMwngBNUi2aaF7uWLgjrWrRGEeX7QUA9MknG4HRyXNwowHrbHjNPGr26bgZr7A7LfgntFCT7S8mDN9",
  "key16": "sCXFe5qXK34zGHrLt7iayueyXu5KtDBYSjkpkXerVp9nzNCAg5B4Vtd2Ygrf42iX3aBQz32HJBTb1hVBGcZFWjG",
  "key17": "q2atH8W3dhBPxHBWNHrurrXC59fFXkjxkUtbesLxD5ysr1ZXoS7VyfMpTpv8wWWFXfJnCvDSMCivBiKQe4EFgwV",
  "key18": "2rkf249n2KnSnTSJxvthSajhDjniUyZvyoz9BVnHu9DVV7CY9wupDJk5aKzUhvgU3FA9fdog5iTjh14PwK38dAST",
  "key19": "3vR92xMi2N2twMHcvXJYmfm7F4iSLacGwXc6DnCfVDLxgks2vsLNZaqCFgw4T3si9TmLZ7frSZ2v553NpQXmCpXh",
  "key20": "5qDwXg3zTDEPC4d3rSVnNkKZ7NdiiPP6TKQBTRzKuYF39ocG7usHCrZyZPifhZP14qcjtyb7DntcvgYGBs9CwKmq",
  "key21": "S8HuRp1JfUy93RaSaV5K3chjqisHpJqaNqaqMU4hxmwcYbDETZNjsA8sw6NX94BwGkZPfBE7u8VAgm4AEHdAzie",
  "key22": "fsad179dofYNwsUfVGza1F1DwQj6GqFnwrjY9w9RLE58XKaiMAUkkomAmo1arYE54WtR9mkpe8ubxV18KuX2rcZ",
  "key23": "2ibdN6fEtxjfHrxxEih7jrSQVNT7pc9K4oydjBJENZHxX83K62wEhiNg8z1nNSazL5nK9gsJLJ3vqgeUTQRjE3m3",
  "key24": "3TU5JbJEGHkznbtDPgntgEKyrjZgbwVPjkqgEhGUZfk8U8cwoYgosden3oVkGEmPyfUCtY1zFfNwjD7DVoqvuVZT",
  "key25": "4vctQ8Jz9L95u2d7GPQ3Y9KXfx4tb1JdbF2RTrRKfX21shoqoPXj5gKBT9Zq5aPckfDKJH1cRphHU3d61y7Xc4kv",
  "key26": "5Sv81EJnmubq7BRg6anbfKGUcZ33kyDGHXis6BjwtcEqgYmAS26mU3yprbGmoVJ9Da6QbQyb2xoCY5ur8jd63koQ",
  "key27": "3s7EDFC6EnwAKtmJWTnWxwLoQQrdihhzjCedJ9WkLM195f7x9kkb1cjzKojTk6LNuN3zriJ4yETqwNkSyp2jFcCj",
  "key28": "2AByfyuxnd2C9v9RqHth9Fgay2bg8SYiFMj7QggcoPC2rAtLpca9sfobxdyC5nN4F73wkcNE5se2JfaEwpDjW2Uk"
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
