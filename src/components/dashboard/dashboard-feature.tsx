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
    "3CheSF8p67hicMeczhBL2AwPDKtto2GCiHsXtfapRxSAfYpVkm9rTiSwiuP8x8p356A2jRpZ77jAfaQdm7THVwx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48cUuArHFL15EsrrFUq8GiQZemXj9zZqpKUzJu5Q6VmECsDCkdkUaJmL6prwgwDgv5fB9mDtHScmfDZzhb3sKqQB",
  "key1": "4NeqdQvgemGY1u3ZsLdEDvp3sBh4pNTTQsoJwREmV1ZNo1Zav7Pp7dg2sEYea47BZFZXNAjDdM6YYwT3EcBD7bcK",
  "key2": "4MCymLYyoW1ohV9NRpNoA6Ax1jwKPjiuMWzgpuYQ7q2SpEN4wPUrjwTgQ3E5h1GGh2PrqKeAdJbhmfgWWhaVaH4k",
  "key3": "3ZrATdffkwZfq7zidesU3Ce4dEraevEE25kyfqjEGpfsFjbVmH8XNXbhUdxnDrnWUG7LsH1UVurwweLmg6ajjCW2",
  "key4": "3TxqmJYHMJonw8bCQz7jKBDt5wYvf4pW5fxitzkuvjBonvQFzA1BDz7bQ8nQEEGy2JcCQB1EXRWVmb8gmAWrRZWB",
  "key5": "5JDmVjZffq1L6Gkv3Adw4hodnoam7rsnS5nmM2bBNdp53GsC9hugGP4tk3gBcK8TRjc1ijTM242ffS1LLVeVKZSr",
  "key6": "3neGU2fdBG4Q23FCCcDuiaQ2G3e94vpBGXztSk2DydMcjRWCGj9285VzEpUZrwiXmeLoWJVYNzibDGFThnjuREEA",
  "key7": "4kwJyjDS88wyYLR1VG1UFtmAtssQ29Tjob731VpHxFF8KUPVyHMK6Z52wbys9EVSKQoXSsVr2eaQoo8zzHTZ8p7D",
  "key8": "3eZXNrWJssc3No9x5U2iStGAA9g732jYomEfNcNGm8HshQjNbZ3K2NyAH6dcRb2RbNfVRnnj6eBUaBMLaRDniwGd",
  "key9": "4X4F2KappJiqD8Luyc7KGuWMfkdnq5jF7pWt3B2erqSdBXeh6CPGnmxAD65zRAS9Xi2CTzbHjPBa5djECY5LhGWk",
  "key10": "2hNHhuBkCpW2XQtejie48YxndH8iYETYHMtB8b9sGAfTRh84jrU2zrWJo9bXjAc5vkzXa1Zepu1ektcftG3CPLa7",
  "key11": "5Hix1sR6abCh6cfRo9mk6XiDb9bBfDWGsM36NtZiDjVn1Kc92afdQ6r9DThZBqEK3R87m7wKPqihbLmaZkES1GZd",
  "key12": "VQ4KVYQVFHuB3diaEYF4bPc4MrQ9JZV3B1y7rCTMJjt61NSNTZAgdjqRpB4D1AaqjXiw7fWd8cG2jtc242H8QXd",
  "key13": "2c6vtCj3jjEQ3SgmmSPnRUCoKCvPZicFuVE9trVDsmYftqkRB1JqDVLjNuouXrgwjJh6vuGNFXUeWNCBZfLzj8t7",
  "key14": "CydmduvnSFJJJBsmU1dxgqJCtCuxmNWShnupvmygNXGWTTuwUVe4QS1Fmoo7i7bWDH36bjPo4xSZqqESDtvQcHM",
  "key15": "5ey75VijGz86LUMbRHdFRzQroH5byKowXJ61LkPdav4x9A5mTymzb2aLicpFDK7tBZ59KgPZVh2X6PfBudEc6mW9",
  "key16": "3EvXvTkuGc6RbJF76nB4d2W7U1S6K54TPo9oY2A9P8h7fezAyojvpW9pdXbL442QXNLEperBTUfeDE3N6w3HxgHa",
  "key17": "4amdUNHizxDtqrj6DUkrcBtX9CKdo5ByPN8QJdZNeP6gEM9GLT4cU9pXn2GiKWC4EUQrFsktCKAYY2AXqcXqZAvh",
  "key18": "5STiLPBg3Yx2YfGWigo6C1q4gWYjhQX7T7RQEU3jnxgivGhh7mTCXKFLXhYyHVSpEni1nUv2129ocqEHXq9knHEG",
  "key19": "DT5Pi7AYEwY2CgLeGv1ULm4BppsqMy7VcqioE1h13iPJVWhY3mzis1zxojcTGhpzzTPx5EbQtMQ7mfb39rxWgiR",
  "key20": "4roZ4vfacZTnm37bqxvv5u8Kt1ki9F96FnSWYB1N3GPp6wxRq3keByht8DRqCyiMnHasX5u3n67Ldd777FnPoNK9",
  "key21": "2PQgeAQqBhrw4RWBfyoRphcig9eRfBm22wBuBRYkUcLfLomgF38TZXpUSsHNkNurKyZ5Qw5LF35nfArEUHb5jaWz",
  "key22": "2zQ6i2YGPXkTqGGXsjQkGKRhDgtXuyK5skWLiV4TUeXNK8FxVFNByEnJMfxk2XQ1q1bBBKw3rdH5Jm8ipm74aR2C",
  "key23": "2C3VY2iuJp9UvyTWEEzgFMDNEqKcBzwYj3AnfNrfrG6RJFCgPGhgVfyPaMPGx19eftin6VpGsKNyg2EaHNmXaRvf",
  "key24": "2jeemXCUWjJAF8YGULP5VKWJLsRmQCHj4StZa7z3fdvsUWskShxsHvPKD8rVw8FEu3SSpHLXwdpv1keaMmffDD5J",
  "key25": "5kpyURBftujMUYYMBMs3KGi9M4evfjCaQSQaY5H2PsKA8d1QywKZ5hbWxQh88ZKBLUAGzfHSzS8LA57DzVqxT4FM",
  "key26": "4Cr1ekK9R49EbPMWsTyLwXr4xBHRkbKccGhhmEiEf4AqSBNUf3habjHJCqTa6QqQXi2L6wyH4YaejrsvkSXy5sbp",
  "key27": "2NcoCqwg25EhHCNCMnrcS4WP1Ne2sNpaV5QBKth5XpcKU3veS52hFnrC95AkHhdnzELtBJ5T43q1tAmshWtcbyhA",
  "key28": "2nGkCZMFae8rtU358yTrNxvdAYUVDCBeWikUfUpMgWVDKiJAwWUmgtU3BMAZJPiibDH4zGR8rsbTWCFqzRxJ5rJk",
  "key29": "2vEUWRRmsb5ho8KMfe9bxtNF5uQQE4YUtz18FAVajt1RuzdwYJQNs2SdZQchm5EjizUWY4PdFxAbfSPvMM7y8GUG",
  "key30": "2rxBDRdeAju9Gwte8KWkaXsXRwcCCacutchvRbZAB9R5XfN7Hg12oZ5bjWYXPq5Uovod54ivb8nSvM3JsoN66Xk4",
  "key31": "2ouRdSSeiq9AryY464LNUqQmXEwVk48URzuLzWzq46NW6PHpenvqypQMMMHw5QDduSbta7zc5Qs6r89wUozKRJYh",
  "key32": "65EBNuAEXLQ7FzmzhAxy3GQYf7Vys8sveLSQV7qFWvzCnHBLZUSUY4wtDmkxeYCJUMcXkhxWufuGnhjnXZiCB7C5",
  "key33": "4XDzNg75vRZxKnbee2ynGqc2Sry9et33k2FYnoRWXFTc55rewt79SST8SvQiXbmSXif8riTYQbXCJvH1XhSH3iQd"
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
