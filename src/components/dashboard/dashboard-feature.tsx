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
    "4Kb29DBxoF6ztB2yRs5PKTNGG7RkqW8CQQAFUbL9LQvaSGKQgr4aLg325nobfSV77JozApUkErCxYCYjvZ3vY4cj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22mq74YZyKfhC7ZzKJssm3KskmurkD9ftqe4GKKX94u4Gw4MmgjfL6YBKidkuwKsWZW81F6Mcna4mFmqigNqjRs9",
  "key1": "uURvxWtdsG5tvLkUDmwzB4rZiHdp9PiEr1d2UvHtmeDcskxe2zhkmtwicg5Yewk8CuPAM1oi7gtBcRHYwTQcoRa",
  "key2": "2owBTzyqWZYo38e4LUZL4s4oFstXTETUzk8GXs3BoCU7rF83sJSsKLkrFhorcVQVpxscKBk6EA62SzEyMBo4aC3t",
  "key3": "3S1mcs9ivd9N2cpUJp2Pm3Jax2P7bq2SUNrUgK6LcUFhmN4fauMFDWTQVhqs56eSLAqZTC7KnggNuvMUo5jqVLdQ",
  "key4": "5PSspKtSstFCdQPL7MNkP8S5GEFDTRQLBypwEU5T5eBPujdc4h9GwpTgj27eWXJmLJ1CCpcMnYPRaXdf77trjxwF",
  "key5": "5rUfeiXePbACsfZTf6xfJmTQb8hWi1w2f7bythJizqsDjQqeHskhTQukuYgkWRZePKEEMWmUeYTEaZoPuB3TmmrS",
  "key6": "bj9aD5nmVmLKUxWJKDJRpxoF7yy24v9YaJnJGykE3jiwypGZiK71yQ8GnPZY2pPnWaeEZHFTHz7ZNB3bDgWBZaE",
  "key7": "22JVpnb5qdZLKTPZbPW1t6BYrM8MazUUdj8zqhpGAoF6JxZpZx7uhBinAbhQ9JvHdHPTxUBgm5NtG8qiMRNAZePp",
  "key8": "3qEuA7xdtZXmzrt3VzGgNePARprFmG2cydZ4E4ryNzMMhsNLC5wJM5ZtRL944YdcBg2hemb15LsGDqcmUXam2djR",
  "key9": "5iqemXaWiX1YhpxQGShL3gAQoepubx9XNsSy7E1YnbBsEqu4wabBHWfuiHCUs9XVSHrUJ1LMr5HrEMe9YA9XG1Te",
  "key10": "4QSdBERtjbZatnDWcidPS49uw1AVCmqjuVZDKV3s9x6iMcvWqFQvhbk2aPugC21BaY62C5jx1vQmAjGspMoqMeGa",
  "key11": "5ZgsAzqd2MxPokwXxQQr5UFtXMHVrzxYrWWwXnNVYMXsf9o7B4LkFJvzZbvRpKngFypT2EMYtqxqXhNHLwNKfk3X",
  "key12": "3i9bdN5j918JXAKiRmM4w7oLHcZwpiMa6x8KjxtGRfzKqaGSMNXNJtZtmyDbafsdBjSPUyFX5yv7xxRdWbPqC7g8",
  "key13": "2g8Jky1rL22CR7ooRfksyf7Dmj2pJTsYwqk7A8uBMKb2T86utQk2DMA8QAAx2uaFecF8zrxYgybh3wCHX3CXFv3e",
  "key14": "5bXL4niQgHBhVsxjiXaHpBoxbE99mk8DFEMf5mAMTmNADWCdWz6ftQui8fHczC5aJyQjV8oaHkcZKc2v3hxvSSUk",
  "key15": "3zzo4zJbHtZuPj9W2UhAkAMhuemELChGMo2ZVX31xbBcxCYSVxQSUBdQ19s49g1HJ9UdPfBvfFmKqNyTb3wUoEWw",
  "key16": "5o5Tb4t9skzHKw1vvbWvaMu8X9Sek1nnSGLdce5iTtc57BwX5EHmQUdvP5ePJYKH3chkYnEfPeeS4DD23mLgMETC",
  "key17": "5wMeFf9FqRStiVkPt2i2ZzBj118NWXsq81cn5azKTTgExa8fJP5Uvh1BKQE3mfS1SVWeL3951hENWsyDncFRipQH",
  "key18": "5U6BxSwc2R41Mszd9fct2wPjGw8N14GQLeakQFMbnqE6TK5FMPrKMnPNyHMGsrDn2YgQG7H7mbgg5vBJKSGc7bke",
  "key19": "4bF1FXu1NokkxwfVvu1zACA6QvZd88FfBMrowySJbaQq8gyeUuVCqcVAa9JCFPaQM1r4SKm1emj8JUsg5UJNYBLj",
  "key20": "3RouDrc1kW2ScffWqWHBNShMcXQLjqJwEPrskqwQ8uPzB8rd561myYKe3WFpuJGUBnANx5mPDQcaiZ1mZacdJJeo",
  "key21": "5FoLrMSZTRvjdZ2vZqZHjYShmog6ipTF8fMNhN5nDgAG7Yj3RXv1XkHq3s36Q7LXhN5vtcgCFDgVVPCKZKtydqkH",
  "key22": "sxXdpPXvM1GCYMG4RttuU2XFx97wf7R6oP8WcBsFx83Y6UX5txqJiMEtsLpaxqGiaqiTuw1E22fMnKwafBqkyeh",
  "key23": "WpbsDHV8VMMyFQFBXLLHPqVBkdJpChJ3MpRKWgi8e45iqGcuE4VR2mnJxhDqfGA1QUDcZvffoRKmWhTz4akJdPs",
  "key24": "5QbvQvxGAtoimMsuSzZ25ipKh7qc7gvbD7aUtdcbiRPM3UFN3XFrhaUxf8dS25bzgNMVSLS2miLNCmnfW6mZeBDs",
  "key25": "CzwoVVRFxqTqN7bdHSsRv2CQo1xfmi71Jghmt8HjZZ1y14rtNkrx4nUnfbPJ6oq9M4YT3k5VzThb37CdMTxLUgX",
  "key26": "5DCZXuaPdbsA4QfuhmtTQirAd3LhGmwY4aRenFEM751xtcrGV5f5s2dDZRP6iqm1XvZDHgaqjdLEDEsDcE6kokb3",
  "key27": "5nzsEQ4BRXJaR3bUDahXfHScmDG6P9FaJ8b85Gnvrg57bFWJ73kknYdu8tc3p5keHgfj2jKqLLdTaL25NGPQ83PD"
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
