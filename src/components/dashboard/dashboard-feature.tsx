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
    "5Cbong6FAhXQwNC2PbRwHCAVn3PCPG9FxQZKwm1KTeDmXkDubuodgsQEt5GDtWvKmmYoLWhVRxmsezfhZDvd5iqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GoqYFiroB1Y2SsQhXQN4HATiF66NZDxPnNsZTNKp4qBpHrWQc6b42gSW9ijbcbY3jswAKLjWHTxNQJVZ3cSH2sM",
  "key1": "2876afm1NmC2ts1TaUbBNZyuNacUmKwBRrjtR9CwHqUDUH13rAkwyfDRxM9Emgws6kEUFYnhjq2Z31vK111YiSim",
  "key2": "XgpxaAdUVmZzDsKcWaiaFJ4bqz2XjEedXSpiy78qDkqcMXB9zpMqg6dAxfheHAkb2oJhMS2X78LxzbQV1wjiepe",
  "key3": "4wpa9xP4s6HpA7TGJiFyL1KDvkfiqto3ct31PhvzyiSUF7PJg7p3QXXGYUgxQShn1giUm8QFzPT6CEHkmyFygeEQ",
  "key4": "3peesDPhEDEfmo6nSPzCkVN7R8AmC4EtHkvgEG9Jbw6KGrV8PhY1BUJhVSWWLiGdx6wYBJc8Wovb6ojCB18Tjpq2",
  "key5": "31Tp7Hyvgfpbm9W6pBQEamRLcZa3KiXRVnSp8q2SzPoAxD1zF1NnfCfAbrY2BDY6BL1avnguiD6uXsMZB7HAaRgC",
  "key6": "28MM78xB3sybanXsvo5gjE3GLbeGzLWSwSNwo493maXfYjTsouJVXq5T5tutxwJ3B8HiqL9VPr3otq3M9JPJXuk7",
  "key7": "3rtq3sCwwHuRmhQUpXS7CLc6ed9orcvX4uS1tnKM89T1zqSwkf5mC81azUNthQTCbMzXmPD6D7xmst2XT1W7nfrs",
  "key8": "XfQ8EoRFg3syeggjmwhNPzPWPSF8YEwrSgBcdKcjfgxb6JgLVAoanVvC5MTQeRiazH3gZx67QzFqzPfFqcXzXoA",
  "key9": "4JrUMXLoU9VASDZZWwB1C5uAbxwaaQg1NhxUQXpkVfCxsX3JHYzhXzu3dtpcTtPbx9CoYSPGU31RsbwjYgtkfEvF",
  "key10": "4cQ8gnjAoW8A16rYo1TYfxx33N492GzYgfsB51qxLMeCrw1XmMHGFxVUDGnytuk9ETRcBXvhynszBcwS2aZHPUje",
  "key11": "23xDbrYwWxaeEDE6dM4QB6L1T6PiQMj3YMkbz9vQ1dNvimphNcDGRCKZKAWa5fjYPnkhirv6mTBpwB8HfBEfgM8z",
  "key12": "2VEuq4fMD8ijVLfqDUsE39PpLsZPktasGDMW89GBAm7xniw16HDpWsTM6p8XBpb7fWwYgwAouakS2dHDptkcfGnP",
  "key13": "2DV114BCRM6Fc8qbb3MoezuZCdhsEUaRDmpUkEodiBddeuWxwqwm41dJosSdyUhfrVHpW6oYuRzMCcFRxynjEUbU",
  "key14": "9WxqJN1h4WZjqq7qNcXh53BYnTBaepAHMo8YxuGfugpAX39Uu3goEmUAfhWk5cvzkNiYtEGHJo8Td1mKjUQ3PcS",
  "key15": "gHLAPGd46DHR1PNsYWVchu6NvqeTaG36WBdnTen4YBrc9wioV26CMbu2hhD4X9TfE6vCgpJohGWPsp9F3dyZ1jP",
  "key16": "5VajAyz7eC2jqE2RzcWT8Ug1dERe5UYMbFJKZWGFt7VkjSr3NPEE7vVUoZNu77FUsBk8YmrjuD98Qnycr9oJ5xWo",
  "key17": "2TsYiuLEGbcZwcYmFKVm48YGZhtVfJM2RTbiMCZD12ZKnRhuAkcXd7Dw5ei8ejeDzs5B8MpAbHojPdf1vcGWD5w4",
  "key18": "25Z9rii5PWF58Z7Eq1WzgCJzNqkXJ7Kw1x7nAybW12cAfBM3x9PhQ2FnwL9wNfpMefe2gLRsRWYATZoHxwoZu6DB",
  "key19": "35b3U9uFYocCTyDCcS4NV3jiigvnuA4EVeru4q89kfnpfcwYs2FbLM3piemp4RncDtDLgk2b66QMKnJyUPfygGGh",
  "key20": "ru29YiBokZutfzBHqvNc5qg4zubryEyG9gjeRetNpnKNjWP8T9vXTX7NLJyDv4iZkdYw58oCmEqueQbfnYnxSgZ",
  "key21": "4poP8mtFL3gtbLxXYEQUqenVaHUZWvj8CuEsnbbEEUzEmDjycHqQ4pNAmw2ro2BurPq676FpnxdWVKQ4aqeQKYda",
  "key22": "254g5R9sbZyGpLAvDas57BTrKLHbU7A36e9u5aZGva3Euwt1t9oVu9jd4KMFbkuQmnHjduhXK4z1hJwb83oyCALk",
  "key23": "2DtxPepxjkNt3nnXtmgGRiiEDZsPHVbueG6vJoTosetCA28AwZvWg1WcTNqJJGRUQ9K1u3QuNiLGzUXZyf7mtrhB",
  "key24": "36jFBKzS2Xe5zNroxnczTgW8gEck9rT4vYwkxDZzYEnW9htcosPtrT11CgVn3VLSBwQxWUnrLnExrmHVY36WbRYq",
  "key25": "2safzC2wjhWkQEpyPx2WssJrmhaTTEfUfuLXCkB9UZTMrVStXE6neSms29SfyYsviy6GXyjM3jB7ynLtwXid5TVv",
  "key26": "PBfgLXVy6ApkBmS4z3X4gxE1VUxHfiUeoJRQAf2rfPNEFAaXFVkNaPtYbXGYubhLpPempC1gvzPMfGjJBH2u98w",
  "key27": "3Ckv1ZWrwSvEioQJ8PVeE2crj4tP2Yh8V7oNa74LVVd8gATevTCV6BTYf2EChKCUjRYLfumdJZwhpowqzAbxXMDP",
  "key28": "4mkottgzYq3XRAZjot2PkihnPg3p5cZdxG78FKrB42GwQUjCk67bRCiv3xjVGyaS21EELd9eMY8R7RfjvVwi5dzy",
  "key29": "52jPLPUkkuPcMg1MNMDn2UsUB8esBbQZhZZfm6oPK3uqKYCkyrpMvxMTdkCjRHr1zY6ruMRJTXpHaheMcXvgmLKW",
  "key30": "2a3Xx6mnfMeNMFJSV4ngm99DfQqAfwJd3y8BP8emDjHN5w2UgPMBFYa3B6pTvqSUrN1aZV2RtsWopEZJWh2kCkFK",
  "key31": "2LPbGbsFr8UKj75PApSNTwdXBJr1b356SSdf8C1cKLv4w3MuiiFRdSpp1BoJtn4KJKjFPK9y1gpFgMwmT73a4QmF",
  "key32": "2QspTXLDaWUAYwK8TUXiGB2zxNCd5Caq2qLdEoA4bgmJJvioMB9SkZj4QNJXT21DwzskEL5KVLF1oTmWUE51Bziw",
  "key33": "26u9pAh77peU8XCtRMaBwi46oFroyYNDLNQTWB7bKkQ6qwxG6dyw5NrA5sKFiVC5M7vyg6iiNuHWs1tiDVSgG8Dq",
  "key34": "2aoh8mD6zhrp4syuVp6cA1An9scTVNZvMyWPy5G2KoVGjnBotXcHRHVGv76AjXDWKU2o68bAUnTVpiFGqZXwAtwa"
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
