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
    "3YrkNXmc7hRp7aPeXg63cQ4GhJrXe2aiM51ebjmqMrieEi4FWQhuaZxRYmFM7i2Ag6Ax1rhxRyMfqBn6JAEn383n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JfWLcZPipWGqU6yt3jsmpcDhCT5mKTP1q6uLzBmnHgxhzTs4NEWAV3TPQWZN2WWuEbiTPSMyeraZRQAMsmsW9Pw",
  "key1": "35yeXJAEtXWzJF4XZMwan3DxDivhhf9zbnzHXRitsdWU1p5Py4MDpQ13FUDNCjGUosaF1MyXotumiyp4LjY2wWUF",
  "key2": "4KR6gJAfAL1d5AswJMXpRMKE5PKcRwuzyo9dc1gYnfK5DsXbeFBLF6yEchc9zi5z4T8sNt6e9gRexgmhGHfQppdy",
  "key3": "2eNEjQSpTYErS53bqKJAMMoRyvznm12Gyqc7DULo6RmqFqg3UL85QkkVUCsTzi6VBsXsPQnHeEpnfZfuME1HuxNs",
  "key4": "5UUfMrHrcVDGbHTo8v2ds7jdny77rZW859uQ6NDqyFQzXZhY6huLwG2aLUHixoCTDLcxU8My5TGqJ6Pm5vhZLpfm",
  "key5": "TgR28FvMYt4FMaqYbYR58d7JADUyvuo6Ek5nXLMjyAvEAhrC6TUgdF1hJEYytUGjwa2Vr3mbpHmXkxBaqutkhFx",
  "key6": "2RiV4v3TwbFJWSYXKPD5zFfN1mESvwWkQDVTNNZpwht5RpTKQAJnkMHts9aHaN5YVMtUPRo7PZww7gkfzH3QmpZi",
  "key7": "3y59bzURLNw6qhgx9LBtfX2JxuAes6GqUAFKyS26siLag4wa1eKQqCv9eEg93QVSBBseZZJZJa5Kfggf9vc7bSCz",
  "key8": "4ps2QX6LBFHXZNuMzb4imQrkjmkmBmoYnwnkR6BHC2Wc6t21seAZyjUbmVLbSs4zs5M3EABXUktUpWUzN3Rwp4C7",
  "key9": "4GzRif9VRwPfvz9u7cYr3cgMWttgCUkCpwpXvDhUxDrMoMJaihgo34Tdh8aexSphXZUVmhAxudfcatYnofTEM58",
  "key10": "5dy6voHWckGDCrzUKnJQPdhc4cqmjSPto7ALWcWNNJFwL89971acxr1Hta86JoRioRYQe7ovVU4x36Chk56ATkR6",
  "key11": "m8rv6uadaAm6oXMmTuchgD7QXkvKwpMNueR3XfhXXKEBdVi6wH1kqWKBbHuBTeS9vnsLVSoJvRMVfkXZTULxtpz",
  "key12": "62sq33pvpypZAwFLxGUohR4DMsB7SnzQznpH8ZgFahvkvXqkXpfkFj1V1JvFNz5Bpeb81pq4sRaAaNP5SLKbpmZL",
  "key13": "2WL7foXhJUYFibmkc9qupH1MrJcPb7pMjcx4nGMhRrDiVWJtGhgesrwdk7sLSfRJoAbjZm9f1JD5rrjsuNqjFXxQ",
  "key14": "51kRRjLkdjvU6TjhwgYURh9wyCZ42opwoYaRXNeZfJJfLihUTz6nhL6DDDRLdxL8iYqyC9P8Kwz7D6B2LzZSmrYb",
  "key15": "2U7Wd3MshMrnbSRxrkRobuGs6HKgK25jXhAJaRdRT2VzL5usJ83xaLPZQcYZEGDokCHdFtFEv4ARXjhQ3dkCnxG7",
  "key16": "3Fzi88yxH22efQdYFFS56Lb4bex7dhJqASorFRk9bLCLXE9u9JojKwEvYj4d1d4WT7di4xzk1UgnS81kdFapiiy5",
  "key17": "51y2Xq8xMCT6U9dPuQ78YcT4qmwuudhqvwsoGSR9J5XUYsiax2MDnZoYtuA5RfJgmpReuQj3xUN1tp44JsfFk41H",
  "key18": "4fDXaCbPhRZwcz3yENqKTceo37tkW6kdt1fGVgAgRoprsne75TWRcUsEmMuEBU61ukdLqztGYKUq8LCX9Vt1p72c",
  "key19": "5GmwryUKY4TnD1tP777Dxz5PbkcnwYfeodeBBnWDNCyPiGkRtpytCZVhc9bh43fPXpWLDe1BE6rrma1p2axQRcVm",
  "key20": "GsBqHJyYHAS7WsXvchMKtg86wAVJ79aLWgx2H14v34QXxrDLrdHGxQdX9AWddmEZiYiU1awwk8soUn3AQqUVq36",
  "key21": "3bzF319qkajKjVpmhym5Lr3cfL6cRtYZ3gSweZsNkrffYse4t3S35nvFW5bpSDGbd97msqEB9riJU4x1S4KL1qcq",
  "key22": "2dt7vpoQvAA3ZgSDKFkhQ8iGD763Ts6RaHX9Nv5xRMRS1fyrmZoDYmcq1vhDmvLf4m3V4D4tgJAKJL2uZ4a72AHD",
  "key23": "5k28mpzrf4iXES1DEY3brKxmovjjzyBJApopvRuG17syjdo7TcD6XVSkRoUU51QjQcNBZWLnmZJbqQw9aaAdPcbm",
  "key24": "4JuqTrFCYLFuHnnWcUUVynhrk3DQ4UtowAK9E6Twnb7sSEN967j985nt22KKtdKzwTW7bWYmjFgJcLkZE9HkSLQu",
  "key25": "2ocNAJdGS97UXXv7Lo9M8x8SFqMgsvtfmpF1i2oU2nNP1fzrEiZQQtPvPbCN2orkMvyp8rtTCTPMyqF26u8BdvQx",
  "key26": "YQkjGdfSWmxLfsXGbQ8nKHScwHNvFHW1Mu9QHrbnfJoavksTsP8Jjz2Mx2o4Sf4pw5ys7hTNrcDishFuQqtwpw9",
  "key27": "5TWqJd2e1G3gBkfa1m3QVgvo6rTP3yVQE7zbVNYWLfyCUMn3HER1GCU12NchDXLoyXKQHjccaCYw1hLNZptXSF2y",
  "key28": "3Pwq8p7YTK7M2xpxcEu3563qQRAhNHiF7SCYN1Xe6SA5RjD17VkHCwpsVmMxW4eoAyG56hLXBvoozGKSCWwqQoYk",
  "key29": "2dxFKJ5ZM5dL8LiqZCj7ngVgoXfjLn8B5U9TdpLP3Ty4S4ArHyH4xM3vavPMY7KoWEzzYE5zZdMUfaG2xUdaB6hX",
  "key30": "4Huk4ynDMitLcc7diV3AyxksVRBUfKzkxidzLZJQ4oNbBZbgJynbiBY6zEy3F9DFn1Ep7Cpj2iHXtxmngLU3HpC5",
  "key31": "5rupe1kzsJmwRtCiSb7ioYYwTiin4kyD9oSHTnSp3UH22R4jKRm19uNwzynbgnwoyz5fFNqhV4RpmzqYVeP4L6rm",
  "key32": "aHDr39qtPTCmA6sfZeijAQ489QeHZ6ouDbxpsMANv9EgzobnjwcH33b32PL6ekVGmo787mGmoU4YBgJsFUjxMa8",
  "key33": "2BpjxFao4xtZ6yEVaxk7ZLRK39B6aaoTyazWPc1jWBs6X77V8K82YvtLQaFqdm4xCewjtQPmpnS1KVXDjupEHqhB",
  "key34": "2UamTtkFmpCmAYbgtnhM99u23tgrk4pP9wFDqgi8ZFvrNQeNxpR1zTpaEVd4iX7THEAE2SLbTvbrANDmWqjwv9BQ",
  "key35": "3t9vYNUeoL8SaNDh8TnuQGPD62psyuCRn59ccSbsUreeGiznFt4nXQJYoNvBccZvmMEBQKSvmBMNhbZPHJLHdDdE"
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
