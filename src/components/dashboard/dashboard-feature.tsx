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
    "4LHmtdprLMTEjv4wCQ54boko9Cm5tHznRHHL2d6VWSPcGxPWKZCM6kFdkAdPqHb7i1hBYzK3SpNsVzuZW3cFa6kW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DVbqa69gBcPxzC6NCPVTtnBA3Gt33LyNSv7cFBT3RKk46fAutrHGYYAY9PYui5BdAiJ5Gm2X2f6itkBxdHNW2CH",
  "key1": "4bsHB5xpEWuaY4smH1atsFptNTaFHr8GNXpZxEKmRF75WPbH91cDsCH8XYdEFzcCXTFf8WUCTfyhoL9Aify65st1",
  "key2": "5TEAYNAMoiy9xbxpx7hB3U8WAv1j9wcbqWci4WdsCmMJ99x4VMpPx2S9mFdx65zvNb2uWfZjkqhKFu4fs89oAkpL",
  "key3": "zu8ShUGcsGRsAhbFAM76fAmtYALzqNntKkYxBoryJgsqYJfxwhAYXr5vUEXZeQvsKdtnS8FszoEWnxjqRmCQeDq",
  "key4": "2f3fNcvDMNLTqjtkhjZdq3TPy8VVERz73EZs2muLjpNMyCwEAkArU7HRryb8bg2g8Hgkb4S2Y1YG2NEX3PbJXHgh",
  "key5": "353Uvk4Nmbmo1nQuFm64XQiwJrM1V2JeFEceJZddbEpWAcEdbgDeFSGEustZ4kEgtjAG2nxCyYxNXKKKh8vgquw1",
  "key6": "3BqKEexKNWv9y56PmYWcjEuF3HgRKfkmhKXKQPM4spNuy6AqyJnDieHBo7va3U4ZQ5VxNC2afQS5L1HPbL7mFR5s",
  "key7": "5h3GNZqMybkTwQacKGvCR3YxyKHAQvZoonRqmcRPmAXQ1ceEPXgvRB4RkRkV2tk3itft1jmbXB1rB8ja6Bywf9d3",
  "key8": "65ALJsUeUzVD995gTmmVYXfxW6E8wFAP1kQn9TMUawHsN1JNX2KVPrFkA89LLpZcnn4kZqoDs6Vayx1kgEEivZrT",
  "key9": "3keskp4bsKtnp6pc8x4zPBGZ4eS9zskYtyNByuq6SjuwEqf4SWfGSKo5TfdcYwbao82vuo61EZyj5Bh4qgHpSTzK",
  "key10": "3uZuchXY5m1acWY3ssi8rBmZm5hXv72mabZ7vUFaZpqJc4b6u1RrBvqJ4Y7S65GtDs6xmf59SxfFMbkRdPxs6N24",
  "key11": "4S8dSARwZeeHCuNTXfjc5MeMBTSHgFp1p1rvnpPWCXsDZrw4dBfVEVb8dQj4SVasdmJdnfVSPJBFYZjrY3ZA29vU",
  "key12": "45PpYk5KFx4SfZevtBNYt1nFnasWjA54inP4sqfgNyfuAeWowf49vMfFRScC8rzWfcr4T5Mgj2mEGh3U2S6YhMCT",
  "key13": "5rTuykyy4UgFpBQ1RtG5KGQE5SkvXwgpuznJzsQ1u8oy5hd5vfokm2CJ4sDyPn7jQbak2cCir13fRKAmKtRndJ3x",
  "key14": "438nBWy9uj7ZBnf1ws4jG8rFfwg2PYszpcin73GtxxiboaJLzszLaGQ8Wc8Nz6U4ybsCHnBFSZKtt1ZzB8esv3LN",
  "key15": "4zNwdeFBhrpFHmc97mJwJdN43FRJn6H3uLtyJHehrA56s5LdkN7sh4jbyBrrs8kNEiHmsTTtjNx4c65kYFSguzxe",
  "key16": "EZAtiW6xozL2etbk266KvVoUUGkHXqS4QyuWFGtGQJM9ijAVDwt6N5jmcL8ZTUPuoFmNQb3kVL3tArsgkxrHshg",
  "key17": "4sivwzL7YMYg9qvtoZkzhuMjvT75xnREyDgXAdvyKjGduQX5yvaKi4bYetwxLGtduXY1Rvudy5a6jgUwxwyL31Qt",
  "key18": "2k1VY9zXiAD6aEr4nsYtmC8kv9FwJM4qELH4dNZMdMd5BzofW5KzaB9JKGFwGqXxeRtMoYWjEDKxcRRQteL5zVp2",
  "key19": "4bfYH2NYDVp8PQPp5QX77avACXyYD5MMoKo3hgsqtKmA3tCrnJ1s6z6iyoGch6JbHULCUfeT1GH9TDVCz3dLqCEW",
  "key20": "2MdBxqPa71jzKuYU52FWT9KNPkrvaefmCG7rTareNHokFS43NmRCAB1WaaV3X9hNRemGAvdfV82LCmeEBckF8cR7",
  "key21": "5FbkvujA6AyADtmGqbL7HZCFF11yZbuz81raCZmWr9xDk1sFKaYYtYNDWBDwJBEDAjkY8896m7h2QChFg6tXFA51",
  "key22": "5pZQsa96L2WbYcew9WKmveotnDbxUwKsBLqWZi9KRScecqkcbq7ZHh5ru2iJmTdx6Tt1rMEB9gBNYW4jrDg7S6Qg",
  "key23": "Wdoonmama4LosK1SU6v71foMcypMWeXCh9W2Mb8Nu4JExKmLpVgiHsfJm5PWFaiGf3eysHsDY3ciFw5jEtbVSgH",
  "key24": "VcfxB9EYtJaje2zoejfSaxrF8FtCe44yqvFBN7ZyLzNhASJQk6D2Xz3dGuBa5aYrPFp6BpPG65Vr9GfnuFn79T3",
  "key25": "2XUTZGgmqm1hscFugd9ktmcgwfgWXYpJHZ8mmGircyxpTuqSsmKvjeAcuFf8eqZtUUEdgNohxidNNiZJtYPNuh5H",
  "key26": "4WAivTLxBiZCr9mCsjvSgf65avhWonhwvnokwBUx4wzVRshjYETLmcgKf15LdUoVxLAvT3ReNzgTakbqDaXsJZDj",
  "key27": "4URZiHfXZKjWF4psGGq1FzEsfXbhwCjjBbu29yHt4XXw5uTsMJ3Vvjzmc8JF7QRVpLVMBmT3TRUiv2RgMMCxCaSQ",
  "key28": "3VqRCuZMiumN64H3ecqYwCV9RHXQq32cm2sb4XuUqGJVsULmRiQHChSUMF8WiX9KqtdLPwSNU1SDzt6vRzi34gv7"
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
