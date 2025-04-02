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
    "zZL3aNTfo2LYSLgp6HVR6hYPZ9dcU73y3NUshrmQtKbN3Ns7u73A7F8p7T2dXFt23TNcbStHHHTWn9RvRe42esM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aHJSPk58LPEok9JivRuMAzj99MNNkJ7W3Z9WXYfxMtHNnDjFxSxFDxp22txrrxLNNdzpEJN2YmzGoMw8zqCpwBR",
  "key1": "2UVU1sSvEXioHd2XYkyTKgnHpkvH8o4Ax8wcg5XhJYuxuYXi1BL3H6kwUVU1UcZ85Najjp2dxQxzdp2BKrvWd8c1",
  "key2": "3PEprAP7XLWjmHsxPb1wuPGVLgTYEbMKPtMr48mR3hcuZyUqppeskw7Pgs9mwXCtbb2g1PP2fiDSJhQc6cT117Uu",
  "key3": "2ic9CUToEe9osaVgjzzxawFvhBXdkaij3173sGkzNR454vik6qK5Lho7crNX1o2zXJLjZffgvrWhxZpUVN7CtZSU",
  "key4": "khuTXAvYCdeyqnxdmBPfxdN3rYvceAHYQg8zX9wtrLhi5UFPAsthGToifzftvEwi54m7igLNMiFpGT4f4aNLUga",
  "key5": "wd54NRrjsoinVwbpeoVAKwrECsijheGuJJd7cEQiPE7TFjxXTWwt7eTDVzbzzLS3QwgCwPaXMgUXv4QTJ769b6n",
  "key6": "2GqpUBYZuDqMaEheEx31ZuJ6KizLD7yod31CCRhdnVR92XvibPiucaUVpnGEK9nhnRdfGxTbehN1U8652152uCQx",
  "key7": "4EsQoLZWwjTNVVasthdSqdgxpBpXBecaxbL7kWNusCs6yjTPab8CbVkAdEJ4x5SnNYRhLbfwh2RHMVh4g3JdnmCX",
  "key8": "3uBSJXkZ9Wk1jbSSLMnMRgcWcLZxryCgWfGaB2xkAZbeHso9qdZNc9GyVjguiNQFaPpaonwaJTbyH8gUVSBCPRLE",
  "key9": "t9CjYGtRJV5d15n7aUp8ed269JssSsQmDL1v8WmsRMjzr4FXPpQNWqY4d7E1LHxNo86Kv2bNEGhnUZjMCNTeeaK",
  "key10": "zZnXVHntzp7hv4fALkc2etnbYEyKMSz6dkby89ya2LpJWnDVyDvYaJqEDsTMbktd3YN23rNe1bHazNAzSvaC1wi",
  "key11": "4PpJ3BWzhywLLAsXRw4CJQjxk2PtkvD8BeVmMVtZiATDKdvZuruV9uagaf1mfHNdtS7brFB3VMhs2TbmVg5LSLZz",
  "key12": "WWrZERFoThua9XNGjSZrjcamkgrreKqQ6FmQQ6qxrfMtYrjeyNFcgsSpeouPR2wNubb9PyW3dUAF3CzUyfEfDcJ",
  "key13": "5tPdf8GuzHTRZbnRGoAdu7NVwjSTU5hpeMtzHdQ5ka1g94VdZaGvMJFvHqCuEia49Qd9YUFAdLdeDUaE9reE6h64",
  "key14": "673L8X2qe7kcCwW5T6rDoKY5haXZTEvnJcKf2WSELsG3Fbzmtcgmgp4gP6H1jk71CH1VqZ7W4QwRvpY67wRMm8si",
  "key15": "5BxBqYtDgNC6wi1qpRQuTj3nFZVeiRTXfEkvKnADN2UjfyDxFzueDr5xLo2bbTFUXh9jKs2u5hYT6mWXWMc9Q98Q",
  "key16": "4BL7HdZZMP8Lz4gBVusQ4XZRgbD4Bhzzc5QEZECi6Zbkjs123NWpiaib5wmYW8j3PHRfSU6H4eKaK77bjbSRRQhb",
  "key17": "5cetFvuMcrUemkQ7rLjakQRXk66DtFjfnWvF36N5854PKWmAwyTZLpaEUzdUQnMjP7zRomKFUdbC2pke7CXePj5X",
  "key18": "3jASC6PEhsZPq9sUcPTF4vNx5xp6XYwkSRVtLGq8CBtuFjx13zauKyx4xgwY6GyqHoifLvRqR6F2cS3mQkDZEpdz",
  "key19": "2BXUY8e27pJFVHBFRBB97TUhXP9Wmk2FHes5SVTUdtusoSLVccrSNNS5U1sUpW58FreqUkp1iUwZDcDZXENSfR72",
  "key20": "5fFCqMAdgxC2L6scX9j1kgtLYkvMKVNdXuGB4j6R8tHRnECGtHyFTvKFzrNpHrFffPk9gL9PMaRmzAnMunvNFSVC",
  "key21": "5ssjNsAzHksLXEsy9NFiSoHK5Pbckkq9GwCD55UyZHvhntEVqjg1JvJjcjcZFPncu4q57R2ghk7V6p5abwwEjQ1M",
  "key22": "28kT8RGBaaVXZU8ZaM23XhFigT6PVDMJbtb6PqH6hiNsL3fUqpV2GDTqTXwAp3eKeejj8ahmzFQjQ1y3MMxHQ9z2",
  "key23": "3ySiVFBFSHzMyrdubxd2rSEyKVmpcDE393YNMa4kX1gKSUwdr9f282P5Gmc8ru6ZwSmzt6oWWw8nvuqH2aHUbTSX",
  "key24": "4hUpQ6v4oTwiT1Yqx5yvPnNKW3Zb8bzJrZi6xeVHbFZcw3wNeNa9LWzLkmarEyjN6ZwDaXc3fWGhQmf1Q4TfukDu",
  "key25": "47g7gnqGeAkwFNHGhZFib4oiJKp3AGebEhiwt4t41mvFsB9ZAh15ETuM23fqEPYbeMp1cHreEK3pfY9DmUYpMPdj",
  "key26": "46tprCAEsJHP5HRvtFGVNXbGBtfQbYSL9ewqiFykvjqZQe2rA2MuqjKYY3YFXYQMDdJSwreu3QNdYX1ikosBJCi9",
  "key27": "64pSjGxSPsNB2DXJonUZ3BjFHuDL22YKcHF1QmsrQ8iZVpkiRcpsiMdaKg6sQAdQeCsPtLeq2xxRuQCwgdXVf7c4",
  "key28": "j86zAj4SVhvLyjpSbuRoNcXHse4AwoAefhvxAQ5QbLLgGQTNMvARez7PnxVkwXrYTLtqkU7etyecedLDoEh6h7P",
  "key29": "2G2PR9juaDGnidbRBszFf8c1JQb6UcBUsAB9jigVA5DYivZa9AdaXdpSG45fBfBS3E1mHp6Nzk3ujv4wXVhWM1E6",
  "key30": "KDdsa6TskxmxBocDW2cr3LbS7WuLkGD19sAevJAsPP6vpqyVNGiYTtsuBZkKygSMz8Tfut95moVCmQtyVC3FaT6",
  "key31": "eDmhoPdkBirqJmzmA6e9AK1C3bKnGt5qhPcjvGJdYRWggntvgbtQRQwgVse4HMQ6wzGSQioMmhZYP5sTuwTaAFs",
  "key32": "5Hmbgt8UUJannhG4FyY1xiFP6uYDPCw9Xmn5Dqyw6Cm1NF9XKioFkQ3Y2D2En5HL6s3mNHPbzqaCm9okzxXsNCDs",
  "key33": "31YpZDuSVsHsSEHwEJgxJsCY9Dn6Kp14WnsW3YsD6CQ2BBuJx9ZGbD1ZUXAMxL1ymws2y23Ng2j3jm442HsSDEEq",
  "key34": "5doz1i8ucWXpScjJCw8KfCKugpEnNQcxU7iYrDZHiRzWBg4gfzAVZoSuvtFANstTryoLQEsVewVPrB5AARTQpKAk",
  "key35": "3QoXEUuEcXnmjJygNQdFBHSEiT8hSwxoT8FyA8BBtz625f69a37R4k8Bg6b4XxyzadAwWXzQAgv3Dqm85N5GkJD1",
  "key36": "SATxu6SmjuTimWJLSEvSxvTbwAVRujGK2MmNadBxKLaTUWnq21RhPb3j1doGcPnxz7kc5UYLdgvbCAQ6SMWZU18",
  "key37": "YWjMyui5oEfrwXkkkxBkP9yGjC2SB6C2KxgpMaN2nVPviz8dsNWDyguirtWRZij8mHJGR1i2Gk3kzXJ9ebjHHMK",
  "key38": "371gyBSh2zbdcBYCwcCSCRALAoT7s7tAAoDNpcpy2i6QySFGiwX4b1RHfBe3NCRVoKuVxpthtwgrhwmQW1bBSFdf",
  "key39": "4iJq8vQdZNkWV8SgVKNYJ6LfaJbnocM2rQarbUhEFvpYakH6SYhBDQvCtCLF81CmUbHHREWQjuvs7rmmPSgpAK87",
  "key40": "4tFEg1JD7F6dmtdEQ1dy9nhtDmqPoje5BeBcYzqCUXcp8pRBNqYK6nzU8uMcZ4FpDdWTgg2Yvvp4moSoM3QGUSuZ",
  "key41": "5SNYoLGB6b2M3oqJB6AmxXzT9SNzjsZSwmwMhszzoNunh72kax5FdMuHbkqpdqjbsufypnszUcj3mF39gzpBmZsw",
  "key42": "42ZX5HGgAWUzWjD5wAetviNwpr8ZGhvruQqH9qrLFMN5kFrrRRqQQCg4Ni9oiNcvbzLr3m5gsSSbZsT4vKWVMnNC",
  "key43": "XEsHwYZ2cKKDuFUJZ8Ym7y7MrWYw19Ze2bKkcAcXi87pLaikLq6qKq5ZhzwTdBFbQRDpzYHgZfy6TfCqfJQxdGA"
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
