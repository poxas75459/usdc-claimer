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
    "2mGYPPhgwB6CVoexb8Nj71Bb8CY1CPzmepQ91fn7HjUnCSZeMY8U2QHoJ8mR5wnYcRrJujYSdo7hstfKCwq1qoNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fEZsHduZxDhLqhd5y3Vfrp3wjcTRXXQngc4TxA2FANd2uF3Ghc21DdG799efgDSPFHMjNueBXadw2y5fxvkxsji",
  "key1": "3uPKpLWLRZRdUtcdma75CKSUnP9CWYRCtHmhBgt43UKCAwvKsw4uSkpHZWDodggZfcoUp93nhJCP3PjtsBpSDqeT",
  "key2": "xQ8834qtAK6CgHevnNAy7bMDS5Sx5ESa79iz7WGBJuA52mbPRv31iGSBuDSFpmix4d8nCoE2gBLnHqPtERXBGAG",
  "key3": "2eJPRjuDVFJhSzLCbZkRBHxqyabBHBJg18TM8LtudX1BvvcZiSqJ78jpBE1Cm5QBMumzGjVdGucPNwZmYXLTbF9o",
  "key4": "P3m6sbzo3bSXNj9conLSZjkcaRrgns3AAuK9fyMPR9n1KZ4naFUBsuazmCyiXMPZAw9Gp9XC5gNFkhen3mHwQSV",
  "key5": "414sTUBckGg5kRpG1FmZER2Y1DBMeKecHfCdpus2YZXDAdsiu424WGYT79ZNTUv6jsPr5HhH31fU52UHJhQqA83n",
  "key6": "24PAnhYogFxzBgbhDmuYVScQYdK1kuz68KW2VSWz3P7qP62ESCUDPFodPr4Z99pbAPP1UwWXyArT7DE5t45bU1gG",
  "key7": "399wULTHU7jjfKAJGTcK962rA8ZULcq8nCBFTDAB5c89shRef2sphMTY9wbhSpeGXETQkKZQNgBTTJEYGiGxAKMM",
  "key8": "NDXeK51pDj4DFVz2emVXVVUMSqpvcJyXHod1yFCAz5qqEgEx7qgV7rupFGTzAt1QtLrEKw39YqsCSdbNDEaQR3a",
  "key9": "3V7FuymNBB8b6bRG1pdcWhfz7BgFatr3qz9MRrpZ8A34upEu3km4KoCHjLjrsAsGkDtzt9q6pDSVoKK1Nx4QUSMQ",
  "key10": "3j6zN4YZtM8mSZNMyBT2tPErsgfdaxUY6jYRXE13X9ZTBHsnE5pTas3aKTyVA9XQktyRf3VaTYDkH2f51CkDAGS4",
  "key11": "aHJfEy2BvnPukKTnHjPC5Tq842Mikr7tWeBRy1cDY3e4DMkQGSY1RYCGbfE9ccc5fSocKCAjsJ6gGB4jNqP2nXL",
  "key12": "37a1F47BwibbkWtLxXsQ5YJHqi63M3rR24Dr5MDdbzHpt4eD6EnQAq6GLvnVUQVduSBxwUynufFSLgSCttVRHTU3",
  "key13": "3VNRT8bbGRYpbZfkkJFnNjHVojYep85forAXQRGWTeLjPkifBgdGrE4EreoGSAecxctobhdhbpR8zGCW95y23TAt",
  "key14": "3znE4uwBdQUXQt2m34vc1qaRX4WZje9UyEB3FWLBYNTgmsRjxPVZ4Fxoz8uyNPVgxRxs4jg15NdA2SGR432WAPTq",
  "key15": "pNd11xXGod1ESAx6bQ3FNRi4ezoXfDbcLzvHXv5jJQf9Q7HTVfVqmS991vmrwyyoXHC5jG4Kp9XcTFQFYewjieM",
  "key16": "4huXYA3EU4Ft2yAwGgiwPAzSLqVb2Ux9xkExXkAacyhm1H9crhmcZPAPKSyVrKSYoc3HSja1qZ2oottptzozapoX",
  "key17": "5ijU5WYkTF5HXrgkuD1KUcAEDF9dBvqBqBp99x7kFykCgXG9d3pZo1mdhk7mANMubixuj3ZCMsSNXQuggsCJi74H",
  "key18": "44entcBCFxt5ZcS1f1vE7wJJpbpM7Zxkf15NP8gCL66dfPdH9xeMkoESh1z2Yj9MTt6LeUnMYTQsZXN2wsN3KsdS",
  "key19": "4KLPkw81tsKXRiWdWvdaC2K7kwS4CapPcwg9iXe7t8y39MAiP6d6CWNc37BKjRRRpiLhtArF9z8y6ZWf33PpCjLV",
  "key20": "wcFzaVFHDA9X8izLjB7MGq5Luqiym3SJoN9B3RG4LHFgeiYxGBgczc8iDzCkUXXaFeJfejofmp6K4GVRCVteL4z",
  "key21": "2rZX17TBiD2ZoaxTVQs32k8zVGaeAUvRJxnviySoVJd8TwvcC7v1q3V39pFVLdTcsCMdLEk41FDPRDMtGWyeHM4M",
  "key22": "4pveMSR5XNNVMmXEJ5noJjaEL9zbEGRwb32zTHN8VHPDErMapVXAj95qdCeUZQhHoyeRaTi7KKnLRjVuzd8bimg4",
  "key23": "3QvtxWNfQyqpuo2cpwGPnGWfGrXJiZbqQm3Fzgqv3wG2cD7iP3F2YkQq3k2c1vSM7WnSELtY9ta9c3Gzd5Rfx2s1",
  "key24": "4gG7uo5oYXWDVSZRnvrHGpiWJpyyUr55bXG896fgvgB24LZF6qNbJRQ7EgcMKxhdjtbnKancvd8fFqVoPS3gF6eh",
  "key25": "3RVKTvLoPhhRsWrHotRJLixPidYs2XMZafM5EBKFrUqoEMai3Hb91cStdFZ9pMHVb1gEjYDju3Cc3DxMzTDECa2f",
  "key26": "3Fg2u3QWrUraQcYRP9Nq9n7jscjeTZCGAhhXfgbusa3WAjazmjG2oUUxeDovibRXysgqyvVXhYCZwVobqBCST8qM",
  "key27": "5oauFC4RdkugX85nqS2bLewdM9Kg3phhNKTWsmMihVupAawfM1kurQ8wRduATPyUufWNxWgxMuJNfSadAMuUUANR",
  "key28": "2Vi2qBFjw2scvRjLC2auguKtZFn3h6LU9iLFX2FtmedNk3gDXzCS3Bz9NU2H3cBRyeHZhon1eXbiBqkMEjsqbSoL",
  "key29": "58iW3QYM7RH2nPSYhfcna4aPU7VQcrj4jV5TWGDdyo8TGwihpW9JBRPcx2LBkARnwjyhyzr2z8PbDbRsf7qtaANZ",
  "key30": "2sTMNqctVGH1BGcs8ij2muNKhFZm3DBaiEDSPdrD4YoPcP6SoqvRssJAqSt4fko52s4TwESFEDY9NC84B7ojFnoE",
  "key31": "L8EGjhK9vgsUyb5PVwZWzHYBrYKK34DhzoSyYa8LXuoT9AfqLeYowhKXppxonzJYK7W8j3tj4nV3YrSv1niV1Hq",
  "key32": "GhyKuELaVj2YY2YRQDrFBvCgJ3vPSGxhNFJSGVbA74kCsEg9J9cBgLFRKsHckNRkaZLy5xCwRpY5rFivSyYCDoE",
  "key33": "5fG71XFTv6QeATg1mq8aT66p48eFcHx2NKjU64dz1S7vc4zuaA15NENpEpEmb2Y83Hozxcwvfzz9b6kzJ6vbRSLv"
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
