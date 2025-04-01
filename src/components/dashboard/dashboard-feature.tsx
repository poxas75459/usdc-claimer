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
    "4iKAz8ijbJKociByi2YV1MRuMB8qPwhAmt3fbGxrJYhbBdy9Tn6Kwv39U7anj3Ggn3HiNgTDXDhiLpxvR21DBBuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uEReEDxbHu3eyTtVEZe4Hn3g89eSgZ7fFruM8vcUAi3uDex2dzeh2Z4z8PrjqFUTFWrYtVyCTrFuFgStgz929qT",
  "key1": "4mYFQ1jTEugjnuQWzZAfvC21yrSqTYjs4bweqXGYQmBZaLYkCGJ7UxSUPiWzGdqjEUVgqw7j3BgekRdUxHdNiLGL",
  "key2": "iwmSs4mzNSmpqyibYDnjUmTUSHRjyfT5aBZ4nzSqoNF1S2CQbqmwvuAmgTdd3VtBfG7nhaGe28MnvA3RfuNZKPV",
  "key3": "24N3KxvGYssPESqmbHRFGc54GWNow2vLn1c3ySbBfgv2p6KTYMcV5DipjqUstc78NGjYDEA5vwGd2E3vutRf8uny",
  "key4": "5GtHzi9ntUovnboWMDWRpDSDma8jT28GbnYB493P24iQ571E7YsVrkmjVJmenGEszmdpusTTHMCPhy1W5cuEu4CN",
  "key5": "24zddHp5JCr7NhjgYHhbPrHPe4GAtySjhuRraFnTEnRLi6B7RKQpJEXCFHjQpggPr3eAbHHEyb9nnWVijYBHqmPW",
  "key6": "456yW8FZ2rQGyke4f2YjhdRtNNv5iNPkGEJi5PstrfBZjozHb7pg9k5AMaQC74i3xK2aVL2bn6MUPHFNPbASoMZC",
  "key7": "459UPvZZqv3YfGx4GFa7StEFVJnsttsE3FLjskgfH2qp4z3zU5y57vo1krAfUABHpYTkRVnzX3p5tfrnaGQPceXd",
  "key8": "4c5QqqRP3FZiq64fSay9vdrwUuFhb74ZTMacqCN1G2zUQtBReSf45WC23NxAipLMP5h5paZvJrs4ikkmjz9czkkj",
  "key9": "YGPbvksN3GJHbMw5UvFPFMR1cLhiKzbd7SC2v32iYJzpH2NcQaBG69D5XuTyM7AuY2EbjDyJTyFFb6A7DvX6pCJ",
  "key10": "5fDayHdmZ1qvTA6VvyY4ymaUp9Rf1WoChuAHmz8tknTy1WZ94QDfLxmbN1wRh5MsxSduXiUJui4KWNdd72yyYcG2",
  "key11": "5YM2YdQ21LyeT8E46xMcQYgAbyvsc7fsWMqSpWxbPH1c4isvuh74HxpWTA8PAj17TenN4bpCHN92esaeDjopVhK1",
  "key12": "4xHZRv4Qz19Kf6k4gAFv4DfEFjkWxFKP4ciExz49HwZrKay8prenpuzmtVTisztxznvExF2jq9JYcHnWouRn6vrB",
  "key13": "338ydWCg6VkS2eSdjsgc8MgAZkrCUs8LGM5mTkAgcSbzP2SRMUwNYbCx5d5LjN8NXY8AwjWnd4WCmXKUZbpfvYZh",
  "key14": "4DpkziXoCv6HdSXupTQ5icsHD4piBtcPRKQdi8x48ffwAC1fJenWyoorbYS1twistYj1piPyoPiWw3nDmYYeUgxr",
  "key15": "4Vyy7MALRAmVvhJRA7am8tgWC175ASuvyxCD6JjwhYxasef8L78NZUNa7Nv2HPfVdDKU1QKA8DveY4KURnW3DRZL",
  "key16": "2r5u7tePW6dW3K9MdyL6syjVYZchu4Qnv8VxdjiDHe6fP35GhsgtN5NXNLz7vL3L3donKi9XPxcBDJrAXB9X9DUT",
  "key17": "27eRN8DdZNdRJML5Zhar4nK4KtVgv7G1aeC28AM3bBoy9b6ikuygzPKC2pP8Nnq6fHdGNzSSXVqKcS9FZQ5UzxYF",
  "key18": "2dKNUxyX7kT8SFY1LtdaQ95nhRRp5azA67r2xRgk1UyKAWRNHPkaYU5qbXAhq48bDwGQjmdZNgxRzVYR5LzE9fQ7",
  "key19": "5yBWyVGkVPfQTC8jjfqQb7Esju4692EgY1gut8Xkgam6MA8xAabnHr5ZixMJoSK9Xv97Ng3rKcX7u2uccUBZK2CE",
  "key20": "58h4hdUcFev2Ty1BJ68NJKEQqak7JcdjFcKsWtctuYBWvujgJbAsHK1HTqKkSHrVzEW8EjSL99WdKAceHMr3CPEX",
  "key21": "n18d3jMkyvwhV72V2nQ8FtqveG1JTaASQ8jKVQ1cCo7BGgRHyPziVJyTtN3FCvtCiaGknrRMT6LRp8SwGm8VTL1",
  "key22": "3iESkgteRW9MUVpqZsny1xyECi2JR4EsB4WUiP5QNyAHgfNrFyjiPtbinHc45AHvEka1iQS3H2g3myLRgntpvVpg",
  "key23": "3CRPMSCJwYN32zttLe24Chhy1QpZCtAvbQkzneUx9Hf6d3QLgtuBFWFQLbbed7T3187bXxVECdt1tixXEtxKLbAa",
  "key24": "2RZkyMjZ5QZzdWPEPH1euu4YNe3fw9EAGXDcGF9RhJPRo98HtzcMDbfwPHHB8NUXDapWsUKWxyz6gwVurCm6gw4Q",
  "key25": "42YvCQ6GzQQvep7G9oPG7EStkuwnQhbmfRpR3sp18CCAXEbQcthGEsRiznnZ7Z3dkgWLAshQya1UVEtsJxqsVQXY",
  "key26": "BUe12mPheyPjemJw1pFCdHd4jttxBtPFKxX6eZudKCPFBCGm8Z28XKrr5Bnu3YPLhaga98Hf6vij89BySKFHACh",
  "key27": "4QwhBT8yBWRJ8D3tDm7DjREWynVcmUK452EJA2osTXMPA9bjYDGxUR3EZAwhmVxp1dnRAVhAbfU5MqSRXGkL6snw",
  "key28": "JfZP6P8vhT2RrNCsS9LVexKxGCvvH9xttp4JGZzYKib3Uo5VFNB8JYFBaAb65Jj5KbksFag5pFQ544tkqaEdEbu"
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
