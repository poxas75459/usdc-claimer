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
    "2WbphUXby9AgQDFyt9AaeCdc4TvRVjj1CWTDYeD4263XLWReHk57uzxJ512ApczXdGm5Q6Ca2uVM2G25qiizTxS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rto4W596HuFcPcycrVM7j3w5ACuBqq52wo4p5kFZDrYhDNXLL65v51nUpFQQzt5kf7GxvgoN1JdadqS22xTHYry",
  "key1": "3dTFuf9YjwGYq7iEQ5fps3xzYpKoXyKxoDMJLCKiw3nNkoRg6qk6DZpBWAroEuG1P4891n8REqmGLpNm4fk7XbWJ",
  "key2": "5H5E84puGqtxVG87wftMPxKv8qqM54EFhwxgrSf5qfanGGytBjZiqywfrV1ErsH5KYYT1DLo7DFygtwCQosprfm6",
  "key3": "2evkb4HXZRDA3V6PkZKDWSPmBvHTWLyPNd6CMdVdPX5tjAxtKzP5uYxnJD7qs1wHn65VoBCpTSGvdVesRr5PKnWG",
  "key4": "3y1S6GNccBv81V8CjY1TWgPhY9K9LJCAAAUQw421BMqLVSayYXobEwPcAw8KijJiyDp1cqHCwvEpcrSD9S5BYq3h",
  "key5": "4EtMqei3Jo1uYUppykm1imiGwwLg2RLkiqBUKDioX4YAiKtxiSLxtQpRhc2L9SC6ksnEi8mXw9LP9a1QmHpjhA43",
  "key6": "5edDErKvCz3WPxScE7LcKqBVQ6Z9Jz95tJXGTViFTVjRjjitTbFCb1aWMYoC2MyR8JPWDAvNVA7itnuv9vyRUWxJ",
  "key7": "FewMDanWoFxc2i7Aft7XozTr56HfuPwzWYf5DjxsJ3JBasFs9Nn9jEToidTp5p2WXkBhg2thz3MmVrvzjZsSprB",
  "key8": "2dgKxUgrkgmhA7zMjjLvaEfLxmK1nLuvrAfpZgDD367vVKGp51CawfsiYSVt9X83L2QZmDmPVNUcEeXF2kjbsTJz",
  "key9": "5e1PKnoZiS6dwxfkLNFR2no8W6N59X25pthnQ44KmV68UPqQcb5mKzEpHenv3A3NuGavgyVCDWHvRmLNc2qPChVA",
  "key10": "mVBqvDnMZKX382aBuGCSDNuhzj6ZG3jgiG6wLiFXGC1KtxaYkKWEC7vcoWAVj1JjEtvhRp6kQWVjwAHgFCewpNa",
  "key11": "mHivefNFiT6cWMwkouoow92KAznW5Vjr6vVgUAHPU2EHnFN8fKU2TJbZH4ubY3nnhynJPeJqjEC2i3TKr91N7YL",
  "key12": "4z1smJsvhytwsv2mK3ZMeeLSixSXji28xiJPN1gUvYtNvShDaHcExsBy7zjv1K4MMZkKMTyt2Y7UEQU1gHMXrGaw",
  "key13": "P3vVJEhprGHjYRS92HGt3XY96BJHLYL54e5x6KDJg8CXukTvAPVRazdoJHU78R3mw89TnMPUmNKU7pwvwK2UCyw",
  "key14": "3PokpE9kUbkzB2KKxffBVs3ZSCDhciwjWzdUeKN5pjjEkQfwg2hTw2wqe3eVXWRZTVBLo4u68zuxNsKYubgAQ71a",
  "key15": "2MBniHcaFfv1LVKSvsJc5LTi4j8GEj424Akd7UwySB5Q7hRk7FhR9cH2JyhUL4v7ueCNFEyV6jx6jfSAaTvoySf7",
  "key16": "2Cfc6FFycWJbjsZRMXABtp2sSQy9FJVxyr6iRHJCWgsV4QqGn77JLvFRgYnEZKpy4T9zyMiwbUt8iTqgzAx25vNz",
  "key17": "2yBSPmPFhJzmDXi2Uk4dwQRBmW9WAnwbHA5xmeX7NggwpznQ7vqALkFqURGkZNkgnqxyedsH9GXhPVKTwLESA42h",
  "key18": "3pb9xma6LyK3NEZ2tQ2Siug6AEapDyag2xkRaki8PFyQHHEuNXxZaiqvMYAp73XxK7jZzb36nVZ8jGXTqbK4P22K",
  "key19": "37TtmE8BPaujkQcMTvSaTfVUf7dsHuKDZ6srLqCpdM9yNeCjYqhSdgxG8giG7p2pca6FXHaoZDJAYTffrYYdtgtA",
  "key20": "5u3pnGKhFhffDwfP6Fw23G3AVqxMRQS5Lbhbv4nksdaxRCBCRPRrmLATWBTS35F7PPGLrcoZFHP49UR67mVYNWid",
  "key21": "YjBj5opTbvUhKGAKuDEDUJyP7fPojwZzCwssdfSGvFa8s7PH6aDQNs3pCET5NS871zzayRUxrZ7pUsVBaucFTnK",
  "key22": "2DydWmGjNZeHUbFFPAfWosnk79MXBkNwXaf9MKmk6Gak1Q6zQfxcWeJ8rnmRA3iXnteRRN8sKrwG51PPm5JiSfmr",
  "key23": "67oTHxS8ZF9DUXxBEYDx2GMsrqcyCn1RdLNzQweT8hQ6pyuTsFsDLRwqTrCCwTPtbjA2HpUHf5yY6VYxYYb3bcNK",
  "key24": "4dNzegn9agHi8GirVjCUAqEirt2x7b2iDDZ4qBJGRGwWSZqMEubSqo8YMYqvzpR4S5grdFgyQ4peCnL8KtNwGhzf",
  "key25": "rdKEGUQzRFrHdaZCdZL2w5hBwYAG7PW7AJXUG6Xx9wGm6VRZVf9K8M5en75KWnFe9euQDdv9EEMHAUYjwcky9UT",
  "key26": "5sYJf4usvj3kqMCPEUZ5Gc2thKAAgYfHK5HH1sV4472uGc8XGvanyQ4ce1e4ZtpjcBrBUbzVomy8ywE1XQsNMGiB",
  "key27": "4weZMnBkA47RuPU5g2zn1UxB7p8b8DdqFAXGzGCZSF13974drpXwrBQC4xNVVWf6gkPP7QvYWZSaBQb4g4jLnoiy",
  "key28": "3AaAD1sQB7mgRwB8r3Qpd6ZFCona6Fo2ugy1KGHbAx23otAZwJ2EwukYgCeoi5xYQxndzKLKA8raYk5KvXiTbR3",
  "key29": "5Yh99R7CvKgKG3UC8tdfwQt8YQtacywoK9u8xa43MmyPRQp1BmfXZac3gdgXnznryhMaQatahJ7JBuRU1dsDBwov",
  "key30": "2xZD75RmDLauaLUuBeeGZpjjVwKGee42cJ78cstVkLrYjiYKBxtY2NzyLup59YCH2ayBZ1pzdynPdo2SVNFjv3V5",
  "key31": "3e2qZ2wh3CvQLC4EdS4XqG11k2qCX4HXtEhkm45JD4vgoYzpghSWKRMFSJsU375Sf6h14oSqCJuL6wE2aXMfHUQg",
  "key32": "3nCMXxZxctJ6xSfS8oRbR13pYbj47D6xUfiRBkptKdMqBFViTQL5nitnRArMwqQsRmhb61YxHMpk3Zr7EXCB9aB7",
  "key33": "5FuF1noPbtjxFYd88zixMku3g2NvryVh9pkfuAKT8uVt2Mc3BYrVJbZecuswZixzyzjLX49nSjJ5WGRgD5fxiS6V",
  "key34": "su8Rt6gXZjxBdY6uFTnNUHUSgaJESuksEZ8srsfP5JwuKDSFHRHPseE3Lz3aVMa91iChzbxzhEbD9Yt14BLwjbf",
  "key35": "5gYYmtqBoUt8FyyuNbzLjzhvoCQs6XTGFMmkuDVXdibxsnEVMNUL58ygUSFvYtEXvh17Qv6K5M6B5ckLgk1FEjm2",
  "key36": "5TF5JBCPT1FkeDU11qwnUx89UoKuNeB6suVd77LsTHYqoCbPHibPxY6nAk7qMEktRzdffohyoGuW5VYkNDEXFUkH",
  "key37": "6xGzjybKwSjXS4gADoTMKwZS4yEgLcDir8ckGUgGL9F52MaMSp1neisSq7SjstPs5iQu8jhoefGb9isqLnLZj7H",
  "key38": "5YXa27t6vYDyz8wBRPehZYpy5vXGQSp8GQFAH5v4fBpQvmbxJq6MTWPyBb2Ek5FWa2g5VZ5WzN98YjjVG6Td6LUW",
  "key39": "3zVz9PEPTjR8bwtFJNXUJgTQJyDZMRUCeR9Sd9fyxB18Sy4nM9zNBL2rP8MVVW1R9wz8FBBzQiKxsXJcE6DepGNE",
  "key40": "45M4EssQDjbhRaPmWKb6sKcbsbuKLJfk9o96KLbJdtxFAeMWr2zhdLL2ErnS1qqdfVUcS6ctpZ2LUV1iv66d9Eqx",
  "key41": "1234gBnpxLdFNojGypckGAchqakFx327eRLzEUtFh82X1F7USt3wKt68Jnyr5Jv5AcfrJ49f52k5L8Cy5h18SjbB",
  "key42": "zNUnBH5TswXTdftHCx47KYX6694C377sH5KS8qpuTtXAJcBM6NtJmc8mE4VRYZBWThRwhvzCiPMzAAVYrELBSdE",
  "key43": "5hS5uCA5MKr65aFRxCfhDCgy3DNLX2F5pWvH3GNuQwAgU757hETT4CB5fyhhQAdecDukht8NrddiFhSFEvrSnQbj",
  "key44": "5QNUtzfVgfuyRyjffggG8RQdnspEU249hEGd7fS77mTJhzqsJN23x9xQMEf5bfLRHNYi1xTRUmtQL9M9M5eLKPkx"
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
