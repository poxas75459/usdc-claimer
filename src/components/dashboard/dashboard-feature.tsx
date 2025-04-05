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
    "5dRcN3eJeTJeC2bHR53H7aBAqFvCbf3mZ6RewXXHFmzKsRG61BkuQYmKjah24rFiGf7X9xzdTUcw4TvXptNDPrYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eSbMNZN85qovk51neyZtMwXeZ8mux8jTW8RcG9N753swLL9BUZkuQdtev2eK6vpURdpbdyGxKCL3URJzFbPpbCs",
  "key1": "4pgcWUV5RYdsjaamtHNLpfoef9nu5VUuKpPypvSemkRx5Wv96V7sHY7kKQaaAdNby1LbvLnwTGeL6yUwQgJnV73k",
  "key2": "2bfTiF7M6wnAWiSQrYwBwuCByJd4eayhqeGCutXNjR13X7ehCpSnuZLwknYMtzKgyPVYvUs2Wp9u9ktsSjydPEdW",
  "key3": "3WX6H59ct4q6YJV2sn5EFDmdxcCaNDigf4RunRnfNmCUDYi7zu2yLZhYB5uceDcQt7CaRWz4Yr69MfkrZceQhvo9",
  "key4": "QgeedQVih83B6ZgB6futnnwHy67XnbFW4koS2axisbawwGQ5uDhq8RQqtXUhoEjahHeWjW1tPWQLfF7wKk2W2hX",
  "key5": "3friAadJinpDMY1uSUGHRschYpNEyiPG1FYFPdiAd5MSyviUYztCaSowyq5m2yktRaQ13XMC3sm8etoDefGc77uC",
  "key6": "2ZFhsYo6oVi3CTqhLrjjFid2QdJCMv3uj7aSoua68JZvrRhCVzRokdi5qxmGEX8U6CGDWGG3tUG4UWAJ69cUmxbf",
  "key7": "5QwN21Za4grWeGnJrbu16dk63xQMnrS4WNmvzmXk2SUAdAGbEaHqFyLdB7eJjZVtZxaf69DxZMYKSZFFuguoJcdV",
  "key8": "64srPwUQt1ixEeKP9jzC56TGCCXgWAPpFxfUC1hbVMqp9roZzPdfxeWWhtRgRbjPVKVr1THHLzvvKugZXBpEdjNg",
  "key9": "UGNWPFtLHuLzTh22kXffv5qzA2snoGJS1vGrkT3gLvVaxFzEMFChemMH6hUabNomHW4c1zEYsC3Y4h4CtxiMCaF",
  "key10": "57zuSVAgEsU6biGc1tKkNA1y8g7iZDJxRtfjGCWKzzP3rBiMkB9qa3uSDVd3cL3TLseiRjM11Gf6uokSVFJFvhmz",
  "key11": "2F5xsYeRKsTVwcSTmNVHskK3dZ1HWf7Ae8KnsybdA9DiqRKY5URu5z37WGY4gjWZW4dJUVYMyEb3aEgJ4eQQhVuF",
  "key12": "3ejRF3yztSkFep7dojfMG2ch2qytQbGj2r6igHuu97ugQS1TiHrqejJUiNiwCzpPcmJXtZ2oXrCLK3xeJPKZMT93",
  "key13": "57csmZXK1ikwwXqKdahP4VqjHp34daYWptF5vGURbxGvF4LqSF9tCvZ7ReQXRh1tGY7sojfGY1hZe6piU6Y2nGT9",
  "key14": "5kHEv5LCBmUULdECVJ8tVMeJopgQu881DWoAvuyiyx5rMDBipjBBfszBw4mjQLyTFDgERwK4czZpZ8QwAsDmncQA",
  "key15": "329UuaFqBNtWNzXKwzz9wMr8HfPzBj36ip7zF6ShfEtdTrw87r6k8FjwzXdBsS9gCWAEpid8he2Hmmjwjx9VrcTW",
  "key16": "3A1S6Xds7aRDzXjLi4dt3oVKAxmCA5qoHnu1xgdXbWahpxWt23U65Pqxo1f8Gq5NpArF55Rvm5noikW3vKe7FiDS",
  "key17": "31bP92XrBfjHs4kYGV96UMBeNcBQuxBoyN2yV2pcxqPtoeBtKthhZ3FQL3LVBega9uzNQeivcwNha1cTm2L89og8",
  "key18": "5wDF7fuoM6MM1z2erTHrLPmnWVhxRAApS4ofw8PsYuEzUoajt8cGqbRw5PekberWCKkCtcfmX1RfXgeC75a2QJ66",
  "key19": "97mmzkGUPCZ6GxPobeVkvQUrRHW4YgNBFKHKMSSLUfrxYQCPYqHK35D2B9LWyfGF8pUnBogHjXkK4VXypANYNhf",
  "key20": "sRmynSwm7Z7A5D1SnbzNgQugMDqyt58R17yWPjBPmQ6yc6fsY61vz1pMteAruv79Kgd8n7Kzz4y5Jp5zCj3uT2F",
  "key21": "y6VvXpGm9xvfamEsTnWRjtf1L4YqipY7f8HWVgYBdn485nJWvfu88bzmZv5q12g543NUb4kEvnh8uaEch6jf9Rr",
  "key22": "3qi6GsWAbNqNWp8jS2oRJLsxduLC2zVG2DmPVPeeVea6PoEUqfDgEUTdF4PkPtzJU8B7cyw92rT7zq17bZofqT5A",
  "key23": "3hismoS6H3xgf9c3dkKfHaau2gW3DDhy7ryfdLc5D7EvxMjteE5oDKd4DAkN9R9zL3DpG4nayaZaA3YqodbQa12S",
  "key24": "3jru2HgrkKmYxtMXP1SKm7Xd74SLwFiki9ErkjZyV9xRSpXychisM3GiaFwPwmDDBM3Mj3hXfPE8WwNVShYmuP5C"
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
