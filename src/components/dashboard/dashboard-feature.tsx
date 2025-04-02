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
    "fjtGj58WTGedaNhREY3sH4abfy24hJixdmqGEFFVYr7g4P4uByt239oL4PPDMgAoTKn8jenrd2pNLumHdXhGTbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Sd1e5hhG5EeUGz1Jnag4imVAQXvgSP2Zsh8SJ53kL4H2T9dCpGZkk2Zh63VJyJiTJyJ4NEZ4EPixY86444MZf8",
  "key1": "2uXoWkV7CbZXc3z4dvQqq59L8Y5HDs5ZJ61xm9ny74LiLGx7ieREqUkE7wo9Vhu1e2KrHHvmbwkzn58ByffkvitQ",
  "key2": "5tgyRPgGHMNNXpWYCh3Sip9omtXL6gDQZgXria5H7vxf3eLb171cRm5mUnszuCPLWWZgUqjTbgZQNdWMZSuAiCQf",
  "key3": "3T7nhQ6Wktq4UXjgNdkaLuTiSskumT94GhnabH3VgwNPXQXwb5GAYYbbZGF7pvLbMmor2cEyz1S9a2WuTxQJHRHW",
  "key4": "5qWAENeiB8ffpvtRDmpTK9Vuc8PGURXaKZvbMGYjZjomRVjXw1MdKr92FLfWBaW94oeQ5RLZL9i19rQJ1b7SWN2q",
  "key5": "2oacff5Nj1LMbXGP7q6GhK1mTzh5uhwZGv4NRruSVKLtNziUeGL2P2o5WrqDhz5hZosx3689VM4wtfnqf8dukH4r",
  "key6": "4GCaRS739AGSAhThDnvLV6rGh3xqR7hxzq6EhL2h9F6BTCkV3wD8ZtQsxnDQGLVo9zusE3KXLXeWG44RroMrLCWu",
  "key7": "3JuA8rFWGisU8tqjdveLxj47RtNpUovk3Q7pA8kbMryd3Rkrmj67X2wJPJzteunrHCQZSC3UfJEHEhUhoYauUbYa",
  "key8": "3uTfHd7wU7yXZJjTT6qQgD6Q9Fsf2TNteHpJKqekNMqSUgM8iw4GigdwTEC63pHZYLj9pSfTRnrsipcUuxsf2B7X",
  "key9": "23JLqWxytBEBWJipepPjKLKknapogXszhjqzsbVueFakKXxBkKFgdvNXyJEnR5GACzQH6D94Cd5iBrcxJbKDCwEG",
  "key10": "3k8FApdwgsb15RKHSV1HguC2vv5wYVu8hVW4eGbmWTz5dX3EdiC8nDGUUBPyWE7NyXBDf1DAaKQN9Wss39itUewC",
  "key11": "tKY4LQWbukix8p4fnKukywXYLGY6yeqbYqR7uAAcmoWH1ijifpXDuCrMVDr8bKBWic617Mx5r5UcnLM9uJuyrEX",
  "key12": "5pFQRzRNUh6LCD7y11PepoqyKYm5oWpTx2qkCpS1PhTxe6rYHECHfNskypwWmcK6M132kqskLkdSBL6strieGRYV",
  "key13": "3M5AUxc7W7G5wrXvUTAW1o4jsa4Lmdjqn1RmfUf8ZwnLPWJ6GyXcogxTWbYRYu4WjpGfh2D7xEX74GSuuqfod9Cg",
  "key14": "5sz1oY1CUgd2iHhojUBHbQ2ASG4phwcH4RKkLeecg775iazthjLNaDmMR9ua7SjdaWUPmkcHW1wsLJbjun5GZvSA",
  "key15": "2gMsSppwC4BExLwEVgWZ3iRgNAC2wZTP3icAyW8aStWmP2zrtzD4W4SM7hrLnrfxTQVfEW7QKbkeUBnNAXzxK6T4",
  "key16": "2vqtt5r1sMsdZEtv5oq5VyTFUEtxg4EwghysKyVzHaC9oJPTiatQ97LsnQy7XCLLFyt3VsX5oDAaPBELYT2SJhuz",
  "key17": "3ZaZm8E6cLqqCuQBXu3W29KCY3JS6CjWNh3AsEcGsXFpfXEHEAKVj2QvskybuaBUA9VSNGcu1eSWdMXJYdtAJdB5",
  "key18": "4cXz6e5kVYf9qQdCffX9TcgLZi7AEMsiNEefPhV5uMTySGD2phtbveKoJYhFBevumEXFpxrsWxLU7adofEN7SfCP",
  "key19": "iiu3ChBGy55wf4mBSKNPxKyFyYrJJS1w5HkF6iK38UeQYzbPN4GuasBcY8wzrvKFzU4b4k8z6XdANMxNtbtgpqH",
  "key20": "4uX3ejeVY8R4u8Bp9rer5w5FWFUWaSuMrBsKNPhc7etB6qoFNZTin3PzV4AxtXzzBVWMH6GiAy4T4bYe9xzav2tC",
  "key21": "3Mep3WHgkGRK9VPvoLiYUUD54pRs3gcsognknRvgzSwcWCo19dSeAqJawqiJnE8jgSZzLqWMYqu9xfY6PicysT7j",
  "key22": "56ezMtjARUbBYNqja5Gj7t1Njw2ZEgcwNt9RJeusJz7TyLvCZoKdgEB1BTrry8YH9km2eDrb8ZXWf5WZzp5Vnjwz",
  "key23": "4F44Xpab4k8KWayaHX24YQCDcSUV1GxXAfAt9f1e5TyUfKRkxKqvhYp7TEdmsdHjM1DdFEKbNCHeNuk8sizm32oz",
  "key24": "34HMgngvS5e8hu39Qycq2Ed2oxsRZ81XYbDNQHFDhCnRZWLnchqqELSLCQZqvAcM2HdkmzzbRjzwc1QPuxfK13cA",
  "key25": "5cyr9yAc7fE8CDEcnBbF6mwcqgLsq316QacW8Rn7zY8ydknrtdTuTzzeNGTXfxDmkeRT9GF8dzq5J5qgBUBPnKxY",
  "key26": "5ajKAkHMzEASq51c2Se9sEcB5Jcz2RQo4BykpY6F9bAQGLERyFmq9LZwBDMgwz5g6YT9btXUdqQeTf777eqaFyvr",
  "key27": "4HQhzzbmsEJ5qGFdBchpVysv8erWHw5f7R8G4aKtpwZAGrDzzGufmFGT6ZpWL83n9AyB8TgC2Qak6ggxAef3MREe",
  "key28": "5Tj4QDVJsLf1eFPL76XfCaSfuiva1SweykiSNoahmBrqC5ymxnv9RLjL4fcZgXoupi4cM5y5MuF17PoiKLGdYrAu",
  "key29": "4J429X51q1H1BcCkVKuc5zGNs19SR9ZDRTBEoqA94GgFE5k3VZBwAwhUs8i9x7haTKFkkYQNG4WAGi3MsssppL3L"
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
