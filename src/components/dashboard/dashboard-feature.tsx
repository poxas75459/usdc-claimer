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
    "5R1Q2u7FbTpt3RWfqAE5Rc14RnfztHrZ98qVWeWVw5d7Qi3RuDymH1xobaoUEzkyRYjTv3gyvif3p2pwYVimY66R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EPdPWh2Fmw8FZvCuq7oRfqFddg4axym8d7cpRWLg2Pdrr48cDq92GLaJf663Wu9TAXN9f3gfMaKiXM5xpvC3RmR",
  "key1": "3fPvsTtA3vRF8fhi1xjokNQTepyLV7oYEhcmW9WmCkScWAcRMTLwhs2JqnEsdPfvpt9f9o5yNrJLSHK5hVJS34eZ",
  "key2": "3CV4UGpv7s2nm9D9XTHZWMQTx8oeMM3wwgsPCoZdaBLmcCpeMtXmWYzG47whNonzYjPG77pfQ7FgRCZXENawRSVR",
  "key3": "5XUa3RLU1fE6sT1JhWip4DiRZR7SC4VAFeQVQYPP14DuBWRbZb1GoNAuAgjc1NRVwJFzzyBi5RNYxTGK7YgrNjdz",
  "key4": "3KNuMs4jtbqfn6CPgmrx8Y5ksWPu71jBNnZayaMYeW493gKK4qaZztwmG3nG9VBHcogfdbSk8ufrhvzrm3nKmMiW",
  "key5": "493jgxdDRE6ZpwRMTLtnHWBguUQrouNxP8WcCJL9xuPnQm5RDoJDrrRYDHS5BZRMMzcdZtGUPM8NcnVkGjSXWjiK",
  "key6": "4kxgGMYCPmP4cvPNLhxgZnDpUsTdUSpkSNCBkwUNdKfX1FwzeDwVacQyXHt67BUTuzSR2r6h7cXoDmhQfgReAd76",
  "key7": "3mo2zhMqcYRwZ22PseTNPQtb6j3Y89S6x3uvSZMFFHMxYpUSci8kjWoupK1FSpTYsbGPzcEkoLA9BVSkX3W89Db7",
  "key8": "54ZnYyKPBPNnzxf6hNS4jwQeutELmrDciMZKUW91WKv2M3YCv9wQs4du8FN4hPckLGdDZBVVSMPoKoQZVq5pTDeU",
  "key9": "XM96NvwMitW6UwEAQYkaJAncHzt7r1bRAAuwifmpQ7MLzim5iu8d6w848cUc94XhhZVrAFRcAwZ1TggFqyDiBsz",
  "key10": "AT5hYfEvKYG3eNwqBrzHk9faHUp5wUzbTzG64MhXf5EK5MjV5My5aUUfTVbpxjQB8Q9M9mYApd5JkobkAYev29N",
  "key11": "4ohDvM62RSPR6jpNfVuyzqrwRhbCnDjC2x71V9BwYPxE6eGUQvRgyC657yUbjuJRfueHwGVPKeEysetfXzf6RLAc",
  "key12": "2hbVTuSogi652shQkEHqeY8VdFy93cMteoqxYFg6ieGg1bnU9xF5vWtmtBgrxaCFe89fbzpBfGshVrbQmwQVjsXw",
  "key13": "3S2VsA7YhTYde6fDTS54uEtecJhGTkCx2pgFJfjkQV5gtb96fRVQp8fVjtw5R1qi7uvQwq2vwE7yxvwGEW5EhMkK",
  "key14": "2azp2xYiDDs94EfGogeXynk4WdV3d8Mzxep9jDHVC9Y9y9erZ8oUZsbRagsZbweWsBkpRzWdjLhBDoSJWT2pwtKk",
  "key15": "4TXMmxaLhULn4UXhL4bPgPWmxdnwP6PC4JALp64CkXUjxuS9Ebi8xsNybFvUnLn5io5DTBuPnTj9TceRtbEPMezb",
  "key16": "2MDTFkksg7YYr8QN4GeDeYoX1ffcQ4byFRmaWHHu1PAQup8nkj7MDPYQpmMWf69eu7yML1FLwCeqNuhAHUUTzJkv",
  "key17": "3SJ7mCqfBSSFPKrJrfArSkswmPBgTqj3FMpH47S1d1krDt5id98sWj6d1iAWgGuXruQoAg89LArFAqY1jJmWFqfx",
  "key18": "2DHHraWVHZ2hSxjupEWrLULeVN3mkkQpn9ecPpDvomsjXYDuC447XTRSNwrYBihRA2EtU349WofekytoBnDSdNLL",
  "key19": "4CDNMdh2umdzfPrp8vmJ6Tzx5PU8sL3K6Gp5Jzgj5tX2mB3MFPcsYUC77PR3bSqaE67bxuvQzT2qBLb14ArN6QAe",
  "key20": "2vGaceRbopbmbkUmvbAKEmiCZnqALACmEza2uANBfsAK55tyYH7vTAKREqt9cFYFrVBfCMkP3z63wr7NCwAVXPfm",
  "key21": "2T4AWH9mewz47HjaKJfnoy1fepKXyfhFVGiszEhyuXqm8znyWzECFySW1rrwHxE8zGLqYq4qVUqzA3iGnySvW7he",
  "key22": "5LG2Dep8E6NLZaUWa1HvDjmdAmPaYicf8GnvWCDRdfakZcPVJtbwSbK3h4p5CzN1yY8X7rZJXhgvbX3oEyKj7uS9",
  "key23": "5eeXZhpbkj9uW5T6vavM4JQRvA3stwtNp8cZXWvWv9b96GD1fmtR7uZAKfT6tMa816UaDJDBKmJgRz9tD4DrinxS",
  "key24": "2jNBrBV7Un1z2USGb1F2pomxqXDk32W3sNX7nXj8FDcg6TeKp5SbxmwRitzb53g4qR1EAPhEWhTVnw1LyFcCWakx",
  "key25": "5qxGdFRB6yHiC1snhWDMRCn4mhY37R7EnuEXT5S7HWTa6hhzKfpUAgJzsH1xGdEg8GXc8hvc7Y7hYM7RtbCyZheS",
  "key26": "3CbEEbDb43ePXcXKmYWLsLAPvNoQQfiDWCosfx6QNPHHVQWea224s16gSyGq9dpc47tDyaG5THgT7ouMyytbWzWk",
  "key27": "j6eieUCufBsycHAdtud6pgYSZf1XhaeneRFRMxjYZLHvKv9Hdv992kviroEUd8bZrqtAJppCUifW5Npppog2Pxg",
  "key28": "4qGPEUB1vaeEgs81himfNqrWkraYiT2BTVo5eKJDXQzatDBohEUevEdmu6bSYE3NHBwppgNDjUGDYWEbDCdCMGyw"
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
