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
    "2G3mSGoAo2oZ62kVVcB12c5yF4GztdjzXvxSbanTMgSLqj9xbKmEsbRQ664CWU7F8anooDwxdQ44wMgFsEUBMS1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52cjJpXanbWod4REZWbfhshtAT3o3Hhr2ijXKTm39rV2tazHq3oED8NknLp7RoaxriS4tpNuGsYdis3nYqkasYHq",
  "key1": "5cG4JWxu2JybVqJJ1qYCgX7GuS5fUCwXJcjemLxjRK5dMfBMdyCUuu9oUW3nGXfE92oNEjBKUk7vFZcGAgHm7h62",
  "key2": "3fPnXoc8gF674jM2WBrSH4XhaoAYridUSfBzkiDtz1WVg293CzXZpU1AxGFiSSyvcWDtR1A2muK5dRHjzAdLmZK7",
  "key3": "NUBxtd3YrRSmrA83rSoA86VW518rCi4GibaFVSMpbqVSuYWhqJjyK1EaRSqXwZFcb5mxQkfS3FWKYPKg25pv5o7",
  "key4": "65vAMtJyNXLaWDKJBfXt9ozY1ZuMj9UyBzA6Sqh5nQzFe5NzPUqiRKUzfWcQbD9aGgWsWRgqfv2XdLkhT5GtcqS5",
  "key5": "3MJeqjraGLhtPjtp5fk2WrQGpoC3dK8ceG125RvxzDGGSuRkt2uxRyv1wp8RQHc6xCSc1aRNEmd41vj2ph79PKuD",
  "key6": "324RPzv9oHfdTVR7jQyXkqKYxhunG5CVQSUBe7d1AunWh5GwNUVP6RoV5apUiDWEMn9j53AcNBPPjxLsL4AW8JVN",
  "key7": "5ZYyyR4Xewmk7XNVcAJkrtDF3tPgaJLna6uYjEU7pZDGYG5nHGS8jnKepgoHtD9LtEmUUBzVjSqzxXoVFDH8XqHj",
  "key8": "PjnFHh3xbbgLQp8L82LjvbdABSzx2jJwtKCFBscfMueb3GcSGY31Dsf8bSRj1zzQEPDEBLnHrAgUEPPTJUwQ4zo",
  "key9": "4fGSck5BpxGDtaNYr7kcaBhnEL5yPqV7WNYbLUPFNeppv3aB3cZGKoyQ8TtmmbZUSi3tm3t9Ey1LQDHeaWnpszTo",
  "key10": "xTZJ49yj1Zjyag1bF3jtjrybCfjkknGJwk1Hj2SwTthQCUEmi4dy8RTNTk8Jxuuqa3ygaCebtN92JfYpdNBy7g1",
  "key11": "57zKCEzQmNHNRnKAwMTmf9jUt571m1aJeUe863d9N4eEbgaSivNqeK8EHvUsdm4S8R6bGoQzbb7Afsnqs7AwqPqm",
  "key12": "3VSKsXnnmUWrSniNF91CJobxZrvoHneweo6s1XhyhpMzNmcJcKGzRWKFR98riuFPPVfuy95cdoqqVCCB3tf46Z62",
  "key13": "Eknj9Jz3nLe9fRNcu2xortvx1ZEJmK4Vb1XzwNLQu9HzDKxHW7YdzniAyHPWHBhM1hoJLBVDDTjFw8oDA3S6ofW",
  "key14": "uMs3iCkeRAE1qKW8DATJZrSDMwTmjfDRRruZP4x1YPXSwYp1sRrv9VrZbFupZDwJjMnPrh7yKAcLnFFQ3QWbWiL",
  "key15": "48ifkS174KokCq8ZDmW1Vbn1Ei6LZqbv2d7TebcwDiqz1CXU3W9SBSQd4D6uRgud6b26ui7XCQJhKJrMUfkQnQYC",
  "key16": "3JDY18kC26FmfQVxJQ1bRqAUmiMkbJooT9miMmft7MPNhieN4KofHm9mUjd3tS9sYcALb8rSptyS9mHaqTkjTh5b",
  "key17": "2x9JWTzMNX4TsSyKVtEZTcoqeAqTa1AaVeShbA5QZM6HM8q69RqUmPja3Z71SHqFf1Yx9HYsa88gk8YgzN3icceJ",
  "key18": "XuQNfvEDc7ZMXjyihbB1TvMgyXq2QzMfsHo8YD5qg32GAZ2MnGJtgmSXm9ByMKVkkQYUQiMmpuUvGFzhMgxBAtC",
  "key19": "akTtgQhYQMw4FGsWZXc2ByMza6QMTB4SeDAFfwYFzPcnDxX5Lz2G1Dc71kBqDC7VREVipKUyJHsi6jVeemaDVte",
  "key20": "Djc5feZE5q3owvmY5No91q4N2cKUP5ZZqnYE9wkKAjWdQr364ycnK5QdMfhrBRTroDZLcsuyhK21hquHdPUsHaM",
  "key21": "95ixNcjZqYGA6NSRBZbfzNom42mAjDQgJHjmY1viP331GiVwEtEC9rHmXKwcGQixysSqVsCmMHSfogVwWHU2Psz",
  "key22": "4icVR8odTBsTc38VH12n3hMQ2FUqF5R2MMW9yq4djHuZZZeYZDnU5qz34rHwRfNPQStVMCTsiDuadAB3zuuBXeqY",
  "key23": "MKBAsxnpxLAC5CWRQbkDQd1r7cMATagBFBF5fjSNsiwSAkFXhvTJcMTj5Z9dHCML3fTpkBRB7HLon9t3upU6Mrq",
  "key24": "3LRowwa7RQ5XShfLwQ6cgDSgW2PdLMaqPhaM1nY8WgvFBBF4DRC1CrgLu1unA25aKY7J1XSSSWKNDbKjVvJDeMMT",
  "key25": "4BD4ruXqVZyDMTQQMfJDzH6P6GVJH8godQq2WdPbKMTsQ3JXZsLHDQtQ7JKwqnUXThjBK32mzhrUseA4nYf8DPfH",
  "key26": "4UXYuFjE6F6Z24D3BUzjnFWLEu7G57o6otzj1H1xGVLVKMSL9miW5Gd39iM6o8gD8KWjvsSvZXBQ78Wjcf35n6jo",
  "key27": "5s2k2L9zUKh6NBV5WWrmT1dWNo24wS3LxB99thTXt3KieWhR2mAQd7p72wj8oR4boHWr7pxrctNuandhVFLgHERV",
  "key28": "49676Xuj5NRvbFmak1KRiKCePHjSRSXrLExc5X9J5Fc4UAkdTfbnJjTvViroduPaUQVchbNXBLB8kHdP1j7aKyNM",
  "key29": "2T5gfwGLYELpNorsWfvcx9eAJeatMsMzmcm3F4ZFqqf2R9kSTiPnh4h5btnrJ4T1NtP3UHc1MxqBRMsBWRrp4eXb",
  "key30": "3VnBxZhaJzNmMj2qGvEob1xx28HWBqq2pWJqD7KBLgWN8JNnaNvYZMo74AVNBp2cJigtUbLP99gSKFqGJRsfeDpw",
  "key31": "4fnf9XJ6mewXRrZ37qpBZFs3reZjAPTTK9CafBkhzwnYogWiYMEktrFHKi1z8C8ZJR1RceM8XHYZZVYKTkbUVvmA",
  "key32": "3QJMqfgKr5Nc4Nh8XT9EadxhVu9eRJf4kxHEGqQpuqttJgpYpKtzbwW3FH6BT6XRnwtJDTtRVntaZmSfNRfDdY5t",
  "key33": "35qpvLjtr7FMeRtcfK9rWeToivKRJnNhfiXTfLsGeecVCNYHMEoMmb7oMc6nDUKLMgrsYCvYJCUYJpSEE911RQyc",
  "key34": "3o45JhLsWDV41CKvVRMrTtpsvN4MLGQw24VbtvqmeEXPKSbXNFFbR6SiU7EzH39FKzk9Pru8Re4Vbs5p7MzrvGkR",
  "key35": "2FcpGWu1z3NVjiLRrjGCP8D9XD7USnNPdevcDVeu2wrjH5nN5e6PNYgi5TL6i7Uo5wupUkkfHa9Bmerxjxbmcvm3",
  "key36": "2wsbDQgCWyRyx47xtVHcvFrEBrSno6H2CVo8Dz2Fmt98mii3qATKgy2jYzeoMqj3UMd41EoARnYkJ1oYStMrzG1Q",
  "key37": "4g5CMsu1UaW4nGroG49EVgoVScLh66n67Eo45pTRQmRNWYKUinSPogLSRSaMurk1uafEisdAFtUZYeUgZtAs5giE",
  "key38": "5kCQU2mCMWxiJ6ouQzF35dsNUQosyR5onuZnEjTHsBM9yYk5ETS4reiwPwzTuSL82L5s4mjKWoFNQL1h1WnXuTi7",
  "key39": "m9nBcuTm3Lm7V8815yKqUSbmFeVEi18D3uqE7CRknD1aTVRViKZTefGTSiaUie8Ahznp2cBPcMoWWWUXAYdSYZF",
  "key40": "HAoFMosXseVf3mmk5uQ7y9DNoYFj74PwCBPX57z8Eqjdm4EVSzwrqTUnowojkXtU6QHPwiHoRCSEjxgXP2dJAyE",
  "key41": "DdKhJagXbL5Ad5JhFi6LSeP8ZZUvszg44Wp5MQRk9fKGPid5UFpos96jHSyYRNMX94iqp7R7KxYuFSqmyva1UDW",
  "key42": "sZRhyps969dsotJB44o5fcQqKKhXcN5jh3K7Xzie3pWLnxsUndqDzwtvgGforHdECf5LudCdtJ96H1mG5Uc4Tt4",
  "key43": "62F3vZiuHs7JrSDwdY2zBmVP5HnFx4xVCMtA9ptqMtA6SkZb1WGbhRmwFoMcMuXCv44naTWohxbSQwtSRVWv6tu"
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
