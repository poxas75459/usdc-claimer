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
    "4ay6GY3fhCSiK2UWk7x4EoN9K5q4NEKdooYJByGX8mUXjP8u3kATX2CLJJS6uKe5NYzQFXiaXA1ofA9BvCHDiGV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uERFdHGJzt33MmFR3YDoEryUJ8itbri7xCGtcmbjj9zgEWAV5i33RCRVnGzJVVh85hYwbGssQnB8FFNVV3VwqPt",
  "key1": "2w2wj87GXffsrwHXuzShL9uyaMv77qW9FGwKsK1pbg5Pj2GfESPRzSEsVrMgt2G8AtcP7PxtsDW25MBaKvsRoFGy",
  "key2": "5DuRNQyqMo7FwCWEnwC5jqDT3DAGPYsUzBhe6nCK8vNdGZVPQHHddn3iXiVRDAhfQQqk7vzDTRL4xuqpLhW7mcdY",
  "key3": "2oefhZ6iwtySJiHNNtKVptCVCXucgURaW2YLb958mL8TwU7BKqsKcwAyguomeGoS3uXTvzzvc2wkb3swdR1GEvJ2",
  "key4": "w8nRQingd4HBE965VSdqMhw3C5Lj33WBcfbiVHmNTzgSSvwPv3i1REpqAUxEatvoQUJUJes2UPAwuLnRn1fbcoS",
  "key5": "5bAkUec15vHT8H1PJNnqPgNtffd8ZRjnDbnk1R6CxZ8FtPunoawGmkmJdcsnGupWxiAkEDWcMEG3qT6L7Y14fb5Z",
  "key6": "2WY2BrAX6myUGzANAsgTKrmvuZp5ooQi28M5uyzaLnCfQN8hF3wL57qZv3v1g5n3p6WwDLtWCmnYwQC1VCp5GiKZ",
  "key7": "ZSaKT3oBvLj1PLXWYmYvGLi8saNEo4MNcA2veoAp8iDXzJg4dvpENEQ1ZaMKrCibeG8VPoSoaD7YC9b2ZkXURk3",
  "key8": "28NUYZTsbzdF4qkabncZid1RZMxg5mHzpNoB1UMGa7RuA1htseTTXNmMLa6KWMcjVJaXd5UySEUKKUukmNstQVNj",
  "key9": "4jDH4JFQjkxzZbRESKMGpSR6Q6X6noCJLa5RinVR5o6zLuGpf9m7okQFXdrbrRfZpSDqY6H3QPJ7pVwZH31EXJ78",
  "key10": "4xYHhs2eeUAUA3w1Nx8wHghWzHGEJ65bKVtybm6QqdvhRGWhsoaEQAvQSTeBgHmVkWMfErJKqoTh4spd3VgocUPj",
  "key11": "3HYJ6dhcbbqxm4AfMSF8sYVCipcPZNgAJqFXWa9g4ZiCTFhFgDLgabLjdJ4L1PavyiWHHyaARDB7fPNL2ptCejHj",
  "key12": "3qq57M92xnzBfierD83CZjHqeKDrvET4RhTKzQKK8wLVaj8JYSMqNiXimjsEEf5DE6zHRpof9hM84sbN6GAnFXwB",
  "key13": "2Eq4RrzywtksxiEuCjCsHknF13aJ89HqGhUcmhVtp6Mb8w5wJdfvNJjdH1kfGnQR7eeeLMTTyWNPDcao1UpsmiDf",
  "key14": "2L8zNenvDBC5QGZYGT25CRcj7pLd5c5jK9daGSviMBMh4kHv9jyk63tMCvBozTNsiDPsENVW7cKARhULVjesFGyE",
  "key15": "tLiNeqp2MWKeLaRv9buaU9zNoKWLGs1Ee27g5gTDYX5SDGtizfXPu5tJC9FVh6UYtexKqKsEYDKKCMrqSwqhUHv",
  "key16": "29ojy9JHKoAtGVppHoZNviZ93r8kfgPW9ypGsgNjY7rAY1goZKjQi1M9tYH9hxHbzvEiCi6minKT3j89Gc7DtTQn",
  "key17": "42MFBWSHNQbyAocnXsLNhoSGQXMdYK2TfSWfy83BPFqdWvfgqKyeJ2bEPUcjxGxPUpXWhPN7H4WqvP2t5QyvL3tA",
  "key18": "29ousTFrJcyvSVt8bBzhz5CJYNsW3q8hHjHS5nM2tSVWS1LtehUUAV6Jayu4Rg5nwMmf3CXTnzMCByjgrUviv1gv",
  "key19": "4nQ6UCfTaByKCsrEZgmQukejSmzxYjdTFgEWXvYCjFrNyQ17J5UxMC4bDKJEKaJkTsNrLCsvHKrCQRiXVmrpSA7w",
  "key20": "3NAp3v8AeeCJsTCdQvtKLg8tag7H1qec1obGdNZw7C5KnmdeS9Z82MtT8ttUKVPXGuHQD4W6ktiD3ogWrJ7XUQuV",
  "key21": "U1MrvQH5dSKCifR4wxyCT5B7DgG9MNUASYzLWXpeUtdyazxqFbzMkoPDCrCDYWR1XXFMDNcX6XPXiKW5dPczctq",
  "key22": "3Uw8magwaEkQ9x43X5YfcHFFUPRC37Zj64fyPhXRiw1atRAsxnEyHoNcadRDaC7SCZACaWoyJFAg3hesCMLuVUtV",
  "key23": "4cMbyiUe4Y9ieeBbQqsSQAgb91CXvhDgfhobcoiy1r2iT8bpejjauTqrhFZmFSAKukY37joi1D19YinqRJuUBxks",
  "key24": "TsG5jBDe2yCXXHE4t2391Y4eRjvayPeMbVDmvnbPth6h1cuVprv3qXs9VqpgrvK5D65osiRXMT1k25wxGM3SKWV",
  "key25": "51mKUA5RutDTjWRuCweoTUaDkLxEHkomWssQP5UQn1GXnWSKHHf8ebwrJcsVeK3RdfTxx48XkyxzKPD1vr9XWk4j",
  "key26": "3fRbjZGBzPut3UGKiYwRk8nF5F5mFgrHoaPZDfL5YPmREMKBAs9tBhXt8aWhkJrp9r5hQT7bes3CEkRVMndjAZ9a",
  "key27": "5zvdSHTw5NFLhDepxMErxMe1BvhB3s1su8VuUhoCm3FKjCK7wdV2efFyfHiT5pfK5ciPZ2Q5onfjmgZ34hp12gNA",
  "key28": "5VVUEUzFyrBk5xExJsnSFsV4kQkEH51YWThGKgbAQreTZgLk7BfB9qj3qpxC1Sd9iveab2SFLLpYgXLwWAzZfma5",
  "key29": "2TLmnSpKRRc1aQ8oTqeym5Fvo7z8dS4WcHfQRg8MPs6dkdcXSXdqiBNQKPrq9jyJZfFyYyJkW6xoCCAka5DDpqUG",
  "key30": "4SJKBrDHwti9svW8LVRtRGZzicYK41297NxHh1D7vGRsSxJkzTUyJsPPUXSxLTAL4VPavbWvhH1V9QoTpiHTfzbt",
  "key31": "595zCHJFufQDRQrTwYbd5Hw4YVuC2ntQNJ2tRwZPto66K3WtWzN1GxU4r2dQ9xWDmbetLwddP3kHbjzH1PhKDbbx",
  "key32": "5LrjLPwmn1KAeRqV9Nke4MpHoKFwz8ZoEJ2jQDfYuRVfVaLg1KovozLv65gQRd3BjLWyMRUdaZgako2x1HyvuX1w",
  "key33": "3Vo2TowLZkFX5ccUZ1c8wh66JfimB2tUi8wgSjMnPzdXU7DdaxLtD1YZ2fTMSjJWhm5vFyVyFVySWQCnZa7vjNPw",
  "key34": "va4NTmJp6M6CUdB5uFx9YEjdCPKbhwh5aaax6uMrnomZ8FGdBGsQ7Dm2waRtqnLt7hGbErywrciEYi9LzGW58cj",
  "key35": "5itSszKXA4Ds8ZfU8dNY68rYGqvyLpAGT9fxATorcdFLteFzNQR1RoWX9SxrXB3UcNBHRLDdoCeqahBV7mfitBQK"
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
