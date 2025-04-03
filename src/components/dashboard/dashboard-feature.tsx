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
    "veH1FeBx2UzhpqmtjtucXMLJgKLcwUzMMcj8EhXVFQtVaSTY2HUNhjmZcCaCLaPgPFbJ9EW6GM1z94QCH2nhqPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ryxKxrtaeCNM5Xo4NrDTk6PciwhXJJDSKFzkM4kAbjuGsGA4mcyZEHJZ7CMaLysqLyt2gvFZxYHAZ4KZt851XTv",
  "key1": "38jrBU9vBCGv9bZbHXYE7rrpQQhUsfBQXJyhafuyecvNFsf1g6w8mF7jEwitWxJByHNdfec1bDHbzpvoqQQ81KGM",
  "key2": "5QCrc7aqRMHA6Z5vkgTGZZfcNmKt31EKrRRfh9i4vBJspq4CV6sfpwUWWtRmZxgQu8SzLM7AVjU3GQdGWpDcdgLY",
  "key3": "4nyW8SSHCCXJife7LtdMkucgzMU3sv1j4bDkocQhUKjHCSnw8xeoH3yRNZ2cRF6jb78cbo6EJPJL5Pqm3Kjf5DAD",
  "key4": "5VxTAcjxKF2kEWDRV2agaPhtpuGUAUq6sGfqY9emVYVyFTXVPuHS9JXd5xhwbmWqQrTApA8jZzDSW2J6LQoeHVhf",
  "key5": "5urFi8wzJqE6mvsxd8usnSEwrFyKH58PZxwUaybf9y6JYsaVxojo9MGghcEpBgtXKwzNWmozRTQUMKbTXb4hPEUp",
  "key6": "5c3W5sWL74LfLW8txpT4m32AhJpBxzHZVVGd83muXTauN3i1fdUkaAeGf3gqmEuYwqAdMsLn2bDp4HmMpS8kFMmc",
  "key7": "5mMP5Q9KPRT4HRiKZoMbXkmHk3y7rSS5RF9jb7ktcPuQ9YkCnFK4rBc3zWFA7URUztNtG1UA7nPUJfynRNFGMH1J",
  "key8": "X1YwafyN9j24PC1W2kThHPRrPSScJCq47w3ijfDJo7ePGjBP94e5x9Y53AuyGGKr9y2SBBiPRptSX8sNg8fr6JA",
  "key9": "2cqdAEH4N7AeoSVY4mB8eHHSu9bytGdEw8n7NCDYS2SoGQFE1ycpUT9bjVHNCpxgGWVNJdoftkXJLhozaWjnhwJG",
  "key10": "4Cwiv4Yo61C2vrFpx1gNKXwShEWTSw6shQMojpvtQYxetFzfkTxVaEW1tbnkSnykdt4dDYuvaQa77b7z3hjS2Wqu",
  "key11": "4x7SRtCP4bfoSVacukjwDaesWDsiZUYXCCKF74sNRPaKAckTTVwpi3nNhR2EZiBQq936NYQ7TpjALoCmaEhjAe31",
  "key12": "HpTz2qF1RYsy3HVCbMPWUkYbPi7BArZNEDGT2FxJ4WUrx1yzmZL8zHfif4M5mSsHpyFjCoENNiagaKCbeTyec7Z",
  "key13": "Ku2ZE2GDwL5Vu3RnGq81nRqXkJHkGrM2oaDFEYLu8yLx5JRRwERVhWfGrdNByk2cUSejmduhs1fPmotYSFJDyEy",
  "key14": "3pmVg5Jrboie726VZb4jFPgU8r6GbJsAvMiJESXGR1YiHrWmdNA92k1bk6Fev2teGpcRKddVphgyFtpSvHpPfjjV",
  "key15": "3MtUzmhfXW4FAiNpf4LPjpJcbSwcHp37KKbnCX5PAP26Gp6TuystLth3xpQir1wYQfH7DVwW9JpANRXQpVbLEmu6",
  "key16": "3ZtwRQJyYL7rRnFresDnDfr1kidQjK3x61N5nLwYzgTaENwC7DwvW4os79BMz7bboGGDGsr4ttZ62cK6iF9hv7cD",
  "key17": "2TNJsmpPPx77VvTccEwgDwZwJZpgye51bchYHqY8eE1v8swWk69uh3oe4hatVzeVY6PVaEe8TeuETJeZ8uajXCea",
  "key18": "4D3823sD6JAbUmFrZ5STaPY1CBykcrcJLT3xTBJPbE6vqstJtacHWDDNCgaXZWPG379LAWEpJWyuggDkM4ytGfpe",
  "key19": "57eq8usprbRqNaRJ5GEQ3Fp7VzfinEnM5n1XRppbrHZ7L2p5qJ8tF8m54Sa2B2NRhZPa1wn21Kd85gAMVJyErmg2",
  "key20": "32MaBiy7WEjeoNDH9gjwQMZ9Ghr5XhXzFsJfj7KLCgoKKP3vhsuSruH3ocyL4mRAuXG3xmHedk4BdNe4iZbWVXhZ",
  "key21": "5iZn7WHaj2gS8YsJ514AmyLox81R9SyELHr5Pw64pCRAzP1RM9h9LM95idB5FnV33fdCQVVyibkDtGNHNCuprCAK",
  "key22": "3QxZaZBvkJNDsaDH9MT3NafZKAVvT5Wt9Rtx3ZpuDAE9dNBmvCrcj3494e6K8s5zdW7kgaECzwhe3ctpmF59rS2K",
  "key23": "2dfZCDQdZ9UtwYZ71Lm4iWHvXjjDNVkSv57TP8YV8T49EDsRSLxSiew3yeHRHJB2Hamwuz5TxMgCBZ4yr6Va2zsn",
  "key24": "47of3fBSinLojzMapiDrvg3ChpXzfdwjg7EJP6HPNvYXLtfKu5qYwKaPmUWuaJ14RNUdENmEC9Ptuh589dTfHEBv",
  "key25": "4wEnQM7h5NcchdNS7ucWdZFgnWubGY6b92b6qm16h2tSzZQc7gKpzQcNina68Tdq2vJzqhwtHy5PTg3Y5aTBqyBu",
  "key26": "Uvx1FxMch5ZchT6AZSprbVRPDTG7xWqYyrHsK6RQh27SCbWLDWhYJbZ6uAJMuW44o4sBAZu1HT2udfKCjhEUC3o",
  "key27": "nF8Y4cdtc7tSiMyxaRedLQxVjDfX7H7YjxM5wz2cHKLZnFS2iDKBn5a64yS54rxmRhmxPXV8HL4PvjVuS3d5zCi",
  "key28": "LjXFVchAanr25rYrkLATCwJuVn8avgXVdkrPJKcuTdNcrLkeYuzuSZYXWPVbyBAwMvTX3Rsxyqz8kg3VVUB1yTr",
  "key29": "2oubA4gSUvqteuT1kieY4wRwDK5RQEcRDC89XUhvg9yPwN3e5GFkwvG2JqVBc9a46Bh6ygTHjg766cH1ztEL3VZ6",
  "key30": "k9qH44RtzeqRr5ycuddufJFdGnnqYedJf7ziJDRw8FG1kaPHj469j3zsVGFLr6mUwexhTD99jSs1EXWanBFSMTV",
  "key31": "1hEsFyaq1e7fscP7DRum3AwKYqp4kKpH68GotMmx8ekit4xLaaRetjQBC9JqnXpCJvD2oee2bJu5FqQWdQzWVba",
  "key32": "4tYxCLT4dYpGfdVtMn3emuzkf86YoPEw8PqQGnA1d1LFxTXfRUSqsZ6XHowSCpEGrr7sTNoq6U3aLb3Q3LQ5bRD1",
  "key33": "RYt9N1geaTHwKB6WoH8Nn4cyb9SeFaZPVRxwCx5bG4YTKAqZSXVaCuYjZZoyWSzawp7bviEsxaCwHYZLhdZUxUD",
  "key34": "Ea3VG1qURTLKWgcp1W3aLBZuiVNVGGaVXTTFCjcfyhJ2S9bphGW8MYat7eeKic7EDUZAsk8mgp8YvEVhzsJMnVt",
  "key35": "4jhNMJm9u7wd22QYh5fi96danF36gQV5vbaX3ZE1tTU8Fw7R8jknnxyqqiv1LBufKDheyFD1MVXumq5QTy4vs2kp",
  "key36": "52HiTTH1qvpjmSo1VuTsjWQqVYfsAu5TJy2wWSwtw1Jh5NEMdk51JAUbFeokpBsg31Ji9GmR4UDAyJS94hPxXKtu",
  "key37": "H6MXLEJtj3GVz2qpTPRRBjnnnd6y2vvvTgJ6Bpvw5pCbu4yTeFWFA1GTNjkJidE3X6N75yYjEhoNPDRzPRabymk",
  "key38": "5wGjovEVQ75FUyRKW8Wr5ftjZcXnoBiTu8ZGvAg819ZpC11ak5cTLPj36heJvsdCosD2VyHsutXEi9uyLVJoHPAG",
  "key39": "5HVCm47ZNdJtFnrSmfqcNpUPsQ22NJKMCfoMsmV76E663qRpZC71Na1Pc6aP9Fn7wnFHXKhidRVpkKN49RStYBgS",
  "key40": "5FjQhHR8viuhq5CaknAStC1TiaJ2akrgF4WE8ED5yG1Gkn4uX4WkU8esEVF2dXZfZfdpaD6Cxtb456xPsLstQcdV",
  "key41": "2WEcwyFRoLBWGGEWz9d9UVUv7nhbN94k2rxCpbEf4mjTCK4NbnJeJq9eUQkH51ebVqDfQuUQkBPs99tJEtSRjH9P",
  "key42": "25ouunw6BLsDupN4FniSEUPCEq3DjhD6FidJZgq6qvXffpsgVGEcsJMR9PXuwf4dDFnJAbR34s87ema4cbSS9NZC",
  "key43": "5sctuqXWGhZ6dUm6tXfG2s8SBm4VYaNfyuKGFNaePAK1PC2bQKS2FucYveAJE8nDr3ajPazBXauMPhyHs3mFxRVH",
  "key44": "YD9GXteovvP62TDTKbnXEaiQjWaXY8gb4xr68UYzDc9cEnC7o6xjDak42dSFDNpnKhicnmv2pWm8SQ2ZEMU6WAv",
  "key45": "4ZM2q7o8aaKoXZWt17Y8bP2sDe6FR5Dmwzs4A2Y4h42Sfyk3J12A2vWkQebQ6EcP32xY8nUfHsktuP4UVTRo7YpQ"
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
