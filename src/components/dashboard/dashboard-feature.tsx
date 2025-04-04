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
    "2SEUFY7qJTt4qHXDEuCvJVgyHd97dJVxTWnmsvTfEQswPabX6UKjg5s3AWGviJcnVczou8CQYoqD6Wq8JcUvzgQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XsGtnhETki2n6o8ArU3WTeakEDoHoEJ9pK9vvntA9gGuasESY8VPYpV5chH3HHtWa4vuztAiMUVZSzvxBizPh2j",
  "key1": "4AxoQdtekSMgw6SgYs8NV6eGfbZt2sbtEz5Q5doN5YSgYWJsEq4kDKHmX1UL2kZYWxsdwHcrTj1fjjZjDQHyzeLY",
  "key2": "24mLq9vEKDGEELsdsB7c9TjaaXPXiqtzbRF9Y4uFGsTtqUXYNyigXMuVWHfCYULFyup8hTJpw3z14eWNx2eesRGJ",
  "key3": "3mixLN9bZqa1nMgFm4NCAdxQ5TkysHMS8a45n65kJgw9Rh3cHBgH2BfQUi9kHJeAn8idgtZ1k7DyUTs4w3s6mzp3",
  "key4": "2DLdqeyfQS1j29wanK2mvn9NbYAp5p81DrnyXADt7nz1JUHSxKzMJ5EuS9qsGX7VKEDYRuzy8Vx5wpGLYN9YMYXa",
  "key5": "3SENf1tjLxWGDv9S5wXnqasWTNqc2JwcYizhAn8AP3V1ybxrMdJBdyM9YLu89bkenPVizt5rUzydxHUcGrRCALXw",
  "key6": "4LmgQ7dkQRNTnH6ap8rYwzNdo8ekwLX2RHYxvpKiBZH9p3SCVLcoQirzN3dxGgM2WGsdTpir8sWXE8zNyZBa2RFL",
  "key7": "5WYor2q345QCu3wEseSEsbiMeuyvbi5NL357D86ym9QLHs86kLY9H3b94RfFHB3cdhduBJSBnS8zgSgKe9GqJQLy",
  "key8": "3LJcudvEehveUe7FUQopHSjah314n4NPfhkMgQSXh8LUHGRiizXMeh55dvMWsYajz8psWXL4VtLYVqjGyx4rbs3o",
  "key9": "2ZzvbDQB2vnQqwxuvoyi8os8FAKHTW2BuWqPbVkHTmxxozv8taSgg2Ljfz48rVC4RJ9LRi8wLCW56dwfdC9RmBFN",
  "key10": "51LvndaQQxqxa5xzdSBy6Ync9bt6E7Q1KjiTg94Lwbf5UAYCW2LMyRHVLQkoFfBN7Unvy6AbXgeoegMuPRAomCtP",
  "key11": "3CR2bdV5ebcEMvhfyiz4nQMAToLi9Q9o6cfiuSvUpNfzRJ2NkYPRJFFwgsAvCaXJc88ZRNGtGaJBBhaSfeihNKiz",
  "key12": "qRfe9VS2QDphEkcLYvZT3txnTqrqr85bvQapPHW9W5mzsqSGFDsFJjxreq5S913Sfzf9pbVUT4uQP3VRrJBes2x",
  "key13": "3qRJMoLp4NM6DivKAmfU59Svx9fNCBEEhZWJ7URry9cx6qm9uifkVQjomp2Q8w6xhbNb11bNtjTRB1xy9GfoM9b4",
  "key14": "4UoY1fwTRPmPAVzQNtzDsuAYma1E1RupfyUpTtdzNGs3wkHtk7zJ3XVTDGAAfasZL8CbgbVogc2mDrboebr8kcp1",
  "key15": "5jeTd1pMMeNfmaktMSSRjWipUYSkxdZ1k1bsDmcd8dQET8PpaL5dwjKFtS99UY3Qi3pQhA89EG9qXfYQgtgraRcX",
  "key16": "3fZZMjs7WEYF7TDH2VHGHkLEkmDzwR68HynT5hKiCzoTsNXchUJbLnDwAFbG4UxCjEEtQmmMFdvRZ3JStjVZiPe8",
  "key17": "2maJZis59D2rzDTL7XzVRuSb1rScrKuetT8z9RWhNmsSUGtw4XwCUtPpNgFuDf7kd1kjPdqwvTpLvRkEub2vkoie",
  "key18": "5TpQKz1ybN3m63h8LuSthzXeWK59VPqv6nLExvEpwo85wK5mt7doHoLEcpm9VX9tdBRtyiHSWcR85GfsD6rFgFYJ",
  "key19": "u2qZJi4LE72MWZS2LGCPtbA7Zv5utG38mjN9Mn7Au7592WfTvS3p2wF3jcEMJ4T4kdvhxWTmQPadkhN2dsLDBPV",
  "key20": "2fJH97wNrmmM6RC7kqZUAgW3JeLafbdEWWXYCU8Qc1S3j4SQVeFPDxavcpKC2yUVfBxSxLuFHRwsvD2HjwoRJKqT",
  "key21": "srC5D185b9TpnXg32nfjHbEtFanM9Eauh7Vvv7517RTvVBgV4XgwvMJcgbxepRE2mMsrCUMgAKBTf6k1wyco9Rw",
  "key22": "3hGYeA57XneNSSQeKUpgiYLE95rhxVvWo3pEmEVmxvWRz37wmbpEVi8ERruUgijoh5cf6UwXefcsLrqJD7UhBgck",
  "key23": "58Qa8sCVo5ikfwWpoYnVUKFxvq3XgTdrm6m9J8fj5SQxcKn1Vxnj286FccbvmLvS8iCUtoTNuvR8kd8Kf8QXHDzi",
  "key24": "4kZmKV5eXEuGUJ4a5TrFLNxMzjDGMaQ9yD2uLSNUFZ2AW6RuUaJsJdCT7i7fk5qvJypL6JcM1WcBurYRpdnBE5Ad",
  "key25": "2ZgkZrPWXHWL7g2zsxzUGsEvDg11HT9Ms5N91cs3c3LRJWTYvaRHDpvcAziwrJGCpQbTpb9ZCG5VRmthemktu9pf",
  "key26": "2Zt9viS7eXYTPuE97nR37FLmwNy6cyhgVyeLYJagedYkt4iUym9wL1nso1PAtAUdLC33ZJDR4SRVw4ZbuJutcSkw",
  "key27": "3fdvL2z6axvyXE7SZmpVmU3zJtrea9QxTUDiS4QmmSTVm9VRom625pfUQDMSf9jAt7CSj4FziemF4aiX5EEGg1DK",
  "key28": "28kiiwjjjvEAq9vPCv4hWyDbEnVae9UMFxoy7MKrwZmqMUa5R4HcQV84gHaxeEFoLTPDBRKMpVoza377VjVtghzC",
  "key29": "2sLqQ12MuwoMWzstArQERqXzjZsDepWPnL3buNcakwQL4zUKsM7RPjKHdJAy5mN6qhjMup6R1dBTjTA6zwsVr97G",
  "key30": "4zVxzHadqXAqfGoq7es5XepJJ2eycmDx1CaxrgPUEufMzSHMUqVrxwLjGhmU4zrpsgU79aDxnbyu5iuiwtquTyZZ",
  "key31": "4g7tNbBet1n9jg9MqSeDsHDJg7hEFGTzu6YvemA7w8EQNGpg5ZNpK2uoUiXBrfVeubfSk7LSE1gDMFdStG2ppm7v",
  "key32": "2BvWGHSTA843wBJDgeFCUFqGqQGt6SZXnxLdcAusCSyfxSV1bFyGDqTseh1osHprg2fG5zUNY4xSBk2bWEMndcgL",
  "key33": "3sTqUgUuEkg8gQVh2jzxdmnW6efiqqgxjG6Sx3e76LovTn59LmSLetMY11N1ShGUhJmDLCAD3HzMgJbBuLSyCeQ3",
  "key34": "5DTN282gbp8SU5Q2ZrR6VonbAvzoN4v5ZsivU4EEKb6nukaDdS4ME7oSDk4spH7Kqwex5YNTfWrWqY8vh6R2cSeK",
  "key35": "RDHYqdqn6xakThZyxyuCeuR1ijoQ7vAssCLK3m6mVa8eso3k1MakQZs9vniKTPAFu4nmgg2PccSEm2H9KYJemCQ",
  "key36": "2QDWHrPy7cnvSRPDWykNmLBS92Ucap9RGYWbQkvtvzTBK5VGCEXtA8HJQk2EbGZCUZU5nmAz1bfT95Eui9diazFz",
  "key37": "5WEYfcG8SxtkZPSXYHArApQkF3DFzqCdgg6eidMtSc7KZcDseD9eJuxXVKYQZefzH3ymAXHkvsJfD3Vz8Y9WQ3v5",
  "key38": "2RLUXcbU9k2eRLY1Nz8AeVkV68fgBigXXKsBN4bMLZzZMCxPkBMyY3V2DzEvsPR1ked8Fa2huRxfW6bvzPwHiVPt",
  "key39": "sfmMoSr11BMW95q2N5ZDLSWNr6essTe5W4q2ZWB8Az9wWm2eHkJv7sddwqwgT2Dv9i4Xshz4ZHaExJR1t6PGFAK",
  "key40": "2uiczNrfCb1J3r2Ntkxkgj95MGmFnUAcSQ7uXGwW7TgeG9MWiF8oURY7qPBMyjkRpq5mWRucmtPacbB7x9agHNzF",
  "key41": "4tDwYFqGphtvAGmncvyWRTNtk6b4dVeG3JUi9TXkw1NMrLzPdE7G51351CHAe3WUgwGMZKEhkWy8tNdEmbqJs5sX",
  "key42": "31Nq6x8mV7gQSJTcTXVzjb1g26vn6yJ5TUUVTUTELDWZ7gxqzKzupqk1mEvB8wKyudQb3zJb9xLGSKoSg3UzQ68Q",
  "key43": "uUTPTkAW2ZssuXAu5RqD6tVcHaQHpZQRqLsVo5jBCoRWb9nK1D2zQjcdnjKoJwdH2EBAbzHpweHRoMwpgJ9mexn",
  "key44": "4ymzKDPe3ZNTasE7VXJN2rVx3fLzxCZSTA5jhrEPzvvF6MQRcQGebfAaEd4cG544Vo8g4FwTAvE77Jhs1kVsz6me"
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
