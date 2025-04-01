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
    "2Jgcroz9pFsK6uwE11i7NA5cEHuUp9EHFxt6zmD7BnJGPNTXYRgNhfxy92vecKMWoeNTYRzFgoe5Dqsv6qJbs9GL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bM28cPn2JkxiUAYG8RyDx4CdCfwfQy4MmaXW2grGw3rcRDAT3U1Vf651yAB6shv4B1Xke2shsE7VpTN9Jo2Xpfk",
  "key1": "251X88e1UH1Lrvc5HS21VryV2ik82hFtEcwaYQChBwYzrUXL1feMVw5hcEcSp1HfeXSRcpffXqt6ikvaZR4zjcxo",
  "key2": "4CYBLqR4THa74QEZT9JNKybqQs4QvyRFFrMtwejYXj1sQtUqr7NdZdY81hnnQEMHPVH4S8EcjnuMMb5MGHwhSdbE",
  "key3": "3qFmhM9kwszgVEDAe4yxux4AY2kZotSQfRvGnyxv1UnFycnXXhrkhN5NNpGx7LLARhFdPsC6GWatjRaTZbbinDGz",
  "key4": "2DsbTpox1w4wP93dXGwKt7pSLni1akT3K6Ds4LdcUJ1QnoMCg95TypxEeMu4Yv6rPJ1r99e28mGK1yGJ1zfM2N9G",
  "key5": "33bhDodr9hEsf9ysenCokLEuEjVVsrSnjXfVnCQ3WgBqzMZEUTGTFhPbS3iV6bjUYVzdb3v3U9oRRTkou5M6kgGf",
  "key6": "4aomZfADULhUSrePhEXpohgv1yryk4GhUo8MY3mbiDtxkzqwaKJvCJZhj39fHu91qbhsPtZYaMjQbfmUU8WAxG35",
  "key7": "5A17nGjrra2nZJT7rd5QJvu1YFGBPiFfRhesMKRbxKVtCCGNvKpaGHuqf66pVEpmHBpuLMx8nsfMC2wqqcJTdRWs",
  "key8": "5qkCk76XW6BZbbpqoHYMfEzwcSs9asRpctkgSZe7oZR3faKYdfhRiMdE7rpvSiM2YvcrFttdQu6X7LXetfw1sDqb",
  "key9": "3sgtknC8jPhBRLSBcZ8wowuRLfDDCvpTfkg1qqSg39q6aYdQZVZTjAwoZB6g4kf4Qp614C7gQTSTsf7ApA3wWUSr",
  "key10": "5sFnSLrEMThzeYMA8MgeRveen73veRhrURG33Lgy3Yx8rUwUafUs7LbQq2mb24dd75QF5cZJPXXTkH4cMG1oEVAC",
  "key11": "4hPz6vgEuyioFeFRWpSyDCabbQHqsMFZEXohE4mEYpzyJYrxLHR7zr2DeZwtq2vsEGSTWEpD1jFdmzfomGxR7J9J",
  "key12": "5JjjX4xLNmjjWbufcP1kdXkPBMaQRNDUT4jimgrTZgTaHBVip5RfV37n5NgSeUs73Epe4XziJn5yUDBXHFNpfx6x",
  "key13": "5JnSMHK15AthRdeNoKfKic2kgdZGj9gpvhDrDuAkq5juxBm2phuwKeGhk6tU2AVTFquhVLzhiCJ7GPMPe2hhWwLS",
  "key14": "58dV2ugAwyGnkCpp1QX2vtZzkoYZViNfs2giyEaY66vSvkYNbg5sCuYMALiTvUejgmBiUQbdQBf7HY4xa1moxzdf",
  "key15": "2z3D64bNihsGUmHitbvtc3qtBATdhasaZBMtzjWifYwmujJeGrYrVvwU1QVDaxL35saQvV6qfMisen7pmFKS37aM",
  "key16": "Cqm1JkDs5G5wtixFnqkZEenDd6xAYvLyJbE8xDJF3fu6ZuhvDjfr9nTQXARZ4LNEPtJHWGaTZ1rGrCiBQ9ueva1",
  "key17": "5oga8E2DX5Q6YCiYoeoYxAg5yKqwxmDyCyfDBZLWunDdeqAFsT3nfd2RBvBALEtFBzQEfuTBJB3fdhysYNK3GRtE",
  "key18": "3ivJNZLDUYrADoqWU64r2MfgfsnGGGFHWV4V9rNEkwrq5bV865u5Q2yxAGqb4c5JbdXQQxNXags6v95dpZsF35c4",
  "key19": "5Z87M2cR4vWgwJW58bowP4jDKvhNzbcpgCt2Cq3i3PF3Uo1yJYZdQf1CNpz9QfhtFMS3Vxt1w2sbeByZJm1fdxJ",
  "key20": "58pN8c5aeHX8RzXrcAGXMRkDiRjCCRRsdj7HVTFvbHLF4JVSaYYhyoVdaiX9sStonnfb1DuB4gNXpFSwqBAJuEmy",
  "key21": "21mE6Xyk49M4fmt7xSnni2nof3Z7JBWxmoJSPaqkfBG8sxsydVF1YPAjYpWyCHinxr2mApH7qEE6ad4NfmvX76rB",
  "key22": "6NXCXeKA5nT95xbgMN8eV7pokDjzY7Gbj4XRZwA4FY6QXmJe5C4D7RUtCKHYu8cG8a6q7664D9X3z4Rcdh7HyGN",
  "key23": "47iehi1DxfqQi8NFNXF6vS7T4cKSfCfTJSi8xQCU4H9azJBrXDaDjfLXw7ubG6t4yb9ZhgSAfyJVWkysMM6deHni",
  "key24": "5dcaaGLd7G4CxvxBe4m7Wf5MYHDhAhLJHgzgwbsTCkSYdtXwqVcHNeRAWwNu4tLfdt88dmECQdoJXkf5vP4N6BmX",
  "key25": "2BNjZPNsGFZR6sB82fTFi5bYPW67XSSaZDxxofjQ9JcdzKasQJg2RF2UprVY22zzooyCUjx1NNCX5m5pccrKEkDM",
  "key26": "37sxtBrZaLJWLsz3fp5PYXHCMYJgVbAgSFR9TWriJcVmVhY6CmsicbuhELcck64Fp2CFMSa2qnwTcsoTj8w2MCZs",
  "key27": "183AzrPHp7dfMjV4Up3toewFkSwoGmqi97tFwJj7PihnkJWjX45Lx3zwR5wKDvpXZ7hDPJUBdbVtVpy1jvZ2ezV",
  "key28": "37srGnQdgv6XpbosKuEpGVmQsssiNPm2HxET1k3vFVbBbVBWpgW6LK1FXVV8LFxERnMCLM39D1MXWuyeoPZbQzc3",
  "key29": "2c5Fs2zNeCKYPuYDDbw1Qmvp1WJPhKYchGyFzrnikYp7PRkMQigBSQEM4gziJ2rLQ6FcFtvdc517d95TRYaMdX73",
  "key30": "2Du6sxTEypn8B8AMyk2XvtoJTNy4X2cDemsTgNbtmugBijxJq5TgxyzHJd9LcJ2ZwpAASaMeL1jVqYo43CSCNUwT",
  "key31": "63NEeM7gMRdswefzv8RWeVyZQaWupXxmVNV5rmtZ4qAMZGqeSXsLwL2a1481y1ThTSJ2zYrGNmhFrbqAYCRAYMdG",
  "key32": "FYLiiWM7oGiLgMPRXagDo6kHmapFoMoyu2pmnTPwhDiYrxZZ8z1Up1KFYDAjjMPBKtSHkoWCuWXbmhcDXJ3h8ci",
  "key33": "2SCh6yppT4DJ13dD4sGZPcN6ngJBXSPgmE779VjpV22oPq3qoY75txCvrD4v17rfeDn1P17rwarL6qFuHR5anyyk",
  "key34": "2zQzWVwW3zPJ3JYojEiuTRBNqkFXZqW9pMAkjYbamNc4oF6VDZsUEFmpBVvHuaXUUSdMVXGcfPibZ1SsgrPdukFN",
  "key35": "5hjQjnM8GrdQmRSZntN5QZWiK3CnM9P4asWnYBbKX71PGzasENuNQ19n4BLXnq1hdvLR3QiJnqfFoLxsvFgBz3UD",
  "key36": "44LYazSVTp1BRA5FARzrELXxYxE3JzvS6Tz14mAwmbCFswRnz9ZwkeCbB9WfwQjT7v4gSyYmGvRnehNxULxPb43H",
  "key37": "28VvHmEvWh27ZvUV62qqvqCdEAKtKqBatyKWZEA6dgkAmmk2dBBDhsBoPvtGUWKx9rjon3KuBScnA8PBeFvAQZyq",
  "key38": "5BbwE83nEnPdDKu9E4bbwW6cCJg94Etd9Ax3hBXAiJrRQzCZvcJu3TJn68VyKKz9WGqwHib3vNHXuMG3hZj1bW5E",
  "key39": "5kkbnXey3D1dQhBiKF4UVBEENNEwz4YTetNzXt5UYKfo7gTaVp9uWNpyEX1AoiUsGFHkbxunhAmijfUX2x8duygc",
  "key40": "3Vg6t3en8fAf4x25NFqQn8DtGjoDGdcs1LWDpdLB6VYbHphvASYvvhC8qvByGTT1tTcpRa9Ls6tCDGzk4ijNi57T",
  "key41": "3cWeTJCyYPdFLf1Qo6YuVWQ4Fh5AMB51X5GG7NLGsU3nj3bgZuzxBefqGRY2r9x5PitR84euX62knccSreU72Rid",
  "key42": "4T6EMwepRXWaKREsX1SQYak6rSns1pNJ81ZmVHMYJkhHwQHFT2TjRYRHnB2veyiMnhrbiRJhv3YekBRXv1fHB34T",
  "key43": "htfxCtdnEtzMwuBaTgnsQ7mSn4KLvNRPLJ3wmKCt39x1tTshgxFUYzyLwLA2SkVTmcpJetcgkd3mq6Ceh7x2bTq",
  "key44": "56KCJNEcbCyVo4QXBjJhwSAoMpSyLgsBSBNVKXjZCikXAoZjB42ik536PwJUJj9Gbf6Yprdxp3uLKjgX7Mehc7Mq",
  "key45": "5uCm3cJgUKRy8EFfXaaaA28iWc9zvyYi5PDzqwBsPUCm4CNzPeqWJ3o6aeLUrxGEYkm3Ce5Nv7rtRK32Y9GpS8fk"
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
