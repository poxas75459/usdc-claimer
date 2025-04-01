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
    "62PCBZHehnqvN3yX8zjgUprHSh1t5Xt8f9dvyFQMkTz73fCdpBZFdFWtrML17RbQLbfaRhTnY1Wudoh5N1kezwqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h43ahbJGieeXKZTVfwrE5SoDr5DFkAf6rVZEyQvSNs2YCAYPxGaavNMvDN8WYj1b9bG7myXGivaguVYaq2EETf4",
  "key1": "2zCPYcKqugHnAsE5fPEUTTSxtUJtEr7ar9JtGTMFhhPbrDhg9ni8HVRAE2LAmYqZuFswVS8yMZZ94j7qtMRCbEG6",
  "key2": "4hhNuhoY4DU9UUTV1kcGdTefA9jPUaNGQ17ojnnE18RptwSZRop6WnND8oryxpPpDNoRmiHVrwYZ2uLanztg9GJp",
  "key3": "4TtCg46VLYHbP1zmiqm2Ef6h1kfj6ubWKW6ZAwR42yTx1axMKxqFBivSs34UdGNasDQnxxa5uaZuMgFTBkQ1fSpA",
  "key4": "3dhhh8dBJSkzq9G2zT35Rhau322PamTym6de7GP63EucscMNiaH6TqFgwWUBqmVB7WRs7uo8NdQckeCvgAWBVrL3",
  "key5": "52WqfSx4XDxuLqQ5bBNqkBSvLDZkz8FVGUUMvgjyWYRscQHALpB3bmf3qSQA7sfY2oZcPxy6VPYNSGB9CCiknrsm",
  "key6": "26D3cZyTLMHMuy7tGAaGCobCUVSh2HpnFsdfSMU39R75ybU7xDFnPES7UfpQNgHBhjJgxefDVv5kSLqRUiNASmj1",
  "key7": "AhNwFzu25c4RiwESvm6FoaYJBzkacn6Pw5EsR85mGnWchcztQRsxridU58UnvUAZxcgzdhBSvioimEPCe1gg9KR",
  "key8": "51imTZMDRjAqdLW2sfVY76z3cwp5ttzgpVgN4jwgALmEjunUZcrkdiSBtMX3ttC5d5GMMPZRP7kgV44L7UdCNkEZ",
  "key9": "2BNk3AuATQkUmWRErcSHLuvqJwqXPL1mhYFAgmf5JQKonGF8Uwg7GLHiLWqm6JDYn8UkEUJZfJkiuBknF2AE476w",
  "key10": "Ysw7hbNwyUgpNe7nnkw4jdQ2LVo4zLaUWeKoHRGEAkhVcX8tMnXRB9CKYYQWVkUc94VXCkViaU2CU8jAJm6bbwb",
  "key11": "2NzqH2dsgDQZUW8RtZQ8kZiXmGT2X4ZyGYHu3AEVGYCQottV9Zkp7Rww3eC5Rvwg7BrzTnNMfDkVVDopUAqiDCys",
  "key12": "TeGyNzWZcUy8ZzfUvofi1KB4ZQjqE5ds6tYHRb27Edw7xA6c3ywABxnt6R7aKnA9HpFL8jt644pCKfw2jiRbSCz",
  "key13": "53AEqecAqnphSsEpjCDZVqeKkR2mRYDKbLqXn47e8ThJicbsQF3By7skozcmApCvimKXdPE26oSfjtYUcthofqFo",
  "key14": "4P3fWy8sqiCYZuMM9ue7hX4fVfZmx2K5omFL6yLnMjFCuR2248UCNXnyPm7AXpe8DhMDsLfzR2jTfAcvs7gs8Nas",
  "key15": "5Z3tTQrDiQXajKKHe11n8B6E1h5g2ciLY7nEqVauPF1mvzCJtSHfCe9nnEQXvrQFbk34PW3ngd4a81FeNs6mbdHR",
  "key16": "2cYpf7MLZX4su91qjEUqQqFAD59QiCVxh1Zoj2G7fpXYDbxLnD4xAbVm3AzX1FCKRnph3nHhjNdqGmtNQqtDQKqL",
  "key17": "L2JjqJZgrdaen3T9wdf6QrQ48a2pxuVVgMncra6ihi6frXaZFFgBnEHKnmr1vBRZ2CDj1mPqfRcFg7wH2NUKCvo",
  "key18": "5KF3Zwxh6jry7b3SxAGee5PcddsPgawppYMoybFL9bQcy8HDJTeHw4w7DBLE8iqReFFiAPkoNwDB5qq73VPLGfNK",
  "key19": "2vQZbADkzCDTj87smAipZCDfk8haDMpucCPo5EEbRczqVnu9wbMZU7Fyi6wFbM38EG9tjzK9Dsi7GjSiKuSSK7B1",
  "key20": "4E3YzNLR7pke1PNZr8KJQne4QFYqziRUTe7ApN1ggJfEgcfrWowiGKydL2YjmtLVLoARZP3xQEgzY5rtUxj6L9FF",
  "key21": "4uN7yXb5C67k4eMVSLiZuffyaM9ZvsyeRJ31MpUu6K6ix1ndqDEVjD7kpFw3ZxfwvoxkqLKsPGmEogvQ2hVCopd2",
  "key22": "ywtEkp6Dgh5nbUPhE9VBt137KoA11vwiGHemqDJVr7PJbvNjHMFULQwj1Xxk3SgpBBSRPSNoDpRqgssPs6Ydbmh",
  "key23": "a4LQzkaZFhiUuoZar1DhqLY4PJ6cLKS4PMtZw6VLWtBHhRRdb7uH1HQHa7U1wtDkMPrij4WCUdsvdeDBxvhTRg6",
  "key24": "RHs4DXgyMHctv3XfjbyG3dKU22gxmZ7sHdQ7Q1adUa528RPEJxQeLHH4MhQvZFgP8soL3GzFPh4ghSP65WWqH2Y",
  "key25": "5xnN9HwxDPdNGn7in7p2pQTwGekAufij161etVupCA4nuvbeYxaD5RvHe9aWeyRfU6jq25tMK2DbWDMhxv3gPiRw",
  "key26": "2r3YdQAg2itTf7Z3eMiqoRK9NE37Nz8XB6r94SHHD6ma8q2hpCFjcBkumEZco2rizzHL7DMk7sQyXGd6CtSgTBjg",
  "key27": "365W3G9FZNhBaxXgRggzeWD1SXys5me8GtnA78bBh3QWM5D7NV5cSmfb9N79UFNpWQw1EJUDzMA2yeQaWqThgUmW",
  "key28": "5wpWvds8oYrBvbNTJ1SVktZfP6pJnPia6jfUXG3VHdYH4xkV36sx1LyeZfzobo2ZR1QcaiVAXQYAbS6K8k4UFQY7",
  "key29": "3HqRBxEjRDi8hY18VAdZkUKcXf96VfMGUFjmFn4x7KRoJMACca2A1Tb1kQeCRaAKqciqkEnQp9U3ZrhJ29gG2CoS",
  "key30": "42JWXkwNWazXStr2vxbfz4fDd3Gcp6Caz7bbicQj9hUe2o6tHsGzEXgq4Yb2BwWkRcrQbriWwYpnUFapz4erHB5D",
  "key31": "3HMtL2u4hXMThVyvVBeYecjU811aJT6FUQn8HRiQzGhRvveqDs4tJmGVi7J1ijbzLZJX2RG7Bjq75Bk4TLE9opW7",
  "key32": "5cxtA7YHxVfuWWpCVBFRr9StMtEMCRShgK4sM3EykV4jSDzRGADrwjBj8eW2Mgb6KLbSRCCQRaV9dWn4LxQ4rtR5",
  "key33": "3nC1zGFRWZbqUz9dzjkTDhHVekRAZ5hFVzAtvrX7QYnQfCvgkvbYPi2SBMHsT53c1wnxRyGLmRcrxZXrAymBMSh4"
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
