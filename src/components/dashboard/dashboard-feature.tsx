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
    "5KYsFpMv5QkLFmFaJW85wJDUDzSrQz6Y3twve5ZmiFR2KvZcsPW8rMnnZKdmro84E5vpEeUywtYHMgpuutYXkxr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TXJfyPhjQDiEHkwM7BZ5oUT1dzfZ2XvFATzWDGr7zXxL2Z5wZPdDc6TdNtrWWgTE3kWAcRbHSdmTbzNiQxJLQhd",
  "key1": "5kLpYPBjVpxx5DFad5r42dDn5omT4pYjKrkkjVZeWddfCKHoxD1pFSPUGzHPa6q52S4n1de3tD9mjRo89w5NDr2d",
  "key2": "342cybVQwN34B7hGJhYtNYBtmRzQwWjDkBVeH1P8goPzjh6xGKWAEgSmhxrUkj4Rc6TkKcRyEUCfSVQ3kiEMyPvi",
  "key3": "2pFzLcJyazRgNZsrxCSt2k8USou5LV9wewTKXZytZSMC7o5guf5KB2n8ZmWLCrQVsNnFMbzbBf6o6L9RuuPE1bgM",
  "key4": "XH6EfbmKBpjXG8LwqrSC1t17NDHtn53jw6daLP2RrUQ9Y8MpiCpyJbgUG8PWrRuWwRSrh1rFABNjzf9FezMDCRs",
  "key5": "36Kjp8nkHAJgsAcYzBiqLpsv6arigBncau6RPYwdUtMyAKHCoJ9rZs6RW66or1q5FkyBQhxqxNdUEJuQ94N789PQ",
  "key6": "3nPvXftpFmNpry4YKkF2gs1pZ1BMrhByA7byTeTJYtDbLWqESYUKMygv1JucQaAifaAqSLAkxXT2nbhrXikjrZ6Y",
  "key7": "4gQUq7UuBTPLPj1rNR3CRSjg4GwkHPj57w6S53FXZbW6jaGA21JhkGyYyH2zjQ1GLhr8CGZ9jG6429yTogEXYw2S",
  "key8": "36TniELtsCdWDamUERVv7ELqDbsxMDeTdaH7o77peMzQijKxAfDmy5QJf3nVQS7nzjcx5ys8s6MV2Uzk7vduSFgz",
  "key9": "4T3N65deAvkWFmemAVY1BrnjejYTwi2wrPn49vC1kS4c6Zhv1tHtbi7p6T2ZJjWHTkaRkLgnyPpix2Av74ZCos4j",
  "key10": "2YapPQ6u96PaECvEP2ahGHNdGwNwV9jBdWE6t2qgFG3jrqqswCrFDsiWyQBprcxFBsdoQV6ybmN1jDa5A7hmTP52",
  "key11": "4HKBC26MisZtuhVZNaA6JtodWWTHxhArRVPDHin3vPEk4HEKAYewinxaCscrDKiXv1YNdXgUMPGKULqWjV8xT5td",
  "key12": "3t8SP5i6fzjQFqQXdifxvgXdzxHm7yLDP19MmjoKygp3HhCMDuBwek79qHgvyiTP9oQ4TKiNrZ3hR82CatjwKvFS",
  "key13": "4uD7Rc8PnCdcjpenrUBmxAB8p7hXsLvpwLC4DgknttAXoq7423urfet9ajFG5UQxa8U89bY9z2i5eUbQUiiMioUV",
  "key14": "2bXEjkqsTQ1L4xLvWEyRrv5Mv5PfDByfEDjPaQfpfqXvC3maPFF9VqF2Y5yErM1eDQ5CLkvmuaWjYK3KEdRkRQWR",
  "key15": "5CLAJPQVuonWkuRi1mgjC68BLA4aL7FKXWTnUarF6cR6aPisp8veJdf7DUbN9cmr67j1bhVu9bV7W7BusiToDQqL",
  "key16": "5Z38tr3yGYvCNhTGG9awEnDtCNNHdgZjUJL3qbCmt8A54oNgiPgnwhW2K5Jm1JFpa31JKSJ5Gp6v954Dv7iDyFsq",
  "key17": "U8s2ffFz4VvHDDwwjbi1meFACvAokZPT9jXQgAKQgnbtrgBuhag82Yt1AF7qDM9GH4qg6LYL3UCwoUD6sbC2sQE",
  "key18": "3Fz78Qx6BHrZFkTzNMEBm3RwmMQbma3H41xQ3rRkZi4jW4LxGzbTEjp2Xnoe6FF7sDmKFvrBBxY7NxVja7qWG9WA",
  "key19": "qwzJotVw4nG64xWGj1JCESvsEF3bGNLBbc4fUfPHmNcVi84HLELTnikvLJ1NVaMHdC2xtZWWaHsbyDKxbq9Uu1s",
  "key20": "EvA58rr41rsYfFdiYTymGm9kfAzDesrMdnnSfXBQeCSuZ97ZhjtZy3uWE2QNj3EHYE9TW4x8KRyU712fJ8ULqq9",
  "key21": "4gAWUfD9BSWQ5Tk8bot8zE7BW2ExHPjLLoqLPh7JVSYDH4FGojWLtNbeEWoNyhbnECvHUgG8QYmZZzd9doJsWp5v",
  "key22": "3sDC2BwYCQ2R5vic49aNoexxm6atPyPRJFJoyiNQveSFk8uRgN3kft7m4FdnLb3hcB5zFoRXTfsXKZxxrtucengZ",
  "key23": "4YXCNhqSQbJxrnHhbXY8UJHSJnVf4Pb5GqGQxHVMSF9fXonHG3vKw7wVfFNfaZjVaZvFjkyyFu8GgpPrhi7fMpvP",
  "key24": "3z7mWeJ3u8uM3GaTWiit7bixDyxduRfNSsW3tqHmovC6qfyXLhmPMpPW2vB6bMp6e6QxP3GcFBtcQZyFmSMkW4kV",
  "key25": "4tB66qBKLJZR9BW7xpGLQUsBx9zzJCJcNjkFNtaTVJrnMkAFiqtXcXXtt7R955X5FffvXA4XC8rPG6qHnRRHS5rR",
  "key26": "XBMcsKy5f4CPgh96Dq23Jet8ddKdrDdrUxxJB26DqH6vC3T46LiwurTBYm4GmZaWC9nw5TNRuErqLbTeAESK6u5"
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
