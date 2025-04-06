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
    "5mQhyXrY2ereAqJMremtvpdMQnwmENf9m7tKvWguc38iZwYhoismDNT9r5CAbKtWvu4vg8FAznacpHwfSTKXgC9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SgSLjV5U5q8ZccV4AFb9CsqSRoBS7FpnifJMxuP2LsyFWH8awmueyU3S3cEtuBCkvHbbcWpnNiDwPu6svspFsrG",
  "key1": "2ZXv6AZDj9PEiuCug1iJ7MxtqjpsKDYy3VKVqJDqwcVcgwd3wggxSZzgCxJmD6ixBTgQ8Kc6skfax9zYcWYvjkAp",
  "key2": "Rca3dMu1UXUCvDChFu4Ljs4SLVz2ywbJcC6td8Rhvbe7WeJoH7pjsuw1RbfSGCctTb24BfEgksUrEVH2Pp5YfcQ",
  "key3": "J4EdYkv87HyHCrmCVLDyx3HjKz4DeqwYbEwGAfZcWDnEaAtNFgTGzJDuYAkwMucirG9vHDVNZkMMGfuY4XxVTQb",
  "key4": "3sSLVqsA9yU7k729TpTNpL2PbXSXYxCarVjE5jfx3QibLjpnTgyQ57vZKBENjGjwgajsPyGxAkgHi49oQRr98tiE",
  "key5": "4Fpfs1dVvmMyxia3ENfbusgbSu4xsQdvLQPLiKttaff7917qwwh5VNTKuvbuiqa5PYWAdCfz9294VCpDPXyp2HFg",
  "key6": "4YuwJysJSMJrz9C8odyYgDNpsh5TJdUfUyWsGNS3dAdY2hiWxEeMAue1utdrNWNkWTSSmZ29ddYzaj5enM3xnDCm",
  "key7": "3FGTu2Uwx2A7JjufU2c8jkApm8emfjSe5Z26facirJpbBXxsAGJGbswWUfEU6ge5R7pULjFDDdSeemMdEkPzSrmH",
  "key8": "Lnsip8Vi8AZJb2wHJA3YK2SMtT8US9f3cxkVWudeoCh1wU6RdUggocsXPPt9oKLmW8LRwGcSsLEkJqmo9HmnN4X",
  "key9": "28uGUqTN6EbBuukAEL3DPwovMtTaactkcbpUsZZJHZme7TxohKxPbfWHNGpoqaRVVBSEztiLdYuyC869vJKTbNHk",
  "key10": "5TRf4awC22JyGD2AjyhDL9RU6buqr6Wqa7B6h7VYeQWqdqHFDTpWFhHAuSTVwiwnMBnRipn31TgGuwFM12b6dxSL",
  "key11": "2CeKwnayduuGNdRHwwW8dtsJ1PJ5eVR2TtBX2RU7HV74Haf4492iitL9fVXnM7apMiq7H8wnP8zcDXn8ebW6cy98",
  "key12": "2YMnVdJZ3TJgWutFwzx8ZaHM88hoqxSzLWMLpirnZUigPewkfBX9it1KevNp5pGrfxiiqQi1npJA7wXqfwBow4Ar",
  "key13": "zwBeyoSbr1Ah1mDDAmmBAHLhV4rghoHbyH679gT662GSyoS3GUp8MHA29kvzu8FSG2cHCsW2TRdfD1MeaioyK7B",
  "key14": "4keJcFNE29H2r4wrTe2M9p8evVZxEddJHUPpJ4JauJ3mq8eZke133W2WbuTJmPc2M7DGpJyZ8GwsKXCKnUjvCeVN",
  "key15": "2TiSqnCF4dixxGaXkUW2knkgY9nJGfyPh71aMRRUnjpqBrUNB7HQpDSXNT1quwCaRY8vAG1J9GHesKtejkZ1vGAT",
  "key16": "3ZAtTVUgQiBawjA8v5Ht1ksT7XyqeooxQYTCcCgLbbj4hf7Rxbo2kzeb4qeRd5Md8kCTXcHeWshQ5BQ1PPQHACv3",
  "key17": "kA5T5tgQ8GhAUyh4UetPcKGru3DKGDPmDVy84YautRwmQAfVcGgaXA2f1DpCjXvWa4hxuMY7RTRuiWKbi4Psspv",
  "key18": "2c6SZDEQioWSYPR7HsdD9oqshtBfL1r2LrWwYDcGR4SSXHe8p81fv9ZgDquzxSw2pQMqLFCLeKZpNgCv9AkD6HmY",
  "key19": "66rd1dqkhpxHuDjXcknt5pKojstDF41me7Na8d8TeBNqFn6f6E3jE3eKagdWhiQapNJRmyuFHWuy5PjPBTjqyauP",
  "key20": "2kLQQsTEemTsNUe5nM8DbNsffJs18FNsZWnjbdxa2vjHr3pZSLcbrjYGfSayDrK1S5aqV95TCu4XEQWeUTArceuN",
  "key21": "v42togsy6acj6HAAst3LVBd9jvE8c7p76u41YNf7ttuvRixYDU5vDgzdax6baXhQNYkbsVHd7zuP9pqYZUPC1Qz",
  "key22": "c1QjvkrzmcaxgugidnwzFqcMBWUPH1sbYCdDUSmpEN8KgzvP3NjLnstkhMNJV2an2X5FzHZKnjz6gXv8MMFpDmp",
  "key23": "3Sn59k2svE5VbfrQFMB7CAon8q7Y53AY8f9aFtZ2kt4x65WWxkzNsD9BKEThdjyCe2P3G4Bkktd48ndugcFL2GNN",
  "key24": "5nQdx4BQcsTmz2nvk1Jdxisb59H5YHH2hGDMqVKkmhKxvxEn8gAzCLEnKmhEhx8TekxPXa5rJNEcpdXDycXwpXaP",
  "key25": "5b9t3J7y66rdDmV1oScxTvW1b9Two15JnV6a6ze1g4KLRSS8ZsfwcqzYENx3erSZHCUZdFmwcFNctjxwbe6yyzZ6",
  "key26": "5LCkRNFi1ZhFjZ8oC3SyNk5P3f1sEtVrrHQWGm72Lv97TcLybPnc3Hc2b7xXQtWQMo6detVRxsDjSbBZv5LesH88",
  "key27": "36jRzLpFHLnjPeuxvxzG7Bw3TJ6idpnRRWpWRhDCksRpuUta5BcxLvDvU3k7oJzkaz4DWAQMekRN25EEQ7GvGeYF",
  "key28": "3ceExG4yxUr7oAf7d2z7ejJ5tDuM9p3G9sWxfvySqWrmvHQR1uLxP9nAphWWrxeniMvY5df5SBgAqC6VqM13juGA",
  "key29": "x1YHawxw1DySQKv7YPtFSq6L5K5UGFNC2f9UZ4VNEF7qkW68369dCZUVL1pCsUmfAWPwpbyTJZuzg4xkBV7ahbv",
  "key30": "3D3KJBHYwrPcJYJj7ky3Bu1M3kQkPCrCPjLc4G4QVik9CbzQJFTfW6kKYKoWKn1nYkYpRaoixgyPk23tG3vDByZ8",
  "key31": "5nwoAHzBkeFTFKxJJxRdaD9wWpucDSGiEHCGHQJnNbgAHZHz8x17xDmTnqJYRDUykWXUQ9KWKDk7pHnGuxUrRmeh",
  "key32": "2Xiw1qKwqWf3Ks21XD635rBf1hQg3cKoRzGKcWhhLnxNP1inZBFxPHyDqvigYSuJ7hePRLK3pzkdzAqvkRUTvB1M",
  "key33": "4E1ctoWRbkk3R6LFdTYz77U4seb83oy7njKzSXWYMp9CtPZseHpY7QGBUVNzk2LzWphL9tRCJLL5Ee5HSdQXdsd2",
  "key34": "5HLc5tNDPAyZ2EmuAmw9jhD1uKn1qts3KvkYUTYQDrvsNtp5Je3p4vvJJpHNLC851HUyKmCNYDc2m75Jcop8p5Mj"
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
