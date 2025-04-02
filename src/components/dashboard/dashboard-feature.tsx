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
    "4xTPF4vpGLGPdF1A6LWvRfwFc9T8aWm4G6T6GKM3w46rrj5pHpsgKq8xUx8RgQZtXg5tznt5xsiKosvbk8rP7Cds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q5cjq3T9iH4WDMC7djtia2YTHZdXHumKN9v8Tm2NgeqBX5AmXx2ksoRLjs5avcxK5h9dhookudbhXAEaQyVu1CD",
  "key1": "iYFF8TVAnS7ubgrygE3k1asVTxQsTVGwevNL8TpQqHYbriXSMsxKx5tEFUZqbfoHCvtP55HyfWZipv2UP4vemu5",
  "key2": "2M4nXvAZartE2SBHTUSUfp9CrjZaEbSBqMdmE7gTTsMeybKf7PKEtVb36uX9n41NxcJQzZPn3y47t5ykDAJ9kMS7",
  "key3": "4ayg5BMT4CZBeeZdTkKH8bXsy7TAPNFHCN4BUoxgEkCK6f1X4Y5PN1rnb3UovLmHt8PFMZAFu5LQsNkAfBdrrTGk",
  "key4": "3k9LSWDPD8CxJYTBgtMnFvNQjKLiCumqtgJ8YRA6T3vZQoU7d8nFv7EJo8oGk5y4xpjo1fuqSatTWg8oZpsuoJp7",
  "key5": "54ukE9NSg3YjxpYg3JYgZJ2sKRqedEKoeYARVqqtPmg5JhQ818NumcJStEj1tgnvTPCEbLrjjNMnNEkLBdVTFrwd",
  "key6": "3jFowvGBeds7xsEenunr7kgenN5pASHqdCPbZvm8mvJ1PQj8EMGoykVCAmV2HBTgMD7EDqqBPfXsL63pJLsnjQTt",
  "key7": "5BZo2zjhiGd7su3CZ65fsuhAuXoeaccXRCFo1KtqFhZ7sumJnjZhz7beAtx4QqYbENYX95v3ZMyWigtsfDvuoGMt",
  "key8": "dMpfcExoyTa4jkw2QF8SKp9GSju7dWMbULwhaHw9k31RMWZygqXN8Ti7cmRapG5r7xK97BC4k5yBUm2quoqE1Ad",
  "key9": "32mvFrEmbqsq4V93ouXa9jHMwujFjTJvU5nhF7J8xqievqEoFbBX49UbSe2Z9JTj2hGQdXvsRrsCxvLUrCx1WAv1",
  "key10": "5hPEwQR7qoDGBST6WorQvW6hSio8AQpMus3Uyud5p5Rdgjo3Bd8ueqrxvCieirc9XuNSfF2r3scbcs6gDt1yFTSv",
  "key11": "2UxGpAcVWcztmXpGyB5sCPpF5XA2r2sjPYgAQf8ibXXyjiRbkuzMoMC9QVYK7x6pnymFqy6cSWZ3s5kJuEqnq9B4",
  "key12": "2Uxjzwunizv22ic1oSBDWsLBf8mPvYyv5YzciGmmJ4tuieDsf9Rn5sX4GQgn3TsGtAc3mnnsAWh9zHzgnGULLMtv",
  "key13": "XCp6sRWs1qPfhpPEMJBrfHBUwacgUUfgkwvXxZw9GUhHgSWk2ktN4kokuEZtrTccV9zrEGMeAhQniVTpzTqxvbp",
  "key14": "4mTHjr9Z8WaH61WZCPGAQ3Fxfj2qKQe4Sydd6VZhFwj8ayCA8GWt8AzdhmTDA26rWpNqUKp5LcSmn3T55HTTmdPy",
  "key15": "2upEfdFLK87FtZkDxAadJSSgm21jAKh7Uy5EXY96dxqh8D71yYaznYfQVccwXct9dkQrPrH1XbAME1Uxy3KGMgBc",
  "key16": "5Lnjik71jjENaBFZ5m1S58umgz4DUdqJMM7uXkWbmTY1TYBSNBrrve5ufbLULXBeNMyHeXfpKsdNpmPq42oc48Ac",
  "key17": "5R58JEJAYdmhagGSpg8WXMuAPtrCrPEKzNcdVWiFeJTX9CgowEvUF5GnBi4NYSCV6FPZBhGnATHXsuo2pA6oMwzP",
  "key18": "4bgXiLnahwnaLsmJJ3jEcB2VHwD5yuuT2Ngv3B1LvepsbQgSqdMhtyu5ueUkYMULjS3q8aWDiPUTmiHUBqJTZQVd",
  "key19": "5aq6CR4pLTcc13q7ZZoyok823MaGR1AGZ9tMMshn5u2bDZeFKQJo7g3xGh99hmFAyNs9eQCPLKpWeEhpsa6asZm1",
  "key20": "24vhboEu6asFMtZSrNgULDgi552Kn5p7xpEaauFivn6VoYytH2j2c2M3fvDExvfnBUrf7VvrqMKuroEmfBin3QmJ",
  "key21": "3q7kvuvFWcc1vv5N2UbGzCjLx1yqcEecryZNqmevhezAkMENtznkqYN3nbyPQktKLQwU7cgAejHPCddKU1YESVWC",
  "key22": "2W7g8UYJQ4GTV6RZjwB8EER7rZNnhVDnf274vZqjTZCpLPD3BNdtSG5PYEeD5yUxZLdrhMzD6Fmp1qLcgyb6dvCq",
  "key23": "5xeKP1gtp6tzmxRPHHYTspLidro7HyxxubwTdJDY1dqSXxJocpiPLKuqgguL4gUDDkwWg3RUS6AJ9aVwLngQCPsF",
  "key24": "5JjEnuWB2pZUpEG3uZCnHBmxLDYqqiBZsQFG7ppqVP8bpgU5zpaMAhwp3Ui7864KcTXBMaFEgNAzZLweSPvAXiMC",
  "key25": "3sfa4dQPe4vkrrPAq1f7nxbZL8UR181ASkgNTbRUB4sQrtugfUHEaBPn9jt6CDw6t2KUFEG78LEuzJhHd29wYZ5a",
  "key26": "3bs2d1FQdTSLGKkraDRGRZ6YZXjeNKKg6XbPD8Wb1aHCMg1BocHKNdrp8xChUx3bF2At5Ld4nzF5ujnBGZmWAZem",
  "key27": "GNfuLjmmQdMaXiC8bHQDnAQgw1JAhZLGteiFR4v99x3B2fqeYKYG1C4spP9qKadhbKzRu8NQ7xvtrT3i7NxG89X",
  "key28": "2nCwEFrZ4c28vw1RMH1jvyUzuVmc1HL9TCZWi6f2EAoSwomxXAfmiD9txGjQSDUvp2WjMHqtBzsgYDBbkFW2KKxP",
  "key29": "pce7iecQEWpThbz3ncBL74cpK6SQbsbGVMcf5KNtjBE4TawAv8fWkvetYuXEeePH8SJM1ydt4TmX8mn7iWQ6cCu",
  "key30": "35mhye2GprJac75bc57Dys5H5gr3vRh1TFCghCWLqru1B9SSc31NigMh1iq38ohwfaENqpRHoWMjAm4HBxBJkFXE",
  "key31": "2FK43ZXBBUDGuG6cbhSBqNhVAJeP6mVUrcDk7gByAzr6i6A7NxNGWg9GAPfk93GxfeBwFBLYqxvxgmnB1dPGWKHP",
  "key32": "3PD7eSEErEKYUXcwnJQ51xGkps8cnDaiKfkicRcJSfjWTH66uzZSPKzHR2xd4z86TK3JQrrcQ3zW5gnUpV5JUG6g",
  "key33": "2m9E7qhJYcNKy7Y7A57RdhKqTPc9HXgRqYjAZ3SbYh4H5xKJnHEXPPTBQfiZh7TuWJKMJjSvFsuLnSGYmHUMUEaK",
  "key34": "4XtBy9AuSqjAgEn6Yb9njMjRVAo3UXFgPzJxPYF8iBFbqVK2yqtuAaU8UfHRvpk13yEh1k6hpYsjZ2Y5PX9ZcMxx",
  "key35": "4LK48s3Z17HCfmAnYNvoZYVhB5eCW6a3E1x4swhqyucGdZCW1iKWNtH9g6z3rFoiqEmbTvHmo5HdochMkyvZhjyH",
  "key36": "2bo2qJiNvUjSjscHkHyDNPZ48maQiQG1t7kVUebhPqdHPw4HGhBwatGNCKNoDGe2pyhFFqzry3BzGLPd2VaWPw3Q",
  "key37": "2eks3QB9AU3JWt9qPjR82yVxQ99s95QoyyB2bEcywFsBNRyeDkdm4Zh2W1H5MsnGphoGLCBLwTvMnVy2Ga8mV6rg",
  "key38": "5C67rkgLbEpF6E15dF3nTN9NqCVbkn3i3B2F8SEpx9Ukk14vPtWSJ16GLbuEbooXZd6qC1mMjuxNU5GeXYGAomqG",
  "key39": "2w43E9Gqs8TZmvEAMS9goaKaGqNSqV7qmKJCdPcoRApMLDL4NLrsYZ9acL46AfR8BDXVDzRXGMtK5AZoUynXd7xd",
  "key40": "rTkqFZurujga3zxe81AK8pmut3kJM19GuE561DjMVWVv6Fai8bVQ8aTK4YiCXjDH7c4hZoCTneYJfmpM8mwV6m4",
  "key41": "5TC751nNKMGGCaQUewjPESX5RvPQ4kLyrESxmCgKbYGXkbHeiVUwWxb6xAR6GHY6LkvAt1Wgn1kYBjqdTuHKpBYU",
  "key42": "67e5aoGKEqFwRzuBMmqZ6ybC7mMHTKuAB3FNyJvpo3aWZfnmVawSyRWDosMsvwKyHeWcSLNuC4W9CvSjzL6qHG11",
  "key43": "5fCVmbUJTmj3WVBPTecvdqARofPBG8991gdBpZwqGsaVuMNY8zSKA8kjQFjwWQLefnUw3UUYATZhGCV6anSnDWqi",
  "key44": "2ptvPaLnGF4Viz2JfjDG2jRjjdNRmKmoWs5HPBd8iN3NZmjiJgnhRA2tBMg6gEPFDTw4sF8H4G7wTadcqTmh38Md",
  "key45": "5utwyB2kHk4TL9hh2EmuJEgDEMjiekGaGJjXtEz9kMgBT4UhMv23bFGFnbCVYxmivbmSRf2DpZ2SCCcUTX4utRk",
  "key46": "2U3kpkHa3k5213UhoznsLorxHkQmCtjijuMdqj9bhBL81F6YB8LsyZcXbpxWRvZ43wM4gjuoukk824Z88XJofSZM",
  "key47": "4neBARFA77myZJXweAjU3xfTY1PNexvM5hvNytxm7E8AbLF93owyHokHx2NcLf8gkr5j8VCUV5fLtYuijQpjCrkZ",
  "key48": "2MPeb8WQNt6ZPzhm6tx2C8qkXVym3Hf8oy5QgfsLoSXPrHhSvWNEY38R7BeoaCmWUwpdJpsu6jR3m4AiKHtqifD2",
  "key49": "5ANtoAagRHsM3mWfVkh8VyZTLx2nA68UDKWM3ZfHeM56c1fXPrDMtSBpSDbZGfXiX93gbKYe96sFobU8ur1jMFE4"
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
