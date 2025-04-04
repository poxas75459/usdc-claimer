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
    "21gk6DGyBeZWFfAqwJFHb4yxbTJvpvptJbYDdqADcvLaGza9EW9XTDAu9Xz7D3pn3vfnh6mLSYmiKYmrPMkrCAV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XmCjt72AuPCNJZquYjDkojiQwvrn3L6SQK5kGFeY6ULiiqcksA6UbC1RbFKyCotxC5NGDhuQpk3Y4mYh4QhfLuT",
  "key1": "4mbQ8oZ1GMaovAkhmc8meieQysxpvSaStcZrTXB6LE7vTJuCVdZC6Mj8PKnf1BY7pbb2T2wkmCuNah8vQARJUMRP",
  "key2": "QBYRu92e8qvudK5NADGDHKwWSiYBgsGAkjENRAng2a1idfNbfs8eSYui1XpnVp5qDoph5cWcPgvrWVs1vREoTcL",
  "key3": "9RTikKi2bZAkhAuTVZBzWx5uCC6JDSfujVro4BPxKi8uj7opo8ZzAeQzq5HxFscufSKWc5SdqQ4hLhQGe9ssVTm",
  "key4": "3rC6Nv8tnRipvRNBkRRSUU7N5URFtJrZeYM7FLnMCJRHu87asPXesMa5Rv3bVTRYjVmVSZZejDyidu2GFVrLurp4",
  "key5": "5aWYsk8o1aVihiow7m6NvzR3E3VmP738uf5ALVkBrgXZWB5YZnYqkaY48WPzJb13L4AfqG9L7MuBvUTDfydHrBDM",
  "key6": "3V9RZ6EGEL1qh3ivxYL1bgrHpEXhftYG9DMhFoFQr8RwCavqJ9QDMNbExGDcKTXMA3Lqe8Abocd7EAJEjMwhpfPM",
  "key7": "23TAY4YDAHuJBvc2wzjUeK8BFamMowkJc9v6VSMMf2wB5o9hks5c5CtNeNwFDVgVwuFp7Epk1rQMDiBWV4vwj9Pr",
  "key8": "4Ti4QFKzPRScHnpbJu6tyY4huh1ZBwqNonwHgHnChLiAVBBvEVcDqdaGCU8qRN3jVYTFd7HMLJs2i2tfYKwewLCy",
  "key9": "4zLy3mim66YXVCYZpPhSLrSUDncNK42nBR8818Rq7rboi2FXYfxZ4CLdZq9riXvZDTpK77pqywsyp9pRZtLWyWDg",
  "key10": "2e8EAkAqf5mwmn24G4cptBiT46txsd7xZRyUSSyZadxfngLLgmPoJcCY9Dvbb4wf7LgScHJrcxBvtyyWyEgSe6p4",
  "key11": "2dVtxtvpkfthVnuDFwt53j3a8oRefp3utDGpJpTDSEQvJtvwBStptzYXMf5kRQQH7Kwj4ehmXd8GqgpUucNYYMDW",
  "key12": "3pqrAwmfdp68fDgWfaBtoLu6D27j5YD8Ei52NHyvRqxYGpM9Tm4RgDF1dDydYgp2XyGowDcagGJ2S9wKUAfQkBPR",
  "key13": "VKN52PcC7wcUdGbA3iabg5r91HLZmb1d4VLTt5p2NwR2hX8895WUGeJQiTeS7MA5isG5uT1HCxsxB8RBtPPucfN",
  "key14": "8Q1MpuHtdhLwUoZwpAoHot7tmDuNtDuwvDK8pyoLjpjxRTY9qGTvKP6m7sLA3PSuPtiX2NHAtNcea6X65iLACzi",
  "key15": "2Z3CKnmEtKKg8zB396hyM5VHWYq67fA2wBbJ5LEaQDPwcWETPWxG1NGXCirDfFGtGANF4hccTzZ8fX51TpjcgvTX",
  "key16": "3caA2huXmDNV3Zqk5mb7TQhusARkFNCidztWBFNQMSqH4N5Fnhc4JTFvgoqhL36rWWDgRHLfRKtgDR11aZXgmFpr",
  "key17": "65xVnLFGmR82eG78CqDXYh4kVd2ydrAfmWMwbGYHokqrY4EMFfzVvsPKAV9aobeJXcs7Cyz6dbuD24sCHX7eFjA",
  "key18": "3Y4LHDW38WBNq7DedUVeVyeHxGQbwrQSGWKFdAuVNqrkanMB1oX3dWoKPRKLqDMP63A1uupRS49HtuaDV4dSZgP2",
  "key19": "4zQWyzSK4EPweNdsvsCUmAGyTo7GqXzDUVJ8BAvKywca89z9gwSSDZMxWpiH321mpqMfqXQCNc21NMginTEMN3Zp",
  "key20": "a88beoXDcGL5eFxcs2zavXvzAXuy5CjACY6HQUKQxBgSsThWdKEQuffirSgQcvugmERik9JFohqF2GuKDDp8do8",
  "key21": "4aJR75gRgBVWJGePNcXKuJ4rJtnGhQBTsU6cEBnzHREwTsttHTGor72gDBAmgRTupMLqRosqKLRzQuYwHCzem8m9",
  "key22": "g4Q3GTb6MpHQQ6ZkgM9TDiCdB9cdr6H4VXv4MMUb3pMBcgYWDi9j4KHjDN3xLcSCz4ex7wRCmhLzkYjLiLNdYw3",
  "key23": "5N2kZTD7gENwu5USzQX8qHq3rR9UfPGESZX3XSuq2UFwf1wBZN5CXQfn9tfzB6MTtE5w4wywzF6Fon6wDiRsHveh",
  "key24": "3n4QuR72ZPErikwyhAFpQyNG5WrpkgbBaDEHEFhtgjW4rif3Svi4SozktxWH1CZ2Rd1FRw1LNQbJjvZ1ao5qh8Y8",
  "key25": "CKc8vtJydFtNc9Lg14pP26jvQJTsZx8xSBe6ZYV6vFD4udWcGN4JJS4wmUcPm3nKHsQukDQAoCFESKdrds6PD8m",
  "key26": "4b56o6rMgRsGVJsb4T44bmq8BrpZ9Y5iEu2JNaP8JE6jYqdZTYbjtwMmRR9XaBJcisFyvVrUjXBmdyBeFVY8hK9S",
  "key27": "4hNAiRAd73im6YDjw1x91sJ39Ni1WjfGBM21bHaNuzGnduZeAj8ME1psr5iscuqQxz4iTbZcq8pUKzntJuumPu4g",
  "key28": "5c38xW4TNoKBsy5PyskAF2xAnQn3YFLYZpRKn4P4LFfmVbfpXeG24kX6P45t2WZfzSJiXncSv8DM4pAiXpEUGM2A",
  "key29": "3ySSZNt2fYhZZ7CJcM9AfkGWPdAiN6yqwrchABSbMBHi7WWTcSci6GiZ6JLpCqpV6XSMod4ukR3apfCCPUYLs7yv",
  "key30": "2UQjJiVxKuk82xPbtZfQh1aJBx6qAhkhsCvVtcoZgKWqEx68ZSXhSu9xFYj3CFfRzrKPLuu596tW1nQxVFNiZNhR",
  "key31": "41shJTpwKSczaPw4s6uzaomqsY2erXtKNf15mhKN8d3Kup9rS1tEWpR7VbT12Sdi6p61WWbnFs6VjpJvJzz1k4u2",
  "key32": "2C68iL79WxoYhTDYWGRZZPATskgjk47sFXU3GGYqzzQAWGTp9JZFTVbiiUVvsjEwswGpUNnhumNbUrYKQJwnxbsY",
  "key33": "2BEgd7edjudmM1yHbz3aQvLfHQyzLhexUN1t1kjqae6aKnpfGUH4tN3Ccibo3n2nco7CSFFGdq6Ns43XzCh1Nues",
  "key34": "3DapcFaZ5GuvHg3fMUdpasJV7KYpgbnbMAjFJbcF5UQpGK1wj8uecqnCwoLMF6pbiLxZHbSoEFbYiA6gb5GmZSxC",
  "key35": "46vh6XcmHexiPLT5M2ZJ3jFuXiNBgsoniQX4JTqMGeToajLt7bbeXQcWXQtadY8tgh6zL6zHbDU3w5NnCoEpgu3J",
  "key36": "5Fgmx4qyvLfEuZW6rHXcY6c63BpShZaBjLLkN15FmCLVWVbDR5mcSxmYgDBczZgM9x6gozvsL7HgjFU61RAsAcPb",
  "key37": "5HS9aLqsPgfCjrC9GLrLc2b9s3je9JDuUag5Lf4iSYSTM56eoiJ52RYo9vQ1b8qWy295cKhC1uezm5y9vctMap4p",
  "key38": "Exqc1LinBmFBH97zzvwAArMR58T9YVMpMoWmFypijPgTfMhdx82KwSxH3gNmCuyxSpgHWxThnSVctJGzAV4ZBCe",
  "key39": "VqGWU2xgwDfBReT4fU8PgTLxic8zmZm95e8Uw9To8TyhCdcboeDukJ8jQJxQLKKhnq82jwZWiD1SmmjzEcqWjWs",
  "key40": "5cP3tEZvtYCmKDSoAAEqDYR7VAzj1rMVVCzfgAmNhVLLmBDdm9K3ZtGEVw6Rfs7zdCjYGitPCQHTTWoG2zYukond",
  "key41": "UoYnTkm5cmBsj9337uD7ziNyCt7JgAxFRdnLWL6szRaHwHDHQTs9LjHNF3r2HEGNWnj441z9RVG5KwNhXQxE5DA",
  "key42": "3p2cGgYvyFkUHvRZXtvXzpThYEkykJrgHWQ95vWaebbHNYZ7N5R9fuXpF73dGPSBvwVYswqZPoAWE3vZhEZS4oU1",
  "key43": "3we1Loab9kki7v8qa5Zw1pNUPALUVUivxzWsuuyhJMtn5oPTiufG4dW4JuQHDZNt4Z1UdRVFQdnLSr3Q1ZSUbT3V",
  "key44": "48bpDPcwZw4rv2NfVqta7QeFEnvTEM7pV67NM1vxpxEqDHvhEkhSWQWu38u7UZA1P9t9QtLn3UhrKpPzcPbNRyzf",
  "key45": "2hD1KSyMDzMWbSoNA5jkLxTgwmoT88oDDL9ys2gNx1N2nae8iLcNF7kAbEM6xXVcS7ewXcgKTF1LiEupdp9nujnG",
  "key46": "2uK5vcykWqLyuWPQv2X1UGZdFf4JFkDcEhrzL3nX5PCS3QaESZPcB1HyjkoMiPSQFTaFxJtocE873v2mPPpYQdbz",
  "key47": "3UeSkYVfscW1QtjovsbzpEah54u94c6UB52zwxfv83GzbEeSgrgzJUyxfdeCBqbgkdUBG5JPXc2nVBy4uzz6NAi6"
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
