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
    "3BU6vX6UcHJGvT8kTfUEARqbktgUGhryCoDygVeCYf4XiUiEjtxc9GQWNpKje4S7EuYhaazhxH9dHZByusG2vAJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QbVQiwYNuX4pD8QaYhhVQFkdknHJuJ5RYnttJoL1z5xbhJHotSnCoKBvgvrMcjXo8w8MAEyobCuKGK4t9za2dh7",
  "key1": "59D44iKNMa545ouKTQ5qdvsbhKkqW97GcZ1HEFAcT1gSGfGEVda3RffsY61vRNP3xKXGYcmUiRwFScWoai3tYc3q",
  "key2": "5Ff3wKRyjirBx2Cp8aGdvnZmswq5mKibjcNe6at6rfS3BkMHQ4RvuRbVTYZQcJm9aCBMwMVVp4pz4ysqXczf4UdR",
  "key3": "YMxVEwu5WfbmBNULLEzJ7fFyNMx74UtS2LHuz2X2kHNcM1vQEf1JEZX58aaxBQrJLmjATLN5ffytbnDM9mkVsY6",
  "key4": "3TvuwyUdzKLSzrnmZ91VjoqcH5zzU7UJKK79SxRRjbbroeu8utLBPbxmpz54PCzz1LGPnCkHEU9CNtUD23FUUNwt",
  "key5": "2LhfQtGw9NPH3tDthjX1rKvdMNQrdRrSMZazpMH4kQuoHeChcBXcPXMUub5aEE1hx4x6quhTSbJMw3VXmzdAY4uF",
  "key6": "5pSeTTDjARFmDqHLsSg8nVaQ6RcSogDApFnFfHNh44pQeA7d7aTrWJo3Yc1cPqc5EfHsky5mNZK9DxrdRt138EGM",
  "key7": "285H7pHi8D243aV2ar72z4ABQomRoG4b2Lc6nXfejuzMQ5Vz251zz73GKzGFQvhvXU7sXzcYoQ8j7QVC5wiUjKmM",
  "key8": "3KxbkrH1nQBfx1cMQUE1etm9anofFmgMWxNfqsqCQAZY4FkwEigF7mapLwVuy3558SHjhxEoRX2LyE81igc2u7uC",
  "key9": "4EkdpW6FmEGDf9pJTdFketXp3c2gWryYuBDeaUPMb34L24RwadmGcK59zsQoTqXZV9VWkQokC7qy7DmtsTCHXhhs",
  "key10": "26j6DcCc2ti2ByiexjWZRafhRciHMZChfHBuFKjgsASgp7bSt8ntWbmJ1Nejym8p43L9PCUdjkttuVZ9GiTXqGjN",
  "key11": "367SXoKYkjX8geYPGZuuVahm1rbEqsfoNs3US57tKaqwLdhw75D9nWadAuwBsD9VcbLZayGv5aJ9cTYPG9vh9H64",
  "key12": "2rEqUiqjAfUB4c1BFz5zgnfUNGwYsVo74P5A8eVbMGbh1Cn3Wu8n4oe9NfqEsxuLWKTvmW6ysQ4GwqZj6by31152",
  "key13": "4G6gLesbQ9ioiVm9o3DpS2UVRhHyFBjmEbEpCp3ntE5QHktLBTVrwsCewHBueLgJGNN3iQA9PN6A1xMc9GucSjby",
  "key14": "SyUbznfiFTt6nzjvfGYCLf2TBqgPR4JSdWSrqtcikp9sWf4gw3vhFFjFGsp7ssyZyHCY1kMjUFUccVqesS3wAar",
  "key15": "2qQPpDJbQyBEKXwsm4npb8xB4wtsZ2Whih6Qfmz9oWZtKV6ZzagGawKKtTFSAppbTFG4at5AoYZZB7hkSKSGMN2B",
  "key16": "wvZtZgHeGNjZTc9K7WmV9t1FyF5aG4CrCAmTdnkaLD8GwJVkKne4xQ8eBgt4Ney5TgVAQZoLNjfQC1QuDucMLrr",
  "key17": "3nv6X5gH3EkMzwV3BXdQVqhAzUqQ2Tisdc6pBKsq1YNkVTsp2wVpsHHMcjioKhWKvZo68zwJhnHGjdrudBPgY7NZ",
  "key18": "C7GpDQ12j9M3b3Xnb2nTJkxed2QnA1PDXj7ZygU5yysSwGimpL5uj6VhH4qe7KthK7P7CVea8S59NJGv9tEb7BS",
  "key19": "vN3drtGXEFfNmuvaJ7zYgg6sAZsH4i2T91WZ1c7p2sa4tyoV9WBQMQm81H6CFjHrnCbLQ6ptNArwsYt7UT9UwPf",
  "key20": "25LssFrPHT6NTz53ss5SvdDE6GUCfCAkt1oauqBpjuuyJdsTZdmxJ5S2XeUN9267nkQnus5YvURQfvt9uo48pThK",
  "key21": "UqoC3Woz5BhUe3x3KVN58EhrmPGLSbaCQRqp7HpKAMetTfFFLEo9XLhfTMHDgMsdWkqd4MKTpPFaRVz3RHaJ142",
  "key22": "jdPsSmaBhJeZmRhsrGZU4oDq2NtVe13JHpYSh3Xayg6MQDvWYeL21WLXNYuVbCiJLn8F37mj8HNRZN8FoUctZdU",
  "key23": "3XEdFtx9v2SWbxzHvDUXW3Ktr4r86r63YrAnbhj1dxqMJASLaqaWtjdbrex2xrFAYTmY5ebd1moXycBV7emrmUoE",
  "key24": "5DS1BRgyQr6GQqgzQU4gwA5fUDiyBUYnz2wYPg695aaXDaVXaNDRS1fazGaacH7jgeovE99T9voSRKYpsiXJtLAK",
  "key25": "2YkKcpNhZHVaZ1j1vWwJgptYPGLTot2g2LWcGyureaN6kSKyfRugnc3qFRgGScV4RDNSmjnRxPG2YortTLRgoEGG",
  "key26": "5rifrpTJ87FkEThJ2sfa89rCK7gJY5ibFb5CDPCG56d3caSXBbaC3qmminZvBuk9a2yTRekQkztqHV5Lrf11hjsj",
  "key27": "5PyG4SGHGaUUkSyAAVyfT8bkG3n9svweH7jfn4XJ944YPZ9VUMZ9V2zxMJAtBY9EuzggPLSpAqacnxUCKB85b3EZ",
  "key28": "66S9DJQL6fYb7w5TqnymRVHVpnp2Xq3gAzJKzda79S75irz9KEymfxn4umcvY4VVPbKv88iJdojMVJZxBTeZh4BW",
  "key29": "37ESxqEMjAahvi66f5XNiQwGVigH2Qkvtm5aaVvMHx5GWC2W9ugmKqhhMDc4DPteBpWYE2JAD1CVw1bhpne3peWW",
  "key30": "354XBpe7sofjGP2rr5AjCTMsVJFBqafMh1zRpm4Z359qdRXcWVcLRSf6rpdwcDPFzCPEL5Sgk659t7ZALCfU9Qy5",
  "key31": "3Rs34jRRPZL4nYKJiTG1vdrYFhKr5mMKHj262NiBEGzSmnMMP2onqTTLKWitmhubg9fTGA5htAkbMt6JzuzkHEwA",
  "key32": "dW64FntJjvnYvnWiR5DY9zeByZT6GVCVg2Bk3n7kQ9X6hFLfvzk6Hyb8c8w2XotjirJp9v1Xy3TP7E5FKPTDePr",
  "key33": "4HteF2tqti1sa6KWmmbd3rSom6kD8PT23ijXB8XgwkvLtAmUD6nsuFV2iTFybjmgJCw1oZEbEdjaiRsSFLpwEq78",
  "key34": "wy4a1owPg4gWbyG8AwigcfhTex3jrzfKnH74sFwoC5BcgULeNfotFoLakMdeb65NsvzutvRwzN6WrfZne8xB3a1",
  "key35": "43FQuae2pBycxrXtyFXvx6gs36Po8DGrKYnttYNwpCbhYyqJT2SPGF9qmyBEH7UKkeoVTWxBTzYKmhd7861nvKKH",
  "key36": "5orWWD9v1jJx51xbCBrDQ4opodk9FZWHM372TPMURBBhhoheYJXcyeDtakaTiM86dL4o6EDPsCitU38tmYLjpPb6",
  "key37": "TsMPyJe6LAbETzpTZGcomiRtPEKn1ZVTovPqMnhuEEcuuzoCvE53F4H5rGgNSyb8UJJ1Zdxh9PSQf2DqGf2B4Yn",
  "key38": "x1ehcr8i1PSNoaTVpdHLQu3dHB7sDWWBzS8WhbgcuVFeA1rKucUtrGqt5x6aQJeQWspeFKrxMcati2R1mpN6yV9",
  "key39": "G138jRSfw38S1jYQwzbQhZsPAKrdqkA9P4jJZNuHxbTbMmjqLD7dhPJm47zjz7zja8SeU1Tj5PTXo5bBSTpvmfT",
  "key40": "UtbXMWB14gZDtzb6ArfZac61jyaVYdFVR4t5m78TT1JQg7U2a1SvoXDeeKeXDKz6kHshikaoLCmooxTirkmRzDN"
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
