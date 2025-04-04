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
    "5D7NbALGGBoyXVYyqpusC9Usc8ti1FMxX7QWJ2Mm72mntKSa1fX9DbSnP9skhjye4qF882W3ootvzG31zwmrrNiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZLdp3XjH9NqRWR38WpC31D9XnFRWdhAVcCCpyCH3ubMuXHfU7o1k65v3gLYGMGmg1CYRH8FPZWVdGTTdYLdB73j",
  "key1": "NTUkhUoXsYNcjYfXwTeUmDQF2gyXgkbyGS6bTo7Stjx7wCXSsn8emWJtmdprRQd2hVpjqdXkoCGaLYvVwJxT6Cm",
  "key2": "28Zsv9qbvkT7xrV2KwZhuxcuH7ygthTFzqrHgSZxM8E32yEo6K48Cqusv2hkF9jxY9DSELMCU2qR5LtUwtdCCktQ",
  "key3": "5d9cxmGYoXWefzupxpEayX4UMJUr15yKsm6ChLStzeqcFZwz1zbQfDmPQLojfSM1jv9GR5dj7ayomedvkQ91HERk",
  "key4": "44a92FRAosRekiZ6pSSjzW6uaaXS5mKf5oWADFkHgdbddbvXX3Ziq4ASRFR9GkqhP23G6XNPZqwYiJ8ki8nyCB3E",
  "key5": "4LEKz9bRdBNqNcQFM7sFkBDZB9TWLVJzRCNc9HtXs75VLsoW43ELUKMKNz7Hwmgz54DFV4jqxtAHJQqGsDnBsBKG",
  "key6": "5nV73sFYZ8DqGRiRf8S82dVYtiGVVDbuoqMx2jrqVTusBnyUfXAgbxgfxya2YpFvvG11sQqZL5VLnAzkc8sn7JDS",
  "key7": "3MmLxVcBx3vVp2eD87cQNzdihZNiAonnQe7ad9Aqb7sDE2sCSBBFQUGLhxTJSeK4HLWiBCcXUvfcKkx3FTvCXgK6",
  "key8": "3EmdPupKvrfpL2JpxamrhCawQexZGAsYk3rnWsMoz7YcBYrhM4RA7c5PLZ1YZVnkMxWav1Qsjfhab9WacUJWrFzh",
  "key9": "3RrBkBUYBKkP6yPSKn4rMJnhc6HDnhDWGUvctVerJusDFpgzN4YG6FCauVm2tvS258GPhYef6LNFYgSLQwbxFRzg",
  "key10": "2Adr4o7vugc3cZgtcpgpdTWsdkwNE5XYpjXqfcggpsqyAcm6M9BztgrT8MWR58Qm6BGWauK3Z5PdDse7D6F3vL5o",
  "key11": "3Vwzf9oJXF4uukprdPkhduDjkwAZKKL6aGwnSEDicmtUG34NQTMwY65vYBLEmgULjYBuiXcwPDFU2mDFvJCiKNNs",
  "key12": "63x8od5hnB6qeFVJQWTat394LPEKV4VyQkVqvWsnkXjJKaRreY5J3Q3YuzUDMMLW1VKNkfH8QaLvYe1jzriYh1qE",
  "key13": "5tvB8EL7C7E8HF9w5kxJsUt9zfr3ujP38dBeSp3wkxnv9c1Vc8SuFoG7yQwmVBRuGogniokudLuAxhT5PaDNuUzu",
  "key14": "2RKFsCSbXa46RTqWTHL62Mj1NeLzNToizzJZzQXtimaMNDFyQLSzCHE6c6agHEbKhGp3fawmMk9GbfrtECaH2euT",
  "key15": "3Ba7RRXqVRCDsmfuAeCKndKRGJMe6WQqUtvRRF2wXaKAoSx9PdK85tWRQzLi8MRNKfoJVrhP1FipPWqcbsEg1zaA",
  "key16": "43hat28qjQtUZL4g3ve9X5zULtPF79BginHAhGR5iaSj27bnyQVgLsdtVakyyeBynzEXc6SCZZQCDhgda9aReCh4",
  "key17": "ix6gQruASg2f27mYuQrMYJJg8Eob8Fn3isoa33XGmUifNdXreDkMBjQEyLhN9jZyxNNK8cA2ifapgfSTthuSuuB",
  "key18": "5SwhXfq6sgfb8KhTtrfB8DJC48KhDRUzeLFWsJJ6A3mwvHmYi6RKYX1jp3EzC5Mn3Kq8iBceo7vMS2ez91aG4PyV",
  "key19": "4e5GCqxHdwezDEEnVDRAQL2hGb4LmBQZACieWMgpsFtSB8usFvaDYd3DzXWn8iyzwJLgXj5Wr32QghNCzEWaDJnM",
  "key20": "3Y55W17ncRrDqdSPkuBSWr2xyAHtCaYpNmmyEXCdvHT17R93fkuuqu9Wphp4qDY8Lkj15DATEdF9bxS2L56Hdfvo",
  "key21": "rKD3y7PGE6JUJCLuBXFEGPJukk9SDBe1XzwFsT7PNfzTnhbU39FQANbSytpyoGqG7bquRT1Uy9jfkijUYquo57E",
  "key22": "5wwhGLtfuxAzqCs8QhWTVhwvUnX8g9E7BJrHLgqw5ePCgBqLtjn5jTsM3ggyJ47LdRp3ntyj1TVzEvXoqy63g3by",
  "key23": "44jrYLxLxP4Tb13YHBniH5m21WVri58wdDsjekAZjyyxPULrow6B7VP8n5goYz7eoe6GXFwxawTJWrexEnRjVFsh",
  "key24": "3rzcdwnkysRrytWxxdEsP3mZpEnsk3ftDjCEX3asR6J4NKchXkSfprSah482BbZGPFFoLHmgYeAbNXReMXSqhduJ",
  "key25": "3NSYVz2HyAeniFz4L92JHtKmwuDzSrco6bHVnZK1iR5CYLWbimYnvyKTXsVHuSVyvwM29r37tFLvMX2TnTQM1Vti",
  "key26": "qhpzyWbWtQhr1Qa7ca5t9x3XPQV8mieruf2awSGN2P2z6MFrELmjiuVrm2PnVXunB2WA26JDxYYD7GH3UpnjEJg",
  "key27": "9Sn2B29qducrLfZzZr1ozH8vtGdMCAAkrwkEq517NcoW4rCD2Cnum33A7ux3MRoy2JWcfP74psJkENpBSwfXE4y",
  "key28": "3avjVryEoiLsRqrTJdBy3Szej2qQnkP65Ny9i9cwtTyfyAhCwUP2yyh1SQXLKQDjeUBR3GxCcUeRZZ4aZ5ugo2NX",
  "key29": "55U51UDoMyvcFBrC1BSstU5Tpxpr7GcpeJvmqdLC8LAv5A8zWv4FqgbXsXTZTnVe2Y8sbx6YrGT1MXkqSQBGJGZ8",
  "key30": "2yfuhuogKKAHd7znCT3BdCVDxHhoyv5N4Bmo36z59wE7epKZL1xezgVg55N5yYiaDfWpX2CD8fAvniuQeTXV1TG",
  "key31": "XPRB7mQqxZXNZogvrKhKSggXxZVMc1g1BygPRGB86u8gMW4EhhPTRQxGN6A9zcnWFf8Ap273BYg9PtPXR4Jm1Z1",
  "key32": "2UVna654PJY9SMftgJFWpn8xAZSrc2toWZjRiq85iLatGdjoJGKjguUxsDq1rbKg771RTBu4RHtgeU86zCSKXEd7",
  "key33": "2recKuS7QR8Deao65pCB12vBAajBuzUdSm7vyLgwzk6kYkqQVVJkUwEJD9C5uobCGS3ti4yW7dvAG9GLo6guPuDz",
  "key34": "4PL2wNPdvFhhe3mypveJNngY9hVkFg3noMWFJsZHyHv8Q8hzbxac8Y99VKYjRX6hsgtGe8BN9pLs6cUiNsfgFBXB",
  "key35": "31hgmvnggtZ5w9BPDF2k3iYkkGpY9SATVNYAriouy6o7KhBpEZqTmvM2vTdW6xDRL6xo2nbRti3Rxs7iD8D1u5fC",
  "key36": "2hpsNLnuUjiygiFNc1QokEh9zTCCNGD867eFwEsb1Ht9wo4S5D8ZMEEUvjYoYtjMUjdMTNQvaAQpvgMc8SFgR566",
  "key37": "2VGKSaLS3CLZr5q6xYDgEJ7ekCxfvfd9znCuuxyc1yuYQnAG4Dog5XKbpNzGEczjXdUCe9FDQHspTtF5cJXMtfaj",
  "key38": "3naMr2kFzLXi2LMfdKFsreUbGWboHbFJiHqrsqMS5gJCH3Tkek4mgaC7sYznP2x2QWXkx169L2ed3yjKVaGA1rUy",
  "key39": "45BVgUNVg2Q13oyGG1iEVy7meY1ds9vUs3rm2RdMdRFceJnXrKXqGos7Cd9artThVLWnxGQgw7gMioSnuZCd6ALm"
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
