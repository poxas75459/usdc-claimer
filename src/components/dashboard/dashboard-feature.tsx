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
    "5PQZ9R3beSgyrMwWR4Uiw8VLAkPzBsuF7L59gKtr9AkPVj3odtWUjNj79gLEmCWbAmzzef5d5DFobz3N6XjUqRkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MdmEs1WJqnWecwPYHYur2VY53Cx5s814PspTDx5PhZgKK9xnuemkKY5RrDuwbTTFSX34mk73nw9jzTEUzJidNRK",
  "key1": "5JMUsuh1Tp2Jkv7mHJX3ZDahxiVui3ecBsFSJUE6BL5sQgPTaiQwSUKofipZPYPLUJuE7UMXKz6smcA53NhzJ6LH",
  "key2": "34QTSNiT6P8ZppNJZKQC8BxuW8zmnZMA4RoSXZZLAXSNod8DBVuquGUcPJCKfxy6A4yZypM1EmoQ7G1wZ7hmZ14j",
  "key3": "2cS2iBQhNeK53MQt5hMkbWos84AsWiAVgqLGrEiMFTU7iqg6z1uQuE7artNinvZn1N1azz5u2Ep8Bhr4XYoYCfzb",
  "key4": "5Ey748ruu36uD3YhQeVbFxGz4SGKQcV2WCFUgUPcBXi3r7WnVxwmKTcdtsWHJzNQK8yRWcXq7Yup9SCiFCZ5JC92",
  "key5": "5JWzHcZDAJeFwUYfiXMFTJL71CqGSCBLy8a2L97Dzf6XpB2bNha7heoGrRxbVhZ6EqNKeiMfKCuzgMt79WDGbnZQ",
  "key6": "2tvnPJF5xX5mP6EtQhUPZ1F6vsmSipVvTFzLkDaG7RbGnXcqz47uyw2Vtha2St6hRBgXUWN7fCAvrCo3g6wF3EwZ",
  "key7": "5QeVGbnSCSNReCKvk86W9TrCtFndei35MQSLnKT8KGvjNX1T249u5etcnxjU8GqGZgLxtPPRiK1is2WDagP8hYeM",
  "key8": "5NhmD8JNcNH5FzmcTyrMdDsfG3NheHcheaZDqLBFidq8Lrfv3NTaE63MjhMusvThCARbvwwmhxmS3PXySpdADsBN",
  "key9": "5VSEfTRpd9Wv9J9Zt7GbC3VfMsVQ9AEac6iXh1XDxeCCJTiZLYyLPxd8PbbWQxvZvXjkWdKsQxFCCAj2G45bmMCo",
  "key10": "2BPry3WYZ8DNhn5npadx6WvNocYfjSN6AfwKMzJk286GZ3YaJJZ8TsgCy66QuDTLEveN1vFsZGzDzd2GhFZTWuRo",
  "key11": "4woGFHhyCaWc4K1KxZ6w9G2hzMuWeDAUUNC4dCb23peDvLhcqzgJbnYJ8wFFwzE6xArgTigmTLmxPYWpdi2qT5us",
  "key12": "63vpQadhx2hrTLUnWTXGFAojxwUPj7BLGDNmjYCu3frkTxGeXYZ6SHb8HRWEEjnTS5TQ6L3oMK6j8EqGApoe2onx",
  "key13": "Qp54t8tHX6UB4ESxUMnRMQf8wiJqh2p3bSAfK35jD7jFRDjoXABaTeAs2zX77RkQrHVZmYfnWeQjdxFTzfkMpqy",
  "key14": "ELPb4Mshaudo9Varp6E6tfEaXDbEbwFMN5oMBPmorRujWAht5M3EPoJgJq9e2Agb6xWbsDVC49LYHEN5gdST4UY",
  "key15": "438oErPnSJJSCPo6tnc4YdtvLdYJVjyiCV5apoDUuY1hSYXnHN7KA2VHruUqzNV5zP295FWjdG3gGDQr7MYo2baN",
  "key16": "5aWCdcQqTKTzY1yEbLmU5TKcE2kVJzwRADe8xLsPFrMkEZRFfAXGeFkXSP6mtqGHrFhLWoUMPRgM7n5Zgoytv5HL",
  "key17": "3desQsL6RZdE6JgQ5FaB1zXy5yYs5sDa4xAjZF3u6b8TZ4E5nKsx4p4jNxY3PPMpESJEkNpw3bxnpEjx8AddoVXt",
  "key18": "2UUuS9zSJTjc4WirarubNudHV7fdBDahEKFU7GsA3iBkA3mfhi7DNQzYk8e6JWuJYsaJvmkEuYWnNsp9bXx6x6XM",
  "key19": "24wi7anHQ4yrnKAToP8L3j3uiqRXTaTnPEHovfzofsj8vFNTAqJN2KRmK2QyGr2HvtinaLPZ81qX7vgMo1RAVwYS",
  "key20": "mn7qQK7kEhZD3kkMJiQigLdQ92MnXchEAZqF9eT1pZCa73PN4T96hCwefLkKCyjdLVdi7WQDWWfSRGL1a9fyuFY",
  "key21": "3SmXP76F6o3nzrgJz5iFrrhQ4PLC2yuP9w574NGcfWov35JU9MtWb7Go3T5CA18ZWcidti2fL9hnq8aWmf5u5B1d",
  "key22": "3RPAESq52BaA4ZoiQeRbESvS2dMix6ZXJr7MF6vWPpq5656whDPB4Pd3vxHrBtUrxf7k8x7EzaAfa7wrWzBR4kEy",
  "key23": "3dbkwvqyJhhUihjukg1DtrCBKB3YFPCkR86HWUipJ9Lyd24s5UBnhuRQohqS5U3ZZ1Udgr9NUfSpKK8nVn1imYsm",
  "key24": "2rrkkzvkrPR4WGQmaNkLyGDqkh5r54SjwHkfJo82L8a2dBD4t8hkbDQzdCN7Hgq9eD5LzG4BHU6APcUdrGDEScX4",
  "key25": "d4DmzYHGTWT9ex8vY5WFcu14qhmBnxd1DTVTHqGd88VzpFZj4uemTzaCvXExFbPQfVQg91yV5JbqQ1vPmCdsdcR",
  "key26": "4v488tq8U18d8z1gEWgE9XTC8rvKk93re1peQ83y6JV3rQLQBSr7nuDmxUZozWm5Sz97DBsDDN7RSRtsoCq7C7SY",
  "key27": "3NGMU6AL7D1QjLXrnkLDyTedGiFASfs3NynLuFAQdyTfR4vgZUxEmQYRZFYw8guS4tqLXvviNQXFvuZDtcMZ6K7a",
  "key28": "3K2tNCu7L5CVnNgwFZzRonL2stnzZDFX9zXoYmDWqnbyhydjFyAQsDraL9F6RW2fb7sAWm48CjptkCnV4hzpehvn",
  "key29": "3wTpPFA8nat8q5KqLg5AeaNCz4ZSTPuaZXaxcPSvRNHKYTpQjF8dh1qYTDiizU5MDYfn3L8T5s1CtoXs7A6zzhsS",
  "key30": "4xdPYw5FeZpk3nptZgELuKNTorFSh9w3mnRujiuWQQB1jMYFiuGD4BMSy8esy8Nx4sM1tUSw3XWiG1GeoPwdqnMj",
  "key31": "3cp9VekvURhtta5TXsBR7wjXfjU9gTvdkcpARWnDM5Muihh72t1BhJm8uBLAmEVpcp1mvwqK9RkW6jBmZu8PB24P",
  "key32": "uK7MxWBqFPw2MbhVQj1vc5QuX4bEMm69ztjy3nNZW8RbfguPki2UyYbYyDPAddqeioXDWGajNQ4x79oRQe9Y6Ru",
  "key33": "2rNcDVezrZbBm2wkpGW85eHysyG5WhbksJsc8eFZFYZFNz3YpftphPayvRNgcLFL6C7H389Ecs6vFJzy8N9DFnSp",
  "key34": "2NCtT3BWzJyFypDA1fRbG61CAjRt33mKBFtmR9MXiu6jc6dUhPNQ333zhvHdc3XnqMWeA3N4ZXqsjZFbKjUSF559",
  "key35": "4dXtW7ymV5GBouB3T44VAqb5HrEVmhBop2VMMHcbut5VnSN8SDX7JYfFksaH1hS63tvZdeFaNVJ2oRHzooTrHFho"
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
