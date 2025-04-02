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
    "631PKN1zMxqVhNZW2j6qskbS6QmvseXdrrYSL19kA8GhX7cY4dD67B44HmKdynQejAMAXLuVoSRttEiA1JHxNAuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D8cVY8kYKkgwcRsu59EBbmF5cuxb7zdTuMb3sFpoemu1MiPbde5exC8Pt3vtDk9mAAY7VxDoHbtPo7ahVCumCH6",
  "key1": "qxqfnhJgAQDNL5pVSKqkhrx9GsfrDK9rP3Mji5kMKZ9AAZh5wCbT6kjkqrfgKemcyFQCK7hwnjLZqMMkLkTZVAR",
  "key2": "DCobqv878KGdpjJPcBtVHnAKfQvhdJ8ds483VjEat8QFiATUB8FeTY7QpgZfWHNJbn1t6vJ8dxMMyWa5e2tQEiw",
  "key3": "S7QzZ28iXNguxpV47ArvVgybe1q7zRZgEnAboBFQoaUg1cTFE9FGGuM3vkLKQoDTquFx3K3j2W4y43oUWnQeu9V",
  "key4": "2niv8WX4TZ7cWBet2b4vcnwXtRWcX1YtuWPUwmykaBjz7gU5eGf2w9mT17K9xJ9etuVBqnP2KhboHqua2dYFW5pB",
  "key5": "5myvu9BwHVayg6cMWom5CFTmc9W1iEXd92DwZcYqrnY1jpH8joa696SL1sJuRqXgWrcDnMgrmjATUTFkEFDmbofd",
  "key6": "2BSVVopGu91gYcaFUFJ7cKbYFWRt7bSPvU38CVXtNiVKRwKMs7BAoPZYa8znWDujp15XKS1XqGQP1FjRyJfmSPx1",
  "key7": "2snNTkhBwv3ffqaG7bAAJPRnzeeKBwSDzNRLiJgttj4fsnp6m9UX2AW5uPWeLXeTjZhtQwHADkAMurrfu2z8ZKPc",
  "key8": "44Z9nWTwih6RizrpCg4c33EBPCN27WPrtVTvWPN86i24oBfqtCueaYo7JqCRWux7noJ2uSq818tCQt1NNVAk1aAQ",
  "key9": "5bjVAd6nF9vZxAtDMpZX18pMBgq4DQqivyb3V4PrhM86KNoCSn6xRUihjU6GyXBEyFyifmnU5zarmEr9JKG4cyEe",
  "key10": "4WqSTQsvEpaRPfQSfcVPCtCWULLHBkiui4b8TJkuYSTVJhxXVbEiry5tEZvGA47dsziuBf7gb4tJciJHxchRJQNp",
  "key11": "622torQmfzjuTmgzZh2fuAx51kQnfbhqxUxV3zJLFU1Y1wezZ86FWJLfuE42soNesU2cNyfMBExch5ePhGpnRhbv",
  "key12": "2JfkSS8QvE9fmjnJQmJP6sTGJPbtcEtsPjwxHKKvqALPp2Gkcubbjzr8LfW6hxCsstqKziHERWg6oui6CykV3Qa3",
  "key13": "5bRUGcTJoVtuELy2kWS5Hnrgx7gH6wfd284De8iKXBoBCQ9gsSbRQQRqxiHPqpycoUpvJg8gLj3RrQRB2px2NcRc",
  "key14": "5Bz98WRPHU1DJu7F28rFrrowsFDqwZ5XT12xC6tDqJAy3Bd7dobtSCgMPmgQGmfEZFVuRNTswfNrZykhnpuePK5t",
  "key15": "126LLvSTJxrwEjtXpgj6WkVQcznjaibfRT2gKGcxJnKaPeNtt1PwDSGRubh4a5iry1oA275Y2pCGUENozhy6fv9e",
  "key16": "oEDidfS8CjWtZ67m2mm4LVCSQ3Q32a6obEmXb3Mr5oZcwVwgoEQEfaf2aWRv8mKZdPSMx7eTxPNQEo5M7UrfYtf",
  "key17": "aQ7BGcDony4BuACDVAKLKi3KdrEcQv6EdZHq2EfnMFRiF98ys27BkCjNArkKqhmjuq5WHZ3w5XqD3uEW6taApXU",
  "key18": "dVhFcj7sQJsPJCWLm9e1iyK3C9c4rFeJjBY9A2TASsGs3mAfnuSQTMxqLPTUgxp9apmd1RbB9dguTfLr6DQcNJB",
  "key19": "2GTACbtMJ1hyMtwGDntiZCyHbSKPoND2FCq9zbHEqnt228xCZErmr7dr7ZxLUBW1Mkd1JUs5bRL3qLF5noGnFSaC",
  "key20": "42exedDJGnbdLEqZPCLPtNt8yVFFYczQ4RcY4KfzBgpFET8pVm4fLuxV1fmzMDRu4JjLwL4EH8sNciaWvxecAhV6",
  "key21": "5dQCQq27wBbJ6sWpd13fmuWDio3PkpCaHJQccnY55s3y7qtQzFxpfwZr2bvuKKaiHsJdgkSTHx6hhiMpfEn5iSan",
  "key22": "64debpV5GyNTNJ9MjXtyoHx3Re1pBWwP1pxS14RyfKYDKPFGgMTL6SRi2LmwSkb1sMihhDseAA4Xp36fnkwcA6ge",
  "key23": "5CgBHj9DZDshWhy4k58RAVgjHaF86kkX7mTrEARh4qQ6J1jPuRqjdB4PXovuqjH4wLrSD22MxcPPHDmSV8tJtwJB",
  "key24": "3wnngACavuVZ67wi4W3wNcVpjSEYC2g71jABD3ZzFdNxpmAe6njQLPdWpKb5Tu9F7J3d7nx8BEwZXEGLmHYNqRUa",
  "key25": "bKMhN1yGSZqRhmN3ZVG57SLF6T8bRcbHDSp5iVi5wYT3s2ufvR939QtC88bVL1NTEfcK6DPtLiHCWSNWCKxLTdV",
  "key26": "4nKyE8t8BdEksGqgGxyMvQV7ac94k5quBJJFB4S7iz3Ef1w2s9zmpZsjskDsE3evUWQRdWQDryVwWRQikgkyXrPL",
  "key27": "34CFuXx2KCSSiSQvVv753jytkCGhq6Tjy48aFc3NsZZy2z4ETpPecuRQfymZPC3yVTeBzdKhoRhQHHC6PAMoQiDk",
  "key28": "4pam4WkUBtxm4KGuBmi9DQYw6FhXnCCecMqvcxzain2m1bsxJyH2ZNnS2pym4NjNoGFiqQMo3PdWX6UEtTmm7vLo",
  "key29": "59opkCARGTZM2PQZiK4EsoRHMjPRodD6M4cFHe4eWCW5eMzpcN5XNPSTfNcwZMMhMiKaXjHpGN4jBMHhsBiee11k",
  "key30": "5kEU96E7eC8KZuAK97HEW72YXKpSxy3Tg7hs5Vghh7RPcqfwF6SGKX7urkCujncgPmbg83UKozjLmhjuvbYJ64hP",
  "key31": "3GACKPQ7z2mja2JUx52nBwyYSZo5pLdBuyqPzE3hUkrgXQGeSAFQeCdRvSNqqTtreh9x7yy7eg7kqpLHb6EM3Eib",
  "key32": "3BQjmkRZdmwPAwGGJuXqujatrJ5CBSn2haZGvFk9fvRGhkHnpq3eNHyS13NyaCWetNtAagU2LetXwwT7Y4PeH6yz",
  "key33": "5qJePtgDuGswXLHPhhZA2jnpSSFTz1rFzsw51BVAPW2HUwJTfSGpeJFxSbZEoB8xsuc7RB2MusRetxsZLXnfSpLt",
  "key34": "3tnvgur1PGMHqdiY88xSRb7tpXMuceM7pM3oRy2mDBdfqFeajBRqvQv5musHzh8jm48q8mEzvX86RV27H6Ub2KRf",
  "key35": "nJa32feUeKvzZUgvRvY7JaqVtaXrtgrDMdLVuFj6FQZbseJBFacEtusV2wrsT65RDKXMBSzNRVheRLxbToGSvSe",
  "key36": "3phC28WYgDmBvnapDhJGHNg6W5Yc36qTFovusEDxk6GoPcEtzf6KtKV4rv254M2pW25v8QXjNRDyJGJVTP2RZE1A",
  "key37": "2TQQB1cZzBiKWQBf3nQvUcAo4PRexuVHf2R4KYTSbdNpdYmkwU1vX7miJh8XptrWL7NQwpU2ozAeN2vhRxhcqNuZ",
  "key38": "2BGYknfvZExRPraBTU5KC5TyMrFNRRYE617aPgPRVjpWxoJANrBMkba97fwUbRUrYpGN5jGiZAvdDHJmp7o5hWQy",
  "key39": "2tr6VzVqnHfcaeYc282a969RbWKXVCCZmFNAuAVCTSpJzmZqZoNr7Qws2m3oHJdvuz9CkfVuscAajLNntfwTJuHg",
  "key40": "PkY63HmX2rZRMbznMHCdyoAWMNrSndCuCP8eg5ucrXSUhkS3U1SiCagBkAvvR1cq6zHjtGQUvVY8sUZEihuBsMG",
  "key41": "4WDmPR3J5bxXRjL5ncENWCXALNNcghX3jLchhuiMCEvjFCrswVpDGxSMc3LBhppKSgSqfTKndnaGd2Fx7Qkm8HqC",
  "key42": "5xTXfNFZfqhr1QqRrVnHKjrZVXgvD5KBHS8t68Un845SyMcEqWfcbxnH1HFqaPfxYg3a7ngv1KdVCefGYv8AyPC3",
  "key43": "YYG9USWp2XS9sLSXX97AMGK3k8WvzH8WN9PymmyCMP5WkfdBJA15vEPDbYmBCFbReXuYBGnVVuzfanRBdQ6LJ2A",
  "key44": "45psG9sww8fY3n4htPJHEiHyPCismDNA7rvBYZDr8c46YvNEK5xqbRWjMbCs6iHT13RbsYfbkCjr7HYrD2bnhmyM"
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
