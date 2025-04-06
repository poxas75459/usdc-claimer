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
    "4peXum2pRfJKNo59m86AvxGfWLFAtGGJNroqfg2yiLGX7JUvS7vPPfzd43UsrTo4mF8GFUuMab54oMRgJvB6gFmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r3UN2tAYHEeozgzgSt5UQeDBxeoKHykpP4jp8TqQYQq4e9Sg8yGJjo2pScerC5jbZTytzU2fQqkAkehbVsvHprQ",
  "key1": "26H6VTaE1STwW9qRtPq7kwcScbQvPEdBSW1Z5oRpgCCMHVPsJEkL19RL9H6bCSCfiRmWyBQzeQDA7NqnwC1d8qos",
  "key2": "2rMetRouaGwo468AaRYxqXFatLCq7XT7jqyscncPDgqSbRobx1kFWNx6hiCaDMqBr6K9YTJ1Pm9rPiZv7F1WzxAA",
  "key3": "3bjmfWE9ULkSRuMko5hW5spZVgQEirv1mBe1YupnDhurW3jL3LxYq4UhJLFjHqxu57oGNi57p3Smme74WbaYXwGd",
  "key4": "4b95Nc7VnaZjeiDaEwmyHJWTskjwgEfGo2qkySRFUqCN8DnLFCPgcJgSo1NXfvb1LtFFcYYRdTS28QEbFLbBVSWj",
  "key5": "3UyhY6UVy5fVHg7sJBjPZqfLEDFccNNH7d3KWZx1NaLSpkhusPYGHrtr3ENGxnJTm1dUrbFSLp77Mkk2XBeNCTtQ",
  "key6": "26RcyZ8wEN7hqMFSnfuTxyWap85wgBsUhyrvy25SPEjHaw8BimxDj2aioCRkKDDPBmuwSVdDAsMk8DanBL2h9r2J",
  "key7": "3JgZPdvcpNqodSDnvooBUpp9qpAZ8gDy5QxK6zTv1CAS64xcQkgX4Rj6EpuwGt45CFPVGpZgJEEVsPKaakeRnH5Z",
  "key8": "3hmBqDdWvhRjd9NjaVnLmhGBndjaT23aJYHx3bMS8R9iftt8CX1dpuRub7mm85b8F4kUdNeaCHCdy6pPosrETt1r",
  "key9": "3PDyxd7dPTohTA6b1Chvjvs1ogZfszHRNGmHmuF3Ys4KrNALcdyyd38a5x7GdT6E7q9EPWW3z6tUgpc1E489LYWc",
  "key10": "5tTTU8mLZVoG3SQni9nYyrroPtAJJ7Nos81LFaXeHvT1PEMi8GYGhFAT3zakN5wpf97eCtEaaQpt2iF7F2QKuy4Q",
  "key11": "1PdnwCT75LtG3NZEvNBcr9ixm9zgnLbpUTdiPh3isHvBKc5HHES7DwAt5nbsMkbTucadv5bTHApf4Mjxewo1cBc",
  "key12": "9Kt47oecsSN8GXroDyFYgAVZw1bueU1QL6bSx2Wy3Lbhnir51ESq5zvxQ9YGAWQboqcnCPFJ8Va5vS6bMexfGJh",
  "key13": "2zgQAccF7cyywJfDVZMpVBv2PPheag9umPVKxyxg7YsGXusoNfBQ7n1z6ecftWeViaXjyiJXxyhQxiZyvsqfVnj5",
  "key14": "5b8A52cVrQRJimc9hNc7cfhsaAue5EuK9bKbBMcvviAtP2hcGSoLevddHbz2mS3o5wbmJkZ64jQQvjSQYLPGLYUp",
  "key15": "4kDDvCRrr5orAAJbYt5Sn3ogCCFQwQ2P5dFudf5Zm21qB2H5qouD7jhBDuZU143MfngUAKxMcSaguPFQKogYzS5C",
  "key16": "3vQUtYt4agnsE4iBa1oVtYRvTLnoD1Tm8zAsqLt9Uiqyb27Dc7RgGnNFDW31khX8BhqaNy5N7t9YnPTLVRGTB7Ph",
  "key17": "5o2W6UEUSrXQm8Lx2FGhai2dMJRTgVzesejx8kVPWfSbPwhSE7QMkmLXLdB9VQCK3LxdA3NnN8HQxjBFsNVuCZBg",
  "key18": "3EGPpCScFQ9uQz9AtzvvCdm6J6618jhCfCyjcnrz3p6hmbQbNCHR6FAk6oZ9stMdbupsp8wnczzGYc8UdjnjjQXR",
  "key19": "617nqe5cwBmWPQhhysapKwQ8FbzDKsgU8EAbnQHwL2BfB5LwZ9LJMqhTy8fcHAyQiRGBx9znSJqc5noMjmS7tM8P",
  "key20": "vncXPkZ9gb6XJ6SVYAMayWbDBen9mac8G19LQv2z1W2jFwpAFQkTKnqMyLBobCgr217CSovQ57gVMy99wcZU8rU",
  "key21": "3rgLUmaVwhzLzABbwufEdjwDN9GE6FRAbiGFBFQoLoYkMYEkDpUCoS1XhzTC8gyPsqNQ4hgg5kMpD74Ms1Ffnuqc",
  "key22": "5xNahbSEZBpPLcHpKV3dL6wYXdTNSDshfR5oDqubsBdrvDvK84zAyCVPV876V8T2HCWRp3LDVoXjMJTccsMWTgta",
  "key23": "58qEjDCMMCcL38KWBm1T8cruZhrdZ2wdN6kvGtm92GpoZnKudjw1WzSEu4RdgY1RX5s63yoSohwuDuuHWrfs59w9",
  "key24": "4dfvTY8ax6GE35TCwCvy29Lk7a8jzqLjshFzMLWmYJw7SZeGywxS5FYPK4vg8VSYBwDvV3MqEgHDU2feq4wPAkBe",
  "key25": "5uMdMgAnDnK16xj7eNMb688wmkkjkvgXe1u3okaTPChd12szPb4tnMtjqUL8VCWLXugi8gdso8Yt3H5viKehuy5h",
  "key26": "5ne1SAFNQEkE1bAVuCyG6iWVJNdDSrbaP7E29x8HorEwHzGpX2S8RDxvCArCP4kWfENidqJLwipMi1v9FEcKkmVC",
  "key27": "5ZuuUcyAiycUiEcAKY6K8rKUKc1D5Bii12qFnV278BJ1rLHanpgzPsJQoxrFW8Kx8kbC8rCL9cihVcZ6S5idBuiS",
  "key28": "2mCdai41QyUieozn1N65RDDfSGGjSup3mfqQqUwjyHnFfjt5HQ6iuXBqujMwz8yYwPpn3AXfUHndreLpShpHrdYS",
  "key29": "AMmUSSDftLDdBmNoTwGaR1iqvDL9zFN13LtMkAZ6fA3UfvqqA2ZR1Ypvo29V2Mm7EUrXfd9dL5jKaAJDBC8of8L",
  "key30": "2aA2itVkuTeC3nyZbkKB7BFZey5fvEyebq1b4mo3FaYJ3rtJa8EYgEoYynHtDGwCSCdor7tgrfoowzovvgV1SKs1",
  "key31": "3oF6U3q69DPKAzrqdiQDtfqddZkSk9b54VKe44ea7zuJNhYM3oBqy9CXjaDKqVQJaGtPWZ4JEGUmQpZa3QceHuyo",
  "key32": "4LgeDyo7dyVdsHvc4XCsTq35p4WcuguwGYForQxeVUzhkTV5ieZMA6tfKLxHqyBDy1PLXyz1bHhkPbC1hzwyEcQk",
  "key33": "4JpBVTp2dypnn3WaP7NcZqyrBTmBk8jfywQFFWpZzk96eCYzN8xrCk349Qe1GaPtoNeEAL5XFNuHqEwqsXmhvh1q",
  "key34": "V3wyxFo8hcnAjzBYWjcVPeRtAapirEX9B8GXJznYxsiQ6jpnjFhAgiZ6WzyqDggywgRKQtvp3EQDZiYz6Vj2UX6",
  "key35": "2E8c3yheAHEu7Kpa5MyKiezf6dMgMpcAiFXnTfdfrBUqzqRcddADiTnf8f5jYZSXYHF2kaiSFJ6AjHGZjQHMhqw3",
  "key36": "5KTnR4bvbnoECx6W7BiY7mvYBVtMpJgZF3CWZxz3h5yvtRC43tgUsgWujCsctgcMhRfUsTxXKxaaD4sRWdm74Xa"
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
