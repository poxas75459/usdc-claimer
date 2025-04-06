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
    "4auTpxwNwKPoqkQFNRKeNoUgGcUCzuA8P7fN5XpiaWRPisXrCcRzJ9zZg6B2KnEsYfDcQEMc2rdTM4M2UoQpf9Z3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2msYcAvzEmkeDg3fW4ieGecrDqaFgcNswQFxUKNmevnS5MuYVZkXCEqr6BKWKM5jgn2dvDqMSh3x5wYyrKCwQtZq",
  "key1": "8ky7cYD2ZSPmByi5AZTu8xuJnug2iLLqkx1KwXFYGAQQb4JuWsrJWthgedq2WCG1gAufY77NTRrVgmCmCbv9k2Z",
  "key2": "4Bo2Y1psY2j2MJfPXUnkqRbJC4QocSZ6g612Tn3ZNg3nFVBC9JcqauGsDhtTT8SoRDPjU8cCJfUt8bq6YUmwFxc2",
  "key3": "2PLCfkhji14w6KoHUFmCb1sMuc6aaoGNjhECLmTJAnQzK3RPPpoTydfUZgdZccdBmuTLZ7UhRFkb7pYENYi3aUQv",
  "key4": "hxGdic3UAmaYipsqZdLAqAqAfPDipUDTHgcY523jK5KMn3vzCvdAfPu8jtAqW7XERkEF1fyYpsaeeADeYb2J4Ys",
  "key5": "5iZJ8P6vvtMU7cisJ8AYzKNNP69ym5wXfF9UnoMTEL9rA5rwwdukgMTH1UaogCVd8z27LS5QZr1AiZiVAbw46W3e",
  "key6": "4Mi5QMvhzSD3Rp5EEF6MtD7jvRGepG6HeY2YN8YeT4yFfN3q4tuTsN2SioBAtU6XbegPZsqj56La7MXp84KZF5p1",
  "key7": "42RbNN3pnBkv5kftpf1sP1j3DbcYZNeJcJDU7aerFR8VnwyFZTbLpf7rNqVDdMKKfGFC3fVAtTtLUm4XG8rLNr8F",
  "key8": "2wbhAi7JSHempArgWngDDjNMsdXp2v4bRL3qbuS5cFbp1HBkMKRDWBcZQpu1xX96hpuYAKhPJKZurzzAGcBBdtUJ",
  "key9": "52v5wLaWEM137MHhNe8EJJkMXbimwSKQNJhxpobu2d2ESQfJLsAx4WaXAKkxioYcHKe44xTYwnCTozWhLCK8Gp8k",
  "key10": "23UeDqYP9HTYtVstZygNaVyZcVuu6eZfoWdEuaTLBtD7bzjLd7DgsQj2RjpbUv42kvikGeyiXrHDQd1efscvZWmq",
  "key11": "3vooFbXXgcGmV1aPujrDD5yfL3eKh2UmR2obLpyjZPfye71pEzGVE9P8TpN7VMQgJsRrjTLB613x4fVWZ2CGMrmx",
  "key12": "3j3KqHUsTTvX9LytVRrGS5GmUawaDfVPtfJNYjbCmNtUgNjFZVFKNdD7PHEGWz5B93Atfy8R6Nw2SR3scodrUnUe",
  "key13": "2rfoYE7bhkNkwfh2cttmzKzZW8KjZHrzv788EozweYj7PeLFjCMUWiVWLNiNq8DjtQ4d22RNXtKkC9feZvViGgHy",
  "key14": "LZ3Jvbyp6YBtNvNnTm95FcUyPesSkGHFzjLv4SjVCz4fpxs1VCqeXh6pwZUz4jnhBiRRNZwPTj5LA5kYabw1Ge1",
  "key15": "3GF5XoELnSkhXx56MchwHQQ72XLr9U6Y772pmAxue3orsXSaKX3a4GfxS78boep33cCyBHgAkLVEDCkJp1w3mbDX",
  "key16": "4PuwWNscisr4Lw6Pngd5csbgYTzbbZkuY8dzeFsZ4PDHjTTZbDPPRcUnM6SoBhpootU6J6FifRUrMLT8q79xvwvy",
  "key17": "2UqQvoMrkwuhhut4wSS6pxqK4e4nnhcc8bf25XmRUByG7QhmwkF3ijZBw5GcMNGoa5LbfuB87fLdvorWpoZAHnLt",
  "key18": "4GP35LSpd61qbsXPnfAp5yZ3a5Ns6xQZB2S5gwEdZ1bB9aop96h59u6BD7uisYDjMZvpdVCNZBsoHCRL3PoWZtGg",
  "key19": "3fEtpuCxF7vGQ2GFx3X13KZ24LYPx4za9S4inLjJYnsru6YdXEoyPBMZh7sy4FfQMWcjLSk8En5XSHxoJCQSsD4k",
  "key20": "53SyvKsawvZVUAA7wfLCEQinKQjKHNfKJF9kHJTRNa1Hw5uRM4RPuJHvomJuHgA9nqXbeVHLo8NoauQfhXPNoqm5",
  "key21": "62nwu1dBouFnzJWFgYpiwYWGWEpiejAuPBTzhQvtEmVh29AQ5DQZC3DRyk9frPHLT2yV2ghscXzbf8xfDxqmt6jn",
  "key22": "2WoLUa1AD79CpwifjnszC47fViBmYj7y3WDzbRqZmThgtj1uXrNnwia3xoRWctbqzRf8hZY4m4FYZy6SsWdTsxK6",
  "key23": "5EUnAJg7UJP42u74WtsJ4Spjzkg56JLcYJfgQhmV2MR6NV65r3nRYbvUePef7XPtw7atNBs4LspcSKHj1CJL64q4",
  "key24": "iAEoWKoQc2SckGghuzJXNd97PsMgMyiitmW2rbcWGkbgFmKoVvmwfGiUViWkvtabSUh2GNJEYWgoLNika9QLdaN",
  "key25": "5mxD6zAARe7pNEHG1YCn4PpGdh8HYC3jd9CCNcqb7zU5A8xtdWhTciaVPZAnr8auRBb4NWqtNoPGtGhoFiX9bNYC"
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
