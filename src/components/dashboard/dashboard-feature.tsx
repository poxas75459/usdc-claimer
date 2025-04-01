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
    "4qMydNQTY4TwbrK1ULhZdoqWr7hqXANsbpa92SAY3w7XaydREuy7DGVaaecDBeSXQQkZCWvoXVmJJnQaW31dPxkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j63xo5USghxySGwmdH9Jez9a9iHJdfjmzSoipLukKz84iQ4iWJawfi7duwv9DhehD833ynVMPLM2teXSJVNenny",
  "key1": "42LsVbkAXyVEy83E8KY4kq5rdeA1p18YEqoQTCfcMXmrye5f3tSR56pvtHx9h4KoVCZ5YrsJWxUWZK78MoNTz4kc",
  "key2": "38Y9f47MxN7Sr9f7Rkwh1JJbYRVNf8MCcgkcAuZaTg8AxLeFum9UMJstMHDad5pT3LUyhUzDoiCLn2rbEkzUxpuc",
  "key3": "5RAejcQgo6Dg7PH1sj5pXNXfNjyjQBm89czLA1SgsLot5RTWsNKmkddBYZ9v2YBKZjkPXpXvPikFGgj6tMDmjKaW",
  "key4": "dGk1E222g5xGM2xJBFk42sFhNgLxtQV36GPCnHpJXNqVZ9JVFx7ykYQ59cz6bpGsooVjW7PTFuZJVT3nufHbyrL",
  "key5": "4oVg6uUCWpwjmTQn5nEoeQyRhaCvTsiEEBUUv5DqTG8H5Lb9pefzLYqbavWMwMJWu2Mo66rEzfYQHyzEKqeEmHDt",
  "key6": "LtSw2HffL51gGGWSonPy354SVfZ2AsQA3PJqgiSZh9iLFPBRyas6FzpQEPUVEmiifzYWFUYsKRbmABTGP3cXvKw",
  "key7": "3Ugsz4TKDPHH5Pz1AxDWnAWcG1o13PHa3CJ6Fxx1TQRJEjMDNSLCGA9fV47JMMJMjfKd7QZ7GRHqRFARTgnNb7uX",
  "key8": "2V7wCQLpFN1NJU2rmJyoqpkMR6s335b9dWrfhjLFp4zBwJhAc2ZnJCtZvrwxWBCtxKL7dgVbm6pJhxBCvAf5CmR4",
  "key9": "2vFD39YkgmFUvpaz5PLnJSVpHLJfE2xhqXpJe4fSNHyRj1s9GD82B9Lak3u74bLvkV6nVjB99XC44mowZ1LvBzEW",
  "key10": "2N1oXm3WbNAm2foUHcKWS7zM9XrMReUXZZZzjHSDBhvT97yBJ8RYyAnseg5SrcetDhcX4UXrcnAJKFCWGC4LvdjF",
  "key11": "5pudY7mSUzpVTFVPE5NFYZDBMDDSzCGGL5hLrosMJ3zeKHPjjXjdBcRrwWg6EGUrBTcwDan8QThYqovSC2uUcK87",
  "key12": "32PBSyXRJuvnT3gfYUjXZpnAdyMJSVxJCU87egyft5qZ7tVap59Bw2SDqLhboHF3mEYGuAERmg2qtiUGk7sTTbTB",
  "key13": "oBJPb8ofp7uGYJsGzkA2heXExNMDMcsv8Dc2gA4KLqiTKELvYScgsNcuAjSJDx6cGKSY74BxxdnW9UYmeaYAtfH",
  "key14": "5LgjU2JcTDZawmFUvfSRoDT5j4M3LNjiAMRMmeGq2XuqG3uMSpYyybynmWNVHTL5fYB6Xs1HVqkhfkwvtDYKsZbp",
  "key15": "357a6CcJhQwPvCmvPxi9WA2mJXZR7juDpTNhkXmJ8xP18PyLwmCvKuS9ZsfxoRTM9b9Vz9e8NkrN97bBiLYmXtT5",
  "key16": "3AfgKtBk2wNnySm1XKpevcuhQQYinK51Fmx4h7XRvDWndrAoWZFNPDfKT8op8pKCZAnXPdxb4sn84b3wx5LQ7bSD",
  "key17": "2DgKgZySq13NnTANFPfwLmAb6Y3J6YhruGSrd3njNYZxabTzvUjuWCCmNRT9uVPsJ8gU2jdK8f14TytnvVzF3MVT",
  "key18": "2b5X49vZ7WQRAqeeWgA8vpF5eRVvy4YyLxtoHRgWsmTUNVWWFiRqLG4VSeNRaGoBYgMVrU5hezTKQMDZegoqf1DH",
  "key19": "pr8VBE9uFiq1t19dCNqiCbPFcutJtFnHR9YF186Hn9Ze69cSC88YVnFz5BB1xxDQaXzPErwqAy7ciVo21wHiCcV",
  "key20": "2bebpgsweH4tLNGnRdLAPDpCSwKxcXCKriZXSeYPcAHqNTZUo8J8rWrs5i8Vcp9DUrhVaBYrXgVmH85ndChUgU2b",
  "key21": "4V7LEig47FgJW9188fHmvWDy3SXRpsyMbx8otKv7swSkdtpSfLstjvRu85HsVQa7nfngAAS29yPNGWMCfLupmSQn",
  "key22": "66m8z8EjVAv8o5ANeaeYzgNBdQhF9H4zGKTF3zVcrTdgw5SjB8ntiM77b1Auh1ECqWiM241hBf3brRBiyuMq8um6",
  "key23": "2w6n6s2LeVhz2XoVkRudnerRuZdDY4TDPRcubxGBreXEaVt2gNT8W9bDiTMUoCsfSjUcFFGkb7wVs6wzrg9Zzxo6",
  "key24": "5vavMDc3nSZDi3Hyw93NVe4E9uhhgsm7oabFykkU3obV8TmNYmyiH72kKcmtxiWK7tkB6MSAzua1LMdZ2UwsZpGB",
  "key25": "48UUQQyQUstGiixJW6SWv2UWAddJdiRxKxtmVaZbXUi8LsQqMQfQLCvWDohz6h8g3yh9zpcCsfCY3r71Fyg3T275",
  "key26": "kaZiKFgSrKh982kHGgVgLLg9LL1FGM92nwa6mrc48dDYN1GSDFMBYUmbe18RYbWx3YdFbPE7QYi8YksAomGhVmZ",
  "key27": "25VfzXtwGKz892sdwMR2T7NSVB1shFJjsAYVS1RtRyMDjQpbrpi7ip1XCdkHy9BkAKAz429gXK9EawYkiGkP91gn",
  "key28": "2DBNPPTvfrXziu3wxFFUMQKuBoiNtEuJtLbE92wwqKorB1wjoRev8wvgHuGH41T1GJwNeEK4UDxKHW9kVaAfRizD",
  "key29": "4JDfx9mJrytCzqKXmeRqFVAiwgpPdYs6EVVLLHhKAEfT5mEWqZ6xQCtKLjqfZehQBi3yLBZGXXpSLsGicp9QPecW",
  "key30": "4DXWPbx4Q9PpbdfVSaYCxP7NSKapjovamMGVj7L96fXqtCcBWQejHBQyBHXsMa8ehsQ5ZVt9477JCgcwv1N4KdFT",
  "key31": "3v78ao7qbY6sBTyEBhjMSUYQ9y6q43XiNKXFPumgL4ER3Wdf19KhvFjPagDQ19pyKq3DDscZ8NSzVwhLzo62HGot",
  "key32": "3vBQ3RKiHwREw6Av4WWyoGn5h6BqBEeJo15aJ9wwvs7zYRjFkNMiUseBHvBkyU1a3okVZMnZy7gaxj262wo8QpFe",
  "key33": "27ChJKxW6vZGyihUaoL3MHx3srgvwuunFrRYAFNr1g7qXaBfA1kGRJLYFzhJq6YovX2HrQ7Q8r4jgdPU6LCo5HLm",
  "key34": "y4tt4r1iNyd2Ayw1ngpSwsvsVy6kHHK5UKuWZ852PkTLLw4kTrCxikrgR1Xa7cBmfArkhr8TgHFd8HWuUa73bHm",
  "key35": "3nGwPrvE1hTCUyBEzfhMjwJm8Vuiqr5Sfkkxnu7mBtF2Q58xndFRRTPJWb95FC7pyjYhUvFs8oFWk8FPkxvWc3HR",
  "key36": "5fYGvi7xhmFkaaFGf3zHuKkFTAqZfFfaF5Efpe4qTQZvGnq7hZ4hRXh5qFomEyihzk3mQGH321LDXAwVSFPA7Jra",
  "key37": "3oYNXJ9QvqbtV8ifZXTtGjDyPWvBz7sr64RBBPKPBmErcDq8dGqUoG4WMa4uNBn34G2GepdDRCz6ZJM1jyEET2tM"
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
