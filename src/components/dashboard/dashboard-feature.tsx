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
    "2LTF7qunW4P3rwDNfFvN97FC1wMxYevz4SipvT1zfwZWsGo9Wh48fRTshSiReawQ6AkuPQjE5PgDq5pP3mVRFYzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JY45DkuX2epq5DWVPBrqpA6Chwaz8JZ3u3GBDBMTU5PYKutwfLKfGnzVJDeJFdF234L3H1RVz9jUEqZ1P3AssW5",
  "key1": "2SMeZnfQ1xv5Pp5dG2iCbNv35qSCu415vzR8NXraQxNJvhjoXxYteNEDjz5oRhErPPZYVjJoaeGZPqncjrMduv8A",
  "key2": "HCJ8w9qY5UiAqYSwGzeJaU4SUFq7W352jQnSaWUkEDSvjb7PVDezpxArZDaXCFmz78mDMNtexwX4SKXxWkudk87",
  "key3": "xSBBCxeBp5HuUMB5M7AgaSY6Re2eKfsE8erUtJ4MEaAcABzfh3abAu8LG6EhT5C7Q2xv1uMfvsMrjHAzyiavyoj",
  "key4": "EA7m3XvjU1xnBNxu2kK6vm4E7xGvoEM24VEKoLiz6X7KPUFmU4jEvFBRFsG6zAq7zNYYs96rUjSuFwANbEEP7Rm",
  "key5": "tG3g41L2ZKHPbgoezUvzQAsAHmfykN4N79nLLGJAeFYiPMmGgfSs7wKdk5Tyven5zBD9yYE3WP3S5wRaDamFifj",
  "key6": "4FmwFdre9uYyGXk5X2D7Snz8kH3ugnVGj4BVLTx8Dk94UmFtAR4VF1vaExURyYH288f8PJq9xnyvXBLPoRyqEzir",
  "key7": "3UmgkgNxNfkLKvFtYkDeWMMqASnmktwWEM5UbZz1jphJ7rCwVw9vip4rV2KJsBvZEmsP789w54jgfRBmz3YTTQpR",
  "key8": "4i9STHhEBbK5e7rnwjAG43zmmVUWYcsRW5j9F9Jtmnwwt5Z6cLPb5eL496EaM2sbFv8hqzqFUWnFFZSrbAcuTj8D",
  "key9": "2YfVCjRv1cUoVuKvh4fABWkNJsmduQW8tB6xaC8RRgroLG9gfpsp7UWrTpCBr2P955X6CvmNRGRbzfq7DBqRaj7z",
  "key10": "4C1Dcqy9mgzqZJgkeVi8DKZP3iADYJ277QPT8tf8QPLyGwMNr9JynNeAtNByjq2drw28sEJ24ensBuWobYyMEwYT",
  "key11": "3P5f5fpqAgCf15FDyRyvKe1fWRYzVCT1wFGaCr8FaRVfDKjpRCc32AH2mQ3f86uXvWjDFuFacbVXXmT2rL2exP9Z",
  "key12": "4u2Uexi2aUeQnwZz91ttnozk9UEWuZvJryzEufjYFH1ezsg8GzVr7RsbxQR2Lxg4MueUotYrczmZGZE3g57p5EXG",
  "key13": "6gkX2xuEiCJQqfnPFyoCB2X2qjW29DF1XpSQxRNYHbZELArhvnyCfZvutp5Bv6yjz6mzXCBxLNpj5AGJLpHwCQY",
  "key14": "2Fb3tpQsTeBh4qAGvHe1155WwPJmeQ7a3skLjh1aUktgYQ63u2B6v3qTG9KkY4JksZaF9qigMtiPGpE9onmsxZ3f",
  "key15": "5AwHQZ1Hr1TtPRbMQFegd74P28nCfj2VueQZ7B4KYoHnAUFGDdMiXL3tD5GAdWsdY7pEqy93N1giCRccswLv8rG6",
  "key16": "2dG4mJTaJqtEQAenGcGRgnNeE1FZGJcvuJKy2UPEADxvu4X71do18quGhEphHHbhq4qDkF8HRES81jDAR2i3wQFH",
  "key17": "6MJ3T1KyEqt5fokK61hNFaRusUd9uLMPE53mXQqyWugxztw99fp7J8L8rb9ccZu2MYgLNt94BG2ZtTLHTxEhatg",
  "key18": "2kAJwPsQzzwSmVSCa8GqtS8TBaaPemtsY3j1EKrfirXLuSg3jAmvpxUvo9yunHDMDA31tfuUEC9WHt7pKeExn2z",
  "key19": "HDmyfekh1DyhUq8CEvhEX8MZWZXxC5WPHNxSi79v8FRdqiBjcgxW3ZmXRDYYVR9XpWiC725yDLP3EFFbXpGKoid",
  "key20": "2tUE2VnAP72EgTc5Fz7p3vxcAWa142GCTm4bKwbkLDEbopmLT13K6YSNfe9CXKvcoHmYtTumArpZBSc8ZuwA4Vge",
  "key21": "2ejpUkGMsWpqDhCiH7xkmh6Ggo3ikYMFswfa9HGDW4eSm16nbcNq1Xbd1wekCVHb2Jq9AJ7RhCe58AsRRcKFbJNH",
  "key22": "4zLE3C91C9mrYBRJjKMDATxF1BBQV6n3uGxLqXACVBGZdxTHvv7EcK9mzo26LMCgpcAzR78yNGeWQV9Z8uRfxGUZ",
  "key23": "32AkeEhqmLViQSkMfT3g8dQTbc7uoReUeB7Wze4ioveSqCjoav7K8qnm1dEjBQRiiW1Xx6tfBSG5FBwjWJiCe385",
  "key24": "iZwvWpL32xFLvRPiLiuvTzwehL4ZoQooDxTSDRQrgy78N3PR2qt4GtxFDzT3xdT5d3giNDZz6JDmevn6S1MeM3X",
  "key25": "5MG8ANcDvp6KnNkJfV8JuEKPN2WqG6mFETYL9yv2pZ3cWNXtZGq6gEc2QyzgQ8GbGacCtaWDVBHu8xRPs4cTNuBw",
  "key26": "36roj1dMsFPPo66xq3Njoip22TuqTv5q4C67EbHycdedJxUhYUrvSvWcQgEtxbGMSJUhi2qojv4M2P1VQN5sGi4t",
  "key27": "oJqfD94CSftHatBLqZykP63u6LvHxpLTN8BknFUpPB6MSSnhogZq7WfrUUVQd4u1p9H9AEJNjdX6v8T1sMdSSaS",
  "key28": "4vW7z73CecAJ1k9ktoJEaSrrwQZjAxUDqoSvFmEwbePbuKQGhc43pJZXWdYt1h3W8ikFvA1Gz77dEsYmh9qfpRba",
  "key29": "22xszQx3k3G8Nt6FBJK6B3jnXBkkXDVbYD54Tdx1rUgWxTX9sc5i7hLkiiStCnZQXT9icr7U4qb8NfXSNfsQNnsm",
  "key30": "2LwCJDqXJbukrrmvLX3gMkimdXmmR2e2HYuLi3VHFFE2jwhZVE8yZfB9Bu71DfJGXm4n9dpZuLR2Xa6yMhCgQG2M",
  "key31": "5UgJ4ULtb878moXdhNxVLF3bNrjcBfWCDURdfeuA9KatJohNoL2BF7QV2DjdUAkMJHHmUZi7pe7JYYyQ8MipF6JP",
  "key32": "4rwbxBPEREfVnTyVrGgtN5SUse9L3MndWvi79Vs4LqXS9ECoa96EyLpJaT5qf3WjSzGJS3XhtuhgjMNN37NXvvXd",
  "key33": "GESE1BETrzewDVxWWxvrkypM4qP595yXqAnnN5dZuLPb8T5jQbq1KbWqq8Mgkg5VS2M8dMz41iom9NudxYjj8LK",
  "key34": "5LGvP2udF9yPKizvyK9QAakJ8Qst8fyqBDdmkxCiB63Kzxpg5iSrW4vdTWCM4XZyL4k1awoqtkdZqEzwWGicVMd3",
  "key35": "4utU44LReg5ngnYKeyHDpH1SavmJkNADMEpbcFaNqkVi6eqQzwFApAW3Q9eAVirtUs6fS2mjNA2CK2ixfhwmzTna",
  "key36": "2CFaWF1oTst9bhB8GEg1kaxsAXBzFvnr8piZbaTmCzu9NpNfxrTMGLurtSiL9oYYH1yqNvXktBThdrkyycpZWLN1",
  "key37": "3uJQxX7wSyzCEi34qf2RQtuakUxfXfHDwoznppiVPDWGCupAymW2fFrjXkxLvkqV3sy38gWJu4hj8uxve7gBvhai",
  "key38": "5cBjVcMgHqp1cTRVUHxTkpi1zCE23pjMoyHKLYHQ1CMAC3NVNWcDH7jjUMNFtpXnLeiAPm3Jaj9JywZ7GGJCiu5V",
  "key39": "4db1misqjnC12TVW2Ma9Y1TE1mQeXqNwtW5ZVs21XFKmiBgPaZebJrCDgDEGcTXzZCCueikAHHeBwcYGMvgcqD4M",
  "key40": "3S985Yg6bu36QeBgxmiw4iZmamZJop2eFgTewSzuEzbHTstycyGATTYnsfU5JmBHEeE6uwXuuEKkxbxyKUkShdZU",
  "key41": "3qrmgefL42HnSdtDhRair9QoNJZhGT7JrAqqWHoyCYBRFY8k81F3HJ7ffvA46iWfiSJ8BDUV7iK9iy9dtyPDZC6C",
  "key42": "4M5e7VL3D8kctbQbW6bEzkN3JkAD33vdLv983Zyjxa8NQdvWL8qtwwoeEhAZroombRXNqXDjKk5SYxK1ipasFMdE",
  "key43": "52D6zv6BppnATvPtpzoQzBBuDnokH9jR7Dn2F8Xqk1CsWoVapKfvgLMHvD84h7kf2ZM61LyEprDFWinuyfwL2SPx",
  "key44": "3pMB6pszS5WZG6SQ8yi83EsXEDWWbwwMx6r4V83EU93ziLXDWSfK78FmpYvM7tEcmAHjYch3GCX63ktvgKJecQ9t"
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
