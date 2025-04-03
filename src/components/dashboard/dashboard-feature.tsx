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
    "57PmjEZCQhW52Dv8CN1g48Lrcp5uavnGurWtFNMMqeH4VHFJSC9g4UsrnKdjdp9sFwVAWA4BNtUm35CyRbuN79EW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WudqrwYjBgKyiZuFMWMPZLXyaWSkjGeJHgLPRgEkheNd1k9GS81GbR9HGKuCedkCgHmMz6rWAGDSot6Geyud1mn",
  "key1": "2jF4yftbmy12uEUjXSfWJAfqR7nNDqwExd7CQszw7b4ZB9LD6XAMeMQ6sNzTusNw5NxvEGMy8CYWgU1px6jzHsHY",
  "key2": "LBYpvVrreTqpFcpr97kWEEVVncvNuiYyN7YobnGV8vDDNEYABhFm9zSVWLq7LfFUxV73xFNgsXdMHiuHHitx4hp",
  "key3": "37yPvQg2BciUVqhgUmrxLwn6t5bmW2pCQN4sHAT4gSCnYmkJRDKddLBdXRGPbJp9DM4BTjD6qYQXNSt2tM6tXPqz",
  "key4": "8etA7Bzg1ngVfYvjes3dALUd17roiGbDWDsXFcAUMEeMPu9hctkxmnP6u3N1xN6LbmLPKe2HLh52diddbptoZFN",
  "key5": "5McwQ6XpMdm4eegBf2syGbkVVz4PZKhZCz3ibeoVnPxRiubFQKyoHioJJVwVRXoD3BtLaZ923Wn7BXRWvy3giVCX",
  "key6": "ta71Xpw4XcrXfoGszBRoFb2crBx95jM5EeTNxRdJdJHSf2NUFagm4eN2BfFNN2MQmrocHig5fZPuGALEASduY8f",
  "key7": "2LXtg9GvwoEbu19hcXAMGGSQZ99g7A6k3qTvbh2usVULyCZdx65WQQQkBbxFQCNuw1XvKLiV6Jompqbeg11uJ8qw",
  "key8": "48zQVMn3AjvA6Jm4KRcYDBdTW85yg35ajDR1zzKds5YaYRLMfgsdoSzcCUABXqgjKQpMab1iyQrHB7prZJL4wM1M",
  "key9": "5xP1PQD9qLmMzD8oJtC4pExA9c6QQZatx8QxVwFWPbjWLMrLQqzrtSfwHE1j6ApzWXeqFbFQCRBLYZgtviSUxgEK",
  "key10": "3jir97BYTVev6pDNUjAU2GhaFZsyNyGTwuMxunGqmTidNtQkfPa3tPGrnMiV54gFuFz7HDUWuxHCrPdbig7f4RwW",
  "key11": "4rPGVYmVo8ixTdkiiBLSk8Hu8Nw742BYuh6QZLrnTi1cx2jHM2dG3cZXJJofrrCGLQSN1dbf8B5MKPDvKK6zD7DP",
  "key12": "3zqnanrgGyu4jbXuQjmYh4izSiVyhakNeTdnGTzmEQwTMWaJENuWHSEmbuRFpqBbUVDgMqHGsmQGY8Zhs3vSbLBN",
  "key13": "1Js6bdhCFPFfimeyYyqL6VszQ7k2t7vfwqaVjLmX1XM17o8L7yKzoAeQLYXf7muaYQ7oBwbtWbW7bKHZe2WnyUh",
  "key14": "25GzrZZ5q1NvwL1dMXUiSVfE8WABLMeTbCNvy9S2bG1k5cL3ysMcBJMVfLTVGR1GDAA9oCXdGnVTfCYGHEFmAoU1",
  "key15": "3E1UN5A4LGjqxm4h8zooPrHSBMEYyuKHrmRvS9pYwLNGahaygwgjE1zrvcjn8wueULeTNFHpFQfRPrswVJxu3yQ",
  "key16": "4HgUVJsV7vDPdWYD3sFu3KMzgEu3Z54NkhUiCvn6U6LRo6tg1W7HVtR4hK754f8ymA8AUPsQ1aXTCb7QSgEnF6Hh",
  "key17": "3ZsyED4CHEtKGFGFMpUfa8f7DS9C2LgZyC4MwN3d6R4BZh4yApaXqh9PNzqygyv9eq5poVf2fvmjuNLvCT331rEA",
  "key18": "nsHU1jpyVyJFB9TKAbG64Uw3STfttGBh1FmNWaayp98nmZy5p6UYn4EdrSba5mVC6rGxonE77qt9j2H5Y6vMbKX",
  "key19": "26zQfbhDzEJPkZmJP5U5ywkybuSj7LJykUAnW6XE537B9w1Cnk9Gq2tLyFrfkMb6ps33yZ8gu6ajVBJS9Qe7XQH4",
  "key20": "4YEZHpQ7urMZ5qWLjQkUZi5b4Lx8FSDn9kWmC8PtJBNKs7bDgbYFJjREvWtZQAM3HaL9AozUUEHjvN9vqb4ynnct",
  "key21": "4PmqQjgoToRNjkMU3ZzZTJjpQphE1RBAjP95BZBcuvPFnjWm4SvdAwAiadCguK5KnepDMA1aLjEEAzzDaKxFWycE",
  "key22": "5LAD9jmKew3XLgjC36XikwYLpu7mRSDrVdbMgGAE7RhnTtaQcaVoSGMeWYv2nLXrT3vigv2Eiw2TC37yrJ4bEA89",
  "key23": "2brgsx3ZLNyNwEsM4sGfd9F8TjbhvAJuo6YEYGAu8puqWEkDMWBE1rmnbinM114Q3BWr1xVtfCTomiRsf6GxGjQF",
  "key24": "51NLsntU4q2FYxbUTnroSLpRRX91Nyv95gwv9U9HjVrntsiQG73QpuHFNE6RPZBHp9FdmPGZ6V4K4SFdMxBbW1E2",
  "key25": "yk1jHF3VrvtKrE5WtV7LKTmD2E8SmiMw5R3cekX33yEaKJVWMqcc3ko8HvcbL4S353WHgAHp5KJzWxS8v21XRzk",
  "key26": "3pdSVENa5HDZJYtkyvptWbFuyQ32AM39teeXoBArkanBG2aHuCakKVncQneRK78eCeyzts73L5AMyBgD8qH2KYr6",
  "key27": "3DTM56CwFwwSjHXgwLXoxvdr6AA51UELejzgUPVpV1deSBEevtuT8gDQ2GkV4cxncbKBqw7sTGZg4yUJTt77onCQ",
  "key28": "4XjmZaJMuyMqEa4NiJUUw2QsjnxBVe1s4NfiaubY4CgeBzxV19aX59CgSF166MfrHcGnzVDC2K9Mi8naDAFKtUbH",
  "key29": "nRWWvsiH4wACwuNmeQrvVC6EUr9k4D2FghxKTJxN4D1H8NjjqJeggWPUjhBEmVyz94aZrjFFgwtezfivNiWXRWb",
  "key30": "5KsNvkU8kDYSSaHDn8DtFBDZTpTXntfNvXDCiVonsNXzkrkXgfXN2zfagJFsv1tMYgajVXePMcNXVjYQ6UjoEkW2",
  "key31": "2nmWs93N7bY9ivkipi3rHi88MwpMej5ircUREq29AdEhUbEEq629Yjg3Fx48BswyK3SDaGKmuYgNXpMsgraHKPGJ",
  "key32": "2T35bE2SwewK17YeGFbBwh7iEPdkbuAAYpNJ2H3Hmr8A1z7pf8x7etJdJwXeVy6M98TDdhyBCQJ6W73F7WkZnc23",
  "key33": "2qQ9kiYLzLD7pXWb6r5fhPAoQaY1QvE25xYfNG26DsvrMtARSY6KyJwqFwueUbiEftd7ku8DKtWd4v9ykpY5Ywfp",
  "key34": "4eTDzsDQEWpVX3k3QBycxttLa1bUT3NfuBAGuPbSYzwB7htNZ78U5mAmbZeb42Hg7uFPGsBqsEfpuoc5LFHZ8eYL",
  "key35": "9kfxQB6RixG7Rh8fY1aBPJqaCxhhUSSDALZ7yf3HMS7rhdRc6EgB1y9BTaCHYFwUxs7kb1ffwcut3aogfdUeJvC",
  "key36": "4AUmQ6vkFK8qi7yfhQsh1Tn53crkz9t8GKWquFQbFeCSfJKAZRbc6pV6JcbCgAJyWHgkKC2CYjhvLusRZco9SLMT",
  "key37": "2WQRdyjnACAjwSZ5RU2NBun2549Y32kWvz5aPpWdPf6vMu1Btc5LaoWwjTv3xCXKBq4WCwEMc6HJsDvw9TnBQo1p",
  "key38": "2SwtNfSdRhcw6oUnbDtmECWtciZ4Rhg8uvYrEGM7tUc4bk1MTjS1YHHeitzrhaExYzXkGrxYcfJJfVeVBBFLLERA",
  "key39": "39YjBLX91PYmFsfwoF8dZfH1akcXqAYNMFa38V1eLdJziFehfgHPgdvHYBHbEYoVzQfJmHNR6D2uHC1k7vL1qKhj",
  "key40": "2DLv9f9SDtH2YR89WrLWByo7GndX3ryGs5nCmH6BY5SEmY1Z63LJTb6fHjD1ZMkB82SSzsiEcyBDNw39sQXrVkvf",
  "key41": "2yy2MiqBq5pCLHVrK5SwwJsZMMTjgBbMaerGkpJtZ4iQDdDbhd7TrvGtz7zstXcM9RQqjA33GGFVLEGBCwXMbArM",
  "key42": "4ewf7YA4StmHqo7Vd5cxMSTesfq3oTxLfmH5Rb8abLtsdDoJhgjqxafKQUsjVGY6bLUm3fRj8May2uPwuZHMGsTL",
  "key43": "3FWnaejdsV6HQFy9Q8SrVxe7fZoaRy72gEKXQAmGbUmko1fDz3av2MuqrnZbiQsoKQ9y6WhcDrhm3Zkevt7Vvin4",
  "key44": "5iAPrj9U3oCxJ66d6AotXANdV3iP9EWK65aEkXGEqJbcQ8DfkByrYjALiUQi69dkCDcWRpyF8kdw5iGyYPcEWWv",
  "key45": "429PJiFNGUhnr3wkNVsaNsy84Y73emG9tyioNkovQqeutVyZ2ZTtcnS47eUHArNBvrF2aQ1Ee7jiGhg7Fx99VqhR",
  "key46": "2rK9fUns42XZ474TDr7jTM9AUAGZEeiFsFt5YqKv4ecrNqNvDewa9cb3r2Jev1szyqEjGuBZUeKBVtKvbcfeCay3"
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
