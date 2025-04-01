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
    "3ZhcMeLhJoTrR6hrKPxN78UWhkb5Jd225PeoY2joyjkWNGcShC3JcnMnmofifmAksx7iAo2Nbzjs93f7ojNpDdEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bjKtJDK5edXniCcUJn4mG9sGYdVPg6vSNaon4drnnCSnG6Ah1omWVvw1negtAPApVabEYmBaXNYjdyeCkENwaBn",
  "key1": "5qtdy2w6bzHT1G3aW5fbPosoTFvxF4Fn9CLjT7wXxUbcLAx9KikXGi7vEXt5tKpuTEWnjS6tjwUTsfQxLZY11NTq",
  "key2": "4pySDtaNe3WJ3RPbqgWu9tHQSHBxzx8rG33QBCnR4PcRMorwPN3XxgNFYwvv9uug8FQStRNCmiiyvQsDrhnWQAca",
  "key3": "3fSjVpLSrrgKPz6MVxFFGTngqXUyD2HGuMBqxPnJBVroeY9jk4HQFz63huGopPuzKvT3pShoj7tYoyWKC3EYVA3j",
  "key4": "Q3C7XEzj7fq6Q4tHCyGhEMZLYMpMtWK7LCR8rdNVJTS7ZgbBuJEfEsHFR3L1Wj1ZEHrXTGqxWbK7T9i2CBpiLTh",
  "key5": "2tZLgpd2D6eP8B4gEkPKxLGhJWvCMT4Vdsexs38F8UfNPvagVMHPMimSexeqkLiSy117bbbLujoYMBJZuEQA12Nm",
  "key6": "3ztxQw8r2xPdepFPh3VWx2p7eGHATa4a4cB4fmuZfTD6K3BemiwQV5LFXQ6UQZg3DsZWWiJpbkaUoMPBsi1bzoyT",
  "key7": "52sPzUpvBqULmzPUGCc88v7S4YZPaUbhDc8bPYBQRGEp1dRs9msEK3VZZDExsGQrMQhR5dDjQBi1SYsLtA547a3e",
  "key8": "3FU4Mpzu5Zd6VCEnzGUxDeXjtehDtbGyeCqedUixYj4DgrQSDNAD3e5VwNxXWcomGVwHoj3fpCrn5nY3M7rqDFr1",
  "key9": "4yCd3accMCwpn7uutAeo8oHe2xpfTWs1QKka1JujqWRQGm2kKsBadapgbSKYcRMTUrYGJ9jwYfC9ykcy7pNiwA9y",
  "key10": "4w155vCkbVKG4GsqjiGpSDXrRh7VAcmfmFiSAq47bcHw2b2fL3wq72rGwARjwJB9Cp2ypcRoZXB67S2ByzywoRua",
  "key11": "45k6jD7TVGUNPcSaWFc6rBdZNfEZzw49mpky8DhKcbCqtcahDD3aFaFdV4H8NV6Q5LZAKFTxjNxUURhedGpRULCV",
  "key12": "2yoZLPtAnMygi5fDKJb1aNYEDU3CDuNHxZtsbxx2dXAhyPjoEU4qinQh2UE45PsKX21rpqtmtyWHJr6Tf4rkUeaT",
  "key13": "5QruEiRR5GbVUww8VewVAtCeLwaXFrG6YPgMUtDdhWu33ew52fSwb6M4ohbDEJhe4p4KFcNd2qLzW3JVq2YcdwHK",
  "key14": "4ko69DxxmBTR4KgDVmSLyfAUJivvP4sU84tnBbJ2qJVDGamqYvUvShtfCLWCbzhbjtbdN3KjxhgFyXsPogs49Xjk",
  "key15": "5s1t7kVzEdUt9pu5BK8Wwkec2TZ3PGi2EBKaZQssQvfC45KJVqVXcr7DxPLo5DjX1Yi5zNHhTy7WDHhyYotgSv32",
  "key16": "XtieNUeeiAUwXiYF816FUpYj9QSvHp6UhNCMVs7WwxpHThXA7nQkkvs5Y2oATqbH8VchzvXiq4s4cNV5LHDiwqw",
  "key17": "289hYvFQhx81rj4iubspGDuHCMc9vxPkq54m951ugPN3ChJydjXyEeS5NhUGhQsfHRDRNvKRfoVMdLx9hgvWBhVU",
  "key18": "43s7Ry55E7bKLfDEYPDoomKPMQZQhKkRQUZpM8vteyMAYNS9RYi16cdZSDeh2MFq1WQLeb4Anoxpj8ndUCp1wMcS",
  "key19": "2UztkQwgkJfEyVdddmAEchXjAGaEfku32LjJGi4jrynMZ9u88koJuiSycpoQjNkUQh13kLVdKVFU5bpVENhuHmYJ",
  "key20": "3Xwvovqftztw3N9hpXdzHyPV98oDxJtWSHf3qyRtaReBm7KnCcmG9x4LPAoGTvg9AYRK3MXvADFGS8e8rcFSYZuA",
  "key21": "4zpQLNMJa29ohg4KnKjA38Hz4nFVtuuMSfdqUzTqyctT5jozAeRxf5vwrBMKCJsUdZukoALwPRqU98PejTGkWDbu",
  "key22": "614wGCxtuhxeAxTzpcXFciWvtc29QKfcssF2bjgacCrtg6s6h5MLbt5iNJjhboejKmejVcRNaVakCSwhnxryVP5E",
  "key23": "2SYHHJi49sacfWposq8Hb51xrTz5QbeNULAzkD1YbfvH2SdSi3YEFAQrebvF2Sb58Nz9QbQjEbDzrhh8YnfyJC4D",
  "key24": "2v9PHKLP1mcTyFdVdhzyGvHwR8Kr76WrUoDXSrEWEkSAHkHS4SPpn6oUnr4ujsa9LbiR9K95Z9gYtUvcrcAJ6HYR",
  "key25": "58osKjvrCUujEw5ape7MLxjD53Rgt1NZ7YeMToWHqiY6KRDWNfBVxxkjZKoQxkYvT5j1DXUwB4XkvyE4ZmokwGAg",
  "key26": "2CkmVNbiHZKbhkiAJ97U7myNLYspXqxqcaBbkFDJeBkeR6H6RqXasg3b1N5HBwnSATAuywYt2VUU2fbbXZxmcaX9",
  "key27": "22NeUvZncz8mPAYuB9W6hpQAD6VA4rEEeQ6sgj6XX5QCgSiLWT2UVGBXE7WRGX9UuAJMqjBfCDcFSJNEzyZdHVAB",
  "key28": "3LJNUEgPFuPJ3LPHUwEcSaksTmFoj6Cgz1HvAeVgXVAZhmArLmnhXVkxehhJBibqegoPnTahhaMdP82vR96GCNTJ",
  "key29": "4mRiyNiwBKfhLtTUXZT2icKgRfqh3jUwAQPjXUQmGgvE38pawryAgsX47c4nj4FC1ss2pE53TojuHyygiQ4RQJfj",
  "key30": "58tjLLTLq7xP9CXrbmLnbXoUmaiHSKYrTK9v2tPPujj87o5gRbHwDm2SHhZJ4nXLCg9LPVF5qEJ7wAoE6k3n2hGQ",
  "key31": "3ZyYGDtJSGaez9iebxxgbbzDvs2SvxipviNL1KYB6B9jLutiEnEfrtpHM9Muovd2XsrHhMn2TM5cDjXXJGhFrA77",
  "key32": "2E3ekVXdCYCd1Rv1vDxrD1ZLerpoNMbSTntdWQ28GoX23yy2W3RwjUd6MBv8dbC2fPBQbKzGDqj9ExppGeozEhJi"
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
