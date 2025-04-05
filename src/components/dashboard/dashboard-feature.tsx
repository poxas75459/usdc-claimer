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
    "23Qtxg3Wz1ML2R2Qo6zZZJTMyYcDN7NyNjVTUdFhuRuHT5zTVMEaXvnri5AQEMaxa2eaTHettokFfGt34pdGU1xi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DCrhudXPK9WhE47ot1DUPKMtM4atdn5TqUHi7pm6VgbBrnB5sJTK1RjyLxyumCfEFWmd59bpxLwtZ54j8iJrA5r",
  "key1": "4iXihmDVNxtijnSgkQ5atEJP5LY3gbWJ2FPbAF8FVKP9JM3v7EAME7i3TCq5fqBkGFPyzMFGwW2ZhKEt2GuzH4hF",
  "key2": "2imjXfrG6JfWe7N1hmu5VgGf2gXfi2uDSt2bngqkU56iH32PKnGNnv5zpXNhzbx99yvfB7pZe98FHL6vVWrwvajQ",
  "key3": "ExHNynqc9LJFuMX8L2oGTnAFG2eu6JsoTyVvzhTxkGehNMnhRB91QVAyqEMj4M1iHj9PvY1jgebpqKdytfqwSr1",
  "key4": "3GVB7f6es5pzrmMunmpnqeKMcc6dYLu6QvMQF7ZKmy52RdTrhxyoFrFP7KmnX8R3oqYnUZmLqUYfG23VoLzipysr",
  "key5": "2oc4RJfa341mK3wJvwStk8299JCvm37xko8BVgGZKSpwLsEkT9ENpzhVSXUzXhUBp2TE36TmF9SV9vP6Jg4UpY7g",
  "key6": "419d8ZyyLPj7khFvJntQp2W1brGNhWcZGKXha5dXnCzurxCrYeQk1sX7t5FWTtEaJ4V5YTGVTfCE7xaiUvST1bkM",
  "key7": "5Wp4pjNBK56GHuq43ZUh8nsHkS9CrB342bJjWRj3LKfH7okLyA62bg12RMToFgH3ShZfqhb2FgeSXcGKqAzX9y8L",
  "key8": "5MSQDkishaR64RjhNCbJ67GdWxjBJM9qFcoGrqKUkFxxbuSDg2dU1PicvZcDBQZgd7pn5dpv1fPRUiU9L1Xpsnba",
  "key9": "2MKg5KZNN7pdY5uMBeMZUX69U3BbeTEqE4Q2vvQyYvwmBBumUFZSzwPgp1sWWrMnwva8YnS3qtZjL57cVtK6wRcC",
  "key10": "47tg36fbVfDgRWLYAGzC7DHqSh3C2uuPYy2NnafAzKW196RUPUsKNrVuoc75PxWkHK7d7KF46m5HUdWRoXU7RJHt",
  "key11": "5z6XPEeQPoEb5q1ytaNm8Xsx6JVLLUjJzwJ4BMoPTjtiWpG198dNsQ5FTxUQokYjZzvCfPdfdwJorfeEnHjJ15CR",
  "key12": "z5ANCs1p1AB6v8hQZkn6RwemjH8fiAqYX8mkqrFfGPi49gyE7dbAKApGtJJEtGrH9SezhGNzrqJQ59ZJttZm8ZP",
  "key13": "52vA9kEQ1Fn6L3gharEY1WEvBfx6RXsA7aMnSq9ovwk8W2WvdKxQ39BzTMAeCwMuZPW8czF89mQRzD7yqRgASDk7",
  "key14": "4VccZFAthzVEkUHR8WaqA6QURFgso2m8RjMnGv8t9rJituStrb1xyWAehaYtWmRH92SawpeMJTprpVConPo2VV1Y",
  "key15": "4jbww2XSgfKyJsdjLZXMngyN38BZvSoan5NVtNzn9U3kiA9SNcuxoSMe833DkSMTV15JxtUpkFowaYr5KrK5Ryth",
  "key16": "2JWR1UQzgs5JVw1FovVPKFEWsJ4eCkyf2VMLMr1wWN9Ruidx8m34Qycqdx657st3eX7vDW4gDbEt3RDELw5kK6eL",
  "key17": "3tXCp8VBV3EfGcpVpoWgTQLzMGwiGGUu55eZKeuE3kcynJ9UyZfheDFjmi5dbrSD6vVGkbpDgRTYmaMVhz19qLZF",
  "key18": "2GYWHWwqiiAFF9dtEtJxCbPSvGLdnsimBxoNvqtA2ZyhSNUXd68ZSTAsqsSHMADbJcxf6bPCDTunkTsNnScmj1WS",
  "key19": "a9EXyjsKkr1ukFcaH2qvfvig1N3g6S5WSViA5RvTrh2MkjA661scjWk1NGTR9zqD7ytGmrX7jaZ82Cruso1wuA8",
  "key20": "2srMinPw6NWt18jAJzjuNDVxHgVEpEh6RoEo6nnfrgH9y8sj4ynHNLt5wXiGBe9pNTb3bVXcpz1JjN2EJyAaX7Uv",
  "key21": "2AkkgR9YHxnDMvnwSDvkTfuCw4YzpgdkCw6Q27m1PCnXaW6yB62AAhcCJuTZ1MAsZZJzMyiX7dGHDpBmP7j6FzKH",
  "key22": "2o9raMCiTxYnQ84PQeTKCkWRk9MVyGwZrZwfPpjGa5NJoPNgUcLhPkv2NWwAeqaiQyUGWX2KYj7mzNZT1pJj3qjF",
  "key23": "3YiQUGhK4hsMowGjC9WyrdhhAnpu5uE9eYvqWmyocYdwjJhCt7DkkgHaawPLCbijeXsLNnwA5DrABtApUr2W5krr",
  "key24": "cVCyL9otZDjCyfB3L23ZGXxHiUAHEUQY3V4kD3BueFQg6HG75U85sRSTRdJo1hHpuTyrdooWyFJFxtdpdCLrS4o",
  "key25": "4gLavEyMg5Jra5PcHDjvTYhqGhwAcVGXhhy5v7oGKbTcJBJH7P9424oMDm1csYnKmpGb8W5Vm9vrJc29TT3VKP8s",
  "key26": "Ku22bKu5pu2EUPuVEDxYJ1dD9AT93M7CcVAJomW6HUoGBSW7BSZcLU9PmyFFbdX1N6CFGgwjNKK5ZfBerUMGAmb",
  "key27": "129N3U66d7jLyAfFYBB4F1wbyoRjLtttRgimqRbwPunTQyJx6XnjvAEXcgkLFd3npdUUqstuM8aksWpUSuuZtgLG",
  "key28": "2nFY9TcP2zc2ReEPewft3LFd3DzaCm8Xvj1KgTizUn3dCMbDxD1Lwr9sFTW7iwZNXo7Qm8G2AHy67gD7fuuQMEpv",
  "key29": "5JCfHmJ9ASEqJmfifvzTXfkRcVgTf5xmovr5YKqyCMA8g7qSBKTjgcsDWtLUTgtPi7XUESERUb5f5mQijRo3hXZU",
  "key30": "5bXGGucjpsDZP7EwAAUbjW8jUvCyWptfBfZCcKsinjemCd3iyCMNLfMav7oMEHByq1gF2v8fGtFPE7uSUQdtufVA",
  "key31": "zMQVWHmGn1GyQMA8xUPbnMGQCbsoLmzEw3FACWn2sSrBzAgmipP8TcQViMKiJZcD7PiFTvQRnKkRpikcq4EZ8bD",
  "key32": "4a1J5fRXfr2hfnHstPY49kcLLM7WXawkh4YNfCWez5jNGcDNmkbZBWu824r7VPir1e5BfhEfXSTGD5LxA1B5FqvG",
  "key33": "58MGRtvtCZkfGjhu6kH1Cfj2YGYhxi1UoUbRVgt7f7gkGxEvwJNshgJqqqj5PH9o8EJVtFaAziATtpBkr5VZ98YW",
  "key34": "hHFbMpqYnQL1ufUbHDGYkPvoRoQhNXqkG7oK9D6bFHh6R9JfW9MnkbNjC9nwcb3aUX3DhGfGqYVTNUVGnt9fT1z",
  "key35": "2QH9Wo5Z1YVfQwMvERyiThmmS1Ckk654uc7TqDJydAebeimpjxXSNFiS59ai25eZ4HZkP3gCjadPGYQzjCKaZu8g",
  "key36": "5Ynxrt8Pussess3bvDCiawZMcN4WL8xZnJoGVCS9e24W5VU6i8jSNriHCpeD8AJ1HJwsU22SoJ9XbP4tg2EqJ7QU",
  "key37": "51EUnNgL5CSNKQ49QNE8CAFxednbbLsquRvvvqMdzBE5sj8yjtFLB9Yh4Xn89MUFfU1qf9yibanCgeAyy3mNa93J",
  "key38": "3mePUhNZHG5qqDsvkpAEN17ygyCfnKDmTU4GADSArRRMESD7viVmkWnFkgv9e464HUBmQDHE5RZ3PSwJxZNAKrFz",
  "key39": "4jNpvCy5qv82vSFqV49fv1wdzoZALkmcHDrC68bvaw4bgF94RscXF8fzVDF3muTugQDU96sToyXrRkBJHn2eBg9d",
  "key40": "4AH5WMTrmJiyAVSM5DppnzixT39bWBNmj49rU75P34UNwuFP7dNmC6YcCzQuKN12THmdrWYFEsj43F1wyqKgwGbL",
  "key41": "5B3Q1dbHMeeLx2Tmb6mMFbYaE5J3Q6juaKzWrytQrKztsDEGSDFzisNFnQ7xptJctmnJWKMBr1Q2hWEEkfbT74Cy",
  "key42": "64xFxhJNitxaL4yncPvPcxSc7oDr81HznxsEmhFvHrtPWPh2m9dbf299JVEmozLPDru49GhuMbwP3neh7bccwmSM",
  "key43": "4kUfxbcm2yprW2o92PvEJJ4v64U9udgUVG7YqfFE12mA99A7jsLMe2yvHdNgg3jmm1AkRXAnFrMNaCsusXidTnEP",
  "key44": "5hfUD6ZeLojwsGvs8tnYSqAU6fZjrYPQJfJ933t3XFfscBgqQrdZDv56ZkjjTMyVkMXmdhyZ3McKCZ9wKBLWpEdE",
  "key45": "5igF6hD6tekKd2HJ69CQt4RohLGNNyjC1QbR3q2RrtPrnRT4USZdTXQffxfvtsp8H3GPYAFKLiNbdMPbUe3NGi6f",
  "key46": "47Qg6nw3X374fcrwcmqbiVHqMJLEQePBKNqkuZ2q3kgYj23JDAPpHUrE4vAqwpJ7cEycsHpDskkmzchi52Amy8zi",
  "key47": "yRLK233ZvJ3LAitH6uo4ohMJKDGSvfL8RBN7dYykJvoSRNRDRUcvu9AkiEyu3SheGab5wFPa68fzSvocGMgRMzg",
  "key48": "4Hz1oYgPmaQxA7qwEYnyCxREz3xNfHi3ko6F7Kyz2ePLXwXSN7r5hYo4PrqX6RyUUXh5cMFX1Ee54BVeWddoDFNo"
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
