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
    "2UTNvJ5GxyTJsoXdEv9zgGnHNJQovbHK3DiV219k9J8AMKHMuUejDC4yo56sU8U1oghLBxPqRUFcmw6aF7kAVowW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FnTfvYpYcgHfecqG5ZY11NxFuWi7SXQWyxUqbQ77VFCM5sj6S76um49324T2a9WCFhagW4Bv2sk9gaw75igHshM",
  "key1": "2hCw9jgU4UhxPf23xt4Sh1Qf97Qb5jRuFY75KTkUKCqb4174r4Ui6GDPJssdtRdYDrLJDHdxaCzV1TXuyNk4iGkH",
  "key2": "qPm35Bz7Z873cquqEAiLoBKCtyzfBqWfWgwTq6k2KurevezrCgVbGK4dD8DnRqB8Sc66JTurpLDAD9FqunqqFay",
  "key3": "4EkBQnUhrucX58NhshrmRvtWdqJHhPvprKe7TLPM9rHqY3pmKxnRGZgB7B8698MBN2temKSn73CfqXvUgPznqkkJ",
  "key4": "5rgbRg7DuXypYZc25jzDmA4vxNf1V9pp5wRnthK5oscJ4ZEkzCJgxVHpRESQzyToY8mhiEi89HAgMXNNiSm7bepV",
  "key5": "3Y1R1XSDKAXxtCdagvJhVNCeB53GiAZ6pADSZtcFx2fDnbdCckCe8p3jsRV2MB99rsdMLTkZVxVpkp1ArCwPCSXq",
  "key6": "5j3Lw1bxhRBRqJe13KYa1bZ7dZyRdMMrjJYdjg3JwXVoGoEeMYaST3k3PcUZXcsdanA7QhXeSTVA5tdM8P6TbMxp",
  "key7": "5Fj3NmrBdTb4Y1xW4yDCPHzth6qjryFqK9WBzf1Qywww8V1j9qK61MYtqkJWVzdhnVqooR6mL7c1sVY5Pch9ZXPh",
  "key8": "4BAwJN3tqk4qTuyzn6RnwqYtAyfTyQyKAdwNrhrQN5csDLe7CvjsjN6jHKrM5Cn7tuf68Z3MpPk5Ws1T2WrKLRoA",
  "key9": "3fcy96ZRVRmscUxR5JXAzDsKWX9WaLvtpwvxxNNeCxbPxaVsQDz3LEVXJt35RrvayjvGbfdtjZsiPYVKKPxp4vh4",
  "key10": "2G4GuooAQyjnL4iPChD2YpK32i3KZpL4BS1jMpnofQukweMtBWtgi7RBavWpoaQTvh2fThVLm36EJSRDNnMM1Y9U",
  "key11": "wvZYRMffJWHZnrtkz1iNpxo9W7TpH75D1E9MBoY4ZZrktxttgY953pJbMnhQvE2e1U8EHYy7PDPeNuQyhm4YUga",
  "key12": "3NLSbynvj2oUKQ3c5htVMAE7MPa2UTDNt6Cwh9h75kkEWLfAE5Ccb2u6prWDpX3fzMVGkBxSaCgTD3aqZr4tv3og",
  "key13": "5FKjBUaDrTYpNhYHMfKLwkDM33T8V9zdmex1NRAiPWbSi8Zjrst98XbfPqAzLU9m6X7EakCpDxowqnBYMoeLbzj3",
  "key14": "3EmHgbc7iPHQzW9wtfAejuM8k8ZpH1NRpPY2UsSwHgPAFFANUpsTn1wZRVQ1MqYnw7gzdotQnYvpUJrf9S4Q6cW1",
  "key15": "35vF5AidihQ7trptzCF5hF1g4subyqi5WP5Pi5A7xE7EUscNVeYa5JZjajSn3K5Kd8M3PmrnA9rrAuULyfkNUZTP",
  "key16": "4f5tvY3JuZCXBCzKshJpshxoHaPhpaaatcr2WCyR3Gpj232WV4VdpMgqihuHjxQXdJGaWMytWW3J5srKvMUv8LQy",
  "key17": "XGR359hFi8Jze5ak7H6D5Xcnp6fFTekCczEZToiMXYJZT6QVJAy29Xo8wQoDHMULMDaPuUPWvEEzZAd21GdFRJD",
  "key18": "4oofLhYu9xsbYdGqwBee1iwJaDL92Kng1uX8vDzRH6US5SzgdsUMLsbXobuMostzUvu4qzYRy9vSL15G9ejC12uy",
  "key19": "fAJTbeHuLvEoznjSkvwQ4c6Qnz2f8G3bWb1evKQjKjYzpHyuMRrZ8ToXDKvBja4KRi1ycxDNe9oUmGfrhg7Joqm",
  "key20": "5sYfxv8Lu4CBqg7HpA9Nqc3KWmCVtN8SEjTiHqFkioBA8VVJGD3AGGwrLyiBMBjjWuM2Q8Ni9wLQHrkbnLcNmKkr",
  "key21": "5jEna6u7RdsyBA8vdapY61HibsDoz1u1pvhezp41Tvg8vR53jy9EcgmLZKGU3Nf1JAAqJNEoZHpPVR49Pg6EGSAg",
  "key22": "RGxxLezskmJ4qNSN9QRMEyufxsA3DibC7NDquJn6uiHHN5fWebuXubwVZdxgwAUAS6RDabA2RazcaPoyFMEzZAj",
  "key23": "3YGyESWWkVmHb9jVX3kXUjdfCoBGKrEGwnN3M7ZNsBKY6Zn92k7rv56unUYd9arfnnfhu7TpPAW5RNV8mwo7KnKJ",
  "key24": "2bAdWfYpMNAEzm3EpAFBKiwMmdWxJWmeoB4jkcZfT4c5paDLZgigTPRVaDoArn2hvjw3jC5nisW2iXrN2Az8zSUr",
  "key25": "4mKcpZtUQxwWfjnnkkmuQPpqgE6neEPMPE5QfQFDyDRaNar2VesfJxb45P16Ly3V3h1TckkBnHhaL31UntLmBsrw",
  "key26": "5DqFm8RYTT3v9J18EZibY9JqftHcB6WW1P9hXqnWiu1i8HMYWQcP5bMrPMk3Fk2N3rwWBGt9p9Gg5wUZzokAyU55",
  "key27": "4sAmgZtQXSXCdTHV5EtjhqVaE6aWNz3e9ueJvdazDH1rrZ62wXbeVivbaAZWzA7PZiwDswH4DZLG5powaycn7YRX",
  "key28": "wTxU3fMhcTFrTpuW3txCc9P6sU3bKwJNRP5GzQwbCTdGH2Lb7YYag1ka3C1GbHB5x6CkNEPxGCkC7C9Wo69H8m6",
  "key29": "42SosPgdYdA2jBBSEjP2VqcipAbbBDozGS3D2cRvNmG2HuYh5eGLJfHnCVtGXGHZTvxF72z8tmNk4VqNAufK1ETr",
  "key30": "3ZKpeDYrNnTXu2BDhcEuRa2YR5EMeMVChXjm6G4hcQDbxKUgJtTLswwqcdciSSMgRx1SKwjStCcxsLQUNxrVxyd2",
  "key31": "5rQP2UgARgcUDy1hhhvpmHvdsWYhqqHsCp9YLVAPde9SdEM9JF3tVRjftMvPjAmt3AbDMY4TSbWtsCD1MgUX29SW"
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
