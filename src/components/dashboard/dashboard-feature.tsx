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
    "1Ya39FTpU33pVrzDmhT6UsqzaAcLbdUxbnQu7ZArXXsofqqX3Aq6ECay9dbjbXHAzsLic4wM4Rx7Th6pogg4eWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AKKHiM8x2DNM4KbxmwkH9QU4exdd6fwSRagistu1waEUNWhix11KvTCSfu2mjVQj5dhZAtigTKrpezna2tuk5yV",
  "key1": "49Db2oDiwPWBiLH5DbBMpp9qTG9Gm6UrbUKW6chJtZEa2dpJQ7PG27z8ShjN9JiTj91wonLjK6UDYZg3SCe85GLq",
  "key2": "5j4wnpFdmaRaanYpANLKcAW6xefjDgq29WFqHB7L7KVNSHbhZxmFeAjLwiZpKHRUmRKWKLyXqv61Ur82phu3KzAn",
  "key3": "2zVbMGenCb6UvdcrcYf2XCta4WMhvEZfbcXrXnHejPnDvWHDH31BEFjERuFtp3rzFMqTLZxFQUCDYsbuaL5ZnAEz",
  "key4": "5K5vdbefFsGAMpSohUQKpi5Haj9ug147cwoLcWBH8CvxkFQu22xHvy1Ea4KF9yUTapJJnmH3aFk13ZfmXVKBGHKY",
  "key5": "3okxsGiHDkf1TY7WsLACzHfLHH5cnKzGbmyixfJBWjJYhabpV7rs5MyPmKWqxq4GccV73fc44cjLKYMuStiB9V2t",
  "key6": "3MZavSGiH1WoMxaJjDQNTHVnq7VEWNBTbSqdF36p9MygBXjddusoRL2QDxhThZRd8i6CyZMecVp1xvs4dp2JKayJ",
  "key7": "5rKUotWHcsy53hEH4MmKTp7h6vYjWC6XXiNweqkaxdajQfSzVdm4i4b1YSuc2DkTaFZ9BF3SnzMyAyDc49rvXqyb",
  "key8": "3j2BjpiQdjJU8rMWErs5UNbmbeGGrXV5AzwsginnHJ2xk9UWohKJ1PKAQmMRsD9yAAS1aPErqrrDArpCPKDTc1Rm",
  "key9": "3VbTV1xLtrbofF2KGaEAZdv9EA3LHnkEPkvqxcLpxvFpRAY7v7JdYEgj6G7ZDYoJYM5GAQPrsgkgJd69pn5sUShZ",
  "key10": "3jic1rtbmTfPLdtgr58DnbyrYgDTuXjDoFotsELeqYqPhrc6vfq5RT1XqWBczqy7ZXNqx5HGdtnd3yk8AW7kt3YN",
  "key11": "5aykd5LLHDG9wV7AEun6eBmJaLykhF6CptPEnnWs8k3E8Trw3123xj9gNWW3nv1Bju2Di5Kc8Umpiwr6Mb3ymPUP",
  "key12": "2DM8UKBKJWLYGnV9qRXyUEeNmhz8mjg2RX8RfMxpVUk3kSsnM8qa6m7REgG1LJKF3aWpbfCaap4Y3xaAWLjuTDLq",
  "key13": "aWAZmUxkpqGNKRDUKxrCrnQow6hhaszpz2WeSsEgAYUGr1YZN8wWdD4cxm1CSnAfTFmAwMZg7UTmvxN6ayfbCKB",
  "key14": "3EvqHeQUTPaZ6y5NKnbtsajad5FEMUcPJs1kZDya5KrKsNjNKWZFauMLnTk13XirCXayWKcmSfzsSGcpGKnxxE2u",
  "key15": "3PSF6xc6utybetFGgyp2ENAnLwaJeWbQptdJW2vFakJPBtKgKYhEwC4QkTyR9dtt31Nka3enKNK7nSZuSg6K73mi",
  "key16": "5TgAtzXPvio3q3ALQgRK3DKTivbFvszpFNj2yaHtoF4HgHSmDKFGsq8G9TqogrouHrBnxfLukrkBnhYKrZkSH5pZ",
  "key17": "pNtQqJEh9zKuqJ11TQ5cRTyZgahfpPLBcjPbPHy37ZtRPmieHBqYzE9rtF3AhpWWUZBDPx5DpfE9q8bgGJj1zJS",
  "key18": "31qpVtvdYRNPErX5JTo9oKyxWAxH6GZJrvzycuLTB2AsiLPjTNfCahDb2wRfXm61g5zo5WHxoDnBj7XXHg3XKB4Y",
  "key19": "4fnnNjt1m68gpTaTz9pXPpGtXrHsMvurJwcYVQqvhGTypKJiS7ppW16pbvvYrT5vvvbkXy3rggS9bdx6smTBC1Ts",
  "key20": "4oDHCrcXkTBcWZG1TPChuHxTyTAkfqbpevAGAytQwWWQ9S1hrKZbfz8xqZLK2xdWCGhKMKbhoWMzB3QhDU39dEzn",
  "key21": "5SPqYWgdvyVR7g1qQTa2LhypfSUuy9Z11fpMmW5cpjtmDqt68kxFmTzXdYtgwHXqhP27SA6gUfQ81hU5LY9rqE1g",
  "key22": "2wtRSKPJnBdczDKLCfRg9NhdBJk7nX56X8N3hWagp9AGAXJzjkXHp7rfuqQkFi9aZm1bkeXUrnioUCC6WFBwe6j8",
  "key23": "4JbzG5zf3N6n7dFoSzLbW1p8NLpxaUyAbTdSigBb6GTMkJXKCgNmfDySKEsJTfU7PnTzHZJCK6sPTSEYf3mvmYJ8",
  "key24": "53CMnZ3micaCTVXysmQ9EuTgsJDgZjTNNt7N7kDdVFu193p4bWbJQ3YuseWekdDnzXz9cgkNTSaDXEa7h3YMXQYN",
  "key25": "2MYfzFayhgp2Q6ZWKtAticVEtsdthPRPSSxZZDxd11Q7NacQXgXHKRTBXsP2EsavM9uC4VaTqtQfTE5magsdDDcr",
  "key26": "4m164ME8VPk77PhVmomYT4acQebb2e461w4pnwfResZjTbJiVtNAofj2PZaWoFLGmbYVvWmD6hN9p9ak4PpNSi3h"
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
