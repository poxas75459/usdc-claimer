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
    "cQStEYZFZEhGkvUWbB8mejBh6ujnPsehL9uZs7kYLdJykkB7KCajZa6G8rmYVHdicC81X6U656nWyFA3QtfuBb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qCQKYjUkaCGJqyP56z4AVpChoNhfiXLFdejxTd9A7WhAQ2kEzYe4Sg7NbMPbsHbyTHANDnC3WxF71bNvZCKJehk",
  "key1": "ui3LutGZ4E7oKQSXfPGnBh1cUv64ccGE5WV4j3zGoGvR3G3sY2JZw2UtV7r8qAAftLTYD4zH1MyjWyugB5vg2dz",
  "key2": "56wxtMAjr1X71sptgnAmKfTqK88s2WWibWFM38DUFe2HhPDVVUfMafwwf5hUSqsCpz4khfo7xzDFLwvw9Wx17tBx",
  "key3": "2KqtC6RAe19hXASFhuEtZNdHayp61TgCkKJVxXUkTdxHDJPkCVmUkdiEmAmDv8dqR7YCqpWuAeu1LK4LCJMzFfSw",
  "key4": "4NNiGfmK4pMCDdGZTdNXcNjcKa5CmJqWA1kJyAYQFVQccmsvSfGTiRoAxzucei6zLDrqQUk3YqQZ7x1AzxKfVQmb",
  "key5": "4qdazoX43PtaM7SWKVWZxkbi2FA5wzEusSJLUhVxU6SEpvQC6mA45pziXCudH4seLFcQg3QfYwEBo5UtVYrqBWYD",
  "key6": "2yP6nvB9kHbEPAbkd4wQnJWuZg41kFR8dhTQ9Nkdzq4d163PoSSMxPpWn4wHvCZZCEFmh7hD9p9apmEwquKbbcDk",
  "key7": "2qwRcnyzDuCmYN9ZKwH1YjrcvD8o88u6qFjX4Mi86PxT3EL8os2hwt2BV2QbVVZGBDtF14TfS7MAKKcfnjmWoNGY",
  "key8": "62dXVEAhZxTq866DBBaooY6rCqWkFbZwyS7jjYZ5vdLyRhaneZGVZkyA118p8T7LtF4k5rQDFqj8zDgKj9HwKTac",
  "key9": "1AsNcdQctcdfVMgsx3kiVna6coisJ1nFmKpkv9QRvForsc5uVUHEddtxRMmn5cSAw4opPdGgjQNufCYxzDivQQo",
  "key10": "5EouGfiaf77NL6SCEsvjdsNYsf2LRGLkkMCyiDiRJowuWXfii2E3JhVn4oo5u93U3jdthueqwbg9HXwYQdwLdjDo",
  "key11": "4AvpDBEGHpu7gjijFurMZ4JmgoPJ1xb5bXrAJx4L8dW85U3ZuVud8cXRUiRbogacUWfEaocYFXAyz7QM4BFnBftC",
  "key12": "2PHs5qcav6FoymZCC5DWQpnAVDErjq4Avss9ej2nu6VtTsZpuJmgjZshhAtDKKUAXakHpB3wSfcokGV1L8v8Mkix",
  "key13": "4mwW8JutUs58sGpxAUFPQPCjwUp2MHcv3pWYJqGWgdywxU9jJhce8oAPK8ZuiVL8nBazkbeZga4zQJiaC8WbNjak",
  "key14": "5wRaZL7rPL8g1Z7hhLR8xSKPANiJg6dkAfVDSfecqfnU2w56d6Uuug8mpVoEMCaTzXRCc6cnHoE3G1bZFV6GLiih",
  "key15": "5uvZspBSJk7Z7r3ZHbHckw42qRSGiVz7hpVw24jUYxaWeJdQRiq1TR5Yx4ms3DFWmk9fRSVY2oZsm7HLr3YjFGPX",
  "key16": "2CPsKcuMwY5WAB3raufY791R5hi4Bd7GgASALt9QFWRKZEQCPn6o92EBtqhiuR7oV2mfxnF9JQZbsLxranNms6NJ",
  "key17": "5Lpc762gFVvXMGZFVtL1iAxXgLZErqNCW9qUG4qQMqor4nJ6AF6ifS3aNLtZxspxk5NzUyeDujvdW5FSMmyRxk7J",
  "key18": "3cJZi2bk1GB2V9qd9CHw1aPyp4iFR4wSSQhzTa4N9qZggTvhxcyVeDB5MhNwWkkxWzYQt1jew4TCnL3aiL4bZAt9",
  "key19": "5fgocoiBGwB59ba7LvqYxVQ1XXkQQe1ePwyaB2iB3thZn6F6YMCDTHp58ktWaRiuid6ZQTSVwEsjZ699JNYKUsqh",
  "key20": "5cuW25H3obMhWQ73jEVDhbVQU51jQ9LqZN5RdfFqiuyiurCGeGqACYDBYML61A4d8vQZDR43ieQvEUEyXxnTzQqc",
  "key21": "4mGiAFnuxfdwvSiCKUHRgSvYV9MFmaeJEFwenjRHe7WTJ8197p14ZTk9JsfkogwmiqJQggHX4Z1wx1mNPnGVgrCn",
  "key22": "akThwhLseeSC5eFuUCmpnmuJvbSnKFUNXe1DpfM2S6kt1wibTj1KVArhcL63rr89QvvATaKsnJ1MB7BUBXWbycF",
  "key23": "eHL93iRtpB4mawbEKejYyjC8Cua2p4bpcQTr4opDUkWoXLyymyGEhDZeD5EGybWqvM6qkZgyL2EiEgqyQgLE59Y",
  "key24": "2NV5V4u9VUQCwqUtnzgtXJjADTBqwb1LRNdcHZZeEPMYspKMBCrVhenSsZjn8g4vTSFDnWZDhZynBxbiKN2mAg8x",
  "key25": "3x1ou9BmCnZD3rLn6RobmL8QQSeS4gYotH4pUitRVytMWZpRYps53P7u2NmKbRrMwph4y1PKBjLwyX7dQK6Hy2Z",
  "key26": "5kS1EX47ticEjzit4FLoRyZxHDxcCYhpvH3NH3XbKS7ngeVwFFSk4oLvgzHZtgpRHHfL3zVfYTVSvQTuNe3rEVTz",
  "key27": "4EKP9Pc5foV25rQHJMaboZSXYXUkwVX4sAqbZj1U7PU5d5W4Er6s8U9njcxcD9GYd3tabe7VQFp87DSZhtnTEGRD",
  "key28": "2uzMWDPTmpCqWDYgUzgcBRFf7PcDP3i1jhYjStZd9aBrAM4VSPNtVLLSoLDa7Fd47xDzikdumXAemdcSWK6yczGP",
  "key29": "5W5mjWsXqk9ur2pVVEvGoheeyJJrvkWvq5TRD8C2ENxCfcPxjviAxEqLMvHjifeAHdDqmA1dYyoqbVg2jesPrGn5",
  "key30": "kexQPdNQjx4VapXwEMgiTBxZkCuTD77KipEsyGEsxUqbt3s8ktVsB2EAGCAHACHNF4yNwu8x2THUQ95J5mNR9Jg",
  "key31": "5TYNqfSHwhL4WtpbVJ7qi1A6iFkWDKVUNCwujBn27kHL3huW1no293kQuQDJ36zouCLhgR1YiM6NvjW6GNfjvm2o",
  "key32": "RXL66sWno9sa4aopTr5ghT1H9nfTyGPSVrrNNqmXbYk14AAdVE1xudC7J4wwjZ7cTRFLEhABVtUhGqG978oVB15"
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
