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
    "QwB5YNGdEL7L9DJ3PQAQBwv1LS7CdnozwAPinMDBQKF7sAuwyN2oVfJqas1vsQGdoo1CPpUXGF4nSnMFbDeJNg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "431nvNQ5thLZgMPpk3eGrwkMh84wzCKtRgQmJyi7SUWyN166mhyiTWxWM53FQMKPQqr5Ce6s8K6H9Wfbzry9MBS2",
  "key1": "kV9Fi6tUjdzT5vLYBLjsHjvSwsuwNw3vo2y1Xf6w5CPaaRRjQ76pqdsWp6GK6FuHvgHKqj1ob4ZdMhHoA4eVCPD",
  "key2": "5mp25a5RqXK1hZMjs4Dgs2NQeWb1cWXF3ptrPCwpLjdXnGkxXhtSrrzynfZsxTSRH2pfT5jUFJPv6sYb3WRxcUYV",
  "key3": "2poE2c7jLbbHRGhTJkEoRxqD9QdAcq7rdTvYQRfq6ixpt4QYsuHmMVtN6D5gCJoTZeWEhSQEuxL7PFm15v6B8ywh",
  "key4": "5TfXcRzHt3Bje2SvKGEgswRadciAMg29ELvNK4LkRi91SwQYaT3MMJJAaCTR1VpteFcDFahR31BpLZDKbdfCUBme",
  "key5": "4B2H4S65WcW9Tf8QuduaDdYfUGnBzURTECuEWcrwTyQYCqmLCEjjMfzywRSNCQaCVAW2abWFEaWUgS9u97o4rBAX",
  "key6": "3STdZer6kv7oCJJQAAo4ak1pGEaGZ1eiLC8yE9uAgS5KaXbu1prAbzxkBASP96cVLSVPSxVRdeK5JdDT7j6EqbHu",
  "key7": "36x1a4Nhv8E8N2Q6KKpGHJMGCNLVuxryvCBFPebVQvzpt7gL6xJsjKzTEix1uzNSi4NKn2hMZEgdvMPRaigM5vgF",
  "key8": "3pEm7Ap8RzbPiTV9VAby26hDTbprwTnMnDHL3JxhKhzzRujQRQkTtkP4pb7qrWfjX5mgMLiqL5WGnKkcrxpchHqY",
  "key9": "2sVSpu3RWHyWHBVxzkjAkDe6h4TFZBQCqqY2JGWdLCVnUAcj6s74UPHVafpE8zKA5c12XdAW6SsFvQiJTqqS5zKM",
  "key10": "2LcdpweFA8yQ4HHWwRJswink9NiVAfLfdqwqckCSHEySvfw99z1LFY9G1QNaDF7hohuvQYSEWoCyR3An7XTQ4RZR",
  "key11": "4jaquRibvBzS9GUPkhf9aWmTEspk5viujWhdqcfss2sZHhzrvaknuVDD3FSCNCwibTNbXWxENzhYra6GohFJ1p7C",
  "key12": "2HgcMqcfb9ZcM9QGRsMGuWb36z3K4MddXo2TjhTZcG7okVWt5gteCucfyTjoMdvJbfWpyyhReyLJ73ZkRCawYqSc",
  "key13": "5Cidu57qH2XwMRNW9RPM73kCKNUB9zfMQRzxFktV7TNuexT475joUQ7SG7P8wSo8D2Rs85z2wFypHSMoKVC2Etz6",
  "key14": "5egzZK3Sm8eDpBdcBsXFgG3WMMyQs3rkpPW1eZ75ACKesxUSJaMz1nF4NmhkeJ8vsvGSNDTrnoSrFgXBhmifcFz5",
  "key15": "5BzUgKQKjhjBwTCdBg8VhjTcpS4rrxTxiXWG2QzmQJbYgLnG9VHdoBPiQWXnHpxC8khS82LL3E2wwGBKJpihgrDg",
  "key16": "SUXavau6cRVgoGNMQU8RFYgBLVMLHjhyVB8HuPrcmQD2peABnav1VE2MSsmangzeXowe2yUNHCumVAw1jxHcqNx",
  "key17": "2zGjh7xLaRsf74UkWWYhixwpvh7Z7jdMXHY6kThMLQy9p9XDeaC416Ae7SGXggHhKT5zuU6a6mFJCNAFdWQXEAq3",
  "key18": "5UTwjRf6NwzA6R2FbmfsbEHyanM4eL1og5jSLdy7hUmbf1xDLb5esHrPLCqNanapy9N9rQbHieZptRVX57bi3dK2",
  "key19": "SK9qpnaXpvwQVURVVrGC8ct115wK1jDcrfHEuFUBANrFfUCRYvzGu59r2JP5N1Xnu5Ng5vTq7dEQa7sBJGyzf3z",
  "key20": "3wMhaJCmnv6kpa5QQ6m8yGktX3QNwmSQF4Ka3rcHKrfzqYrawGi6n6NP9LJxTSXXwqoBsUB3HcG8JtobAgT8VAyf",
  "key21": "2R3FPtFeUmwotsZMo5gNChsc9rJ2PULz8k33oDbRCod8KfymekerCuHT7e3mj3tHtLJDgRjuSM8Z92myTXFSZoCD",
  "key22": "VUfRanzhCKZ5nqMNfxo2sphuKv8GCrcAHtytBbuWaqNyjZGLaG2QFYSfZD9cPGERfBfSG4Vw1or1jPp1CosRJho",
  "key23": "5269rGa7xCSyj5RD8w5KV4Qd87Tu4Lc6ZoGUQkBVymkX1XdZLCyiSDjZo6whLJ3xW4oHbFNdCFHwULpkCNrtxqCG",
  "key24": "3RxSUHgMFrf6kgM7Zn3cbyT1KLu2bH37DyW17vLsGiv62ya92m9SqxX3Mv5C8tTJqf5YvMXEuNtu7ioB7p3UpSpp",
  "key25": "23GKCeDFBiq6SmStSjBZt8kFXWDyCVD2PuLKqv5ubW3ifjX3tfjecp4ZjXdfWwm7G391SPm9nkaAuLNScMpkgBHd",
  "key26": "4dXdgLzPVQ1cpY1xfvjJBkTcdXiciapHyycDe7PujX6HpLnsX5MceGXRn4L1eQHMqkAsL5xkGRVJRqF52pP5bPSv",
  "key27": "2mkMbMdKCmJysm9DQhvE94TUTAauaa4c4bVU4YyFjmKH9PjJpkGRCxmuzHTpDXyZbSXgtfZ7CDuCV2yEnxF748BM",
  "key28": "5gMSw8tq5SWTJqhUrSYk9mgNZXxpuJ4REE3WGVyZ53RWFZCXDLREK6v27caQsQZB4H2uDh8YKT2CMh4GEh2jsqjz",
  "key29": "3b9MHp5vSRJZQFhxPJtJETJjBrH6E4Ykcr28JzZdRG37yPqkrP9NTiC1eyCjx4HbSDouearT2HPhGeeXqyEftXQV",
  "key30": "hyEVVtamLCectoJPdE5bSRYMp19QtWBNZQswEbdHSZy21NwDzdUbxPreyX8bYcgeCzufiAU1yYXegygrRsh9muc",
  "key31": "2JpSs9r88oGriDvWFcjTbPVktyR8tFN1G738ao45JtV7Cu6ZMJ52ovRWsD7dQTh3mFrre1ETB4jNhc4BE4Qw2dkL",
  "key32": "2qdLEm3YHs1cVpitU8ZgEQ3kaBJYMDfmFJsXt1pwQXCiRGuzriqkTqk2Tmmkj2xnwRuvXo17kGzQ5Ee12fqFTHLo",
  "key33": "2sdcNH2kjavFCoWjV2RaJadgv8qmsAJFZMkPAxJMoPCsAH3szW4EF8zpjhBfTSzBw64DDBjQGfp5doCtDx9ssYRa",
  "key34": "5YbtrKsRAKS96GajZPpotfjXGHmogB1dVSkcMKRMTFen1fZLinkYBa3mf4DQKYdf8DPDz8tFPUjDnrVqVyqJMz4r",
  "key35": "iLfqLmY1S6gW5rVucah43jWPXWENTRnZPs68Sym6gr3XrbjLQEnewZRkXeTZJe5DHjDzCdQ33gXj8uns1oCztaJ",
  "key36": "5CGZvt6n6fXuhMbzgTvykDsZ1iybfYHvGP7KdGFyFk1efH37ULkVm8zg56ewcff59akVF5FSpWKKswe2AqmCc384",
  "key37": "2TqNWvA7eafhrVqUjPL4StXGZvxaP232snWNRLFLSstu7sMQRJcgZ7bh58XtW1eLS2Gwt7qRBi4eCRkyPPjmJYsp"
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
