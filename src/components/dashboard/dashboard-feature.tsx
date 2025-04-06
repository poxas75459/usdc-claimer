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
    "5fKqR59MPgJzVdMbDjUn6nP8jrMxYDihtDmggqX7ShY6SXZgMo9hF3Nt3wkC3aYmBANZMYegiiVSAavpbhwEMciX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v57T9Kxq94LUNjB12KQF2TnqAXygJieCaFnS545mGWjgJuZTxKVp4p8LQX5Cp5VQcVdQghjjy2ieRZeu1cwbpDY",
  "key1": "4nndSngEzWdQkUQq9mQPpMk3QUxMJftsTMjDB2FaaeRJJB8YML28MTRBxZ7y1UnrQk9shunGuciHG8GN3cmu2yeJ",
  "key2": "2KK1ENzaPPiHdQ5UXLGD7d2BDmDmToUxQhUP6Vzwub24qs34BDwfBYUwiHeVRuCiBR7a96yjsKCv5ZcwAhCYcYad",
  "key3": "2XQYKGBzJw5UWXULDL4HZGN7QXbsFKw9MD3CNffPwKdE5vjzwoK465xfEeUBYMJ1XWKJsFkzjonWdL2hVFvLzMbM",
  "key4": "5pVss5wGdoxnGPL2RfcftZHau3AuvDAM72XfWfrUtV2cyACP8USskcWrain8QcN8WFcN3wVzJfdSJrKrnJ3y6Gt1",
  "key5": "48KCx3AiwVKKVYw358ztFXzDyugoNKHCbbmmgxgyts1VUgATtN92bxET3XL6fmGroH2pEM2tCGRRZiQG7pk4as4z",
  "key6": "2dCtZnA7gioCZBRXUuc8LzgKAocBivyXZSSU4dBKUEcxjqNJ1sRa6sizUbtBMVHMgfKxNxgaFaL6KTPq8AXMBpkp",
  "key7": "4DSVjpAsW6tH7inGv8v2KqkB5W959epj6BD5k2AM39amAs5vTSmnFnJejACbaBxTvBnX65b6E8YTPoM95SgL3dAK",
  "key8": "38mDCCA3jCrzZAXHvysYrzWxGBTcLTrRFZrSEG8S112VoYZFmpNFVmCJH5E8DhmzoLb8cpq3V2qM7Y1ssu9NsbRt",
  "key9": "5RH1u64SHoeGFaMMWzMKp32eszhuMxQKCFqoTsUzapjAtvxgN7sB9aCJQiS4rY5c9hAeauib5CsSDE8KnUeSED1G",
  "key10": "33p7DPBfrQbGxJhgjHJ2KiamAViq7SKrf2nqLbqoXEzBBKFA1w1dyYxrhZkUNrB8qR2JDWrF43U3bkNP3pRYGJwM",
  "key11": "637V3EmAsJsRfqZ8JBjCw37M98CdQFr4gyYiCkcwWTFr7eUV1xekRwanWx1cvzQi6R75HL9bvxZefiasM3uW8Mkf",
  "key12": "5CgoSHndUTK2ZBtFcLvcVqSdcr5TAiqFkwD5YUNNEADAUkeAuaMGHSWDKC79gH7BE8sUQ1FwWT2EMjEJQtZ78nGd",
  "key13": "4nuRPYsRRV6c7wsEsWfWzajLWYcCSw9yJugzvrhqrwhG6qMvVrLApD1wxGDG3r7kJVGmK7ge5RtbCePzYwCzwkdp",
  "key14": "fHAa7KTxssH6p3HEPUXU9Z435pCmjw6oZ8xo66miHu4w4Lc78kF1xL4axnKnTWgXrRqSqRsA93kM1MEndSRLrqU",
  "key15": "Rc71g694jbUjFFPWtXUkeMkxb6bneRsUdtqRDr9KAN26JDy94j5umy4KfSonxt1tWTTM7cVAnNVY6txJVf9kftn",
  "key16": "28HqjVHEcNGfL7yfRCci1qcs8VV5Q4u88PmteDLKFoHCpk69BeNcmVk67b1P8oadCjPJL4vhWHhnYvhfSEKxLEQA",
  "key17": "2TUHLcopgRpGYjaQosGiRhoeNTLoehD4PQV532Yewct1z1d8H4TgQDQ2oiNkK9hrVaQG2P9gsifGjsn7pMYmWCEe",
  "key18": "4RVhSsAUcyp5jb9uFjJb2eKc2Va3VxcYxNZDax4TL64jjaSQX54meq19oaQb93AFRy59Gyat5UnNWSNHdf6PuZX4",
  "key19": "DVPoeGHGSogiTvnWRxApxbF62DT8Hpdd6c9axaLhcX91tLpDw5aAndHoCS6TGtnhznMKPqvv4T5XcX8m6SqcRmD",
  "key20": "3HjM5abWWiogtpdxcTCQwZTEzxKqCXDSdsG11r5rXtv4G2id8mQDBrD5XNTvuSJW44HEjcaHrHnLKhkgRq2RPo8T",
  "key21": "fnXVnuHrHSrx7FcEkoqLaS2PnetLwyd85LgX2ExupEH7oQ4UjCq2XegEPu2jSbUu7Fsq5yx7ozRVgfBrRCbfE9j",
  "key22": "3Lt5GbMDWiucmGM1XnkjYNEvXVdioeGP98MyTkMPUs5on7gVpRY6F2PVYDrvbF9t7Ravrm1XJsBrTUMJVQezft1e",
  "key23": "4TSUCzm1QfaGz8hZgHfdQsFc7EdtekEpCqNFJR5XdXuaJqBCEyNH1pVfFan6uw91uZDRbYzFSLY1cJrmEa8XpQF5",
  "key24": "4JC6aazuNWXbyJVM8uQncE5VYjj994hy1xRyTg4wsSVMayp4DsBTDoVAzSN4d2Co4pZgo26f1frJpaHUnmig4cX2",
  "key25": "4nyyxqQ7uQPJBiqb6tg1EuxfGBNAhfcp7y6vJExRYBTwBdQAPmomEkmZGykf5GVX7fDGx7VoxiU8NXLjb1RztzM6",
  "key26": "5SpH81MsGpFPLzyv6B9B9EkmzUmf6xiDjsLGzwfTBnpGqapGamvAs3tb5NAtbKygf99kvvx5zxJVUoz4uHM17yLt",
  "key27": "4eR5siJaKeYPwDzeJMLputcF2Hspm6VTdc3tVrpaRywPKeFYAGzFdoK9LAcPkjUBVKqbyUk67JzKBjpxLASSJk9T",
  "key28": "23ZdS5XdfEiHZg3w1Jck6j8XEiECWx765WRfdvCqmvB9sQYRrd8pztqFgaRbxznEfaJaWpzLis5gboWLj6eTAVBd",
  "key29": "5WcwsimfNXaYPqdsbNnHKVNPGVHiWNKVLxGH98BXKadhKHXXKxUJn7sDX8ETQyx8hWTvzXc1oTcc8Cb2x5iTo5Sy",
  "key30": "2Sdyr8ZTLn4mwacbt6QT8oYUUwGFH5Zr7KdUutybrA9ytZsN8Mf3KUSKFJbLKNq7Fi3nKv3CXPVuZJtSyM93S2sk",
  "key31": "2ggid8nmuGdWQHayDhfgg4hEqcxAbMrkd8CTPeTrYgeUkrgJ5jDR5DgGn1XxtRiqcYVe9kzCPKVdk9qoY4i443Ld"
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
