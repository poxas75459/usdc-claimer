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
    "39gTJRcFnqf6fgtBwzBQjsF9XvuJf7AABcw6sFffNfTvx4QZSaTxPeoLUwJqfxFKcyx3tAZX7NaDX4V7DnYi3ycQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LMbZLVii26Yu4PUXYDozWzyTKepvYiyo4fMTLp5HkLEbh1jHR3JBF3b88TY77n5q4YyuKUsipbfoWA6kQUiWo8r",
  "key1": "qfkAS82jQ2zFmKvziDnRyHbxVNv8UnaaAd6bpdCny1R5iexYgQYAgwxRpHYEbf5NQGnkhGiT1DqFmJEU1dTgEmp",
  "key2": "3cDqkG5QXoaTZSep6dXexMHe4MA9SjuW7HExcRjw7efwxffxdNNqyVagKP565pWBnKWZw7ManfodTaj6ezyfnGHo",
  "key3": "5zPc4nL9Hi44uzfxEWLwFzrhJz1LsZL6Vfo94UT6zQww48i5W9Fn7mrWCBSrC4w7xcvySBHwnP9uQFfurHd92QV8",
  "key4": "2AJEhXvnponKn2H8dcoL2phz7xsNiNyxC84d3dq9j5n3ZYmpyXCUbjC2FWnteUgCKXR8sYUaqHRMhMrZYPJCSdD7",
  "key5": "59Cf9PA6vviumruK2n54yQ1apwi4oAgtHH2E7SaB6ZP52faefsZerK2TU8vV2L93GqahRvyJ314XMTuSoskuBftA",
  "key6": "5xN4RVhGMXqVwLXrJuVYsfUkH3DQX7fdnB1wwvKBRSBgkiGReaQKkUb3BTR4YcVkcbyA7QW7SCbK9S9aizPrW3LG",
  "key7": "49gEyuA5gGtwvrokNsr1tuRAgKrRdcAJ58ZMrmBXH2X1buyZrCFGyvn8gzyfrr4fKW8mtFYShLQAsYZHcLBh1WLe",
  "key8": "2ffn9fEFjDGeCwdwd29nAh89ZSb4HfWoYfNSG1GNP9R12xd1cyJ2ZL5zUNz6K3tLkadPf1SJ9CspAQaYtkkU51cU",
  "key9": "5JKZjmaZBAvkN3i6nnpnktwhwyspvPZVywMCfYME2vgs6ZUsF4XoY8q9ndmof8hK54Q81cq1Xf8FRsaGVEPWR9ua",
  "key10": "4USdcg5zteLuDFMbwXQJAoRkbwPJFMptAtuFEF33RZpZNRz5QLjgD1eW1g5nBn2Ujb7Re4a95DMTfuhau1UKEick",
  "key11": "3yXDgbyWFEyQynFGrDz2eguiLNcNZmuSdPt83FdzqNhx2qKb8tvCGSRmtU8cYPX7xh8JwqP2SAFDNdHrS4PnDove",
  "key12": "4Azxjc4M4oa7UUnkJ1VZuSvghTpzZYP3sjnqcvrUWaSo5D3TPp4QAJE71nFoJngXgrtHMyECvnxPYkMWaR3Ew5fk",
  "key13": "5T62M3gdvGzguRGiPL3y8uH4Z2xLQV5Q8pwYm1y2ZNjNVT44Vb7u1TPBQuovQ48wz6LWoGbjQa2SFjVxbbRpk2Et",
  "key14": "2B3gUiVfuD8mWFfergJCyNXyqjuJN2GY8PpvCXW24KfWMPkKad6veADtewFnAkUh5HM7u64obK5oha8rsHqut9mo",
  "key15": "5YvUgZVWrQ1EqiLnb3Jkete1pjJsguBLoabfyHytKHW8iUzgJnAhDxTRPkSp24gDnwwdxVPVXtcEgr5pwMs89or1",
  "key16": "29yNnpPXteyhoWg65geSfUJi4MkYt97KPxrP912nbZ1dseGmMZUxPAfdmiC2peFoTqBsv6J8urgR9aA4wNWfxtYR",
  "key17": "48CmEGuVUs5f4aKWghocSsQLBCMDdb8dzuaeepgGie5g6FH7SWzjqre2tZwJDKUU2wXizQPDipEZjbnWS9erVCkG",
  "key18": "4t6DkXehrpzbo5g9UXecKFTFSTF1giB4mJuDzezeXSb8Z4jtTKeZoWdsQLMpquRwVMA71g9UprBwsZ6tSPumc4GX",
  "key19": "22zgzXMcTR5XWVQ846K78H1gpdn19NA8pp5RB9j8Kk8qMGEYaYcu7Xut3hLLGciR3qrCiiauPGmitME4pE45pKDo",
  "key20": "3ZdHPbmLtdjF9JozJX2KcbbQyENhC7C9p7aCtptUZyrhH991jWwMsj8EtkfcBwcJXd8mMoyPwB1EoruR1ESNRUPs",
  "key21": "4cnFFh2QQMqi2JpXUsypM8pCX49LL6spFHrLDPHx2Yp2FTcSfdZZY7cvKgBZ11TWTpqMrPSSmvkp1iAsKU8fwpdM",
  "key22": "575KaBsz1eUHgvCs3mMFnn2Te5ctx35CMQHozLfEnmKFVfArbHr1FakFyYMdiKg896tGvT6ZM3WVV3TdF5GGY1aY",
  "key23": "2aWTKinv6KXsat4NrM6zaTBmszNznEda48HbQDRBcor2JbhsDC7xHeV8Yeb2xgineYeF1NNT7dGPcQegA1LkAgrs",
  "key24": "5QLxswDPFG5cAngYHcBsT7mNoZhXMU45YagZ4Ts8NqEKR3NubcgoAmN5tv3fxN7ycwEtXeseQcMw29Wtjm6uqEbX",
  "key25": "25qyE6fUdHzSium9JHpdxAQfpp9cF3ZKDKVyf9CZWW9g3auviB3nS6nSGp47fHUM14uDovbHEVnsgpB2aLQVnaM8",
  "key26": "55Xu5bqbnQn9wggJTjdgheUN2LXZNVH1X873edDzer891AugMMRbvRbEc6bmV7E7RaMyS6URtSYfgkgVXyfmboZw",
  "key27": "577UpeUwoavifkEXCyVyrQpGmWzfHnJUwynDP6HMKhHK7awqWvTMXXEzw3AJe7GwSR75AdJuULwJnvnaDkbozCMU",
  "key28": "5bJbBkTWVbezKgN5weMdfkQTrQb7Y2tJM53Co4QXFK9R1quwYuS6HSsoQpf9TvVME3hU9Z1qrW9aNvZnc3qgvqSx",
  "key29": "23sHFxNYbfSZJtgmL7b7vQqNQ6UESSpuyUAAcMjLg8J3PL18Jh6vfzcykANrr2u8pGGDramugpJXf24PUiLQD8y5",
  "key30": "4vUYT5VcvptnkngRogytABh21eFKhaX8A7bUchxAkPa928QZTmC6GYaxTtr97cyLLDuzEPhEmvvQ7nQ2ZV7qNdEc",
  "key31": "5TX8MyHBfKuRma7EJfdwp394pEcPNLH7VZFG3n8T72YDK4Y6so79gUsAsjNeV7p4yWrezokycU5F2c63Yz8GK6WM",
  "key32": "5D5sN7oLkA9jMxbCMMbhXumhz8kJpX5FStuc75xUmF2HrXojpGWNaViHe9eQnNcjyvbH32CutpQ5gupQTknBVgjD",
  "key33": "4bgHHMkC9sKC42s5soN2oFJu243jfoRD5ueig4LjRku8M6KQyZHNL4ypbnDB51YPSxYyG362qw8k6oidb2kAv6BL",
  "key34": "4TDybSMQPLfKXajUUTrLMKrHHiUMmjPN5K3EgzFsPhQsmwKwXgbqupx7G7VUFAh4YMJ1o63ZqK19pokcKXH7ZJZd",
  "key35": "3P44gd3tMyaFLExGE1Hn9vVPNAQWT1Ti1M6UdCAk3GcLuEArMhd9jytqZRbCt2Zrk3tpwjdeSFtdN6oBEaRv1haC",
  "key36": "4hCnANFQWdSen9GRk5CWqE7woTzKmG9ZZG5Xvv4vFfLBPZkLedMQCYNLttpM3bMG1FBqrm99jbG9Tk8B8kcKTyZF",
  "key37": "2Sq3S6PdfFmxQv2hXfGNUSzoyzmbiDZJmmrSWKNDt4Lws7eXv4qRELj66nEMwKGooGecxwmmatgFwbEABKu8rLte",
  "key38": "5NZ8H5seUN3bWFP1uYMaDXAdoqYSdiPCP7iyQyW4u5wAmZv4cDuGEFS5otz158ePbohpx8q5Kpho5zLBNEaXVskB",
  "key39": "bbSbYH5ycfK8rzoJHHq4z6rhCmF3k2V75JaKtt33JWEk5xzGqaJgu9ztwGUukLvDSt9cMVmrcAZYj5FymLgj4K6",
  "key40": "4qUR1erAMXr1DtHcpizSpzyzhapLKpvkNNs6FAp9jaz9bMmRjXt9c2Z8sMhVhRLkHnbVYWAhvWnxznqcuhNzXyz",
  "key41": "dSp3SKWkynLrckWoTUqR65fABLchwY9df4sKFn2xKk57sQusZtqrEmDSAk13n4JBdB7MAcrGC19LF4BJSWNHXQs",
  "key42": "2nQViCbwXi9beTB6F8UowP85FT61D3xJqGxBCwaHDEJKADbb7PPXGKrsuKW5VCnqJHBwc6oLPvzV6vDT83PSdWk",
  "key43": "5oUmQDjM1CWAZsozZq72sf9DVcp1LdFmsbohEK3izNPuqixAVLHnHyZyHwce5HZWwjXJM5BLekru5GNTALwdfXMZ",
  "key44": "XPBp3q5R4HxE8FMfs7bUvdW5ZW6cFen4Dz8d33J2wmrKj6M8oR8LH73Hzdfum9CpAaQSCYQfu7iadyftzzApWe8",
  "key45": "2SXCw2ETLZhbDjoTLSzF2nc2tvR22UBuUtu7uLXhX6GjstPE4Cwv56t6ZesX5gAt7d8oDkXRUZKCNKeuRoXHueUy",
  "key46": "4jSSJ5bgxFdzvj4QBPDYGVKBFSxTCG8aKr4kL1wwyvPnuvahi9zJdMJ1uQ5utZXZ52cR6DTY41zMrcNAv3JHiptq",
  "key47": "yGrS4QzNRZzA4F87sgyDhQXbVQbGS6yjyEAssQC4JR1M2ycjz9mrQY1Pin7Te46HhJRsyKrnXhG8gk16HEadm7C",
  "key48": "4gfG7BW2fjWrwhJ8wcUpik9fDNZfCVRHSvkgFH6q5vyDid6Y4KBvqL4edTaRa2PKm3mc11kE1FS8oRTDEmJLDVWq",
  "key49": "3mddoz5bHRMdVjbqW7RYSWqmahiVBFiEaFJv1ewkbKR7JV49hEa2zcic3yXqppsM1J7JWG5ccKkAmfiUXPGo9soF"
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
