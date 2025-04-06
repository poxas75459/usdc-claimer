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
    "51yYzw1xhFjPxGUVqyVutsj5SgSayNWe2GNJ6iXYtXR9vAi9LjwKGtP1e6GJnjowXkDPxFdnKrLDv8rewCxPAkgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31frznSp3TNBR5k68qqkFcAM3YJmBg4PhHMNMEM9f97Bjp7J8hpf6mWdAgZj6fKLKF9XTz9CevP4XmSBrtoTbijf",
  "key1": "2hTMsuzsjri7HWwusXGn2VS6qpTkstMMuWD8sxooRrc2hSx3VwnjAfgR1AjngtuTxpW5MtmmruiKSvh5XkvUqezv",
  "key2": "2CCKy9MZMXP3Bc5kvpfRzu6ZgZKpGw1toyysh6mqb82EjqjoSMka8GGhCmh3zvzmdo8DrqCpC6CrYfFY8MH4w3TS",
  "key3": "4nenCXQaPig7xBqi6goBvq32R9gXK1QXqijVDCJujUwyhXoqNZ3mAzh3zKeDQppWYpB84qFe1TetYPenULjh8th6",
  "key4": "2BHFbZL2wuxv6nwhG7mbBaxCe15u3JpxMyEdXMvLPYsJTWDgpH8YXux5hjUpscz1Zi4iRHMxqgCYUmPbt7cgTWqj",
  "key5": "3fP3PJRMaXm2EKJppKNCAt8wcTvpkqeXet8ezxKxp4GHyyQRoSJTptiMKFyKTKzUFsSo5dCkRkRPXGumkbq9V6bS",
  "key6": "5d4iyFinoHjrR7BMCFr2nvSGRUHRUCzzvTD2a8dZKdQ5Qq2uUPt8VTRu3rM9Gw6u5Tn7TUHe6ioQFpyBMZ71tRRT",
  "key7": "46dA22um4TiskhQ27nrM1wJHuGw9J9qkcDGLL33EEwoviB3dsoCQoHjp7R4tvsMRo1ixYgUjQw173ngENVhb7chm",
  "key8": "5KTx8T6uspJJaeJG2DZhk743UYCHv39NNT1RKywG5pGHu4MnfQw9yh7RSsptet9JKzS5tnME7RNxp6D3bCznDY8T",
  "key9": "NnvF2huhzZvXgpRhJhPoZBLeJCE1BrawAyFXLuoZ7cQKPFGSonkARVXrFMpDo2WQ6jreTi4dbFNpUnXLNrybngt",
  "key10": "3FCXWBecFyYe71sEjt6WK9rWgiD3cFZtTQNuax1o9tDG4e6RrCuV2AVV7SoktMcvjN1xNfTYhGFszPJjkJPB45fc",
  "key11": "29i3avMG3bh9kL7UzS9RcfBt58BrujUH25SXZYpD7oaMrMko3BCcpkygp7R4R5McFbEpRCjSCCFoJGUgQcKVUdfT",
  "key12": "2DsT74xw5D9aLdifaE8w9fVFD4cpUPLaVJ6AHLHU8AxbBHJu16uWNqetLgD2Ke8VJybkMuqSrg1t9P4ccySofpiP",
  "key13": "5BSMiBK9iLKsRyvDjfMneZN3VYssW2fDRKe8eUaqYnt9CLq5DLGR3o5TD6s4Vkv2BTJAnuBoCSuvcy4CxjRoS7V3",
  "key14": "2XvvMch7PZAWctxjtYBG2PuHQ8CXjaRmhV67GFbTqeA1eZTtE7qEmuzL7FRicJTqy7UzH3a7N8zkeKrcDFJzePn6",
  "key15": "ZvbkHrjbpDjc2EgZ7TcNYMEnApRXRHNmw9shGdN37XcZLgm5oa944JxnvSAHn2bbsCbWbTqvfZ1R6FoUXniHVzC",
  "key16": "27HU3ZnjegRX5fia5MCvqUfW4sAmUpq14aUV8HGF5wquKbs1nZ7jRKAbhp22KwSt5mPdKsHf1Zs2oNxCC1JdNQXD",
  "key17": "3vq2LDS6oZUf5362ZYx4VSvmaBMoRvKDUQRGW1AZL1d2GZRXStuUMFDPc83b4xedo29hvLv5uiFTKoQzhqoMZWXe",
  "key18": "3FAe96UTSXvqnro8heug3RvR7GHkX2Y8zNJwEvHjienhRH6Fxh2CMjmCNiqH5H1ohzz1GWwfdfiRATRjamezEetH",
  "key19": "5TveQofKnC9q8p64fhqbBzyhNqbDTcSP45cPNSAeKXmB7pXjfZ5aB81QFKASKPaC2Eof8Q9YaR5jq2keaRZ423gm",
  "key20": "2Y1xFKUBduPRPcE7sDJfK7dyD3hYYHsdcLjE4dSVrEAFLZwpEnJrjVUqgBSX97hx5AZrrRmmuCPAhNXQ9GpMw5vq",
  "key21": "2ddAk9gHgsQu1SrhkKok6p6osx9E2RPoC114EAjEzThKVttW1GpHQnoTbUC6j3YhH7TjoEmaDYNY2o3i9nDwxfBa",
  "key22": "3i47C7ux2Q8bVLBw6KT9yVrwH4riqZVQBcX5QzqvkExdUTZzu9aoPMPMoBYQ7uUnsZx7ja7jqugrWNYYM5PBCYNp",
  "key23": "2ZgZ7jxph4jhz8yrebzbAUuwuyuiCBQRMPhLKs9xfQeadARJxrGPu5ZiPULxpiDPSy3uhTXy4TTSksiDRokyfGzk",
  "key24": "2BEnnrmtnH72LpvSWfo2aaryFrqWMceoLhQ2rhU9REJs1hd21c5qbPjCAy7d5mSJAKXXmiTEVwG4mezYM9SCwtF9",
  "key25": "3cK2Z5cY9hesBSTvbfsLxY4PS15884UNhLupdYiCgCwEL1rp6RZEcFJy5teEe7wNPN4XmPW4bP6y8WnyVC5nzLC6",
  "key26": "3cdCvfCpCo6E77K3wHJmoVMvxS7jan95iSEdahUhUL2bvgmTZiiEWNcgNcezJRR7Hk72JhVubLZApfFerRW6LbQc",
  "key27": "3VRWcPpKoK7rhvUKSjCx8HAiU6FMLQwmKR82QBsfHAye3YHjPjhdc2jehw49EAv6kaqZQVAVr5ZCLbcVs64N6Nt8",
  "key28": "64Gr8YoWpWmVpsRPCWhVFvMaVD6BKFyMmUTx6YHRhCkX3ZZ4UyT1WAwgDY6ZgcwpMoCsmt8ZfL27DpF8mtW5obrz",
  "key29": "XSQ6PcS7yE3M6Wv2Tz7VWWvP6zCumDJEgc85S3oZzJZhbNk4Sys4JteVi8PW4PE5hLrWKpF2BXGVcrriBiGwZHK",
  "key30": "5jXoAGoq7JPG7rPRMEqU9kxX3E52wCKKXBzLd5eRo9cLjnoPSWTmXUdRUG4yxGhXi7G2hGSuGy3hh6jMLaE8zSuo",
  "key31": "2t1NRs4JdyEdetzQs9tirMXQzVW5KuK2ggnr4cvZRHHMiNo1PTt9v2c4uxGnQWpSoZwsHyT3sYSHgfMwxY1Nb9gC",
  "key32": "H1XDjhX7URRzyLcXotSpHK5sMJWL134e9FfBd7EMBQ3HEQMtVRpT8EFTqvQNeuXp6kR1DZWmXtc8ZPKuZH6QXoA",
  "key33": "PS75F2FNKHgtkLVhvD7sNE5vLUEXichkKK5waX2YGYkxuGrdfCz748LN7A6WG7EYHmVY9L8tB8xnXweFTqLsZCU",
  "key34": "5N5DqC5MwszVuRTZKL92wiV7DjVDu19i28K1HCMgrzsfYCKTRMQoaPAduZja5keuUGQ23rrfimtaBzMW6vLkVggC",
  "key35": "5WZubbvFMvPP97hxeQ6prgbSNF6czhTiQiYq8f8BzUqCmcRGP1MHZAMAWFpSGRyxWFihiy1mp86C2mBKoiv5qZn1"
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
