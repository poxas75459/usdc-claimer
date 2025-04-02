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
    "2Ycrvv9or1ojJXpKx1hC46jXjyZotZbEXXfhZbkRHsdsUau6Dv8LKq6wdwuMH5v2gPni6fhWSznmN1SmX58fxuQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3drUAfUB8zbs4n5at1vVFrpP2kUpoyHciuEmXqznWyrDGhxfxiGfYsN6svWQbiEbieS22axvGtkxahxSjgQ2qNAL",
  "key1": "zcLPXcB8FMvaJvVMtJZx2Dx1GZcayoZPA647rAYor27Sr6FV1hzwisH83PgSfCeauxz8MJkdKNy3FR79hDBALRD",
  "key2": "34LM9HMyPsJoDFF4vUnFygCBwApqC7hfR5NvPXvb3He4msvLgbnwoGMCMrmK8QQ3NuPpiNsWn85i2p33fi8Uyukf",
  "key3": "3vnBtdPK6xJNrTG55e5H4J1gWg5jrywVNoqKKNZKxPWJVyewV8FhbPbTNTE5pncEHXi3YE43HrhwPY2tguqSiMgm",
  "key4": "25sCYrpJkJhrBePvVdMTP46y1qQK5Zv9XQDDLSUXozBbADaiAEKPc6iwiJK95Fh3kwi6epoCJm97bMKt8UZMFVv1",
  "key5": "5a4r1nR1H6efjLEcLW8DWPnmFbaL9bDFi3b2sSSEVZEWuaN9o5LnhhZY1SBpv1ES4rwCd4YMdjfrWTNwcnVFwrhA",
  "key6": "2YHKV2cx5eeRNbLe5LA8uiz4HudotfRmqEweDGdDnbnRCj54HvZw4Z7hyGnNDAMkCN8y6K3p5u5dquFmfZdwVqpm",
  "key7": "4pfCTQWHzuPkTB478Z18rpNSSHZZ5LJFZMbFScCSwh2Wt5vCRdJDTH5GA7TuJndoeZzh9X3cXs1RybyvPZbGu7Li",
  "key8": "57Zf2gSWD29zrpzygg9J3bLgD5iRFZ1jkzSyrQRYVwVoqNLz1pkMAYJ7p8wKegk4tc6Wei3eFVkAPNH47zsxYnw3",
  "key9": "43GKvX5Y8NY4G7Q1ASgnGvkSoRmiMwSzWDeMF7iRAQHwiS2Tg8CKGwGY7PEpd8n2x2mqs7yrJ7dvqe3SiW6Gn2Ay",
  "key10": "Zi5kvcKuhrtYHQWdqKb8ynCSrJ15UXVNmvyWRQjstDJVXQTnLgzsRf2wTk2pibLvE6CcfNoCcS8k18A2Jv7YLkY",
  "key11": "4oqUgWtLpjSmsxPPK67UtNjt4sZAd6UWEvpSjhnvJUNbaKT6fntJez3JZ47NTou5eA9tmrSj3Z4AqbLuTPPXF12c",
  "key12": "3AHdrT1eqX8Y3su58afPLAkQJDKzeMeGRiQ5LiAKGfHFkotRUuGJUUm9wuqXKvR8yytx9W6DtpLukmV6aYK1Xtpj",
  "key13": "2MCgiG55h9ATNKJsudsBfpV7Mq7AyXia4V7fMJwZyhNErZ4xTDsbENxF6H1F6TK31wcicf8VAPLFphBmUsnDMHpJ",
  "key14": "3vfzDTm9Rmg8UgBEBTbFGj89vacG27Mmfd5jqEBQpyuBLSS8hCNhrWAgrJTgk9zJW1N7YMX94WtaGSdbjjSW2NAt",
  "key15": "5CVwqAgAGxj8sQC7kBhM93J3MHvrJUEJUnHfNN4Zu79LcPz4jq4GVGr4yJEB94LrVLSUKYS62DwoJLyc2v4twDby",
  "key16": "2AuPeFt66RWHCoJbx5w9QyKMdpeBLknxPn7wbcKhRSfadsY8tx7tC6tc95TvZKpsJgZ52pxXoW2depcCQkpTV7Y3",
  "key17": "4fug9UbEvWrwAykiyqhwxPu8SoBgE3hzeyBwkDrmbMTvP5gKDrUzsntvTo5NZBLTgG13Vf9VZKjaFJAjXnWXnDd9",
  "key18": "n43b8eun8CHvmnwwpUKXM1cScaDo3fFX1FM5PgqqSNLt3aEBQy26LSmf2owZxyKDhpvVKhsdCAoBc1WWdbCxiNr",
  "key19": "2ng3HHU1MfPs9jJTGAJto276HpGGJfcqjaNx59qrCbPqQGSRXP27JzN3NEhCngFTSxah5wxxsKs1RwyHa9C37FY1",
  "key20": "nQreu62cNsiLG5RrbzmqxyYmX9DJwNzWQBafi6aVEGaSeoBBd7G6LCWSq9SqHjyp5sukBzMgtTRTGGQzZyeDTMw",
  "key21": "59kK2QEF1ZFh7MhNpsbdnyaaTJXBNdiVHQ9dR8Nq4BuVHFTvGKZ5EhzDA3WETmbsS3dSMF3wPggo1oRyaSbjpwcq",
  "key22": "6245Z2gL1fm5ZsYGa1wLmsn2gqov2mrfZDUvT5bzxnQRBHYhgmGFaWKqG52wsgwR7VzggtefjAcLJmbzkxtHHZ3Z",
  "key23": "4A7LtwrtLEVQCWkKDxiMKohrChfabPUUQxF1RWJNGtPt9byMExExohpsbkTHSSrjnsYB12wP4sURFMpqiMdirPrR",
  "key24": "2BPwhMeEVna6DywqCNHHHui4KrbeEQLDbV9o57w91kpfSLG2WDB6VaWbU9G6hYjhrr91UZ2ciiN8mvT4PbnttCGz",
  "key25": "5AcewwmEmbamtrEu9puc52kS2pPw8eCkdQdcwsD7N85HYQURBuzpPQ9RceBD6n6jSebSoYNcz2JKw8dC4fVWi1Sk",
  "key26": "5o2QoU7XXWXQsjLv4WtH4QhEPF7ZFBVnSa2AzG65CYcc5WXNkAcvKsbRcXibchY6a3FS1wbsLLNH6mh1Ya5xtmMg",
  "key27": "ATwCmTVCWCnXMwd7eju3SSGGbu9WVYAFMdbpUWi6M9yCXWeUnS3BwtQcwHwqZGbexwwuCwUx2PipbuqbCuo2wqQ",
  "key28": "Jy1oJWJPyMWmNSLDbj1mxq8q5CD967wawFTbzLDkz5EM3umEv3EjJCi7KE4VSnViLCX8nPEq72X2ccTdJqxvn4i",
  "key29": "3DoE7MXAgUx2H7Y2CsuaCuqGCEkL3vCtPyxC67tFBhFXkGhhi6oVmV4x44AHUGY21orgzrho6Y57WqCqtTpHb83T",
  "key30": "3VxEktHmm1vKpfxeV9CfqxRYYyUYeYK1k9hikhvtXTicGdFAoFmt7tH4FVztEeU8S14xapLsesbchLdjXZVbV43p"
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
