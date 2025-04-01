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
    "3Ez5ttVgLkKoD2FtN1FTrT5Fs3CF2iR6pYNkps8uhSWMLqx98hFvhfNDW8JpHPGEphYttXC5djp3ncNFG45Dh5sB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vTD2QhA591ERnaeMxfRwDDLfocD6NPVumBDtVDn32HRByrxD1TeYb7FwKyEtQ5chpyzH2Cf3DSrkqbjjoCcPFf",
  "key1": "5LYWuQ3xRmRyMVz2omndfiLdiKxVXCvfu8XiffWvqCE3FWWgMCLxyxGQN7ruETYHcjQchku3caYBvYuroJzE5Zt1",
  "key2": "5SrejNGrUx348ViQ91bPtfMLc16nUrbaeHEWDMNDdsx9uFMxingagEuZgC3XMzE6xJSJ9kj4fDZFWbJFk4nvQZqm",
  "key3": "4QwYdCX1JLAGW2ZeeDeZjqngndcPYAqiEwpqUuwDht6E4kp9XxvjNbd1SjjW2jsg8Yh7nLAoAXoq23B4QaqZPM2U",
  "key4": "5gmnCUT5oLX5ryJhDMkRbdey3XSuZ9y3a59x6Qy3fSB5y6vkGAmgi6pkoYYN8mmNeeoeTTJEnSHRQwDUECCH77BR",
  "key5": "3FdGDTtcfpiZqwvEQoYzfEQbXtSMHY37rMVkR9uHXv4Q9vg4weSqLZpUTr4P4JXesetu2XCmHxSk6yPiXDGL9BfG",
  "key6": "24UpsU7TY92dxjqRAVi4kTc4XMJtyt4xVw95cEp2hoFZJtURU3h8pJY7gX9mJx68JgaqgKs54CCpo7TBHuKgxu5t",
  "key7": "2c4cJDbJTCr4ojyF1usCXGvj5FuqeXqnEenwzfcUDf9XUG1JNaqHJ968p8dgpqwa8DinPGPfaUT3J4P7VRfkptC1",
  "key8": "3AChmpvoiRKg9XhvGvFo5rRmBUXte4HAGQgCFVw1fvraLB3uhuRhn9of8XiCNr2L5WQ3d8DrPeWebTd7zLV9dFkU",
  "key9": "2E6NBGFNL4dgQCYxBMTgwa23RhDa2t2kYKjc2LW8a2iEeV62VM4aM3sYhnYeAVfgsCp3GgxxQA39mQNsPhKZ8Bvs",
  "key10": "2ucWbsbhz1dkXcVxdK2xd6oACauZVFA831YKNi4WRLQ1c8MGJx5xLAS6jq1DxzpwCp8H8yw9AfVrZS6kmFRb2ALH",
  "key11": "3LSNQetcJrWJjB2dzzdQckqt9a9Y55F519xmGPF7YmepHNAGuD58H1q5iFkx3rRRyUKfWwrWTi3iJ34ZRHsr9WY5",
  "key12": "YciFkGxVMYjYrSKVn9bis3X1N6scqNqsCb3PbzC9CzGdPS6Q3CwjjrwLNT2DTsVTzetK6wUSVg26ricAidw4xi1",
  "key13": "4YpsvbbooMwE2CYt9MUWwnTSPusZbdMutred5Pt8bYCJEvqNmiDxNFqgcpYzXAgcafvbjauHK5xWQiRZSBwkoFht",
  "key14": "48QV4vMYF9WucMzYAmdFySuF59MpBwc1oH4ryV1CT3F86xyqw3Kqaii7LTJADPQzkcceAvshkG31AEQww2rX9ah1",
  "key15": "4BrudVsHaJWJB5MEKeLCr7weAARecS7xqkNZw7jiRNRKyXzBi3rTBsejhEjYb6tmwWiJ7hZkjMddpeGXxcuseDu",
  "key16": "5PkDAYsCRpWX9cYJmmWZohQP76KcFqzjRgp9hkuaP7ZsctiX9ywCNi1zuGiNLok5k4iBQrJkELbTmrNi3K3v4Wbg",
  "key17": "66W9k5pAhdViMTjRpwj9mcVQ6RPNrPh5s1Cw4yC4X6jcD7ro7UpVvG54sPmbGJAnHQZf3sC2sSYo6HoegDCEUR75",
  "key18": "2boNzZdNs5zg6sDiJzc861VMgiLCLMWeQwghzGWKt1ukBouUz8eV8HHrydETUcNDSFH74H342UY14KTS6EkGDG5a",
  "key19": "2MKvZS3CddRBJ119XGJ2rYH1hQkQB6F5qZNondYQwWruVBtkogrRZa9yYSQuizYHngGG4EFKvQuN4Yed4eDLUSQY",
  "key20": "2LSeoCTkhgNXXVPwisF6nw8Gk3FLWGWCxZsTu2Uofd8Y3QBUjHzapX22msTdzPX9B5YCnqRLXMemX9X8RfKwD8Uz",
  "key21": "2bjwkYMyKHgJFAK8K1cXG8vNEBRg1SpGKXZyovY3htD3G77UCi31SLPMk7Ci2gtDwZpWWzVgC1pyRviAd9nx5cRH",
  "key22": "644KVeWEhqwDzmHQNaeFEABtF3YRebmKaevSdHLRwN3Wu2sF9vUb3UNX5PNd8ELXxYeUeg2xUh1B2WNkeCFLs9qB",
  "key23": "eCJFtBY5MGMDmdLRyM7wKP4yrYQvD2y6m5SZot3odAgnnQtg8g294KAMDP2kVyVjgh5DSy8atDq1T6VEYUPsmmS",
  "key24": "3HemjAvuXq4g9PHXBcpfnxBm9USqPGd81HXPwTLmHCtb5VA1WE8THqdEhfDX7wSzPNbwD9EoGE8B5dqeCejMBoH",
  "key25": "5QhLG4pxf2Qopb9zcYH3QQsGHkLG6u3oomZf3UkkkVZqM7Lrq9LFUYNv5g9kBZGwJ3BELhJ6Ad4exFUBuCmgo2zS",
  "key26": "5sKeMg9c3tHsdW219AtvyuphzBkrGuNT6JzcgVg6ng6ja9P6AZLyCWXyoiSnb2vFPdN1xVhWcrEgcYPUk8a37zLy",
  "key27": "41MVhGfGMupWySYjQaLQpm5U2bfYCtqfKrD89NtPEhVdCBu2dhaJ4Uf4AKGerT6Z1XQrfRPbQCYAwYPR6BrW7ewQ",
  "key28": "3AVuAPqUDyomcazkvAbF3gxDUB8cj9cxB4DdxiMusqppuF9W4YbfhBk3428iP6MxykSNSVBVqcz1KVxwx47UGTKp",
  "key29": "3iDyrenP71Y1Pt9cdgwhbjcVXYCLK8fnuhQFQ2xEgGB6DAof3nq9SybNW96xWoeSSzrHskiukz133TMNz2A7q3Bo",
  "key30": "45J1rzd4jRYqARjkbV2FgnMzxuZu9kSit7aWqcT7k6DZYf9q9aRk9kxvRnDKSRbL1QLhgbZfPEcZwuPGtV21gdwd",
  "key31": "4zVcJapcAMZ5fTyKUjrAJ3RVp6JdPkCcoQLeXzm5BY5TqoyKRJMhPyregtCkaUPcp1mvSA9W7eVBMBTD6rw9uXPF",
  "key32": "vVoW43Npu4jzpSiRa6WxmioTKqWx1v2uZJqSbVrzuao34b9FHBKuspwFKAhWjSjnEANnBQCi4YpSZUYgh4bgXMA",
  "key33": "3Q6W2u7ZiKnWDaZraACipkcudLdZJq4zY4UFRjifMFPctQ2Ubf3kKkKYA95JESTLLi4r5hfjm5q3Y69noQtCi8Qj",
  "key34": "5StERexW4X5exnJdBKtn8Yxt71pqW3WYzQHWbRazDY3MPFFe7C6u5vd71iCeFb6UUrvXTB4jTmpPAu2CWDsMZZB3",
  "key35": "59bLA2urZos37vq2Fc7L76e2zcAefse8frNYrpQwnYzqXEX3XntHNDZdqBc4yqN2W9cBtemTqrBaiQTgEh1cgCyC",
  "key36": "3g91ESLX2vUFheN4wyv2UM1YwEz9T8kR3o8cba7RraoBWgHiBFFNiTUh5seACk3aNZy6Z92KoYAmw1SYDy693rDn",
  "key37": "2ywpLYHQJukm1GcCvuPWMpTuAqv3v8Tmu8VqGanzvXe88AWepgUWniBsKLADzoYZ3Zw6SDRJZY4oXFaDJuHc9Hsb",
  "key38": "3arRFhinwwh7uAuMsmKMXkr4PGmGT14Ccg4JWQzb6Npoetr3FmgDQQ677Uk4PfWZh5wJ7RqfPbFTpmN4dSqxKjtY",
  "key39": "3GS47G1Jg3ZMjndEZtXEvkXKZGzA5ouZ2XoPqVEoW3fCsnQ1iNoQChAvCb9z3KNyWB2sgZYUefdbXYssdyrSe8fd"
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
