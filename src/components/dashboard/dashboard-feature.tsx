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
    "3noRYsZ15SbMULsaYrJoU7jDXysJbD6vRZMeA3gNA3nmyundmtthp1m4dHf4D7Wq9tooewbhbhXiDJTbCjVEDrJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qsDbDsH7tAtKdGLW5EjCiLQAtUgRvP7zfs5Qqr8QW9XBRshie27M8cRdQVVMpxXJ6ErmTE6o6T7bXEXGN1e5DEg",
  "key1": "2n2cHFRMo5zgepD45H5BApiC5Ab6PwdbidfnwcEiPSSSM5uioaNrpvpLiUpLbMTZqezPP2J3hf7E1mGoKcbc523Q",
  "key2": "4C5t583LEx6zZxrjjmcRuaJ8NvHymqPG7nJsQWG19iF927KCmJHtuTtYMTZyUyCMqXCoT8KSjSqjcCiTBaNciazw",
  "key3": "5Z4Pitsdenifgfo5qAhN9XEZgD5F76f3jLDRJbPwoXzNDJ3wbWbhB9zSgR8aRyADnJVnpGouBgXBsv1PrkkEGZez",
  "key4": "2Qg7NGxPgsquadSxCJormuqkd6AeFLTq8NUujCx8Q6snfiTuxa2myPufRRDjGmP1ddtSG4bKrHMPLqTewKbDkj7h",
  "key5": "5cQyrtusU5mNo2xNtry891dusb6n4dxFbMXngeMp15ZynrqjEfFzHXK58FmyiGxwjEknu7rJpgsFVwuhhR12X6Mi",
  "key6": "2aEkCYuTJMCjSC9zcR9NAqcvmqWUeFa5ny2WKqYRMM45UWGYRKRrYmMBWvuGix5gaknNz3TbqkKHUkagnV2WFBYS",
  "key7": "3VUGiyZhp61oJwTYMEhRptBx14db3dufrnnSHT3oikLCN1DhbQ5zaQjgqhDQMbzH6sN4Krn2hrXb8os4zTspdnmm",
  "key8": "67QV8FEnkzSMae1J4V14CiVMzDibouX8Ru5d425VbDU7PPE5ykXQPh4BJpCbftS94yPvBcyexcndG9LwzvLaFNm8",
  "key9": "5AToN6MrSiSeByGPbRfJ8SSai4t9bs9qH7Pqjy6H5wPApnDNds3K1VfqBDUZ4qqdRZENzp7f7CTE49vtDwhWCThJ",
  "key10": "3o7V5WttZdMSB54Uu8pJjsk627ZMy7ga7LGoS9zCGtFvKxD7oN8UAaw52WqDrWduejC9Ar6BjXMTiCGbm3Wfe6Hd",
  "key11": "4SFjJoLRULBdBg5tysdvVD4q1SrvVb6ThYeydCKV2P2exfnQ43N7Me47vDqnUGVyBDxZFbWZNEXXeNkQsFdTUoQU",
  "key12": "dz5hvfuUUM1UgMiZcTm7Gd9cgacdrKZynPdjzALSdJKHcAWQZN8c9CT9bgDkRBZDSdqisRo5XguVpivdrc9zHh1",
  "key13": "2LMUsrpgRP22ejVdBwJLGR5vyrxNAzfArZXZYo9uRZ7onBugs7RhRKKcvU9AEBcp8rnsMMJsrkeFqkW2RjicRXtr",
  "key14": "3Cncx8RFbvJGErWtRfogio37pvEtVydmzvGFQm6pqms5K75Ae5DXig8meBU4Dmh1gv1bR2wTBa9E99dFxCEBEmrj",
  "key15": "3DYqnst86JQTYMzbjBHEhFWX3KHBq8YCYeahWDBFwz2zErg33RFE72jeiRmN11ukrLdB321Qguv44HehCG8eXCHv",
  "key16": "5gUo18gsF8ezyFtAz13oKZ2pAXvyWw4kuoEhMMMWaEU6127ijXTBXwqk64ZbzaswwbnuacSRyCxMwKJdBnL3LEUn",
  "key17": "3kJmJbNGmxZL2NcgVTjcb5oTQJSPa8W5QutAtrPKswhCi8K6YRGQNsEbih2tku8SD1LibJ5vKYzZQrkoZKh52S4J",
  "key18": "U6jNwB3BcwX4PMxFe5U7ooFH72JfdMLGtZcscKd3xa7gH6w4xhv2dRuJ4YAbtTw68JJBDU7SUA8kNeRGdrTghFu",
  "key19": "4DMCzwBViwsetzGeNWEMxWm68h8HfAdsUUqu9FaiSCpQ8X1gbfCWtwKGRKKUZM7WdfsGrBNB5Ff8GNYKpf4kbY6m",
  "key20": "4hB97Y4zUWvgx2QKroh43omNyaCJWh7vyESXEK3THqDAmdJexzFNuu36B1CSZr44Zbjt24keqFwZPHLnyPwgiEAN",
  "key21": "4wH7UpLKGstgFVhYaqr6TDADyjswAqf26FnMVWa6mVRun35CBTJFjnTq1F9iY4TCBwCmqw1jNW3Ay6cqMoyu2NsE",
  "key22": "gSQDJCZ7gQRJaryqkgyKbxpN6vkFKGJspyLYwQZLZ4PdzBbUYZAXuVAxinucejJ6sjMz681kNpYU5bAcZPAeoQ5",
  "key23": "3gdokHYSUcGSttpHYNgq6wAztudYYmiSJTSeRFqiLebLaYgqA2f9bEsvMGjVkrM21p5fqaaQM9VktwQPxAUZz5Fs",
  "key24": "2y3Xw6pMEStWrxEWRjPjj9uS7gavhVARCRvUUuwFm7mcDpN1jeZXhrhw9EfjBx9m2RUJAuAscdwzvca4masD3ata",
  "key25": "2PffmEMMu4P3mo9SRWiSxazCfc6EsnJUDP2vLfnSmaJrdYJRLKvsoEEnoe5hsHhyC5mPcXfusuqW77HaDTTWo6f5",
  "key26": "571w6f6MmrLdJgs6o35vFZCtAnJiqcpaLb72XRrPe9WYGHe8p9jYvXiPCLbpWtJfarWfipgurHz7DVq5MmTebwea",
  "key27": "5SHoA67VtspJ1Rt57QcVthLibDAwjhM7LfsbvghbEzgQYh2jxfTDHfGmXWvCxiGw4dCTjxQhvJuWzQ9bm4vUQKTd",
  "key28": "HJF1TbzSmcj4rpZMMz6uRQU44vjWGDn884Brk6io4s2AXFm6L3SiZqXMSjLfXJ71LzATa6hgzX1eEABLaXV3g4P",
  "key29": "49e1X6NnCMAemLHs6DzNmLpTFVquSwWrM6oHAqCUScAKjUdiFZxCB2uy3hm71FrZmttvKJybg1xr3KRV1NMVoSnK",
  "key30": "5SBcPGtbsAziLmR7qEAy8LyJH5HD9HvC1dbh7qKJYdB4xFNSFKxv7iCVx6ddEfjHPTiQNmJE8qJHknM1RikZ94Zs",
  "key31": "NDKb6w8prCezdJvRUFXzWa6sJitLcqMZu4hBGnehRP7HpjEJdvQkP81EUP1cGbARhe7xK16cZ9UAdZJwVb3XrAi",
  "key32": "cg3urS6wLVM5Mce2hmxVkMchpn9N6woyhQL85K9atvtYyTG4ScNJYWi3LCwxySezeQ9oiYY5efMnbVV4d4Z9BFh",
  "key33": "XFEQKTFazfkMk1sFmMs5wDdxhtoTZhKRiRLquH8MPekVQZCms7N4tL25NTGswQoCR6hhMqKgxT863XyTJxX6phn",
  "key34": "bsDRwssews2518gBoA7rZ22xfsRfVKVxw9ADuQJgPwe11KRfpkSqYZEc1kp9LaziVvYz9dQEbZDNWTwKp7VWyAg",
  "key35": "3qDff7mMbsAH9W7bRdYQGKGFT2VHkLNCHKf9bu4iXwETU9psaxanpAHdGxUjS1DPNAa3wYAGzRhEmXD4emPMkC4w",
  "key36": "WPcgsrUabhNg87H2noYa7Mx7y7zkUVLcLv19xT3D9FVw18vX5cposJdpwsBb9M9w2Fznh5WmrQkVirwdWuJeaLs",
  "key37": "UpuE4YJyvRSBFBhbntw3QBBiGzRwG3qQdKAK7zdgSY6AQYUNt2iFvqCBPFwSbP18gfqC1Zwz7cfBhkwuDt3zk7N",
  "key38": "5Y5xkcGY4dCAJys4x5xzZKBBeRgaNLbRnP83EzriGSmvDACggZ9mrz6M4nty9xBa39c6mVSYLa9UdZS9jUsbNyFg",
  "key39": "cMzG4aqbb87LHnj75wBAmdBcCPGjeRWyQ5TZ1KcxexPRTBQJhek8wWa4TipK9baXxBpFPohmgoe3RxpSuvMTuHz",
  "key40": "5vBbPRZS6TiJuFQEJm7RxgnGiCZWxqJgbRmcqaZVLopxG5Xdq7Dg5KPJ4a8dp5J9pqUscvHvFg2wX3ccqT6rtfux",
  "key41": "3PdD2HEqmSkAgh4aTRqRQrG2otSoAujJr19zNwMv9o93dMX8urDxWjn1exjJg3kLFDE5S5CEWyTe4ujHuqHkNHGf",
  "key42": "66ndTZ5Z8ThenakZcXcVEHii554ptsWbzCGsoB9ETUab6hs7yobELcSdof2d8KaqRv8PsZdXGftq4Wb34Dmi4Ae8",
  "key43": "3Jc8xuHQDebR4vxb28zdrSktBFJ1Q8FsXzKdsD1qR32bxqyWjfyw7mab73xKQcaFUoPXk3hnQiVShBd4unnuN3po",
  "key44": "4bugk55aHczwtvzaF2oiLpgkeLjNcoJQsF5dbTbzQS2t8o84tyf5jMuC2xrn4L1zH7WzzaAhUjrkKMhJxw3wtjpA",
  "key45": "669GXDEQsuw9gGCTzkNbBv734durEXsnVT4GCn8aV3XQtfXFryiyB8LzAFBscHzDx8tdufKiQ51t3k2bo1pAnBJN"
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
