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
    "4Co2GTDd81P57rvvNpMjcEnEzraoZpUt6B7NCP6ppaQPYaTFDq8MFvAStPz1MoG21wHQBQyyAGKzAJoJZU58gzw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kbi7JYojo9JXVe83Hfee8KnUhokGLxRUNCLSG3gGif1brtMhZDJ6jjJhrhFQZ9omdiTdkRRKgQDWxRcQGVSB8rv",
  "key1": "Uw9x8nFwW524zmgNatiixhnwCwjbxCkFVZwWBcgsBq26LUUqV9EEV1AP8cBoZYZdwuRD1wEsXyvdbf9hYU8p2py",
  "key2": "5RkDbVKp6kgEJFSCXLAgPXWseyESEqmNVzqjxSqLLhACsXqfRPXv9i9VqmJ1D3hXbAdyTpPMVGGbtdyQ2SbLfobT",
  "key3": "5BtfeujStahFXjR2H7v1YN83uFPwSFizhYNFJg6wz6jB29n5LD2itrZkC5EqCWZ2RtvZVN789S9SCmK11tmn792m",
  "key4": "2CUyzNHEowZqfJvayfJv5oqPo4iVn4YTRPMRmXoqaqtMRNHoUEYvr6TC61Q3kq8MvcUCMfrCSLK83HKeQJf3iUqH",
  "key5": "445durGHw1h3q3SdE9zynkBW2mC84m2CqnbpVk1NQwycxAQdiK5pno27AVVKR4deJwyGS35P1uUNiqk32MNpsSTU",
  "key6": "3nGaTcCyE6zMc47SmDW14erDE2kn2ZT7EPc7CkooZoDNwwT5bFieJqez1qs2r2K3Jug8hrN8vyA2tcc7wHPCJrzE",
  "key7": "5YdqVPwDAKXddWEkBZYRK7vsn4dbYz2gasv5WnwJt7BkFG9qJMBSp6LVZBhFot5ysU2ZGbJNGsPx6v4DzXLRdVMp",
  "key8": "2go7pFmGxFvHiQ4WY4Mi255VkLFEqUBSzufgBJBFUEAPocfDoguk1WoaWH7qqgvHA755nLSTUvAdTdfG4uTLB4xu",
  "key9": "5dvsREyK1uKp9beSKvaXKXWAX9vHrKh3Q7dzVibMKeEr3m2trUQthGHVQXhHP6waQg2nZtMSNJWqAiJfmEJJBf4w",
  "key10": "2a9WShAuLPP2mTeT8fPVjQ13dmwxHBDcHBjE8zpktQo1zcoC5PSPJanbjpQxAf83ZmLRfeRcGDyyhfnmv9NV5MVM",
  "key11": "5kkV3Vp74Fz7ighDNyhaE1Z1cRQFgwmJRQWLCb1aTWczFx2kE7wC3kZ6ghVQyHdMG2AkxBq6L7buwDZriNhzzG8D",
  "key12": "2feDCAA6j8Qm1wNZCCKAVYV542spY5ywoZ4fiBF6bwNyYF9CcQhAKygSqe33TUnVxzjGLeGPcSwzqkdybdCPTgh8",
  "key13": "4xNFCCxjsqpyoMkWwViMKAsZiuQjwwd5CrzstwHX2udfr9qoMeNbaA8Wjq21nGMqjAM9EMUUJv9NQEWch7e69hyS",
  "key14": "4meEf8JbbsT9Ubwmrqz6eJkQY3kwaNPDU3j74ZRwSMC88K7nJSGXYAvMB4iU1eMJhJwTmovjZ9wADR4RnixmZfMo",
  "key15": "4B3bs83yHPteeoQkhWb1xA6baXabF8HNqGKFwRC7X5KgfGVFbSBm3Hg8oVEcFAqja3FSBqHcddVcQqeUhPekyh9N",
  "key16": "5L8hyX8UywLucoLA4ugeB1uA82WkTHtS89aciUGteXJV2dCuNHtqSD5fHTffz5ZR1SKvBv4b74sqpsHmmjPdeAxz",
  "key17": "5Ht91oRmx46P5e2tsySRVGfUvGxrexkHJ6EaTzNpLjBPyrWFANyq7V1qzEAsvoAye38H6MbtPrnxKQ9GiduSVs9z",
  "key18": "iWH4t91zv8BsBAfVB6Jm82d7HLCspe98p1xcyaurc7rDSp8pM5v9gGgEbUaaye1H2jkrpKjrrMi86ZQKfpsYpjY",
  "key19": "zGic5xdTrPvtC8h8hTUULFhLjc9ddoCy5iRBaTJeFk6tDRnP3yfqfBrGkx65LzockvuMe1f1aPiAgUmENRAVSju",
  "key20": "2AexuAsKa9TmfsgZ6cuuqVjtAcHb1y5siVcf9823b3Hpb7gyxpt1as4h1Q3WjwXqDTH9tyEFTaGAdpZ3vuuPG8Tb",
  "key21": "3CbAHVpxaUM3UkFQYu86byDL6kikCKQP9cLu68LoLTCkpjzqT9r6MpWWV5VqUqy9hoZacwKqDbK5ibgYTYrAfGC4",
  "key22": "2KFAesnZmYs3PeMUjVLXmboUapuiCe4mVAf9VQojmjNQivmbkJv9T4p8DKt6Ce7YPBQrxGFHzzUnXzKaR6aRSKid",
  "key23": "5TvGt77N21Q2UrPaWWrJmeAbXSzpVD8s9ZkRpia5XYiUHYtCzzVatZYokbfYNqpHCa32SH15b7qVBsnekzKbBgXf",
  "key24": "NFvQ2P7wNEaSpHKFVPa1E1vT1ipkDsnvmqvq9Chuj211G64octhAmFPPMJnHMAR6Uavdd1NKL1B3TjHnQRncsEB",
  "key25": "3h9d4xSJ1nisnUNttbLL3Jc5c6ihtCGFXaaeN7HuyoyJobttC8HcvdcN9sfhG3GCE5fKR4oQLacrKePx1jsztdnV",
  "key26": "3jBEwJtGpzXm9E8abmjBxFw3KSwQLjYDd3iNTVeXG3koBjJ3mdXLZrEA9jXYJAJLyGnCcXTSwwkULgxW7LqPfjTW",
  "key27": "5cNbZyLiBdw9jkRXPvDKNS7ETxBh22oSttzb164tizYx2HzY3yZNDU3oRkM5qRaD95McNSAhqBhYncdn4rCgArRq",
  "key28": "4QPuBszJzJMdtYeSKtovEvPeQf52XrNtyH6q71KTexRUkaHbry1oHKXdHCp92oePQS83tfWctADrSuJkGQ3t9HpM",
  "key29": "3DSak6uUxngpAQTNo1DovLXf2WPMBR1pvwV52ZP14Y41nLnRQqbFQgNxqgpEKY56LunWijZcfJZnfUtsMY1Ji1M8",
  "key30": "4Nk3r2YcTE6rXqmpHjKbr8YRkT3NapQm2nSuNH18ckaaWavvXL7MmhGhaR8b5Mfu8zKwHquN7zyP4WzkTY5UDtr3",
  "key31": "4VD429HtcbWcFbXS2vTXE7H5rJnZMjQaubfgFgsS5ijkqt4m8r7qyJR5UDxYq3dx9gN6zboTSm18sZXhcW8UKe9v",
  "key32": "3brEHmFnWt2DTh2UiCFPP29ezG7of8rf7tusjvgpVoMCC28P4fVGdvB2wSL1tEXPNMXdDK4svAUVZ1tYYHcGBqXm"
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
