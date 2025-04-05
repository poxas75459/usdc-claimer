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
    "3DMCDXQUPAQtsbXEboTGMxLpwokJuHNAYhkrFQybLqTb1q61SrfquZ7QbyD51HBWcTGgfjANvLrKxxSeNTVJiyb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q99TanKEwg2Ln4c317Jm899rXX3g2M8ioAqCecqCgsrT4BMjEnwK5A2zajNpfx6V5egHbd6eLpC6Gs1t4jrqcAV",
  "key1": "329SsoYi8u1kxyFxhpjVsQLQrZW4fgq1FnS6HDk4o9fMCNEaCbVt58bJFeAeGauSGdCLZ6Kc23s7UBa29jV9tcYV",
  "key2": "3QCmatoR45BawnKaExvzaw91TMTj5vAp4UxLcv4arw5g9EUrD5kYi5dE5SJkZncmDBwgfekT4JWoSEUp94gxLCTE",
  "key3": "2rkuehmMX2ppm9cMtHLxiFE9mAv5m8JPSenDd8W4AkTwUWKpgGX6ndJeBBn8sTBkLQQJq8hxvCt4ByMZf2DnCNPj",
  "key4": "4urS7kqBPWN7kPwab5qqv7v7fiVjtWaxmBCEXsjeBzxYQe9CJnm9NzsxJk1oM6uY5ViCNA4nofwBkrDzwYQMahep",
  "key5": "4KRnMRp5YvXdXB8Xqm5Yh4ZZpCMY7JJDLRP94SEsw9YYZUhZ2rQy7zagBCvdVqRZ6Z5av3vn1EZtaMR9f4Lujpuz",
  "key6": "pEjoCNmEs1U1AcwGm96ZbGVDMAe74d5gnho7fujFiDqNZ9ag47AtHLq332TztKxin2zxC55fFVFv7vJNg15b62a",
  "key7": "hD8V5UsYxGoQshPbczt2qz3bsWZVYCDxfJuZJGUSyj9X352WQaBxacenr993Dvxj6VDMP6gdwxCrzya4xvqbTaQ",
  "key8": "W2wUQh2zparC8uWoqQydqjt6BUYW6VYF8quMmpuFsv2fnsHTKpJyEEw8R6U1u6vtFfhd5dBYBKaMFT69BUJiGxu",
  "key9": "rxXWPbqup4CAqJpm5fpFmNEJHLg9m2HxCdWfXNsknP78765REkxFPYtRqui4KFa3nP51nCvKcKo1yXYnE3CGZqm",
  "key10": "2YhpZ74orkpr95N4ahuxkw7ddd5zcBx1AmiSScMUtEGMboJyCZAghMe3ynQEnZf5hRMmDEEgKBevNbDit5KQkT8T",
  "key11": "4r91omBS1kSFY3sZL1hqGTXVNruQCZheRg4AUN4ypvex8HKykPrzyRXecMo9GqGNZsD1SgjbUgUKf3oF9dq7VjPc",
  "key12": "5pwjareeVBnCDMkvqz5kxUdwgLj2crWAhodakJ41XyXy1C65rA2bNQ2E5iduqxu9BDSwMZKzH5gTjy24EqjKkSfZ",
  "key13": "4GsfTgdynUVxVb6K5A6Bd9BSVCcRwEaFofh2eZPpWzsiSmwp16njPCGktwtVHsyWyMkzrruq8JDgwiCqV1BfsUb3",
  "key14": "PoEmdjr299dYCSStpB3bAZ8xrVdkW4yHG4RyFBhZVs1RKNekTG27VjkRWLcvEauAQNXZMsok9ZSfSJQ112D7ZzF",
  "key15": "2dwafqV5tbTR25DnT1QcgG2hcbCCMJePokhAmTGYPkB56zxov4pa2PRLzLaUtdcucM4WeDrBMVhmCpc8mUQNb1Qr",
  "key16": "3kEgDqEwg9i6wbkGADKgoheiwzARYfU35USuTskao7yDfVfWDVfiyvDa9235RVqFBtuG4Fz1W67RCqzjWm88MSFd",
  "key17": "2GNEktCno7aBkWE7n6uh6VaSmecymF5aeYfPhaKy9BifRbRzm1BuL73Mzw8hvGH4EhBWtvCurv8mT78LjWUj5cbM",
  "key18": "4QGkMWAqoQG1VjRCoMmsYBvQDTpHefkPs32mqeCL3vBE2X1MAag4gtNS4XeRpPZfCjnvaq9igk9dxHgV29hsaVKk",
  "key19": "36Fi2137UxaDGPNe5S3ptrvzxDaczK3kCcBkqGK6mbS7msurXrp5ZxH7VHUSA1Y8c8SG3jm3ZbhqBEVMezSXHPGw",
  "key20": "2o2YGFs54taSzL8H9nHX1woNpbkKbbMpWeh9buM4DA3zZPKC8GzHF9ELbANnNtpguKRecB5Hr3mqbVVJPZPT4yqP",
  "key21": "3fA6FzadwKZNq1U1K8qbxf17xgwyhm15PMGLxJAqv3DbENnJKtjxrSriCTeJ5RZgxMB6sEGXs53CyD2PBSdfusPK",
  "key22": "45WMJxc8iJ8aNxs3cEXgaXG5SRcQiXr8bhH6vhY39kRYZMAceRvWtoeTGiyVX6j2q8SsdGificdaQmewyyyoi3ro",
  "key23": "4vquz5YeRajgcTq2nAfvroDyTfxzt491m8ckA1FLswY9znd2i3YVMhr2XcbLFPNp9fCar2ik4n77h6jcKUzVepnd",
  "key24": "3GumPWETx4FRis2P5FKjyCWaLbXSLefhSh8U15yrr5GruJ8dBbvv5nfPDNx9kzWNZLbdy2onJ43n7krfce8p1ZDa",
  "key25": "34g95AyPmeh6gyjz2qpTTY3ts53GWGAPPuBM5U3H5Nbf4qAs3ujctngwxaVzHCd1SPSXiqXYZKqmzUpnRpYLQdzK",
  "key26": "4LDF8GmuRbm7xYjVxmnGn5dZpDgH5rebgJyjwTqFC294UxUKy6rC233pWLAVjBc8BexTWUZnioB3SGHNkB9G8Yv9",
  "key27": "5PLDMijKevVuAXHVuXueTibDMPNQ7fyJsRR9YyhCjiBBx3h5khSgFFZ9ivrkSJmg4eXXPYCVW5azMmRJMcAyDrcN",
  "key28": "44wwmen25RsLziZKZSoHSfw7BaAyDcVYz6vqdkUBA3FVmNjYTY5JqMd2vMAnSKo1g12DMT1VUpXeGKaiupysuJoq",
  "key29": "62EcsqwSuzgo9G8GfbrZda67w2a8oWjnyiWkB49shVDwHGiPnXsRhd6Xg6emZzCq5JGGZitmfxfrgR97oeG5pZ5w",
  "key30": "jtHh75U6wyAd9jVTJLNfXAVY1h6thCqiqX2QbGRCFekATZbPf8fxxyz6Eayop6v4htPzzuKCTWdMRmYbi9WJB8H",
  "key31": "21UUNkM4kP3UZWUUcuWHvZ9AaUGrGxfNzZo8M5pSB4xidbLbkKif9sb8qgeuGSr2QtfsVapxXdtaUF5EsMNtSb65",
  "key32": "3yfBrKFJuCyar7Zq2cHoZptppf2V8orRdyEyoXHZZicebUSvsKaDUbgYmEUJ6tNvYQNjzPW4sgz9dt4YHqbKxav4",
  "key33": "5gk2P4BuQRmf6rkta36CAXhAABuvydNCX4G9S3KdFtuzQuC26heYXGb6vnKZwq7vz9NkTfmwdQ39wio8mBZxV1Rb",
  "key34": "5zoBkPxrqVMDP7sV2AeQMYzrKotKWdWLQ9gNR9VLwCY75XvizVdVWDhdKsqnWbXzkQhJvSZ6Tyb3LxXCwbMeReqa",
  "key35": "5LFpZd6yufMgmnModPfFfiqzqJjG31Y3rTuzrM9ENhzkUsUctkj5vP7FquP7DtuUHVC5nS4Qyc2btaazNhwExYFz"
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
