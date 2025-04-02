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
    "23qLCGMEGYYPNCyh6hpapuLFRYgGLWZSuTQjzFZy3KQab7o1odGBL3wYG3shhfeAqxzokrPhQPHYamshTw45o6o9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kUG2xWkMJXhzi812XxeRyTJ7kXoF8NNXWqonuF71aZvWhYcixR5DHUANf9RokDrxqXjYgE9cDNfzzfnbvPSzuBT",
  "key1": "5j6HLNctTpBkqimfCzNeeBWefWzwQg4ULxZueJUvvbdznokTkwDmMpju4YVkvN22u5eHGNc4N4TTQGvUCopKkp2W",
  "key2": "36kB41LndGKc4AgHJs82XgBsVyTy4Sskz4c9RQRqc5zZuiDRKd1DeG5kAHMJRrPhE5CRbZ2rLPrytwTBzvMj26VL",
  "key3": "f49fwgbRoFqWT8qBJyTf2V81ZjcHzJEje6k7ms9oG6PDRCssWtB6UDYyh587WtSvgVquHTHBUsdzqLubEmzwL2B",
  "key4": "5cxJKKt7NJiHuwi1dek7f2edrmNDcjS4Vnz6in2fTQhHqQnPAcEH5y283NTb1DW426m3c4dNUCHkTX2yKV8rMUXx",
  "key5": "66azXrMmRsYDuAw3EVvrzYr4wSFaYhCE2p4Mu1WSJucU3u3vRatSEpFTnasLW8euyN9VuGGtguWL1k9gxN6ySXcH",
  "key6": "2CuNmgkxtGKCHpvK4SBQrXkSPxYi3HHm9dtcHxGKv67CQTSEeUM5gxthidybZpaa8MVVBPW7NQbn2vUNoocLuWRF",
  "key7": "2QTL38YgTuYfKCcYd63LQGqzjRcZ8Kj5Ptqt1kpdKgBWDTbvadSpyA1Eitg2Pwsh6JnES7mXrivThHCU7ReUCHDY",
  "key8": "24Bnz4w1HfqyEEHM6UR6hctzK1htms6Rpin6xfWsrbUt67AQiyLz21EZTLfpMoWYUozRAQXmsHFqrBXqi29k2pbY",
  "key9": "pfzJJkVc7d8Zum1x3hG2icNqaHCqwYUm8FvHvoycK4GMTz9d2AgkjMpaiADo3YZhxFrqAqVRWhNVSm86xj8gFQe",
  "key10": "4XCXqYjyZmTDXqa63NafNhRSzgKJoqAGtzXLHBydirodcroX5RA1Bb4CBzo1Q5GDsidux6gicF19QKbaefSZ8rys",
  "key11": "2ZtmX3J3aUqLV2fAeHVs217aNqCJNpp8NHBCqEnvfkWyR4CAiD4NPjqwiFsy2TeeNy52TzhTWfcTAih4zZeGjJSN",
  "key12": "2QYUbSz2S36deKBfZ7ewF56eoW8JBcrtSsFHHKpWrRg3AKTHoMEqCeJ1tuBqKbqvNQ3giNChEB672v2kVwJVbR54",
  "key13": "wV6ULLsyuu5yVS1XFaM2yxBx6F61gWDjUp8b3cbMtj9MWps1g8C3hzoE41yBs7MLtPLAocPmQXRAuNFDQpDRYJq",
  "key14": "5G42NLAUk8eR2vPtrYUuBUizV5ZH6GDJQqJLPiFkgCnBuPrkNDCRLoKSTgVfz6MuMkRTBR36sEv5YgpbZ1B665Ka",
  "key15": "3eSjkDngTsWcoPfGEzVU2BCK8C3qxPbjRuqXztby7b7abupxgWuZA8cHexLUnWCmNqu369sLYsr6W8mReYeNPQGb",
  "key16": "2fkmcRVVVqakq5PYTRhz4znEhA3zmHcTJmDrJWh75Zjp1XGzdy85obk7RDSgzacSyo74id8gg4CYWBzSApCaG2PZ",
  "key17": "ZssikZpTcUN73VfgCDuTcwnMFwQuUV4bX2rfm9UV8iMULX2NMoAjtjjzyzn7VKCJnNKEaoPCYe4vNRotFuUFpbY",
  "key18": "2wyVjP9mo9pU4t5Av6aXorfvHuEkzBkitNE99TehH9v87HwAKFwwTTQppggQ2fA5aLMTWXdtAWxh9Fi13zmkg89L",
  "key19": "2thVPWTmNUKVAsNTvov4JjhnKCD1oLruFYyGHFKWsKYhurxby36f1SAoKdknWbT8Mx7mGYdbtGwFYAEFcrTutLkt",
  "key20": "3EFooDZrbZ3VuykSY1MzRBPD5LP8Cexy9pWbg9gU28f5ufArGs5GyiPDGWLxMTLT9cxep6e231guP5gTp5DMzdo8",
  "key21": "5pQ1fM1Wq17exESzZkAbjRhX63EEYKuDHdKD2br7x9bG8XMePBwgcGYgYtdjdUEbikJtFuPc7Lj8iqBVZmx3HYdF",
  "key22": "2SCGGkkQVoHKQc9awx4bNVX6ac6sCNDBtjJCeZK7iMAY8F1EM3eGWM4xGUSHDtMAX6MHZNrseqyMhJehS7HssU2U",
  "key23": "5E4mHWZiy13qetXzeqZvMrzCxoSWczbBuuAcAWwpZwFYrSvFn4Hy63w8jPpSQbKMvECucDGfafTodfJPGYanTs5Q",
  "key24": "2dQuz8e8ita6kdcSNzZSRkf1NffaymLF2mZFu9MtGGAYqLSV14A8pMhuKmX153t7gtBzBDwgzy2iKAWURcavuGRe",
  "key25": "2twnZrCwxXo7o4DL2pvmShkEkcciu3nFa4kERFTHxqeWUtrKU8JUMHom137LkGcaAqvWsdM6CiZ1LDc7aGkvWYxc",
  "key26": "3mHzpF6EPNQNoamZtH2oaZqQ9ENB8bdKc87Vr8MgzBcDkh9KXXRDwG7n42Z4iGqsjAkkMk8HvtEMQLRc3gffqGZ5",
  "key27": "5G81R6ZkuJ81oE62RWsTqbpx22sVDarQCdxvAmdFkK9y6Zp8CrvuAWyCde3fFR1sq79RMAwdXP8ZdaxaTLByR2kS",
  "key28": "ktykVMCkUf1C4KCznwqPLmotT9CgfYcmx1kq5gCCt5StcXKvCs5R6SMiCfNszMf1JcFB7QjZiquSA8qi9NzfMf5",
  "key29": "2QabDgmdrgxaPtafBueheVQnnKdNzoxJ7E2cwuhzMYEEfQEiiynMogya98Spxp6NKtdimWbarxVPhw7NrQkCMMzW",
  "key30": "JnHoa4A8fwJmepQcDhHo6QvCjSTbX1TM6h6TXtXKJa3T2um3Gc27t2SPUmTavqT2LyxKdX3iYCbh4tRKWP9zj2a",
  "key31": "45fUX2bqGuRXZo3w5TtArthTeJa4RUhtmann47E4jWH1gvkVsc1LAvPmS4HBRq6cZrjir52xNyzdAzBxdSrxEvep",
  "key32": "3qAmQxf8mh5hT7RkdFSMRxW9zm3W5FdzjUhLjcMzAEQMx9medg6jScWT2tRrxK31P6HHhGs17DKABK8s8V9mKRJ",
  "key33": "2ZYJ7Nz89nuXvSNKm5S6sWLZWajasbV9pRfdy5v8KyNjKYd8gDCihFoxDqbNHXoJ4dJ1udYKWiZ8k8nSgFnvnDff",
  "key34": "2AEGvg8yoW2kXEqZU2xBHme6VJprj7Sdu6CCbgfTq8M3iaHKMMUpRykzFJbAkHTn8gPDdG3mhxf62M95pyDLaWAA",
  "key35": "3MxPnXNsbUYDZhmbWp8KdTULDonyShyRJKXG22gjrm3f3hxqsy5k2djT5Seh4LnZcVzyo4ggNvoazLiA7Xe73gca",
  "key36": "DQ64Ve15UoeSYrRuTSYeWp4jihEEMCrcUEpvtH1XvmMPbaEejvZXt8Bwbavn7FouYPeGdwBdwF1mWrnGEp2SKLT"
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
