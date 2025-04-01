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
    "4ouCEnXQRAAticYJ8S8PmmRUfDkMCvrDBRZfoD7C7GzsQDmcALjZ9pk6aMiFwQ79r3ywZ1tcfdwrkue6cByuKAgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ENw3tLttoE5QcZkoiAKRd8TDyddt4ZxmVFk63g4CLqUTQovD7vDbXq4ryBxFQZfa8J2ad1sYNyTm9NJqeAxnKM9",
  "key1": "2NcWegvgXvE4LkSPzfGAy5eKZYbZ35tSEPqLwffVBpNK3A5HY8CdGuhME4a95VCEZjFVJnyPsATeNwBYT8RkUjT3",
  "key2": "38FY2JiBd8Wr96Mn45h3RDRvEdudqifu2uasyris47A9KRGD1hdVak8tY8zkWLrbab3quyF6iZ3KvaLYxtzShJMd",
  "key3": "jWpgZ3dkt4CZLbCwY4Dqi3X4NDTtk7xBGPNUPZyVQRzA6X97NhLVhd1M945tGCaGR2qSsD6DeTsuTVXsud7mfGj",
  "key4": "5cLAi5rxyp9df1uCjsmcqybVfJiHd7G8HBZaoY99f5XJgjSE2Yb3oE8yM9JQfFEUNaYx4CeNVEY63B5QKsN12aVu",
  "key5": "5kLhyhPnM5ncneDVmnEDaGsoPpSTY4ZgBxLtvdVFzRL6WjkVNbh9Zn8FBu9cTRNG6rWkyCWzW1vAaSVeQUAwoVEv",
  "key6": "56QYWBvT1YrDHVj9bqxdXUVxoZvs3aaDyXbBU1BMW9yc2RMVwmoVo8fmL9r1jVFvVgWduU9gYjHDB3VisrztpRDX",
  "key7": "2kJ8UTgqSPRPELCP8u2hNegbLPQZpGWPMWDkoTx5nKtkuxQD5J5PaGxMnB1KKCA3R7m2Dige5zC3fdboPBwDGoDM",
  "key8": "49bpzLaP6ZFjatksbqXDYoutKWAibZ3k8XrjHrvUfp4bgngeQHyL7ZU6yYEnbFqYkzGMPWHssWr2BMp3W489ND1R",
  "key9": "23tXfY2xasg32VBGDgMpJgCKaqf7ezn2UDSrRwjYB7Gr6n2mfA2fPW7XHdUKhfBUSb2cWe12K6DusJQYafv1eqTm",
  "key10": "2TFE9we1h9t3hYejdF82Rbp65H6s6Fu6ddQ4b3mv2Mkd4QTyNiigBJsGKnbs3tu33zxNxyM6LdFh8KJszQ4m3bUN",
  "key11": "4nXBHgQ8EcV8jZRqpAFFSzTuEwMqTjYjc9qZtvGCnDC8VqznLXBAaGYuUUN3eEgQrvXrrcXkFW2BwQKSH3GAGe4j",
  "key12": "2CdMFiU6PChTd5vDmZvQCqjk7pKBhStKjPHoWqoU6jSzaeihCwJ5K5VxQzhfcoLn5oKzEDBsW9jJ2ND2bw3nrgM3",
  "key13": "52wezui3XhaGL7YvsZjmuh7k3pKTA9jH3Um25CnXgc5bYxsZrAp7SArfCoLDiuWFz3iSUb6PfU7RBSqnXKhvoKC6",
  "key14": "47dNH97wjR9vVHn5PGvJjsrNvgNQB8eYGYqeE1j35gsXrsSCRqeqidSLryh1oe9Afy8Z7Rctcp6ub4oRicGwCFVP",
  "key15": "5qNrnbY1e178tD17MA27jxJdj4jmXFTYjJqLaCpFnFENsM5e1sHxyfjpvzueGpWSYzXTPmsCKJGrKRsYYeXmvDGH",
  "key16": "2ehY1r5STErjokJrEqt5XoF8jArd25VhJy81CfgvuaP6yA2hh1xmZWohm4NzJnVwt9q72gUcmYm6Z6PUkfiCgWcV",
  "key17": "5UUybsLpfcrfCNA77FXgqmpjgWaVV98XCDrXiWQ4TKPbg7CYYRVVBiLK9nvC5bVmBQNP8xnonYdiL1wkGpRESUkm",
  "key18": "66P7A6nXsvXbEtyb48afSunA7yrEJMgvNtmzq74ZHhcawHoX92eEtz5LZH6tYKs8SYTSMSmgEh3b5otomJA57G6F",
  "key19": "2wW6VniEqRu7V2xWGDBSXN6pcDFnEET1FwAFgmzMWB8RccPE84WT8wduPyXMNaYpJ2kDhw1MGnrYNsH1NTYQSBxb",
  "key20": "cryKDMWaLH2xBdny6ryicSFt9RXDuiawhNniWcuvkSD4evGS5usGjvK4AS7Dfb1fyuuXJKP7xvkTiftLEVFusTK",
  "key21": "5tM65DdNWHGcgdQaLDyfS67h61TTpHMsByugH3AzLVKkLoP2L7s1rg22tEk8Ga673ZYfBCBEbgBMSHa2fquCVZUk",
  "key22": "66bxbYVWumEcDgCtCwYJzP3D77kg1cngJ5gjJdAeEjcbpdXAKWstEEWmVM9bZjS2FfxbNsva5XAxVpWvWRCwTAxj",
  "key23": "x9wQjoFPZ8vyYkANPMBTH38RBvFfYpHDiMKs7emdonRVDNwDryjG27ss8Yqw9Pj4fcEwtvCzUiLXaK58wKJbAmG",
  "key24": "gUe68LZ6gyeLKPiDJ8y2GeEH2DnFJTqviZngULwejrcdKEPxTQMchY5SeoVfy5jwDrNSgsyr7q7kz2NQ2XXQZDk",
  "key25": "2bJ5E41SgdhNMoHjvUEsL49HNDRFSP6DxJdFP6vqxU7jxHYDVCrwfFz4Chah4QCoaBY95jtyyBpso44TsTKvdYzW",
  "key26": "jWmqpK3kZvZB9YvLiyVYwKyE5Ls5HZF8g3Uc5AyAMun5ZVu2fXnybxnKX2vVF1wbGvm3zh2eMTePcLKBhZ9fCrv",
  "key27": "mJbqgw7BfVujkLktYAENvhKCQXGhoFintdmMZLcvvYUJTDZayYYc2fcejc9GKAvsUgDLrmXLRnN1N89KrrmfZ91",
  "key28": "4xJ7f25FFhA7r4ydtH9Ku5PEeGkTZsGiYS42pdzqReM2cnKhWNArTPxJ4Fzdqbz26Urynko6UNByix2hAhvCTUES"
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
