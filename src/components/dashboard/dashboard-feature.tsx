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
    "2CiASGtd9kADA9mKCFrforBjKc8whj47ki68Kw1HnNyR23fbkoJzhPXTfXNJ77LbCXPVy13QTud5rz4g1GANxpGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J2UigWuADW8yhhCZNoQGpfJ2vV4WaTGEuWy5hK6jw1MvqJocH2iJurLPK8cpqe48CTzsFi8wvxmdhTNNQKJP2oB",
  "key1": "vabE4vMBCyUUVd9GLtPcFCtzEcqmaj6xVYzeBAbM1FB1oiKVqCsNKESM8VTn1r6LkVPRwmfsfbPb16urYht5Rkg",
  "key2": "5GFJjSv2q5CLfUhPxmCf9gQpEhjYkgDr8AecFX4WcRNqzuubENGSoJ1XUJQDwuMtVJed83yueeAMh1j93YkVL5rU",
  "key3": "22pR31XnUZenrcP6qHZfK7NTSpAw4n9rmhgyzwK2foQ4gQo4SecPZaPxm3kQofPatPCysD9wCqonS1C2YW9pAeVW",
  "key4": "48qZHVmF9sjhoTkJAAHkFuYHyGoBqGMoGtCseYAauH22X7xdyA3yJw9jahtLivksRW24jG57ZP2SgWnz9udXYZzJ",
  "key5": "4R9cTat8szEb8aRsLe1Za7WXLqH9G8AMF4Hgtj3rjm7RA3eeC6TQkNDn1K2HxXYjoJjXPjEkB6xZAPhuVX5pzhq8",
  "key6": "4PsGqU9YfkzKN4MPD6zpdUuAEuVVrinwsXFtRHGAF2aJmPmHUDTJRovwQ8PJv5PSw4arTg1a9D8vKcxFJLCSaS5p",
  "key7": "5uhv5XNG6vHqCDRWXM2fQUGMzTtEPZDu429dUw84XM9kYgYrxkwGZHwdGJdGRauRGWCZGec6fVCenMiW2b54pdZG",
  "key8": "2dC3uZrykQmKbcAvHUqwDSDxQd1hcwWBS14YxD5hnFSABUZkKQE5ij7QorG4zPm83N3kCY3aUbkZMW3TH8RXdH5V",
  "key9": "5osTuTDSB5cFxcfJ2oNNVeaHkx69MRybaNgSQDmBrBzs9oQdpiLsXQRQ7gXJt5mrAvv5jRe6DeWnQqBM22JVveCf",
  "key10": "3uV2FN1jHbanm3P14pZLhkwdJwaJPd8DdTU3NxEaxGsvXqmD27ViARfQ1NUFYsyjePUcaLtNJwyovSmEeFfcdpTt",
  "key11": "2j2KJLbPBCt1XN5PAfnUn6o4hDrqccLddk9cLrPUKwS3ZkKLWHdLKWduG6uMpaoBccVvERTrax2u4sW6AMrxeDnN",
  "key12": "SSNBzEMRPDPbDT3TN7cyeW1QcwgYxJf7zMkF3tBpgXo6848hvWpuKrpoyVb4MwYCdcmF3aSdSMQ3TNTcHUr2JiG",
  "key13": "3Z9H2pShNiMMGA9opKNnQLw9LnP7vtYs8GnvMGGcb9PtghNfpYXGdNMGHUpKuRDdscUP9ijcEAEz5pu5oGFHdavY",
  "key14": "3QjDwqwcwAktdti2bZBubq4SczwXUNLZoNaFT3F5mgXWvm3WXZQPk2Rp36EiszvsVEMaFEjAADAMK9vUY1hpoqZz",
  "key15": "3GnyweYvAhRmEciu3L5v3YsRQocfZBrCQnkUPcf7A3SBerh1R7C7JVnHfDWRs1ipMy7rzTXkYt6jEYhMs3cqPUxz",
  "key16": "WeM7nrNJ4Bq9U6FHDVZkU17QpJaRB4WAXUKSZH26BsS7uvMb6sBBiV46aqxNn1rwA5amJF3NBVuG1fWhESar3UF",
  "key17": "3NrFvnEw1anZTUDoRqnjZ1EGEoJqy297Voo18jX5DPjHJAFKRfU8QU1kkZNQxGaSd1148EegDdjLNWGz2xLNPYYz",
  "key18": "412AzZYZmN54kut9ZLMK3sXLxoH2jhyRVt45mm4x2XyHbd2wwdwRQz4Vwgzc9bCmCeS9JCeSiSmXtskKwvx2iJmL",
  "key19": "566EHuJXi2QmzJ4s8vXfBMHPY58CnRJ2situhvJfNbKqWo2YGsgUAAHkvWNQeprDkyo6ZaGBenZ97p7AxKTuP688",
  "key20": "3qoJ9NW2i99kgNt9rWMe7ZJ5kH5zNKGauxJqNJJ2fLp5LwmLKKknAR17q1AAGUYh5VQvzivt1RYjuB42ukGiaYq3",
  "key21": "3pXsFfq5CfjZhiucsUuPPpFDf4H365m5Z4dfzL38prpeW6WJ7RiBBB1WMkJZXhhfRrehHfkuNVw6Uu759xzy2dHw",
  "key22": "3LTVGXggAjUZbUKGAdNwhKSMQoKNNrv6BBhcLMeU1BwNnfyxTTx4Bn4CSDjEBUneZvPco1hCqcWb9g32e3GKMXeL",
  "key23": "2MVRKLkG73Uswfquv7SJ7VG5a7XTRLvRnygqZPCvbziGh4ve7YcRbt3YkKuKQeAKVzLVZebdTNh7jiYR5x86nkMR",
  "key24": "54B9T9gCpvy1wPuAQLHiNrDwUrFkbuicjQke4Sp9XQM9PYba8Xaw51tMMQaruwqZxgs1v5859yVwEHUshAtybKWS",
  "key25": "6x49PKzFiAvag3zYe4WxdYBciXTmLpaNyCNivPYhtw9mYgtmptqiBxt37ZmdR6twnVz1Vwed6bcETE8gMpJ9GqK",
  "key26": "4QcF8FbgcuTNc8f8Ftss2csoz5J8wfk9NUJpCzWJMerhG4BvWvHcaXxaoXaAvVkZdAoio51V6bom2imxjAHkkKRC",
  "key27": "64NsXjSpmR68LtJxn92Bj4rQVAegDDkb5bWbfUcnDj9BYDivy75GR5ZuRbRhFcWSmLFL52t883tyT1xqaJmxaV2C",
  "key28": "LWvqdLhefvaskMeKCMaiUiTmUVM3WZZ9UtC51o53PyJJiMYBWaCypjsd8pK3S2Wzm7vbPbqKDwQ6qtsdGXt6AhR",
  "key29": "EEnYXtf5S4k1tpSM1LLfv6oMiRbSAQWQZDZwMbBFM2tzKEC41Ned3jqvLsJ5TJthjaE1meUH82bR9M6mZRnaCN9",
  "key30": "4GShdb2GdqwvTj16DyTEtMboHcoPbRr5Z2uN44RK9FLV5mqcrWP9SLzSC6Vy1eCyJEnnf7uhXnBNXPgTtW15qL2G",
  "key31": "4y8MKZ2tqpzumBk5UkzfJYz8zu6JYs664yNmnXe3MHMAzfV7idiHPNjWZQz1Kw8BtTcXdVjLgZhpCVQPtvF5njuJ",
  "key32": "A74TK1sXyTWJonhjn552C3mdW8uoF4UYSF6d4h5in1jL4y26dQxmCoe1X3jCnXcXaf3hefGv8LFDyK2Gfn9DU7p",
  "key33": "epFknRK6fXMRrJXbdu5PU5XoFbTDvSVED9Anspmb42eoqyxGiSPKHabicvCADbF2XR6iJdB2KbmHoGZkZM9hzaj",
  "key34": "wZMsvKsUCjKRvctxx6QrtWagbSYkz2zxkvnEJXFUK28BzkXF1aNLkrC542v7CL2yhm1NpnAvdMfb3FXQufUi1Xt",
  "key35": "MYLh4dFByqWAxWnapKYFFsV1NHZF8Eg3trLJkaCfeRE5ikFEDxFjLT8hyvbQGnGRTZKvwMYT3J6yToV79DPovLE",
  "key36": "3SE3oafgYkVMrdoZCK4Ze6QTB6EmwWSJSk4szRnjUSenGJnJXLFgVCcaoXVKzRdk3RvWkXbsJKVhUfS8SDRBpPUj",
  "key37": "a3DDgdnH6XK3cmhF5wDxoo8YjiMvm1BnJooZM3QQNKQK5KwwLzh2BGeRb65NXtPyGZMgTqmE3wbLrtpdiDG9UAx",
  "key38": "2zYEBSn4Wo2xdJZcUMNQgVDzJpmCe39N57QoqW9baADRFM9kJMnoC5WNBg6vtVSUAMSTjAvVQW73KC6MwNciiKuX",
  "key39": "59gEmmnLkHQN6KNVgKCb5ac17jcnj418Wa8Buw1Why3JqhU1bDCa4V25onrqDKVUpwR1vpAH8iYrF6eaA7YMvsC8",
  "key40": "286iAB5DyhX5sviZNEq88j9jn5XRskLugxMgZn2UXsZFfLVcaApoovDCucNmaNu3fZmRnhLsjyyC4fNrv11zNwe5",
  "key41": "4MVE7V4Z54sHtmftvTBPxd9vKTBFYkh5HQBXGrMca6R2znNGF84DnAwAD2XkhVsdzYdf36QDhxpxccSER8ptARuS",
  "key42": "2SMfN65bHLZBL9HR9ake753TdsJ1DCafQharm8eKancd8eEpCJUsf7kyQYSkczqvTvAAsucMPnefxnGvX2k5Xqqp",
  "key43": "N7YpJsUwCw6E2qAfbXAujgReuCjJngiBa5VoqEUVV19xQqCLpNDZw6fTDFbiUba5Ehii8JNiuf7ouWYEngBXnKD",
  "key44": "65kXKYdsDGwUGvfuaiX1UD3jAGofeMbhpFxhLy9A9oJBhmR5axmG7i6uPvAKjGAYugq2QHTcybCMm8qDo1RsVvGA",
  "key45": "LLssXkUUnN1nogBFA5YBejRc6CHTryyYn6LxAMMUSHDaawechJY92MrEiXMnbBBLgA71mdQZ5zWz5FeysjupQm6",
  "key46": "2vEq2TJr6AQcYQXDwMpX7G5Qo3Xwf4jFeQUd6CncWSr1BZLoVwPzo4ww7FGVSstKRpbGgPArvxS1zMFxZ1seBdSR",
  "key47": "ZU7CG5cg4S15mZKE323xHBwubSSFHDto2TmQEqbUXumM3AYpV2ubP9SKgwT5YmgpwGkXahGkASRben2QJbZEWce",
  "key48": "4pYUBfhs4JeeHL8jxKpTwekMbij9ZFQsxb6GchnNXRnKiVyuTmkkAUFN7ZjxHYEHo7wLMKKNUuKGWGXuM6U873hR",
  "key49": "2sC8nZo3ztfLHmvskKH7kiPoqskEXVxREPBVb3GdeYSpftohhqn3PBMszMSVCkxaZdNW9hMwfyHWMhJnLqF6Bs6m"
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
