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
    "57DdwEDkBzuLYsX6jVxexsczTkFyfkb13avFLgC5LRDQq9D95eafeQ32qV62wBtia17ziM7YBDuCPkiqNbf3oGd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "286M6QfTViBw627J4t8dEvmHHwFTJstyU3mfAzzY9K5koBcqmmPRbE1PQS18GZBo4inetwgmD66zcTee95NX1J1G",
  "key1": "3RymYtP37jeWNV5T8R3xLeKZNxxV5KoecyHHJdfKtrdGg3SrrLosc4eBB6XNZTTqffiGE1Hd5pVbt8XEjUs36LKE",
  "key2": "2yZqRxZvrFFYUdC2TTEjBkwZsEosBxTfS1ung9RcGoC8HNUGMzhoqdUPF92vxD2USTbkirZxAjxHA5cCfPJL9mgD",
  "key3": "33ANwAg23njrcJYKudro8DoVmhWx2YcHgLhbbics73MryzSMLnpAQPUST8bVfPkuApi8Cwvq2NqJeLrC9k4PE75f",
  "key4": "m1DkLEBQpCHFckZkymb3dMXpNf1S2LQfXrDXYm4FX2UiHiBwSU5vwzS3rfJAAGDiMzX2JQRWxTARLYnQEHVhXDj",
  "key5": "2Y65kKcwTM99VvJMgp1z1sjTFmH28YBgDVLoKrXMvhL9QCL9z4Kz8z64apzVCGBpjRQwEjbo1UTBZWVAyCPGKKKZ",
  "key6": "5jWSqfsu9Hb8fm1EykgaE1Y9qkcbi3j2X5eCH1EXaKRczkxYcCqMPDCkf8VLTk36MgMWPoAjtEYAxjMb3BqzdHo8",
  "key7": "3EuuEEaDDEtXj94SJscZcEcRhu5kT82jGVC75DSUMd57W4aDi1wX1LFhGaonSCwodmo5ue89WTUMdv7CMpeJ9ut9",
  "key8": "5etsZ7Fwp4BVCcRUghdXJ4CEHZ9VVYtQiuzkK7qVyvqFNY8ngz5DdUNPxZb14SU4MqxxABQTcqvhCuDwdsAqbawr",
  "key9": "4Kwxw5ht5RDNcKRkxmHs4XS8hjxeKLKa21oVyuZoptx4Ja3R4zGugnEbSuSiJedYxdYG8hfmcv5VQmfxUs7cb9Te",
  "key10": "3uu5aAnW3McxrXGRWBNJwWirAnxKKdP1MqH2Ao28RHeo2kSrfC6b6xNXLdV5R7RGaiDnxXa5dpWaooJSSZ7GDUgP",
  "key11": "jXeooa39BTtR8qvWhcCG3zN5m4iZVtXNXCHPkcj9J948PKkoYt81tgS5n8nCq4LCYWSKtKM4z7ZRgnrYXrJTwwV",
  "key12": "efAnMaUM5p56cw23Dhb9gGZXvBcngLM9EA7t7h96x5JcMMdbWjbLH2mYHpYeRhq4hwtZnK8iVoCCc5QHFWG1aPw",
  "key13": "41Ki9q7MqfTv5WSN8Rz9XXiogXUwxgNPFMjxp7oYQgWBD8ypSeJWRmCJV4xmLzXSdmzm2nSjdCxwTZAgsmZRUww8",
  "key14": "5tjFmPUgJtWr9F344A8SoUftjMRVAaxztghspFb8iS4hq7AkWRqtAT67K3Rt6GL5iBFmLZy3M9P5YGjvmYRH49j1",
  "key15": "4QWuPXkjVAn7voGjRG32XXpTVJiFToGtqeQDfdpfyYaN3bFDr6yowv431aSnsbkY5WcPdiiQpuL2Sk5UtxX8gzfz",
  "key16": "5GjteMbMyz7LqLWqEMfC8i6Y2oJDuD3VdiKX687XCLZ1WJjuiLfqJUUT1hWDpSUXQKw3P3ZMaimQnbBPdXJjG2A",
  "key17": "2i1mErjmdXDqxirmVTForEfAF6YPm2rto74LdFEhChbZq8jf4Uq65UuCshz5kgT5czZc3cF3Nmm9zM38cGudKpfw",
  "key18": "4nZBuDzqHStZKuXuXLnKFeRhtgzVs1zjLBbHkibewpRXNThGwqMUuZxfaGYK9sSWWY94h3rbj3kNBDe7PHbELJsX",
  "key19": "2M3KpGKStBAjsqprF8VCKWHx8Nu3XViU2yqdqM8LPyCLGgXULurK2CB4vSQnE2qTaazTr6htjagDuM9yKifYnnKo",
  "key20": "2f3LkFa993dLM6denuKvjML4NNdKjDfXv1H1HvW5hur92MNkP9SyjaFjnkV8xfLHVtpD7GLKDpxXEM3bYMY8ecGh",
  "key21": "3WgTGbrDfV96TPJQD6oYV2KNSLZekXniwHcx8JUagh7R5ww32toaiG6ACSs1X4psVwHYtVtFb163ArdBbV9AzeLz",
  "key22": "5sptK3VqjFtcx1G2DpA1u4VrrecCnsUPJFa9X6L1fskUSZJwRdUSuXReDMZmoZMsmgyDVSPgz3jxV6if1sVzHEvx",
  "key23": "9fT9NCGcVX1LoejbDETJG5TKreQNCTxXH1cTfWmeTdQuzWrmravd6T3HX1Civ6g4ZqGjcyCXuCRsu2uKffFyu6y",
  "key24": "2DuXUS7QwuY3iFL3GuJhmRePQDVG2i9uSyiUjpWKExL8p7wimioJks4ttoyRSFBtW8vJakVU8GZ6x1F865PaanxF",
  "key25": "LFQLmTttUVnsVQKMMDb4NNhn2EKo5EjVdW6SoXBs1nfTnFhrf3baNGxNyvwYji3t9ZLmon2nruNkFdgwtCWG8yd",
  "key26": "3bzj4WsDBEN8NCrRKEDH2Y3eS3kxwhgJC3FStrC7vqXC9rhoWnwCi8bApq93UfE7JYsitRsVkExvLg8qGaH6yHxR",
  "key27": "2vZgcLCFsAqRzPvBczPg7cJs7gXdeh4BAP6tLSk1dhC6PzKG1TYG3m19FzkNko52PMiHzjS952dHxRC7RjCLmkL7",
  "key28": "D4mvceY9atBp8XyYNez1tPo5QoaU4gDnkL7LhS77t6i3j5hW8oNxFFW8NR35zm7nxEiFq47DoF9qbxgHduxULht",
  "key29": "4uniWAfhcRM6ymbAk155drSqSMmZwJvQVLYv72PUeuRpczBP27iDy6Er5ts5268gzFLVXpYX2NNEjuytNQJaGvWs",
  "key30": "48xHk9nTtPsKibTyHaYA2yPo2FuVjWnzTUznNsdWUfEGc1cmtQenniLTfRqx44TSh8XJbQcXSmdrou1m4AuRspCV",
  "key31": "5ec2UtxNVgTAz5uotmNMYQRKhsbd25KQitF7qRAoQ7dL2ymxHXsejNjpctCiyStn965UJsiQnydarPW7bTXyZhfV",
  "key32": "3D7KWi2cWvMjmspnw3gbfojeiFarYyBHqEBSG1QYMoxu4tHYsr3W3KkuQ1drC6wmU8rfb2mkc3tov8dbAYA4qp1W",
  "key33": "57hCW658rTEBoUQQQVzZPXfgAFrtF5dkWQarhiSQcR8WBKiBvynQSNLJZrzona7LfKrKGokvZGyaBc1cxoBKiAzA"
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
