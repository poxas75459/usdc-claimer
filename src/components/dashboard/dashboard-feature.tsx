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
    "5SThRnu2Cptz1Vnnv27tecw9ZLyv3SqpiAwHqG5wwY9grtuTWdybTiiozqLaPHj2J5X4UgDYLNyU3LrHeX9YTSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HRn81KjrbtFFxdZamVDSd7dsBdSL9KxuFUHQNxRFJ9p4n6mudZpwxBBwodzKUNdjnu9oLghHWrSZBqfqiH7Uvo",
  "key1": "5vvogtbcoisBUdf61BBv1c1QL25vswP7CZ9pxJuZfEnV6RMWzQEe7pw9qEVh8va6SancUjzBrfuhwGWd8GU3pUhE",
  "key2": "4kf4r4DGkAHNv4zi5NCh4QYgUmf4H36SLyVz4TqUidaKACAkvbNCRREVJMQJs5yUqjtZ7SBq8M62PatCSoCheQux",
  "key3": "5wnmu27U838STuGvEHroKpy3qA2N632A6UrYqvHHepqehdQCqSSd8vzZzcr6j994vmbUiFqcJaKZ6pb3t6Mb5vGu",
  "key4": "3xLhf3h3tSbZpiced4hviNHTxYckM4pkVhU3BuSBA8Zccq9jtS54N1rteKNYYjxiVDA8HKrQmdXyRSMhkZ9TYroA",
  "key5": "rSjHYEADyGcnJh99LUDWvGyP4BvmeTvqLMVsNQBu8sKTc2LjSBFQhAXTkn4gZqtCLJPMmFPuvYUAPYqBceqtvtm",
  "key6": "3DWaSwJgPkPERKsE5tTDLziBiVgXDNiEe3M3jCtVDoW8uLQEGCSxmtzsB9k3juKFva7xJoqoCaqgxYsvhwPPXy27",
  "key7": "3XTVpDNxa4YqeEByDydinG4KPnzhGnSGaYF7vKNRR5kMbLSE6tQ21deVGd7qEdHfBeciEBP5TvQxnCjYzwE8qxoU",
  "key8": "TWzPyDndX2pBbuDu4Pfuk1AaUyf2nvJS71V1PFqe4krA1rtSd9azL99DJQg8yezuf4WTpgFv7AhtwXVoig51Vdt",
  "key9": "3FWp2VadfpfTvZreZKG5avXK5CNXfs1ykMBvvJjmaK5vqoE68NVKL2RGxdai72UZKAXjqRSBxDoQgNPbPYEaHYk1",
  "key10": "9m7Zdg2fwxnuAGgVnSHvnBcrLr5aLcP1ZGKpRcAv6MuQnCcCKoAiKASCR3degojx9b2cj9ZGeUCk5RCmXUcMrtT",
  "key11": "Jyhc2n98xRFKYcpFjRQFcVMH7ffXK1dd44zr4PAxQot4WHveuibNgYtUeRZ1oRLQWhW7dtFtxE8ZFS6ygg44gop",
  "key12": "621FnHZtMKLThd4c46ounUbgUisFdQHDDdH4Y1kthR8ud6ZAhvKP3Lmw3VnpFE4tyWDXHpyLGb6i4ZKKgMqRds42",
  "key13": "JYppeeq9KewkSHKeAZYZCnHwmeRoPXtBntgx1jyka8dWhokKfZtwwcgKN9stFgDtosubq8qq6autF9r4XXdav3G",
  "key14": "2cajHvuXSXdiAJtmvNxmvk1XMGoP9XrCuanmWjCGvJLGZZ8sWB1TbA5ahqP4NfEFuREdvH5LBRkynrcNGYxwA1S6",
  "key15": "S1hCB1nKs1WcwYpVuXQEMnayaChLzPkTKndiRDTtboonKmHc73YEVJ6Q4oPeqRDqYVczZYYoZBVnuwjfSC4NVNV",
  "key16": "3Kyn2wacz9GNKbLyR1zHt8gFkm8rEkYTUoyCvrEssEUXuckTXqEmwZtvaBwRL8TB7xCBa4mUtghpr5ChqgzMghVQ",
  "key17": "63WuYaCBdsNGQRQw7x1nWKUNwdQsC3Sry5KFfRPLoRaBM7x51aHADJcQxLj1CrcnZc7mSykmKTRKGUcdXHwY8pSe",
  "key18": "4avgfp3NNqQ5U4W41pYync4u8hChiu9cFbHUkKZTncu7ESdJV5vHQS6PxHBL9gDrHSTpsJvUkLsPojsikPm9H3Mj",
  "key19": "4B5V12Rep2BrLhfpXQ6jAQM9bH8JxR7cihp6NZcnxQNszdkqA9GMhzBY8ZA5X8UYzp5CzFF3KyMspNJoEtkfWtsq",
  "key20": "3YAL9NHNH2LqkzHYN42aUjNXLonzz6iPx2DyAn8y38c8gp7BksGpziFFC47KSVTZLknaCzdyxkVormjEwJEvaexQ",
  "key21": "4pRksjLtkmXoBH1z5Dt1eWb1bLmGppzGcF3WNbLU7FtopS2VY5aujJKv3W4SstLwXM2ZhA5wnParBF5hxPbSL1j5",
  "key22": "4TtLP4URWiqiNdWncUj3zdQFvPgzKBuWc9DJgYApRk3Djo68d71fpRjN1kUm7G1sJxotUAfxK1gobNde4AvWFX2M",
  "key23": "2wFTG3oiUKZY5z97Hz4FSrMeEakXybziFkQTpNFZMGC7EEPvw8kRnDJurbSXnKoAP1Ru1J8z61jdwWgEVVW9qhcZ",
  "key24": "52xag3SsBWtxfZ2SmcSC9Vrf2NnguNwHcFPub2cKATNM56mt4Su3zR1h5Kv1t2MWE4AGhykwwt4HYiuiRittahJV",
  "key25": "3tgvtU6Ery3opyDodaKMus4WXyg3kkJwkRohchiT7GkE3hNPRd1nMWhdf5srqQqd6QGC9BkKaZu48PKLqUaBhsLZ",
  "key26": "3b7Zm14VuQjKQZfsmkEDT8ik3mEcyunRB3aD853dLz6X7jkeKGXajoMZitSpV55jwLjLjvHLBji3wvzhmew8h26t",
  "key27": "48Kz378AbPooHYxYQoAPs47HMr9A4t5kL25e3Ha73o4mqZWdvypEegFkXokHxSiJo6F6a9KoDJzc5oLvN2CUxZqK",
  "key28": "4k447RAP1E9t2iRt7Tpz1SxowvBFakhohMp43KkcvuCvke4nrSvxZ5hD4JLZgCxjWS8cDtBniNkSByfBwayUk8GK",
  "key29": "5h5TbcWoEVWrmhmxHtYgED3LsK44RRztyjvrwxMbrpFJTTH8zUar6Pygxn1wCZpTY7L2yPSWUziWvZdfV8RujiCT",
  "key30": "5rxcBpULs6MUoyjzC95LZz7XdVM5fNUKwyo3kCT2Xb5gTJ7hYuP6M77LDupmkoqyWerwbZMaT2kHaceV9BcLP16f",
  "key31": "ZmNDrhhf32abCjpDaVQe3Sn2gZLyvLyvQAmgw4PpTRa95LPsTuEA7rCECCKHkuQUaTGzagYfKic1rhgzF1Gqgr4",
  "key32": "8y97NvMygRCeoML3jYA69yLgS2tUrQSjmcMvz9k2jnoSE5vVfzs7jKXJ8KX4PwTa8rvBabieie3dpe3gy6NrTxu",
  "key33": "2ggMTUDKvk2xWRpnsRjbieA9jknK4FLFnQL3szGAx8AqvniCFpNc6an3KEQ9zRtaGmjj1wCLwyAqYncJ6tk64n9k",
  "key34": "RBWqHK2XGsQWXJYpgjH4VWoPmNTt3d6XSK54E4Aj6QBtat5TXeKdfbCVmPDn8T2PpreDFSTvT3jHjNpvnJ47KZ9",
  "key35": "2nj7VEDYyrGaAwt9jne2n1ZCHpHJk8gizuj9dC26jA4ZEySCXAq4GrCp9Ze6i4uqMhoaSjgrogj1Q795xarGR9cp",
  "key36": "3VcvhhNjL9Kjo6Y6DRb5tTABYbDFCpwTdw1hDZJ3jDdXvXYexectBM7egDFimD6qJkq1tTvd2AF97ZFFULWPRyZn",
  "key37": "isX16f5KbrKZwKPkNvjiGuLv8wPSi1of4qFPe6kDsBNhSsWp2ubvnQKE7erUsYu4iGmc13BAeS7ktFXQDXShPLH",
  "key38": "2QzHRXyQC4nBYuDPnjpx34riJM9HGX9XkJhGrSqX9jj2w54hjMdNhRkUucef9NGwva77JYGRqdRWoBktdRmzHoqT",
  "key39": "63SADZdULLnZURXyjseqBYFus86bp9fHFpbi2VNuNuZ5RTKXs9j7Bkp25KZ2nhqqrAm92oqvGbkLC8q6YoJv4iJa",
  "key40": "51zzN7Q1enUDvngxYTMYK1Tx5SQ7L2anfXCYnzmAzvNxaUjbjNshymkaEhLBKr4aUzWBtDUVtk6AfQetwbNyTjrX"
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
