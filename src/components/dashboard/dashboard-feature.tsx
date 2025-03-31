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
    "whW5zCpsuS8SMpXNaXsbNh5ERUCy3LEFaw2BpZTKwddN2qsPRVt5cPPRqdN9ueMV3ACNsy88yzCGQ6hqNfrbnQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xv52t1EgSCEiLuTJh5ZNHPRo4sqqUXQ7W5uiTjMcWUNnLfABPmjmvTgktUnVdL7Q4kKph9eb9ud864qG8DxM78S",
  "key1": "cLsZtZX9ZsJ4wAG6X1VE3BRAuKwQUJqndh6E7KaunVA2cT1tH4jdCUkLBh526tmwyXX1bEuD3dZyUQpH9qAZMe9",
  "key2": "3gULtwoWQSg4iknLTQGFXjeCBW3wsZYFGXaJXejPVXGdKMfz85ZtXScq4zt1w7fsvdPnq3DyDQjuWJBAqwAtBo6i",
  "key3": "4VCJftVjWCtQ7EDVHbsm4Ap7h66Tq95xg2x3b6ecHEEW4orJjfyT1U2RHF3YxXHhPkjUxjmQw3bVz8k65kE9du3E",
  "key4": "53WoHqeRsg1tmzAaWKEqM4bUt2f8zA9V3gHJqjnqszLm5wNi5Wfkc7KqJHYkR6LENpkhZ1p69cp6vc13X11bsyjD",
  "key5": "3ujNx4DBjfnD74aiw1PbBFV1YKostJbueSdCbNoLpnDuejN6Sk5jNPJgsmpSSkayerTrnNbXWxfss5aF9egBmbSw",
  "key6": "64HfEZ7izhcy5EAk2ptHJH3y1iDTGVmKS8jsB58a23YNxTxXkFhVs3NVSg6z4ruDdxwuCJALsQEeSLRpWZ6ptPbU",
  "key7": "ea1zQcwHCvbjByq48hLto1j5DGCscnbuaKLy7Go44iSC1T4vjQcpX5fx7BuZdyNbi4oQRo2iKDEaabFsT86JySk",
  "key8": "34BLeqVA8AWYQYnfj8vj68rF76vFq9vhb8VPGYkA5Jjag89eQpdrexqTuCUQupwWTf1BVr69RKehekws62tRV47t",
  "key9": "iQRENS4FQPZjbqN34V7CJaFuE1DkJWCXkQHJbH5ghGrd9U861EupGdscdEHxaV4BC1dc2nr9bQ4jDFojmrQSqKN",
  "key10": "2G28xW9ktwnw8j2XQBwCdCFgsiGguA9tkiUR8WuH4wa7PawHQBrKQsDfcDosujkWLKtdEN9xAkrC3dZyVXzgE4mv",
  "key11": "4Z8APEYeHndGw8hn7sQBFpePfkZcpMhVhyjhttkQZ22H7z8iFBAd7758DrVAHf9jcFaPEvvEyuqNF3B2hYM4xGe6",
  "key12": "3fTUi5UtYRYBrYfy5PE9z9YvcVeXnQn1qbujqJyjrWfvAe9umJTd2fotCe6xUgfk5rcAQeWDNz76TtRx2Kq4AFxX",
  "key13": "2gkJ1p238vgH8reAX9U5zcG6zmKdCgzor4hqr94iSvp1XdpTi54Jt2gZy6nXYy63n5CwxSbWV66gC5LK8u6Efd36",
  "key14": "3f2yjSiNaGhWvJobRrwhdW3ntJKLAjYSCmAeGsVnRV7ouzDSw3nAEH3VFm7eJ1khn2Nfa4ukGgdDKJwCyKaPH1TE",
  "key15": "25p2eA4rJWgvUE7Jccdv2Xq15jd74HoEanHw9Z4cDKtysfQi48a1RTXpZi6qezvLj4FtcmHw2LqUSHsgDqdMj2sC",
  "key16": "2pffnppyUAX5UviziMojaZnZDkFbSDdNg4WPhLeyHGvzCShRtjhUaoZ9GSxu4W94rrv61inmhu3YYR4ZVB4mPXz9",
  "key17": "KB8Vty864BneKYFqQqHB4aw7Z3YmGpMLxmVsPPQ9go5AAbx6Dd2K9h6M8fG5QH8Bk1Nwe9pM9rq52a1z7NNDBvR",
  "key18": "5yTsBZgiQrfznWe2asS5dk34VJS3xS1YfL3X5iksbJxujFXGMzW1Wmnj48NLSpKAK6GPtMcwCWzUeTcTei3a6wUk",
  "key19": "52KYbmGavbq6dQVzKbAahDYGk9qmCdVBTJ5sNiJLqXR4bDswUHv5NUV6sMHmhMjTVuAKa4CwmsJVcHmAKjVbm6ig",
  "key20": "4JqWcf7SJHxbzGPrXs1K2uvVaTTGJKj3DVBdGhjAzsa5wfxhkADs4Xcn8MH9QRr36ctwCcDj97S83mF74E5b12mP",
  "key21": "49CK3zYbwHP7HuuBodKpKxsoDm4z3DGSdrt5b6K7k7FS9EY2ssMzFjFG1Um3UJET2eexkwm9xq6k5jSyWE8yKjaQ",
  "key22": "53tQisgoX4oH5AJ2Uu9YtpmtiWrvnxruwkvQZqVuGrzZYid5uT7SdhFveCLn72ui41amZsGjZemXwnMqgfWta8Hi",
  "key23": "3tGtWhwinYF7vXSgUwPAWLNZV41tJ5oE9FTgrd2XSNWNmnvQZ5xTS5UCPasQPtU2ym22V7NgyHJbB16BK8zxfBzQ",
  "key24": "3aGQ8fMMtwaXdnCCkszzPQifUeujVyFPgVioJ2oaeySAQTMwCcoWhxNo67K7FAXmg1chYrjcFHkTjr8oSEA8Lf3q",
  "key25": "74cdGcTuJ6UEKXBBzX3y2nMFt5xaTK9tBdiGxcMaBbBCbp5jU32tubxR5dHqH7F4hwbLkM7FPKZWpwRvjVvAmnf"
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
