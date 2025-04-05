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
    "22QXSxiCMK3SHyTzrxWFxnPM63iGtajZfpGZZcsmNKdpAZqXHtjJAVcSLuFsqJZukCh1BpNduUBys965iDbBHQm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s3bWBHdz7dDdyXTTeP1J31rEuid96C7Krw7s9364zNj9KZ3smNbpUZYb4KBNng44astyuh7PZkTFSoBYNxyJcxg",
  "key1": "5EvRwWeEknQRQ8juZxqbWaXTmWtmJKEsyrnm8vnH7JqopUJxvrDvZMdPkJja5uAGxJnYUjNCxedCWhorj6Q4w8Dh",
  "key2": "2f5Dxfk1fDxqNXJHzcVQy549kyT54Do2mAHygv1ZLSKPcZRdGmnkxbtS3x2iMVeYy39qwzytyDsm3fvdzj3F9HBF",
  "key3": "LURNBySiF64uzCTRWLNiQUR183xj9B3c4D96YZ4NYDx18NFsQQs3dXkg7H4y1U4WtAa3nYknehZV28837Jtf67g",
  "key4": "63JA55rAg6BXwGyrXSmbeqxpwGLd9a2iTbciUMtN2B6VzPUuhaQPAakNxWtNDMUicZqgDBvwCB1L6yMsHznNW4eB",
  "key5": "4WCjWBXcRSVfroyDNspE4ruUPKbJR7L4YC7GtvTjx6s3zjUDdwEyTtHwXFTwfENxyRigaW9FDW7YijEDDypRDg7o",
  "key6": "5ZXk6tJL2dLXEKiJuNXZriTT5VNdNM3x1mBsDCC4BKUqUeaRnSRq3Y4ALm5jFqegsFduDxGtQV3JKSV3DxXsXdkh",
  "key7": "4ZNDBPpttGR46N2Vw76H9hpwUTDaXrBkDukCter9nBShxk5575MFgJH64b8qwDeYHzF7x2Xw1Lyf7sXMzEyqfQEh",
  "key8": "2gGBhK1GqgZUzMkqp5dXCc54sjCpiAZdnWTzzweVfxecNWTrU1FMAMQHgqairdTRF516yK6Xbfe57JtNDHsQJHR1",
  "key9": "2BRPPf8aT4XndWftMSMAXu5wQJ8WYz32qZc2T7xZLCfcTmkBq2X2dUDWTPqdDjibfkMeYMZQLPksWqKnRSvT8FNq",
  "key10": "27LkKbSMdDEtggpJ7FnghifrELaPL88MHHxk6LRRpZMWhHLs2KRoJvUWAr9oMxyvXhQou9jvux1BUDv4WfS5Ehto",
  "key11": "3KcFoukK4g865Yvn6kBZ1fGgs1JVg8BkdCSSv5T9vMRmdXYMjvHcHahPghx6YArkMScgsid6kPVwtTy5a8dyXaUQ",
  "key12": "qDnMJMg6bfswmvu3tqTgsL6v1a43BjJ9quhi1oHxZwUJKYnvev8oGEyEdAhsFWGkTnygjtM4d9cFiffJSNvvect",
  "key13": "4bwL6EqnNWR2cFQTPaC249VePHGM7ngPdwA8Cr5hKVH6nVeJJT2qBtJ7Cn9V1UxyEQ16q7zwnoKtLKuvxfTBbDeC",
  "key14": "Hwmkpbua3E1AAm7FsjfCqUpEAbZwah3fwqzPWc5avGR2r7MVfii8PCArwF47PjPCNjpprGkrd59ubxZJyTFnDNe",
  "key15": "WpDg2rnoszYDYtXeVm9gw8eGzXaZUoLwiV9bDfjypqdp1wj4bnLfVk9kg7BZ5WJZd8YXbXmUg1zbEfdBXsb3YyP",
  "key16": "5Y4nKfXbHp2YjTJwxuVHE3FW8vbZxaWSiDjP2UCLcTXcavBQMRgU5Mw3APteGxv9ZwAY1ctcHWRNUkNDPXFF24tb",
  "key17": "2VnX4kvbeb4DNksQw5oyutSKGMn3GBokzjNcLao2AmvfXAprzZhbAK94BPmcZY9C4YU23C7mbR2jpVDcSzscrMjZ",
  "key18": "2e2VJYHKJeCwpJSghDef1PmA75gcC6FxwMfcPTzMq3PfdpM4fqUjQZPyNBfnxu6mnULPHuXUybMkZzX3HmnJsnp8",
  "key19": "4LA5RLo5htRqmEca3jGu13sqrCEktGpyXt5vya3XiXQ9Sms2FViNadopvrrfGPoMQbGHkdq6VKYjT7HgwWFN1use",
  "key20": "2pBoJHYZtv2GXiAiMbD8gm5gfb3zWtedSYjSZuCJkqUPtSe7DjbfeCcKoKBpxSzzAn41oRKA7atCmsQACjukbZME",
  "key21": "3XqAgrxi3dStFFKqqzpmABRfVrFF5bdpvJWF2Z1hD6qP7pwhQSSoQMYQZoSRjP2JdheBEWH9nFrqbUhyqtAw98hK",
  "key22": "2qt4Vw1rkNEikdb4NpnppY44NRQVjWzxhPqhsdHhidKTMa1n2NaKk7YymU7Ym5325VriVFqsTZrUowUCEdZJRWdr",
  "key23": "4iWbhHxjiSHDRQEwU2ptcM4GABN9eiozQQqmKVXDcGZV3s6p9n5JDk3R4g8rroYAwBin7ryGA17FDtYwSxvoLvqZ",
  "key24": "4RS54adMnUK2EEBbop9VCn7zxX38svgrvrjTbFS4JjZ1XrUjXnaCiL79ugHNiiNDEKd8k8ZVTFaEdNFwLscd2gce",
  "key25": "H92i6S8kgd36wE3bVjPbw18gwXKhjTFAcJkg6kjTTJhANKK8GGkWWY674WpDXUxwdPkJBdDYQaFmHBNSy21Tkg8",
  "key26": "3HWzgUpPa5turVYwNq8uscNz2gCUJCGzwQzQbLTv6uRHMoUDRuMUGbzYDnSXgNLS7YpEyQfwjTdRhZPv97cxxZmu",
  "key27": "37fNtX3yPKEkaBcUoPqY4hniMAvG12BXYeKp72GZEW5xfCsWQH6kUYeQvGo3aL9AxNyF8KuUe8hC5TKY8iV4AkZp",
  "key28": "5E5nFVoVRptWkohDFzjYZU3WFo2g2Cggf6NdCX5Js2E6tPU6xALSGNxDCAtkujewUURkr8dan8A6KXdAEEiHhBfQ",
  "key29": "65kaxZvv2Ygbnk6Rv4FkG4Tnb2xbbvwvFBk4vdPXUVH8EdePUNxte21xir2YUGa5Lihze5NtQFhFSaR5Qy5DRKFt",
  "key30": "woQp5Hdk5YY7Dua3aJyXSCqtkcaEt67MpzHVs5HuAZfXKLyVgQexLmhB6GgTXa9diQ6pkkoBALFWEifZDjsGNX5",
  "key31": "4MTXFtR3cTCVNMRVNsAWNtNjCG9irKw44t4kp4FBB5Ve1yZxeRYpd95cZRUb1zYd2DQvywDw5SGtExwk3bHSirTx",
  "key32": "5eCWry4CDak75ou7WoMRtMBQqbU7AdKnBXmhVQvLTKWGHQmsFoa8stETFeoR6p3VPD6zzo49nsAN9PnHJXggCQA2",
  "key33": "5wydMehPd2tbPwEH1Swv2tNuQnkCxvz27KVp6nhA6wTLLmAHBy21EBYsnamNQJXqPV5Q4HjSfukmmTpT6W45iMDJ",
  "key34": "49g4Aznw2X9D6nqEXSL7U1J1hgTGqWBKfGaDHWhVyRPPfnRihdDTQTDkKzA95NQiWEdq789K4ndBUkjiiiunnwWd",
  "key35": "4qDyjkX59fTLDnC2jfdPRm9kyx5ptP5L5C7swLEY7cVpFUUsFBrHJ2S9wHZEk1VczXNV62MvKrcbZjUaWccc2GJB",
  "key36": "2GrmsEXjaHxXCm9bWBRRi5UiZtsBh6m4ka3bjdgP2LSdgnXZ7eLJMzWJF4sgeiFRCsLJpLu1yBT9bGaXjk8DMZw3",
  "key37": "3QG1p17oRSiPBxruXedYTbEDMEchpQrJmGxhXSZ5Y5p4gShMWUt29b4AkFCyXZEMzaGHbZPHPUXvVo1AN3HYw8TP",
  "key38": "W6L9K1JnVopsx3KH2JN2fWXFgN1fV2q9GF7guTpwqHMtDE61SrPnp4wfvTCGAsPS2rPXcsQ4z8iDeKjN4LQiNsp",
  "key39": "2at1tSHNKoP2H4ZgnkFMC5AdRR8QnXkjQtREWwK5saEMNY8NP77e5mffqeLpCppnUrkQvp9dNG27PgZP24Djcv9c",
  "key40": "3LUNWr5yMvfEErtufkS5pcbNwqQcEDpDf8KwbDfih6Cnz9m7YYsPfYGowGho7D87VmZvZhoGdyB4LxADfZT4SyCN",
  "key41": "4XKfbYEkRznjnHhLKyxGmEJAkbWVKgzT3HLY1FJY3VRotMGW2HwC5YQecDjgBBKCWxhWfWZSkAJf1rHtMatB4KoJ",
  "key42": "3fnpoCVvvxjkVsagRtitXjkB4fF6fagHJ8Kbytfgx2qgDsMfBfzDsaNb6rzyMWnpgLA8LsVJMU6FKg2evT6TVN7s",
  "key43": "52swwaK6JYimBgQ9fXfbmmJPNGViqNmsMdCHqaTir2bfvhm8BKTL8Y34XCmfnj7QDcMMxL1CwdzVTYb9wm1fbn51",
  "key44": "gkHi1hQfUbBdDNXHLMoknFwhHhgLpmqALddNS8iuazQ8K8zfpHqHUknWe9z9fReef84gLWVkc2y8BSPLG9yacvu",
  "key45": "3asr7pTiAcXxouVdhqv34itZAvd5B5tSqmWWzcVmAUGrGZo36DYMGJgTmiA5AhGjusVJRqAuiwKEdpjP8c4dFhZr",
  "key46": "aDJMW36w95MF9A51CqdRkrheRLVv4RYefqcFkzTUj7pPYYGBU33LgExyZ1vVr4Y7Ksxr4DairaJAiwjcxm6n91H",
  "key47": "2abqog6dvpuKEpV4RDoTTKDhsrLUc7SV1jKGesrzJiJJDS7o3oRbKet6Qdx9wtGVaoAh9swr2GSWXuPo8jR5Ghkx",
  "key48": "21KqE9sWfNf3GBUqGkreEhoy9f5r7vqcXZRRYxpef9o5quNPgoDaaFBGmkgrS5wNgS1tYNJLFdcaAFxog4tXtriq"
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
