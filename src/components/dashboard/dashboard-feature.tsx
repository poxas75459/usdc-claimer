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
    "3smTT8pbU6fdwMiVHkMVNbtCGWkLmFqFdpio7Qm6zDo1amPmr3oE1R1P4jMWepoaawzetJhmdiBFz45fXvZjVMQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xKf7ntPPbRhqKkHdVqPmF2mZXAMrER6Tdf6jhXkTzzw9GmGyBvdAeRTpLQipiCPq3WHnPeXKGeW9TyfYBH6r37J",
  "key1": "3HrCS3GEpBpQUrhN9t6ryZw2iGi32EqK3a8gbma7G2kpCtY88vQ3MCboXQ44QbaFHywRUFKeaE5x2DbfhU8YLPt8",
  "key2": "SQxSWKYoi3voybqvA1FK2JmASVGPeKCrsCyJZ9cFgwB2KT9g2EnqjRTPSdz71L3t2yUUUJHjHPn75NEHgYaVXP2",
  "key3": "2pmrkyFGznWLgy4kdWw5KvYmHCG7UWG8qNG1CGJewtyKM8M6y9MVbYp8bxH5rtyiBUhYoy7QpoefTNFHEA5gq7eN",
  "key4": "61NUkV5fmj7i7ExwQMQYus8ennnxNgZ11yUfGM8f6rgSPdoG2yJZVjjNFNu6WzjhbysnmjioRJ1xy23CbgYPXqnp",
  "key5": "4S4SqjbuDYMc8n2RrAbCd3fjYtdXiZrNHJCtPAcyTGiym5NjVTEY3yMLcFQbM4L7nhqd6pXWESAsBZSbfJRsz1HQ",
  "key6": "szY5YUJjdeLFRwkBy4tpkbwMLb8vteLshUjCWpWA89SexF8SVPknsk3LurDQZBhprkXd8iBRDskPHX9uYxdUjAv",
  "key7": "mkXeq7V14gMhteZauZdHdmypYbNmtGNCAcuaK45riYmv4A35SKbTgKzCDA5tiK5vXDPEAcX1cFAFXTvhFtXvA9d",
  "key8": "3jXxdmrrGh4rGejJ7UwnTLoasHPkE3YLMoEfBq1sKAZxXqSh8u3D14TcEYMZS4CPEgqexHhxoyaCPD2Q215k2yiy",
  "key9": "56eYEFy1bmXmPVHKrfGEHxpHN2kBHEHAezYjXGswbX8DYbgKrF65u9EYNei12jsmqsXz312DzwLsDxevwtZquMFw",
  "key10": "3Vs7KBE4E7PFTd69JsmQwBs1J3qn2NKfQqbTPpaZxdgNxK5F7fzTj1NYp8qQWjPn5XBoqH7y6mksi84eW5g2s9QB",
  "key11": "MeYQHHEhaqeMG6xdiX1coV9ipn5DnWcBZVrm9cGiQX7zyqu2no9kEDu9YMNiGA7GurxLL2h9jNp7CQmBycVH37h",
  "key12": "2VGrYTng16QmYD19ZcER1jmHjs3v7KJw9KV5XUgQxfDXHupaj5fLZt7SFFjKUUAHegbEqQZCxzn3VzC3YxvDiJBp",
  "key13": "3WtfC6gYtUhfJn4E6KjiAaYXo5HSKUc8Av54PyfpBaPZAnmJ6KVf88FUt3G2bTy8FdTvYa4wBknyDB98BYkK3a1A",
  "key14": "SiL91io4F46GMeAHZYGcHDog2eCPTPAnARoDSfKFneijEkabFmhsZev1HxZg6WmPCBQ5zVA8eNjbvxoLM7mhhxc",
  "key15": "3uP5o3drArQsZu9J954vkdBhW7EFn7daTt6MaGXNiCZZnhtVaGU6M7rmXgidPLsZUuGiZk9sVckVPrWMAK2E1mj1",
  "key16": "27MHm2asqHpXGMTNqeGxeVbp3dXtjxQY6AH65fGFnJpT9BFTe2eNmmpzArqMbYZD6jhHqKjLDsZ3Rfuij64r8DgS",
  "key17": "42M6Aqo3xG14iqPRPuSaPTA4H7EbNAMKE42FM4MTwGjBuq8F4EqMBUoPKgieiVeMVUeseRdQCbh1ngK8Qa9fLgei",
  "key18": "2JrtBMJi2LEJpDoGAfDGuVf1pV9akLiTA1nHNsr6xgmaRGm3Y2o8WUeqN7ic8kyMEzxthDMz68Vd1k8uUBoQJF5b",
  "key19": "dLDpm3eU11vcwSPxEkMMzRwCxSdnavXybVLypGyRzR8AJe8XCjASEqbq5334Cj28B2wTnqR3i6pfZJSCKeVaKrf",
  "key20": "2UN99GnYCzS193Fu2nnQQqbG4exaPxn3YYE5s7zy3tqhfdffmZpM98txLBeLKAGyCwvAw79AX7ojdhHT7FKYxz5o",
  "key21": "VzLpaM54yRzYsyFDEiPSHDpP5zgS2a9fZSdbYab7LhHiEhB4XsL2GMEM8dXXhmcGzB17gZMSQCdZM3RgvQtcmC5",
  "key22": "2EEa8WDRZq1Z9VgmKYsCjZi4c6y21Fe2u2CDxKiW5wwFQE1poUv7iCDgENxKNgmDxJgWqcmfbwLhGckqfmhhgAYy",
  "key23": "3tTCKwzZwgnGt9cMU6F9AvgUCKha4YNUiEZcXKvVCZ32zZW5MY1D9765FHD9zmUWcPQvEtCbZgxTkYkAuuthfxeK",
  "key24": "2LZ3mzncjjtcYParTsCRwTs2EL66nA3Vxyz1HWwswBy5to929RvqxzcsomcX5UCJLAxET6YB7Qd8Qs1JQwBHoU2D",
  "key25": "4zjDUkSbCmmMazTmhW8wohVXVJ7bgj7GZ1HURJZNt9i6F1gSvRv6ETTTbUkDNBGTKqpS4xvAK26AQx8mHFizNGYV",
  "key26": "2qXDMpWyghb5r4qesuP6hsFiaWXZuwfJ4VTkHmyKmB4LHyPGpoANyMv5GkwWrw4WMCZ3ZHQxYG7CHcbffrrhzmMa",
  "key27": "4URVKvbYvvXUjyREf91bcoCvqzs2D63WTDkZwHBMP1VPRo2grvg9zq5aEGK4uQ5Pp9KSRPrgd1qRELVcNoj7UAjK",
  "key28": "rjHg7QEw6PMU9sjWWBP2D9YZ57MDxzt9AozJDHhWFe7EXPt3jjBJnx9iyZHxXN7X8pZLxqjet3TPv1eMz47uRKu",
  "key29": "5ZJXJbRfdD8G8KXscwPvRzAM3uHQeDewz6PBKFa4wPp29iDN8dUFfrSyG2pTRqFTf6tts4aYAxMCfPtUjbaKc1yG",
  "key30": "nGFJcj8RLHVUFmQf4nSPhuoLArK2C5N3qLAQrcXkQTUKgSghAU5dtLNAo8PDVgdPPDnSALRBjwevusquDvVnrzf",
  "key31": "2S1xQgwuFAh2NR7zYhTAiDn3gzthXifSx2KJdxwHnrddzwuawuDApAGpuPaiQHWz2RiLMBK54Rn71kbRhm4iaZDi",
  "key32": "2zTmm33Ha4cTQ3UKd7P55HefFk7RURTE1F35QYBWjGXmSYGnWo1CujjtkYsZ7p6f5vUsCVxLCLQvsbSoxaAC3N96",
  "key33": "34qVioRVUDwEdDfUEBCNzSBoLhBXKzs8XyVwADtPM9k6Qyrj2WgunCfEnBG7xUMNYwct8Q7WdRg1XtsKv1FWvaWo",
  "key34": "2qDs6dADXq2cGos6iKfrhzYkmS5xDw3sJHqwMJ1gn8PckHUEreWnnYRvcPdSrHjtrsu3giFK7JFdBC44vakDBwPw"
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
