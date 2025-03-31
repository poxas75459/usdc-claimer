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
    "5hfttkvV23WFmsoJtHUM8o5Kj1Qc1Ldpoqxu9PhdV1KC74t9E86XkW1sA6D4sRUogZVtukceCU8iYoWCupBxjs8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5htduapcCJKp4oNDbZ3GwAa7cThCRHdMtznXpok9zg2qP3S1VqVyJELPUfAkFQiVM5VqbJwMfuuvjH6udxpUDLRe",
  "key1": "33BEX5i5CveRuHQbMedx7Zzh2SK4N3CmjcnH9kPUaeNTPeEKQLtqTmwN8e7sS8zv8FjTPVYFCJt9xhQDr2viNTQ3",
  "key2": "5sza6t6pQWrQsnsh4eaWsxDuuxZU5KGFggHske39BM9T5EbF5xdY1m69f6i3F78kXJmKmRvAC6RkL5TDSqPk86dV",
  "key3": "4iT586XEgJq6hnZX7VxPdouUps2H5xpgsUVSAx4eYqskmwnRQNdeJUwS6c9DswrnqNg1aGCn1aQPDhsGy3RHsqxe",
  "key4": "4ccXwgor2qxLdptcZ6BNrzDDPbkZStyG6ktoLffJgYhWgiiukBmw4ALWT82mhSDiHSMRwzCmrnNLY4zB7hPkUdJn",
  "key5": "5h8FxtaBW4H7qskRtfodM9oKynBgmqGT2Zp4GnxcNzhkSkFhJcEUjYeoWSN3X598dkLQ1fUDToJw75yVQ8FwLbVo",
  "key6": "4ig5SWaT9Ce5kryCTUE79Fh1GqNAPwE9PWDgBaPj1otKXjZWTKBWneNvp6fz19rpAC1uj6aAEpg6FStSj827JbSC",
  "key7": "5TifqFmJGdu5RDcmF18dv1uajuQiy4UaXdYM2LH8vCTd47zBcA9kBK5K2uRWz3qQSZcry1Z8KVZskdor1tR2NepG",
  "key8": "4wAggNhH1njX5KbBobJtC6ao5v1h8ckFAATVLMJd2d7vQGjohiMwgnbAinrnZMsccYQ8RLEjZJdrkz81rEpJdW1E",
  "key9": "2mzFzsS4DSojqRoH8eWMxnh6hWSCeUpW4DMBFtNTmeupz2aUpHGYQyG9nPNc8Y8d99fNxtZStTPD2qxMBXz982HG",
  "key10": "2Ex7tN6T34FxNgcR3zkdpaUpREJ8siS6TfyvWCxnGmeNAB5uSmqcj4hFZHBXZzkHou4byF17gtcgzXKDmYU5JUSd",
  "key11": "3oj4Vuhyepr3M3FtU1qvtMMQ9AeuebJXrfFokdU4JjPioRjCDehrGBfyBCrDfe8Cn3aE65Xg15XDAjRdCWLKhuX5",
  "key12": "5TLY66oey9uPjfU6qZ7DgDzzNaeL4Aq2ZHSgS68qMAUi78d8KwAmSo4TXepE4SHpSFPrkXRwguUan8WA2jtgYLH5",
  "key13": "3g55kXo33XEWissqyQ6iXBXYKTvn1sziZx12aVzyU1TgN78Fz5mu91N83QYSHP1jXjXtcnwMuLWwxhVDrGKCN7ER",
  "key14": "jAQtTVJti1qwVgPd9UmBcptuz69N3cfDgrJKSYCoNKsuQM1ewPA8Xc4du6pvg1hLfKfb145VMaj1M3KdKM5C8Z5",
  "key15": "2LNbby5bi3vZQiu4s7qpVTbp8GNp27NoWU9FRwYTwqqUEiqyStrrhPKW15we14X5WMdZ6wEULn8j2VMghYKvM5Vh",
  "key16": "2M1GNhk5azyYk5fS6EYmXBYc8Z7xJBFU1S6DKP2GuUSBxwDRmL6tYzBQZZvkTo4RVsiPYxagLygFxbFnTc5SeDLR",
  "key17": "2U3c5WRKp9CnZJEgFpJU6DH2iCciwszsGmSKeHDScPQrHbaS3THfW1TCBTX6W7SbBzwNDyEtVLKhNuCGGe3mtCrk",
  "key18": "4CmhLfoW2oqaUQnL5sSYPv8NYKdwqJnenAzhVVSvMi3atoVyZv3ZmWa1CFz4EmQnU9rSMC2BEbZZnmFcSqistkdS",
  "key19": "4KQwxtdKn9jnrLZNwgLEJ7nqFSYZj9Av2t7LdgW3YsWEh9QPy37K4fCoR94M3WWG4Kcan6jLkJDV1UAYwii2CkEp",
  "key20": "4dwQ5TU9vFARSR3GPc5ZxT6gjnd6dmLBp3panKfjTr1VCdd9PaLTWZp7UQf6ahjnQiGXVT4o2fANt9zvAEaikf9J",
  "key21": "47xNXzfeC47RnDERAZDEa7jvMKa4rM3rb2YUz9Br3fk88mQhiCDBuTwwnKnMJFbuGhi5AapztwRo6T6XK5fg9hH",
  "key22": "2h947cDgzzdigsxqNTYrvY2mSC6rMeLn8t47tkVk9JUhjytMhXrxLhGPQFXvKcDkKpsc3GQDRW21HEtvMkiFpe1J",
  "key23": "5BuwbotdGqjTk5VRNHGRxtu8k1ddYGamsiy3yNxkD99BuEwSdgxWRDchnF4sRoz4rN6baZ1PApjaP2r7EJmEH7sR",
  "key24": "sRHV4ZB1U939YL87NZNgbRuEecpvBFuQCAszQ1giDZwj79UPNS2snKVBk2rx685E25K7goadXEB4k7EU4zWk8rv",
  "key25": "hqsPxTEaFxn9Ca6FV1s5d7e5vcSCaSW1jCGhPECiEocJqQtPdtWjrgCfNWZucUAf2ZZm7xLgEkUXQR4RjCcWeeE",
  "key26": "37DaU7LBJsTbkJToMatV8LkBtCKmo8pj8iaMBFnohcJN4Ruq11DTxiLx6ipr4Z637WXpwCHwBoise6h5Z6ZHMA3f",
  "key27": "5XMSK5B3FbSBmxf47TQJS3jNAKtC1vKsBWMXikAVWB28VX6qCzGadVSfTUixMu9bsXe9jWr1ReNFqfikXCXfv9K6",
  "key28": "2kszuoKcX2nKrpfC2Yp6ZsakydSZnquP29RUsW8S1ohCQaF8LHFDb4xFx764mXfzM35uoE5wGbQ7dHJruFWZ4N5v",
  "key29": "5z8rieHY7ScdZj6JbK5tWhLMJ1oeqF756znVRWFbtRagNiVBGTNXJCiSfFih64DhV8bRCiPCw7h4EAp9KTZgemMd",
  "key30": "2DboTyybWDWGbviTEugw3jNFNueTYLr8PxxqvLZCNd6aBZymUk2ebUqwVHM8uNsEbTnYiG5t15BP4aqBLhVziAZA"
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
