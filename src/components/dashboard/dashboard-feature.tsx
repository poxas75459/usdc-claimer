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
    "4PB6oCDWXCGpLot95ZwDsTKWZsJ4FYWUfnkMn3LYPMjnQz4GJ89bbm8Zh8kERfPU4QKQxWhmEVXHjxZfddMyqeYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3atE3yZWvFrm9pexwrfPsSDUghhD2G1zsruR6adZ2PsEr9g3U32d3kNskFNRMm5CXbx6wLitiFGjoAjMC3Zj7uaa",
  "key1": "4pJoKYJYre83ZYEnVH9WiDewYiPipR1JxxP9riaJRUiWzhhA3nYFGUFcrVrquQcpLqVWjbt1vB4rYEf7RGLCngTJ",
  "key2": "4jpgMfcZ2sEEPzsviFk1iwxV6i2z2PYnBMS6MGkWJe9BYfJz1fPFyxnesmHt2Jzsvjz3azoGqbKUxRV552YyQGa",
  "key3": "4YYg6aVQ7CRe9HvuDafp17uocc1SN8MZKHDngTbEbwcyMGcRMSH3c4YkZq8oFVrzwkT3W4WNWGLXd3UPx3nEAuL4",
  "key4": "48KSHbHu6s83A1uXt5sxhKLMWgpwCVEon1GQ4er1bhhsY9CZa514NHRNoqi9QRwYa3VRJK8T2wnDJ3GHfzdE9Wsy",
  "key5": "2Pskgm9iktc7nu2nRehGrbUv3jNFrTZYEoe7o8pwkcwqRi3iD2nnhZ4ueRPgrBNxWrNK4DUGcBMdokRir9Gh5h1X",
  "key6": "4Hiy2wpkLCKpxugLgxd5DS2t2mWHQBvzSQLFFLeUNd7tMDWSVn8KziTeBZ3nW9MYVQquDMVVDVATHWJuAtHy3kuy",
  "key7": "3axrNSw8vm1oy1ySKund5evTTpy3FDpcrzXgzgS1uq7SeSm3yyG2Zc1FQd7L6NKgeC6LEJFAorsPR29ic5ktWmH5",
  "key8": "4NiRE6fxuWAxdaZSftP36ZyifVBQRohdpm2jmCHqwe7uYn2LTX4SQkg1NPdhJcY1B6kMVkPWiR1MsViqfLU6gP8Z",
  "key9": "YN4ebSJYNC3cWTa7FugQsWC9HczPPTyd5Rs1zSZnSkZrb71Lzz61tPshZuSzmeUWVCNEmGjR7gByYRkmV8fJR92",
  "key10": "44kpQR6ryTz6SueBRT746JsMagqa7zs855bekanANP1sbc6x1sHLGjywPwGa5iezE8ykuxi5GpyMsbeCzPfgEKh7",
  "key11": "34d9973bze4dmimaUEURdYGEf88RRN7i3EMRfEJ7UEMmGvnXc45pBdtgGQoHkThd5GPUeVagKzydpEaf1ivSGLme",
  "key12": "2iV4T7BADMjb39kRdAZewsSLURvXFuck1tDF9smV2KtpV6M2ifwjnqRXzQ7nke7pQcuxwtysQEfPcToTe5GETMWS",
  "key13": "2UnSErwB4WrTg9QP3hdvWRsBf5A3iLbfRTkGjqRzQjfanv8QehYvHiqjHBApr7sDDSamK1ZkniVhhmSK8QuQzLLN",
  "key14": "3WQneEb7kRwy37HJr3BhyxSbJNphLKLokmda3iVyFnCr9KpKsJihHAzRLaUQWqcGcJCsPtQSWNmoPGTdBZhChAHB",
  "key15": "2xweids6wGi3QTu23LPPNqsfsU9WLmof7zoyvvJEjhfKLw5n6S7DHJhUQpEdKLF1tVVUVsfaiLfpaRTkdGu76rhV",
  "key16": "3ikfHG6ZEk4DZEUazwd869E1jWCy74JCu4y5VwvkppJvs24Z9JTRiwETBuZk4z9iZ9QfhMrttai4Px8TADnDX8q",
  "key17": "5tNf2yFk2LcrfL8M5xUyMGHob7heJ2jNaB8Do2XcLW5rj3bTGHNonLsFMwJ1cgVLkcK13swWtT3earWqVpkyuY5H",
  "key18": "4MTPopVeq2P6W6156vsnrBZg4XVFwHkj2oih4qsHfXHhAnmu4gjiBNex7B71eF8BjWMtesmtR2LvhrQv7kZxwyhr",
  "key19": "2cGEQrRKTMeX3ibzxJ5uN4ATmi8kmyiXd1myZY6Y9LNWZRsJeWRK4jFAvD7QUg5jBgNJ3TfSNnnxWVSF1V6CFJc2",
  "key20": "9Z5Hv2JF6FuJXcsS3dsHbzKThDLQhCKuh6ofjzu9cK73rNYZ3nCkLCZUDLfL9qKoJaemLAshSNBPf9RSVcG2yK2",
  "key21": "22UHbN7oiWmba8Wa8qF7QmYVtbQeM8suC5bRc9aX9PffZHxrZqCR8hMSkfF5h1MSPc5MBfBo64Bf6zxCGLmfYrRg",
  "key22": "53LfGghmRAND1Ms8ReGApJ8L6MhQCfJ3HKGYDuKXQoVNfW5EjvE7qxETKjysZUJKkT2szGBGmA5x8pxAXcZJZbE8",
  "key23": "5nbFxPY4v1QJCkdVm5FCEd44oeFemEy2BLcoDDqWRF43zv9SkYGvmXoUTsrdcJGK49rMkgy74EiLGw6sYWiJB4jy",
  "key24": "4aPSzEbz634Jib3bxJrWD5crb2GARbFBJp3DLqjcfun1A5GDYqDWhXrox8K5LrixasBXucY1DuN39trB46qKzRXs",
  "key25": "3Jdv3wUms3XpLkh4akb9syswYnqn5sBafTh3hEG2NB9VhYcwK8faFu8duQKeCeVSL8WVEDBR8MFNA9u4KZWgmfmz",
  "key26": "2nDmkzpUwUF2EivTK1G9Zj5jM5DdR7XWSG9t7o8f7K5DCD9AsAPPgiKrLuh16dam6PvaAfSM2unqv1QtKtkqqBZX",
  "key27": "2XgXL6ycnyhztaM8ANYzELmmAEA1ZdZGK9XVwqr3KeY8GnkqktCfDnTcBTAtCsxyk6J7nfCRiijsxSJkx5HJGjMi",
  "key28": "3REMbCBFFS4FdzkGD8XTXTZN81A4j6nCULXTqpM95AcoNt38VBx9a5P7FLzsbZYu9VZCQ7aFAoyXRhN4CTWLymCT",
  "key29": "4BAkX5XD9rXXFQshQqiS8pfqrWv2iThixEz51FU2YfDK84ThEHmeMdrb9Kj62vgotbz2Q2q6mUFG1FqLyUieqqvE",
  "key30": "3mJCaBLMPAhkauTksbzJo6tADmQEPcNiaAj22YhV39SdBFVQ2aBYLNQq7TVEEKhFQokmwahEZ5hLx2idb2Aeevvt",
  "key31": "3VE42xp8dD32zCjnWnZkdYiiUT1U5DxjBrL7xDkzqcvqfRWkqU47666wqXzhUEJh7KQgQ89vTMxZycwcgKdAGQJt",
  "key32": "LcextvtjwUcqqLuY5oDQ9dTvpFfXWD4duRNGmssxT6LEsXGt72Y8C3naLJ8YFvtn6HGS1MVedBeJd5AXTYYFBBa",
  "key33": "5R8yAAGXTarNh5mEZ5Q1LCBG2RvcYakzV1NmoQ23nWXibrNwjKaoQjBP7QCLhWUxPzrZ51Xje8paYb3Wgqrv3HzC",
  "key34": "3tGwY5Bom7YiB1Z8CZ61zWNVMNCCXht9yL1AzNXGxdk4zEAyj6GR5m1hMttNeFjojCFKLx9sTDEjJMnrtvkGV3Ay",
  "key35": "2xtoGRA6NbHbc8tCAeD5XUhdbXXFGT2twxkS52SX1weEYcrUrHCEVFof6ZBeLeWQ3zxtxFU4eLRBipGgCERcH6om",
  "key36": "F9vXGLWyi8BZyXNgWLHzR86zJ1NVz3Mh3fDXSnAteRzj6GVKGAx1vLanc9tP9hmQdcJJ9VoQK4ZkXuMYmDGdUsC",
  "key37": "P8JC2qiV16BKG6ZsNaqYCZaFbNgLWnpP5wrhMRSk8iVKfg18G67f8JVceUvxrTtcsESmdSsesuupePLbwZgNTZX",
  "key38": "2XJwRnBSxwHk48hLpU2KX6gC8C781nvHhqUMB7VF54zeUhddZUKGPFuxrXgmRnycYvv8UJ8j8Gr1MCKF3wX3BDee",
  "key39": "2r4dk9twZzfsqHHuuXhWB6MYmU4tJJWM1rM1qm7wC1DrZyVie1pbFWhjnBzBhKQHfY9W7ePKihfkUbnJjRRbnhtY",
  "key40": "2oXinQBP1U7q12jnQnWDAWBSgvCunZZj8Lc6tzENMsGdoSyZoVSkaVbcAQnWwpBwEeUkQaL8DsFo1rwSJycV5n9H",
  "key41": "3d48VUtmJ8g5RHS1vaozioeZN9WzrkMVXXbVrPB4hvFtpHyK12A9uet2nNQNk7FA6NM5noRnmJA69o2npWW6iJiC",
  "key42": "rzcjzg735Aand4q7ecQuBCSWMXTTJwguMBqgoY7jbw6eAtbmqCjw2HhwiqAgdnjvv5hfyceuBtKaUgjagm5ZHyg",
  "key43": "3mTcWCDGe8dEdhERrf7qX9JQhB6mVfxCUpmqfvdrkaP5Q38tp89b1upQQWotzw2wrdhqPfPmsUsxyjehP5j3aRyw",
  "key44": "4vG8TCr2E3Y8fRphPayUZFsqqFVvgNrMwC458JDiwj8THjdbBySwQjEHG122kbdicvN83nFSU6xzTAgPwS53o3E8",
  "key45": "5n3MN2aDFbkySSHVpJnbXuQwqU2Ae2gAqPYaG5NPvt9TervA737ZdL82hXAZ7aqtsYysj6PEHoQq5pHHaNm8r4xb",
  "key46": "3uy7FHGgERXZKAUbbmrqSPyXpEKRLqV3KDDC4h2MTfkujR2ib4TgqirBQAHnDSmCTGzE9dELDUybTqyXSBBSN4m3",
  "key47": "5DFm3C3baAedjGse27PH5JTff9Dah2T1RMEvjfvysEdabzZpVXfV8oN2NEbHC8SrLvtpDqTMwExui5ki9VstfNR8",
  "key48": "3UdCTVPttZWSww3WCPkqhW9FbPHwGkLPPXkFNFDpE9Vv14mFXmLaAMNBUt6xrw1crhTABn9sc4cisTJmfFwdUWxq"
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
