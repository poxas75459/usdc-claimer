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
    "5EnHhHQo3DJjm135YWPrv4dJkMcv3Qds5qcnYfxLEfTiaPpHb6PGnxNrjYLoS4fKo3ou3aXibKaL3D8b4FiZAsDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23K9fjvwvn9CcqeiEq7riaMqHsVmLchsHU6aTxD2b6vEDThU8GZEHwQN9CfXzyn9yy4DuYYBRNGiiEJpfpws59qQ",
  "key1": "Zw2aaHkvMXhEzus8zdcK6i3wXG5LdPwpVxJd6J15LuKajo3cNRtUzqxQdZZm2bjyPZcLeNv1NB4ZE5xz8XbarHX",
  "key2": "2QfBb3pccZdz36J2xrtYiaZKPbYQZfuDRvUgKCHTkYKiiuYF64z8NrhQtrqLcWXRenYeG4ggLFDGPP9a5G31g5cz",
  "key3": "5juzYb1UEZNaeCo9vC7SfbGk38sAFAceJwrNGL2LmVYpTCD2gr3pz4vY2eHCZkVSLztFaLhGHqsfGz5xj2ZDwLik",
  "key4": "D9BuWbeAFiPf9VSi518AyNZsMD4nzB19YX1mJdvHoG6Quezwin8ehnxQfKounXqNECgctq9Z6Y2DbRNN9BKpVQP",
  "key5": "3k5Dy2VHm7D6FVztoCoafzZ4A6M1SmprbWmYH9nS1S5VYLzisZmQinqXiWBj1i6dwGnaV3sUUVnyoSi4Z2Kc9kur",
  "key6": "4UjbyR1TZXsJLMqb6Jyzc7Mx3TMZ1rx4nm5xrqRwdutSQAMnYtsedRivKVb7BtYzW5QV31wx5Cvb6S3aqDLau4xu",
  "key7": "61ZEXnVoJS3JiM9mszS4UV6FAgQf6iUQZTHbsiUBpyzp9ns5A5LQ16cpeZTBDujDh2hYmqURqNmoUimJfWNZwYS6",
  "key8": "2mMvXrT2bvrmrxWr3q99gXXoLMQbJT6jWHavfHBqHNNNDL6fR5uj1Uuigzh6kYVPs1niRAUjcyuL1VSvomUikPA",
  "key9": "2g8WZ8zDZNx5G3BENhUnp3ahVNJuoEJeMXgQZZimDwTLY4HkKcVYohgVHWAUq4mg1FPMn7caEfwRrdfKRRmi7Ujy",
  "key10": "58KGAq8FU8w9sKx6YNLpg7MAxPwxQ5VbMDXkPE9tNxdCU6Axa7ftNmvrsk968JkKMnUeoMADK4qwyevchDPNiTXB",
  "key11": "2KLPVksBP1PSwMvHgyuZ537Gp1CM4weAsHoPHJvvwkXFGMM7y1XLAJDBXhNqXekKyfYFGHP8RZxrUN3H6tFx6iqU",
  "key12": "3pHQ6zUEL9mF5hpQj23X5D86drESB1sz3pMTh9WNvQTRxf1jCpSncPvZ3m9qiQ1jCSRbMiPf8BKsTE9tmMMT6FSv",
  "key13": "5kniUuJUJ2gdUBRwT2VmVwSStJxTHRxP4WTxEewpQey8xyuP6Dws3vSQzSASFm3LWk3chzSL7sxs3WTwqNFb2UHE",
  "key14": "2T56L9uAVTtj4RJRfyW3QkETFduEcGWoSK3qCwqTWPZrb9dUk4TMBhjvX8o5fMqX2tZPW5JAYXwdTK4zotASU7gc",
  "key15": "58qRqU1zCrCyM2dvnWpUt9oPk9s7hh3kLEdYw2UtR9XV8uFedk5yuNuKZ4PvqxomtZmGexKWyX6BYWxSTiaYWBd6",
  "key16": "4tJ3HTU3Tqt8LL3Fu6gwWMDMQeLiGKBhRiQJyTWyvSodg2jedoA5SFarcAPnHpk4wk8sR3U857BB4gZvNdFeTwCd",
  "key17": "3AECB1kT2CctSwE4N7nbaFSmbw1mAuEqkvXxD9F1bhWZWVnhHmNrUVcno6KkqEqkRZWEc5ucYzKHXHmkYWRQhoZa",
  "key18": "Lsm5WzHuPHH74qNVaNmbfuWG5SZZQaRb8VPMR12syMLcXyeXCb7dpNV4ZefYTjCUwTHKxUrmgidiGkajKwoBtsJ",
  "key19": "3Nqsyd7pzkoD2hgMh6jdPVpGZ3TNdoKyWP2f8ctScC2zSNJKzRV9NQdn3UYzVCawwMMs3rZNJWrgu44YX5e8pfJA",
  "key20": "2Y5ZNFBHXxVWKR9h2Kq8jPJ8L3fEqFBaZQQbGbj4K7ymVQ1sxQueJLZcGdnjYQqmL67iHcP1Di4LbQyNoVLrxJ2E",
  "key21": "LRtai5MeRy27sPBU72Ftb9WUtbitfVPFEkPKPcviY3FvKKYTsQwLsSBPduQzTeKQxnUsWBGvi2DHmC93NfQpZoz",
  "key22": "53z5Ke93N5Njw3RSVzgJ4PsGe7ucXNBjVuJXp48BV16jEq5XSW3dtHSXDaqbU16t2RKMQXJok9jzaVAF5eCyq2r6",
  "key23": "2cbkNWgY6JP7HhzWxLTzbLFKG9GxVwDDupMY2inrx8kjMnrx5frV2DijeTYhdMeg8HZL9FE8w63Wj8KhMhWDVWhY",
  "key24": "4eeNZxZMVadTvwh7xiniwESYr2eKGm54U9ZbuwtoXEL5cjQg79gKdY4aaPVR2qazgJKJaWWZhZ3uY4mbZ3cHzQea",
  "key25": "Z8u65YGbUEGKwnmdRrk9wmfAGAwqfj13CV2wgDdAoVfp53GKLu71bjhHgCbqqDgEhNh7u4p7p2ecGwwbKhT2ghf",
  "key26": "5o8xGTUjuFPcJkrzp8Wd8SwQC21j9DxsEpbETaZHhXJsxEYCXzUwgs8yZv2gjkEWo2Ca3NcWwgrDRYPkdPkhdtXc",
  "key27": "jKtpwtPa9GZaE8eFV4oMnrkoodWz2rYmQ8k11VUjbozXNEEqmFRU8uDVAyDCmMKZa7VJB8J99bqPELNaNQZa9pE",
  "key28": "N2mKC4w8uQMxpSAfkZMUSVsWNEWWRZ572ZW6C7ADt43gBFN9FNFCxDLsihKTjKkzFwMAeFXtP7UVR2KfkTwk5eK",
  "key29": "9KSTt7bnk8b5agRu6hzdS3fsTynpFuiQv4Tt7Gt8AVSvEYeyMhZFrp8EbQz5eeYYjb2WUB9XHPFATxDfyjf7dGW",
  "key30": "3Azb7D32pwhPK4AEMfhx3JwksznVNfBgu8ptgSfn5o6ftTcZ2kCbm6Z96NNbjeEKMrmMD88fTr65ToC3SaWQGk4g",
  "key31": "5ef2rcQoTHhBdwQFzVTafVNgu7DKpxPKKbNkaEDM463iS2qgG76MjvfpNEUqhqSKi85LYb4cfpjfjaDyezm3KXAG",
  "key32": "3WAoKSMbBYQsGBDPu1R53gRmsshDFoJJRekSYUyXvot6PvktgB5naKiGGSXPtzLf2Jc2g39EzXh8tDUrp3YG2kcA",
  "key33": "xN9QXKLtViCtHjz5qpipXPQm6ZWBsuRPNoKU7Yh6EvvQADguqEhW2WiyvqS2AyBbyAYSZnUbt7HTvL1WCqN4W1S",
  "key34": "2fEiCFzZv3b9yLi8XoCT1jNKsS9wV9fkkE6ksYDXwxHLK2aV6dSJvpXJKsL8pDYKZa4Uyidb1rByW1D1wEJ6eWo7",
  "key35": "EKnizKioDugJqBXemZmjeounn3DUbjhyQA4sSes4oBT1MRFrSDWhC8AnPAcc7DiP6PPMsbHF1FYFftJqcumaXXW",
  "key36": "2FwrHfYsiAcYfzCJZ8kkJBYe8uibSyYYhh4Pqj3bNvqc5GnFCEWrYmitfDji7kAJFnvbe1mAva8VNchtf7ACvUvF",
  "key37": "gNeGkYm6bZesrqWJ9saEBe2yndXZkGviCkYXawaUa9m1DA7Eb92EqBFAdx7tjTuqrUtc5B6DpKrkUs8ka5jki2L",
  "key38": "3QXgxuwViX49a7Pk2SCUd6UnowWSaWDe9T6nnwFU6w87d7Wh11vLrNxtAVmyMhfSiLctrAhCf8uffWH7mNACGui2",
  "key39": "5GCnT3VXyr3HzH9MUJRFzToCB9Ls3nJj7e8HyhXreRFrpTtyNf5PudkBDy9PeHZhVVemdqTPezkj4fGMTZL1qUn6",
  "key40": "4MQByCdz1vG6R55Dr2pgyi5qcDE5LY1ArgL6gVKppoA4QBU8thy86ZXtXzNbUBV9sAs1kEttAqbrtL2KwRNS6x6B",
  "key41": "3uWy67LhWpzwu2drG4593aGqKypC1ZxLZNHtpXKW5NG6YS6aYDL1L85qFB2L3PKVey1V4dHsrjeZWqAWns5beawH",
  "key42": "4pejbMch1Hiq5756xuaH4vCV1DKD4KppYVH3SxzgM5rCpbyyMtHBu4HGKSnT8Bi4a9m7NKFg7ydAS5hZKmEwuf3N",
  "key43": "4PujtSBwsMeRGHAAZTMMS3Jxm8u4JabTVYrcwZsCivWqVi8SvhGtzqBUg6fQtQKDZBBfYudQDbqrixebkqWS7TLp",
  "key44": "1VGgSaMvywjbeAm8AqbPfV6jaPNvtssacYveU4cSZ9h9kZh5TnTbWUGiASGv6aVuaXAPH3bgxVBpbBu9ZPQBrvi",
  "key45": "5dGKzkth2PrLnCFj8teugWSjVtQRHyt97xiTHwak2GmnLLkb5SVBjBXKn9W2YdLwGtcZXZp6e3ibNPG8B9H5Sf3P"
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
