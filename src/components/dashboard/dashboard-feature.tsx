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
    "5M2MvkQ6qHvspNKnTkTW8s1RVWzELPxva1nT7wNDAcUHUrGK8bcXnDA5xqKTXBrBm2Q9wxyEGifP2hNwSLeW32VM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WP6jgfGgtVsJuND5LUysDL5CuMgW9dgN6gQScVqKS5Hf86u5Ybab8ffATZePFKrktNDym6vX24zTDTMMib91117",
  "key1": "21yMuz735iBAwHZmYRXPtFL3fw7mLSbbLx6xCppVWoqaUqYi5N6bF7NNqMNt5rsNwpp6iwksTu4Sk2N12Se62Hz7",
  "key2": "2PtmtakMTPck721BfUrZta5eFef4tYpCNs8Qrjx9oRg4QWBMCdD359Yko3cWLnrjbfsL6XJH6ZNCxutByyRkHSgb",
  "key3": "23YTLefNTtV34td755zezkfXZN3bX9V8z38rRiS1ZgJ31EYHFq9v44ZpviDDrBhB4RGFXuqXCnwvwNCzv8nBHGTx",
  "key4": "3KakEoTV4M12YAKajNmPjgGrhC2dBUQ7j8qgXVppzn2XPCFzPPCfHiAk23jLwHGYWVwMk5os7VmkpHr2dYRBzJaG",
  "key5": "3VKyW7aSuqmJoJk7cVgQ26xBDydNkPaqBtFM86NgAfEuencSHA4SQafS22JHsqX7GqWeNzBxwWJ45vUTfNgKhx57",
  "key6": "45YoggRPC4rNQbwcjBGcWAXRY41aKQfdBiEV2HAxKwjTAz4kyzn2nEvfdLfznSsCvnvvhZLB8X4WQhqHT1nfDPu2",
  "key7": "3necF7pGdBrV4Z6JQofXBxQ7uvumCtr6sH5mafQwjHKhub1VcmUXfXapZJXRuQLNs9NJeq2ch9Qz5UXkRMH4WRiv",
  "key8": "3XnJcEmaYEhqbQuV3P6boBnaDbtEUUigkeZUvKNT7PwwprFrqcYTx6CFXKJgudTDRBzX6M7HPywoUt9shgCVNHVP",
  "key9": "3g3UXuFJdh1pMMW6Kktvt49FDFhCT5BRmwhGpe7UHWMYcLykgnvxgET9a3oCGiGGpbd7PrxsELJPbUn18YTyZmWi",
  "key10": "qbCNkomHC8WteDSqsSUVMzraoUGB8oPZyXWnfurKi4Yq3dNMrtzMT2N4NbjpRfCU2oEWvGn5KEqFuW4gfPmoWQt",
  "key11": "3csXEFVGYeeB2KtTPPRgsH99JqZWpjacyEfeGjamXQPWS6uMMm13QdmZaW2u785U23ZHoPDmF6hfuHRsFMkJi2BB",
  "key12": "ZXMtTQ2f5hgQKYpStyEmFUE1YN6rWxoo4qxT6XrPsotCaMNSyLG2HNqXzhAYFfdx1MYnk9G3iKLUVYZk9HcFdfs",
  "key13": "TK8bb7aneYUF5jZAHcd6bodLjTt1DHhe5283bK6NVzohfvjQ1iR7xPvXFF6QANVJYycAzdSYZDomXsqxHNpcpUw",
  "key14": "4Ysi5LJs5995FiHTT3bCkCYn4RXQFVHHQkhefC1WEFWrhtZdTPvgmc9A8dbtFTmiYbQsxwm21ciyCGrNSZeX7Mzt",
  "key15": "4QbjqWJg4k6ibZ85nuqnPxXBqXECbqqqBMTwV3SosDxsxkgqUVDpyY8YwvTfCbZSBGRSuKBLgF9U6XB8RCQ4Dtsq",
  "key16": "3Aok65Fxsy24CexYQDnPQQeL2sFZJVwSAZUvUVXrKB5cpcLvzCF7FzJ1fTnZhscHHCpaagshyM4gVXAyCZVxqbGz",
  "key17": "3qqMQ6Yu65QVJtm2UyeE71n6fae5E14u8Uban8UqXnJsAB77KQf9KEu2HyXDrE78y2J6xAkR2dCPeRWNPawvBwH5",
  "key18": "ru3T1XQ1NexeGQsfhmeb9HsamqZ37m2W5atAyRe2oZWpvthwJTSYebSLhdS8ahna7YzgohFfCS12L8XtoSAEzan",
  "key19": "2odBbPinH9Tn2xw5gMg8wQRGeVVVcZL2WewMAXnDsGWWenZw9b7dQtooeGpKT7ynmUdW3cta16u72DjEN9rSr9Kn",
  "key20": "2t6Yq4BRNPSeK5Dm8ZEpBeKGGt2FB9iRXy3SxLqppRnMQA7sRP1BMHSWARbeY84UVpg5XcygY61vf3qPTQSQXSAQ",
  "key21": "me6gMreeTRRYz1GaEWWiLH7CbRMx4e22TkH8P7uo8kRgEZQ5RhNa14MXXpdHW1mMfZkHYa3CYACm6Ai8uU23PR4",
  "key22": "2ChbJB6Reeamb8XYM3AMswsmWWAevsjKbSvvTatSuXmjtFZJAtzQYQA373zdAP1gCc2h9rcDTB1WdKiRjghWE1FL",
  "key23": "5Lfnt4Qkb1QF34dsJP9rJStgGTgi8Up5auxR8M4pvkLDNNQu1RQzVcTZdhyR4QFYoH1pSY1dVUajeDm3mphM7Q6y",
  "key24": "5N3mzSd6gxTqaBnugTqvAv8yC27T5QaqsmzQNmogEC6VCBbinrQtYfRHQVdYbAd1RifVnshrzRmtsmN4yobvPua2",
  "key25": "3fXHHU1u7TQxk6H6sQRdLFrNfPQZa8uoDwxTsio5g7u3vwS8Csn4ciB1zHeh8xR5ubZmRDEQRagTH12ZaRi5AUvS",
  "key26": "3D1VbNBpwUcHPiV6cuj3D5LUsLaPUPDpAjVFtfPaCfT1NsRbZ7weWE4foYBBrKN5muTX4hmKPVnFrfunMzj3csoJ",
  "key27": "AzdQ2ctGzG1qTG8ucdR19DZXRC5EZgHWeUeXuZKAXLnuPhGfQUz687MLqXJFiswzqN9PBwYQRteanH6dZD92FLq",
  "key28": "2wkqJqgGpS2kWt9CZA7LGWhfjBD2HYMNhSZuqnixkRW28BqyPxpDnKcsVCZwJTpNZ7uB52tjHCafUCKS1giXbhP8",
  "key29": "45T34y3CfccxGxf5nbTLAEy4bdbprXsB1J1N8y7anAkvN4skFbCLwfFDqJ1UokZWHBRuvM4udZBGGWXJrzvSSfBG",
  "key30": "4SeDyww717FveoHVJtzyZqrxWbc5V1Bqgh39FEpknM5yGXNhyMXCHcJGg1XjpUjEfUbwwMRRLZjapfMnJwhqARAR"
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
