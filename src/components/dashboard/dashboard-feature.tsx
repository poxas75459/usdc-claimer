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
    "xuezgGRhhWLBAPxT1SCTYfcWXVU2rMFXCpf187pGyaNDSUZ1Lr2zyYatGKw6usRVb1YXw2BmZDvvUk5TT55g6XP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55T66YetnMivuFDKBmiL41cdrNGaEkvoRVvQD41jkdZJbJbxfZT65bM6mPKG8AVN5MuAGwFAuY4CLhRoJrqJHo8",
  "key1": "iPSc7Ayoqras264PsHSQ5LZxZA7YEEdLYCbNvuBixKBYLeeDgcSziW4QtCYD2M1NEuVSLAMQwWNT52CC2oVeAf2",
  "key2": "3XhWkaiWEfr5bZQ84T9oxUMxEePjxvgwZxdnps9ZxS9u1xPMNsdGYvhjsSDGjKZzD5LPqaAqfF3G9CcEbjgqdKk9",
  "key3": "64iHQXZYJbfn3MdKsVTPj4qahNnjcHdVKjYu3ySpp968LnYtySQqGZ6y4WYq2La7ucqa5StmSDXkNTzKiYtTRK79",
  "key4": "4YYGGHw4vkmarHXhE7RUio2Fsx1hgWbWLnu4LpKJAAMKRim84Y7byUuLD8d7oqd8JFSqfQHVw997SLg9i3jaPhvu",
  "key5": "61rV6vMxehkYcyDzE3rs2T8eZ4GARY2145jjk9br2P2So5TwdhmUcxcJd7kNJyjvgP6bvPBUx1ud7U6vkLZDKb1i",
  "key6": "3yAbP1dcb2k31agtC9oQfR4VjhgyxQ5MgD3Cj344XdpKCK7scx1e7DesKDnuuyDUWNmiNSF3UaQFMvwhG13VQdXz",
  "key7": "2eJRo14kr3T8hck3gNYze6BvbYjS74aBZCwtPYWfrcoG3WRqyvUNYxQQr8tB883XrbbReZziwHcVQnDkkaRKHvHQ",
  "key8": "3u5wWTiUS2orfu5XT1ZL9gNbPqiQradjyPzkwwS8KeoZczmUB5YrSHz1Va7Pb3c9SagdhWCZKTtPKvNnPxSpM4JH",
  "key9": "4ZrBAEefkRswTPYwozpkRMwMmMDWso7TwgYqmi84QciePxGPWwSHsw4mxhEny1SgFszpQiSThf1z4ZMGadmm7B8G",
  "key10": "4ftsQHoXm2Fco84JsvmtLKXaboDdZTnGJixMzd1wZ52FqajQPyVGyFSvyJK9otS4kReJ3ZnuhUmxgKqb8JCFN7vL",
  "key11": "SoYHK8QRADpxmgP5eMeVSakj6WHZDxHc3jNmFA1Y94oUmMAkwc9siHhPkvafU9kC4wP7vTovLTQxiHyJ62dZRRR",
  "key12": "4hfavhc4EDUZFQYdbvfBAkmjm2BJzSFS3vMzviWa3unN5tuagwfFQx8CQcUXfEjzgtsvQkynEpkN1PhHV8av2Gjg",
  "key13": "4pjx3WmXK2V1JsRqstPhNzuxZqWAakaZMf88kYhnGdK7oQFNzZAkxQWL2A7AwWBdDnYFQa3yYKMNcHu3uHLdyhvY",
  "key14": "4ZXTBU3UAcTMDabgDxt1oDdcdQK1HHyNBsGcP7RBkMtXFddfXraA5MC4bZxRu6Dxsi3oDHrgcGkzujMMWz625UKS",
  "key15": "jsHoH62JLACUCYiciry55XzzVG2J9t3ELQ56jb31sz9LQNMqL38xNAp1Z1ZRkxgKRSJyqNpVipuEMFFSV8RVG5P",
  "key16": "3sqcK7omirQupo5U5TpYDbJ69fQhWeibCfpD6THSJawQWAMXX7TF3N9ST1GBkh36w7kcoTTaCzzz4euLrx3YMaX3",
  "key17": "VhhJqhTALJbKwUUdZRzSv8Qgh9fEsebSmGp957Kwm8Bd7sDYowPLxcME8sxxBc8zriAgctvXxcH5QdvkseUxi9a",
  "key18": "5KzGooRzHDNuuRwX7zZRAvnouhqMnfX7ZrcVYwwmxUW1kbcBeHQasE9xw7nhUwTNcLQokh35re8E2Yc9SgZZ48Nx",
  "key19": "2zEGWEPZY81CnLmK6huadWPCNgM48nkBWCjA7f71UMzAbzeAqfQZWYKG6thUVGXSGJaraPXjXMHSLckJW48jP3i3",
  "key20": "3josn4NWHDzuJJZQvd2EwQz1X75CNBzLeBW8zdPeXULbtJ7dZhrdzpRQHMHZQcQhHFFeVyLC5mA3QFQtQ22ks9zi",
  "key21": "rZnj8VLFndBXuA3msarVWcQWxZsthXdo7mmEGVtNmMAfKt1e4La4AAt5fityMrjWWBeJ9qNFgUosn3AUXvWQoDG",
  "key22": "4cmUcsnyLASCG3QvnZSzfhBnrX8ZixCnpS3RsG9MN32pVd277KVTNAVLhEW39iTszamhzG7Gba5K69x9QeB1znPg",
  "key23": "4U4MM6GE9BwqtQgbgCxvzdRMS5H6TKAydaHjt4LZeSmmPZf9Ufvstj415GLgxTFWe2c5hoWxkirH9nFW1YCdPeTh",
  "key24": "R49btSQAgJVYVJi8BssZmT1h68C1VkRPG4am1AMekm9r5PenXzxBiTiqz6FrNbUUDoM18aHuKKqD8czxp6ovbvY",
  "key25": "5PvjpiZAYYe37hEqZs6AXMeke6xy97wggQvWt3DW4AyCGVDtSPQ5pZLG1uxFuryPRoPqE7Js27svMVvd5iFdtquF",
  "key26": "5DnUH3ybEAUaDwL87aYkzMCQg8QkRNDu8U88NECAUNjg6u3Uuo9WKPLhXEHqoaWCzfL8nazH9QbppCoT8k893DGC",
  "key27": "29x8fr3W7gzgGBhUGC96MHAmrLQPZ2L4URiJpVyjyLSu8KNWZcRDo1sEZJZSRv4u4sy17g6iGH4ax6xf4YyG8xx2",
  "key28": "hpcXBV3Pn5oMN7tZEuGQnGMymGzTdChVuYQVuYhDwWPYZKvBXmAn1krUnqKCqdHPbU9irjkrFDHKwQ8McqWF22S",
  "key29": "2ad65nyw8cvbDhTTJTudJTQyTMZ2EnJqpCvbr1nVTWHk67s67RHFW6Lda4M3BaXq7DuoYxJf9ErXVgVwhsB1u1xi",
  "key30": "2v4AUjWkrjxgT7zhfCDCKJKK17NnB7mtEmQmmHfXXd2DdW64sBxqknimFDtHiNEumLhQeb9HoRJaEceWPKq5aJhg"
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
