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
    "2Ta8GQanst3xwefzFzQ5zKDH9wx8Ze7qUfE2BPLjWYpDMYJNCjjMmYxxEYH31itQXuc2yHTHFKhKgtyP7rxB6Q3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29SGf7RiWKrE4476ninjBq9YuJpwqfCgGzx7BvUojqtuAQ7m24PSXVLtFALHqH2g1eAinDSYLMjcKZz7wqEsfZQt",
  "key1": "24fJoHPobC3xJvp1twPgcktKAyJP83WEeSaQBShb11nVoWbRMuMPWHVEam4RtoTekon6f5jKNzKPsFoD2m9Ym3jt",
  "key2": "2MCU1kf8sZqehhVtYWcJ7S8nqnPWPyxTxf1iXvwMXyWj2nZJgFpNu8E5CfDyZfnj2BGcdsRWyKgH16Fkqt8ecw1a",
  "key3": "2n9DugbFuLtWF1yyHAUTNWPzKx1ykXUicyg7FUeppCzzgQP8nqh7Kp8WQ59njd4f8KLB9Wxb5DED3bojp8agBKKN",
  "key4": "43X3atVXhDt7Ui3Bfxk5AMswncr7sJe3dfvZaLkip7HomuWNfbiWTDDj5ecZsHxbcbVPR5UAsFuxrQGapLscDjAC",
  "key5": "5e94rQdQ1uh4bDXwFEWzACjgkDLPg5XLvf8927FfN6Q2454oe2MW28Cbz9he33kPuhvaf2u4ZuPBjgRtAp5wvFJJ",
  "key6": "ArWjagq3RDESRgaW3dHknkkHZJbgassXqZNX25nj2DnPNpBGDBHZRYNhdt5GyTrGNREVrCun7wiGFDh97Sc9WdT",
  "key7": "MSyEXnAwmPCjuqdhCJPBpvoSrmQ92mf72VqDNJpDDCPDumPPo78VFxVkygvAdiMdUyVeFEDJu414PChhES8nSSa",
  "key8": "D4RJmm8QArQyeE6zU8kaVMCP2WnUbZVYTL88iQoVCGDUWzJWaeFTxjdyiEX35K4BE2Cmnhs6WnXFSEdCeC53TQH",
  "key9": "uzwBvW5wsmYQHNhe6Rr6PkgndTkcjKqsZA37WWXgpejSMeGqaqdmv3JP9uEmYxJYnSvhzTTqPWS2Ad6yuadZ3F7",
  "key10": "3Cp4HLhdqjYAfmzXy5FVvPwTNLi7NdRY4tHChJPEYTDDBqvb6qsGqz7XhQKvJ8f4XgVpptNjdbERatFSChwj5SKc",
  "key11": "2Ko8AWaRHz8RHHU2eYcA6Ld4wg4HDruxXXJundAsKxK1WZCfDyHV5fdstZaWHmc1XA1qg2uvpJhGQrZgWGohvt18",
  "key12": "4Wdqg2PpzCBaFgHBFdTjvTAyLbtzyGwyA6GPoDg3zQQW24T1obbEk9PeUUxtHwe1g7ej7BmT98gyjL49MG1umeAt",
  "key13": "2VqrhpU4G4XgMxf8CYTdzaYNthZGLp1ifK1wvtN96bDQkdge3vjNKhN3DoWYtrsJRZPGYWHFqeqE9iGBhepK6u3h",
  "key14": "5b5UGfX6ikweuLJGBgoYxUF6V3Redk8REswFzsHE2YPWir21Kkc2LJVHdq5hCVLHeEetJCmTaCsBi88HQY6PPPhz",
  "key15": "446qFXJAzdF77FKr5d1c6UPv3dbPMWzdWdK5ks69MixrE3yB71yEAp4Ddg71x138S4XrBR33PnTZX1B88aAiH6gJ",
  "key16": "2cmZW6j9rrqvxXuJtroUaaNVtKaXjbq3iZ3Vpm6at2pNLKsCGRMfUojfDkwFnGsBxyf7L36JTi2cEhV5oG56fSPB",
  "key17": "29qPLBpoyUrR7BuBLTeTSLYPfhAvtGvvQMdaQExkXefXHV6ZVMdXpGM4Fce1M6ip3nGibFmnXpJMBjNhMEKZBHEL",
  "key18": "5YQTv63GCUkxjpmEWmXdN2fDf5xpxue156EukpJM3ys9tj3AtAvcG2p1JzntnpAptKLQ9V5PRbzKR7Y8gV8G4PXW",
  "key19": "5eF2pLiMkDYBnfyVjTcbZk3DKj8Du2SJBhmpkCKiPCtaA1TPmf1UMFMjisQ4jGZr5CNRDvUiBePsbG6ESEgEiqtb",
  "key20": "5k33zfRpvzKHfLywhyZyXTKr3qnsMBT94ZMykkPLym2JQeVPqHm27c76KdgLgCtRydwQZrnbuGfDUTUHxkfYNk6e",
  "key21": "NiLCvK2Njc1XoD4v2u2KPyrTaYNxkGfSYhpwAtnAe6NTvZaMnfELUt3yxV5DAjzdooxr12oreTFZYMAdCWKh2Xy",
  "key22": "23wQw3SHV3voiCvAGAchvkvETAvb2Mw1Vs85AVKuLrp8YdrfzNHTnhXpAw8WhAmdzafBg4atMugRAnDu95QrwshH",
  "key23": "5QeDKhLZcrq3NLpzeLLr4Uy58Z1P3bK5PU2StaXgfDhiQePjzSoMiqMGoUB3r7BPnhZuQezjrsTdMEkipREfVGcs",
  "key24": "3XyhXVdCZTUpQN3pzNhcGWCoo6scuDc7pdhv2DKqFnpUHqDFW3aWT8xWbbcaKVVzhBonm3fJHuXs8zcyJMtdqy2",
  "key25": "XMTkEGw6sTuLEqkdmkYpUpXA73ir2FgLhzNqJbPTuPPBmWXSZsehqrQViE5ohDQjU2qYzt6SeRfhbqso5MJnPJu",
  "key26": "3SZJDQVjUWCwW898ztz9zeigXM56PCHEUbA2muGGRmr4KSN2rYg4TnLqF1BVHawZck2yRC1BYSxBTmwa3iYCVLGP",
  "key27": "2byyn9bWiSGW7pMwzop2NBUibxsiTa6DBHkEn9CHp846G3RRbMedJvUHRT1hys6KyN3wZHFxRuhhGjc5DCdAc1GP"
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
