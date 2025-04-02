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
    "VdYYRhm9L61HUSnwayapG3LJ5o8zX4XLseVKnpPNniaUhx3jNqfsJEXMhEDRX5mGmd2TjG7YmsGBgrmT3sDYuo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TgJmm872CJ1pBjAH6U5sE3DRuBFdXgs13JbapdxD5Pi5Qg28pEN3q78Pq1SekrSeosFCg9GPEW6rS3oV5V4cGew",
  "key1": "3z6W1CsvdzrPb8nveFP82CouBtfHnD1u7HW5y6oC8KiXng3msMfz6Bjm4DrGj4iANh5bCMNX87FyhmVQiDvYBhqF",
  "key2": "4bgwzFbL6rQSPbU6R2mavZpf8t4ECFT6MkGrzYPJ7izrqrNubgHK3sYn75Tas1vuNphi6uY8hgAenJfQQids6NeM",
  "key3": "3Lo82btibgVFEqMDKXQTWpmRXYH2MMx943gepgJo7o4riDa33dq6W5CaZcDU8kKY1dJiVyTgMDnZ5YkZfnAKG6gH",
  "key4": "3EWfWetjPBrbuS7Hz1cR3iXTMPFHd4nB7j9SJeigEKmf4YhEHbMGARmeV2rtip9j1VbVou4daSDXK1Sjv5f25qJT",
  "key5": "KhyqAmsqZVXSnLeAx2hr7V88sCRiwcorgD9RHeioyexkjchWGwfiwHh1bUBs5PfYsyFtKoedrTKXCPq4z9YJT32",
  "key6": "4fZ8AwN8zaiYfnqe9dpqHwibzirHSaVsyMSwW4DevyQ5xCcFz6FdaU62piC8tfFNYhzg4m5KLDahMxRJJMstH8ZL",
  "key7": "aTuu6om3GYy76VEPR5VrsQVgPuGQSrU2hkNCwbcHnMRs9rfR5vDLVcqiUoQHHJQdJHo9tRfnUJ7whXJfATam7q3",
  "key8": "647ENavs6KHAAbffkbqcbFaccnq4ax9LFP7rVyPtfV1csbi2K998Xyvw1YuovaLVriuBRJ5F6s5bBZLfA9veaqDW",
  "key9": "4ZJZjop7csYL9NpAGzyMfqmiG8Ptf2hzkRmV4s6msLCHSnbVjqNht5UhdJPZhDeQsAhZp7M4Lht4vPp76HQHPz2t",
  "key10": "2o1pjSpXdjrEW7HimuNRvLjUymjgtGb3c8eabjpe6f2x6fxZG65i5kT8XfiUecsYVMkg5o4Tsx547KXm3tJ6Q29K",
  "key11": "2qoqnEja1k5qY7PaUTzZZzBbCLAR3HTdw9P83zCUbSvUDwJMTopXWav976c4B7KBq7mwEqU48Mj5LsCUBjNTkw3F",
  "key12": "2B6EYjvNiDqtKDomDipBYZWwFAnDNoyuU45LoHLnmdTn74pi85w1f165DEi4R71r7vjSRaPQFTAgPSFQQfs6CubK",
  "key13": "51ratD54g2Syd5RccTTbYD6uTv7JWtBjT4HfaV7teQtVJ7DZVZRr3u8mtTBxf6z3xEym7amaUPgZPQcAVbanaDAv",
  "key14": "2Le1u1aQ1DpEJBbg8s2oGph4NA9sRqE9XJraN5M67qZuHAzzboHxV83MEdWPvwMTxQUoaAPUPb1qcm7MsZEK4cUe",
  "key15": "3KsUnsohMQHPJZ2GogV3hc2JqVkcRQhuTxDYrBQReehwdTCdTW4KiiKPhKFFoiCj2tBztw4tTnm6gY8qWRYdcCZZ",
  "key16": "3okEM2RfBPc1Hwh5QsryFgQWEQDJUt1f3jmTAZ4PbHX5TmkjVYT6jrEbqhPbZ7ZjEMct3A9tvKPU8AYtrboeCn4m",
  "key17": "2NHHVQdA49LeoVYWeF41EyafWr78Pqu1LcV3zGk7vpwatF9P9vvwsibA8RMv84eqRd9e9i5oMDZFwBkEwZ1uViJd",
  "key18": "4mDeUWtxbqPudGSk1gwQ5PVmSUKxXE2xuZrP8qQnTotTLczkjGCW8Swm8TLkx2CH9NGJbs3Q94o7erddnBjYx9EJ",
  "key19": "54eZqvvMZ4XqsfwZU8ozkCo8WujkkudZSVxzxC4vSDuN3vSmFv1m8MXg14YWQYk5MazkeWMkX3yiMcqMpcpf7wiq",
  "key20": "4YqEVXrMKSHBSFwCWVq1b8y7BvnAfJF8L2Kvhmupyqi817mEJvBx4qAN179FK4s3aVyqQqqeidWmLp8GKKAMJcbg",
  "key21": "5NBdpTwvNMswhCmkzA8DdMqTQffdEnFrb8RTEydPrH6VM7RLXgUZDaGx5waa9DrBPPKZEBo1uevoFKey5AJ7g1mK",
  "key22": "4tW656rojcdnTrYPLhWf5feQ1DkQL4ZWCuhj5zTEUiXpLFeTVtFBztWd8RCEYNgoEJiMt1DoQ4dyj21KuGVQERXX",
  "key23": "4MXWjTG8HCrEcHTrY3XpVTEVjeeScHVCHw4uqnN4p4E2fjAkaXnz4NThhVvePJzikgq4VaNoEGiJZshCZipNjThC",
  "key24": "611WhEFERvrQfcQ2WADixQaV466U929DNntaZqCPxvsT13HSNbHyWXUi4nfWqnSBUnLAAkV9MjfUZeaqSESiqqdS",
  "key25": "33VuETF2he3veVnh41vjbL8DhzRBFtCKJG4FcnKHWYz5r3i38dq5wGEd9AYz1JK83BHwuSakz6LJd6sueLqx63kA"
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
