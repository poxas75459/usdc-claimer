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
    "43hL8cnQop1zcrd8xLZgjDQwh8YMcoKbgmvHcqMhB1TfkyPzPeBeeK1M2mMJaQu5aVvnGCVoxVQQxApL3cjDA5oS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aHMSEb8ABmQcgH5MhHDePo3RyDLKtVjJACr2s7ZkRUyU5ZUBhWJMtfCopzxx3jx9Dn7rWTfyg8Jy7CmFh19ZqhT",
  "key1": "2JZZDXp2iA5q2KyyTHd8YSraNBRBmet5SwkGheiP6sSLsK4LRnEhpVogGffRMwud7zv2BBPgd4Jc1CxD2Cu94kBy",
  "key2": "2i884JbUJoRYPDLobi8nroybAF6iZbrJJjCqn2vVBWp7yMNkHQaug1V9ByzX5f2zAF83v6Vz2N9DpvuGrByFHGzt",
  "key3": "2Cg58capZsAP1dVjpM2gh1dgEW1tmz8ms4eTHm1xrVqTXsm146pXkj3gCdbgoHTpM6xT1PZCQGKDtnLbhtjGjf29",
  "key4": "4vYfvGuaRmbxvwVvHLg7ycNQgwUDU6g77eb9ijkEaKjXU9HkirfxJgesur3tSaGXbwfsj6AJbzsWTVy2ieUhD98M",
  "key5": "gBCXWh9sdMtPkpaZcd2Q1Lg7fjzfPX5njZJ9zS9ZxksoDhkRw3gbH4i8NyPYoAG5RcSc2TrvgwTurXWeBCBn5U8",
  "key6": "4gw3V7sHmXDU6nDxwkFGwvYqkhyrxUzHtV1PhPDkFCMqJknSHaXSsforpTHmwbaGECPVZk28qxn91BbZf3aEcC3R",
  "key7": "5PyQNMJFNxHEFzaa4jMa193afZwTZvAmiJLaRcJXYzZeWrqyEVjzQw3rkjo3nakEV2EJHCdoNG2GemxqY7hN22Z3",
  "key8": "Mhxr8Eiekp7XQYPr8gsESHtim277sURdwuyXMt96dJ2SxCxHiyxbBevDtyP6Fwk4pRhTyb2bVdTADaizZUZkY6m",
  "key9": "31yZBeJZ92JkrdT7kQFvvnbpT275nrUffcVqvbhSBhfHVHpytZGdkXu9g87Wx1Cw1fhohGeCx2tHb9oUHkETkviT",
  "key10": "53pDTBjdtwZMoAbeegzThgb1RLqg8ZcPFC9myUJ6pDwCT3Gw5SPwcbJn6f9ZsYrvRJ9Rud8sEbMYTSnXJfkQUngg",
  "key11": "GPfoc8mLZZUbu4EgWVCABErWrGYNbSzLpzSRyR5EVMLFKT3F8KRvcVoYP3McGfRDF5WXsJzQNuWKQLCosqxP7it",
  "key12": "5pjrPoPScJngPbcQ3nnjMissfUEE7iUjN8LsqUzerbAiZicGTLVRzuSJgnKW3GHrNZsYMN3cMTzRLspchbVyadgJ",
  "key13": "6cgW2hCEeY4i6EJfkPxt9EcWWyms7FMChkP9Y4wPvuWTTxRPr2HqVaVnhMdAW84agtNy53rk68RwDrwtnQViWqx",
  "key14": "2ewhB5GeC9ksDjzdyCJ8xSyKr861EXM5bpHH3X4YeJAAd4pLFh2ZbwbtDfLAfp9sFtoBB9PpyCbDwBCqH4zQvpVu",
  "key15": "2FeKd7ak2XvzK5ULRXsMzTyp34mQ12PYamdFo31Jp1CGpcGvpF7X6Wbh1v1ocbztYLW9V1vSa4wj7zpPChqV4qjq",
  "key16": "4W54BZAQUGc2YHLCE8GpRG3DzKHRCuRiwxRXJwuzpyy2eMLgEHMyzRpCi7xB378FwkxFYfnkAGGujxgg3E6BMY9d",
  "key17": "4voDwnyYL7vLXB9XrpgFdvd3oanGvWeAw1FneUnexQ1HFYG8ATFNckGv7shS73emjRzkwAeuM4GF6hXKaJABejV7",
  "key18": "5EYChMH58pgSFpGd6rFXFseM6fKBdhXazT1V91aausEVABNRhFDBY6PfJLrq1xqrqAfphxHVvk4VhD4Ti4YdQ5in",
  "key19": "5baCuEfqCUMWfan3sDztkVe2bZuY2Qkgi7rRN91JNJEaMFf4qMK2dzbMUrLCZJY2aTD4UKHGunRE5i3V1cKDK4kN",
  "key20": "5y2j54Hoguzg4GEyYtANFV8ocuR4Wo3VWxHYtNafTCJfZ4dpX3XiwWecR2ZCRMG4ZNS3bui3QJRDVg8FnBUbCfRg",
  "key21": "3teHa4EYsoXdLJ84aYMCsX12H3V4G82BQqWsg4RwouRdmoTEj23dgz4q5gmAfU3mRMeGxQM6J5Mh7vB4BD7gQqJG",
  "key22": "34zNUAGoax7b8gG1LA2cLTt74cHFaxEQU7eNjugLECrnJhhABT7JC37dD7F5AJfm2rfM7349sW8o2bZt7F4M55S4",
  "key23": "3YUgX2mGDzR1Etva495M7YQcZhB7FTebFq9usAvU2ZiEJeYxT9Pp1QfyX7rGE3ZwFMHPph6HhjTzAsMToYL9N4sY",
  "key24": "5dDRZpq6UExQW7NGCr35GzJoGYqTPtZc2mFDhCFAvSsPm13cj3wgnGZpLTQNEF6BSoHMFBwDto8idpAEZMDqAeux",
  "key25": "2NxTCUhHDkpV22YN3uZFpjTuN4srv7V6NaxYNiHUkBz16tJiSecQrwY81zbXZgS6bjzHhrAQtvQ7DunQJ6ohfmBa",
  "key26": "5dEg16BDC1hCkYJ8FaUTE3YkzC4zooLVmbr4mjgchYWAvPfiJYBxHBQqUEqvtWaqceUZGr3r37qP2NGXj3tkHKov",
  "key27": "5rjsM7kARagMqqf1qUr4WHfXik8YEFux6Tz724k85jvMTchRJTkRv3CAuMFQnp5uvWNBedbJLPisFZH3Ff7SmePQ",
  "key28": "3vKZ8ToKsN36cnUjhQX5Khh7sd8Nc5r8WbBi4oJmfSu5prDUpz8QZuwQteUEtjUgzAqyvKCwqsHEWuj65fAyFKuT",
  "key29": "2putMYwpvSPESrGtTYcmhiU61zBaDNhshTbXkmPgWbM66x8kBmme81HBb1fcx3LSrvfaNUJpo6ZLR4d7a1mmniWf",
  "key30": "47uRx6euzyFjficRVkmhkfYBz5JX27aRSHTJBDZoLEmm8JNTqYhCdqrPfD2VdK9YwP1T517Qqv8gowtA2ntJbHAT"
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
