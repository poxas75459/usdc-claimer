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
    "KXwNo5vE5ujZLXY1uH5H5LhFaMALdWjQdTBrhvsyZ9uVSPvBezVWnRcRwNxSnvrUvbVgbGi9eCmJeCeTb6mtT1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D3Ze6PyUs2GrrTZTtb92D9yKATCeTjVBa4P7Ut2qEJWVDp1XhqTmkMosqMYN2AyZNLX3gV1kLQs9YpXZ4VewPgQ",
  "key1": "hPXNqjnkHGazxwypFdQW8ZCJW5vtEcGJAmKCneBxVWht5B2onwrJTZNLJTHhBZMDDJA5J4mTYzs7UeMM4qbEAvp",
  "key2": "4RjtCfXjsU6qVUi2hGTahJ18n7iHQEpVSWSRGeM4Are4iC2qUpL7HciJnBSwEexdPVpKbU6dmEoNMBBQZbCrtF8x",
  "key3": "47gwcUgx9VZH1p45CZf24xchQutgXkxKvzm5AEwjwWa7F3Fgj2ZpFrQVVGgmsLfTmhyovhgRJ9LtCWXJbbgC2gXN",
  "key4": "5FBPTkQCrD6xvcTRJzMpPh7C5NhBjSaNeCjMCvZsPF13RSFSCSKZYZP3W9THJfQJbvyoRhHhWPx1UyvQVWH86vCD",
  "key5": "3GJf1cvng7q7YhiK5y2uuK2Wq6qZMWFUBTLPtypB7K85hcS2HpAcTZNHR8LhTvn71LYPTHBRihVV1Xu4nYPn2Luu",
  "key6": "2iC7tBgi26m4mi7W6siy78ULicrvfmrCJeNp9ugSzzp9xv5uVkC2bEjAZp5hivxY7y4eKS9XQb6DBgB8LdNvodTo",
  "key7": "2XeuLrczqqRDyzq4rcGqbXJHZexST2ksy5sErjGQovKhAXet3nYbL1ny3Wa3b7u3ELUGemAt1VhDZ4wN7jXCnhnZ",
  "key8": "2KpzkU7d1sEJ4X6JqfmUXwyCCsGSxue4LhpJncXGunPW65coi2uNXCbp6RWyMkinBrmQtTuca2Jzy3JQpU2obbqy",
  "key9": "4LRVNFzhcn7434f5zeZHMKSmLz9uyQJLKy51CD9KfPGjVCPN5M4X8yq7Wzt8cfq6x188MECwo5EjmFNT5WWiaW2Z",
  "key10": "5MsnDW8qGjLNp5ZH89EXgkZk8QrFPR41kuXQv8D4shMrwcjkJoF2nTYJ3zv8XcM1XSEq4YpYR5Kon7iUMsjmbbqj",
  "key11": "3yqtgcWoeBG7SxT2p5vAimpdKH8bE3P8DSAEpXec5NTTxjvhd5WHCAVNPQ9MjX4oUhuqQwqbs2xevw6Yqi4not27",
  "key12": "5mH4FAUQ1ia5nEjaVD3B7rLXfiN7bhc4qtFxqdL3JZ5zN3Zo5jrrZEU8v5YDmrEEAJueNLxV6WgBqm5LDTzcCj18",
  "key13": "5MUVxeKdSVXLKv5as2HUci2Zzb6bzkjzjgUTQpQwUHJNFjjMP8P3HreER8A4BgS21Jhnqhr6huGGg9gRF7qVu7dS",
  "key14": "4Fe8J7agPAEtH9CSXmYLwjXRhbf9uzxf93eyNBoa45LSSh2oCUEoJocgWQGZHsaRCdSAr47J94vnkfLFimaGYeCe",
  "key15": "5f6RronmFJBqFABukXbVAyJhuAtovvM9F5gjRvFF9YRWVto3zX8tCvJB6iuWEnfChaNKMh6Vjf1deMU1YvpEbb2z",
  "key16": "5GrQ1gTGmbUb7usT61YQFUnpiFpVnhEQnhL6vtcxfLssb7ySHQQnjpecU2e5attaa9x459WETstBPQ6nvQjczmHd",
  "key17": "5996W5U8fmSgtrDXRBeLQo1zsHzuQHZiSKgAKXrz7hTTZRYp1XohkYgZapry7LPuLZiEKpdEfpkNSRp3V2nDi64B",
  "key18": "5zWmwR7wYXoaDwYtSgACwBkAzFU3oksfAxuyszuxWD3KPBNJcfy8yc9VjZRj5UHkYjfnKPAjnUFtNgDkz1BnPopX",
  "key19": "Z1rpyaEFL84rwTNE1huGMLyUGdDRZUZtr12Dk2A7WRwjXqp3vqpegwQbfS8BJXvANFcy8GDurDdB89jRwu1KgyP",
  "key20": "2i5njyan5uHMiS3bDSb7z64voU45VCkpPzrP4zRvWswP5Dfw71ykCUxY6JHp2WFN1ohFPsp2ztQbeFyMpWW9vNBG",
  "key21": "3Vh7HpjSjAPRHgzQhMPsc4uCqAZu48L1pWaik2nDZVB5vu6RyskCgCkRvFeujUKG59pSKjcC8EmVztHhcZtwVLZP",
  "key22": "ENQiyrZ8atZSMFUsXLKV9hRA6bUGRERkUKsUpE4UUH4fmeFjvSDHMfXjfdcJF8VmGicvV2L3U1YLLCd5jjJpx6f",
  "key23": "59MyNqMgVuAJf8nnth9qHt8wAHuonjwjwh41njT6anapy1oPTbD1LY2Lbekr4HQnBSzwzzGRmU2kX5fraxQ4j3zL",
  "key24": "3zqPW87ZZGmkbSfRC7EruWFje212aPqfzPHeP3X4rq9mML3JHKDEmrMNrjXdzBdw37hPmA92yoXCDoaVeNYquk6S",
  "key25": "oP9MnvbXwrtZb6EEyFtbLmrgCqsrqbMWSXvz4eyNpSnx34tEPDTg5DRtW1LWfyBXcj3pppktR2SqtpD2fHqfBPm",
  "key26": "mH4Aks8hE82Jxvqsp5i929wpC3Ys3fiMwVNsWGbMzW3qx3aXDy67gg9ijhUBut39AuWdFHRmc4J1dJX2MHc39Rr",
  "key27": "2HcAeu4qBMHcLChbZeAsRFqiT4PtNm51g2qRJ91z6nUZDWdqeep7QuDF6sk9y7yRsNfAMRSVXDS3zhwkiWU3vRE6",
  "key28": "2mRmxv7dqT817JQakdw7qZeKniNN7EJm6TKEXGJnF44K1QufKXWCSNtRuoPZyN21p9U8DDdrGFTRLL8ywjP8Do6z",
  "key29": "18Nedt8G3dokbNnS62A1JC9hihsKgmw8iVa8VLeARKA93ZYcXMF9KUGwtH4KcFnr7EVuhDxPCT5tcrTb4k2mfmZ",
  "key30": "3HRxefbNGfDJVnV2gY1XNB596u3QkNftVz1RR9uMj4Exu2EDtjpQDoFX1qLG7Pmiwn9MDmutzvBzWc4sKnSohhxW"
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
