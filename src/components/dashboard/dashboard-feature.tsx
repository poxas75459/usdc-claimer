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
    "5K9Fc6ed27hjzQBajT8sJ7EEPBmtgnGZ22wziHDM9kQLm38jEFpMuK2jQPVEjcxZQdcBMvHHU8Jn5ymXwwJVrBqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RzQqrLhDZhCzErEu2wTwHkHdDimNj7VcjpqR5Urxx5ym2m987Lnv4aFY5MmT3sT48Dswr5tLXTZKtwZX6vXaXX6",
  "key1": "3PFKjwrzfzUJfHQTwCe1kMcpB3FfSsTxuU5Z9q3dt1tsqzUMrHXANqqrJKXwqgaFCNqsGug64jxLJE3gVnTXs5nX",
  "key2": "mLbVt2wvWtpbxZbSvdpr5FzvdW4gTgNi7swRBcuxTyNGR6hPTWrbhYjy31yDgHPK5FdeW6CTpxqqzwKX7rfkyqu",
  "key3": "4rvdYNWg21vAFg6U2SBzDwnTbLdUwdEVXsk7AwXCzrro8Tjyguzop8s6hMASKqMsR87VyqaUHKyT5LwTEPMJ16ZS",
  "key4": "vhi8RTYv2f7SdSiBK2UhRetTnApwS8fTdHZphUw2fMFGQyMgjrDTFvuuNyjyVKX77d86TLPGMj1hHcKPAgoHUcG",
  "key5": "35ioQiFrmh17NSHWeBSL6GkidUdPgEcSV1HiXrC5VBTYSrA196A6Sqyja569PF8zTD6MTkGgzQBZ43UdZPEVtrKT",
  "key6": "2CH8AKUbQP7ZcNLXqnfqiZRUbfdsg2PhQ26k5QKmsHrEAGgU2pk3Zxkb5aqXPJ2wVxWFi6K5zaGbE11MUSvZccvo",
  "key7": "7Drpf2on41nwV1fCjDLSPhsYBLwrVqTkMbGE8qUKm3WV7dQBJipV1kYBQuFWdAqcHReW3AQF3VMwhq2MHRQ4EVd",
  "key8": "qsXq3iZuRQFNfnTsWrNib2zZqDx9FuWR4NBM2q6wZggfDYTa4tFvF1R2cyAXKfv3QR5nv8QV6uYNBxWw2bpWvUP",
  "key9": "51R9DyooufTEnHFWD2X5pLcQSLos3BT6J9SPmwUr7PVCFtW1x4eoeEZdTSnfB1LgS8FyGKH9z1qRsDjouHweZFpT",
  "key10": "65dJspoH7KgNaAPLhetsVcB9sLay2N9KDngHt1JuDfzoS4BZ83GedgKrTcseyjF5GJ6JSyt6fX5g2sb7ATam4WXt",
  "key11": "3yzjXrSNtTeMUsyUjiN3suJfWaDMj2U96oEqBo3pNsD7H8pgnP1BRapq8pRBQfnJ56gTswRoLwrWQrFJnyUbFEEh",
  "key12": "TzJoATovYXjCK2zP1UegvSqiFzwdpJYoR5Krz5ndULGkz9ANPQcV91MBtiGNZACfJo7NQwMWbRANrv4QPCX7Vjm",
  "key13": "3N71krpkPQAkwTikPhboBAGtLcv2AhAJR71u1JAqNQABjuDnd2V5dnJJDdhdytaRUF9ZyaAMdFKgxYRcBM459d5U",
  "key14": "4fpL5D87WagyMtEpxfnyX6uAKai39LAcXoTrgdsZ9nYP5Yiu8nUzsiARYTtqp9dcfDtJeixvpAjW3kRvWspDNDQ3",
  "key15": "3r9jvAapjiT5dAqXFncEobymqmMARHBmnbMooydfmv4CKKaw9wTjwDZXo4UQPbUgApzYEhrrbDdp3oU2VLJSZEhe",
  "key16": "3LYU7QZ6C229BUZyBUE7hDtDtasxF8P4pYe6NhamXDi1QAQs6fAAXCLicaFxhn4BU2SCvE9dqyFjYSWY2XHuyvsY",
  "key17": "3FT2vwELPS8W5JW6YKb49LzZmzKggFrYktPLoSncVoqKDrB3Z5V67Vgcc9HBWSRZwAFhjMUfYrjUrSLEyGYyerU1",
  "key18": "28H6gxEHccSfMw5rjm7uzLoja9hbxJmKDgHzHFT3NRcix5h77qrV5jbQVSPDK1H7SaR6SVnZvWDRmoYsJ7TVHUBr",
  "key19": "4eCy9kg6HvhT7ZDXuf5vxT76PhkcmY4d4JTctUkRB8FLfkBJ7ATVNBfXtYykYh4EE7EdctkWLdxwq2bH2tzbpg1m",
  "key20": "59wNsnTG1vWJyMQFP2wYQ6bZ4DAnMUyaH8aCX5baadgu5uXKRFvHMYvhjeTyLUfBeH373EDmgbYqr1hoxSnhz2NH",
  "key21": "PpRcG69dUV6AZ1vtxcUGLJWELPoKKELnXVTyxNNp7JR2aE5bABcfqbB2Zf2HS2pfxutSvMJgxscNdTULkVKGaKb",
  "key22": "26Snw8WEReKvpzsCjtMSDKASw8npC9v6YMXB1vdcCiYtk1tt4K2XqTCDNAovvUSoJXMU6Lez16rKB9QpkqXmfyKa",
  "key23": "3gxcum4dKJzQFNNN6obk3aycEwRVFZCZgoN8pNLDRJ2Tx53HETB2bXLNz5UDq2gCumSbM3SWPMWverQ9NtBdFZhn",
  "key24": "2U8mwMPhbq2UyaKPP8GpuWkEUYVeLd4oAg6ztrBx75QeTXyptXEm4dQGbR8nY8jgyjNC67NrvySpKsSRrjbbNxNo",
  "key25": "2mFnqNLP6x7BpYoD6bMVR6agrTX5VxCFdxwibct99UAc394Gk23gLQmTCJQ8qyZDUsVPezhooii4ZSJKrEeyi7bt",
  "key26": "3CyjLuqjJMQE2GzGktfLcySnG5U4PcRJLaZzuYjGu81qcamXjVsJ54eARoduZNKQxhnhc2WjSvodqEQpWB9uLSaz",
  "key27": "4PJJvqyG7Bgah5Rq3uBLJiCM8P7Lj1AQ4TCWLnnMpAHjEX2abTK69quErmpXK65ZPiuWgTZCt4xA2W9gB5GjftRx",
  "key28": "5SEoNcsf8Ui5srogxsU4o4FNR9bbv4FnCGrHmEL8k8BE8J2VvuSaX1W1TjyiGbZfKGnWFtSgiCuRyJ18coQDjpJJ",
  "key29": "4oyC17gjgofD2XWYniAF3fCRS2CfqYifpUcVkvH4kMYmDDQehioQVBzM9wpHzo8X5wa9gxjDwhqGHi9QjBBPg1MG",
  "key30": "3qbwf1ZcKURhRmSQS2tjZD8iUzzAZrpnc9wjZWb6HKJaFmS7qiY8QbiigfeUCeGQVuKNvp1hwovZGYDzyNAimr1A",
  "key31": "4LjhZFPFRgggDFfbXVvZpquYSZYhNkVBzry4fuS9xmT1iqjp9vJ3hQ4Y6uqznfNKGkuWfUDNJ5bfnaUbijw3bSvM",
  "key32": "5JUUHX8X6jaxPHd1q9JiyktPLE2J7drMgc8SFFam7G1DhMb1JdDysFmahdM2U7YSR8LCHMCZD4rGHCwrGhMcoSgu",
  "key33": "3FqvEu6pY3qTbarkU4G837ftj5xU5BCkVsxeTBuiLKJkQitAM4qvfk6sFRcVrUzPvSe5tjv5dyFpQ4PJokFgBEXk",
  "key34": "5uwbTAynMum2ah9VRfgURfBv64isny9j5SRuNm9MFPRSAeGSavuz39cUzuDxhLfHbgHQxrZGxtRbbxNUKqX1mj9F",
  "key35": "2tZMa5dgTujSawQWCMfYWg98w4ZSFfuQneRMgDXqVRPCSbYKXNe44FEoPFcXVkmuqiG4m3G7CMbe3fn7wn9DNVgY",
  "key36": "49jtqo72Tvy44tPJyVuevUuEXMFmXgw5QRSeqhGLwdYRAhWBGfqe5Putxaju8KUJBLoWDtmQxj1HVMD3aScZssVj",
  "key37": "5ftt5BWUD7XryNHJusNCpJnnXcjdaE9yXnUqH53iRpT2cCynNkb382qNGDYKD6N11Q8huoa4RpD797PEEgGmxHrM",
  "key38": "4HE1tsMCwmja8EHkDGcNk4FH2nxGBvpxmkN48hAqNCHHK6nGo2Fx297Luu8j7sRjchRJqdnKtLxrgf5tsVL7eacj",
  "key39": "2Frt4p29pT2yPuUsgNfBKALg6hpUgEvjzpC2DuwKSexXdGSHf3rfiv6HjcSxCvqNahuQhWWoETHhzcXPXsJTscNv",
  "key40": "8qggskfwAwSgwNBZWhHrq6AoPXM8XnVExhUgEN75UUvHEKFQMeKxyxZnPHisT3jb941Uq7sumeHqX8AU8T6JdwC",
  "key41": "3hzHciAg7ACq9YJenysuCC4qqUv2711BaPuyRMfUM4NEShwLsX13mMFdiPeJhqPiVBD4KWUj8MqYZaExpAiMnbYy",
  "key42": "2nBx11oSb6YysDgqo5kBZo8FjzDJURsQeZa4jmPGZzZhoGDyGMMJC8R1yyiZ6sS3AbgxADtDsFY5zFm7pADMctsN",
  "key43": "2PqUNrjwHgDywP4uabew99c8tDYJQ8jMkwtxf9KhC8ayegS6SoEfNDuG3cW6GmZaPtUgEdM3BSKWaAK33awisGsW",
  "key44": "2M3Y7bE6tbsCuwP7Kb5Zp61rqY5mwAe1QK1RxzVFL39NaNsyN1ab5AM38JfGziS2Pz7UEWTmsXAN2T65iaXDAsgG",
  "key45": "oMDDqsHGTbm4agdRmiVP4GuDrZ78JdFwTHkXM2M9tVqztoPJjpoXcEGLUG3RzKbTdceQqevLwmBNA1Tg5t9HoGd",
  "key46": "z9dYnPgVmY6f61cYx4ZcxUzx3EcHqHws479UBSapcvgx56LeRzNkdQeBnWVTVvhjkgoS6ahopjebVv6jHdRHpH7",
  "key47": "3stXAVf2ea2CdoXQTzm3AGv9ppc1s4FdwJutqP54BbhYaTaEXAJ8D5r9qiVuH5fqSNaC7HAX9s1omLnT9qnNcxWi",
  "key48": "5XAn6gpAec3Lc1PheJxa7aeB2GpxbVYjM3HsYcieiaBVcqAKJf9RcqaCLTt3NV6SjrmSinWsUrQ7EiRZJUacAuaj"
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
