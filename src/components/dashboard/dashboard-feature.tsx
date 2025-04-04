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
    "31gpj1qSbatFLPpYjX7yq6cnjt7x9pZ39pFcqSPAf1uPUjqshKPZTmDs56a8suoK7gNHYSQpjQ7ep8pkSPiCEK1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2phVemTwGTSPAj1LqngikQzcfzR75QpebyJ3hmVTFaCr3JVemjm2UTmRdiT1i6NFr1U4hqa5EXHZLmLU1AnNc5na",
  "key1": "4Ru3MpHYf78GWCC9RErioThsZTp61j35rtt9DfiC1S1m3CxWnC1o35ZuMs7XnfGVrSnGNyLSG1trzSikrnV3GzCR",
  "key2": "2Xrc3t2XefRkVo3bqpcHq3pJZmTAYNKQp36JpxFsN95S8E8pXedqc93H617YT4eJiw754RduTxPoXqC65Htc8a7U",
  "key3": "5PJQM7UAsz97uuWgj5HjWeR4w3Ej67BjvQnmPuyNSoNtXNeptkbHBmAwsnnVNWfK4W3DPBR4Z2FcyCSiX3pDg9Bz",
  "key4": "3oqe6brPgrXt8X8N3X8svWFK4UHFu8GQaycqVXjcJUWJuiFEXDQJM5gYRoxGNQpyST5CmsoXPDx55tTcgPFW6FBL",
  "key5": "3BmVSNJJV3Mng6eTRws39DS2qUFA71qtbcaWE8jpxJRsq5KXZgivJsqf3CuhSf9putvqoH3pCCChdvSnRWzNSRUm",
  "key6": "31trcrGr65P53VRZm8d2xj9WUq3oD8tLKZh6MigN4Bx3HiQch6mZBTKEw5xNbU2u5xefRggcBQKcQAawZadRnE3j",
  "key7": "5BMA25FdmDKdri9maPJt1jL5XeQDpbpr6wbHDXYHAmU2yvHrgdWDtc21gG5VLGX1EZ3etZ47yTRzhkWtvqZGcE2w",
  "key8": "3sbbkwkxm4pu1xvK9v1qHwyHCca4nSgmxsXC73TJmbbKqassJxwPJAidYYfxiG82Do4LSRePrAG2vMGMdsDqTiBd",
  "key9": "4sk2bJRuagMKUzHAJFpWW1tNA1SuZpGWqDkQ6ZcW6bjsoUWM6bMnwrMCb5xmSfTS1D8Qf7M25mpUiTByJ9kwFVw5",
  "key10": "zL29KhgNfTL3hLyZ4tNN7SFak4ZHcc5kTYEyuAYrDZndVwmuT4mub2WSHM8usjeLvoG4mJSqHpXR8Y7PtgzEbfc",
  "key11": "2TRAdWxC1qZn7JbARceV3msrCZu8JJ38GZpKTfv5axuwy7mM3PMHqkpLfv5pu4C7C3e5i43r7F2cw2WYWij74qLR",
  "key12": "2LHiVzX5Qia69JWoisxiZS3gvg2V4xTrGsTftY3wSPocYfcYBTvbf4GXjDoZ4JaTPbRiaDiaxRLou4BfmhEiT19k",
  "key13": "6777tszgqmcJ5LE486EicgdjKFAcM8A314zT2oreKrsvtHPHT17zY3QUvoDH3wi3ZWobqbZxVw22t9EoXju48jHF",
  "key14": "3jfNMTFwTzBd93qxcVZ277KeD4FGJvsCNZXGdihPaF3WYC3GozbNwjxZRSX3aiJokaRU6WBKVQjoaaCZZY8MzHzr",
  "key15": "2Ke7AjgoJ7qDTyobcojeQXk28oGv6WbXJGbWo5ptMfy9ynjn4TWnmZ9BJunH2wYUgMRgLwAvxbZnpNnGAVLNyt21",
  "key16": "4mmZRtYkVFSSumedyMJPPYMJwQZU23y3KaxewAxjZAc9X5bFHUCnvqunwqLr59Lq2c6Ym79U5tLFMVgSo6WEroup",
  "key17": "5C27k8nZhFnRrhbk2kXASApwZy6f9ypqDhG1HPAqXnvfn8oDA9Bnj52Bi5zSfKUJfDxVNJaBwnAKWUPxCrbzkfb4",
  "key18": "2PLdZgqvDWFCucfPKvP3UdwWtag9CJCr3guw4paNwZuJ5JAqF19SrEJMCRbBSmx9Cv32y8fQNDc4LuGF8akhMXJy",
  "key19": "5QmJxTU2VT6cmymieeRVQdgKQJZAyfD4wXHuVjyiD1LDkP6vp3JZBw2UDRvkMYr5EZPBEgBmiZQtSfF3Am3Q7gN6",
  "key20": "2kDLCTg2mmcueYUoWsvKztFqRW9bRdXbfNGBcgqeb1VkVgQ7ar8EEMCXxg9WS7nrR2YyEUFSTcFMbck854duniFa",
  "key21": "2ge4pyMWbAH3Q2SC4WARZ5M3JjREJn8Kfg2UpUUBg2fj3cZwerRXsuW6wRVRHh5wYHmV7vWvwkKP8eyQbLLX1VRi",
  "key22": "2VuHiSBsEt6Z3XdbPJsszJTN1e4nDyRYygdwYUG41d2aG92zMd3MD5chgrfqHC3EmGyGojEZP98wAxjzN3bPqAyj",
  "key23": "6X8TrW8hLCiT6WAKk54rQxRgdsMWyWQAPgYS1RP4vqzDeXt6u9qeCfCepBkZV5fasW8T4QfR3L4WNgr5Q2uqjQL",
  "key24": "4VyVmm8Z2mDSEyi8rcFLCifs1tnrwEU8vWNXrhfmwCuqY7Do4RwYnLTzJgK99hy3GawBCH6uVq2W13eJG74KHgYa",
  "key25": "5Jz97GbGYrwyLvkcPhtR1euUp9F24Qdsgka9bW2hcFf3GSg16eFUZvZiJAp59YKeZw6tv2B6tQ1jvNwJnDUvrX7U"
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
