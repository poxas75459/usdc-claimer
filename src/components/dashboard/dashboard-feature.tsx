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
    "5YHBWGSgvNL8yQsie7hJhn17CzwBy1ff6EYoFSauoLX3XzA7UrMei71eGNrgwMrvv3PT4f9u551bk2EPmovBSabg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2363WbzvS6bjQKRRjcpN3RhfMFMcK4vrpfPZfXsXsRxTwYYJZFw43kt1pQBM7xXjBTSkPTgUcBis73FrBB4yynCu",
  "key1": "4gUUU56EjaHxQfU688PnSLR1PkYEdJsQZyYabEnA1uDED5ZyZ78uBofMrdYwFzvmGXkvTRikmbwdyUV5myyWurc9",
  "key2": "3gQpNBLCjKBMRk7aXytEKGxACcQGKSopGaSxJpeVomCMvpr7nqL7DZNjAFdnhWQxzNtrLd1CgrbNXndegrpZ9erx",
  "key3": "4d2h7MpAWCR6YhnFEQi2nZEW6tsBPcJYpRvbvvFmdgM3L5XhG7vn8FfWxDczZasApDnbFgQPyymFGE3svXzGiCiD",
  "key4": "2Dpm1bWLu7FxiMESyDmMdP3Kxsu8P6uBxKHKNMGat2urUPiNPzCvWdgYXTMD8Z3RFVx1mffa38m7C4oEL2sthjXQ",
  "key5": "4EFmB6i4hpE9CYZG9zqLQKjrgAQbtx6ve5t4Hru4vpRbXRpBes7CwtN8QZC6uYFU7xmQSXDfGHdKxxhjN7UqEuT",
  "key6": "2zqm6na5Scm3jHoBuyQbp57DSNrCfocsx9JZbM2GqzrQcg5FJtEpKGvkE1SrbA7NUrjYTwAxZYurwKG4jJxioy3m",
  "key7": "3ujMuo4Ek8unUKThftkqTxTmK2VUuxGAE1VJxL2XDHAb3VGqjj7GXe9AaDdcAXbkPAiSYCUNBzxboHDRUfQDFt2D",
  "key8": "3aX3zy7tv5TarKstyb9H64HwxZaaj6fLXNBoNAsLdQCwRyAMemTfMSCkEshDDBK6Pj5n9hcfpBrqbdGjPmRfFqU5",
  "key9": "2mQHiDepiLmZfLKccm8FEhKzudqEinohCFVZyPMmM7ZRvVnE5biyD51xuXgmE4VNneqyaCvHudLUe93U3VjpKA5",
  "key10": "yf33nB7imqpuHdHUUQ9vXDTAQ1a4fngzJ2trShmQ2ixbCAAs8WSU6qP5KpWiHTGWxpo4oVZSxTMN1QHZkWEiHic",
  "key11": "3vUBJZvDyvNLnBwqWRv3iKTqRP1YJvYwDdxUvdCtun1LEz9G4vV2TDPJsQajXK4fCUKrBxuVsTU1HWbNTeC6kpTg",
  "key12": "4ziV2VZ92mQhiiXFcvZp2fPGKE6gSEuuDtCQP5uyRK9pQQFuEtD4EUTfLNc7ucq1F31hdjwGhz6GjUVumZFx6PF5",
  "key13": "8sYe1n1eGfdqHxg1FBp6Jvz7i2AzEZbrgEN6LAr7QVfrGMFafwCeb5dGtd3YgmHBF3qEcJXNAajrEqnsshNvFtC",
  "key14": "62c2eN4EcDk9ztZsXJ6qogqwH2iCApAcvi8bvmJX7Xx1xAZzLwuQ9ZNYggcs96i2sLRjaYYBTtp6nHj285uYELM6",
  "key15": "5fnzntNjzHXYRyJBA6obbhy1Z9dZWwDU67GwgdPnY7gnTRPcmMSVAjtMqC3oZm74TNTV11jBFYzWYzEcKSsop4C6",
  "key16": "4orUkrf9BTbFSyATJr6jnNsTjsv5dDtN5zA22SPkuPeu3cpjDruc8RXuPrB8BYZwbmqtH7mF3a9XQvBpBtyxjR94",
  "key17": "5P9b6ohPMGsBDwRhd2ArDhZcW22JM27jMKLvKXB76p26cuDUXeoowkGoz8offs4EvpoHR9uYh4byyUJHb3xLe12h",
  "key18": "5xz6S5qycyi9RUxFAZU1g5k1HAP9dC5YNbFgp14AF2cXABCNecooyZrJYxS9G1dndzbgnzbTx49Ca9kGwLDiKRED",
  "key19": "2gHh1GfSDGe6Ao7pt6stgQr7dn9ZYyikrw1dcn236LEXkHwhh2fNmJ9BmWkDEVhfTQSD5dNb4THLSuBrEqFJGfJg",
  "key20": "BbJHtVeVXeNtq1c4xb336UddojMiCSVRPTJuhvqGaXzpwP5QdHaxGGumXMdpRopAtqoLJQkqV6W5CWo2ywAdGWU",
  "key21": "2pRteC6RxdDoS35c28ehkF192QmE5CwdRqXZqEWMDC6V3wgpMFGyEcMphjbAT1uuSx1kUsMuoBctU31kMqpdpwxR",
  "key22": "3aLokj5bPNRagcCiBNvCvXPCprEYuvc6HQD8QttDE2MLvQFNhDgaHUrEg5Phh8S8TLVchgeTTURx4HNUF4a9e2Fc",
  "key23": "3ps3ncumgxJMhdghVtDSh2GrcJpjS3RjD4s9nuwwxbcwJzHdShvJtPrLUdYLgGJphu6kfSP5zEJgxnBcGj7xH1ke",
  "key24": "q6nBt4sac7f2jd8ri6VcAJBCfCgTo3xq858Ac65kbPJrPf68p8gnAkySq2jFLnoGKifpGjeqTMyrxiJBuLtVrb3",
  "key25": "5JB87ptLEojnYMRD79b3tTyducGTsCXiSZcweJoizNwxRHBZb9YckbaN4QQ4wXjZPvh5Btbmdrc2Ks8oZyWn7eFD",
  "key26": "3UipUX5Fon95FXNG7TUwg689JGZYoDKEorFzQUnhy1zwEjQpVEMwfY8Exd9M18dsm5FQj8M7Y9poEATTLV6WC2G9",
  "key27": "3Lqiq2jEbfNTHx8x9PwLJuAFupdNn1d6qTftRQsDTaJ3Xu9YBZLXpJ4uwYfV7TUnrt2Qi43AAFMMvEciim4yf85j",
  "key28": "52FfykjNMnzfNY8WRKKZpHuofCjsxvcTNo4rv97xjnkXYo1WmzMZnDgxkedAnfomKEkcyPpYyaFFdpoKbTh5qNyQ",
  "key29": "EbcGfjYuUYRE2N685jb5tF6URWXnwiJsrTeUXqikoFdpZgASAYiQNFhYNpNKKB43erdh4kK1creSft9cgUMFzZx",
  "key30": "2H2mBpM4E6w3HaKRjidFszPh4iYx2PSnGXn693rrhX5S8wZAAuwPNNJUaTbrVPcpbiYLiYDDxmbpQE7QhBvRuBrL",
  "key31": "3iRukeQdYb2pQe6C2N1ZQn7oj1ngn2fJ7FV1eLhur7jpGCXGkB2h8ukwESm6i5So2kGGXUzDn7R2mF5XnhvCXh19",
  "key32": "3T3M21QZsgv6bicMPGGC9WEFXff3p9jCu2DYANNYeSjp4hLxoCdJEh2zkUHWed7aSYaVzCRo373JiU4u73hQA5Fs",
  "key33": "2hZQ9MZXCtRkuUTguoFa1MrxMbFNVcQm4xNARMA1fwPQSgoDQWWh7cMmUHbSgPQEgyLoEn5FUH5Wf1RieY5HPNDG",
  "key34": "5azEM6Cu8XMazmba5WNNpssua1T4QAjAZ6U4U4YQqVDHGeCacsGNQxhTkMfZn2T5ddzbeEZVfy6kDLRWaHxNsprc",
  "key35": "5XWwZtm2yAFmf5i22zHdSExJaN2P1SPAeMi6vvgzDUVgrF2ihiVmtsUTNUgMQ6m58JqQxRdKscNKaEmAaQqZ8FPz",
  "key36": "JA3UynW1uuFim7eaUTTgFrfomMryBFPq82ZwxhLc6dGq3X7pczYHKeZmqhi5FSNxFKWTacSKnLsRCwkCTxuov6H"
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
