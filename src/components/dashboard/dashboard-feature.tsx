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
    "4m4gz74qhhd3x2mgaJoyz1Gyvg8LGZAoKJPzR2pyJkxJNM9FAqycuXo7Tige3hQWYTraGMgn2VZEnem36NJgwofo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nWhqV2xVU8MuXWvKcbn7aaJ4FbXGS1TwimqirST7fR8d89RUrCPfz1uhoGTHAnJkRiVCHHHzDr9xmCHJc3stJBj",
  "key1": "5yWpH81NYrgN1LmC79GF5hfWoZ4k5NbX3FsAvFVZpFMXFrL6BHtDPbpsWYk4Pp5b8HrcMWw4UQgEbqj1kPhJTj3W",
  "key2": "5huN8LyKL4PN2dvnuSdinvaRS69XbBEKewrCXtD4fAEv9k4KTiyrisTaHMdTVpsBTQGDST5gsZdAQe9iD2FYC69V",
  "key3": "2SnTPyse2dJXZYZnjWa1zHGUdFv3FZMw8yY2jrRbvkDtH7KCjcVAncaU7HCos8hYWWK7gEHbSVhEzbrcQ6dxRphc",
  "key4": "57DhTGC7akJt8pMoykvukroXRUnWMD7CDwfgEHdhwjLXuPCn69qkCi8nCovintodXfSpEdmEUFwkZ8HT62qPKdpw",
  "key5": "5Suigqvons8C4WSeRfcqqP626X6XiaQY8pQfeCVFvBZuDLWKcxJmnjct4bUzPoQ2ybtLcVRfcRiiTywA8cPAQqsk",
  "key6": "5VpHDUQkUYEXaZT2iYn5FdVYwAsihDgU8xmVq5EXcM66DDRVVPyA4GrHy1GxmmhatdYezSr8M9m5aJhgCYVeiKLU",
  "key7": "3yu9NKPtGxWwnSeS6Lxn9x7TF5V7nvSjzyjksRTVmt25jmi158MvbkQBLCVc3BBxgPzXdih7KoFkUb71Zd3ow4RK",
  "key8": "41ptanpEgCnr4fQrAt3PozksuayAk8pFqxFJLs59UMPXTFBRGGcntqcdgcUttiWpnFL16h5t4T5dm3mLo2mVUgmu",
  "key9": "44TJjP9sTHBtFTasJUw91DspLDtp9nygqsDJxqMZDWjQEhQrEQcpefBeUGTryWNXCd7enWb7T1v39kUF9sY6f8H4",
  "key10": "318JRzanNsUmSCw4w4WLC9XQBaWbfJ4qureaJMUJSSiRiJ2dyDbkMkT3XFDR5DopF86WJFXkpGXo7sDLfGex39t6",
  "key11": "25QwsmpvzyK8x5NKX3EYCKP9cUuVTyoeYkwqMdDRqmGxBC4fjGSk7b9ptDLp2mZRVenLLekPxHc4zkYzjwX6zUDx",
  "key12": "66oDKiySDpP8J5ehJfPDnMeZLQpCRwvbYuWWdMECHEZBPErnJmbi1gXk6tnY3WUYZodMRgSkc6D4J1Wouny9Vh6V",
  "key13": "WMoePdUpqN2iQaCcCnPaiHdy8D4hXG7WjtpSkuGQinRt4v1FxBj6FiDLzjBDmY4kEQxh3YYUKWqSp1xrweLftJG",
  "key14": "5WxYAF53SAuTu1m5SQJiBzhnZGQii75HSdpEFYvCMC7w1jvngeG2H3wCiPr3cR82SUSQCvMWvjhVYSdMW9XgCbks",
  "key15": "2Tq6iUgpBMQqJUBS93stX9xovmBH6xNHDoaK5pzaVymfyhcUW5AfAfyuNLu492QRDHRvsYmWz37wDRrzcHP6bY7K",
  "key16": "XBqiCVYY3wcs952VAaRHULqsXE4NxQjaLhcPbNMK2wav4afnkpZMWmKxMTbnFAA8JN7sJXMjffUutAgbdDThEQE",
  "key17": "2B1QSd3dwqCdo8K3VV5WGQB72hg2BioEgcXD4qdNnPGFhwqSVeC4GuMU1DWwZJvL2YonEfL5UVFRn34vLWyyz71N",
  "key18": "QW9whcQFM1PpXdEj9k8Wz6bpZvJuXfUwaq5ybfPdC2H8kMPV7AuBMRanR2SCpw5ry2NVrdm1PzVNT8VJ22W4GJZ",
  "key19": "4LWQpZREUiY9FYckJcT1RHAGfUVhyrfgwyVevNv7aWVib3jUf5BcweeGZYymRrhTvrXCX7CgimBqvRraqm9s8hbu",
  "key20": "4LVkEofLmdVEKaz8FDG99HEgapSMg1Ccu94To7TYkhe4vWRtb2aygDm7T8DFYHd4r8su36G6Bbpndd6Niaemmcz3",
  "key21": "4P65y8EYwENEUq4MAi2GxwKiLWe1iXP23WD5GHBR3KhvdqEfT7G5gxJPtQhVgDBhnbM8joK6cLKH1vdgdjxzuz88",
  "key22": "5QkHdVvaFvKrxmEjhnsTugwSHnfW9nRGWjWee18igS7g2L6SeDtsSb7maNFQAhmLxnH9Sp2yYgYFhZ1GHtHqaaon",
  "key23": "3TAWFs4KMVDvxd6aYsHiM9xWEGiynkHJ74N8pLYxidtMQbS9zX1iwE8vFWNeFJLfjtUpduPZ1DJgmWg3UEQn3GDJ",
  "key24": "9uF3shMVtWaHdhMTrrALGpGSc8DsGpG46skDDiGZdjeqZwGPnyk6PyGzmpNHN7hjxFgesCtzZFmwjsxfJFd33EV",
  "key25": "LkjmeeCbn4MM44EaPms7MBXibB6aZKHpRuqYqS8iohdXtUenUxiMoQrtc6EmWZ5MoqdN7APCynYnwQXMBJmJHou",
  "key26": "3CZmegd6kG3HQUo7EofKKC8mu6bbPaoopBPwrQcLBwEaLfqrZQbB5rqzvEtWExx6Jfx5SfhGLmTawBshtvfrBEqo",
  "key27": "m8MTa7qDdNn4z9Mx5d74JKGmRc4BhfK4PWKD2fvvx5VNprzaFyyywtVANTKqac54m7m5FxHD6VTXrG61hdpcAF8",
  "key28": "2p1A2BASdZgBbZTMFoy7PwaPaukuqMcabFfejG6VPPz3VHzHJ29pwnUgXwMmDMmDQYQDfjqBgq3L8SqqSPbuUCsM",
  "key29": "4WdthC4NdbcTEuoQ1YR1uecYyY5tYTPyFx4n2b57Yy1qHM3p5B9Z7knY8GVye3gsvgDtf9smuFFmdAUNXtGQBgsn",
  "key30": "5MyhxwTWe4hTmypYpVLvpKtwMr8hy5pDEo6zju7Gcv4DwahfBv7MCFNkWkzTCDyYjT2Nh4HwP9aGLEG696iLncQK",
  "key31": "4kK4H1Ez6HpCMi6fan4AS5eeZskGG8DmSRRZYRnyytztN94WBoEewv9bF7ogakDDBuEwvAAhHW5tAKiYub7eCYaG",
  "key32": "aGHAk341WNDMhV6M19zShB741pXXBM9XTMtZneH2HyDrSVEUB5wiD4LtV7vprQiwbFjXrjSrfbMF72R2eAyB6qC",
  "key33": "3ZxFPv5U4z2i4MYhCvu7bdAkbCxaDsC73FCLLAscER4jzKZKqzXr2veZHKQL9zkssT1TtQAxbBUXPhzRs2HWPt3x",
  "key34": "4MPYejzhSpkEyyzAmapd8aGWAFZSvk79hypYLqNVQSrAz8a9ynJoXL2LyeKo2VvXLXAW2Dqc8Bv6fCTEFF4xDWDu",
  "key35": "2LLRVGpwd9nuqc5HZXLHCHfnrNhfPVbYoC9ek2Xv549aafDD7YWwQXJZph7ngfauhWN7ELhFyLYdei5hAo2LwhNe",
  "key36": "jkWPCpAR8qR71yPgomvRwHw37hSiU5E3hGGaDFcTH5EZpDZ1dmDy281cT5ujSuCLYMEZvfSKTCVTug1Pp74NxFL",
  "key37": "4BJmt7xjE6Auwp38shxBZWMF8EyPkGL9rsRH3iaj5BkQWg6xGYfg8Bg64AadCR4gXJSi9cdwv5jJgnBcijwtSnQe",
  "key38": "3nE73snqL33PXED8pdKtqD1L31DVzbbCiP9gLpdUMpGG6cBqijhwnucUNzEVvq1cGfXGizjQFzuBjWusULkxZJW1",
  "key39": "4D2xFNAPkjh39u5njsBeEZV98jGgUQjv2BhKwncTnw3X9esMAKyhxRRNRp1sayUQqETDX5wQU3Zp8dm5NmszfyEZ",
  "key40": "5ferrxWjnFG3WAutZPeJsWtAd226fHssr1NKfPAjXpQJca1uYgMedap77Qk7bzC4er9DD1tEtn4VG8sSz1Y2zxfQ",
  "key41": "2XDwVPuJF9k7tT1KMRVVX7fgKihxSPGL9RzjLChMEArMQSDWspwyQvL4ZdeXoqass26uxnu5n8tH5hatmQRKAwgD",
  "key42": "5ibj9dCqHoaSaR1VBywroz2LvPYEvXn7gHWdxXg8bn7KPATXS7PJ3gxKuXvzLoiZQDnpsQqGTghwwh8fVBRULzhT"
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
