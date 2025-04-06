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
    "3MQYmdJG12FpzQRqv2xMUP2gWe8qpF44EQgQGkRsddC3KHDpsa4rQzD4bKHjEsuAP2YFXea9Jk8cFs4bnheiqr9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J8ZZddthcw65vePxoUjTds5CqMXLsgE6fgCqNbk4Za9jfpNtjor55YFmWJHLJWo55JNNTQRTVeCujUndo9AFTXe",
  "key1": "58ewAftsa6RpUaaxmE6cWk6oGdJXaCWrX5FifxvozgLZ6NMctVbAp77aqJ1q4dJFshZBNaZX2NJHpZYG1DKVkEvB",
  "key2": "4XiwYokH2upsyVxRe2hrxckizksMdF9mN6Mnpd82giKQKry3YG6Pm76gpoDaQNBoVLCRKxHBP6tEAV8svokZg7eC",
  "key3": "4fT6aZ45xQEhotgt3Bw5Fz6Zr8Nrd4f6rw4znoiF842H3BkS8cDHK3jioRrV3n5NQBL7Ntp2haVpZyft967gxesE",
  "key4": "mKiw67HGdUXvBdxpqkHbnbRNpWJC26T6nQ4SQgPXMQMMGba7AKmDuTh38ayhuvpga52WtYuq4npksgGjpQRGQHy",
  "key5": "5HXLnhX4rgGQY3onjyRNb3CMy2NwtbpoGr4he5fFCrLZVBifgLyeTRsA4x5m8yPXGKZTKSHf7FtpUH2qzaQ8fGrE",
  "key6": "3KVjpbZq9EfMiWERXfQDebBooMD6LK12mnyZuX6fuSqzBPTLQvitBRt78MEP4KLCeTz1DP3aSPyf7RPXbC7gYqfp",
  "key7": "5Wpjusj1jjpwF388ZDmueVUX56MWu6bfZFzWMjmx4GAntNvV5KypKAzvSGJP7YEG1V3q4Rtisijahwm4JWjaXUX1",
  "key8": "4UduG2PqydBAoWE3K1JMfbsunsS4XbTPJrQDj78egbRGxt1bQ9DfZLkBwojAYtNmrdEmcdKiNWwFGFC24pb1szbD",
  "key9": "2oKJyazi5RtKyoKbicYY5oBQQ28iSSgR6cxohVaP7xpYJ52CUwEPsqYyAJ61tMXUmgezZ6e46fSoZTYK1DxUiU6J",
  "key10": "2BnAWViyBd1CjdHGsDnuv6skBaW4C5to4beghmm6PConqQ9ezPRGWdWFzZ4doKveSYGsqZQGVFoyNDCKkMhRSxTa",
  "key11": "432WrTdLLxWHY9N7LAypVzpzHgaSk7LFyU48M4zVNasqhetDGawn47PLeo3v8Jqj3b1cAiv1shMDyDru6D6cxkKd",
  "key12": "9CQWj5EjwVWJpJBVCz5Ria4p33AF4VbK8cN3UUhcfHo4N3CVcpBvz3HTwhJRoYsnXJSPkpMcj5zvjXuXc4P6bJQ",
  "key13": "5tP4RsoVFJk3fbRtFTXX5KWLeWu2HarjZkGHPrmHbXjVEaKwsqK2wzivAvvkRneZoPFEuiofwkWBoXRJRacKddu6",
  "key14": "1QLPfCJaMUEwe9aoQkyY9nrZNLzW3SvmYmCQWJvAjf3wPFZuwoFQxqxtp55dLQLcPAHQsaVmPfxjKzscws35vEt",
  "key15": "4NbvDppy5HJCtuKnAkRN2fkbwKweBfyMHQivtCkRKbDcdqgaAa1Sj2m38Q5dMiobo9ZdQe1oyLRghaoRFmfqXJ4h",
  "key16": "5nkGqWbY2AN9d43PpCQFsok53WoZrXDo9rHLxxj46ZoUoXuqtooT2nVgz4b3RYn2p3itdZCR1upAhpd8e6eepcHS",
  "key17": "c9g1PtEXNMoY56dgScDpnAuVQCn65KHeUpT4JEDAyZXtLvmQ6uET4YWoHcwfmbTAKW9X9dT5EWDUzfkHBb74T4M",
  "key18": "3BC29t3mXPj8FmnRmPyPSsWry19cdHgmMHJDJWXVbx8kNiUFX6sZRoKDtHoUmK4y8uBBDtkD7JZZgyVSQxsJVcBW",
  "key19": "2utXqpt25NGSDH9wakrY6mBvg2xpUQUJkKGQ5adoJ9bxeFdA5b5w6k52cc5NwKZEK9J5JqQRvUzq5xvQYfC9KYpQ",
  "key20": "5Nk6qMTvmDzNeAmgsYcdA698BQNS1ChoZfXrTv8DawFFWsRn75NFAW81DXPNFWRgr17jaspvXSNyAsovjqF2GnSd",
  "key21": "2FFTvDtAwDyYB3NVcrnt2Z9exwxdvGQ85Tf1xbe3zAFPfkGtdtHRR3UUmeZCY4hFzL2NE9HzCeadHjhD4n1QrXfy",
  "key22": "3VUcq3rzrh3DwGtmwtAi8WVf7YUGQgK9E7fhne591YeTTK7rvNWDnMtMF8wAWHp9kHVXiEKhCoSnwiCKnYyrQibY",
  "key23": "2zGj7hRvst9ZR2SBXEsRBdz2ZqpUbj2ppwLTK9Ps2FajMCWGLUA19cQeHrjiZUG6k7HVhMBg6b1BgVjFVxQyfJb2",
  "key24": "5DvGMT1FcJB5jihdfEDLvB1DNBNoroFVXPiGoY38xm2hkRDXsHCiF9FofTbLS3RvBjMJRNUg47htg22CGyCjZf3b",
  "key25": "46yKrvG1oYUWerbXTVRZuv1c98dQNQaEjX1FWcrn34k5RQZNw8BY2QiazH5mQ2S1LT9kkzmLdp6wR7M463qn17Ve",
  "key26": "2Mvco93fgvoFAeeBH2tbnKeoaxxecxiRQjPHYvyojMZLFWAuVjmHhJWTE5WJddnvpYoNmV57an8Wo11x5A6qqDjF",
  "key27": "5Rh7dGU4BAkHryb6xBckf7AxA6DZXovwg2em7GBKTf8KU35um9rxMYdtqiw9xmxmKWwUpmnExE4QQbtm9TyiH2tH",
  "key28": "5pS6J4399stqoQTXmrLVGB4zJ5SDnrtrTyCitiypezJMRVAqZxSEqrc63dJaDUk4tidREi9sTckbxAb9Bja468eb",
  "key29": "ycF38H2kUyqvU8zKHBv5ST8q27i5t3DBEDdHCasycKg82JPd7t3kutcbKEGz7orDxMcGL1tEU9XBErRXCRZyCyv",
  "key30": "4fee2KuD1pZ65FqkmTUDm3J1yXGMbaN3D2dpGJJpFVnz1ZbWKz9RM9L1TKyLXVbZGXxArzm1XFAWuZLzkpAQfqfM",
  "key31": "gSePCNSXanASHLxBcPA5NPFw8Rphf1DDoucGb7qZ9VEk79rAgKoLRrrmaSbb1y73zye1vSakxhNdAs1s7GjESTf",
  "key32": "5Q4Qw1FTQzjN3CYLxTvnoT7Q5Y5qPkHD6PvyTfvekLTV9Qowqk47sCYJVpSDYhxmGYqLV5UWgRzsFBEreyfAr2Tm",
  "key33": "3owedNj2RadKY5iGtrCM9Jc1hVM3PK8BCRcoqj1p5vSMXN72c6yYc5FreVRsRpbW81ra7HoPgL5VESJqkj9h1hHb",
  "key34": "21tWtYfyCKN5FEFenPQfcFTiDPX45V3sNna4d7Br3GjoiPJv6p44yJEeTJvWKLFTTgjPcrd7rL5FS65QC22nxL6w",
  "key35": "DHeg9toKR9GiDVcopVognjRYtpjxcBJ5sjbFJi3fz4nuBg8QJzxPcy1STtQPhHvNyhFTzrUkhFYCxyQeVitiuLP",
  "key36": "CWz2GpwrcocuJyMXGeZMscVN4DgG5vHhZv82SgEKkM9Q3n6chu5rmfmHXqpbcWGj51N6arbaVAh33pLWVxaY8Vm",
  "key37": "5XiS5J3eFrUmGkuVSDm7zHirA9Sfzvsr6beeCJysRzdwDuhDgJUyjRSk3ssZEgo6WNhvozqarVRc4WWfjeW3tg9e",
  "key38": "3yXv4JW8LrxS9HEwrtXXt8Urrs5jJG1dRbhPGKToDxcKntHc5xTyY9Y6xJ2o8MiBc6K9fVccVkCcfJ7q5Z9CHgyR",
  "key39": "NCWP8zpa61dnmEYnKptaqwSYT9B261XH1J5U1W8yU9TKoNc8gWLnpSP2iFt48ebLVdUHk3zT2CpgLw4RcB9orfG",
  "key40": "uHFzxatH6ZFDc6FeWQhEKJ4Lpj4VM5hVsjQPQtEB86ar2Y3gGtBfcm6qHfaK3me2e2q6NoUEr7S98NwZXHyLhkY",
  "key41": "54ZTVnp3ZG8tkbf2JcDrDYnPZeYj5zVTau9YTadeKgqCyHYXxNALDgmASPnSwhyK7i3wkNPM6tXAcy1y8L8wHf3A",
  "key42": "2dQ6bHW71jAfsU2hKv6WdCEafiHH3UuqHhiMNaia2G1qBEwc124VGR14kDW1yKKiewMLSiXHfaKUFnWuj5GEJTK5",
  "key43": "4y7fndm8aGZJfPqovdvYc3QT9MeSHFrqCzivHP5bZtbRYaZYZg2gkfuq2MRdJpoWgFx261RBikikyaJFpYGbbWr2",
  "key44": "3QqyPiBhyVtJ9LUxJTxpTs6jXnrY6FVFi2ZMAsxEXgJZKFQP48aExzjSxKfKGJHQTnSg9X87Cboki6Y6yvmvxZBt",
  "key45": "5ATWfeSzjiRSsXvLfQGggkFBEA4kvWpNo2Vi4bMvEh5coW6tXbXg9AhRKmwZCSXTHAN61rjv8FTxMipxxxjd4sK5"
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
