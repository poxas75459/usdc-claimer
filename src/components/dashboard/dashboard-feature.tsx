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
    "4mzzyf8CELFoggwp4HiZ3xacYqCNQnHWy6176yCrNFiqTk4M6EDvugvp9mwFVz8i9m8gqzUmLPeNhDXdygbzLhqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dhUX4vVmp7xXYrUqvanTa96VT8yEt3sy4Q4jsUK24dVPaEArqH8qPC1P9UtBYhsHTAdjA2nUJUN8ThvYmSfedSP",
  "key1": "2LwHrbWQNY32jzDz73auLWireuZEQ7cEgXJdZJ2BUeRuvjcHRZ9McGKRjYGJ17Q54ZPFgmN9tKA7WKWA2BxJ1QYS",
  "key2": "5Su7ykKXVKt8zX2pN142uE2oB4RJhqRQpqJkZ7koxnrCKwqavgeFn8BsLPjKGawW646oxsnCYGHedoaKhPoknH68",
  "key3": "ETUtR8skhMU1DkCvHWReHp7hoMBNXbrS7wzAXLcp7AeRkV78pXgjGQcyUQk2FRTKHGYw3uwmkZMqq48EQpQiBN3",
  "key4": "4hh2JvS9NVLUnUpdJJ46qVgiRhQxYWqyN93z6im9CbHwyKHNqpx5VVvawy7Y19JyoN7FixP448ZsWuHxG4x88GRH",
  "key5": "4LMNtEK8KhwoTSBL9sFHW3dZdDQthK4LuDjEeWoKQgD3sEWWxctEquZTAEniwA6bKSRQgR8ZSXX74QWtxNLCYS2N",
  "key6": "3nxUQkEW9QbikV8CK1Xqx4oTiBwfJNDQrJJWcsNEkypwvhBcTpRFbAqLYBfXPjrQCA3R6pPr8LbLLSMGD8Asi5hu",
  "key7": "72SUU1opLykH3NUVCF5Go9P8MK7SPH8ktHhhpmrXQkv7Q8d2QfXaBCNNTEi17cPwbDW9SbyjenC22iURb3m8Rxo",
  "key8": "3zMCppctHz9eT4ZkvYRnhhCqtUxdk7A9MxHzWdV27EhATVWBu6AJyAcxqhqKJATkvPL1dVMsC5CsKDKcznJuMda",
  "key9": "568jKgGqstZBSeL4fohJgKR6Qd7YcVkJJR8WxvohgBAJUbYv4Z8fMPXHeFNt15UTPimATpvvSYVTebVETjoWiMqL",
  "key10": "2se8ZsTWYG3TtdbHrTyWVYE2PeFGpNh1uyrMAqShETnuZiaVnq5yoT2AkVofqPcjnjECUfgCPks3zxDmPjmLDqeB",
  "key11": "2tg82jnG3uLyBgH35AJPovNEuhJ3EF1smHbFfoPStKGQyQ6Tnj5r4vB1NjYbvLpoU64NeqmmcZYKXpE7Bae9DSGG",
  "key12": "yRPSY51TS5BUFAgsXKLMiuVwEXvu4XmKb6Xi2fueaA59EKKUudTBjFEC7zkVFP36JWMHxvRuTywzjMkeabsMC1M",
  "key13": "5jPXw9d8Lf5XpTQQ8HYATngVs8fVHfXZnEEdXUCNZFxVQAggxLyLze7aeWg8sHcSBpdgDoFC8DHcxaPq8aAjcotb",
  "key14": "Rjnt9SXSodNxL6bqYvj9sa5Sm98ifW8Z4XPevGoL2Zm9JpaHfNo4tCEvP7fiA2WmtJYwDU2PxUgXX56wgiy2tFM",
  "key15": "j1LtJWKeaSXaHbdpwhDFTXBAz6o5m6b8eN3Ny8SxcgS9GS2sQfHvx218z9UNyuZayrgs3YtHJkAbCWfzsHtXsto",
  "key16": "aaaneANHbEKM6LJuxoikGB7AMvTKK1X2pRUfPc2ShB1NmwUhE3ygXRUEA9dkWNtcd1txdzp1bibUct4vPHgmMRU",
  "key17": "WBcFs9HFyLqXWKcDU4ezUkP12p7WXoRYv2B1EQuohUmy9tL9JGaUMAYYq1cMwm3dcBH2GgE9LmAbzZVjo3bufhC",
  "key18": "61wX4wEsVZkY2SiN1FpJq9GdGnLQAnorTfijRtfVXRqyLxwrhCENkJX2eFunEGW2DzcTB5WYQM19bCHMEProNQty",
  "key19": "29RLw6zbw2q8qRkTCgiaGqYHjcaZfAUgCF71Ny2tmumbWf6kregmdb1XArn4SYsDXbBcyMrJHucXinTnExhbemV1",
  "key20": "4r1KmThSxDWYY4oz8uudCriRQqym449BFe2279uiJ7XF5y81G9yLmkgpDVstDDhmSSHxkYm2yPmUtT1qvBjv6YS8",
  "key21": "2wyjFBd61kcjgDvqg6fLwBUfpr4tELk7oDXr9GiQHQ1qg3jJUGitSoj8fqQmJvMJpCv6dwvqUN9EUi8CF8gybRKg",
  "key22": "3Hd9qyDUqy3CjFmv2SHpbJ9xEaSH3QRNMM2PLhNHT6Xoj2FE2qz9wFboTnny6mWKrniKsLXphwXZTfbMVKgg5aD3",
  "key23": "34c5WJ5stNGuyJScLL8ZEJkSnuqGBdZihpo7UmbgmUA4C5a9xmDEaepJUT9juaaPoMXzZTQskFq76Fz5oGxfiEcg",
  "key24": "55CqUbUKwRVKXQDibXYCc744dT2ok8e9qpxDYyVgsE55Lp7jYF8dBpGgqMwtU49rB6hRupYD9NRFKhQXnHcV5mwt",
  "key25": "GNDRcm3aGtZeBjgFi7kLD9oyz4xeHgSLynFyoPTAaTsWJ5cHs34SG91839KpfTatTaQvp9rUTH632uPAWwY1kQg",
  "key26": "4K5edMc6F2BMrqL4a7sQw4YrvjLyRWyCxYNFhZdJ2W3W3isU4bY793bb1r3fFpeAt3pco2NtqdoWWbEzTrKBpjse",
  "key27": "4fuoS1t6NapDrjCJq7SJPjm3jjDorjHQD9nnm8xjpma9vchACXtLQXmEYjTwretkBkUa3L2f4MvjiDsSKZ1chc17",
  "key28": "22FqmhjP8WgETS1811rNMNU774QNhA8x5RSNqYEJVd9mQy4gbRGoytrMNpCjFrL5okB3PZAHSi2ZbXX2VKohENcK",
  "key29": "3tULQhnGcKkFDHqfnMhRXTUfWVJtqZv1b93AoMgva6TNR8ncG2HoLhUe6BQDVvdCeW11np6zbbVZwUGuC5cw1zXU",
  "key30": "Q9tRSWvabPP4pYLg8QqACpsksaM7WymwDFHqvYpdE9sZphfXHHpGbVXj52BCxNyxaUcBMT8GChb3Qze9eyjQz2y"
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
