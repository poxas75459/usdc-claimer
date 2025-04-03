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
    "2kUCsHzQLaaL9G1VQ1jvxAiBEDpHmddpDyC33V2tduXXXCJUHroNwtVYvxVgtCCi6JsbzJ81RELq1xkHuZUvjML7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L8ru8tsD5VpMKpGHDHpJqZYi66TAxDG5fYfSPGz5djvQtdSgqWRMAGYJVdnNPSdsABbDPRQugp7PkunH2Cbi252",
  "key1": "3HzMSAjgMy3WHj3NJPtGqz2bA4gC1fe7z1kqfNjsaffPSor8vUyDm1KApXYgn8P1i1nsN1GkGH4PWj2m6Kf1dZeV",
  "key2": "4C6UuLTfiTPLRuuYLG8JfpkYcXMqBLCDYV7ZxQ8zTNfSpVGWmTwE5REr4m8b6GA9CkMYcGC3BYJXyTggJwNNika5",
  "key3": "4QQqyCkmtbCdS1jU5VZhu6BXxg8Qz4HiEhGzwG4LvpSNMVQDFvMjg4YHfbhQrF2avQms6wvDTDftwLW2rpHoWXxs",
  "key4": "5wLkGpqcshD2BMSQZuV2ix4URHk33CQhZzAQk6FNLofKvMgrfbRAha8yYMzBxLU6omjRphJhCRbsNQQzdLuKrqJL",
  "key5": "3GhqcazhG9XeyYTqiJtduxWbxKknPJssnzfpLZVSDVFBDEXZ3gcP9f3g6z7AptvCbcZ1fy8vPJVaaFpTt3GgqqPd",
  "key6": "257R5FMf5pCh1V6CoAxVfU4EbrNoBarteYALBazYjPvZCi49ztXmh8jE2JeggFP8bDEt1p1ScwB5yZW3NHjqTDWn",
  "key7": "4NxzsBSJb8JTNQA3eBdf1A6kHEMHVW1CJXf2pEwzW5ykwkUwneG6nVkj3rx8AsD1DTagGNHMXyoBv9EUt5K7XdQU",
  "key8": "3JEXe9bmrfd3KXHyBh1aBRb67ihBmdUBtL4rbpcDk33gNnS3fkF1eBSvCc3DqceFbcN4NaS7yxuQeD3bc34paxC7",
  "key9": "2GafkFfjpu2HmkyL84Uq2JesAENVQBN1xwbtyPSX7nrZzb99hqqQfKsDLqncadEbNSN61kSmvDQrRbg7F2Tvw892",
  "key10": "38F1GSBSa8Tay7Xt8P9yyhJqZTRYdU8MXQxguWWxZbBJf9y643aZ4NPjdwh8qknhdRr23r5p3uNYqB3RNxiiBkts",
  "key11": "4Qmmy9HFvVzEMZwuGFA65fMQkv7xryUxusqC8EMF54kquub8fgHG1roDxSFqwxTC4K8iLvEB3nnBHm3YsBMMzJq9",
  "key12": "4Xy8yqy9YRiPvcVg3eTtAqhvCr1aU99aAzASfEafA4MYyFErFEqGdbJkRCebchXYoh1kgHCe7NY6cAddywkC28dq",
  "key13": "36GyUV1DZGnvfTosCNTFETEn5jWXhZ6VrLe22tXatjk3pTUvKGT1EHjk2dzX5tCWiYAwKLsvAHamW2SuVhq4Sn5Y",
  "key14": "5mSZUms1DUYAdePT46SFMfhXKsqoiiyDpPyUig3DfEjftrsrcduVMPfwHQPgeVy67QzRAbYTudyXqVuvbYMtMC6n",
  "key15": "8mScoFwdvDmm39bpzvmRntRZ5zJH6JkKMnEdqwkqfp9kPSzqRQoGfpVrhdpV7XsDEUse83KZsmEDVrUKw1s8RnJ",
  "key16": "3XeWSU5FiGGTpYKPMvEF5GZ2uukvhuTN85Y1pcUequ9kfWMEFK7E9nfx4GMvZUKGFDHeLe81r1ndULygj9d6SJEs",
  "key17": "3FYoqqbddEm4UBSzVGZTxm9cZvcxiiHZgZnwrr2n5ZXGhgBb16gKg93WifQRJydNcERXcmWnnqZvub7Sr7gfq9r6",
  "key18": "u2W7hvk593YGiNhrrUqdFpaVxJbsPNv6gyZaAsRH18yLzUwvcQ5ZpXDG2rfb13y4CPvtWXVAjLTXZRqLX2RK4ah",
  "key19": "4m5qNoENYmFA4BpQQT61cJxPbMJz6kUH3HnVByd7wo6zVBNU676mu2FLu9SrZ5QbhfyVDkhWD6cWcHWz5fFatduW",
  "key20": "3EWuxKcLbMHS7jd4CcJjQxYvPqbHgey9AGaDi8fBTYkPmAZsTPdV5Z4d19NBibi6xQcSP6rYFuCu76grQxHqZKag",
  "key21": "3ySRWwheELCbf5JRDCnui2PGBmXg8vSPAUjiD49pe59FLoM6AchKLak3TkDHQVZcavuQCeeKe6kSnnjNSN1WPwRZ",
  "key22": "2eAnCAErSkonBKnNo3nsbJik8WgeUmuSMm87ECTK1DHB7xPQez8Ak4k3FZ6bXYx3iPnJncprTUXoJk7rxFLMuAEo",
  "key23": "5ZVKMJCVGS9fyjiVfHFRJCGYDWXsdYgespcQKXwmDTWiak5GsX5LigN1ArPqdJCHbYHmqPrFoU2m9qmPTt5zDiU8",
  "key24": "mrywwLJyPdsmibejTPAb7A2E1gJ6gJEPgAmDhwN3uBeaFtZ7x8X6e7n7KkJ2WjJw6Moz1X5omk3jGu3BjJm1rVK",
  "key25": "3w2et7YM2yFqvxxpGpzwnZgXf5TJbMAPH5Ru5KA25yczxbkpJzSFUXSaoJy1AYaBdP8yM9Vi8Jg3Hmf3HSGrMH27",
  "key26": "252NXRrc3HxFwnGq9JniWXJ6ds6dJtxriZFaATsmfQrDH1mG1NNdg1PdA7jcwHUdmzcvZ92XDfWeXgW2MoZt9o2U",
  "key27": "4NCSdyHXV9AYzBvr2r9v9G3vxUTJb1hGpVmVhKaSjLAS6BB17fXmxeT3K8b3SP3Jy3gsC8CSugNqcWfCounCpzTD",
  "key28": "5RHZfdG7uV5TeHghRiZQjrwFXaYRiZv4rTcduHeX2Nm5UP2aCzSN8ybCiC5cWBC4jzMLSWymVsEX4VwjwKrQ5CJX",
  "key29": "4EGQDEzzCFY2B1s7aJ1Wt7mFj6dmsQ9sKDQf6LA49FHvGx5uz29eXwMfibqCPE37fxPFfPHPUq6eptL3MpFoFs7Q",
  "key30": "QdZtjdTxG41z8qs262XC7RUcvpPeCq4KwGhhkUCzHi9SzwGQZ4DPhu7fwLkZRE4dduDPDgnWMAaHqXFGkjHfMVi",
  "key31": "ZnqcVQPF3LCJJMF8Uxvbq8VpUMuK4SeejCcX2bMhcEwXwijdhDpjFfFEKyjgbmef8PYZ7oaHHfoeZqQpFXoyb51",
  "key32": "4fMbiYe7BsDsJguSQ3oMpfdubxWyu6jEagKVX6crq2pj3TbouCkkzKJZTsw6EpbQuTfnZwt1HQgqmbWgSAqnJRb6",
  "key33": "tCSrJAFkNsoMmWUhsAbtD6CYvcCwi3BrcWUGWfFf3zd1fTqYXTqqAT8Jz3STwfdPEVPEZ3pXToGzi5nY8MsbUXv",
  "key34": "5YQNscXvdPAVFC8yz9NK3ER5yVEZSzAujKZmuDJd5L6vJQ8SSVcaMRgFGHuc8vhVbgPPZ3so6vg3WxyaPy4ictwM",
  "key35": "3M2RcARbFqnS7Ed8ni85QrezG18Dr9jm1pLWK6ZR1uFaDzfzPySroeakgs9JvwSvjWMPNBwwdg2eGNtDa5gRybCp",
  "key36": "5VyjzF6q6GDjWsKXBGFWBuw49bmG6xN9giFR2re18s2P57ZZVQEwsstdPi3oiMoHy143zKzvsehnTvrRyXUDawJ4"
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
