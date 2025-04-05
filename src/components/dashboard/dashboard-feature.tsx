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
    "4NAmGDAi8SFmRCbBNQwLUAPBB7FFpYNLrRGpoyJY9FG1H1DAetvR4ZcvEFJx3P8KrEbM6v7MyGDQCHhF68bUJVqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g4CPoBrgnnsfU5kqNpXBhuQHk1xubvX16CGS4RMxhFMNF42NAy4G1VwtrhretSiT3ma1Ly5VqKiF12XE6nuQz7Q",
  "key1": "2qoALmk29pAAG1VqMX4T8S4RMtDE6x1apM99nSrb3Gwv6Thq4BmFSGRnkUuPiqjD88k1h1TSZL1Gsr4mN2SWXAC3",
  "key2": "2PDBMnaK5SBEeHZVJbBgmExvzpkqkWDzfBaHs1u8E3XNRwAzPkBQWzibn1uZpyzJxAHUpDZG6xHdwook7du1GFE8",
  "key3": "2EzdWx7bEgpbsefxvEBBnRknsu6u5Mup8kAqpwY5haVXfyz7ukWo2ufSQZBPQdaxsaEsjvzQVvzwZL2EDHmKJMwb",
  "key4": "3xdCk6YNDptXpizDQkxFS2xuKBPguMVnmT12Sx6s47ChzP8Gqqvh7dCWbgDvU2WXYTGR7TgUFdwyNiquzEfBCGz5",
  "key5": "34NFvJSEaF5CXyydTmASayJs58UpaRuizrztTVrxP76kEsBVvD5sjPBSjTy92qNsDxYwCvQJiMchPBxj3vfsxXpX",
  "key6": "4F582jTDNNq92EQXTt77X3JrFn8vTAsbhbM4BS6YH36y8dfi5fxHNfLt8xY63113EwSngqKboHAkGQPE4Zd3ro99",
  "key7": "EKPUYaFCU6TFG9sghBbbTHg1D7YcpVVFqgGrhMsQ2Hxm5a9qwCMtMVJ1fDN6M9CuawLH5NEycnqcQwDVWC56gtV",
  "key8": "wSfHmsnxhY1CpVxndzsfRMqQekxMgnKBujgbhBLTAUGssifq7Fr2WXvvbq6RBC2K8SwSnYizRZQ4BYn3PLAEFx7",
  "key9": "GpcNqGwAMaEeCNcZvDniv2CfA2VEjAF864bUah77giuUM8cFeKmswfzV9zc4WrCh7ao4tR7rv7bRHPwo1kQ3Zaf",
  "key10": "4dFQjG8LyDHo72hovG6R3eBArdX8T5sQdEj9MEXSNJkg7fPrgieHarAhHoiczBZ5JStoX3MYK8abMFByApG8LgwL",
  "key11": "4rKNBiRke5qwhUZkJJdM6RT4pjym4xCizHNJ57mw2phhGjLWRKjBnzpsWFkyfqF3JuctAgqJmhNSJevv2iPDrB31",
  "key12": "25z5WirG4qppcdhEsCpzpdKSaUUXhDmibFThSBBNQY1jerqMdsPEVVpJ9q96ZSZDa75AFhbo2DhowSA9fBSeV8vq",
  "key13": "43xQYijfe6AxkezJYF7b4sqz48ZPqxjqTuyQ4cJkfR99WY6cRPndfP5Sf6dKxY1oGVDo5u4diVm3QH81DD7qnjoJ",
  "key14": "3AndGHLWPhvJU4Z5VLGyzNnFgYLhz58BW3LaiJdZjmVNKd8vjWwfaSCy3cWDx5B7ojcY3UxD7gHZZ4kf5fmBsSMX",
  "key15": "3RMDLfEGFG1UV36ape7tLDmwdGhK5h2NotgH5kYzM19Wpx47BV8PHeQuW6EyLNf8us7nMVZpf6z3dLj1qbZgbgVN",
  "key16": "3XqAJhjP6FXYACVTW6DLc3exJ7unK7bnokFAy9AabFHdjgrQm8ACzFQRbG4EFwj7Zqcd4rVsTqiVAcj2L5em92Ak",
  "key17": "33MRqheJvv7sRbNxbfuDEBBAfGw3sZ1pDJG5kaLyss3TaqXFA67cQLvzWGMEpcVK46U6JUYAZ5GPsQcN9D7cdW4M",
  "key18": "3i6bRG4h2LMaCxT81ERLhxRkEFx8sYRFPnyFEooWPfpeLEUcgUG8Le99nG84LtZgL7pxgWvFuv5x3Ko3DTchLECx",
  "key19": "G8BVtuYJnPyhmGSRpKaLW23pzzcmNuVbmnNZ9DvHvi2Eg7bJPaaRJp5jFRrawfJhGKF5mgbVpgMx3R6DsQjRyfH",
  "key20": "3RtdPLgzi53pF9WtWk41pKrxzZYP7QhXaSABN4VzooTVeWn26AWsw1rQ4JDD25j38yF7PQXQed9TGAzmy6wfthot",
  "key21": "3XY7xS2ajrixjtu9oV8sjFwVuu5Vc89xe11P5E5zNS9BNL1LUiDZ7szHftcEuB5XGxE1kub4k3ty4nrTnP876mYv",
  "key22": "5wcyGeBfCDaapCrosXjQGRPJwCQAs68QJqWLebNJDZQkeh8XTFMTrzn9d38pNZhgGDWZFHnLMg46HY8qYcqrUmf",
  "key23": "22kgR7qYtY3TPnZyd6ySxrqpvK4LZLwuf5nCHqMGWE71Sn54cKajsA6P8LqBwVxaWtcmLVbvgaUa4o3gSngGE7NS",
  "key24": "2qzsb5kGb5MTmZSNA6VoQ9hWuFmCDbm3BB7DbwdrD7uynGfiuG41zFNDtxxNyYP9GYdpsD26WwpUnunaDV626dNg",
  "key25": "3wyJRoScRxdUCJRUqPtH7Kry773uQTDzqmyZ215opWzkCDtqhRxA88bp46RLV531GH9iNVu1p3C7NyzYzUzuoDAf",
  "key26": "5WbF8KxsDq5HRm1MD443faUDLBTrb1AgzVjwtRvWQw5sscogpQcTQTdBMwDtDgk4vdPbrew9Rb5Xv2fGso6EpS39",
  "key27": "28ZvKvEbEMiT44p4g54bN4Qe41XpeiDNyw8i5Fa3vakqZpWiHWYJPzpGEsczPrnJESDzyvGBxraEs9JHXg82Ciak",
  "key28": "5DoVTQopZWZMk5UfKBRoMPmJCNpKYKcwHdgsXjQL79gHnyDmPjsptnbcpCg29yU6ULJAYnvEEYkuEPF7UDEf8WQy",
  "key29": "4FJGPPyCjHiv3sqSGGgZhLFAZLGVPCZLFJAWxyVmrcD4ZpP8SF6GrE1J7CAJm3w4nuYParXAz5ypege3tRux3iYe",
  "key30": "3ge772AY6hfHrJU1pkKYi7U9hNSg4vuQbsYv7jx9xKuR2yyDpcLGu2e5P2sBfwWagJzz6W3aS7jzQPuq1oavW2nJ"
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
