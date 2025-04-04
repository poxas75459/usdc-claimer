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
    "3677cfAjMLDzerBTbdyhcttinfvZB2oVo1i7ihR1q3tUJbFnhPmMzQfXYMHUPvHxqQFRV5De9F611iAZwbsmRmyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YgqVr3vCroCB6eWwAfxx9ztHW1GsDw8wQ2dmJaMWrfHiscjfQGckCH6C9rHzShwGjWp2scmJ5VaNzfS7tcEjT4B",
  "key1": "56sENbbxEuExRyPXnUu1NEbVPDCeymrxnvjxF51FSNa77ZJusoqfkqzaZ7JQv9hTridyBm1HmXQmuyeLHL4biGet",
  "key2": "jc3gZzoM3Ww2FnGRhLd6goMMda6kfoLrRikL5RpWjh4ayufyAYB2qsUXXRuy4SdKQ1ZYbfJAnojLPbcG43jaZSg",
  "key3": "WHTcVic98hFjmgt3Xh46r2oCUQxBPecSh2wrEvUd1bjDNDBFZ2JPDamSQi4x7xXoXduZr7Evt65GXzL8sgD1Trd",
  "key4": "NrJ35rXirn1mHEuXxBLDRYYugx5ddUNPLRMvcFk2YpKLSyre5449NFkVpTvQnZLZpioniCBbfX91TpoJknaG2ht",
  "key5": "22LFFK2yJ1dHJx9E1hAtfcESkjKnSbVeZDTARgwowSt6HLo1YEjzaYEG4am9ZpjSiSvdHApeawh1t21oHVaTt3ur",
  "key6": "4Ctzi8HbQDXHCsxdSPErWwg6rJmopjyQZHL53h5rVSm9ywBd97QHbHsQ56whrkuZBnCL7kj3XNrxyCSFV4fj7XZT",
  "key7": "2N4ERMqaVM2SCwt9Vwa8WjHxP73bjcrcV8MXr1Zojk25ceZshYqq75xRojXVXUoVoyyTT62YV7DTZrWgPL4fu3nW",
  "key8": "4wyMVCBytwYuPsZiidrMCYFKpeY2BZSrFJpBzgef6EvMoGfbG2TEqiujcrXwdWY62WS7GgZXAjqnHf1EoVwvwEzh",
  "key9": "3RV4yDZWipTNRnZvcybQps9bys5bPLeBb8TsUWBZZcojhG7BJLchvPeCRCrjf7AG1GXv8KWfciTh4yh1fZdoNXpM",
  "key10": "2nRYHAHjZ4L4hc9pgiffHgb79RyfGU5egFNGzuRJ3Vea9YqhH2m4posJgRnU4efkxT7gE8Jqw51fMYK4NHJbcFk3",
  "key11": "2HmvgNXjjU61NCCmtAyLufGDaER9FUF32FMcUHHonvGs85F55ggaMxSrqdoEMr37DEFj84X4gsSjNAXTR8Ey9Lw5",
  "key12": "CqGHahbEj9jdARvRMaXZEuNEWFN9zR1841fmGsgd1jJNatDj4nMEuQmQkJps8zxCUXzXPkDjcEPqE2WX21LixtZ",
  "key13": "4CgsLySvQ2U7epcmZJ8ioLqufEWejepYiTTx1Mb5i26VRnYnLhAEMfN5CBqRyde3BbSd2nuHxVPzAQarykVK23Cs",
  "key14": "3SBSPydyvgMUDd78ZkcEojxxpReFeUfJkDd9TfKtzwkfkjVe3XEopsk8Paqe7nfeSNNbmdxeCqJg7oz29TAHRjEd",
  "key15": "irxu7xKcUMpXrpUfico9JsMGnRjuGrdyHNeJLoF9k8dttU4177c3b1zeE7EKnyyN9MxvSkFUervk8hNzfQrjVDk",
  "key16": "64AGFY2AJriZxkfGzahVb9oHu8qWm3NRvogQd73cUtraPzs3RrovY8qKzac6bTvKyqDhafPXaPVzPq3gQjmQ4QEA",
  "key17": "65Bo3Y3DYaAqoMRgtcCWVAeuf3hL8fasRy34sLQNkFA6E1qxGz85cME7NWkrMq6XhVKKTBqbSS6MQXpwdnNsYufe",
  "key18": "i3Ryg53cLTtBBa38MUygmFzeZDHtifR7TgDKYccadYrCTQxk6Xfa95gC6BHfaPm7sc5Jyt7o9AgZ75SDPtUuH1q",
  "key19": "bF2cemERrjDXDnuk9Q7tZuQBWSEW2qvoYxGbfCbrDXNHQxhwP4Sk1986p9Ak8mGGUNdVXPkUCCi1CziBhkeJZq2",
  "key20": "2rWEeoiXhBZrrv9MKE96dVfMqRWkPnorwCCyibKhaune28FjHK7ak66TiANMvheFy9J3UodcEPnjWW6DbbE3Wcin",
  "key21": "iQizERHvtcBhYZrjb4GVC4v9885n398epvB59uGaAMcut6WFbJ1NzPMPR5tdkiG1E4Mt89wrjYimEXt1odgzbAV",
  "key22": "of9iCspzPhDWJfvQMfk7dkSnfrkpwQiXPYFmmLqXNJngvzf7HAoGLoPMBiSVSx7SDMV4aLdEX5AzcdfvG3aGiuR",
  "key23": "N4gnjPs1stE6gHnMGTAzmm7YeZ3V22AvLV6LhBFTWbqYcymhKbvgzA1qcDot6MxvMpZsNkKqAPBKfK1ZEX49D7K",
  "key24": "2tY1QT38kcHzuT9Vqw35KVxSiuJs3fey3QF3hrNcfkF82wbreqT5X9Fm3hGesot1SXjmKrYdoSi3L8iKS74YLC3P",
  "key25": "5iRoBWU8nPkSZjAeS7nTbuzfEYwVsW7CTkvKTyWoTjVepgyDSZWuEQwbks7r2RumcqY2wqAfXPQGCtqK38UiRjnZ",
  "key26": "567PdypAPF5TGSB9TdtBWCZULkVpRos4sr8vRduA1ffFN3Ue6wwiXXiMu2UoeGw1ZPuUh8ZiquEzMhFhNLsPJQit",
  "key27": "5mBFqFpZvsdJZtFgEgTZf4XUfWyzDzqiGcUg7xSTzYrhZApx9J4FRhfEBKhoLEDy7HgbbQKX5Rp81Xw7JB7TYsxJ",
  "key28": "3Am1BZQoS3Pcrcec5GKeRLwCPB1xR32f1JDC31yPRufy8WeBVwyiXonth8wBozeSKfhZ1WmHU1ikmh4ZYS5UGrCo",
  "key29": "3ZfLjJitNHrNoXshRwHamzbAktg9kUpeXt9qQWHTHe959ZAZaqP78GmjRZP9uyt88D1Dwm4jcKXoHmPmSqNvDK24",
  "key30": "77fCufXPJefFzaPYeNM34gPJMtXXiiX3tXYEidf5KaocJzwWxtbWGbATbh6akn4Fq3HupMZ8DLnzr1CRZQHhspx",
  "key31": "2QSAHJjhxPqnvNPHaTP7zupp8iqU86akQ77aBdj4iMLkGbRFtgfcTuikh2wTN1pFCDJmqeVz3fhAd4ti6QeXR56a",
  "key32": "Sfmoz8EEP3N6LsMDVm4wScPyDpGY6zMLN9wDZ62nrVBW4cBe6Gk1P7TeHaQZAZvovqRo5KJbJrVbaFPZws9NoUm",
  "key33": "23zpAqfjmtUDF73Ges9TsGGxUZHfsLhMbLzsoKwcSPWfA6eBvZns8iWYzYGeTmWrZUmhrDviP1pVYVFbWVqX1ftS",
  "key34": "4Yq3i9VSnNs1imzESzRt8k1yxkuMXcUvGjeJxsCof9rdovyjiVZJWTo2isKru93Ya498RDQxk9ZbQde5jJmk9BiX",
  "key35": "HaJM8wyN2SVS4E7f891948kcWmAAJ3ZQkrrDJEhkm5g7K8jZetsNMjSs1Uvo55FxkLAVVmXxGY61gsXEv8A1YiP",
  "key36": "91FNVexYYVYQnhu8ZsiRHxYyYXeC3EiSq3p8X5cpwXbHELrNKpx2Rs8MUsCFQXtXZ5XUpdcRXDx2M75upMo6CvS",
  "key37": "3EpVoJqtCmYHoL1a5gBjX3fN4gCi5tma5P8NGsr1CcEEitoPKx8VsUg2RUoj27z6tNBC3PkzaWzXE8rrYU5qNmE4",
  "key38": "4VLoRcCCf997FSGhuE7RMnpoDSevRAUndsJnJhKE4ojVvENjBhU5ZGrsiiVACHwAZSq7DQYU12zaYqMq2229VpzW",
  "key39": "44fBSDLS74yPAEZT3tDZqZYLwZVujfNVFr9dfzgeHXHdyjpX12sYfafWsLywKx76rRtuHAUHV7wAnT2wMPQKkyQE",
  "key40": "2ojYgGBLs8vtMXRKSpBrL1Hd2xdYrfTMPtozCnPMeAURH6gkRHa6WWsGJqhb2bEakUWFudBj8iG5NkYawgZcsNJZ",
  "key41": "CteYR8oCdtU6ixFFzwNoKZfZKT3fMNJWVbmrQzcGgqjmgRasDDqSwL6iJqjKeGWLCZmG6sQ6KBs9DjpgCsiRZWg",
  "key42": "3JFk3XgLGP4ZBgXoS57SGTmpkh1xCCQN9WA7dzDqry4bnoRpt2ruqRhVECNSSjtfWHtWKUNhyJTcCiyY2mr88LfM",
  "key43": "3EbkRjNr9DupgbkhWWhC1HMvMaVjdFiXH59g44iTsMdBjGP8vh9PU7pPQpbmV6E6EtQ4f1RcJ9BugDbcYnvRQyeg",
  "key44": "5ih4Jv2Szhw6eRQsSJV65T7vwJFVUL7KepNdEy7d4WWc3VrEQcnE5YoXoyRwswNmfBXzRejU8GYAyHBQjF6nkr4S",
  "key45": "vCWwsML6HNFCXExJjAjrjvt45qw97PqSJbb1rjTHkt4jp6kT2PB2v6SYarEwtXVTaCCbPQQGaATW1mBt317BRKe",
  "key46": "4hPxikZ54XAQfznEpppYuhiT6nBb31hAaBDhJV4C3ipFPe9MUyEBsmmmLWoZDkS5At3dKhXfvmZshiqy4mfbzfwD",
  "key47": "42ziRFBMcmNrD17HRa4CtYmrRHgc9HCCztffjriow3RhdF21jyAZoy93xoxjtm2AypHyH5NuuWhpWkoLq9weXMeg"
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
