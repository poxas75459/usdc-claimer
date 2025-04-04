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
    "3AtWb6QEwYh8u2aK3RiEY4GiNMRHkSKy1DvAqpdEHAeTgnJvMHCL3HPgMSs4qrLuf3MfpfDmBzpBGZheHTiUZ7ZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lutt7ha7n4rgY6d6LNBdejHoWrkqciWswdRRAivwNjC8Pf2vPCA6L6iryE2p7CZ1kR27cCszt7g7tSDTdjzyhW",
  "key1": "4hPoPWwGFQDjcChqGvNPdcPPQPBtBDn8fH9ciURpf1XLEsMAqTHka4KhjxFLgu9495sHcBpnkn3XXn8T34xwduA8",
  "key2": "4Qhh2BdHdeLXmgYRUzbGxsc8oSmZDo8PK8yEdUwzaT6yUic4Dgsi4LuMsF7SzG2QWDmqKEHKi5YKBfS3uho8GL6X",
  "key3": "61BYTb6cz69MVWmwdCs7fssaDyW7ixqVtnPiRtDTBzJxSFdaCSATCU2faAi2hzKy77PBrm1M4XX1t8b5EmMZ2EoD",
  "key4": "56aTHn9LXUQhdPEc3kwZoHGgNADj69udkBbMbyYtL3UmFjKfk6JaR2gP9xfs1BAm4vNmB8xAbvgxNxVayBfxq65K",
  "key5": "5zkMpxgszH8aa4CFoFLDSBUdPydbszHhMk52Sohx58eBQEVSazHANL55Jy5xneQNM27E2X7bU9Nwo4JWm4mpE59K",
  "key6": "2nCiWfHxQGMzHkudLJRNbzPo9gQGpcSU7zVCrZZPxBTwV3zWkAU1GNWhnx4CwXduPYvJNrBSSj9SRMWYX3dY3ioL",
  "key7": "3mkH48DuhKGBsAkSvVRq66DzT1CrJqKhxAbrm6R1Hq3DYic7qsuj7xeWs8Pt1625jqrCmGXpMg9zxbhqkbtAhmwx",
  "key8": "5XCsn5yNFpYQYKEK8mC7x4JCUjxxWw4pBSzXqbP6rBzFaGaxUHVwodyXzRcAvs7NvcUNs7pFo3L7fDneBSW7UTAV",
  "key9": "2p6SKReVQtBSmpsc5bqBNs4tUuAVxDtiGycXYeyhA1Z9AS5tenNA2rwHMLaboZgfT6oDDDmLMe8rh2v1dr72UtxM",
  "key10": "2FsMu9VN5d2cMkaKNBWSs6yWPfqGTHo6tyo8tWEgjkZz6k8jNm2qSibSosAW57nsQpjk3qJ5RgmXzmzJT22ycaiP",
  "key11": "4KdjVmuF62ZgJiu6RwmzPpVQZrs6RfPv22he2UiWAcjCSmsaQPSyqrHay9YAmS3EB29DvRUaXbUje4kWcV4XyFjC",
  "key12": "ZvjzBadHb1RSwyy2DYeiPwySoD4LS2Gwy3rX9QRDeucznaScosXj9Nxm27pFvr94YQjNMvmf1pgRo7tAi43z2si",
  "key13": "63BxLweJnqsZxnVczqKHRwo8fEtChmGqLxpTPD1Qg2jqsqgjH8z2qcpw8ifYa45DwsxpLHzmkEZGKCQtAswC9cep",
  "key14": "3S3QVp1ZaGVAhZ6KwT6jMopttDG2ExqycuSg282L1jJwD7nsPi3kWVogMXXiVNeNMLgxqqecGXf8GaqrT5EiC1Yb",
  "key15": "A8iLcA1RuUiTnkpfhECF2Gri7oXKUkgmkQ3NGj3PFz8iHTAsVEDc2Q2v7WqJE18rXfqs3M464tvdBfrvPA51e78",
  "key16": "ywuoE1KTUSXuCmHJTgV5X2281TxP7rf4xTBtvoP9hWnMWbK4wgW8xMrAW8T1GZfydfRHHmPM4GM2KkhDRiKQEeC",
  "key17": "35qn8V8ZPdf5kKGY2dS4U4oqS8iJ8k6H5sEazosiovAS3vsbhPwL3x34da6RosEQBz8JSnBjuzRjVeyJTPQ72Rk9",
  "key18": "4jd1MDRTipp6PpGtoVyicsYCPpn97dSyJoKA757KotVzUuR3Kujq4fJDMvNeiDyrEyn1vfiyiCC4eoprrBZNguQw",
  "key19": "4f6CLPUpAMpyPnjVgqJSR2waz61G77gUdnVLohHMiRYnezdkxWh1sC4G4K88HjZigQrwzhiWhLyTmtzN6mTCar97",
  "key20": "23ebgc9vfBUgMyLczaBEmwmU4iJ8f4CPgFiGJ5mqwrXVoCpqKQ5cLaHpuHvSfaRaLCiCEn5jWPsbMNyPREaURdHf",
  "key21": "NeFm2J7g9PkCN8xReoo5BC5CBGsKx6PFnvP2qq1uydoTQANu462UhhEVbZ1JAgt8g2KmtUDfa2Phx696mCYRLhr",
  "key22": "4hNYdUWdaHsYP5vShgGcrps2Zwtne9KJZhjHKq2zV4CASfyPiyPDK4WJ75sjqJ6szT7q2vpyH1J71ek65kxum2c4",
  "key23": "2qz1rQJu1tTkmic8fe2dnuaop31Fa3TS7vjHgxDo53rYaHXgpQbUdLkTBFDvRCHRmH4AHHEnG1DMSwow1AoJuZnC",
  "key24": "3n9hF3YvqtRiSYkDCXsYgL2TCtSxwdAtRB5MafH9AtEqoamcLnivGxfHyfWywmKf7FKuzRzS969trh4wRVXjse6G",
  "key25": "2tGrFHsFqo86gjWZ8d8B5QQSmTgndbatw4Na3GhEZHEMDVjnfe3GaLuGQDnwUv2Ai2ZviP8sWM7nj9HN39s6EeE8",
  "key26": "55mm1mL51zy6kmJuMpN2uAYAu7eqhqr3hPjtZZot87G6ntHrqy5g7vKgBxk4iBYQnYFT9h12LpjaZvJ2BgxETWkZ",
  "key27": "4F48UmQwfRFmXRPwDu1gDGNUZwTE4r3uZqFeCKGSEFGmZynfjnfv9bXJMXnyxHJMyQX7ft4SdYHUD78zGDWc76hA",
  "key28": "DDevkfCSKr5DmSoXEFG6NhqrWkLgT7o6y9EWCpSDuXPtjAvxPSGqkcRKVNQPa7mcXpzQwEeBzd7XsnYmWpqqKVw",
  "key29": "3v6phCrufKAx7tSnr3JstbWocgJ3AjNF4PfmC7L4Jc2rnUJ6kYbtToZZW6sqmFm12Lt1RtBaX7h3cSqGD4XdCCoW",
  "key30": "5TuDypC3WpeiHKwdDpUfNFra49LUyB6QVTVHwr4N5MACwyvsEbE1SwGkHKpdiXiHuEQ13P8iAdMiB9ZPJStXV8DT",
  "key31": "yR7rDcewVkK6XCzLkji4Wnsceyza4tYYJNM1VwHSGJqnb4uvhU6WhdJsqW1e1KTaB7J7wzMPhsHZjFeFER5WYXH",
  "key32": "SCt83u39J5Z63E8YtUzamCHexzrcV346NhPExY4t9m5FoyfZq7QWGBhhF8uWYb6tTt5r5n2NR4SA2eP3tD9u9nW",
  "key33": "4eui6ux4gwVw65SetTqG3d3FPhxFPnUkE2P7LVdzZZ8CPdaeBE5awWtG2iJaw5zXF3J5x13hW7Qf6RPtwAGkNMZw",
  "key34": "3mtW1i3YDvgLGRRYDXUwdGQasBML896xfg7fEzRrMqcHncUde38KuF9yZAcT3dpGBvq2UqW6dPKKDv56npemddC9",
  "key35": "5vm8nBB7MnG3zGRgA4ENbddBiVDGvuFooANTQed2hBnjJgeqYSNRQemsDipUwTniLRAVMctFeudys8X6geKnfTaC",
  "key36": "4jhw9aFwcFMRiCbA8Xh3UfqJxsqRBG4ruNAhesuYRswkLYfbb7pRSJjdyrTs5GCoq4Ua8S2i5xZTH7PQpMD2R8r9",
  "key37": "5Do2dq8G2TyGTian7qDhaaN7RyaLQLKaJ6zQsgE44hMq1vsgBnFyCWrk5EcsqkEzdFn35BxpErWi4oyYDw4cFW9j",
  "key38": "2dy6gRd1RAHkHb3JtVBAeGiH86FUwffY5Np2ZUbqmL6ne1gbC2Vb8EZeJGEnQ5Xa5YRZDXNT7CrCg2pWyZSwdwEG",
  "key39": "4XcHu6B58jaQAnogh3B6HcbLyhVwm7VdrjsH6HsmeTUn8NbC5QHWPe6mGvFYezCUaPMaaLUE5ekPKPR5CQ9q7s4L",
  "key40": "3aYQeBboR3VuWaGfH5HPxHACHvZ5qXBqWunitJgqNjwBTXvxxGJUq2fdJE874pWAawYSGcTEEgZ5t1YKbE3TjRGQ",
  "key41": "2Hftxyz7AdhrJamfxPZGTCjnN7v5WBykNoA5rnUf2ytfchTmqhmyFuXEnEHHN7CCChPSrFEADzNH17WuB7dsvJN7",
  "key42": "23yDapgDJmKurXFnEGcoBWkPekM549hBBfkwbF3A4VsrwBCYELZ2Ri1qrdetpFNjpv7wZi18P97D5oPTL2NNc1JD"
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
