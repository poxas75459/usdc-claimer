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
    "4DY1mBw3qc6LEJvwX7aKNJmPxvbfuseWKfBjZrCQ8iTayDW4vbvwDqF9Vidz7cbALysMubMisJoFwae9fPaKdyWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64DbCDNEnfWkuxS9GHckXNR6GXzSSrgSLKziuHsbqJACFCMMvuYhcJY2nwBPajn6DvCxFPVNjkzijwo2sYcvka1t",
  "key1": "oNroUmjLZKKWPijsszipmMKnrMwwLhuEh72KsDLPMS1DdnKwWAARArNQ6bxMyBfMXRWqvNJ2oje6fwHMSrfmEgx",
  "key2": "eX8EpVui49Dceq1EtsEYAifoCAyLEVVj1iqCg49C9RU9HXSjEziQnyAUtGTHRSECxoxtVMiB2XYaVZsj9MdViLW",
  "key3": "2qtvYKmv5g6tv9mQ29WT45M8pWjpCQjV8NJnkzQbb8z7QJ7gHPTDDx6298BP9xo2nhWnmuF1ZtyzATcZn7CiJdaQ",
  "key4": "3mXkercvdtpbaHdNW1RA8vvVVXBW8SkW1FtEc4iNbf42DBgEynCbHXHyQDLRBj7vdRpdyjGT6DUPQcnYzaNainfp",
  "key5": "5MY9geRkwajFFDJ89Ya6z5bT2CGZcLtotL6EVKTJJQqUAwoedXXufJ3zDDeTTnc9ecNHnty6P3BPiREVRqUk8ywU",
  "key6": "2AEevbENzuvdkeN1SoeBGPyTM8bRo5W6y9hbxjhchCWaJ4Tmjtg2sASGBkDDGPtJ9mGufJ6PJuX2cCqZCiX3MVA6",
  "key7": "3KTttBRri8nUEHC19YbzF4hkrW3bzz2N21qYQzzwEiPdvXHGcG5fgagXaCDoSE98ZzVVuAa2jbQxw9zCX1oWNUVj",
  "key8": "5TvgMYX2A6YcWu1Smx5fpu6wbefDhaUm9PRWicPv2Ldcp6BgjTiNbG4ftBDQcCuQQF7xqaHTQyjgHmk3k1grsHYD",
  "key9": "5PMqmGpEcrt47AESJQrtzB9JmUJUyuzdx6ch86yW6hrYcsvFwKBKZaGM5DZqYKjmhBbffBTvWaNJgYa5AK5Bpgpf",
  "key10": "5knJMqGnCxF9Ur1qyagQM7SqEtMFKZnoAT9X5Em3tSq5Y8gzrouvCXwY6bnpcapyZQBEVYDCCjJSHWNea26rD3vV",
  "key11": "34kNeSb55tDNnnjTz7WgXAijFhYb649zsGe8MeTg14gSpNSgqdexTzDQZLHLEcWpC7Ux9icp1LihzxGNEHBoT3vH",
  "key12": "2B8Qpox2qYDGjQx1ZTQ5caPgovriJ7UMAwcscn4vXnvhsDw5NNjSFqRYMt4nr1XgHTQCEDPpQcF8SiCcg59NqDSP",
  "key13": "28E9GemmB3X8itwG612J6hEG35rRGSiuryeT9aVz7QXQzLegsfwwDPHL52pFfg6LeSvgmSNr3e51GTSQDTJZvVou",
  "key14": "2QUYTbKMm6aY9dRXMEoWoShhpKopCUN7XpRJ7U4UP3JfQTjpdNzGj7PEhhmVu423Taf7Vgq1Vu2YkoT9wvsqMzK2",
  "key15": "qAL9wcv5VTHtQcvXXEPLQaCrCwaXuwUWKKmHBKcNCu1NpZEQVDGTuQ8LYYYhHocNTnz3VQFhrvcE8aVCyAVNJQN",
  "key16": "5KHG19915d415kPFqdUHjb9LUjcTbft5wUuGnn3oaaHvvvdji1Rmi33VfWdmiiZdNiD3ZsTUhs94WdNXYY4JwkyM",
  "key17": "WBKUWXRLjSybeXUeSPG6aDvYLJTprotRoCqD8wAmcB8rt6LKv9QwF167BSSsARXga5R3KgKfJxVdHt11M8dXgFQ",
  "key18": "3MLVQ7WUU5vvTmd6ErCLijCWsz5R3LsaW1ZfKgyz62RTQGnYFycKmiGkqNm5QTE8X5Ea1kC3yNF7a7wzoCZfrAgb",
  "key19": "N2AQiNxfcbB1KckYtqaQLWezwk5ep9EXScSF9v8jVGxZYoD2Bdb3b2xDhvyuhp3QkVPWD632PzCNJkDzApueZmB",
  "key20": "kiXC8MgrrQQbiBZJu8zuDf1zJS2npV651KxpVBWWBeU84BUy2n3prQdnZ8Gwy1Z9GKszVhDgTLVNb3efhndZ3mE",
  "key21": "3Bu8dFntrbVgF81HSPXoyaJ552UyJYWjGqprE1EsGBMN9c8kwRpMkH3j45EsMS271KpQahmPN2JUxWQqsBJeTkDr",
  "key22": "63Yjx6CtaSEus1su5aKMtdcVFQNNjvbwNYNxqFo1vuDmyCPt7M3n4gsivsM8myTcj87jb34ERSD52vJ2mEpuK1ty",
  "key23": "5GM1BdmTa7gD1r9qePtoFAAZ6fAGkdcz6WLfYgSZHgTbdYJmf43NF9rFPPWKuyHLuYmnyz6vP3fHq1uz7BG2i7xP",
  "key24": "Sr3C4AoiGyYf9hBrZx6jjrWskzUFqf3DemYdVmaN6VJuKqUHx7ei83LhU9b4kmeN44di3oo9TpLry9MuwUhEjtH",
  "key25": "7JHiDpeXaDkxbzJ7HpX5K4fk5Y1iS55WxcXoVEeknn9Rr6ZgsoJ2tHfZWnD1Y7baC77M21dwk3HzXWnUhyJKn6Q",
  "key26": "4Dr1LMxZ4xMBguLoKZ1yyyS41Sda9npaxjEP7vPgDDWvZJUifSv85MZtgAZxPE8HoyEoxvsBgBvmYTjcoLxTtCZ8",
  "key27": "aDjafBH4YkQuHKhurfoKZ5p6raueMKAbNCNa79QRyRCkxYzELrzCjhc66SLPWpmYUojGPzsGxtySa5nXH5kgKa5",
  "key28": "4AVoS6KknCov3XR1bdYLoRBDoYHDrSs1FPVkUwd4MxkEtyi1iUZAjRSSqBQ3aguqmPhRDx4H5QvNFPwPLxogEFM1",
  "key29": "2ZNmUCewKaq4cHX5pMxUHuTs8VDVESHsBrJe2YZJX4uEEFoUmC49yxLBJSTLr3wU9gfvtf4ACaGHqjm3nagVK8yh"
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
