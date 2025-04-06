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
    "5e8pn73fERsCxpEZ1bx74ABTCvkdv6mYRZPptLVRWRg4y9iUJkUrdGGW1XBuQQ81VVQfr2XXqgpAiQSWbCmBEL8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52HH8jZCLi89e5eiNb4E4sHFGXavXLkHmLuhNVRzMiXHg9pSLJd4jBMuYuMAkvmaDXcr7meAdeQNt9uBDANjbcdA",
  "key1": "3wUEk47tZabH6dykLaBt7mVtjgxM5B5BgfH5vZ1xE6h51w68tXZnYFQkKU4sob2yoMiTRfH3tK6b7sXco8GrD8HV",
  "key2": "2BU6h1ZdjVcYhpQKvQbq6WgvEsm4Juucs3NSdu4yfMvp2FFhYmKuEzuf6L1WSEXs24fSLzkwPxkGUH6uzsnpn4rc",
  "key3": "67NQbReJ2ivFoEz8DbWW78wpCNQmtNGwedxjauEcFh9ktH8XP8wbiqL26BLKaMV9jRqkYSKrnX4JXpjzAEr41f8V",
  "key4": "3x2pacSDx7jxohM1nCzy1U6BcuG1KbovZGHi3Lqb9W68dqwcxgMc5K5Mkk75yE9kDXxBCmSQNDLHNiQaHcuuQ3kt",
  "key5": "gakmD84ehUqwcrLGGi86Wj9A54QNhoesUaZTmMXnH5JckC1ysDDRRUH2LTrnwcV6D5f8M2FA4jqRjfGkrWaFcDU",
  "key6": "3gwS2nDzGbmqnbuKcBR8pPSwmCXvpF3qevSfndotDi4bfzFmuhmotcASEUVeLuAnaPGifgTEgc6Nx7qoVMDExfue",
  "key7": "3mdsswKkQ2y621Nz58LwyuSgVFjRYsdJqncwdU4wXgmmYkgF4ihesNF5NsXzeXsyXFg7tfn6qg39ENLn9EJm5TV6",
  "key8": "4DxW4FSE5v4NgpyPmvaoCNaabHx5jxsjSYXhFiJhnxneTHqtufM5Pf1sCbcdrWPZBW8aYXk9qbJVmY4dSithyAWa",
  "key9": "NDGGf8YaQDDe34r1ay3U97NMzMcuZPefGQDvJs2QWEjSJuynoU2gjysyAC9P4sqiry7r1W5FiTWD4Xzm2vj3CjF",
  "key10": "43KNWp4N196z6wmz3y8mx5a1pJ83R6JcvjsyoegnDYt7UtARPm29KV3mCjNoCHPsConH5iAsNaFmXuoKdjCXCTHu",
  "key11": "4iC5KBEzvtZhhe25NqdgRzGaoPJaCQaZ1vtyUNFGntjfSJWLKcz3u8gR6vt6Gf1Xbybzu6w5FXcF5TgdoNQQaCnN",
  "key12": "2y67LGBYfSycMd8ccVo7maF4sQbgPZkjTaTnJvWtg285qSZWF2RVMb2rn1YbGCasQthjDC7LDbPWvrgeH2i6Gbda",
  "key13": "3QddGood6KLg88ToZvMgCLJ12agUw7rKJU4Q5pfFRCQQptkTWHgXQbw5S2XMF94SH6mNMMKEqvwR2fmGuyCg5Wfj",
  "key14": "35a726YE8sid6ashRkJF2wuaKqfNodwfkEimWEzF5A2ZMsJK8ro7wzayrZftU61Zmu3FxEK4mAGpF4vnWQctnC66",
  "key15": "ARenW49Pxj2DDvnvVafmobpGN2DGFwHKwkSaSeWRgocLkNXcsSsnmit35rkPpA2XM1kWKhPPGZFaESoX63AX3RX",
  "key16": "3mo2mJab16EfcmHEPxUcvqjugAcdDrBKgBR4FpGk3mmqakgEZDZz6XPasTMAqyaBeTZacVb718kLiCNMadkrTC3S",
  "key17": "44paEmipFQu2fdVtCgR141MScjdbFS2YkAG1LSmzG9M1wF8Ra8GoyxAAHGTZ8SHDU7zJRKnLDwVHA4kPqRxRr6qV",
  "key18": "5DPw7yUzGf5fKgPPMWC7DLG9AFaT3stXTdyKSoYR21AgShtAWL3LhBCDvdzStaxmB6FNfRLpuFcuzdjV2R97tDqN",
  "key19": "63eaeYTqrtQBt351h8mL35EL9K34Fmc5gpoBEwSRGJDVT1zsya42NiVsAoXrHxjpe7MdtsWjXFarHcQZ5CD1B54b",
  "key20": "233Qi3p4pS6j8CzZYpXZER3KDFCtCy9gfadjJSiZ2PjYepTvjZjPrGYQTiMkfNZcABvUJUHBRuwF8BkzrhkqfdqW",
  "key21": "48zeHabZiEwThw4SgKARVSFyLZiaebbHidyEusetmvfpC3SFcsYZ7V2GLiEWceHbxXTCgyUEAvAPCT3YcwA7xJUq",
  "key22": "5SeJQ3gAPCzddqaDfqiy5XzMKBR2j3Tdcxc6NvSjWS5evoz7LN3m46SErSGe6Y2o11NktzzxFpzJwEXKCMdbo6bA",
  "key23": "4ExFg6XQxEAZbGDpzDBE2wzarguTbV4avWyEThPV6QGmezYyGkeFzvNLzRGJV46bwJaUL1E1rNQscTpukLdwMvLE",
  "key24": "4fXCja1Z2YmeF6M9CQrd5caGRGct2YBjGwUE1mZ62pzvVfjBLDiEDwrfNz8ZigUYqwnkYRHH9Vao3VNgD9SSnKF8",
  "key25": "4qLUbTDBuPVQe7pbKjqqqxjY7BA4LjtYuL2dKmPvUjGm94ouULmSZg5F4H5fUdJVkUTQzv2LXRrxNqY7HLkSgeuh",
  "key26": "bEU6NyQT99yBfBf5yNwwYo9Buvo2YkkUukJvWEap3kwEJ31HD38XFnnuLtVECrFimrhsFSECbAFSm8nigs2ThiY",
  "key27": "3255HPugaMoJNsuDL1U8trjUrUVkYUD31tpjaXEEDSEaR2Ac9dKbri7eznAPiNJwCe86BxqE13bj2ohPuoCbms1L",
  "key28": "4WFbMmj92d24b7kmHZHZdmZ9mWynKasWtBoTFK5QJXZKWep5JPKPnMqmBFMGqSisHLLZeb9qLWQLtNeQAAhfsfAM",
  "key29": "3q3F2s2buacrEbiJSvqgRcqr8q5RpEd6Snaewoz77nUxTMpF4DX6a3x2o1N5UkoCKwquhEZomFwGaJeQtqeAt6Uv",
  "key30": "4VBpG8wqMrezQi81UVL7NyGyh887JR8xXzktAtutqiYfJ81AS1jgHeLLiZVWv5qqFUhTaHQy6T5w68g8kNZz16nz",
  "key31": "uun88DXMXcQvoUaqZNQJSGxyj6tHGjyPTLrTn8dzk15PLyKxeHQWdTLHPoVmDbkzcVHM6WquYQbWj8ofMSZkpak",
  "key32": "xHxfbkqSx7U446ELZkXUbaNYgRdYPCzzQzaUJpVCHjQpP6nCcMt7UuHRNY5VdESbtxLVRHJHTtBEFRdWNuXHay5",
  "key33": "5X6VuLegAE4EUospFtuoXu243ccQFXWt19KUirLALG7pMCeWNEzT2pdLYNtRLjBr7UmRDvDzmf9T35JryxCbX5RP",
  "key34": "2iM9em29Uf4uNQ3bxk6qMh8Jj8KtzdPpMyk4jd88hMCtRYNFubL9wmsHqMasxmrGsgmWzFphokTWeGfoWVjZ8SC8",
  "key35": "418qghBmogpQhBiydtqWYoxc5Kwmsh8rCmH49rLGeKXEifu6QmX27urb6jmtQ8wrQhKmWnTRyhG4LKtc98D5x5sK",
  "key36": "38iFaPhPa4R3XTrJio9VyXm8Wt6ibgMGDc71gHCz12zmniReBEr8UEkRQuGcvZWVbiDo2VVwksFaqLmW8XZNYDpv",
  "key37": "3uTT3uDBS9mwKcsttpcQiK1j7RuCESknZ5pb3NUw4iGMFV1L2WhkvbRxfuD6hNohJiV6NPrrbxAxgqtm35SyY5AM",
  "key38": "bBswMtr8xCBH8Kto2JXx2Tn7621ErC7PjvaUEvmfXmoAv2yMZbasTRkr9ruHAZ2Jg7aexad5umMjtMBdjZc2PGS",
  "key39": "2yPqhhkQEhr77uC46GYYckk35UYNGW96nEhJWwxZnk9FABuhVdcTLwhnyjvbrGQ2khL972fPerVeXq9FQBuGmVoW",
  "key40": "23Yb5UpsCmfaj7XLLgAS8TbHANLs6g3jqaLtbGggTYhkTige3cvCYDhvV8bXmwzW3XX5yV1Z3N2YxhRbXxBREsAS",
  "key41": "4ZCn38Qg1nkWKkQwgr5BFqJ2Eh8ZnSysf8UzonMFx3HBzNmCvsiMhSp2miB5SqkZHkUmjaHFx5mJfMKLZbR2Aa9L",
  "key42": "2Vc1KxZYJ3Y5E6nm26AgPV7FW5QMDsvFKS7bemGhsJNziEEyKdinSTo5DZvYJCEX6xHeScdyUCM1YxauzHabD2FJ",
  "key43": "4FAR1sTy6QLbGvZTpKoYMjn6P23nB8NShvPhU8FusZA2kejwe1gwJyrCCjepmxrytv3MQxhVncF9kvGLibX1gdtX",
  "key44": "2erdCf2JPKRnZtZ5HpbK8j4fB6VTh63mWkRTiyJgdkzRgHKqtS73snyVZGqQSn9eY3cKHPWBQ4YPK7oik7h2Um59"
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
