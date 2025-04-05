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
    "61sF74RGCDTdRcXCiWB68mxYd1PdvUNN6cLJf23CTEurAwYEgS5JKSXwoFz3GTWMGEVdBSXh6hCf4R6VoZrAii14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tMBjtVxNWyCgQYWiZz1c9ZsgkG2gWj6A544CaA5Mi1nepBqs3wDhSEv6ugU7GxPgRyJR2Hv183SmTAjvaNVADvU",
  "key1": "2gHvghLZLirQGY3JD9pQPr9Ewi8RWh8ZiPikacxz3HDYit7nvwK2sxLkuRQMq4jaMSJ8X5JHoCoDQiLVcJLkxFtN",
  "key2": "2TKA4s75UyNfSam4ZBpbt5zY6boxoqRWvXJuAUtA7XJgsFnbCSxQF8gbE52zATcsy2xtpttkzhNZkJ6AP4BkgtoV",
  "key3": "cfahm89MvaPBzv7EdbFWUWJCg9c1Sn2KFg1Xk8TWGnsDAJtdoduaKF46GHgdY2SmZ5W7GYHVsmWPhr2Tn8mDuiN",
  "key4": "3Rzo4NBY34AK1rLmPH7MigmuXMDWj3QGEg9ebBFpSbJwhSQBe5uEvuMkPo3U7pggWCkFLinc4cJLJFzNC4phXfn1",
  "key5": "5aBzNHtLBEjnbu1Y8wey7fdsuChhDrShmb599Eg6nNrWT2tQuj7rjEKm7eGqikrurYubfXFiJujJLbj8eLnLES5V",
  "key6": "2AdB6PQJXKj4Px8ybsmpSmmWgiE771rcz2evh6QyRXPLb1PxYSkBLr29JW49nLovha6Jroq8YYVXcVu7GnQiM7Cy",
  "key7": "2zmpSCEC36VDLP3NL1p4gwhd7xrdmZTvgnXxuiMLY8E9TixDujy8y8QLoWVRUjfiQ5Dsg8M7AKBmRNti2kNSYLtY",
  "key8": "XE1Lz84KxJZaoayDGDP8t2twvuYcx8Ze2q6mBwrMfQ7WMV6XBgCsdkisqWzELAwwM9LxCXMng5Tom8NpyYh9cun",
  "key9": "5eZ1S6zokDoZsyMfNu3B8x83y2YtdXRi9g5EwuMFDNgrXwna7MZSxHR3Gtnz4AN8vuYhqHHcCHWAvzVTDPDWRcCK",
  "key10": "2Mx3vWjfCE7eQ2YFvcQQnTABdmyW2TNwXdHrMAmKRsu6fmRbAXW8wCnfXUAYr6A8n9eeeFUTQ35YBoX75A9B7nwW",
  "key11": "1hEQa9wi58QfJqwwcYixHHi2bx3dpiKt9xBVdwSoZhnYmFY6h59GYuoqMTcfkgi23xT81EaNUukMUZAwFpAMxsT",
  "key12": "4t7ZgD2KwE9MQ7c7jjSp1jP9Tjvwo6qeC27kqG54TADaKcd9JzkwmG7EDnUXfUPTVhW87VFRc36oEfFLjawxE2Nm",
  "key13": "4Z34LnoJSv21HZWePqkXF2QLHh3gvZTeCLV6rBE2rHDP6v7ixSzh1GbcrBd7Rmb7VKcrRwbMsetNwxx8GkVv6gm3",
  "key14": "Y1vt1gzpuHxjS1UspqHJJuoCA3Crf9EUjU4kC4P64PSTtCMXH79x6JkYRyeHvbD6Ke2X2SD7PipfErx4knMm3yK",
  "key15": "W4CHkQjyucPpwq4F521281R96P65fH8wh7f9rLUPYCEYAJXV7fixRcxftNos196RSU3NvZMjTA9JxJ1h3eCSJY8",
  "key16": "5P9ZSP48EjJLdBr8BLWhqu2KDjMqRMsika9pRGbzyZ1hxn5mUvLRjRWYHKtRvwEDpdim9UnzLt4QqeczZxZBL8NY",
  "key17": "4Dbgz3AKCBdFhACPXnzGQfhEdU4UjfFLeBz8bwwGFp5seut6RCHovb6CPfjYr45TTJah1qyza2bJ5jefHqw2es9B",
  "key18": "2G1j4Svtr7uV1e67dEtyYj1GnzDRhL65bgAkB3cd1dVo9X5EM7ry1vjw6umTjLRvnX4YZQqGTB4fcQA27ZxNF6xZ",
  "key19": "2L9KEJqs1KPHhjKcDnMpTvSLKxgNaxFSvFpcc9KLhsNLMS2sH515nDhXtUpS7dcrbT2BaSa45jgPPCNDw4tRfhFA",
  "key20": "21z99rzarQmoUqyQyBnZ2y4tXqAnZQy1KFvGrJ7KXNQxiL1gMefGGNvkDxKcT6Ek2dxSd6R8Jodjwr4Lrpn3vaB3",
  "key21": "5JrXngXxUvbYR8pcyGs74N2YJYWZVsVRfu2mWrajeDmPj61unTnaK4gvWKLi1QRQd1BYVfiRX5u7shecfMjRZgYu",
  "key22": "4desBHDtUiHdGmMAob75ZbBXRzqKsTRBXaaoSiZadeYdagfpWnfiSR4rXGsbkSehWgWCwCCaDDeKW9iKiS3yyFBU",
  "key23": "3D4ALK4fc34k5MF8wgGvtfRVZCQoP867ZazL5aCoSEqopEZtU5i5dvBoA1XKfKvGhGLudJTrktafvvpNeB7S5d71",
  "key24": "kKLiEHdcUTSYUkweh55sSNq12Xux6Lk3fXjrWZQUKgozFNHKzaDFUcPF6zxdaVRnAs6ASm6ovqctcgo4WCsQ3Sh",
  "key25": "2uAy9AQP8wdv6r2J2xgiPJ2FrexDAKMqJivMU3KyHiQym659n1kktfvLA3LkNHevT7rdG7CzTfVopD89GQWQ1cHS",
  "key26": "64hwHUAQpuVFcU7JK39w4wxNMZ6XSf8jsmUVhM5yZT7fbMnaYpuCrvP8RsZMSpwJF3rBHhLoUgi1PX8vsCZr3kzm",
  "key27": "kYmeB6FS3FqtyfqgZM2fGuWnPwhcD2u2rDGJaxoNqXBJbsaAGLZXErK9pnudk5mws3BamTXVkhmxZ5P3taA3XFg",
  "key28": "5YDLyhBFpp8pJWZmXuthWob2MCdwdYT7WsmNFxoUBZC5DDqhBE9MkQVCURqGfutHHKA4yBSaPozsgTVNuc5jMHno",
  "key29": "3yMQybo3gpQEXyaE3VaFxNievgu7pwNTvTzHhxxZgWEmuE7w8C4ga1TwVXwidBURbtJMRWdd3Nc3gGDso9fAyv7Z",
  "key30": "2NgfYGUeNYnjd3ob3BnebecvxWPSLdwWvWpEu42idcFEF3QGSwjCkaNFrEgVuDwvax8CQgK2kZugnuBARW9i36Hk",
  "key31": "3wvStAfHhnN3SYebYDD6neqUy5H3ddDuYbSPgAomTg5BxoRWS9ZR5GkRjsBDHeJwi9ATmgZydpCak31vhRi8yGs",
  "key32": "3Zj72r7y16w8ccFhMY2VLEGxQfSYo7gwRWcCZ3fhjLkc7ZAGQqZJv9eBT1cnQfP6zr4Sexrf92BQJ65HrXACLbSE",
  "key33": "2yg1gp4F1WjKcAbYz6ShwncjCym5wW2ihhnGwiememEW1AdB6VqDRPuvA8UmbD5nNJ9rUPZZEHjjXkEmKPVGpWUY",
  "key34": "2FmFuuiEVFkUm8fCryMDL7cawbX8Psyj6XDZvuwSnfjH4VPK1LjdPtiYSdGUfLTCcTYWqM71uvgUqp1HNLdjLbPe",
  "key35": "43oT9QWugRtwef8q8Hh8iVLvtuUez7TaEuWDoSFaYRRgYJ7Ht1tAfZx6xeDdSyihVyrfTtGuqf4iP4Pr4qP7SstE",
  "key36": "3dMqC1NPW4dbFjGK5DPBQUjSCYHv5kPeYvvvZ9J5op2TwDU3jghzsbYzjFYK2gN8KMgHbCbXmNbx2PYzv6dYseyH",
  "key37": "5sjTeNinRgHwiL2qxt3GgvzxcKfrMPZAe79wJfYvSM9J8PJdF1c95r1zFLub8HdfmxkefUSXN3tLnnVt2bMEZy88",
  "key38": "2RvrPLtP5s7KhUoChkQeJjC1Ws9J8VeR9yBogsFqhex2AmJ8Es6bQ4zwHGhPn8rpDvCrinyqjtSteMAfPjTh2zfP",
  "key39": "5sctAYtHWNE2iNRc2Rfmr5KMJGg4M9mktFjnWTnkNN7TKa2BnDeCE12yJMSNuq7hgA7tJVtXrs7KrfSFCHAZsdtT",
  "key40": "3d11inVevQbHrihShPuabiuWjy7oQLh5YqEQpNX6kaGpp9bQEJk4jem7F8REFPhFnU8S2DdY3MDP489WcgqUjCGZ",
  "key41": "3CDH8hn6MMJe5QCGFEm4F3aHqqUAeBKsPgjoTXsVWnQbGZzTCXgtBVC6fjYbNRpvoyQmhEHgXz525t8L8uQ3PF5k",
  "key42": "3SQ8JaxiwwqDkBxwPHwmcYFZjdoo5bZav4wmpUoEhmYgfiZFp4CfbDBJqYktaj5VVffELam1Z558vLMoTETHMJA2",
  "key43": "8JgGW6Hx3PX9msAMtAUaTDhtzJP676wCYCtdf9KbPHVh5GMWCosc3DBwbPnFBekqktT8QAQj4rC1MV2wncB2WWi",
  "key44": "2wCmkU4SB1tpYECxZFJ1rmwi9p4YLNLpm8n1bK9BrivaVAuFKTLrJnZJBb9PBtFwoi2ePNknrBqUu99onacCjnz6",
  "key45": "56TKS68jb5YLa98EvhBAHmQtpE9q7t2vEvsSQ9Y5zGMaCaXxGJWng9ubKUispYXzrFe97GimVvirYcbeCBFP3vKJ",
  "key46": "3Xa5VEsmbfk8qdhAoNQeyNVfiX1AwhRzMCDLVyDdU86mU9PpyZDJ7bsc2BnUPC9YENJ81reL3Vjcym91GYQf2ayj"
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
