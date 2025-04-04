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
    "4YuPjWHaUfqeEnpe9iGUeXTpNsQNkURbEaSSpUbaAKPPdy5mWoPWZwSzpz7nr1P4vYVUfVMAyKYf3dzNMpJdD8vC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ziBNE7rkhimW3PxZ3TUHXB291T1qhmhUerY5eKEcK5xYtckcv5X3TMpnRGJxCseqHGQRWZJ3xGDcrbcgkNL3JTT",
  "key1": "NX7c2eCNTGGP5bATsxgQZnti39Fo2rUoVEF2SHKoGJJ1hLqXrfiXpYjLkF3jvsRKvJDXR6GrHrCck9tYgHy4z1N",
  "key2": "3v6ac1NQLEDdmVBPj8mwsBYfibv8S7CNh8uwnDVm2Qv3KFNgBHEhncRJ6L3tRgKJGvSFQLzNVkbRDcHLy1yM372t",
  "key3": "5tTgQSFy88vyFf8hQ4j3ekvJpc66GbyGyY5rxB838SqGis33PiV4ceTbZLSQo4RWPjXP61WPQ2bXXPXrMDp7B9iS",
  "key4": "5Nmb1doTdRGGe162y4dpnKj7LDoTYDnYHYFnQjYi2pwR1bscLZsJDjJ2Wxba46VV24MkWgtFQBVXKbu7HeqPHcvu",
  "key5": "DdHLX4YUbGLopzGcWa5KfiG3co381kooivPXVHKrRT74ke8ssMf5bpkSWnqFmLtns93oefRfYvurt4J2P9egMXL",
  "key6": "34bq3CJsSLf5JsooHesEa33yiT6UbCdBwgVekHt7F9jmKieapcqFEriVrotMw7uKfm1M1H9Ajgz5ouMK5GjPruvK",
  "key7": "JH3R2w2kgjjc13RhqFJniNT3qs24BrDvJNZ2ByuAXa3vMDcEqToaJG7srE8dPeD3N8AmRGqHZkheXtBjUKdadBG",
  "key8": "1eR5RzpYiVjcTKu8An96KRuehFSKjxrzt5jwyPXtQLz9xhoeVrotEkwDYCX2Li5zC2DdFF3TcgZKnCc2bgmrLeA",
  "key9": "3RwKBnY4LNgXRaD7nvzdmhPFqTRXzGTuNmcToZQ2y15wTqNyuqud5nA2bXTwg14iwemnEhgnuNM1PpcU8BRhiYao",
  "key10": "2jmJMfg4TaHUSDjbToHqyj7WGsNng1LANRnSUp2f7EqiBXTLBG4rWQufYVb7FaZytKY7mvbVpzW1TGRqvpo5dsKU",
  "key11": "rVFQzk7uaGRUsw457DJ2UoRyUG88mWowYWUYJa8hw5kfJV2wUdDHNT1TVAALa6rWpR6H1Eh8u174exFycWdeaVH",
  "key12": "4V1m9CeoayKsbZwvSmkfSrxttSVjZKjHGLJ77So9XEZbTjqHcUCwZMMM7rrXs3byL69yyRCQhEY7f5RUBUrn1Kn1",
  "key13": "22ZvHcCRTd2FBGW31Z7VPUbxufc49vRUAMYKkJjYZvtEs4z7ZKbDZNHWxaBhXGhEYYRjZjXS2fsv8m9vjpuPwvHD",
  "key14": "3sK9H3QpJYz4uWcxS7USoBFmXadrk7q6BxmhR3vgPVM9PYh8FH1ueWZG6Qf9f1wTeTyAVwLh4BwqfhbFpdz5vxf5",
  "key15": "4wHfhTxywAVMSjRoLLeBjwTUEwvcbx49dJQRThqhFpcf76FFdxqvwKNwyEdjy8V7xGFkZ616eEPeFAAGDDELfhak",
  "key16": "5D4pmSVkuvaKwbtT4Bgv6fvPDRqxenxwpeGd5FqYySZzC5WyfjJCiabv3APvEWN5sXpABVsgSAbHNCTooTVF8fX8",
  "key17": "4ZWLUSjM42yBpwnKAhV7tBg47hA1Coj9TU3exThtJ8tQTW457TXSGw7HdT88x1LfWt222iuXCwXuoA6geUENCAu2",
  "key18": "3b2bvzRU5Ex9BEZYqVc2RX7ZFg9MezdTXU53mfUfkL5CYkLDa7PicpDepFjE5uJb6icudXxUFLnF7E9qNYF5aoUV",
  "key19": "5QM3wsuZV1WnfxckdG6fbSsUhiZDbhDhS1CBEWCTUc2rX9hpA5cgkuutxo51GXDFJupH6iGmxqntVfenTrnTgDwc",
  "key20": "56DrXQzaMFcVQRbb9uW76kwStL2cqKyjszKRJevjp4XKfVbqqfxjC4VrRWKGMzGkHQoyc4SAP7jDWV4geFQ8AVm3",
  "key21": "4vMeHXuNY5j3Az1JK6o1oqEESv4kbjpTCgsgL4wfuJS8BtrjvUg7rt8QHjzDw3HiWjk6ENSxhsbTdzTjwcsoqbt9",
  "key22": "3oJPMdSTdMbjpVkXdzgHaQ1LrcGFvKKDsgtGFr6Mapji4kHwfMpdB2SMT7tfK4N1dk36RZ8xxBwZ5C5dLyXNQosU",
  "key23": "644KS6zFsv82CF1gTaLanm2CYCSSJPpc5iKYNYK7AXqgbGWsRenA3tFsRyxdnx6Ldj4LtgqQD8DXcstRbsPJS1aC",
  "key24": "31xD8Vim3FXkWEBE2TJLqmaaPuciQw2JgJhxNHHVAw7hQofNBKU3nbemu8s8kfcrhj7U7xd3Ns6qGtyXi9Msz5R5",
  "key25": "2A5sfBJLWuny3o7quFXYMtPS2hmxyRJjpvhhcnK1WZUZHS6umFxPVzuJz8qmoVsFnGqwEDXha4rjNZ98ygyQP3df",
  "key26": "31bKL1peoqoVy1sT6121reE3s9bHApRzGGRtD1myC1R96QBQpJGienedwgXV5n4U62wkHxSy6w6HkvCG4DT2fDTf",
  "key27": "66DLKMU3SNB3k6nL2CoHCc1MsHQoKBXd61jKRBbuEDLgHsRL8Bh4yGxUYqsBqrqyyZRoFRqHvHPukjLsj6Up3rgi",
  "key28": "2bseZxpguJiUR7FUv3k6iujmdus9qjhgF762Cb2JRfyYKxUDKNmXD83NoNwHGnwYgsguuRwF7z6y3tioitQTXXnc",
  "key29": "3LiainqThzRdkmrQ5nsmVHHDrgxnZ5KUWaWYe2uU136SiReWB5pnhDheoXmrai1EKKjdW8KXqmNESbDJpJt8Kth9",
  "key30": "toXx4pYwY5FoRpKkFj7J9KQk9k6XDVAHSycDakfu3vaBWCXDtfqicsaQFnyhEfcGRmokHhQpfiaMGgVRgva62LP",
  "key31": "2z8CVS34u3dQXaEyRAn5Rj3qzge4ZvZbKJQNFK7BAaJZhxfdoMDnQxXXmfk1ShT6DWkPTrqFuatHxi3seK5hx5Ra",
  "key32": "4ypPzv6z54DrN2unR4T24TTNpHPKDkCKywt9Jcn5v47MCthefUmYEQ6kKG8Ep2NbMNmdh3BsLVhvmECdHEmBAc2X",
  "key33": "48fG2zuQH5ru9SmBLHUcPzEVVcpp8M14tTYNUX9M4373mpdbPJgWBtDebk9i3vYZUfThCZ5EXaABUVCvSytLCaDK",
  "key34": "VT7QeoA65v2YtwZLSUqmVFmcG5iWaTz93FRggHS2V9JH1kQbwiKvixWuzbgeTEtXrvMJKvB5gevNoCVvcn1E3ok",
  "key35": "22B7WnwDbwjcBhC24uFhec4ynkLZdPpozQejCMSQBZ4e2wRUcgDuUzn8K1AiwoVq1rS3TJJxFK4eQ8TabWrPUSMY",
  "key36": "3jB4ChXQnEZjihDvLtYMoiteahHuw4sgyNkxGzM9Pz2GFoYe94GdjJeMAQiXjvuuT9LrUGi1MNWtX4vTedDtgWrr",
  "key37": "44UQFJQsCWWepL5CuZ4bHQtqPwQAFA94DULKanuMBAyGf9nmvrYadNSkXUX6GTECmQe2kTmF18AMtWmzQRT8VqZo",
  "key38": "4oEzdq5PPSSpxTc8Z2jfKvsWt5nLanKERLj6NiNgCo15q83N2LPyBxHakTo6p94nPtRuXvbTJ28mrvKeyUe8dzik",
  "key39": "3y1MEyCLFGfPhd3rQJCEz86bbAKJWGWuiaDL5aFfbLbfaGzatimDkSsN9aM3KxonKAKDzgfV1J6Wqg984W7xvEno",
  "key40": "2mTUwYctc2oMmnyzzLi7JHyvpJkzSsngVBMxCXfKujSrTykrgbbhtihkRZCvq5BoiJHkZwWZToktfqXSUmbovGSc",
  "key41": "3n2aeDKpodyApU79StGpiSKp7MHigtfH8nLesmYGy7bHjVhY3FmDXwDc4Yu34hUEGA2jAGz5FWq4D7UJrYw8kdME",
  "key42": "24b9U4saQjQmVeCAhynNxsQRFsfFvX2WJeaNiwcddwtdApexxjG2ffeG4RRPrPvcCib1LW4StBGkDaSUEm5sVGCY"
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
