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
    "44YdVf5cW7fAfJZ2eQnqraXS5RCn5WeX3Z21kbQLF77VpcJPQmzUURAgd3dWds7aTD4zrz1hopkB6AZUbVMFwdpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u6gas4PgCM8RNBh6R8EcYVH77UZMZBnGGv4FYJmx2hRD7Eb9CWi3pf4cSiEhJvPkYbjskhB7SL5NPkgRaRPF6B4",
  "key1": "5bd4KYUQ1j4B7U2kfd5jx9xe62977fhAxX9kFj8Awzrjoe8m8DXBdRgg9sX4Uc5W4yRYqv9Xe2nrusMqH8Vqzfs7",
  "key2": "51vv9xpivppxyEqkfZxvrxR6HQ5cJqa5M2pGg2BvdBzqBJYEDc33ZqFAcXQYMDQ65wgYNaxTZEZGe7h1k7ssQvEA",
  "key3": "6MSdR62Z2fwqLZDaW5v5M4kiD8ru5oAFymLcRRPhYxzYWdfoLULgpCCqyo1LQhuYxPtasay6e55HgvVPhC7yJrg",
  "key4": "4VBeKqqt35LQHnuLzZaJq1gM2CoZ61qJpsovmaukrZuV3kdejHJPwQMjNHoPuEnMrZdv9PtMYkfuN5VFqm8GbFwd",
  "key5": "AYum6bCMUxsaSFir8UXMoNDHhkHknVT1rdhVM6mGv7GvkrVRUPomTPm53rgmhktMV9yRNtu9HDccMmHihCfAcqG",
  "key6": "DA1ch8Fy9idJUVCRmABMRqSA78EvrbXuSXzjtPL2XoT2iXJ6zeNbJcdLGWYHRtDzViCK7TVywLst43LJ9kBQWPR",
  "key7": "5DSVJ7waoqzqRAwJqBq1tBRkg8eihTnhiuhsQVuTE5xJ6aZuEdECAUBLJp87o1LUMfiX5XQsyYJ66L18GwR7GWmH",
  "key8": "5J26BDk6zijoPHCgNyN7i1KXU85Mu6f4aPoBbyZxeJF2FkVfAs9fabtCVphrLUbvbeUApGonMvdnM5cqJfKgNVN3",
  "key9": "4KEstTutAMSEa9XwSMpnCqXk3XnboiDenHXqYFpDLpJi5FUWSr1oHsAfqzqJ7xQRFvyShes2oQzef8ZEjpdCPvsV",
  "key10": "4ChsQkM42Mg4acen5Y9iY3emSogKz2NJbVhTs1JDo7h9b29yNsJsyrzsk9BZH4sLJ44eSyYJGLtypiXfFTVmh8qm",
  "key11": "513ZmkC9VCwMLt6Ep33EKZu9XkTsgCFqbwbhsgAfpzYqnVo3GcrJSTAtu5dfJfw4pGjcKoue1Zj91aEuddfmvNbC",
  "key12": "jJ4k2bqQgNJrCgRvB7kXrZFS7omXuLae1kNJTVsNktHCBqcSuxYVvpXAce8ofTXttKKYeyJdXjhyfTUMz4E1ndC",
  "key13": "Y65rP5e3XsD3KjfXvy2P7wCW1E8aoQ3SQDCLymKFcefA93wHbL6WuUrFTxNaw38vdiSrMbJUmHmrCXBnUhADLg7",
  "key14": "dUPt8FVWHiatPq6mYFHfuzK9iRDMNWFgpQ6wegQjru96rmJbGAJKiaviTFyVSEgETes2syKMJRK92YiGn3ppSbf",
  "key15": "3UT6jCQv4fDE5Ui3Lvhj5RwkanARh4TkyeCp8jwexSGsuULkQwRbamhr2vi7GGxaF7pJMRHnUhbfmKM4ujAJ2URZ",
  "key16": "3FFPBMjxA7XSyhGj6NH3JwG5ajR6ZS8TdrnL7DcG4gxrAkoipfGnDubVFsoDu2AnLhn3WGE4sTbFKKTqzu3hTjQ2",
  "key17": "3UA9yKdGjS2ph4ubENBQREQ3DeAprgg64eHPVKE3x5XVLKEVg7jMhoNwV6GCkz6JohQT7mzSn9hCUeDAcRP19x18",
  "key18": "66WYcHpDLWCVFR9SKoS23geryWFw3yJD4UPe6rANCkN5HG2qXecCaPt1GxBMkwDMh7DX5G9MB7dndBcjFyxgxGKS",
  "key19": "Bn1qodFr2xapoCZ59CmYWra9WKSRngbmc8A3KFZFQaiAnCZAuavA3VFYFueSheJfgzR4PKnwAYQQwYHtQ4XGdsG",
  "key20": "3ALjAPDNNPqXk6adYLvByvmDPnQXVBV4uTMh6ozm4tQuBMGwuDHkUMAAqPVcLj14LpCBVtUJDZeY8YC2FQEQPXqq",
  "key21": "31bqYkq12s1aSjM9WqxUCuMDAtF5Jg4REtrPUsqHmBsirva2VhyjkVZNBAcVodhiT8HpXD7GQcMwjMFvQpZf87YJ",
  "key22": "5oUYBe1RAfv5bgTisGJ8BLtSDspMmtwRYKS4xe26iarMt6JrDJFF5rNj62DSekLMkviGH4W6JdhfohFEgmvDqB92",
  "key23": "4msVRxYk3s5TSjeM4hrumZgW5VADtsRyTMH6TzMjtAeFsjtfXg5qAgnFLEwvxQLfh3AX1zxfBX4xpQx57t6rNX1N",
  "key24": "2nqdALKmGP3cPy6n6QxL3fambczGoy4B5YXGthG8Zv7tHsDhV1SeybqHd2Cc4iQcJBw6wM3Vw7HYtqVbRhFUfRhh",
  "key25": "Si3ELNdHchFwA7SUfAiFkk2LJahSXDQnsF4NMrN4crQDedGjzVgd6gaTwGPsFZK7ouCdoPzotUbxU5aCn4LFbJH",
  "key26": "5moW1iZHwuBKqVPA6GZrkEzE6Lp15NxCBeYJQJr1FJmJZgNhJE9rmmF9UTBgfqNXn77PibC1ax3mZaf9PAk3g4Af",
  "key27": "5uhfikD8QLuZsiztWcheDCoMJ9JAEf7xD4vizeWNKUvQiryv42xDLEcEURVEvHvtqcyYLzemskpzyxbXexnPmuoL",
  "key28": "5cyNXktw5oexqTMsYy2L9sXjwuq6oCamEcnN4579AZ58SVgYzgfvZBLjjSDTFdYivWbxYhVJq6vcW7pxYthbrLEj",
  "key29": "3u5DWj329dXraNXGS5ofSzwoQ8uYhuhuusXu3GeJhQb73GhVQ18ZbUx3ozvPFtvYa3mfE5XjSgXRNup6x3WwsAJE",
  "key30": "2qftMUCWcXtgfyKZWEWwFHiCyMXgY4ES7gS87qb5Mem1Bk6zy1fXxzHDtUS3PDXzrbYrob4Dadkidnbiy8x3y4BR",
  "key31": "6dDdsNc8Ew7iTsX8L6rGrd7xh8UHzokKWtWk3KErsVdBFL44zCrYEBhXFGNy2Ltp174N9s4jqwn6kEGMqfAsaRy",
  "key32": "YkwGYTwfapnB8Udd3TXHahwSNq3wZkh8ixiy2XzMp2GXQWQoyiq9cfrEo6bRq1BWfhwh1js8iSJwgk6mzzcGMN7",
  "key33": "5oK7JgMkg51MQi7nyNZoPDjrqX8XqeQ4d2csUM1k7JdeJVVxWUPp5aGtpU2y1JcbEWcWvtT8rFfiwubGnouNGUYz",
  "key34": "5vTM7RAGdFV9VitYp4gkJQoFm2Z5PpcaLvG2aqEUMnDzb5qSiCMnit8w9zTdjyLs47EGHAjgyagQPTY3uA6aG1yv",
  "key35": "4a6LCsu419BrsxzFrYWEeRT8h7Wuaz7hRCpDTh4AvaWNiymrCY7BHmrTNzsXrg516swLaJYyREE8uQjVbKE7E3Rm",
  "key36": "4jKpHLpZ6mAj4d9GiJ2rpv8kirhmMPUY4bKvswHPBYiGyk3ADFfvpU9R6BnfFny1VesC128C3vHyrt6HMUKcN2d3",
  "key37": "RkHaztkMqrdpqNaomzAvtKQq3Qh8MAfF9tmJP1pFrZ1PET2NkNTcXvie4jdjakeRGfxhHdPKd3CsibPRKiSdavJ",
  "key38": "3TfrYj54MS6dvbWBMiJKCwq2hMSoZXiAYfuzLboXnPWCtNaz4UjZue2fWPzUtbcx2BjPt98PGRbXLwBZeDgijCQr",
  "key39": "45Sat159ckem1Rt8qXN92iERcXW5Qnp6jsfCK4oGkyyCH38t112XHtHfSnxoozvW1shAcvKrfG4sJCQ9M1cH39pM",
  "key40": "2Ju3vmmrXJsQKUQQukNTP5jwXKQWcxmKaLbW6ymqa8TKxU8vy18dMn8arNkbTAH3NFqbqB9Z7h38j57X3jDe5GiZ",
  "key41": "5SWHM6ymGAaduPhM7vvbKWtozQMG16ND3UKdZAS38iL9hfbjXRtAtQ8SxUZ7tvPewvmiYMuo954C8HeAWn9v4yBq",
  "key42": "4sPRBm3NK7z6VrfXEVANNLMCBETCRVpqXiYNKFPN8YZbvhmmEJkCGpcBcT4qDodxJEv27VAz8k4HJcEeMM1dhLjk",
  "key43": "xciSf4gj7SrDJKQMD3Z9gSw2bog1MHyw1ft2FJ8qqTCaG6wQ79VowAcuX9WzKeAsFaiPNLoEJbuvES1bhhowN23",
  "key44": "2mYzXn3577u2veRYcY83CHaa9TJkzPCvmXJfqSC1hyYgg3uCsXBmcr6hbv4YLMVU6SDPNchv3fMC2tezpjpswoxw",
  "key45": "2EPXQyDRpwyd95jN28aapeoNYt9CWMeaUup6mKYyVpQfCJdrDbouVQ9XNEnALbCMDnrUnxQEhCY7dUtPxthU7tY8",
  "key46": "nUiQQxyN9Symb1ZBmQJtXsV9Jc6DDPPgnF3BNwAAcqk5fXJhqDnxMU1xBfbbfy7MywZ3efSmRNGbTTHKcc9U3s3",
  "key47": "2L1UC7Bwt1khJZRuiQWC6vKqzrq6c3ExTUL3YUEqAMQtm6uGgrL9UAEUt9RdJaX3zQhrypUTmoePDcqBhaoQ8Pez",
  "key48": "3jGgbp7vGSY9BtvAtpYmbLPiinM1oZhvwzZ12Qgwi3eH65dVoxRK9LyVzz2PiCfoycKk182wAJBiEjdgchPSyyqm",
  "key49": "39vEZTHC4qX3vQsPSoPocSga9CovU2WNJ52DRgptxhwcQj6cd6gFwJ5PEqJNcXYPJEaNtEjJSnbhiEgmkaiGubuj"
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
