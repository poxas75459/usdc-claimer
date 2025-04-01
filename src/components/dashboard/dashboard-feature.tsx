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
    "5v9cyKoffep1D6jPV6DjYWZmW7qLHLp3WuzmD4YWCErfNqgPnw7UwfqbwhSRE8LdpYnDu1Z4XW8sQfALH1AgdgL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pVXb8Qof3Aa6WYpnYXMiRBKWWabEqoQ8UJwocPmk78kGitPgvnwhbCGF4sTgAML9KVhzWChGqgqePBEhzTKvGvH",
  "key1": "2AkKVDBhn2b7nfvL7ryg5uZbb7VpLmebX9WQrfXqG2F8JxGV6JLW88FGH9e389WPcvH1EAw7osLNS6iwB4916xSe",
  "key2": "Q2qjjZERAsrKHy23ug4Q8fphREiiMoFHiKwyLq6FpEwSgNHS88oYfZimnwjnmLE4pNJFW9sGN2jHZTz2baL4wFw",
  "key3": "5H3tKgvM4kbomLu9WkgvgcUpRbVLmDP6AEvrorG98Nv8S2YwEUbsLWVW4rZTeVYgVXtJzmQiKBkPPcWs8LqBykGk",
  "key4": "4sTrj66rBKUiSAVSpHtug5SrmusxcRsYQA6WYiEhd6fmA4EWG1WKvXULBJKE6aq5KAiVCeKviiXBgFdMCWzNJRXW",
  "key5": "4LZ4AKjFiZjfxkEHUUpwixvm1nu4JFVVdiX99ZK1CBdv7HKY3YMXeC4SDQKxnkPeX6CgLScXx9hxQuHsvUsmfR7W",
  "key6": "3q9jsH5fFTCwSpJxrzF1Unxg9LeVDaWq81RgpittP5oxREAfAA1aVdmsALMV6aMDA4NMeSVVjjBGqo3pMa5N6ik1",
  "key7": "2oCVAJE3Y7ykSiKAdBNzygfLQuxLS5iBMP86HMUYEx2iMRk788Qq1wMVxiSoTTrT6CWoQiLTPxmgi9hpdeYs5sqR",
  "key8": "5DyAgHLbgkszAX7o39wfAn1tBmr9gW6HwsdCa52Mjh6vaUvmskTRRsPevqzEf6BZmZHxfHDvB5axrvYU9G1rekXi",
  "key9": "637AQWbbjgT95XhRK6ub26YJR4NccPVut4Qr8Dvk13PPhEBtruCkNG3PM6E8LMh391XwLCjPn8Q3FqnuTwBXKD2W",
  "key10": "25xjXgW2K4jYCuo9vk3qm54VdAcqkEJc6jeLaB29THPsxZPEECSsJdDvvog6vw7zvPJ7irz1QsBzWx9bA77NVjAD",
  "key11": "DbXqiiopSZxRc8JXBrtiuQxxu34Tktci9MzyaqxbdQ8rRRjueuupy7L2FrWtkTCwcyY7mZ1oAAMfLZFank9szjt",
  "key12": "2XJfBaQr6tjy7DPbKZ5DxBPqyP2c9K1VbHCyXy3p8WzzgRapHAGrsVM2KoLystBh7uWDk2HCXjFHKs8hcCSW6Xx6",
  "key13": "5isUAVLGoJcRKfJLPe2yFwLhLnteA8ccsyYv6ZRLpyD1b69tfha2uWNyuVm7aBJ3kSvqZypByzSxjhSyPMsZMyNw",
  "key14": "kCSxsjP1BS5BZJmXSMX69xek3kxYmFLu3gvJ93Ee8PgyCoAJb1bMaLPJfPT53awfHaa9ciLhSLfcwAG9GQu92uf",
  "key15": "4Aq67VJcFw4YqRzSQx2o25hTAcp4NZ7ChuyeAKDsinqXhf8ZFkt6UaRRvSo9oiAUqPtdex1K3AYMRBmLrH9rsPqD",
  "key16": "ykRxeGcHrLT1qqCGwJnRv47SsSEv5eTBmNaFzigJWW4GPeRq52mjmgn2L4MChaasU4pjApFfgfU4PZpqaKDWJUL",
  "key17": "2aSswNZzfvu24BR6YqqS6hPDS1qNrvx1qY2isBW1rgnr691Kdg6hFScc98rSimuSfLrwTbTX6v6wh6Zurtv2t5oS",
  "key18": "8T5nxAVna72WHw4Rcr8aRZhRRY93BmJex7Xk5QHdsiWU8gzFYfni6JRxF9q48rbFLkt7RYnm7oCDhBV1vV8zAog",
  "key19": "61nCUf9TDQAFre2JRMyE5nTXxDukGroNvGVDMP7RauNfCBdpp55XT8gFhi2agmXGKu4YaXbHGb2BTPuDmJibEyyu",
  "key20": "3Yu8qxxQBr5ohMeAiYyMS4M14YCjXgD1yb4UmRmzhABPgCncfCqkFsq9QyHhV9qJgVcZJBk1jpSmhhpvPE7UAVDb",
  "key21": "2HGrgA5pgiQ9EtdfMQpTF5Y2Gne3P65ZoqxbtXsQ6vbKUKTCpNSSsCGVWxx2acPWiJ682FK1As6Unp4FeNgdUqE1",
  "key22": "GvBvjeBz7RyRTCWKdNRfU6LdtEPUWCNsczKZ55MRxzaJ9wY48iM7635cDkvSR3tbHmLQ2GjfGLJctDRpaB1QNBA",
  "key23": "3Cgd7cbSJY7w8eyBo2F9RKoDgB1yyeLLox6op7pLjHXi3j6zYvJxsQcTUWnDe3u7MqLQqasghc7tcgnekhjuEDeW",
  "key24": "2F485EhSU5ZnRJqbPnJZCfVL9icYFGhaJyeecp5pwbK8yrcr6N3swsDxrywHnB4HAPJzENaiBHyAxNpwUEo7bhcy",
  "key25": "mrvT9nU3TfyoL8EUy2XhqVeMupzHu5tHF3eThqZPXnwzZ78ASSoByLQupRQqAnmTz6Qd1EnetCorR5gTZAJ4uQp",
  "key26": "2A6kDY4sQz2GFYrN1V1TamgJrf88kUr3SvwnpmegTJdWRubT3JccdKRQ6tyc9JPNVZYRCQHmjDd24moNiuqYeSug",
  "key27": "58DS2m3i5wbF5XCu9oi1x4Ro9rgV93RXiTpfLzTAawnkCuq9xd9UQQnNAgQSG7gj8nMCvXHBp1XGhCiQXM4JQiKN",
  "key28": "i6n8eGPbav5SpcoPW72EAMxfbywruMVN4TpkTbepGt4kf2GpDPDzTahTHpzHi7kBep9Ff9XtnAgq5SDb9W6bTZM",
  "key29": "55aivHZ2qizEii5DafySwLVFtstmz19Pv2zH1Ke1E3n3SBegU92dxVNLyZSe1cSAGRrwoSKyMw4p8m4QKzTDcqUh",
  "key30": "HToXioydJVYqctRCSntsydKRzk1D3T8teKXHzDEZ55p2pYCzGxaN2Xp1xTNK6ruLAvDi9NQZqCcreXoDnnvMsHH",
  "key31": "2Sct6fAqVo2CEg1rbdfpNXvxA78msKu6CTj1VsiJQ735XJJ77a5GDHSte3joSqKnrZCdQtMGdMAi4ownDW5AMeVP",
  "key32": "xAErFHcphhQYwhKAevMdPG4w9TUhWdn6mtcLBSwCCCs84NM9k2kDgqTPnY5Ymg5xioa56uJUyMzK6VoXA6URErP",
  "key33": "3auMP62sPDEuBK8PS2yymVL6ytvaNDKZXEkDGbv5wApAV8zJeTVpTsLvJVnYB7cCambpE5a5oXN5CvQp3W2qULF2",
  "key34": "DnLY3pninMLEvz7XMYZJpV3iiEAKjR6VuiAQ3jqDpTryqJNfaSpiAUDbDhjn6MPbtnF9zsnTkSPGghRUqBsQMdA",
  "key35": "3e5qZYm9S89CEoGEEw6fFmJkRwSJc812cZi8a4mMWjtRqFR9ruH9oURrpQxdLUmBeThxor25x1YYfxkrpksT1KJw",
  "key36": "2MScQzeaFejpAvXGs7Q9vfuJqj7M6JoDqDfvbNrzMZT6PtT1bq9zDVYSxa25MgbLKoiPbLe5L3d9En1vSSANGm7G",
  "key37": "2zgMcVMtpqsHFo53ANJYN8HxWWaqbha1oFK6ikSUYXPaqWNA1wCeBJQ5jQQNdqvpieyiiBHEvbgscq2UTwqJ5vRo",
  "key38": "q3L9NtgJuwBSkkux9hHYyaqUPULFuvC8Agj3fPGW6WVBJonRzdRvNEcncadPopCTBaa52DPSkgvqPEbYFTbHjr8"
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
