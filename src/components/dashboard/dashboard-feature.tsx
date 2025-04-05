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
    "2HaNchuHbbTy6k29d1jRPbaGoUNCjrbAwFnvJrmWmZZg8B3oo2j5LnP5rNx7Lwe1C1j2kPmfAxGptGitNgnZJSmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YCdbpNCFntocq5iYuzpAALeDWsDKUirr5bbbjGifP6Cx4MTGHZHF8bYuAA98BxC3Lnf58Jo3eNpf5LxpAWbLezA",
  "key1": "2gUnC25319WdSaEnypJeCfjWX5Nt6rh2dYFNKS3TTHZadkB8mT7v8PUwtyvEH3AAy3tQGZVm4hH99h47uRMskxfH",
  "key2": "5ZQJcB7KDbZEYfMZGdLqXvwgh3LdW4dRCDXvGuEufxBi1f1fS4Vn3Vjj9KdfZTymu5TpE1aNUMN88YnesoJJoQ9u",
  "key3": "3UTCvZT4ojhLVnJDeifJQkvv4aLxmH36YBzJfJY1VZzkMeMuy1KeahcRtygjZ8vAp2J62B81KBUqkU4awbsNpC7Q",
  "key4": "54K1XrrUmEqRqSeokVHw5FKpSLDSgbdbmJmRsLK7Qx6J8D8zkbFndgwKM72Z6NPUyrZrw3iv5jLiiqVpwWTJ1Fi2",
  "key5": "4Q1AzJcZznaiSEW5MvmwFATZrxBixzdAQDFQgWjVFbX6DbRuQmgdVS5dZ7kT6JYbs2mT2JwYXcCGXuBYmYBHJMG2",
  "key6": "632s98worwu6raf7Nkaz5SZEmpeBSAu1eKk3SLyjiFTgThcJBn52PaSKvXgdTmk5YuHecJoBVojmQWa5KRtsapd1",
  "key7": "41N91NTWMwCzn9KwvYRszhg6E8eLpSmpWxZMnzoEbYcyA6idVE6y7VECtaajKp64G3PN8YsG8oRp1Lb6ziwxrx5i",
  "key8": "4Kscbh6upVMhLiTRqfAtHUef4QcHiMHb2Xf8fDrDewivKhc3hG3zcKdmw2DQxjmpfKLNRZ9WydzKSg65UNinxeoi",
  "key9": "4icyXXYuPBofaPsudiE6Ms2fWV6rnnKLxduN2AfFVz66q9qmr7EM64bxdSkht6P6xv2eLUokmLasVcCg1bUg454E",
  "key10": "3xCiy69VGcFR15nuvz4xoYLuM8B5b3FjApsHLxTfdaDNJSvoMGKKDtZoVrxiapTehgS3V6gmQcMsP8fRnAgqsAzp",
  "key11": "3EDdDds7p4EJyJZFjYZGw1uB3f8YZ3X93Bgxe6y6XeuRWgSMDyaUKqt4tmpdu2G98pU3EdduRo4LZtvsAyPSi1hi",
  "key12": "5hDu6LstFCVuBR1XcYW3jbuWeZEi94cuC99e14JzbP129Zn9kqDzuNCMkFn4PhXEKqNXhLHFDAZ2QG1WqVWQfr7a",
  "key13": "2S9vxcfvVCMkFUxxtCc6xPadJieenHAKFSyTV9mWot7ns5vZhBL4kcKVnUj616cxNc72DQQZULzZEu68YAAeoxCm",
  "key14": "3tVERTMGfW7gsvrWLwHpgZgdVq2YMRa71HJ4wBwzEAfe324WPh63YtnLTSixRScNV5MFm3Ey8iFAUJFZTuifEq7V",
  "key15": "5yFrj2miaGF3jWecWjJBsN9eagjkFoRHdvXi7dBnBDkz45v66yHhG9UV6NoJqTs5ugPEXpUAWcLqCXbH28NUMMHM",
  "key16": "GruY77WfqyzWtJ8ijdESCoU6NB8u58YEPU6QTcbfSkfUPGcY2ib8XS2F8xviP2C5Rt4UaVkATJo5Yzq1h2eVc8T",
  "key17": "F4F4HKpQeS9Znq8NkSL88zJSS2PPqwRjZ5pSrMnJsme7jMn1oEbcse535Bjq3jBt39HdUYxfbC17tN2XkgzLbct",
  "key18": "4rNzX5ypAcrTsYna8NdctaynwkLiw1cvDbV9JGRPLnR7UaWmvWaWn2z2bZtWMkTYaLZfb8GuGV7LkL9PU8XfWift",
  "key19": "4oHRKWSZYQC5xgGNugECo7varvJZKogMji2XiGL4WTQUxX8eD7DJ8bVQD29qD2Vemrk5UFBnjqJaNAbheoSLXvNV",
  "key20": "3vP6zn63ERUnYxkts7GZfm6GJrXzV9bSZrZQegu6NHgVoZKnbzcxNEsnLGiUSJxszZHWh4aVBucVNcmN7VDh5ufi",
  "key21": "2LgHNj9azUhvwQhsoi8Hc9SuZ1HHFbY9QZfMjrqfpJJa63HXCFjM3JPqPsNWRg7gx29SuZJRvvDwA2euLuetTJJX",
  "key22": "5UoxEVLxQ7pwyYZyVxPKsgnJfpYVQhLC7dtjB7ykX6jS4vMDjki8XsKrbU1baCQi6q2wW5AkV2Kgq6FgVyVz7KD5",
  "key23": "321scoqZ6bF4RvSZuJr8911LjWh2GRJ6speQ6fZn7e7shs3JXP7Kx24hRar5ehsCaSxLU7Vkocqr5cFKqT2Ltce9",
  "key24": "423SrDymyTbzDoUsahyC2t9wNqW4xcXQdbXwraK5wsSmWPfwyDYvbpkx6rhrTyihYv5dP8xDcbUSsraJMvZZrZTY",
  "key25": "5BFjvbpmn2vFrHJfxpMF5CJDkXZpTLDL7c1QJjybr5i5HtQgnjGTzcrkuvauZo85R5UXcmRx2sFaQroLJAqQ3DZ7",
  "key26": "4NYpEniRgkDreycQ69fvRdMnpEvUyb9U7Q1XUP9zDYHZhhcFLFysH3nh1FUnSzdNCw6MRWFvtFPowzZrhJY9JRCT",
  "key27": "5iVgkUCdkkjM3CmuNJCK9fNhbs91Y6XpqGJfdFYASkgqoMJ59TS8rQEBqPTRacFRAaDRVx5tzh5uJC5bDxMYbuJe",
  "key28": "WHm8N3F6atqzCQjxRKSrjWGoJL35Bq62RHufThA1Bfv3dynqMAre4BFeGomzUyD65tXYRWbtXWE6CCqmPCTAjoz",
  "key29": "5rjJz2w5HXgNRywRvQXpXpjMYUYEichCD9ZoH888cyQrjBZFs233d9UEJ2gL5evMFV25AfoRiCuV4iSr4h3BweMp",
  "key30": "yMke2WjLjQLqwcy4o6618G8dAurgSsEoAXYFhguWM5XJSGAy8yUjPkm3PEuxTkM9GDLc5yrxiGmwhTDLCDbgHCW",
  "key31": "SunzLEQqzKAAVAkUrVsaYcRkkxA8ch7mocHgKWfH8UJCB66B63MguA1o7ndouH7xYzQYzwCsSJPXnGijM9janSs",
  "key32": "3BHC8jrCR4YSVwtvRvq8mVysfw2DpbFnxErn2i9ZcXFGjKyov6YjwLv1ZS2Tuus4Ka3KjFZfCbLsGEvKU3T4J6Lu"
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
