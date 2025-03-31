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
    "YgKKkjdYVmx9HnqNXf9JuB5KPK3DeV3wSaNFbPSqedV3AHHTnEp9C6YZC9NLs877gZ9YzpQ7TWAZG3LQkhf8mjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56U9UHh5y5bRezwhoLpAgYzLr5FJC3ATbkDCnwpCk1Rgv1bbynetHvvMtevafQQeEiQLkx26i6X2cDK3DAtWWhPy",
  "key1": "1EnHdRqA1PCToBhy2CHAiV2HS8mmLjVco9JXucwaMPw7fW3Yxz656bLSWutkp3S2uGQMKzhPF5ds7V1baPzwUM7",
  "key2": "42YFMn44FaNcaA3MJoKypYZQJhhty4CV2eATLoappYJQcrfAmrKozGaH21YfbFmJcce511Csj1qacpA4XJBzHfsr",
  "key3": "23bLian64dZeXMYFKKELf7uPUjJs9PEnnBSiiR5LEWkAJouXnoxDbXVoP15cEfNcV7jotvzwQuohb85D92VqNKeq",
  "key4": "65giRM94sf3yMNn5M69GuGryBUAY5jXjamzTBWvTDBd9aT7LrYqfm4TKeb3qakA3zC8nhDvm8KzAXyBMHbg4uZFB",
  "key5": "4ZCYSxdj2HXiZzh7qFx8WWPevdZUt12kzkktHzGpNrPAGfMPvcqzo5AEEoFP9zTnKn7TiferYXjS49U6NgYw9StM",
  "key6": "58uu7csHd1zjMjjMsamQe25xnFLCDzJ25HeJM5vzmLrg4rkpNtXRa8tRFhicbM6j2LzTvq4CW8MRh6EirRdw5z8f",
  "key7": "5DxeWaHHSSf2xLZEXZXxn1jj9ZjrRgfGmnCtAT7bMfEdMaiTL71gfvc3MbUmDMfs8c6UoHcextzx5aqbpf2Y1snH",
  "key8": "26U2cGxmJBJok9RSrTDnwPpYKcTWD3KLVZpUrP5cPwmXEP97uWjh3JUk4qmHz3Dh5biMsynngHNzpiuV5LuTDi7m",
  "key9": "44LiBx7uuAcuM9Q46rbk9nxJwRrWdbB9VMxtucEBoYpP31VBYqztsshJTG63L1E3E9VVrdLs6cCVgqKgMW8xhGA",
  "key10": "2CCy9vDS22MF7toGxm4jmtXh5AFtVMGa5yNn1kBbrP7iHNdAFyRAnbCYbwUQVCDX5x9MFYTUT1n6HxYoZf1u8uSX",
  "key11": "q9po64zfJ3n4NrTEmSHQTiyZqqodfmjeJeDPxhEumw6yZ5WRDNJ1sKg6VkWCsKXuRcLWPVVBT1qeHp9gE5jbHSf",
  "key12": "2GJvHfwtMbqAzZo94xQzQCcXg3Fwi9pSagKG85qpCwk9p6HyWtkjS69UGMq27a2d8jnAoDJD3zQhXzaAfvmNYrqC",
  "key13": "3AYRiqJEhD8fNbPLxDcUyNFFVFGoNzqPnJTicNAVTznghNJaLdDgPfGGWbMVBSHjrcDcLvmppG9oUrFAfyv7T3fh",
  "key14": "RoMpYSf6DB4AMscjoLALsU7W7hbWtkz7x5QeYtV197nMLv5wu9Ue7QEcMVefuzYf9gHXgVEgLmhGkuz4bfxNaH2",
  "key15": "2Lk4RZwLCyyBCzM3333PvPwHgUgwzcctiAhhEs7KsQKrAtgdadaeY2kZTE6mCR2JySDk7Pwaf1r7n8fcxn9cs98o",
  "key16": "2RFrvsn8A2MCxLJhfwa2sVx3hyGLkAAyoF1yAzvACbsBijNrQ4cBXQnghbknpySv61g7makb6VePwtz6Q9tb7WYY",
  "key17": "4uLi4cRthhggQDRAaxWDyveEtEjNqkzjynGpvBUmppfsgw9p3bxW64um9hbDqXGDXbc1BJegV1NEpCmTJgHEVVXt",
  "key18": "V4LmxKS1jqzuAax4StHA6gaBPqA44ZSuo2qvMGt1i2oYf2ePGBZ22caGyMjW5KcWzvA4a6yJ5HHzBTAS8ahaATg",
  "key19": "2wDV1H2W3JnZPt3v7whAuCXQXb9CBfSwrKDKRPoSmyDbjUyyRFKyH5CB7efZ9LDkof6ze5djwDi2StDBN4vAvejF",
  "key20": "3Aq1y16KhHoKHcxQRUDVVDb4bbHKjc6rXnCPs9Qws6M8Tky9aXgHBvSnY2L5jvPy1mVxKeX86tfAXPpH5dVx5j9T",
  "key21": "2YszVd9ySqFd7P6z3HgYmLrWtroceijZRYVScBNkECKse9HZeuZq2uWTUdgY9DLijQr1jzpEtQnSBSayatJaXRur",
  "key22": "5xB23YRubfYPankzjSkxFuDua7CDVk2buT2bDPAYHrj2sCutcjEFBET4ZQP5LVwYZ3FGctBscMkQrcrbUEY4xXu6",
  "key23": "4m6KhTHTMYpcnTjiQd4YgzegbSXh22taJbzJwPUA83YEcQ1yiNXCfxd1saxgtm4eTG9TQVw2j1nc7kRKqaxF3Z8E",
  "key24": "3wFASsi75eJbxE6QVkMTGyScHubGumQy1hz9AsRdw4n7j6x7Hch2DyXLnKwggYZq6PEkf7LbPwjRQyDkdg5pzExj",
  "key25": "5jQo2KLzrYqqyjPSoZzM4797djmjKV2tp4ehuGRAWSNFarec3G14qFfx9ZVusohdMpfDxfazzeqZUdKReSCMK6pw"
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
