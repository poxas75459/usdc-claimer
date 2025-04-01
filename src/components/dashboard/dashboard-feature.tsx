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
    "3rcrvcBwGgsUUdDwiEPyzpBZETqxYSFNL2iRoJQ1vbu7a5fqef5F92VDpovf7yQhvd8Y9FsDWPb572PqjxY6AmBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YQ7uFeh9FABFo8bYyUT4yVX63KYWKezJgbcDTfSWmkra1EnRsm2aZBD4SLckEUpU1r1oZSxBhq6WQACTp1VBuBu",
  "key1": "4x9oNqFjSofSRQYVNZLJfdoVrJw8kKajQkYZUmg1JFKghifJqXToqgdmoBHyYunV2vSLZCxpHKufrBug3geDQWn5",
  "key2": "44m7GEsetSt1paYn27xN9oURNW2soPD5PwgVtj1PiAm2Ruq5Hjzeu9y7sJrgGvFuKBTC4gP7GiNrwPRv2EmbAVUY",
  "key3": "P2T3Pt8RB6AML8H2pxCvbaTn6vyaTyXrw8gJD3UHHBQ8kmv45RzYKWnsDnbqCD2FKAZT7JWrdhbb4AY29z4VHrC",
  "key4": "2PiNuWGAuVeTeDqouYdygT7AdCyMXMxM6w9syRgRriDBmkfUG5FEXa8M1mnvd2QeDCSaA6XpbGtPJ1sqb8uKWihc",
  "key5": "5k8P4gExHYHpew3DV5MBCKP9Pc1eJVxaicgTGCCr2wsZoAsVDx56HQTHnBZkTJAwUjvrX4yqgbB19mWfSujgidrm",
  "key6": "2DWhASNJs8NWwkpVKsSZdXErAn7ELtsd8Td7rXcFFZbmqo694LMjB7DgTSGtpGYe66PFscLENnLYaH6YZrcPywoZ",
  "key7": "3YfNtDEqihfrf8ZoAdPUdddRN1Y9CC1sDYcN5DK14vAysLuy1YRo2w8KSRuLej8pRNtS4t4cEMRcL2GWfEctQwiQ",
  "key8": "5JaGBDQui8mApu8x5ABNKhupKBCiR6yhLyCkakXyMZU3qDdHHJ4fEUs6PgMLqzuS1ev4MPexTD3Q9aEYyf4Qh2jR",
  "key9": "36hpzn4PXWaCGcFK1VEtB4KWEUMNMewvQBjXswoia2Eh5NeY777S59fgwv6NyGndghjExczBgpJEVkYVbWhGiQFK",
  "key10": "5a55JEPE3T135D6V41YEby6t6Ehba9QDEoBjYBXqZh9ASkPpaqdT12ABAkBx85bYdmyXp4iV9v9t3qX8qspfDXBo",
  "key11": "2Uo3dsYUQuDbA3EZ1Kn7DyPLfSw2NZ4L1trDNAkJ2zU9QLqj2EFqudLJq4Hzs2rAZGasdGTuhg1e6NHeNJzZ1e6p",
  "key12": "2wfu9bbuUJmjHsUs1DsKoHwjXQyDGFiL8nsbme3JvP6MomcYzaFU9f4R8CRR2qBkF3ks8ht6uNK1sBNwB6QCBoQc",
  "key13": "25uXLjE1YRs84FHavfbzouceorcqPveHR2xhxQGYeWenbwGZSLPM8aJGmHcuLV7xgD5BCHLs7T3mU6t2UXMThEis",
  "key14": "4PCDisGAL5aQPZSPdz3xTrPKMSetD8fRoKvaUPZuXzP3ToSpHGRCLLPSkwBa4Y5WjMWQmTms3Pt8UPiAuFs1GH53",
  "key15": "3FS9chTau6R7ZwMnZvkj4gXf2Jrt6ygckU4eFSyk3j4vnpZaTJnJCyC1Yqq7x1ZaARmCGASbrSFSgRCvBoCgU9pW",
  "key16": "57x9rBbuwKfPW66ebXJdwixt2xBMHZWTX5mSjXzULJvsoGVy44meMayBJtyiSn1dmNQJsej6QpYckF65xBXcDxWu",
  "key17": "3JVFPhFsLzS5m7rCmH1REDZmsK2Vyv4QFdFSdMM6j3FC9gjRkLmjGfdab59zSarik9dB55AeQY14sfHaJi42aKro",
  "key18": "332Jhh3c2XBCWR3Zh6o4KHm3Y1ByWW2u4pVWHw45DCeU7NaY7nRw8Mh6G1s8k3crC6jj7A6G8b9qpcBeDMzJW328",
  "key19": "283ho8nKNL7uYPhVKu5QxLFqg8bxPxM4RPNxxFTjCKSUFer87euvef1G1ZuokLFbRiNWgy9F8FxkukXryLpsw48u",
  "key20": "4Mip2k51aYKi7k6DQ86XGsJiHtWMWHkoMsTYAZP3KZ4sL98HBvYc8xvG2JS8mP9wG57LTvfyEMTNNdmVA6DbC29f",
  "key21": "2zSrUGPpmHhVRMBH9jxnUNMUygjrFCyMdhagD6o9VJjyxGT7cJqRMfxsxucud3U5v3zfNSRG2iQM88oxRPAPkqsR",
  "key22": "4ueZ1mfLLQn4fQruLqLpUUXM1i845AB2j4sWsDM1LsuAGp6WKEadwdAKzmB1aJgussei4bSUb3ufLRT245hTwiYE",
  "key23": "2oTP1VxHiMnnj1rMdnch2nYtSbsqYYhktXyStcEQUFXzRJi5j99BV4Emvwc29V9EW1267vJUUQZuUCAyEKPkLRQK",
  "key24": "5oEfK7Pw3sRE4SyEtp4we88isW5h1JGzEyYG8ADv1dSjk44fCguhrwxPXYK6w6hKRRBdKHtadVbK7A2d8Sqeu1yn"
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
