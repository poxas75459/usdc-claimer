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
    "25rCVt9NBY2jXtARoV7MUiKp3z8VmbfmUvR3XSaWYgLEne1MoxvANoXT5Ls5heLym4Tdf5yYA5kerQP9qH5xHoxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cJyg4reCwhefg68M1DUNaWthDJABi49m4WfY37HaFEkeRXaB8RJySGmau9GPqG7uGocmkNFbkttzCdVV6rCvfm1",
  "key1": "4KXnJmh1zW2E3WFiTvynmCydgexqn8nD5R7pkynKHaSQisQNbFPYgjPiGUi5mhc6zqvFrgizGNkMfqLbyCDpqypt",
  "key2": "CKjV72BLA3X4Gxwetrf9rV5xfkvqhbsTJHAqNG2pnoDtjjt4Wu8oYgPUmjyKyAPx21dMNXaYYfQGc8Euwa3Bvv4",
  "key3": "58h2SKRqt3fS6evrd99p1K7TRXUqWbwL9oH86w7yZNrvv3JopfeM1nSAH1PiaSrZb9wn5Cw8PNhA9vY5mmesuo8z",
  "key4": "3ufUiSwiod5oJUZ8SrsmkaovxQMonjAiUxa6UANAtVY9FzM5PoFdurFR11A4Yv7kXKynK1ksnckkaFtK5P7EiMYx",
  "key5": "MtcEyt6R2HpLvs728b2ah567cn3CpBUVmymwq21iAFgdbeWrUscnGYgD4zKaVQxVsiFWofQ4mL83RqqcbTkhVJb",
  "key6": "5FuRu7nfm2kBHnMWEXgWaHRF6qo4WJdwvofXumekwbh9EN21cyaJWnTWJfPoYhBNgWvZtvgx7Gt22Tunt15AfDbc",
  "key7": "5gzY1HUtabpVa6F3mmJZdKmWHCDMienNLpug2t1nREDwr5amxCEtCc8a8qLXu1aiBzWB3s6GHjLCGmxr7AUwkdd3",
  "key8": "5whWqt9cc9cLMWk9esUsc9Av4zvcRfVyhTfappf4gGpivpx3JTXa8Fq19v6XXFBPc3oMb3Wk4deipbZEeuzqf2uy",
  "key9": "3vrPVZJLpvAf4YGEJ3DKVyRBuwDTAPKehMmUEHn4tVxT2aQ8AyMTzLHmVq6Ezd8zsawA4uj4v9wnwqyir6TLhJeY",
  "key10": "2w3Kg8zMuF5YmwyyCtoq9CRb73En1bZx5M2MfeWBvfQg4hvYMxcmaJTwnpUyq3TmGnX8R5qqpSygAughW7KLd2na",
  "key11": "4vqom4ZAtMCR9VmKgiFdKWeX3NbxepMCbRaeT1xb9UoX2J6j2q22Yq3hwCPHAcmkH72hkDvrSu7H1WDiECguNZob",
  "key12": "4WtHhgQbDQJGSP56nXqXdxrMdfTzUy4m9ZFQvpH7sNS48tA9pZuv3SepgZSmRkm4pTqNiU5yLTt8nJtZ33MKczMb",
  "key13": "4FxR6Bi3CpfmhQEyrdtzDXNRSodajrZNoWoWxcJnDpGrgR83dszYCvzgmpVVctpsyiKEnTnkzWFXKHjykdcVbzpL",
  "key14": "2ZMUHRASUwuuJSTDHpEbb5idFvkjNtmVb6siyDqhSmheLzZG6RoCf4A6fcKH6ZzVonSDbB3Wa5orNVR1DbvQhq35",
  "key15": "2vzFEXHWNjsscLg3Aibd2K4ByErdo69jtMaSP1gRVssMJeX7KvaQydVtWVbgg9gH18hJ5qE8DoGk55bWqd8kgYo3",
  "key16": "5u1bL2erwP3Z328QYc7qyjDkCvYvLgPhfza8CM9Yakkh4kKTpQQuCMRLodP1WwreRyuxptywBP64t7cbEmYqeCDc",
  "key17": "rSMxAfMtvX5xXvmhW8TRWhVWFY3T8DNR8UdMMPydrps3sGzHosbn78HzxGWz15MYuQFEazFoV3yDU7VraQKkTCA",
  "key18": "4kUcK2ro9TPER7gEgV75qV2PGmLNNLL2D97J7Bqssvt58R4mF748qLuWpxs3vvWjFcydzNQrLa86YgW2L67wVuz5",
  "key19": "55ba5oXvSSuw92mZjtoupNF1KwwZECa34xXvyAEixp6MqpYAEeZM8xY3ri7P7ZrULe8FdTKP6UBQVZqxxUMCmqss",
  "key20": "3cPczkE4ZCrpqkV4WL3LDMH8YnzmHRzHWHHSvKim4RP2CkeGauMNWJnkt55uw3PhFV6YcMSHptYYdpAy2AAWx3JC",
  "key21": "5ASbSyVCgjtK6qBsYdXZThSV7DqsgcdvtqhRFAQ2wk5p4v3Wg2a2qDXCfVgyXhnxLG6Xmxn7GZ6WLgdJjh8reMoU",
  "key22": "5yqFrXvT1vPbiuKXGe7e1jk8sNx7C7sHxcAohguR21Sa3Sux1qSMtPNHGSopJP3qHe2SD2xUzDXqZMxv77hR7ef4",
  "key23": "3ZTRhZWPQ14atMdayMbA7Yy9iHdKzSuidFe4haZg5gY1DTbp6vjZVZ2HAeYxf2mLMJZtqgXqDnnHVQr2f3HLc6S8",
  "key24": "2gaMnH3TFLv4H6hbWuNJhK7WAJBS2xQVLbYdmAFWmQfbikpiWViajoJtwCA24SUi8481UR8ZgH7rkxYW2yvmeiAL",
  "key25": "5LLtbbhnKhsAmteR4WYV5Bi7EMVwMgvJoWZmFVzVqS94TiKCv9dzTHUzQ4EuEW2kiM7twFXnVxWxhdWK3VtEifxh",
  "key26": "XXTcVAvo8VAQYMPGyMqGUPX5R1mEVxnDSWaKNJZtvtCTUkHQa8y2hWUBEAiWhANfMAbNiSML2cuJero3pGV4yXh",
  "key27": "4nm7qCQYLSAfH5ofycB1Dkrq3DiszqQ4EB16xDMje6TTofYfqk7WzyM5UaHKP5GnRJJ7hrQ8sTmczobYwv7xzS2F",
  "key28": "5bNEktVoq94JhjyMsUGFSew7tFnnfbHN8DHEt3aVuQSeZUYNfMJAo8qCyD4u46DgbBCQYTw4cANJLpaRaGXb72WU",
  "key29": "5gkCD9FXSvxSKVFoZVCChFbHQ6n95hDRWsij9tPemzLUJz5J3bNZDMZyjPmjFreXbEkqzJNN999ov6PK1EjjcAYh",
  "key30": "36AZUay6UeNJVJQCbymdEgVKb28NkdhYwcBm46hXouUVZsiMp1DTYwomaPk2RfeN7hGpZZ4eUqVBPjdVDuxHey35",
  "key31": "2cKptYzpFLJnKE1KSCtvQrY1Rv2gFSLD8fXUUgrNktDr8LqH4KuiwGapbduaBRUjA8qrLecVJLvGSpTZmpCqzSRp",
  "key32": "rPe3YRzKPxTYoNoVQcasMfLzibHPHMLAucBG913XsJqDgp5PerzNKeoystuh8UQnF4ZnVHxryvzGTc7Ebxbb6NK",
  "key33": "DNcM3XN8RFXHiQYBFSzAZJX3QbrPPxcYPZESt1kg67EBpJMPYRRD17s3bEQr81NWvUHTjStQMc8umJxth9nGoV9",
  "key34": "5nVqWuGnHVV7sWFQbriFJWdNoLC8vmrgMiakgKoj3Y29CK71b15AUsbLHkSwZZrJbJtaiRt7pGniSJmU5tofjg6E",
  "key35": "63sLTCxhY7abWvST3hWk1WJmbQRmARAT2MS6n5ZKtcnTyGBiV661Lc62YPkxye7hdA1PcQjMCn6596ZtTQqHgeVw",
  "key36": "4iwADE9pJWzG3qNfg2UDqF65edB1ZHZ8xtVGVswfquqfGYCEWRYQz2xMovG4B8vfDaMYYXt13eXkME4TLcLpXf4",
  "key37": "4wtuvDaM3Rv17pryPbRyvdpCDByEt4emwvxyVkatkffNN9Gsu19ChkAt1g76cZ1iipucxj9rVT9oEKunY212ExmX",
  "key38": "4NDv9Eq7myrBqkJAv3qcErqqq4RBkyEcf947rLQFXVxhuimd2ANXsc5sWdDe2KPZgnVKoYKhMGm7snRLrJv8xk3q",
  "key39": "mihVx3RUagQz3qbkzFfrGn1f8SauDagTyVfEezKhqGYb53AuC2KR1kkNnB2swvQapVBQcBwdAeAfqcrKBRAgfxg",
  "key40": "3nSKeAFNcPqXZnB7S6gcVW6vJgFAcQDewhpkwoUfKXFFkeZrdyfMKtUYCQ2mqc8Xj2bRr8osPvWYwAjo8GAsJrpv",
  "key41": "3WXymGeTWd1TCCDD12Xkf3qu6XyzTUBpXxmZD8RBcFhaPhApMmVt7JJgLw8aQm23r5DSXDEYGxbyiVj2Jg2HL3h6",
  "key42": "5xa5Ds4KBkxTbfWnxgLxAT2PvT1iSMK25Z3RcUcHBCbWMqqQKVUFvveDpzyobtkWqCyLENKjycisKttmkwGmDFoy"
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
