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
    "2c95MqagoCV3x8o3mmpmMZQRupuhwEnTSGYsXweSLuNanRNXBXCWp4D8NBiPrD3sBk4egysdjZoXaUU7nuNW5V9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bdSykvAFv3SAyPeWRBt6298mujwWXvmcmEA6S8ELgSNvNzQgwjkPsSvMXCkyFsvmh3dftqxGGyMRBGhBZeCzMGp",
  "key1": "3dF2qEbDGCUVoSRq4hRBFauxguE7RNZs6xP8tu6nVXf7WUxCiJUa79X9yYxt2ACmcF6gnq1zLVaeBLZrnkbM8kUN",
  "key2": "jpfeuMWSsCxLiGhS16cdXTrWuNsgUw2SoeaKayRZsis3n7vhex74KXX1F3poxHZLXXi2T9CKKCCYBYH2DGQDFM3",
  "key3": "5FFEVcQ5XPY6GPSmSokAVzW7QPCrSLpxXiuEMd6ZZManEd3wqd3vKQ5dsBRaQE2iiaPTNFLYn2MeYq5yhgUiC4cA",
  "key4": "626pDWXab6nbqpouSUQPmyG1LYnb2eMHQh6VMGUBFmvDV8MSGhbuohnhaAbAsNg8hF9C8kqeHeMqSamb6xBVVXaa",
  "key5": "31H7gYKWTzGG87pRTPEoPak8kRDusdBKozUq2GRh8NwU9CRZ31awgumH46MxcUXHWZfb5hYmpB82VKqgXKvjHD98",
  "key6": "5TUvzPkWUFZWW9ArED1NKT6GMPp7NktnjHhs9eB9JvccuqDxarLUdJUSZ6ZvCY7jJe983m3DeFSdSiL8tVqZNPcB",
  "key7": "4Xw2X3aPe9K5piqTPgoV75rpLkjSJr7w5GYrWiAWkLGn1mQDRDBr7ToFyhvDBkZM4AKGfySaYtXcam9KC7T5dZiG",
  "key8": "5fDhQVyyWT6WSZgAXdib5TcJvL55FFv3vSAZSUiNQuE8BRPAStegniRzg6wY95fs4fBGTFC2EovcmPvEt7tNc37C",
  "key9": "24SkA6aiwfCQNRfcroYtVniPnvcEeW4GuosSCaaF2DpuksQzn7A3dEzKN4rDTQSp16iXXAa6NGUJXoz9HYCcdSbh",
  "key10": "PcWucrKFTd8XZwVunJcyHetgVdC2fDiqCb5h2y2x78fc3uCrzpTap1azw8eDDUjKFxS5WcuvcyafM1p6J71Asnp",
  "key11": "3gyPyGmVbEs3LwAoiVvdBUdbLtXVSp2DakWyH9WRACfwLe8SBQeoMR2o7NPgqEcu55DuHD44bUVjdjEsGdUNGE6h",
  "key12": "kyNVpnqF25wBFDZa7K1SyvjXyKFk2B56qoYdQzdLuuHUf8VxUsiNRNvhtHCACKbj7LyyJ5NJFSU68DKWhhKokVb",
  "key13": "59L4k5CPx5hVFFHASUT1mNUSdYACDKrQD1sLv5bgkwRH64E5akTuHWmfrSsmCtzFXneujyKwgRZCb9YKLxpCLjeF",
  "key14": "5PJ5P2b4xwFFKVWxvCbxZA5wgwq8Pc9sBgnZcmPo39aUbe2Zv7GhS38YwrwsC1peCHShBq6eeq3G8Zz6e6jr8fBU",
  "key15": "63A3SS6LP6yBnKKdmf8Ey2GPuqq1NZzsRae54Ab5tzufvppMQZFMDWEbBTq7jxrJJUvrMGCGEmuDsXo3WcHdnqAJ",
  "key16": "3esdMVSAkm2jpndV4sTN47eEkbV72Lvnw2EvAcWkshFD2uKjvMGaNZ5bYUWcoK6ZKKzQHmnEKxPNfMChWvWF9xLJ",
  "key17": "Zr9jknB2yqhduAm9UpR8UA1b7s8uWKGZsrF2oobM2LksPrjYVTTTRpbepL7dRfgzr1zDnEpJDZdBw5mRDCD539f",
  "key18": "3fkAfJJ4qAnY2aUuyVDXxDGzjEvbSUn2rXPbPfjUzPrGMGETaLJ3AJu6SDpphv4z5veqQc5HNAgsWCuSwCzFChGG",
  "key19": "2fZ4URHVspBqpTyGuVSWzvRiYW7y3d1sXEmJ5Eri3Dtpuux979SjTrXvwZAbsnoA4YQbyGCzVN96cPavpak3UtcM",
  "key20": "2RqU2hMsBt6iULyQzmYkjRwuZHK1FAQfU4Q1B7hT4Gy5aoNWd88FmrjD1UyfSGuWYYDWevzMr1hicwM9mpeUq7qh",
  "key21": "4dNJK6fsAKkFQmbHc5tggd69tbdemBEt5cXCdTBjNKN9wfkbwUZ5vZWkJ4h27dwanT7Nebn6q3fANqM3GpH5aeTz",
  "key22": "2ZGbbWKWFxWiKp9wMorawpoTCRSkSPHPsB1H8sYbhLo35jGdgHM2Z4DjGaeDYJmN4QiyLGDnJDbRT9JiyFrZ7mKU",
  "key23": "3WHwDAcXUiVHJ7v6abiM9djao3YeYeFC8g56KshUk1teANW73FPLzBiykB55Pxr3wrYQrMTK3MKuMt3rXUTBMAE2",
  "key24": "5P2ZBuCfUxPHy8ZpLPSQQguxTo5rpeDaqBYfCc9fHLY9FejVZEV6owKAXHETuJua8Wq8CGYS8zB23FxXYu1hkj3F",
  "key25": "7KNcieuUj8WbdFXzqaws6Z5ow2EX7B5DEmeYyk36PKhnB1j7DdXuRzevd8FeN4JP9HGgwA1UpenaEbZU58zRAKD",
  "key26": "272ESdvCjqRnptG3p18gv7QXYJcpmQTkMJ2iahQmxGAjWE2x3HNFMko1Q28raZApp79eFBWkSNBcLFyjcBPWDVJN",
  "key27": "3YVJo3WjVVRbGq8T6EZaSYLbA3Q65U87q6mzAa37a9gzm9dzpH1QirYRfpaS7toEBsqcovFMC1NWmsBNXGd26EhS",
  "key28": "2spwwVuTtf4rwbXq28i5wtbcxrhQ6971p3CJFhuCV8QJMhwtbEmiXNVd28xLy1k982bXpQGG3cmczcYvcyVRXXcy",
  "key29": "ky6UBeGAcdzBYxbpMU7du5dBRotiK8hdG5qyjbMnTkVA9e7YJ6bQii2SjkADV9zag4LXtb9Vf2DqDyxAkosuGYV",
  "key30": "5XnWeidPLNXLHQDVB9P3GyFhKZWTiXFNHej5H6nruMdVMr5Eb8E9naXFiXN35mDymXuenRjeXyE2iGP12oKuvPSC",
  "key31": "3R4uvTcN5VGZvNnm26uGDnS1LwMcMgar6kY9hErGog3mo1haUH5Ebopre3vJmt2T5VE36Ga4K655hEnqUUzqromx",
  "key32": "3Gjs9jbKht7URPpjqfVS3ia8MLMybfWsMB3Nv1N8Pjk2u7k4XFCNCYSnCMM7cz92yKcs98TMgnawbXG5JU496d8q",
  "key33": "3obpGKHbJ6KvKvqT4M1jpNgQmuWfPSs2e9jVtYx7TVD8NEHYoQPbAVty8RKr63wzk7kRvdjCjy8Gok9QuBax9VRh",
  "key34": "2XPdwsHZaWn6ftBJfp6DGopkko2nJEyBqGXLrgsKdnd7f2q5g2dFfUs9SQhYy7XBw6xodxRfcXdJWswAhLV5dfJJ",
  "key35": "4UBreXE8ofWpkdkHPa6txMF4DAueo2VUEr4a4vCPnQo2a2NcoPUZbfqy2cenAr44pex4ybZUoDMMnxBJJG7S1H62",
  "key36": "ogoewfUtj5jFWmsiMQSGKFkCZeMdBmomiCK5GCW6DShWAeQA8pHd4cUMaJGPqeaH4z7oT7GS8nBGyfgd7198Dfx",
  "key37": "2Fac8JxqDpMh7MuKL57HhRAWFeJmC77V8ExsLybKcGbH687XfSJGtSfbzb1VyyGYSWCu4g1K9b2bv7H4U8B1jrJU",
  "key38": "ZYy1CG4RPRAVLV3VPJhDcK7rsbaLYDtuaT4GLAu72dweJN8iZawVUG49RRj6bmbttkQHfudL5T22Jdtz6sE1BYF",
  "key39": "14c89vAJgJ76S9QScMafun696enw5j5aamdhyVDpLkB4zqkpgp5moFrmXRTrYG4hmgYNWpincgrfZDi7FWnfEWq",
  "key40": "3vvQVtRgBbPJGmH5a3pnBEh2GkHjpEebcKe2CRuWGuyLFayPpQ4yYLvPCk9bZL8ayp2zUJZHV29wguC2GEHWjfRw"
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
