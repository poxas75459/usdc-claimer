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
    "4HBR1bqJtobAXVYJNqztBpWzKBTJfFhn72jR5boTwgtFZuf6zv3CxaV1Eyr8EMxkwcBFPdLrQUBJmQkwb4X1kD7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hbYQcLEJoRjdK1iTXqUJiYk5bDoiCS8aVefUK8DoPWZh6PAyVr9YkUAtfzG2sh6P5fNhu2txz4Qjw3tZ5y3LCa",
  "key1": "3mVXhJGpNKVowHnAAbiduLh5S5t5YJiBtoTWsJmEkH6vUzMtaBuT3qHzW7qBjX3b5CNuJwBMXGHyNLjPq1EDg4ii",
  "key2": "4fhHTdDhXPCYbSYXhNYUQaf3cDPgch7D4NauktRmr92DA9LftkjG5RdRmtu6o3t75AFps9RxTNyHSdcWEeuyVfHF",
  "key3": "39HWCpB1xSjC9zPAGq2RhDMQzSgMzMYsB8Uv2Cy32r6R4P1GS6uiQSQKYg44YRKNrXm5KejE52RQomkcj1zHVhBt",
  "key4": "8WoCihmK1c6u3P1jU7jqFs1gcznuCENWQYtwW3G2J6iZgK4353pnYrmafn7yeP3Bf74Ygb2mkEduMzJTpdA1j3s",
  "key5": "2r2J1gGaZvNnkDCKhwF8jspYQvgGML83NwmUTx7qzjwE24xMuSCVEizdVeNrP2UcjBCefuYqDCgRyfP5v7Qk3eHj",
  "key6": "BeQmp8YZLZJuAWw77vd9VZBPg4yTvJoejRKECv7RGGVrQaVrQaaF5fHMSVzLZ4m3wtPj2hcxFrFbYknVsMQzC1M",
  "key7": "42UWbQaQxfPYaW5WGTfdpbiT3xLkdSjjcgV6zkkDHAHoERQWgr758MAH81dM5AKeeCQhoz2A3rpmho63QTuux4AL",
  "key8": "3MTuY7YZxSPrNNu67fFTb1mQVstjVEQniFXNv7N81iVGGyoX4CJe2A32uq8KoWzEKuiaR2NUxLFyjK6d7n3wWsmS",
  "key9": "FiM9qgu3D2cKo9mkJAvx93biU6WkvU1G5cK864LsMNUMxwh4vZwPyaKGAMVeQ9EokKu4WkFKLQdCb8Y4NtDMqmJ",
  "key10": "3roTaKXz8SfmSrfgQSQfFasU4cPuzKF9ydfifnhx3tUpc5NQM4r4ALiph7WsvZMQefYFDfNHjXhxtNcAwtxayKS9",
  "key11": "3FZE6kCzXDGjs2wvzPTiTkEaRRZmLaka6ALfhwaAE82LgStiY2MFWqds1SezNPv5LKoi5Rquycp5nFNg1TaM4JQV",
  "key12": "2krqnyMx9kbnsfvDogKri8ER2FzDNzDJLGNTzPHiBEswMHzkQUo5R9xHsbSiZo92Pt9LDkAKoaBmbqWLonkNB5Cf",
  "key13": "6GkL5Wd7afifss5Gsi3Tg4243Q6DV2gJnkQnQ3s5yZhvYAuTBHrbaKKPUz3Bdrss5cXxxh85mKj6Bwqo6BDzihd",
  "key14": "vYLwJAdgbMaunqfkuBWgaBkW6RVsqrFmXx6RJAf7gZ71StbNX82fmai7jAxAcaizoJUXznXiueupahVXyTQMgQX",
  "key15": "42Ciy7jAJBPb9v45WiNLW8uftb3B83fUcNgG4oCVN5G1ZBbCs84Tim3dxvXemMS4LDotS4cDCDhAXvxGGfkpwPim",
  "key16": "3XuTcGvWiD4vaAVTXgqWoE5y4vKzqgqXQV1r1XzDdCG7YuiHgENiN8Hky6Xf8AChCxy6VNDyPUe5PWaw5WcCaYDc",
  "key17": "4MZJVuGvvjDc8Zv28dKhsjDLjsmK7ZVgS4RhRreuhhpfqMMjic2Yrr4KjeWaayWMPzewmbMdQad3uUDoBAUje4LG",
  "key18": "5WSVzd34McTynh3zJEhH9d9L3HWQ8jHN16xH6ENAmP4XQFerwhmWs4w6s1iqitVppNoU2tWbHqQZn9mV1xAZgHtT",
  "key19": "2TVLnPFAe2NeYUp6WrSeyoXzQbCqX9kGhUk6yi6TL27hq98XRxGZwxgzJP8ZELnWuLLYuRipmJxgjDJBKMo8pTrw",
  "key20": "3ksr8LLQv3za8sy7NNKwH6AK3Ja3ViuS2tTvZqUTDxAN9bzV4Jbw8fkyPtRHZSvcm9vubJD1GESw7bvLsm5vBwU6",
  "key21": "ZLwUfrepQMrTyceQT5emfFAj9oAeTH2hRf8tauHYxN1dR2hYGCKgMytC8GT3gMXmvSXXPwaA7sogmBDgZtRmTYv",
  "key22": "kv9Tw57S4nDy9KnPCEfEZuhF1Z8doGatGpmP3BYX1PyUsNa5bQmcNxyNy4nYkV8i5rQR1aUQEAMjKYc4sjPyyNu",
  "key23": "4wxwPL3DRovpd3fgUAhQySz6bc1vYrwsnFyiRV7sCiA6KH3Z3dPMuybTBBrCifWnBNhf1AKqZ4nLm7ZoijD9cx7Q",
  "key24": "2MEkYqCp8ueF29v5jtfBVEMrF8Sb6bj6a6uNQ6KdMKPSXSgLAStw7MaQUrXZTdsvH95dhqS8WV5sZJT41wErgBS2",
  "key25": "ZY5rsENaRs1ZauLbgMWUH46WVFshFvBvHBBckfd4y87p6FAr5HmrdVRoc86NFcXLF6dCgCetJ3Yc4wSACi4TFCJ",
  "key26": "2hHL6uf4kjuVpwx7W4qgBkaf77mR4rWvTkbbqPiwAL5Bm84XEufgErwdDuWmEn7FmeaYHq9JxeJmfeb7vPHLpnne",
  "key27": "52hm3jC6crQ7QtsxqvrDTvH8ved6Hrre3x5tvGPso9uZmb1RRJirxBHvy9ENLm9QjQpX7QLmtuekkzesXAzRkSYd",
  "key28": "4VS4ozZwAynLdrojdcSZEMnTzPhYLPhRRVDQqA68eLZgznEDR3ZFFievH9dEfBvk8anNQbMkLpkqYR13jxEGNwQq",
  "key29": "xkBxqVD4gS8ZBwv9enq99kT9XdhpqmAntQyvuXrTUtz6jsQF7MeT2PPQ9GK6i3DTBvLWLS7hzMYRN9YuwAvk7PL",
  "key30": "4SKEcKXEqwdtBa3MsNeFWc51uN7sLShZ4PEFhHbax2CjAbtN6jcBDeDbRqo8KgDeFxAKfvV8YBq9gb8a2XWh5gfd",
  "key31": "55rsRFw5Q3pnjY5YKp6F1r5kFtpudrFQMpRazyeH7vRmEbRFYCE5d7qaSiWakGRg2XTXKRujoB5S2vbMxuH3Zd6Y",
  "key32": "2e43kJiYPYvjJDunsXXmFoQVJN2Lk9ng3yxGRxnUW3Y2vbwfNUCaU6Kj833CchRLvg4A16N6nuHBvitXhxUeUHXt",
  "key33": "5WrbkZJirP7eZCBvTsyhX7uo2My8iqMohcSaUwKTUvSAWUz5Qvt4r1t95oqJfxfX7juHjYGX9F6HrDrai77NGMBP",
  "key34": "3XNJRdWiVPauPMBSaxU8t96WryQsuHJnG74TbJ2vxqbrQ18s1eDN8V7UpF3QCxnri4F8CiQtZ63q9oaDqY6HCGFD",
  "key35": "Uc4kK2KBVCdkpYQ9Z1dogZaUVLmCihVazJtG8kEGZYxmjXvb2YNPL5CeKWa1vWxX92hYkN3LQpkdqtD25fJyGxw",
  "key36": "5A44518o4XmTuAKgRg5LtYZf4irztoq9vdmfW2Tjv59xVi51EhqahotDJHHi3zqRzFMhd4XEE1fZyR2uekmvVUik",
  "key37": "57ejQXHe8qnECAy6fFh8LWZqhEgt2zmtum4Y6p2haC2p4ET9vfL8iM2AYcJCsKWuYB36LnpT1oeXFfUdMYJBGTeS",
  "key38": "2ybT2Ba2pagjjzeo3djnaQ9YodSxD2AxPbgewVQDM4kRBtRA1w4X8KMBrzF2XVE3nuqRVA23guhvzHpPhUEFdJLp",
  "key39": "4duz5ErHUGzN8YtBKcVhRgifJWF6GuwCL2C3DTGc4NhdMEdyy4qZi6svNbSaQtBDxkjNFxKYS7LHmjYAcpEKuuRT",
  "key40": "2Yh4ANgELqkF7qYDr9XXGSjz7RtSieEF3KG4TdHZdZZk9ogEqPnmi49putUv5wDmwm9wccLzs6TsJpLDv1fQC9XJ",
  "key41": "4dFdayS2zKCeaFBkwD4wm6stCjFPTRmHz2PBQfmysL3jFxRgocDosQPtRb1xANuBxcgqG8kbf21FLA4iLqbCaTg9",
  "key42": "63d7R3dwMkxAvLkmTwF4s4gBo7xzaZ4daF2ptvXTMPqdodnf3T9oB4Wf1uNdQo4NptmkxAEKaE5MrdZpKPsqbTrp",
  "key43": "5cAR4y6YjAy31bw8vu9nbfw5F1SkxeK6tb7B6YePLpZ3VkZDz8trjttAn1BYKWYPjHaaoWME1GTa6EAawozCF5xg",
  "key44": "579UX7AKEmTjMCexpw9Pyp7uicNk5TAH3wcUhjsLh6zTXv4TAQ51S1DdgcaszebMdMJU7iMAgZrch6LCDwsPuHKH",
  "key45": "52PBZ3u6veUZrk2crLyi1TJkRkVXncZ38iKEayu5WB4NKjKym6CBsNz9G96h9uKAw4FKBhTe7BNaaCaaXNUVWPU6",
  "key46": "6VrAunF9nS143DA1SEMPCAUFZQSXtmdebhtd3XirhY5bAiLsK1iPXtYKh1ULJEUm4W11gJL4QvBUQdi4gk1etFz",
  "key47": "mFqAQo3sccsAim69vCu6MwQGe2utXq2i6MpZcEst8Ny7r1j5h5uxNUb6skvSgoGNnscBBmvFDv9EY3M9LKCfLMr",
  "key48": "2Hr332wbRtfq6oVfhAWbF8vjsVM5QW7tfFPhbdhcgMSbvYbnb412NDcmHMcFMNoxR1wKETjaXrXC1J5CqXm9XeJp"
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
