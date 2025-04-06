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
    "rE6YPjG7mgdNSon2YdNdLsmBFg5mkkTcMnP4jSi6u7AtbynQpPt8qos8YEwuNq6QzZqmHNJsQKjLG2dwiTnzGur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xAixrnMfcrPh7efzsDno945XL3EzYYzaCGYRcwfXeZi8qr2Y967DDs24JaZVHPR5gTwj1gfNLbeP3psKnsK65Dg",
  "key1": "5sTx5ByjTSjqivG52FT24v7g8Ci4WpwWgvi4sk3au5FMceDk9WVVTaMv57bYiSsb5HceBg84LQVpSGKnKDDudBZu",
  "key2": "5j19uhVpupr83JgjpaMiT4DnrFEXFSkGq2d53gaVLUPTVNaZcJHEz8RhdRFWGbB35rFGj6JM4B5KkcMKPa9uXq34",
  "key3": "3ssTsqbXV4C4miRcQB85fX6dUtfXmE7geoYYmJHv7WCE2DkcHoQo6Atgwh2J1SxN9PaavP5ssNbkyYry3Kafis97",
  "key4": "dxqnMDUYFyAun2Jn1sMh9AyBhg2i4QAhVNcmhxoBL3tgVbfRhPiykib5UtJzFgyssDLHGWGsTuszmqgFE65X55P",
  "key5": "4aLfsebff75x6Ln3ZKmbCYqX2dfGyJ9p4SL2WXiMAxfvr2jhFkHyy4UhyJCqA7jpaAWBQktx6sMwD1vTJEEfCeVV",
  "key6": "2gPkFMAwv1h91bs9freN47yJrN3AWqaYjMdqujY6HKmn2AwgWPjVPsF3tixQcdf2H57n4fReiRjoEbn5HM5a3tBD",
  "key7": "5oQruM1xSdAJhf7zyTYCNkFUj6Dw9WXHp9qg7pja6EMcfCmmD5WpjwDzK5ZVZ9NYCvBRHeSJf4FtG89q2RkQSErX",
  "key8": "zAPunuWtoZSd5zso4jaizyZ7FVGy6GKrJS33JQxcN83AAGLTxcSnaWMmZQAYTW7oWeknyBTLAD6Tfn98yaao58y",
  "key9": "5RWhkq9xVrmktysNnCsGSnd8qPinF6aveneL2FqUMrzZuKxjgJVS8XbuyjN4xTnwE4QiDMmNzFEtVLNVPuB3Jm1c",
  "key10": "3V4WW9FkELmUiNHmYVccAf9pb7zDxzZJ9smVbwSHNzQXe9tkDKDFPCHYzVELaBDdi1fgHr1R295b7D2MyrtAiFyU",
  "key11": "3H7G5yfXg54zECUzrptSQrEgwKqn8HXAVeE7SybGDvkq4zBCB3QnPxWEdVi8dQXAA4St4cxfpsfMz8DiUeUk5FzW",
  "key12": "5BC3L7U32ihbzjiFkKCTYs1ZbQmB7UYPgFDbDfFPoBDDxQ5P7AsZi65DM5opCyugaoQJKvUEsR6RE3baSHfsQAjj",
  "key13": "5fYgqXVDWGnqV4jsicU9CPFCVYr2xyKWz62FoxsiGpNPzQAnLTYd7v9is7DaUZSwfuYmtjYE4Nkj21BBEYPwStFd",
  "key14": "3coc1egid7zCdaSGyWpg3mKE3D6UWXgWt7hZeD4Md6MBsdyqVza77nW3xthf2PJNxZQjpbbPbEV8H8EKjzggXBvq",
  "key15": "2UrrmDKb9QuPyWtb3YXp6hWXsqgNWYJKWwmm8aktgTKTRZDd3JcoKf3MmWPQzfSJfhiufhkSVrPc85dM6T3NqFbY",
  "key16": "4Ppc1SDKhcRA7VVEBQd2kBd3i2pJQRjxXFEKjyYjQkt2b2x786NH6fibQBkGFESUA8VgjWYmskJb9S4kHpfrzubc",
  "key17": "3AUQiuXdkU8Pv3rXFcZZBqcQURWciUpAtyLWAXhgHskB53rtki8RMpjGD1LoKPD9MFedLUNbgK5K3iBDVrtvDpvB",
  "key18": "5DZ5GmEzk54hKFApEYP8CBx3VvdsDHXzqfGHSksThH98f9Zhr8AVn3Ssp1D155LzCHzEuhtweqBPgSDbb1gcWsaa",
  "key19": "5JszcKHK2JXHHoEjvQv9a6R5BTmRtz955gCukW6hE3qvAqFARapgv52f268qiSWkz3Xq5wMh5pkgaM67PkUjraQY",
  "key20": "3MciQB7uEpSDdBDufHqsrLB7xTKpyxQoVGmiTYugRaYaTxmRHJmBjjnd1ZntiVm8M24GvGhM2fogHmuBLHL2s4gG",
  "key21": "Ykw6mfqAMC2vrHR9Y2XW7dtJ2WMA8A7k63fkNFnDoErmCT59hmhwXMAnWxWPUa8yLu9KdYfhemtf4ne2WuYhBRS",
  "key22": "4XS61RUNtLgfZ3UFupG1Hs7AUV4ASyMKm3kfxz5Dh2s2vhLenVzFypHB5RD6n17LBthRuD9XvAtuRkbRh5kqmffH",
  "key23": "369EQXAbq7Qo1Ygnju2N2NoqfJmActQ1xYaNrUhWc1fHDoFxvqB6wTMY6RDYAWTJQB9TT3zPoSy5maL6CKD3aA5A",
  "key24": "2avcNsuE5zvL31DzViP1wVWAWi65forgGdrZ8Sw1FgTy27Bu5xsFZi7GTF836ESup4S2PRKTw4oP1a4FjzPsEcZw",
  "key25": "HmBpsfQqNaS8a1mGWGB7oK7X6q3VwLjTDDDouBub8iSHjxLYNrpWUd7y4Tdg28EdoRwDeWz3TDtm6NxavJRjKYX",
  "key26": "4weyounpGSYRN9hsskLiFAWeNQLqghS2A3GMXzC9UVFYYh3jz4otLBuRRrnr8wjRHP1Ai9yCXTdku5iTLuDq6YmB",
  "key27": "4TFwHUFt8CjKApGYHe8hs56Cbey6rCU17KuMun4WzqqmVGLdvdQcuyeyhvjQpyv6SdJf5cvnkvHR7BboRGCfP5HE"
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
