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
    "3opT3gHjRjRBLUAvazAWDRoLU9Bizp7vMHT2diNi2NhBTDQAEoeMNJjdDbpMrpiLLegpxL968TGg6p5NTWrwJmbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ybuZ77WjuzKDXyKbdod14R22o114XaGZRxVmZomwUcL4MfDmbc3ArMAnXBGzyGfwDpqAFgNY25VkJD2z7Jjz8Hh",
  "key1": "4s2SvLAAxYasGBNVHVAgaG3NsuZkYwpcQxnZ3Z53tSKQywWUpPVoBdaMuKMZ7z5dACjKTpRADuLfAJRzNJHNxPBB",
  "key2": "2zXBcXosS3gVwd7e6BtQf7JfW7MU83nFmwggPTRDs1kJ6Macnq6hias4wTW3SqHHRjNKHrv8HrHmxpWgmMhHB9H4",
  "key3": "51yzoueCsu7B5FKpzVcoo5NFxL5ksd7sVxw8aW6ZPFbV8Z5bpgBMZuc3u7fvDmRvhNpNZJD9LTmzNYUAQumsF1W8",
  "key4": "4HLkhePnKeWzzYvrJvbmPodQ7C1fJvCLDnEBzjHv8PR7rhEfoaK6WUQikKwRnJapcjzZ8LFVMm5aFRYiaN3uDkwX",
  "key5": "CKaccLcT7Mw9JGwhQDFxVhkCvQVoYV5d64viENHsdVobMXZzU8nibUB5gpWNEthMAtRmxvMKvsMcKsLcMSFTjjt",
  "key6": "5J4DzFtfSErCQtLsCRBNLFnXPKJyT7kvm6Eguj9BwTyniCgTcMWeL5UNQSrmPouPixLVioMRf4W1XXuvfe8Hkv1W",
  "key7": "3h1mWeYn9bDM1ACw53LNqEhQLN39j6G2Yh2W6BnQw7YKZqx2AM7NF5BnxQx59UDB2YjUXVSrAzfxgGargTvnCnrH",
  "key8": "27hC4RAzxCy46iv7DUoUfEVz9xgCWTfxf6uzooyVPzr3ngvQC6H5zrosskWaW84NGyzjMrRZqURUsjFMRNHzmeFb",
  "key9": "2HEGMmQb5zvm7g6oKeGkhoAAAGq9FGJSPM3c7xd56cLKWGCaV33iUB6p1KbxBCEC3bcxxj9jZSxTAkEnNWgqyTPm",
  "key10": "5QHUmoRESYU1CXegtUqFn99jMMe2N1yXSNZWbrWBcJJERMcMh413EobeThoo4fogKWyzFmPxtCp1Uf5SjUo8o77W",
  "key11": "2zm771nUzruSgQA74ziPxQVKBFJnwjZKgEK2XymkdvUSJoYx9DjMM2yQki1HPUdX1g9ZT6mCPCHjgMQYr8iKhVDy",
  "key12": "mhciynPTbvKNAnwy5PvRyji1BbpV3xxWreCj4kg7kchiKWAPsE29kDA7unUe6miD8n78QMGN3ETVsfuzQZiJccD",
  "key13": "Zg47Auja85AR2nZsJocKAGSLHLkBEwo7fZW3DHNJrsEK3NuHZDcfmdsjBGpzfzjdKYMR8kiYpwFUG4tbW8GeFUF",
  "key14": "5jGuVdJZFGeSikM2qff5qetiNUxAgZ3qbVJjSjrc3dR2maiGiYHmx6pzL17QfcdhdnipEad3demryNBXtym16jtP",
  "key15": "5wGMmC6grmn4YAkdPX7nYm5xF4KcuaPaeVQbbxqUcD777HyXqREQ5Qdw3XzGXSArDYUEUPxjh97ECL9h1Ab6muzz",
  "key16": "2pCPoKh31p8CHgBuCbYi5LBYF8Mv7XhzYTHV68egLoS8a9u5nspa7SwTeiG8iuiQFtQDaqcxE17hfZa11nYb1DQX",
  "key17": "2vhSdRWZNzA2wyx1gUtfygaiUvG3armCnUdVJuHg2zDuf8fzad7tiJWinePuX6aEsdVX3uZCD52mTjknerheCfRo",
  "key18": "5XGT9nfzyvfCjNDoxr8wKG4pVhkiZXqNsVVyufm1KJ4kbSvnf6a4jPKVitQaEpT7DZ75Nf6Nw7sVkBKEsA3YeqSt",
  "key19": "4JRTdJ3JdgWbGZ7W9WwthvcVvZHcqUaDaa631p5iiNCpxZymHWYgNixqBLG9BQD9bgimXQ8noDbz5ia2RbpAsghv",
  "key20": "3LZ6349K8xJmWRCB8vmtNDSXhaeKaBg1WSXoj2rmRcr6kt6j2iKYXyd5Ei1orhrMq3pHumPivRac3P2caXTsnetN",
  "key21": "f9mpdnNQnTysinLx1ixUVPkX4rH4XbTVY8U2xDL77iF7fAr3NyfhHanJdaC2YdbxSyJYuUjSZoCjHUgys33XHTv",
  "key22": "2wKyidjJqdSTbDvCqewPmeUuCNSFgJsagTAWg1wFHx2P7MEMRcn5mZLQMUGo8Ky3Q8NhpmJk62djRQpNayJj3GSE",
  "key23": "4pMfmXSWE3p6HvAo1BxgqQKGK77LCsPo3Zww2bQHB5U1BzgAd2x1qoKc9oidGy7SJamLvpkHYSRsXFRGSqZPoHyJ",
  "key24": "5ajBgimf1ndEGPQ441q7QcvyDbeHy1NdFjzk4p5dFUaji6u7yFqCGirLFqz8yXFfEytdZuZdCDwxSKFx4UiFv3nu",
  "key25": "35z6HH6abMzTsHbDLnNSHL5wAC5BKNo9CRkshmBmt2KgpexEQKgqy9woLzsHfiWK7PgHb9fzZ6JqorG75YPgamfd",
  "key26": "356xmSXQnTSd12rsZ8powMZc3jsFo46kKB4nRo3d3UBsNPvfkHJHVti9i6TPQmopm2HHifgUCVgMf12JC85LYBMy",
  "key27": "3L1FF7AmbdbrWyFSYhMKito7keYWuctLBtYXGpxsTVV39oSEHVb3bbR71kvTAQH6PwAjga5g1s6BnHD78q56gZLZ",
  "key28": "2BdTUxBpXkLHcH4TTvfNa7WaUpXbRjafZKmt3ywU3vEbdgLquYjVWs15aLLEgGAuDNxnKmRsP4c14rDQM9fyacb6",
  "key29": "2NeaFhn3UQQooy7p55ydvEkKMRBy8WCxb83YHV1pVdqytjRAHGvXdPTZxbfdS9KtZV1C4Ey6h6iaVZUztz7FJChY",
  "key30": "4KdsBJEY2o3JaGxEaBEEJHgS8CNumV98beBsn6HbaeEwEDEsbqNdWo6rJNWFHmxFcTs4CQU8pEMZj5RDZhQTiZLQ"
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
