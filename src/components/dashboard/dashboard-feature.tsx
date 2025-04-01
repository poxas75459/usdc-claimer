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
    "RynP3y4mXQuPouDMgYV1vGwAzh17DPBDLdDTcvRym9oVmB8E2FB2JjBrqXdRiPd6A5v4kGuzLfPKLb2pKs2JGPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65SydyrBMJvTY3qks9TcbmdwvwuE26WPJ4MzMFuLJm32n3oWJYjjwM23zYHLWzh6TGq5YmwaPjqt2TaJse5tpJn3",
  "key1": "2LSVBDGt9JzBNC8GmyDnRBkTwQKJb4XPGdYyysp4cjpwLxmMPkW1y1nooUhZnBKVHiUWtUWZ7mANdyMcJDC3wjen",
  "key2": "3cEfKVy9icwQiivHmgRDcQGCC1rLVWkjhyr1JUv5tYtwzqo8qNjnLVC9WjtHNm4Aj5twKpwKM2DpY5hFaiSMSYmC",
  "key3": "SvoStErzRTkjf5aLRRhRLq1fj6JT2du1aG2jB7ZVnCDvXCHQ5pJ8VT8cDqWWTd5S83jB6DpF1aPPmnRyFUrG6Mw",
  "key4": "47qA7JTgv9hx5St6gBSeKyoCdqG71X6gAVHnUcfdfkoJ88No2Bsh28Kc3Mnb76UspbQeuf9LUv4wHcGSQQxSPC2N",
  "key5": "5zQS9YtXyjt9eZ1uYRtJZkupLn294GxqPNT1H2dJrTFJsF33cXFYXd2KNjxkxjN471yuXVwSJtfcH6WRkVMCMf8g",
  "key6": "5dvnMxAy9N1DVubMpRvW337sPJPjPRaeaAy7caJWiz1BxNmC2c2NaFbTxGBXdBAUVEN23jyv2H4fsNPn666Bt6bc",
  "key7": "3egnoDsaJzsHhmY4hdhDQgR3fh4iKC2kpaNRVNoa9Q1abPWVU3P4Z9crEhQYkAAirHaaBzLnzeTmoPn7onXWq4BY",
  "key8": "3s1rpLGWZQ79TfKxBw3oi6vUhztieHs2mchaJsN1AGbTbKqhtugdQGyaj81cQq7r3HqXduNgLZ8vDi1JoXSBgQqA",
  "key9": "59wN9J9NVRuU3peZVsMU3t19QLhYXFxyExLYAGDyUfwbsmfcgSjX3Bq7thYx6mYJGBH1XrEksk11N6qttU4fFgVX",
  "key10": "kfjxwLvGhFuMVoa1JKfXNSy4AhPvWLEEKj8cDuGgoYim6vM3Dh8FQQcPr3pbbVXiGpihthCgaPpJpiX2Cvdqzfd",
  "key11": "5gTM8MDmhVDU3ZU8g2nxfFKjvdwFvzEPC11UAcPSnBfQwZYiVvvgg6SVzgWdzN2vwsJqAeT9X4ssMw5hqL9u9fRb",
  "key12": "ekyvBNNRX6wcAFQbrEPD5QD2QJ3ksPCuWst3P8jhqPaVrFEeSH8LwXpxj156zicwqfpTNuwJEVkPemPR15uoN69",
  "key13": "4xRN2AXBEpi2w9EmYvWNLvCnKXQiNyT7hjGvMktSf1vsnyi4oPgS9MoSFZVSW1xnw1Se3DpdCveqZbmfdWk6dcSN",
  "key14": "35mmhWoGSxsjktvNfToWSSUjKHFvV6DbhzA2j5wEh3aYfAFYf2Vf1m1B4UiexG2Vg77cGBKzqS1iUmt59gSpEb6C",
  "key15": "2af216x9xY8kB9PF7qJJGYpBw5k7ferdQpN6J1TQgrHoBjjmJpHPSC3v6MpDbndmZdBmU2iwYS7pi1MxMynMgNL1",
  "key16": "3HYHLKVNq336rmrbbncVWudqCTnWirUNnA3pZH4bUeZ4RUTR75VitEe6qduB681EaN5Twy2JHaCiFuzY5482oUEv",
  "key17": "5SFe1szdG8Xj2xjYXuHohdmVedpqEskumcX8CACJ3s9PEPhLmcESWgsYgz6hrVW9huiSoWb5k27PFiHGnztMj68L",
  "key18": "fus4oPKLBiNH81J7VD7WqV3zzkdXnyuWnpgUPw7KMqKTEvg4qzR1qdDGKcS8TF2QkjyrarfXnXJxdLiEaeAWQ8T",
  "key19": "3hDkwRprfNykVq2wTSJ5b8gFftJxfJjstMa3ZzF8eLnoEv5sfABcVu2u13LAz9cuwqm7fAmH6juWkTGFNA5xPZKg",
  "key20": "5HW2k9S7E3HoomhoSxpzjEyPyRWryT1JvYawMuAySYoictFxmdQX6w2nbSAxNShu6LEkRPfV5YNaX9QBv2ZjHC1M",
  "key21": "2aJ5bnyWEAuFMeJozjZ6X1AeMdvpDDL4MVfSaiHMfvpN3aC2W6sT4tbThNAQxL5AXTjPV9gUr3C3ZjK3EsrFmape",
  "key22": "2vBKdEzceRfjLz3Mf1VLNHNyzjdpbmYCPpdXP6wYeUG8kJFnmgwNxgzMKkJsQqyXakoPZjdYtzMMTSZ48SNASn74",
  "key23": "xMbwHKaCUn8fymQuBCndDXk5WdDumP81fRKJNYQkxAA27FvXp5uCUkG6aSFXUoPvX7AUiRWqfVrCUmktKnLccmC",
  "key24": "2Mp8HjRDc5HcbC5AZzXN1EDVK3vDuRHMhreqh8yCXgeaSoQqRJW3UsJ5MCCxwsLzLPisagimWzkdVpBwzf5Gm74z",
  "key25": "4a1VtzNCbZ7GHatqs23y6uo4Ra9toWkCvA28L4ut81EAhcg7vsnU29ZSZLAUgDCge2n4FgfXwZPiNE3xkDsEubjH",
  "key26": "41rvBh1H2TFEz1R6xGDTTdXY4uFzXJoYKFdM3TXoTtP8ekVH41JTQhZmZvz62wUZLweKWzsaaunaRF5Cd7KgXay2",
  "key27": "5fkARLutQqi5u9FHnGrzdWqtJ8aJwuT85gsXDGvhR1knA7QymexkFPg46RXMQHxCX5svTXhuChMRfePgm8xrPJoQ",
  "key28": "4G3PLC9FawJSUFRycUDyfpvYNEFpW4Wfhb5j8bMxFPjaF1FfZcCJRt7NkybzguhMfw8RkgR7GeMF2WY4XL6XqGqh",
  "key29": "4tVaAuriqCmcMvPVWaE3oURJd1pUjQ9j4uKaBs8xSJV4b3UCXW19eobUftzHR65tPdY68EKUrnCiLdSuLb91TiVY",
  "key30": "2nDUqCuc4vrXK7AK4G1JUJpygBfYNvffy8vEd7jWmpfPhQ92YbgTwrW7WPkcghLPLkfGc5BUWvACBFEBJyFK9BNx",
  "key31": "63Y86fASBkmetmY6e1S77b44pcR1uvLTuGbrkYfrY3QA8kefzvodNZ51FQcrpFiStBjR6B7oUvyKXNKKb6B89a2v",
  "key32": "3kREgv6Sg6xaEhAHjdPbB8MmcMX3g7Z58iGN3x9hGeyq3uWSm31pQD46UZXj5XRbDWGdQNCg1ngVkNsejuH5r6Qa",
  "key33": "5DJEArmExUQFK4eyPMpaH7N1DoVMDvLo6po4qHA7y8dSdp7XWMsUeGYBg82bXCcS2jwtXLkpQYdyBCqm4P392rhV",
  "key34": "mS4DGxcEr9gNYwDsCyKPTiDzPaEyfytXqMijXtTBnobVmqiqvMQi5SGJQ94na6K9zRUtj5hKwEVXnkqsQtrwmaB",
  "key35": "2U7MMaD54c6sYVL3FTV8vMTiVKbKWcFA2NGZSHhqfmPPKkgKeQCrXFbVVQMWLBP3ypjQkXL82vm5MrmYbYhTo8yh",
  "key36": "bBm7zbKg5KAfJN5fwuL2WTvR6An2qoTKFhTCkGgwcgDqjHyhFBEqU9krrxEDYwi2CDDopr97J7zewxtqjKfCyko",
  "key37": "2AACCtNBHGGf7s9Yk8eX72wgHEUeqJtijDFtymtvEYsA2F6iEaWS6nbS4pBKRdWGv3GP12scEb2egWgTQyccYTQZ",
  "key38": "ApnPBHpzowsmadNqCXFwrpgHsD7V1ZhLH4dvpuqq3zC2STqNK3gPJ5a7riQob8TV7Wor3mrnj76R9XttvxFsZL1"
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
