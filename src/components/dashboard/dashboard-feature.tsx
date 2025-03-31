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
    "3BpB5K3XPDNXwe2L7hLRxu87YsS9TQKskmR31He8iqUzkcC2G4UWk34yCioqseArDajSPbXSMFcekzypa6ChvML1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cQgBAPCbLLWmrHPN1VFUfKaJGPWLMNHGyUtp4KbU2YNTtjGGyqae5S6hhMXDvsXoAzEhzDHYQyKEVMPkhxcEsJ1",
  "key1": "3s5Xsd2nzM29PEauks9PRYPC5u6hpaHkFC53gsLDYESCy5TaPaZPnzVeLRzkYpZMQrCbRfZ9xgxHQzTBbdE2CQis",
  "key2": "4AHxQwBZRAWmtsF4u5rePwwth8wR3qEGENxjqJXswBx7XukCUpvTfCdJusoXR6rWAKWeUp1t2GknUMFp3ZGSrtdY",
  "key3": "3RhnCovjgKKx9tTbf19NcyoSaRdskk1qWQbrLCMmVkWnMyBc2e939o81XBP5RBYJERPYZiZnArFG7GymiphSK7NG",
  "key4": "txiDDjZRCuSD62RrvTMk6zJAJ3pcjybauUUbYNW5yJhJyNW3nU3QuyB93E3HmktfujQHueAvD3yCuRtc3eWEbnU",
  "key5": "65zngjeqm7pJ2P9x8D9RKXMBdqmJBL1VuQTf1HjMq5PsHcFQy1V2y3aTDM1sEGN2mL1dijKs95RUdxAQ3THGAHva",
  "key6": "3QjqXsDm9AykiaupvBxWWoofafynWT6bzjrvERGiQaxwCVPHZ31PBkDeSEWC7RaRpwyHtV7qvvSdQTuetshYtALr",
  "key7": "3qJ6t6L8HdKgzEPAnVpGV4Fa8dfz1LZnsNT5aLZFt6nTrHg8fFDmXQjRZGr2CridoSiBGVfks9gqdS2RMsi6gowU",
  "key8": "2YCvE4vTycETe7usJ23VDbfPY2cHSy9xrnTNeg1Tzu4v5iY1L4BtVrxvChRzXsnuLyiELvjnnRKEMLqmdVa5rZpn",
  "key9": "65dK2EFSSWJGn3m5VscLkeLHobxtdSWvPpjGzuV4F5ydz621Ko1J69ZVxtJHTxJiQaagagVuz1ih78A4Cxzy1uwm",
  "key10": "3Cy1sR7WHgTfcqDLWxHTiD8otdCidFUqMR5SeNGURUVWHGNVmCrwL9jGorkK2UU1vE2hWzdg2sHQX4tP98aT6nRT",
  "key11": "4uavFYL8RYVh8XTFhsdp2DvoT2z32JEfethsma9dZTyopFc6GZQBpRqBJKYmgrJN7ibaLUj6mLCW8bp7Z2RShpjw",
  "key12": "5XarP9DrHVRjcDWJ4i84iKnJzx7WvXqXmFEX818owK1aVchaQjZuxm4ndBw1Cpkd5B7haMucGcyc5W5Bs7Mj7jLe",
  "key13": "JfWWmCL1dm4gepuvKfixtKhmbj4sDKu36zkRrGha8CyVzJQDBYxmS1wwbqJXmi6L7AUTq9eNWicUZJVcpcAetvz",
  "key14": "2vJij5Umw2h5YTDTpRaQnWwoMcxNfztCfro5pWYrvR3Bq5q21EmN3dgkn1ykxGJL3bCvttfux7k8xdj5zzMV2sv4",
  "key15": "4LWweinRZSweAYHAtBcsxc68xTSEKRSFN4q83wAPFt82gUijeFzdyPi3pitrYxRta9WJTNoda8Mu64ZeLmrkPNk8",
  "key16": "42NzGGU2qwtiDigKj4kYo3xW8SXhkrg9vVh4pr3Mn7Ks1aaXvyKX2NVQQZNRJbRpyJ9reJwSn8XamJhmEAtSrbvh",
  "key17": "3mMwXMEskix29e1GtU8aQ2SB8r1ekFKJpHqP6wEDx2VLzvYbpuZ16SFjipK9yVh91etCixY26VXqmZgLjFYng1kU",
  "key18": "3MTLN8CMRWnxDPufnjqGJjfFjfDLH4PDUvhW15LN8AVybZWFKXUXJfUPr7gfjjR2P4KHnyULBxgdiegMTyRpY4M2",
  "key19": "3dgKoKHSdv7hdQGjEhYJ6rKD8fLidWVLtqcMEx7aL8Ugw9GdEgZyTntgsrKTH7qyX3RBXHfGfccXofMJgfiiFNG2",
  "key20": "4HsdDxQz3UUUxm7VReVMMZbJLZRsGPUwcTPajQSEtQvu3Yr8kF8Jd6JxxEbWtBf7GcGJdqLZW7o6ftBmnQE6xDqe",
  "key21": "p7y8TMTAhVfbgaCP9VdN16CYiBL5YzjUTQ29UWMVn3GrbVfkMR51MT89Ef3QGsiW4CEWU53CeQgoAbUF53WVWes",
  "key22": "455XoPyhZtDtbR6gGvNSCeGCwMXRG2Z2CwXYAQXwtQxgzW8ytTTsgHMSZvofdwpDXwGM5o2pcKV2UGdbkZwdbYBd",
  "key23": "2QfAdaEMKprcXKHiGzoUZoTNJNPEjW8PFfHNLEH9FrQQGT96yHekfzPiNeSNzDoNmwpkVSuKy2GKkjq4oZvXSJC",
  "key24": "51KwEx5P1tYRNQtp4TXJM3wcWYWY8hS2dsaU1qvWAbtEgQz1auLXAeSkdEoCL3Ee75gFmBz3r75D8gaNMjTCZ2H3",
  "key25": "2LMTUDf2yHcw1Zy6yMFjs1XBLme6AnN7AcmEb67ABKK45pQaSAJRcxeZ2Sx6SnZybdnbhbu7eRDMo1ChGHBPWVNn",
  "key26": "DaGmh2AudBqUoMhAYMfbQZEn515XWiywQvSuFJA49hjhTEP13mK7HH5fUhhYKSbmyeahpeNjMumA8ng1sF4H1AA",
  "key27": "3KKoHKikoCkmMt1W1e2omjb3R2twwci9NoUNUUiuBUefpRxFDqLhXinPdAgVb4zxXiYpLGoHDb32ZccpmHt9AW62",
  "key28": "pwzPGmvBcoMpgw5VzcKUE5eQdHv69DeL6dMVJWNQ3mijRjNfCWTVbwmUpeZyTTidJi5fSAMRSbffvJ1wPhckkNc",
  "key29": "4KW4GTnGFtKSy2vszk6yW4UM5DKEaWjGD3x2NCBKcctZgm66U8YECVb4hnrPS52jhL23LHAXx9xSHv3bk9pVr99N",
  "key30": "5mfRw167hNCsTJmb1ijWGt5n3sy6s7QZ1e8fP88msQJweLz3ZKjWLx6qZCwCaoKpS4RBnkCDUr91UtxwPkvYUW4u",
  "key31": "4uY1x1GsnchP4uUovTeBK3wZoXsvi8dBfdArR4RS8AqsdeSQaFvHPC2anWZuMVcnNKVPvwXAr1AvgM6HCM9jCx2A",
  "key32": "5xVcDQ5DL1VkC7GT8fEBH6FiBKaKPTeUxy426m8fUBYT9XsMsE8yaQvtb6bKpbtmcuExTxWBkshHK266knx2FTCe",
  "key33": "3TwaUvN5nU1TEbHmy16gGTBJTHetNZ4qi5Wi4tg1qJvoXmS53ASb2xng4k7PwNDMx9HMVS1bYhNrd6E1CkycfXEq",
  "key34": "5HAdFAB1mNBmAnnxK49iTddtnp98TUKDiJf858ftHtFaixXJhGs1vjBxFu7kWS8siUgqYfb311wZKJwLoASFxfBa",
  "key35": "24hMMJuVBMeFEyyi6dyCQAQngKVafAehDjCNkPoZCqctdS2iFkAhiAGb2c86KykN3ZrukWLyFkkKfeeBvhvUGZHN",
  "key36": "4fz2isTiynesFWDmeeLiaZFKB8J8EcGgEGDjUpphXq9DEnNdRxd3ZQ6hAFWayq167vCwnGXDvsev6Se9hew1msri"
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
