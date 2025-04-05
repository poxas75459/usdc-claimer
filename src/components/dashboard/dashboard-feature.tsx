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
    "3EcLAqNZti2mVHzmgawvxRbUR8XGrtfJz5tKgGJxguzvYt6vN1ahe36yJ8RNyPaYQdBrMiWau4EFXkmfwEcmfKzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YWp4GQKJHZjGEwEMPCxwXP6Enn6dPLoaRUM2SCseW1YMafxqWhViYFx5hjTs8hTNhNp7vftMDr7pe9K7hPGmr8z",
  "key1": "avKtQj2wfrwUatT7URtgFXKNV1R8Hu54TEaZHPNVRk3nSGPMA1M38E6gPS2mdnf3ejPKgtkLzrMbvs3NUH4G9QW",
  "key2": "99uYGQ8BhgQhLhB6dRk5MGNEgVznmoKAEETNMrSL9xHatUb4osVZfvQ4hWxgnKHRBdcowGvi6uRfmwGtUFc7aw5",
  "key3": "5Q6Bp9LwR7AyGcyJaVRrK7UF7iY5fhvis9LEUnHyecb6Ta6RQ7Mhf7VqUJoz7Gd56nXTFXJ8RMMfmL5bUBB5F92j",
  "key4": "2Ro2duADu7m4yx6QR8uhqF3wwbqmCkNNYNUtkfWbuvhtfqmLtMx64wyAhYAdNG12suX21Ff65Z9BpF1iwLj3CnyV",
  "key5": "47uHhiQ3FEb4btoLxphbzPHmjVbiooPPsSovaAY4EmRKJ7JmmU61dhhzM6a9Dw2xELCz29eZzf7euTsSadxWNEB8",
  "key6": "2UT9Q1aLStKGYPitZjWZU6JEEGzxqRR1PLxAXgkjvzcDhLqeAWSM8jFNGXvA8Vj6CNfS7VY2951HtNSCED6uRMkP",
  "key7": "zzm55UEKGaKdAcVRPadSohnEBPcMn8fxmb2dx3akprd8DhMjgDrSrwJtBAqcJWav8dJpBnEh8rECwhmyeo4nD3M",
  "key8": "4VnRhf1L1k8GPoTyyBDu2yDFy6xxsFwnyEdZF3drrMZaYaJEnZpacDiRSUgrAwHnWeMFWpdioRhVhtsoqCu5t7u",
  "key9": "Qc1eGf3HKG7weW2aTqiVEhDQr58ffmp5LhRCKu9x9XLL8FQXBeSEW3xLCDHFoE6fihsHjmMyyCikzjkquQWehYb",
  "key10": "4ytDenK58TJ78W3VLZ9pWo64pE39wTFTjxj4k9FVtxPw71oZ2LkN6aVScAnkTZdf9rn3C9oPq2xAjr9do92Z8DCx",
  "key11": "WCfTJ4WsCgiphGhe9B2ijR4LSspsTXiPEwY1VCs6Hj52nmoTBD3PsKvrUVrDMP3tj6UXNwU3osxuedcXLwcL7u6",
  "key12": "2qmAKV3jPU4fzBcXy1bimrJuuwtNcsYtkpCH25qCqcLKA8HyLdtXDEtNtvWdyXSAdepEUk9cEsvv2LcAecb5x62G",
  "key13": "RP5eT4z6ZHJwTVbgnRyh7ssdDdJXsSqrwD7YANZzPFQytRddwKXdVbh1cDrQJ6ci5yKXTWqPWnwqCK66vGPJkDw",
  "key14": "4FT5Ux4wzQuA7UcryMn63jiuEzfeNSWtv2jXxijXjcdyxKba3qQPstB6hyAXsW2Cmn29Cw9PJYA6LTYuK94DZ3Fp",
  "key15": "5XuuZ8z84wrAiwmY3ZTMDXhJ2qERJuj6JaWqWf8BwYt6UQv8kiM8Q4chbRyy7By3YC4i9iTzr6QWrDHpxEY8JHyu",
  "key16": "3VK1wxnsQNRbXQ5J3ZHvJs2oUhi4dUvCibQvwpRPtbZCFhZfzJgkQib5f6M1vDhP9yhDjy8nJYxbRh3hcxpRfBtK",
  "key17": "4S59zBAAwiGBHFM2oooRDJjbbK5YYA6rNezw1k6oreN9XqESRF6DfsCHThKnD4PaJUv2z7Xgbx4stU5JBRDkrHA9",
  "key18": "5nxBQMZiB6t2JWsmvqsMGZ8HDPZpfK3hG9oNwzZW6eUPzMRsiS4gcs14FSKZWRtfmLLpkbyB35GpeEihuPWTJh2T",
  "key19": "4yqdh64FLruysdERkewCRUf8CoU3dz6DJwK4ctp8rq5r1tJXmsZXjYMkQc9Lh8LTxerP7HmvLpY3fpWbV4HSvYb7",
  "key20": "2kvpFxHf3fjotv4zR9zfWkwiRq3EvtiGDaCgW6Ud7G84d2f2NmczQioXgyojgUDwettcFiKsA4rjmWV81agKoBtS",
  "key21": "44kLn2d26wNVf27acxvC2bGma4ub5TBZsk4uapRDa8MSbXqXhtw7Uf3Rvfp4WLkpYZFZMKMowK2yMMo5XJqzyStr",
  "key22": "5434qLrwzjvDzobcJ5hfQ6hWyjv4fzszerywgDKGWiXsLirrYhMEuomwqQjq6Xs2sjmCuYBaWfrVZ1m9tCr7vWsf",
  "key23": "E31MuUucpy57thEunvNsjTXYYp7RFjew42Nm2emE4uKA9obA6we5jisD5hjCPUHLGh2X5rqBvCCACo2MgWe7z2o",
  "key24": "5UVmJgUh1cTiNNZMoSric7VVPtkxyseCQ98H9o4vRUAQZohdme6BgmsQcC2ndL7vNp8g8NMs8WCcdbpcT3M5E5XE",
  "key25": "3MCZrLBSYiKLzyxxY8tkdLv2CM2eorGCfSSFZTrffYQE9Bnd6bFsGwriU6UKSQX2mrG2iiNfjHXvvwSSVFoHTmrA",
  "key26": "4SYaNXvaZcSd7dEHfEMNrqBpZRuv8y54xhcaPp6okacJFry1j3CW6c2iuUQHratN9b9VDKTYJ8Bn64mXkdvUp6P",
  "key27": "631dx4VaBo19r4vehFXfbMoj6WV5UyszLqWWRm8YxMPzZ6cagDwjrZkmxyej2abMpkgVhMkCV5Qbn1fLRbkqPiHM",
  "key28": "3vUapaeQY2tznjwWqVn7e62aAcDFms1ewHQrDXAc7Tj5ncFhoN4tx1oefYyjTHnXD62D1TLssYUBLCbs9MGApX9c",
  "key29": "1YcdMffG4SWd5p69DBzu9VMTaQjrnkZadMmMxaKm1uVD3br7Hh9RKi6Wiih3F1xqe6YJ19vRyb8mGaWXif4v3eA",
  "key30": "21TDZSZZMDHPrb5W5FMb5BZnQLoHXFJdZK9s3ZGDktSFJsVczqti35LGy7MpVRhDXimdkZnSecUfwoYfC4K3ogha",
  "key31": "5mw9cvuZaL85utPpqHKRT6kPEb6NVZgMaVPiozoRVSCz6oqme9wxAyBk1V1dTnXx6RXv9bpGVqN14trbvGd7Hgpy",
  "key32": "2JzFpRKS4eoCrzpFyUAY7dUnbZ43ErzABSgAZA52TS4TWa4f9LnpJpfJuXrPZGKhS2nrp535Q3XNgWa9aoffgH2P",
  "key33": "4qDDPaFdN3hFVMM8tYrZeQgg4RaR7kyBPF787MSJbTJWY3yHp7u1k3HhKLy7CuB8rFiHvpiQktKA6Bmci4i8tojd",
  "key34": "jCeJCUx3rmZuZQAyBZyQ7Z2ozhX2wLPPe6qG7KW3ewUseLFsJygd7hv62EPnXh6uSyHF8JKe2JbdLVMD98P7uKL",
  "key35": "5rLrD593GaCNK7h3Lvq81jtoJvJZiacDLKY4NHeMAy1qMTAKNJ7KZQryi2VRiRytNApNBoVQvjJStYpLFMyRnmes",
  "key36": "3eN9z5Gux4cbv9WLVRyHbA2vvhY8Ct6Ua2Ae1t2fyxJDPz4DaRv64JgFa6QQew8CArcL8xsTYQ9ZcWEXYtx8rhwB",
  "key37": "383SQGKz42CAyN8kZ8egLydHkqHeVuVuAuj63ZXz9gxbPGofHvC7g6Y7cKUv83MgejbcdSX1NmAwHH4oyHFwvXGr"
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
