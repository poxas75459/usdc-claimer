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
    "5tGu6Ls4HDe5tRX2XVFmMa7xSVzL8yZxovQ2eDyHwpDGsnaM47qb9NyaScb5xjeaCZbq2qxQe8MJowiftKHYfcjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CYfTfjqov6EF1bvAoThM7n9i5AjUKs13wHJX4D9eaYRohDoDa1NdjuEXwZBvegJGh3CGMPG719qejm89qHW9owG",
  "key1": "547rKmP9maPQSjqoh4xEssTEisrL5cpjmVEh3ocPcfkjEEYF4SvdMqB85tAA8Lrg4Vj5SHMHzATeRm4CvnFRozC5",
  "key2": "2MBDPbvJwXtGN1UiFHTHxpuSX6BtojocQzwnzyKFZNZTtuzegev67GkjQ83CDyDYgLegvcWsW45hoD26FyhNv58m",
  "key3": "69oNDRgzeS76FMojF97cd2xed6PVRu6tKMMKiEARY6Sck2kYhv2A4AhzwWiP1f8vSf4RfVvzZ8MJWoKahdRydWS",
  "key4": "3dvYa4qXEEcWT9HSBvAgrGKz2AW5SLKTPZH6BrMfky6CDLyTgZwCCrQnpUjVaPvep5vqiE5YCfQBhZQ24uu9ofXn",
  "key5": "5tGgJcKDEQyeGqk613fe1Y8T1shNAc9mKvSd2CzwY9pme5M883LsoFuVTQZX2yKdDABRSbWtUs1eoijUzcGVWZ8X",
  "key6": "5f7rQPZymnNxsSscmbcMi5Gp3gdDTyVJcDr8n5yCHQR9ByNg1BAzjovpLoBLGJ4TfKxavpSiD15udHY6gkfsdBzf",
  "key7": "4SLctvEVzF8HuHqbgFxWhJHRfChCiD15sE6vwfFWRh7XQvVYNUtJf23zfHcbpNzsmWFrjvVZijuk4gqugTx5hTAu",
  "key8": "3C7MZB1VhHeFsTsRMGuSXiDWU3F9AJUokBePLjcKmeqPposoJkMzuXNQiiRKb1NwtbLJRp1JW3i8yJPd9xL3Q6Zw",
  "key9": "5U877Xb9cAdhnDPF5r6fbnjxqkELKYSRAsvKbvJGyVc9MdhsJUR9LfPa2z6Gt9sYSfhNaTKvei6CauPL6zyqAmfU",
  "key10": "5NxbSUr1wjMbnA6pQ2iECRXpS38Bq9ipTHPoBeiWe8U8PU67LoCkcn8L5BYsqn9xNh4hmWbZXwKrAHD4JBcTziHT",
  "key11": "3xGA8ZFrRwLHKwGszdXhZDAUwnEV8WYxgfnAEfGNTygnZGSQTDkdMN53FdvFnhSfM6xGGbcY6cUDiAttksYAM4Sz",
  "key12": "3z2nHcNqBgEXFKCW9GBPZD6p9RivXJzZfSZKJ7b5BfDmCRTQknitciwoDjE1KBT7sqKXHvN1CgV7xvMEosRwf53M",
  "key13": "druFJaFCs3j3x9JNsbNqjWh5QnmN82BQduSQsq5Xxn9NBTnMTVH8c6keoVeAzrqG8e31pDmezwFdGLMhEN73rUK",
  "key14": "3YxKZirttFfrStBZ9a4X3T3EQY1mmDC9hSkTgrYG9yo5foNPSjVtQoYRHSA9Q31wQ55GvSkU3dPQCWHnwoEK8AW3",
  "key15": "4BVCkkhe8kJshr2Q4uKFJ4dehMh895XoZBQsdPn9bmPVtkJ6M3keYx6mStmF8kKt6ujKmVcWHCdeJZTsh1hjkbjj",
  "key16": "2xMBu9XN6Kzm4eb8ofGW2jCo8kLMWYZjsyA8wTEHzUMJLqQEx1KBiAgs21wZ8GnvvX7w89s7jfy3UAzariSd7GcS",
  "key17": "3EysevhLXV9ELAwBEJ9ZJhmLFzyXrAeaBfwyxF9q5zH9hDXzZcitWzyC3kDeWbaKmkEa7SLEhdLsJvLAwAti7ASy",
  "key18": "J3spCuThz6EoXdvLwRDTFTPwzQ95NhFGAbM62CBqv9PePQGmPjm3GmGfZPEpSAz4Fy5UpQmWQXiZk1Uxv3geVeT",
  "key19": "pADzxnec2JZVUGx7a7k1GvHp2jDLJtzX414RtUALM2URYLx6PY57awwpDsTGQoe772tcaWrQCR5YBM9HYcX85Y2",
  "key20": "5cfs2U2Dcvga28N4Tay7K7dZ4gRFxRSFp9pbey2YUmCo1M95kbx2Q55Au8Ptnb6dDkYQFwgVmSkFLxsofmbrDWDP",
  "key21": "2KyhHQBXNC55rpWch8b3hHvoZKpL4gjKgLYsdEC71BW4QogRDuCYEQUFGEwFJLTwi5Lt4ahPFZhdCT2UgkVXAYuo",
  "key22": "39qEJG5NDsVdmzhN5tudB3EA5kHAXWHEcdjCrhoBPL3GL9JdWt43JBfkTvT6EVVdBkwZ6NRY371pmfosSGeb2gwH",
  "key23": "4mnPdFuE3mH2FijMcJBo6L4KmvXLpQWvYFhkngpvgkoQk9Amv3nDci32DzbqsNHcdczQY7Pn7cJW5AuhkVNWrEYt",
  "key24": "4tWPQiYb2o6QeLw3JiVnHmrhjxLibwHmgiAKADAvXMMVeCpnH6wnEgZuwhofxmrArL6bZcuujKRiCkeKEjYPUKge"
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
