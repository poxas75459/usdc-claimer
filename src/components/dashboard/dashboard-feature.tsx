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
    "4kzcDSsyofVMFWt9DsLo43UCDR3qsR2UGxzW3KZBZomVzkrGKWBFBG2v85udqE5cCbAvtv2gG4LZE9zZYb3kwhDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "374cuaUXsseKLDrFVNKZri637Q1jcALT34hg7gG9GxhYjYnv2p3gpwSvmVMVresBWDFyoDbhDA91WW9B5buyBGu2",
  "key1": "59Gxsvpha7pRjANShpjMSkQzg8zPvDcBodPZ1pGSi9pCvWh1sXbfxc6vc1ZpWzLhMLvNYRFUX4bjEbmXYxjBmxVu",
  "key2": "eMYtV9v95GaHXxECwFwkTWB5aqgkzB4rMk83V7EXzz8mXmALX26Kz1oPtWR5vQipqYABSwZ6UWTVVJ3PipQ8YYt",
  "key3": "325rGALdVfhCtKQj1rASLvAiFQtBRFCYyD8gF3S2SXzohkVvnRQoF2Mi22HoYsKHasf7jnHtijKjMwktco3cgRDb",
  "key4": "3Wyq77oeVxfKuqWaHHNA2VTQNKsAczbo2runjhbnsRCUy4YC3qLb4mryA2HbXj8Dhm7KouXxzYsMRwqM8oiUxcfP",
  "key5": "2YSTDgbVX4p9BHV5Rs4MTPTyn2ghrg52RJqLXBitMBARhh3HewnfZBX7usYqkbuRjrAJikAZDymCVMnH39mSzedY",
  "key6": "tzXgPcsWuzJBFjVWBqu9NFznag1H5fNiGbyL7r5tX9VbZXLEJ8aHPdD3RscZs3tCGXW7dCfvXFuAtYL12iWFJz3",
  "key7": "3TmmNSWSBYCPr3STcNzm33zj75U8iGjDc9D67FnnkeGhse3w2sNHqZCGj4Ptj6bEB35MmaphoGCSHT5ML3pJ4DHn",
  "key8": "vrUdVX46CGpjPaiQz55PpUttnYxWH8tqaYkutnXHqWkKUaR1QRzZaa4bS9G9KmEkmjfYBc3DYcoRirum1E3RxQe",
  "key9": "5VXX2qvP66ujYScdDedJfeCQAuY1HXNqmHq9Fi8AVRa76RcnoGHDy53etNY9hvaBSRHKacwb8seHGZ1xHfp2THjk",
  "key10": "47H1yJgSCj4nnjGMkJUP4ozUMw2UmNQNnzBc5ZxwFMGAYByRqJjCh9myxhPTnismwxiJX5RYA1mJtjaQUgptp8Ss",
  "key11": "5NPvHqVkgaxcQzJv2ZM2UdMEGjMydDr69YUZc5y4bZtHnQdtQXR8YWPGY9QQsZNc1CabSZciZ9yiEJafpwHUbbTR",
  "key12": "4kHQHVC55MHwzF51gG3azz7a1GCG4je1wyNMJ6PKbEsaNZv8TKDNdTsmvYCBgm5zG5uDcN4DQdNp11qyh7ccdUVz",
  "key13": "4iir2GtJazv5CFraMYLTvT9zvt6WshKJNNarkzucutojvNn6zC8YtLzh7FWJNkr4wtSSTiSL7revGpFd8uh6aFhS",
  "key14": "5v4TGDcohfi8jNYVruVJioFAPeMuL2QN6HUnn8pDejSk9xaqY4ZQ8E4yHYAA2zvf2GqYdXDvthfigcjcSR5cNDCW",
  "key15": "4J1mTT1W1jZZSf96pcwnmngavSRUXjgCqZBdodJ84ahPHTRqGou6HUj3nr1YNBGWcjxsxCPECycZKorJVgkXufnx",
  "key16": "3WWMh47CiCud3Cr1zFVu8QVng9iWF9q33kpJNpo8GL5drPUndg1roZ7XjwCWEQ4q3pkBqusuufeEHmKjP7w2nJuJ",
  "key17": "5yYPagpy9TBrTsMrtFNDq6XzjhYewrsXtZ1mzbqM2ZbkHAy3CayQph3tzWrHqa5VUCwVoFMGV8dvKQBi231SZGm",
  "key18": "5a7JvvYbRAbbmjDoNSSGhdTAtmF14YCR4bdkgT2s2XS8QE4ag2kHwiBFK2AYobiRS46srzbmDDCJiR7LsoxHZixK",
  "key19": "45zau17SYQ5ZyxGfUc94urCFB7Jbzfs3Erya5gs3G9mxEdzBUBTWJjsVgELgsPEE8rcMpDyG5vZ6Sf6DaxXA365e",
  "key20": "5zQw9oBeftyqE4AzwT6LCqVGFyh9Y6KvGiTfZfWKiMfnjcHSHnXkJyoTuJSwXVY7sx5MGq87Lwn8iM5WaD9ik3m8",
  "key21": "5ZxmRoHNiTcGGmYDT6kEkZDsvZp2y6PwbXyscDfEMB36wK9V8YGSTdnsbzKwWagcB8LqdEfQN4QdQweXRoPn1T6G",
  "key22": "5zKXeJBnXrTrKu7F4R3gWE2w8orvaJvNDE2CJfsJ4Wf71cAvkqb2NBbmcJ1vG4NdpyfB5mJ34hyYVRD2HRz6Kfug",
  "key23": "25FtuUZWtSaFh2DFvjhSA9YbiaHfFpV8G1xmx46hxLkykRDfeSYSg8rRX8waADGeSGM8HiMTDYWPwWZXXWcxi1Qq",
  "key24": "2xRzW51898q7wEXRHDFTaGSReSQUeEXRAFNWiMhyagWsUFctYp3hqM3MBgLST3DwNowtpZ817gFwm1NgZ7VPbSsL",
  "key25": "5Fkbn2Y6MnYzttxu5HQmsPEpoqzu8BByoPhXMCwHu6NZbP1r8zqd9pBnbSW8b8dMk6e99X4AoVqzS8s8SdAw4AKB",
  "key26": "5q6PiQvXNRBiBzkXyLZTXk7ZLggYCBzzAmZtD7goDKXhiUXu8DX8cBAaKXkEPaPdGXtPmgfcfY9KpEvUdXa8yf3c",
  "key27": "BPqnaeMBsYPMhNUQqJfMp86JTzhLi9vrTC1tqnkZbP4aeB6evZ4LdZieVoZXjzvMepraX9k3NHw2LYsPyAg2roA",
  "key28": "NUNJECoU7xFCKCLuEhE8FweJcyfNCrtbdcwpWwrjJCXeSLY1NeavRBydg4C1G5nXnH3gwDbSdAs2WSvLUULuVwG",
  "key29": "rVjttrk2qP4fg5LQwJD8opdMXrRsAJnBGDsmEWs5BKqct1kqg364fBCNKE5Zuwxc4oucVtYcigXu8535t1HyYYe",
  "key30": "TwdkqxHSfqpixkJFPNdoAPAGs63Y3mBFQAc46oqyppMNWd1mggxmUCiq868V3RcS9EosB8uQBbr82m5oiGzNPjo",
  "key31": "4pkfooy5qkGznc8vS419r3h2bXjk81XK9KKcsCxhv4AYgGNLmdNv1gN34DPeHKh8iwXiVC6LHofGztHTzu8yZXRy",
  "key32": "516kvxNeuwXanD2GneUXffVJWHjVRhhvD5aumih8f6qHJ1VxGwX6zXYNQsgwsqH24sSZmDXvPoRMX3fjbBScCjnG",
  "key33": "Ncc7ny44W85Ax4otqv4QAdiAfY5MSSUG3pNqRYVCjKuZ9rxTV1jZNcmo9Zjq4cxh6eXPTggzzVvs8y4Hsd1KAFX",
  "key34": "5fGyRDV5vvjwgJm4Ei1F97zi6dM93vrXuHtaofqjeKcpAwMk3z2tz4kFJb3FtDvYzkakn82hFhqSdTMDCqSUdgoN",
  "key35": "5mscNAcULk2FrpBRf4NDrjjQQJQcZFd37ZZko6WFcSz6Hqxgi3zBnBGAfDGFYHja2M9v7HnezM41zn9cVBasr9FJ",
  "key36": "vps5rekRYfCnXPT8TAVAz5vAJgBecaMh4fvFqJu5ePtGCj2PeJjhi1SQi7eNiJMMYZKFz78WoA69qTrkBCUsQrj",
  "key37": "2bQVFheqwVS5VFb6WJzTWgQR324gC5RFSHENov9hDYxe9U2jbKBreHY2Zs6jGoWnkxpdyVf7G2EVXT4TsebNP7CL",
  "key38": "2cudmdT3bXwZ28J1N9NFz2RNckq1UfLShJ7ZXpurshz4Z1ghG1y5Hr35EEL5h1vPoNp65M2yFtUhfLVDnuFPSQSJ",
  "key39": "4odcGVmDrvtBmnDgV8ZjLhgs7qSvmh68dsnyvuqKUuJxTQUTcuxDEyp9vSoed8JexD1WzbJhJdrwyaP6CidVv86P",
  "key40": "3uzSZ9qqqLV5uTvyvceqttxaXto5TgqSAfcGybm8WagYaAYKCsUK5k9zFCFGvcs4MAysRTYanqpz6htisfVC2as7",
  "key41": "5UDmbBi9Ggp9oxrUsv3PtV8NXTooLLiFoezCpswbLDEUVkjjYEBTpuNKixdFsS1Dwx4tkNtYeDowAvHzkiBPmae5",
  "key42": "4yXKC5iuXL3iY3H65qg7Ugq7YLfch4oiEjz3ytJZHydqNTUCrhdXRWUGsRTH6D1AhAqBubyQqcL8g6MWPy5rRViW",
  "key43": "5yxkh7UnEwEzjH5aBV6UfnJttgMR4KmUoMVM7a7u8N4gWz7BpyyjgojRBLdwpC3oYK3GkUypJFxgQVQgY3KEqgAt",
  "key44": "4TuXzrLyZG8PrkucNKk1wCqJZb11AMRkCbgHQQ8WvZBzrQYUFYtkZWMGP95bSwUq1DKhd5kBoLD7X8atFCXEzA4v",
  "key45": "VKmNAPfoj8gdQZdGWbrUyVrzgJU6DTEPQHurhQs6qRS9JaCrrKyr6b2JqSFMZ6rArfFxWv9LR12NZacL6kpP7KU",
  "key46": "g89mvYBjhR2eQdMyxddpsUD8B3wdzXh1NWfvKKzcohsXu56aTevYXd2fT5wb2aen6CeGWHszarXJLmJ6Rn1QkDr",
  "key47": "5d78Zf82eyyGwxSTboq2GeCBNJANjPm4VSLs5hE2CqcAABhbunpVsfQqs8Vp4R2X8tdaFDTBHgdVYmtkw8KEHfc4"
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
