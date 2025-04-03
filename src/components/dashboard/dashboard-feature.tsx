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
    "2Nd6aRKwSMCFkC9QaSDEBJVN1nqK4JHCZg3dG9DQpGzR8HaGqV7CRtd7MpNvAN14UVTGanogKNMVuf2i3wMAsGMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SQLXUyECy11drSaoRv3tq3PNJ5bJPFeLmjeK5rvfEpTD7UQR6LMjyBrYYKmTo7xx7kPP9KptTUvGM7ika2c7Bkw",
  "key1": "4hKtR9A5Nu8uTtynCz2zPZSxnV2gJVUJm3aPk4SZt4ghFiWWsMtfFDoUncizDhEuLkJMeDhSmkSekaS7QxeKiXeq",
  "key2": "j1wwGjbyLWSZ5BKBuX4tuzkqda2H7V6EAt3iw93iVfo44SufGwjUTGJFQakjR6y9TT9cEq4gWMJfkXGQxhw48WX",
  "key3": "5rM2QvM9AMxG3wV1C6GZxEEppC4ZmfT9o4bQV1HusYg1geG12fzYs7hLfW3HSH7bdg31WhRrkv2vQ4WMhy7VRidC",
  "key4": "jeZWf4gyzLgARb9ruRUb73ETXY4a68XBcRLfg7gMJ1Xa5DXb2Zh8qiHNbzNqzqjZWSy5HKpgM38GzT7q67hRR9v",
  "key5": "5vhYxxYFAeVJHL9AT4NmzGHoaMN2PcxVXCVpmtv9K1wPouzoqwteMYBM4b9bXWusKQm2WKs7HxLAdSgzXWNomFqX",
  "key6": "3q3h7G83fDqQDCu6un7voawvKwoq5PvoH751WGkvSkyCXx1f72uyaSn1tuzWYgEjeRVTxP3rprwLgrQwQXpeESm2",
  "key7": "2HEs2B8QQ7tWqiSmA1bXRx3UfJ8RPaNJaEpVEDXpaa28fC4ACXtqdncyYWT8pfGDiJBmZuMWqSMigtbFyJDX2oyo",
  "key8": "3g4Wjo4HgqgFJMCmCvshoeN6B7cufuSW5j36Vvx54K2Zs45QXMZBSeQGMMkk4FnWpiBhLnwcbW8j7JEpWtU5xV6z",
  "key9": "3nDGJNkce2cjPB5j1LTS1LcSPcCGAticF2MQDEHCpb3HhqX7EuabSWGXiUVV6WcfeRNiUwRYKMDt3QvN6DjRpzU",
  "key10": "3TxDPQ7JkXyvHedp23NFuK9NXAsupfeZvAR5sJPoPjeU3FWiTTXBfVcxK2W33gmiV9rDvPaJCjgFPiUJHLdkK8P7",
  "key11": "4GmrCgcfqzjhMgL9eUGYnJqDyZipeQmDSbstPW7SgdFQLXfSqCFh1dgHxqWhRQ2pCS2wJL8nsoBoZhwEpYRudzUB",
  "key12": "1LkSDXGtDaiZHSt1Ns3MQ95hAu3M9XXME3e8zafKsTgatMb3b3jRBx4F2McH5dF7kwfhEuTtafpGXgzxkVqx991",
  "key13": "5DTfD7uK3dLTrEQBvRXX427uRZbDAPxqsdQPgmFTppfh3Xg52nRFRoaHHbSBPir64vVvijPGBEqkCnJMGeTkYBWw",
  "key14": "2JcZAvXvxcn6j7MsEht4xWnBCi86FVuorph1TBP453QHRc2TRiiohu51GfWTg6EzF7D2h3QKbfkToncUfg7hD3ZQ",
  "key15": "5dva4LPQ7dTTVMRmjxTmNzbYd9s8FqgnCS4oW9BkpPMRGMDgNnG8rZRcpnUmifNtNCWzjTQfGZEM9Gw5XYUxie9Z",
  "key16": "579iYL3YLdpqJpBqJAiKMfyUuQVMbGb2H1zrMtFTmZqMB33XNntXZLHrfrznay2tP7tQwX9x54Gf2kTjPErGTBcd",
  "key17": "dcUDjygAtRXTZmdeXbu732KW1nwFuSVrUpFVXDqo97ogtLb6TzWd7Z4H7tEgvqw2gJyXPzSAQWQFFUVTZgKggJZ",
  "key18": "CMC7WCzEW57Yje151zyEEmyFodPGDKpGnXBcdmsazMFSTyuBo9cGF9mhq15cWfWEnTfASxe9JTiAxKSqKHb7sVG",
  "key19": "4eX1xK1PupmmYGmndWzpzAD59LjoJxoiutmS3ih1CeutmLqpQcyGHgKFThnwEQDGiHjLgQoccy8S6Fv8RWMsNaGf",
  "key20": "bRSDVuFkdyf48xkyVyo1qischNhGKx8pifbtfQ9Eo3DbupEzyJZ3FWTFJbGXdLVs31F3DNzBbfF6CVNDbnbfnM4",
  "key21": "atThAvwBBUHApa8wsXijp5tGnPzH36bKVUFvp3t1by1rYmsbhuP7bya2M2rGsRSeHUDCewPF328AZdkTpynyatt",
  "key22": "3p55xHMjUH3KvPqYUNFVyKayCrjmdgeACH4QFq3LN7k5TkiUWBR2MLLTTJ1AQHsrudjW7JUYdC9exv87nRYyv8p",
  "key23": "iaaiiG8PCqb56C1uvdM2w1EPMaDMVq9t8gqRBCGYMwCv7C7yLK4zU4ttd4Xhf4EHJEKwqkB6vhP4tpyW9ENQm3Y",
  "key24": "qjHbeFj1tBq1y4V5uUz8YP6SWFtbCNHPzegE1QRgpVHc1pdhrqkPRezr9xbNJvnz3fochmM2zpe2ktDkun6aWLb",
  "key25": "np2nkVyN6BBQ2a7yvq2n88v31CW566Kv2VCTV2xwSuMypnfDmSZLF4GL4vTpatcXKiDwZiJNvZmaLCuZBqDJ8kr",
  "key26": "4eSGZcu353zMS918abZJbsoEsXdy9JevWQVhghPVAHTNeeoXdATbLCwU6qtKznBwj8zuEuq4RMFHnVKoXJsdxtB5",
  "key27": "42h8r6R2vfT1naqvjQmAaKYSonA2T1GTfxwRwH7ojbXqrXeUWzMTdNPjHe3JPQCqEvoBqiGqP5BKj6WqbDkGz4wz",
  "key28": "2ruwHAiwh5BFUq8dYEAodsjKzS86tzwA4NYw9n6mXDcHjA9T2qZD46VFXtWicArGEG2zovjhLMVTAPomtNNGAVyB",
  "key29": "5jeZyLThiJ3DxcTeGTgMQRmEWojqJs9Nkq3KF1LG7YSRgbKRbaaosXKEQr38YGiB85LDrT76k9eUstLJv7GRxPuv",
  "key30": "2sSMtBwv6pjCiw1e6aZhcbqqF26KAmidgtYhsZzvjgsG8fdYdZhMS48wgQsvSbUcAmgaz2ckEkBN5jHLvycUBPmU",
  "key31": "3oKTKFP7BVxzxS6pkf4R4z6gU9fBsHCRnASqCn7RqqhoQNQDiLCE7e4Dx9EzCqn3SBGzFXpwsQCALX6ZzQWHuGLS",
  "key32": "vNzaYpoerBEHPTRE81xkGCQtKGtwM5te5McHLhDmxRGz4Sr5xhJAa8vY5VfcVDo7MGbTAFPiz4eRLmuyFPX3kyZ",
  "key33": "25pXWRF98fnc9Qg8hmyzoML3gp4haTWQ8CdVWqG6DtYQrLBdM32BL3PjVQ8BjJwh5GRbBUPhSt8t7vvwibK1wZ3N",
  "key34": "2Rb1DymLKt4NAPgfbBLyNy7SmsVVpAkYUvFXPsGTV3Qu9HqCZDwUq2YFDENgoR9yztfpcVopfkzzREymPyGbFg9r",
  "key35": "4cpGig1qpE3spDjNYa8FuZZX3e5QWKaM9gSFxAdhkAizCb16d5cJtYrJGFGoi8t2LiLZAWy3rDKYfXWyscJmAyEW",
  "key36": "3ZGF1kfXMpS6pSLT1eorQunq9vybZVUg5sSwaRGdGM4aXzahpYjACLPVSDXTAkhA15hDUWQCaCBy663C5rTp4WvA",
  "key37": "CVWBYweBkncZS43EcwVrnUrCog5Stes8gZtz3VPEvgRxgg76keLHTE7urxavaVaSfmLkyUSGfLNSAXWje6r5jzc"
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
