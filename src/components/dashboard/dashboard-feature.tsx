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
    "2MHnL6HasxGVxTF37wFcDswPVqratzMEbcDzJyvximRH1toxNM9AbdsfBJhBJv4HENwW6mym9RPacoshfQoQqE2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KEccyRuaXDPEsTgNPnTwJdXnz7yTdCU361eqDjsLpTDWc5RUEeS3s7oVqB77op68JSKs6VrTKj5KZC4h1b8mLot",
  "key1": "2GfgZCBRYYvrtc3icH77YsJoZ8umQteQpCaKEnvStsqi6Fd8buz7PPHKu4Ao98fRuxwGyw2GhQRNVhCCGeEyp129",
  "key2": "5K6SnufoZjKZBJq6bPkXyMx7RW6bXJQ3XDLfKUtrLj1bCFs3Mypc73bxnqwQepE72jjAsFPLVJZhRh65oPGYmQTH",
  "key3": "2qhx1akixF2DPGepWA4NGMkBcEgbjt8YH9dF8F1iKLfTXepoMmyKhyGBwhb2NCbK4k9UTD697j79iijPycLeppJB",
  "key4": "56AwHaxND4GjdWT2u7rrqZ64TzS88yTRbe93JCT8X3cVTmzCdAMswbdumK4VrEbKD9Q6aBqDiWoi81QydcJ5yegW",
  "key5": "4qoqC6AUNjRmAagNnLXqBaZWgv9EX9jrznwVA8kvECVqbBm7XeLt5vg2huUD1NAaYqutZ5VytjjfbKubypa9mfTR",
  "key6": "3e34phEdsQTxEQWRCLaVWf56ABQZ9V7Fz8ReVYXksjyTs3WLf3MscLwros2wQdFVF5ATxmaQbHevZri17cVr1EyQ",
  "key7": "3CrFr2htvN6gTtsKAmR4PWhkGsM4kgT5WPoouKxctpwn8edoyLqbo9mpDng2gmEic2BQBctYmaL1tK5tze6ScLu9",
  "key8": "o9cVmcVC4gS2HDoDV4P8ruwmA6JYDkrTt5Er6sP5jeiU2Km4WSquj5gTgscs1RcTF8P7iKFaKSocEZvpv1sFcKX",
  "key9": "5gvNALCYZGhDH7SaRLYRhE45H4D3BZeAXyuVYQ62gayHHfc8YZYmcRURpf7HxKTmAERtaYVyenEn9CgGp8KeB8Qx",
  "key10": "Yc5AvkouhCPrFDrX6C8nd31DZoJVzrKDMgoqa9GZ9JzkELxKukVCWb5YSEvZ9k3RrWno42WDUsosbkPqMzYAUrf",
  "key11": "4uTBTGZYtCkvRZDx4VWhRfP86Qx4rGRDrCmZs2mYwCbP2SAMxRLNV5dh3WtqXxAR7BhLvKS1C8L5Y3J8tqBmeLwz",
  "key12": "388kAm3w6RuGRh5ymnnJHtoPaN1DwuLKJpPfK1icEE3DfN5p9ZAMkpCCGyPUYKa8BJZV81P2L6RBj3SRaiSddxbT",
  "key13": "2uHv6F1mpDRPNe2yRqs621UUbPjerfgrY6ZHDcJFbgfkxdH7PUyQ7y1KZd1j8DT7SHzdQDG4oXWC6e9zoY1DmUEh",
  "key14": "YcXwfmnyeEbcazUmZRUfvPzrtARHn5oqaorkN9bYYTcKvd22y1ByJ8pr2Ni2gR58UGhc1zTRuTffdrPQAuwpYaL",
  "key15": "3XPZJgKMvurkNSbXzZbEEgMHwxCMWvDeofzhuXPE8yoKXeA24DAQd6PduqqhE1E9pfFG3ZLPddGNzG3jbq9hLD6T",
  "key16": "4uQx6Nz5YVsAWFJQTDdzK9tnYTzvbnuVAzvgfkrf2LCvBLvTEVm7t6qmUsCBk271gBhjJNEKu9VmTUqihJtkwYYu",
  "key17": "4y2ZZdPjXb4o8FqugtywYReAULYowh3326KdN523FFjRyoknB1PhVVhgehuwZp2wpTtrxRTN2ogyfFUqMGooE6Jv",
  "key18": "4LCZRiZ3xA8erimuVWbtGue4XfCPyeKGTYgCY1i2VdLS5paREZSfvnDL46Lwt9DniLNVNbxFSAzjyBWZT3xbEQm5",
  "key19": "5jPvTHR9Lxj4J8Az3KrxNKLtephoKoUNjuLJhUN3qbwKWTYcirdwddssGHnZQqNRqWhYrEzzKXrF6h7jr9nGaw9r",
  "key20": "5e5Wke3Zi1gfk2r5L8PYb6MTWFbDbwULfTfNcQKVogNqbN9p69hDNAkFm7mdsxysj56wRpa1zSFNSbWt3hXrdeVT",
  "key21": "4WD9DhikmZHpCFLNFF1U4sY5AU3btirqDDT5W893sigbLWTqKeriR1YjpkgMFYkFtoX7DJU58t4njz6NRou4sX4w",
  "key22": "5yZKZrvxzQEad43hUz7z5sNFwgrHnkfF5W2NPuS8jodtbE7YbyTgBDpziZwUGA217jNH9qyAUoA7127HwVwA5kM6",
  "key23": "228zC1cYgDiZFURPT9f6kpnjy9VyuYw8Ti5Dozx9xwPBdcKXd2hSpou1rYCrbGAAJFcnbChVWgFCbbjT47GbXxFX",
  "key24": "5CqJ6pLEsKHwu5b6FP9FwELRxrrybjH9ewm26F5GptujVbZgLiTCMrXyp67zH5mZZcmbH9uC9UpgedVXgS6b5tCo",
  "key25": "45rd2QukdDLpo4zDWiHLduQeUKyXMswpj4ZXRv5Toe9SaBvum7wGEmEms6JxhGkVY4ht8n8hwjXpwbprKmD39p3Q",
  "key26": "fNDgEYupeFPgUZ6aj1Dop7TcSDZ53SE73uKvNS9G766XQrkhjfoQEmDhD9Kv89rizask8H5RSBAvkLFthA8KrAm",
  "key27": "7jv9EyuvLjuaSvvF3qVnFF2Qdu1G7Jh6DkW26yeXzErC4k5zkyV3HTPSBUeotLwVSqYKBHUTABa5B9PVid6hhsW",
  "key28": "Ju98Ztn2F4J82b5nVxXvNEmNy3KgVTsQw7DqZMxth5DWAVRP2gtbcfk3dVSoX6Ajvj4CEuc36w4JiBAcHS6AY8L",
  "key29": "TY2Tpo4M4WS6wFShdv9q1iRsQLSojsKDDiaveE2tkxvoxdw6Jcm7A7muG2j4WyrEZqQF4EDYiYWbPMMxZqNqexU",
  "key30": "3kcjP9yTZLNf3bc7q1oRtgzectX1UfhaEmeW3u7etRUkBc51D7LR7ar9m8jgNg2wRU9ypccVSHihJ9PKPzRpxbew",
  "key31": "PHHzxHegA5Xk1qqQhxDoaGhGHfuaadWVHMGB479fJx3vZmSg5inxH5Q59QxKNNAtMcXx72A5VZyN8sru1zoyw8b",
  "key32": "2Phtns38DRNj8B93bmiqgRZyBqfUQANDDA372KmJ2E3dP8DhfUZbPFAhq9BMjn2CJUDHs8GMERZJkEUT1GZvF2Dv",
  "key33": "4YRvSs6vPQogS2sgM3Ev2o8MkJ4CbQcvLQF7avXMnVVx8Ea68uQLekWk4Eq1WithUSGEopQWsXBhEUBFjn4RwX7m",
  "key34": "2ujQsR3gnDFxVGAd8aGJGYHyyYnrGoEzEN31GiA4pHfhNd6YHiY8kUyG8Z9qNv2vGSR8w6WjvAmd51eCJUH4jSYD",
  "key35": "CdBikScAK6R2RrUcHKskEjKBQQFwtDf7MowbhcnMNS2CRT4W9tCZMRZq3L6Xug5wo5us4tcAFB8uB3AVJaWhV97",
  "key36": "2mzFJfEnTbzXRo1HLCyeYDPCcEiRmPQWEou2ND3zcqe6CMpBdbm8dc7Sn1Zrjue3KDEv6CqAf3YjFHs4eKyfTXXY",
  "key37": "2WMSSMooP4Zmktn1zbxmmxw4JJA9RZhHTkCv6LMHArNGrcFd6WLWRZt3nuvCG1pqaZSNNTmBmu6g25GJkax4inzv",
  "key38": "3NqGeKkoqKXpbewk8iktUBQjiE4ZdGPhQwUwA6xYYufmTUSEEVte5VDLfNEM3q13peD2KRY8LptCepvuX819wkK1",
  "key39": "5qhwsZNni8EH7Bf1CvoMjXcdnyzCbhqNuGr6JMxztLsyA1K3arGU8Psq8uvLKmEWoq5RHtyu9pMdVFrt3C1rEGan",
  "key40": "jdakeZGXo7izyd7TZPjTuwEzZugmagm6GEHc2eJ19X5cCfB6gmoxAARoHKfD2KGYguVkDCFnzcAZdPHt6NTyF2J",
  "key41": "5dyDx93mNK9BQPjbVuWxjHoJATgCXZm2pBHeqQ2dcn3BfnhTC7KxPBKLbZzKH8kpQTmLxCZF7P6FKaK326yDENxN",
  "key42": "5cqnX3B2cE718FDCNr5Tu5bybVN4po1t6ehK9BLT5RmhybmNDRM1GkjnvnZCmex6iF8Zsh1boJ41L1WotydtzKt5"
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
