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
    "23tDMv4YJZtm2evDCEP4L4nQKNqBLCKdBXVSFRB3pBNfnXtvUixZTdChwN4VsXjNHjM4FtRDXw2xDfM71Fu2e7ty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pa5ehJJ6g6Tf7fBck9DtFXjauL1tPGmtWDBhKvcwipqjyZWdZEK8gebwZwLTt9YmtUgPzHA2yhFJHMMtrbp6rBj",
  "key1": "2xKDLmsh2DpFishpHheCeLj8W4XQTW42mhapwJ5imZpbTSnKYy3kykQ4ce2vraRszXidUzQW8nifWThJAxiG9Vsr",
  "key2": "47seqVNHp4ANQQTEMMMEo6fCXJfL9uY7YfEwBzb3Y3YdUPP7WucPUFhJwe4oAzYibcR3kA6Me5hYcDTcKNRZZu9V",
  "key3": "3JkLR9noWVY7CiaK9SvrQ8rB9duCMfNbMArnkwVp7UTm1WDAhHXpMSqpZkojC5YKRum9X7wKH8qNgxo7ZfUSRXeE",
  "key4": "43MnkpVXPsZ3ngwewmd3fnA3A2jShZDcnQw72XXquwcBeguPETrJ2xHk9JDwqiNkzTjJWAJf1HT6MfCUB6jivxyr",
  "key5": "fdN2SZss5LvFasyv8VL7U6vgXicdSDAVB1pb4VQmYzPNPG9qTfiCZNPYknhC39XCCA7P2z9TgzU61tPexCCVYcH",
  "key6": "4t2t2kywFUDX24LKsKBwgr8qHynCZyfGLEUMQU8Vp3dNjvB6DbZJUTup11cuAqzuNjfb4sP5kMpsbhGJvtYNPUov",
  "key7": "44EMs2yQPVZgnGJ8xg2PAAf5oruSSniuitxsqNvAqJ95DGtEVvvvW4G2pgrZ7m3xsHeyhezyUYfZjWG4kBQBk6AL",
  "key8": "2HCdjNLcd8bACkku9Xc3xPMR3qdT5pPBqhzTewbs4ZJtEscEJFag5nzrw9v61Aa6MtzBi2UipoNUv8cDFbUytoT",
  "key9": "3HA4YKkB4xzvEn9aLnVmnn13kReGNWn47cRJfsB5PEuWyoRez27DaM51Gxr2K4MSoSvWyvPt1CHWPjk1p65poJPL",
  "key10": "2umsYt9CbYMrGcrQqDBDeDiiq79Cswxs8WBEF6vBpGdQRmmpY7KsHdHxkJ5z82EnJbnDtNLyBRwLVEidf4hXnxj9",
  "key11": "5UzCVHfRNJ5sNc6B2eF9WyMTsyAoF2HpjtmR6TvDSypoQ4sFxL1eB7BGHFVcxcnHEEMCqMw6HgHuwqV13t1MDqaP",
  "key12": "dvsNLCEgCrSBPhuoQDhMxB9hwYjNqQodcC1KqnpaBB6Dn5tcUpuPJsipSUyPy6tE8VhPHctE393XJcKdyzyuwRE",
  "key13": "4VyB8UGKx3RqAiy8JY3vVYU7vJE2C1S8bvS517Gh9B7RNqfzYtPH2R9i58oa2FG57x8GrEHcad9HNrZWFkNQRJra",
  "key14": "4HGsqxSKEH5D1Vw9PE7t5wwK7593NF53qiVsvn2BdzCDCEqiHjYEBSw9KxDJ7KFKA877nqE82EZGSqa4qxZAGYyZ",
  "key15": "62H7YdV9XGYZ1WUf7wetXJDXjsGU6PEA3AYsU6CwsvdVdXdmgXeMR1P33zviPsDgT8PfE9uBLKAsvH81Nqtc6Bde",
  "key16": "4B7w2BPh4dvF3vwsb3SvrqojNTjN9kvarBtB8uzhVkYda2UDjibGt5yJqRUGCBHKqR3fCBHYdpPnowbsEKzLJRZp",
  "key17": "63wRh9mZjkRdJCUUbjfYD1CQVBNMC72k7mwwknr3NYvLEXwWPv2uV4hf7G2ZMBGGw5x1LHiHzPVqZhrvNgi3vt22",
  "key18": "5gUsQ1UKJyjrxhGQLicazW3Sw4gvWsHyKjSiNSgvrP9ZGjWwXx1C25rAQDyE3aBRuhkkU1Ga4ydzArULfp7G1rs7",
  "key19": "4fPAXx4xQBtFPEQSAZdBGDL3499EX4CA2Agb23NVeBHzhygrK3DcPZrxbk2rQL3FsAJo3GQGgbqwquK1c5RqCrGP",
  "key20": "bp6XwSdhQAwPofooZUMSwQxezkhQF9byUAUpGwLBdoLcn88aKdkerCnk5mbwxLX6QCr7yANuQmMGPXxLorUwSEd",
  "key21": "38yKTLgnNSjyLJPT61bTwrqEKe2YE1JcDhmPhww3DkzNabHZDPdJ7fCXs12A141uTCRj9PVx44YuNQpoW2kvKk7n",
  "key22": "2YCNx9phvHHFa2ktqjHD3RrxQK3hKJTZA5GzktprtVNWYyCMTpfphjvPpT33A2DVbY3ActXtzt3SGr9VdD8it5z4",
  "key23": "v7HTqruZnCSuaMDry4wkpS4vsL6Z5RZzk5KnD63bh5T3harH6jE1edxGaHq5YTAQQrhT6A7hdcK74oyZbZx2SBg",
  "key24": "5h1FKKs5Y59U6pErcss2nivkWXsRb9SwwvmNtkyBCai4aprjPXNGggKyszLhna7ZDzbkPm3odjBJvQN8kTrUacNy",
  "key25": "5z75Fma9sKZPcAvRU4HLYTvCmtA3X5qjDMERVySEHu5fLc9RcuijjS1SE8e3pZKmZZWyg7JH8DHnrV4xyd9DBSCy",
  "key26": "5tAzHkEC7KBcRvzJ4n8F8Zop8KmWw1eDdvzKE9uyg8PPmEnf6nATZmzA8vQVXk6PJg3ZaWjfDqciikRsv4etuiDn",
  "key27": "3GLeCGhe1D821cM7Z8uQdw4gXh9tJmXAKrhxdHh2BE3ymRSr8E4gH53KJphtM6dahL4D5AeX4uj3iZTN8LEDcMK3",
  "key28": "3bvjE1jksfmHAH4KW2NEPPxAFyU4NsWcgudkMv7CzFR7LQBsfSp1yaEcDPZ5ivPQgQ99F8L1gBm2fjhv8p9igR7j",
  "key29": "61MF4M9jCjmxd2HewdWNdszMLXjTZkwQBM1pe12AN1eo9VpfafYYHFpGmRnEMNoGZUtygPVNK42iw1T5zC5iYL1J",
  "key30": "3V5tgNKVBFrqyVVbprKiC8ULuwzGz8E4WLrbcjzE2GWwd9LSTFsBKZr2XfFRqyWod7Y8sG6JBbji2sm7xNDHJktR",
  "key31": "4ct7sv8eKzzKF6sktxBDnzdQTeUspg2aHBgo6fFgPAbU7RirKUPomSEo6rtje5rXtwGrDDruy3T6rDrZGQwsVMX9",
  "key32": "4HLqAaZ79S71nPxQJJCF1xn8VqKYtpTeeb7XXtMDfVB6pDK9D3ckvuknLvJqeS9DoE4yU94MKTuStCDL3b7aJpsv",
  "key33": "2kyS7icKxNzYUb24g51m2eyKK5sDPPUub1qh3uLGwn5gTbWE4rmywrNFVHAu5v4T7wmqMbk4HVSDmNRTanYYMk74",
  "key34": "5K2p1zSHZ2V22sYZfGxHdT4wNfnRdJGhz3PGt7tirARdbkTDfTgJPkZjG7mm4nVGCWGAbjpc7VMbsN65o3oQHaqz",
  "key35": "5XE6edRwmzmpy5ms6szZK6Vf6vbS9wdjNmbwMcg1MXyrvBCymhyRGokpvyDP8ysmvDcUpU2tarb5FamotBhnMrn2",
  "key36": "56nxofudJoRQnnFH9cgnJqXRqxm8GGwamjEwb4gwgJbQAuaKo2FSNZ3vCXXKvjb7UcHMYVhUEjBXNd78hVN596a8"
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
