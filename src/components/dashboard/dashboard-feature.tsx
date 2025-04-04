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
    "kVW4v44S16fBeWoJzNhFTe8E4asu9C5wNjfg4a1BBaeVNNxGqdr3gJpYifri4Jq2v5iA4yY7oDbwiznDT6seshZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23FENTc1czsuxEStPoBtzWqazaviPcM3ZZX8BD2CWpwU2mA6Q5pmuqYsjdNpWc9fp2QDWj4BZdPp5cdqR4n3MMNK",
  "key1": "4BDtV3S24kL45yW8vtaiTVnpiFgaDtn1SGrVgdvLuK1EBohhAUXH8ZBfMWihTtaXhri2k3JPrM3RtvAnnCt9at8D",
  "key2": "49o8oZn79GPc2emZ9hTZM57kVN9QJLsPFdapzQVMGiX1nhXGnK6VBh3H47ExSB9G7ihw6FBeuei8AnwfFEbiTYN1",
  "key3": "2DYZSbj2LS856HvCicv3MrmXbxraXD8jfWnKSG2q3xE6zbsG7bfJDHVciuVwNLJmSqhV8ftzJx6pgxdNvcaD1YQQ",
  "key4": "4AsUwb3Yhr3jDNoFkx2ZUruEEBjv9ahNpPw91UoQDqPT1btEFhoc5po8i76rYY3rGLhs2fqUZQtBMQa2S4V4r2cm",
  "key5": "5kwhrGnSn31W8CJsM1f82u2fPtFN7qYiD73DqUp9f3tExzuK5Rg2pJ7QoY19qGD7DiLytSFRqhan3C1h1gc57mqN",
  "key6": "2yxKf1fmfza2wkzeEHv3BLvMjcdWNLf1GRJjauRrtzfCDKGHYMKwQKurdTsUXT5zZZaRdZmrgsEypdEpg7SkPjHd",
  "key7": "2dY8YNsePTQkxMrADWv4EsXJh6kYD7fDNTR57SaVgXSgpTocUbppu43fKChX89YGfagfbKr3T6k4ZvmkwDmPE1L7",
  "key8": "4fReHYSmwsjAKGgsZMgnzvuq4PLyNusDGGY3hwT9PJjdoayZqGZhS7xyEZPWsK212qADu8J6WVzpuyKndhPhVg5n",
  "key9": "Vr9sC3apd3BY7xQMoFbRD3kRSmCgin4CX5sh6fTkTSUP7N8frLCVmWQ6FoRRSoATxGJSoYHiHCdBU9jJEGri9UC",
  "key10": "2bMKaurYrTdgbqZY6ecA6ZjszZqwN3ktKu914hAhn9XFLafzJfiaPi765xUN2fBpjfqyjkPb5sH4kZ6FmWT2S5Xy",
  "key11": "5rBhcCsEean11VnDgeMfUBipGy6gAXCdEsK276aHu47F8pXbps96qjCXpqomRivZisE6t4wNeBaL55uAwFyivg8r",
  "key12": "26iV8Zx7TQBSEVj2SFuU7qrDYWtZHCsv7YRssRR3w3Ddkm4hKsgykS443Cje2LsZCztwvXr7ykmeGZuLEc4CxXkb",
  "key13": "3Qw2tffkEFbuedqwVLeBrapktTkn7rMnXU93w1tcugRexrxLssig61mrDPK2C59tsv7tTQwpG48FvLNpuoUMeunn",
  "key14": "2UYNHrKH1gjEzjLekEMDQ3ERaxsWRhWNTeKeD2rwobzWRN7G8EcZsJJUQZdjLkRTNgMC8W6fPTRe258UBde9xTNV",
  "key15": "AyVpVMryxQ6asQozKkU6T7vQNaALMzV7saDYyTxq3UP4TBoWzJ11FqLpuBro8Kjhj2XPDVqhBKrGXse6dBDFqqA",
  "key16": "KVawF9B3qmSD5b5aGdEwYgzsYmcZ58QXsTAc3FtXGtAGZoWZt1jMoXP5wpArzdPdbzagfieGixRd4VjwUGLeCnY",
  "key17": "2hxZomf2hP7MWVyoE2SD3xSSVBKUpFtagdg3yoVEYLd6rwD1fEdWS2HxVv5T71qWdKfKtGtTzfzheJWdo7DnY6UG",
  "key18": "45puLGLdjUhWnyk7NYWHeDLDaQKuNEyC2NvXv2tufMwWYhwH7uvhjTUi3bbKaHkMUPfdLfzf5DzY8o4cxB8JYFeC",
  "key19": "QxUsXBcyw8NTbBbwJahH3AsWbg114A5dhry8d8eHJdMBDRbmXbmeNNxVFjY3ApQqoaMrV2KLr1iGdm21LEN6Urt",
  "key20": "3XYxTGm6GSW8UHXXAWWHdSAnYv44XA3V37QMZTpYa1XcFtcrMGkjrsiqUV2mVc7UAPxNzoqZp52p4h8gwKduif9v",
  "key21": "4uhquCY75KyCc2SjjW5PUckRCRE2f49SEtCsTmTCdbkBdWU8JiE6kUBuBDgk5rsnuVZziCKv6r5zyCf1gdYYY9Fx",
  "key22": "27VjUWn5QjnuKjaxMSpwkydQsTBhFrH7t6T1Kvv352YokKZKzdSdQmgCKwD6eR9tJLDLJNHq4ojfbpsheuivyAHF",
  "key23": "4eYPeiEGoW5HRWVnkL85w5eheW1Z1XBHTbQTFv3jZgjykSBSPij4jFbAndW13hBEng92ixj7DswpQV5zSGx1KDMN",
  "key24": "TxcuvDX17cQvsq2nPp7bNsXgJsqoyhojcJxMdcHZDYiYAayjD1sCsCwSsNKua11PKLTbcuvWWifi95YKbMxT2DU",
  "key25": "ZrQ4YWNhWnvzPvtfFrK2YiKX9Eyied6kmFpBmwkhed7zomJ9WPE4ydNLfhbUDA5qCVq4PkM6ZPoYBD8PgHT2mcn",
  "key26": "36CXYUPcNpwuRqFsKpDCusa8zSpb1KdvdhNijgpAunSLm4Fweh6JCb3FEL6qPmRbqf8QwL6StcUCsvVajZhYgQ5v",
  "key27": "3n2fRuELRMFN5ETJcUPE2LJ5qbSwJvM6PQkSjQjP5Gd8ZxxsQ9D9jWZrWzgpngZykgSo3kUi4q526iqpepUHNES2",
  "key28": "3CcjZJkKiB7FZrkwfFMnj6T2a2KHyrniCZhfpDi5FJCbYJiFvdxABmktiWcR9zvjyDPB4uuMUQkeJjDHyaRhGJ16",
  "key29": "9jXirqMy7R4D3cCQWCbkmThC5TZKjy2YDpJLSzG6zLuWEdk4kvhqQtFQuojYb7QaQRDzwM5z3LTHDPHigkz1eco",
  "key30": "2KeNBDUAsHHM2t9mGHUSAvxkNCRtYSFJsq7G4pZyddtbL7aYmV3AwHHPsQdTkuCpKgPXnkWwQjswzKbVAb4wYYr4",
  "key31": "5Cpw8K3fyDbk7RtUGs4iEuC4AYFZinNqZogQfHbJhpShFZGruKKEoWL18E9oebL5n3DHbVwp29UQXj9kGNkxEzin",
  "key32": "5CbC3kMD5qaSfuJXn3vqB98zUeceJrwRU9a37DT8z19ihLDFwjLb2Ua5N8HNd8JHaC3N6v61hWbuS8LDkPJf26Ch",
  "key33": "2DNZnQ9meqNvAi6qHh4qAbUR3qA1y54S152deqC6tn948WRwP9cyHiFhxgZHtWVnB8RLEnmefgCTJJotHGPd2Jjn",
  "key34": "31HZpCTVu83EXWmeQevyFxkSJ5oruwe3UdkCV2Q3LpCdFA8kZQ35tyf6Pmdyy9W7tbE6QLewZXMsrvMiG5691g3H",
  "key35": "4kyrEdWRxYX3uLVz2bfxu89HwM7SrbXYcYMnEKxTMxUEVFqNjs4oAJFpNBd9Fe8LHbBjMHbCjZHdA7hfHEkRQHUo",
  "key36": "2J1tQBrmjgjgqWJp1bAJE1JBCsc9531FjPyodLu7janPcbBSk686ojq8eAobsXnmR3qhB5mitmeAobMuxE4jmuXC",
  "key37": "4eYHqsv6vu1fTZXVTPAYW9RAjznsNTmiHdkB5RjSXC57RSpHwYv7dv53VjtjE8kp8enJC977BpgN3QuBNUkTT6T1",
  "key38": "3AhLULu6rr1Y7FSe5VdwyjwPwoiG38EwmjDKgVe8oyaZSV7Nz8wyEqQ1eM4ZR9UaERu9gZS4JRXhncUX8HiPqKje"
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
