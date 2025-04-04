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
    "5foMWC7wtRNS6i4wxHGSbUPbgFVyHFerVTFwc36ALVUTPyBGrv5qCJnTcSaZvkwBtGHRD7MchBFp6mkzaL91gNeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MsuaxpPrKXQmiZDpm4VbjNrcsdxWz1D7waGF8jsHUkA8VgmvEzgQPcw5jc7c1CDNvijGRNtGWLLk6PyEGHDRA8w",
  "key1": "3B4V3orL5PXSbHi19yJDtDr8n4ymKKjLjynvtLVhiedHwVivxsoreLmdqt51fJnQGx43naPFLBzbnFYvLVB5Tzmo",
  "key2": "5AZrx2Pk4qFm5anpXNuNZJxcPm7SwUXsLu7gEqMNBCHRmg1PMUKtp1htw3npX5FeFkj6e3UCsHTD16kuF8T4xcFq",
  "key3": "4d72qJCY9qYz9YJG7Gw3NdZMBh3chmhG2JGC2Y2YvEmQm85SkveKSSDiffQ9pU3oPjviMvYbynoADhypYWvBTrZJ",
  "key4": "NjiPf8wTc5MqGjhwKmHQCNJYfsBtvTD3L3BVpHuqQLW1EKUs3KdhpPbE8FbtZtbGd61DwBonw3AnoYjiwrstL3A",
  "key5": "Dnaa8C2iux2gmY78Zpn923ZDqay9Hvh1wGJr1SKEpdhFb2weBpbeToEsSVKez6XutK63oVg6Lzqe6hpZdYfGoG3",
  "key6": "4T9PpSUiNpNaNoDGXbxiB6sKoFBtniqHHrohUGWSVmV6kzmA1aidEg3gDXJZ92WeYQzMhTJi2guiJCRXU4oepAi5",
  "key7": "jJJgxqH6EEaiDS8J5VxX5X8NEL28MxRHRqRTtxVbosJfnMMuh2WbhbuAyTys3qXzYSZUL1uSjdjeDmuDWPB1yH2",
  "key8": "4xifECyR4n2D6kY7k3taPgoBUZBJJSKMn2AkjkogF6cA3GxF88M9PPCSBthyDzYC6DyLg8jHAzTnxS31UVRQG9Be",
  "key9": "yLmJyNyfuBqooFT2Dz1J8Jr3swwi8o2Kw4qpqpLRLEGvc7MmXvpdkcD6umF8JrzZbEBLnyKuHkJCnruKdR7iUs5",
  "key10": "3fHXkwGEKups5SyjF3KL3ZtoDGNAACu5GFoYtDsS7AejnboVd1sx9RLkdRQmdHRFzg2e6vuNUZHQKW8gckwbM23E",
  "key11": "447niguUvCxkNquT2DewFmREtLWiL6teXp5nSzAjB4mTBgo4p9p55iqW14TqaqsodLnQoVPMbyACL3bkXJCuy68m",
  "key12": "36aShaLfqii6yqD4h87pJM23sgpU2MX2UNqfbX9x9cHTEf7JB5icXqC3F47fV4owmZ8VV7ADVn7Tn81KCBzw1LV7",
  "key13": "wG5Gs2uEUrggjbR8P1ZhjpGBjcLpZkH7qpJBWnqPrFEMEC45AcFGShdAryzrk2PATFgMYya7q6HBdjQ7z9cengm",
  "key14": "2GSGGMYwbhzNti9akFiXr3sb3fbAREYhMfsianc9R3WkVWYGCwCcgZawh7RSCYXzoxdghebZ8QxZRs1t2BvNgBbK",
  "key15": "64o3DrfSfGhc44S26GtgXMGePpZm4NXfw3DuWPNq4QeZyPbNHz5xdYZ8ERX8FRCQ8EwYZimJo2ejWrgV3tbb2bb3",
  "key16": "3pCduwtzzRZgMtsMrtH1g7GmfmuZJfQcUw93reTqAuYTNKoTDSAP8v4B3fUy9WHnzyprZkP29bHd9BTnU6wrwdAG",
  "key17": "5jngeS72Ace58vFTDNpSSpqtu4GmDN8JPmuxAdEKA2SNH56MzSyLxatXABL3ooZkaEfDar668NVnNYGtSYdiY59X",
  "key18": "xWAGUvyw16khUxWFoHWN7Av94vxqudQRTBJW4u3fixwZo5W1u5m6Kp5gm8R5dAApsTL11qP7gVBr1qWfjXkcw7z",
  "key19": "4ssACqwzJFbbynb7kj41SMxEidA6ecyGxW9u3dEfyPY5BTXTuj9v4DYdzsPrhHeSRgmmraV6817TS2foP16gWxMf",
  "key20": "5bhGmQLHCiZvg9NCc15ouHhfWoog6Eh5zsA6AesVMLMG4HfiR2UM3dfDGs8YKzmZbWjXAhPej6j6fm1uruUM2TAV",
  "key21": "2YjdMeEWSXPHPwumsjPW8g4VVMDeUmwegyBq2g7pwRw1iTUNgaRJPa4cfvqUvLkmpkT6cKNjVXLELyLA9Kttts2y",
  "key22": "jEZ62LgZQZwXBDsD7eimDFicPdqsiVD1KbNnEF8VGyXGdDEqNrr1Qbd3SuStMakqL13dbW8f2SjhyTNjeLnr6WN",
  "key23": "2NFvUahcZLjHyB1R6jZK23NUJWqFQ8EA4bq1PwxQTTc6wcG8ohUZHPUa1V8Pob7BzGa2P68g8euFCMtQLNNi4991",
  "key24": "2XGgJAvKNQMMj6bwEorP84viTyJNmWaTZxLyju3doA9KXxZ9BP8TqaT5nS7gfJ71qmyiuguL1FLQV5LzkC7whXdX",
  "key25": "2uMKXaGHqJhDpL7kKHMfZuru3k8E3RYX5mUWmnzN5kDbjy6TWMufcbeXjitaF6WbEksN8xdiMZGfNaNsYgQo4KPD",
  "key26": "55gZtgS62m2qBjpaGC1ohhT6JrMkLiimzh4JFwBst8tqLNokapbhTcecJLGTiUL43NePT1mQCTTEiFZMba9atVQb",
  "key27": "2GATMXLfatQdtbJ5eCTdeFKCEozNehJSSRbK4o7e2RxHDZQNCnmWPzmLSBs15EAuxRWGyB7k2HWDbR8Prv2CEBAN",
  "key28": "4Rbdz71SfyNrnSDNNSTj2mBtcPc6URzmcV8g4beHdb9mPGpzjxpfve8hS89wDPYjQZqHtnnobd7dbynNWfvDi53f",
  "key29": "63SKABY9xB5bbYgUemdEh2CSUDbqZhzRbDBTapM7WRJotkT58dXXnNDZNPe6ZjD9MVMSVbYrr9TfDDdznkmnNYF9",
  "key30": "LNMzjvYdo7N6r72NBXQrkw31Boov4MrdYHDmfNr8XjiY9DUDdiXVZ1N8co656RoRiXrMSKGXgUGLofJm7CVJDz3",
  "key31": "2yq5V3h7ZpKtS33Vm8ZxDTVyM3u39LpfwQHtRbF87pqy3YpJhv282vSZnggVo4f6zzi8u3AB7qx9ebmKbU5wT4zz",
  "key32": "5vXGeKyKE4GUTe6xtUeUHShRYjEBvtaR4EtGytjXie9JkjhYiQeZYu7R86oG13S9nBG64tyn6aS4aMae8LqCimbA",
  "key33": "2RDbY9UFJCvNLHutSgiFtBuvCndZdcNUbgdCjaNg6fjTDDn7kaz3zf3jrQsXqMWqmQaACqht8bNccfrLBGhsV18",
  "key34": "2UdTBrnYhb5UXKciiM93gCmjPjwaKWXGfe8tsnkgALuZFnEeQPzcSyscNF2b1Zum665Yv4Xfu65toFgCiWrSbKBW",
  "key35": "4YUy5ViDpxPKWS2WvkBQvBRK5ehmNUHTR9s5rthqec2M56jQ5Yg1iWqboV3AwzfcHGMgKafubP5Cc8ZeQkwLR4Jw",
  "key36": "3ykoSqBaAm7WMvKMjN6Q3sedawNFGL6Ec7CecWh8bdRVHeQRX5bfrbTK3idMXTxC5QT2NXcNHNTytVZhp5fpC96M",
  "key37": "4qqwTiLc7ESh3Eov4uCugy3qBoxwJSJNDV9sSiPSxKqbYCzxWEXQToeu2GawRcNF4SR6TsnpCnw9drs4xeennRQw",
  "key38": "3f28TMiWz2iHAJbtQTaYunokdZRjAab6TTWXmW93d73fn3RgNU3zKsxDCxY2vWjFWi3xiSmps7rqZUDuqzSfuXAH",
  "key39": "4VJ6xhaHj7s2fFP1P4hwjt4ddzdYgH6EPL5zDvpZmidPRNnqgjHG7kxFCP3eLqBM1BWHPhBfmauMyx2LdnbnTwid",
  "key40": "2rziuZnik36G8jD4pPMZMjHnVR8PzPjURnymkX4coByQ7wV41CALFtcrJF9dDCjAcKJEFmythRFLicUuFNCZzpoE"
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
