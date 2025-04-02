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
    "4yp96xJshovn2BCHqFE88PCiajoxTsg9w7ZSWyfYVmEzxK8EDonSstxj8GQFGF2L4oMkMk1JaRqhpjVzkLayHAvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T5wVfPJ9ydR2KyqG9SH6NBBFEtFcp9a4Y4dxUcFUn5ybfbRC1PcuwDrj7A77eSkATWL37eLYJtQewQ3pofJdHi4",
  "key1": "mmmMVawXpTDFsCbRjYgid8dBn1kpvsKWDfURmEgcU83TnPRaAfDvMgYT2fWcK6bodF6EbSPD2MN96eucjGxJx5L",
  "key2": "4veJqkma2zrYvWGNhfzWbFHWqbhGahMtHXPKiuZvkocSSAsSFRw9QbXLzuWvhyR891KinSz5TGGkzNMySgKh4kNr",
  "key3": "2VVFVfxyk4WK2VLpVMQtu9Z2BGsncq6KSHThkuEob8HNshWRkVwuQFu65vwzed9LTxAr5cvSc88y1TQPaLg8eTt8",
  "key4": "m3EtLznqF5YLd872T1LxYXJJkDGigFthPkaF4RXM4tmZJswcuTAvJD4XGNgekBerySiVC5XEXqAjQ61AbirFvjD",
  "key5": "zs2Qj28mvktH8YsTnVahirvWym1A9FRiQ7gWztDcaug471WjHskNp4xTrQ6yeFYMUdXFaD9YGgvndWqaRedw6op",
  "key6": "2gWnhdpn33xNbjZzMm6cKNaKN4WwaLAQQgmctaw5yUWwzskhksGBZTwszxveNq1hejp22LdpJEUHvuBRiqvxduDw",
  "key7": "KyrKzuNxjHUs8fPekDXRoptoAJtN1nHtjPJSNrn4a3URozAXfArTBiUEmivZ7pXSXEQKVz37D2zqNEJb92sm4Cw",
  "key8": "28KtT3KwEQ1BLiqt9YWY17KECVigtXqFDdDbi4NDE6MeZG8fr7CeU7qYymEFbGpGZXxgDhufumU1s7PjbWdCxJ9w",
  "key9": "5rdB6bGRMoLNUMV9nSzHUEkJGLUf2tScLTxt9Yow9FG851ga3NTCEce921L64GVrEWnCJM2xrUuuLyRAE3T7e9EU",
  "key10": "4gCMMgXoEvUjTtsHwo6ouqswwjSQAwdDEcc5YCt2NBDUEpp9eFdRsDgT3cW8gvsU56yarvfm14fG96gyCWVJPC7n",
  "key11": "4oYmQHsXPYxYNdya8Vi6F3fQDhgftW2GFjLtus8DXTxU1d5hjHSPNtTUiN8iKCxiF8D9Kg8c3cRuh491uwh7Mtft",
  "key12": "DYddTPwiBTeUiKCxsWSnsfArXS5i118ksVSCTym9JbrR4XmKNckHmzaPSYLqspHPRZm5496m7KGgkMZjcVdUPRa",
  "key13": "3mcUAS2uFuezpn2C4VaAZ7tLom8QtGMEExwU23KSZXdWyF9wPcPnn8uutqVcWKi3H3VnebLGyw8BoN6dn343btHB",
  "key14": "3sH7CeQhJH3bq1teftvuVWTwThCEtp4CUMwhnMj1F41nPXtcyUgTz6gpPQnMm8QvFx21fG2Ms2vCoNZzdgz2pEgL",
  "key15": "2AZK2WZqwVjRXBwLmkDGxNFTFzCnZsd48vtCYQsFJq33BmyQJKJBZ7bZHUmBrTdTQC6WY9cuBrRqS17MTQ3QFeaM",
  "key16": "4euxDxpUBEArGqpMWkQDWQ4kQUeh4im7ZQeyJcymrYTtX2FcsrRvg2XrFxF8iBkE67vhr7PYJiGiGzm3kwjw3xuj",
  "key17": "3Jd4LhszXGiP6TAmyPvNsdiHzLAVgGgE9ufAeoVpBYEm63nVNXeruJwsMQbtT1sEPxxsciQTGGRKwKR9zGJT3z9b",
  "key18": "4W25c2NANMYC8fyuQsq4jjSVUrozC2rpBEuZV8UM2gKVaVdp4izRdUTUot2F1aJjGLKptuchdNb2cRJ23EH3ZTyu",
  "key19": "39xE4nCHLyLaaiZU8KDFSmbVCfT6qweRXvX6S3Byfvu6N4jB3HgrW9GkzkwyQKwLy7qgsJUN5jzMxnVGyfRnE6VD",
  "key20": "55R2K4hH8kxamEXWgHutrJ1uRGq9boSLqaQsYKWo4aECjx1yQjR4d82biYpHvMBdUtN1ZwQUsknirEJ3dsCrgXEH",
  "key21": "3fzo4doUgAxvEPHM8qXipW9rSH3K7QiiQb9VTrsjCkQ9RLL5uaedAwJgg17vhS6Vsa34uK7NU2ynuWkcBR9R4FAQ",
  "key22": "3KQRErKCMnuBsUniRwA7kTjqc2eaTsndgwBRA51eAso1Gaf7fWN6e15wVbCm1bo6L5NdWAMYx1UtpvzSWRwHP2KN",
  "key23": "2qXsVYbCTKjZEvktaDbbEudvRnrUCjxTwo9ivQQdBWmpmmsF6uPmQyWEpXbLnnQcyoUpKLf6MERoJJ6Uq3cfHTE9",
  "key24": "2fcwNodA49rq1tt9AKDr8bpknFcFB7P2LGshBor9Uj6BNF4PTeZZkAeMry1zHrkmS12duGBEZZ4m2ryZRrvkv7jr",
  "key25": "5CDy24Ytc1z8HKNNbQp7cnEjEdz3ZWnwuFBiniRF4GJzX2tSDRKxSrgJuHxAtWDYroNkzxwSYDyMDeKenDWUKCU7",
  "key26": "5dJRnZYh6aBDwNALU3k5LuAnVdADn3FeFzNgB7s4uT3Yspeg2qdm6cCGYj6wUtwNfsv2gJ26cp4LiZuiNf4XbJ9C",
  "key27": "3qnek2Tt9DaKe8y4wP7bTYz3nF2rEZ9dstdAac5ViMQmFXmbSiRQHSuyrJEEBEGcB5KhZsVua83x4epQxCnp1LpX",
  "key28": "2Aw1oh6pZA677QZheRLKH2jV8WvBF5cPUCwsg7m1NjHCFM1Un195VFriC7WSCz4yvWoeFbQhtirLfvLMhGbDQSFq",
  "key29": "4T2W5VpeD5k8vio2rcQvKHUgD9PLv98v7BBmdejEjipLTpL2hSr2NcpkF1SPYZMEf4XUFWZfGBqnz29BZ1kFVegR",
  "key30": "3cYoz9BecAQMEtoaYZQdyESWRuxUtJV1Bp3LwNSqg3xn2CViGgn36RTEHYcbE5tYhTfuDCBSw4N5WDhjSnPUKD9x",
  "key31": "3wPpKXum8RTZLqwTK3QuvbkxwUAHF5Sm5kLCsGq7oqgVutmyDn3MMC6NFK7Y213rMi59Zah7BimcsFYXiJK33Qw",
  "key32": "659TmZX3hzaMmYbvNWeyJnjxBuefCuZcZU8mH9wqeCCvE5QNZFW1L4EuMsaKyfJwTE6C8dsHbjzqfcmQHoU6QNtK",
  "key33": "9gzv4xVcDNPWpmJBZkDF93yL5exPnn5CsdhCC3fiTJf8KhX4ygCms4uLbXLFdyyoE2nTqiabzcHCswG9RwwWyYM",
  "key34": "z76DFQ3gjw7HWQfMcMMP9JWJPiU9vkrC7LFTD9xYzWTy75hPoL95RgAvcS6bCNrCrZ4d8kkhVLjWaPFsqZXVs9U",
  "key35": "3HsicFHBkffpv1HujozRdgqiF6mVtJ654k3Eo3PN2XT8VGisKKxFqRi38HKgQT1cJYgKntTKM7MbH5nEffbJHCha",
  "key36": "2UFDgYuURKuCGLwgcmXFFsqniQkTp4VY3wf4SnvB3yQqn2yyQqAgfv6TUj7TaijmGowihCw8MqyuoGozVbmmFah5",
  "key37": "3uaYEdDqJfgYEpthHR5ySKox8582k59kqfLUDxNVYmGy5piuqxjD33KW2T3WKC9Uwi5Y9nKuGTHoTaCJDmNcvYF4",
  "key38": "5V3TXTTybD77RBHQJfX8UvvRLUPYz2kfsvLywXJbL778zkDMYFsUGBdgmxyqmRMfoXTasWpdrgc9UYodPVzXvvJe",
  "key39": "2PoPVqeYcfVp7po8nysM7ohGJV4BhfyLW6RNS5yVydjTvev3q7bX2MKnt64hWg7wVzqNob4PebRLnyzq9xXiLkHo",
  "key40": "M7NVXXcR2oPYPvtrkZRKU9VGpsr8VrE1i6vxu5aZHLQ2ftuu8oGRm2r9srvRRqdRYJbJP8yujB47syjCDT94qgf",
  "key41": "3jezGjgyBHNZixgmcbdmW5NXPp7ah63ZbkQmsLE8KAG4c8P3A8z5YqqA8YoHaBS1EPyKgdtDy7MbkaVWLTcSs1mc",
  "key42": "3fHL1nM4rU5bEMFm7N9W5WLR8jkpLWD2Ci5zat8nAK9ExAYdJgPr6Jkg52B1XpH5RQYdvtWeS49uzfyw1TwKpMz7",
  "key43": "isAUTYG7pB85i68sZr6wuNhD3mck1SM3bnkbfCzHffPwDWjGcmVvb2c9ko6CzXCaGUmmDuGb2MSC9AiEvjAGCdm",
  "key44": "2RpSfSmCcL3Xa2PNqoRGn583sKp14pnEsLuRbGQYVaHRFjKYpJ66WfNXubi7xZr2TLRdvuc43fJ6h5TnYQwdHbcc",
  "key45": "3P7dnzpj5yYSJwXXigb3piyheigzivWkW9kGekGSo5NSsm4HqRAjytmkFe45M9Mr1B5CgbRK6U2aRSdHDXaPcQyw",
  "key46": "SCxnKsgW9r5BvAPZJyE4gcGpvAPHvMEKYMxFcS5WDZVdg2SqaEfqQ7d9c6VBvozbteWZgP846bU3AQcRgWBPejq",
  "key47": "3FwwacRe9afkWMfqhLotozm3YtTXPKKjxy9YMYCVKZxF7pFcwRMCkLgZ8HuZqRo7aJBg59zjbkn2Z3nFg8a85un3",
  "key48": "R2tgSnj5YmGBKBWEdmjV5tJvGCKUXUjDJd2Lpwf52hiTvR2QGmYx26VU2mbQXb9Aa3hSmx9SrgEXByyVoGxQpjZ"
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
