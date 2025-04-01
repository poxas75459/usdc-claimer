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
    "295UvSJwKRiyCTfbMCRRSKZmhjbBg9StsxcdYiuWWvZzxDhHApHB5cGVrT6xyJVdqpisQaUnoPsby8PqRgD1b6Ft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "293usqd4z3aXi1shRYUYBwCt3ZutvdXJJkFAKiXneuHqxgFUv7DVFofdmddBjbXuwJdeKz3fWnxH1KF2GkCrjB1S",
  "key1": "KRnWx2J9sHTj1FjiBwccBsLVvndvzL4jDEYDrPCdANXgsCSR4D1wezXJMKpz9uqTqnegfuKeuJU2gjFki7HCQJ7",
  "key2": "2G6Pa4HLho1Rq9LbCTbFBEz89ZwWeWANdStsVsbZwn2f5QLAN3e7KXDwqbri8kNpaQKHKa5KyMG2JsvCQyETH46r",
  "key3": "5Ag59jGzWRrpgonxwEBSg4Z6xCKWLqMMuCwaCReufoPFj6AhomAAede9FWvNP1njqx3jRt1pm5avg8zD6zmwxKX9",
  "key4": "2paxQ4YsueeNKjEwJDoq1hH1NFp8T62WRZtLdv3zfhSud7HamKpc7i4mURTpVwigg5w1oYchRQ9iCkNSYnGdk88x",
  "key5": "4jC6ZzbSymNhcZvUzctaMqRdWNUAPCwPXXeTeVVo4KZuisbuRvG5UtGpDCcZwaTdY3psUdLNALGja3JFaffn6pcq",
  "key6": "3gKWFSgnA3YntXi2kPPsn924AYdsPB9W8ANxcSNjijtgXX7aoVUbWpeAxtrPwFFycG4h67cUqPhpLqTCxy9yaBkA",
  "key7": "3wNyuJeeWHuvjWpg8T7iXKMkRA2WUMjPdYqB7Vx9vbfTTCgNjAFrzbX7zsWkJ11s6nzB1tvUcz6rgdkuPHmFx9mf",
  "key8": "7htbowdbmc9nswQxX3uqxJ1DWsZqrGQmDZ4rjJWTBtW7MeCgt8SLgWXpf3rh19HNBm6z1Zo3eaSps8f8PoxfPT3",
  "key9": "4LETHHFnPzrha4ZcXrnzBw8iF9rsFAor24iLApBRf8y8eeL8YHKsYnGTns9FGWV72yyhpCNnjsyreTcXGwZXLsSu",
  "key10": "36yJCv8aC4JjoPywmBCkEcusyaY2WUnHeM9ExrYnHhKq26r7PUraQFc2qU5znzDzBwiYD4yEeLHaN4YCwTSdr1HS",
  "key11": "2bJrM3KGKN41HaW6ZBnWgTmsVxefuKnnzKkht8AXMYD8xJeR1gfnxubPTHXTcWt4hjrUHMtKSMJaE5SSYm49xfgR",
  "key12": "4kvEVnN2ffvXt1GS9ehmbov5vmNEQXY8YJuKyAdAxvzWoAmnm95ymoPJDHk12C3TNypiyNeZu5RB8k3b9V7grBFw",
  "key13": "59Y1rAfExgNJ5mHNk7XmZAmdVDRByw7CQEshphDx9pNg23rTWjMdWdTvVhtkoLU5uPdswKuXXoxYFxLhGmBM987m",
  "key14": "2RzjavK3fHNwVjtj3B4vCbzvvDr2d1Wvpb5qmpU1MRvioVJfGmckb2TmxBZ913XDJ9PvhUyUXe2QdMkY7DPhxxUe",
  "key15": "ux1vVssLXtqkYJrtSrMgnzLCt9Sskrj1vs5tk4AxaHVjnC2AWVdnCr82LeT5G54aFgDJysT36Pxn21C949GzbDi",
  "key16": "okoCX6oMRPWp9dca7Ld5fdbhhjuAC795ejCUPpCcYjYZD5JNGrYT7rUJkKt3CtrcFMi5fngHJfVvDZbBMyYTKxf",
  "key17": "4CGPETsTnyoct4TpRzEtw8ewufPgnHMzCxjEvbgPKctYCQK8t9AizDg1Vv8MjK78y76h985y9iRi37WjDd7gz7nw",
  "key18": "3s7Wwv3F86Gr24MfpxDSiSjw2rri4N56bbGfacAZkGoJsdUT7K3YwJFUEeoUvARMF5AGaForY9oLFEYSoMzNQduB",
  "key19": "5275ZeBCRjQH5h6nVKM8LiX7TWRfcxrVvkmsXCQL1XUWsUvdGF6iy1EeH2AkSpC1vqqGZnd5Xu5gucjfsvqMRV9o",
  "key20": "2HW1zwCdR6dkn6JdiZZMbbwim5t1AdmTYzo4qsJXZGDhKSU6f1aq5oFpbRTV6wUearmRJKHXzznmZDG2Ah1XoJ8n",
  "key21": "5LBXom4RZHnVHnjX4xf8t4Zx8tPRBsAZM4dGw2jHGjE4ctyYUvV3xhp6m94zcEK5juLrhhMoyvgoEwgJtzGU6Mwq",
  "key22": "aa1S7zi1sjLP1yX44V7EJLCSWXmUERGTxXnm8mFjzjCNQtqv4z5ioBfQ7dhAMrv9nUqZZDmXjUVJY1hip4u9vhY",
  "key23": "YXrjgDZMaPsEMqWindUqutLKybb8eCHMTbmZdEp6g7iZ2Qx3RT2A97xLpK83tNZpyV8zFSoFkUkfje8dSucCQoX",
  "key24": "3QeVLtyUpvKTe8odjypDi4t7XdnKbfDqETk2rPMNG67TYv81Pdqnb76ZDKVEMuXXdDdmQGGaSsW9YysZYkdnTTuA",
  "key25": "3stkqm8eFpbdwCx7bUF5qyHapGMKWcShnG6YQ2QTuCJsuFzDbBy8etfZKYsw3MYznEdswBofyuR4QvSJ3twibKNV",
  "key26": "5Fu5ZQaznxs3zye9uvyai4bRH9nsfNHNtwMytUD1XiT3R4Baoa57Qf1qkKp133bbvX4EdWGU9ERLXtR6QjERkU2t",
  "key27": "3BH1zbcVF6HuRFo6mtdXiudf7bmj6vxwK3WPDHpWX6yhx4yY47Tryk8rEMPZqVPJmKmqvZhp4UF9oC1YGb1fFofD",
  "key28": "3kNP3L3mfTqkSQ5MdarLd3ZaE1LjrMecFMAJDQophvaX8ijDDg2JSTHKA3rTzLxSF4XGCb3tKiX5nytT7tD5i2ww",
  "key29": "2EW5FccvThz3ERXkbaDyGByPDmvpv41YP7sr9WcRmpHqxK4QAfUaBYTThYdaRYTmNV2LE9FyTnP3xT9x1ZEunNPo",
  "key30": "2C32KKHq5Jw8AWUDuhPn1cLFaV7B2JDpwZjDPcz8gAq116nuyFJ3UmUfoB6vp3ez9fjAWNxmaJSXbxNS6sFG7ZNb",
  "key31": "2ubP16LQecj3GchHVJhniujQvKisYAAA8vLhjgF2jogHnHRkPZRseGTzVXtA2b1fS2rcZKHTzoohEseKMhxZam2w"
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
