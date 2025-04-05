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
    "8KGfbsCJdVLZuXe5q9XS9TPGoG8evKPqK3NT6sZt8ZQXXVqy1bKLAggoGgno978VQdufuVqZGtmxjknf8suU2eW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ibi12VkzjS5amV2vN3WU4a55XP79nTHJbd82wKSbGTGUhquMkBSceKdQz9L2yuF2WKBwUA7ob2yFW27Z8g9WyoC",
  "key1": "24Fna46VbWVdE5XquDFsGFTE9hgGRniH87VZLZZMHxWpeTksxNEaXEXgmmSUBAQ6NTDsDteNJAyMyYNUNoByfags",
  "key2": "2R1xQLz2pWGZkk5AZH6LjHPPEtkxsUs9u9mg6uaeunepeWBoAfCHuRenzWNPQSzLW8R4Q2QXVA3S4qMAuUg7puW2",
  "key3": "4yY3GvhL71koL1SKybhSREQknxgYZf9At9ATkTMPMfUUPqQphY5qJzyWvSHyBUX2wDiSJyvCT51a48Xn6HaTHnDW",
  "key4": "VioesXLn5WYaMjeEddHo4rRtZc6RCbyZ9oJ8Tt8rwfqJEhCQZS4x1khkn4TTpQ3rueNU6qLjidtRbdD7DvCrUr4",
  "key5": "a37q91dZZ4wsuDMsM1hWUCS68CzMEHycZrqPtHdjRTHZw7v8bnorHykmVwyHu6PMbPxafqTf4cVrsSg2qLFtmnw",
  "key6": "5zL2HyUZ2g9rYZCoVoQHF8fCurxdjvyEb77TVjt4K5VusRaYwvWE8TkvgQhzPXo6W6Y3TA14YM479TF8SmZyYnMR",
  "key7": "48qGVbhv34UGGKZLS8MSQmnmwTYfoC34DKLvkk7aW3E8ynSat1NiDjM8sHiQLeALJ2xfsGhxuiWdVHWvhMHwVMjy",
  "key8": "5qDoX9J1k3yrKkVrGwNUFJjFgrraF6nezYvpDbzyeucgopubxNVDwhzkS98618omGGBjPEAsA3EPrd4AtHCA71MG",
  "key9": "642dRXbXn1K81r35JyMpjNRn7eDbokhpaL4aS3DRd3Tt5DqALKq7MK9CgrvNmdfPudRqZCLNfbRV8BxqjMSSXWJL",
  "key10": "5KW6rEHMHmQDXxoKQC4uwkpb3tw1aXCupHaErW5yuLPAVmpUYAsnhHpdk5z49gTuUDfnKisEhVqjyiNgUDRZWjLF",
  "key11": "5pGgSeaBXCGzSZUkYxxqANZjgkfHn4aTG5F42kfm6bXBL7yL83fQQowFhbLPELFAsey8jwEGJPCcgajWaPjCMAsX",
  "key12": "61Vy59n8dEmZQG1acnv3oy8kHRM7bvJ8joQTj7QTtpWueAvWBmZ2j6sFBXFXh11sv8rNytu9xCHNTtz3P3Rv25gW",
  "key13": "3yN57MSJbtPA54rEdpLdazfgxe4zPLt8tNC7iGSw1ATbU4w1G1amdctWvyewPyFo5LeRSx87p8LgaYwcZzZmpYAf",
  "key14": "t734g2Vj5DSPgxHx33pdRKQfFUXwT4FNMjXoaV5RLdq59FwCwMpbH69YrDa4JN4kch7RS7a1BxjeG1qoJrtZkpx",
  "key15": "4Jt2NCNoooRqzGG2pFKx4TMnisXFK4v6Narqtu6CsKzHSEdvboy2YwuUdQxYFRUNCQXvyrFV4u133HweepWg7TmR",
  "key16": "3kfm5ZvDd8rfAPt8XnGkqLt4R7nmr2HQReUvgwyWjSN9q1ixXTbNTxzHDUcW1ngR6Z4GLKoo5pF7mtqFoFNZPGjS",
  "key17": "5zSCafNHso3q2Sx38gMqmqKqZV7Ynu9ECo3erQGNwW91ppzXPmoAdGxc134yBC5KdFGDy4iC9LXiDcx2eQSdD8oP",
  "key18": "4zGbHB93xEqwzMNrErQgZTWmNomUaw6jTkobrRX37ESvCPduuRac24eyJP4NUdZKuqswd9fNCcn6qanpGjZh7mkL",
  "key19": "ST3xTffq79SCYNGDsHx52KMX1exugS4WJVcBkvnn94HGBS3x6mToohJQHRuD79HJZwsX65dy5HpMQFA8mZq6G1K",
  "key20": "5QDbgHFsFZggg3daoprXujNAR32VaGfbdPVAJsLRy5xf7WhpqMPwNrbxN1oyNkSBgh7GnLLiKSp3xjybdaruYebT",
  "key21": "2QGEhEv9xUMzvxWR1KLnsqAjT1tskTjWRFcM4L1B7gbAmbALbgWK6G9PfmNRSJjLNw9Md2c2RVugK1CkZKe22gvE",
  "key22": "4EVpgQkGDFpAM5Yc4CzAsfPAq82khs7uAAxZyUp486CW2rmAdE86Ho9fhZrfWimznWirL7aDuPqCK9Gh1zqi1DzF",
  "key23": "FTb8aKkMiE7u4vcLcA8YRePXpXMgsTy6s4zts6KdW4rDJJmYEuS9teZtCyAiH87iqdN1Jpf19mMxgLywXofdyY1",
  "key24": "33wJ5ELpBPRUzbQj9HGuBT4RbQvMfyz4kAzLou33f5UFhSuvwmn9QoEvipLeDChJNY1xo3m7XuBADDmDWUHQv8i6",
  "key25": "4yibRVuSm1mSF2E5omJgkHh5fMByJ47ZA8PVXejJkaTHrghg8wuzZvmiePLyK9W2uPxtevu1WAHictXxdFTvkhDh",
  "key26": "4BfKQQgWxCVLYC7kx24E4ZfopFXrBB1cqwAVXGyvgQCT73UpSVgK6g3BLs1m7uRmBTUjb3BZDvNFXCL7MELKThc4"
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
