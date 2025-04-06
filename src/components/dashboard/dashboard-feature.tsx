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
    "2zFRnVHkebeSFysF5ybzeXsr65fcVVMKvJcE6LjsV72raP1byQKHsE3sMH8edaGTGjqRYSY1iKTMLqgUdzsZudXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BbjiquM8EYLfndpYtPf7WzPr7Ur1ZC19pPzRK3pg4jLLfShdKPZMBGNgrfBXT743v1CwAD9ojMgKW5RcMQhokQo",
  "key1": "4qs8bnuCQycrdsajFh3fsCkKCVn16ZXyHPhe8hQjtMsSqdcLFzhrKE3EhTsR5shBafUi2CUbpFgcZz3RpqChZhxx",
  "key2": "66fSK7aaAWN7mCgyAF9Q4RuHUARdVLqDpcg3oES2EQQekMVm6UteMsXWAqySyrnFHJ8Cpboat53yQxB2dhbxbbW1",
  "key3": "4pcTstpSE32zzCjdhfYcFnmD9fDM5vNEmSjf1Pt3dB5MqA8di4MfQAFa4hJPNPnUi7sbRFpEEqh11BT7kYt5JeVt",
  "key4": "54hLWQwAsJ8WnwjcEdcJvZukjCw9rqm2h3cod4tLPPnBpvNiVG2mr7JgMmuYobxs7WHbNGdiSX4dmdNVWDFhCpE8",
  "key5": "4RUnEyM6Y1TcyyCjWXERorENNuLtqNS8hsoxbA8AJMfpjEzbpa5nk29vX5gwQiCveTgaV78fgEaCwLvG9F17QbAr",
  "key6": "43BhraR8nKUAfX73SN1WezSrhKRBmFJRCCVxKj8X3XBVyvXkeqWiJLijy3spBkmiSmmkqoEf86H7m5TWCPP3iHXA",
  "key7": "4Bs8b3Vj52G438FfxGhAAAMNiHmreZnPo9tcKuJCeor2LquQegG21jJ76GcQcxcGigPVrbQ6S9FyenRv5wTQDyPG",
  "key8": "5soZcbztukT72ytNA1GUEadG2HrpFUamhWsCyEqxnJzr4CUTBhrJABvXqp4gXs9bsPhD365yyot3dvPr81utAuv9",
  "key9": "5CN4W2ifPz8XqcRyNiPABtd3fgVrHx7iE2gweyD8m6eDT6FUijKuB2fxkG3UMGoe2hySkhWMRtMxKkd6RLSvMQUh",
  "key10": "54vYfe2CZMA52gPowEQD6hLkYunDu22h2GZsFknfpnqNTyw8hkHK5urr6yxXpHKLku3xduZpUkfJVkATcNsyw6Nh",
  "key11": "5qUZwSm4L3QJe9NMekjhGfmNXM21y4UMwJRbn6xTgTyYZv2pV16TvZTX4KBVZ5sVxSrYzMaxMwZJ1zRvAkNDicAS",
  "key12": "4pdQ3i1832o6e7b7LtWP5FXoJTDut3AZPnyuc3rz2eTfRECo6A1Kh32hUNU8KRXURfqKXoSPUTiH7ESQDJybpg4b",
  "key13": "ogE8jBhEv6GUebWHGrDxxy6nFRb4XGXbkW8r8PYoEBPMuvcArhPue3nCyRmtXjFwrsNfCWqNbi2NCQJKnen9WcH",
  "key14": "zjmhL7PidR9XjW5ujEJMrzUavYHX1vg2TkxpLhZ8Ly4cM77uCra8aFo9YpjRta7JvMXmshkgjagRzRCDvg6RnvR",
  "key15": "3PTJmu3q1YjEGNsf4EeZ5eimX6rQ2b9AR6RJjqYpayWUoAGATFEPRNK8t1TGBWkWpT7kEiK1XKmjFYadmvgCqo7N",
  "key16": "61qy5Bdz38uCBxwHU2Hy2obT95q4vWa1jEzZvGq6FWpPUPLq5uQNaPo7cLwqS56ewzGAcD6RJvXM5rowymgUkiNx",
  "key17": "4JYnhSkW6HhXN8oJtqRuHqja48WZR3pREydNPCqPZPzpPV33QrmwnPtvqpRej1szgssByWde1wtKq2LbBhEukABn",
  "key18": "5hJrskMxptE8DPZTADoJMJXYCtFHvSinvwogB6VXxPtuKKYspg1zEbRkkGaiQuWYT4KU8RHJQH5tcaF73QTPEKQU",
  "key19": "4hvyQK3rpDFE5Pw29voj6KqE2dRJr3cw6UeSZSb6kna15ARWpPRkEj5rVUg3iQQFuhv6DKT6vw4hnnCiVm5q89Ps",
  "key20": "3X8DMU4QsM1NpghKruDy9Sov62Sb5Ka9N1JoUo7FkF9XtwqWzjuSpyPAiMj6ik7dVfzAxs5mRV15KFgJvTsUthXD",
  "key21": "366L2vdes7xzvcNPhZ8zCKNThTSwnjbwaGJWBCkcGNPgRDfK17i6ePC7zE1JegzS8DgyyoGZKvC8EUsUxHBCk1PW",
  "key22": "5HtmNG8z5rDMgaWkF24ixtrpvuMcNf9iehNUF37ETeNNtwkq4oeD3qwD4zqWB8FVxsVwb8GDRDyep5pdhx5D7P6z",
  "key23": "5eAJCQhUFdDtV5sjABkqP5GwUVUo9SYYoerEuRB4yUVP5ppQvJYZKcRRH2k9fqdbF3zd8QXU7XULXTzNrNSN4kgi",
  "key24": "3WTvMSLW9h7BkEd8ccPhmvTCvUyufKHbyUUaCdHdr9Yz62tpWuK5Umt7vawXj7AdR915RSKHhn8a4RCXxt6KG3iN",
  "key25": "rVGNCeGefiGtidnA5HaaKDzT8iRasanrr1HbbL7dooiCHFg98Waz57EayC2gswmqEFXdLgRC1wd5PeLo5JUmV5Y",
  "key26": "3xCt3t8uGKdkMEmkSNg4eDGZHmpttQb2pS5RhonJEtMd2rdbeaxhXLgYs89FG493kLPENhE9BnZ9GsNFsbbKVSyL",
  "key27": "5LQvHT5eo8DtdjH3Sq1DJGrt9Rkb27eqoDt1QmNzMNkfxWhrmMEkUF4MPanAYhEFYq87v63Y3My3CMH2wK9WaTXL",
  "key28": "2tRBD6VsBAYYNyMFdUb45Fn5czjdFT3SKr15WDbHqBxkMoeUhN9nxyCkiXD24KyHkHkxbZbmLnZchn1hPupF63r4",
  "key29": "3vU4ffmjSPt13bBRKy9FR2MJHvJcApMsiKLdkNKBoLzbJ84ZhmF6Af6A82bcY4EJXsyjWghhFX3CRA9F5jeCXp39",
  "key30": "EJzD1K7nM756Hf9QvxVnKzND9zvEFVvsstxezvRvMbYZrjLn862GzRoG6Xcn3K7nPzSHT69jGyFr7fStj6AfCkb",
  "key31": "3xdEebhcZSRbtdhima5X5tBE7odXPxbFSYn8b9cWBEu1pvqZ5wvi1graM2LrHX1QJSsi4LY5f1yEFgpLwkY5MaWs"
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
