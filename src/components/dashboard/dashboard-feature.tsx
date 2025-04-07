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
    "4mVVn45wFtqjPoXhXj42ykoNms6MGUhJfLN7gm13uirZtDCqz3nXVGZTYghvuwSDFMtmLwsxUEPshEgsXWA7UyRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45kbEGCqS96GnDuRBuU5LiraAGi15fKyZWtBmDooaasLefnAbxHqyT4n1DL77w9sZYUvimCXgDoVCz8vRdFbXXzv",
  "key1": "4XRMqota6xbbX9PJJQkdqcdUtKGn4dA5ohdgRLuCdxBpmdB2wGfxqbcEZowx87b14dUK3wNz1mDXz3KRiCyHnsYx",
  "key2": "35jhmePjaBv7uAL2UWPwBt3U5tNLQEiPH7gUR96TRKw7Q7Hbw2RJrk9tg6cM8a3mA3Z6vwH6HtZMZeMKE8qxaFoR",
  "key3": "49pc3PdwAi9bp1iyMfXPMVnmyY8wFM1vAjnWMqpBsvcd6TzVcooAaBZqJJEH8SzgsookbTkRo8T6o3rENnJ32TY6",
  "key4": "23vTVyuR48Qvv771vPbfPP5nNx7FngTHy8eaByHav2uSLtiYvaWVT5sBaqr9EzxVUsxafAKSQ7WjxAjU4xt5UDfc",
  "key5": "29wQmzMuL8Za9AsoSSvvSkWbAnkn6UR4dyD3W1vQRJhFaw2NyqmPjV9HcYoeR6oeryZBfPKL2N32C1jSe8fCUhYb",
  "key6": "3NpLg5Q42Z7Ukm9VthDhGVab9oYrk4gs7yZc2jTsc3WoJyeHoYhCLiJd6S7fnaXE2kSSbhzyHK6T6sT7pXQfLEin",
  "key7": "3W5WcJcB5uXr6bMtGwF9UVbQUmnxqrzDeffdLtJnxupuLzauAhugy4tjegm6rPRXonVmMSTkvoL2dgeNMknYADdM",
  "key8": "FABTeMJTQuswASNRQQrbhpmceR1jJ38iZBPgeHz8UqpG9DX6xZ1s7khQcJVXfkgHhYfvuFp7Dt1MABUDzsBxauh",
  "key9": "2YbQJCS1C5AqhqZwyeEoUZUHLT3ziWvybUiLBJr6PYCEA4MbpSV1McsUfGDrpQdYKUR9EtZXKwX39pTPtdUqwk3C",
  "key10": "tzrgKKWWi5xSEhrfZRjzF5i2PrrcE26K7fUGBQxrrgL1dPrPh2gRW5RBgHBm5RFz9oQ19L4PRBXvpjTZiLn11Cz",
  "key11": "1hbYXDH9SjzbWzVpSfbZAy49rkaEP9eAszah42v4Z5FZUJFo8HPDKd4V7uk3c28vmmSn4c6Z6x7TCu5UWj34RsH",
  "key12": "CepipYuYkaHsmVDEPybcRYbfrRtm5DmDcnPvbsmjoX3iNFrcPvM5hisNNuLLuUpHKCd7r4RuB85Mepx39yJWbAY",
  "key13": "4FUdFJpaeXaHd5mbHYtCnJ73yZELXdugqSLcorafXUZwbd7xkeXsWrBU2nFFX2Pyxd8uzCBz7k5MzPCm7df5ZmKK",
  "key14": "2emSyR4tb2uea5SB6U5bsA5aCtn7PzqnRy16ZKv6uauTp1ahW7KJE3JPQVvm6GeNdmJWWYSqZDkvvrQRZiGEuw84",
  "key15": "rXUwjzhC6iAVyzzFL7rhVKwhLipvnV99bEMeLDW3enCSLZMqm38tqT3RFCNyXSiiYJiadT6PsU8pgLaet28GLMa",
  "key16": "2SDHxAsFtEhN71biS4fhhsNx1EWxgzS3pVPQEMx8EdBsnRtPm55EDZRWL8NQdoBjDr6db4QtwjA5VfQqhqBLaePa",
  "key17": "5cFnKH3QnCr8xAzazkfMa8Jj277qY2RMeD8tyLTmSMN9iECut8sHw1yGQkangNqChSFcUQNhxzt3Wo6gRavd6bYE",
  "key18": "5JwpjReiZG7EvVT16BRu6qFHfx61gvYJ8yVUjepQPrZKLaK4z3VB5i3Nq2va5nnFTtX18UgesmLTYuXSr8iiavP9",
  "key19": "5r61Nya5ADESF3RS9vvhmH1vbY4NTdx4AfVVRqv6dv9qKsaM49A4TPhinofvKJzHpBRDUsHENorBoPhE3Ea4q7QE",
  "key20": "Dad8NgDtEe7aCNVbP5JxcairAaH6qkj4uhbS1c1tb9rbs1Pd48xWCqLqdpxuBHrPpj5YrzSSGgGzEUdWgBch6az",
  "key21": "29H1Y8qdmMs1Y8eWSawgqREecnHKMc176NU3WEZxhXimYqLCuwbPNfF8XYHQgagv9C2X3SimmvPQxCx2hGwd5khX",
  "key22": "Niun6azAxbJ7kesbD3THf6ZnpmJgG624W1PcDHWdZ6SUaxqeGG6FnSNG29jPYaqdwqZUgiagEJBURKeX6NAHAR8",
  "key23": "2DhBoSd8DQAns75vgAsmkmKuvc53bmLPXPbmXTE4J254sFReTQG4Nv5hWejCquhFViokvm493YQb9hKaDE1GvWeN",
  "key24": "4UvYKQkSV53NocinQrQXeZV9EwvKcFxBLrE7MJXMJrC46umcfXTxi5di7CqZfCaigBndky5tp3zcU31BxX9dvAuz",
  "key25": "2bnFNU9sifavRoSZdFKEzUtg2o3RCbiekhLp8b2Qu1mvdsMLCfoKBtmL17YXpaCdZU96gWVdm5Jvs7KFKbnjm8zJ",
  "key26": "53A1HrhWv2SiefX66vndHA7EPrKsZKQ4wP2APrMuUhTuZPbhTF1Yr1TbVvaQCriFFbqrmUhe7esbrmk5btyEybDq",
  "key27": "2SssQK2Y44uGmDu1drmxZzWuJgwNro2nT5pPHBJWxhduS9e4nrSGheXcjUNnoGnY29SCk6JmXAP8Xzj8edhp2suQ",
  "key28": "2Cm8VvrcirTaYo5iT67BQ5dVgSUYVXMSMdSRFYf9UpaYKU3s1VXCV3bt3w7pbJkydjtJBpHkTSsSjCH3mbtyAHa2",
  "key29": "2ytYX5P59bo6VFmK2L7UP7NhKuYJkEiN1qZK8KDb1HSmHvPeXXmMTM2WP491TtztZ3Eor25PVt2y2q2dnZbZGVCa"
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
