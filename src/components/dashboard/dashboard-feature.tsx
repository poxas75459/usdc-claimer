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
    "3SMvvgQqR6Lsc6LrTdNk28nVRPyemDa7cLRP4dr1QGtAKcYac9QCu7asdo6LgLfodcFBEFPAbe3rRFA2MtS8x7oD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oP52NAVZ9QgPzpt3kaNqjMT9fxsT476HdcibcxzfxtoaUg5aiDhGYZjNPMXwTDm5buUSvK4gB7jRhBcwJNbbYZy",
  "key1": "2hEfwCYVwCroD34CxgA1u95LGAbfJ2SELoxspMBQxQWnePmkEzc5Fp5qS46YmXqZdWGcJnBdVSiFLntuf4kLBMdK",
  "key2": "4n3k41cAhYXy7bVmDQ7ebpK3Qrqtu2TzV6sxhxaezjrCvYZaguhkRCRcF39Cf1TG7UrDL3syjNi9kP79ywRWLt47",
  "key3": "3dPbu6KGsTfSsxXw1J5cnNa6P5TYK39hberadGYbwnFtdZ3UYXvDPwAwJv3c536jQ8HTJdAxKHvzyGcbK9QnQeNE",
  "key4": "42nKAYcsXTPd5i7JonpEQGDVX7V7E4QTRj7JE66go314TZAWEsTQy7K87DVbxoDyus69YLYdCsJCebGiCwVgsXE4",
  "key5": "htd1R6DgbuTbaN4cPBHxWjz81Zrh5mQa47qwMfqpRTXwuzFUqQXgUhei37MQJ3u3gcaASpSZQ3j75HUqqMWmmvK",
  "key6": "4GGHipY2QhceCdwW8LLpZcpPMPfJ2dK1q1AkP3wUFd2eJTgYhGZNtToFrQbT1DdUZxVMXByLijvocEHzpV1nbvAy",
  "key7": "2N3WUMYLLMbB2bDdRhe12dbTNrQUvMMXJEMuC8gC25nihqNgBTBzv2vM6u4JHD9KetcSS5Cwz7ff3R2M1CWFBrWE",
  "key8": "5wZGpXr5wcvZZ4mgsMaaEofVF5pCoDQEM4wdS4hKw8m8az3QdCqDVDoWzgsMgnvkUZKpAVqFpPEj5BdtkNxPEUHE",
  "key9": "4rt8R3Bt2JqnmQQqqceXjcBgNH5nVsXzMxA9DV6iKUnnsXm8dPQUcnuMPjeSyfgJaAXbKqkfBetfdTzQg6QJiWYW",
  "key10": "5Mn8zFosyohmWUe3hEtzmhPUtN61kAgVp2QA2XqEKAKVv2V6DQqewcqxEW9HBKMB3qMH9r3ZkNnHYLw3m4LnqnAS",
  "key11": "dy2TxLVLHjFAEbSAZSbVucgvQKcqkCrHqux5xiyJV8BC1p1JQRZemFbkAXgRtoiEv74e7qvXvpC6k9kUGQhBmQN",
  "key12": "5vVimqZkEvfxEf6EfCZ1tccFUzU55dQCpMoVCAGbddVizASGA9iUaKeXJejgf8Ez53kKh7d2NRKfrUuoJQwmGrv8",
  "key13": "4LQ5hFS2nSRmT4CbaRvbzEfzw5Q16rScY5Psu4mX7wZbDkNFPowYnM69gJy4WBiC5w76ZQQXUJ7B82X9gwU2BhqN",
  "key14": "2Scrb6rodBHLwL91ALT8vvMoz78PjGAhBPFQRV9paARYPN57ACCU9p9JoXbRkmjnszHZA2bXSCguBhKmc6wLoqvz",
  "key15": "gRzhUGNawNdnUrU9SxHDE8nYkar89cns3UEk2BXWvK4amgoTSrYLdi1x4PxKYPJUVyvUVvedSP7FRZbVV6eeFrL",
  "key16": "2mwSp5LnsLXLonmTtaPzXQZ8rB8FJRjF3LtZwxcsMd6XyMiMsw6bid4NXqYZMjyXJyiC4D3smko6eUD3v5UnkGz6",
  "key17": "BWvWuZiii8J5fFg9AvFA8ggdtACdzhLBoNvriEPDNs4M1U2rKEk8GcJo3cdSfgBkHRTmoDKKJ3XCM9uWMoeSkuQ",
  "key18": "RWJD89hNTJJDKJ7jTBS7x5wDB3NpWn4Wih6Jn1E4EbJnGAgE6fPyR1W1LGmKLrEhDHm377hcFBYm6rSyWKzksEA",
  "key19": "4jTZ9vAAG7LhMnVCRszG599NStMBBXUvZAEzKam7yRosc3DH1hxdWECGSFP9DL3BbWtugBHGhDLBtjuToypTTpJK",
  "key20": "3NFy4KDjmQUMQpH3EQPLkaLnTFAE3GtS8jPb4e7JmgnPStAWoMsXrCeQ1QQS7tMbMML6JvnZZJT4rPiABYBbpSWk",
  "key21": "437hdZ1y14MK69CEcEtXHDewYVkE8w3dV8E2q1qmVPYDC6zdTRhPx7F6pPCU5v3dzVSCzRZnspXABzSP3F26eX3H",
  "key22": "KjtacRHxmrdBKAbbX5Wt6abU4fB139r1e2Ant5UZZJPbDSoY2H6K8scDRVRVbNKB2UidaYbBnGhChaeyZsXw6tu",
  "key23": "433b6k9xsYQ3ygrUaw9NCX19LCgAkF9REJcbebXhd2dKj8aKLufw5iRwPeVhY28HLo6WZm7P6XW1WLJELnQXoLk",
  "key24": "4z4yNStXxfoK66gezRWCRm42zufZTkkzHkVeQG2pKjzc6sGMbanytZJJ6aD66ULMigwDbgTca4psBjWzbzzs9KQF",
  "key25": "3kAtBLXdQSmJgMqVWysKkMpwrVcRH744cbDQ5i1zex2gGoV1AHvCCpHcjwAYtibhXzCpxvzqPaEHyTW8GPByCyjZ",
  "key26": "29DJAcneV5ucYQ7zEnexvdmFo3vKR1ajDdBxrCbM9JhvHeaY95QFo2zbzRFevxcMfoZW9HvUAwzsXTXi69WQzuYn",
  "key27": "4yA7bjGKHQnpfNgfC21BCDT3bS8AzkEQyVxTRiwe9JsFLCUsycutkHMcfzy2KgNGQgtQddAQwQNCJBGzqhcaJKqL",
  "key28": "65zVC2F4yfoz58W1TRuwkizcFHAFoKrSMjKaXUQDLPLUyBYzvwXaXfx1R7geD143XHdMMMkhfKVcmqFQwWMKtrj9",
  "key29": "4kwHSW4JobFhP4xDF98Xdmxqrc3TJam5bS2XFa4npaiVpYG7pk81ckiLafBngEZzJYtmGfLHCsYGn84nC78XxMXa",
  "key30": "YHVQ5bHr4hcwXpHXGxq4UULk689bjJgifB7C9jgNgaLn2MuK9wLYqWHFe7iNPAT7Vjud2xZ94SH6gQQV1G1NV31",
  "key31": "2yBiSUJjw4QmxCQ2LWRwD9Qd7dyVT2FJ5Fub9KMeTVqdqPwoBHzGVa6G42JZTciP3ZNJCMG8sYi7XrNeM6f76qD",
  "key32": "baMCMaZFbQTuAFg4ubA2S5dfCWVj97vrLXm26KAeiczH9HqwwRmYDerws7UhpLKpmwgVxSURuM2SXbsRdcfLX8P",
  "key33": "4TjiJ5en5dvfXiWt7S4sQL2Xdk5ajQGjqsuxDLrfZrAKCxALDg2VG2A1fDZACu1qsnXaNfrX8NnRty7nzb7MY4sT",
  "key34": "rQDqAjZU4osEtnq87d6Q3FmYpvaXs9we3ATWb6YcdXeDp1cxHdMiaogCnVF7wpXe5fs2ajPTXMvZou2F2P1MqaF",
  "key35": "2H1mG7HWYYGP4h4cvWKh9p6Sb7c6A3VMxBiYHoKeHmEQyZ7Vwi5xa6cb3irBkiC1c1K1UFXjvXewP2r4AqQuJdwh",
  "key36": "25b3mGmp4VE3m7NHH59uCM5T89kB5Lpwp6oA2Em8BtnecmmGsfDdojvrhK7RGPvgkxampJnJ2jfHE2Gn6eezvPni",
  "key37": "3WV81ymF6HfyP1ZAsgwwB6UtYPeTCeezVebAH8hYJeibLhZbd27jYdaKtJQM56yWCyCn1GJdyUkFJMG44k7eHM7w",
  "key38": "4FJNbNSdCs34erQp9Yrus9CrF3Jw4Dcs8Ra8Jj95gjwZ7nLNfZJc3spRDhdRXWjPXmvF7hDpvUJZj7UDv1Sgtsky",
  "key39": "2Yzjc84cRfhk7nPJcBV5Cvuea2Vmf3RZ9T3B9M894Tqe26bRQvKhSYDadKYUaWDJX49xbgM2x4tHkC1pwHGuzoNq",
  "key40": "5HrhQCbKAHtJnDndUbqrRvx55bBiUJv2f7q6dAoRXNcc4pgrDqKhe6PADJP9uePhxrKiB41BQ4219ZC14CexB4e2",
  "key41": "3USjoVHAYN8qzYXZymsxbDLfBtvMwKT1XzcpuhYMpUa6GDKXiVW1i81oUwdemfPFJicCmo1CuT5dG77TGsCtBQCx",
  "key42": "4pKVfhc6vub2UyTSZSwyDSWKqxmUwhzbo5N8K9s9BQDFqsqwR1FWtGuvTnahMekcVqi15eMvG8imoKQmPaKqE1KM"
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
