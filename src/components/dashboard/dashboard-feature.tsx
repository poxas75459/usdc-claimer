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
    "4iU1zzMET3QytZL7mbYUDdAsE7zpMHXSpKF6DcX7KC6VTWiW3ZHUzGs6CkbdP3MHAZ3VvzJguaryZe9qUjFPeFJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2andZpXsVH5SZjAwxB1BixSmna3AXqkQzxupVdnraLhmVjHsNZGx74JxgTxLyXzMCDUW7bicP3LqiiVpFqAdEcnb",
  "key1": "4peqAx9NCJ4xboHMXjJ7R67knjzrQ79HFcAksmKBHXSoRZEfpvXas8nPE5eSewqTk5MsXYgWJFtuNPDE7xkATEQ5",
  "key2": "4Q5RYDmuqBdMEimLosa4regshu282K2BuizVcFnmjyai1WDS8KLw1GjAxJNw1t44qMgjXQSo6ZTDNSrjCGQ3G4Rs",
  "key3": "4R78FuXEJg3NTMgqwRafAQAAxpBB8R5BQbRViK66HcjWL8zDFhP6eo4c5K9qXswY1j7aoZANgFmcrsjrkiBMNxgo",
  "key4": "4bZAh2mm5pNabQ6b9f4C8SzvnNYpMVccNV54EdB6hrE5G5AXxLkPKkYZ8FWEjvYkGaxfscafi59M1QCvZzB9vHnB",
  "key5": "YWA1u9bKZMWgFK5cFPLHMgAgcVTzyh6csVqtvHCiQb8sVopkoVE9SdrcutZTst3AErxVSjPr21zcqDB2GZzjMuB",
  "key6": "6HFdQXZDD9MwnZdwfuUUucYEMegww41hijqbvDmKfiPHgv74cmdCoeJht6DJ6UoKvrysSeFPtNjvbTZWtD3PHab",
  "key7": "FbJug2aoYLKY5RfK7ufDtYWyzgfp6sgbrLmXjxw8iWZRH1aUL2KgMrG74nzQ2tZMJvzbPLncjQ7GqqXK98WiFcf",
  "key8": "2dfVAk11ivudxqcj32MNbdRPQPdyBeM9ZwbNQXe9pfotaGYWSuxKVn1bs6YjfQ8aqMKYPm3NkZ8zJb9b6y9VAPty",
  "key9": "5Ni6vgrrBdRt9UqJpF7bV9hZkRLL72uqLS7dVijPJAjDvNbLXeoShjJrguvMceB8YXoGchxSrLp3EUfTtba2tn7u",
  "key10": "4X75U5qV4R41He22QJampL82JReMb6qSHi77r2BPa69QQjUXgYD46E6Fs11qSkdpkM6rECFKXGNUVzTt4QiqMxW1",
  "key11": "5a2fJbXyL4jdvoLbakt7mX5vSNCPADGs9hKTdq6Xdr6DBhQcHujxC1CdjoVN1dBU7ksf5heik5H74BLQmiJeX73L",
  "key12": "5hHoeixk39hxegpRSoVD9QwRayaK6QxJCSzREKyjMnkQDC5kivYkt256ee8HdyVZ1ivYJ3xoaYar9NYCcFzvVRiP",
  "key13": "3jjQ75urwoKceVLdQszQwxEUtHC2EUVRHvmFnAEPTEH7gLZMVfp2CgZjYCabiLQAi4nExpWaMENBTCs2BWiWbk8f",
  "key14": "3vb9LiMMmj1TdDCuSR6jmuueVGp5b6fPTTSwCXC1xZ33AfJ4QtCn5du5s78txnRF8Apf4eyp5PoLh4xVXXxMCKUm",
  "key15": "LUQdzN4idrprUk3cGvhZ9jjas68axoHHfR9XZRqpRnRearMFvp6X9MsK4k2qGXCEeifLzcXnZQGk5YLhpFJCvHj",
  "key16": "2DgvF6qmYZtCohFBenVbMZGKcktd4Nab7XJNDLjz3s1mSMLAjzBNKHAY4ZPdK8FUUJuAUJXhrE5LsG49oPS8cmES",
  "key17": "45UvxWYLcXUjTsmhAz53BMiuZDP6CzTCk9LLiMY1zwRUfGBvTHBKZQn26Z1zut42APZApCLPTTpXKU1bNvS8sviZ",
  "key18": "4NvB9bapWYNBCpnLa4bhi48SoAgoE9qvzrxXTQRjyasKCRUSVTywXpcJL97Lxzo4zHuNAb6ALR4JCcPZKf9ZrHYK",
  "key19": "2ByTwBJY3oyy7RbJD2xJzoe2K9z1so9KaqNerGi4AMT35Pc6HBinBLX99Wyb7M3XxX6LadEpZyTT9t3YZfLkyRrg",
  "key20": "3xJRLAiGQApmRLFx9C33Hfp4tJgimEaYideM51joYBE15er7cWnRx7sDS5nx28P8CdVeLnFWWYGyt9ytrPZp3b4R",
  "key21": "5MaVGt9b7PT1F38vV4jApejiWsLs1oQ6E7o6qCBVn6SfySvuCvtfWNWXnCxnS8FixXCDTMaoTZFSrJCiUXMddenc",
  "key22": "2FBENpiRv5Wb2YkGYAvFSR7ifRhG5WgVZdKSEZyG1mrXhQXvuk4wwv8vCHiQoAUhETrXy6fukQwrdyfx5GkDHV1x",
  "key23": "4FnpFBgmNgwTXQkgc5wUUtchpzP33sWHSsVMEbinfVJSabDtQCb5S3yJdoNNZ4jEjrDAyMgfNEd6aX1jgbEqJNKZ",
  "key24": "56VfspbLduwDXyRM5GVNHSBy5v3vvTwW62g4fv1Jf1Acjj7LXiKL1S1YbafX1j4jAMRaPRsHkGAZaEWfib69Zp9N",
  "key25": "329mAFMB2fmgRtzKNyMQPzSqYmyNS9SPK14VPt7HZtaX5t1Dad1qjKLgFpjVkA4Y1jUjVcVRxWdUunTqak5ADcMS",
  "key26": "51xwXuWWrGwxsiVmEvtfxU1faigneJZh7EL3FsmsLD6zABRsFkiW2A4UwxSpWLDgre7gxSMRjphjzxxtWvwWS2ZS",
  "key27": "ZibV4cQqJKn8DY4cZjNKaQxhysMwqVXLcznfwu289RrULyQCW4oTkpZVWYY545yvTEP3zL8DYAAxsf8UiGtoBGi",
  "key28": "5bLdYRfHebBsW2pGH6tgJ4fkX89dZQ1PaQ4U2vmXL14eGo72b5C6QDVZWeuRGS75KFzetBvD23KaE5M9Savj3Pff",
  "key29": "EhsQHbmqQTtgruimqUxsWFidzgaxrFn96gjWx3YKhGAseUjq3G4nduk6rCVZHcME1USSoEGAz8P7hfELnKZCfQe",
  "key30": "GRDK98wuT4EVNodpXXK1m5uHN93tRjSLFk2woub7xcxiCtLm6eeTuWW9DPmGY3vkjRLpnMin22uGk3HDYZSfhez",
  "key31": "55oiwiSF6XySLXiTMdTkRW1GP2bL9vWRPnoVL6ey95u5EvUCD9kNmHda8mceix1DNtiE7LgNvdGHYEUpCBtHNhmp",
  "key32": "5wBBhNmkMQQdCfJwv5Hf7gzGEFxUYi2gEenyrQw16rDdvgW8TuakHKMt8D1jVtFrc9iq3LSmU4WW2Nbry7Pcphbg",
  "key33": "4rVRV7WrB7jmigBaLG3BvsQhUuo4t3dUfjy7N6AUZXDbuv7eLpuGvLxJY1HbSn26KZQ7SLmpM2HVm9jumQYUU8j5"
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
