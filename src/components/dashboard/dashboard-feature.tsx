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
    "K6XtmLDFPrV6yuSrz1MWWWdLPAjPA55bQPy1DzLwVq14kb1azayWEi5vBfHabddDeKLLHCMpuSZD75bMRn78ztb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ikLR7Y254mDSDmWa98vaQD79j721JyBhzWiqsFxgYjf4NYgZ2dgyCbVe4kmGqkqzvneWq5RbGcUL1GZ4HFeinzC",
  "key1": "3UsKhTr4ZSTUiU57VPmaSkvPuy81Xqr5E4s19xTR5kfNsZTVFNEhjKPUaS614sXMt8XF4AgLRDNneuZYC3BeDLgx",
  "key2": "viY6J4Y3owX91rDGiHEndDEmDnMUt1fVADNHuBRTF34bDachdcdVDna4UCShtsrkf4vhaomtqMW2brJJ64UHU19",
  "key3": "4Lz6xPpnGuo1ybXRkGTjxe1KgfaCNjiPVgtgXyEVpmUMuGspeguvJogf1FNr8HutzVDofcrTapPqGD2XEy7ShrnH",
  "key4": "66riWwnwtjAYgKFPSVWFsWXVmR8RWu1bVHyVVxVn72fcR6JJgpzH65XqqUfFn13aDSoVcoFF6jYmeBvTawPWz2R9",
  "key5": "pZcxZPUYG4xxnwY3SierQqxELXe4emE937fTbmz5jhUwqzLj2MxtR92L3pPS5Uma2nVr5FtfhXVZfRC5N4jfh8a",
  "key6": "2e69WYBzEcTEyqkZ8gyr7qA6BbZtsqmRZfiER2ZVkmp1VTmDvmFPzGS7eFoykwWMriu6KamPMzjattm4YnxygXek",
  "key7": "5i5Pyyp4h2cP9jACgwPSAKS5VPurW97fZwHzh86wRaVWz6qNrvLu3QsQHXWYS6SS2NuRKhsZQd8GiGRUGJaCgmzs",
  "key8": "4V7sLL3jTqyVZL1AbDasGQMkvjjq3b6Ya8ac6orrJ6KHYzxWu3fpo95t9U4ENLjKZLgUGxYkLdm75PUs9YExHsX1",
  "key9": "3cnX62cZTZDcWW3S8X7qFhSmMPaXeXbDv7XPpeUtc6EckMuj5RS4crWdwUVcmWE8QMZtYWLV9DsW9tiYa12zmQuA",
  "key10": "4pQRwoks8ayc2w8td26ykQ2eynGtFKM4eLvmdBAkWm4rYmpLe4ta5untHF2KCPu8Mta1taRSZ26dsmYcuGEZKYJC",
  "key11": "5ec4LifPqV8U37KEoJRf2ZaPsQVMTRWLkio7xLoNt9FDBv9gqxB4deUYf2qcpQJAVpuqepapKfqh6BsB8enUQb7p",
  "key12": "3xfm5zkxUNosgPithjeiqgQqgLq8yBnpzeLsoGD1CSwiKeUHy3kQigVKL52tdduLZgKY85sJ6mnfvR8RPumidntU",
  "key13": "5d53GmUDL5jpnEB1TEJTTTSmuqJfNcu4b3Aptqxd4JsG5S9xFhZh8WnwLo9UrVuyRhq4HKn6RVt7M6CNHHhdRsKm",
  "key14": "sGJha5PzoJZVFpQwWURzNRrWGigKER519HhjiKKfdtjMmx2UnJE1oAPyDfy7AvnXptdsZiAKVsfUq7W6c9GSmDf",
  "key15": "3fE1eSrXHUFC8yiP2wYrsWEUyyAUB2oPBdcgUGZRy4Kfjoy6GSLuAYucRx1bftADpafqrM3nPtQr2vT4qDSFsPPW",
  "key16": "N78FwmbcFtxLtqSqBdNBGKYdJabeo3Fk4ADTnxQ5NC5f6bzpjrJM73ZkcMrbESY82Q4vGVjM5vEZN2TqxVjukxF",
  "key17": "46bxoc3YMCeQFv3Ais9AGKt1fRm3GZsasY8Q1STqYBWPNxZxR9PUmYdLcJdh2a4wUM6uTHDtpV27Utg3rgw9ZkRP",
  "key18": "65NLSfaSxHNwiFrTSobRmfJmtcUw8GyR6iMe2a2UDSg1njkkEVP2XxLFESG4yD8qgjgUY4t2BSxZFZzpvWwbF3BU",
  "key19": "V27BvzzrFs6VC87VvnKomnevssetgUQE2NYykpozCjVBz2VV5ZWMP99ysDgamivA4XS53uyFRPDHeALqgmrxyc8",
  "key20": "fkYVz23TMCZZdPKGzJP1GNk2DFGq3Q1F3q2h9XyEYaVHgC5HBt7GGbHHNYuhFKHUyXWVWkUGUuNUQ2YskQTdzAC",
  "key21": "3jfa3KuejX2tZLGMAXrBYrqPnboqhTDfodooFVBPCJKsN9ui5Sg8Y1jdYzr7hWGKmqZdvpTUFL1cK3VtoDhSmcCd",
  "key22": "58PJjWkmL5aqJZGWAUs9Cydvd1ZxjpHW8WxwjPyzF42J2U6PLj1CVhczDWHv2ogtV39ZU2ss33LVcgGMnBZR2EkV",
  "key23": "2B53V1qCotraVmz9FTJ74LyGka2hCnz7zSGVn6JAxe8gRWWT15X12GEFEP5VYVyA5rGiUhrNQHp4Qxm3cDWBhgg4",
  "key24": "2oFdY617XPab9ArdsrUF5R5P9vMQAuwfoxfk5sczt8SZTvFsbASKfKp5Hfp9Cem2Sxq8scMubFtM8bFWXJsyHRVh",
  "key25": "545Diqv2NxYiSZBLDGMFEgXU6t3Kxey8Vv6adwg9m5Ecsr8PuyRUJ59RqXj73xmF5aU8fPifmDzvKbVYG4DXiY3B",
  "key26": "63rCc7B4Rit1q3cnuqiRNzp4V8mY7A9KwctHe8aBrWnScNaBx2WNWeme193tjdd2bRMBoBZj27ibCcC8DUJZwaEs",
  "key27": "NRSNKcVLzPBtxWCL43LcoTAEGRzrS1hdpZtUehNvkBQuverJQkj5X4uzR7CoTMtGuHBb4y4gSqER9ZWZr46yqGz",
  "key28": "5GYg9MsHGCH4svUWPye7Z8uzsBZf6YXS3EoHxFEBo2CxpCR1frCFF7TtCa8WysZ4vY4SZuiWYzp8Naod9q4ebUgi",
  "key29": "31AJFfzbrSCYF6N2v9VVdAGW3yAbWqE5iBQ6ZTxUZuaLmADXbb166xji1T939HiYdMtUDe44V7g6btdPtbttUZPH",
  "key30": "67H41BFRus7nUebhcZFnvzXS6XNe6VP2FtKXx8QaqbvkWaPtz6zCasrWgsfGsZ3kXb3g5pu3Cv4euu1sA5dxx5jb"
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
