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
    "3BgMJumkXmjYrH7gE2FBEkZniit9kjZyo854uzbCnWRATwr6N6xMcwxTtoc8SdPy9fdL25wE2AKuTQRWDFahPnFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XT3KriCkmLHaBx6aNmPMn5rVLn9nyCk7fEKbD8YeB81yCKTcSifcbXCYtAjT6DAGh4D6YjqTzdZUzwBDkk23Z4T",
  "key1": "2LU6qt2ySEUQFW6QUTrrNkGDb6Pu5yHZVkAvkz8RVrAwcQDsJBrDkwmpBQq8uNnuFQ5sfrR3RDQHMcunv5Zy6xJr",
  "key2": "53pdMdUALpxE8Qsf1y1rC66wmPcrrcVMYzDeVxktGUYgHGgCA1K17yZQHTgYNUzpYUxX1h8ncN7ek9BJtdsnhncJ",
  "key3": "313dgTg1zDfGfoMVWuGBVA42vPMCM9RWU8VTQq56pVv6MEt9zPT82RwZm59SzPumKNVCPkPZfwvqy3DMWRVWZLA3",
  "key4": "4uuqf3p4L95kRhAAbhkujy2xr7bCN48TwXkF2KQHbqUpYUfzi9GQpawU314GLVvD6DnXD3iLm9d6aY1778dmKNws",
  "key5": "2A3yQtUSBAwE7n98idrtn7Zuf3sV4o37CjXMt58LGQy8ua6R161z12bYtMCUBSkhKVP22MtPNk15HG4LYnLxkc69",
  "key6": "3VJnmz1HRyWj7HiX4nNUNGvp6VtPsAaQMJt8DNEovwZMXZ7wCzLgCSk5yxya8NpmHnTr8kY4Wy83vCjvofGKT1ag",
  "key7": "666DDZaHp6xQpvgcoChfv9E6RMssnBDjic6RfFTpW2r6JUy38LyvmNTpsdzER3RWhgCSL6nbexWy3zXzyvoy7Qcp",
  "key8": "2XHByUXAEooGQFxeAkumNWYEY2T7XixdW8mnT6GXnb8oQJKn8mCNs9rArwo1YRiod5JCiThq8ww9zfAm1zkmeRGy",
  "key9": "3uk2ubrW1tSQ467cMY3jqsDcufhatJVJKVD4puzh7WbESVCCiLqchNCBPrXGtjkRkUimp9kzPGLY8dfZUth4bij8",
  "key10": "4azQ4urxY7rzacJJj78f6tEkB1b6esnX1ZtYLuUAA2wvGVCMsRk4VRzfbop8rYG2GE7dyzEwrL7UVo7J516qWdPB",
  "key11": "4Q5FkAy93LAUb3ju3RbnT5P8EW79ftwVTKGWrBG1JNvDk1h6A1XQbLjUmzjS8bA75jaQef5tHeC5ZuEWY6AY6HV5",
  "key12": "5t7oE7zwynvreoQL2yKP26L3z398DkhjjsMpQjHsNWESW9dnQWWAorqixk44s7JbXDAn3Damdvf4vCPkn68pE9p8",
  "key13": "fjeutUjSgzuYMEcWDS7vQR7Sf89EMURtL2L3FCMYDnu5H4wytiCXHwFtp4XmZQHKEr4yBeHoXbiftBSGq7TMY1P",
  "key14": "2GE9B1Wa5adZ64V53ttUZAQDa6MeWuY3e1PKgLH1j8GunbASi474eKP2x6aMid5tsrquB6GXxGwMmrgA4TT3JYKC",
  "key15": "2Kg6SqmT7hC7xLvDp4B8iT6PzTKqZP8iHvicpGBeiz33e8GLWbaBNJJwFw9UonFqfsfVHiviB7ATHJSRfxkrxST1",
  "key16": "66a6gdvBESDbuxY9YQd6XSw7MdcLP6yXddYNQytTKFMreKVXN8uTNkN4G4YBSueBwHhFRwuK5kCvVLsex4WuWdWx",
  "key17": "5Foo9wtY6vNUBAKXa9ZV9N6Czc8d97BoCYZFMpfiZqGzFYt69qFZxXs4wjSAz8Zeu3uQx65DAaAvkmRx2K8gD66y",
  "key18": "5dwA8A3VYYhocYuuwj9WNiA7Xcbb6oQCrANzxWVh64qhpQbnRg4NNR6MJzbRvJVw2Cg56Y2yNfonxCcPRUiD8Em3",
  "key19": "21QzSt3fb71XqQS4VdGg4UiELyw3vgXJwPAgJ2c9nL7X7nLgHGBY6AQRcCSqQ7U8wqEdPpNgB1mL5gRF6rwRxqpK",
  "key20": "66EpyPGmcgZPiWJnyXKMGYEEWKveJXNebojCVUzNL4FuxfUJUPYsQHb4acNYQR6GxcG5oGMmxfguMPYv1vw7hvbz",
  "key21": "D5DxUMcRnndzzx1cvNf42n36Lj2R7XH6Bui8WEyznM9RQZwocgyhrqaVorEiKWdLSCPTf411RLXrXChsi8P9ELG",
  "key22": "4PQgvc1YLsFhkk1GHRzMwtFnmS3wJgYESjCtkvUdwTCAmbDCtKs2JCP19bNPHLt2aBediyhXeTC88N3ZgDVsXdrJ",
  "key23": "2hx7TvUyUfSENtpKDFT4e1N3GZca9UR4HeB1UayhH3oEPvPQpxToshKYuwwcGtBmUSLsiXGQuApgjQMVpUWJ6xkr",
  "key24": "3ecUA3YKXiwDRkTbL8U76bFcGfKosN3B1uBAFUN37PP6RGN2ub93NU9FgKSurZa4DpX3jPmDmQBvi8yMrix4ZUv5",
  "key25": "4ZSfU8jpXBhX8wzzB1UFMrBjj4dSfwjGYp1hAgbbXJB71TP9ZftejJz5i2f1rouE747Zvgzfan195yxJZfuCCTbF",
  "key26": "3UaBJD28oRe9gyVkPo7jYsTADyHgSu2e51iwSHE1PtNgPad6fcS8yayrNufSVemSapumH6QjyjFme8zzEgdAfN5Y",
  "key27": "4GjjcEvu7xuNTcpVbRbgegVVNGxm1YG7XUxn5BAif8vukhGJNK2CA612q3RfNw5LNQzwJUtE2yYjT8ct5kStZ1Qe",
  "key28": "2GbxJo6jSBFuMv9k7f6WJv7zLaqv1SKczTpT1HcBv3trrcokW56Npig6jbSF7qjx8PGoc5ijsDmjePPZPhVncG2B",
  "key29": "uD8s7B9ikvzXZgpJaGEUr2RFXevCwTZVQz2Kgyg5qDvynR3iET1SxYm7mzD8ouV49Qqp6MUNcF5FJAmxdEBVkAS",
  "key30": "5VqiniF4WvGbsRNNWCXkWo3hyWoHafAvmdfFkQboQevGbGMa3CVxq6hyb6fuUkp2WW3cceBWskZ1pTzRGsbcwkWe",
  "key31": "2Qa1aDvMW5m41DZK4o5DdTA3ahKrbMn76nQzw46yKKzyBWM5fg9GS9UJn5EqKB3NG1xV4as6bXhPU7z2jXupSby",
  "key32": "2FYyyjLpTc3jtP6cZvnBM1tZfUFARitigGEE3LMYCjYJTVikV3s8SF4fYQPQPVGAEk1tyHkx52cBajy1QJp7Lkuv",
  "key33": "5BiSwmpZwy5SC7dGKemTUYce7ybSDgrniM17HEKioNpXpee5gAH3cRG579TXcqGywkmrYUgrhrnANG5LLzz9WYiF",
  "key34": "5Pd9AjDGyvtNGAqEBf9MCpHkFAGzcMgLCdYoaQbCVw5ru3UHJMDCUfdVPEhBpCY4yxvvGxYUZPCWhYkUDCViXeLR",
  "key35": "VNL1uJU5Lt2c34tyZP8rKMvizspTHtZ265UJFuEzRgCJQUHjHmkUFm1zF3y3oTkCEhvCtvWv7ySweVg4qn9ZFge",
  "key36": "xyiixn4GTCs1eevf8aK7Ng7JemGeD6tig83QVnFKPEw1HyNxtUsCB66gYDT6bAbAwy1xPKu7g9K1YU2GXdJiwvJ",
  "key37": "3DV7ayYfRHt1ddujzekKXcSHeCNnfeL8Kpfm4kQPhhfLarmUmCbaY1SNiHfxwFKUk15xSGNBzdcbp6TYw76jqw4U",
  "key38": "66MYaxyGPRxezAkvigbrHjrQzJaCihV2exA9VUaX9Y2EyngfwFr4QCow2HmvP9sWPfPYisYdomVRzVfEnrmjzLrw"
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
