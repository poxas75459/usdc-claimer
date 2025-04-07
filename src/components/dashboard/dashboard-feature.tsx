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
    "4PGbcZ1MJcvk9kyzjgFduxunRwLoJVeLePGYfhC8eVvyc1M19Czbb6Hvm6TF1FQMfvStuvFpVzvhmd6XraGnoAjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yP9JjTe4hvaSYfgyqUFnsh2ezQNcM44vqdL4MhkvTtPsTWUdMkCYH63bouvhSUBJFBmfZpSaMAWykdJW2pRtidP",
  "key1": "5aSVBht1YugL4LCkby6r9GNtGKLaTfBfgN5LkfM9vE1syWzLbd4vYTPVvYMS9H9BSQEguXabxZSoQxrfoqjiTbAR",
  "key2": "5qts2n42GVgVKmBF1bXtBPkkL3jXfeYVMcVndnr8D5KKzZ3JbS1ZCds21R4sVkXzNmSqyhToJFtMPH7KPtZeGbdw",
  "key3": "6SfhExuYnJUPnV9ZT187SbdzCm9pjzBmbJ6NeV9ERHdv2UjeApK6UKvmr4VDvbUjpxgAMQTtKP5wk7pzWZdJVrc",
  "key4": "33rt5wgsmYXQpQCWW84CjfkvZNjabuB14tpnsxcoCB1nNQYvNQSD7geXALBC2tzn4pRCRn7hKGy75EcvS1TYykR6",
  "key5": "24HCsso9x9Giz83kTt8CibAset5X5ydbvx7hZnX6bRdDFpLB7LL155s9szGkz2en4JtrfBmJnYJRTuaoFZvoGjfr",
  "key6": "4KhjygA5ASsbTirc3xpiDguGmqua2T49HfJoiZBMNi9qZ1LduBJAbYzo1g5WtbM7g46eutQT78wuRRsf1TzainM4",
  "key7": "2cuyYUr7XjTKt6wytNu3PGzQNQXCUKsGL9ygR4GMRWJCSng2ErdamzSuZSvksZfNeHXBXZkJF6tZwUgekzfTw44d",
  "key8": "3eCazE2Cj7nioNkwGfEaPWLMdHnSQxVx1DESQwGExCQ6nuUJgSmdCSm1Wa3PPdR3JrXbbN1kyT4jYTeVAaW3GQZ2",
  "key9": "svfwMePn6omUfYRh2GtN76SRrFYttxFzkoViQpQmZG65shioriyk5Tv64X5WjP7DSWD3rMm8FpJ6itg3bZ1DY1p",
  "key10": "4SsLer5GRzJiYzNhwAQeSc3mYHbz2UVxFnqZ8LXpwnz7Jf1exNxAg5Rw1nBfiQF6WGmmELrE2dgnscPzDg4ArYdb",
  "key11": "59kDDrnGNbxT2zsYoVbhG2RLxX8RdKCHTVhdWdwmrBmVxPrZd75hnNa7ZE4vkAsxdLPKRp8NaUvji5BaZ3swCY24",
  "key12": "4R3V9C45CfuyCTMgNdCGH5EP7vMQgzfobvAjkxUgiuoC7k1gsaqWnSR67J8FnhmXLrBLmEktyCxUbh6swr4JdQVT",
  "key13": "5XVNgcZo3jJXyH4HVmdDqA5rosy4CTeixFufbRuhRdK6NVqNrnRsLaTUEwbJhaz2y9JPiNgZmQQSgfTm8zy2CQJ9",
  "key14": "2q9EBSPcNnDagq9yd3EWCD9XxbbdABiFavM7m5DY4Lv1daR6UJYLowTCWCcq33WuYYi55mMoZmqDbsRhaZcooyAq",
  "key15": "z9J53v1sVgVafZzyuy35SezTafAWBxzy1MpTWS4sVbGcmLKQaan5QtsEipFZvNtJ8EeEQfiYbSHGkGdxwGp9T9Q",
  "key16": "5YNwBaNWJ8aCpRQmNbpn2Hb2g8VkXtvWizUufFXn6p35aDyyhSRyPsQczwjbmzKwYAA395o7KezVLKMfviRqR9nL",
  "key17": "32DqfCqT1MHnGE9pYSNn6sNt19BmtJH3MvefpTK2K8ovfLgGb5JAWhv2Bwg2XioWRfNdbf6gFSXfANY126SMVBVf",
  "key18": "3RtwrfG6gAWsBQMDJeRzgSN4U6WAJaWXPuYoTL8dRfH84aE6kz6FqptKkPnxxBDTTfU4wARzHu5F5qxgwmPzKWAz",
  "key19": "EURRx9azQs73UxZ8BD68dZfNii2vyBa4SWugkQThrmhbRA4ZT2ixY3xDvQFGkWhcG1YZyL1iJYwcefGCELsuQ3J",
  "key20": "5V7FrkYspqpQQ2S4JRpANEv8ujgkCvx675YvkzGvbsnTzv337whPE828G9CBrmzGFwVuZfEhfTTEHoNzvrXJdVnj",
  "key21": "5SKL8PNewvc5BD9zeYQE6gE78sV13rEGXir8EkYJ6Gmquq1Vn8rixREdR1YMKTMu6RGypvMPNWv1NyAHhRau9wb2",
  "key22": "3XrLnv13urcaxyPKND3oraata1ivbCbyJH7miFfVohwtQ1RpasTHRpRYejS8jnm4J4sGNnWaVauySkSgPpi4spi9",
  "key23": "23BmNdoKaoNorR6Ydk2MXL2pozHVwJGpcbi7pt3AkCCeEpEVg8ugc1fD9GtdXJArfC7xU7nEVzcncMwbyhKEAgBc",
  "key24": "2Nd9Fzb1bFMmKmW6NWuJyDBjP7rgC7s1XTurhahjgan6eesfJqbGdUum22oY3fHcMXAkqy5AhySwioG5Ya4L8zsk",
  "key25": "45KgPrBLiEs9BEmAhCwZFieYwFZ4yBQZN7bkWd1ZCNhZBa4Rv9yQDCX7JWzA9zN1er4PgYUqMTXuEpJXc5vfWYV9",
  "key26": "3iJeDYgSkPUBbALN2cAbphAq9STyqJJxZ1YW6cUKfEGsbgTiznaqWm8vyAYPncoVVm7fVzW562f83BHuvjHEYTTy",
  "key27": "37G1fhbEzzyZaHp345gw3EJnxXyZbVpcrdDpEanHfvGXYkECsjcLRddZxG7wQE8r3uJq3rFUVqGmysCzJMC8RtCm",
  "key28": "jemcHxazSN1dKN1ip5BLFZGSz1nBc5nnm7vS6mCy6EfpapLuFQ3Pfug7MLLmdcJ5ULA5XytqxWhf9EaffQKiQdz",
  "key29": "59UagwUSDm86rKYc7GQWE4gC321uSpdSxKCDMstNmT8CrfD3XKqhVeGh89MigBXmbv9F8CgW4zA3LSTtau9wgC86",
  "key30": "4ytjiuojwqQaxRRJWSLCU5on8idDDLHfd6YMnr4UEdc1kSpKUZLXi9CCZaW8fqTFbXB9nM91LzWVzmr8eoJx6sZM",
  "key31": "XqRxSYStmrEPGGx9CrDGqTgx7HwUCeFnvrjGmN3u9JvfNoEAMxE7Cyh19ZRVa9qzMp63QzTA1gUD9ztVWV9HiS8",
  "key32": "2xuXC1nVHFR9gEGcRCgHeeuy7kMjyKNuTKVMaiwth2rnwiapza7Brket6bjptM66jritWT2x3Ris1DE5CbHSYE7F",
  "key33": "1ghfr574GSx3La6vZ6ctAgHgzJEagRGivL1F3EExxDfwvwSyyQ8HoHEoZNjTu3d5HTYhSo6gUn5bwrSsxg99M5x",
  "key34": "4Lz8oeVwc254BZ2xK9uWtTF21ywMDEvdCzGkVG2T7Bo5fRskFif2tFxHVgWZHcqYeBmME3mALtfKXC78BLmM6Q8y",
  "key35": "4Kj3tJ2aH5GchFZ1b5JujUNWKBGKkLCkqxBDQkHRgbuAKLGLYD17uDw4qYYFQRksN4cNT8xhnU2hpmTxLLEPT3pk",
  "key36": "CSZpPUNx7MqcoNLfWsYdNUqwmvEFS72hKc1pmH3bewXfzz27bWNeDweasvqrQ8z5F2tNUwDKWCojjCXP4GGvAj6",
  "key37": "wtdtioBe4sSxoA28Yc95oc1NuJj4PSdoj7GH5bdUgyKcW9XKpgxx91CRnjsKDcjApBHjK4s7VD1a8mNtjKpgoL6",
  "key38": "3MmD1YxXwMjHcDFsB1NUcsZYjvyoTQQNhQRHPm7rhBPqBCPVgVZkDjQn5mbezR9fBhX1sAKFztWUqosp5EdG7MW5",
  "key39": "5zhwKj1awt33PG2d3jD5hNH36svgNRVoDfCJqDU4mjToXsYBV5GDt1S6J8K6C6Gvrg13zJvCPzxZAFkwZ4ncrusa",
  "key40": "2H8zAEmHMsBfALqzzdkaBRkn1upgiTVSNU132D594CH3fu6FheqRWBHLKJ2FoaGLhopY9WAqQ8m7druzJ7ESGMMF",
  "key41": "DXVuAMRAfqw3KhPzHeCQqb4wPHR2MWHRGWaP3n8zRb5dM95VdEt8y8D5Qab8FHRDz6TVHrY57R7GRtaSAtWZ1bB",
  "key42": "275LyM88Ey3s1KuBiQEgqYR3ofVoF3KjJ628uz2jHP7wSFPLyoaGRMYvVX3h4vXCVxtbF8g2cDoMvaNY8sS5tzMy"
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
