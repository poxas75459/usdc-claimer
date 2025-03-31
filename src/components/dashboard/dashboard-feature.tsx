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
    "JnTANanAghFCZM8nsyLgL2eSrbN4tGdgPY5ZsEerd621WPj8Hg7RehGM5ZUD78JYmenpuzDAwSj4k1jXsd5UbkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5txeqBKFTvQyKkyBYYMfZxNwaUSqeo8rQRE8Ze6KD2v9HsgVB555TgYsW5BV4VDugNUusBnBno4TXSuHJtLfs5gu",
  "key1": "3iTwxAbpitpdGhxqJpYH2UnBjEeecGPGoU2Vxy9L2QYEmPKnu8kVeWBQqfNafqBANyrDARAKoqFbufL1hTWmnxhh",
  "key2": "4wyiNGQe2mLNpiX7MxcksnGkaADgbE6Bkz1wNij6Kat9xC7KCzpTCThSJo2MdeLQhNrqbtsyVrVR2N2EL81cVLmt",
  "key3": "51htk9yHGdm2eaX8fzzdy4MspkgUnmBdnVfZNQtpW9XZxqa4hP2unffTcpM6q6GJQwz9ibRUGfMdRKkNfkyXmLWi",
  "key4": "5kr2ebPHdj8YEoNyJtPQBHwKgDMniHUMeMarWhUYkFX8XFAdK6KAFZQmYnAFCKSQQ4EaCgsjbYXPuq8jDenispQg",
  "key5": "5vUdCUkjvcA5QrL9kxUBRkeikRKDYc41PACMSsPDbVFagksihzCv57acnLuBDDYsy2zQbuNfhedPQNosaLsnix82",
  "key6": "3MjNHz4oGBhWHjwxuyUyUNNbxSQ2k3vc9ronoP17vGpNRbtBPHHTpdtgiGBXJGUDWaqmdxdaPEAhBwYRjgrJEjsW",
  "key7": "2vA6s1fxxQH4M5ZgzKv2sNTVqYSjCkpYLTZxRjWaCgSqXKEzwojbo45YnJ9kVubCbJNMDShvJu8F2b6GL1vRBAiY",
  "key8": "5V2pRbfcdpcskDz1gtsFaba6KvF2b4sq3Uk9BuFuk6PH2GiBeWNGxesxhjsviU6hp5V8gT9196fcAi9DvqcUkMZX",
  "key9": "55ARMFdubVxnMhAces6ACtviozFHp42MvqpbEZthhcJ8ysY8PYgiXaBK9T2dpD4m8F8ABE9gmJxMYXuSx9AkisZM",
  "key10": "XLsgyJ7ReLpEpWNW4ZGMBzA7ca7fUE4KVT8WKj7hRjF9TU1cGzDhjyXzSyyN7Szcwa2cL3neUwKbiCNCL3jjoDY",
  "key11": "626mb3xgqNeoEjEfvVB5puhqJYAcgyy5C3hjtBvgAT3stbCWAd9Um41gFCKjMTdA32n6GC2ezHmtqw3dNFaSar7C",
  "key12": "36FmvkQenfnNmSGwzoockCwF3fsfiaZzwpNcF7ZCM5URwfb25vQ4e3ykS7HHxLyXbAbQf4WmWFWBJxC6tL9LMULE",
  "key13": "4kyYZcNw5UiSajTsbbQp3fZ6MU3jB6tFS5EmBT8i8xzLnQW8mU2ECqDsNQBAxikZEZarhi7ZevHNpGrAroxPDhfN",
  "key14": "pmkaTQVUYwNWAVrkbehNzufXLpPdKL8tAuqSba1oGpynM67DaMUurufmyHzRf1ZMAehFKFekrBjGESPVjxmkXo2",
  "key15": "4t5y3BFSNQWbELZ9ajUGKVsjs9jrtsZwNZQHbwU6jPdHnpJfTMGc7w6Jwy1m7ahE9hbTVEz4mvzGaZMZPbsZ2aqh",
  "key16": "4nJLnAzm9A5NzAd1CBF5g7ZX1FC1SeWN66PHb7mFAakqJXmCmD5nAK1FaBBamMvYjYLfLa3cy1zXbYi4GHciGvSx",
  "key17": "5ggyh3VHDKXwustQNQAVL3Kc2qs5S39Rqe2DPwL3as8Bu95uDjEvmrvbGW5PMHFdvYDXMRqZ9TboFW4s9bU3FKkS",
  "key18": "3om77XbUDb8bntF2HUfZFWAsBopHnaxwzds6g972PgGYRhGP4nnKPhWCzJup48jGPmSritWgsLjWJffb8gSUcPCA",
  "key19": "JLQR2R7yUSmR6j7VAy5SdpobP3N1xry8EQmrun3QzB4v62kvCMkPT5aqh8mP4NtwKq7YMdZZZXEuq4pmFruXToZ",
  "key20": "4SHo4RQ1AxBxBTh7qEQCeBB7GfbaZuPsHa8tGiSiFo9i7xzqVdzjFrdGguVFHvQxrZK9cZjBW4LryzCPHMUfYyqe",
  "key21": "5ktTqawUZAkQKD1jxXvWJSqdTpe9ysp3nQ99eV8yhJbkFLiSHUfQm6ry5JkWWqL9dK1DJCNy442d7fgZNTkRtK2a",
  "key22": "5ZECpzjkH9FkvFTEueGvn4c8qYGkNGqeJFskeaTNiT4t6mUEp3PhRfqUvqonrtg91YgZYG4xEXyUvzjPe5WKhxJu",
  "key23": "5DJxAxGVHHBGGoXRg4eudELU8s556CJBqhA2zZtyoTNVMye2yKpfVDEQ3nDjo4ZZbBvZiS3XqYcWeQ9yvdf9Bp8p",
  "key24": "3o2dXaBekdSKJ2Uo5ZR23WwYNg3eJcUyRshQ5ryvArMu6iVZ6KV6VnPgiPvXkR3nGGt9nRUCkbWd6Db3tjBtxSgG",
  "key25": "SPDmnLfR57Zi2DUBWjD4s9tFnKSzdMRHYYVibrmbG1jjH94V63Rwbxp33DxQRsUuuCJqAhqsjE4RXthr7QHApoq",
  "key26": "b1UD6ha7Ek41phVUWK4LnLg1puNBFYUQhwRhxocSQruTUCMpn4mCFug1SEXyLRPUeDVjMeoHwYE9dDwsxG5sJdL",
  "key27": "5RURqufbe1kz7z5netv4Sc9YC5JKscoMYX38qHMVB4wfqcJfxbqTWfJeGtNnjKfWNf9r9oxyRiy8rp8bw7Tg3vnn",
  "key28": "5Kzs24cVwG5jLCo94W5bTKzRHxqizdDHMqx9eu7CRcAFSf76CcMoST8EEDLBsrfKuTYmzAkVF1nMsxPVt4ZJAnSn",
  "key29": "3fnJrodgV2BC58s7jXgGSjCdYVp2MucemkHHLqZkzAq26jeWvVusAFppdPCu8bQRX9KZnNoAc7X66JVkwCZN9rDU",
  "key30": "2dYxu7VpNXt5BN2hft4aoRySFfbFnoBFMb3oTjppuCaSzxxXWhHL7mNBxzG2k6hLJdh8VxP3VpcfZP8Lj6uceoeQ",
  "key31": "36NB8rgBJiSvutwvQy8bKtSvKJhiohMjc2LGQXzj36xcfN1cWposAnyqg1ErYCYud2ZRzQezbc4PqcWnpFriAg2n",
  "key32": "216mqGkHrqBWiMeW252jfKEG5ZZWwHGE31xs7oTDRi2ktqJDS6eSQ5YKXEqsP46FBdzAgSVoLVCwbZj363VfRmUP",
  "key33": "3qDUeSTPUZ418Y5JD4RLCEYY7bnKFSSePYCLLLEFW47z6KdUy8wpNqgjsXrVBLGVRH5ykuUokPHJaKf68GSgxrwf",
  "key34": "4Yx2XCPLufgTWz331bDNEP7bK6RopuNQ6tc2sKhkZzCAWkbjC182iaEJN1kBadnXiG374vNqkn7bkYKUaY8F8xSF",
  "key35": "4TTHzohw5qfMdCYJNFte1tQygpzkDYGWwSBYWoQknBTt13j71MDxPo5vREHKcdzKxquMaeDMHW71H5pmAnswGPLA",
  "key36": "2fULHDLZFZa12mqGL7gyUMi9wpoS6gM5WzaPRBzMmDD4mdzTFRExzrm1bJtbgwn6wToUvXkPQwYB3vmwd8pKbeCM",
  "key37": "2VEAzSJj2HbriL6osyBov697EihZ7tUaqLNq1SFjAuDAdZJvsaTHFQAZbnDR8GuzL8FSQ7mGrDhrD8MKNmBW8mEf",
  "key38": "27GUFCBgmPTQCUjpTuYcbjYJPMgFVhM9FdHV3nDdBScF8mmY7ig3FR1r7vznHRkKe71KXU77s6qnjHTzkfjtRUAK",
  "key39": "2Qrm1aTMM5AXZinnmLx9vk7i2MMfuhCgjJBCKoeu1aYSzQwHPAH1bvyFXTXwtJk1GcraNzgKywsb6UtBeesvkv82",
  "key40": "5fPBLG9uXvqQKWKtsHVDYAWwu8Z11LfVmg17vF9my7PGMam6QQTdbEcRnQGfKS6SBw64x4v8XdMS7fQDXyBWY7yB",
  "key41": "3c2GdpRJAduTPzazZ45MqW36gz4Kui37mhyKAggVMmBunobmABW3MvabxcMVVcVX9yqa3VN344owdKVtAo8rvPrJ",
  "key42": "2ZVEZ85kShZJPxKGMPqMLDnAY4bqeu64zDLkuUVk1x4kZgKAR5KpBZpkf3j6TBQx9XjViaBXCNQ8LwoyYz7qjVk9",
  "key43": "N4J5TYVGDCxcbKfwTDy7oUmV6jQJgSj5EWPWrK3gbo4kK9fPpeBcjKhFV78X4NgnUev9sK9bwAM7sDDxUHA1Rbr",
  "key44": "4F26a7QHvULFwqqNHh8E3ShXKTGGrbXsbZZFNhtwZGHvmBeAsRmxdzZABiUTpc3aSADtpmJyugiu5fS1SwWANB62"
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
