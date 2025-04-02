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
    "4oe6xjwgUSEFWiFNspZdVJY9Nv296yPTfHqRa9kDryKQRYa2rQLVVLAsCD9QrhtrVGEjugs93KCmUdFfkjznyPJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44JrJJHWyhaoGmU455TdZqMhddpHyW4EoFNCLotejcUWgsQUpbpy9FqpkBVYP1W93RMLRxNnUDvueJgyEP4HzbyJ",
  "key1": "54B7QJQXtx3XjP89uezFtH9ARDRfbbNUpuXMLiyxFyNjR7HR5HoGthiotMG4qUFtcwGUwCpxrKTpMJFEYMMxnZTW",
  "key2": "2PG5BrsNtxVCSxUfEpcMKEP1cy3AsTtjK1hGbBkdYnEx8kXkQT6xkuCj5q4pXr3saqWkdxZ3FVTjzJi6gUd1EtQg",
  "key3": "4YcXjxvA8CFqMQQQVG4hTCxWZBkQShFPDUDmhRLMjipJturgVzq87iuRvL5QLRrmXXhzy2BYdzZZZtie3MDdwaUS",
  "key4": "3cDAqASE2UY6DJtNrvipoC5tTiQAu4wwxrMdeiMudskTcKRbrfwDS8J7mtQCHJzYC7apccVkfLJ6ePbMGTnnfsPV",
  "key5": "4QR91e5DFtyFhV9DfQZAraL9C9m5GTFd8fjzHukEA4rh4CP4RBNPFb6eCS8v6n9vxKbaef1bt7kfxin67rNaB6UW",
  "key6": "2UN7TTunT2Z49yiLgYjfmvTS5qHSVioN8vRzp8WoVpZqBB26P2qRSaCBjdfKfhFVw8xELFan4Nu5pbDJyKR2V7xb",
  "key7": "JmqcpUx8ecRmjcMaRsLQ5x6gc2KunPDZtQKVyRKPCGGH89P3EdRp7tx1WCz7iHHcMcMk3aPWw4gsKGmYhoJthor",
  "key8": "3xZFrjtCTF8E3W6mWFx1dgsoDTHUPgL9Z55Vg767hVz3Skd32EvmzX71MgTuVZ1JAexA5hw7BjcM6PYJ9re8fd4G",
  "key9": "5SJDUAZx7C9paPqm7n9TmjBkyQCx6H6EmZWB16Z5JNZanctCxsfn8TnSqxXXipFvabt1CLddLpVsfFKmtfYvbQ5y",
  "key10": "3mAPmR5frm9wMTaJx8xQatwcNzyhU5Wk5xCMtsMYcX5QCbPaqpPhyttfqYyDCrYBgL2bAximBKCeH6JqgmfaSMLK",
  "key11": "7RtMWXpVRiiGmw3fxbV76waZbecbESmibRcEciAaNEHEwYq1LiwmsLJsvRS5Sk59jSdr4jRHgJZCzUckKimFGDm",
  "key12": "3yfvuwijXuQFwVPu8JmbhnGVkD12sUPwyoPb1sx1V6nNzADwQgKAu3yV514gJp5Ze8qvrZUuYuVxqXGf37VZCPQu",
  "key13": "2es9yiaEgD9J6s1GtazhMpS5DUtQELKcJLMw1v6grvp9FZf53hR7W1kPKkj5Vu928dtMUTvVXubg9r3shHBYCdRx",
  "key14": "2mXaZCQsCvHmy9mRcB34xSJTbNCUAwj4FYGk6RjiUHB1Z2HPvLjFR3MUm9u1ddrn6GDi25Qf7pid2b1daED36nFu",
  "key15": "4L2AZzWUGcUQo218VbtrcpQLK9kkVjGJSGM5TbtxGkT7UoCPxc6Vq9nUiUjhXA2RHQ9LFjV3p3EPDbhYVXqnUW7A",
  "key16": "2U5XrcRw7pk9a9Jyeobzk3VtjXiM6niKv4kBymiu7xenB26e597mE6bWTPvTb1nWaKPUuAyN68o6BQwafeZ2a5ER",
  "key17": "2wN7efpnfUULWfsw7vNDzbqGJAuFw1TQMmM4bQ3idAXGP3p4UoQtaAjWjLQwuKoFqFmez6YSqhyv4JUvLpCqpvZN",
  "key18": "3SrFC6VFGZt7oSHXACLzmpCcNTBca9JgRAbGdBxEkwgqdY7hL15Vpg5zjFz29LrFcNyNGbw8J2jBVDDLZifmyQte",
  "key19": "4ora6jUETRqBmj3mAWatbuFh5ew3GMdCC1495TvpcGXUoeRFokmd7XJEovSf49qh3QYLCNZrQQnmEoL3pyHhiVtK",
  "key20": "2TXhA7BKYqkWEh3vYoqMapFcPNjS9E6EqvBkSehVAXZnyiv2V5y5yiexHCDhNZNJCZJV5wPXSDa4QtJsFhs98Jip",
  "key21": "bRkS8vEDwVN8dAeAAHxBqEnffvf78JKx95SjreD8NhfbqhbBjHuAEtPHzP7gp9pNqqmpB9ttyejH9QzfRP2vs89",
  "key22": "5CqyysozKpqPurnxtbnFNSpJkfQ5Ex8C4EXEEaNy35EvPKWLRXfcDP2DH7wYMJw3JqJvsLQaKv1ARS4LvZihKqQW",
  "key23": "4MicfxHKim6i2H295jHp69K17vZSpyh9f7D95U1oLq4BS1y1jGvLDU2GZnTyBPRFDykFFSnRbVYFsXarUL7z74dv",
  "key24": "294fut49guWJFApyBktESWMbnRs6XUDkmr7dzWX3WGFq4tr6Fy6kGKpXQpMVtzjZ1xRSvNHcUEwW5eu7QFB1pW6u",
  "key25": "xJrjDuhpw1wGRLkQXrYKnZT63Nz5uchnuMhShNnRAxsroJRqMVqk7oRN9TC8ZvBsjMdFm2nSnu5h2k2UsxnieyZ",
  "key26": "2zizSuK3jaFkcFghe95ZbD24GCpWHw8u7eAXUYRYYdJHDZSQrzQUSokksPRvKKjZDJchDn5GVHMYXnBa5fZxD6FJ",
  "key27": "2QnGquPr7J68haAnc2SJxGQi55ATwdCzH1YcYdZoN2YJ1zBKPLRCCuoNRxuCK9sqVjp1SBe2zgX8mQPsnv6MMJfR",
  "key28": "2grPJoqTgPWJCN8UywTYo4VvJSKAbXwFWoK1zy7Y4iKfPg2ehts6PhAq5hkSHicTkWjoDc5CGD9YRihhLqUUvmLM",
  "key29": "3gaCVstLjGR4e474asGv7pLnWqsu5PPCDDNxWfE5Hb7eWJZ2D1eRWHdxG94D9rweLTVftx4CmpiFqYiC6LJ8oLy9",
  "key30": "3D3hnq2KRYZNqYqCWPunuh3SMWrfPumw3RL5vSgJpNyKaFNNuBhMQZ71epnY7FsWet18fyjnBKK93RxXJTMqJ8z4",
  "key31": "2UdeejmGjf3e5yDVYCGhBqG67t7xirL2WA3nRyRVLdKiLsX1svFFBj1gp8kQju7UhhUcZTrxt3giwP4Q4DvX8HBs",
  "key32": "TVjCDFHXrAgqyx3gh6NWW2QDm8Py43WK8aQh2aU7mwgr2Nu3scFyaZYtLZ4Za98EtZ2DwUAuFqsZVEtwEPkFyKa",
  "key33": "4UKtVXEyCxUckPBKmoiVp1Kkdv8tjMnaeF7CdXkfb51MchfXn2JGk2gU6nQa9bEs6F8HuP1cBpZYbVGxgMxvFLFB",
  "key34": "4wLNYUw4SfJZnohN3eBK5iQKRto8sSvUy562yDSP85UiNmDN7QUY4vYcwNYKi1miJN2MWSPyrJwPh6muaqyXcCv",
  "key35": "2m3eDVvi9cky1wZcMD6MpK82zhe6pobLmMDwC5V9rNQsEoXWimy2ZpsX5jj5gaPX2RMeYb84sPjMLNzwtzNR5CaN",
  "key36": "2pfNnuGHQFzewXTanRySVu4N2F4NYjrPAzyvKnCHUdxcZrtiw1R5RhouvmxELRKCmUKdRA1dQT2aPqHbvVZouSRc",
  "key37": "5PNXhscR372f3pnmayWMfGU4gKR2TRYYCZ3CUJkAfMpYnxhnQuafgXVDwvwZDXoJVzDH2DbRkq39qJ5XQnyvAji",
  "key38": "4tuCo6FnN9jJzmBjW8Ytwj2A5fdajneHnztjBJ22shJYy4btf5kEqNhuGdZjDk53LX9FP2Bbq93Q7mwcsYCxnpH7",
  "key39": "66SHaaEJ3UvqbZ9pRA1L5QehUsobxsZYBSWAn85YUuk4UPxXneXPnGFxQFaKGoYveimrhB8v8QiE3AvkSTCMQbpv",
  "key40": "43ttGxPzEizMxBAmAt4aSGaLmf5CDGb1Xtgy9WKrAKfjKwEeBUK6PvZyUaZoCpNyQrKDvxpU9D8pUeTRGRCa7yi",
  "key41": "5GRBzXADAsg6av7oWPeCPRXkWVKtKU4Wdwvnjy86PEh1eSQMMZjmgFiHqFcP81BdfcBryMEWyeEdCv7qgPHtPqbU",
  "key42": "xkEuw2qsgPoRbfgKAo37TtM9Lj7jb5q2ENQKuy6ruGBQBvEXLcvyFty66QkgWp9RnNLnVRiTyTDyssFsdWe6osk",
  "key43": "359axHJJCYrzvYztfRbbm6sqh3FXCXWChXuzTG7SHQKTCfKR7Rh2iE7piCJ9S2SW99fKNXV1FbSZVgX1knJvXQBe",
  "key44": "4F1WGU1BKpGT9Wtg3EuUN5HxM1Gs5N9PfbMfDms3tnwratLkWHZMBHJfWqgHa3VqmLx42pa3ZYFtG7j8aWaBpYtT",
  "key45": "5z4ECCzTRpTRV5apUvs6i39Ai1R5FaLZaJecKhYmEEf2rZkj3yS67fgc94xn7p3CR3eLMGf7DH9shNXXeMJ1EKT9"
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
