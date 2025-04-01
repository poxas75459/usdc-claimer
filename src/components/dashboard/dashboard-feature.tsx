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
    "424r9aQs2jKL9ysv2jxGQPC4bTNKMnz6dkdRZgE6VJa7VR22FyoXpbhEEZqjyEUNPXyHU25fM5gh3vK8WpT1wcXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ymanF3GoHjEKLSa6Ji1vUf7rqWyKa7BcJHgHyNRMo7aa9GQJXfsHf9t2y2WzSRdvSANyV2FPVosQNbY9NFbnfb9",
  "key1": "5exwmxiXRCV5kSPtZu4H4adrhQMVWveqm8ytQnKY5HRgkhSCgrPiesLtj1TmVaP91YDzZ3NeWuQD3BnifhGQ9E8L",
  "key2": "2mzmFnxuyX7q5iuHGMrKQ4ezdZ5zReGfmXoH1ZYYBAvVW6hpVi8UN6f3UpwRnpUD1FWRUX7V76fRQC7Y5Q5gCjAQ",
  "key3": "4zGWgD1jb64fAhHeTz4EcUzg5oPT2Eh9jqmzty9cwD7tvKKbeG1RVKzgLBUqn9xFWNFYFtzKqT3RcxHQdBFMZ8sy",
  "key4": "4qsxFgJe4ExpngY2fMkarNStPgHhVTQRS8KDV8E1TcKJQGBoiBg335VmMLF6GLY9r7oDiEFfAFeeDtmRtqGusqP7",
  "key5": "4oeRz1JBSS93WY5ceFm6wLtF71UZkUXjv6dGCAwPSeGsgph35BpvjPECJxnBErD8PBCw8EXiyUM9toma59b6onvf",
  "key6": "ptxVP4QRChUgoBhWKhyx7br3aiXeXqy7LzpBa7aWRUYbSkTWmbH8auMswL1TmoMPrNw5x1kLWwcjTNNYQbnfuSP",
  "key7": "3vpy9n9E6zcnjQCgY91Svo6tPb5pj2mduez5UYKLFShoTah2GKQPJtMX7V7B1mGjWNpbEyLWv8Fji4tknix6puGc",
  "key8": "5of93wpipeYEhAcX6HZ5WtwaDMX9umYcKovt3Kb4n81G5JLJZnbVYPypT8XniMd96BHkVoDPKr3p7tSKQJjBbgev",
  "key9": "2WHtUbQ5vPo4y8UjAUEAMcLQ8HkstPqxMxLAf3JztWkxsStpz3PTfo5pwPJD1fjgZMDfoLjWxEqne5veUzQPKiKx",
  "key10": "5HnpHKBmw4vqrSNhzWZfuRK3eNR369EpcBm7QX5BYHhEFcfJutXTqyv9pf8zVDztwrLL8XQYueUBTR3wtK2kUB9E",
  "key11": "2W1dxoccfx4eYjcix5ccf6tt4fHoYRGXjZ3xxHYpsbLPofPfx1FhzQsKhLHTjqL7ZYxSJ1gtrKd2jB7DN1eamonH",
  "key12": "4dWVqvtKWvW956PxxKbmJaUWGj46vQpQprHegHe7uAURF8mz37PcJED2ABKZVL7BrStGAvr1ggNRwuKeRqUqFFxE",
  "key13": "2WS6rb5uWhDAuZ8JMAjNkXBQxk3UAaWoYwKBEr3J6JJkdcr5ZwUhPZQMoEg8Eh2SgwfxyyaSPZb5TUu7mLBwfwjG",
  "key14": "222iRnz5YWpDqMcySME3GcT3pziceHst1fhX8YWMUW3VvcEsHq2bANAyyCrwj3YWyAZWja8ELLuc6Du7ERg5cHep",
  "key15": "62Vsw9YhsBdZwdASG7E1K9FrxMeeJ24BLiuTNgheuqqKiXyUugX3ZRXrraD9CWRFmirVXj5kdv2RcB1MRNpUE6RU",
  "key16": "5ZUNApzjC6KRg99hjynaWRXGcnV3f1MrQku74txRrR7bns8GZTYeZCLqbZPqaT1MmE8qbzRydrYUt5R9YkoW83yF",
  "key17": "4BtbmSsTXSissdeDnCPZbWDq5rGtTRghVRUeY7p9A7QwQY2Pjow35jREvQkR9N93PLz2v9bM6qZaBt23tXmuVYYL",
  "key18": "223PcPhZWyhmPsYupPU8UJUmhjZoNbjLNAwUXnKqULZR5KfpwSLwGkcd6XnKffmmpUprzMyGPzpGBt7J3HyVA8jX",
  "key19": "5aqdsyisnvgzLx6u4jCpydwmHGDz3JCh4FDgo1To6dDiA4sn45sur6JdnocVniZRSmpAew9u6Y8Cq9pWkPCcc1MK",
  "key20": "5JnqC8iPSeCk3bve8BMQfKrmuz8An43QjevzCWhEwtCzBiR2T3oQHvvRqW3Xc1yNmmo2rcxZDTN2GTZU3Y6CA45e",
  "key21": "3NUKn8psZSU4kz6Rd6KtEMp6hCbduJM1M9qUSsKibaZbcoVd2VNF1fYhsx2snPaFViqudZvpQSdGrGZ4bWBvqBig",
  "key22": "2whkUG3M4LffGJ72e1t5BNyRwsMt1X56HJ4Ftbwuy1V31LXC3HmbmQEPRHJY2323hWqSNN1gvjNtjKDtxReRXten",
  "key23": "3VWu7YeoFcusNKudBufYpxnqxc8UzgC3MbvraHBGuT6K7LMehDVMUjT6uXDHYawFNE5fnk6m7FMt5f2eDRunDnyF",
  "key24": "497mySBMzNsGaCNMtqr1aNrD2FmNKHbEwDNiX2QPw3CoBY2Y437KwWN48oLcbppdFkDyteP8d4HoKqa8c36iUfs3",
  "key25": "XApfmY8awJBZqaNHKQ2mNdhLi1r3FRhPKGzZAtRtkg9NpHr7ot3VWJuCPB8uqDm9Ts79Wk5jJAFZTxkRTdKkv3u",
  "key26": "5GbJ5xohcoRCSJhknP6vPKrFVVeJyjPnjDDCM5W2n59yktUFN5UnMwH4SnCSKB1gHauYTaC1oYedVZJ451xAStjR",
  "key27": "3SecjWsQNTnVzNKk3sHBAXmxqYqAxbsJyfnotKU9Bk68g6eErCC1hjuAgcHMEwHaNqQmvC7aeZT7ErT4XKNSPEAq",
  "key28": "3BQu3pVKnh7gHeHUq7z4eWfx18jiQtNmmm5hN3ro7gSQRTz8E2Y2vxSvRyeFqAmyit7ym9Ao5Wi4T5q9YbRubwzN",
  "key29": "5xZhKqsK2pQCNgRA9Fyudg7xZNoG66wEbTaiHXXTtvibtLcheR1dqHKAcLVeVdxY4ne2ENfqvTmrm4ZxWLm7kXu",
  "key30": "3MuAFwkoYMpBUHFavNFgtKyYm5JHSLcEeTfrPtj89rEpvLFDVDRLhph8RKbWeyKKemK7gdKoN7aBzuviCTv4DjxF",
  "key31": "fahjydA951qSFbcghJScBWSgEn8Ps3nR34gNVLPjubHe2qZ9bUFXM83S3rRCSEmSxPtTxw5S23g9rJDFEVApKXG",
  "key32": "2nywdg2RA3DzCe2EddjBrs9Zex934cYXwy5bsyx3V4bpFfdSEnLCo8D5YCSkcdvDWzLdA36drzJaai8e81g3Kgbr",
  "key33": "uyLD5UnpX3mQV7gCj2sepT9jWQ75tx44DZwUspweto1uymaZrisZfimsTKrNYyRJdyGLxQ9kbx7Dnzh4xKgXXps",
  "key34": "5VXYC3uuwXMofA5AydNoLYht64jxEBzPFgUTgEERGkubZwbQshrwhpNVUE8TtD1ZbHXoibENpxBEUz7WGPf2cFv4",
  "key35": "X7TKDgLnvjtVpDyRMGxaTw8N4zTeNjMjssoP2HDgptna151PTrfLye9MNMWjk8NdNrURXdAoqmRZwQ7jy769VLd",
  "key36": "4cwX9a4Wr1NDMsFDkxDxCFeeBqSEzQ289enc8mEmttwJFNpdMUkRtnV6jn2Be6QfJFYnBVQtamPWS5TBJCfKH7Wy"
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
