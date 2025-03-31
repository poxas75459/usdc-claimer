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
    "WH8Hgm7GQwi5i3UxhDuxSFFuRj8v3mVB1aoB4p7QHWF5iENsDAfnLQd5xbTEnknheDqSmevnSRziND3aUuwFoC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EaxyxYSLqkbBKRsFD2YS2z3tyun31au5U4RcEXaBNCk2cM86u89QHJr7iiXf5mSkv4oXaDvLUyQbQdYXRQRQLrc",
  "key1": "3bcT9bcSDS74SmNgV3d6xmwwHVhCtxN3FV2ZwyZMh81VZC1epvNWLwHZ1ZyPKmoHzx9ZJVFruDr25NAKYxTociCN",
  "key2": "4D5mZjxseAid4mUSAzgX3PojomsTh4LAHLtDNPLm6aDqohXUTCB61ttBwPfSCHxtySnuTfb4CaLrtvdjL2RT7sMr",
  "key3": "5RbfvHhEgHUaEErLgAd3cAZosBCJwxxxLLHwQgccFEAaPA4ZThGnqpqYTpuxnesVqahKhby3KtPhBTiKjfvPaN9h",
  "key4": "usvBukh5GEw6zTz6tkqFQKxKDa4gU8YzC9UPw46exGhmcimjCDL6E3KtfGTrYAhiw3HygLfD6N4NGho7D4fKAYo",
  "key5": "3JkZ88WHzKMvj56eYyV4PkEhH5scCKQcDQmqPhVhPDiX8NW9YEAJRjLtiK16GFiWKJubQudF6uCZNSSNQHiV6oRc",
  "key6": "5heHwNgyEYbJoGF8KURaQcmptHPJvPihW1scYno3MMpkRkbD8w69Mtpfk5LHeXmvu1aMJReCA17cwrjNmUFXWQsM",
  "key7": "4K6EJqiS6GEDToJFcF2dGXehXncYkRBufGwft8ewVtyw1qJ6Mh2uK8k17t7uFYUk3afSPRCpLLgGsJ7oAEmAhJ4B",
  "key8": "4wvRquennTEViFEp5b9m3m5XLuzjKpwCDfWbiBB9buMRMwtQW7ByhMbKzBwCHXB382thR6bJVMBnjPL8A3VrGZyb",
  "key9": "5A8Qsf7EMmWZWfsBosUyKNxWYNVJX6i7mLMR1sP6hic4gYAqY8iFiVqsLCGZVrn6z1iN5fcKgemf9optKZx6gimo",
  "key10": "3ZcGePf7czZD8ns6ZSmYL26MviskjAKjojyzzQyJwSBhxp8GQJGLGb9fGW2vvQZ5U2gyrD378HMuxFGxXCeqxWTS",
  "key11": "28EaVPbMu94VBSJTHVpqUoYncB9XZRhmpcLNAMHkwBcPmPqKRbbotAsZo4UgbEfcezkt1zQZUCXhg8SKhZqbnZmm",
  "key12": "2d2JctGYksiroGmnb4MYvYEtuyc2QeF1uq6dkQzcScU2oV1LqDXz1YhMDg3phXbUUrxZ8wmeTSxxFtYHFseVffgr",
  "key13": "5nC6p9KrxKMe1zfDbDVmD9HTfXh7Sc4DsnGwJxC6aix8u5t87Lt2KsuVHQeZ6TrwzfbQZFCFeKB3EnJVQ5WB4Dg",
  "key14": "4Vpc3qi9FebQtPSkwKdEH1j7xwgtrfy7G2nQhiiMRQ31S1fBgcjekHT2sxwEM8pB3TZpSBBMDmUUkk73jFuP4tjw",
  "key15": "5vZTbnzZubWS8hgrdnHJRsRYbvjeYbYMHxv12oRLSayDtQgyKJsNkjQe6ipqTuyHmmsgVySK4axSBmVBqeT5jCa",
  "key16": "oWhZSL6VDRjs16huKB4hAq8qbH9ePAXnzYtUvdGSYF97pMspi8W31Cb54cGQVat9yjgV5dMhrxBP9hr1kCrnK2b",
  "key17": "5QVvB7nFR1vjTojHhjTYQ3dE8tqmg1vR3bqKsk1fTV5Qit76Et77DaK3RdLsYi55TgpdMP46UNjKwUjagAdgzank",
  "key18": "5vT6UAdFoYBmk6c7TJCx7WDwyWoiXjfc6ombfxg5RYK8YF5gQSmU6h8Z2GxCx9GUMBHP5YkrMXJ8hWJrxhtnivTa",
  "key19": "5a3uR6pR5xpFi7fwWysD3ksb3Cs7mVTAMArukNeUFbncmBKmcK4KrQA3WusLQyvEA5A5mCkVbi4bg5mBFSKtoExZ",
  "key20": "3zRab1uhRhfbVQKACeRp9NyYzRKYravsL6z85jmB5nzzxQruFDUqWZitzGvjhnSJ2x1MPtEoe2wiqrGMFesEPHV5",
  "key21": "4iepdBevMzawj7JR1T2d4wtuK8ugBywjK5x4e5EkzyqS2LDjDVdAmjXsuzuQBxWKAm25nmo1wg6YFo3yQb6rCGSP",
  "key22": "tuSUUcGpUNpyTzFP4NkWv9JN8HQERDboGNfisRaq9a6asr3RXQLGBpNqC3TVWHL8eJ1s549jyUvs8tZ9JqYZttf",
  "key23": "Sr45ywFbd7Q5enPqmZ71W21Z3umG6UCC4wnCDvtySVrsb1sXp7pohKg1XMHN8cjnxVfhiwkiYC9N4FXw9NSx3ss",
  "key24": "3AguxpFQeJW31yQsj9WRQBTTnjnxLfB2yoepid9SZ6Mt4TD4AgdtkkTE5ek1pbZnUwQAxaakwLb3VxqeBa8mK9WD",
  "key25": "425MYb8nNL75G1h47bpTbn2wWCB5RUvFGprrBkthHz9Zefh2kpRMhVx5RaUHt6kAzNKmfNqRK9HSzP8jdZCAngJW",
  "key26": "3Bfn3aXNoaLtERiYLHEEacFNKA897Sij1N77xMVpLkV9ixEc4XkLUuCWeHDFyBJdwGhxQV73L6k3MsYpydQ5KebF",
  "key27": "3xoEaKaWmqhFWPi6MiTWEF2wXhLDz8szgST7HWMSSdsQNAVz3hZnbhn5u1GJk1SwvZXrtnHDciqE76VuWgBjZA2M",
  "key28": "2n8d4iawKvK2AED7M6j3S3F6vnfYqsdyqn8HHZ6LzLWUMCnxHQG5RDt1E7Ter9hL6c7Wz7Wr2Wa4LhqsC6X9S8nX",
  "key29": "57ursmUgdshMusr72jp1i4TmN7iyzti8NqGpL7NhiUqQx7RkcWd5sqHrPEw8x5SYMcoMPXob2yHQZ5NiqtPBEJFz",
  "key30": "5AJHVPS6DZRdboRX8V7NnKZVi9zW3sPx59NbDjxaJ5kq6h2MoNgWHAuTMbsiCMvRuMpEk23KVG2JRZgB8awtjQHx",
  "key31": "4NxDtkeVSHXBzSXczVktxs2vJMox8NokpRmJy2tTcrDVPNS1FW7RjS4H9Tep3akz5LdJ5DqWgSthU7Mnd45qBACs",
  "key32": "2iyiHCua7PnS8zm2Lm5iDTyjNZ22cSaRbRekw4LaUSnttsTHQkhREGKDs2yqd5kbMWCz44rdNFUvCevgoMUHC5tf",
  "key33": "2CmB3CW7VY4T1PCoAK2Cbi3wEE6BRGbWWSLZRsKrPMQ6hFwzJsYWGCxrSMoLYMpA2uLjs8U3SFPVrM512nBxgz5P",
  "key34": "3Cd6n7Et7a1HCB7SNZ6t3KgTcDwCBBrbHyADgDNpi27EUF1RzxCCCoNKSeqP7RnYSoetqA9mMuVcjKX3tHtGqtj1",
  "key35": "3dH1sacsFce3wJ8ZM31VfEhXApbV71FbUKkbeyo4s15NyVwn5dMhfKrD5Q9dmmioKMaQErrMkfnSdhvGNveBvQRs",
  "key36": "Mshn8FUWYfgfEMuAP5vdRwU2cTgQqGZDynagc3NEDzQ4wgJvjQWxHwcz75EM6Y4cKGRpVyCCbhniaS57KaABwTS",
  "key37": "59Vuv3HtKTTKtJeH1c7UYxZszaGHirQB71fe15QjcZvtvpeYbC84wmEBfG7XnrytLJHiV4217s452hm8dvkZQWbh",
  "key38": "X7UpENKihRdDPz41cpUBpk4T7a3bkyS9px8AdaALocpqJVkwwqUmEtFje8HVJyxH42fYTn4harHyP6NhDmvSTCV",
  "key39": "4k3a5q2qK5ia7PRKLLqJxX5NLGz4MpyrDFrgStiKzPgfAymqxHDH6QpAVvDVouXLEgh6rQgGWThfzRjYn6MwK8Eu",
  "key40": "3gRjwAsWCYrUGbpruaBAdsJJuXyDwPzoWEFaCMMbUwd5c3itHqciN9WDLcDEE1ADi4odggZq4obAsXfZZGZBUqq7",
  "key41": "52FqZUVXeSuJce5XApMUSp6ddg11ukWEx4AhCafWKddpjGGd5ugF8u4ELRnKBDgCTXK6LKTa69VB8auGAzbiuDd6",
  "key42": "3mNyVHeQZywLudKisDEUMpuPmj3gskJz4XLrvKc8vR5LHXD7kBtMp3LGNzdvgYVrGf8LYidgAiNtiqq2nJvxD31p",
  "key43": "3RWzV73uNGtuLN4zv8V3VPkAftTXv7ay96jSzeAQT7ZYMFdkP6PRtf7EzLt9EFHuqWiHNNXqjNJA2zCTxy4CdznM",
  "key44": "eZLt4LjkZUKtRdYM54uGHr5wghs38wqMuWunKt1zFjhXKHDzXWs6QwHz8R1XHXDPgjxifSfy6pdBMKD4tmC2K9f"
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
