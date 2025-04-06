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
    "2jSokBpDA5nnE8JCAFbRdbkDGqRvj5dRbYQ5dVkb8GBXKLyx6CxwVi8AbLRM7K8n7fBy41mYbLULjSU2BiRj5cUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YnX92xM7FsN59JBj7NYEVfe1DXdCisKNRdtchFnje5fYzrA7ZbykBXc3n3PSQkkLBFe7GVdSHTgXLUzcr59WAEw",
  "key1": "3C6mmKSakUonpNtxkt1CkqT1PVud3tafdApy8mx8tkBrTM3yhEq8CZPiwpFW7H4VBgu3T2xPttSJa1GtgVb6BzZN",
  "key2": "33GafY8c6Li2sa1L9NoLubBd2gKH66GreW2sUHsMDbhtaYFuy6cvKRLZkCvg2UM4tBU5iAk9zTVSMFTX1PPh2hwJ",
  "key3": "3zBPGcALnERU5GqpuWAmuRSRYGJ7oFFDhKtVuJ7E2K2PuB1YCrdiQ1WfCipSHbcJYeQEaHLVWyQMesrY7Ydy5RoZ",
  "key4": "5jymXHGtzhA1yRLHygSiyW3G3hycj6tySuGCS66P8xGFBzqtE5hWpeC8TtvzrmqgwaEQrwZek6ACMd1NuwFxReu6",
  "key5": "4qG1pd67ZPoSBgJHtpKmzcyRvQJjJo1RUZFAoHjsdBoSn4eVG2fFPrJ96sLKGPXNyWAJpMPrRYpQHHDN4ota49CD",
  "key6": "4m4fZPg9F7jc6NfG4Jqw7Gs1b2PxtgrPYpAzswqSbCM7Da8ffgWzUh5kQG25uV6y2FnrNDWSjQxveknigkfoqk1z",
  "key7": "4aU2DKxDyoEwTN9jH6isQoXRTH219e4VUXWP3xCvjrRqcgNpjrhA4pkPePH3sCejGgevcVQQF25PPLZoir15d2V8",
  "key8": "5NuRHPWJoYc6ckTEbTgJ3XbwfC1Esf5namHwmBYC7qWGUWLmFy58ytFZq4mtardsQajcjv3s1Wqx5jH59AcpkXzG",
  "key9": "WDxYrSFiGkFmbqgaQ1CwzZF11cAtXvz4BS6AjeDNSPkesi2EV7dneLjNf82JWMPh1U9wXnKPB9FAoG5m1Xdpb5f",
  "key10": "67iaBoHnxMTTfLkjCwYSGymPuEHLnexUmsN2mLwxUeCdKJtmDxEEXVhKKQdwDZXYEUiBiQNxAhxbrVzDVdpYSpXX",
  "key11": "2NC697mjvSCqVKmAUuwrkmdjpx3aGuDfJKag1nqq4hMcNGXzFdyzRexBhecaHyToU8EaSPsWQd9hystAp1oegKMd",
  "key12": "5B2ND11cM2SfqVftaEBZNCgXim5K4zpvwL9KGgLcnnWF64sndJYJzx6fs4JczcfixZBHngrvxsaD8gsNWSSJFaBq",
  "key13": "65q2NUbCUDqceriUGyicxfT2yvyW3VqnaU3E2JGNavynrMKfLGHoagptTm6piNR83AJeDqvo1nrpBZHp7Ar4GC8M",
  "key14": "3Xx64kiPSaBDEmj5iDvbwGm6bYcyjpULGeoLhtDtth8mNfuw6GGvyAktDxWxr6XGvyFC3KKLSH9GtLTZCv7rcRUA",
  "key15": "4iJYygvpzccvCJWxWXrqe8tRM7M7PgMhFiDhNRA6nhKaDECgqDNmvd2jNEKtRUWadA7qLaEucMt6HmYLAAyu8rDU",
  "key16": "4VcuDe6CrXrvx56ADgnjBVMdBSJydBvPJc8nrh2QjCK7QqA9ay13GHWtTNHaJr2PJGvpC2Kos9mh615wGx4FwDWm",
  "key17": "2JVSP9AAetfatxCEvum6B1bhPQ5gaes971SUusDBsJxYfpNBiAdjqhQRg3AZ6zcjignYcHHR6ti5qceixRbGiw9T",
  "key18": "3wz2Rs8Nwkckm4Hc8TtJRAzrSmGCJ8bnsUavJFbrZiCm9ZP1cApgQ1n62oUZX6gNUz85enSskpZFSHXdffUjQWNa",
  "key19": "32cbpiPZLWKGNucSCLEicadVig7ec7yawvY1CvBoRPCBKkYgJ4HjCt8HxyQcVm4aJJxh78aJC5bzrFmpk53YhwNn",
  "key20": "4Q72A8s6fS586iPVZUa2x1rshQH3dTTTA1x6LJFvQzXViwGKdPby8Safq8vr44dY5jWF51f3CrutSYaEEHMZ5cRU",
  "key21": "3pNAYYWQmEQtY5QyZD2r2cHgvQvPhXhXoPet7w947sYu4FaXD1rKHidXvPUvRen18JN2yuhD5Bp9Q89cwBwjMSoN",
  "key22": "DsVhbAWvaz159LZnnemLPUhx45zpJZdaUYY4GgJCkRtrG2vbdSEhL8uNZU8touDeUkJztwxBxRHYmGtENz8YEDN",
  "key23": "3HQMGSvkhMgf6Z87Edd3eiqaqhUF9FowpebjDWTPow9kzkEV52V1UjfjAtyf6DsDMABAzfHNTwMro9GjRL4i88o8",
  "key24": "2FVR44Khjj4yDvVJ5AMFKpi5uUDjMyZr6CvciVtt1Aat2XTLL6RgBbZdTJEU5ZdoyeGw9ZdZxzVK1P1j4vrTdg1k",
  "key25": "4xxNfFeDXkieztfvBvkNQ6xrb28dW4DpxFyyHEoWehU9n5b6iA5Zfi2WnsWWoSh8V2tKivKEgys6weH3RFXyXF9t",
  "key26": "2Dnff6gUFjmAQ37Az5c6dt95Gyr5Fcuahifz9dtSyY39swbK1Py1Q36xxeMCXEYjhWnoNZN4HvN6XZjzYXeNJQNc",
  "key27": "3YnPjySVBv16aEHqZX6Mbvq3fmDwjgkE994ccg1ndvMfaYu5KkKUnWrxciUHeXEp1mThgmZwE6MQp67rycL93Zx6",
  "key28": "39txSHLDrGFnjJ5RdTUCgEptqWFXxGH89pJu96YCEJs7jZbsYFVbJ5x425hdxzBg1NH8kFySvnCEBHDJsZawS621",
  "key29": "3BoUbWMXfLdigUXwxkyzvrmo9RpvK39jcpshZpqaRmZ5oqUXsohZTXiFyHpsiud3R6cuBtbKA8KQxLjhKEKAk8oY",
  "key30": "23Jeh86jQgwuyDici2uFowNxvRxAzkkhBTHh8KYc8G15HoPKqtXw91xot4fVWu2Ru1hxBsqBt1AD9esyRHbeEFvE",
  "key31": "n62KYLLybSrrpm8DDEnQoNfsoFEcsg8Epyr2yBtaSkyzUMBcbRKUTed8CnYVYMFNa6svbXsyXVBskcFAWBkcjsu",
  "key32": "5KF91r2DiA45nPmUX487As38jAtUh9wUEMgmTe8nwWyoWg5Ez7ykd6mLrkTagR7E7tPSYyJrFNAS4oY2UdNhaJY9",
  "key33": "ujb6Bfx6nnTNrse8RPzSUyUv3gxzrR2btrn2sjUSnfZNjGof3nK2jhu8HQvjdNRTitvSYsMsE5uYQMtY3tzuzM5",
  "key34": "5HG3uSxfpGnc3WEwkzGv63tPd8zaUKLQpZ77PSMoQYCtFEbpM6TYi41ZqnYrqyadZsfderC1PZxmSgpebTHqfTc1",
  "key35": "49jx9E2LXmtL3diJ8h6BizAm4y7iVMgFJqa1q9g8NtXepjco2FoF1xwYQLMeNJ4kG9ptHyvhA8JnTN3uZSasKuDw",
  "key36": "4yKfU9pvfhr7hvWCR7fg2tuNXaC4gL4CVYAWvCjYiSr6AohjaCxB4JuU5Za7axCP8LdggBeVTAFgbWP6v31bxSxE",
  "key37": "xXkMZNdK2SZXA7UyKDJDJ6nCXGQugWSrYvU7wzVMmfHZaeY54KBFsJroze4FbWRjcM55qWN62yRXE9a5cSPG7wV",
  "key38": "tXRFfDrbkyU76ycgK8EUUW4E2eakz2meH9jiw4gmybwrfjgWQGmTNGKZQLG9iQyE9K4AYgRy514PXqeFL1m3vWY",
  "key39": "5BR399sDPSaBwtL7K7UCoDs8ZH5V1QMAxjHXrWC5QYt5JHkST1NbnkjHBuoYLrSwsHEQkhc3nae274uDu6fytWfY",
  "key40": "45PGm86i6mXZo4oAvKJoHQ4SzPE8NhmWa3jVCvRFW1RViuQdu9CAxg2WQkpVWGCKabu7iNF37K5wqB1NcnAeAtaD",
  "key41": "2sbwoX4HrrhGxxvScxN1YtGUzUTAsksdmHxpFb8aAG8hjVJqyp9BKwaDrf9ejBnd2YK1MKJ61eBxHCPrH4SozGiy",
  "key42": "2zBqPgQnFxyjsF8jMMT3naLbYQn8uhkqzFkHjB42WHhzwLjo7Z7fmvrDryYs2hpWHoGLgjMHjtxwB1T7BQwYcGJ5",
  "key43": "5PVBoLYk4w2Zw53PZqxYQ3QVPUvJteqUSyuizUDWuTkF1zasZF3WCzsRhjP1DVsvroRyffz6vk3nLRTQYRSuC4UM",
  "key44": "zWBN1ehrPdRYqDdTzwgQMLfz1FomQ7ZyNEQz4F5tDLAFL19dKkxGcepiMPYVLZCXoGpAf4t2Ev4kwtw3aCcm7cF",
  "key45": "31hNqnnwkjJMzWvw7ZGYx4LCgviwSDxiL6Y4dGCBBj6LGT4ArgowbZG1ZyqG6Pod4Qvoaz2g33AA69W4EQL7fhuk",
  "key46": "5gKBTEUzMQa3uchuLyaoGbnNPNrw8eFrvcFq4fr9u49xVJhD4pnACdVBQDmbYieqVzeNAPZYzaEWo76rceJnricg",
  "key47": "5w3c72ffs6sjV9Zp6ujMB5wnvAvfMd6Cmp3YzfKuK7X3mmogkD6vjeZY491me94mb8KNhkcXC3VJbjKJMuoiNXeF",
  "key48": "BZVNRKXz8JqpGDMKtEBRAbuwiKqjPiGAFkN4GQNiQnSqqDoiU87fbCKZoJP1RtrMFNTfAPDFPRfo3SG7L2aiT24",
  "key49": "2hY8cdoGQ38TvQdgiYMJBMM7DxXDLTfDexV2e1fL8WDJ8gaP23mMNVTPLayQXbwjGrptU6e4nrenScKvFRivtY9v"
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
