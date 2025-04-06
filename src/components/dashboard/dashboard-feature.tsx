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
    "37N2h13fN2UbAxKduf9AJqnMaZa3ogpa7ECauqEJN2b3BZF2VxG8gy2kAauGP7DRDRhVTjb6wWPvU1qBY22U5PAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gsSiCxhVFYHMEJ34QAB2fXWFch5KUadpnoDDuocWFHgWQWfCDhcd2JcQigapV963gb6tsx5BuBnxJ7UXK5ndV9g",
  "key1": "5ctxu1ezkex9oH81XVcydGDzDr2tBjoEiNGQaPf332G4M7f3Vgv9e4cMLsFjDf4dcEWk9vLA7kD3bQexz99F5gC2",
  "key2": "2nZnXMdmRrJKkMFodbrkmAYqPgDV1DBP2CKQovoBU4AT3ZXVJffJFbDBDsQRN9stSjFi2LDEV1TnNf5TaecHrnx7",
  "key3": "5yiPj242K8dTZEaVCLfgPM6iaqTVbW8xm4AkEHgVBbLpsH9RZabtb598rGCcrkWXEPjgUHRfmYkNJUTvQQzvwGw5",
  "key4": "49abq1pzRjXPijDmzJLmjXV2y2jBjXJYj49yKf2LXNjnFuYuZiWW9vBi6R8UxqNgJyUqjAwwgjzb97Fn59TyKG27",
  "key5": "3gxiD3J6XG3dgCk3TtYGYapdm4qmRewV7Fcp65o28hB37iteQYzPFn1fEwEN7jwPzcKGeFSnxDNs6fhvfUB3nhp5",
  "key6": "26q7omWDtxutvkR1TkRxdboBuagDcTVWAiLQXdzTTPF2nQTfS8yRZqus4ifm5MFf7Ja8MLhwFiUHwVPpeFNLD4NE",
  "key7": "4kwgBdRnCuNNMtXLRDUs3JZ5mJARgwhZikTeLw6RUbHmvAC2NHRJ6UZJm9WLZtVyLyAYVhraVmsitGEJMQVS9nZg",
  "key8": "5mkqD8f7h1ygmgButze5isXSyXpGF13QfUJDrHSV7npuhQTYfa7uuVK5pLARJpP5QJ568GRMH1WvFpvhYtJBswv",
  "key9": "4rYN7m6tYNMBopjtCqFJXBq254csN4jqRVLvbFeEyNciWZjZbg5G2BTo852xWGGoYA3bqDJbtxkgh9H4wgQd9PDr",
  "key10": "5RVcZ3AoGb5dSYwGjb5sE71YRMsD2Cx7FsdhaYEgUJQFUkadC2RQmBheuLm5DQAuTDGmeJoekB9NfR52zAr5ssjf",
  "key11": "2tHxEAXh1tA2oZ881oxuN8TgZt3UtWKobcxFCXnLM1irbCa5DYdh95hZXbKBDYTWnyHCjKbL8nwjMAW9HAzcEBa5",
  "key12": "49ZAhvin9kx95vpXKAUWN3tkyAgizDKjxsALzWVSPVCc9fqkjPJNfPpVCxVBKVAGkwHm3rKPtLnmu7RqYwccmUkd",
  "key13": "3XWQTvXLxstdbrtYq5MCW5gfhQzT1XPJQ6NMfWsqniSwnxDUK5Vq8E7HQgaGyA339ekz3BT68ZFxBmzpQ9piNnND",
  "key14": "5agx5f61eTQZMrrZtfRgHfBmyG25Qva5V4wvdrw5yaCKVjRuBeTr1QmktjFfZxKJ5x1jkn3rHpkfUBXdGnMX2YEf",
  "key15": "5Fv8JCkDbxPLcuGHSUPBfCrdWSj3KvUNjXSVarpGAUDyFP2Vn4pFrpXnNemumYbEeZ5TLd2GPM4pb37aeRaTpKHu",
  "key16": "NzCVXyNxH9QrrctPLkwpy1E6E3rsPLb5uAJR6EbmZFLpANh8gEvh2YyEaHjvAxn7s6AZHSuFtKdzJn6KdbnAEXB",
  "key17": "2AmExJxTe2kfY97uE7mK3Nj7fLbybeqkwYGtxq7BgncoZg5zFZwCWjyTpYaU7cEDBaZqEyoZCN9f9snSTDHuLnKx",
  "key18": "429upSqw8fXyjbr6TGALKT1XVAzGUBnSnweFfw1sMGDpbd7SQcg4givFTp8RTqPqLWJAWTpka3ebwuW6PEcszssb",
  "key19": "3Mrsxgp9Y1fmRqYcqjBNEWcT3CHpViHQzQbACpHWy5bLwGxAWr1bunBxaBzZYg2Dpn1CEk835EzLbz7NEAmQcPM6",
  "key20": "DjSA3Unp28fNpq5zDi4n2LkEzAV6iyTK3Dv3e5tUbvxkAyZYghr9sRqUzUZi4Q3AeDncaqaPhbNWTEKSq5Bd9PJ",
  "key21": "NozZCiqzMrznFPzgWHFGZ9x6WBPzbHmhQsXpYaFZPVRrxZxuyJreeEpccAWaWnjmYfGfPHok2fYSeXXgWf1J8Go",
  "key22": "2z5XgNhkpBtvDaW1pdNoWMSorfsBjLJoEyepUSt4zRo4jxY5wM817JYQMBCzRdW3efK7daJ5ziJrouZvbDxnxuR6",
  "key23": "5e1pYENxwP2MzX3pwtMPyPjE7J2MCRVnPyzi5KwHLAoVT4g2tDJP2FQvkSXkF37xACWtiRQVshWmjX3pToftTcjp",
  "key24": "3VqfaKnJodUGVxgjXyHh89JQkMGgoBA35MBBxsmc5sTieUuJRpefdoj2HZFGPunpzNvvz5NjUenGNiP8YijRRKVg",
  "key25": "3ALghPQcWyvWgvFUo47bsKynvdHmjqPXdeZi89znfEXHj827TA1BfmepZ2LPVghCZzK4RXPmP7j27c733HMKfm49",
  "key26": "3VCrJX8LYB8DrVx9N9SQna3xmPrvnEVmeD5AWboaurtdP18sNC4DSQDnFsvu3wFFpsWeWUfGS6DfRDfTmNdLcTEK",
  "key27": "3rVf8PWrzp6ptTjVmEuUHKBGbKcBGkXj28KW4GK6tAoXDkm4CASNcLFQKDKLvyx8pNCS37nggup95vhtsn91shV7",
  "key28": "5xAT8ReT4XTS9wFDYof6ABfrfxeb9dX4ciJF9N2s6Mq5K9DSrCKpBkcWCjHaQyTrZiBtqS6R2ZooG4JD8VgzyWYi",
  "key29": "4zEx94eEthjnGvPpGTvP8RtkvEavUAf6ZMhvmqxRxEJ71Nwfeefe1uCNWBE4gZfMoffxTnhVksmBLgZK2ZdvCCGE",
  "key30": "5khHzag6cUZ2ZSUzqSzEqLn2tgoqRb3YRM6cuPGLgqTfLWLNo2XZd4tnU6kN8GcbQofTNomDsguwKCbWUiJcwxwM",
  "key31": "4vghomQxzQtggcS5HHLuG4hPfxHX1YCuQKny3ECpudNde5tBT92ZNBfPeUzNLcynnshcon85zHjjXdpPCyu2NCzJ",
  "key32": "2jZu8X1ur1KhAeQDp1wciz3x6mAMzZgkpyjL2qU1sCSyuacQwphaq5xq3rtYuD9LnvejDJeewtGtiQNiXL8BuJBn",
  "key33": "64TMzRFV6fZQN4CYR2QYMe5TJstcUiRhmEV3RcbVDHEr8NLQ6nrHTYMA4k4sCavy52w1hZmkZqnpt7Xc8ZaAj7rs",
  "key34": "3JeFHe48SSbqvChoGFwtVDnZRbisTprT8Ep5mqST5hRpqJT1WjS7xk9YxdCk8MeHbLprWjj5jN3jRWPZgYP9bq4L",
  "key35": "3pURWDXHpS32wekSdvBZxgWDu4f7JZ16J1cTNsUvkhHv7irBzApo4KiRdi54o67EmsgtJhbpmWFiAubCjtaen2yi",
  "key36": "2P4RCmqFVS9HBtFh54pbJGBdNzvgxEHwPMQC9vK8c9oqxv9f8FSZaF1fLVJ3wKneLYyQp9Km65uiAfYw99o6ijhr",
  "key37": "64XJWYE5eqb31G6XFV6j5JJgbkdaNrpAdaNrNMzUHsUFXhKMnTaCnqBMMyT1R1tSyL8MR2YHevMpeM18Cftq1pZe",
  "key38": "49qJz1FWaH84ZfsdV3mXeVytGDGM6dFsYy8Va2bzDdD4LVnyKyE23hwEubatiYotSYVf5MU8R3Fakog7dzpVwCUu",
  "key39": "5q6WmjPUZTPYVg5t4nRf1fm8nEJ8pZYPK2TBeVNC1FXfVozBkwJ9CZicuQzDXLAuyhZuKfM7qQ1MtG4Nkzx4jJ6X",
  "key40": "4WnKi2KHFq2qh4GHuxs7WBh6sQa8T9oaEySbfsMU9x3fGbGSgT6BoSewHvs1ohvos1fpnme4web4qWAdRFrMr3NE",
  "key41": "rZuTA73q13agPiPNgYsEnKV4my5N3ddEPbYryK6qXsxWeKBJN7YSMAaFMkEmEHEqh7zE1WA3UAMLMHaJoy6NJiL",
  "key42": "5GkwD4gTJs2YE82HvcaBxegvZnQxmSVpz3sZ19EjRH716cETgqCG6uu569kLvH7m8gQ7MpaDto3tg2ecEXR93mz3",
  "key43": "2NK8veCfcw8nYN6GkAkh7R9mAEqAJPEcDyZzUz4myKWQitWGrvTBK7ytz6QcqT5zscJHwzTfKxrZxgu6fusPb9vc",
  "key44": "2c9TzebncpdUx7NyxsDniHBxipYGzMeu3beHsVKXDv9JCekU9d6HUeN1ThNgSoU5dgCbw3yR5ucShmE6vFZzeGp5",
  "key45": "YiaXmzD4cvnHS3UZoCzuGR9WmwpjPMZY1a8d6WGSksCypjXm3AmDjcdRiKddD9PTt6Ms87hr3YvoQgdkSvEzaAb",
  "key46": "3Fk3YomVut2GCdc7qLWjMaJoEc2m4MUBR26wkoaBWWQvn3RcLhufzSnuSvSB73Z8pk3Y4d7Q4ZpVTaoNWXb9XieU",
  "key47": "4pJSxeihmUuBPNjt4UiuZ33VP25L5B4tH4uP7KhiiwrxRkxyVN3mt77J7Gra7FZtzBS6Usbnkx4W5gqawwN6Qju9"
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
