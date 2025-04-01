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
    "xhyL75q4ftiuWVPdhaRTqBhvmSseE5KNNHpShEjq3BFYP2ebaCmbzuXqzEzjxGxfFiUx8Z8JrZVbSr4pKKBiF4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j1BfS7kMmAL2iSCcD34Q5tJTNuUXvZJWN5WKSJiKC9ReUvoAK663frzoWkpXh11KjrvDdC462nhXwHvCiSJSo3H",
  "key1": "529SNJiYZLZrYY1b66rmveEjMZsnBYndpiMS71siF7N3asNW6Y1C7nHCxvvUKTJ6fVjuVvCiuZ6uv799dbxZ79Ti",
  "key2": "VtCrpFiVBHJxhEVKoZ2hASJNwYMmcPX7LSjEX23KRuDRFpyGKfjut7turNimmsEjaDzD4dTzcxcTRQ7BDdZqrHa",
  "key3": "ksn8FHnGNapVDwdz3jheLaUGp7L5Vc4kdD2b1eBk7WbWBFG7Q8Es7pKct1AAg5iwkHGimg5tH7z9NheywL5fCwQ",
  "key4": "5EDkCPQaRh618pceRU2BFKPaCbWXVKyAJFnbUBsVoMjueHrhWiFz5o2A814hU9ExSyhHZmFUigfaQyxxBCgtJ58k",
  "key5": "4rj6YapbbXFbzmx9VGUoEFSXgnB97Vs2opTukX6TzrmCp2NakZLVt2ctK7nVG9uA6dznJyxJRWbs5E2DqtpPUNHg",
  "key6": "4mj7k3EgsEdQRtGZZ2e6ruM2DvmhV2baMqYzPe3zfyNVAQm4Fab2Uuk1g4T7XL2jwkzR7gvza1N8jLboNV99ok2k",
  "key7": "3THEBK3BJZRKso4EHxWndJSbBNmHzQAHWgTSEKvYXBZwBoXGPdMHAYLNGF2FU7kZGvuYtbaiaZcceBkuisG53p6L",
  "key8": "565uKBKbHjrz9HvyKFRBT21RtWDE6Ec2Em6Fn2Q2FqK6JRswsNgQaK9LsmLwgssDHJg73xaij76qy4HwmBfs24mX",
  "key9": "2DrehctqdiSv1zsfbUbjVMhHHCfHJvDp8wgS8n9mmirQuZjTZbX7LMBbf6edm3L6zxyfaYhPhCGKJVXmbADi66Lp",
  "key10": "4QTi1X8SYpisb1u3s8b8UtaPSNhraufFysgk7DNCSdTtqp4ZGQ4SY7Cxve2Vkq8Ro3wxHCtmD46AWLogv7Wguanb",
  "key11": "5owwjCfd2bEwpiKxd3MtGbUNyAZPpPgEvJ4YkVWcvcr9WFvkJFFtF9S248Hub9KsehT3W8Roxy3DauoW8nkFtPF3",
  "key12": "KSMSpT7C1DLEgKSStKnUQjVDiv9hTB8J47iYZMBBQoS6oBwxKMjTPrWW4DPU7TnEbphk1jXQF3ci4nE1ArChAcV",
  "key13": "2xdCWD3r3m2e7cyCR1hQrtor7SmKrM8GtskzxHiMEA299rHXQ2pqJisSjkCKeFj3BsJaLnyyMToV6eadFs8spaip",
  "key14": "5YkFYmd4GY4XcS4PwZESEuWuwekVeNMHpDvaCmh2aXMZZLUDzS2p5NpSt37kBJD38DW2xPUYHmRxRxEPxfwR1kgj",
  "key15": "4NQm4VKjmMFrAKchGyfSVGJFJ4fHUSXHGZxFa1AGhmoawAurLfTadNWTewSgkY5T3S8oBSBBbmURuvddE9DUPbPG",
  "key16": "5Z9LvTA9Mi6VdrdKX8LfBM3Z39n3yfLhzDrB3jmoQUdWaVeoJmJnEBonLrU37n34NYiWjueSshaFBNdU5DTvPh98",
  "key17": "3Ue7D7g9Nm4PLnTMwAoAMQHyBptPHtJyJNXHqCZbF5FnxpehE9Sd8UsPmiUAfmCYGg2iS7TJfMSgZX8xW5t3y9tW",
  "key18": "4T75dDMAWFiWwnSzUryoVRzqNFfyTtjqSM5pY71dFh8rg3gztAsG9Fju5esr3yjLF998sCeqoSuxUrmbueZH2j3L",
  "key19": "3hBMtgHaAsTh8Po619UJcHTVDwv37A3D91CGiogfRmT3hFQJDoQHREaGtdGe9J1MBehLmbpXQzaw51UYndDbLx2e",
  "key20": "3N96n3eJHWpTutRQa2csKjy7UruZSNvMmESxpTffhNvKD4AnMXt2gq3E77mphicdHowRDa1cVh3UbBxGDh2arxnZ",
  "key21": "3XHjBRuwSSfqbpdLQCsvCySKA7he1kgj6BQ4u8ikPzs9aCBCcXKcPWgdNMGexLXJUwoMgpgXcpy4SCn8mWMDDyYf",
  "key22": "2NbfWL4cCH259KLQ9T1n5A7RdeHKfUt4UE9PUdPmaU7LFKxsoCFCjvDNYahY2LWfo4y9tFMDG7xYoEwneNgQcxqq",
  "key23": "46yrhhcKoJMC5BDYWjcG24NnKnU3Be9tgZvLMsyPdL1nmAxxjf9GpysL52GMp67tj8YdNJW7cZRH9mxoAVWwQyrw",
  "key24": "2ubcDkERgsZNtQV2ao7Jg5pskvthVneeJWiGCBRQSHii8fzX1wYob1NUjSxcBgwrswc9oJd4M8sFFzJxzsT6UFPy",
  "key25": "35e417A77HeZgijPLgwTRGRCucihZ8MU12gve5YXJPxuRkjiF7bUjTCBAAQP9GojCWwPzMMqzWquTtK8tUhLggjQ",
  "key26": "hEk8wHpsG4GJnHRyvkW3gqxf8LKKHZRF4ZspMXjWjtL2FJgK6FaLb13HLprHBwxhftHS1Go4cLyzn3hJBxy3AFH",
  "key27": "3oGKsuvw9iQfG4nnxtLzvyFdjDuat3Sx3LUf1ChF2rBAyX6REsi7fs6TnrmgBjrqeUCgyo8iJL66uBAx52EwpMS4",
  "key28": "35tZ8AbcpdnvpcdNJVwPyAvg72jGYj3KAjRcG7iAasn5nB242M1Ec8ubpPz8cTvtHsCwLQJo8xx1F7b2JqWfiNc1",
  "key29": "63krMqULiaQc5N7248CimdGPLW2JVpn7ZLCjRjLuWVtGwqqL4pZiMX6huxLdQNEtGiykUM9rno3fjU52QQ26FJMq",
  "key30": "5LjkzXLWWodUqj3xcgcY76Mdkqz2PBHdP1JUZm4epa6B4kA9tXx7pF7yDaUPV8chRa57tm2y7iEWKJJ8jASxsjoX",
  "key31": "CDoDvuJk4doygbHbbKZ8vpjWUnv8TJEVcBgXcPGBA8ouFh3j2byJ4Q2kCS6TRqm5dn7PWChrwb9nVTYX2mVxP16",
  "key32": "5K3G5PvPpz4mqNFKesmW8L23QYndMvfmNABcWJbudi2oPHwRw3tbgYEiegQYBBhc3UYcSk7uftbAbuiJt22c6neq",
  "key33": "281RPJqxoD1kW43t5jnKfPRCjBCUPvipfH1bDeNyjFf5wYhDvh62xgbTxXFLzsZT2VaTByHqxPx5XG9cLhn1hhNz",
  "key34": "5fFZ57wRf9HXMw2wJYQpPKxdBBWcnQ94pjhVCjGkA7LQnqvcWfYiq8rf4YLs55br1KSgLB87CpdNoTrQAePf8m4L",
  "key35": "5ruMa8BW5bfMSLnhWiPRPb9FcUqdb42cP5U24GsdSEhrC2gcsWfgr81hnJr9Shmy9JvKudHPtwHtxTuegWCQnWPk",
  "key36": "4LzTLiSPsSawnnav8S5dLnwQodqJMSyV7RBYhJj878n83Y5JnMBqWoJCj8vtv7wJ6ftZfNRu7RaPFh9tENApuSDL",
  "key37": "35ZdngSy2g6aiEYpdGpZ2W9XWtRQvHNCdzXi6y3eC7yAafydLA4MxM9qaTcRLgnWTGy1i4X9S4CnH5Gmnq2jBMKw",
  "key38": "3uVTRdEgtTMVjaMsdGbVdjcYSmiBsSPA5oYnC5SkKbSZCFDW7TJYvDA8d6BjXt7ehX2ks3xGq4auL4cBZ6jsrq2X",
  "key39": "aKzruKGS9LFLWm9ttZg9LG4EiFNUpLGkQpQLSPDj5efxBHcHaU81v6McmzmVF5WGG3ph3paeSzk6YNcfkLAZABs",
  "key40": "5L9kDVp1AW4HDhLbU5744TJLyh1kxH5NML4WDpoAcw7qdQ315wK2Z6dwAdiCpjJPAu9Vx5XyPxpfGXVQ9cwvq5HJ",
  "key41": "5THy749XwVNbHK3JX6pvdq8ScGNrWoBQ5YF9fikfavZqsML9TDa8PsdY8KN9AcaTfbf3ZwX8QMCqQnVQdhzVjN22",
  "key42": "MebJCg28VwJQ8aA6hGEyBtokTBmJ8uFCP5Ptc4BoT1ya7XYbfyvGLnnVCrF115avsCs43JTuYonEYqonHScdPkV",
  "key43": "5umtp1SwhntQjcY2wkDnMbdikQD5ZMNTvvW3PD3ePxCn9VMZyQzGXwo9Rrx5PqxHJe6EKfdM5YNQVahDCWZgZaGo",
  "key44": "29wYTHRbcU2zVDKYrGYizzmprPgdt93fFFEMsn1xfswRKHERNBBRYC6x4MdT15yigMY7hmCTWCGnvromHipvTjEb",
  "key45": "36j9Cef7eWHhZJLMk41yxm5o6i7XFfM7Cpx17xiJR9m6mpWv43WvcgkaNNxp85HW2i7RWY22fjWoGsQADeb1cTt4",
  "key46": "4cSja84qvmGoLVvddS2FJpBd1Y5m5u4cTLWRN3TSaUEKS2GqLJJmibTKdLxHBt3fHbRqBZpdVXAwXny28igdZQqi"
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
