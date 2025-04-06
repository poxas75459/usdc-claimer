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
    "wd2yAGmmaQh2x5rKMiGyZyAsd2UfVzHAHABxR9aB3HRtgLkDJKqqNCSK1u8uh4FMBnwuzXjHh9ZxrHJC6vET3sN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cAeiBPAsLoZzViBze57tof11sVajWkQ5ZEg3EZYUGaPXQPRHxDbLzyNHDxZTwBeK5XLPtmKRHuAWMvReWejzSSF",
  "key1": "3VNkYdZbyaWDo7C3T2ZCq2Bpvp1yfRAXUntNoZSoa6dSVh3o3GJjbK3f3UnkQ7RTkR43yn48NsvH7ki6mMUbWPyX",
  "key2": "5WUVCTXaK1zPaBuiYtUiJH66XsVBnnBu5xTCqVzPPq9xwoFmfJJJqbiKW9bzxDTtDWh3HygrDEJv8WcETFv5wLA9",
  "key3": "64hqPJSLFryiAAAqNGnbHBTnupvRoRPHDYLWXRS7ZLXuxHRNRHrkH9HXJ4PZDGn1bx9uz35UZobSWzXHwaUysjV8",
  "key4": "nuuBQWMTEHRTsf5YiCTAfkjF11Tgf3rfj9QgjY9Dsyka1xHXyfHjDqTyYsZUFjxRiRrpAjR39Dz9ytGKgWtWUjz",
  "key5": "wQr4ktKNKsm7nigwDLPJXtAwoH48EBKjJPGJB4n9MbnS4DqXztxCmNdsoESakvhTuFZXaN6cRYg3mwonBi4DkaR",
  "key6": "23Ta8ytn6adPmdu5qVM13rNX6776beZyPyCWCxxVsUzj4NdMJuXAkFeAjCU2Gp7TrAnSMyqm47Rkou4wY7rLNzEZ",
  "key7": "41tDHjmjz91jD9kHFaW4NLkR1TU1kKMJTSinRRyV7Jp8BmmUvUK5p5RjAkS6didNTmpxNTg5GdaEPSHoauoqqqvo",
  "key8": "5mBcdtsDc7g8T6RkdUBdKja678yd5KCyiaiBtYoAqfc6dkSESqJ8brYNE148s7NTuch1Dm2AXv2s9ucbv46tsxjQ",
  "key9": "2hzNtA3sh7Gb1AKtx9U7BueCDS8zT89HSKiRVZfsiRrvvVme6vZCrQyLMZQSVWLh6V6QXZJ6wrHqQkXtTaws2A9m",
  "key10": "59FXPJYmAuQd1LbZRfKy4c31SaVVGWkoMeQ9vwkLpNBep1RQ91FJuoHLL5wduTajSjNLdcn5hwvWurgJE3fHULZ2",
  "key11": "X3eSGSwB5esWsxsNjiLp5mQaRpnf7K6d5HA6k1RYDrus3Sjxi2jdH947J4QSWMxY6858rXgC4dhyZoAPUcTzbmg",
  "key12": "aXmUncJH7dBcEL6fCdhjhvkt5wQzpsYm2yWXwRfHv9f4BTmZ3QBLdjvSzrF8s7NiwKTex7H91UUexk22wdWPHFk",
  "key13": "3cDn1tcFoB4eWhQxT2Xhj3Mx5fDZNsam3C691bS2FvEdp9wM9eSUexonoB4Q6z9WL5dbMVu9nf1z3p3W9ELvKw4m",
  "key14": "3qLC4UpJqLXTDHFDEosCMyaUKrG537p8MmDeTo8SAzJqrNvyCUpRPZq6qcJa1zfpjpJ4vf9jKEr1accy5zwa5oR7",
  "key15": "3MqdFL7sWHs8pjPhnK6u4FgwBBeXrKjTm74YQXjVwtLpnbhhE8q4SA3uQWEmSiZmMWxQgHvbfQoCKhbrYGZC4uLs",
  "key16": "5GXdY8eSum6n3rTYq7Ge53oxjXFSinKfEnyANDMdtSNUt5gQ12o654xTYCcNTXkn89wCs2gcJ7tQYDzL4F2DRfGq",
  "key17": "5xjYKLZMs5LHSw8GXYwtZtPUHrea3H4ibMRNshegCiYn5k69NUJoYrFnS7aNLanXekdCGD8STf8U5CPkJmw79nL7",
  "key18": "kZzFq2enHu5y5edWL7moGNqGKtxL2F7cyiBBNqW9AwdsFGt94ydz87UwVSFtQW36y1xZUZMbBnoSiomH5xZ4is1",
  "key19": "4rxD3rxgegmh2FiPZGKx1rqTNC8tVumVfwTe77QeP7PdtogSkd69uzKBFFmLGsfXacpadMiJgxJbYKhopfHHKFC",
  "key20": "239xaqJGW9wTt6odWQELVGFRuCnP3bk6NjUfpdo2mpu5hJv2Q5PDL9VbvxCMQQUQqhJJAF27nVfvWxgteQJZMHi1",
  "key21": "2LwSbHF3eyVUwGi781c3nT1CXnSGyufrJSP2zdubSvzWzs7w6A5UYzfzvhrrrLamNgojxWPjWULCu93U41mL4zoN",
  "key22": "2oTFC1UzTmJRNfhBopo9JWmPDgY7oNrnxuJD81rbsjE9btuSEGDdSWNsF87K9dVyeeBvjDy8iy1Yvi8b29qUuijC",
  "key23": "2CEBay2tjH7UYGFqc3AuDDxNWfAKRWW1STT6QNMZrHmuicX8q3rts6cdxC3j2NrdnLEEvdqDvhprd63FFDfGCmU7",
  "key24": "LMj6hV4Y95L58pcKhXc4bc4UZJr8tu1fEmuxc8h3Vn5eNh3Hh3n81hZNgFZ6HTRvLjq93tcVbGtJAKW5TCVaKzY",
  "key25": "32LW3Hwkdfp1xp89FGuiraRNZPLHDWcfrK98LxY8uCDX1VpzhfjQQ1ckpVewyNSRJY2GxbLs2ihucmG4qcyjvf4u",
  "key26": "4BnupQ8ND2YpavKkWxDfDyd3p9PBkXxVBCuRpv9aJWRf6kKDLSxX7PB1x4hGDy5QDaxCtoBABQYSrEuJtwrXgYTq",
  "key27": "5D8aKupDdAbnNQzx4Zcr373RisyCFkMixnyEQNq6WYCWF22xqUFfozDXJ9FGirgJkdZqZ5MuHw1rSKycc9PPzJDG",
  "key28": "Rx1FyF1AcAcoKXDYv6Nvi3XFWcHKNRUmp8omKVxmzb66mvkM1EtFo8ioRFRJDnsRGQrosEyJ7C1GYbz2BbxL93i",
  "key29": "4fz6e4XZNSHKjMPVX455KtBrhAc5qGGZj1ngXWwCsuCmDWe6vDZH1J2abeGjq35iEKz6eUwj1UboPLXPf4R8QGaX",
  "key30": "4F9a5ShcRoGExUQHv1djrtMy8tGgFDAemBxa47x6YouwJsKkB4Pczoo21CpW877UMDpmGzuPqGy9aFBoCyydjsm4",
  "key31": "2Fe917KSfdWN7U4CKqacfmr9EtDrjAZpkLnHFfavcgKE46zenVGWifzkTQteUd9Wq6wZnyXNFPLPufEszA7QdoCz"
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
