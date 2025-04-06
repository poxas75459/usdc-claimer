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
    "4winEpPbw6h2NNKcAE3WJxcd5394dqS5fzBe15vLJNApR1gsuatLriqqNqitu2YbfRQ3hhQ9Caj8XuafeMa5Xf2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eJa34TWAAFMB8k9Jjagufdu1DcJC8YjhEAqddzFdfjjXYJBhMcVm9W8BjiwMGCaRpqvEgj9DttpnaBSreEGULKe",
  "key1": "B8bAny9CnFLpxeHUCm1P49CSMkqxVGPZmWhfoZ15LDQ9jiukmhFaED6pMkRP69SiFSK2mzu18gaKAiZ4Fd3fPXx",
  "key2": "tzXVgrZek5d5ujNhBREqNqzw8BDbhYbBPzvGrin2f7bDhWp2fuLN93pj4nJHZFS66u7c1PXidpxVBbRsg95gBnW",
  "key3": "2JqMuHymV2PiSEaiAUsFDqjga2Twpq7iYzxKD9rhV5i84EGfyvxbNWLw7HT3sL2HHQqfDDLLtwggXG5bt5ETcwia",
  "key4": "awLGHgsq3ULrUi2JMKSgZfUvLijkrjpbYv9gE1vwsHYHSRHcWiRymhxHUBFCqCBcS5E6UbSt1T64KT36wj3Cdfm",
  "key5": "52hvmXHzi6xFKNqXZwCNwHNFetnAfzTu5s2q8v5J9UgUPC5NpkrbbmzNe23bNAJYMtKKtRdKzYsoGE1wUUuN1XAf",
  "key6": "4i3VgMADDuCnvJRarcdZ5WUBoY5edH8d5MSaksrXbfnboE7fC8DLDJyxJtDKmwS8oE67FvMoi6iEa6yf72RDny46",
  "key7": "3ZSKVaP67SfG9eMSPgGSjjNe1rPHbpjk1oKZzmxwHRFvrtwJWgwCsfJb3GPiMdCxSFsHuCEKUyjemB1fVuC8XcT8",
  "key8": "2fPsXkRsr4gv1sY5yXzYGSiFwPZcN3yC8KXViJgqqx4hxdCNp8Ayp8c8bQjkY28PM3uGLqCKAGgWpNiwcjbjiyez",
  "key9": "2dgfXKoJTfVTUGEyWhVkGHBDtMbCVoAPh9QiMPepNzPcHnN1xAdyaxAiPNk5EVR6EgG1uZVXEeoVXv16rMcUZCPG",
  "key10": "3c1VUmvw3aTxyw7uJStX6K1ytrLqNEGMFBg94dTqXFmQvmhXh59r3eMhsxefhWLhQcDmEB8LFBHwzFCvJngRNj6A",
  "key11": "63AyvMXfZhiVj7jPy2G6t21pHuzpzDQ7LVcxB3nDVsFyU9kryNE8UvfQ1M4ztWW31Yi6snWdXEzoz8PipZKZwRaD",
  "key12": "V3KiaimNo9QVGRaau6Lk3Wgf9VLtgufBzVUDvGVD225gQMaZZfSaCeRwtxqhvAugBQRRNK2UJvtqLdpuUrKTRuw",
  "key13": "64YRhpqxv928NbUXNnZX3vqNrQuCTG7peHNcr96doHecvfrCLFUY3GopQEdjEiqswW9x9vFYdjedbRDVHvYpdyfD",
  "key14": "A5WigVbahZcjsxBL6JQhRKt5Y7L7d1DJSsFeHP3pUbMGoqaNdTB9hJRsFwrPqiREmRzQAwGPAvVst8uMdQdRyUz",
  "key15": "qCMGLvPPrwMpQnVMQJ5bfS1zezuxE7caXbm3viPpjN2CbctTd947S2eWjQP6XxzPResjvQNu7Y4KYsMh48Dhk8g",
  "key16": "4eTrLFiUpzwNvA4vG1tx6VStYoLe1bWfwyNrbh24pja3TWh7J6rEXYZzDDMT1WZQoM8CeYxyaei7awLi7KyLqEsu",
  "key17": "4qgo5azkYMvRn9edKUzabr6CnpqpCrUrmWpn6G4NnvAfTQJP6MLxG4bAjdDcfp5DQtAcDCU9Pc8tKF1Hk4ZwdWep",
  "key18": "5hZdDwEMNLV7FK2Ychx4gc3tD4owcERL8RkPaW5H5jvgWXYakra4PvZPGLGgwBWq9z6gTChWvbVWtM7RzFQHRiLf",
  "key19": "3R5tJrqWCqD5uy5QftYCGJDQTKitzp5xktvbCQG3bwxrjFKyw9MHtNZbVfWauRc4x8efsS5sG7w5Cii7f73W8Jdi",
  "key20": "FkSRtjdLujAPZw7H8ZokbSEQWSKqqxeLgAjNSModehX3U8E4xgbgHBXErz6AwwMkxhFKddPKjveZWgy6YqjZTUS",
  "key21": "2HGs8G7hBPc63hogjYx4rpdDchjz7DzWaEGX1wQkq4We4iDbcn2fvZk7iRBvSg2L45PHDGkdqRMC1gLXCLMpRAU9",
  "key22": "4BWYdfdFyyNaDumNdEh5UGakBu9pipSdHkRUow6iknCtkodTxsh7ZikVxsa8BcjD7h4beMTdGWLuzJqB23f7kYmZ",
  "key23": "4fYBVhsv51VSy9Ztm6FjvL3jHdKNuZGsxVi7Y6m1rivQyiuWfDxQVXYzM1uxNrXtw1xKYHMuUqysURsDrjYZcx2X",
  "key24": "2gtM5dYXA7Ni3gVKBQnnHUaF5zRRkEMFUvAbDFiFXfFhBmPevqnCcS7jVxiHG8mB59mKWfgWSdwsnytavt3PFfUy",
  "key25": "TzAuHsH9SbNvkWWgumkrPDbvm9dTcZMsmHfipRZ3HnGowohPpjCGZsGgGjiu6adzpoF2EP1hfh7w9P3ZDjP3L5Z",
  "key26": "5qBoemK2ymB1P9zwC88tuj5GjYRFstkqb9YxdsZyowxrgKAFzS7zbmYT41e8X3PrPCZEEeCdzJNBhNtwBGY2uCus",
  "key27": "nfE5PHRD8LrRhZNkTGJeiwCkWehkZtYPSp8RXZsu784Qf5cq44pgDcu9BFk2KjKxPKKYniaHtLD3yzL8unLnU6T",
  "key28": "4DitB5S77emcyr9RCgXBYs7vDUGGcLJqMh7qtmxccUudMrbXYCJH2u4rVdZoQ2sV3xmZr542XVMpFVtHsjc8z8zY",
  "key29": "5r1iK7gtLyMJZAwTx9Mp6yNyJMcUj9u1v3igAjd5sNgX6XC4t9F5ixxtKJktDPczBfBE61esULTSARXFAC8S988e",
  "key30": "4m7wQpyeJruoS47BZj5ByyqScMhhVFDAG6AgNoy3dCyGyD8wJrVvSftDCxPS1iPQSvLB6nPs7osGt1gAZQ9rM2Ke",
  "key31": "HoUh5YtqXe6nrLyi69ibgR9icZVC7EP4MGuSCQ3RPMnomES3QtH8cQoazBuvj8KmDBrttpVCakMYxYewGi77gDJ",
  "key32": "4vW4AgJevjEKpUVL5nswYprkVuf7Mafi8ZEinmvLM9H5YuFGoQJUP7U3dVEwASr6vfjGrjkvXQE5Q8zNUhfVnPbR",
  "key33": "D6LmWuT85ax6r7yEZcjnYgFZN44zd2mpWdFV4WXrx8J2hmVqFX1FZy5MjBf4Ncn5d3M2TipKCZgzNa7Wi8QsMMd",
  "key34": "41qwD4Vm7P8cdJoHBuvt8BH42LWpZ67xDXzwy6qyziPM9ZB8WEFHcSmqjacwJzyWzmKC2VVKH645Hc3JHWmiz3tV",
  "key35": "2V1bU86zQGS3XZMHCfcRSwsnoae7EgWHpJAiva1NkFWzuFfwbTzG9ew1sNqZGtnMRPJayXgLnewC6xir2rAw3Stx",
  "key36": "4AdT31hbvyPnep1Wjd5mTsQpYuq7KDyRagpQZe28XkZpREhAiZBs9kanFQyryVLUYVCDA7XUwYtkzxYwbDFzQNBK",
  "key37": "5uGbMtu8pgHgyVwoqv17RQvU4M9A76KoNHughDD6uYXtzdPWtWb7SDX4vkn7B5csPjaAbVChvZo82RndSAbUx2WM",
  "key38": "36VcxUBVNXAKcuiB1FQGZD1tqZJdQk3KR4K8oyXKYVHNPHy4RAztLiafHv2n8gdzzUkCPi9fdMdbKkb1AR2GJSZQ",
  "key39": "39Rg5TrzNaUi2Xs8asLA9HxQsw3Cd7c3MictbHfJL7uiipxDSkHJmZhjRQa1RLKGmqP2AREHKycsNLPooHK4gLcQ",
  "key40": "27WMkB6iPk9j1kRFx9SpFMm5DgF4GVumxGVfbyWs1mm3NAiEtW36QN88p8aXMRPEkJh7SyDwr5rX7g9aqyZMZUzg",
  "key41": "4j9NqAL6wF9eixe5Q4vnRXae2ifSAcExunKFG8dbe38zDBuyQQrsS3TAbJsDKeEj8AXYgH6VA6kxRveAuBwjpMok",
  "key42": "3QLYXoVYxUN8EM37XzKgy1UiDrLUhg9dHxzjjRYkSmPTCvnX26TXNi7X3uR4ucgjvnoA2FiMeC2LVeLJUmqpmooi"
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
