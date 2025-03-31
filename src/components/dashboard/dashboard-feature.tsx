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
    "2JSZGowad1LMponYUn8KmHs61WAgpHA3BkxDthRoDvt3F1Q85m3yHXQLZZiAqmbQbF5v9Z1wKesK4PxsxaxbB67y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nQf9wWqwnGFWH8w3Fn2dT2H7gmfMGzmE4sPZpYnWiwM1iDjiD4EGWJRdy7QhJ3g2GZ1B3r1g6NsKhyY78P4jGFK",
  "key1": "27YAjfKLjwiK6NErujq2cSLSFdm5AZcvi5yHYoa5LRRHKMowhh2jUxLFmhVbRZPf9hGegxPqVcx2qUV4f5Av7nuA",
  "key2": "4FVRwPvvqXfgDSKEwWNrDyXcWKVHpJGfmnM6rZxEhN4dAn5gFvgKGK9N2C2HktHYYhjYPcGQLhn2h84NeQ7uQgfm",
  "key3": "2CMUnDGzp3tarv4noyDrYzaBBv4ftkvXjtcYEv1N1HbFKmXXjd2E4fQ7zTUJnXEMVQy6ADdBV4E4gNtbv4F5zHkD",
  "key4": "5M8gZH8VvpRMrkHN6QDHs2pivmEQpnkYUUT79CSTvxfdCECybdzfQWN6XN6rPYxy6V22vDeEHMydBMkYJ2gch1vJ",
  "key5": "NnWhD1QsaFejWwRBhoUFoKiEsdXvhLwGTPr5m9hjwgzSMVAguDZbmNUaPSR7tvbY8bjGT3j2wJxvHhGFY6yMqYq",
  "key6": "5qkJTgLqbPA2rBg5Q86HiGBWF2sJrYXR8Cv8RvC6uQm8g3JGsZeF1RCEfKKc29yidFeBB3GrFCgD6GBbNMC5iMvN",
  "key7": "4GaTWkdFzqAty8gLcD2QrQoT6HtdCPdD7TEzC3A5khaGRjx3Ysmxu7rwV88dzC1pmwqMwGVmCiMDHjoR8zVmWMvb",
  "key8": "5JWNP89FeZrcfRv1wzY6cm52mb5eVvK1xHq1WURvYMu6gZRVkWr87YUS4XHgn329SNqA9YWqx6DTNW7aKpVmbEoG",
  "key9": "5usVojMux2QHLeraeDy8gJwRnz7YLSbW9DUaW1GiCJMdhF1wDaB5MVdYxsMUW8b1946AwJ1ercVYVAuPBbz6TPd5",
  "key10": "48qvRu6ZneJWjTTjDrHTAojNxSec1PiVc8oZsEYEs5U6aFqX1wTbobgxVSno5MDJxsrYAt2RfwRJ68mP5pjWbbmM",
  "key11": "5FNL1WsJMUNa7jrMCZtAqFsrczsR5V9zFtJNCMvmk1SJg67XjuA2bQxbhL2zwJThkSXJNh39TX1JSmxu7nD5DCAH",
  "key12": "5QqCvNHgU6QE2YeoMCdeC6wPcoeYised7GjDoi3UmEWWxxFFVqLnLi3hWbi4z5u3VQC5JiAehJPns45V2kLYabwT",
  "key13": "3riMeJ6RccEjYXuTNCe7kSirSjUDXM8HxhGUkNhHEs14SvQ9N5METpjQp482FtHhM5yxvs6tQfySg774A9r5cW7z",
  "key14": "3YYiwp7w2xrmTyKfdRv58oGrzuZLse5smKW6oycJx13nCepsWnm7HGe513b16rU9XUzvT4hhhj78dvZVLuNjzrfQ",
  "key15": "yyh5WARrAU94ChGd9kEQMUjTqX8EPutFQcMwP5yqReMGGJqhJFLSU9GcctEwzkfKHD9Tcy81jAQcfnAPsoYfeFG",
  "key16": "4mxLduogkntomxZTmbfamTzsr9h4kuQsStLZCErgzN42qzNV12nLQN9vdvLsoLvmMC8aB5XhtJfC28eb9mXQ5VR2",
  "key17": "nUeY8QwKMnjQSCMUCLntoAS6GpPxQFjkrCYX1Ey3DFX2go79p9iF44C8iAdBJYhQnNWH6QBvVTQfBuvCPC67ZL5",
  "key18": "5yjf2jAjPEewhECbcJunmvgYUZ1vDESx45kp2wBkbrxFVxzJqG8eMJQP5ZLs3ZZXpv5x1QpF4Rf8Br87uKr4tZbp",
  "key19": "5nxvcJtGANa2hCj5eqgRgzvvjv9pyRL9xS6N4e3aH6FS5e7o4yBUCgWapsyJdeq7uvXfLEcD8sos6QqT834cwNdP",
  "key20": "274RkXegtB7RSqPkPQWvqmLqRCqYeFavEvFaVNS7fETmqxBY1uu25zSAj9suLbd9CgGD7Q8ivtzNkvYEoVLYbHJ8",
  "key21": "D2HVzN33P1pMMfW9jgQbWxkDZWsiUFUNVjzTUmP5UBgnAMTMr5FbPcm7gSxQ5DJ3W91QxT7BVWDP5kgQnVaVDwk",
  "key22": "JiZ69ShukcX4ZDDKZUsJunKEzjNgea6qxvN1B9sEgGDvAtgk7zHWdadHvUHpJETcUJbJdoWmPvZobvaAWvpfV3W",
  "key23": "5bjoKC9N7i2HvDvxdH6oKscbJZmQcJGBs5hN48aTR5gbxfBDd5T3tbkcjTD6mvmxkFdiRaHLcjfdUs3WL9eyTU5z",
  "key24": "UyWtqtkUaSZcF6z622RZgct7ziSC3QyNXroAYRSHiiB2JXZZ9vj1vFZHC35QQ392wCiMk4P1RCNiG3fWC5KUKWn",
  "key25": "NSEN66wYmWNc1hqWWH2rZJGcrQZkHUSeMkvmu9paRvfgNZ9mmWvPvj4erSNnXe7Yfie6EFPbnyFtDwvd6R8An9x",
  "key26": "1SAq9d2oK8JGYrYFW2G8mbiZNKPHCAiCVWaeUVFuinN64o3K4KXXdhrB5rGFDnKbwAFQzsj9pEmY7VBegYckS9z",
  "key27": "3524GYzV1FS7mAL2jKec6T3QsphqKgrjdQKrAD6kPvDUzN8SGsLRmjTw1zYAQ8QwpkM4rxuX8ZhYDU2W7F1RUuUd",
  "key28": "3Y38kAGBjb9i23yTq76eJqeC2rL6vNAVUhQBmJKQr6GkpXsYLaSk6uSKpyrhmTiRJHJrwYcUNkXh1KsCe6PuhkPm",
  "key29": "3jeGcuL5HHbTP8DrFiJzNejW3HV4DYKRFBoaFGqDt946VC36Ra95Y5bMjJP676g7z1RYfCNebkmGjhzkctuJepbv",
  "key30": "3vfbFGPhx3cpz7cnphAgSzJ5gNgDHciDrQs3JYiS9jq2Ls4kdvFaE8bayFQZnnnu42AJnEpdQnELHTvFg8k2yGCv",
  "key31": "3eh3v6ucknvvLiYJrteuM3EhBcH4a5xEg1RzFBiuCqXmFdpXfZfyK8seFuS75qqUz3gBqGve5TZoKpjDtnk9Lw77",
  "key32": "2ipvr5JmeNxPHPRwgp9hvkdQz4B1LAwKkFBUF8eQWf5WGvraoE8KdgSHrQCrVuHZMZN2FjkPYJZWz8ATRhv3shWj",
  "key33": "5Un77oXaHpS57G7ZNUQPtwMwAR4X8hvbVqg8KF11e8us8JgFx6HTYdPr2B417rhSg2hPcWc7eAssXjdjnPJus41L",
  "key34": "FDihN4Q61qkqZg73BPSqYE3hHHAX8kooS5Y4QmPJuKyk2LqSYG1uFrjtE18tVgbGcUT5hZNXT5kvjCByp9jQhRX",
  "key35": "n92PJWajEQ228nhduYJmvsVo237mhREPaoSLGeNdm3rtfbnTEpbzzRJbUiPadDkfwihvhxbPpBSJHv23FmDMqr7",
  "key36": "3YieeDm4wtCyEn1a9NFmWrkwbEeHEPDH1NPXPtP6dF7DekjSitQBGLbfJ6L8jdxN6UyNZcWB2yWo8ezY9wrGEXZK",
  "key37": "33EuuHozbFcphkJE6W5Bp6dg1EZnGr4YVcHxoS6BdUpGv3CjeZgbXG68NPxwk6rED7AgASMkxpUkJaVEQZw6h6HA",
  "key38": "2tywCJn5rJYCrK2rX5SR7qi2ML8f2X3qJe9BNhoYgfMMBJu27uPvBDxLXfECbctHqhaPXUb6ygRS6eZBFY1tC1m4",
  "key39": "332d2ndpzDZTZp2pUvoUQEbSEp5vWsiUS7MK7H3DR568KzsadWLF91qAPNrd1vpMwfFkV2AYUET3fJwn7UBcWUZs",
  "key40": "2zDnoyFRUFHaEGbgb6BYc97qzNo3cdLikyVwutwFntwDMz81PR5W5nBp8h68eA5LkNrEAQ8Ra7qKv9kPzv6TH9T4",
  "key41": "53bYKc51FzWJhgizz4HC3RU6H4Us6HxXgqsB6Pe3FCWU7HCEK2J3F9uPfJCZi9nF5tomxDWaZQ3WAhXKBVfKJoWS",
  "key42": "2n1GjP37jGhCPkQZbGvtGHVsWfS5w7xPL1x5XDVW9h39VEwdes3PgfRtcLSoDPbobCpBU2TYAfAQSVCd1ngJohrd",
  "key43": "ZPNuFvvqE3fX6Ze42BEFRiCtJ9ApC8RjideC9pDXDC5prPhNkE5WAVGxwcnKdGFUspVnYMqqVQSETxkkzJKBxCU",
  "key44": "5sBQ3Nw6BKivSwVdfkV1pbLgu48GEy5iXabtq7wJgWugLa4P3NftRg2TUL7vU4p1eVaFNbKvBCYJG7tSo8WWUFhK"
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
