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
    "4szAvHSBi5aQjHQ8sHepM6qun41KGSx8ze6PK6WySt3XkKcf7ubHcdmwShEipBxVzH89s3rEfxQTwy3YvB5ZV3p1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uHaW6ZrBSVAq4B7UerrZoWQbp3aZ6LDTaLKDHUNUH5gTDe2Biv8NRwNurQgiZ3JabsG27VgrPJjFdauKuZFG8fB",
  "key1": "4eNivWP6RL986CuRA2wx1JQofu2Kwawiwqxjbj5wuPpvuM125HLBwuawiivPfYGprRqkUKzG6FJghKzDfcuTQdUQ",
  "key2": "4YrL34TnvKDxM84r5fTPK6J8b8oP9tee5ffHGuV7p6vSvFwGMb6dxdEo3HU5KBsYmQpvtpJhZYDcdu2avtG7LBEa",
  "key3": "vLkBxVmVz47UaAPntZPb3QiwctwU8vNQD1ybwpihrEtDD8NNuMuNWaUvnFH3BeBU69k2e42iRTzB48yzPaurjvA",
  "key4": "3juFsbnKX5cknzussDKvdW3m9S8gD4zAkUEtnoVP5imZm7pKSCNAfHNemu4HoHucNZifSQMkgdG436S2Xaowsu4R",
  "key5": "3KZE8R6uqfXsgZjVL8aoDw2xn1BNt1SZxdqjQEZaw9HvfSau7grZpKhY6CdVxgwfTHQVupaws4RZdCfXGJtNybW9",
  "key6": "2TKWUyhkXGcKsX5SDoAtzB8oQPQhdvmuATPZQ55hQXR3rBpq24cHzzPnUY27gpqbMkPjFLWSJHxeQuJRduXem2wC",
  "key7": "4fBQbtt45b9gdEe3HWaiG1Mqe7vPLvwSEk55v8AJtQPLsikPCm7JYrS3ZanKyxyyVNKdPfundzKkxKJuMgh4k8rc",
  "key8": "awZkMPgoWRgtMKdRUet1KAP9TG4drFFNGLVuHbqXWEygRVH9pjTFjvbHT9rGqBfPhdV96ChiYaVkyHF17Uv3TeJ",
  "key9": "3SwZ7Y1kiz3qcfSZLZMnw6YxNEAiQ1TUeZ271Vir8HCE2irH5awJCfDk1HxHxrDzURcmpjs3Zei5rgx94DB8Gwbi",
  "key10": "4g9j73rKd4rW6icJrSaiGdjMcbHPd9m5XUE5m4TiRMDw4tD3EfCLXZVwnHHroadLUtPKovQQHwnjszaQd2mTHqtd",
  "key11": "2chXfeAJ9X8Nvdh1PjYADBCgRYiro8XNAyW87HZgc1vCgWAyHmS2hVnK3cVwB33kiGtCYUWLX93PmxhxKSMX9DAt",
  "key12": "2Wo7Tc7xyTeX84QsekmR8FhJJS5MdZ6K8Tskvqhm6GCULjiKRVhnM3wwnwFB5gTyLDAYDNiJ1SoAavfyJYJ1tJDC",
  "key13": "JbdUDfrygaGnNoe9kvqQEhARygVWzLnxEchTUJoh5HHtrU3NY75tu313eyoU7mFQAPKUuyhjtujPa6ZuVce7XUD",
  "key14": "2mSxmyNECPARSNPhc3RT1grDoSfSVfo1s9eWoXNuRzH8CVdKpCi3Tsqd7u37F8msgBTBKUQpjzNon5RN3qWhYCfG",
  "key15": "2CMgi3DtjNE2zdgmFGx4zUiRjG6GMBQP6th8D4bQrcgHfWbBxdNgeW9YeTmzVXgF75LiUgSKPfz2FBx78jQ6S5cV",
  "key16": "MaaKSGvQbCoy5e4R3d5dKag4Cv7tYJ3Mmc6ME8D8Av3ULf6VXNUTBu4hS2YD39xTSMSzHHqfpPWWA2p38nDVA3w",
  "key17": "62Ez8AniFytNTXKdhu7peoNqHUNLXZ9eJVCMeLvKKSRH1b5yyg3kcqbLnn6cyLNwKazePjzpSCzmUUJVDbuuHLa3",
  "key18": "3Atje3XpvVePp37Hgd9KWVLgJWUcyLawHMCMZzaKAz5Ex5LhcBabsA8dLH4eDv19Ak4GdvdWb1hraR2DiWBixfwi",
  "key19": "3jjMzNRxjp6uKwFi5BU7Tj2QUyamAi58JGHEaBYAXj9Dv1snCT2nAByjok9jc4cFroPrwzRLjfWPkDDwgKD5AS6u",
  "key20": "45nUEUnXmo79P4mog1fJmUUrCRH5Rgm2Uqva2PvCgrVjdFL1tV2UjCPoMapbQa2BcVATCii63ERN4TuEB3UzEkRz",
  "key21": "ScfNbSp3hsSEwDsnGtKeG9MuB8g2ZnDNCKQMwzRnDf3xpofdCcYa8DhAhnQsjjeCvtbS78VfiX5NxecPPBSimdH",
  "key22": "2UKGMsLyxNhHV6KWMJ3jXfMabf4qdBYDxDBUAh1QbM5moNomv26AHNBvo9xPavJ6sXcoegGqZtbXcHJsy3poe3Db",
  "key23": "5gQ9f5a4yY2UmexKAohPC8h9E3NgHE6nn38FwN9aw3kpB3NXGn6t6oRJnX23jBn4yeTz4tSnhPihYPnr5rnviGsd",
  "key24": "gfiRB4awvPAxcD45eSrmrT64by8SYRig1aGrjWPbSqwdmFtaS4iMuqRVScZJ5Ee4ZNRodV84b1TnL2dzFXvh4Av",
  "key25": "4kdeVY8NyXh1J1Hb7XEt7yQX3se95MUK3XvKa6WhJLFJppE8TR9SBZRoXB6vHveyb2ULH8MQkBsnRxuEeS6oigdv",
  "key26": "2ab29uMsmbrwkuMpF1kjjqPfcRTyypSkVcM51bYvRBC7ShpnYRHUHqNn7NpS8BrgaeEsbMw6TgRoxh6P8sXzZv3Q"
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
