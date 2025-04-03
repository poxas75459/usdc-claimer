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
    "4D48TRXg5oJq3mcRTbG2uyEp32Cjzxx7CLW5W77eB936KHLRUjPUmG29JptfMRk9aHaGrd2hArBaTmZ9FUwgjLRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oVPGNsumTfzURNfcAXqGfksYr7ZDnXMCwDdaiWh1KfSqMQ7WNiNMRthGKgiQK33fnnFav8crJNNaqNHusSY4SEU",
  "key1": "HVGm2WcEyiB4TcrzJr2dvHZAEt4sK3uZ6KsTu2qCw3wtDXZuht8PuZsD8jz6i9veJD7XY6QQku5Gfg9w7URQpDe",
  "key2": "e1xGiR2cfpTHWP4W2YHSiETagW8LGhXPW7pFENqzCDA6DZH21qUP7ob9aLN2B8EkxEu14A1ob15JDXizaCMVEox",
  "key3": "5irR1VeuC1Ku36hJsGLFTyvV7gBR2odf2VPBSXE2A5iZi5pvbD9uqAkrsm9G95GECqyPzMEKrYdu53mnRZpaX2iB",
  "key4": "XcXkavsPvGoENahQkzbNNwuSSCmwg26ezd2oJkSxkyN7ZvYtxT6AL1DFpPqGSbjjuG9WaH4Jn3BGdq2imsFaBxa",
  "key5": "4z6SHV6MjwBYDXpeRFajSYU1Gr2VggU3CKn2HdPtrWPAG3jQAyUn5WtP9QeP9qqv6dsDY91cwe1xm1GE6ohh5h4v",
  "key6": "4R8N9CDemAUKYSffZJqQkUpJZad5TwMgNajA7svd8mp7kc2FV11W5EifVeNXB4VaggQSwBQJveuphxxW9zYYEfFb",
  "key7": "gqTCzJHN8zk368TviShQTQzFCgwqeUahud1i1PacN1xbQqMhpzsG4KaMM5aBwoT4QzWS8Ei5uyQo1Fhtpe8dSf3",
  "key8": "5u28PoXehCx76qH57S1YBsWgpN868cc6yDeCWgVTZLD7dXqSWzjiSBdpPzgMMJYuY55UW6AoWcjGknpPvF7WwxDx",
  "key9": "2ypDrPbaeQN3aBCc1gH9yggZPnJRmBi2JGKSKnwTb5gCq5PxfQ5GeEiAyyEctS3fs3qg9tji46mXFKej875tW7RN",
  "key10": "5GS2EpoENSwrqtxNTJzwmmoyzAaU1FEmWw2YN54GNuHZu6FkkeQfaa76nbuaDp4gS8F8SQaY7D2RUazg8J8axPmk",
  "key11": "2DrQdtAJGCTePqksPQ2jwLB4wsAfRxyWQiYdoKysA3sVpiop3PmTb2kszuSFMMf48C2HAFFvbGPEqFSGmEESa1Yq",
  "key12": "2UYVyxp5Je68HiRZiSJKMYRrvQ7Hi6YCNGEEwHV7zDFMtJFNvkee2utbocpYHnW8EXYmNYKjJoVdmvCk63UhWukS",
  "key13": "5AfzZyH3JuCxW9xtLPTtMDqb2guK4XWzdbfipm1MXFAdqXnkBFnoaQL9dNhtT3k45Fs6DnzHH4sEQC6595nDqQ7t",
  "key14": "2HMhLHkvSCNi3os2T3DQEn2UDq5J83PnuSEhtx4SuVXv5zQQsG8aqSSfCPWAnfwjuvtpynzVkr3xwgCsUx8hh84v",
  "key15": "3YbDd5tAMyoRSRWkT2p4EChEW8tMGaMdPTSsp3BUJioup5rXB66kSN7DfXHLdWhtyaoNMEW2ZsmMABBoM9q2LFTL",
  "key16": "5jjQyDyqcrMSmSXgCGL1TsVmocbkaLFqCpYDpienNyVfzTUQHZasyAbGg1uDC73bTYDHpcVBmm618URDJ81p5JVi",
  "key17": "2AibGhRPJYqoDLFBusZSPkvw1VTcUdw5v7rJ1YLMMXfqrVoZPpCEJeCUo89BwgEgebQMCBsuHpcVmpcuu2kjmx5S",
  "key18": "5Euw2ovpszjrjnpnw9FspxqQreinkmixRsM1Puj384gJEuKKt13cYApfduq4WkfkUWQunkSEo9KoQp496G4xuXpF",
  "key19": "2jua9znFak7NwYke4CJKc84BLExyidYmmvXBjsEzRiA2uuScsYRcoHHBQ2dpPNY4XrLWiWCRuNaGfCxcUZuHJcGG",
  "key20": "Kp5yJuytAvEcDsRLmMEAPdd4Ds8Pw2z3d8eKpowCjg4LCjDAGUmRq4ajhc8ZFaMMir2jzvJAY9DLPhQWVtwBGYx",
  "key21": "51qCT7cz5wK4jaj8yXmPouEL6wnW3UDEApFJ4ttuPz7T7RzzAJdxxVEUDyPMEC6Z1ywb9R2PJDj2FkMFKxyPbLkC",
  "key22": "5nZMEDWZmWWCmrUmchm1Gri3mJPtbMsSCqDTVgy7J1K7vM3ZvXUsjCVNzHhyU4RiEpBxWYcQ8ZnZvayHLxk7g5mJ",
  "key23": "4Q8Z29xr6oo2aSkQrzhCJAKHS4mUMnpnY65qt5MiPVoYLaz6vH77JBeQVtAgD5TimhbxP74LZVEu6My3tV9iDy9q",
  "key24": "B2SzPnPNJ2ejagCTcG1rcPkxbRVxGmDzwDg4hGs84Cp3F1n8r4c2BTxJRDSfZe75MxB2fwdwHevYRT5HsESPrYx",
  "key25": "y8KpbGb9o4NvcTGcoXYdsYu3pmsXWi8UeVRzWwVr5dWpvu7EGNpQX5qSBiUksoDHwwKe5QEdcsoms8hg6p6XU3Q",
  "key26": "EBmPriwuAYFgDqAYqo5fx3njhckWBe5qnrL74wHpcecYWsrzBDUC7Q9Jhx1SX945AX8EmtU9DdSc9pWGF6BySxd",
  "key27": "R8DHkiwLkKDhD3mMkZkYeho64kxHJEd2uq8Fn8kuVL42A4rDEt2CJ5xW6hw6Ti5hgirSgZXAfeaRMnZMfPugvA1",
  "key28": "4T7YMpNcfJzdtLdSVmQut3mrU8bh7FNFjag6Lp2YLBdLpTBn6vQLr1o9dznLtVegsKZR9QbVXLVYNek3Yw1pUjMq",
  "key29": "46mU2r8y6GcNDwhUFHeMCjjJdkRxWqpDrbHVHuct1Z8tM2cCjXPWaXAHADJCpyRQJ4i9Fynpva9N5c8wj34yu2V8",
  "key30": "kBnWgPjtPQLCiVqXSAtKNTW3ssrb8aXQUai87Kok9wNAeAtyTRmf5VPjQ6v2h3aRnUHUpTcW1D6GFKTAGdng8Yo",
  "key31": "2JkwDREFNz7vWYkpRxZJjkyqDxELFwASK8tfP8hGUU9LK75aYtdtnshevZELoXKF4bettRHFVfxECxCfBfcioLZs"
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
