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
    "5Hjc2PSFs1pDzwLFSLQx5VNEd2P8G3ScasZghu2GX2poZP3WSHEhCTm8ZAzUx32Vpw9dU1BtvnjfEKLx6vJZYGMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rzSV2si2sanR7fYLWRFETwf6iDo1mLHCfmmfFeUBaK7trPUBo6odgsP532u1PHMJmhxWQc6zx5KPMeenP1nCsmM",
  "key1": "5Tvyykkq5tEzWZYWYx31v15tQ5qRiWFcisFx4nycpM4xMRAyDNwmz6ko9xmUNdXEgjhoXrwkk5xX6GWW52ZVXvUr",
  "key2": "bwCzCT5er3rEULrT4RX98NjdyKbxnLFYe5UV41kTZNHKMpMxH1eUD51QrqsQhKtN73YGs1mDoopp5X6N1sbeM8e",
  "key3": "4y994jbuE8LA4Xe8isVXw5xkLkPoEceeSy4hp7LCehzsMyLjNRg5CTXFRzAB8qY9tezVghBrRuBrpFFvo3sMEdcw",
  "key4": "XEZpnY86aU6uEVNHE37uGJco6ukD9wcWCpPV7gLFPy4YkJ7G2n1y8knp3AstK7NijgCaNH3sTxk8oMNfxW7FjFt",
  "key5": "65KYb7oBC5rK4jJWXLgTu4W8Dwywtgd96pcE7SdwXwoyGNWuZRc14ufXN1g61tzyjXjYfFJMeqoGGx1JhKbP844J",
  "key6": "3CGSqjdEmjkthuLmYDT2uFGg3ZU1mrfhF3ivndm5YGZrabnHjq3EN4t6gBRrf2JpYEVaPsQ5WtXNoSUaaUmieJNL",
  "key7": "66MZg9qdgHNEBicQ8BSsiiLXkZTyzApetiHqNpDa8Pq9G69kxKUQizVNc5QzbpWjvahrPvFdEn9kPhdVJsWGyPWw",
  "key8": "9PwiFJQGHvSsMiujjio3NJG4SKj7YWo2qPsrzMZyaGi8RExMqtoP7UwLPzDsei3XP2HEhihAAPV8oaCgaJmeBUE",
  "key9": "127jw8JHmNAiMLvPMzJTMJDXVcLUmH8Jb9U1LY6x6NgSQXggg3ZX1y9UM2Tv9ewgPeZWUAwJYdBnGBGKhpNxCinX",
  "key10": "52r9shghV1mgKkdcHKfNbLjBrgv9gtYSH7wN1yxxtsn3WfQu1d7GdFehDbvyZJPdfgM3LPrJipnsoPJmDKsJoYyS",
  "key11": "3qNFcy8MjD8rF69z5SyRqF7U2LtRMZrZC4GHmhRvg8ophALyjS4wX1xYmFBcgr69Ds5BbVarWxZKgGvLawDtemEU",
  "key12": "2NcfRuhqFd1o3d6Yut1fwTufu5AX9jQKbQQ29BE5tVF7ZRiF5PNS52AiWqJJGLiqk2sJSys5KFsw5Qw66hY6xgqz",
  "key13": "4jnX55uS2oDkGoKapEEnkba27ndueqQkyt1VNFVvYbWEUYmGdShG27MWNpP1dT2eD8dhbo3pw2DbVusPXmdbG6NT",
  "key14": "2itV6fawDWtrCw5kKomn4ZspyW5psyb1nEu7MYGwDXGXK5LuvVP5Yqw11GHBeoma6ZfG3ZKb6K4CUNm8E1xs4hbj",
  "key15": "4WzHDDBPpMgLE8NpkxMMUsC1Gh3P8Xmf31rnWNebrokVofVg2khRTsepYiGmcKH1v5bRRhFN3vo2FBpuhnpbRyXk",
  "key16": "4jQfG7esCGLtQnTHGD9iCPow6ktfrbKwKgKUhRjLUiRGno1DobsE7rogwaMUG6TztaJsSQjtRkKoTEZv9MC3VHYT",
  "key17": "5gxiPA5xhze48Hde3HPQZ5mVedWoGheqPT5ngP2cT2mBKJrmST5G5Gvdet6Fd7XU9SxaVoRr7gaZjRYhizszertu",
  "key18": "t5f6Mx6sAJJMEbqXwHtJEKrShMxxekPC4SZum7pB9kqZzQgnL1qWVWp1HhGRNYNiVqgyCVLSNWQMA9sTJxWDwmm",
  "key19": "5CPAaojAgWBpcrPs1tsQNhiY7ua1tk2xZ9qNiJkz4SbXiZmHpcT6vVSVW3aYntvTHXAUZ4gyyDufyx9eixAh6696",
  "key20": "2BBMgpF7tMxJ88NGpLqqr72U3BpoACDvHNnEz2SAS2S8fWyE1pKyVgcv9Woh8voZcjQ1KhUTjjJFm36SSCerYnNf",
  "key21": "2kgg2bSGnxJz8SaXe599NhD2cro9LtQpdEkowcB3o1R7LRrCttBxK19RwvHFRBGd1MUFjhBY5Zuszh593CGB22dv",
  "key22": "5nS8GyLMwFgrqvVAUmQ7gmmTizaXKVpCCCqyTjTUKsSYtGYu52Hj1uzsDUTkBvZiykq7v6fMmb63m2hTY4T79nWe",
  "key23": "2uTYqWFssYF1U4UrViAM1UUcY5PNuakkhJnt3oEHSKQ8Z1NuV5AE1AAVNFxp1Lr5S9egpeN6xqFxG4nezVG1ZwfF",
  "key24": "3TLTB8sE9C9eYqykfxPrW889ihV8DeFoihmUQQbftFquiXqew1McTegLxKvG1cU7utgckzLdfBqneRifoJqXRf8",
  "key25": "nm5zJUvXc5BRsfhg9dX93PQJB7WD2yxvSzqv31NDQbTE7AaERP4MKAwAm1869rSS5f3K68yC67tevMQUy999863",
  "key26": "5JP5ho7BixQj2txxXcxXpymx1HECvAropqTGcYjUvAxoTTzHwZm9FzdLfaLHuHYpdd7Qe6espcnwPTzGPnr8chvg",
  "key27": "3qJKxpMixzyjNKoVdtqGJ3CaLpmHFvMQDcXv6C6X8msp74XcLaHXznBayLjib9fAtYYdRTUWc43i1erE9KCtufwE",
  "key28": "2mzvy1isUN1pHFD94cHbFmoGnkyh5je5B41TDT7YtuxdNaYjsKoViN5eAUsNRQCXjv5gehp7mSVmTb3TeHCBi3jM",
  "key29": "4fBVZcbEnjBZ74SJz5YATRN2radJJj9T2RAJ3mgB2fNJSxzniHRGYt36L4raFPwmdHHbaJ18FWvSVCHigyRc1RnS"
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
