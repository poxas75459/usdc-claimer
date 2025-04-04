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
    "5uMywoTU1QDe75jiJKRh2EAWXwCQRRPh1qVCWtbcdRssP4WuAB8cYKWrwjanVMYo6NRrFqikVzCV9jVw2GnjRLcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hMJrufzmm7WdvtYrXBuSJrhfhU5twLxQi67W672CHGRU22372qp8eHBnqHUUBLF5vcVBm2TepRtP9KxFdzPq8gK",
  "key1": "Vsc3TjPqyJvvzL8TPPU2rBbd8RtL41VUm8mJXFPJS14mHXmWWoABt8u6MbxDmPeeHuSKSSiHD2Wxnjc7KdaGYJY",
  "key2": "2WkuGmZp2rcmkC437khxSkkHuzH4kBWQLVUqnzcBzdsZmzUymEgsMV7DacS4AMyujGDR3DWXGAXgok44UzswRapb",
  "key3": "2XAEJnQyQk1ZKz3vQbqY7Jf9juxj2buye9MYsUwQj45Ni1hcs69XEksL99WypcWae1qdzaQxTwtP9uURw3zj8fqj",
  "key4": "4b3a5goqxFfvkmK8X7akg8M1wrsaVRepFNazE6QiTCnJZwMMXPFYzNskYp2z82fD3xqbYNMqsJwRCt1mbmQyvKhY",
  "key5": "3UGRGRW6CHxVUR6nTRjoqU5sBFaKbuJSjVpMvcCWL1AENaEKyV7tjjeqGXF1gzPHR8WnaqrtryzbQDAtx6tHiQnE",
  "key6": "3mxKHyWYqHvtZnY1DeE1EXnPQNiyWuM8jbBKj2LUsHxTQWao8LwQaKntBmFpECfkQ6KoHELEU8jm741LDM8DuXTh",
  "key7": "52iWtkjpRxwgF5kub3HPToHjqPbdnavX6a6VFxHzQW25QKWovG68mPWbhJkW99MixULQNjFm5inU6GvBz5wZDgsx",
  "key8": "11A7oXS7mSDud9VjMF5QLc9jEdE1Rc2kcpmyEdR4KxW8Vy3TNYjQYPWzD2WJGWMc1tjP1XsFVNu31wyeUueSaZP",
  "key9": "4X8dgK8vmjzEfpy2BNwa4tm5dAtmHDgsmWAuGpABBFtsR9ibdTkdCcTWedT3KnTMY4RffjAM5c6jAyxqbErd2aJH",
  "key10": "gg6xDFQSnJSzM2ge51g7iQYwdyoof7KjuQp3MK6ED2RVnVz7HoxE7fu4LbCLJqeRMm9EwQ3VXPn9JHpjEsK6vsL",
  "key11": "5a79tGFiKBEyDKQnu1z6GtA93z7fLeDjyXbEccM5BtJao8uuM1EAszBKBtosPkg7ZoDPopYzkYahypDEtA4Giv4L",
  "key12": "4iRL9qknurQeogEhgcpTebc5fTMn95rXT9K5apdska5sYKSBNgihJtsuTrpkEvYhDJtaZtA7cxA6XyBVztvFeBDS",
  "key13": "5vpALTaWzHaTSVcgssuZALc69dCgxhaZdRCsf3B2YPN3EktvcaKdjbGt4bM51UodWH2SVfLzAzJU2KwhwpzafBTc",
  "key14": "2ZRWKH9baVjGwfDsTR7rjCGnWNedvBoJBafZuryByrztN7fPytFLeR3PvzaZiRMmAacLDtVRwRpuft4HVZm4F87t",
  "key15": "tuu23WtVVERrPrAbGhbGr1EZujd5LnTB8tVmeRy91PCxDK4bauYpjSPBgF5pdnUKn17oWrqVsWo9djQfUy8yykm",
  "key16": "65G6urSdibmxV9WQaeW58JhgcwcZVHiXHHuguW8fyZcgGEXBYgTQAF6eGFQbjafvGpDjdTQ6k2ZhFoZVmUW27V7j",
  "key17": "caE4AuLKboZZZFAXsonDtTE8WAW4kpR36dygaQtiiaizcJhXajPpPdL1d2fckKcRnjJwVmAfeQRKA3KYSSKev11",
  "key18": "4HfFvazPbxL5DBiiYYkP8rB24Lri3ZNukWmnfQ61egQaxYib26XtfoShj9tna38wELg2aMDZbL2FDkxJHCGJmh49",
  "key19": "8dwSTnpnGEe6QWzDWDQNGHGqjSdrvaTgGoWWZzCvMiRV1mSV9MgcXatUwfcwV8CUqismjvj7U2dJLsHiCPrCuE9",
  "key20": "2UnvX6dDZjH6mZAu5evZyuBZ6oBPR621kii6dKKqLq9uHWokBVw3JXmjv8rsf1iRPXQEk97v68rj2mhcebzXpcFq",
  "key21": "LqhATixUgzq8KUxS3y2Rh5XwwdYG3k1MG9ZEvox71XzepDRVFRDpZ6RPVj9QHZA64Gt3QSpZoHqjzLJCZxcwhvW",
  "key22": "xjzvi97KFBLFchArTasmoiJvSyXS4igmm9DwgAsvMSjjsTzge65UPHv9okAZQdTPZY3Ervt7wnHPRJSJf59bCkr",
  "key23": "jrKxvV2uojH1uiFUVveE5JdeQoUEgHfPVkwrMaJEYsJ9ibHmktfq5T8y7so63jgsfCY1g3sjdJ77Sn5dnUTmHtz",
  "key24": "2mxytCQ8dHnB4gdua9yuqKdaqAVE7oPME6w2bG92gPGcKe2nvYhUzPUhNvUo8HgY5Jf21zmMTkSLfrbXXuWUFAzB",
  "key25": "4kGCb9s75KxC4svqvQTdku29EZHpmmc117c7oCmyzndvzhteSUXpUSjvGLBuc34Zpze84mwCv1RvZMk5rCWpk4r5",
  "key26": "2L93z3hmrCwgH7ZUinyvRmBTpPqEdac4BYdUcT4PikVZvfen1LUiaubyUhw7961T8Bb3EkuuAWjkRQvJY9ceprBV",
  "key27": "3S3xJW8Pq1WHdSb1EcXzcddXiaHkKvLzWRFWZ3RS3xi7fU9xF9SVABKewTRJvHF1NkXxjdLSDpiYWmBPfiuY27Qx",
  "key28": "3NFVFdtY8UtWLSYxUyaTjDF2JRwg6kwmEyKG7k5Ueq1UQM1VBkdkPPTTrQ9vY4CuVgNa5YZgCvSoa9HHkfqryDJb",
  "key29": "4GHkPzSgXjHrqMeX3NT4W8Vwm2YXt9ZUmcjPTpc3GvCvNwvgXTuRnoRC9TU8VniEQoENyqN9VHsp4E6p51N9Mvhd",
  "key30": "4hesAatto2VZnPz7KAFhwUSxrMF5ZNtUGKxyw4TKueREzEk9iBpcYcCVhwChntDBvK2HVkUqjw5eQhxof33JRLnZ",
  "key31": "4uFKK21sBV6kHr63WTUPABvc8eDTHGUmaiLNoBC3mmfEzV6CHtNDbGSxJ43HmDTjL8FiB6iBAEBxoLdcnAyprjvQ",
  "key32": "4Kou2bnidP6qskzRRmc3sALcFfHvsyu7sH6fB7jhNFmyNiUQ7rLrspdxwgnH8T9g5Meg5AD3q3d25fmrAjvfnQU9",
  "key33": "4Sqov52QMJuYKFKYXNczf6g1CcgL5tgGcw7ZxT76wKMJSYnD6wYF3jtAGq8fRA6uofJaz7hGQjmpp4QtcubsJrZ",
  "key34": "Npeo7fgUB4EUktaXTcmcRqcDNnuCRthELHHeDhL4Xe1fRtmJ3xv23HuN4WSL2FUidrzZ7cUTwvxRBwx7ayc4SuJ",
  "key35": "5LeXA4bCqeqisPEBGbcsCgHWZrhPQDsLQJ6nNP3dhUfa2SdA2F3AqLDCpoPSW2p192qaqLRBRhbLVSu21cWbukQq",
  "key36": "3C7B1zxBFHx5jaSL76kkMQJWCsDUedcrJaggkNsq4fR8d5nW9ZUSkoYkpg9WMaC9gAEDf6JAWKd4RkoWWV2Beke5",
  "key37": "3aA6T7U5uTDEaBt2e8fgMGNzFSZJBN3VfUuyPNyKcTfzAPhU1uiSatWPgF8NGooQ7ZUEMzTyudaBtvWdjJAhvLb9",
  "key38": "5ZjcThCWsyVak2GpXzP6Lx4jMVxS2xK7v6NiEm11ud1ipHshafkqYZ1m7PPGpznBSKfHjyoQcPgwgwC4RgJXavnF"
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
