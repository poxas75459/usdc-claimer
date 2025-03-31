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
    "39oP6K9TG21LXpLfbNVPvFtZHq6QtW18g5bTT1Phc3qqKvMYMdrYz8HZbq4qiatLwctvHDWug5ENvB6Jucnq3yyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GU7gPiFFLZriS15qpZRvCq3NRU47TdfxioBRyjfJCPUR7Xrf2pjQWhpqzCeUufN8P7FkVN2GH7coWdf5tV8zdSx",
  "key1": "qtZwQzsSFXMy9PfqgyaTyv4bWcxa8bm5HfD4gidb5zSQvkqoxKoMMynymsVekDGYR7Jvp8HV8RW9QTYiwek5H3t",
  "key2": "2u154XNVzNZbmTnbVH4aPSP9UcGRZBq7bPy2oxm3CsNvvviX5t8zfyyvRJtahYQCWzdqjH1QAReFD1wUCKyG5xDV",
  "key3": "5ykdLKywt6WBakTGkHPVRDKystCc4ysenB6ZdF981PafyS8RhGm7QrRXSrw387fNrM1wC6WHuUzdozGcR3Atwgjq",
  "key4": "UToWB7JphjEXrjqDkDKd1vjyZyaiDiryodidowGMh15zzEZoL5eykfe7jESoa5LaQvEgjUuikrSBat98PMKZE2p",
  "key5": "oKtWDKEbNHsaDrUMdFttHewJEAGevY6DiYPVzoEZBVBJW8TE5DwLsYaCMyAtFDy4PyeSentnXCoeuKXZnhRTXLp",
  "key6": "3PHwgx2j6V7TTvBoLDTfp7Dd3mYu322TYEab8NeyQDRS9PpTgRQsG27oPYMtZfJCv4apwbcVrCUrSTLj5SArMJZR",
  "key7": "34ox1fEq7raDJL3GiiG56kbkPCdmznvumoawJL3B2NGTn5EZ15WWG9Qr4Yv3Mckc8qZhua418JioQsKY1TTwBNfR",
  "key8": "HLBRYXrUMUgk2iXEXNpmbQoTi4RcCwDWepuZD6BUbiWZsH8akwDTe5AjLt45dqHuB2wu1Sb4AsZF3QSr9q1CF9v",
  "key9": "AuX61PMDzUxpcVTP6BHLi348MZwXGtsDizYCH9jvB8wL36nNhfGcZcucGrjjaNpFQgRtetTjAsgLnjbPv2YDfub",
  "key10": "GGYga6GdngKytHc2oVB4pjAWZDcnGGMrReWaozuGFP6mYmVkoU76fwoTytE54ccwJ2T4qHvEzYUDrwgw35TUmUz",
  "key11": "3rtVtNr7vinXqb4skR1Cmj2hLBS5VztUNsFCQJ7xMG6Vdn7xYD4MdQ2FDBSHc8PY4DAXtr1tBh4yBFxvmU7zX24D",
  "key12": "4F9nHdrQM7qJCH7quhm9JqMQgJ38Vgt7T13JYDyVjb5QaNj8uo4W2BNDCfVS1rS94nyGB89VwekXP9FQWhVVQ3JT",
  "key13": "52LTpV2JiCNr2sTdghrGFadPnLw7u8CtskPwZwjDPZVtKcsrWMtU1d9btmbrsqa5FBvSFowyx2DZVKWBKgB3bmCs",
  "key14": "27AbeXrF9vf6RYv7darLc7ZfooDbkmr5Krh7ifmSJ8b8Ygc3VZkBGrvsRVDLHanugZNfiifQLRQCgmYWFRNUy5MM",
  "key15": "rJLfgaunhYkD44CjA98FPKazdgmkkPPMCaMGCcmUaTVGznr8BXkZggps1xXSGuUDfHjogWhCwqCWhHhFoY1BG4M",
  "key16": "o2ZuAXg39ttYXw4a4X6mY1H7W1eKEaXtB14iYiNDHM98cKFU2c9fpuDe9Q7TMxRNteSKCSkrdHY4GN65HXvTV6Y",
  "key17": "tfTjjN2ntyBdRKwYvJYY48fMkVx8EH1KvUV5X3YuYY2LKfLrwmUimFRSodT9zYViC3ZpZ7YodKjScHbgS6uDVVy",
  "key18": "38yEj8b8jLUCdbJF5ftYhjCVPvdQccRxQ991rMDcr2dvJvSmNxKSY52WZ4GjFd11kfs5fkXWQkShu1WojPhhijfY",
  "key19": "3yZGAtPHGscAKHETNVtrRMXdb9Bp31EYkM2oEt2N2JpT9f82Fvjm1sRegsWJ6neoZpkXpK2ikaoxF9xXYAmSXauF",
  "key20": "3oJFM5YyNWHMiZpTEk77KgpdZVTMeG4ocaGxVw6CemMUAd3R44yX41Mp8vJPjjXdexeAg8dBHdUQv6cHqsxvC8rW",
  "key21": "388R18TgwYoy19HLgCdGgziSxGaTg8HV1i2zqGF9R2nkAjCd2cDboiRiX19gKzcrK6Kw6B9otC6BZmLvJf6fb9Gz",
  "key22": "5bnLjWRQcg9LGKgeT7pSkmju49Me5Uz82713SiywEWASezzNEzLkJBw2VGurN5wwsurRfxgENGChMbh9zMbjdVbf",
  "key23": "3gSfJX1ZmezS7gRwTCd26khgVgCUn8MVU8G8sfSgRKLHFMLkxAYCUU7CmNo2Yq4hwewZSsFAxY6UvkR6jXoSKTqv",
  "key24": "5NLujiPvLjgqd52JK5qwPjni77z2F1wzbpQHT3oEUVrs6DwSQwct75FQkpZu92h39m4wgu5VQojZFFFeKNrVipMj",
  "key25": "2bwBYPsobRBd95wsafRgQTc5pHsfQLC4erebGdbevB3ZHtD4kpCi5q3GodFMHFQd9UFyNQV3q5jYidrvVZFa9qZJ",
  "key26": "3ivJ2pJifLFEEK7873YReG9vHkfkUj8HERpqxJKwwC1VD84ysT3bKiuzjxwyZTVu4M9LrP7GEEZKQ6ChG7GyJY8g",
  "key27": "63vmp6vccxegDXvB43qwKniqKuzqMJFSAbjo88F8wQvcpnDueCYkvfLpYHuNkXE7fs1BipcTzEB5ye2KwDNzjxW",
  "key28": "2pSPcrTVScSn1fyV9fhSey6xWRWVyAfwUBSRqnTnE9JpUbzbohUR8vbTHr1pcYxY9uZFVNgVitNtgEh5teANz5zz",
  "key29": "3Jf5WZiijh2MwcLqK9fnf1uDofZzRuyxdSPnZ9oWECEZ3EcAtTofRprudDWRfXVj3cFTzS94EnQ3nh6HGqDEd1t2",
  "key30": "9GWrt8aS2GRZATpcJwtU9q5FkYwUnqrjbuHRRuff2NQGD1Tz1358iXKFnQQuTyAmFoVGNsdLzJfMkhEQYzUnEvz",
  "key31": "4t7v3yfZyatZccVbdzzeiGWYXpF3P6rngirCoqGjGQTuFZ7YBmhKE7cZ2EFRFykzXgf1fvVDULEnXamgLF8YjHUV",
  "key32": "5T1rQepDEtnS3k3cYEKQvFWC8ZfY7NHuk3uvFWC6HU8cAoAtuGhin59rxieLAqg7fnRZjmzoHUpqNYoL4DC8wmzX",
  "key33": "qSnQJ6CZSgx9REFQAGYXFvMtcBVDqBykpgt1f1Wummzdu7njttiSEDQfbYzwHxcMFYazmxrSPYZEsZ5E3W7VMmE",
  "key34": "3KLDDgLbxkMju7fqp7J57mGd2AgWzQ4BQ9AdPTZEbtb9hRYhGTMiVjAm6AcQ54DvXuXSCVd5BaVA2t5QJ9HEbwLs",
  "key35": "3VMH36CYDrLdrB7BXePQpPZU8gK3AeaY8zaBb63rNXjmAe2tw42ivEGQvLkDsvnbkbhd2sKfaTP55oEdgBUD7v8C",
  "key36": "3j79BJS2w5QwtDwfp3jU13hRDyhrEoNHn8Azt9L87ALEj3j8dwCFxC6xvy5ui1jhWAVzn61t6ACBfETeH9o7d1nc",
  "key37": "3vZK1EfuEYxnic3NeSJMjrx3sS4tGbStN4wGf5wG2dAkp6JbaLoicaiFd6HNhCuxaagd2N1HvdFreAxUWac5hN8t"
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
