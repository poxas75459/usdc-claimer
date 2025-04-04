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
    "4rNVoQx8m8mbyQM7gczA5xc2GzkyEP5HEUdUCB7RujA1eE2UswcCGdgAajrejtM1bmYGH2NpaMYgLvLYBfoLeKx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rFdEA3ZsRnGoaApFFzyE7fidvr8vEsAiLm1Xy55RmXmxyLQJRqMv282eoSQTWCvGtK7mhoDm7Ut2pdzEfMzC1zY",
  "key1": "3Pn7GSmyCo63ykUU3kghrL83p1QXwkGh5XHPjJ9sWX5HqbKAZHzvisfknkwLiDCyAoRMbgegTpGPb2Xv3xMLjs4g",
  "key2": "vKQzp7h9efirY5PXnLgDu8K6GmXUPfeDdkddcqesKDb6ZsHak5KA4X5zqeG4ZScDebypqoHjofTwzVEJCWCNYrX",
  "key3": "LBW6JGKr1piYeg41L3D3qNWZSPTnixbqmtKxJ14L7WmZ2Akop4g4BxME4XVGC47pvBTP8QHnw2HCrAJa2TVyk8X",
  "key4": "4ETJFGQ48oB7nuJqzgxLUkzv9rzDsHA9t5pQnoK9XeAfHceBsvJS4LHq6gxqFxNiH8de8fk56uA3BNRt2PBk5DyP",
  "key5": "24h8DVm8myPyBb19KFX6RJzwf7iUaS8jHVseL1KAxmNksFhzYrEd3T3PB26D13g7FNzBZWgdiQx8AnAUfSTBMPNb",
  "key6": "5rQjVaPXxyzSJjX9uy34wJK6VjpigYvurPVzEvqAbmRimdyA55c5dUQqonj6QBRK1qK1EVUBCAD4QT9zPUS2AhuQ",
  "key7": "5XCtr5ogwrpLwgdPpeByhWqGXZU3b3oPmE4zma21Tmny4BucBMvR3jEKhtvoWFVWgS4odNseCw2JKMK4PeFVYBsi",
  "key8": "3vy58bp2KFzKCRaNHyJ1bNXY7jZfUrTAQEgAKH5sUhvG1hz5nTi7GFKNzQ6P5ZGK3KjbHWnxb5BqKRspeCoCp3P7",
  "key9": "bbvgcTgnsK4c387cP9L8uBV47hbG5wfWMnHJs6LLg5c9p6PBTzHAkTU1t5agZsGARMgXd4CfUPDR68ebLQwKUJA",
  "key10": "53iBBK1FB6Fn98os3bDNkFneNELpMhRPdqJdn6p9GyzvjYdA5BP8Dgxo662MWZz1k5sN5Zp86MfLAUpxAb1qGFak",
  "key11": "5j6ZX4AAgi7oRCVQ8QSzKsyooQM2Fb2sc8BwPZzrrxCDcz9Fv3Aifxc3rPdKDKnMFTPdknQzxKaX2zPnRk92MSTB",
  "key12": "3tPos4AtGcgp6HdbngehNWPqxVGDVYLTqJfzGGGdrJkhrh65mWZ2NFzK2o3ioXJWbUXFbMjVeKQB5iNMB9JJkpCy",
  "key13": "3PtUNzAisSzFRtyJBEYLESZjF1sy4nbQPi282cAMbwGydwoijL1vtcVotaouHpniWnue7nvRUyCh2RJcy6c7WYxx",
  "key14": "43t1SobQwudDU5AUCbJzsWTVS8nsv8nSe3rrYzaEz2Bh2722XUC4uxXPxt5YKFEQSiZhqcfdepw4ehRHXAa38YqT",
  "key15": "eKrV2PSuwzF5rFNVoT5bus3neSciTnEh9peSKWg4vRjoWkPnHV4osiZG1h1Mqbxo3ireWiubtUeqEqZ6hfzArXg",
  "key16": "wSrjqeGuLqJwAbJkWxyNnHTzLJ18GdyzC1ngc8ed4ZfrG4P9TpYWSvEVzgoMj9LSsDcHuP6VTvxSW8ZpnWt1UT4",
  "key17": "331amFPpSWjqiWiesrW4YVjCbLqeLGCzFMibeCW68Dq47XSzQ8TTAUofN3wpMkbm2Zi92zSnrBtDYAiaszsxqFyb",
  "key18": "4Z72qcJgquuV1G8rs6V72W8HXk4XD2WvEefMAy2yxwB2ydRCDKWdUPJcE8zUUGqLnpfjTLCQjvvAvKiZ6nPNvHeg",
  "key19": "3rrXD6XKZUiNwjDNRGijhwSR2fePVnTbyXp2DHYrJv63gRXcMzg7gT7JR53De1tuR7YNv3G472dsgowKKntfsN8N",
  "key20": "3TwRMJjXEgWqNBRYywqCjqUwaunc1NeC2TZBPizkgTEMqj5xS8RzDNik2jMsNnUyqrRG33fJiNwuwXVw4vvQn7B8",
  "key21": "2UwpwEktDyGctw3hVvbXspGzU7Z8cDMZDR595WhFdoxEXnjE45QSsavfDCKNdtfifagUVGWCDvfiXFCe6f4AuvVp",
  "key22": "bFjw3QdYhFvPkEunzZ9JgMrrcEFrUfqoUXHXXxMCN5NRc9K4JVcHWFXWccvR9TocczdMJWPitaUPne1xk8mUf5o",
  "key23": "3wPbuvQHeqGLpAnEUrGHS1PJheb2XVq5WT6p76i4dEJ7H5YFFGV8bXTpBZeC7k53ksDxRgfswUv9xuLec25KYve3",
  "key24": "32uzhK2ceiGXfDt8LJB3Bykh9DsxETuBa43bXggL1rjZt9ys2b9L33kyc1GtJFhVgjAnJKyCzKcz3pR6GfMZ9fFW",
  "key25": "4gs1ReiW2LGV6ianERFTipzreFfwWCKcnKFW1EwKDDF6CqT5d2sDrgZQDHepKj7x9Fovc6zSC9gin7Dr7PpL6aoB",
  "key26": "5VzdYeJsJqy1Z2W2Yut8LgiSb4nCUjzFVpUto5AHn1TKPerWL1u6FSfoHriKfexMwRHrxjCQLdwZGGseKFnZxgCu",
  "key27": "uW83QpXZnZSVuCsnvn7rVUXfpfpxNLMZCqsNxBVaLyYZCrX686JP1gJwJ91e8YMDd3Hh31XSxe8fxgh4gFmZa1u",
  "key28": "J1zkHfHsuGJZcUL5vAyt3DxNeLL8q4TP4zf4xLqT1cHf9RWELrmJvJHky2JxiKF9qiYRq8KBUS1kVWALpYmGYoK",
  "key29": "5YbDHdivjhRVFdbLzu2oTppokp1PfCyAfaw5HPGssj3zqg9vF99cHkRteQHVQSE6sam5Va2tE8xPMBqBWohb1YHR",
  "key30": "2rP7jpmitNBp2WFGZczKvQf1rg8VyPXCNAqAEajrkqmxvy6Eumme2kuSgNTKYtowUYcV4HueHsTvPF3ukUdNg3VG",
  "key31": "4cGgeQAU12Aqqg6SWWWw3mXcto4Biw745REsFCboXMxPXLqR3pa6f1fH9XZE6rVcBGyw6dttMcY9oSDgWAnCSLP7",
  "key32": "4sAbmFXAjrSqyWKU9rSHsjeqWYaYho4eLYEamwLTV5vZQ3UpQTWVBMtQaQHXRqegQpk6MLfppB41oJrsoxDA4ofN"
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
