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
    "hyPJA8i2GP42CRnTkGcdDD5pRApSLQbjqFq8Trj6Us5gwT9o33ChCuxGqpjQB8nAB4JHNEo9FMzdvjfFb45rCdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CGpSh8qwnhgGsVQUJXwJGs3Fe7S26sia6JvDuE4gkKTZWEbWPN6emsByVKNKzDXMWn6zzwK6S6Xf2nS2GHtViKM",
  "key1": "4L5n5N3D7AR95FRK2qYjEb93njEiQPK9sskansQ3PkfWocRcZm72vnW35PGtoYA8GxMU3YLCC57iovvSCjnmzdo7",
  "key2": "2o5Rue9tqgDjggBaEa4UziuJK8aJjQLQ2JQsZKYBmLK78MgE3ct4ZKtNPMREBudD7P9JMmooDc4qJgAoiJ6wP8Wt",
  "key3": "3hr75y9G2Cqdk6Rrb68VL4eVhwcK9ofxAVjcef7qdEdrx7rJMMFYb8q2GnagKNNdrKM1WDGmethkp9KWJ1enuXq9",
  "key4": "gKDWB9nuF5HPoGCQ4XjVkesbcoSrcvNv1gyvmDsQrQuPaBdXEhy2bETtVSgTfso1F17Bd4X1Db8VjNZuBwE9wHG",
  "key5": "4rExi7qujrDbQyT5xyCeRuyqQWJq92z4QB1ZbJ6qs5uDoKNML22sCQw8pGUCqZQ6fRNBL3WyzBrVRR4vatUEiCQZ",
  "key6": "mbei5E5Ak5zgSuZVfGqqLREAYX9HiFyPLbYJ1zTBFQNicKEQfwRRdJhm52MH7J8NobNwsJ9BfsBtoxA2wDD9grT",
  "key7": "3EjteRpaP7k2t9WwqC2ft6tQjRa5VyBNHzKdd1HFndZav9skwJnAea7eixRoqwfZk7KQf3wx7Epa93YKKFsZ9FRa",
  "key8": "5shQ9VtBr8TZLxgkog18UTMnAhQUFDRR4pHnxszcjYVgXZQMazZnG5dWNZqkW84GuMyH8qEBcRVu7sHHC5PD895a",
  "key9": "wmzbC6P7UDruk9HQjRBP6AUTCtu1KtPKrj59PkBwRHhikfG6iF4cqoTfmdWRmDm8Li93W9boxpMC7nYJhfcVCoh",
  "key10": "2Toev8AAjdEbWW9HbCenx5fSQ2awKgCqdQACMuo5YEkyWYA8MtrPMMahddrWiyAJC25E5dmyh4bcGHsp1AFtmqrn",
  "key11": "gMaHY9UgNwkYQM9onZg3Z95vbfKkZox583Pj6CAkoFomm14pGxC5B6WBkCp4y5XEBGs3b2PGqH4cuCP6SutbhYw",
  "key12": "5r7i9dJa1KdWWk2Qb8HchpuCbsdjMnQEDcHCW5rYhbuRYAE1deQZqN2ddXZSybFA2A56yKnNsgNs97fJk5hQHNzK",
  "key13": "2hjNxyCq4C51nFrgAv1CWAHSKrNuU4eSUAUPaH1nT17a2Vd1VCHk7oQopHXYtG5ri9P1njTXzZQBPBucRcN5KG6y",
  "key14": "2VhJoVDqvJL7fjSuhPXRoh1V3bJMHgKJeRUuhr7GkKNubr8JVgap1oT4LgYyP9L84Ywx3hBJd1ijXoKCm8gX91DJ",
  "key15": "3eMw979TM7jGSPoq9VccL8YXciaUnt669rdDCPezCMuznwFUZFMM4RAAz1uScHtu5HC3YvvSrMAzA8rjqAFYV7pC",
  "key16": "28UBEYszJJJ7iz6e1HpLPaisAnGVgDLy98GkPYENG8rrnt7bcgbZGmGPm3eY1V7jGkiFEqyEaypJC6KFCZTDzche",
  "key17": "4SA4Q7rAiLwdmZXEV393783b63QGshTUg5tMG9G7aTX6auZ4e8brvZ8piZrXTH4FLc7eyg4ivTxj6jSK6jSvMrCN",
  "key18": "3Nx6SfCVYfgPeY8j4Etjrqez85PiDqY4vy4c4ZLtdJf7PfRHkZPsncWuwGY9Vz2az7erHmKjMWjbfsJ89FnZ2h9D",
  "key19": "3Ssn3mD97eECKeoD5JYcy1jbHNdYhxP5DJWGnu8SCHuBRj72Cs7YKj7brz1egw8zexTXApcNse3xfLNdYz7FFnJr",
  "key20": "4yupfBJMFJ3CUczb5eercgScraya5SwF4JFJtE3SPEUfb51Dv2NnqU4qvkUnSJDDmKDCoEeT1oBZNJYxsKGFVcZ9",
  "key21": "5tAtPGMhxj31cXFH5rh66B8FEEZQ3dDwT5CeT3nHTirv5sqYqYKMq1osbATWayic39hrLesmWFbyQ3shZHdoSd5m",
  "key22": "9Yh3n4aHuscqAcRrjLkmBVTBH5C2ZGTrpUBHcV7Q1MLFqxCRvUh7DLZuwe9NagXCGMrmaAguqmsh5V7fNQza1Cx",
  "key23": "bYp69Dnu63D7Vw9HJDyZ1BLbocvtMwJm69u1wKw77vzh17Bh26LVaeZVRfegutBn4YshmiQDJckMU4YAXVXTcyP",
  "key24": "429nTgJsx8wmEwjPNoZ3pBk3fPgsij55T9X7PKRxd8U5N2s9UvuDhBLK4gEgCgFe2JdofP4yGrfGY2AhFGgt9i1Q",
  "key25": "5XAyt7TgtDNt71KZmMicdJeKNg4j3UXkAdiviKqtUvhH8jSCkupuTDnsASYc1HyWNaxgA1xLWsWqBuMDHQ1Q1U2z",
  "key26": "43hMms3JpMWD7sm9WLWmdFPNUHietyTa2hgFSqCgTCXRgAgbFMQ1QLduVMhJZq5kesQxWonvot1Unj6u9ake7uFJ",
  "key27": "3Q6Qsc3fizHjhdA2fgnVmPhfuo6XLzxRV6e6JpWzd7jD5J2EhFmZGKTk4XB5aNEZQHPWSVqvy78dnomL4f3PmGmU",
  "key28": "4pPHMejoor7nVvXD8ucUASY5oqUsgggEsmz3xgFHFf4tnJFHqMGbwPMBbkehohksVnav7ajdE5J6g1Nx9mXWH71o",
  "key29": "5HEAyBERMD76WRWhhVAem9jviUMxzzM7sGMHWBCyxpf7FkCrXbihrVuCnB6tAP66y4pMrxRBJF3FfhC8QjCQdevo",
  "key30": "3srQozrKAKwEuTjgazPGYCztcRG2eLSS5jK9zRQwg8danAU7in1to5HVt6FcyfsvqG9Sefq2FNZMdMu4bD2ZpzQK",
  "key31": "4tkWSnt3VAgYR7KwxBdeUuQ2h77tfoGmzi6kGp8f9UxAHuaL1YE9rwHD66oXBkTdAQ8f3UtFPBdX8iE6XothR56A",
  "key32": "rs8fExc7ezEYfUKUvubgfcBMCZJEctDQ9PFxt2ntGanRwMS3u3rNYFXTDKAWxG3ZmifjQwCT5tzCc2kPz2hnafd",
  "key33": "2Dmth5dW55Jg9X6a1pRDAiLj17TvfGgWfCh3NiyMzC6PmqEsvy1QR7pV5Ehp3VdiioPhKAysJxcYPL8eDnSsV5mq",
  "key34": "3rYeAjfRs5Foz6ZKQFQLhKxwCYDQk8my85nVJP37qYzWoXUpyZL78YufnNifoRq79BoLJocNitLufswjrLQvRarx",
  "key35": "xs6gticNTd5SqYA5dtqx2PvDBbf4iQti33CqmPcgqj1WfahRjFNCFT6wUCbfGkWjMPkQnJHujxRDEUvDfgHsS5u",
  "key36": "4mQGk9tQEYqDNS7BfDf4TTrzB9rrP7QgbMCq7xRuhFJ8uFpyTN1jjSviFkFNfGpxNekZ6jY3Q8htGUAGyESFpN6W",
  "key37": "2oFUwbfrBgDCymp1cSnGivUxZArr3SjobQm31PMKouJLFWshCS9ue7LZXpYyN9mWUkFyjD2abiZj6A4GqaA1siL3",
  "key38": "2RWc9WttDHep7uqChXQ4KTyMLgU18Q6LVD17azSeUgW2A24ioz1QrVnxCFXv4AFAU5sGsbDB6ij2Yym5vxRWMx3u",
  "key39": "Xc2unuLAFg9UCvjzZWjptScfYPkyCB5UW246hiE29RFtGuphEgpEkJYDpYoeVPa9S8VUzF4rEemBU2gUotpuJch",
  "key40": "xkbiddxdxnxzTzHvfjJgtZH5nWBgqHprXRFjS3Nai6D6NTFeCtez961JXF16bvsTsVNXvky64sqYE3M9Vwn2SP2",
  "key41": "5eraHF3gZ3hCtuVdCVWCoy9wvgUUP4VQYwyXajGkXGFNkGby1vEDHpM5GedrmWVP8GQStkBSdk4LfyeMRG7epqgF",
  "key42": "3srthb214w54F2GC1ZC8vdvCPAhQSxdm7SXSvGUxgS4Exr3srgtGBNnrsgK12L11wxtzfwoHg3cBzh5rff8crL2D",
  "key43": "3JEriBZF1mnMaCXHUTh8wEwvzWWC9KQukaqZdSxmcEvdr4LsaizFR5ipJ29FD196PtkskQgdngafCtz8Cbr3s2ZU",
  "key44": "4vKKr9CaEc2MD8T5irzQfoaUA7quHgfaTvv1tsFPFMHA5ftZBdMZue9GaeUv8TtmyYcTdBwLX6KWTZudrjdS68kS",
  "key45": "47cS2PMETRg5JuSsLyEF2HTtGq6a6kCDUkvx4kwFrhG66kXnZP8RuWdESsDQudRajuQ72iMdxWQ5zdKaT2ZjPiu",
  "key46": "4X7bpkupCiDGyHT2ZdeipPTiFREh39NA7GzqnbErJRR3kqoAmaUvCqxzf9k1KyWqVmFcEugHeSSrxENkcKahVcq4"
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
