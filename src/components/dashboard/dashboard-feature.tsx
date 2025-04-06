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
    "5yS5CEnynVY5pujeLBFKBukihjW6YTKCKc5w54aXY2xeqEbMmbgerYSK6ob5NikPPERoekBLVkJYUb3dxMpRUC2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9KhCbn6rDahhNMT8QfGj1JzkGkPpeXSRQ3dKDy9fmL9JkmN8AMaEGcxgdkTHBFBhMfQAVaaSq43vd2KmiZvC3Ym",
  "key1": "5hD2CSWhuKjLyNwkqGCXPm95mmtMGjEr5pRvDDrjAkc1NH6Ex8HvAMTMvKpjxpEghT5XgfgdRaY3Qg811SsPkrht",
  "key2": "2fr9NfMXwcmKEEPqU2Kk4MoQHaxRwzPCegLe2zVfHq7fs1BwSEFJmaxA8jVT4uvZiKcgWLtDat5ipTweZwTNVMPE",
  "key3": "vSwEgsU7bCmBsciMUQixxPhbyCZSKLvLLPyt2JXo1FvmA1YUKXPPzV1oYz8JhvvntgUrKi3BCnEFRiUtzrRhMwY",
  "key4": "tYrudNUqLtN7k4iCgCthG7bWWwbXbAxxyvebAXqgRkJ3xt6MKoJVuXTLJ6EdxZJfp8HrpkecLVyBmgqhaFtmKxE",
  "key5": "2kRyq4LxrABSMXJCLSNWY9EoB6Q6kR48jbvKVx3oXPqLtye8L2Nfuz3hLBMMSkreYbm9u4iCkNNeKEiLyPEywTqQ",
  "key6": "4rLjknnfTr3moLH528rLS8dwxMFxy6yX73xjeKyJasxZt4J989J86SPgnJ6x1gYZpFyogCy54jQS8RvTyWqskvVN",
  "key7": "2gqBAXAHnaT6L9nRm36DMYk3buD69yrVryEreWCzq5FrEWB5HkCuGCaJ38eBcQ6cQjrGsmNoJhQAqDEZPaMTY5Ai",
  "key8": "NepkFUTGit66dKD5egcGrvhn7sg7kfpLEdpg3LZNxSAJ1uUV87fAjeZnYa5soUXgfUWzR1t8bJ1dPAB674kbRv9",
  "key9": "tk3CUe1wANaKKpMqULFyyUrBZdhWteoVRWYusGDikUBkKc6GNLWczd1Uaz723Vd1HoDuTjo1iW4ynzVNNrwfgHc",
  "key10": "5DoSsPqPo5NjWDAAHczq36DpYXMLzKrpatoG6YM6V7LW44wfU4TUNjX8wnpCRnqFUYUcEuMZoY5fCmjqjM6vUPD6",
  "key11": "3eMgE1jKb63LSbnMSizhBkcC4QrRKDn7V3TFn55h7LhEcT5ZYWPL9Lq4PjSKvFPrhcLG5RunHqsau2o3e4yokpgV",
  "key12": "2T38F2UnYVEZLqcbXwpfZoWwoqYNBNzLYvr1tLjuW41V6uFpoMhh5YqvqeGy32x8omdXJB6iEouWpoFJdspYsoQL",
  "key13": "4UWNpcLF9KTL9PuKxZBSgHftzVYoAN1fvBuR2XaPVXxCwSBJuKLsbmbAKnVYcccutT6yZonaZ9pvetA22BktyR75",
  "key14": "3UsZtrqFfz3AUArDbpxyDk6ta2gKdW6nFVp87f5HxXGRr2GChhGrtHqXtCW7k8isdwuYspa2AYqw3ZQkpHqy4TPU",
  "key15": "ZLFPivE7dULuLBNZrV9KJSXmb2QzLyRNwd3KVZiDcCCh5mCKe7PBxSty5GCNx4oT9PD4ZGHwC2fxZB1zmhetHrB",
  "key16": "38eL46UWuqz39TxCEpNHYKgRt2fqo7XXrRSFni1MMFVAhQGhPUQEBoBCvjBUJZREp68GyJvzhRCFBn62rnEMtotb",
  "key17": "221q363x2QULcj2WBX1SS1athZ7cRVddToxkoQZJq8C6Etp8R2QRdfABtHCavtyW4CTUYPphsxf113xf4ZnehZp8",
  "key18": "5JHKVAoiLhyMgbwbzebo93JbCnALMDNHMNSSTjhMaKA1EuLopX8RD6nk4w6U3F1SNUD2166vymAsdAAPa8keJQUG",
  "key19": "5cacxQAVPyTuuzungseZBQi2zs1DtuqF3cUVEBc4mTUqyxb1oewPgbZFVUM4wS1ZDSvfaNJJ9Rn5e6TwwJV6jrht",
  "key20": "3jHr45jDt1VMXa6Y518Nscu7YeCybxEnHM3wBv6XmRFXM1UA4DRVFUMPQmat2egXbSxurSk9fsRHkFt6bYqPbxQJ",
  "key21": "4icHt49gw7VZdyNzBG1ZRBJiZPmBWuccQLErLq3PgaYXfmEdweMTskxrkRHDTw14Xw2LVCdKUBsyu1yMwJKKDXpJ",
  "key22": "63rvjqga3SDGp5io6xTBxvHcWybJKrZjyn6v5CkdTK9YPP3P53fc5ANxicJWPidpTEuRDEAgoks9SV632x1zAAE8",
  "key23": "4g54Djd5pGAhsetgrrrDdaZxSjBb2fua3aAuLEFf9NkW9C7Ty3WHdMX9Sm1eTa9q4o5BGjJ5eZwqnDMfPm53FShu",
  "key24": "SRK1L7gbXCzfg3ND4aFt2L38VT8RveDhYWi4CyioPiiSvEdYtc5WPFHAhk8iCQajBEnpDCuA8qBJgy2BxM6v5nZ",
  "key25": "sQNrnUtAWCXNQVfwjrfmXPZokot7zDrfhC5yAMx4HdGHUmMwU9aWxmUVpBcZwxq2oAnm24YWcWYTFxjWMX6TTos",
  "key26": "3Ag4YUV9DvCbRr2uPWsCbei2G1VBdNTSxr3UBztZUDZcM3Ke8quk6qdCEQnYxLko97rZDxyyt6R9g8RXXLMqSofr",
  "key27": "5qorkgH6fA1JMWLdPr65FYvJX6kY9R3YDu6hKoCEs8dVmXp2eKo3SAi634WHsyVW6ET3wCxmLhw8XFEAS2JFDtzK",
  "key28": "2dj8WQQ5A9MddpbxkG9pjRctoyZLGcS531ZfxeX3Z2HUsht144Skpux4FQGozy3R91p7HJYS6WDLBsYCC74yvfbj"
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
