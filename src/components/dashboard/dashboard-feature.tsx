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
    "3RBHARytgbDTWNSeTC25EdPS2hFT2FFfY5stjuStUoXQN3wP2UhmeUHrHnGZxs18ZrKr3f7QgoNYB5DiwkneRSg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44UUvZXwThaPRMeJ9HJ4V7idzLgDrfXRQALdH9P3de9RcaXdLXQVTfTbV23wpUytTz5b2wPbjCH7GqXPVKKkuzB5",
  "key1": "2iduFdjNYqhHQizxYx5hJjFRtBLrmG4P3mYUoDuw9Pkbxw9V4SLFVPb4UqhCcsyh7YJyCbVbkdJuyVY3uBok16xW",
  "key2": "3W33DXNKwskuD77CsE3uwz9rXtNAPr4VoSpNMxUYHcwmLm5pMDeoL2USjWPm9rpwtFwULfE6nmKnxBQnQN3s6zcF",
  "key3": "2EKhdmngfyGqV33WiR5Yht6HTyqhHuvPoBo46jveuVS7kEZEtBv3As62dUiCh13bx4fphq2tLBRjrB5RHL9x6388",
  "key4": "gxesQgywVZf8BbGNQ3sGq8DhT2iwFuwYpXFZWGZqdBrgXZZZWWeYknn99iZjAexpCE41HRXVLU5Hjjc8KXBtnjt",
  "key5": "3gkuXGva7T8cK1VAPvmDtuVvK6eE5a7yhcr9GT1wXX5wFdLuaFYuxzE765YNYFxU52PGP4t98Q9BN9vrvkvA3TtW",
  "key6": "634fjTpbMepiWQCGirm2pkz9faXkQiqkyqQUQ3U9FbjSahSvaVudRQRvhvFqAPVxsLTT2xznq9mdBt92CutoCKC3",
  "key7": "4W7Pcw73SoVwfh46ZEkLBxE1JvPZB7XxVnkAvMpzPv9Pbh7QsebiTamXcFpnQBSdrr9rLtmZBgaCX5579SHb2Prh",
  "key8": "4oWRrzjTct729ePBMufxKCspM6v77DZv6AoL8tP49RKCRU9NQc1win2ZTeYXCjUyhmSUZkwm62ngzcCqFn28VTzL",
  "key9": "43VTVH1cT6BNH2PH8DP9bvCDJAAWfCKghn3CffBwuwtqnVmUP5fawQEumvHf9jzoKVhAJL9H1WuFUu8XDKLLuP7f",
  "key10": "QvvDvH1Bvb3woSyvh9jL1BoPVJgEdr5ASbtF3y6pjLekkM22VYjt8g3NY7QKcB6r3VFZ2apUqwofzX8p7xUn8kY",
  "key11": "LqCxNSnJsGo6WNxTbokVTg2a86FTReKnGcGqzV62yYLMP1UUyyHuTpResWmjTo4xPoqtN47dWWMjmMRRNw3HaNH",
  "key12": "2EyVbhuBJSaAPE4vJztZWQQgSw4L52VG3rTrTiSzxEEFt8yXEdbXNMQM91c9o8iknho4N2qsPtqRjaGKFZrMLv3Z",
  "key13": "3Cghn7K4vaXvpcKcKYju36XCqyQtiqq5ow5FybrFdkKXaE4RJBdpk5sACu4s5v3wEcbbazP83YEaPt5YvXnZShUz",
  "key14": "2tYQPDknnBwQi6e3p4XmEsaHUcNvbjZtdYiyFMYETRsXdx2Yhs3nZoVQ2vgWPm7XCvtv83MJvSzagaxMTk4W4Yne",
  "key15": "3re7qMVggvmrdB8waGJfe88ustBoQVM8KPuLhfNK7mHWoBNQBPQ9g1QewDMdGj7akRSgjG5GdH6WmtwRGo24DsKb",
  "key16": "27FD46muT7N3pKAg6MjG3FTAmTPUyRvepwfTTSepD8Jbf82Y1xh7P6yy3A95pJrwEiCBvipxWdzBoZduZo9kYvLK",
  "key17": "5VLe1See3y1BN2hNgccDufqZTQws4o8A57s8KQDnBLUUc7N6hUu2LhoD5KxJ5PcrE3xxzuvcPAt3mnwP4ieS937S",
  "key18": "4bH83Q917pUwPRW4gkRhSFPW3n17gPknFkKTS4cVzm25YNGEGPbZShDRB8XaqBQ37tMwNBw5mhT8ooNcaiyKdxDf",
  "key19": "58cTuY8tGXAAxBsACRPwpmB8CMicZwjumccaKMST6n6XvfPxTYBK8E2YdBKcYgbbmqg5j1U9NB8xi2TA7PrKehTf",
  "key20": "4E9onaDrvtngx2CBTnU7S5j51hPgSmVnR8BpeUTfz28mtNCHDsATU6DoxhNoySFnDikQJcP3MJxDYMWoNhTX9dx",
  "key21": "2r6saLJBCqVkHWve63vvkqCuu5M2wd4pXBcmdAwN6e8HZaK2xY3df1hTAUpYiyNXqaAKGFxb331Y3fxy4rtxzrf3",
  "key22": "G9GweDkrJrMeLi8iKPRFn3hCgKBvBMdTKn2wPNDi3ejesuU542mWAUBJDtCiSzVnxVRfhMrkZyviLuuvbZ2GhTc",
  "key23": "2maPVhNvfBsrgU6sYg3RMAGuMuQZa9qfwJSDm4d1j8dU9Rdmf11aiqYvLpe3FRFjqzXmXPgbRiSNtid8TkZafcHx",
  "key24": "bvU5796dUx4bNQYGkMcJTmzka2jvn2zPG13Yyna4RYNc2Mq52XpozWnb9vSx63kuva9LXuVDBnAggTCB6pS294o",
  "key25": "64DRQx7vHsybbUtqWrMkJoQhDCjCiqv3zoKCc9QJBT39ScccKF41rxLKR32FRig4woMjJV99jJkmndbDrDjJeXyL",
  "key26": "wr2nsEJnYPx7XGstChZERNoRWWLe4fBQqvYkzmdgRGqCqQgi3eyFWW5bLtzPnaNtvVJKFfbNh1xGsH6NYdAtN7Q",
  "key27": "4zMTVQpTYkKbAz6XppMSBysbYsySFcFYWwX7V48Jti1CuLKdeGi7sDfRAeKzDkkFQuWShFKMTtjf64dX6bTZhNos",
  "key28": "5QSjBMFZdhkFDkcshT43sJ5N6yZ7mvpB8zsQFer3FApQEiWsJPVPxKjjNE1XqaVJWpaicRNCiMmmaLXBudAccng4",
  "key29": "3Si2wVZRibq2qfEjfLGGTsm6hTUWam4jJ1acTKSQLShRJsFqbCux5jKGnHuBqg5DCMjXtjKPtaGT2nMW82DUPGyN",
  "key30": "4nPP5U5LjthbWGssEoBdX12rjP7incgh7s4pvTPiju9A6mCRSpoGDxzTA59h7NZAXHHkgxi6K7tyTsG6nTTssTY8",
  "key31": "2WyDQg78adHUG1THLS5ishM9VkjohLww5D94fkGcD36X5Q14LFbtRzHet8LZ4R2iZskg1bSj7nd7b4jasx4C7oq8",
  "key32": "2cnLDPU8WAhdL3eHgownmwLjoNzhzHw4q71XAjYYXwfiDn7yDascceuBzYpqBCWHPYcFwPsPLKdKw6JRF8k5vWDk",
  "key33": "2ywgRv6Nio9ec1tousJwuFJktWVpfnBjDv7456C6xcGkkXK9EPwpkCWACoBKsGAftNMqJmDefXuagfv6QuTEuwJq",
  "key34": "jX6q85CpDjwwWrd8iuSmwPFDCbPUcGWuUPukLXksog7wbQb8Tvi4X1LymQgoqAyHzPHDPt3VeFcmJbMjuyKRVKt",
  "key35": "2Sx2mHWXQK7XAhoCwDkCN3DjvWfwMaZvWgJtPAp56JtuFaEEVQ4h1hh14GTqym7toMg5pkkWpejPX3zDgFWKFLCj"
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
