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
    "3HoHjx3ikSbHisB4iEPBvzzhT3jJHdXNxyfBbAr9U4qo2nxWkWt8q1gHv4ciXdEfnkc5vUVvmnZc6YrXFvPs8QfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eegAXeoLmwsavYb4c1dKPN6S2qvowibwfh7suaVe9NxMiUSAMEeowc6vQPMwQAazfV7Z2arGoYTNzBx9fBbmAov",
  "key1": "4zvTovBCK5NF6sAFkZFYFfRyhtqdPxdq1Zrsch8H6tn3FZajnTsSkx53QcL4iwVxPuVJ212dWRWK2Mj5Ag7MkT18",
  "key2": "4abhNe1fB1JHvomgGTCwB9Xm8E9TuarYvavKEX3gHQusrmxAQhcBeNxHh7KapZKspDRgyy3TJCSQbGwLwTrPkVaz",
  "key3": "34jMKM97dRuzm91cGbar4b18fu9a9UmYKpqYwXxgC9z1motUGSP1yFHNBiteuhwPPh9gxr2Ka3ZCva6nBpe4wiGf",
  "key4": "2a4Ja2HBgy2oy3NFDarBdUuLGrSGobQVztW79QF8VBoiHcYu7haZbPgP5jjLXjbWWuB3vAtATs4BkvioGe83oyU6",
  "key5": "4hyWxtSxS9Ea7FdNqxEKPi2w4pufRoSqj2ZFZWedJiZ263Ji4GwiHzp4HGUYFg5uoTpa3csSbZiM5rysqoVeoGEN",
  "key6": "5S6zgahp9cKaUz5ubMuPUiDtzjfCnBEZUASwQw2ZBaHzHXC8LxMfGAWzA1RyConEzBPczSzQ6WSXEQM9EFGorbZW",
  "key7": "5KpZMbZ1Wq5RhJHXv9v5AP8VXi5nzVbevNKQKrAFhv9NaSpxRtAMjkDyTPBcF4aPB7NTF7P4ozcfaAgpTFYbtgtw",
  "key8": "5akUkrKtjTj729yiXoHjLtaPNeSz4sFqmt92CKguS7mAAzp8wtTtjNaGZ2ARd64SEH8LHqW3CrRSyV7bx7BuCM1R",
  "key9": "2DK2ACN9387NkHHZaGR1Fzf6qKGHzNhxhZHL23ogQmcLPBt5gajqxRJ8PyaigNWGqhyLshVFQB34CJbK9JBMXn7s",
  "key10": "4qcAbpkCgsakT8vMP1cXgPWV8wnGHzFJK6WDKtYgJMAXheXRPDRDNDpy5rLc6wXXgoJv42mAudWcxm1LqNMxw7Z8",
  "key11": "z54eRmqhFekS3oJ1hRLmt5RaF8nDN6U3hbP7cEFkmeBXMouFt1hSoQg1tk5iDaLCFzLRsFpk3E7i5NcjcV62kQa",
  "key12": "28WaoT2dLvXfUWCcMorbXRqhKE5VRcsDExM4YMyiq7S8p42Vw5Ymswo8aXzUY31vt4JBN8WrqASMtn3QJg4uLS4c",
  "key13": "27pkUBHQC9YTR44kYT6kjWutRYanTKNVpNRLyczMCvDkBWo7rmZBjtgTAkB8oVbcVk2aLnU9jcYC1BC1utstgFCp",
  "key14": "5opckKQvXW6YDaZmwmjcSMxG25o22tN29xcF8xkeFMLJgbxwQdrUpdo8RmrL8YpgXzsQccfPtPywT23L7wJxvSX7",
  "key15": "mmvX1s4eUrPfeWATPVuPGr2A6dpbzr3KfPcEmZD2g82vh43WKvBwJc1jGwT5mt78z1t4zfJ9m71Vb1u1ib4RTVA",
  "key16": "379SPvseHGSGWEqo4MWUrmMX8CdMFRG8gXwXvgeQeZhyrMcCnxjSi52nEBZVFLbVgihBCVDLEiRXQ78xNMNYSRvq",
  "key17": "5sBpFgKiRXDXg2fAUgwUBF9vtB6DHNPvfZ4XCDmRW2Hiz6S28xvdHYAqWYjAtmktUsoBei6ZihHoVwSq3LBVZhXU",
  "key18": "2JLoT6vCHwRTbtfaorbwevBLKhcZuAvHztDBcNaMeo6PUhTaUzfpWxvxHosxoqwi6DWNeAE39R4q3VnX4tweuZy4",
  "key19": "4icPg7Fi4RE6Rr2pPuqJhZJmrS8D2HW9jwwTjhPWs4cPXZYPvnaHbvopb7LzbiwH2GuPPU98G7LAXP2h9KNmz1s8",
  "key20": "3hPzo4rZG2J4x8Nqv1YHfRFbK7hhy4EozHXrWwKY4ZiDtoqGAZkr3v45HGgZKBwBt1aDLi82ohdR8W8JeeFNduDJ",
  "key21": "2Jdwj25zsBQf9FUNYiaXPTQUYV5yq5wqtDex25UevBmerhydPQf3vV4sut59EWEjVbJknAJF1sLgJyTbfXweV8UY",
  "key22": "3Z7AJFPiUyFQaukGgyhcuPqX15pnbGhd3WmV4gCouxnqe1MRR1Lp77L54s28T8bFaHmbCefgTUBCA77dCbpBdHva",
  "key23": "29Vdc9yzAk1xX3ETaWsZBSyMVsZk3LLq74MQiGrnZr92Hr3siPx8z6evDfDfHYFZ5y6Ex8FwNny9LoUm8RBMd2C4",
  "key24": "g7XVkQQmFNDkk2beR7yDv3oHRzePSm7WYt1sgBHVFGpw1kn72Fpm9F3CVJR9c2pM1WC8iqsnjMoNQTqLixeJ2D4",
  "key25": "2A2noS45HS2BxxWrngDWyv7xx76JBf698XfacruSHou7gZvTCUSNPpx215RS7V4jowFpct1jG7e8ggoAoBrHxjR6",
  "key26": "8Lh5Xx5gxg4brDS67SPictUx7DP23HSPQVNdMjkR6FmDW62ZMaEweF7DwF77TwLdx8kbnZRivGqUbgvtFSCrcKG",
  "key27": "4EftmnenJ2n5fTZFbgpL5EJXi5u76bvaUXV1H47iaGEY9UGUWT3yQJxny35Cskp2VrZRkXbqUR2XxTVcZY3z5CGb",
  "key28": "MHrQ6owE4tvuXzYCmFUmBASHdgGCLguxzwUSbHctAHTUidPZ3Ea5nxZtmCG9yZBHxQKLh61Z2Uv8BZw4PbgCVG4",
  "key29": "4bMd6cBDpgC3kL5N89Kuzwv4vBXYriuTrZM3nqxPVsp1bf8cTH97k7UYfZ9A4QkKNXg1WM5MEKckPEYNbQwa81vx",
  "key30": "2CY3bFk1fqX58BDkkGwZnZiDTcdbuTaWtyLuxKk6zdM2GZCqURtdfbMzhpgMcvb9Nx1G2tJt1MfyL9Ca5YL5VmAn"
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
