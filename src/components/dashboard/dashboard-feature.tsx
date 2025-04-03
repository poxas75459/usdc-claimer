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
    "3L7YeK1Wz6AvJsV71aSW8mHdNB4LyACS9BSJouCzmXY3vYrk11DdcQ28RKRakH8NWKsYUboWZAtLWjo1ftZw7fx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vqXd5Yw12k4cBVG9BUDbaD6sCbbh4P7XwyQjUsb1Zvdu8YhorKpFdFYG9igPeDXe2Yeg89u8gCD2jAZmn8SBbJv",
  "key1": "2QihDwwCc6aQQkmQGywLYJw6jbHkWgCjLSmvdRvbZSZxgRf95AzcdvuML1C8oZrGEgDRogd8HHzXxWK1LPf7QSkX",
  "key2": "59sFiV5ZX3UNS3gY2reRViVCkTeRVc9g8fguo2PdAHXXY28iYAV6kQvLoEmX45g449WRWjFHF584KZBghKgXncjF",
  "key3": "2FrajJbSHF6g3pmCMU6CkbT117xgj9VUNWwZv3XG7m5HmiA1L5xq5De44cjpdRDBQCJ97o8o5pv86GdNRmAPv7hm",
  "key4": "2FFA4XbWUicmE2LnCL8pg5dyh7grmHG8X6gbAiTvAmsQrEh2SEHzmaztCpa4XatT4hUYgys88V7kc1WgvQK5j2xN",
  "key5": "5mGER9L4rRaRBqrZCRe3jLgEtEnaUb7d6pGsfoDv1c6CtkCUXCXf5pvy4GUtPmNziqUhnnWbhg3gy2GyAXaXcTd9",
  "key6": "3yFQTXhhpwuAa6ieLTwTETf2NkieMNsqsAhgsRKjVUQRNSKodVbXyoYvxSMpft5GLypk3afJoJoUAPaoQXSa8AnA",
  "key7": "2n1vaLcjna2NRp1oCZQnDxNqo7RgfxXk41jCoH8PSsRf4nYN9ZhwqhGRdnLFiAGd3fSuNsFqpvC9npanQgPJaV9p",
  "key8": "AFyxAqNCvVucKzE87jN3X71hyjR8Y5gxXbP42AReaYijmo5HEgsc4URbAqp3NXUBP8fjWi9NyJizg27BaH8F3MT",
  "key9": "5t7jwtZAkDBa9GNk7FqMZGsdygU2SR8JGfs8soxKHB7ULG9dQaNmAMC8HzDtyfCcAnVXWUa1s31hqKaTkY7zsk8h",
  "key10": "5Carsozeyd8JEdjB58MAqYNAZaTvcQUwbKzwzg8wPKnsatUXbwqF1oWRmesHsLssXqjKMZDfo8Jgg4rP5DPUbRJH",
  "key11": "2k42E4b8woJAoaWN9UZodm7aAom4gYKHijGuvFgpfpBsNWaoQ5oCFQL4YtEoxtwRbMKZNUKnW2hv856TjkY1CRSi",
  "key12": "k9zVetg4wTQLj1hTByH9NoX9vqySthiLmxqJdh1fBnFLVYnSNdpxo2sfxUcy1crXhWFkyFJcTKJaRn7rArZeY4f",
  "key13": "4pV6hz3MVd39Gax46xo7mZP7PFWG57xTEe9nyPjatLdfvXg7WxARNp9bigx2MoCsVP7MRFe6GJimcKzvm1dRYduL",
  "key14": "33SSbcDxaPFvh647mW9oG7yxWBakbdGiJWRjFnmLLdqKsta8v1VWfDFnouZd5vW5gnNC8DDLGUt8pqncPTKqKxqp",
  "key15": "3Lmr8r6Ln5FTirqUF4nm1kXAquuQCKU1hUxXdjxKcy6RbfirLRvDSJhs8fNiQnsBhMqh6M2RCxLK7qVqJn4dof8F",
  "key16": "6S3u3z3dFGNAr9kqScLH7dsFo2e7VfgcjG8Yy3GJtVDR6SZFoXNUE2dKn66QGg7RNhwuE7yLc36R35vRXJXy2LK",
  "key17": "5LTysDFz9iWqRJSdwD8czQFE7v4KRf6Z79gUz7gougqLhWbJ1mMmNP57TCcjzTrDHLxR4ZH61kFdSFvAs5d4cdjK",
  "key18": "JWNsPgBbFurEaHWk6eDrRChFh7hD5UWqbV639weSggAT5sX9g8sYrjyDGGP67Yj9biSUoBmGsr6BbpjN97ccXhn",
  "key19": "4htB57icjZpfDygUXPYHp6UJgCZyGSmgPeG8B9e15KwxPGwnV3yWyZ2dvSJF5LJQucwMjXB7ut9ZS4mpQvcyfiSy",
  "key20": "K7wrvJDSHv9NoF9kmJ7TwjxnAAJK6z6Kcn8yvJNrTB8URKbXR1phXUZYC9FoYCdccygyBjXCLyKMCcmK6nMTX2G",
  "key21": "4bVJZpnJdyNETq36s2Thxdrpo3L8PBMC4Nag4G1nXK9PBXFPN8gxZpWHGtjhVsxJRj9B1x25RUfoX2emxyn94Prb",
  "key22": "5wo7pNuLHv72PXjw1HPLgn3zjXXxcTk7YDGNgqkSfvJdgyjH71nfUT1Cx5jZDyXbubsmJZ6AkMzBmH5biFJ4fJd5",
  "key23": "4CcB8B6GxFuGLEno9VCwYzDJNw2VpSx8VgSUQVhaYY6DVSWQ2gxkSsnFQqcUwJmjzUUJnz3P7j2bDRkG9upkKyeK",
  "key24": "dqPkcAaWgQ3v18Hswjewrfmib26XCDkusMWeMLxuQ5x1aR8ZMX34WUHMdnJjK8n7ufNKsW5E17qyTNVbTPVNAga",
  "key25": "2jLxMucnDMbLgb12NgAUDCLt7ehAWbQnZv2PU3VUBaTfs3k5NqsYS1JCDrgkykCDFN7iH88Pz8DRQvBb46q4ccud",
  "key26": "5XFZcoVcSyjeNhsrKpJTUisjK6P752KFVqz1HBttmBgiN3o3WmRPNdfh9oVWdvbg91UYoTwQRrhL3YUPBEm5iBzB",
  "key27": "65A2rPgttLARpWoUFN6srdoJVQN1oxvuW5nbywcJQRaeMWxFMxEhPAkMgjBrTPTHKNDBF35YNiruGJMxb1v2bAFA",
  "key28": "2RDGNZd4AAgdo1zmNeMUGBUSmRSQ3Po8zWUbiCHamWcHi5TcRaR8PPeA7PayJTvkU5gBwXW3ae9MQAeCNc3Z4UGG",
  "key29": "4uvNTUM9Zsgje9hRmNcEeWg5VujfPgBxQnkymBY35qBVeX2EJsbV6CBuoERXXS1myd6w92XdC1uTD6PCiE32Ydck",
  "key30": "3JRHMNp59CrLk2c48HVPgcV7dTPk4XpSKsibXrBZAkbjUmGLVopGezFvKAfBZYbTCdCDzfRo5NmPUCLBTaKXv4PV"
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
