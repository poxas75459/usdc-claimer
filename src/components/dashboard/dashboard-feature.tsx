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
    "4uuDvULfKtELA1sUma76ob7VxdZqAV2Ki7816bpiUbZ4JEmxH2SwRpTYjUqWWbiieZa2ich659F7UsBjUiG8T5R4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qh3NgbxJPzjDuAoCVFQxRJfarMhKCTjqQXoKx2jNRGcy5biQnQ1ozQnWstPy4Nu4Vz3bd8nMhPiju9Pur6Z6tNe",
  "key1": "2o83Az9HzZ2u1ABXVWURNx3BNADVBBtTnn3wNQPH4TvDnhhNAwXf86E28buVTodFkDVxgFgXu9ddcUx41dK3Fj7L",
  "key2": "2eDtWgfXQxczigzFFj6YWwfvMwvCUDNLo41EtYSztejJgsweog3M5K53K2bExX4X6a5eLHrhjf5rnSqnmGEN2pov",
  "key3": "3FVTbN43sN58gpQ85RwVx86XUAY5XxTgvSiFFnz6CzQxrmT7hMTpW8KQT4yB6HLDqYU2daLBCxoFmXpFXgVFRpwR",
  "key4": "pHYq5yhrURinK4AxRgeCAC3c2x1FhFSFmNBXALpxfBEbch13M5fS8ujdAXRA7iKawEhs4HXJrHQYZbEA3exiWrz",
  "key5": "4SUvoDYDu58UGwiLnMQgbSG9HvPUeCPddDLVTQrjy1zmu2gb9TT779pLpgdtrabYhnVPPqrSdEHQjwrYdQRVCGBh",
  "key6": "a9T8fNn6penKFykCNFzsodSNNcyuabgtvmVNmdLBYGV2iRwmBeC2cyEjapekndyviiCaXK3Q2cB3C5tfxGRW8Jp",
  "key7": "CtHJkXqFcZAVJsJEwVtYtJaK5SdsEPEY3W38hTDH8wDU8cbuFdMZ9vMg9j22NLwgMepvB9GCkm5AVWnc1rhJiH8",
  "key8": "5HAkYsgAVFVgPZMR5Ws37ExvE3qJrEJv5zcW2mkdDN5kErJZVvbiaZzkEv5eKSB1XpudFr33M23nqv6U1yZGbQDT",
  "key9": "wdueTLKoiDHD5AM9Gy722sHMNQXSFvKfBTSVcGYWnFtQPUPivhpcqudG44vR2r6SA9MbHkV3fjtTr7vhHxKUZ4Z",
  "key10": "2D5tLL7Xq6FUGzdAErK7TUmpSsz8wcEQBmkLQ6yUZY5YjPJsTjAMQ5AiM4Eab4pSWmjfX8rtGKELrgtjipB3soMH",
  "key11": "28RyiBGFr9PPpb32cGatcRhw35oVQ8q74KP4GjWVvf3vNNE2KAxnALVTzJkq3RyBsVJHK6L7vaGX3bfSb5kj5gnk",
  "key12": "24FeJ9ZHfK1nwRjsnRXv9PHqGvXsng364MSZj2vPXx6Ab4UhrQg7BA7psNoLUY3JWa563yeC6HshomW7LDJc34LC",
  "key13": "GNN5XEDKaLELV6PR9sN6s1XJSkYMUUgma1Evu8Xr43pFv8DhDKExR7gnpWcWJKY1sz1GfqgiQLdGgBUSyxPivfS",
  "key14": "5mRj7d8pRuiK1zzH2MacPiuyJQYKtZDK9i4vsEn9z7de5JzbgwYco9cs7Umz6M8fMTKEWohQY3si9xjs6resUrZx",
  "key15": "3BCaxYnqoghhNuPntWHCobj186Z8ed71kMpQtv5V1eDRjezCsBs8n7NFQ969xtB5ARh7kyNMMxetoEUS3ie9DkE3",
  "key16": "5bs4yLASpQiSTqmJhw96vTrHuzh87srmTQTxdywHhpvjxrH7ki6LxbuXB7FhCMHaZLW9vDuVGWX6bEJnQcmMm22S",
  "key17": "3eSaW47DvJq22bMv5dDRy3Gtx7VQjro8n3ZsUsai6E8ReSPk3bSngLMpSRSVWjKSYvapsQaLHrP7iitmPpkfxGLo",
  "key18": "2prpBHJrDMjJC86e81ToL1fxE7BnVodELJDKrmkiMQzgRvEsMSHDPVWg2u9tXiSKgu9C32JBtL3sj3NZWrVrvNtZ",
  "key19": "5kMBRkybEYEhbRgBxtFugZW3Spzh3dhbu7EnofPrM2FKvsNTz6uRd6DNRhVcuJQEAjHzKHaCkNFA4CeYLHjS71uY",
  "key20": "2CxprPFUVwht7yNtaJg2HMYzizC4kSQVNa1Jm5tVuqN2mpnhMjtRD5eZrGkRWKQxEmFH6NYpzcDMxsbSF8AqbRa7",
  "key21": "5qP6jjZfauKum6X2WWuT8Q2dqBgbCWyJPf7pqpSvKzYDH4NYksZH6tGzHKe3zX7uMm5gF6so7uD82HvJY286xXXR",
  "key22": "3is1PBtNvxbZz7VLSuf8mByFwfw2wBrHbA1tYMyFTLgHGGDAGqAJtaYUCuBYRsnpyJGKAQ1LUtQLGHnGUB4au6W2",
  "key23": "2ETfc4ynhiE8cPAsctffWNjs3Nedp6LtFPH35SjKrDvLatr5LcXHHHvXAKJtSioYQWbddBHPvmXgb63SvbKZkVCb",
  "key24": "3roqvN2BCvi9JJh9Z8qTSmox3Hp1vEYsGdfriVDvn26R8T5vPHmorTehZWFTJAeYgC4mdJoxXsAhC2Fxia243PZr",
  "key25": "5C4B7FjdYP9Kk5LzKhFmiGUt52QxbrGERpEXQwzn8VytbSdsviRLTcAtVnuJu6BUnoMnjxLtsEPK4aYGn1Xdwubb",
  "key26": "5MDEoWpPA1ME1qkH9nvroaueMxfYFPjMGEru2m9NC9onnktNsL2ZDgAjEGeNThroAYqC3x6fbrVHSF7G8mQqPuB5"
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
