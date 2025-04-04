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
    "45eiRqsuGbPChhyVNCCjQmHqYpQ177EnGFXkm4oVWxYJDK4qwYMmpYBjGVtUy9vy5stFKPFMj48nMB3dudi4aBfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xWoQWbCTLgaay6QEFndSd98BMos5KDcsx4NexcquLVLGvoXVWU8vPKnZDxd9STWZT74zDJ8dvbuzm2J6AGyRtzU",
  "key1": "2SD7a6B1CD9X8NaAfuwJbAddnL33TUu6Kjx1FWReuGssvaBmv2R45WrsMasHuYBF7qa25iSUgxKXvaF7LisR71Wz",
  "key2": "4iu8AGMBdvWQwQZX6NhEr7DbL5UkQFeJ2eFs17a7D7ut4uGJRzaV3S4bzHCnxbSg5ST7RUAbz85A7adv8gUXM51d",
  "key3": "4958iFkeZaJ5vUsgRcAQ7kKzKm892oCt5M5FXEGXoACT9dE824Uzb8JhBWKWzbCzBQT1dmkxEs81DQYQYVFo1m3E",
  "key4": "3KZio6QYjEydKUjkmSUWHKiF9L3FPLCtXHKXHYexBM9Nf9KTJFSgWJbjFim8AehoS1pvLmcewnow8i678dTJGYYF",
  "key5": "2SYPUQDBJKW8293GzpzGhXYJuL4dHso5heGM2J4LQYLSBivepCB3fHw9J8bCPB2FDKGFYyqzrFiCkyRzCgcGUqRp",
  "key6": "2zfUEHoATcHBAHp2VS4fJCskt4tHJQgAXspfZJfoS7ynqX5zoSKHZRifdWP2AN1kN5u88haapVNocpmUMa92Ji2o",
  "key7": "5JghA5Vtv9n1zYmLSDCvyNrQgciKoeYFPA3RgnCKGUdhSiUwXTqjHBzBoMFMmansnpsMShoVvBUrxXxDpyz6zbvQ",
  "key8": "4MLRuqu5G82EA7sAgHQtQBBbwnMD9V5EEBe73n4pr1zyXXuEvifVKMiQKhgzL8CPNKvDrCYoSBRSt3CWAKDrWJ6K",
  "key9": "5rj3Mp1Z4hbTto5W5qFH5Pqr6nzPaFh6k2Xzt7fEip4jaR1ojyk42WCNv6DhWMEtDv3C3kafZ9aUHE2CVErusdWq",
  "key10": "5LyMcSxJoMtKobi4k1V48wmCHwc51bvn9mwma3ZoPdU6YR6opovMsnv4UPhhNsmDj8Ehs2DmvB9i4e4f8z25L2pD",
  "key11": "sc3abRisyj2tXnN3FoLDHcXhkQXqwDmM6bgLVmjDSSpco3WaYCs6U8tbh8mY75UwwRnd2usjNGzn6RkF7EFP62y",
  "key12": "4AVSViGwg4v1Tv5RuU9oBFEGch2vdtZeSWw8KzPLc8fCq4hQuzEujxaDePyebBCaWs5izhBEHEyhwKpKH5e7SDDF",
  "key13": "XJQSzbSmsq4Wp2TUinhNxfZFNVGMKbtyg9pT2z2YpZ9r311GqW3UVikT75W491cfiGWU32orCVoTSPfEDpsBRwn",
  "key14": "3qCtBFrr8nAa2zQyC2S1CGKWLuwUXVt25i9MLj6QxEWeAjdQdTbSXk6gW4xVy9ASgpsnToAFQZ3ciAyX1DJPUkE6",
  "key15": "4F173ggUyjbvjQMBgC1VmjB8B8hQuKJFM3CNNC5DcYyJC5NPSTkNEp4EVWLfm3UazGgq7k9rqsk7viqegt4baJRr",
  "key16": "5ui2uKEnHCGxVrnPDKGgqXxV34vrEJPv9TNvssU6AKaxf6XvZ1ojYkmWoX4ovqdESNxrHYm7hQypAhXHoJoyEBKx",
  "key17": "632iSdjS3gsbJVncDUn7waqELyfwK2dCqqDKzHgiZtXT3iPJfZ55wqDthmV5uqJ14WFhx7NnSAynhPTQsdGgfz4g",
  "key18": "55uZmQxCFMT7LSDG6msjkmaPbFZRUYMmKoXghD1KCX4eWkLn3gtXjse1TnLrs9PAQtNaWQatUgSnRTeVp995tAma",
  "key19": "4GZh94ywXRSGxkFZ4i3b1AZaeRfkpLM2CSAUZAFButNkXjt5ScQV2mS4wHPN5GLs2GvXt2TDANH8tVpvY49LifTF",
  "key20": "3KaTBnTudF8kWzER9ibG5i9QfaLpzZDfZnvHr9PqY8BSGmyHuVgjaRNUDaw3hDUMQ6gHmFhFa5RuuTNA3usGE5P9",
  "key21": "29zkj9H7FPy7kwndpfbGrSC1ZipLBamqB3DGpXEF9dkT9Mb8J1iJtVEyU6cDfrk7uB1rBvc4W22sbtwbMvAsNSDS",
  "key22": "4brCbrkWE1oB3AeHvh6oczUN7R3x26kq963cwngMB8AkQc39vkJndeg5csCYEzAuyyLXKfHxsq3bsN874iLNeKBC",
  "key23": "38vgZuEWUYGjvrrNm8oPrwubtZfWywPMdCJSonGvodSzbM5mNf48u2VfkC3vAWcpLsBHHpEDUnbc5fux4Rct393v",
  "key24": "4iisTzm2xLP7sGRCayfKihDfic4GrBv5kQd8GRvo29Dda5H9EE9fi4uesTFovPqd9bvt5Rm4Q5NzfCxrQ9NiieSM",
  "key25": "56oNdFeFEmme9J7WdKYEFcxnWt64gTnJnnXNgRJNqpvcmiQ72ev6yCAaBNy6fRAxaSHkwzYn5nqP4bGX8C8yCvD7",
  "key26": "VannRzstSyVTqQ9aSNRWqHYndpJuq3tzChbTfFcbubWi8dt42i95QausWDwK6Z8A44FRkDMSEfe6HQELQg5quUa",
  "key27": "5FBm4hrLSb2Sbwpb6WrffBQC6XLQMhnMVsD2kJBXRC85eXngpj1VcbJNwnK9jSGLRarEL7w9czS6diAKx663W2nT",
  "key28": "5pNjKzqygZsXd8wKJ4F2sWknonXy6SiQfZm36qZj5mVxuuLqCotSKEoEoxhA2bDJqWh7RQN1hMEXxLnuKd3xhgD",
  "key29": "3sk5o7ztf5N98n9RFEDFg9gYGPwB3b8cNU7R9F3pPqxiaV2VMxRAbJEFTuFUoNx9gy5HGpWrdimMrsVnSpgeGTXC",
  "key30": "2qaBMYyuQUanaDWfkNfPakybLS1uZ2uTmosYAnM8FrJtkDWXSu7SbPYy5cQJW1JodgPRjMfwtGegsofYPtaPgAb9",
  "key31": "UeAei4JEKfhZ39CEJLgPcfxS6E9SE8V7Kp36iVaEgUomcKdxxRBgwzgvSA3iJQpuxbocwLCJNWFn8a32NxD8tVR",
  "key32": "FU4SkxZzio71TKPbcbAhz6BMvixqpCSTtaRyPEZJGKTPQsfA7Fm45TMg13u664YTdTDJivbNCifDWd1Syzr9L3W",
  "key33": "4Bz8Xx9rSfzqAAsGqs7Z7r61DG5YBBqx3ZsmA6Xt51X1J69TALhWR5ZKo235yQCLdGoM2Ww2xoQ7odMHDZDp8xAn",
  "key34": "4JPhWKsKzZfLRxjyncovYgEHiJKGCcY9hepyBHsu5hkmTvpfDA6Yk1jXW8UqDaP3gqyPh2kmvrJE2rnVvnKQSq1",
  "key35": "2bmJB185kcPhJctvh7LdTkUWUZu7biexF8pief4uMTTPgwxEaVrCEnA6diejkqHDVGcFDNudAHubk8Sk1QNn7n7o",
  "key36": "4cuqppCLWP6ULa6k7khoC73WxkbDkrnARpLn58zc3e7J6Ac31Hee9AT6b7kvYFQP5qpEdoy1zUNscr7aXjaq68ZB",
  "key37": "iW6dnpyP9y57VMw1YG7vPoCy8ZGw7uA3ZM8i9GRd5P7wmeU9ijzSPeVboBDhSSQ8jNAND2BMEezMnzhgMxC49Se",
  "key38": "65FCUa4snKXWijDokHxJbMW1GzadgGuJfHMhgR2ZacYPCeWAMytsnCwHSeQ5xk9UceFYQNs1C2NMi2HoSFPiz39G",
  "key39": "55Z1LSyuJSUBd6nG6XnKZmnCUywD4CfndHG7j8dnmnD3y97Yq281jzQxHNPa5gLx7uMwY6sDT8mTWugDba2qUY9k",
  "key40": "4VuhqyJqe3L243Z5ML8SwBWLKFj2hSRsSQmom87DcDtS7VWugg1ogcLpf5G2t9KniFS4ziEX5PHUua6XJa1TnoTs"
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
