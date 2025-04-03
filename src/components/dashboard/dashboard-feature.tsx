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
    "5CDVcq2wmnhMN2VGp5WYy55onQrk3MoWu23E9gdqmF42aukNoKTqve1TLCMtoQdNMFxJrmQ2yguHrEURkLdL3nDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RRPWhNnjNsDR4PkDfVsHg2XTK2hAiD1P1hg638NCDqedefdsauD58E13QF3rt9o7GBnDDU18DzuFR42e3VPYaiB",
  "key1": "3RJ86BUqyqcPAHcbVHZhwGRX1LutdFVzy5YLR4wrAwi9GnA4x6zcJZRh7T4Y4uwoB5APvJwTS4rnFRQML4FtpuCj",
  "key2": "3oPShMRyyaAEvPXBftCB8AumbWGhJsw4jmSHZd6XHGdZFrimro1McwU6GE51s1yF2aTkRsgk6BpvJfwv1HKPu9ZB",
  "key3": "YASat729pUM3rKPSd26Tnjd93adpUxQj42icxfApavtcWipgV5sY2mYyJqMYVAAo9MsDNTYBqyXwfY7dz6YmdpU",
  "key4": "5UYhLh7DuRvGEgJVdPQKKv9YAotN6g6JfGGPYqrqdhjUCbLxXUku23TWraRWRN38sRVuZ8p8JXmw9dhtEH9nVy22",
  "key5": "23yVHXQkaqABqUDsALFy5NpSht5EScbMCnWXgoScf4zNKHBz22K2tfoX1mLTt477ywMkvxKyuoKiJEoAtGAKTGa5",
  "key6": "PpGPauhq3YCLg7MesBGXUBNZuKVApe6UCpbwWw7LggbqaWP64k6L3cppRgF9khgESSoMXFsdxQmSediH9XpoM6i",
  "key7": "PXfgEYwGjMAirPyDGP8HPevqn3yySBd61QEkYhiddp4xUd3NGMcbxrvJ2VdmPwQTaENZXbweRUmL3LTuksnxg7D",
  "key8": "5MvjdsVPkgC9Y3jpDfAUDYM35B2f1eFEEAjSE4mTLWhTTPaBWAufcyqqFSqPXVo87Nj6cwanvNBBJJZisu7nkacy",
  "key9": "4JhUYNfByE4MevvoEPxrnctSQfaKZMFVE1XNBggup2wszhD2j6928wVHrp5LThJhiHTvEX83xJ9yAGcFqZoH5oaN",
  "key10": "38b3cThqzAnnMhSu518k9CQSF4RUN8KUp6bHudhtuQHXJkWPvA2C8M1YS6BqLVfTGrbPqcw4RQfQChyUHQfMbPFf",
  "key11": "Dfyi6PT8dWPNc4C1EqwGxygcF6nUxvoQVqEP9YJHYweRpzS5fSSVX34yf1GQAR1gAKBC87V6K29HottrvHF5WZs",
  "key12": "4n6gXSYXU1KBdVz3z57hCx316FCj8ZQep12hLX1XGGL8Hqcv4b8TXgJTaoMEK7ckm7eaMw8sdtsZ1tCvvRLfcVWd",
  "key13": "E56pqkaPh7tDMMZV8NyX54vycLSCGbqpopFSL8dYeyeXRtvkvdw3zWnUctn1zNGEZL5iG9bg1RExfRoYEjGwgab",
  "key14": "3tuznM7fHxm8W41BEvuT32XjGoMSmDg38GonL7MxpmGYffBGRmWMUSPMSKgBdNKQssCjiUVvVQVbunzPRefLRnNP",
  "key15": "41Y8ZXiRboVDa2QHQ3jAAe18yje2Bc7GrkTbV8uTqFAkUgf2zShtGK8XJvhP6n6pyQz4XBFXrbKWVaRukK3a7z4A",
  "key16": "2PWwjmTwb5nfG7q7Bgp5UA9pMYJ5f1ftU5LVbufoqX1bneXna8gVuoeLcS4KenABH53ezBuJyyDFgtbz8EkXxQst",
  "key17": "5uUs8t3jx6UP1vRaSDfYbhjiutw7udDwAx8u3Z2RjgRSwYsFHUfqCyixH5UFYhasyxjCvoLeoSBfG4Qbf2XSLfH6",
  "key18": "3Jh4e3d92rfdQLoKLA6JniT2FTcW1adxDpH2MTMPBFfShwkLYnYbyuf5Sq4eK5kXK9MLVeWKBMdiY9Qdkc9RtaaS",
  "key19": "62EXpPD2zR9Ngzdaackqjocu8cg4jHRqvYNb9h8snMe14DZQdsUPZViv7xySXS2tLVJdvofUf8dTxS7STyUp4hQj",
  "key20": "4Csobxhzy7tArmRTz83co5N6xeNMU3WPz8EJ6QN5UnrKfEWEkFyRQfRTey1SAK5SGvmQMG9HnHYqEKAZiScRMMvN",
  "key21": "Ps9Z9Xw82doAUswTj78rz2VDHDfmgkcXj8kvXELAhV8f3ztqnWwC1B1mAPPo4PSRibjjBSnjffCR1nrA6FTDacp",
  "key22": "3sU426GLF9MuYWGHtR7BdShjHzXTjvhrBnSAsF4W4y8udamUK3KXNwrswMinBTJwnuJb2qDwEChFbZ8Scxm1K4cY",
  "key23": "m64WAA2jH7GvkrgmU1CfsEWUVDmWU7Ebg6R283z5xdG8B3RFjada4PDDzHYpMnWN76AX6djLfZBfeHE2Fb4XUru",
  "key24": "2XfDL4DzPT4K5CEzDve3XufzbW8Ge6F2R8kqXowacwQrxAyhNjoPuBGA3pZJBbVpj8MFtjpmKDQ8XA84F2G14k25",
  "key25": "NynMDi1itpKycBmfHrLExtMo9z8Vfs6oMHDysJDXc6Ev1mYk2D1F6dZRnfXL7LoPVcgxkrUc1ZveyPY9unpbeyS",
  "key26": "5Q4zgDLM2wAhZtGasXu4ytgti2K93Dc7iT1nufCWXmHPzHvbR4vqJJZsM6US16XAxCr2FqULq89LztUeEXGfyBjs",
  "key27": "fTkUQ3LWkmmzx9TQB71sjnx8D5fNm1FTDotZndfJvj4rpG7Ude7a4gK5M7J1fW5jguoDnp5HVoy8ikpuFvUD1U1",
  "key28": "51X5kf7X34JGdsXe6Vvfk4UahSsYpY5vBZ6MSiTaqZzSJoAhhgAJLUUbNCyTek7RgUwCoXBJLXjcqLT2PdfxGQa7",
  "key29": "5kbKdppEjesEao8jDUE9KkzbtERhnEr2tw9ZwaufmcEW3uekQn2wHxumTtifxP2eJ5kCbAqMEJ4roexNu7BmnpFy",
  "key30": "4thgkkLoy4Ferq4VSxFvDcjcsxRPmH4Z8hRxxnaiMLrnW2tv2TaCRQBZFFuE62r3RFw7PBJ4h4RR55Gf156qW1Qk",
  "key31": "4kvGqyUNjUFyuGCvSJZC4a45e7itDdrzqmkbNTuzTRQa95HXntfPMB6SECxoGkmML7V2i17W6aRF3UuhDncmPPq6",
  "key32": "YVs2qd955NU8QBd8a83ALsQyH21AgHFTJWGF88edQvWGf9btiuyGzWzLsZrWqqaWamixd14AxffZMPjfVqQRuzy",
  "key33": "kHc1GTAadVxMdZZWieGVPe7yZH2atKvaW9Kb5MvpLxtLek9f9hpGYJwusQCtvWyUnDTPp2my9iDTAfqVM9HdEwn",
  "key34": "6ddqK3nf8PGgAmnGpryye6hz2uGq1iN9tkXa3hjBtFxSe2Ttbyvg8XtKQqohTLQm8o4ZVJGGuKBKZDy6ez2zonj",
  "key35": "5Lgdg7FHtc4BRAL6CrWCmCBq68FYTDufzJszfMvukTXcGRE1tWXhecubWDQtA1onPycj7kU7ZEYTocyHzkG9bSTH",
  "key36": "27oGjS5gPySknefDqRjZAbYudj8gem7AiTszEBLZZm6isxQJU9kSQfm3zZwAQC6DWi7HMjnijSUT2nvCzfzCdyVo",
  "key37": "2D8HWFS54UCEq3okpnkHRo9PYRoZpmt92zs4KqGWxbRKMNYt6n5nicnyowLoNiP6EzkYx3ULnYjap2xbVXALwB4A",
  "key38": "4yGZ9pSRrc9rprFDCJEEU224kVDnvhm4kPF1a6tpCYRvNGDLdFNWDUUEG5q4rrMspUGBdcSLgyqYmMT7LzWWwFkP",
  "key39": "4hF4Q7UBServUoMei4xD2ENMBaFDfvCeitRaLbZgtzYcBeZiC78sE7ECibRaUDrbNrBkTS9Kk6XGUj3gWaDrA8ai",
  "key40": "2FbdDLNWZQce79TcKpJzqRYhPTAmpcGzuw9mFn4EH1inoWGDYQywz6m2CvyD8CNgwT2fvPdSjNmAFgbncuHifGdQ",
  "key41": "4EXq8upCrFx4eNTSoDLnwWh8badEgauQ8U9nxQUtTkEA9rAwubdPSTnPuADmJ3fKaA4Z9vtJEiWZC3PWvjx9dooo",
  "key42": "3MumTVoQvMC2gPLifzX8T3hHgsDmwS9GViDfxsTmV1z1bv9J7RPM6fM5t4na5EbGTcysTx1u2ZEnrvYMeCJE76Gi",
  "key43": "5f8Kjn3nv28BYJ8rWA2hcsf78zfSXzvnFoSKVFokYt975Z1mY8n8j785xkSbt2fNYvnThZRrjygjP2KKD2qszA5f",
  "key44": "fBSmjCF1pviHFL91w3YRnjfmokGwQp5hHLoYCP4PUPTpchThSyBkD46sUHmfaiQhLju1qJGnnYwULJnoNrnzrUM",
  "key45": "28jiBJNv3Q2cefwsWUa2Hid87qEtzEqsquTEJSmbn4z2ftALu8Xcaxcv6RWYEygf4LBRqA2FNsY8Czp6KS638tRe",
  "key46": "4pm1H4VcE2xtCvTBjnCnYbHTM83Ma6cLDyHKrkU3dJyEZh8jrWKmJdSafhps9tcw3jQvUQDX9kuacLBExxgzgvVC",
  "key47": "2KNnMKzTyDNiznhnV53rAnR2H5vm2eYBdUAtjQkL6QsnzVQ2z7tLZu46Be8fCcwLWQ6vpWSJ5QwmiDSyyM48VrHV"
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
