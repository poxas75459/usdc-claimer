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
    "3GR4cXwZm5QKKC54BtEWzmZhcEvPUdmPKtrmVjN1GdTRYuRXuJyBpRuS4oYgc6Tgcu7hXHQaSHNdRQmHnjQf7jDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61n1huwVpknKqYCyuSxUSaneaLACWoxgMXVTz8SfhZgjat5gYsEeCXouAfobLS8qtmVQCfZETAqjtxfQqqq6AZC7",
  "key1": "3NykxP3Zr7URS9WsgW5nnW6je5Yemg8qAUYFQsmBUHQxxj1mYzALgcB9GNEJ4DBWKA4NDgEuKiHeTsRU8pQXUu8M",
  "key2": "4BQs1sEXQAQX7EcKYTuJKyt5QGBRnCfUdp9SfWeAqQ6a1Pis5XrV9pxgcc4UsbaNbTPZDbhY6gV5P9KCXC4LPnsr",
  "key3": "4B3JhjgsXHf912Gc4fub2er3hYYk688csnkmLZfFDmrELTz3cFkZwcJXSzoJs39fNpuWaaFyMZsgJLXKMr7tevb9",
  "key4": "r2RzPPRuRK9DvGLZ2mNnpHWVwJvpAHFCNaBWzPc1YTj6weusWVaKDz5xw5zsuD3LhFzErxNLkxtXUQfDXaascEn",
  "key5": "4KUSVvw3LGpzrFc2nEsERuybKSXr2ftGKTpkrCrDoW2SN4E5zYaTq6s3qP7xzqu2xGq8oB9Gt4FXxdvQv7MpVRMe",
  "key6": "3igXum2krNiEpeWt4YH5QKm5Ftmtb82j6RxTK9fwtLYxmquckgokRXnT85WJxutgBjdyRm9sG7gRhQozeJkE1c2i",
  "key7": "JNuJabUk6gtCbHxrWh7o75ozSfu68j7Ysra7iL6UJAKrrxUpjcEhAfcKz6onqnTBAtHpS5PPCaXDZYDrPo87cPo",
  "key8": "62pfwPzT1LsV4rPKDd7J7UPvbhjZDFGwDDeX3cw3dQshbgLW5mC82PTpPK7vs5gefD4T9CajvBgRNhcwuL7ob6di",
  "key9": "36usED3RENwxTupCJxPZ1tJoZKkVnBiEiE3shUUpyHGMdpHmFvUN7o2XyzFfUA6YU9Hyc1zMwDmBJfut8rhr7voG",
  "key10": "2yNzF1gMwoyueJPjXCSWbcx81fuSCS2w8BPyusRf4DsZoKdWq6xamruZxyPT4zCnQCVVm6joKkMX6eAbb7ePqBBA",
  "key11": "2jjWQmGnMAS7Rvc8fpxC2YypsuoANXD2CNtsbwvekKi1cpaKk2D8mT9ohCk62NYVxxMeeWTe1cctC8wPrYoip6yB",
  "key12": "2eM3qd4nHicKsza1GLHwrbHrrAVuAYmkQohY2DE31TTaH7WDEiKkRUz4C5tYuGuLgNpZHmWDvEMbWVLiv8gkBeDJ",
  "key13": "2WuFTS1PquYVDrpbdMePi77nV5QSjK6K8jZPSV8zsTcUoa4Los3sdU3cVa5m7J2SqbNWEm6bNzVFKJmiEsHXZ751",
  "key14": "cCFSGCqMKTPbRV15FXaPQVr8Vx4rGak4TEZppQTd7kYAHECoaGzFGMoXGFAbehDg6J8Wof3So5AxXEp3R3HPh8k",
  "key15": "4wW79xv2zvjMbz7MmuVuXrUZEEYoLdu4hoW7bp5vVV5Ss91YFFbiCyiWqtnwAFsTBAciMB8oAeHGVweqvx6WaUd6",
  "key16": "6hikdj4SzeK8nUesng4R5v5UEiuXD9TPV29WDuBZdBVQ1LsyUp8fycKvk4My3efVJU5P2JbjcuDHQWNKz7j1Dca",
  "key17": "z5QLXJAoyHP1w5zD86cpJh3v33qoLg3JH8BPkgXBGsJQ39p3n6bSJyG6DatRT8YPhG34q8WPC28H6k4EtRnSHQ2",
  "key18": "4PMp1cQWPguSQBU5w3GdWXsoCr26REjw7Faka81GjVk8XofYGtwF79VejwKHgdrDnCV2hKom2PizeaF4ZC8P6JmD",
  "key19": "4cbpREr9nQ5yL8p37xoobVVKj6Yir9yxaJQkGGNZc549WGbsu6d145GEhrtrT4Ne24SB75UQqwVKgE83RpgA84qW",
  "key20": "A8J5iyhWbenJoebiSfcpr2jvayNxAuQgu4goo3XTBWe25Ba9RzWugZPyCeXbP9K2mPX5kRza64g7u9GUrpxzGR1",
  "key21": "3P9BJftJG6cYyk2gxX7Z854SdPwrKtJ41ga7zAiEknP8NCRTXhrjYQswythiVz2YXs8Ezoikfzej11i7p2t6ngTh",
  "key22": "Liy9MWmLwXwo2wQavrvgLu61SFRCbRvZ2yBS3fsCpeHjRoSq9PWWKoufXZaxzZeutLJ2rzP5UUmYh7f4KTgZTsY",
  "key23": "4jq9m5i4RiPBG6mx2uD71JHyMr2wB3k2fUAdV4fqnPN8pMAtwfDvB3movH94YnvoCbaDVfExfvsjwCyDmn3JSJqx",
  "key24": "5rn9nrmgnqQj7t3ay5AdWW5ZoZk1jqFe5BEQGZKBvfoauDehyrksqbXpqVDAkBGQFY5YCXikUvAoFZiC6pjSzu5f",
  "key25": "4UfYMwCKqkPRp7CAYYrp7rkyZBqcpsjPhd6enNDtwtpXVh9aCFtzLaRmEK1JysotM5EkbG8JmfG9DcS8REemaYr1",
  "key26": "3ZGeFySvRi4d6v88ugLDst177T4DFAg2BXG5iXfjm7eaX187nhWDtdZHXa266mhkNZEDeRKn4gcoV2RfyBwmrwex",
  "key27": "Bhpkxx93x4fJ16KpotL1YkaQgGtNyBNNYd3kLBs6pKLkKK4QFoeYByjr8scwHCDtPMFAJf1Z4UfH1AQE9NQ5bVh",
  "key28": "5Pj5CcySetp4FPHVSt8BZhD2vnaUNUCXNJ8F39i6QQkQiutXqCS2by9echyVCGeypc3ecD1ZsnPxye36HFjZFu4W",
  "key29": "42uHXFmrNjuf1cpsMDgTp4cyiwWkcHAtCYD7edQ8iMqBgbrQ9WfYQYrhRvc2tsvbENu2yLx66E73hQ33KC3v1KRy"
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
