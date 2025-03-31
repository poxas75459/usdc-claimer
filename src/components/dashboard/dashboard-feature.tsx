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
    "5CVviL2Hpm853hVzDxdPSvtHdGHovPqRjCm9bUU9dMNLysxvmTsQafNqPdwmb6xrLouHxpDAo97WRuLzDV9vnEid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QzqJR69UaxPCivGmDCC1M295zftVd8dBY5PLeUydpkmJ72w3ibHuUYMU9bCbZid746LR4pu6u1CiLKmCxtQp3rd",
  "key1": "4xNtKN8ptpPvDb2C8Y6Qn8nnLSfTFYbk1SXfwur9FuDFwsSDnSFF7hhnBuFTS8WvKRqc8jcT6ZHVVuG8TwcWBvin",
  "key2": "2caHdVmohCMgpByDew4kV8ypfu9hy4NwkeLBYZ4wt6NWj8Sotu32UxyuE7hdwV8UPmqWqmGaR4FNrL36BHJ9WX5p",
  "key3": "f1CK47w9kEry1G6ED6BTv2T9gUNYEbVkYnbS1jh2i1qS79ej3UkkLpqYZgvMGigi28vr8AfwYzxn9KjGdvHvxLn",
  "key4": "m81k7MgD4PKbfkfo3DFufLX7M7TgkNwtrmHuFf51xWNHom2q5mvGATdUxyBnCPhn1ug6RmS14MGPD1Jyy2VdMnX",
  "key5": "4LTVtfTe8zbx5du2goAX1vtPYGNZ7Qvq6VeWHQPwgK7qfZivbgqNsL3j2xP97nNuCqQz5jSwhkuWvK8MQqQgEKZY",
  "key6": "334PTi6EyuCro2Q1MUY5sT5amRv5p1LKW9PjQPxyEhu1FYeqDJUghLMpXc7Up2SP5JtnPVEoGfsfaqgihFzx1FTG",
  "key7": "RSEgDWKVbUCUYaRhUrHhHWYB7imA2drt6mMaRGrfWXoG6BiUgy7jPqrBqvYZLCBouUwiqdYywwHf2pRGP7LRscC",
  "key8": "2FoB1Qz4GA3sQJoWS9Yu617N3DhsDutuV3qjmV7XeovvxD9qzJioWWWLc5QRnxdkP3uymLYMxJoRTyJsnEMbhAis",
  "key9": "39iagrBV71dFWymj5SVYj6ooVD5aWL3FDftiiimJ5emSVdUQHKWYrdzMBtxmhdPZBHFk82TyTHrJ4asoB3pjkKj6",
  "key10": "4Kr8U8JZ18Afd4WUUpRGo1ZiUeayiPCYGfU8U4yx2B5g6aP3JJLaFEUQAF9448Xit2WxWNv42Wt8vQc1EPrg8Wua",
  "key11": "4cn1t4gTDGtPgis6QnpHshHXLskjZ6HSLVx36zWp17Jbk1DAHdw47AbT5aQ8N1BBRsiC5PJtP4zvWhX9KGQfYsVb",
  "key12": "3SrxY1n6X2LPcnCuSJ5gz9WCjxRXECxGodMf7oE5TKvMZCsCAbmV5FA8GbUsTRNnmjC9vt9BV2sdYCfjjHjF1mAV",
  "key13": "591SMU6zUcCMAjTFTJ4D2VVr3aH4GShLD1GqaLBBFhcfAcxQwKYCVFBTKpQMizXN53U6tugRbGNYJwFVvUy8qvNM",
  "key14": "gVwDLVVcWEwF6TT2gt3sr7Hn3dYuSGc9znGMEmtmjADM8Gz8CLvGdR9myhCzsjPot27TvB1wwDVc2WxGVBEqS5J",
  "key15": "4uung5ak79veM9L3Rguy5NdBNZrXjUfW1BMaz4LKchb6cLW8fpfktS1KrLQ9saDbUcsfm61goEG6K79WSypkijEj",
  "key16": "2GMZDgABcXo25WuUrb16HL2YV6S6d98CKQwsKG6UZkb57tbB9LSgXhJDopD6ccX1XBD15eYjuZ7Dj1mM7whzf3yP",
  "key17": "5CZW56Zb6rCiyBqg8qd3ia5ZzH3UkJ7oiWgw89uxvKt8jWWdbNLSjaW58UWoFZqpCYJqbXSG1HCN99mhgRUUXrDS",
  "key18": "2hwCuXGnTScbeb1dbefyvjwVqfLP2mvubXeTc8uhgitnAW5t7ry5xu9ZWLZMz5vAyZ5dCzMT1QEMHXVkaXzfwbTG",
  "key19": "5ADZpRvatseyC1eeD2irH7rYGFAmVm3JLwNybjsfo8ManmUxkmD1d4qcjRjySco54xcY6KEA6gjuc37YawpA6zWC",
  "key20": "4cH2RW8ZwwGEjWBGqK5YPoi7Sp2ZevaCUPxC7gHRaNqckixL26eN2FsabGBJC1mr1dERpAM169WtpKmNa4DZDmzm",
  "key21": "2zLnd8sLHBeNCKMd5EKV3xypL7zNe8pdAH1nDRtfQ86QNiskdzhakkdJA48oRzYww3dpD2bEjP2c19N1VS9diaAV",
  "key22": "5GgfpC3YmGj93drLSfDUEYiCX31EbY9VKSYoLKDUCzoncF2uaDaAo2C7XsvJqksdqXKdYQvJ9QJ97ko6JZiUDnqU",
  "key23": "65ZXwsjXaL58p1F2DZ1mRQ8gT9Cx59EzUebBwSeoE4NTqvH8iRzVkYyfnN75NBuCVGTSAocrJUyHcUtiD6VYchft",
  "key24": "3Zr7NWHttazr2MSnotCxu85HgGJBuYG5Dpipgep9ExqZijzmmkxB18982nmLBitisPrwD1Xb6ULovxogtPdGP2gp",
  "key25": "2o9P3YY7mQowRJJHRCeZizm8UDxCjgGfRDSTNE348KELkMvbyh5hmue6daMJbxu3W23FqHRa28MsLiuaAkHvDUSu",
  "key26": "5p9E6X3FhUkF5TK2RKyPJDXwcFFBqVsEsPJsmLker6PXZEcUpaMouSp8yysa1yUs9P1uEdudKWXSTf6TP2B3c2B2",
  "key27": "53CsjHSTLq2jcbc18zSRs2neXq5mzd1XVuxY5VpFc8TenedZfZAjqJ7NiGSAwYYo78D7oem99ECQpjmrkQjVyHTV",
  "key28": "251E8Kp4nBCcyNHfMm7AG9rt3F5zYTeQgFDEE595pnxvGifazn9SV8fa7BhPVKbhaoNDiX6gZhpCRo38tDDrP4UV",
  "key29": "YoPQaciNnPhVfRVoB6BpEkT8vwio75NSe9Poh3eZfDcNM1VYkUmrmjZ22a4HG7xUZTtEdTK7HRLmxx9N6iMrroS",
  "key30": "5DonYcHGVyx5HWfHLF3W26AkuTZULpFyeWihYses7ZzeihqEuPTRShLedVqcbxDvF7kimUcPaziBSQTZKz48QP4y",
  "key31": "3hoa6v6AgUrqULS6VBVvVBzKEH48zRtyo13kqAZpmLY1eCvFuJQprDdL7y2CJdTdYGJ4wpf5xFeFk6vHnrkPSKbn",
  "key32": "51ZFjtBawT27GkfHEkLf8dYt5HYCUnPijDdSUjdkgBrkPLF2vczVUezb5rjwP4DnbauTriyhh3ocj6aV7a9fzfuA",
  "key33": "zEREgd7QJDzYw9LeaUwsjYVn613PshnkhSzJNZHv52n5NB1xeQRot1Yzrdpcsr9Gp87eQoLKuVtDaUokyYs3u9D",
  "key34": "59NofKzj76NrDrk3fi3ZXU6vLkGV7jTdZZVVz4hBnwDnV7pJ2FguZ6T141jcVGKWJYnYk56xLgGk62XTnKuDHjVo",
  "key35": "5nUTBk9DYa1fb3MuWSQV2idbGmfraDpLXC9GJ9h2ePdiSNcCxAzVjFwNgiJAGXpVinCCEwLTEX5heyg5pMKmwSy1",
  "key36": "3W3BRQ2LWjrhr1kBvrCVkMY3ASxQVuCZP7mTUmtSZBoE5WYLM8UuUzXnbw2vZx7iKj5qhm4TGSBHiQw52mhVip87",
  "key37": "mSvsQuKFSMoKNaumDHzWMTMTiDDHAnAk3CfzSBnuJ6wQ5je7dNnFFRDVkAQg2S3amUwgEztXZmc9FqZ9PMrx8sa",
  "key38": "3PQDWLvk31F7oQhyVADYTeqcUrAv7MtrSMnWqcFTx4vvu12NvVjBQpLbcU1fFSMCsKsbKn42skrvUCXwYftwfsWw",
  "key39": "sUX3KTjKZ45tV2GHvbUnxS2BkdybUqm4zzGeAtrWuttWPSnhekdVmbUfR6sKHcJE4YvS9ke1w1Xws5QnnNbHcnn",
  "key40": "2XfPPp4qNKFSDsDkrideh33eTCSejD1kn1CjHN79acKSjuAAUoJNL8RYRq5oMqdAUuR3CEivP28SNVJj2Z5gcjJi",
  "key41": "3qdBimfvhEELcbd6RfmJH5zQH2EsqvLRiK9tcU4Mr24bL38eLb7oZe1sjT6t4cNtPKYWwFb3dW7ZwjAFb1DUHJ4y",
  "key42": "5oSHvC55Tp6aHRARpsHtmTfQjzoZnJPujjceL4k4H26m5kVkv9ng31z5oy5vw3SqN68wVHGUGTFapWzoKtEMWc29",
  "key43": "3Mts6B7xRQcbn9x9G2UDroVwmwuduKTiuZx3HLuKwacwveT5S5wjRsvA9uWT9y6qxrAXXQkTuJ4W3getDyxTSWFw",
  "key44": "5cBeiv34SJD2TtTAT2XhmpurxnHRKzV1q6Sbtz3mu3BfEixjjy8TaXUHwnEdiMYt57pX6mvspoCkQA4dYCoNVvcu"
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
