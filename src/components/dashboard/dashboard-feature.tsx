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
    "1EJxBcRUFRUXLEvLDNhpr43fM8Ca9k2FdVn2PLey7mxMnmgMMkrEfwAdCgAVSkdv5EMaLtFda7m9be4YDoffTJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41wE881z2LANbXLmK6Uk7KjdkHCfhWHVo74QG3tv3gqZEEB4ZnTpDSWeMPnJBG5rhDJKpDgCuxBqfWdq2U8BtV5n",
  "key1": "3aEmir6YaBXaTGC7NX9CvzMQfAKNSzBLv8qR7MPug9JQ7YQHjeoUQhWx4kzyFgXngUodx1aZkshDUts4Eio4MULL",
  "key2": "oTarmn189taXdteYwjY6f2aT5TryafjLK9kQyscB2jHdAtYJUjWNSx2SetjRM3qA98xKzMNaLiX96XFK8Ny4uwr",
  "key3": "2zWdBicyZeesgdaQAtjwF3chd8u859eXXAUoeedogVqdrmBj5ZkA4QaSZqCPV11KvVokD4TMdcPiQskMtsVMxgsK",
  "key4": "2s5h8AbaBxgXZkKr3VXUcpAPmCkGudpYj2AcJUXA5E6rQF4oH7vAG6uDuiFEE2RA6M5DJS6ZVVgRGYakeJGBv5VG",
  "key5": "2ZuLUizZu4ya4VZDkqqSwwd1EvAbRyTziM3zF5uzDXh9JFETgyi87eJDmzx24f4dQm5iDre3nKxboNgLGC8vYuz7",
  "key6": "5jkkabHTwdsiBTneGBf2PjqLWS2ED96k7xCyDE3mgTDYu5wEGf77kLss7Mj2g3sieWNGBdA6YUPE3GAbeUBxVtnh",
  "key7": "ULFB1kn8GHa6NgGagWbci564KJAXf4cUNeVDhPSGYn8VDv34HVG9w7hHas3sw2u1KH2HJ2FbJ62sdNffWhVxXbe",
  "key8": "eL3arGH7NQu4WEdi5dcCZauHHbXUu8YbfXqv9CUJV6DaL5c8x3EH8ZYHMMr1Cdo7yU3eiV3nZSaf3aaZuEbnp38",
  "key9": "3B5rVJu52c5f24sZV9FVyqr2UtwSArtztY6NpH4E7sdpAmqcQnGoix1arZi51f2yeX1mYnyQhTDAF2XDCv8ERzMx",
  "key10": "5ofcF29eXGUfPDVPeu9WAK4Am1jzdXpAkKGBQpGFGCo8mBcqidMfxjew47dmqytwixBpYejkcVtiNu35rmUu9bKQ",
  "key11": "2SK1SZQ7cUap8N6ziGqPXsWS4SBm4UUdpbKK5WuHj3JC1HYqQ9Ln36k1iZSi5VTKsLZW7EtQwdPsbiz6GMVc6ah7",
  "key12": "4K7YC3SXsqZVCBhWig8SQYzRtHUrnbvGoUHrWk1rZKzQEP4QE4KoJM7LASzMK9C4pA6ioMHJVsPkouMidEnxvTyg",
  "key13": "4RwhzAudRT6e4Aq9ojznoAB7raivZ3yS3HuoEKB7oWR8ywck2C1PSBNWvdpivuYPwEYTrieJcq2FfMiUK9DwNpAp",
  "key14": "3fWBup8dMRALjUGBatBEF96582hq2asXHSNTTcdfkUk1E4Ch5SQpjFUU98sb7FfgkoSeTZKXLq14HnNXKvV8pSq3",
  "key15": "2p9idhVHX6aobNd8KuCG1wA1Cn7sihzPWyZpQU9yUuQUq8RRsGPjT4joNYJvcgK9EjBWKLsGGqsCKKeipcy72R6B",
  "key16": "5jgd44NzWmsAz9FB9XdMv8nB7SmwN29XqErRnjoTthoxFHJXLant75a2YTy55EM4LCv356Pi5rDZJGcc41sC3P6b",
  "key17": "4ykwz4YtTkGRZLwdzRcmfKtA1S8iCHoPZTpe6DudBDsisE4aD713LBrDzURx5tvfgbAEogjwmUZ8Wgjy1WqDAd6i",
  "key18": "2RQ9rFHVS7RvZK8SV8VHjvG6uNbUb8cFV7PJjVdoM4xw6YpEcdwCUmpVVyxduHfUoKdSxjagEHU1qDDRBtuFifb1",
  "key19": "2fgueBXNjchcqx8i5dazmPczBb1MBnSoqn8nqMVoXvT3Ef1YfA47UBaHDsVwWsUZtbF7N51AUpXHYzCeUgLqo36M",
  "key20": "ieKMXSaXxvfXPuCQ1rECCh5FNERp11NZbth2bwSFkhXRTgAZBYYMkqfGBk6MWaSnWAMcBuvQwT5NNTKboyahbM6",
  "key21": "4zBCQHXJzDveVuNFynhugn2xmKgZddnh7vv5RQ9vHcZui1NtNbrg9XMiAGQJsqb27Za98yK4s73xB64Rb5Z1LYDi",
  "key22": "3DMWd5fCd4kNnsVjLEUg51NH6wFWBZMFcqi95BffmDuh5d9vmZefD1zAjDw4pWdqRm4kF63LH2DppgW3NJJQ9FSq",
  "key23": "5Ki9XkEDMk3EK6mTHy4RcFdXjQHG176ZNLN1uPbuBCkGr4Ni8MPJX4isVgetsAWqqn7v86bk9wqnxsCz95dFnn3Z",
  "key24": "5sTqhHYvJexm2o2FdsqyK3wmJ9szQxv25GWzdxgtqXXCPyk1AB32MRDTbcAsuC3P2SxaDBrzbDBzzbS2qb945VGH",
  "key25": "oEiMtLEL27csnKonviSDxENRsyoNWgRtAHDP634ur5NeZrNTa1wcFoaFdFU4d6sxUbSouywdZNYSQUjUoLNH7PQ",
  "key26": "3oEn64tafFJYwDH3qGyLkJVEJWG3o2UXKajCZAuwx67vp3bnkZFth5xVLU16c1CtXLSkHbWHvbceVfobrSTKhTUh",
  "key27": "5FGYs5t6ruHKPGtsh4CRVWbS99agT5Bwu1ckN6etXXhYzkw2x3qi44H3ceoeZJ8ovcciFA2pUFFXN6QfosTmExi1",
  "key28": "4i5qPTY8fyw1JmGnmXdz565uxCydK3hUmQkvLu9GYJ5Zvx4xTQfBSJkdTSTBDMqdeFzMrie5yzZZe9gKUFi3N7VX",
  "key29": "53Zww9NKPkdNWECSFJSK8AsfhWLHWkdPpBdNCiE6o16ck5vF3FnosznKHpMT6JZUYFjGaGc1Kcn9WndRYubpnq7K"
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
