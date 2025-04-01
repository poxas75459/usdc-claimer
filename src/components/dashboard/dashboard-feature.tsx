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
    "4m8kzWuKWECpPKyP5SkVYbQLNazCPZ6ZvAaqPTpWTYYa4LFRAJeZK8rtQ18jR8bVFJGHdLHQRMsJmqspnvexvEXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n2ndrZsVqcxBnK3mhqTpu4XZRBiniSjqkRQVVqwWbx9qDb8YKbUxGFtfFjzhYcPaXhZhmRMHvEoDGqKQXTGLaeX",
  "key1": "2PoUFd8e4kytckDuZf2EsHLg2jcuHHcdeJdJzp4fQAb7iyq2bMTA32vrwxEFgRwzN5bEaHdn1VupxYpeC8BHWi5B",
  "key2": "2xUTGwMMzDdDjyjLmv3nWeoAP7YSXenqDCCDwdackz5DYmEX798mxWqn6x99RpCo6ENgCum3xdSDHCi1YcQyrnbS",
  "key3": "3fyNJrVnnq9UPtHPGtdoZ2x5KxdEs6LqphKq7nQk3Y2U2aN3uuPVhV9HaPP1pvbvBmFtQRiw1rNm9XW29jnAwJ3p",
  "key4": "329AX95aMkQjCvTaE4LQd8TT8si3VZRu2SeQkeZDf2w6MffkJkdmuVdHnBWNdiKut3p1A7BVPCEdVujo2kq7RTZh",
  "key5": "gbeUKKBKZzvP21i6kircwC5TmQDU25hDw9YvW8rFM8jM7qM6dpRX3qLa8Xfd4Sn3QTUPq1nQc2TcckuGr4HRZ15",
  "key6": "uxBkYqr7MV2uBf7hqdJVzGmFqvQKEMcMJsdLrUXwnCT9CQuRt8Q89DusjQ3JuqVSWaR8DR3aN3Jg9K9i9qE5akS",
  "key7": "WYrB6r43vumYdH3btGH6B7w8V6379LRkE5cwM1Qe5jzMK2yAoWxVkFdFC9wE5jHNMRsxkfSUmr4qY515onNYLqa",
  "key8": "Z679tZrVXnfBd8gozio2soq8cLubuCkoobv5er2bftSDevZHeVRpo2kEbZK7dTUFouLTY538y6Ghdk5vRjgqpXY",
  "key9": "2XnucEiJk2xemF1mbZfseRbpG91AKgZ3RnSM8TLHooJnnqYax7iEob9A3yKk6RmD3te5seoatBGABH2n4Ny41mgi",
  "key10": "2iAX1hT3ajzUBKpV2RYBBXWSsvRNGG689KwBKM9GE3aRnjCLE8PepwqTG4q1UkqzjW88GPYuP2Vro1kzhwAqZDiW",
  "key11": "5NYx94Ycc9GQMmzkY2p2z9qtKzaRnRCUGYP4J4vnYG2x3cGMrSGQAkMXtxtnP4U74JyEdzGbnindiKxMs6GvkrEa",
  "key12": "55kiQu6R2f1TRzWPKMJKGaRaXH9WjLVvS1npRDLa1nCkCZ2YhB8v8acgTphJizYqVKdvEiNsE3diEX1VoMpV3oSE",
  "key13": "2U8P9DHdDTqzALvy2eJw3q5swx6WE47Ve1cdTEDV7Y2oQXJXL8GS7ivWGsre6sDVBKwr53bgsdK51FnKrMDe2hTE",
  "key14": "E77LdexEUYRJFt84AFUBQy386NWjfnVp5h3twzhSwDzfUJh7BWz6J23ZqJ5Z4WaKPNyVo47xbxoi1DZK8t4Hyvt",
  "key15": "3nNtb27Y4MaJpp5QjtfXEwzhgYs259XsR5bWyFofbhCEhoh4mhjd8BrwxCsyNLPnconYfVygxKon8SWxsjj39Vv2",
  "key16": "21RFQHNSR42eD7q15gJUkwNq81J8JSfoSZowFnaCnHKQJ2dTRGJao6i6UwME8jCbsMn2ywFPaJbqqCw6FURodLzE",
  "key17": "2ESm2xDKkqbmfNEkn5FXhjF1JFhFZ5qyTsAdGSXuGhPMFPa7H4A5t6jk3x16JM7drgsn3CKTKWXPtSJN4bmiDi73",
  "key18": "4LepKR5WJdiXnrNufWgUsqGHrmHqeNR2jQfR7c8QPJkoH4aiNks9mFjjqj1n2yYfUvuDyDUeku5abEhV5FX46mhw",
  "key19": "vqnMXaopSu54LhYnZnvpYAsmNJ8BXhsrfNUAAxjZXRoCaXJbgWQ6QsZbJZLpKF1fWGQW5fZ1Ry7ptKHG7cqyHrZ",
  "key20": "5Jgyry3jzQmSw2VCrCWhAmGvRTt7J5KT4uSrDZx2ThjybL4ErFus53TyhrUxwTtcThauUVkAea58e37QToAgnPU7",
  "key21": "2PKy1X1sacBAkMAt7fwB9ooyoqzhHjm5V7j8HECKdM9wp6RRZVg28Rhem8s9npkbf5hLpZaiCXQkL6sW92YbjUaN",
  "key22": "4Z3EUPnEXLguZJzo2rE4snjhJTEKvorDhVFGbpbumVnKzGJYAr75mG8F1SnshpZYPcAXr16QGtumZVnsei5HQFDR",
  "key23": "JbVWGNU7HFnBX65t6mdQgNKMCcVWi8cMpszTSynXmmXDF7eUy6PL1p5XLKfKxFz1JMJuxYNcP9JD5v1LirsSBCV",
  "key24": "22ffauRB7wLescbhqcsZBfLAkqr2MMYNYZ31X4xXJNLzLP6DLTC7YVyPEsfne5S7kKw9bsF12eMNdHtiejSe22Jw",
  "key25": "mqvZeqHkpFoKVUZPsM1oUyvjKbXKt1tJKeWAXZaCuNsrigTdiJQrdVEeSvezsubH5uRaxFkAbofY72srf3KGiSV",
  "key26": "3sq48vMaHJ6PaE5QPraCXnGqrA9ew7pM6udiMz3Y4Wn8SZo5tHMwRomFnC419Q5nMchkmD7SKaYMGkQEbCuGcNcL",
  "key27": "3AG1WELw3fz26khD7fuPZHLCT5d9kkYzcahvTX4FnQtRTMvk83Qv7TTCyxDJTC1J7M9DFLkisvyCgNLetLMukbbH",
  "key28": "55skDLJkjuoVzycYBFquNf6gUP3MQGaJpcfgua7kuPosj5QsGCffvCNoxsqX2ifpxkVXQ6teWkwRCzW8HDKQmy3F",
  "key29": "4EFfY5yzKbee2DfhoiU1KfXGCcMFQbasPHRtBhRyHpgAphNGP62ZBWeyDzyLZsXcMj3CKo7M8q8Ue1qciwAWfeAX",
  "key30": "5RGK3yQS4yptETgc2Dp4XqjSgsooEBSMbtPfK6yGEZu2YE57tNCxNLyzef81wJsUx8RxHRKWLQ6gBEUr2i7LnNtT",
  "key31": "4DRbwJKYgAUm1Pxtt36wtA4DnNXBNKYuXRYKz4ng89hXXLgUiQWodAwe1nnZf6GodeUdJ2kF49PnThRxLPDrKvJm",
  "key32": "2kUpbFJUDVHNodMQL9Hzxp52LaMe7VbqGakfBgjVysiDBWd9iEDRSwefHtCaHmBvLV4Y4fPbcKrcN1UsS2YyL5Hz",
  "key33": "2CwfEuxehkQoTy5sZQumchWb1PbkuCVgu2mMy1TpQcWeXMbD5fN6a6ScTZuKms9LnRktVDujTR5XHn5MLXGKs5tT",
  "key34": "3TFezx8WkU8KTD7e6GpphVgNBwU7A3eYv6Vz7ATz52gvYeE9uTvsU3UKzRgFJCgTMRbHvczteh2kzU4jVtxTUfkQ",
  "key35": "3ZMzAJgn3RTXWG2KL7JWAyfEMw7T3AzyKR28XsULFvBiqPtDgsFvfLkCJ1U4XQUe6Y8HkYDuxgHmERFHmsyzwqhq",
  "key36": "4wMLHKy8G6KFBPZVpdZGhT1tuvo4vxuPKvH6rV1b4TbaQEypV8bPvNPqF3TmpZG6Q7cCHaSewCv6R9VsTVHNx3fz",
  "key37": "2YSMKFLWYE89AoYfqPTmH5CxPfWgDcqGPoGMM3NRQfh7x259ikpUVpdQj8UoEiVdG4yBRU8CQPE8h9Ctjke7JpUL",
  "key38": "4vPZJ3tyB7pxsCNhtYMP3cXt5PL37dTCoud2TDu96CKrDo9oo84CfC49tQQBtFe18GBC9vZmWV3VUFcY31rtjPds",
  "key39": "qmXVEck1E3UvaxyRbyvepRdPPBMAZ2RtM87hGWb8L7xdqQfw6MmY312N2Xr194DuDuMsD4BNSkjpamcZTozQeZE",
  "key40": "JLRm5MMS3BgQs3x4VmXY4C5Spx1v31nkCXtM6NTNr6gwJgGfr4Dh1Qa7fcaBuafQQrG7J8MopvCB8vC69yFo3U9",
  "key41": "4kiE51Xc2uKNkp9jcKb8rb4RqCiNCkeuEpkZzu9MQoK7Xavpk36NP5ePmT26XQaEZaRCzkEzYm1KoGsDpMNoAHKF"
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
