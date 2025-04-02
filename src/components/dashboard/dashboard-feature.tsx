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
    "gbCbqrHqnbk2RzYAQrQijePsVWNSzPKYP4EV8H2fiH1mA54JHPKzoaRk3rR3M6uRtK2nrzZ2EPAuUDherTAtvXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ewGYCewKAYjyHqLgAPhahDhrJLDHRwkdxBbELM2F4EiFq5SWDdi3Mbsv3pVM551WxZvpQhsXysnSBzMF9YFcQaB",
  "key1": "3ty797pgTatFYhSC2KKfqBWznYADTdZL8WqeYhkwhoKPbJHWWig2zVP9fLf7hTHQN5h7X8PBDDXi4txtXnYGyTE3",
  "key2": "4sNaznqJordrBzeLdjaccSWNRjbyfyeA1uRAd34kJ2zgnyeAkRdiaYrvj8jce1TCa8p3BpBeyGGxwWHNHEaYNVtL",
  "key3": "3YtLhkbRoyo5EQdiFJnoNW3cASkEdMUmwjEW8Dx45H6idQPGt99EUd6VjvbvrA916CjTagzVk2BihxcvTWTzeT9N",
  "key4": "2yqWJjGX8W9aVe7fQBm88ZomsaA6zkGrosiM4GyyaH6FQMi4inH6A65nyJz9PsYcrRtVCzmLXMEmvQKarEtuYoHU",
  "key5": "5YN1FD9D5nsWAcVTPu6nYwVAL4FGFwwNBUbhv1MnXFy384n18H3mJMidi5oofTQ17dD2QFZMFngTbRTyd3wgU6nM",
  "key6": "3QrG5Dq3ikDMuukuHqRLsBgYSVFFQscr23YEVdGJeDoYap1Vih46AzNgB89gJKtDiMmdK39TeAnmG8QKvjZKAeNt",
  "key7": "27wz9md578e8GsAU9GAtcXcdUiAxC96FtmepFGoRjj8pxR5UGiTNGE14rqhKXzQwzKwhhZ9Qbf8BDp8JgqyuYFU6",
  "key8": "BVdEh2ZHFFM9bMsBBwwzf13fHPaz7z6RujYsrLyFRBwzpEA2qLtnUXbeycRCHe3LCi6vj1Za7ft69yHwZgDjPZt",
  "key9": "3tmVngKGXkUGvx6wodLebLCVo4q1afamaCJMnzy6VqES5xnq7ZP1QydFNakdK7rxLG5DBUTyNz2hErHWgAwnhScd",
  "key10": "5WAJtA7LH5hbZE4g3BC5FxuEqho3BQze2zquQioemVfoVHVe5LGmkzXfaxXoPmn7KbGYMpViDBcVXAPiqAep2kg5",
  "key11": "5fRYgP37YUmN14wG3ydHHqQidRc8m4U3UwcwiYNEGc7ekrhmW9AgRkEadohHLuAbBZ4rLejZ9VDWnDQh77HKy1ro",
  "key12": "4TUymfFqYjj64SKVZj8CmeTLY41VB8nVeJMqhZbt9ng31ByDjrKfZEv9714U8Ji28a9VitDKAYkFebENDffE5582",
  "key13": "2mrui98jYDtTXNqE1PQxzeUXw9Tj1axiSijiRoKzCpjD1uMUog9t24u2aUfitrmA7LHokEwdHLT16HexNmjeoN61",
  "key14": "gzz7HmCdHQwP6zk3CbkXagJh2Y48c5G7MgcndnYDm1kgzk2hfLJMYzkkL6mwEtdQroyhjNF7NrjD2mq9f1PYDcx",
  "key15": "8w4KAvEP4rpugytk76YuyDWQEG8aagDSf1oHXbYbFhZnsdqJyarUMkn3rsZka7BkgzueVVjCTdkSMomcgPDcPmf",
  "key16": "5Lv3PT3bgYSmBf2MGvxhLE7x7ZcU8MxYBb19RJ9Gb1rMTvG4E4uGbJKFbkKrTwpUyuKY8ar9jD69X9xpvviLjGH9",
  "key17": "5eCqb5S8KwVGGVceqW7o3DVuSsJ9YTBp24bnqEx6s4rbzqNsn9QdA49DhVCrPiw3TDDV5VBtLephSr8aomMbDt47",
  "key18": "4s6UhkbQaazhxdrfjS71JmZK6GbZPyjuthczoypdrzME7QJ7cBa6oP99Nebn3NN9ffEoZ2eQzj2G4bJ9iYwtt2xv",
  "key19": "5UmjioZMcYozEitE8jNa1XBWFu5EfPHCZhZocJpUXffcsA7BSaXEpu8vXMKgUHb43E4Nx3XeqNhpx7QsVFjrXJv6",
  "key20": "56YAHBJjdesK3GJhZHmnFzdaScY7WxX6jJ4eojXvNDAq2PCkJRKioDowsHoj7wVDJBYQXrLqnCNXynz2dpheXzsW",
  "key21": "2DwUspeQNkn2Gu7qgGkGpoQXW5Rv9yBh1aNFJmK8jBLLbuUapdb3U2m3fobN2y4ghdEFHwWuamPNK1rFor52Ypo3",
  "key22": "4aXuJcZxvXSR6c5cTRBMbvBvu3QfV3eMhi8bGfVoFxY91ZEeFjVg8cYU9QeRbzjMrj16wKWbxYDToVqLSvPF6kU8",
  "key23": "2UQBtTGX6satmMcwnGA23X7ixgbynAZbfYMHdXkKy9FiYKdwJ5X4Cew8P81zV8LAx6BgX8RoyhZTp5GucRR3fzAJ",
  "key24": "4d8UmUpTjiFU5GvJT7VCLjiA6xBXig66BJEyCEY4WvUBztUXfRtBQDrjQjJjYkBLgHBojcpAq6wqpM7FX5sDj9f9",
  "key25": "2MTbxhK2mSh2EeNbMthLXxAQdxvTzLVNx4YvviPJtyLV7wKKf1LQX1cWNsz1YRXFGoXM6NVsjz6v2LZE7NG1ktaQ",
  "key26": "35ZPU5Nv5zJoySaD2bWaAa1Yrxkwf2skPhvTdWzLExpxJUBNbLvKms8mvVj39ujXHoA8UPu2pcxomWNkoC8jyPDy",
  "key27": "eSxg4NSt6nYPefTTUYXP1aqi9ohefuMSpN32iYfiMaefZ3phqwu3m5jPuptjMhypkU23KwRX1GC3UJVf2fNMwxa",
  "key28": "BUD4f8aPScXFv2B3teehHo3CezGiBXduKPMEj1twarfNeNajaHzZ8eiAG1zsZ7H16sFHhVrpFJsXb7r1tKrndK2",
  "key29": "3xHv9CVYEgSUzeGwS1iteJnmpj1yxQ2TR4oWoMMXD6woSJ3BMY5wWQWon7WYmFM1oV4XPFdFx89yLdLpxvJNGqFr",
  "key30": "fvqK2eYXmyAaKiimzt6uvM7qyatF24cjuEhEXA6iEocPBn5f6PBti8q5wq4JiWhNXSGnmUP7CuFEBcmx5u11c83"
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
