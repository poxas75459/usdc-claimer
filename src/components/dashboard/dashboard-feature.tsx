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
    "4omAbURvcR9H6sf75mrfSytjGZNjjsV9ypRTX9Ricqd9rjf4j7nmdssmi4HGCGeNABHQLfSSmkEBsrQUwu5BDp4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PfbEmQ3iFQLjE7TmboSkrjK4E6Awwpn9RsFi7FpMgqboGC8P5QgtPdGGcGpMJGJfqRnh24ukFFbKr7jYvjrHS6d",
  "key1": "2b9Xsf2zwm3NEWNYJ1LMsQ9uT1uu8afkoWcfLoJR9D5TayhiWgngn54w2wApBHNsTEMcwP15V3rzopV4fKYQ1dHi",
  "key2": "2RyZiWQGu3xk5gGFYZJpGUg8LUbky9J4EoBZXVGJnXPaRL1oeUsQLQBanfYVXpk6TqeJv2LVgy8A6eVkoHQNcAc2",
  "key3": "ZYZVGpALFTgXfWAavizL1icCtxPS33PkQtnaX3UZqFXojoJstYWR7cuCca7swWnjggTtY6RzgaRo887Li9xhRdR",
  "key4": "cvmVvonG3G4b3kQwDXZpjnJzRRTbKkaR2h7XApJUWZJTKnmpotZGskhAChhWfsCEx61EBW4weBGdC6GHFEjcoCD",
  "key5": "3w3KgCnUw9Xd7bjmPUHdpUb2pfAuap7NEYKiPGf9dfujvCkBUUQpXEhATmtKwEL5zR1N87DUEXP2nhcZAXmEyziN",
  "key6": "4UmfQ5n5hiLuyxcqd29WcNEiHWDHEvzikpt3e3L2t5hsHx4vhWBFF4E152RuWwqJ48MJzV1XLvMKNvxrZXn4mHLA",
  "key7": "2VGUoSyZavRka2mNaF4dH5Ab3mnKBooi5QjykcQfYvHiVAzvNBYUC6whSZ7Rd9LccgcVE6hjCfGGS9YvrgGjnt7U",
  "key8": "5QMkoowCFAm3G8k4HyxAWLWNTA3imcT7whtPPiN2hCV7YjsWsSneadHd8guKL1PhgHrFCpR8eoB4zTXd7RemY7jX",
  "key9": "21V2MWfkeAikTwVspVc3ZPdKFy92srH6PBr2dFirqX9J54tUFkWztDPaZesFWz5o6VbNtHugr2EsCXafvSmdsihz",
  "key10": "5tsTgAWdatWCQ6oNrHrPr1w1bkod9Kw5PrEK7m2zkDcN826C7Z8HVgU3CERJKmiGeMPFWaLeUstXhDxJWfzhhznv",
  "key11": "64bCgXjdz2yUNYJbNCGoJuiSdF7cY9BB2P9t5h95C967Y2KzPJkHuxQkmoYGMdCsY43nbUXkoDyKg1MuMmmPNkA3",
  "key12": "2sDM3P66yEfgRCNUN53b9cV1wr1vVxjriKSGpK5jg76B71L1RsDwZEn4kPVYCbTuFPP38KrNCHzqMpdjtPCiuebV",
  "key13": "65pwMUwmG4UF6xJBCRDeaqbhHHdsq8tHRfXMUqMSq7jd7SMLFzph1do13ZogmnugGwffe8XXafYq6wZpJxAkPLQv",
  "key14": "5hnNcTPet3LLH8uDb2sBijQ6JnmsTHL5m9korbDwcWP9VW3cXCWAg4xKKrN3F6Y7JpYDTE6VZeTcumyrbJ2jp574",
  "key15": "3EMK2aVtA6fat24UnLBp1QHD8ez676bZaJfemiDAe33u6ktePKnDpvuC6bA78WGyRd2HLnvDAbzpFB98XjArPK9V",
  "key16": "4ZYtZYxe9dzuB5Azn2VqRgBrzR2w1hf1VEBe9nY8xKE7YL2oUuGWLmq1AoiGSorYDr7Cdusqhe69XBJQ1S1BhDBb",
  "key17": "3m25pudRcphv44pFeZ6mWhGAwSYwahPpcEUc6c7hDr8ZzFDiHaSN5tqkXnxqaBpsxYp1rF74fLYFipLbPPCVWNvR",
  "key18": "2MfTnhidydNfKbj3pnnkPeNDvSxJyMxkSpnxYtHPvyT2kfGX1dXAhhn1ygLcdSf8WGUk9UpX76L5nWVBaC5C9ZRT",
  "key19": "51j4HL4n61JKhMgyQVfLBR8t1LM28Z4qbj81JNGxSzzKbAZeGHRBNWnrunnupwsMQfVLRboB3HhuVEjbMnLbJgYg",
  "key20": "3fbHDbZqiT25QWpvNSCwFZTuUruhzVx7ZWzywrHhXkCE5zkeLkw66utkY48vUHd21YvkcGdwZghKrpf5MYT2QrWe",
  "key21": "Ut9iiRFR7jA1CUMNZ8vWjqurcyg2BhLq7zhvNMiydx8vxMou5bafnN7eXxY8SWUzs7Ekbjr1SDm5ht67g7a8Jf2",
  "key22": "41B5cDgjoMD8LkjTGUujTdY9ihcUQWyM3AmnqGtKgxBc2siMQW9L6qixD4gpu3Mtk3Vr5WfQj24pqbmSK2pao3Zb",
  "key23": "3jaGLgcrunWhXe6KF22WTbSxJS8iajBfFcy9KiWjcyGyM1ajhZeuMp7J8NbgkSj4hCfzFw97QKdLZy6yoF7zgdSG",
  "key24": "5xBYgh1wphEvr2XJAfpqopW8QbjYmXU8WFLSzfUfxnDd9vShgMXteF65ZSfB2fT2D3GbPxvuXbzKsRLm5sLV7vr6"
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
