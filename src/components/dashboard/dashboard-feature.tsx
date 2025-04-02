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
    "3ghNKdmeuq1mc329UEscmZMvsnNF4vwKmw3KEWnALeQ9iicgL3HKdmDLZqJprWRN2hUGiCKQUQhPCCAix31R9Uif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52xJJxNBjfun2VEnDQ1amqQsgpsquByEamkmkS7unYFMaCJC93JFBhf3H9aPQ7PMUmQyu9zNcpx7RsJAQFNuBdAy",
  "key1": "3kutBiLRbG5p3JZ2RuDXMBp63xqCwxEMmniEkRAgAkhaMs81cZeYPsJj9fAJwoTAFm9K5rqmsz2BsZLkC3WC1M9j",
  "key2": "4DW2vsLXBEBvCjXFGLHqCyM6uE17trBNa5FE3BrmdPx7M3HfDmemVAbSpTFUPHKF9w277aKnBtum1VejU56hH1Tz",
  "key3": "4cjbhKBmtuzuqQEiwciKkvM6T2R5uxMxxkHBtbA7FsihMHpns3UPLQX16MJkooyhEBiAJhsYeTApJtg1faonhdfU",
  "key4": "2NZBubuTCeRKW9uZ4JPWEqKWuqbvDwZLainLA9L2iErn5V5TiDKJj9uCz6p2FjXdZdmZb1mpzfi3qtPUsNDmZs2o",
  "key5": "64fudn6b7BxjyGPgMj2QCoF21WBH1LNb2j53yHSnzdG3x9imNRY4SgwQnMMBcbdzLL5znJw1poHwMrRE7SY6oMpW",
  "key6": "5mu1WqatVykBXjMqB6UriXChdGHKZJEDTo93YGy3N58PB64WW8HuTCexP88g8EjrDdt3efz9NdG5nQH1ZBHRkVS9",
  "key7": "3CtMZYxFKuSkqjs3EyQWbdnNWakmhpqeYwaqcUMA5nHwrkNXCZ8W64nfZMASX2XyroJKoQavc2WxDts8qwNStKer",
  "key8": "27j1mznbNcUFN9ZbHsHPv6HUtQdBsLnNjXkrFkg7Thx1tLAHd23yhPRPtdRYNvLsuBLEdr5YrxDaXB2FojF2TPAY",
  "key9": "2tYHKLUSsLPB6CQ3UL6VLoh6awG3kBgpZbMsWUp5gxq2T43Byt1f6rErya8d7fQEumUTbsuMapDActUxdZeHg8Dy",
  "key10": "2in5DWGMPMbDQWw4pJzvu5K9qQv1BZmJyEZPYiZMhxHHZWyYfBbwdSGfC3e3bWw44oRDSauiQhmhuCnbPLXxKsNN",
  "key11": "5EmHNEj8pVW7MfhZaCvq1HMMZeZ9ezXQ85rvHWofvoAuj2qAx6nZyhHRmyRtfjzX2nUEdv4QoEPT8pEH4YVc2YLe",
  "key12": "mvSQFQy5YXYwwJCpxTBGLzviKb9j35LFYM1NxC5YxsxeJSS5hxonbTqwMcJtbUB3TMc9ED7z3YwPdzcsnrsBUgk",
  "key13": "2F7oW3QHRiq7zh5CFC2d9epBLAKzCr57qwxpKKNMg6mfpA7RYCfj2Snw9d8rkmDT7bsZy81PPmKuRF5qSibkiTJ8",
  "key14": "4HtAQktZQU4WBX5LbuHMt6YbWb1QVfhBs32k2oZJeqdzVUALA3hMyBssosfRAaJuijdZvXyZmbqHd6wU61AQCuCM",
  "key15": "Am4KiE3WuxpD1cmpqabvG5h3PFvAYEMMSiGYxaGzJ3ka8mA1fJ1oAam6dtF7iFHj3byAKMS2E6FJTLVG6W2kfQV",
  "key16": "4yHE4HfFWZJgpjV3XBDXK8URA4g788mxuHKRVrzN3C4zeLtgF2joXdU34j8GMJVq8cHt9qz8JZ398GQTZsdFopCw",
  "key17": "5Vf7T1Jy5D68DYrjZ2cvpuSLRjp4SdwhPUJGKigqVN7bgKHo6bJA61UD3zeWdAMrAN4qecid36HZKpSex3APvovc",
  "key18": "2E57unGr7Y4TqVsiDvMaW2vXhhVSUeHMbxyDBEeBGfF8fEPFRbse8pDWbWgBKzZ85cHh3FUvzBJ6uj5rQPE7oYQ8",
  "key19": "Xs3ud4d1yS2FsnvBHr91488v4KFQXfdCVFet2QGne1UtX6z6zP1vGGLyJ2PZuiakxjbprc6nA4jAAQVD3Nrc76x",
  "key20": "5xefmDG8SQoG7JigMBLwd8Dcx917MsEsvaBPoMvFmVa3yWbyr3dCSGE7v52Pkir4p8rwtLq3osFaL9uFrvRiWye7",
  "key21": "KDi69ikHfqhD8ycLkCYaUuQyX9jbRYgHchankd1BCmWzi2dLeYZdeZgVJiyL3AKdWDhs1wC2hdrCGcqPfpzBRCZ",
  "key22": "3dp3zHLbYgEPJ7EvUEHwst1nE1oELCfCYB7DchnVXGGto24GL2BQr5py3247meL5C6PtpNaMYSSVkxW6gtERzq5Y",
  "key23": "1MV1KdFfejUYsbh4dj5gARCnGEszPbYPXbuMXgEH1K391L2geKs6JKqk2tpSqWMa1NoX9RdgC3i1yVUVnQ7ZuFF",
  "key24": "3fWv6CMvxML9QcJD2UHUqauyroH5aFM1b24LeEWHE8kg5CSNyUzxQvRnf569BGsoXWgPZ5v2qVXfttH4aX2XhuVn",
  "key25": "4hsmqnXo7MQgLr9B8BXZEE68y4RgDHjtaUB6pqacM5gcujy9vtERG2LtHszRwXWKdtMmSZ3hBan8S7848ERiCVKR",
  "key26": "3McZtX8UP4FhmTM4qPDR9oxz9jpvtRJtyjE7oQoscqStnkm7UrjL6proDYJW3zKahKjxzoMPsVMtX2LT5QHEHxcA",
  "key27": "5Sg8vVuKbHQKhcofYUppxj4dut3QsmfQUN15neHVibfKzzrLGsBgsd9kari7u3vVLmmkSPWvE2Z7z3R3CqdKzKMc",
  "key28": "4QZ1pBnYe6eQdKsKq2wcCH2a5MHiNccbiDLzouEoCFHvseYjU2WtWEizniG4PiZdf4ouoPr7pxcVHadVnH2bQdeX",
  "key29": "4Fy5RhPhHxZq1uhM5kTfx1DBtSwuqjn1Z18sd1UY5CabsiBomaZzZvRxEWPufQYeGhw7atKiMQoSXp4SaPAzCBmr"
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
