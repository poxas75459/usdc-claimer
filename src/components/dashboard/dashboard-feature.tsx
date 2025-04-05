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
    "4kBcKVkX5SFTbUyzJphJuJ8KceBjuy3LiHQd3cL1XQycvfgerEKbrPtSALM6w6ptrqxcaLvz8ecmnhQTU2bFyc2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E8Cqo94aeG7oKos5KwwoEz8SMMryAeH9N92cAfMaxrv2J5aLR6KxcwVET1CnK18cZKuvoJGWAYGTihr8GqK1CVE",
  "key1": "4GaMjHX5B8ExNNMc26sbLMcxxbpTg7HraqQsikuDrAvJrGWbkP8JSbCx7QyjvLnNBEX3WeF7AGa6m31AuyL8TSz9",
  "key2": "64BxQuguD5cWKwFH1thriodJdNmoZgN1KDcnUtsiLAz77YCPrGiQMQpq89uNeADMfUKsAMyisQbbwnXEqGN2azRu",
  "key3": "3BrR5Q7nyHB5JFjQQfFsBxpoJcbbJmrfJRVWpo24b7pcBpyLv2zdiHcmVN7cSLtkHkqKnDdBjC7uyXBofH5Zs3Xv",
  "key4": "2N4j8yNfrLgTVVCmUA16gchoLvUCyjsXVHUgW25LUsrZoMYPzcKAcnfzvAnGGJqfXfpkKYgvdWBova4TXtr5spHL",
  "key5": "4N8fo3EuZvKF6niYH1asicTZLTmbU7StnpReya7QEe53N3DuJjrRVQBM1zX3AjN5BioEhpk3KxGunQMZyQFWmzBk",
  "key6": "3TRfDMmPC2ZYxg52pmTiKRMQHXjriivn9c68txZd6ZSmqMbkdUsmJhppwkTFDrC5hzBWoUSwDWM6AxFKN5T3DEC7",
  "key7": "2asyLhuXJuVdWUMjpzqvRLkQpHprJCYAPc51SoMU7qz7DizScYUcmJE9wvDMjMtgyMcYrkkzXTHzy1QFPSqtjBgW",
  "key8": "3M44dZrR3PUNx6bp6xaBkHQNXaT2nTHFdtFXiQS8XJV6itPXC7ApEVqR31K6Mg9im97JydB2gSooiD7rimtdXFZu",
  "key9": "2ai2c5LCSUa9xjt23W2wzQdruX237rNXjpGMbVz8gn22CURHbCNbrS4z2Wsir3GVyLxJP1B935wTzFYZKt495ubs",
  "key10": "5eh4aHq54u7YaFVEzsbG2xzyrL51rP1hzeFkx83wCZQwdkkCasDXkxSwiiJVCBdDcXm17Z4qYvwDGcLC789DG1MK",
  "key11": "5EpZWcFFbTEiRzj9o99MENZvwHd5WSQ77neCcQkFmRoVuvrAvmcJy2kHZdBVmDPCiX6swP6AkjDoa12hgmobo8zL",
  "key12": "4bfT53dPGLSqUA7XmJoJBiDWR2aYFJwLNCRfJ9jd8oZZRwPuewVZepUb4sWwXayzTbJkBg1XtEqFvcdU4HRkugi9",
  "key13": "2gTq2nx8BNNZH6pdcJ7wY7Q8uLWyqSvdZnF3F4WrSeuSeNbkdcgoe1TCfUbLFLYjgxqxyuL2F8AJhjywXhvdPSV",
  "key14": "3chAZzKLdTAQmjRZemt6AXy6oB2uicRNnoQL2AowhZAB9VAe8Ntp35pc27Tkz8zUG7ELGmLfZKRq8MbwBGHJFCvU",
  "key15": "41ucSSexWpsJR8r5T53FpEzijsXyvrXaHBMmscY2pRtfmNqLGMGk7iTpmMkLLHAh2GNNS4bvq7NZTMQNPu4jDnNL",
  "key16": "4978t2KXUtxpm8PEdnnwoM4Cs55tvSoBMJSe757B1ixU9FQmPUo8qvQsizzt15Nq87R2CpgQUQgXdFvWcjyJi4Fn",
  "key17": "rFB7QV2PuEoishPPAUjMJHTRDQdcpg5HrdQtSiY52n6vKEUas2PUvZeTtYwjtjmwTKVFCU4u3qtZ191BtGMoMPW",
  "key18": "5Yid6RGVJbsnj5FhDFWEkc9m1FoHwQN3TzbPveMcccxoK78ofKAZ9vN9rLKasRU51X4GErbd5EvtZXCyrUmrU7yP",
  "key19": "2hBCfWywTt7xVWLHTPxugdUcotJbrnQ272VhwiMPjpkEmkSQR1P8uQQUKPAca7TP5PxdZZtJFYLtwiyshsnfPA8C",
  "key20": "3JqHCbgnV6MDMqyt3cJAq2GWAyPpNnWWP8EfR3yFi8NScNgnCyH4ZYGCEX9qW3oUqr3DaxpUnsMDQkrLVzMgB8i3",
  "key21": "2VkGAkiWyqsHAdwSzT9bW8Y62h6vYgVpNDcHX8a5zKTBd9CQHzeNdiKRivAzQz8F1m9N9Xu4pGUK6eiKsvWgwxtx",
  "key22": "QDaMkbCiwaCLfmS7uNg8849VoCn6uVeA4TY2vLWaSof2v36gKtmn6HrcDfTh7ruTBeLDMBVwGYcfUocvaociHmT",
  "key23": "4xfF8gStJZMNfS5VmwaC5BcLbYg99uc3FJGfYHTNf2YTVpw7gqSm8xHYSBrJ4DM51LbjvKhL6Yrmrt8KKab666Wu",
  "key24": "jHHBwunLTzQCJaj5LxaxYpvGKsDKkP8vRWL6h4t83GiP9riE7jjrzSrqwrSV6MnmdBxAHmhsZjj2GnZrxvJ2TZR",
  "key25": "4DrB5zECByNdYsBS8VaLQFUVmRMhnHcSKV9EAZ31m5u3nRFuCjET6DppFxsm7gbhfW2mMKLgVBRsjQKzVpuK48AK",
  "key26": "2KEdDCnZawFXHMu1vyYut875SfEnvz8QtJkPbjspxkGJ2Dq5cYgJ4rd6BuMMM4EPMNjdzw3tqL2N8C3xwRnzdb5v",
  "key27": "Ftn5N1q6Sef8MdHv34Rr9zL6n7RXn1ZHKQopVPL8iepXmyqLYV9yEfZMPLoea8PfiY1dwtzZMm6G5RTrMzaSyK7",
  "key28": "663KsDqbnZeTfizZpsn2JgoQfVNPiihuDkz3siHzQassKGdvqxhayEpRzRs2DdUrwvdJ3gBo4VUmcVfvZpv6H9ip",
  "key29": "9aVBfaMzcR3tjBkhLiQhkMwE1Cs4XU8Zex5gK7XCr4b15XrUG8p3wdhBCUFe9DCZWL94r8WsWEZBkyeThWZy4qn",
  "key30": "3cVaiAqE6dqaNJQ2bPiRR2msXtMENQdL7mvvYr26FjkkexKzj3Mm7ijypZGi3MQHJNXuJVHXM48KNt9346cotBzd",
  "key31": "351YpR6fCPmmuryfDYLDDZMVut4ABsu4MaacTkEajYeYU6cexuX5KghiqB3cS85KyFRpV4bAjxHKRuWo8Zn6fMfv",
  "key32": "32xWdEnw4bK5MBCSf3TYJnkj8zQyPVQPpy48q82kiYfzXJGXYYMBHnEHS8uygSAwVpT5HeJu3AqDoDrdSNxfffAG",
  "key33": "2HqUMoanUnegXn5LcjWugSdakPmNkwqch7dh8K1j4QpaRFf8yVQdrMMREJF82fVUp75SMS2vkWuh2X15w15fFSU",
  "key34": "53EVfsSsYZkBXeYSe9HZgp1uanAMgqcGbKUmU4qAMto98Yz5UX2B5AwEydBxw2v63xzGdvANjxqxszT8iZsh8NA7",
  "key35": "5cE9jAMLz7Gs8zgSuaUF3mFpg77bMrhumyRQFj9MrQwrAU9AgsQQ2Ra2ztmKAGMGju6dsvJB34fgJg79W6QJEAvN"
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
