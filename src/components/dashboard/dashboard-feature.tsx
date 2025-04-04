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
    "qp7uzHpv33xfrk3bqYTjGr2casGV8hxyDytP2EqGEAoWAZBuMRfhVG1VA6sk72MC2oUVrUmTuqMJnN43rtmNaJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "615btM1B5Svho8mdV1TaJDYmRaBqn2FCJRZhkXHvaX3QvEcXrahg9qpRCcHuYbX1i44WhJKGLh7rw169AxDTgb17",
  "key1": "4d2m4JDA7Gc544pSkegJxLd7eJzubeVYBELwabZrM1w49Sc2WNhka3RzoPWGm9CzB8F1HTrDuJpt5heeZ825hQqm",
  "key2": "2AhvLMh2NqU1k9btcXG7wxyPG5dqpgutWDLKTekg8aGZUYQgS8H5UbpMuboHbB4JCGTNuL3epQbzisf9B1HUFdjt",
  "key3": "2zuCQ85xmG4mdbQx71zNfwJ7psEHpoBTPn8QWZPG15RLuaCkEaE6RcgL5uEWZ9pDz9H2hJLreQ5MNy6W1uhiKHuT",
  "key4": "5M82nC1KP52bGuvKuqSVG19HGHDRP1hWEyMZzjPhtUgEYzoxMDrwHEyfMjDwDo6qABychX7JMf7J3be67izhGHqy",
  "key5": "DwyRHFGU9vzpFoEAvA2tzo4NBASDtmvQpbFjaSr7hazonKDCfJJdx9TTjBwUMA1nUjqFpZcysvdbpE5NvHuv5DS",
  "key6": "3zFbB7P72CqWLchDRFJyajW352phAKLgdZWyVXV8cSh9PLNRS7yAVviWKESmuv8PHRyMsTdP2ioQax769Qm54GAh",
  "key7": "3PrZCiLaFHAktmKPTy5ZXoL6tA3DjMXNgXAAz2hcPQx3ARJxYXLDkXH7KfJ9vPc2xy9Ke3iWJzbzaFyqmdFTKVG8",
  "key8": "3KZMmpkQyDkjPDNdYk924XuQkVPMgXvNgriqXT4jgmoccLpNMsBVeGqLBpHzM9PPAiPR95fd4PbdxhmCoJ2eCFk2",
  "key9": "62dZT3QgjM5eEPQzcELt6diVFPbLmCuGDxKUsFyToiXNN2x2WMES9UhKmBrKNBPtnhmFYa1WfTWLnh8FxjdkpKWt",
  "key10": "Qg7TBU12Q22rszpucMxURWx2s2GjUmyFocNL8NTVzrQKXgoCAiRNSdv2oPTrxn9r8guTVhDyuRBMNnMo56xk2Mt",
  "key11": "4UgQXtNi5mcF5orSu7zuydV1rZdAGfF4ghJC9n8ajZWiv2dTbNZ2h3B7r4gw5NFsPmGmjwE9yyNnay78ZiWmTqe2",
  "key12": "28rnjFLxUsLwwWkaYf3oyeeVGvPJ3jWHseskvj3Wkir9fimkDfAVDy2VjwRwBZyKbYHQzoV11cbmSCyt6S5SCXrr",
  "key13": "4cyx9qmRZzPKSQwnEjiQtDec1FVXGVj2B89JERPZWgkkvhLm5NkDwdFd2U6TatcjKjeF76649416w69FfhQGLDgo",
  "key14": "42gSL32UTDSBvb2dCv4CSbnyWCXPJf4xz9DYXDnnJDY773h4yCYrGfajBb1DPd8K7PkDr7kpmQXvcnwy4AGcq9j7",
  "key15": "3wash9NJqWwszqyCbPw5FohVwnw5Yq3YG8PwxqQmuFT6CAkjBHBfYLkebRq7LzHbD5j8cAMu8WdPr6nisEWrMt8s",
  "key16": "4A3Ak787b3TLZh4HqRmoKWPwSLMgkZ4kf1axxytxEvmkwSHZmwtsvx8B1SycWstYkdEqVd8wapySUQBsL43gKFff",
  "key17": "5j8ALitZjH445gkDzeAKJAs5GRRm8bisv6JGtmA2mfujZFgx2h473mth1gbb88f5N82kzYgsTWbE4UXTH8QdNRqr",
  "key18": "2KdAvdoUcXfEUnBThSws93WasisYJ5kUY9az8JePFZRMpmafsjrnhiYbrjqiumYzaz9EpQoghzXdZVZZqDAEhXTP",
  "key19": "2DrpvB821WVqT2Ts5DwDBjsV7KWpe1ec69jo1KsFrHhTSo8iauxDEFTtT3hYRfbnnUc8hsX1LmZAK7BPpmJieeGb",
  "key20": "54jPxpJYXc4VJtmjCL76Taf9xRG6JuW98eJ2h65tGta85Uui1SwehasX13NczQzvqqABrta3EC6au8CdtMELD4EX",
  "key21": "3feoeG5eB2mACbshesb4xRwJW359HgdB8wHw7Wm3MuTa2gheRXHE6GM6bjbiYV1YxYVRdTi37x9nE8rND3fBFrDh",
  "key22": "3JMTbwKCnohLFChsFtA6r7a9m1m4rLi3Y2EJBpzndv5Eurs7NidFS9YK3sDWxRhi7eEv4HyGFcbpLqFLRJTUrdgs",
  "key23": "64GLSfwj6GjhcPoYDYDVELxGXcNmAfaudVL3Us9PFtrWEBxt2ERm4SKtri49CcHTuUjj29hGpKrxZHLBe2ZKApYx",
  "key24": "6xbWV6wgujbmk65a7PvqSF2Nhfsker9fAk3KuTMsmqcybkx7bkba7mJCDNqf49mJPLTfCU5BNoMVrqrokMhNrm3",
  "key25": "48WiZkHdxyKL9rUTmfFA6xbEEpXuYDyeBnXnwfqekCjkW2xo5zWHXAuSATEL6cVDn275iJTtuRYGGRPcfNjtpX1L",
  "key26": "XM7oorQoinJoX3aiANTPxCksiPU3XT41BMnyDm86MYdNZmRkMHeMzdxStSbzkiKEqAXvCGRPeYT9oVFLzbt2A3r",
  "key27": "2XNnbgAZEKLtDBVvg4SMS8c2dqF1CbJ9FJmqNPDMRD58CG2W2QzTFYqhNhhdN8BKFcm6Bx9sRygPofbNmZhEC879",
  "key28": "4qDWfbERA8wUXvok6xVf5oA6wG3hdK6wAn25s5y3umVckFVmragcvit7HLqdoXq52B2dAtMQX4vBnXiK56Y96YET",
  "key29": "4FnWSf2tpaR2ANMKbCYJ1HMPmEquV6svLHx6JFMMTTBfTRsDHYoCMbbPgAhC2CwMBmfqDthR3YkoNCEmaKwXkqyG",
  "key30": "LCj7Su8hjdLy9gpXCyJvzxjk1nPcbYff1ducV8hcs83x5PSyCwS7zsLou7aHETsNoejqUjdSfK8VeQyfGNedKJM"
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
