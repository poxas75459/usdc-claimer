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
    "3xuhhHN8irqo6rwEW3vLzHCUkPAt9oLGSpygYAs98zSHBBUfbAfC3kJaxc6xzmPfCJMc9MsG94oN21Y6j7KRqAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jfeY5SLiFwr72eRATpuLWx2cZff3weV48dGmxC6LthpGi3NrNoWrF8grtuS1naoXQqUR4jqCVRAbrSAKqFn8cS3",
  "key1": "36sRTnKjjRyntwNKdLxYHVdo5E3BxDtxxkNPscvrstaJKdh14NNJJUMEgiBwktccrQ7VNsN4xFzE15MBkvXEYRWN",
  "key2": "3eK9vE8D8sKhnTXZVqiiagdhmuYqoGBJk3jBQt5pFDF84k41iD2HnifeTKZ3syuVQ3LHEaHpSWtdVyxpkUmDT5XZ",
  "key3": "3jCNZowdBs3EU43CrBZzECu2888tAVb6iUJQicSAQHCsQ5GkfQfV45UxPQBaQ2LQED6NxFfffGUNqKnxWzNfftGY",
  "key4": "3Tm4SPiQ385rqjeUwHnk54ybaF4CUjpsh1rK2WybqmX7qqFP4jx8QMQD3S76rHR7Y3mZgdaoPygv3txU5vss6Hxn",
  "key5": "3j1HNCrd71yc8ZeRDhQyN7Wt896fz7nQzPbj5LuXiHbvj3r78wACRLaPfngmqx4YoyG1VMBzXndtpS3uMPDE4e8A",
  "key6": "5c3V2pxhrG5edMxrPD4pj3A5CaW3wZbC4VwRzeKHXeHNksyxCD5TKPXSyzLhbCE2GpRMLcrTUt4mWYQvHVJhwkw6",
  "key7": "4NiE8A1wp4pWQEPV8FkYdtbmJArYmH1LYGoCVy2WNBJjzVS6rADUv96FRS4a83rbcdTSpBERNe3C6bnpKmuZm3uT",
  "key8": "N4XekYqpX9nKdHGDiuARLYUFArcz7XW55sY3sj56qsjghgMY2PFfhUpdx48ykznHhXf6ddCi7q5Pt2sm7A1SwdM",
  "key9": "5XhrQWfwtp6XTYtpjQ5f3kQWpVcGgHRqueRV4sfoHEHjw5xB8cjnX2R6YjUmwssyji6NzyjShcRdrmtWfSK2hg9S",
  "key10": "3Wep1dJSjTN3QeURfbbofcbuY5fa3EA6LagMtnNHP7gNYdKvhvivPjB1vcQuuvWaXruquvSdhg7cLwZFWiGMZ5bA",
  "key11": "4ucXMDsS4oUJhTpAghmPBEbXtdoBgg92inB86GVhUmm8L5gQUsUePozjPTMSRHfPh2Knn6KvUoxGC8CgfrS5DmrA",
  "key12": "2mxe3psCZHX3TQoKj9zcZ3HNh2dc3XcNyZHPfWFqbpG2cPeryUhsmNgZNq5DaQCkSfSqxLfFGnB7nofmyNwCDU1b",
  "key13": "3g4EGAeJfQGMWvrL4euggJ6bfgyZzrAyQjcSmhyunpzcmgxpDW4jNUHavYVfRHfopA4BTuS2ZBTha2SV9PUjoPqE",
  "key14": "2YJnZ1rwUoQuTdS7JkyE4BdFJhDvjxYSg5LvL6sMuoL229WmovAtFD8xiTUMpHm5Www4dFH2nQZiiaU1yw5vQDvx",
  "key15": "59GTarTV8Q1rwZ5JinRx4jzn8D65HtfjujN5kd6UP7NsjXHx2YhcS4ML3Ji9epy3UJdQbTdipeWnQsL9RHBtAEhG",
  "key16": "2reHyHif6byYoSi33JAcs2iDM4bt4Ssq8GvtJKE4koVuFaQK7MxxBn8rL8DDRbEs4S9GuGQwxhDrT3BQQcmMt7rA",
  "key17": "2ssesmzhELroZ2j14AWrszetuN389c6722yg6r6ssEgy9ReVCbp5HvU8ftHf6Vo19zDHyrnvrXpKjzBWMwqyvrbh",
  "key18": "orcW3qWsgKaJtnCTy1c2XXU99iPf1ii65wmcx321BhHEyNfeDU3inQjNVsFtvYab6VPW2GiehmETLRhLh9TFSai",
  "key19": "2RMFYbTvxGvwTmUid8dHaXjdhrfqgLXU4sNerUD9nDTeRva2kEP8N22bwVkPboJDJDuZi2AgQsRdYYXY9Db421Co",
  "key20": "49kWoZdzQWdK5nkn3N5jxAWHuQ6rgbA8EDqdFoRpRY4tWHKBBKooJvcKzDmwSi73cTBSgS2vnxKF3QsJ6bEpvWGa",
  "key21": "23nNNi8XRtvvHX4ofnMys3BuDunQKdtVVXzwHDWc9iN9RvqgR2rHVPCFXCTmtJBhPqD4dKoSBxgCUrDZKCsYBPTe",
  "key22": "57TssNXS9Vw1dzX4u9oHvxKftNKXbhHoAEBEwfXSr4S88pemV41mNZkKaXfsfdZDCZdcREcqTHFr4wP1q2kBzid6",
  "key23": "5bguYyvmTLrXoJD39Ujoj6XvgN3DUK85gFGbNX6Zwj9vkKqZ6S5sFTYPVWBFMkcyBeZXegEKXsMk4EeM2pQCpJZ",
  "key24": "5bMBCmYZqTAyZYss4a2XfP2ynRc9Mkw3WWVvXzgJCEGnBNHBCairC2e35JwLm9ZaE8gP3JsUpJYa6eP5znmT3hKQ",
  "key25": "5L6gp6ELrWsBm798xFadY8pgWU6XHJkreVuXuPCBEnjxW7auZ7QaSyNkrw5kq8zpSEdugtiwC8DjDaFN342YQi4V",
  "key26": "5YvVUSEveMB2tTKgf61r6KUhM6AY5uVjk8Se5AakWt3vj1oTZNcUV2FCUxzTZMkr3msBCgAuEJWQoGxWydD69eHc",
  "key27": "5GD664yeBLcoooCVrNFMPJ23AaJR8DxEsczkGndvFB92gvVGy1he4Xd2qfCZ99mGV4Swiw5kVpoS7hFpzgncGsKT",
  "key28": "2q4s9DX4tiYTgWEWQdchhbV4sKj8rRyH6oRwYy75Bma8fyzT2nxsZwK33jYuSjqhzoPLBVC4LVeLNxDvVCShCjmL",
  "key29": "5b3oEqGy7hiHC6c3o2cQk3JMAA3nbkFDnFMqkyf1M6aBP7Ti7nYrukQaTVMsLFZeBKKgdh9HfBfauYH1fg9NQF5D",
  "key30": "438zaNtVLkNnqphxHpM5U2Zjyn6RsVtRj8XeCMsCrKsBcmFEFDxA6ud1CLgUKSvdqquaN6Cd4vYC4No2YA8eCXWe",
  "key31": "4sJHvAw76RZyPPfxC7kd3qKQqqEnfNXroCXVfoydgFKgKHemNo4TGraJe4RT3QGCME1cL6Hp7HDFtpApFgr32Hif",
  "key32": "EfBTHGciAG9ttctHB7KQgZ3psYz3Q94vAdsCEYXWVcPUr6eVbVdeUUJxoyuoLmMxHeAQhpcVrHbzRSNXqbqgicx",
  "key33": "Z2heQgaPoWSFjeKg6bmxZ7DE5Hvwy6pEHaCHzqVpMvWV2gDKTQ1XAKLUcAurtdKLaEdeit56tt2sxyWFaLB4kmn",
  "key34": "5SNg482CD92Xmcm6ULzGg7KHMvWLNyhQgpEbvM7rLwAbM2Ckh5FWomPZwbov2YuZKPBzqRGs7Q5dCdYWEgus1nTm",
  "key35": "63pxnEym6DdbNXwsATPZXbPM53SnNLFZRhXj7ovoTx3muaXvWnHBmqczKsSuNPDmH41a7JMzvqqsrqrkaJCPv3MA",
  "key36": "puWSgZZe2CToZZJnZ3RouYzu4RjjQELH9E2UnmrtbsiTDv8mEuU7otabQQcqKVwauxaT8RiJb5GjEwGuXnZn2hM",
  "key37": "2ZKQzrYXhWtbbVoER6J56fHcknPfcQjSTBeAhkDaYzJFdF8Ff2Dt38xPMuFKFWkW5LHkNBQbt6tZu9xMEzN9kzpz",
  "key38": "93tgRRsekyLS9W8J8vxW8At1NWRc3ZgkpanUtMWojRmARxK4wrYjBPM7EUh6U8D5C6Dc2WQ4WzNtDQpLk7mNuAv",
  "key39": "5N8t2DhStpD2Sm8mGGP33NVjeC8cn7mjgV1aMYiKz7u1L1K8pfgDVkoiVk1dDD1VfjSXxMCLZyAAt97zn9FhSDMi",
  "key40": "2ypefpHjcmrMdsUkqianAEsVbCgG3CFtLoHau69EQfmYDSKc85ZFoxMS7WkEwcffieBJxv3tt4dbi1sR5SBbPG2P",
  "key41": "4YbeTMFf8U8MHewJhpj3rP1V4G9D8p1491wt55ifrHHAcaCe2Lx4mcrQfhu8dqsyoU11t9nLDg1snkkHvS9Uq19J",
  "key42": "4nc4tXLJ5QmdyRTDoWbTbxyAAie2w41uCPnoZ8iL7G57kACMa6wWe1khCgPHewmZizzpiRAqUXFS9tAUmX4rcb9w",
  "key43": "4unWDQZg5HPVpdDAgcgosfoFsikUBozLf4zNxUQypTBx23Jot8aguARYhovvkasdjR9mukNuvjLpwSRz7WXuhUrm",
  "key44": "i6FCpEzR4krZ2cw83SXiK6JJxF2LLWEgxQSHX3Mt31RusXpScnhX1thXRUdG16S9VGAq5tcBfLNuLATESYXAqHb",
  "key45": "tktaEVCUccDCbjL6zSgCRnkCX2qDYTjo2NfcFo8EmS86nDmvrPo4Y7EivL1D6gLBDpHqQottmhZfrvdqJwvGDoZ"
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
