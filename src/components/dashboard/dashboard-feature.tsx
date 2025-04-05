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
    "5szmiWpFedGfZfZ9bBuo7peBYzqZ8mRAtzBNZctdP3Yh3yvAPivCEbgmAmqAv2GiaB8WvSELSK222kLPZajxTLBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DXeXaMVTqURsieCKLSQS25NoTECYFFuvjbC5bSQXHtihDHoNgeC6knT1StnAMjBrcrQz6ppU4VVPkXDKuJKkqic",
  "key1": "5eq43cputcEQnUX4SVyTTN7jrMCpRxpCKigG6Aegwd82Devhd4Sfa6qdDugWhtACPN7vUW77Zdtsk7XPtbUiDJSv",
  "key2": "GJ1mw1iky9UDEYbNbQHFoLithcsyfDeDXXkY2xqiHm66JbSuLxCuaaJG1nxf1ggtKFrKMePRAVfz6frMuWiE8rr",
  "key3": "1vF5CqYQYXqvmebFUJ3UB3DH7aZXTiaKssLzVYm5UcXM3qkdJuw1kwtmeJRX9xsiymAdYtnMHe4U84dvHqfuqZN",
  "key4": "5QWFwG6QWBMJXAvVQijxVsWjuw3Bti6qoE9WYXmnRURvPnLtLx5oq5scuurJEE5sEQnfz7Xm9EMckjJLEgTDVdGs",
  "key5": "3bwaegkLANKsXN8jaKtbfqGuC175Qqz7jCE6RqdH5JXtTKufsV745rubhmrSCDR9RJ28FtUztLxrYsv6Z7PMeu7Q",
  "key6": "22TFPu9dFrjktWycB4fxtGsu3WMLXa8KH82hqJsdat4YFNC22mLXdcUACsetF76M2koo3HpdWk4gTMVfF1RzLGbu",
  "key7": "2P2bcw7sJrMkhQbv5N2VMRRSpvDWG46PkT7adzQzvzcr1xLdemyow33dDoSYQxpE1AXfnGJyZk2K4Q7Mo1TYZFvP",
  "key8": "2tjezdkbCjXbnK2ye2gpX9ieUGvSr7fQ41kAcmvVZFzoENMWXwa8zLX8ytHQx26MrYN8NfKauuzpofFTcZsQr6Uw",
  "key9": "5oit46RaxU9efAr6mqndtSqdQsrbcedM84tqF1Sqnc7fwGisUvpBDGSAZuRsTsrKmWahZJHSqxxewe2uq58XBrh6",
  "key10": "3pg9aKTwMXWeRBxLP5mDLV3VpgVn3k4BzgYigTTPbVuwY1MV3aajJJEGBww3ua3CdpkJf4sxHhr72KuDvGPTLJRx",
  "key11": "4fokLGHaYNaKB2zsjBh9tBr1VX7XfoKGSitnLvSVs3FJFVebzVSGSyW5VHbipRnF4kpTBfBYhvbAjLCgu85poTpA",
  "key12": "5GfQnEHNoEBbsgTprTxiCRYE6f51GhuTTCTYFBiwzKnZYRKwL88sL1HkzW99VntyzaPZGFxcFamEynSg2fgZwU9X",
  "key13": "2oo65mkskaBm5hDrzRGY2HFJCGvLciFaesD8nfzaD4XkmXcicDVgXetTDTbFs97KEcScHcQG9ZA4heqi55unZ7to",
  "key14": "CXdHmdCz58zYejTyYv8AdzmSThbNcecyvkxYZ2E16rCge5ZaViebuhWuzDjbLRUnV7YGrVzXN9HL2yrZV4GWvws",
  "key15": "3JyKdG5t76f3mxojYxfZwYWGxFHWQsV31W13n4P21W4pv6C3S7LbNcYJuoaZ3f63hkoSZ1hVFWGtZiyA91oyGTEp",
  "key16": "3wAGTmoz5vFQQVuRVR1mgGmtmV1p96BhrBpfePHseYcF75Anr2z1Vw6VPo2bo5kP8Q9zahVD8ZppqXWwf3AuZ5Z5",
  "key17": "2KcdVLxhyx3EPKv6moEER6RtM7JyjJPfbLutq2P9QmYAgZ6ETbYZZgTUZSPca61s7vSwKp9Htn5cht7MTMzDicjv",
  "key18": "4oPr1MJjNbxGmER2Moms2HZQpVyJDUExnoNe5nemEdps9imwfXGnyVZRKdmtBJWZwRQhXEuLDFB6rD5g95C5uxTC",
  "key19": "3BzpfesaKUdKjKYhKMSuhrK1Fj2AJasP9XomeGyadTsfVn9zgTR539uAdPKozex4sdYFC8p1c4gKT2jAWtnUEWY5",
  "key20": "Y7zuNQpPQThwVhKFG51RCvcH184spGYLghR1hpW8wBGQpwLT9ZjtHrfGGvf9eFffV7nHH31oug4UuxAtuzBNuHn",
  "key21": "5cZ9AyhzKTktNFMYNCimERRLcccqDPYna8s6XgwC2TeQ2HTMdsdCDw4rPDkZouDujnYMBP2W5xzqR3KyYHJrK22q",
  "key22": "3fAQYKpTEWbWqeqgHeKuESn92BcSQBZo9GEZ6sx7tcxsUKs4VcX1Bu26JFhYkc3k9Y2r3rLoCG8LVFPnksKiaGne",
  "key23": "2BmsLhN98BZWs6hvDZKTfmSt3r7T482tSwXWFSHgwHY7KhBXt7S5niLgyfEbSUun6HymrFA2YdH4uTx5kh7PWfUr",
  "key24": "47SsfyLLERRPo6jWLWXYBBidZLxCeUUhhS45sEGxJdEFxsCHVqzRXPQgLnpgXQTf6QjgFo71XdSDRo677Sj31YT4",
  "key25": "5SEmSVsKKGuVyvdGpodLSXSivdY9Rb4448Ktk2Zd6kPfu1L8JXieWx7gUGDKRFsL2LF1XhT28iw4BJYfRhAvtddb",
  "key26": "4jJB6hAnKqtRGGjxbigNctx6zx8PZ3btdnsKXfXxaCdvU1oAA1KcnY3k3fiAgLJ5Xy1oPQfmC8m8ZYQEqg5sA9Kx",
  "key27": "HHFkwMz4wsAs31NUwMajWMp9AZmYtYD4chS6jK4iDNtWw4mLuoDnYjEkoM1FZakbzkMVQ9GGHBjZAQrga8J18PY",
  "key28": "4gPWdsbVFRGxAr6CM7GFiDryZjCrSYABgiUJE4h82A7nTGQGzJyQmTxRLvTyS5BqRdTrGQKcMr3xexCSVXeybhHY",
  "key29": "3wRQzR8pyLagCQMKJ3hroKpSUJXUpX5GEUNG4LBRoRBheugZJ3EzWmXm5FTY1nCBwwSrhRUD3oY9mYrDPVCa9VFY",
  "key30": "Q1eb1s54nKMCjE9ZuKFYytjksewtkrj1H7ownny7h6bLmE9aXhax29Cc2YJ74b8QcrK5EGA4QMcxQoa7qoQPBrh"
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
