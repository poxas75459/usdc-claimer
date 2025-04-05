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
    "5UjSodcyXKKQj9Jh9zHSVVAigoVe1qTR3rMi2HKSSiEz6gSwFZBa8FxyiXs6AtudCMwxe1Jzsjp4EfaJZb8KdqKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n3cXNAKrjaf8bppdeTdfXKwhdjbs2R8cnguvYTVGvoENpbejRK1VYWooz5149RNJjQKGi2tEYT9cZkCVEQ5mJvU",
  "key1": "53ETA6srPNnXBYriSGicCDQ71u9q22MCzBmPf6wGx6pEMjPv87ua2Un8R2ZhVoAqs6waVQ4v77sZ3hnTCKkqeyUD",
  "key2": "3Z68n8xETn8dGmQsXXWe7bbAz9iEBtCEUaKpZPVPrj6Q6dNDdRg8FdVzfScVx9bK3U7Z6h8MS8qxkepi1Z2Lhaaw",
  "key3": "4N7gRQU3ZoWYfAe3VXWxmHwW4hNheiXG7FJhjXFbq8wsv8S5K5C92PE5b1YjkkceZv7GXMioVUgFPUXDfSK9Ch51",
  "key4": "9RsJGLaF6TNWFDTUqyVQTneYe3VFmH73mjk5WXF96zvJpw6zH4gFk61kXYdFtn3iMV3pMnahLkgnXSTtgbdDzkf",
  "key5": "24CRk7HpcUMYuGuZjjq1V2iHJkGViV5b4ea4PviKtXgjP3EvftsARuoDRe8EM8Ywjp7QiJM1ekvijtso1auAgAFt",
  "key6": "5uS9Fv1Fr4gJFsjgtNEm5YsLywbJuJ1szvDve4tHP2UMoJSqWsmphZxzcpB6GJ8RURbK7MU6aAEx58htSnsYPTsR",
  "key7": "H7KBvRPEGdjZhwzx9Jw4KBE1ZcmcByaAChx5jBUPwS4CMhBf3d1eGFdNxfvjysofhpqXPTg3wxNBSPcxArLWvFK",
  "key8": "5Z2rxXA91nWAaB8Tr2td6mUWmxSQ3hdMcmJMwXHGkL9LbGWUYmDaVNnzupnnpG2umZPDXHtrhHS6XK5uW5F5x4mz",
  "key9": "2j8kcKzxa5QMv7iYX1xDvbapdufkR3vv2wykddGBSeaK7jbQoQaQ5u6mkoPuT4pTk8ZUUmsbrrhnRiV3nwzgdTQs",
  "key10": "5FdgA4vQV8fMpjLW15uLKHU4t84ifU17wdNwXTFarLUGNzTKfm8BJFRj7xU9eJqHyNXXgBpJcfAnggWhPbpYo9Gv",
  "key11": "2tNnfsQCZcRZu5wykouLgS5Bo829HeNYLdJAHAKgB79K2oTDBn4j6aMVFyDZX8naFGc1u2tdfRC4NS86merKGxmk",
  "key12": "Wc16yPTzCQo55udcY1V7KBm9cYa42SwsrKGuZu9abBryCA9nMxNcLnst44MmyJXSUHVDpqBxaZn2EMfkihztr8r",
  "key13": "MnKasJJyDYgmQs2Agkcxm182Lt9Ubf4efE5ceSsDq9PvSKUbq5XkFL5uKTYcwUCdrjz5u3mhqSs9RD4EpgnSYLw",
  "key14": "5roYdxrwGZMCJTsZc2BcfjzangjJzAf3QF99rM2fRRrwTYhFN1F5bKE7DxBdyXCC3MEZrabjtC8FtfZ5rvwdQGfN",
  "key15": "5Jnq9ysqgM6vga37cVat9YE6beTFuBkKSDkx1F7Pf4hsVPwq1fVnhGKknLY7RFzqbaQwY7HNB2VtMFUkGXbnDuxR",
  "key16": "2BhxEsYRfzcgdWrDjm2HgevqbUekJQKV3QzCa8e3GfUx2fmG3bguTaQjuWkNviepDAV38rdwLNeTJ51ER8va4eB",
  "key17": "562EuAHd5TNyfatoXW1MGAhWvBCkdmvDHfVrVi9GRPpdAZrb2bxuUJiyyFKtCMD3ndLMhJy4GmBAcyZyEwEWPwmS",
  "key18": "2mzSEpNCCF3iTrAT4Uo3cv2S4kcMZGS9FttZfCJBJgyQtJw43y4Hq6r3sFZQrnPhy47prsD4g1SpLRYovojenxZE",
  "key19": "rg6KbmPUZD8f2GkkDxoyacjRRspQ5GBccQj99RDPGNTCXeVnJJWL29ScabijcZCuMxCfgHyKvHJdpKwnALBuEog",
  "key20": "3zAe4cs8Gm5whuTk6ZBK64QLuUybC8MUSdy9ufdhQr1XLsbVFtX8i17y3hZ39suEic5tU7tvak3USnYoKXMX3q26",
  "key21": "rDM7vg29vnKsNNi1tTbWHFoBR9FRZ46dfV58JG8hAEYzdcr4HcuSPaWWxPgt5bviwb52aYdywEkXumqhkCzFybH",
  "key22": "5B9cd4j65dFtax1b2EQjziHAsbXpoNDdm5aPvgDixFHZWi8kS76SW6LVUF3xacjmuHwmtCZcZSgWjrQNDBw3kcwb",
  "key23": "2NYyoVm7hRvWu87SU4dS26XdvXxH1nmZ42vZf9vXmLaEHWqACQAs8Jcv5nXM7TuE1FrNx9HgsKQdSthnBHCCmmpe",
  "key24": "4HFGY7zfkghmqBKyZkbGHuu61jDzscxSJaYzFEXNYpkZ2zEkQ7Bcm8GWuA1rBVEsTfXD68GECdNrEt17vLphLQvz",
  "key25": "5Gbe3FoiWNVzt2M3gp6gsqpXnZnRX4enosoT4G7znVRkfG3nRKgFktCNLE6dCjLJPfDUEfxRUTRkzot4dLxupAFZ"
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
