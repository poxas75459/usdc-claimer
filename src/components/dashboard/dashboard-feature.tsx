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
    "4qJSZzRD2Gw79gRVqKkHz9LLSrVyDPn8EEP723N9wmKh4jSG6cFPuMJWpX5oTntCCw4daHcLcLqtJmXnzevZ4jw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KfRbiF998enkYqxLqPtXc3QM9ZH3vMJb4nrquJSCxELKTamxZtXhC1oraKmwJSa58Mi2M9g7guirdVyAXhPcogL",
  "key1": "4VytB79c4JWJPebq12wVQmyWLiCwb7WtYsSDoNB7Dy1jj7LK1Lr5F2RTSNwXKx4Kzw3VLYsppsFcD8KH34E51fxd",
  "key2": "LNsvVwpG6YXdPQMBAkHeBuB73uRoomBdnupBo8Mr7AUwFQWV7D9P1BZp6upJsg4tMgrxhfqevDjwCRbgN1Ar9p9",
  "key3": "5v4GHAbUTfrUszMuSWbTxTroUeVAHTnWopn14M4PFdcfdsjgaop4LWQHS99ADZzVYRey6rx7rXJhsfhwcv9ci9gy",
  "key4": "518RL95jGHxAiXcHvRuhqUVniKbXpztx9jPcWfxTvuRZ1qRBCzxAbdVgyfdJLEuETH5XS8DkBZFpP6qV7ak2z2ny",
  "key5": "62y4BSvhxNXFAppftjap2aG6GuXRSF7iZkUsK2rUAuZ9rMDzNVFMKqWdM4Zqe4f47Ar9bQxQPsWN3i4dN4vZxacT",
  "key6": "4BG4GcPp5HjZwUqCW4a9gRAzMY5rEuEZXansvjp6xM3mNCNB9HA8p7yoZXhRCLsWFgrrfKDPVAtffEQWJrHcj17U",
  "key7": "4p8Cakqn4PA1EM7xHDMRJxL49UUoUbGu4pvYvX7z8XQZaekw977NEUfTNsmyQ4z6CNAwQLbW47E7LhTuD2Ns6Wr2",
  "key8": "32hwkzJqfcsVhpFePvzp4Aa8pENAecbJN2t2vJWLch593yjzUYrJLdBNvnSuNWmm7XYzCCm3KxZQsXt8iUfRigmQ",
  "key9": "2hKHpKRzuRiGfYwKL1GHCdVGXuzntUvSxkAScdP9UAuqP6J9HzbzFPTMc3CztJMCVR2pNiWYNrt3ivuwJyVqC44G",
  "key10": "4XRXaxVi2kpH26Mf1nJnPAiXoXr75vhdmuNfetukwCDzce76c6m87sTYCmZnf49y3Fwh9bKs1rKTMzxXszynErCz",
  "key11": "4WjCi4C2PtrzfQgWjmr37bdfghxHfvGG6bGZJ4TZD4CAEP7QmHJqv4UpJxtanqXf7mX4A389MUywiKUCCE8tXAov",
  "key12": "3T41JmT1EV1j9uB5dUozvpXyo131jSFsFwa2d77mtQW7kHtAsMq1pqLA6HqSTR6v1Tm5eh93xSwB3V1DamBL6UrS",
  "key13": "37F5So7ug18MaHeZHJoFoNBHZCMyQxY9Sf37wQyfNQLms1Seaunws27fD1BfcjGBD2tf7ZXiZzDbZ1gB56NM5s2p",
  "key14": "3Piap2Q3horkpKFLhKQhithZaANzbgp1cd2udXSHAFnAXqHWiNMLKPZJoxBjWXfCMdWRKDq39ZTmgCy2fG8U2oQq",
  "key15": "2n5LCdhZnVZBeTV8JUmvYaohET3znUDYcyKAHbTj7om911AZi3JgfG2q7qvMbfE9hTTzbBE8Pp1XvAz5gp1uQLFF",
  "key16": "5Ecq432YQHZD5dvZLmKjyksUNjGLumGncBdHCymqunaY7xbh3MQ3wtNEjmDmGvx3J7D42frGqsu52imH1rLEnxUv",
  "key17": "57pfd16vZqQWp4eHD2Vv4PsJiprjeA6ZE4WLcR9L3pxHkbjM5HAnXaZdjoGuMFeVvYdjuivTFMQDLHYWE8p6SrvR",
  "key18": "p7Z9LYuAgeY8cDsyoZZJMstYNdF2UPXCAMc2AwMJkc6iyvPtz5oqYRERahhiSyYZXXVPKS5TV4odPYEpqk6RRTQ",
  "key19": "3ttoMi2ZdBYGQC6UQ3mToT4JLA5c25XUvGQtjWVRnP22oGCT5PHuzZwjxVB2u8p3h6UsqEvKusVFgVHp6s9dHZMX",
  "key20": "5VW2JUMXWd3D1wsNyHx3Lmmexgzdg42s6eb1Q7JLCZXg2YVFYZfJf9Fr3qDyvY61tDMXrVWSy6XVqwEQezQwZusw",
  "key21": "5ES5o2HuvVofQqkfnoKbtvC2wMNBqaCvG9wN3ukP68ynpdRedNiiN2UrvCc56AKVYLWh5GkvYLUX9Fgf7njhxTGZ",
  "key22": "3Bs3Y5Rz88Q5Wgg3ujGSbsByukbzteLap9S3SpmYkvVMYkxtzJmq36LCfSyQ4QinwoQmBvPGLgJEfBGK74XTnkLt",
  "key23": "2a8bfKoCK5WuK6arPXL4zhc7DYBqZ2hs8j2YpfjLvmeL3vQAT6fPvjE1Y6hnXzii3LfQvAPtkmRBbZMtF3cFGt5T",
  "key24": "4L4JM3jDv8vCe1i6oPY8oMF3SxvCHPKkVLFuSpTkWAFzA2Y69xhbN8jmf3sstL8675LF72pWoPYoAfB7WfjbbN8T",
  "key25": "HLgvPCUt5DMxRUZn7euesQHLK36kJ8WzYpwAABmnk9NMYBfFoJWeoYBGcmpdWK685xwrmLvecb7riGFY1GXnKtR",
  "key26": "4dZU5zB2oQzS42WUpzd9SkaKCWSyjz5u5d3gP9nRCNjQDSVzzQHJ41jUmGPAkYPdAy63DydgmxppjajyMpPJD4R6",
  "key27": "tf3GNcQefgyV6VQKpsSuZnNE56aBiRCzGPQBptqchtd8qHaKMHF4Ua62oLJtLq6dnXxv5KXmC2qpqsnP9AHZ7CJ",
  "key28": "44BbzomYfwhfrm5gqApU9HtQsCj8T6NwZdCNHpDhZbUNkxRRFvms8miwPweBsALQbLwayokgSqXYvSCW1npGe53S",
  "key29": "26fHZEuHjxhYu66rZAkRrz5v5P4azMXECYcZ8HwQ1R1X4YDiV8TyDmx98nCehdJQ4bjAjiYEsq7Rwww4wNb64TS8",
  "key30": "3Yk9cmQGVVJjtjFx8nbqQHArY5gXzpds4VqQoH59mMWEwm2vwAkQM7QtASs2pGxJfczZjAfpx3qg3VtvKG7aoknZ",
  "key31": "2FxdRFEVjjwGTHP192wY14Phv8AfuUG9G6bM7YDAva3cBno72bXqrVaMWdUr2gbkyCVRmGRFhYix5X1acD12VkVg",
  "key32": "3NSP8xQy2ogc7eg4swEcMZk5HbgF6Mz5SSjCBtfTHTodLxBKezDG7HzP3iV7gr6nZvtNU2peMVfDNqF8M2oyucfK",
  "key33": "649BcMUCLEMRYq8qBbASYA2Jh13wmRKTvotSgbRWyxLzW7Gt3CxPmzz6hWeGyJJXToFQdBhvZXWnQ8GpNf9fv2CH",
  "key34": "35e3VQNMZ3dE2icxxWg714Y16MEwDSZmYT2mUhz4x3CHswLRiyEMeQ6Wkyp9eHUifZPRNpqK67vhAzf2QKf6ZvqF",
  "key35": "37KnKShPsHDvA9yjK1CAsArMAmPDDKQ7orAmu3d2JxbkZ8JmzEpeCbMsGtBVFsjZk8CAfLPFgjke41tgd2xBZPnV",
  "key36": "8SMH6WNgPy9cxA3C8cKGGfsJa49MrcWrpXrcgPRtjmgTDLDtXk2qzAnaytPjotrScHGV57BDwGc8iN6zehyLcNq",
  "key37": "4wkEFVqBrZXsDdQw4ynhWBURLBEubjeSDkPgMsV2ZuUyueEepwCQsE54gmAbwLpSthMEUkxc3VNPsC7gSJKyE98w",
  "key38": "5FpEHpMHKdm6oNJ2QWLMPFXx1pRbjbh7Qjmj3XmEaJQMejA6PARYhS3oMoJ18zoK8XxfxwteFpeitqAC9ABhePPx",
  "key39": "5W4fDtXVef72x5KTbWAvMD29LGXhDnH9UVkSRPhuGpXrqY3WxL3wwjbgHFvWFuUgrRaTc23zbhLBCQ333Wae7MxM",
  "key40": "3JG9Tq5ZvZZy2FDW4kLtCpJuT6GjKCNNgmxgNmKL1ZeatD5hzGxd9d3SAbyYCfYML386c7eQ2dxYxa1CK1iLzG18"
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
