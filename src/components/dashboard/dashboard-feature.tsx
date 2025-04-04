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
    "nBPHdiwUbiQE2ZG2LG1qjEeab3bqqYgtdNqkRYXdC7BkJg9eZkb5bsuV2MLYrnqqVHPF8JGmJVuPAjDyQLmbFKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54La28rvpjeyAHz1BwMTqPMo6nSfEpcW3BGugx1EKjyXGuW9Vr8MXAnrD4g432roaoftXqJ1yJjJXZxHZFDW2iLQ",
  "key1": "48KRKbosFVGTNeDBkrvb2pp6437QeW78GPjtLT6yg4ysnwRffpnVWekYsQN566AGR5m3ShEHekZp1soxHJobkVNe",
  "key2": "3UFYRyVXUSMm8yfPxpER8mmDBKADce78AqMpVBWebdxuGVofKPAWjne4hxMVPUmVVQtq5rdKzDTDgBFn5tL45eu2",
  "key3": "uk8r9MjSH6kxiWG5QDcM6jLQNcHi3Fo7TF6PmzKSnR7aE8Cn9UsNqrcRry8nzsEr9TcgbA4EybjTwFHfVoyb1or",
  "key4": "66iUkBhvHFXg7cXFyYbVahjsCNnXGVtafvjhAchrhBTQgBMWMevmHxL5ju9bZKMJS9vP5aqsSegepQLq3q6TBcaz",
  "key5": "3p9tWyBzf22RYpVraZdzVVT285mvzW4wWHbvvxMqsz9X6r3PBwsfV1uuwxbscxyj6WZAcaWdrtqoM3ZjDqGhyvoW",
  "key6": "5QVtJXQqnLYhhBYfPgYHbVowaPdSUEMRY5CxFFMuoDAhB8tqUdQM72Z3WgPVditzbTid1LfRJbMyC7MuQaH8fcZq",
  "key7": "2FupZzsk5Xdf3FbiYQ2xuJuTCU4omnbSSpDha8Yx1w6feR7zVaunjQjSgEDv2gDTzRjitLCCutuXVCbufhKezDN7",
  "key8": "4Le789GCrL8Hu1r6qJuiDwrmESLnLhW6kokPKrcrSjEeJ9AAtpcXipHC22da6xKQC5XR6fpuqufVzf44cPsH8hdN",
  "key9": "3FXCwFEE3MP7UsQtxMhtnN7kCchqXauAZHJM6EEuStvVbgUDpb4GiHfBbbm1ciB8iKMivcMu4iiTpjzZRDY4SLRo",
  "key10": "nAAuA4nFH5NYXNwAPk4gFQCsw6kMRqVMynLeVtjRviC4fnNSAe9dvf6EwZGfcSEuVn2zqAhpEoJcaPhxS6MgjL9",
  "key11": "5oNkzk9HZp87ihSahfgvrqwEHF5MyGuXQd6ZH2u2BBiqEmeYNpGryeCE3M1boEUApZm6w1bzDuqQcRCbzHhvBXtv",
  "key12": "hFokfd15cpxWcioh7b6A3vG2d2zwHExZjoDYBdKDBLiynf4VHhyaRDScAcVx2hzBs78BPAi8KtqzaczbSdWEjZa",
  "key13": "5jqboLCBhYTqfw3HjgqhudFL38SYCy5AeYMP9hw1B6WJW6sbw61CpoFdRKP3gAUJycCkPPVj37wCDTmxefu7GL3u",
  "key14": "uh24esnXXzadEqP8ia2KiVFKZSQwbFfYF1kvXLjrGTy51WFtwnt9FhkoiNc8PZPYoT5TFezjFEwAJ3g4HeoN4aw",
  "key15": "547vnimABVaWySoVUoQ6Tv8puwfQ2AG3W331W9QYAeEn93bG5ed1uqW2E7yxdWTMgyrtNhxHwp3EwX5UwgunEedK",
  "key16": "2WJX51Md6jp9ZKcCsnD4qS4YTKkZE3qb3x96K9YGthDQ55Ty7RE8ah3Lncz3EbwkTtqQhj7F7HXC3wDJ6SpTWSwT",
  "key17": "3Ld4oENm7cESQDsjEfAXbqF3SSLtvZ74DnbfFW3cLCK3cyxWS3L8TecsgV2rqaFF5QCHweeEfrQn22PJj3aRBHe6",
  "key18": "5KVnCDzovDP2JbFvPBoxuoZGvshqsFpDJooyiqhPQC4aT93HvsvVFBHEksWeowkf2BewMPXMuGt3urMRLaTXLiMe",
  "key19": "2VE4RZ27ALBLzttZ5omTtnNeZAV64yMGgkbBPSohWCrneYnJqXNHGhfzQAeQLexREBhDD6NFRHDLJabgyKfHmJnd",
  "key20": "4YEc1aGJ9EyGBeURts22YsGYajruVyi5y49u7RUJ6gVVaNC1jhG9iVenRMvoWXLaVLAvY7ttKndqoy1ECEpws8G3",
  "key21": "5nWm2iZEgGLADGkxgAVmbWy8bw3fo2YESyBRgDiky6FDimYDNP5zZNXBJ8ktEhGaCwGC4KdMA7nHvPY5zKZenZup",
  "key22": "4VXuJJNZHVcUywhHARBAyB8qGWX56a4XzECrQizzHEmQsxkyjfVprWFHr6p6cm7GonzVkF9PrQGRcAa81A2xAoLr",
  "key23": "5ddYoKa8Pifud858ALJ6tLDNRP7aPiR2saMBrLXHDvGyKsrugwdSr4phQ3nZKRUbWnHjZEk4PyYXJQvSvasq4Zov",
  "key24": "4YToi7WEUqX2Y3pn36fn47nFdinmqvhaiCyg2qdWfTgxzBKFuw8PjFyATHTM5gjCgbnNBjyup3tLu9PEn3vAf8SQ",
  "key25": "2p1Zm8AepDwJdqb6UgzLiUKtXDTfhUPQiCxmsCY1NyxKNUQ1BY7iiEwBq6SbH5oGHoAL4WtodMhErhuRXmwJBaez",
  "key26": "4Aa76mt1UqxjpAsVLfTLQXx9S765XnEwazuhQJ2WxKr3mmKkSUBfU2LS2GtbEpMdLeefJpK3awqXHtR5gtyRsQdq",
  "key27": "4TPAiHN3MFKVKLkow3bPv1uePMfW71Pnen1GYDUkjdD7rfCTrRKHaR6Z4yyaTD1USjbNgVzKu2owa2kiyn1QZ1rd",
  "key28": "q2e4mc5K2soTEthqJpLLXzwdxxKFRDjUzLNvvTBc5Pm3GWfJdVWyKAFtzhRK7pQJoTpvN4aesbZHCrT8A9zNohv",
  "key29": "5A8CM8TmpUgiadvL554zyVQz6YD8JMGwdD1BrTShK8rwTCFuLTYz6hSsaTDdaikAt1W133LfJ6yEeznR5bv6Hzng",
  "key30": "5FFUcveS6EWQks8Nd52qmb6DhSuYZX6HBAHMXpw77aG3XmujacTUi9XR4VuK5VuYsm3TbVb6jKUbaSqrswxSqT9M",
  "key31": "4UmRkUSgLJJMDP7G7Bf9xJ3TztWAVQinRJ7rDLrYuKyy9VHzwWQX3nAdxHQc33EMtcA4LpNCA4XEnzHBHz2ywsgL",
  "key32": "WEqao2pkTLTeH7fUbdoK9vEjf7kjXTyPynM5EvMeGESgduQUntkgqvAGFEcf8gLb54zzytFnaZhZ7W2vmk3c4gk",
  "key33": "4c1kX6caDMwvTMQQx8nrxVgYjpfnRnT3cHWEB9vaNVFacgXbLvU9ZGA3pjMRNspgetUAy6oRv4TLLQq7zLR2cNx2",
  "key34": "2vFr216MgL6azJEJX7rqgYzvHJPwayS68h38dWgYYoYqXvKTXE2drvuBABjqSWfdj3TKGBZoVN9DBLAHgwpymmrz",
  "key35": "2X17hdoUrdgzTxVtMJzXWCEUffWGpa2JP1LTR6ZSFj6ocMxFvi4WkzWMFZQ4CS5tDxJbRNtfkhAtDEFufVyAXMN4",
  "key36": "4HzNGKWCsgnJgCKa1T9GpTNzN2rGeKGCbG6YjAxiEBLhknTAsb1YcCzoLURnWpqQniuWr2kCHpWEeQNhzpxv4hi",
  "key37": "3rWqArBvtvpGHJMhzxAUo5GQHcgYWCYSXSuBcqxWd3bscaKJYVHw9gaCkjcHNdLUGHAcnn3RMSiMsmvBbVtVe8h2",
  "key38": "3rZj9CXyEVHrqZKZV8ZfniVMroKTMdjb1KSBhpimhruT7cNnR5WLHm17N5qi8keUpkLTNKKZpmTsQGuWjMh12vsU",
  "key39": "5ADSYNg3U8Jn5M13vmeRKGiLeiHCrk8jzpSMWhbdf6VXwSQSvaA4iQ3PivkmA648reDvu3L2NEn1543LUTYkqcus",
  "key40": "2aENiZHYyDn18ZqcwecZwMXe4ydDmWjJ52Box2q8rrfbxyYk9Gwt4XExxr382eAM2kTADv8RjhzFyoCYoN6Krhfh",
  "key41": "3EiFjJLRT1tJejSbNXJ7PwhXfQ32pAR4ynQWzA2C4U3aALcWiLozJ6Du6g3A4zhK5puwCZ7UZV5zk1XiQYatfrho",
  "key42": "3bhNHHWkCZgpqGPrttGAWLJFkKqnh2VXQqbsanQKJa42tnNfph6Jvou2T1iM6XXr9YDJSN2udLiQCPgJRXywbMiN",
  "key43": "5ioys9SpKyaXaFTLffRWTR1XwrG3JHGZtwJ2zzhNLgxYwneWztxwCGiut8SHxkmRLGGb4d89imkHerhHtrKJtLLN",
  "key44": "3NuAApMZvoo52Rr83FoEvBbdjvWGE8PgQRDa82iGpjiMgKjpB4E2SJsdrU7BvnjbyBfC2LRNJD7ubXBL7uktZKf7",
  "key45": "3KM7FnD2Hd5Zwkqc3aC43zYjTyyPxCwp6C5xgiN5rshhR4h2RE2hmQSc8Vu7Xgza5z7pNNYRVDJjjLiKQu1qyo6u",
  "key46": "5wgfBzviCqB8YidrSEaS72mBczZ8F4NqFiF7EUvCWN3PELoV7tmSkYnSASHr4QMb2r22vCsTuDZYiuzKAJj7AW24",
  "key47": "4MkhJnQhzNSwqHtbcyFvcP6EPZK2J52QtJouSooub9wp7sL9mkMdCZn6SzCDHHHfgftkCfZyRnWenCA7ePeYJNqX",
  "key48": "zsNndir2ZdQ2EwZ2k6MMgEqSDRy8Aa1HxGYqBvVKHuhcoxj9QKMmyZ3ULdvsDQZ3UKzBa9p9FicBwEDY8kLETZf",
  "key49": "2t41FYDUHFGz7PH9WbFRTiFZ2AQqtGkCRfKeZC7N4LXyvoBSSgTxA7uVkQB9LhoRUwDVBBHsi8wNFuLgGVyErq37"
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
