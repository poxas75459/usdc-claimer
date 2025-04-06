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
    "4rxJHY1V2CcRPGdKZ846oePH27Yz1PbRgayZkiZqzcVkRumYC8Ujw4Zts9iHAtYrF4Qny7aR8vGCRtEKw7nK6ixA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sdpcwxG22cMM7FLGByjb3uHMXuuprLmva6uncmdKrq8Y1VK2RG5L1RxLwBDbz6ky4deGRnkqtNkXmpBoyM34wqK",
  "key1": "54vDbjz4w7QW5cjPGNaTcvjisdELg3Eg8DuCVmLGAbU3fxqghtsdxxS2jmu83d9DcBhoEEczPhhsRf3XCQHrTjHS",
  "key2": "33tJjM9qeUio1rGc9GUF41Taj41WLv2Qyu91LpdRACZUBStkNwReKFvvNrTcJGN8qxRGtUCasd71zUEui1d5ntdC",
  "key3": "Uxa5NPEMhKh6s5mox34r6EpUaT4Fk55ksXvEosDJk7iECDLrEvVwnhfuYhevXbTnZXBdjidPYEqigwWhHJBMG6e",
  "key4": "u8c7S36qQf8NG5RMq9LoojSWsThxNfzZJRkqdH6d7V1cppnhrRC4gdheth9LoM9X5xqQcxzqyzesnYWYAiHu8Aa",
  "key5": "ZktnsuSBvC5XppNgBAChb71As8CHmEBXLgNpLHeZU4nyv4Ac2qhtGoQSVuoE3xBa4tVCFbPRP6RifZG1HeiDD8N",
  "key6": "RsGfdZZK6Cc6tVf562gerwTF438zTALPLu5xhXtNGYwYJxnNFbYePRUAje5BaBVQYasyCeJi7Nv4LjYQS3fZnsz",
  "key7": "2edFNj5KSGqBC8K85B6oZDxEeDj5XC4zLJUYgz3Ffj7jsmre2ntPfdPwveFNBV8RhV674PJpjWKpRfAnVyZPkwLZ",
  "key8": "2RPRgmiich5CNbCLZiTDFHj71kBnnxUhfhhRXHKGqDQyTrY14Ss52Kuj66A6FBH3BKQSFWTjXRpyHy73xKzKnpSe",
  "key9": "413KQWKUb9je93D2PcB7d6DuMeaL3RrfAVwczdi4VVk72NxRPSaCbnrAHJJWXFMjCeaSU4pAPL5JEBaVcm5rrCz3",
  "key10": "52cGNfRN55LnHxdPjrcxtnGshM6wvyxspgfBDRVvVxr2mZfH1tgH9MR6HfmyKrcHBf1n4vDgbkPnHA9bTkP9Qbse",
  "key11": "5zCzUGtteB2ya3Exd6Apj55PxmKaQYizwycCSoMcUsGCeoCP8rtq8WqbLPSDHF4is4pCfMaM2xhH4pgJrhNokCPs",
  "key12": "54t2HFnrYfnQQwb9jimfrSqzfNzfG9QkFC2PZWBwrob8BM6cjb4BC8T1wj2j5Vhq7o49T6fQqnWafYB94bBCF1kS",
  "key13": "4n5SzEkjkBQRQPZfpyoChnyUGXqLxyyRUyngkMNvHX43hmeAEZjdbjiCvSH5YrB76QyucrmD9SNwaofBQ2DE8SXu",
  "key14": "52Hzp6yUNcDQpUExaVbUrAJUGPxQxujXVALKGaiD2twP2pVHBtcmFFYy7cqGP83UD4v7T1u8bsyTTWdQuVnjPpyi",
  "key15": "2UeyRHgK57a3fcW7sq38ARfeZF8YYBWYcAWFPNzapDRfQXHUPBjzXc1g6Vh1P7RtPKdEarjuuRTZr45UnnxQt91V",
  "key16": "3wQ9gTM3Eb4kYU1c5nhY7PVhUEtpDU81jbskE1Y878ucqrXPLQEJ6qCWv32z1Ha7dYYmRyKojXC1nmpUgm5wtNTr",
  "key17": "29iUvmfNwHBk7fwhBrPU1Vr1uvVCkYmPtJ6Sbap53KUMutqErDx2ZaU3Xp2kytWUA8ZwurvqFCWaw5oQVbhKGNoN",
  "key18": "WGVnrdL1MJTdDrryHFipKfYJGpAS8pSV3scKeKmv3zS8mWzQ7W1pwPpR8FPwUi49QXBrqjnJvYfYAGXoQ7BdSoX",
  "key19": "3wPH4WbebiBSAuDScowbXcoQMh57h8QFZf5dZnQip3nRX6JmZagcipvDmc8mqxi2uGkA5DYXeMJXmg9Zifwy4YWt",
  "key20": "3XPEobwQdFHwxN9z6PbL9QGB87FCaCtgaskJjWD5XUURKtV7hTv4bzRUX1scexApcfqP2vUSsfc5yFKhPiLB7U15",
  "key21": "126jgQeQubcJKkwBP2Wfha3gtH44MSDBQMHgmP2pnDTSdFDWLAi4g3peEkvMvZvdwhMCZTEvhfbPa8qTUnU3MsCC",
  "key22": "2ceGkuV6GpgT2Gd6E9fY387dWVsHdoo3tBYx7Y9y1LgHy5D7cLdU28KzPKwooseaAx8FegzmtAYso7gDhKaFNxwt",
  "key23": "4WfvaQ9rfYo4E6A1v3H3XW1JAoeRCcNVTbWCaoAg8QYGjbYC1mLTS4xXoiZ5jpBKmwkkmbqSGqe9CPEmchhtruCq",
  "key24": "4vwakWqJsEBoZPmrdqdwicbuTAk9UDr6yQDdszZ9cpXnTjho4w3oCncjkcwgtB283dXgj85oiufJvCAuVvydDU3d",
  "key25": "RL6bJYvq2AKLTvrK7eAgKMJunRHyj46ripgd55exzSoPjmo95srkmPJfCK6kaorqgaqHnCFwPzrDgqVJbo4Nbpp",
  "key26": "3MssZKimQ3SevkfRRnrkScCpGD6P4kekAKBp4VCkfAW2kXJjxhemA45h7RsxZxxzmBVCRJhLHpgBgMx4p4EgSceR",
  "key27": "N5eXgUU7L5WrzTBKTEcJ45AAd3bjqUS8smVfX7udU2ENMwpUeZ6x4Pk9S83JSL8gLChEQHQVs8i1KRuFAYJUnoi",
  "key28": "5UX6GTbY4yHSTeueyEDxB6sk6G3ZpSFURMcWX6AweTMQj3xdUsGnFLbLbe7nbrzHXZY89wcifiK6eHy8g5wKfv3K",
  "key29": "2QqfLxXnbUXrz1EKRCsKTqFYVvW5C5o2Qz3AGNSpgHkg1hZKc487cZ69YEYdSFXJ8Kb2AGhCSHY8E7sdRzSB6dd6",
  "key30": "5qojdtui7GcMHb6XDQED79oyHXmi2S5S8bS3GyF7k6TRTM3JKw1xiqmRUhoQQPGTzm7cF9owDaYYRvrUaQ6rq9TM",
  "key31": "4pF3cSFyRZsRgUa1EZA4RTgTQJRTqAxkC9ceqACS5AyVFDokf5DDC2p3YozpbC3sJ8dcEFQrJHoDy59MQN7gXr47",
  "key32": "59yDRXT4B8hM6T24dp2vZsVsrphQxEABXoixK9urHNaZeQAfT8AC1nb9hCJCMEeGENmguNo8hVmmK7ruLDmPyGWM",
  "key33": "3F7T91kRgwQrXYoHbnYfZeCdgx5uj1QhUNzdgYm5SU331jbuPD4m8gkVQDrFbkKhHBLTtkyveYXEtnA3RxndL7p5"
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
