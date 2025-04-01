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
    "5Msorj7thDvg9vjsEzTJErUnzAACFEUrxZ62ow8xubp7NDynKLHQ1MA8d7Fz9KzjrALEG57HRmb17YMWVvNgwG6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MH4MSmqhb2fVexr37Jmx5jRdGjJgFq3Q2ZuZuXYgYMs3ebsHuSrUe2b3SAPN5eQtpGveHNQSHi1iavW4uWpGMQq",
  "key1": "5iqn3JFTEQAhSxwjtC5eM3tw7T3KHYDWA4yKGhG16ZdP6adAJrw6vVBAZrX2GeZfhSvvoRUfQGDcJwGUneLfZztq",
  "key2": "JFMcHnkCSLNG1X69rwDiXuAEHjweDJBqf4sGq8XQZBoXPDusGMPWTeZfRqGropo3ashWfu5UveFJsXrz3fLxecR",
  "key3": "21UN1rpUFLYiZUxEeCx9dgJqyPy9gF6itMxfFcJWkRxKTEiTRbZrquBPfQ25hmQRXfXnd5ZukBGm3ZMHPySyWHkg",
  "key4": "sZE19FzrLCkYad1mSB2kAYgzNEa7zBfsaPWNd11DV3DwS4oBhJXpR9LWiukm5ajKxT485gNdxytJ9jxj6pZwAUe",
  "key5": "3gvDwcyKhAMPgnCYaZ9aqxe6aCAPf3rJwRh1XZgvRwJW35FwG9j2Dut1BfzPgmQG2BYDtqrHC47DxLSWPhcb1ifX",
  "key6": "5jpzPzXnfiU1bNneh9PgU6eBiUEQZ73QiDQAuEqwToFHg593mPmYPEu4WMvS5p5GiGjrpDXa3bUVkX76LCjnQbxJ",
  "key7": "5cSUzqFLUG5TcwmgRQweNQjkRw2NCrKbbgThjrxvCFTbxWiuk7Z7zwPGw5ZgQHR94DPGfRMjahwAMV9GYeniL828",
  "key8": "2HBnuE2pYbcKr3fydCRwzVnZkrbcQWZkt8DCdrLCxUC62y4ff1CCqLJqnKsSzFwkHMGfupfvJtHVwqmqHcHdBaoC",
  "key9": "4uRmtmb2ZDk2qedwTZXG5ceFiiSJLsk8uykSx7gTH5xHTwRqgFDojrPj13qWqjs23SAdtaP9BD7VXVF1vJWAxVnB",
  "key10": "2Daujrkyg53eJzaHiFzvwQq3LDNHM3hSkwEsbnX3WEpsb2KtvM3D1hM7R22AmpJ4Rm3GvpusBzPvb9cS6Wudreq5",
  "key11": "5azRszq9UHyHVGLAxKpCxDXuJufkEpQby4QzPY6je18eFha9Shd9i5ZrGRfVB2X3HMNoAfAA4E1tzyGJLcDSkd2Y",
  "key12": "2DLMBzP5mg5guEq7QzmbyXBPD2ycBwiihvK5RqSYXvYKH6o5W2Ne726959Tno7zqMWTZ9So1c2yYKRggD6DSEBi6",
  "key13": "gjoqKTjbW6X4UVaA9BMCxKzdeZ5A5hfGo7mxZ5e6J5yXYuJGApaAWonhFASX6xSptoUE1U3LYjEpuuHHu3o9HER",
  "key14": "4r6vjsxzYzhD1i3bpbz9SAGUZbx7847Qm5oNfTKpS3QtTE18Jj68BmFGEPkQyKRgDPNbEVBq2YfjrTZNHnWMNxKM",
  "key15": "3z58fUza4PUPcFV5NbBoXanSanEKu5X4nX2tsuCTeRNk9XmYEDL4iJbHeJBBqnvkn6TjMybjmkK3JDCM2MCHgrsG",
  "key16": "gfvxEWq7AAWhRjsgxfediFUvCgKrktzDEYyXtidHtkLUeBHm2Km1LH3VgGsQCLg3UhJ9UokxYPWisuRdRNUNxme",
  "key17": "4F5kcLykwYqm7zTKGHP2k4fZRfS8ba8tYMjuEBdWi4FcunHBHezZdEQ1P7B7xLszk3FErNiAypqdvSEsmBZTRFtZ",
  "key18": "28qrdxKDWLVwVpnLgKekvxRKYuoL37SLpzTX4ZAh8TMy8WNacjAdBiK5tYEboFwoMUDR9ehwaAQv5nZWSkj2KZ8A",
  "key19": "5BTdH12cDrt4Ptxntd9VWAx184ktt83rgmiNqf4QrrZwAHjiTfktEwA76TdNzao7BP2pEm9BSTZkeR8QPXdBoTuA",
  "key20": "64TuzthMJVzNaGt58yNKM3TqJX68VN2DHFYDxWM7viwuLurZ8fLLqjFBpPDTwiqruERgVcfqRNJaLAsBoJ8voYeQ",
  "key21": "SMefsPTUweUemnnd2NKM3vYPNezEHQYdExR1Coy8DCh4wC1yKMNpgqonw9tVVZx3L6Qqk6yi3VQJpZwDuXfxv2T",
  "key22": "4BvVAfhMiuXGu4tLtTUupnE7siCJJbdPKjEUHRoq66pZbzSPdJL96vLa7t3921QtacXBsuYGUMMqwtD3cmweCAdF",
  "key23": "283oK8C1VFkEAwQX1TzoynCCq7J7TyZ4Yt9ihAHNiXbePYW6yY6AtTHpoVaZudwFpSKia3ARrZcQbQosznY5fzfB",
  "key24": "5peCJ1aBnQVSPZzj33eVsgfeFLNZx3d8RvHN1a3hEpVKsWT85d6x6cZvYuRULhsMpaXHytNmtdSxnsrKZKE8r16R",
  "key25": "5U5WU4SPFe3tr4j4AgNcwHDgmrojeWX8nU3sdcnV4kLPPsdwqmBpDJXFSNbUdCQUgYVTE3hqdtQPbWRKxUUFAUi6",
  "key26": "4Sz3FBQEdmZF6BAhkzpwFdCxyqqcLDj1cohd6p9Uam6cgAeHKf3qbQ8jAUXPCme9XfavEucwzjHCiTp9F9EmD9Sh",
  "key27": "5pSQLQCgukm3M4XpW7jDw6kuPckLNEdutqC2GjZJN5XPPpdR4g2BjBb6hRgHg7eJPSofe5eSncgJ4yLvV9XgTE2E",
  "key28": "5UWt54DSqS4picWp2ACjT9TwmQihrdS45DoYsjY8iYY3UFSPBkzGZF3JMDx4nA5AYRfXynE7yFTHVJvp7SevD7mU",
  "key29": "4racavgYrSnWZK6v939NAu7z4hsVAbmfihGCa9399EqRU8f34cKQpAEr3WurGRqZu5D5yLjHko1tXQaKnTW26Uvw",
  "key30": "2W1V2pYpj59ge3aEEzxXdyTnNTAEraex3CnbmTU9aive1fvkAftK22Wh8LvWCeHRJCsAviCxvebdyPj52HnWuhWR",
  "key31": "2ZwUNQdHcSfzEi7DW5SuiGQpm2h9oW61N5U2iYkajVNwajmGkxpRNuK6uUzFxhSJaKDpXFsWvcFQFAH1Y2qoPJQv",
  "key32": "5sGptDDXhqMC221pNzuuWQr4PBbRxqnUSRfmM51F3k9yFXiSN41Um8d2NFsDkbEXDGitjErupFFJMpdWWMXxpBkV",
  "key33": "3xRD2eCfd4PjdTjbPgYcNwj4hmff9iA8Pq1bJmUadubcFhCbMMwr3LFttY3gRXM6Hwt6R2rBwvngjbJndD9Wt6B5",
  "key34": "PmKjX2oBshRhnu8iQNKKUrDU448wBzYNGmPHW2RLU69FFneiRfdFp31vM97TZieo9m11urPfmv6gkCCHPYmn2n9",
  "key35": "4paziE1sz4d9d9yFwFq12FqAaSVq38vf8SBhfnEu5E5RhSRNJQciexf9cHTUjemrZZgJFihcQDvwA8diV3iKjLTg",
  "key36": "3cC6jCcGNzKj51N7w2Do9h47mo5BS4dDB6vdvBvoUEe8h8f6DPbkgF12JrGGuRyyCaaJa2e6uMyWA2CyFVLNBN1N",
  "key37": "3Z16mN1ALXEcKc3bKVNgtZAJ6Fwr9epRDoZYGeM9a8noQWXSpEKqqzdqoz1B4zMd3m4aeG7L5BwL1kUp6yvECcDL"
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
