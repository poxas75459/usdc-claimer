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
    "3CJ2KBcgwmYLQY8YRRf73pFmKFaMuSfZZMqp3zLPaQBtcewaPmB2q1EQ6H7jhRZktG8Ck43qvae5kq46EoQXGVbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kfiEkLG8SyfnW4FN1KbBSqQzqz4W63nukU4b8t1vxxHvvLgq2BCZ22MUg486yf9Z1J3BvpF4n9djYvfkGszDSFb",
  "key1": "2giyq5DKjxLRXaCJbs5Z1Cn37MjM7PUezN3GbtTCPDL3E2yJBtrPwoRsGfbuSPp2QsttMke8VDGDJ7kqrZmPaA1i",
  "key2": "2PsCeYuC8dfcq2zA4TyvbJmGFXUfUDLbmBEDp3t3RhT9t3nc5qzqTnWyiVLa1XZwcazW66XJvdh8bsGcc86nk6Rv",
  "key3": "3edxb6YQb2RtwRLQFeGoDJAv9BDneTGHP3uEBXg8ejdWSY6JE371hPxW9iY4q3KVbq9VRsj8jfxumNRDTAQXUD7y",
  "key4": "5XmwdHaZ4Cdisg5h9URmKb6FScnq7Z78PHgoQbnfxxSw4C6d6NusPuu3EumDi7ct73aYKmwHfbdx223w1FkGBF76",
  "key5": "5QWv2Rjk2eU2vH2Uv4pbvdmfiifbN3Aft7Rfudfn74jYYk8nWMT3k44CKWNKxigo4KmCWrFPdaZAbgtMP5cwsfi9",
  "key6": "4zZntpZhsiDTwfYey5iCg6HT1Lv1MkQj2g9LQaMpqw4BSfaGo4w3bgwsq7Nagt4TsNrGq6CpzCtvP41ZCWcXb1BU",
  "key7": "Rb5TdiBR8k7biMC18AkgsbHGhpMmjKppv32EyBWW17EHA2gsMM9UUBA15k4SB8N2W3kfTEdnuyUTSQBDjELGkQF",
  "key8": "62XsFZGG6KwYd4DjfEBq1j1cewnTqAuvovfFDAooD7vmsjCmiriRisNsdaUi2FPkg14uuCt9Q3Nu4fvcQ4C2Lkja",
  "key9": "3axng9L1NYWATwCmBJw2Tsr4ZxJS1kA6GMZujBTggtMrPZJH13i1vtZEFmK9QPchXMGp6ZwcMdpoy6JWMgA74gze",
  "key10": "4P7BFHFBcHZVMkGMjYv8WhKJYurTvJ8vFxzhVns16bkYXL7PN2vj4GUnQi8e4DS7jAfKFRTni7gEFYp3tKL4vD2o",
  "key11": "pkwQRd2jftxdmt3G8E52eHN9tR32Nh2tCuipUgeAFxhAJvuPPBRxNNBqY8b4zXg2E6xtiRnki6RDFHuAe5Wcywb",
  "key12": "4RkmqCjL4vJZJkRLFNDGkcUinNLAyrZzP1HCpyAtVRbkKExMroFx7zGDT9FKj3eZSKft4dib6EJeZGWn5aTeaA7z",
  "key13": "64ddxRoDquvJYp41hjnd1NvAvvrH86YKrYJ58C29txr17eaNEc9n8wsiFu9gepE9kaucGLKQrWWc5EnxwPaC7uV1",
  "key14": "4ZHB71N4jyQAUNQBMRcYqCP1XsNme3Nj76vyXoZHHsUPz1uPetVj3JXbLrcxsJQBtvoyfefWR2dY5dZ8bd2AeYTv",
  "key15": "emDYm3TUeJjtmjvb98FdHLHEB3LCHzzPDh9wryqxbPHoFpzV95sB5ynCCLxDYjmMa5m5yjd2g1rfv7nUvt97m9G",
  "key16": "5WZBMChYpbMmLvx5n95MRTtFm4k8RWsohpa2fNdxaiVXGLQVDQTt9cNP5EaeXhG7RRJTXedfaZBV2ot7HvBvsY4N",
  "key17": "4tPruqutFbzZauu96L67yWnM41FThtAUFD4ZXiYPFFTGwpKjhZoSWQPXS5JXkRfUqjx4rFbnpuoQBVdBKPuFYYHn",
  "key18": "3k4oJo5bgxkVo4cbbKPwoMBQ3FLqnPsbfcsnCncZEVEpueTH5TFRUH9KzdGM8PwP4XiS23q1P9n7CNqEzxwacxiD",
  "key19": "2D7zNyFdGxfowmt6vLe8pQKVtr7ZAJUCvawgEN6hJs2L34YkHbBidVz5q3qSVWqaHvxnCLRyFw2TqK4rhmcPRkbj",
  "key20": "PaZiYjExJvVhVGgBwYMCJaPBiScoUr75sUiQp8f3C19adai46duM8dvY5g4aK7XpYrqTL4CTYYEm2z9aSYAXvJD",
  "key21": "53166eSaGuwVs25DnUS4nwBiN1fisgr2EmMT97bkCjVv7FGezMfg9ScgUKDc9CdwHM1HKxNt8vhequd37ku1LxXf",
  "key22": "5dLWqSGAbp7RTf3oeMQwz2av2ETWV5FGzaykJ5V5iJNSrduzYBY2vASFMdtNwLBUuobHj1MvhegARgbcCsHREuTJ",
  "key23": "2eAMRjdXjcJLAHuWPGGYaruJyEyPBqYrXbTanoBSgcNF86WfeNZexyHf9vCVRKjnVAsvPK7Rf3NVx6QBq3Fq8iit",
  "key24": "2Hb9TK8Zatucgm8iihFUk2mwcWpxfs5Ww9QzkrjqNpkB3DzapfGzPgDpjan7gV1ctPWWaA87RPPEGTVVEjRYG7V1",
  "key25": "4kFUAoX7G7dkyJy9RpgJSDtizGLDiyFaJB1o3drG5sLjzDa2f6K8kd3NbJsoTcNJLavDNuQDw4D4gGc6XC32Nmjq",
  "key26": "3v3JjvunajnDR7ZBWbXfg5nreYWXm23wqeciyA7ArbV8b18dfSX89s4rJvDxutVBS6tsmoTVuzohWQzNJddyrs8V",
  "key27": "4xXoS4NpFqQ82oQyF7ddDwTMED1zAsB8ELCZAk7uMM6nTfBmMsTBk7iZn5H5yewHaiaFfjpUG6KJk48qVSw9fa2n",
  "key28": "pyfG6pXPm2efajfram17baFiWhAZfBEBGv8T1PcxFSsgk7VF3ASfyQJwDnxqnrDTzVuV1YFEpRAXNxBw56neDee",
  "key29": "cjrd9ok9oiXvKQNmMvsEfK7qNCMPQEuyov5nwBGRut7Ar8jsN9amdSA7dwvVMXXz2dRaWGuVjRtJKke8mnwQNYh"
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
