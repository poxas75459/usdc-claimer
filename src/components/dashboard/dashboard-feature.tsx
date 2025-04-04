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
    "2Zi13HDkjid9qe4F2sCrJpjhX5r3c4z1w9rRv2KJdBeM9dcvAuN8zrEvhFMaUFdg5yXKwDRAY9M4ok6p18si1XB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35UzPBb8eeru8x58dPNo24S4ozwAfRMPcXH6tReTy2Bh67kvfzndxihRWmZn5vZ778ZXQHECR8h6iNJvcShws4TH",
  "key1": "3vF486RKNH5hM64Yuw8Qf8wsZPYUHWRpHB2LsxMFTsbh2G3eVtFcqzgvKsdCTfFPdQi7EdRUzDa6Httq2Utgnihe",
  "key2": "dddB657wgUwvmLLRbhuhUEcWMgsXFKMjqn8PVetWqLcJ5NmX4puesL6gobkRQ4m4ZkaoAUcaEoHr6fqu46GTNGQ",
  "key3": "3hGWrY9q7n7KuXEkP3XufaCYKKNzZn2aVRKQor7a6eWDDDvwBtpwsVoprr9ftoy7Hz2q4f2zLFfA4dUFXkvgMJAk",
  "key4": "HdqA1UHijZuwCQDPQfy9R7wtCk933Y4boqB36FuDobjCnsFuQnraiF5iebcigUpfBkiJzeBzBXarf1vQCdCfdQ8",
  "key5": "55maLXCtoR9rjvQAsT1L9v51oSmzb7dD9SB8bRuRoM82zBR3tEbDYQPzF7THM4T3a4G1xA7AEZEs4f428gynBDb9",
  "key6": "CsF4JsvDedi4JQ2cV7RrfprH6Dua5gYKgnVB7arSmcKxxnXNKeDptCxmP5xPZHi8871JJbEFZbZk7kXAiDco8kw",
  "key7": "4s2zqkdeMqtumEpumBZim1arbpxigHTemySD7DKNiDaJKeJ24y1PucC6bDVm92UD7S6K22AYWtB1vz7t7MJkqCk8",
  "key8": "545Ce1AMRwuaNk8puYpjDJpFRZE3MQz4wGmitxSGpUeN4CKRKxh6Tx4qid6azJG2hXTNNaHrhrT7BVd2GQfMKMwB",
  "key9": "3L7xtPHVXZFhC1Af88vRkkV6Rpyk2eJssCfLftQFK5p4Q8G1WqCVJxkxd8Jbm8dKDNx3PNckDnGmTzNobKLJ3LWZ",
  "key10": "4zjB5bZ5LeKpqjj5G8MbDquaZExYX3Q9YwtRiMqNNqW9XuYJ1wNbvBygE2v7duYY5TTFpjqv7P4ZjmWUCqG4jSGQ",
  "key11": "5sKNgbqYYBBGajfiQEyiPDFtoLHHQ4QbcwWy7si7DqLJoigsuVLFPaMFcGPv3mWF1QPcDpn4LgFN3BDyy8cBMAJw",
  "key12": "LUetTanscipArf2WWTfXvaiNjanLe5CtuYGfo74SoqDgt694kbw5LJQKvpkmRjetvPQZM7NBvBLp8k9treVPWzt",
  "key13": "4irmtx4CQesN6x3aa6s8dFuM7cBQy2dC81XboCtZdXXAt4t36ndTgHXoQfY751LjkBuF4yZSYBsKcdE3vXa7WuGL",
  "key14": "5SDoPMqcUX7uVrUPYt77gC8aiv9Bp1yM4qLr9GBn6RLX3tsXq7Q7WeM6tifq9zubGTj9oe6Ncmf9fd55NQh8CENY",
  "key15": "2BLtLykRsMPhFpSRHd7bKbCzUcJTccxoRHaJh3MXrsxafWxjs3Xj4A4QQ7z8pRZYhQmWVjHbK6hGNh1qspSWTQp1",
  "key16": "3WA7QryA28Y8mpptJN4uEhaHTxi6hL8mo7KUrAvm7ya83Ep6itDFZ1RiZ3fkCnVhL8mkUioWeQB7hb3wasyTyS4f",
  "key17": "426huBHD42mf7FGgnSe5RT8gQXQQzMRk2oiduxToysXd7JF6Ldxc51qse8B8B6g5Ssq4hJWZTVpnYZv6b6fKizEk",
  "key18": "DbunoRqziZViDc7HBs9u9kbko69Y2YJ7gA1ujFMCFveAHFLNALZxSQCKuHAeUKnZt6AwkNRSUbAG1fVsm14LV3K",
  "key19": "3VrTQ6xPYk7GwRyGYBJHF8ssKS1y3P2A2fWk4atvD2Juu9zTtS95wY8q2dMLdJETssqmf3asn2feNrayNbi1F2cf",
  "key20": "5eP3mdgJQuUjSEj9QxLWzoeEyLyL2CCYtm1bPsW1uTkLkCLYPoX5Yu6vrkFjoL9DXQBQz3do7tN8G5EwMh9UVZ6J",
  "key21": "4NUdVVFi47yz4rMdwrTN8Nur29EPp6Sk15XnqRaKAAuXtn8qrCxLgRdURQ4Rah3P3FwjJF3dKVxUFzR9q8iBsD9N",
  "key22": "48Zp9ua7cCxx5DtHdkQyJVnoHoZd8pLPTS7GTX6JmCsxG6Q4BRBGE5pQmPVx5VzD3ztNn2PJ3xxo7XYN9B8XoXAi",
  "key23": "4A5CCFWmEgh9hUkC6seR9bJ15jNhsY6BF5dCkkfzSV1wYFbaFNqqCcYkqwiii6MCbwieNEvkByaMQrvX2Q5Xstw9",
  "key24": "s2EdwoqYkWRxKCgzEbpcnBFSxpzKWAuRYM9YV9gTQFv8YLEhZ6x6Hh53ucY8bUa6KbDbgDScaPBfBwW3FQMdAdn",
  "key25": "2orwqKmNu11dTL9ywz7XDAKemY6wRaoTm8QvJxxqgqVVTGVRymVxNQAjJgcgZSaZrN7gTA8DuE2FPZqLMRihi4AS",
  "key26": "5fQAD5HkwadYzbWz8muSdvnD3Z61XmpqgFiPq2qfifRFGQKxkhA7ESp41SYgHYWeeSm4EyXjbwkxamxuUBBgNjWY",
  "key27": "4tdCLBFMFJfMVgoeT9jLocdj8S8UVY2T1JHQXEFqbPYCmhANv9mjE9jp15Wdug3PCNhJBVF2gdgSsugzLppDQ3zF",
  "key28": "54jzWWk3hcLvnhj1xr4P9aMD1L7dyT4PGjczop7RkDU4m7EqinjfRYFjTsQ7AkqFYKEn2SKy2M9Lkbd9eq8YqwQE",
  "key29": "4UwdNrycF7hVwngPMD3kk1cur2wdSzwMjNSUTFTakSvkYJoXydSzwXPQJoNd1BFxXMv1xKamNWKyy2UfMAubKdC1",
  "key30": "2mYdNUQvzD6VNcxUAV2Ntgazr3k6Sja9EphHk1xz619BvtQ8t5HF5yvdvsyKZ8bivi7zdRwg8f23wPh3mBJC8tEz",
  "key31": "3QRc6nSc4DwULTYyz9BsMutFoEo9UQRuDfZqEPSvKir8VNPMnyZpWEicpDt3NcT8nZvMAaSasDrZukFsEF1exTqm",
  "key32": "2VWXLmCm6ribVQX6D22yAP3oaJPbo8Hotf2vM2AVWTvYSxU5NoykSfrMNAESrFkphbYgW1WLiGCAyVTYZaq4rFkC",
  "key33": "67Rd87NCNZnzxWZa2yKrL6Xok8b2z9Fd98q7Yzmxn2HqGavWgPFk2NbVgKMBuKy9DAUomt1h9TzzRSq3gSZcnaAz",
  "key34": "3mK1aA8DWTX1w98mBwpM536cUTiZANvfZW9H5jSqiBKc2npJYYBBeMGorZgrmS8vaSDbfbPfnEus8Zoyui76ECoi",
  "key35": "5AdqGYtf6go3V3soqanVFoQyu2rn51NZ4n5b8EERkWBGnLg5sMPKJtuMM8acG73WK5tCbquJ6485E6PdqC87UBZj",
  "key36": "3Uzd9FvPQk7v9oZcUeEUDMhyY8SABwDbkLbKxm2mVNrUvWGGpaJt5gR7kK2ZRYU15qaae91Q7Gpd4VUgpcDUXx8L",
  "key37": "3UJeoADCSvd7sYXNHNpLh94fLnyACMexYhhZnYBemY7DGwdYZ2RqfpMzfdzxWWdbvugca6FSKAihyx48S6D8ppR6"
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
