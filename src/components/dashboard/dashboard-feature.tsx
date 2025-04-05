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
    "2echCJQjdJuLFQEoz3VFb5UBnV7njHRdKN4wFkqKGkdTCv6KSiQ6D3WeoRVMuLnPJBVhGw2e2i6fGqi4vV7GvTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YZvDqkvBnP6YE8rJ5PXeFoHHm5BKSxceA6f4nTj7fqgwamo5FGPydjsaAH1QJW8iBeRN2AV3guQR3DxipG5ivqJ",
  "key1": "4S8SzzB8rs7GAfFSpCHXeXEP84wJ9wkkd9ZaSFM4S8DDWTAActsDR5GqH5CNW2u2YuSZoxMVjdb9Mpmz4QxzqNVz",
  "key2": "ad5Ebt6m42SagvYDjE2hpu4BdAhshWitgLUfS51asaULi9tDj929c9SNRBtLQAc8XLeM2o2YtcN5jt3x6jcVr4Y",
  "key3": "2KPbH7XxAgjJXJeEiG2DudQ1yTjrnmfkfdnn2vMBN2dUHEseQdnzWBVB8tBUxgYgc7yYjeLwLsEXmrPhioLvHNzD",
  "key4": "52S2vcwULVhHdekf8ZWwCWzJ13JwKosbFsNU7MCGQuQSCw4EJL7vYFViKJ95rwsqpm8miEgNmJHyfYKEHAJPMGBJ",
  "key5": "4YdxQeFUgmokByMtUENiH78sDrKU1xD1hGNSSRVsTQGmJxanBZ5LeHRJaTspJhqhkeCCnCdJDReMGBSge2z9ZUsW",
  "key6": "2trcmypgw34v3dnBYg6zq6JSEGn1WgqsQLFMM847d8RWTHM5cds45cxZggEssmADD8ZEiHuSR8nFgrJeYQNtpdxw",
  "key7": "29bNhDeGAmYU1VR6odmvYZeN2n83455kkGnSPHnnZGAUs23wYW7aA4TGcVhnLFbcFeYQ7SYwNApjsYSSqzVsFqyH",
  "key8": "4DPMunJAxLZyQdPAmFKqSDzoht79UGtzAa2LXcu2ZCh4zdzWrD7R9dwWatLosWrPoT4AVK1TfH1eAEshzYFAj6gc",
  "key9": "3azFd9jwbv7UnqhKBBPDGAyuoke9SrG1kBd5fsX8utHhrYrwhu1YJmmFLrd4v8NzBLQCuCvB959NCDUPBJ5d7PsP",
  "key10": "4zfxrZ5bmHop1R3HCBDmyCKFBr4DExeN5TpTWySb3WF1rwZRt16LG2fizT416fdv9kpZNJjFBXqZALQkjiNU3vFH",
  "key11": "3u3DFT596jZ972tLULnm1g7KMUTu2LTq2rJemC6vnLRzaLZJGfe7SQamkbWoabCQ7kM79KwLgifB2PuzWnfQWw8h",
  "key12": "2gmyDzmdQNA2Qhrxr5dFu39vCx72jpzrco11T6azCnUNMaEKwdSk5LetN4tfZS53cJZFpEcjyJqRjFtgnE3u6cBx",
  "key13": "23zQMgQ3B9DoeHyrmY7GVTzfVDakwVtcFPK2eVKwhfrtjdiRLsgacg8QAzuVaXm4hyaFKKB1aGjH3bNCfJdGASra",
  "key14": "3WPGXorpf38JchqYU8Fjaej8bRhj4HsL57LpADDmkLUQdp9UgD1heziNrexNkkgormmuJ5VvMj7VELGLCnsfqsce",
  "key15": "3ybWqffarpgVbaxxQ6eQRmaxKEA8p2XqR3w6z1oKKd9jbPJEoAy1AWhRCuJMNy6W6ysak4pTMXZE7oV9epZMS5nQ",
  "key16": "kWCSZdBcL3iDkkg2JQTHzVsGmTTCtVX153pApgEZnrLzXLVpjvjCz2Mg2qATe4TA89aHze6ZUYn7zNENh5V9KKZ",
  "key17": "23DedXAjQeEvvQdeJNZiWHrjHTqRjaBKCRodGhGKN1SykkCSsXRWuc9Nhf7UATc6ruSJGb91Hmy7D3mqEavRcF1c",
  "key18": "4FbhWey44ezgivwWyWghzUiuFdMUCHYtHJLVHNW6pL2qbwERjvtrM9bZPdnCGnHqgje3Lz9wuEkbhrDs6JApBMjC",
  "key19": "4kzSRckzETxZB1PpbCke7e5H3L6B2yYJkExgwYuWtNg2CuPdGnHomk4NrR8zZTU3wFaFHmS3jYhFGz5VZpKhgmKx",
  "key20": "5UPsXAVpV1WAEtKu69KsffsxviVtBdTbFh8dg4VkQWMR7uomftdYjRUEvdTQPJfqkFdRcW9DK6K83zSEhbdMuJKs",
  "key21": "4XxnNJjSeBodZpPAemrHrXmWE3X6JstwGedgqgpuBJRDkg2qU2pQEDWqCWMqXzYu8Z8y1CS8bshkUjDH6sVGffzW",
  "key22": "5jNMunTuib7ehXZKRWLfxqn3ktYNnNokSydgCsH9vfmeLrzhmf1fu9k951dk4Va57Ky5CRQMAtRJfcBHw2RnAHSV",
  "key23": "5zQfypCxWmEpSKVDZk2ak64ax9PqzyNsJPaQNrjDhqnmTWtxdNLyq7yW7eJaCAUxJoGQE4qe1N3JoLVZEV5B5kzp",
  "key24": "4sD4S2kUg98kRPrbbvogs1sixQWoxBWFLdRQv8M6KYPwtGfBbvMFHwiVxcvnpfhNX9wziRm7Eiz8h5FCnMxRg1HA",
  "key25": "4umMpSjv8EHuUT7LmLx5UgpaAK2xeSDpjFPbvkna4qQuJdaomjhntM25oWSY7rwxCBrWya7BEgwaqPwhPpapLgRp",
  "key26": "58GemQ8gRFMfgLjNxu8E7mdiR9Uw8LQm2BB6KHytTfEnBHQiEFosBJWTjEGF3yYddxKVm9DeCWpsFVCMQwvkLpwq",
  "key27": "5KVPXXtJiycS5ritcZf5E9zudkqc2bSmSJudkiKJiURnU82yRuRWgFxe2qKNMHkDjbSGdtd9ULouc2VTak3Ybjba",
  "key28": "HP9XrfSFakg7cU2PYamDKVFwBbfniJS6Cz6q43iFkCm6yyJ6Mg7w41TENw7SErj5XAvWDtFoTVqqs5gw3ow6Nib",
  "key29": "2bp5LXyHKsHW1g8Z4cHz4Mg2dpWbSmvvwXFw8qdAQ1WPxteSCEHFgjCho95wM8rSZBSXAmPKf2YFrRRW4euM1FvE",
  "key30": "3d8FpYL6Y74N2KZWTU7ky67LY9bzs61RDHYefhhCFF51N3JxPMo6wsQWKLzAKJAbXrHcbfsm3agtJqjp76PyC8BE"
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
