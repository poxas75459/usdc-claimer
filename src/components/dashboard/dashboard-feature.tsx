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
    "4Jg1JuMUFythgN2dhbfAdfsuYJxTMRG7L5McwcWxPQaWmypjjzbbvJPK86oBivMiFH2WfQpLJcUkmc7yU5YNttBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dofff2pfmGVEcJTK5uYvxTc4rv7j1QmkKJ8NLnVuybgVQXJaqFfwMLjrp3efyn5nbLPx1djmwNxB6omgjkv4muB",
  "key1": "MrNddAx5rjgqUsVfFeYdFVU47MirusKhkux8m4wymVGqwNAw47WDptuEteMcB9ohTXFZFGg7WS2Fz7eC4AqQd73",
  "key2": "b48r7eKd8KQsj7Xny3TyPCvi7xHX4e9dFYpnrs6dViePiTPmrVz2KgAaUF6iPHW5bLrJteEJHbYCqYhuAeJzFDf",
  "key3": "2mi5Q7CcEyF6PbwgSRmHubJzp2pNbbZ9MF2etwecobxcufUnze6QKRzx9hhR9TES1JcRkvaLiN5rJNxCoQTvpDgw",
  "key4": "5nKFhnynXHaUfSriJ6CcWeMuLnoFAW6DayVtcJZi7Ko5iAtW5YsuJTRLH2v3deXuEoMAKSYLZtqwunymT72CLRXg",
  "key5": "2KkbJewjadEfLJF3VACKSrn1DNd2y5Rr2F26ppV4iqy7u5JFG1UcBUyBrKu47u2ajREqJaBXiHCphRyUycdKXnP7",
  "key6": "zrKm3HPM5e1nkrwbJPFa9ZgTLRriJavWStc1KX6WALUMZvJkRYRXfAbcp2asiJjtkCZJprUa2UTMG6a7BUqtC1b",
  "key7": "2mgogpeXP1L8MbbHtN5AurbfcTbtr3xfki8FbPPKV4n6LPvZqNwbZzfRjs7NVoR5LpR3cRtjCtKoWpajHv9KwrQB",
  "key8": "5RD5ai2be3nYZS4KFLZLQqC5JghxmEQ8UEiXphKEN387E2JhSRa2sXrSWrc3o2ebaLBktr2puUktLDxrasi9WDnP",
  "key9": "cBCzSykd7ak4fC5M6x4bM1D7DNjYfxEmEHrYR5ZoHfLLSybLxTStfFTvTbbHd9zkMqa7gpiJ1wUiLBkKZz5Jbxq",
  "key10": "4curFnyNFwvktRaECyWPZDbjVXoj7nj8RkHPCmN4i1fYRBoASwFL9tXrmtDFQoDPuwTFEohjw78pXcTU6sSEqMkC",
  "key11": "226P33bUNahtkkyFTiWzrxJK4PzmggzNuqzS3PTLzp9RqKo7GiEqZJPTxPFyG1CephkBuk6nU9ADuEQcaCh8VY85",
  "key12": "5TMvErFiBQAWah8Z1G2M7qtfqGVaPForrF3M49A7Nm84wp7ogsLYCeku6zgVQS3fyUwnzqJYnaTmk6Kjk71qpXdZ",
  "key13": "5f2ecW33CtiFHad99qyRvRAq9WvGZf3rxMxsB7bfQX8YaLt9uMuv1LB7EuyXVnHwMemmGxvXDsKXn9Vp2W5GqdnB",
  "key14": "4G6UK1GEfM4wr5ViZh7W6oneuwPmjH9hRXfh9HnYMwFGgyfdpozvpRfMew9TnR7aru3M7MGPsJoznvmuUDQZRxJo",
  "key15": "3HAb5acd3Sn6CouqD2bekrVXvjMpBjf2f5uqyrdnASvHcvcMfeNGTrhkSrndFjUk6APJTpi3Ax6pQw5VCo4QCXER",
  "key16": "3KsCk628y3rpr3xZVeNaazq7xk8s6ErqsiE4pruGqdi6wG2cv6h7ZXp5XvfRr9wR95uSCKckmVLjYJENdeQmmWLp",
  "key17": "4hzrQ8gbWN9yCoY9G7q3dbeeaKcDFWb4uRo8oGqAtvBEpEdgx59v2nD6XKgVNhDwjazQ2wkQD2xtyWfPyERaiJXg",
  "key18": "2sWBmSc1rosG5DkSx9cb3RcovspMiN3atWWX4iMEcAQxk3B3D4EvckJxYx1GjUXahdf2Dzxptf4nncjF8PskKSf2",
  "key19": "65iqK3dxu3r5dp9rfnVeygfsHA4KVBUsR2kk22n6Y3NXoySvh3xzqCqDiHa4TDphJachRFLSdG8j4xuHUJFBMqzD",
  "key20": "2FJgUWFh92f6ynFm3kzc1CJfoPyRKznbKzafSZkSJegUmf9cUowmxUJHeMzCHe77fwcGCgRppj6LLpEfFncHAGUf",
  "key21": "3sANHrVf31oqdPeGstvKH5tkrGZXBFN1mymVtuLDYKJrLiAqz8xKuo8Ersc9ouwuo3tenUQHFAP2rUGjtGkcpY2i",
  "key22": "4mYae9fCiZD7SXDwUw8qktcEqz7aANtMBiKYLthnDkXMq9PYQVQ8bvmtf8D9EArox94wYyhBhSYyo4gQdNLQofvw",
  "key23": "3CKZCPNpcCVrEpxR7LSBJgAbWvhGvFBSYLuDofb5CGbgsMq7kZwDshvbe2AJXc3R65j7UtKSADmvUDV85ozKVFEk",
  "key24": "37JcD76W6KR8iPRgHfqYyqUxtXPMv4Fs7pw6bXcNBqzNHBb8h8yGANYgKVKqFHsaec9UzXXrEj8PTmix85tqRYpN",
  "key25": "3n8erkZpsLYLX7kc5o8yMePaawDoxvPFWeXwsR6mwkbC7L8mvFQvARYzASzNh3tEeqzogNuNx6Z817GeECbDASiR",
  "key26": "2Cx6QXtQ74aGiXyDDYHGGpu7jDKB2F8YbgKk1LRnNTJrMGPJWyazJpRZcdFRswyCanXJkuo29WhHSvqquGNY8nun",
  "key27": "227SZgXTtgtDcW2qhsb2X5BEQb7cb4cW66hMmJPCxEpLnby5561DCs9tes7bVVbTmyXmwipgXmbErmwgMydHv8k2",
  "key28": "39o7S1hHxh3HiwZnCuvGTVr3Y9utJNQebLkxVgXt1NmmaSayzkmLDb1YoUZmoue9GpDHR8t4ZGkU4E4Jp1xdmT16",
  "key29": "2RvQFWcp3x2jER7wdGxkAXDfej2b8ByYfBzKKassEtB9DVWwgddiW79EysAPbhgd3xkNzJFAH9KD5G5KcjLeQ3DL",
  "key30": "2N7oayKTe8461SSkScpBAMBLDB9dJhfUqPd3Dt83kPHf6DMAQqBHwmjcJHtv1njJq92ktvfGFvsQxN5dUX98MrjV"
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
