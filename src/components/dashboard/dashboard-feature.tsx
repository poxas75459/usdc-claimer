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
    "2i5PKz8cuqs5CiRWxoFAwRui9hhFyvQMuyR4Qm8bDr5QpsZs7YEq8dapkrzZHXqxoZHTBEgcVM8QN4h9h9w5pxt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bjM8HV8Mhmb5w9PEgyUMXXhrc5mVecAXEXoTNeH2xReGULg3zkVL1HXPTXeJaAunKpBraG7USqwXwVBDnNgzMn3",
  "key1": "27omPPLteDvATjaEeFtazZwSHP8v7CpH7ubumk31RnbMi67EDfzmmGQpuoU5yP1zJ83AEyNtXQG1q8vyC1T7PA84",
  "key2": "31pNi791kXUYZFTsAUtzZ8QVEHxYASpuv51DNcTshzbVNjxgufbtcMLVtApjHqB8fMaqTakvCbd1VT33b5LuKV6Y",
  "key3": "322jNQA1QckhoPQuW18X6wTL2b2iiQ2cHfbu9HrDvDc2jywFZBtHSFFrqvQrxoeVUtUZ3s2NQtbqZkkw1QVDtFLx",
  "key4": "2pM5K44L4YhCbobpbYoH7ib7LRrEjyYf6opqk27t7mAShDhCSpexQZv5SvFE2wZZETbDYBXf5JL5S67Vx1Qe28vK",
  "key5": "3mPu4DEDAkVfGtZKnkhY1nvJJ9fLMNzvzHgUmbJ7Db7rMbZDJe3T6KUujgWGpLV444rQRkgc9QiceCFuovRFNnJt",
  "key6": "2ZfFTVnS9gzSaN9eBbU1RCRxZuXjmLXNvTjJcFennVuwUw9xSL3TGqzcJtTtmv9oJpxv3abZ5E592rmYKQXh3sfu",
  "key7": "4tChDn5ygXKVmytLXuTDBHnShBxz72tJmftLWcHagHG9BLxtKUt7okWzCzQqUZTXxTzS6W6K72ogCwqjW7rD1SkX",
  "key8": "YeZYgHFppVt876vXJ6tyX4jHbouMMTMWkvdhnFkip1YRJueCK3Lp1MdyMfPMYv2qFADpNG53EFGJ6eMVSjD9dG8",
  "key9": "5PZHM6pyVpsbxNbUGwkLJd8PAXABWSh8fmxb6MEegeFcg9m8z7GSmBvgy7FiCrNcGYiPpTvE3MndHcKXR95wtJfU",
  "key10": "5kHrexr9J9fhmSjU38z9cHcKA6ixbjNRkNWEaDRJCp2LQYzHfhXPXWMkmf6uAHLJUrKunvRdNwtWUyN2MibLCueh",
  "key11": "3u94zNuHvoVbY1wXRN2GJES3UqnUGRPufUAS2ZQ6inJfswYHk4bim187CY9dbJUo3cEh6TVH78si3newrbPNN5yU",
  "key12": "5argMeNMz3Zt9sbsQ5HLBMZVsGEvxvfWmpLXnuDQgXcduXC8Si96sjEEQoYgSiCUMGxQNVsGQtB6RoXC4FfbXfsR",
  "key13": "5sgFJhxkPHD88EiKg9AqgnHxL7GXhJpzLmGGe2KG6fYTQtGLV7REooP8WDGrY1MrnxtF2vbkKhv8L8cawQwMCy2d",
  "key14": "5zGVkidnu2m1SydPaw9VKcJrDM7e5emHD2nrfwXDCWjHw1muv5Yp21SN5C1WUbWhiQzG4qX3SqXw5LcdGj1LwRGs",
  "key15": "2N7B3TW7WBPhqfJG3ztg3udxZiiirmsa4rLqdU7trHTVZf6Jw8Hytgwbzf21UTUyLC83gDHtxARCpPDwBysGyPkK",
  "key16": "3EVYA3ZFEoPRvbFEo1rjZ7eS9d68GeG3mogXxH2zmUouPvPBwwF7tK6bUaEhnnQR94rVxVDXedu3GcwxM3xKyeM2",
  "key17": "2x11EECaRyQpssUhsYQLA62B7ksy7s9eSNR1DShpvvVNrhPGr1QLKzDbZRJKdT9NZWiKS2gH7YhuNpXmMHcyEwBT",
  "key18": "2BvMGcGw1ccqSznBnHFV6JgZ1M2SqzhpbNWmtM5MESsGo9zrKwnWBBYDzvrvXUXUbyZ2wwx6fk5D2k5jUEN8mZ3T",
  "key19": "2weH6sYZgvABVHSFGad6MBMySCYogv2g6CiW3wHQq2JhU2pSTFdwy8sZkUv1ngivt4WCf7Uk6RwnVPGH6SXfDxCK",
  "key20": "4HBgk2dUaFj7syYHug8vVCeoADtfSkPAsaW1zidHGsjkz2wznPyYguhHsxuU3CrHreCer16ZPzNUju1DynBs2cF9",
  "key21": "5oTMcoMp7NEQUA4rofo3EKzyAqvoTeUcLUS8pf6zbrgx9cwKH2pbQNqomeAL9ENciJ6i7Lo6m5ccNiPvNo3TTzEq",
  "key22": "2yU4YgMGZm66DcDCdpQnc2bqKc7deaHK4Fcx4FtxhPjWSaSXpSpgsk3nsGJJufSroAfiaRpk6EwhRU3T2STuMbJE",
  "key23": "5dsxmM8QWaaZNMwGyBWLGhBtD3NTyd5dJJRQEU6sPe62DG6A9h5XzVcZZXoPsekUNUJHfQNmd23hXY1i4GzBZsjo",
  "key24": "5oXN3gRS1rwUhW1vbkJjUan7sFX9owJrubcdf9xGhrmSjg5AkuTR9DdCg4S1yJW9KGkW7QwPHRTmaMZsFAfuRn64"
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
