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
    "r9bwybdtToUf6NzYKWQvmG2BajVb3QRW4bKqfs5ocqZxxzajo9WJK5XFpoANj5ec5kXotXAtrxWiTTsjt379r7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sW4wC9wwn9tZhfMHN8ib8LZYBGuZwHddsrAh8o5CYCwN5r1NJPFXbGpoQt8ZHdUraHGeMvG4USdX2rTs39dy34M",
  "key1": "mC5GFoA2JfSKjJ5FYpFcoXrsUGR7ASgyBpHp5hjG6pRphE3e29G8Z9Y9H2QZDZBGMn5Hkmtbcf2o2diaK9henWU",
  "key2": "2Z4LUjq1tgjiMgqdWJJxiHE9fze7dHRKNpQDQYVF11GndeNWDjH9UhqV7cH9N3suLJGA93bQZAP9n1mvSSdKab7A",
  "key3": "2PvnsyjJBMmbCJ1AiWpMANEAGBVjToQHaKScDLjP3EDjG6vUrKaQQdxdnpDyWHaS3VqKLTo2mH84K4XRz2JrGaFA",
  "key4": "5NmCCt7uNL2aZ8mkVKmD7TZTMFFUyXRtzgpqBdgr8Ru4h9zAGqPvHWem7Cyacm6tzo65WQdM5bf4SoHJksaZ2EQw",
  "key5": "4qhMkGnfN3ymE2LhqXjLLR4jCgk9yagRGRCMEqbegGz1dRmTTBAwULazVsMNznHdxmP6y8tVkU2jV1iTpgz3ET3d",
  "key6": "65PQySykuZ7Ni2cwn2tES2V12JNekii4sucwrSysNNGeFL342pNBJdKPuU1QijUdPEAr7jnozftpDr1Rfeg1nS8D",
  "key7": "2N5npu52MRm8CeDyc1jng8awoZnNKUPCHS5Vos25uVyAp4BMxDuEfgAMPwWsbJJANFJqfjmj9RYCS9Gk7NkuEyzd",
  "key8": "nPNH7hTN1vfjM2X4ZGDKk7THqtzDR1rMk9dAh87mRhZUhasFVHLkbkgpNLoTScV2xZWv2Dec9mnFDrMKVJ6446G",
  "key9": "2VS61y8w3tEp778sWAUt9knXP1Cu3E3k2zbPxHGg2y3TfwPB35LhTmou54rk3gWx7NXm35poSS5Zr8kXSQFFbPMh",
  "key10": "4yxDrSAeBbY2SjFSf4g7LEL2sRZPPFvoKcJoARFBsD3CmDvKKm7yZ42JryW8kfwHQAysBJv1WKwA7QdKKxGzraVR",
  "key11": "3Z9138WEAdrhSCJAmCptS2p1CP6XAbtah1LVhk1EpourvYzsncniJUVGrGZhCexQpy1QJTZGcVXKTcBMUHRmJeJH",
  "key12": "4Y3ThwU1FF6jNgrXZp4TW6UejceUKPau7arNsTUXq6hxxFRFBibXNm3kXQsec2JSguNtg17Jn2LzB57kgpuYYpvn",
  "key13": "8DveGnZmEbRAS2Nb5TEidXqrfmVdbWC8TvG42yd116Hom1cKUUQNo9awDv2GJACQCdrBNz55yHVmCkLcZ6Bedts",
  "key14": "nfosYVXvDckgAWpU52nsZxD6igbko9gHm17uwaDysLM5rrJmML2dF1FWCKVfdBuNMbAUtYwWmwkQuNGHbSjyNkd",
  "key15": "5HNbAW1poiT7DJvyW9VUuZ62mA9nwfzSZ6vtVhsvjCcf1Lvcc2ScGff8sHyJ48Nfg2sQgDbFDAbss735UPXEWf2W",
  "key16": "5XBWNntY8TZN7os1gm8CpHh27E2nMm9vaUmApbx6ag9Pm2TKkesmRiriCcgmzvn2JD34Zk3XPmFymQCYdBjpj9Kn",
  "key17": "29wFQNDUSXDVrv5RYfEan1SvZmzqQ5qvELR2G2v4KNxt1mxebqCfy3p9ZBMsHNRKU6t9PWWFhjnhBJP8iJe2f1YQ",
  "key18": "3nVT7aqZ8epp8ogqVk26crGmAzhs5g4c3Tjq2LFfioAB5fipJ2ZwPQnZ6MjWufTfS5S6iJkwifDBv3mrEUFTfpma",
  "key19": "5WKyUPDAfFyAFP5Qdayh9N814vaNQd42zXNrTLPYMG1g5wr5zJi9NwvBCrorpMjcmjZ2ooDdRnyDrXQiG8C4HHyi",
  "key20": "2QCurfFdTTxCiLLuHUGc9KEZDQaBPvHk7Refie5w8rz94TBJbjENSU5PD8QJRsFd1DgyyQqazsQkwKH3ePE1UY3Z",
  "key21": "52koU91aMJqEVjHFR1cbuea2ov4H8snNpYTneujzVKG1yXug6eBxPsxwMu9bpMtEahFbGrgLibVfbzeiYFmYBuf4",
  "key22": "2Hpz6Ss6cpLPPgrFy7ai2PbRmSmtfZazYf9htytmjRaRKQVsF9h8Ho1nQqfQfj1Fw3Gmrs8yjWGH89CVVNpGjkF",
  "key23": "4FBT3pdetbfm1cNHS12WAbrj6aWv43uGdp4su4DKM1RsJKUjeFJLu7VH92mrJhBRGLxrERALEsM6qp7zxUcGxuZF",
  "key24": "5TAdpbz7Wmsv8uCGXmp3w8D4c2hqiQ1Hysrxp7aXmF4aRFmeXdxzxME5tL1GVwEpd9QpVrsQsaD1Es4m7JWg4Sat"
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
