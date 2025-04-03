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
    "4EkV6uDNzCHykCWKfYX5HbcD96o6AVq1KAPUphyLMJD2fo9FHJfSJeWCF6r2WXe5dHLQHbQVkvimLpupQbnQzjUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rzhSZ2J4NCWNHKxgsCT3YvWzzkJehJTU5jgYQws2j7kvhvkqvEPCosFTJSBPjzrw6MEb9Nbs6sxcJL6hMZTpgJL",
  "key1": "5KNMRzytjhrAHiKnge1X4ot4oLTVYvfJBdvtkzguWW453ganDFoVhrctEKpVS1qiPjncV8pntkSokQWi28v8nYiu",
  "key2": "v3JWBskUBH9LjcCQ9ycSAvoEXzHRTYVBXe8r5Z7yFWeZqzR38h15XT864PTpm6YgjCqioi7DNtu8Y8Fc89aULmc",
  "key3": "3poKMNHqYbYECSYQWn44jLmXiDbLaEfGontCoAM9Pou1wzYYfWiJaWMtC6zDP7GYBedj1R9NFbPE4mN6TorHTgGj",
  "key4": "4YjZD6aPYbG4K2fHAjSh8XnYaibvmyQKfHmhJjhnUw7nMCf5zsBtxM5yTry4Ex3xFsaLxzVSSqBembQjS129zKoY",
  "key5": "3QLqQVfXav47k2VXv5ziFsEQrgctSCjV3RSHYJgLS7zyCoNsD8iSJtu8P1CwRZM9enEHGGPCTj9t8wr6TMHXUpKJ",
  "key6": "52TdezXuh4nXZSkTg9khynCuA1sXtzMuBKi2rPgfpRZaX4cz7r6B4VmGSW3DSiAA544PsQyhPNCQoHccbC3UosA4",
  "key7": "3tPR9cR5DNLNo1RSTG3jgjoVCgaKYgLpJwRyw2mDwrgvkRUnmKggR7i2wX3dBQxuyf8XS863iZZspr4kXpusoR5E",
  "key8": "SzYDGUf4cCdRdQXyGTFLPamfte67mZ9bfzs7AKwqE26BSoQNauy1yT9x2JCyNqWo7ZuvesPBqpdyFEUritYxVNN",
  "key9": "2R7BUYLRxgHXbSHTfnNw7knXDayf6ERE6zgr8naaaFP41morjqZrKykD29nw6Y4jaLzyMNV27e1Fwbxts5EyVCS9",
  "key10": "61RrR2EwjJ25aNJ8bAuiUjfeJy59LecXr4HexRcfo2kqusG8JXsn36pGK636HuL7FvReoMid34yknDg5fwLDdLDx",
  "key11": "5o3THSKbtFNdig33XbfCsd4hJSr5F2jBSCUeVTiPq728CGmPmsVCrPBMisp7mhHuDifJmnHVVvVLZ6NMfZxmhrf9",
  "key12": "2ghYccwxqtksp3X9deu84mtdNir893MQXSgt4HTAHa669FqWhuHj87fevqQfVBXYQWKsgwTG9pmSya7xBm7Rrk2u",
  "key13": "3JnLRfhrx7FmxKwniWCo1YMeVT7PBEoVvxpnXaib1PMaRFsyP5nrX682WnHDazCQUkwfRNyeXiakNTgnjgchofmG",
  "key14": "3tzSzRAF6Q3AWjh8cm9z2uYgEpytKRCR2DNWDKMutqjJ2pbyKmYxU76a8eMupm5Pb4CA4tWZPYxLPSLaX2PNRSTH",
  "key15": "5JzcHrjNBuVac9zGs8AYMuFjJZoSb8TpTVfZCYqNAeH1fLKUPWovBrkFurBb3rBpdtpdrY1hLsjSFUhT57CUoFXE",
  "key16": "24M3Uo69iwmaWCxNHRdXqrWFxaATqZwhwLWziWVP24k6MupHMoVbgtXG5aaYAgZCQvBf7jAk2hbDvbZaC2aemZ7p",
  "key17": "5QJkCGLA34NrenQ5AGfFsjBmaNvRhjAiUsCrHBTqNbueurY7uLuQRTZKho5oBy3QqfEwCcHUUQPaX9rLim1mc542",
  "key18": "FowyNwq6zM6wCV8R1GmiMzFPuqJZufV9XTwvnTjHSpC2mzxWR6Fr2eU9PZ8XpS2oSK1uMPinWMH5Mj5j67SxcPy",
  "key19": "3vKo8wpAoZJmQ2HuNuB8sB7wd2JPrB4QE2ttN3oSrKnYp4xfRzGWcje3mZW7G5H7n38aPwQ2goU236A656cRLvnr",
  "key20": "5kXVrCVQYmGbreMDs2xEogxwjYATJ8ZJVywgpbvZfNYLPbQXcC8htsxmxJPoYSJHV9Avdr1nGi3GWDFTvyzDY3D9",
  "key21": "5wFfimmTJdXAKCUzypPuFvctdRgrArG4R4UB1rWJ5vJ68x1iXT15KUMLhePTz1HVsJuSedtLirzrB8XrDpoyFmZF",
  "key22": "2MkYa5zBJ7rxQBHuMF5RK8WMunXseZmPMsfU5rLa3AzvY9GndxSuS44Mgu16KTRdesuKqs5xC9ETEFS97Rh24kq4",
  "key23": "buBVC59y6pVW95hL8Qs5VFbfJx8KVF2SFEgq7cUnXwggZHstEhUPL8r6ztcpyEgZx8nisBwYLM9BjKqLuA9xpb5",
  "key24": "5R9qqPUBkgPgwRG47rRkCxsLXAUn1BC3strsM3Cm9rxeNMScEM4DnzpXUu2zt6eK3XuuSDTAgfM2tLUSfEcKKHKm",
  "key25": "AJFY7KvGF2cWi3XJZvZkh5J9UsX8JRxGiLuU9QbCgMhZsNzgat5CmRn3RkYZxYMfDpfXSQL3v5MUVheK4Rbe7ri",
  "key26": "csB4wRWRDmsAf3ZnqC7YRiwHTWmYwXXTSzzRZBvTyp4J9Rbeyz8X429PtMUq8akEX38fVNQ5zeggqqcm7DxLVNn",
  "key27": "4ipiun1KLcYhXSnZN5Bmn8zrxLVbkKUYkWfvgpcifSh5dNnh7nSEnhWetFMNZ57cADuiiPXn3qJqr2mquWtRH7iu",
  "key28": "4FePsGucnaLc5nHJ43i8rEa5SRUanfnBTyjwctrNNZaiUXiWnpxiUJcK41oHAiLd1xrpTD1ENpeK5UViok3Ukg8Z",
  "key29": "5xFu5PzvmPUX9UnmMUVyeyebRLXmrK6uR6rrk8G7GYaTnvUXtuEC69cpBLcULqkJFiWUFgqh46fWTPjcANyVwLiR",
  "key30": "5ccNjEPSZZX1EP3viFJJ3xGbAip6D6945ZoeowBPvZ5VXXtUbLMCDz22hWGJRjyMmQCgvii8ezDarPvf8EpUXWY8",
  "key31": "5ZhfztLd5cH3iAFqYoW7fcwsM4P4ruRoKhom4KycXuL889YEDTSouDAJo1QdXnu6cGdLZaM62Uk4fVQjM5aSQjse"
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
