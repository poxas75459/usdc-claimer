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
    "4AJdMxJmVLXP5xnCf9GVoN8wNHjFmJAUSKD2ggLnDc89ruqbAwpCVohJPLyTkEGahWfuyFqpXQ6mBj7jiE823Qv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Bbc2u6TdTByoTLZdjrfgSzFP26H2WoUPWXRq8X88GevS7CmPBuTfeQ4NF4DmhYu4UT5T9zSHHe9sgzPbsesUWr",
  "key1": "z3oQemcocak6ShdqWczMEPZso1MYLVjvGQ77taCDXpyy5WzbsmDWqr3Ga9LUmTi2rgCmzWnRzxvRqbhqNkKe2WX",
  "key2": "4TVaArvte6Ka1dg2kJi27F7vkVFS6hDLf5wtYEogYETDN9cdWY8KYmhRno6tmckmA2Nxw9gktRhWfWHevtjHD4Ga",
  "key3": "5WqcztEgNgQ1GMh7McNVqgmEKD3tpgV5gq6cggHyD138aMzZs5XZGdBTJXz1Dbvh6CXodsMaL93L6JR8M5pSG7Ln",
  "key4": "56fPQg7NVdNJjFqCRWXvLzrDWBaHRG57tuHKD4AYUSJ3SCUVxuCsWTH6EM5iC1rTk22SvyA5Y2HbMh4vjXMXbjKs",
  "key5": "juitd6KHNz5SPniwzFALV6EK6yRYvKr525zJjMqnsSz4fLDsTAjokhC5SjGrinsTSgf1CzxvdsxaAQmcJTGPpNw",
  "key6": "YRfYZAwWHEsfVL6h16xFZsFZu9puqGRK4iJjACegKd7tX66hkSGGYZRCWghT5ahzjSckxsRC9VXbBoWjeKezrNM",
  "key7": "2Fi5b51e4HVGNGekNDCdCFw2e6BpPo2k5pTC1aonjEmYDE8yDgAi8n4hGW9hRqjw59KTBJLPyJvqMEoKEN9z3YaB",
  "key8": "w5nWs34Duwnte85K8XfJwKo8Af1c9uCY9nxL51WceehCnp2d4TeY6Zb2Z4TmyRAe1shNHYYb5eedGjZAkqgi1NE",
  "key9": "2a2LRVcugapLJR4DxKA1xoWhwwtfZfXgxfcUowPkPoq39NJvpJ19aKdgKJR95QRFrKFZHdcHmsrneFxViJ6TenHu",
  "key10": "5okGB2hnnhKDnz2RW2d6Z8CzjLgbz6sBuiaUpUWQBEtKKet8B5Jz1uoTJRJnh2QdtenuCGnjUwVzgTj7Ne7g5m7r",
  "key11": "62DZ1fPYzVgY73ioX3eEDaFdmws2jQmc1gMYB8bkUwsJvz9EQJuuvsxsV3n9kKNFS1FEdhL83przvNVkq8wtXPJZ",
  "key12": "2jsZHiSUWiTQM45VEJaFzbH5QQspTJGH8eNT4Ek2C1apV35biQ63y4qp1f9hcoEzhPx9PfLzoP88msUcv5T26GDR",
  "key13": "3iLyCnXPRY3McAXNXqybqT23rJsEJvCZKV1MNgpAYGWe3DdUAbr4aUDRzZZyjYM7zB6uu5Tbx5uhruhArUza8py7",
  "key14": "4Mw97yK4Y41DsjLmzuoM3L6DjMkgw4CGp9nWibuAUasqQB5zQ9u7UYiD8b39c6bNeN8SgizvKY4c6k7pPkXGU4sM",
  "key15": "5EfnVHd6HfXCj45VyZhKAAboJQSb4rieZjojZUDWwS8tBJixCzNTCrAMEwAzemkodUSecx39CCVaw29Jo7czV4A1",
  "key16": "2rtsfzp7GZ4dtx9bEp6cZgGTY5a6WDKyrGhjPE353khg9j4wt7eNtrex2J2mKigmMbPd2kXF21EK4K9F3nyfqAj",
  "key17": "vwKMMGUbmsEnnJJnbBkzFx43LZdQTxmUGwp92EragcFfJJrWfRzbux42wCDgDStxcR2MZroPWDwBLfypdLMPy7a",
  "key18": "m5ffE5CrX7kFaiumuFWQtUyZ8LtSMFHfov2XmTyRbTydUGGNpoMCa2hUR4ZuyKp3aDdLau13NsCNVC7aaNuAKZw",
  "key19": "4mNKD8L3iPMCLnpcYEtw3cASvoXusfXgaqBvTuERUuSYA3rBHSgePVEjNE1fYkHnZkZawRG3FXxitM8MEvL81fTE",
  "key20": "ozKz3PfnXW5es9NpGm7cY4wwBq8jUGJaaJ1uayiNFpmwciKc127BPqEdMcNSct3vg64hXz6kMXbgPH12deZUb1G",
  "key21": "2EYEXxoMZFYsMtmfpCdPHpvKTaF7LVMvMAcyaHg8GgCNKrZs5K3KygdePLEjrkWrYYqGF2a8YGLCzkXP9KkRkeKF",
  "key22": "3bSjETEpBTZKNuVxxiawXxx465qQ2WVziLTRWR6cdderQuqWBaMJbEw3pEruPXYD4h1hZjh3ma6bCt66E6cTGyYc",
  "key23": "2zwDvkKouv3rQSr3EtvenAzWW6mXKLPBJMVafYnnoZanDu3G1gfz546JhSj7Wr3ULWLb8CyvKAHaQbeun2CHVxYf",
  "key24": "51fE74c19S6wV6pkadzxUvgZetK6nrnpgjWxZa5XFXeWcyrx49C6BRiZLCD1JpXM3i5gaG3BxzSgq3FAp2UvBmtA",
  "key25": "27mCyEJexTYKpxuADeSaWvpSrKdXMdxganmYSh8BneYLCurQiHkqigzhgdM8ewccpXPRkthmb2ckYvCfGa7t4kUe",
  "key26": "27voU9PT4z51bW6kUZtwQaMnMe2ZcT8366f4BfZaahXrFMjGLrfUQkm1ppitAoLf8TA3zosi4EcqyXCtJrBWyejs",
  "key27": "3PL5m1yrdqdx9zTJ8nZpSGa96oGPTasvdfEcZM5Bq2hNKYtywvmSAS15bB1ngbaiPCie9XYVhzWMTU3RM41cipWP",
  "key28": "2bbbxRYZSRTsAYmyMMA43ybRvDGF8EyoYoUTNnVdXN2Eqmr14LF2SiJQ4Rya1VpTWXh7Bekwoks4pZkURvcpwBj",
  "key29": "3muEifDPch395gyvKCe6yutxo33oMRGnmFe7mkbSttt17FpMzg8UC8oYvza789kRH6JF5NpZYupBiZMowvCnd29c"
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
