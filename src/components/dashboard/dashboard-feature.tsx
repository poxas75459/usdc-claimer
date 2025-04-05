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
    "XhcfYbofjo5NZUdSNjmhK1vXSuwLH22pguYjP3FD83vGgVCrEkqDuSUgBwChisrRq8W26MxFbw7pxhq4zYyASqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QXRKvLF5B5RuFnPjJT78GY3q4HtppDW7DSYKd2E8NvALnKDtmZkStC9HmZiUfmaMHL3nCZAPugcNmbsnKihpcXD",
  "key1": "2XogZ99ZLjaSo7nc8qWQVQZimj2bUVMy43i6YJZ8SJpu7oxzoBs3xsRhSuvqpMbhAoeg2hryRb5i4Vv2Vy4Kd6Dz",
  "key2": "4noU5pcj866qvQd3PqQ8AgAD8jVLBYYVtHPo44WzLHNTcY4w3nhk13cAXSVWvBQab4TWGtKTECnN5wU9uTFNxnr9",
  "key3": "39AsSZjZEtmvopvBMnjaZHEjgmJQjGBQiK3gkNJDFwrsvJ4anbC29VJTYgC5i7MURc7o8TVWvGNn7ig5oFxmXGUj",
  "key4": "2tSEfPfPAzzcPFsUNqt5vguRquLFNqUntPWoJ95qtMniTyYCQAkPwoR4t29fWCSG8fbznDH8BTZsCsSqwXGdkxxN",
  "key5": "26UPkqWjUophsXxR2vopVvJ8fwffg4UFuF783D9FAB7TnH4tJJE4hTd5sTKTYjEZJTcQJVWQgDyYEyUdxKPAUPgn",
  "key6": "m2Q7zMwCYB9sAyMBgi6Ucf1ghonfTZLVxwW2YBDANpQazWcvtJTi2hJhdySmdjhizFsvCRkhnjMpsk3jqg4VohV",
  "key7": "WsCCt7gryKQNr9BYGHcS5NGoGiksn8iTrVZwTJdquxMiSEP4fogUkhRJdL2z6QpJwVNf4jErht2EdHrpvXRAkK3",
  "key8": "3cGJW6ZMd34wnsoPTg6HtbLYYMRQSSGesCvFYfQYFqT8Gb8XttbZvsvaVTpswNDyhFs5hy87PT3jge1HRzwMzYPh",
  "key9": "2LEajNFDDwEM9p7JrfAe8rt4a3Qq1z3tiQbbFt74KDdSVAU8mrUiowfbYw5XVo613K73sQKGXdJtZ2hFnEqJSGz1",
  "key10": "3msm316zXHk8WnbQqNutzUgY9uCD6LxgmR9uMipVrpdAn8N6aDSLssZgZbzHH6BtsviEAKrGZgvt16KsVvnrHJ2L",
  "key11": "56n9CjsGwX87Hv5ip9hhGBsqk9VDQ9RbdLgbZMrL85oWGe9y1AvfGB3Ceh18HGaVYgw8nJkStqr448m6Hc7HnppN",
  "key12": "4UQt8mXhZMhtdL1SvKgrUL8uKzkhx4oYc6ZeZ61WmfCFDFEuCM7hBKsaTbmzhza59QSnjLcakY4u7MXf5VHGpZe6",
  "key13": "D5WMmX36aidSUvoAB4UtME1dwdZCaJdxd5ECARjvdBKAgKHTb8GaZMZ2YRimRbymByEhnvBaDp6DU5xRLa5dZgr",
  "key14": "3HnwyTSakXBkbNaZUsiUR16Jay5Qq3ui9aUXwsEAPCrKzaZB8EQ2oZ7EHuwg5NSVNFRXiKBz87FQ2YPXpv8dnjJE",
  "key15": "5VUupVZXGD92uyVBLmmMJMnXUbE75jZEtq8XivYf1aavdJYrhXbaYLSfpgjGYgSYn8bbu6Qz1KjqdZ6RCYrTd6PW",
  "key16": "4oRBVbeLf1w6qX82fF2xY7b9XNwRYvk48kFFtcFcjQnpHETnqMXF72MMz4kkvSsU1KWYFsXWgBBSpsfjWkpjBGWq",
  "key17": "4CQbxHJLish2pStDqgrGdwh13vnDUVWkRtbJEJASbKFKZefph8y62bwadRH9ZZNxiMEv4AuE5L3EqxK9iAWW8o3",
  "key18": "5gR4ATdXNefLTRm8wLS74mCyTH6qqCcHqjTW3quxxvYbPpSMg7QtsMQTvWTAbdDSSXNPNxt238h6ie9x1Srm5knq",
  "key19": "2W1o5daEJLJdvSwyvUQr87MuMdhpYswtH7Mb2PCEHFvmSNhNEH4w1eFAPr19b3aYwsGsSHuqEnnkduMV8DUzeH95",
  "key20": "37GrjntDnz5rC28A71K5oLcjSnMb4MQyjUchN3iFur21ACp9JtxjMdfwrAQJDT6vPvkXCcC7FatDujwvsL7GWjTd",
  "key21": "2SzGbRgxxGLFVA7nGRstweutQPprCszd6SVpHNLSqRJ8Bw7BZmzzsoar4oEuaai4pivuoVNs4TB612UWZMptBRMY",
  "key22": "4gmUNmu6rhry54VCrewxZzadRe71Hf8NC7RRLQSsESQ5J9BXshgWuJsCSpg56vEzefLXEwcbAZCMewmmaP8y9BEr",
  "key23": "2rewrfyA2em9ToWYJzF7hSuFQDTEXwAW2aH62ncXb5L3dMpUbC77XeZ1mQBc4vsjVmAYkkCUrqXT1e4Kcep3FdSt",
  "key24": "4gs2LfyNUwTDJ7jex1nDA96X21i45CL8BLdR3SB5VmkD78nfqnNQkd52KzHzvSdbJJe5g48b1v3to4uXDBFkxwom",
  "key25": "5xswX9V1ZioD7GuDt97kY8gvcMyXybqEcEiVyoNbxwNpgsTUskxRvP3YLNfNLheu2WCACyWyDoAmocpejPjM8Brf",
  "key26": "41nEKBPnwP6N9Gr4mqhvr3izXXFpSmH6Gcc1nVGhoCSYP2AsLdTzXfcJgfMbJNAhFDgQcpHQYviMmLmu19cWB9WD",
  "key27": "2m2ExGbVQ95r84Ckqugydy5wx8M6LXwMWAfco5Tt9mBNYh8PBnrCuzrhTEEzWqyKFioKPUEVKqxCoUfqiF6XneLo",
  "key28": "3ugnvKbV3mGUzR3Hy1qpmo645p5mbRQSLuLg8LF3J6i21KTTv4mrpRkEhCMoyGgtjTafJHb243vMZ6SSewHcsmvc",
  "key29": "5jZgyUMovK2XtMsNLJkZigXdcLizwmn9ZKPQKUW51daCPqm2zvEFAEu6pLm66cmjVsUfb4LNecB5p8M2QncPkkeR",
  "key30": "42UR1W5DW5jMrsKnuWXmWw4pvENiSorjEnqJy3oVPfatW6FvuD7ejkT5YJRSZPZcw6X9SAiAAo3znQcqNUUAPv3F",
  "key31": "46bj43MfWcRLFQhvstznPHKbcfgv8CFRHjRXzQPVgjBTMqmBqEMBq64WCeVjDUsqj7L1vXmvETG3mPs6cssgjt7v",
  "key32": "4NCWZRok2Z6UdmCPjb8JcJMkZbJpVNyezGthmYimhptMdt9ijgLPLNMxVLysHFzUFnoKJjepMiDiLFQfXE49PjbH",
  "key33": "576B5VH4dV34D9V14LjAFuSwzU6XSNvnjxQPUSVGooomhFLgbjbcqt1CvnXUvN5ontgXnuUMRzfnW1UfwnXCgURJ",
  "key34": "3f4cscD9HaZHsXWbGDGz4h2ahfxrFz4LtG2k39fm8ytnEwLSR3aCcfiemyzMVK7C9NuMcCw6V8nWvEjMiRoNUZhC",
  "key35": "2e9615zEpZwXHPYWnjT6NN1eAViLEk2pBTjCQwTkHRKUMfKNu2K1EwvVryGokaqKvEudNNF3sXrEuXy96XbGfvTB"
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
