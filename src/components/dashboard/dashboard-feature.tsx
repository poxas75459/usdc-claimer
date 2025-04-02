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
    "4hYWpqCdNLnfMq2GGNrAEb54dCnKAnTtFTtP546ZJn8VtypwBupGc4b4xkt7tc96nfeL2wp7iRedfVw8fV8TWBRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "465Ew5NgaFQnWLgTvX39e1wtaMw5n6tgiKoFPzAVXCVDAtSwnd9itB2xka7sv5D9eUgsmqSjqut2UBtqDBgFD18a",
  "key1": "14XHbk6mN4rz5P9Wf9sWrfNwrHsWYHv7ZJfqJDdu3HZpnGeq2FLGPX3GPkVC6kUiV1a6tyeC4vo6E31jJHRjZgJ",
  "key2": "4FtMuYCLgMBuqNLuyyKqJXxBEysVAVeUyM2XixyS1SPFAHErb4qLXkeK9ocnf7XUx9WimXBKF22B8MwMCkehnWUG",
  "key3": "5JuM3ej3Xwb59oBydLfq1T4DNw78b3sjBeJo2FBjtBTiZBrFkkKwwUAtwcuiT1sdZg4DHGoZvcMZWH7pK2gCopws",
  "key4": "2g2H2UD14GLRdTkwrFugF6kQ3T3L8oPDScrepjuXDcjCMaP7GkSM4Hkw1sKDDJtwUAcwyakGCVGLQijBdHzRAHYC",
  "key5": "5B7DegMgz9jYrnb5TgRj5oGCU4q7Bo82525sYJHYAcmzLZTn7XUGMVf465tchqg5o1mSWeMc2eJx9qiDZuwWr56U",
  "key6": "4kfgy2Jw19b9KyvUke4wzaTtCHfcEnyQGcMKrPYo6ixdD9hFiABw7aRJGGrfU7D7cXDoh3A195ZvU9nxLxL2RCWk",
  "key7": "3Uhn9XPncBgBLEBRrtL5zNNYJjXA6gGrdWsF4HgJZQ1gRuX1edBkSMHKbFhqWiEA8nJ8YwJF2f7S2o3bEf2gbKsK",
  "key8": "4a9Bc8BTyMPkp3zivLvz2rMAUqPyPUZ232xCctKApf1ZUzysFzSjCXiQF3y8FsaUSSd1EHqWV3W3WLrEXZPBYnc1",
  "key9": "MPBuDH83ypf5ZhNsZU3chjZ4ZePSmG4Lz9KYuU1vFWGAuXZee58Swgeh6fCurjZNL67Bv9qVEHE2xPteRazRuff",
  "key10": "5jnALzY6tKR7kc8iQ47ksgxRxEJ3f4KpmBtWa7R74JSDqWKXGkUipweHqpevLC2DSkufF7kkBDUFKvoewRbVEMaZ",
  "key11": "BF1vhYWN7agQFrKhSX2gVVNqgnTG1kB58SosdnGGpHNMGGFA7unUNLkS8dho5ph1CbzVfJmLxbFkpfPJT8sY4UH",
  "key12": "4pJGmn5C8km4VuhLrJeFXf4UPecVN6FRTEoAoRJi7oaqURJ11yJqp7Y7QEWAouyfKCLZ1d1MqcHVqrf6QLfYZ5YY",
  "key13": "4s7rhTpiVGngGpATPPSCCuoBRZ2CMW8SQxB8ZP3xREe6NmkywyXEjsGHMJVAMjvtnKvtHrqdjKcWgaXoV6DDKEwL",
  "key14": "qip8vyTirKu72myZfTmKGwgEpBwKwBq889q9znUNpMCEf5hejjRHmGA4peqQ1Q3RuC3PZ1dUQGeXsPquazLdq6K",
  "key15": "4MSao89HQv7sPQBm18S5ZVvuoh63JQXZpZthu5uZ3ozxbjzc6SXYeoHcWLNMKsWSbn9fUvuxWCBzdw6Nt1rvPtLL",
  "key16": "2udatmhD4KNkKmUE9eicpHg8V4QFwzNL1j1PMiLtr83D18tSzttkH9UL5oqnpFgSdTpAtRyZ8uBuwjVEseUKBC9h",
  "key17": "4FkUxv9nCbDSy69Xui7uwQCqn2pfCbpduYWZtk8cx8A7pD96ZsqwpN3JzmYejwjuzDgsUDChM6mQtTy5GzEJGtGN",
  "key18": "241BtYLMkTF6A5Mpe9GSgnvWLWvSvPphVg8XHFL5fpai2wkf69pKsCk3mQg8k9UeAc2Y74XLgWhvnjQtuoTARpPd",
  "key19": "2UrUPbBqNvVRK4hBv4Ka8TSGF7Whw3NauV9UAhTpvY5FWGC4XvM3hhvw4Z1DCtEfaYeCKzXFYgoexQNsFbDrg4nm",
  "key20": "2qLSa4SipCe91kEemuGk6Cs2o7FakkuENwYtywyUWcmkQJwT3yorCFfkwTivN4mZFdf2NkGCNb7P13oVPK6Z83fk",
  "key21": "23vS31PmiS8vQycE1JXh5vJGNTFhfHUf4xkQXxFE6nBFykVUshct37j3tksejnN7g7Bfe2HvJVUrMTJz3KaN2Ydt",
  "key22": "5QramcPaRXPo7oCu9Y4mG1kzAnWspwdZi8bEVh9KJoZbpvUNBUNNopFEss2cZ3ysxYyR2WH2gZBjXQpwPUVnZC4x",
  "key23": "3P6Ywi7RRwRZg5AeTAVqrRmcw9XpHiemJK1vVELGQNZdK9Hxw92jZaqQrfc79cttX9yHDX2uctxMMGrgEa3zqN3W",
  "key24": "49miWBXQdn12Fm3MQq4rp3FzQ4LuZvghEH6FiQHvC2Q5wVKWbEYv2CXP4G3i9WA4foXQ3ELURDcpLGUSoR27t3Ro",
  "key25": "5frYSqYahqYdqYjE2NzDaes5zcw9BdyM6Yni2SZ2vVB7NdXjpMPcrHv2snBuGmgFEoAZKsVtnp87HSF7VWCxRwcX",
  "key26": "5RnQQWUT9znibDd4YZN62qo2MPruoWn1V5N5usrJs5eSEVWmsCif3yGiP9pPB9xT1U7sbQ8KSePTdyh8Z14zSrY6",
  "key27": "aHeBz2Mwrxz2XLrbdgdvnjD2n9H6BRsuWKR6RAo32mGeeRi7mK6w4j1tKcGWbbF1XiWH1ThxneSe2WEm6FvHrhM",
  "key28": "ZgKuVScepBxkbNZMn9xJQ1L2yRfBbtm58RYi6h2dugGD1aw7iYhT6LtbcWke66TnKEc7fzqGyPsL7uVSWW8EuHd",
  "key29": "nu3PNyx2ykENqnSHV3JQkyjNAhfV5CN9RgmnDW5wGKDRMPHj4j2qgkAzCxsYFDQYye4wFVUn3UQCG53HPhxNuZh",
  "key30": "22vYxoDuNdhBtPCwbYB9NdsRSbHdgwJCQr5mA6dCZ4PpL2s3Bum8gAkntBEkJLDedoE3Wy8R1qWBFLoGegubEiWd"
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
