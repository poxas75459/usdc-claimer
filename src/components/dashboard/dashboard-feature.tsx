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
    "7ym7zqiB5tjSyKkMw2TeL5JaqKa8WB1WTzUacbQNPoZZ6tes5RzPGtcjw9ugkNT7cX5qySsSJULz62PDZQtcY7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FzUd29NoBLY6aaUCjNkcx6K1q8bPqXmriZ6ytADLuocEd8uYQBeM5jZwkj97WSNuaDAndNQDweSJLspR7TyP5bg",
  "key1": "5KtmTS6wo2Z6hvCfrx921LDZAGc1WAkNN9PDjms2LX4LxTuhqwFd63a35UWL7tehd2Wsx5j9ZNVZHRzGeVYjZYu8",
  "key2": "fs8s36b6rxcEVGmEiBqj3KWFSGZJnUqwT87yr5BtkFAhme6eaJpmanGYNYEaDkoSsQ12fARRL17H1mG7nrR5xWU",
  "key3": "5xyPpPpQPJEqehvNXcn7Bthmc8ZFwLcAqrZYeMVvUDuYF1CukfXoJ1D2icSQJRU3Ymt3RGdPUUYkrV9QYdo1KE3x",
  "key4": "NR3VGp3vq8cEe3gZhuSaAap6M8x9YLN9stAuiZB4hUPkpMcSKFZp9483RdesyyaXY99se1xKUqnvGaJ6oVmx75h",
  "key5": "4hFfPjNLtjYPNQ3kPAGF6FXqkhvdssro2vQTgkoNGUToYHZ9dbpEop4pWf49quZaQCLgxWB1dZUTgwTK5s3Fdb6P",
  "key6": "4KdDq9guKs5UwAwodnGs4sfD55Si5Se7i4YVsiFcYDim6HxiQHPqjQmJfpZYJgiU2CiEfzxgcbydDoAJxbQCidmf",
  "key7": "2E1Cy3c9QUKU5LkePtrkYQ37rSeBcXg3NkaqUXdEr5UXqX32HoqnDY8r9YGiwVV2g5RZvr2yUFAPJkEU4UfBf9LB",
  "key8": "3DWpSvTAZpTHsBN2ZgRewijq8ALpsQ4KXHmEsUrEpVvz2VncZCw4kqu9yMnrVKfyqwbdFEG7URNtCw1gvqrZ8f5o",
  "key9": "4MArqsvYhpojf7L3uCxZX7DtVGtXkMmq7g471JWtgw6pXHjToB9eajsNJ11BWfu37fq4ozL2ibnBz4Rc7rfa5kUG",
  "key10": "52QxK5UGtoXMhDM1VnW5pB9psRCG2WFWSb3qjRVmZAH8fhCBHPvKKnuR8QembKAYWD2quyhnYCsYKrhgnLLuANjT",
  "key11": "5tgUeTphqiAuMHUy5DoYkhi6QJJs3uUti77LpE3MDRNV8wB3CcQjJuNn8tB9cJcnPJP6sZfxLkNhyzK71BaDQ4Mi",
  "key12": "2P7bbUSG5UDxqA5MXhGpF221Nw49tofxL8DoqDXRWqPq1zhVCss5XwsektFc3WGFqdnVyWL7u1B7X49Q7bfQdU1W",
  "key13": "2syHyAqxaL6qd1hRKRngoeMZUtHFRxb7EFzZ4xeiK5rhnRAsQ7R4tSYeWUMN7MHU7pAUsxAWwyydzcq2JFsPCXBa",
  "key14": "4FLvKKx36353cyBjBBZYxWzTxV3A9nCbRcfQP8jqargeBq76tNcMc8Zro2bzBQiy2HezrfV936ZdZcGW2HKV4VWr",
  "key15": "2iNEsQuMLMDQgncRLRfmkmKRAh8z5EqwF8xBMRa2fu8K8z12ymTjSBaF9anTyKjC79wNUTPXA9MveagSmV8kufsg",
  "key16": "3akTWGpFmHmKK7hJYy4fYC4woagLt3JQUuiL5s79rofiW2MuZNSVsSKMn4f4UbsKP4AtVLK4PVymcdsFMpgNdoyL",
  "key17": "ddqzt3pDLcz1JthoYhUDwfyLBjFNYgJZ4qnJEJ8jQ9fz8BdTsfMfQnf4D9zzG452JJCSESovGwpyP6jnqt2pjGp",
  "key18": "e84YeaAJNL1yFPzxUsoRg2r44sZVEJnFySJniauaKyRYqjpJXGcijAzK1mr1bytSEaSdV5BEAcDU6BWZAVeoF1k",
  "key19": "3t5gEjAaCUkLHtStauRqZ5TeRAfci2eq6TUfJzzoXsuUraT6V3JQvYw3XRGqUgVEadBSHceVjTWhoALurNZCwtui",
  "key20": "3q56aNhvDzQBEGUx36j2ENbUS5U43cCoNgYHe8GRC89Ej3t3RB13D6ACZv325vuUCuVTCXsCh9ryg4hwHxwHg18w",
  "key21": "iDyNg3vMFef7MkCA9yi6fwbb7bgDLJoxA36dhkP2bDmuRTvRRMuNMNZTDdgv7gUi5gdMZfRxY161yAgzG683q1T",
  "key22": "24QDHPPCUgHuf1EWvCbDxLAHzRer7ar5wHkVr4KW5GPdJit3D1spfxb4d4oRNQxPMXVhLX5bbDzYAwsjUf4eqzWV",
  "key23": "4afJqSgmhJjGb5vTEbEWHe5yUc8kRYfTwR9Y38Bh4bVr6XN1RguYWAGLceeU2Ze1cYK6Qj6BXkSnifhmKrM2q2zm",
  "key24": "6UFXzqQoEmZphdtLsXMdjgcPNK2ckshqBreJMXrwby47jCZSjU8os5am2i7rFkYPgoC7euzdNWSpcn3WZtyhp31"
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
