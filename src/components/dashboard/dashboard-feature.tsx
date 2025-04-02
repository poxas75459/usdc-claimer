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
    "rsTfXv9SvB75CsAd5s7xuJeFZK9kBhhK8MtiDUMgjm3gL2b4o8KmZfQAa7aa2EVLirRpb2ttr6FpTym8f5Qdxjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AyS8XHkeQW9jyT9fUNB2Jf9vjuczXdUeT2Dk6FwFZaHCQurh3wwhQdyfmo1RE7Ehic9B48K6AsZ5qmvCiog2enD",
  "key1": "dgBgXwM1y6V1jG9sHkyRH9bPFK8JS3L1zCKQDp24VvdD19Aamv6MTmzc67vfZLoskZ2FyvBCEzZKmszGAhKophL",
  "key2": "5BMKPBKWGPEYtYM6RAWFw5fn1JjL5Y7JRRWuYUuYjJnJynePLepH3J9NaCwnMZVX2W1GXgGiuBbhki77xSgFT6Bb",
  "key3": "3pPPLmhGpEv7xJP82YoWd1ECDMwEEzUpTJPiXvdSeQc3VTcV35AR1a9iArrkouUeDQpCxXhXaNkhdh1FfdQg59ED",
  "key4": "V8mMo1gmVEaJJFHQcyupvfD92GLRVUamq4kTWLkYyYC14dmHHRsDq1rr2eZEah1MGzgdYM4yHRnFkTZH43evoBX",
  "key5": "vxrgHAg71V3ipymEP5UGQ6v5Uwc6kvH9pNqsxEKMw4fUaoSetjf1LoTQithe1BsuNagqxSFRMZHPnQbPwpCV6rD",
  "key6": "5NTxcAK9yfjNVr2SkLeRSgpFSyvhuYW8sPS3hSq9ooRGXMNDnCyfTWhXnZ1AFJbX5VdDY4jhR8LKzq6ygGPfpeuL",
  "key7": "4kXzJCte1C743reATmcurCdk89kc9eHgPKay3aRNQJKMeFWNmkkdS1VNt55hMFVeECD2ru12HkS5WsDyu2utjH7R",
  "key8": "2xdAQ8YWkDmCEhhH2Q8RD84vZsvgiL5DYWSM7mN3NfZLAwua4STHfJ58ev4bbUNsVG5a4BXQT3jJP1776g5ARwYn",
  "key9": "4NbjKj2jDvQbjsh1yzXoLuHFc9feuRxXGrVJvppAAZSe23dxKn4ArRNZn6RuX3KtqQoTR2UkqpvgWtswsguA4ADW",
  "key10": "2e6VQExtQYexULrEae8FNVgwYzukouE1RHnni7eQo4EAaGFsGXyKaeNvVTxefSoXvPs8wu7uCZb9Bxd31NPE8xqQ",
  "key11": "2VbUaVNnCHhiScYJJgasqicEYD6MTRwaW9Vpd6fveGKeFnUF4XRu4RLrrouTjdiLX4gDPo7rsEjE6FMv7DXvTXrd",
  "key12": "XQxhZ5Ry2STz4CHpaGGH8c2T5cDTWpk4FfE4N9L75wF4vUUkvxdrz1bU4aot1p65BE3XBwCZruhrhWFjab3sYbv",
  "key13": "2uwQnANDufrHhaYcEfRwKJYEVHfr52cH94GNf8As2KYpfYkJyyE1YLZNAFfnZpuTE146BQyEdEygp8BkiX3vsHrD",
  "key14": "3nQbxYc4fnxaiZJXwJmVLkyRx2RmS7PJd2Xvy6vW8h716fPt4Lv7vzMmWwS6e8t6DTz8ZSvqzHJpFVhSb3rEP3m9",
  "key15": "8ufxB6a7sB6Got37iZQawmSHzDqFimJ6z8RyWxrtVzU8uAmwsCXHaezPWiYjQnvDz1vHikMe5wzUX8tKcGv2rXS",
  "key16": "3AZEG5EuU4u8Y4A8UgwqLVXmK53LkkweTy4GKkRegSgGpPQ9UESZ3UmfdDVj7XcPzSUVmM5eVHiq4RoFE6qEbRYE",
  "key17": "5o3FBU2PvzkSexgYaJUeFhhRKM9rJDEFVNpEJNP8nELGo8ikvEfk1JK2AW6sygFkUucCcNTsoKgK8aZdZQsJzRtX",
  "key18": "43cah1aaUKThTbVep5BAtdNLXi1XDFvEa8hjUkDtb3kLdRSVG9TQKAGgy6GW9wEftDmbZ5UVdT4FyVTMB1s8Lubq",
  "key19": "aFZim1mmSS73M8UPg6VGZAzabMVTCghd42kQJHSSMX1GG7rpQniy49mM2KSuBRwy4ZFgMjzAeeSABGFeNrZafpP",
  "key20": "5RhY9bSpeqY3AFBGQnhuXaLCBdECPG4br9hxDvzufRD9Xfkwip7PeKDn4f2usVDiybcoLHm1gFr7XtvohBirQutg",
  "key21": "57xwm6wpwN2X4Qw1a5QD5XwM3brBFULz9xY7sSoMHrKniduv9M64ji3NdwKCoj5krXTmZi796hkDKfXqRsTbCgbW",
  "key22": "2CWq5by6pkwL5sH8SqvENXpRiZjxiiheLiseq9Dhh3EeQkWuCNzHG3CYFUAQ4stA88e1Rfvk6A3PMoqRgbTkLhpz",
  "key23": "2wGRMS24tb769bHz2BvQQmAgtfDnqhqXBckVuVtkeutik9q1qY6c378TP4LXALHUSskPxbrW5Ea5Fb4fovpPLYjx",
  "key24": "5dJnvquu9EBMjGPDJtsgL6XHQQ4tSbbRAdjvx1RXdJRjrFXLZYGMawsm97u6fasf4TUNGQDpKjCUCvixtEbns8w7",
  "key25": "5RMG6DCWEj7ZSHmn2gfdkrxdSAnqpJzkUq7ELbLrhToo1B69CrdXVeUCRzqYdzsnhQy9braDUrxpPuMUJRRyuAyP",
  "key26": "3HLSkJsPqmX5q5qxq8LToncKeGPueBQvBSHXcfgCoYUVGuhBnynacdzPGUaPzndA3Q85TMBb78nXJL4GjH8fF2yr",
  "key27": "4RX6YkiBpo1HARhaPF9hXASBCo2cTh18HPG9ThhHU8G4xxPM6Adeu29Num1RFTZCBiW11sfavw2WxbAKLdCde5ak",
  "key28": "4oNEaWHvUztNKz83di2TfKqVXx2ibMcqfevSWbvE7hnCZsHBZWd2n5XSQBBphMcU9bbTHvJRSsUhgVvmnvzXvR3y",
  "key29": "5NU9S3AhAHEeXPf7QuuagYJGgGq9JQzNNtHP6QopdfXG3rLhGpdRxSDRvDvqHpQhDQwkTGWXcchhfFeoKk1xBWyu",
  "key30": "2FuTqUctThNpmeUZ69kfEcyPZxs8UC4ZyGAC1rRHYfWif8skhxZt4gzdXxPVE8Fe2vYHLXpcw6pBE6dhSH8AEYMU",
  "key31": "26XLRTjR5cktC9H4uxypNDtMveeJVETDYyhWaqGtdwGZy8KhBmeoM5rTE9GypUgW4EdLAQ2nmXd7vVPzjMsGLGFf",
  "key32": "4wrS9ymEYX9c749FijxCzzGLfj7boqEtPk8A8fFVLTYVpwwbQF3EDyxYZVKb6d7tJZd7uV5aJxJ4BwEch6L5auJR",
  "key33": "2CYJAqHiQJ3kMT4pLQMVbkFHE4Yq1sXSQrWtgtH6kzrnhjzyo7aV8zMSjrYPhn6n3iWtFyx1xu4kBFmNtL8GubTp",
  "key34": "5Aj4hK7W8YygEJKeyW3tZAmpytFnpK5XQeRrcjvVdpPDEF2aiSRKyd1J7ziWukEYd8gKAn5fMcQswavWsH9UwV28",
  "key35": "5MzZBzARuAMBShFQGAvA4AD13Y8135fy7fZJT57HbJjMPCh2jKM3HskbLEBsqwX49mjmdRd1H7DWbMn4rtvpf4n",
  "key36": "2S18SBnP9YQnArjsoeJnGMHgKdWhbFjSYRZoqh1byoXetnzvdFNgG68fHRoXcu4tyZUnpRjYY26v7ZZiaBtf6gvJ",
  "key37": "4wHE5rUb8o6NrMqw75QDXpMw36SLNUadJkLC76G64XMN2X1VdZ3ESFqynxymYQiETVM9gTfWP5wFKULLBBDUhNU4",
  "key38": "2MmKL9eQXrcWbQwRPrYhFpEWuyPSwGrpd6tLsTw1D9F8cDSK9Q7pMGV5tsPKXUqBbUWcZ8QMMT6TmnBUUkg1EF5Z",
  "key39": "2EcuwdDAeMu26zqyPcG35oKDdW9bPXVwWf9WDq5XXKyYFMrjPYvnLeZeRqfefx4GM1a8AFY3iAwN78F6WrjLoUoY",
  "key40": "5hNmi9C9VtmtRR5MDnPsfvzSZVSMgEySsp4HVZkiuB9ZNpZMCsZrFq1ygHH7QxQNfiMuxKQAnVApkrtR7fMWHuZt",
  "key41": "3JrMKm7DH213ajtqV37Etf3L4dEzutbLmUDavTtkBSABkUnRHi5X4DqMu3wuF4LQ6R8SxeivN7DCqsx7hzNo1AmD"
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
