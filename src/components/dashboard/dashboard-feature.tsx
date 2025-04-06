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
    "3NVbu6DFriqciVYZaqKTD97pitGEUjc9ScZt8KeGmbeWT6cLR3shxzaMTqhmjrezQHxmF5Bg8JRdp5rTGm3HtNk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iTzCwBmg8LAj6ikzuGeWv6oMngHtdyvXnw6UVxWHVj16qrC6qwGNT4Nb6ZcRaEuWLgHo7MtVFzxuYEK96GpnDPQ",
  "key1": "4aSLzsASf2RcfF5qo5QJsUhM5vW9jneNkLz6mZNMazWs3NQGf575pPpCbYb5esQZYubyxbMo4591HCjeY5oxMV5t",
  "key2": "eC9j1xqLz6tXK41PAn1rg3HQRVNfAhjWtxMEziGsoPHGrQ2qbqq2S32LKTy7kckMBASuDLroAs5itzQg8bWFvzb",
  "key3": "46hCCfJsSMFxAPgCsLzHWsaWMTvECXaqyxdq6ShcQ3aeujSKs5V4Tu8ZYyAoNbgLiC9MMsjK4YHMMY6N5ZHosyj2",
  "key4": "SjakAvyr9ysMk8BWMmzpjr1naDA9bDRQkH2KiiUndg5pC77qkic2ysq114imq4bHwRxCfTRtXBd4srWAph5qyfQ",
  "key5": "3iWJEAhhXK63nCn8H6j5m3ygPjnXAk5DkYYdePkJhG9S9r1Up1FCFkdFgm5tuMe5v9hm6nnZceWRc8UtHj4Yp3h6",
  "key6": "5Pog5hcnXrQTeXvpv4gVgX1Y2dkBqce95caB7AXYhjcUVPdHQ6mGQRnHg9QWsRcemWNYF8vUGerN4o1eXF5LwFTK",
  "key7": "44X8EeXyHgr1Xc7ADvKYwHdKEiPgkJ6EziCHtd7a73w1MWfavKvCp6QmEm4RdhvF5TpS29NS1vjQTP9Zkw2xmmYZ",
  "key8": "5cF2fkMUTwkoJZSx41JZkSzboMQcaG2duFqj8AmNrZ4g48iZdFRQrAPqJatr18dhfRSHh5WQfqp1m43py9v9JL5Q",
  "key9": "54LGz4tdtw7Cpufkocy5mrmUKXMDXjzUiJYAdqq1r3txqNo4eZDfDPr9azk33UHMEXmgu6royUXz5KNX6BA5BxKq",
  "key10": "5KcKEPX8SmAejqiVGy4r3FB8XcA5aHwYqFRocTNkx2Bg38FWz7BM7miZn4rc3rdAutjGGBSUn31BxnSLoPjPYJN3",
  "key11": "Dnj5ScA9qcUNYV6kFqtzAz6MPmLw8CuqvroKwh2MZHS1itG3TFLyPEEwhjCpD2Yt4vX4nb8Po81pRJSwq44seWo",
  "key12": "4iPZsALqCpvNt1DSpgozkPNcTVpGkcMwPU2jpvgLNsxPzgjHXNmjmYhrgDBZqDs3CLQDrHsSWccNhrRM4wQySX8c",
  "key13": "3ynjXDZNBiWPsY7Yj5yj5hAy6Fb34WKKQefp3vvVqPCPuJ1kc3HBPw6j1nMTkChftAfSqAzv6jwKgD4hNP12RRdD",
  "key14": "3F5btGqmcbguEmpzg4WHomYSvBqFpSjDYA5ci3G9ScQuWKkfPRB7hbdixTrgKfQ4XYbRF6uy1DUALSgu5saGBS9L",
  "key15": "5VcfJL2fzD1vsBB4DpVGUTDyXAL83DGxVYvQGGAhYjCpSY6tBQ2xRvg1UbVzeSckuBsfVAYgBr3dzPgkydRFg6mz",
  "key16": "64rT4kLLb7rVpPFRPJd5VW3Zc5nVvxXkWCrg9GVn3Vn2wfjoC2yhca9u2vxwPQ5FPsRnVmCkFACpz2CSC2LRaeY",
  "key17": "3QeNedNGZgiQxjR7cLc4yvJ43rzWJ4Bi9PTDiYzmFanm5kw3jexrYYrRvwbWYhmBGFEBJAjFPafAYSdqVtbkvsdc",
  "key18": "XrMDbvPdfjN5auzRPtv9ALGZHEh7CCsovvW75nfE4WUZFCnfYu9x4tvD7qKZRZ5As1cDccRZGNAd58WyzzjWbrL",
  "key19": "dcF6CQJoNBUDGwMnENYNn8KDDvaHPrJyFLoGLmvYUfY6tioLPhUUpjRY6Xjz4yk3XEonthCiTBdrtwtYjt7HkGC",
  "key20": "4D3oktbtDCeXtRnPbUuyaD48M4j8LcSEd8hx7b4iVRRHgfYbUAFauUKRNZ8DKCR6atxTiD3AzvAd2azECLkkGsMS",
  "key21": "35yhQCvqf6XmkpMvtBXvsnThaH36AUHVnWfCusKcXfTMiTfqvazZECpacAD1cfzi1Y4s46NCZQJ7qBrYSXHD5EnW",
  "key22": "5mbSZBQ1a1BN5mr9oVtNyJZb6eyUu8LsEX2YhvqSBRiYHdrEmRXTAsLph93gDK5tHo8bhh3dmt8i3RPvUrvYBV4W",
  "key23": "5Vx6SH5n4kXQ5obP8ADH2abwMFmxKWv6JM3AkcYCEjHXqNnNyy93BkTU7ar4Gm333gXXki3R4R3mNCiP8JRonHhj",
  "key24": "3yymaHua44DfBgSS52575CTwnPBmjMMietRFMg2QNw1yp71zG3Koz2Byk8ahu5dsZu3q9hnGuyAV621ExzriEPEH",
  "key25": "Q2MFYNRjFpvq65WAths9Xc1TX7FUL3sb5HqudGyVkdYpys5zE1ELyHtFCXH8iaNXa8puQtvF2K5TY1QyjhHx1Y3",
  "key26": "32zGYnKiawvWedGKEoDWDt5iANS1yNJnRDbKy8wrjixiaFcgkS6SWQaHgw1hQHPkPyGsquLUnik1qWcz6LtsnvFc",
  "key27": "5E89hDNUuDBNKvTTnQmDS3ZFKFbkDQmsd1x57FMrBiuiy7dWTL8A4PykzmQiVxpFX2pP3pe3PAqMy1g8eNEkqHZ1",
  "key28": "8TD7ABUwLhQacF1hFG7WZfm6YhCY5VS4zAq16ibDXJxvdxMdnrN8FGX6NX1G7ZWMN95T7NCxNgPbdkjshnxXNwb",
  "key29": "nJnQrQmq6knHSx8qKnvVEEojYxLmMpBqcXpttos7dfBXrWpcQi7wvQGP5dBiFsNcW3txnQFSQqETYNYPtLVo8Zx",
  "key30": "5PV2BWEyQjx39qu51wCUMwQ2Ai7SYseWpdPKKDbL1B2fGtvDzsWkLqiReC4xWYuJMoi2qGBq7P5wwzob7BPHzGXd",
  "key31": "a6XyGc1o2dqhvajLuTxAsTRSWeVLUy4NF1QzYFXk9YJ6LuAy2u7n87UtyBQYfFU3tEsHJFawXTE7stUSNhekTWd",
  "key32": "4EUt6eh9nfwUCSrPkyvpRnDNWyagHWVXa9kXEQB992wW6WcyRNhZmer8QVLjBcy6GP1Yj7yWc3UsK9RYeBbySBJW",
  "key33": "64mCot3cwqppqf7R2vRL8kiPZD61ADNCgF1RuYHQhFMJt6z38pSSFHb97EStUgxGA9yeMf2ADBZ7pmtFgwoSYfLG",
  "key34": "5vKu4aqk7VMqQ3HTnS7TFerYcmWq6PheuEocACVUmh4ukqXdzC1YAHUU6iNst4o2wa7stHF8Z67xN3fkNCwmBDaf",
  "key35": "3QG9s8KT32H5sxmuSF9WTTtvW3GpsXXEuPp4h6XEcF2aCCd82pLoQ5wYPm6Nf3xSNCrBk6TaMMV87RpwxxAEszKx",
  "key36": "ekz3Ned55ipRxJW5RT8hjBYG4DdkP3veLQ6z58UEjLxkbsdCyk3PLD3H4CoqwC7TAnp8TPh1yHVBqjVVfDETgBW",
  "key37": "yxWQJ5C7yGcnuwEt6WU2LtKuHRQvjnipAacjWYAuqsRSPtRyf2ejkz5SYmHvdgQWCgBRzehCEtRcw5MUtz73rMo",
  "key38": "4YTfQtDYZQDD8JGuMEngd5u3TBRfG7YFqK3RYxRRoBucBihKCM39C3f3QVLgZ6TEP9fmGzSeJfU9cKvYJxcWExy5",
  "key39": "ML21FAT7bipLQNduh6gBCYr5CbPZu132eq3uhS3c8LpDEi48ACEdGAfg1MPBeHrNkSEgTWLaKkLrryahbALZh3N",
  "key40": "5ZrmdXXGbXKCBF3dHx5vnG1Coqv9yNqits22rKtYu6L5D86UgDM3uiQmN22V5jQx4NsuwQsayvUvw739wCaP7YvL",
  "key41": "4R1VH58om1QVeSAPp4HxxByJH9yDg4gNaVQ5nPfNgeUvMuzi1H3uef6B6Ln78zGagLyvo6VQeLs8jsVam6SRhj7K",
  "key42": "x3U2Vc75wk8gNzUqQ9jh9haBAu7DtFBs8SU8rCSxYZ2xodiprMtZwLX4qmcqWdoBXVoR77np1P1qsViz4y9rqPQ",
  "key43": "2iFEUSoCT28SueifXuUVdpDDSP2ac14BGQmdNKSzwaXZK768pLr1ydC6XCJVvxTTwLTaHFWAWVYgv4yf8rxsydzg",
  "key44": "4GQSh78j82e9tPxkBxPfrzwTgS1vsfi76dhYan2zHrgzvNh4SreqerRAcGQ7CnrKzhmFGoPxfpc717ymdtcNnRzX",
  "key45": "zweGcgztEoRViEf9FmMTtoavseLfZ2S5yEJ3XExtwkqb6Kb5SFBFTrqVek59DYFhUvZ9VKMwvgXoctsuBttfEqG",
  "key46": "57EThYY1UkCanLuGURbDbU3LG13g4R317eUgKdBtL3u5Wo8hMeGcF9atFi9og54Ubd96g77iwAGv2nKicUAHvSfT",
  "key47": "2BwzzYhh5V7gKYQ5uSjensJC2Q5zHrKPaqhkyx2SAo3c6UFz5CqzWf53Bejz7FGW3Xvg53JdtCq5DkYxmrAGiRsv"
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
