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
    "yP4sYdyNhcUcZtY2mCdhYaVtFz5kCSgJenceSuhgfDfQUoxPwGxonJDjQuAE9YLFMKWFXV76k4HHjMwuKx7eJAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28n5YQnuupwutwbFijBisY1hxoKotmeEV9gc1WY5yfe1FKq85aWb1vfLyWY7AgiNAo8e1b33MfQf4ouQvJ9wH6KW",
  "key1": "5QWeEYUFGvQr53HyGzsPvmmJrSpncFK8sTG1ninAqFgSv1VDCWkchXuFnPkxzVRsYUmYSDj3D5QcTcbwmSkzojFw",
  "key2": "dg3Lr5e9u5tYGsCzoDPvhaJL15B66ZVAoJypyKgB6EK4Wv7r3k2bvsg7wRanc77ND1cNL1mVcFnYCHNBvChYG3t",
  "key3": "3U1dFzRdMSQ44rjyzEivJ14F6HCX2hW1h4386XAfnrZ2ipoxucsLg6EdTAbJmrbNWAKnG7sR2Wzdf4DMGZQRkmiY",
  "key4": "ca2DuiC3Hkfs4t5FuiJtqCULrYyfrw7GnM4ssFt4cXtsMzMNgHc8AyjB88nNncQN5NuEyytAy1kvytjK2ncaaYN",
  "key5": "3DsGEnnKCzi1j79V2WJEHh6PqmhixJhfUvEkfi1VQSYsw1RJD1fdoHoCbNe8Et72JbLBuo3GJKFQwSePpBZPbU51",
  "key6": "cXezpEdSACF7e38M7tN8tqwKhmpMMicrckH73VpTgcPT1gii1ty5qu9ZkAio2VTAVAY2TbrsSiLca45mW59nubh",
  "key7": "p3yCJStPfMz4E7Zpq2afzVfk2MKFfWzotC7WX3sbckp32f4ZpEizKNmg7EMYi5gPuifLuUzjWNjsTZ5yuL7QEE2",
  "key8": "4m9SHovvjsexZMa6pUxezAbX67msMp1Bz8VjPZTVNRjc5RyCnoFwkkWWPPWvwMP2AA7n5WfYMc25QDjUZHURjY7",
  "key9": "EjHsSEkRwSEpMTcmGg5euyJwRMWiH8PfHcHia1KhhA6896bUVcPkJBfH8732DYTppQJTBtmDSpKkrACkvKeExZi",
  "key10": "3mUsf6RQ5HUKmGzou2AetHKLw8DEuEuZmwPuH9bXZ38Le4w7cUDi9Cg215khBqFC9cA3Bkx6cB3fVKG54eaDXJGa",
  "key11": "3L7kyPm9yf5DLrqwBnAww4EnfcSqqCk1gvKhvbae8xB6EogfvGBcgbTL6LuCrXgceqZft7LZsFrnyjpoggubJ9Gd",
  "key12": "4LSWjqcXGfP562HhAXXcxE4JmBxqZY78TDZRWycLkC6NzDqna33eYx3r9YFxidED6SNoMwMsnMAXy941czHSRt8q",
  "key13": "2YkAKFJBUbZCi4ms2okKFSkAoXBBXYTXuvkVXotPXxNKGg2eoYvMgwQNYfiYYPWva6LXKPxRPViJnTXFZgN5K2C5",
  "key14": "4P1KsfhwKPLG95Kvtmc2YDM5RDW5BeMdDntypxKGV6bSyMdEBHTkxWfu9SaqckFhjVT755dM41RtWfHViF9vmJSG",
  "key15": "3YzuHyVcsgWwki6sQWzGD9djUe86r3UHzbGtBaLN3F5gS7QViGU7tqtg4FYSoyrx8bfX77quD47dSi1JjBxLTXrd",
  "key16": "3btp4zvWn7ADrGJsCkdZMPo166SY1v5mBFjWVQMhRshKoVjWuB6fDgMUtQYKhoUprzbHAabSsQWsT8SfSfyszUnk",
  "key17": "3pDsu3CE4xByjsTUF3u5K1YVQgmfahk41aWePXF3pWjR2AZZgCiuCtVuGh3EAMwpmx9k5sXL4psKdW3QeQudzMkN",
  "key18": "4MxUQkSQY8KdVxV9hF1NTH9vYd2i1MTa1TuRVSa5xM45yKGEPTLgf7R6wBt4R2PkUQBaHvSzHePmto6VGtuaDicz",
  "key19": "2TLD3a2etcpF1Bh83ps4gRGWFyovu9z3Rc4DjqMbCnTgjZcPHZrTmiiuTa3U7zUAzEevAQFaRpqv8N4qCYmUa47R",
  "key20": "3hzyhrJqi6MzD1Yy5uauTvHYJrF5JoNSFg8Ec9R8nEs11pheXw1HJh9VtoThmZHRRtB93qwSXd56URzUx14636EU",
  "key21": "3Ncp4wL2kF2NpCK4ntK2LgbYHMMZE53qCERQCbgi3Q2Kn2XpgBHVS5r42Tp7CuQtRsumrj8zijpuASrMDNxzg9Ax",
  "key22": "5MN3iHxfjCLujbj8aDsiXP22EWjRv7stdkevhm9Eyu1HvuaukwrA3zhatKEuecW2kPyxRqJ9XxZuUybSy9WsUk6s",
  "key23": "nTwjvTPqmpMPFnybqYsMcFVepTLgd6hjgLVxrKjB6zZnpEaY8tmeRHiDAjW32McHo3sq4dsfWJSckcAd8Cz72Ja",
  "key24": "2L5E6TvWi9yjwXDD6Yp7S7bAocH5RzR2xNoKYP8YwjsYNDk7tnZWqaAugFNd7wdKGghq7Xn31iM82e4mjEW4BZpX",
  "key25": "qVSSCuYshypBQry5vxMwWdyNzXuFh89WtvgtAUZKQyDrRhRd3b4ijB2thPUUcFBWiotVm6eCBduXnoacLcvf3LN",
  "key26": "2Lj2q2jf9jY34mkZ3NwAJ5PS939yV9QuzX6Wzd2T1pMfSrsBSY7EMkqdeGiXCxRpgT1ZtAjmtHEARPxCEi1fgGfc",
  "key27": "5Bfn1imABpMV7TXEqvyMAzXZQuqaVjPQSEfPwQ3RFYjyL8dsuACWVgqVPa9yPjZcDuGgTGLZGsiWDwshV2mqQbtF",
  "key28": "2GSxdnvrwuXC9BPAuUUvKfAugt6r5SDQjbWFSEm2snN6VWKPDAfw2bwsATTyjPWw1ScEyrDKmcvdVhHcPbH59XRT",
  "key29": "3RGff3hUjKdzAjF8m6zsAZQhLQw3RKX7SPvreqdhF3fk4bmRuuo5cVajCBEfB5vpVxz8acn2SLTEoLsMqbh52Gop",
  "key30": "93sYCtamvyHE7Jv7rbYRLuLd5woom5NHVUoGBRyjKUu9sbUNVq5Xd8JUpwFT8P1cZyKE4iib2XC1rX2QqzARGu3",
  "key31": "54AF5uAcNdZw7pbvzNQJJQBTkcJiYBGbArDC6LFRiLMbyo9DSNuc6sVvzANtQhFsdNqirtpeZvgaCuLU9qWNUMLn"
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
