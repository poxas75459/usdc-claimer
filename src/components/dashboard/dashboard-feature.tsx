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
    "5gY5b5yLX349R5dfHbgk57ksgGsWH1gM2BB42WaP9qfM292Kvn3rrhLdnCvmih3A6ucZonXmj48uzP3P3V2V2K7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FdJy3ypfAsJ5esZxchPBRnryHKVVkcYSizbq9nic3y7XCLLgtvA58eg7fBMAEcBKZ2XG245NxwrLxMp3aLm1ocA",
  "key1": "29YJpmnbfTgGrP3Hf78JXYSQDCiCBP4UsD1UngPGLYmdnVLNeWnoRWKXDhZke6wnjja8TX64cKrRxesQm4m8ZzsA",
  "key2": "2BuJ5CdkLxbfdoiWB9QHxBfvw4gm85NhfAswvbuSJjjFYiDnnzcwKQ6KyjUjYkbDHU6XaeuJsKz33S2kcFXxBGFb",
  "key3": "gah1JwLfNN43sFCtnmPT7MKdeQo3JNh94coUuN4dsNXJGKiRczKWDd9Ffp3sxGPyuhzK9MSc6AufjG3Ycqc2cin",
  "key4": "4drbdE7KNwDh7vcf2XqtqLi16fh2evNHZRraDG3qqRofCQxSmTuEzXKaKi1zxfeRtL2msCybBTJJiQpRbMnWFQAq",
  "key5": "2ajRNnKeJ3rmM66DFVj5eiAnWoUKfqgj3LgmAycYqk1SQn1g6wLDoUssqee61fk4QUu62Nz5in6pa1bfwaeaw72Z",
  "key6": "7Rqwjvhvw44MyVmfosYcsjZmbq5Gp7N1LjdYRMZNjmzheeF4NxErQVnjKCn7Jbuezvtjghh1gnLyt4cc3f638mx",
  "key7": "5XKepFQzr3qasYT3QCfmQLeKsXEXYPfRv7UpBHo8Q459aX64sp8A5wA1oKpUyXbPiRNCE8Fj86AWeHJSrFAyQ88f",
  "key8": "2Yf5BK1RbdKWGkeD77iNx7tSNPWHwD2prHqCwYZmB1nt7MySLU3tTrRz3UGyAjkwCHdSVqz3uCPAWu43Ue9eG3V9",
  "key9": "53iyyvaSzsGozfnVB6qM3d6vrpGSPVX1gC4cGHtP8skbbbrGKM8YHShDiNGkyZF3LxkiT4BZEBS52uof26ZsgUo4",
  "key10": "4ruYY8sPkc1BeujutNS17EbQPZp6Krkg2DDeDkqajsBQXyKVLsBo5fQ2t32ubdsZRsC99okSrp6pGyaJgqkkhBLW",
  "key11": "21bNFn3bPG8Uscj1kANgV8k268ktuppwEK2P4UmHMG2FL1pGoPd3B1MRQqBLhnTYZJbmyPzuqYUkr6Hs1N4TvXfX",
  "key12": "2zSPcTtkFs2FKhVfgTK3rVSeTatdgxG4wYwYij2cNF4MBv8fb7mA6NND48KCzhU8Ah5YgDXSFYfX2ma5tHb4fCH",
  "key13": "29pYQM3nVVNqGPbpBLvSw2zXnH4Lb6fXzZ3YVZmyBLXo1At9AdgXiHnHuiLf6wPREccLfxAnL1TRoaR1UuKfoWoa",
  "key14": "t7b9xig5k5BZNEttTymyDbU871FdvNnQEQpraRx4khiBuUPxr2CKKr2qDZdYz9BrnKgZgTKhD2uZAWQ2ka5zdvu",
  "key15": "UpXEyUcbnbaCXn4LKLhpxCZ2Bh9LzDZUsivQCRdkYPfb4HWWShVKrWZPVErHyWVNUmii845w2Ghrt5waWBCCgpN",
  "key16": "2vrdaCHuwnx2umjLHzVzEwH4wiVFasgL8FRCUVzqdxsD7MazspPRoDJpuNJbDkBoPAQpT72ggbvEju66y8vpjtUt",
  "key17": "5M3RrAP3hNjekYYR4w7XqkySmayqGNHopeTEcAxgPxYhCfpvNSCvsLoFgssVRYH8sES6x5nA537p6R9TreHN7LXd",
  "key18": "4WYPcsvrifxrSYcPoGZmr99mNq8YsRWRTpkpMV5mQqBi3fCmGB4wNTTbFByJcERpcpH1q3vZUQuWXSUNJxrd1p49",
  "key19": "2cdRQjpf4T5ctfyoRhbB7Aj5HfQSLMQMW1mk3MiSCkgUPbhAd35LchFdnKNfPJtFZ6yj6mdc2tNKLvQ3Whep7Gj8",
  "key20": "5gRdvMTwxz2eKEgnnAZTEr5uZAw2WkWrBP8upGfCiJPBtDLVECbPFRLSkrCpfSZnXmDYKrMtULpKHka3UsyNs2Rv",
  "key21": "3Kuym3okaTrVSPPUhby2VDGNDGeWMucaUWqZx5wcU8cuuQguVZ7ezmoKeixRZdX1Gr2vrsXLx5iMUQkFxr5TSSmx",
  "key22": "3fC2t9ZDPWLbWThkghqp8eLDyq39YviedGvp6JksutJkQvzw7hdMTkXpzdDuQPK2mpt89B5kso82XMUqfGRVECwv",
  "key23": "WuUiAhUZCQJwDNJoWQtSSQrZFugXKz88pN9RG3cqvQhcri6yzAuCKRsPqbXum5E8we9TbkEfnvf4XMiKP4xKU3o",
  "key24": "263vtnA8ZCLykiwiW8AE5mBZLLaeQyQJ4uXnpQUUBYguae9RYtM3rsPN8jCaHKbF2kb4ubDDypQM5doC5J3rguU4",
  "key25": "HMgLr9xgaexq8C79powFUZfEHzYkpGJ7UBns747yDG2bfQuVyz5i3SrQ4hJVqai6mx2AhwQduPeqY9KFUf9b7rR",
  "key26": "5rt3BJUZN5yD9tj4U884GTeiSoBg9oA9FZNd7WxQwhnUmkQd7XippxbFgVBubNHx5E2dUF324ekqQTAfMzzX4Gbs",
  "key27": "58pfY66W94ptXr2RUZ93cPHjfYR1i41Hm5eDK5rFDkoTEX9rGd9zmSaqosXDK5fuGfJkkBQHMDiPoDzTvjikJesa",
  "key28": "3d2mK2RmxvHvYivYpFdGJGBhTeKzHgNbWzNrmxV2gArPRNBHfrngHPFXAnm3h1tQqo4pyBZdvVYghySCkHmeJhrc",
  "key29": "5oEMDau9UgUqH4viAKsUF2FNccDmVEb1H3tM1iq6Q31mar3oMcReh8H22BQnSWgc56S3km5WfMBTBUWzjrzT6S1U",
  "key30": "4nejup2QThCX12FNSxMjAot3e7UYGb7nrhHcsqKDxLeSFeH3KCpUt81ebz1o9JeVQFtwYM3wusuWStxsFY7YWd2T",
  "key31": "VLX3NkJsYi77TiRkRNcRuxTu7XzQ8fk2vS4TBfzkuwpmkXvK5qLBnWpchkNgx7GXTkMWYJ5ud7KK1pkqkXEaEZv",
  "key32": "5yWtr86pkVHXts7dHRJRtstrppFocEcm1eNJUwmnMBTyT2yZayJxM8pfDKG6C622xLjeoDFHzohMp5UEAVdyBTVH",
  "key33": "4CEiczbw3d81A9mBkUs2t9yydVxkk9cGHhNchSgjCr16xLthqHxvuoG4fHJLY5imV4a5SLbST1CNuScAiJDRou3X",
  "key34": "5we6JF8Yg2TVFcevSuEfEmjNgvGCG8C1auBcEsRZVzaa7xe3BvaknUC75FKz6yaP8zJGrWfhYb5x4hxNVQvmjW98",
  "key35": "54LwzdFXm6Aa6x379PcfBjD8rSc8Gbi7uJoQFtv9uKTaZdZQFStWqXEApeKfZYaMiT6mqfx1snW8A5HU5EukejCq",
  "key36": "h8ik46U4N3TDtsoGTPLunkhf2uMg7jpak9BGFL1Z1R3CTwvsBB81yofhrApFrpNEzMF5vv6ZRRhG516SMNs3gBZ",
  "key37": "4qA7m2JpGdNXy5jdFgZujXHC8jkrg1PWw1PxEwqVdw7fENyMwBaHYWpaYv5QbE385Wh5VwvvALKRhkfNDQJbRPuR",
  "key38": "27BASt2jQjnce2j98Zm3frmWrNZXwYgQwcTnjukaGimtDJbcFhvLL69DLqSGRTMe9ZEwRC8wf2Hc36YLeWmr5Lue"
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
