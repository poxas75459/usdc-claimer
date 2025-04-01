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
    "5cGgYqECFBuCyM6cmUHeuxANruMBkgFYv158cnkovfihBoS5pbS2t7KvEFy9DDLst7ePDr8kh5hAZCqraokFimqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48pcCBvp7ExGSN9w7M91JhTTxexY1syByQWfNgZ6jYihcEdfR4gTs725LHSzhnDq83tTxcW8Xy4kos7b6SAtRt9S",
  "key1": "3DiVeVRcA48CFtQ9DCWn1df4zPx5SreLdu23CfAA45GFukUwYx9dhFw8wKbmSp13BpmGi2xdCzcRmQsUWykUA8CP",
  "key2": "24jTpDXLBu3jMX9o3ThYJYwYR8dxqpgy9eqG7vMxERoUidDfXfhaar11Tg32joHVKVcM2ATfGCWhvbcAciHnKjs7",
  "key3": "2HgyJ1xXcJNX8agQXGjJVhqcUKndpfBbL2FYwTVrNuyr5FVQQHVGiMtnC4d6xGWCHA3rbSvv7VK5dEPmThR6LKHV",
  "key4": "2EXVaXWRnFYKdhB7qWnFiJLST6ooTNU14GWTiVCpXZTU87QFopN8wNdcWewatYZvtZTactWxuLDRm9Q5NnxST5ew",
  "key5": "jMfX8dSHAMHjvXR3RDEdSGdTTS2YHjHWy3KPsZAqGTpPuL4LxRd8cykfMEgwoPetSPNUrMdnkWQuoZ44t1MooNU",
  "key6": "2Ayo9P38pfb1TwvrrC1GkSdsc4G8biRYvVGaY8ezmJBJK8pBoy87ukE5CcCXRUGdUwEN7uU4dighzWpmt7R8jc4i",
  "key7": "4VDChrSpdEaVMyLKYjTnou4yiNKjzjmLZm2EWrPkck3adzWyejPaWNeysLVfgWDUw54NkjWf85SrcoKNusjmfUCk",
  "key8": "W9PxVvmA7W89xyr4ugv614nocP9jvs1JxSaiDhpG2kUHu839tdRbQbG2SNt6uz1ARVj4AYLW8fa6M6BqehEcxXg",
  "key9": "2J8kGUX6ZPw61vZXfE1pY7HrfkcM1Wg5cbdfi4KY2BA3eXKeRY85CAeqcorL8GHYgQpwcGVHCsFaEnrN4kmGyZWx",
  "key10": "3mGr3DRbn99PFmjnmc1zBBajCK3VB23kWT7hByapcMXrXDMy7bN8skrgQyH3FvqSjmFe5k9jpDxoDCYGaVuft6rm",
  "key11": "3Cn3NoianoAHUE1Krb16ZWxMJ2eMWZPcUfoQYeqQoR8jDAdE9kinr1Tb3pSWQMQEfCvaeQMsQTptmKgNokrPyXV6",
  "key12": "5wirZ34VJPKPbg9kVkjTTp1cacVxYpRQq6pBFMwnAXQZhiKsaXQvFhTSmQVnhrQC5mMKfjCdE6i4nwiMD3M7RpPh",
  "key13": "29ZThBJGnRhYzVoQVrPJ9V14ZqxqgzJThkS8ewGDwTKmnJZnwauR5t2EPoKw4dG3RXCGNW5d8AZxrGPYyt89ysJE",
  "key14": "2yj28U5LqWtNBKgWnULT1HU4KnQFm38GocQMZ88TvP24x8ZtTLaPcM189VT1qDqmPz8owXQjn8smdjWLL8tZ6GrW",
  "key15": "7ZipswV6oKMK62JbF792rD2nZTqS6MfSopLkyw6pjhDQq3vjMzMR9SkKccjB7sJQ2VeZuikX7SLY8PD8HpdGx19",
  "key16": "8i7SVBypP2JTEN2c3fmPP5itFRt7iW68EwPv73JDjDAMBB1Tg9vE9YxVnE6kAPfAib1Zk27T3z1P8ZezENV6zva",
  "key17": "63UNJCMzgtCwSMPQXeChMaDigbdr19quF9H7WeXr6FWKDS83QmMKSsn55ZvmdWqEVoegDvK6Y5ZothrscUKy2Tyn",
  "key18": "3ysPqm4FjVuTXei4nZRcbMVubheEjDqhDQK2ECmSBuJQ7ubnjD3B76eG32ZPUgx21xUrXbBVwEc3pwwbpqLowkz5",
  "key19": "bxeEPSEexxvxTC3Cnapvqaaytz8MTBtCdT3UhkH9pXpm7apahseVmu8BeSoQdEBryhhiyBrurqEbnwd8tNq4J1z",
  "key20": "5KkSDs9SdKvK2mPXT4eT2BxtrZn6TsYFTCaWZCZkBFDAkJ9SzZ1YD9qNzCktop9SwBMZ3VyCz9rNMNu4Ng2Tm8R4",
  "key21": "vSHztpr4kA9Pd5bRZ5DHR35tb659bSCLsyN3ur8ci9RU4jD5G5FUWjukSvhvPPopQHwUmt3QEfuqkcwaEkuFoAa",
  "key22": "3qTrgwJHcpc7u9Krqx79teRpvtK6qhrze7echiUtcPk4fJKnhWVEUCyC8G2DcrwerQGyjqHUQ6FeKEyXgVTY4hgS",
  "key23": "roTHPXb5ze35fdUCRdiJSrUkGiK5tXqhyzmzEKaN6dn1XN4A4e6qDYK7vGWae9j26VEcwpL8iXWKbmp48Spwcgh",
  "key24": "4fJYZ1Crb82VFpVfzAEPshco6YVWk6cgaYcfHHo9KXQFFyBjhDZSkKCJTu7fDLTwZBcie94F9Z48rbc6Z1W4AnoY",
  "key25": "4yfi6o3SZR1XLhMBU1SY3Wur13GyDYfRjA9peNFMj2oM5nM3XdKvot7WHjRa6GAG78QiSoRz6DV2S8ikLvxwMK2L",
  "key26": "3Ff5Z3H9sTZCEFRMHRkTqCPkKZhD6YdC7WNCE5WTjhwbP5AS3ALSvN4c4Bd6WGHoRGjTWsj3ZK2K5PwTmu5dmnZW",
  "key27": "3YK8SSJEvUYPr1A5mH21vB9HimVkyMtAFyLDmUJkXGXnmHnj94jCgwExmyXy3LL8WTgffUPumACjy3vuZnxK7hqp",
  "key28": "JKJYiA8RJ2onikrW4JyVCXorr9m8Nzs1eVMiVsFTLjr4qG74MxjDA8TKRZjHgbudHbautj1GuAnW7fqB1kpWQs6",
  "key29": "5XHtCPTZeM6qf2FhzMfBq2J8mHzy8nhzx7dBbgfdJVjMp1K47DLBxA7G4ff1Ebb2RoTUpKaTwxmPneb6Dxieo1Sw",
  "key30": "2Q7ej4F8DT2G7DKGKFf6A12PpUUvzjhK7XMY8wmTMh6Fin3P1NzCgi3DvjNtXZQQPehoXDayFsLTrV8KBfiX3odn",
  "key31": "2hASfUgPsTVhyNdbywfmbTpW566RV6Jzizj4BAWfPcrWsKSpd4o8vpaXk7yEbWP2hThDTSydxRMBSVpkSazrnkFt"
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
