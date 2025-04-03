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
    "tMNZ34AoBNqwCDP7Esub8NnvJWSpXLfh8D5u2pgqUppDDU6N4V6T44WSfpQyxaimrPC2RN2qmwsw8ZeK3yn3dcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SgEGoNb1qtDzb7594ZXFwrH6hKoWQXbGWx2H4UqPszxsR5AWnwk5LwzwJDsbPakqKTATw9HAZY5orePZ5DFwKqW",
  "key1": "2Wtv5ZonTSujTB6cqd3j3CwA5y7WNwArB5UYDZLfYSGCFf4QGzCy4DEp98SyGhTjzjrn4LUbKZvWggEpkAMBQozv",
  "key2": "3KzUq94SQaia5UFpyPqWvKRASmMQrgLff2SpLTUFm2WwkQsvYQ621TLRnR4CD5A2TbqX4YYo19WYcoXyCKyT4ZUd",
  "key3": "2Y3X5w3TJNFX3zbzmaj74ZWPEPm8uDu7V4YBcNX5JmvRDZwTSe7cACZoyRbq7aj9jeVEzC9dvB6TUDLzHWnvnLzW",
  "key4": "4eJXKTYsER64UnRzhH2J9Fjg3i8ygJut5Sx5c61PCYgpU3cNzsFChSX4XWCbCwjbTsd9pvstpfyjzKTHrrSQmBJ2",
  "key5": "FANRKqmzucXrsbhyTnQ37449P4pEmp7fb9Xf9HJwdNioXZq3JUwwZGgU2nfSApN1rURnFaQb42qN7jTfq2h63Lu",
  "key6": "Xjp96eEfmCsEUqrE5pkb8ZJ8dZHfPUKWafafsfERJzNPPoF4jPnSMemJpv9mt2sDBTGkG9hnaa4uDz8WKQYsBSc",
  "key7": "65ZgHV9vXe3KJmdu4i21P24GKWWUKGK1J1UT6Fq1pPFn4y4CVscw6Uhmsnc9qoF8RwtHQL3VaAP17psmJQYCvYzf",
  "key8": "4krS7thbPv9k2DvTuPJx98WRSy4pnYcF1UQ3RVaH4vBZS9A1RYBL3JTVsbkFNFkNE8d6RmLYwX7GUzESKbWfWtN1",
  "key9": "m28zMUCocHH1g4e8CxnBe3r7n3Pu8HyTKJBdTueXxjgDihQQKc3BhvN84j2PEJkwBsXhtP2aGAmdjTvZahJxsyp",
  "key10": "4tgxGF6y5LhNU24tHzfmDA3JZuM57C4e2wt5YzsLzdcf1KDnoYhuM7DJhtknayy5c813oBtV6AGJuAsAozs5kbxq",
  "key11": "3q1z7cbVe8N8cJpY7jWU9nozQXA93GfR84WzHHaYsnSCnPACzFFPFJabVP6RYa9hAHSfaLh9rrQwcXk4i73DmidJ",
  "key12": "3V54MxPJoCNZBSE955H1CUfTh7TroXfgLVGu7orh5HNkdLjECUHHvnzMG9nGfsW3eZEexAATMJP6gwWppFr1boaZ",
  "key13": "3HmzFWYjZbsayrkgEW5qSY8WwVabQDM6YxuZ3P5N1F1W4u9o4ZWd8KXSAdiKMx6epgdvynmv3zMxppbRwwed572M",
  "key14": "sKQ1F8cVkmLJPtqJzB9qnqSgxYw2YVhKpDqp8sPoiH1XmMHBCUEb1b454THQXUaoHNFPsRuRyZFkZXKhxFyNgvw",
  "key15": "49rLaxDi8avbpG3yJ2ZEyq4NEKH9MQncHJiVwiedngqpGtbn6ZBfUTVSy4BRw52JRPD3k9ehJE4vzJL9Ej7h6mdh",
  "key16": "gwtGkYTGkJwMgTxrzr5PdL54hK6nywEJTL5wZyff1Kf6s87otJk8aKDpex89GvGzJ7Hc1j631F7d6CYNp6NKLED",
  "key17": "5XT5LxgPkQRifjNQeZjttDESuhcZruhsuDjnYYmfuAffPGuboAXwSo2MHMJoq9eW8mNvzeAz6RHtSS72DD8JK463",
  "key18": "Dnz8LyLtHTxRjgwn1Koq62aD6S5PtiZ4eNRwR6pn3FjYRyAEwCo84VCuTfXwiRfFNtQcfj224BqG2TmKGy8oYfM",
  "key19": "3u6QQ3o8f1EiQF5WhkcmoXFFe6dGNimHYZ4GzCN2QaDrt1mpW8bUmn86uiwg5a3mMYJ7h9txSyozMF4pLFmArYnr",
  "key20": "4f2MTwfkgZ26o4c6Zj32YfhisrxrUP2HArfiwe5DvMJPJBEtTpbQf9pXtxjakgaR5JPt2Kvqd2Ap2RyXHXHyZrLU",
  "key21": "YpEhQU8rkiSB6N6i5U7zoS8zdHFetcSqMBMDogHieDSuKXbR6stpgkJ98oV2WNzeWVeMxPSa4KJHrXYAnhRNGpo",
  "key22": "5Jc2w49e53mLbhZ6x55EXiZW8Q12zjLLTGwEPGKwRhfXfif4BqkbvU1NJm3mA65g8MwXGo182FRVZwALupJA6C6u",
  "key23": "2d3kZBm7fMm4sMFHzSDSMscdgbRKNetyihoKtE5BARXjMisVCKVCTcwRYyQfaHaoyWhzNgcqNewduBxJt4ugV55f",
  "key24": "4MvV8MHjq1eDqaeZHg8zCvy2SrsVJs7Y4PPp6cfkpGpxaEzKMoyGkYcHYV1QrTFyqcjQYxoUQKTsGcA4r2KJjrT5"
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
