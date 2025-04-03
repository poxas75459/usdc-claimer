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
    "2SatYU8i6vfKCAuzJM9yBAuKYRdxQtcuFsnsYj7NxaGiByDXk72bMkJ9i1ub5VCv5scwmP6fS5A3M5K2J33D2Zxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JWTq6cEEH3tG3RiWjU5DWJsWQSRwp2iGt72hcLFSAsJqaXohC7viNsHgpdaR7cJRusR5F5uwQcv7Fd5W2b1uV9L",
  "key1": "8PrGoa4Bx15FrPb4he6CHi8WGEnx5uctYs57wZZo8kQ9q8f5auttRvAd7uKnjLCsswkXsCzzioAEBbyEFFnQkcE",
  "key2": "38Ucfokusdp665Rf79CHYTuJzcGoXyTR8v8DRM1E99NX2uFznUn8jG111EUMF61BAFUyR2zokVAVjAAK2h37BgSb",
  "key3": "5EWan4h7zErLzS6ikkEcghtfw1sWAWMZotwM9JFpwv1cbfR3fk7HtwzrFHazb5C4YppnVkMjipD58Ry88AQtN1cb",
  "key4": "2awV5CLRh4CErsNea2asvrQcx6mrpZNRgBErM9CBmNxtYp6kxZMu69zdvEe9QjuSfVznVCdfprYvN3ocA9RzmNMd",
  "key5": "5pTyGQHJ8TnW4wwAySwmiZv8o7iSyCyGFSmyFdPvtH9f4VXTTUjw3R4s2ACxdwWkpviq9Mbod4QTvYaqs9QRraXH",
  "key6": "TY8r5WxmUp3fx5vcgdU9NTX4aZ2ZkzRRvqkXKZ9Czjub2LWRJfuyLczRksqbgS14wHUvZCkSVpN7tPV1kk6aqTc",
  "key7": "2pX7TEiDMtF1JvEbscEwqqdtju5RmxapKM9WoA9ET8sMXreGmw86zmAiHYf8aEHaSmDf3UHudYPDutT777Yq2UWR",
  "key8": "5cSEfmZqk236HiRCNemzHUhX9wuMAHa5aiapUfa12g8e8FhAkLN37d7AeCS3JJ313KswRgG8JP4UkVWxw5bQeJZq",
  "key9": "SFmAhpQT2LmgqkjBFEMonZPki5VST536RZCyJyYaYzL5htyC4mczCpZJcKwHizxK5DY58me6GayRiUiGBVoCuLo",
  "key10": "jihp36dCLYVzbfZgW9rMNxDUs3DdtafMkdMGyJuKpgizHXW3TC19iWL1brzLwVHmw3C2PvDXEYSi2hTFasv12hP",
  "key11": "67MUXgVXSa6cBdrvC2fG4fD3cXQXUyKvWEHYboHXjtcNDr2k3Am3p54RErPJFhZzNTT2BTG95iYQYEyngkJh9twf",
  "key12": "5gYo7Ssn4AY4Zb6g2mJCzH6SCWLhpBjZsG6niukQ9nnji6kPNRggWj1nv7ckwojhVydwBzraWxHkJ5qrkFjZUG6Q",
  "key13": "55ahmjK3tfFL7FNVoRcBfhjeKfepwDwNXXzcbtH2nNB3LpEYdNrg88moZLNrVJW4wAxEZxHdm7HRVMwt2AvTnXyr",
  "key14": "2hnLffo7XZPkiqRxZJduspG3TeHnHtEahzGddqBBrvTXh4s24z15ipudd4hKvRrX1vsSknade65hqSp83eSDYozW",
  "key15": "3Wsmoqcn5g3YmfG9Q2BxTDZ6o7ZJ9VSuJvRpNjeC5iEUR7xeh6xgsVKSGaFWjbWsniUtZqhdhx8c9rW65ECRDdfA",
  "key16": "3dafTAYuTcvafU2nJhTHE7eytkigp6pUrYintKdPS7Cy2txM8VAoCcTAwfQD3gGzXXhWDQScV551hj2ZNLXffHx2",
  "key17": "1EX8zMNYn6qmoCth5KEGQZkk366pABfoDsh9KTXN9mdx3k1AxSUfdrwuE37quonW4giQDY76D5vQHwZZPLyJDpp",
  "key18": "5HE36LzZ8zMNE7yiPrDjuW5t7p33B7NHLdEAKCgpDHKk9wPrGUiipw94Uy5JLjU6ophmiUvb6rymdoEhxAVVc9tU",
  "key19": "4wV3KT5DuaPSMK7qvRYaPzrxqUmiVJCSywfmZg4Y5WReytG3Z9m81RpTna9TfSRpDATe9WaFaepq6LqsbYttLbXB",
  "key20": "5RryiWd4kiMJYDX91fJVXu3w62647m6EXgLMB5oRbttC35omii9Bj1GkYSQxejhdCW96mFu9uSXWbz8ogLJT2MdA",
  "key21": "3cvauXqkCznTSK5ytUw5RoebvA1zzd7KU6DpNoV9pKn6EosexUUQratcqj44CtprkLczyV5z1XGmXnk2ZUengud1",
  "key22": "3LHmjAgN3kTZvsaxbmaPAcDvfLfXoRy1iScBESRt5cp7KRSFtr8g9EH8Y8caoGjs9M9i7joRzNCm7PJbnreYFato",
  "key23": "3SzTnufRtjyiaePFpEKS841kiXQRPyNRTaidwK8457sWZdhWNiYTqt7iqJZ1NLcBkCoFdTJiDE9F3zPy5zoDaH3g",
  "key24": "3eZGifta2Vg2akPP5nJWxHthinqQHBdwtRf7EqqdgsM9vuxnUDyB5yFn45t4xYCLiuV6DWoNSw6AafvwfVmvPdFi",
  "key25": "67kUA7e2Y5FxB7dkPpFSvvXanFsgpaNFbpveavxQnj45JMNCU351GcDKd7C5tSurunK93cAcUzpqH9vMmFu4ycBW",
  "key26": "48vUymWDUy1NX2tUsVx6GaiH4Xp2uWjLjkXvmReKABZbZgdCfdN8ZvaZdgm8H7MWk7goKdsP8ArqriS3sF4Twx9i",
  "key27": "S6M2Lzy1MfFbVzQ2unhYgeqL41hF18vwWbdHNzCAJVaWJwMH5qFXsUHvmPNpjL2eSincMKjYFrM8yhgXz2NcbZG",
  "key28": "2dyZFWCaZdU4tC9csW3QfNzSLEsCzzEnqkv28umBgtN5uXYzgnWeYidNbc516n14iFSMM5Gn4cJci2RrtWzLfzT2",
  "key29": "465XERUBSAk25JVcQ9MkBAY5dSHVDFApCJwn18g5Wfw7KEBy7EnKjvNvGuB2mdwZAQMyBtEkLtNnuhSYtcR9XD3H",
  "key30": "2KYGVQSuyYLVioafy5oWrFpwvuSngAgJLLrNfmAmyV2jc6A7XzrztuAech4Nujdf39wmF6Ma1p7vePcmSb1Ph2EH",
  "key31": "5bArcDvppJCkq2LMgfEHit2Lu19pbLNzXnXxQUKzsZDqhbRQrVyF7dV4R1ULwnJfyhSuctf5QZfUahhpiPQFxyz5"
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
