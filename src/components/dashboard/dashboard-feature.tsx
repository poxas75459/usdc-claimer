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
    "3mcvXQr1mMhVZDqCaNG9aYLw9cDmjsWH9F9TE8wyy1ZNjdPeXKDFoYBHkNUADiBYx6jZY5LgUEN44B59u8afpDqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32uJRJDcbPda3aohkyKPE5PLh1HiZCi4kdw6KYaHu4oYSCXuHgpsF2zbHt6HKASCiTfwAhcq3Dx9cLpcWfgyd3cv",
  "key1": "3GVzQAi6ZMa1LMYj3stWubsxqwspjpfs6aHNMAjexuuCNhkBaSHxB2rciR1ocXJ5CU9XP49P66KQqbwqHHedhSJt",
  "key2": "2ukXGhYL8Cixbavb8xQWak9AmK8ti6LJCoommdVrkWhuDtT1VmYYazbXnW1XaLQBV2FKDQBZ1zvcA6q6ftvN2NW5",
  "key3": "3QwQ88MLAnmK9mRtsWZGEx2SBqNohwA1khobsZcpsEJRL2oPJyfYSg1b5akyReWmjzB5tsQAEi8vHqr6UDwqJTtp",
  "key4": "2dUG8YP6siLWByDm8WVw9K5JfxsRoVzktjAmR5UeTG7qN4UKdH1XxmiVNWGUGG7bXkDTz4kD4xwvmEteHGQDjgf6",
  "key5": "3zbo8QNrMK7Hhb8K974zPdYqVhuWUSsP9MxKxyE9bhtNAGv3TopJQYRFeRyKsPX7eBYAWAMmE7Bmbh48MUqes4sK",
  "key6": "5bAgvZ5zSaqCrjjuJsGMVoHg66jxxR66wzuvoYiTdjjc6c2zXXVx3yEr3GJagem7rL2ZYbxoMbpKGSTo2Ahs6yBf",
  "key7": "32bwwpRyMPUNELKkNNp2xsScNHRwLDk6Qh5bCVb3wRX6vxsu4caqpj9EmfK1gcgi8ayz4jT2DC1KZyAmqbedPHjr",
  "key8": "2aE9WHDQAaPXE6NfMiD9G8VbNeXR5g5Fe1sFJdSc6utMLKQDufTgR1wNGuS4SXbL6UUzNxAB9AE8b1CRJCuEe7TW",
  "key9": "3djjiEy7TtPNa9425JEuDA6HcbQ6Cf2myEjSb14HFsX1tJYcFj4jkh9b9wnotsv6mCAscLJUtJfrsHkrmDqpGKZF",
  "key10": "2Ky38Uf7LV2yqpc4nLCaN8NDWAZRv9hJrKgG615BfqhP6qqMHdQv85URsMNbfd5j7TwYo7nREnU4ta9xDvcF9yML",
  "key11": "2bN6Ao9GpK7MtnRZhf3TbRZru2eAaHkHCTTE3Wp75wNt2Z5nFWLwxK5bobZVDspDPtBLCtYxSt4q81HLAgu5wpQC",
  "key12": "5tAS8dAZ9XSBjHQnx6MaHYHvfFYbiuJkM24FfxPMXVkVNV91hKoTkZLmrGoYLvSSYfgQvxyJ2Kszem4jDwp2WpYc",
  "key13": "5GhrDqPNrg3YkjL3AhKBkCtEurwUmPTtxVfHPXwuJaXZkt1Aqp3aWGSNEPG8T5sM9eF8tFPQ7mMuwmuAk3fvctKS",
  "key14": "66hQvPtfsVsu28aogwNyHudQpmcHXVZDwMiAzY8ULJk8r6WB2mqfmHQjJ9vPASyjFXY68BBJXnY89biEEw5xVEnZ",
  "key15": "28w7fbaWC2qwZkjPipyTLoLRyzBmqfCBoiFka1mqgjoW6ziy6FnLr4aYUANpLbJTEddcN2CPdVdGqW52KL74BrCE",
  "key16": "2yWJzRfpYvVudtS9ixY4yPMk2fLHMmNwEk9KZB2mAnh6TKjoVcsZcKA8kpyUfVwgU33TbkgkWD1JeRTDTNumPd4k",
  "key17": "2gtQoUSNEff9M2UBg3wXkUpPj6JX6EwU4MEktnGiSK1i3LhiwhWwrHRmZwsegrojaSyRkFy4vNX6s8zJtmV28fH3",
  "key18": "4ASdCffZDiSFwqaS9NWwHdsJhQLQnJMkMJpxNDXV7U5rL31SWURFNKzD4XFcS84TJVFkYGChaQF5ugtx6tnnBiXY",
  "key19": "35gopV8LXhhGXYPWfnYqkm6ivdxvu2jQmfsjZbVJY3Rgd13VFifYnsWT94SuxFrszQcfyq3DGnSctSKwRzoDG3GQ",
  "key20": "5yhLNjLJ1JANw1tKhLpPn7hGHCRWUmNtUNsyrCs2zFf3tGvSxQz8p5DhRhx7LPg18VVhuZ9uwvLcGsXFy2jUEQV9",
  "key21": "4XgE1FRBXMpVKMCFCWc5iiyvzgyL6K463RtxZTR1gsdXWo9rDMrREn6wYmJtBpKB37pQJWhiVuikdNwznhgk2o4s",
  "key22": "3EPHkRr37NxiBXNyPieyjmhxB3TLBsPVrDrn9cWYUmfC2U3eb4BC8NULVKA5NFLwSQGrBzNTpVqK9sYppJZAcynS",
  "key23": "64P93KjCmCnKNK7BDoCtvnnR83ncNkgR1Q1MvW32uGH6CDmJYY5t6hECkQkqzkbG8ZdD4d4VdHVVhnym3yakzhDu",
  "key24": "5o6VvmZF3UKVcpC9NAt8128zHMfdVFtn368caPCHRhE3G8oQh5Mhj4gUs9eKEcjT5Dm3nsFMLWmFeNbJmuhztZfx",
  "key25": "2MnbMCnduTwipwxmGBf1MZg8n29swmaoMMtS44cK6aMm7XAJwgizLERkcjUK5EBRZDfDjMx5X1TTNAkySh7MY8hz",
  "key26": "33s1wwj4Vgz1V7974ZU596FBzQsLvLkSCAE5DU1iygyabhYGGQVNi4XVuk1NyDdwQYwtZemWr9aiRDt6pwFrWRXb",
  "key27": "47rKShCj4UQbfqs9Nm4Y8FBjvbeqRFehD1ZEn2AiHnryx1vH3mSfnJK84SGoxhHUM5f1wu9oa64wfvh1z58QCSX9",
  "key28": "5d35erqc3hjLWNdw6BgjxEKuXhPra2S7bA9HoWUrGAZnTdpoBemwDqtJkTLubGgiCWwdE1hx9ZCCqaDPAJZ5vonn",
  "key29": "5APE8ougSCKqqRNjzJWfYB9uXdiRTEorfLKay4MKRBR2yadEpH6etEAzUDRgqRW84yjjEsV9E5tewpmd2SpfUNnZ",
  "key30": "5MY1VRMKjd2YtTesaZnx6ZZi3623N4yieVTKJ8ZZL9xPgnZ85qwju1cpS5fdzPomBqYLVCNHUWMKC6XvxwyrnGcK",
  "key31": "41VGbpLxTFmeizJp6ZunYYUt9NckhbGav7RsmUSftYXpYCpQ6xRW1Ybr2aaDdUJ3u4K3sVVaRb82fMk3mPYrLfEB",
  "key32": "5LpTLE4WeQKjZg4JxakUYdmZGGdiy4qQkfNjd4fQ8Vjojh1CAKBdhVnqMwx4P2aEaJp7bfnpBkfAV9bqG9a7NeJ6",
  "key33": "5dA3bpVdUAKBefBkbMEwSrDhmAJgBthucxV67AZVd42UTRjdsmtsrYBzWLP9QgMGae1xzdyF2wrB9oLZFSY8Cses",
  "key34": "361sYiqwncmV9mcYQ3cduSbDSRTZwvxFvFJD1fH7Ra4hBPrK4CfmH5gCCJEsJgdwrGiSM6wxFh4k8v4gpB59kWu3",
  "key35": "UKFDhdiLLELxHZW7kmNvKBRnaUZSwBFJQDnFFHCrxpYvt1WHRejRRtx7DSBJX7iLK5uU67VWNPX1rtdsLxzuont",
  "key36": "251VQscLw4aUMjH4zxF2jEWMnSSRR8ZfJxtbCZoXRdK5PpuUY5ZGSxg9rSVnmx112qZmnKjezHUDHcgirrd8qoYH",
  "key37": "21ZK6Lh5o3EDstyx2Je1nKSQXCmN5ZP2bfFgVvV3TiwqWMBQVHTnpSr2Ne2LfpndCyqXwxq29EJAVXv5zaDWMjUt",
  "key38": "367TUszSqnVwhHdNMFy5agvkSPuqQ4GGfDj6h6kE9vdyLMXqTYAZD3vxEjeoqK9YjrBdfS7DZBxsZ21BsWZmaqaY",
  "key39": "4SVKrpHkg3XtCtqUXriMGFQq7GsfNsdWttbgmh3XDSS8vH8FzMY3y6tLZiouT85to56oJtA7HJFmoMq4oVp6mzqY",
  "key40": "5HRxbnkwb6MHKVrVmzQxSKdopPR6qcg5oeJxP5Cyi1reLmL9qqc8ZYm65fcK6YrwDkeyXU1A1P8ov8Pd9puM4xBk",
  "key41": "2gXFxGwpV9two1h3FcL4qUb4i1BQUPADH5muB3xVLTmhfCygifF5gPnQiQYVHe6Up2hogjAe2Ro2jCzZDXedLSRX",
  "key42": "3nFbMYdq8UzsjMABjVvkjvzNNFBbbyzZm3csUWBn6yWeuVrocUBeYSGYFBZQ4iSeF6orhHqhATegL8mwdFFgTXH",
  "key43": "38XKc1WtZqr9zP4Rr1fK2NUAJ3ZNmzXertAb17zWeLN3tADQ45oMPg7637m8TzN4uYp9UinEPkDPEaWAhbRSFBdh",
  "key44": "fFGLxNvXgP5tDjDFsPALyAaP8gYdbGY15o4x6EXttXfo8cpKGgAgnGESRfSy46VvTJmx61H2ConpukCrKqdWHkt",
  "key45": "2dBqvqxHacuzxTqhM9pGcEDGSp9wphG2CvY2WScBVnuJ13YJyEpFfH4aumYWmqzaWhXg9grvxSvNZqkmk9MgMfxE",
  "key46": "qYCAksEyqBKTgctHeJYEr6jRzKUq7r17kcUY2PkU2nwpasCraYBM2osWnXPZr2BvErGibD9GZqoA7prTiVzFDUf",
  "key47": "5FR3LSJdDUKUHGaKryspVALUpTz7araZV7SnarN3wuLckGwa3wChN4SmKAQbEYMhBonx1orwjtxD79sXt3RT56nN",
  "key48": "4XeLScZFWpixrG6spK6JCG7j8T4R95W9bKxRN53P5NEDUNsxoHDMarVJDaQQLPyTQ2X8HQbEHrwoomoRXHQoCjQx",
  "key49": "52gWwPuraBHtUBggS6FRGrSyxqGLBpxjf2XeafeVjw9GFKpK2Y5FXjhPAXHgN1RYQouXGnQGFbABsAutZDHzio75"
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
