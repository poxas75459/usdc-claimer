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
    "3RMCvRjn6uf4Csg5ob2faYjrxyHoZPjEGNx1LxqWTqXmg86xiU3a9TroLamY6r5zBhV1CpkqiHapWLroj2Ev8Hbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cgdje7jWgyr132oQ3edAyyDXwwb5L7sgdntUzfDpARCcGjiEvF5a49EjVbzdgMgA7m5G6SRsRMhPbRh3ev1mbik",
  "key1": "4hZRZtZX72b7BoMYhkcMPDa3bt4VG2qvq1cMAsXbHxjFkyTnFw61fBvHpm1QXBwRxW144XAUJmNoHuddEiQkpDL2",
  "key2": "5wovtBs3QiWxpLwJq72UxDnPS26sfuMHv7g2kkcUREvY6wVuKSLcPJdwT4YWE8RHJp7TgWKTM5raoQ2LGqRxjVGv",
  "key3": "2ZyyQXxZ2fUt63hTAxwZWgLVwVEuQJsm4kiEbQWwP2ZFAakJtTPJR4gmVvXwgwcah3cPiT9w2YvwojTkyDgcCTey",
  "key4": "2FpDMEc1AzvsekFp2foQoMDwsVGNVwizXnEbTQiR3SrvgNedTrom3ZUx3nqPQ4pCvx7SZQfH45ipb2BgzzSPMQGk",
  "key5": "kgx9feUMuqsPTunSsWuekKbW7hb8bsajUMwBg91vrCTehvPHbKpaZXB89hPx1iTbmpGbYe4GLPzts5y9fTDropf",
  "key6": "2fLMsEYcxY79LWaekuSrUWtG3wrdAaUqttAyThh95r1TSkqWCGUi8YaXzBXS9iRUUm7PLrmcmn5K3yatPUEBVfxh",
  "key7": "cPyzvzDP7X1WrX97pvvCHx4yPioBujnnuT4HQnSAEZ88mCyR1LQ8MGAiC5DovUXLjZRCoygXjw2PH4m86haMSME",
  "key8": "hUaUmjmEbCByuLXhimw3CVKVDPPMk2wYgoBi7KKx8nYNAEMefjAVf4JupKd73UycDdRcA6QkfnaJei8LBYUzedQ",
  "key9": "5tbfqdMMkbQ5KpFSg33fQfUUR4igZzAvfNsHzjahn6Y6gywtM9Gnj2HFmVwLfYxhD2EixHwV1agnuRf7H9Siy3Xy",
  "key10": "EWCWyTRgy8WceQeSdmBF8cDzMZvQB4oea1HNyRsFutG3nk6vd5DyPZkBKFS7BmAcev6V7m19vDJ5xzCFJUCXebj",
  "key11": "4nTwXVHSoQxfKrLzhUpdLhks37TEG5rUchdDEpdk4uYRyzDtWC3qYbA548q4C5pvuAcPzRCeEQyCFmUBQCYJUkv",
  "key12": "4jyTcwCK2Q3CzW5ZSoMbtvrBtYnnnxEKSy84RDMy7gkfAMShHeTxo3jYPpFZ4QvbTmRr5X9BJKnYd4iqKv9oRK62",
  "key13": "4K8CwwUT1zu1DGwwhD7pNGxiyZQoTXCvQMwvbfKaV2ptEtbzvMG4JBCN8Fj3yZaabHBsN4XzKbXRmmUa7aNH99Eb",
  "key14": "38ADDR25uSVc3KscevHVrrv6QsMX67XTFwp41E2GFSpoU1G88EnexuA3YgfyJUWMD8bPWPX714fBWFvfhUsiysoN",
  "key15": "xvZ4HSAG9iSXY2v1a2NoaTMZFXZumKpzjWfA4oqNAuPQ6DJ2nrtb473KUdshK9mcCbPNEN3pJ5H6Jntk4bsczPR",
  "key16": "9niY57Vw4wNuD3gZqDKrrq4trx92wAt88W4dEKuGVosinEF5PceYBxQrN3XHF7Etg4HptTTSnEt7VTdbCezhVtv",
  "key17": "5DWcf3ehD7MF2misGcssHS6XfTHdCkgZv9dcpZtaL7iQGsgfRs9vyLnDWNVK26fpM6hZLtMgsXsAqwt47ii5rrst",
  "key18": "gsguMMt3Fp2FvjuusRPiDmtMSXjsvo8vTKggzjwBbm8G8q3aojcJ5wwpm4HT2ZXEhUhsPCK52FHKho64YiginPU",
  "key19": "5uNJ5ZZa4GGP4XiGpoKDmSsAu6hMCum9iBvjhmasSuN4JTiGPawYbd2TQxgRthj6Jmtb9n1SLfYvMEZUfRqEgkLn",
  "key20": "h6oeF6uUzwmEYHB6ij3c3rxD5TUop25bMoiwoTatKp8WJspDMS8g3HGvov7SyARQm3VQzAx4aMXmDtcd3dAmhHg",
  "key21": "52NpWwMnEToaJmEWM9j7ZzJqNLz7sPH3sPeu9Z4g5QLu9iMxZKBbGuUrZoT5hUBL99MBpUWyhwcF6kDCAnxP8cz9",
  "key22": "2ejaQVgYdw8LeF5M4eEShMnZdpaBvhzMgZGnkbjtRz2xtwFpjL4MYu3qn3iuYTZFhSDe9uxRxkBy1UDF192hhr2H",
  "key23": "2Ea3BNje6c6Vo2g9KsPhom2zcVzVdNwRkJ4L1pthnBJZUr8Rx5XUjBiFtXX4P7jE2bhsc4BADgZqYFNqgLfmRAKU",
  "key24": "3fmVmLH4F4SECpbmW6ST14sEL2z5CwZbZBqukgDcnzESKApAJiRH9VM2R4f8kRfy9ZKaUACj9h3Lq2Ny13MeiCcF",
  "key25": "LLm9rrwyGKZCNWZs1QTkRPdd5KWf5GfEDufESxWEowLmMWq4s5isdMMSfkmot5bhnHBX6WHcbBF3soK9CEoHWJ8",
  "key26": "4RjGZT3T6AmfZ5rwGjVVsNqpDG8JjjFuxa2L9Ya7uNugi1SmJdrWfF3RsKJEvFKXt4VEbbLVwaWaxkuFw6k3BfyU",
  "key27": "3XqRDeah1QAL6nxGggS9QwvHyLwT1eWiNPvuAWMz5Hsu8QNYXM3xCLS5Vd7KiHMwiLCNmWaYjwj1hgYtado4RfPL",
  "key28": "sKp8r6SjdkrBE52nwwvn39LfT3veUT1j2XYwFt1BQ59LSKsCTtSeQ17zbNqRhLiTq1XvcH7vcbFSq8AFNftSD95",
  "key29": "5iarajpNJ6biaWf99UHyL3gfSg3bJxsKgipuzT9ReDBD4fcgqWwfGBLSmG1qnMVZpebDJMnJKeuDLKy5rJmAZ8LM",
  "key30": "LkHro76CtF1zk5sZqmZeeGkfcuwUbKsNNngcENQyu8fUU1EBHEiSp2Aa3UPdMeLdcfJZwtvdsKDQKyaYstr2ZsM"
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
