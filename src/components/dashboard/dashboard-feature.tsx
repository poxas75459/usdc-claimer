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
    "4xh5KrcrA4vzARXnipjjGrZ4YTgDk5PV3s2s19Qrxn6fvZtFa7rHrhzMQduRqJ3jDqmwzsJTePU2XNrv5PMPtD18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DJaWqYACf89YMqrxvgQnhUfofFEDTfp4NEAJYV8SEBqFpHnYN4NnoFp15L4ZvcumHSAyg4JSudXVRFV3PDSGsSu",
  "key1": "V6rmtqiXRnatWPcUXBPKDR58AZpVGe354SLojboHZwv1hdXv3yxnsVJRv9huBBQiTh6zy113vUxHr3MqMBobqSS",
  "key2": "2QV2nHKjgSGeCnBBQMQXcvnbGawy6TvSfkxQom7VV3cs7EBjomeJ8iVYjph8xVZran9fzKzFc97PmToaxWbTpk3Z",
  "key3": "3UpWK2FuvbvDGfBFvCjTkXt8mk5GsJh8Ws3E6XD4BhF9zrusT9GZ6fGhJtcrcEoTJuDADVnJDCFctvRhsgeKhMfT",
  "key4": "2TQVqCa4PsKFG84FF5kTH1LJiFyaHJku564g6FSokuwAyKiWRi7E66PNs3Q4ebN1MqBi4AqThXE533uLJyGe9qV3",
  "key5": "5JLdQEgmmGmRJyezsnF5hktLN7g9QiXVr23JYcnqzGycwioQZN5gJXEj77fVxcsUasskB8UVuzpm1aJwC42s7ogA",
  "key6": "3i7xdAQypfCZD2BU4RcxWuty4cFmiB7qvzAzSV7Dxiczc1cchsSfhGS9YHSubCJVVJjcoawHpuPbo5QHK4MNUwHF",
  "key7": "2n5hb5Wi57xQdREzADQprvvVuH9iPeZdy9HfTrnrSfp71DhwMcdUr8SsXPPeKv8gHtqUgPDREKS1jcUtAz4UD57s",
  "key8": "3jksrpn4UZ9XKQNCrMXAMmnxefkwSwfdP5CG5z6H5pvuiWZNqzf1uQqyEMvgBpvS4oDWjSqUPrrAMFqKzRUCfg9K",
  "key9": "usTptaW4nxzW5pg7AKVfDrynj1C8DBSE4RnvJUrT19jA929Jsy36dr5afFQnNDYwJezz8xJ468ZKp8DHFuQWUFY",
  "key10": "5f52SCTRsoFqyAwK6CenebNE6Rjzx7LsBft7hbn8PKjkV2kgpnQqSrqUFoyupnYAtkSRUZZfxBphiWgnJNbT4nGM",
  "key11": "5jDVfBW7QLTovwHx5BWBncJHQQ4kvwWX4H1jW4R8MMfCSMr17oANLkBPgEk4qbUHTeKSPuS9HF1C7BW9AdsironY",
  "key12": "4zoLcrPscUPTHv2ynNLhvAX4rUCUviwspEJDNHxcB5aUc6rrJ9jzVvXqw38ZtCnN74Y9CCb2wtrqDiwdy3JJRXuR",
  "key13": "3JG3sXNoH3GADaYAB8g4ToxeF1u488sVmbDtqZfTYkNCGbo4rP3U6P7znjzDJ6EzTFw1nfYFG8nwmizSovVkykN5",
  "key14": "5cvbJJWZDp3vsEjjU2heKLjohLodK586N1b8CNzEVfFpACP3sUDAeKkjTiZQfcq3tgAS7y32yoBsiqC6DmWBa2xC",
  "key15": "5hFJUN4deE2raXBycRGe4uwYGeufz9f8sHeAZSAwEx6PowiXNzJQovtVBqjQWh2VD7fNL7pVbDEWsVnKjQ8Tj1Cp",
  "key16": "25qAHfa9YwET6E8LpeSCWkQ3veekfFuWD8YtH5oANyWQVpREpUZaTaxdYFAsk3Bmrqa3K46SKyp6fSiEiL5btsog",
  "key17": "2oDT9rLhiqc49t45Wg7Veqw5TimnVxb5N9aQsKiesHLudKtfaKajx8WzqfdhhpQVgBRQPkNp6nPixKDAbam8aqVQ",
  "key18": "41u5FimEPJXDmxE27RZbjQD8Np6xSwKHg8PYWSL7sBM5XW4He8Von2F9BJx2vMfkbmG6Bch4UQ1Hz7zcB3EX9rNr",
  "key19": "2aoGbsWKchxjvgPsUWqFE7suPtiVwFN4nPeHMmtMXgS7XWbCeFAS9wtNH8LAgVmqxDtmWtuByL89dRXLvvpneBt4",
  "key20": "2iKcM8RAk5FkMxjEksCtypSBFAy2LNfcU37o6Yw9yT86Jzk1FboyoDMoEW2HcdxZxMRajL9YfsxePQ3eBLJUtaVt",
  "key21": "3jz4oq34okTyDoSCnXnu6CWx6EAts3Fw99LeqKw5jrrVfZg7Qpj5Ez2HBwiDBSFQPXRoPmWJsmBbm5wzV9pN8huK",
  "key22": "5mzxF5RK86k3D3X96ZrLTbEscbX78h4NpGnZT8EGv9xjiTMcd43W7YRgj1wHHziLegQTBW9bb4VhAPtp31eLnps9",
  "key23": "5w8d1iUKvdy9VdWuwEuQDoXzMDjBmoLm5dCaaKPH7PQvZa8ackWu2kzU4iiS52jtZPAdWKMiH1cc3aCbogUN4GTE",
  "key24": "2YNMbiCujo7UULo7CR66roZ5R12qxheb1YU9GMa2pQBzsHnCDhxHiWbr1wwjf4pJLafDG36AfBBK9WMKEFg3DX6i",
  "key25": "31piejudq4Xo6aypT2V5vjxMo198PJsJGfU3fTPdMY5H8kuNVGVUiLetBnUmXG3C6f1Lvj7VMgqMn4o9ew8R8ea1",
  "key26": "4E8NPcRscQq7NL9nTMa8nzrhTvLbMMtUQuCqCG819VqXoMvRRtyLPqRR17XVpnMX7EkjecovsmNUvMNovqbqJWfU",
  "key27": "4vjqT7zGYoMXXmXw5eUZLoMWc3r6BJQ3bge2n4tiWMxqgUhwqgDjhcJ7VnAhM6S7rSrLhKinmuubz3jRyT3MonRD",
  "key28": "5cXRGtQw2j9f7scUnSQFX8iMA4ADTNRr4EN16nwwDK3Z24son18MbVVL7HSrZSn4axupLHfL4j5mp5d9M34abV43",
  "key29": "2UtjybZGzVKoLQVN1hmvU1qB9qeJQKShpCKnofx7NrPCYMijeNDradxGA1AoveriBmYgjENQjiTdLBFEcqA9dmQG",
  "key30": "5YrWBgZJEBudSijFgpkvMh1ksMLC9QdaRSS3esJAnMzMnXDdcXHXFjQNuqNM91UUNBVcejb8bQuhWiQ33DEyuFSB",
  "key31": "2aJM8JZZV8RKAv19GjdXvrXMARZeAPzDmu4PCfr2GJWN7Zxte87moBU35dgaQV1gyEwCnVFhtPkD8gFqY79ExU1K",
  "key32": "bngZgQHggNANFdLTPe8PVm2VaNNoNwgrBCAuLjoeXS8HfYG4PB9YcHBNMHgcdmp1DgPCeveoCuoMa1NAUsQh56y"
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
