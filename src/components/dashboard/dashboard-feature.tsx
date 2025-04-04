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
    "535Ug4zfbjjdaiRsGmgFNGX68mykoGdMeJifxvXjVAWKoU9SYMKTtfAMrL8re3PGDkicbEWGrA5G5tjo7RZzxYcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5chZCJv18DEMuMcnoeUfacR9PaokJwco7TRyugd57E4CAb81sWYNYw2P9f6MQshERkCGeYraS2SNYALPSZjem6rw",
  "key1": "2x31tikN4FDuGuNHkozS11gbVEdcw6xgfkKwXAGHaoegYmNP8mBZLqLhB3iKCAVRRptSgPfhy1avr3W5ZJZ8YyMu",
  "key2": "4n8RggD2GsHZvasfyRToqS91NFifQjozJUwU8eaoMemxH5enA2p8KjvPH69ri8XG61LyEa4E3KWBVNm8fizhYzsU",
  "key3": "62vo1vfXTmcqQ7hb7YdXv43KVKPwifRcBitWWykedVRSNbhFCzxwnpaEKvYj554skirL3NfeovvVSfvYJLeZtLbT",
  "key4": "59WxPdgJtAQ8qhTj7nerb9eeEH1wTwgsQShEVe8kntv6FL5Je2Tcupjm34PYGy1CjMjaxb32FEdduHzdW5YVHirD",
  "key5": "DegD4wnj7fV5mMD1qDSa4HpHwp5cjZnoPNNj2Mg5BjL1MC1DheimBodgXdpE3qwABTG8C6fvbjQKfYxfQEfYaU1",
  "key6": "4M8Dzgzx1boY1QRkNudjkCW568MrNCnWiLcAiC5NuQnx8FkzYdXbr8pAw9kosKnTtoAcTgyBBu3VSBXwNy7vExah",
  "key7": "23YiwHDr3WyF7a63wAJZjfhYfnzrjj5CUfrhejBrUpAEohAJYxvfCSFNs6XgMVBLrsh2opRdtjMb8e4qX35W64xw",
  "key8": "3f6QnkKfMGmAQuJZF9Ckhzp2bAUqvcscJdjvWAAMcYkhNYb3JFQjfWiLs4trR4c5nVErgoQ1gPDwgt54c8DGWSMg",
  "key9": "3sN7MaMWaeGkT5X6Ki1xLNofEw8z5iMmMpLJhYjwqRo5JxJ9ioncjup5mp5mePLkhfWAx47j7TtgFoQY2f4EkDmg",
  "key10": "5YeuCtA8gC5i3YNthsHW3azLFohgSGvRgfCX9XLZK67Gk6ZupfQob7S5D5ZFnFcrzPj12gRZQZHcCfrBQceJTM6u",
  "key11": "5HQCLnTG9fQyp5MHmCuGivbVotrmn6CFBdySsg6g8YZWKMb6jRuHnfWmDMNsXxCPrn4PBKooi3qgyB6TLCh92Y44",
  "key12": "3ua6mDUVYWdbfeW3ZKCsA4RSsWVW7xHzDvfQU3FCH7NRPoSmZFZnZeaKvrWsNBhWSRD5R3PbcYyBGsvhsVPB87w",
  "key13": "5NYhTckfdqsmy4GjCRhNorDrzH7fNxg57EYaApXRkXufXf9swGAw6keQ6dy9PT2pEco4wWGirZMSyGTZ41fKG4MB",
  "key14": "J4wuNp3vWJeTBqEuZP2XL5N3yXxsranazqfELmcshGzDu3JfHVVckgLa8q9hfxJCHSPimDMLMwz36omH6i7jkxQ",
  "key15": "UtD3RB5C6LGgFm5zjRuJxSckFc8L3f5J86NtmMYYRw9XonnKocp4bKBbPDEVHKsv1M2aQThLPtXo4jFAWA7rrmB",
  "key16": "33q1nJRWfZdp5hzNWkU3JjKLqdwxSQScPAnvZuSZ7zxWdSRXY2Nr2XzSDosreCxh7uE6nG5JR8ey7ZK7BvroLskh",
  "key17": "5Fhi3NtnsHhyGDMYUGcpoYZffeivwGBusTvz3WpRgy5pikkD5oS4vCmt3PRJ44MSqZnizMttM3p6wLo37yVy56gA",
  "key18": "PaXo7EfZ4fJZBw5oKCg8v5XRNQoif45ZgJ1T8Msa1j4kmMcv9kF8fD3oEFmd98e1d536VCDUbtEYfHupW164Zjm",
  "key19": "3TzToTsRiqjyjfZHFKTAaomXhbC5t3tdN6LqgzZ84maCmeuD9B4hNangk9ha5TQF6zUF3T5QTyZneoeUN5ewSS3b",
  "key20": "4jGCqbgUAWh1QApePpCv7U927pUYcYkPP6QszE6sQNgex7Fsv11Pq8Ny5ki9GZp1267zu1XA4mHRUwaZt6NPmJTb",
  "key21": "4of2axsVwE9DHgUqtCQbodph4D9GEY1n5cNskQKLtZvCTpfDFVcnrZdxvCwDPJz2xS51LTjLxHPuSCvjY1zsYR2j",
  "key22": "4KdZ8gZMK1eAp83Up4wzBcRerJ2vXc6TQf4pVnUCZCac81ciB2ReELriFqYh44u4wVHK2prjHsqkSP9gifFcVHY2",
  "key23": "2NBbfoGY5utiFj5SNZK4QkA5xV8pAUsAmgAp7CCaKHzDXui6saW59tNQCHPhHDXDmECUXnjMfAvcWdgtCpHQYHPU",
  "key24": "4w6YLVwWHT3ynGt8vFLiVg4dnd9tRyd3JozVA1GneXNv9YMJVWhRFNniYBhZhe7KPbKcf3mKdMiNaayPhwU9kQha",
  "key25": "3CHarX4HBVWpF5fw1v81CnUiYUSK58zMkmFZTRLz1iKTjjaBjDHXmQbMnfk7ZM6woQExGhvXFebTt5YsbBvfM7GT",
  "key26": "4oiheogKjHn13etx8zeT7soEWDoxBVJbip1WnC8nCz7PkGRLXQWrbyBeZf3znTnriQVG8AGYDMRGJkQYb44Lugrk",
  "key27": "ZwbG7Yh8HmZ5Ww6SHqh6rWiDH4KPz4AT8j8dXcqMmc8RMkV2SPRDmYvawqXwGyt74HhUx4hPNGRzBsh9JaKz2vP",
  "key28": "3zL67M1LfXTvzfPwkpxaWxKNDgK5eatdxR9zMYuptmYE8QRv4rgQeKToNSth4vkvh8VbYXBoqqmpHkaYWASUNhGa",
  "key29": "4YRaR9q8iBTGaBX4sjxDYyRzkUBmRcK1jZCdQ8UtFJpaekFqQ1yanGTFgEsmJDm2VsPVc5fDikHUaQ49izmg7k9h",
  "key30": "5nV8XbZXrtoEg7WPhKssFEsYn6E1LpiGVQwJctSpk2ZJTERKBBw5hpBUsgFCeRBiXJEfVrim4cwosSouivJbw8FP",
  "key31": "5h434Q8S8aVfGmxCCsZ3yugAMPX1XdfcriEWXBYsFGRB5PXKhsawfAH86d5zjpyHRNRcWuHhLLo7Fj2RyAjCWdTe",
  "key32": "4n2Ggq2ZcohEkvwER9QmbAyfNxsNtWMN1QTR67bK5342diA1zVkTUyh3BXc9YKP9VMjaiHDwptQoeFGgnyZ3m3Hh"
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
