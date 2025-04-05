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
    "3g4jrXP3x5QCxSgpQBeAU2xMTZBAh3J8p5pBx2RTVVgV3An6L1Aib6B78JD55ZooUBTq7XxyEiRrie4yiKe7znJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Edd2oswUeGiVkdm3eadw5UwbSZRQVVW8JN5MgmkfncBQd6rGNup75HaxM1jhyrXT969wApccmzpLo4Q2b9GbiBW",
  "key1": "AkE2YpoPSiPVF4v243upWFYq7QPPtDTL1YYZ5i19ecLk32hLH7q7TKrxua6xcHGtPDwgKMDK4EAgbbsY1Th5JeH",
  "key2": "2rAuVbwupS2DLA6bcsRoXDVbpCh3dzCoZdVXwLzUzNbHECkU5LBUYaDdBNUickiPkiVHTcH8HTf1gz52N3YLoYhC",
  "key3": "LKEYKsvu2tW3c2mWVccMbJKjrkTMhZ8auD3DxcDYAtmMp9dFoXrouiLMdi9ENPLcJLfRZWbnWCVkCyjX8ztUh4o",
  "key4": "3Jztw6DHQetyZArs3fhLMen7cUL3E4JknGqNoVydp2p7kMeJwtMwgQs8FA3KBuocibNLBDgFTiKcmKxc2orTi2Bf",
  "key5": "5QzmEdGwTX9gbJ74foKxM7t8aT1PqytmzwWQMjGHpez2k5AtCPQvRCxPxRxEAKYYfqKuQNKywN6GdYYDghjbx3RD",
  "key6": "3vhYy6DSG3sEB7H1ExG8p8AD5iCE89noZjkuNDSrkdWmKUf7Wucp8Vip75n7mVGimKqV3DmCbgi3Nhf5JCPoVbLS",
  "key7": "5nSFFgZEqkT2eHHfx5nDUTp9A3PjCBdmznHyPfb4eGAk9Vhn6PUPij6JHCxNdcvQ9sRnoKvvMdf9hhuLLRu2wfmz",
  "key8": "3zCYmPHeVTZqJyhvKEsjF9J8EGvG2KcYYXZQuL4ZqDJERXYJZrxCgMY8HYCER2mGfKUJ6JfnZ859zQd35RTjA2zS",
  "key9": "49pPuSzn7UUvYVDZuTfyhwUNwGEfL45rkTHGCuvnE1mwBKoYrmZjT5A3eqtGBvGAsckLoHSGmzXHZ2u11J5EGZ6K",
  "key10": "5rjRZGaLwDv7T5McPvdgxq2W4He2gC5xUrmmjM8SadEZ6GCK6JQxLVuZ4rreg3NbtpVe61f2kgMnbioTsDVQrsap",
  "key11": "5gHhNhhLNQAL58DmMTV9dgECZm94tiasJ82D7LUzCFbRakJvN9ekz7J1v2pF8485UuFmq8SVDRivhkGQqnw19xue",
  "key12": "USDdxxmiZevaShzZEtJQcV4sULZv8Mm2U9amhytX4LGaZtGGyjr6g9peN49z7qwRNjcVNJ5Hua6jiEzQA6mFUkT",
  "key13": "22bQ4sRNYQ87xL3aKgmwvZ73E9HmKL3FjeDBRrsaLZLvZWoicrFHw8cMvKeervRRSGBVb7pNkGY9dLsK4BBXnMn4",
  "key14": "26dG7vPuP9tTzs4MEY5kBPuKgJqzbpGWUKo594AmJgpnpsrESBbihnABGUHCCUtg2K3YzaJSoXQmedSgppG6C7bZ",
  "key15": "3QBuLuXPWEvWMytY1VS4oivNXKeekeovvN8JBG3FfjCkWSZerQfmLA4VVERrcxCRD3vWo1JRvLV1SLrsV4JL7iHr",
  "key16": "jM2ZFajM3j1Bu2HLPsMeocoXTiDV452dk4PfUH1oNNmdHj18ryevgHJjBbJAErcUNYiYYSAsp9DNYQnic5WFHtM",
  "key17": "5unsjXv4dkUpoySCioooNLwUAWRnLys54nLJ3kyqceYHHXqjPxdocYD6BA8yLL8WKGJbfreFv4GB3YpNrazSri2v",
  "key18": "56Cs9kVzkjGGcd6svAvy4tzB3wP5WRsfd9PAbaJ79nBub1YJKjF5R8RnqfjxJvAxhfCVNcU87tdyvGNeyJ75pGyS",
  "key19": "4YcWngFTFYJeV9syiUfpDyBhqTqYjizYjD9Xf5EUCK9PnPFqsAA5uYHxNmC81kBXaYHh2NrvYK42cYW8UKf1TaXN",
  "key20": "25CdRMAF98x5ocyzm4ZuZmigH1GDznmQmp8ASCekarWYtvKNnCHLgtqYnqs1NrsE3axsA9yaBYfoYeTHPw3z8Jpt",
  "key21": "4B7M4LQfwEp83zpDEJVPyzVPYrVtp1ZEoj78ZuS6qPCV1HJfqTEvwSAg7XcxphuG8mesiWois5EEEg3DYJXkak24",
  "key22": "2SYPGBPPXeyPwVTFRSeNF8QxbDvW66smTE9M8hR6KXax6GfPqsdRURkoHMKMwUphwbz9gd9gzG7RMsHgXS7TGak5",
  "key23": "4zmtcDLzjXrXKxrmqgpB5m47t1q2JMjCYwVcuamg9HjFCNDrtw3EQVjbJXvzr2rCjgaW48Qj4MjAzrBFLbVrZzKv",
  "key24": "415snHSirfhAmNWPnv16HoR1KgMWd2VW2JEFEb1jA61d4yZ5RV6C8vTawX4Z5n8LCPXaiixA7i8yb4QjE8mXCHDp",
  "key25": "G5cS8FAA7BkUrBmdpeoarZ6XptvFx5rf7Y2tA4oCJ5RWoHHtmRjk35m1fPKDTSx8zzC9Kgpg3A1cuCmCA2x3gi6",
  "key26": "23REioUbRRKZevEiCkDkHYQAwYd4xcPKFYb8ojpPg2u254CRxZ8YgzdWyAAd2HHy9UVUzfmN5iveFcUejiZSC6qf",
  "key27": "33JcD3dwJz8Dbsm3g5fXt9dy2EUDEfxqL7seGnTPLEFe6mrkQeHfsrBLL9jDqcDKU3qzCC3k2ytHKCBHXzgpjaFB",
  "key28": "q3NgqxvdpDEPyS9nktpkVZN6wW7tAF3DSwqBMSCmPYtLYKtfyVp97c6fwa7LsMtrdtunDRLPsRi9ki9MqfepkDy",
  "key29": "4Uok2uqDnkLADXptqWPPdxk98XSV2Pedm9dzM8EnpRue42RCniFM2PAeNtLWmHWLbQzKkhAgyEbMzrYCMRQiB6W4",
  "key30": "GBUG42KHFvVmSY8f7fxRa7HDHVQmQuzT675Dge5Bcpti5vw9VSPWhY83RmMPbmQzGqKHqmPuskrS4hsNWrJVDbV",
  "key31": "2DfzLofKKFS4eQwnH1Xseewh4ypAdhoe2MexzXxxPiqEF1e5kqaRu82F2GHJo33PkvDkaeJYr33oQHXinefHnaA1",
  "key32": "4UVQck7a21WAR2Z2GMk46wUqqtXokscU1JwKyVa9xVG5AEH8MQka79MdifzusHVWe5vXFz13YQ4D3M5dwTqMG1t1",
  "key33": "ucXonvH2ssQ4oRX6FfJgRnMPafQPWUmyCpiavuuUUzzUuG7wHqC5VMNBcoBkMHYqLFF5pN36ot5X1aCcFYdoc1L",
  "key34": "3pUk36kTCTF2AVdvMMVakSJimqB16fd1zzzCuh7SX3T4EKz39QTAjye43xCDynvnEo3ss3BZrBPT5ZMx3vduXNSL",
  "key35": "XLeTSNp6jaW2noaJXcnFmuVpWMjRCdqKvgumM6SqhNgxZ6swCNos94xgv4BGohq8ZHtJGcFcL2uWLD4r5SvaH2V",
  "key36": "5YVuGv6WZsEYoWgwphWHBNQq1GLuVP45rTDyGAQY4h1vkJMH9mXQcT3Q65E6pG9ShrUMJfLcncphsahYvuhNoHq",
  "key37": "2X5brtFhcDT4uq6aB7un9W84sUxtnwaV1mzPd25aDFfSkn3u6RDXGmUJUi9rvZ78rrS58BfLzfo3oAWgGZK8ACLP",
  "key38": "52cDMefWAJKdrvuucEnNv3zb3rDGx9vJRNuBLevAiyZESwdcYbaAcES9AStCRUbfXgsDXeMrjmofnMVpvPo5Xybd",
  "key39": "6tAuRPzTb5RqQghXeEVDgQFe9dNzjKNnx2moG7hzdV8ypp2J8ijbGVNQmxXeFex8WwFjpEevqsyuSr5g8Fa7qPm",
  "key40": "4vjfg6KzttiTyn5w41Yx814tMBABUnrc5ZZLLq2LbSUrTvt31AgLjpWcBZwk7LdW2CekcxTao6ZSLfJh1jehTjRw",
  "key41": "4teVLnyargDuubDxcKn9hVGj4yK6zu6xr7hmZj9js6GiTzUMvAVzA1CdhzDwxwUFnHKR2xNZ8THcnV6XStoccBtj",
  "key42": "3q9Bm6H6mKAYDfTi3BF6yXU7HeSUHNWnk1M1Ve34GxFSsovZBpS5LfoS76pRVQRoFMoMEpcgqyywkCzHc1FjU377",
  "key43": "3bCNbrN2GywEJ6oQzRBTxTMjffbSnFz4fhV7pjKqdxDKqQqS8K6qNKHk7LyckSuTdEmFfMdAstBjNQMXKbWvopbG",
  "key44": "FooSi7gPxdNsmLcG5LHH2wGZ1Y7t9m7gpA9huUjP1iB6bTzRX4nHh6r23PGvDBENVAWgMWgzRhZKFjyt3HaijEx",
  "key45": "63sDSKWJpnpHgD2ghNbvoGbLDoBGfWA99EecAL2UUsJyFZ153KSjhdumWoTFJvu7YYm5mm41DhpzPfpswHEJNjtQ",
  "key46": "5pLaFjPQeyanUJAWS9PFUQ8TbrDwVApRjFDHpQ4UPrFFwgyxmCPYt8yzKPWHthGz4nJEMkirsrb8cSMWrfUWuFTN",
  "key47": "2uLQ8SQ7smz38DFs2SGR8V9SHUW3su2zB1H8dq6J1aTCDrQFCocqw32FWXyT1CMKTV72QSxKWNqiERpQdv2XvQu4",
  "key48": "2JLJFPDww99ecVqa3C1FXuFP7wjSCgmCYtPEdDfv1HbaeVMWzpgovuFFj6keT7j7x18Fq8a8uUNgrm28dbCfTrFV",
  "key49": "5tRQbyY5XJMG8CM1xgW1W7gnksC8R2ZvNHqySHLrvKDNttYSEv8WZrefMfBtxxsr97czDne8Eih4tQwB3hJhVVUy"
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
