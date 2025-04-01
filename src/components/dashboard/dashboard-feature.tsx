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
    "648fFmRZaVrNo6yVwtcKNd1n5k3v2UMfRD4jhcDqTxiS4JxPTxU3ohFkryQx5fyKjuj45tMrnUBG8gesrLWi2xQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iPwT6zkJPt5VMETVFLZ1pTetoJDaej3z44HdLq2ViaWLd1fMVRZbgNBFVvNgtwQZpzmwaaKSv2N1BH2h4P9hLvB",
  "key1": "36E5qPMahEY1dHhDV1KuVrgky2thvND5P8nP3JEZ4M8CZELXmxKUhbe5dwBxnT4NcMUfy5qXib6QeADEmXxZcceg",
  "key2": "YPjcfe3vGgwaoh2gVM6Qi1fQELxofsKDb59nqdAKULDyF2ykAJ7tV5VzhtnHUbdJa7CBkmV3AboXK9TYVBb5mup",
  "key3": "3yQckoPLas8XDoLz76YMyN2ZW7yr9apGr5MJF8M6mXHNUzyyfdrLpE7eeFpCoGBVPxv4rRQnGPFEjKeZ7zHBQEUr",
  "key4": "2HHQemaywkm8qvDDwqXY1fYVnSXksBD4aeHWiUta5FAayN1yLAJiV1ZZDtADCjxT1SD5na424WQs2a2FPFNf9i17",
  "key5": "bB7jwR4kckmUa27ecYoH1ykTdWtQter4n3qSixrEyPXkLNvzuaG833m5AXKYa1n4deCA32ce3uv7ptckee7B8o6",
  "key6": "5WCBHRuFGQbQd7A2N3T6t5xUgZztCc7Zs5ksVtFJWHYhev2iM1obNXirHDEdFUDQ92d4XoQVJ6qVVaVJbCntM5Sh",
  "key7": "yFTipafk2Pq22wLpi9A1k1iFJwQ1XJkphwPK9b8gKPy6pKLVxtP2DzoeKZozc6Sd5pqegdvhPP4WZSV3HgMojof",
  "key8": "2Y7hdxTHjtkMY9pS4J2k16XpZriSpZuWqPA9D78m94xVKFZNmpuQtYtnfHWAYEd7iDDAbmdXgBKstK2tyjRWphBe",
  "key9": "3TsoD5wnjrKVH2zJwnZkVn3Jv4CEh8E3NY4Tx5VyceG1HkgYReba6XsUxBSgivLE5imKAG1KAB4cJ7qcWVUj52Tq",
  "key10": "6mVinGMbEZ8J8XXAcApd1L76d7ND5TKQv3GwAYGXe7bkGPZeCJJ3T4qJYMmA7ouLxFpoAJvDTbBhStZjsh6RAMB",
  "key11": "3NT9oedeRbYYX9f9rMJb6qS5bZGc23Ts3vKonktsF31DiPRvfHoF9fcq1eivJtcZJfiBKav6Z5bYCmQkoK5yk7PV",
  "key12": "66btgwmLqcAcFGAX2znZq9MGXhHocGei9xuwuJeDWVD2kTyvCisQpdhhcZVerbrJjtE1QqmNVQUEweCExFDdu5Yo",
  "key13": "4LjRXoBczrVKaUi5ZXmhzkH4r9G4Dfb3RxQ1gV4i62YaEj5TcZc1kgtMk9swK66XBY76L2q4beAPhSrPgwAa3J2w",
  "key14": "5NLfbrVfhc2CEa56FYYnKiKYSSDnvtDL7AU2VseL8ti7BUapcH32wUPYJNzfV5VwpV2xUcADbx9aRazuY3apVDa8",
  "key15": "217P9M3H4MsxGChFwsCYoeoBukbohRy3VgXuX2V1VyNkukKrfcLKduy2RNkeLjrSFbbkajQEaVK5YgXaMnK4yT9A",
  "key16": "2owbfUhZamURnisdrU6wjfyCLEjqhekb2RPQUJNpavJCTc4VKggY5WQZerqNnmiesZW4ErAdpFNyTu1ibtviUmoW",
  "key17": "2BDD1Q5h4SxG75qYBx8exdB3QCkPRwGYAevrCrGkkoimW5CFRJYxUPHfyLxo7cy15dnSY9T8dHFUbrfRWfxNEcHH",
  "key18": "3FD5Q3K62myPYNYu41Rw6bsWKZ1X34b2PATyZCa6YT7Ag8HQd7T2hw41LGpiMive3Vzhqbo35zA1hgW4p4Xm3W7m",
  "key19": "3BupuX8j7Xy8zPXUfzmfVf34FaAB2WjLvHFjS3jT2zZ2CDh5E498LmTjQZwHYFfNh4yFSyabBmCNhH4qcv1dYV9Y",
  "key20": "2Ri9s8SuFUFw8WRjUz1tsKjZVswfx6mivwweCVFUnV4p137iA4ZNhkFdbezcyUokVcjLyqGBUiSxCXHok2Xy2Tdk",
  "key21": "ZVmn7eJnC7XxeyoGpXLmyoQgDy3Yx1nLws5sBWRBdCpx3TX59yCUSkcKmYX9g1dRF8YuqtAF1iojv5Y63Xa3Fae",
  "key22": "7yjZ3aBtszb4wcbuqvQ72iW349v6biLHc9SqGwFCAahVHYyQmVsYUUby9CLofoaSaZHQXawcWX6Ue1UdP8Stdja",
  "key23": "YNAdsP8EiimWBs9SnrCZBxkxQihS9w3AeMj7ebtL5JxehNRDGejmviY8p8yTJzh6QrsDopNEvYQ7nARgPBmjhE3",
  "key24": "Hh4qNTMY6NBSM1CmGqfVeTptxjYcXAAf1QxoT26o6STDjKjjsjA3BDefnV6KvzeXAQHZ7Snm4SZuVHdBsx35zcA",
  "key25": "4kHfCtranC6Ahp1WEfwAoeYps2bw1D7Zd4YUUJQR9GJv9a57cehg2rX7C7KygUNZNZudhws14edFAWhj4hid29SF",
  "key26": "5SmH6pb3kd1u375aWQSQvVJAmkArSe6Z2MHu9kWmiHwyw3nt9NCwRkZwub4wKXWZvc7iaCEqbTEBGq7tKjDaNWmY",
  "key27": "4uthb9pbyER17Cg4TYgVnQzGBrrdPyq77nCqEhmqkbZBbkk2BAKYdRfXc1RkwBporkN599CiDjgFyfBDbB1hzN3e",
  "key28": "3c7WVHfUNJVTdnke3Eee9GbocPDCxATvKvd9LaiXHbuaPd128SkaHVYuCsF73T561xdDkGLc69kP5NsCSdbKLeZx",
  "key29": "5NmZuexe2gYu9VvvLuq6ASgxFKpPcE41o8yvp4D4T4ewuvJfLhDhEwr3UbmVpWuqVMvEPZBhh3r8ES4guajjruMm",
  "key30": "3oH4W4u8py2jjJ74XsCBe8B3CmfMabJLuaJVyowp2Dtq5sD3EyE3YgrZr8c8uKihN9NnCpMJJJY9zm2XZuYiisMY",
  "key31": "RT6SiVdCLTAFuGpn8gimW6uJMfwCSUCPBJ1Ze4cw23JNc68SLboxmnsN849eqraq6aaBWNJ9bLD7vBdjNYio4Y1",
  "key32": "4GSLLU9Dhmt56KV6kQ9kWBFLZizQxWV3WzXsksuSAA5XkSWMDtBakNTbwQxB4yVs1d9cbQPcnC46hV2zw94H2tEa",
  "key33": "3zBXAfRJfTtEudFJWZg5UhAmgubyG51zHswdPWgBkppLKiW8eMxsya4CyUNZM84NDNywD7JwPBTBGyxoH1ndB3WG",
  "key34": "4vtNVnUF8xThSYKD1ETTJcrVuMJiHecwJKPAKVyrfkZcnKvQA2FJB3EDvXyiir9pWWRqBqmYGX8HpwtTBtxuhJ9F",
  "key35": "66tSVpEHie9vaYcjhBpD211CuB972j1fsqnATwGodereyh6x5DeNLUvZopthXwSWY2Q6HXgPkTA25Vu45WC6ZRLY",
  "key36": "5siWET637t1MLDCTA3GoAFGytLHPr8ZPHrHnXbeRAhf6YY15YyCpcnd6QbB2PWbP7Hr6U8x1e7ho3wQYtvAdKak3",
  "key37": "4HW19NDbq8o9Pxqujg6NpgWXwjJFG2Rj2doyLHsaFVaMtnfxAt5SscrEtPmaggM27bre2ki88yQ9QgMhJggQzkga",
  "key38": "5VqTJDhp2YQ3j9649NVjJYL5FpcnJFtB2F1ivmLJsTzFKhvYjC356j9UF8KUrhZfPQYkm13cy7ko34ZKTEjiZ3Hu",
  "key39": "4tcPALJyJxB2UNrnPn1j1yvXW8XDFFKs37knR9tarbQVMvFNVkoKqCWfX4Dcb95rnA5LPxZmfq17djhq3gTzraTP",
  "key40": "2AAFb72MRDmMEkuN41N36oELvT6UTj1bcsc1JmnGsDEF1JThPLfiSTPGpTcHkorAmPuQyivewQB4EefHdjYpX9s1",
  "key41": "pCeKvF4FD33FXHY71uHKJLNAUuHyxTb9w5iFjWX9xk1eZyR5aWJ8dPqYrjEgMD1ZhGnswZt6CATqC9WMz25ZZvr",
  "key42": "3fCopG919qh52GnyGZxdkuPb8NopwSNqT39pG8ftEyXoY3P4QBYNjHHzodZJs8kUH7y59sN8fwSeCsFfcGFynpg1"
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
