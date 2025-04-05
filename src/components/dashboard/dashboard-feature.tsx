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
    "3PRYqNZDDqmrMEJm9mSdsKeRdxsAMgTFu4UhmaaV7hMwMsGMtatTFLjzgLykcuvVDJ1tJUUSv1rRm3yUyfPQ8gqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25kBMwRjjXtihKPz3upn659xuyH6rHhLx6KfCaavZmHYaGcuH4UDPtre51iSfcZKdrqzcAHkU5Rg5uh8ZbRTcsDj",
  "key1": "2PjfkhA3HsdQehN6fffq2bMxWNn31951neMYixLzX4STvJ8TrjtJ3CRQRmCKWW9BUjmNPN7ppvuoKRRTbNfxpKRk",
  "key2": "5r1V1kE5sogUKsGqaGJJ5KpcWDeSSf2UjpgSjcK3DoXqBxWF4BaaeTV3MfGx6jbbEVuUiwCVm5bidptACDor7Ys4",
  "key3": "y5MwdD5u9KND1poMWFHyPG7Ag7cQcYro48HcwANWaaDiDy3kPcFSEtm9fQfDTXjW89kJgVoZ7SvmixtGCwDbwFh",
  "key4": "4Uo5kb43fwWZBYBMYBpcXMDmWFbpTv8gLX8HG1WZp4Xp5sLPN5kf81KV9NyjqfYGMQ9nF4i5SJ5CN4rTtBZXfrnd",
  "key5": "216VErGMf2TohBD5FeqJAA4UTRNHBCpe7KYyCc7vrosgMy4ZMGR2Sa6HAGAgQHQ4o21LM5vbpZSrbBe7TtkzgVJq",
  "key6": "4mG8Km9GMbYhTjjiPEztcYBxiR5eDJT8MSsNNbuxYVPU7PavEwT43qv8hSC18hoyuqMCXnAbtRxke7dzN4YjSKrK",
  "key7": "dqkAGBpBMTJgMK9Ytwcbod3Mz72qeDXNGQaMH4ohD1iXkEuBQHpaBqcX1vRmRu6pusPMTztTjGyzL6ruPmCHvCi",
  "key8": "pmEjfhpzJEVdKLb6VAeJZjDTkzhGzNcLRoWbNUp2vNy4pvFEgUr9B6Rk1dVbgqF37JukK8rD5GBN3dJmqX7bZPD",
  "key9": "67Sng7AyYv99oU3QY1ctnyySyyFq3hJbupTyRzt9xLVPK3aKNDZcNmDQLnfmwVwxFzq7ghgxNpHBncygUnfSToZ4",
  "key10": "4ZmpiD7ciEoCfzEWtzzgnSuKfvdJkHzQGPbnpQhAESB43pTi4DZxNTseXXN7LWTJfD1pWNXpj589tHWEnCX1sCWh",
  "key11": "3o31DJ5JYBPBF3U1Zj19TeQp4N1xnDZTawKZxfdm49qeFPPQQtMa7c5G67GodQLGFtnxwpCs4ASEfTinVgBYLLTX",
  "key12": "54LLdbpRow3AMQbfog3rKk16thfzAaTTWConMQe51tmhFVXePhMixVYf7P5ecWB8zk9xuhNr82ZEk33RjoLYPijp",
  "key13": "4PEELn5DrSj1VEU7yKzi9mQbyRiVf7UXyE8uJZ2odrU8qHpGyTuDYdpo732gtFfE7qdzWv26uXtphVMd1THZfFG3",
  "key14": "eF7QW3F4BDGGjXWXVXF65o58zDAiZbehtWNmVUihJVTjsvykMCiuY7dyQowCEWnbQSVB1Xfk45STPcD4PTtdrvE",
  "key15": "5CrEG5qQifPG1PuUKriHk66R7EkBq2qf4P5dzm8rXVZciCGf5F6xtyccwzzGZdgEtEJciitCbjtmMQVANSFJNpUo",
  "key16": "63HmRqMguD36a9wtPJxRJrVFahjeDoRscBDKCS6nqXkMhsRRKzjmoKxfyBNBq69t6zoanVXHqwbfGUNRghLKP5TB",
  "key17": "4eCANirS5L8e8VgddK4z4CFc7WUH63uGN2BedgdZqmFp1HQio6f1yMS2wAq96MG4cRhZkTPtfERjurByey3TDBNn",
  "key18": "3sb9tgshocGzz4fukMxADfLHn9hvW6HFDqZkEcFgikty3ahEtAuu9kGK2aqhnm1KBnUF6vxH8zLro7A9QWF37gX",
  "key19": "2RJVFZDp8cTUjDHTdXU7oNmPg97mD2ZaZ5244aiHAcNy9woGZRnhUXVB1uggpiduV9bCfWSdLJvMqpmxJ6A5cV9S",
  "key20": "3PgQtpALcMxgeiD3q5HJUjMkq9G26cPkQLaEWopwuqCH292ifBhTtiFEG3BXnszgyeRDaZ9k66pGV4ZiJ39dua2h",
  "key21": "5eFe1ykYXaGHnJD1JtKHmfbWksbQdfiEYfsG4oUwHwbJnYmKeAPmmCEnWssimnrFoDowa779KoLVufWYM68Fff11",
  "key22": "5YVBbEarGWTu4M3SqHg841DmTRcGGbMxSQcNwfEsAVxG9jW5ichwUiD37A59FsB6DLLFCnXnUENsfopcRzvpzC16",
  "key23": "3aJ2xLPN1fTux9GALHVSbBSWvESFNzoZC66sVQPhb8iSDg7kX2qVmoASo1WggWi71y5AZaZFX72BBd4SbWiLPosF",
  "key24": "CNf88cXXetoF8Ty1jyj2kgevC77BTPYvYQ2opye5JdnoWhJLjcq2m7EbQ3A5XJjuH5pBNaEKPhd13A8w4BceUTF",
  "key25": "4CtiEjF8X74gBCZ1822YVn8yXsmaN7TsJCiuAz27DgJUnmZMFCWZ1mGrrGZJ8vY5Y57Wc5X61czTQTi5kyDNuChu",
  "key26": "2ULvhW6mFXAWDdM6Avhn62CGwJGFNVkLJL24o4a3tNQyfjuLMbtZTFnzs1syX1HkpNMnz2WwKFNAsPnviFnnXfcj",
  "key27": "E1XoerLHkqycQ22cPALYzhWFCom7Ux1zVsY6Hg8qXHJoTL5f5JPDNDLDUG8z1ndCTEsQK24uBWrdsDWE7sX6TQ6",
  "key28": "2MccC7GWM4Npf3sK4j9dyRFsfLL9EUYapVXeSztKREeu8dj5yph5QpGnGuCNp9nEnv1Cgi3GEakfSf42ofn7LTwd",
  "key29": "56v5wHyfgqjTXiVBswszf7i2HE6rYYMBBiMRY1vH15EUbMc96eEkULA4pMBNPNbgyE5LJe6ox8tHpRBVBA6Z9ZUk",
  "key30": "5UQ7X8Un3756aV8dc7DiMyeCz1fEGAByaw6RFm3GmviksZMGug69kEuPVVoeFERnWwYyoZ6XGd6j1JPWWgNSfsDM",
  "key31": "2hgtFrvULXa4hVQzMYpmSfDDU7LLPoP3NUZE6PdmNgcC9N8szGhfVC1QMrXPePtyNuvD3S6zF7gyo4mxXqk4g1ZQ",
  "key32": "36zhV7UefQL2ueo4fxbuR85WRJ4TugPiuUmKaxQ5SVj9V5s3pNK3c7jnabXtgWcHPgZgxF1ntpkf66V8Z39dQ8kF",
  "key33": "3jjxVRUBXARfkcintF7fgvytgLkYnb971Uzj3tXJV75g25cmWjw4kiM7VmmVCctvxzqRF4uCKj6bEctGZn4C4pHA",
  "key34": "3dbyT9QBR2FVWRY26yUZWSVf1U14EHxVxwtixKAJPEAf45gd1e44YRhjyCJpiEuVxzX2SCBfcAXzz42xZGmtNjN1",
  "key35": "2oEfRtRC1dEPpt6zk9w4grNXt6r45Bd5K3RDfaUN38eUKWagthZShjZZA52PvNN37wFB8G3WTGQqkVXRnHi6dLwh"
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
