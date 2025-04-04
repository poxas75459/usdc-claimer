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
    "2TkF2DN9sGNccCa4qrF7eCXTL5XWuzHuoHJYQLKX6TEmENwmJWCJtG7jf4FkBaTUrA2vF6SH27cu8RmXPXLvRCN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46AjDvVkvUtqAJfNJSKfs3pAYij1frc6A5g6SBkiFgrY1etbfthtyUSsq8r6iuQHE5uA3YuVw9YvvDSvXGpfXvQE",
  "key1": "amAw3Vz5FkPscUZ81wqSqqjXDk4SantykY2KsfbKoFSbj4KV9SdewSCJja4wCv9orcjkhLh6N7NhBCkn5jXVyAB",
  "key2": "4Wmpx1G7sWed2H186CrYEB9PKoBofFFZYh4TULX4tVwXiCD3bZcjDs2Wcfi8puPMSvo8grCjjGC8xpiVySzbGjWm",
  "key3": "2HsmPc8kTLBkrG6hB2cFCi9RBk9kyFfPDPMhjuGMYPtqw4Qd3NpQrDTBxnD1YvZJqwUNSkMooeWXzwJLxMdC4ik3",
  "key4": "4jrum6gWbGpYZ1ZBn4Tybe6rTE347QPjDen4hLYzLUo62X4HsSCADc5eMxTvuZSbgU5aFGrA2K7ieHpHPTPqB7vn",
  "key5": "2aTEfFHALEmPT9rNNA1q3Sv4hv7QsQCpyvMPJbSaAEEPFcdyFhAURcVCL2g5tNQoXB3VcFQaNdLG5UB8V4ZNudme",
  "key6": "3wZyuYfYGSHZZq9xmbNKNxAA8Q4oHmdFESqCMmU9usrrEpPnfEieuhdcYpwtcuFPyx9drqn7dsXHt4AHob9GE59E",
  "key7": "5g3UmN66NorPQs5JxseRAaGx6vkKo4jCZwyTjUMVeDKd1tuExesbNz2ZisbjmQhgirKajzzqWuPRqnZWNnj1w9Nc",
  "key8": "3WptL5n3G5SP7xX5kkRVyHPkhVujAn1SLKN4GC9wnaAu4qiv4LZFLRjimfZb2TnMjprgaCnU73bsy1qjY1G91VDZ",
  "key9": "MG76diLCLFEb9wUtJKSzhya1GWLe19av6ThuBRQr9hprr7qUe7dJbZt5AhnDG7enCh4agVQvF4FyoZ3NRf5uLDX",
  "key10": "5FS2LMQDb9VPqbURGeZvwTdFrHrJfz4d7xxhhCgFxR2D2UGNk8CoikaqWQMcwBiuBJJVvLQ5MYec4fKDBaakQCqt",
  "key11": "3KG8WEtYJY8duQM1aJeWJUCvwzAoenY9pdqNVZTEBjR9yP7UxeZfqLkCvFGxu6XbWVjhtehpLTZWUkYgh2GZ75bn",
  "key12": "5Bubchhn35ow4bbVYmnhzru9DCvcMYZjpax6dgiVJQ9r1rvMYSC5wZCtqyZHMmy4jBBzLfMEikbRvShQgcBYcwaz",
  "key13": "4kNdMrHiJRp7C8vQCEVHJg4Nrjk1CHjS99KRCtPYbeVLXVFJd3Vm8gfTr63nNYREdKSinKreAvDFvKpK8UaF1bMa",
  "key14": "4tPLqQPszKsTkxNH6jZi2tJ5PiEeEQ1Jkq14oh6n5ie8TPHNEq7tb8bPR3z7qe25rZGDcuvBcJra2cNYGPM6Ep2X",
  "key15": "54RKFcBG1KyvMjicgw8CHMARVwZik9BrPXoTQbF4SCjZH9ZhmtGdnMbwn5LPMScFDXuUh6irSuejw956JQwQdqsE",
  "key16": "2BMAaFXTgrLeUP8G4Tu2aHzF8T2hAzcjZJ8Te3mjW4egx4UDSYzWVaHdAcvMpDnWd1SDPmxWLPUvm2hX89hubdwv",
  "key17": "4J2XB4Nmug5LmBmuyTFPbMiAuG37VFU4ByQtZFeMnA1ttXxt5zoriz7Acp9sYsD2rLoJRpxnAcnEL3tHzZ9SLwFb",
  "key18": "3zUGH5dEATtQvTQK69mJSeaEU8eNdY6sg1sRDFrNvCswhi2KWnTPoTxm3o4xkCQL1aPsRVUUqiCrkqg8DXdCiaXV",
  "key19": "5AY5eqfP4xTRdcZ2ygU2Xs8hNXG1w6QMMbQzj2uTaCM4z4L3mnHXrLVhPZpjetuzxf6sqFtt7VEVh6ZB9Lcahh37",
  "key20": "22Aw8aPFQXK6TRMs7uqKHqqU91cBsaTtr4VGxdiKLjcuabqrpevVgmJxbvNUNPJiK2PQif3FfX2GTeJemMtKtVWg",
  "key21": "f5RzwXfzaVE5zpJ1d5czmRc1r8atGEosxiyAawEqPYvz3zq6BndNSRDYj1i9FAvwxMWQUsPF3DPjWyps94S8DaM",
  "key22": "4H3cxYMAPqSXKt6E5D2LTCxcB2a498rjCLVNyDazftuBVXWbvGWTGyRH93JmBf3AyREXLjnUk7qhAfKNeJ4LQgm2",
  "key23": "2Q5n2rNd1yPVSdjKYmk9ykzXatzEJNTd9V3Ak7y39Ewkc4dzCcgnGmM8X7V6ArmUZvZsCFdRHrZkkF6vcXkuxQVD",
  "key24": "3KYE2WaUAiiP5uPsFrJpJf3Z85nbLZvW9XUKiG6umFUBQwxySr6ehyRQJ7QESFWz97xcdxSKphw6MSuTv3nXtWsf",
  "key25": "3MMRUaqMKo38NsAunTNHHnN6zPsLqnMpcHPmcNqzS55GW5sRWL4dYNHKd3aUJFeZUaDQ5oTFeQ2Uwt4AJMjUfeJW",
  "key26": "4nw6z3nbwQA5W4C3ecEt8EfsuC5y3j4pXmQLGXXVNjgXRugF7uiETNLVi11AyiRc9fUSqVMJ5fEuP3PiTdawhTbn",
  "key27": "4dDD5t8jeXWwokunb3MecEY7wQ1YxxU7VtTNx7JSAfdnM7T9ZjJyc2o98qRaU3qS1jPUFkHwzv6BEjr8T79JmJh",
  "key28": "S5mMYSw8sY5TnHsrHQU3trUseAbNAWGd6XWFNeJDxBW7NXJnneaVH7qVdSU7BZVCgh4jEpEQdfJmXGbKSLD7vWE",
  "key29": "3MPJuLNKJKiECjpoRJxzpnqQ1gfxhxM9n16K27Fsj7R8C4GfBpQsV1YvzMbxUFCLGhU2zK7eHAWLobCSRvAQUgEA",
  "key30": "57rGg5CpspF3vihgnJGZxr9bUHqrB4qH1yv2VYcUcPqbmKGUZsWcBU97QUjXhAqdnQwG2xxrUZLaVNWadG2uX8SW",
  "key31": "2qjxoAc3PhP9FTPuLGS7dcEyF8s4SE56ktvrEXYa5YRhDAj2DYhkHm2V1ZNJaXmWnpYDPm4LECRfXz9eKoW3iKtL",
  "key32": "4hLwN8ZkccV5RLZrzEoDBanPobMzGCUmzfcuQZ4skYYMhVxrF32YNwYGha5MkvK1ziwjjqM2LBnYa1empBrgUdGu",
  "key33": "2qbLvi6bV66j4XoD4xKbwPXAbqnE4drKWBGQ3g3V8pE1nYeAXNgXQQXScCzAD8EmVWRvZvaLTT5UwAJ1whACPpjA",
  "key34": "2PdY9ngofD5cVEpuTJY5zMCE9N8LYTDbaTKeqEm2obHn6nLDNZqBr9QefZujpEspYRtxW6G8251yB1shrCB4yq12",
  "key35": "4vANN5xTAkjqoFGM5dAe5UqBVBmk5zamsVTMf87ouhBtbbts1NuxDtVtzhAVuzdquPFfNnpzBmPwHtikLJJbQPbY",
  "key36": "sGk5KF8eY91bKe6ucu8kMfdg4CrFKAuLTo7v8EWY6tJMTjnWCHawD569RfUN1ndJ5uWB3bwAm7ytJLYosWgbFv8",
  "key37": "5rwrVRsEHsWTYGsHnMnmxJAHSJSpUb6SggYzJcbPigEU89A1odNf6KELPuMS52AAP7d1KNViEet45nMRZ6tyhrGA",
  "key38": "2tYoecwztwaGWafSW1AHMLkVEW9yC4hxa3GjfbTvLrhBQTaL8GyLtauiotA28sR6Dq8QgwCr5weKqbMUbx6PvcMi",
  "key39": "4gZMCCzFQVvkCwPGXUcLCQLLXj7MTjVtLkvoTEqCEURq1henZrsM69tCgMQsDseJkf4YXUHXhxNKSbwvbT15Ktva",
  "key40": "GT2dhSSLjdW5X5vV6T3grWT7Kgbd6iEnurx5g5qHmhrtyp9HVfqcabP6Vcnf2g1QtP9dFZs5gP1GvtN5dNhcxSv",
  "key41": "5tHm7WiSapPJ71URoe9q458qu1zjX5kpJXkEgMhbhLdiTUibWs2z3MLnuqijCAHB16bPuHeKR17p9cXiczfihSvV",
  "key42": "AcQTmZmqq1SpFPrLpgmNa68mtvM4c3fJWPTNSQEVE4oM6JcaMfF1M3yVncpwjppzxYU2Ps2BVWq4ST9nbFbnAph",
  "key43": "49NTCc1vmfdJmT4m6pPTX7vmW6JLauZKTU5Lz49HH1Jh5aXYzeAfKhdQAprd9WDY5NDHPHji4aYYkuQWiU99cyC4",
  "key44": "4jCvsZ59iDoVWSPftYQJ2fycFJqkAMFEJpXsydLZmgxPX32DSKnesj8gz6gmAiuFGuDejx1PFPjpwEcr1ij1qRvk",
  "key45": "nDXb4Y8jb6iAqadn8FxRX6uRop9u8yYx4jeJKzMDaAe4KgM5zab937KovRRnMNZVy1cV3brVqVQEJNwYcLe7PKS"
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
