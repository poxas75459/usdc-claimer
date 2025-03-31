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
    "4Umnken7ibz6YSMenUiwtrLHCiHxAePHS4NXTbP5FyabJZe1AYbMKhGwAsKbd2k1b7ipRoi6fJNtFhg4YZ9EYM9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aYWtF3PvwGzeoCENXX7YBtAVP7aDqo1UoS4cHWiD19LZx8gmqeVG1BHYdso5LzTALy5sQDcX5DUQTMbTE8YKMko",
  "key1": "5hFT328oRvLQMEZJdaoFQ4LaS8VUeitH9z1uJhryLawTFbzbLj3N5tFzisUa8PBTNL7aQVP7xFzpJr6ZQjpvw3E",
  "key2": "47jcrutPsNgsB7BkLcCWhnxKaXdYoXdj1ddmEDSX9Di4idvh45GaMw3A9wEcFahwkYW8CTnQUtjnihTXFD3boKoJ",
  "key3": "4MvcCnkfcCJFgQg3qyEENBQSFT2xJrCBqqPYEdSLhuXTtuGXMyC8MdNxJsthMja9HC4EZdAsMDEu9vAXRjQYFSoT",
  "key4": "4ZHd23Fpa2vH3WkcpkPXxhhaGz772S2DDzyYx2YGdeXxNoa2cyxnsEfzDayZLKVtw8qayMvGh64c74cENHi15unA",
  "key5": "3hWaJhqH72g8GVqmg89g8Tqqwrg815dpmettpjBfyJXTNrURrnPkjRqASghw3qwaHDkRwD5Y8tekir5jA6RDGzPx",
  "key6": "3buyY5LbdvHfBMYhcuJBSQmE3T2X7tDDjgPAR1LGfFwq9DGUkxAtiMM9KdqBnh5pZBMVnXkLcAVvZjTRwKJHgQBt",
  "key7": "3hQ2PUGwdtn7vEWBBPu3U6MpirVbcnyDrNqiKqqQ2ZHQgngAW4uE7TXg58APfhPFuwvpRGPsWKs5KHahgxbdhns4",
  "key8": "5dTVkqtZFCcfWco4qfiLCkdmzQLCqShGqCki9i3iUyYqb3fSH8aVAvnygNvBc1CiLzD8g6wgKeZhfAtqGsvDBi4U",
  "key9": "2L3GFqqhsa6XV5gMG7Vvw7p7pio6JBU4ixVfCEhCFtPD9fhSnpv7Cs9iac36bEDjKt5vRg1LTbcehf1Kh26o6K2X",
  "key10": "UCg16jsJQ4KmrU5uEKao9V7AE4ZdVS5cgTmL4wZX2hEGirdnwAUBvpT3vb4HzvXLcayhTU95W9Uf2J97H5FQNVL",
  "key11": "4mbKqtNtDHNXcA3bPHTX7qKuqAaiM54SPrgpaYmL2FroPDPoCqw15mGEgD9vyvBENFJEpTSWiNYJNUn5guGrJguN",
  "key12": "4rzLYVkd1rumfHNDxRxuKc8YE9mjT6ryE1N2wvzaJYcjitr3SicGHpsF719nTK7VfrsbUbY83w2kHqZ2MrLqWE9L",
  "key13": "4GuaHkKECTxmPcbnfvCFGVZjW9qzakqs1xm7hXjXPKwpLERMNBubYDHCZFkze8WE7DgkfgCZr7LJWffD8wse5Q6a",
  "key14": "3TM5DBNq8jpSFSBQgy2DtC7dVpJLCm7qbzMkb2UG2aVeF1VqPoqrJrwD2X2HBsV16FuhsVMxG6HW9FfRyiPLp2U5",
  "key15": "4L9vhDPMMSf6GchG2xkZwChmu9jZgKEbUJbU3ZMNTP4ScuXxiJx45WG4gETCrAR6dUXKEB82xqAxgki57KZ7d7pM",
  "key16": "51tFzyHEkP2rqv5TsbXwgZ5pFh64gtWAJJ7L1h5UuoZAgM2fvyQJDz2TH3FcNKR9iss6poC3AyNHkuGc65Q3Ugce",
  "key17": "4iAjDaeTbQJcoWTaX3QQuBc9yqxSAYNcxEvV9XT3musa1R3G2ANBfT5v6wFaCgDv6GoPPREZr2P7GQMuFTaFxFdJ",
  "key18": "3etpzQ8WHx8mF2hwaCpSNQv8MJ4cmfA9oBm5e9J4G6njjQdPRaSLcfkq8Le5HLpGK22h6RLWk7JCTueEtuYDfBjJ",
  "key19": "4bozssfwLsBRsAcTHJzT4GGkiBZ1F58ez2yfg1T3oe58avvDpCJ6q52A7VRPLMyhE93X3ugmtFuwR73PuDFfkqZB",
  "key20": "6jNkZAicuRAsachbSdxBmqJoULsyNeUhqS1tEkWjtpbAQQ3gSGB4QqiFksaNRRMtdtHeLAkBgXuBqD1y8jm5k28",
  "key21": "5f7jpySaY6QfRoe7euBM4R5YUGqK5dPWfZk3ZFzwtRLYiWGMj7hK1vys2u3bxAD8gcouTqAHeTJACBXGJ4RUiD2B",
  "key22": "3Kby9Ka1NamdohazGUzHw4mDiALHLKA5WcSLZfQNQwa4BtEdWyECLoc2aJNy9tqLUrCmYizPKtZAW8vXSvJziuSe",
  "key23": "2t8gwe3dyDdUk1nGf489kfkABWWJTLq7z54C2kmrkbinxcsQho7LwnP58Utkc5dHHV6owybVqSfekTh9jehMATRu",
  "key24": "2S9NKZfsaGLexUF8ast8oq2SMon5v6AGGkPHndUenJ7jf4PcbdZHe4DYWG1zv3BkRGF1dDUFXqJzv5XE6KuzCJLd",
  "key25": "28HBSD8rZvXWRFGPwbfDeriex4zB4dKLXcXGiX6muGGEPV6zCspbAmwFHVRg9mCD22NtwBKTxHUen6Jd9svmeC3t",
  "key26": "3Qb9PdspSjHhmh2dpX8hHJZDA5qUcTwGCGkHW8evQtD3fwJgtArfosAjrd6ey3MMjniUTGx3WAaqhKuMwYDSVmyA",
  "key27": "4EZGCtSRyn2B8J2VEPqUUohGkuYyw1rf9HmNpje6Ugg71JRsJCdQEz57YUjy3DmHN5dhapakyJxiAXknZKim4U2r",
  "key28": "Y6EcZJLzdK6BafsZG3wTTRmVmWKwLRic2p6epjL2XCFDB43HSbUyVYu1RY4yZuiKfkCJfUKDxoP4cQeFtfb6Gja",
  "key29": "5dfXVhjAcdezV1BFELn3aP9zJLBFkzetGsd5NVMh9vCRR7S6Dcm6GmqVwZfNVoMeT9yfNLnryfyFVJYtHWgpSyYq",
  "key30": "2PotEjZwskn1553uj4r5GWWkE3zh9QdLCqT8tLz4V1ZTHBucu9UN4v74tHT4qn8sR3Rd6CUG9AcBBM6VnGtmbNNd",
  "key31": "4aZi8BpRvgv6PF5zgsdmv7BfRUsPEBwYFVDkVruGykKWUbAhtCeySFr6H8zsq5Ev5Q33dqHt1awW5wC58bK61XQb",
  "key32": "4doj14K3FpkYTwhbK7MA6kWBKij2mcMs8VbhkGVWiQFZ81fZfvpz8ppH9wLx14Y5NWtD9rhw6wddWueVxE6bVtUA",
  "key33": "5xpQNE8ggsEDvHFvmPZch8cfVBjJUeCjKTLWMEDhkZ6yVZUki3z293sqkE1mtH76fkheLu6YVaMpX2quXwyHrH75",
  "key34": "4MsqeAq6i1EzM1QCnn52QAom7KqExKKM3X29kzryaTwTYPLKjuuWKur8K9rfUDNzCGAEcLAJNobB1ZLmNLMhRCyJ",
  "key35": "253oSbe2HQhYQsTLutvpgQDcyVoBihVMVA9qn8nS8TLrRJDTWFYwShprW7BSucHJwyzqByye6mFuH7ocDQUgC6H6",
  "key36": "5XVhFLsQuPvfy7R2vbeSaMu4WSx6zgn6QKbHdK7bhqbtEEHfMPYuiLeEW9cSdKCUg5htJcJf5ntYbgy7foh38Rbc"
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
