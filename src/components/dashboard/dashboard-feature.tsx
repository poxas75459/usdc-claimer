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
    "5muZQCeoDBiJd86WS8wimYHksYeQqE7BbqFMTCKamBV3xbxDPXBBcLb6PEyqrn2fxkBGAywtB2PD7P6jYuACGvh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sVuNYKYxmeRR47P9ZGLiRsCAudDzS71woJKt3jz4gggWq22UsBtxLEtpG8LXP44ftfYocpjK6Rgjen7G7QaUBN9",
  "key1": "4KEtoAp5PGtNyaP8disAtB2YCoAGMRJ4wBk2cyHgm6EvP96ZFqjExiudpznh1vDhZjdKafvf41RCDXC32J153ws4",
  "key2": "5Bi4rTicfkY3FxFMujNyi9L3uEqum22Ucrp4FKC8rrrKrMppC5xj8JHwPTPBRWPYSS3LEPcNBHRp3HpvRzKqooVs",
  "key3": "3wXrnKuPCVgrvyiaCe4iefvw4GCCXrp8AAWtAjE1a4w46W3iZmR5vLTLsetLWchWGt1UVRuwhTd1YbYtr2skPam3",
  "key4": "5cAWz3Qex5LhiwDf7FzLEWd117okVk3NbyeYsDXg6GfmpMa1D95QkNSE8ULtbB2P6PYT43MszJiRJSopiwLDD3ZE",
  "key5": "5L8yWYmy8h3AMTBKJxzsyb1RWipPCjzjV3CaiW7NNTKNP4cqmUMZy3h7zkWpZjk8GuCsr5nzH66HY8vqkqeBhmYp",
  "key6": "5SidDuHck99pg8mBizvfN4mQ79Q1wDv84j2AXe5Jv7KD4RGfwR3X1yseVHWA1yNDyZpEzAhuSH1oGznCVcW2UdmT",
  "key7": "5sQxfum3Xj1GxuA329EWDNLk4UGwg5HoXtxoxiT9jWgfnMWF2JYWsPBQ66k3o4wSWKVprRYSnM2sZU2kXeYuWNmf",
  "key8": "4UxUdEfQcx68PRkbvkRevUvazGB7WsTEiSeLBWLSQ51GszjZR7zJHn4AmU16F3ciXBf4K2NUBgWHN1wZfAgTXzh8",
  "key9": "5YXFhp3MvE27RFAnNoME5SZxDV2K6UwCxaStUAf6PjYS6dvkLKmBytnrXjFbLDDkmW3741EMJzeE4F81SiweRafG",
  "key10": "yRHL45HPDyYHZ8tVaiqTF4JZ7MdSuvoRPrf1rVMxEkvwQWRGnfohLAFEc1u4y1p66rp3jTjwy9yQecsDFsT8GLz",
  "key11": "phmRXnnG9PDY1nG3VNVTXy8UxGDHiEZwT9oQNDHh1tgASzFmuEzd3dyaCDNi1jNTB7saaL99iTsy8gUETcM3eEt",
  "key12": "4JcoLwEFYWJ7ysHaxtsQZc5dcfqWzJNts2Jmg3RHw2fYuMrF4WKKaPrdJ4zRbEetBTur4JnwuatTRoEfbDnunCWv",
  "key13": "pzNz9Tb7tVS6Jfu79nsTNCtgw9AKgU9kFWAsX8yP5nzXMNet8Zgawgk1Mip2iJQ6a6s7JdWgYA778hGfxp93BJ2",
  "key14": "2cWKgdvdfd6cNucbt2erwdK7CasZG2biTd3jx6bnMxmMuDroF82WvWKV5gBPQQ47vMrykoaCyQYqvPEmcXVtRU8i",
  "key15": "5x2Pg3vkR4T6zJrDXDiTa2raMSqmustzmZezUU1YfjpkDkazHCiHSQSbtNBeEk4ooBwF78ejaKVCx3ZzRnbqkDLy",
  "key16": "31MFQPxQT1tgEpqyjX1wFNsrxALKAKmWT5SVo1G4LF6ADg6EwuX3C1q2bhfPM4wJSWvE93TuPGp5HBUSDxoKRQna",
  "key17": "5z8Sxp4n4Zph3aJgLwqCx2i3Ge3TrawkY4nqLpCH89gFjBjafjir2URDWNZ5peQ6bdAMtWSgb4QUhWjFPKGiY4Us",
  "key18": "UUT6iHvUstyeyG3QDB6Lj9KnqVUBzXDVTQGM3iWgrmzDTMhw9eyfQ2VGdGtw6U3o3YsZknSeBXJMXcgwrny1Rir",
  "key19": "23jCgQuJqoFSZmVnHrs8EQYB3FDqvGPrqhkLu5BW2LeN2eDRarYk5eMp991bL3y2aePGMahZDhQ2hJ128mjaG6LN",
  "key20": "bfFB1Wgh9SZCcRGYggVh5mx16UyTFGWjnaVPxm7Ay3wc4fTfzS647LBjcSssVndPQAkGzCTnU5V12e4LdmR9osK",
  "key21": "9NbFXPpU9scBZ7vXFFUj8vKzGro9xBZyPqsFDBJLKyE2v6t4H1PAnGNkGE2UVm3XwuDAVNrgHBwuUupX84arcCn",
  "key22": "3D6hCmEBQt2z7qWGt7TH3of7sC7Cok9tY4dJq6PQco5RTm8Nw4i1GdE3YufDCGyKA44rUtiBTvq9v7YRSFNzHHQh",
  "key23": "4rREpbxP8VAPsB7duhdKhJcQ6SardwmfNYCUU15iU2qHXuTXX3yuiL2xyXimHtnvmEybo87V18xXGTeE6N1Q1UJW",
  "key24": "2XNRE2w61Evq2ukgJ8nn1WryLzU4DLHEn7MMkm978tsju4iuj6ZZ48nBLGjreZwkrkKQTxJY98i4Kiu4QPLdTfCw",
  "key25": "3MrV1wXvEQfujFQQEXfgtKXoF8jePT8kLiTqfRUABVbuthcWmqrJUdZzS7Cd1eDZEzo2Skb8TJdtM2QjriQsydTF",
  "key26": "4LqLV3Qy77iVY8DqMMDeT2UQdWXBFTCdAHM94XLrJAAudixapkUHWQ1g88f2EYXq5C4CZ1YXXiLcWsRfEQmwpF7o",
  "key27": "Gopqdh9QGbgPmhNdXcPqv3ZxFkU2zcuqj5pnLWFhAfd1DuB792dJToACYLjHivPXzzyKfzTbLxj6Fy6vgLxdfgM",
  "key28": "5VqG8YBpEDUB2NodYhNF63utS3V1Psg6rUYj7j8VLKQ7bUcF4FWmVikuuotJ6uVnzosVau4TW1VHDbp17oxhnLVs",
  "key29": "5Wh2FjRvHXpaKvevg59JcjPDYaQeZ13Jrc8yLvCqugjXz68XG9hLszBuPfouSQ1FvL7QQspcNqrVDLDCpMtRQHwh",
  "key30": "3io1J34cPauvTWeiPL3t3oao9tRgExF4m8dbtg484oabKKrVYm5Q9VL61L1Vo1QZf4FBsufWZeqVgPxBypvA6de9",
  "key31": "3o5qgvsDthUd8YEMLA5RmDb56ETFXtm3duGRgKEriRPc3hZAtbhaB1pNS3NqM2xjw5qvcaEsT73egENrxfuy4ies",
  "key32": "5wXvpJPW7mb3fWS4NpxthXDmEFwc3S8ELCahHDV2epBsuaZoZGvcB3thr5W5ASMHA42FdkmS34ddAAnPKhyLq9K1",
  "key33": "56KPyroSJdEZDens6NaAdYHnTqRTadvH57FKf73QaP3VfqNv3PQG5XfD3otEpe4ivwNeTL8JgJ6eQWgPynP9DWzJ",
  "key34": "2v6dtAUB4UMmX4LFHDQjVAfWX4682Cm9mdCjMSzphyM2pNCPy54LxMUhMwgx1ZBfPkqPtB8J4m182YyJzz5AhVDM",
  "key35": "5BBPkSMXBdwfeDHb2meiJz5CfFRQ2wsuvTcwyHizzTA5YcxVw4XND6S1SUXW4mUiEraVDTNZsGiUQYDFAC1XM2rH",
  "key36": "4CiX8ZVey1bX4Xfm29LppRG61dD9VHXPvRbSLnPBe7jDHPZX3TbbrBkTD1nR32jRuoTHgf8pXa4XGYQ4qZgiVddE",
  "key37": "2wGPbG4vgDBdwYDsBztFBBaptAUKephKyxLoJ8iB6xoYLGJdmy4rbfztFHob2RthWTdxMsvufWDp9JhGa7gYJKjp",
  "key38": "4YN5XTCXpHhzAC4YJ19YPYxF8Gz8HCjmmWurCUYptdrvcLkzkaBefAjF1jJMMRDcwPVbSJuKeSKLe7aMTH8vZT2p",
  "key39": "3oXtF8Ubr3YfjFXQuKK6VatqPAruYHaLta3iip69Wcx6vLuwUQ1x6eCw7i6H1vY4UXNFUEJdB9HB8YY3g8LWoEFj",
  "key40": "3CoBMKCKJ2bdUjY7ypXzoFAyjKhXahqjYuE1DpiNVQk7cCkzNnGqUQW7owJ3Y5hgvK5dNZXmDWXPaLM9cYJHwyDT",
  "key41": "3tnRKnABQ4BqnQuip7HAmXY1dZAFZgr2fU7dq9AURXKWWfXoXJhRvRfGaFKE5V8ebSkyxeLTtrFL4yqpEuQrpfoU",
  "key42": "2BmsEvb59KLv64Wu1766bRfAXShXqEktrnx8AYxxR9eTaLfx3i4ePAzZZFGQzGyKr6Vr92eGSHB6Ux3yovnSa2Ee",
  "key43": "xqG1wF6K7M2m3kvahzMrKjSKVh8V5Lwb29nFGt57PcyUhS2X9ibEsyBkEPhzFR89HvJozvwjotZ7x65HtNXQKxM",
  "key44": "5PCcv1KgkGEaGkzNF4yxGsNcUXMHuG5rd7BDYB3JD99rsmvvVMjZLVXouweQGdejZ8ngJppp8KcrdRPSDyWNbuLa",
  "key45": "3bs4VebynrDehj12ZgjvoP7CcWu6G113iWvHbyjg3FxFMW4QtmmrNrxhWS1m9c5jeAQXg2LEn64qNR737fNynzhi",
  "key46": "4kMYWDuyi8piABfaDgT4kKFGJNR1qxrXuKHRQ179YR1n1U9CJQXQVfT9cLT1fFDNaobrcWjCVL97Va2fvNJqUmMg",
  "key47": "2o2od6MfPCpuJEvdzQnMQCVV5i3r5pPyMwQkDT86FteKCUz8xnNYi5yAnE5bipbrs1q9TBfiSazJJAWPLxsU8B2X",
  "key48": "29W9czqheC2SdRkJ4pT1V9sRC6Ge2hAMppsZpgDvcA8STbMvLUiuh28vJzLCsRumTbp9KdH5GYGcwSemExbT4tN8",
  "key49": "5YwT8sdHeGoqFaLC9Dnf69YbbLNyLdfPkYZXpkDcMWAKCub6HqGsNgiQBFLyY6h8jqvn9ravm4nWnXjS8XBrPBQV"
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
