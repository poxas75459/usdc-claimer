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
    "5XMtCPTMNtW5TLFHobMfvhCXn211YhaUCwLb7Hx2eARhoQWsEKxcgQnc8trYNttrTBW9ZQrNVpQjctB9NB2ZrrG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7KRPZ8PWGTVAVddfZNfCaHRFxLY85boGeVcN5cw4QmE5nZFbFMW7ePEhJBGRrcBQoXcxykP7Bx1pFpBU51QJNci",
  "key1": "4NjaD3csFAErwyVDgYypPkGGftWobGYUQtwDxi19bcfqdNiF6hRfrvnoCp6YXBncyzAn4bbuvGcPuQ2K75o1Ah9S",
  "key2": "QiTQz8FYpaCywjEcveoQSyX5TJx3pGWFPDrf8FryEhdBZksx1TrUkYc8oy1CjkXu4Ndiod4Xi7LtPgCb1186yyT",
  "key3": "5sy7zFPKsBXYDRZeHMUG3A7cC7kS2YTTYJd8fYtF93CaCfQ2zmZq5NpyTcuA88PkTUA6hvcU1LFjzpYX8SDSF9i",
  "key4": "4jzgiuDxr4NoJ5Kc4J8jM5ELYkd9afDCFDMjaTYzj9MqFZJyfHLVyH6gTKSatbo9VBmFrXWoxPJBZywDs5xT6gU7",
  "key5": "2vDh7wsFBRHzLLLC4wnLFhMBp17vfsxC8VECivDaiStvUhjcEZfaVPNZbNYfY8rw1o99iZa4usZ7s8Tq3SWHyBMo",
  "key6": "2FKuCjZSZynS6uTwH9NBjrGuDnyF2PwQHFpgcTnFRM83hBXaPUwgZDn8jq72tdtDb1Cnt7pYRKbnMqQ85aAFY6M4",
  "key7": "2ixKcJPPTkKsZSsARsQYrFENBT7unQsEmvgCTofqWtTwnkzEBrCMaYoXqY7u5YFFpBQGmK7tZZSbzL4zho6Nzp8A",
  "key8": "5n87na9ewvxgoEDBxVhF7MTgAX9jB6DxNxqVRcfHoaFZyLwKjbbuSrAnBXLQBPk6uX826aLUjppG3cXi4SkEdeS5",
  "key9": "5Vz3vM6eeL1DMkugg5HaUboADWDHic47kkgAiXf7uTeptursGsPpaHwG5KoDDEqX784TtjRYHr2zcKkT6Hg2mudM",
  "key10": "3Q1HM9eRap6WGM8nhD4Zgnztik9SnDF5B9spUV6FUsoPUF4VxKA1Lsg8j8igzCUe79edpWdgV32JpvJ8GdcACBnM",
  "key11": "SoLq5PqqQ6cuYA2UqLn1RYit89FwHMQKVo9QedhrMgaL86ekxA2YGYmU7j4sCG64cyLk5acn2ftWQUGEqdqfuie",
  "key12": "dBK3g1RDP5NuBbFGmwti3p1skYUL8CvCUWQfa5k7j6NFRcGAA31cd41wqq3fktA8dTHnrXhUzh4TgRYB36x8kA6",
  "key13": "hQmtt4s8VYgd5b5eQGEyD8iDwZaf9CLnd1JZNDCPJNC2pFsauELQK75kRJX2SWGBLf434DR2PcSCeDc4Xtk4qbh",
  "key14": "5FRcnCUaUwn9Fv2nTUMtxVKcM5YaaEZso1WayJp7z4iGpg6kFhxZF8JaViEgPeKRJn6WxAv4Q5Z4FLUkovues2Th",
  "key15": "3jVR3tUgqTGXmRStf6SxxwracWqFLSiaXZy5SWoqYWuhYXZKqRtx3YnTCscy71MWFth4G4vETTH1wVh3W4H65v3y",
  "key16": "eTc3S8N9AAYztZBMhsnCTHmfppKAaYgG2JVJHJKqPeAMfzHnG3LfCQC3y7tcpo6mEusGwxvk32N4ZtvqSFegN95",
  "key17": "BFNZoFYLEVWmbBk5QzxMSnWg1hZauyuKRcyC75SQVSHSptKCeFZ7h8L8ccL9abdH5uw7dDqHq89yR194fhE9tC1",
  "key18": "yK224ShgK9WnH7ctAD1aZaFZc7XVKdffVnKrVD6n34B9dydF3kF1EDzDNgm7Qy3Hzz4yY2ML9eQbWqHNWWLditq",
  "key19": "5XuF59JXMFsPbP1X225GHKFJv6bSHG9aHVafjk8qUbFqQAZtvuPKanbHief6cKiQuFjJwk8KLFCY5TBoBfvbpa6b",
  "key20": "TWs1VWKDXRPWYBAHKxNSvzkJuheU2VEghBV8nvejhZ5jTQoUSdgkGSxHMzWyHFhYVtUZG16zPZSKCNLZpsSP9Pz",
  "key21": "4zLfDDD5RzRoakroidr4kZcVfu5s4g4W1kzoEuoX1Fo8x9AzCgJmx4Yf35eKkcscn2sf9Q5f1Qy6xf9BxAVQngge",
  "key22": "2dQdrN8Ni19hAn9oitA1Pwj9KrjqVuj9zog3oeV7va3Za2u8Z2pmKpr47a512oFW867Kn4jdsFDNgnKKTj93kjFy",
  "key23": "2c8Z6tWrbqJwX3WtNLHjAnqEk7c2DweBYvejRy5HCpA7kPfRDcWPyEskd4R1kT5LdxukY7V6NGdvSwqBWQUp2fPt",
  "key24": "7X4v9XPVTmgHrW3JmxswoPZxUkQHvYTmSZsSH3ZTq8PvM5czptbHvMd17j3DmiULf834nK4HUquUfqWr5pv6NZG",
  "key25": "5CKNeYAZ1Y94CKHu6XPxipq7jGwiWyfhwY9oUoc2DeNCsNEMeesZrqB7e4qbUxhP3KXNnm7KimVWG1d3VNR8SBNN",
  "key26": "5qvauGLsypBVGk9R2BB5zkgpTtXqMPGmRLFVuQrjvmSi1QbeLNEWR6RbbPhSHn9LZ3horyfsBg7CQ5W8658cjDtA",
  "key27": "3Zh2VbaL9NnLU7YSX7JwCATYYnnbanG5TRLxTWM1KyBTF3dDKhUp79qsAetAzvby3XvscdDpQCwFW3vGdiyT7nsd",
  "key28": "4NUSq6T6aMtcd1hijiEWme2v2Wbyg9Kshmo5YMY4n7qr2yYdgsFSU8MCJd8JJW9xiZhqi3j4sPEndyeYCr66Wvtj"
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
