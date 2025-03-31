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
    "4u8LLLTSrK3xkF5H3ZuRo417XZftstqk88hH73fha6NntyEeUcRy7spa6W7Z3119MvKB1ebrXbZdKW7Ptyfwdb7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vi5a74wQGcb3kE8CQk4NMopw5SeaZQuY1zqNwHz98y9Krgtb6oLysC5t3Ra71K9WYVDWYYLSVZbNAgq7b1vsJZ6",
  "key1": "MV5x8iYS5E9ptFw8nDjNAE5hcwwm5dkP1GaYbSTtphLD8uSdyfHqEMRBwCkP7RnDbAimFt5bNq8wwkPrQJvMXyv",
  "key2": "4scLv6CvHJacFPx4yztoL5JLU8ZUGiMZaAqaSr44YrPVMxYVrDYFuwTrQ8bmxA3552YZsnfhxVHqSNi6yHpoQeGW",
  "key3": "4ddoXmS4vRW5F4SmzevVxgCwHvEc77449kXCrmfceLXv7UPHAxGWcQvEd3AeGctiZnBKaiTufn1ygScaKSEcARgv",
  "key4": "5GPffqXkYUPQr37KiZ2Rjw58spqYijmcT3rEnRb4ZBGsJ1LZMaEUcLqPU7GJcVthDp7cpc18iyhrktN52v83qLT9",
  "key5": "3BtKkbpf1WgRYSZLypG79rDHe8q9sRAh9k5X73ESGmuiUdStB7GHXe3y5MnbPt8KQjvhCovsZgRjsQPYuLNJNKTb",
  "key6": "3PUxstZwQob6YtfxWTkgevrexoTJaUWCbNLmEXMxy2pN4hyPzdbeRWDJoQbnBonXDLy8omeysm95wgSYmEpzNnFA",
  "key7": "2Egt9EMAghYDdfFBSNZnUsBbwYF2TqpjEyvpb8xCkWhZZ43bke7zR4N5KxyHJ6HhFrxaTh4ktDeHFzPb4RaeJcFk",
  "key8": "3ui8ELdTVg8Zb3CMuXjTagjMN4XC9n5DJJj3SReX9gEQkNtd1zGCXWZacuVKaJG2WMp7WfMyrN7B1ahX22W98JMX",
  "key9": "63w1XcAKDTeFYGtRAjYxVoCNzJ9dypFi1fsaT8Ssh6cTyaSkiU5usDndy6hm2Q7d5vGEa6SA5iXTBNv6qtGXXnLk",
  "key10": "2ece3R4PGkGhRz838v5vFiGB6THaS7eKN5Eqr92ZcTPSs5DhqNsqhhAJ15DemKujGdWmDdA3iT3Y6dXTjsF4RZ5Y",
  "key11": "5je3recAK9F6BVM2ZS66XuSbiPB4fwasPReTzARLvk3KKQrXdvTCtDiwoXTbMnpPYtoR4cS8jgXMQUgNKugu77WD",
  "key12": "2AnboxgFgefHUkhvaCXZ7M6GhSTAxJsk9pEMYAHHUwipnyLGamvDeYXxqrRXV1FkRU6XdETVextPMiL3iG1Tdwpy",
  "key13": "3PH2zwCJVpkY6p9suEe5bK3jiwKNpnzmbGZzU7H4UBsxUpn4zucSo2SrgHdmW8GgLkpcP4xZsLgpnFMJTT1QqCsZ",
  "key14": "2vqbkdrEcvgcCF5Lp5vrDLY7CYFu2dzjeXihPa5Bvgeb5G4SPGBeC8DRBK2E4cd2RA7MXZSGvUqsABXxJSuahMXG",
  "key15": "555WkWAivQrznn6KcZ5HnFwB7XjkojDgq3f18Lcd5KGCp2CskK6XwgNdETxAFCTpsGN19ExPVcJToXAEQoHoY92",
  "key16": "4LqwVuJFLJ97zaU6E6z1QJi58ng4CY17BixUMTgSGS2r7Nddz7LpSSquUBu6J6NwCAuPmWswLR12fq5Skvk2GVhU",
  "key17": "2eeDd3QTEDRkPcLgmMCEGfWCcNVbDjYMVDA1vUb62EkG7JZvbDSz9rMRrS1nJGiExp1G6cZwnBQitzy7E1esyy6a",
  "key18": "4uKGGxTQYFYyEFJGxQFkMdqurWenfkreqWdWrTjxqiFGGmtEo9dfDrcRRV45FghKHrwtnh71Ldvik4wroWjXbdMA",
  "key19": "34mARva5XGMMZuF86ctif5aqKzG4bTJm2KPXxASFPLZ2MECm9JxbayN3ecTeoQwKAd3eb7DiSyUu4SeC8DqNyiQ5",
  "key20": "429VidF8JkYvxxhMopm89FUVhzH6q1rtfyQXEm8FdydaYs2nKoHjb3VYxL3D6yeRoqJPXqyntXp73yBggF2Qa8BX",
  "key21": "2gLmQ1haGPVGht36hp54qMSTiWhmeh6mRYGyUoY1iy4GCoJ21dkXEeLhzppx5zAmXQdQWdt9MxykFAKU9eDSMYxu",
  "key22": "cm9DdZvB7yaoR189p3EJA2UR3ttPg7r1RVGMHnCPTkcUyyZnPQwxbLHznhnNUBgfan9iGyUEPEzsQ93jM5gZyvW",
  "key23": "tdBXbry9EMB6i5EVcSxALM9LuVJdAV2TGF2Ng3mQSLHUebDxLcy8ubjpQPfDptL5STTv9CfwzDMqMPES6h1Psdv",
  "key24": "61fatPZQUyr3qWTgmP7p1bEvsgAtUXCwDzG45xXSeiD1ftTWr3p47FMgG8aP4BSYFZxuvV8iFrnd8ZBjRDYckLks",
  "key25": "2y6m1QxiC16e1h3HdUcnHAQLEVc7yqK6Nie4Hy4pwav9UvALTUbKQhnznRPHCS13PVext7uZjV67b1xotXKgNc37",
  "key26": "2sbkpXEJ8Tms9rgS87mUrUfhsw7vTuy4tL7NNuAyB2v5aYeM6z1UsjP7tH8jSLgJCkz48RuG2bY7uyuKXVm74Q24",
  "key27": "3wfYLB9zjBF7Kq3pgkx4ACjN94t5yjiHnfTAtjtggb5kSproTRZUMkeB8acPwdnFK99UbcLLmZWKDip6j4aCMypF",
  "key28": "2oFMKhFzz2cUDbgEk8vixsdRVVxuSAFksQWXV1iTXR9g2ank4vVjnuYs89cJCgqESoi51hskbgypCzZ9K4m1FFS4",
  "key29": "4996MHuWxAqKWhdvsrBsFPDMfpesXNbYeePmYu38hdmvaTyJmGjBa6mJ6XJtguK9p2VPwJGFVkjNqkLTBHKCjAM9",
  "key30": "29aHTSw5LeUUgSsDGqjvpPHUAxcTjPkxr2tz5d8rTywYmpywphCFaKi7LmG69663SBrjGQMuxe69pwvLvLmRC7L4",
  "key31": "2wuEYtAZSM5Mk44eTYNw9YwJ7qXUsyz2rNN7CjbkqRMNSc5nCbdWgmG1dZZtxFEKKPuixfKG6VWAmwBdaaVsNf5d"
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
