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
    "3h1FJ58KD1XYwQMLZ7uma3r69bLjCzwv2UShucTVQpVmU5tkoRCCa1AKoWJTJm5ZMrMQw8TJm9QtyeZ5KELVi4Fk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PTtGYaCwpxnSjdDSi9yggYjvrSJKJNp7PUyGbTeHMhzA3ZxQJtUj7NKUQmaG6wY8ALWRTqMFjk6N9c2owFiRzmv",
  "key1": "ZzQBQAB2UZ8rtpNDfy4YDP9PEdwfA6MdeR935W5sdREcD1BkckG5TaXzHxtFxgQHvmwhVdKtCKJCBVfxwqejzTa",
  "key2": "4rk9YD64WNZhJSxzfWxNvYmakKA6h4GPpyfRZQAi32sjjPG34cGCqB8nMA2wkNCEM9E2ib64MpFM5Jxf8kwyKEU9",
  "key3": "56v7kYaRmjhGcnTvEV6GAozCjNKcEAWDhMX58JBU9ZL3Yc8f3YmhhDgCXAmD4cReEuoemReU7szaNZ27mQpRoTH3",
  "key4": "AecTS8dLyPpoesPdqA3tduHHvdRooCqofgZRn68vVnrDhPPXKoX8s89BWxipdn7S4YRnVqyAWtV2i5JPegJgfVT",
  "key5": "wrKk69jwLiVt5PxUgqBv1o4U1xMPVUzaw4r1Nkxddpb65iBCRy8XUVXsG52AJ8NaTrMbPNPaFr4EFxo7MACYup5",
  "key6": "2pMkRKChndoABdfuXSiVpjQp88HvPzh18g9hfeNHk5UrSYZmChgHPu3Z8TkDMbCf9CphNUNGrA4kZDAVAbvtw3b2",
  "key7": "5KceHoNd3eGzjsh12D8ZHM5KEwiKjFmnTsbUfnt8LJJyqRAevW8Nyey11AqdH7HVzyWkw14rCZtg3tUhPpw39hy8",
  "key8": "4yxoSv5fwqrdYCEZBwGDwEZF52498VrNXp3tCYrgKx8mYzmUq287PF8cojB1E7hYp2wnM3CU6noPjo3t9zxKSXNe",
  "key9": "Nmb3BEMACnT4Ea3FKiUEHDnQPUaFJuGaSyEF32ekZf2CriFnCASo4RFseM3BmfMANt3XeEDhQQegtf8sMRudo22",
  "key10": "3UgXrReMmN5BjUYsUmekkZRNnkT3kjxbgP2sacmRXxqJbzdaGM5UxPxk216uqoJGy97DKv1VNTGMW2oGRJKfVjg4",
  "key11": "3Dkq8kbQumGt84ybd2vKPEYP33WFn5XSmFf7QaaW68BWvbpXUCBnWZshqbhJNe4Kd5RL12gyHBxpGJyaoQcKQxUQ",
  "key12": "4SGyTdUmU9vy3GQRYT9FNYP3qXZu4rEtj8qX8LG2Grm4foWQXeLznWJNTC5VUSy6qthj7ehCY4HsHpeFkqpR7CEe",
  "key13": "4W6APG61ZkmfEERdbV6exaVM4NnNV2qpZA86gYXzKTtp1UVguMZHNNznBUJMwhsWpYEDynqjyC2Ni5ZYwjMhGS87",
  "key14": "56SoWGJ5TWoiQ1CKfdEvmQPDEVPk1nqkn8uPdy31cN9vMvMrpwKiy2eeEbGUNo5Kc79tYdtqpbau5BjzVe3EVSJq",
  "key15": "3Cx49ViHM3VYUBLYM2R7wwjS61qSYEV6soaNLR37GXYdQT2eokVzr2e2c7cGUghbPbWCev3RsuNjadcTk1tcMEGq",
  "key16": "5gTsDU2HtQ5Fi9MFH8hxH91KM7zG5b9oYbYj9tTqe2r9g1HGvrsWJvZMJy9U2NHjC9CCmKjzEAqXGcRn5BW48Dow",
  "key17": "dourj1MMWt7Zux4guu8tUUtNFSSyT9nMrtFhWN6yAwTxYj2hkaij7nT1iN3f5ugHjNafhtSbtkKTCQrCE5FYak7",
  "key18": "aa3AawUuEbKAnHQ3bfpdzBazN6QW4FrxVx1kXdeQfNFwBA5esu4qBDrUVy62dkM7DCw7D7JquoscKygdter1TQP",
  "key19": "3jsf91yzfM6FAXFRtkiGTvcZ6icYLSsU25pwvtQd6JyA7PJFs98KDeFwT1DZ15CpumcPM9RL3K8M4CQoqzqYN4hM",
  "key20": "56DEZw1Vua3JQTfn85MRGsyesoUPcLiM1xg1BBSCjXnaGJ745ffmfzKTE84zY7cu3CyuPWRqySN1i8KFV3VHmCmm",
  "key21": "32t3TPcqRZs1uBAjBSCr3ZaWBsJQwTdQbB2bZkWT36X5xSMbcv7Z8XGifb5vs448xSXi87kpifKaqoq3g2uS6ZBV",
  "key22": "SSbfDRA5r2hoWsRXRLvoyNd9aDsXfghLGtroDrvq35DhKiDBqXgnXrWjsCgZ42Fw89Fo5zEPZDigAQeMWSjVDMm",
  "key23": "mnRzrynpodKCT9dHtM4QkUdSnFPDHW4YwzCgk3cu7wrU8sSMZCs6rcgNCutckEAesf7yE2VR7xh5ZAkGxz1QkCb",
  "key24": "4NFsWC4ujGT4oGEYDfjX8KeyQKhJDrzzAYPFitvzTnqS9QWErj4KK5rje4aipyKgoGsGNoYdRiLwy4vGnfS5DJDm",
  "key25": "3SrCLSnaZ1zzmhxyibjzLUsmQoFFYRXB2WtuNTmLYqipzMHgRjbfnqu92yDSceb6btZhtcE1r8vSzqywNhbWYpYf"
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
