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
    "5VdckzioAtQ7WY4GREh2p7pS2S5uz6dJNB1VWeYzVd3KvKsiRt1DGonYvLua6XeZpYe3r4emdvqfvgfY7Qj1TbfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uobnB2sdiL2TWkbYKEbyyPxeTx3LhY9TRhakFnJdtWb3GkDuNzTtDtZA4hh6Au4FpBRmwjSSmp6v5MLmF1dFagN",
  "key1": "52SBQZodfyhKHKaoABuDRMqKk5MKAxV2d33BcYZxi6r57nvYfbrLz1fYc2ceVPzdKbFs9qpccvtKskAqGncUZtvf",
  "key2": "2Sna5QbFJRFLFgobUs1fqRmRh7fDZfSAJ6rrMcMYLFzvCCojaJAiJ8D94joiLP7SCU7kSioHwee1FuUcWSDLJSef",
  "key3": "4onQgi8bTqXMAei7exHxWeHCNuizKnthkDPBhyF9z6w38fg78La1zN1XU2AtmAevwq3vz2oiufUmtNVqnEb1G1v4",
  "key4": "2hEt4YDfSaiHUZAkjN8SiLWvCSryoGQwQWnUG9sdp1k4y9xRfcKxr541YGKMgg6GD1xk91wiUtFzQ3Kn5fcrTx8i",
  "key5": "uWjXsLS4MkJzdApFCsA5RVukWzg9M51JYhFu4nPTGyCRgjJRwxkzhkCP9FhiyNeRdjduu7KSR5K6Ts4aGr5iwow",
  "key6": "2Bnp8mU7JrrA7T9MC7Ft9epxXffaZoB8TPM2wBoK7fyJoccSzAA4FYu96ryXPoMMs7jkgiaXFMpG6u1GXWDWNSDD",
  "key7": "5WtuHgFtxCEoL9MZnAy5CsEEDZ5RG17Unm9JaHGqc7TPjvGME1J3Jh6oLeqDuUHpmygEbgVpo8euir5a3xBCgdkY",
  "key8": "ZLqyme6UKKCYgsF6tHF4n16TybKZmGvGjw95TLg9Surq8KJasnYC58d4z4KjLfU6Nr8JPeRjRw6FRu91Kur7JFr",
  "key9": "4udG5U5Mw3qxKU8upgEP8jpxz1U3uN2e4MZ1E98vr9pG6MfVQT1gLJf3PSEzxP3VFGH3KqoPhKVR8yK6uEpdUukW",
  "key10": "5MBrN2mcP2dHHCRvyJR7R8G9VzmxLL49b1cdqZeEmtJ3XP78pXatCqWrCMgoFMRfiQaZVHPVzSsWL6yveWRZhdu7",
  "key11": "5jvdqMPfc369t7zDSXALzx4vtmtTwcBxTYtPkqtESzsRctuvgfYeFX7kGYzHegYwMrWHuM9F9MXvNHEwU4rV3DWp",
  "key12": "4kpzkuCetqwWmRjw813waJHkqV99UXqT3D6KDMDSmYxWuvp2HypEmqWWw1HW97cpUqtSNtwkY2vi1912WmakqiqK",
  "key13": "3dTgT94wTWridEmwfbxp6cNoLMJsbu9oeJY7cpE4fDmvo6rUxfW79Dr7MEGmf3wDFbFd4m3tRZe6QaX1owVixw7J",
  "key14": "2Lfnv9z4TjmRtbjQFq1xTwRpHoE8gdu7cEurpVEFShL2vWosaQmrNCzzM641pGd82AzqZGCxvfQzknpT8y2YKk8M",
  "key15": "2qRJtPtsScCuPEFkXSicUYoLwnxtYoM37TmTEv9qCQAjwHCpJ2MgNFua2sDoDtq7BkpQNq22ZMDvpdYnqq2x8Gmg",
  "key16": "3Wf5tVrysqSKGaGkzpT9GHM1VCzq6J3MTSAqAPUZ2hswgzZkkFR23jrRcirmaoTSCqaKzZVgQT2sDYGDtAjsVsi2",
  "key17": "5JGk7QyVdCztjnYyHk4JyT5P3mkgmvMd2anhjcwRX1ScNvSSfUPsatjZDCTb47QuuGRfXML2MftdDc9dkqU19dPD",
  "key18": "5cBjUTZqBfcKkufiLJC9MFtT5FLuzaR8dW5ZGtAsMTpXFUgVGN9GU4MAQQAyrmCnQYzePZp7mw7UgBB2QyQ2ENLc",
  "key19": "3Rvg37zn4THMjKNMFEirJ1zsJsjWoivguAy3Qmp97s4AkcKSGFuJUi3goXJEXNYYhnksD64kar1d4tZ15KjerTMi",
  "key20": "2byNAhXsgmLnCbgcPXdNesLKrZxc56xFFBE3QmccXTvyYbYWyQQ5qoN7JiMYXEjfwDrJfRqv9iL3ZyHCqBfesMP8",
  "key21": "4Mc7WPgnnNvWVodxVQj9zwrAe5ZiiPkmuKkvWn7L7EUXvfCLNhWQG2SRyRg3NLM8ri82iH2QfrUsvq4xwefCHeR1",
  "key22": "3VDt7dYEAVXZ5iLKT5nBu9SnHNK7dnPs3GgpPDTHFr1r8haStPVYh81pa2dXb9VaoRyrNw59jcjYce4EXopsXBPx",
  "key23": "52BVnrn2yAYXvuPKdNT5WCCFTpEVU3oqDGCjGk3PapJULQvhUX7djgU7H1w2kD6gSkaWzmJ6YzqoUcem8wC7nHVZ",
  "key24": "3zZQmZ8BYnTuwDHy5SxtTUb86NNoAB2jXAHm3Ub2bfzvG5H8UE19tCh6h46NvLmp7aRHbZSVjiMn3LTBxxtGdNCx",
  "key25": "TiZfp36ATB5viSnCC26Yn19UorXGRxK8bmnncwWngUkMihg3MHYdxKnHzdmX4QJxyAi1sLLbVKNYHdmmqqnYwsM",
  "key26": "5qAGHCfH7uNPVLXuoQBwegdKBfLJ2kX7xNcerueQZpA8ic7bLMAx4N1PRy8sBztLhy3vk686y1NAhLrkFkLPA8oB",
  "key27": "2JW5Csgg5y4yCABC7EbSg2N9A9qMqe5hf7avF1rC1QE2PDMAXt875iKobiqoXvSKG8LkpFP42vW84AQAnXs8y6kh",
  "key28": "4R8eGcapNwVK8cJZruWzUDsJLvrvhUz7eV3VSmuu21qDZFxqjfCEiZ4JsB4hsQ8hbrbPqaqh2s3cXu3dnMNs8uk5",
  "key29": "aXkctFMRV3kBCJTanBKexFeqc9mWKugSxttQW4riroHCxLtK5KXENFKMvw18trSsE5qaP3MSA69ytuRXfSC2aA9",
  "key30": "5siB8tamK8H4ykToLYmRvMLA77D1SAfwWvsbezLhEAzG44GVRCR6hbYVj6TPaGMyu5PAGAMWbonE9S6YVr7XvBPX",
  "key31": "23VcADufoYqamY2YHooSVdkRvwM3KwDThhGzBvCojTdLFtKTeqzrKdnwx8MSJeJnKX1zvBgy3744QWS3nVPuTcNc",
  "key32": "42N3SJ9SRRsSoKiZSuKtcspKTB7K9AEGKMwTkc7ir7gM1HWx6dUByrNd3wjBYx4eBUfeSPyYTNE9MNpAsR8D6rpE",
  "key33": "5H1u84fRucL3vznioViARRAtBThDUfcTWsqayQbL5a6ti9bzWkK8sSW5xCx5FLUYpsVgypUkeyAoFLZVCXQ8EwiH"
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
