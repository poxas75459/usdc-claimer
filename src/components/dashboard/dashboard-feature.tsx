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
    "5brfjrGQewnr2AbRQHpa7eMjrtcR2ZdruGB9uaLFvMuKvY3aRy26xHGVAz2sF2Vq361fkrUp4QRKz2wcGRWWfGLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PN6qDHVh9KxofFiy9FfkT5asKdNcgALbyYoUoiCxWBoQy6oVHLzs4W9ahzewVs1jZVQo9cVrammjVzpvc6j7XDR",
  "key1": "T5uYQCneBFpTYk8edxBCDYiH1JeXqtsjeufbyQioWScyzkdxw7CU5ahbbyBTmro5ohgacdfSGeysq7VUetw2hJc",
  "key2": "43emPHPtmibpVZptcJ846pBkMfXdjWnXN6MFLV4LkK3TmHiZGuktmSL3ZZMn4Fjg3pCFFDVRaXjtBKSvPK7y89i",
  "key3": "cRgfBXsiE5SgYni6SQX7H1F8jVofamUMvY3wEeaU2dgguoXuayYiLHrfxP3uVnPsLSmxdQTF5N6AmP51U49aKQU",
  "key4": "27rgWaz3dSGARk4zbLKNtCK8m2SkdBKiD9eUFYFzrMw1XDCngLv13MmrC7jjWK1dw42UFBiW2bqnZ2owbQ5EvMPJ",
  "key5": "4TRjWhh2Bt2DheMc1wZcbxZhFHBFkVJxmPAdhqyKQUuqSyjAPbmK4tmbeZgPymaZfRkWM1LtGYqgP3GBTZhXzdf5",
  "key6": "AYHdQdk8fFTVn3qE2MjE7RZY59t9XHCj3iJ2Aa3jXDJmNyNUWkBeehFb4s24C8EBUDk7sjUUv7gfApRdsq4smy6",
  "key7": "8QNdu4wzWdjZMoRhFL2YsxUkwvWwYt3KeEPKtaA525VqZmqVhEFT4vQexzUv5J2wUiT5drAMx5WCu7uNWZMnic6",
  "key8": "48G2FnfnBmorofJT6mPCvxrsdrMpehTyJfaEiwifzX6kepDcU5epAfmL8aSyQAebmB7xPdSgvu2r4vcYVWvniVTV",
  "key9": "2rDkF8mzyHh7n38kDine15suBRSCPvBnAZkU52Q7wUp1sBpd9xCi3FksM5Rh18woHAg6dWDW9nA1KdVikDrcZ2tc",
  "key10": "3dSkpthJvaWEfq6Anc3mN8FQGpuzyqENF9JHZhSn1u9WmvuCAArqkReZwzGxcEHkNytZF1R6dgWHvFhjmq7u1924",
  "key11": "3WBFfSMZMgo6HfnqCWpuvWeWaXRNTwoxq1rZDR5CHqyQyKUBLy1vTtuVE6ALVtns67Y926Bkh5kkwTmLw29hwAPv",
  "key12": "5ZWBmogpbUvSWMKJkg5mj9t2RPN7umKSYCAB6HGDHb5JBeDS1gffQ2zXnp71ALN7QwXqFCNXFL21isUTQYGZJDV2",
  "key13": "3EJxSEmpxgsreBXTub51HzQTbTPPoeRNu5kCzwdsA1hPewp8n39UnzkUqJ5mEvSCEVYEJcqrdp4N7VqKH2P3o6SK",
  "key14": "5EKjLRcEVE2yNKwEBEVdDj9sNr2LavTnbQWmm6kRuC3jgaS9h27qt9gR5HV75vEyJeVxRDFHwdPf2XPBXzWxU2MB",
  "key15": "2i5La2eosetDxdTta6cZtcU9iub8HnZ8XDCEN3NzHyUgxbGAG3n5CWg7VhkrmSMKLJSupHqHFB2HNdkPJdXnKAFY",
  "key16": "5Nbkiz7h4GKTi7pPnMBf8Xc45x5cVggDoKaTneLuusman1pxwqr8WTkHxoemGcS22KqhUBLH3Bfucq1FtZ81SPUj",
  "key17": "4fUkgXY5u7rEMsWA6tYzY2yXn99GgLat6cYq2NTUuqTLqZrTDkSda7WNhjVkhaxjyJniZx2saaU4MVm1ghf19D9N",
  "key18": "5W9FTLvzLLqc4Su7QxsYmc8S67Av7qapbLmboCEfKo67Ri8KWxEaNqUaGG1iVehjSmNf8AhuvCUzA8K47T6mozjt",
  "key19": "37wBpLxZyFEq44MEw51MWmYNjEgWRciHo3tfxRvB2amqx1z8HN6qhgV5vcAeb7wN1XfgsHLKiSVBWcxLfHHwHDFV",
  "key20": "4sBvy8yUT5z3ucyGRh9hB5yanFhqSXmmcyzmc39bF5CAR1bWC1sScTUHLB5fwp2UT3uEz9UamRWVSFGBLFC8zSUf",
  "key21": "655RNXADuVwazWniGvDn65XrDSgVJR6sjVezBjVxKAeGWn7yqvzryfvQag8oF8KXgCX4bWjcgCDC1t8ggU9HLqjh",
  "key22": "3uYe2Cokkk16b4rA1zPZsM5RhYHb3wbAnP8GAWf5pCoyj4cUw31ErdDEcR9HXUpgjdeie2GqS1PWdWFfjXaWK2Km",
  "key23": "RipUZ6AphtuBbgRg16Z1DPKuHNSaNufqrcc3Paf5YjhsSqdNKSyKWAYPpRZeFVekDukczsB1fXocuRGrQL4Fsm5",
  "key24": "2kphwqWfT6P2wQYNrqvnCvFebbn4KmJ2ii78xZhTXqpDuWTTjXVG8KyaAfyaTUxSo1v6pQdLdBqjTAiMTcBERwQQ"
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
