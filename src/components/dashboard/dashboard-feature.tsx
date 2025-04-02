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
    "pV29cq6zrpk8cvodPZwUDEgvYyDqfBgtjN5qyKE42Yes7kyr4LHyKWhZNa487wmGs7StgprZ7H4rADgRjoaGoAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52gsFsXR726zkeCFYyoBNEPzFQ5H4NcBwL4Rz5WetJvwBXX8KGHWL5WuU42e3qskBNo8i6S4gwyNxKtXFW59bym3",
  "key1": "5b9o1hzYbjqsjEc2z5pUsdzkL6vHDjy4uMRcPLRJG166S9MTqdb3muFxmCum2wtkw1YgeRCopw6wqAdJ5sETSiWm",
  "key2": "5jhN6kCrL5ww3dhzZXH2ZBARcp5huxdgqTDWiDR1UtLU6w8ndQDoPEDNUZrAyZotx5YHWnH1HH3GJ6Js1L1Sc13J",
  "key3": "39r7HC3YfjsKBMGfcxbdY5qnoxprgJtwC5iN3BKu6f87ogBNnHpSUEfjT8e2THvYG2TduPn9CYh2bga6FxPC3kSC",
  "key4": "2M1RAWPGwC94d2yvvbqxk7sETGLmAnF8C6h9CZPmMtDUpNh7sPgnDiy6GC5ZWaxry9KhurDhtafxf8HJVmKMLmZr",
  "key5": "X8MmgfiDCNLKL7YGhSP9211gHE4YLQaEoreQBqnfFFRwtCT8vuPWjESdb44Xv2vdpWhLb765hbi9c8Qn8amYKBT",
  "key6": "2kDPjF17L6CBgayfbAP7vn93ZBcSfkoV881h8GAK4VxYug41E7FFYaBDnDWu6pcyGtiUCCPCvWEzQi73KTM9Cd57",
  "key7": "4TdPBMfU3KyPUMUz3Bj1Tiw8PdjHKMMEjmyR8CKfH2dD4AwZYwqTnKSLfFPXZ3SWaK9FDzbA2n6gyavd84AQPipG",
  "key8": "2QE12ZHG6GgWML5R593ztEnyHbdhj2qohQ8Eebhf826P1xrJaVNZ9133at38bJPnKniiUhYBB2KRKvPRdGK6VzzU",
  "key9": "4HxWJcNdjMs9gzYQe8bveQFkjgPfRYQubmrsLfy1QJydhAWzwa4dNxYrLb4ECDUgy2vB7dohERvP2hFYYypkXvCf",
  "key10": "2y2ApngE88m2vWtND144wVqnnzUxURikwN8dnmJJCtufyhXJshjubAR6zBxLhbKwMrsNk6bFb8jXWBx7BHQPkGJJ",
  "key11": "2wtSciypYwykAi6XmDXDixd6E3ZbYFMadGY1qRGVTH3LMPt8Ncm6bfq2GpHbpuT7G3EyDco5EAakNSWqHzpZMKuC",
  "key12": "4m4bULJUD2Yq2WdYAHTHHtLqUFH6pfS6RP3PFWoBkEZRpsYXZ9UoQZhcf7N5HJH5p9vENepNtkQjQ6Lf4Egd2Vju",
  "key13": "5UHaTNCZy7Trpp5bM7xAt7RfG7k76onuqfVxQ9Az44WS4t3Z2KACbFkeuAi5FjP5eV44apxRKLhBjBkSDosV7Pc2",
  "key14": "2Br6o7quXfj1428VZo45t5xDvFUbPNsxrJ9V9ydYMDcJQMyJVvEZ4kowm4tdtdxG6pJ86Pku3zQjth4NxJP6xSVG",
  "key15": "23YpwP5hBAstbf1MqYd3VRCmk2DYWyMHh2mGBdxciWHkW3WxRqtAw9cvZUNnRS9fknbx1LxSJRM3yyBLpSYhpVQK",
  "key16": "3o5HsYpHoGRUbTdmS7MmJZhFUxNp7vYXKx1SsdsNsrVe6wowFagKfAEjAizikABJck9ooQGNDfbdWwiifiqCmb3s",
  "key17": "2maYsiShirLu25BW84mRytdefc6sbw38KcWTLQ6fijJ6nJVAMWRZGw1jUBhmQYSoQ5FEJ6aNTfDPxErJD3RU9U1e",
  "key18": "4a5RXNs4agBhGDAoXg4gB9wnYiME2jsuf9q7RduYufQoSocBZ3Y8faHXvMFVpDp7mLNp9aogt12bLE5BJZqoVhk1",
  "key19": "28MN1edz53V1tKJfjcHJC425GEmC6gLEeYMZJj77q3qmueUSrjRVqD4WsUioNWKb4PGKU8XzzMXsPfRUBc5JxRGf",
  "key20": "2VQauAyWNQ8TBize186krtYrRNZzk2TvaMM4ZFqAdbzPUjY44jFgyiUttm6NtxRmtVmAVfBeLrPMudKE35vozu8Q",
  "key21": "2tJn1sf26ggDrmQAM5FBceRcr6EUiUDozKhDZuqcamAV7Xptaw3ecgRBMZ7Kv8YWPatbUB1BGboxypbLJxWByRub",
  "key22": "4G4znLYHjbsdEHEsGNBnCvfhMrTJL79uY8jnfuRpfP5N61W7VbJG5kkSnXaQy7MXnqRYFVxnjTbfeWkR2cYhwmU6",
  "key23": "CsKij5YZbCtVwA8oRP7dFecycVeCVgTYP4kFisWxQvVunSUP6M5fUNgwPjS8obd9qQ5UgMKn1diGDgnZzy2eueV",
  "key24": "32HnvHfY8ajhsczSpJCknNVs5ayKnLovsfc3hFeuRhYajygftP91TWQ4b2z2XwAS8WJvQcv5CxvdUd2fN4T9tK8i",
  "key25": "YVf7E8NfyMZuUGrv6HLAvZEHESnapDMM75hNsEuYKnAxveitsTMM5fCKFSU8ecRhbEKXQZEVyKUt5cxu1ff6MM3",
  "key26": "5SkD39D7bKaZnekVpsrSE1urhgrMmSrtDbzQor4a1UUaMV612CSDt26hshpX31Aupo5BsXstEYPrdwrfGov9r65i",
  "key27": "Ec8fR6uUCREP28zXWKmHBBzjvCWni4D2VykFe6C9hisP8A2RQGBVmTEWoXr35hUUVfMGmK3C7NuzyM3BSFg7jQt",
  "key28": "5918nerQsEwabBW6GuUhjzreF8Ez1CebU1bfDwfBBNGgypC82smRhNgJqur9ixxJdmU3aghKhmaBbizExP7krixE",
  "key29": "2JZuArYNXH256fGsK8SSMsocrtBNkXi2JWqduTGpP1cJfvmxPNXRX2qncw8byfFF9sLzPHX4Dc6Jw9yUe1G1yEZC",
  "key30": "5uYpgwykRno8aiBStnjJFabcP7zP2UtK1UAn7dmxCcbP5Bz7Fu2eDo4mTeKT4Zqb7qSX7zTXiG4639cqLAyVeT2y",
  "key31": "4dTY26TzxQ62p3NJJLdTtELXGEbdwGCDwYWYZbBwT8YhkVANXZf2PBjYqkd2Sw6udtubCPfLfQZXq3Bp9UX7FfjL",
  "key32": "3M4EdU2fx3YVUqnFYzX3NWKhyoDJcrMhPDsYiwh3XnG47aYSNJzxrAgGRa9mFngnD3CcgWVwSVAG6npZ4cY3MWZm"
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
