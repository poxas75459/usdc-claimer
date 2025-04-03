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
    "KTaTkkbteNw99NZQncKQzED2xAtEE76HR4sQ6nFUKhS9hQ5xb3iiR7BKtM7YxU18yFw2athdyRrgwQdSTXifKk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25AzJTCyddSu8ca7aAAS9QuArLyH62k2Q5RKCQqhHzNKfo6niF7dwSX4aRwggTrCjrA3Tm8PndcAkAUPcKRoZdMg",
  "key1": "5KKCNdaZNvcAeGYaSfmZN2yM1LT7o4K1DHgactmuCWeyB8qsesXjZ2gwNeKModC4RA3Ws48UCjVKTuNaSqwmHQHJ",
  "key2": "3YwxRAbKToEUEew1XcWo9fQkDtZEffYQ2aVh4LtTBLyakuSskMpaCAg4ju3XUkALiWK46VXECxB7YjPA2jTb44uH",
  "key3": "5pDRcsLKwFdsxCWhQg9nbJWnTtg8kbMLyGoYRdc5kF6o6x28XYS5FnpuLAqp3abqSuqCU4GzzKXdThoWccePZtG",
  "key4": "yQf8gtjoknCvudjsN6awNm7CyBD1KfQc5KAbpmexdh93GufgGwnWf71LWSK28jBGLLed42L8HFVsmuX2dgBT5Vn",
  "key5": "4DxwmEjCFb4FzwLfFAW89jRW2b1W3vn6iq4snyYE8QLacMCMGDWVqRvGpmgQPBzEV7PddSGfPbNsfjR5XU85Z6fj",
  "key6": "3mhiZ6k9zemJrZnue38K1jmetD8TBmDWLZLH4ro6GBha4xtEKD9zaYgCuQR19eStziJAcR62MNjcvguDS8kDguKT",
  "key7": "2BxWXCA46F3ZjayF7jZF6TUQubW2cSiH2Z1PjMmH4AXe3Dz776SssHhSYf5vg7eMxQoJ79RSAUSzAbbs8hQ2aKVq",
  "key8": "3PE5hxmTM5Ex7kiG29R2gVckdEPe81Y5pTgcrWmwnHjycvkwiyXm5ALcJsdGBNH5QnhbFwc3DkU2242dt7MgrRKE",
  "key9": "2qm3xjRsUREWp93kFhjSygzaLFciwyjWEKSx1w3rWFmvepKDnb2xx1N6b4x3SLAu6poMPu2yr3H7g73AGc9VwRaj",
  "key10": "66mKuzb4nd5cFHpMzcnd5oRXGJAcxCGnRSSZPzw6evvA5RdvxCf3Kqo7zuk1vkckyCTGDd4PiBsnGjZq2yk5ZAcF",
  "key11": "G5CASLXa3qVfLxXhwA6TbQu1qS4Xya2bUoQwNU9gAtFwZQwfkvC3izetmYwDKfjZeCdrdw2WBvStuJn6gJzNAK3",
  "key12": "5NtDTmdAgB2YuiwzViyPppi7Nb6q9axDd9cm3EMaXB9u1hgp6dupCRfnBtehBjKxZAVtrVGNd4m5QTWXBun9p7TJ",
  "key13": "JiNuPGtNuw5BrgTKuwPr5CSnTAQuzwdvRwVmb2GdY55oN6nWnwcMTNwpQ7RaytvENCDNMaMu5BUkUzv6Kqj68B7",
  "key14": "4MHEUk5pefKXt9yczvFUnEMgUhtjmvMa8YD4qXJpaLZuYSFGQoL2cjDhBd81ud6CkpJGVs41zwhuuCcobsYxWUBM",
  "key15": "UtCPejXRLFVKAAC3aPho1oYdCCPPEnNSNMBrgScdckx1jvLascYwreNYrVm9uY4XmmNutaa5p4p1o3YACc8qGVZ",
  "key16": "2LDB7oUBxvEU6rEgpYyCywGAJiJxnoUJNdgr57cSjsq5ya8CRjEQWYvcHm7ega8QJaiDas6xx3sCM7RaFQkzGY2M",
  "key17": "2whnd6PDi33EhFSmagJoXn8wwkwWBZZHxhGAGWWB4a8K8zfA7PqYy2APqhuZVVBDaxo2nTZWHwXZar6xf7V7yScL",
  "key18": "2MDTCCoPYrFB6iufj7MF2CYXryzU8XuAMBN4YvSKCMvCjtQB45FBhBjr9ZtMMeXrAZ1kTbz83pHEReNz6CYb5Dzf",
  "key19": "3CXLG6LK76C7Tm3n1adpACGYi9f8W4dPkW95UUT6kTgzhxseRwwrvjWepkmKssh4jHYcjVfKgW4nZhbuvqggB6nC",
  "key20": "44Gt49VJTLTodcGf41BnN7Ddzp2PQAARCv9LqBLpkkYVnTivZdugZPQuuMJLpJ9RX7MpNdXvg6ZTM85HACSikydC",
  "key21": "4A7FDBfUcD3LMhL6J6MPnNVyC3eEJBvwGEnKcXgofhPaLHHFkLxZxHsQB9cqygtneECiKGdWm3MnjeHtLJTcPTbc",
  "key22": "3aUZowiT4JuqH1pPjd5fWRDE35RuounzH2zULC6JWudczuFgGgKzxZYct58NZ1LrDv66okwjiScWpY4rHMtZ5L8f",
  "key23": "57yJDARaAZBKyVNC2sevbuxcfUnYUyitNX1idJAkU1jXTYj4LGd6iDANYdqyqcTQ5xWq9WmkQNk5hXhUhLPj1vMQ",
  "key24": "2GJLxVjaPLmWpAW7SRGA6R78eiUdp3kemPUGgc13VPxuswJ7VoaFr5EgBKiVWLY2JFzkYGDrRL9z2P25ncPHXdLX",
  "key25": "5cZGDX9myLACuut5n7JetWjW9vBGzsPxUVoRXXg7gkyGk2qMqJ4AKADAXQDZtDboznRykYBscYAu54nU8y5BpX7q",
  "key26": "2UrEcfNCVJTZS6cUNoc3zXJCebZqQnfraePUVpQtEaBYEgKMWDSovfYUMSjVdKnUcAnWRV4ZoeFB9zDsBUrNfgnz",
  "key27": "4S8kSGFtjHUEvVPsVzgtZPQAUpYyPrdznJAwe8bA4MW5zFa1v2RWWGRHMqHsH7MyuRp2n68LzVRNcHgezNdfm5eu",
  "key28": "32Gwr9pyhTYJ3DXuAZyrz3RMD8GWQunG8V8ZyeBTdjoz2nrFvnBo8FS33WiQXJWCo7C7kdt92ruaVax9VNfJ2FV6",
  "key29": "2KaySNFuaKPhvJNihrEPKShwzu13LaonynScf6eMXA58m41fw7AZ9smTHcfKY2Fz6cecieq5ehuPrecM6jWyvvk1",
  "key30": "1BfLB8d79RUir8PX6BNgTZ83iTA4hcdSs7eqkt6VHeR4URVVwM98aHPUQJagRqVHcdNESedST6NgVgtVPkypt9p",
  "key31": "42Raz4PLZi9s7BgLKWfw2QVDC1ZfmTH4krh9H5sJ2RZE6Zj4jWZa9LJDE17SWwBn7Fb8SorBm7yMYJ4wANw7NkRC",
  "key32": "2h87baYn6gSJyGttiUbHbxH45kEsTJvjr6oGKjkrbyTU5njBenCcPgPwqm3TWuo2vJsHgY9WpGaeXQpugEvejCtu",
  "key33": "4eRprqaj9w4XcwD5PGLtaW9P9cSQiYmarbYg4uspxJjjyDhiLvdSdmEzM9Y7fwkzFn6nTuh9wmK5uNNXDyvek4nh",
  "key34": "2Ud1moLGkdXxbVgTdWuKsKguNGtJ3h6xhbYuuSsoRSXQrK7h7JHtA4Bxoh6Y2Tf9vFaSdkGTiPwYBbAzaqX8UkNn",
  "key35": "2MWRb86XAcJRqrBRDkNrbnUH3fegCW352PfPvjasj91asMYRav5isYgXhM84LXf7CrcHXKye6bMWom4WXYAee3kR",
  "key36": "5SHnLofNzVSwtG3yLiGA9NB9x7UZyFt5mdtaMnJbejARRbShJhJWM7xiuWiwUJfjHWWkWwNDej5mgX2vfMeAsGwr",
  "key37": "35k6sH2gu13sepBCEWF8kyEf9gQbayYb5GqBCkZYi9pM2LGgJqS4qMf8JBhLqtvar1FQpJYHfU3sYtUu5D63AwcM",
  "key38": "4jpCJhiyPCxsBKP6HSHymBwx85EEuMyucSJrpZWUn2ujL7eH6wNapec2rFB65s4GeWhL27FT9Swy6j64Bpsxrd5m",
  "key39": "2mZt2uwEhpa7H112hGfRsLFX8yx8pQmrpi81cBXKe78gQxsqFK9C2ZGu7mwabx3iKYA25GUTvSjLz3vPqq2A9LNC"
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
