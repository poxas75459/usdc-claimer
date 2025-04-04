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
    "2Nhg82aNJxbYhrFcw5FdibABohjUzrfmzd51Q7gs6sDDMC7YaWXEJFsy9wpYm5KZMECW2ztZM5B3VPKMEkHSrfWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wYZda85ZEYGn8z5D3mMJ1BkpDr2Lc7YyMF2uPHXgAKJdkzdpADqSqcViiB6wkBfeefJYka2BHaMhoRqYYCToMoc",
  "key1": "3AZ8ErBq6L4YiXmcD6bnna9poUq8bnCR33e7PbZpqks12ZkEHbPj9LEzP29coGfcXCcRkTd921EvZjS9Ksn69Y2q",
  "key2": "5hM9aozQ8G3Z8WQ2htNgPkg4qwZJBccSjMFBVt6tyKaEMwihe4Qgh9P3hEi4cEZVsuLCLoceX2ec8USCVNW5YALa",
  "key3": "37d83W7kBAtaT5Hu7mrtGTRY5As5WACUPuRt8eVXEySZWPMMnadzwspde5Hji7uS6GkNdBfBg5u2si23CfE1csY3",
  "key4": "5iGuB9cGwxmBp75dzafroTkDrTwKsVS6u2AUbrsMWZZtEuBrLAqXF9XKFRDqpjQxYYdYkct7Ac2nbqTNBoo67Jom",
  "key5": "62hjAXCKDtPxRckMprmwkd27ykhuTzyJTgHfmqgjE83v57vMKXcgnvd4idN4N2jae1TthRDbkrgpFRh8QRGPjdQ2",
  "key6": "3nj9MsCY2FSS11DehycivT37Txak2dLzrqWfthHsb1LPsesKxWFjTtvo5KA8JxMgz36MJqjbxSMn1A7NohCPaDcp",
  "key7": "4L4DwBYumafqj8zcmn2cRB1NR39fJtgXsMhtaayMbDMyZXsFYGevfKeoj68rMenQBs36PpTk5Lj8si9YcdwuDoUh",
  "key8": "2yB2Uzcbco7C9mUWXLPGf8Y84bP9urjCZrBRGoaL7xFhPYxWfuEdUCUkrPJpE5JZpPxRSDCCLMBxQjgiW4DfsPfp",
  "key9": "37zEUrHLjPZVkcoBm3xNsQuN5ShEqkYXavLfFFuGhqrNkRF3LR8k4zhhT2jWxoar5rnfgRbx7GJKu9Vc3ckcV9CW",
  "key10": "5jnrC86tgKCzk9kUicBHYdPbsWoN39aJXurPc7EXTQxB69kFzxqUXN7pCnA5vFa9HusAb2Drv1i1VEevyi79maFv",
  "key11": "5uKMZhiGtEGVRuiwPgBk1XTE3yMWShsnxV1sAhD6PyJ8g9rumrq5wowQkBiuRFMj4voSdMupuhYpiu8y8fzFvHfc",
  "key12": "KCMdEvBXgMGU1QTc747kx3spq6J4iaECPf5XdksGMVJsk53F7ixE2oBnMSo9ao5Fv11yXo5ioN5KHHDLEyYGHbE",
  "key13": "2tD2PcQ3PSsTQcu3b36NP8reK1wKRDsut8va6Q3FNx89bp16f5Hn4xJ6rGSgAStMdBNiRoDARHS3wAbBdv8b7Kef",
  "key14": "SifqTbxY6hQ2B9XxzoFcpmhaqyrmyWmNGG3UJDn4um6Bm7uFPYtwFrsK2qQb4ER4VnW6J6REToxwiHGjztPJ4Ms",
  "key15": "5tgEMAXHTrf1Uj7WqBfmFywwifySDMhHrCmcMzT7p81Bcuwp2iNWQrTCtJmVkAZ7bcU8g7JpkoDGVSg642C5jwSj",
  "key16": "67ZhNDo1cquK1JnNTLevBBuAs9HdGbRWbDJM81mgw7N7BQTtmS8BQAoW1xibF1RwACD3xkQoTr3b23rKd3NQNB3Z",
  "key17": "5bnyDutmgENoUqkJzsubc3a7yqVp95zR7e6dY1cPb2XsGjDdGJgjbC1BpcUdWvqypw9tYewxqwe4LmrQzD8MWefE",
  "key18": "5iAg4gvTg3HvBNyttXDp6PGYrsBKoaZXwMdUPSgXwzKCG3BAzhLKFTL59VQNG9JMgmjamACEBZYq2eXRN8gM3HMg",
  "key19": "5dy3uEcwpKHErQ9ar4oCLXQs47Taqpx8tL38hczbdWzpRpctNBLDR4NUXq8vtJKkrRsJD2CwF92dFrL4PP53FFMP",
  "key20": "443pdwxA5ovzZsgHPrta2WU84BEhKda3eoti8gvVfbqtHSgnWRb6Dj5ofG7G4GAcweCdcVCirZWcWY4cAFVh7gR1",
  "key21": "4NWPnpkX2yD3aRJiRrr6NTgYFY8TcBhQ7gTDuFRGYTEDM95YCdGB8ehPDPVnN9SeHD32w8gnK2HgMH7ue8NvCh2a",
  "key22": "361dqSJaRsmDKLPqTDbtzj2nPX4RHnPCnFk9XED9y3LPN4hR96fsXdk5uAVc1GdTJqbf4s2SDxx3PycCFmMrKpCX",
  "key23": "33dpEHkFXTfMigAR5uQ8mrE8ssnngtFoy9hKq1dqu7ythijrAs14siKCyYhVnxssVVTmgcvo1Ku1Fz3Kw5BrVsTC",
  "key24": "YpbvfQ3MxkrDYbVKRNcGt6SFsEuiAQFbUbjTNsJDGNKCrxwMcFF7UNAo6AK1c5HSgJinS3Xu3GJCAXyE9ewyMcd",
  "key25": "5G1tMhCAW6WaWkseT9Ua9mNWVojf53e3ihNP1cyUGv6sg4iXjncUmMyt3EHM8reHgXLmf6ixhpYuXpxCaDr4z13b",
  "key26": "3XqQ7o84bBszocWNCNiTsAqWKtUzrCyNkDeAwQrC7sCVrJaM4HZMm3zSUEFWv76mnFHn7fwXhQvEt7ryuB8knQs4",
  "key27": "RcAzCex5KtdULHquSpmchcFaT11BK5aGopD9D6TTa2TUc7QjMEJ7RqD6P63dxs16FCwVLLJ9DKh1vX9qZtP8php",
  "key28": "3VBbi9y5qSezx6neHLcnvevK5fCaj1vwvKaFmSMJi4ZjzNuzaAYz21fq32bABM2mQ51vShZbNBm1vusBmZSYk74G",
  "key29": "5ijXjvhM2Vwoi63BsjiqwYGDJhEMmNk8ykbyaCLncivEDu4sPuS6zsbcKodp19CHiV3qerP6MDfaSjuw3w7vedgT",
  "key30": "4GnW5e4UtRUZvTn5FTXwwcnmT2KKi6RdxyMi9bDiKcAgaTWRyFDdLLSuQtqaaQWwXKqWk1Kvpeh31o4WRiFEpDvh",
  "key31": "5fvFkxdYvvuuiMzwVAu9vQMKi5C6Y95NHdUJKDUGjmHXEVDbGqyWbu94pQHmiumoPq6fqCDrsYXXG9mNxGfQGKFX"
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
