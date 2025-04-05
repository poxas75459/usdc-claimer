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
    "4KvykyZvSH7XDBGGEyseWA8SY6reHSmoy6E6kMFJhQK5VvVQzhYGEYuNuPSZXeWCo8D3Ds8AvQYKq5e9K6QZdEEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KtTLmuWHJMEmJdEkyY9Tke8gKi1EQvpBSxHbA8SNe3ka64NUMU3GaBLxZ4H5zh3SZTYQGK51A1xyME5JBsc7bmP",
  "key1": "5PjH11hcxhPRygeG8fdeyerjdS6MB4qzyReMi5XdTx9joXHf4RTsF5EX4oL43J3uo38fSBdSrq4umoDMwbWJQcLV",
  "key2": "2pVC3g2RgTyARdLny43w67pC9gAv5FjU7bPL8PiR3iafBGkACTE5bNvXrvjSTVyhr1JY81YEqYEXQVaJsQhki7Mz",
  "key3": "DPvYjdvzirM2aooVD75GpGUiFCquBa4yka7x6jgGByfpQJirD1uYG6WaexTRzbr3XrUbrCJ9geDPUWxhn1mM9hJ",
  "key4": "4LK1sG1z77atrf5ofhXAUUY1WGNWNKDd7RXsBfXH1v3Yzra2vE6vAjHmUYsrSdCbcjGHpCnm6i1R2fhBgfB481nn",
  "key5": "5nMi2yHMyq1G9SQ3pi2uDgaEpK6uWsxb5NWw1sRH5wo27ri21grhWCQJsgVZAxnNRRV6nnmTSKPLAh5TjZss6oej",
  "key6": "3vFnRoSmustJ1KtkvTAFqo75CAxUKS6Rgf9GBxAXLcBo7TFdw7UJbAuMauVHSrz9so2usrnxjUX6kySX5BF7aCH6",
  "key7": "33JUiBoGJU7y7BAo7igD23XaauGdB5jdubCggW3Re6koMv4Yw4SxQG5ZpM72fHC91mmEEW27LHNFUuSuJ2jr5kz",
  "key8": "gEfdAo7UUKyRGSgSeHknJr1xKfV5JDQv8iUcwspD8p4M5xabHPUJJQzHt129SETEJSLAjmW9eddWj3EhLdaLBqX",
  "key9": "2H7jHG7ZXmXJEr3PK4DaMVUedd3c7cjfDjyKBK2vrVm624zFGjS2K9RY1iwXDVQPX3fAmhPNGgqPdnTShg4aBUj8",
  "key10": "3ZNmUKZU5uaNgXRpqk1dGP8iX6v7dYB57wyiB4teU9j9dgJZjf53kb9LGLbLzNuYHVgaPQCiHexzmGnHPPCFJmsQ",
  "key11": "24FyWUkQeE6DfxwQxZzkUsiKcL5NwrEGxrxvyXBbuvd74eznfo9Qv956bGUxJNzszQEf7YAdKMHSrBqBdRfXX17d",
  "key12": "3bpFjhV6dUDj8ZLKjysD3igkbSraPoP5irDHQ4Czk2qnm1kRiKFi3vfdSwDgumvAg7QHAcdzwWDt2MB3KwwrsgKH",
  "key13": "NB4WSqmg392931Lf32ADXe36v1feco9yZ89wVKngxxwW7kD7CzcBCBtvwxpVKAwjVDQv5nR8c6hc2NLCpUuodVT",
  "key14": "3S2SrafEseYLDnEnX8G9hbVxnu339MF8w4qYfGLTQeGYkHgujdBQx5mK9qBHZdiGpH9PytZhJizRKyZCPUnzKHci",
  "key15": "4kpZDx11bk9vFpBQxRu4ZD1tSvE6CKZp1vMum3DqGnCUB2RkBDxVx62qB68A7tSa9AEYVdRqcQw36M5RAd6VLYfY",
  "key16": "3sLBSiXiECJF9PBberzi7eq6ZWXWKbfUJQZrF563aEXjNEUGVddaU1PxxUaVsvvyrumNKPxeXa1ovfiRmXF2LdC2",
  "key17": "64gt9zdpbUM9x4MtHPTc8Csb6GY9go6yreWGrgz7rgNBSvpEQutocsGxTGtDHscHinjQjEx8bamJbzMLQaUjWdmZ",
  "key18": "6iF1WfDG9qN9MX4LmfTLtCJmcwDyknXAvWukgMdxYNh2cPFq1zuhCTPLVxEgxeJAYGWDupnep6psA1ig9bP2zLL",
  "key19": "AMRxb6jcCrMokpRZshjXRDiKA4Xdha4rKpb44egXXfLp49apC7thexo38QgkV1WFBMshDerEDREtkyScJX978ES",
  "key20": "52L2XGQFF2MAVV4h3FL5HTTed74yXzhJkxStzBZJyAfDhxJ7fLU589pHwBfrnFUYjBE2DWY7Wi8BnuwWdU195QmP",
  "key21": "5g1RAv8S9VeaPaxHkBtnYHp32Hidmk6XddgvY49FeN5ViLvs1gQRrVDWgyndv6QU2FPUnhHfEgKYhVhjaEm5zU79",
  "key22": "3QHDaWKNgrM4RfGmWVGJikPxgBPwHj5mjJTiGVetRE9z8z3E1Cpy1wmexdUuYHuUKWNBXZiTgC89HPMz83644W1a",
  "key23": "24N1vss6nbY69kxrJJ9p9s16CwxBJhHZHk5e6u7NsihCUMPwQ6o2RrwuWmoDYZNqznSNHSk8sgGZx2PZLiEeCqu2",
  "key24": "5oQHsfowkC51mNtDvLzN28bWKPJCpBLWup2h6kPKZ6egSEUsBTxZvbTCCmzH59xxTnKB5nh4e6AfvXveNmHeRuys",
  "key25": "497hzfGrHbiZHR7tvf6Dy8TKfw9gQyLzy9oChAA9YWMCDkysg8a7gQAQCF2GW1G5PmBRjeYVMmyfnVupdprJTRWZ",
  "key26": "2RoA2vW6o9DpwDUio7Gtx1THPbQEKug2kQDuSYLURE5VNcxsaRgaFAtLLMDDpX26jiMDXv6Xs3u9zYTnBCKaGwym",
  "key27": "57VBdBsBiduLoZydoS5BF1jfxnuj1vQpUCr8X1vLc3XwiqXjCQrYaCTFxmRhaLYevDKoFsU7TeyF3sugzJ5j4LM4"
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
