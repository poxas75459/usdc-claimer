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
    "5P57QPEHgLyEHxNDWYL2WduPtqGjUjjmFusaEhDvX9J93HrDboBzvEPBmXfWa87BaEkQdkaXGKh9PBDV13Pav1x9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ViwXdnfrjXkUBPNv8m2srzQH92wyCrWEXUv1cWegPhU1rfMrzmEvD5R5eayaEfj1HqPZyn6aKYeoADSVHoAe5cV",
  "key1": "NFvRpJY2CF1Y3Wapscya9bkCrntgggmh5KJaJo4HhX89K4N4qF1utsiJBTkVfS7ip4FVtfmNuDu8rD2Te8ugEKc",
  "key2": "2ZNzf5Kr8muRdXM2Keyc4zP9ybjLHDGNWtu9pDUXpPqTTWLLG2Kq7wdKAA5XBD1WmFMmJpVEPEuK9ucdHzp7m8Vj",
  "key3": "5ytcc74dEoVLtzKXYJPubufyPijXDjQeM2LJn17DtvnWfaPdzsWJZrQoTKGUTkqhhK24ZZtCKzeF9mtgERTLvasS",
  "key4": "6jppPLBkQ2QGtt92uw7AmcYPPcgvMyG3HLyZKBCfzSAj18E6cRN2X4Whcz5UCRd6hrBuMDBq5wqeHybauk2GVY9",
  "key5": "Rd9Y2NaQPfX7eUC3MGR4ByskGtw9QJxg6q5A11zZyD9LJPohDkYoirHHS9QZRcn2ikoXvGe1xNkxCqvWBjVJZEt",
  "key6": "5swo4kmQjM4j2SzFD78hvb5ms93nL1kcE8My1uUK5TNvCvUbGoQxApQvYE9GDmSxz247nsX1qZWynBB3pyh1phyn",
  "key7": "fpPuNXGi19uJYPKuwRQat8bkx3iNrNtvbn8qyd9qyYUkPK9ASQbeX2FscuUhnRYXkGag6UdD8Bbnb72qf5xL8gY",
  "key8": "3jPDmGbFF3UQnC5y2dLhkDAXdJ8xVoMwMdi3NBVFuAMB3DUUjAcSyppcPCx2gFLE8ybVj8sN1bUe7zToc2DcufNu",
  "key9": "KFLGAx5vGorfsssxvmg1JFcTt2zyNrUJNH8bmXk7LA3KjRN3kGJpwApevemHd54PMMAkmbcN8vaAiQvCf2ToFrX",
  "key10": "2JNrme8K6Q2mLXN3YSzT3naSFtX4aXuh5SPYzj22eKwquFd2uSArReLQiX5GwLeHtznYW4tRgTSH9ExTMCdBatKg",
  "key11": "42Rg9ZzfFDThuMEv9DMhAev6fE71iJVh74eBdAiWwjgrrdBtw2iv4GfTYjb2bUS4nEnTj8R8udo37ApwTqejLQh4",
  "key12": "fQkBF5AuU8UBwHi4Z6zhnueusLLaqfaBZPo8aChixb1BarUR6WLpPuYBXvDGCurs2nsAhGfHs7FZZzSZH5j1vyn",
  "key13": "3XUG3P6oWpUCwWMk55QwcSPYt47JBLXTxKsbt5mCYfNtDDF8fiVitgPkJUYfdSpc32C8dbt8AzfHDFbdaZWo2yGB",
  "key14": "vRG2VrFW9cVgLvhSiQc5HMNhmg88zxXHP63dpxMAYtxVzYsuwGJuxDbBaa98TLQaG6bE67sS5rHCFReAKoBZmsT",
  "key15": "5PBJGoGKpyrY7Sq8X7uqg1Vwr3W1gUMt6jEsGzK1SSrrGyUhyYhmqEMDe5gjPBMiMYJkP8f53ABX7rRcReBGoiCx",
  "key16": "57oCWCcaFvNemr2VNSiySQPAf8Vmo9mqvYcSy2jCi2ANfXykDAx88nCkoPNySgXzTQUKfXi6UDNBGecgxvBG8EMG",
  "key17": "4eheGa2RPPyyJ4kqMNbzmxfnp7sqUde6Q6qXdm3MJFxQ44PdkmDxNthLbii2MGGSbjJdo2GmhZuMvnCJ9AEhXxeb",
  "key18": "2LiiEa7Jzq1ZtouNx9rCBU2Q3ovmgQF6pyGFaDKfNhnu9pMtoMqU9Jz8AichyBf4zSTtAMFJFRW2hDHo3AABdCR8",
  "key19": "4NNj8F5jJDT34KmyUELo2xHee6HD5z8SHcKwC1jjiF3fDCHDMRRxMAuLchaLXYqgXgyrnhbrZtB7eZN5KT8S7Mce",
  "key20": "5fomMuKk2eYBDUYB1UT4a6Ud5KtR1SuTFd7HWLCAKfQu3LgDV2JQapbcJ3sVs1d8MWnQB9eD2FS5QeWMMNVsSfoQ",
  "key21": "54o94ERanBgiKSrszjLi7MPRwfUcqD2ZKJGba8osDi8taKnk97LMH5spDk7o72XipdCiyQGxDCwjdienrjBNpVWW",
  "key22": "59xCMgG5sJn6xk5Rs6uJFoN3zb7B27fxmALrGuAekrY24RhY8bQZqGnWyMXmEY35xF983CQPFr3pJERGoUwuKTTy",
  "key23": "C453SMeuKgqgYC2skXPUBkpexmoo39tjmy2PWnuAjVTW229oqRsjUfWgUNG3TTaJqtw582RL8ow3oyTwWhqfs8o",
  "key24": "5a3p3FLpEJJaWN2HC2SLvjYzDmzKeQs7x3tpTty1FX7vaMXGYeTn3aVnVJKVPr3vZoWziEu67LGgJzYZu6m5a5Ha",
  "key25": "7eTfkogL5irzZfwqKUL8jhoPLbKp7y7uV7sjh3imBF3FWTkYr7h1YM5iKVEkDfiQvwZfw84KsBCAA3oXujRV4m4"
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
