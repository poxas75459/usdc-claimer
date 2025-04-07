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
    "2gdAfBB2ifa3zfQ2EEwgra2nMma5uYYhSk5S2xVtQj6hniKn1TMESY1ZC62Wsev1nVB8ts3GTMqgGnU5UsHb93jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SUh7bqiTCaQoAxutS2F4Mn4y6nZSFD2DgURQqnE29GqkhgBv5y77VzmLEdBFahYGvJFGy9Gm326ckMYdkSxDB7c",
  "key1": "5FCPGzxmwagv7uCuVEyMjSeEojyu5DGQ9o3eVaGJTNfhiZ8vpmuqFnhHEwcPzcwEVKEcB4eisR6zZ4vWokaGvPvy",
  "key2": "2JS9XAWd1v4wefKTbaLEzrB6nqWjCnxsKBTyPUFawLueU3buQSNpNW2bfTm5e8HUDZwAyuFUoTANqvKtG4yxar4e",
  "key3": "2nsfbomWXVnrEHfcNgCH6RyU1cKNVTNf99UuW9oE24Eb6ysPsDWvVGek5krpDdkuCL5R4CxPBCHncQL7gBQ9ofyG",
  "key4": "4cMGCZxoqQgfthEhdnWw6p8RCc3ZRYSzD97mzz1RfgAt6pUQG6rU8VEgnXMFUTsLJT5hag5emqXwKv2zCzcV8Wxz",
  "key5": "5FqAqqJeKvMyEekcF9jGAKmegbxkFhfyJaNF7NmKMonW22umNUxc798bSiTKJ6eJBEuqx2ghdvccT8VAKXippfYC",
  "key6": "4AKQPaKxnYnn5fYg3piiLFAKB4mhQ17sBRuMCBSD5mEr9AaGxq3qjFiy85AjoKmRcYqrz7icKkjyCM5h8PQZRVR8",
  "key7": "3PMNwYcnp9jNkEuJjhmwGY5czngkgHBR7bi32wNkcFxNhbAeM8Wg63Ko4kakurbD8jAK24VdiWQPEf9qaQWcME49",
  "key8": "FFY1py3z4V73juf6YBMFxeqmzYMd9C37Ptx9HoRPr7Zz6oHFKoW8whWH3spbdtfoKLkxFieUkBKpoSDD7mH7zCr",
  "key9": "52VE4TiBAHVUTL5eC1vXWvihtArb596enTzQbwEiBxXgnPiEj3uDcD3fQbtqwjxhpbjUFpWTzQ23Gz4yA2wNuZ49",
  "key10": "KQkGU58DVa7MuaQkCfFERn4XVX5Ps9LBF2hKDjoQXw6MBY1CXbZh28X3jW4Kq3k8tgqXdY8EQ6MHDBo8C1MnRDP",
  "key11": "2k27MdRRZSqy7k3tx87ZeKV7DbfBprubrE9XCNbzkYGUjZFz3PX6wMs4b85G9cthdvQiL9XAfq8XJe9yQFknVhcS",
  "key12": "bNmSojg6V8XQnH9UJVtW6EY7XFJ7qtoWivNxopkVVF6t8S4um8gHucH5uuNCgW79N29XQNZXtTeM7uGxc9XEbXe",
  "key13": "5ikZjvEtrqJMc4swvXoqaWJ5GtnpGmxXVPQdXLmktNo8RdwurZjsGMtmCNUzYz9fzXsCcz6td6ym6wAmyScXqjeT",
  "key14": "4bxC6dL3EooVDpLfH8RriictjTKYEP5o6EgUmCKz3HnhHevfyw5ryuX8HmUhxFYYR5X9SM5PRuzSiKNHDhkEojAj",
  "key15": "42YH1PLzYF5pC64hzTVBvHZqfdnPHKWpQJreyWo3hmo4kj3PnDxoEy2uPiaZYGx6VU1s2f1ebzFb9vWnzFoTL8Ev",
  "key16": "2Jt8itr2q5KyWUwMM9jMxeiWi5duybZMwMdunRYEiaLnYa2H2t2xSVxUBjkEK1iRLLjzQtenAxc271GtwH5zk5u",
  "key17": "2hPD8z4bgjy5DBTDaSy8ZD45FG6QuF4uUii13RdCRQ71Ut5xNZVoqn1FaWURKnQxGrx7874ZVL2uPDkMEie3EQmk",
  "key18": "3na6D3h5uGyNsLtr5PDccSmWoHRRgoBuETD4Xbyfatj11eKgth8DZZG1cUD6MsZF2XYt53cYRRiF7JFbvHusVtob",
  "key19": "2psAWJecYSYj2tC9rzX1u7WW7662ThNrxpBqqcmARUNuc596hHbketJgphSD3nRn9e59v6ESjg2btphnGh44u2yF",
  "key20": "aeoeLKKLvAiZwSrzYVLeYj9s6Acmz5hRPvbt1XQqqnaRw5tc2XXbSywMwvnK6J9Q19dDtHR1ZrMfGunCfdxAQ7n",
  "key21": "42TyQXhoEebLB2LDbeeHzup2Pg68jptvJtzwhU4h9GHuZYKC6dHMkYCfLDFB3tzPPirLWCicumLCYcj4ADD1Ccch",
  "key22": "3AmG4bwUAc3kGK7Ux2BgFDR4QAyn6yz859Ye2uyVEDLGexJjPGVjjJEsGxpYTUy9XwAB1GdQeKXEPvSB5DfgpDTZ",
  "key23": "5GTMRyc5ymaXEceJQzE9H42PqtxfN71FNncMRo5rBotUbkFr2BUcV4x4cazbGXnDNpuik9HoDDQ3pPDdAMyRuUS4",
  "key24": "FHinwd8L2zPP3xhg5JmiLeuquY5j6tXD1SngTagCcEnJWg5iZfFUDiBhPZ9qqpGhf6PEGxjqVCkJgwjmauxdfAB",
  "key25": "4kzDS6YsqwYj633tRsk5n5gt6tLY7G1Xa3kWK2WRm6n8Pr8Yhgy6ycs3hX9wZzSyfmWSMGGGYTjFPzDeLXiqt1Dj",
  "key26": "4bbWTZD5MyvXsQpm3aWpPZEmsgQibriHYJF1G2kLooS7qLcifnMrVmFFNSj2xdiG2KDWijqhgupQwDs19YF3TTRU",
  "key27": "4LvbN9dgGsUmnqcuHRoJxZW7RxkB38xK99SsLnxjhQTtGyGP8FFqmUh9EWwsc45MuAwE3ztaC3nwtDB8Sguwpz4y",
  "key28": "4LF5ZGZVgcRJXaLk3z7VWQDt76s3mL9nJP9RXUPiKq7GPUtK669yWcnJbqgFoSEHbzdpwzuDPoZefj87dvMdavMD",
  "key29": "4UPuYTczSJGr2Z4xnpgWMtreb5H9dxEE1diShNxev9HPeyHai7ph4kRnzu7oM7oYodkb6kyZk8q9Qp2inGvXHXCP",
  "key30": "2p2iWFot71jsq2qHzBvUGUpJkRnEW4CtsvjsEZynLRru1UFJpnAZMqCNTuhYcsXTm8T6DDqQ7uxZuPHuYAjxQprj",
  "key31": "648ip12jC9pKjs3GrsStvV9VjiDB9i2Ppq6TiyV8gSqHmbJVLPuYRBxCV4TKGQkgWKMoTuon8v8gYstaxz1V3PDY",
  "key32": "SM33s7pjaJeSB8zdve7M4vKTmBkDLtHHge4TXk3zmUUFLMdnNEZferUdeNJybZmvcHQF7e47PnMmqcNjMuNiBXj"
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
