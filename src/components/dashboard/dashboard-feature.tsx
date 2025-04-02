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
    "4GRmc9v5oMDuMYVrbK229nAJ9aV4PnYbzUFTz6YXPp9QvFXumDGMdd4AYtcKr4pPbXC8SqDuYGNf3gLQuAvWQ8nL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63cWPgaYMVX1ojXAXKMKYKmd47jmGM59j4aa4JKZQpEDW64tjFfHsVxNrKuMgfmcVtvi4Nb49x5eQvxqywcQKoBu",
  "key1": "4qbWDTux7FFcKrZ4yfkvm6L5g39x38s7d4yEAEA5Hg2nKpqjHc9vVhdXMcZ6TdqyeEZHSSkDEA6v8EPh8NozuCUZ",
  "key2": "3xMJEtcpn38a6H2GtPVQPBth5g87jYDayZSqz888b4A2BfJaFm8ocCmf6AgQ5Ho7V3beNuA3JUDqsAhw9gzERU6g",
  "key3": "2XDP5aJFS5HNtyiyWsfNVEZJkjPk3nYuwcu4jqJ5oaamyxJwkiEzF1Jt1o4pPYAY7K88inikEtEw8UKPdovRXa2M",
  "key4": "3aN7KLADerKR9sxchULMkc3RoMp7VptL11YNBHUePW9BTdi2YJ4UnJ8dWjk8cDmaRcqddH9mt2GVeetBZnEa8Tca",
  "key5": "56zAT3kQBq2qWGfTpGFwa2NPPKWJz1qD5mDxmBFNeBa3EMRf7mqNVrHLRoyKTVpwnnxqJDewmH26TsZcs8VXVXZ4",
  "key6": "w5xnLKHWDRqxqB6UfKzb59URWrpMxzaBS8PE697SMkfwf5adKmyKaWpAGCmrrEkrPPshB3src1wLMqMfxtupDEu",
  "key7": "3xrcLTdj6SPyEJpvcuNc8k2QRfrqYGzBeyCVebV6oFVnKcJudSoxaVfQaNi1V3uUGvw1RGsaB3Lgkwx7FEHthXZM",
  "key8": "3yYjbwnEXbwajZqCXnNFaHmnxtjRGsbVcj4Hk5YPYxGaYcTsQo5uSp4EdJDS2vUSmeiJLsQs7QDZNqeEje7F2Hm8",
  "key9": "4w7NUUrmJnfvL7eG6NbkNqe3e66GGgGBLsjHoSCYCL4YPrbmc7owMa91MuwdmgaiU1BGCkp7DpemKBz2JNPakwGE",
  "key10": "2yLWTdebBYpa4fyYbhma2erkWG2AKY9WJJkiFQXLdcVCPZidvYmCmFaZZVqfX27ee3iP3DpYSwVF2nvgiPbu92d2",
  "key11": "2vm1NL2fJu89kbqekoJK1HNZPRJ1gTkw7YHbwsXvWvbLxNrFJ7Nmk48nVC33KX7F8SDWh4zRVuLveXTVZJjJCxrW",
  "key12": "5uvWdasns7rpQi5oiiShVBrnE3hQ3RpoxegxpJCdQyp63ES5n6enEczQWTpuZH43FZjx6mEcHzPgTaCP48WzLZEo",
  "key13": "4FWxDr82ZB9rsmtijA2BcKHsRAi2UPC2cBJPcEt4jeGDjtDmSXytSYRc1tFFoZH78Cwvi1gix26VM3nMEtJ7GGTy",
  "key14": "3Pwt3BAY12P3YaG87nrDxtYZ2eAKv2dABnbtoajHUzNxgtLyNqyGG2mqPhPMUHMDSUPrXo91xKxqTE48Rxjoqtw3",
  "key15": "3fzFkvZaPWjsiozHLmbQcZC8bViRoioWtV7Fj76HY57zxTBdSNytXJNnNVEiZuoMchMg8Aeqyr5mCQPKP33RJBYV",
  "key16": "2emCXzPQgjkq1tAMKSjo4VL6PR9cgvxdU9z76YG8LqQnNd3S5M1qjJtw7RruzjZEqV9k4sG8G8uNoX9yP2tLizCW",
  "key17": "4bQjkcemxWvUGcy38ZKDojAN8ktf9KQoomnaGakCBsVwzRBVF9kZ1P37r9r26RazJAfU4RWvXv7egd3Ej8GQhD12",
  "key18": "4prJRUSJvoDLdJaKkNcSEzVbgHadTQXS3BjCywc3qopCujtqwFsUmBdfs6jE3zZmL6L4xgjLdNKhwPATqHnxmod9",
  "key19": "THAZSjztVbWsoysTEAGBsgNhMtwLaD5LhKRK5TgjUDBLzWVV8r5CbE9rqpoojj7JBPzWUhmm9TWX3aJSRPdv2mw",
  "key20": "3rgQzfSStPr2LXzZbs2aDHKgyGaVLvZrjnpoi2U7VXH1yDeUuiLGAwd2QmRVY28nYvcHEdzFyrMX3PnRZaTn7n47",
  "key21": "41U5K7LrrqmLeHP58JyZXaxGHmkCQyRijGf3QsVuU9m3oBPotJCT24mWcpgHNMzJ5MRVqrAuGrvezCUSZWZEACsK",
  "key22": "2S4qNgd3dhKQA9uje3ZCznfTV2ejMYXkPDygfvEKKpKVEwfJ8tTsWGiVQxNkVkZxXCev3qTnLAx18Q8PxtgAYmxu",
  "key23": "3NTwFNUCxhAnPGKcYhYQ5biyGW5j16YEKUUgSnm3qgCtkmuwP3557WBKTXpLC62aftQ2gomm1pFqAJwYtNW9aBPE",
  "key24": "5vmLeMeg3qRWXstQd8nYPqoCfE4fYCN4pvCWzaw29KX4RKUbEy93GUFrRSkQjPBueGbDm3e7C9nyRd3U3EYC12uU",
  "key25": "3YJe8qHJ4ubkSwGNHXCCQuJFSFAV93wsPpURbLw2gXwsipbMhhBsmysQDTAWiz7rNBGBwmPcZcfJkFQPSxxAhLoH",
  "key26": "2ixjDHDVdd9MUrsLCct1wnN168LMwfTEFQAHE2BgiYiEYPFP99EBqsFHZattDNNNcupAUCA3XgsJWcSPuG3BDTVr",
  "key27": "zv7n33fqzqBY5X139EMLMSyDvtf8EVqqvP8Sb7rpzGymKFyMngdFBaaB4yYSebpQwLsBJ7cJNrMoKy7LaW64D8B",
  "key28": "21H4xTsUtM3QCv4BMXoEEXM7FM5AMNgMrw69ab54TjEy4NBuiStZzERYJZBEH7WezKDpqm5ZYiEBoTggRX1A6MoR",
  "key29": "2WwXsRM77ex7iYY4BPx5xxAG1oUERZqe1pKPT9DqUFxhXgSFpiXZEe6f5U1WVbJka2xPa1Q4SVk4MmmTKStJHBBK",
  "key30": "2pKLAYD7BkU9sQmqotbwGB1b3xSQe24Y5NjYz6LhBJ1q66hJtBPr2Suj83NpARUEnsqxCKDpqjodz1eFQMimyQM",
  "key31": "386MF62PTguhXmVsT8R8dCe2uwhSVc9bnbmwVNbKkkb3YZxdzcTvDgwRedZ9Tdtz4fNUnQUFD3drSCVeDt8d4LRu",
  "key32": "1PzSrN7ZC3UBsUQcsdpCdVKJcTrGTQ5YFYwck8aR3pKraEdeLT1eVMCHBcoDtVitRgA3cS3WQYgtR5TeG3Rf5pd",
  "key33": "3oE6ueXP5S822WEkCX9fwLRtL7prCMd4SBbZbGdw6xj8hJCMeJpuNumyXZ3DSt7pn9GT8ZocrubBfBxrMYtE2wuK",
  "key34": "2pR8wvKhmsv8DHYAk5FKcyczbaEKAiaM3wjJGWFByT8it7ToDrecWqVPPdj5SnNcYFjJg75PUnd19MgW2sQbwS6U",
  "key35": "5xgFiWAk48SovMZqWH1XuQ1sJhttWSDEmiMR2kewVRfpRGg5DPzs2oSjvkBCLwa6fkEFJPZw5zJNGta4GRUHeZcV",
  "key36": "4AxUkEisjBXAHkBqGfFqJ34Qerzr7piBjvcotNeMSUFWa5j5JgxpQ3XVqE7fUFTBjbUz2pvBtnGu94tKpxcGDTb",
  "key37": "Cj2PQGHi2bVTrCChgb8S7JWSFUbocj4JDjz91Gda8GkdLFKMNNShCBx72n762hrn3rcfNS8Dbar7642mxeYdmXS",
  "key38": "46XCW4rvU9o1VKTr9rPW1KYJiV6frfLTGurXKiZP54nuSmVouZizpXb4KMWnxPPJBVsJ6PsjD586aG9pj1YKNEu6",
  "key39": "41VXb4jn5XAEDAjQbpBrdwdCq6C7VCp713ePQw1SuG51R5eUbrf7LxwqbYzuqvmKFEqCUe9kt4NF2ewFGJ9PmooH"
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
