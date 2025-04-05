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
    "646hDA3JrtHL88Asc6cHXMpLwAHLjcG4HDbw8eiLGUUko67ZrdppqTFL2PuxKKPZ77wBQZ1RbSorJBWHshZmsnD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k3DsWw9HC2jonEA6EjuaMHCKBkrYrmhzAZ7tkeBy48WXjcKmHxnSgaE3cy512B3fW6gw7mkqhStBDFiVUgVK8HJ",
  "key1": "EKaWuCDD1wkfJ3KG6c7sVu8wSMfEXrgTCvG8e38C2nk15gDhbxMRh9DCMcBjdUzRuEAmXiS9dNHYWu9advXUnWp",
  "key2": "5HpdhcqVsVuUSCH7srgr4m28W3WAeMUMN3tWfjxhCUqSNXSRTWVBJPeb8QHomUgJaorxQxW9q86FkHTqnMLCBFhN",
  "key3": "2ebnBF1txRGfxz4XUmdooXSFQvvpWTDLQoyrTBJYkULFvLukWvnw7fK745oH2rk14oUUQw58QNJY1JMQo97hD8jY",
  "key4": "GjT5cu7XADYZ7FBz9nahcY8vsDBRC6XmJnfKvfak35fv4bdMMxS9n6bLdxetpYeVaLugBksYCY7fK6edhPFFYF8",
  "key5": "4ycdApENLRLtv6P6bwrk8Eiu1yqjQCk3QSwna5JvJLFCgkGhmXUJ9wCC3nh3TtvMm4d7s16LcBW47PS4qv8AqEX5",
  "key6": "36wBjKkhWwe8hiypjaLoxumjLv8ngjKfuYjCthHrUkvULZQFimwJ1usDdArP14hVkcAuQ2CEtYYpisDHvyN7oKdf",
  "key7": "2BxGDWVaGXNdnqZyPfPkiBLfEFWdjveEx5MCEzBRmTBLdxtoGJ9SGNFtd23HM7qeAVrNMcgm1ANgZtG1mNbz9e4",
  "key8": "44tARVsNDJdJbz7BQnYtxrrzTEC6Bsdxg2ooMmhAuw8hUg9udSr57fimh3b4TGc45ucHJ4xr3sqdhL9Z5sYad3CR",
  "key9": "3C4C4U5LUteoWoVRWQ6UXB6isoJvqEJz9RWjQj8wEhqbiMwqeWTqa1rVZeoDUi3rbGF3bj56nyUUVWMRujKzVg3j",
  "key10": "4b6Cjuwjshb6vh2gHAmm1c44CVrbSJq4mHbWCpuDWnZAhciee7jn2GCvfayYb3bn2iDFq55w2F5msUmg4AELbJr7",
  "key11": "5WvFURtHRMoZh5818Ni8ykH6XJCDLkBQFb4FThRxud7Z3bEEkxeFD9BbM3SWZhSSx11WNobB1EuZ6qP6vvpDidNz",
  "key12": "3L6zph7EndiWqtUHGiBCM92Dmotu4onCpqExT5NBSc15Jrywwv7UkVowhdmrDAY6HpWe23SKGmrZCYibkrPnaq1t",
  "key13": "2td1V9cgderhmR3Gpv5cVeTjZGufRk33vus7v1h9XTvQzz6mdyUqmHjftFnV9kg2ggHepnNTdqd1CjFS2Sq2uGGp",
  "key14": "65LWos3FCgMjgMCpLZN75gNBPkmZXFLXShttrMfuiBwpheyioSVooG3gtmnDco3BEjL98ijgcEgGApX1gD1fLmsR",
  "key15": "38yVEmxcVQUW6mVgBeLh3eD95Pkxw8VoLhnbY8ZzubE1X6qZz9SMquU4nKDT9EL2XSzDxwUqjS51qeXPe2G5xcNf",
  "key16": "5Q5dLw4xxbrgscEoFZUTdSGUZngoXXuksr58jDasRnJfMFXiFQZzea2ZPg9skSDwy9yPafwoFoTfYb1q5NdgTVk4",
  "key17": "j7M7jnSTdRZg9tmDLpXSyg7LHuTWrnhmQg5zZdNaW77NzvB3X4BwF8DRkr6q5SbQ8D1fGoFk6Aq3MYd8t2MqN8v",
  "key18": "dXXKcpcWYeBL99zVvNNAxnCYqpWxqaJZ4CvszJM1Q6Hxos68iSpehcD12YzAiFx6o2yqho79piKY9GMUtFrPrsV",
  "key19": "4eo3dSAff7SP97aF8dyQ48XJ5W8LkrkPgfkGuEMDHtswi24V3v38HDJN4kCrQz7JuryF9dVAZaEcTzyvG4HMcjWE",
  "key20": "38v8E8NENL9ibsvzFJPNLv7JLZBn6pJsPy9URTJiLk9ZbKnziZfygTM7n92RnsyY2dX7F2bNpba9H9dssZyAG2jF",
  "key21": "4AiGXmd2rFBcoZvtM2sUJYLZdHM2qu4dWwLBQbQrjPq6fDTM2gRJsj3wV8AB749qVZJAQ45vokyRWMAoLAKBH53p",
  "key22": "32NMGcexpiwyF8SRXMNNR2G96UCFLChyiAph7xEt63VLhJoiPELyG2jQAZvNZjqjrmiRAq3unkZJ4sQh7SbfWCuP",
  "key23": "3oNm773mmWimGU4vokkGsZXjmo6bLZSx57LMJPNAUw4sdLxJuJcYxsjjPVoE169HFTAohe4VndcLFaarD4T6xXYL",
  "key24": "3Ct1R1LH2BYmfAwesR6qXUxiEW1JMmWqcL1puCuxLWqPRH2v8dNHneTLcBucZYP7QcxBLFLgUxZDny6EdjorX7eJ",
  "key25": "4JGH9TH8AxuStKGKceE8TNcS4iiYLDf3jDUhQKm8V5dKcR9RKnzxg4mFojFZDCnzGifTV4kWDmXeKmZS5Z2PoC52",
  "key26": "366zETY8QhQrZgZKCQVbiYWoE7cd7yfi8mjQmRTGjqNiMunw3que5oFYGumorQMHSuHAXg6w3TqPS5fPMeY2MHmT",
  "key27": "5UwDzdhaPEC3ZQjfuJTfbH2fTKWmmTuBViA2QUsvPiJcT2MDZ7ZzmtqUoirc4YjRhT8zHjFcZjY3mgzUQEguwhV5",
  "key28": "2HQKSzGPRewzFypEqqRT48jx9FH1MMnHr466z3VBFnh7GXWZpRQsgkTpGH6QpiPZh3BhdRn25ZXPxf1t1RcSxrSZ",
  "key29": "383QP6Ffj9Nb3CiFAUjxgNQ6sMk6DP4AJUQo8TKQfSt4JuQkD4ymLRpgFAkD6JEBpCDddY4CHXFW9sPkihNzLBf8",
  "key30": "35UnGLGWCMQaaA7Fz7mf2GneMeHWvgSGHPiAP34gmedKz1G1ZFgifXGKmpFwV9sJEppGX5gocLKN8iXw6z2jR1b4",
  "key31": "2gBpQVh8W6GaKNPVSbMuCEqhLWr6wFtcKQF5GMZFDy2Stki3y7Sb7MvN2jgybn3TF9Ms5wphaWtvCLkguouZeJKv",
  "key32": "4gr3Q3Cnz2uKEzc6DDzFgyR5FVTKwDhLmRz8VwWLDkyWVcjULWNUxW8GYdjnaoDrqAbqUoZT9pKSTCTvG22XCuZm"
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
