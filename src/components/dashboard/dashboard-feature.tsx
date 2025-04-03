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
    "3VwTaeWAQzqB6zoZHJGA5fUegShUSrwxyqCRuUrDeZp44SGmHE64A2jKkrXLuQUxpQwnTMrgVaGXXKHCag3DCXJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KAm1CLH4666m2e7GnzfcFz4kn4VdScVpSTmy8p53JXQd1EGK19DxaF2te1EgkjECdvtKKa9Lw53Y2R9ar4MELTu",
  "key1": "zPThempx6xNrCjRMsYvJtdPeiPVXERCDsd7SL2NFXaRfhmm8VXyemEaTiCACzPa1Pc9oJqL7WEzLBqsjqPhFsh5",
  "key2": "4VyHYxXx9TCyKYm76tvRWaj4HqiyXGHNTdaUoq7oYMDgtopFNyJR11oPUDKcDHJhmHnXncG8A7KgWeGdtyKUQxF1",
  "key3": "39wR7MTUkRWRD7EF7F88nsFvkf1kMggwS6Z7Pyx89xXNSrDb64GopEvUBPXfA4yHAaSTBrkaZNBMJKcsh38A5N9W",
  "key4": "4n4FRos7Thfb81wMB2F5HKfcr24idShEkdyYDWvsKPiqfNY64RKbxjC8hCtrLuwmeQiJwgaRsi19cFwxg4iF3uwz",
  "key5": "SgisnaErHM4c3Rib9q1ufknLA9tynksbGisWZHJp62fP7CtvnNs1SvZTicLfxmZ3PLFpH9KNV6Kv6y6MCUp8K1A",
  "key6": "8RCcYbbEY87xEb2bJyM61k5HPw2QVE99CzNET3rHKhHmC2evsNcerYTtnR8BKkacbpfyFrJTPjbrY191DEbHeWS",
  "key7": "2czXWoTPbz9Noo15Kq9e1dxR91hEV1Ld1d2sdQ8h4n7eU8Mv1Ma4G32LAAmXx2VPdCRi5ydqkmfyDiqCm8ZjZ9Cn",
  "key8": "sZh1zqpiB5TEAtv6cHpcNtJXGueCmSunouYyrW6LmtUfATuCVr446LTKB51acjvHwSx2gv478E8QEBwkCo8xQnj",
  "key9": "5L25tk6aFFZvzPKetsg4j8sKSC1QJb5LczKPTpbc49LT4KUNiiCBuerkNHHYF6aEqfaByryZotsUqovjuAnPVHuy",
  "key10": "3twgKUVLZjw6mo2912jT5X36LuKwXVRTSVqGJuE3mWzLZniSqhqKmnizwzYZiLaEKiwXPKrfoBDoxxakU4njrRNW",
  "key11": "kht6yeCf6AY2xXuK7z9rpd6JSd3QLEXfTEKaeTrWLTkgGVcQDgnA7MTCfwFKF7VcMddihwGAc8cC21AFPJewK6j",
  "key12": "2sxCBi275rTERmQGuBTsuYsVkB3nyYG3DJsHYh8NCu4H1LLMxehBgm5C3YAtR6LSLrVmhUckpQqNiNaiDEQZnyHP",
  "key13": "3XgoDJ6kcBWNqpL16ewU89PZPHorXzoRSWv9zbYcXuvzum9zUPgwtce7UWiDTp3PuVnMmgfoRBohwhffeGujMa4W",
  "key14": "3nH2i4TZGBHUMUBnXERnBawDEg5yPRnYa8GMDNk92YnGuX3LSWL513uAaMCK54LodVAR32SPK7VqbyViudGcFVv8",
  "key15": "oRqR2k4uyDWn3nxsqWSRyJbDXc3Kb7QzERYArdyCTKKwPDDyvPAw1ZxtjwMHqRrWgPwQvy4SRYhpGHxYsrbUwpe",
  "key16": "3tv3ea5Nk3zJD5Cg2bKtEiSo7WDFsvMnZwhe7pBMHV2Vh5zhk5Y3owgAe4ZGzWn3vAL96rYqqnon2jwdbbRysnLf",
  "key17": "3hCKbeTzWuukjYDechY1nhYxcti7ymZearhA4zGXfzBKF7QTjgXCSsDgf7BoLCEq2JdZihTtAz89ZgUEWyKUstmo",
  "key18": "S758fAaoEmZDYjjwJnpYCeY8289eUJD9jcU2SyQ1MYmUaKk5eiPgeXEkEAfmEMU4VNWcqC1rLuFvX82yg887DVh",
  "key19": "qxFzggyr6ywc7AN3sLMxNLBz3mFf5bPWAeRaG7bUKPq2dV6zN6Mh3tgkamFy1Fx27YKFCvcG7khV9mXeNRwvWBx",
  "key20": "4jGAFg5tpdEJycxQ1vcQUkT74eHzv8Kky11ncJv4KWbAjz3e3yTMp1jebKQsQrbLoBMJdezxt3ybqhivYr4w4R5z",
  "key21": "5aFTUBnC4fRJ5thiRDZywZ6Dy5bBTp3Gtea6VBwDNVNYw6ABSvz78PDHpEjhC7KsZbP2JMiar7EUUS2YndvM2heF",
  "key22": "2Z1ab32am5viLvXzFuDMSAtbA8dBawFJW2xcyPbBYjuvhY9SkRrVpDVtF1rnTw6QQKeC928ZQ1DYhGM6DzM8ZmUB",
  "key23": "4tx3FeAoGLNDH9BRvHiESzBN2Nv33tQxaCn9oH8srKa392bNSycbNXUmLA9EcYYBtkujiwTGkAfd3WLYNwiNzcLU",
  "key24": "ypHQBZFoGQHgyRTiiTzPaQGs3e7qUdHcPcwQhaykc3bSRSwxWPiCVmRLCpbnhmU1qkb4YrMNzvok2p2XZqaD2nS",
  "key25": "Uq26Bmg4n9feuuA5uxiSjqh2fhUJAoNeiyupUeGm7qqpQPir7dGAs8bdeNXV3rjwtS6pMo4HrscNqdhaxavWnuW",
  "key26": "466bG8cTxsZryq5mxaW2bRiWaAWnMMcPyFrw7vnLJK4CEYJXHdtgLidWKKuvqvdJccDSVuaKDufTCgSRcFDPwNzL",
  "key27": "3M57YuhbcSRjQvMh5iHVx9rbfFcrnJkC9Z2rysToZPnpq716obzJKE74NiC7p1AEcuzJYvXcfXirMbUoT5CXJhnk",
  "key28": "3NApHVu7sQMDMoK5DGMfpyYcgGWeZCa9QLpXQWxRQoiC2NukMQoNHF1VNRjbguqEAqXcoqecy15NG1zo4SrCNR2i",
  "key29": "4ARPxhp4AM3moG4Smfvmb8od6fbNbwsFz6FyyVJJoSaofk9DiV3QKR2yzYzCGv7sfvqEcbvxcz22xqza81yJYr3B",
  "key30": "4WKAFmjhN81NEW3hQgXf9fB3i4Sw7cXchci5YGeSPvKUVUBZvGGEN2y46QFVLZ8nC6uASyUarT81puUStC4FPMSh",
  "key31": "66k7u9iWqgRFrFNK9bqK2PtbE6mC5WMhjXvGYcaLgqbtS6EWYqV7vmSV5E1pvMMtzeJqjUGfNwbHiSfEN3BMwcmN",
  "key32": "mmFNzt5c4ckwwx2bXsXFxrs6EnmhncahFQ57mNFWEkUsh3ZYCmKdg6LyL5iCRyy4RXtTLcHxk82JUmnrbDsJJj2",
  "key33": "3ZfZ7aBJjNArsPnAUF61SLzrFoLYUgqQq6na7WExaZ3MibdXUfh8RkAap77QnjHihVNKHCQWy2L4xzxDQxJZmYxt",
  "key34": "uNsQXdMHYY9VLoP3TRGRYvriH9xk6KPnZfT1LzGooMbomLt7bdC9rnUybDFF9u8igeEk4NV2BaQHPrifYppwArk",
  "key35": "v2KZyLXZJuGRaH2R6hJCNFXA9JqfUwFXQzjWMpZqtJnbzAvFRz7mc5GrbE9AbkzJjVyrUFwDWMPC1417EUgLh9w",
  "key36": "24oExbN5Y4nMZsSbgse7XUTCkoabauHGSF9Y2pmau7KUHgaF2PQUygZX58dmuU76PUWSHWxHjrX6ewhPoZYnuGcj",
  "key37": "qam8jyZeGmQAcUgTjt9cJ5SHbrLjAG4yi7aVTbDGjd6gHYdJ7fWR1pb4fomJpALW2S73DsGr8qBihiVtU6fovx7",
  "key38": "4zD3qvRL1V37RCWaUbkx4yzdc9sTfgvGYvgsBsrwdBo176Nxm6F2wiUYuUekGXYmYkknJbkWxjjpGMnLyHjjcT9s",
  "key39": "3jZfVwMuzkonwS7wvxsFma7hvqzcKPegHbCkqqUSr6SsdBu44yNuZg4sbvcEDWp8dqAgwA2PEN5MSGrYmudwvF3F",
  "key40": "5FagRbcoT9HQRMhb8TUsH14xfntspiesY9TH6WjFuNT7eTYMqPjoX2jDC9Mj8LFjiHQcRzJ4asJAJQWXwBaitwpb"
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
