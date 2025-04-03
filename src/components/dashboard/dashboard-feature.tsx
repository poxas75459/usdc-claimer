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
    "42Hujg5mUjuXVxsjvruguiCoYp4FQHtxxfr8uCiZdSndM37XK3CSYdofcNmDGbhSDfCA19oQWuD3UPhq2wMym2LG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pFj6sXQrFutK74SouYgrPJvbEkELna1s6BUAEM1pqAu3YkAeu8KpDLbuUXuaKsZtBF8FLf8rRKXKmqxKU5Pybj2",
  "key1": "5MRFGgUTkG66ME6vvpT5tqazhv3NXnyx8xcXjiGoZV1t6r9UH1NUzTDLBZMEV66AMSGdc595rSFVanHj2kaJrfBe",
  "key2": "5MydYQrpBZYqAJdgJkCnBJ9pLt1pSgxqaC4rbQmDj21rnvSjP87hRuEQ6s3dpE877NcEF4fTtnMysJUpMKWZ8wi9",
  "key3": "5WXf3KgeZfYeQkQLQe6dJGPWQ2LrUKWYXJkhZfcheaZEsPuj6aY49ogPYztEyCSfdPeGLhMQfuxb8A5CgcQdrTn5",
  "key4": "TQVeYCBHCgjH9o2rAMYsP4zkTbM3bBY99bd9ofcVKVsvA9Q6EenTDfsazLCLQjGGm9oKo7o2uNycdq7N3PeqYPH",
  "key5": "4VGoU47EfGvoA7s52wc8Axs2t8YX1eAWSoq4wqHA445gwdcUkNxWTLmDq7PJkpyLrjQtfNwm4NMoaQ1D8jgZRhZF",
  "key6": "5i61956U4TtMCYSjCRRpkNVwWvrydy71uVGcqVbkizouXHy2xqMRoC78rDZerEEGwbytAh71bWw54pu2C2asUPbB",
  "key7": "4JX43MtsjFrouNHGQUAEG1wwRLetdfAWsmQHxj1TeNde7KSYB5JGU6f7mWHUKDzx9SgwN4AF1PPTuWjTbTb5d7Lq",
  "key8": "J5Ep4hpLvGv92uT2doYCHNQS35ZkVwPwjV9LkdSvcG7i7M7gcZYT2qTi6K7Y9wquB8eUvJdN8Gfo6RAGyBdQLTF",
  "key9": "26mQYqBk5W7ktxxrh8tNhXdkDSvfozxE7hBjbPkSU2teYThy7zX4KWAyNEZaRbVtpQ2rwdCWZoxKhvch6kND7rXD",
  "key10": "Q49AW2agR7zzvVJet64MCJrWdbypK1sKWmHqR1m26wQDrUBaX91SN3kvNaLTc1devn2gJfbKKXFGsj6HQiqHPVR",
  "key11": "46az8qBGgTsRYrhavHwu93xCs5whcGpAy1nNSZw27UUP57PogStr7za6VN9GENXTZjdTj6L2bpkyMApJJEDcCXEk",
  "key12": "2LoQSMhJjfRVDLhDUxPw2RA4rEyAN8dF1QaYzPKoGv46Edrgi7Lv9NYfZFmnMMhAND1pFYMFv8WDqzkkCAbGdyyM",
  "key13": "4fe53EgAGRX83mRa9AnwKX8DwCVqLxUMZX4QzdvhfVwgQ1qJWhFoTG5uvDZGUf2HcKPaxCVPF3pfHvwW16Lnc8Fs",
  "key14": "61znMissePK8e5M1opARR1zydarDo5AzeZrctHua6bH8dWQdtwyHdRk3vLuQJeBUHTkg9zNwMwnAiUVMCJoZNYEX",
  "key15": "4sem8nv4mS9z2bmMSwbrQhHNBDwZPXRS1N6NLms1iJ9mx9SEeUkcAoexGzy419CfQLi6QcFzesxCveLmd27DXrD2",
  "key16": "5VgcuRTvwRLUmfjPP42nFif39cvzcqA9g8mZMSSduN4mphhYe1ZXZcdYJQoVZxupCinbzRR6xmFsS9ZR5wxtRFxC",
  "key17": "4FFiinLN54LRtU74W3Ujar9M17hrbthuG3ETmhXaFfCtvu4NsEtkuFRzPRQem4io4SpVegYbR1VAojQRwcWQ8J1M",
  "key18": "4b63rEhwazRLHuBJ5gWxroY89WGnFpXfzcBcfLYMD7FWUppkvz63o4ZgnpCp6ECy2nf19XTqucJ4m76o7G84b3SM",
  "key19": "2b3Nq3Ej2dr9XkUpyaAQyWPuqgFGJhDebL2FXWGRnyfNEVqYUbhFrupeiDsiSfodcgxePMtb2PPfUmnzgn9WvEZz",
  "key20": "5Tst1BCFHWh5Kr8q1QWzKFhGR1EnapwSPiN7ntMTD4HiyMZ19MZenrBY2sEYbWfT1YwuG2j6Hy39mTd7brhu5icA",
  "key21": "HtfHivVVozYChZo8PP2pztbaGn8FFkwYQAamF3twC68rKASfNsg41REBtNBhpDX29FiJVQme1VjMrYfz6cSpYjJ",
  "key22": "2quNrBhdhCy4xqzFwSXGPmM3gYLnvX1ziFrfdgNWkhVNjs2wTe9pGEdREtkHVcYeyFFmyYkLNYBAKbRnskeu3W8M",
  "key23": "4htYovQGKu1rMtwKPi6LGRLwEbmHnsmX5f1q1RJdqpFXpJ59aqHiR6p3Q272PptGUtTodwqfC982FLcPKGvSvisK",
  "key24": "58SoHvcgM9UwCQpTuXAQjioSdWsmXRKTpXCJAR9huWzGJu3TtJMgEqVTBq8rNNQ2cdJGhnHx82oQLft2E67GNiWU",
  "key25": "28FQzrbqqn2NuHKufWqy9LmiV5SSvdfJ9mJnv72YPokMd77k5AKWsX6MJCUC5zHMU6VGBNcRGP5Ezoty44gW3PRH",
  "key26": "2A5KNzpZeAMD5RaABJyADgh7a9jqHYWtkNyLtaj7XctM5TPHJwsmnc22sCn5qYQ2EfF7YQSoKMHzNnjzaYhcWdjW",
  "key27": "tYfL9995fBzBYQQ2Lr1KyoN4YgskcdR8zUofh9c23Ro2ovqG4eMejBasVAM8XtqCD1uxMk7mTbn1BtyGoH8dLCx",
  "key28": "4X71vZi1xkMRMEbKbQGLJfoARbDkuzeW7x68gcbwC5iwnYeXx23RKe5D3vu9AV23uFGbioFb61zGHfGjvKSZxzLD",
  "key29": "49nVdZQKBcgYUkXrFZGqnCta8B4b9XYGNNz46BtCEyo5jdaPNvzZQvGbbfwaUAJ5E4GyAvfWp3YvKpckYZaugo3s",
  "key30": "4JAMDmXtKRpqN5SUtzFuwTDvknqkZ5Ke5TPeWuUNc6L7GYUFtnoz36pBi4UVUKZGYj53V8fexkn33fgaEnXNo3G7",
  "key31": "5USc6aafMn2eFXS94ZEySSDTQmxi8KGqZ4bvKevtRJXLrxVX1jExHunwZDAyJAFM6NrLiQwUS5qXK6D4NhuY46pt",
  "key32": "emMdACPMbC6GMoozVRyREufyRW8EFDJT2ogCTVmyYbjkB7NFmMXBwdRerUwsxHqPuvooJrjW1qSCqZ3mxFP4cmz",
  "key33": "pssv8kDJGfju6T28wsCTZinEziFLYbPWNWEGuV1Dpchn36YvozTD4Fa9ZK4QdZyQ4koeJ4BTn4eYJaviNLgcQsd",
  "key34": "xM34G3xJR8iBCuyxcKR3ADaCHaARZoLbrPe1Xm4AXUJ3tdbmeKJMc2KewRKr4KPiQsaNnpu8GMK3MSUfQW46TLb",
  "key35": "4bHQQ1SV8gjt2Z2SpVViyMqp2bCY35P49DLDj5xhBaign7weKmsPerskeiMQCNFkMKEGHLFi7fmLewz7eR9qG62G",
  "key36": "5GhbLyJHEn6NwuRXCWvG9TmCoiTBkozaFdwk1Kh6UDqec7SqZcchnNjerebHZt6ihFoV7TwEDSoeVG7eWNdViFb4",
  "key37": "2UasQ5ZmruxEqgesXmx59hQDyhdE6tK7RtQwPfBtibebcR374UM8QwxFgSbVCpcoocHf48Gk4ub3Bp2fwRrMAntZ",
  "key38": "5R5qwjCTHYEpRoRLcXLbis7QTRKyHtvHkNtiYp1kQMmxSygxVdPyydtuuVfxbhA84V73wHHADRbXjHtVaibBsgnB",
  "key39": "2KWEGQg8VnXJNMckaHxWe9hreiqAkjxYxufkdbacNrtx5gjzWQHiHW1oJKNQHp5WDN4vSoeFFJHp1F7ha1hRkKio",
  "key40": "53HUXAZaChciPyAZRKjAjw4LHDNZpHRCCwJkYeD3yffJNFZDBJrkPvPPvWimW8gTvkzsy2YZmMq3RyFuNZj1mJb3",
  "key41": "kpVdB7GWjiddHsBDth3ghhqwguNNfWyK7gyaRkW1zePwBTkEXM4HibhPp1dHeJ52oibLeZ7E9aLWwC5ih4h2tvh"
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
