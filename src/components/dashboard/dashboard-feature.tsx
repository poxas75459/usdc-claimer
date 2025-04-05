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
    "iDHuk3u61QvRXEfvxQ1k7fCDtQoFNnN58aXEWEqLy9VP2x3G2WDBkg1oMzQbRzCBpd4wPE3JsJdfdgWNUxQD43A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SGm5zU27iTro8tWFf1Y1a2h8yViPVvgp2resCrCBB1oLyUPmckSc14yruMf9G8NUcyPxHEdFgoj4ETYdYSSdGVe",
  "key1": "hipxAqZnxdwKgDZKqRK3zJZh5aZ7PtrDErgBNhGH2r7pEAdpUL8PTKtt6oau77qA5sNCdN999AJvX2kpvpnib64",
  "key2": "V1w9da6oiEAH1ChR4gM6vmRMFzwmqBatKZ7eJKqkUdm1vscLKppJqJo5Zu86XukRhfNAd2Dn4LvYiw2WYjswzu4",
  "key3": "2adYmqwtSoAzj1m6SGzrh5MdGFQ5tcmX2uGuDG6uA8Z9mvLDVXHi2iC3kvkv418khgjujLqSNSSyuaBAp7c7akzi",
  "key4": "5btrMq4Umm4NYD1NWEyhNQ8adarbDjuzkraiskYCwdH9FE5QmWre6LMsca1hcSy3x8q9xZ5etEWoGMCr8qDUi8Pc",
  "key5": "2jH5aGP3XZuFTEi1J5pMNrKXU3hbjTFFkFPydeBKxyYDFZVgNfubDMs4TstbjhX7yPf8LgHCuac1W7afMGA62ich",
  "key6": "4rdknWgGC8XNxsDLmFnZQLodqBgwgitrgpEd2LT9XHwmBnyBvxqSmWUsBeCGriFDCh5bVGrVdqAoa7Pu6JMEaLJW",
  "key7": "5SbGtnneMfuq9D7hGEthUApiGsvc2Y2nnoSKT7sysc4nbTz2SjRwi2jeJoPtqme5euGH5u2AaePWRWWLgFyTtjur",
  "key8": "2ouLFQBx1JuqnAmVuCZVx111aQVzVzaZ3DjAFeSewTdqZ9GeQbpQAhnm6jU7e4SXPmNkn6861pedcWaxsjg5z1sN",
  "key9": "5XDWi4zLRnoJmhjyhqHiTr5bNxCFGVgDHozg2uwX53HqECcwVM3XyMRmh6h2JGijaEKMzxSz5AzydHN2T2Qen1rV",
  "key10": "5YyLD5pRk7rBMs8XYUFNRv7gsRoQEUfh2WTrRYW2RyDoRs5921YeRnw1isP4rg7CyUNjfj3oQJXtyUBPucW3kB6R",
  "key11": "5t2RZngyaueZ6t6tCGeARu38Nwxbqbt8YqTxNLp7rXEimuHjEusBkY8aEA1ayR4UMVusLkk4yu63uBP1YVzn7A7L",
  "key12": "5zpCaNKWWaHsTJNmbpgXoqbezwAGwV8g8Zjc5arXuvTLq8f61vQbRR77p87R9fVe7Gsg9U4SxoNiUYkm1AhWVXwC",
  "key13": "jQyySAs68JjZwsCxHUmDHbfS5uHAD5ogKdfJQ5cbaHnT3Wk1HrgdDM9cFZKZ9g396YCui4vXpaLEW5ZvF2N6zMb",
  "key14": "5Y3qSN8ehqCcDx1KQSXC8sNKGKtz8XqeuScEP1X7RB43obzZyhDguBU5iUEdZzGmxXXZmhJdVaPhRNfbw1KcRyLG",
  "key15": "53uRZLdv4iVXUry3xtzj1Sv4f3u9x36X7CVgoVsyqAoJDwdfPkAYCHsULc1aGaW7cpAojmKedBWZB4u8yEKrPKH",
  "key16": "2ZQnW2CDt1669hGKQNTcbnhyjpiYBgzdyoabKtzahChUfs6yWkxJgJ2r63TJaYZqEo8aaQSNqxvfMYvnJhoH7mfb",
  "key17": "3uEA2Qi9M1GKV2A7JjmYB9JEwcfStsdLQfjAUHyNgXSBojyzZD2D1HAS845WZ6QpaUNLMMQWU8qi8xSG8tNqJG1C",
  "key18": "2FZGdEUxyqyLnTQFftmZEcJ8i7Yr944qFLEFELRDkcNmRaP9i1GgrfyuN5DJAkKgaL7keEmDxUXqGLiWfSeRDerp",
  "key19": "39aK92kGvyDXeXtqGPVMnH87BieGeDUMwV5h2KSFKiZwMRAkT1VLTdy9AZMu6d13BRPSQKUgm8auamdDQE5kNzBF",
  "key20": "2H4Paty5mJhSGb26dgddhu5FxAXAnuLc1T217mbzxuDAowbRyRiWGG6C4vbb1TZ724idc6zDmMbFnUgxeKfaKYxH",
  "key21": "3Be1V1x1a6SEv4T5vQt5wgPAY2jUqJpnAQz5DMHf9tw6nBKwdqcBrq1oUgdAFod9hi8EDZEzWR5u2em3dFgUsTGJ",
  "key22": "2YtB4tJLWsKyBMNrQ3zkJpyUcneXSCEDmuKLFFHW5ELZPRNDunJKf1mrnv78s91UscwgZXsTg9ygvtY7dZT3dNCP",
  "key23": "5LXnD1nFScVv5x9CcXWgbaCij51eGYhkCqsMEujGyKavavcfNL4c5cibo7njfPX1Ce61xuygmZbLu4ZWYWxZ1PeW",
  "key24": "3BpHLqkRTy4FrD3Wg6ffMALVhNv9Wg1ywzCoAmxe9NtDNicTNY2smAxyELfHShgbdB4JTxBJdg6oSXmr6GauQXr",
  "key25": "3D2y2Eh7midAuBRRKGBWeLGb9NhgyctNLvJpVRHLeXXeaafCsKpPTCuBu4JFs9XTtZJDazJe4qeSarxxLkXDNbHp",
  "key26": "4ExkhiXvuV8u6FbMC33RgLKa9wyvqVzn64VZMn65bQzqJrPjj2ptCqkeLQn3ceudyqEDgrsMqosk3ZmrcZgtge98",
  "key27": "4aTXXnXHPPhioeFCnLSMKxKfzvtEif4L5onehGiigREDPGqZSPXgdzhhDHoUS3mg7g4CR9Dd1GndEKL9kbRgay3y",
  "key28": "3MCBAqPJQ9B5xtHZcqUjDm47BPgLSjZHNqv5tpfTmjSYWxs7MUmnwJAUFPyWMJ82MgT4oSQmdfEZPuVW5Lvhu6F",
  "key29": "2aJ8u4HeR5orrFQXkZQQCXN5p4Nqvb1LDj519copTLxXYs4g3rD6mHBaBKetoxurFfu4LhyY5LjAqGJmzxvm725e"
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
