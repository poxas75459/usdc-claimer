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
    "49DB3ntiau3Q2V74N5AYkbgUU2b8zdeoixQjZqnjYzZLkko1BHeZTNCKMNgb9o47rkr5k4pmUYW6AispS16kstAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dQEszXaiNCT7MnVFH2KUNWVraKYzrCd2ZJDL5zFr5Yw8ZEsg1mCLQV44pzeAmomQgBSAAhV7M3bRhmR6Tc6j3fe",
  "key1": "5Lb619qxY9odaKDSMxhKvzfX9Ns5BNbZ2JfQDVisB4hfw5GzdLz2C8XHsTVo2u2dQCddrKm3dALDMBdYFykWSho",
  "key2": "4fbPKa79Mp2zp9kFBGvg23iQKcYgrUJpeew5zDM3SEe4mACqHAd1FFTZpKN9Pz8ycYDCjbFAEwLvPepA3AUYXUoR",
  "key3": "5w2iqXMMDkk6pcqhy1PSnHfPaWN1WvVGdvAZZSthS5ZNKTC4vgBUGX5ThX61tT3yHzBus1VFsuPAZX1NpxB4NPYq",
  "key4": "2dne2ghktvng4qtc85cqrfcm9id9bxeEYVR1eXikYAKWRfxRWYC5nnjF99NMpM58yB2MkykuC6JexB3NtKPHvM8Z",
  "key5": "2tuYzwdNty2SqAPSgKoGjk8GTMgmpMWXqPTAp29CRT7QB3WxyZ1dUE1LmEaVKe6BLMgQ73SiNToKxa7pchb7k9nb",
  "key6": "4YnnGJvN5H2dxJEWmSinN4Sovm6y3yosefdwTS95UGXqiQBxQHfMMMf7ynv1N56psB2vWvuNuenffVaRyAv17Ybi",
  "key7": "47sNW8LRcRwC8b4iVrR63WwPg2rLabftuA44zbZmTLXJtZWRonQug3dHt1fvmuHR6LG6TDBq62V2GgxG8Go1cDJL",
  "key8": "5ixBMDZqzudYU2JwY4bo7vPWeSpQJU5TVbBfjRA3DnK92kjXuFsMZiAfDZ3puDWtxpYWtAdirgr3DMyuonRxCtbM",
  "key9": "2QUSdgaHQ4R22L4qTwo9BHDjSadGxkEDkmE1W28DZRWoZRsWpoRFwyxuwtczN582FqyXo5E1FBLDHmfFH8dyyw3t",
  "key10": "3zXA5yvH9qsR3y2QKGREYJ91wDYnwSDpMRZM99C8SwdwqJWMUNRtwpvmg6DfMNBoDzSg4yyj1xhZh6acs42ngKEV",
  "key11": "48ffB18eJkcDy34uby4s4x7ZuuVZ4srq3AvHuW2FxktDuc3jmWr7YdFYX7WSWrryx3Ext5e9ZTNRDo1e5ZTJzMNN",
  "key12": "5L3hBXJENTfGHGWK3WukKPUkBwdQ3bxvSuXoM8cTmALSp8f6gyYjUBM9AcEbou3DoeELM1o1wptJC4iXMWxKitqP",
  "key13": "43TRasCrQFNGUARzVz3SBrT99oTc4qWEZvo65oA5tgu9yhmWizHb5fVQrDVH9jCPzqeogi39EjRF6sJF9vvbq97n",
  "key14": "3HFB2cS9gWF2jZ72qqMjP5AWcTyh8tbuGNw7XigZQFJDvCoaqiwLWNjUT6M8ioDxATvtVMu2Xj8q2eT1PiEdctCM",
  "key15": "5DEe5BwK7BYdvrJgwAiho8Vk6FZr3Hs5qPNWigwPGku8SB5GbXRRdQRsraxPHNbi79RfGyyCCMgKA4yQLYvswZFt",
  "key16": "5phjQcKYNJ7ZiTRpjiLsj3t9rcuezFUqE3RpBoeLNfjAwM1TCEAZonVt4cahieAa1RRtpZ1SQioH34nnTGPxWTjY",
  "key17": "639Rdt74NNeHNU2mzvWqCdLBtEZ4MmxPi8QeqnyMXWhX29kKMkYMxcRwci4r5NrvpSKrdbFrDeqtCta92eQaK2bX",
  "key18": "2RXFwo8MT1DY2BHmQjaN9JZS7XdDkUBxW14DB6TmAWv6WzkptYuyQNviVQcNEapra2T29hjaZ141iXtyVs61nFsd",
  "key19": "52R85gzJU7NqyqtXTWupHCRMq6Dx45xJFpZGkqDBuHbRcTozysXfevQXkxvQSMoUA9aSus8oFfGypcr4KshrwM9c",
  "key20": "3w7SUrb3JbrPJunpgevkwSBcC4RtsSxhqDsUVP2HokGjLxB9R5yYoTapbvoz8Xuz2BirB9JeJEpoyMC95rdiD6Qa",
  "key21": "desB3ypYL8nm8rQoshUCfAFARxT1KtNuUTDMWbLfX2kiwZR921wjWUnM2vhySWrzyiozLBCdXQRauM8g41zMwCE",
  "key22": "3hG8DXPHA92i2FC75Nr7QTWHDPAt6K3okmHuQRLBaCPjADiT5krabH1Kqexf7F7RYSkx9d3JJKGCjbuah25YSMBs",
  "key23": "4eSpUCsuvCQF4VTWv9uQCveBsQJweKeSwdbYFGr4oocbymmvZrXuUzcbWwWvar82WKfwMQ3UxysKEtiJL66mb3Tn",
  "key24": "2fQaYeY3Cq3r22aPmy7py6o2j4NfKemjC9xx2dRaxCBdBBS8RohpLJi3Tb9YKTLYnaUJbV7aVySA1ofNzauNDtGA",
  "key25": "eEFcWLiDu6kGtpBYMTpZ3p89nRjU8WUNnRCJ1qRQjT9CGFYHT7k1AeQy1VXRT4cbS5wEaZgvfhXiRt79rPHpzpm",
  "key26": "b9ero398QepKnb1AqJpHQWmb8U9AnZa85Rv5GVueT8ySXavm9HRtD36VKy66tC7vUjVzUuR4TqBFMc35JhMrE5j",
  "key27": "4m9e1j8UuSgUunUvTpkLjWhpEHRVd3RTeNry6aiDZ6AmkeXU754SU2XZSYcvjFLbcw3s9h43qvYK53YAxFMEDDEM",
  "key28": "2drbdUMMSWBe5EZQNdBXtTN9h1bUj5Wkd1qcgD5AbudxzUufiu1RWvwtWQpdK8aNnjF3YmBZxDwqt92jC5RQ8sbY",
  "key29": "4qoyyj76caGc47J6yjPyhC3TdNGpMiNZQPiZqc2mGz6h4GBWQyUwY7FaL7zA42HJpPVjQUs4wfwY6uiY6HpVzvJY",
  "key30": "J4MA3T9iqpPaZRhsNPvdQyUw41muaWxzCZPqj2AUxbw6SkdDnk16BLkHSKkcq9dYSrZacgPsMoPc93QnzvK4a9m",
  "key31": "5zhpnDRRhyb3ErNa564X4zThd93nvZqYVbcbj9Up27PemYSzrniTFPx6HFz1zsyFdWmj5RiBXmm5JgC2mp9CifCr",
  "key32": "4DpAWV6j6RNYFt5mNAwAuUzeUHRuziPGsQkaZTheikLpQ7KNQfs9TPVAx2WfGbCGAj7tZLhu8iYEkQ5zAHEE6Rvg",
  "key33": "5S1Y4wYcwTD7JVqYTk5vFD3HrwQ38hF6oNbicwSkngnt4KVTJNRBes2N8PVPV5XcaxG3hkxMFH7iCbspfjHHBKrQ",
  "key34": "2Cj6djtJLJknZkGKDeVVTm6RB4RQNwYucsQnihQAeHDqLC3UuT6RzhcaTuL5dos32W1QBiMogcNPBm5RvaeLEqV9",
  "key35": "3o39Yn8GSL8atpepYNaSXKkBFk5487yw1s1Q6VtmWtjiTHrVd5TLo4rUDeJctw3bvmuTwqRhxpnfkr5iXKpFRmYz",
  "key36": "otpTzoETN8TuKKy7nRxhAW8iCmxBz3o7HvNrJkk2t52KXtL1T6dzXKMMTMCKcNxm39Qrq6LAwqqQMXfoByspEa3"
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
