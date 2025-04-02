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
    "5nxoUWPPN9NWTdqRX316VhsPyhRxxRmqcGrJf7Rjv6tiFLauu89cqNwCPM9etfpQcpecfyGYNpDYdniwTn52gRxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s8VfHhyL15dbvnbwbajyuFCk5rpyRkyodCWmvL2R29ZuCbJHXLRL3TgXyjok5SdTtF9kBiETEUvni2DRPN9XsAc",
  "key1": "2bHnhDVmy5KYAgRJNLihB7xLdZyakjHYFnTLR3BEGYmHykymi1ApMxrPkWUevSk5EZ9PBUHgzTWuT9kfGZwewKvR",
  "key2": "4EmrTh2DsUKsnHFxVk1rjWgYiKdzmY2vPonebfoDE6riYMcMoN5q285YZe5fBhbkwaLC1N2hQWjgtzkpxrw6oEj8",
  "key3": "3zQHZCYPXteZGw8kjpkZHsPoUhbQ7NzHDz5sx1Z1ZJEojyZJhyid5Cu1BvCSB6nxhipiF74cGrPQZcdYHSpYXYLA",
  "key4": "28aJV6TyBigxZLJReanAf9eGJGNH8LWPkLJBEFesTxPqjjWwtsoSFd8SXGZDCs9kph7xG64UF77ggr9dCh659zVb",
  "key5": "ohiNxSC67p1rw25hJUhJyQhszTQSNAiX47VDhMNEwKqbcWRb8fGsJveYyheWJPXoe7UA73wCjy7Zxm6iSJgnQrY",
  "key6": "4JNHtaQwsJqjss2Dgp7AAHmtk2sMr4SANJZTuCv1SWvTi4P6zBionWaQ7De5AEn7t78tiSKSVN5WKiZP55iEuT6C",
  "key7": "BKY5TCjt6FpM1pUhR46uYN1hsY5GB797Ckkf4NhjkeWF4ZMjUZ9MWSxvEDBXsXVnLRYehr47SRxbbcBm2pBX3DR",
  "key8": "4h1ERXYz2uq8db1BVLKmGRPXy6yEiAotZUF7SJmSPkSQctVdFoN7wrAjqmXbbvWvqXGZz8SA9mLkzDfaZDpiHh1y",
  "key9": "5Dzb4frjrZxC5kjrqwQG2k3Rop3prLPQuwLNmEfmZjPp7eRuCkn1vw7tvvR4Zj9tCLxTdyDGA8h6z63Wu8JmbGRC",
  "key10": "2CkhVNpqGToiK38twYPWZFgE3pH1D3xr595whiSgLfaPptomhLtfMHjzMMtqJkgSoNfT4XjqYQCgRuVrqGU6myxk",
  "key11": "4DrFNZPD6pRWHc21w9ugNCTJfPVBDm441vyJbmv6xtrxwouQYFS2J4Q8S4oeeYML1YES2N6N5o6uoMy6u1LHRZmD",
  "key12": "TQ4Yjoc3hDT1u6TDnYxDTrfoYtN7tvEzaR4QBsxvr5xvSgxLv4WXiDuFuE71Eo2Q2KpERT3eACnRGMRSYfW3u56",
  "key13": "4CZJaDDY2PxtP3JzyB26i1zETZT43C4ZwqiaibPo85jej3T5PTiPz8nHVAfXAhfMk2uDXFoWDbYGkiC47VFtsNGf",
  "key14": "2PhKhDXJEY4K83Z4xBjKizRbWBTsS3YnpkPZbzRR9kcGKTxjPNXNF9wChBp9oqCh439PMme4M5GC8hESWcixkqjU",
  "key15": "3aELyFe8i9foo5bpYyZ9Ck7xy58z5iui7GtBXtdb7XQSibxGQkCKRD7xf9fjJbaorz4bT7E5YGvZtP8nWWitDn5i",
  "key16": "5Cp2nT4crDcMJ7C5xVXW5chSW3cLkUXHmghCvGukPWF9gRUCLYwuV6SCSGYkzWohy789FuJ9aS3JMsRXxiSEtQJZ",
  "key17": "sVfjXHhcQKofjRBCvUT2GGxwKbjHNs53S5JAktFJG5qS3XoTJujGoWxmsAdjvsQHtQwfi99p95yXFMXJcEYZtaw",
  "key18": "3rkLJjTpeNJgBRBY6U9BCd3woub791KUU2F1Lx8h9A9PDDQYxRJAa49NqW3fiAPsBFFqrcMcNyQt9UrbcNatrajR",
  "key19": "2EdnGkJqgTC3rwyrgrJkrVhrsyKvU2ZgQ8zDvaiJQe15QhkCbbgbonCdVV6xmkiVfbMs4oYNpjKCnVhTudyHZ4vx",
  "key20": "s4kPFUWFVoLnfKXmnK8qD7tEQJTZZgYzJdAoekzCpEsrZ5AUenUHTXaJgWT4B5VRa6f1ZqHda6PeCPqoXBLpYUg",
  "key21": "2hGWdqcRrMD94M1LBxb77fyHp2KTyugEswzrcyFphDxfCkbW5XKU2i3HTX1QKb9pHQSyrSGJf7MKZZTUuXPg4Ya8",
  "key22": "619Qwgh4GjZ7EmXD6WCJVpsemq56VAi6kgcZ4Ycfh32yZ1HgaTchuiCEurmxENjdGpZdh62gYmWMsQbSrSsXkCAj",
  "key23": "Qwj5yHzREaDjQYDQJpFoknRQrgH4L9FfATkwq5Yjx4Zjg3xuUnaCQnbBaAC6HxF5b4b8afs7Xah2hodJNY2FkMb",
  "key24": "2schYRTSZH7SpnDTsohr7usvf9MApesZmoMJPygTvTBtAjoPKpiyQRAPhtcvy5wFdrTRQfvW1ShSqqk9NrcLbyiX",
  "key25": "2AcKNkVivD2hrU1Kmw666MBqqeUazTxzYezDqL7ErXNsS2kukwBAx5ppEBU9rjUqFEUbzWWnv1xcpArqEf7ZP113",
  "key26": "4oQakzWvqsff6WWR4WjK8dGuCwWEif4LyqfGahQzMFhpRpV6iqmM9vvYuhjS1eaaxotPNC8d3Xa1yWwEqRAVh4C4",
  "key27": "2SQM6KCZ7sayMRbefUKuAsne6RtmFpyM5tZ5BPBmK4Zh282MxBG1KwiZTq61xqKfPQGGfqcZAaBWwVXEcuiTYgu2",
  "key28": "Ayafb3cXWC1gdbUQrBEd1pu5gwu1Tu3aTSPCtAkuiMktDHdHR4waoKNUFVDWJByYAXaCbRM376qcJv9bpYAuFC6",
  "key29": "3b9LsPe48ymBgx14NoQCP2a8jjErtYJ6EeAaBKBA9qdKsUEfuQTKPAow6c7APBhJA8nzp6KCQZAEDaTGdQhapuyv",
  "key30": "4CET9nXUwdVaNwPSb8mVixkUSiCuRNfaQvsyrbmcqSABbr445umMbuwaZAZaM7ttGw1UyVgwN9eVc2FYF4JnrDv6"
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
