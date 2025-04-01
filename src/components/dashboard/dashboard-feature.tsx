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
    "3wqP6ZMev9As1wNLAuva1K8qm55sv6smbHkGFGJSqWAdTY7qAvTC6VU9XJCqQz2qvo9fQa4ybf4wcMAAE6zeJwj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BXUGqCAc2U1cxEobdgkQTsFf8E1j5BNsxRVk7KfFiskg4kRwKKreLHytNo47Yd15yQXDwWJ6GTnUd5LE1cTbDgo",
  "key1": "3wAekRfgzp3rW7dWZZB5a1xMM7adUiWcPLGskkLaypGSWKaavoP6KeXXKa3rsmzEX1Z7rLneLkGKE3NFvJ4MPsQo",
  "key2": "4zSMK54d6uSDMDUHZuM7697PgmhFZCjnfZHRoqoXPxuTYan5kfRHaiHBs7Pk6oZ6cpLLVhaPNu1J26GLhTEAbEpp",
  "key3": "XWZwNJPJd65HrBraqeMG1uJvE7PxPttoou92UcuFoMXmHhdwUbSjhuVzM8J7jPdWde3RucUix5254VUFuxfBnY8",
  "key4": "2JJRtJ47YniRG9BH2Jkd2aaBw3MVoQyG9ids64ezVhHcoVPk6WqcaHHM1EG96zBy5ZUfUzGxoavNi9BLDhR68kFX",
  "key5": "hkC9pVtJJcXGwvWG28mZ8vMBzZv53JHU6dnWs8VA3kJn6zNRB854z43dfxB73tPswoxTCjAWs4A8rigUtNazGDu",
  "key6": "4beE4PB3RU13wq3biyKUWzrLzC3wfSX8AhyZy2E81ewfvSo4NRLTdemTt7coPDesCBodKjVtzBsaofbLT3V56AZF",
  "key7": "5cHXa5da6gA76fdXA7Ys4E9iFD334Ummy2vkWV2gjXmLyuMK5qc39uPbVD3UnxxJUWTWErQefavpnptkJ3k5ZB8s",
  "key8": "3ZDKcG6RBNgqbiWU18LG6D31cLxZqj91jyd1T3ekoAUTuvWJQ5XNg99n6x5srrKcYtt4iQy1bVvspGXZfUenK9qS",
  "key9": "ovWHKXh7BECxru4JPXD84URDM8duXorbzoboBHp3pdnDQKVu1Ra4JrbgocDfDWWNKJcDoNmF6BLEaxpzPzRvo9k",
  "key10": "4UjiKQxU47asdcT9Mzto5BYprZz7juxLeoacZFZUJKx7k5Zxr39b3XxEwvM8PaaqtRj6tEUyt7swM8s8quziwsZN",
  "key11": "3aLxYuCWsYCHX2o3AffjAEvL6rWfPPufQ72Bet5H4XTbgRQucC2yDYHUmvS6kCUrNBHij8v3dphvHEjShCDCafSR",
  "key12": "4yg26iXJVRVEy5DFCExYUXK4y7DY7aFZr5qdw2kbmz7LithAu6RkFuChS5EWvFnK1x1HKBsm6M2y9dm7B52pVN3g",
  "key13": "2CGAtwysHxiFEnfFg2YM7Wd67zbDRkFvatGBR9rv45ZN7jLpcL2aLnowWFmpXVxsuSmQzKR3QSgvRsP5eHtZ5W9d",
  "key14": "93nj7pYbbGPHz1Bd8dUCQkmH1itsbkW4Dodp9vtVcfHqt6DYrZXCXoMMnBwXjVexDyDUixP2FYeHoynb886kcsd",
  "key15": "3pshCEVWeV1B1edwiMKc51YQfMNR2X9Rw6x7feedCQMnxeRsJiNnJweFzwwiS3Be5xJeuZc3tzcccmK5j4XZ21dk",
  "key16": "5wcPKjWU5adkn1wf2R6Sr1HJJDBXD8LE9P6mUTfGKC2V75YaWeAcPQuV5nU4m6785wsz4znaJStHYkGbeL9e5Nw5",
  "key17": "xniC5bUCLZxZPYkzpoxBcehE3wzD96mT86yajkB2TVRuCTXKE5VcNoNAtRUwHF1FdcyjLPg2ABZ64FhmymM4qH3",
  "key18": "2TamQxJfnRfobywt2PF8ZVSjKPa8hcEan8RgRzozSPr6nvozRR9qae2Av8XP5ugmci7TVUXCoVAbrSrNaDmjk3q8",
  "key19": "2kRddB4cKieJB8duB2mSkZ4quNEmnRMtLK4rASFgGuq8bNKEeuLx1Q3YVd1pQeGB1ESNi7uSmDuPfhmvtmWg7EHd",
  "key20": "9TiAKGKCRpYeyoiR5ynxgzmB5FrwrRQdNhbB3uvL6DgsFNixe2TxhccEVad18EHDeFz3dMBi4zi5wo9EsVxuRTd",
  "key21": "5PxMMJFnyomuRCmuj5y46fVbja8wAVsLXNXxByQKxAQi5Y979nsxKkA8Tg6ZzYJAqR62A6Sk7XNPUrrxtjsYAF36",
  "key22": "KWrW3Qpv3sFNLUDCXuTkwR8LKY6EMDPX8wLU2d2wFDWFiwgxREB1j3NdfhyBZSaF628SrBTAqgySV564mZwwGh5",
  "key23": "64pJVq7rKvnPaVML6zGfd9DGgVDNsvufYKY2iWjsKnj73EfD7FVCKGy8Aew766WP8rTFo2LdhnkScEnkhMVjefSH",
  "key24": "iD6VZ8exW4MesoQgDeDzCCKKPMLns7YaMpnkJB2x43j6arr2pUEZQBdESdarw4o9yqsRMq9PbhRr2nbNqsLYipZ",
  "key25": "4XMmEusd6jJusr8rYcH5A3uMkAbgdSLhLwqbBS9Xn5r1qiHSDoLTnvhdPK7i2rCHH4fSGJTh6GxPfJTo8hdYJpNj",
  "key26": "3M7FRQEJh5egPwXHyD9eGiqH9TusbLWwYYDZVzoKiN38b4CcavpoJ9j8EgmXFKB5MxeXrF9vKhA7zNRk1Pj3dLqm",
  "key27": "5GqhWGTLo63Zc58G4LSJsaPfkQHisKMXwi9s27jbMugq3KfFdA92tuocThQCLUnsCfEShth8UaTDYgqh9CbLKQ2r",
  "key28": "QE8KwG6aGbDXdRopD4yrnVyAsfMZdMkLtMC1JAx95PPkG62jF4jPqQy3UnEd3yYiup28AqRV6BCGhgdd5vWew7N",
  "key29": "2eg2nGRYjc3QZceabxnhegGMGex14EuYSg6meVdkPaBp8ryHKtFHUhayRCzGMyiD9oJwFfU136sEqsTLrDvzFg58",
  "key30": "2LpsrBiRt4Fnegic5ZWSFpKFJSiqe2jPM9QM8MtyBjzpiRpAW1qSPJ78rRpNukn385pHesnVfanoyYWQv5gZmTG",
  "key31": "3qSCmJrg1jyjxoAck8rPdRjkzq1vDMf5BoJG69fuua67gxgwDMsDeT1JtbVb8c5WtzQec6iHq2JYfafEv7Mut5PZ",
  "key32": "49u5pzSmdJ8ZRAndQLnpbdy5ussvYdqRCvh9nbyzinJh28GR28gfpnZrLCjjAPQM3KCeNuXquTD7F2g32jCC6xGD",
  "key33": "3KSno6eN7tsjPBt6nT4WqfBJBSfWmyVBnuACVPSnPzf9d6qeZBQeU3bcCfihKxGA59ZAMpYHs5F9oQczknZEkSTZ",
  "key34": "356mNebxaVWtxU2VJwdp5yiTbMzMcaajCGaaW2iknJS2GKLJdEXvjyPLwvGoewyoTiioYBxwnoESjzyrSCoHGpVe",
  "key35": "2oNJ2KTyUR2kx9cr67WxavFPPgPz6o94NRLvM4XBRS9aggdTd8FQCHm3LHgxVqr9qwfF77TZPbefUa3Wb6MLh2qT",
  "key36": "2mSGUUHz3umaSGDEHKynZRWPEFbrdshBipE1bpbKNwRxJLs388HocnJLKTbPNUDGu8HQowJBZD8YTLTv6xJuxHwD",
  "key37": "2wyikv7sP5p2p7eaULTUV8i4pD7o7ZXLmEGzZjWEx1qUAGSEuFtstWKe5YKBtAMC518rJWPopEDTSsj7gtzH6Ww2",
  "key38": "3B1iWkxRHXiGTYYouyH91GRD2cJYWzsRHWBxA1ffgmnh9Bs56s3hshoTwuWZTe6UtRYDguwDMksrsaz2qyU4SJYs",
  "key39": "4pkWFR88bqWJnUeJxfEXejbYtkWCqM8JtzqJZ5egJ6N1ySwqP9nKjCG6cUtfPHLCZX2MWGNv4Hv7imMyFSsb1eJi",
  "key40": "3Mka2QECjjtPGHxUiDqUTxZg4vaEqEZ3mvxTxzsfCz5Fdrwda1VqKqak8AVGYB1qX8MhyxsbUizUzZCowuTM6fvJ",
  "key41": "3tSD2V5LyRoLhgveVtzVuWDHTKZNoTznNpE6Ym43ksEvj29BFeekbPJc5vR1ZHAchG1ZJaMMXwY2T2CrbcBNDPLF",
  "key42": "2qLnDrzxiAYVuzhfqE7rAB5aL7Bzn7iChz51tt9cbvNZqnRLWy1hj59tb79BMpoxvUXhWW8XVUMeX4Wt6TLRRmfF",
  "key43": "2cmmfaZAkLQShJXkiUishHtkv8Y8VLRzyUR72n7rgqkac99yh5dafgg7psWv4WAjrKQupCZGN4dpBAjp1jNWwbiM"
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
