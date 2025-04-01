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
    "wMG4HWRmogsKnSsCtwA2n2Wo7biWVnFi1uXqXGESb2H6uAx8tMB8oPyA1SdDo84zL5cwTSE34JSaFAtZJbUecD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aiNYMwKJgLowYD8GiFBDozQ48hGVZRvzyRgQf3siNvREUHGzur357FWnEjauBzXUrFizH2ww6X4QH3fRRm2Sgh1",
  "key1": "46k6DJRzc5vfpeiqHTYS9PtZXcJphnZvsH92ZtV14PREWCBF9WibofWUmhB3KDrHpyQh1wbcv6KRYqhbZzmjgQ81",
  "key2": "43JMbsAgrqJqcdhw9HK2N81bHkYMqz3bHQFexUoS9eUMsbGZwB3w57BUD34HcT7bj65y1h83ccExCFgUd2AjS12W",
  "key3": "4k1r1hyd3QkDrtQhB6tSV9aXi4oRQYSAuJDJpFqrN5N7dooHHn4dSmhsfXkNE1dR7yni8Yt3F6oUCGn3en3A5NyH",
  "key4": "3C4ToAAZAVUYZuc1kcUp8b3nrci2wc3PLWRet2yZsjVELP7JwDhyusHWoRCWQiAEL58zy3ykpGSa8E36QSDu5j1V",
  "key5": "d2dSqxFn7TsBxuAjMG7qHvFgA8DHt1jVvhs7cLjVTU1Kipav7796EFzgWSSvcdQ48W2rcK7oVnvsxHeZP14CdUW",
  "key6": "3bHLD9NfFKunX6GJPVzH56KFKbtHxpGCwWVs397up3JwrxyZM7qSo83uCnUJFmasKFEBFKuq4qpQW9pS4tSdhjt7",
  "key7": "5HCdeDJ3VQGrvakTFMo7tDDB5f4LT1oPVi56benWZNfjQKe8Q8cm8PKRvn6s7NrPQghg1VC9ik58tTygXRvGdepG",
  "key8": "5wPnTwbgQk5bjE8kBQCP8gV8FwbPrCwyLBwaB7BTdVX6X7d3ahWVckrX3MhMuZwDZ1v7PBiLKpuk2LU781eytFyo",
  "key9": "2FZSmmWBM11w24r6vrV1Y9qkrvATuioY995a8NAQLjKVM5P5wDJPqnXEXY6ZJGR1dbgPk3uLXxz2wnWYbAJj2oQt",
  "key10": "5pPCZ4TSTfHB8v78aNcojgefQ6xUtGd7dar2og6vVrmxrwdWNmUiqCGf1QrepPNHyGHTnhJtNqypNwCQFz1YPN1v",
  "key11": "y29LJXg3P6zw3BDi7wA5Cp1Ej1gYSR61NCmS8dW8AymzR2Yah61Ewcdxss7tHkYQaQkAWxx3dqWn8naynvPwsLZ",
  "key12": "5rSa7RYgeestndmZ748aZ8X5frkwQxarvBqF9BUBDkQkXrM14AHWSfknjFxeKxC1dEJvp2LuL6jkfTsCUmR9HcTE",
  "key13": "3iLE6NTigQAqjE34gpPBF1JGBJR3Joh3p4UE3GpMdCXxxkKP2A3e91B2B5pXjWAYpu3iPDfFwKxLmc5sYL2VnjTX",
  "key14": "qXWNA43eeA9bKAMMBPsoLGaJbFSnvMxM19UJ6jt9Uj8wjHigNehKjEvkPKgg5fAyhtdKTJLy9G2zgXgiM1bYV1c",
  "key15": "4BzjzRrVHyGXxeA6HUtcV8da3sMbrizndMfwWhTz5TfVYyCWERGnhijnhNcp1uu2aAkwcnKqcu36nyhSW1BYkgNT",
  "key16": "4ghVdT6hTWuvjH5xXZBzcZdBmNuiXrjEd8ALyMkPTDAAUMkpkZUmaCC47iXjPedqgtNZjE6ixPr7FL9GAhJYGbpr",
  "key17": "4RgDVqyTEYdsx8iFUnkoHJUaj6GdXCtixYoyZFDZ7uydCGvFUWuxwbpcxHToku8fztSGYhKgHcFcx52p7R3jjUBU",
  "key18": "Z8W1eJngCDGEgGFeUG32wtvaAC2RvXvmvQFFGAxorFdenrccgh2MsRjXfZgjDGoj6rRbDNcea3QnpDjz9tZcMai",
  "key19": "2vzGjAE6AoqgPgZ9QS2PowBoi7qagKY3Q6WkpobVeGhg3gdTGw8R3oH9uMty7d11Q4ky39RjJTWYJBAxzF8918UW",
  "key20": "5xiGBHfYwhyyTyTb4owG35KhavPREXs5StWqYxAjLt4MDNyjucXxWPg7wPnEMY3j9kBDqzQihWbxQ5qJU86jjJgn",
  "key21": "3tvW2wu7c94CLaUfVR7Z3tqMsZ9XQU92nsmsQKoXNmtZtXodrnSBdgMCnMJ9dxPtdDXcz3LLgyE31LvhJtFqMYmf",
  "key22": "2UC3oNJ9gQGr98xMzW8T8abqvPNFyCqiW212aSzF8b8hf4gYT7byajqcRYzPyYC5TVmuAow179t6oEyoRitJw2V4",
  "key23": "3Le7Uc8S4sBQUk6TJ2TXF3wERYkRRFkY9uVWd9pHF1BxE9S1pdmr1qRS87K3ibbzzNevaitdjtYU1vXJTXASZZi6",
  "key24": "2DxvKArAw8TowNUfHPh9GLhHiHczkM4uL4LRRRHbHZap4hWFniyXskNgEdTkBtkH1bdzoFcbMVEjedBKjcVbBDiz",
  "key25": "2HnkYtvXv3XRWWYZoEuZY88cXqD6rZyHwTyLaWiAdPrGYQsCMXaN1RpZg6qMv3NAVme66cHFyAdaevznpXfUMKR9",
  "key26": "zo8unQi3Pw5QraPpVjpG3b6xBA4B1cHtiXsLD3464WqQKfJZ7HiR714v9xcXZThoG7rRg2WdCH8Xh5sokL1twZZ",
  "key27": "5j8ucwto64sBQ5tcjGsFzWLDukfKNbBrfizzaNn57XfcrmeXYixTQ9tsoEZmZenc8b64LJpdUP7Whv5oLdQtEMiy",
  "key28": "5vfaryc1LMSd4R2MeKnbyG6UXtEgYBuA8FA77tw6iQQyVxTgxeoKeBAsvcj3GtuMZcE6eAgCU7FgtfkP9sXzkSAe",
  "key29": "3afhAJ2FQUKrpZ5d2zVvo7jpC7RhJJPiah7cueBpjZ2YoRB9cZzoRJdRSWRoAHyDZbELTcGuqcPhrpWwoh85QxK9",
  "key30": "k2tw2D5G6oQhKfZBkd6TzCEiH7fypKGg9v8tGnqMnQ5Ahp8Ns5NjqAZV961QH1wJJ7STwJ99FrkHvE2855EBBWL",
  "key31": "61VQP4bUV5xENZdifpzdSPiTjRnoq2EQCqUHNkkSkbgnVwAvjLnh3Fd3M5k5pTqAyftSdXqypFe5L2NU7uP67moz",
  "key32": "25WMyaUhS8yVykVVYWwiKKgUm44WhEWtRqibQs2uTj16V7dbkChea3UmMizNYChfAcwULPh18eWKYxM63ePFhfKM",
  "key33": "5kMeGPoTAQ9AKv941LgK9pZAQppbyGtCCQWj9xa7aTHxeCK2r6G6tBaC4owmKCMcR2tt95wNKxPHemJ5iZwyE3sF",
  "key34": "67nLDWnSCpv7SLXR724hrcTRBiXRdBwfCGsKDfikjXHYfjWo3eRVRBnVTkUqAsUbbVpZJftfuE6yYiE17zdTb99t",
  "key35": "5x84YRCvENp6x4m8PiMnJMd6MMRhL6jwEtBWwS7gsvvXVGEPzWNJuq62XbYvrmr4mGQfFYWASJ1Qh5fvdPYgKoWi",
  "key36": "4DwsPNY6mSitqZgjVUMkmkyXnAxTEiFBnQ9twQdfy6owy6Rz5RKVcZ7Y8RwHSuamRG62MPwKiGyGYqhdhjbzsZme",
  "key37": "49tgNXxvnGppfF6tj8AXarE4rq9uB2kNPsR3PNJMa5VjUP46vugq3jqnybduxzCBnLf5XFwFqBE4yifKYPsRZUp3",
  "key38": "2ur3JXR8kKLkDBLhRNUPu5DrsFSc8jLZRkwTsUVQfdKZL72cHZRKJGNiH3nq6SjEgeEZwTNHh21yceFk4TcTkQUo",
  "key39": "3jigmfLcWKQXPAM5ezGJ2NoDfhohaSjmuMVKaX81tUNhpEdViaz5pojbr31a6JPqeoisn3x67nDLcGVjxxRKsCRX",
  "key40": "2W8J7AbYkd5gfXzGwb9VY6DdpckCcGaWMQhFUsCMWw7NSi17wVp2MiUHsWtnyYDhLYgGzXzQf7D8cMyntb4Sever",
  "key41": "49kMdsmegxV97PAmibChHNWurk7LqZ3mLrtwjqqw2PqoLifBwgZaHw8DorjSY2gbrYc3AYKASexWF3YzyxpNZumN",
  "key42": "3o2zkeaHHP2cXrc96vVAvzAEczM8NavDroPV22MyNWRLEy5E8DtfgaAA5aasieEzSu2wQ3pWLem2qTYT9BGunqz7",
  "key43": "3F2z7RsbU8dKEYMgtKxftfXg8gYYyVFfLWaQXNJT9tcsVV41ovnsjsJNdHoSZ6s1yL2Bmjq63X6zebYtD8GTRBdJ",
  "key44": "2DYhTH2BRkE2Xgn4UZURNEg3kz7vEdXYJ8diRiwxLYVHx6bvhwoknWdkaSkLFJqqtX3xYJVLVuJNgkTAmzDmrJ3B",
  "key45": "2RLMMPRcNdKye1TdDyDAZpbrUoBJY66XdZwa4rg2VJT7P2QguNSCHZrtNmBQLQU9awvqguhgBbgPKiPDDUpeGffc",
  "key46": "59VhdytbzFG3d3TwSt1K5WTTBw79KYTjkRyYMbLB9FbF3479bAnnDdxW8FSxUpVERYMxi8PiBFp1RjXf3MYVpvp2",
  "key47": "5KiKN1Rmam9LgmfHrztGYBfLmBdHdAuCr5Xy7mWHpnDiwYoEdTornsBdiKhdkMNCYcfPh3RPZbbFD17sqvRzy1jb",
  "key48": "4S5PHCJhc6diM74o1YD13SaX6MVHQdEQWGW4ZQatFhnHiCLffyTx9jkGvmfucBFh61PiXRVw3WAcrSSTF9F22Hk8"
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
