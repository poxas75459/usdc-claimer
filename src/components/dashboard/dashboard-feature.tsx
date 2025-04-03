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
    "3hDnpvyTxJMsEaxwQcirvaBFVLq2UUtXuJ37hNWkuJLDRTLN3Xqm8YRtdrWTK2kgER9qVDPwnHrL4NUYedaHKFPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WnNgJWkhF1U1n2EDwze8Sf8whjjfULoJdEeYX8xZpQnYP1WFbrjKm8XteV5FX5BFUMor14nY4WWv5h7xdeabY3c",
  "key1": "3Bk4VvrnfoYQDbcYJhQy8bDHE87xXopAaHAxNZ7SrvH6HAcKVV3WryffSrEWuUpfmxVi6QxyiVMp5zYHf1yb2HrT",
  "key2": "2sQwZcmwFBXPYUEZUgQ2pwc1aKHKhj3hUzaWDdsDByxYboy5MYvGE8WMHPZwPAY3wsXPRUbeBufhhfy4NFNsGcyV",
  "key3": "4wYQuiqVnjEqMrYF6SebWeuprhEQxo3PPSx1qmn1P8Uv5cuqNmPTJUDydR5Xv2rm9QgsYDESXRE5xd6EPUneFpF1",
  "key4": "2Co3tTvsWUn9PgNiM1k9JT4NzzyAaw2roSDxZe4r6KnR4wZtxSogLXCV3DJN5aR5utgvQDbtzfbKSULS4HJuAckb",
  "key5": "HPkQRBFsFoBnkNDHtief8mADPrAco55ZnSVqhceLxQmNvmenHgNn9F2WbTTWkkG1b6ZNTPHb5yPa6CjbdbzwB5r",
  "key6": "5RkNxgo81UQXTkLKuDs4LAe46V5nn1U6KnwjTZkSiJFHPYr6brdwTaWwxHoSCR1gtBHkJXMGgYev4CxX8SQUx8re",
  "key7": "5uTR4GeAvuPC6ve3QSAJkHS9qDb4QYKQTPjJh3HuzydbVmppvnLqWusEBiM8bVqypEksZxcfj9TWkkrdVUmvE8ER",
  "key8": "5aparDCQZGbe4joQD1jde4oiD38NZYRWf59Af2CZtHwAobpBEr3zKvUm4TAEQ4L6o7FHFevEAHDGHXZa6je2xcC3",
  "key9": "3cAYpbXc7EXULDsFMfm2ZmRPdCpwV5tGfoScuMqoDPcPik4fapxbY7EiA4yhb4a8xyhTpwV1gZ76sLC7bitGoY36",
  "key10": "3oqcnNGvTe3i3vSqrFsGh4ELMwQ2vKddsjHUCYZLBfJu2psycgdCDTm6QAdAui9P8JJVXFKPApCV2t8VWYYUXZpv",
  "key11": "4Xr6NDxQcS5Y9SXUd6LkMXEcT1GKvrRzpUw9vyVfjpaBgZ7VqZMbfXP8mbm1W94nGPgCDSjWfTM2wxNC1Jj4kWzC",
  "key12": "4DBU2FD5BSHDrWg2xJNhJGRZWHHkXUeKR3JcySm9sC7hGh3aoHKTL83q5Cw2RG686Fme6wRAKmMXXskRPhdjMKe7",
  "key13": "4w28JTvQNpCZXi7wuC2cPm5Qs3iMe47tc7SuGTrZeBM29hFH2ipMa5eTBPXnnegmuL1YpK3UuqRa2LKD6okKDim3",
  "key14": "5THcj5DaSH8MatWSM57gxTHU5p2dC7ZMb7Z9T8vAPSWDXaKALPMYJiHXNuP5NwXh5HQjbVi1RZf4z3YydoJjMJ1S",
  "key15": "3X26PVY1ze8Uz1y9NQdNsE8sXVNN1ocRUwiipJ2nYWHDQUu3ikFiiQ79h7PMnVmx1NAJmAjyywZdxB8kfLaBd9Zj",
  "key16": "4V3sMMFRe47o1qstv7o1y48vyCZvdTstQ8ZxDGoANAHcoDsjoxtcXiisxfwfhzw4q59m3UzRFqsGFVut1zgjNExG",
  "key17": "4Fsrmvmd5xRi9TnnHUAT7cDEiFZdTuRksBHZLNFkVJ9HGfaNYXRsnchiRCJ4ZdgTemiPtFR3Z43Fbij8FAMa572R",
  "key18": "2Q1KdF7bWsE1H9GY97VXrZgx1aissPoJMMCS78YGXBY5jAiwGPQnPQnBkTb1GhwXBZSkbZxz4ZRotegr8K7Bqdtj",
  "key19": "4NNqrqLoHrswTPiTL6XTttF87BEN7HvknL5zCTfFmS2PZ6bnHNy8nSZyB1vUpw6JbxVZcbY4ovuB22PrYWcx6kNf",
  "key20": "4ZEZtgCn95GJqb2zBzMMPeVpW6UpFMgWm7n7bzP2md6wxpdvQWZYGcNVthsZrTFacX7KrhMoYNYiBmDru5si3bDZ",
  "key21": "4qoXogNvv1c5ywXR17G7bz9bbr6ciCRqWwoXhyCim8SFk8eYBAXHBNEvGFRnBJx8h6hWV1GaxPRJgjMtJLyJq3hr",
  "key22": "488oYdKPcoGxZtzHdwfGcTyL32fENQzXyukDDc48s84NdsFaKYJukc2W22P7rp9ujisVgZ31sU4nMXGT8UUseNiU",
  "key23": "4r5RhXbhzCeH4wT4sJwp8NJ6NB6XKKrjyWhJdBwxWsyS1adS1VagHL8HhDGnxMHqGGsBnKoh9DZ3Nrt5meoRaPzZ",
  "key24": "5gCLFxGdpkbL7i6X8EZCa6BdFhjecTCdGsWn8GGsQsfm1nzkxYZt1Gj5K3WEeMARJ1qscHBCBSu81ZMisHZCBJKE",
  "key25": "4X52XFiYbCrGLw44h8s9g26KAQmQJJwCmcqP2foNnTgeS6jNWGcMhxHNKon11cBcrkzTkXBLtZFcE9awqCKfbaQG",
  "key26": "4TNA939P8cstW5cSEbg4WdJFKtVvxQQGEshw4vAKGQMZ4sXjGpPdobPBjYjEtMGsVn1wZNwNQGyurh3Yn4Mi6pT9",
  "key27": "3HtWfQBs8uhk7iWYKMkmCyiUQDrjGToG9WPTTETTYBp6hNHh6TESJjmCfuLSBReSK43WQRkHEwE5z17Sft4Z2rJC",
  "key28": "iGrmxKbzRuAjc9dVdhehPoFnrJShwibznMu2BispPGXXdBDpUAVA4zw6pijZJPVuzLzFUbsGzvBmwBVKXdJWcJJ",
  "key29": "UwykAHGmuEygYjVWMovLan1xqxDKheuYitBHZEFgGB6AinwBHrF1sSLeVrZycHDbJ4aVTXJVjKsnKZtm1d88pdc",
  "key30": "5bbtP88cq21YXPswPr5ujfjLDr3kDRvHGtMoj2tpZZvGq1LgQCa5a8dQmk4KS8GqZz8y7b8daYSCYHZ5QEhVMCvW",
  "key31": "5qfAjcBd8orf1D9KcxFRuL4ibdwWtH9jFdjJiH6EUHcS3ej4G4uXoUscZDN6nS4yhYc6d3LVaLVYCjaiN8omFVLe",
  "key32": "59utG836cBeGtNH1KBrdcdZApLfxed7dmEPvmKNkqeVGQhexXR1oRq5Dbq8DdB9JxJezz9K7dvtEKPG2uAZmL5u9",
  "key33": "2JzHo5MBXJvehvfJNNeRfs61DA176vb26YiAJU8rnzz1M8ydXwknMdBsrrdYDNBBbYN7ZsfW8voJ4madcBuU4ZUk",
  "key34": "2XVpvB68qVnnuJsxhwFdE3DA7Tfn7TKaZkcZbfFw3aaN4tt9vA9HxsmFzw2gxoqegcDqPM8CYqfuieqr1wGXVUB7"
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
