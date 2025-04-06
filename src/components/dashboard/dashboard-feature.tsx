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
    "28Se6shCKEkpKCM961pDTiWvCmy2nTeEaTmVb3zim7iLuFAv3D4NxYqWkToNs5iUFybh5gasEPnWZhnnUHDWteBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UL5BixUCZepRFKSj6HZGZteUVo8TUdrrojdvm8m69VMRK8w3PAxLJhPUG3bfzehhL9hkatBtqU1PyUHWEpQqFFH",
  "key1": "4tcFW7TYYQ6Lkc1PKW6iqDAZVb2ULxEDM653Wvrp3F81ZD2CAwVK6bFvvGcBkQC1L6tNtSL5RAkQNBqb81ka3bbp",
  "key2": "2ttimj8EALANo6kSpzRd58GnKCzE7tQk7ZTYeo6jEiYRyAZErnVwNvE7brfVzQwNgDS1M82bWoKeS3ykHfJu5hhw",
  "key3": "4knWTgs7135mF71E2Q5veon5mqpoTcegxRsyYZ3SoQKhPWcmkRShp45U94Uv1VkVHQvnZXg79YL8VAy5W8NusZR8",
  "key4": "2nF1ie1En6K6uaECwZHiSYVkBKxexANeseFyCmgWx9vdWwSdZHegiUm5xFz7hiZ8xtNV3WKvtjzMiXvjq8mBTTJh",
  "key5": "CPh8kgJrW2Wsks7sZjZ47SKcjtTp1NmRr31ySCu1zePDyy1gd56M1rZit4VJPnEPbk3uwevJkv4rdgUfVQ7FM8H",
  "key6": "5eCWVLQckLpywtu2jno7mpHZxYYT32HV5VxeR4LhFC7ZoxLNmFtPdzxZXLkjKsSStK7X5XvtcsygqXGhvHR1Ed4Y",
  "key7": "5Cixo3eAMrSxvLMLQakrpsiPC4Nf3f4kDjgv3bDJRLR5fDPznQ94itMRgJVYdM6uSaQAiX6dW3zkKNgMS8GmAZBq",
  "key8": "82apbMWLV1Tw8dEzXXCynrpUp6xTTYau1S6wkNFprZammtqHzZMouXb7aSvAwt1VJcEwmQknemmi6cgfcodV8dy",
  "key9": "2mMpwEGzx4XtHhrWwHGjh4Z3Lyn5UTUxn1t2w2o72J3v8ck3SM2iK9713nQagHs238zJuLcvwuDV9kyrhNoBFquZ",
  "key10": "4bkmKwxFxRCmxCJsSh9zFTT56UyRhbfzNwNDtHgP9jjSdrH3aVhrdPfmJkmcWBMP7WrenPU4RmCXFC3UXU9VdZK6",
  "key11": "8y31qHTGQ6VjBtA1bVterinpTWBqX7CQ4kC9c455wLU14CP2Cx7zNyNqGxMfnMwZDmjCEXf898xBwmNTMhTY9i6",
  "key12": "5U5h2pZgYJSBwYYez2WpJ88vqKb12g2fFHGwK2bPihqaiqByQNix7SAXaktAg3DtfyDrfPwNoYWiPrPZm62EPJoV",
  "key13": "5pjg2g6iM1cYuqWvurgWVduF1ANFY42ofCKkfJV9xwWoY3ZGRh5M7mhemLb7XjL7WYWai5LGRzCmJYHZGfdZk3Ps",
  "key14": "VKkMMNTMyjUj98sDoYCXZVaG1ShcJjMkbaiEC1x2VXSdJvzvaCEyoJTCMSRajBEuhYMFR2pncjRwfBsrNrSNAbJ",
  "key15": "5NLZuLe6KgLQtzXntMcHXq2mF363PmGGtba4TZ44GATd812qP1ZCa3jCYpwfKyfQXFQUiJjqqzAaUpzTszu9Pzqj",
  "key16": "3NsHtBakUeemoLkUbDfLCpUaUDoLmkNfWfdAsze7VMyt9GQTLJhua1EvjUxpi66URyFdN6RBcyRtL6Xq3sbcAC3",
  "key17": "MSRdAVPLg55fYr2rVyHdszKyeu9cP1fTWftFSdiA7oaLbReSav3XbfNvtAzk6o9goX9houyjYUfwe5MEVfPJLXM",
  "key18": "4QtMLEgR1QEuxn3gfnpNuiPf88HQ8pceNuCXXBAiWrFi4Kpi3wByCtgMBc9qC31HXFeXexD2Y4cMsRpwcLZGn5wR",
  "key19": "5iyTjZswBHX5G38JQ46hWUkCzmhxSkFKfhPvH1F9zUqzKN6qEA6xGQhnzkudcbHrqDBnBfGs481XqM8GA8YZC6t2",
  "key20": "Cr6cgj6oeEXxSNbTeKtrUU3YtsFD7YKh7dHUJyGtPwRqez4HZjXzF1Y9NepnvQ65X17fPXQxBzftEhMuaZmFn1E",
  "key21": "4FmEPhjWDbhNCBqJEaPorovFodBBtKyMrgfr3SJrfQNcFvATe3MCgMB6DGes16Gfy7bQuv7HVuaHGvKS2AJ9VVZ",
  "key22": "4HvxLRJ5TxgjeodL3z56n5oo564tyLg7prA7cJuH9QzCyzDhgJfMMEdHxik8i46s6fCRLSvMF2T4UyXtdx1wFcep",
  "key23": "3q2azF3go8gbay88R35WGkiXeHn1Sf6x4mRjyfBTagTWjkHu47wCE4V66abTsvmE2NS51oMoypBySzWLm72eEfav",
  "key24": "cMPbkGbpFjc7ppKXstRcfiFQvLaT2BGUtDB1HDuuD6yaPynn8W9CzFBAwXugFKKcjrxpHJCqDqwWdG4cqcUhfTt",
  "key25": "2sTFNAys4ZWXLaK9x11jfk8pDV4JtViPRFPkwqY137hPBHZsJRjWee4uSTaeH5gEXsyXSSfji9CFVrg3z3FuFN2w",
  "key26": "2GfrjsWK96BBuqJjropgLZeB2hYTMsvk6aSAJ96HVMWbGEFpC866Y6m6Sv2pXGANowSN3mujnqPxQ6YC69jCaNyd",
  "key27": "4TdiyWQFpuQDYnGNYWwYfT8WKMjj1bsX78ZzWQgip37NcTUxnJ1hRPnhCLiuES8ehfjdbgC5uxEsmqdfk5SAqNSr",
  "key28": "2cBiwLZ9C2QB8nNr1m8hFxSFASzRAUdvPqkGY7K4Wt5bnZjVr6o4e6yD4A6ihCpKxBEBeN4avqtVEPNUSR6beK6X",
  "key29": "2fExau4cJxDRE6viYKk2JbcF3ZfhpxwsVoY76T51k8BuZeTeuNxbo6Ec2WA1eNP6bBng5k3e6WR73ysmRUhQ98YA",
  "key30": "382G11EG9Y9f9JpsZuqri8qgyiMquqDMt9JcoqSyANG5r4U2zDCMCxL378RNWWUseMhntYGW7KMdFTP32wHsvbmP",
  "key31": "2fpUW5WndzedpLaNh8zHtsmQU8usJkUmmfkcg9txhV3CkSqCmJ1oAEqfDe4WcFNgrmtY8yFgH7JjZDfP3GwTDvuZ",
  "key32": "4mNUaugg8mRinsvbnQG4w6T8NLwKndxPph2NUrvZgNUnmd4EvApVHdQ67SAWjAR5ifBXWUpuiiqynvKw7eK8kmMC",
  "key33": "26HbPqSRZ1LeCRk1a2P7Q8Fwr85FJQe5fq2puNyJJiiGriB83dR6fSU1vEUTUdZTKHaYGcN3tnvAHptgVH4iN2Kj"
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
