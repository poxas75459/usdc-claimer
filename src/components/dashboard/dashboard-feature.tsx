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
    "4KrvLGAnV7rq7B28i362hKysJ5vYSYLDnnTJxixYEXajB5tbxZhwJYvDs8YXoNsAdStKbpcmoPETN6nE53AkwvoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mZFWjMifM2fkMfPnAKXLuLrTP1hbbh1KkbhtgejRmVJj9YriaqjQXy6JNoMcJ5qdjKkBKJAZv3HYh7nhBv8Cu7W",
  "key1": "4VCx3yqwHtiVwWRrZzp9nndr3gQoHMFRR7eZZr5PxJ42Edc3eRa2Dn3dvVfiJbrzsxh1knS9AyLBBPf7KPVHrq7j",
  "key2": "5UW3j3Z3sjrsD2t9eS5Tx4Bx5L8TgQgHvJahKbL8yqTu7f2p1mzm8ktYqRfvMz2ZMbekJzBg66VeisFop1g4Mnwt",
  "key3": "3H7KD8AhyL5LGvCG39G8jv5Pw4HGvd7kJPA5SsoZcQBM4RKUnMdX9884Lo8qGcKNyPokqxaXkERXxsxsHdGsqVTf",
  "key4": "3Gx2eXURBZr3DuNHSYBmQNxj8kjkyrrh8kB2bMhCnVupUshy9tNwZM1tY69xBHUm1ZVYyFpzFXbvnkgHK1kveXMU",
  "key5": "3b29L3W6Bz1mZusNWRcEwfcKjjxF3h8CQtw7QwHkHyjS11gWuwjUGKwbeUNyNZAfVEmfHvkRRhqsf2U8iXzY9pup",
  "key6": "3VQWx7f39zWL1CD1xma6b1r29b7XMfQHEm8GvTYZjNe8cntyfwkHQxLFRZo4AMV2gLTb2HTDdQtudQydetMr7Sy1",
  "key7": "3MqNMtD1Xfrh7Kcm2Z8yeTKeF8NYCVpujoV3M1mUWQHEvaEDopEjkxNGTDLUKPb2ebF6wg9JKhmx8nqCp5ot3k3A",
  "key8": "2EhW3RYyw31vEJWZApoAuLNWrSvxhNyd3xZvJT9vTAjFzpCqkcaZSXJ9ihSDMzweWvdxg7HgnZGCiT8Y2CMjvQ9u",
  "key9": "4nNKKi4aqon2e34PshazPGRHjpwbU6NNErp7FLVG5EqtNHgqDtpvM4gywDTWvNFfjVz1jiiyYQZWzNpxRRbNP24E",
  "key10": "4k7qs5ZkJJxsVDx42baVTCCDMuRWVs4VrSuTHipSuFjxMvXmSak5xfMQQknPkpJoMtGh4WzNMPrqMdjMaspLmckN",
  "key11": "2do9GPVhg1Mz5cZkyLYDjenS56ao1Zi7zhEc8tFhC59UgrnxJNRwfxcKxyofLyDfsoJbGqmgDFhPrBAjbnjH7uYW",
  "key12": "JN4x8fhRzCF8y4PGcZTNGeoMGFTkoyvLpy6i2FK9xnR4CNe2SHWhrTEfSuGNJs81wYVXdza7a4VCFjLaTLF6VSL",
  "key13": "EbM3cpVKQigRhGcksV6Zr3FUBaL8yxFjNwdTQNpDiJHRdG3XX8UujS7LthbEDvY3iHDpNYBq5Tpq5GEeyhTqT53",
  "key14": "FzdGKt7Mg2DHdiUgnTGKLecw4Gf3EzA2Gef2yfTpXqdqidj9K89G4Hin4roifLX8BEkEs4URGHEtT6fcw7iJfNc",
  "key15": "2M6dAcgr9soALJVsp1ohcLoNVKevVsUSJi9XkJTLnybZwH1XooYmv1WH1djSQED6MN5pCznw6XRDvaHhTm3A9got",
  "key16": "2yLDg88J6i1zZEUfCXFBhxsavm5Afk1EGU11HDHE6BKZshW7RGzurqzX2vWALWnN6tey9sPmjVX43HHgbpRTh51S",
  "key17": "5gkADppTx4kMNLtnGBPNaRoZtNpZjmD2BMQLiHDNWzrb935Jc3Rqa7S4JPpbaK9nf13MVWpJ61tn4xjGgavV7bwV",
  "key18": "3rruuAQcyimQjAjH2Hb8SNd5MohSRhpuwczrGY3FsZJg1TzcwREc39497QKbQqcCs4tsqdiM4AJWJ4JiCqKmFYtT",
  "key19": "3pi1AYQwKQwDnVB4921EZ8xwcwnUsPPGs1ZqUzAKjBBh4Nq9WEfxkifWLSyAzFujjGGa57JhR7cPJFotwFA2kx9a",
  "key20": "3QgedwvUoeM71pTWo1Jurm8euJiGcYGjjUwD3iePPzpGV3HvYBfDsk4SDzoZTBFd9CKQkTnHgJGQLLswqjSMg97b",
  "key21": "WRiYjjrnHrvitEgh1Qs6PsNw3VSGFhMYrdCLkjpftJD5sySGKDBQMNwWLUabZtYfVuoRnbRSLmaJuyAdZqK21zy",
  "key22": "VQxXmf4UcEPmVXLLFKKkavB85rrAebjgx1w88CcaUV1GykTo65vgUNUj6nj5DgVER6NPmEHNnCbPm821rpJZJnL",
  "key23": "32UYd4EziEvRhRGH64PCTi23ftHQdrL56CcwV5H8Ec7mNGKx5q8veqtRnKvUE1RDwua3htA4eAT1D7XfeA7Sp7rN",
  "key24": "66xt9R2JRbvEQbskE4AJwDiJ2SHydXSVQRCt98g4nsNkwxNsxvW8Px4aWACPGEGz8AMbCwSbmmty7bJ9HZ45o9Rg",
  "key25": "32yfdJhwRhk1ymqew6GZDA5zeoZDTSs3XN8FbDMEjqzEXnExSjLt4VjRXUhP3Cnjg5dnGZATh9WTWgoBcBHz6i3V",
  "key26": "4LDvs1w3A9tVYta2JKnUNmxsWAq4DMEfjwYsgBXPiZYESxG215v9iqACJARaedb2cRFRCC3RzM3wq6vPcCD3W2Lu",
  "key27": "2ZUyBYhbh2TGNCedGHMcV98LGBUqnuc5hF2zEqxzSVCFttkvSatRQam3r2EX1eRoosG7YTjT8XqgPCsuYmWZ5CoP",
  "key28": "2wimrdsYhJKb3kLDJ1ZkagunAmPiwD3dMTz5kWiEqMiBaqWEjvaPe67oBwDbUcYXjimTDPtdQUvUGRUzTBm157Y",
  "key29": "2PfZpQeFVNsYf9h9EXziujWRCCFcqdNXGKy3vn9gc91py62aZDG7HeW9xLkkG9ZxtcifJNucN46ceCZQjperuyjr"
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
