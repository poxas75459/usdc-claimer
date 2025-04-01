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
    "fLGuPBRWi2LivMULUnaYG8we8tPTDS8Pw3Tivp9Jp72HASoRu3f5kDn3Wk4tDjc4kY1V3s2RbUmtFZRc8ZzKXTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rAWQjpF2fhJfkmZ2u7qcas6d9ybDXJMAHnMKcVaq5r264H82LDciz9ZD9RCzA5Pqhf996U2fdpFhncsitaJnebb",
  "key1": "3i2YpUiFJjwS3z92hBn3ZybRZLNrEPprg39NN6m8aG97LnsXWToH5NAbnswfAFYcEbHLWbNGBj9ZamDLDJEyFNvi",
  "key2": "42koQFDBfz46k3pqdTUwSBHyJvF5NYnu1SNqtPa41z6sA3gmU3VXAo6xSf9g6uTmn61XzCeVK2J3uQDdJPxzgonz",
  "key3": "4nyvwN1BWGnJrdXs3hp6jZz4mPVdoqAw4xKaQNDXY9DZ9vv6Ta5bcVJUQjR2opyQ5yzm8Mz1PTAU57xkRxRRPEt4",
  "key4": "3YJzFs7MXQjxrHghdvjj4AXV96RXwbXnkLsyj39a8h5Wo4mrzgCerWkVA2ZEqxqzmC5nxfgkvs8nmeBYkVFesXDn",
  "key5": "3RAP7nFD3X26t8VXmP1Kx3EVehuKjiNfccxenPyEg5pKQYSxVEcSN86J4uk1qFrQ6QYeXN6r8ykdRM9BYWsXBeep",
  "key6": "5xXsQ8rUSDLUZTXfaa9cQsQ4SRQDg7TmJNRimJgz7F6uBX5p7WSRNvA5Fq8VLRQaPG3iuvTJxfU5zFWr6aUqoN33",
  "key7": "2ybTKekD93vvofqq4QaN5RYQ4yBkzvffua4Q8tdb27BN831MzUDZTw5VaG8pYrdNbUEofrAVsXSuw6vputBMCZYS",
  "key8": "Uv58wRUGrPHfwWMp2BKg5cFNKdMTFyeKUHN4nsEcD9SBYCk4bttXEdtxtggV4AhLm5ApDWkt3Ru6XenYqA9p74K",
  "key9": "21yWmo8dSLBVp6rfLTpN4LTAegsymLZBhiTx6pbanPdzi5m2yJWLhGL5ZcsPZKETCvMX3PypUnbCwkmkeNWSqmtp",
  "key10": "4KiEDkuyX9EnbekvRVyGBi5xbR3Rbwj1dFkodC8MYvc9fJLyXiDYyKgZuqeC4dBXi37X4ykSgeDU1xxrZF3HC4er",
  "key11": "5XvUTAFPG4fCbQAqFD7DBK1sf94qt17eMPhwUMvtzfC3cLkjBCh7ZPrupaPEY5VzmRvGTy3DdEkEueqxJUPDe5Vq",
  "key12": "uBKG1dtT5DLxGv5s5KSLr5fSrckHHDSJaKWiE9CP4fq1GwWDuh8pPbFtp7BNhhY1pDXLCxKVQJts9vg9eGGZRjd",
  "key13": "QzjZ9tsdSwLvXU2aPKUAxFycjJ7owrbVv1bUFwWroryGvABXaJgGhuCG3U67NYGzqJkoVxgJHNxNh2vv7RHg8Dx",
  "key14": "3mcFBZLEmow3EXpyJcYnuFS2y8AkLnhghoZaq8YuKrxesCs6bDcK81AJjeP4EdgbvTd5LsFQ1PfrhVMCLavbCTBc",
  "key15": "jXahJzWRWARdUeU26ceuu2ExwiBGhp88RKHWnJkK6zavZWv9FofRn65dtVr9ArDaPQyb6uzwFREDN7e4tSCvCXj",
  "key16": "4A3qemcjmZSP71X5EkNM4C7ujp2haNJ6R9nc34dTgN1gS62XXHeFLP4CGxP6AwaFTCDVqztZWRLHjZ5TH1vf1Zmf",
  "key17": "4Hqk2EkLDMRkG6sCiMHbR2BF5jd5gzC2tSr7WmAGiKcpo7PKa5zciKiAANCd8fbn718fYAjyy7nzWSGmEAVqrHPK",
  "key18": "5dctU4b6LPNh2mGSUU1dEkrYxba55HdbCanrkqXWoEerR2znBJSD4AgTwQP8gSPZy1AhnfkEvnPAJvbdshLDCupm",
  "key19": "5giVtPED4WporSnitV43uKh19x5eBKy8fXgbJjeiJ8YXAxdbirhzAJ1ohbPCV44Ahajf8CWTWJA4CkcVPEVgKJ5a",
  "key20": "3JRRjcSQfgegx5VZY1JNscmhQTFeic2UiLXvJxdfr3YXNJLiRPTzHQgN1cA8orVW8h7AcqWckkcUwDHMafwPXsd6",
  "key21": "49cgXtacj4NJSWZKVcmYMNMPF5GN6RGskUHesqm77bChJz8fBHTCJqfEeoyQnQmSbTx8LeLpnXd3gWD1b7tABFbe",
  "key22": "4G1bFi3swtCftrpXeodKzmkzterW4fMXwqTDTyW7V4kkSCqRJhfBfFnKYGtVPYUpJdFMDeXUmPMxUY5G3py7E3ab",
  "key23": "61DXtZX8uRZDR9MyJsD9d19j5U9h4K73RgE4jtziKPdQPAcYHBgXiVKLyKTgXdzYrVNbo62uWX4s7zpSjBvzMJHU",
  "key24": "571wQNuLsDjh5A226yiNiiQbrs6XGSzDaXfTSw8RECJK13N5EmdagES2rhVqutFvV6pNtqZ1FbbH2KLYyihLcmuF",
  "key25": "37zZZ3W6jtsNg4NYM8NLiAx2ycwXDZsP1tcmpaavqyyfRPdbLSRzNoMn83JQYwLckDeQEG8rHVY8Y5YC9KwH87gi",
  "key26": "4XTrdVcbgyVmx8j3VPzfRjP9zcUUFvTUsTL1gfSNL3yYVZfF79GFFEYZ5C4WZ7V29nMWQBcttKug3HucrQhDjqAm",
  "key27": "543sUi42HF29Mf3guwdX6EABkeAUV9YrbYfJGYuCgMPzKN7priPUkMxU3UgHUMZfcEiH9pmUSuFmLChmoCAYQLeu",
  "key28": "6ZSGyj3AUCZzYzhsXvyMSbbAyGWZCeXuGShFVYe6VstA6Er8LCjZZifthzJscNfbK4jYYpX6V5tyobtXJhSnSu2",
  "key29": "3fVVhDXdtHKNuVpmojftxMrovhnLEk7a8AxJgf24fbToRkJeRhJNRiJMeTUPRmtPhcEVVU8sQGqSW4H6wg1yUeKu",
  "key30": "48kpdxumuCP2GazNrRZ8kn5vMYzE6ToUadi93J7BQC9eCDNKqPJeYRpw3Qzsm9XPkfLNymYL2nYrFFaxYdHZBq5h",
  "key31": "3cPUacetYJyNHeMP8hg4aQpixPrqJuDn5AFDmBStTKhjBcrSYg6sugdGBzmRKqp99dMdBKibeHDpezESJ6taXd71",
  "key32": "3Sg3PNPp5Sd5w4Twj2m9HwoCdfWPcRcUFkGuHch5sbu6UbkLMKQ4PUbLuqnkZYHUZWiGnjPEKM2MANmp4iFc4qUk",
  "key33": "5f3Xn3cSsrkgNLnBh2cKDskVKf8pc2RavMyJeG35LkrvCG8txE2qXtWtg8Pjupx63pvQDvLNjWcgkpJMmqjSgqtH",
  "key34": "2nZfwtRsY6f5UUSHqyXksUuqebwgC2qBBmBPuAqtAbPDohTnNhx1sWiV2SDSWq2j31YbZwaMnVA2AY3xKdruJbXi",
  "key35": "3b7sJ8MUz6tKA96jwwLedddFE7PNZchBFZ7adEjtFJmyaDGzbYbQG5AHtHU83tfNK9cyL2Tbz7cTaCvMnNAzjWnz",
  "key36": "3tt2fz9UYPi9Pkg8PGA1YFoTMYzzsZvrhfCDstkFhY1HGjyGNa8uKWW8QBYL3EfwkQVHTKWvymCkCLpcB6UxcRax",
  "key37": "t8Ns7U3evTR26sn4DT4ST1KbSjariDEEMRSNQwHpmABf4kGHc3BBCkzJbr5Q4Bhotj4EWS3acz3UTxiAUsHUS8x",
  "key38": "2PdwTBaAswtv791FfDcFDJ3DMZbJrJ9wM6jh3QtD5r181AqBCaFzceNahwPmAHKBXz5eJQ9tic2bdDHPW4QVtgUn",
  "key39": "3GuZH7ozSqnp9XXrWQkZPmiutojWjdNGUfzZSPR6gjRRhkH9cHrQxYqi6KuRDJpryLNL72f59cPr8xA3o5AcH4fe",
  "key40": "5U7A8FMJN11gWftbMLF4j6mWwzprNx7o6jJF7ZceRiWMyJwkf8Li7NLRUuSv3UjM1jwbxJF9KFkQkgWy7HM8xNvF",
  "key41": "2idRPAYyaaRM3LHQPjxdHK9ftnd4LLh3A3vFpP8MyjnMKuUqCTyJRGU8pB6PcbJtqLizw5PKf2HFFtJYZNzuFwbW",
  "key42": "2YqFJdvy8Ey57CFVEVmSNcYQ3xU7QZLfLQDwF6JC4VdAcw7LJm3XrKEDB7JUkp9ECQmoHLZHCtQ5uuc9ydT1aiY1",
  "key43": "YE6CF6AVmPmT9gotfET5jgdGcTengM6JcJojc7FtPV5kKLqijUnDuLUpcLDunhjyGcA82nMsRHprTSqw1RqvPgu",
  "key44": "3MjhGeiE9RY2Ff7tJPnb97aH1GqeejeLtipaS7G22rBMmM5rNmozPRz6Zu9yAAZEDncy4EptBCB4C9P7pLQaj3Me"
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
