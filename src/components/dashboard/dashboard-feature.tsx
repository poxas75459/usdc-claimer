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
    "3zjAzhidBfNTu1JhS8posvTg8wwp4nFNyg2Rwgc6ch9N2BFCR6X2zTGBseogYWAi1XN5fgqx9c3Hx95b6wx3zVwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NsAAAnPTnapEx5J8fAHRGJkkqKPb3xyDVu3AfNcg5N7jAUF18bvPaQTDhuYZDmJBj2DXhSzpbLWTTqw8WJFsYTo",
  "key1": "5fFs3TnMraXdHZktkrUTucHQE6EUXUJ2kYuQ6MCZzawX5gxn15LDAe8voQXvLVLAPq8K6DfnKHaty3LNg4i97XrG",
  "key2": "5eDyFXX74VCaJxGHg38cSvRAXdegUApSDP4NYVzaimJwLB7b6LupLw5G7AhwPKkmURpgvXwPSg5m57sLiaceKLbM",
  "key3": "dcjSCRAvttn7MYQzQexXsamDcxNhrRoG9ZqwsNahnZjvZYfqbHSDP3GNYkULVFq8UCTxfBGuZ4zpo5adKbQuPJM",
  "key4": "HpeYiz7XUS8LMQHRnppizdpu3vYh9RPFvJWRjxnhb4hPcVv3rednctxqB97e9L8oeQyfoy9eXTUuFh4jb8zZmHw",
  "key5": "taSqCULEgKJLaDESm6iL5BQZbSyjtgbnFuZiV6rB785knUjr67vZaTULBqx9UFS9zwQ72p3d5HJ14TLKTbNriiH",
  "key6": "2W7sAejsMcmE5yJPMsc5Xp1H38VghK1pXZqNkue1dUEcwxWVnmydkDyEznkdCpumdfxS55sX4Q8gqMM25szaE42z",
  "key7": "5fV1kpXKFZvLDyTWb2Eo7rAR7KNrSNdwWTTk1ioug61Buoai73KNS6x4cEsqzwFTWy6McP31q1VFm9vrEjScqXDQ",
  "key8": "25tofgX3ucU6GEhF29C6zgcWK76PysRMhdGXJRN9T4Pc87bwh1F8DeahECDt8xfHcJQLKtvTjkPsPg7XR1w9cQer",
  "key9": "2kLqaJZEnSFZdWZiHbgLaGYv1P69pBKBxDwvSmEyMNrQnKFhCh12yTvJQgX72qitkAQLo74U3hgLLwfsz2BFFZ9h",
  "key10": "38SwQA1RNu3MrjvMbu6AdkHUJu5LAaTVrzqRAv75sVPeoFWas6WtysTv7FNLEcDU6Tbxqk8E9Zh9GkQHrrshSy6f",
  "key11": "W5ADusGEQQtbTWRv4hiCNjwtou6VkRnP5MQqXtkBm3GVVSeq5KcaDh1eLWH74Tym4R6cfbNtZeqNDUozgH7EhXj",
  "key12": "2VwKBTLdsjitHxxXqgJ9cxEpDpkYTKreMGbAGKWSLaateDzMMw1ajRUEv8irasasCL8XwaEMbu2LLUdXrABuAPCh",
  "key13": "5MG5E8QhREnqYLoU3bjzUq2UCXX8hv27mCcjhLuSWGiMY5T4Dpi5V4XzeitDbQeuTUtdcWwV1Nud1X4kAjgd8oQZ",
  "key14": "4VDrfgjzcffdMqox82juWvnoWsPJaPQBwe8xcMzPbDuFs1voGREENVLahqNDQ7T3Y3oDTd5kNTat6zVXkJMvhy3N",
  "key15": "2Dx2KKSXkcnoLPX4AB3HsGs4ne2sZT86mf4tqP3BgoPabLw6DimfBzHvs1mihkNtj3ii8SdtoedfynXdJwNrvxEV",
  "key16": "2cTbYf66ZfmSVgiBEKJBhtn5DCD8vaUHSyefaAKKhqNDUdppcjcnzzNyaxadf96LQGAVnPX569EDpM1ZBrUZ8qf7",
  "key17": "2SSciz43KUzeoeoeM6urvjpDSRFLBFJzZkFLd3aHmRGkc4RaB1XdqJteZhKBTTSKyevKGCBaazy8eEDpc6ATN54G",
  "key18": "5o1bsjGtBToQcX6qNN7FXd2gVt6i39NehZNAnXM62wNR9pTz5MzZnuYwFgLLbjPYE2gzMCamTwQU9oXubsBViVVj",
  "key19": "3SdwCJXpCrW1Pg7Tq79MgCVm7fX51B3fSpmyArThRJeqigga6YAuwr5yVayAmJ56TChsWCyv1kUje4aNcnk1bz8W",
  "key20": "21FTs9pCprBR9pGParEpBm8uQd8gM1PZHv1CDuuKXiskq2BznQG3iFp26WxtoHHAP6eR2FtLWppQHpY9YGgpXytf",
  "key21": "2YwQA8AzB6TbbdTwQTtLmaJw7K2ccXngt4PXCb7HeRo3VjVsCc1whYT68HgEng77r5cSBTScHtc5kHJCDdHD6u7F",
  "key22": "51sdwyyCj1Ud4MQfFQqew94vGhhSyp5a2Cu595RQLeWGMD7bFebHQgrheXzFj4RebtCV6grxdjfHuMED99eaA7cx",
  "key23": "2mABEaRhEMrUf4qjLzvKeh6yGM2YbRSBLkFQ6TuBVxvamwBtdU3iT6BSH2GqPADtNcDm188s1YMiXihxCHfZpeiX",
  "key24": "5B9LNZSZ9mg4zgLmvqjGTk1UoKM2E3gAnnhhqHqj1cDF4B2Tfop56iu9C2EyxnHD6dMwKapggjN8nB6d6tkTsyJV",
  "key25": "35KVZDx57m1rPQ7He8PF86zjzp57CfRH5Q9VzRQ5yn8kQ626DsGF1XQPFswquY4PBki3oUnZTRnTSWCuZmckDH6k",
  "key26": "4LaLtTR1eVnkr863YoRDM7kg8iNVZ8EBjGgPaYpfJhGreeZpsKC7LDWmeff1vDw5gkSSadqkTR9kow9wPfuXRtBs",
  "key27": "4tkBwFaK2yyMT5nQcyzaaDBvjEUJxJStMia8PJ3CkGMEsc5kua1odQKuJRxAKPaC6vLgj66BivV7UZHnWesMFxSd",
  "key28": "4LrviGGLuRr9oCWkEHc8sLD4F4BzsKM36snap4KXU1qzwCDgpr7XzVHofoEEMc83qDDRPK4CcymXe12f13EcnMLY",
  "key29": "5NH2gdL2H9xjUXCUeaKNy3zgYQD1HSoYopKfktS8MHRdVCuqtthpVk4nGnCsNXoBnxmhyANbWBsANhWupBe8fa93",
  "key30": "38LUyXur4zbAeBTeBtFr7D2mYSRCh2By6yXPLmpe5LtmrEgJKnFf93Yzu6XbV9xUFDkAuwkfJSYxPCTyQ4aB9MPG",
  "key31": "idm3NJzVEhbJnGiXBTSZVqVJrt6dfxnquCixmJeUSmym4Ng1j5TYeB9Ahmt8zFZTQkTSoNRDsGNhkHR41N1Eqhw",
  "key32": "3hWZ8qYXZLPSFagGzx7fbm7mCCxUHJ8BiDyTqtRCHoZFeLF4SmsSFupPLiRCoYHnzJdyXEY65j392J8nRCMmeKR2",
  "key33": "puoKxCmz5CPjzt7THhTZ24rtbCz6gEf7PXD43GPSNb2t9Too9pLNu5uXzivwRgzZeCrTABVfgyfeGUTTCA99ZFT",
  "key34": "4Stimbn1fke8NCCU5wmrUyio9md33BRgnRrf1ZX3dZrH25T9Z1rFXLVncfiDieVYneASUUAJYajBJdQ635zJFfAu",
  "key35": "4UYUT3acs5btCcA8gDNchzSUvYJ1NdVJinSCGRcaKrScRUkttbAijf2WrAWfy3hEWypDnVSZWL7m6gsmzZafBuv2",
  "key36": "4rxqDhy9KmBcKTWj6UQ3FspCXMNs7U5bMpX6tMVQuSCgpFTtPFJQXKGxb4DZ53myBwbBHnMcD72fuFa3P786fD58",
  "key37": "4bMvjSKUCTnKLkd9a1KZVrkDw87KAFDqRyt8eCRzj1PhhPiGEDzaAvYRUdsLCc5gvT874PZhwkXivxKonaXj19Ax",
  "key38": "2x9c8DzKZkJMGbP1eH7C5HuQ8VgdNRCbLtvnJ9nq2a4iwxtmzXYW3vS8qEUo3QPAphezLu8oKnp2mPpHMghPNfMc",
  "key39": "3bD32tNYHmp77X3Sf7shQL2gCVDaZWfijXiWd3HWPme1hW6RiU3HAJ7bo5XTMekdngoSdTW7AASjEQqez3nEmKkh",
  "key40": "3xt38eDGxAW9QuAngTrg5cpUcxpBbUKhs481TFqg6QTMMj9y42wg5B8GPepHGN19Lm4zuVy3SkBgwtJdDZPsFyfW",
  "key41": "62J2mQ8mREoWPFRZ5oMj5UaVE84D6n8wnhd7iTR4LUiGBEwyqLDTwpWjRGghPgsFfLxEGw7AJn5K7L9piB71VDZW",
  "key42": "rPzy15pFCe4uX2Jrkjz5svaiA5uCpvw7EUyPxRgjNMchoA4c3inYsyj8MfK4ogySZQYa9ooDUKbKS59hdUhoAjJ"
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
