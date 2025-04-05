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
    "3uGxcoEqSmkaXpNJ2i6KYESxVLqtwtYsKdLzyEob6xSkWKYM9FvZPsBEi8GLvCU3sN1KNe1nnYSLCXPBpDmQWYhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21w4pjJgKzFjBkRfpwu3WuAgibDVcowY6KegJGunQFhubTWTs5DJycFLgPZtwf3LWhuD71qgVJ28viL81aAm3nsp",
  "key1": "22ULiyBa7eZrJrNZj4fzR4F4cfQJFjbCNzWfHuyUW53Znh4NHimQiCV9iTQXJ6nXGe9J2fb3HVHuuzhDXNSyCefF",
  "key2": "2PoTJh9rUuu5oggodXpqsZ3imYQoSjtPkbh6zUYycy8ACWSMU68omVK3jDTEYDatotUifey8W3gAfZwUShfejb6T",
  "key3": "4wVr9nQ2UpiAvw5pmzqPtNGc8DTLgcrrGWpyo1RUHLfttdxKMHx4ngRAraAoyXuBeHne8vQn2n5emzFEjxpX2MhS",
  "key4": "521A2XVacsP1pxLgRx72p3gzqcgf22VZQeHV9EADGFgB3eiYe6DegHYztkH9q8tiXuwNt5g37JZvQ9pm7nzbBNW4",
  "key5": "5UKhTuqBAArwUxqAjc7Q7yw53ZYRrwqV2f7Yr2sgtDmcdi6d7PrXdjVfZPxKqm8zpnaEMy7W2eY4pNnxM5BAGhBF",
  "key6": "FwnHsiAEjudQmJttkSdsmTvEws268cEepnhe9vVQ5hzCARNr5KYPxBQnkGAHijM7qisXaZg8mEM5Uvuqybt6yjZ",
  "key7": "4R6oboYjhCwFi1hWehBPwQEQgmh76T2VhbtbMdjowEdf81wrZp5CJsUco7orfdaCvtGUXiq6r3qBaDQsfvTWQwNU",
  "key8": "3YKr5pFoXczKomd98kEhrjzGKgLxBLcA8o733kcCZNG21s6ockG4DkxfgmAbVP28SHhsLjsDbEMw7FxbwBiMfE6y",
  "key9": "3U9GRiqkg6MUK7KznRpgYRUkCvmPHjsskTEAFDmbgdArouTg6x86PUb5NiF35DxqsHqVmgKSWEX6f8wqYLSQQqFF",
  "key10": "3Crxbjk1VggDRYuWu966NBwRPetptMymzFzUE3WCn1mj7TRiGqrjDAQPZZpbtLYRJcfVep1Y96jRXnhqDThXwmji",
  "key11": "2cpTgiD9JwXhquaAiZLvWg52vJNgaxhffiG2EhcgPEAfzWA87Vbx5byPmY1c7djt69gJ7EjyBH4t8WaEZwgAPNL3",
  "key12": "XpWVZKwjhnzkzxaH998D9fXL9Kz5zdudnrkwspCTp3U1TiErqNMZEZbDLvtiYWMiqQgwgdcFcfGx9hNe2VuY7sh",
  "key13": "5mJs51n1SBxthDadRukD39stPPbV9DECZWN5mqrAwBYKuWJ9jTQgZAxkYP6FbRMSRuBfcu4JTwqMNGicbj79BcKc",
  "key14": "5XrRJnjHfH2dqyaQ4K5ua7RsXKqmkTi2gF56Ph3zB3s2tHmyAt4WVXBMMb5XHGrpGcQnTuz78CeGjQsi2hgeHFMd",
  "key15": "5GEe3vr2qRs7bnhxovk7fHDWVFnnWPdCzfWXvf1rmgmrLQbGLxwMqMhcGiTz9hyby366ri2XXQXH7R86kLF5oNBy",
  "key16": "2QHjCCbJE38BwjJUuWmaMhQDV7Hn1X1hWZo6zEY54taLaNRBCAemuN7nHL4MdzS4v34ycxnAX6muYg6CZhzjTr5x",
  "key17": "3xJkGcebvaCkt3n16Tvbtjx2U2b3Yebs3gbU57g95cx7CSFLtCJtVJBXbqKp2T4aJQRybc5x6cqkHfaMdFkXJdFY",
  "key18": "2UejPQGWjSXwD1itjqHeZHrMnCCHqNhsZ7Lb5YcjPWX1uWqjH4m64zqEWJCYMDCnRM4vWhu2B1CGENJxBZhAxmPz",
  "key19": "5dFjdk6b4Nfp9VziKtpYpp2nxDPs395xAkW21u62xdqGcbyuoPMUXgfYxzvo6xGHJ8LNfEjHwFWXzX7GoDUNivfN",
  "key20": "51RMBB41dbKp2kLkEbKsepHRuqVygEJvcYgA8qYjb4Uo4oEEeTuTaEtSCsW9pVVXi7uQ72RwvjxEW4GaYGJAxG1K",
  "key21": "3pf2uBx8JgPTXZUgMRMrhTp16FzEVxi8sR88ABjVk7r8TCgatypTSNbCXQoRPz46BwDhcjJ25YdkGnT7YDppMGG9",
  "key22": "2L5UUz7Dhd8zF9nENEipp9Vtq6i7n4f92Wobpr8x34681hjt9pwhd99UMkrzW9zs4wkrUu4CKHMDS5rb9CJA37bZ",
  "key23": "4nxU6YcEiBpYSbuoW89Dst6Ebrpfb2scnvzyLzfV7DEV9maKNouEcv1sNU59m9zpGda186teMge3xSurW5b1CYn6",
  "key24": "388LA89RA68s4i54NeShBrMHYKupdM49P4iRc1E9ueaJsGbmauVhgmTsjrV1gw69oUKFcNWfMu4aKDJPkWisfovA",
  "key25": "5pemwP7P56eZws1yyTgZ6N5uyovJ9eVgjnVwr1mQGUFTFgFyYzAVaNzghgMB4RGJTxXzZvnWyAYbutD6DLjZHFpx",
  "key26": "3Vid4fZ66QNNY4PfcFcKDbHq6qopcjH48p2gAmJBiKnDt8FFtYTGDsvgt9f8xRgQcPWgVgXZGCVxkUXLvMDBDFXd",
  "key27": "4uGYmNpkLdqiReCp7dap2pzSzKygQ2k9957YJxGc5hByuCRBhtFLCh7FRCEBQhTTMuaqV5YCdNoDyQosFvDs4t7r",
  "key28": "3wtvgyFXQHUgDxY76synDxYGHwvN9WP82RDFE8U86z57AGjGriPWxUkdbmfDx8CrEsPmGWrZLQYgr7VMC7Zn7rh4",
  "key29": "3aQzKnqmBGYqGivxZPkfSeqtYUuEYyxEUnABq6F9m3oCMwY1ayA4uU2NHY3qutGejfYizVZzyknioTAdzVw6j4Au",
  "key30": "2DLkaHr1TdvXe9NQS33Cp51HZZ1Ud5HCWPX8TeaAp7PegNDyqV24aSC4Sxnj2jP7kSwt3DcksKtWHufZ9HTs3dpg",
  "key31": "2yoFczV4S5sWZM1RuCZCLhYA42oUW9gZ74ERL5Yhra3PXLdNeUmQH5PWddNQ4NDC4JUC1PykoQiNyZB8RwWjJGyj",
  "key32": "3DUAnbWyuSRYGDgyna5AGiTk79jwGNDHW3BE6Vi3p34g9d9eozLGN9Nv5fwURjD7UCDiBee3fYj369u4KukxCtLE",
  "key33": "4u6q96jk8w2fgpndZ6QAbjR7EfnwTTPftv6AKSyk9WvkkT8iB8rM6jvoCzRSnmh6aj9hWZb1XnFAcabLrrCExdQF",
  "key34": "wi3Cpd2icGgPVZcH7TYBPzD6sXqLRFn5j3tUGTfE37F65MZQCfeWSvdCYV8SJwoTw21wXoZ9Ty3wGXAkYNCkrgv"
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
