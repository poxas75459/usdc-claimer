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
    "3iNuKksFhocPwBKcYKZkrgMSAcwjpsqawhZddrXzJSAmwmP7VJfjure8QfTCKwxZCotCpRZAmcjZrwCKeukPgUkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27XqE8rBnpnhwigAcqHErSRwcsCaTPV9zuiqQfTbnC7i5m3uhsSHJxaHbK2DYNyzUUF1mVMuqcW6etWJeWNTR96e",
  "key1": "4J31vE1XWmiJjrMsRY68MUEkQoAsnRARLrS9ZFFQvrGvfgb2Lvgvyvf6VRXCzMHrNteb3AULC8D3yUXGTSbzJ5hV",
  "key2": "mCuWGeMz7sw3J74NQ7xwhcr9XDw3wi48uEWjutC9Cmt3DsNDEmU9VtY9UaH1HJYXhCehFM3UkcXSPtFDCrtjCLS",
  "key3": "47MoJNX1t1snAggJqLoVG7sTcc7K9mN6FZAThAZY22cuax6hWUZvnzyNXiyrtG4GCVQQAP3C7Z6BWhtnZHESixMe",
  "key4": "2dTRGGGV8dVfm7MPQqXbnyqHunpmvatBuiz1eXwodJzJHbq84og5UEfEwjgioyZtyEJmkoDEfgz8mASvjGwHqR8n",
  "key5": "3tocc65JeaJGrqw9qfx9q3sTMK4VhpJ6jnmcu5tmh67YeLGVcWQs4Hft2ybtbVZVtfSR9uf2pv4Eg527gZGddNex",
  "key6": "5Q1E4BtYRMhkiLtjePMHXdeJnV4iEczZ519Zzn9XzsisDHY9D1xSfTBmzBMzR6n2qR51qhHkUMf76D5EfPMUhgTu",
  "key7": "2ZFv1Xsp2F4PDZAiwe4QMiKApPE9iqC1vzcv5AaoJQ9RrNgmUCbXH451kUUrg2zoAy2r7m9HHoh9QSEtVfAKZayR",
  "key8": "2d5BqQChKXyuoCF2hugYuoBBPkGNdupHszF3qXpdqccTuACFkUpZoYhWTYemA4kfVdDtcVL7eDDpXbcjj5AiHW6W",
  "key9": "HhvCygM7c8fQjPSvTpjnccZWHb1Z6NRW66phtpYHTd31fu8c4Qz1DkvpnyxxM5gixY9PdHWL9mkBb9AkX1ntAHd",
  "key10": "tgzyS9FWxHTRYSFEFuXNkBJXvtiaZnEtYsTrXC2E6xe6KWNo27zEEQaoFBTUgMCnvsP1R2uVdrq5rMaPbShPAoS",
  "key11": "wd64pmKSFRiKuBAENjsaXUwtsN7VR5Qy9LZP1T9YtT9oNcfhBv7vWem2j9aVMwk3DEnEopyTMzJEtVRPihXH8Vv",
  "key12": "2TCRAUzZWT3LeSG9ecdcqzku85scNgSenArynRopQySdF2M6UkBNJyMAaPmTRt6nyfXwj6HWnhtiNjB6PjPi6D7S",
  "key13": "jWnvxKku1H3CmLYfGS1BiBwUViifXcQMtZr8kzMSi77ieUsx1DGk7hnQM3aKHevaWRBvbYL7woUprcFD8Qnt9RF",
  "key14": "2uYDWR7Yq4tJHsaqQVCM6auMrsPwPui6teE4oeK17wxW9eU2FRbjqx2o2ukcX7b1ci9oq39ZWskyLpidSs9Pyusb",
  "key15": "225GWmdQtDAxsbXdrNMz6wcNrDGAc4jkEtKJXEiUNWzJaJXc6u3TTUGCR54ViK7ZAibVyDPoEZFJuQkMwftB8Hnz",
  "key16": "5EwX4F8mdLs8bEhd3EM4ipWsnq3gpX4NMPmPUpounQPjCwKFBEZWYR6TMoUoZj4cEa3PTTHNzBBEnHgDdSpKNbDt",
  "key17": "3ohz5K5vBcyBRdU8SeaBU5zFdScg2ARzRQPgE45PaS3Rpu7ykoPKCmrDC1UttEQfiA2KY5jRDDJ9kV7WAQRWbH7P",
  "key18": "3te4BeoHbPb3AErXpRQTPNqUvDQZgdQPv9zJcJaVqRNn2a4jyDj2auMpqjvqWoWEF9q8tQ1mvYwmPT8hzdah3pZd",
  "key19": "3dgBJZV6YFzC7T2vpL9XkyeUzE7ePtE3giv7XWknUAYydG1PsD8nJ6VAw6BrXbnGkWqCigrpiVJ2q2gwDp1Yid2",
  "key20": "3ry1aoFwvVxozB7cW78ZPkq9ws1ASSxUphzForWybZR22UScNsJs66NLBF2yqi4MjLhtYceN6oftQWbdxo86qe9n",
  "key21": "5PjvtcSWWreFJwKc7nWUPozNSEVZ4RgW6T28TZxiEXHwhispUjnzT83Fh8ZjrHFFimQCVQvf7LVvpG5izePhjDCh",
  "key22": "4AKuD5oExJYZBRJRyUb18Shih4816iTY3bg7hL1RNpthh1Szqg5ycMZPxmw57WRK2qyiL5dBvPPemnctyi5t8N2z",
  "key23": "q2DKnpTXNPHozhWdfG5eegaJPjrnAcPdStTcusw32GAdegCfGerL9xyarx64rQjeNY7codmTcjEFpdNtEBNDpy9",
  "key24": "2WjzMmC4xZsZzMZPV3JARTC9VXLF7TB6toR8DYh6GGa81m9SWyA686AHWyGJbQ49Sf7UJY9q3fdXwanNEPyKXsmS",
  "key25": "E265pQNBAdCWBmvVc6G3HWZxuM9aJK7u3B33MBB5DHo56eC9t87f83HpXQk7C6oztqUrLtk92v4kgDXLscNseDs",
  "key26": "35U5PUGDrDCwSDTL9RfqL4mQD9UvctL2xiF3di4K5h4gdaPn3KCFhFu51L23sRQqYtWSYNv4w5Y5hKir7STUEQPm",
  "key27": "5AjPWBzxjsjHyJLGDcLs7p5HoLzHzXkb7GUasu9RrQhD8jNYnmNjtnZKf6NEPMZui7krSQDhpiMoeAqSWxG44yEA",
  "key28": "3CAdoKPcKsVSzw5QgdoHsoonzk6t9FwZjgmNd1CNFqJ7xntnydErhAHfLeHdK224LcdatoCcuj46m8huG9LdsF92",
  "key29": "4psYEn8AE5kpdu1BJKEGceHGvdw2y8ofnu4SDfVWANWHoX3LY27BHL7pKvKMjFmR6HdztyzHYeTZQL6dsDEAkxf8",
  "key30": "3r2jMgRyNZXNfekg4vqffL21PaXFHeXGKkbD7mr1fTJXaSBRVVA51dBnvXmY4DUpsFkQeBLTvxQMXGcXpTAYQfLh",
  "key31": "4QsSNwhR24jT7swkjRs7tekykYqKnkV7YNuoQvojNv14neUyY6Soyn7yguE15pBLhoFX9EKvXeoJsAmYwBbctnkf",
  "key32": "4EvdXHexs9ywxQaSuK2GCaGsDWogiN3E9tUKcuYUWewQPEhKKrzpMQfyi1Kbj4Sw2wMVfCwWNLeJPoqL7DD9WQnf",
  "key33": "824ZdfbLzDVqYZkefzLnzgzHz5Ku4489HsYhLFN4ZaoCxXYadZm92y1CPWLnNYdMPiTvX4QzGVDXA2BQRcigTYy",
  "key34": "3VLMGKsn2dkBeTFAXq6idmotFhQuJMAsrazETTg4mT9aUqVYvyh6EXxUqCJvGz7RxsYr3bYz7kGCjGbiCdFk7W56"
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
