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
    "2crUmjVKiAaTDYn1SsYmuJzs6gocnRjGvz1XBp6EDaihz8aBZbenJpUNj5GBx85urhzaCS8AgM9vVzeJLBDPjunF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iXXTYHEzooT62R3yxpf9KJYDFNnCqdaeaToarUwJW5aSzham56pu9SekEb4TGHC9icyndjz1CrKgteQWcAHRMmu",
  "key1": "37sHqUxMxt6NhDG9WF925UJD6uFWM3Spt79Sp2XRrXooar47NPM1hXNTdzgQ94hXf7x75ujSX4vkkaswbX9eKxGc",
  "key2": "2a1QFK9WbVwvYVh4m8JKpsmA9NHewKM3JVpTSHC8jLt8TdE15uxisBAEyHfTdbTrCGtakSjsuyP7ZWku2LYHvHg8",
  "key3": "28QxVpxGnjhDSamUKaKv8SLLav6VrkEQB3M3Z8UaCQTdNDYpt7NX6gVFKQzCVXyKboG4H3hBkCv7vUtaResik3YD",
  "key4": "4AfULchKoJd2LAUx4mAwXiTXi8WjFm52Yumw4NBhTZoeJJB2JhsXcaZSs5YCHCu4E8pRFPK1yaMZF4fhEgiQXKdq",
  "key5": "4YDYFogtuW6bkfxE2rQJ5kUbcLA1p8BGcU6n95T577gS48yv42uefn6Z55ArHMycRYw4a5pUWCD7gV6ykeu477Jo",
  "key6": "3BirgHMLiM8Bj9iVi3jqdabLy9ed5dzon8rE6ADrsAJqnAbszjQxY9PqNStQBjbE22pM2jTxUaE1SDz3tbaxP9S5",
  "key7": "5M1Hj5B59usxPZD24vTmWXZyNeZgkfMurBS16pqfPLPNKz5KWv27NnAbFCh2J2GQR2zRskNDAhwxXabMnTjD3WXE",
  "key8": "62FN4y7GxpQJkWLTTcvXH3A72TUfkNpnZxDd9ch4feYz1miDzFy6yCWx2htgtzyAJkLaB9kXt7WrPyvE3dXQfejq",
  "key9": "4827TKj6NLS57PJc7PLYie7xEWtE6BhHbCvLLdsacVKqSdVveS3QHtsQj7qAeVjYtNatqRx8e2FzieUKcjCr6iBV",
  "key10": "393Y1V2YcHxjBUPVgcrQu2nz1MJkS7cTBoZktexLXbuvZ4s7AZxdrZqPj9UbtajiT5pSJrVrQY7VGYFSQwtzVCGQ",
  "key11": "4kr6pgfPMugeyjj1VeVuARYhN6GuDCDhq4K1pDfqKFgyDmnZ3kFSxVDER5cm7L3ETL1ihYkzxHsU4SzNM8juZv4o",
  "key12": "o1BhtLXth4QmfYhEZsRWg7Zsz3qAvNcdDFFMJg6x7Rzi2j9HEt5z9Aea2SnDpbrGxAcVmUEjiSZfonfEKHTwhBt",
  "key13": "4nN8bhBnQBVCCDX2TJdTEdA1KRnC8GJ9d6iZuMvz15fSGmSb9g4EQaXguFxhdEKJ4qVQNcTHK8yZcDwDVR9qUPXY",
  "key14": "358mbyGeFravvdqL9gLRFz3DY3Pw1ieEuxu7sktZZSqH8YEqscuhqUUgsrvXcaB6YUdcD5NVoLgWPptgVjN7EkX3",
  "key15": "4YQL8xA32fHs8BqVfzSF7SzS8rCiiePAQM7xqnk1E4gvHY3hRqcKdGSZSEJvHCmQ7xqDeArg55MxPkZXXrzhFYLZ",
  "key16": "65hgkv32RKQau8mrZp3n4JRJxoSPZPsRa9TAZirSCxUF8oZa14GW4KkBQq54HD5erwkstJVtRuLx81bo1PcyFA9A",
  "key17": "3D1ekVXDU48UdCe8SNmpk6rxFn2ozHCkJexjKzTEaAiSoziurydYpjQBm7iESALnKovFLvbRnfkYoWFKfuKMFMYH",
  "key18": "23BScNZRj3NpLdKUaaSLb7fqkEES7qhkRFMzFgrGjeZucRyHhusVGdjtwa4zGs5gv8rh9jmY69uLyfGD49fnQASh",
  "key19": "4A3EFDpycwRACd6oDToM2jF8W74YHAJmFVyg7TPsAq1bZiLiBkM3UAfnm9TNtePjCxPhDBVJdYHe6Djmkyt19WXy",
  "key20": "3ovYNeHsTjSADBHzjJpYWwav7PChGGg1Xt24913Dqg6oSsZ6RUjRaTRytX3UDaApmxBXB6MkJ1rbBPswJgQXKKJ6",
  "key21": "2fr9aiQDXD8VzJRqshzXUMzPi4GtM5wJgXcmqXDHwXUhUfQrzxEWh4r9yetrTKeoF3qS2syCyQ8K6xTSiRwQvJeQ",
  "key22": "kwXYNLWHUuYUUsopoZmJLgXAaewW5RVPzr1NjyT8ax4rRt2KwYo1vZjpGbtGgjkT2tAqPn8MUeRto2AyHUg3ZgH",
  "key23": "tDTFSF1A1TKgLKguarraJnjLvmd8LWzgcmrkJeZeq9NNsFkRXcMd9RvCNqMeystFaot25bZL72RuCPWLCgZ7XkW",
  "key24": "2oTspUU2RBotVFdQjuRLxmSZWWqRRoh7XVqCwHyTnLNmsMLZsvF3N7p28axx4zXLTKzzipa6ec4ev1NSneqaRbGq",
  "key25": "4DEQujt2Es1PGpWBnwZ1W8B8LPLMGEzuUFo6g6EK9vN3aoCvg12UYDN8sV6DLQTHb6hujx5gDEqAJtK6mGhZLLLN",
  "key26": "5hE6UF6a4Cg37CVD6WRb6c1TZjkR1anoDMBmkEmNNBCnhnPgKU1mwYKoFmD4QCyjZwHMxisE4GJLsdRDattHUEK2",
  "key27": "4rFDCWRAwTB9Py7qQxRi2kk7x1Ap6z3i5mr8EE3GcemteaURxv4fWyth6G1T8nn6wLrcdwjmMd2ZruQzsbNYoCrY",
  "key28": "2bz8XZqQq48nEQcdAQGvAQuMUh3Suf2FFgTUQiPm2zjDzspQhb636Tkfu1ni143XJiHewiazA21LEV63T2znteQP",
  "key29": "5z8KnbbPmt7bd5FqqQBWuDMmAdn4erNEqrkhCpdkDVDULgcMJCNWNi2y6219g7yoJ4KP2W5Zdc1uMsqM1n5sLzX7",
  "key30": "5PPuM1Cef6Yet4nZVYn95zoTwLRwQELr3BDCWPVytpYhNY7w5rTUejA8hwwLwFZBPp11aDHE8ENFBevYcv9tanBj",
  "key31": "SH45dmotHs8dFuaqccjAnXvWHCCviwywEsEREFAYzgVDyzi6zBVhysQQFxFMEK9nSksHqwWYj2x7AmwoYxyUDPM",
  "key32": "Gpi9SVQNkrqmxWZGL2pJwGRFq46VyjzDBbZknqCeeXNH344tbKb7CUoyY3s21J9y8ArkxxWARmJ1RmZZB4KwTTV",
  "key33": "2VWnjh1XyM7gTdWQQbMLoZUUyoPLDkPG6LKV4RUhULXn72dpWhJwXKBC68PBe58FJEPP5kG8jzx6CwSUBjFjaiE5",
  "key34": "3exAMfon35Exh27oT5Uw3yQ3BZzrk8qigFCDVwr5nGve8RnBiAobSDsGqci2dv4LCek5rNhLspK1wFJb5zQKeJwL",
  "key35": "2bFbb92F5keAZAAF6FSTYvJQZmmy5JA57Na2y5RHxz8pTZBVwBzxDnpcgFL3a6s7ELGwYSvJk5v7rcuhrDAU7RYh",
  "key36": "3fwHarMrWJ2EztRZvHVPSb8CncefgKFuTYzxjxnt3eUtouDk1V2WeTBdWXzruiaEVyuqLhhmLf9U7XLXMh3S4vpN",
  "key37": "35GXswZNRYC8Qf546ZRZRLqdMmA3Wmt6pFxqXRtLdr4uijTjHBPa4JHEt8NgXQZqiqzqGjcBd8LcoDif9BRpTAfd",
  "key38": "4bPAQxApN76kjkByiAkPrAXhoPoriU2xtoHUbVWdWFwoB8CLPxpFTr8fF6tsPKLWmAywRCYCSsjLbNvDMgVzzUGw",
  "key39": "5xVPDnAZQ5aT5XNjnYmFzk3kA6GBJFGBh2vBNobXsN3DxixUr43mLQ2gvBPQUknzHtTSPEdc6pTfYGRzfoKaXHM5",
  "key40": "31vAndnRqyRGv3kBApw3F8Cw26tsA5QkRhE6X2Ftitsnkv38fM3VZxAE6SgSaCZS7udiLCQhjxJ94XhoRw81Yiik",
  "key41": "S3NT9oRQPo4owCGzmUQXTnH6w9nXq1BfCR1hbgjMGGeFqKzPp7Yb4NketNEeAR1JsvGAYZXsffMueK926Z4pj5j",
  "key42": "23JHWrwHvY9ijQpzVtJqi21Hhnt3xhfgTbNgJCbdtZJnkbeW7NRaraWUM4ECjChxZR226C1zTcw9ApWMEEakQQHW",
  "key43": "4woCGMWv6XJ65aYc25sEU8RuNscDceiLAYXxnURqg9rishnSA1D4SSCxyVhfMKZVn44pL2S9X5rMyosQf35mawpa",
  "key44": "2URgSHjG89XrGdFAnZhWUjgdZ3cBRZVmLptLtQ7fFjcJp27Q8GiEkF2K4MMC7frHP249aDXPVtyayM3WbLsrWrDU",
  "key45": "WyVXJ2V35LGqbW5nv5xdsvt9BCbpBpNobuachr1L6FykDbWiasGZ7FxfSTM62Sz2GE1wVcJtznA4WmijrEjSSZu",
  "key46": "42PnJw5M8fM6AQxAovT1vmzWmazynBFjvKAU8quNhAQhLXDJ88dNx3uEavNFn8UnrVgs5LoRiEuScQ9XLF1KeoWz"
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
