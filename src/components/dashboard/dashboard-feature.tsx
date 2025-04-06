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
    "3QsaZfUkmpsekaXFm1aB8Z4Y8sumqjCVY5bRJeNkP2sXPepYbLTuAp61LwXg9qPd98crxBha8gD6KCjbKwzQtHJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ry3z4yNjJFFMC6Au5V8dxyQ36tnvU8SfpWD7hnbr32Nk5oyMPz2RyWBAPgaKbpWsaWkiUxtYRn6G7QQWHd1YoBd",
  "key1": "26j68FStjSdTRQQwDp6u8f9z1BYyHQh9zzp59gcqMcf3afkPdDVGRk4K2Bc3yJRtAt1RDiVFP7z9dMgGraf8MW6Z",
  "key2": "7CMuSBMZm36JUFs8qEadTHAN8nNLQRkYJaqHcWapRdcXvd8gdvxvsTdmu2hnuJHaJq4MrdLYsAqK9y9K1LGZBFm",
  "key3": "5rmcq721fgfzqXTPMWb5AtFTVTCLDj4H5jgLL1JVXmozjiy9HQJ4QjnS9ZqiBK2kDJEPXJKh378tyFoSW6xQ1Uug",
  "key4": "3uFjmaTofCZ3JtPEwXxZwYCbpLSazEuT3AGfspjKhYYjXH5BLudewN8eQEwJsBBmjik7ombTV2vLa9Vzwrh1MwrL",
  "key5": "5mFGAHv4pBWfsPva8WoG2J5uqiHHCgwfZXy9Rp5edhzffJdhfHFxPYcmDB8W9NqRPjmPaSJeiQfZ8dWF47hHNrBc",
  "key6": "26mH56B24cfyHsK82DYPouxAGMnAsDtUABSqPLV9SNQTyzCPyyFcRwiFMXRfdmjP9go1KhfgoaGtS3XgGwCTBC1a",
  "key7": "54Yzzofp2umu1iNWUjMTZNdrJhBgAMFAdMQMcNT4yqkJo2wGkEwPUhfx8q8NPvZoUZsN9qaHCzKmnu5h28mTmvE7",
  "key8": "ZxVGL7wCENBXtGarZwDqFyWV1uatwqLg2xv7diroW9TccnFNXu8ZVB6RRXy33wBxFXM47reYxF3vuAQizVZ51yW",
  "key9": "3Yxzew4s4NfmK4hvYoKQrFJg3gVHCpsb2SzUiepjU1GXfFK3pRSJDGTDkWF5FwWK9DjwBoyMe4RNHJrNFwKLE9dR",
  "key10": "4NfRoG6dFGoCXZyPYmPiCUxCsJg64yyAXfFEqGraN1PF4bztzsqpVHzmUE8SjCHuxnSdgWgVT9nEocA82ZUPodTD",
  "key11": "5U3CBkipUafAob3iGaJwpPNesRApqfmTgnqGDKs4R3tdgE9ventjamHuJG3Sq8jNaZyakZU2JEds4QsjhFTF2T24",
  "key12": "64wtuhp3Zj1Gumt6z2kGZiqLvvjcUMmR7TbDmPATfBWfqwkTo5NCEMghDe4iqQQhi8VTqVrAt7eHfxKLgjTKMnJd",
  "key13": "5NkQFYyjua3VhkKBadJChVzTMPpjqarZTPgxiNgwDe2ZDUpxgKbQbB1AE8gdeGF4dif7XCGCHimrdz2HUMx5h9c3",
  "key14": "3ScWNnc9GAogxPP7r16ompAtDDWc2v3qP6Rdwn3nLx2gCud1FDoUK5HH16hSuALpfXv6s2WzkPwxA2cebfXi7K8k",
  "key15": "66ynXq2YEeXq2nzBTvxMY75fi3aEQMKH7Ee8aZ8XaR8YnBs6gBXm2hwzHDVYGPonkmToEpFP8W1sA2hi5QuDQvTR",
  "key16": "3XBk3HFsK9pfjag2ZHFc25Y3syLABBx6KNeY1w3nQ9tE4fWNeE87qbmJqXddV3m6MqJ3VgPXpcYKVzEuN5FATh3s",
  "key17": "5mWEjTp6ASt1ehfp2hn5mbGQb8V6aueyR6LG7zqLxrWYxiKgmsX28435ejXWh8u512QisrR7UyDRS2eRND1LDaYj",
  "key18": "oYCEesQb2oaK3Lbq8WS2CnVg2LT94Rdaz2diAuh9hqcaJV6kut3BKJGaSPA2xCtFHesai6Jg6YRCn6iUMATgfdf",
  "key19": "T3RpiNXfURLyUCYWZkgHuZfXLLYrVgFA2SnAvS4c8FjPR19R39KRyj4Q7zwBoEmZNabeDAecqsgoMwjB8W8xhmw",
  "key20": "3VChpbbxJAbNTAcBvn6kX28hwuRuoc7vyeCLZuYSqzEshGoMFcsYHMeP7zHtfxkGAzndZuhmip3FHQ4i24LiaUtL",
  "key21": "53f9Qk7o78DNQPV4t3J3cZcWzMhG7Eizo4uhh4pnVThJd3V5vqD5S173nygZtt3RJUdouGfx4FrF1AsyzVxPXcD2",
  "key22": "27mXD7GoTgCxEADc8Qv442KjgfYj7nm1yY7zda7xf4VTScHewYRc8dtYQZBnoKK5a9BUxVCcBnsuBDrZyRHAthQU",
  "key23": "5yvRHwH7tVuCstRoe2m8BSskLs17VhCkEt75b9iUNVBiAokmKKCkPPSHxVgbNpdiGeUUxqipWXhWq5ap4EYDs1T7",
  "key24": "3Bg71pN9TJRBwMazb56Hx2MBM1trCmRbpYpSJVxLsWcTwLLYhRiDiUpFaxbUPvXNfXBEVLgugt4wvKHZ2fqh9Nqr",
  "key25": "465K3a4V4XqEr4doqjTVqk1pLYgT893JvScAP3rbSJnK3mfJcY7PLuamF4YKQX8XYj4Jikauc5gsT5vAVNSgMugw"
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
