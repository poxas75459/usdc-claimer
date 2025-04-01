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
    "KfxgKr8BKx3VMq1CsXSDrn4Wr9hzpgosXRTUhVLLmNt4QaUW9k7pGuAjNsitYtJ7DUF3tt4AJnnVCxiqdW66CwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Snh5TNV9sRQQbjbUnQHpzeLJKT3yLN6JB63rVfzSdAcF6JCvzXYc6deRv2FbRAQb2v637yncX8tQUnfbVScjY4B",
  "key1": "4MJfJqoWMTg7mpbBem1g8MgvcNdiojcWEnFtCyj4dWd9BME7BqW3UqfzV3Zgk9GQeAzhPCY3kvC1eCvwZt6tknvK",
  "key2": "B3YCc7586cqmPH2LuUfuBEMkqrDeM2xu5j5x8viBBobg8MYeq1HAQHvLF3hgE9sGsN4CtvPGmfPdqNnPVurHBSa",
  "key3": "2zi5HkJnJ47oAa9K6XsaSqJtbDnGkRwd2GnN6Acsy87CWjcaxAxjHGuWs2Dt44wNRPCdJkSbcvJf45kZP9U1JWeJ",
  "key4": "3usf7t1GhNapQTvfgsLcyTziJyCYr7gUBF4MXuYkbebTWTpyBB2uP7WQZH6bS6vNnH8KNageTqW9YPMjoEEk2wPx",
  "key5": "5ZcGPJSrygHx8YxMbfgDJgGsASV5ex4fY3GU6fcYF71PmD7QGUtj6WxYmhhRojcXwVDEqqndjGNLJ2Udipy1jpFE",
  "key6": "2AicRiEVCx6GxgEGu41hgGXnCxVvSAfcbcSSnBKTmmv9EqmZGSZAcPu6yzmboDD8n89d8iVjXnpSDp1PwDwgFH3b",
  "key7": "LNJiQwcMLHF4ucRNX2PbDKkVf8ms9MF1C81Gr7GewNfVWj3q8sERzRb4cH4LmwEVCm8YL9Lwbxr8LRU1tQpEZxq",
  "key8": "464xtmzzkdjBizT7AFmQfTY52ydofh391Ghnrrq7BNoB3Mk5trCTgBsfkJC4fgit2yA8rZc9BLs8uPZNkbGpmUSx",
  "key9": "4hRyAbvbqsrSDKk8FcyY7LVCr2Htmi5GcipcGtaqtvRvkfoYwgJKT7NuTUhvd5kMksffE5iXdnRuVna6aoRriykf",
  "key10": "3gJysgEC6JvUvP4TWBYyx9RRoZD2ct2qcD1CgFbMrkf6oWfTDxuCRpafArBTHCeMA94SKP6w77XZnFzavphR1nQF",
  "key11": "3REQAzj1HYskZRfSk2CEAsGb5vrbCuFSkrCyBuXbBTnhAMQsEG2aRw1kKvx7vKdkaEKuzruRt6DPk5zNRsGZsF2v",
  "key12": "5xANRPW1ZY14CwPb7TDrptBqf79xEhgg3CNP8PBdgi8gfJi9FvSA3rvpw1CwTwmGQaVqH4CHjTttYEAq4bT4vaZU",
  "key13": "3LZ7oUYjvbs3u7ci7MvBkohktmTjiT43fGtSyHQ8uprM1MkhBstbSL5LiitbVBrGP9hP2Q8TpjwQJXWcLsbnq56W",
  "key14": "J4AZrPcncoi1CkZE6ZKwnPFkPssfr2hgo5VDSmewBYkbWJdgRE4NPnbV6QqgpvEoUa4pRTbQXXLBUKHAR8zmm4R",
  "key15": "2hbMyU3Zy6SGixvdewWfZpbUdcrL5Ly6LbJjp6Dny6ysiPA8qhvvqFJWkidrSjZ5VMNFvAdfVicp2BMEWwxkg7hZ",
  "key16": "3BQB9sN3hQ7uQUYqE385GF3LkhMrtwzthNAb5ZEe8649pMJvuvCDGuv6uJEk4orSoMpaQnJAPm5rMe4aBsVMxfAk",
  "key17": "2o19JhLuZ2EYrMU9xJdMsry4pdR8u9g7LwxeVPyGjYsNJ8bhQ6tsp1gboYdtK4YogAmxyr9ijV8oEvby3Ti8wvW1",
  "key18": "2cdkAv4fUoEBf8koWCVY1j1Fi2ajhPnBrTotembhDXvHXr5usQE5cFfkBNdYqs5pHdFGqKVdpwATGQS9Ua11TuSK",
  "key19": "4Jhxg9aSfcZKqFapmVj7CZM1Gp41dPSVxsyjsoRaPZAkSEbnyJDwJnYjfAaH6iPc4MWzT3FtqD2pszNJWNyMdsdB",
  "key20": "2VPvDjSkkgMWNXTmbA4ePnyecrcyF4EefX34CyCdmw5SJ9KiAb83xp6BLbaXq4VK1FGduMhsVifpqopCHjaqkw7d",
  "key21": "3JqaJC4eaPvthEfZvwsdvK7x82DQuCByM8o13ZJxKw43Th6NK7KxCJVyF1LnxvrxNzasJ7z5FvtQxArx7XzDv2XF",
  "key22": "3AUMSK4z8CQTJ7na8WPdLPuz2KexuhCmrmXuVrW81KBmcbbiBW4cQcgQBwihLjSGx5fHaphnvUYJaKXh7fsaV8Pr",
  "key23": "eEJejmgyefyiepGa4hKS4K4rRW2Khn3MabLB1w7e6pomxpJsZmE7AXX52D7RzcSPBnhZXbraJ5NJFi9fyy7Uo2d",
  "key24": "257s8GWgQA5vfrNa59EKum4qFaxMYoD4zKdR1Gm4UEnbMQJ11rBcBTj1dovJQfEXyDxMW7EW4ba1YrFZ6bwfgZkU",
  "key25": "2DAUKWUahGSTEZU3e4MiFYxoPmfKcDc6XnPV2gcyEBLWDud2VnRThr8AVeUGqCTX5F1QntuT9MRVe3WhKiKinhUq",
  "key26": "4vF44mMUdKKAMCwinyV6fyV2o21RrQYqy3PAmRydJTYyJiQkeuYPnkJZjURPtHBAaKhqLzhzRAkRs4bA9dy5ig9q",
  "key27": "39VYy2y5CrXgyWxpjWAz84bAoopiqDsSMSx6ExBEzTZPJgwZgk2TprTGNDfiCaPrDwRJHZbRxXzmkCEpkTKu6c63",
  "key28": "31tNNdRKY4kscNv8AkXdPGV5TvugYa6QFf5P4VH56qAhNc7mUQDZ5twoxa1tHkwDtWxkPbPreZSFCX32aaGQVG5X",
  "key29": "4nsRCZLSFWWFXJxUpNMddWYxgRzow1KNyVhLWkUKouP7TBJPiWFtBFSYYYuqTzs1uH54K6w5YMSYPnKFNfiyPXN1",
  "key30": "5PdX1uGAsjk6ngyMZx9VGBwpsFkH2DZxCfgDEVktMDme3cJGnxQwWus1qiwovs1xe26u5ARYcqiPSvbc7LWZdb7r",
  "key31": "5CQ7keRr4Zy9R7LVUhdNnT7tV9jPegBHDxuDeoSpnxkVrFRVCZat8pWvndRRzWvYKLhUs3AhpaW74apJBjLmcew2",
  "key32": "rcsj5ZNKZWh1hM4h9W8C6iZvm3AdvtcMh4sDXL9rbMjgSZTRqWtoPKkCHKmPfHMp4hBmRdDv1kwMXKfqw4rK5C3",
  "key33": "4MXZWiEfMrYgyydWrwoZbPhJaZmEhPFT255d7KnETRPzR4ib3AGPyTLrWmDWkNTswJdQkMWnHMEMAYdicyqD5w1y",
  "key34": "43aLXS4vvDUEeHsuuzv6prZK2Mrw29D26FLyWy9EBt3vo1L8y9xtgFWjZMpArgAJi1SwVbxL7facjGytR72A8G2k",
  "key35": "5a886Vd6LCh4uQTjRxvjVgsVBJPwmwFHHhKUjoAToJVi2FACtWtsNsDezWARKY1oZ7ixsKifoB6cvVuT6NU3ze5a",
  "key36": "4LBuTEF63qeojuCzJCRyRtArBrNdukgdTDy1ZKBbxsLscGF3fycJCN6qvu1pXfJCjLW8SxaJJmERRhmNeL9fJ7Hi",
  "key37": "32vJ3J4XoXaRpE4CUAjR8nr3bRzDWUv2Tw2JqNDnnSpUGp1d7NT1Kp3geEEsCbPsmKfSXBEfaU24bBweEdK9xHsB",
  "key38": "5qNmFXJq5Jqbv6iTs4B4hJdLKTfHgLMxmxYQLhm5dHcfUXw3s5MTPo1YUmwqgrWAmcEvBuPT7j6KQvmzF8LjjSvG",
  "key39": "iLNmqHdQyoFuKAKij9UhpxT4ryV1sbVjErtfgzZshnaiVUWCwuVwPGqwyV6Q3Gp7pzipteypDEH5qDhTzubxMUA",
  "key40": "4A3Ba4kWPpiPrXDZ36zQ91ikKjxy85q2MfLijQaiTAjfsxWfR8Xd2yANKPAbzriEU11hdggSAY2dnu2aL9i83F2M",
  "key41": "5abDhgVJVBGnwTFdAznt1H7uT38kRZTWzBUoc3pvoh145mS2aCvQ3Q11BEfJ9ZWGdjUE4ALWb3ddP6VJwPgz4V2V"
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
