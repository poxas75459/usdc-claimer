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
    "2LfY4gJ2bAMpeEinJMw71bB6uMJ3ghxBThMgkgAcCaktjBQwncW2HA9aT3nzzxryfeKZcJkPF6435c3zTngipZvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s3fEZkertFGLS1AFnu7HeAWdJt66EhdjmWTe8UmmksEqyebDbzXSJJ5bSJD7CiVgcSwLDrjvRLQH2p7jH6DaoFv",
  "key1": "3EFEVjKPfPpm9gFmBq4pYidRvfnWhgXhCNGSsfbY71Cc1oHkuEmtNEyEC6rwThEp1KBbL7cjFyFB2Fk66dkrqjFs",
  "key2": "2AaypNQoG4KFaLnE5bN8TJJmxabHuSkM5qPU4bVgp6Zp2jCAhWW5VPf6KLZ1BPuY42iyzBBX8Wtu3ksC49yvKsh8",
  "key3": "5qqf9ZYjkzujzCCZ1cGnB2Gw35B1ZUdGerrfGG4jRHPE7LExqckM66t6sXYtsA6nuFqNfUUZ5gmu7t8JWoMT3aVL",
  "key4": "3DULvZyjocz6yc5KH8go3Eix8DKsSHGk2yF9dFCrDNSBje59vKxhqDx9omcgi9Swxcu54yFDTr6vzyodfD5AZ11J",
  "key5": "5t8eHZaXCoSHjsVr2HCiqx3PFMKwPwK7occYt8rgS2L5aYQgFyCJxLG1z5we8TUYb54prMGjuFqxveQfRTLoZWj6",
  "key6": "3hH5nVvQVQSyDB32pX78VG8zi2D164cS73EcZsZaDArkp2eDyK1FE7A8AbCLcHSJJ61tUtKxquAwP75uCLYGRz1P",
  "key7": "3yp8RBfusVrEjPrzk2qjepSdxCeQwcwPzFw7ZFDrbYGdEG9jqR7GnapaSnSR1bQXZ6Ag78vTE6Xt6RAmCDhGnHju",
  "key8": "3Qt6SQDd19rzvs7UGGApqzY2UDNuvqUtXxCxCNmgXqoMviGZpBXbuPP8EkoaqinVpqGdBsMD3Mikrzc9fu4qntjR",
  "key9": "2QC8FTJe5QQDc9dKeEhzmRycFRJte615YHtJPBrRCwMEvUCgik1HoQZ7Z6H2mKVQXBwxvc2XL5JNKwbXcFgbajNo",
  "key10": "HdH48p6hv5y7Czbb1Lv7E2ACDsjpRkWeEFpt8mjAd1pxuwuS3YFKsWhZPYXPFHkj1MaX1RqKcXVd9ETBJN3VwMX",
  "key11": "4bjs4VHsS6Gd5hXUfyQfLgCNr38zzSXppBPhGRgJ5JYKybtQRRKeBCLgxC1k9EPuzJYmTfPgHadARTsZAj9Ynh3",
  "key12": "4mCwzY7QwVi59Mx11wy1yyPmNpBzpukUGCkvsXyqrSoNgDRTcpGPruZdnCcd2156HxmgY7vjcdfw5ywEwuqM99mK",
  "key13": "3yLFgUJnR87zhyh22gDLqX3xwfnzcBP6jEUtoVf6R3xTpC2Jq9dAs7RxQo1Ep5nW7nBRt8Bm2QEiiYf1kY9dfZhL",
  "key14": "3WzWCKQPFEQh2GGrS4v5NpSPetFtfC8iezWDEXFamzyW6n5CJudocLJ4NNjZg9n2jNa1GNmpZHM815VdUqEVGa4H",
  "key15": "JBWsC3zNY1MDtaqBWTWyjtRFeU5gjiD16f22neSxPmC59CDPV36gDsBpxNYv69eTcmR9A9GT8vn1BAs1r5467oM",
  "key16": "2SZ6wKzD1hyRck83rSnARCa34Qw1aH6vswffmSdsyvPQnQ6wLWjaGC9HG49q27GFYqKVSuSWLxNKb4G59MBeq3E7",
  "key17": "2j361Hzug7pVhipVYBTpWor9sTMzWpr7RfQzPzQVnpRXBStViMi7tJuiZBGwFvRy4wbgzxBsyKU8hrdG8kYZCs3r",
  "key18": "2CTigM6X4YqZkfCbsnuqHfTW458vwdLcoXhNvvipEckPMfnjWCdrzcKpEqAeyuLUucXDjrrnKguxWn5xrvRCw29C",
  "key19": "5iGvV4pLq81huQuPtn6Yw3cR2ua8szbuq4zVbDh5Z5KsQ6N3egf5FRmAooGHCmc62f6NkhA53WdMad29K4HMdCbi",
  "key20": "ik729Rijf6deP334oAF2ZDu5CudtPtPoRVomRFoto8NPJLcZo9PbwumVFQPDpnBugLGNwkSBmY8fChpbmepwjJM",
  "key21": "SxyYruscNHUPTqwYa64ubZ1toeyPKBNyGqKjHphy3LSTQMrKzJRQPNy4cJ9kiFSKmx6UA8rkznCN7hJ7LqqnzSP",
  "key22": "2X4DU72g2U8hk8q88NcQ8C5WaQQL5AgTUstdgT6spaUmZUnroa5sMM5Rikvp35vt5r6WgPsennwJGemeXeoigAmS",
  "key23": "2Ugvm7WqqB6QAmBHFGpMR39fBrp4rV4tsAgKWcXgwAweVvAfJrfPsmEtADUTCSeeHCLRV8qkTmrkJJxu2yQKPKAB",
  "key24": "2dvJYM9zkeNz65j7yxvznyFnzizzJgkWxtkp824HPts8Yv7GqUDJQgynDdr7YGAs8fKvmQWy1MDUE9zKVQvBySek",
  "key25": "4mnVjFkt8rDPEkFhFEycqzghU1H2r2msuMGNWdBcTvptUArnSefPtG7te2cr49XbwjohnvRzPsudEPSetHFUvVWS",
  "key26": "2nAM3oK9rn3ucov4yQQXxhEp62fWTZKFmfAM3JnHbLY74NpBmZ23n1pqd1Kp5M57L96p1itNjaHubrwwdXvewgdi",
  "key27": "3ATDsPZmRLrpMFDWLzHMLasmnsFmKB4URYgEqXvXSV1HZpxNJT1ADFixAwymaTwE6ToiEoBegdhbkEwGeHWyp2jq",
  "key28": "5FbGaW1tLu23h4r5UrUyeTLRi7bwure98MwDvMUGkMunfrj1aoQ61p3rtSwwmAtHiU1ksKh3aMP6a4GycfTxNtUG"
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
