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
    "2arUQ6GZ68W12BnMGqXwRTnQE5acv9JzgMvLAWoDsZcyinLutKfWywoAMp53YPCgBFN9mWCPingMi3GooK2H1DFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V1xvG2SByQqJcTcUzBQFnY7xY5Am4eMG2eL5hJDUNgxwu8VguEj5F8JrzF8ETVbrUQxu6DFsAPFtdWHmbPSkNoM",
  "key1": "8vEKYdTnqrnagabFy2BjYD8AqP4v8eJFv7yCRNNYnyvEHwkmtpnPZgMNssBHqRsj9oHnDvELBmdMm377gvW6k3y",
  "key2": "4SoLRtHoYYMhjY3sSoQ1Rtc24ntNQoxGVPEifJ4hjEWuCFvfNr88GDF3X2YzwXYZuivHo8Dg7y4WTr7FY7m8HFXE",
  "key3": "4KecpporW6GAikLezKbNGxiySrPMwEbR3fFCUm9yRKZxuiMuiDcFXAjMwBXyFMyLNRZzceZYVCpTPFDj4PZ5ZCTr",
  "key4": "5qDuVfpWcD55mi2NJfLFvrUahu46VsG3Ni5rCoGbADqwALBe4Gv3GhD5Gu6tLgKqSkjT8vkvr9NNN7WZmoh3tPuT",
  "key5": "4w4n7r8muoLV5fk8yEqJNGt37Yfx2kqoqUpcmAKbxvHtee75d65A9sikem9xUoVp2UYP7grxAthaQAp2DA6bFLPe",
  "key6": "4aqgHgB3etAi1w91PADpzyXiRooEaYgBj6moGvnT8mNCuatFv9ajM3R5ttuwppWzuBuxREBzUfSy7Hae4d5PwQ5u",
  "key7": "57VCRCL622snuTaKwbhiDLofi3M82qD1e2Dck2DmK4LZkfcksBa5VFE93K79i2HSfVc81HmCFh4SX1UeZAJ4KSJF",
  "key8": "4ykw2WLFjefLSyVG4YXA5XDeQeBaGknYKG7M7DeoLySuavuh9PsW5HwyB21KVHFsc665QLj72vnqFL6ZQPFEQPTJ",
  "key9": "5uQSgn8znc5f2uJo2qqUW1VWQFcBeepJY1GosznWM7JC5r89ZwwJtqucUWaoBtaS86FbidmBFa4MRwRiEXC2CnYf",
  "key10": "UwhvyJgmqs3iddDa58eAgLN3iLGfGy9QWY7AR9obEkwtchrX7vigFevzos5UnmGuXvSrGMzoWddLtgDJaVgxw8k",
  "key11": "4odM7hzeCQxfsFLX5HvZKaq7SpmfH2Hux7Ct7eQXzEPfNNH2bDwm8Cmv3BjG7jjBEZAi6XEffzH6QEchTWQK3n5i",
  "key12": "3sSQZtx7roTa4uP5EpzXcBrPBMFqdejctH22RSLNX2tgMobi3AB3ykz84dRhAKTbxVykN7jQZ1ciZKAEfCn5wNHQ",
  "key13": "5nctPwHRHtHhEymGEQsiGLjtK27iKd2UGjyjRt5wFurCxUQbCiLT5re9zKoBZnBa6ooKr7hmrBFrT6Xofxm9ovmN",
  "key14": "4dP3t1nTGzq3TibPu49TNtSfML6qSaC6bkGJXgugCmKeHNYwyeBHH4ygXMu9V7h5fLG8c54rasZUZU8TCGqbde2D",
  "key15": "3WTyawgTyD8kkdk7E1U2MrWSE8J2mouFWvjwcXFyerCf5aBbfZwi1x2qAP8PX6a4FsnqZEPEhdWiRJ6T6j9wXu2Q",
  "key16": "GS1SmJpvyiS9zZjtP7ijcEN7GXtUCfH7dBoa4ZFSd2hUUySNuZMfsntZUvPgLY43gSfcXySX4hUB4ASHrRV8sw2",
  "key17": "4obQoaYibC3i3fH37QTtnRuoYNDdjanYxH4fF1NBaCcppbDMqNnFEZmD99f8s5H4sUDynqtnrUbSmkjsBCtQ462y",
  "key18": "63NMsena4bopnDmt4bYkzD3jsQypbHUJaWGmqAGrmpZXSeFwC2HRdfeCkDrLuxFXdCew4t81PuWYMwDnKWojji7b",
  "key19": "3Uq9ceQJK1twzEQQUwBkRfutEwG3WS2LtryTBjzWSz8VX42grKcR6pENAYVBtHUeADubg9FiDTEUeK1zgvamtg3v",
  "key20": "2SUnXcD9WXmizyB42EdXpTbTuq159eYYErFhFYU7GrSc7oyzVaEmrAYzgoG3wVCxhKSB4cEeEMcUAqg7SUt2SCpN",
  "key21": "61F6ih8XXjSdL7QfoJrMwv71yXrQhVSpitUuhraVt71VUBh4QhuukFYj9NFiNmyfTmmuW2WZPudSLKXJmB5XK7Kj",
  "key22": "5eMbmT1FNRo2TbdswWpkCKXu4s5SZq4c2iwXmLnPkpCdRce6VNuyAJCDdJsyVcoSyPxFrDziVJpu7qz9wyZerRz3",
  "key23": "5oyEDvchHH3VtrsFAhYDNwqZKthvFKU6BhiFtHkLCxR44czm7yEpoq8mKopUbc4MHQaLLj1CdxR69rgFct4dUahU",
  "key24": "4ST611Jbmv5UMLgePu4PEhmA4pnsgiE6XvUSuaiPCRYhq7SfaKcDtJDi2qroe5JptXWbdhQy4GLMvFgNTMgSwtNp",
  "key25": "5AMX1YyihXHARJbRp2s1twWmFSqa5751ZUCRKyfSNbsRrxU8UmHp2aEmwEsAPib4KFBwJKjcr7R1fjdtMR41pqpr",
  "key26": "2wwHhEG4uQ8rMyEA1kAtjarJVsjqnreuB4a1oLRyYy4SebW5nyhZnCKk2fwz6YVynihZcKoJCuTuanoJBu5cpXR6",
  "key27": "RzsHRWxuTowz6BF5iFArLgpH7DJSv8ZiZPdVncPnQwNoaksvXy4B27TRCa9SSPgQcMkhouDWSAmYSTx73YDrtm6",
  "key28": "2stM6pK6PWNdsevoJAXGsJkqu37p4K3RecT49P2ccusruTSua9mEp76uAVD4HgZFbF8n3FLBvF7wAxiuhpqw321r",
  "key29": "2UqQ9d62giFUc1Q6H9Ke68J1AY7npXU3iC8X5JjqoP4B3cRFWiWknyzMoQFYygSAP22HxsUKHJDh5Y1g729Ek6sz",
  "key30": "2SGnBts8rAV4Vg4JVfQyzXm7kXYmkGUXFg6b5ZgRWtozUcLzBKiYhXK9DBSvS4hfLG8cpJWakkTz3Fa6F2Kj2zJd",
  "key31": "3aLNb6NVAi8cjyQdd2EQWzWR1CvdShRWxDUddjqMTZ9KDWL6THYQHryZbEmdcEusLkKE3KorjBX4fjeJ4c15KQdX",
  "key32": "41iiYDSiviyYN5U6VAkTbLqCzCBjVWUHqCYmbfemXJF3haHjTMjvSEg9Wc7zYKyHDEMrTD8m3uP9AzZP7sWzwp3v",
  "key33": "5shZ5owhmjvKEm9hnfi9FQCDV5o8VPQc7RdEJNwRoUhhXbaqtBsMGEEjsLpbMzUSx9XdbfQGMEhLqiYpNu3zaCPk",
  "key34": "4GPdXyXESsCNRJPAv3TEQKmnSi1RMQsrt8oc5XGAtHXEpwJTUrnfxaM39BzhcLVdjdVg9kLxwHsbjzdPYvGVoQpC",
  "key35": "2TkKVfe67ZyrF3uah25FNu635D8z7fpEaPr8ckXV47N52j4ejrKinfmkfxLhrZorvVo92Y5DNnEwHBgwK84LpY7Q",
  "key36": "2p4JStHjjHFA9rVqz394H7FF19wQq9vjvLQRnCPuts5ZKfyLCxswPgkCEinzqGXtVC7GiVmbgtoVAqNVe7swYFzd",
  "key37": "5Uri8BmaiazycZbYBTkSq8h2dRgEtLHkXE1qQdMzixV6DPY8V1YJVZCTUnaY88rKyscWEAf8ntHnghs4CSqumKXH",
  "key38": "5P9RyK6j6iaa5LEBH5ZpcntXeayrwuLPD4rZA1daQ96A9F1kxPeYnEmTkn3W4GKAepSZASJLXhAKsTT6yFXeyX7Q",
  "key39": "5VV75Cu47QHqYd9KdZgCZbmjJ9b4c5Dh6mXJaUiqdBwUNz1uP6H6n458veei67uYzVGDogJfxtEWZsEWHeW7Ddqd",
  "key40": "293RcJXnCTZbiLrotAJ1RcnwEhLLA5dPucwVHMkg9nRWF8JhM5bNUKRY9zrigUtVrkD1TWfThvraKbbzuMEE7qoC",
  "key41": "2LmeQ1sezHKSfHwfRFCKDccbRavYy454gwJwSLJELDmNnm3QrCbhfMuDkNSVKno3UXKgE9CVyujHC7i8MZemYpB4",
  "key42": "3f95Ryg3wYAK7q8uscS7wjrLSUokxqpFjjrrgjggqwUBpJoJeypFmtL72JkB17xwjMbwGJAs6B2YDvHqfMDF4nn2",
  "key43": "43xGHEX4zVcm4TsxDLcmk1PyBziuU9PpgREXCj3oiJnR8sSwQRKMytZcnCmykXqhdoL64aUptQa874eya42npkVz",
  "key44": "3YDa1GDArekGr87ZWUiuPr6YmEZnGK613dNc3UH5E4RXKuedGJ6j9XM4taaRQXjbwYCUMLDyKcCs5MjZH45eqEeA",
  "key45": "ERufhyBd9BAugwxHeqyx5w9ukrPriDimp38Rp7p6T8eikqEzKoa8JugkeJzwERUkH7g3DVCpXxptaejzEEr8vvq",
  "key46": "5ENotTjTYiyRRUvNLkz9ybbDDT2GRfietbijCT6Vw4awi92qfM6HXwKntchoh2Cyo4sx7VeNu6b6XspusyDzd5Vo",
  "key47": "DLWAEJxCyYmRAtRESfkTsHTBvYz9LsZNj3dm9QBGUbXJpwZkeHzhzPtXM8MbdHDwxFEdyMxJuqUpwJ2jnvJRVFX"
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
