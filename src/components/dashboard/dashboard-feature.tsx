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
    "265VoqbNnMpYtUMwv4jyuhnAQzBnbfqrD8KAj8c1ZbP6B7pQVw2EeJD9JfwagLGm9mkMbSJ8X4EA1DKKVMyWsDmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HU3EivMFZetMSaK3JFgrMAj8PoGdEpYRXVQdWwmrfdenGuHZLJrfVXWHZtVf1e8WMQMtgyLwdN518VPULFU4sFN",
  "key1": "57zkfcDLnBzH2tASmLEGLvAdLAXdUBJhhpfzwF8GXXFZrAFkcpMGTaDCfQ6DXUYiZe1iv2akUznyudFakHBqrhuo",
  "key2": "4DwmRJuguz7Fs9JcsDSAfmXsxXDTSwxfr3UCWgZ7pKYKnd5Hge3QqyEQjpnULFRrMLnGYzGYdk2oEjDEd7NKgFY4",
  "key3": "UENaXGvjzGcn5sqVBq67nNBX5NVkMAXebtE4SeLoeh9vSTahGKbQFuSaxQAe433Zm6mnTp1rhxxDzmVCqJuDTAY",
  "key4": "2hAJtRBXYDz5VhwZWVN3feceVLu4qKfRfXMZWbjHWfMGvRKid92ZiJWxqyZDBFFab66ZGTA6DFrhveLwpxBuSmKy",
  "key5": "2Z4fqNrDtVHkPYzH8zp14dYWW9Q3m71GJCmj6kB7PMt7Mo5nf39tGLxMvP6MpUBbnmcJjPFHDggx5pApPuZ1ybWQ",
  "key6": "3BBKAZuLoaFgxSty5AHBDiQzk3oNGfvxYALWCKstPoQUbVQw11CYGhPiz9ZNrHewQQKWpkNAvcMpx9Jy6APkv8dw",
  "key7": "64Zj1E5K8FKPfEwjJqX6h7wK3UBJ4cUNMbjHQzbhFiEtwNpreV8uZNrkPgxLKFjdSKGjGbYVwVs8ovXz7ygfU3Ng",
  "key8": "5x9PEGKE1zXfqPDkb8k8mKFdXQYa2mB2XqCyFcFuEgD2gzPb5CJ2DPXZJHaPBSjLJdj5JD1igAFhPZQ3cCbQjShK",
  "key9": "bnSaiv6oV9WZRwGNZ8gSNpnW1bQSGdZzC481kjmdHWqPCkDNXvLp66Pn1bdHTh9MRLMHPRZomuSjBJdR9aw8gC2",
  "key10": "4JoM5jTQpMqS4V6Rb44XAFY6e6SpTUSnQsvwdn7oHs9riUZniLG8purYrcmrhhaVTHRxuMoVvSXvoNtRYqLsMBCA",
  "key11": "2DMfwkcGsVp2na8NePxxVRuk6vrzTtBhQDFXv9hnYuaZo2qMdfSRyFqeAWkKpKVLSvtHSvzibja6h5mT6spZ9Wei",
  "key12": "3TZuZgTLpTHhbgUGPA8uX6ZvTp35tsYCCuQvfVFDQVG9Dx3JK6syQE3Xqegs4ytX8bhwqJYS1undY7poeDgKDFSJ",
  "key13": "35etCTJt9VjSPxFKuCWnyRjBJ64rgKcPz4K459Uw95BTGro1QYjxbuntzDu1ZJrDNPVDsr1mx8rm78Uxf5aBAuf",
  "key14": "46zfR4FzP1AuvvXvRV62wC6Arjk67JKEEnfrFSJwu5cajyWuJyHMpU1BwjMrRaU4AfuN5buqfguGAyD1QhXBAvE3",
  "key15": "5uy9ipkkn8vcwBCcnMp67FhSJ6S278NC9KPCAF26vHT34Nsf3Mz4ZCVDRLeGDgh3L2izPGKC2uwnHjnGKomkBQyo",
  "key16": "2WJa6UoSA9cwAMZGV7VoZLP3HbTMVLoybgAxZxn4pNVNxihAsTgyHJXy8oBkFHbLHrTgt2kEtpDCDxtpiDEBwgB8",
  "key17": "3sGyjnkvd3TbFV4ofEsqL2G9KwJ1Tqx8bBr8cBeeLDhrAX5hRpWo38CjpBz8bhbvDqZyUMaGrEoo5p6RBfat1GsY",
  "key18": "5FhECLkCKw9RV1S1QddRyws6m4Czqe8qWGWpbQPKQXZTvRpPXEhMGWitgGtbZGLdRw5g1TZo26sek72aULiAi7kf",
  "key19": "3YrzS5MDuRkhk1Epi4Sk8QgtUMo4RPxQXd4EJmfv1rpeZkhKBMVcfR6kf7kvZasUmC2deAm7W9aQYGNrUF27szKp",
  "key20": "56Z7wo4SMuWzghN6RaZuaURBQMguZFM4FJHKpRRv6fQhthsYWgd72E5tRouPhqMWzkkj6CqdUm9837VKsgxYz8Tf",
  "key21": "2iABeg1E7zKaMQEQDqfPchK8wD1TJvZju9VBdJTobDQuxgJoDhC4UFrH1qUF2Fgk1KgyJzEdiwR2wBcLpxtVjeGL",
  "key22": "3AVFwKF2Wy9bmHCdB6hLwnpLPEy2uP6Q32KUizaPivPhcqzn4Y6p51rQAwoBHMYgc6ePvu8Y34hBsUCnJw1GyXZQ",
  "key23": "5r2Y3TRAxqVrXjn3v4VRtAnYJ7LVWNtocq72VBKETacKJkY5dtwiZ8UW9MhekjLk7ZhdKe1EzsCXxHyUnYvWt1Pm",
  "key24": "3dv5kV8XXeYjhWRj41PjByWSt8moMYJY2AJjHWiEmkJsVEv269dRiwiLVRxn7K9xbniMbLNvGiKub9dQmnXwcHRm",
  "key25": "3adjJ1JrA3rth5CVtdHNvDwkdw7QzprpjBmxDtQLzT8V69GPQ6aeVHDZF9xEAfiJWsmpBfemz3ZCwwfoG4eDp1sL",
  "key26": "4TfRxHuxAF4EYMxbXXg18RAn77weTGSYJuYi7B5JYfWEh9YeqTUHLPPNK3RRvP5AAZ18QF2RUvo9gnyr5EaaLHTQ",
  "key27": "4pLZkucSuXacJzHamjej5iNL9ejWMzVcHL2GQPecJBPp4kVBbab4vPiR2oRf9VKKjPYriHvmc4Vsii3nSdcwajfC",
  "key28": "5k16za2wvmVLD6WMWARjxs6zCosRguJv6DyyFWzQ3YMP22uMNpigfW1R897xULy7DWb311aqVWgT2CRJEqcBwQbZ",
  "key29": "UUGw7vHfFcjZ3zyJ8WmKtd2gSzH3hwUYXtLmLHcTi5HKbiBf23bgo3YPa5vALnjbCNC2BVxuWYLvRnvFcmoYZTd",
  "key30": "Pok43QtzL6fEEc8b7HwKwhZTsZEvph9D36YFuaKt4timdZTwtWLarTeREeiq4KVyhJZsuRXMZNah4dBYjxTJarq",
  "key31": "5wDhstBtxEk9xtdGCEJEb7Agqn1LZguYc6XecBQgJz5DzsuyUcY8bxEQAZgCD158NaWMNxiVGaQjJEdmu42YqCSa",
  "key32": "2pBeYPr36XYrhKRFLup5P4im3ErxLwBQ6pLD4dF1XgPpGdT5rduimkoUabyd6U2veEjBpRdY74wst6AFhvDgbzjg",
  "key33": "ipKAAWNnDTtP1ja2fLmEd1qkj79c54adWyaPF88mLpAsymbmLR4iwpLsftbNsSxD5YqueSWuxBuvQdgNTunFqaQ",
  "key34": "4r8Rew8R8Q4T3vHra2tbbryfA2D9KqbkpkWEo56v35ZZDQFPV95EmFjTSYkxa9nWftNNjdyfrS1oLZEfX7ZFEzdA",
  "key35": "noAhNSeaCWjZVXbQnXZycqWYWyPs3dU3SWavTjnBb9CawsgMEeNbbw4QgCfjuZWB2wLtpU1EbEituhmZJt9opCL",
  "key36": "3UkBAqJ9VB7GSMBNW7FN3F4CqRij2W9uowB2C1S468csoS12pKtVD6tF58Y2MoYKgLWpShHFrvN9SMahSsmN37e6",
  "key37": "XsZBktaPjZNozpBBeYRYzzgu2q4kt2rHVDJ4ySEMVweCm3Cg9j4VPMD6eG4greJfSNG9DJjmgoe5pwnS8Aib3gt",
  "key38": "4cLMoKRKweHBVJuErma14LxdAPu6oVvd2hYSqLWFAS14nFCmqw2o9Pwp7diYVBLxA5WBz4eNTYxHdYYKUFssN5ho",
  "key39": "29yjJE8zNuYJ19ThYko2iKC8NSnEtyA1qwmk5NCkfBPfE9nGmszdQ6eKwMyHsi1H8wSh8sdPXS1kDhqqgCdYz1Ka",
  "key40": "49f56F1jzG5DLy26eSv6n4n331nnm8K8kt2MMi11oWvM63MQpbEAfyiVfAU1roY3vFgYWPJwHcuFfMEXBfHbuqF7",
  "key41": "2h8XqahgPrpnLyTyfjUad8j5HGdv5DJATQJkxvPGKMf2ddYB8KDpw8DaVnaHxkNP9jtAXRokpT579dH7TjQ5DWcw",
  "key42": "65SwV3WqsKnjSoybEwBzQoUVSx1xQ9Au8x4WHcLVryr2WruT5Qu338G7wu3vsb8N4FWGSuPMm4Cvn8tKGCr2ToqV"
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
