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
    "5x4AU9kHsXa7TtUWLSn4NADJX54HHaGDYuZHXXBtSE9z8V9Hk3MrCyJ6FqavW7QRQdJVD53MXARdDAx1TJf2o4ww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bzJDkbTe5d41VjWdVJBF9FiW8SHxAg6axeZr6MEwnipW3P2ucX6qjtHQWvePcsUMiSJQPrS9Tz5UPFb1WUWvyFp",
  "key1": "2WoV2sNyCPNGbYnFPzkVSEYZLN2FNrVbc3MUdw8VkPE6oj71guCmbBCNc88ww38dWMcA4iyUd6kJzkbtSoho5ukW",
  "key2": "4K66p8Q4RxyAxsSCcwBeD1iKNCD83J32nDN1Tc2k8K1dJEgGQGKZJ6MsbcG2LPcA6ufk77GAjkb11XWcGyMEUi63",
  "key3": "4SE5bxjdPko7XfcGFFZ3PzAfnouBwtPLN6USnXz54PAhrpnEYKxTgvjVFudSoTrpd4oMjG8Z6CGSF98SFDuPSRsu",
  "key4": "5ST1vRASdyRrAiNCnKhx1j3TSdZ5o1GGLG27y9gvhVLpCXMcpg7pusZ8CXdBC1p3gDNLtT3XXS5Yx7joBtjJF22w",
  "key5": "5MdU5PdUnhfsHMxiTPU3Bc6fzzZ86B8UBszns2S5cxuJ7ZeDnurhhJ3jMQrubWkrpmaSc4par3ZTMnCi5dxz1HCA",
  "key6": "551QipYy65xXqFuFVKugeVttv8mtg1odMsiCKprHWknRATPPmmYPrQBUWpEq47DoY8BgN8P8hQBAVxrgrmY7ZK1P",
  "key7": "2zKoNxJFbJguHdcdgcqSyKuh7A71NRQ3vzZXCPACkKWmSTqUJXSuuVoJ6S6JapNbc6pn3uoFtVuvPSN427oPGECg",
  "key8": "66dsSBwPXuAxoCPLNQwzd1by6v8Z7DXcfa8L7qguXKCfvvgXMZcCvwnaKY5Pv3eN7J3oDq4Rqn9B8r2JAqYhhmuq",
  "key9": "27iXV1pvy6iXhBhWyCxegnHLYEtUZEkvEA1YNXqphpGCjU7joZwTEpFN9mFufuoJWTfE8i2RESWHk6xB93shB3f5",
  "key10": "5wYpN1RsFe6BrNgSyATLmFx2hRbUPN9oCdvoK9r5T5FPtTumc7HfsKLNtdVvwSd1PAhh6Hhjj3zjsQpDdyWwcEXf",
  "key11": "xyoR2df3oPZ7sWNKAGufTM9fkpFKYPDNtXtahw2JHHzYroWN8ysU569SLVALtKUABWu42vgVRSkmWhSYoe8tv8h",
  "key12": "2ymQrLfjRmfS5ERFeykwoEj17QLBNDbjt9MraVVrkUbnQvGZ1equ75rrQwwFDb2ZResR5URQeCYXWbb5MvCEMRME",
  "key13": "2U5PTj2keL4owB1TEY24FArUtwot924xNaHKADo7fUyAp8tJ6xpjipitNc2HUc5mcKXPfqH1sKLrYCYYhzYo6Pj5",
  "key14": "3D4WDkwdSgj1FTTZNSq66PAiYwxWwNoiZ6iVo9F785wo5wu2EhLYh7Zidc7UYQcLky3n5whAXBTbmB2338viGG4d",
  "key15": "41SSkg8UD5B4U84CRodUfK625orC2miXq2APn94AnDYDcrWaKCi9pPae47APhv1uwMZjUpztsZWCTasU3XdJvZsA",
  "key16": "3ggC1sAjmUBSz9FEt4RFyqLG3ko4WfBDmBDJeKFGDUkxVduacGWk4bcbesY5BeAbLkQ7hu8TmSQj1kvkXu13wdPC",
  "key17": "StwpAmVYqGTuDXTKirRhzZRFY5TfvEMjSUKNsq6qmgYb8T7mHAn91i3wgYasWbwLP5yf2vPGao7N19iz9xZbXkv",
  "key18": "5UWjihCg4ka4F6knRvBpMbrt8VNPt9UVeaxu7mf5FN1UfCnNTxjgt5ANN7zuqBVTRLcgFsWSuFdgTR6ceXJqGoxw",
  "key19": "3b18Fi3cCj6MkskcDTJ3BuBVzTD1Hq85Yo7YpuUkFc8HjYof2X8w8CqCUHj3ce8WVnDuFC2FvUazhyyWF7oV8D2w",
  "key20": "2EgKrH3R7RDdyhAYfWLrtVAEVfTDVqVecWQuPfTZefEFecTcmdi1yJticnt2fdoz2QRbZpjoLVmyTjRv66deZeje",
  "key21": "5bCi3hTFAF7Y5krBVGJXnLqoCwBYVLqNRV7C63qjuq83kzfUezS5G2rmcGa2gkJFuQ22L8cmMw5aXA2HKpwT8nRG",
  "key22": "2aoFZZi4MvPBSPLgDQXWZnCxid8DijfA4XNTAm89BDVoUiBPJm7V2nUAC2KGRrPBAbEXeZnKc2NrvH5zr4NPiZXV",
  "key23": "3n5R2QuUsg4ewusdMrEBwysx8o1YSkK1oX4Qgy7pyDZcraHboRPNfCYPN5FPE1PXxKhRwjKDzR5QwrSPg4S3HtYs",
  "key24": "2ZdDiXcLfuzWtsJnEyCevNeg7eybGDBGgXNv1vfJb9tpaLjHmrf7yhNNYEtMaWUZF7vaY9RwieGKA5hJ7Nb93Qc2",
  "key25": "2f3KQh72oVNiNm2AwwjYJejosf8KMf7jZEb2RfcZYfoALdo9EcXyiQFPJnEZkUcDaEtVDE21ENSV6M3krzYbSE5L",
  "key26": "27VVTUTdMr9NWQY6hDVQ5xb1tPdaXCDvo2YcRm5eUhtzWCdmD2px26qBssd871Npt42VVHyUWknZD17McY5zySPn",
  "key27": "5X3sQR1CA7GsQfaw23DkegPcUMGDhqdwHKzj2kBAthtrzPNSc4FDf9uh7CRcdWg2K4demScryVsh3YsGWWnog8oV",
  "key28": "5vdZKMwX7HHnYdpkktx1w8FjjKjzmvxWSWGadBm9aNAn4M2oqWvffWT5jQZ2dkmfshh4PQfX5baQngi7f59eXnEz",
  "key29": "1RGBAwQKGGr7ajAoznKCjyhPfMmnb4VXBDq1QDLdg5kVucLqb1NAkdbeSSonPAjjR4koUv9v8MhhG92w6TP5nH4",
  "key30": "5UyLqd5hdfKAvc5pgBdtj2DsZcWfxTdjjpx2UUvogCD4L6aKSbZBck7CjE8omRErZRCKidkFAg3jMiKtAcp2N3pj",
  "key31": "4wBtyxY82PreZAYLwn6abQ18DzjXYktWnvjBVGw7WMHtZ9w4m2cqrV7fVesGrQ87rSZrjHpBnyDS3Py9hTBVRhgJ",
  "key32": "2HgR5ZbbnFkHwrofWhBnpVC52739LAxdKKVEXjmXUFu7Y6NPfV9uWRnV15qXAGBW3TfoXmP3yx5jrYYdHj5Di9rc",
  "key33": "3f6NGabQsmhwNxGphMBvt1zKLkv2X1Rhmn6UupMnA2mFpeFC7PoQCCpjKxwyEwmt5GxPGNE55N2cfCnSXqUu8Rx3",
  "key34": "3XBSU5etoBR3baEAzHeJsz9brCXgJ5SzcYzWicyAFBCDxPv676zAfRxabVvQtQp2KBZRWwEWK6pMgVru9M9U4Uca",
  "key35": "Ug3oWgFkU6umtZkcU3X1Y9qCdfkc5Dmc8QZaNtkz7QrKxfhVLiBfxKvxPaKEW4js6VDomJjAHR9YJRATtPaaqXd",
  "key36": "PGjfTRoWrM8HqD6ULiBvQUkLzXX9NEaUZupEVwQb66yEa2GzHk39Ef3Td9jULm5YhF9ZCv3Wa2sudaiwFJqnYDb",
  "key37": "4x6QCPV7gbtFJ8zFX5gHYyS2eJBt2Uc92NnWkCXT61Nose1MT5xQjdNw9koT6n3SfP7aJnM3dU1FMzqkyJz9Lb24",
  "key38": "5A8mYiAg92S9mzfYVjGAQ3CqfuLZJcjUYDe7qcV3PhfLs1f35JAq1uRf4nnWvUu9uzVgK66cBGBpeTEdQSRJ2oqA",
  "key39": "4Vv2vfdoGETTCWJRkCqua8F5cpVrkpvjy3dTcaqHxfXBD1TwDR1bV9xFA2XVuUD7KEA1hc8XUBqiFstT7FuYqzVA",
  "key40": "5Yd2aFtRRS316HC8t8gxjXB9TJwtpaXXNmejo691EyqHFj7c681Te37j4pYvGhMA5keiqy6w2Ua4K1ZTwVBXGVaA",
  "key41": "4iiHb8MyoUaYKTFfo3V88kQjofC4mGzPfQsDhDA3NohphJECWSpAXrsrXaY1qWzDmbaCuNNmDwgq52JTgWR3YPDQ",
  "key42": "Wj1pgbu77Pu7p8g3WSQGc2PY1WxkaaYKXtJBXk5y5A7SqtmWtFWdLK2Ek5ZNHz6afcG3NnFt7Cw7mHRmNAD9Bxz",
  "key43": "5CEMAJxZE2bpKRMzPVvtFfvqZv7ryde4RvdASaEvHhDr3shLousv9DSqTRvRkfFTUpEACWypYSbefAP58GvjLw7S",
  "key44": "2XamHNCyHLTcVanvkXzcHxxdWLgGxJxvJ7f8UCyjQz2WUaKSWg8iAcmytcpqMc1WTnEAuiKd5MVtejFkPBpcwrnd",
  "key45": "3LWGz9qNJCra5HbmsLcQ4yDG3Sqoqvs7MW478bWdD57xhCRG5QtUqEwXsGcnc3hTgcwyqh3knVLs1dJKS3kkLZ7a",
  "key46": "5ZuvwtZdFk5zWZmBxENGo5yGwWn2w3gTCDdb1CdkXt4R878cX547fYxMQfz1foAXpb3qz8314u1DGE32LijWS1DZ"
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
