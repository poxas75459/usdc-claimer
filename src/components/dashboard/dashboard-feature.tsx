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
    "3xNnXPKTNztdjCEjA12Q7UzccoaiDSpaZFg8CumTRbqT6tzH7sdSmUrJPskkhWERbVuJYp5hbmwsUEHqc9FuXWDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GMj8oWY1Qw9aCWsKxHKvKrEVEb1mRadwS1BCtmrbnH3j9ipX6PpaG9uxHg1xPBtDRbsqQkt5dNdkpZujytR7su4",
  "key1": "4aZn3LXDBjTdrGVGNr3cbLSfMEoY51WH2im8jXJ6cTB7Gj7vYwhL7vmdJ3zJtZr3uGKv2cV57QDVuQDNp717b85m",
  "key2": "3dVWRx8Ps42QaaL8usopnW8r8GNzLJYXhkW5S6ogTNg3Q6DZHnwz2fMuEeXPWEz8j3eFaDPXRHHWaKcV3oKUJgnP",
  "key3": "5gTyizYxc88VLo1aC1oyif1R9PyJhzVvnmc2wugQ8oKKjzAVpXz7xv8xMx8hAbRqZGhan5eZL63kJL9ys4prv4Nk",
  "key4": "3hGgiCTbY3Msvd3bmjqP26SLKdrGjaKP35owtZg7ZXQsyfy3aAjgMRcbgB66JceQyJHLDmZiCdvZsfstQ29rn46U",
  "key5": "4Ycweamd8gvFME91mYmGF9tJFwk57Do4acnbekkvoxK2KD5idqBxW7A48VCdkmm5KV39ugVezXUDocqJK1mwn1FD",
  "key6": "63HJ6JGRiSNHcK3WsoyJw8ZmEZzgfoxjdm3xuDSjDEQb8m7KHtSEvhYMvfMfWwjJqbKZevZaxLDhupjoEjqSN15n",
  "key7": "4mPr3TTnN4sQ4fTnsCE41queHkYUbrQ38BQ4gLCPP1CUC56rcmCz4G2uXtLsQPi43muWiPFywxKaWrvZ1UhDmsdS",
  "key8": "TE2dKt24dxc1UhCnkQj54yEXGREK3vj2zFz3kjncwBwxy91akaNtNK4cKSDyycBbQsBnAsBWVoxVvcLkneu6jw8",
  "key9": "5HJf87qYfMucEKAvUYQfFLkYVLhQTMxnqzN4Z7aTBJCu4dWno4EnkQ16g915gA8oeUa4LSkKAAhLQQovsYoq1yef",
  "key10": "5JLySiGfBwN8jVTcdQiG6teymbYU1yXHB65RGEXV7g285Cr7453ng1a4dfWCu6N7WhokXFEU9xuJ1G1od1F1fEy7",
  "key11": "5VYkre1vEbCu9iWUQjcD1jDVQWq4Y7ytomggeouMDDtyHYWeCoM42ifZ9nHZLQfY9ERv3NfaapZkK6vS4woEfE9A",
  "key12": "FpciAwazETRs32Ni4TSWxakfDZ64u1aMLfKvQDt7eyDTz3aZ66SjTRGNhk4XYN1jRGcNov3gkpV3B1TJW8xdz5v",
  "key13": "2Bs7k8WyE1AP78R8B3H4j7NVH39d8k1WUZ7u7wDVvvyTU6wgztDwX5SmWxVZ99bY478vSuhzBJoyqC94GdpTciiV",
  "key14": "51wBRy5UohD5Rn8EzoFtATxBvff4FBA1K1VX9pUYTBVQB4z9NEGDNk5Y2R8UaUPLRjkPExyDUH1AJzAmFDbY79vZ",
  "key15": "3Ucsh9bH3tmhKGkUFAMDY21xPKRKAMPjdbGag3oryhZH3CryWxK9mhQBzzWNc2WcEVf1mDnEQQCzgypPp6d8hULe",
  "key16": "5pWsVKqzRFMfV3pw8wthjEYHhc6SnrBX4R2UM6NQGQwtPeFGjaTYzzstzSmn7p6E9ph6REDxbjJUdfAXEVvkaHQC",
  "key17": "5VcNFP7uvdNkvzY9wKHpVaerFVocpJHE8MF7c4v2nN6pEnZrardBBwLDCMJ9YifqtCNFALJpsPn8C8h1UWEPu7wY",
  "key18": "4hxmzvLRNXxeV8dYRSwk4WFBr4Dx4pLTGJoVyahoktryHbW3uoSJewBexY2hUMRjcbWbufczrihjppj9cWf4iupK",
  "key19": "unwbvB8j76eeRQRh3ip8S7kn4xR6v8DqfLY7gz2qHNFpq9tD1XHDkoFRkT5NvDmKWkJ3EjNY3Gfe41QiBdpHL5c",
  "key20": "5zK1JQsSemVHALqRuVsFVWVSAEfS9fhE27G3gxXwqGeBds7T5qDSGqdV8JeF6RYm8fiZLBB5Ds3DEvbFgHmb3hqa",
  "key21": "mB4jZJn4E2dorRCucqPd3HRHrTL5VL3kccH8U3gH8mV6JX3xMTrEXXYJ2yN8RPuDkH9kWeyeMPuLFE2gHXmQxbv",
  "key22": "4vVLt7pkMMe8AnDz4fGtyW1gL5p54MyhAQw8dWKxmHhcgwJC7XqXTCiJxqEApat33QEGdmvayEUwVqnPHndVanKJ",
  "key23": "hcPdt71ZoLJopTuH3xKeNx1UdRuC8XrZo1buDqsvPrYBaHthDdcSySNx2Ge4sAjpPMw4Q9SLjKcYj7TY37jNVzi",
  "key24": "NcMMa3eea4MTvLPPi3FwmQTfoTT9W1aNWWyUKDCJp2vMnY39dgLjZJpo3LKMbpJw2Sn47tTFNe9DGuj3CaaVaWt",
  "key25": "62sMyahVKXkrPm5Dtnzkxti6XBNpt3t48yzBhDufCrm3Zzgmk5Eik8C6QmS2RobB8kMmNVt6BFD782r1qrzdxyvd",
  "key26": "Levtp6VmSsji2Bi9zZHQcU1vi5aUT8zPdcJ5ycLRjTQFzpfTkARBPg4Xh53xALJj2n6UUtQkvybBvkpoxGy6eYF",
  "key27": "5Dz6GRAzM1moj5YZg4UnTAD9n9sQvhZ35KaorsWasnL4iQExZqKUiLW73oYgytXKeMMzv7aDkTQurDjZnXn329si",
  "key28": "5ttZCdS6kAmiKyYTg9GaHcBvwXss2pqzq32Vr6pGf2gwUym1vUReGwi4XgZVwRhbbop3C1Rht6CNHqUk3tbA1Ra6",
  "key29": "3zzc5KbUqTqtk8FGN7TU84EgGveXWMym9mnreszwJwTFZ3cPFu2sTkQArs5PTWqQqkhfNHFPbW8zwJJD2CW8T31f",
  "key30": "3mAP21wExxUXmgSxUbeZuZS5jGEaLmYvgu8tnjTddtg5Awf6A21jnU5feAcLSWm77QPpEYTc6QMmkZH9VXqfwLdh",
  "key31": "2zHog9ZGuH2hvKxLuusDT3c5D7PoszwkwEVN96yrdVJepgNY5WVWuhiiE8EeAHuk7TtMANovpr5YcksuQtjNVS2r",
  "key32": "4XHzHja9UwS4nQEPDuFgqyF67EcccZWDemCwfGVj9cfmjQXoJBATLYCbwwn77iVU1gadyYJynEZBF7okD2rXKNs4",
  "key33": "3K8P3g5B9KwpBK2n1eZfswSL2WamCED7KbwDewCgqwGRrLuLbvdXR83HuYdhb9Vyjm38siidMXJxNWfcuYTUGYhY",
  "key34": "A4jFezXYuintxxvM6W4ta8DaRK9qGj8SRV4ipExrbqNU5Kw2kQkbPDwcGQKwawV1JwQzPTjem5Q4xniUBfHBfuT",
  "key35": "5uiHabpPs84j275gEGXgKrZuRAZMBTLWNoHqFNj1wTLZKaMhFSKHJYMwXXospwdQ945wpZMvFjDsCAL77kiF6sM7",
  "key36": "5V1Z8Xq1soM99u1wQmebJLhoP59MLhTCcHeo82sRcLoCBux7PiV1zXSGFkRj4s8A7Ne4iHrh1Rvj5k9cUjQkK1wW",
  "key37": "3bpmgMhE1NSC5RYGCpuXz8dkh3xHMJ2gtkDUCk9vmBjBEwqPwxFfyTjzrsiNPXf8KkF27H67yBrKu47xpiDdx7po",
  "key38": "R1ZVwJUazauZrgczGWWW5KSvxnfM2Mfz1XbWnK7Q6bzsY181hJFY9eX1w2uPHAAy8YqoXuCdteX9FVL5LrZtkfz",
  "key39": "3UPQ6jiZAEFokMFMKJb9YvxKaATMSrGEhWwqmaVPZM8dATTmfAoeYPPMjK2WMXRxG9GR35Ygst7K2cK5SddrRuS1",
  "key40": "2ti7akf5kfhDqGyF3symYz8PwXqLBLYrDe8Cbe4H9G3NUdXnYDgq5Ze4Gk6GSPfkkvERp5ijc2GcX3XEDKLvMEo8",
  "key41": "5GANjq2P8yQQHzLgQ7VS3dMKCFMWuTnodgqUJnG471eapFk3Ef1KJQRx4BrZiGTqTUQjGfRBpfYFZaWUjUMotLR8",
  "key42": "2P9pAmAwhmMgK4exMk5CDtxkmHd6UZ6LfziThBvK2ujJUkBbWmBvFdTwx4cUucUu3G6VA7pD5wiX3w7s1pm5nLDX",
  "key43": "5wZfU22r3xAENJUMRugSzMkrMk9AU3o79up1nhDWu6eCY6V4XrAwkfcLi4wed8AS3j1vB6ru5rirbXx3X4gmfUa1",
  "key44": "5tjaZMyWTF1MeXWwKpisL3MiomKh1i49jUvaa7PPJoxXxvnXZUnwM4EEHvnSQfReLbYiPTuwrf11eFi5F4bU4Bo5",
  "key45": "5hLPq1MFP73peqxGjfVhjup4wqn9t2FJexh37z2TFHE2sxyrt1gehaR1b5Qtkr991xT7PCCkwoyb9Xj1jMD37xH3",
  "key46": "2xfyvwKMK6DHeE8Dto85h9rABRvyWrqZdnhPxv4HTEDWQffeZfAM2Rk3Up8FiC7HJBFviYR47qktriCfSMTeEFXK"
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
