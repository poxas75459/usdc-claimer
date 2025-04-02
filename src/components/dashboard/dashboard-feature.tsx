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
    "4ERWqVFH9qmYpmTsDQLVUUGoyJ65qZvWzEn25JTubhgurfvzmHSvXsEhVq8x7nrE7yF9G75YBszhKoZjUwJWRqYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bXB2T17M3etGP4iSdBNSsBS9YJkB5uwY7y82gfzeyw6s2Lzr6a5CgcH4TMQf5MGoGUzdbRTX3Az5HQSFzQ1WoDi",
  "key1": "5iEdS1xbmTogdmTqs1y6dpKU48zWM5v7SxsD7sZZJer5VbbjvWGQnJDtWyDfWzjeDkuPJ1LixseUkNXfTVevAqTy",
  "key2": "24F73kbt61Dbx8SLMt5v2jyqnTKmD3ViLcQsDR22r8xV4oqe6sXLnjU7dUHWrUXc9dmUo1ZAmaaDJQFNbU7Ctn9k",
  "key3": "to1VeG1BGND6cGYTZk1cRE6fzooRfyF4XqrxQKTjQHDuHtkFTHrHyPftuwnmJjx16CqB8GJcm7qehDpjtMxNuBw",
  "key4": "4ptWanubESXUr9yrTp5WNmszsB5zVL6GZS2Tme6RWGC9R9zL7LQs9g4v1Py8UCgGZWMC5prHXzDoezE8JAvQBrD5",
  "key5": "2hAEkiqsEALsLmB9FSMhTrET7nzYagwgXfKwVkL3fXrHj8B86xJAHP9vKhGrRRAP7vGLwg7Jz49EWcZQ7WMcHNS4",
  "key6": "4zhV5DMC8t5r1w5GAvQ1HnrUD4f6tprX4fBsHYVvyMBWcXAD37adGUbuVEw2LdbF4pQP7MhCA2xQNYG65MsU5R6L",
  "key7": "vRJjr5CHcqCcebwtNvJyiWaTSU55p2N8WhnyJRG4n64q6Z4HUuRe1eFFq5RHadxnKnDxXTznS6C4vpk7qszJofq",
  "key8": "5nonQfk4qY3J3k6HdmR97vnqDWW5cdRX9thvxSBajLpzSuxKeRf7E5L1NakcnJoxDN1mpQkYN2owm6LDJyHgpv3M",
  "key9": "641PHkQPhemVpHjPPvUWt9tbLy4A2opAzWxmEY1SgJAWsuUD8z6so75XpcWf2vyh96prixwZc2qBT9E7hQ9F9mSJ",
  "key10": "5nuNqPjfbA4cWpaGGzuexgphT8ewaX2sntqPMjbXQ3FVCCk1ahz4Ts4EixHz9Mi5D9bNHw7WGotYT7FoXK4vAqJn",
  "key11": "bADjNxgv7auAJktHUSGvbMVKeg9wtAMC55hMutaJuck112JxaGtbsMATYCcBHoZPn8S9cWLcZtMyueRpjazfaDD",
  "key12": "5cPydfBtH1M8VNnRFDHC8nd5A1kdWHBuehR8Pad6vK6Pt8rPQC1ooP9vZnH1MWEf2P9y9hvPyY6Mf21QgmfQpm79",
  "key13": "4rjg3uYELSpju4PmoptNtYMdDjduJvGDEK3gsf4xzAN3N5cVbLwfkjFNSR9sfniuhsDiTQ7QszoRXheaCJzTZCCw",
  "key14": "52MfB7kaM8oGpyvhY4YpNiC8SK1gPQHcdRckoLc3HDrDAssz8iNEBXiwcR2J6rDopktc8NPVVXxe8PQBkhJTTd2Z",
  "key15": "3BcVC1Q8YYQZs9X3NziE9koQ4jg95gUHSJwGKzS59pf2tzU2JoLbLeK7zyFv1GBXi5CTVudZVcj5KvjjxeCnJWeK",
  "key16": "372yoVZDGcnkozXpKYJtEeh7LYaZmYvaVFnD4L2v7EJGk5kihxFDLMBtzgCrV4w47NXhqcihz9nEn2nFbGQu9nqn",
  "key17": "3nKjpDKEgyHUBx9X751Spe7kKm2uSh4ZKXCgWXe5jJcLvKc9Jw23eHbZzZhuR351JfHwhdDbHdSoFoLsvhZHMPBS",
  "key18": "2CTEzbrx3HHFG4XMkLvJFs53WAMJ8uf2hNNK3FANpHVya4d8x3FMwJK5ywdY1DQnMZrHruErUC3t8LN8uFNfzNPq",
  "key19": "2kNDWoW2ATh9p2HDbY7CaozpqbWHiaJzrTtRzCbDnEfu3gGy88YvkptTQmBRejvDsrELQkTEbkC5gkfoGCSiyJdH",
  "key20": "2H4ohZtEjK2Qhuej1FGwCsdFxqDWAQjr6imTdgfTT3b7suYbaS1xYKdhk315WZ3xAHWnS16nUNzC4wrgVKKwJgWX",
  "key21": "3oXMGK2t6Tmn3omrQCR1DxD49uGqUMJhx7ChZHdwAT25qWXcoCCRumhUMPgAo93spBjbwMngCQFPSMzjBJiJndFC",
  "key22": "PxszteETS2b6sWt5hfAAL22rD1oFkoSmsYzT5tMRiZWxdcBFiLWgftBkHProZkciGkEC26856zyfHXvxV1t993d",
  "key23": "4rJeKaF8YzG9pRKsAo2SdAC1VmapsLSAzjYDbuTcNSS8iA6ngPAyUToWVhUcP1PrgRPQB2fvQjvxcpo7hUD9BTDv",
  "key24": "3HuMsQeu7VDyjPqCHDr8DwNV894mHUgJBU4tGuLWyrq68s67TyiyeY7pgdCfxb3W71gXK2cFQ1SvxiMJAtDCmyw9",
  "key25": "4VBusJW2vTcUZyWzjbESbCg1CFrungt9xdubDqwBjJrUmADRyUfa8NFGHQsvLundWsxhKFSJJzdaQgp8uMVRivwc",
  "key26": "7HoY5gmevqVwKCscZWDsVEuw5f89JcNHQJ8EwwEREP8V1eXW1VWxQU5UGm6gZWNpMr4BsLFZrnhuC3fCgadiVB9",
  "key27": "4vTzkZ4KbwuVTb49bzUFKd28sjcaKu1TA8ocKeKJBwJCgBcPNAVss4PHoL6JhADTiyfDzL2notAc4d5M9C9Gfeww",
  "key28": "2Rc8PsVn33ad3faPafg3g2XN9UDSvvvEdJSQRdvh1v8hPcZtNsKAC54Vxs1Ti9WqFY6m222fEhhm4uWLExZPD84s",
  "key29": "2YnSTudqKV45wxB3Qqt1eCz7W5bJjLhVQsUNwEfBjahAXtGLzmBFCfnReUGiJ6PfyL9yEHp19Sth33QB6iUQ8J7Z",
  "key30": "3aJSVv4wgbEwQnptNBZTpP4xZucz2BLy8pk2MoSt2rc6MqN8Wwzvegk7kykoqJ2PtkiSJm2ZZj3kdp8D6f5tR3yb",
  "key31": "HgUVQmQ8ycUDdJpYwMycBsGbKXQsTYMbyKJw1g4erz5jUaaxb2mTTKVSK9pzZZNJBBzgKHFN4MQWkjA5S1teFAM",
  "key32": "16JPUqvptTG7GZBqfJntCDPsXsntBegmXCCcnqxKd5o28a7sBA9kDcYhzbmNztANDuvQuF8BRfRYD8p57z2k44y"
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
