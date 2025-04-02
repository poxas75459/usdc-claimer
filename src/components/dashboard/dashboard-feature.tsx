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
    "2i3gaUDviQfA6ojKAzzD3ie5cxPNbGP99nLLwCJgGyEfNd86KvetBL53iJKo5TtV2DSmnpqJzBCWNa5xWko9WK9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29DePV1vTbfana2mNARcwSfg8xLemN2zHgLALJqybbvDdHrtyqXNDaU39cx5k1Va69axf2M92XS6StnKraPBYs4D",
  "key1": "3GEdHtjZVpKt7iuZPzdCwjVqAzLqyy3KCw8vknCuuoQyoeRQrWBRxiguGE6zJfjrARL72GjxU5B9zy52pQf2MXuh",
  "key2": "61aqiFWe6gua57YMZYMBdccipBERDyppBBDBRbfZNYCNGLrGPLb2varF7FE5Q7LPh2BEdkbEwWiiEiKJEi4yyk7o",
  "key3": "2WGk5pKPRNgnMRmuaPmZbCVjLz3dq2T6ZqMhwJqAMUsPECzjB6GyERY6TZ8PdSNzVz9JfeQhrptE1MSCgVFgg6dD",
  "key4": "2s2S5o6ScbjrAXXuLZNSuYY2adMJiUA4h2ehgi1FEbhxraRMHqX7qT2xWkSMRJnwddcCx4F8ivPBH2fUyscSsrob",
  "key5": "2Xpyo7UzbmByoPDcE2w3LjF4vgKvZq99bBvv3sBGxPfuzbzoHMkSJ1Mym2gusbmbKK8uA8KrYaTBnpLok1w5kCVq",
  "key6": "3osRDQWYqPBk7y5KCT6B3GzEiM7jW4Vguns1y1U8Efq1ox5VM9xjxWK75CR2tmbLgYcHMVLWmZKamH4TnLKWbxyN",
  "key7": "eXKqCMpmq1MbgQ52ZiS8H3QZ4E2VCq7HXEiJugusuSfZimGTNkoMBCtqyCzX7aAVUT7THWmanU6iTKYxdk2D2Td",
  "key8": "4LSzL94WvCVa2PhFbUz2YvkvmZYGGELvwctpTW3MFdfpEEd9H888hXf4dcv9gADNGtTGJmshtBr4yBX3Rt9Mf3Hu",
  "key9": "fC6zTu847gTCBnNXjqq3XwXCgoKXiFXx1i7LRY4S9498h2TUpiY2Yj3XibX5oCRhHeCjnGm1hEzzzi1QMSMaZ4U",
  "key10": "sAHE6APCiHMneNPEn7nq2s28Mv96d66A5vHhVB8pQaPwWqdXeavMZoNSQuKpAN4Qd4pMSvvwa89CUvHD4a16ZDS",
  "key11": "3zYFzUcL5RWHL7EZRmYLzbDRU9GdCu4f68GYEQUGaJ1cqdTArWYHLkz2RrNJqS1d4JpZfCCU3XvfxVP6fNG9t4Nj",
  "key12": "5Rwuq71YQmAuJD4R9PyeXiwNj3n66N8tVHyMN4hcPRfbEBcEbbha9dR99HhS1cdbGuxZHYWvYtzqABEyoeW85z8q",
  "key13": "5aH4kGXVEyLwF1UJzaxKnjXVGAVMV9kq66sYCkkywLrSMGQrVbMY6NAU7fU1wUvenYtaruSeee8xPqJNFSnwj5BE",
  "key14": "3r7ujTmEZAUQLGyQDigkZjS8bKvQpf73NaMEqwEJyKkbzzq1QyvKFsBDptcLzPD5DiroCF1DALj3wYLVBL3zKzJZ",
  "key15": "4WvzaQNkyL9dzA669tv6cThTeFZyAmAhQGmEsfvEARTorxpfYwzNNs2GmSCFSXA4ViGX65rDji1LDr4adBMyLMnu",
  "key16": "61dkKoVns6HvierNT3ypzdN5Mfu4Bq2cjUH2PqfDmLGQKiTo6cwzAHMT6GCkF2EviSjHNLjzJekhhBCsqEbJ8h1d",
  "key17": "2G1bDeUXBuTZ4xP7e5CUi5mrapf5Erzh2nRR3SD7cEUasfkSaBD9Vp5rW4FCGp5NLNXjp9WnG15FzFgjX138qZtH",
  "key18": "5qkhhaFXYQLgNqskFs8HYQ3LmBRwuasCzv5HkbjwWVCYMevbSQ9FbrPYDuxnuSKSfyL9K2Eubip3WjD4JR1CbD1v",
  "key19": "5hiQGrHadp5fmzDuyqVGLX2pTxsN8F9QY35SSbzcyE3QHmx4e1mAYA7xDQWhh261qzMPsYX4JmmwbQVQk1Bsr3y",
  "key20": "mAHi8DgRUkVawHLQBpcnTPVaeHLvUH2nkDLCuZHWSGGEwvuiWM9kKLJHvEJEy7qU6JcGpFuk4V8Byi7BY8mk9Bd",
  "key21": "4yxz85yK8N8BhfziaUZ6ePG5m2ZoU92mtHiugQEfS3vi4DUsvVGPX2dcHaTnKJ1n1naoNnH4eiTCz27BjZy9uA91",
  "key22": "3yQd57ZcfzBK7EQ3vcEC3ejsyzxZZixB58ei7yJQurVQECcB3fYTi1GKMhw5Cgy4Jai3nmVBVUU8KWzaipKhVGLR",
  "key23": "Sqdzk9nPuwEEBTgYwQegovPGcbxP9imtQ8UmqTfBesGodB2p9UXNDzCNrFkGW52URQUjPeGKQi6YU7YyJnumVKj",
  "key24": "3CGWaZXKcQj5iEPDSzwjhXsc4TNQhVPg4ihHtw8dYoTytvK3LpzT7zUWRqbZyg677NtdkgPzvcMzdpB9Kq82ebjd",
  "key25": "5QoQjDojwVVs9hiRCtyHX6KfhrQeiDY5tBYpZ8thpqSkvFsezgmR66D3X9HCZjSR4tLvYADNNqq7i5pKCR39DcGG",
  "key26": "3iRoGucBMnSCoi5634jx5fwxn2BR72tYKkEvrTV3779pSrsNJxqKYSSV4rb5aAFnmdnZrgQgnffM8WNVaheugZuy",
  "key27": "3tCYM2gWayr3vaMt4AhVzZDgEcuHA7JALicr7Z7hEWr7TZXViSnH8aF6VKdCpuUVckH3xMR4sFJosWHtqxoZhpC6",
  "key28": "4c31qmKdChnzZCnUJ36spmt5J9WpPWEMNUCXmzVzvvpn4y5KXb83jNXKbhEzPMMbRcKTFB6eStyzbamF1oHXHVoD",
  "key29": "2RDv55zEJvyK3h7zjSUJ4qFUnX9UNazfvwsiQpDFHXXwGGHxEKzfoUX4W2AMp9dMuzUUTLvWjGxV9H9wQV6SWhHr",
  "key30": "xQcbWRmXuVz9ckvg4GkYGZDqCu5RL9brZ3xWYBq5vLyhjrJmiw3SaKTJoJru57i4BdicTiM8bmfZmmvtJBYrw6K",
  "key31": "3W946UmJQ2pm7AEkds9txvwvimEVdpPgLDS6bJ56okCAz5dF8VjBgX41YukHvg7TLGfcYjvSjwzc6kxNwkGhWFsD",
  "key32": "2LPzh7kuDXUr2juVynnwSpwYJdf8sdBUNfiRDpq45ynmV6hHy4KW1ToS3JL2AxBRSzyxSQzHKaJYjuXQMCWLX2Ht",
  "key33": "gMHEunud13rKCNQ8QkZ97FyGGaLCZZ9EjaMfetKYNJZKqbbz3qgroieNZ3mDmWj4Vq3CY7rtRxTteKdsBGdNvD9",
  "key34": "4ZRkUwNw57C8sX4b8kGndMcCwguTJB8CtqenmaXm3EGacFPUTe6o51ie9ZFzVBVE941strGYGHcHEPoBG28wKPYe",
  "key35": "56wGBcPv71yXZLjhwZTXpYZeZ3UhGDXMyyDp3vdTQm8AfZDa5fGPBXBiNFsDuV4bwMDdotfSnG72tafaa5PnzW3W",
  "key36": "5mR8iv1xGYbso2zZ6KvfTm33H1taSfHAhDMBnyDo4adDRie6KPdeof7x2ztndkDVk1iKCkr3B2ZExQfmVqSuKU9g",
  "key37": "2AK9oUPKjwxjCM56MUvh4YxzEwVJCXFd3DqgqdWfQVsFYx9jYgbckbd6Jghb9bsXf9e1mtkhdGUJqgkxME2dxpd6",
  "key38": "3s1YcieQ67pMrzkbR3oCVaGkRGG3xTcSovATuc4xDDF4bUKWTQTGGYDRBHuRBz3o1q5GuX1P2TqQxeJv5gA7cdk6",
  "key39": "6Mn4jS1BMGDeofmbhGnvAZZEJf4QrnsGn75DcEMTqiQBUtQgxFx8hG4iwrexPzEYLvBat9n2M6z93VReru4ZjGJ",
  "key40": "3dBz1fteRjjhbpV2hd3KkCbfjb3zx6DHLVvQ9feuF8RbU8GGRB3wXc57pTMkVRGBrWHw5YukkDbo2osV1VEqGqUi",
  "key41": "GJTAcCpcQqFkEXAicfWjWMVmfFBzFrTEArE7A9U3kefdoN5mkEJZFMKKwwEY8zEiKfuBPve3Azxx1PKgya1jVXJ",
  "key42": "wKhX7HpU5aJ7j9oz7nZxXBAtbY7MxwRdCncm12b2hoxTjJ1xcXYsSA8P5BWdiWw2z55T2BeXNrhnhASMxX5QV5u",
  "key43": "2bJHiXcdKoh6g6J3acZC1SVb1YTiHpdJC5gwo4Aj64pKHWNVCmsT1xf4RncWn6BuLKyPe7AiD7CNSdDKBMDihdfN",
  "key44": "3xkxsnhxyiwAuvKgG2fQmA82CNduDYx7UA5bRoD5qwRVpwBh6GJAT34RNJs7wSAAFfJzULzc5H4mLmzRgmPw1SJu",
  "key45": "2C3i7Cx7QTtaEW73zaJVEFt8hdQyd4M5kjmefV7PGT27vXbjGbRHQ2U9hJhJUs2VxC1rAoT7SXntRfNXXEEVQZh3"
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
