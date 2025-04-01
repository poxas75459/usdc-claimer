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
    "2auHTyK16iZ9edfC2rU7wQHxsB5qJ3MirDDouXV5wh6TbM4UbuyUuSQgDhu3tuvVGdkERB9jTbFhuMNV3FMonimT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t6fr5cnr2AbchqUbdmKyLc7F6YEdarXP22grWUw6BQ8fgcqoYEuor5AyqmR7A88uGY7E1PCiyT1c3S5h9TZiVYd",
  "key1": "3RDFudCVPWcp2zQguUUqUQGJZkHCYY9r7VDNiHEkKLTLaA8qMSh1WaCT3MAE7Y118b4oupyrFhqdunusPqvdFZZb",
  "key2": "bvHgrmaTpJSW8PebErHGZehkPfdKfbcuGH78vMnBLNtv3MZCg5edU4VSkXSxYsDCkBj2q86SvRspFFNi1Q19pQy",
  "key3": "46DkYG2jjn6Dt7gKP7SR7zX1ssFiFRJQFRLXT7WgrWmrwTaz8oEvXyqbFDcz7VNTD6zPgfvoAyFfC9xgKJyUXRzT",
  "key4": "rsXDKer1Qnrh2baUVQsZ3xWubCJarodeaL8htKbiu5jtP168khNQthB8MowPoLRfNu8rSeAF22HY4P6zTPV7AgW",
  "key5": "4QxkBasNj6hXNFhmseKKgW5WBotbdgi7ViiSjbvxJGF7zMypRhRXeQMJWWeFFmVvbJTtd36pxN5pjVyob7WKoT7B",
  "key6": "67R5eTYn7Yh3nV5ayVXvniRBDPrDtKvhkE3Cs7QMFXSMngLJsdH4bbLPWthZo5QKW5GjsxaRC6E74FWJm2KFpUkB",
  "key7": "2PsVyJ2Vorvq8ebGtuEqQv96pZXYvBXWa4gAi4LYuHhCv7bzv5uTn9PsNh4SWFt3NToentytiDBtF7v5U2BQhD9u",
  "key8": "43e9Wf5N59ZxBBN8xg8Vc1KwEiSUCZXH9skaBEhxJU9yK9cT8JwcRB3tJaNhcJP4aEybC8Ey1tFvtpFXyRkxvYMA",
  "key9": "4NxFRjoNqLy3thmHRyWFNNrZ6uko6FJiHtBZi9UXh3AxAXfw9AEsuhFdrqatG5XHWbpBcpfm4EzwjhzEbxB2dRP4",
  "key10": "puAFWNgiXLtKLNtnMEdADR9RCCM7mGM542TgPGmHVHThn45hmYDFzh3SpXCYhrt3oAXydCGvuqpsFMeVi1qU6t1",
  "key11": "UzQMcqhg5BuG22dXhSVKdfPPtNviPXWjJkCfpPcsUgzTtaaryjxJapzozXVschKEdfHvzkutNCwzujKgueWpkZf",
  "key12": "2s1PKMbSo5w1JJ8WWaYP5tLNe5gBseAJtvsoDYQ3mAhS9Ai7cdhekebCevwGCNneResXLsQXnXZCK1rSyFjK1j3g",
  "key13": "4zj7g1SzmdGAYF4b68cneuWWvMuJVP87pfemmaGxrCdj4ZVn45tbBymwpBgeDyAphD2jGYYzwAXyoVvCntUKQ7T2",
  "key14": "4vm724pb5jjBn8JCoVVAPsrcqcWncvZnJxFTUhmU9nupaS4uLG2Pger9HpemmEArSdZvNZrNaPGL7SqTSGf7gWU3",
  "key15": "3j5TVKkv3fNYWYTEvANh5jzJKFgjvQBtegySWbJo5zy3VmgaM3ViuUCpjz42SxisLyuuxC4NCkRn7toEqdUFa1Cj",
  "key16": "3qBo7KGMAN1ASbCpma1obYJgmiqD1pnmVfFU3BgMjEJ7TTnYHvpG9LJeCTjjvCVrQmZk4HHT1chdbsePvi3b9ay1",
  "key17": "4AuVP7hFZNa8cATyUZ52pkt9uwNFEvgn2nmHGzYHPwEurRtj9QRTrEwmQ7suRAUfFYLJ8Htstbxq69LKZdZLtK9U",
  "key18": "5s4Sj6Czta6aUM7nTuNowB7cxWLA8D8Kzs98J766Cw2LWt7Z9PhKhCXRzivjnqSCesax9QEMMgyJTteCHP8Cp5ex",
  "key19": "252qpEiAGyT3VhMho32rFhepC2sEEKpnNbGJrpS4711mdyNTkMWArocTXdsShhCqC4cQYNrpbDLjqCq6FQ1DH3Fk",
  "key20": "2NckDEJ8hgELHxowy8Fg6Y2K9EsFkKGZ9ehwcKknMn3YuJaPmJpAoNLSU8tJyJrVe1rm7t3rAD1kAg5iKXFw38H9",
  "key21": "4xtoJt577UjiTjJ59PZuR8JVfGyGND1PurPPRgTo3zwLCdEr8zL9g87b77ApHcJ7Z6uCtUphYhgJ32ENAx7hcVjL",
  "key22": "4rHPDMzvT832YasEVaqfJqVUvQHN584BQa2DLkVwqFWuUzdsWJZM5Jpahraks7RgFdnVDsCmDiJo7DAvWgKh2Ep",
  "key23": "3gPH4ZbgjbNdoGC8a7Twp3uZ8NauDVT3yPa2jPKzPFEgekdMqfqmTZMS9LrGLqnnmfCc9oGBr27uCRqrBDjvppiM",
  "key24": "4D2dtM4HVTwEYrR6rFJ3ZxdJzs44EWG4FQLvKSN9CnMEsKNqz1xZhV7hgAgVh9kDnXAjVTx4FCfSVfLrDk7UoJdE",
  "key25": "42aWRuU3T2sUzamKx3vxGMVeA8SG7WU5nkUhGeMYCe46xf8UxCP4xrJY6Whcopk12Gmca4t6GHr7ovWQ6sU8hDYc",
  "key26": "4iaDYgaRtJ4YSi1pQWMRJ965CvukaUzAVjkeqDv5oqGiMwA1SXNQCNwgXTtzWinvAV7k5fUKN5dHASV5PAZFbDdK",
  "key27": "3QYM9N7quGfNTYDeDYms7Fmkuc2ToaKi6xrm1zAkHwVPD5bfbstrGN1CaaubZCuwVQR9ZroEM6nZ6TdU9CEf6jsV",
  "key28": "2cTcNk55H3ybbSrycn8jEgdnaNxkYP4bXdojcvvw2SKGvz7Ze3JoEjwUZbtrErZiE7Y748urQipPGUa9PLcCzSuP"
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
