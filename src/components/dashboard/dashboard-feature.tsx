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
    "2sRXC996jMJgKodAGyyDvBd37Bmb4RgWiyRm4r6LfMknUcg6Ekh8Novzo84jiXPuU5QrKcV7XXe6dPEEuCfAnanB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kjCs9BqTmYHjZq5DsfuUwCUPaEfUpdys7ceCW9BvyLe2xa25qJ5z4FyD4ceQNkVM83mzVgJU7c6hccQMPZqmUTg",
  "key1": "61zqaeUKWPL3GDpjofmNURHYc64JiiYh1FpgWQveqjCGY9HNjdMf8VjJdcCCBKvdbyJJV9gXEMBqEasBDRvdhDtJ",
  "key2": "3nFE2YbShadde9hs1AVyPpdvVw5yRHy4ZFDsJ28JPGT9ZMQCbLkdfA4FiqTpnyx9w33sJ7wuVJwDgfshhsRxXztS",
  "key3": "4nyNE4vqiJxsaujYWefxx44uXpPKPVWXpWubsBfEVu8W8eFqKY88eXf29jyAimWnYJPQQxeLwfws9g9h1uBvfBE5",
  "key4": "2gG73z6qBQy3r4LM5rZhaVfvVpoCHqEYQp7WBAdENCzRgEXXA6u1yfHpKvmH5qwfjRz8iUK3UCH8RcbXYNkRT7Ar",
  "key5": "5TTUwTRqJqdffA8uF8EMwjFkErBQk9YVT878SLjR61JqracSNHNDHPbYtfKM5fp5HyLc9UG4TDrKb7cQiBa2KC5p",
  "key6": "53Ao5y8f8dBCp6D74pHFNoZCuusp4MdK6vHgsEUd65XtRV1ocUVrxmnZ2Qe9edWuXvFUF68xHk74wG2NzWxtNqJS",
  "key7": "2jPzJvgPPn9dPNZ1n8QUwCcmvvoTyBNxiM7XVyFiSuUaTxmkok9XR8qQm1DZJB57A6EsXzhrkUYxVS8pvtuHBoUn",
  "key8": "3uR45Hyoss94uoy6kUYVauj5yQSeABYG8zeZsNox9Hzmfwu5NhU1ZH9P8MyXsHySeMKNNyMvG86qugsVGLVjfmLS",
  "key9": "zFdpcJsdanFaUrAnWht81n6R1nWCpgkWPRxparrqjp9Uv7A9y2vHo8Dg1FQARG3MSJoq5Siq9Sdy3obVvAe1irX",
  "key10": "52Kmcj1CFmPpjehLbBpMMoF1yBU4GJU6CJjZgiEwZ9PVaizS9vQpF21CBBGmrBQXCHygThgWwwnFi1bmtGGj4rcf",
  "key11": "5nWrw7VwB9VXCCC1vz8urSFoi5rznvWX4SpMtWwW3qoeRAs54Vzf6mvWzsfpt7xtvnMMzQDB15HkrKozkeK6Lv5T",
  "key12": "5Y2xrpymyzRTwLATy7zhwTbJrQyxiZeVzJ52gycNRK5nh1bRgUdRj1DiWiwHyNpeNfTwwPswhJP43TsbCu94RLHs",
  "key13": "2xfsZPkcDDotYynT7HywSGzT27d6RzcoabJaioHnqH8djyTiUXgy8YVFWwRrQ3w9pXq6hjwENvSWCoxFoVXi42QX",
  "key14": "5Peae5c85ToEbZtvqo557KKJXh7f4USrrEQbCZYqyCn3CsfpTMoK4PwWLTLCtPXCqxAjCRj49aBpZ1pXeCDTPLq8",
  "key15": "2z2K21oduW55YVn37DTe3SqknfwwB8ivoZgKfDHmY7qjSMixziDPJ1iFWmmDvMT1tmZqwbTSmT6XBycW427DnqLa",
  "key16": "4k2mrguGDNtwtT4v6v8MVrkfruZWeVTeahjJRuhVMGqTYnTp6gdy9NTKZ4GystnW7f5CLLvcEDAUCEEf5bYDVam6",
  "key17": "2N6k5pammznxVLJT7xeyBR9uiU4cf5DYSCun367HfXeBQPfXY3vmJziuX4N9xhX3QFEptatXCDXhj4cH7tPDqgbs",
  "key18": "4veVhqjRpVNVG1aNNxp7yNwW8bn5dTqXE2xEaid6xrNUMu17khpFzS63dt5zRnFRtdgj99mqnC9Qpybpp8ASEzNS",
  "key19": "4epUx4HiGePVjZjhNmCESrY1Z7qNCk8yauy9v23d86FrNnT31UTUpNhxcyCQbuD8jBNojbJAgbgd2B2ZGDZxWJ8z",
  "key20": "5XbbWv7H78Q4AX7F9L1MhuGnwBSvn6sU8zoiu2w4FXKttT2Yr3ZZSZLbikH3j7xsQ5nuzASs5QjEnDyUebc236sH",
  "key21": "4gFnd4giu2BFaUBCadYdvjCpSWUgC39J3ngqWQDkiCE5o7Q1u8GTV4g8Bz2hgbFhVnVYn7N5inR4UVM8QTBkYjQv",
  "key22": "3a9K8rKfJNT8pY3aKYLQu4YYsSPQefWMBXpytin2fyJojPbnkc6Zd5mi1pfd2mofAMj6Yq5TeB5bve77fk2QwiDW",
  "key23": "2Ck1Cks2GmSFPtRVxLdMthxb6h89kLY3njM9Bti9hn45Fy4B2LEBX9KCvbqs4kcpXun6uKm987SxpM1jWLQeKTox",
  "key24": "5RjEu9HExmhwgpyHCHpxuBpaqKqngFXSPwzMbjN7mQ5We8FCVeBz12vntveKCJrWEQw8NME2U86jM3WbRV91hxfR",
  "key25": "3FudD7AGqAoATtsS7tJ9ojuy94SN1v2YcGU3cB5rgTw2Te1MbaejWThRCmHcXyadtS8m2EYYB5DFRrCNGwGu4cdg",
  "key26": "5vHykNgPkXaZtz4nHff5gMmeCdU952e4edsgaDYhB2cBMbgfrZ4HvMmLGKMTtp1mk6BREssHpE3vakbGSReaRiXs",
  "key27": "tbwGgNuVdcGQxY5aVeWk2aZrD9JULgHY96CqXotcDXNnySsK5qV9yvrMHaxhiLmjhhMdG46jftQpcBFc4tMs9U6",
  "key28": "2hquGt895BurVUSyYHrnZhZb2uC8RKq7ttEyrobaEhHefBbNGQH1E2yWqBSWYD2Kuf6epBvQyNF1XrqTab88wmAG",
  "key29": "2sNmamwNPA2JcaAeWWZ6RcJAGeEnrAbVt4KMUFhVeZrVEA2cqPYF1n26LEi2AY7xAtSuNkgpvp4NWoWDKK4wcjEk",
  "key30": "uayk6bdrKxBw3ZuULXgWoqJRrgCx9vpuZXnVXt2WAL2jk9DXmgQvnhCqq1JVztseBtxU4jXXNdZJYutAyZJzjWA",
  "key31": "xA1ugepye98EigBHtYhbPP24TXnAKmHmDfGNvs4oQ8L98Kx1T6nTUgvV6bsNLtozFTphTuLCq2SjssPDVSc8RT7"
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
