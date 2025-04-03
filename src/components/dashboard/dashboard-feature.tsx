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
    "5WRrxYF1EWhnJfrLjcTwEbHTJpsdqvX3xodC7reXdgEQYgTwrLCFTrJEW99459gEhaaUr6Wpag66pYrjmd9CJ6pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HGG4r3jmhdsnnv7zuDvxwrpkcXuVLHg2P5iSoj7zXVFbw3w7gi5kjmUB8dtPcbF9oKzPqRgifTgarNxfFAVqP1L",
  "key1": "5JFu2dC8qm9N2ucgzgbvqhPryh5oucqAMx1woxKXYj4ej1whGW6FYXGotBsaKBynP74GGdvCbre2Qk1gFc1JyeXY",
  "key2": "5NtJeNiYeDeKUaoTHJtMeRgmqvPN1Eh8Uoj6ek4D5YtDAh2wAKF1ZUmngP1t24wfWh2on8fjWLujaYP1DGXK8FPH",
  "key3": "5YZn18haExu1XpinZ1ZmGJwioDVF7ysFpNo7kX6tXejEgvgUqxk1ZctYBRAgwtvJ4MVSKdV1DGJyE6VSCxg6TC2",
  "key4": "5RqUnu2XNhwjEjYK43uMrjpTRtiaNTQDRX6UkCXLk1UeTRqPYwAjs3BxT69nHXNCmKCLLzE1YA3deQuFpmtBoMNi",
  "key5": "3hMJQuyYpwU2C3UnvK6Swpq3fLWF77UijFS3CJLKX5X8SkWrpBBz1HTU9CjbvU6xM7Qwgz7YXKRuiKA9iocBFkL3",
  "key6": "3wkZjpTagGp7xwHTqtr9kgMsdQbULBWszb9dDQt938P4eYZmVaT7SCZa1fZX9XDBUYX9DWbemVSrLcx2uaVzv1xs",
  "key7": "4TYM74biHgsM1bTrgfxYf2xAdVWR9rF1np9VyKnRqcHwo9DUABKt5czLo8wNJES3G1UgFmjT1pjghsZB95ybbA7d",
  "key8": "5jismdGCpRc6jLzbprLEwemNcPjzbizi651XF8fqdHbebAkDwo6sXoh6QijNRqG5CThbytgxtofXZQMQhRCyzwkd",
  "key9": "4iqz6NDgk4TLAmTLKjFbW74qfTEqwv94LNhJ8QXBRntGJrTQm6dezLHuWPg4JiRCtS4CiyxZFRCc4tEfXk5Dcjja",
  "key10": "561BHrnLohhShyfxvRDERT7FUn37Vqya1X1iRgP9XnnXjs9pKGfDHXcyrL7t2RbtBoh4TYxgwfc5jQ5m82B3SvP7",
  "key11": "51AVWUJeAJ4cwXrRm1j9v6nCj67qru9jYzqMGM2xM6qrGfkHH2pwgxR4SyGPjUCuFK4NsmGQECbCDEvZbycVCJZ5",
  "key12": "5VJ5YfW64hQyHkZyYJaQn56TLxNu8fASaz2VD1E3e7tQqs1DjmKhgog9ovpLCuhBEw54u1uETDiZp2t5R1HPUN4t",
  "key13": "3sFbqUeXtwUW4RdRMdXUkmouzb7aVaKX78YHBdP96jUFmrGankHAvEC2MC9APqEnbgLvvitkb8DEGdM4kX9azJkb",
  "key14": "8MuJszF24N5qdwSHqXRUzvgmSVZTwz3BtuogzDcHaNVrLR7Uw7fnWYvpwfPyTztkMd8G7B7PTy44tMNwJoQyzye",
  "key15": "2i85yEPeK7Ru8LQfEyJJAqBV9ed4Bjp3cT3jKpZFLyWFTiqHxFYXNwmtzhZ28GFHjK9huVpVDTD13Ujs4GTX85CV",
  "key16": "2otzDCnGMy7VMBZZ1S4KYjgiHcPzs7S5NXx8ZmzZ7ix35yZ98ZmEmr8MLWZ9pom21sX5Fyvq4bUgk9jPNVoNQCed",
  "key17": "25o1tdWCUsGeWCYZsGgX56FvFN3GZ2P4thgspBbRYvMRVPNNxqpdeksQ7UxWfhpmsqfWaBTw57Xw87SAEJ6H4VQn",
  "key18": "wZkAY4UFswmUpssY1WnTZesdKLsFYaCYDHUiKE7NgfmvhxCQScVucfWytifYPLd8TgR12ErLfCJNP7EV5ZvL7wt",
  "key19": "3VJAUnAfFPqJnvWBef3Vv1MUyZqBxwqxStQv8Ay2uPpJsGbD3FXC6fchpHAi24KdVSWZhjo7HsEAA2AgGQS1bYNG",
  "key20": "3rZzS2BWYqkyAwA7fEHnBsKezNxWD3v9wqJc5dMWN5c7rDZeiRnnnDZfj9BVvfsfKTKuJX8VPfzENzwESJ6ihJ3Z",
  "key21": "5bVodDkLABnDaF9cTqMcU4iwacRYfUYCM57685ogzTFf1CjZ5QeuEaLJYifkDvtVTiAAV2wacRLhxyZxmF1YhvQh",
  "key22": "BqbusQ6LPLRKg1gAz2CyAadzcyh2wEeDyFPg4EyRWsWUcKaMEoMgSueZsbDFAnXhEphRPGPwKL8mhurxM88hYBa",
  "key23": "2aDhA8nRzyuMqmPC6WiMAa78tC76s8Pj4Yq7RunXzwzLWYLjHUhPX6NhXpd78VU45akWZG7ffWJr2JkwAg2fSnE7",
  "key24": "3nUwiG995uGbjZf59ecxyqV67317sgL1HJChLJh33uQvDmRcmGevhJjaZAzLyit8efQu8qnbUug6vvcAAXKBKn88",
  "key25": "33DzwDqNWCxcUe6rbavBftk9psTXVvH3pfYevGqMdcEY9cPLZGWYS5jGawAp21nn8nw31mK2mYfkB41MNYoyUFfa",
  "key26": "2YqK9PFTrRfZF6FAfLgvaUaA3rrtPKHm4uVj74hzifDPmNuWVpzkrzKoqU5VCRgre3u5aRHxn54mWa4nXwH9xrDG",
  "key27": "4QAesvmBVHhiN1NHx1HjnxxYA82tZdcfgMHgAtUpYRaMLdhsMYmYR36YbduA9ik9aaP23FFhxMhuJeFVHusvZZeu",
  "key28": "4AN3zykuW5u9n4bz7kknp6ohJwUS67UnDzWjAbXhYAEZBZV61DNHc4Ln3b5ioJLUGEhKDyy27FAJFPuXyUDzYHEA",
  "key29": "rEkZfNBMJzaCx7t84BQ7Gozn965qSpXoqJ41mWtvnCPXdxJL2HCauuDTNvozEfT8xV889fPubU1oyXvLitBqCXo",
  "key30": "3HWKJ5WjN1ko3jr3UZFSYLAeWhKgDjjmsB4pL19Q9Zd2Uv5iAyortyw3ink1y7Scj7SoLwrXMtnNLkm1Fp8yiE7e",
  "key31": "3oY2x44Z1uKSv5VSJ3iy1HPHWqXnRtVJtDpnDL7HcgDjWHtxaj4UKaAbrgGWLd8pUWzu2ACXKQLBE9JZU9UF9qga",
  "key32": "2jURqhEbJv5m9izUBDujwZQ1Yk34CV6hxBBTDvBwGGYm7JrJL4uUQwkMJBMgtg9vvo6h9t49xL571gFPxhbkrBWa",
  "key33": "2YJcyu3hzqQNXpSWmZi1JQm6mVvvxvUbLuSN9R6a5QWUYS1d6NjhY4uVUqH9yZApKtqRSkUv2NWWtAH7hbr2NdnB",
  "key34": "3vSAwMywS2cu2NAtucLEaiaxxQaKDPvJsvtiiZnqM6xcHViNo929uzTS1Wd3xd8wh5NiBPPukEbv64qmSDgGYTCe",
  "key35": "2TD1CN7tXsW4YE87iSQcWZF2kZ8YPxz4efM7tWP8E4zsD4n6zwuhU2TY6TXT1SP2mCPL9CrWeRhctkY2TNhWaSKY",
  "key36": "3GJnaNs6npD4NHAkh4QDGgZ9jJV87ZdmAbFtBb3PJPBWUkZkiPEe7k29saPWzQZ967XMkwPfWSxkAu4V29koNaEm",
  "key37": "M64cnZo49yPdbLKJK9x8hsTo1zDhpPUwfgTP4s1gPSJnB43hFph1yFxQARUCbGqDdwii1e1c3MR9h1GSZe3Rtv5",
  "key38": "3gj6Ny3LE2T23fU8WZDbygSwGvdL8TPZTVXKcen1SRpeavRHLoMuSnhgdL1kxyu3JiKQ7rCZas9zNxmM2nbWfgSb",
  "key39": "4pAgDvt9zE3GwgDcbr4RCzJyttes49dUDz7AM1eeDvvabzWXTuTnzmzQUiU8USfV82ztN3cG5uVy1gkrjAU91cms",
  "key40": "5f9ruZ83wQQmQjfJyohVNQvjK3o9Tf3KBQzjieSR9MRtNyshHa9hXNCRHN2LXq1HfFJDZDnEXrkjK5DWF9pDLGg2",
  "key41": "4c6dVZnNRf1DDdBDT8dqsZt9jTYTsfdy2rvjgjjEfK2SU8K9pPCdPJsZX5iiLTUjTwCi4bP3idBGau1rLC4iUuZ9",
  "key42": "4zRb9rjip1g8ZLePUeffXE6kx4XAee5kjoaohdgVPEdZcL94tPpCKqCsZtbpg3kAandLkpcjLnYDr9o7xQd1WrL",
  "key43": "31d711QpWkB8ZZkTSUMsXnyLsatbmMfwdWnV9gjuPh3Wqe6dR9rznKB3MaNcD463a4BcT2yCKWnqutbiAFJtU4xW",
  "key44": "3ihG6nVbwz832dPu8Bj5y9pwoFHu772jjcmK5PtjMKdZbEVVs9Zitwa694FtZt2KmLpukgAVrnsMr7hDH5qRSkyr",
  "key45": "612FWEpTCz71xZ2k5f62jzsof81caWWMfZc6Fdp2qmTDsreyCd8oLj18ZdyYp7bsL92GrQHLeh1UTtHs3Qaak3ut",
  "key46": "4Zsj383GrXHS6zthBircbZUBDDWGSz5E26tnHbVAH7HE5ggW3L6sgb3NSfoZPXagM2ZfHEwMpBMtNBKByXbaFQeF",
  "key47": "5Qx3X8Zq4ZeZ5KH27M6te7cCzbvkisYehdGJL2eiZstjHnvrHDpU8Gwehxg9VUG13fi9xkTqFHFtZCzXVmwsU1Ku"
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
