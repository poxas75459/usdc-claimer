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
    "4C1nAetvkYPS7uXxiSRxBFdn8f6M7CwSPBDzBAiGeeTuxLpnL1qJr93XoVzYWrsd6ya2KTYZNswfnU8GiGdy4va6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nNXHp798fZEuLfY8y7pwCDx9M8suhKFk21emhDKwfTAbJ9HkevGxDKjKiow5w3LGS9P6yzH7FugP4tus3RnbNGZ",
  "key1": "4iMNzD52hnudU57xaEkFtkmjrmiCZBCSNYsd2YzmWs2BLJqjnJKjAPu84Atk2vPYpSFnrc5mjrifKyw689tn1oLV",
  "key2": "61QEPXrgBJeW3ytTyNKQ9rpySrgnrf49AJ2iT9LEJRWzY4a1sKTesaRsR3TRvd353eny8mMzzwphRtTFcnWZzxA4",
  "key3": "PN83eeWfoSgPiHvSuQwyFtN8R4ZYTUbmwSN3eehfPsUbHC1gDC2n3HsZ2dQiaN21tNgeXKqG5AUjA1kzm31hmPF",
  "key4": "4DfgMHb7vnKECjFvLcw3pvVcLtm7ypv96Qe8B2WDMRub9HpHYPzJKyztVbRJudpiPaPtohVxquHGAaoJsTPKwkZW",
  "key5": "3Px7o8Ny8Y2xr44Mhr86MXCHN1RUGESzHYfNWdDxH4VZJi2JmJp2A1FnkzBmBAYtcWLfPSjY5dVKqyXv6Fhv9hq8",
  "key6": "5g1L89MEaWh7ieJtukM2ZceyDdH6yNnXSSsQXhVnYoWXRnTLc1kbSqBRYCuHCuVze6DFWRe9q2n3neetZid7mr7H",
  "key7": "5xMkSS3FNUS2hCeB1oHX9Tb4zXmsTHgxy3kZEDiXxDiZ4bwTnRgVpJxeJqE4E6ehoenf1hG6bh9zVJTahNMUB12D",
  "key8": "2QbFPJcLqT6Mj46ortj5avTm1WPj2yXkFT1KsJZrxZHUpPnQwNxobT8WjWTpv549PpXtVrh1VvfGGavKsqYE97e3",
  "key9": "5tP3W3Wxe1F4xtwTFud2qoqUFWnPFHvCcWrKuyqt8637UjxCQcRS5hjpB1A2VMgTS6mM3yZsa8yo8KcFYowMjW2x",
  "key10": "65N1VPRRTkQ13M3DMVCMJxWhat5SU2NJeC2XFpRh3vzHz7gEKDGwz4fF4tJF2KSKHbTvygbimKDpAv54wa9BmPcn",
  "key11": "Q42bcYAcMDw6kbDH6nFCj6JGhyF9osb5pnU8y41QVXYEvT5bTtFU6Ezmg9idE2dqxPgYBTodRX2R2k3Y24bcYmh",
  "key12": "f6WKwUC2vGRJaBTaq8njojHbJJLkkgA4yP6WVYLc9JM9oQZiwSJryhvr3WawQpG5ogN82Z2gd7CkZCcvdR2EJAm",
  "key13": "5aCnPB1HsFFDe3BY4zG4gw17a67jsiRp59L5szBYqEjqU7eb8iCUySXm6YqbxB2AeE4zZbmHJ5X6NfKpkqLoMVyS",
  "key14": "25PnFkwKLxqYGosUQ5MEB7eDVYrwr2pawbXLk5pEHCyvKTgrJfCBEEUo2jjcCdyXSfKxrsmkXeBq5j1NX6WsbeeY",
  "key15": "K4sFEEHArxT5akh3B5ae2FcdMAJ63zq4iVB9sisyoyfB4wbZXvXjj6pNKHitZ4yb1vwELb2xubQSaYNRosQZEdB",
  "key16": "4JkDRLKeeQA6C9yq6TcExTB3B3NqmwepC9jeXgp3ao9kWX62u3ZZXiALWracUcHer2yGHnLgE5czycYB4xPRsnoY",
  "key17": "3ce6bWmvitn9NvJPggEA1KMQK7n84yMTDw4wq64UmxPhB4hWb8fTPGtHTguVucHvtQo15zCJ75gwHdqdzTgGUEKg",
  "key18": "121BQKtsH18Mhp8mE9DY5V4KzTgJEQ9XZPEEFPFeShCiim7KQNgg8N7WezTX62xPfUhrWZaZAkp4aUbFiUdWkoqa",
  "key19": "54EqwGHUdWBWrzP4B4uWvP1vKsKouDit6xM1adfzWe5DXKw1yhaT4iniUyduvEyzJhqiVQp77cji6PXKFZCSdgBz",
  "key20": "5Vr53e9B1cwrH5RGdVZq1P4qRXP7E3TTUzfB67SAi9dVJZWamTVjFCTP9R3sAb6QA7wtexyLLJv2HMt3MRrAMt6d",
  "key21": "4hk8NSjXjnm7x3L1vrFjzMos8us3Uq6xFeF3RQvPoL7cNVZSkbV837g28Fqej1drWj1JK5VE4qCBShP8frdPtdGY",
  "key22": "387twn2cG2zMPEyUeRrEmDfoxEqpFw3zbJTrP6T3bcYu1ktyyg2sANfqxQHic3g5BkCeEnwuA1i9U1aqJYkQ7zkX",
  "key23": "2nP5MtcKGSZUVy7SyTu34DzdidemwEudhq9HrYsN4eHahHyi1k3kr7im93aRY7K8apw8gK5q4f4vod6poUFG9dxW",
  "key24": "4Fuv8vyUkFuYuNEwVSMkHqFCHd3zkZiL8Dd8HN1d2UxGkS7W36yojS6T38X8Qq4gNCMs4UH34ifYJTy32oMt9HCi",
  "key25": "tqBCkozCwXdG27wXCx6XQAhy8ZQ2SxzrYr6vzHBL1e2jSvwbbyZ7bC3dRK46EJ9iXuiorsmQC4dLKCwhagwrzUM",
  "key26": "4a9L2pJNNhSohEMfUzeu5YNSWQvrAD6hyicyxmxVTP7HsDSnYjJSu8a8KaqocyeoBXWE1yiusoioSeLsHcY1YXQ",
  "key27": "4hP45WzxM4XuBzNPEJT71KbRbwzREVshSqi53bdWjbBytBYu9UfhptoAW757hctK8tBurkpK8h6WUEBHnTb65Exk",
  "key28": "57EbKx22cc11SHHSiLdHbMN3zDztK5m6tkeVRPTdf9NEf3XNeR9seaLTsV1BP3hxSo2izfQosKngHpKFfwCuP8MX",
  "key29": "4cJR6SpjugU2Fys2doEMVRjPfvizXvXKCptrE38UZmczrpRt64crVoLWHeNkuMVwPBxCd6ZJ83Hz7k1K3ksFNMmG",
  "key30": "3sa9iJbYPGaMjQxLYZGWPxCH352c5rgt9d42Lx5kDuWq8fkMyv4uSG99xP42cqUSLP6ra7X9oG1JwwwCw7t33hHg",
  "key31": "4vau2Rmeijg3pdXsnYGZiNNwZfsbasWjvwwYFkAgmUHTA9MYJGkfE5sRPNJfA5DxgNGKvNrLLtd67hBrzzhJhFud"
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
