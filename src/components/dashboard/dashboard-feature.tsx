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
    "9YUtEARJLruBswDfUB8MopEjnbwvhWAic9hZ7EY9D7K95cM3vRuJo7PBu3Te3erfKJmorwc19HEs8V98NCHkbYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M9p7WN2s8XVJnFKT72VyvQkex5RQLhPNciKdHQ2MgXvmXVCC9xMErfF5TH6y4RCkgzVfpcrjZd8jiqn6fXknfpz",
  "key1": "mvLMxFfsNf8MuzMseCE46VBPED5gw1EHuUhovcaYPUB6sByHcYPZenYUyTbd4M3fMgPmo9FWPddssDCViMe612d",
  "key2": "my8qqYNST8CZYs4Sx7vwRebEBFcunSkSdFkbCBbofuakATnBqeqHCq7Ada1SrBxi1Kgf3Zr9KRBNFE54hUzujXY",
  "key3": "5xt53gfCXUPVUrJhibGvjACk4fDCVGU41BQd4rgmGA5eei13PSzWrJV7JB65eMib93CRcPB4LRe9Be9NzDcSstAN",
  "key4": "3KpQqTutyYhqkM3k9WGzLHuTsebW6LqqCzZ11V9RYbKnYFQ8xE7Gj5WU5JvAKGxa2UkpBDgtoMyvADqh15K9ev8N",
  "key5": "ua2LNa3JdTULTz4awoEdANyDAUZ1emnnHszTbACHmX3mgyz5ohX1fEGHo1Y61PACjqcSRC1MF4esvT8mJktBHDk",
  "key6": "BWu2bnJPAapgWnk8hpBQUptEmpVKqonrNYyW7NGpPkdFSBJFqq4jmgWGRVwQFoZRYB5nxfFvtZoZTMc5nwWDRcY",
  "key7": "aX48RBRwLLUGvRCbQexKG7WZaUY1eyiSqmRYLpzBdQmykWfVJCKwVrbBofvUsAH6aJJYNuWAyXkiT2VptxSXJMf",
  "key8": "4TnuaPb4LyxfScZ9UWYhUASfUTCe8qGriieMvfQ75P3bU5dj7hPQHEGSdFAFZPoCELKBnkR27xfTEUp8wr2ZdqXn",
  "key9": "5r4cQWbyv4sNFTiomXYGfRBjxaCoKAMGjoEFRebE1P1G9naZMuBVZV2oWWJ5X9xAh4LS3fb2N98bfeRbX9xnB9s",
  "key10": "tboKVaCJgSBV7kCo8v5TbR4obe1S47YtnRA1BhyaBtPb1YyRd72ePwdYfqnYDHcQWLsDnNssu9QMkBnaY8BvfKw",
  "key11": "4o9Kv5kfikpTjbud9o2yn5EhmmNBvRQHHsHN6Zeg8p9bjHQSz97SLD72sQ4tbaVNG4zi2mZy8JGptD4EitKWLwFV",
  "key12": "4E9koxLXaomUtyUiYsuRrxFJhdMXE8b2USYZKqWx51sNR5Ehat85tpoKKCD6vfCUYmce8oTwt1mkYcPGtRSgt9Fv",
  "key13": "2yNRtkRghaU5dR3wmVPWZBxpCB4pUMHED78BjV9FVGh7mjPNPJFTb6iQ1h1JQmWyB8tEKCe6e68rcoqJFBz5C9jt",
  "key14": "4Uwf7KBbhQyn6dxr8xR2aKBsieT5yPkpYM5PtBe6brVfHFbD19HVShKEtSwZSkj12HwvD1PVpBUMgbwKHBQSVTsM",
  "key15": "UJfEKq6DCLaKafYb7J2cKiy9hnKGjkBkAYtbRAPFdzReqxvmjqR2h6f8KXA2S1XkseLysWHGDgST8sSaiCLkbsR",
  "key16": "5bRRks2uxUHYaAbYiHRKnnicZr7wX2KetLg3AueXA43EHa7BpveJxB5bMEGQsNjqX89Rq7hWaUBbqUtwg2ZkX3mq",
  "key17": "3MYAskrXXcuhCHS7uZWD3WFM2TwiyskisN9gKkefwzwYz4yYQSFvXSomvw1AcCxrGq3KT7Vxhcdx4QPMWfCQnWiP",
  "key18": "3D6UyaNypPPEpbQzQcpz2J6NVpJYpR5aDnxhnTPvuS3Gt41UJWTJ1p9ipKTT5QsKY8SGVW16SjJ5BE3jxeGsVDM6",
  "key19": "4UriLjwtMcTdawBMf7vhfELZV6jUYQmuHNetsBwvA7wMGAvtnT1W4ya2ky4FtqL3fJtN17Gh6TS66EmdWupvs4Lc",
  "key20": "4t3uhgD3LTDysJfonXyovp3Lz3kNU9JyZHFCosEvT6KSkk86Yz7wBGPCsosUPKMPS8H8NrF4NhQQCfLSzUrZ2uQd",
  "key21": "2ZRpyBX7cYNMf3rT8MyVujPburqUZyLvaSCHFfLYvZUNKp8MYmSAUWt1dJ5JSHRiPQnt5UTi9hfZm18AfebV1VYr",
  "key22": "2okL5f57T4RgvK9Tb9xZgUU4Wh8FjSbhioCfRu7mHRgPT5W6u7wiUEqUxYhMsh99sPN2Ua6gGdkZHKTKtQb6cTrM",
  "key23": "4CkhmENBrvDpCTefT2gaLDQbMUytdUQs9bUQ73ejGD7cT7WCNzuC67qiTh3A7to6PVQ3MyzACn58FFM39bwodJFw",
  "key24": "2Trn425oVHJh1GZCkECMoCXVSzwMWsa1iP6Dr64sy4y4rrekJR6UgaXk2DEanZExCzAf1ofC5SDaKKUTLoFexhh2",
  "key25": "5LLMZKmnz791vYbZx5xjpLhpvsJzA7ZWuJJn5PJSRouhHFVaKsboU73DQkC5fMAu4xJa4rFzrGgA4iinbNhgpXTp",
  "key26": "5FQbA37W4ugPV29tLXSuYBEJAySvhwFhEJBkQM5xdQiJswvUDdVGJfGPq7ksNTZ8FHp3wzKS91P5LrPnWoFBXEeR",
  "key27": "23jRoghbUxgspnicypQjyRmvXZZP2DVva3zhvZJuT2Jmc5iGyfa4hK4kZ6HTqtaHjfA55jfhw7NANY2kbz1K7Fjo",
  "key28": "5ncQ5emxApSjNZHW5bEafK7U5Gh7ntVK9GTEarAsJeR4wV6itEL3oTRX3A1RR8jGXtXAPfnLxBS41ZN933oGoNjd",
  "key29": "56aZ7b5H62DtJqUJDmYDzZy6HW7W8T7J1bGAEH4RZ51RZmNseyvp3kxDpiCK14u6NJjYTEmgp99M6SZyT6MT48mA",
  "key30": "5RqZcibCLFNZq83eQC9ZgkuqyqRfomyufWArGc73SrrKxXmKghMiU5MzQNdBG5g8E43fw5xxYcn6a3STDSpvGavg"
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
