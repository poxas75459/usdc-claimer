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
    "4Aqp5gsQChTT3yJ3o5iFzRTrqeZHZqXC6rjVGBqtrBpsb5xJ8CZyS9zSxf9qWDmD7pJFSczxbcnJY9xKe4Xd3Z1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HwPbjr1TuyeeGK4bzDrtJakgC5r6AhKJDqLZ4PPxGMCdXVoG8LkxHG4H3hN8yERmBX4V6Pi58Us6U3mYB4twTL3",
  "key1": "5xsgDiHMcS9bwVR6uSUm7oV1AUTHySKgSvHKvLh3vs4cte8VRqA4ynr1vh2w39eu8GGwVs53j1MCgfeZqYPRegYN",
  "key2": "HcAGuAMeFhePeBJaFnT6srpiDpdheQUNoft6eVbimuEF6VbmdFU6wj5EBzFoteQMaJnPjtQB4kJthgzHUnChH39",
  "key3": "5hyb7tZXEQ6Y4qsptD6ssMgT25LZHeMhR5UFwRZJ7Zppo3aK4Ltp3o6BD26VcFxbvEb6xhGUP1rr2KUx6zrnK7wQ",
  "key4": "5a91pKCctR2bYJ7sght9qTy3gM1xLJaqjCZn6bc1X1EC4v9uWhDwAdAV2ApLnY9A7LwyRptWEWPQYZckT2icfgWn",
  "key5": "4E7qJtqaWDck3zH9sE1TqpUgyhdYJkCLCNGSa1QPHXj4HuKcep6xHpWVDReJLSkLsU6WjnBbvcLgyHu3qzRB2hVP",
  "key6": "4EXaCwCekHiqHhjwpT88CrFFFGLJUHpmrwpZAYCk3em1YAHH6NLT7XqVgGdRNcoUmoNe9gQBF2Nm7rJr6PtgUFhz",
  "key7": "4TeBSR6bpaoQ5TDHeZa2PrfNrLunnTUn8MFuGRHu6KrGGCp52i1mrdsPAJJBPQwHB3kJb3fRLgqaGsKTQasjYpMm",
  "key8": "5xpo6ShUQSoWLQwUg7rCF89eBQ38jQaDHrkMiAssZALLrB8bgAS45iws2M2sgq5XmUdVWMme149tSBS91aRtVvEA",
  "key9": "5151uWGvAHues3pdGV4cpKJ24rH9AdNGoen3aFgQnpimjZA43nYzxskuFDHyyB5BZSM8PxzuTTU14RUvHXBpZt3x",
  "key10": "3FwuXmpc4ojgwGVz9GAV2KcTqe9jHATAuMzfX3Xwf3JCgJ9FD33Lcrk1AFh5o2Q8BVv1AbMXKSEjJy5NPmLB6YB7",
  "key11": "5xhPbvPTGUXSL3VLqVuTxKp7r5C5sN84pH97jhegTVQaqFEnLgD4o84KUvZFMW3PoEqAm28G6jbGZ8G8GrZwNomi",
  "key12": "4Zw1W3kV9aqYwb8Ch9g242gk8bDV2qacjgBiWzKdBwktYNqRFAvBcn9hzDvuzGf2E2bZoa8usMzo2LT2TURCKbQ",
  "key13": "38NFiYU57MjinQY1zuqVcKCJ1fbdBAtWtk36o1tvWdsPyi4bVMcuW6WYSQx31jkGMfkEZjJcgTDbELZTfBZgmLP6",
  "key14": "3VDt4aUnSFkJiTMDYd3ctmB5NN6r316fubkt469eS3yni97M6FrQZPQca9NebbKnNkCAUpFcTNpknYXDEqQuCAEW",
  "key15": "4oAT8daQXwgLNnNsTs7YPutHbKNJDRJefdESX2ShQu88XHnuGA9ujdXJsxuzxX2vRY7Np6BAn7XQRHzg3m1VPJj9",
  "key16": "3MozdiB5eEi79Q8569QB8EsEgvsCwDh7NRY5NthKM8MkyGyyCsSYNoeEpSKbupZAw8VzJET6mx9eVk54aactRZVn",
  "key17": "5xeV3Gf6PsH6PVnHe4WGECbVRZB3mE5ZmWnDrX4hhBfF5fX7bRTFwq3svpgBT85RhuQ2cn1dEJ7EBfT322a3CpT8",
  "key18": "5Qa5mJxi5FV239gTsXsoanN9VdkUeADfeysRX8RUBm81PavDDiRsA6T5kDVkJFEREPCc35nfyNTVoPUZkHo9bVAi",
  "key19": "2uYN5YrzrEEiah4n8G1qWBpddTqpsRYPQWN8RcwV1aUBT1MHqCoM1gDS7ryYpE3mQT2THYvA3fjWMGMxjJr5wL8G",
  "key20": "3ooo3eEDYQQKpceZWbrBYRBQFUdFyNSDy9xVKyYv2Hy9k6n1ETvUCWt6SVEDTZUtaoxwUPETTRKcfEHGv5YfAVrq",
  "key21": "4xUdA25zipy9RNegKkKEopvTwCUZ1JL2KoL19PqQGTWnpLz4tC7aLn36e6ncvWb5iFjP8RaqbCZBN4eDH9VnBvc2",
  "key22": "2TFPhRpXhnAtwDajdB7VQyGUtRuRnv2RYVWFtc3UKxKAQjQAz19Nb2RiS6gKEPGyUA9go4BT8vmMLf23r4SbffJg",
  "key23": "3TcnfxkiirdEBa2RQqA9Vjx3Ppn4sJZuJ4grJuoRsY4i7Na1nPWABD75NfHex3F1VwWo9m7qYijCF1DpAydPbTP8",
  "key24": "5XbkrJiPcRmfvPGWvDF5kTVkTjn1NmHTr6gWmzjHE2yixUYBvjP8efpnydCgp1mt75YNJ4SjQhM4aAe2CaCgg1gg",
  "key25": "2WH63DpBSDhoXEA9rhhwoW9RET9DM7rFa4EjGsnWD4MBBDp45vyvQ4NEqhtiWFPHUnd3uRddJyeccE2xNzGNRuRc",
  "key26": "4AD25mt5XYHu3gdG3Txcyi758nCTYdDup4CHMvJ927oLm5MsqH8J16a4jVrjXhsVuVEoVr2AWmxzQqMQikokAzZR",
  "key27": "4UCgD45aGunpJ4DdrUTFnUhiGjAsXk45ji5njWA4Mh2X4n138SwLKMWxksyTsPVuoy6V7eVWueNYGcX4KirxUfia",
  "key28": "4AKXCJdnmTbf3yG2oGD2qMm713HF1qrh8yDbuFFJSXT1aFwxaSHrZa4ioK7CksqabFpzipvp1FgjEbxrGx3uQcW8",
  "key29": "3VQsaKN8Cahw4uAsc2xVzRCrn8PSa8hkjxu29rRTHEFsFpmvb2vhWxyLt7cXHL4Q9G2smy4U2hMPUcf6inK4gMCa",
  "key30": "2GgakZv2jCvuzBsou8ek9aq12ftQcTT8KuJ81ZY7wgaGXSPRcVh1DJSFFTXUQF9edGupd7DSo7vBG8emC9KZKHov",
  "key31": "4rKZHsqzJoejupTRan9ZkPrge3thXydrWrX4uXwBwnUVa4HiehvwJ4VDDuMpzWDd8dVprQgpjkMLhx5LhKrwarvH",
  "key32": "2scZ7SUTgNbq4TcSVvgAjVGdDa58BzbfVUp7iD3GDmWMHEjh7cnVYszniGPMC5FyfF5fVpVgcJ6UrGgMt2XxyGqP",
  "key33": "2rPPUEeUW5UjueZdtf6p4pe2RbZfk1Uqyh6qNHWf2x8gaYich39B13CVS9uG6qmyNG3g4rRHC8NVyn9SoVFarA9o"
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
