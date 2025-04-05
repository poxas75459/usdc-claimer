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
    "ZfgWHr73sRvyYsnfkbtn1Nm8reshasYYrAvNq3Qi65QEbyZer26KmxH34ZxGiDdnoiwCokAc9vKDGn2fR5f2LX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dviee7LJLc5gm8juamhShhC3ZPQuCZ8oQdhDFMfMzB4p6JXF1PJ7329pM288mKNsUhVEKCKTjthJgkEiFJivWQu",
  "key1": "ts65mpMJX42yJmvZBmnTxriMxw4j4Yy2fdWjb26gakyo2mLgqeMoTMCjgiGdmsQ4Z9nJinFSYrooVeRGpE7oWfZ",
  "key2": "5cEj2e9WTWHTELz523UDZXvu1574tb15spPYm3aALBvVXyDUvhJbwiZJaDLvAqtteGLSkvYNLDj5ECwTyVdm8LdY",
  "key3": "RqFajktkStFSCmjvxPamrASwordWhcRpNzSExHJWeBVtZahcuGnaGKL3awzmVVFHodFLRwPq3q4pbAHyixN1xhF",
  "key4": "59QPcCDZYV7xLHZ9VR3z7kWT1CbMyzkPmWn6vVfaYKecQW2vunyqbzf6C2WvqMn5dazPZY8LHjGb2Xsc9saMXQiZ",
  "key5": "5XBcxE5ofATm7t4fN8HVBuDMHp4LaZ7FPFFTL19YG42aGVrDi7wVpBvcZ7tL59CqsTkgjXEeFFq1huYf3FJX59eh",
  "key6": "5L1AEtS3EwzbrsRGgKVCnUaGpZdVKdd3WTPU7qZokUQ2vDtFsmxQCv5TGpRHiK5hMKcpVHo6RL5BWm8iqi3G6neg",
  "key7": "4gytayctKeamiZcsxfMjZiaqh4PzPsH3eKThS2riuFoEY9pcqHzso1azSKG7B8Rfb3b69zifLToW3ESNnowjJKC9",
  "key8": "VhWYDsLoPnvPiwm8qeZsCuN7ELde1iDAV839s1ez2YbpTFsiJoFfGJJkk44eRPbbmTfH3wifYijq8twJEcmxsh3",
  "key9": "3sxyFYmvEdqAa4XFkhkFwWqWdLvcDN8zTHBLzo9LH93MioBv2z91PLKDRTWVqmUpjV2hTTJexvy3V2XGXwZ7apzG",
  "key10": "4p4VZfnwUYsnFk46WxHP3YkE3MW8vSXD7Rmt9XuTnqwZpjnt1XDETWRo1vvN9Du5D9Tm4QHYGMGauEw55rxC5iqg",
  "key11": "4M6BfiqtAxU2jGM3GZZwgNwA31ZawBijyqNov9Pq4riQk4jNzgeEsGeZQhTz7gxzJPLvqVpk1S2hoogLyYN1sMMd",
  "key12": "YPhyZGnNFedHRCYXS75FE6VVp1U6wDVgo2rqWQZKJgQEPMSzFj3b7aPjPTmfStUDhuF33NLAZtUwgeH5coC7a7R",
  "key13": "4VeSYF1Dr3H4U2uhLWUobJhFQmcYT6ZG5aEGBLEG5QeqS2Ln7JZi6ZAeVUwYETadp9sn3n9UWEPEwVKKDs7ULRPF",
  "key14": "56ztDctxXBD1aAd49aZcibGDMhX9VvxtxKz2KfXeSUKGsY2USGnLT775HmjZzMuc5bWZ4mm5YbAQaPuBTy4NF7Be",
  "key15": "4AX1J3krfnFfdPBTtRPJ7M1HnNQMEK6S7zTUvGdUEqkrcgZmkPSdUA9nADq8euyfdm9M7KYcQaEgBXnNdfhsLkvM",
  "key16": "cuvnTFzdNwkCfbcZo7LAhKvmBPU7fyod8BaVtmMtZ8xscCCMZ5Cn1qhaFVoiniwkfx1q7Utdi3woyFLEEFcQqWD",
  "key17": "4CbWo1m8b1Neo8rJRQQ9RBj6t2gDYxvdSteZsNPMaMKgSKPHsWvXmXL6nKi6pph3GpxTHNGhvNynFjiaBPagdSXD",
  "key18": "4hWqxQsxvNPvc3WJZfnWFXyux3eAhSyrqtbxAUABv44n3X3GLCdFKou2bXApaEaFUyPvfaETz4swngtJqP4dCCDJ",
  "key19": "3rkuDxzWngU2rjPrA3Pb91f77qKyRXqtsARjftqv1xQjexzPkLZTid6JR381MU1VUWPE3rHhxWWg4yKzVYqvMRJs",
  "key20": "4FrbwQuHc647qJ8tFoUrSx4q2n92JBfKKpviTZw1eL64QeqkywNnU4aSGykF1byNcQx4qQjEwFPnMRjMbgbo5g2M",
  "key21": "5yCot97E8BMGZ6gUeqSU7VvXKc4L7z5RFWAh7bfLqHMs4rS3wEzQ6FaQF1zCWy4ZLsSRhzyVVJTiUJQJETC431BL",
  "key22": "3YXyjyfr5HHUgoeAVWjnXCugFJsoNwHBFLNhsJHBEPfG6Bnv4oHdRXdnCzZa44iVJPH6kFkMpVDKv6PMSXKE9vCk",
  "key23": "3GxyxwbCXFDKfnoXwVa4ZmgvxLZgxvc1AbRBJH739TykG6AvA3UwqNYP4XV3a5Wv47LJsR573dhMpmvCMS5PG77N",
  "key24": "2s2Uk7yN1ngw454ga7fsShd1R3oozX9zzFxg3vwCXfsCyS3dgLSFcdFToZFYA35Rcgd3kJEQAPKyz6sAu96gE3z2",
  "key25": "5VHipvaqtqso1aenVeLNcUMTAa6icSjbFuZtGrei8ftnn4djtNhtyL3d1BLbAhbsSsedcYisMeBQQUbSoznm9P4y",
  "key26": "3cWokmonYTruYNaFK4XqPZigo5Sch6X3tzjHqVhtis49V15mQByqgiK2Hmsrqsg93U4jYy8bVodMmq9ntqfLB1dX",
  "key27": "RYv62z2hvx8eZEbfmyDEk2RzdPpBoR1UpWUeUf1hB4ukVnxtaPPzLdT7B4RSX9YML2TFi5naLpXEdAXeKn9L9WX",
  "key28": "2Kz3SHHBgGGZb8Jphn6cKUMTqughiPSHXzvfBD4w9gn9ea5ddvKSt3GUpGEY1NBB1QJwPgDWZRYXfbj1PC4YLbQF"
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
