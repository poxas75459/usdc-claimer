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
    "5fVgtjq33YDV1aKy85gRJmEr57bZkvN4CFno1dH3zQySeBWJM2ZnPTfmmcfZLgU1Pkzb2soYVAJ2NsK36mmAb2mM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xq37q3BVFHhPocFqEog9L1aCLudqe2UUikwbLjusuMLiLhA1AZPXQYkLKukCifTXxMYdHBTbChwLGhfysDVbtYR",
  "key1": "3tNSkByhtcBLvJS9dHwT3PeBaQWfSJwV81nu5s1Sj2GFYUCSQY8RdtXG2gr3Q4DuHYmkNAMwaB65dG6GHJi3WjYp",
  "key2": "56XkcqDYinEfZmNePaAWoP3sLoQkhit4UpuVEvrMSn54ZZ9cmSEQwnMSJQs4Wq5SjxoP7qaErNeJkSB4XcGzN81W",
  "key3": "3g1w2EjZdRbvkLNR8cjT1ximHESZn8p1bZY8bQYZ913Xkd8hunJqLRo8jrmHiCYRaR3mdgvKCouG2KnW23v1gncL",
  "key4": "5j13tGbXNK25sxyPqYoiXWuCFE7tnLwKXKQiEMt1ZbsbfuPq4BwUhPwXhKANEEKowzEd6a3CGpMypBhcMM7rrcRw",
  "key5": "43DJA4DYn7dyaAF8XwK4yv1YbM5svbUzyunv6xDkYzEpqUhEnwyBK7sk6c6oYwFy8jgpq556GJ1hSNMzQbZJU422",
  "key6": "568U8NfuhARj9Z3pSy3yDtiiEAQBiVc5ykAhcDaVwk7fPnLoNGbCPwm7fbaoBgCRFjwifcBJeZrnXwLti5HNBG75",
  "key7": "4269UvTS9SAY5Sj7Mp8Eqa1HreLDnicXM8JKRoPXiTiz8E12qf3pSdXtKWXxuDQrXip1q7yu7BSA5VfY2ex5EWip",
  "key8": "5WmKWeCSTvforUkeBw2PQkyHecSFbFn7DvXCTsXRc8uyZjm5zK8wsjtivxAnqUVwuYNq5KChY3zdhyRPYBEuTyJG",
  "key9": "5RgXKU15i8BCx4CUqwKEDH5E2LPNuFCy1N9JdLvoW9g59xL1KZKKeJQrZdPFJNDFK399FQHLKL7s3BCaaE7ymFTU",
  "key10": "4zsgVp66fCFtVzpRy7SJBMtSVoCgTWGKBgmNhk68rTbRtwaKJnPUV7d89wyesqJWah7LzthjPJNhvaoDwBaTymTN",
  "key11": "RWAr3wdt7yEiVA95hbomhGd4h1nouNYBdvMcRhPZ2rKR53amBvAswVfkkbosDbdohJjYBEGPwSd1LTyFhNWq6KY",
  "key12": "4Padmf4gCPsepVtmfPuUDviELjyrA8QdenkxSE1Q6tkAgqsqQF5CzLDXEdDTmf1s71TNXzaUFfLnCKtnHrpfVwpa",
  "key13": "2W9RgUmhWJ8p28bE85xobyobaUMmwH1LsXpW6f9K5iVxxcGmhtn2q1sbX7zLaLmAHuZzu8ufBTqwNtrhPAzD7VKj",
  "key14": "yiUZkZzCL9rmrRWx5WDjztZyd32zqXz3GJV5yLWQuvLsdDXrHmj1HxXwbRfVsUYtVagE9dqVVndnCCVP4sUhF9K",
  "key15": "5iCqdd9LR4c4YXgdo3jKXgqAHqeP1oS379JPJsfjcnhML3onctGpuVrDNLR9Q4TPNXum9R7DQRXNKp5eY67K8pJB",
  "key16": "99Z2VV3F9hDn9LPFm1hsP2vBeWg4az6QPLiSihKsmHy3Mqdg75onD8vRQrbdxyhuAPhntzvZ21q8gv4kpzdZV5u",
  "key17": "5Nm9sx7nfFfUdNjsyy3cAdwyACrRW2rwF2uY3T8WubLSSWZtzzhZ11S8EPHCk5khM6q6vjLffh7hDqoJYhPPy7V",
  "key18": "2rGNaXMLkE1BQQ54mtzhUVT1mRAvoLmUPdoNGY6GWyivogvwSC2hRbP6cgw2fVz8ma3oHjc6tZ1yDTNSRKmuj62Q",
  "key19": "3j3uow1Gv6G5BwFmkRTVQnwMoFN9YR2R3NzkBUa1fApMaFvXoi6WNhK76ibgwFnUXr8GoXP7zdjb6TYu5QtaArf7",
  "key20": "3Q51EtMec9Ma1YxH9fja4PBwDDVJZsrLhJzMfRQWUiq5XR24BrrwHycgDkuYqD2vjXJ16B8sADiryK5VnmvRVG1d",
  "key21": "qEa4epfTcw8ZkjeDRS9AQwa4UNidAH97izXuAFhcgusWDBQM7wK3RQcjKKLov19oqJyzfjwdHaSunpw32FxaQpS",
  "key22": "nJz44m1GqHs9tsPXTekzpwHstc9oYBNbVKG4sqBEd2BN41keDxVYt4T2U2mwVFKX9JYKu5KT2J63kU4PwGv1MNM",
  "key23": "2ubkDCYLsAVsyykyvcoRGDz29ucJocMbMFTshJQwYvahDh1yo6SajS7F6huMvxkLFay4CLbif9UbBt3NEcjpbX2D",
  "key24": "2b5TFxZjMX7ULbnJZW78CWaWi8hRNkd7FQvAU6KqgyrZZZ1ccAW33kApjobXya3Ffj48Kcbjskzekg4nQeqRbi5u",
  "key25": "361Co2fXs3FXU9tcSdMvMGKN2Qbtf7PhuCJzMfZReyvqUGs2LbYzCmzPojAygC5AYzpQy1mFfuiqEeVuD57cGQyN",
  "key26": "2odJEmhhChUUFWueS95RMJYtB9sNdC4VG2p6ak7MCMcWtm5wpC4U1hpEAjvewG3N9phmNrspWU4BAavUEYGxe69R",
  "key27": "58bBH6KU5hCZudfhwKG9qNHsbudxXSXnUz3q3CiisCFQ69FVJt3QLBkB3BnbkqAyhPBQbYwtQCgQsc5HfSJo7bet",
  "key28": "3uCtTqXVt8fhaMQjNhH19ssYCM5EzudyQ5rE7Pfmq61CZzoF2USn1J6v3eidNNMfFLEZrLvJu6va3ZJhr36UMArY"
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
