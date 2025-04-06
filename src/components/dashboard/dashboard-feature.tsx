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
    "3qaPPPiEvnuyZdxEXUFrfTQKZzWGsZ1uJqzYEZvjprH6Xu7bR9BJTTCDfTvqqH6pUkqYHgVryDbnfTsYC5vtHq81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XGM6yBBgsu9Z321hGchPw6gBqFn4gyPiieAQCewdTC87RaSBRJmFx6U3LM42HVafG3a3MZUF1qCGoeoCQcBubdU",
  "key1": "g4WvbRPQd6XftJ6s6yysNHVQ4Fycczz1P3J4kqfjszY7D6qGC2VALU79vYr1x8FZ9dsT6AteE5Pk6a4Fws5AdYT",
  "key2": "3XBiJnJ5aMcBj6k6SRCmA2oB9WAZ6LuZDxxLvWk998oYayY9jMZz6bUZTEbZnoxaha7FdrZ3PXR4hSCYDrvKapU2",
  "key3": "23GzBoFs9LLWAGByS4dtvvXYRtmZvD26o5wnN6e9AEiqQeARVzwhp5oRowedJAiXHiThpkPogZNmofd4f3EPaaTS",
  "key4": "5H35gZi9S58GYsUk3FSX71a6npGyzPbyBmbjSCXjGvmcG1ioGHUVKdt3UoieiycDE4Gru3wev8SYSyBAhUxtsT3",
  "key5": "46ggsCtu6P2Ur1ttfDNXQHqj6ZuZhPVJ4p6m8QZwAw3cetpN46Zs5ukTNNLR75eBXzBAh2kCKdXpE9YidoCQxcfi",
  "key6": "5NYtE3Zr1uqWUz6Y86CocP8m8grwpLbs4ihyKe6BobHre5pbWg2ngbyftb2UmFKhrj122Q3yM4vEZSXnYxDdXoh7",
  "key7": "5ZdWEd2bUnoeTkT55P1496cLBASRFUKrHFDVkkKCtPQ1z8qCk2yCGQ1G923gaFKLXoDQ94CrSsKdcdLqnsgrA87x",
  "key8": "5dnwoaXgQgPDg4HbiF5t118KkfF7FfRxRus5y1XwVRB24AVj4NrriraxakDZbZnmfbdmF7D2eS6LjFDTTGxVawW8",
  "key9": "RvFduAa7PWp3Do6mm86B5Y94xKJ9keKJMGpEwP1Z2XZLjexRso6FYqACLTDh8kvdM6VFvkp2z6qJwUgFaCMhJyW",
  "key10": "5pvGz7YxyDHshQx7ur4w7d5uzF4igtd11rbUWj1NbkwY72BRXDZCs9EL9EyRrvkMpqoqj4j2quQUFbYFdKzckPY",
  "key11": "4s25cfye2qG7iqr5pn9TvrU63h9FLW7SuFYKKwhrV1VJ23PD6Gok6W8VrQzSrJJckSKZHi658uECcNP9eYNGFKB1",
  "key12": "5ezeKoNddWPdDZGzfnbEAU5RRapvjUAvoYprVfsnoH2bQfwZ8siAFTQTAngMBwmSD8mqc3w91dBGfer565eGEvE3",
  "key13": "bSszxM3LSs69HYSE3ZyepqPvqfGxsoASD3CGE2m6rW2FNX1eKR65pvqD5k982ixtv37s9dFz6PEsLDVMfaZAcob",
  "key14": "34yAGwivX8Qid5r1k1qiR3p1gCRef5hindzU5HF54yLvgP4o1YzrXN7sweem7oBbEqsv7HpFVooaPfYfr2Fgj66n",
  "key15": "3bmxQLAqQUJD4oKWgdKZ6scGgRm6NVHx7YmTB5AFjCRmc89uomap3V6ErgfMxLLWGc3nKhjPdWpXRoaYXYRWhceZ",
  "key16": "SAaTViW4sMpXVoLWLQPhX62gJGKtJ6iMKec5udALf1fEhgxJTf7v512FhS3kpmKKSPEKnWqnPvuxc6WixEnpgcQ",
  "key17": "ntu2U2Lh4WHLDrSwpj8VbghXMFCeqU4Pr7HxdzH2airLjtCykCcXbF4Bgfmqq45UzhwS7jvjui16MUNFB3MmWtR",
  "key18": "gWq22T6bZA8JYoftJoCwdKYwYw2Yhu7dj7tMW4cw8w4jjsoEMY4zEP13eEWociwUPofac2dXYUujQCiGGYQpd1f",
  "key19": "2jZmbPMkYoHMEpwPW7BVJk28yBfjWxrRW137DuGLN9KLxp12w1mCTNKyNffLkiM9rtDD1ZCDyPcwjAAKotYH7qLq",
  "key20": "3sZGPkuRNzRQBSjmiJsPU1ewSAk5uCUXpg8DFsnRxXJ6DLVWFp9voWmr1EgDwqarnuq614Qs8VcWoMDKnTdhn8F5",
  "key21": "4ThvqsTfigNSAjiHf8GpcTJrD7iKnErVV6EvQpw6XzmNkFzewAPebJ2tUv1jmhPpM36GoVUENSCRDvPfhWGPRgFG",
  "key22": "5ZFPxbjhD9UjdbcBVMbL6HnQL5Bgn4EGxWrppguhSc5hAkbeQ93hpQU9NCGhiNny2sEgvn4155y2PcTqaSwW1Tpt",
  "key23": "2CmAhwoQbvYskzhsUJB31WjGSKG2MndziDeSaRg9toXGAU25hSnBAvWgx4b133muGSFTpXLgwxMdKScf6yGMyD4p",
  "key24": "2qZ43hvDnCvRW657QLyRH5SFJN6s9paWa2dSJoBvvYYzuHcwidMzZMejb75ArC472drtmiMfS9Q92pbXgG5KPQC6",
  "key25": "3jue5dmfMGRmF3gWU8LwK3wLoMjtv4aPUmNhq7JY8a5yf5suNEF3bo7ktH8dBPwPZEzxRmBkkTUGstWRKDEPbfee",
  "key26": "ZKW7sER6g6KxYmnh6sVDxotVMFGQvg88jj1TfQukfbkPtCCmBaifHcsJ7f2PVwsrw17pvwbdW8oqLCSApBrHYCZ",
  "key27": "ZMphYzTJsC65rYySKjxuLHpV27RHeFRZvHKRYeQYMAFoG8MzGXYD7vrtzypu1F6qqewMdFQoGsmpnkCx8VKt2oe",
  "key28": "1DNeKgx77e5Nn7Rp46d5tKqXu8rMn7zyPJHmGUoDFgGQKDKwCDM5dyXrD8nRefgMyGofsa9piDmQ7rGrS3gVY5r",
  "key29": "4Mii5uSVerJv6aKGNPecHVsYoQ7irxEANTCSQfFdhJ9bVoBVeNXgnt9RPwLFMmWUNrFkW43riN9pjnyh3VQy9TmM",
  "key30": "3AiFcANYxG3Lduf6FrZnSGRXHQzv3fFbrdZndzVhkDDiijAyu4VyEbRdmvwFq36G5EiMU5aj4S6bBrKanRWgi8n6",
  "key31": "52kgZ1vY55X3b8KEVrp4iTtgKSXfMgCGj49GHZemfGK3Kv1MVXHreobZeWvtnqrPZsKzpVdTuWeUdiWHfxi8xgRF",
  "key32": "5N1amacLwUEs9D2bktaMWQvdQpKCrEEMcUVmcQchh7QnbmpnxoUrRafwezuAFocjvcH2eF4x7y62RfiA8LdpEaCg",
  "key33": "5Wqqs1T7Faii77Sgo8Kuda15qimKaTJQVk6qscWSSGKkQVXXXb9kh36xXDdRwwbiuyfqcogdQzpejpHgWqFn71y6",
  "key34": "3NfvYRhP2skDowoRjDYGYiktFwPWgzc8d3MacB1v7sKZbpd1v6rscAZXXdCZJToSdTWB3acBm2U6WUJoTVHKx7NH",
  "key35": "xwmuUfdNTUYfscsWc2gBAGk5n8dyyoPtCRP5bTRwwMMMXvBhTesHsF7JbEX3N5kP9Nz2T6yNqsSakHYUozMbgoT",
  "key36": "596YmTtWajN3D57Se7rBjgJRMrAmRZ42fhG7xQef2Czur7ghPpNKUZPqBhcXiXCZkjvdrwTQaN4unAM6vnjvjbee",
  "key37": "2pYsJfM6yJ6hbMiv1ipR9UvXUCn4hNUEGA5VmGHvAE3zjdT4F2io8ZyqcepF4iTLhFCziz8YFbnScUE6wMBPSWeu",
  "key38": "2EaRARdEhcDNKSrNSspUnSE8PMWiVjgyvTdsA5tdZiaPfboxwDqXFKxFZzTYGCNmQEUKJzVgKzaPZhsvgAYitNu5",
  "key39": "4dypffsrUSfciehGUNABPQ1XJLM5c3d2vArny5JroFBzqH3rebKpYfPVkQQdH6UCC7PsnmnCdRhBz6nmBoN4bwbu"
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
