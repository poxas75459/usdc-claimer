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
    "5dUiUcxXBWSG9DxfdJMr41rZSxMyHNfTphFUr8aeGt3bnebJ4tokE1iqHxULhrdxMJWh5GDTUtedVdcpa9FxBvwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q5QLWDpEceL6dYoPtgjJt9sijJvb49qPXzvSTvDrZVcJB4xkgbeKEY3F69xy2QGAGRg7oZQ6Xd9W4sUKD4LpR3P",
  "key1": "5QBbRnrjcASFYZTu3zTvRnt2GzpAyHADW1LjycYz4kGXggEzoe29WRav5Uq4nuhNxeVRFd678HwJFfSEh5PpkBtc",
  "key2": "uU41r4dhcsbWmUxrgoekby6pYrjBLPAuqSDXiYXtw3Fppr9g15SuKjpJzF2MXPoyZzQhGongPpdsCAYm31SuxYc",
  "key3": "2JRF1sZpnMhSBCNdS9XRGtfhmBthuSfVmjhiocPwjkPtdtTh2K56RKWUbTTFgSn9k7pxAsBqsg3owdUAS5vFAfL5",
  "key4": "2BeSQyXpC87kewPJx11eDMzsAk4gaamvg4Vzsfa5GqmsorALu3wWPm9mm133RRcRuyAC4ZfJKFQZ5H31Sbg3AD8i",
  "key5": "vShC6nBaz5V7qkARLE4WYWxtXCNU3R3uNtynDabCmFJh92op23UJXgdvvkcudKfqPYy8igmeDdQspVGRV3zczJ2",
  "key6": "3b7iPBoK43oGRkoiEatjw44EUhSXfu6PpWypgRMV7JbsCGwX2TZNeSyqqyaERF5fZ3GbuGuvLbGkB6KAhJJgxjCz",
  "key7": "3rwdg7eZa4mgk46bvfP4zymBeEVWhFKQV2oXnJbFfPq3NA52bddjwFioqwMMNFi7X3uEd9ZsKYzoEABMVEdYSN5x",
  "key8": "wGUCA5jd74Rcs338AHXnpUfaN4a1sneKGgvooU61P8dxwFm3uxkfPigvwSzE2fqEifRvyfHUt4f5C4Z8dTdNyNU",
  "key9": "DkwCWcQUNgGiE1T3gufiG3kQx5xgcLbND2MTzxmQD5BVrAeK86GD6bQJTCg8ryreJPRdTNNDL7EgVtWD2rqRYNd",
  "key10": "1aZVJWPkmTg9Wndtqnhu6kTo7X6c5MRt27vCAYgYpDpTqRoLSGP55dYzEGAueQpFEuXWtXp4aaqwKHFaYiwVVii",
  "key11": "66Qv8DWQsKG3LFXVdomLkhxiHrg9tf7w2j9kUNLVw72oE3dGiN9UYFrC9hfYh5EaWkZ4pYpMxkXURYM2gVZwigkL",
  "key12": "4w5Fh4jixJYHeyP6RiZq67Q7oSGvzKmFNRBoKRRrZNwD7n4A16cVKW9jtR6k73MYUVX84tCXFxJmfU6ebCG9R367",
  "key13": "6EMrCHCcS6MpmZwrTp4gqi1URaSNLdX4zCL3DgZUGsTZExu4u1F37PUGsr5qXRUwinJ8RBumzoWDM3TYsm9AFyn",
  "key14": "3tAWmPmMxnKvdapvDQD4ySnDyueduGkfsaHM4GT3tHmGTp9JcuovbA6Xt9GFBFNdwXjn1VmaqQAGX6ZUGeYEm7aR",
  "key15": "3DQ6jVa3KYw9ZRjxn7jp8a4SBxuV2BLFnZ8hy3fSAekMrRBu6feE4zc3JVHiU2T1xE7emvzToV1zHXQaJkKtJ8BG",
  "key16": "h3FUcVcZgyAiHmpx3qXG7P3qhcrHwY7omSTArTXeG5ych3iF8pRwYmS5W9yUt35QZspgjQ2FTbyL96kY8Xv7ohD",
  "key17": "wCkpqGS69pdtvzscUJjnoCYPxWKcEx1Qwb6QKHkFQvi5srpGUzrLQMVgHDhNBX4tdsWU1QV3xuLawMDrLyx84Ju",
  "key18": "UR1EHXkJkndsQSvXxeGS2jEexVfEb8xF5E3pr8W5VgB9fstQxHhxsjqzKGFPw5jYnRF27FjQeMzqh4PoN7vRtv9",
  "key19": "2gkuiUxKYazdfkbAV3D8tppBSS1iFEPCu414TM7CYqw1VZkLwoA5xM8kcjvR3W7Cbc2c9umb8E84i9NG1qGkxcPe",
  "key20": "5J6ZV6SdtZWwFrX3EhcFG4wAG1aoQNX2HLuJxybGYBigTruA2MsjXzamyFuXaXuBsP1izqn9Q1LKNsovYQaGy3it",
  "key21": "pZYjeBfbMuFDeHmg4R9nxLfX3mfwzC944R5Vwfqd2dMyRqA9WYaN3Spg7uRfVqB3kgxHLpGSz5XMpKkaMssSgLr",
  "key22": "2BuuoVDhyJL4Hqp1PjL9fLakwEgamVvN9Q1DqXX3BAMCv2em6Wt8Y7z2r2GmNs7vxTomfEPUuTWJehwhSbxc7KeU",
  "key23": "2ZE6dprUZCtEcoueQFh5LJC5fwxGeqQ2tFhUvgfhqNJybrQ8z5FzRgFQAfjUuWFL1YLsf5W8L7xm1KJqbnDLvSTg",
  "key24": "3QtYC6iwjm7jktp41CsQVUjm9DjWdTbYE7GvEdeWe2Jmg5irPDeyvFBSCKnPPeEspdrY42y9Zk2HZT7snddmUF3p",
  "key25": "51QKyQ7srB7FDUU3fC4LbGzquA7dNR89tgdC79ZhkWp3ycgnWJJVca2DYuJniaCeEamwc66TtcUgC8wY8Fw2GSH5",
  "key26": "4J63Ai5Mjn2dpgCn5nKkqtQiLU5DyrvofVA716RQ6KAJ2fz1Cbmm121RBVCo7AN6HiWyPFRtCeLytTq8iCpVkvb1",
  "key27": "2Dar23J9NrRt8M5Nz349gV875AA3QX8ebdWJhrRxZdzP9UjRi9ineBfvhsiMaUaR61jYGSHjo9n1iBSPbXF14wFh",
  "key28": "3UjwkMNYFhjNFQzLbSmXeiKMG7strBrWBxBbsMnhxAW3Ndg4MDpj77xgEuY7dBeV4h88geEx2G93RQHS8aYLxyXN",
  "key29": "BTfnu2WiLSsfZv84VwfHUjRpGfvm2muh7KbaDz8WFJyTjrAg8hYhCiYWei6MB19Lczn6XLenX21KYPGfBq6mW2j",
  "key30": "3rJ9a4S21PSHNtNRZdgy16iDGT5fSKJggnoQtmswxgxJbuaWnUv8KcyzmPaqqp865fp732GGdpGCBssgbCp8tUen",
  "key31": "36sEqSDmvMPNyNSBCp3KpFqcubbjjvDNMraNa6qohabonXEYyarVbRw2AH6kifuTh4ruHxULfAmc8HT9Uvj1ZY1a",
  "key32": "2msLRrw1sD5H3UQ8FJ388M24wAscZvL8AiWwHGL9th89eoXzJ86LDNHMvaukU7eREaMxZg53nwjqmciP1nDLZ6m7",
  "key33": "3MGtXGFFEakzKXzgb4DmuxAHPwG2wZUMHGUgPDqvCnyq2P2Rvwm6vt4iGHnDd8DQ6voZzMkif6mesiK52XH89jJ9",
  "key34": "55wqUPMy4K1D2GRFLntdAbkwvA1wicBtMNTTUrUF3hkQWLn54BLS9gyqLvBgZhops11jT8frgM3rTGydpag5QeSd",
  "key35": "WgzFNVLZGUUivTu1eeAbaAiE52fTzVqZGrUumacmXKHuqJuk18XgzX9UjpFqxHrLT3pxHWd7grdnLHKoq3W8mUp",
  "key36": "4yd6kYLhegwbA8ZihKahMcstMkxqifF3AKgYSVSvY2hsFras9UovXQvXZNzsb6o34PLtiWoxdx4WS96AxEtVFa3K",
  "key37": "2Rw6Sgffqbwi9FGE3kZ23Y7kQSwHuefEhrKagVCr5iaCPozzqEtuB18nFHJYxSCcLLnFh3SeFSaHNkMJovnLC2JB",
  "key38": "3PnEcDfasLF1KVmgruNhqFBQZAFEJqBtrLbB2WWUSNP2EXrWSja6ASygtwpodNsJyLf7x789onrHA7vWqRqE4SBM"
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
