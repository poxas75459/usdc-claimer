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
    "29PveC3x2piPKxdKpWHWwUKpkifF5XrD3Qwp8piHHX36SUQaEhiF6BzeM4QTkfmWAhkgTdCbFNy9gkwUm52wBFtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sha49B54RGpD83k8m51qZguuvj7vaJDPkhoJQTGP5H5rgoU3cUxysdZ7oeqeHhaCsa1rHnjHWMe87SFjT1pvVyR",
  "key1": "3Pzf4phR8FkFJmkdx4g5bHdKZMSs43RJerY6dX1SFdKDfdL1TxdYtXgJTAT3uLhSuigJw5GPogEqAsvnZ3ytMtAM",
  "key2": "9pL3qfRCLwNL3gq57qrNkBy9YXodr1Y8oeA5Cs85ak6cG1ZdjM3ErK89HmAgmaiiWLMAfbuFs1rLXJXHiVgmrA7",
  "key3": "2oXenSCJVnMaNTankEVN82CTkuSUrkBB9v9yqsfEXqqTW1J62hWkxy1r9WHwouAwm2FNjPzHQU9iQYqKeeBT8b9t",
  "key4": "29oaRz3VTGMUrmyMGcdooXGvwtJt7VSCJTX5ZBAW9Wp6fixp7yoY2fWMuCALodvobrB5QRfqHUVMCh9mX5mFePK9",
  "key5": "6haeFAqTCUTK1NtzYaqFoG8Egr59EHfq5nkhAehRnitC6t2cbcwtMmezTA1fdA4VkYCod8tsY7MntVeEd8m5wcz",
  "key6": "2xk8nZh8GERUpkoDGArps1UR9hE5FeUUScVRibZKNphRHg5ogKmDskkBGLZhLgcxTsPNFBtQebYAZsqQEDHTXaZZ",
  "key7": "38FpUaMq9LANMaR9MP8h9hmtwn7tmxT9TVZjaYJtq89UL3gbbeZjRUMV8XZXCpdWLgzKDqLHStPsWEMZEpsnRX5H",
  "key8": "5jddD4XB433cJa9S8u833WfPwA16yppCg8rVViPhKTeJdnHkwabigTva6oBggmueELbPdTP8H5Xeqybvnf7nRswB",
  "key9": "5P3MZa6okPa6TAti4Yd5dVwFSSdnjSJ5oXqvym33Pv51XpjPKpJkLuSkssPLdHh9U22YBPSu7BnV41RwMNP61myg",
  "key10": "54w9i1qGokf4y6PN779bp3NTopKEc9jGs6eRfKw2EBnK3fbC22598JiQBmdwnWf6yoSx85umPe1RWC3Er6SUmscj",
  "key11": "5SfQG58kbSHscXsDur8suWocGWcPVqBswcBPioxBFHKmvyuZgkk58ssZuQ6VVcaw4tN2Ux72ryM3yBnJZsLqb4mn",
  "key12": "58GLJ15HZwYGgwBErDV4rASXifWSoknDcNX6LGEA4hXRrsTxUoXrwWGBGfn34hgskbtTcudutgif9CJed16GW7kB",
  "key13": "LW4vjPYxMaCv5aJH8edbKnMPiTpm1h39QtUvAa9xg8QxDvydkvacEcAVbeDqcYcf8fahzRoPVk1qwzvYsTpDDQ7",
  "key14": "2WzqyEVp1JiqKfNdyxT7wVQ4nXGvEWJcHix4wYTtmENKiQ8hPECbPqny3s9aL1QgfpdWcicooWkx9yjhRDNoyLVw",
  "key15": "2Au5PF6KUGTnrgA3fZwbyFRW8DHZmnfczKVzQQbjav3aLDw1GewF7raLQja34aa3uu5uhf8v1RZNgzyeqkvwt3Sx",
  "key16": "4t825RRwpoxto1vEee87cEKtKHY4icn53oHYGdjJZ5PtPh54t5MegdeTti5wDrcEoG1fns8HyoEpvVfKcFo6dJiH",
  "key17": "4QNKKLFkSA333ddzk1YDShtVWKi544JKh8bZU3SqVytkyM95YqKYarE3iRMBsb5Ee8vomeXhwGSFT6pPSgPC9DT4",
  "key18": "5Wu8dSp42LR7yEmGTMbd6NJqoiaRrGnezAm5UwDMvJfWL3GSgStcN3H5kovU6koHQ4B4GjxgNre3Ys4Bye5T4LFi",
  "key19": "tVwxqoAydNYYm9aeHkuRcrxpki7ADPtZJSk1ai9bSnstCMYGSZMABsutdWcqFA9CrPxKCqshKDEQ2XqJZJLd2wQ",
  "key20": "2k9343JpUiWmrjovWPkZME5pTcTUkz6XSsXyqYfR84JgugH8C7m9AJTm1JxHQ7jw57hBbrpkysyJhfL9ZyH3HCAB",
  "key21": "3qCBMBRfhdwt18inEN8mLx7RGC4FjommxUex1YAtsK7HDaiogLnNzh1ee4AfXNorZfxXeTPKP61jourddJcCazHd",
  "key22": "5MNLTDSXScAyFJHr8XDCBJ6wWpEhjt1r6R25T1DvQhUmFRgVHErrhf6pQ637rcMDeVbk5w6dz5nDJyhZ6zT7Dght",
  "key23": "5nCGLg9zKT4wuPTuWqAntLhCNjdoi6UnZBhaLu5TLAL85V9wnQAMA3Ty3ASF39mnhAAvFm2iCAMaXcTziazGdira",
  "key24": "3MLe7S4i7MqX8nUHPtXnq4iLPkUrm1VgYHN6stp1WGWKMUCzQ2yvRnyksKGXRryMN6e3k1ibfmyt3HpJUL8Jx8nL",
  "key25": "yFDhXuRfKRxugVXYnf93BsV4dSxbbSkojstcbBgdNoqN9j3N8BdVVeTdGVVHiXcJh9oT1iLik2xCn4uGGWcDp1f",
  "key26": "5NN4RcrS8YFhCVuCfJwRn2VeMumAWtNMWd97XfWBcDSBnhSzU1aiLKXVgAMzXYTdW3tWuHqxJGBfhti2MHh9decj",
  "key27": "3QjSpXV9ANgGxwCdB8bCrr4XtpBW2FSBhSHgztUje88Zx4osFvBrb8mUA7L3zeVX9QxfEknWNnxydX1S4qasvEqD",
  "key28": "5QTCnpbMGX3qLiQEg682v1271GuYKpmkoxPzMYuC2hM7kzjSV3QdHQGo4LB2zHBTMTihUy7r1HcACAgUVUZJjZ6k",
  "key29": "3ZkZHU6wuyFr5miUr9BLckzSqeo7Q4hti98zwxe4nc6GjooX2KT3rj9irxC1AAZtRWB1wzoJbQfd9p3BUsPknjPS",
  "key30": "2GMoscRZRrLu9jxafUCCpkHQzu39XpzsajhqwQdpETponFDSGUP8qaBovLdFsDunJ4DgsJ3DMLs5VypgUhqK9ozc",
  "key31": "5mrkTcMm3vzsLo8wjW2LeykW7BmojMPaYF9TdNoYREHJMtRHxwJCJWEr9HLYdDuvDDwL7wtTsMiqy2f7PgDaeMr9",
  "key32": "5nweG4KprnuFuvaGjD8UHuw8NgjVTozxExtHY9P2uLzsscwQNKuSkMR6eNzdBppfW57By7br7HwbLNFFvQYFXS64"
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
