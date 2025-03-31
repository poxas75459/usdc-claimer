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
    "4BrKYBq8Ca2VLZn9jpgnzxpwMVsS5UwWXTeBWF7yBuu2iJT1fNtZvPbzZR77Qqa1HzKFcMrX6vZH5TaDRdsar5pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UsN6iB6DLPhHmTf2VFext8YubeGybWA9FHt9iHSCZ71BF6SKnw4EbEqMCYNXE6NzcQPiQSLSLJtSH2KHwyb4mse",
  "key1": "4WQCWkuNdN95ax4jCUEbyrNBdEyWrLAcQMsdhYTJBdnnKRcNSGdtRw9qu9S2J1rKjN7XETsVWtWVkq23n5R6dSDj",
  "key2": "py8NoGyjvpkjw1EFAQp3ScnNPNkE4UUUduEEvCNMNiEem4mHTno8QHv4KdTtoQw2i69gdde1YRfh9zDVTrzfKsR",
  "key3": "M7tWfJT9x8LwwsGjLyEw5sGrA5bS33RapMsEdqz8qAkuqJ96gJ9yBgHXxYoe6NeC2EJBf2B1j4Yt3cSkw5gFdPj",
  "key4": "5fwKC5nRD2w3jz4T6hoSvShJJt7UKg1Nkct8g871UdsjhnQJ3axvJw6DGBfWwR35okx65vkJmQ6n4MdVxTsNRxSs",
  "key5": "28Yn7CiNkVA8515iUvnQLbAvMBAJDgK7VcE9kt9yJKW8UbHBSXfWmQBf2XhTLgunecLDVeUaTHEXjfjgCuFgfnc8",
  "key6": "ktsxPnWCJvUtgAwYDCVgugcb19Z1bENRz7ErHfdzgjye3hNJ7nyxJDRod5ekgbD5LzHA4ufm3pckUNVPGfEYV2P",
  "key7": "435rTdnPBR9uVdT4k65jaUQ4E64rewhBnRd64SXMnPxbuUa2zsVqkQ21Y2eANSXw8VDwHgU6MYaURZwEojnedZxG",
  "key8": "5bJKigc5gd6UZwi5YSUGvds5tkBukTVAmqUPeJMRjGV7L9eqV4r5MJzpd7ChNeMWCpYgJoy61AwnmpkRrMheDUhT",
  "key9": "537um9powMPA3H5ec8Cp7p7oaiUb4J5Ka26yWDiqo6sLqSGvbPUVGEjMoneBvLXDdYhTKw7qSGTqgXJgy9yus5gt",
  "key10": "3XtDgVvq5t24R4r3Rj5T6Kv48oHroZA36hhwpeQvGf6idi3ZCkNATMAuhhHuqmXP2uYfNHfDVsLYCPHcm9SKLrvw",
  "key11": "5WFXiLenF2S3QkCR5CkAF2AZNUhqphitFRCiWSDipgF68dL7HDy73UUQqKxwV3VpSbDzcJyNhecP2dask7Sk1Lpa",
  "key12": "h3dHUz8XaQqfUV971iv2NdPwUfcNySBGS4Vt8HuxrYLedMCGpEs2Z23bsnnQpKGNcVhYxBGqVEhbSRLxmYuKTaB",
  "key13": "2du6F5uoAAviQTVPCodjA1a9fte8JrbSVqtFkNjfu6FtS3sRp9cMaooEFgUbEqUFtcCAvAtqZALDzr1ycCRa4LNW",
  "key14": "4jND5fcaXJ7aAJXMccqKxK55v4awiEC87C6DgrHfV2DyajCFrWF1KuEG8ugzUn5PjmJJQ48q9mzbduz2xTybDaqp",
  "key15": "3tdMHZKRg5PRwk9s19ip57kpZrMNhFyzemqwgX2qVzidiSCuKMkouu3Ey9MitZ83nkNiCUm11CkQe8HKySqqMT4x",
  "key16": "2MFXkEf8J898N5MEp4UJosr8Cp1e5Dx4DcLRcJwdjfkxzZEm3xnS2G9HEvC5Thjb84dwkLbSdfepDxkmRN6SRW15",
  "key17": "5hFn8qs27aMtyqyk3mB9YEUvYxDzGPUtHBTZmeLcuR57atq3WpzMWTiVPjPNMhWndBocfRgeB6H3Hgtogm848MMS",
  "key18": "5T9bsfCYPeHGASREtV3E9t3E7n7Gvg1UXPRPYZWNTTAr4Dsvv2PZ4R3Svgiicm18fQYt3dkBA3SDcmNerziZF369",
  "key19": "4CsjCTyG7EzeXJPUJFYWL5fWj4quRmMAZMiAWmayH4PbdTnzP5o4NZb89jiqRUKxEtHL2tu8aZF9MLtbJVHYvhBU",
  "key20": "5YY3KHqvfCf2E71PS6smYads9mr8V1PKER6UhAruw2Xmij3eFvj5PoxXs9pZLHY69N3XAfB9gnx53nezHRLCkfd5",
  "key21": "3ZA3RVd9eMpBJnkU3Ypd87MW6Vxvcg29jqhh3csP88HQZLuqafNuQZrhuUWkfca8WZdC74284F23A5R8RzHS3eW6",
  "key22": "36Dik2V8U9HYspCJE3NJBou41t9hobkAoUwpx3yEb77EQRD6G9wAmMqbNyCxpvVD74aiqtnDR8pvtXwHNWVxgYHn",
  "key23": "69ErPFwjDXo2e5Jn7fuWWBuXax2qeSijstuE2xtZXLxF8DR6LvZTLMqRNMNDXZfoBvK1dqvrv7B4SpLnvWbRXVe",
  "key24": "4DeUMTFPQboTRoPYk2w838f9BYYC1rqYCm9VCEasJLEjAjjS97HZoAw6Fz1QcDBz9FhvbUKD37tAXD1XzfzgLnCq",
  "key25": "5nEGsPAzNJvsw9PVCdTQrGGHyi4f8NqrgmBtaJr9nPsEHjFmS28mK8grpPUP71rLYLEVx7VRqeEVYQqxW9HczTZR",
  "key26": "37j8bKGzZMrZ3ei5f47bU4bhRvSXiZyyKh6oCXmqKJpc9F1DPexsFMRBqZmf4AZoNFqyUnfXVQfE9HtKcGiTfcZQ",
  "key27": "4Rnj5CpuRp8gWgeA2vM63pN8c3eznfQmZauBDyXkURa6jioU1oFA8nLYfpPKmm4SYRFabozuVXuT8LsuAP1YJXAj",
  "key28": "BFvheh3uFAQBAvBap1XMfNQhxhKEimkq2AbtrkCgq8Kr1S4FWJmsqhczTBsuNWqYbLzjpFsqfYWyMoGYRzMWxFq",
  "key29": "4mqtc2fFbLUSkdqoRsXerqF8P9uCWpnDpmqkbFgmfq7occLy7PiyiRra1G6WvLRo4JxybipBXtpxPZ9xybooxG5H",
  "key30": "1GJF71nQKC4Dyrh1Lv521hvRnNZUskbGvoSaSnyvekASGrLViCJqibKWcELt8jRcHxJX9e3RD93kaedvtGC5aae",
  "key31": "J6dPNpnTad9g2mD1ZWo9rv2xY7oRrrXfs4rHJyXMR1Z8biHt8D4L3jZXaT9koPR7v3vgcvBQFx7KP2Tu6dR9s2t",
  "key32": "3ATjmeCnuJi9brkqMyHAs1J99tuy17XjjS7aSqBt2Ek1j7xrFccM133PzaryeV66ZdRous3bayyV11i5Dc7sDAgU",
  "key33": "66itEbr5Je1AfaRYK3sTevNBT85xwsvbcyjXRuZxk99r76MwyQtK4GUJ6Nb2o9ss36H9FZjC5rXM4f1wfR1HwEja",
  "key34": "5pRTGkwWRxpcNjcP1Vwh4r42nK36oJs3udUsS41jESbzJtZDjowyh7fF3YhQ2uVvnc49rjdvZg8Dh4Y4s1ajLLqR",
  "key35": "uex3VjQ6Bf17GqJfN4qQkWscUZSGi1DKSHez3cvAjPAadL1Bj1q4YwLTtr7JwqNE4ayuwo89YZyVSuaozjyWVco"
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
