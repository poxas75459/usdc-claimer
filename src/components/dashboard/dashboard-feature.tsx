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
    "4d58dD1zhtJ7XEkgLgFtFVbrECnsdoBUAPrR4tMWhzCFjCEQhhPbRKpbTbGPYqANERnXk7qeV94JvbrKW8hD8fCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NcDHw8cwh46pPg6gaFDDyFmTh2pn8XTqkquCC2X5DAvfENCntgmCyapVoVB8bvqG5utSPV6UezmHWMwjjuUScJE",
  "key1": "3Adpq7Na6wpDaVny8cvjSpPbn1KEeegUYtmpikJg5EDG9iw5EYM9kEXe67xVBRrHx2vGV9F2e43aKWV9FN7XmCnx",
  "key2": "qPosiVNtdvQpW96vF67xvgPiZ1WJZ5HuZwCd8Zjj4T7r6HwMnDEKJo5ySx27NLBpxX3uFmhg9tyZQTgPhrqJx4S",
  "key3": "4CBMiPjPapfbUZyYgqYXqHc1UoQbpoaeM8ABpfnvHiyjiX3VRjKTqaMiRTNG3ZPp28iNnD581xLELfdUqUgQoWY4",
  "key4": "45hFaUMWgqTLoPrSEnJeYKYUXKPK1MrSZa5z3oxKLKUwgTioLHuKukXU8bC6FKzBH7rjgcoGZJs13PL2KEokXjRe",
  "key5": "4LzyCUH7c9mGfmQtZp7dVxen1Fh9sX1DSyKiEzfDEQeEgA64MFjjuA7PXUEDhmthBhQ87M82rywomci3Kqn1QjZT",
  "key6": "2XidwAdnDfuMeZfVHxGAKXNdNCKPFTk1zX9u5VECsi7AWjU7bGnpVNXGBgRf4beXz5ABLchU5dnzricb8LBQdwYz",
  "key7": "4qDzna1SiydjXNbby2Hc5mAJFTRwZ872dkKAk4mRsBgbNoxB8jNzZaX6YrvWoi7zh79D7xWa3t6TUCtPwNwMRW77",
  "key8": "27cb6RAjJx91Wejrs7arCM8rSx5K5wGAFwAVPSBw4bYEkNFSnJ1vfpx9LBySBC2KreTywf2J7ZVxW99gKpfDtuGJ",
  "key9": "3ddszRnWK4Zjaxji4buaMsWmWypDfvk45AbSV2vkvXaMVyPPLVrrBCepPqEccmZYtDnKEddJsCQZWcgT2hvtffMu",
  "key10": "FjKkLeGeNfwqz5UqqHVAdyuNgDp1DrJ2CbM39fGgHWQN6VX22CuLjdqFhzo9Jj7peJ6N7sxXwyMbPZHo14Wk67o",
  "key11": "ydjcAon7mrQpCshw8uVdNJHrW9gsJRDfrZkA1bQPSDJCB9jqPQgBsVV1DU3oMwgj6uUSSVsV7fi74a1bsujWg5G",
  "key12": "5i7RSRjULH4vhxQhT7QoMSwvKNoAKWfYvtV9NorfnktJCz6qLtCynipXuYzMXCwYCGRdSZpsumht4qm6TCaAAKsQ",
  "key13": "5qpbRbjLvL77sLZcF74CRpTMs21GfaNJro8yPB12LHJhifw3G3orJb8KFufkRenDMBDHdF79KdcQA4mfrM6iNS3K",
  "key14": "3TPwvt3bSj7UARaFXQq6DakQemQiXYUhAeJ2eXgcYnqsKswMmGLAQNmiZPeJ9MF4qU8LATp3f9TBLg1y4pQAvJWE",
  "key15": "5qwhBZRXSssAUx4VmUVH5e6Bxi51WZ5MJcCSRM88qVutfeqHrSjKajSpbzh7FDrd6wiqD8YRTS5DCFLZNp5DsRMg",
  "key16": "21F7VGZerjNGJ43zv7pjUgGpbQVWJ4wg419s8UyvWRU3s5vhWgHCRvM5EM31cGq4NDQF3FFgDaVT2sPMLu5vWrtJ",
  "key17": "SDu69v7Rdb21rxDTVom7tJKawcNUFGPh4ZMNKABJQnqEjXFpbe3s3WvCJQiJVj3SeLXqejGnLcohaYnqWhtjkkG",
  "key18": "tcw2hLbf2HxYdihuWr2FbHqoTHLC2LUYEsdvAprjEcXVuQjRsyL5dxkYdBaaz9xoyhRpMTevKG5LCZYZsMqZnFR",
  "key19": "2YSyo2zHxVPpn2L9iocNETzA8394nHPUgAQJD6LjL62Q6yvBPX1Po61dj1mrjiuoe98U6Jrnp3WeD25PyTcyn1J",
  "key20": "3Nmh3HcVwPxbwZDYkGJutEZwFvZyu8dnqWrwLAXv1BqivPmZhV3XNbXzTprQ9DjGzVvfBxoNH7ocufD9j9WTHdBk",
  "key21": "2xy8E4KLWFRd3Bpvhwjp9JXhoryNFVMsdJytyURkW6L7uW8dXaRNxbc7YHCj4Rv6G68Yspa6D7HzX9AAqrPYwN8Z",
  "key22": "7s26Epxjuabtm7Xen7m5v5ArHeoERWXP1GXogVLc6SKN4Ucv9UQHy8udxGEgdaQJKRF7ipsrkmoYZ5Bt4dQSCr9",
  "key23": "2u4jaBfXqQ51b7iqKuJ67ra2ZVrnN9NGA63eCsStcFE3yGbzS1pVrUZXQZj5KKNppC4zUUvJExazXFno7AmEhx7f",
  "key24": "37JvVWx4bLM76XBG93s5kvbfD47mCXWPqQSVKBqKVeJrZdAtdHpdC3Xvv1shzhUvAqqy6UzGLoe8y5mqtfRywsL7",
  "key25": "qoxWjJLkZYe43xs7icHcHus3xh4ZMErCH6JApMJfkUV7mZEqKhpWewxVKBLS7FwZaLViJPe8d2GoMHVzSHYv7u2",
  "key26": "A21ftPwqUHAhCfEPRyn42XWKYWyiraErFkcSMYw9dwnh1HCCxQFyPj877wNo1kKtZ6gjXkbdf2scyr6K7ywVueH",
  "key27": "3cn4Jeq77DWUYc3NaRwSBtkqTQ5xFWbSZK6C1BGW5BDY5gWrbHTCG1xoWR9tuxvaq2A27ETiTTqzLFQ35NmkvDHL",
  "key28": "3v2FxSQJJp9hjyS2pzuKkNGBSfaELJZfAnpx88Uuo3xvc9jxodY4nxoTR8Vv79brSpeYJ2DJhBfnFQwsSW6mCjqx",
  "key29": "46ZpHAvXjUq7sApXxTANocEfEc4u8Meavw3hy5dZXrnKcPCEmfxpbPSLenhkbbPtZ6W8Cf1GTawf4L3CD21Eq4fA",
  "key30": "35MS5iaphZgwvASzXBFyE5gTXf81mKF7TeQciHCsTw5BdXw9bknWGTVQJVsFTP97EkxQqHLEwofZBgNMX5M1oSzm",
  "key31": "2UC2YMVAvt795tWFw8Q9QAcUx5bkzzCkk13egMFBaSd5Lvb2p1orHrR4aEidDLLtQKwuD31whtXMAZwqJMwncVvj",
  "key32": "4tigQQzj1CmgT51K2EPGPRnTQ79QKradyH99vMxg18eUAzQkgj7yVRjaS9eeB5i8rsRoPPeWSmiVGR8zeoU1YUvZ",
  "key33": "2VkAVX4eL8YJLv1Awb5DjvP32RnhJRv6b9PMVGndaZ5KyhERoNETcFsxC3dcrU7gZqXueVpccuYY6Bgg2UN7geme",
  "key34": "ACzHga6xteQqPWBaKZg3aVpGEkYpT61EPY5YKEpJcBS21kpsGkJwEYPqDmd1x8msfuY3a3BJWX3f6ycKhKzwAcf",
  "key35": "3nL5jWLUsJ79K8mF96mQaA8RTf4fxx6CH9idKNkJdADqy5KQeE2yZCuLy376qQWdYgvRCT1kNhf8YkjUGG1YBZtb",
  "key36": "36GWVyyhyW9EZH2RbMGU46iyDLQUsR8yv7ThhbwzDpGeszvjvqT6cVgV9zqRjyguAnoPsaf7mvGyVC6rbxZjV6Qf",
  "key37": "5KPakf9XzLpJsQjY4r7MrXy81HhNDnPtqs8d1KYbuL8bjdXuhmDfn5oUYBY8Lba16xMQiyuRtJ7q38w2UENE7JKZ",
  "key38": "3sGScqrXCzVX5DrbV18iw7RJiRriwYgn1HxRFG5MEU42F7M16EXaAiUYa6zHktYcPMwTjA317dsRbn1K72Vua7Uj",
  "key39": "2aHSkJCuZGLf9xjDrFSoghwy8Xb8E2ixsjFTpgDTqcuvRdjAe36GaSWhbjdobZpWLidnuWLttgywHKFEoX2GSZ7N",
  "key40": "5e4dJaMx9ccciEzgB7gUeQ95kxEa7L1Bz6UfgpbRVL8qsGCHQdzsjNfZ5sjPgNxMvH5DSpSqMytqpRvx3B7bAQhX",
  "key41": "5UaSrKrrmw3tfWehZ4k3QYLAa2c5DYLdHiv6hh2rCvkAQwuK9YaUqFs7gTViPgdrH4CBJtzDfMkW6RgjKNV21aqt",
  "key42": "3wYLfPHZTMcLVanJz7q4zepCn3FGRUqy2PXbN8ce9SQ2coPiFyE6gnbptTQCEjf8xaSaPekvZBC4PmpEKhXzcFnQ",
  "key43": "45mEuM9r7gxwo8b6wmimw4VcEnFeko96QtL7Td1xsdxymwKBueAXdYBZ772Cqyav2MkoJBJbxCFruihKHpVAvJ19",
  "key44": "YBN1GmoBPCLYZjMVtpLcwNf6zyzPLLQdUwGBDM6rTG9ZeN5fxxjN1kyJvkeerJK4tC9C1oDW8kjY5qmcY7PtFZi"
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
