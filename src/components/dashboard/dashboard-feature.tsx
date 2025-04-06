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
    "5cnb7bzrnDtKYyL4uCxLWtPRqQjCQ6WSgwNfy9X1EzXb4ALs9ShNUUuZAL8GVE9oMd7Ay27j1yj3M9t1qFR6fQBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MS9QUApuWSrHkpEt4A16GBw8mwYB179Mxtz58SuMMzZV7MiaocrSPL5kjjiQJJeBNJmm3i83S4EWTw9UCdnWRFQ",
  "key1": "3RrrnAvStbjJFfde8bFREZvvYLvBq6sdW4cszMbSGaNaBH94ZEzoDefgyLhV8NQZrkQT6Hn6N1A6S3QSsT9nWyCx",
  "key2": "3ZCJBj5T1PoENNrptL4AosfnTeMDM3ZELVua3Ra8vooDcLTJ5J3rR68UK9XPKafGmBgNJHuEKuLhUgACrWsGRdXS",
  "key3": "2fAHKZ9WxkKJtPfB7g1FuJMDGBUoTbLMeL8M694eX45sHWdRmR7otrUHFboL56d4yxRhyFkbUHMG17dDQj3ZxK91",
  "key4": "4GUpiimaRvuoNCRSFWH3rsB8Zq65dhbrUnxSxeYFKpYeZHyKsaqV7SK73LkRHxE712nPDDCs4aLtmEky79LsDDnv",
  "key5": "4pMtUjP4ztowtrnZpTwbXQLh2DWu323nYBRzLcoc2mZHVSXVjinKHRc5YyFXFy9HbfbWqqG445R1RedkVbbYyMxH",
  "key6": "Bh7pQseBxDF7aYF6nBB7vs2z4k7CC3mXy7LK8DTt7GrJfjBUWZchXRaHy8qiozqQM5pWNKvLbnwtMCWmTaRzpPY",
  "key7": "EpY1eyzwGv8kB7u9ZyJAYJbY57Tq7VWzwqZRbHPuyzxKfAQECLnbw7wkfbJmXqWCkStWSM9PzmCXjW9voko4SYe",
  "key8": "4hhamUdrQGxjwMFrxv7oA4qFWaCXwTjXCLDJREQkp2pBDB5Qo3wDCd3NeuM7cvdJecgb6gDQTH4u1gHiJ5FkpvhL",
  "key9": "5VwKd7zCa8teSnm7jB8U8K54PTb3b5MEYGiuuQ5mTz34NyUK8znsmB9jbarQaGLotWEG2PAnPi6eYfmBmHCshzfX",
  "key10": "4PNKdqacgDt1GEhXHyaRRhorPUM84bufvrtQcHaUw5dByacuiRmKsMek2L5gkAJ2TrSBPeKu1nVUZErU5ZJtoZGg",
  "key11": "PEocAhXYvdsxKc8wQKeMQ4yHGQXQF64A75r691aUxs3K8brymcrdoPJ9Zrpa9ezv761q2Rki7igCxvsUdbvyKPg",
  "key12": "3mJYggh4vToiAN36f955UhdFU9sk4pQ1Z1tamSCZ2JvMtytNfpgyRGTzu6HvUiaY2di2rwFo23527i3NU6aGtfi8",
  "key13": "fVRqmUkKDxuz4kJyF5vHBvXy5ZByD4MbnykKGeFFJHy5EZ5QZqbnjjghuJ3aGStb24JDzsLremC2a44gff8VCtz",
  "key14": "57BKZJZWTGHEZ1cLdTN6ztxnYyifhPbTANFogbxQaTXT6wegRJfMRCmfqqnN7BF8raGM1ufm4nmHL4joYLA751FK",
  "key15": "4WuGmWPJBJh5X9buZevFkCxPdfEWfSAKSVKfFkHFEcEm7eqJipAZwBCTwRFuvwShu9j7R4BmatEVozotGCbBFK1o",
  "key16": "3krL6BhiRpnB5qiJCFV6dEuAmGDxZ55mgcsuE6VQYbxim6MxccCVMojaMMDUbx3CMr59T95N5Qmug4fCy4cJxNw9",
  "key17": "57dH3myCDfmQ9mQthZEoj5yPHNCk1uZyLGwGnQUQYrvkLmgShWgs4DMVfHZGcMB9YeYFu6hDtmmySZjFHHugiMAP",
  "key18": "3EXrS15ZbvRWpghcFHxKPmWC6iq6H2jyR3QRnwWoxp2hPCDvESRH3jufXBw5sYTJbTuXpWKDrc8hSSMGfUC8rhvy",
  "key19": "5qG6ktw7oMBPLkWdqg9veaiNTk8CKd7z3gufiu7CY4eF4s6NH6oAxsEkRbu1ac9nb6TWB4ffaUQGuZpVGRd8Ftfo",
  "key20": "Xd26mdMKRgTaDRkxcsDnx4xc9tM7D9E2KhiqkutdN2QPAdLecF2XpYUmutaUohCBpMKBKnTeQbnQJAZXH9sEHFT",
  "key21": "3SdKuMP2J9ekncncJPZpdyuXASnVXLfp5KsbamuLcXtvmZJTB7h4Pod1fkNJJcpsyPEyzWgaDAak1zeoZADyFR9P",
  "key22": "2U1wwAmnRTkRFC8i7Pzt18hy3m2V6Wt2vg6rMUHvNSYd5v4qmX5yL4oYfWTU8YkRZyDHUm7STLsBUBTFDJjWWTPa",
  "key23": "2HF2n2LGsyLdRowAGSZqnPgPrK8fqm6Fto6YYRFeSbAmcbvNwDDEGGDDYsRB1LkUHAzBVcfbuPxAENc6ezvtSyy1",
  "key24": "5bY9Zi4VJTCfDKD8iYLi5Tcze7rB8ri4yAxHiREDBRkuYUSCaFivogpDB9N8EgrfmbciH3sWjXDKPnGBWphW8cto",
  "key25": "2mURw3ibk5kNBWiXyRbmuxAX6RVo7iCWdpDrK288vMgwMMH2yhMvEeRYeCKzp5jdAQoJAANwvbVYFxCKTFXctXZG"
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
