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
    "4CRMXd9S3snvqQdxUuPr6M5y91jB3jE5QKcnwQDuuQMc8bjsKkn9rtttHTGxCKNoawi8MJ4r9AaCNCEifRmpE8h4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zh3Tq8ikP4CsjcPFrqPq8fqqLsTZWa1QiC1LgndtWZ5a574UJ7ZN4ZFbMWoDYE7mXxxnNLcQ9bNxG47isu858ax",
  "key1": "4UK8ohQywM6bM5gEBanC41WFUmZwEfvDdW83E8SAfW3XadWhHbayGdPfPJU2MYLY4Aqv6CPChs2qeT9qe3qoZmXm",
  "key2": "3EqHWAttxBWdzhXobbWTE3zd6XL9xpJ4iBfcLeBNGP5U1WbXgKWkp8nmH5XqZHcbnvQwnXxKxN58YCnWQN5cSmr5",
  "key3": "472BmpX3Ddw4eM58BF6ooeMrBxBKZDMTeC5vb62faPoSCr217Gub5JwpWSWNNh39ypnBT48z7v6AVVNyUK2nUsFv",
  "key4": "WiBk9RemPHfa6NFfnwm5n6s52CdDxmqUyfm91GBffNcBkFzsdLcLaeTLwTY9uAWJXxaEtabngqZipofwVMT2NnW",
  "key5": "2UrxogvMSVknSthXgew8paFuS8jChrwtFndkBK8mfKJReGtJDbR9a6CYCe42ZAbGgEdgAQEe3AxXd5EVKvFm2EB7",
  "key6": "5MTFhGweUnt2BMXBFa2Th3aGU4MMjyT9YuhcNCTeo87Y5CskRAyn9cddd3DpNd9gEP4R3pFkUjrieDkqKSHvomAJ",
  "key7": "3tAcVGg8Hx6Nog9MfLMmKJVkiueJ3wk2chb293yEzi2fg9QYThs1M8NZrfJWYhtZ97rNzTFzswuCRwDSeVYzNke1",
  "key8": "4Bvm5FuwGvMWKYsQpBM7pbXVgtb7CGoiiRvFWEjuk7DTT2BurPBACZAb8yxiwCkJgsgUYCS8zwM3MGSQThyatZdk",
  "key9": "kXVBxgLhjuXNTPTGHCMXk1Q6qhXRdcf1meEmNZEPE4Kccji1sVqfbFGuUnLDsvZ9ww2bEJDKbzCTFB83bsWuypb",
  "key10": "2jP9hLASJ9Coa9RSQknZRAxak5s5Lnzv4WBMHVkay8d6HfNxtYeSMkDh4NjduEWp1AV48yJtZ7rLDhE741phvMzn",
  "key11": "5BzEtcW5zR8ZHwZQiCVT2PC1J7vW5XG6Bw2Gz9jP9ftVWGbfe7WnCS7SaRMiihLqKeaLEHENQPrEvArKUPH98D63",
  "key12": "bPxaPnMJWS56DpDYCrbJcwuKPVsB1m7fEJYwqf1n8znkzjivyZjthw6NFuK198AngEvpkMJpLYPMp132KXv8EnH",
  "key13": "5PdEqtywbxJEfnhHmGeVfAZfabnBCBRusvwbWQ234zFbWaonJ3HvDFq94xm9SwpAfhWbEiMBPn4DQrFhJTyqLQ7",
  "key14": "62VZquRssuSYC2nz18p2oTwNUKdstR5M2P5EHRfAEYTc62iCdasdquNYh1vZ71Ny2pccCqC142sjNBmsKH72LMVn",
  "key15": "iskQkYLqB6uCom1DL4fYY3yCADqJfQA4XiUGFsqu48xLJteHsaFew8FsNXRfBC7G2arjRi8Wx2DJaEu3JeeeuGN",
  "key16": "2JRndufiSvExePbF119RhaFsLmdcDeeAkqSsr8daVTsUkKpDTaQQNW22qhbpzNArSG5XdDupnHv9h6BW9LtRwUto",
  "key17": "4vSkx9iExtm5WqXqeQBSxGe7qXj5ZgqavNeGGugz6mWnAv2RrnNxwLdESLhmy57mwQv41HwbUBeK4vTgbsG7Ue8C",
  "key18": "5NLNsWNkvS94SzXUwo8M9z1UwjTQUMf58L8K3rs84yucsWhfv5xrMJ5c34PdMXdktDayQPubWtsQCCaABxkdPqvq",
  "key19": "65nr2jVCBeGzSLedE7q8n3jngeuSJP6pMTfh4wes6RvF5Aebd6w6yRsYpw6BpHkVPbh2pj5atWDGdKVmhk7wzVqX",
  "key20": "2aNCJwUBbYAgUM6ZjVCi8yQWHaKFE3a1jUUZjUdpuQcFT37zJj5HFZn7UxF3tExU39fGrDsJQn3VJD13oWX38NGe",
  "key21": "2m4nchfCx7NEKfybTkHTq1UK4soe9YBwT5rkJn8mUpcWxFz2mChJBwfgfVYcw1VwexhLcdZNRchQrQ26vF93V31C",
  "key22": "34jZQCWbxDJCX7X2GKDSKzd7nR9Pe5f3FbNiK1bJvBGkDgWBfKnU6GEpZYhpnH2TpwGAC4JCCDqAiVZ89VQgoeFt",
  "key23": "47q8xY62BEzRxznJKHyRhNCsZoY8fGRgvkUdQT48Dq2viwW7791BDo5XpNUPzKTPFSrfvDP7dcdN5p6M2DgFmmyL",
  "key24": "3QZzBjoS2Ce8f2guXjKQgR41JFQq4So4i8r5aAzGD2CaXSJeazr7SFirMKWb6DXCgvPD5rq1GW2Co9zwRJ7kfB5B",
  "key25": "21UqQgLMJMybVU9f6jHHpKLangEfjQctBTUBp7YzKjwTN6ubr8D29uENjCiuPYj2v7pXHMa5rGhhHQrf3MEhX93L",
  "key26": "3YpGVdCuxXGk3mDMusPxMHLy7FBKbWFyR3gw1tLeivxGiiw3768LbVP5rLpJ37mi8bhA4gjgeWd86We8kt7fzNRt",
  "key27": "k3sQkCnAHqD8c18vaTT9gcd4KPMD98qxq8xXU3oALWgd5wYa2YVk61YuMGLRQYTi4Fd9zHmLkZePFkcmkWicBkY",
  "key28": "5Tr957MLaeuWo5hfBCi3ZNsUsWffV3fsW89pA6RQbMVweEyZgscjLcz6F4CUTc4G5G7DPnkzhEpMEpv9aAxiEdT4",
  "key29": "5ksWZJGPHo5vDTi9qk9LfKVtKSbD6GTMiYZSiUk6mtePNsavUBzKCEphPKdwE4Aoq3nEYD3sr96cgG82DkNAykE",
  "key30": "MhT9eLyoqzuZv4JFBRC2eGehqgE8D6EGSns1d9Xpz6JDehZTBSigNr8kjsSydGxwcR7MbFPmyVTNm15aQz8QPQr"
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
