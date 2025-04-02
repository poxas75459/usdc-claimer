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
    "4HFt7ueNGhjgXM7H9VknC2UxahxWp3CPPHWMyX62jd8keEMKPUWzMnjXJxPDyPodHcVPwZp6JPWevb44wnpYm7qW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xqEeFtR9uhpTjkg2LzJon5ieTwKe6oUkPZf6Yp63hQmpyRBX8NEYup4Wym8bzKkArPccKgJZwMTrhn2Lgs77Unm",
  "key1": "4WXvPAvFM6Cfm4df1YCgX6pjyuqFNp8CGy7feipYzV7XRAezt39zQUHaBkQ6oEDvgjdnDmyq58m4y3rAhxniMLk2",
  "key2": "2WqYv44vxaFETaHUCmzN4XpmxJDQnjXaPC6dxhs42X7Cmn8xx2KTUnB7yRy524XcB7qd3CcGvJTvJHxauREcaUnY",
  "key3": "3v2NN1FN2UgX8eAg8A1Ew6LczMyyHgAM4n1uyBXVzy3zWYXwts6gExGU5zt81WUCP2fLHKQtx3rV2ph1JZaBJe8e",
  "key4": "3Haw5MjwAZe34eDMyh1F6KZ4XXt99gkPbWkCeEMz7e7ZK4Ab9zZE6c8amGexT1tZimjuXXJ8MPkFWscgxysvRCdX",
  "key5": "3a7iJktUatfg28uZfsjDq9kX8u8gfVkXuR27NE1kbcwCZtrExUZLQNGPggdkdtnE9mNPHRkHH1Ja5ZDX7q1j41AF",
  "key6": "5UtMA1ffqaDZd1S1m5qfvb9dbVjXjtExVEjpkZoURX2JCCuHv7nPEPKTAVGboozoqxqek5PrdQEZNcFtcsRaNhpf",
  "key7": "4PfPphBcL36pptw1R5ZfBQKWLM11iqNufmWHomzBGL2bsRZfUXBEkprePh43gq4gXNVyHwM4uPEmsGfefSahKfgp",
  "key8": "3SjnajsDo3tkLtms6YrXMsQARLfM3H4GSAdhpRsRBbMsVqbNet3iwASZL77KiCcp2uNiRzMDBx5AXTreofqFNkgR",
  "key9": "2A9ToCr2zYdiJD1vA3paL7WbsGZzCBaJWFes31b4vZUo3DP3Uc3PKMj2pFoGFt2Tf8i8mSubkVB9Fpu7RM3yJLwA",
  "key10": "38SUa1VmysmHYJyBpdNY27AB32C8qFarBubwoedmC2UmTBKjAkowsokoFsmmCgqSp3Xqhpt5g1tkePFu9b1dn9C3",
  "key11": "2FPF2hAmWmgiAjpiuHUM89W94JNDfms9Y2WXUMNDpB3KWsZivHwKuLsSoFj7zqi1BP2QYdutbAMqV1eEdX4Nnz2F",
  "key12": "GGivDjNCUBBnR1xovAmvCMa9mw9VRN44616HWJdDQ8XZzHJLPDsmPqFsWuFd6sBPPWruVrAK1KZFMeeTFpqYrGB",
  "key13": "Q4K66d7myCW8Fpydj8AbcEPWsfPv9PhBVm5e24m8AF8VKNgycq3iX97h9Y4NspVWJGmV1LjxEn3bD47drRRaqrw",
  "key14": "5gnqKYNjaXejcibQdS2HMM6BhEBk7rydvZ7MTYLWbzUP6rV6ePyzCdWPi6p5DqeHkNViRxRXwqKMhUxitBJxNWMH",
  "key15": "2qqwEYegzr3rAqubNwqvHtZmRz2y11YV9VCaZS3kqYbGs9C3XUZ4ji55nZVMydRvPzRnQT4agMvmNp7fmPpFUHca",
  "key16": "3oRPg7mNWejUacRXfiFKXkeLBtxceRUg85kR3hpEfGmijufbyCW4xtUtu49uTt3ekfx3Fox7auK5xx62rU1yGPgd",
  "key17": "5PDMPWhfqT7yEbk7Edb39AJXr56JaoXhHHhFT8H7GjFmGGzbR4EqVbYjxRrF7vSvi54vt29S7c538MYcymdTysw5",
  "key18": "3qzskBDYom4LWn9NJQV3Ws8nMwcQSudnoL8xUUicYY6LFoKpew9F7SFs7wfrEwZ2rLDLsD6iHKYtXvw5PpU996H8",
  "key19": "57wbt5SZCWg6M3BrZLhzQSbxzxjdpuFkEQiKyabCChUAYp6m4TAhCAzEhRBJKNzkHgk6xtAk7iMP1a7SPTBo5u7k",
  "key20": "5LHwJyb4HZmbParUswJ6TEkxNAXQ8zRFEahzbSqwaPi9uTv4vQbk43tqdjN2cioEErbBdtXDD5vGdyVdEesvJ1Gh",
  "key21": "45UhZTADVXQwHYa4nDVTGViNAMQciqLrozRAD7YD8vkdh3vfoxmSEBPRYYH9DzRDuZB4e3PFCBMEoEmNWKZq5DsR",
  "key22": "4tV7raJKxPpWrf42jTf8VAeHYy3hSbkT8kbdzy47HRGfrcgaFF5MbZuU546Wbv9bAMKgijfckAJwSarfW33zmywd",
  "key23": "5udXZicZpNhNfKC64X7sqvAUkEzUPgqMteVn5d4iFEHXDdB8iCBRLAdjtJerRyXuHUFSqb86rCpuUfhhiaEcXHar",
  "key24": "4mHdSGa5Yv2ckVHDTyD3LKaRXGPC86D2T6ZvkzgUMd5j1YSSztTT2aGPC8VCsghfTDFdh7aYA3TT4BMJNM21nTD3"
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
