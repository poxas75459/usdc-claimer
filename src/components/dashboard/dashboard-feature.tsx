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
    "4hadA9bB82Zbhh9HW7u3jk8ppoUjW2NwZZbaZCyPYEJCHAV5vERNhFWGyeF8DNRR6QbBApwGBGrX9yhhCQJUyeXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iqZofP7E1P2CvsJbGiYSpnWrC1kaMS3CNhDb4W1AkaDLLQBcSahEh354sMCRYejjUsotX42Ef6X4VQC7x6HxYBs",
  "key1": "LkEnhdRJHozmamSkUY4qMPn4hCiukVRtWS12gYw8ME4ZT5Ms1G3Ssg9Zb4oKdW77ZUbfJ7rPD2orC4Lui81KCmj",
  "key2": "UsgX5HL1nZPchvF8CmYWirbfTFGXgmWdhvw4ZoyHBjEDNZ343RvfqPhBx1Bok75Q8gFrfetC5dUcUiAyZ1vfcqa",
  "key3": "3XGwfKm2Wt4SUki52ELt1vVW9z59xyuHkj6ynurU7ChxBcENkpsHHu3M5FJZ51aZQj2nPqPcpXsATjV8CiYH4Qkq",
  "key4": "3J7ogNhcYvTFLvjVCHsk5RJMzPgMmDNm8bFwos9z3zW4ozTGD14WFBB7chcQvZUEdFb8aYD1a45yx27mVYJaiKLR",
  "key5": "56bpTHpk6H9yQkkvmmkLgGxryJMY6PV1KDfAHvjjM1GrSwDqgdQ1LptcQkRtCofZ1wkCuGhQww7Mi8UwPDnvfqp2",
  "key6": "3vXA3w9pNJWue8uMKdxZVG5Tt3GYC29M9vkS9UeMvT9SuzfuVXrwpfQB54PABmzBUH67Jv38Ux3pjPr4TPuyDy5A",
  "key7": "BuHsHjYor68mYVr2FotkzLs9X4sEiwoCi1NBnT6CpdcD7N8eGGiczgaBvrJUSfLEBmSuZT6KccXEBKheeML9kAq",
  "key8": "3QbDHUZeFmBpkD9LC5RiUEL7XSrdFCSZKjRLLNrkJxnckNJ7q6nBz4ZqNYH2Rj1EoWby4gJCuVS3BdYUfcARbNeZ",
  "key9": "4GLEDLGARUmqJ3FRvcnkViNB8J36NsXUYNZYQsDBiBXnvD7RvpMbKHTsWYxG7DcmqZa8w4epTVQqhP8yatVF4Lau",
  "key10": "2xx1QC3CHArqRrpZYvZfrHp8BmJ9FjxcqiUo9Z7fkueYCWhqRdeFo6nVuHLLQZRRbbdbxw26xFQwitH3nry6QxPB",
  "key11": "y6qkd1ZRE1rFegb73YscFJJ9msmVekRXTQQrR1X3Uk5mzjJggXheu8ba7BbcZUvbj2wGDzM1wsnh1wCVe1qtje4",
  "key12": "3dehKpBQ94siLtMyFJ5PemrQRZsgiRqHqQt7L1kLV7VzB746cL58tGyZdVbwJ53F1ctJqeiPszyZsmWfreGbMyUf",
  "key13": "3NXb4wbCJDnKndNWBCdzeAGR3j18Q8wh24yZSGDwxRcypVVKQgXXRKjSJU4wvfUDR8NW6zj66MPxQT1PqG5otTsS",
  "key14": "3CwuVuNwAeGAoET4i4uZWsAaxXPQ3BbNWJkNutMPgLfnZoB7CnEZQZ3ZPQPpBuo6Q8BMh1yJzBzD7AfDDe9fPcCM",
  "key15": "4VEhbZhcmE5QwnuFNba1oHompYijg2EtPVj8qPCwG46NKuQPmGw92DRvzy3LujpwuFUetojpRQqToqtLvqZfK8E3",
  "key16": "4Q5qez5zpfxm5UH9NMuu8YH7H8pLfAQdDGadxzAhJSor1XHbzShb5V9n7SLwDs9ND6zAj7WjXggoRVeCZ73R5fqY",
  "key17": "23GdSgdq7pXrVckmwaiSFeijFRVrsmJ6GgaLizHR1xnGWGp2wZMk4EmEi6BKUivguVf7o5MKQP4pCiDBK4MuQQ3G",
  "key18": "5WDzFj3ZGAieXCff6DLeMsW8FG2G34iHNmFFvDdynbqxBCHvh22FWTMJyjFQWDvLtNmnku49uWNJL4F91jsveC6F",
  "key19": "4y2uNUUNv6hi8SbrM6yjV3fV1EdC4HgtCWLtAksXoDBD8q45mXm7ksvwLkBS7LSckP3QHu7pHTuofQRWedmNT7MR",
  "key20": "4DRwGFYtezogaEifpia2ANJU5RF1YsDmxkWNaJnXaWsevfsGfmeAiwvm2Q2GKZFj1nNZN5V6xH8mpNg967aDRhv4",
  "key21": "4F4XUcWjBoZDyqwMhM2E8puxKeQ6okGM4ej3XWm8ea9pWvGa4KMp43jqspo1Us4Ecp5bZfQDB8Qfsbc1WaWoDvQe",
  "key22": "4SWuYcRfHFYwQEhjN6smwDdtHSrraFHNvq1rMEQkGvfYyn4wKTFJAtJCL4cC37bBAwmiESW8T8gavVTExCB8gVBd",
  "key23": "39A3h9udttTXoKCXgAu22Bko5sCQybVbeQ9RWqpsLh2FnawMvS6cVsG2MVw4WRDWFLyHGCTX7VJevisqE4scG8mJ",
  "key24": "57NJZ89ucM5YoawkWCN6ucwerPkgq9dVHGc6GFyHPGu8kWMdgR73hQFrtGkqdz6tsFbs6biN8CBeZaxGNYWzG6k9",
  "key25": "4YkFPk2H4fokRBMtxxPb6WFKBa4mqxsoin3LfvRfBXqv5P68bfjrVcstvf6UQ74xp6XZ6GiPEgKhKLynZwETShkU",
  "key26": "4PjJtf7WxLDCnYSyDatN3748cZ4R9ZfcUMBj67uLxViALFhHNHTtjwBZUt6sVR69Ww1W2nkMMkK3ecsFU3wU8KBJ",
  "key27": "3F9S6par9MWzH7SmtfeS1S6c36gGwN53CkwVNXmPPQRvkJwT8xkWd3JZ7KQv7QRJFAxMpSfH9Ux5kCzJXgok7Ki7",
  "key28": "288xsSHHdMcQGKjtHKsyoqTqSCtwYj2HDg2m3sbWrF8W6GQZ9xijxKMMSF5wiLA82suay56hHniEPWXKMJQ1PFF8",
  "key29": "4r3XhWC1apv6CZB5ad7nPPApBo6Ag7VRUV8wQz2fBmkZJMTTDFPMAkmzQ7SKLTuT4nf3P28AXAraK6wR7ne7r7mG",
  "key30": "54R6TEibRkqy4Q2SMPa1TRY1qCRMtKB8YF9ge6AZZpf8Vu8t8qQ1bbAzTE9BY9nxNDv63BwzQw5SasYaTtpbRzTX",
  "key31": "2MqhxmMkMNFTkK9Vg6NgKELvYoBgHEwtXDaAGgo4Ejm6jQerjSkeT4Sg7cdJDQceJnmu5SYY4iEG5LkNM16Qhqdh",
  "key32": "67j9opwmYD9EVoLgYKdwDpmuSZmK4zYqavUYQMcigbhjbXSiTVMyeBJxRMTMEBZB9W3Y4Wb7WUWeKXkpZqdyJGi3",
  "key33": "4J4FjG2NwWBFz3nas56VYcyvLZH6Yxpah2mVUPxmE5vqDyPyuUSXj9rHUgNTb5UZN45MyEUC2K3fW9uuUJjMYCay"
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
