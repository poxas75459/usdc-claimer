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
    "4fJmZwezKKadzTUHPLCE6oAHjV1ZAv4nRkYPFicGShHss4HjtgRedbhHDm5T6W7JKgHzac1jiwFYsYJan44RTMKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rJDXMLTZiDvQocK9fBWt5FNfMrRJSBgjvmvDS5k3u1CsNhS4GxCadYbunC8ux72AKviH7qzCv9x4QdPAsfQ4pWo",
  "key1": "2i31D3YMrz1HTcgTc5f4jtmubAAjzeDDPC3QWjhWwpKswYZ2y2qtzbTP7vbeAKKsaGV8bVBEfNaoj7axrVZ4Dud6",
  "key2": "38m6Fgr75inFfN6hPkYmUkaNEiF6pASLj8S1PM34criEj7PK2sgmCHXhBCTYcXEpdaG3muWS5tMGL31p7cvYpBm5",
  "key3": "3RSfPJN5ywjBJo5FV61iqnMEZG8Bf7zwfYbrcL5CfbzrwT2vXwWTVpQkonfszQZ1Q99xNd6i7xsWzAS4TxaDDqEi",
  "key4": "5g5hUixtcMCHtbYnFkqJGxqZWYfcAq3rPnFS2ApyJsDxaNNqyvd2RDcSRqWdvnCUcDo94oFEvTVtMadXfKgq1fAv",
  "key5": "567ah9YSfoTLwiEDpBTjeXKmQtuffmfmU92pRAX2dfTVCYFFKLjNKe5dADMvr6HMVEvmPTY3CMFJ8rtZTKxytWAn",
  "key6": "2XZqExKPYHujhCDCXAzuqC47KFVSpntKCQfENtCXguCi4mSJx9gDSrDHcfqYXYXvd6CZCAwodVRCFZQFk2D9nn4d",
  "key7": "49TPJx3Z6zahRbdPGZCEUdv7EFsAbCsioXQVPuZqkzE6M8NzRvoQTXCHFraz9tL1ujBv1W5nTvKFwfn9DM9VHbGE",
  "key8": "3Y2GLtjKXwG8tw9fbBSJRr6hKkhfSZYrTedyy4WXkm9xNf5yXE5HnDAcYAuh6Bu4TYyAFkZoXoQSGXfukhBqxq2Q",
  "key9": "5UPduMXZMC5MAqZJpeHohMpVs3EtmGkbm7qT4WBP2rg2MWzJ3qTDacbVtKsk4fFDPMsAcJGN3nNGzCRCcXCaDg5L",
  "key10": "5vmANFeYt5t5MaFGqjpZTuY88TTwB54jU8UfaWN9PTipFaEYYDHajRZJYrC7J8hGh6ovrFQUE4MraeAyMuyLS6DS",
  "key11": "5qAwfwDG2jtzM5u91EV2kCPeMVgT93BAT7ey7btGJjcNXsSmEjbvEnExuM9Stzp5d2FbnZ5XvDsF7cUhX5kq46ZP",
  "key12": "5D4ziykuqamQYSkKy2sozt3ozSuKEgy1MqzcA7oSvvqsWCR8WmdjJBkRvVqqy5CoUUHXtGjaEm9UHcSKrzZM7FXi",
  "key13": "A5YK314VtjLThhrMVK12YW4DZQhW2nv2a3aFY5CTfX8gw8GFTMPNKhLLVoCdXuc2zwpJgMrDE672n7j8rhvafHf",
  "key14": "3ZajVA6a8D5t1zZUGBWgA7EPLkHFFr67JhDeeomkWy2NqwYicr3cuyPc33KVbbCaCpUWkafnvjFeJWWKXmUABt2s",
  "key15": "m27HKFQDo8A5gKA2PCVywmdYwgTghUmYK1TUmPcqsQzVEdX84Nwyiz8qXWghi5VMHimkf3kDR6YmrGuh4T5Tr8Q",
  "key16": "3MzbJNcv1YnoNXNbTb765PjxeErigpbUAiTUwkSaJ5VB7dNCmjxsMC2jyxwJYb2mFz1DfvxJr51TbgNmMC8Vb6we",
  "key17": "5EzGDP6ZYQF1zYvytXAa3FHYdPBCDmdGhpgF3CFBXe3mpYFjfrWvA2b56Z97FKi832PauSDHhM4FvQJWGH6i8Mrc",
  "key18": "3MSKYiJGvU5meFZ3ND8wa8oTr5n5qmKUGbHJJVZejebAwcU6Nf4RwtHTLvuibbXmDZJrWtYdw4XRMqZgm8Yqk47x",
  "key19": "35skKmm5eL7ef6qjjVVYeMT6yvkiasR46GSLiim64LkGaD1wgL3XCck8dt2gzNCfyDxjmBs1jPpDgH4hB3WHLvbX",
  "key20": "2dFBpmuhWJHWg7biWXGDfemKKFPUdzwQJ7bM8Ey3dXKd8bFcbTbMcyLbvTB3g3rE7vPvxEuFTZKARQaXimZvx2E",
  "key21": "3K7zvEHZ2e7t9QzeJv3KrfmY4UgNzuvR3xLwk4VFLAggJW9XbMstc74BdM9Jy82ZRDH4F35HA6kghk67xZ4mfDVq",
  "key22": "3xpKUqiZrW6dELvbBjpfAZ48xKn6rjbt7A7wdMXnvs6mjS6sacuWPTeAuNYEUbTLD9Cjov9uYBaLM5cN4BUw8MUv",
  "key23": "Nx1GoK75YqPvELYyrBDQeZFfTTEWVxuAeoHdsF6ZcbfiDjSDiYc4G62DV1vLmdCSzyrmmKCPdpTzYAJSF412d7h",
  "key24": "4ouhvttd5zSUTCCRCvjEsUp1tuXVZ3uDvzoaZDjmLnpRx4NTX3Bd58oc9XzFbuRS95uW7wnCrao7Ao8PKgnfsWzx",
  "key25": "27HkvsyqBsFPfSvNKxKFnqXKdgxB23QkGLwdgdazenuQcSPjmgAPgFqq9GCjUjrKbKCnC2iwXoHU9MauZ63EwuKc",
  "key26": "2fkSEbD64DbyhXWm2JApseNaN4VxU7QxBDnH9skC4DUAUTT1r6bcZnH2m8ATwmcARSU53gYEfkRfeA2awAzSX423",
  "key27": "93dbC8b3rWBLBxg13dAukRsfEeQUFozQFNmwbDR7aWqVy62Rg5i4aSHtRUyca9bD3dhitJzWsPPeG9f7hLLJhQW",
  "key28": "2YgFGCQfMfK5uNWxzjRUhKYy5HiVrJj1XJ2FSCZ1cubjZh2m9ZNLngQtQVJYhAq5mUbBiwk3UkyJy5bjEvvFbi9X",
  "key29": "2KWNkShed65fFtoeQQQLprCP7uL28XKUGCf876J5wGxHgLDTbFAv7mJGcdR7jSmZh8BnDfa86VKR9tb6dDyPXc1d",
  "key30": "5M43veaeorU4JRnPjrpQ4SyTXVL8S7N9kNRr9wBAwGX7Xo6Ub7Em3JkK45C93RC9EvxpRcP36pf5Nfa68S3NFHBu",
  "key31": "5WeiKnu5H3iPPvwZW2UgLg7bJtNes5GDg98SRmWzkimaehm5KoRaddNxbABoJ4x6avXyLfRn1Zy6RNo5moH2jdxs",
  "key32": "3othu6wNNDuYnQkqaL7Ztx9zPpEPchARBYpyFvs8NUrHDRNoqLThHnsECC7bn9V1wBUcrR3CSCKjTC4H9gQfqRb1",
  "key33": "4z3X72JSQSLm3wy9XSAtftZkr1AD3C8y3nsTytWECXz9HjCBpJFR8x3hL2d2cnz6iMzgHKs8tPCNmHB5GeXxAR4W",
  "key34": "5ZonDpYVvp1p9MAvR2RdvMUqxQ3Br8Z2oYR5sSPh5bJEqtkR3ELe3uJyGqjm5YpwwjHWpxt3jsR6qujCabUKU1aT",
  "key35": "4ridhm45HcBs2X7evGvsVhe33HaaWBP6xgzS7uKChBSzmHHkbZo4DBdoiSWkkThJfjbn6rcgcgd6Qm6Q4WgHEPia",
  "key36": "61LZCpQggQgDXyXReA6x4hu7N2vgVbv2DPmNWbuCnWZwtRWF9upr7T2drVHHWrXkWxu1Eifg5DQETXbBKcXUc1Hy",
  "key37": "5GXqmyAkDB3gfJsYUxUwteB1oVb1PzzpLtBxd5jkRF21P9nuh1pos99GJCv3VSPetss3xYzp7buBrAuKdGf1VoVo",
  "key38": "5g1rWucd81ALDNzaH5GpHhpiHvq5Jej2BrBGZ4avToowfnHWYFt8X5fkUuCRdpxvNi6eo6peZUAG9Vre9Sf1vDTY",
  "key39": "5noyDVNeMHUYpQjeZGuVFvJrWxXiLPzCgmt1EK2HqGjagYp4dXHAwvvGYmJEwRjPvwn841jZv1MU5sCYNX2Uead2",
  "key40": "QEZ2oZS3oekTxsTaSi8CXMUN5SLH42cdYGPxMy4ksbt3Zv2zAVmKSruc87M3d8ypfTWNDkVmWTMMGv8ZHA3Dtic",
  "key41": "5iHfc87CkP8CoJ2dc7MdtqNTpssjQsej3NyDmeFT8Tm7Me5ee7JWQdNC7vMyYJ19wTzduxta9rGZxzk51aYEHxHA",
  "key42": "8Quk9kRKiyi8KkZfHjEFDAZyKyu9MstbheTXdAg3WXNE5aA9GzNjDwB9zaJQsgnCM1zR72fCCGUuvdf3ZkNTyqu",
  "key43": "4CPM3oJTzhZDXyfg8n1QRjRZtdsBpcxfDH5dxckqsHC9Xb4gk3Ka46zUtdTkP4tYJi4EJdt8y6J8ACA1zRR2PXGi",
  "key44": "3iT1Syfv3Vmhg5WyVWrmafG34ZrhmQNk7LDWHTg9BUJe1aCHsv54JJnNDSLPMqgEaJt8scGw7iaiar6EFMKtwN1w",
  "key45": "4onS8HSifBSr9YxF5a6p1RHPpS1HUr57BtV6corHamvj6gWoXbhnJSFkqkjK68SqD8WYUku4xWEoQypBXkTDQAvR",
  "key46": "HMtFnYSJd3Mbqpwc65N62oWeWxTk2bAJmHYqtvvGn8ir8G2wc6WVj8uo1PTtgnZFrZn5VfEcaNe3jG88rJQLBew",
  "key47": "G3psumLf4bye79EpmqoYBBf5owqn6vGFvNNYeyhHsZa5wUJ8gmhEe2r1kmbZ8ugmdPGrkEmP7ScUNSakRpbWE4k",
  "key48": "5HM1AbY8QWBSRhhSz6TzUDhgWxW3Rs3au3cM9CsXnB4VSSWxqtaCXcFeuAsfmVVxVhLFSp93qVCxhSSV9NvYGE2s",
  "key49": "4xxW7pQ3UJiPqRRuybTF5H6nhZos2kgkcsVUrAuT77CeYA7kndYpRbTms4tTm7nAJQbq8ZHuqysKJGBeGu3D3Qof"
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
