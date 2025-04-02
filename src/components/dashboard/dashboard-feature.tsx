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
    "4W4j58rK5wjnrbGv41Y6gvWwQhNWF2dFM3W6fLDsULu9wJKHLWz57xe7mf2dGuUhC4Hi6pBR7wZFG4wZqFSuUQ4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UptA52YUDYfbVH5ULmeKs2BofZbpC96MbHDSKZjg7gTei9Yv81UUkRGMrk2N5orzsBewJBHjJweDy3EozkDctqy",
  "key1": "iXtACnzfWH8UvrgSwgs2xgxF6YqWP6UYTSiMezmGbmS5hUAvCcSwd7UtcvAKfi7eEeWr7ohCo8MAKbYKAutRcEn",
  "key2": "25tcHTcZ9XzF2NBLRF6YmDuYy3eHZsw5pFGx86FZqNtUvAdw2yT7nH7FaB5JaJFfDTT3tKNB4X5Ed6wGvhvTN5qg",
  "key3": "2ciLrNSTnDYpkRfcPCtSDPvSQwbSohm3wWgMbXYCmCuM8bdEdCo7smiw2H4XhmrxVb1arDas2p2Y4x2fVBZ9iuHD",
  "key4": "38S2wLQ4iMg4sjV49dYvWKzoUGyxmebEc9FsoJroGTuVB7BaDayqx3a4Am9atEwPJuNZWDXRZ33MM3reTqt9zJEm",
  "key5": "3C3jJT7obj1YKLJBuh5Qhz2SDdr8K3CEM42xWFBUrK6zZ1wqwGgLTpcxYV19FDTLDd8ghJ8AUevuuVjwnCvTpVeT",
  "key6": "38c4VU1KNq7r4hjFPAwyUDCNv6TpEfQ26nGuQkGV27zvGozCMDUDcWFyhWMUaan527qgQABvUbHiHjXF1ds8wtqj",
  "key7": "2xzn9wUfSfKhdHWrfiUFUoeMyCGpKaMsjX4HP45gm5c8MUTDRFA2C2Nda6S1UGzy4xBZtqBo662szUTubHT9Sprd",
  "key8": "3mo6o9WhNS9d6wiU7rgB3kNMFRPCem5nZ4GjYas8iaK385jEoX6zqbz2kXCoPkxWyiCpehDEAtGVX3xHyk24wk7F",
  "key9": "2VAZMZC35Ajk2B8v7qdBLwMRq6dHCBHDWzXtrDXft6mhQGrirYBwC6DHS78g2jzuHtNfR5hRxmb3rQ6JZ8AMLvH3",
  "key10": "3E7m6wHpf2As5D4tAR1WwbxnVNcDyhGhtBex8gqdWBbALMazXMXHD2AbBCLNSSKH3GjuJ82vS6AGH6YDsGQYE45Y",
  "key11": "zo71SoHx45Hx3y4kjgAfRS7KSAaS6hKUJ4zQvSvmvX9cU4gEpKTTzS6X7ukLmuLcbLwfEnbq5KTJkGGnkZaRLvo",
  "key12": "5TxhwEKkq1j3aTQyy2CGZFbYxZT2N9CWzXFnwq2HGyj5eHydVJpPZLtxuhaFkrmPFMHCjMEA3pJm6yyYRDmQUGwr",
  "key13": "25raJQFYvzNAz1eyyECK5gNSBQaXqvMUxetgoucH8XUkyPu1HKzZEwRdqoDYjAvcs6wLuK7TsPahcFm9YrE7Yjm2",
  "key14": "3LMhSLwuA3x66WrDG7kSimT52asztbi4xJ51upRXztcm8oNBME6898ZcwzR5KntfBTVM3ZyhERRNhTpYdf3uef8q",
  "key15": "46mexMtKnoZtw8DngutYejPafGMzP7URm86JkUxnCVwzqmPuqx8HZWy2N5iwZz35ZJAHo38Q6hLbY8bV3CjCq9di",
  "key16": "46ZDZZaU7rL2vBjcBp2wqmKLNin3yeSMGqgZd2gUUowTuwyXEvMXeDheBdWB8sWZVTwZHyMERVYiTgypH1hNRdmP",
  "key17": "FezxrJhHY4UPfeoLGRKa83KuqsBSSGfWvG2V8oEf8EuhkoPHH2MYTF8H2Fj24ZWskoUt2kFLwW4CVbsUrYdHgp8",
  "key18": "4W43qRGpViBkNPpRttqrjnutUmowhoJan6nJdpK1vc2ge2P5cQbVSCQ57LNjdwWVS9pNd6k6izekos8HYiXDMBip",
  "key19": "4Se6y1VV3gDM1fzY8w1qjK6VYHDs4gjHzZ6PVSkPBc6QExF6cisSNYSuu2tvZ5MyVW5inRMuhH5qDrErWL27SFmD",
  "key20": "2oqcAd14xpsGotSBRRZS6NAa4GNpX59L2E6fAa91i3UwfLKdCVvR9zSxpAkTRkpP8ns3o7qP12aq9ZLCDAgo1MA8",
  "key21": "5QVEHMBtUWGAYHDmcPeu85kedbocN5ZTpcYcPWS9J8zkyEuffxKgi3jbvaFGmhRcsA8NJaTi1Hto1AfnsGFzFx6W",
  "key22": "2dSNAhpHhQTrAtNocuWPcNdwyzSr4KTsBG9fDWZzvWNswdFYBdTaDKxaYDM8xeZmtVysdZcTutwv4aZQpgY9Qwi",
  "key23": "21ZXXKDGSGBYyZ3DqgqjoEA6Qh4TeeJV57XNzMddrEtTuKFyXW6rQKDaTNF3iiELEkxQdpMDkewKBCHEgmhNniLk",
  "key24": "1S3vGyNSUcaSiWM6dyG4F4qHWDxZVg5sW5AVio5BiMSnhRZAYDGdxiS1Ab4576RSD4xssybdmZxei44N9GfYHZr",
  "key25": "5CMDWYCeGrbU1QgvPoMYuDFSB24cHJiQjTs8aV2JnaZKSqqsB1pZcahbgwK5TKybm6UhxjeUre8HVQ4L4sjC3Sc2",
  "key26": "5oqExhEb5Q6YvfCbwNPmzMcEYnekedYzB7YCKrP5j4Hv9KTxNGRF6Uw1uBzNrgMGGSciRrDzEwk7E2RtR1cyPwRZ",
  "key27": "629QnPjAck2Qnz84wZF2U91mmRBLrkVRCQy4FGS3USbZQ2EgUPpYw3ikb2ZkYNHEMDtjcaFTkHuAtdLnwXrRW2WF",
  "key28": "2v283SmS2zTia1xnGapbjNvo6gcdiG3JNFnshzcVyNFT3EUJ8iDzqWQjwiGAkNvnoDnEwPhxio6suQvb7qmcgWWP",
  "key29": "myVrQqnGhdunSPoStaw9977kd1mSyJYEXC8MD7s5Tgk5LA3sniB8sc3ntRiAiKfHjxJivBtpqav8ZQDDgC9sWVD"
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
