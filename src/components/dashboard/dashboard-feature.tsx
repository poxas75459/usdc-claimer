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
    "4reQUrffFiWmrp5JbTXAi85TarWHk7CjWQreoW1pi7BTtCHDwVZPcSZd1RfkaDCMgXCHFe26yFgQH2tSTQf1AEaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s48j3HT5obUjZN3no2LC3cBMZ3Npgbm7VuogVUFor3VsZW4JASXaKYsiDNYbbHQtqVRPRSjMN36qx4F4f6aHduX",
  "key1": "4JvbB5bEdipbJLtHz3K1TEKToSZPH7qQ73jnvAXZWuahz89yLCqXWaV7KRXBrYhKiqgsv6BXZCL6qmy39acm33qj",
  "key2": "2R9mzsqERnrU8zvUTD78g3ij2Tf33FS4LGjZFjo2cgTgYto53neDmEwvYw67kRcLnKYRWfvqFjcLkFB15ZEJTbkB",
  "key3": "2s85vhB1aY2AvvUVaRN6cpkLisEeRHd11ieAhza9fBBt6AbrjKJneMWFXhNk4AW1byA35eZhKgYazyfscriuioK7",
  "key4": "5UTyVEu2s2U6FyNygNqmmS6Ny65cmLPquRLK6ety6LHmBbJW1qGgvx6A3E1GSEmUMsSNVXK8mMZFa3fiEaZvTyw",
  "key5": "2uRdUTn7KPic21jZPVeeyUCgJqU2nLKKPEBMZhxeW6QqBt3YhAcbWW1N1FtRXcpQEAojjmqX9bJdmf1XxURwD87u",
  "key6": "4FMYv3suJcNqnvTmw6uBuLgpe64sER2eSYYagVQabRoEpH2imV49T5wvSCma48F2VbFWWhjoBjm5zC8HTo7BhKGG",
  "key7": "4WrWPuKFfpN8PU2EB1aYCWSfxajHBkD3o2WTVACMSDacPdKfAh7XA4NhM3er9dimUuiyrNNm1UwasHroWAcXTz3S",
  "key8": "Z8JzU8kvkBCzdV7wmmHPRwfvmsmV21CRm9FjsWggE1ydETbFTd31rHMzVGT2j1jwg77WR8vABxUP3WTmbqd5FG7",
  "key9": "2Q7oXNLmPEkKS8o3RRhhJo9T3VydQ8bRZMvN5gPJKc11nRWy8DexyQGVqiCGTup79cLmijWftNsBCkcfUCqsLbCf",
  "key10": "5sbtAQNjXBLbFKxCYDt6DiMF5dxMGkcVireWVA6Fu48bB1YtqyThdmDTFzoVvyZewDCCebkpberLGLHTT6Pcm9mC",
  "key11": "3X19vB3wPKdKv3bo2rnpoMGBZ4oHQCHYZUYbsnXsdNk9RRBt8WQJvkfVdTGBgoRpCH2ytmBuy8EQJTQLMiQZY8gh",
  "key12": "3edteFvy3x3TxbPdFVpFaeCdeP2Z5Aup3PU9cGf5BVFFKuKom1mR7uSG5ak1RgKrroP98mujmUgyXaicVyC5wy7W",
  "key13": "4vWbU6sj4VCKwKyecER42bpqAPNEvitPvH8RxgjMiC7smxd8X11MkhRumwHFL1Zubo66uSZSgX6UoF32fvWvsUC3",
  "key14": "3h5fHwESkvAqjYQi9GAgVTBMgQ4WyTrbkYsyGZz8nHKNvYnKcMVnrW2BSFsxdJAuCDxc71xs6ce2TjvgMSaSm3QC",
  "key15": "3SWDNuv1BikyfV1wtCdJxJ6kqk3iLSYS8dwt7DuV6DvgvYXWJkAn2GuNwQnZWMPahgShx1vqDWdfTV2JKsXKnEiL",
  "key16": "3ceg47GaM3NdEXQprt9ZUEfdG7V7Q2rd6vnvdBtF6sctrw6HtWAN2L4g7o9BTUZbAgYs8qAx31ZVTG3U8Gap7pV7",
  "key17": "cQeiCjxKCWRswbviZAGDGQK94qPvPzNPp7YWoTDrsmJSvQS8pYn6RjN1pGFE4eaXWvHckA9BXw9jiL4GVKHQenV",
  "key18": "5L8ytw6EnPgCFGdv9o5NWEaNVobxNbEgZoJ1wo324qejhzD6v9CFtMqRdHM7RkEmPWn7ZPUFhB6AAF5UAyJMvb6",
  "key19": "3ikZJA6tV62VhKD8MAb1bvQXxe39FRtv4QuwLSdCPReNCjuCkoKMb2h367cCkuxTwRif1xdnuwiWuGkUitKSUsFT",
  "key20": "Sujb6CisruVrik1f28uYeg12fCaeNS9YNQCDgGVuxcyggrX8wBn6CqRnC3vpgzB4TpCAGt3CaHg99Fs1xnLZoK2",
  "key21": "UUgUExzGmethYW8KZ6pvdF6zQBXgnBskNm4f7d6MRGfAZ8AXKVMdAU2q5iCWEw8NLXZ5cXJ6c4gz1uD7J8ovN8s",
  "key22": "cciZwadhyFdkAhp9xARQj1PxC3V1ecQNaRgqhzMcLJKQKRnzojzU2pSno9edfDH62h1wM73QvvHxrsoYA87Ggay",
  "key23": "4YPFMh56jN9jWXv5DZpDmXiujUn6FgTXFvgRwjACrkeuwrb7AmxV4sf1QshwGzDuGdT5r2tSEhhiDBV8tiqFRmpk",
  "key24": "5zwqgsQy3qdBQUihjRRLeji5GLMXvKGadoJ5mtsYF7K95mQh2jEs5bgNVmAjoEqrMUSM5HUVKXpKA5XEExwTzg7X",
  "key25": "3nyUUBHTa95kAHBvLqVBRxTCUgpitnjyRcbytqBPMDJctS5B13pWMqStAyMeoZgnazgfRKjSoRdixgAbxfqbJpbk",
  "key26": "4mBKkcqyCsRRwqLSSyCc8pwnwQCBvxMHgLRXbrt1hCPrMBA8z5ZadtuhRhTxFPfCwyZtPq1UKz6rAEEqD2Av5TuH",
  "key27": "okRnWnipDVn9nkEAHMCNtvBpPTBjZKtkG58t2cv3gP5xnERbWLzQGAPoN2LiiuECt1sFJ5ETkcBKY5j6rLrL2pc",
  "key28": "51D8qb2Ebg28PuxdiPVDCSt5uCGLDm5PGWkrxS4DhGXb36K349zyWkvkJgrsH5KbCxRZZNb2ubxBB1KLgJpkFw4Y",
  "key29": "5DU9z1kSrwBQRHhbCBM5Tm1uuKYEFNepBDKRi6MxMt4pSALcjkxFrJFTdRdResYp4c7J4Lh3ogfiNFkCK3z6pe35",
  "key30": "5w9Z2ddFrUdLaKcFSC63pSsUWWyCfmkcUX1U3ZkWj6Djj2WwewoPWFcqnZDexNwFWFyn1jhEfZLQQfHkEw3pPiRo",
  "key31": "5DAwe4fpNxCzWnd7JEbLLNGxcnLMiamXZU5xxKvCVp6K1qpY8bFi7BKssNgn8dwPrdrpK8LCBSy2otUVNNa3H5ik",
  "key32": "4ogvija7t8qQ3BPUVuohnbJU4Qr9B7ntsm5shgNRVhcyEaQAjZTRzSWHthVphuYvK1wCA6CiEUTNDcoke5kzTroN",
  "key33": "5bF2swywC5TjAgUHSd8evtbiFi6aSpWtwDZvAWFB5VPk6N6MixWSuecKyjdWQXYd7eKHHuozYAoqSSrKzukfar7i",
  "key34": "5qnWPE4twJZaRDE1siWu8K3dJmPqapeC4BJemsmF2fWhJNtn3Xuor8U6C3B5USNQLi2qtaH3jeJrzPq7c96KHXsT",
  "key35": "4f37wAf9rrUao4nNsNnPJZ8VhVBdEAR7QYvWD7ZgoSEvTUvmUAcVeZrwU6ATTE877xQ1FakCUyhL1jLFoAo6aFJ3",
  "key36": "3D6Lm9WXa7vn7h4KKL6rLABLQZny9ffrQiu63EdrwhobVETGFUH3go3d23PzGXu7uMwb274CCRR2uz9Ab3iVeyCx",
  "key37": "4G8waAHy1qfxaEPFNat33zCY8V2Y2ks2ekRTd6prB5ea33B3GsLFTxMgB16T2ubqRNNWQKpZaCnh9b6s3AtvdjZv",
  "key38": "2YzWbiVCbtS57c33qbohzPhG2GjRXjeDU23igtuvK8iLPXgbPraDbuwRLeMngZDiJPZeskjx8m3RpCEJxFxdeYpY",
  "key39": "46JrptNDMBDusabxf7Dhyr2a2fUQmCAETYKbeFrLwosH5aRPFXVdaYhWKC6F3eigNsvAQRn7j1D7n7S44vjHosfr"
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
