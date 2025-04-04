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
    "NruZ1cziobnQ1YhVeLZuQCjJRRR1oPeS7RkTVLYeTkErthvrkifLqTV1XUDHQaQTysfRjdsfA6ip1FUWSRqdpcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fQ4FNfJPvKpdfaamk9hNLC2tkL955hiELw3QVzTusNZBimZCdEUVazYcWENGxGpF2m9hsK1vgTTHEsJyZFZibWj",
  "key1": "4oMTRXWunBpKFq9Y1bcQRrNwCCNFgfV4Qo7amuhBXrJLABXkRGdwHNTNxUBa1tVJpwaHx2Aa5ZFnbRSB5MJQ5h4j",
  "key2": "3qfPuDUpqvEowXFr2BqsM9zisREctGZWpNDphFFY9fDA4SuRb29kfD8SPy5g5SkbNiCGLQ1yXkDaJK793fpPVmhr",
  "key3": "3UyS7AxnTwG18nLb441bwneeprqEJA8FJWj488pcVXHThorY2jkzWDvKK4YP38c6tAXWYsxzQqjjr1NcuvW7EjeZ",
  "key4": "5r1BfX4UTBga3N4XFfF8YFz3w9TSo19hUyewjhjFvweoT5CaBiFZs8aKgEAYDCK6cRoRMAMYvRexH6uLuxYmPmoD",
  "key5": "4H2noAGtL7cHuUoGtTTG5Z3X6ADG7TnxzQQb9b2QRQ9pzDsDHDgCpTkqerxRnZ3G7z4EGTqqL3AeBmUPWqGJJufz",
  "key6": "5QFhMNK6QM7yPaxEdDsKSLApejQikAWUoy3sPhCr4XSJfMfEtLqL43ZrGsChaoykpSn1YaMmPjRGm7oydSWaQp3v",
  "key7": "hykQFVuptJKwKequmSAYFxYeTU9ohherFgKDMsMFNKhz39PPUPqSxTEobexaFJTtkEr2ekrLiBfdPPMuaDQ7Y76",
  "key8": "hRVNXnoQfnZpVfm5Xtshm7zhPknGcrGBUPp6ydx4M22W5S29EL1gQVTWzqFUZuAt7rCDi2ZSUmRTLqmm5Poatno",
  "key9": "2rYQSQBRXHsSueH9W3YJLu9hLYiQp6auaVRZYxvVigCZ7iRWCQbi4vj4fJQn4ocSiuCcCx8Q9k5ZW4Ea1M94T2N5",
  "key10": "49t32ACM5u2kfMFEgFpzTfZprfkw4ADeAuB592vm8srD1zyAfVFA5yfoKcNWscaNUD2MwR3YYQM66pWPFvsD2gHU",
  "key11": "MT289yRxx1ccvf2Xn3jof8yVNT1oj3sm1xJztbKvpbp3w8NDrujzcwF3BuAdKWPMS92MkKNnBgJPdtNFwVwQhok",
  "key12": "2fpdKW1E5h7jfyY8i7WtMjzfej8NNtNmEuPZgkXUFTNsQKii6dHy94dDUw4hZtyeTfMYkwggHr4GfEZCysSZjFoS",
  "key13": "3NkBCX28GzTEDkLGUh7cZycs2wcJ4Ah56wV9p5tjCY1dP1121rgBot7eesDRXEUeNGa3pxSmNH36VJM4VAh72hE9",
  "key14": "3U2fzG3Cu393jQTxAybJgSmowaob5ktpKrABzAFHTgShQd46SPirTPukjUQ68T9Ju6Nb63fAAGhVt4vjCcphk7aD",
  "key15": "5epyPhM6R1vrhUKubEVNoqqNUd98Jc1SwgKwSkcyzCZrTgioX1JBcarMonrxSsBAZ8ntvejzQ7LTx6ETVne89Qvq",
  "key16": "ByZN1u8PZP47eZDadhDCbgTPQdPTeSCsuP26VmxkULX3sYR9W2QAPR6zr6G9g3fVg2t5CjanwL2aaEwNoHnu6JU",
  "key17": "2WYdViZLK4VJwrmK469StUQUnFWVqjJYNPQiWE5zHTCcB5yDPomWqcxLpkM1ngn8cu3jRUSvqn7usw8UXCvyq7rS",
  "key18": "5ah4nHuHXwTH9EKLZQKTqMELgQEJQPNToaAD9YVriiLx4RaZ71Bpa3uDegBU5m9kfxRMFhsnhffoxxdJ5zG47EF7",
  "key19": "5JDdgGSxAJokQQ5ar3LPCAnFThnHXEcxKFvsdEcyJKoiPNWc5wsGtPduXdpFe41ocizRZWbEsPX7ui3k4afBa4L1",
  "key20": "4q5BGSF7eCtjcQcEzWjEyWvCcbXdagVQ8g9b4xtQKuQ4GCdKBkPE5DgNmbD9ozQ9MUtzGkd7H27gF9zj1eNSusPX",
  "key21": "BgqtqErB4LaQ9qfSaccqHWK2nowgwzd3ziKGS4ftpR1HEJKiRuyoVro5asBaAex7NYBuHCzUg2E9NoGNDMuRDDK",
  "key22": "3SU356PonhmQ1ehvHpEHqaYPkqB6XDmC4d1Ei3tKzEg1rzVpurQ8zYDbU6TJod6ZSua2bLgAxcFn8vLUQBxZEuUH",
  "key23": "2t2AYRH9S4Mv4Fk45mGeWtA8fjyU9ayKBmNNFFFS7RgNJQqiqtJ6LUKAsncq753s3fFdwXstA648ZL7MxKGmErrp",
  "key24": "4Hywj9ztw7iinZaYB73SjU2yTyCGoiaYdXreNmYJQRbLJU6fAF8kNfBMtr2H4wsKhb5u6hWcwx9QtzqjNrEKkBY6",
  "key25": "5LVM7QCTGan9AtscyUqUh9RfiJVT9aPwcVu7WLzeusZ3PRNZAAtTc4FuaKDc4jsjwvP7YuQQ6USwco7L5GJrcGEn",
  "key26": "4P9ds2DvfNZUNxdzzAW2WLzs4Z6RweaYGJeJBYHQwvcPX1wFP6hHAviHrzJQeUaJ541p87XY6MJHJUUXjNkk9V5M",
  "key27": "2KUk2ro2vwPz2xKS3jQrorNZz79GHoUFktbxqxqASVDxpHWdu9vugmcQ5HA5xhvJH9Cv6PrpBp18ptCQWv4q4WM1",
  "key28": "2TNjf11U5s5PoxBzvj5H4abiNA6ATHNWJpmDQA7jHa3QYKEMohsKSmdsUZrTHUFo2Q28XQ4qfbFXvnP5YQ3uCCKt",
  "key29": "5FurBYRJ1GCbTPq9YpPmuBSJvzfTdXnuh8A4Hz84wuxYaCW3gyBYMZWANdneTSvLdtYaa9PskyzXMMphJbL1YJcA",
  "key30": "2RaSDK9kXWmVhyS7yoh6TJZDmrdwzz8yqSfJKHthvgLtMB7sm1fnhZemdwfToc6Qc34GCrusAYKZLNzHNdNzz1P2",
  "key31": "5MoDqMG58iJRc1Z48XCi8c2e3wXmC7xa3o4uL6vbKvA1U7nzz1W6VR7UMyS2sNbCEVAAPFH4tHZeASBiuzoBDiDW",
  "key32": "3ox2KXkBh1ob7N9Jej22JC2Q4amUuYmBQPduGc6rrse9skUeTkBnVrP4sfTJgh7f3nmQ4GsoDLWKkpvxiSq8Wm26",
  "key33": "SxRAZSiebDKm156DFDZeTq7YofFVTXdfRSHRPJHzSZ6meDAb9yh3vRjyKCTGJzswyyafAyvKN4cGv95kje9SuA9",
  "key34": "2CdTgNjzthuYaJF9aV1KgaJyc5oz9KtmKSCrr1ZhHzf3tDMm5jzc6Lw9RMRTVcb1rt7oYSAdqDjnAWwuE7mB8epA",
  "key35": "3PwabdN1rskNBpWYpfEeuyGd8MrQxDCrAquVQFFyg6mawDbb5KeJJ1y4rtmmboqQUhWRdfLbNQWFHviGr3DPCAkS",
  "key36": "4rvwUAfTEXJKvnKxb3716cuL6TH2ENdbmMjs25ukDHqLBJL1BbLG4ZGnjjKt5WEceeb1JeFSit2UyU4CTRvUQ7ko",
  "key37": "2LV8UPUn9ffHkvGp3JNZQijE3g4nxRf2kGJfoZWzREDZ5KWqejeW9nGkc29UCvRXbbwC9cUt8pWHhgjbnvjMAQJN",
  "key38": "yigv1NUDxXsSrfgZQiHYeL5EzRkzRijY4npvAZGbwUmuL397i2BzdXWE1qrCQRYo3mTYZ7ATWDVZ5v892QjmRrr"
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
