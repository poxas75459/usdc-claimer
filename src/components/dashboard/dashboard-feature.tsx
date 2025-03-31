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
    "2ya3DjeBUoDZQyMKfHfKMA6mYpSDfhWzzX6PTwebxKS8dM7HkdXk2SAYY5rwq5wMLiAykEsfn5So6jUkMJM4uwLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F2YmALfaY5oEMT93kmiHDrzpagziWPtTrfbYS6AvWCSnrQPPaLLuHaopaHo1iRpWCq9x5micnwNDJzjggVEvXbp",
  "key1": "2cp7nheKuvCouDjjYVEPA8acwPj7vmTGrgUA8HEVz2nCRTyBXgZYAbtgBMLttjfGJBWPpNJ3nuypcDPRAf78HiWN",
  "key2": "4zT27zU3xCz1dyZwd77FuUGXSjmD64n8cUVThAgBqBTRsQKhBmgzvhKMqUEL27j3jLbCJVEopyqcKN5TFB9Qpd8",
  "key3": "haDGZ9xtT4iffckYi4NyebrhBAX4kWxkgqX53S3yLjkoNwkxCrGLNdbAdaQpGbbE3sscWkpfAcbc6cxHXqC6UP5",
  "key4": "2RUF9TRPBH5EYF1nLsFWMA7yMJN66SfCx9LRaGhdjHQEcs5WSp7oWwiKPaA1asnJxHpijJsstAHdo5zjjntTGTxF",
  "key5": "3f4mJy5g4b8Ewwc6dpRU3FAaQkjrd1SdaQeadqTtBGBNQBhSGWG2ZFgGC65FTZVssyQ5rjhJbv8oXQUB66RVHCWr",
  "key6": "3GrdfKFQawLnVdGegqrY3dfumbJHUSPc8FS9mN3aiF6xw2nqj1cN4ioe4as1P9nrMH4HQF3VcEPHZ88HHMTTAz7w",
  "key7": "3zy1zDsgdoatioKRprhG9cigSn4XAcDt4WqA1VovZYa4AwTGCXdEJXUfJwYoDQkVJwHBdwSGksy3GNuLgHUtfrrT",
  "key8": "2UwBobyKrRFnwhF2qsBSRG7617RgSfzBiWRVXmJBUA4DQMeALWVhap5DkLMBsuGJtLY3YUKDWGUzyWCchHZs9iNi",
  "key9": "4dPGwzdZQdebawY2NLBfu6y77wN6PznwyhAkp3NHiakiiC8HeoHK1udm7Gu6FNTtvEGxtTYSvHSenqL9Gbbh61Uf",
  "key10": "576tmTjP6ZazNhp2tZXvqHAfeNPyLSfBFenH76pNBAXa3vew81dqQhrkUB61grFXFznrzJFFdzJHLvQXuzkimK6h",
  "key11": "2HBKGBRHWmBrUoQyjqHqF9G9zommKJmUUF3K7Rdv5Ct7JsYi929Rtug5Cw71YxAQDRCmsjddu6MiKFFaotW86uMp",
  "key12": "w29xhX5R1kzfQvtKro5zxYXumYur6KMZef1Ssg9FrsgygdrSfgCAzn9SpCHqTj4NaJ2TFHoDruiHAhnPouqznMk",
  "key13": "65s2bAhcZLFVz7pwQfk1pByZKey9WUjfq4UwDrm8xioqPWwmeBKujJoaa9PQsNUVqZyyBjviQobbyCPz8aPs1JxE",
  "key14": "4GdWyaff2U3cm6cgSrxramHLAYSEebpfyL9hFYypKCH3qastuMwZ2CHoPkrsUVjHBnJe2bk2hgLg8ck1tJ6Mv92u",
  "key15": "3yvhECyzk2hGgQ5QaC1KVRhRzQssUVorJjg77s4skGjeQe93wfwjQsoiyxSQ7ejt2ZaN4NTUGPhxkKbNJWmPxQ5Y",
  "key16": "3rWVqjwKpbT3yPwKiJ86G7dsKMeybVMcbpKp2D6g24s6XibFokVafEsDgXCsEusGERSaMZsveBjDWeJLka7sL5Du",
  "key17": "3gokCr1SFFNkCMeXQzu2touHVwgN1VB5ECatiZ4zXByQxF9g8ZPKxwioFPvg3vpiVLM5XWaYYYLtmZysoMZC5TTL",
  "key18": "2Wny5PfjVohcKypwomzt2smiRQBFFeFnHY5n7b8phkVkwU58zW4m8mqLScDMKqRHXPBLAn3TgZhomdVqDqKn3L9t",
  "key19": "2CyPpEwzYEDbdCuZUF5MuTPoPuvCKqMibjUmXCUViEXsgwfh7PkqfvLBJmKpjVBvG4UVdAA5N4ZqQtRmmqf7FtS8",
  "key20": "5dHQ2obAakKrWTXWcH6kT6cDo9NfvukizWDRQGJWBfW5kk9beaayNu89tKQZ5rRqvCGjdvJfriUMVkhw3PNQZGtn",
  "key21": "fYFaoWvvNsFh5ubT7j59CvQ5Rk6eF48oHEvTgsiABikq3KgaHDVQefud1MKse7LuPqbgL57SegcYmcWuFqFUZQh",
  "key22": "5v3QATYqkKD9LF9PRo354CSM4588Xx2vEQMzqkkBcad25DXuPtf4a6Ky8zA4uTgNRFXgRTiYW3a1fkV8ty99yKC9",
  "key23": "4xXxFytgAkRtWZHHsckdL8hS955TTdUrxFEsQygRpRueerQnr1aJbx7tsnbzT2K2azzYLvFD1QwXF1Hctfzh52QG",
  "key24": "42BkdL18NzBUBeJorhcwkCcqizNuV9gArzgNGez8btNYLHKvFCCmvSU7FvnAT88d4mTC9CZ4ToPjmYnBWCvQxPxw",
  "key25": "234MbwXkqWrA9mKiAwMrS5aXHUU8FfNqdMvfx88GMJtbBMRmSq9vEUUZTF3ZcLaxQpcDpzRWGs6dmPKWTST69sk2"
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
