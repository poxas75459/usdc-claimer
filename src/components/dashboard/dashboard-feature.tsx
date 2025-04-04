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
    "4A51Jc5rixqjrxkBFJveEmFSp56CGKRXd6wVdAbaKNpx31dhB9cNjzAQWyRMs6D3DzH1sA1yZqB423RtBB2iVLHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Co2ogigCZ1M25aDFdbJgp3siqZwQNHQNCvNKEhb2h32g3JRzQd39nAkeAtWYM1tUTwP2mQHCwsyFXLds7nuN4qi",
  "key1": "4qaEzv4DPEDXEfE8frDuQZdxSNWAnhS9JE1PzPvUjMofYRGqbykAhYHP4LVmLaxWFPTDiwQGxgjvhcnXXgNzrziA",
  "key2": "4YauEeRwyTNc62YgX9TerQN9fXPQWBaXXpgEKCipmF4VNUodrp4G1YxjoakjGPj6retA8m62JJ2R28icUG86sT6g",
  "key3": "2DS7uu47mmxfpPAKkJ48MfJNZVLQCsbNuYCMNxEpwUjfhd6W99EggEarANeebiWbWR88SAtUf8kjdXK7Ux8fhY46",
  "key4": "5YoX5x2P4gL1GPzzjg3ohR6W8AFeCFPyhYE38iUDLymh9b73fcxYVv6QE1YM1WhcFXcVXNUfTBqEdDEWQNtakbKs",
  "key5": "2DQ3AmFAWFFPAinsftLFvV6QhCV7EsJWwvZsWMjNoFSyUkz1yXHsSqCQUL4M7V4ktLg5b62sBQz2qrXX8QfvvQSz",
  "key6": "2HbSr59RqRNmBEduYS7armdrv4wDGTYVd8Bdv6nfya7rsnnxxmWLa2YQA7Em89cGvzjiZRB4Afw6K5RkUi9KAeKb",
  "key7": "2JrCe7Ky3YRE1MhEgiKMohRZtYoZZmNJhXXYDL4EBSZeNhWpGQQyDXNWV8zy4VLaiWNBawNVY9LKWzZX42iHeds4",
  "key8": "5iyQAfekEbKWUQpLiDPVv8JZs5hiCANhoDxmVKyWDtrvTxBuWVZFQMPT1antvdLiB6AasHHnL79LcwixF2kHxAgT",
  "key9": "5YER8Dkpodq9dekjNTmQ76rA3KQb8CS5sNm3f3PaH8X7y9Hz29USAPQPZCmSgxGACKyhVM9NSYT71uPgmuNv7tcu",
  "key10": "4ZJVS8d9ifH2LZbVgFv13ygv5KumPoghrbVHjxVMzywesoWctvKRssuam8QA6uUGtqLfkQTnGiGjRxe61Gui7y2Q",
  "key11": "6685dQ3ZJJkRDsCkYJidRFopX1hfbwHpSvh4XEG3j1UbdvV9Mrz397P4ZjTzQ2sFcfWonVm7RKJMQjQ81ekCoDAn",
  "key12": "3AwaJGGydjGbcCG5xqGkvENA92bzsTQfagxGRKvAK2KzsSxVZuHVx5hPtLkCGDrSBkKjnXcWXWNr1BMX7LJ52qsz",
  "key13": "3DSScVySWRdXAxVygRueD2ZGXcUbQQ58j5f9w9QbudPeK1sm5oiBDMsoHDvDzPhEUuhxaoZCc1njir6H9raVNaU8",
  "key14": "N9LFtXeuD2KSxzkuFcBRKp1YQ3NsEqeKmpTAPC4KaBk8fw1xr4KLV7HvZBnpY1NLnjem6DehYgYjDkuV2RQQmjZ",
  "key15": "21cCjYftYsha59T2wZAXy91FnEkmVTrYwHvTX5GhRrJVCbUarNCM5fGiCYso1uixRwePsFXfCnuPa8EpeK7prNkF",
  "key16": "4SKzESAdej4QL1tpNitqWr8ZQs7bokEkFBQgYaGTuyfsw8cjtAixWXn5QBrbMDYgPd8qNnYqdwwXpvdYMPCrm146",
  "key17": "2aLUVLCESuWZUNenb8ZKiXn77vpeT8sFmZDnPwdagPcSouKdSibvURoBmEJVgpgYUjvy5fDxxi6ZnJJ794oag4Bv",
  "key18": "2QTuySA1z1BXcXFDXBRmdcHzj2L4AYApgh9ipp55SCvox4XPZWV4g6EuR7wZrFopnzLtvjhPCtNy2CJGvKMeLCqh",
  "key19": "3xn8qt3WX3qecw8oKyZZ7XoDzyHfEjX9r8JVpEcaJi1N27Mem4skr9yBQeXDrsCi22gwPqFVQ7siPoaVnmpncaWC",
  "key20": "66jFV23HrEuBJheCGaGzzFwTHdhst95NtiJu4k1Xz5mfpqBTRzWzUFpvXbr5FCxXgpegbCQBgA3kGCaVzHMgXzeF",
  "key21": "2VELBMbv3BEhqgs7W4yDRWSheCbZXjn54SpgLVNVusdaBrDM7X39fZojK7aZo534SU8rGvmNeEdz9U8RFm6RgVpf",
  "key22": "5cBHGXvCAz9NDvYGzJ2ujdWgJfLAh4EkLswgkLS8net7ceTXGxiDsU3wNp5RgGwGrTbgJG286FbmHLoBUZbrrji5",
  "key23": "5PNVUMPikAPYgXELmCRr4boVxEBXetTVSPFMr72V21aymdm4XjARpSQQgGLbKaDtyN1BJvqhsdYMkrnSnh3R1pBk",
  "key24": "3zV23Mk6WJ8X4Ybu6RYjd7ZHiApoQabjrSRiX9ve8QmFmoHjdECxP4uPdRztc17eG6gE9De13yJG67CxcAYEFVAZ",
  "key25": "3xo1wVeogMoqCyhbToADX31gPBvdLQ8Tnx1rT8udJceEH6wSxYUkxcomw2cEZG5qSqc8FN5HX1tSg7639y1uyyTU",
  "key26": "54Z2hp6TTseyGqHEriDVgTzen2KPeFqDhob1mPYRC5QVAwnkuwTbszEf1kxy5QgxcG4McC44tBWJFawvdhHtVHMc",
  "key27": "5pft5uHvymnnVB6VUrwBhqnKSUnSmpA6CevmgYhPiUBeC9gGKn5FGeDhYpqfMns8rimfANmZj3hfqBUkfKvtGoJU",
  "key28": "x4CEVijnp3on2k3fpN2M3Ps24wnN7jshds5Ld8vT3Jf5vQY4wKGpX9VNAFnkBaJkK3NfM93R12LfPh4FvMYYYb8",
  "key29": "vEB9GDiVHwY2orUKepi5kwHVp5eUyVnRZThFyPPVSci5DeRfZSQ1zg27G8Knv268wqdXX6hSMgHCv2QTiLHtfKc",
  "key30": "3Rkoe4CwxG3c4X4XAmiSybAGo2ef778dPEvjMkUmpMYq7GJP1xT7SDafkyg6rkru18oXAwJr335TgJ6zTswQztCs",
  "key31": "2ZZCkxmnqgKifgZscoLzSq2WwXvNgddj2btVoLKHht8WFBNU3f1AkUiMHoJ9vj5x4Tbuc7rMYupi1Yna48P5u9Jt",
  "key32": "3XW562ynUWLF7RT8nbvt7w5Rkw99tZKneEkYS3tYGxw8K7MbmbaerHKetHtjUkXgUgY7e2FNfVt3UTHTuQZzwvPQ"
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
