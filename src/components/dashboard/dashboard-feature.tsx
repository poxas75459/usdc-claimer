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
    "2VNu7H6B8bUD6k7CTsFmjHCJArwmFbrS5gZ3ByLFaxR43JCk7wRXWHEefp1g9PC7XjrddwaRoxdK5w5y9o8JfpdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dNwoWGH3ihFQyLpF9K4vfevaj4yGL3f2Rs2EHmdtMVaNNpvpCMeG1Lwn9bsAGCJwvkGqvJ7xQ9LGK4YFcpngNZj",
  "key1": "2CSwNUBNBrLfrL2iGyswrU2QifcQrY4X4fKjExkhs9cW7DznmjdnyzvuEywip7PDHXvVyfxPt8trf1u8NJ5ifgxn",
  "key2": "bNGErRdSAURynnQ4kuBtDmc8dKw7V75KyKeHuwrECkeCtb9QeDksJRFnmFzjaiKZXXDbx4vEn8FhdBx2CcaJGfm",
  "key3": "2AYua51Rfqjdnfn6hfksiAmBoxuNoew4SCt9x9KwbgNzG5Rbr6eyiFCDp1S4fw7Y4bGHEAniznCH3btzsCSZ8dd",
  "key4": "5TpMye49tLeB9DfdJ55JWkMgkpWX8BwX99pJRUZB6UMrnBk2rFZf4iPzxmDyCj1BcNcyYszq32y1HZfdKmAbGxkR",
  "key5": "4UooWuSmrpr18mXEZUrpwsmpTZMx8ExGS9UDbjiqj4x5ndbc69utHoGp17e6YL9DmmdBf7VGZu1KxXLCbm451435",
  "key6": "rzM6iKMmZZG87ufASeXVTVgAGHsVAbh9WTBQ45uxZnxJDyhpFvsoLQ8rS73egc6xY6MpHednLhy4rnj8LiZzPqP",
  "key7": "3T73BQ4M1cXGDHQ8Vdrp77u3hiP4HZ1DGwWyBGwm9fQz6Qjf4GoRjCmqaWi6U72JwQ5Y4kCfBDpT2fURVUpSegPV",
  "key8": "3htA4ENDn9vzLCAvTNQt9SnWrEnWmbkMdrvvmH3pZe2faPdkuRytW7ZWg8g6UPRe1yE7XSghj3tyWwa3Yizmsd7t",
  "key9": "sQXErDie1XPV7wjUYJckjExAoc3N155yEZEuHyPgFvmP1Bwa2sxZEFWvNH4u7LQL6TWr5EdiesHaFS81SjwXAAA",
  "key10": "64uTfx34K1qpv5SKVAdGvmu1f7QLHmwwDHoCxV8Dv7dH9uYY5NUT4vAStw5AbE4eNGw1QuQrgmtudEqotK24AXYN",
  "key11": "ACLDcPdkT3TKVGAFSP62g69oUqYyiJvj4kFjFBY2UzbFH5YZfn2WkvSzKDBNpyP9URYQqgfRHPEYvUTP9memUuP",
  "key12": "4GCaHjsNo4xb4bqEge2L5uuvLjJ3tfUD8EsaTPtNt6VFPHtMjTzwMo4ZkHQSRiRgQ1EHi3GGToiMZ7TiQdfDcUwh",
  "key13": "PsfqubRftndJTUorAXThRP68B4hQNHv2cTjw7DDjBEpomuAhk7wTAmB95Dwi4vB1rXgwbWUS2TcULGc1EWzZ8CM",
  "key14": "56DYmKEWn6f6DgCuoscgVz1diBgxRBtYyDeicWmuCTxBc9aTJGxR5GMk6xJeKuPqySjyHQBTGN2GdxXfV8LisGgR",
  "key15": "oEaZZkazh25ZoY76eSZxSQxJB6FvyxKrshY6p36o1nRMrcBnaVmXRUaJcFZXgmfhzxnBnn9BRKqWj5XXZZgkrhk",
  "key16": "4eo7debkfoZJaygF9YnKn7i9NwejBcCmHjhHjzycTNFQw1nvGNnUv4uQ3FrSD6gojL7mxQFnYHyd1VAbK5dczHT3",
  "key17": "2tC4UBAADXYSzqjbx7ZbquWyk9ML1gAS7NjvLnyfPQAccyNAF6sNCjZbf1c42Y838sV2ahrQbuhwbBx4AJzoHxZV",
  "key18": "4fpn8e8ZLzJg1jfr7yPaC7ZqvNxdciRtRV9p2YY63ZK3N8DVACKcTc5BiALCUBeh58kzJzeCXfrrtJRjHpH1z6BX",
  "key19": "5G2S7wGpX6At5M5sULMh6ZzQXkJbesW4QicGhhhxddg8haYdhbqQXVk3MBDYEoEuHkvGLn9zWGVi1H59DEtuoFW8",
  "key20": "4Pt7pfBy6LLydLTpDYPrbJAPmfx1CpmpWcaFtJubc9TbdZkDwCgLNVfMUn3P1AcmMDyXnE1D8zM1vRkRtYWzMyBY",
  "key21": "e1LBAKLu9ugaDYzhjUmZPXj7yJhj9KLgtbijgQ6f85dktHnVaMH1eDZ4HUDQkUqKm3ZdTUGqB1CwbMEfNL8oX6F",
  "key22": "5eDPT8mTXtJSGWj7JMuCfXqHMktuhpQCx61AukDHqf8x5oMxWQQ3V6aNaymkkcJVnhbNnBtY4uH6qcBN5QNj5a5o",
  "key23": "4rrXfRTUnrgnx2GHLiAhmPjAXwgBiuQMHh9yQzDQ1C5KRsr42wj6ZsH5ZSc8uBLbdQCTJBQZZ8AsgPpyp8YHxEt7",
  "key24": "62CSzWJsT4g4yzqtpmpgTfEEPhck2dMTWFG5VEsYUtjUmFip9WTtRtsS4aypXrtDqRsJ3BUWdvY9ib1xKkqseGas",
  "key25": "5sPwNUwR3ak2RsphNHSFKiJ4jMHYdMvKuet8W5HV3XoCnSzeDdL3HFVb2QrPGytP1b3Bq7GvXB2Fhb1nG3gWcVQj",
  "key26": "RkKCj79CS6gPwcTUbX6VFAGuTcp9LWRDwrviYUFpWPCMfLmzoAHXDuGi1pChNfXx9qw7Eu3y7jADkQwbyDCLWvB",
  "key27": "5xATSA53aPQGMYkpUUwnJUmnBw5amsx6eeJAy1MqPaqoXJoXqNNizgXCETbuKyK3zRR7muD5CH1thDzwstTj5CyV",
  "key28": "22V9tmNxToxjM43Gg443LYvtiKTAD5gWWAubNy2L2ZZh1feXECdNWVbcbYn7An5wuarS9khTUUaAFcTzDyHUgo6Q",
  "key29": "5HKF65ZXUR3uSb6mbrUnU681bswpPxJpe77XVEaSwQeJnPzXgbfmHXzV1fbb1fAZ2rGYtDCpETkC1m766f3aXUqR",
  "key30": "zjxN6Q46fAUCxACmrrd4HvnygHXvAqQs8Zw8yTHSm2iNygsASJey3q1x8bDN4gXntRPF1ANWZLrPj1MkcmtCakf",
  "key31": "5SExbR4uiCws8ucNBjC43RhWqxBj5atdn2g3kv3AoY1AWkKnHCf8KfUp8xLJw9hBHoNwhMTSDMQGPS5gsGzyWeX6",
  "key32": "2LoZV69bsMPSGY3NypEkqepnbCMkZjisaQciwAU2Geigbq6VM7f8yfDMY4f29yaZGfF34ibCoz8p8yM3EW4nARuo",
  "key33": "V5LRYJcF7ky7uWLrHNgEc54KWGHN5QEgXw7SN2HdFyjgx6cb6bYC82gqYH7gM3k9uTRQo9QfAKqyVpdNfUWjckP",
  "key34": "n1AkUNCuVsr3UBbLNLhuxQGFBbb54Ujfmr1oUqTNxaKTBoaErzbwk2JFiBysFhkDsRe9MwupSgVJXMt5B6ihuKP",
  "key35": "4AKCPf8SLvJpwhCnogeRtf5zD1zgt9vwjewUBn6kBJyw53D7scxoiKoXUGKxtdFG3C762QgB28qJbQcCkPSKreN9",
  "key36": "4uoL6xssPNtBocfx8ET78z3BmijkPuFURdoxbw6fHKKNogqcixwCpg7cpetJ8Ztjoqumk6zk5FqgSV1zQR8ZSNgR",
  "key37": "5utEpj5YZvAEWjzd1rdHtm5U4CRhoQ4dELyhTdMkX5gqFJ9LsWE9NWeDFwnt3EnJMiXUjZ4cmZszQqnKjgniSi5i",
  "key38": "3UNrynhQqKXSrVhnuQT5bcrd5FngMpNZEjbNUdbMo8qZSDnvWP3i7VwSceKCNBcD6qa1bbUYZop3okVBJa1gJAPi",
  "key39": "5aDdgkLGy5H2PgRsk9nvTKQNnz9fXakASqLKWVoDHpXxk6aifEL4WgDuHhhNCjSiGP8gWdXDBYPhuaeStfJYVyWs"
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
