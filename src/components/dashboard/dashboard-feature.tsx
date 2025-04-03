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
    "2fRVUvdbe5yenpQKCK2xscrvKS6esCEejbcRpDYniyDiqQiFiT6nDSR8zFEjW46X6dHegXoCYmkAmqksRxh3F1pF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rCsfipZya4d4fqTSykFWq88PcN9yecgjvjvYnvRNuB6k6GQJ8GfFUX69CrbU9csGNDxe4swBbTkFbarygQgAbfh",
  "key1": "3wiAMoQtn6AZoCWCpoA9Ez8ZtvoRUv2jucdXZpPdX5LiJdhENN4RyqdZCzRU94UZJWwDLdk9d2dnybsxRAjgWRgk",
  "key2": "2VmLQjCJhopWbdc5tAVcgaU2r7FzV6yicrADKmwTecyJfx3ztXLbWxnyK6naenMeFGbfFc3CfjcaAr9yCR7GNqqq",
  "key3": "32WFVxfHsSeXEk8d3hksqdEkT3SGzbb6bkmr6AyzDzEd17RNKPVKGwUsD3uAAMb59bvNfPvHeCCBJVmAWwCcYh2Z",
  "key4": "5g97y5bBKLg6gFiNUFrNBtin8pSqx2S6xNkBXp5xSw6GzW2WpV9T6qRx6URnNAQVeHkGb9JxtkpC1JwDEyYfpUpB",
  "key5": "FZzdeGArq7tPqoN1DBMdrS3apn3XHVAkHrZX8ea4pj8FYszzKKJnmRasW1AaC7SuW4ed66viTDus6GTABoJRgm6",
  "key6": "5qLxdLco15LP8fFVRFGygpb7M3me8PycYRZPfwxp2WKaedC8id6Aqu9ZVFM7zyVv3Re2ghJDQzQWNgWscW9ZUesR",
  "key7": "3BERJ8YZJMk6baDbL1GVZFiM1PetTcbET2smcBpSkEQtWQNUi9tHxvCRgYAsLgJaURZH6fhU4E8dTMWfyqMuTG3Z",
  "key8": "3ST85HkvY2gbre3r7CMLAQsbV2ms6WunfHXki54CLxHSoNkwQNLZkg2JKkcEZoPACzCMgKpKqBFYVTyDsUduyax5",
  "key9": "4DrNQTXPLdydjXnyyFXcR7GyXdG2VpuhYR22np5t7T6ScwoakbWfQV6TCNPVycpTq1ZhE2dcMvU9LigN1JWKNewB",
  "key10": "3NyvT6XnuhXVZWscbyUJUS9k1q5D98tU2RV38GacDkkryDF4JpvtQmyV3RYo5XXoShedqshqXuCWKjmG4FgMyVCM",
  "key11": "5ZqZK6bLd5cYS8bE2hvRKz4Q3ZW7HaDmpyPUULa3TvknDegvL28AaLFZrEhomHU2TPu11CCnoNjx7dCk1azEfERm",
  "key12": "2nMeSBfeRBK1wE1oXdii3AKdHpzgNWFwMzrSDWkj1StQJPLgCtWRiUJMVKXU8h3xUhtEwNYujwxLT8NBV2p3DCa9",
  "key13": "5ynTVmvDTmFtw1vDXWm5eAftQHJn6EDzeAxnhWkYXHFLZZkEKByQHWebgXu4hg1XvJNj6mEUEDrhKXm2k8T4TLDt",
  "key14": "26fe41uU9p1cRdnbGvBrEr9qb8nb6GHDwn9aDyzspw6mNFTNwUsyvsvUEPqER91muLsQtjWjKcLChEJcSnnyjHpS",
  "key15": "Ckj7SkZL3rZSXto5taVwYX4X4bQYQN7PrSJDg8CW6xv2s5Ug44xNJF5UaZfNxQ7KX5JsXsHMgK4tsaBVbjEZ7kf",
  "key16": "CjFQJCFNMzVSVwL9LqXHjpkUtumtMQA32FFV4qeUQGDmUx9WCfxdDZmXBwcoMroJSGvg66n6VykoRdVZWv6NcUm",
  "key17": "3hBCBcNYwcwAFDPrtq3Pc78gQAzuDDkcWC4M4JTdpqUQDEPTLR3DFDgVphSAu2Np6J2vKZwA4VC68Y89SfGC5pVf",
  "key18": "33AtcEuUP6Rb328CmAgArXYyRvAzuGaaNZqM3GWoUXGp1wRVrvXxHzByzdsZ2dMuYcutkc1jvcnacv1jELFABDPv",
  "key19": "AEDkEtM7oh83xc6np3mWAvAqt5FHKk1mxRd7AymCE7BPqkk39b5a8Pf1V1KjtgujPDozHsQXKvSv2XPXeiw54KS",
  "key20": "xzwDy4s5fHRgZ5tVT7ueUXxtXw6xc5jV5aijq8YKqSoD2V6bPdMvixmgukNotLAT4VNurB134ijmoKPfing46M3",
  "key21": "3WxGPE2JDGvrCQ8K9nKJrHcP5Mtrwq9NHxqqbhS9Nqp8SVWNk1PiVCGeMRtMXFFnRpJtZK51PESSbeTLke7vAQgT",
  "key22": "2tL9TDq4xqFBrj4yurjUQMaFbDPcVU7EW8CK78GnsAAdrgRAwhDk2bcajG9uVRLhYzpnKwqr5aRU9E1sjEBHeMVt",
  "key23": "2URm1uJ9pUqCXdNEeXsNBmV5pMBQRiMqDYk8ZrTsQ2L8Fx7V29vhsgJ9Pn4X49Bs5jsVhfAhb2maUjgoJiQw5fXh",
  "key24": "53bZGKxGCQSF9E61ZpWBLtp8mmtqgy4U8Gq6Bc4Buk2ejtkSbcZffozyfNUL9R7921P65U8pz6TgevmpNfMsJzim",
  "key25": "2KatYNH5ptLoAbuKt7bfwP2eKGwKvSJGHyGK3zbpWeM8rxR6FeLNPE7BmpECsr6HUerNGkGooMYTEtmi7xKBha84",
  "key26": "2JBGq2jfs7KpEFXhRogcA8g1HeUBknTGXLWc5ckBucCo88JapUUB3gx5VkyPYP6bY1g968dsaEXsjtT1GSUa7Xig",
  "key27": "4FakBUkqwvQ7vRErag4JnbXEzoX7DD1hTdug2mgZ8iSSeE1QAV39RWNeKbd7YsFUr5KSvmyPDZ5gQvJESy2dVzX2",
  "key28": "3Ys98zPtHkaoRVH8ZuPceEXyjYcnDszxtpBTmFpNRhyG8H9tifzLn9es8X5JKR9uLy43FBP2rhizqPMYuaoxxBhn",
  "key29": "2pKzbHzyP6LooF9Sy4BsLEJP5JQxqDmxzJ4GiKWdR3Vjw3ZEcYWzXuXqVFHEPVWscuJcyzGyovoMMv9VZk3QhgBg",
  "key30": "BVfrpF1rMCbyJSXne42GqwzAr2YevsWHEjkfd4KtDQKt3wtrCv7TxHsyDtnw7BQYMezvTG7L5aakcJCkKdvuDcX",
  "key31": "3MgY8xZ7m2KE35M2xjdjHQEYBw6mkBxifQHTMGe63eDTjtNVH3nq3s2nRthUArPF2M2xqojTzoiiFUQtW7kBEbtB",
  "key32": "31WpiL25AyPzAGmq1eixGgDzfDCcsWhQxZ2ySgeDe2DwhMatLcSn1cTiCBwjqfysD1KQ28UXfGThsmFbFGC4gL1N",
  "key33": "4Hi5zWTSAQD8ckcYyV4xoMPwhg5HXLoCn2aWL2AQYHetADqf2GSk4XP7St9NszAXeYSZFWLGpXzi6k1edDuyrs5y",
  "key34": "4rwPoiKQc16rRmzquehp4XTMboe5T8d7WqGhcxtX64TVG9sCvAnyxSmNaboZBn1wQqxwr6mVSfZg9RDhvYV2VVWk",
  "key35": "5K6PCPr5X5WtkyUUGTA4VTA3Av1Dq52wjKc8QCmgrXyXi51RKj3EzaEnpv8JrczevaY4233NrE5evp5zn7MF2Vwo",
  "key36": "3XpbcBQCSmyYFfyV663Ufa3947qZwdEwhajBZz1d9Cnpcy5NBP67M8UMn47XrLZmJZw1GyJwqS6eoft9oFxiwmgk",
  "key37": "Q7rLpY1vndvrs92ZJDo6W8m7wLu1HeLTjWYhNdaKamfSgKpWfF55zXHHj3P7bsNTXpkL9DFyYsUuwrDnnbxrrAn",
  "key38": "2toPA2peuo9Yzig1XEwMQ3d7aWRNeYKD92NYFvGMz1Nk9F2jMVXLoPL7mLqrqqm9HXiisxBp1mQJAkD6sseDMfmc",
  "key39": "J1HwLoE9C3fQn1xBMaBjEPuhuAAbk1vaiQWiay1haLKWJcNkj99ctQH9P7iUb5THp8NX2jQx9uJbqwiLq4LKpHY",
  "key40": "3xGWsKgtr5CuMTzE1cS7bi35r81VPszReEyyyLhMj8XJNuLcNu7wnoiyDnUJsdwoT6K5HYqBmeFaqmNihdyJZuqx"
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
