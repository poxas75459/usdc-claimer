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
    "2g2FJ3QCfRTxosMSM3Nhc1tRqssbzx3T3XQETcbL9JcbxyQxVSdUbdpuvmyNnGGMwaNWmjaHVFggDgvBd4vsUWme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yVYucWGUbV7J2te4ohkkoAMcqB4bnKGVxxBhNW5dLrzycTea5WjERea3h9GAo3HaJnF2X6J9HoxfgmaQtfYpzVd",
  "key1": "2b6BbhygcjoNaR1T26ctz3PiiJLfQNPxGLM6bH9WwHahasSFjhcfYBAfRZ93eBsRECoQeUHAVRtZCtCZ9sr1F8Ar",
  "key2": "2KVnm9WUP5U59Fh7zuJr1KMx44HWxiR2rg9qyu8W84s3kdFwoUEr6iTBbqe9QXUWckadSk8KM3drDd6YjN6mQwAk",
  "key3": "3UbJerhrSbA7M1QdVsDBhygwynRYLyrNRNKU33QZcbgNc4QgnQhHYbbtLJwQAMTF6owbUSHJumZPe9H55GLnSSjY",
  "key4": "4gwVjm5AKnKRkRPpk7q5G6dhp395pbMkKER7Lvio5GoBNRhjPPCYfx9WyG6BSgzhqKWvmXAW5fnG16Vnxa89i59V",
  "key5": "2HfgqBufzpah4gt7EnoaTBE7UmTHgscNVBiLLgD2CmSZ16pC5a6PE3Y91nT3beUQxhhKYpQybWpsEafNHNnBS3eg",
  "key6": "2jkqxjGtE12g1uZuXYjhhkNnhbSXvcVSooD9hMC8BWy5bjAB5uGZH8MtdWigrfAtYmDuqeKsKu6iejxZ8q5osvMP",
  "key7": "2nt223FZk9WBgonZjTLXGsSBs6N69fE7HQUMfKH3KVrGoQCmspHsL5kXX3LSRJMduxR3EsWwbLeN1ebGatGhKkP",
  "key8": "5JWq9YsxJ1gqnmKD8EGPMt5yR69jRZoSxymhsrhvC3uiPZb2U9uMp82MPNpTatvMcVmKKdpQbauQvpjnbwKHZgc4",
  "key9": "22tjZjGRF4rzT99UAtAjEwRATGNWbXcyUkNp1jT7B4Tw4UDiXuCUjHSa3NkFRjdPqRaaffgkWobQUbcW5JrE1UWe",
  "key10": "2AV5ukWCa8bu5QCxKY1GPGQ4jfXmzavXEGZZeYWhh3TJEzdJ4MqaBRiBoDQqQgVWuxCYJVca8gEhYEN6Ust4Ze96",
  "key11": "S6JMNPyJn6VZ3cn1V3rDH5Rse8iJu1AkRWQMFSGF2nU7Ft4xxtAVuvuXy4ZWAdXZZRNdSAHhvW2pcZS3f4NCkr3",
  "key12": "4sK6EzJt3TpEwBXSYMHXu7ByeBAhVX2imo8KMK6DQuUEZSjC6qn5Dc95mMZdvURqM4aZUuozaQfjyc2jJkkpZMiU",
  "key13": "3Sas1swqcs1NrM96nfHRLs9a9rneitnrxf2Zrmwp16dkYtVBXLKBsZFPHsxoQecTmw2ZDmSATosBwU4oSqsVUnb",
  "key14": "5sp5xCyNMPdPiwajzoLz8Qv3XiADL9tSWrR5WxppRtPSYdE5Um9RvzwrQYBEjLdrPVRc2LLKE5PpNnHpEUgbTLe2",
  "key15": "yZTA2nbbS7mEd9RjHmx6NxYEQgKLuyyBhzWKVQNqZ8a453gEvA8BiGRg8k9XCuCULxRaAcp5HggUfieVSe7Y6mv",
  "key16": "4wiaPMre66S1qkeoNUymRMQiDM48bi66ZQgGmJu5MKx5FaggYZDufWw97H1eMEUWS77HZKBLXkQVQwwu2Rbhw3WM",
  "key17": "3vwGMRxkgLgd2KCE5UgJsU2dGbJjcd6yBzGyT2UaukV1W3P8jaUu1uADt6jnXj9QUfV4KtmBRnf85zXjjbjabHv9",
  "key18": "t8dMgsGDJHAUZCFXo6kqzrzbftHZ9ioJUooE9QWBWcJiriBmNoQHwmWRKkN2GXWp3aLFf2g4XrbYYYeS697qErK",
  "key19": "6sE9ydr7A5VSSHUdWPtGg913r45n2XdTPLzzKQr6dYmmziPPCGpYr8NmZEjUG97fPESZuHKZh3m2tyzuUTjo8tv",
  "key20": "4zxvt8uvCqbmWUZZCpqr41qihUkhS1P3ahFqTPqCqdUcEfbuDNgnLejk4oPJ52Mtk9NrRVuKk9F9iusKAtpGFBvv",
  "key21": "EbxRmZ8is85tUgfJ65b9RywRx3un9hcvoq6SRhwhPPmPaBMgKgmfTZYMXzv3fdhZqbZvhhKVWhz8Ck9qTwcXSoi",
  "key22": "5He1XLeZpP8Ryzo4BeZEuGs7GcodHQsyyNWZPGkPQzvBovSQbmLoVe1VFExjSoQsYWghA6baQqEadTjMvVutTo8h",
  "key23": "5m6WAZTAwsqiUPBWcm8fsGmFzvFwzy67yJdCj2f3XkJcQqv4zcHqM7yH5NRr14XPF3C9QC1PUz4XtpSMtf3sVch7",
  "key24": "M1ZnaSZfc2VRmERcvvYPkxJdWXE1Kn4o5ApmD28P9NRPbj3XKzDHfLtRPTDyt5UMrfdczgWYRNXugPWooZN4cNa",
  "key25": "4UE21FciccBhMKL8BzBbyAi2YgPMVxqLHFJ5fx6SArVqsmy6VwkrvNhk3e19AgSdzoxWY1XJrfyPpfPzLPF1nyYf",
  "key26": "4zMZ2yCp2nJAMntoiTiPYZs5oGTmN8PcVHQocpvdoL8fy74osZhSdU2e6oVwk5waqX9wM4KdzJC6F18UK4F8L5qc",
  "key27": "2rbyB4Z45swZYVCRzZ4dPbtwZiBWrjtHcuhT8dw8bnBNQoPACiHKwHYWU28cVA3kmPrtV5THZX2PMZEYvmakVTDS",
  "key28": "BAwUzRE9JhrktZC8br4119dnAKLchz7eaFduymcuAqsXLuzEhnoGZXDZUmtTJxV4n7hbSY8B9QGYSkhsxG1vTM8",
  "key29": "3QN85zxu6AUEnT6XkkKGU7buFsHKG5TxotqsPMFKEj2Wy8e1Z1kP9wt4EbCUt972JF1KmAk1yjMGZWBFT2kfdcYQ",
  "key30": "bMX5qxGkeQ1hTNdG2mGBCr42PTrMWFjHrcA8Pqb9ZXGpkMwVs3d4AeznQMgq9jg2QwyhsbR5NUtjnE1P9sePhcJ",
  "key31": "5p4sa7qzfMG6rLK6xum2ccViuyk5k1YArxj4QEibNUfK5rDUSCW88VbUZn25JLKQbjHbUB4rrBYMFpzS3wMeagZi",
  "key32": "365wJRqQu2cxTKcgCKmivNcfQRwCc3aTqzwnyC2W8gmaV45hJH5f9fkPYiDXzUyQ1S2d5umssbQxQsDy9yppgdNa",
  "key33": "6gryAQyYgP5bsBonEk8CA5EkfRNtGEYmAYruE4gqM4W6zpHWPz6HpybUxch6J99Y25unNV6WW61Ss68yuxUrGEM",
  "key34": "5JSGwDoTUpgex189tSaSA2qLBQ4WQr5rhTc41MRZrC4McjFhDANPsrM4VHhjiGF5eszCZbPzYiKUyWsdzzu11PM5"
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
