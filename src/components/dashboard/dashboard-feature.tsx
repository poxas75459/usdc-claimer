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
    "2LajgZrZDbKjQ9JGG9VEDDxPVT4mtVzS6ZaLM1thayqnEs21FispiPSm3W4urCsR53r6PgzkgwYo9jhwYF95XyoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rnj8uQGmsqY9RrkD4qty4YqVFs9NXgJBzK7oSPsdzx3KsEPqTRk4VSwNtHEon5vMYWMGvFzB8QyNttXFyTeTwcV",
  "key1": "3HNVdWWdz2SvxXHY6Fqzc8rFc98gkehPr2rCL9QCmE725o8ipwHb8PvQ8WEPXQvnvgtHEac85rYxhq4JPbBvAAPe",
  "key2": "LLsD5UNvtXJMLtK3sVgCQv3UJbk4r3CChU2guMPMdRo5ycZNRMT44YZ3dQzVCo9ESBjRTGAncLvM6ZtxXGEc5ys",
  "key3": "4ioVZMpU2233DrEZYq8Ahv1HaxmmZXraH4hS7VuGXMYpQYqGY4Pwv82aH2MqNJUG6xpG9diHVYuxeuUC5VXsySY1",
  "key4": "52Deu8A3okpe9oei9N232rWMTUxaiBz5R9UzZMLMYaGzyuVwpmXMmcpXPEH2TN2okZeN1CHsUufMzngFTYib1scr",
  "key5": "5FmFSH7XWoFfanzWaoHtWPTY95HQNseR8eXEwBibaTKGJHN8c5bE9DNdVpvyVFWFFLXi8Dm7rgVAvuqfWXLnY69z",
  "key6": "2BfeznP3K8xD3WDztArVnghj3pbnTaoz4TadGMk7P44dXrSSc9EV1BJV6DvpAad4po5L8fSuf4sSiFs6SpZt45MS",
  "key7": "4o6g8nzUFXrwSs3Hb3s4ziKfqWnMaYK2Weea4HnhQVCUzvXk2czYmk7b2nmYs9UAnTZtdqC2QeqPjq24Ccf5o8b6",
  "key8": "4pTFHfpFJNF2j84CaEXmS3cFhSiV9aMQDHB94WcxLV32XGCBvuxyzJuCtx51zCBYSm8H4JqJ8S43xpdWR3RVAiUn",
  "key9": "3patCcbsooR77dMWDY3hSKpUe6nJdXUnWhCd5KxotkL5exh6PybcvzYEgu5R9sofhaYkBHhtg1oxsV1M7q35MY8S",
  "key10": "4wR28MUsmdnwRwZWEUbQtGuiXxx5tJMF6utP6HNVV6eKbyeLqvbTrYQ7LMSDjqdng2tMPyauq28zpmbuVhqv5zQK",
  "key11": "5TSqHRb9vSac9TNx7FBVbupbgauN5bxXpR6hoXMhKvKUnAwn1GcqXAWVMGfUVFGvMP4jo3dZn3y9nQnhmhEpZDmK",
  "key12": "4jV4RBTuLXSmdK1ptp9rxHaW4BpzTc2QdzHAuNywfjv6Txhs9mHEXwiH5bdMhBCvsLBd9umz8QAdzDqffK1PnWa",
  "key13": "3JkhksTZP9KYwmuPLXXu7o4BhhhhHgDdymMoCsrHe9yLD2w6CBhaDVBHCYWoji7xyebHDsSRwXJJ6xuknUaHuKmg",
  "key14": "5nQHJjLndrLms2XqjnRcaZjgwP9afptSqEDU7ZxJWV6NR8Gq6JcuuFSs5gDCvhtKaQz4w6EUgTFeFcrHySM476hJ",
  "key15": "3Ag6YYHVk8fLKUbqRddo8YjoHXSfPfNBwT6A4fJ2nr2uqAiEyJGme7k28n3TerSaKxmiySAaTZmsjRYuJej3S2no",
  "key16": "5cjLGUsCjP8U31UAkqE1L4kHMmVs43mt9bFnNReBNNZ9nMSyd4UfTnQN5RKdtVBdG4tDpVB9gCFGMqGVhLMnJA6u",
  "key17": "63AEcJ54PxaiefBLahncpmt85BX7YpNQdkY4MTQEbUxTkfxbtfp27HYqinqZjMGnQC1nkVkhbjBgob93W8jv5Ni",
  "key18": "4A5DKX3aiqAuLP9dWfZQa6fkEfdFxUFiPaCZWoXhSmQNURdWhxmefpUfoXFmKpaZxcUpGcZoCudpf3hUEdeBvpeA",
  "key19": "4rVwhgUZsL5zSKGyN3eX2G5Z1m3mLtVsYXBxBRM7BH39UJ1QVFaa8yufvgPxj7voJSkRVoajjg9pegYrEoVtT3w9",
  "key20": "28B29rgPWF5Mh2Gcp82ssdJ2megnA1ew5qE8iQCbtHZp3ne4pCgdfMLHTPos3Ym3dbkQ7khBKTugetHv79P6B4C6",
  "key21": "4WKFFTCzzcTrLr9tQmx6NewTRUWrpTWFXb9sGJcdYubuwv9foLNf3yxjdo9VVjauFeKq2vw4DyenmGUYSZoWoa7t",
  "key22": "46EMN5hEkNxheN8UqTUPqyFxSCBsC1LDdQY8gDJhPVQ83h6AaW3Ufbx9E7dQkYPzCmFG1RnkHAYhh56Ng3gztvws",
  "key23": "4g2XRESYSvchApTvDD1Dw1np8LctCDo182aLjiuJJxiRrMw6riPFB8KHWQ8STJs8GrPkbFNSBi4S9vy3wXZFw1xW",
  "key24": "sGiVghBrLsjqRJvZMiUq1s2fMYVue4rMrPEjC6XYSUrfeJU4acaPR4Ef8NYT9Mp2xkpPodbwWfDqdgRfh5N8DUX",
  "key25": "Ce3Rkqhenpnd7XrpzJACGDpDBcYpdf6yZF742X3ytWCkDGLERzPjSBYBi7CwsrzzYHJGohJGGC2kJWBnJ3zq2sy",
  "key26": "4EY8YxjtnCZigQ4jDPwricneJYfs2Bz1HtTjbgLe2KwKYeJPpZegMca6VBQCdez37GVmXL6twGSGKepcAhaLHV4V"
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
