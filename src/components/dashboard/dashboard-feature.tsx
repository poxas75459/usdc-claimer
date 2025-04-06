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
    "5L3QNSHWXU9Tyz1p3gyEtCcE2ehykg6Je6twVx2KVTsAzQH4Ys6FUFi2w6ZqNX3ktBFTm1i9h5Ksgwh264af2zMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QTkyhizo72vVy8E8bXgtEYxCZ1P7ipTFY3segaLiunRwG4cSmyeYqGwUa5L6Xx2Nfun5hg46zCHcBeKATJ2xi7f",
  "key1": "2kfwkinHWBrjaDcpWoEwCwjLhh3YwWwvn3PcCLQNsrXnvj5jxyFAyaX1UQLCZRAsJyt5TUiespoTE8XECztYWQmW",
  "key2": "RFqDoCrFUJd999ipZ75nM6wTvDyAAWT6ZdAwm3UeCznNE61ocKVZo7Ja8x6FmgqQoCxhwKS6q7hgnm9emRq1UUa",
  "key3": "51FSvEStFQPVFWSJbFizK3h142PHAcufhKWBdX1uJwe9aJyTJr9ErAfP6qFh98y9s5HAPTURrjiL9MUdXBN7ECKk",
  "key4": "ybhmFmSyFv8cB2dPUFbxNsrRiLdaDXnWkJ9V837QRgdMjzCFe2kb23WpUkducGjqVBqscfHbsfqsz9bqbJjcp6x",
  "key5": "kfn7TJg3rqLqaigpPehFnnbRN5GDKpn487K6f5pHSwwFEq2GV45Pxf5cN4wnBJFgB4nemZWX2BbsQsJRKRLvNTP",
  "key6": "3yZQMNYo2gfXUubC4yq4BZgXtkzXosvcqe5NRxVN8Wz2C56RQD6EYFGBAZ3tviB8jqLwghB3Q35FM4pEDViKtTVH",
  "key7": "2aUeP6G844DMvbjRqWw6FNayhMh8ZfjTRrRLwoWagn6G4Xvrj3jHwsRez9PYNR4brWW5zJtMYjVe4L5KETfCYPaJ",
  "key8": "5Dkse3X5mx658fEq6hf3F8HdUwRMeEsewPySuqiVMNzcQaB1AJiKuBuBGF3w7GMVVJJfFYWRuJMWF8BK8QFA6yAs",
  "key9": "4ipNUhSs5Mn73sWauZdZTZJgLtA5j9tmTeP9qRvDKVmiLs5eb8g8ccNaiD6frWrhk6dkDRtRWgsN8A1S8babh9qd",
  "key10": "53RZL7BVHxykRg8esxWWCuh3DZEtC5fQeQej3gLy5kCypwUsanbytKbtojYBFYCopPNzw7DYeZt3LuZo3XY18RWE",
  "key11": "5zkPx7Y5GQ77DwegxTSL9PxNcgcvuHx7Kn5qJyok5pc4Cb4TFWZjdyY1oCgxPCZAKX1a7N5esB6nHkmZGw6vqasT",
  "key12": "5aqio1LaYeLymRLTfG7jBampbTUTpdUFnSjiUdFfxi5VzQ5qdhW7Q2Ba4NFjAysPtYGmyobcnUzPrVzjirjNkfSg",
  "key13": "5uRszjoPcfMNAAUb96fHGdNDmuYDhN2BZo34FpvPCEmA1KTGcCjAS7mmr59HqPMzV5AL7ZyjcfapxBGdXSpP2bsp",
  "key14": "enqsLbjdhfYstS3RYEZcQ2dDWaH6t7d8zzCurgXdAEYvUnsPR1XzP4uCqH1JqGeCeG4yPqt5TrFjt35f1tXjU8P",
  "key15": "CMj4rRKpNRpZ5UtWthdxov3V1vV3pGQMasFUewR2QQ1z68j8Y7THsGeNMF7Jps1346QLHpXaJZribtrT6T8ef19",
  "key16": "2XmaGJK2nJy7aB2svgiD9FRM6j8KMRZXQoAP1TJMdMADTYZXSeL7Ys3f3yzts59QCB8Ktso69u4TBe3hEYse8Tdw",
  "key17": "5WwMPttutQUdviPy4iU9bd7EWUzM5bSNMaUq8aoYcU32UW349Zqu62JuB9zRfrP2AY6yW58ZJmRshh4fSVRi562W",
  "key18": "5qf5fJFuCnCUA6hKzrTRriupHwb5UdwyqoYtS7pfCCdeKsaTKDrFQSnj4CqML7scyuFTdPSQHiyt3Fhkp8N63juM",
  "key19": "39x4ijuCmgZbAVbEBMng4NTXVrh3YDRCyseC4t74sMbeEwM7M1dTUdNmpzQJ1pyXPijG4b2AhNnpRuzrNWQTJCB4",
  "key20": "U2Dy5G9eiVFVuiRbrC8cNoaPQpCTApeQtKUch1HKiRCxmcpDRM5DG2CYNtYJJGezsPsP9CTAJWH2Fukrhj9tgdH",
  "key21": "4Ka4uAXVuSET6kGhzKJYJVVRFtXBd9SzZiHg7q9NmmxMwgXFCtAgcttj9CA6tVqkf7yT4v7eemFaEXnGfZJJkebQ",
  "key22": "2Xxda8xyVPc1ncY13NNYV4AF7fpSxGjA5ZWpUcGhiSLaL8hSvvMKXAstvBuAd7DfGZiBtzhuMWnmg33AiMgXZg6A",
  "key23": "34JDcBeRwVVoEViZXM18NDgy1H3ZQY2TBYYgruEQafEMPuFpx517LiaEGEZw4N6vqdbJiFJPXpy6s8F42bMN1Xdy",
  "key24": "85puX1tQpW7rTZJ2bUnrXNfFmSXzyvWxWCqUwSU5oo89s3JrtAc1waypcVZfZipTuLAJZbegPpCjgN3EVXpk2cd"
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
