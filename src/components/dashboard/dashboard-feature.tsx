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
    "2wLZPZT1mqD3q62MbdXitdgcv5PteY5PgZSeo58YeZYqFjJ1UcvemmrQvT2z6fGwGHpHJ6ffZjtGAzezWiuukSti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sf2BzaSFvfFzq695zXiPj7MXPDaerg39JKmUdiH7xJ78imRzWBULAGMxHWx29pwk1LUDv8tcboHzie6ADhMMRRb",
  "key1": "5hm9mtJT2Q6Nw9JbPm8J4qJ6FD4MfqNcP7RdtdXZvT37rnZgCxzBWvZkDx89rWgsRXvn1oi7gW9AKVZj9AtKvLWS",
  "key2": "2ifmDj9bDwxSJipt1UroX5o3skYaRWfdzXpqTo2R5Dfj4MJakNhN31M3vcZ1SvcEP2qqbizHP5weYAJk3aCAFyWt",
  "key3": "jHR4e3u1AjjjpcZCtDZYfeDd8V9oUYsdc5K1vPnDUZJMeENu6DSce6JGQNzYCAHvYuiE3CAjFCmh9sV18uXakcH",
  "key4": "5z5Vz65o3Sgfidhm7A4D3uGrR4CUEHMxhij5GBogyEHbGPoP7RYBvt2akaGuRMA8nsHPxtJuRPz3npZhPzG4ZNnF",
  "key5": "2AVE9qHDS3rCtvNGSbQeB7hiRxNwWdanb7azF7asjCLFqNfg38Hw1yBGkzMRQ1kzvGDrkk35umRVvVifghvsqj1u",
  "key6": "5U6m7dqHnPE9FL5WUUL4h6yrjB7r74UwDfDPmXbsJ54fNw6hLznAHXfDs71CpXTdtZzcXERBkRAZRRY127WYozUL",
  "key7": "4hDEMPqvWepSN19wpxt8YenoLqJnUvXdv1A2zKtexcgAR9fvpaxACtWfPPMz5go2NB7Tby2WqkwuH76mQPnMNSSu",
  "key8": "3oaK4AnWG3ifYyUrJQWqFuhA5uUZjVdgdbPUMkmgpco81jyikYTvrpRQwtPz51dWC8g4WKAzfesrKrrdFFYzjpmk",
  "key9": "MsTKkMxJzEiCMkQL1Ht3BWiPZPBf3ccjqHPqiwThEPvowyVHjS2FmsmdqMUmKSfA1i9SwGpkwwsoSfBg2Gbnv9L",
  "key10": "2Zej7uNSk6AiA7HKaYdiqnUZuDK4w42FBPPNufuM4xqJy7jomNm9kRavxocGqcyKfrpTqpuvYavF6zQNnnvvNjU5",
  "key11": "4ZBkkZtifySeheHJv3gzxGvD1h2vpwqJeK8Ti9NQS4kigK43mkigQBsQqjztB4PqYFgbnVvZpdxfCYE3AkA4Zz7B",
  "key12": "2YTAA1nrPF2qRdtaVcqzgm1w4PinZnD4u2qAhsswu1Hw2ot7WJRT6qxbG53d9p5EMxn9pe1eQEEvWqMfy9TeMtt6",
  "key13": "5cVSwB3ARmik3NP9ecTQ9TFgV7oYkomZ8NpK2vScL75S19Xf4VvFhyhonQdjCyBkuJLNbn8sEqbBwEZNzdveLXXn",
  "key14": "RPuwa9BRxEWvhgCVhZVpjssMHjN635QJ9WkUaQMu8WkVRPMY7qzgKBSjqGEHSkcW4Qj4CMoi5wQijbhHweHvJs1",
  "key15": "5pjpEbhpxiEaWxWzZarfmh49PYoagis3fcxrhgYwMVzs8rHUjZe5NtCKLdKUNBYJrj4kWUy89gh8gfmKFhKkoUyp",
  "key16": "Kw6XmNt68U1zUVTcfNR7tW1DNKrynFs8EkoybvSvQBgrEuaVmZgwFEeupm9UuVZRGzmpssby9GztuAMjb5Rzhgg",
  "key17": "5dCFKceo7ViLB6jJVCCt2QJE76qEG3NVu8koupzLYou63RjduXqsCJs2pfWKXjp9MdpDrMns8S5v7Z45pvt1sk7Z",
  "key18": "Gt7b2J2DeKyizV15AsRumCGEADtfNWavKpA43wYfqa1XtGDVSt782NvByibRri5xxQedjPbDmHQCoapcFLq2zaZ",
  "key19": "29kwsm9PxmbBmSsF42uBXxchQnpuV1H8zJuFkDXpJXFhFrzc2zttZzK9bo1TdaQVGMgPFA4Af9hBRqixc6KH9Wgd",
  "key20": "3NgVgKgPy2zzYtASL7WgZKCfSa36TrX9KT7khFJkCbg6GfD52h5MGRM9cawuj9RBvwvQ2SCEnD9b9Qkijs7FNxjt",
  "key21": "4iaKCDxoZbMVo5wfvrMDqShNnpCnLv45yPwVLVRUKi82afZZDkTsQMYDTSmx579ekAdw6BCaW1pFt432BNTa3ZGF",
  "key22": "4vEQnjxbmEiaZygga2pAUxpw3D5ELirNLg2rgb3P8wp42AzryKK2P3NnYzYAdZgsgotxbHf76CMQSnDYXJUksaLn",
  "key23": "24PGRC9LLQXTAiAfCWh4YmHinfQJGMo6166pGyYhHeySscEzCnzBs8UjPLQeh4DLCp25ZyQcBZw6Ce3vBTUmTgrr",
  "key24": "2vaX5NfFFtmDQutL27G1owkoWXThZX8ZXvL2XriVoS5oWY8ZpSTDkstA6Ra9xHEDwvURhoZpLqbV8XWuSkoDGc2Y",
  "key25": "snzxobLGsCgB3pkdM8rBWZ64msxEpuukViUBV69afd4X1cxjUWqHznWN8eF5ST9W9HnoE8des5iokCfmFYrZ4aq",
  "key26": "4BeCXuKrkyne1T34w3r2nywWQC9wmRj8WapjkHNH8MBPdYbb5Q62RZdSgAw9uTeHCr6AAhnHpLnP3fwe6fv7RVYU",
  "key27": "5vE5VYA9X3jnEmD8DTJwcbsxZfVA6DZjp7jCdiFjhfg9JEShPSUwJ2LhVqcMA37PoaKKtpemVDskNKaJqLJUTaDR",
  "key28": "4ZQmVxXeZnPmcFcFmU93ghkjmANKvLg5AMakc1qWbrf3wYvAP9NTSna3w7VAsqwvcyiJHcVcjeQrBTfPPw8WnzE3",
  "key29": "2oDK9Hqaeo3evae3z8R54wsYH4yRxWYE3HgSpkpidsqRrrEbpLKW1pFVX7BdwTmgjMvuQ4wboq1YSLvMZABdiwv5",
  "key30": "4PjoWHPrao9BZoXrUoQxKW2dysKHuu2ZTiJjoV9czSaKyaV4iE3Ytq9wTzDL8z95zd95WD5YGuEBNr1HAGXjDZxx",
  "key31": "4tnwJLhmqBrMXMK4mqFwvVvJhckYz1e2sSVro7tnL4E4UE5TYY6H9zwxLLgRooAXyWhdcYcmXuzdBAgK6gn5HZMd",
  "key32": "CqHQ3L6aJB3cnTWhdEMiJ6Ju5TFdLUiD6VhGYjSTJSp2PPurk3EACZWA6sypQxA8GHV6Kss2TsW7GDCgD8nqb8W",
  "key33": "3vmpxDwK5T8bP5Dyw1pDSWGEeeqhj6bd5MogSUAiaNntqfvi1ZBpMkZDQs6vwSG27HTdyUSJJhtcsKDLVL2PZDdp",
  "key34": "fiLck1rPqq4oBqCeAEAkxtXaAfZKzvxMNTsoWwrwGnVPudMDE3xtTLkzKCYcxpKmwgraczYVhnu3Pg57un9co2v",
  "key35": "3QfyawDxKdaV4FhKk7qdgHo1ZWXsn9KW9K81SDatfDGS5r9EZvBfUXMT6jSsCEsAUtZAzRrksuwUipzTnR9WEYZJ",
  "key36": "37ok4SbDM98Twf87WfCpNmeFeBNtorPRLZ1aABGpiDfimW3jttiDmGf3NqdA3F6WK21x2ANZ152VFh9UHkWFKaZK",
  "key37": "5FWtmQKY18LNaDqbi9akEidNbWhEVLhwj87WK4o2xXyCUXogNdt9YrQjCqZ1DLgeEqJkCa7cMmiyDNso4qJd3jCG",
  "key38": "3gyUKSpMgXu4zF7qNr4yvZU3Jx7mGVgqMnVuiAx7srW1mG3SCJWbv7iiypFicW39bzXoQXAQxh2QDEeZGobC3gVr",
  "key39": "2XRTfuJqXSYzJCEvpVuP6y2QqPBng53f8yorrzf6q9yJaSZ3heV7ZrHziQuKnBQsfSGPkU9FmtdrPvgQUbnQkmce",
  "key40": "YFTjE9eUCuHG1eqkpWvg2RC8crpJuAQfSEtAs58MUZ6aqXCxTJ8mvL4QMgNkNTP1fULi77TRsY8M3X2fzhzguQj",
  "key41": "5etoxJKe18CX1Qp7YMBnqmmDdXf1q2GQsLJCCfaLvrg7XdCE28g62PpntVEmUghPFFFLJTuSKSypxSKPXoLNPs3X",
  "key42": "5Qt6yEdWK4pYEDAKAyFNv6HequTpXJR5LH43tWKXvKaYJ1AioE2kHUyq6nxw82mp5mWBEjuP5taDjEis75cAGYsQ",
  "key43": "4QEJv8mKkfSKDYjrToNpsZ2b7potMbWPQwEFciEGSrUWnxqhS5QAfVguCPHzxdoB6dhrki2fgiYnQYMgtY6QhoGK",
  "key44": "36YYz9SyRwRYTVNaEjjGxWWgUyL2yG2U9UAiFWPsV83kifaiAGKsHtDwLDeeJPmpfrTTVvWRADxB5AMB6MeQ9Zfw",
  "key45": "4U1TqRY49YqpdsWvWXQ5myFqW4RPbJjhiKThqPfWamQn83R75E7yApypg2Ut8uxEqehvTtksSEQHsgBzxaaLGN1T",
  "key46": "3agFNS2DboFWHuwa3LFdkY7URixTyi4TBetorVAzyoV5Ep5y1kuDpMkg5hrnRJvXReyht2AL8TSGR1Ne2QdSvcWy",
  "key47": "5vjpZLNK4g8Sko3xCrKT7fUh1t4tgcugJK3ysktVnkhAyjQPGMewUJP3G1ENFbddcTman8voQkUXe8qiDMSvLkWZ",
  "key48": "2TFBh66JLDcueMK35X1PABendukVZVmhcKL9qZWUcJBa2WcWAhCaW69TWdXSunYpbBqkVfHszZ9eWySjctnKeV3J",
  "key49": "3oaSMRzfHKwjT1uqFEHHV6hGGYnC5we83ZHBEYBypNukC2Bjuuinm31R1LW2G9GGuzWnKj5aoMoADqYrAReR9CJi"
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
