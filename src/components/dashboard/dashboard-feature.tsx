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
    "4XMW471S4tzrV3q35oBZPFzXBnakLdZabAft6CwML1aazsiCx2JzuU4r6jKcREpdc37tPs5mvgdkW7zvTjHfPnGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FdqipmVjoKEmHqUkT4YxWtk54GVCusgRABCCL3k1SgHiMwPU7PErs8TFSn7P78v69DbkdwXiEyHMoub58kDRomB",
  "key1": "yZQAdK5A2YPpCxa2JikrePq8FvLhPTg8o9J2CDFr16nfDpeyyPX5zVvSg83WM6at5shGa9qBQu8YeHgai3T8Cns",
  "key2": "5SUFKC14ysKd3bxKdgzoD16LEjf8bzpJbgRXqjkrsdwhUghEXqt17mJhgazc7EZh8NRM5HsjMB4R44d9arxMbd4b",
  "key3": "4MRrWU46KBZ3ZHJ7hj8qooFkY88DbKb315n6Afi9XvL5MZBE3h51cL1m6Yu6UUsGY1Rwu5u9ibf125VF4F8eucar",
  "key4": "378sAYys9Tikm73aMwnat2kU1xaJZbkEYJEWmDtyGZfpp43qvFWTyTkgvv5ej3Rxokw5PBQSGL8GVwwqhN4bmfGP",
  "key5": "5mJLYqDzNLub3XAbcdx3o2hUSyRY7yiBnTRWRLfZ1BqA51h5h1jTQk3kb2AJjY4918ubWxefmtkRJr7DyRtpihFW",
  "key6": "5ZSUrgE5uYFRyzJNtaAuAXAzkcpz2dQBakD3SrvBAaVyFFk1cCRrjiX5Z9nx87B4VZTMyowgWV2CcTch4yofr3Lc",
  "key7": "2uNeahiAE7hKqiJb34iQYoTGsdD2GQjBF69TqY8x5psLNBkcRXCLx5TTD5d6aAaPHYzfmJaeHdcsV64HGxgypPAP",
  "key8": "5fREY2F4vEDNYiFWRaZDXTLyuAjhUyHTgiHwSi2j7sk8CRHoiBphUhSk49c5XH4e9gNBgHqdkbDaGgAeuSxYW6ar",
  "key9": "4GpkpmtwThrksJrgKBAscnHgmr1VjGAv12vmtoL8EyxzvMPk8qSoU2Qqx4kbeWaoKC3BYPBHTBXMTqXYaNUMaKRv",
  "key10": "4e85RpyjNhnsNrqcgnTMqMppTQ7WenYWVrTMRzELDcjq26EQiqn3U9rHruSXmuRWGTAvpDWq2hJ5FqEuvDH3btUQ",
  "key11": "A4MBxZrYS2yFUdug8SgLcjibA4qc44F99hmfg9yJyRTUo6ZwJRJWgv2BBvsH9L9KxXhiycQQEsqqddBi3eTxxQJ",
  "key12": "5ji3oBtQUMLN8m4a4PRVFgaGrahJEabNcYMGoaBvuMcrgpwiZiQ8afiZ6fH6B5hLHevE4sy6eNqbUoXbrptALLDy",
  "key13": "2WLwr5RZn7rPaEV5qPUPt8nxTXEvYvU86tuTsngy8hrdMgLxqUbp4eEUQszkLCvDJ2tzHZq8Epsxist9buPay2iv",
  "key14": "5siYaoekeGS3eYiwZS99m79npfgcStKjgxHqqyNqQG7FYvPNSY5YwWPjUNJBFT3XJ5BZbXzDDwRN5KnXbPsnSTBy",
  "key15": "KyR1Ty3nDwULbpUDWqJ9eT2PJD6Mow4m2QLeLpAVocCYWCUvNHFN9x9Fw8h2dxvmGUUKj7GhjqgdCtdRn1VcuxL",
  "key16": "2cT3q6aspwmbCQd4bjLwAfniCizvH9o89PEBpLGwzBr9cC7s34d4DR7m3d7YVGb4ZjNGeBJc9un6uYvpZvsEQzGN",
  "key17": "4zSwNUsM3KVfqSdvYh5QYQtrapNWcY6gtafAsdh1CmVY6yrjyt74rGZRxzhV4tBRMdosKk8nswZxwcPhEXjzHwZP",
  "key18": "4PhNXLXn6U2cFD3HSkrt277kqhp2ZzQA2s3ed9TER4ciV5Uq5Sf6J1ZD2JK5W1ehxu2yopVF4caWRinZpooQCwa1",
  "key19": "4gQYnW7DhjVsRSJYjhSVLGv9dVfPZJ3BH4bmHcmdAYRgZpibAYhcGduiGoFXNaNdPZMyEpEXpqJVywRwGHxiTjqV",
  "key20": "4Txe1CSjXLHPWKE4M9ZK51RboR7paoGDvxypqjUfeTTMmBYQuKJWinTwUsaWbgG6b2HK1AwMEPBtJ9aBJGBfNfmE",
  "key21": "4VHKJUCNqE9AcYvXWm5u6ygXVXTgDe9jNEfU6SMAgN3jvy41KKiKQE9oS2wb1yBsUV4UBcgoh5d4GkqmJzd1cJM1",
  "key22": "4VhgoGt8aYQu2u1MyRda9CUCN9VF7xKbZubgpLQ94wVUf3WXq3VPxhzBiozPauGMyTWNCHvthd3XcYRCXxCBHbQT",
  "key23": "3BkLQSiuynfWTEqLk4QujudX29KK6KrVTYYWoSiDAPxCUHuroNDv7vBMh9uD7oyJqprHzZBbsGZ3JQcoSKK2fKhC",
  "key24": "3B9bqkqXtfNMp9u7gKTuhLbtQyWD3MZEYvxjzEp12t2gf34AkDM5gxhHVxipn4gWinYQmJy45jdbxXthQrQCoKux",
  "key25": "3MUJxMmpsXduCj63Xvf73gkGgDsvhctA8Zw32Tk4xanY6nbXSdTR6PSzsPuFjN5u8p5xXUdXxL3uDuq6KpJRF5ii",
  "key26": "5ZqX7EKP5FDQoQAMFgnvhX49zdXKcqtsBtUD3w8zWWvzDkYLsudmcpmm55NV5JLfgwPBqdEfMeYtkg429q3xUxUR",
  "key27": "RGDtgiPdb7DqvqZJovZvTWobwPKsjeGhUQUToLuKm4ocYNdHsgMhGyq9BXzDpEDj4K4Eg7UnGXhtCDs2bSTw5EH",
  "key28": "2qG544pcU9cpaN8MFzqUa7UiQ1Y9jkzPo9FziXGTdwhyn5MAdS5ZVg3JKTNbX8v2x4FGTuXkx6YaFPvAbsjbSwX1",
  "key29": "5MSPLWxU1Cj3M9jJhE1SQV9AUDKH8EosNYHwJLog3o2WNVbT17DX6E99Ues7miaPiMxQKjHqB782HKnKMYEs13Q4",
  "key30": "38ywtU5zvz7vJJfPcYtXu8sp8DyqpaSGBVA9mi1pTBcvU8rrF9RduzvEza41pQXw5XCHnTRQegyKcYWCVwh83bvY",
  "key31": "5r5ZjVg1Z93VRxbxeQVHQKKLJmaDqEkMfDumiLmr1GPvjGFYiwhSzBGk9Qfg3ynYkBcTcDGhz37ince69hpJ6cuX",
  "key32": "3438gLyuccKycsxMaKZ4drxMrhYYfH3ywQw2JijF5dmQDM2YFLdiL8A2835DEshT2LV5o7QE6REedZVvyc55vNo2",
  "key33": "4HVF3CNKj5bk2jmKMMrW2TqCBngCvc7o9Ekm6qqYJ2Jb8QRJDLFsUPedGcdC5CzAZJ3Vd1SCW4NwpLSh3FskayHC",
  "key34": "V4sph3aqWsvudEk65Ub2szzdekxEgdSr3PZrCJJ4jpsxFiQSoVGfiYaoUs8aw3qbB5dFY9mZtbbxAvzGzVjLqYr",
  "key35": "nqaMKTYzDNaLMG7CPr3vBDYN5jYf7hbJQCLEJTeGZu99zSvgKz5R4g24z4iS55Uz4x4KY6ft9MFMgr71VXAQFBs",
  "key36": "5b7DZQ28MpB3EZQUo8pyRZLqRkSsAnv2R87YybZMFV5FjLiFj95jU4QuMKNp6XUatqsS7JJPxLERrykznN6kdBkd",
  "key37": "BxkwVM43tjdEfd9uNgDEY4vQ6fwjoPHd2MtwYyqq9oKGegxVHGeFMn5Xn81TpZs4gQzFScPdx36u5EiyVrsPy7U",
  "key38": "3E6E4YJnV23i3qFsKRnz4eDv2gCPXdLme7Z8yToHNEq8ghWBx4C28AZ35Rg2oFAhSFJzeZXrja5dhZpTztkPjFjR",
  "key39": "48os4L24k3tRrtmPnaB3xaWVusGNEgKvnzhTJVc9itADi1qotbEcjLa5Zpc5Mvd96pMDbxUT9zdm6XeWW9gyj2KM",
  "key40": "5PX2n93S97oBabm1uvD9Zu5mqEYQacLEKeWVPhqvWaSgc9B6CDkZDuNWLkJ9WS1igh4NssoPDvQDtinGiFT7rs6d",
  "key41": "2BRLMm2YwAc6XPWq5u8NtFgWoVSHEbo2euP75Ej9pSrAxSYXJp3uqA2WRSv1JqT6jjFbT46o8G32eJfTj49bwzo7",
  "key42": "2AhK9A5pXmzrLg3kkbKPisnT5HQurcUaFZWVRsZrKxFDwGcidNn9X5U5jG8upNrxsNnZ2a5KhVdKrm54dTPkkgxX",
  "key43": "4WQoFpBBHCC3HQUQywyHUhxuWRxG3ApA9GbRF14BqhQCcWdp7amw38nGM1UJRmKxdivtek5k4fosuic8Jr7HwMKA",
  "key44": "kuzAKCQBnGAJ58xEc4xfaxAZbCj1QHoPX4SrteQdPegkMCfnj1SdcZ8hu66VFhLaaZKDEVCxq7wKHswfbhAt9KJ",
  "key45": "5McnpoFHwrzaZnbca6cxoc6DL6o4f4yBGPXYXHhRAQdCUxGFMtiJE7Jw7oRhEj9utGnjetXiyzrgtvuHBAYwJYxx",
  "key46": "BCHuaT1LFat31tjXPF7czXYc7HsNGmTaXm1mMfzmXRCe4w3rczwjFuaM1VJn8Fnh6n2RFKbpAJVyQakrKDioho9"
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
