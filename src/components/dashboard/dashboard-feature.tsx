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
    "4WEiBKEQXjqbRAhEE3zHbrnExEZizP9rn8e7wzShB3TdaoHPz5YLarwc1DMCps4iLS1ZzzHTWdoCKGuLRfbbi9V4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48jvsb9yRXXuKrY56GzGDGBKhv8Lor8sC6ucEykS7LZq74hvLom76T692mxzmDUhZe5bVsJjG6mXVSFTTyYmXQZN",
  "key1": "4HCHDs5k8xHdYbH3coiE57jAwLKohiomK2mh25dwmUAkhFUUMdV2hMCF3eAnWNCUa2GXnRfnnZPRr1dqwVC7Bi1J",
  "key2": "5ahee2gdtSfbb8fbLLbdDurnaa43UvM345UF2gLmyy895hpVGiQqxjGLjZUJu3UtDgpPKabd4ARGGMobmhiKvuG6",
  "key3": "4GQKaQVGa3gTx7SXkTunAKT8KLHFJDkyX5L4Ejx2MiakvtVVcPzUnnEALJqXMX5dEvmadc776xQXMXmNrZfzsaQ2",
  "key4": "4mGA1Ar7VgtRwpAGAU8C6m8HwLucGHHwy5aAVyEHhmLTsi3PhaibFzXhjv6URgPaj1Rkn7MFth8imQZMEw5yzBN8",
  "key5": "5A8T14tsC9kj2jgFQ4SEEjx1NVRNLvkXTwFeifxJ3DVZJQGiGhz43FtHZRutPLktH4RPKaNyyCp5kqH7Vzjv9iSo",
  "key6": "2j6KFR95TtVMa9kDpDUxGK6jAcZBGoMUrRxQmDAJDp9vbwiE5jUKNpRp62EBYNX2ouERN77pGYmjBDB12noTFgFw",
  "key7": "6K2zYdWzpW6RsE3zNCpRGLKZ97uvYmsMrzHC1wS2vNPspVimtdzipqPs2jhPSdUioX8T35bfoSeFrvPF5qLMBH6",
  "key8": "zaXnFvWe8qMMkUxNNasMJWKiTjXeA6VvA2ehgTthtE4cJzCFTSRBSeci4HnF3RvfVKebt8TXRLFeeVh82Bxom25",
  "key9": "5RVvDJ1ThmmMBopx7R8re2MjdXKVZhQtGHgLWD1oSeqhSHqD1tE13zt9KEuGUGFhKGxehhXwcWEZPrZ51xgM23E9",
  "key10": "4tBsEmyNbeVeVRrPEAAqXEbiQtDTTPnnp6J5ZqwYLeNabZ8V8x91cPqwbhsW2hVwVRAs2rsHTWeT2NtHShN5xsUv",
  "key11": "2UPqTqiWCrLTATmz3wjbaTuPYoB4td6bDshMVF7wxHhK2wEJnsJP3AMHain1aRdabXxYv8GQ91N6XmrfG4szeiG7",
  "key12": "2TQgmVjnFcUBrnvzn1ikVk1dVyLpvJaU1aGRF3dwhuzFPjudFEa4is8BAQokY6DfCAZUL33UQQcKxMRrJTjnQXsx",
  "key13": "5sdaFgHw9PcuNiitogC2p8mxcSkxvjXtq1Nu9o7VxRQEUsRtk9dXWtnbNdMYNGChHexGZPbAeYjwEVb9W29eZZNp",
  "key14": "5VrdhgpGjwZvEn2aocrxq3yNJBiuEQ4fjnAoeeVuwCte8G59LLZ8LhBWMr7HqZCd2ynDNLaCnNiuktAHkrnLZumz",
  "key15": "3pgcU4fkNFSGGhnCbwXbvWV9dGTV12JVMkk3fGsSSvaQR4XZtV46nR9qWWXDb98mMmE6UEaP86cM4LDt2m9XKMmh",
  "key16": "39YaMaXYPpb9TKM4MGHNVKUNs7YyXb2q9VisRn6tfdrKRQi8RjHn6kMaJFAX7SkkDSFhD9NfLPh4Po5wTHitvvtX",
  "key17": "37HpRoh76KUHSyrLMDCCTz6pTcR7XL1d5UCtiUsyhSvJoQiEcTifKEd6PaMHdQ9vRhZbU8cnhUZT8tNrFcHvq4P9",
  "key18": "5BmQgrzga9vjqtjpwuXYLmnW2VHKL918WyFWLDmVwABj5huDdpZTm2X8cmvD2Tx2Rr6jgTu2uqjaHCeRLkgDGykk",
  "key19": "3oEtSuD86ufDbvLTqDvFmLdGdXup38RQtnDeM6yCZ1y1pdZLJUuYpeh4WkotWWzrCBi3nmw92n2Zo1sPWA3KJNRe",
  "key20": "2xyC1PcZVFvmESG57gmgQVrXbCifwQKQgRbS9xhLQFX5Bv6rdXUUnSpiqpPoPCE5AiAbViV5jArNRi2HYcQDFWUA",
  "key21": "2awMMhQpP7VchAN2xzqkGnRgZjhqGY7UDXJJCeZSp5bncViR2tQCToBCfwJDsR7Fyt6rTywFVXGJbc4T8YW8gkPS",
  "key22": "3w94JgRu2jZqxKDe47fg1sERocjxjAzWDAwajvw7DDELwNoSBay925RyKMsgZhjrRc2UrwTsNp1FhSJtH9i4Znni",
  "key23": "3xYYe5cb5qvXEGz4hdUPvsUSrjnnSqASrFGGpGpSwVNJ6TFhd82fy1k1azJoyCVSWgfNfdxWeKq7w5AfxJU5MvR8",
  "key24": "sDwtuRVsdRqaqSJbPQCVSdQ8SRo7kSa18v1QinUmcpxpBu9zHm4qdY7qFA1H48BKZJZiFsFpSMXaEpGszhA36vT",
  "key25": "3g1Prr4RYAGuo4qjJVdvyZKR55njKLpudiJGsmYUwGX9rRz4vZVjjQxGkWfEK3ryncDBrW1vxAykh3oQY2veZfbV",
  "key26": "pYyZixMZEQZBBzwhqNc29dhUuq7WbMBPLV1u5bBw3b6HPqrzL3KSqHH41rrdkhDs2Rmy2vNDdWNMAKxignYN7SN",
  "key27": "3bEvAipyATzYU9fvKaCBNmxdg6vjMbcTgt4x3ttDaePxRuvfUuXrPGWbFyRcwbcxcKTkogSh8V7d1YXKSiLKzFhG",
  "key28": "f7xih5KudZSMJHTFe6V4YU8FWJMoVz2zFUMnL8ZJ54eGQuaJ8iPFh3Z8FAemrTvmQp8wtdUKhG9nrUanoNJvLHC",
  "key29": "3gRCBeXnPeHTWAMypDg9WWbHVBrFmxr5SA5FWUDGwfHycMUNF9Q5ZQtSEnRpBG1ysdCrXfMgczvVhLkDsRY5VGLN",
  "key30": "5CR1G7SBiUUPgskazfXkcSap3PbYEydpWe6fqvKA5uyPnhQqdDTfjN37xhPY8zibVGhxaUN2yARhR5zMrWTz15Rm",
  "key31": "4oENmwnfkur4BGyz1C44WNA3S4YNSZGSFxM6xGFV9L7sFGAawFN5SxuJ4YiqhtrkFmfJy8idTWnSLZjx3eGzgStm",
  "key32": "4Y1RnqpaT8vTCD6EPcMRBvAK77zdMrWiKknSZPc1ZX2yK5natUBd926hpTF9Du6YcBXVBiwSbrdD8STFC8Lk2AzB",
  "key33": "25EeJVWwGdmB6BejkUhghcch6nHujajK7SNcsvHxLxzriYP3UqSAeMFn2mj8JaAvstamLSrDsHkarjZpvxTiEwv5",
  "key34": "H7HuKrrt7TFU35wzmCsWDhcXbAnVAH7dDqD6EiaEHTyHjxu1xrTSZbW1PpqKncwJWftGGT4Tn5pMGNYZq7N8SwX",
  "key35": "4cUr5AmoX6QwFTjJrWV4F5pXmfjqHLe6fyfghDfsbYEMAqoS9FnKT83ohEkiQP2LbNCyzMH64UynKwEdzvdBKnek",
  "key36": "3cnSF2acKGvw3dkaa3C4AfjvqSLdEzdYnGY6WXcLXVxfiEe71oEy3tBcZVrWkm1sGBHfgAzgMWmT3dn11TeXe8Sh",
  "key37": "C9bsr6QDcnXVnLv2monZor7h6QXhdfEiJsFAPHeQXWko6pZyajXiWMWXiwckx9mRuzksVfpnxnhHGjtz7YwAdUF",
  "key38": "2yKAHVwtpT3nB6JbKWxSvvg7Hu268U1t5m9D9eUx9HU366kR3mbtxQa9WoLy8WLr5e1xrdNzMnX3MbBrMm4QwRve",
  "key39": "2hbKigUhJD7YPVqcwJ4DzRDuKzkqSx5tyLXdtRv7ADuFiar1xkNdDCoGL7DRyZQdvDVmskpMeQC82LJcr7kw73JA",
  "key40": "3L7A72344ERukhC4e93bDfSgYkCm8sGJ7jvxxURi98nSpsj6fRBmrXriDNgrVtQ4PvNU4Z6gZBkUAMeKLguwXQLy",
  "key41": "3T3Cqv4136R5G6VV8Eecfs9NGWF6Es5fikQJ7oeQPM9itGtuj2Q5KU9nu8gsw1vLq5LDZw7DhHaai57zCvWvS8wh",
  "key42": "2uCinNW6DBpaYUg61XF7TVfg3dHtKfUnbHerYD1fEZCEWGuvqi9WKEBq4yoQzPDLvy6cWwtCB6LKYijWMRoebnDf",
  "key43": "LHGXmsPfBaMZyLfnhCMWm4ZfruixM5p3FGBw2PxWGW7ucWrW4VfJrqBCeGmT1vG7eXGknMqhLxgAcyEFXuXNDGh",
  "key44": "5miho5vSgi69xeKXwHP91bwwECDFjaJFvEyCLkh4qBDgasyMVNU6aZRZq5T8NUkUt3HpRhg8nEjsnytWgKAE76fU",
  "key45": "3z6jsovapbv2Rz5qtwFJw552retMVMRqCyJrW8A7JkxnRSE2DZZwdjJYHZfMVioEJ2oNqCshNyBYnP1EvmHy7xLF",
  "key46": "ewpFGU8BVXjso7LLydcTcSFXEJjwRwvPkZdKZLX26YXifrSc47dTvVPkNfswbCUZKvL6oxeJmeBhvwsTMud7tX9"
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
