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
    "2MdZyJH3hcnAAz6wseBEQMwNRpYM6P2J3vwzmMWRmLG75RFk2CgzVrNygXGvk4LznrwPLaFHSqADQtEyGP1qCyff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vWy2YaZkhSGbGxTv3KwTRAuY85TTaMJRspPPGezGMjdeZT88LeqcqivrewvMxR8JrN8xdMmPGmwuV5SS9Gkaywz",
  "key1": "3Wi9iPEFsP1Hr3Sh8dtBiqJSqj3MjFqhkYsuFDkMtuUMEaUc2DY9sKxcyWASmE1EgB9frarppzZtHtsdY1dhMSvB",
  "key2": "4y1q6DpQFnVryY7SSNJTZ3TCZoQxwZqx3Wtc7eMqZQES5gNnminmwwAdP6wP58GpAffPUKsZXgvycME5cyJDr1p4",
  "key3": "uQqfFNdUSiQizMmr5BbPfznB5CZUqqLDeuVXPwNHR5g1eQvNBK5b3rMwygn1DKNpUgac66x4CPr1uddhqPvLmqa",
  "key4": "32eD38piz7m1odaDsy9nKThei14fMDzAiQykTLbvXpqkpVZnWD7mdL7UkCRuV5DT5tCe5gHkADp9iktyjxGZqbzh",
  "key5": "2offf8ZdyC56KKNxBeoBTxzkgVx5RMFiGRYZM5dwNiSa2HqeJ6EawvmD9fuyRiPFzK1wsAzWCTjWmCcXD3k8q6Y",
  "key6": "WBTVHyC5WfHh6mBrSoLJcxrjEXm2C8np79xcjdZzYL8KJkYeM5Gaa3PjM7FC5JbvKrsmjxuJ9SKUx6gAbrA3s2D",
  "key7": "X7MyBxUaKLnQjrv95ooLQopv4i1Sr8c6oCFDZHwQvfT8k47V8t3RrXEvekdUjri3yTRLzvaDzgpKYTpxVbfW7Lk",
  "key8": "4myqGSWjpEjHze6zBuRH9exWSfkVTbcWcuYfukU7FpGArXF5yCzaRzARmQnhGzMYrF1XGDBeC3kNjvfya8JL9FVS",
  "key9": "5A92asFE7KzpbnkibBNQWENpKavtBzXjw4xueutCep6rmdBSmC4neDk8URLzbpQRkE35xzPqorJFwyDTQgGfQJoe",
  "key10": "4xPkGjCaGvjnX4LmXyys3NytSEuoekEh5VLx9UGEpd1yGKbQnbTbX2ADLSDzh9yN2aW4Xy87TGdQux6MYBueK5E4",
  "key11": "2dtxv8xvQLTfNBoFefzT66DXVW8gyoknQL9h9SHde45jMtTZJKdYDvs48LcYfzR3LxioxQYfxdRGGrP5aGQZk8pb",
  "key12": "5MBr73ofrmQvWURKbeYKNcNSpv5g16A4DFEUtVM2mKcdgMpbpXGogXATAkdtXyb1A7jJFdAG1KAGWjzakvMtFQEx",
  "key13": "2hs93cUnz9jj6v7FA5NWRM6j3Z6AABeX1TJwBf7e6qedK6ivTtnfBJrjB7N9YmKYKT9cxDdsJySCEaFraWPU6EPc",
  "key14": "5B3ZhgDij1gusbCj4N3NV5XrrDJfCpi6PR7WZeEbqaC8oxjuvrCyxhRSXPQFJjcaKPL8XZGk5t5cPtuXg18a5vkK",
  "key15": "ULczzJtcPCywMHJ5UEapNt5sEBAEgP5zjLFWDUs4ztiUBX2VSkzh3mcA8bv1TBxWdAi6XbS3KWgYHWTwx96FdBF",
  "key16": "3NpUT8SkjAe7aM4hEnJ56XTKBbncGbstgcnnYtXVYm8kycFvC5Ktv98cSNwkFMzsfA3JEZiEmFGC3Mv1EBXpdHwE",
  "key17": "hf2LFDJmbGHbZjiRoZhsN2agVvQnWwdRAp9teznkMu95Po7gNd3y9fTeLDRxSy4zyR6uJGWxS5sNCwJQtxv8GJK",
  "key18": "3maosD2siFLdZQY1guzr5iFypqcBVXKmnQbQxGJZo8dvbmZAcjtVe2Bj9RTr7XEGnTW5r8D6HtFwTfH1GS4z2tM8",
  "key19": "5NNfMLjaqJtfXZJSGovb5TfUxe5zLy9TFqxKxJngS4HwsvRrAtzAW3LzP85ZagQHMHRXsjK6hxdfBNdSRHKSR645",
  "key20": "3iCaJzrDghUFWi8pccQi1Jik2u3DdziWra8b5vy9BARzpZfJx96KCqYrvL3zBDokAmYyggcTS4F3U6f5Qkj4hVRw",
  "key21": "5HQh9WEv7MBi9suzcWU1YnE4JGa6LCosR84jhiKcKYR7i9TnrBCeV8kLiW7U6XDeFDpNoZ7tzuLuZYKzUDUU71wf",
  "key22": "5AYjYH5jZH6A6tbHfmnCo7ERAcjs35fcMnaZaH1Zjotz6K6sVcAtcVrax9etnQxjnuupTgYp4Vc3io2CFd4kyZwx",
  "key23": "4cPLetsNBXHEWwqCsDCVV2uGw4txs1GM3bf6MSrVPnRSoidz3sWEYnoSxxgUV1gckWw6S95pkifT1KFBLM1YgZnV",
  "key24": "uMuR6etQz6e35hqssx8vCXJgZiDifXCRLC6JCbMTH1hbDRKzxdX8tkphW61Bj4xS49fsfj7dEw3Pr6rde93XBDx",
  "key25": "5qC45y4of1mD3353LHmsbQQa19y5LukCXBxtEy4hDYJXxo4sAC7nGJxLEuR1rw7wn3j9tJzrBH9wakmKXGFJgE9h",
  "key26": "2Ph6o6CxWWSzwKdxZ9wi6ovApVEhpVc71CVf4Lppg1s1sT7M97B3AzCEy9QsxRLzprKKhbf34VHPVLMsEfsu6Koi",
  "key27": "7k41roSmY6ZajwRgDs45SJhSTfcSR6nx21Vyba2wktjptvxiXZvsL25gFtWtVXqVWz7UTgjqQBg6hNFSKbjtMX7",
  "key28": "2iigVfeK8Gm9pUHCxNaDzwNpYtuKc87ScRR1Ke71KRt46KCvZpW9JuSMv4K8jdjpRqzweVkvpZVmZBjVGYHaXdAP",
  "key29": "EUTs4YJpD9j4SDBNEagVxoNExEwpohP5UkdT6GrJWTU63bNPbeR65e8KE6M4YWzxvpe7pGcEtDoJ1TKAZzg4xrG",
  "key30": "8oYnY5uW2mu5LaMvQgxYumVs44e2d31ewTJgPabmTN9LDbppqPRHv92sRTUKyTiWMy6sHfujQqfTRAyurnK68y6",
  "key31": "5mgNyxkvt7X7gB3So35QVgxUCA8ycmMHn3uoMsxAQjY61GZK8EoVvkLPCuivqUQtro1eoYbmvDCVMiSYE7zBe12B",
  "key32": "45mKMzNdT87knM5xaAKqbWzKPAS4oaUpUdRqLd1Hvhdz5mzfAgCqJgD2N5gBC3ss9LJEFNjSrMHFtWE4U4fDpyN1",
  "key33": "yHARpWwFRJDzhjMfb3BQtpTq4t7opmoFDhTJnGfBsHihNydbcDuoLrQMoc26B5NbFxGjHDzkRpfHjkVGj8Kw5cK",
  "key34": "3SY7yL1L9aJtVSamQCUrGp21o4zRjGh6wsdAoVSWYFKMxZKRThgV419cdEBeS9nwXvcpsYRA4JpEbEvGt22kdD9o",
  "key35": "5JyyceDNUcEvQpR3Rk3TiiuS8gCQ76a1HsAGerhq68aadRexABHjEo7fDEdVqaRQR4ouvmTTvmLzau7oCZRH1AZ5",
  "key36": "2qoGog8GcFCiaabsVwfAaNE4Rg86DMYFD2PcFayqcm9ze6WHGQ419BTA4GX6Rgf9mXdpYm6oPDUxwx8RXeHs3sDH",
  "key37": "2jk8gEqQzNRLoFnrEZVRkAFm9VLPtjPyqsYonnEcKeHLnhK9j4GXjbjgDMwvhKCcYWFMpTSiyskDZc7YcyujNQBw"
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
