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
    "BsLUeAJ4Zn33zhx2HRvqXUvXufKSmZssJ7KErYjSrGV2cSYR48hXMyuLevFB4L7dR3Kvgnn8sFVLg2ffLqMrwct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FofvWdjxYzU1GRWLqf5MuE2t45zTM7877EgMhNSiyyNHFDDqcZcDZ36NaNhKx95B3cW7xwx1nDgCx9pkh4CPqYH",
  "key1": "3LRw4aqh5VQRAFV96xGcwd7QpaTbXWrm3StePpeWrhUZbWFx1H8xJJSPELzRKe1GidDv7JDNuRKGDxgZqbPQK5uo",
  "key2": "3oaZikcaWzcGtda33DJjtmStEyKLasBwDgzF8x9Y6poyEWZxFU9ppaSxwnVzptF3HjdCHFDgx52rwVE8rqg73HxJ",
  "key3": "41MzoThwRRFZ7XNwQYoGdXrNHbreWBqPErfFN3emGdpKXRdFSS9aQrB2n4YA7S3f3fHo35i5M9vsYxazfSSvcHWJ",
  "key4": "2gDf1ij6zCaZrTFY83dB7gJuUbxTavWbKF9KFLdC83CZ4p4sBNbhD8YB18CjFCWxUWjpnyvhPJEfraDvZ8Thf7ZS",
  "key5": "5dBqt8cE63CYgssJaeEKobZvXALhnCrtbvn2AB1HcykK635twiUpi6Mtu3zWJrjFwskMnSUWMRzr2zwAbw5wn2S6",
  "key6": "4sK8zDJNytPHKLoVqzTCdCuTdMZaaZtaTpjZzGjg6rchSp1UA9zr7QH1uhV2SsDpHZHi8ckB191NPNi4RQY99sUQ",
  "key7": "2YLtVKw3d9XyPhUccepwU2n7iMhTnJw6VA2HKjTs7AkH3NzNYPFEjnPZ8pLJ9aT5RwpVebQKC4b9cfgD1BDKVnxn",
  "key8": "61uepWhYBQmDZCCNmGK4zUejoCM7HLPUJBgAmB4KKb5SQBhzCNYznA3jUTfw3vnNaZdwp95Kee9HdmkqARVURkxL",
  "key9": "4ZdB8AiuqWVHPVT74G5zQHNbzPVm8xyn8fpa48Drupgymb2uCV34jWcZFmXwafwt9ULp4a4J8PNowUU4Pb7YDGbT",
  "key10": "4trTBhHLppkX58ebxViEYcM9WWZ2vtb4kHn9ipzUfZA6Bj9C331dt8CvDohdeMzqVXsw1dPWX8kXiGpUeEbFPg2X",
  "key11": "2VqPr8xQjGuKhRjagmDo6tFJp4UKdRkdm9a61nsPLYrq7AscM78rwLt3hDUEfVP6yX4eJSpxos33qHuEwgMKfYZ6",
  "key12": "63MbDyS7bT7kFH5dpr7KxYYKsmjhCVo6cbB4RUkeBwXTHiNTLXvtUgNPZjoNbvT7xxYgMGYHTrg7xphWZfKRS9pd",
  "key13": "29nkhGMczdFaCVptTCWUrGLAiDhaFbfQVxT9jpMBG1L1rafxseELLUE95vSh1WyEyFe8ZZMAkeVNhcRqphVXxJAs",
  "key14": "4dztZs3mxKBCLJjA2qwK5AW22SgXPfkE5PaP5TyiTC2hzNwgvqBhEn7F9e83Cg6QKbXcDGxkBDnrxkcCGemJ53NZ",
  "key15": "JvwFBZ7g7GEZMp8mFQkAgwqxmxEt4QHVgBVhN5eiyxc7qwQdX9p5WizMiy1V2CUUYcM3ox59erQ8ZgJt8EeLdsH",
  "key16": "3n2Mhuyu68roGnvX9JXMRNhjTejH2RbvLxZknHrMJ2hxGWANw1EHaFT8YW6pybVy2iYpCwtFsjgKghVZLoBySPGw",
  "key17": "4umwQawYJK9AqGu8PT5cF7Cja9rHuFNNYY5zzuLJbBwvpqj2Vou8xFuTBNHAUeDFB2BTrtMbLsonzr4ZZeNZPDc8",
  "key18": "367TCVgwfQa6ZYrRSZgxZGKv9nMBWKGXQDY55L6kZYZi4jnuQkCkePHLgvkuL9Gbm9YGjkhEiyUQMr1EcgbDcfrw",
  "key19": "5uyQRFZqaBWnMjCTZA7KehsecvLgCj1NkwBrXi67yrrWoTayVX9G5ZRqN4f1BVeu1Du6sJSmfbZ1dio2c8mf2Jke",
  "key20": "3jqxXuHrZuhEDoxpSpqMC7CaqrUyrs7T7dUak7HX3VYfBZhozfn4suxYjwFSuLv6azZL8aiuvrV9HGfb8GG2tbW",
  "key21": "5sBe8Eupc5os2DJoMuZQHwWpgVQTPPmqbbT6qcp1efwVZu7gYzG5kHh7u8ZjuzZvxTaTGrCw9trgBGporWGei1Pm",
  "key22": "3nuqVjz9mSGwzeUW6w7HGexKqkbFfXvvb3CPhNJpzk6myM6v9niohJYH6haSsM6jaEo5N2NrY9WvEzTGj5EYgRoL",
  "key23": "4GD8NpyKmTT7z2Bta9Az3PUTKGXrALxhmXVFePYLTqRX9PyNVFbo1SDVmm6VTJ1KX2zrJaWqbAfnM6qH3nB1CTjH",
  "key24": "vRumbMiDtJ2HPt5uGMwFgH1SVqq46ReLyVaiRXS41jvfzMdbdSj4X5HrryyEUEUeBnz5QXzu7AJiFYKKx8GGiJs",
  "key25": "5MBMw5pNFDhN88Cvmwf2T4QgQtXAPFaviW5u76ZtcqgwzXxUFdJSyqYae1XmJpuUHmxpmgfXAyy2j9c1kPwijH5B",
  "key26": "4a2Uvx6zeXzUZdvLSAADfEB38xdzviyT8cjGgBSoNaHBEvpBcDVQgnVkKRPwP8uEKotWzgKRvt2unwvPHowgX9xQ",
  "key27": "2dr1qHagrcf9RmYNftNVTpzxLmPE8xqz6mmRtdWQjzR1zNnwreFDXiQ1HSehbb2vdovrHEeKZqPfJE2DQug7bMkD",
  "key28": "37fn3C1Eypz7wMN6K5vmFetBYPSBpE29suDxKB7YMPhANYjJ8m9D9MGiUhcqaoRQoVWmKbQFmvJJyxaRdaCPjGgk",
  "key29": "4gVqSsN8W321f1Pv4EUrRdexPE8g5BqakbiyyiDp1QsRRVrU6SiJeTxYGCbVSrkf5W8kcC93UEsKGiegoeqBVvEN",
  "key30": "3hjFsf4cHHNmUdZGfijKxX9PsXuSiem7zBBKGjhdRvDgtu1Ey96TzwixA54TCx82w271XseVWJ1N9uodNtyRzqvY",
  "key31": "26KUTZcMLMfZhvjWtk5ERgkYQnuXeNFTJyuudRUAfQgxFLfj7wL9bjL7kB5MG6ZXLUrnLdGgYN9bKfSArxKkYVsN",
  "key32": "46WeC6pbiFRrW4KAMh8g2n3gMrLKAxZGr1AmmEhP8u1gDbr4uBrxDvjKPzJrfnKejLFNJ7LUiTndRV7Lzg5qeAH8",
  "key33": "548U3NgBraG45wrDkSYf6nEQYdJ5Y6n4ixsKMs5z3hRXs4RY4vZbXNxaMRGJKKCtHgYBuwV9ZzF4vDq5BiPvimHN",
  "key34": "5s3NqqepvLMa8hQ2X6AxnB268kaWfcXLVex99G9CZZ3Xs1fVpKDYWc8bBQNNu7MKJ8PNLzLQVTdKFLkuFXT89hDN",
  "key35": "veyEhBp7EivxwkMCbMFdoR2ZPW8NsvhW7TGPWTFbs6xtsd7wmRCuVGARQQf2A7rX7JECfE6F4cEknmLyLtbdDpj",
  "key36": "2jJqJFKx84zTXpQKC2WfSzL1mQAAis1keTszZZ1nQdBXGT7DtbRJaK68GMSimvG4AkM5oAkgkyuQ8Bio7MZxJJa1",
  "key37": "wzC4BqcCTotnjzuvNPFEcwuFcz5PoLSNSNk1Q5JqtMFmAXUQnNFhHhsKX7sx5kPQv4zcWTTmymGxD9JzQFMHWsR"
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
