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
    "4RSbrzXU1xQbrRHxhC8PyaxSsoV4sBG9ouv4MBPfL2mVQMbM27NnGfsaNbCBSBK1GCYpQHjo2xYWvKr45NhvsugC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24ksgFSSgne9i3pKRDpxp8YDDt7YzycBroXE3QZSqUm6pLAczdD9jjsE5HzNqKjHK9dkH52ncTMH2tchJgF5ejDN",
  "key1": "MBvoT6vogP14sFDPaJbYbi6WAKjPiwsnTdPoKsuRVEcKvwp9kYC9i8Q1kwb51PzsSA665tQZQhMUE92Ypxs3iiW",
  "key2": "4PunyjemPnKrgPFXv9ihtPuXssLHbtcAYgi8HXke8tazjjdYgUrBdJph6BfS7BD9k1GuJStMyvxL3211SqQEdyDJ",
  "key3": "52uakzaRxggc7jJsMDKQScgY3uyWdBNfErZeqhVv1wd13M85izC13ZmhVgyf9ccQfVuD4cyJUKesKodbDA97cywD",
  "key4": "aJ5TYgG7rw6ioKzfGhvWENWn34kc3YBNCEAMviTCZMRQ77KdZTDbVk5ERwhN8xPxpqvHNuAtZVR8ASeY5rgEzaK",
  "key5": "dyWE7VvcAR7mvxRiBpaq7EW8FwovQKahLfBSPVDxBsdP49EzdtJcGyBcHkHCie1j4uMBVpiTtRDGFvaFV3Z2xcm",
  "key6": "52YHB8MPu3mAvFwCTrQz3Ft1esJ9RK61HWKzyEeQJqqjjBFk57RVnnfTzsEjNV9pqz8YNSZJKggoDfpPJJyJv9p2",
  "key7": "4XYhR5PmG2wM2L5s6xSim41e8YtrQgr5ygR2EwZSRAzxZWJxiNnohf3vnwjnhW7w793ejVDfknWzTqfr5TpFQqLZ",
  "key8": "58wMYEscP8GkEhr2mQ2QzJPS6XJ7cu7FLad1Wext6SxVCNZsTu74pkL6PSb5591hLyRzB8gq4C6ZV6LpzJnvUoiY",
  "key9": "4zBtMt3SkKGbyR8SjAL7oQ8Xxqf46tPzp4EimUfkhrxDuRc5JyqhvwvTX7XYi7zLwZ3tu1iz9k45EwDqDhXXQS1t",
  "key10": "2BLwgjgdUQ1qtj2NFkGn6xocs3tStg3z9CTnvDToF5Bcq9pS5vDRUTnT2zGLCMqrrRc6wtBbMY3LeHm4ekawTf2y",
  "key11": "4ncHgCEYrnyYWyAJ6qZhGschHppi4getBdKiaUZUCqu7B7NmJtGtsNmQq33XzmddCthXrs3eZkNvBCscWt6CxTSJ",
  "key12": "2YLNLPCavhAdu34zcfuX4u2trBSQ4cjdKvmAZKgrgXSXWzpFKK1g31QC4G5MtKQk1fkzUPwxxZrV6iDZNrfX5d7P",
  "key13": "67dzZ6UgAgwqBw6q9C1PNqtZBoptY8zUAbNB9PTy91Fyy2NkeboYRhh8MJWPV1rDYqHhc8L2WFriokzxZzseEUNr",
  "key14": "3CbVrpyZqC2TMJv4prwnqqVCQF68P84spvjkLQNXChknVcbRrheWwwBh8VFyvRDv52og4LLLnK72VtFW9QnNukj4",
  "key15": "5SEg6VxPgMV6UJBqZz8ZvB1dCVChdU3rgeTAiNCc8kKm7fK3bfJ2PBQiaJQV3i4Si9b27di8uqHJ8mLNUKU78W3G",
  "key16": "2h1fTeoud3iTiPUz44Pah96VKbza5nH3DymVHPYqFiLN7uorQFEsEivMe8Z5bNyqgjgRYeznDaD58GQcEX5EQ8hF",
  "key17": "5WPfH8ojo3SkqL64CD17sjpvfDXrj4ZmyrCK94AW7wbtrYBEAxSEvrQhKynm6phTALMagerFrNuYYHXrmBnjTJVJ",
  "key18": "3uqr6HHw7fCLSDYZunFMpfZChxBnXpid6ZXUr8ANoWKyJUm4FTBxsJccnGksqn5oKkTFZpv2t1MnwecYJJsSMt8e",
  "key19": "G2D7aCs6CUQW27bbUnKTeaVfjb5BEZrLbrMMj495BfxYFoLdfMmyZKj14YERmNdwnFMJzK12wgTNjbyj8vdb5ES",
  "key20": "3bu1q7adTvBiAwD7DAWq4yZrVYggzyNwrsqfdE4pKAa2a5JoQKaB7N9ACgP5kxr2HmzGPPggGDc9CtRgZddph674",
  "key21": "2qcti72uxPPLxZRsgPML5tDccQ5iQP5PcQtNDVVMwYbg1vzvagkQaohZW9SgagosnyFGYiHNUgyi7GfFf2yJzHKG",
  "key22": "61KCsh7gV2zXbvAu6JsdSj831Cu1cHpWFtNuD2ckLiMX7pHf66A29Nuc6WApCs6F6hMtZk94rss81jfNpGLH6d1",
  "key23": "vUPiKer9Spw2BNU6eVxYHkU3ipbUWBHRAdhg1SYb3djXVJKL1v2oCnN34jEyjGsDK75XRyJxFTy3BG8H5TQK59T",
  "key24": "jMa9rLtT5PVSzcWxnA1EFtw7Uzjw7vdZyUAEvgpRQceT2EphzBTFo4ScxxrMdfa8h6tUus1Xuinfhp4iSrCXFE3",
  "key25": "45fPVKPBr33smnu3CwTmdD2QkypwAq18378yUGu3znSdMNTFic5eUKKthfsFYYbRSX1K5ACKS4bn3oL63jdYh5Cy",
  "key26": "5Ydgn7iKT3USbwAUJkDx5BPWBtmZvwqdS2FoytfTJ8zVpWtkDwLuRJMWM1H4c41hxwiWW2LSptdqFT6dJDyDY5eu",
  "key27": "2bJ2JiUdubaAkuPXzyuxJkpfWDXEp6gSR3yEDhzHd5FpU9xh2WNQvio5iBrR9Uv9NHVGjxaiE68F7s3cFhikiWi7",
  "key28": "4MjcfusmDK51nQKwCCNt27jopZVmESZTEAxANbjFY45SD7c6GW4e4wvFqYik5ysAANi4jT2TK7FdWJ4zHM6WuGyu",
  "key29": "4WeCa3Pne2sGpYatysAYWBWs8uJcNirFi1gJv9bw7JuWsYk59sjZs1ZFHtMaSJxDLGdSQD6bwBHKDMURgS3t7jfz",
  "key30": "4fCKrjRSnuRXbgS14W41oTLurNGYDd4cqtzCNKdzBrW8eNyPa5piuKnycMEBy6ZKF5PeM4jvjVjkkdn6veCJDgo8",
  "key31": "r1nqePacKCPPTsHLvxq6PkQV82iUTZJXw6ydF7DMrMwHA7ZaKYS8jj3pVPJv22AjaXXB8hVRLLTaBn3Pw1hCK1H",
  "key32": "4XdmvLXYny4F6iDmcYp9heKRhU5QQ9fuCvx2KSAF16ArBcDQYkGEn1ccGLqs8HYYU9hbY2zDyWBFoTFoNBRb5tQ6",
  "key33": "2FhoLX1yhwkaCfdeBqf8RPRD2bjh4TMKozjXvhkDeXQCjrRykvwRA4wh9R7UND6Ax1a42SFRy2LepftynzsTvgu7"
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
