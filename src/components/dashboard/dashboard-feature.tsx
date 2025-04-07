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
    "3ZYgcgjAqum1rKYPaSQ6JyHciX8v3Sc5sDdHped9KDR7AooNouyqV4aprutp7Nf8vD3TP2TAAwnXBUTbonRVEM1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uuegwbux76G7xGTtEuLiVWSsevFcdXEzPzLxU57H5mADrbnsXfhAHVpzCu5T3UunKaSkAiCnBhJYKrL9jhG1ZZ3",
  "key1": "2JzoRjDBf2QBHKjydcyTV4K8avsN8wj6HbtirJf43uogcHXzFrpEWPJXYsrRoQLXQyuHM56P4emu3VntY8tqhBfZ",
  "key2": "5tvzazfteH7wosNg7GdeG3jgrZAyLT7Qnuv3xxiJfwZGDBV7s68herzJmNZki17icTnq6LXwxe31Cf6dssDMXzpa",
  "key3": "3gHTWVib2vZ2UGsfD2cJk8nwqc6z28yUfdQTyMkB3SdRqZaJLiJQhw1p8ZH8XKLmCfCYoz6gfdf3Av4ySj9J1ASS",
  "key4": "2jmq6LAtYiXCwA8FqStCei7yYLfeLfQvQwqqFiexEwRSuSMmxcvP4ouJo4trkSRPH2PZ2LeNAnwPUbETAhzCKFVh",
  "key5": "ZceKLA92LXNf1NVRiG452spetLcCiYt7rBeZ2GrTwmMvkwFwzemccv47onJbMZ3VfZPRUxCgRtLwzPmBFUnQS9P",
  "key6": "4fECiEgpxiK5nznY8JQDraDbrtP6esuB3indkmw28uYZqqBGvdcQPNB8t6YZpc4R9FctMRNfcHuDopi94Qx19SyT",
  "key7": "4WEr1DUPRciMk5rhY5SHafBWjDXkVgCPy8BpjBB9X26QC8ChaZ6hjEKJzsvzpPH6g6CQdEDr675i5dxC3kKeUnjZ",
  "key8": "2Uhj8SLeVuQ5oYVxXgiWgCbr5Ua5Zxvh2c2TQK5qQ2okd9AC4vKpMSvotfpdSrML7eoGoUkGAthuitCTPyBuqxYz",
  "key9": "PM6cGfZmXxXVnVXwwHG2uZmhfYQNnyDDxFQjg9A1gVDGq4paUvdihibm1gawApoRRBFk7GwzPCbC49CkikBrhpj",
  "key10": "3zrnM9HRmsZzrKTaqfh8Ge78aAoNxFbawEJntgVdYKaLT3oNisvmhSB4thjQvT9oABpAx6X7zQCEe4azaTXhyzWh",
  "key11": "4DUTdbWGcfbyqw62ZVrg7ioawVU5RdNvhcuTKrC82cpgYw1sH3S4x1ypBhXF5uLdLiwcCjuhHrpdY7UoHhfGzpWe",
  "key12": "5WQMHaGAbPLWgmigzXkkb3C6rRCw3dEEQreDTWRQid3GgmbVscwk5rmbeTV5kbyseyQXDgTkBE61F7XskyR7eoJ6",
  "key13": "3p6sw2pxMcHb4YitWRzDaqB8gNJ5htReA5YKqSAZJCzDdJhy5EhwawLPVv7Sb6CCq1jG9QaBUN7mR73A344be7eH",
  "key14": "3ufzo1qiDCaqLLnedo6mQdXjGMYP5GRjNEKgVi6oU12b7TW1cvQbVJvg4KDnRx8jsUioTFFKRG3Ww8pbyLZn5qk3",
  "key15": "4udzBb6YTvDc826bWH2BLJ7T2ANZH4AbfX2FvWwaaQdt3HBX2i9aWrWcwLXqV5szfA51Zgt4hGVX45BPuAqFBCiQ",
  "key16": "5DyCW946EaZGxbnRsgjuL8hjK4VNDruKjqHzXmTqHbeyCwoLNEhZLJP3tR42MH4eBjKZnbrwU88ZZiZXBNCUnK5N",
  "key17": "5MRHgAhsTSjDQrMJ9g5QnbSUTYcQgfjihwwW9KfWtbNqgk6dwHkRp4bvyBGKfSznWExFw2Nws4NuYyUgeKgLwNzu",
  "key18": "4A2cEuVXksMpjnwaV8qhhdbSFd3we3vhZFxmWW4ws4recVNpkCN3AFq3kayouXRbwtpiAxAQVDrP92dhRwrgEp64",
  "key19": "3ACt1sD34Terwje9ziuiNM74MJC9HBk7z1rSA6ZBQvFfpVgSw5YzdXapfYRjgMVxp87gZKHQCqqJo1uRUr3m9hTt",
  "key20": "4667Xxzp2jdZ6ycEmEuNZo9HNz6K1yuePDbcLnEMQWB1zM9H3qdHMyx9dMrnSqoojqFswt11n8NwcBZT8KkZB9Zd",
  "key21": "5Mw3Hz6FDiJfs28YZRmVtJF5Soz1JPNGrW4qAmWL4qKYHcisTdQsBHXAjvmk11guapkMLkybApKj2WegcKxbwCxz",
  "key22": "4NqTmSp2vQLSSSpJRwMDKeHdC5ZZKMDiY2ugHoZFhz5AwMWdVzygD2XF6gXANXpkgcqzzT42DcxvUU2ogY3B9uLR",
  "key23": "2hytScQqD4e3THnEgkDWJrfwqdsFy6619BoDtHPx7QyCTDNaJ52UrSsZAep1P1FSwAJxckXW495CYoqVFar9Mrf",
  "key24": "t17VKync13WZU7Tdoi2jrW2b7nq6TSEa2DscdvSm1bBDsEeAnBWYrwGP7qHbnJh6khejyZudj2AfwK6zja5hFwi",
  "key25": "234DarafERkHqKqne8P2F3uKpbom7eWUDX2bGXB5C9st8pwKuoB8VS1zmLcxvVmQwDxwWPGdd3q5aMFm5HBEqfkq",
  "key26": "5eDhMyXuCX8BouQiucR2VseHphXMhweNLxWuXPYey1ur72fMJSwKQmjepddAXDMXYxERVBgDs3WFVYtizCvdrEHB",
  "key27": "5SFwNbu13ZhLKxJZ8Vd9UeEbYCHGE7eVQoatDqbXfYSCGxngvZhX8fRLqu4sd6HpDqEpeMt9yXp9gk3Q8A87qVF1",
  "key28": "4YhXRWegiy3cEyJkeuS4iQgGWtcZhf8JT3D3vVjU3mCpfsWq6BcttPoWPKRsd2WtdThVW84mE4KRXqRa8AL3Rq95",
  "key29": "5h9taDEFWhYxDYB7KMWWUQJamPHZj3QZ47QwMP5wRP8XWAYnBPbh2wWEiBREecaixBNBkbRZMTbZtN8nktVCTSH2",
  "key30": "2tyoUvnP2XgFcAGnp5TbmFbJpJMsuoiravr7x2hER1H7Jf5sf2812XHUC9YorfZJuaXBBN9VisGTSRWuchoSUGNJ",
  "key31": "3dZeS5zqTvDEThKYanUVuUi45nmdoTDNUSE4DdGEUb1NZdpvzqG1YbgwRHB2WWvmRAXX8XA3bACrhveKZBtzsjWe",
  "key32": "34dRdaKK4wQYKtjouoqio19g3Sy3zRy6JXCDCH54MD3LT79RTvYs5MtjVYRcYuS14d4uCLKyP9XtcNhAkrg34apc",
  "key33": "2s6sN9S64HCH5Go4dHWLr6pN4sqPwZVCPawZD81AXxbyegfjnvNoZTzaH9XC3Ls4jkEJvotASyEECLhmu3k9STfV",
  "key34": "3aXZwoZ4QwcRv9V7tWEaBqy5SXNo3kr2UbHeozso8jyLGUTC195HE5kxDcqd31tbzoh5pABnFToTjhqZuv1tgm5g",
  "key35": "4DNBwtdntmoaaA23UWTh8BUsXhq7839y4am1KVABTMjq5ATLiuBWaZvHsFkQgD2q71Zbn5V5CH9Fe4HdsYJwkRJx",
  "key36": "C7BK1iSpo3KmsqdohYJnua9VjinzJ93brpTMdRQ1eFRq8HkLDGLEsnFhaV1V6PKQCyBhqCZZ1PGtq3pm5NWKNNg",
  "key37": "67r7jCYBeNHeF2GwszPZa9DvdBRw6271eyPDfvdBRqwF74ooLdmdgndr4nQusdTdKWFzkSk3Jktks17VsHjvkmLf",
  "key38": "21hHLXWqzBw2YCTw6V73CG3VEBVKB9vF3xfyjyzUWuKLxYg6AJUsSVyiZyETqGGrYixAk9MRwCz4ikgKYPydLB74",
  "key39": "3dzzFANFpRinuJvV7gvCpy37jnKLuVzdaBXMQaGmECebGMq8be5KxmfXhb5rN1yXVjMw6o8Ddckb1iWLcwsxZEUj",
  "key40": "3RxXZXpkHdnr8mpt26atFywYNbkPWRbL2Gfsr2idMg9vjUA78nnqPpqf25mxXcqtdZQQohxuHSnYetpi4beA3kYn",
  "key41": "4xUV4DSptnPJTBjGaz4MTNRHgpnRUaFeWxdk9dK3vwfqPb9Rsx1Lz6LpwXXdFmGTqtf3ebpuySr5GWmwRVBzY5B",
  "key42": "5JqHJDC1xpzUaH4BUnvYcmTdB1S4WMw1CRYDQkRof89hqj74Gnvb7uA7nRsXzbjfgeC4biwRWpv5CTH1zrTsLLbj",
  "key43": "64bUfitiKX5KmSTs4WpYKUcMCqFqw7cTr3EctRa7DVvfWceH5do5XqYmxkuuQNzX6nRPasH9hmSXWpRawMeJdoAY",
  "key44": "vbezRMbtwxQP43WrdBzHRKSSmx25tznywz1KGquMdGf4sNjj8XKHrTKfXSoH63jLNoimJ9Z1KTKgy3yPzrJJZjf",
  "key45": "5AsckBKZqV1g7UdGensW5Cw9GbHJf1qdkzTqQjDZWEiWKJsFvAAxDBSgKGeK6TTyD6jdDhaU92xkNYBhKzGoiXMX"
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
