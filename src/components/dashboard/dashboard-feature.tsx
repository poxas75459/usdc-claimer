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
    "URVTfRWcXkz59ntBSVU44Jqo5i17bWijV25b4rudSFGAf4CxDF3pwPtMKhw1BhUcyk3vz24qz3MxoGDXcqBqzky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zh2ZTXTQv8fxL5ftWbuKQSaLzVUhYkMRcNQLLsw5ueGpsEMMvAVrQcQY5N8C5sfpY74tnjzHjeGg1DffPtpSpgY",
  "key1": "2o8cuzKusLd53Zmxj1qSdMdH2oMR7EKtTdQHVbtwXxAEyaYqZcMiRQ1FVTxPrvv9uhAhXwoxFvH5gikDP8eVPxwe",
  "key2": "61a7TPBddM7XpwsE7wL9yoZA9srdrzQYRxyaQroCqegaqeSWR63NPCoZtGhk1qXNKLCr3GpqdKNyEyhcjusqZjUK",
  "key3": "5X3JEBey9Z5EFoF3R2mrevzjSeB6pE3yD1ig2WBhaFWqQyUfx9V9icSbDd6gZL9Eh1xkQRBHWM4W1FJdx7KamykB",
  "key4": "37NwLQXy32qkuLKCSyrTNY7o7F5JeMtSxNXWJ9NaERu4Wwc4zFGrS8oLWUFyiLyVFgu6uZbjfJDGDA9xh9fyBjCK",
  "key5": "3CqgGsbC1pN87kB9sLCDF6pNLNFYsCyXJMbwraiSH4akvCqyjWb6pYfSF8JapEBrBnjiNDhj1cGmbiMwr3ZSntyH",
  "key6": "35xoM2fySGLx1xSqheWeAQw9QJJGgGgLjVYyDGCnc98NmkruVbn37ZQvLGfRChRAFeeWCGWtR8RBBMKsxYFuNB29",
  "key7": "7whiHF8wPVkYKEbTwuwdXXtGK8T1Mv4XVCdNKgkzR2KbN1GMQTxBEKDGjQDMWahiiM5aQFKF5kvJVZo7hh6cqR3",
  "key8": "2N15AAjEeFVGr7LSbHd92F4qmoKFivfGEjTsbypsW1G8fCA1vBjsUZTQx43yFZgwsaKc4sS1bK9djXS6kBHC6k6N",
  "key9": "2DGJxa4GW9T82gvxBx5CpDX3dsLu3DAYHTNQSgHELFXmHVLkqQ1rPXPLwH2PNJ4pzvZ3A9ktqFsSfcJq61EvAsCi",
  "key10": "rQsoKuhfsYJAqZLj1YrKffTJxKstDzkAydC9CyxSKeMSNR7d4znXKw9BeUPmgFTL6se7pxXJcsZiTeLWGw9nqSo",
  "key11": "3kPPozTaX9G76Zb9DJLJEy2XvL6cfXE8XVgn1p9pJi76vThagnQNcAZ1NueNpELMfFkkvU6KEVXH2BxiUHBe2gR7",
  "key12": "PnJMxSHCbYDCaX5qJqsYtL2XBHyhyCt8ugNPRH43kywxXeFeT5jhb5P2T2HvNz6tDziqnnhvEXvcjhXa8mFDcGe",
  "key13": "5SNqWhDMtQomUqHNWCDwTiZXN3xEqBvZx7EZyEYHGTcLAraByK2qdoVLKtEapvHidfzUBcaNMueKEkMn1dktQUop",
  "key14": "3T3ngB6iM2EzAmimvxfCJtFPPSueCB43oNfCzwVMgQ39pKzwyFk5BurbUo3LyfomN6ncLthSbYty7ZMBFQTg6YV6",
  "key15": "2XY7gtuuLhGyQQ9ZQvCkMyLEFy8RdmwxB1U5eBh66YLXc5zVpd2BkNz8v54BjoJdgDTouEJEtpS5oxqtKYutEvGZ",
  "key16": "7xy8RnTYV22z29mpo4jPfEGppgCsuVyBrPvN32gYA6Tmaf2G8vrb9pWyDnfr1b9MWwYB4h285JuWD1At3NrujmD",
  "key17": "3o61eQ7snAbb8xAM2fL6GnrvjNjwtiTeHYbzydBkp8gpjKjJUwnKg2YKSZ7vmcY29bM5ry3WNqFpi1zNBehU53XK",
  "key18": "2PZ2EaUWq6jHCLjVdy9iGWQ6XrrYjNy8ursgUMPh5TMaa53RsHAh4TNDnXqeoZJQzxRrrk54ayWWNAfV28mnu17U",
  "key19": "A2kATr71bWQKbGHKAR94L7P3kfTb3YJhQ8FP57D7jaNtFs54KJ9ZaWAmDT3hys8D9M1qnxWHfgD9r7ztw8V3RcT",
  "key20": "4ueiS5qc4QaYWiz49jVnYcWHcpdULmVnLrRg8fZojXeuKh8ZbzaeKGAPw33QJxWQrSuzYctBktQoZUDgGRu1o7YQ",
  "key21": "4XDq3Xp32vwezyFmj7wtK1ryCcFk5LYtU7vxBbttRZx8g7qwZPyLGxqkzgjsvbhJBbPQeuG5TjFzq2gr6faDYWxe",
  "key22": "3TeKFxSAixSPEATFjWMUa9kBQX7u2CHtxEq6kPLqErM7h7PmP9LZJESGcYZN5RqjgGk2xKJgtVft8LEmd4jUZKKx",
  "key23": "4m2Ur1UfcxowifcmKF7dBQYUfrsVa48EW6xr1q3izabPpBQKpNsAdCMgiFhiYmsxTxB6KQFfG4Y1DRJPGVXk2pvd",
  "key24": "2Zmzsk71a2dQxmd1Cz5pTNqvv9tz5bwQeZMqY8sfWQvyvVtbwCrHDa1u6U3swuyANR3G2yHAbWs1fG8FnW1toey4",
  "key25": "whFZfsiVcT1VZf79f2P4XNXnG3TXqxbdvZZh37ZxbtWa8gZY5LjDrqRsFCn6gx88kb6CxyAbJctnZPt95riEBUm",
  "key26": "5sZYSCHveARFyWSf8rc3oHovKV7trNid3b2izhP9NWgAmEEpDJmAQ8akk8a2tqebpXQ3QDeG957hWw1moLBqXULn",
  "key27": "3m6D11R8iWDyi3Sga9kvB9Mzv8DMqGMA7JNfqUgepyB6hcdZeccRp6SWTpMphhUv9vNi69KDsBcnsBxXkrHobstc",
  "key28": "3jzkwkpPymkPGTqtYdfAN5rZduZjn9hnn3WrfbKecHv9hCgkMrAbpusVQogXeZb5nYUT83kyYWwDcqQRe22qmFb"
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
