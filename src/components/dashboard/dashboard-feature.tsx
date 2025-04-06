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
    "5R7QQ2sTPCt4rb51PoEVoKdAoj7z1fG7UcPSkSZAknXkBV1T8H6QnPuEeCrmiEjja2TaNZVs6tq3NdNbxUsj6dRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iYrwmgbBeUBKkT2XoLQuPgCq87ebABv5sjV3MoHiYsu71EkJsRKpWfQPRUvjRHcJ9m1MsVr2tiNStbVfxzQoro7",
  "key1": "4qUM2eTq4LxgzAQn5UuySMYwEfMQWzyocp7KmjT7P9J62xQuH7BMS4u5RSH59uiFJ3TM6QKupJgBEc4cqkKSVhoq",
  "key2": "2iMMAzD2Qiiae19KNYQqhrkhqMx3DqHU8iUJNX6EWyiLg77NTy514B5sLRJjrzm9qvr1dxBe9X4fS6zENCVrmQuv",
  "key3": "56Qtuw9wnDAxn1k74UdMfr9QFpHQE5yM8UUCWMFjy9xXQZ8dDBfo9dBbpQGLAyaP8TvHgjba3Jp5CktpeqZ9xXJ7",
  "key4": "3ik5tkNnyvW1aKCTtGucQMNy9oTypGgCGAqfmExDePU4fh5WLgAYx6PPJwS5GF9bckLTxff5czonoCi3EW8ABdGK",
  "key5": "quWqb8ikLYM8UpXp8Y8A17iUxtoJESszRnCpwfThZoD328mycCRw9B3PRyVfLK7wxsDxWQUTrSjQDfxuc9Cf2Wh",
  "key6": "xj2Zh1eEUx5dExz96GqAaCfCBEC8CcTMybgo3KfHDd7nqDPiWjC9SM9vKfWq8sgspCXi2rKNexaPyu1YEsew3CG",
  "key7": "HaBwrbDYrq6eAfdKp18jQ31DJ4F9eCpdoJ56WvXvRz8YSJNLKybYMwiASdhzmtZtPMUtkBVYZT128df4x67stz4",
  "key8": "HXuFDnviTem9twVd1j9STovUTmEwBxx9H8zmvnEEEkKQpFQogmUhpXGvKqguW69pG2H3ttaBHPBp3CV99cj5u4Y",
  "key9": "L4Xfmg2zasjL46WyhtXAAdDHwsTLjukijkeJ2wwqZfUqsTPuirEXegDgp5g6HkDVgw2xUcw5untyZzvwrh1gtKW",
  "key10": "5pNCpzJRj3uEjzFhU34JuiSvCKubDUHrxyRb9FMS5jk5pc8vR2iPSe6Uo96aqQrgBtCtCqaD5DepcB4ReWHJLBas",
  "key11": "5LP11GeZ3kRT7xzXs21b4YDRRYKmy5smHQoM4hwo2CRq7WBz7wbsAqfmyKn247SUFWg7Zq9yDY9FLAJL3KnEEosx",
  "key12": "5ywvdD5JG57vmbnhHcLoKmMruSExxgDdycHBgrmpqA8RPoy83cWeYBSfYuNHtNB8orujR2DZc57muxdWryfZyZ8V",
  "key13": "ABpLtQpbuagA1zYDVUcoy9VjpFkvLYHHytjeZ3B8E6DFCScY9rBDDzZERS84ffdrtD44bWqRGbF8bKTYYwaMBj3",
  "key14": "5VzM9wE7s63L2kZHYPwZDeeX6wsvsb4ADGt5ZrsXjiEQrHQqfi8h3nvVmw7LWQHzTsNwoF7pxKUj3PJgUPdCSEM4",
  "key15": "4umbEjfQsukQUbGgvwU4qDWLSt8CYV6U4Z4SPyiq6ETK8ebwUyhtePywxemJMNbuHjvjiBZo2SoTFpK7SpoqC3Lp",
  "key16": "koseNp8eZRdD8kXo1Y1NMJxh318bVtHUJi4qL4fWS2GVjFScKiHjeVYnD5aqAVTEM1upGh5YwwoUTyyotdsHAY6",
  "key17": "4B23K6gDuLg8dbgz44EN55bxahKhbe21DiL9VutSTMFu9zc9ZZmSZbkbg5KBFQnWSf9GYViKsHQ6ip5JyWWJQ8t",
  "key18": "2RfwXVrqnTD95C2nQ8Gx7zBPuPa6ScJVaJDbUNb38VqqMPVy3YNGZYxY6sLvxRvA4SPkvvTHdE7RHnkFBma1DoXm",
  "key19": "3QDL1YGGc2So6zCwSVQjSjGs6M8VpoAN7o2TbQrW8ztrbEPYA8iP54iQMCtFFedKdgHWX9DCyz8yqescegzBu2MW",
  "key20": "hbV4ChdJrsEs44LshEg5z2aBypfPZP5zcbmZxKUhUTcripTRnajzDNLN6x8yrjzsmttvQXmSMhUZX52ddoE9mi7",
  "key21": "URWMqsX6WKZneD6aPEXkHBTGcb7qHEBbkpnv97MA5eKXKisgpNx6EK3gyG11B7ajvxVFtsKEtorZJpuzktbbe3e",
  "key22": "5krSYqrjk9sVeKQpfjYQ59NDuKJsKJ5Dzd4dzUSoCos4PVwjN1MGEw8oBWrEq2f3XKbkNA8BrYYMuegxxLtxyuU6",
  "key23": "4Se1Di5Pf26MdmGrkqgGHc2oFqe1vkwBD5Up17M4eBYxcLFQdh5gY9pkyr2KrHkAjMKfyZgeZU7W2fKwXzTT4Cb3",
  "key24": "2W53eyjbASZyYSEsLr1gbRZSP4EikeDdPY7zHRLeADxEnyykmxmXDviCbkVUHFuzaZLTeiCrxfaNYzLdrvrL46HQ",
  "key25": "3Ar3fXp1vM3uqfwspNewxFN8C6pD2hVWbZwpTUo5EjSifJSYed7YDTRumwokUdx9bmPQsAqTtMv9NxUyy2m92ci4",
  "key26": "ZShT59NEwjra7CrVMWf4td4nX7JptyyVg6JLnZK9jUyWaHobDDtyHweE5ZFdSnbSCqrpWxYgtVkETLHnZTt9zgq",
  "key27": "itkoyrdpH799H2mfpHrxx1wWkv5qufJ4hdBfVvbCLL4MKZeDZ1eQLjazsVA4LnLBucoMG9z2Z6fUg2p7ZnZCJkb",
  "key28": "2SKMeqTvHfksrLLF2KkVVbAHut2wRYNmK6bQLKVCa6qpM2MzAGJmMPT1KZke9HKrBTRrdGWufeA9mXQmLRcgBo2u",
  "key29": "2UNbkrW84Sb6GfbpXW9xwX83ewxbvPzFhB97BPuiJxbcocKvYgwL3f6Zodxr33UMbFn4FrzMw5yaDA2DZBN5EFuu",
  "key30": "4Zbpm53HESoCPcg6qVLQnLRowhzhof5uPEg2AAHthf5rCm5adS29VMb3BCkWa71RzdFsLSybdXuetKuKixeRW5va",
  "key31": "5r6MesQCMF37PUr23VsdtNysQoTrUf2Ce1R2qEgcqPMomPNU32H6Ui438got4162sZeZoTq54y4zURJmcjF32tC9",
  "key32": "4FLTuPvaLkpFdZKoJtYzDdQh3dwgZkshC3BbppUwA8xGTxWuTPcfpZStRA4m5mpvCuH88uE7CUz8FTbWPqoFZDpc"
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
