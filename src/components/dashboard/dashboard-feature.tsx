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
    "2eGN7vvdQwwZULrPwppA49fbR8hAL9pt1joo3xnKQFBFR4WuXJMp2ZiVZf6xYL1KFizwZTPZQZUqVWADJX5Zm2JA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AgrjXDPN8R7pgqQ6PaMbrPa7V3ayaTtcSrkCVY3wQsPL76G19mEx53GARMz6UVMuzRr3PkzbFubNm1RrUfmm2Hr",
  "key1": "6469wMFgUSH1nmgaofuEor4S3N3rZJr1RprnG2vuJd49DxMR1beCXBwy2qu8LdYBuG8AtPJHtfqCghiAigSgBGdr",
  "key2": "3k1u8NDHnNzP9qcYPeVQaG3RRqmT8mB5ho5dLqTa9kmX7FP29dPMuxJPFVeUrUG6by5dB6pqdMq5fEGNZ5euAvpr",
  "key3": "29qBMBS1r9pKsyF65gJBV8uQTzxWgAB3cWynqmckmPQvUYoqLxwRTpzXpmjoEWGy2wzqFWwE4YRPj6eghtFQv94i",
  "key4": "2MprFayUaMT5BhUS7zutBkA5amFFpHy2vXK3kyo5Xt5vGCJrugWw2p1yC3qHMYFUXmjfaZk5HrPry9684NQPysfu",
  "key5": "2D33tyMbW9d5PmPB9CgqdZQBetwVfLFFZuox5W6Pso4JrRafz5Z3GRU9pQacrbP9CcacQyrhDpTEquaJcrMvXXWD",
  "key6": "2E8LuoTFuX5FbmyKxBRJjcx4xTwfbpBm47rxDEbrY1TGtCMdDTuBskjGEuxZzZfSC21FVzV7H4RUyXEsDsaGH5ro",
  "key7": "319KC4NC1mo91H3cGR6YpvRfcDAYGPdrDcADoGJcs5TfTEF93J6DNLqPfHDgR7E6Acw3wkR8DbWuPNJn1oUJru3s",
  "key8": "2R3vZ5GVJisaeu2GXvjYdArUA1QQB12KFbDrhDMgeDCvS4U7XTX9KDcjndKGjp2tebLVsccNuMFuSraJ5ybc89CD",
  "key9": "3i8zBU7cKH7e2k3BNouxCp6cWFtu1G112yxHQNMTtEPcKTUwXXwdhLTKJGFbyc6Z1Vr2UK9FQqzFbLi6TxBVrjgV",
  "key10": "3fi4oT673dLtwaAbnrp6ZMpZajPkYZYgJNWEiofDvNE89gcwPSLg6dUWWgNEuf7pww8SUxVYegeUg41fgx66oHFg",
  "key11": "Zp8p1nFPcqtrToHdqxn35JEuVdS6fFp1CL9nTWX4MmDrYzUvJchYK6CKgES6tZqkaPwKnz5YTwCcc7ixuytgXT7",
  "key12": "24xL3DcYEiD4yEAQdchsmcGsTTewi7dEGzcKG7yXiTpEUyWKjYrsDxv73pTe9BmwKVEgkoCCVp6oyAYTNSFUHDEH",
  "key13": "2A66SoGzbNJu2BPqyWvHNHdQxkPLcb5P4HY2KDsNFzY4HiUrC8uW6nDvPn4ep4ZKbctDJ5jrPn9HPGAGxZGuBFUD",
  "key14": "4oiuFSqAcHJj8wfKR8oH8iYis81PRkLzbE4gFXcoriwf7EaiHx6vaCDTgoqfnLCDrU9GrJr5KXKrnrEVZUsVHDrd",
  "key15": "3zz6L9hzA4N7ivVH3nn1WExMqg9Hp14ZffpjhE2D7m24cLh8ULcYRwDfNfhF3XyU4ix1i9WguTdgfyv4DG3oQ14p",
  "key16": "3uKoJ4pWiaSr3mNxt8B6buViayLcHMgqcPeoGnVYCXpceNLsFPHT5MKAYFP92cneyMPxyqxMW33NKyGAeDjuGoT4",
  "key17": "2ymzDTrw6ECgRaMLjce7mL9dDPAKT65Khz8fCo4L4c5XYRLqXh6RM2wHXcXQKPdizwzYb3FZC5K9jv6psHttFz6Z",
  "key18": "2k5seYTMQ6wnEnABUxA7qNTQk1EAEn7mBgiBo99QBNdC152rx7ALBNZuvcaPVotomxrjKF8ki41baHpr2W6oxZXe",
  "key19": "3zqnesCPzoZCHddcQPWqWZKTdKYrcx5xJGmo4iJx24mmK3Q9dmrsP9ZVaP4y3Z4Jkr3ArN5Ts1h85ZLrVJHAjrL7",
  "key20": "39fi8ugfTY9FmiFaMaDr7uVzvTnWbrj3AuVew43SnNGxze13U8GwraMB6ZAvAcmpakdEZCfJANKEinsPMwQAbX5v",
  "key21": "2Lz6L8KzoprgLyFg9rE3XD1MpiEuNUAJfXt8bA8czU9F7oZFLhUoeBkLztzSPs1tUziJ8UomZSbJYTwvsiwe7u1c",
  "key22": "5d4SdyMUSDcwV2tXmNWCFXoUNDDPwo6horZUHMkAW1rCDi7JYK7axdNrMoUkGjq34d7dWW91JWiKpmkPfZMpSAEh",
  "key23": "4K6TthbKf14AxUMq6m4KK1zxTqv5Lk9gZXHnRHvZxKofYH5zT4ne2vMrATweqyaxbkcWee2t85XmFWAqoMQnZ18o",
  "key24": "42n1sZb2pifkh2U1XJPH9MrakVNDidJc5Kz1PFHPCwoKnf2wGgsDJyGycmJ5cYcDSz1FtuuDoB2CYd3vjVwTR9yj",
  "key25": "BHZksJDeUcSzbv2SC2eeZChSdoCSNVDJm3y1dhiHU9paCqKKAwZVJR9HZYCNsE5fnF2qKz7QAEBdLrrRCBfuUZE",
  "key26": "aPdJdmArcxdvPBb8xau2BPVB3wgMzuNcPrR3ZWyXmYR1BSsvUxZA9cDW7d6grvSgSKSijJnhFyUecawrvgs6Ugk",
  "key27": "PEDTndLRb9N4h6ozP96TdZeZek2vuW1hYi2WNRe53xUeiTTwwgojp32Lkpw9NvZRpqk9S4Tebw4JwA2rPKkxd3a",
  "key28": "3SWa63JsQpErPNozXtdCWF3CsexGT5MdRPdy2SmLmaEVVrXkhbZyeUwCchHuXSPKREjbPZCKP3L9JkqdBEGD4Dq8",
  "key29": "JoszMsbTFECfjWFs9uuZ561jZUb7Z47qtqJ4covwBuS1H3qS9b5N71UMu1kyVSp3HdS8Dkd7ot8Efa22r3kDfAR",
  "key30": "5ixmXsDZUCKKETQhNMc6wLXra368B5baPrAdPGqgEitB4T2TEtHE51aW48bT36eHyiF5xiVPRPijGNW5ETmns3fD",
  "key31": "pvYitqVQgqXyLu4qssMxVPgWrb9BH7b4daMwg1wjaDjwSL9o5KhX3nJtVVMR4nx1UnQZdjA6cgHTvHvFybQjXko",
  "key32": "bnWfCpckmRk3xr3WGRLuAtVWgYh2ERLodCrAwyW8JKrgTk1GJsvj4Vd9HafpRv88bmT4uG43Y2iCrFLSQrzbFsj"
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
