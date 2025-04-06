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
    "3HVCFdLHxyRLbDvLnyFMojSm63ZEvVnUQE2wHkTTPyS7EftomRvcv4QUvhZpgsHMauyCQYzirdWFJAwCmxVQLqDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JCw6rCsL8Cr2e7NV3AYcVTVi9c3dRWSS9k6742MGNHk2Pwp51dVf9fQQibxh9kJNQMcixzfoCFUXoouGKrTajkQ",
  "key1": "4J3boj6byCB3kjigDzYZm3dYUjTWQAgMQxCEndYqSn7bymo4cjMfZwRB278vU7aHBbWYTQym65zAd3KqirFNhLp7",
  "key2": "4bw55mJUGiiBPYiUc9dptWsb7iU9N45pPPY9ZuF4zvUeb3ivSh1QCWCaNwHvhjFiKFPRcTB5aYu9QkMSPygYjP6T",
  "key3": "NEXeVzkYWdU1gXfD4f4gNqD1YESwzqJcFj6ZqsSqr6Adegj8jsQvhaYYbzFf9iSBiK43axp78cUN6Zp6wLYRbPk",
  "key4": "3SUueA8UM9PEKKs6WjMPFPu88zW82Rvi72GBxiGHczhrYuuefmKxmzPeYb5ZfNssJVzcsxxnUciZTmmfT9PUKaU1",
  "key5": "3Lc9g8TD9pqxFKq9jdGECirSfZVJNTWuHhEG4HCcevtuGmHaj11jEzqJX3ZpQEx5mqVcgfoS2sYpH93tHhANvJaL",
  "key6": "3F71NPwD9bwxbKrXknqSP5Qd4Ab4vhuFRJ8VUXbCFPQAx9JbY99qx3JTsrwLEJXFegsUWcxzS7tvNAVvcSmzQ8Hw",
  "key7": "4nm77pQGAarABSjFp4E3UeaFD68XikbWqjVhCh5gxVYkqcZLMNZ3DQLWSLD7rjPpxkCWPxGvkBSZem2roLjMSgZM",
  "key8": "3DRCNXE7rwoFoBrcYPnvQqqPHt1kdhdigvnyfBDRfBbJ3qA3iU6S14JRgTjH2wTSajuwtvVbwAQxtpPMjQRwqLBs",
  "key9": "3Fnt4FL5FjyUCMieEky3zY7nXT4RmbjRoGCzQjuiUcF84wyRHvX3j1svaLWDzn9hyf1CVSSQ41kEbwu3D5TJRHyz",
  "key10": "5YH4Q81cRF4XoDK9HdDVwr26eCEX771eBzCb7SURG6ksyafLaoy86s6CsZgpCxHgsyvzsUB33SpcM2eWuNd72EAX",
  "key11": "36FkPyeRrZqwuAyUyEUUAzu78VYxDXsv4XXB9EEDNG2q7NpZxM3k5vzCdg8DppDBhF2uFJgN7gAMumCDvTFX8Fbp",
  "key12": "52cV66LVqU3uAd3nxEPEnpqfXSn7ddUqNFXLzceCwoZdft8H1FeJ7q5qMNYqr7yo6HEi42MU9zG7RVKGf7s1CLx4",
  "key13": "5e2GXdWdSkVtT1K11PwU2n8aUhgoZ7Gf6T56kEJixJsJ2oGrDTp3oo2fosaaX58WbJ7JkZpNbmZsKTDLv8egSYvb",
  "key14": "DUz7v4vcGxANbuaZvuVxkvAs21Hh7Yu8vxzc6qU8jfRCVBmAkMzWHxkTPRUt9jdeZKavMx6W3Kb4cu8ugTeQYWj",
  "key15": "2FdmuQes58r2R7WbGLsduKqJRs7FzBFMwEXCfW3UqfWBQVeKodvqg8TdnrTYUTsmWxieHmegZK5RPoQ7Du7EqxHh",
  "key16": "5SKHwheab4wQMnugVAv3mzbqMGdZzraQEkCSEHkcy3Rg69AWvtwo5hoCVtwSXbKTnj5rMasW91dxBAf7ZdyFHj8P",
  "key17": "5YHwnJS61YtDWqedWyXpc2xBQipv357qrPBjCDAmi46yJ4wAPcJ2XEkaRFcqkhSCYyvGiwcbuBRt5SGt5puypiAM",
  "key18": "5RvN222eQCXXL9JdTe54Lm7Exj8wbscUU2hEFf5gszSxmsAwjeSCTRYDtB4vHnbcNRrRFQJ49GsZ9jVgKPWfQ9GM",
  "key19": "5cTCCgpoCErHQELAG5k4RhkbcoiKbuL98dtAnBkD7Gfzdt6NCzgqMftju6F55bAmzjKqt6NKnu3JD3QVe7rwnWYo",
  "key20": "3nViSW3qsNGBsTHrpB234Pc2pFmzcNSTqsFM9VHcTeiReTx2zs4Awqzk8QFs3zeAwmDySCHAoPvT1y6PNu5PoFZq",
  "key21": "2d1YL2eU5LiDt7BpngFf7HeUHmgHUXCk4tE2Y3WdTxzLEsgqb6YdMLn9zBAzh9kxMgN51YfpdEB7tgaeiz7bPn6o",
  "key22": "cwJKJWaMjXBkip4xhpjgyw1tEBJt87QZKMgktF8nPiTV7BwGYHmbFkLGDzmK5xcsvTN46Ua6Bs3B8dVWiMHWd9B",
  "key23": "W3oVkQvFLz8wE32tWwQYbqxqBFvFdon6NGDY8Z2fsopaPUDx3dPEAavA1Ln8St4N67upiEx3WahXomjNRnGfsoD",
  "key24": "RgGk9tRanu42gPc1wVo4JLidS3UYc6GzP3AbBPGFA7jELuvaeskQgEeDt9Y4DRfQrKTHHBmPXra3RZ6Um4aJegh",
  "key25": "5tgwoHNCv9fMc7YUzhyTvN3AC7GpV2tRJHzKPmKvubpH9bhcuU1viUASiY4MRGyV6NFeHYTDw78c7t77KXCfGYuE",
  "key26": "37kycVGkcs7j6G9eGyQVbWCH68oedvWJpEnZTuD1eREsw8jnKr93UZFgCKKtC2QD2Z64rgrM9WHNQUBZhtnRwRxP",
  "key27": "2nDvh3nopTQreqEpLQHFYnw6tFbsCsTTvfgdR69eERdWNyPifn7Vm6c9V3MKyp5DefW2HSifHNWQ37kxQ7voY8ds",
  "key28": "4yaGStjZxfhaEGJb3EJcxw4NDXqYfttYf9sRFdKP8bxzwfbWBE8d2RT9i4DeXiDYtuSYWxoXZNWCnPBi778y2JRh",
  "key29": "PUtgffFSskdk3nnFAktbBhWaqSkyPMcxkmuXK3vSXqmFmCrX7untWAi7c6sx5Z77qf97ZDpM6Hp9iduxQnqT2PT"
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
