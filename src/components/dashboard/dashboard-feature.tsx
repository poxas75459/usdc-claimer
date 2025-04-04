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
    "2Echeffc3jGT2t7fVjfmshFpsEM1ojc6qAMvg7V3SDTcsWZVNZDfqaHY4tPbif53RBfixni771UUDhCaZJp2wrnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49TXAZBdmpyaNBt8aUU6fZ7iA8VF9GHvLAtpedpLL7KXiN72DUfTUqbY7KSnrnEeu8FAG5c8fYSzuxyQ74mMJXyX",
  "key1": "3BvH2e9BMf9sFyAMbwgq6wMo2J1b2XraeYpbsZw1jRLqJABcCP9pBgc4MQg5zYtjAE9o4q3F2TiSmKSeQ8PFAJS6",
  "key2": "XYFJ4F6GEmwuH7PNgWhY3QxS2Gm15BnjWBG9nttz2nvt8ki6gWjSMfo7dxYAeTNaQknjzSCcWQ1Pf98vWsyrKvy",
  "key3": "7t8EFr2YGxc7qvY9Ua65FBFHAyVZxyhv78hAL7Rtrt1bQz2xXtDpjM6revYn71orAyUZmCQnYxxN7xwRcKAHz2Z",
  "key4": "5VbBTSvZqd5R8HCmTJNezftrGMsXVrWbYaKfZbGq8AvvHjnmdPx82JAbxKeybWn8nb5TUkFekFWGJ3DRRpP5YTBw",
  "key5": "6CNxWqNBFAfJR4Nz1sTRZBp5C8km6iXSDjPaVFJxSogaWaT1diRzn6VR9iidkByk9ReW2941H4rkXRVGH5VnpJE",
  "key6": "2fV14R9LW2BM3L3C1Ba7UXgFj1xAziZk2sqpCv5FrUbVup7GJNPvipGVnrwU7rfYzx3uTNpCwYaE9PnL6HujiYHD",
  "key7": "BGeDrm5U89b35HcTt5DfC5BTfWq2vzRJUUZ59kicSrqWEWRGR1sjaF9T4e5muRSD2YqsKVDMrJu3QP4Muh9A5HE",
  "key8": "35RrG9hXwyFDuU4qUTZfGfZtrae8zHfTkhM2qgbLquWMATdJQ1rVaVQ1N9JbCK2NwujVYQE4UFdmFnBgnL1LdLHv",
  "key9": "43AsSHx2VKib58rJNqjvxhHHkdejbfkhNfYUFC17ybYunSAAfZZAb54HDRUvCq3Lid19JJvn76QDt5ZZqBiBC2Ee",
  "key10": "3HyyFrUu8E41pii9VJf1MvhbR4T8x6k9DDaAyh8Y7LMWpwb872C7QH3CwK4eqm1cDUa1D96Uv7Y7vpBjNK41yqzR",
  "key11": "2JkRDsjsfNkPZDm9HeMb8eBREUY3GbkaPPssrRqVjB5q1kKB5RL96fpCpPxXth8DRkigxAYvxwK3LikzA9gKfFcF",
  "key12": "4bVAtSftmJZGrwkrvgpeU7hDjcXL18G7eawFZPdBJebE6zJPxsf7jFk1rhoHmqtkGW1M61ZLvri91MQuz1ehYU3p",
  "key13": "51m35XTHagxTLsfvYKDE2u6F5i6Wc1E2mFDGHnmLAf5YMpjZ4jhJiA43w5VD6dXYh6Z2kUzAg3unFV569UmZVqcL",
  "key14": "2Z9GQTmsS2y6sosdrGJiP3kmtquNwbCmqekyeJDD2JX2NL6Qd9N1Tt8CdtrApzALSdHgsJ1mPdr5vD5JCbxTB2WQ",
  "key15": "3yd326MgMkrdTgYq8Kdm6aonxvQYPdfeP5kHLSw7TzLA2kU4pBwo1HGL62KWDaP6JN4NCHbW7eb26MNFdAw7pfps",
  "key16": "4VkN4spF84ajNEvZ4FWLCNiioHCmmd69mwdJeUeZGJFx8AufS388FrPUG1J3ngiFJj4xcBVRTzX71Z5EvW1o6HLJ",
  "key17": "4hmrnAk9SQK5Yaq7RaoU2Svtyapa2ip8FzXCUMkjeykT1YATHrn4MsJujZHPJ1tetwyhDqpQgMXfBjMCBFUZb8pd",
  "key18": "4JCuE535R4ADL8tqNJNK3kozF6JzGsSXHLFdjan9Hsk5Xyj9HiV9utusX9NFaoS9KUhe6B6GCq5abW8d6yDfYKR5",
  "key19": "3GfPBGtPdXDRb8wsPCiHJDwX8htECdFq5FDc2YLaCQ29um3A5pfzfuiVgeRmpRLNY2WBEuRYRHwY3BLrapsjTgkU",
  "key20": "4uS4vJ4Z6B9Ju1bdo4y4b3QQ6Uyyzm6VRKY8KZssegeHjMnFUjSnFzWjvudij1tzWCuu7vRVCjdtkLNyTQkkAL4B",
  "key21": "3xCtERRuwpjK5UCoFRyeDQ1Fxx8MtaWKAFqwy2bX9zrExsb7GtFZ3RmKpTh4Tfb9UPEFX13vWYhfnDuMevhiZGb6",
  "key22": "5HBC9ptqhSK7nspz66QmtxnKZt9ZyzZ813awVcrjHHMDfQEpnvwKB68pTrBVq8TrcH4xc3wbxqi8SnebviYt3agn",
  "key23": "5V1pkfepKStYx8CXHQYtHj5NwPUwpVpwbRoQXBAK5yPptmgYTFuQSjMRDSxkrQ3bhpx1XgUPqZr3xEoPLXjxPeFX",
  "key24": "4tULkhkXsyWH3DWcdcQ9zBceDLCerwWSfMMrqjADK5dGNiKh87SPSSgpCFYoRVryrK4qFghZP6R6xB5A5NPLfmkW",
  "key25": "jWtCnEFqVmWnyhvBhAtUyVeYENnd2k6xhqTk1uc7V7cw1LqrD4X7hSbBmD2QzWSKP5FMB7TdoeVDMPsdbWeniVp",
  "key26": "47ytZJwoM6dT1wW5PtDT7bZHUUTvsEDPfCF8jCziVEfLtCh3d1B5eEpYz41TYGDLsDd3owWGMFNut46jWEJmmANU"
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
