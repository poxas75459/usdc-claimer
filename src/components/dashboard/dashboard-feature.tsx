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
    "rJZXouFxAMJCPL7aVSiZxMGBUj2nFNTdPbWsCT1gkakmYYWWydn7iSsYQossPNHcst4CDqZDns7gag41jJ5trYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UN2ezdd63UrzyNTGHooA3TmioAgkE8RFU4dkRvWqhoUtiSomChWszuYDd7BWfZr2j3weUcqUZLinTvbEUwTBbY2",
  "key1": "52QCXN3FnzfQho72n5J4h8pzBWe2SEkRNnChbqQNYKT6SZqQL5T7jsm8C26HWqmrHrMWBT4kDW1zSEJMfG3XEHUT",
  "key2": "5vRaSc3fxZDwrBZrL9KEJqZ5sn25BZUGmPMSm5oab4WE1b9WZf4zFxHeus2ajRbrh1mw4o9mNyoV8hpLbkk6J8j3",
  "key3": "y8PovrtEPHiKe4hz4atC4jz7M53WUQXZdE8CF4ju5br12A62dUDenu1VVqpf4STPCTKnz2cBkQ3nsEfnwUVz4cL",
  "key4": "29YPtsutTbM9VNbau43t9FX9wT7mFXiMpC96c9GwPhRnsHBHMFKgyGPtB9wev1xEJr71VsMgW2qVHS1SN8rd69iE",
  "key5": "3BeRD6XMbAZdeCQJaWyb96hs2h5szQEFT9c7awzp2rwq26123xkXyv9waZ28sYHvXgT8M237SB7bu3BDF2Mbv5y6",
  "key6": "2eMYsvnE6kZmUZNcEgzEjqj1kY975UrtLjCropGvEsUynWGzocUfWHimBKWEq1ecxxj6GyR47qjxXjRQ9Z8oZsjP",
  "key7": "aLUutAojdEkd3aYRtU29ybyLoyaAoibj3Tqj5X55cWPMN5EjCKv6FBEFC9ywbpyjKXuecushvXHP1qf8Kjp5HW6",
  "key8": "3kaWPeN4KLDhgJwuYJLPfvZTLryDX7eTo4C2td12TvYtG37Eu5x5TNk4mtnDH3BQJ2dkjvUn18RiJPvVMhV4TE1F",
  "key9": "64DUjfD7ZQpWBzeXDrdmkFMC9ndaMUocnGyRnq7pX9ycyYtYwwZuonimRDXdncqWx4EKbdmkhKxTw3zdPTZT9kad",
  "key10": "bvypLyE6euvHYKsqyCmc7Aq67V3fnHZ46LzrmwQWRqEQ57F1TEtRJnS7EAvUqcMgFafe2igu8hygnEv2Qb1JUt4",
  "key11": "pUZVnXPkrEMPo7i39vQPVHKpdL5JeMfsLRsU8Nb9Bw6j6jWrY6gWkBCTWMGAjwjJp78Zq3rEf7vW4C4eUYW3nbK",
  "key12": "4XKZeswgdKwQwwZ1w6QB1HcEmvsoxueSoWsMgDwKzcKNxHWzEjodgtgSYzJekoZVmvG9syXyxZiwWaAtj9g8U4x9",
  "key13": "2GUNAewbFMRpp9YvgKLtH3hSwrMKwbcGoBjG14J46AMLN3y57TL45yvi84aws9kneZbfLvqBGsCYSaQKMdMy7z1c",
  "key14": "3KRr5gvemUbT1TPsc12k4u5ApPHfgeKcqxEvJ4yvZWx31e4hzWHkQXkfMMRa8FiepdrCXS9jEitCyBped4onGqwT",
  "key15": "3XpyDqvpVfjUKiP2e4myg2eYjTBUk3UuNFjQvAswmfUVdpbN43tLZQtSbzb1AHpizV8fRVuPPakiDb1MhAquEK3x",
  "key16": "Nj9eZ5nevGu2hBhVzYGoVKYrtH13jNkSqGZyPVtTo98UowfgH55iKK7Bpn4Sp74ZTjuVoNy9KFqYRKwYCsekfov",
  "key17": "5Vix3h1Mw7ojVMRKx22iX993uY4rC6h78Y7FBJdHpmosSCPVsLVuRxeQ1QD3GuU62K9SPwncRh255YuohVQ9uuJM",
  "key18": "5Kx22n6xLWAJxGPQhVykzvu2wJwK8FDDjMGD6L1fHVKVeAxqeK3Tup9tTDSt3rwLeViozkXP7UzmJ9LPRjpwDMCu",
  "key19": "4BMKjDfYVbzrv3uLMcafeaSg9WQYfu3i1YoZSHQDD1dXDg5L4UkpLbQPnxKyeoSyCg7F6FxBxcVU3MHcMyiSyfWX",
  "key20": "4taZRrPcbVhBRGVMhRw2WzqADAbhNTBNL6rKibvEfiQhfLnbwMw12JcevbPf3c7dEtkreEkfz4UzARn6nsTkaZuA",
  "key21": "2VgEZQ1o2KZ6J66mLud358N4K5UxTg1xrZzMnc6yZ65NNEbFhiigeXuEo79Sp2Nbbj5bdcqj2VUK3xhwsDG41Qa4",
  "key22": "3RqdFkHdfq5XforCWdDVFkTU7eZtT5eKietx3UkKTQpCxNEwGpcexq5cKa2y65HA8FDMwhraBKa53XwwxQjZSpM7",
  "key23": "1JnAdjWWqDZf3g4VwxE6USJeHiUWmS7b513VXe1MLu2hAqGGi7e458EE1ja3J4UDnGRFNutRXJVevqTFwkmKbAG",
  "key24": "3ybgtTianxnQ1B1skCjtokuJjPhzEPDJX5JWxubB6VWSJ3V38fPW3iXupXAgQscwR8UGT6azbLQjqY1MjLJ8r5bA",
  "key25": "2QZJrxcdoRu93stt9vk7CDHtmNaHnju5Njv72toBuvw8uKZQuRyC3wjXU8yPGF7HsY1j3rzNwdgCBDAjkJJ4AnAb",
  "key26": "2EQC7fJ2DHjq7saRFz5xJbd2H9sDBqx2wmvyZa5noyNwsAete1xN3FqpxxffjHut1fh92MsdGFdikWXorTRWm8hP",
  "key27": "7vYqP4A7MDvM5XDPmgawqvv1kiAK5pPo4WcmobrjQLSgFKPQfzxqwjRD3dAGNobc1GZ2WrXKGVkGrqS534hY23f",
  "key28": "sKyxWhAs5fjkyiof3z7TyBaGVi8ot8J6CPtJrStZg1y9BdaX9s2XXUX3avTN6ioLa7t1tErz9YygnDKx4id3dLp",
  "key29": "5a141mLgxdhLPhGAMZj1GQNxqr1Gg5s5E8x2tKDfohK5qmqa1J1Xd1T3BXQUgzm2exGHHuf8nErW6kVZvJT4Qtc",
  "key30": "3PQJJ8SNefPTRoUJYwyGchDHTxEAyZb1G9K4Tfc1jZyu7XaZ8JnxPU6KMugYhqu5yRGnpDDVG17enX6EuQFVKgVV",
  "key31": "2hSfy4GNpSQitooRm54vU8zxoXmpDHQKAXDqYBQGREyAJgDeE3pQ2dB13gzxjJymkpBn31np9vdaj7vjzJkyLBEV",
  "key32": "oB2e9SmUQRRfNbZxbYYNJVTe8fXm5sKSPkX3avtxa1HmAaDqNRkt8GvCZZ8t8Lmo8WU4HafTsZspnwjLAPCq3ut",
  "key33": "5KsF26UvXzXqF3DHLusTCn5fkTFfEby1xBufYLfaLsExVBeS1u7tsG4GthY667BQBLM1geptqbgc8ddW5gJjsyXt",
  "key34": "4LGULv6qFb71ui9KRqoQehPCNYPQbVUb713Y7Z4ds1nrZt77DoiGMVAXDSVZ3G9guSwUc4LRshDPprBDhJ1W7J3a",
  "key35": "42FY2SX3qibcXkonb29wKy8EEchNDRA6fWSyn8Jac4DtYi6fCXMJSt464UB4cUnNqFVaXYHG3WaCCDsDAXWbh8RK",
  "key36": "49xirRn83rUWKtfJGswnxbDhqmhgmEtvtT23RAAXt1bfBJoSReiC4vcRmnXSkqWAjpfWm7v1gH6onXaSXQzuBoum"
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
