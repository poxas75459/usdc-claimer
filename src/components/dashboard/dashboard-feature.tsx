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
    "2mbD2PZ58L57TCf2DsVBGo1kv2ttG3nGMU4TWDwfihSbgGRSsbY7eZMY4NaLBFaTceT3zeo48PF4vYESHQTSSAwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RA96qBE9aUxHCb6ivnqfXpj8Acbu7JzysuY7jgBhbcTGdACwTpwGf4g65pxjDu2f8ys6FDyTvAXB8DwfQYjfKQC",
  "key1": "5tekvpPkeRzzAbdmGYfFuLKcNu9P1xYtTfyRFs2QaURsEz7pM66g5VKLKTi6ZXFJPqRQ7H5exN6GVmfer2tJcrHW",
  "key2": "AB6g4fg2TgJVuwa99ya4UPVVNdAi2gAHh9nuax7x3XrA7eJhe3pN6rgRDWznBaTK3hEbn44MYxZoVRHpCZ92sey",
  "key3": "548JMdzCc4roVG7f3nn99Qz4bk3yA3nynvVoidJxKAYFg9t3bRs9vPXc4w2KG3cAFiRvNLzQi671zMVch31P6mKs",
  "key4": "5gu1QxuTNn9kjW9SCNk8cKe1B7Khwhb6AUSRLnwA2jmbZp5Vm6DX7wGsqM3fwSMfPMvjdCTuGj5KcgiNSCQ2HJjK",
  "key5": "4xGLL2fgZoDiJRLd4n6CmbETAYPfchYh6L9inoonkQrdU1T9WrmNY4sPV7dxFsaxUMQNvZ3tFMBfyFeuGyw2jGS6",
  "key6": "3GsQ7HWB9w6YrztKaMhJVECB2W19YYZ8MfVP41xMVsXNTUiCz1rNRBHQzLHR6K5ASJUcwEU7TwqyELBxvLZ9p4gU",
  "key7": "5cu3TTx6XutDFM7A67FA8pz3ubaAX7ecexMhm2qRMoQgwKp4XY2JkbbvQPkPo7LyzUYZE1gutTTB3jWbuN5d6CiE",
  "key8": "c3Ey4AJFbRCAGjyo9G2H1khGZ1FzCfnx4hZbQaPKHefNUwCg9p9azqMumeEhcsr218QW5MfMmubYXMSXZTJtxZs",
  "key9": "3GyB6i33b2k222nutytgapxx3bx3B24ERKjxkTYQuGj9z94nTSfjg2RxqVZic594di8kwM27Bv9JpCbnFXp8BYK1",
  "key10": "4VN6wUWE54Wd2LAGmEdZwcR8PPjnJXwWUXiMxwTFwXNhJoKXZ2RPLb4Aq9xVSpXS3yCXj1skWXwWhQ7iwptBxoib",
  "key11": "UXyJtPbrCpgKJnkiQRwynLKFzhxTHah5VLfKs6qDwb1PtUsJJ5UuGf4HgNHTQpYRkQ44Ygd57vKNsxCZafuKWCS",
  "key12": "5iqS6ufyqcSBZPY1BoyhAgGCLdJWMzzn7oCXqtLziGwv2ydicWX2W78JNkC8HgR1dkua3MqEQ32GEPadSF7ryU6Q",
  "key13": "4sDHCG2qXdpFJPt2pboKym6QxXcM3vBCPrhjFnSxGerBBTPetSbfy8jVEeZTeRk3HRatmwmmxmL8CX95s7siPCYo",
  "key14": "CdY5SXxsJzTd8ja5YuquwGCEqyCJTFDXR4Q3r6ovnrBB53pYcN5CLvGkgWT8PGX62M1xsdtrZH8nq5aj2VxxkmS",
  "key15": "4oHxq1Mhs8gjMwq423xc7MCgZ96gwbdTCwm9jmKm431761paVv3qq8CHsLTPKstNPkmbi1Tiu1oNaFmWnPDhzb2x",
  "key16": "36dDUzAF6ewEBvTcBZy92azVbHi4wG6t4cQzigG2LZeyBDx9FbLDPZsWyisnjACg5dkBYnKitYjproNLcdVdPhUL",
  "key17": "5Zx4ATDanxuQWua23qD8UnL6zsMQ76rhwsuPfpBajkk3vggWoaFujLateyFXEtv5vnBRS6N1ETpKH15FjLbfzZqd",
  "key18": "5jyaKhd6idsS82fbuic3uRUPQ2NNEEptshz9ZVULfvq86R4epNzzjrT9rP8vxtYf8feVcPH1mczm2641SGSmnNvh",
  "key19": "5T4YuGdJ97PpJ6HM2YzrvGRmM8uC4pdD8M9fPucycsbJFDTieW6UmWLbt3uSoKHcVaH8VCr36BLc8kEqK52yDYSn",
  "key20": "4PXkLjK7ciLQpt2o4ZuPt7yMVNuw8F4LuzDkHXu3ivNKyyNFgvg6mESFtG3uxAUgfpWUD4bAEX8EMvLAyBJqj8JR",
  "key21": "pSsFKGhRcX1RkQf1i9RiDHkvCn2pHt92bMC2DXQ5aU77SAH6A3Z2jEXPDiGPymj1FMYcVJAYuPsYrXm7R3s5KnL",
  "key22": "cRzBMAC5oDG17r9Fco2xbgYBAjj3SwrDmBZBEy1QnvJ9WQjYhxxB2iyk7cUw3oZdhSfAVYL1LKGxqL8cV4WuqJ9",
  "key23": "uqHfzaEwMWytTqFsn6FY635A6qmEyW5Af1WpxiPrB5MyoFsNuFfpc3CwV8VsL2hqmohrDWjoaA1nEBxEKDtzzth",
  "key24": "4HjmPjGi777YBkCfXrG7xE6Ap7G9xuzoGiC68uZrPAAPpTpfTgj6kxk2gKkBgFynt6j5QYQHcobvr1dUuuYXhvqM",
  "key25": "2b1TbnwcJLo59JxbPoP9oVpRbzg9BZ1gwX8PibMgokc8WR8oDN5gVUgThCZDBf8oftSbo2UxNoowUw3QgyTX6oix",
  "key26": "4qmJAgcdbSZwcNe67kAaScihDi879rVa9nPoatQhavN7pxyWUDfQCZxScHcXHwzC34sjeFMBjAaBDrTaHafSoP1X",
  "key27": "4qBWNoRNY28HBxstAJbmfwW4MGmpTwY7oxWRY6DMs62yGmcGJ8gKEjGh5c9QiQqcj7RDw3Ye1MC9SdZUQ5Ngc7si",
  "key28": "35EpEdHYtfVLfSmbETMnGppoCWyao33RLQtthgya3NRkRLpnhBMUPNTk42qXVVjNCDDfzmeqGkM3DriDYQTKuUfR",
  "key29": "5Nm6e9bLM7GkvPLrZnihnUhiQSdeJ6jVPZjdue8KxhWr65kESFNxftFqQVowYforqgYSE9u4B4ZGMj4n4B2GSc79",
  "key30": "4b7SnC22frgui2G3jxDXwDaAkVnyzTi9DEFbg6jWdwit6m68vt9XxpkTCbGZ5jCyabeEQP3J4qmhp5Vdd7ttXwFD",
  "key31": "V6vWQ4xZiSTr6JbpMA2cZTp1hQcDDNaznj31YXkiskVFL3FwqNgkEQMR2k5VfSmcNBNMqxeiiCeVrvtw9P5CmQV",
  "key32": "2n4Jr2JLiSZjPk5j1sxsLzMwwLrWis1Cz2RmXpJ3uVVsziK2TetaSefHxivMHnucPiaXCsAuiWDF5KgsPsf1kWRN",
  "key33": "3cpKWFjUmY42kw8Pfe7NkrXY914YtSuETsobyvsZ5gjqa3yiMcdPE2DhcRWLWSLeRNDsBw9PsEA9x1qYBWpi3BGc",
  "key34": "27p5rP6osq5pq97xeDiQdZoponTGAGBHwvxcXYSGT44preBcZUKJgCFD6NsjEA28KvjRPWGgExgq1quD6VoGUfGt",
  "key35": "4fB9v2stD452RZdskh6v7qxkztPsgaMvPimbVks2frsGfuw3SeK4yeFBVeJy5qU7iKw537Q2NJUT5bRdTET9PfFf",
  "key36": "3eZUJnU2c5KxjfnMZLjGVHbuapKkBVVHaMFuN5XiMj1cNMRvfcuttzctcLkuAZVpyfFUR335oSv3HwQ1cMkqhgBR",
  "key37": "tDYzwfFrACwhhuMLsQo2cg8jrWndeBnky8C6LGcoCyGCdfWukL4VvZgyezrnuC4M6irWS2rux71UNCWFDoBEQjz",
  "key38": "4frFkiE6MteMu4EihRHzoHgi5Lfp1hmUwvVKgs5TSgcEtceC3SGtBpTLXgRM2ksRwHrm9XqqM7BiKJS3VWtZNXWT",
  "key39": "2ncP35VN9LewzvfA3DCdPnoXweiLqKfdzAhjRuUbYmVDpD5sWU8SQbaT8jSnfTvbEWPJNvWeDdUcUcXRWr6MGDyy",
  "key40": "56dpBpeovZUQgst5YREKpJ2Q1q9EpS5c5HdtwtBA1uBJUu9uqbRrKPszW7PqFqmCM9WdR8QWHvSsbaQQnzTa3mp4"
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
