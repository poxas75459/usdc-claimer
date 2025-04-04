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
    "2XvZ2Bk6N9mFQcBAdfwTGtodHKZTpeDTpa8GwUnD8yuVinUTA66vAvQeK2zrZ4yXM1U9aDGWWmhbGCESQEHpf5KG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ELWnbVPAWz5qdMcs1HsTGEUJumWwWydpcS4uzndRRSk93JCS9r45t2qDpvnYM7gVbaAiNcKTMWEgrRLwz4qZ6H1",
  "key1": "534Z3iWCTFMJswVYZWD1SEGn5yjmK3YbbvaFMKBjafdGkVrWpmGt9y6Fj5eUo99LXa87CEMnaFaYKMT25Ucq288N",
  "key2": "UUnidSnQkvAaTHMQLtiA5qd5ndY8e7BL8ZUdLJ5be7mKkWjiZrRpuchw6YdD4QCG7tkbJW5LNpiA8u7M81Ee9HB",
  "key3": "5b9A9Rj2wmPurMyebiY9DBCT3oxwa7H6y1QQV7FVT3N5zbNDYX91JjXYy3vso7SRpnK4k9PPK7jxvZjstg2aoRFp",
  "key4": "5eoAgTe3JCLHBugPWmBZgMvxJv28CkPoxZopzYxqdKtcvXa1yY9g6H2PxVxJSQwcXEZFYEjCExauAmyRuhS9w4bm",
  "key5": "5TjFchbMDipEaKLTAjncywV8CS8eTX5MsnLaR48SQYZT6dzMNvzyKRMmUdX57JsncmpUF82hLuCTMkrb19LYoEJb",
  "key6": "5SBd2JRGYUkbnRquDjL4n7ngDZpFFEepdKFPJ1VpXg8hXDK7yMKRy8YGEkGvvAg3ixZH2ZTFfq7nXxGq249ju6hv",
  "key7": "C7DXbJj4pM34r6hWZkzcUc9oSAni199tsHCbRBrfenEWj4xwnQ2m59Mz3wyQSFnyjyCL7uYDdXDdneuYoxHoGVr",
  "key8": "5kEPDb4LpBqy57FbPhK2iNNz8SSDqj8syLeNcxvAXkYJuXaDp7uBGaXm3sesUjbUFA2k3EtC7TkXskUNDBnyLSX3",
  "key9": "5z4u4kVCakbZC71maNuq4TdW9hXRiCj1ZFhGsbMC1xgrrugAJTqZPQ1igVFPFCGLMYRkLkNjCU4oSadLpNTFgUFY",
  "key10": "3aPE9J1ByFDeRek1Fk2jWagEJxi6jPKvJPES3p28oijtRt6Eym7mVoSTbtcP88c4p4LhDo6bFmRVe3mCKh2SEonR",
  "key11": "3sqgZXmSYkFsRbdrTUfsyun3fqMq5KeB8uiTGcA7xT1RS6YBgrL91mRnBxY958uedewVWXYjoxDjKPf3iXpsaGg",
  "key12": "kXMLR6nY5hPfuZdtnWHZNJpxDNkCcfJNzh85RM15uRf4yi4AQbEJS1bYWvFQQVxZ5afqeV8DpDRTZJzHxopS73Q",
  "key13": "644zgZafQL52qhfnLx7HTQqjetxcm3DZcXLt5nyYrgHGatswo4wAZkYxRnHQdSUHz2Tw1EDZUuKiiJirPCaMw4Jv",
  "key14": "4p5BmH9j72B54CLaTTzwBQxJnCkW8GBRiyWztpy4FXv9tMKB33gu6Xxj6wu8VTHfGYJfSzMsGwarT6mSaf6zMFEN",
  "key15": "5zwGB9UxJZkWh5yM3LX7YT6rJpztVnxQeND7usLNJLJEYZ3AaxzEnxstvEXFp6FSX48Bu71midrryF2gjSnUXLgw",
  "key16": "4pvToEustoAF2kPoqUkYdJixPcRmP7E4Y5EhJpNrSuQ8rPJGt1JeRkC1XFPMjdDRZrvf3UFmXhVxy5nnhqAUy3er",
  "key17": "32nMrJGyNqeyVEFTcQFL7FMNqi1tJ2zSpcFXG115FzPCJfD3XeS9DWQbQuuDZ8ca6iy7tYTDyMyEkjePKQrrJdZq",
  "key18": "5wSU2JiNitSbr8cgLVWwkzPD1DnVjYhEd4AhXVQD3YmuZRzAcu3RsZTUc6hnk7Z3hwBjQWgHkmRWNPGbdLkUsxNq",
  "key19": "639tnYaGKi42CeYQ25CZ7XTU6DAcTe6u3WgDnLwStTPn3rXfPfmeQnQ2K6KiNXYFsriK57afy6qfx8v9hSpVeuvM",
  "key20": "5Uctqc5G8j5KS3GW1RXuE9R3rS5rh7EUpLwUnKsdEoARyBdMeyrQEiM1fYxqvuEjcgSqF2mrRFrHg9yJjX9pXDUu",
  "key21": "4h6GtsnGojVBZYLzaQVH45q6TpCzdwpcBMUeTayi8PqrmfnJMz9bQaEmtLX4G22dKAu2jmHWBQFVipZezV1GcNHH",
  "key22": "2eUf2GcLc5qc8GY5RjGkPVAQTU62a53DDjNMUQMPjqyj685koRXtqEqNaSKAVxbAbf8PkVjaWniWqWDpXy3QfDHK",
  "key23": "538me9EpuAtNECd2B8PzsYjVKKpd26oWMWMcLPJQYjJdUL8ELZNd2M9xUwrpqsXQ3oBjhkPFzdNyRrp6obFKzkzU",
  "key24": "4PE8Kn5tjhQdvHKJFNSVabmMUqY7APVJBbSsQwGNrhMCzMuLQDvWgMgWSs2JDoXXKiaeFfpSbKZ54o8QmGAVGkoP",
  "key25": "4zj35Qq9XmoBSoWwhzgX59BGSw6SrV2HBvmRbrEwqqt6iiGwxMSynCe9ZWTc4pCokGHV32t3NQUZMoTCsgYnYTRL",
  "key26": "5STkxwFwdDmVMbjLSSMpev7bF2UUvV5gqdNHzBDgaTWkDETutX8wMy69Q5w7bcxBHCRwqRs8ZQE4hsiG7eZsa7qi",
  "key27": "4hk1q467fcbPvJBpNMWGhBkjcR5xCTQSoMVqFevFaSCC1CdXuuicbvQRXZtwKNVp4wCfxao5UUbNhYJ4UhtX9U3A"
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
