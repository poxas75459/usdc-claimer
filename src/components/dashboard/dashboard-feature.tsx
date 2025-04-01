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
    "3Jbm9KmPA3fxS65FWcKFLZuaFodCTtNarqDnFQBQSb8dXUWwHPT7uRgmV3FF4SQkbu4fkvUvx7ZPW1CRUXFvBLxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uMrR4LrtJH6p7GqJDfxuDz7zhT3aunG7TfPP4ooKMeVgG2cexejNX4Afraev6xdr8vwFUtPhfKya1rZEaDkiTbc",
  "key1": "24m57NAH5PJkSVFyarUWUvfidhHdcz23Zd8NHth2CcDDYNZJWn6fx6d1Xvkw3XRfHDXdn27S1iZMbBTARgyGD63u",
  "key2": "3NnAZH9uwYtvDdkFgiuWTtHqUbFkKdANzud9eYyjYEiZNWx5bn7DjNZUfvJey92GUdos7P3jZTdDcwbPw9CxWSU9",
  "key3": "2B9TCjEHMWtNuW3F1DkpafMzaZTFAsdmsUei1yoCef4pjLq2dvUkkz64e4dLhKSMgiPBmgQNNik7rG3tDrMrSDxd",
  "key4": "44DTd1bkSaMcwFCZ4NsvvrCoAH7AaMqb6g5WoPTiRZAVeWVGf3LNCdZtuJG2sR4B3Wh2BiYvbSU88pjcmFaDTmsN",
  "key5": "2ENsFH9WJU266zBWQt88uwcMkG8dMikxLXjCE6uX61JQsk1b5UYLxe7oqhmekWZrdTgwckYYQBm9hcywpYLEwdcJ",
  "key6": "3gECMFvhs9wZ5LnZ8SXCUsU8T6tt61ubB8FE7Xrh6KcGy7WcqB1AxWuTtkx234xtTxycMbGsq4eJ8ynrUtPosXKE",
  "key7": "3t2pRHsaL4wgzsJ8WfA4jsEuCqtvJPRsEyDh9PxApnihJdJjCMzwA8U1GtBL9kGV1byhpWYqw9Di1sPqzRSeNSdS",
  "key8": "FQEPiHFC7ngv9cvZxeyHPCw51L982zHUX3CfbijkU1w21DkyspPEjPrf6wgxJQjyohSPR4SSa4GEqruKy8fzAWb",
  "key9": "5jxYTPJSGtsAJHN4CAAV1bGWstuTkXwvpKAV9EAg3orbiCFjq16AsBjm9vtGyr8y1uBFJBxGH4JP7tjRjxHpnRE2",
  "key10": "5kJt7gMRwb5tpL6t1yA9bw9583LhQEmKjWRiMahvv2QwMeFjRi6gBSteNuRJBkYrftHN4yZrWZxqvGCMBxqD2bHc",
  "key11": "3StLyUxPmUXMPmuypBrzTBCsRyCyQwTHbRCAv8UsDhi35Uw9ipdMmCeUjsddG7KxqxhSWDPkb1QED9AV94ZRkZqU",
  "key12": "53Gw6RLHRdgRyzoRVPHKtSfRahygYFJeCzxqrBG6cXKvBfAzDY91cNmJZB3yy7nMsy18hLygCfW6FwRrZRUMRDs8",
  "key13": "4CyYUXMEHg2xdHLdN982PswZ89fhjXJNfmoTcEhgizbHhuVWcix4vEuWLrGXNZ6osm5zqWRbRpS9aDiqLB3edAxC",
  "key14": "4pK9bbpAymSksXc1WLXfKY1PtqLcmJD1PcfgTpnEiyzgCPtQEa3phXAE4yXX21bR61cJ1k94JFgCphPvBobK6M3D",
  "key15": "4guEReYnKAFRc3MysG6c9aN9FQxCnQxjgNVeNUi4x6Hr1QX34qKvi46kQv3fHiNfX4zJSTn4nCdjxJvLiJXRQXf4",
  "key16": "3MaAiRLbdtL7rHFGnpM2rcsWzC4BqPk7Krb4KfAQgVn4UnPxniRq94KGybeLfMLZxE1mVUgSskkuPMxhzUrh82gq",
  "key17": "d3Q3CuByefGEKv6VjqzLkTCE6SG6moUw2KnyCMn45AfW6TkEKiGdyBto4YHNZhvJ2fbVgSpiShrEwDYAvyNA2rm",
  "key18": "3GXDivaiz47Ubs3XMRLqKgr7c9YvRWL5oCBv5Gtxqw9GJuyNdwu2UGheoeFQbTNWM8iiBLuJFcdEFwrFKuXfd1qT",
  "key19": "2QAVSUxgvcmzJgeRa7177addYc97Ww7FMBCETDmymvLGdR3CTazjqQ18HG4UTrDwk5XP8RXnB4xb1wt7zV1BBxnj",
  "key20": "2UzQmvt3srDxPFAYAcWoHtqnk44gtXRVhxja1tybn4GmRiTTzXw7EVu4utUUoZzPxkgJ4jH3FkPvDXXLnqGNTUya",
  "key21": "2zQLhumRXz3y63J1n1JcYdmCjxBTufMpDebTFidJioBW35LFMLr3aJFNCApSPk4vBzoaVNJt5khxwPNJGFk2bWg5",
  "key22": "2ZA2ZwEriBhBkaQj5oWA479VaDDzBs6Pjj96FtFVSwK8R2QFqNh99pg6EZZcZEmKM6WzpxJwff2mtLdxNbL2Ynt3",
  "key23": "55CFp3QecTZA9MgYyW1Sg1bx2prDgTGSzvrKhZsgb5suUVT4wx2bSQVfUmFxhwyqcM3SgB46yAkPiicPepwDWDpf",
  "key24": "3aHz4xc84diCBT2ghVo8upqqVZhBKb54ZYvZFPvqqseK1NS6Kwtg92r97nhLWvTMxmSg8esHLBNhrWxX2oDYfwyU",
  "key25": "MQLeTJNqZFgJJgEwd6D6NJtvGfGrEDNmezh3F7JW4P7CMQz8wZbcTsMWr4kEJMVQApkWJNVkYTKmSou2SnihSjb",
  "key26": "3S1rjcdBGxaw6ED4R3JmnFbkfXH6x5NaFqWc85WVaHZLGb1W2SNDt3JSdtxVHwHY7NWaaQE1UALLC2CuM9EZWbPX",
  "key27": "4BmmDxsyiGB6bVCkAwjhwKhmUKZg9cjPJSijw5U2sfcDf6gXMY78Z4vgbKBFkZtdqLKKor4YcvF3xRNJPZRxmcLr",
  "key28": "233xoztUgxjeoSbYD2L43yobT32kPCYmHn3giPEpMxuK2TdLhvuXHpXTjkaUDS45MCPzfQeZmTd2HCFhmHANTqCL",
  "key29": "2oBdRsN5UeEoWNhkRMfZ5N8hs2wMgQYAxrtjPxXU7dQJq7edeHVJVhgZWMauZUgy2MhQWL6kyheT3f6tmtSo9xYh",
  "key30": "ss9cyCeyTGdcU2qAKw3i4gJpbaXnJeiamctfZpTzxfGDVN8xrpWpgxbdGzpTebRUcqapqVYa5rw6xjcevEuK4kx",
  "key31": "3aTbP4ho3cB44eCUkKX8cZx397VWirYdLD73LtzrEttxF8ycNssahYzk1cZPkZG7sxF2jLiDuyEa9m2ANfw8YQJ5",
  "key32": "c5RTvjic3gRAnV3rjrjufLeukYE1XHM4rkFb2DF5vvkiVGP8RQtEjznbFt3LupAmB8dccQF34s3scxVGWg3BCcZ"
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
