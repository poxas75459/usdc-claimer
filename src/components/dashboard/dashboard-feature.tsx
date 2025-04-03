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
    "25a412iTMHsujNa2gFgF7ucGaT967vbqyoh1MRGRbyoZpfq2fpjwNyvdQrAFiWyPkSVBLbPys1YnvgJUoEgk57sv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WSB4nqwkdqRGdDWEQZaB88VptbFpM5oQeruRcZkCz922PASz2fCF4BFSahLxMnwVhm5poNepnFUDnhMFNqQXSBY",
  "key1": "3TXgUiM5g9KEJY9JWBbZpWdXheAPFcDs2yju4mMkuv5r2gUEt3mTGmji2MTdcmvBsmrq91LuvvDbXpDWSfBfkxLV",
  "key2": "49UCkBujqgqtSAnTuYbJDFkBWfqhxixqCLjW1VgZeSnw9aPWuG8ExhRo4jBodoVbgsSLUCnh9dRzPbizxxvoWvqN",
  "key3": "5NRSLFwYZb1JATwDsqczGqPzszLcFQi4rFPedWQU4WTXhhYriAscKRQyQMn4rrZSPjDS2iwcrmhWj2SLDizDhorE",
  "key4": "5dccQxzaYayVhDgGK2X2T52ry9adYCUgn9R5dNqu1Au9PoWJ2HtNN7QhQW4dLDUBSfTGCWe3Zev1HaG6vgsUhuXF",
  "key5": "YqDckrYrQkbQhAJTPJ5i87acuMTmkeCvzhwTBUK35kp1PRy2kbP3q468SDL8wBjtssFhGF6mMaq1Fmp9C9hYvg7",
  "key6": "42UjRP6edwegi3fhSHoFzvSwHPzFhcrZ1Wp5BzQSHTN5Pe1v1SATHHbFdeZ19L4qriegrC3rYerahabMuk3C7qYf",
  "key7": "2QCMojoeJUNM51PNPBpjtijRADw9eDYcqBHyNnWQoS2PSrLMcDje7VuRJ1Sf1puZCXa9aydCJ9iLrytEdNZBENbJ",
  "key8": "3dZ9V8Q77eG2DTFAmcC3Fi3scAt61hiaW54bmfBZRrmqKJ2QffjecDDVaYy4ieCV9MdRoTCJNHwQxQrjmpQ6P38",
  "key9": "hrur6w7hFMpNZz17tEchJKrpeFcCSPJum2dyMpTxyQL13BrYpxzQy5wnmwcrsCG6yN4fqVT3X1oNfPJPWSkJFFQ",
  "key10": "8t4jgGkfxnbUt7WUSikWLWWpRatAfLA8f9qS68oeoypqWoTuTNoUedvteTRtBkjheghzBSQgUb3XVpidTW3E4i7",
  "key11": "4QMUyTr1LZD135QxnPs8ZaxPSgxBxpPU8DXdNac1z9scpniqnABPoMPc1WM9wcgcgDsMaKE5jdp1sFtrGjQvN8xV",
  "key12": "57J74UseWFMGwEwSSDQSKqFstjVgfg4W53eaWg214LGAvDBdZSQrUjZ4MovbLRnEdiuW3XRnghKzhyBHndSvw3w8",
  "key13": "GXh8N9xs8TM8d4YaUiCbf7RyEypUQJhswp2PQ7f2ZmH5BPTi75b9XnbLKDtMFCobPRJCFpT7tb4YaoKgdNjtcWc",
  "key14": "5HfvZmQjypMp998EFKszBmDo592FZJXV5KEekzpG8FQQmcyNENn3xsY2xoV7k2q217qmNsevw3bPWZU9C3h4Fg2e",
  "key15": "2TsuonXghW9AaAUGEMzBJM8fG7eru271LbhtRi3tAKHw1s2vGtMMG1KT3vS6b9DRCroGKYzZFiP8NMx5kBEcmWN3",
  "key16": "crhdYjdecf6xctYkFNC9EVArfWVuuJpiW7HLMFxjUYijAb1Ny1ydKSwXSgRDHmuY9mywjmd6Cww1Sp7iSdL6Gq2",
  "key17": "5SdGSE79c9P6UR3gVQvGFNmYGohB2uC9WmXAgCMzThDcqMd2kRnNyfjnc9as6zzSCd7SRRmZ2GaJPG1LC578SU2G",
  "key18": "5r6Rz1GTr9JwxEi3fFA6q1GZ8HQBCi5bLKrVMVXnXd7Lg6yN7xADeh3upmcAnV1tM1vnvmej4SyNRb4voByFqSYz",
  "key19": "2ABvkdHb9NNgL7ToA6juM2yZZfAhq2LWaFY2FEUZqiGXCFDSg5WwPm63mDMz8Q3kEjVbdZevq2ZrM4FdUFfGSXLk",
  "key20": "4oEVdSQ8XVUJwdcaHUGt7GnAVb1iuxko3MD4pPSBtVyHT4foBicxvF6HfSxwgNDFTftEZi2HTyJKqTA8FrNUiPRr",
  "key21": "2ehDd6NkAMGCyjHsGG6CNFpgZr4ErE2aveA1xwfWMkP9Gs9DJGRZQbnJ18WLuRy7CXtVLk7iFdVt8cg4cm3qcZ6P",
  "key22": "mnu479MGSUbC91XV5Znu26HDQ3pHFxwd6LKEgHj8p86nG2fdKW8k4zURBLaQb5SaMzAZ8P2uzA8bGQHfWitJsqn",
  "key23": "5iZnviEq8ExW5Zn1D5pG3YMxqWEWYVPBCBtmdbegBCUc6AZahMEnBQ85p1Kgi2Spckpz7Pg5bwqK2rURJWoEpstx",
  "key24": "4THJT3851kt9uW4BBK7yJ38AT1zygALroNN1Nt4xD135LethomKHob6FBnuNjzPbL6ATGFD4fztDBK7zfspAsP6f",
  "key25": "3R45n3QjBvUSfiau62xKv65eoVeZnktYjk8XeQV9h1KCpkCh8qX3dTBci7W3uwiisaaKrmE5yBgQcJBRwRHjsKi3",
  "key26": "5jzAwaznXv7JWbBKNTg3U7TS793JdNsdFxKPoZqGhDp9cJDEUes3akbcQ8hqKtQLSRX8Wgvhm6vTGZKtRpbeonHf",
  "key27": "4A3QhZEP2id5BSrrJrDHWuefgT3jerisqXGdA1bcBF4XsjeYbJX25m9DR5zWKabuPFxvWgWFsmRXjMnZfuVsc8AU",
  "key28": "5bwXrhio7diPKBLAU7tUBCMFDxsmA5LSoUP2KBLcsR5m8cp6ipkMnbHq54jtMWigpiQTwcDoYV5kkNhEYyUfjP91"
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
