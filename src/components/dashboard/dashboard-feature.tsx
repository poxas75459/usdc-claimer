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
    "126dRPgbzy3crTSXyyjH6C5uP3ohmRTjHcufUPRPqk59Xh6Bwg8uQvn2nktFbKZkbftr2oTpDmHyPwGvkYyrcR7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zbwTUyUnZBhRZ6Tb4tFjL35ZuMUL3ouHGhmbXVmCfygcGUzDDn73cGvZ2EpQJf8SpadmEAwArq4czbAiuwgkQre",
  "key1": "284uh1hXjKDUZcwh3k4J1yfbSNaBU46FcEKZ8V8Ves7Xmxxe5gdkxqNX7CiFnTZGBwe5mXJY6HQkQGMnP38PhXuV",
  "key2": "5hfVZwbV73kqQ3UKKjDQYWofXKybPZ7DfXLoSVyCt5jXHipC1cdBqtuLpwkWWz85Z3y1bDk6H4HybgwvhzEWvM6H",
  "key3": "2NftkmTJNKnhsF4b4sdiWB1q1Ut2gLB9C3JuNckpbCaS94KX6YL6dFRvGHnjc4Xo127GsyTA7BTq4yi1pTogrWvU",
  "key4": "5ozPnikhkFge57S9aJPHWLeDnAHxQnyeAypBMRBEBPM7JXsApyqXpxAKEr3XQxrbNLtUSAucbaXhQwm4eSSmjEii",
  "key5": "3i1bkWQgkks91dad26mwGRNThfZSPgAD1pM7RXetnCcGNxaVyA3BjpzXmj8Xtpu2v4xd3XN5Bv9s4VYy8VQ3wQx7",
  "key6": "3SmF2VYF8hnDKHrVPvGggHkvCL9stt434pVjrzEXsZMoUZrLPWpaGavWAAPi72WJaWMwFHU4fhvknWSdLU72NRie",
  "key7": "hRpf6CezYP9V6d7BtJLLBaxemLHyzb1FumoT7wuM9TCAuLZUu1X3Q2seU6FkNNV16mCP72JLCnE5TuG7MBiGJRJ",
  "key8": "4jn6iFxejKgEAeJxNcY4zrp6QU8gTfbuvZy4S5JMdhVHyTDfxc6XyAgGvi76ycCuXjuQ3wA3ohFYeE7cyU246hgF",
  "key9": "4bM3PKdGFXrKNyajS5Wzcjd6SjzicktJ3qZ8Fat7oXo9ZUGexuqa67iMiej4tK8B6Z4TwRFSvtu2MR6M5UrT8BUk",
  "key10": "2jw2ZpX6hNC2bsZnGbbZnv35F2StLxL5g9APv1WW7AMwvzY2F8YiWkimgpAo5t6fho1FDxgqzzSDQny6JwvykTRK",
  "key11": "4QtTUhDxXLVrAjwHrmJZ8v8kC3ZSeMWP1XZd2q5VpmS92iR2DdaLiUF6ngnaoZr5bjXr6wBasoun9oUsk3Xv75w6",
  "key12": "5c3SPMuuMGXTjGAR6iD56ymPbp2d3orBcHRhjAf9om8TancxuGLE3kLwzcnRq1dN4A77kqY7RAoCp8vgsojQDH3q",
  "key13": "65B1dHUQvPMRQEDXFH2QgxUfmvq9GLxrkP3ZE5Avu1BuzfpdtDkzkXnAdVVBfbcAs6SPkmwJsBY4cFV8bqdc5Cdy",
  "key14": "3PodJRAGCBW9CzoGwJppsmf5vpSwm6defgH44pMUnE43cj6MwNnfETC2rxkRF8JBRG6iP7YDm5PxMaXyzQe2UQQc",
  "key15": "yf1HdSjKUCaProP7amgS9YgDXTwM5VviY4kwMyfC6bjxEdRNwju6u5AEgD8rJxWxhVmnm7d3y43joeuQ6rRU7CG",
  "key16": "2VW83JGWTEF8HUfsFQFMkPq3UyGJovtyjSTUNmmMpf1BzkgqdeCfPG5Yopt5y77Vvrq9V3vMotXJhb8RNHEZCLE6",
  "key17": "57ab9XhNbXQgSqBuA1BEnrjLC7Y5HCi852UsAp741mgo2QLnZeKSCWG6iMPaFc7g8fREMRDJJSVArsuEtgqGbk8T",
  "key18": "QvCBojyqfzRNizDomRMoYo857pSHncXcuDj14uKbNd7ZXwZEwestzkY6nigDkNACFY3gWKXJ38hSD8thzo78dnB",
  "key19": "5ZSGd1ZXfbN6ghkjZa8ogjdQUChGudZtULrS8sF1Tu9xoFT2PAYDcuxd4cSWK6hnHPDDu3bZMJFQfzHoFxwbVy7s",
  "key20": "2eDJReESs7WWzN3gBLBBcq4y7PVuTdG49RNvQpK6Td847MC6z17J7sBNoK2F9n8SFJDgGdhtxCRoC9XJ8qbh27BT",
  "key21": "3PZyx4ZZp4Z7FnWo64M3E3vKWMnCinxvfHFWhp8y9cW7ggA2Jwm7rmRREP2BN2sRMUuxsSYn36z8RNCQcs98EkpP",
  "key22": "3BeSB46yWoNyPnERcwLb3d5Gfs44cfPFYFbjF8ttDELvtJ6A6WVhcgqSQ4RSbSTTwrhh1zj9iYYtNv5mrbhq9CfZ",
  "key23": "33RKPBc3Jg56B2CJgEv66R3mtBHtv6iT6t9XDtYjYvFHCP3Bvu8CcpEeCzMex8oG2uUJs4f8oxQRFESzos4Ag97r",
  "key24": "5Fpd3VYbMYmKdwHoadZjbqUjZoCYXupwT6mD1agPxTYBeRYgwiHQv2oKmNoxLpUhEDdqcgkH6nfeubu3hLKUtdDp",
  "key25": "xPwtZe74fa7mTz3hZGCpPEnGKdQ73aaqbdN9fJwBYBaZDGWHusgYvo8m3jQHrpQPvpQkBRgUkoeRfBaYit9EiCE",
  "key26": "4vEjmtmDSrozoowAZoAN6NZ2xKhdmfq8XdHPZE2uQ3UrF9tx5gxM9KXuwftMTC58eBDHtH3ib3AarbDrVugSRB1H",
  "key27": "3KQRL6juEZpYKHKzephXEeVja6n2tMucAcHTgBJiRfv54ChKUUsNyvbCr1fAwJvH8nywagRGB333pJuJnoyz89sC",
  "key28": "53MXHuHUVvBtswTPn7uA2TvsKAkr7kafBf8u1JYfkeUBLSFLomAbYyuey8jrZDzKd84P1KkYbm68xN8MV4jD8ztR",
  "key29": "3himBEmrsXjybm8wCZYRHAaiTuZTZFx9FwRekHHfi1VTDC5N15UXaam75YJ6YWUm3CQy4dQPzLt5HwZwp2CV26wy",
  "key30": "3hfvuctKsDo9ocVpMoiUv7rtaMFTuGcMCssjPLMwDM9jUtiKRLyz4maWdLwKqLSxsERfCxGetgxrqAuCC9re9PA9",
  "key31": "5tYKur7zEzjagwDHuMeTedTMqP4A8zpETwpTXNa26YB4q9tgKbFEx2pB2iy1rS8fntFNYs7XeCK5aFsDkTmStvzi",
  "key32": "4hWoD3EiaVwVAR7t2xcdMUNjH2yMp2dLaVHe9aq2in7XqpD9p2bfTa61PAXUMfR3Vxe7YxiymjwiD1jwo8qJMGFH",
  "key33": "49VT3GjhoPFmN6HrNE5rEH5ov7itqHAXug3T1gvhA6LgUphLbHdyfAAt9xDk7b1ztKHM1g76jmvuDLDAbjZcQGHs",
  "key34": "2kVbyqMjcgjyDvXL3FW98deYBd27aGvazfGufcyzxrEcwgCJipCoKFHuNdA72ghWXDShFPTNgj8NZvJwZoT8zxWy",
  "key35": "3F6WkYmeqh84oFJ2mbKE89b9kWd6mQgWi8kmTxUPCisCkg29yF8yi3eG9Wb2nxfsLPpQXCzSbmKhNFd2NgxPFP6P",
  "key36": "Au6iXfX2ajaoGibYS8Qsn8Don9bXfW5ktrHPxxzEQHGrCpfN2d6UrVD6CySWKfCCzZwPiHcha5hZD3vXxXfBtuf"
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
