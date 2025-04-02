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
    "3vjQ2aZpQbtSgpoFYmfDzqU7kTkUfuDEMWcfaAYPo8qQGiSzfVDetTsz5SvaEyWZEd6PHdKymyqysBhWuKJcY8nA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wnPA9hPgHDtho9NAbP4kt8aoFuhyws6tHfnws4Voz4ZZzTmpw9VzfL64k8GnUpi5iaEruU46giWCGpkDgKjWRC9",
  "key1": "5s8XCseW3RTHgSZCeeZ4niYo79tXee26H63kegQHeXwR2pgdvREoevLR7x3WoHf3WKZuBFsfmjMBam3bTt65Rn38",
  "key2": "67GiEY5UAZv3uG73jK1Y1aratpj59PdfhyPfrmHkrtz1jGLy3971nZkh2dYtMcUhHF8iDDAma78EqgGT5eSyYb8X",
  "key3": "2CCcyP1xgVREjhzvXf1LHBosVnGVeouyUCtyrqHK6ba8BdHFh6uCGxDGFqsgd6UaAbToFaYNSiRUdZszBcSTejRU",
  "key4": "3g7SnfhW3JDCWztwYYHfhTnV5GGoFmya3nSjdS8PZrKigpYoDZzeUkNwkBQ9s44cAxxbr93CaqitMhczTSR2VBZq",
  "key5": "5aFEiPVf2MDhyaSATnCny9UEyzEn1XmMYg6XWegAgM2xrUY6Sq84ANRXBqYzndSwNBqtiWwVBvyhc2FuszpchEZd",
  "key6": "3rZuBVBknzdDigKfYtC6ZLSN9oka8P1WqRa8DQV1YXnjKQTaWSg73j8THbe3Cm89ScxuiMcy85EQr2CkdQ5qGET8",
  "key7": "QT3NmCNPmDxJvtQCZAuRCroJafNUJdXRbKT535shmvdHAHsV7bJvH41ZeC7xKnsARZPDsPLXLynadpGge7bSRwt",
  "key8": "Z8qmGjyVJ9vYNFhcXLvyJp4DhhAouXd2fPXTaRwvavyZ3xmEtEVPpmsizPsQ5vKKrTrCXiKHzdzBmmB5HccMSeV",
  "key9": "2i1PuppF3Bz7TcwGPUBZuwnFZyGhxtJTVM9b7YL2hipoAV85cvwgdo7Cxx23gpCEUCXLnYj9niV5F7TrqUB8Vmbi",
  "key10": "2KqD6nUzsSSGYLASVoiKbw7z4SPGV9fALnPufH1iSpYeSMAru1guL4qwndvTYZqq37Fsz3yZRrxXFpFvN9fov1gE",
  "key11": "2CnwyPsSUVvWwdRd5AivrTeebdxyAyeYsRwAk5JJQJ3ScvyWobvs7JRWqsZ82k93qHdKdyqUSjuaNxpeWnz3N67k",
  "key12": "484i6KPU3YtycPapLVK8GzoN4fgUs3QPxjW1RmbZfn8SkHAhJUjLAkuGEC6sBM9SNXb74wesmuhzuDzTMSND2QiP",
  "key13": "vJrchD2YAxtF2aDgv29yVJCAjteschGbAamM4TEm8Rgyfzdg2ks6ha7TrsbGC4STCZETXydKEQ2phgMaf9CjVLv",
  "key14": "icuyQNtGsTDSNF7CMyH2aeShdbWyhwaybLHTm8NCUkEKAfQykTQCq8H4ovsjKrtGL1qKPewvXFxdChFvrTWzLuk",
  "key15": "34BZoYaK8pmyD1Thr2UmrDEet5MkJaHSoAmaCeSgg5qgPVcS87g9Y5CAU7an1dbvuaJrhfvBEsCvWsVSPYx6xmD5",
  "key16": "51TQf5oMYfuzhaQWCmFkHNUywGkQEbv4MCF2Ss7r6QBPifsCfe1eh3AyfVhkea5mVgdyPxm8d5xWwdMvQhjhSWtd",
  "key17": "27MpMBdQQfrnh38kLvkMYS9XRU4hPM1WHSGwGLi3XZLpX7AtmPNosZAdk44Vsjn9K79f5FKuvSyUrLmKjbKAmigL",
  "key18": "5Gu6io9811V25T56SBdMmxwPBV8zcpwwnd2oTaEq7QZuDaobUSXSXFsHQi7AkYCikJDJPYUvtDSZ2fcq1srvpR1j",
  "key19": "4JNuKS2KxkRBLDMhk4Aru82BPHvMmFDfj5gwygW2GNQ55niWrfWiW29zZSj7Jvc6Uhs5nkYMYW76irQiU4Z9yfgx",
  "key20": "2ufHoDCMJrkckAMC8nz6FDxaa5TjU9bcAM8a4hvjw6joF8wfPwMX3KFMDyxS2wgAs3zGApHV3biYRsWVeg16fD9c",
  "key21": "3SZFfiLUMmDckSecjEUwMddkL2Yvta4Q2GPAFraTuaieahfYEYFsEoSiw13JyNakLRPCkdEgJwUJTFMprcne4R4j",
  "key22": "5z6gquP46ktTb9UTjHVUHFY3jTp6jLAp3qxgw2u7mMApEmpR6bSm1sWE3eTqwwchaxLmqRaiypuk2EEH6ySfXUHb",
  "key23": "f4ZAWwfM57UZosAAya5DpBNbkcHxJpdDq9RFaGVck2ofDLwWiS5RxZkbDtFCPSfWkJtBWCTpTtajfVyJFXrNLcA",
  "key24": "5Wpk3kJDzJSyEvaqCTSEAtgQLRT4QLW1LD9vU43WHfAZ5f9mjdkGRuycJsWeRCxvWRpBbEXPR4ouXPbXYdR9XEsj",
  "key25": "NLgbEp5CRETcAtYRVqHdMLc3PB4Q9p8KL3k8AVHtnEVY3BJn5RxvDSZVhdGpPTisyc6JCgzmiw5vn3x69n8PeJE",
  "key26": "aat4oXsf6oS2Q6978Qcigma83jz6TibNiynCgtjJ8jvAFnmFTv6mMF8YEErjSVraZFVzmSGZjbPwnhsdjBW1vPa",
  "key27": "a9PxGCg5ZrWtwbU4aGgptg1od6K1BSV2KYvybhJDbxUmpKixqnhiN5WAGDC3vfWoZUvVfX5NUMS8b6dKWCywpN1",
  "key28": "tZk9mf7SZcFpdarT97QHdNogC38Y7hXFLoFvNu15JRGg1cAohPhRDNNpcRaqrSK5fF5HSz7f5HuMicadbu6yTw3",
  "key29": "2kywCmDB7ErBhEQe3gs9unqiHB6rg1wueTovLckrC3AsgrvFM7MdaCT95kHnL2vwDb7EJ9jH1TMzUC8Fd9m9HwsP",
  "key30": "22P2aRsSR6rkH2NqPJARzX32Z9cmJSZ2A7yTdkXToDTDbdAEz8NTPVoKphkzTNMGCbekAggoc3oRkscjGp2FnXjj",
  "key31": "9k96WTsmearmVRCiZVvtGHELK6SDtLeTxzRQoH8GLrach7aM1iadzk8Pz9vVVMcpVLRTuH8RszKM9JQwazYBgfR",
  "key32": "iZQfJrhBYRXfrVxUdG7ZwR61EWcd3Ey6PWHKsfYcAg4n3XgW9ovdHGMboTk4TvJk6WPGkJCZPeprioWh7J7GVWf",
  "key33": "3eKxB31gXbLVUQTSCTnrgM8CnSc696xcTpqr1xmCUNQCNB3xswgmcTd8EMyi75iEh75WhdNbutaU1N8pFyqXNnPj",
  "key34": "33YkjSDkY7XkUfX8nda6YbTTPXm22uuzWgQVAtPwJBBeiJaHawzmC63b4SJsPveAHBrYJdrfqHW4VaVmTjDTVAnm",
  "key35": "5DPTPhJnFep3mZFGVaJzzN6yEBW8o52aVnmvDJ2zupRFoRC72onoxSfWegBHjyPvnnebJfTGHb9obfEaoDAbpJPM",
  "key36": "5RnBmNs4H8Ptm8wMCcHuFcLeqe4WmTU5sv9rdFpPRgPK5wgpaptv2TzjwsBXNEeEUVDVGh6XcsWmZjjWHRresnHg",
  "key37": "4BnUrmkjfrQefppoiMwCu2LskQPjktvg7zQnHrJTRpRtG3K6J9m8SzQaaybdpKTVhCyXKooz5nV3rLr3v5vpAo4A",
  "key38": "e1jFHwaSGKzjFkkWxXSW6pfJdABQfZ2SuaAQoUC3UTSx4RVXZ11W3mM9wQX4di6EdQUVNTrwmcmw7RccMXBHux9",
  "key39": "2FGQoxo5FJMS1BLzR7zgnZXCDYTfJgU5QEwFsnKZ6jEm2WC47bVsPQ1ioiA3Y3dbNWX4fCu9CJnui2vSWHrFtrGM"
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
