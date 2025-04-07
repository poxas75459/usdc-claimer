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
    "2cV33iHiCzxfkS2upPzvMC5TEXYgeXha3mcRYfDxGxhaau8eS8wG5qaffooMXwxVh7SD7h7drUHQ97LBiuMRQoDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g8BCDb8dEXm7WBJbMHrtkBFaKGWs2EVRLXE4hRAUH1g8ZBgwWbUEj9QCxg3VZer43T2zP5nZeqrQt1x2X8VtcLr",
  "key1": "3zwCMafmuGo4Tp4Cd5EiZfTAXykqpUEpPue5k7nY2Fq2jiugKmoEmNaBDu6Xy23oKXykFeWrCVUgyc7Gm8KVwxpo",
  "key2": "5cRhsuRrBNjkRTze8YwxKD7dJxgSuonu51vNaycg1qDsbS44WMthms3Yi85Qu4Su3AATsuM7dHk36n1Eo3Ybgevg",
  "key3": "4xxQG5Vwz3dyUW5WmrN4y47HeVDWHpz6hEM9dQLA7KKfQcKHF1xUQeAXiLbVkXUibrxEGVzA4C7vZHfwtjDjoseA",
  "key4": "3sXrZVdUh4Uhh5nfdsLoCuKRP3qBzwZ11bjjrSC5FwwpqFJAx8rJBLDnqdMU9bk6XyQ5rxwrFU1BWaqDDigWD4MB",
  "key5": "3HPi4bEEBXpyD6W1iGBmceZttRCvEaYkmgjHUUeohCvBgEuzpmShgV3t5Fva3jMbCXAttS4bmc5K9fTN41BCNYpu",
  "key6": "5ZEz6uXghjpqZBAdu7Pow8TVLwK5wUcDwzKjymNizUPa1T3gPSDCwv9ujyoaro9Q2JLTmCqVEGLvZWBGgi51qM3m",
  "key7": "2xYy9wheANi3u4gf9yUx26AQrwCtRjWZKzUQHpnMeSJbp7mSQsR1t7wJABGPxmbVLHbJRbCMzXfqeheR6ufsaLrs",
  "key8": "2faZBukgyLbWZEFffhLLzWwub3kqJLXoXCLYENTb6YYwr28pqHUdbedydWDXPnCKToUWeCX2ukHhKnQ3sPujhA7X",
  "key9": "buUtsFF4Ry6zgUNzaSg7NCwXAfu5Q7NJFWuiZJeSg5nhPLNo7BSiCdxgmUzBm7V9LvF88dcvbDDjaSKw1Qe7QDp",
  "key10": "4eDZ8y38CQ78q2kHsuvNJps5yckY1qAeu8T1zjHkFphuieSZPXhz75s4fc9G4ZtcmXHhjrniTF4D2s1tKfPHGD12",
  "key11": "2qkSavRA8rT2bx9CSRM8e3aRi68xChH78K3WRwMC5X213QWsx5dmoQLe8Cat34H4fGKZNkyuSYpadsjY94SvDpsu",
  "key12": "4FRBBrurThLFnc7P3c7jXkAMBFdj7HQ8pNTUnixUzNPZPh5tqDo4ckuJsDZ5s4z4atVBjrfTCH9rRWejKrVJVv6s",
  "key13": "5G2kwmW7PqDm6y9wRtBbYZL5AZeR4vD2wjDfjeybyY2opZ4HA1fobVZGT1p9nyvfCWbzdvW3WLdVzFJR5MoV4KTr",
  "key14": "gy3xqsYSpeuhq5K4mLbh5gh1EYVq7j7KupMa6LxdHCHEYdTKryZuxbMskuyFc5XW2NQ6mrtvkfqQxzBiXa69LEb",
  "key15": "N3Bw9AbfVBNHENzuVPwzRHeJvn8gUeTmMpcyx8cNXewBtEaZeaP8gjz6QoPsVN5xzsnYwNo39HWNWtujbTMkaBC",
  "key16": "2q8bgzk11ghcN8fuwsZZRL9EftwFpVjFrp6ehnYALQPSjpKVvm4YL5pL5ntunyNxG355fgukV6QGvac91BynkVHA",
  "key17": "5DM17pEXvVLVNthYWCxYhog1aQ7pD91FrYkAV9q3ULrj3bGCC9qarAJmep1jMnbMuVjkjdHYxPo38aqYtgqjrGke",
  "key18": "NjcNcg5EUQkT9iwDuSuaWUXKYySoDhRAUy5sdJrPsFyUvtiZZy9a9wicHW8Z7YCe87E5yXSwwZ3VunLL8qseczw",
  "key19": "3kNnrvBPB5iuKqFg23a9xQK85ShfavQpprrqG4xvUaSv4skbK546LehP4eFWGrBfEt8K6kQrSJJG39bXtonUMecG",
  "key20": "4iZzc6nqP6zibEDQcn4dXQLNYvByZQWyo3vL2npM3E1dtCGhuczDoU5mpjhuWZYFEnqyT636JUbchjSKVpUutYbS",
  "key21": "31FSaTsLRmjXH9Fyf6iy6mBSYae1J4JZJua6J67Y27aBFmpxZ8ebVtwe76aEW2mAkfCEWJBDsdiFDWdkAPLcNabs",
  "key22": "5p1unBnNKQREM7CxyWhoVLX722rCxwcJ85vfts34EDyoypCmSAchH4pixXo9zcEYvkcYff6XS3DTbFDX2VVodGx1",
  "key23": "3cqBCyGb9Con1y2DWFE7vg3tCcnY3jXp1YPAjgQ7Yjxj4p6uvGKgSeKkgXQzSm9J1kT9tS697LhbKBmbarVmrVxU",
  "key24": "x2VtJo5a293PW4uGxBKd3R69nhUHP4fMN3VH5hYDwnihRwZv1oZryTE9pTAJSLJxZxEHRvBweBezSzN86XWu7Lz",
  "key25": "4Ep7YTuaGD6KchCHaSPMrijvqHujWhF2p9nmGD3P1rSS6pP499DbASh54mGJZiAbYpFo55uc7Vnyv2r2p2FQZ41a",
  "key26": "4it73kibQmAzRgLP7NvHTp7wFb6rzVvK8q8sr2RUCdiyBSFx5EW4tVTFzgUZBS1WFp8Dm9FD8Hr5XawknKKymNES",
  "key27": "5L4pzRsMpgB9UwJBG7tZ7XxhKshi8Pu7NLGL76YqXQNyC33F2jkRjVyGsKegHeWZorezKNCXwUNSkfNiS7hQ5Ksm",
  "key28": "5d1AAtCy4UQKEFw2GVDBjgaYqfbJAxkht8jNhzkr1JjmKbXpNXSX3cuH8edy9bmmGE4zLtH59DcrCmHoYThCMuD4",
  "key29": "3FCQaxN8Uy3ZixnkBK1Z13YEiiiLYRGbUqKy33wXwvSCGC6YZDBB6D3EKaFQp6o6xYbE7tHcL59jxY9KFmf41euG",
  "key30": "4UEymY6DFVGHPbpAwkZ9GmtK8gDXEorE6s1Wwx7mNjoZokmn2y2v2uiBQZ6EjNFDgGkLDcaU9CxK6jQTbhEDoCiE",
  "key31": "5bjYSJnd9nmc8SrTzuBTbjhS9J1eA4gykDePLkKkqDBvQrB1x1wGfEGxi7SZbnkQt2gyj6tp6c7ZRH6kqWSGJwe8",
  "key32": "26v3a57vW3n3hpAy7GrKZVzRoSD9KJmvj7EoAonPUU398XVcszSfSpCxuWusVfQK29GGXEtFd1UGmdqJzhL4mprn"
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
