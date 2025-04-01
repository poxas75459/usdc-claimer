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
    "5d9WLAuvKBZxC7qACrRPfKuByyy3Z18AMKDNDYaB6Yv7SAHkPBokwVbfxRDC4e9smRVQzZnvWrK2qtvBh5mHkSS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dXoHCjoj57JDpbxhvCmVHtF2XwU8gWYFvhqMa5DgY7eyXPXA8SpDGQTBQDt7T7QcuRjq5cPV8CXbBE74qR2y5vz",
  "key1": "5YFd1VHT9fXiMcDzBGzgaxVmzsHsCCricS9BLmj9VCcnM5DQ6S3zDgcCtbEweyY9dzHfNbv65dcxS5WDKAPd85Nz",
  "key2": "rGhtTZKsW1YEB7usCV8akVzmpGbLQ5JFfSQGNQKMDRLNisNokkXGn39hydQrw4PjiUW39U2JXJzAGHgFKcdCBqh",
  "key3": "676X4Ngk9wCr43LHxjRvSMjNLeGDAkc6nA8fkUEMe4DuKpQLCbSR2ZQYuKvmyytHStGz6agYnnNPmTGa5UEAMAVk",
  "key4": "65wXMj5b9h8AuZBk1K4at5gbxx4vsMtjC5FhcwkzddunBL3hkyKSGWnh799sAwK8seSRHjQAf2RyNrxBwp4bCiu9",
  "key5": "kZGwPQ8GtTo1P4fPPcZwEv84k47rVDd4w9JZJBtYusYJ8H6Eo67uj5NmiSazQxx9dKNoz1Gy7WMtamdZcjYrXUZ",
  "key6": "2G3ofMF3MCcAzCmCz6YM2qWqQeqB8PijBSfgKLHHNvdzW2tFXKLQgv4UUYTYmUZQarhovgUZyRsjaRrJqdLjJva7",
  "key7": "P3FYPB3UVv1VieSpgmYducHDpY7fibEMZV312RoDRFKYMo6kAYaXaWG6BBVVRWuyJiZ2z8nG7J9PST41Vxk2AQp",
  "key8": "yMmECUL2dar3Q3g5j6W1v6ZsGy1puSmGotQXuGETyamsR89hBqR96uDwHyHAHuLAVEM1daF5WjoJqeSjECFWWdM",
  "key9": "634K58q1b8EGDVokN6589941psMrdsm91pWCvEANeLPGudvw8CsUME1SELCJ72WMEpz5B7jcNDJcecR2BoBTz3XZ",
  "key10": "5UALcmcue71a27wbeD7c683cJq6YHNaSkeX8Wz8UsHnLmRPE8czerr7WvgPBMXxFK35Fdp3Lvk9w9br4CSZ4QFDy",
  "key11": "4aryBs6csG7A4YUAk7pZcnNLYyQPGztESkFgFSD7dWJ3vPpzt4BvkvdrcPUAfNSShxa6dtRbXzoHiuo6QSioExye",
  "key12": "2miotbc52YgY9jqyoEKgtyfotnLnFZDDtt8fNzVzZDk4N4AtAx76PXLjAhtWBr4E2Lj1rRABg8hZYnw2RaYS5wcc",
  "key13": "4kh5En8DEVepWqf5YP2FBf4jmsob5nzyMLvHUiduEVZfo14orhkH7KfSws5F8xopU4MGbNN4gBEWWBiexbTBWdHy",
  "key14": "3ZQMbCZ464qfHSBuHHWmFkQhzezKShqxuhXhmLVvDgM7JTPdFzgvRtWmz5FMSH976d5K6dpHodCk1gjoukDRghq3",
  "key15": "2isofSwU44cZdyiCzHjVz1ojfVviwdPdzmyzh7txN9oogPnTBcKQtrpDRuiPHDCiKazFu9S9yYpwZzM4mtx5dnkt",
  "key16": "4hgZeaGgjqkgomUhMNiuc1UfpseiqPsJLpdMrx8HyuFJqQzEpfTse9rZFYihkodQ6wa9Kb6dVuSe9uW736zDfswW",
  "key17": "2SAWr9QynXF3y8HPAXbQYeH8oqcri38zkLiJq8bsTtcoGSVceQySPpQnTsZZS4Uwzd98r3MaUwhfNaHSHnqm5xRA",
  "key18": "4CKYQDPSHW3TwfEhnAEYA7hWvpCHLwDsPyipXgiK9cssdzFmjXTwbejhsBT8rZa56fUJA4VpSL3BxEnrSZUPB2jv",
  "key19": "3DBuXJesH1Nad1vSSCHjpBDVjHWw5de3cFJc45B6aZbPscoKRjSP4Siivj88mHkms1SgdVrcgmQqmfM4ns6y3g2g",
  "key20": "Fhmo9JhVcHXCPTAX1swRzDNDFNodryftwmoVB4y4b4f6M4rLWyRc4az4AxoNwadnShGrJs55SGHvtJuJ6WXaXes",
  "key21": "WJD77shCYEhgfEgLsTYDUm66Q17gvWB7XsdnYBsuME6joat1wNwarpTGTE6aQmffotc9mxQxNGP5L47Y9JsfQRo",
  "key22": "5gw8qkJXd7Whavdfd9pQYL4Nn3mnjgkpkLHdRjLtpvc5YNNTzgHa163DBuftGFnUjdSeq1xN9xqcWSomq92YfsWV",
  "key23": "3dnZBwsXcywYu61QjBc9GTk33K9phUqrVRCtivjgsHSkhsz21zS6tiuumFKzxx4R2e2K4DebksC2JxZ3zgY4is6",
  "key24": "4HwC2ELXrrC1hBbUp7sQHCgkVnDLSHxSWk4qqXA6XKyzL1ZGrk4UUhNFb8dSBGCSwhN3WhLMeMeBkuZ21vRezSPF",
  "key25": "4c53ycjoRcmpChqvXUaHssGFXxuJZBMbS1FoBYUSZkRGrqMDQb9hNjGj7gJocGWiCCXzZvfy4TiuStEH67cwiP53",
  "key26": "zELAo1Kdtv3VbuNDTirbeaw7QdWtABxBH3wrKrTguy9v62bVRLWHRXapJU2md7cRSKCmLst4WcCnkTW4eaaDUHa",
  "key27": "22BMNqipuZUSM1FgS8WU2dcocfSqRvp99GrqtASsZdzd7wZ8Mj9DFZBTCbZ2s37DhZqsAG37nNMwLGwWdkbi2EPv",
  "key28": "5iaM19qpRgGEeicKis2zKDeYtpRkupBtgitExeumpyFyZasosv4hUTNFXdykhK3eQFMBCW28uaNYgp4aVYQ1vNUr",
  "key29": "4J78hsG1zeB6fzDUg77DdjUU8j4Euo9AGuLLYgnWHWt75euMGxWx6jUtVTUBDVECJTwNy7HCMQ47pPQdapGtx1tF"
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
