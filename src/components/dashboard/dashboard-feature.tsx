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
    "5ixrjSfHDkAZphiXaXakJiP637JtVSUqeE5eGJsG9crNnkFoQxiPVKMFJbsLQm4X7mi7cRcKaoQDMMzkwu7tifgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ln34AEQXBb1LDoqCE22R2SzHLFHghndpj5FCuvhu7kgwytaN2vGAY5658MrbWceuKW5A3jy3zMJ4ugdbChiQc8X",
  "key1": "4JMMedGvoWxw8rhrW8fhgFDx1xxBXGp8m8XPNGAeAx6WDysKRbziWAMFrkXcPEo6CuadKuvvKk9TmNnUNg5pCcVR",
  "key2": "22VstYWhAWb5TYw5X4aJHdSy72kkaT5ypTrTXbY8S5U1qnKHF5nfEcYTtz8Hjn9guNQu6JCaxfUyjJkY4Es3j4Qe",
  "key3": "74iYWo9NeWeQswV3ytYdPksThEwyyQp5z8XtA1UEsrP1Gs8Jarv6LwZMze4RT2r8qzExfwhYtn4i7FrkZF7FPxV",
  "key4": "5XyhygA5yP2BMUbrtgyBbkhWsAqmpWb5Mo1GpetpQAW2DXo652bQPX1QiebyDNzGBWUFN9pX7bEGw1mKzH5GxqBn",
  "key5": "4b8aNtbEHKpe1vBSMQ9nrZji4sta3WioGaWb8JqQZ3geaqEkQV6UMttWkzpGycUPvvz3L6VY8CXhHF1QJsDHhSVZ",
  "key6": "28bKJ2JijxCtvq9xPx5dgbNoxLo7pV13FVb2XaYMrbueKeN5fTteYt11uzp9JjEXs2NqqkccbP3txXtfV7giChar",
  "key7": "sHy3vztsXCV2kpskfk28KhZvTdZyiXHgapSYaAyhEzAKfots7yzZozY2oq4hvbEGRZxw6LuNGPbYFz893ynyhsF",
  "key8": "3KLn764PkD2BSst7MmZDikFT414N2xbjTVugEZ21mctjtbbSDophHQCLiT8xgxa9pbDZQF3AVKGbW9EGoYCm1EuH",
  "key9": "4thWGxgLbCWqL93WMFFCu9jhtis9a7kidm9bfzKvY7bkdnr127VmPYX6ivEoyca4pXEAzQLSe271s4JgYfWMStAX",
  "key10": "5ewjH9ErBPRDTyB1RWHNkcfa7QYjUTmHxpLirHigH8YNp4UPHDugpbqzmVThHSDTH8TZxke1GnTJa1c7ZRV151kt",
  "key11": "4TCqR3pQnpyQBYMRX7wd1ZLRgr84sfJZWBckVvdqu9Sy35XVaHXrC3vUTSsGrNmDwPkeeBkKr9KaBaEDzUi3xzmF",
  "key12": "3j2idWNusQJmJ6mj5XNQgLDGaQGHXvWiKgYP6VTtJrsye3KUXr52gaoPB6APy1QjxABRzHLHGPrSj7kXpC4xzBDt",
  "key13": "4D3DZGVAQ1nMhgRU2gyxUUymHgvFtvsmhWA741rjctLE6cRKMEKennJ2j9ZQFTx2u3f7Wg5p9Ny6Am8o1S5BGH1v",
  "key14": "RG1Je3ERryUoZYjnRy8ZZtMSf3zoLVoV2VmAddnnLZxz5GDQyrwgDgiCuE9YapHoMTpB4yNQT8Z5JRRayXY9FBk",
  "key15": "vqWMFs5id3X5x32s7H8Ns5FzozHjL2DaLxp77HhPY7R2C24LkHgxsMcqZiMneGpvUwSFb3MfWYSnsz3V2MpKCLM",
  "key16": "34orfdzynL6hvdFKXE6DEEsG3Yy3C4pF33EsroAXu6CrEbyRKs9QX92sCBB82jnAQzxV1HqhKTHXRQFZZszuxevg",
  "key17": "62Pn3xK8TABzdtXcbvXvgHQ3f8YeTUGa3iNDnfgYrgoyMrjeGZaqK5ge993Kkos59VPc9QizZyV65eMvy1egtoLw",
  "key18": "5ms3m8agHgKwixdzjujiD1dU2RpFYVpva1m4k8EMSTJUESaaKWX75anZKgTHFi7YHTRa3HkYaC6RNLT1tiECiVYo",
  "key19": "2x3pUqVgwE4t1e26YHgw3mKSWfGoH2gaAMkU8tbnQbCxJfCcQdgiCnJALP6sDaVBKD7zrFHRVxyFj6jC5vAgxXi8",
  "key20": "3zyaj9dC8Uy92hSod85gXQFukwSq7xCutA54Q3CckjDFkh1a8f5698oFbEGUgLciuhRcMoZD51gN9vhcmdaGFM52",
  "key21": "3n3GMrF5N2uLbiBNL6NvGDXtt9BPMyZpjx8uGX6MFw9FbLkr7Yfzj3awnPVrtDhVdY3VeFa6UmaWp9ogBCNXKbQc",
  "key22": "3QWoa385QDXLuk5fG8o3XZzUR1pv1WkkncR8Y7ATD5NDX3aSPKqnS4G4UMZPwPtkpebHGM6sShBZKPTgcZZi4L9p",
  "key23": "5D6s6KcVCKQwjksrFPSPioZVuHAn7F4Q8y3DgU8a1QNxQuq1S99N2mfPqLQnoX4VL8UbuG4xY9cwRjkd1nqgwYhj",
  "key24": "4HKSS3oVHMryWNbpERHLkAEynJvjEnz42izo4fUFL6ynJgUTu77Kh25Je3jnCqU7nUmMwg24ReHDcvbrTjBbs7Hr",
  "key25": "2U6o6YSbuNMX5j359KJEQawknKeCsuU8ggDcbzKmVdygWAsNoxqGziADNhV5kyWB2D87oGDy3T2F5ZTL5aGM5Krg",
  "key26": "2weMitpexHz126AFjztQbeBycrC3ZYHBkAZA1pTQFB2UUBvaD1kKgPJiuiuCcemdbrAiSbDTYaHeoeFwMYeqyEzY",
  "key27": "498L6jFWCkGUSQEASnDFZC7VcSBtGY71rrCEMFutsKTNq527RZJyBbdZEprXwnboUvZW4Rz6EBVn3TKCu7jVBSta",
  "key28": "d5taub2vduk9ARBvzLZ77JJGtiwvJz76qBkDDdWtUZazrV3RXosPVp3B7SKCnrbS4ARhSJNsWpRMG311Jwmn3wB",
  "key29": "5nsRBYEVH7L34JNoE5chea28JDep2yf2iCsf1Qoruo7EG9dNdsXyECGkGAi6kB43d9isCrmRBYJ8tEK71w9hKdpb",
  "key30": "5T7LbGmZXmTSDzzTK2fpf7JBtMhuXmtvvLsGComwdM9e8gbrP9RPzv25K2gEDUCyZw1GX9LKDsf5g6PJ3TGXQmmR"
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
