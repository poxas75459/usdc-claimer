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
    "3RCssej3drrB9keGrEUJT4BUw4PX42LNnTu7nQXhNfTKMZ7xF3fGy2QpACRxEibSKsKwbLfxGepuoyP8gYQDXxT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5njBAwawwEgGgzM1QnG1Xkj6qnUQZThcnZA5vJMkYSuZbWGxnaktrQjNtDj29at2EMx14s23KeN2nFib4Uc1D2F5",
  "key1": "3sfGosPpbDAhcuHQU7LnoHmK3FkvDocDdawLxWwyEwUz8becAWXnbZHjTivbNAjJVHLmy4w5T7NNgLu6bTKqZkTf",
  "key2": "523ssKugHaxphLVCBYggy2YNMuKLe7HdxSKCyCot99HFCXGwqkPVu9zBw47bEoEwEEx2iR3Z2fkXPV6iqfXn8SMq",
  "key3": "2v335g5WztqfB57jvS15rfGuhvMLcAveJqkK5rD7waGWvSieRM4zTfi1SyyUTNTcbYSxYVdxEBbdjQJig1woRjJU",
  "key4": "VerGXy68FYG8XqvQTfCE6pBBRypnYKj7qVC5RBczW3xhwMn6qS8XbHP3GioKK5zw4CMveAna7pAzAf4CyYTYieq",
  "key5": "4Vc4YGsmogSGD8HUuXSQwcwn2AtFGUUZCMnknkhYtathCBfCDaqcDCXJ4uFknR6yRWooF6s7EwkcUktyhb9xCsqH",
  "key6": "3GbK1sAo8TM6FXq3o8FFX4fX19vAs3k3uK9DKgr6h8yhbiZGgujYRqPaP6yudV74hu7ukNFSFhsjSQwsJ2pkxGX8",
  "key7": "4uht7mNPBvRVYnF6knLmofWFBcHL4zXBHTqKAPbhgpB2wDNFvcHhmzokpBzQmZAFQLU5GbZrLn6fkxDTziUTdjsp",
  "key8": "ZykcN6ZpHBqrw5NgT6LeZrEn8dhkqfCqcXAamXZzMiyXAEEXSe3yZxCA2aeeFBBBLmYv7DArcNQVWaQsGSgkDtS",
  "key9": "3txjVoVhNdZabNCgqR3AZfTH9hj3fUPi8HBsxBRh91VVrDSGrQmgL5P1KgsCrwKc23cJg7zH4gTtEBgZ1SEiWM2Z",
  "key10": "3zwMiEQnEFyY1My4mov61nJtX4oAFKDDQ8a8rg5A2FyC8ABy8n3LPGwDckAb5HvsdPpnZ6kDfaz7L5B3FWPzPRhH",
  "key11": "5AD3hm2RxVZU7xLECapNBHdfELjJMJGxBVxoGHeEYJhMT23QGqzh5k3vYv5SJnskEy8dfjXpzvqroyEk8A43GXFv",
  "key12": "4qtdJ8TY6DwShovPFsxH4J4LvmpaoXihhhhghWi6meparpJsN68zmpMoqaLEAPirauD4iSRd3CRJr8nPu2HkocAf",
  "key13": "3eQchShkiMvcoDTrRarmFZfqp65VD8bJPqBU26GbdYn8ohBWNsNfjFxTxFQ9gPcaHmQCoLKebzEmrJMzNo4SLPAM",
  "key14": "gVFqfJSX1xMQJWasfy7stnnktN4EFRpyRQjUAfMj6MreQxpiQKVoyrx5tRqivQZx8krnpUmCTcgYWAS1S7DQmzQ",
  "key15": "583DZe5azDAgovsBVcho2jBBSy7eybPmHp84GNEwYnbCkryhyHghkjYmK7JAp7CPEonCBqAskWQVzgrj3RcLAkcM",
  "key16": "5aaaa91GVoHuLjPzYBZZxDC8zUt2EEqXoZ2xxhHnYdrEvzX3rPebybHPhrr1abSa2w9Sk51nofTDbhysRtURY3Bb",
  "key17": "4yQNsUA4h93xQYuXB3ccSjrPn13xKcksnHCueieZni7gZ7uSGr4LwnULxGF93FXVDTq9Y9adBipH54JAbof7su82",
  "key18": "5rmnf4fxgy7eBf4uHCWC4hcNfmdWcxAZNNbJ52t6Pipry1NGUsXMLQQhWJBMawhgxx4m7GpiagTifJoU2b1EVXHn",
  "key19": "4LTxWeCbFWiy9xDJ33VC2zkk2UcjMCF3ubAERoz8MSMD3VP72otxtRUKcYtDT3F6YBw2oLtny3Z84TXACvVhJvzv",
  "key20": "7BKJZiNqtbB5oMXiaeLvPhMFHyS1mV63chJtEW4MXoKK67dZugK5pLX5htVNw3ANPMHNDYCp6hEEnhDG3fFmQUD",
  "key21": "4EBM7WWLu38HqYiaHY2xr6pM3NszNDHUbA6BoD95ZLJtuW7Yd43XvApafEr2Kru38mqVmA2yhbC7DZsXn26FZ8hK",
  "key22": "34VXLZ8dY3y8MEeunti5dcfC4g1AkG3icWgp9DDjbNX1P7RYxAMvrH8RaUaS8UHCL1KagvX5FWvtMrvMy7RQxNiL",
  "key23": "2nv3AuY22xu2FB5FDUiURKamj8KwAjH8pwX7ynwp8V1UPmhg7ND4Jw4rU57SfUsoQ2RUfsB3FR5iNPvshtMAEDMZ",
  "key24": "4GcUfThR9mpfpPeMSimFJtGAA7r45WmSUxXkSxtVMGgyNwEqApY3nMxqcAwn4xr6oPibcSeWXYmquZtiSu5DhLyP",
  "key25": "3DoEaFevYubwLJCX25SiTH7gQoRvzs3XcGf8NGqD1TFwjdJECRwA5tEHvukBWY1UGiU9eTUBQa82vkgKxcry9tqy",
  "key26": "5Psf4HmXTgPbUgjkNFGeZSkjrqPHLNpZyg2wzWdyA5XVemtnXoxDzQdUdtyYAdAmiAZWsTzB98RUT5uZHpK2sTn5",
  "key27": "54bWYsv2a3kcoYzfu6P1Nm5h7W7n3GsWrXKfGdbjFaEiJ76b2j2PnzXAorD2jG87spUoN2T8SsSJREoMaJH6KKkb",
  "key28": "2ejr7nUYW9uCGFB2BDHXHw7qGXMEhLoozBa3QSSbjatxHQgGE8YSBZthmKYxaGMTVYYdcNQRcZsb5kSJrMmxysDm",
  "key29": "4yBcu9Lfwqcu6fB6t6JgFKmcqZo6XQfHkHVUnyFmMbNeCZa6UYgGia3GUNQTBCHPXCcPpomd3As3F3QdqL3FKXQj",
  "key30": "4w1ZATCXZthHScFHqUCiBbMLACuAonJUqH7jkYQuPAndaapegku5ZN7YwmEXj69EdNVt4NFjccK3A7TRTzEaaHMM",
  "key31": "26LzE4Bx8fmfhBoLvbRcAS6PprcsHseUvdd9suajMmFc9LNbRxCvT7gcyGv34YgZcvPB7PUVtTW7gRHhMDKbh8Xz",
  "key32": "39vreRZ49YfwzaKFZr4spDBiRLhgvtcS8YLQrRoEUP6n1nVMN7pVwAmDFzM2qca7J3JzNb9fr7vWqU1GWDsiWuMn",
  "key33": "3tmzDpHZdkPm6vCrGzYz6jKZAB1gCh6bxt5cmn8spubqiH5NxLdAE9BZWHt1Sb2Bt51Lf6BdtuE2SkHbtBzsR2FU",
  "key34": "Ws9R75ZcBC95Pq1eM3C56ZBUwkUpie5r7EV6oC2L62cEfS7cHaN6UadmzcvxpX28sEgfgZeMfyxc9gMxc5QSK8D",
  "key35": "2Nc9YMuCCAzxUMarfXrYZ3YXgfe8gV36DWcsUq2ofcGjEnxTdLBkpN7wWAQWQfMyZMRrNgTCuBAaNegNx9qFUXKt",
  "key36": "4bwgGAppMr4nm3Xx7yAuZWsiZ3VAJna1NFEuqB9rVTJFx6z4PqJv1KLsigxbGTVRMFt5rijkkmmpzL6HodReyDQ4",
  "key37": "45fqTztRqR7kJwBboXJALFNwrBYbAgzhr1K2tqAnTnWPVDV6CCrm5xLsU7oE5r2Vy9DvwxNTMXQH6bTytdkTvoNW",
  "key38": "6m92e1gmJZaWFbcDRPh5m4GGtU4FAhzg2kJoDRSNi2dvEKRWRkJwqim6aCW3Nhjd18Bp8o6kwXWTvXBFHhmPmtC",
  "key39": "217fXbbjCh67oDheXmJ9sk9eE8TgaLb3CtWSifGPUkTjiBkTFVwVheie42g9wAurNnjAeksTnDmV1e9UqW2TUKEL",
  "key40": "3XssTQsErHoe1uUk72vGa9E7txMLtVj47kEWHjPPRPeyJRqQJ1Tr8VSmdXMkeCpmuwdYee6np4CJcUQryjAu8pSy",
  "key41": "336quUh9EEMErNF8VkQ6RSnHn3Mdw4NFGyN87QF6PbxgYSYm5gRawxaau2SmV46MTMV6NdppDGjkWwTzwZZxJLia"
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
