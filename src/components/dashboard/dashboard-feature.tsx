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
    "4oHVfNC3NmEhwEpcyte8PL7S7eNLG4yg1ShVseSTCF5QPcPWXyFnqtGU3WSTvDWeo7XGYKja3PvLfXSobEmZmB27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SfpPWdRuLrEkWUuCYkzF13nGTjwDtKHA9eVZ3iZvoCg3eoVi7YZsheBooHps11Hf5nXKdu3i43zX2vuAM7y9TeQ",
  "key1": "4VjsoFGSFTUJNLTPYAPTL4nbVPyuTX78hAye7JzUMYb2t6R7wxdLTxjGsjnVj6KBd5EAvd2dmLsxpCGpyB1YT3No",
  "key2": "5RF4YPZpBNnHY52jcYd6UHhWeidTFwS7cnYPxZYurj9qBWUB5oa18GSHpZCY4t7zBPWS5vs3yb4KSdQMnYxvieLN",
  "key3": "3auQkHVb9R5pcsib75NQGNzqkwjSxGrMAVS6TNxijC65iiHzZAqRDQQ7a56yYzfE3vEycBaGoaWM5N84eU3Jh5XB",
  "key4": "23MyR1oZUKEq8sd7d8n4VS1mSbxQA294X2F36wEkwwQjAmDdW8fLbbBsJXMemrRKTZMvnEwAkczfhWeoPqVpEk5y",
  "key5": "5z9ZSwCVeBnbUHnyS3Z4MpQj8jnmu25gTU3p4xD1UC3KJSvTHWda9HQJe7QBkyg2ueYX5pmnAFVevVrcXxJiqfAV",
  "key6": "4x8k4Y9Mx71saVrPCzhLWMjuwKXaaZxBBK8dtQGGV6aKXbAMbRhi9Ka9QCVcvTofGd2cdFPYNvahJjVa4vYRMEGa",
  "key7": "4StazrYkqCYyHDyZq8SWiuTKv2CnTaziR32Gdr9jtDpcX719K583kwuR9td3KRJs4ScZemUVPZxr47VFVjotbLQi",
  "key8": "5hVMKbWG6jwQ4gW43bzqWv2b5iMqoCfRtC1mkP18fWV6HWBdYoCLCmDsWGABJKp8TC5M7kkodo85JzkYHTQUBbcR",
  "key9": "398t1PyrA3fEvcP9NWGsNFzkak6dneoPN4tsCynY9gNujRunr2Ud7nkTqdxezWfcoyF5X88QLg2rcQbbANiUePvk",
  "key10": "3gRLi1RMcUoirb217rYBqhBFxVAUpPVo4UvkWB4tNeaTrSb6SXstLkKjkWWhoMRF5vnvTZDkaR628xF3ixiBzeYU",
  "key11": "4CkD7f26uPZm4ejRiFom2wWN6HzDvDarQSzraNfiUTbMtT3G1WnU5ozfPv6qzhStTHmtEJDxhGuMGcrwCGkHrGs",
  "key12": "5o6qDzWiw9p9qkA1AhXTx6BHcvyDW5eAAivQvbxEm6auUXsZf6epzjvnPKwe719HxxHsEyT55pjEsLwk5PFds3bh",
  "key13": "2zfVTJZhtK8hrC9t1binMN713u8L9vt7xVxshFRozjeUAZb491CuYYX3SvdnRaxHSNauksQkShHrQPr3mhLudabi",
  "key14": "56dVJjkHhJN1PirndrroSjaKAWeerK1XsgUE9rjzfqnB8ubMWU2vZX1uRvjVqvZ5tPTNF4YwqWH1tq3NBk3nWRsV",
  "key15": "4gt4ZHotKCemeqzoZkyjRkk9GwwuvH8u6k9TCNhT93DmfPHguzsrhZCBr39DH69itbkYCSm49Cpz8gUfMG3awD1c",
  "key16": "4t8k5nazzTH3ydpScmJ8y7L11hM2zg2BrXcoH3nkjrBHcfr8oo1swYtUAZmD74nT1XigvqnyaXccsbHk9stWJXrT",
  "key17": "i1WjRi9VVhCdLT37p1gccn3aAetFxySfMtAsJvpip1Jn3Gm5XU7SNvMPXj18Qn4whUbSDjLWHKzAVqKUGUVxZGL",
  "key18": "3z5Y3XqNEJszPpac5MpSVAmJ3QsdigcawmdDfjuPJHQCEmKkudEqvuLBuWJZ69VhskX3CTzdzV8vFfSjtHyWBuc4",
  "key19": "2rEcYZQs9QxeAvahA8iwV58tUGZNd7QUA5GCjnLDgjhqPd59kUu4EYK8eediWGGeTnHF5oT2N7dazPBjz76Hf7gD",
  "key20": "3LdryPQsoZkJRxhdFcbsc9ivxW3GXq22xp5KMw8hZLgntB927mwjipFDZLPMzXguR5xE6LBUmMBezGFNc1syeNrn",
  "key21": "TcT5HgVHgSGWGBJD9h9ZVrCur67iGcQRj9PRmbPmB9ywTRsk6C5893Gezr8EAVni76q9uB4DwcBLo8cZtecGXnS",
  "key22": "647VHRQBi2jVrJibKQHRfdPDPjBgPmcJdp54g2H4Esx5xFQoS4NRSmhVwtxu6zW9eYK6o82SqihHsZn7LNRgm2Nf",
  "key23": "4cqGR4idxqLa7axQzCabdTR5M5SuW5sFgTsMLTq3p3tdUTx1hrCVSf7dHauo7zwLZaTKaWwHk3NZBNrYNEiKFJa8",
  "key24": "555aooq4JqXyrnuFj4PRpA4KmfJNHX94EA1jh6ueTUMsJFkQSP3XGGVR7GqsnMJc4uXSm4Mvfa2375ctWs1wGKTp",
  "key25": "5Du7EefibzTcGSEamSpPVFt86Xewgb6DyfVmZVmm4gcj49WYtjYK82gCUT9Xn2GBPCaTQnA2P4jnyrWnKTjh79eX",
  "key26": "3T9mhrTFpiH5A82feixwfdccetSJeLmYYKtU67MeaSR1L3AToGyaHvgz7qSrxoGnjgzTDi8zUrsEq5ctW9hqjz83",
  "key27": "4o5vqyAojqeodDfB5fLHnPLtuXSEyaXRMhZc7Fb719L5aud4nQb285WzXhzYo3wT84ZNJcbPymd8zXkNaj7ghuJd",
  "key28": "U3uiEuJ1rXZXJrWXf2oRy1TMTJJTCiNavZZrHpNC7hoU6uA2JyHbRcRbRKRaRFVyYF3DQ881Z6XrGpD7pnHtofo",
  "key29": "5AmLPm8k4ggdvWYT9Frg12eYUeALPK8yP4oqedEd67K7WvMQ1Gfh8ECVLUeXo3YdT8GLcycidKWRxS67HeUkp7HT",
  "key30": "4oo9hgd1q2qCwyeZFuCAigHEegRbf7qXZwxsCZaocCohu4tZsY4o1dXrVMWismeMUTpFuNXRK2wsNsCSPdgMptJR",
  "key31": "2gpCDoapiuE6Hjnz34qQxo6x9W4mcw98pSyP9qURUGjak9xXCChJx9KuXoMoQLeUV42ScF6LGEJ3cS9gCsdbGJes",
  "key32": "3fj4sjb9SZaU7AnFfVvpAxH8g4tow7nM3L119kYamsSy3aWhzShjLE7RGAuHvpfxEirGeWqPDFc3qZkKK7qa3Muu",
  "key33": "b5LHSXJYRCQYsyvViW11mJacsZ9VVARsoRDaeE58jafJsDJuccXhEcyHv78FR5dPXyF1gDcE23ZK5WeJ8EYAXhD",
  "key34": "5Y1SE3hf4kF66k4YVJoV58z1ZtiJVHuSvxd9X4Vm7bv8ta8zcQ76kkd38HSkh8T16wdW72nL6C8hjfCDd89p2zAt",
  "key35": "kpKivJxuX85QnPtM7JCgF3jBWbB3BXD2BFuKmTT28SVFdTAZMpxtKtY9KVHbcZ1Nt19GyA94ZBtwu2Ktm3egYa5",
  "key36": "67FHpZqUMvbAU9xAU9E9NT1CW8z9v7pN2jsY6gH3je3xmW1N3Mmx432h4Hb35gxkcywZmrfMAnSoQRSiRxMEjy9o",
  "key37": "NGhaYQhubH5dML2xpSLkUhfEuCzh3F73vY9LHHPoQ4o9hjJir1jyPwouYcjGfRWnoZc4m1Dnigdw4gfXvFehEcp",
  "key38": "45d8YtwHQA9ax4hHRoCfoxoJ5UjRufiEUs9Ne9FaicomUPa9U2v8wpwurDepbJK2ztJq4nTrZfzoGqWRH4K4D1Vf",
  "key39": "4eTKxF6Y5xn4XUVGYdKWYz424hTfK8hvpje8eSKPN78DKi5xESc1oRUxSedRtN6mBcLojusGLoQ3nYenutrGGiHL",
  "key40": "3KEeGdeTxpXaEJ4ZghVjXRHopxPPF5yydpHEzxmTgRPZg2eofwsYESrMShMk2B3bgN9n6AX59TW3FXhWopTi7r5T",
  "key41": "qiaapyDEwH2itqa2jZzrqK8hNZCLHjq8pg6Sy8TmWARfCGnMKFtpdYp5RvExfKKKcfNoAT9FYuruSZPAjUUNFR7",
  "key42": "4eQweQLygrwuP1s988891nYz6UuycSW84FCsMZ9wr6vqrs5hBcfgkEuDyGfFwBxaNaURvjYcrPWrWaLG3APPyaSH",
  "key43": "E3AN98HKhPbb6TKKuik3sxGvEkVxC7CskhZypwPV9M2vvmsJBwP9nTTm7CLU2TP1eUh2ZJMj6YNxhbHgW9byFTj",
  "key44": "J47GsfhNJeP5kwrgDCjo878Qz1wpgFtb7aHwBZurUCckzq5fm6HNKduUcuWHnJ4oYGbD97VUBTJdW4G5voer18P",
  "key45": "5vgvNBgdyTxS8ZXdTnq3k7m4exBie6UQJqGfHw5mcaHpLQcHV2djcQR83RAf7kJSGAfPBnxAR83Z9Xxwttjctatv",
  "key46": "3ES46GqN68kmNcYHaztxZicxQ5sUZooahh7QJf21WShKpSfyLqqjRfGA6fiivu7czDNdYxJhZoxfSvT2P4sZGC5k",
  "key47": "3GAZ1f3PAJc8z1CTpiZerD59GdViKhYjsERW35rZtF5qJ8prXDnR2hfk7WMf3QVGEHRqm9sG3tFofJJVHz7Y1bgF",
  "key48": "5WWHzKNhBXQU5n8Pqr85GsxYdRWDoiKWFHTnwZms43JWAcBhH8jA1ezrc3TsCCFMCGpjgJmAWQcinjGKDnLMZr6B",
  "key49": "TzAUunQGqNzQfzFfJyv3tEMMpvMfFiWuxLuoq8f2BtzT7xD7QYDkHdYtEUrTjRUcg3S9F8NPCJS3AZGXrEmhbzz"
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
