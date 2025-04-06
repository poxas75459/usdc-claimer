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
    "3t5qHRwhf47CZAJ4wfdX3aCkZTMtjgQhaMoEPWjk1axRZXqcPhkW2wvJkyuipQgLE8Uzd177vTjMWssRLaWt9ZUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ig7zVaAxvJmLA9oQZ9Q4RL4nky6QTSkYbkuhgGEKgGmzTxc5YHVCxY8gLakr2mCVENofnecysHpEHZSomy19Ua8",
  "key1": "2iBWFGvJFWcAMN1Ed5PfNWoC2qDhL3d8sPg1WuJgKFcKngRgVrko42W8CQ5vqh18gEJAuX8qrUmqgcZDmAi6XLvd",
  "key2": "4hs6npxVyaurFSyDLUpdXpQDUHGiD3qLXoT4ycsiDrRkubcoCTfBMV5t3a7a1ztE4zwaVjKWLsaNTV8uhhuCSLke",
  "key3": "2tPAb21pDecZsEB2y9a9QiKtRR3YTj9GMpLqUka5yVzEKXgmaK3tGyYk4Q69tqHRcmbspV2T8AFuphpTffKaaGgG",
  "key4": "VeAsgFm3ViKU4PTLGFpiTv6zLoTXQAXEN9bU69kWaPUEh44QZjn9Bo9DxDQnu38kwRNjnGsWehaGzLzn7NeiT2W",
  "key5": "59csCZrH5oQSbahHnGQ2YBDhuCqKuEm4xudyfpEYsntBBwE3FkvKj5iR6RkEWj5bMZrZz23yh5tWE3Erxa9LSem3",
  "key6": "3ByfiJv3Mr8EM5ZXGT2PcwRbdurPQcvsXDEppWwq3yLcQY6jBKGYwyfYnWEft1eKdB6jVzK8NKGf1HrLpzfmPSiJ",
  "key7": "4ssBymShzJ6bBK28gLUwGTTiM1mk74czA7Mmp5n5KwCjTMJpt9bXo1ZC1rStXVP4mUAzSVScTkJNyhgr4qYnfb4q",
  "key8": "5H55A6AmsLt9tLHAQtBGxyvrmf79PDCaLToxDGfFkH2qLAx9ZBYBnQtafLJaAWq6H3opcBoq9dHqWpv418wyTrQN",
  "key9": "3gWvjGVR1xiyEazTrssR4jnKQx9eMRqW3hXmepuspqaEvntAvtywi3GsdEjTKpH4wG6DEjZr83vf4iXCBZqQt1Dv",
  "key10": "66NVas46zmn3F4wAt5M5YbSGCiJugGHHTXuPtUA4mi79q6SBX5J6jJark3gwpZFXXB8q2SEhiQX7EkRapYtfhpqY",
  "key11": "4eKw996j8bkCEr37abhtjTF1EVTouwfP7ZPgap3bzyz44HFEkVkWV8Uab36N239yKARL5jpWmNQhDqkyxoy3bE8u",
  "key12": "4kPioc35kkHjqKdpm5TPWAe1yYtmUtXKYcrTXfyN3qY9ZnhEXE3SScvBTyF3Ck7NKa63KeowyB7hWG6qH5vLDNJp",
  "key13": "4ehF8xkyxcoK8afGWLgx3ro5PMscAy4fL4XCwSZenZnRqVXvcoytprf3YVBdAnuegqnnA2zqAiXDPCyG5S52vSNi",
  "key14": "44Mf4x7ASHveJsEqJfszhgzKQRjeMFVYwE3YSDLQUCigJAGudfWpC1BnL6jQkzbxoRUiaq4hvFRmZtY239h3yRvS",
  "key15": "5xG3KJcPTVvQsezSSecDjFWJDKPF9zYgJJ4we66XfNV4bS1sg79e7ugRd1bphwanm6sX2GMDzPY5XAiHyuxXkLDa",
  "key16": "599zCUJWCQrMYMjcDPjeBDJdBfwPDq3AuiJ7Qacmp8Xmb6ySXkviCYbxa8toUDqYtNLVsz7XrbtScjkyprMoC7Vh",
  "key17": "fp3DdGU9FnHSmCjW88pk8U9XcSx4FrRtcVFvJyDfGdhwHqCTLPd7gkNfWvHS7DdPonEzeMvdUmWmxU9dpd8j1TL",
  "key18": "gyx1CvuswJw3752XxEC55HHxLc4Zm92Vs3Y99CZjp8RA6qkSDVpQZMq4xvTDj9rLcNsjce4Sz2EMXBF2Wz8WsG9",
  "key19": "37z5gP7eUegXWso8fWDiHdgmxm3yNUpNKVG5n5eaSULzonVFKbrwRpewEXexxa9M9TqMtvJjjdnEijnHBtX5VwSp",
  "key20": "jSCdhocMmgpz1nY94bSPLpVKaFa45CKEFRTr3rcv7KrqZ8zv3kmFgL9AwW93JHmso67imRDU938UbiVv7LfZTQs",
  "key21": "4pLzTtj4pCBnViaR6oeJyM7sctGfmfp6HVpwHdwyS6mUEQscyhzMuMWGsh7kfzndqXfDYPRiigh3rtPxGLCj1nrU",
  "key22": "38tpGwpSDY15SaSjo4DcXXk3Ybt9DDTZ4KWkbidBEog4c8zWLLspMtFVEUDM4fcENN7KsmNTVX1ZP58jXAANTCcv",
  "key23": "5LNrW1HrsHL2MDstZT8d1CFfo7mgMfxNYEranuBQ3GkgCYATbv8DtLc5fTjRak6n4FJE2bhjc3jJiwSVvbqRBM6Y",
  "key24": "3fM8vv5A2NAhMttPgLqcA6hwuNafii2jncSjkhmqkfGGLfJeRcX9Anur7d6rBX4eVCbxbK4jEwWEAg6SASnr9NiF",
  "key25": "F7AxiVuVGc9hU5hTHoeL7tFF8X6dF68TC7LxXF6KnD1CTHeJedCy1upJVjKBVXnhLCoNkK1sdizB7vnSWBKVCtc",
  "key26": "4x11M2AWULdncPj6yaVnM6zSrB4o6aV5qB1NPbjEqHiKwbZh5aJpWcP9La4rqKSC9fn9dW9cQJJQR99XtGHUNTXV",
  "key27": "pQ7TutHZJZQCc1KoUkQhP8y5yrUmNYwxbtFtPAZrVJiZPBdQALCsXD2LYAgku66RqY6kAuEBYwgz8imUaDdHXvd",
  "key28": "4Xwo8KbodeKDJa8hioEHnKJwXqRg6y1fEs4m75RcGQtq3aqU9TB3pcoN3rJKfTSFmkGsTv8k61Xt7gHsP5eyFCBa",
  "key29": "52cyyABTUoThTAbz47ZUWvzxrd6CDsu8fuzoKsUTKjfWeYA2RtfNJA7zzkV7HZEveqto5yoeNgSP1VHS9bNLzs5E",
  "key30": "3FEUYu8gQhSyRbFKUbaYVKcZNHCD4AgjMmQcRWLSJ85j1qFDbhJ9FFpiKpU3AtEd6FW6TefFihQpsDuMB7FC86EM",
  "key31": "4RorhW5vjmZwxSDL9jSHEsMyfwcjfoHcunUbuoBuwwFom9NJNgaA68TRtgjx3i9cm5AA1YMoW8Sr9mEfWuGZ7aBb",
  "key32": "5QgYPQAoZ45XdSecV1KEU6EP1onTmVtN698RkC3gGB4UR4P82RNtHT3z3vFVi5ur969fVPWNhA4HkgL2cTo6uSN1",
  "key33": "48JPRPCUMjh26CpbYa35AYvh9vemd6t2Q8sDiv1RudrwtuWZAPQpwXdwyQE6tijBE5QLFJMPR2jRQhhq5hsDa1BH",
  "key34": "5AVDLrU19tSkWNQkGVpbud1k3G43XYQuRJLfXaohLmdPTnHyZQDwoQ1zqKr91bczjxCn2Dr88Qk6kjHhx7w19FqZ",
  "key35": "3GzVwUyHE32E7jHsEffnk64Th7vuttZn5QRaNS3FEQLGxa3KsYe5D8wB1w2o6wUvTZtmKVq42L8oz9CVNMSm31B9",
  "key36": "2NZzVwbLxq5y7GgKm61qjWyM7yCsPDc5umYMbhDCF5CduwLjuAs7adwxqFaaEvJUFChN5TxqnQbopwHfcGkNV9QG",
  "key37": "5xmnv5D6QVqBryTosoQTVQmeG5RkUiVK2dSdaKGFFKYRJS66q6trBSAq6PCqm9qHZLPV2xCE4XvxiLKNBbpgjWFS",
  "key38": "4BkTKKjmYH3xyM7sWUwuQNRmEdvGdreRgCZ1FZfRaUU3ahbDafK7Rb53kFQq9rzPyeyt5kpjscmya4T8AiEYU4ap",
  "key39": "j2dWpibtrmdR4HcnR14U3eyaHNN3Cz9Ceuf3kZauSaJPaShLVVBenKoxhNg4fGy9tdB14BcbPCjmbApP8L7yZqm",
  "key40": "NTR93jLr1UUb1GdhAsUiYugeJqddB3RsqUzyAn7SyJLBrNAEHMTArxn24LWmQTwgAsuRH8t5ngkNtqefn3AvYKv",
  "key41": "4Vgia31Vdhek9UMp1yTdXaxZzWqhadkdnpufL1tdJmVLrbu17WzZQd8k4G2F1gDpNw6EgYdQKCwB7ZsPsW4vfciX",
  "key42": "5KhNPYQjzzvW3LXnKjbjoCSmYNRhWXAXi3KEHBRV7NwpqqfcfoFnpVaeMfKhZhic4RJJV8yZewszg35ysa3C6ptd",
  "key43": "3y6Cjkzyjd1bQmcnVmhiscnSedRUxYTVxQgrdsQy6Z7W5gW3UWzBQMmpg6P97dvssxMBBA5Z1oABRTqniQfFZzx8",
  "key44": "3f4Lss1EknouvBhm4ytSL84jDEUv6xUAxHWk2Fa4XpUWECiucQU12m6pJD6CzwGkTM7Ny8vcuNXcVgHEhmtvAng4",
  "key45": "56yBaQuuVnAt3S1ypGspRpw5soCawTVzgCpPbPt1XfpVkemZrJn4fmQvnueEc4HPTxQhqEmBqj76QGwkWCnC7R18"
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
