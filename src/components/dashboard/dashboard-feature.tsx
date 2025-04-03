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
    "548A39a5H4WZXcKUQnb1kPcNpDHPgaVActu1rozruxmgNaM4sLMBRY1wL4nBTtdZzhJ1HBSx6vg5QTxLhsfH1t5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T2pMMdMSFtBL7EzhapiEEgL6RKpSYyCj9XEtSDG6CUdZSXgEUYswzmv23aPGAzATQQT4J7AL1TJibeV6MKXtciy",
  "key1": "5cvyqniT4HU7i1Z5yw58oRKk9q9n2rPScofEz88Xs4RW7NY8wL2pPotsXczM12i4J6sCCxzNdSev7wwvt8DKUjLj",
  "key2": "5KPzU7PRJYSnVSgUeUo4mRvZdJtcoX6rJPQzPonV1vJAG3TYmzBBHaqVEByRsBSZvu7EUSKHJtCVKfwkcdSyKjhK",
  "key3": "3tosUF6jSheLqnbYaXq6rfuMQ57ajoJ5GU8KwR54Pv61AyeKzc4DEPjZ5QCGcrXvpjRyynSf1VGDuQQhZm8PCZP3",
  "key4": "2GAy8wWjA7daZmLpeeowknBSGaktoYHdYJWyDUEfvC1gAadYALfU1kcJP9LdGcc6oSNRTqbV4et91hvvd8LcVoJb",
  "key5": "3a4ypLwEKEefUAVWyDBZcVKQheU7AqqqcmiXRS5VJYwshk9ij1dRixqhj7dYxXshVHHCEH4FJ1vWfGLmns5yRh2w",
  "key6": "3oSyvpKWLhUQPaQpLsicco2zY152D8KFP2bxXJZDAArQqdHGc1VRiBUcuL95rs3wUCdcBKErv3wHGDpTdg8yETDJ",
  "key7": "3Eos4Mi1qKaHZdt2rKQqJjgeowZ4NNK3kYTmehVf1K8xnfACnaQSgmvejuHusqJr4CLxWszPBN5iGtEVLNHF2juS",
  "key8": "2tRF79G1E3FeuN4ApmMYRCfo4xKo4m9BvZVTkS14M8REcZe7ryauurBsBsdeRKePnzbDm7X1mcD629jEFyC4LMFP",
  "key9": "fRBgddQWWEsEnsRxA94my8MrmSJecmk2AxSxHX4Z17G4Htj3Me2Fj7pxy5sbJNA6QWXEXc5p4rgGj3Hf5hZ2dV1",
  "key10": "2VEe7q2Ua8iJCrVQN5yb5i2rwdkcgV8QDErfXEAb9Pjm3sj8kr9HszNwBCRiL3cj7VBhjTrY4RM1CKgggb7N9JRQ",
  "key11": "3Mdb8gLzkzwXbaRvVPXFcm6gtsaLdw6jd5AMebrA1D9XYABZfGPBgXPgX69cpzg92Ue15zq1Eex87L5aPmpSZJDF",
  "key12": "63zTZnk6pZ5cFUN1TtQevPCsz9UhqHS4tTRXYSTMzn2hFutd8tdivVHCtbw1naNe9YyjstefeVhgKYFQ7wVmd8DQ",
  "key13": "fMkwjzbTtZ4aFE73fNysPNjW2dBmjjbaFXdDQWwfzQBHtZtWJqkQqb6TTW3ryr37YVGyeciaS129EUahz877kQU",
  "key14": "25WvWMzkJ7m1g2HqU8axVt2Hz24J15HtFPMUtWDmq789w3cGJjXzVeKkfMBSdgQv9wqVkmrcwxRF6x9GDfjHWqWZ",
  "key15": "44ucR7iBEumDv4imnVdwkQEem7EmpmReXGK6aeLcVmaCUnG4cPRYceE8qXyK5ToiU4PkyDb2G8c9VAavkf9QwJ51",
  "key16": "4KA7d8vjb7g3gpdWpbang4KTCunwvnJ5CDNfYCBBa1g2GpBpuijGXLzB1Zk41T3ptSVZ9sYRqu64RscXxMtayUCy",
  "key17": "QtNTCn8F77pcNar1g9To9bdKwE5gfSUXuCiwPaK7tLgeBwhGrUFvpu6nNwedxS5vqWjeJAAcFoVFaiPW5RFWiyr",
  "key18": "5Zd4pqQbtzu8n5VnYvVkFyxKRS5cQFeU7wXFp3WaUbvtnYhWETGytKKsvRojkoeL9gWiRbQEdMDPLFeF6ZPZr76f",
  "key19": "4H17iosB478PQUkZDaEz5PR2RsyMBAmd3FDxG95KAojAA5ysKfAeCBk5V5ugJGsYhH3QQS6W8LUsfSJqHimPp6wP",
  "key20": "4WDzyQtpbuVet2ZcPWYLkCs184mEHGgh17ds6QvHK57UiPBMvQivxafqLPS4aqQt2cxzeHvNxD2C8Y634kdVwRwv",
  "key21": "8MfCCjHGUtmMNuyaBwFK7zacU7jQiiJcuR2iKTgAVwJXi2cUTr7oiCZubrWPMzgKqKSyuamrx4XBbLYQiAkfyZT",
  "key22": "2LGUsEj2rSd63SZ1cjdeSPsd8NByLVaTNiTmnJpQUyKfFCvLfvjiJfZtrNd7dRkdsEZcYzWud8GaG3p15FDRyPGW",
  "key23": "2RubihU9FsvD645Dijn9JCSPxcESLbZrsjAQqZGCnX9jVT8XJUrvyUNVys5h2q3CCZDNQQcFtkSqP99kq2dDntGM",
  "key24": "3tsMhyp4wU8amkHT8zh2cM237nzfbnUCdLPyju9UNPGScRoiKaqFgnyZ81UJ2SvfCt5NawVsEe7rTGF29S4V4uVV",
  "key25": "63yTVVto7MTCBeQGCfsQ21x2URddujVuC8XY6STiR23VCdhKj9NFENYCw5y51EQbPEBwiC7AJQGPSjwQSYx5Atha"
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
