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
    "3uisMom3WUWcLgxTC9Nw2xvQujuZzduRy6gr2UX9pHsdCkvF1heSDN46Yyx5241PAgDrSidPoRRt1tdFKtWwzgZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35vkeawvmHjb4BBS44gT4yMhV6dy9gnHjCm1FVZKVgh8pbw53wvtbpRsmUoXc6DDoJsdYVWTCeaEZARBsNBRsb1i",
  "key1": "5zwAZoxuos2W9G83UT9iyJJCA93FHAtHN8fUgzGs94PHmE16PK2QVCBJgfWmV2Me991cx3pE9YKxPAUxudAFSide",
  "key2": "3t9iJZWqH4iAYkEpt493bSb1NfDQQQ4FMCLvkfr4Vgy9bFydr5uvnM22eAnnahAqm5suXSgMQKYEVzeVKkzmjgn4",
  "key3": "2cyPmzE7rR5T1rxr9kyBAcs6x9AZ7mmThNLDY2gjTnoMeK7MT8jtKiYoyc3obe7LHytBDs5KG8SGW7gWpYz2axtG",
  "key4": "6485aRcYMmjN1imCuvbSR3P2bnVPJC4BP9J5sNjX3w6oFeUgisz77EDWSRAu5GRqLsABe9FKWNnPiCQvAayU7A6D",
  "key5": "29AwxKEhP1THLNAZMjsyFaVRb98LcsraBNZ6euUW1ausC6CsSyYqVpgxeso3aqE2dTB18VGiFmt15cmuAeQ69B1q",
  "key6": "23HitR3YrfLB4M6QSufEFGjpS42fBFUgXd8B1JoBL9pDoA6BaQXNbuWKmW8LVanmTybAsmfNjag33hrny5orzMLi",
  "key7": "2epxm9478dw3RMmCRGaFXEiNSrzjfaspHfGxoxozsqMWLTvPEkUnmTKdqxeRhqfPqp2mMBLiSAZMAgwPLdtCZuAu",
  "key8": "5AEZks2jL2X5P1LsoJkxX8DTBnJmN9ZTJskLYdUuUSKsDeVmk7DHnQvsMcErs9EzfWPyZZ1dZJbrpk9wiPmA5CgS",
  "key9": "3ykRJPiVS1KHEHoGMsdYJyP6aaw5JV6jLn8LBBdDfhS1cU5YCdxGXLJCEhX1mVxmBi7Q42QL7hCUY9ZwzGJufQ3x",
  "key10": "3tVWTu8Vj1XBVJFDfbiTok9PmxbFWNU3rQYLcsAFemosQKopi3izvfSZDvXAK8UDs7apRJbiCHrPWqCpyNGvKLQh",
  "key11": "3wLxs1EHM3SQVgRRrDPpJu5EdvemnUZYRuxAL5xT38ripC38oSWroDzyuo52Gmnd96co1SPhrn2coKf75MUqYi6X",
  "key12": "1HN5neWmk9pD3PcSN11V17BxQuuptPt4FWfyDwFUuQCqNLWopqmCSGP1So7LSbCHQgWDu2XxiKcFBsZUX1pfXy6",
  "key13": "3tFkko3ir6MJKRCgrZ9pDB9W8FqvuiCPTZFcCpSACZ6HrLTGfgP4Jn7imTdXQXWLZG4N7C1YVFRJcWwKS6An5sGA",
  "key14": "2CYoyYHDA8KezHnbGrB6PmwjifH24ETBMnMrwZ4aX8u5bFaFgjDiMydiJsbGwpqVWadKdsGaXYCRFsLzfHSGBDkU",
  "key15": "uo6cXJT2kmUtLz2XcHpTrdGPMuTJKLZW6i4ccUckvVismFbyLaXcXvDntKvEU7d3yoY7f84vZ7C8k5VDDRxYEtP",
  "key16": "4dM1STZFjq35fP1vtPskxSUpqoNZtaVmY9jrYnam8VF5FpnCUJaGS7tVtJS8kV19Y56wpYoJaWecZUN1YVhBPSdA",
  "key17": "XN4aS25zaKPzA4sEjme8Pet88U7PmstNonLp3qBSvEtV5Aeid2eKviTZcH7RtnSwoBBUcuhYfxkUXWvm3yNr2ka",
  "key18": "2RW3VJRWjHTsTvRJesEmQApe5foMQWkcFRdFPteiyYFVwc1y3zZunzvyRgGzSHVNDpTSofGyjhneLbvcL7yDY2Z8",
  "key19": "3vDo3naXDcJRMsirHBuh5GBiGckbnoL1u6SLGLEwqXrXuDmhEMcCGBnw6yiYJxBTPe6sFTiwjDDWfjP2G1C95uiY",
  "key20": "2JwuKbPmNXg1JHWgdAhYSRPpdNfVZX43S2SeRR9hj5nH8wg5pvdsBFhQxT2L4XkRxhHsgL7nfpU2sZemAnBYTAZg",
  "key21": "ivgKGu4mYx5JCxaDCfiYvaqqh6dZJyyjpmah8Fx2BrWdXw3aVrGBi25faTxgucqi547CcwBWESbE2MjAdHcYx1f",
  "key22": "3QR9VWNPyp48LLes9NFbFJNLRCBSkTmFxXZFqZFaecDRrudWqgqxMCPTwjCabzX5REnnU8rG9fq2kuPrXhBqzTT7",
  "key23": "R2Heia9QoXJfKfT1ZbhKPpFGepMpjQ37Va4rKnsfttWToHzBJvVNvJCnh93mXCktyL5MFGSvMJU7k63zHnHXFjd",
  "key24": "5HeNeuqriwv9hTzh9NjFxD4qZLMzb7R22FbtSVXHMLjpKEvre47Gx1RTQ662VAmtL1e8KVMpRUrJTvRR4YqQ8TQw",
  "key25": "2bJjmmnGpRzopK6pBmUBW1WSMAkBwvnGGLfZ3HEdAwnKmxGkHz6mJn6C7Ybpxb53bKUq55coxuTJC5B3zNRdszdP",
  "key26": "CGr4WTwkszMLhZ51nccSLvkNavHgeBJUjkf8qF4MqNxCuhrLubh13kczkydkeqhUACDP23dh6cJEK9sgzJBVSPL",
  "key27": "2r4e29WxbnygvvNt8YPooJ6wP2RxAJPa6qwJcen756ZqeA5DuQoeyvFpkWiee6ZAkyudSD5mUes9vFyaptkNdUHS",
  "key28": "3Rz6FNJ7KePpCMUyDVAtYsmc7v1s2h9dFoZvzTV2kHjuhAscrYA3pZajaoyAx9NiMNYFYzA43YuDwYhLJmvaaJKm",
  "key29": "47i6qsGF5buLSWN8BkSu4KasXc3ke7f4mqMEDAKVtBHVjuDim2ME8LYWxw92A9BR1TJ7CdkhcvrkKwDPyGA8Trz8"
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
