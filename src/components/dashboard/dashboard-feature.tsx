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
    "66a2tFtuVVENwV7nxXz6BjoodZQByQn6xbzfpHNtwPReo95wf5DC2BTbc7QEmehEg91yh1kan4QXTTbgD7pDcExS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BaAb8LCitnXRyjqQtyk6viasiLXjtYYPkSgXgxLJUH9QP8LCZry4fG6yCgtBChS53N5Xquzk4bCQnZTPLQt6CLQ",
  "key1": "49ivUpMCWzVrxJnZSioMGeinbSWmuxk2fZvTXErmhd9ucxuY57tj1yRG8FLLgjFNTBiyLirrGdZ6GnEtJNXBJ9dU",
  "key2": "fefs8x8jXnydKEVyb6L6JNGUpryw9ap2asTPjoUgWm6yUZuMuintrzrrXQPrVPXk1UiV4xrekRL4o2FFDE6CvJT",
  "key3": "zN9ajuWPeqr2EqqsY6mzakf6za8MMsGP9rm6NyyCCPdFEUgzn16NB11iLzenv62kE3ytP653SZr1TKCg3hUWhQW",
  "key4": "4b3oKscQoewWgQquB3QBm1v84CRR9kh4wxtYmbyV4wGc6XvPJWuAZKWGZXsve7igwecVAFykfDyHfX9Z36rHx692",
  "key5": "2kjKEd32L9EeJwYMv4RCtLs2Eu52ad1r25mxtEFS1r4qUBo3Rjj34DvS3QPk8emQWxc9wQeayE12VhLePXQdxhW3",
  "key6": "JMPGxJB6Cg9vJ91Rcr2iXxL6BLA4miJc2RLvzyNpXtZcLgzwRtBTaETngUBkv987BQE9iBAYY1Yfe2cqPyyD6RG",
  "key7": "uYcEf9KNSobmSt8iVCbGB1ZG6gJde9jWSHW1moMM1ye4PFbY937MYd5CRwyqK21mb5f45ptAgTjcaUZhzM78Hh3",
  "key8": "2jyVz3hJZRtyxvVYMhQ8dGetGcLq1cPcTDT489ScDKu8WGeFtpdMxEumCwm4trTQx48QPuhUg1rYxbAWNvx4KKYi",
  "key9": "5pfT7HCkDBMJGmKnFyLQvQaTx7trqQNRV4Q4n38cr8QwjBwe6jqPyN416Kv1DaunJJwb6uwXA8oRuvwg6L13kDt6",
  "key10": "W1ajK9qJJowxPHAJeaKnr98jyiF4nNWCrkHtvr3nMm9P9qg7zjYdqi2JoFwxvYcihwUKFsPn2hBoHUSyCkw6cAt",
  "key11": "3DTjG8ea3wGXPpnFRT719hvhtZaNTvQy8EeW6aEcLtRMf4izkcvNoRQwdwRLSXCyANa3UvP55QFr9bd3B4shWPqn",
  "key12": "5AcZfKWLhsJ2rvJqhMhCtwkjCyLs9cwjD87jMFjbNRD7HQ46ru2FFRUo2ZLnLxCVyHfthQVGqmHwKkYfi4H9erEd",
  "key13": "2WcZ4fNVFYXs3CmwgwAvwXQ4Wg3AeytvF5HPHCqFD6q9g6Y4LSH1cXA7DotC5rxxUpUYwnth8nVdkR5rx14UNAim",
  "key14": "3mnqftv5esKZTQ9agv2VDprmLAw5rx7zz1dEgQf8uyAc4wNEh2FxqrF5KVXFAi1Qu7Tpa57SngPN6yEtDkEUFFGx",
  "key15": "2kZ2ex4c8Vrc5iPEZPDj1s1oNXu97L6szDF1uU97TiXviWaoxdKuDWesWFyEoCszwiQo1KmJyW2DwF5fBft9JLMg",
  "key16": "3Ch7FxNv5saErkNwh7KBZAhdsQvQLpvAygNt1bWJoBpbvBBVz8toy4caWaF3ACSz5VwrBNnWCfFurj8nr7RxvYre",
  "key17": "4VzrwodySqvEbCRY8k45dkPqutuS4qZWE7eCVjXsTP7YNE1r6oZg4mA1u8uoAvZxKfWeHGqEb1v8BXeHWc4pWM3J",
  "key18": "3dJ6ymXeiRBB6cnrWVfALc3g6LaJ7FY1UiQwGiAk48cBW9ySaudkTd62uUfnny3gw8B9T4Cin7NPgFYRFQUBPBS8",
  "key19": "2jjisHiNmX1QfnPjc1hfAgMM6UHTTTkudf6UDwwKua863KPCD2THt28FW3DgH8wHo6GKhpBWAJmG41TCMyP2Gxdp",
  "key20": "24xfwZDcrCnCeLML3xxJ1JrCvoaFjYBAntVrWqSiwRMoq1aC4NCdTaYsFWacbntGhQn6Ho7t4qHFCtu3DRuLQhGY",
  "key21": "5GhwqoCRiKMJMayGQ5rvrFyb5k4a67KEzXgKocQDjAXGQ5xHJMepCwASRw2MUgztsjdMtXxkdtaxMEw4JZQyi9tU",
  "key22": "2vMZYmjLa2SoVLGJAZvjmHrPitMRyGfy4b3oNFJGFcTM26VwdVGJgAoqdh7sekC3epzCg59evnNUFR1ssiVwjnT2",
  "key23": "435LryQ3Fvx1CoRSgjp7MgDptcox2CTksJCSDqTC2Ydaxf8Pbww4sTaxFGYi3efVTThTvnvdAkfhFLhH3jmd5TQb",
  "key24": "2Gg2auPXycMduriLPUsf7oXtGDCUNBcVqM9HCH7DTRYnXScyqnSVvDwW2Cc2PbSc2m36RAxjG4bmyeuiueNcj9cC",
  "key25": "2fFhP6EcY5kLhCLsPDpsJPswAyyhkXM7Wo2i73xQNg2BmvX1Nww7UacLb2VLPZ433aHx4m4MPEkMbC2LrAgUib8c",
  "key26": "2qb9CsLizHqnk5XUdMWZVx9LrrKfkwvas4XVUpojpz5dzBoAZ3ZitR6XxJzuGadvkjUqGj9HsQj6Zuzf2AE8A1qM",
  "key27": "23A7eHMfbdKhsg59uTqiHfAs8gFPvBEdGhe5tYuth7WKyL4MoY13xBW8EWjtPMRFDyoTvgZBFDmsn7BQHuBeti9G",
  "key28": "4wa16BGqmfJBWFGFwmACgeJYiCA7tChn9z5L6iiYvXunsdeU83xhDaGUmjge4G62VSQk3VMLybJMoFmbGK7SRaNq",
  "key29": "vo5xdQhkmQ91tthpL4uPLGUiAfFa2oHmJHC8unCNGZ6ey5F4Frqyc5kD74N68cojvYuDPCqNLY3FFbzSapHCfrg",
  "key30": "2vmLKK65YkU2gjwEWX2zeETSgXgLCQbNNqaseEp29yoVrjwaTMz6UxU5cEbTcZNRLpxbgnTQsVqaYUjszdfBsek1",
  "key31": "3uLuns91D7LCkndh63TdSjgicrubAtpCkSFDiRkCkVLyR9zsosCRcHQgspz9Wp39yXHRHte8Be4NzEXY83uJGuEt"
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
