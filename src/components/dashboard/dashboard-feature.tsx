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
    "6hZKtGBXTJLkG1JvzQ9AtLo7hzoHazEj3BgRd6W1D9ZMSqV1PcX4nbWkNav8dW4VYPMBaYj9xuABxManpxY6MRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k3YHyBNWGSEenozSstAXNGAnE8x65Ur7cHjpdRFb7HB1hKv1XPLAa18YuEvrDnFxZGHCevHu3uZW9UbRidgMMuH",
  "key1": "2Ah4mmWL2KEgcs8VNiSMs914ics1uRGsng8zqKnUGM5eEYtqRTFfhP7F9Bf9qBtu8Fs9zzyGqeZM73KWmR7zb1Pi",
  "key2": "WvdpsFPwjkan5B2DRibAZyzqDfUiQgAhVLAeHPV48MgbJCVuuimP1o8cUa7ohvNZU6KwjVNYS9eQmNePoi2GfMK",
  "key3": "5D5YTq2UgWhf1RwkhLMkqP3Waf6hQgaf7QDTGb1EDM92TmSw6UrfiYUxRFrpTBh3QddfSRmpi2Ku71BVginPjH4t",
  "key4": "3kGnHRsNCYuL7DfuRQCoDLtGrXNomkpSAjxjko2PfwNCF1kRLMzc1cFmG8mnLi6KVccDq2Wi23tL1X6sJN4c9mbF",
  "key5": "3524gJR28ppvwAHkTMwmxtMsUaJQNxxHnqAX3t2xKcWJT8tmEHZRNHF4r1pSoZCHaqRgPFKNRALNJrxY9T2xQ3tP",
  "key6": "MVHLrDMN7R3uUZUSzKisTLRCV4HeAzfpxuSP4YCsyLF1JAkUosPjcxHjSig2mhkhNm9MZCKMkkFfeVbjEND7Foq",
  "key7": "3WYhiMW2x2A4ojnLCDg5T9HnqxChgTfyCswvHtinTo87LthtBcB3knkczzAMJMSksnoun7PWCb8CYX8qnU4ZyZh2",
  "key8": "4XMmZL7FddmJJoW3WUK7poWy3pj1TfPYw2rnzWRxBTRocd1ssCb5srzKJooUSNJFCB73zXJcGchGFXXo98dEEGq8",
  "key9": "3ZKKZ9qZjw55hhp8TEdNMqE8yakQ9exLFL1FijyWUifB16kGnT8QTcNASo6jy1GNkZHq6zDijRNTZy6YzD19i3Cx",
  "key10": "eZGdh8hvD2ctog11DGrQuNQhkmo9LVkpVxAgmPNP4kr6BUcfsX84Cg5jcrH7VYPSqg6U3gQfx3TQKbZsRic7itY",
  "key11": "5w4Pkf1EZQw4kMQFPrrYCXzhHvfuquDGPHq44c45UiZi4aa8vEDU6kHstZsHA3juiN8fEMC8JjtweaRnNVfFFHGs",
  "key12": "3Euk9ENVfcLgn1hULboeiqb87pMbJFwKRGqg5dMBm86zBA1KHWkxYc2W6jUBqRHj9xZu4d1KER2yB61rE6CLbigN",
  "key13": "4GsuCGv6XEJWestHTMe3AnDv4uZar3uu2nGS7taNBmkCspB8rgimKnDPChyKgWJnfiM8peLXtD3fY4AiHFteyoHQ",
  "key14": "61jTNWx4fR1bsrLSuaBmmgHGN81DX6BPVVb2EfVj8RTLq5mFHBbNqK3vmcGZyhMtxsUrLpFMuZ4McpUesEidCSWH",
  "key15": "4HXFmUNHj1b5eWcNoxaQeh57Gy38mJb6K7a6DpWdQftS6KEWinbuCw5ohm691cL7YTGiJbnCheXUKppoH82RUdCF",
  "key16": "5MfU89QTTYfvsNPJRjXApsbNumHVtuSFDERAM41C6Xf1rCoXHBx1VEuHwShRwQdFhr92MMJcR4uGeWEvqbh59Uoe",
  "key17": "3GPemjyuz2mC2MVzYRU6bsQYZKCA8LUxnw4gZmTbNNc8XZmjtap7LDkMeof3UAFY7EWzyrB5rJRf2GkdkuRxNn3D",
  "key18": "61vuSJYUH5whSgU6v2so8df3kAaaDyFK4aWHqXNcqTEaPZwto2gtbd8xYok7BcqA6WwMSwoh55gJgonZBf9ZGPPM",
  "key19": "2U7Y9iry4ksk3usp2kfdh5aAYG27LMa6HzdVewS6dL2LEnxStdb1wvx3zoqStZ4nsjTzHe8dnYF7i4QLL7iF89KM",
  "key20": "4eQFPYY8HEjsKERgEqmhAMWKgGfHdMYG4M4M8yWoJSAcZXboesKAv5VT1dTU3cvzMqBHprC25BBhiSwcEd4X5Nvq",
  "key21": "MZymTm3p938qYdDqAZ48SxmsuQj51Me8W1AqzpBUS9d4AhS4dRwpYf6cauMroYTdQWgCpygYTxKbbtMjAJakBco",
  "key22": "3JnSCTXkL6gZraEUeXKyFhEdjUvKh8tKhWvCf39N3jhETDLJ6gUbA1tPBxEUH13Vy4US9u42wE2XfiqmajASdksk",
  "key23": "3cBBDUuGcCJtctn4eTcPEDhAQXA8S7StkrNrZFPDW2XcvTPgQeD6Za2HKDRnw2hnesaxqa8VnbRLngzH3c38G2b5",
  "key24": "21nENFWcpRP6kvB3dkru5Ew9Nst5jGqoDbJASVfzffHR95VQK4GeMUokST4zBdPQ86EMLFAn9vMgMgeYipeUaker",
  "key25": "624eH5jGEM8HTs9V96W3GvRg989rAenNjAdi18R4qYGv985NpFpFVYvyXAWfKsx93TFPtKqeiD8Rc1UgWWaPtxgZ",
  "key26": "2xNh7okGrQFJs4UW9VQtPEBXJhmgURBAvXRSWCssWoDfj8Vbvzbv5bupSZQVfVhT6i1T7rj5yPCCjt2kSiW3iG5J",
  "key27": "5maCoysrVc3FappjX6eSdphPmPmTFeafuR2ch8RTCa599WJeKYvxyrvvaAhxteytS2Z4GRR5eumDUJHvCQ1ARkJY",
  "key28": "xqTkaGdHQJnHMUBPfKA9Qgz26rcHSsq1NnUBtLEcsdnrmfhLLjxVw8xqLS8uYbY94aLjoVtKWtVRdKeFW8Powgs",
  "key29": "282adnLdbKzw1SsRu4cJMybhPiyzN1moyVAkMs52gCsh9pBRghZrmN3VxRNjpcerosvYow2Jp4Gd2zMhLUAJAFfp",
  "key30": "djgmcFMYmEDVhxXgtmnvEPUWdG7JqAGXnpwPqyYFo2Sfh1BkDYC1PMRPAdBMW8BfgDwWQ7QdbqxYkwuCPrfEQrF",
  "key31": "vhPWP3BKLDMpeUu4nTLdh6CMYJPhcBK9MigugrW5Dxt5p9AgXKHGkm1uKTd6NYFvYqcZL9MHQMaQnL1zcssZbut",
  "key32": "5ArTXhGfsvZRRsdJ2km9vY4rhD1jjAYViFPhXUvfYV3zg7AoMszgwXUvrD4A18eiiqsXs2oTCdPELGqWjZJqKzFV",
  "key33": "5yQLyWfRHX9wvsGNBzo8fsEwgS2XYhrkjQ9y1sBK1MPCs2UWumRmsQYsvkk1EokUhFhtwk5tivEkFkTF4euKpUyx",
  "key34": "3LZi1r541kjE6i2Fpq688fXBUaCzTsi6RVSZboMmEPrdayYKCMUs7zAUmCSWbYUupYH2pGVXEqNC13U4KbhAM1TC",
  "key35": "5pQuKtpgiJ6eYyR3n8rwcEhHQZ9EcrKmotBUFXphUX8LLjitjeysyKTe6XsYr1Sam5rrqJznerACNjgvRT5RrCM9",
  "key36": "v5bJrDMmWjXTyNbr2N1XNdT2UyVindsvpYKocVXdsPgmrB76ZpzQ3FsqUivLuDTwZLSUXwwtB6mRGXbCXS4Mfsn",
  "key37": "5RYZ1VUDVCkWxZGgDCy5YQ5R5nbBhf57d4esDTYKYyj49at9fHXp1eZDDud2v6inyxHE852sZhtE441gJwCsUSsS",
  "key38": "2bMcND9QR1xPhS67P1qRo3FKkAv5EijYL8HY14etrRGdTWuwtHJfhTyJQ49VWrefwbzH2fj7uFR9AP6YjDDkcVdw",
  "key39": "59CbFs7EuV4gMVPmtLJsfmNcBDgums3mWQEoLtDUx2LFudBv6HMTp9uhiTqmhUvkn7n2E5Q9PjsXypABdvM9ePTD",
  "key40": "4oWSPGx5w4LgW4EN8Qxh1g6gWATkbWcHuL9bLxNxu55Ko9bssknVV3VYNfzphVoZAkpF3yyk8pbA78x822wXK2Q4",
  "key41": "JCrMoPZrFNuNc6S4BCCN8DuhozgGHrQ2GQ7MtFFnsS8sn3yLoX11uTYKbepJH8vtVfrp8wcfpp7rSQg7Pbs8XwV",
  "key42": "3ZVM4C11Vyif3tTbuSRQV5XJpXsmoNv96nvAFQqLnk81tfVCvHTnx19EsJ2Xoun6U7Lpk8AYRL5CjHUnN6w2rHeC",
  "key43": "cqEWWaRnxogMykEBPR1m3FV88Xc9y9W93ARF1hddUv3buvhY866LXZ2vZ37z1ucgqSinegqSWiEkeMT5Rx9iJfu",
  "key44": "4moKJ8BBLmEL7Zshnk7ghXnJ7gJbNnuKj6jQbgWJZYcKZbVAArkL2Gdf8q9DqshBPbUwBpUNuHTVXVSHdYYRHHqH",
  "key45": "5xkJDLN6JnEstr5nP5bxHcnZdhEQVKQTw3eVQykm6PFtHdCCe2ikFSPbkzeYFvdbmzGHq9BPqLfZ5p6SKF3Ns71r",
  "key46": "Gp3538SXdPmW7HP76GDW1Ux3s2YXE1jcQHnYd6otqF14csfZDuA66M5zAdoUAjToEy2kFzLcyuJ9nHr4XBifno2",
  "key47": "2mEiGrp4CEU4LmmSvHiLD7MFeMcVG8KYPZBVjfxMQFRRpNUkwZNsCQuMqPzp7XGkeU3ai18XVZn3RWuPRctxYeJ4",
  "key48": "2eg7aj3wJX2D3CXPtGV7GbkTous2sDEqfsP4hRRD4tDZmcReniJ2hdgPfBtb7N6hToqfhkAiRu3JJ4GRa7sdHf94",
  "key49": "5vUmNvTcZzkRjbdDv8o5auBSMuxnLnFCvtMxwN6gHgz7FSzjQrQvgQthuLnNtTrV7p22AvaMUybbmrBcSv2Gcb86"
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
