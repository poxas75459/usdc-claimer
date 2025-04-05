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
    "29gVkF6Lt5nrjUnsbzWAx73YvukehYpzSRkoM6L8Bn9Q97crbSfdJkU3hnCceF6ZoEfF233fccoBCRr2Dm5Engo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qGPBoeu9vFNM2PX1wFzkSiwruwDWhTAAeD9RKW1vGwKRhN4ELLTZuZrvuoZbiCqRmrCxUYWGJ5WwFh8jiJWFYnd",
  "key1": "2Vj9Sb2iaEJ7eectuKAXvK3oTKRwu3M1x3aYNYquMoJD3M5opzLvZrC9kHsEUHWNiALfCsNJxFHicCbgM6gtxoyd",
  "key2": "3Ji33pL5fpR4rgn3x2dLr9H8RPK7bfJxaovuggxQ9E69m7RxFKpPtJXfhCunXgFrtXW8Prku6z9dJFGtWpeZ27be",
  "key3": "4s1Wba8K5chJmG4T87M7TP9AYhMWGPU6V8EWqiUkDAf2yhS5E3fd5nPR3sNz6U1EEqjGYqzHFtmWeD65mjaVLxDw",
  "key4": "4BUiNYmUWAVpm8mhuV68ubByPCafzdL1qo4wnNYim9pmPyPo7iBYn4Ru9CR3wGvZCdgHQ8XLRvNNZnRvCX4cP7hZ",
  "key5": "49zsVCboArthyipauXKukUPqWEv6GobFjgYVMeCBt5oMDxRmNRr52ejnp6kcwan3GQznKP2YE2TGX5o9MqokhtVF",
  "key6": "4tD6dDDFCDk2euCoXSN7d9WXNv7UYCa3ENDyYV7Nke6KnYo19G5JGvbSBEGs1Us1kVW6YuCfdP6ovbtk353HS7rp",
  "key7": "3iFe99N2upkfyZLjeyydLFYV9Fd8v2VYByFT5cZ2SY2R8CR6LaMHtxTvYGBRJgndzy2yxvVVLcr6eWmiwY3qbrPk",
  "key8": "4QimVJvHDWf9CKT1LqrJUZKyt15fWXpvdw5TsL5mhC9aBHLBFKy6DEWRcLm4bDwT3PYASGfyBqVRMydjQAVBbt8n",
  "key9": "LoYXHBurHNYe4M4Hv3sfA2zYqGAVoishcdxm2N15uqJeXwP7fh3daPwstQoYsKQsxvyHqoFWpuAdLK17NJuDmQy",
  "key10": "5KXjJAX35kcNriswbA9pP5cokAUeqWHFQHME3ZPrtK7KUfh2gpk67JJ6SAR6pvr9S2tUydBqiP5RrLof8q6HeqsT",
  "key11": "45ndJGZ7b3oCMCSuoHmN6NTAGXWPDjmB3yhkYp1titTD63hkNGaHBRfrt3a8QF7dwiYDMVsA8meySGHk9WNawLVm",
  "key12": "5jG8iK6GJmTeRtc1HTGacsDEEp4z9zHmiMG1AfowDJxekfnQS1YtVj2EnGmFGXPibyTWe5o4CpF1ipM5Rp7mV5Pq",
  "key13": "3VpVJB7qBaiYadfwHJCqtKUPTVs6RoNhHG9SehQBi1dg2K17zFd3a5GfkM8P64sjS13NUHckZnDMzC5CXb3i2nh8",
  "key14": "CK8pfWNX5A2P3wJZWmA4aBUYCRtkAFUGwPfkQXPqdCNqJwZG2negQd8bxKN64iZWyAvf4ysu5U6vsMLo5V8hoyy",
  "key15": "3f4Yxe5hK4hy1FTgmniKWVvunANfwjGyghwiW1rGqM6426hD5F7QkbekYEGHjUK3RFaygLwbDgsjSH5AgmFvazD2",
  "key16": "4QPUgvDRhT5ja3Hgee3raB442DXVEyYD2PxqnLGfJc4tmoLkDCpQ2gXKyo7X9rJfoG1KeAnkzSQLuSFGKyDwQjfU",
  "key17": "58DfFeAxbXobNyjkRgErQwTkZtHtFbmbbvUsNgu5dezAP26QUnuRH3D2zqQ8mh1jBZy2qmGjx8T6fnGcwtN2Xv4s",
  "key18": "3aT8cjh7qzZo6woXY6igg3bLHguJCk3R17q9ZkpbPUCUzZ3mXv3nVKUCPsJ2DmWdAzc5WSxwTA4DmuEYSTFNCctB",
  "key19": "4hBnjNpvsVF3HJ636x5USTTFCvU1kuGVyWnpZMsCvcnRYPuFNFRgLZbeUpdAgREuTP5DW1ZuaT1G63gfd6JiyeTg",
  "key20": "3LEW56spyzhcuELeZaarMFx23HEBrs4s18iMHWUSWBCYbzgHdEMptZ9HhcGUyEsmRBU4WdJsZak5PxcvLaEAV5Xc",
  "key21": "2CFqQuNhAMwZq3VNsfBDNCV9kdkz6RqhxnwHufyBrQ2u3yR2cmJSfhxobykBhrtDtFRrvLtQxFFf5kRSkweUXPSj",
  "key22": "3yZDdWca92qZNwQR1N3Hdh5jSDFzS1mWUqDihFdp9zPDh9wmvKsTYbBKFeKqunUuw6PJLR8dBcmvHoyRtFqi4krE",
  "key23": "BPkJVPLKvefASGyWAhNCsRswKQ1uo54tAkPvj3mVTyekHJC4WJJAKiETuvSRB5bbKeixF874VMXZd2AGq62wbLv",
  "key24": "48oco3YjB8NvYyC4a6c5R3dShuKAZgKNfQf1Rn5zZjEp45yuhBX78TAbWkBYXhC8UJtT5BbBpD1AzfyasLr8WRLy",
  "key25": "2BvxiRP73xEzw5QrdEhVPmoghoJZjigmuAnVHNzR68x1ZK9T5eCPdwVrjstcRjVQsmSapg4yRrMfogJNE83eDoQj",
  "key26": "36NiGQykYdLkbVG6f93b8tyZK6XmtjSQ8SafJZxifitREgtY5kZVRAw2HhBLz747SSB8M8GKECNZKyGuHaa4UeV4",
  "key27": "2fN4DPe8R5ycSeykF5NazJyJgMZW51YEf4KG28qttQyec84an1W5zca5Whq7JcmB1W5NEs2inXdEDX3VXCE1s5QH",
  "key28": "4ht9YMjbjK8oHNFWgB53axgMe6C3cr2FQDpPTo4EUCsj23CD1dAJSPwkuaqQRhp2VYZTDV9risE8G7pnzLi51B53",
  "key29": "5bJfg9far9pWjU2pppqyt55U268dndcv9CPmBSZeDfsKpj8bENReNr6fxwi1c4RKzXCPooe9Gf7JpM4Gy2fyttYj",
  "key30": "3AMqEKgedAoA12tkNfQTv3Pi6HFjmNFQwpjFfcjtkkoRuVHhgW2o6JHndktu9TLfy4MbN6SwVo1MGGWunibuo8rB",
  "key31": "28eA1sDWP7FcpVqD38F6MDFjdm7Z4Tn9FUQgZC5M9t3nVAozanx2NdoGwV4qSSjYYdniSX5uw96gcwzZN2BQkp4u",
  "key32": "2tTYLMc4uBbpMXYso8tGNJLThEFPxfaibT9DKvC8YCUAQQzkBeGtavPeh5f11FcSzn9TMhr7yVLyMXKHxmiSPZQC",
  "key33": "5Jf8p3HvqPcUc8jnJt2XYKACt4Z364FRi4aFf4vitk5qmJGRx6MM4H4Zg9vsEaciGoieYS9RpuyJdmDr9zS2LZps",
  "key34": "2bzZtG13qyt7X2n6kgF7hkw32B6tcD6H3yyBtyPjL9cWzMvDhcPwpErHU9EXaq1yfEnmff7cYcjb7d5b7CbyNzW6",
  "key35": "297STgrHUEwYK5aMK3upV5stZGL6beDsBKmXodqMWjUvje7rqQ1an9fcTyq1AnT7qB227p78ScZpi6jAoPDyRdug",
  "key36": "3v6WvaSv7jBTcvfmkjpYZ8o1ikRLPrBWEovkuLf4iCrVS3mHch2gHoposbvFttMv9WCcPB6ocVnir62vTBjex31z",
  "key37": "5WxazjeYHm6FcbkfhiMTKm4ZmYRQt9dmfhoiTzivKNJ3srujVmiGiPc9qcQBf51fSe6wwuaJympXv5bbdJgo4SNf",
  "key38": "TBnCiaaSxVhicEg5cgse15NJtJ9VTgbB1TfRsEqYsuCJ7QWnUU7LKurT4oE17toLFKtRQaqU6RdxMbuaVppSS8m"
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
