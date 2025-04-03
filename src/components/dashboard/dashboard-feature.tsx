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
    "5WegdNYsSaHvXb3vWN41estxnsb5ZyVJyrni9SWRFRAyTFmpeKUa5bpxpBHgpUs88tEuwvwzG9tVwQpqGV9emKEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PgG8Mr2eEBsBNKfabvvzPTSvEkXit2n6L87PrLdiFg5ij4kz3PvEJBeonAoB4fWFBuNa3j8UBrc2e7ycMnvzUFf",
  "key1": "3t2faasuxmegQQJgFGKAudqo2CsMjpwbokJP2wFoJD5iL2aPYxnqBQ81LPzxALxMw1iq7mzJGoiv9scM19naRefH",
  "key2": "5AMjrwS5G3djWyLMC2jX6AryU4GQwu71UMEvcJGCSSwLSWmGnxstG9L9HNFAxHHpuLEmzysMiEQcKESpRpyiEHFQ",
  "key3": "556H5KhL8FpgxX7x55JgFynxS7JcW4pR6uaGph6vGp33WWpndyZi2A3ntwYwKjF5q4LQE2xbkLvpLepGREFjKV7E",
  "key4": "TPXykUbHd6Y26gy2MrvaNGPSL5tTGbTFLWtRbC76nfCRLS7w9WVzEjcba8rFNTXxisbC2YBu6kV5546Y5WqUuvN",
  "key5": "5pFCMh8X7vQ3niotsvdj1NvjQJuxnyrFzDS52erZ7hxsi4S988ZEfvAStwNUzuRWAy9ZW89ywngtKWwEJuaKBmy2",
  "key6": "65Vbgc5STatuFkphb4KRX59LpQBwrzLPmwrA8x94PXBpBceZ8vR8ZKLcgq7yARGUTdzv3Bt32pCaevjdnSH8oCff",
  "key7": "5fAVSQSAmAGLhNZpZLHoejLR382icNdmyepzaej48bEfA2BvA2u3qAomf9RzeAjdL7jT6p1Z5yB9vYnM1sz7PTQv",
  "key8": "4mYpxMfaMCAxnnXUCekM6vZhQkBvFAx2fZF2CwqGsYHK3inm6ExKFQJkieFWJ19yVN6K2DQa1bdjLnxHiPAw1Rtc",
  "key9": "4VcvQZuocPR8zDSPn9rVCVeVtizdTvCCt9sXMoogzJiPL31P3rGDRV3qsQDHZu1XbL32VBLu7Yy77hD55AcawLk9",
  "key10": "2zR8KFRnBKKkT3gUmzXPu7tDi11MoMUrYn1ivnSjKwHhUn9TrEsuH2iJdCKamsYkURT4iGczNmkQKwFbr8NZj31y",
  "key11": "bwHLhygZNWVdf2tn5myVtzNFQUQMBRNy629VfTfXrg6qcDAhvqG58dvPrPGWL36qxxAhhW2MkRBCtpQo3Phmbcr",
  "key12": "2XhW58e8Boxmp6xWBby9mdDMjdiG8Ep8LYosGzyZAjtnMRBp3onct1KGPfc79TqdLUs5YcW4uaW8TmPBhCTS3UUF",
  "key13": "4vqw9NEsqry6rTZFuLi6JZc4opaYVprDevXxpde6GGCwhUPh7Y741kNQ8ZVCnAwoxxBEkTpgdhf8rw3aNMuP6Hsg",
  "key14": "44q2S1RhtEhkNDTDYKjMcWeMP5dxuEuSinqHE6uVQcsVkxfaGXY5pEeMgZK2c9bYewVY5MsVgnQ9sxdT2PEtWUWF",
  "key15": "dTVqrhowGuLvn1o3Ls8985YXc4gezbaKdfwAuPp1CqsYUfRyG7fV4tQre51Zw9v5kN887tYJMi7LVgbhwifenZw",
  "key16": "4qgDqA961k4h7R9K2VYrFsX75JGNMcrBBw6gePvm8RWkXPJyojtouQv4eBT6HLzNKVDKuBUVGpG3RCBCzN3R7HWs",
  "key17": "HamedTvLSFRLnPrzV9H44mGGjzPMsuJM4dVPKKH5wxsoqiEoz44KFMpskQJiwyA3Hh8rxruBzKBfnsXdA7dE31M",
  "key18": "2BNH8F6F5DHF8GwmDZ5QKLbBqZH6kr3eGKFyQYtG6ujRaKEtsP9sFa6ZSHjky1RwaR11wbvmkTDsLSUFuSmA3ozJ",
  "key19": "22owTjxV14zGeMnmFdezL2bYBA2fXdYagbt8RqYh5Bg9trPXCLc6mapiQTBFha8EYrWuZqpAVMwX2LBXyS6JaFDf",
  "key20": "g7fyNwmDuypEt4HvyxYvf3v5KEijkiyPBEa2xFM6q8KtQrtJqHeMkRkCHQ6pWDczHQdqLbkVMZ9eiSwfjuJ57Pt",
  "key21": "2nWh3k27TXT9XEsQtfxWDAzjzWswM7carHRgDfSQeympDaa1msEPKRsnsHAFn1kWQyUuTG9qMsJAz11rHJZko7LX",
  "key22": "vHBGdVQoTZdfWsx91g1r7Dho2SXrFHgHZRgHVGvjUYwjoYTrsD49mhY4KMirV1Zk5HXiAXQVZbLxStAv1tr9os2",
  "key23": "4Tsy2Uv7f5h1p5HAZmN6vfi3xu8NaNQcSpjFdMr6fQx2Kz2PxdGx35GZetmUFZdrZHDMrDKNbzSMW45Cpn98piRK",
  "key24": "4RzziTfHeaitboQCbv8PQmJxPZBBAHZX4cJZQPBipit9VZkLLTe4irDsQAgpdwWjZQU2RNfyeEGTs8XzHGyfUzbG",
  "key25": "5sTWnvjkLVPbiQEnGZtQBquhsvndURr17gnHY65XJHJaYbeAgzbQZZFVzCaK5iueJRKy1KQqoTU5SBPdmrX3Tzyb",
  "key26": "21Nv7MqigHB23DuYnB2Q5aLri2Rr3ap4Yguh1XyPB5oZqKR7JWYkRSKj8LVyuikUaq9TdoiXmkH4FWNxryrM9Wtj",
  "key27": "xb6dgdrWCp3fGJMuxKa4qgLVpUt4jHZEpbxVGQ4uhvVX4xjbKjrUyyKTKD96Y7wqqXgaVpYnjqsgR1W7j8Axaxj",
  "key28": "4WgMLdz2vQVFmgyc8MipzZPbBDoVVHNnXM755iDEtxgQ85zxT1cNsMg7XZuoviTCe1iqhKCJ6B6abK3T3eT2veWq",
  "key29": "5fMd9HfzahKHCD6pBbtQmQpLX11zrdNWy86inGPeKGXhNd2x8vap5VXhc88f5FYoCUJAz8R1mSEs3ubMQuNnQBVZ"
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
