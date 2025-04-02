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
    "35X5w1Wh17SswczJptZEKweu7NGpgvprardoC9XKLb1Rrdqs41PPtdJkTYPjubveyKUbi8yqwjSnL62fYpsaobEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KPwJ6ced5TTCYT3MviqPSec6JLxpp9oPn8a2BFkXtCJ6MgJ9UqZz36kcsM1uTbRjhjuDp7JsDJSwUY9cfrXHtCv",
  "key1": "nqukccrZbZjLXXMV4MHX4hKESAVFEm22Tht3nZQBqFEuMXBNizJBtFCYogWkP18xkeyFC47KFKvCiqccLA7xbNW",
  "key2": "5scv6kTm5iz9JW28vqMW3PaFpj7oFPBVN6Z8J4HiXuXa3wRwuGrXURKUpWoEiTrqk6RwnxhhbVvuCSVGuxov2izz",
  "key3": "5dpHm1ebbkxVXfKB2sCfvDtGPPLspZhCDagHC2PEFzUfUc423vEhPQoHyhxyGnJXzayp9ZN6CEoEmcKM3U1EGyW8",
  "key4": "5HvHMWGeezkCUBP363GoqsuKDpLKEWKgjpKB6g7Rip3NyWQqmu8hfJiDLcg6H7Hyv4qnk6BjYzePu1CKi6R7etSQ",
  "key5": "5VMfySfkiQ7dYrpfGBKr3X9eo2L7Qew7wojamzg9y9gjpW9MwfzL9ADF6Dy1xWP8yeZk2uqAEWd6nPAqbT363eji",
  "key6": "67JFLr7iNxu7kgfAsDR9kQ3wB25aYcNXGKWFxVhcaUdWGW9FsS9u8zANJu8cUUQw1HgEPFCfVfAoWtcXGvEWP87Y",
  "key7": "4GHv7eCNtPAvQncgP6UCDFtScqZmEHCQvBP4r5L5yLn59Paxr5xWDUHpwexNLB1zarq1WMrtBuHxA9HwTM9hwnDa",
  "key8": "Ucnf1u2gwZAvyvNAJL8Gsxz2B1425Mb4yVysVn8hjPLper4KnVHyQ6QuafZYkc3w4As1LTEpDiUUgobMdzavyyC",
  "key9": "47VNqBjk1BxfUFJe5LKG9hvCNTwwzVHPUVJNLgWB3sUqCDYBHhj5XCQaQxCfLcdNdq6Dvr4RURHRLYiBpBwRPwCM",
  "key10": "2kewmWggua3Yyywa9rwUybSJNKLUDfymabTNTNiQ2g9HrAxVJxwHbDka61X31yjdmUwxB4JkSVhL86CQqPjTXPry",
  "key11": "3pSxLKMEJf5MVHpumEbZKwSYB6NGW5zgjXk6BNRHEkEKrc5CMVymHHZSsi8ze7bhc635zuUQKb89GEd6JaHfaCCC",
  "key12": "2CNkQkV8qRf68NUbZbp8ZzmcGt3XYQYG9oV8Cxm84B5MvynnT5ueoby5HgEiQK25pJ2dkH6PfKSRSTRHBdUCbLqr",
  "key13": "3jkDUwWhVNRF6E9NPPiDX5m5XdaSbPb6fd6GQnoMzkA5ZzBgr1zNKqzm2tLVHa81L5TsKR2Uo9Ld4RBBh7hbTnBC",
  "key14": "NK4kLDitytKYXkpGVq33R8ctESiqiC4xQqT8wiJdKtS4hrNaoQavEgPDzDDTYvgNm6QsYd1y2bUUi6BWB5VKgtb",
  "key15": "4Qngvpe41cxX4TK3K4nqB8YWGTpMA2M5b1PCYqZas1C5R8BYRTLBKDzos263MwUF9m3Hg9CmRmfxjaEMHUEJ11dB",
  "key16": "2tTcDkk9zPugfgWGRGCoVwGkYdN3BtJyW2t8HQ6jXtwm9ZjjDjnkK7MfCgcfVk1st4ZUCqv3PYZ5xYtk1U9eQZeX",
  "key17": "4NeDxMUi2e8b4t9Af7UXRfSqBbURLYp9FompuHcWjzDcGaaA7DxMmhVkHDz9XsG8iSpqJaQW8rH8h2Ge2rR5f5td",
  "key18": "2fvkDK1zaL8bdV3zw8sCMre9QdQgfPcCNobtGrUfhhZ9qdukt9zJA5EFdxcVnyDgYZZPopEcDar1higy6bmn7H3Z",
  "key19": "qpva4rMNELTDWbM7NghJqvumNsJCr6qgGq5x43Vpset9zUo13WCyQXeyjJuZDGV84pYVYtxUQcz1EGoV5LbYCFZ",
  "key20": "3jRaSaEYfB59MfsUbbhurzVNRz1VF3gof4vEEevLT6rnx6je2R1WYDSxCdR2DnTFxt2NhSQE21MxysNpuwhEGQvD",
  "key21": "4EeK7NKUvov6YwFjavQ7zQXjvv7nvYUwxYQQR8pAhfRjjKkh3sVteoerc3h9KiUhihaGSmRCgfr8ade3jZS3YgeK",
  "key22": "56nrbRxNW8JcNFtXP4Pt1u6fBN9gkXZnEeY2kVyuMTEXUv6e63c1QqyMdC17M9RCxzumMf5yzz64HAg1paeFwdUC",
  "key23": "2aLPWrHvhDb1D39dgWykcSiRCgdvoWbqqiiZeEQ3LiFwJqsoMKvuN2awNcaB7DbUbcLoLVtRsrR3LUBthRkAdHsk",
  "key24": "hSPvyNAtwXj6w4fiR4y8JPqGqDx8RSYi21NwhX1UoZDrqxzPGjHUjgezYHNKR8VQa3sdzE1BwuPXB5EKB34BRQg",
  "key25": "3tfz6hkj9ydvPFG8jEYHMvjxZfSbWQESCeB6LJkkAUCDpAii7YSYQVKGgHtVDiKRGPDvtK7SGp3FMk9V3k1Tkemb",
  "key26": "4Kf4QfvLqxnJ7zjyNSPmUozHYTGt2ZGq5hsK32trTsSf6szcUheCuD6smXWtWDiPkhQF9qt5QxNSXVzeywaBVKsC",
  "key27": "3Gipu64rtUrmTUxUWWyBecgQrwz1aYMLZVmjbkVmFhcNUr6Lj1zNxykS3xFkGiLF9aAfts3GhmE6J6NAkG72UJzT",
  "key28": "U6SpfsQsmx8mVPphTvVJfeFfXAWEVHa7Bbqqh9x5RV8asZB6y8KVosj3baZ2AaPnb197omHLzFjvU7HCB5mDdGk",
  "key29": "EExshQCsed4oC1xaFvgeJ4S3kbqEVwa8aHTdHCyrK5Stfzy3AGpavGUJ1YyGT4xYcECZo8R1vtvwQr5W2LPnrAr",
  "key30": "6731NueGfaxMvaWVnpZeaBm4QVokR6uQa4Mtx5Bkx7mHaChY1EsYin3KeQbshZBgYtAZ2CTG1fyEVk7TXvhm7NWB",
  "key31": "ehtkrHN4HHqNMvaCF7oh5pC5rJWeVzsLz57PrJ5vtnPn2wabLyfzrd1Cd6bdB5m3Jh7ARn2Upbt55SHG4vgNbxV",
  "key32": "4Po3NPQkP44bNxNk6FfNJjUm59LAJipKHtrFmDYA38QGwcaiUJX5MTc8MVMiZMG6gQ6KB3KLtpyqyoaTgrtN9jei"
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
