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
    "5eyQEo2RoVTeJ2HEzFQRk3StPhDTBqXz1ktnS9UwkgExz7TnG9Uo1jp7zQQRp3dhuBRbCLsTMbWjx2ZNty9dCpKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FqVg8mAAd7YzmNiBd6CqFEax9ddtkXk1QrNqCZWNoGuLrUBjJLQmLzXVrbEFVmL3R4x9muuR2UZNrRqAM8PCHJT",
  "key1": "ZsGuRzi45c68gpEQyZ4FmVqdtqbeEpGt6dsNka21RNPECkhXzce6NukZPuSitC8efnPgsyjXETvnAodMkTYyHaa",
  "key2": "5EatqwsLN2wVhPnMjVSVBM95SgQii6nn1oRR4bxxgkZrdxeW2WkiTf5xDXgLnaSVLg7cNSKBVKFeccbC2wjnBddC",
  "key3": "4xn4Kh1jogQwp5cacQHgHEKXoqND6NPWXBBq5owBR1zCuesjPF7rw9au4KMAcyxRxh5L5SA2gyzUvFZyDs2ke5nt",
  "key4": "5hH3SP82Uz9A2v5mCVV6yGdNFKKptunsLL8eo2m4VU6QfJeL8D59agKpaxWRkrT2s1yPR9bACmjqg47LJSwkGwPc",
  "key5": "3a9ueHjWGpwW1JmAsqhuTPLGjDWnkNPRCjWuNt6rMX53zn5fuTTzahDwoSzMof9GN5bDakkQ6G4JR8TofRs9fnTg",
  "key6": "2txJeLdqeZWPFyhfCuKLbqPucUyHnqpuvCXoKuXnVr5Z6c1VvoER3N5zijJXzyR9qTq1TiDgsWz3J7CMAeRfGfp9",
  "key7": "4nLuBkXg8Mhgtbc9YMrRLuCrSZXJ8hfeiVeWKansxjNMgVUZufpCxpo6hnKNTUNjCfqfaoDr8VdYnrLed7CZsEC5",
  "key8": "2hTKFzPPExiLoFZ3FbUqcYAhnandVYEkr5FAoNoVeTDd8gjpBS2M76z8LgtXueYFLisTUTcErQE5TiqyFPpoS976",
  "key9": "CjYvwGfNSKp8zBmm8KRuWBuWNW8WW87Lzx5aR4v6EwvCnjdiFaiJt7sEzkctYcgPEcZMquatyvhbm1eiBXrxAWM",
  "key10": "5cZLDMLnGDFb6fxykWxNgpo91qv5cEZ17o2tyDW2TFRvWJBCBovsKPoTKM71rMpa7sMVrqQrfBhn8JJuAFGUpwMM",
  "key11": "m5LjUpcYungffp9eK9icNVCLxTxosLgLkk4u3Xo9E32AHbmRCwHeQHDMa9SmxPv28UZtejvuioePcQ7DQq8qLLh",
  "key12": "JRUucUo8ouL9iAWPhtCyMWwiUMMFydge2dAjScDw4bSr1Wh7w5KVij6NkwbUc3yFfBnwG9gifGdne53xKqBzfUC",
  "key13": "2pHiXQwgJYizQud2dRDzkikJ4D5QGj48LqYSr9S9yWRfrq2Yg96BDSKR9uE4Rg64D5HHbXSYzxU8agBsUmYyJjpv",
  "key14": "4GRpJmthebzi9EGRZUbF2oxVdpY8m7L14qToafMxwfJqLiCwdXfmYZmzKTvXrL2H69N2xzvdbkbeaBw7AHhR4TUY",
  "key15": "54vJ8rLysuGVbxVJHeF9eghh9FTZpgKGwwkAedEsRqey9RKpqEqqx6YqTuQZGsKjS7KchCLGMAFXxu7Wci7iVCvn",
  "key16": "2WwEu9FGBdW7fSBGiAWovP8uc1cCufL72M7Mr5akbWBBCfYnUM9xP9y5mbp1b4NwLrkZ1gCLyNantgj3d8vcnEjz",
  "key17": "65oaVdWtznDJgSPiqKGpWHvot974JhESngrhQsUg3ZGs5r9tvqKjV7xrDdU44UhEdyEmPGYCr1ukq3a9k8wvwXHV",
  "key18": "gfr9rwMrAzcq3GnsXGPFmTnCX6WpBHRu1UobDyaXfzXKBZdvyT2LiKVgpVSnd4CGXtdQCpLikvAEUpq3eJoWtve",
  "key19": "3Kv3CX56c67i8bM3FMLcLEEcmzjotLhScbJq3s6jZahYKogEqeVU5eY2WeLiDxpNx6XwF4zsoDr2G9aWrhjsRQ2g",
  "key20": "4b8JBuELxDXLeZLVg4htBprBnaw4gVyKunGXK6ujZc5TD6yHrEoJnJaPwZMosKZuwBVG8czkps94AeFNAqgjuBtv",
  "key21": "2oukXWVhRNDy11ffhroH9uKXiVdupJh1tGxRaJ1vptXT6YNTGqc373DdCpUNWr7zUcZb52eryko6KuBUjCGNdeGJ",
  "key22": "4CSuQPqtQe76ZmRBpEXEWNxrN8t1nxXZx2ANpikB7Ni392fMJGMH2rZ1Ntsd2cy5ShH4pkDpt7NCmJUeFWZR2tNZ",
  "key23": "5WE8jkBs9SxDpcQjpcDGCjLJWp5K8YgQp5NDJkMAVYDchDRNzNB2EDPmq336qekQr5teYNQNHjDTLc5fQxCAL48d",
  "key24": "3A4KD6FgP1ETk6qiZY1BjUL5Jt7oGWkQGwMWNy6fZk3fNzYBC6x9QdcS6Rzc9a9pWavvXwcb82drvE9dzsKsayj7",
  "key25": "2Zx2nsb2aPkcAxmfwHg49p3Rq7qsnASfsr5N9cM6Vwm6buuv24hREbSMhoohsaXhJJ47GsBt9YtHvj9DQRgmPcmb",
  "key26": "2kadNX3zfkLwCqsuivvoqFkaiUrhUAaQZUNuRbktmrGedghSqgAurZ7KJnmot9L2Sqa2adAPHnfwHuQ1zi3TW5Zt",
  "key27": "5gudTNxhimiPxpjrHKQjbhoa6S1P9PWKYVSTP2xesS3fN2cUreZzePRcjfHJvVAnjbQpp5CdYV4PuDr5fLroskJw",
  "key28": "4DMFMDw6Kqk7dsLbDeeFV9KxxfypryG3ZVuXGSvg9jvh3EpRMEAwQgdNnu6GB2kmRHJ51hwxBLRo89YPVp3hKXMV",
  "key29": "3LfhaJWMMtbDZ9ZKATveiKvYGKPdAyNiDrShod9RSwRfGFPzRTrS6xBDCnFcC68wSHh8JmBSmDZSs4Z6tuhG7nz1",
  "key30": "5PA9cYCn8YAThb55AKvd75tr6NuN7Ux4QgoHwZUmgevWxXhfgARQF7f4NMokbaRnkVKqafngrDnkfJ2A2y5scVoC",
  "key31": "2cdaLBHfy3VDYC2zJSXoAtgXdmeKXeU25WU7xNYVr1eqxwc2NnRonpqgGkeFg2AJMLKqb5ka6j7vREw7PPewHwGz",
  "key32": "62N2gDgW7CoVopwU7B1vt37mga6XhCM1LxqSasQ84adNCeyZZoedfth34pnT6BrH4CnePw278P337A4QkfCtcGfa",
  "key33": "5X97Nus1EQjG2J7DpyBn44TuDJpVVoPT9HM1GG5G5Y2irvcwa2nhkZwxYCKPNHZamFCSM6ypZBZXHBwJsQvxkbot",
  "key34": "5NMsWUSvwVymsAT4jKnV5DsXonBrypj2ThzP63tLrY2CSFBibRH8kz6G8Cs5ym9oTMEXPcoGWJKbuCVfBJEAZVqG",
  "key35": "4Rgg6PL4wtiZf4NHnEy6CE6xdnjyajBjFjrTgnd6GGF1iqfaHoNYs33L2XrKcnxWFNFQPgu1JkfPmPk3mHH4jziB"
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
